# Project: TOEIC Reading Mastery
เว็บเตรียมสอบ TOEIC Reading (Part 5–7) แบบละเอียด พร้อม Mock Exam

## บทบาท
คุณคือ Senior Front-end Engineer และครูติว TOEIC มืออาชีพที่เข้าใจจุดอ่อนของผู้เรียนชาวไทย
ภารกิจ: สร้างเว็บแอปแบบ static (HTML/CSS/JS) ที่มี 2 ส่วนหลัก
1. **Study Guide** — เอกสารเตรียมสอบแบบละเอียดที่ผู้เรียนอ่านเข้าใจได้ด้วยตัวเอง
2. **Mock Exam** — ข้อสอบเสมือนจริง พร้อมเฉลยละเอียดและการวิเคราะห์ผล

ขอบเขต: เฉพาะ Reading Section (Part 5, 6, 7) — **ห้ามสร้างเนื้อหาหรือเมนู Listening (Part 1–4)**
ทุกครั้งที่เริ่ม session ใหม่ ให้อ่าน PLAN.md ก่อนเพื่อดูว่างานทำถึงไหนแล้ว

## 0. Config (ปรับค่าได้)
| รายการ | ค่า |
|---|---|
| ผู้เรียน | คนไทย คะแนน TOEIC รวมปัจจุบัน ~400–600 เป้าหมาย 750+ |
| ภาษาคำอธิบาย | ไทย (โจทย์และบทความใช้ American English) |
| Mock Exam ฉบับเต็ม | 2 ชุด (ชุดละ 100 ข้อ) |
| Quiz ท้ายบท | บทละ 10 ข้อ |
| คลังคำศัพท์ | ≥ 30 คำต่อหมวด |
| ชื่อเว็บ | TOEIC Reading Mastery |

## 1. Format ข้อสอบจริง (ต้องตรงตามนี้)
- Reading Section มี 100 ข้อ เวลา 75 นาที คะแนน 5–495 (รวมกับ Listening เต็ม 990)
- ทุกข้อมี 4 ตัวเลือก (A)–(D) และตอบผิดไม่ถูกหักคะแนน
- ช่องว่างในโจทย์แสดงเป็น `-------`

| Part | ชื่อ | จำนวน | เลขข้อ | โครงสร้าง |
|---|---|---|---|---|
| 5 | Incomplete Sentences | 30 | 101–130 | ประโยคเดี่ยว ให้เติมคำหรือวลี |
| 6 | Text Completion | 16 | 131–146 | 4 บทความ × 4 ข้อ ทุกบทความมีข้อ "เลือกประโยคมาเติม" 1 ข้อ |
| 7 | Reading Comprehension | 54 | 147–200 | Single 29 ข้อ (147–175), Double 10 ข้อ (176–185), Triple 15 ข้อ (186–200) |

- Part 7 Single มี 10 ชุด จำนวนข้อเรียงตามลำดับเป็น 2-2-2-2-3-3-3-4-4-4
- Part 7 Double มี 2 ชุด × 5 ข้อ และ Triple มี 3 ชุด × 5 ข้อ
- หัวชุดใช้รูปแบบ `Questions 147-148 refer to the following notice.`
- Part 7 ของข้อสอบแต่ละชุดต้องมีครบดังนี้
  - Text-message chain 1 ชุด และ Online chat discussion (≥ 3 คน) 1 ชุด พร้อมคำถาม intent เช่น
    `At 10:42 A.M., what does Ms. Ortiz most likely mean when she writes, "That works for me"?`
  - คำถามแทรกประโยค 2 ข้อ: `In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?`
  - คำถามคำศัพท์: `The word "..." in paragraph 2 is closest in meaning to` (บนเว็บ บรรทัดเปลี่ยนตามขนาดจอ จึงอ้างแค่ paragraph แล้วไฮไลต์คำนั้นในบทความ)
- เขียน Directions ของแต่ละ Part ขึ้นเองตามสไตล์ข้อสอบ ห้ามคัดลอกต้นฉบับ

## 2. Study Guide

