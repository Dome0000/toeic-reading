// data/lessons/m2-word-families.js — Module 2 · บทที่ 1
window.TOEIC.lessons["m2-word-families"] = {
  id: "m2-word-families",
  module: 2,
  order: 1,
  title: "Word Families — ตระกูลคำ",
  frequency: "สูง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> ส่วนใหญ่ของ Part 5 เป็นการทดสอบ word family โดยไม่ต้องแปล — เห็นตำแหน่งของช่องว่าง ก็ตอบชนิดคำได้</p>" },

    { type: "table", title: "ตระกูลคำที่ต้องรู้ (TOEIC ออกบ่อย)", headers: ["ตระกูล", "รูป", "ตัวอย่างประโยค"], rows: [
      ["compete", "compete (v.) · competition (n.) · competitive (adj.) · competitively (adv.) · competitor (n.)", "The two firms compete fiercely; the competition is intense."],
      ["apply", "apply (v.) · application (n.) · applicant (n.) · applicable (adj.) · applied (adj.)", "Please submit your application; the applicant pool is strong."],
      ["decide", "decide (v.) · decision (n.) · decisive (adj.) · decisively (adv.)", "The board decided; the decision was decisive."],
      ["produce", "produce (v.) · production (n.) · product (n.) · productive (adj.) · productivity (n.)", "The unit is highly productive; productivity rose."],
      ["promote", "promote (v.) · promotion (n.) · promoted (adj.) · promotional (adj.)", "The promotion was approved; the promotional campaign starts Monday."],
      ["satisfy", "satisfy (v.) · satisfaction (n.) · satisfactory (adj.) · satisfied (adj.) · satisfactorily (adv.)", "The result is satisfactory; customer satisfaction rose."],
      ["economy", "economy (n.) · economic (adj.) · economical (adj.) · economically (adv.) · economize (v.)", "The economy is slow; the economical choice saves money."],
      ["succeed", "succeed (v.) · success (n.) · successful (adj.) · successfully (adv.)", "The launch succeeded; the successful product sells well."],
      ["repeat", "repeat (v.) · repetition (n.) · repeated (adj.) · repeatedly (adv.)", "The repeat order came in; repeated attempts failed."],
      ["differ", "differ (v.) · difference (n.) · different (adj.) · differently (adv.) · differentiate (v.)", "The two designs differ; the key difference is price."]
    ]},

    { type: "text", html: "<h3>หลักการเลือกใน 1 วินาที</h3><ol><li>ดูตำแหน่งช่องว่าง → ชนิดคำที่ต้องใช้ (ดูบท p5-word-forms)</li><li>ดูว่าคำที่เป็นตัวเลือกทั้งหมดอยู่ตระกูลเดียวกันไหม — ถ้าใช่ตอบตามชนิดคำทันที</li><li>ถ้ามีสองคำชนิดเดียวกัน → ดู <strong>ตัวบ่งชี้ collocation</strong> (e.g., ‘an economical car’ vs ‘economic growth’)</li></ol>" },

    { type: "examples", title: "ตัวอย่างในบริบทธุรกิจ", items: [
      { en: "The startup's competitors moved quickly into the market.", th: "คู่แข่งของสตาร์ทอัพรายนี้บุกเข้าตลาดอย่างรวดเร็ว (competitor = คู่แข่ง)" },
      { en: "All applicants must submit references.", th: "ผู้สมัครทุกคนต้องส่งเอกสารอ้างอิง (applicant)" },
      { en: "The decision was made unanimously by the board.", th: "การตัดสินใจทำโดยคณะกรรมการแบบเป็นเอกฉันท์ (decision)" },
      { en: "Rising production costs squeezed margins.", th: "ต้นทุนการผลิตที่สูงขึ้นบีบกำไร (production)" },
      { en: "She was promoted to senior director in March.", th: "เธอได้รับการเลื่อนตำแหน่งเป็นผู้อำนวยการอาวุโสในเดือนมีนาคม (promoted)" },
      { en: "Customer satisfaction surveys are conducted quarterly.", th: "มักจะสำรวจความพึงพอใจลูกค้าทุกไตรมาส (satisfaction)" },
      { en: "An economical option would be to lease the equipment.", th: "ตัวเลือกที่ประหยัดคือการเช่าอุปกรณ์ (economical = ประหยัด)" },
      { en: "The marketing campaign succeeded beyond expectations.", th: "แคมเปญการตลาดสำเร็จเกินคาด (succeeded)" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>ช่องว่างอยู่หลัง the/a + คำนามตาม → ตอบ <strong>adj</strong></li><li>ช่องว่างอยู่หลังกริยา + (v.) → ตอบตามกาล</li><li>ช่องว่างอยู่ต้นประโยคเป็นประธาน → ตอบ <strong>noun</strong></li><li>ช่องว่าง + คือช่องว่างที่ขยายกริยา → <strong>adv (-ly)</strong></li><li>คำที่ลงท้าย -tion/-ment/-ness/-ity/-ance → <strong>noun</strong> · -ive/-al/-ful/-ous → <strong>adj</strong> · -ly → <strong>adv</strong> · -ize → <strong>verb</strong></li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>economic vs economical</strong>: economic = ทางเศรษฐกิจ (economic growth) · economical = ประหยัด (an economical car)</li><li><strong>historic vs historical</strong>: historic = มีความสำคัญทางประวัติศาสตร์ · historical = เกี่ยวกับประวัติศาสตร์</li><li><strong>considerable vs considerate</strong>: considerable = มาก/สำคัญ · considerate = เกรงใจ</li><li><strong>respectful vs respectable</strong>: respectful = เคารพนับถือ · respectable = น่านับถือ · respective = ตามลำดับ</li><li><strong>responsive vs responsible</strong>: responsive = ตอบสนองไว · responsible = รับผิดชอบ</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>แปล ‘เศรษฐกิจ’ เดียวกันแล้วเลือก economic/economical ปนกัน — ดูว่าขยายคำนามอะไร</li><li>ใช้คำนามแทน adjective เช่น ‘a completion report’ — ที่ถูกคือ ‘a complete report’ หรือ ‘the completion of the report’</li><li>ลืมว่า suffix -al เป็น adjective (financial, managerial, promotional)</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "ขีด suffix ของตัวเลือกทั้ง 4 ตัวก่อน 1 วินาที — ถ้ามี adjective ตัวเดียวและตำแหน่งต้องการ adjective ก็ตอบทันที ไม่ต้องแปลประโยค" },

    { type: "cheatsheet", html: "<ul><li>compete: competition · competitive · competitively · competitor</li><li>apply: application · applicant · applicable</li><li>produce: production · product · productive · productivity</li><li>satisfy: satisfaction · satisfactory · satisfied · satisfactorily</li><li>succeed: success · successful · successfully</li><li>economy: economic (ทางเศรษฐกิจ) vs economical (ประหยัด)</li><li>pattern: ขั้นที่ 1 ดูตำแหน่ง → ขั้นที่ 2 ดู suffix → ขั้นที่ 3 ดู collocation</li></ul>" }
  ],
  quiz: [
    { no: 1, stem: "The two companies are in direct ------- for market share.", options: ["compete", "competition", "competitive", "competitively"], answer: "B", tags: ["word-family"], difficulty: "easy", translationTh: "สองบริษัทกำลังแข่งขันกันชิงส่วนแบ่งตลาด", explain: { why: "in direct ___ → คำนาม competition (การแข่งขัน)", wrong: { A: "compete — กริยา", C: "competitive — คุณศัพท์ (a competitive market)", D: "competitively — กริยาวิเศษณ์" }, tip: "in direct/the + ___ → noun" } },
    { no: 2, stem: "All ------- must submit a cover letter and résumé.", options: ["apply", "application", "applicants", "applicable"], answer: "C", tags: ["word-family"], difficulty: "easy", translationTh: "ผู้สมัครทุกคนต้องส่งจดหมายสมัครและประวัติย่อ", explain: { why: "All + ___ + must submit → คำนามคน พหูพจน์: applicants", wrong: { A: "apply — กริยา", B: "application — คำนาม ‘ใบสมัคร’ ไม่ใช่ ‘ผู้สมัคร’", D: "applicable — คุณศัพท์" }, tip: "ดูความหมาย: applicants = ผู้สมัคร" } },
    { no: 3, stem: "The marketing campaign was ------- successful in boosting brand awareness.", options: ["remarkable", "remarks", "remark", "remarkably"], answer: "D", tags: ["word-family"], difficulty: "medium", translationTh: "แคมเปญการตลาดสำเร็จอย่างน่าทึ่งในการเพิ่มการรับรู้แบรนด์", explain: { why: "successfully (กริยาวิเศษณ์) ขยาย adj successful — ช่องว่างขยาย adj → remarkably", wrong: { A: "remarkable — คุณศัพท์; ‘remarkable successful’ ผิด ต้องขยาย adj ด้วย adv", B: "remarks — คำนามพหูพจน์/กริยา", C: "remark — คำนาม/กริยา" }, tip: "adv + adj + noun" } },
    { no: 4, stem: "Customer ------- is the top priority for our service team.", options: ["satisfaction", "satisfactory", "satisfy", "satisfied"], answer: "A", tags: ["word-family"], difficulty: "easy", translationTh: "ความพึงพอใจของลูกค้าคือสิ่งสำคัญอันดับแรกของทีมบริการ", explain: { why: "customer ___ (คำนาม) → satisfaction", wrong: { B: "satisfactory — คุณศัพท์ ‘น่าพอใจ’ (satisfactory service)", C: "satisfy — กริยา", D: "satisfied — คุณศัพท์ ‘ที่พึงพอใจ’ (satisfied customers)" }, tip: "customer satisfaction = คู่คำยอดนิยม" } },
    { no: 5, stem: "The new plant operates -------, producing 20 percent more output.", options: ["productivity", "productive", "productively", "produce"], answer: "C", tags: ["word-family"], difficulty: "medium", translationTh: "โรงงานใหม่ดำเนินการอย่างมีประสิทธิภาพ ผลิตมากขึ้น 20 เปอร์เซ็นต์", explain: { why: "operates + ___ → กริยาวิเศษณ์: productively", wrong: { A: "productivity — คำนาม", B: "productive — คุณศัพท์", D: "produce — กริยา" }, tip: "กริยา + adv" } },
    { no: 6, stem: "An ------- car reduces fuel costs for the sales fleet.", options: ["economy", "economical", "economic", "economically"], answer: "B", tags: ["word-family", "confusing-words"], difficulty: "hard", translationTh: "รถที่ประหยัดช่วยลดค่าใช้จ่ายเชื้อเพลิงของฝ่ายขาย", explain: { why: "economical = ประหยัด (economical car/choice) — economic = ทางเศรษฐกิจ", wrong: { A: "economy — คำนาม (the economy)", C: "economic — ‘ทางเศรษฐกิจ’ (economic policy) ไม่ใช่ ‘ประหยัด’", D: "economically — กริยาวิเศษณ์" }, tip: "economical = ประหยัด · economic = เศรษฐกิจ" } },
    { no: 7, stem: "Her ------- of the new client accounts won praise from the director.", options: ["handled", "handleability", "handle", "handling"], answer: "D", tags: ["word-family"], difficulty: "medium", translationTh: "การจัดการบัญชีลูกค้าใหม่ของเธอได้รับคำชมจากผู้อำนวยการ", explain: { why: "Her ___ of → คำนาม/กริยา-ing: handling (gerund as noun)", wrong: { A: "handled — V3 ไม่ใช่คำนาม", B: "handleability — ไม่มีคำนี้", C: "handle — base form ไม่ใช่คำนาม" }, tip: "her/his + V-ing = gerund as noun" } },
    { no: 8, stem: "The board reached a ------- decision after two hours of debate.", options: ["decisive", "decisively", "decide", "decision"], answer: "A", tags: ["word-family"], difficulty: "medium", translationTh: "คณะกรรมการได้ข้อสรุปที่เด็ดขาดหลังถกเถียงสองชั่วโมง", explain: { why: "a ___ decision → คุณศัพท์: decisive", wrong: { B: "decisively — กริยาวิเศษณ์", C: "decide — กริยา", D: "decision — คำนาม (a decision decision ผิด)" }, tip: "a + adj + decision" } },
    { no: 9, stem: " ------- speaking, the third quarter exceeded expectations.", options: ["General", "Generalize", "Generally", "Generalization"], answer: "C", tags: ["word-family"], difficulty: "hard", translationTh: "โดยทั่วไปแล้ว ไตรมาสที่สามเกินความคาดหมาย", explain: { why: "ต้นประโยค + comma → กริยาวิเศษณ์: Generally", wrong: { A: "General — คุณศัพท์", B: "Generalize — กริยา", D: "Generalization — คำนาม" }, tip: "Generally/Typically/Overall + comma" } },
    { no: 10, stem: "The training program was ------- to all new hires.", options: ["apply", "applicable", "application", "applicant"], answer: "B", tags: ["word-family"], difficulty: "medium", translationTh: "โครงการฝึกอบรมนี้ใช้ได้กับพนักงานใหม่ทุกคน", explain: { why: "was + ___ + to → คุณศัพท์: applicable (ใช้ได้กับ)", wrong: { A: "apply — กริยา", C: "application — คำนาม", D: "applicant — คำนามคน" }, tip: "applicable to = ใช้ได้กับ" } }
  ]
};
