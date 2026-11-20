// data/lessons/m4-multiple-passages.js — Module 4 · บทที่ 5
window.TOEIC.lessons["m4-multiple-passages"] = {
  id: "m4-multiple-passages",
  module: 4,
  order: 5,
  title: "Multiple Passages — เทคนิคเชื่อมข้อมูลข้ามบทความ",
  frequency: "กลาง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> ข้อ 176–200 ของ Part 7 (Double 10 ข้อ · Triple 15 ข้อ) บังคับให้คุณ <em>เชื่อมข้อมูลระหว่างเอกสาร 2–3 ฉบับ</em> — วันที่ เวลา ราคา ชื่อ ต้องตรงกันทั้งชุด และอย่างน้อย 1 ข้อต่อชุดคือ cross-reference (ใช้ข้อมูล ≥2 เอกสาร) — นี่คือที่ที่คนเรียนที่ละเลย lose แต้มไปทั้งๆ ที่อ่านเข้าใจ</p>" },

    { type: "table", title: "วิธีหา cross-reference ด้วย ‘table ในหัว’", headers: ["Fact", "Document A (e-mail)", "Document B (invoice)"], rows: [
      ["ราคา/ยอดเงิน", "$1,750 (quote in e-mail)", "$1,750 (INV total)"],
      ["วันที่/กำหนด", "Printing starts May 26", "Due date Jun 20"],
      ["จำนวน/ปริมาณ", "5,000 brochures", "5,000 brochures"],
      ["ชื่อ (คน/บริษัท)", "Ms. Astrid Larsen", "billed to Nordic Home Goods"],
      ["เลขอ้างอิง", "order #NH-2210", "INV-0882 (ref NH-2210)"]
    ]},

    { type: "text", html: "<h3>ขั้นตอนตอบ cross-reference</h3><ol><li><strong>อ่านคำถาม</strong> — ระบุว่าข้อไหนต้องใช้ 2 เอกสาร (ดูคำว่า ‘both’, ‘according to both’, ‘from the e-mail and the invoice’)</li><li><strong>ระบุจุดเชื่อม</strong> — วันที่/ราคา/ชื่อ/เลขอ้างอิงที่ปรากฏในเอกสารมากกว่าหนึ่ง</li><li><strong>หาตำแหน่งข้อมูลนั้นในแต่ละเอกสาร</strong> — สแกน keyword</li><li><strong>ตอบด้วย paraphrase ที่ครอบคลุมทั้งสองเอกสาร</strong> — ไม่ใช่แค่เอกสารเดียว</li></ol>" },

    { type: "examples", title: "ตัวอย่างจุดเชื่อมระหว่างเอกสาร (ฝึกสังเกต)", items: [
      { en: "E-mail: 'Your order #NH-2210 of 5,000 brochures ships May 26.' | Invoice INV-0882: '5,000 brochures, $1,750, due June 20. Ref: NH-2210.'", th: "เชื่อม: เลขออเดอร์/จำนวน/ราคา — ตัวเลขต้องตรงกันทั้งสองเอกสาร" },
      { en: "Agenda: 'Workshop 14:00 Hall B' | Text: 'Workshop moved to Hall C due to AC failure.'", th: "เชื่อม: ห้องประชุม — บทความหลังสุด (text) แทนที่ agenda เดิม" },
      { en: "Ad: 'Early bird $129 before June 30' | Form: 'Payment method: $129 (early-bird) / $189 (regular)'", th: "เชื่อม: ราคา early-bird — ต้องตรงกันทั้งโฆษณาและฟอร์ม" },
      { en: "Press release: 'Harbor & Pine opens in Harbor District; day pass $25' | Web: 'Day pass $25; parking $5 extra; monthly $249'", th: "เชื่อม: ราคา day pass + parking เพิ่ม — รวมกันเป็น $30" },
      { en: "Chat: 'Priya has the keys to 4B. Dana: the 4B projector is booked until Friday.' | Schedule: 'Q3 review, Room 4B, Thursday 10:00.'", th: "เชื่อม: ห้อง 4B ถูกจอง → ต้องย้าย — ดู text chain ใช้ได้จริงกับ schedule" },
      { en: "Article: 'Packaging costs climbed 12 percent in 2026' | E-mail: 'Hartline quoted us 8% below Meridian.'", th: "เชื่อม: ต้นทุน packaging สูงขึ้น → ผู้จัดซื้อเสนอเปลี่ยน supplier" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>เห็นคำถาม <strong>‘both … and …’</strong> → คำตอบต้องได้จาก 2 เอกสารเสมอ — อย่าตอบจากเอกสารเดียว</li><li>เห็น <strong>ตัวเลขในเอกสารทั้งสอง</strong> → cross-reference: เช็คว่าตรงกันหรือไม่</li><li>เห็น <strong>วันที่ออเดอร์ vs วันที่ due</strong> → timeline: ตรวจลำดับเหตุการณ์</li><li>เห็น <strong>text chain/chat ปรากฏหลังเอกสารอื่น</strong> → ข้อเท็จจริง ‘ปัจจุบัน’ มักอยู่ใน text/chat (เป็น real-time)</li><li>เห็น <strong>เอกสารขัดกัน</strong> → เอกสารที่ ‘ใหม่กว่า’ หรือ ‘เฉพาะเจาะจงกว่า’ มีผลบังคับ</li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>cross-reference ที่ดูเหมือน detail</strong> — ตัวเลือกอาจถูกในเอกสาร A แต่ไม่ปรากฏใน B; คำตอบต้อง ‘ตรงทั้งคู่’</li><li><strong>ตัวเลขปนกัน</strong> — $1,750 vs $1,570 · 5,000 vs 50,000 · Jun 10 vs Jun 20</li><li><strong>ชื่อคล้ายกัน แต่คนละคน</strong> — Astrid Larsen vs Renata Ortiz · Meridian vs Hartline</li><li><strong>วันที่ออเดอร์ vs due date</strong> — ‘Printing starts May 26’ ไม่ใช่ ‘Due date’</li><li><strong>รวมราคาผิด</strong> — day pass $25 + parking $5 = $30 (ถ้าคำถามถาม ‘ราคารวม’)</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>ตอบ cross-reference จากเอกสารเดียว — ตัวเลือกมัก ‘จริงในเอกสาร A’ ทำให้เลือกผิด</li><li>ไม่เช็คเวลา (timeline) — e-mail เล่าเหตุการณ์เช้าวันงาน แต่ schedule บอก 9:00 ทั้งคู่; อ่านตามนาฬิกา</li><li>รวมราคาข้ามเอกสารไม่เป็น — ต้องบวกเอง (day pass + parking) เมื่อคำถามถามราคารวม</li><li>สับสนระหว่าง ‘ref’ (order number) กับ ‘INV number’</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "ตอนสแกน 3 เอกสาร ให้ mental table ในหัว: Fact | A | B (| C) — ใช้เวลา 20 วินาที แล้วตอบ cross-reference ได้ภายใน 15 วินาที; ถ้าตัวเลขขัดกัน ให้ยึดเอกสารที่ใหม่กว่า/เจาะจงกว่า" },

    { type: "cheatsheet", html: "<ul><li>Double (176–185) · Triple (186–200) — ทุกชุดมี cross-reference ≥ 1 ข้อ</li><li>Mental table: Fact | Doc A | Doc B — ตัวเลข/ชื่อ/วันที่/ราคา/เลขอ้างอิง</li><li>เอกสารใหม่กว่า/real-time (text/chat) มีผลบังคับเมื่อขัดกับ schedule/agenda</li><li>ตอบ cross-reference = ค้น fact ที่ปรากฏใน ≥2 เอกสาร — paraphrase ทั้งคู่</li><li>ตรวจชื่อคน/บริษัทตัวอักษรต่อตัว — Astrid ≠ Renata · Meridian ≠ Hartline</li></ul>" }
  ],
  quiz: [
    {
      setId: "m4-mp-q1",
      header: "Questions 1-6 refer to the following e-mail and invoice.",
      passages: [
        { label: "E-mail", html: "<p><strong>To:</strong> Mr. Sam Herrera &nbsp;|&nbsp; <strong>From:</strong> Ms. Astrid Larsen &nbsp;|&nbsp; <strong>Date:</strong> May 18, 2026 &nbsp;|&nbsp; <strong>Subject:</strong> Brochure Order #NH-2210</p><p>Dear Mr. Herrera,</p><p>Nordic Home Goods would like a quote for 5,000 color brochures (A4, glossy, 8 pages). We plan to distribute them at the June trade fair. Could you confirm the price and the delivery date? We would like to approve the order by May 25.</p><p>Kind regards,<br>Astrid Larsen<br>Nordic Home Goods</p>" },
        { label: "Invoice", html: "<h4 class=\"doc-title\">INVOICE INV-0882</h4><table class=\"doc-table\"><tr><th>Description</th><th>Qty</th><th>Total</th></tr><tr><td>Color brochures, A4, glossy, 8 pages</td><td>5,000</td><td>$1,750.00</td></tr><tr><td>Design setup</td><td>1</td><td>$0.00</td></tr><tr><td><strong>Subtotal (before tax)</strong></td><td></td><td><strong>$1,750.00</strong></td></tr></table><p><strong>Invoice date:</strong> May 22, 2026 &nbsp;|&nbsp; <strong>Due date:</strong> June 20, 2026 &nbsp;|&nbsp; <strong>Ref:</strong> NH-2210</p>" }
      ],
      summaryTh: "อีเมลขอใบเสนอราคาโบรชัวร์ 5,000 ใบ A4 สำหรับงานแสดงสินค้ามิถุนายน ต้องการอนุมัติภายใน 25 พ.ค.; ใบแจ้งหนี้ INV-0882 ออก 22 พ.ค. ยอด $1,750 (ก่อนภาษี) ครบกำหนด 20 มิ.ย. อ้างถึงออเดอร์ NH-2210",
      keyVocab: [{ word: "quote", th: "ใบเสนอราคา" }, { word: "due date", th: "วันครบกำหนด" }],
      questions: [
        { no: 1, stem: "What does Ms. Larsen ask Mr. Herrera to confirm?", options: ["The quality of the paper", "The price and delivery date", "The location of the trade fair", "The number of pages to print"], answer: "B", tags: ["detail"], difficulty: "easy", translationTh: "คุณลาร์เซนขอให้คุณเฮอร์เรร่าคอนเฟิร์มอะไร", evidence: [{ passage: 0, quote: "Could you confirm the price and the delivery date?" }], explain: { why: "อีเมลขอให้คอนเฟิร์ม price and delivery date", wrong: { A: "ไม่ได้ถามเรื่องคุณภาพกระดาษ", C: "ไม่ได้ถามสถานที่งาน", D: "จำนวนหน้ากำหนดไว้แล้ว (8 pages)" }, tip: "detail → scan confirm" } },
        { no: 2, stem: "Which number appears in BOTH the e-mail and the invoice?", options: ["June 25", "INV-0882", "NH-2210", "May 22"], answer: "C", tags: ["cross-reference"], difficulty: "medium", translationTh: "เลขใดปรากฏในอีเมลและใบแจ้งหนี้ทั้งสอง", evidence: [{ passage: 1, quote: "Ref: NH-2210" }, { passage: 0, quote: "Order #NH-2210" }], explain: { why: "อีเมล ‘Order #NH-2210’ · ใบแจ้งหนี้ ‘Ref: NH-2210’ — เลขเดียวกันตรงกัน", wrong: { A: "June 25 ไม่ปรากฏทั้งคู่ (อีเมลมี May 25)", B: "INV-0882 มีเฉพาะในใบแจ้งหนี้", D: "May 22 อยู่ในใบแจ้งหนี้เท่านั้น (invoice date)" }, tip: "cross-reference → เลขอ้างอิงร่วม" } },
        { no: 3, stem: "What is the total amount due on the invoice?", options: ["$1,950.00", "$2,100.00", "$1,575.00", "$1,750.00"], answer: "D", tags: ["detail"], difficulty: "easy", translationTh: "ยอดที่ต้องจ่ายตามใบแจ้งหนี้คือเท่าไร", evidence: [{ passage: 1, quote: "<strong>$1,750.00</strong>" }], explain: { why: "ยอด subtotal (ก่อนภาษี) = $1,750.00 — โจทย์ถามยอดรวม", wrong: { A: "$1,950 ไม่มี", B: "$2,100 ไม่มี", C: "$1,575 ไม่มีในเอกสาร" }, tip: "scan ตาราง Total" } },
        { no: 4, stem: "When is the invoice due?", options: ["June 20, 2026", "June 25, 2026", "May 18, 2026", "May 22, 2026"], answer: "A", tags: ["detail"], difficulty: "easy", translationTh: "ใบแจ้งหนี้ครบกำหนดเมื่อไหร่", evidence: [{ passage: 1, quote: "Due date: June 20, 2026" }], explain: { why: "ใบแจ้งหนี้ระบุ Due date: June 20, 2026", wrong: { B: "June 25 ไม่ใช่วันที่ใดในเอกสาร (อีเมลมี May 25)", C: "May 18 คือวันที่อีเมล", D: "May 22 คือ invoice date" }, tip: "ดู Due date ไม่ใช่ Invoice date" } },
        { no: 5, stem: "By what date does Ms. Larsen want to approve the order?", options: ["May 18", "May 22", "May 25", "June 20"], answer: "C", tags: ["detail"], difficulty: "easy", translationTh: "คุณลาร์เซนต้องการอนุมัติออเดอร์ภายในวันใด", evidence: [{ passage: 0, quote: "We would like to approve the order by May 25." }], explain: { why: "อีเมลบอกว่า approve by May 25", wrong: { A: "May 18 วันที่อีเมล", B: "May 22 invoice date", D: "June 20 due date" }, tip: "detail → scan approve by" } },
        { no: 6, stem: "According to both documents, what quantity is the order for?", options: ["50,000 brochures", "500 brochures", "1,000 brochures", "5,000 brochures"], answer: "D", tags: ["cross-reference"], difficulty: "medium", translationTh: "ตามเอกสารทั้งสอง ออเดอร์นี้มีจำนวนเท่าไร", evidence: [{ passage: 0, quote: "5,000 color brochures" }, { passage: 1, quote: "5,000" }], explain: { why: "อีเมลขอ 5,000 ใบ · ใบแจ้งหนี้ Qty 5,000 — ตรงกันทั้งคู่", wrong: { A: "50,000 ไม่ใช่", B: "500 ไม่ใช่", C: "1,000 ไม่ใช่" }, tip: " cross-reference จำนวน" } }
      ]
    }
  ]
};
