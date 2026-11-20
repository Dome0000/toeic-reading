// data/lessons/p5-relative-clauses.js — Module 1 · บทที่ 6
window.TOEIC.lessons["p5-relative-clauses"] = {
  id: "p5-relative-clauses",
  module: 1,
  order: 6,
  title: "Relative Clauses — ประโยคย่อยขยายนาม",
  frequency: "กลาง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> ข้อสอบให้ช่องว่างระหว่างคำนามกับกริยา แล้วถามคำบุพบทสัมพันธ์ที่ถูกต้อง (who/whom/whose/which/that) หรือถามว่าเว้น relative pronoun ได้ไหม — หัวใจคือดู <em>หน้าที่ของคำที่หายในอนุประโยค</em> (ประธาน? กรรม? เจ้าของ?)</p>" },

    { type: "table", title: "ตาราง Relative Pronoun", headers: ["คำ", "ใช้ขยาย", "หน้าที่ในอนุประโยค", "ตัวอย่าง"], rows: [
      ["who", "คน", "ประธาน", "The manager who approved the budget is on leave."],
      ["whom", "คน", "กรรม", "The candidate whom we interviewed was excellent."],
      ["whose", "คน/สิ่ง (เจ้าของ)", "แสดงความเป็นเจ้าของ", "The client whose contract expired wants to renew."],
      ["which", "สิ่ง/สัตว์", "ประธาน/กรรม", "The report which you sent is incomplete."],
      ["that", "คน/สิ่ง", "ประธาน/กรรม (defining เท่านั้น)", "The files that arrived today need scanning."],
      ["where", "สถานที่", "in which", "The city where the conference will be held."],
      ["when", "เวลา", "in which/during which", "The day when the merger closed"],
      ["why", "เหตุผล", "for which", "The reason why the shipment was delayed"]
    ]},

    { type: "table", title: "Defining vs Non-defining", headers: ["ชนิด", "เครื่องหมายจุลภาค", "which/that ใช้ได้ไหม", "ตัวอย่าง"], rows: [
      ["Defining (จำเป็น)", "ไม่มี comma", "ทั้งคู่ได้", "The employee who won the award is here."],
      ["Non-defining (ขยายเสริม)", "มี comma คั่น", "ใช้ which/who เท่านั้น ห้าม that", "Mr. Chen, who joined in 2019, will retire."]
    ]},

    { type: "examples", title: "ตัวอย่างในบริบทธุรกิจ", items: [
      { en: "Employees who work remotely receive a monthly stipend.", th: "พนักงานที่ทำงานระยะไกลได้รับเงินสนับสนุนรายเดือน (who = ประธานของ work)" },
      { en: "The vendor whom we selected offers the best pricing.", th: "ผู้ผลิตที่เราเลือกให้ราคาดีที่สุด (whom = กรรมของ selected)" },
      { en: "The accountant whose audit found the error resigned.", th: "นักบัญชีผู้ตรวจสอบแล้วพบข้อผิดพลาดลาออก (whose = ความเป็นเจ้าของ)" },
      { en: "The office where the negotiations took place is being renovated.", th: "ออฟฟิศที่การเจรจาเกิดขึ้นกำลังรีโนเวท (where = สถานที่)" },
      { en: "The policy, which was updated in January, takes effect immediately.", th: "นโยบายซึ่งอัปเดตเมื่อเดือนมกราคมมีผลทันที (non-defining, ห้าม that)" },
      { en: "The reason why the launch was postponed remains unclear.", th: "เหตุผลที่การเปิดตัวถูกเลื่อนยังไม่ชัดเจน (why = เหตุผล)" },
      { en: "This is the most reliable supplier that we have worked with.", th: "นี่คือผู้ผลิตที่น่าเชื่อถือที่สุดที่เราเคยร่วมงาน (superlative + that ชอบใช้)" },
      { en: "The documents which were missing from the folder turned up.", th: "เอกสารที่หายจากแฟ้มปรากฏขึ้น (defining + which หรือ that ก็ได้)" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>ช่องว่างอยู่หลังคำนามคน และอนุประโยคขาด <strong>ประธาน</strong> → <strong>who/that</strong></li><li>ช่องว่างอยู่หลังคำนามคน และอนุประโยคขาด <strong>กรรม</strong> → <strong>whom/who/that</strong></li><li>ช่องว่าง + คำนามตามมา (แสดงความเป็นเจ้าของ) → <strong>whose</strong></li><li>ช่องว่างหลังคำนามสิ่งของ/เหตุการณ์ และอนุประโยคขาดประธาน/กรรม → <strong>which/that</strong></li><li>ช่องว่างหลัง <strong>the reason</strong> → <strong>why</strong></li><li>ช่องว่างหลัง <strong>the place/city/office</strong> → <strong>where</strong></li><li>ช่องว่างหลัง <strong>comma</strong> (ขยายเสริม) → <strong>who/which</strong> (ห้าม that)</li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>that ใช้กับ non-defining ไม่ได้</strong> — เห็น comma คั่นต้องตอบ who/which ไม่ใช่ that</li><li><strong>what ≠ which</strong>: what ไม่มีAntecedent (the thing which) ใช้เมื่อไม่มีคำนามนำหน้า — ‘what you said’ ถูก; ‘*the report what you sent*’ ผิด</li><li><strong>whom มักไม่ใช้เดี่ยวๆ ในภาษาพูด</strong> แต่ใน TOEIC ยังทดสอบ — หลังกริยา ‘interviewed’ ต้อง whom (formal)</li><li><strong>เครื่องหมายจุลภาคตัดสิน</strong>: มี comma → ใช้ who/which เท่านั้น</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>เลือก whom เสมอเมื่อพูดถึงคน — ตรวจก่อนว่าอนุประโยคต้องการประธานหรือกรรม</li><li>ใช้ that กับ non-defining clause เพราะคุ้นเคย — comma คือสัญญาณ</li><li>ลืมว่า where/when เป็นบุพบทโดยตัวมันเรียบร้อย: ‘in the city where…’ ไม่ต้องมี in อีกที</li><li>แปล ‘ที่’ เป็น that ทุกครั้ง — ถ้าขยายเสริม (มี comma) ต้อง who/which</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "1) ดูว่าอนุประโยคขาดอะไร (ประธาน/กรรม/เจ้าของ/ที่/เวลา/เหตุผล) 2) ดูว่ามี comma ไหม 3) ดู antecedent เป็นคนหรือสิ่ง — ตอบใน 3 วินาที" },

    { type: "cheatsheet", html: "<ul><li>คน + อนุประโยคขาดประธาน → who/that · ขาดกรรม → whom/who/that</li><li>สิ่งของ/เหตุการณ์ → which/that</li><li>เจ้าของ (มีคำนามตาม) → whose</li><li>the place/office/city → where · the day/time → when · the reason → why</li><li>comma (non-defining) → who/which เท่านั้น (ห้าม that)</li><li>superlative/the only/first/all + → that</li><li>what = the thing(s) which (ไม่มีAntecedent)</li></ul>" }
  ],
  quiz: [
    { no: 1, stem: "The supplier ------- we chose offers the fastest delivery times.", options: ["who", "whom", "which", "whose"], answer: "C", tags: ["relative-clause"], difficulty: "easy", translationTh: "ผู้ผลิตที่เราเลือกให้เวลาจัดส่งเร็วที่สุด", explain: { why: "Antecedentคือ The supplier ซึ่งในบริบทนี้หมายถึงบริษัท (สิ่ง) → which (who ใช้กับคน)", wrong: { A: "who — ใช้กับคน", B: "whom — ใช้กับคนในรูปกรรม", D: "whose — ต้องตามด้วยคำนาม" }, tip: "Antecedentเป็นบริษัท/องค์กร → which ได้" } },
    { no: 2, stem: "Candidates ------- applications are complete will be contacted first.", options: ["which", "who", "whom", "whose"], answer: "D", tags: ["relative-clause"], difficulty: "easy", translationTh: "ผู้สมัครที่ใบสมัครครบถ้วนจะได้รับการติดต่อก่อน", explain: { why: "ว่าง + คำนาม (applications) → แสดงความเป็นเจ้าของ → whose", wrong: { A: "which — สำหรับสิ่ง และไม่ใช่ possessive", B: "who — ประธานของ applications ไม่ได้", C: "whom — กรรมสำหรับคน ไม่ใช่เจ้าของ" }, tip: "ช่องว่าง + noun → whose" } },
    { no: 3, stem: "The manager, ------- joined the firm in 2010, will retire in June.", options: ["who", "that", "which", "what"], answer: "A", tags: ["relative-clause"], difficulty: "easy", translationTh: "ผู้จัดการซึ่งเข้าร่วมบริษัทในปี 2010 จะเกษียณในเดือนมิถุนายน", explain: { why: "non-defining (มี comma คั่น) + คน → who (ห้าม that, ห้าม which กับคน)", wrong: { B: "that — ใช้ใน non-defining ไม่ได้", C: "which — ใช้กับสิ่ง", D: "what — ไม่มีAntecedent/ความหมายไม่เข้า" }, tip: "comma + คน → who" } },
    { no: 4, stem: "The reason ------- the shipment was delayed was never explained.", options: ["which", "why", "where", "who"], answer: "B", tags: ["relative-clause"], difficulty: "medium", translationTh: "เหตุผลที่การจัดส่งล่าช้าไม่เคยถูกอธิบาย", explain: { why: "Antecedentคือ The reason → why (for which)", wrong: { A: "which — which ใช้ได้เฉพาะ for which เต็มรูปแบบ; เมื่อให้ why พร้อมใช้ ต้องเลือก why ที่เป็นมาตรฐาน", C: "where — สถานที่", D: "who — คน" }, tip: "the reason why = for which" } },
    { no: 5, stem: "The conference room ------- the training will be held seats fifty people.", options: ["which", "where", "that", "when"], answer: "B", tags: ["relative-clause"], difficulty: "medium", translationTh: "ห้องประชุมที่การฝึกอบรมจะจัดขึ้นมีที่นั่ง 50 ที่", explain: { why: "Antecedentคือ ห้องประชุม (สถานที่) → where", wrong: { A: "which — ต้องเป็น in which เต็มรูปแบบ (the room in which…); เมื่อให้ where ต้องเลือก where", C: "that — สามารถแทน where ได้ในทางทฤษฎี (the room that the training will be held in) แต่แบบที่ให้มา “held” ขาด in → ผิดไวยากรณ์", D: "when — เวลา" }, tip: "สถานที่ → where" } },
    { no: 6, stem: "The software, ------- was released last month, has already been updated twice.", options: ["who", "that", "which", "what"], answer: "C", tags: ["relative-clause"], difficulty: "medium", translationTh: "ซอฟต์แวร์ซึ่งเปิดตัวเมื่อเดือนที่แล้วได้รับการอัปเดตสองครั้งแล้ว", explain: { why: "non-defining (มี comma) + สิ่ง → which (ห้าม that)", wrong: { A: "who — คน", B: "that — ห้ามใน non-defining", D: "what — ไม่มีAntecedent" }, tip: "comma + สิ่ง → which" } },
    { no: 7, stem: "This is the proposal ------- the board has been waiting for.", options: ["which", "what", "whose", "when"], answer: "A", tags: ["relative-clause"], difficulty: "medium", translationTh: "นี่คือข้อเสนอที่คณะกรรมการรออยู่", explain: { why: "proposal + …waiting for (บุพบทท้าย) → สิ่ง → which (or that)", wrong: { B: "what — ไม่มีAntecedent", C: "whose — ต้องตามด้วยคำนาม", D: "when — เวลา" }, tip: "Antecedentสิ่ง + บุพบทท้าย → which/that" } },
    { no: 8, stem: " ------- the client wrote in the e-mail surprised the account manager.", options: ["That", "Which", "It", "What"], answer: "D", tags: ["relative-clause"], difficulty: "hard", translationTh: "สิ่งที่ลูกค้าเขียนในอีเมลทำให้ผู้จัดการบัญชีประหลาดใจ", explain: { why: "what = the thing which — ไม่มีAntecedent, เป็นประธานของประโยค: What the client wrote… = ข้อความที่ลูกค้าเขียน", wrong: { A: "That — that ขึ้นต้นประโยคเป็น conjunction ได้แต่ “That the client wrote surprised…” แปลว่า 'ที่ลูกค้าเขียน' ซึ่งไวยากรณ์ถูกแต่ความหมายไม่เข้า (ประธานไม่ชัด)", B: "Which — ต้องมีAntecedent", C: "It — ไม่เริ่มประโยคอนุประโยคแบบนี้" }, tip: "What + S + V = สิ่งที่ S + V (ไม่ต้องมีAntecedent)" } },
    { no: 9, stem: "The auditor to ------- the firm outsourced the review is certified.", options: ["who", "whom", "whose", "which"], answer: "B", tags: ["relative-clause"], difficulty: "hard", translationTh: "ผู้ตรวจสอบบัญชีที่บริษัทมอบหมายงานตรวจทานได้รับการรับรอง", explain: { why: "โครงสร้าง preposition + whom: to whom (คน ในรูปกรรมหลังบุพบท)", wrong: { A: "who — หลังบุพบทต้อง whom ตามหลักทางการ", C: "whose — ต้องตามด้วยคำนาม", D: "which — ใช้กับสิ่ง ไม่ใช่คน" }, tip: "prep + whom (คน)" } },
    { no: 10, stem: "Anyone ------- has questions may call the help desk.", options: ["who", "whom", "whose", "what"], answer: "A", tags: ["relative-clause"], difficulty: "easy", translationTh: "ใครก็ตามที่มีคำถามสามารถโทรหา help desk", explain: { why: "Anyone (คน) + ขาดประธานของ has → who", wrong: { B: "whom — กรรม ไม่ใช่ประธานของ has", C: "whose — ต้องตามด้วยคำนาม", D: "what — ไม่มีAntecedent/ความหมายไม่เข้า" }, tip: "anyone/someone/everyone + who" } }
  ]
};