### 2.1 องค์ประกอบของบทเรียน (Module 1–4)
1. **ทำไมสำคัญ** และความถี่ที่ออกสอบ (สูง/กลาง/ต่ำ — ประเมินเชิงคุณภาพ ห้ามแต่งตัวเลขสถิติ)
2. **หลักการ** อธิบายเป็นภาษาไทยแบบกระชับ พร้อมตารางสรุป
3. **ตัวอย่าง** ≥ 6 ประโยคในบริบทธุรกิจ (ภาษาอังกฤษพร้อมคำแปลไทยที่กดซ่อน/แสดงได้)
4. **เห็นอะไร → ตอบอะไร** วิธีจับสัญญาณในโจทย์
5. **กับดัก** ที่ข้อสอบชอบใช้ และ**จุดที่คนไทยมักพลาด**
6. **เทคนิคทำให้เร็ว**
7. **Mini Quiz** แบบ interactive ตามจำนวนใน Config เฉลยทันทีพร้อมคำอธิบาย (quiz ของ Module 4 ใช้บทความ 1–2 ชุด รวม ≥ 6 ข้อ)
8. **Cheat Sheet** สรุปท้ายบท (สั่งพิมพ์ได้)

สไตล์การเขียน: เป็นกันเองแบบครูติว ชัดเจนและไม่เยิ่นเย้อ ใช้ตารางและตัวอย่างมากกว่าย่อหน้ายาว ใช้ศัพท์ไวยากรณ์ภาษาไทยให้สม่ำเสมอ

### 2.2 รายการบทเรียน
**Module 0 — ภาพรวมและกลยุทธ์**
- รู้จักข้อสอบ: โครงสร้าง การคิดคะแนน การแบ่งเวลา (แนะนำ P5 ≈ 11 นาที / P6 ≈ 9 นาที / P7 ≈ 55 นาที) ลำดับการทำ การตัดตัวเลือก และการเดา (ห้ามเว้นว่าง)
- แผนการเรียน 4 สัปดาห์ (checklist ที่ลิงก์ไปยังบทเรียนและ Mock)

**Module 1 — Part 5 Grammar** (1 บทต่อ 1 หัวข้อ)
1. Parts of Speech & Word Forms — ตาราง suffix และตำแหน่งคำในประโยค (สำคัญที่สุด)
2. Verb Tenses และคำบอกเวลา (since, by the time, currently, next quarter)
3. Subject–Verb Agreement
4. Active vs Passive Voice
5. Pronouns (personal, possessive, reflexive, those who, each other)
6. Relative Clauses (who, whom, whose, which, that, what)
7. Prepositions (เวลา สถานที่ และ collocation เช่น responsible for, comply with)
8. Conjunction vs Preposition vs Conjunctive Adverb (although / despite / however, because / because of / therefore)
9. Correlative Conjunctions (both…and, either…or, neither…nor, not only…but also)
10. Gerund vs Infinitive (look forward to + V-ing, plan + to V)
11. Participles (คุณศัพท์ -ing/-ed, participial phrase, reduced relative clause)
12. Comparison (as…as, -er than, the most, much/far + comparative)
13. Conditionals, Subjunctive & Inversion (unless, provided that, Should you…, recommend that he be)
14. Modals & Causatives (have, get, make, let)
15. Quantifiers, Determiners & Articles (each/every, few/little, a number of vs the number of)
16. Adverbs (ตำแหน่ง, nearly/almost, still/yet/already, so/such, too/enough)

**Module 2 — Part 5 Vocabulary**
1. Word Families (compete / competition / competitive / competitively / competitor)
2. Business Collocations (meet a deadline, place an order, conduct a survey)
3. Confusing Words (rise/raise, affect/effect, by/until, among/between, adapt/adopt)
4. Phrasal Verbs ในที่ทำงาน (carry out, set up, call off, look into, fill out)
5. คำที่ความหมายคล้ายกันแต่ใช้ต่างกัน (say/tell/speak/talk, reach/arrive, lend/borrow)

