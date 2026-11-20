/* js/views/plan.js — แผนการเรียน 4 สัปดาห์ */
(function () {
  var App = window.App = window.App || {};
  var utils = App.utils;

  var WEEKS = [
    { title: "สัปดาห์ที่ 1 — ปูพื้นฐาน Part 5", items: [
      { label: "อ่าน Module 0: รู้จักข้อสอบและกลยุทธ์", href: "#/lesson/m0-exam-overview" },
      { label: "Parts of Speech & Word Forms (สำคัญที่สุด)", href: "#/lesson/p5-word-forms" },
      { label: "Verb Tenses และคำบอกเวลา", href: "#/lesson/p5-verb-tenses" },
      { label: "Subject–Verb Agreement", href: "#/lesson/p5-subject-verb" },
      { label: "Active vs Passive Voice", href: "#/lesson/p5-active-passive" },
      { label: "Prepositions + collocations", href: "#/lesson/p5-prepositions" },
      { label: "ฝึกคำศัพท์ธุรกิจ 2 หมวด (Office, HR)", href: "#/vocab/office" }
    ]},
    { title: "สัปดาห์ที่ 2 — Grammar ที่เหลือ + Vocabulary", items: [
      { label: "Pronouns, Relative Clauses, Conjunctions", href: "#/lesson/p5-pronouns" },
      { label: "Gerund vs Infinitive, Participles", href: "#/lesson/p5-gerund-infinitive" },
      { label: "Comparison, Conditionals, Modals & Causatives", href: "#/lesson/p5-comparison" },
      { label: "Quantifiers & Adverbs", href: "#/lesson/p5-quantifiers" },
      { label: "Word Families + Business Collocations", href: "#/lesson/m2-word-families" },
      { label: "ทำ Part Practice (Part 5) จาก Mock Test 1 จับเวลา 11 นาที", href: "#/exams" }
    ]},
    { title: "สัปดาห์ที่ 3 — Part 6 + Part 7 พื้นฐาน", items: [
      { label: "Module 3: Part 6 ทุกบท (รวม Sentence Insertion)", href: "#/lesson/m3-part6-overview" },
      { label: "Module 4: ประเภทเอกสาร + คำถาม 8 ประเภท", href: "#/lesson/m4-document-types" },
      { label: "Paraphrase Recognition (ตาราง 40+ คู่)", href: "#/lesson/m4-paraphrase" },
      { label: "Skimming & Scanning + บริหารเวลา", href: "#/lesson/m4-skim-scan" },
      { label: "ทำ Part Practice (Part 6 และ Part 7)", href: "#/exams" }
    ]},
    { title: "สัปดาห์ที่ 4 — Mock Exam + แก้จุดอ่อน", items: [
      { label: "ทำ Mock Test 1 เต็มรูปแบบ (75 นาที)", href: "#/exams" },
      { label: "วิเคราะห์จุดอ่อนจากหน้าผลสอบ → ทบทวนบทที่เกี่ยวข้อง", href: "#/history" },
      { label: "ทบทวนสมุดข้อผิดจนตอบถูกติดกัน 2 ครั้งทุกข้อ", href: "#/mistakes" },
      { label: "ทำ Mock Test 2 เต็มรูปแบบ (75 นาที)", href: "#/exams" },
      { label: "พิมพ์ Cheat Sheet ทบทวนก่อนวันสอบ", href: "#/lesson/m6-trap-cheatsheet" }
    ]}
  ];

  function render(params, query, appEl) {
    var states = App.store.getLessonStates();
    var html = '<div class="crumbs muted" style="font-size:.85rem"><a href="#/">หน้าแรก</a> › แผนการเรียน</div>'
      + "<h1>แผนการเรียน 4 สัปดาห์</h1><p class=\"muted\">เหมาะสำหรับผู้เรียน ~400–600 ที่ต้องการถึง 750+ · วันละ 45–90 นาที · ติ๊กถูกเมื่อทำเสร็จ (บันทึกไว้ในเครื่องนี้)</p>";
    WEEKS.forEach(function (week, wi) {
      html += '<section class="card" style="margin:14px 0"><h2 style="margin-top:0">' + utils.escapeHtml(week.title) + "</h2><ul style=\"list-style:none;padding:0;margin:0\">";
      week.items.forEach(function (item, ii) {
        var key = "plan-w" + wi + "-i" + ii;
        var checked = App.store.get("planChecks", {})[key] === true;
        html += '<li style="display:flex;gap:10px;align-items:center;padding:6px 4px;border-bottom:1px dashed var(--border)">'
          + '<input type="checkbox" id="' + key + '" data-plan-key="' + key + '"' + (checked ? " checked" : "") + ' aria-label="' + utils.escapeHtml(item.label) + '">'
          + '<a href="' + utils.escapeHtml(item.href) + '" style="text-decoration:none">' + utils.escapeHtml(item.label) + "</a></li>";
      });
      html += "</ul></section>";
    });
    appEl.innerHTML = html;
    appEl.addEventListener("change", function (ev) {
      var key = ev.target.getAttribute && ev.target.getAttribute("data-plan-key");
      if (!key) return;
      var checks = App.store.get("planChecks", {});
      checks[key] = ev.target.checked;
      App.store.set("planChecks", checks);
    });
  }

  App.registerRoute("#/plan", render);
  App.views = App.views || {};
  App.views.plan = render;
})();
