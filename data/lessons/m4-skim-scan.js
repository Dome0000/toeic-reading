// data/lessons/m4-skim-scan.js — Module 4 · บทที่ 4
window.TOEIC.lessons["m4-skim-scan"] = {
  id: "m4-skim-scan",
  module: 4,
  order: 4,
  title: "Skimming & Scanning + บริหารเวลาใน Part 7",
  frequency: "สูง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> ข้อสอบ Part 7 มี 54 ข้อ — คนส่วนใหญ่ตายเพราะ <em>หมดเวลา</em> ไม่ใช่ว่าอ่านไม่ออก — ทักษะนี้พาคุณเก็บคะแนนได้ครบ 54 ทั้งที่เวลาจำกัด</p>" },

    { type: "table", title: "Skimming vs Scanning", headers: ["ทักษะ", "ความหมาย", "ใช้เมื่อ", "ตัวอย่าง"], rows: [
      ["Skimming (อ่านเอาใจความ)", "อ่านเร็ว จับใจความรวม ไม่สนรายละเอียด", "หา main idea/purpose · ประเมินว่าบทความเกี่ยวกับอะไรก่อนลงลึก", "อ่านพาดหัว + ย่อหน้าแรก + ประโยคสุดท้าย"],
      ["Scanning (อ่านหาจุด)", "กวาดสายตาหา keyword/ตัวเลข/ชื่อเฉพาะเจาะจง", "หาคำตอบ detail/vocabulary/NOT จาก keyword ของคำถาม", "สแกนหา ‘March 15’ หรือ ‘$2,500’ ในบทความ"]
    ]},

    { type: "table", title: "4-step Routine ต่อเอกสาร (ทำซ้ำทุกชุด)", headers: ["ขั้น", "ทำอะไร", "เวลากำหนด"], rows: [
      ["1. ดูชนิดเอกสาร", "e-mail/letter/article/invoice/… — รู้โครงสร้าง", "2 วินาที"],
      ["2. อ่านคำถามก่อน", "ขีด keyword (ตัวเลข ชื่อ วันที่) ของทุกคำถามในชุด", "5–10 วินาที"],
      ["3. สแกนหา keyword", "หาตำแหน่ง keyword ในบทความ — ไม่ต้องอ่านทุกคำ", "10–20 วินาที/คำถาม"],
      ["4. ตอบ paraphrase", "เลือกตัวเลือกที่ paraphrase หลักฐานในบทความ", "10 วินาที/คำถาม"]
    ]},

    { type: "table", title: "แผนเวลา Part 7 (55 นาที)", headers: ["ช่วง", "เวลา", "เป้าหมาย"], rows: [
      ["Single passages (ข้อ 147–175, 29 ข้อ)", "~20 นาที", "ชุดละ ~2 นาที (10 ชุด)"],
      ["Double passages (ข้อ 176–185, 10 ข้อ)", "~12 นาที", "ชุดละ ~6 นาที (2 ชุด)"],
      ["Triple passages (ข้อ 186–200, 15 ข้อ)", "~23 นาที", "ชุดละ ~7.5 นาที (3 ชุด)"]
    ]},

    { type: "text", html: "<h3>จัดการเมื่อติดข้อ</h3><ul><li>ถ้าอ่านไม่รู้เรื่อง → <strong>ข้ามไปทำข้ออื่นก่อน</strong> แล้วกลับมา — อย่าจมอยู่กับข้อเดียวเกิน 60 วินาที</li><li>ถ้าเหลือเวลาไม่พอ → <strong>เดา paraphrase ที่เป็นกลาง</strong> (ไม่ extreme)</li><li>ถ้าเจอ NOT/EXCEPT ที่อ่านทั้งบทแล้วยังไม่มั่นใจ → <strong>ตัดตัวเลือกที่ ‘มีในบทความ’ ออกทีละตัว</strong>; ตัวที่ไม่มีข้อมูลเหลือคือคำตอบ</li></ul>" },

    { type: "examples", title: "ฝึกวางแผนเวลา (Practice Drill)", items: [
      { en: "Single passage of 120 words → read in 25 seconds, answer 2 questions in 45 seconds.", th: "บทความเดี่ยว 120 คำ → อ่าน 25 วินาที ตอบ 2 ข้อใน 45 วินาที" },
      { en: "Double passage of 100 + 80 words → read in 40 seconds, answer 5 questions in 5 minutes.", th: "บทความคู่ 180 คำรวม → อ่าน 40 วินาที ตอบ 5 ข้อใน 5 นาที" },
      { en: "Triple passage of 3 articles × 90 words → skim in 60 seconds, answer 5 questions in 7 minutes.", th: "บทความสามชิ้น × 90 คำ → สแกน 60 วินาที ตอบ 5 ข้อใน 7 นาที" },
      { en: "Spend extra 30 seconds on NOT/EXCEPT questions — they require full-passage reading.", th: "เผื่อเวลา 30 วินาทีสำหรับคำถาม NOT/EXCEPT — ต้องอ่านทั้งบท" },
      { en: "Bookmark cross-reference data (dates/prices) while skimming so you can scan back fast.", th: "จดจำจุด cross-reference (วันที่/ราคา) ไว้ตอนสแกน เพื่อย้อนดูได้เร็ว" },
      { en: "If you finish early, re-check flagged questions, not everything.", th: "ถ้าเสร็จก่อนเวลา ให้กลับไปดูเฉพาะข้อที่ติดธง" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>เห็นคำถาม <strong>detail/vocab</strong> → สแกนหา keyword ไม่ต้องอ่านทั้งบท</li><li>เห็นคำถาม <strong>main idea/purpose</strong> → อ่าน title + ย่อหน้าแรก</li><li>เห็นคำถาม <strong>NOT/EXCEPT</strong> → อ่านทั้งบท แต่ใช้เทคนิคตัดตัวเลือกที่ปรากฏ</li><li>ไม่แน่ใจ <strong>ทั้งหมด</strong> → ติดธงไว้ ข้ามไปทำข้ออื่น</li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>อ่านทุกคำทุกประโยค</strong> — ช้ากว่า 2 เท่าของที่จำเป็น</li><li><strong>จมอยู่กับข้อเดียว</strong> — เสียเวลาข้ออื่น</li><li><strong>ไม่วางแผนเวลาต่อชุด</strong> — หมดเวลาก่อนถึง Part 7 ท้ายๆ</li><li><strong>กลับไปทบทวนทั้งหมด</strong> — เสียโอกาสทำข้อที่ยังไม่ได้ทำ</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>อ่านเป็นคำต่อคำ พยายามแปลไทยทั้งข้อความ</li><li>ไม่จับเวลาฝึกซ้อม — ทำเสร็จโดยไม่รู้ว่าใช้เวลาเท่าไหร่</li><li>โดดข้ามไปตอบข้อที่มั่นใจก่อน โดยไม่ดูนาฬิกา</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "ตั้งเป้า Part 7 แบบใช้ตัวจับเวลา: Single 20 นาที · Double 12 นาที · Triple 23 นาที — ฝึกทุกครั้งด้วยการจับเวลา; ถ้าเกินเวลา Part 6 → รีบเร่ง Part 7 น้อยกว่า 60 วินาที/ข้อ</li>" },

    { type: "cheatsheet", html: "<ul><li>Part 7 = 54 ข้อ · 55 นาที · Single 20 / Double 12 / Triple 23</li><li>Skimming = ใจความรวม (main idea/purpose) · Scanning = keyword (detail/vocab)</li><li>ขั้นตอน: ชนิดเอกสาร → keyword คำถาม → สแกน keyword → paraphrase</li><li>ข้ามข้อติด → flag → กลับมาทีหลัง</li><li>NOT/EXCEPT → ตัดตัวเลือกที่ ‘มีในบทความ’</li></ul>" }
  ],
  quiz: [
    {
      setId: "m4-ss-q1",
      header: "Questions 1-6 refer to the following advertisement and e-mail.",
      passages: [
        { label: "Advertisement", html: "<h4 class=\"doc-title\">Springfield Community Center — Summer Classes</h4><p>Summer registration is open! Explore classes in swimming, pottery, and digital photography. All classes run June 15 through August 8.</p><p><strong>Early-bird special:</strong> Register by May 31 and save 20 percent. Members pay $40 per class; non-members pay $65 per class.</p><p>To register, visit springfieldcc.example.com or call 555-0199.</p>" },
        { label: "E-mail", html: "<p><strong>To:</strong> Ms. Rivera &nbsp;|&nbsp; <strong>From:</strong> Springfield Community Center &nbsp;|&nbsp; <strong>Date:</strong> May 28 &nbsp;|&nbsp; <strong>Subject:</strong> Your Registration</p><p>Dear Ms. Rivera,</p><p>Thank you for your interest in our summer classes. Your registration for digital photography (Wednesdays, 6:00–8:00 P.M.) has been confirmed. Because you registered on May 28, you qualify for the early-bird discount. Your total is $32.</p><p>Class materials will be e-mailed two days before the first session. Please bring your camera or phone with a camera.</p><p>See you on June 18!</p><p>Springfield Community Center</p>" }
      ],
      summaryTh: "โฆษณาศูนย์ชุมชน Springfield เปิดเรียนซัมเมอร์ 15 มิ.ย.–8 ส.ค.; early-bird ลด 20% ถ้าลงทะเบียนก่อน 31 พ.ค. (สมาชิก 32, ไม่ใช่สมาชิก 52); อีเมลยืนยันว่า Ms. Rivera ลง photography วันพุธ 6–8 โมง ชำระ 32 ดอลลาร์ — จึงเป็นสมาชิกที่ได้ early-bird",
      keyVocab: [{ word: "early-bird special", th: "ส่วนลดสำหรับผู้สมัครก่อนเวลา" }, { word: "registration", th: "การลงทะเบียน" }],
      questions: [
        { no: 1, stem: "Why did Ms. Rivera pay only $32 for her class?", options: ["She is a member who registered before May 31", "The class was free for early registrants", "She received a referral discount", "She is related to the instructor"], answer: "A", tags: ["cross-reference", "detail"], difficulty: "medium", translationTh: "ทำไม Ms. Rivera จ่ายเพียง 32 ดอลลาร์", evidence: [{ passage: 1, quote: "Because you registered on May 28, you qualify for the early-bird discount" }, { passage: 0, quote: "Register by May 31 and save 20 percent" }], explain: { why: "ลงทะเบียน 28 พ.ค. (ก่อน 31 พ.ค.) → ได้ early-bird ลด 20%; สมาชิกปกติจ่าย 40 ดอลลาร์ → early-bird เหลือ 32 ดอลลาร์ — ตรงกับราคาที่อีเมลระบุ", wrong: { B: "ห้องคลาสไม่ฟรี", C: "ไม่มีส่วนลดแนะนำเพื่อนในโฆษณา", D: "ไม่มีข้อมูลความสัมพันธ์กับผู้สอน" }, tip: "cross-reference + คณิต: 40 × 0.8 = 32" } },
        { no: 2, stem: "When will Ms. Rivera's class first meet?", options: ["June 8", "June 15", "June 18", "August 8"], answer: "C", tags: ["cross-reference", "detail"], difficulty: "medium", translationTh: "คลาสของ Ms. Rivera จะพบกันครั้งแรกเมื่อไหร่", evidence: [{ passage: 1, quote: "See you on June 18!" }, { passage: 0, quote: "All classes run June 15 through August 8" }], explain: { why: "อีเมลปิดด้วย ‘See you on June 18!’ — คลาสพบกัน 18 มิ.ย. (อยู่ในกรอบ 15 มิ.ย.–8 ส.ค.)", wrong: { A: "8 มิ.ย. เป็นต้นกลาง — ไม่มีในอีเมล", B: "15 มิ.ย. คือวันเริ่มทั่วไป แต่ของ Ms. Rivera คือ 18 มิ.ย.", D: "8 ส.ค. เป็นวันสิ้นสุด" }, tip: "cross-reference: วันที่เฉพาะอยู่ในอีเมล" } },
        { no: 3, stem: "What is required for the early-bird discount?", options: ["Being a member", "Registering by a deadline", "Attending every class", "Referring a friend"], answer: "B", tags: ["detail"], difficulty: "easy", translationTh: "เงื่อนไขสำหรับส่วนลด early-bird คืออะไร", evidence: [{ passage: 0, quote: "Register by May 31 and save 15 percent" }], explain: { why: "โฆษณาบอกชัด: ลงทะเบียนก่อน 31 พ.ค. ลด 15%", wrong: { A: "เป็นสมาชิกไม่เกี่ยว — ทั้งสมาชิกและไม่ใช่สมาชิกได้ส่วนลดถ้าลงทัน", C: "ไม่มีเงื่อนไขเข้าทุกคลาส", D: "ไม่มีเงื่อนไขแนะนำเพื่อน" }, tip: "early-bird = สมัครเร็ว" } },
        { no: 4, stem: "What should Ms. Rivera bring to the first session?", options: ["A notebook only", "Nothing", "A laptop", "A camera or phone with a camera"], answer: "D", tags: ["detail"], difficulty: "easy", translationTh: "Ms. Rivera ควรนำอะไรมาวันแรก", evidence: [{ passage: 1, quote: "Please bring your camera or phone with a camera" }], explain: { why: "อีเมลบอกชัดให้นำกล้องหรือโทรศัพท์ที่มีกล้องมา", wrong: { A: "ไม่ได้จำกัดแค่สมุด", B: "ต้องนำกล้อง/โทรศัพท์", C: "ไม่ได้พูดเรื่องแล็ปท็อป" }, tip: "detail → scan หา bring" } },
        { no: 5, stem: "What can be inferred about Ms. Rivera?", options: ["She is a member", "She is not a member", "She owns the community center", "She has never attended a class before"], answer: "A", tags: ["inference", "cross-reference"], difficulty: "hard", translationTh: "อนุมานได้ว่า Ms. Rivera เป็นอย่างไร", evidence: [{ passage: 1, quote: "Your total is $32" }, { passage: 0, quote: "Members pay $40 per class; non-members pay $65 per class" }], explain: { why: "สมาชิก 40 ดอลลาร์ × 0.8 (early-bird ลด 20%) = 32 ดอลลาร์ — ตรงกับราคาที่เธอจ่าย; ถ้าไม่ใช่สมาชิกจะจ่าย 52 ดอลลาร์ (65 × 0.8) — ดังนั้นเธอน่าจะเป็นสมาชิก", wrong: { B: "ไม่ใช่สมาชิกต้องจ่าย 52 ไม่ใช่ 32", C: "ไม่มีข้อมูล", D: "ไม่มีข้อมูล" }, tip: "คณิต cross-reference: 40×0.8=32 ตรงกับ member" } },
        { no: 6, stem: "Which statement is NOT true?", options: ["All classes run from June 15 to August 8", "Non-members pay $65 per class", "Free parking is available for all attendees", "Materials will be e-mailed before the first session"], answer: "C", tags: ["not-true"], difficulty: "hard", translationTh: "ข้อใด ไม่จริง", evidence: [{ passage: 0, quote: "All classes run June 15 through August 8" }, { passage: 0, quote: "Members pay $40 per class; non-members pay $65 per class" }, { passage: 1, quote: "Class materials will be e-mailed two days before the first session" }], explain: { why: "ไม่มีที่ไหนในสองเอกสารพูดถึง Free parking — ข้อความนี้ไม่มีในบทความ → ไม่จริง", wrong: { A: "โฆษณาบอกว่า All classes run June 15–August 8 — จริง", B: "โฆษณาบอก non-members pay $65 — จริง", D: "อีเมลบอก materials จะ e-mail ก่อนคลาสแรก — จริง" }, tip: "NOT → หา ‘ไม่มีในบทความ’" } }
      ]
    }
  ]
};