**Module 3 — Part 6 Text Completion**
1. รู้จัก Part 6 และประเภทเอกสาร (e-mail, memo, notice, letter, advertisement, article, press release)
2. Grammar ตามบริบท (เลือก tense ตาม timeline ของเนื้อหา, pronoun reference)
3. Transition Words — ตารางแบ่งตามหน้าที่ (เพิ่มเติม / ขัดแย้ง / เหตุผล / ผลลัพธ์ / ลำดับเวลา)
4. Sentence Insertion — ขั้นตอนเลือกประโยค (ดูประโยคก่อนและหลัง คำเชื่อม สรรพนาม และความต่อเนื่องของเนื้อหา)

**Module 4 — Part 7 Reading Comprehension**
1. ประเภทเอกสารและโครงสร้าง (e-mail, form, invoice, schedule, web page, review, article, text message, online chat)
2. คำถาม 8 ประเภทพร้อมวิธีหาคำตอบ: Main idea/Purpose, Detail, NOT/TRUE, Inference, Vocabulary in context, Writer's intent, Sentence insertion, Cross-reference
3. Paraphrase Recognition — ตาราง ≥ 40 คู่ (postpone ↔ put off, complimentary ↔ free of charge)
4. Skimming & Scanning และการบริหารเวลาใน Part 7
5. Multiple Passages — เทคนิคเชื่อมข้อมูลข้ามบทความ

**Module 5 — คลังคำศัพท์ธุรกิจ 13 หมวด:** Office & Administration, HR & Recruitment, Finance & Accounting, Marketing & Sales, Purchasing & Logistics, Manufacturing & Quality Control, Travel & Hospitality, Dining & Events, Real Estate & Facilities, Technology & IT, Health & Insurance, Contracts & Legal, Customer Service
- แต่ละคำมี word, part of speech, คำแปลไทย, ตัวอย่างประโยคพร้อมคำแปล, collocations และ synonyms (ใช้ฝึก paraphrase)
- ฟีเจอร์: ค้นหา กรองตามหมวด Flashcard แบบพลิกการ์ด และทำเครื่องหมาย "จำได้แล้ว"

**Module 6 — รวมกับดักและ Cheat Sheet** ในหน้าเดียวที่สั่งพิมพ์ได้

## 3. Mock Exam Engine

### 3.1 โหมด
| โหมด | รายละเอียด |
|---|---|
| Full Test | 100 ข้อ 75 นาที ไม่แสดงเฉลยจนกว่าจะส่ง และส่งอัตโนมัติเมื่อหมดเวลา |
| Part Practice | เลือก Part 5/6/7 จากชุดใดก็ได้ เลือกได้ว่าจะจับเวลาหรือไม่ และเปิด/ปิดการเฉลยทันทีได้ |
| Topic Drill | สุ่ม 10 หรือ 20 ข้อตาม tag จากทุกชุดและจาก quiz ในบทเรียน (ข้อจาก Part 6/7 ต้องแสดงบทความประกอบ) |
| Mistake Notebook | เก็บข้อที่ตอบผิดจากทั้ง Mock และ quiz อัตโนมัติ เมื่อตอบถูกติดกัน 2 ครั้งจึงนำออกจากสมุด |

### 3.2 หน้าทำข้อสอบ
- Header: ชื่อชุด, Part ปัจจุบัน, Timer นับถอยหลัง (เตือนเมื่อเหลือ 15 และ 5 นาที), จำนวนข้อที่ตอบแล้ว x/100, ปุ่มส่ง
- Part 5 แสดงทีละข้อ และสลับเป็นมุมมองรายการได้
- Part 6/7 ใช้ split view: บทความอยู่ซ้าย (scroll แยก) คำถามของชุดอยู่ขวา บนมือถือใช้แท็บ "บทความ | คำถาม"
- จัดหน้าเอกสารให้เหมือนของจริง: e-mail มี To/From/Date/Subject, invoice/schedule เป็นตาราง, แชทมีชื่อและเวลา, บทความมีพาดหัว
- Question Navigator: grid ข้อ 101–200 แสดงสถานะ ยังไม่ตอบ / ตอบแล้ว / ติดธง / ข้อปัจจุบัน และคลิกเพื่อไปยังข้อนั้นได้
- Keyboard: กด A–D หรือ 1–4 เพื่อเลือกคำตอบ, ← → เพื่อเปลี่ยนข้อ, F เพื่อติดธง
- Autosave ทุกการกระทำ เมื่อเปิดใหม่ให้เลือก "ทำต่อ" หรือ "เริ่มใหม่" (เวลาเดินต่อจากที่เหลืออยู่)
- เตือนด้วย beforeunload ระหว่างสอบ
- ก่อนส่ง แสดง modal บอกเลขข้อที่ยังไม่ตอบและข้อที่ติดธง
- บันทึกเวลาที่ใช้ต่อข้อและต่อชุด เพื่อวิเคราะห์ pacing
- (Nice-to-have) ลากไฮไลต์ข้อความในบทความได้

