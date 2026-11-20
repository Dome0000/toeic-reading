/* js/components/quiz.js — แบบทดสอบท้ายบท: เฉลยทันที + บันทึกคะแนนดีสุด */
(function () {
  var App = window.App = window.App || {};
  var utils = App.utils;

  /* mountQuiz(container, { lessonId, items }) */
  function mountQuiz(container, config) {
    var flat = utils.flattenQuizItems(config.items);
    var total = flat.length;
    var answered = 0, correctCount = 0;
    var lessonId = config.lessonId;

    var html = '<div class="quiz-header"><h2 id="quiz-title">แบบทดสอบท้ายบท</h2><div class="quiz-score" aria-live="polite">คะแนน: <span id="quiz-live-score">0</span>/' + total + "</div></div>";
    html += '<p class="muted">ตอบแต่ละข้อเพื่อดูเฉลยและคำอธิบายทันที (ความคืบหน้าจะบันทึกคะแนนที่ดีที่สุดไว้)</p>';

    flat.forEach(function (entry, idx) {
      var ctx = entry.context;
      if (ctx && ctx.passages && ctx.passages.length) {
        html += '<div class="card" style="margin:12px 0">' + (ctx.header ? '<p class="muted"><strong>' + utils.escapeHtml(ctx.header) + "</strong></p>" : "") + App.passage.renderHTML(ctx.passages) + "</div>";
      }
      html += App.question.renderHTML(entry.q, {
        mode: "exam",
        source: { lessonId: lessonId },
        qid: "lesson-" + lessonId + "-quiz-" + idx,
        selected: null
      });
    });
    html += '<div id="quiz-summary" class="quiz-result" hidden></div>';
    container.innerHTML = html;

    var summaryEl = container.querySelector("#quiz-summary");
    var liveScoreEl = container.querySelector("#quiz-live-score");

    App.question.bindOptions(container, function (qid, letter, qEl) {
      if (qEl.classList.contains("quiz-answered")) return;
      qEl.classList.add("quiz-answered");
      var idx = parseInt(qEl.getAttribute("data-no"), 10);
      // หา entry จาก DOM order ของคำถาม
      var qEls = container.querySelectorAll(".question");
      var flatIdx = -1;
      for (var i = 0; i < qEls.length; i++) { if (qEls[i] === qEl) { flatIdx = i; break; } }
      var entry = flat[flatIdx];
      var q = entry.q;
      var isCorrect = letter === q.answer;
      if (isCorrect) correctCount++;
      answered++;

      // lock options + แสดงสี
      qEl.querySelectorAll('input[type="radio"]').forEach(function (inp) { inp.disabled = true; });
      qEl.querySelectorAll(".option").forEach(function (optEl) {
        optEl.classList.add("locked");
        var l = optEl.getAttribute("data-letter");
        if (l === q.answer) optEl.classList.add("correct");
        else if (l === letter) optEl.classList.add("wrong");
      });

      // แทรกเฉลย
      var explainDiv = document.createElement("div");
      explainDiv.innerHTML = App.question.renderExplainHTML(q, { evidence: q.evidence || [] });
      qEl.appendChild(explainDiv.firstChild);

      // บันทึกลงสมุดข้อผิด
      if (App.store && App.store.recordMistakeOutcome) {
        App.store.recordMistakeOutcome({
          qid: "lesson-" + lessonId + "-quiz-" + flatIdx,
          examId: null,
          no: q.no || flatIdx + 1,
          part: q.part || null,
          tags: q.tags || [],
          correct: isCorrect
        });
      }

      liveScoreEl.textContent = String(correctCount);
      if (answered === total) {
        App.store.recordQuizResult(lessonId, correctCount, total);
        App.store.markLessonDone(lessonId, true);
        summaryEl.hidden = false;
        var pct = total ? Math.round((correctCount / total) * 100) : 0;
        summaryEl.className = "quiz-result " + (pct >= 70 ? "pass" : "try-again");
        summaryEl.innerHTML = "<h3>" + (pct >= 70 ? "ยอดเยี่ยม!" : "ทบทวนอีกนิดนะ") + "</h3>"
          + "<p>คุณตอบถูก <strong>" + correctCount + "/" + total + "</strong> ข้อ (" + pct + "%)</p>"
          + '<p><a class="btn btn-primary" href="#/lessons">กลับไปหน้าบทเรียน</a></p>';
        summaryEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  App.quiz = { mount: mountQuiz };
})();
