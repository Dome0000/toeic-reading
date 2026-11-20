// data/lessons/m3-context-grammar.js — Module 3 · บทที่ 2
window.TOEIC.lessons["m3-context-grammar"] = {
  id: "m3-context-grammar",
  module: 3,
  order: 2,
  title: "Grammar ตามบริบท — เลือกจาก timeline และการอ้างอิง",
  frequency: "สูง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> ใน Part 6 ข้อที่ตอบผิดบ่อยที่สุดคือ tense และ pronoun — ทั้งสองอย่างไม่ได้วัดด้วยกฎเดี่ยว ๆ แต่อ่าน <em>บริบท</em> (timeline ของเหตุการณ์, การอ้างอิงของคำสรรพนาม) — นี่คือ skill เดียวกับที่ Part 7 ใช้</p>" },

    { type: "table", title: "เลือก Tense จาก timeline ของเนื้อความ", headers: ["สัญญาณในบทความ", "Tense ที่คาดหวัง", "ตัวอย่าง"], rows: [
      ["last week/month/year, ago, previously", "Past Simple", "The board <strong>approved</strong> the budget last March."],
      ["currently / at this time / at present", "Present Continuous", "We <strong>are currently expanding</strong> our Bangkok office."],
      ["recently / lately / over the past few months", "Present Perfect", "Demand <strong>has increased</strong> over the past quarter."],
      ["next week/quarter/month, coming", "Future Simple", "The new policy <strong>will take effect</strong> next month."],
      ["by + อนาคต (Friday, the end of the month)", "Future Perfect", "The audit <strong>will have been completed</strong> by May 30."],
      ["since + จุดเวลา", "Present Perfect", "The office <strong>has been</strong> open since 2019."],
      ["yesterday / when / while", "Past (continuous)", "While the team <strong>was preparing</strong>, the client arrived."],
      ["เอกสารเก่า/จดหมายทางการที่ยังจริงอยู่", "Present", "This notice <strong>serves</strong> as a reminder."]
    ]},

    { type: "table", title: "Pronoun reference — สรรพนามอ้างคำนามตัวไหน", headers: ["สรรพนาม", "หน้าที่/ข้อควรระวัง"], rows: [
      ["it / it's", "เอกพจน์ (it = สิ่งเดียว/บริษัท) — ระวัง it's = it is ไม่ใช่ possessive"],
      ["they / them / their", "พหูพจน์ — ดูว่าคำนามอ้างอิงเป็นพหูพจน์ (employees, services)"],
      ["this / that / these / those", "this/that = เอกพจน์/ใกล้/ไกล · these/those = พหูพจน์ — ดูคำนามถัดมา"],
      ["which", "ขยายสิ่ง/เหตุการณ์ทั้งย่อหน้า (comma + which) — ดูว่าอ้างอิงอะไร"],
      ["one / ones", "แทนคำนามเดิมเพื่อไม่ซ้ำ — ‘the blue one’"]
    ]},

    { type: "text", html: "<h3>วิธีแก้ปัญหาสรรพนามอ้างอิงใน Part 6 แบบเร็ว</h3><ol><li>ระบุคำนามที่ตัวเลือกอ้างถึง (ดูย่อหน้าก่อนหน้า)</li><li>จับคู่เอกพจน์/พหูพจน์ เพศ (he/she — หาจากชื่อ/title) และจำนวน</li><li>ถ้าคำนามที่ถูกอ้างถึงอยู่ใกล้เกินหนึ่งตัว ให้เลือกตัวที่ความหมายต่อเนื่องที่สุด</li><li>บริษัท/องค์กร = it (เอกพจน์) เสมอ</li></ol>" },

    { type: "examples", title: "ตัวอย่างการอ่าน timeline ในบทความจริง", items: [
      { en: "The relocation, originally scheduled for April, has been postponed. It will now take place in June.", th: "การย้าย ซึ่งเดิมกำหนดไว้เดือนเมษายน ถูกเลื่อน — ตอนนี้จะจัดในเดือนมิถุนายน (timeline: อดีต → เลื่อน → อนาคต; it = The relocation)" },
      { en: "We have received your inquiry dated March 3. It is being processed.", th: "เราได้รับคำสอบถามของคุณลงวันที่ 3 มีนาคม กำลังดำเนินการ (present perfect + continuous; It = your inquiry)" },
      { en: "Attendance at the workshop exceeded expectations. This prompted us to add a second session.", th: "ผู้เข้าร่วมอบรมเกินคาด จึงทำให้เราเพิ่มรอบ (This = เหตุการณ์ attendance ทั้งย่อหน้า)" },
      { en: "The vendor's invoice was marked overdue. They claimed payment was already sent.", th: "ใบแจ้งหนี้ถูกทำเครื่องหมายเกินกำหนด — พวกเขาอ้างว่าชำระแล้ว (They = the vendor = บริษัท เอกพจน์? แต่ they ใช้แทนบริษัทได้แบบรวมคน)" },
      { en: "Mr. Chen, who joined in January, will lead the project. He has ten years of experience.", th: "คุณเฉินซึ่งเข้าร่วมเมื่อเดือนมกราคมจะเป็นผู้นำโครงการ — เขามีประสบการณ์สิบปี (He = Mr. Chen)" },
      { en: "The training materials were distributed last week. They are now available online.", th: "เอกสารฝึกอบรมถูกแจกสัปดาห์ที่แล้ว — ตอนนี้มีออนไลน์ (They = The training materials)" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>ช่องว่างอยู่หลังวันที่/คอลัมน์เวลา → แก้ tense จาก timeline รอบๆ</li><li>ช่องว่าง + คำสรรพนาม (it/they/this/these) → ดูคำนามก่อนหน้าที่ตรงจำนวน/เพศ/ความต่อเนื่อง</li><li>ช่องว่างอยู่หลังกริยาช่วย (will/has/have/had) → เลือก V1/V3/V-ing ให้ตรงกับกริยาช่วย</li><li>ช่องว่างอยู่ต้นประโยคใหม่ → มองว่าต้องการประธาน/กริยา/คำเชื่อมอะไร</li><li>เห็น comma + which → ขยายเหตุการณ์/ความคิดข้างหน้า</li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>it / it's</strong>: ข้อสอบมักใส่ ‘it's’ เป็นตัวลวง — ดูว่าต้องการ possessive (its) หรือ it is</li><li><strong>this/that กับข้อความทั้งย่อหน้า</strong> — แปลว่า ‘เรื่องนี้/เหตุการณ์นี้’ ไม่ใช่ ‘สิ่งนี้’ เดียวๆ</li><li><strong>timeline แอบแฝง</strong>: ‘after the audit is complete’ (ไม่ใช่ completed/complete?) — หลัง after ใช้ present simple แทนอนาคต</li><li><strong>misleading pronoun</strong>: อาจมีคำนามหลายตัวก่อนหน้า — เลือกตัวที่‘logic’ ต่อเนื่องมากที่สุด</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>ใช้ grammar rule เดี่ยวๆ โดยไม่ดูเนื้อความ — ใน Part 6 กฎเดี่ยวไม่พอ</li><li>ลืมว่าบริษัท = it — แปลว่า ‘เขา’ แล้วเลือก he/she ผิด</li><li>ไม่อ่านย่อหน้าก่อนหน้า — pronoun ต้องอ้างอิงคำนามที่ปรากฏมาก่อน</li><li>สับสน ‘after + present’ กับ ‘after + past’ — ถ้าเป็นอนาคต ใช้ present simple</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "ขั้นที่ 1: ขีดทุกวันที่/กาลในบทความก่อนเติมช่องว่าง (15 วินาที) · ขั้นที่ 2: ถามว่าช่องว่างเป็น tense/pronoun/voice ไหน · ขั้นที่ 3: ดูหน้า-หลัง 2–3 คำ แล้วตอบ — ห้ามแปลทั้งประโยค" },

    { type: "cheatsheet", html: "<ul><li>Timeline markers → tense (last… → past · currently → continuous · over the past → perfect · next → future · by + future → future perfect · since → perfect)</li><li>company/organization = <strong>it</strong> · documents/items = <strong>they</strong> · single event = <strong>it</strong></li><li>this/that = เอกพจน์/‘เรื่องนี้’ · these/those = พหูพจน์</li><li>after/before/until/when + <strong>present</strong> (แทนอนาคต)</li><li>comma + which ขยายย่อหน้าก่อนหน้า</li><li>อ่านย่อหน้าก่อนหน้า → หาคำนามที่ถูกอ้างอิง → จับคู่จำนวน/เพศ</li></ul>" }
  ],
  quiz: [
    { no: 1, stem: "The shipment, originally scheduled for May, ------- due to a supplier strike.", options: ["delayed", "was delayed", "is delayeding", "delays"], answer: "B", tags: ["p6-context-grammar", "active-passive"], difficulty: "medium", translationTh: "การจัดส่งซึ่งเดิมกำหนดเดือนพฤษภาคมถูกเลื่อนเนื่องจากการประท้วงของผู้ผลิต", explain: { why: "shipment ถูกกระทำ → passive past: was delayed", wrong: { A: "delayed — active past ต้องมีกรรม (someone delayed the shipment)", C: "is delayeding — ไม่มีรูปนี้", D: "delays — present simple ผิดกาล" }, tip: "ของถูกทำ = passive" } },
    { no: 2, stem: "We ------- your application and will contact you shortly.", options: ["receive", "received", "have received", "receiving"], answer: "C", tags: ["p6-context-grammar", "verb-tense"], difficulty: "medium", translationTh: "เราได้รับใบสมัครของคุณแล้วและจะติดต่อกลับเร็ว ๆ นี้", explain: { why: "บริบท e-mail แจ้งว่าได้รับแล้ว (ผลลัพธ์ถึงปัจจุบัน) → present perfect: have received", wrong: { A: "receive — present simple ไม่เน้นผลถึงตอนนี้", B: "received — past simple ใช้ได้แต่บริบท ‘แล้วจะติดต่อ’ บ่ง present perfect", D: "receiving — ไม่ใช่กริยาแท้" }, tip: "บริบท ‘แจ้งได้รับแล้ว’ + จะติดต่อ → have/has received" } },
    { no: 3, stem: "The new branch will open in July. ------- policy will apply to all staff.", options: ["They're", "It's", "Their", "Its"], answer: "D", tags: ["p6-context-grammar", "pronoun"], difficulty: "easy", translationTh: "สาขาใหม่จะเปิดในเดือนกรกฎาคม นโยบายของสาขาจะใช้กับพนักงานทุกคน", explain: { why: "its = ของสาขา (branch = เอกพจน์ it)", wrong: { A: "They're — they are", B: "It's — it is", C: "Their — พหูพจน์ (สาขาหลายแห่ง)" }, tip: "branch/company = it → its" } },
    { no: 4, stem: "Please keep your badge visible. ------- will be checked at the entrance.", options: ["It", "They", "This", "These"], answer: "A", tags: ["p6-context-grammar", "pronoun"], difficulty: "easy", translationTh: "โปรดติดบัตรให้เห็นชัด จะถูกตรวจที่ทางเข้า", explain: { why: "badge เอกพจน์ → it", wrong: { B: "They — พหูพจน์", C: "This — this ต้องเจาะจง ‘อันนี้’ แต่ในประโยคต่อเนื่อง it (badge) ตรงกว่า", D: "These — พหูพจน์" }, tip: "เอกพจน์ → it" } },
    { no: 5, stem: "All visitors must report to reception. ------- will be escorted to the meeting room.", options: ["It", "They", "He", "She"], answer: "B", tags: ["p6-context-grammar", "pronoun"], difficulty: "easy", translationTh: "ผู้มาติดต่อทุกคนต้องรายงานตัวที่แผนกต้อนรับ พวกเขาจะถูกพาไปห้องประชุม", explain: { why: "All visitors พหูพจน์ → They", wrong: { A: "It — เอกพจน์", C: "He — เอกพจน์ผู้ชาย", D: "She — เอกพจน์ผู้หญิง" }, tip: "พหูพจน์ → they" } },
    { no: 6, stem: "The documents have been reviewed. ------- approved version is attached.", options: ["They're", "Their", "The", "Its"], answer: "C", tags: ["p6-context-grammar"], difficulty: "medium", translationTh: "เอกสารได้รับการตรวจทานแล้ว เวอร์ชันที่อนุมัติแนบมาด้วย", explain: { why: "the approved version = เวอร์ชันที่อนุมัติแล้ว → article the (ระบุ)", wrong: { A: "They're — they are ไม่ใช่ article", B: "Their — ของพวกเขา (พหูพจน์ possessive) ไม่ใช่ article", D: "Its — possessive เอกพจน์ แต่คำนาม version ต้อง article" }, tip: "the + approved version" } },
    { no: 7, stem: "The manager will decide by Friday. ------- decision will be announced on Monday.", options: ["This", "Its", "Their", "The"], answer: "D", tags: ["p6-context-grammar", "pronoun"], difficulty: "medium", translationTh: "ผู้จัดการจะตัดสินใจภายในวันศุกร์ การตัดสินใจจะประกาศในวันจันทร์", explain: { why: "the decision = การตัดสินใจที่กำลังพูดถึงในย่อหน้าต่อเนื่อง → article the (เจาะจง)", wrong: { A: "This — ต้องมีคำนามตามในโครงสร้าง this + noun เหมือนกัน แต่ ‘this decision’ จะอ้างว่าเป็นเรื่องใหม่/ใกล้; บริบทการประกาศของมติซึ่งคาดไว้แล้ว → the", B: "Its — ของบริษัท ไม่ใช่ของผู้จัดการ (the company's decision ต้องระบุบริษัทก่อน)", C: "Their — พหูพจน์ ไม่ match กับ manager เอกพจน์" }, tip: "the + คำนามเจาะจงในย่อหน้าต่อเนื่อง" } },
    { no: 8, stem: "Sales have improved since the campaign launched. ------- is encouraging for the next quarter.", options: ["This", "They", "These", "It"], answer: "A", tags: ["p6-context-grammar", "pronoun"], difficulty: "hard", translationTh: "ยอดขายดีขึ้นตั้งแต่แคมเปญเริ่ม — เรื่องนี้น่าส่งเสริมสำหรับไตรมาสหน้า", explain: { why: "This = เหตุการณ์ทั้งย่อหน้า (ยอดขายดีขึ้น)", wrong: { B: "They — พหูพจน์", C: "These — พหูพจน์", D: "It — หมายถึงสิ่งเดียว แต่บริบทอ้างทั้งสถานการณ์ → This" }, tip: "this/that = เหตุการณ์/สถานการณ์" } },
    { no: 9, stem: "The report is due Friday. Please submit ------- by 5:00 P.M.", options: ["it", "them", "these", "this"], answer: "A", tags: ["p6-context-grammar", "pronoun"], difficulty: "easy", translationTh: "รายงานครบกำหนดวันศุกร์ โปรดส่งภายใน 5 โมงเย็น", explain: { why: "the report เอกพจน์ → it", wrong: { B: "them — พหูพจน์", C: "these — พหูพจน์", D: "this — ไม่ใช้แทนคำนามเดิมแบบนี้ (this มีนามตาม)" }, tip: "เอกพจน์ → it" } },
    { no: 10, stem: "It is important that the files ------- backed up before the migration.", options: ["are", "be", "were", "being"], answer: "B", tags: ["p6-context-grammar", "conditional"], difficulty: "hard", translationTh: "สำคัญอย่างยิ่งที่ไฟล์ต้องถูกสำรองไว้ก่อนการย้ายข้อมูล", explain: { why: "It is important that + subjunctive → base verb: be", wrong: { A: "are — -s/conjugated ผิด subjunctive", C: "were — past form ผิด subjunctive", D: "being — ไม่ใช่ base verb" }, tip: "important/essential/necessary + that + base verb" } }
  ]
};
