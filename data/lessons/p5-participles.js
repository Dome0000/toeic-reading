// data/lessons/p5-participles.js — Module 1 · บทที่ 11
window.TOEIC.lessons["p5-participles"] = {
  id: "p5-participles",
  module: 1,
  order: 11,
  title: "Participles — คำคุณศัพท์ -ing/-ed และ participial phrase",
  frequency: "กลาง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> ข้อสอบให้ -ing/-ed ที่มีความหมายต่างกัน (interesting/interested, tiring/tired) แล้วถามว่าช่องว่างต้องเป็นตัวไหน — หลักการง่ายมาก: <em>-ing = สิ่งที่ทำให้เกิดความรู้สึก · -ed = สิ่งที่ได้รับความรู้สึก</em></p>" },

    { type: "table", title: "คู่ -ing / -ed ที่ออกสอบบ่อย", headers: ["-ing (ก่อให้เกิด)", "-ed (ได้รับ)"], rows: [
      ["interesting — น่าสนใจ", "interested — รู้สึกสนใจ"],
      ["boring — น่าเบื่อ", "bored — รู้สึกเบื่อ"],
      ["tiring — น่าเหนื่อย", "tired — รู้สึกเหนื่อย"],
      ["satisfying — น่าพอใจ", "satisfied — รู้สึกพอใจ"],
      ["disappointing — น่าผิดหวัง", "disappointed — รู้สึกผิดหวัง"],
      ["confusing — น่างง", "confused — รู้สึกงง"],
      ["promising — มีแววดี", "promised — ถูกสัญญาไว้"],
      ["leading — ชั้นนำ", "led — ถูกนำ"]
    ]},

    { type: "table", title: "Participial phrase — วลีกริยาขยาย", headers: ["ลักษณะ", "ความหมาย", "ตัวอย่าง"], rows: [
      ["-ing phrase ต้นประโยค", "active — ประธานทำเอง", "<strong>Reviewing the report</strong>, she noticed an error. (= While she was reviewing…)"],
      ["-ed phrase ต้นประโยค", "passive — ประธานถูกทำ", "<strong>Approved by the board</strong>, the project moved forward. (= Because it had been approved…)"],
      ["Reduced relative clause", "แทน relative pronoun + V", "The report <strong>submitted yesterday</strong> → The report <strong>that was submitted</strong> yesterday"]
    ]},

    { type: "text", html: "<h3>กฎการลด Relative Clause</h3><ul><li>RC แบบ <em>active</em>: ตัด pronoun แล้วใช้ <strong>-ing</strong> — The man <em>who called</em> → The man <strong>calling</strong></li><li>RC แบบ <em>passive</em>: ตัด pronoun + be แล้วใช้ <strong>-ed</strong> — The files <em>that were sent</em> → The files <strong>sent</strong></li><li><strong>Dangling participle</strong>: ประธานของ phrase ต้องตรงกับประธานประโยค — ‘*Walking to the office, the rain started*’ ผิด (ฝนไม่ได้เดิน)</li></ul>" },

    { type: "examples", title: "ตัวอย่างในบริบทธุรกิจ", items: [
      { en: "The seminar was informative and engaging for all attendees.", th: "สัมมนาให้ความรู้และน่าสนใจสำหรับผู้เข้าร่วม (engaging = ทำให้น่าสนใจ)" },
      { en: "We were delighted with the quality of the final product.", th: "เรายินดีกับคุณภาพของผลิตภัณฑ์ขั้นสุดท้าย (delighted = รู้สึกยินดี)" },
      { en: "The findings, presented at the conference, attracted wide attention.", th: "ผลการค้นพบซึ่งนำเสนอในงานได้รับความสนใจกว้างขวาง (presented = ถูกนำเสนอ — reduced RC)" },
      { en: "Standing at the reception, the CEO greeted early guests personally.", th: "ซีอีโอยืนอยู่ที่แผนกต้อนรับ ทักทายแขกที่มาแต่แรกด้วยตัวเอง (active participial phrase)" },
      { en: "Overwhelmed by the response, the team extended the sale.", th: "ทีมรู้สึกภาระจากการตอบรับ จึงขยายระยะเวลาการขาย (passive participial phrase)" },
      { en: "The leading provider of cloud services announced a price cut.", th: "ผู้ให้บริการคลาวด์ชั้นนำประกาศลดราคา (leading = คุณศัพท์ ‘ชั้นนำ’)" },
      { en: "Employees are encouraged to raise concerns during the meeting.", th: "พนักงานได้รับการสนับสนุนให้แสดงข้อกังวลระหว่างประชุม (encouraged = รู้สึกถูกสนับสนุน/ได้รับเชิญ)" },
      { en: "Completed ahead of schedule, the project saved the company millions.", th: "เสร็จก่อนกำหนด โปรเจกต์นี้ช่วยบริษัทประหยัดเงินหลายล้าน (passive participial phrase ต้นประโยค)" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>ช่องว่าง + คำนาม (สิ่งของ) → มักตอบ <strong>-ing</strong> (interesting article)</li><li>ช่องว่างอยู่หลัง be/feel/seem + คน → มักตอบ <strong>-ed</strong> (were satisfied)</li><li>ช่องว่างหลังคำนาม เป็นส่วนขยายแบบ reduced RC → ดูจากไฟล์ passive/active: <strong>ส่งมาแล้ว = sent · กำลังส่ง = being sent · ส่งด้วยตัวเอง = sending</strong></li><li>ช่องว่างต้นประโยค + comma + ประธานประโยค → ดูว่าประธานประโยคทำเองหรือถูกทำ</li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>surprising vs surprised</strong>: ‘a surprising result’ (น่าประหลาดใจ) · ‘I was surprised’ (ฉันรู้สึกประหลาดใจ)</li><li><strong>dangling participle</strong>: ‘*Driving to work, the accident happened*’ ผิด (อุบัติเหตุไม่ได้ขับรถ) — ต้อง ‘Driving to work, I saw an accident’</li><li><strong>reduced RC ต้อง passive/active ชัดเจน</strong>: ‘the report submitting yesterday’ ผิด; ‘the report submitted yesterday’ ถูก</li><li><strong>participial phrase วางต้นประโยคต้องไม่มี comma คั่นกับประธานผิดตัว</strong></li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>เลือก -ed เพราะคุ้นเคยกับรูป passive โดยไม่ดูว่าประธานเป็นคนรู้สึกหรือสิ่งก่อให้เกิด</li><li>แปล ‘น่า…’ กับ ‘รู้สึก…’ ปนกัน — จำ: สิ่ง = -ing · คน = -ed</li><li>ลืมว่า participial phrase ต้นประโยคต้องเห็นว่าประธานประโยคคือตัวทำหรือถูกทำ</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "1) ดูว่าช่องว่างขยายคนหรือสิ่ง — คน = -ed (รู้สึก) หรือ -ing (น่าสนใจ) ตามความหมาย 2) ดูว่าประธานประโยคทำเองหรือถูกทำ แล้วเลือก -ing/-ed ให้ตรง — ตอบใน 3 วินาที" },

    { type: "cheatsheet", html: "<ul><li>-ing = ทำให้เกิดความรู้สึก (interesting, boring, tiring, satisfying, confusing, disappointing, promising)</li><li>-ed = ได้รับความรู้สึก (interested, bored, tired, satisfied, confused, disappointed, delighted)</li><li>ต้นประโยค: active → -ing · passive → -ed</li><li>reduced RC: active → -ing · passive → -ed</li><li>dangling participle: ประธานประโยคต้องตรงกับตัวทำใน phrase</li><li>leading = ชั้นนำ · promising = มีแววดี</li></ul>" }
  ],
  quiz: [
    { no: 1, stem: "The keynote speech was ------- and inspiring.", options: ["engage", "engaging", "engaged", "engagement"], answer: "B", tags: ["participle"], difficulty: "easy", translationTh: "คำปราศรัยหลักน่าสนใจและสร้างแรงบันดาลใจ", explain: { why: "ขยายคำนาม speech (สิ่งที่ทำให้น่าสนใจ) → -ing: engaging", wrong: { A: "engage — กริยา base form ไม่ใช่คุณศัพท์", C: "engaged — -ed ใช้กับคนรู้สึก ไม่ใช่สิ่ง", D: "engagement — คำนาม ไม่ใช่คุณศัพท์" }, tip: "สิ่ง = -ing" } },
    { no: 2, stem: "The audience looked ------- after the two-hour presentation.", options: ["exhaust", "exhausting", "exhausted", "exhaustion"], answer: "C", tags: ["participle"], difficulty: "easy", translationTh: "ผู้ชมดูเหนื่อยล้าหลังการนำเสนอสองชั่วโมง", explain: { why: "ผู้ชม (คน) ได้รับความเหนื่อย → -ed: exhausted", wrong: { A: "exhaust — กริยา", B: "exhausting — -ing แปลว่า ‘น่าเหนื่อย’ (สิ่ง)", D: "exhaustion — คำนาม" }, tip: "คน = -ed" } },
    { no: 3, stem: " ------- the inspection, the fire marshal issued the permit.", options: ["Completed", "Completion", "Complete", "Completing"], answer: "D", tags: ["participle"], difficulty: "medium", translationTh: "เมื่อตรวจเสร็จ ผู้ตรวจอัคคีภัยออกใบอนุญาต", explain: { why: "ประธาน (fire marshal) ทำเอง → active participial phrase: Completing", wrong: { A: "Completed — -ed แปลว่า ‘ถูกตรวจ’ ไม่ใช่ผู้ตรวจเป็นคนทำ", B: "Completion — คำนาม ไม่ใช่วลี", C: "Complete — base form ไม่ใช่วลี" }, tip: "ทำเอง = -ing" } },
    { no: 4, stem: "The documents ------- yesterday have been filed.", options: ["signed", "signing", "signs", "sign"], answer: "A", tags: ["participle"], difficulty: "easy", translationTh: "เอกสารที่เซ็นเมื่อวานถูกบันทึกแล้ว", explain: { why: "เอกสารถูกเซ็น → reduced RC passive: signed", wrong: { B: "signing — active ‘ที่เซ็น’ (เอกสารเซ็นเองไม่ได้)", C: "signs — present form", D: "sign — base form ไม่ใช่ reduced RC" }, tip: "สิ่งถูกทำ = -ed (reduced passive RC)" } },
    { no: 5, stem: "The board seemed ------- with the quarterly results.", options: ["please", "pleasing", "pleased", "pleasure"], answer: "C", tags: ["participle"], difficulty: "easy", translationTh: "คณะกรรมการดูพอใจกับผลไตรมาส", explain: { why: "คณะกรรมการ (คน) รู้สึกพอใจ → -ed: pleased", wrong: { A: "please — กริยา", B: "pleasing — ‘น่าพอใจ’ (สิ่ง)", D: "pleasure — คำนาม" }, tip: "คน = -ed" } },
    { no: 6, stem: " ------- by early demand, the bakery extended its holiday hours.", options: ["Drives", "Drive", "Driving", "Driven"], answer: "D", tags: ["participle"], difficulty: "medium", translationTh: "ถูกขับเคลื่อนด้วยความต้องการแต่เนิ่น ๆ ร้านเบเกอรี่ขยายเวลาวันหยุด", explain: { why: "passive participial phrase: Driven by… = ถูกผลักดันด้วย… — ประธาน (bakery) ถูกทำ", wrong: { A: "Drives — present form", B: "Drive — base form", C: "Driving — -ing active แปลว่าร้านเบเกอรี่ขับ" }, tip: "ถูกทำ = -ed" } },
    { no: 7, stem: "The report contains a ------- amount of detail.", options: ["confuse", "confusing", "confused", "confusion"], answer: "B", tags: ["participle"], difficulty: "medium", translationTh: "รายงานมีรายละเอียดมากมายจนน่าสับสน", explain: { why: "ขยายคำนาม amount (สิ่ง) → -ing: confusing", wrong: { A: "confuse — กริยา", C: "confused — -ed แปลว่า ‘รู้สึกสับสน’ (ใช้กับคน)", D: "confusion — คำนาม" }, tip: "สิ่ง = -ing" } },
    { no: 8, stem: " ------- the client's requirements, the engineer proposed a different solution.", options: ["Hearing", "Heard", "Hears", "Hear"], answer: "A", tags: ["participle"], difficulty: "medium", translationTh: "เมื่อได้ยินความต้องการของลูกค้า วิศวกรเสนอวิธีแก้ใหม่", explain: { why: "วิศวกรทำเอง (active) → Hearing", wrong: { B: "Heard — -ed passive (วิศวกรถูกได้ยิน? ไม่ใช่)", C: "Hears — present form", D: "Hear — base form" }, tip: "ประธานทำเอง = -ing" } },
    { no: 9, stem: "The candidates were ------- by the unexpected question.", options: ["confuse", "confusing", "confused", "confusion"], answer: "C", tags: ["participle"], difficulty: "hard", translationTh: "ผู้สมัครรู้สึกสับสนกับคำถามที่ไม่คาดคิด", explain: { why: "ผู้สมัคร (คน) ได้รับความสับสน → -ed: confused (by …)", wrong: { A: "confuse — กริยา", B: "confusing — ‘น่าสับสน’ (สิ่ง)", D: "confusion — คำนาม" }, tip: "คน = -ed" } },
    { no: 10, stem: " ------- ahead of schedule, the expansion opened three months early.", options: ["Finishes", "Finish", "Finishing", "Finished"], answer: "D", tags: ["participle"], difficulty: "hard", translationTh: "เมื่อเสร็จก่อนกำหนด การขยายเปิดก่อนสามเดือน", explain: { why: "passive participial phrase: Finished ahead of schedule = ถูกทำให้เสร็จก่อนกำหนด (the expansion เสร็จ = ถูกทำ)", wrong: { A: "Finishes — present form", B: "Finish — base form", C: "Finishing — active; expansion ไม่ได้ทำเอง" }, tip: "สิ่งถูกทำ = -ed" } }
  ]
};
