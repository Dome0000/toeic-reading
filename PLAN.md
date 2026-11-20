# PLAN.md — TOEIC Reading Mastery

> อัปเดตล่าสุด: 2026-11-18 · สถานะ: **Phase 1 เสร็จ — รออนุมัติก่อนเริ่ม Phase 2**
> วิธีใช้ไฟล์นี้: ทุกครั้งที่เริ่ม session ให้อ่านไฟล์นี้ก่อน แล้วอัปเดต checkbox + เพิ่มบรรทัดใน "บันทึกการตัดสินใจ" เมื่อจบ Phase

## 1. โปรเจกต์ / Config

เว็บเตรียมสอบ TOEIC **Reading Section** (Part 5–7) แบบ static (HTML/CSS/Vanilla JS ไม่มี build step)
ผู้เรียนเป้าหมาย: คนไทย คะแนนรวม ~400–600 → เป้าหมาย 750+ · คำอธิบายภาษาไทย · เนื้อหาข้อสอบเป็น American English

| รายการ | ค่า |
|---|---|
| ชื่อเว็บ | TOEIC Reading Mastery |
| Mock Exam ฉบับเต็ม | 2 ชุด (ชุดละ 100 ข้อ / 75 นาที) |
| Quiz ท้ายบท | บทละ 10 ข้อ (Module 4 ≥ 6 ข้อ/บท ใช้บทความ 1–2 ชุด) |
| คลังคำศัพท์ | ≥ 30 คำต่อหมวด × 13 หมวด |
| Reading Section | 100 ข้อ · 75 นาที · คะแนน 5–495 · ตอบผิดไม่หักคะแนน |

ขอบเขต: **Part 5–7 เท่านั้น ห้ามมี Listening (Part 1–4)**

## 2. โครงสร้างไฟล์

```text
toeic-reading/
├── index.html
├── README.md                  # Phase 9
├── PLAN.md                    # ไฟล์นี้
├── CLAUDE.md                  # spec หลัก (ห้ามแก้โดยไม่จำเป็น)
├── blueprints/                # Phase 1 — แผนข้อสอบล่วงหน้า (ไม่โหลดขึ้นเว็บ)
│   ├── mock-01.md
│   └── mock-02.md
├── css/            base.css, components.css, exam.css, print.css
├── js/
│   ├── core/       router.js, store.js, timer.js, utils.js
│   ├── components/ question.js, passage.js, navigator.js, quiz.js
│   ├── views/      home.js, lessons.js, lesson.js, vocab.js, exam.js,
│   │               result.js, history.js, mistakes.js, plan.js
│   └── app.js
├── data/
│   ├── _init.js, tags.js
│   ├── lessons/    1 ไฟล์ต่อ 1 บท
│   ├── vocab/      1 ไฟล์ต่อ 1 หมวด
│   └── exams/
│       ├── mock-01/  meta.js, part5.js, part6.js, part7-single.js, part7-multi.js
│       └── mock-02/  (โครงสร้างเดียวกัน)
└── scripts/
    └── validate.js            # Phase 2
```

Hash routing: `#/`, `#/lessons`, `#/lesson/:id`, `#/vocab/:topic`, `#/exams`, `#/exam/:id/:mode`, `#/drill/:tag`, `#/result/:attemptId`, `#/history`, `#/mistakes`, `#/plan`

## 3. รายการบทเรียนทั้งหมด (Module 0–6)

Frequency เป็นการประเมินเชิงคุณภาพ (ห้ามแต่งตัวเลขสถิติ, ตาม CLAUDE.md §2.1)

### Module 0 — ภาพรวมและกลยุทธ์ (2 บท, frequency: n/a)

| id | หัวข้อ | quiz |
|---|---|---|
| m0-exam-overview | รู้จักข้อสอบ: โครงสร้าง การคิดคะแนน การแบ่งเวลา (P5 ≈ 11 นาที / P6 ≈ 9 นาที / P7 ≈ 55 นาที) ลำดับการทำ การตัดตัวเลือก การเดา (ห้ามเว้นว่าง) | 10 |
| m0-study-plan | แผนการเรียน 4 สัปดาห์ (checklist ลิงก์ไปยังบทเรียน + mock ทุกบท) | 10 |

