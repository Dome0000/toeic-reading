// data/lessons/p5-adverbs.js — Module 1 · บทที่ 16
window.TOEIC.lessons["p5-adverbs"] = {
  id: "p5-adverbs",
  module: 1,
  order: 16,
  title: "Adverbs — ตำแหน่งและความหมายของกริยาวิเศษณ์",
  frequency: "ต่ำ–กลาง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> ข้อสอบถาม (1) ตำแหน่งของกริยาวิเศษณ์ในประโยค (2) คำคู่ที่ความหมายต่างกันเมื่อเป็นกริยาวิเศษณ์ (hard/hardly, late/lately, high/highly, near/nearly, fair/fairly, direct/directly)</p>" },

    { type: "table", title: "ตำแหน่งกริยาวิเศษณ์", headers: ["ตำแหน่ง", "ตัวอย่าง"], rows: [
      ["ต้นประโยค + comma", "Unfortunately, the shipment was delayed."],
      ["หน้ากริยาแท้", "She <strong>always</strong> submits on time."],
      ["หลัง be/seem/become", "The process is <strong>currently</strong> under review."],
      ["ระหว่างกริยาช่วยกับกริยาแท้", "We have <strong>already</strong> approved the request."],
      ["หลังกรรม (ส่วนใหญ่)", "He speaks English <strong>fluently</strong>."]
    ]},

    { type: "table", title: "คู่ที่ความหมายต่างกันเมื่อเป็นกริยาวิเศษณ์", headers: ["คำ", "ความหมาย (adv)", "ความหมาย (adj)"], rows: [
      ["hard vs hardly", "hard = หนัก/ขยัน (work hard) · hardly = แทบจะไม่", "hard = ยาก/แข็ง · —"],
      ["late vs lately", "late = สาย · lately = เมื่อเร็ว ๆ นี้", "late = สาย"],
      ["high vs highly", "high = สูง (aim high) · highly = อย่างยิ่ง/มาก (highly recommended)", "high = สูง"],
      ["near vs nearly", "near = ใกล้ (come near) · nearly = เกือบ (nearly 50)", "near = ใกล้"],
      ["fair vs fairly", "fair = อย่างเป็นธรรม (play fair) · fairly = ค่อนข้าง/ค่อนข้างมาก (fairly easy, fairly large)", "fair = ยุติธรรม"],
      ["direct vs directly", "direct = ตรง (fly direct/direct route) · directly = โดยตรง/ทันที (report directly to the CEO)", "direct = ตรง"],
      ["close vs closely", "close = ใกล้ (sit close) · closely = อย่างใกล้ชิด (closely monitored)", "close = ใกล้"],
      ["free vs freely", "free = ฟรี (enter free) · freely = อย่างเสรี/โดยสมัครใจ (speak freely)", "free = ฟรี"]
    ]},

    { type: "table", title: "คำบอกเวลา/จำนวน: still / yet / already / nearly / almost", headers: ["คำ", "ใช้ใน", "ตัวอย่าง"], rows: [
      ["already", "บอกเล่า/คำถาม (เกิดขึ้นแล้ว)", "We have already sent the invoice."],
      ["yet", "ปฏิเสธ/คำถาม (ยังไม่…)", "The report is not ready yet."],
      ["still", "บอกเล่าปฏิเสธคำถาม (ยังคง/ยังไม่)", "The system is still down. / He still hasn't replied."],
      ["nearly / almost", "เกือบ — ใช้แทนกันได้ แต่ nearly เป็นทางการกว่าและใช้กับจำนวนบ่อย", "Nearly 200 employees attended."]
    ]},

    { type: "examples", title: "ตัวอย่างในบริบทธุรกิจ", items: [
      { en: "The project is progressing smoothly and is nearly complete.", th: "โปรเจกต์ดำเนินไปอย่างราบรื่นและเกือบเสร็จแล้ว (nearly + adj)" },
      { en: "She hardly ever misses a deadline.", th: "เธอแทบไม่เคยพลาดกำหนดส่งเลย (hardly ever = แทบจะไม่)" },
      { en: "Revenue has increased significantly lately.", th: "รายได้เพิ่มขึ้นอย่างมีนัยสำคัญเมื่อเร็ว ๆ นี้ (lately)" },
      { en: "We highly recommend submitting the proposal early.", th: "เราขอแนะนำอย่างยิ่งให้ส่งข้อเสนอแต่เนิ่น ๆ (highly + V)" },
      { en: "The shipment arrived late due to customs delays.", th: "การจัดส่งมาสายเพราะศุลกากรล่าช้า (late = สาย)" },
      { en: "They worked hard to meet the deadline.", th: "พวกเขาทำงานหนักเพื่อให้ทันกำหนด (work hard)" },
      { en: "Please review the figures closely before approving.", th: "โปรดตรวจตัวเลขอย่างใกล้ชิดก่อนอนุมัติ (closely = อย่างใกล้ชิด)" },
      { en: "The manager still hasn't approved the request.", th: "ผู้จัดการยังไม่อนุมัติคำขอนี้อยู่ดี (still + hasn't)" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>ช่องว่างอยู่ <strong>หน้ากริยา/หลังกริยาช่วย</strong> → ตอบกริยาวิเศษณ์ (often/already/still/usually)</li><li>ช่องว่างอยู่ <strong>ต้นประโยค + comma</strong> → <strong>Fortunately/Unfortunately/Currently/Typically</strong> + comma</li><li>เห็น <strong>hardly ever/never/seldom/rarely</strong> → รูปกริยาบอกเล่า (ไม่มี not)</li><li>เห็น <strong>nearly/almost</strong> + จำนวน/adj → เลือก nearly สำหรับทางการ</li><li>เห็น <strong>high/highly · hard/hardly · late/lately</strong> → ดูความหมายให้เข้ากับบริบท</li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>hard vs hardly</strong>: ‘*He hardly works*’ = แทบไม่ทำงาน · ‘*He works hard*’ = ทำงานหนัก</li><li><strong>late vs lately</strong>: ‘late arrival’ (มาสาย) · ‘lately, we have…’ (เมื่อเร็ว ๆ นี้)</li><li><strong>high vs highly</strong>: ‘aim high’ (ตั้งเป้าสูง) · ‘highly qualified’ (มีคุณสมบัติสูง)</li><li><strong>still vs yet vs already</strong>: yet ใช้ในปฏิเสธ/คำถาม · already ในบอกเล่า · still ทั้งหมดแต่ตำแหน่งต่างกัน</li><li><strong>hardly + any/ever</strong>: hardly any = แทบไม่มี · hardly ever = แทบไม่เคย</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>แปล hardly เป็น ‘หนัก’ — จริง ๆ คือ ‘แทบจะไม่’</li><li>ใช้ ‘not … yet’ สลับกับ already ปนกัน</li><li>ใช้ very นำ comparative — ใช้ much/far/even แทน</li><li>แปล ‘ใกล้’ แล้วใส่ near แทน nearly ก่อนจำนวน (nearly 100 employees)</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "1) ดูตำแหน่งก่อน → รู้ว่าต้องการกริยาวิเศษณ์ 2) ดูคู่ความหมาย (hard/hardly, late/lately) 3) ถ้ามีช่องว่างต้นประโยค + comma ตอบ fortunately/currently ฯลฯ — ตอบใน 2 วินาที" },

    { type: "cheatsheet", html: "<ul><li>ตำแหน่ง: ต้นประโยค + comma (Fortunately, …) · หน้ากริยาแท้ (always/usually) · หลังกริยาช่วย (have already…) · หลังกริยาแท้ (speaks fluently)</li><li>hard = หนัก · hardly = แทบจะไม่ · late = สาย · lately = เมื่อเร็ว ๆ นี้</li><li>high = สูง (aim high) · highly = อย่างยิ่ง (highly recommended)</li><li>near = ใกล้ · nearly = เกือบ · still = ยังคง · yet = ยัง (ปฏิเสธ/คำถาม) · already = แล้ว</li><li>so + adj/adv + that · such + (a) + (adj) + noun + that · too + adj · adj + enough</li></ul>" }
  ],
  quiz: [
    { no: 1, stem: "The team ------- meets on Monday mornings.", options: ["usual", "usually", "usualness", "unusual"], answer: "B", tags: ["adverb"], difficulty: "easy", translationTh: "ทีมมักจะประชุมกันเช้าวันจันทร์", explain: { why: "ช่องว่างหน้ากริยาแท้ (meets) → กริยาวิเศษณ์: usually", wrong: { A: "usual — คุณศัพท์ ไม่ใช่กริยาวิเศษณ์", C: "usualness — คำนาม", D: "unusual — คุณศัพท์ (ผิดความหมาย)" }, tip: "always/usually/often หน้ากริยา" } },
    { no: 2, stem: " -------, the system was unavailable for two hours yesterday.", options: ["Fortunes", "Fortunate", "Fortunately", "Fortune"], answer: "C", tags: ["adverb"], difficulty: "easy", translationTh: "น่าเสียดาย/โชคดีที่ระบบใช้งานไม่ได้สองชั่วโมงเมื่อวาน", explain: { why: "ต้นประโยค + comma → กริยาวิเศษณ์: Fortunately/Unfortunately", wrong: { A: "Fortunes — คำนามพหูพจน์", B: "Fortunate — คุณศัพท์", D: "Fortune — คำนาม" }, tip: "ต้นประโยค + comma → adverb + comma" } },
    { no: 3, stem: "He worked ------- to finish the pitch before the client arrived.", options: ["hard", "hardly", "harder", "hardness"], answer: "A", tags: ["adverb"], difficulty: "easy", translationTh: "เขาทำงานหนักเพื่อให้เสร็จก่อนลูกค้ามาถึง", explain: { why: "worked hard = ทำงานหนัก/ขยัน (hard เป็นกริยาวิเศษณ์ที่นี่)", wrong: { B: "hardly — แทบจะไม่ (worked hardly = แทบไม่ทำงาน) ผิดความหมาย", C: "harder — comparative ต้องมี than", D: "hardness — คำนาม" }, tip: "work hard · hardly ever/any" } },
    { no: 4, stem: "We ------- approved the vendor's terms last week.", options: ["yet", "still", "hardly", "already"], answer: "D", tags: ["adverb"], difficulty: "medium", translationTh: "เราอนุมัติเงื่อนไขของผู้ผลิตไปเรียบร้อยเมื่อสัปดาห์ที่แล้ว", explain: { why: "บอกเล่า + เกิดขึ้นแล้ว → already", wrong: { A: "yet — ปฏิเสธ/คำถาม", B: "still — ยังคง (still haven't …)", C: "hardly — แทบจะไม่" }, tip: "already + have/has + V3" } },
    { no: 5, stem: " ------- 150 employees registered for the benefits seminar.", options: ["Near", "Nearly", "Nearness", "Nears"], answer: "B", tags: ["adverb"], difficulty: "medium", translationTh: "พนักงานเกือบ 150 คนลงทะเบียนสัมมนาสวัสดิการ", explain: { why: "เกือบ + จำนวน (150) → nearly", wrong: { A: "Near — ใกล้ (come near) ไม่ใช้กับจำนวน", C: "Nearness — คำนาม", D: "Nears — กริยา" }, tip: "nearly/almost + จำนวน" } },
    { no: 6, stem: "The manager was ------- impressed with the audit results.", options: ["highest", "high", "highly", "higher"], answer: "C", tags: ["adverb"], difficulty: "medium", translationTh: "ผู้จัดการประทับใจอย่างมากกับผลตรวจสอบ", explain: { why: "highly = อย่างยิ่ง (highly impressed) — high แปลว่าสูง (aim high)", wrong: { A: "highest — superlative", B: "high — ไม่เข้ากับ impressed", D: "higher — comparative ไม่เข้า" }, tip: "highly + V3/adj" } },
    { no: 7, stem: "The shipment arrived -------; the client was understandably frustrated.", options: ["late", "lately", "later", "latter"], answer: "A", tags: ["adverb"], difficulty: "medium", translationTh: "การจัดส่งมาสาย ลูกค้ารู้สึกหงุดหงิดตามสมควร", explain: { why: "late = สาย (shipment มาสาย) — lately แปลว่าเมื่อเร็ว ๆ นี้", wrong: { B: "lately — เมื่อเร็ว ๆ นี้ ไม่ใช่สาย", C: "later — ทีหลัง (comparative)", D: "latter — ตัวหลัง (ของสองสิ่ง)" }, tip: "late = สาย · lately = เมื่อเร็ว ๆ นี้" } },
    { no: 8, stem: "She hasn't submitted the expense report -------.", options: ["still", "soon", "already", "yet"], answer: "D", tags: ["adverb"], difficulty: "easy", translationTh: "เธอยังไม่ได้ส่งรายงานค่าใช้จ่าย", explain: { why: "ปฏิเสธ + ยังไม่ → yet (hasn't … yet)", wrong: { A: "still — ใช้กับ haven't ได้ (still hasn't) แต่ตำแหน่งคือ ระหว่าง have/has กับ V3 ไม่ใช่ท้ายประโยคหลัง V3", B: "soon — เร็ว ๆ นี้", C: "already — บอกเล่า" }, tip: "not … yet" } },
    { no: 9, stem: "The quality-control process is ------- inspected before shipping.", options: ["close", "closely", "closer", "closeness"], answer: "B", tags: ["adverb"], difficulty: "hard", translationTh: "กระบวนการควบคุมคุณภาพได้รับการตรวจสอบอย่างใกล้ชิดก่อนจัดส่ง", explain: { why: "closely = อย่างใกล้ชิด (closely inspected) — close แปลว่าใกล้ (sit close)", wrong: { A: "close — ตำแหน่งและความหมายไม่เข้า", C: "closer — comparative", D: "closeness — คำนาม" }, tip: "closely + V3" } },
    { no: 10, stem: "The team has ------- met the quarterly target.", options: ["yet", "still", "already", "hardly"], answer: "C", tags: ["adverb"], difficulty: "hard", translationTh: "ทีมทำได้ตรงเป้าหมายไตรมาสแล้ว", explain: { why: "บอกเล่า + เกิดแล้ว → already (has already met)", wrong: { A: "yet — ปฏิเสธ/คำถาม", B: "still — ยังคง (still hasn't met)", D: "hardly — แทบจะไม่" }, tip: "already + present perfect (บอกเล่า)" } }
  ]
};
