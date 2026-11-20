/* js/views/lessons.js — รายการบทเรียนทั้งหมดจัดกลุ่มตาม Module */
(function () {
  var App = window.App = window.App || {};
  var utils = App.utils;

  var MODULES = [
    { n: 0, title: "Module 0 — ภาพรวมและกลยุทธ์", desc: "รู้จักข้อสอบ การแบ่งเวลา และแผนการเรียน" },
    { n: 1, title: "Module 1 — Part 5 Grammar", desc: "ไวยากรณ์ที่ออกสอบบ่อย ทีละหัวข้อ" },
    { n: 2, title: "Module 2 — Part 5 Vocabulary", desc: "ตระกูลคำ คำคู่ คำสับสน และ Phrasal Verbs" },
    { n: 3, title: "Module 3 — Part 6 Text Completion", desc: "กลยุทธ์เติมคำในบทความและการแทรกประโยค" },
    { n: 4, title: "Module 4 — Part 7 Reading Comprehension", desc: "อ่านจับใจความ คำถาม 8 ประเภท และ Paraphrase" },
    { n: 6, title: "Module 6 — รวมกับดักและ Cheat Sheet", desc: "สรุปท้ายสุด พิมพ์พกไปอ่านได้" }
  ];
  App.moduleMeta = MODULES;

  function allLessonsSorted() {
    var lessons = window.TOEIC.lessons || {};
    return Object.keys(lessons).map(function (id) { return lessons[id]; })
      .sort(function (a, b) { return (a.module - b.module) || ((a.order || 0) - (b.order || 0)); });
  }

  function freqBadge(freq) {
    if (!freq) return "";
    var cls = freq === "สูง" ? "badge-freq-high" : freq === "กลาง" ? "badge-medium" : "badge-low";
    return ' <span class="badge ' + cls + '">ออกสอบ: ' + utils.escapeHtml(freq) + "</span>";
  }

  function render(params, query, appEl) {
    var lessons = allLessonsSorted();
    var states = App.store.getLessonStates();
    var doneCount = lessons.filter(function (l) { return states[l.id] && states[l.id].done; }).length;
    var total = lessons.length;

    var html = '<div class="lesson-hero"><div class="crumbs"><a href="#/">หน้าแรก</a> › บทเรียน</div>'
      + "<h1>บทเรียนทั้งหมด</h1>"
      + '<p class="muted">เรียนครบตามลำดับ Module 0 → 6 · ทำเครื่องหมายเสร็จอัตโนมัติเมื่อทำแบบทดสอบท้ายบทเสร็จ</p>'
      + '<div class="progress" role="progressbar" aria-valuenow="' + doneCount + '" aria-valuemin="0" aria-valuemax="' + total + '" aria-label="ความคืบหน้าบทเรียน"><div style="width:' + (total ? Math.round(doneCount / total * 100) : 0) + '%"></div></div>'
      + '<p class="muted" style="margin-top:6px">เรียนจบแล้ว ' + doneCount + "/" + total + " บท</p></div>";

    MODULES.forEach(function (mod) {
      var group = lessons.filter(function (l) { return l.module === mod.n; });
      html += '<section class="module-block"><h2 class="module-title">' + utils.escapeHtml(mod.title) + "</h2>"
        + '<p class="muted">' + utils.escapeHtml(mod.desc) + "</p>";
      if (!group.length) {
        html += '<p class="muted">ยังไม่มีบทเรียนในโมดูลนี้ (จะเพิ่มใน Phase ถัดไป)</p></section>';
        return;
      }
      html += '<div class="lesson-list">';
      group.forEach(function (l) {
        var st = states[l.id];
        var done = st && st.done;
        var quizInfo = st && st.quizTotal != null ? " · ควิซดีสุด " + st.quizBest + "/" + st.quizTotal : "";
        html += '<a class="lesson-item' + (done ? " done" : "") + '" href="#/lesson/' + utils.escapeHtml(l.id) + '">'
          + '<span class="status" aria-hidden="true"></span>'
          + "<span><strong>" + utils.escapeHtml(l.title) + "</strong><br><span class=\"muted\" style=\"font-size:.8em\">" + utils.escapeHtml(String(l.module)) + "." + utils.escapeHtml(String(l.order)) + freqBadge(l.frequency) + utils.escapeHtml(quizInfo) + "</span></span></a>";
      });
      html += "</div></section>";
    });

    appEl.innerHTML = html;
  }

  App.registerRoute("#/lessons", render);
  App.views = App.views || {};
  App.views.lessons = render;
})();
