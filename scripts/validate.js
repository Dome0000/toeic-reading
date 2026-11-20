#!/usr/bin/env node
/* scripts/validate.js — ตรวจคุณภาพข้อมูลทั้งเว็บ (ใช้ Node built-in เท่านั้น)
   รัน: node scripts/validate.js [--lessons] [--exam <id>] [--vocab] [--blind <id>] */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const flags = { lessons: args.includes('--lessons'), vocab: args.includes('--vocab') };
const examIdx = args.indexOf('--exam');
const examId = examIdx !== -1 ? args[examIdx + 1] : null;
const blindIdx = args.indexOf('--blind');
const blindId = blindIdx !== -1 ? args[blindIdx + 1] : null;
const runAll = !flags.lessons && !flags.vocab && !examId && !blindId;

const errors = [];
const warnings = [];
function err(msg) { errors.push(msg); }
function warn(msg) { warnings.push(msg); }

// ========== load data files in sandbox ==========
function loadFiles(files) {
  const sandbox = { window: {}, console };
  vm.createContext(sandbox);
  files.forEach(f => {
    const code = fs.readFileSync(f, 'utf8');
    vm.runInContext(code, sandbox, { filename: f });
  });
  return sandbox.window.TOEIC;
}
function listDir(rel, filter) {
  const dir = path.join(ROOT, rel);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(filter || (f => f.endsWith('.js'))).map(f => path.join(dir, f)).sort();
}
function rawText(files) { return files.map(f => fs.readFileSync(f, 'utf8')).join('\n'); }

const baseFiles = [path.join(ROOT, 'data', '_init.js'), path.join(ROOT, 'data', 'tags.js')];
const lessonFiles = listDir('data/lessons');
const vocabFiles = listDir('data/vocab');
const examRoot = path.join(ROOT, 'data', 'exams');
const examIds = fs.existsSync(examRoot) ? fs.readdirSync(examRoot).filter(d => fs.statSync(path.join(examRoot, d)).isDirectory()) : [];

function examFiles(id) {
  const dir = path.join(examRoot, id);
  return ['meta.js', 'part5.js', 'part6.js', 'part7-single.js', 'part7-multi.js']
    .map(f => path.join(dir, f)).filter(f => fs.existsSync(f));
}

// ========== placeholder scan ==========
const PLACEHOLDER_RE = /TODO|Lorem ipsum|เพิ่มภายหลัง|\.\.\./;
function placeholderScan(label, text) {
  const m = PLACEHOLDER_RE.exec(text);
  if (m) err(`[${label}] พบ placeholder "${m[0]}" — ห้ามมี placeholder ในไฟล์ส่งมอบ`);
}

// ========== question-level checks ==========
const LETTERS = ['A', 'B', 'C', 'D'];
const DIFFICULTIES = ['easy', 'medium', 'hard'];

function checkQuestion(q, ctx, tagIndex, opts) {
  opts = opts || {};
  const where = `${ctx} ข้อ ${q && q.no != null ? q.no : '?'}`;
  if (!q || typeof q !== 'object') { err(`${ctx}: ข้อไม่ใช่ object`); return; }
  if (!Array.isArray(q.options) || q.options.length !== 4) err(`${where}: options ต้องมี 4 ตัว`);
  else {
    const norm = q.options.map(o => String(o).trim());
    if (norm.some(o => !o)) err(`${where}: มี option ว่าง`);
    if (new Set(norm.map(o => o.toLowerCase())).size !== 4) err(`${where}: options ซ้ำกัน`);
  }
  if (!LETTERS.includes(q.answer)) err(`${where}: answer ต้องเป็น A–D (ได้ "${q.answer}")`);
  if (!q.stem && !opts.allowNoStem) err(`${where}: ไม่มี stem`);
  if (!q.explain || !q.explain.why || !String(q.explain.why).trim()) err(`${where}: ไม่มี explain.why`);
  const wrong = (q.explain && q.explain.wrong) || {};
  LETTERS.filter(l => l !== q.answer).forEach(l => {
    if (!wrong[l] || !String(wrong[l]).trim()) err(`${where}: explain.wrong["${l}"] หายหรือว่าง`);
  });
  if (!Array.isArray(q.tags) || q.tags.length === 0) err(`${where}: ต้องมี tags อย่างน้อย 1`);
  else q.tags.forEach(t => { if (!tagIndex[t]) err(`${where}: tag "${t}" ไม่มีใน data/tags.js`); });
  if (!DIFFICULTIES.includes(q.difficulty)) err(`${where}: difficulty ต้องเป็น easy|medium|hard (ได้ "${q.difficulty}")`);
  if (q.evidence) q.evidence.forEach(ev => {
    if (!ev.quote || !String(ev.quote).trim()) err(`${where}: evidence มี quote ว่าง`);
  });
}