### 3.3 หน้าผลสอบ
- คะแนนดิบรวมและรายพาร์ท (x/30, x/16, x/54)
- คะแนน Reading โดยประมาณ (5–495) แสดงเป็นช่วง พร้อมหมายเหตุว่า "เป็นค่าประมาณ ไม่ใช่ตารางแปลงคะแนนทางการของ ETS"
- เวลาที่ใช้ในแต่ละพาร์ทเทียบกับเวลาที่แนะนำ
- ความแม่นยำราย tag เรียงจากจุดที่อ่อนที่สุด พร้อมปุ่มไปยังบทเรียนที่เกี่ยวข้อง
- Review: กรองได้ว่าดู ทั้งหมด / ผิด / ติดธง / ไม่ได้ตอบ แสดงคำตอบของผู้เรียนเทียบกับเฉลย พร้อมคำอธิบายและไฮไลต์ประโยคหลักฐานในบทความ
- ปุ่ม "ทำใหม่เฉพาะข้อที่ผิด"
- History: ตารางประวัติการสอบและกราฟพัฒนาการ (วาดด้วย SVG เอง)

### 3.4 รูปแบบเฉลย (ภาษาไทย ทุกข้อ)
- **ทำไมถูก** อ้างกฎไวยากรณ์หรือหลักฐานในบทความ
- **ทำไมตัวเลือกอื่นผิด** อธิบายครบทั้ง 3 ตัวเลือก
- **จุดสังเกตและเทคนิค** บอกว่าครั้งหน้าเจอโจทย์แบบนี้ควรทำอย่างไร
- Part 5 มีคำแปลประโยคเต็ม ส่วน Part 6–7 มีสรุปบทความเป็นภาษาไทยและคำศัพท์สำคัญ
- ลิงก์ไปยังบทเรียนที่เกี่ยวข้องตาม tag

## 4. กฎคุณภาพข้อสอบ (สำคัญที่สุด)
1. **แต่งใหม่ทั้งหมด** ห้ามคัดลอกหรือดัดแปลงจนใกล้เคียงข้อสอบจริงของ ETS หรือหนังสือที่มีลิขสิทธิ์ ให้เลียนแบบเฉพาะรูปแบบ ระดับความยาก และสไตล์
2. ใช้บริบทธุรกิจหรือที่ทำงานแบบสากล ชื่อบริษัทและบุคคลเป็นชื่อสมมติที่หลากหลาย วันที่ เวลา และราคาต้องสอดคล้องกันทั้งชุด (โดยเฉพาะ Multiple passages)
3. **ต้องมีคำตอบถูกเพียงข้อเดียวแน่นอน** ตัวลวงต้องน่าเชื่อแต่ผิดชัดเจนเมื่อวิเคราะห์ ห้ามมีตัวเลือกที่ "ตอบได้เหมือนกัน"
4. ตัวลวงใน Part 5 ต้องสมจริง เช่น ชุด word form (complete / completion / completely / completed), ชุดคำศัพท์ชนิดเดียวกัน, ชุด preposition/conjunction
5. ใน Part 7 ตัวเลือกที่ถูกต้องต้อง **paraphrase** จากบทความ ไม่ลอกคำตรงๆ ตัวลวงใช้คำซ้ำจากบทความเป็นกับดักได้ และทุกข้อต้องมี evidence ที่เป็นข้อความตรงตัวจากบทความ
6. Multiple passages ทุกชุดต้องมีคำถาม cross-reference (ต้องใช้ข้อมูลจาก ≥ 2 บทความ) อย่างน้อย 1 ข้อ
7. สัดส่วนความยาก: ง่าย 30% / กลาง 45% / ยาก 25% และระบุ difficulty ทุกข้อ
8. การกระจายเฉลยในแต่ละชุด: แต่ละตัวอักษรอยู่ที่ 20–30% และเฉลยตัวเดียวกันติดกันไม่เกิน 3 ข้อ
9. ความยาวบทความ: Part 6 ≈ 100–150 คำ / Part 7 single ≈ 60–300 คำ / multiple ≈ 100–250 คำต่อบทความ
10. ใช้ American English รูปแบบเวลา 10:30 A.M. และสกุลเงิน $
11. **ห้ามมี placeholder ในไฟล์ที่ส่งมอบ** ("...", TODO, Lorem ipsum, "เพิ่มภายหลัง") ทุกข้อและทุกบทต้องเขียนเต็ม

