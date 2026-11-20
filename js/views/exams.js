/* js/views/exams.js — หน้าเลือกชุดสอบและโหมด */
(function () {
  var App = window.App = window.App || {};
  var utils = App.utils;

  var PART_TIME = { 5: 11, 6: 9, 7: 55 };
  var PART_NAME = { 5: "Part 5 — Incomplete Sentences (30 ข้อ)", 6: "Part 6 — Text Completion (16 ข้อ)", 7: "Part 7 — Reading Comprehension (54 ข้อ)" };

  function examList() {
    return Object.keys(window.TOEIC.exams || {}).map(function (id) {
      return window.TOEIC.exams[id];
    }).sort(function (a, b) { return String(a.id).localeCompare(String(b.id)); });
  }

  function render(params, query, appEl) {
    var current = App.store.getCurrentExam();
    var attempts = App.store.getAttempts().length;
    var html = '<div class="lesson-hero"><div class="crumbs"><a href="#/">หน้าแรก</a> › Mock Exam</div>'
      + "<h1>Mock Exam</h1>"
      + '<p class="muted">ข้อสอบเสมือนจริง 100 ข้อ 75 นาที ตาม format จริง — ทำเต็มรูปแบบ ฝึกเฉพาะพาร์ท หรือสุ่มซ้อมรายหัวข้อ</p></div>';

    // resume banner
    if (current && !current.submitted) {
      var left = current.endAt ? Math.max(0, Math.round((current.endAt - Date.now()) / 60000)) : null;
      html += '<div class="callout tip no-print" style="margin-bottom:14px"><div class="callout-title">ทำต่อจากที่ค้างไว้</div><div>ชุด <strong>' + utils.escapeHtml(current.title || current.examId) + '</strong> — โหมด ' + utils.escapeHtml(current.mode || "full")
        + (left != null ? " · เหลือเวลาประมาณ " + left + " นาที" : "")
        + '<br><div style="margin-top:8px"><a class="btn btn-primary" href="#/exam/' + utils.escapeHtml(current.examId || "_") + "/" + utils.escapeHtml(current.mode || "full") + (current.mode === "part" ? "?part=" + (current.part || 5) : "") + (current.mode === "drill" ? "?tag=" + encodeURIComponent(current.drillTag || "") + "&limit=" + (current.drillLimit || 10) : "") + '">ทำต่อ →</a></div></div></div>';
    }

    var exams = examList();
    if (!exams.length) {
      html += '<div class="card"><h2>ยังไม่มีชุดข้อสอบ</h2><p class="muted">ชุด Mock Test จะถูกเพิ่มในเฟสถัดไป (Phase 6–8) — ระหว่างนี้คุณสามารถฝึกจากบทเรียนและแบบทดสอบท้ายบทได้</p><p><a class="btn btn-primary" href="#/lessons">ไปหน้าบทเรียน</a></p></div>';
    } else {
      html += '<div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(320px,1fr))">';
      exams.forEach(function (exam) {
        html += '<div class="card">'
          + '<h2 style="margin-top:0">' + utils.escapeHtml(exam.title || exam.id) + "</h2>"
          + '<p class="muted">100 ข้อ · 75 นาที · คะแนนเต็ม Reading 495</p>'
          + '<a class="btn btn-primary" href="#/exam/' + utils.escapeHtml(exam.id) + '/full">เริ่มสอบเต็มรูปแบบ →</a>'
          + '<h3 style="margin-bottom:6px">Part Practice</h3>'
          + '<form class="part-practice-form" data-exam="' + utils.escapeHtml(exam.id) + '" style="display:flex;flex-direction:column;gap:6px">'
          + [5, 6, 7].map(function (p) {
              return '<label style="display:flex;justify-content:space-between;align-items:center;gap:10px"><span>' + PART_NAME[p] + '</span>'
                + '<input type="checkbox" name="part" value="' + p + '" aria-label="เลือก ' + PART_NAME[p] + '"></label>';
            }).join("")
          + '<label style="display:flex;gap:8px;align-items:center;font-size:.9rem"><input type="checkbox" name="timed" value="1" checked> จับเวลาตามที่แนะนำ (P5 11 · P6 9 · P7 55 นาที)</label>'
          + '<label style="display:flex;gap:8px;align-items:center;font-size:.9rem"><input type="checkbox" name="instant" value="1"> เฉลยทันทีหลังตอบ (ฝึกซ้อม)</label>'
          + '<button class="btn btn-outline" type="submit">เริ่ม Part Practice →</button>'
          + "</form>"
          + "</div>";
      });
      html += "</div>";
    }

    // Topic Drill + Mistake Notebook
    var tagEntries = Object.keys(window.TOEIC.tags || {}).map(function (t) { return { id: t, th: window.TOEIC.tags[t].th }; });
    html += '<div class="card" style="margin-top:18px"><h2 style="margin-top:0">Topic Drill — สุ่มซ้อมรายหัวข้อ</h2><p class="muted">สุ่มข้อตาม tag จากทุกชุดสอบและแบบทดสอบท้ายบท (Part 6/7 จะแสดงบทความประกอบ)</p>'
      + '<form id="drill-form" style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">'
      + '<select name="tag" aria-label="เลือก tag" style="padding:8px;border:1px solid var(--border);border-radius:8px;background:var(--surface);color:var(--text)">'
      + tagEntries.map(function (t) { return '<option value="' + utils.escapeHtml(t.id) + '">' + utils.escapeHtml(t.th) + "</option>"; }).join("")
      + "</select>"
      + '<select name="limit" aria-label="จำนวนข้อ" style="padding:8px;border:1px solid var(--border);border-radius:8px;background:var(--surface);color:var(--text)"><option value="10">10 ข้อ</option><option value="20">20 ข้อ</option></select>'
      + '<button class="btn btn-primary" type="submit">สุ่มซ้อม →</button>'
      + "</form></div>";

    var mistakes = App.store.getMistakes();
    var mistakeCount = Object.keys(mistakes).length;
    html += '<div class="card" style="margin-top:18px"><h2 style="margin-top:0">สมุดข้อผิด <span class="badge badge-soft">' + mistakeCount + ' ข้อ</span></h2>'
      + (mistakeCount ? '<p class="muted">ข้อที่ตอบผิดจากทั้ง Mock และ quiz (ตอบถูกติดกัน 2 ครั้งจึงนำออก)</p><p><a class="btn btn-outline" href="#/mistakes">เปิดสมุดข้อผิด →</a></p>'
                      : '<p class="muted">ยังไม่มีข้อที่ตอบผิด — ทำข้อสอบหรือควิซก่อน แล้วข้อที่ผิดจะถูกเก็บไว้ที่นี่โดยอัตโนมัติ</p>')
      + "</div>";

    appEl.innerHTML = html;

    // part practice submit
    appEl.querySelectorAll(".part-practice-form").forEach(function (form) {
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var examId = form.getAttribute("data-exam");
        var parts = Array.prototype.map.call(form.querySelectorAll('input[name="part"]:checked'), function (el) { return parseInt(el.value, 10); });
        if (!parts.length) { App.utils.toast("เลือกอย่างน้อย 1 Part ก่อน"); return; }
        var timed = form.querySelector('input[name="timed"]').checked ? 1 : 0;
        var instant = form.querySelector('input[name="instant"]').checked ? 1 : 0;
        App.navigate("#/exam/" + examId + "/part?part=" + parts.join(",") + "&timed=" + timed + "&instant=" + instant);
      });
    });
    var drillForm = appEl.querySelector("#drill-form");
    if (drillForm) {
      drillForm.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var tag = drillForm.querySelector('select[name="tag"]').value;
        var limit = drillForm.querySelector('select[name="limit"]').value;
        App.navigate("#/exam/_/drill?tag=" + encodeURIComponent(tag) + "&limit=" + limit);
      });
    }
  }

  App.registerRoute("#/exams", render);
  App.views = App.views || {};
  App.views.exams = render;
})();
