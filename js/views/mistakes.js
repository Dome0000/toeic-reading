/* js/views/mistakes.js — สมุดข้อผิด: ข้อที่ตอบผิดจาก Mock และควิซ
   ตอบถูกติดกัน 2 ครั้งจึงนำออกอัตโนมัติ (จัดการใน store.recordMistakeOutcome) */
(function () {
  var App = window.App = window.App || {};
  var utils = App.utils;

  var PART_LABEL = { 5: "Part 5", 6: "Part 6", 7: "Part 7" };

  function render(params, query, appEl) {
    var mistakes = App.store.getMistakes();
    var entries = Object.keys(mistakes).map(function (qid) {
      var m = mistakes[qid];
      m.qid = qid;
      return m;
    }).sort(function (a, b) {
      return ((b.wrongCount || 0) - (a.wrongCount || 0)) || ((b.lastSeenAt || 0) - (a.lastSeenAt || 0));
    });

    var html = '<div class="crumbs muted" style="font-size:.85rem"><a href="#/">หน้าแรก</a> › สมุดข้อผิด</div>'
      + '<div class="lesson-hero"><h1>สมุดข้อผิด <span class="badge badge-soft">' + entries.length + ' ข้อ</span></h1>'
      + '<p class="muted">ข้อที่ตอบผิดจากทั้ง Mock Exam และแบบทดสอบท้ายบท ถูกเก็บไว้อัตโนมัติ — ตอบถูกติดกัน 2 ครั้ง ระบบจะนำออกจากสมุดให้เอง</p></div>';

    if (entries.length) {
      html += '<div class="lesson-actions no-print">'
        + '<a class="btn btn-primary" href="#/exam/_/drill?tag=mistakes&limit=20">สุ่มฝึก 20 ข้อจากสมุดข้อผิด →</a>'
        + '<button class="btn btn-outline" id="clear-mistakes-btn" type="button">ล้างสมุดทั้งหมด</button>'
        + "</div>";
    } else {
      html += '<div class="card"><h2 style="margin-top:0">ยังไม่มีข้อที่ตอบผิด 🎉</h2><p class="muted">ทำ Mock Exam หรือแบบทดสอบท้ายบทก่อน — ข้อที่ผิดจะถูกเก็บไว้ที่นี่โดยอัตโนมัติ แล้วกลับมาทบทวนได้ทุกเมื่อ</p><p style="margin-bottom:0"><a class="btn btn-primary" href="#/exams">ไปหน้า Mock Exam →</a></p></div>';
    }

    entries.forEach(function (m) {
      var loc = utils.findQuestionByQid(m.qid);
      var source = loc ? loc.source : "ไม่พบชุดต้นทาง (อาจถูกลบ)";
      var partLabel = m.part ? (PART_LABEL[m.part] || "Part " + m.part) : "ควิซท้ายบท";
      var wrongCount = m.wrongCount || 1;
      var consec = m.consecutiveCorrect || 0;
      var tagHtml = (m.tags || []).map(function (t) {
        var tag = (window.TOEIC.tags || {})[t];
        if (!tag) return utils.escapeHtml(t);
        return '<a href="#/lesson/' + utils.escapeHtml(tag.lesson) + '">' + utils.escapeHtml(tag.th) + "</a>";
      }).join(" · ");

      html += '<div class="card mistake-item" data-qid="' + utils.escapeHtml(m.qid) + '">'
        + '<div class="mistake-meta muted" style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-bottom:8px;font-size:.85rem">'
        + '<span class="badge badge-soft">' + utils.escapeHtml(partLabel) + "</span>"
        + "<span>" + utils.escapeHtml(source) + "</span>"
        + "<span>ผิดมาแล้ว <strong>" + wrongCount + "</strong> ครั้ง</span>"
        + "<span>ตอบถูกติดกัน " + consec + "/2 ครั้ง</span>"
        + (m.lastSeenAt ? "<span>ล่าสุด " + utils.escapeHtml(utils.timeAgo(m.lastSeenAt)) + "</span>" : "")
        + '<button class="btn btn-ghost remove-mistake-btn no-print" type="button" style="margin-left:auto;color:var(--danger)">นำออกจากสมุด</button>'
        + "</div>";

      if (!loc) {
        html += '<p class="muted">ข้อ <code>' + utils.escapeHtml(m.qid) + '</code> ไม่พบในชุดข้อมูลปัจจุบัน (อาจมีการแก้ไขข้อสอบ) — นำออกจากสมุดได้เลย</p>';
      } else {
        var q = loc.q;
        if (loc.context) {
          html += '<details style="margin-bottom:8px"><summary>ดูบทความประกอบ</summary>' + App.passage.renderHTML(loc.context.passages) + "</details>";
        }
        html += '<p class="muted" style="margin:0 0 4px;font-size:.85rem">เฉลย: <strong>(' + utils.escapeHtml(q.answer) + ")</strong></p>";
        html += App.question.renderHTML(q, { mode: "review", selected: null, qid: m.qid });
      }
      if (tagHtml) html += '<p style="margin:8px 0 0;font-size:.85rem">บทเรียนที่เกี่ยวข้อง: ' + tagHtml + "</p>";
      html += "</div>";
    });

    appEl.innerHTML = html;

    // highlight evidence ในแต่ละข้อที่มีหลักฐาน
    appEl.querySelectorAll(".mistake-item").forEach(function (item) {
      var loc = utils.findQuestionByQid(item.getAttribute("data-qid"));
      if (loc && loc.q && loc.q.evidence && loc.q.evidence.length) {
        App.passage.highlightEvidence(item, loc.q.evidence);
      }
    });

    // นำออกทีละข้อ
    appEl.querySelectorAll(".remove-mistake-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".mistake-item");
        var qid = item.getAttribute("data-qid");
        App.store.removeMistake(qid);
        App.utils.toast("นำข้อนี้ออกจากสมุดแล้ว");
        render(params, query, appEl);
      });
    });

    var clearBtn = appEl.querySelector("#clear-mistakes-btn");
    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        var ok = window.confirm("ล้างสมุดข้อผิดทั้งหมด?\n\nข้อที่เคยตอบผิดจะถูกลบออกจากสมุด (ประวัติการสอบยังอยู่)");
        if (!ok) return;
        App.store.clearMistakes();
        App.utils.toast("ล้างสมุดข้อผิดแล้ว");
        render(params, query, appEl);
      });
    }
  }

  App.registerRoute("#/mistakes", render);
  App.views = App.views || {};
  App.views.mistakes = render;
})();
