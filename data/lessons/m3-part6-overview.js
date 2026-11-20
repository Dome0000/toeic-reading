// data/lessons/m3-part6-overview.js — Module 3 · บทที่ 1
window.TOEIC.lessons["m3-part6-overview"] = {
  id: "m3-part6-overview",
  module: 3,
  order: 1,
  title: "รู้จัก Part 6 และประเภทเอกสาร",
  frequency: "สูง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> Part 6 (Text Completion) มี 16 ข้อ (ข้อ 131–146) — เอกสาร 4 ชุด ชุดละ 4 ข้อ แต่ละชุดมี <em>ข้อเลือกประโยคแทรก 1 ข้อ</em> คะแนนของคุณที่นี่ขึ้นกับ 2 สิ่ง: (1) อ่าน timeline ของบทความเป็น (2) รู้ว่าเอกสารแต่ละชนิดหน้าตาอย่างไร</p>" },

    { type: "table", title: "ประเภทเอกสารใน Part 6 และหน้าตาสำคัญ", headers: ["ชนิด", "หน้าตา/โครงสร้าง", "ถามเรื่องอะไรบ่อย"], rows: [
      ["E-mail", "To / From / Date / Subject + เนื้อความ (กึ่งทางการ)", "purpose, detail, vocabulary"],
      ["Memo", "MEMORANDUM + To/From/Date/Re + สั้น กระชับ", "what/why/how (brief internal communication)"],
      ["Notice / Sign / Announcement", "พาดหัวตัวหนา, วัตถุประสงค์, เนื้อความกระชับ", "purpose, detail, when/where"],
      ["Letter (business)", "ที่อยู่ผู้ส่ง, วันที่, ที่อยู่ผู้รับ, คำทักทาย, เนื้อความ, คำลงท้าย", "purpose, detail, tone (formal)"],
      ["Advertisement", "พาดหัวดึงดูด + รายละเอียดสินค้า/บริการ + ช่องทางติดต่อ", "purpose, detail, vocabulary"],
      ["Article / Press release", "พาดหัว + ย่อหน้าแรก (lead: who/what/when/where/why)", "purpose, detail, vocabulary"],
      ["Form / Invoice", "ตาราง + ข้อมูล structured", "detail (numbers, dates, names)"]
    ]},

    { type: "table", title: "กลยุทธ์ 5 ขั้นทำ Part 6 ใน ~2 นาที", headers: ["ขั้น", "ทำอะไร"], rows: [
      ["1. อ่านหัวเอกสาร", "To/From/Date/Subject หรือหัวข้อ — รู้ชนิดและบริบททันที"],
      ["2. สแกน timeline", "ขีดวันที่ กาล (had/has/will) — กำหนดกรอบเวลา"],
      ["3. ดู 4 ช่องว่าง", "ช่องไหนวัดแกรมมาร์/ศัพท์/ประโยคแทรก — วางกลยุทธ์รายช่อง"],
      ["4. เติมทีละช่อง", "ดูหน้า-หลังของช่องว่าง แล้วเลือกคำตอบ"],
      ["5. ทวนทั้งชุด", "อ่านบทความทั้งหมดรอบสุดท้ายเพื่อเช็คความต่อเนื่อง"]
    ]},

    { type: "examples", title: "ตัวอย่างการเปิดเอกสารตามชนิด", items: [
      { en: "To: All Staff | From: Facilities | Date: March 12 | Subject: Elevator Maintenance", th: "ตัวอย่าง e-mail หัวเรื่องตรงไปตรงมา: ดูแลลิฟต์ — ถามเรื่องวัน/เวลา/ผลกระทบ" },
      { en: "MEMORANDUM | To: Department Heads | Re: Revised Travel Policy", th: "ตัวอย่าง memo — ถามว่านโยบายใหม่อะไรและมีผลเมื่อไหร่" },
      { en: "Notice: Parking Lot B will be closed on Saturday, April 20, for resurfacing.", th: "ตัวอย่าง notice — ถามว่าที่จอดรถปิดวันไหนและทำไม" },
      { en: "We are pleased to announce the opening of our new downtown branch on May 1.", th: "ตัวอย่าง press release — ถามว่าเปิดสาขาใหม่เมื่อไหร่" },
      { en: "Dear Mr. Alvarez, Thank you for your order #4581 placed on June 3.", th: "ตัวอย่าง letter/order confirmation — ถามเรื่องเลขออเดอร์/วันที่" },
      { en: "Introducing the all-new UltraBook X — the lightest business laptop ever!", th: "ตัวอย่าง advertisement — ถามว่าโฆษณาขายอะไร/มีข้อเสนออะไร" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>เห็น <strong>To/From/Date/Subject</strong> → อ่านแล้วถามตัวเอง ‘ใครถึงใคร เรื่องอะไร วันที่เท่าไหร่’</li><li>เห็น <strong>MEMORANDUM</strong> → ภาษาภายใน กึ่งทางการ — ทักทาย/ลงท้ายไม่เป็นทางการมาก</li><li>เห็น <strong>Dear … / Sincerely</strong> → จดหมายภายนอก ทางการ</li><li>เห็น <strong>พาดหัวหนังสือพิมพ์</strong> → ย่อหน้าแรกตอบ 5W1H</li><li>เห็น <strong>ช่องว่างที่เป็นประโยคเต็ม</strong> (ยาวกว่าคำอื่น) → แนวข้อแทรกประโยค — ดูเฉลย/ตัวเลือกประกอบ</li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>อ่านแค่ช่องว่างไม่พอ</strong> — ข้อแทรกประโยคต้องอ่านทั้งย่อหน้า</li><li><strong>Date/Time หลอก</strong> — ‘by Friday, March 8’ vs ‘until Friday’ — อย่าสับสน</li><li><strong>ศัพท์ทางการระดับ business</strong>: ‘regarding’, ‘concerning’, ‘pursuant to’, ‘in accordance with’ — แปลงเป็น ‘about’ ในหัวได้</li><li><strong>ตัวเลข/วันที่ไม่ตรงกันระหว่างคำถามกับบทความ</strong> — ข้อลวงมักสลับตัวเลขกับวันที่</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>ข้าม To/From/Date แล้วตอบคำถาม — พลาดบริบทสำคัญ (ใครเขียนถึงใคร)</li><li>ใช้เวลากับ Part 6 มากเกินไป — เป้าคือ ~2 นาที/ชุด</li><li>ไม่ทวนบทความหลังเติมช่องว่าง — ข้อแทรกประโยคมักผิดเพราะไม่เช็คทั้งย่อหน้า</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "อ่านหัวเอกสาร (5 วินาที) → ขีดวันที่/กาล (10 วินาที) → เติมทีละช่องโดยเริ่มจากช่องที่ง่ายสุด (ศัพท์/แกรมมาร์ก่อน ข้อแทรกประโยคทีหลัง) — รวม ~2 นาทีต่อชุด" },

    { type: "cheatsheet", html: "<ul><li>Part 6 = 4 ชุด × 4 ข้อ = 16 ข้อ (131–146) · ทุกชุดมีข้อแทรกประโยค 1 ข้อ · เวลา ~9 นาที</li><li>เอกสาร: e-mail · memo · notice · letter · advertisement · article/press release · form/invoice</li><li>e-mail = To/From/Date/Subject · memo = MEMORANDUM + Re: · letter = Dear…Sincerely · press release = lead paragraph</li><li>กลยุทธ์: หัวเอกสาร → timeline → 4 ช่องว่าง → เติม → ทวนทั้งชุด</li></ul>" }
  ],
  quiz: [
    { no: 1, stem: "How many questions are in Part 6 of the TOEIC Reading Section?", options: ["10", "12", "16", "20"], answer: "C", tags: ["detail"], difficulty: "easy", translationTh: "Part 6 มีกี่ข้อ", explain: { why: "Part 6 มี 16 ข้อ (ข้อ 131–146) 4 ชุด × 4 ข้อ", wrong: { A: "10 ไม่ใช่", B: "12 ไม่ใช่", D: "20 ไม่ใช่" }, tip: "131–146 = 16 ข้อ" } },
    { no: 2, stem: "Which document type uses To / From / Date / Subject headers?", options: ["Memo", "E-mail", "Letter", "Invoice"], answer: "B", tags: ["detail"], difficulty: "easy", translationTh: "เอกสารชนิดใดใช้ส่วนหัว To / From / Date / Subject", explain: { why: "e-mail ใช้ To/From/Date/Subject เป็นมาตรฐาน", wrong: { A: "memo ใช้ MEMORANDUM + Re: (ไม่ใช่ Subject)", C: "letter มีที่อยู่/คำทักทาย ไม่ใช่ To/From", D: "invoice เป็นตารางรายการสินค้า" }, tip: "To/From/Subject = e-mail" } },
    { no: 3, stem: "In Part 6, each passage includes exactly one which type of question?", options: ["Reading comprehension", "Vocabulary", "Grammar", "Sentence insertion"], answer: "D", tags: ["detail", "sentence-insertion"], difficulty: "easy", translationTh: "แต่ละบทความใน Part 6 มีคำถามชนิดใดอยู่หนึ่งข้อแน่นอน", explain: { why: "ทุกชุด Part 6 มีข้อเลือกประโยคแทรก 1 ข้อ", wrong: { A: "ไม่มี ‘reading comprehension’ category ใน Part 6", B: "vocabulary บางชุดไม่มี", C: "แกรมมาร์มีบ้างแต่ไม่ทุกชุด" }, tip: "Part 6 = sentence insertion 1 ข้อ/ชุด เสมอ" } },
    { no: 4, stem: "What is the recommended time for Part 6?", options: ["9 minutes", "15 minutes", "25 minutes", "5 minutes"], answer: "A", tags: ["detail"], difficulty: "medium", translationTh: "เวลาที่แนะนำสำหรับ Part 6 คือเท่าไร", explain: { why: "Part 6 ≈ 9 นาที (4 ชุด × ~2 นาที)", wrong: { B: "15 นาทีมากเกินไป", C: "25 นาทีจะทำ Part 7 ไม่ทัน", D: "5 นาทีเร็วเกินไป" }, tip: "P6 ≈ 9 นาที" } },
    { no: 5, stem: "A document labeled MEMORANDUM with To / From / Re headers is most likely what?", options: ["A formal letter to a client", "An internal business memo", "A press release", "An advertisement"], answer: "B", tags: ["detail"], difficulty: "medium", translationTh: "เอกสารที่มีป้าย MEMORANDUM พร้อมหัว To / From / Re น่าจะเป็นอะไร", explain: { why: "MEMORANDUM = เอกสารภายในบริษัท", wrong: { A: "letter ภายนอกใช้ Dear…/Sincerely", C: "press release มีพาดหัวข่าว", D: "advertisement มีข้อเสนอขາຍ" }, tip: "MEMORANDUM = บันทึกภายใน" } },
    { no: 6, stem: "Which reading strategy is recommended first for any Part 6 passage?", options: ["Guess from the options", "Fill the blanks immediately", "Read the header (To/From/Date/Subject or title) to identify context", "Translate every word to Thai"], answer: "C", tags: ["detail"], difficulty: "easy", translationTh: "กลยุทธ์แรกที่แนะนำใน Part 6 คืออะไร", explain: { why: "อ่านหัวเอกสารก่อนเพื่อรู้ชนิดและบริบท (ใครเขียนถึงใคร เรื่องอะไร)", wrong: { A: "เดาไม่มีหลักการ", B: "เติมทันทีไม่ดูบริบทเสี่ยงผิด", D: "แปลทุกคำเสียเวลา" }, tip: "หัวเอกสารก่อนเสมอ" } },
    { no: 7, stem: "Which document type typically begins with a lead paragraph answering who/what/when/where/why?", options: ["Invoice", "Memo", "Letter", "Article/Press release"], answer: "D", tags: ["detail"], difficulty: "medium", translationTh: "เอกสารชนิดใดมักขึ้นต้นด้วยย่อหน้า lead ตอบ 5W1H", explain: { why: "บทความ/ข่าวประชาสัมพันธ์ = lead paragraph", wrong: { A: "invoice เป็นตาราง", B: "memo ขึ้นต้นด้วยจุดประสงค์สั้นๆ", C: "letter ขึ้นต้นด้วยคำขอบคุณ/อ้างถึง" }, tip: "Press release = headline + lead" } },
    { no: 8, stem: "In a Part 6 e-mail, the line 'Subject: Revised Travel Policy' tells you what?", options: ["The main topic of the e-mail", "The recipient's name", "The attachment name", "The date of the message"], answer: "A", tags: ["detail"], difficulty: "easy", translationTh: "บรรทัด 'Subject: Revised Travel Policy' บอกอะไร", explain: { why: "Subject = หัวเรื่อง/ใจความอีเมล", wrong: { B: "ผู้รับอยู่ใน To ไม่ใช่ Subject", C: "ไฟล์แนบอยู่ใน Attachment ไม่ใช่ Subject", D: "วันที่อยู่ใน Date ไม่ใช่ Subject" }, tip: "Subject = เรื่องที่อีเมลพูดถึง" } },
    { no: 9, stem: "Why is it important to note the Date line before answering time-related questions?", options: ["The Date tells you the sender's timezone", "Timeline markers (dates, tenses) determine the correct answers", "The Date is required for the signature", "It is not important"], answer: "B", tags: ["inference"], difficulty: "medium", translationTh: "ทำไมต้องสนใจบรรทัด Date ก่อนตอบคำถามเรื่องเวลา", explain: { why: "Timeline markers (yesterday/last week/next quarter, กาล) กำหนดคำตอบที่ถูกใน Part 6 — โดยเฉพาะข้อ tense", wrong: { A: "Timezone ไม่ได้บอกจาก Date เสมอไป", C: "Signature ไม่เกี่ยวกับ Date", D: "สำคัญมาก — เฉลยหลายข้ออิงจาก timeline" }, tip: "ดู Date + กริยาก่อนเลือก tense" } },
    { no: 10, stem: "Which is NOT a recommended Part 6 strategy?", options: ["Skim the header first", "Mark timeline markers", "Skip reviewing the whole passage after filling blanks", "Start with the easiest blank"], answer: "C", tags: ["not-true"], difficulty: "hard", translationTh: "ข้อใด ไม่ใช่ กลยุทธ์ Part 6 ที่แนะนำ", explain: { why: "ควรทวนบทความทั้งชุดหลังเติมช่องว่างเสมอ โดยเฉพาะข้อแทรกประโยค — ตัวเลือกนี้ขัดแย้งกับกลยุทธ์ที่ถูก", wrong: { A: "อ่านหัวเอกสารก่อน = ถูกต้อง", B: "ขีด timeline = ถูกต้อง", D: "เริ่มจากช่องง่ายก่อน = ถูกต้อง" }, tip: "ทวนทั้งชุดก่อนกดส่ง" } }
  ]
};