### Module 1 — Part 5 Grammar (16 บท, บทละ 10 ข้อ)

| # | id | หัวข้อ | frequency |
|---|---|---|---|
| 1 | p5-word-forms | Parts of Speech & Word Forms (ตาราง suffix + ตำแหน่งคำ) | สูง |
| 2 | p5-verb-tenses | Verb Tenses และคำบอกเวลา (since, by the time, currently, next quarter) | สูง |
| 3 | p5-subject-verb | Subject–Verb Agreement | สูง |
| 4 | p5-active-passive | Active vs Passive Voice | สูง |
| 5 | p5-pronouns | Pronouns (personal, possessive, reflexive, those who, each other) | กลาง |
| 6 | p5-relative-clauses | Relative Clauses (who, whom, whose, which, that, what) | กลาง |
| 7 | p5-prepositions | Prepositions (เวลา สถานที่ collocation: responsible for, comply with) | สูง |
| 8 | p5-conjunctions | Conjunction vs Preposition vs Conjunctive Adverb (although/despite/however, because/because of/therefore) | สูง |
| 9 | p5-correlative | Correlative Conjunctions (both…and, either…or, neither…nor, not only…but also) | กลาง |
| 10 | p5-gerund-infinitive | Gerund vs Infinitive (look forward to + V-ing, plan + to V) | กลาง |
| 11 | p5-participles | Participles (-ing/-ed, participial phrase, reduced relative clause) | กลาง |
| 12 | p5-comparison | Comparison (as…as, -er than, the most, much/far + comparative) | กลาง |
| 13 | p5-conditionals | Conditionals, Subjunctive & Inversion (unless, provided that, Should you…, recommend that he be) | กลาง |
| 14 | p5-modals-causatives | Modals & Causatives (have, get, make, let) | กลาง |
| 15 | p5-quantifiers | Quantifiers, Determiners & Articles (each/every, few/little, a number of vs the number of) | กลาง |
| 16 | p5-adverbs | Adverbs (ตำแหน่ง, nearly/almost, still/yet/already, so/such, too/enough) | ต่ำ–กลาง |

### Module 2 — Part 5 Vocabulary (5 บท, บทละ 10 ข้อ)

| id | หัวข้อ | frequency |
|---|---|---|
| m2-word-families | Word Families (compete / competition / competitive / competitively / competitor) | สูง |
| m2-collocations | Business Collocations (meet a deadline, place an order, conduct a survey) | สูง |
| m2-confusing-words | Confusing Words (rise/raise, affect/effect, by/until, among/between, adapt/adopt) | กลาง |
| m2-phrasal-verbs | Phrasal Verbs ในที่ทำงาน (carry out, set up, call off, look into, fill out) | กลาง |
| m2-near-synonyms | คำความหมายใกล้กันแต่ใช้ต่างกัน (say/tell/speak/talk, reach/arrive, lend/borrow) | กลาง |

### Module 3 — Part 6 Text Completion (4 บท, บทละ 10 ข้อ)

| id | หัวข้อ | frequency |
|---|---|---|
| m3-part6-overview | รู้จัก Part 6 + ประเภทเอกสาร (e-mail, memo, notice, letter, advertisement, article, press release) | สูง |
| m3-context-grammar | Grammar ตามบริบท (tense ตาม timeline, pronoun reference) | สูง |
| m3-transitions | Transition Words (ตารางตามหน้าที่: เพิ่มเติม / ขัดแย้ง / เหตุผล / ผลลัพธ์ / ลำดับเวลา) | สูง |
| m3-sentence-insertion | Sentence Insertion (ดูประโยคก่อน/หลัง คำเชื่อม สรรพนาม ความต่อเนื่อง) | สูง |

### Module 4 — Part 7 Reading Comprehension (5 บท, quiz ≥ 6 ข้อ/บท ใช้บทความ 1–2 ชุด)

