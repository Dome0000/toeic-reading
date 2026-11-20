// data/lessons/m4-document-types.js — Module 4 · บทที่ 1
window.TOEIC.lessons["m4-document-types"] = {
  id: "m4-document-types",
  module: 4,
  order: 1,
  title: "ประเภทเอกสารและโครงสร้าง Part 7",
  frequency: "สูง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> Part 7 มี 54 ข้อ (ข้อ 147–200) — คะแนนส่วนใหญ่มาจากทักษะอ่านบทความ 54 ข้อ และคุณต้อง <em>รับรู้หน้าตาของเอกสารใน 10 วินาที</em> ว่ารู้อะไร อ่านส่วนไหนก่อน</p>" },

    { type: "table", title: "ประเภทเอกสาร 11 ชนิดใน TOEIC Part 7", headers: ["ชนิด", "หน้าตา", "อ่านอะไรก่อน", "คำถามที่พบบ่อย"], rows: [
      ["E-mail", "To/From/Date/Subject + ย่อหน้าสั้นเป็นทางการ", "Subject (เรื่อง) + ประโยคแรกว่า purpose", "purpose, detail, inference, writer-intent"],
      ["Memo", "MEMORANDUM + To/From/Date/Re", "Re: และย่อหน้าเปิด", "purpose, detail"],
      ["Letter (ธุรกิจ)", "จดหมายภายนอก — Dear…Sincerely", "คำทักทาย + ประโยคแรก", "purpose, detail, tone"],
      ["Notice / Announcement", "พาดหัว + สาระกระชับ", "พาดหัวและวันที่", "purpose, detail, when/where"],
      ["Form / Invoice", "ตาราง + ข้อมูล (ตัวเลข วันที่ ชื่อ)", "หัวตาราง (columns)", "detail (numbers, dates, names)"],
      ["Schedule / Timetable", "ตารางเวลา/กำหนดการ", "หัวตารางและ time column", "detail, inference (เวลาซ้อน/ที่ว่าง)"],
      ["Web page", "เว็บเพจ/แถบเมนูจำลอง", "พาดหัว + ข้อความโปรโมท", "purpose, detail, inference"],
      ["Review (สินค้า/บริการ)", "ความเห็นลูกค้า + คะแนน (stars)", "คะแนนและประโยคเปิด", "inference, detail, vocabulary"],
      ["Article / Press release", "พาดหัว + ย่อหน้าแรก (lead)", "พาดหัวและกริยาหลัก", "purpose, detail, main idea"],
      ["Text message chain", "แชทสั้น ๆ มีเวลา [10:42 A.M.]", "first message + ล่าสุด", "detail, writer-intent, inference"],
      ["Online chat discussion", "บทสนทนา ≥3 คน มีชื่อกับเวลา", "first message + หัวข้อ", "intent, detail, inference, cross-reference"]
    ]},

    { type: "text", html: "<h3>อ่านเอกสารหนึ่งชิ้นใน 10 วินาที</h3><ul><li><strong>วินาที 0–2</strong>: ดูชนิด (e-mail/letter/article…) → รู้โครงสร้าง</li><li><strong>วินาที 2–5</strong>: อ่าน title/Subject/headline → รู้ใจความ</li><li><strong>วินาที 5–8</strong>: สแกนตัวเลข วันที่ ชื่อ → รู้รายละเอียดหลัก</li><li><strong>วินาที 8–10</strong>: มองหากริยาหลักในประโยคแรก → รู้ purpose</li></ul>" },

    { type: "examples", title: "ตัวอย่างบทความแต่ละชนิด (ส่วนหัว)", items: [
      { en: "Subject: Revised Delivery Schedule — Please Read", th: "อีเมลหัวเรื่องตรงไปตรงมา — คนอ่านรู้ทันทีว่าเรื่อง schedule" },
      { en: "MEMORANDUM: Attendance at the safety briefing is mandatory.", th: "memo ภายใน — กึ่งทางการ ข้อกำหนดโดยตรง" },
      { en: "Notice: The parking garage will be closed Sunday, April 13 for maintenance.", th: "notice — สื่อสารสั้น เข้าใจเร็ว" },
      { en: "Thank you for your order #4581 placed on June 3. Your package ships Monday.", th: "จดหมายตอบยืนยันออเดอร์" },
      { en: "UltraBook X — the lightest business laptop, now with 16 GB RAM. Free shipping this month!", th: "advertisement — โปรโมท + ข้อเสนอ" },
      { en: "Brightline Electronics announces Q2 results: revenue up 12 percent, new factory planned for 2026.", th: "press release — lead paragraph ตอบ who/what/when/where/why" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>เห็น <strong>To/From/Date/Subject</strong> → purpose มักอยู่ประโยคแรก · detail อยู่ย่อหน้าถัดไป</li><li>เห็น <strong>ตาราง/เวลา</strong> → ตอบคำถามตัวเลข/วันที่/ชื่อ — สแกน column ที่เกี่ยวข้อง</li><li>เห็น <strong>พาดหัว article</strong> → main idea อยู่ lead paragraph (ย่อหน้าแรก)</li><li>เห็น <strong>chat/text chain</strong> → intent เข้าใจจากลำดับเวลา + คำลงท้าย (“That works for me” = agree)</li><li>เห็น <strong>review คะแนนดาว</strong> → inference จากเหตุผล/คะแนนรวม</li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>อ่านข้าม To/From</strong> — เข้า-ผิดคน/ผิดบริษัท</li><li><strong>จดตัวเลขผิด</strong> — $2,500 vs $25,000 · 10:30 A.M. vs 10:30 P.M.</li><li><strong>ไม่ดูวันที่</strong> — ข้อมูลเก่ากับใหม่ปนกัน; TOEIC ชอบถามว่า ‘as of’ วันที่ใด</li><li><strong>สับสน article vs advertisement</strong> — article รายงานข้อเท็จจริง; advertisement ขายของ</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>อ่านทุกคำทุกประโยคก่อนตอบคำถาม — เสียเวลา Part 7; ควรอ่านคำถามก่อน แล้วสแกน</li><li>ไม่ไวต่อโครงสร้างเอกสาร — เห็นตารางยังตอบจากย่อหน้า</li><li>แปลไทยทั้งข้อความ — อ่านอังกฤษให้เข้าใจใจความ ไม่ต้องแปลทุกคำ</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "1) 10 วินาทีรับรู้ชนิดเอกสาร 2) อ่านคำถาม ขีด keyword 3) สแกนหา keyword (ตัวเลข/ชื่อ/วันที่) ไม่ต้องอ่านทั้งหมด 4) ตอบ paraphrase — ไม่ลอกคำตรงๆ" },

    { type: "cheatsheet", html: "<ul><li>Part 7 = 54 ข้อ (147–200) · Single 29 · Double 10 · Triple 15</li><li>e-mail/memo/letter → To/From ก่อน · notice/announcement → พาดหัว+วันที่ · form/invoice/schedule → หัวตาราง</li><li>article → lead paragraph ตอบ 5W1H · chat/text → ลำดับเวลา + intent</li><li>เวลา: อ่านคำถามก่อน ขีด keyword → สแกน 5 วินาที/keyword → ตอบ paraphrase</li></ul>" }
  ],
  quiz: [
    {
      setId: "m4-dt-q1",
      header: "Questions 1-6 refer to the following e-mail.",
      passages: [{
        label: "E-mail",
        html: "<p><strong>To:</strong> All Staff &nbsp;|&nbsp; <strong>From:</strong> Facilities Team &nbsp;|&nbsp; <strong>Date:</strong> April 8 &nbsp;|&nbsp; <strong>Subject:</strong> Rescheduled Elevator Maintenance</p><p>Dear colleagues,</p><p>Please be advised that the elevator maintenance originally scheduled for Saturday, April 12, has been moved to Sunday, April 13, between 8:00 A.M. and 2:00 P.M. During this period, the elevators in Tower B will be unavailable. Please use the stairwells or the Tower A elevators, which will operate as normal.</p><p>Because this work is noise-sensitive, floors 6 through 10 of Tower B will be closed on Sunday. Staff who were planning to work that day may use Tower A or work from home with manager approval.</p><p>We apologize for the inconvenience, and we appreciate your cooperation.</p><p>Facilities Team</p>"
      }],
      summaryTh: "อีเมลแจ้งว่าการบำรุงรักษาลิฟต์ที่เดิมกำหนดวันเสาร์ที่ 12 เมษายนถูกเลื่อนเป็นวันอาทิตย์ที่ 13 เมษายน 08:00–14:00 น. ลิฟต์ Tower B จะใช้ไม่ได้; ชั้น 6–10 Tower B ปิดวันนั้น; พนักงานที่จะทำงานวันนั้นใช้ Tower A หรือทำงานจากบ้านได้",
      keyVocab: [{ word: "be advised that", th: "โปรดทราบว่า (ทางการ)" }, { word: "inconvenience", th: "ความไม่สะดวก" }],
      questions: [
        { no: 1, stem: "What is the main purpose of the e-mail?", options: ["To announce a new elevator installation", "To reschedule an elevator maintenance", "To offer free parking on Sunday", "To introduce the new facilities manager"], answer: "B", tags: ["main-idea"], difficulty: "easy", translationTh: "วัตถุประสงค์หลักของอีเมลคืออะไร", evidence: [{ passage: 0, quote: "the elevator maintenance originally scheduled for Saturday, April 12, has been moved to Sunday, April 13" }], explain: { why: "อีเมลแจ้งว่าการบำรุงรักษาลิฟต์ถูกเลื่อนจากเสาร์ 12 เม.ย. เป็นอาทิตย์ 13 เม.ย.", wrong: { A: "อีเมลไม่ได้พูดถึงการติดตั้งใหม่", C: "ไม่ได้พูดเรื่องจอดรถฟรี", D: "ไม่ได้แนะนำผู้จัดการคนใหม่" }, tip: "purpose → ประโยคแรกว่า ‘…has been moved’" } },
        { no: 2, stem: "When will the elevator maintenance now take place?", options: ["Saturday, April 19, 8:00 A.M.–2:00 P.M.", "Saturday, April 12, 8:00 A.M.–2:00 P.M.", "Sunday, April 13, 8:00 A.M.–2:00 P.M.", "Sunday, April 13, 9:00 A.M.–5:00 P.M."], answer: "C", tags: ["detail"], difficulty: "easy", translationTh: "การบำรุงรักษาลิฟต์ตอนนี้เลื่อนเป็นเมื่อไหร่", evidence: [{ passage: 0, quote: "moved to Sunday, April 13, between 8:00 A.M. and 2:00 P.M." }], explain: { why: "ข้อความระบุชัดว่า Sunday, April 13, 8:00 A.M.–2:00 P.M.", wrong: { A: "วันที่ 19 ไม่มีในบทความ", B: "วันเสาร์ 12 เม.ย. คือกำหนดเดิม ไม่ใช่ใหม่", D: "เวลา 9:00–5:00 ไม่ตรงบทความ" }, tip: "scan ตัวเลขและวัน" } },
        { no: 3, stem: "What are employees told to do during the maintenance?", options: ["Avoid coming to work", "Use Tower B elevators", "Work at the office only", "Use Tower A elevators or the stairwells"], answer: "D", tags: ["detail"], difficulty: "easy", translationTh: "พนักงานได้รับคำแนะนำให้ทำอะไรระหว่างซ่อม", evidence: [{ passage: 0, quote: "Please use the stairwells or the Tower A elevators" }], explain: { why: "บทความบอกให้ใช้บันไดหรือลิฟต์ Tower A", wrong: { A: "ไม่ได้ห้ามมาทำงาน", B: "Tower B ใช้ไม่ได้", C: "ไม่จำเป็นต้องทำงานที่ออฟฟิศเสมอ" }, tip: "detail → scan หา use" } },
        { no: 4, stem: "Which floors of Tower B will be closed on Sunday?", options: ["Floors 6 through 10", "All floors", "Floors 11 through 15", "Floors 1 through 5"], answer: "A", tags: ["detail"], difficulty: "easy", translationTh: "ชั้นใดของ Tower B จะปิดวันอาทิตย์", evidence: [{ passage: 0, quote: "floors 6 through 10 of Tower B will be closed on Sunday" }], explain: { why: "ข้อความระบุ floors 6 through 10", wrong: { B: "ไม่ได้ปิดทั้งหมด", C: "ไม่มีชั้น 11–15", D: "ไม่ตรง" }, tip: "scan ตัวเลขชั้น" } },
        { no: 5, stem: "According to the e-mail, what may employees planning to work on Sunday do?", options: ["Work at their Tower B desks as usual", "Take paid leave without approval", "Use Tower A or work from home with manager approval", "Reschedule all meetings to Tower B"], answer: "C", tags: ["inference"], difficulty: "medium", translationTh: "พนักงานที่จะทำงานวันอาทิตย์ทำอะไรได้", evidence: [{ passage: 0, quote: "Staff who were planning to work that day may use Tower A or work from home with manager approval" }], explain: { why: "ข้อความบอกชัดว่าใช้ Tower A หรือ WFH โดยอนุมัติผู้จัดการ", wrong: { A: "Tower B ชั้น 6–10 ปิด", B: "ต้องมีอนุมัติ", D: "ไม่ได้บอกให้เลื่อนประชุมไป Tower B" }, tip: "inference → ดูข้อความตรงๆ" } },
        { no: 6, stem: "The word 'noise-sensitive' in the e-mail is closest in meaning to", options: ["requiring silence", "very loud", "unaffected by sound", "involving music"], answer: "A", tags: ["vocab-in-context"], difficulty: "hard", translationTh: "คำว่า 'noise-sensitive' ในอีเมลใกล้เคียงความหมายกับ", evidence: [{ passage: 0, quote: "Because this work is noise-sensitive" }], explain: { why: "noise-sensitive = ไวต่อเสียง/ต้องการความเงียบ — ทำงานที่ก่อเสียง จึงต้องปิดบางชั้น", wrong: { B: "noisy แปลว่าดัง ไม่ใช่ sensitive", C: "unaffected ตรงข้าม", D: "music ไม่เกี่ยว" }, tip: "vocab in context → ดูบริบททั้งประโยค" } }
      ]
    }
  ]
};
