/* js/views/home.js — Dashboard หน้าแรก */
(function () {
  var App = window.App = window.App || {};
  var utils = App.utils;

  function recommendedLesson() {
    var lessons = Object.keys(window.TOEIC.lessons || {}).map(function (id) { return window.TOEIC.lessons[id]; })
      .sort(function (a, b) { return (a.module - b.module) || ((a.order || 0) - (b.order || 0)); });
    var states = App.store.getLessonStates();
    for (var i = 0; i < lessons.length; i++) {
      var st = states[lessons[i].id];
      if (!st || !st.done) return lessons[i];
    }
    return null;
  }

  function weakestTags(attempts, limit) {
    var tally = {};
    attempts.forEach(function (a) {
      Object.keys(a.tagStats || {}).forEach(function (tag) {
        var s = a.tagStats[tag];
        if (!tally[tag]) tally[tag] = { total: 0, wrong: 0 };
        tally[tag].total += s.total;
        tally[tag].wrong += s.wrong;
      });
    });
    return Object.keys(tally).map(function (tag) {
      var t = tally[tag];
      return { tag: tag, total: t.total, wrong: t.wrong, accuracy: t.total ? 1 - t.wrong / t.total : 1 };
    }).filter(function (x) { return x.total >= 3; })
      .sort(function (a, b) { return a.accuracy - b.accuracy; })
      .slice(0, limit || 3);
  }

  function render(params, query, appEl) {
    var lessons = window.TOEIC.lessons || {};
    var lessonList = Object.keys(lessons).map(function (k) { return lessons[k]; });
    var states = App.store.getLessonStates();
    var doneCount = lessonList.filter(function (l) { return states[l.id] && states[l.id].done; }).length;
    var attempts = App.store.getAttempts().slice().sort(function (a, b) { return b.submittedAt - a.submittedAt; });
    var latest = attempts[0] || null;
    var recommended = recommendedLesson();
    var weak = weakestTags(attempts, 3);
    var totalPlanned = 33;

    var html = '';
    // hero
    html += '<div class="card" style="background:linear-gradient(135deg,var(--primary) 0%,#0d3a63 100%);color:#fff;border:none">'
      + '<h1 style="margin-top:0;color:#fff">TOEIC Reading Mastery</h1>'
      + '<p style="color:#dbe7f3;max-width:56ch">เตรียมสอบ TOEIC <strong>Reading Section</strong> (Part 5–7) อย่างเป็นระบบ — บทเรียนภาษาไทยเข้าใจง่าย ข้อสอบเสมือนจริง 100 ข้อ พร้อมเฉลยละเอียดและวิเคราะห์จุดอ่อนรายหัวข้อ</p>'
      + '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px">'
      + '<a class="btn" style="background:#fff;color:#0d3a63" href="#/exams">เริ่มสอบ Mock Exam</a>'
      + '<a class="btn btn-outline" style="border-color:#ffffff66;color:#fff;background:transparent" href="#/lessons">เริ่มเรียนบทเรียน</a>'
      + "</div></div>";

    html += '<div class="dash-grid" style="margin-top:16px">';

    // ความคืบหน้าบทเรียน
    html += '<div class="card dash-card"><h2 style="margin-top:0">ความคืบหน้าบทเรียน</h2>'
      + '<div class="stat-big">' + doneCount + '<span style="font-size:.45em;color:var(--text-muted)"> / ' + (lessonList.length || totalPlanned) + ' บท</span></div>'
      + '<div class="progress" style="margin:10px 0"><div style="width:' + (lessonList.length ? Math.round(doneCount / lessonList.length * 100) : 0) + '%"></div></div>'
      + (recommended ? '<p style="margin:0">ถัดไป: <a href="#/lesson/' + utils.escapeHtml(recommended.id) + '"><strong>' + utils.escapeHtml(recommended.title) + "</strong></a></p>" : '<p class="muted" style="margin:0">เรียนครบทุกบทแล้ว! 🎉</p>')
      + "</div>";

    // คะแนน Mock ล่าสุด
    html += '<div class="card dash-card"><h2 style="margin-top:0">คะแนน Mock ล่าสุด</h2>';
    if (latest) {
      html += '<div class="stat-big">' + latest.totalCorrect + '<span style="font-size:.45em;color:var(--text-muted)"> /100 ข้อ</span></div>'
        + '<p class="muted" style="margin:4px 0">' + utils.escapeHtml(latest.examTitle || latest.examId) + " · " + utils.formatDateTime(latest.submittedAt) + "</p>"
        + '<p style="margin:0"><a class="btn btn-outline" href="#/result/' + utils.escapeHtml(latest.id) + '">ดูผลละเอียด</a></p>';
    } else {
      html += '<p class="muted">ยังไม่มีประวัติการสอบ</p><p style="margin:0"><a class="btn btn-outline" href="#/exams">ทำ Mock Test ชุดแรก</a></p>';
    }
    html += "</div>";

    // 3 tag ที่อ่อนที่สุด
    html += '<div class="card dash-card"><h2 style="margin-top:0">จุดอ่อน 3 อันดับแรก</h2>';
    if (weak.length) {
      weak.forEach(function (w) {
        var tag = (window.TOEIC.tags || {})[w.tag];
        var name = tag ? tag.th : w.tag;
        var pct = Math.round(w.accuracy * 100);
        html += '<div class="weak-tag-row"><span>' + utils.escapeHtml(name) + '<br><span class="muted" style="font-size:.78em">เคยตอบ ' + w.total + " ข้อ</span></span><strong style=\"color:var(--danger)\">" + pct + "%</strong></div>";
        if (tag && tag.lesson) html += '<div style="text-align:right;margin-top:-4px;margin-bottom:6px"><a href="#/lesson/' + utils.escapeHtml(tag.lesson) + '" style="font-size:.8rem">ทบทวนบทเรียน →</a></div>';
      });
    } else {
      html += '<p class="muted">ยังไม่มีข้อมูล — ทำ Mock Exam หรือแบบทดสอบท้ายบทก่อน แล้วระบบจะวิเคราะห์จุดอ่อนรายหัวข้อให้</p>';
    }
    html += "</div>";

    // ประวัติล่าสุด
    html += '<div class="card dash-card wide"><h2 style="margin-top:0">การสอบล่าสุด</h2>';
    if (attempts.length) {
      html += '<div class="table-wrap"><table class="data"><thead><tr><th>วันที่</th><th>ชุด</th><th>คะแนน</th><th></th></tr></thead><tbody>';
      attempts.slice(0, 3).forEach(function (a) {
        html += "<tr><td>" + utils.formatDateTime(a.submittedAt) + "</td><td>" + utils.escapeHtml(a.examTitle || a.examId) + "</td><td>" + a.totalCorrect + "/100</td><td><a href=\"#/result/" + utils.escapeHtml(a.id) + "\">ดูผล</a></td></tr>";
      });
      html += "</tbody></table></div><p style=\"margin-bottom:0\"><a href=\"#/history\">ดูประวัติทั้งหมด →</a></p>";
    } else {
      html += '<p class="muted">ยังไม่มีประวัติ — <a href="#/exams">เริ่มทำ Mock Test</a> เพื่อสร้างประวัติและกราฟพัฒนาการ</p>';
    }
    html += "</div>";

    // ทางลัด
    html += '<div class="card dash-card"><h2 style="margin-top:0">ทางลัด</h2><ul style="margin:0;padding-left:1.2em">'
      + '<li><a href="#/plan">แผนการเรียน 4 สัปดาห์</a></li>'
      + '<li><a href="#/vocab">คลังคำศัพท์ธุรกิจ 13 หมวด</a></li>'
      + '<li><a href="#/mistakes">สมุดข้อผิด</a></li>'
      + '<li><a href="#/lessons">บทเรียนทั้งหมด</a></li>'
      + "</ul></div>";

    html += "</div>";

    // เริ่มต้นสำหรับผู้ใช้ใหม่
    if (App.store.isFirstVisit()) {
      html += '<div class="callout tip no-print" style="margin-top:16px"><div class="callout-title">เริ่มยังไงดี?</div><div>1) อ่าน <a href="#/lesson/m0-exam-overview">Module 0: รู้จักข้อสอบ</a> &nbsp;2) เรียน Module 1 ทีละบท &nbsp;3) ทำ Mock Test 1 แล้วดูจุดอ่อน &nbsp;4) ทบทวนบทเรียนที่อ่อน → ทำ Mock Test 2</div></div>';
      App.store.markVisited();
    }

    appEl.innerHTML = html;
  }

  App.registerRoute("#/", render);
  App.views = App.views || {};
  App.views.home = render;
})();
