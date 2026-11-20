// data/lessons/p5-comparison.js — Module 1 · บทที่ 12
window.TOEIC.lessons["p5-comparison"] = {
  id: "p5-comparison",
  module: 1,
  order: 12,
  title: "Comparison — การเปรียบเทียบ",
  frequency: "กลาง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> ข้อสอบถาม (1) รูป comparative/superlative ที่ถูกต้อง, (2) คำเสริม much/far/even ก่อน comparative, (3) as…as และการขนาน, (4) double comparative — หลักคือดูว่าเปรียบเทียบอะไรกับอะไร</p>" },

    { type: "table", title: "รูปการเปรียบเทียบ", headers: ["แบบ", "โครงสร้าง", "ตัวอย่าง"], rows: [
      ["ขั้นธรรมดา", "as + adj/adv + as", "The result was as good as expected."],
      ["ขั้นกว่า (comparative)", "adj-er / more adj + than", "Sales were higher than last year."],
      ["ขั้นสูงสุด (superlative)", "the + adj-est / the most adj", "This is the most reliable option."],
      ["ขั้นกว่า + much/far/even", "much/far/even + comparative", "The new model is much faster."],
      ["ขั้นน้อยกว่า", "less + adj + than", "The fix was less expensive than expected."],
      ["ขั้นสูงสุดแบบน้อยที่สุด", "the least + adj", "This is the least risky option."]
    ]},

    { type: "table", title: "รูปผิดปกติ", headers: ["คำ", "comparative", "superlative"], rows: [
      ["good / well", "better", "best"],
      ["bad / badly", "worse", "worst"],
      ["much / many", "more", "most"],
      ["little (น้อย)", "less", "least"],
      ["far (ออกห่าง)", "farther / further", "farthest / furthest"]
    ]},

    { type: "table", title: "Pattern พิเศษ", headers: ["โครงสร้าง", "ความหมาย", "ตัวอย่าง"], rows: [
      ["the + comparative, the + comparative", "ยิ่ง… ยิ่ง…", "The sooner we submit, the better."],
      ["as much/many as", "มากถึง/เท่ากับ", "Up to as much as 50% off."],
      ["prefer X to Y", "ชอบ X มากกว่า Y", "We prefer quality to price."],
      ["one of the most + plural", "หนึ่งใน…ที่สุด", "One of the most reliable suppliers."],
      ["twice/half as adj as", "เป็นสองเท่า/ครึ่งหนึ่ง", "The new policy is twice as effective."]
    ]},

    { type: "examples", title: "ตัวอย่างในบริบทธุรกิจ", items: [
      { en: "The new supplier offers far more competitive pricing.", th: "ผู้ผลิตรายใหม่ให้ราคาที่แข่งขันได้กว่ามาก (far + comparative)" },
      { en: "This quarter's results are even better than forecast.", th: "ผลไตรมาสนี้ดีกว่าที่คาดไว้อีก (even + comparative)" },
      { en: "The revised proposal is much more detailed than the first draft.", th: "ข้อเสนอที่แก้ไขละเอียดกว่าฉบับแรกมาก (much more + adj)" },
      { en: "The earlier we place the order, the sooner it arrives.", th: "เรายิ่งสั่งเร็วเท่าไรก็ยิ่งได้รับเร็วเท่านั้น (the + compar, the + compar)" },
      { en: "She is the most experienced accountant on the team.", th: "เธอเป็นนักบัญชีที่มีประสบการณ์มากที่สุดในทีม (the most + adj)" },
      { en: "The warehouse is twice as large as the previous facility.", th: "คลังสินค้าใหม่นี้ใหญ่เป็นสองเท่าของเดิม (twice as + adj + as)" },
      { en: "Our service is as reliable as any competitor's offering.", th: "บริการของเราเชื่อถือได้เท่ากับของคู่แข่ง (as + adj + as)" },
      { en: "The solution is less expensive than replacing the whole system.", th: "วิธีนี้ถูกกว่าการเปลี่ยนทั้งระบบ (less + adj + than)" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>ช่องว่าง + <strong>than</strong> → <strong>comparative</strong> (higher, more efficient, better)</li><li>ช่องว่าง + <strong>noun</strong> (the ___ option) → <strong>superlative</strong> (the most efficient)</li><li>ช่องว่าง + <strong>as … as</strong> → <strong>ขั้นธรรมดา</strong> (as high as)</li><li>ช่องว่าง + <strong>much/far/even</strong> → <strong>comparative</strong></li><li>ช่องว่าง + <strong>the (จากโครงสร้าง the…the…)</strong> → <strong>comparative</strong></li><li>ช่องว่าง + <strong>one of the</strong> → <strong>superlative + plural noun</strong></li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>more + comparative -er ห้ามซ้อนกัน</strong>: ‘*more better*’ ผิด — better หรือ more good</li><li><strong>even/much/far นำ comparative ได้ แต่นำ superlative ไม่ได้</strong>: ‘much the best’ ผิด</li><li><strong>compare to vs than</strong>: ใช้ ‘higher than’ ไม่ใช่ ‘higher compared to’ ในช่องว่างที่มี than</li><li><strong>as good as</strong> ไม่ใช่ ‘as better as’</li><li><strong>the most + plural noun</strong> หลัง one of</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>แปล ‘มากกว่ามาก’ แล้วเขียน more higher — ต้องมีตัวเดียว (much higher)</li><li>ลืม the หน้า superlative: ‘the most’ ไม่ใช่ ‘most’</li><li>ใช้ more + adj ที่มี -er อยู่แล้ว</li><li>ใช้ as … than — as ต้องจับกับ as เท่านั้น</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "ดูคำ signal หลังช่องว่างก่อน: than → comparative · as → as · noun ที่ไม่มี than/as → superlative — ตอบใน 2 วินาที แล้วเช็คว่ามี much/far/even นำหรือไม่" },

    { type: "cheatsheet", html: "<ul><li>as + adj + as · adj-er/more adj + than · the + adj-est/the most + adj</li><li>much/far/even/a bit + comparative</li><li>irregular: better/worse/more/less · best/worst/most/least</li><li>the + comparative, the + comparative (ยิ่ง…ยิ่ง…)</li><li>one of the + superlative + plural noun</li><li>twice/half as adj as · prefer A to B</li></ul>" }
  ],
  quiz: [
    { no: 1, stem: "This year's conference was ------- than last year's.", options: ["large", "largest", "larger", "more large"], answer: "C", tags: ["comparison"], difficulty: "easy", translationTh: "การประชุมปีนี้ใหญ่กว่าปีที่แล้ว", explain: { why: "than นำข้างหลัง → comparative: larger", wrong: { A: "large — ไม่ใช่ comparative", B: "largest — superlative", D: "more large — ซ้อน more กับ -er" }, tip: "than → comparative" } },
    { no: 2, stem: "The updated software is ------- faster than the previous version.", options: ["much", "more", "most", "very"], answer: "A", tags: ["comparison"], difficulty: "easy", translationTh: "ซอฟต์แวร์ที่อัปเดตเร็วกว่าเวอร์ชันก่อนมาก", explain: { why: "ช่องว่าง + comparative (faster) → คำเสริม much/far/even", wrong: { B: "more — ซ้อน more + faster ห้าม", C: "most — superlative", D: "very — ใช้กับขั้นธรรมดา/ขั้นกว่า? very ใช้กับขั้นธรรมดาเท่านั้น (very fast)" }, tip: "much/far/even + comparative" } },
    { no: 3, stem: "Of the three proposals, this one is the ------- practical.", options: ["more", "most", "much", "very"], answer: "B", tags: ["comparison"], difficulty: "medium", translationTh: "จากสามข้อเสนอ ฉบับนี้ใช้งานได้จริงที่สุด", explain: { why: "superlative ต้องมี the → the most practical", wrong: { A: "more — comparative ไม่เข้ากับ the … of the three", C: "much — นำ comparative ไม่ใช่ superlative", D: "very — ไม่ใช่ superlative" }, tip: "the + superlative" } },
    { no: 4, stem: "The new warehouse is twice ------- large as the old one.", options: ["than", "more", "so", "as"], answer: "D", tags: ["comparison"], difficulty: "medium", translationTh: "คลังสินค้าใหม่ใหญ่เป็นสองเท่าของเดิม", explain: { why: "โครงสร้าง twice as adj as", wrong: { A: "than — ไม่ใช้กับ twice as…", B: "more — ซ้อนกันไม่ได้", C: "so — ไม่ใช้กับ twice as…" }, tip: "twice/half + as + adj + as" } },
    { no: 5, stem: "The earlier we order, the ------- the delivery.", options: ["soon", "sooner", "soonest", "more soon"], answer: "B", tags: ["comparison"], difficulty: "medium", translationTh: "เรายิ่งสั่งเร็วเท่าไร การจัดส่งก็ยิ่งเร็วเท่านั้น", explain: { why: "โครงสร้าง the + comparative, the + comparative → sooner", wrong: { A: "soon — ขั้นธรรมดา", C: "soonest — superlative", D: "more soon — ผิดรูป" }, tip: "the + comp, the + comp" } },
    { no: 6, stem: "Our quality standards are as strict ------- those of any competitor.", options: ["than", "that", "as", "like"], answer: "C", tags: ["comparison"], difficulty: "easy", translationTh: "มาตรฐานคุณภาพของเราเข้มงวดเท่ากับของคู่แข่งทุกราย", explain: { why: "โครงสร้าง as … as → strict as", wrong: { A: "than — ไม่ใช้กับ as…", B: "that — ไม่เข้า", D: "like — ไม่ใช้กับ as…as" }, tip: "as…as" } },
    { no: 7, stem: "This solution is less ------- than a full system replacement.", options: ["expensive", "expensively", "more expensive", "expense"], answer: "A", tags: ["comparison"], difficulty: "medium", translationTh: "วิธีนี้ถูกกว่าการเปลี่ยนระบบทั้งหมด", explain: { why: "โครงสร้าง less + adj + than → less expensive", wrong: { B: "expensively — กริยาวิเศษณ์ ไม่เข้ากับ is", C: "more expensive — ซ้อน less + more ห้าม", D: "expense — คำนาม ไม่ใช่คุณศัพท์" }, tip: "less + adj + than" } },
    { no: 8, stem: "She is one of the ------- analysts on the team.", options: ["much skilled", "skilled", "more skilled", "most skilled"], answer: "D", tags: ["comparison"], difficulty: "medium", translationTh: "เธอเป็นนักวิเคราะห์ที่มีทักษะมากที่สุดคนหนึ่งในทีม", explain: { why: "one of the + superlative + plural noun → most skilled", wrong: { A: "much skilled — ผิดรูป", B: "skilled — ไม่มีคำเสริม superlative", C: "more skilled — comparative" }, tip: "one of the + superlative + plural" } },
    { no: 9, stem: "The client prefers the new design ------- the original concept.", options: ["than", "to", "over", "as"], answer: "B", tags: ["comparison"], difficulty: "hard", translationTh: "ลูกค้าชอบดิไซน์ใหม่มากกว่าแนวคิดเดิม", explain: { why: "โครงสร้าง prefer A to B — ต้องใช้ to", wrong: { A: "than — prefer…to (ไม่ใช่ than)", C: "over — ไม่ใช่โครงสร้าง prefer", D: "as — ไม่ใช่โครงสร้าง prefer" }, tip: "prefer A to B" } },
    { no: 10, stem: "Service at the flagship store is ------- better than at other branches.", options: ["most", "very", "much", "more"], answer: "C", tags: ["comparison"], difficulty: "hard", translationTh: "บริการที่ร้านหลักดีกว่าสาขาอื่นมาก", explain: { why: "ช่องว่าง + comparative (better) → คำเสริม: much", wrong: { A: "most — superlative", B: "very — ใช้กับขั้นธรรมดา", D: "more — ซ้อน better" }, tip: "much/far/even + comparative" } }
  ]
};