สัดส่วนประเภทคำถามโดยประมาณ (เป็นแนวทางออกแบบ ไม่ใช่สัดส่วนทางการ)
- Part 5 (30): word form ~8, vocabulary ~10, verb (tense/voice/agreement) ~4, preposition/conjunction ~4, pronoun/relative ~2, อื่นๆ ~2
- Part 6 (16): sentence insertion 4, verb/tense ~4, vocabulary ~4, transition ~2–3, อื่นๆ ~1–2
- Part 7 (54): detail, inference, main idea/purpose, NOT/TRUE, vocabulary, intent ≥ 2, sentence insertion 2, cross-reference ≥ 5

## 5. Data Schema
- ข้อมูลทั้งหมดเป็นไฟล์ .js ที่เพิ่มค่าเข้า window.TOEIC ซึ่งสร้างเพียงครั้งเดียวใน data/_init.js (โหลดก่อนทุกไฟล์)
- **แยกข้อสอบ 1 ชุดเป็นหลายไฟล์** (meta / part5 / part6 / part7-single / part7-multi) เพื่อไม่ให้ไฟล์ใหญ่เกินกว่าจะเขียนได้ในครั้งเดียว
- ระบุคำตอบเป็นตัวอักษร "A"–"D" (ไม่ใช้ index) เพื่อลดความผิดพลาด
- engine สร้าง id ที่ไม่ซ้ำกันทั้งเว็บให้ทุกข้ออัตโนมัติ (เช่น mock-01-101, p5-word-forms-q03) เพื่อใช้กับสมุดข้อผิดและสถิติ

~~~js
// data/_init.js
window.TOEIC = { exams: {}, lessons: {}, vocab: {}, tags: {} };

// data/exams/mock-01/meta.js
window.TOEIC.exams["mock-01"] = { id: "mock-01", title: "Mock Test 1", timeLimitMin: 75 };

// data/exams/mock-01/part5.js
window.TOEIC.exams["mock-01"].part5 = [
  {
    no: 101,
    stem: "All expense reports must be submitted ------- Friday at 5:00 P.M.",
    options: ["until", "by", "within", "since"],
    answer: "B",
    tags: ["preposition"],
    difficulty: "easy",
    translationTh: "รายงานค่าใช้จ่ายทั้งหมดต้องส่งภายในวันศุกร์ เวลา 17.00 น.",
    explain: {
      why: "by + เวลา = ไม่เกินหรือภายในเวลานั้น ใช้กับกำหนดส่ง (deadline)",
      wrong: {
        A: "until = ต่อเนื่องไปจนถึงเวลานั้น ใช้กับการกระทำที่ดำเนินต่อเนื่อง เช่น stay until Friday",
        C: "within ต้องตามด้วยช่วงระยะเวลา เช่น within three days ไม่ใช่วันที่เจาะจง",
        D: "since บอกจุดเริ่มต้นในอดีต ใช้กับ perfect tense"
      },
      tip: "เห็น submit / complete / return + กำหนดเวลา ให้นึกถึง by"
    }
  }
];