function stripHtml(html) {
  return String(html || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

function checkEvidence(q, passageTexts, ctx) {
  (q.evidence || []).forEach(ev => {
    const idx = typeof ev.passage === 'number' ? ev.passage : 0;
    const text = passageTexts[idx];
    if (text == null) { err(`${ctx} ข้อ ${q.no}: evidence.passage index ${idx} ไม่มีอยู่`); return; }
    const quote = stripHtml(ev.quote);
    if (quote && !text.includes(quote)) err(`${ctx} ข้อ ${q.no}: evidence.quote ไม่พบในบทความ: "${quote.slice(0, 80)}"`);
  });
}

// ========== exam validation ==========
function validateExam(id, tagIndex, lessonIndex) {
  const files = examFiles(id);
  if (!files.length) { err(`[exam ${id}] ไม่พบไฟล์ใน data/exams/${id}/`); return; }
  placeholderScan('exam ' + id, rawText(files));
  const T = loadFiles(baseFiles.concat(files));
  const exam = (T.exams || {})[id];
  if (!exam) { err(`[exam ${id}] meta.js ต้อง set window.TOEIC.exams["${id}"]`); return; }
  if (!exam.title) err(`[exam ${id}] ไม่มี title`);
  if (exam.timeLimitMin !== 75) err(`[exam ${id}] timeLimitMin ต้องเป็น 75 (ได้ ${exam.timeLimitMin})`);

  // --- Part 5 ---
  const p5 = exam.part5 || [];
  if (p5.length !== 30) err(`[exam ${id}] Part 5 ต้องมี 30 ข้อ (ได้ ${p5.length})`);
  p5.forEach((q, i) => {
    if (q.no !== 101 + i) err(`[exam ${id}] Part 5 เลขข้อไม่ต่อเนื่องที่ index ${i} (ได้ ${q.no}, ควรเป็น ${101 + i})`);
    checkQuestion(q, `part5`, tagIndex);
  });

  // --- Part 6 ---
  const p6 = exam.part6 || [];
  if (p6.length !== 4) err(`[exam ${id}] Part 6 ต้องมี 4 ชุด (ได้ ${p6.length})`);
  let expectedNo = 131;
  const p6All = [];
  p6.forEach((set, si) => {
    const ctx = `part6 ชุด ${set.setId || si + 1}`;
    if (!set.header) err(`${ctx}: ไม่มี header`);
    if (!set.passageHtml) err(`${ctx}: ไม่มี passageHtml`);
    if (!set.summaryTh) err(`${ctx}: ไม่มี summaryTh`);
    const plain = stripHtml(set.passageHtml);
    const qs = set.questions || [];
    if (qs.length !== 4) err(`${ctx}: ต้องมี 4 ข้อ (ได้ ${qs.length})`);
    qs.forEach(q => {
      if (q.no !== expectedNo) err(`${ctx}: เลขข้อไม่ต่อเนื่อง (ได้ ${q.no}, ควรเป็น ${expectedNo})`);
      expectedNo++;
      // blank ตรงเลขข้อ (ข้อแทรกประโยคไม่มี blank — วัดจาก [1]-[4] แทน)
      if (q.type !== 'sentence-insertion') {
        const blankRe = new RegExp("data-q=['\"]" + q.no + "['\"]");
        if (!blankRe.test(set.passageHtml || '')) err(`${ctx} ข้อ ${q.no}: ไม่พบ <span class="blank" data-q="${q.no}"> ใน passageHtml`);
      }
      checkQuestion(q, ctx, tagIndex, { allowNoStem: true });
      if (q.type === 'sentence-insertion') {
        [1, 2, 3, 4].forEach(n => {
          if (!(set.passageHtml || '').includes('[' + n + ']')) err(`${ctx} ข้อ ${q.no}: passageHtml ต้องมีตำแหน่ง [${n}]`);
        });
      }
      p6All.push(q);
    });
    const siCount = qs.filter(q => q.type === 'sentence-insertion').length;
    if (siCount !== 1) err(`${ctx}: ต้องมี sentence-insertion 1 ข้อ (ได้ ${siCount})`);
  });
  if (expectedNo !== 147) err(`[exam ${id}] Part 6 จบที่ข้อ ${expectedNo - 1} (ควรจบที่ 146)`);

  // --- Part 7 ---
  const p7s = exam.part7Single || [];
  const p7m = exam.part7Multi || [];
  const singleCounts = p7s.map(s => (s.questions || []).length);
  const expectSingle = [2, 2, 2, 2, 3, 3, 3, 4, 4, 4];
  if (JSON.stringify(singleCounts) !== JSON.stringify(expectSingle)) {
    err(`[exam ${id}] Part 7 Single ต้องมี 10 ชุดตาม 2-2-2-2-3-3-3-4-4-4 (ได้ [${singleCounts.join(',')}])`);
  }
  p7m.forEach(set => {
    const n = (set.questions || []).length;
    if (set.kind !== 'double' && set.kind !== 'triple') err(`[exam ${id}] Part 7 multi set kind ต้องเป็น "double" หรือ "triple" (ได้ "${set.kind}")`);
    else if (n !== 5) err(`[exam ${id}] Part 7 ${set.kind} ต้องมี 5 ข้อ (ได้ ${n})`);
  });
  const doubles = p7m.filter(s => s.kind === 'double').length;
  const triples = p7m.filter(s => s.kind === 'triple').length;
  if (doubles !== 2) err(`[exam ${id}] Part 7 Double ต้องมี 2 ชุด (ได้ ${doubles})`);
  if (triples !== 3) err(`[exam ${id}] Part 7 Triple ต้องมี 3 ชุด (ได้ ${triples})`);

  expectedNo = 147;
  const p7All = [];
  const checkSet = (set, ctx) => {
    if (!set.header) err(`${ctx}: ไม่มี header`);
    if (!Array.isArray(set.passages) || !set.passages.length) err(`${ctx}: ไม่มี passages`);
    const passageTexts = (set.passages || []).map(p => stripHtml(p.html));
    if (!set.summaryTh) err(`${ctx}: ไม่มี summaryTh`);
    (set.questions || []).forEach(q => {
      if (q.no !== expectedNo) err(`${ctx}: เลขข้อไม่ต่อเนื่อง (ได้ ${q.no}, ควรเป็น ${expectedNo})`);
      expectedNo++;
      checkQuestion(q, ctx, tagIndex);
      checkEvidence(q, passageTexts, ctx);
      if (q.type === 'sentence-insertion') {
        const combined = (set.passages || []).map(p => p.html || '').join('\n');
        [1, 2, 3, 4].forEach(n => { if (!combined.includes('[' + n + ']')) err(`${ctx} ข้อ ${q.no}: บทความต้องมีตำแหน่ง [${n}]`); });
      }
      p7All.push({ q, set });
    });
  };
  p7s.forEach((set, i) => checkSet(set, `part7-single ชุด ${set.setId || i + 1}`));
  p7m.forEach((set, i) => checkSet(set, `part7-${set.kind} ชุด ${set.setId || i + 1}`));
  if (expectedNo !== 201) err(`[exam ${id}] Part 7 จบที่ข้อ ${expectedNo - 1} (ควรจบที่ 200)`);

  // --- cross-reference: ทุกชุด multiple passages ต้องมี ≥ 1 ---
  p7m.forEach((set, i) => {
    const hasXref = (set.questions || []).some(q => (q.tags || []).includes('cross-reference'));
    if (!hasXref) err(`[exam ${id}] part7-${set.kind} ชุด ${set.setId || i + 1}: ไม่มีคำถาม cross-reference`);
  });
  const xrefTotal = p7All.filter(({ q }) => (q.tags || []).includes('cross-reference')).length;
  if (xrefTotal < 5) err(`[exam ${id}] cross-reference รวมต้อง ≥ 5 (ได้ ${xrefTotal})`);

  // --- text-message / online-chat / intent / sentence-insertion ---
  const allQ = p5.concat(p6All, p7All.map(x => x.q));
  const hasTag = (tag) => allQ.some(q => (q.tags || []).includes(tag));
  if (!hasTag('text-message')) err(`[exam ${id}] ไม่มีชุด text-message`);
  if (!hasTag('online-chat')) err(`[exam ${id}] ไม่มีชุด online chat (≥3 คน)`);
  const intentCount = allQ.filter(q => (q.tags || []).includes('writer-intent')).length;
  if (intentCount < 2) err(`[exam ${id}] คำถาม intent ต้อง ≥ 2 (ได้ ${intentCount})`);
  const siCount = allQ.filter(q => q.type === 'sentence-insertion').length;
  if (siCount < 2 + 4) err(`[exam ${id}] sentence-insertion รวมต้อง ≥ 6 (Part 6: 4 + Part 7: 2) (ได้ ${siCount})`);

  // --- การกระจายเฉลย ---
  const seq = allQ.map(q => q.answer);
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  seq.forEach(a => { if (counts[a] != null) counts[a]++; });
  LETTERS.forEach(l => {
    const pct = seq.length ? (counts[l] / seq.length) * 100 : 0;
    if (pct < 20 || pct > 30) err(`[exam ${id}] เฉลย ${l} = ${counts[l]}/${seq.length} (${pct.toFixed(1)}%) อยู่นอกช่วง 20–30%`);
  });
  let run = 1;
  for (let i = 1; i < seq.length; i++) {
    if (seq[i] === seq[i - 1]) { run++; if (run > 3) err(`[exam ${id}] เฉลย ${seq[i]} ติดกันเกิน 3 ข้อ (รอบข้อ ${i + 1})`); } else run = 1;
  }

  // --- ความยาก: 30 easy / 45 medium / 25 hard ---
  const diff = { easy: 0, medium: 0, hard: 0 };
  allQ.forEach(q => { if (diff[q.difficulty] != null) diff[q.difficulty]++; });
  if (allQ.length === 100 && (diff.easy !== 30 || diff.medium !== 45 || diff.hard !== 25)) {
    err(`[exam ${id}] สัดส่วนความยากต้องเป็น 30 easy / 45 medium / 25 hard (ได้ ${diff.easy}/${diff.medium}/${diff.hard})`);
  }

  // --- intent quote มีอยู่จริงในแชท (best-effort) ---
  p7All.forEach(({ q, set }) => {
    if (!(q.tags || []).includes('writer-intent')) return;
    const combined = (set.passages || []).map(p => stripHtml(p.html)).join(' ');
    const m = /["“”']([^"“”']{8,})["“”']/.exec(q.stem || '');
    if (m && !combined.includes(stripHtml(m[1]))) {
      warn(`[exam ${id}] ข้อ ${q.no}: quote ในคำถาม intent ไม่พบในบทความ: "${m[1].slice(0, 60)}"`);
    }
  });

  return { total: allQ.length, counts, diff };
}

// ========== lesson validation ==========
function validateLessons(tagIndex) {
  if (!lessonFiles.length) { warn('ยังไม่มีไฟล์บทเรียน (data/lessons/) — ข้ามการตรวจ lessons'); return null; }
  placeholderScan('lessons', rawText(lessonFiles));
  const T = loadFiles(baseFiles.concat(lessonFiles));
  const lessons = T.lessons || {};
  const ids = Object.keys(lessons);
  const seen = {};
  ids.forEach(id => {
    const l = lessons[id];
    const ctx = `lesson ${id}`;
    if (l.id !== id) err(`${ctx}: l.id ("${l.id}") ไม่ตรงชื่อ key`);
    if (typeof l.module !== 'number') err(`${ctx}: module ต้องเป็น number`);
    if (typeof l.order !== 'number') err(`${ctx}: order ต้องเป็น number`);
    if (!l.title) err(`${ctx}: ไม่มี title`);
    if (!l.frequency) err(`${ctx}: ไม่มี frequency`);
    if (!Array.isArray(l.blocks) || !l.blocks.length) err(`${ctx}: ไม่มี blocks`);
    else {
      const types = l.blocks.map(b => b && b.type);
      ['cheatsheet'].forEach(req => { if (!types.includes(req)) warn(`${ctx}: ไม่มี block "${req}" (ควรมีสรุปท้ายบท)`); });
    }
    const quiz = l.quiz || [];
    const mod = l.module;
    // นับจำนวนคำถามจริง (passage set นับตามจำนวนข้อข้างใน)
    const flatCount = quiz.reduce((sum, item) => sum + (item && Array.isArray(item.questions) ? item.questions.length : 1), 0);
    if (mod === 6) { /* ไม่มี quiz */ }
    else if (mod === 4) { if (flatCount < 6) err(`${ctx}: Module 4 quiz ต้อง ≥ 6 ข้อ (ได้ ${flatCount})`); }
    else if (flatCount !== 10) err(`${ctx}: quiz ต้องมี 10 ข้อ (ได้ ${flatCount})`);
    // ตรวจคำถามใน quiz
    const flat = [];
    quiz.forEach(item => {
      if (item && Array.isArray(item.questions)) item.questions.forEach(q => flat.push({ q, ctx: `${ctx} quiz (${item.setId || 'set'})` }));
      else flat.push({ q: item, ctx: `${ctx} quiz` });
    });
    flat.forEach(({ q, ctx: qctx }) => checkQuestion(q, qctx, tagIndex, { allowNoStem: true }));
    const key = `${l.module}-${l.order}`;
    if (seen[key]) err(`${ctx}: module/order ซ้ำกับ ${seen[key]}`);
    seen[key] = id;
  });
  // ทุก tag ต้องมีบทเรียนรองรับ
  Object.keys(tagIndex).forEach(t => {
    const lesson = tagIndex[t].lesson;
    if (lesson && !lessons[lesson]) err(`tags.js: tag "${t}" ชี้ไปบทเรียน "${lesson}" ที่ไม่มีอยู่`);
  });
  return { count: ids.length };
}

// ========== vocab validation ==========
function validateVocab() {
  if (!vocabFiles.length) { warn('ยังไม่มีไฟล์คำศัพท์ (data/vocab/) — ข้ามการตรวจ vocab'); return null; }
  placeholderScan('vocab', rawText(vocabFiles));
  const T = loadFiles(baseFiles.concat(vocabFiles));
  const vocab = T.vocab || {};
  Object.keys(vocab).forEach(topic => {
    const v = vocab[topic];
    const ctx = `vocab ${topic}`;
    if (!v.title) err(`${ctx}: ไม่มี title`);
    if (!Array.isArray(v.words) || v.words.length < 30) err(`${ctx}: ต้องมี ≥ 30 คำ (ได้ ${v.words ? v.words.length : 0})`);
    (v.words || []).forEach((w, i) => {
      const wctx = `${ctx} คำที่ ${i + 1} (${w.word || '?'})`;
      ['word', 'pos', 'th', 'ex', 'exTh'].forEach(k => { if (!w[k]) err(`${wctx}: ไม่มี ${k}`); });
      if (!Array.isArray(w.colloc)) warn(`${wctx}: ไม่มี collocations`);
      if (!Array.isArray(w.syn)) warn(`${wctx}: ไม่มี synonyms`);
    });
  });
  return { topics: Object.keys(vocab).length, words: Object.values(vocab).reduce((s, v) => s + (v.words || []).length, 0) };
}

// ========== blind mode (print โจทย์ไม่มีเฉลย) ==========
function printBlind(id) {
  const files = examFiles(id);
  if (!files.length) { console.error('ไม่พบชุดสอบ ' + id); process.exit(1); }
  const T = loadFiles(baseFiles.concat(files));
  const exam = T.exams[id];
  const lines = [];
  const pushQ = (q, header) => {
    if (header) lines.push('\n' + header);
    lines.push(`\n${q.no}. ${q.stem || '(ดูบทความประกอบ)'}`);
    (q.options || []).forEach((o, i) => lines.push(`   (${LETTERS[i]}) ${o}`));
  };
  (exam.part5 || []).forEach(q => pushQ(q, null));
  (exam.part6 || []).forEach(set => {
    lines.push('\n=== ' + set.header + ' ===');
    lines.push(stripHtml(set.passageHtml));
    set.questions.forEach(q => pushQ(q, null));
  });
  (exam.part7Single || []).concat(exam.part7Multi || []).forEach(set => {
    lines.push('\n=== ' + set.header + ' ===');
    (set.passages || []).forEach(p => { lines.push('--- ' + (p.label || 'Passage') + ' ---'); lines.push(stripHtml(p.html)); });
    set.questions.forEach(q => pushQ(q, null));
  });
  console.log(lines.join('\n'));
}

// ========== main ==========
const T0 = loadFiles(baseFiles);
const tagIndex = T0.tags || {};
console.log('TOEIC Reading Mastery — validate');
console.log('tags:', Object.keys(tagIndex).length, 'tags ·', examIds.length, 'ชุดสอบ ·', lessonFiles.length, 'บทเรียน ·', vocabFiles.length, 'หมวดคำศัพท์\n');

if (blindId) { printBlind(blindId); process.exit(0); }

let summary = [];
if (runAll || flags.lessons) {
  const r = validateLessons(tagIndex);
  if (r) summary.push(`lessons: ${r.count} บท`);
}
if (runAll || flags.vocab) {
  const r = validateVocab();
  if (r) summary.push(`vocab: ${r.topics} หมวด · ${r.words} คำ`);
}
const examList = examId ? [examId] : (runAll ? examIds : []);
examList.forEach(id => {
  const r = validateExam(id, tagIndex);
  if (r) summary.push(`exam ${id}: ${r.total} ข้อ · เฉลย A${r.counts.A} B${r.counts.B} C${r.counts.C} D${r.counts.D} · ง่าย${r.diff.easy} กลาง${r.diff.medium} ยาก${r.diff.hard}`);
});

console.log('— สรุป —');
summary.forEach(s => console.log('  ' + s));
warnings.forEach(w => console.log('  ⚠ ' + w));
if (errors.length) {
  console.log('\n✗ พบ ' + errors.length + ' error:');
  errors.forEach(e => console.log('  ✗ ' + e));
  process.exit(1);
} else {
  console.log('\n✓ ผ่านทั้งหมด' + (warnings.length ? ` (มี ${warnings.length} warning)` : ''));
  process.exit(0);
}
