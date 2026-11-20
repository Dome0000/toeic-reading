// data/lessons/p5-modals-causatives.js — Module 1 · บทที่ 14
window.TOEIC.lessons["p5-modals-causatives"] = {
  id: "p5-modals-causatives",
  module: 1,
  order: 14,
  title: "Modals & Causatives — กริยาช่วยและกริยาสั่งให้ทำ",
  frequency: "กลาง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> ข้อสอบถาม 2 เรื่องหลัก คือ (1) modal + perfect (<em>should have done</em> — อดีตที่ควร/จริงๆ ทำไปแล้วหรือยัง) (2) causative <em>have/get/make/let</em> — ใครทำอะไรให้ใคร และรูปกริยาหลัง object</p>" },

    { type: "table", title: "Modals หลักที่ใช้ในที่ทำงาน", headers: ["modal", "ความหมาย", "ตัวอย่าง"], rows: [
      ["can / could", "สามารถ / สุภาพ", "Can I leave early? / Could you review this?"],
      ["may / might", "อาจจะ / อนุญาต (ทางการ)", "The merger may close next month."],
      ["must / have to", "ต้อง (must = ความจำเป็นจากกฎ/ใจเอง, have to = ภายนอก)", "You must wear an ID badge. / We have to file taxes annually."],
      ["mustn't vs don't have to", "mustn't = ห้าม · don't have to = ไม่จำเป็นต้อง", "You mustn't share the password. / You don't have to attend."],
      ["should / ought to", "ควร", "You should back up the files."],
      ["would / shall", "จะ / เสนอ (ทางการ)", "Would you like some tea? / Shall we begin?"]
    ]},

    { type: "table", title: "Modal + Perfect (เกี่ยวกับอดีต)", headers: ["โครงสร้าง", "ความหมาย", "ตัวอย่าง"], rows: [
      ["should have + V3", "ควรจะทำ (แต่ไม่ได้ทำ)", "You should have submitted the form."],
      ["could have + V3", "สามารถทำ (แต่ไม่ได้ทำ) / น่าจะ", "The package could have arrived yesterday."],
      ["must have + V3", "แน่ใจว่าทำไปแล้ว (อนุมานจากหลักฐาน)", "She must have forgotten — she never came."],
      ["might/may have + V3", "อาจจะทำไปแล้ว (ไม่แน่ใจ)", "The data may have been corrupted."]
    ]},

    { type: "table", title: "Causatives — ใครทำให้เกิด", headers: ["โครงสร้าง", "ความหมาย", "ตัวอย่าง"], rows: [
      ["have + O (คน) + V1", "สั่ง/มอบหมายให้คนทำ", "I had the technician fix the server."],
      ["have + O (สิ่ง) + V3", "ให้สิ่งถูกทำ (จ้าง/ให้ทำ)", "I had the server fixed. / She had the report printed."],
      ["get + O (คน) + to V", "โน้มน้าว/ให้คนทำ (ไม่เป็นทางการ)", "We got the vendor to deliver early."],
      ["get + O (สิ่ง) + V3", "ให้สิ่งถูกทำ", "We got the invoice approved."],
      ["make + O + V1", "บังคับให้ทำ", "The policy makes all staff attend training."],
      ["let + O + V1", "อนุญาตให้ทำ", "The manager let the team leave early."]
    ]},

    { type: "examples", title: "ตัวอย่างในบริบทธุรกิจ", items: [
      { en: "All visitors must sign in at the reception desk.", th: "ผู้มาติดต่อทุกคนต้องเซ็นชื่อที่แผนกต้อนรับ (must = กฎ)" },
      { en: "You don't have to attend the optional workshop.", th: "คุณไม่จำเป็นต้องเข้าร่วมอบรมวันเสาร์ (don't have to = ไม่จำเป็น)" },
      { en: "The team should have backed up the files before the transfer.", th: "ทีมควรจะสำรองไฟล์ก่อนการย้าย (should have + V3 — อดีตที่ควรทำแต่ไม่ได้ทำ)" },
      { en: "We had the caterer confirm the menu this morning.", th: "เราให้ผู้จัดเลี้ยงยืนยันเมนูเช้านี้ (have + person + V1)" },
      { en: "The invoice had been lost, so she had a copy printed.", th: "ใบแจ้งหนี้หาย เธอจึงให้พิมพ์สำเนา (have + thing + V3)" },
      { en: "The security policy makes all staff badge in and out.", th: "นโยบายความปลอดภัยบังคับให้พนักงานทุกคนแตะบัตรเข้า-ออก (make + O + V1)" },
      { en: "If the client doesn't respond, we might need to follow up.", th: "ถ้าลูกค้าไม่ตอบ เราอาจต้องติดตาม (might = อาจจะ)" },
      { en: "The manager let the intern observe the negotiation.", th: "ผู้จัดการอนุญาตให้นักศึกษาฝึกงานสังเกตการเจรจา (let + O + V1)" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>เห็น <strong>have/get/make/let + กรรม</strong> → ดูว่ากรรมเป็น <strong>คน</strong> (have + V1 / get + to V / make/let + V1) หรือ <strong>สิ่ง</strong> (have/get + V3)</li><li>เห็น <strong>should/could/must/might + have</strong> → ตอบ <strong>V3</strong> (อดีตที่ควร/น่าจะ)</li><li>เห็น <strong>mustn't</strong> → แปลว่า ‘ห้าม’ · <strong>don't have to</strong> → ‘ไม่จำเป็นต้อง’</li><li>เห็น <strong>can/could/may/would</strong> ในบริบทสุภาพ → ตอบได้ทั้งสอง ดูระดับความสุภาพ</li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>have + person + V1</strong> ไม่ใช่ to V: ‘*I had the technician to fix it*’ ผิด</li><li><strong>make ไม่ใช้ใน passive กับ base</strong>: ‘He was made <u>to leave</u>’ (passive ต้องมี to)</li><li><strong>get + person + to V</strong> vs <strong>have + person + V1</strong>: have ใช้เป็นทางการกว่า</li><li><strong>should have V3</strong> ไม่ใช่ should V3</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>สับสน mustn't (ห้าม) กับ don't have to (ไม่จำเป็นต้อง)</li><li>ใช้ have + V-ing — have ไม่คู่กับ gerund</li><li>ลืมว่า make ใน passive ต้องมี to (he was made to go)</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "1) หา causative verb (have/get/make/let) 2) ดูกรรมว่าเป็นคนหรือสิ่ง 3) ตอบรูปกริยาให้ตรง — 4) สำหรับ modal+perfect ตอบ V3 เสมอ" },

    { type: "cheatsheet", html: "<ul><li>have + person + V1 · have + thing + V3 · get + person + to V · get + thing + V3</li><li>make + O + V1 (passive: be made to V) · let + O + V1</li><li>mustn't = ห้าม · don't have to = ไม่จำเป็นต้อง · must have = แน่ใจว่าเคย …</li><li>should have V3 = ควรทำ (แต่ไม่ทำ) · could have V3 = สามารถ (แต่ไม่ทำ) · might have V3 = อาจจะ</li></ul>" }
  ],
  quiz: [
    { no: 1, stem: "I had the accountant ------- the figures before the meeting.", options: ["check", "to check", "checking", "checked"], answer: "A", tags: ["modal-causative"], difficulty: "easy", translationTh: "ฉันให้(สั่ง)นักบัญชีทวนตัวเลขก่อนประชุม", explain: { why: "have + person (the accountant) + V1 → check", wrong: { B: "to check — have + person + to V ผิด (ใช้ get + to V)", C: "checking — have ไม่คู่ V-ing", D: "checked — have + person + V3 แปลว่า ‘ให้นักบัญชีถูกตรวจ’ ผิดความหมาย" }, tip: "have + person + V1" } },
    { no: 2, stem: "The broken printer was sent out; we will have it ------- by Friday.", options: ["repair", "repairing", "repaired", "to repair"], answer: "C", tags: ["modal-causative"], difficulty: "easy", translationTh: "เครื่องพิมพ์เสียถูกส่งซ่อม เราจะให้ซ่อมเสร็จภายในศุกร์", explain: { why: "have + thing (it = the printer) + V3 → repaired", wrong: { A: "repair — have + thing + V1 ผิด", B: "repairing — ไม่ใช่รูปนี้", D: "to repair — ไม่ใช่รูปนี้" }, tip: "have + thing + V3" } },
    { no: 3, stem: "You ------- share your password with anyone, including IT support.", options: ["must", "mustn't", "don't have to", "can"], answer: "B", tags: ["modal-causative"], difficulty: "easy", translationTh: "คุณห้ามแชร์รหัสผ่านของคุณกับใครก็ตาม รวมถึงฝ่าย IT", explain: { why: "mustn't = ห้าม — บริบทความปลอดภัย", wrong: { A: "must — บังคับให้ทำ ตรงข้ามความหมาย", C: "don't have to — ไม่จำเป็นต้อง (ไม่ใช่ห้าม)", D: "can — อนุญาต ตรงข้าม" }, tip: "mustn't = ห้าม" } },
    { no: 4, stem: "You ------- attend the optional webinar, but it is highly recommended.", options: ["shouldn't", "must", "mustn't", "don't have to"], answer: "D", tags: ["modal-causative"], difficulty: "medium", translationTh: "คุณไม่จำเป็นต้องเข้าร่วมเว็บบินาร์เสริม แต่แนะนำอย่างยิ่ง", explain: { why: "don't have to = ไม่จำเป็นต้อง — บริบท optional", wrong: { A: "shouldn't — ไม่ควร (แนะนำไม่ให้ทำ) ตรงข้าม", B: "must — ต้อง", C: "mustn't — ห้าม" }, tip: "optional → don't have to" } },
    { no: 5, stem: "The team ------- the files before the migration to avoid data loss.", options: ["should back up", "should have backed up", "should be back up", "should be backing up"], answer: "B", tags: ["modal-causative"], difficulty: "hard", translationTh: "ทีมควรสำรองไฟล์ไว้ก่อนการย้ายเพื่อเลี่ยงการสูญหายของข้อมูล", explain: { why: "should have + V3 = ควรทำ (แต่ไม่ได้ทำ) — บริบทผลลัพธ์ที่เสียดาย/เตือน", wrong: { A: "should back up — คำแนะนำทั่วไป แต่ไม่ระบุว่าเสียดายที่ไม่ได้ทำ", C: "should be back up — ผิดไวยากรณ์", D: "should be backing up — อ่อนเกินไป" }, tip: "should have V3 = ควรทำแต่ไม่ทำ" } },
    { no: 6, stem: "We got the vendor ------- the delivery until after the holiday.", options: ["postpone", "postponing", "to postpone", "postponed"], answer: "C", tags: ["modal-causative"], difficulty: "medium", translationTh: "เราโน้มน้าวให้ผู้ผลิตเลื่อนการจัดส่งไปหลังวันหยุด", explain: { why: "get + person (the vendor) + to V → to postpone", wrong: { A: "postpone — ใช้กับ have + person + V1, ไม่ใช่ get", B: "postponing — ไม่ใช่รูปนี้", D: "postponed — ใช้กับ get + thing + V3" }, tip: "get + person + to V" } },
    { no: 7, stem: "The new security rule makes every employee ------- two-factor authentication.", options: ["enable", "enables", "to enable", "enabling"], answer: "A", tags: ["modal-causative"], difficulty: "medium", translationTh: "กฎความปลอดภัยใหม่บังคับให้พนักงานทุกคนเปิดใช้ two-factor authentication", explain: { why: "make + O + V1 → enable", wrong: { B: "enables — -s ไม่ใช้หลัง make + O", C: "to enable — make ไม่ตามด้วย to V", D: "enabling — ไม่ใช่รูปนี้" }, tip: "make + O + V1" } },
    { no: 8, stem: "The report ------- reviewed by legal before it is published.", options: ["must have", "must being", "must", "must be"], answer: "D", tags: ["modal-causative"], difficulty: "medium", translationTh: "รายงานต้องได้รับการตรวจสอบโดยกฎหมายก่อนเผยแพร่", explain: { why: "modal passive: must be + V3 → must be reviewed", wrong: { A: "must have — must have reviewed (active) หรือ must have been reviewed (passive perfect) ไม่เข้ากับบริบท present passive", B: "must being — ไม่ใช่รูปนี้", C: "must — ขาด be (must reviewed ผิด)" }, tip: "must be + V3" } },
    { no: 9, stem: "She must ------- the invitation — it was sent to her old address.", options: ["missed", "have missed", "miss", "missing"], answer: "B", tags: ["modal-causative"], difficulty: "hard", translationTh: "เธอคงไม่เห็นจดหมายเชิญ — มันถูกส่งไปที่อยู่เก่าของเธอ", explain: { why: "must have + V3 = แน่ใจว่าเกิดขึ้นแล้ว (อนุมาน) → have missed", wrong: { A: "missed — ขาด have (must missed ผิด)", C: "miss — ไม่ใช่รูป perfect", D: "missing — ไม่ใช่รูปนี้" }, tip: "must have V3 = น่าจะเคย…" } },
    { no: 10, stem: "The manager let the interns ------- the client call.", options: ["observe", "to observe", "observed", "observing"], answer: "A", tags: ["modal-causative"], difficulty: "easy", translationTh: "ผู้จัดการอนุญาตให้นักศึกษาฝึกงานสังเกตการโทรกับลูกค้า", explain: { why: "let + O + V1 → observe", wrong: { B: "to observe — let ไม่ตามด้วย to V", C: "observed — ไม่ใช่รูปนี้", D: "observing — ไม่ใช่รูปนี้" }, tip: "let + O + V1" } }
  ]
};
