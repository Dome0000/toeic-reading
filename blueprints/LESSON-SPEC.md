# LESSON-SPEC — สเปกการเขียนไฟล์บทเรียน (Phase 3)

ใช้ร่วมกับตัวอย่างจริง `data/lessons/m0-exam-overview.js` (อ่านไฟล์นี้ก่อนเริ่มเขียนทุกครั้ง)

## 1. รูปแบบไฟล์

- ไฟล์ `data/lessons/<id>.js` ต่อ 1 บท เขียนทับในที่เก็บ `window.TOEIC.lessons["<id>"] = {...}` เท่านั้น
- **ห้าม** `require`, `fetch`, `module.exports` — เป็น classic script
- จบไฟล์ด้วย `};` + newline

## 2. Schema บังคับ

```js
window.TOEIC.lessons["ID"] = {
  id: "ID",              // ตรงชื่อไฟล์
  module: 1,             // number
  order: 3,              // number (เรียงในโมดูล)
  title: "...",
  frequency: "สูง",      // "สูง" | "กลาง" | "ต่ำ" | "ต่ำ–กลาง"
  blocks: [ ... ],
  quiz: [ ... ]
};
```

## 3. Block types (ใช้ได้เฉพาะ 6 แบบนี้)

| type | ฟิลด์ | หมายเหตุ |
|---|---|---|
| `text` | `{ type:"text", html }` | `html` เป็น HTML ดิบ (ผู้เรียนเห็นตามนั้น) — ใช้ `<p> <ul> <ol> <h3> <strong> <em>` |
| `table` | `{ type:"table", title?, headers:[...], rows:[[cellHtml,...]] }` | ทุก cell เป็น HTML ดิบได้; ใช้ตารางสรุปหลัก — **ห้ามใช้ text ยาว ๆ แทนตาราง** |
| `examples` | `{ type:"examples", title?, items:[{en, th}] }` | **≥ 6 ตัวอย่าง** ประโยคธุรกิจจริง (American English) + คำแปลไทย; ระบบซ่อนคำแปลไว้ก่อนและมีปุ่มแสดง/ซ่อนให้อัตโนมัติ |
| `clue` | `{ type:"clue", title?, html }` | "เห็นอะไร → ตอบอะไร" — หัวข้อ default มีให้แล้ว |
| `callout` | `{ type:"callout", tone, title?, html }` | `tone` ∈ `tip` (เทคนิค) · `trap` (กับดักข้อสอบ) · `thai-mistake` (จุดที่คนไทยมักพลาด) — **ต้องมีครบอย่างน้อย 1 trap และ 1 thai-mistake ต่อบท** |
| `cheatsheet` | `{ type:"cheatsheet", html }` | สรุปท้ายบทแบบ bullet สั้น คม สั่งพิมพ์ได้ — **ต้องมีทุกบทที่ไม่ใช่ Module 6**(Module 6 บทเดียวก็เป็น cheatsheet ล้วน) |

## 4. องค์ประกอบ 8 ส่วนที่ต้องมีในทุกบท (เรียนจาก m0-exam-overview.js)

1. **ทำไมสำคัญ** + ความถี่ที่ออกสอบ (สูง/กลาง/ต่ำ) — ห้ามแต่งตัวเลขสถิติ ประเมินเชิงคุณภาพเท่านั้น
2. **หลักการ** อธิบายภาษาไทยกระชับ + **ตารางสรุป** (block `table`)
3. **ตัวอย่าง ≥ 6 ประโยค** บริบทธุรกิจ/ที่ทำงาน (`examples`) — en เป็น American English
4. **เห็นอะไร → ตอบอะไร** (`clue`) — สัญญาณในโจทย์ที่พาไปสู่คำตอบ
5. **กับดัก** ที่ข้อสอบชอบใช้ (`callout trap`) และ **จุดที่คนไทยมักพลาด** (`callout thai-mistake`)
6. **เทคนิคทำให้เร็ว** (`callout tip`)
7. **Mini Quiz** จำนวนตาม Config (`quiz`) — เฉลยทันทีพร้อมคำอธิบาย (ระบบจัดการ interactivity เอง)
8. **Cheat Sheet** (`cheatsheet`)

## 5. Quiz schema

ต้องมี **10 ข้อ** สำหรับ Module 0–3 · Module 4 ใช้ **≥ 6 ข้อ** แบบ passage set · Module 6 ไม่มี quiz

### 5.1 ข้อเดี่ยว (Part 5-style)

```js
{
  no: 1,                       // เลขต่อเนื่อง 1..10 ภายในบท (ไม่ต้องตรงเลขข้อจริง)
  stem: "ประโยคที่มี ------- (7 ขีด) ตรงช่องว่าง",
  options: ["opt1", "opt2", "opt3", "opt4"],   // 4 ตัว ไม่ซ้ำ ไม่ว่าง
  answer: "B",                 // A|B|C|D
  tags: ["preposition"],       // จากรายการ tag ที่อนุญาต (§7) — อย่างน้อย 1
  difficulty: "medium",        // easy|medium|hard — คละกัน (แนวทาง: easy ~3, medium ~4-5, hard ~2-3)
  translationTh: "คำแปลประโยคเต็มเป็นภาษาไทย",
  explain: {
    why: "ทำไมข้อนี้ถูก — อ้างกฎ/หลักการ (ภาษาไทย)",
    wrong: { A: "...", C: "...", D: "..." },   // ครบ 3 ตัวที่ไม่ใช่เฉลย — แต่ละตัวบอกว่าทำไมผิด
    tip: "ครั้งหน้าเจอโจทย์แบบนี้ให้ทำอย่างไร"
  }
}
```

