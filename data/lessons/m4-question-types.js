// data/lessons/m4-question-types.js — Module 4 · บทที่ 2
window.TOEIC.lessons["m4-question-types"] = {
  id: "m4-question-types",
  module: 4,
  order: 2,
  title: "คำถาม 8 ประเภท และวิธีหาคำตอบ",
  frequency: "สูง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> คำถาม Part 7 ทุกข้อคือหนึ่งใน 8 ประเภทนี้ — ถ้ารู้ประเภท คุณก็รู้ขั้นตอนหาคำตอบอัตโนมัติ และลดเวลาลงครึ่งหนึ่ง</p>" },

    { type: "table", title: "คำถาม 8 ประเภท — วิธีหาคำตอบ", headers: ["ประเภท", "คำถามตัวอย่าง (EN)", "วิธีหาคำตอบ", "เฉลยมักเป็น"], rows: [
      ["1. Main idea / Purpose", "What is the purpose of the e-mail? / Why was this article written?", "อ่าน title + ย่อหน้าแรก/ท้าย — จับกริยาหลัก (announce, inform, remind, request, invite)", "วัตถุประสงค์/ใจความรวม ไม่ใช่รายละเอียด"],
      ["2. Detail", "What/When/Where/Who/How much …?", "ขีด keyword ในคำถาม → สแกนหาในบทความ → อ่านประโยครอบ ๆ", " paraphrase ตรงตัว"],
      ["3. NOT / TRUE / EXCEPT", "Which is NOT mentioned? / All of the following are true EXCEPT", "ตรวจทีละตัวเลือกกับบทความ — หาตัวที่ ‘ไม่มีในบทความ’ หรือ ‘ขัดแย้ง’", "ตัวที่ไม่มีในบทความ (ต้องอ่านทั้งบท)"],
      ["4. Inference", "What can be inferred? / most likely / most likely mean", "หา paraphrase ของข้อเท็จจริงในบทความ — คำตอบต้อง ‘ตามเนื้อความ ไม่ใช่ความเห็นส่วนตัว’", " paraphrase ของข้อเท็จจริง"],
      ["5. Vocabulary in context", "The word ‘X’ in paragraph 2 is closest in meaning to", "แทนค่าตัวเลือกทั้ง 4 ในประโยค — เลือกคำที่ความหมายลื่นที่สุดในบริบท", " synonym ที่เหมาะกับบริบท"],
      ["6. Writer's intent", "What does the writer mean when he/she writes ‘…’? / At 10:42 A.M., what does Ms. Ortiz most likely mean when she writes ‘That works for me’?", "เข้าใจเจตนา/โทนของประโยค — ตอบด้วย ‘ผู้เขียนต้องการสื่อว่า…’ ไม่ใช่แปลตรงตัว", " restatement ของสิ่งที่ผู้เขียนสื่อ"],
      ["7. Sentence insertion", "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?", "หา antecedent ของ pronoun/คำเชื่อมในประโยคแทรก (ดู m3-sentence-insertion)", "ตำแหน่งหลัง antecedent/หลังเหตุ"],
      ["8. Cross-reference", "What can be inferred from both the e-mail and the invoice? / According to the schedule and the memo…", "หาจุดเชื่อม (วันที่ เวลา ตัวเลข ชื่อ) ระหว่างบทความ แล้วตอบคำถามที่ครอบคลุมทั้งสอง", "คำตอบที่ต้องใช้ข้อมูล ≥2 บทความ"]
    ]},

    { type: "table", title: "คำสัญญาณในคำถาม (Cues)", headers: ["คำถาม (EN)", "ประเภท"], rows: [
      ["What is the purpose of…?", "Main idea/Purpose"],
      ["What does the writer suggest/imply?", "Inference"],
      ["The word ‘…’ is closest in meaning to", "Vocabulary in context"],
      ["Which of the following is true/NOT true?", "NOT/TRUE"],
      ["What is mentioned about…?", "Detail"],
      ["At …, what does … most likely mean when he/she writes…?", "Writer's intent"],
      ["In which of the positions… best belong?", "Sentence insertion"],
      ["According to both the… and the…, …", "Cross-reference"]
    ]},

    { type: "examples", title: "ตัวอย่างการจับคู่คำถาม (EN) กับประเภท", items: [
      { en: "What is the main purpose of the notice?", th: "Main idea — ตอบวัตถุประสงค์รวม ไม่ใช่รายละเอียด" },
      { en: "When will the shipment arrive?", th: "Detail — หาเวลาในบทความ" },
      { en: "The word 'promptly' in paragraph 1 is closest in meaning to", th: "Vocabulary in context — แทนคำในบริบท" },
      { en: "Which of the following is NOT mentioned?", th: "NOT — หาตัวที่ไม่มีในบทความ" },
      { en: "What can be inferred about the company's financial health?", th: "Inference — paraphrase ของข้อมูลในบทความ" },
      { en: "At 10:42 A.M., what does Ms. Ortiz most likely mean when she writes 'That works for me'?", th: "Writer's intent — ‘ตกลง/สะดวก’" },
      { en: "According to both the flyer and the e-mail, what must attendees bring?", th: "Cross-reference — ต้องเช็คทั้งสองเอกสาร" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>เห็น <strong>purpose</strong> → ตอบวัตถุประสงค์รวม ไม่ใช่ detail</li><li>เห็น <strong>when/where/who/how much</strong> → สแกน keyword → detail</li><li>เห็น <strong>NOT/EXCEPT</strong> → หา ‘ไม่มีในบทความ’ — อ่านทั้งบท</li><li>เห็น <strong>most likely / infer</strong> → paraphrase ของข้อเท็จจริง — ไม่สร้างข้อมูลใหม่</li><li>เห็น <strong>closest in meaning</strong> → แทนคำในประโยค — เลือก synonym ที่ลื่นสุด</li><li>เห็น <strong>both … and …</strong> → ต้องใช้ข้อมูล ≥2 บทความ</li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>NOT/EXCEPT</strong>: ทุกตัวเลือก ‘ฟังดูถูก’ — หาตัวที่ <em>ไม่ปรากฏในบทความ</em> ไม่ใช่ตัวที่ดูแปลก</li><li><strong>Inference ลวง</strong>: ‘over-inference’ — บทความบอกแค่ราคาสูงขึ้น แต่ตัวเลือกบอกว่าลูกค้าจะเลิกซื้อ (ไม่จริง)</li><li><strong>Vocabulary ลวง</strong>: synonym ผิดรูป (effective แปลว่า ‘มีประสิทธิภาพ’ แต่ ‘closet’ ไม่ใช่ synonym ของ ‘cabinet’ ในทุกบริบท)</li><li><strong>Writer's intent ลวง</strong>: แปลคำตรงตัว — ‘That works for me’ ไม่ได้แปลว่า ‘ใช้ได้กับฉัน’ แต่ = ‘ตกลง’</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>อ่านบทความก่อนอ่านคำถาม — อ่านคำถามก่อนเสมอ</li><li>ตอบจาก ‘สิ่งที่น่ารู้’ แทน ‘สิ่งที่บทความบอก’ — ห้าม extrapolate</li><li>NOT/EXCEPT ตอบตัวแรกที่ดูแปลก — ต้องเช็คทุกตัวเลือกจริง ๆ</li><li>Writer's intent: แปลคำต่อคำ — ต้องอ่านบริบท</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "1) อ่านคำถาม ขีด keyword 2) กำหนดประเภทคำถาม 3) ใช้ขั้นตอนเฉพาะของประเภทนั้น — อย่าอ่านทั้งบทถ้าไม่จำเป็น (Detail/Vocab/Intent หาจาก keyword)" },

    { type: "cheatsheet", html: "<ul><li>Main idea → purpose รวม ไม่ใช่ detail</li><li>Detail → keyword → scan</li><li>NOT/EXCEPT → หา ‘ไม่มีในบทความ’</li><li>Inference → paraphrase ของข้อเท็จจริง (no new info)</li><li>Vocabulary → แทนคำในประโยค เลือก synonym ลื่นสุด</li><li>Writer's intent → ‘ผู้เขียนต้องการสื่อว่า’ ไม่ใช่แปลตรงตัว</li><li>Sentence insertion → antecedent ของ pronoun/therefore</li><li>Cross-reference → ต้องใช้ข้อมูล ≥2 บทความ</li></ul>" }
  ],
  quiz: [
    {
      setId: "m4-qt-q1",
      header: "Questions 1-6 refer to the following article.",
      passages: [{
        label: "Article",
        html: "<h4 class=\"doc-title\">Brightline Electronics Announces Expansion Plans</h4><p>Brightline Electronics, a Bangkok-based manufacturer of home appliances, announced on Tuesday that it will open a second factory in Chonburi Province next year. The new facility, which will employ approximately 1,200 workers, is expected to begin operations in the third quarter of 2026.</p><p>The expansion is designed to keep pace with growing demand for the company's energy-efficient refrigerators and washing machines, which have seen double-digit sales growth over the past three years. Brightline's chief executive, Ms. Siriporn Chai, said the company plans to invest $180 million in the new plant and will begin hiring engineers this fall.</p><p>In a related move, the company also announced it will relocate its regional sales office from downtown Bangkok to the Bangna area in January 2026. The relocation is intended to improve logistics and reduce commute times for field staff.</p>"
      }],
      summaryTh: "บทความข่าว: Brightline Electronics ประกาศเปิดโรงงานแห่งที่สองที่ชลบุรีปีหน้า จ้าง ~1,200 คน เปิด Q3 2026 ลงทุน 180 ล้านดอลลาร์; ย้ายสำนักงานขายภูมิภาคจากใจกลางกรุงเทพฯ ไปบางนา มกราคม 2026",
      keyVocab: [{ word: "keep pace with", th: "ตามให้ทัน" }, { word: "commute", th: "เดินทางไปทำงาน" }],
      questions: [
        { no: 1, stem: "What is the main purpose of the article?", options: ["To advertise a new refrigerator model", "To report on Brightline Electronics' expansion plans", "To announce a new CEO appointment", "To discuss environmental regulations"], answer: "B", tags: ["main-idea"], difficulty: "easy", translationTh: "วัตถุประสงค์หลักของบทความคืออะไร", evidence: [{ passage: 0, quote: "Brightline Electronics, a Bangkok-based manufacturer of home appliances, announced on Tuesday that it will open a second factory" }], explain: { why: "บทความรายงานการขยายกิจการของ Brightline — โรงงานใหม่ชลบุรี + ย้ายสำนักงาน", wrong: { A: "ไม่ได้โฆษณาตู้เย็น", C: "ไม่ได้ประกาศแต่งตั้ง CEO", D: "ไม่ได้พูดกฎสิ่งแวดล้อม" }, tip: "purpose → กริยาหลักใน lead (announced)" } },
        { no: 2, stem: "How many workers will the new factory employ?", options: ["About 2,000", "About 200", "About 1,200", "About 500"], answer: "C", tags: ["detail"], difficulty: "easy", translationTh: "โรงงานใหม่จะจ้างพนักงานกี่คน", evidence: [{ passage: 0, quote: "which will employ approximately 1,200 workers" }], explain: { why: "ข้อความระบุ approximately 1,200 workers", wrong: { A: "2,000 ไม่ใช่", B: "200 ไม่ใช่", D: "500 ไม่ใช่" }, tip: "scan ตัวเลข" } },
        { no: 3, stem: "What does the company plan to do before opening the new factory?", options: ["Relocate to Chonburi immediately", "Increase product prices", "Close the Bangkok office", "Begin hiring engineers this fall"], answer: "D", tags: ["detail"], difficulty: "medium", translationTh: "บริษัทวางแผนจะทำอะไรก่อนเปิดโรงงานใหม่", evidence: [{ passage: 0, quote: "will begin hiring engineers this fall" }], explain: { why: "ข้อความระบุว่าเริ่มจ้างวิศวกรในฤดูใบไม้ร่วงปีนี้ (ก่อนโรงงานเปิดปีหน้า)", wrong: { A: "ย้ายสำนักงานขาย ไม่ใช่บริษัททั้งหมด", B: "ไม่ได้พูดเรื่องขึ้นราคา", C: "ไม่ได้ปิดสำนักงานกรุงเทพฯ — แค่ย้าย" }, tip: "detail → scan หา fall" } },
        { no: 4, stem: "The phrase 'keep pace with' in paragraph 2 is closest in meaning to", options: ["match the rate of", "challenge", "ignore", "reduce"], answer: "A", tags: ["vocab-in-context"], difficulty: "medium", translationTh: "คำว่า 'keep pace with' ในย่อหน้าที่สองใกล้เคียงความหมายกับ", evidence: [{ passage: 0, quote: "keep pace with growing demand" }], explain: { why: "keep pace with = ตามให้ทัน/เดินเร็วเท่ากับ demand ที่โตขึ้น", wrong: { B: "challenge ความหมายอื่น", C: "ignore ตรงข้าม", D: "reduce ตรงข้าม" }, tip: "vocab → แทนคำในประโยค" } },
        { no: 5, stem: "What can be inferred about the demand for energy-efficient appliances?", options: ["It is declining rapidly", "It has been growing steadily for years", "It is only popular among businesses", "It is expected to peak next year"], answer: "B", tags: ["inference"], difficulty: "medium", translationTh: "อนุมานได้ว่าความต้องการเครื่องใช้ไฟฟ้าประหยัดพลังงานกำลังเป็นอย่างไร", evidence: [{ passage: 0, quote: "which have seen double-digit sales growth over the past three years" }], explain: { why: "double-digit sales growth over the past three years → เติบโตต่อเนื่องมาหลายปี", wrong: { A: " declining ตรงข้าม", C: "บทความพูดถึง demand โดยรวมของบริษัท", D: "ไม่ได้บอกว่าจะสูงสุดปีหน้า" }, tip: "inference → paraphrase ของข้อความตรง" } },
        { no: 6, stem: "Why is the company relocating its regional sales office?", options: ["To consolidate with another office", "To reduce rent costs", "To improve logistics and reduce commute times", "To be closer to the new factory"], answer: "C", tags: ["detail"], difficulty: "medium", translationTh: "ทำไมบริษัทจะย้ายสำนักงานขายภูมิภาค", evidence: [{ passage: 0, quote: "The relocation is intended to improve logistics and reduce commute times" }], explain: { why: "บทความบอกว่า ‘intended to improve logistics and reduce commute times’", wrong: { A: "ไม่ได้พูดการผสานกับสำนักงานอื่น", B: "ไม่ได้พูดค่าเช่า", D: "ชลบุรีกับบางนาคนละที่ — ไม่ได้ใกล้โรงงาน" }, tip: "detail → scan หา intended to" } }
      ]
    }
  ]
};