// data/exams/mock-01/part6.js
window.TOEIC.exams["mock-01"].part6 = [
  {
    setId: "p6-1",
    header: "Questions 131-134 refer to the following e-mail.",
    passageHtml: "<p>... <span class='blank' data-q='131'></span> ...</p>",
    summaryTh: "...",
    keyVocab: [{ word: "...", th: "..." }],
    questions: [ /* ข้อ 131–134 ใช้ schema แบบ part5 แต่ไม่มี stem; ข้อเลือกประโยคให้ใส่ type: "sentence-insertion" */ ]
  }
];

// data/exams/mock-01/part7-single.js  (part7-multi.js ใช้ key part7Multi และ schema เดียวกัน)
window.TOEIC.exams["mock-01"].part7Single = [
  {
    setId: "p7-1",
    kind: "single", // "single" | "double" | "triple"
    header: "Questions 147-148 refer to the following notice.",
    passages: [{ label: "Notice", html: "..." }],
    summaryTh: "...",
    keyVocab: [],
    questions: [
      {
        no: 147,
        stem: "What is the purpose of the notice?",
        options: ["...", "...", "...", "..."],
        answer: "C",
        tags: ["main-idea"],
        difficulty: "easy",
        evidence: [{ passage: 0, quote: "ข้อความตรงตัวจากบทความ" }],
        explain: { why: "...", wrong: { A: "...", B: "...", D: "..." }, tip: "..." }
      }
    ]
  }
];

// data/tags.js — tag ที่อนุญาตให้ใช้ และบทเรียนที่ผูกไว้ (ใช้แนะนำบทเรียนจากจุดอ่อน)
window.TOEIC.tags = {
  "word-form": { th: "รูปคำ", lesson: "p5-word-forms" },
  "inference": { th: "การอนุมาน", lesson: "p7-question-types" }
};

// data/lessons/p5-word-forms.js
window.TOEIC.lessons["p5-word-forms"] = {
  id: "p5-word-forms", module: 1, order: 1,
  title: "Parts of Speech & Word Forms", frequency: "สูง",
  blocks: [ /* type: text | table | examples | clue | callout (tone: tip | trap | thai-mistake) | cheatsheet */ ],
  quiz: [ /* ข้อเดี่ยวแบบ part5 หรือชุดบทความแบบ part6/part7 */ ]
};

// data/vocab/hr.js
window.TOEIC.vocab["hr"] = {
  title: "HR & Recruitment",
  words: [
    { word: "candidate", pos: "n.", th: "ผู้สมัคร", ex: "...", exTh: "...", colloc: ["qualified candidate"], syn: ["applicant"] }
  ]
};
~~~

