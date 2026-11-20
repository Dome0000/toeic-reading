// data/lessons/m0-study-plan.js — Module 0 · บทที่ 2
window.TOEIC.lessons["m0-study-plan"] = {
  id: "m0-study-plan",
  module: 0,
  order: 2,
  title: "แผนการเรียน 4 สัปดาห์ (เป้า 750+)",
  frequency: "สูง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> การติว TOEIC ที่ได้ผลไม่ใช่เรียนมากที่สุด แต่คือ <em>วางโครงให้ถูก</em> — เรียนเป็นลำดับ ทดสอบบ่อย และทบทวนจุดอ่อนสม่ำเสมอ แผนนี้พาจาก ~400–600 ไป 750+ ใน 4 สัปดาห์ (วันละ 45–90 นาที)</p>" },

    { type: "table", title: "ภาพรวม 4 สัปดาห์", headers: ["สัปดาห์", "โฟกัส", "เป้าหมาย"], rows: [
      ["สัปดาห์ที่ 1", "โครงสร้างข้อสอบ + Part 5 Grammar หลัก (Word Forms, Tenses, Agreement, Passive, Prepositions)", "ทำ Part 5 ให้ได้ ≥ 80% ใน Quiz ห้องเรียน"],
      ["สัปดาห์ที่ 2", "Grammar ที่เหลือ + Vocabulary (Word Families, Collocations, Confusing Words, Phrasal Verbs)", "ทำ Part Practice (Part 5) จับเวลา 11 นาที ได้ ≥ 24/30"],
      ["สัปดาห์ที่ 3", "Part 6 ทุกบท + Part 7 (ประเภทเอกสาร, คำถาม 8 ประเภท, Paraphrase, Skim & Scan)", "ทำ Part Practice (Part 6 + Part 7) ตามเวลาที่แนะนำ"],
      ["สัปดาห์ที่ 4", "Mock Test 1 (75 นาที) → วิเคราะห์จุดอ่อน → ทบทวนบทที่เกี่ยวข้อง → Mock Test 2", "Reading ≥ 350 คะแนนประมาณ (raw ~70/100)"]
    ]},

    { type: "table", title: "ตารางทบทวนแบบเว้นระยะ (Spaced Repetition)", headers: ["จังหวะ", "ทำอะไร"], rows: [
      ["เรียนวันนี้", "อ่านบท + ทำ Quiz ท้ายบท (10 ข้อ)"],
      ["ทบทวนวันที่ 1 (พรุ่งนี้)", "อ่าน Cheat Sheet 1 รอบ (3 นาที)"],
      ["ทบทวนวันที่ 3", "ทำ Quiz ท้ายบทอีกครั้ง — เป้าคง ≥ 70%"],
      ["ทบทวนวันที่ 7", "ทำ Topic Drill ตาม tag ที่ยังอ่อน (10–20 ข้อ)"],
      ["สัปดาห์ที่ 4", "Mock Test เต็มรูปแบบ + วิเคราะห์"]
    ]},

    { type: "text", html: "<h3>วิธีทำ Mock Test ให้เหมือนจริง</h3><ul><li><strong>จับเวลาจริง 75 นาที</strong> — อย่าหยุด อย่าพัก อย่าเปิดดิกชันนารี; จำลองห้องสอบ</li><li><strong>ไม่ดูเฉลยระหว่างทำ</strong> — ทำเสร็จก่อน ส่ง แล้วค่อยดูผล</li><li><strong>บันทึกเวลาแต่ละ Part</strong> — เปรียบเทียบกับเป้า (P5 11 / P6 9 / P7 55)</li><li><strong>วิเคราะห์หลังสอบ</strong>: รายงานจุดอ่อนราย tag → เปิดบทที่เกี่ยวข้อง → ทำ Quiz ซ้ำ → กลับมาทำ Mistake Notebook</li></ul>" },

    { type: "examples", title: "ตัวอย่างการวางแผนวัน/สัปดาห์", items: [
      { en: "Weekday: 20 minutes lesson + 10 minutes quiz + 10 minutes review of yesterday's cheat sheet.", th: "วันทำงาน: บทเรียน 20 นาที + ควิซ 10 นาที + ทบทวน 10 นาที" },
      { en: "Weekend: one part practice under timed conditions, then review mistakes.", th: "วันหยุด: ทำ Part Practice จับเวลา 1 ชุด แล้วทบทวนข้อผิด" },
      { en: "Week 4: two full mocks (75 minutes each) with deep review after each.", th: "สัปดาห์ 4: Mock เต็ม 2 ชุด (ชุดละ 75 นาที) วิเคราะห์ละเอียดหลังแต่ละชุด" },
      { en: "Mistake Notebook: re-answer until two consecutive correct sessions.", th: "สมุดข้อผิด: ตอบใหม่จนถูกติดกัน 2 ครั้ง จึงนำออก" },
      { en: "Vocabulary: two topics per week with flashcards, marked as known when mastered.", th: "คำศัพท์: 2 หมวดต่อสัปดาห์ ใช้แฟลชการ์ด ทำเครื่องหมายจำได้แล้ว" },
      { en: "Sleep and consistency beat cramming — 45 minutes daily beats 5 hours once a week.", th: "สม่ำเสมอสำคัญกว่าอัดหนัก — 45 นาทีทุกวัน ดีกว่า 5 ชั่วโมงสัปดาห์ละครั้ง" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร (เมื่อไหร่จะรู้ว่าพร้อมสอบจริง)", html: "<ul><li>ทำ Quiz ท้ายบทได้ ≥ 70% ทุกบท · Part 5 ≥ 24/30 · Part 7 mock ≥ 60% → พร้อมสอบจริง</li><li>ถ้า Part 7 ยังอ่อน → ฝึก Skim & Scan + Paraphrase + อ่านหนังสือพิมพ์อังกฤษเพิ่ม</li><li>ถ้า Part 5 ยังอ่อน → ย้อนกลับไป Word Forms + Verb Tenses + Prepositions</li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ทำให้แผนล้ม", html: "<ul><li>อ่านอย่างเดียวไม่ทำควิซ/ม็อก — ไม่รู้ว่าตัวเองรู้อะไรจริง ๆ</li><li>ทำ Mock แล้วข้ามเฉลย — ข้อผิดจะวนกลับมาเสมอ</li><li>เปิดเฉลยระหว่างทำ — คะแนนในม็อกสูงเกินจริง พอสอบจริงผิดคาด</li><li>ทบทวนผิดจุด — ใช้เวลากับสิ่งที่ทำได้อยู่แล้วแทนที่จะซ่อมจุดอ่อน</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>ตั้งเป้าสูงเกินวัน (เรียน 4 บท/วัน) แล้วเลิกหลังสัปดาห์แรก</li><li>เปรียบเทียบกับเพื่อนแทนที่จะเทียบกับ Progress ของตัวเอง</li><li>สอบม็อกซ้ำด้วยข้อเดิมจนจำคำตอบ — ควรทำชุดใหม่หรือ Topic Drill สุ่ม</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้ได้ผล", html: "ใช้ Cheat Sheet ทุกเย็นก่อนนอน (3–5 นาที) — ความจำระยะยาวเกิดจากการทบทวนบ่อย ๆ ในช่วงสั้น ๆ ไม่ใช่อ่านยาวทีเดียว; พิมพ์ Cheat Sheet ของบทที่กำลังเรียนพกไว้" },

    { type: "cheatsheet", html: "<ul><li>Week 1: โครงข้อสอบ + Part 5 Grammar · Week 2: Grammar + ศัพท์ · Week 3: Part 6 + Part 7 · Week 4: Mock ×2 + วิเคราะห์</li><li>วันละ 45–90 นาที · เรียน → ควิซ → ทบทวน (1/3/7 วัน)</li><li>Mock เต็ม 75 นาที ไม่เปิดเฉลย · บันทึกเวลาแต่ละ Part</li><li>วิเคราะห์จุดอ่อนราย tag → ทบทวนบทที่เกี่ยวข้อง → ทำใหม่จนถูกติดกัน 2 ครั้ง</li><li>พร้อมสอบจริง: Quiz ≥ 70% ทุกบท · P5 ≥ 24/30 · Part 7 ≥ 60%</li></ul>" }
  ],
  quiz: [
    { no: 1, stem: "In the recommended 4-week plan, which week focuses on Part 6 and Part 7?", options: ["Week 1", "Week 2", "Week 3", "Week 4"], answer: "C", tags: ["main-idea"], difficulty: "easy", translationTh: "สัปดาห์ใดในแผน 4 สัปดาห์โฟกัส Part 6 และ Part 7", explain: { why: "สัปดาห์ที่ 3 โฟกัส Part 6 ทุกบทและ Part 7 (ประเภทเอกสาร, คำถาม 8 ประเภท, Paraphrase, Skim & Scan)", wrong: { A: "Week 1 โฟกัสโครงข้อสอบและ Part 5 Grammar", B: "Week 2 โฟกัส Grammar ที่เหลือและ Vocabulary", D: "Week 4 คือช่วง Mock ×2 และวิเคราะห์จุดอ่อน" }, tip: "Week 3 = Part 6 + Part 7" } },
    { no: 2, stem: "What does the plan recommend doing after each mock test?", options: ["Retake the same test immediately", "Analyze weak tags and review related lessons", "Skip the review and start the next mock", "Only check the raw score"], answer: "B", tags: ["detail"], difficulty: "easy", translationTh: "หลังทำ Mock แต่ละชุด แผนแนะนำให้ทำอะไร", explain: { why: "หลังม็อกต้องวิเคราะห์จุดอ่อนราย tag → ทบทวนบทที่เกี่ยวข้อง → ทำ Quiz/Mistake Notebook ซ้ำ", wrong: { A: "ทำชุดเดิมทันทีจะจำคำตอบ ไม่ได้วัดจริง", C: "ข้ามเฉลยคือข้อผิดพลาดยอดฮิต — ข้อผิดจะวนกลับมาเสมอ", D: "ดูเฉพาะดิบคะแนนไม่พอ ต้องดูราย tag" }, tip: "วิเคราะห์ทุกครั้ง ไม่ข้ามเฉลย" } },
    { no: 3, stem: "Which daily routine is recommended for weekdays?", options: ["3 hours of reading only", "Vocabulary only", "One full mock per day", "20 minutes lesson + 10 minutes quiz + 10 minutes review"], answer: "D", tags: ["detail"], difficulty: "easy", translationTh: "กิจวัตรประจำวันที่แนะนำวันธรรมดาคืออะไร", explain: { why: "ช่วง 40 นาที: บทเรียน 20 + ควิซ 10 + ทบทวน 10", wrong: { A: "อ่านอย่างเดียวไม่ตรวจสอบว่าเข้าใจจริงไหม", B: "ศัพท์อย่างเดียวไม่ครอบคลุมแกรมมาร์และ Part 6–7", C: "ม็อกทุกวันเกินกำลังและไม่จำเป็น" }, tip: "เรียน → ควิซ → ทบทวน" } },
    { no: 4, stem: "The Spaced Repetition approach suggests reviewing a lesson again on which days?", options: ["Days 1, 3, and 7", "Only on day 30", "Every hour for the first day", "Never — one reading is enough"], answer: "A", tags: ["detail"], difficulty: "medium", translationTh: "วิธีทบทวนแบบเว้นระยะแนะนำให้ทบทวนอีกครั้งวันใด", explain: { why: "ทบทวนวันที่ 1 (พรุ่งนี้ 3–5 นาที), วัน 3 (ควิซซ้ำ), วัน 7 (Topic Drill)", wrong: { B: "วัน 30 นานเกินไป", C: "ทุกชั่วโมงไม่สมจริง", D: "อ่านครั้งเดียวจำได้ช่วงสั้น ๆ เท่านั้น" }, tip: "1 / 3 / 7 วัน" } },
    { no: 5, stem: "According to the plan, when are you likely ready for the real exam?", options: ["After finishing Module 1", "When quizzes are ≥ 70%, Part 5 ≥ 24/30, Part 7 ≥ 60%", "After buying the official book", "After one week of study"], answer: "B", tags: ["inference"], difficulty: "medium", translationTh: "ตามแผน เมื่อไหร่จะพร้อมสอบจริง", explain: { why: "เกณฑ์ความพร้อม: Quiz ≥ 70% ทุกบท · Part 5 ≥ 24/30 · Part 7 ≥ 60%", wrong: { A: "เรียนจบ Module 1 ยังไม่มี Part 6–7 และศัพท์", C: "ซื้อหนังสือไม่ได้แปลว่าพร้อม", D: "หนึ่งสัปดาห์เร็วเกินไป" }, tip: "วัดตัวเองด้วยตัวเลข ไม่ใช่ความรู้สึก" } },
    { no: 6, stem: "Why should you NOT open the answer key during a mock test?", options: ["It is unnecessary because the exam has no answers", "It is against the rules of the exam venue", "It inflates your practice score and hides weaknesses", "It slows down reading speed"], answer: "C", tags: ["inference"], difficulty: "medium", translationTh: "ทำไมไม่ควรเปิดเฉลยระหว่างทำม็อก", explain: { why: "เปิดเฉลยระหว่างทำทำให้คะแนนจำลองสูงเกินจริงและบดบังจุดอ่อนที่ต้องซ่อม", wrong: { A: "ม็อกมีเฉลยให้ดูหลังส่ง จงใจเปิดระหว่างทำ", B: "ม็อกเป็นการฝึกส่วนตัว ไม่ใช่ห้องสอบจริง", D: "ความเร็วอ่านไม่เกี่ยวกับการเปิดเฉลยโดยตรง" }, tip: "ทำเสร็จ → ส่ง → แล้วค่อยดูผล" } },
    { no: 7, stem: "How many full mocks does the plan recommend in week 4?", options: ["Five", "Ten", "One", "Two"], answer: "D", tags: ["detail"], difficulty: "easy", translationTh: "สัปดาห์ที่ 4 แผนแนะนำให้ทำม็อกเต็มกี่ชุด", explain: { why: "สัปดาห์ 4: Mock Test 1 → วิเคราะห์ → ทบทวน → Mock Test 2", wrong: { A: "ห้าชุดมากเกินไปในหนึ่งสัปดาห์", B: "สิบชุดไม่สมจริง", C: "หนึ่งชุดพอแค่ซ้อม" }, tip: "Mock ×2 ในสัปดาห์สุดท้าย" } },
    { no: 8, stem: "What is the purpose of the Mistake Notebook?", options: ["To collect wrong answers and re-practice until two consecutive corrects", "To track study time", "To summarize grammar rules", "To record new vocabulary only"], answer: "A", tags: ["detail"], difficulty: "medium", translationTh: "จุดประสงค์ของ Mistake Notebook คืออะไร", explain: { why: "สมุดข้อผิดเก็บข้อที่ตอบผิดจากม็อกและควิซ ให้ตอบถูกติดกัน 2 ครั้งจึงนำออก — ปิดจุดอ่อนอย่างเป็นระบบ", wrong: { B: "เวลาใช้ตัวจับเวลา/รายงาน pacing", C: "สรุปแกรมมาร์ใช้ Cheat Sheet", D: "ศัพท์ใช้แฟลชการ์ด" }, tip: "ตอบถูกติดกัน 2 ครั้ง → ออกจากสมุด" } },
    { no: 9, stem: "Why is sleep and consistency emphasized over cramming?", options: ["Cramming is not allowed in the exam", "Short daily sessions build long-term memory better than marathon sessions", "The exam only tests memorized facts", "It reduces printing costs"], answer: "B", tags: ["inference"], difficulty: "hard", translationTh: "ทำไมแผนจึงเน้นนอนหลับและสม่ำเสมอมากกว่าอัดหนัก", explain: { why: "การทบทวนสั้น ๆ ทุกวันสร้างความจำระยะยาวได้ดีกว่าอัดครั้งเดียวยาว ๆ — สอดคล้องกับหลัก spaced repetition", wrong: { A: "ไม่มีกฎห้ามอัดหนัก แต่ไม่มีประสิทธิภาพ", C: "ข้อสอบวัดทักษะ ไม่ใช่การจำข้อเท็จจริง", D: "ค่าพิมพ์ไม่เกี่ยวข้อง" }, tip: "สม่ำเสมอชนะอัดหนักเสมอ" } },
    { no: 10, stem: "Which is NOT a recommended mock-exam practice?", options: ["Timing yourself for 75 minutes", "Reviewing mistakes in detail afterwards", "Pausing the timer for breaks", "Comparing parts to the recommended time targets"], answer: "C", tags: ["not-true"], difficulty: "hard", translationTh: "ข้อใด ไม่ใช่ วิธีฝึก Mock ที่แนะนำ", explain: { why: "ม็อกต้องจำลองสอบจริง — หยุดจับเวลาพัก = ไม่เหมือนสอบจริง การบริหารเวลาจะไม่ได้ฝึก", wrong: { A: "จับเวลา 75 นาทีคือแก่นของม็อก", B: "วิเคราะห์เฉลยคือขั้นตอนสำคัญที่สุดหลังสอบ", D: "เทียบเวลาต่อ Part กับเป้า (11/9/55) คือวิธีวัด pacing" }, tip: "จำลองห้องสอบให้เหมือนจริงที่สุด" } }
  ]
};
