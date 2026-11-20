// data/lessons/p5-prepositions.js — Module 1 · บทที่ 7
window.TOEIC.lessons["p5-prepositions"] = {
  id: "p5-prepositions",
  module: 1,
  order: 7,
  title: "Prepositions — คำบุพบท",
  frequency: "สูง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> ข้อสอบให้ช่องว่างและ 4 ตัวเลือกบุพบท — วัด <em>collocation</em> (responsible for, comply with) และการใช้ by/until/within ถูกต้อง เป็นหัวข้อที่นับจำได้ผลโดยตรง</p>" },

    { type: "table", title: "บุพบทเวลา (Time)", headers: ["บุพบท", "ใช้กับ", "ตัวอย่าง"], rows: [
      ["at", "เวลาจุดเจาะจง จุดเฉพาะ", "at 9:00 A.M. · at noon · at the moment"],
      ["on", "วัน วันที่", "on Monday · on July 15 · on time (ตรงเวลา)"],
      ["in", "เดือน ปี ฤดู ช่วงกว้าง อนาคต", "in March · in 2024 · in the afternoon · in two weeks"],
      ["by", "ภายในกำหนด (≤)", "Submit the report by Friday."],
      ["until / till", "ต่อเนื่องไปจนถึง", "The office is open until 6 P.M."],
      ["within", "ภายใน (ช่วงเวลา)", "We will respond within three business days."],
      ["during / over / throughout", "ระหว่าง/ตลอด", "During the meeting… · Over the past year… · Throughout the project"]
    ]},

    { type: "table", title: "บุพบทสถานที่ (Place)", headers: ["บุพบท", "ใช้กับ", "ตัวอย่าง"], rows: [
      ["at", "จุดเฉพาะ อาคาร/งาน", "at the reception · at headquarters · at the conference"],
      ["in", "ภายในอาคาร/เมือง/ประเทศ", "in the meeting room · in Bangkok · in Thailand"],
      ["on", "ชั้น พื้นผิว", "on the third floor · on the desk · on page 5"],
      ["across / throughout", "ทั่วทั้ง", "across Asia · throughout the company"],
      ["between / among", "ระหว่างสอง/หลายสิ่ง", "between the two candidates · among the staff"],
      ["along / across", "ตาม/ข้าม", "along the corridor · across the street"]
    ]},

    { type: "table", title: "Collocation ธุรกิจที่ออกสอบบ่อย", headers: ["วลี", "ความหมาย", "วลี", "ความหมาย"], rows: [
      ["responsible for", "รับผิดชอบ", "comply with", "ปฏิบัติตาม"],
      ["eligible for", "มีสิทธิ์ได้", "entitled to", "มีสิทธิ์"],
      ["participate in", "เข้าร่วม", "contribute to", "มีส่วนช่วย"],
      ["refer to", "อ้างถึง/ส่งต่อ", "deal with", "จัดการ"],
      ["focus on", "มุ่งเน้น", "depend on", "ขึ้นอยู่กับ"],
      ["in accordance with", "เป็นไปตาม", "with regard to", "เกี่ยวกับ"],
      ["prior to", "ก่อน", "in advance of", "ก่อน (ล่วงหน้า)"],
      ["apart from", "นอกจาก", "instead of", "แทนที่"],
      ["in charge of", "ดูแล", "in response to", "ตอบสนองต่อ"],
      ["according to", "ตามที่", "as a result of", "เป็นผลจาก"]
    ]},

    { type: "examples", title: "ตัวอย่างในบริบทธุรกิจ", items: [
      { en: "All employees must comply with the new data-security policy.", th: "พนักงานทุกคนต้องปฏิบัติตามนโยบายความปลอดภัยข้อมูลใหม่ (comply with)" },
      { en: "Mr. Park is responsible for overseeing the logistics team.", th: "คุณพาร์ครับผิดชอบดูแลทีมโลจิสติกส์ (responsible for)" },
      { en: "Please submit your expense reports by the end of the month.", th: "โปรดส่งรายงานค่าใช้จ่ายภายในสิ้นเดือน (by = ภายในกำหนด)" },
      { en: "We guarantee a response within 24 hours.", th: "เรารับประกันตอบกลับภายใน 24 ชั่วโมง (within + ช่วงเวลา)" },
      { en: "The office will be closed until further notice.", th: "สำนักงานจะปิดไปจนกว่าจะมีประกาศเพิ่มเติม (until = ต่อเนื่องไปจนถึง)" },
      { en: "The meeting is scheduled for Monday at 10:00 A.M.", th: "ประชุมกำหนดวันจันทร์เวลา 10:00 น. (for + วัตถุประสงค์/กำหนดการ)" },
      { en: "Kuala Lumpur was chosen as the headquarters for our Southeast Asia division.", th: "กัวลาลัมเปอร์ถูกเลือกให้เป็นสำนักงานใหญ่ของฝ่ายเอเชียตะวันออกเฉียงใต้ (as + บทบาท)" },
      { en: "Employees are entitled to twenty vacation days per year.", th: "พนักงานมีสิทธิ์หยุดพักร้อน 20 วันต่อปี (entitled to)" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>เห็น <strong>เวลาจุดเจาะจง</strong> (9:00, noon) → <strong>at</strong> · <strong>วัน/วันที่</strong> → <strong>on</strong> · <strong>เดือน/ปี</strong> → <strong>in</strong></li><li>เห็น <strong>submit/send by…</strong> → <strong>by</strong> (ภายในกำหนด)</li><li>เห็น <strong>be open/closed/stay until…</strong> → <strong>until</strong></li><li>เห็น <strong>respond/answer within + ระยะเวลา</strong> → <strong>within</strong></li><li>เห็น <strong>responsible/eligible/entitled/comply/participate/contribute</strong> → จำ collocation ตามคู่</li><li>เห็น <strong>between + 2 สิ่ง</strong> → <strong>between</strong> · <strong>among + 3+</strong> → <strong>among</strong></li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>by vs until</strong>: ‘Submit it <u>by</u> Friday’ (ส่งภายในศุกร์) · ‘The office is open <u>until</u> 6 P.M.’ (เปิดต่อเนื่องถึง 6 โมง)</li><li><strong>by vs within</strong>: by + จุดเวลาเจาะจง (by Friday) · within + ช่วงเวลา (within three days)</li><li><strong>between vs among</strong>: ‘the agreement <u>between</u> the two firms’ · ‘shared <u>among</u> all staff’</li><li><strong>in the meeting vs at the meeting</strong>: at the meeting (เข้าร่วม) · in the meeting room (ห้อง)</li><li><strong>on time vs in time</strong>: on time = ตรงเวลาตามนัด · in time = ทันเวลา (ก่อนสาย)</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>แปล ‘ภายใน’ เดียวกันแล้วเลือกสลับ by/within/until ไม่ดูว่าเป็นจุดเวลาหรือช่วงเวลา</li><li>แปล ‘ใน’ เป็น in เสมอ — สำหรับวัน/วันที่ ต้อง on · เวลาจุดเจาะจง ต้อง at</li><li>ใช้ ‘responsible of’ ตามรูปแบบไทย — ที่ถูกคือ responsible <u>for</u></li><li>ใช้ ‘arrive to’ — ที่ถูกคือ arrive <u>at</u>/<u>in</u> ไม่ใช้ to</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "ขีดคำนามหลังช่องว่างก่อน: เป็นเวลา/สถานที่/คำนามอะไร → เลือกกลุ่มบุพบทที่คู่; สำหรับ collocation ถ้าเห็น responsible/comply/eligible ให้ตอบอัตโนมัติ ไม่ต้องอ่านทั้งประโยค" },

    { type: "cheatsheet", html: "<ul><li>at + เวลาจุด · on + วัน/วันที่ · in + เดือน/ปี/ช่วง</li><li>by = ภายในกำหนด · until = ต่อเนื่องถึง · within = ภายในช่วง</li><li>responsible for · comply with · eligible for · entitled to · participate in</li><li>contribute to · refer to · deal with · focus on · depend on</li><li>in accordance with · with regard to · prior to · in advance of</li><li>between (2 สิ่ง) · among (3+) · responsible for (ไม่ใช่ of)</li><li>on time = ตรงเวลา · in time = ทันเวลา</li></ul>" }
  ],
  quiz: [
    { no: 1, stem: "Please submit the form ------- 5:00 P.M. on Friday.", options: ["until", "by", "within", "since"], answer: "B", tags: ["preposition"], difficulty: "easy", translationTh: "โปรดส่งแบบฟอร์มภายใน 5 โมงเย็นวันศุกร์", explain: { why: "by + จุดเวลา = ภายในกำหนด — เหมาะกับ deadline", wrong: { A: "until — ต่อเนื่องไปจนถึง ไม่ใช่กำหนดส่ง", C: "within — ต้องตามด้วยช่วงเวลา ไม่ใช่จุดเวลา", D: "since — เริ่มต้นในอดีต คู่กับ perfect tense" }, tip: "submit + deadline → by" } },
    { no: 2, stem: "We will reply to your inquiry ------- two business days.", options: ["within", "by", "on", "until"], answer: "A", tags: ["preposition"], difficulty: "easy", translationTh: "เราจะตอบคำถามของคุณภายในสองวันทำการ", explain: { why: "within + ช่วงเวลา = ภายในช่วงนั้น — two business days เป็นช่วงเวลา", wrong: { B: "by — ตามด้วยจุดเวลา ไม่ใช่ช่วงสองวัน", C: "on — ใช้กับวัน/วันที่ ไม่ใช่ two business days", D: "until — ต่อเนื่องถึงจุดสิ้นสุด ไม่ใช่ ‘ภายใน’ สองวัน" }, tip: "within + ช่วงเวลา" } },
    { no: 3, stem: "The factory is open ------- 9:00 P.M. on weekdays.", options: ["since", "by", "until", "within"], answer: "C", tags: ["preposition"], difficulty: "easy", translationTh: "โรงงานเปิดทำการจนถึง 3 ทุ่มในวันธรรมดา", explain: { why: "open … until 9:00 P.M. = เปิดต่อเนื่องไปจนถึง 3 ทุ่ม — until ใช้กับจุดสิ้นสุดของช่วงการเปิด", wrong: { A: "since — ตั้งแต่จุดเริ่มในอดีต คู่กับ perfect tense", B: "by — กำหนดส่งภายใน ไม่ใช่จุดสิ้นสุดของการเปิด", D: "within — ต้องตามด้วยช่วงเวลา (within two hours)" }, tip: "open from … until …" } },
    { no: 4, stem: "The committee will meet ------- the first Monday of each month.", options: ["at", "by", "in", "on"], answer: "D", tags: ["preposition"], difficulty: "easy", translationTh: "คณะกรรมการจะประชุมทุกวันจันทร์แรกของเดือน", explain: { why: "วันที่เจาะจง → on (on the first Monday of each month)", wrong: { A: "at — เวลาจุด ไม่ใช่วัน", B: "by — กำหนดส่ง ไม่ใช่เวลาประชุม", C: "in — สำหรับเดือน/ปี ไม่ใช่ ‘จันทร์แรก’" }, tip: "on + วัน/วันที่" } },
    { no: 5, stem: "Ms. Garcia is responsible ------- coordinating the annual summit.", options: ["of", "to", "for", "with"], answer: "C", tags: ["preposition", "collocation"], difficulty: "easy", translationTh: "คุณการ์เซียรับผิดชอบการประสานงานซัมมิตประจำปี", explain: { why: "collocation: responsible for = รับผิดชอบ", wrong: { A: "of — responsible of ไม่ใช่ภาษาอังกฤษที่ถูก", B: "to — responsible to someone = รายงานต่อ (ใคร) ไม่ใช่รับผิดชอบงาน", D: "with — ไม่ใช่ collocation" }, tip: "responsible for · responsible to (person)" } },
    { no: 6, stem: "All vendors must comply ------- the updated safety guidelines.", options: ["to", "with", "in", "on"], answer: "B", tags: ["preposition", "collocation"], difficulty: "medium", translationTh: "ผู้ผลิตทุกรายต้องปฏิบัติตามแนวทางความปลอดภัยที่อัปเดต", explain: { why: "collocation: comply with = ปฏิบัติตาม", wrong: { A: "to — comply to ผิด collocation", C: "in — ผิด", D: "on — ผิด" }, tip: "comply with · compliance with" } },
    { no: 7, stem: "Employees are eligible ------- a 10 percent discount at the company store.", options: ["of", "to", "with", "for"], answer: "D", tags: ["preposition", "collocation"], difficulty: "medium", translationTh: "พนักงานมีสิทธิ์ได้รับส่วนลด 10 เปอร์เซ็นต์ที่ร้านค้าบริษัท", explain: { why: "collocation: eligible for = มีสิทธิ์ได้รับ", wrong: { A: "of — ผิด", B: "to — entitled to ก็มี แต่ eligible ต้องคู่กับ for", C: "with — ผิด" }, tip: "eligible for · entitled to · qualified for" } },
    { no: 8, stem: "The contract was signed ------- the two parties last Tuesday.", options: ["between", "within", "across", "among"], answer: "A", tags: ["preposition"], difficulty: "medium", translationTh: "สัญญาถูกเซ็นโดยทั้งสองฝ่ายเมื่อวันอังคารที่แล้ว", explain: { why: "two parties = สองฝ่าย → between (สองสิ่ง)", wrong: { B: "within — ช่วงเวลา ไม่ใช่คู่สัญญา", C: "across — ทั่วทั้ง ไม่ใช่คู่สัญญา", D: "among — สำหรับ 3 ฝ่ายขึ้นไป" }, tip: "between (2) · among (3+)" } },
    { no: 9, stem: "Please review the attached document ------- the meeting.", options: ["during", "prior to", "until", "within"], answer: "B", tags: ["preposition", "collocation"], difficulty: "hard", translationTh: "โปรดอ่านเอกสารที่แนบก่อนการประชุม", explain: { why: "prior to = ก่อน (เป็นทางการ) — เหมาะกับบริบทธุรกิจ", wrong: { A: "during — ระหว่างการประชุม ไม่ใช่ก่อน", C: "until — ต่อเนื่องถึงจุดสิ้นสุด ไม่ใช่ก่อน", D: "within — ช่วงเวลา ไม่ใช่ก่อน" }, tip: "prior to = before (formal)" } },
    { no: 10, stem: "The error was discovered ------- the quarterly audit.", options: ["since", "while", "during", "for"], answer: "C", tags: ["preposition"], difficulty: "hard", translationTh: "ข้อผิดพลาดถูกพบระหว่างการตรวจสอบไตรมาส", explain: { why: "during + คำนาม (the quarterly audit) — during นำคำนาม; while นำ clause (while + S + V)", wrong: { A: "since — ตั้งแต่ จุดเริ่มอดีต", B: "while — ต้องนำอนุประโยค (while the audit was being conducted)", D: "for — สำหรับ/ระยะเวลา ไม่ใช่ ‘ระหว่าง’" }, tip: "during + noun · while + clause" } }
  ]
};
