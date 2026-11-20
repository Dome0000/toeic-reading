// data/lessons/p5-pronouns.js — Module 1 · บทที่ 5
window.TOEIC.lessons["p5-pronouns"] = {
  id: "p5-pronouns",
  module: 1,
  order: 5,
  title: "Pronouns — สรรพนาม",
  frequency: "กลาง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> ข้อสอบให้ช่องว่างแล้วให้ตัวเลือกเป็นสรรพนามหลายรูป — วัดว่าเราดู <em>หน้าที่</em> (Subject/Object/Possessive) ได้ถูกต้อง และอ้างอิงถูกตัวในบริบท</p>" },

    { type: "table", title: "ตารางสรรพนาม", headers: ["ชนิด", "Subject", "Object", "Possessive adj.", "Possessive pron.", "Reflexive"], rows: [
      ["1st sing.", "I", "me", "my", "mine", "myself"],
      ["2nd sing./pl.", "you", "you", "your", "yours", "yourself / yourselves"],
      ["3rd sing. (ผู้ชาย)", "he", "him", "his", "his", "himself"],
      ["3rd sing. (ผู้หญิง)", "she", "her", "her", "hers", "herself"],
      ["3rd sing. (สิ่งของ/บริษัท)", "it", "it", "its", "its", "itself"],
      ["1st pl.", "we", "us", "our", "ours", "ourselves"],
      ["3rd pl.", "they", "them", "their", "theirs", "themselves"]
    ]},

    { type: "table", title: "สรรพนามพิเศษที่ต้องรู้", headers: ["กลุ่ม", "ตัวอย่าง", "หลักการ"], rows: [
      ["Indefinite", "someone, everyone, everybody, no one, nobody, anyone", "กริยาตามเอกพจน์: Everyone <strong>has</strong> submitted the form."],
      ["each other / one another", "ซึ่งกันและกัน (สองคน vs หลายคน)", "The two partners support each other. / The team members support one another."],
      ["those + who/that", "คนที่…", "Those who finish early may leave."],
      ["this/that/these/those", "this = ใกล้/สิ่งที่เพิ่งพูด · that = ไกล/บริบทอื่น", "This suggests the market is recovering."],
      ["either / neither (pronoun)", "ทั้งสอง/ไม่มีทั้งสอง", "Either of the dates works for us."],
      ["whoever / whatever / whenever", "ใครก็ตาม/อะไรก็ตาม/เมื่อไรก็ตาม", "Whoever completes the course first receives a certificate."]
    ]},

    { type: "examples", title: "ตัวอย่างในบริบทธุรกิจ", items: [
      { en: "Employees may submit their expense reports online.", th: "พนักงานสามารถส่งรายงานค่าใช้จ่ายของพวกเขาออนไลน์ (their = ของพนักงาน — possessive adjective)" },
      { en: "The company will announce its quarterly results next week.", th: "บริษัทจะประกาศผลไตรมาสของบริษัทสัปดาห์หน้า (its = ของบริษัท — ดูว่าเป็นบริษัท ใช่ it)" },
      { en: "She taught herself to use the new CRM system.", th: "เธอเรียนรู้ด้วยตัวเองที่จะใช้ระบบ CRM ใหม่ (herself = ทำเองคนเดียว)" },
      { en: "Please forward the document to whoever is covering my desk.", th: "โปรดส่งเอกสารให้ใครก็ตามที่ดูแลโต๊ะของฉันในช่วงนั้น (whoever = subject of is covering)" },
      { en: "Those interested in the leadership program should apply by Friday.", th: "ผู้ที่สนใจโครงการผู้นำควรสมัครภายในวันศุกร์ (those = the people who)" },
      { en: "The two founders worked with each other for a decade.", th: "ผู้ก่อตั้งทั้งสองทำงานร่วมกันมาสิบปี (two → each other)" },
      { en: "If anyone has questions, please raise your hand.", th: "ถ้าใครมีคำถาม โปรดยกมือขึ้น (anyone + กริยาเอกพจน์ has)" },
      { en: "The manager reminded everyone to log their hours.", th: "ผู้จัดการเตือนทุกคนให้บันทึกชั่วโมงทำงานของตน (their ใช้กับ singular they ตาม everyone ได้ในภาษาปัจจุบัน)" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>ช่องว่าง + คำนาม (___ report) → <strong>possessive adjective</strong> (my/your/his/her/its/our/their)</li><li>ช่องว่างไม่มีคำนามตาม และอยู่หน้ากริยา → <strong>subject pronoun</strong> (I/you/he/she/it/we/they)</li><li>ช่องว่างอยู่หลังกริยา/บุพบท → <strong>object pronoun</strong> (me/you/him/her/it/us/them)</li><li>ช่องว่าง + คำกริยา 'ด้วยตัวเอง' → <strong>reflexive</strong> (myself/yourself…)</li><li>ช่องว่างหมายถึง 'ของ…เอง' ไม่มีคำนามตาม → <strong>possessive pronoun</strong> (mine/yours/his/hers/its/ours/theirs)</li><li>ช่องว่างอยู่ในวลี 'those ___ + V' → <strong>who</strong> (those who…)</li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>its vs it's</strong>: its = ของมัน/ของบริษัท; it's = it is / it has — “The company released <u>its</u> annual report.”</li><li><strong>their vs there vs they're</strong>: their = ของพวกเขา; there = ที่นั้น; they're = they are</li><li><strong>its own / myself etc.</strong>: reflexive ใช้เมื่อประธาน = กรรม (she taught herself) — ไม่ใช้เมื่อเป็น object ที่ไม่ใช่ประธานเดียวกัน</li><li><strong>whoever is vs whomever is</strong>: whoever เป็นประธาน → is; whomever เป็นกรรม — TOEIC มักทดสอบ whoever + ประธาน</li><li><strong>this/that (singular) vs these/those (plural)</strong>: ดูว่าคำนามที่อ้างอิงเป็นเอกพจน์/พหูพจน์</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>เขียน its แยกกันเสมอ (it’s) เมื่อหมายถึง 'ของมัน' — จำไว้: possessive its <em>ไม่มี</em> apostrophe</li><li>ใช้ reflexive กับกรรมที่ไม่ใช่ประธานเดียวกัน: “*The manager sent the report to myself” — ถูกคือ “to me”</li><li>สับสน their/there/they're เพราะออกเสียงคล้ายกัน — อ่านประโยคเต็ม ๆ แล้วดูหน้าที่</li><li>ใช้ he/she กับบริษัทตามหลักไทย — ในอังกฤษ บริษัท = it (เช่น “The company announced its results”)</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "ดูช่องว่างก่อน-หลัง: (1) มีคำนามตาม → possessive adjective (2) ไม่มีอะไรตาม อยู่หน้ากริยา → subject (3) หลังกริยา/บุพบท ไม่มีคำนาม → object (4) มีเอง/ตัวเอง → reflexive — ตอบใน 2 วินาที ไม่ต้องแปลประโยคทั้งหมด" },

    { type: "cheatsheet", html: "<ul><li>___ + คำนาม → <strong>my/your/his/her/its/our/their</strong></li><li>หน้ากริยา ไม่มีคำนามตาม → <strong>I/you/he/she/it/we/they</strong></li><li>หลังกริยา/บุพบท → <strong>me/you/him/her/it/us/them</strong></li><li>ของ…เอง (ประธาน = กรรม) → <strong>myself/yourself/himself/herself/itself/ourselves/themselves</strong></li><li>'ของ…' ไม่มีคำนามตาม → <strong>mine/yours/his/hers/ours/theirs</strong></li><li>those + who = คนที่… · each other (2 คน) · one another (3+ คน)</li><li>everyone/everybody/anyone + กริยาเอกพจน์</li><li>บริษัท = it → <strong>its</strong> (ของบริษัท)</li></ul>" }
  ],
  quiz: [
    { no: 1, stem: "Please send the updated proposal to ------- by Thursday.", options: ["I", "me", "my", "mine"], answer: "B", tags: ["pronoun"], difficulty: "easy", translationTh: "โปรดส่งข้อเสนอที่อัปเดตให้ฉันภายในวันพฤหัสบดี", explain: { why: "หลังบุพบท to ต้องใช้ object pronoun → me", wrong: { A: "I เป็น subject form ใช้หน้ากริยา", C: "my เป็น possessive adjective ต้องมีคำนามตาม", D: "mine เป็น possessive pronoun 'ของฉัน' ไม่ใช้หลังบุพบทแบบนี้" }, tip: "to/for/with + object pronoun" } },
    { no: 2, stem: "The company celebrated ------- 25th anniversary last month.", options: ["it", "it's", "its", "itself"], answer: "C", tags: ["pronoun"], difficulty: "easy", translationTh: "บริษัทเฉลิมฉลองครบรอบ 25 ปีของบริษัทเมื่อเดือนที่แล้ว", explain: { why: "___ + 25th anniversary (คำนาม) → possessive adjective: its (ของบริษัท) — ไม่มี apostrophe", wrong: { A: "it เป็น subject pronoun ไม่ขยายคำนาม", B: "it's = it is ไม่ใช่ possessive", D: "itself reflexive ไม่ขยายคำนาม" }, tip: "its (possessive) ไม่มี '" } },
    { no: 3, stem: "The two departments agreed to support ------- on the joint project.", options: ["one another", "itself", "themselves", "each other"], answer: "D", tags: ["pronoun"], difficulty: "medium", translationTh: "ทั้งสองแผนกตกลงที่จะสนับสนุนซึ่งกันและกันในโปรเจกต์ร่วม", explain: { why: "สองฝ่าย → each other (ซึ่งกันและกัน)", wrong: { A: "one another — ใช้เมื่อ 3 ฝ่ายขึ้นไป", B: "itself — singular และความหมายไม่เข้า", C: "themselves — แปลว่า 'ตัวเอง' ผิดความหมาย" }, tip: "2 ฝ่าย → each other · 3+ ฝ่าย → one another" } },
    { no: 4, stem: " ------- leads the project must have at least five years of experience.", options: ["Whoever", "That", "Who", "Whomever"], answer: "A", tags: ["pronoun", "relative-clause"], difficulty: "hard", translationTh: "ใครก็ตามที่เป็นหัวหน้าโปรเจกต์ต้องมีประสบการณ์อย่างน้อยห้าปี", explain: { why: "ช่องว่างเป็นประธานของ both RC (whoever leads) และกริยาหลัก (must have) → whoever (subject form)", wrong: { B: "That — ไม่ใช้ขึ้นต้นประโยคเป็น subject pronoun แบบนี้", C: "Who — ขาดความหมาย 'ใครก็ตาม' (any person who); who ธรรมดาใช้ถามหรือขยายเท่านั้น", D: "Whomever — object form ใช้เป็นประธานไม่ได้" }, tip: "whoever + V (ประธาน) · whomever + S + V (กรรม)" } },
    { no: 5, stem: "The team members congratulated ------- on exceeding the quarterly target.", options: ["itself", "themselves", "each other", "it"], answer: "B", tags: ["pronoun"], difficulty: "medium", translationTh: "สมาชิกในทีมแสดงความยินดีกับตัวเองที่ทำได้เกินเป้าหมายไตรมาส", explain: { why: "ประธาน The team members (พหูพจน์) = กรรม (members ยินดีกับ members เอง) → reflexive plural: themselves", wrong: { A: "itself — เอกพจน์ ไม่ match กับ members", C: "each other — หมายถึง 2 คนสลับกันยินดี ผิดความหมาย", D: "it — subject/object เอกพจน์ ไม่ match" }, tip: "ประธาน = กรรม และเป็นพหูพจน์ → themselves" } },
    { no: 6, stem: " ------- interested in the training workshop should register by May 15.", options: ["They", "Them", "Those", "These"], answer: "C", tags: ["pronoun"], difficulty: "medium", translationTh: "ผู้ที่สนใจเข้าร่วมเวิร์กช็อปฝึกอบรมควรลงทะเบียนภายในวันที่ 15 พฤษภาคม", explain: { why: "โครงสร้าง those + past participle/adjective = ผู้ที่… → Those interested in…", wrong: { A: "They — ไม่ขยายประโยคนี้ถูกวิธี", B: "Them — object form ขึ้นต้นประโยคไม่ได้", D: "These — ไม่ใช้กับ past participle แบบนี้ (these interested ผิด)" }, tip: "Those interested/willing/responsible → ผู้ที่… " } },
    { no: 7, stem: "If ------- has questions after the orientation, please e-mail HR.", options: ["they", "someone", "everyone", "anyone"], answer: "D", tags: ["pronoun"], difficulty: "easy", translationTh: "ถ้าใครมีคำถามหลังการปฐมนิเทศ โปรดส่งอีเมลหาฝ่าย HR", explain: { why: "เงื่อนไข 'ถ้าใครก็ตาม' ใช้ anyone + กริยาเอกพจน์ (has)", wrong: { A: "they — subject form พหูพจน์ กริยา has ไม่ match (they have)", B: "someone — ใช้ในบอกเล่าทั่วไป ไม่ใช่เงื่อนไข 'ถ้าใครก็ตาม'", C: "everyone — หมายถึง 'ทุกคน' ไม่ใช่ 'ใครก็ตาม'" }, tip: "if + anyone (anybody) ในเงื่อนไข" } },
    { no: 8, stem: "This proposal is stronger than ------- we received last year.", options: ["that", "those", "this", "it"], answer: "A", tags: ["pronoun"], difficulty: "hard", translationTh: "ข้อเสนอนี้แข็งแกร่งกว่าข้อเสนอที่เราได้รับปีที่แล้ว", explain: { why: "เปรียบเทียบเอกพจน์: this proposal vs that (proposal) ที่เราได้รับปีที่แล้ว → that (เอกพจน์)", wrong: { B: "those — พหูพจน์ ใช้กับ proposals", C: "this — 'อันนี้' แปลว่าเทียบกับตัวเอง ไม่เป็นประโยคเปรียบเทียบที่ถูก", D: "it — ไม่ใช้เปรียบเทียบแบบนี้" }, tip: "เปรียบเทียบ: singular this vs that · plural these vs those" } },
    { no: 9, stem: "The director told ------- that the budget would increase.", options: ["we", "us", "our", "ours"], answer: "B", tags: ["pronoun"], difficulty: "easy", translationTh: "ผู้อำนวยการบอกพวกเราว่างบประมาณจะเพิ่มขึ้น", explain: { why: "told + object → us (object pronoun)", wrong: { A: "we — subject form ใช้หลัง told ไม่ได้", C: "our — possessive adjective ต้องมีคำนามตาม", D: "ours — possessive pronoun ใช้ตามหลังไม่ได้" }, tip: "told/give/send + object pronoun" } },
    { no: 10, stem: "The company plans to expand ------- operations into Southeast Asia.", options: ["them", "it's", "its", "their"], answer: "C", tags: ["pronoun"], difficulty: "medium", translationTh: "บริษัทวางแผนขยายการดำเนินงานของบริษัทไปยังเอเชียตะวันออกเฉียงใต้", explain: { why: "its = ของบริษัท (เอกพจน์ singular possessive) — บริษัทเป็นเอกพจน์", wrong: { A: "them — object form ไม่ใช้ขยายคำนาม", B: "it's = it is ไม่ใช่ possessive", D: "their — หมายถึงพหูพจน์ (หลายบริษัท) ผิดกับบริษัทเอกพจน์" }, tip: "บริษัทเดียว = it → its (เอกพจน์ possessive)" } }
  ]
};
