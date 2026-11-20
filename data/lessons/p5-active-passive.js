// data/lessons/p5-active-passive.js — Module 1 · บทที่ 4
window.TOEIC.lessons["p5-active-passive"] = {
  id: "p5-active-passive",
  module: 1,
  order: 4,
  title: "Active vs Passive Voice — ประโยค กรรม",
  frequency: "สูง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> ข้อสอบธุรกิจชอบ Passive เพราะการเขียนทางการมักเน้น <em>ผลของการกระทำ</em> ไม่เน้นผู้กระทำ (ผู้กระทำไม่ทราบ/ไม่สำคัญ/ชัดอยู่แล้ว) — คำถามมักให้กริยาหลายรูปและถามว่าอันไหนถูก</p>" },

    { type: "table", title: "Passive Voice — โครงสร้างตามกาล", headers: ["Tense", "โครงสร้าง", "ตัวอย่าง"], rows: [
      ["Present Simple", "am/is/are + V3", "The report <strong>is submitted</strong> every Friday."],
      ["Present Continuous", "am/is/are + being + V3", "The system <strong>is being upgraded</strong> now."],
      ["Present Perfect", "has/have + been + V3", "The new policy <strong>has been approved</strong>."],
      ["Past Simple", "was/were + V3", "The merger <strong>was announced</strong> yesterday."],
      ["Past Continuous", "was/were + being + V3", "The files <strong>were being scanned</strong> when the power went out."],
      ["Past Perfect", "had + been + V3", "The shipment <strong>had been delayed</strong> before we called."],
      ["Future (will)", "will + be + V3", "The results <strong>will be released</strong> next week."],
      ["Modal", "modal + be + V3", "Applications <strong>should be submitted</strong> online."]
    ]},

    { type: "table", title: "เลือก Active หรือ Passive?", headers: ["สถานการณ์", "ใช้", "ตัวอย่าง"], rows: [
      ["ผู้กระทำชัดเจน/สำคัญ", "Active", "The CEO approved the budget."],
      ["ไม่รู้/ไม่สำคัญ/ชัดอยู่แล้ว ว่าใครทำ", "Passive", "The budget was approved."],
      ["เน้นผลลัพธ์ (ไม่เน้นคนทำ)", "Passive", "All orders are processed within 24 hours."],
      ["Reporting verbs (เป็นทางการ)", "Passive + to V", "Sales are expected to rise next quarter."]
    ]},

    { type: "table", title: "กริยาที่ไม่มี Passive", headers: ["กลุ่ม", "กริยา", "หมายเหตุ"], rows: [
      ["linking/stative", "seem, appear, happen, occur, exist, belong, consist of, lack, resemble", "*The problem was seemed ผิดเสมอ"],
      ["have (= possess)", "have (own/have got)", "*A car is had by her ผิด — แต่ have (causative) มี ดูบท p5-modals-causatives"],
      ["จำนวนเงิน/นับไม่ได้ ฯลฯ", "—", "ไม่เกี่ยวกับ passive แต่ ระวัง have/has ในการตัดสินใจ"]
    ]},

    { type: "examples", title: "ตัวอย่างในบริบทธุรกิจ", items: [
      { en: "All invoices should be submitted electronically.", th: "ใบแจ้งหนี้ทั้งหมดควรส่งในรูปแบบอิเล็กทรอนิกส์ (modal + passive)" },
      { en: "The new headquarters is being constructed in phases.", th: "สำนักงานใหญ่ใหม่กำลังก่อสร้างเป็นระยะ (present continuous passive)" },
      { en: "The audit report has been reviewed by the compliance team.", th: "รายงานตรวจสอบถูกทบทวนโดยทีมกำกับดูแลแล้ว (present perfect passive)" },
      { en: "A formal apology was issued to the affected customers.", th: "มีการออกจดหมายขอโทษอย่างเป็นทางการถึงลูกค้าที่ได้รับผลกระทบ (past simple passive)" },
      { en: "The conference will be held at the Grand Palace Hotel.", th: "การประชุมจะจัดขึ้นที่โรงแรมแกรนด์พาเลซ (future passive)" },
      { en: "The product is expected to launch in the fall.", th: "ผลิตภัณฑ์คาดว่าจะเปิดตัวในฤดูใบไม้ร่วง (passive report + to launch)" },
      { en: "Only final candidates will be invited to the on-site interview.", th: "เฉพาะผู้สมัครรอบสุดท้ายเท่านั้นที่จะได้รับเชิญให้สัมภาษณ์ที่สถานที่จริง (future passive)" },
      { en: "The policy was approved by the board last week.", th: "นโยบายได้รับการอนุมัติโดยคณะกรรมการเมื่อสัปดาห์ที่แล้ว (past passive + by-agent)" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>ช่องว่าง + V3/past participle → เช็คว่าต้องการ <strong>passive</strong> (มี be/have/modal นำ) หรือ <strong>active perfect</strong></li><li>เห็น <strong>is/are + ___</strong> และตัวเลือกเป็น V3 → <strong>passive</strong> (เช่น is submitted)</li><li>เห็น <strong>is/are + ___</strong> และตัวเลือกเป็น V-ing/V1 → <strong>active continuous/simple</strong></li><li>เห็น <strong>will + ___</strong> และตัวเลือกเป็น be + V3 → <strong>future passive</strong></li><li>เห็น <strong>reporting verb</strong> (expect, believe, estimate, report, say) → <strong>be said/expected/estimated + to V</strong></li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>get + V3</strong> ก็ใช้ passive ได้ (get promoted, get fired) — แต่ใน TOEIC มักใช้ be + V3</li><li><strong>V3 เป็น adjective</strong>: ถ้าช่องว่างเป็น adjective (satisfied customers) ถือว่า passive ในรูปคุณศัพท์ ไม่ต้องมี be นำ เช่น <em>the <u>approved</u> budget</em></li><li><strong>ตัวลวง V3 หลัง modal</strong>: “must submitted” ผิด — หลัง modal ใช้ base form (must <u>submit</u> / must <u>be submitted</u>)</li><li><strong>active perfect vs passive</strong>: “has submitted” (active, ผู้ทำ) vs “has been submitted” (passive, ไม่ระบุผู้ทำ) — ถ้าไม่มี by-agent และเน้นผล → passive</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>ใช้ active ในที่ควรใช้ passive เช่น “The report submits every Friday” — ต้อง “The report is submitted…”</li><li>เห็น V3 แล้วเลือกโดยไม่ดูว่ามี be/have/modal นำหรือไม่ — “The manager reviewed” (active) vs “was reviewed” (passive)</li><li>ลืมว่า “have been V3” คือ passive perfect ไม่ใช่ active</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "ดูตัวเลือกเป็นกลุ่ม: (1) มี be/modal/have + V3 → passive (2) V1/V2 → active (3) V-ing → continuous/participial — แล้วดูบริบทว่าประโยคต้องการแปลว่า 'ใครทำอะไร' หรือ 'อะไรถูกทำ' — ถ้าไม่มี by-agent และแปลว่าผลลัพธ์ → passive" },

    { type: "cheatsheet", html: "<ul><li>Passive = <strong>be + V3</strong> (ทุกกาล)</li><li>is/are submitted · is being upgraded · has been approved · was announced · will be released · should be submitted</li><li>ไม่มี passive: seem, happen, occur, belong, consist, lack, resemble</li><li>Reporting verbs: is expected/estimated/said/reported <strong>+ to V</strong></li><li>V3 เป็นคุณศัพท์ได้ (approved budget, delayed shipment)</li><li>ดูตัวเลือก: มี be/have/modal → passive / V1/V2 → active</li></ul>" }
  ],
  quiz: [
    { no: 1, stem: "All purchase orders ------- by the department head before processing.", options: ["must approve", "must approves", "must be approved", "must approving"], answer: "C", tags: ["active-passive"], difficulty: "easy", translationTh: "ใบสั่งซื้อทั้งหมดต้องได้รับอนุมัติจากหัวหน้าแผนกก่อนดำเนินการ", explain: { why: "ใบสั่งซื้อ (ไม่ระบุผู้ทำ) + ต้อง + ถูกกระทำ → modal passive: must be approved", wrong: { A: "must approve — กริยา active ต้องมีกรรม (approve the orders) ประธานคือ orders ไม่ได้ทำเอง", B: "must approves — modal ต้องตามด้วย base form ไม่ใช่ approves", D: "must approving — หลัง must ต้องเป็น base form" }, tip: "modal + be + V3 = modal passive" } },
    { no: 2, stem: "The new payroll system is ------- tested by the IT team this week.", options: ["been", "being", "be", "been being"], answer: "B", tags: ["active-passive"], difficulty: "easy", translationTh: "ระบบเงินเดือนใหม่กำลังถูกทดสอบโดยทีม IT สัปดาห์นี้", explain: { why: "โครงสร้าง passive continuous = is being + V3 → is being tested", wrong: { A: "been — is been tested ผิดไวยากรณ์", C: "be — is be tested ผิด", D: "been being — เกิน และไม่เข้ากับ is" }, tip: "is/are + being + V3 = passive continuous" } },
    { no: 3, stem: "The annual report ------- by the board last Thursday.", options: ["has approved", "approved", "approves", "was approved"], answer: "D", tags: ["active-passive"], difficulty: "easy", translationTh: "รายงานประจำปีได้รับอนุมัติจากคณะกรรมการเมื่อวันพฤหัสบดีที่แล้ว", explain: { why: "last Thursday (past) + ไม่มี by-agent แต่เน้นรายงานถูกอนุมัติ → past passive: was approved", wrong: { A: "has approved — active perfect, ทั้งไม่เข้ากับ past ที่จบแล้ว", B: "approved — active past ต้องการผู้ทำที่ชัดเจน แต่ประธานคือ report ไม่ได้ทำเอง", C: "approves — present form ไม่เข้ากับ past" }, tip: "past + passive → was/were + V3" } },
    { no: 4, stem: "Interest rates are ------- to rise next quarter, according to analysts.", options: ["expected", "expecting", "expect", "expectation"], answer: "A", tags: ["active-passive"], difficulty: "medium", translationTh: "ตามที่นักวิเคราะห์กล่าว อัตราดอกเบี้ยคาดว่าจะเพิ่มขึ้นไตรมาสหน้า", explain: { why: "โครงสร้าง reporting passive: be expected + to V → are expected to rise", wrong: { B: "expecting — are expecting to rise แปลว่า 'กำลังคาดหวังตัวเอง' ไม่ใช่ 'ถูกคาดว่า'", C: "expect — are expect to rise ผิดไวยากรณ์", D: "expectation — เป็นคำนาม ไม่เข้ากับโครงสร้าง is/are + ___ + to V" }, tip: "is/are expected/said/estimated + to V" } },
    { no: 5, stem: "The damaged merchandise ------- to the supplier last Monday.", options: ["returned", "was returned", "returns", "has returned"], answer: "B", tags: ["active-passive"], difficulty: "medium", translationTh: "สินค้าที่เสียหายถูกส่งคืนไปยังผู้ผลิตเมื่อวันจันทร์ที่แล้ว", explain: { why: "merchandise ไม่ทำเอง ต้องเป็นผู้ถูกทำ → past passive: was returned", wrong: { A: "returned — active แต่ merchandise ส่งคืนไม่ได้เอง", C: "returns — present form ไม่เข้า", D: "has returned — active perfect 'กลับมาเอง' ผิดความหมาย" }, tip: "ของถูกทำ → passive" } },
    { no: 6, stem: "All applicants ------- to bring two forms of identification to the interview.", options: ["are advised", "advised", "advise", "are advising"], answer: "A", tags: ["active-passive"], difficulty: "medium", translationTh: "ผู้สมัครทุกคนได้รับคำแนะนำให้นำเอกสารประจำตัว 2 ฉบับมาสัมภาษณ์", explain: { why: "ผู้สมัครไม่ใช่ผู้แนะนำ แต่เป็นผู้ถูกแนะนำ → passive: are advised + to V", wrong: { B: "advised — ขาด be: applicants advised to bring อาจแปลได้แต่ไม่สมบูรณ์ในบริบทหลัก (ต้องมี are)", C: "advise — active present ผิดความหมาย (ผู้สมัครไม่ได้แนะนำใคร)", D: "are advising — active continuous 'กำลังให้คำแนะนำ' ผิดความหมาย" }, tip: "be + V3 + to V (passive + to V)" } },
    { no: 7, stem: "The contract ------- before any payment is released.", options: ["sign", "signed", "must be signed", "signing"], answer: "C", tags: ["active-passive"], difficulty: "medium", translationTh: "สัญญาต้องถูกเซ็นก่อนที่จะมีการจ่ายเงิน", explain: { why: "ประโยคบังคับ/เงื่อนไข: must be signed — สัญญาต้องถูกเซ็นโดยใครสักคน → modal passive", wrong: { A: "sign — base form ขาดทุกอย่าง", B: "signed — ขาด be/modal (อาจแปล 'ถูกเซ็นแล้ว' แต่ไม่เข้ากับ future 'before any payment is released')", D: "signing — ไม่เข้า" }, tip: "modal + be + V3" } },
    { no: 8, stem: "The new offices ------- furnished with ergonomic furniture next month.", options: ["have been", "will", "are", "will be"], answer: "D", tags: ["active-passive"], difficulty: "hard", translationTh: "ออฟฟิศใหม่จะถูกจัดอุปกรณ์ด้วยเฟอร์นิเจอร์ตามหลักสรีรศาสตร์เดือนหน้า", explain: { why: "next month → อนาคต + ถูกจัด → will be + V3: will be furnished", wrong: { A: "have been — present perfect ไม่เข้ากับอนาคต", B: "will — will furnished ผิดไวยากรณ์ (ขาด be)", C: "are — are furnished เป็น present ไม่เข้ากับ next month" }, tip: "will be + V3 = future passive" } },
    { no: 9, stem: "The meeting was ------- due to the CEO's unexpected illness.", options: ["postpone", "postponed", "postponing", "postpones"], answer: "B", tags: ["active-passive"], difficulty: "hard", translationTh: "การประชุมถูกเลื่อนออกไปเนื่องจากซีอีโอป่วยโดยไม่คาดคิด", explain: { why: "was + ___ → passive past: was postponed (ถูกเลื่อน)", wrong: { A: "postpone — base form หลัง was ผิดไวยากรณ์", C: "postponing — was postponing แปลว่า 'กำลังเลื่อน' ผิดความหมาย (การประชุมเลื่อนเองไม่ได้)", D: "postpones — present form หลัง was ผิด" }, tip: "was/were + V3" } },
    { no: 10, stem: "The new drug is ------- to reduce side effects compared with the current treatment.", options: ["belief", "believe", "believed", "believing"], answer: "C", tags: ["active-passive"], difficulty: "hard", translationTh: "มีความเชื่อว่ายาตัวใหม่นี้ช่วยลดผลข้างเคียงเมื่อเทียบกับการรักษาปัจจุบัน", explain: { why: "reporting passive: be believed + to V → is believed to reduce", wrong: { A: "belief — เป็นคำนาม ไม่เข้ากับโครงสร้าง", B: "believe — is believe to reduce ผิดไวยากรณ์", D: "believing — is believing to reduce ผิด" }, tip: "is/are believed/said/expected/estimated + to V" } }
  ]
};
