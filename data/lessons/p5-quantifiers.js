// data/lessons/p5-quantifiers.js — Module 1 · บทที่ 15
window.TOEIC.lessons["p5-quantifiers"] = {
  id: "p5-quantifiers",
  module: 1,
  order: 15,
  title: "Quantifiers, Determiners & Articles — คำบอกปริมาณ ตัวกำหนด และ a/the",
  frequency: "กลาง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> ข้อสอบถาม small words ที่คนส่วนใหญ่มองข้าม — each vs every, few vs a few, a vs the, a number of vs the number of — คำเล็ก ๆ แต่ตอบผิดเพราะแปลไทยปนกัน</p>" },

    { type: "table", title: "Quantifiers หลัก", headers: ["คำ", "ความหมาย", "พฤติกรรม", "ตัวอย่าง"], rows: [
      ["each", "แต่ละ (เน้นรายบุคคล)", "+ เอกพจน์ / of + พหูพจน์ (each of the…)", "Each employee receives a badge."],
      ["every", "ทุก ๆ (เน้นทั้งหมด)", "+ เอกพจน์ (every three months)", "Every department must comply."],
      ["few", "น้อย (แทบไม่มี)", "+ พหูพจน์ countable", "Few clients attended."],
      ["a few", "พอมีบ้าง", "+ พหูพจน์ countable", "We have a few concerns."],
      ["little", "น้อย (แทบไม่มี)", "+ นับไม่ได้", "Little progress was made."],
      ["a little", "พอมีบ้าง", "+ นับไม่ได้", "There's still a little time."],
      ["many", "มาก (นับได้)", "questions, orders", "Many orders are pending."],
      ["much", "มาก (นับไม่ได้)", "time, money, work", "We don't have much time."],
      ["most", "ส่วนใหญ่", "+ พหูพจน์/นับไม่ได้ หรือ most of the…", "Most staff agree. / Most of the budget"],
      ["a number of", "จำนวนมาก (พหูพจน์)", "กริยาพหูพจน์", "A number of errors were found."],
      ["the number of", "จำนวนของ (เอกพจน์)", "กริยาเอกพจน์", "The number of errors has fallen."],
      ["another", "อีกหนึ่ง (เอกพจน์)", "another + sing. noun", "another week"],
      ["other", "อื่น ๆ", "other + plural / the other + noun", "other options / the other department"],
      ["the others", "คน/สิ่งอื่นทั้งหมด (เจาะจง)", "ไม่มีคำนามตาม", "Two left; the others stayed."]
    ]},

    { type: "table", title: "a / the / Ø (no article)", headers: ["รูป", "ใช้เมื่อ", "ตัวอย่าง"], rows: [
      ["a/an", "อันใดอันหนึ่ง หรือครั้งแรกที่กล่าวถึง", "We hired a consultant."],
      ["the", "เฉพาะเจาะจง ที่รู้อยู่แล้ว/เป็นที่เดียว", "The consultant who joined in May… / the CEO / the project"],
      ["Ø (ไม่มี article)", "นามนับไม่ได้/พหูพจน์ทั่วไป หรือพูดเชิงทั่วไป", "Employees deserve respect. / Water is essential."]
    ]},

    { type: "examples", title: "ตัวอย่างในบริบทธุรกิจ", items: [
      { en: "Each of the branches reports weekly to headquarters.", th: "แต่ละสาขารายงานเข้าเป็นรายสัปดาห์ (each of + plural → เอกพจน์)" },
      { en: "Every employee must complete the compliance module.", th: "พนักงานทุกคนต้องเรียนโมดูลกำกับดูแล (every + เอกพจน์)" },
      { en: "Few applications met all the listed requirements.", th: "มีใบสมัครน้อยมากที่ครบทุกเงื่อนไข (few = แทบไม่มี)" },
      { en: "We appreciate the little time you spent with us.", th: "เราขอบคุณเวลาเล็กน้อยที่คุณให้เรา (a little = พอมีบ้าง — แต่ในโจทย์ careful)" },
      { en: "The number of complaints has dropped sharply this quarter.", th: "จำนวนข้อร้องเรียนลดลงอย่างรวดเร็วไตรมาสนี้ (the number → เอกพจน์ → has)" },
      { en: "A number of vendors have requested an extension.", th: "ผู้ผลิตหลายรายขอขยายเวลา (a number of → พหูพจน์ → have)" },
      { en: "Most of the budget has been allocated already.", th: "งบประมาณส่วนใหญ่ถูกจัดสรรไปแล้ว (most of + นับไม่ได้ → เอกพจน์ → has)" },
      { en: "The manager distributed the remaining tasks to the other team members.", th: "ผู้จัดการกระจายงานที่เหลือให้สมาชิกทีมคนอื่น (the other + plural noun)" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>เห็น <strong>each/every + เอกพจน์</strong> หรือ <strong>each of + พหูพจน์</strong> → กริยาเอกพจน์</li><li>เห็น <strong>few/a few</strong> → พหูพจน์ · <strong>little/a little</strong> → นับไม่ได้</li><li>เห็น <strong>a number of</strong> → พหูพจน์ · <strong>the number of</strong> → เอกพจน์</li><li>เห็น <strong>most of + the/this + noun</strong> → ตาม noun นั้น (นับไม่ได้/เอกพจน์ → กริยาเอกพจน์)</li><li>เห็น <strong>another + เอกพจน์</strong> · <strong>other + พหูพจน์</strong> · <strong>the others</strong> (ไม่มีคำนามตาม)</li><li>เห็น a/the → ดูว่าคำนามนั้นเฉพาะเจาะจงหรือทั่วไป</li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>few vs a few</strong>: few = น้อยแทบไม่มี (มองลบ) · a few = พอมีบ้าง (มองบวก) — แปลไทย ‘น้อย’ เหมือนกัน ต้องดูนัย</li><li><strong>little vs a little</strong>: เหมือน few/a few แต่กับนับไม่ได้</li><li><strong>another vs other</strong>: another + เอกพจน์ · other + พหูพจน์ · the other + เอกพจน์/พหูพจน์เจาะจง</li><li><strong>a number of vs the number of</strong> (ดู p5-subject-verb)</li><li><strong>most vs the most</strong>: most = ส่วนใหญ่ (most people) · the most = มากที่สุด (the most reliable)</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>แปล ‘น้อย’ เหมือนกันแล้วเลือก few/little ปนกัน — เช็คก่อนว่าคำนามนับได้หรือนับไม่ได้</li><li>ใช้ ‘another + plural’ (*another staffs*) — ผิด; ต้อง other staff</li><li>ใช้ ‘the most’ ทุกกรณี — ถ้าแปลว่า ‘ส่วนใหญ่’ คือ most (most of the time)</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "1) ดูว่าคำนามหลังช่องว่างนับได้/นับไม่ได้/เอกพจน์/พหูพจน์ 2) ดูว่าความหมายเป็นมองลบ (few/little) หรือมองบวก (a few/a little) 3) สำหรับ a/the: ดูว่าเฉพาะเจาะจงหรือยัง — ตอบใน 3 วินาที" },

    { type: "cheatsheet", html: "<ul><li>each/every + เอกพจน์ · each of, neither of, either of + พหูพจน์ + กริยาเอกพจน์</li><li>few/a few + พหูพจน์ (few = แทบไม่มี) · little/a little + นับไม่ได้</li><li>many + พหูพจน์ · much + นับไม่ได้ · most + พหูพจน์/นับไม่ได้ · most of the + noun</li><li>a number of → พหูพจน์ · the number of → เอกพจน์</li><li>another + เอกพจน์ · other + พหูพจน์ · the other + เจาะจง · the others (ไม่มีคำนามตาม)</li><li>a/an = อันใดอันหนึ่ง/ครั้งแรก · the = เจาะจง/ที่เดียว/รู้จักกัน · Ø = ทั่วไป/นับไม่ได้</li></ul>" }
  ],
  quiz: [
    { no: 1, stem: " ------- of the checklist items must be completed before the first day.", options: ["Each", "Every", "Both", "Many"], answer: "A", tags: ["quantifier"], difficulty: "easy", translationTh: "แต่ละรายการในเช็กลิสต์ต้องเสร็จก่อนวันแรก", explain: { why: "โครงสร้าง Each of + พหูพจน์ (the checklist items) → แต่ละรายการ", wrong: { B: "Every — ไม่ใช้กับ of: ‘*Every of the items*’ ผิดไวยากรณ์", C: "Both — สองสิ่งเท่านั้น", D: "Many — many of the items เป็นไปได้ไวยากรณ์แต่ความหมายไม่ตรงกับ ‘แต่ละรายการต้องเสร็จก่อนวันแรก’ ที่ต้องการความแน่นอนรายรายการ" }, tip: "Each of + plural · every + singular (ไม่มี of)" } },
    { no: 2, stem: "We have ------- time before the deadline, so let's be efficient.", options: ["few", "a few", "little", "a little"], answer: "C", tags: ["quantifier"], difficulty: "medium", translationTh: "เรามีเวลาเหลือน้อยมากก่อนกำหนด ดังนั้นมาทำให้มีประสิทธิภาพ", explain: { why: "time นับไม่ได้ → little (น้อยมาก) · บริบทต้องเร่งด่วน", wrong: { A: "few — ใช้กับนับได้", B: "a few — นับได้", D: "a little — แปลว่า ‘พอมีบ้าง’ (มองบวก) ไม่เข้ากับการเร่ง" }, tip: "นับไม่ได้ + น้อยมาก = little" } },
    { no: 3, stem: "The company has ------- offices across Southeast Asia.", options: ["much", "many", "a little", "little"], answer: "B", tags: ["quantifier"], difficulty: "easy", translationTh: "บริษัทมีสำนักงานหลายแห่งทั่วเอเชียตะวันออกเฉียงใต้", explain: { why: "offices นับได้พหูพจน์ → many", wrong: { A: "much — นับไม่ได้", C: "a little — นับไม่ได้", D: "little — นับไม่ได้" }, tip: "many + plural" } },
    { no: 4, stem: " ------- of the budget has been spent on marketing.", options: ["Many", "Few", "A number", "Most"], answer: "D", tags: ["quantifier"], difficulty: "medium", translationTh: "งบประมาณส่วนใหญ่ถูกใช้ไปกับการตลาด", explain: { why: "Most of the + นับไม่ได้ (budget) → กริยาเอกพจน์ has", wrong: { A: "Many — ต้องตามด้วย of the + พหูพจน์นับได้", B: "Few — พหูพจน์นับได้", C: "A number — a number of + พหูพจน์ (a number of budgets ไม่เข้า)" }, tip: "most of + noun" } },
    { no: 5, stem: "The number of unread e-mails in her inbox ------- grown to over 300.", options: ["have", "has", "are", "were"], answer: "B", tags: ["quantifier", "subject-verb-agreement"], difficulty: "hard", translationTh: "จำนวนอีเมลที่ยังไม่ได้อ่านในกล่องของเธอเพิ่มขึ้นเกิน 300", explain: { why: "The number of + พหูพจน์ → กริยาเอกพจน์ → has", wrong: { A: "have — พหูพจน์", C: "are — พหูพจน์", D: "were — พหูพจน์" }, tip: "the number of → singular" } },
    { no: 6, stem: " ------- employees prefer the new hybrid work policy.", options: ["Most", "Much", "A little", "Little"], answer: "A", tags: ["quantifier"], difficulty: "easy", translationTh: "พนักงานส่วนใหญ่ชอบนโยบายทำงานไฮบริดใหม่", explain: { why: "employees พหูพจน์ → most", wrong: { B: "Much — นับไม่ได้", C: "A little — นับไม่ได้", D: "Little — นับไม่ได้" }, tip: "most + plural" } },
    { no: 7, stem: "Please send the proposal to our main office and ------- copies to the Bangkok branch.", options: ["the other", "others", "other", "another"], answer: "C", tags: ["quantifier"], difficulty: "hard", translationTh: "โปรดส่งข้อเสนอไปยังสำนักงานหลักและสำเนาอื่น ๆ ไปที่สาขากรุงเทพฯ", explain: { why: "other + พหูพจน์ (copies) → other copies = สำเนาอื่น ๆ", wrong: { A: "the other — เจาะจง ‘อีกฝั่ง’ (one of the two) ไม่เข้ากับหลายสำเนา", B: "others — ใช้เป็นคำนามไม่มีคำนามตาม (send the others)", D: "another — ต้องตามด้วยเอกพจน์" }, tip: "other + plural noun" } },
    { no: 8, stem: " ------- the team completed the certification this month.", options: ["Many", "Each", "Everyone", "All of"], answer: "D", tags: ["quantifier"], difficulty: "medium", translationTh: "ทีมทั้งหมดทำใบรับรองเสร็จเดือนนี้", explain: { why: "All of the + กลุ่ม (team) — ตามเนื้อความ ‘ทีมทั้งหมด’; กริยาเอกพจน์ completed ทำงานได้ทั้งสองแบบแต่ All of เข้ากับความหมายทั้งทีม", wrong: { A: "Many — + พหูพจน์ (teams)", B: "Each — แปลว่าแต่ละคน ๆ แต่ไม่เข้ากับ ‘the team completed’ แบบหน่วยเดียว", C: "Everyone — ใช้เป็นสรรพนามคน ไม่นำ of the" }, tip: "all of the + singular collective" } },
    { no: 9, stem: "He is looking for ------- assistant who can start immediately.", options: ["a", "an", "the", "Ø"], answer: "B", tags: ["quantifier"], difficulty: "easy", translationTh: "เขากำลังมองหาผู้ช่วยสักคนที่เริ่มงานได้ทันที", explain: { why: "assistant ขึ้นต้นด้วยเสียงสระ /ə/ → ใช้ an (article ดูจากเสียง ไม่ใช่ตัวสะกด)", wrong: { A: "a — ใช้กับเสียงพยัญชนะ (a report, a manager, a university /juː/) ไม่ใช่ an assistant", C: "the — ใช้เมื่อเจาะจงว่าเป็นผู้ช่วยคนไหน (the assistant we hired)", D: "Ø — นามนับได้เอกพจน์ต้องมี article" }, tip: "an + vowel sound: an engineer, an hour (h ไม่ออกเสียง) · a university (ju-)" } },
    { no: 10, stem: " ------- the clients who attended the launch signed up for demos.", options: ["Most of", "Much of", "Little of", "Few of"], answer: "A", tags: ["quantifier"], difficulty: "medium", translationTh: "ลูกค้าส่วนใหญ่ที่มางานเปิดตัวลงทะเบียนขอชมการสาธิต", explain: { why: "Most of the + พหูพจน์ (clients) → most of", wrong: { B: "Much of — ใช้กับนับไม่ได้ (much of the budget)", C: "Little of — นับไม่ได้และมองลบ", D: "Few of — ต้องมี of the ได้ แต่ความหมาย ‘น้อยมาก’ ไม่เข้ากับข้อความที่บอกว่าลงทะเบียน (มองบวก)" }, tip: "most of the + plural/uncountable" } }
  ]
};
