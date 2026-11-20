// data/lessons/p5-gerund-infinitive.js — Module 1 · บทที่ 10
window.TOEIC.lessons["p5-gerund-infinitive"] = {
  id: "p5-gerund-infinitive",
  module: 1,
  order: 10,
  title: "Gerund vs Infinitive — การใช้ -ing กับ to + V",
  frequency: "กลาง",
  blocks: [
    { type: "text", html: "<p><strong>ทำไมบทนี้สำคัญ:</strong> ข้อสอบให้กริยาแล้วถามว่าตามด้วย gerund (V-ing) หรือ infinitive (to V) — ส่วนใหญ่เป็นการจำ collocation เช่น <em>look forward to + V-ing</em>, <em>plan + to V</em></p>" },

    { type: "table", title: "กริยา + Gerund (V-ing)", headers: ["กลุ่ม", "กริยา"], rows: [
      ["enjoy-like", "enjoy, like, love, hate, prefer, dislike, mind"],
      ["keep-stop", "keep, avoid, finish, postpone, delay, quit, stop, give up"],
      ["admit-deny", "admit, deny, consider, suggest, recommend, imagine, mind"],
      ["อื่นๆ", "practice, involve, include, entail, anticipate, appreciate, mention, risk, miss"]
    ]},

    { type: "table", title: "กริยา + Infinitive (to V)", headers: ["กลุ่ม", "กริยา"], rows: [
      ["plan-decide", "plan, decide, hope, expect, want, wish, need, intend, agree, refuse, promise"],
      ["manage-afford", "manage, afford, hesitate, fail, pretend, learn, choose, offer, prepare, arrange, agree"],
      ["want-need", "want, need, expect + to V"]
    ]},

    { type: "table", title: "ทั้งสองแบบแต่ความหมายต่างกัน", headers: ["กริยา", "+ V-ing", "+ to V"], rows: [
      ["stop", "หยุดการกระทำ (stop smoking = เลิกสูบ)", "หยุดเพื่อไปทำ (stop to smoke = หยุดเพื่อสูบ)"],
      ["remember", "จำว่าทำไปแล้ว (remember mailing = จำได้ว่าส่งแล้ว)", "จำไว้ว่าต้องทำ (remember to mail = อย่าลืมส่ง)"],
      ["forget", "ลืมว่าทำไปแล้ว", "ลืมที่จะทำ (อย่าลืมทำ)"],
      ["try", "ลองทำ (try restarting)", "พยายามทำ (try to restart)"],
      ["regret", "เสียใจที่ทำไปแล้ว", "เสียใจที่จะบอก (regret to inform you)"],
      ["go on", "ทำต่อไป (go on working)", "เปลี่ยนไปทำต่อ (go on to become)"]
    ]},

    { type: "table", title: "to + V-ing (preposition to)", headers: ["วลี", "ความหมาย"], rows: [
      ["look forward to + V-ing", "ตั้งตารอ"],
      ["be committed to + V-ing", "มุ่งมั่น"],
      ["be dedicated to + V-ing", "อุทิศ"],
      ["object to + V-ing", "คัดค้าน"],
      ["confess to + V-ing", "สารภาพ"],
      ["be accustomed to + V-ing", "เคยชิน"],
      ["get used to + V-ing", "ชินกับ"]
    ]},

    { type: "examples", title: "ตัวอย่างในบริบทธุรกิจ", items: [
      { en: "The team enjoyed working with the new vendor.", th: "ทีมสนุกกับการทำงานกับผู้ผลิตรายใหม่ (enjoy + V-ing)" },
      { en: "We look forward to meeting you at the conference.", th: "เรารอคอยที่จะพบคุณในงาน (look forward to + V-ing)" },
      { en: "The board decided to postpone the merger announcement.", th: "คณะกรรมการตัดสินใจเลื่อนการประกาศควบรวมกิจการ (decide + to V)" },
      { en: "Please avoid making personal calls during work hours.", th: "โปรดหลีกเลี่ยงการโทรส่วนตัวระหว่างทำงาน (avoid + V-ing)" },
      { en: "He managed to complete the audit ahead of schedule.", th: "เขาทำการตรวจสอบเสร็จก่อนกำหนดได้ (manage + to V)" },
      { en: "The policy involves reviewing all contracts annually.", th: "นโยบายนี้รวมถึงการทบทวนสัญญาทุกปี (involve + V-ing)" },
      { en: "We regret to inform you that the position has been filled.", th: "เราเสียใจที่ต้องแจ้งว่าตำแหน่งนี้ได้รับการบรรจุแล้ว (regret to inform)" },
      { en: "She promised to send the revised proposal by Friday.", th: "เธอสัญญาว่าจะส่งข้อเสนอที่แก้ไขภายในวันศุกร์ (promise + to V)" }
    ]},

    { type: "clue", title: "เห็นอะไร → ตอบอะไร", html: "<ul><li>เห็นกริยา enjoy/avoid/finish/postpone/suggest/recommend/admit/deny/mind/consider/practice → <strong>V-ing</strong></li><li>เห็นกริยา plan/decide/hope/expect/want/agree/refuse/promise/manage/afford/intend → <strong>to V</strong></li><li>เห็น <strong>look forward to / be committed to / object to / be dedicated to</strong> → <strong>V-ing</strong> (to เป็นบุพบท)</li><li>เห็นช่องว่าง <strong>ต้นประโยค</strong> (เป็นประธาน) → <strong>Gerund</strong> (e.g., <em>Submitting the report on time is essential.</em>)</li><li>เห็นกริยา stop/remember/forget/try/regret → ดูความหมายประกอบ</li></ul>" },

    { type: "callout", tone: "trap", title: "กับดักที่ข้อสอบชอบใช้", html: "<ul><li><strong>look forward to + V-ing</strong>: Do not choose ‘to meet’ — to เป็นบุพบท ไม่ใช่ infinitive</li><li><strong>enjoy to V</strong> ผิดเสมอ — enjoy + V-ing เท่านั้น</li><li><strong>suggest to V</strong> ผิดเสมอ — suggest + V-ing / suggest that + S + V1</li><li><strong>plan + V-ing</strong> ผิด — plan + to V เท่านั้น</li><li><strong>postpone to V</strong> ผิด — postpone + V-ing</li><li><strong>remember to mail</strong> (อย่าลืมส่ง) vs <strong>remember mailing</strong> (จำได้ว่าส่งแล้ว)</li></ul>" },
    { type: "callout", tone: "thai-mistake", title: "จุดที่คนไทยมักพลาด", html: "<ul><li>เห็น to แล้วรีบเลือก to + V เสมอ — look forward to / committed to / object to ต้องตามด้วย V-ing</li><li>ใช้ ‘suggest to do’ ตามรูปแบบไทย ‘เสนอให้ทำ’ — ต้อง suggest doing / suggest that you do</li><li>ลืมว่า gerund ใช้เป็นประธานได้: ‘Completing the task is mandatory.’</li></ul>" },
    { type: "callout", tone: "tip", title: "เทคนิคทำให้เร็ว", html: "จำ 2 รายการทอง: (1) enjoy/avoid/finish/postpone/suggest/admit + V-ing (2) plan/decide/hope/want/agree/refuse/manage + to V — ถ้าเห็นกริยาอื่น ให้มองหา to นำหน้าหรือไม่ (possessive light quiz)" },

    { type: "cheatsheet", html: "<ul><li>V-ing: enjoy, avoid, finish, postpone, suggest, recommend, admit, deny, mind, consider, practice, involve, include, risk, miss</li><li>to V: plan, decide, hope, expect, want, agree, refuse, promise, manage, afford, intend, hesitate, fail</li><li>to + V-ing (to เป็นบุพบท): look forward to, be committed to, be dedicated to, object to, be accustomed to, get used to</li><li>ต้นประโยค: Gerund = ประธาน (Submitting … is)</li><li>stop/remember/forget/try/regret + ทั้งสองแบบ (ความหมายต่างกัน)</li></ul>" }
  ],
  quiz: [
    { no: 1, stem: "I look forward to ------- from you soon.", options: ["hear", "hearing", "heard", "be hear"], answer: "B", tags: ["gerund-infinitive"], difficulty: "easy", translationTh: "ฉันตั้งตารอที่จะได้ยินจากคุณเร็ว ๆ นี้", explain: { why: "look forward to + V-ing (to เป็นบุพบท) → hearing", wrong: { A: "hear — หลัง to เป็น infinitive เข้าใจผิดว่า to นำ infinitive", C: "heard — past participle ไม่เข้า", D: "be hear — ไม่มีรูปนี้" }, tip: "look forward to + V-ing" } },
    { no: 2, stem: "The committee decided ------- the proposal until next quarter.", options: ["postpone", "postponing", "to postpone", "postponed"], answer: "C", tags: ["gerund-infinitive"], difficulty: "easy", translationTh: "คณะกรรมการตัดสินใจเลื่อนข้อเสนอไปไตรมาสหน้า", explain: { why: "decide + to V → to postpone", wrong: { A: "postpone — ขาด to", B: "postponing — decide ต้อง to V ไม่ใช่ gerund", D: "postponed — past form ไม่ใช่หลัง infinitive" }, tip: "decide + to V" } },
    { no: 3, stem: "Please avoid ------- personal calls during meetings.", options: ["made", "make", "to make", "making"], answer: "D", tags: ["gerund-infinitive"], difficulty: "easy", translationTh: "โปรดหลีกเลี่ยงการโทรส่วนตัวระหว่างประชุม", explain: { why: "avoid + V-ing → making", wrong: { A: "made — V3 ไม่เข้า", B: "make — base form ไม่ใช่หลัง avoid", C: "to make — avoid ต้อง V-ing" }, tip: "avoid + V-ing" } },
    { no: 4, stem: " ------- the client before the deadline is essential.", options: ["Notifying", "Notified", "Notify", "To notifying"], answer: "A", tags: ["gerund-infinitive"], difficulty: "medium", translationTh: "การแจ้งลูกค้าก่อนกำหนดเป็นสิ่งจำเป็น", explain: { why: "ประธานของ is essential → Gerund (Notifying…)", wrong: { B: "Notified — V3 ไม่ใช่ประธาน", C: "Notify — imperative/base form ไม่ใช่ประธาน", D: "To notifying — ไม่มีรูปนี้ในภาษาอังกฤษ" }, tip: "Gerund เป็นประธานของประโยค" } },
    { no: 5, stem: "She suggested ------- the supplier directly.", options: ["to contact", "contact", "contacting", "contacted"], answer: "C", tags: ["gerund-infinitive"], difficulty: "medium", translationTh: "เธอเสนอให้ติดต่อผู้ผลิตโดยตรง", explain: { why: "suggest + V-ing → contacting", wrong: { A: "to contact — suggest + to V ผิด", B: "contact — base form ผิด", D: "contacted — V3 ผิด" }, tip: "suggest + V-ing" } },
    { no: 6, stem: "We regret ------- you that your application was not selected.", options: ["inform", "to inform", "informing", "informed"], answer: "B", tags: ["gerund-infinitive"], difficulty: "hard", translationTh: "เราเสียใจที่ต้องแจ้งว่าใบสมัครของคุณไม่ได้รับเลือก", explain: { why: "regret to inform = เสียใจที่ต้องบอก (แจ้งข่าวร้ายแบบเป็นทางการ)", wrong: { A: "inform — base form ไม่เข้า", C: "informing — regret informing = เสียใจที่เคยแจ้ง (ผิดความหมาย)", D: "informed — V3 ผิด" }, tip: "regret to do = เสียใจที่ต้องทำ · regret doing = เสียใจที่ทำไป" } },
    { no: 7, stem: "The team managed ------- the shipment on time despite the storm.", options: ["delivered", "deliver", "delivering", "to deliver"], answer: "D", tags: ["gerund-infinitive"], difficulty: "medium", translationTh: "ทีมส่งสินค้าได้ทันเวลาแม้จะมีพายุ", explain: { why: "manage + to V → to deliver", wrong: { A: "delivered — V3", B: "deliver — ขาด to", C: "delivering — manage ไม่คู่ V-ing" }, tip: "manage + to V" } },
    { no: 8, stem: "Please remember ------- the door when you leave.", options: ["to lock", "locking", "locked", "lock"], answer: "A", tags: ["gerund-infinitive"], difficulty: "medium", translationTh: "โปรดอย่าลืมล็อกประตูเมื่อคุณออกไป", explain: { why: "remember to lock = อย่าลืมล็อก (action ที่ต้องทำในอนาคต)", wrong: { B: "locking — remember locking = จำได้ว่าล็อกแล้ว (ผิดความหมาย)", C: "locked — V3 ผิด", D: "lock — ขาด to" }, tip: "remember to do = อย่าลืมทำ · remember doing = จำได้ว่าทำแล้ว" } },
    { no: 9, stem: "He admitted ------- the data-entry error.", options: ["to make", "making", "make", "made"], answer: "B", tags: ["gerund-infinitive"], difficulty: "medium", translationTh: "เขายอมรับว่าทำข้อผิดพลาดในการป้อนข้อมูล", explain: { why: "admit + V-ing → making", wrong: { A: "to make — admit + to V ผิด", C: "make — base form ผิด", D: "made — V3 ผิด" }, tip: "admit + V-ing" } },
    { no: 10, stem: "The new hire is committed to ------- all orientation sessions.", options: ["attend", "attends", "attending", "attended"], answer: "C", tags: ["gerund-infinitive"], difficulty: "hard", translationTh: "พนักงานใหม่ตั้งใจที่จะเข้าร่วมทุกช่วงปฐมนิเทศ", explain: { why: "be committed to + V-ing (to เป็นบุพบท) → attending", wrong: { A: "attend — เข้าใจผิดว่า to นำ infinitive", B: "attends — present form ผิด", D: "attended — V3 ผิด" }, tip: "committed to + V-ing" } }
  ]
};
