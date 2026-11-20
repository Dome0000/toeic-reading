// data/lessons/m2-near-synonyms.js — Module 2 · บทที่ 5
window.TOEIC.lessons["m2-near-synonyms"] = {
  id: "m2-near-synonyms",
  module: 2,
  order: 5,
  title: "คำความหมายใกล้กันแต่ใช้ต่างกัน",
  frequency: "กลาง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> ข้อสอบ Part 5 ถามว่าคำไหนใช้กับบริบทนี้ได้ถูกต้อง — ไม่ใช่คำไหนแปล ‘เหมือนกัน’ แต่คำไหน <em> collocation และความละเอียดต่างอย่างไร</em></p>" },

    { type: "table", title: "พูด — say / tell / speak / talk", headers: ["คำ", "ใช้เมื่อ", "โครงสร้าง", "ตัวอย่าง"], rows: [
      ["say", "พูด (เน้นสิ่งที่พูดออกมา, ไม่ตามด้วยกรรมคน)", "say + (that/what) + clause", "She said that the meeting was moved."],
      ["tell", "บอก (ตามด้วยกรรมคน)", "tell + person + (that) + clause", "She told us the meeting was moved."],
      ["speak", "พูด (เน้นภาษา/พูดกับใคร formal)", "speak + language · speak to/with + person", "He speaks Thai fluently. / I'll speak to the director."],
      ["talk", "คุย (ไม่เป็นทางการ, เน้นการสนทนา)", "talk to/with + person · talk about", "Let's talk about the budget."]
    ]},

    { type: "table", title: "รับ — reach / arrive", headers: ["คำ", "ใช้เมื่อ", "ตัวอย่าง"], rows: [
      ["reach", "ขยาย/มาถึง (ไม่มีบุพบทนำหน้าคำนามปลายทาง)", "We reached the airport. / She reached me by phone."],
      ["arrive at + สถานที่เล็ก (airport, station, office)", "We arrived at the airport."],
      ["arrive in + เมือง/ประเทศ (arrive in Bangkok)", "The delegation arrived in Bangkok yesterday."]
    ]},

    { type: "table", title: "ยืม — lend / borrow (ทบทวน) และ bring / take / fetch", headers: ["คำ", "ทิศทาง", "ตัวอย่าง"], rows: [
      ["bring", "นำมา (มาที่นี่)", "Please bring the laptop."],
      ["take", "นำไป (ไปที่นั่น)", "Take the files to the meeting."],
      ["fetch", "ไปเอามา", "Can you fetch the reports from storage?"],
      ["lend", "ให้ยืม", "I lent him the pen."],
      ["borrow", "ยืมมา", "I borrowed a pen from him."]
    ]},

    { type: "table", title: "ตำแหน่งงาน — job / work / occupation / career", headers: ["คำ", "ความหมาย", "ตัวอย่าง"], rows: [
      ["job", "ตำแหน่ง/งานที่ทำ (countable)", "She got a new job. / two jobs"],
      ["work", "งานโดยรวม (uncountable)", "He has a lot of work to do."],
      ["occupation", "อาชีพ (ในฟอร์ม/ทางการ)", "What is your occupation?"],
      ["career", "เส้นทางอาชีพทั้งชีวิต", "She built a career in finance."]
    ]},

    { type: "table", title: "เงิน — fee / fare / price / cost / charge", headers: ["คำ", "ใช้กับ", "ตัวอย่าง"], rows: [
      ["fee", "ค่าธรรมเนียม/ค่าบริการ", "consulting fee · membership fee"],
      ["fare", "ค่ารถ/รถไฟ/เครื่องบิน", "taxi fare · airfare"],
      ["price", "ราคาสินค้า", "the price of the laptop"],
      ["cost", "ต้นทุน/ค่าใช้จ่ายรวม", "operating costs · cost of living"],
      ["charge", "ค่าธรรมเนียมที่เรียกเก็บ (verb/noun)", "a monthly charge · They charge $50."]
    ]},

    { type: "examples", title: "ตัวอย่างในบริบทธุรกิจ", items: [
      { en: "The director said the proposal needed revision.", th: "ผู้อำนวยการบอกว่าข้อเสนอต้องแก้ไข (say + clause)" },
      { en: "Please tell me the revised budget is ready.", th: "โปรดบอกฉันว่างบที่แก้ไขพร้อมแล้ว (tell + person)" },
      { en: "She speaks three languages fluently and presents at international conferences.", th: "เธอพูดได้สามภาษาและนำเสนอในงานประชุมนานาชาติ (speak + language)" },
      { en: "The client arrived in Singapore at 10:30 A.M. yesterday.", th: "ลูกค้ามาถึงสิงคโปร์ 10:30 น. เมื่อวาน (arrive in + เมือง)" },
      { en: "The sales team reached the airport by 6:00 A.M.", th: "ทีมขายถึงสนามบินภายใน 6 โมงเช้า (reach ไม่มีบุพบท)" },
      { en: "Can you bring the contract to the meeting tomorrow?", th: "คุณนำสัญญามาประชุมพรุ่งนี้ได้ไหม (bring = นำมา)" },
      { en: "The company covers the fare for business travel.", th: "บริษัทออกค่าเดินทางให้ (fare = ค่ารถ/ตั๋ว)" },
      { en: "What is your current occupation?", th: "อาชีพปัจจุบันของคุณคืออะไร (occupation — ในฟอร์ม)" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>ช่องว่าง + คำพูด (ไม่มีกรรมคน) → <strong>say</strong> · + กรรมคน → <strong>tell</strong></li><li>ช่องว่าง + สถานที่ (airport/station/office) → <strong>arrive at</strong>; เมือง/ประเทศ → <strong>arrive in</strong>; ไม่มีบุพบท → <strong>reach</strong></li><li>ช่องว่าง + ทิศทาง ‘ที่นี่’ → <strong>bring</strong> · ‘ที่นั่น’ → <strong>take</strong></li><li>ช่องว่าง + fee/fare/price/cost → ดูชนิดค่าใช้จ่าย (บริการ/เดินทาง/สินค้า/รวม)</li><li>ช่องว่าง + job/work/career → ดูว่า countable/uncountable หรือบริบทยาวชีวิต</li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>say vs tell</strong>: ‘*She said me …*’ ผิด — ‘She told me …’ หรือ ‘She said to me …’</li><li><strong>research นับไม่ได้</strong>: ‘a research’ ผิด — ‘a research study’ หรือ ‘some research’</li><li><strong>reach + the airport ไม่มีบุพบท</strong> — ‘*reached at the airport*’ ผิด</li><li><strong>fee vs fare vs price</strong>: ‘the taxi fare’ ไม่ใช่ ‘the taxi price’</li><li><strong>employees vs employer</strong>: ดูว่าบริษัทจ้างหรือถูกจ้าง</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>ใช้ ‘say me’ เหมือน ‘บอกฉัน’ — ต้อง tell me หรือ say to me</li><li>แปล ‘ค่าใช้จ่าย’ เหมือนกันแล้วเลือก price/cost ปนกัน — price = ราคาป้าย · cost = ต้นทุนรวม</li><li>ใช้ where are you from + occupation ปนกันในฟอร์มสมัคร — occupation เป็นช่องเฉพาะ</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "จำเป็นคู่: say(+that) / tell(+person) · reach(เอง) / arrive at-in · bring(มา) / take(ไป) · fee(บริการ) / fare(เดินทาง) / price(สินค้า) / cost(รวม) · job(งาน countable) / work(uncountable) / career(เส้นทาง)" },

    { type: "cheatsheet", html: "<ul><li>say + that + clause · tell + person + clause · speak + language / to-with person · talk + about</li><li>arrive at + สถานที่เล็ก · arrive in + เมือง/ประเทศ · reach + ปลายทาง (ไม่มีบุพบท)</li><li>bring = นำมา · take = นำไป · fetch = ไปเอามา</li><li>job = งาน (งาน) · work = งาน (uncountable) · occupation = อาชีพ (ฟอร์ม) · career = เส้นทางอาชีพ</li><li>fee = บริการ · fare = เดินทาง · price = สินค้า · cost = รวม · charge = เก็บเงิน</li></ul>" }
  ],
  quiz: [
    { no: 1, stem: "The manager ------- us that the meeting was moved to Thursday.", options: ["said", "told", "spoke", "talked"], answer: "B", tags: ["near-synonym"], difficulty: "easy", translationTh: "ผู้จัดการบอกเราว่าการประชุมถูกเลื่อนไปวันพฤหัส", explain: { why: "tell + person (us) → told", wrong: { A: "said — said (to) us ได้ แต่ ‘said us’ ผิด", C: "spoke — spoke to us ได้ แต่ความหมายไม่ใช่ ‘บอก’", D: "talked — talked to us ได้ แต่หมายถึงคุย ไม่ใช่บอกข้อความ" }, tip: "tell + person" } },
    { no: 2, stem: "She ------- French adequately for client meetings.", options: ["talked", "said", "spoke", "told"], answer: "C", tags: ["near-synonym"], difficulty: "medium", translationTh: "เธอพูดภาษาฝรั่งเศสได้พอเพียงสำหรับการประชุมกับลูกค้า", explain: { why: "speak + ภาษา (she speaks French) — พูดเป็นภาษา", wrong: { A: "talked — talk ต้อง talk in/about (‘talked French’ ไม่ใช้)", B: "said — said French ไม่ใช่ pattern (say + that clause)", D: "told — tell + person ไม่ใช่ speak + language" }, tip: "speak + ภาษา · tell + คน · say + ข้อความ" } },
    { no: 3, stem: "The shipment is expected to ------- the warehouse by noon.", options: ["arrive at", "arrive in", "reach at", "reach in"], answer: "A", tags: ["near-synonym"], difficulty: "easy", translationTh: "คาดว่าการจัดส่งจะถึงคลังสินค้าภายในเที่ยง", explain: { why: "arrive at + สถานที่เล็ก (warehouse) → arrive at", wrong: { B: "arrive in — สำหรับเมือง/ประเทศ", C: "reach at — reach ไม่มีบุพบท (reach the warehouse)", D: "reach in — ไม่ใช่ pattern" }, tip: "arrive at + place · arrive in + city/country" } },
    { no: 4, stem: "The courier will ------- the contract to the client this afternoon.", options: ["fetch", "carry", "bring", "take"], answer: "D", tags: ["near-synonym"], difficulty: "easy", translationTh: "พนักงานส่งของจะนำสัญญาไปให้ลูกค้าบ่ายนี้", explain: { why: "take = นำไป (ไปที่นั่น)", wrong: { A: "fetch — ไปเอามา (จาก)", B: "carry — หิ้ว (ไม่ระบุทิศทาง)", C: "bring — นำมาที่นี่ ผิดทิศทาง" }, tip: "bring = มา · take = ไป" } },
    { no: 5, stem: "She left her previous company after five years to build her ------- in design.", options: ["job", "work", "career", "occupation"], answer: "C", tags: ["near-synonym"], difficulty: "medium", translationTh: "เธอลาออกจากบริษัทเดิมหลังห้าปีเพื่อสร้างเส้นทางอาชีพด้านการออกแบบ", explain: { why: "career = เส้นทางอาชีพระยะยาว — บริบท ‘five years’ บ่งบอกเส้นทาง", wrong: { A: "job — งานที่ทำ (a job) ไม่ใช่เส้นทาง", B: "work — งานโดยรวม uncountable", D: "occupation — อาชีพปัจจุบัน (ฟอร์ม)" }, tip: "career = เส้นทาง · job = งาน · occupation = อาชีพ (ฟอร์ม)" } },
    { no: 6, stem: "The consulting firm charges a fixed ------- for its strategy reviews.", options: ["fare", "fee", "price", "cost"], answer: "B", tags: ["near-synonym"], difficulty: "medium", translationTh: "บริษัทที่ปรึกษาคิดค่าธรรมเนียมคงที่สำหรับการทบทวนกลยุทธ์", explain: { why: "fee = ค่าธรรมเนียมบริการ (consulting fee)", wrong: { A: "fare — ค่ารถ/เดินทาง", C: "price — ราคาสินค้า", D: "cost — ต้นทุนรวม" }, tip: "fee = บริการ" } },
    { no: 7, stem: "The board voted to ------- the merger vote until the audit is complete.", options: ["postpone", "prevent", "prevail", "proceed"], answer: "A", tags: ["near-synonym"], difficulty: "hard", translationTh: "คณะกรรมการโหวตเลื่อนการลงมติเรื่องการควบรวมออกไปจนกว่าการตรวจสอบเสร็จ", explain: { why: "postpone = เลื่อน (ทางการ) — ประกาศ/มติ ใช้ postpone", wrong: { B: "prevent — ป้องกัน (prevent a merger = ไม่ให้เกิด) ผิดความหมาย", C: "prevail — มีเหนือกว่า/ชนะ (prevail over competition)", D: "proceed — ดำเนินต่อ (proceed with) ตรงข้ามความหมาย" }, tip: "postpone = เลื่อน · proceed = ดำเนินต่อ" } },
    { no: 8, stem: "All new employees must ------- their ID badges by Friday.", options: ["hand out", "hand over", "hand down", "hand in"], answer: "D", tags: ["phrasal-verb", "near-synonym"], difficulty: "medium", translationTh: "พนักงานใหม่ทุกคนต้องส่งบัตรพนักงานคืนภายในวันศุกร์", explain: { why: "hand in = ส่งมอบ (งาน/บัตรคืน)", wrong: { A: "hand out — แจกจ่าย", B: "hand over — ส่งมอบอำนาจ/สิ่งของให้คนอื่น (ที่รับผิดชอบ)", C: "hand down — สืบทอด/ตัดสิน (ศาล)" }, tip: "hand in = ส่งคืน/ส่งมอบงาน" } },
    { no: 9, stem: "The two companies reached a ------- on pricing after lengthy talks.", options: ["meeting", "settlement", "destination", "station"], answer: "B", tags: ["near-synonym"], difficulty: "hard", translationTh: "ทั้งสองบริษัทบรรลุข้อตกลงด้านราคาหลังเจรจายาวนาน", explain: { why: "settlement = การตกลง/ระงับข้อพิพาท (reach a settlement)", wrong: { A: "meeting — การประชุม ไม่ใช่ผลลัพธ์การตกลง", C: "destination — ปลายทาง", D: "station — สถานี" }, tip: "reach a settlement / agreement" } },
    { no: 10, stem: "Please ------- the report to the client before 5:00 P.M. today.", options: ["deliver", "deliver to", "delivery", "delivering"], answer: "A", tags: ["near-synonym"], difficulty: "medium", translationTh: "โปรดส่งมอบรายงานให้ลูกค้าภายใน 5 โมงเย็นวันนี้", explain: { why: "deliver + กรรม (the report) + to + คน — รูป A (deliver) ถูกต้อง", wrong: { B: "deliver to — ขาดกรรมก่อนบุพบท", C: "delivery — คำนาม ไม่ใช่กริยา", D: "delivering — ไม่ใช่กริยาแท้ในบริบทคำสั่ง" }, tip: "deliver X (to Y)" } }
  ]
};
