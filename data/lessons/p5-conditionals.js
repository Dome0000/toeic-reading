// data/lessons/p5-conditionals.js — Module 1 · บทที่ 13
window.TOEIC.lessons["p5-conditionals"] = {
  id: "p5-conditionals",
  module: 1,
  order: 13,
  title: "Conditionals, Subjunctive & Inversion",
  frequency: "กลาง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> ข้อสอบทดสอบ 3 สิ่ง คือ (1) เงื่อนไขชนิดต่าง ๆ (unless, provided that, in case) (2) subjunctive หลังคำกริยาแนะนำ/เรียกร้อง (recommend that he <em>be</em>…) (3) inversion แบบทางการในจดหมายธุรกิจ (<em>Should you have any questions…</em>)</p>" },

    { type: "table", title: "เงื่อนไข 4 ชนิด", headers: ["ชนิด", "โครงสร้าง", "ความหมาย", "ตัวอย่าง"], rows: [
      ["Zero", "if/when + present, present", "ความจริงทั่วไป", "If you mix red and yellow, you get orange."],
      ["First", "if + present, will + V1", "เป็นไปได้ในอนาคต", "If sales rise, we will hire more staff."],
      ["Second", "if + past, would + V1", "สมมติ/ไม่น่าเป็นไปได้", "If the price were lower, we would order more."],
      ["Third", "if + had V3, would have V3", "อดีตที่ไม่เกิดขึ้น", "If we had ordered earlier, we would have received it by now."]
    ]},

    { type: "table", title: "เชื่อมเงื่อนไข/เหตุการณ์ที่พบบ่อย", headers: ["คำ", "ความหมาย", "ตัวอย่าง"], rows: [
      ["unless", "if not (เว้นแต่)", "We will cancel unless you confirm by Friday."],
      ["provided (that) / providing (that)", "ก็ต่อเมื่อ", "The discount applies provided that you pay early."],
      ["as long as / so long as", "ตราบเท่าที่", "You may work remotely as long as the targets are met."],
      ["in case", "เผื่อว่า", "Take the badge in case security checks it."],
      ["or else / otherwise", "ไม่เช่นนั้น", "Submit by noon, otherwise the slot will be released."]
    ]},

    { type: "table", title: "Subjunctive — หลังกริยาแนะนำ/เรียกร้อง", headers: ["โครงสร้าง", "ตัวอย่าง"], rows: [
      ["recommend/suggest/insist/request/require/demand + that + S + base verb", "The board recommends that the policy be revised."],
      ["It is essential/important/necessary + that + S + base verb", "It is essential that every file be encrypted."],
      ["prefer that + S + base verb", "We prefer that vendors submit invoices electronically."]
    ]},

    { type: "table", title: "Inversion — เปลี่ยนลำดับคำแบบทางการ", headers: ["โครงสร้าง", "ตัวอย่าง"], rows: [
      ["Should you + base verb (แทน if you)", "Should you have any questions, please contact us."],
      ["Had + S + V3 (แทน if S had V3)", "Had we known earlier, we would have acted sooner."],
      ["Were + S + to V (แทน if S were to V)", "Were you to cancel now, you would forfeit the deposit."],
      ["Not only + aux + S + V / Never / Seldom / Rarely + aux + S + V", "Rarely do we extend deadlines."],
      ["Neither + aux + S / Nor + aux + S", "Neither did the cost fall nor did quality improve."]
    ]},

    { type: "examples", title: "ตัวอย่างในบริบทธุรกิจ", items: [
      { en: "Unless all approvals are received, the project will not proceed.", th: "หากไม่ได้รับการอนุมัติทั้งหมด โปรเจกต์จะไม่ดำเนินการ (unless = if not)" },
      { en: "The bonus applies provided that individual targets are met.", th: "โบนัสจะได้รับก็ต่อเมื่อทำผลงานตามเป้ารายบุคคล (provided that)" },
      { en: "Should you require further information, do not hesitate to contact us.", th: "หากคุณต้องการข้อมูลเพิ่มเติม อย่าลังเลที่จะติดต่อเรา (Should you… — inversion ทางการในจดหมาย)" },
      { en: "The auditor recommends that the records be reconciled monthly.", th: "ผู้ตรวจสอบบัญชีแนะนำให้กระทบยอดบันทึกทุกเดือน (recommend that + base verb)" },
      { en: "If the shipment had arrived on time, we would have avoided the penalty.", th: "หากการจัดส่งมาตรงเวลา เราคงเลี่ยงค่าปรับได้ (third conditional)" },
      { en: "It is essential that every invoice be verified before payment.", th: "จำเป็นอย่างยิ่งที่ใบแจ้งหนี้ทุกใบต้องได้รับการตรวจสอบก่อนจ่ายเงิน (subjunctive: be)" },
      { en: "Had the issue been reported sooner, the fix would have been simpler.", th: "หากปัญหาถูกแจ้งเร็วกว่านี้ การแก้ไขคงง่ายกว่า (Had + S + V3)" },
      { en: "Rarely do we accept revisions after the final sign-off.", th: "เราแทบไม่รับการแก้ไขหลังการอนุมัติสุดท้าย (Rarely + inversion)" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>เห็น <strong>unless</strong> → แปลว่า if not — อย่าเพิ่ม not ซ้ำ</li><li>เห็น <strong>Should you / Had you / Were you</strong> → นี่คือ inversion — ความหมายเท่ากับ if you / if you had / if you were</li><li>เห็นกริยา <strong>recommend/suggest/insist/require/demand/request + that</strong> → ตอบ <strong>base verb</strong> (ไม่มี -s ไม่มี to)</li><li>เห็น <strong>if + past … คำตอบ would V1</strong> → second conditional · <strong>if + had V3 … would have V3</strong> → third conditional</li><li>เห็น <strong>provided that / as long as</strong> → เงื่อนไข ‘ก็ต่อเมื่อ’</li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>unless + not ซ้ำ</strong>: ‘*Unless you do not sign…*’ ผิด — unless มี not ในตัวแล้ว</li><li><strong>subjunctive -s</strong>: ‘*recommends that he submits*’ ผิด — ‘recommends that he submit’ (ไม่มี -s)</li><li><strong>subjunctive be</strong>: ‘recommend that the report <u>be</u> filed’ ไม่ใช่ ‘is filed’</li><li><strong>inversion ผิดรูป</strong>: ‘*Should you will have questions*’ ผิด — หลัง Should ต้อง base form</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>แปล provided that เป็น ‘ให้’ แล้วงง — จำว่าแปลว่า ‘ก็ต่อเมื่อ’</li><li>ใช้ unless + not เพราะคิดว่า ‘เว้นแต่ไม่’</li><li>ลืมว่า subjunctive ใช้ base verb กับทุกประธาน — คนไทยติดนิสัยเติม -s ให้เอกพจน์</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "เห็น that หลังคำแนะนำ/เรียกร้อง → ตอบ base verb ทันที; เห็น Should/Had/Were ต้นประโยค → แปลเป็น if … ก่อนแล้วค่อยเลือกคำตอบ — อย่าลังเลเรื่องรูปกริยา" },

    { type: "cheatsheet", html: "<ul><li>unless = if not · provided that / as long as = ก็ต่อเมื่อ · in case = เผื่อว่า</li><li>first: if + present → will V1 · second: if + past → would V1 · third: if + had V3 → would have V3</li><li>recommend/suggest/insist/require/demand/request + that + S + <strong>base verb</strong> (be, submit, file)</li><li>It is essential/important + that + S + base verb</li><li>Should you … = if you … · Had you … = if you had … · Were you to … = if you were to …</li><li>Rarely/Never/Not only + aux + S + V (inversion)</li></ul>" }
  ],
  quiz: [
    { no: 1, stem: " ------- you require additional information, please contact the help desk.", options: ["If", "Should", "Whenever", "Unless"], answer: "B", tags: ["conditional"], difficulty: "easy", translationTh: "หากคุณต้องการข้อมูลเพิ่มเติม โปรดติดต่อ help desk", explain: { why: "โครงสร้างจดหมายธุรกิจ ‘Should you + base verb’ = If you require … (inversion ทางการ)", wrong: { A: "If — ถูกไวยากรณ์แต่โทนไม่เป็นทางการเท่า Should (TOEIC เลือก Should ในบริบทจดหมาย)", C: "Whenever — ทุกครั้งที่… ผิดความหมาย", D: "Unless — เว้นแต่ ไม่เข้ากับการสอบถามสุภาพ" }, tip: "Should + base verb = จดหมายทางการ" } },
    { no: 2, stem: "The contract can be terminated early ------- either party gives thirty days' notice.", options: ["provided that", "unless", "although", "because"], answer: "A", tags: ["conditional"], difficulty: "medium", translationTh: "สัญญาอาจถูกยกเลิกก่อนก็ต่อเมื่อฝ่ายใดฝ่ายหนึ่งแจ้งล่วงหน้า 30 วัน", explain: { why: "provided that = ก็ต่อเมื่อ (เงื่อนไข) — เหมาะกับสัญญา", wrong: { B: "unless — เว้นแต่ (if not) ไม่เข้ากับการยกเลิกที่ต้องการเงื่อนไข", C: "although — ขัดแย้ง", D: "because — เหตุผล" }, tip: "ก็ต่อเมื่อ = provided (that) / as long as" } },
    { no: 3, stem: "We will proceed ------- you confirm your attendance by Friday.", options: ["despite", "unless", "provided that", "although"], answer: "C", tags: ["conditional"], difficulty: "easy", translationTh: "เราจะดำเนินการก็ต่อเมื่อคุณยืนยันการเข้าร่วมภายในวันศุกร์", explain: { why: "needed condition: provided that = ก็ต่อเมื่อ", wrong: { A: "despite — บุพบท + คำนาม ไม่ใช่ clause", B: "unless — เว้นแต่ ทำให้ความหมายกลับกัน", D: "although — ขัดแย้ง" }, tip: "ก็ต่อเมื่อ = provided that" } },
    { no: 4, stem: "The auditor recommended that the files ------- reviewed quarterly.", options: ["being", "are", "were", "be"], answer: "D", tags: ["conditional"], difficulty: "medium", translationTh: "ผู้ตรวจสอบแนะนำให้ไฟล์ถูกทบทวนทุกไตรมาส", explain: { why: "subjunctive หลัง recommend that → base verb: be", wrong: { A: "being — ไม่ใช่ base verb", B: "are — -s/conjugated ผิด subjunctive", C: "were — past form ผิด subjunctive (ต้อง base)" }, tip: "recommend that + base verb" } },
    { no: 5, stem: "Had the team identified the issue earlier, the fix ------- much simpler.", options: ["will be", "would be", "would have been", "was"], answer: "C", tags: ["conditional"], difficulty: "hard", translationTh: "หากทีมระบุปัญหาได้เร็วกว่านี้ การแก้ไขคงจะง่ายกว่านี้มาก", explain: { why: "third conditional (Had + S + V3) → would have been", wrong: { A: "will be — first conditional ไม่ใช่อดีตที่ไม่เกิด", B: "would be — second conditional (if + past) ไม่ตรงกับ Had นำหน้า", D: "was — past simple ไม่ใช่ conditional" }, tip: "Had … V3 → would have + V3" } },
    { no: 6, stem: " ------- the invoice is incorrect, payment will be delayed.", options: ["If", "Unless", "Provided that", "So long as"], answer: "A", tags: ["conditional"], difficulty: "easy", translationTh: "หากใบแจ้งหนี้ไม่ถูกต้อง การชำระเงินจะล่าช้า", explain: { why: "เงื่อนไขตรงไปตรงมา if + present", wrong: { B: "unless — เว้นแต่ ตรงข้าม (Unless the invoice is correct…)", C: "Provided that — ก็ต่อเมื่อ ความหมายไม่เข้า", D: "So long as — ตราบเท่าที่ ไม่เข้าบริบท" }, tip: "if + present → will" } },
    { no: 7, stem: "It is essential that every employee ------- the safety briefing.", options: ["attends", "attend", "attended", "attending"], answer: "B", tags: ["conditional"], difficulty: "medium", translationTh: "จำเป็นอย่างยิ่งที่พนักงานทุกคนต้องเข้าร่วมการบรรยายความปลอดภัย", explain: { why: "subjunctive หลัง essential that → base verb: attend", wrong: { A: "attends — -s ผิด subjunctive", C: "attended — past form ผิด", D: "attending — ไม่ใช่ base verb" }, tip: "essential/important/necessary + that + subjunctive" } },
    { no: 8, stem: " ------- the package arrives damaged, please contact us immediately.", options: ["Provided that", "Unless", "Whether", "If"], answer: "D", tags: ["conditional"], difficulty: "easy", translationTh: "หากหีบห่อมาถึงในสภาพเสียหาย โปรดติดต่อเราทันที", explain: { why: "เงื่อนไขตรงไปตรงมา: If the package arrives…", wrong: { A: "Provided that — ก็ต่อเมื่อ ไม่เข้าบริบท", B: "Unless — ความหมายกลับกัน (Unless the package is fine)", C: "Whether — ว่า…หรือไม่ ใช้กับคำถามทางเลือก ไม่ใช่เงื่อนไขแบบนี้" }, tip: "กรณีตรง ๆ → If" } },
    { no: 9, stem: "Rarely ------- we receive a complaint without supporting evidence.", options: ["do", "did", "have", "are"], answer: "A", tags: ["conditional"], difficulty: "hard", translationTh: "เราแทบไม่ได้รับข้อร้องเรียนที่ไม่มีหลักฐานประกอบ", explain: { why: "Rarely นำหน้าขอประโยค → inversion: Rarely do we receive (present simple)", wrong: { B: "did — past; ประโยคเป็นปัจจุบัน (receive ในเชิงนิสัย)", C: "have — ไม่ใช่กริยาช่วยที่ใช้ในบริบทนี้", D: "are — ไม่ใช่กริยาหลักของ receive" }, tip: "Rarely/Never/Seldom + do/does/did + S + V" } },
    { no: 10, stem: "If the vendor ------- on time, we would not be facing penalties.", options: ["delivers", "delivered", "had delivered", "would deliver"], answer: "B", tags: ["conditional"], difficulty: "medium", translationTh: "หากผู้ผลิตส่งตรงเวลา เราคงไม่ต้องเผชิญค่าปรับ (สมมติในปัจจุบัน)", explain: { why: "second conditional: if + past → would V1 — บริบท ‘ตอนนี้เผชิญค่าปรับ’ เป็นสมมติปัจจุบัน", wrong: { A: "delivers — first conditional แต่ผลเป็นปัจจุบัน (would not be facing) ไม่ match", C: "had delivered — third conditional แต่บริบทไม่ใช่อดีต", D: "would deliver — ห้าม would ใน if-clause" }, tip: "if + past + would V1 (second)" } }
  ]
};
