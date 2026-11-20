// data/lessons/p5-correlative.js — Module 1 · บทที่ 9
window.TOEIC.lessons["p5-correlative"] = {
  id: "p5-correlative",
  module: 1,
  order: 9,
  title: "Correlative Conjunctions — คำเชื่อมคู่",
  frequency: "กลาง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> ข้อสอบถามว่ารูปแบบใดถูกต้อง — <strong>ทั้ง…และ (both…and)</strong>, <em>either…or</em>, <em>neither…nor</em>, <em>not only…but also</em> — กฎเดียวที่ต้องจำคือ<strong>โครงสร้างต้องขนาน (parallel)</strong> และกริยาต้องสอดคล้องกับประธานตัวใกล้สุดในกรณี or/nor</p>" },

    { type: "table", title: "คู่สันธานทั้ง 4", headers: ["คู่", "ความหมาย", "โครงสร้างขนาน", "ตัวอย่าง"], rows: [
      ["both A and B", "ทั้ง A และ B", "ขนานกัน", "Both the manager and the staff were informed."],
      ["either A or B", "A หรือ B อย่างใดอย่างหนึ่ง", "ขนานกัน", "You may either call or e-mail."],
      ["neither A nor B", "ไม่ทั้ง A และไม่ B", "ขนานกัน", "Neither the price nor the quality has changed."],
      ["not only A but also B", "ไม่เพียงแต่ A แต่ยัง B", "ขนานกัน", "Not only the report but also the invoice was missing."]
    ]},

    { type: "table", title: "กฎกริยากับ correlative", headers: ["กรณี", "กริยา", "ตัวอย่าง"], rows: [
      ["both A and B", "พหูพจน์เสมอ", "Both the CEO and the CFO <strong>are</strong> attending."],
      ["either A or B / neither A nor B", "ตามตัวใกล้สุด (proximity)", "Neither the CEO nor the executives <strong>are</strong> available. / Neither the executives nor the CEO <strong>is</strong> available."],
      ["not only A but also B", "ตามตัวใกล้สุด (B)", "Not only the employees but also the manager <strong>is</strong> ready."]
    ]},

    { type: "examples", title: "ตัวอย่างในบริบทธุรกิจ", items: [
      { en: "The announcement applies to both full-time and part-time staff.", th: "ประกาศนี้ใช้ทั้งกับพนักงานเต็มเวลาและพาร์ทไทม์ (ทั้งคู่เป็นคำคุณศัพท์ขนานกัน)" },
      { en: "You can either reschedule or cancel the appointment at no charge.", th: "คุณสามารถเลื่อนหรือยกเลิกการนัดโดยไม่เสียค่าใช้จ่าย (either…or + กริยาขนานกัน)" },
      { en: "Neither the invoice nor the shipping documents were attached.", th: "ทั้งใบแจ้งหนี้และเอกสารการจัดส่งไม่ถูกแนบ (กริยาตามเอกพจน์/พหูพจน์ตัวใกล้สุด — documents → were)" },
      { en: "The workshop was both informative and practical.", th: "เวิร์กช็อปนี้ทั้งมีสาระและใช้ได้จริง (both + adj + and + adj)" },
      { en: "Not only did she finish early, but she also exceeded targets.", th: "เธอไม่เพียงเสร็จก่อนเวลา แต่ยังเกินเป้าหมาย (not only + กริยาช่วย đảo: did she finish)" },
      { en: "We offer not only competitive salaries but also flexible hours.", th: "เรามีให้ไม่เพียงเงินเดือนที่แข่งขันได้ แต่ยังมีชั่วโมงทำงานยืดหยุ่น (noun + and + noun ขนานกัน)" },
      { en: "Either the coordinator or the assistants will greet the guests.", th: "ไม่ผู้ประสานงานก็ผู้ช่วยจะต้อนรับแขก (กริยาตามตัวใกล้สุด — assistants → will greet)" },
      { en: "The policy covers neither overtime nor travel expenses.", th: "นโยบายนี้ไม่ครอบคลุมทั้งค่าล่วงเวลาและค่าเดินทาง (neither + noun + nor + noun)" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>เห็น <strong>both … and …</strong>, <strong>either … or …</strong>, <strong>neither … nor …</strong>, <strong>not only … but also …</strong> → หาคำที่อยู่ในแต่ละข้างของคู่ แล้วดูว่า <strong>ชนิดและรูปขนานกัน</strong>ไหม (noun+noun, adj+adj, verb+verb)</li><li>กริยาหลังคู่ <strong>or/nor</strong> → ดูคำนามข้างๆ ใกล้สุด</li><li>เห็น <strong>not only</strong> นำหน้า → กริยาและประธานสลับที่ (Not only did he…)</li><li>เห็น both แล้วตัวเลือกไม่มี and → ผิดทันที</li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>both ต้องมาคู่กับ and เสมอ</strong>: ‘*Both the manager and staff is informed*’ ผิดกริยา — both…and → พหูพจน์</li><li><strong>โครงสร้างไม่ขนาน</strong>: ‘*She both sings and dancing*’ ผิด — ต้อง ‘sings and dances’</li><li><strong>ตัวใกล้สุดของ or/nor</strong>: ‘*Neither the managers nor the CEO are…*’ ผิด → is (ใกล้สุดคือ CEO)</li><li><strong>not only นำหน้าต้องสลับ</strong>: ‘*Not only he finished but also exceeded*’ ผิด — ‘Not only did he finish…’</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>มอง both…and เหมือน and ธรรมดาแล้วเลือกกริยาเอกพจน์ — both ต้องพหูพจน์เสมอ</li><li>ลืมว่าตัวใกล้สุด (proximity) ใช้กับ or/nor เท่านั้น ไม่ใช้กับ both</li><li>ใช้ not only…but also กับโครงสร้างไม่ขนาน: ‘not only beautifully but also quick’ ผิด — ต้อง ‘not only beautiful but also quick’ (adj+adj)</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "1) หาคู่คำก่อน (both…and / either…or / neither…nor) 2) ดูว่าคำสองข้างขนานกันไหม 3) ถ้าเป็น or/nor ให้มองเฉพาะคำนามข้างกริยา — ตอบทันที" },

    { type: "cheatsheet", html: "<ul><li>both A and B → กริยา <strong>พหูพจน์</strong></li><li>either A or B / neither A nor B → กริยาตาม <strong>ตัวใกล้สุด</strong></li><li>not only A but also B → กริยาตาม <strong>B</strong>; นำหน้านำ → สลับ (Not only did…)</li><li><strong>โครงสร้างต้องขนาน</strong>: noun+noun · adj+adj · verb+verb · gerund+gerund</li><li>either…or / neither…nor ใช้ตัวเลือกปฏิเสธ/ยืนยันที่ละคู่เสมอ (อย่าใช้ทั้ง and และ or ปนกัน)</li></ul>" }
  ],
  quiz: [
    { no: 1, stem: "Both the scheduling system and the reminder service ------- updated last night.", options: ["was", "were", "is", "been"], answer: "B", tags: ["correlative"], difficulty: "easy", translationTh: "ทั้งระบบกำหนดการและบริการแจ้งเตือนถูกอัปเดตเมื่อคืนนี้", explain: { why: "both A and B → กริยาพหูพจน์ → were", wrong: { A: "was — เอกพจน์ ผิดกับ both…and", C: "is — เอกพจน์ present ไม่เข้ากับ past (last night)", D: "been — ไม่ใช่กริยาแท้ ขาด have/has/had" }, tip: "both…and → plural" } },
    { no: 2, stem: "You may either upload the files ------- send them by secure e-mail.", options: ["but", "and", "or", "nor"], answer: "C", tags: ["correlative"], difficulty: "easy", translationTh: "คุณสามารถอัปโหลดไฟล์หรือส่งทางอีเมลที่ปลอดภัย", explain: { why: "คู่ either…or — either กำหนดให้ตามด้วย or", wrong: { A: "but — คู่แบบ not only…but also", B: "and — ต้องกับ both", D: "nor — ต้องกับ neither" }, tip: "either↔or · neither↔nor" } },
    { no: 3, stem: "Neither the updated invoice nor the shipping labels ------- attached to the package.", options: ["is", "are", "was", "were"], answer: "D", tags: ["correlative"], difficulty: "medium", translationTh: "ทั้งใบแจ้งหนี้ที่อัปเดตและฉลากจัดส่งไม่ได้แนบมากับหีบห่อ", explain: { why: "proximity — คำนามใกล้สุดคือ shipping labels (พหูพจน์) → were", wrong: { A: "is — เอกพจน์ present ไม่เข้ากับ past (attached ในบริบทนี้เป็น past/บรรยายสภาพ)", B: "are — present; บริบทบรรยายเหตุการณ์ที่ผ่านมา", C: "was — ตาม invoice ผิด proximity" }, tip: "or/nor → กริยาจ้องคำนามข้างๆ" } },
    { no: 4, stem: "The new analyst impressed the team with her ability to both analyze data ------- present it clearly.", options: ["and", "or", "nor", "but"], answer: "A", tags: ["correlative"], difficulty: "medium", translationTh: "นักวิเคราะห์ใหม่ทำให้ทีมประทับใจด้วยความสามารถทั้งวิเคราะห์ข้อมูลและนำเสนออย่างชัดเจน", explain: { why: "both…and — โครงสร้างขนาน analyze…present", wrong: { B: "or — ต้องกับ either", C: "nor — ต้องกับ neither", D: "but — ต้องกับ not only" }, tip: "both↔and" } },
    { no: 5, stem: "Not only ------- the report late, but it also contained errors.", options: ["did he submit", "he submitted", "he did submit", "does he submit"], answer: "A", tags: ["correlative", "conditional"], difficulty: "hard", translationTh: "เขาไม่เพียงส่งรายงานล่าช้าเท่านั้น แต่ยังมีข้อผิดพลาดอีกด้วย", explain: { why: "Not only นำหน้า → สลับกริยาช่วยกับประธาน: Not only did he submit (past)", wrong: { B: "he submitted — ไม่สลับ; not only นำหน้าต้อง inversion", C: "he did submit — ไม่สลับ", D: "does he submit — present ไม่เข้ากับ contain (past)" }, tip: "Not only + aux + S + V" } },
    { no: 6, stem: "Either the supplier's representative or the quality inspectors ------- present during testing.", options: ["was", "were", "is", "has"], answer: "B", tags: ["correlative"], difficulty: "medium", translationTh: "ไม่ก็ผู้แทนของผู้ผลิตหรือผู้ตรวจสอบคุณภาพจะอยู่ระหว่างการทดสอบ", explain: { why: "proximity — คำนามใกล้สุดคือ inspectors (พหูพจน์) → were", wrong: { A: "was — ตามตัวไกล (representative) ผิด proximity", C: "is — เอกพจน์ present", D: "has — เอกพจน์" }, tip: "or → ตามตัวใกล้สุด" } },
    { no: 7, stem: "The revised policy covers ------- full-time employees nor contractors.", options: ["both", "either", "neither", "not only"], answer: "C", tags: ["correlative"], difficulty: "easy", translationTh: "นโยบายที่แก้ไขใหม่ไม่ครอบคลุมทั้งพนักงานเต็มเวลาและผู้รับจ้าง", explain: { why: "nor นำหน้าหลังช่วงต้องการ neither: neither…nor", wrong: { A: "both — ต้องจับกับ and", B: "either — ต้องจับกับ or", D: "not only — ต้องจับกับ but also" }, tip: "nor → neither" } },
    { no: 8, stem: "The approval applies to ------- new accounts and renewals.", options: ["either", "neither", "not", "both"], answer: "D", tags: ["correlative"], difficulty: "medium", translationTh: "การอนุมัตินี้ใช้กับทั้งบัญชีใหม่และการต่ออายุ", explain: { why: "and นำหลัง → ต้องใช้ both", wrong: { A: "either — ต้องตามด้วย or", B: "neither — ต้องตามด้วย nor", C: "not — ไม่ใช่ correlative" }, tip: "and → both" } },
    { no: 9, stem: " ------- the sales team nor the marketing department was informed.", options: ["Both", "Either", "Neither", "Not only"], answer: "C", tags: ["correlative"], difficulty: "medium", translationTh: "ทั้งฝ่ายขายและฝ่ายการตลาดไม่ได้รับแจ้ง", explain: { why: "nor นำหลัง → ต้องเป็น neither…nor; กริยา was (เอกพจน์) ใกล้สุด Department (เอกพจน์)", wrong: { A: "Both — ต้องคู่ with and", B: "Either — ต้องคู่ with or", D: "Not only — ต้องคู่ with but also" }, tip: "nor → neither" } },
    { no: 10, stem: "She is not only organized ------- highly detail-oriented.", options: ["and", "but also", "nor", "or"], answer: "B", tags: ["correlative"], difficulty: "easy", translationTh: "เธอไม่เพียงเป็นระเบียบ แต่ยังใส่ใจรายละเอียดสูง", explain: { why: "คู่ not only…but also", wrong: { A: "and — both ต้องใช้คู่", C: "nor — neither ต้องใช้คู่", D: "or — either ต้องใช้คู่" }, tip: "not only↔but also" } }
  ]
};