### 5.2 ชุดบทความ (ใช้ใน Module 4 / เนื้อหาแนว Part 6-7)

```js
{
  setId: "m4-d-q1",           // unique ภายในบท
  header: "Questions 1-6 refer to the following e-mail.",
  passages: [ { label: "E-mail", html: "...HTML ของบทความ..." } ],
  summaryTh: "สรุปบทความภาษาไทย 1–2 ประโยค",
  keyVocab: [ { word: "postpone", th: "เลื่อนออกไป" } ],
  questions: [ /* ข้อเดี่ยวตาม §5.1 (ไม่มี stem = ไม่ได้ มี stem เสมอ) */ ]
}
```

- จำนวนข้อรวมต่อบท (นับจากทุก set + ข้อเดี่ยว) ต้อง ≥ 6 สำหรับ Module 4
- บทความในบทเรียน: 60–200 คำ · ชื่อสมมติหลากหลาย · วันที่/เวลา/ตัวเลขสอดคล้องกัน
- คำตอบถูกต้องต้อง **paraphrase** จากบทความ ไม่ใช่ลอกคำตรงตัว · ตัวลวงลอกคำตรงตัวได้
- ทุกข้อที่แนบ `evidence` ต้องเป็น `{ passage: 0, quote: "ข้อความตรงตัวจากบทความ" }` — ถ้าใส่ evidence ต้องมีจริงในบทความ

## 6. กฎคุณภาพข้อ (บังคับทุกข้อ รวม quiz)

1. คำตอบถูก **ข้อเดียว** เท่านั้น — ตัวลวงต้องน่าเชื่อแต่ผิดชัดเจน · ห้ามมี 2 ตัวที่ตอบได้เหมือนกัน
2. `explain.wrong` **ครบ 3 ตัว** ที่ไม่ใช่เฉลย แต่ละตัวอธิบายจริง ไม่ใช่ "ผิดเพราะผิด"
3. ตัวลวง Part 5 ต้องสมจริง: ชุด word form (complete/completion/completely/completed) · ชุดคำชนิดเดียวกัน · ชุด preposition/conjunction
4. เฉลยกระจาย — อย่าให้ตัวอักษรเดิมติดกันเกิน 2 ข้อ และสัดส่วน A/B/C/D ไม่เอียง (แนวทาง: แต่ละตัว 2–3 ข้อจาก 10)
5. ศัพท์และบริบทธุรกิจสากล · ชื่อบริษัท/บุคคลเป็นชื่อสมมติ · ใช้ **American English** · เวลาเช่น "10:30 A.M." · สกุลเงิน "$"
6. **ห้าม placeholder** — ไม่มี "...", TODO, Lorem ipsum, "เพิ่มภายหลัง" ทุกตัวอักษรต้องเขียนจริง
7. คำอธิบายเป็นภาษาไทย โจทย์/บทความเป็นภาษาอังกฤษ · โทนเป็นกันเองแบบครูติว กระชับ ใช้ตารางมากกว่าย่อหน้ายาว ศัพท์ไวยากรณ์ภาษาไทยคงเส้นคงวา (เช่น "กริยา", "ประธาน", "กรรม", "คำคุณศัพท์", "กริยาวิเศษณ์", "บุพบท", "สันธาน", "อนุประโยค", "กาล", "กรรตุการก")
8. เนื้อหาแต่งใหม่ทั้งหมด — เลียนแบบ "รูปแบบ/ระดับความยาก/สไตล์" เท่านั้น ห้ามดัดแปลงข้อสอบจริงของ ETS/หนังสือ

## 7. Tags ที่อนุญาต (ตรงกับ data/tags.js)

`word-form` `verb-tense` `subject-verb-agreement` `active-passive` `pronoun` `relative-clause` `preposition` `conjunction` `correlative` `gerund-infinitive` `participle` `comparison` `conditional` `modal-causative` `quantifier` `adverb` `word-family` `collocation` `confusing-words` `phrasal-verb` `near-synonym` `business-vocab` `p6-context-grammar` `transition` `sentence-insertion` `p6-vocab` `main-idea` `detail` `not-true` `inference` `vocab-in-context` `writer-intent` `paraphrase` `cross-reference` `text-message` `online-chat`

## 8. การตรวจ

หลังเขียนเสร็จ ให้รัน: `node --check data/lessons/<id>.js` สำหรับทุกไฟล์ที่เขียน
**ห้าม** รัน `node scripts/validate.js --lessons` แล้วแก้ตาม error เรื่อง "tags ชี้ไปบทเรียนที่ไม่มีอยู่" — เป็นข้อผิดพลาดชั่วคราวระหว่าง Phase 3 (บทอื่นยังไม่ถูกเขียน) ให้ละเลย error ประเภทเดียว
ถ้าเจอ error อื่น (quiz นับข้อผิด, options ซ้ำ, ไม่มี explain.wrong, difficulty ผิด) ต้องแก้จนผ่าน
