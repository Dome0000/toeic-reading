/* js/views/history.js — ประวัติการสอบ + กราฟพัฒนาการ (SVG วาดเอง) */
(function () {
  var App = window.App = window.App || {};
  var utils = App.utils;

  var MODE_LABEL = { full: "สอบเต็ม", part: "Part Practice", drill: "Topic Drill", retry: "ฝึกซ้ำข้อที่ผิด" };

  function chartSVG(attempts) {
    // กราฟเส้น: เปอร์เซ็นต์ความถูกต้องต่อครั้ง (เรียงตามเวลา)
    var W = 680, H = 240, padL = 40, padR = 14, padT = 16, padB = 38;
    var plotW = W - padL - padR, plotH = H - padT - padB;
    var n = attempts.length;
    var pts = attempts.map(function (a, i) {
      var pct = a.totalQuestions ? (a.totalCorrect / a.totalQuestions) * 100 : 0;
      var x = padL + (n === 1 ? plotW / 2 : (i / (n - 1)) * plotW);
      var y = padT + plotH - (pct / 100) * plotH;
      return { x: x, y: y, pct: pct, a: a };
    });

    var out = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="กราฟเส้นแสดงเปอร์เซ็นต์ความถูกต้องของการสอบแต่ละครั้ง" style="width:100%;height:auto;display:block">';
    // gridlines + y labels
    [0, 25, 50, 75, 100].forEach(function (g) {
      var y = padT + plotH - (g / 100) * plotH;
      out += '<line x1="' + padL + '" y1="' + y + '" x2="' + (W - padR) + '" y2="' + y + '" stroke="var(--border)" stroke-width="1"' + (g === 0 ? '' : ' stroke-dasharray="3 4"') + '></line>';
      out += '<text x="' + (padL - 6) + '" y="' + (y + 4) + '" text-anchor="end" font-size="11" fill="var(--text-muted)">' + g + '%</text>';
    });
    // line
    if (pts.length > 1) {
      out += '<polyline points="' + pts.map(function (p) { return p.x.toFixed(1) + "," + p.y.toFixed(1); }).join(" ") + '" fill="none" stroke="var(--primary)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"></polyline>';
    }
    // points + x labels (ห่างกันพอสมควร)
    var labelEvery = Math.max(1, Math.ceil(n / 8));
    pts.forEach(function (p, i) {
      var d = new Date(p.a.submittedAt);
      var dd = (d.getDate() < 10 ? "0" : "") + d.getDate() + "/" + ((d.getMonth() + 1) < 10 ? "0" : "") + (d.getMonth() + 1);
      out += '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="4.5" fill="var(--primary)"><title>' + utils.escapeHtml(utils.formatDateTime(p.a.submittedAt)) + ' · ' + utils.escapeHtml(p.a.examTitle || "") + ' · ' + p.a.totalCorrect + "/" + p.a.totalQuestions + " (" + Math.round(p.pct) + '%)</title></circle>';
      if (i % labelEvery === 0 || i === n - 1) {
        out += '<text x="' + p.x.toFixed(1) + '" y="' + (H - padB + 16) + '" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">' + dd + "</text>";
      }
    });
    out += "</svg>";
    return out;
  }

  function render(params, query, appEl) {
    var attempts = App.store.getAttempts().slice().sort(function (a, b) { return a.submittedAt - b.submittedAt; });
    var html = '<div class="crumbs muted" style="font-size:.85rem"><a href="#/">หน้าแรก</a> › ประวัติการสอบ</div>'
      + '<div class="lesson-hero"><h1>ประวัติการสอบ</h1><p class="muted">พัฒนาการของคุณจากการสอบแต่ละครั้ง (กราฟแสดงเปอร์เซ็นต์ความถูกต้อง) — ข้อมูลเก็บไว้ในเครื่องนี้เท่านั้น</p></div>';

    if (!attempts.length) {
      html += '<div class="card"><h2 style="margin-top:0">ยังไม่มีประวัติการสอบ</h2><p class="muted">ทำ Mock Exam ชุดแรก แล้วผลจะแสดงที่นี่พร้อมกราฟพัฒนาการ</p><p style="margin-bottom:0"><a class="btn btn-primary" href="#/exams">ไปหน้า Mock Exam →</a></p></div>';
      appEl.innerHTML = html;
      return;
    }

    // summary stats
    var fullAttempts = attempts.filter(function (a) { return a.mode === "full" && a.totalQuestions >= 100; });
    var best = attempts.reduce(function (acc, a) { return !acc || a.totalCorrect / a.totalQuestions > acc.totalCorrect / acc.totalQuestions ? a : acc; }, null);
    var avgPct = attempts.reduce(function (s, a) { return s + (a.totalQuestions ? a.totalCorrect / a.totalQuestions : 0); }, 0) / attempts.length * 100;

    html += '<div class="dash-grid" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin-bottom:14px">'
      + '<div class="card dash-card" style="text-align:center"><div class="muted">สอบทั้งหมด</div><div class="stat-big">' + attempts.length + '<span style="font-size:.45em;color:var(--text-muted)"> ครั้ง</span></div></div>'
      + '<div class="card dash-card" style="text-align:center"><div class="muted">ความถูกต้องเฉลี่ย</div><div class="stat-big">' + Math.round(avgPct) + '<span style="font-size:.45em;color:var(--text-muted)">%</span></div></div>'
      + '<div class="card dash-card" style="text-align:center"><div class="muted">ดีที่สุด</div><div class="stat-big">' + (best ? Math.round(best.totalCorrect / best.totalQuestions * 100) : 0) + '<span style="font-size:.45em;color:var(--text-muted)">%</span></div></div>'
      + "</div>";

    // chart
    html += '<div class="card"><h2 style="margin-top:0">กราฟพัฒนาการ</h2>' + chartSVG(attempts.slice(-20)) + '</div>';

    // table (ใหม่สุดก่อน)
    var rows = attempts.slice().reverse();
    html += '<div class="card"><h2 style="margin-top:0">ตารางประวัติ</h2><div class="table-wrap"><table class="data"><thead><tr><th>วันที่</th><th>ชุด / โหมด</th><th>คะแนน</th><th>เวลา</th><th></th><th></th></tr></thead><tbody>';
    rows.forEach(function (a) {
      var pct = a.totalQuestions ? Math.round(a.totalCorrect / a.totalQuestions * 100) : 0;
      var approx = a.totalQuestions >= 100 ? utils.approxReadingRange(a.totalCorrect, a.totalQuestions) : null;
      html += "<tr><td>" + utils.escapeHtml(utils.formatDateTime(a.submittedAt)) + "</td>"
        + "<td>" + utils.escapeHtml(a.examTitle || a.examId || "—") + '<br><span class="muted" style="font-size:.8em">' + utils.escapeHtml(MODE_LABEL[a.mode] || a.mode || "") + "</span></td>"
        + "<td><strong>" + a.totalCorrect + "/" + a.totalQuestions + "</strong> <span class=\"muted\">(" + pct + "%)</span>" + (approx ? '<br><span class="muted" style="font-size:.8em">≈ ' + approx.low + "–" + approx.high + "</span>" : "") + "</td>"
        + "<td>" + utils.formatTime(a.timeUsedSec || 0) + "</td>"
        + '<td><a class="btn btn-ghost" style="padding:4px 10px" href="#/result/' + utils.escapeHtml(a.id) + '">ดูผล</a></td>'
        + '<td><button class="btn btn-ghost delete-attempt-btn" type="button" style="padding:4px 10px;color:var(--danger)" data-id="' + utils.escapeHtml(a.id) + '" aria-label="ลบครั้งนี้">ลบ</button></td>'
        + "</tr>";
    });
    html += "</tbody></table></div>";
    html += '<div class="no-print" style="margin-top:10px"><button class="btn btn-ghost" id="clear-history-btn" type="button" style="color:var(--danger)">ล้างประวัติทั้งหมด</button></div>';
    html += "</div>";

    appEl.innerHTML = html;

    appEl.querySelectorAll(".delete-attempt-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var a = App.store.getAttempt(btn.getAttribute("data-id"));
        var label = a ? (a.examTitle || a.examId || "ผลสอบนี้") : "ผลสอบนี้";
        if (!window.confirm("ลบประวัติ \"" + label + "\"?")) return;
        App.store.deleteAttempt(btn.getAttribute("data-id"));
        App.utils.toast("ลบประวัติแล้ว");
        render(params, query, appEl);
      });
    });
    var clearBtn = appEl.querySelector("#clear-history-btn");
    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        if (!window.confirm("ล้างประวัติการสอบทั้งหมด?\n\nกราฟและตารางจะถูกลบ (สมุดข้อผิดจะไม่ถูกลบ)")) return;
        App.store.clearAttempts();
        App.utils.toast("ล้างประวัติแล้ว");
        render(params, query, appEl);
      });
    }
  }

  App.registerRoute("#/history", render);
  App.views = App.views || {};
  App.views.history = render;
})();