| id | หัวข้อ | frequency |
|---|---|---|
| m4-document-types | ประเภทเอกสารและโครงสร้าง (e-mail, form, invoice, schedule, web page, review, article, text message, online chat) | สูง |
| m4-question-types | คำถาม 8 ประเภท + วิธีหาคำตอบ (Main idea/Purpose, Detail, NOT/TRUE, Inference, Vocabulary in context, Writer's intent, Sentence insertion, Cross-reference) | สูง |
| m4-paraphrase | Paraphrase Recognition (ตาราง ≥ 40 คู่ เช่น postpone ↔ put off, complimentary ↔ free of charge) | สูง |
| m4-skim-scan | Skimming & Scanning + บริหารเวลาใน Part 7 | สูง |
| m4-multiple-passages | Multiple Passages (เทคนิคเชื่อมข้อมูลข้ามบทความ) | กลาง |

### Module 5 — คลังคำศัพท์ธุรกิจ 13 หมวด (≥ 30 คำ/หมวด, ไม่มี quiz — ใช้ flashcard)

หมวด (ไฟล์ `data/vocab/<topic>.js`):

`office` Office & Administration · `hr` HR & Recruitment · `finance` Finance & Accounting · `marketing` Marketing & Sales · `purchasing` Purchasing & Logistics · `manufacturing` Manufacturing & Quality Control · `travel` Travel & Hospitality · `dining` Dining & Events · `realestate` Real Estate & Facilities · `tech` Technology & IT · `health` Health & Insurance · `legal` Contracts & Legal · `customer` Customer Service

แต่ละคำ: word, pos, th, ex (ประโยค business), exTh, colloc[], syn[] (ใช้ฝึก paraphrase)
ฟีเจอร์: ค้นหา · กรองหมวด · flashcard พลิกการ์ด · ทำเครื่องหมาย "จำได้แล้ว" (localStorage)

### Module 6 — รวมกับดักและ Cheat Sheet (1 หน้า, ไม่มี quiz)

`m6-trap-cheatsheet` — รวมกับดักทั้ง Module 1–4 + cheat sheet สั่งพิมพ์ได้ (print.css)

**สรุปจำนวนไฟล์ lessons:** 2 + 16 + 5 + 4 + 5 + 1 = **33 บท** (32 ไฟล์มี quiz + 1 บทไม่มี)
ทุกบทมีครบ 8 องค์ประกอบตาม CLAUDE.md §2.1 (ทำไมสำคัญ → cheat sheet)

## 4. Tag Taxonomy (ใช้ใน blueprint + validate)

> `data/tags.js` สร้างใน Phase 2 · blueprint อ้างอิง **id ในตารางนี้เท่านั้น**

### Part 5 Grammar (tag → บทเรียน)

| tag | คำไทย | lesson |
|---|---|---|
| word-form | รูปคำ (n./v./adj./adv.) | p5-word-forms |
| verb-tense | กาลกริยา | p5-verb-tenses |
| subject-verb-agreement | ประธาน–กริยา | p5-subject-verb |
| active-passive | Active/Passive | p5-active-passive |
| pronoun | สรรพนาม | p5-pronouns |
| relative-clause | Relative Clause | p5-relative-clauses |
| preposition | คำบุพบท | p5-prepositions |
| conjunction | Conjunction/Connector | p5-conjunctions |
| correlative | Correlative Conjunction | p5-correlative |
| gerund-infinitive | Gerund vs Infinitive | p5-gerund-infinitive |
| participle | Participle | p5-participles |
| comparison | การเปรียบเทียบ | p5-comparison |
| conditional | Conditional/Subjunctive | p5-conditionals |
| modal-causative | Modals/Causatives | p5-modals-causatives |
| quantifier | Quantifier/Article | p5-quantifiers |
| adverb | กริยาวิเศษณ์ | p5-adverbs |

### Part 5 Vocabulary

| tag | คำไทย | lesson |
|---|---|---|
| word-family | ตระกูลคำ | m2-word-families |
| collocation | คำคู่ | m2-collocations |
| confusing-words | คำสับสน | m2-confusing-words |
| phrasal-verb | Phrasal Verb | m2-phrasal-verbs |
| near-synonym | คำใกล้เคียง | m2-near-synonyms |
| business-vocab | คำศัพท์ธุรกิจทั่วไป | m2-collocations |

### Part 6

| tag | คำไทย | lesson |
|---|---|---|
| p6-context-grammar | Grammar ตามบริบท (tense/pronoun) | m3-context-grammar |
| transition | คำเชื่อม | m3-transitions |
| sentence-insertion | ข้อแทรกประโยค | m3-sentence-insertion |
| p6-vocab | คำศัพท์ใน Part 6 | m3-part6-overview |

### Part 7

| tag | คำไทย | lesson |
|---|---|---|
| main-idea | ใจความหลัก/วัตถุประสงค์ | m4-question-types |
| detail | รายละเอียด | m4-question-types |
| not-true | NOT/TRUE EXCEPT | m4-question-types |
| inference | การอนุมาน | m4-question-types |
| vocab-in-context | คำศัพท์ในบริบท | m4-question-types |
| writer-intent | เจตนาผู้เขียน | m4-question-types |
| paraphrase | การแปลความ | m4-paraphrase |
| cross-reference | เชื่อมข้ามบทความ | m4-multiple-passages |
| sentence-insertion | ข้อแทรกประโยค | m3-sentence-insertion |
| text-message | แชทข้อความ | m4-document-types |
| online-chat | แชทออนไลน์ | m4-document-types |

รวม **42 tags** · ทุก tag ลิงก์ไปบทเรียนเดียว (ใช้ใน "ไปยังบทเรียนที่เกี่ยวข้อง" ของหน้ารีวิวผลสอบ)
`text-message` / `online-chat` ใช้เป็น tag เสริมร่วมกับ `detail`/`inference` ฯลฯ ได้ (tag เป็น multi-select)

## 5. Phase Plan

- [x] **Phase 1 — Plan** ✅ 2026-11-18 · PLAN.md + blueprints/mock-0{1,2}.md · *ทดสอบ:* node distribution check ผ่าน (ดู §8)
- [x] **Phase 2 — Core** ✅ 2026-11-18 · `index.html`, `css/{base,components,exam,print}.css`, `js/core/{utils,store,router,timer}.js`, `js/components/{question,passage,navigator,quiz}.js`, `js/views/{home,lessons,lesson,plan}.js`, `js/app.js`, `data/_init.js`, `data/tags.js`, `scripts/validate.js` (+`--blind`) · *ทดสอบ:* `node scripts/validate.js` ผ่าน · syntax check ทุกไฟล์ผ่าน · headless Edge (playwright-core) เปิด file:// ไม่มี console error · ตอบ quiz ถูก → คะแนนอัปเดต + บันทึกคะแนนดีสุด
- [x] **Phase 3 — Lessons** ✅ 2026-11-18 · Module 0–4 + 6 ครบ 33 บท ผ่าน `node scripts/validate.js --lessons` · headless Edge: รายการ 33 บท render, สุ่มเปิดหลายบท ไม่มี console error · *material:* คะแนน/ตัวเลือก quiz กระจาย A/B/C/D พอ ๆ กัน (rotate options, remap explain.wrong keys) · ทดสอบ
passage-based quiz (Module 4) ใช้งานได้
- [x] **Phase 4 — Vocabulary** ✅ 2026-11-18 · 13 หมวด × ≥30 คำ (รวม 395 คำ) · หน้าคลังศัพท์ `#/vocab` + `#/vocab/:topic` (ค้นหา/กรองหมวด/การ์ด/Flashcard พลิก/ทำเครื่องหมาย "จำได้แล้ว" persist ใน localStorage) · *ทดสอบ:* `node scripts/validate.js --vocab` ผ่าน · headless Edge: 13 หัวข้อ list, เปิดหมวด ค้นหา "invoice", พลิกการ์ด, mark จำได้ → reload ยังจำได้, ไม่มี console error
- [x] **Phase 5 — Exam Engine** ✅ 2026-11-18 · `js/views/exams.js` (เลือกชุด/โหมด + resume banner), `js/views/exam.js` (timer จาก Date.now() + เตือน 15/5 นาที, Part 5 ทีละข้อ↔มุมมองรายการ, Part 6/7 split view + แท็บบนมือถือ, Navigator 101–200, A–D/1–4/←→/F, autosave + beforeunload + modal ก่อนส่ง + ส่งอัตโนมัติ, บันทึกเวลา/ข้อ), `js/views/result.js` ขั้นพื้นฐาน (คะแนน + Part scores + tag weakness + review + highlight evidence) · *ทดสอบ:* mock-demo ลบทิ้งแล้ว — flow เริ่ม→ตอบ→รีเฟรช→ทำต่อ→ส่ง→ผล; Part Practice instant-reveal lock; Drill สุ่ม tag; สมุดข้อผิดบันทึก; มือถือ 375px แท็บ บทความ/คำถาม ไม่มี scroll แนวนอน; keyboard; resume-conflict modal; ไม่มี console error
- [x] **Phase 6 — Mock Test 1** ✅ 2026-11-19 · เขียนตาม blueprint (meta → part5 → part6 → part7) — subagent เขียน Part 7 Multiple (double/triple) ผมตรวจและแก้ 15 รายการ · `node scripts/validate.js --exam mock-01` **ผ่าน** (100 ข้อ · A26 B28 C26 D20 · ง่าย30 กลาง45 ยาก25 · sentence-insertion 6 · evidence verbatim · [1]–[4]) · blind-solve โดย subagent หาข้อคลุมเครือ → แก้ 6 ข้อ (Q124, Q131 ไวยากรณ์, Q140, Q146, Q169, Linnen→Linen) · headless Edge flow ครบ · ค่า D ครบช่วง 20–30%`pending`
- [ ] **Phase 7 — Results & Analytics** หน้าผลสอบ (คะแนนดิบ + คะแนนประมาณช่วง 5–495 พร้อม disclaimer), pacing, ความแม่นยำราย tag, review กรอง/ไฮไลต์ evidence, "ทำใหม่เฉพาะข้อที่ผิด", history + กราฟ SVG · *ทดสอบ:* สอบเต็มชุด mock-01 → ดูผล → review → retry-wrong → history ขึ้นกราฟ
- [ ] **Phase 8 — Mock Test 2** ทำแบบเดียวกับ Phase 6 · *ทดสอบ:* `node scripts/validate.js --exam mock-02` ผ่าน
- [ ] **Phase 9 — QA** validate ผ่านไม่มี error · blind-test ด้วย subagent ทั้ง 2 ชุด → แก้ข้อกำกวม → ตรวจซ้ำ · ทดสอบ flow เริ่ม→refresh→ต่อ→ส่ง→ผล→review→retry · README.md · *ทดสอบ:* Chrome/Edge/Firefox/Safari file://, มือถือ 375px, dark mode, print

## 6. สิ่งที่ต้องตรงในข้อสอบ (สรุปจาก CLAUDE.md หัวใจ)

- Part 5 (101–130, 30 ข้อ): word-form ~8 · vocab ~10 · verb ~4 · prep/conj ~4 · pronoun/relative ~2 · อื่นๆ ~2 · ตัวลวงสมจริง
- Part 6 (131–146, 4 ชุด × 4 ข้อ): ทุกชุดมี sentence-insertion 1 ข้อ · blank ตรงเลขข้อ · บทความ ≈ 100–150 คำ
- Part 7 (147–200, 54 ข้อ): Single 29 (2-2-2-2-3-3-3-4-4-4) · Double 2 ชุด ×5 (176–185) · Triple 3 ชุด ×5 (186–200)
  - ครบ: text-message 1 · online chat ≥3 คน 1 (มี intent ข้อ) · sentence-insertion 2 · intent ≥2 · cross-reference ≥5 (≥1 ต่อ multi set) · evidence.quote ตรงตัวจากบทความ
- คุณภาพ: แต่งใหม่ทั้งหมด · ธุรกิจสากล · ชื่อสมมติหลากหลาย · วันที่/เวลา/ราคาตรงกันทั้ง multi-passage set · ตอบได้ข้อเดียว · ยาก 30/45/25 · เฉลยกระจาย 20–30% ต่อตัวอักษร ติดกัน ≤ 3 (เราล็อคที่ 25/25/25/25, ติดกัน ≤2)
- Part 7 เฉลยต้อง paraphrase จากบทความ (ไม่ลอกคำตรงตัว)
- American English · รูปเวลา 10:30 A.M. · $ · Directions เขียนเอง

## 7. บันทึกการตัดสินใจ (Decisions Log)

| # | วันที่ | เรื่อง | การตัดสินใจ |
|---|---|---|---|
| 1 | 2026-11-18 | git | `git init` (branch main) · identity ใน repo นี้ = Claude Code <noreply@anthropic.com> (ไม่มี git identity ทั่วทั้งเครื่อง) · commit ท้ายทุก Phase |
| 2 | 2026-11-18 | ลำดับ blueprint | ล็อค**เฉลย + ความยาก**ใน blueprint ก่อนเขียนโจทย์ → การันตีการกระจาย §4.8; validate.js ตรวจซ้ำหลังเขียนเนื้อหาจริง |
| 3 | 2026-11-18 | เฉลยต่อตัวอักษร | เป้าหมาย **25/25/25/25 ต่อชุดสอบ** (กลางช่วง 20–30%) · ติดกันไม่เกิน 2 · ไม่ติดข้ามพาร์ท |
| 4 | 2026-11-18 | ความยาก | **30 easy / 45 medium / 25 hard ต่อชุดสอบ** ตรงเป๊ะ |
| 5 | 2026-11-18 | Tag ที่อนุญาต | 42 tags ตาม §4 · tags.js สร้าง Phase 2 · ทุก tag ลิงก์บทเรียนเดียว |
| 6 | 2026-11-18 | โครง mock-01 | Part 6: e-mail, memo, notice, press release · Part 7 single sets: notice, e-mail, web page, review, invoice/form, schedule, article, advertisement, text-message chain, online chat |
| 7 | 2026-11-18 | โครง mock-02 | คนละเอกสาร/ธีม (ไม่ก๊อป) · e.g. Part 6: letter, advertisement, e-mail, article |
| 8 | 2026-11-18 | คะแนนประมาณ | แสดงเป็น**ช่วงคะแนน** + disclaimer "ไม่ใช่ตารางแปลงคะแนนทางการของ ETS" |
| 9 | 2026-11-18 | m6-trap-cheatsheet | ไม่มี quiz (เป็น cheat sheet ล้วน) |
| 10 | 2026-11-18 | Quiz Module 4 | ใช้บทความ single passage 1 ชุด ≥6 ข้อต่อบท (ตาม CLAUDE.md §2.1) |
| 11 | 2026-11-18 | Timer | คำนวณจาก Date.now() (ไม่ใช่นับ setInterval) · autosave ทุก action · localStorage prefix `toeicR:` |
| 12 | 2026-11-18 | ฟอนต์ | Sarabun (ไทย) + Inter (อังกฤษ/ตัวเลข) ผ่าน Google Fonts + system fallback |
| 13 | 2026-11-18 | mock-demo | ใช้ทดสอบ Phase 5 แล้ว**ลบ**เมื่อเสร็จ (ไม่ปนใน build สุดท้าย) |
| 14 | 2026-11-18 | จำนวน tags | PLAN เดิมเขียนว่า 42 tags แต่เมื่อลิสต์จริงได้ **36 tags ไม่ซ้ำ** (sentence-insertion นับครั้งเดียว) — แก้ตัวเลขเป็น 36 |
| 15 | 2026-11-18 | nav | nav สร้างแบบ dynamic ใน `js/app.js` (`NAV` array) — เพิ่มรายการตาม Phase (คลังคำศัพท์ P4, Mock Exam P5, สมุดข้อผิด P7) เพื่อไม่ให้มีลิงก์ตายระหว่างพัฒนา |
| 16 | 2026-11-18 | QA tooling | ทดสอบหน้าเว็บด้วย `playwright-core` + Microsoft Edge (channel `msedge`) headless ในโฟลเดอร์ TEMP — **ไม่**เพิ่ม dependency ลงใน repo (เว็บต้องไม่พึ่ง npm) |
| 17 | 2026-11-18 | subagent | ตั้งค่า subagent ใหม่ของผู้ใช้แล้วยังถูก `429 Rate limit exceeded: free-models-per-day-high-balance` (model @preset/coding-fallback) — ทุก agent ถูก reject ก่อนเริ่ม Phase 3/4 จึงเขียนบทเรียนทั้ง 33 บทด้วยมือ |
| 18 | 2026-11-18 | เฉลย quiz กระจาย | เฉลยใน quiz บทเรียนทุกบทถูก rotate ให้ A/B/C/D กึ่งสมดุล (ผ่านสคริปต์ rebalance: ย้ายคำตอบไปตัวอักษรที่ใช้ยังน้อยที่สุด + remap explain.wrong keys) |
| 19 | 2026-11-18 | จังหวะงาน | ผู้ใช้เลือก **หยุดรีวิวทุก Phase** · Mock Test 6/8 ให้ subagent เขียนตาม blueprint แล้วผมตรวจ (ถ้า subagent ใช้ได้; ไม่งั้นเขียนเอง) |
| 20 | 2026-11-18 | คำศัพท์ซ้ำ | ตรวจ duplicate `word` ข้าม/ในแต่ละหมวดแล้วกำจัด (เช่น promotion/premium/coverage/warehouse/invoice/complaint/refund/reservation/accommodation/suite) — ทุกหมวดเหลือ 30–32 คำไม่ซ้ำ |
| 21 | 2026-11-18 | exam.css bug | `.exam-tabs` ถูก `display:none` ไว้นอก @media หลัง rule `display:flex` ใน @media (max-width:1023px) — source order ทำให้มือถือไม่เห็นแท็บเลย แก้โดยประกาศค่าเริ่มต้นเพียงครั้งเดียวก่อน @media |
| 22 | 2026-11-18 | resume-conflict | การนำทางไปชุด/โหมดอื่นระหว่างทำข้อสอบค้างอยู่จะ**ถามก่อนทับ** (ทำต่อ / เริ่มใหม่ / ยกเลิก) เพื่อไม่ให้ข้อมูลที่ทำค้างหาย |

## 8. Phase 1 — สรุปสิ่งที่ทำ + วิธีตรวจ

**ทำไปแล้ว:** git init + baseline commit · PLAN.md (ไฟล์นี้) · `blueprints/mock-01.md` · `blueprints/mock-02.md` (ล็อค เลขข้อ | Part | ชุด | ธีม | tag | difficulty | เฉลย ครบ 100 ข้อ/ชุด ตาม §4)

**ตรวจแล้ว (ad-hoc node):**
- 100 ข้อ/ชุด · เลขต่อเนื่อง 101–200 (P5 101–130 · P6 131–146 ชุดละ 4 · P7 single 147–175 ตาม 2-2-2-2-3-3-3-4-4-4 · double 176–185 · triple 186–200)
- เฉลย 25/25/25/25 ต่อชุด และ ≤ 2 ตัวติดกัน (รวมข้ามพาร์ท)
- ความยาก 30/45/25 ต่อชุด
- Part 6: 4 ชุด × 1 sentence-insertion
- Part 7: มี text-message 1 · online chat (≥3 คน) 1 · sentence-insertion 2 · intent ≥2 · cross-reference ≥5 (≥1/multi set)
- P5 histogram ตรงโควตา (word-form 8 · vocab 10 · verb 4 · prep/conj 4 · pronoun/relative 2 · อื่นๆ 2)
- ทุก tag อยู่ในตาราง §4

**ขั้นต่อไป:** ให้ผู้ใช้รีวิว PLAN.md + blueprints แล้วอนุมัติ → ค่อยเริ่ม Phase 2 (Core)

## 9. Definition of Done (จาก CLAUDE.md §10)

- [ ] เปิด index.html ผ่าน file:// บน Chrome, Edge, Firefox, Safari ไม่มี console error
- [ ] บทเรียนครบตาม §2.2 · Module 1–4 มีครบ 8 ส่วน · quiz ใช้งานได้
- [ ] คลังคำศัพท์ครบ Config + flashcard ใช้งานได้
- [ ] Mock 2 ชุดผ่าน validate ไม่มี error + ผ่าน QA แบบไม่เห็นเฉลย
- [ ] ทุกโหมดการสอบทำงาน · refresh แล้วทำต่อได้
- [ ] หน้าผลสอบมีคะแนนประมาณการ · วิเคราะห์จุดอ่อนราย tag · review พร้อมเฉลยละเอียด
- [ ] มือถือ 375px ดี · dark mode · พิมพ์บทเรียนได้