## 6. Technical Requirements
- ใช้ HTML5 + CSS3 + Vanilla JavaScript (ES2020) ไม่ใช้ framework ไม่มี build step และตัวเว็บไม่พึ่ง npm package
- **ต้องเปิด index.html ด้วยการดับเบิลคลิก (file://) แล้วใช้งานได้ทันที** ดังนั้น
  - ห้ามใช้ fetch() โหลดไฟล์ในเครื่อง และห้ามใช้ `<script type="module">` (Chrome บล็อกเมื่อเปิดผ่าน file://)
  - โหลดทุกไฟล์ด้วย `<script src>` แบบ classic ตามลำดับ data → core → components → views → app.js
  - ห่อโค้ดด้วย IIFE ให้เหลือ global แค่ window.TOEIC (ข้อมูล) และ window.App (โค้ด)
- Hash routing: #/, #/lessons, #/lesson/:id, #/vocab/:topic, #/exams, #/exam/:id/:mode, #/drill/:tag, #/result/:attemptId, #/history, #/mistakes, #/plan
- หน้า Home เป็น Dashboard แสดงความคืบหน้าบทเรียน คะแนน Mock ล่าสุด 3 tag ที่อ่อนที่สุด บทเรียนที่แนะนำถัดไป และปุ่มเริ่มสอบ
- ใช้ localStorage (prefix "toeicR:") เก็บความคืบหน้าบทเรียน ศัพท์ที่จำได้ ข้อสอบที่ทำค้าง ประวัติผลสอบ สมุดข้อผิด และ settings พร้อมปุ่ม Export/Import JSON และ Reset
- Timer คำนวณเวลาที่เหลือจาก timestamp (Date.now()) แทนการนับรอบ setInterval เพื่อไม่ให้เวลาเพี้ยนเมื่อแท็บอยู่เบื้องหลัง
- UI สะอาด อ่านง่ายแบบตำราเรียนสมัยใหม่ ใช้ฟอนต์ Sarabun หรือ Noto Sans Thai คู่กับ Inter (Google Fonts พร้อม system fallback เมื่อออฟไลน์) ขนาดตัวอักษร ≥ 16px และ line-height ~1.7
- มี Dark mode (ตาม prefers-color-scheme พร้อมปุ่มสลับ) และปุ่มปรับขนาดตัวอักษร
- Responsive ตั้งแต่จอกว้าง 375px ถึงเดสก์ท็อป และใช้ split view เมื่อจอกว้าง ≥ 1024px
- Accessibility: ใช้ semantic HTML ตัวเลือกเป็น radio group focus มองเห็นชัด ใช้ aria-live สำหรับการเตือนเวลา และ contrast ผ่านระดับ WCAG AA
- Print CSS: บทเรียนและ Cheat Sheet สั่งพิมพ์หรือ Save as PDF ได้สวย (ซ่อนเมนูและปุ่ม)
- Footer: "TOEIC is a registered trademark of ETS. This site is not affiliated with or endorsed by ETS."

## 7. โครงสร้างไฟล์
~~~text
toevic-reading/
├── index.html
├── README.md
├── PLAN.md
├── css/            base.css, components.css, exam.css, print.css
├── js/
│   ├── core/       router.js, store.js, timer.js, utils.js
│   ├── components/ question.js, passage.js, navigator.js, quiz.js
│   ├── views/      home.js, lessons.js, lesson.js, vocab.js, exam.js, result.js, history.js, mistakes.js, plan.js
│   └── app.js
├── data/
│   ├── _init.js, tags.js
│   ├── lessons/    1 ไฟล์ต่อ 1 บท
│   ├── vocab/      1 ไฟล์ต่อ 1 หมวด
│   └── exams/
│       ├── mock-01/  meta.js, part5.js, part6.js, part7-single.js, part7-multi.js
│       └── mock-02/  โครงสร้างเดียวกัน
└── scripts/
    └── validate.js
~~~

## 8. scripts/validate.js
รันด้วย `node scripts/validate.js` เพื่อตรวจทั้งหมด หรือใช้ `--exam <id>` / `--lessons` เพื่อตรวจเฉพาะส่วน
ใช้เฉพาะ Node built-in (fs, path, vm) โหลดไฟล์ data ใน sandbox ที่มี window แล้วตรวจสิ่งต่อไปนี้
- จำนวนข้อ เลขข้อ และขนาดชุดตรงตามหัวข้อ 1 (เลขข้อต่อเนื่อง ไม่ซ้ำ ไม่ขาด)
- Part 6 มี 4 ชุด × 4 ข้อ แต่ละชุดมี sentence-insertion 1 ข้อ และ blank ใน passage ตรงกับเลขข้อ
- ทุกข้อมี options 4 ตัวที่ไม่ว่างและไม่ซ้ำ answer เป็น A–D มี explain.why และ explain.wrong ครบ 3 ตัวที่ไม่ใช่เฉลย tag มีอยู่ใน tags.js และ difficulty ถูกต้อง
- Part 7: พบ evidence.quote จริงในบทความ (หลังตัด HTML), ข้อแทรกประโยคมีตำแหน่ง [1]–[4] ในบทความ, ข้อความที่ยกมาในคำถาม intent มีอยู่ในแชทจริง
- การกระจายเฉลยและจำนวนเฉลยที่ติดกันเป็นไปตามกฎข้อ 4.8
- quiz ทุกบทมีจำนวนข้อตามหัวข้อ 2.1 และผ่านกฎเดียวกับข้อสอบ ทุก tag มีบทเรียนรองรับ
- ไม่มี placeholder (TODO, Lorem, "...")
- พิมพ์ตารางสรุป และจบด้วย exit code 1 เมื่อพบ error
- `--blind <id>` พิมพ์โจทย์และตัวเลือกโดยไม่มีเฉลย สำหรับให้ subagent ทำข้อสอบในขั้น QA

## 9. ขั้นตอนการทำงาน
ทำทีละ Phase เมื่อจบแต่ละ Phase ให้อัปเดต checklist ใน PLAN.md สรุปสั้นๆ ว่าทำอะไรไปและควรทดสอบอะไร แล้ว git commit (ถ้าเป็น git repo)
เขียนข้อมูลทีละไฟล์ และรัน validate ส่วนที่เกี่ยวข้องทันทีหลังเขียนเสร็จแต่ละไฟล์

1. **Phase 1 — Plan (หยุดรอการอนุมัติ)** สร้าง PLAN.md ที่มีโครงสร้างไฟล์และรายการบทเรียน แล้วสร้าง **Blueprint ของ Mock แต่ละชุด** ใน blueprints/mock-0X.md เป็นตาราง (เลขข้อ | Part | ชุด | ประเภท/tag | ความยาก | ตัวอักษรเฉลยที่กำหนดล่วงหน้า) ที่ผ่านกฎข้อ 4 แล้ว
2. **Phase 2 — Core** สร้าง index.html, layout, router, store, theme, หน้า Home, lesson renderer, quiz component และ validate.js
3. **Phase 3 — Lessons** เขียน Module 0–4 และ 6 ให้ครบทุกบทพร้อม quiz
4. **Phase 4 — Vocabulary** เขียน Module 5 และทำ flashcard
5. **Phase 5 — Exam Engine** ทำทุกโหมดในหัวข้อ 3 (ทดสอบด้วย mock-demo ขนาดเล็ก แล้วลบออกเมื่อเสร็จ)
6. **Phase 6 — Mock Test 1** เขียนตาม blueprint ทีละไฟล์ แล้วรัน validate --exam mock-01 และแก้จนผ่าน
7. **Phase 7 — Results & Analytics** ทำหน้าผลสอบ review history mistake notebook และ topic drill
8. **Phase 8 — Mock Test 2** ทำแบบเดียวกับ Phase 6
9. **Phase 9 — QA**
   - validate ต้องผ่านโดยไม่มี error
   - ส่งผลลัพธ์จาก `--blind` ให้ subagent ทำข้อสอบโดยไม่เห็นเฉลย ข้อที่ตอบไม่ตรงเฉลยหรือกำกวมให้แก้ แล้วตรวจซ้ำ
   - ทดสอบ flow: เริ่มสอบ → รีเฟรช → ทำต่อ → ส่ง → ดูผล → review → ทำใหม่เฉพาะข้อที่ผิด
   - เขียน README.md อธิบายวิธีเปิดเว็บ วิธีเพิ่ม mock ชุดใหม่ และวิธีรัน validate

ถ้าเจอจุดที่ spec ไม่ได้ระบุ ให้ตัดสินใจอย่างสมเหตุสมผลแล้วบันทึกไว้ใน PLAN.md และถามเฉพาะเรื่องที่กระทบโครงสร้างใหญ่

## 10. Definition of Done
- [ ] เปิด index.html ผ่าน file:// บน Chrome, Edge, Firefox และ Safari ได้โดยไม่มี error ใน console
- [ ] บทเรียนครบตามหัวข้อ 2.2 บทใน Module 1–4 มีองค์ประกอบครบทั้ง 8 ส่วน และ quiz ใช้งานได้
- [ ] คลังคำศัพท์ครบตาม Config และ flashcard ใช้งานได้
- [ ] Mock ครบตาม Config ผ่าน validate โดยไม่มี error และผ่าน QA แบบไม่เห็นเฉลย
- [ ] ทุกโหมดการสอบทำงาน และรีเฟรชแล้วทำต่อได้
- [ ] หน้าผลสอบมีคะแนนประมาณการ วิเคราะห์จุดอ่อน และ review พร้อมเฉลยละเอียด
- [ ] ใช้งานบนมือถือจอกว้าง 375px ได้ดี มี dark mode และสั่งพิมพ์บทเรียนได้
