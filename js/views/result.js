/* js/views/result.js — หน้าผลสอบ + Review เฉลยละเอียด */
(function () {
  var App = window.App = window.App || {};
  var utils = App.utils;
  var LETTERS = ["A", "B", "C", "D"];

  // หา passage context ของข้อจากข้อมูลปัจจุบัน (ใช้ใน review)
  function contextFor(qr) {
    if (qr.no == null) {
      // lesson quiz qid: lesson-<id>-quiz-<i>
      var m = /^lesson-(.+)-quiz-(\d+)$/.exec(qr.qid);
      if (m) {
        var l = (window.TOEIC.lessons || {})[m[1]];
        if (l) {
          var flat = utils.flattenQuizItems(l.quiz);
          var item = flat[parseInt(m[2], 10)];
          if (item && item.context) return item.context;
        }
      }
      return null;
    }
    if (!qr.examRef && qr.no != null) {
      // หา exam จาก qid prefix
      var em = /^(.+)-\d+$/.exec(qr.qid);
      var exam = em ? (window.TOEIC.exams || {})[em[1]] : null;
      if (exam) {
        if (qr.part === 6) {
          var s6 = (exam.part6 || []).find(function (s) { return (s.questions || []).some(function (q) { return q.no === qr.no; }); });
          if (s6) return { header: s6.header, passages: [{ label: "Passage", html: s6.passageHtml }] };
        } else if (qr.part === 7) {
          var all7 = (exam.part7Single || []).concat(exam.part7Multi || []);
          var s7 = all7.find(function (s) { return (s.questions || []).some(function (q) { return q.no === qr.no; }); });
          if (s7) return { header: s7.header, passages: s7.passages };
        }
        return null;
      }
    }
    return null;
  }

  function findQuestion(qr) {
    // หาข้อสอบจาก qid
    var m = /^(.+)-(\d+)$/.exec(qr.qid);
    if (m) {
      var exam = (window.TOEIC.exams || {})[m[1]];
      if (exam) {
        var all = [];
        (exam.part5 || []).forEach(function (q) { all.push(q); });
        (exam.part6 || []).forEach(function (s) { (s.questions || []).forEach(function (q) { all.push(q); }); });
        (exam.part7Single || []).concat(exam.part7Multi || []).forEach(function (s) { (s.questions || []).forEach(function (q) { all.push(q); }); });
        return all.find(function (q) { return q.no === parseInt(m[2], 10); }) || null;
      }
    }
    var lm = /^lesson-(.+)-quiz-(\d+)$/.exec(qr.qid);
    if (lm) {
      var l = (window.TOEIC.lessons || {})[lm[1]];
      if (l) {
        var flat = utils.flattenQuizItems(l.quiz);
        var item = flat[parseInt(lm[2], 10)];
        return item ? item.q : null;
      }
    }
    return null;
  }

  function render(params, query, appEl) {
    var attempt = App.store.getAttempt(params.attemptId);
    if (!attempt) {
      appEl.innerHTML = '<div class="card"><h1>ไม่พบผลการสอบ</h1><p class="muted">ไม่มี attempt id <code>' + utils.escapeHtml(params.attemptId) + '</code></p><p><a class="btn btn-primary" href="#/exams">ไปหนา Mock Exam</a></p></div>';
      return;
    }
    var total = attempt.totalQuestions, correct = attempt.totalCorrect;
    var pct = total ? Math.round((correct / total) * 100) : 0;
    var approx = utils.approxReadingRange(correct, total);
    var tagEntries = Object.keys(attempt.tagStats || {}).map(function (t) {
      var s = attempt.tagStats[t];
      return { tag: t, total: s.total, wrong: s.wrong, accuracy: s.total ? 1 - s.wrong / s.total : 1 };
    }).sort(function (a, b) { return a.accuracy - b.accuracy; });

    var html = '<div class="crumbs muted" style="font-size:.85rem"><a href="#/">หน้าแรก</a> › <a href="#/exams">Mock Exam</a> › ผลสอบ</div>'
      + '<div class="card" style="text-align:center">'
      + '<h1 style="margin-top:0">' + utils.escapeHtml(attempt.examTitle || attempt.examId || "ผลการสอบ") + '</h1>'
      + '<div class="stat-big" style="font-size:3.4rem">' + correct + '<span style="font-size:.45em;color:var(--text-muted)"> / ' + total + '</span></div>'
      + '<p class="muted">ความถูกต้อง ' + pct + '% · ใช้เวลา ' + utils.formatTime(attempt.timeUsedSec) + (attempt.autoSubmitted ? " (ส่งอัตโนมัติเมื่อหมดเวลา)" : "") + "</p>"
      + (total >= 100 ? '<p>คะแนน Reading โดยประมาณ <strong>' + approx.low + "–" + approx.high + '</strong> (จากคะแนนดิบ ' + correct + '/100)<br><span class="muted" style="font-size:.85em">เป็นค่าประมาณ ไม่ใช่ตารางแปลงคะแนนทางการของ ETS</span></p>' : "")
      + "</div>";

    // per-part scores
    if (attempt.partScores) {
      html += '<div class="part-score-grid">'
        + [5, 6, 7].map(function (p) {
            var s = attempt.partScores[p] || { correct: 0, total: 0 };
            if (!s.total) return "";
            return '<div class="part-score"><div class="muted">Part ' + p + '</div><div class="stat-big" style="font-size:1.6rem">' + s.correct + "/" + s.total + "</div>"
              + '<div class="muted" style="font-size:.8rem">' + (attempt.perPartSec && attempt.perPartSec[p] ? "ใช้เวลา ~" + Math.round(attempt.perPartSec[p] / 60000) + " นาที" : "") + "</div></div>";
          }).join("")
        + "</div>";
    }

    // pacing: เวลาที่ใช้ต่อพาร์ทเทียบกับเวลาที่แนะนำ (เฉพาะสอบเต็มรูปแบบ)
    var RECOMMENDED_MIN = { 5: 11, 6: 9, 7: 55 };
    if (attempt.perPartSec && attempt.mode === "full") {
      var pacingHtml = '<div class="card"><h2>การจัดการเวลา (เทียบกับเวลาที่แนะนำ)</h2>';
      var anyPacing = false;
      [5, 6, 7].forEach(function (p) {
        var usedMs = attempt.perPartSec[p] || 0;
        var rec = RECOMMENDED_MIN[p];
        var ps = attempt.partScores && attempt.partScores[p];
        if (!ps || !ps.total) return;
        anyPacing = true;
        var usedMin = usedMs / 60000; // perPartSec เก็บเป็นมิลลิวินาที (Date.now() delta)
        var ratio = rec > 0 ? usedMin / rec : 0;
        var cls = ratio <= 1.15 ? "strong" : ratio <= 1.4 ? "ok" : "weak";
        var widthPct = Math.max(3, Math.min(100, Math.round(ratio * 100)));
        var verdict = ratio <= 1.15 ? "อยู่ในเกณฑ์ดี" : ratio <= 1.4 ? "ช้ากว่าเป้าหมายเล็กน้อย" : "ใช้เวลานานเกินไป — ฝึกทำเร็วขึ้น";
        pacingHtml += '<div class="bar-row"><span>Part ' + p + ' <span class="muted">— ใช้ ~' + (usedMin < 10 ? usedMin.toFixed(1) : Math.round(usedMin)) + ' นาที (แนะนำ ' + rec + ')</span></span>'
          + '<div class="bar-track"><div class="bar-fill ' + cls + '" style="width:' + widthPct + '%"></div></div>'
          + '<strong style="font-weight:600">' + verdict + "</strong></div>";
      });
      if (anyPacing) {
        pacingHtml += '<p class="muted" style="margin-bottom:0">เวลารวมที่ใช้ ' + Math.round(attempt.timeUsedSec / 60) + ' นาที (สอบ 75 นาที) · ถ้า Part 5/6 ใช้เวลามากเกินไป ลองตั้งเป้าจบ Part 5 ใน 11 นาที แล้วเหลือเวลาส่วนใหญ่ให้ Part 7</p></div>';
        html += pacingHtml;
      }
    }

    // tag accuracy
    if (tagEntries.length) {
      html += '<div class="card"><h2>ความแม่นยำรายหัวข้อ (เรียงจากจุดอ่อนที่สุด)</h2>';
      tagEntries.slice(0, 12).forEach(function (t) {
        var tag = (window.TOEIC.tags || {})[t.tag];
        var name = tag ? tag.th : t.tag;
        var pctTag = Math.round(t.accuracy * 100);
        var cls = pctTag < 50 ? "weak" : pctTag < 75 ? "ok" : "strong";
        html += '<div class="bar-row"><span>' + utils.escapeHtml(name) + ' <span class="muted">(' + t.total + ' ข้อ)</span></span>'
          + '<div class="bar-track"><div class="bar-fill ' + cls + '" style="width:' + pctTag + '%"></div></div>'
          + "<strong>" + pctTag + "%</strong></div>";
        if (tag && tag.lesson && t.accuracy < 0.75) {
          html += '<div style="text-align:right;margin-bottom:6px;margin-top:-4px"><a href="#/lesson/' + utils.escapeHtml(tag.lesson) + '" style="font-size:.8rem">ทบทวนบทเรียน →</a></div>';
        }
      });
      html += "</div>";
    }

    // review
    var filter = (query.filter || "all");
    html += '<div class="card"><h2>รีวิวเฉลย</h2>'
      + '<div class="review-filters" role="group" aria-label="กรองรีวิว">'
      + ["all", "wrong", "flagged", "skipped"].map(function (f) {
          var label = { all: "ทั้งหมด", wrong: "เฉพาะข้อผิด", flagged: "ติดธง", skipped: "ไม่ได้ตอบ" }[f];
          return '<button data-filter="' + f + '" class="' + (filter === f ? "active" : "") + '" type="button">' + label + "</button>";
        }).join("")
      + "</div><div id=\"review-list\"></div></div>";

    // actions
    var wrongCount = (attempt.questionResults || []).filter(function (qr) { return qr.userAnswer !== qr.answer; }).length;
    html += '<div class="lesson-actions no-print"><a class="btn btn-outline" href="#/exams">กลับไปหน้า Mock Exam</a>'
      + (wrongCount ? '<a class="btn btn-primary" href="#/retry/' + utils.escapeHtml(attempt.id) + '">ทำใหม่เฉพาะข้อที่ผิด (' + wrongCount + ' ข้อ)</a>' : '')
      + '<a class="btn btn-ghost" href="#/history">ดูประวัติทั้งหมด →</a></div>';

    appEl.innerHTML = html;

    function renderReview() {
      var list = appEl.querySelector("#review-list");
      var rows = [];
      (attempt.questionResults || []).forEach(function (qr) {
        var isWrong = qr.userAnswer !== qr.answer;
        if (filter === "wrong" && !isWrong) return;
        if (filter === "flagged" && (attempt.flags || []).indexOf(qr.qid) === -1) return;
        if (filter === "skipped" && qr.userAnswer) return;
        var q = findQuestion(qr);
        var ctx = contextFor(qr);
        var label = qr.no != null ? "ข้อ " + qr.no : "ควิซ";
        var ctxHtml = ctx ? '<details style="margin-bottom:8px"><summary>ดูบทความประกอบ</summary>' + App.passage.renderHTML(ctx.passages) + "</details>" : "";
        var answerHtml = q
          ? App.question.renderHTML(q, { mode: "review", selected: qr.userAnswer, qid: qr.qid })
          : '<div class="question"><div class="q-stem">' + utils.escapeHtml(qr.qid) + '</div><p class="muted">ไม่พบข้อคำถามในชุดข้อมูลปัจจุบัน</p></div>';
        rows.push('<div class="review-item" data-qid="' + utils.escapeHtml(qr.qid) + '"><p class="muted" style="margin-bottom:4px">' + utils.escapeHtml(label) + " · " + (qr.userAnswer ? "คุณตอบ " + qr.userAnswer : "ไม่ได้ตอบ") + ' · เฉลย ' + qr.answer + "</p>" + ctxHtml + answerHtml + "</div>");
      });
      list.innerHTML = rows.length ? rows.join("") : '<p class="muted">ไม่มีข้อในหมวดนี้</p>';
      // highlight evidence quotes if any
      list.querySelectorAll(".review-item").forEach(function (item) {
        var qid = item.getAttribute("data-qid");
        var qr = (attempt.questionResults || []).find(function (r) { return r.qid === qid; });
        var q = findQuestion(qr);
        if (q && q.evidence && q.evidence.length) {
          App.passage.highlightEvidence(item, q.evidence);
        }
      });
    }
    renderReview();

    appEl.querySelectorAll(".review-filters [data-filter]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        filter = btn.getAttribute("data-filter");
        appEl.querySelectorAll(".review-filters [data-filter]").forEach(function (b) { b.classList.toggle("active", b === btn); });
        renderReview();
      });
    });
  }

  App.registerRoute("#/result/:attemptId", render);
  App.views = App.views || {};
  App.views.result = render;
})();
