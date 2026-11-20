// data/lessons/m3-transitions.js — Module 3 · บทที่ 3
window.TOEIC.lessons["m3-transitions"] = {
  id: "m3-transitions",
  module: 3,
  order: 3,
  title: "Transition Words — คำเชื่อมแบ่งตามหน้าที่",
  frequency: "สูง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> ข้อ Part 6 ถามว่าคำเชื่อมใดเหมาะกับช่องว่าง — คำตอบขึ้นกับ <em>ความสัมพันธ์เชิงตรรกะ</em> ระหว่างสองประโยค (เพิ่มเติม? ขัดแย้ง? เหตุผล? ผลลัพธ์?) — ถ้าเห็นความสัมพันธ์ คำหรือวลีก็พัดหายาก</p>" },

    { type: "table", title: "Transition Words ตามหน้าที่ (ตารางหลัก)", headers: ["หน้าที่", "คำ/วลี", "ความหมาย"], rows: [
      ["เพิ่มเติม (Addition)", "in addition · furthermore · moreover · additionally · also · as well as · besides · not only…but also", "อีกทั้ง / นอกจากนี้ / ยิ่งไปกว่านั้น"],
      ["ขัดแย้ง (Contrast/Concession)", "however · nevertheless · nonetheless · on the other hand · in contrast · whereas · although · even though · while · despite · in spite of · regardless of", "อย่างไรก็ตาม / แม้ว่า / แต่"],
      ["เหตุผล (Cause)", "because · since · as · due to · because of · owing to · thanks to · due to the fact that", "เพราะว่า / เนื่องจาก"],
      ["ผลลัพธ์ (Result)", "therefore · consequently · as a result · thus · accordingly · hence · so", "ดังนั้น / จึง / เป็นผลให้"],
      ["เงื่อนไข (Condition)", "if · unless · in case · provided that · as long as · or (else)", "ถ้า / เว้นแต่ / ก็ต่อเมื่อ"],
      ["ลำดับเวลา (Sequence)", "first · next · then · after · afterwards · subsequently · following · meanwhile · finally · prior to · before · as soon as", "ก่อนอื่น / ต่อมา / ระหว่างนั้น / สุดท้าย"],
      ["ยกตัวอย่าง (Example)", "for example · for instance · such as · namely · including", "ตัวอย่างเช่น"],
      ["สรุป (Summary)", "in conclusion · to summarize · overall · in short · all in all", "สรุปว่า / โดยรวม"]
    ]},

    { type: "table", title: "กฎการวางตำแหน่ง (Position rules)", headers: ["คำ", "ใช้หลัง", "ตัวอย่าง"], rows: [
      ["however / therefore / consequently / moreover", "จุด หรือ semicolon (หรือวางกลางประโยคคั่นด้วย comma)", "The plan was approved. However, funding is limited."],
      ["so / but / and (Fanboys)", "comma คั่นระหว่างสองประโยค", "Sales rose, but profits fell."],
      ["although / because / while", "นำ clause (ต้นหรือกลางประโยค)", "Although sales rose, profits fell."],
      ["despite / due to / because of", "นำ noun/NP/V-ing", "Despite the strong sales, profits fell."],
      ["meanwhile / subsequently / afterwards", "นำประโยคใหม่ (หรือกลางประโยค)", "The audit began on Monday. Meanwhile, the team prepared the report."]
    ]},

    { type: "text", html: "<h3>วิธีเลือกคำเชื่อมใน 3 ขั้น</h3><ol><li><strong>อ่านสองประโยครอบช่องว่าง</strong> — ถามว่า B เป็น ‘เพิ่มเติม’ / ‘ขัดแย้ง’ / ‘เหตุผล’ / ‘ผล’ ของ A หรือไม่</li><li><strong>เลือกกลุ่มคำตามหน้าที่</strong> — อย่าเลือกคำก่อนเห็นกลุ่ม</li><li><strong>เช็คโครงสร้าง</strong> — มี comma/semicolon/จุดไหม ตามตาราง Position rules</li></ol>" },

    { type: "examples", title: "ตัวอย่างในบริบทธุรกิจ", items: [
      { en: "The upgrade will improve speed. In addition, it will reduce maintenance costs.", th: "การอัปเกรดจะเพิ่มความเร็ว — นอกจากนี้ยังลดค่าบำรุงรักษา (addition)" },
      { en: "The price increased; however, demand remained strong.", th: "ราคาเพิ่มขึ้น อย่างไรก็ตาม ความต้องการยังคงสูง (contrast)" },
      { en: "Because the supplier's factory was down, deliveries were delayed.", th: "เพราะโรงงานผู้ผลิตหยุด การจัดส่งจึงล่าช้า (cause)" },
      { en: "The shipment was held at customs. Consequently, the client received it late.", th: "การจัดส่งถูกกักที่ศุลกากร ส่งผลให้ลูกค้าได้รับล่าช้า (result)" },
      { en: "The audit will begin on Monday. Meanwhile, the team will gather documents.", th: "การตรวจสอบจะเริ่มวันจันทร์ ระหว่างนั้นทีมจะรวบรวมเอกสาร (sequence)" },
      { en: "All employees, including contractors, must wear badges.", th: "พนักงานทุกคน รวมถึงผู้รับจ้าง ต้องติดบัตร (example)" },
      { en: "Sales exceeded the target. Therefore, the bonus pool will increase.", th: "ยอดขายเกินเป้า ดังนั้นกองทุนโบนัสจะเพิ่มขึ้น (result)" },
      { en: "Despite the delays, the team delivered the project on time.", th: "แม้มีความล่าช้า ทีมส่งมอบโครงการตรงเวลา (contrast — despite + noun)" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>ประโยคสองข้างช่องว่าง ‘คล้ายกัน’ (A ดี + B ดีอีก) → <strong>addition</strong> (in addition/moreover/furthermore)</li><li>A ดี แต่ B ตรงข้าม → <strong>contrast</strong> (however/nevertheless/although/despite)</li><li>ช่องว่างอยู่หน้า clause ที่เป็น ‘เหตุผล’ → <strong>because/since/as</strong></li><li>ช่องว่างอยู่หลังเหตุผลและต้องการ ‘ผล’ → <strong>therefore/consequently/thus/accordingly</strong></li><li>ช่องว่างอยู่หน้าเหตุการณ์ที่ต้องเกิดก่อน/หลัง → <strong>sequence</strong> (first/then/subsequently/finally/meanwhile)</li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>however/therefore ใช้จุดเดียวไม่ได้</strong> — ต้อง semicolon หรือจุดนำหน้า</li><li><strong>although + clause vs despite + noun</strong>: มองว่าช่องว่างตามด้วยอะไร</li><li><strong>because of + the fact that …</strong>: ใช้ได้แต่เยิ่นเย้อ — TOEIC ชอบ because/since</li><li><strong>meanwhile vs subsequently</strong>: meanwhile = ระหว่างนั้น (ในเวลาเดียวกัน) · subsequently = ต่อมา (หลังจากนั้น)</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>แปล ‘อย่างไรก็ตาม’ เหมือนกันแล้วเลือก although ทั้งที่ช่องว่างตามด้วย noun (despite)</li><li>วาง however กลางประโยคโดยไม่มี comma ทั้งสองข้าง</li><li>ใช้ therefore หลัง comma ตัวเดียว — ต้อง . หรือ ; นำหน้า</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "1) ขีดคำสัญญาณความสัมพันธ์ในสองประโยค (positive/negative) 2) ถ้าไม่มี signal ให้ดูโครงสร้าง (comma/semicolon) 3) เลือกคำในกลุ่มที่ตรง — 3 วินาทีต่อข้อ" },

    { type: "cheatsheet", html: "<ul><li>เพิ่มเติม: in addition · moreover · furthermore · additionally · also · not only…but also</li><li>ขัดแย้ง: however · nevertheless · nonetheless · on the other hand · although · despite · in spite of</li><li>เหตุผล: because · since · as · due to · because of · owing to</li><li>ผลลัพธ์: therefore · consequently · thus · accordingly · hence · as a result</li><li>ลำดับ: first · next · then · subsequently · meanwhile · finally · prior to</li><li>ตำแหน่ง: however/therefore หลัง . หรือ ; · Fanboys หลัง comma · although/because + clause · despite/due to + noun</li></ul>" }
  ],
  quiz: [
    { no: 1, stem: "The product launch was successful. -------, early sales exceeded targets.", options: ["However", "In addition", "Despite", "Because"], answer: "B", tags: ["transition"], difficulty: "easy", translationTh: "การเปิดตัวสินค้าสำเร็จ นอกจากนี้ยอดขายแรกยังเกินเป้า", explain: { why: "สองประโยคส่งเสริมกัน (ดี + ดียิ่งขึ้น) → addition: In addition", wrong: { A: "However — ขัดแย้ง", C: "Despite — ตามด้วย noun", D: "Because — เหตุผล ไม่ใช่เพิ่มเติม" }, tip: "ดี + ดีอีก = addition" } },
    { no: 2, stem: "The venue was booked weeks in advance; -------, the caterer can only offer limited menus.", options: ["consequently", "therefore", "however", "moreover"], answer: "C", tags: ["transition"], difficulty: "medium", translationTh: "สถานที่จองล่วงหน้าหลายสัปดาห์ อย่างไรก็ตาม ผู้จัดเลี้ยงเสนอเมนูจำกัด", explain: { why: "A (ดี) แต่ B (จำกัด) — ขัดแย้ง → however", wrong: { A: "consequently — ผลลัพธ์", B: "therefore — ผลลัพธ์ ไม่ใช่ขัดแย้ง", D: "moreover — เพิ่มเติม ไม่ใช่ขัดแย้ง" }, tip: "ดี + แต่จำกัด = contrast" } },
    { no: 3, stem: " ------- the supplier's delay, the production line was halted.", options: ["Although", "So", "Because", "Due to"], answer: "D", tags: ["transition"], difficulty: "easy", translationTh: "เพราะการล่าช้าของผู้ผลิต สายการผลิตจึงหยุด", explain: { why: "ตามด้วย noun phrase (the supplier's delay) → บุพบท: Due to", wrong: { A: "Although — ขัดแย้ง ไม่ใช่เหตุผล", B: "So — ต้องมี comma คั่นระหว่างสองประโยค", C: "Because — ต้องตามด้วย clause" }, tip: "due to + noun" } },
    { no: 4, stem: "The system update improved speed. -------, support tickets dropped by half.", options: ["Consequently", "Although", "Despite", "However"], answer: "A", tags: ["transition"], difficulty: "easy", translationTh: "การอัปเดตระบบเพิ่มความเร็ว ส่งผลให้คำขอรับการสนับสนุนลดลงครึ่งหนึ่ง", explain: { why: "A ดี → B ผลที่ตามมา → result: Consequently", wrong: { B: "Although — ต้องตามด้วย clause", C: "Despite — ตามด้วย noun", D: "However — ขัดแย้ง" }, tip: "ดี → ผล = consequently/therefore" } },
    { no: 5, stem: " ------- the rising demand, the factory is running double shifts.", options: ["Because of", "Because", "Since", "Although"], answer: "A", tags: ["transition"], difficulty: "medium", translationTh: "เพราะความต้องการที่เพิ่มขึ้น โรงงานจึงทำงานสองกะ", explain: { why: "ตามด้วย noun phrase (the rising demand) → บุพบท: Because of", wrong: { B: "Because — ต้องตามด้วย clause (because demand is rising)", C: "Since — ต้องตามด้วย clause", D: "Although — ขัดแย้ง" }, tip: "because of + noun" } },
    { no: 6, stem: "Mr. Alvarez will present first. -------, Ms. Park will demonstrate the product.", options: ["Previously", "Subsequently", "Meanwhile", "Despite"], answer: "B", tags: ["transition"], difficulty: "medium", translationTh: "คุณอัลวาเรซจะนำเสนอก่อน ต่อมาคุณปาร์คจะสาธิตสินค้า", explain: { why: "ลำดับเวลา: first → subsequently (ต่อมา)", wrong: { A: "Previously — ก่อนหน้านั้น (ผิดลำดับ)", C: "Meanwhile — ระหว่างนั้น (ในเวลาเดียวกัน ไม่ใช่ลำดับ)", D: "Despite — ขัดแย้ง" }, tip: "first → next/subsequently" } },
    { no: 7, stem: "The offer is valid for thirty days. ------- that date, the discount will no longer apply.", options: ["Unless", "Prior to", "After", "During"], answer: "C", tags: ["transition"], difficulty: "hard", translationTh: "ข้อเสนอใช้ได้สามสิบวัน หลังจากนั้นส่วนลดจะไม่มีผลแล้ว", explain: { why: "หลังจากวันนั้น → After that date", wrong: { A: "Unless — เว้นแต่", B: "Prior to — ก่อน (ผิดความหมาย)", D: "During — ระหว่าง" }, tip: "after that date" } },
    { no: 8, stem: "The team worked late. -------, the proposal was submitted on time.", options: ["Despite", "Meanwhile", "However", "As a result"], answer: "D", tags: ["transition"], difficulty: "medium", translationTh: "ทีมทำงานดึก ส่งผลให้ข้อเสนอส่งตรงเวลา", explain: { why: "เหตุ (ทำงานดึก) → ผล (ส่งทัน) → result: As a result", wrong: { A: "Despite — ตามด้วย noun", B: "Meanwhile — ระหว่างนั้น", C: "However — ขัดแย้ง" }, tip: "เหตุ → ผล = as a result/therefore" } },
    { no: 9, stem: "Please bring your ID; -------, you will not be allowed inside.", options: ["otherwise", "therefore", "however", "moreover"], answer: "A", tags: ["transition"], difficulty: "hard", translationTh: "โปรดนำบัตรประจำตัว ไม่เช่นนั้นคุณจะไม่ได้รับอนุญาตให้เข้า", explain: { why: "otherwise = ไม่เช่นนั้น — เงื่อนไขทางลบ (bring ID → มิฉะนั้น)", wrong: { B: "therefore — สรุปผลแบบตรงไป (ไม่ใช่เงื่อนไขเตือน)", C: "however — ขัดแย้ง", D: "moreover — เพิ่มเติม" }, tip: "มิฉะนั้น = otherwise / or else" } },
    { no: 10, stem: "The marketing budget was doubled. -------, sales grew by 40 percent.", options: ["Although", "Accordingly", "Despite", "Meanwhile"], answer: "B", tags: ["transition"], difficulty: "medium", translationTh: "งบการตลาดเพิ่มเป็นสองเท่า ส่งผลให้ยอดขายเติบโต 40 เปอร์เซ็นต์", explain: { why: "งบเพิ่ม → ผล (ยอดขายเพิ่ม) → accordingly (ดังนั้น)", wrong: { A: "Although — ขัดแย้ง + clause", C: "Despite — ขัดแย้ง + noun", D: "Meanwhile — ระหว่างนั้น" }, tip: "เหตุ → ผล = accordingly/therefore/thus" } }
  ]
};
