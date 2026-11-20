/* js/views/exam.js — ทำข้อสอบ: Full / Part Practice / Topic Drill / Mistakes review */
(function () {
  var App = window.App = window.App || {};
  var utils = App.utils;
  var LETTERS = ["A", "B", "C", "D"];
  var PART_TIME = { 5: 11, 6: 9, 7: 55 };
  var PART_NAME = { 5: "Part 5", 6: "Part 6", 7: "Part 7" };

  // ===== สร้าง context (บทความประกอบ) ให้แต่ละข้อ =====
  function examContextFor(exam, e) {
    if (e.part === 6) {
      var s6 = (exam.part6 || []).find(function (s) { return s.setId === e.setId; });
      if (s6) return { header: s6.header, passages: [{ label: "Passage", html: s6.passageHtml }] };
    }
    if (e.part === 7) {
      var all7 = (exam.part7Single || []).concat(exam.part7Multi || []);
      var s7 = all7.find(function (s) { return s.setId === e.setId; });
      if (s7) return { header: s7.header, passages: s7.passages };
    }
    return null;
  }

  function collectExamQuestions(exam) {
    var flat = [];
    (exam.part5 || []).forEach(function (q) { flat.push({ qid: exam.id + "-" + q.no, no: q.no, q: q, part: 5, context: null, source: exam.title }); });
    (exam.part6 || []).forEach(function (set) {
      (set.questions || []).forEach(function (q) { flat.push({ qid: exam.id + "-" + q.no, no: q.no, q: q, part: 6, context: { header: set.header, passages: [{ label: "Passage", html: set.passageHtml }] }, source: exam.title }); });
    });
    (exam.part7Single || []).concat(exam.part7Multi || []).forEach(function (set) {
      (set.questions || []).forEach(function (q) { flat.push({ qid: exam.id + "-" + q.no, no: q.no, q: q, part: 7, context: { header: set.header, passages: set.passages }, source: exam.title }); });
    });
    return flat;
  }

  function collectDrillQuestions(tag) {
    // สมุดข้อผิด: รวบรวม qids จาก store แล้วหาข้อจริง
    if (tag === "mistakes") {
      var mistakeQids = Object.keys(App.store.getMistakes());
      var found = [];
      mistakeQids.forEach(function (qid) {
        var loc = utils.findQuestionByQid(qid);
        if (loc) {
          found.push({ qid: qid, no: loc.q.no != null ? loc.q.no : null, q: loc.q, part: loc.part || null, context: loc.context || null, source: loc.source });
        }
      });
      return shuffle(found).slice(0, 20);
    }
    var out = [];
    Object.keys(window.TOEIC.exams || {}).forEach(function (examId) {
      collectExamQuestions(window.TOEIC.exams[examId]).forEach(function (entry) {
        if ((entry.q.tags || []).indexOf(tag) !== -1) out.push(entry);
      });
    });
    Object.keys(window.TOEIC.lessons || {}).forEach(function (lessonId) {
      var l = window.TOEIC.lessons[lessonId];
      utils.flattenQuizItems(l.quiz).forEach(function (item, i) {
        if ((item.q.tags || []).indexOf(tag) !== -1) {
          out.push({ qid: "lesson-" + lessonId + "-quiz-" + i, no: null, q: item.q, part: null, context: item.context, source: l.title });
        }
      });
    });
    return out;
  }

  // retry: ข้อที่ตอบผิดของ attempt นั้น ๆ
  function collectRetryQuestions(attemptId) {
    var attempt = App.store.getAttempt(attemptId);
    if (!attempt) return [];
    var out = [];
    (attempt.questionResults || []).forEach(function (qr) {
      if (qr.userAnswer === qr.answer) return;
      var loc = utils.findQuestionByQid(qr.qid);
      if (loc) {
        out.push({ qid: qr.qid, no: loc.q.no != null ? loc.q.no : null, q: loc.q, part: loc.part || null, context: loc.context || null, source: loc.source });
      }
    });
    return out;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // ===== session helpers =====
  function sessionKey(examId, mode, partList, drillTag, drillLimit) {
    return [examId, mode, (partList || []).join(","), drillTag || "", drillLimit || ""].join("|");
  }
  function saveSession(session) {
    session.savedAt = Date.now();
    App.store.saveCurrentExam(session);
  }

  // ===== render =====
  function render(params, query, appEl) {
    var examId = params.id;
    var mode = params.mode;
    var isDrill = mode === "drill";
    var exam = examId !== "_" ? (window.TOEIC.exams || {})[examId] : null;
    if (mode !== "drill" && mode !== "retry" && !exam) {
      appEl.innerHTML = '<div class="card"><h1>ไม่พบชุดข้อสอบ</h1><p class="muted">ไม่มีชุด id <code>' + utils.escapeHtml(examId) + '</code></p><p><a class="btn btn-primary" href="#/exams">กลับไปหน้าเลือกชุดสอบ</a></p></div>';
      return;
    }
    var partList = (query.part || "").split(",").map(function (s) { return parseInt(s, 10); }).filter(function (n) { return n >= 5 && n <= 7; });
    var timed = mode === "full" ? true : (mode === "drill" || mode === "retry") ? false : query.timed === "1";
    var instantReveal = query.instant === "1";
    var drillTag = query.tag || "";
    var drillLimit = Math.max(1, parseInt(query.limit || "10", 10) || 10);
    var attemptId = query.attemptId || "";
    var retryTitle = "ฝึกซ้ำข้อที่ผิด";
    if (mode === "retry" && attemptId) {
      var attempt = App.store.getAttempt(attemptId);
      if (attempt) retryTitle = "ฝึกซ้ำข้อที่ผิด — " + (attempt.examTitle || attempt.examId || attemptId);
    }
    var title = mode === "full" ? (exam.title || examId) + " — สอบเต็มรูปแบบ"
      : mode === "part" ? (exam.title || examId) + " — Part Practice (" + partList.map(function (p) { return PART_NAME[p]; }).join("+") + ")"
      : mode === "retry" ? retryTitle
      : "Topic Drill — " + (window.TOEIC.tags[drillTag] ? window.TOEIC.tags[drillTag].th : drillTag);

    var key = sessionKey(examId, mode, partList, mode === "retry" ? attemptId : drillTag, drillLimit);
    var sessionDrillTag = mode === "retry" ? attemptId : drillTag;
    // ป้องกันการทับข้อสอบที่ค้างอยู่โดยไม่ถาม
    var inProgress = App.store.getCurrentExam();
    var progress = inProgress && !inProgress.submitted ? Object.keys(inProgress.answers || {}).length : 0;
    if (inProgress && !inProgress.submitted && inProgress.key !== key && progress > 0) {
      appEl.innerHTML = '<div class="card"><h1>พบข้อสอบที่ค้างอยู่</h1><p>ชุด <strong>' + utils.escapeHtml(inProgress.title || inProgress.examId) + '</strong> — ตอบไปแล้ว ' + progress + ' ข้อ</p>'
        + '<div class="lesson-actions">'
        + '<a class="btn btn-primary" id="resume-inprogress" href="#">ทำต่อข้อสอบที่ค้าง</a>'
        + '<button class="btn btn-outline" id="discard-inprogress" type="button">เริ่มชุดนี้ใหม่ (ลบข้อมูลที่ค้าง)</button>'
        + '<a class="btn btn-ghost" href="#/exams">ยกเลิก</a>'
        + '</div></div>';
      var resumeLink = appEl.querySelector('#resume-inprogress');
      resumeLink.href = inProgress.mode === 'drill'
        ? '#/exam/_/drill?tag=' + encodeURIComponent(inProgress.drillTag || '') + '&limit=' + (inProgress.drillLimit || 10)
        : inProgress.mode === 'retry'
          ? '#/retry/' + encodeURIComponent(inProgress.drillTag || '')
        : inProgress.mode === 'part'
          ? '#/exam/' + inProgress.examId + '/part?part=' + (inProgress.partList || [5]).join(',') + '&timed=' + (inProgress.timed ? 1 : 0) + '&instant=' + (inProgress.instantReveal ? 1 : 0)
          : '#/exam/' + inProgress.examId + '/full';
      appEl.querySelector('#discard-inprogress').addEventListener('click', function () {
        App.store.clearCurrentExam();
        App.refresh();
      });
      return;
    }
    var session = App.store.getCurrentExam();
    var resuming = session && session.key === key && !session.submitted;
    var questions;
    if (resuming) {
      questions = rebuildQuestions(session);
    } else {
      questions = buildQuestions(exam, mode, partList, drillTag, drillLimit, appEl, attemptId);
      if (!questions) return; // error rendered inside buildQuestions
      session = createSession(exam, mode, partList, sessionDrillTag, drillLimit, instantReveal, timed, title, key, questions);
      saveSession(session);
    }

    // state
    var state = {
      session: session,
      questions: questions,
      index: 0,
      listView: false,
      mobileTab: "questions",
      currentNo: questions.length ? questions[0].no || 1 : 1
    };
    state.currentNo = resuming && session.currentNo ? session.currentNo : (questions[0] ? (questions[0].no || 1) : 1);
    if (resuming && typeof session.index === "number") state.index = Math.min(questions.length - 1, Math.max(0, session.index));
    else if (resuming) { var j = questions.findIndex(function (e) { return e.no === state.currentNo; }); state.index = Math.max(0, j); }

    // timer
    var timer = null;
    if (session.timed && session.endAt) {
      timer = new App.ExamTimer({
        endAt: session.endAt,
        onTick: function (remaining) { updateTimerDisplay(remaining, session); },
        onWarn: function (minutesLeft) {
          App.utils.toast(minutesLeft === 15 ? "เหลือเวลา 15 นาที" : "เหลือเวลา 5 นาที");
          var live = document.getElementById("exam-timer-live");
          if (live) live.textContent = minutesLeft === 15 ? "เหลือเวลา 15 นาที" : "เหลือเวลา 5 นาที";
        },
        onExpire: function () { finalize(true); }
      });
    }

    function save() { saveSession(session); }
    function qMetaAt(i) { return questions[i]; }
    function curMeta() { return questions[state.index]; }
    function displayNo(entry) { return entry.no != null ? entry.no : state.questions.indexOf(entry) + 1; }
    function qidOf(entry) { return entry.qid; }

    function updateHeaderCounts() {
      var answered = 0, flagged = 0;
      questions.forEach(function (e) {
        if (session.answers[e.qid]) answered++;
        if (session.flags[e.qid]) flagged++;
      });
      var a = document.getElementById("exam-answered"); if (a) a.textContent = answered + "/" + questions.length;
      var f = document.getElementById("exam-flagged"); if (f) f.textContent = flagged;
      var submitCount = document.getElementById("exam-submit-answered"); if (submitCount) submitCount.textContent = answered;
    }

    function updateTimerDisplay(remaining, sess) {
      var el = document.getElementById("exam-timer");
      var wrap = document.getElementById("exam-timer-wrap");
      if (!el) return;
      el.textContent = utils.formatTime(remaining);
      el.classList.toggle("warn", remaining <= 900 && remaining > 300);
      el.classList.toggle("danger", remaining <= 300);
      if (wrap) wrap.classList.toggle("danger", remaining <= 300);
    }

    function renderQuestionHTML(entry) {
      var letter = session.answers[entry.qid] || null;
      var qid = entry.qid;
      var html = App.question.renderHTML(entry.q, { mode: session.instantReveal && letter ? "review" : "exam", selected: letter, source: { examId: examId }, qid: qid });
      return html;
    }

    function renderNavHTML() {
      return App.navigator.renderHTML({
        questions: questions.map(function (e) { return { no: displayNo(e) }; }),
        answers: session.answers,
        flags: session.flags,
        currentNo: displayNo(curMeta()),
        qidOf: function (q) {
          var e = questions.find(function (en) { return displayNo(en) === q.no; });
          return e ? e.qid : "";
        }
      });
    }

    function renderAll() {
      var entry = curMeta();
      var context = entry.context;
      var isContextMode = !!context || questions.some(function (e) { return !!e.context; });
      var html = '<div class="exam-shell">'
        + '<div class="exam-header">'
        + '<span class="exam-title">' + utils.escapeHtml(session.title) + "</span>"
        + '<span class="exam-part-badge">' + (mode === "drill" ? "Drill" : mode === "retry" ? "Retry" : mode === "part" ? "Part Practice" : "Full Test") + "</span>"
        + (session.timed ? '<span class="exam-timer-wrap" id="exam-timer-wrap"><span class="exam-timer" id="exam-timer" aria-live="off">--:--</span></span>' : "")
        + '<span class="exam-count">ตอบแล้ว <strong id="exam-answered">0/' + questions.length + '</strong> · ติดธง <strong id="exam-flagged">0</strong></span>'
        + '<button class="btn btn-primary" id="exam-submit-btn" type="button">ส่งข้อสอบ</button>'
        + '<span class="sr-only" id="exam-timer-live" aria-live="assertive"></span>'
        + "</div>"
        + '<div class="exam-tabs no-print" role="tablist" aria-label="มุมมอง">'
        + '<button role="tab" data-tab="passage" class="' + (state.mobileTab === "passage" ? "active" : "") + '">📄 บทความ</button>'
        + '<button role="tab" data-tab="questions" class="' + (state.mobileTab === "questions" ? "active" : "") + '">✏️ คำถาม</button>'
        + "</div>"
        + '<div class="exam-layout" data-tab="' + utils.escapeHtml(state.mobileTab) + '">';

      if (isContextMode) {
        html += '<section class="exam-passages" aria-label="บทความ">'
          + '<p class="muted" style="margin-top:0"><strong>' + utils.escapeHtml(context ? context.header : "") + "</strong></p>"
          + (context ? App.passage.renderHTML(context.passages) : '<p class="muted">ข้อนี้ไม่มีบทความประกอบ</p>')
          + "</section>";
      }

      html += '<section class="exam-questions" aria-label="คำถาม">';
      if (mode === "part" && partList.length === 1 && partList[0] === 5 || mode === "full") {
        // toggle มุมมอง Part 5 / list view
        html += '<div class="exam-view-toggle no-print" style="display:flex;gap:8px;margin-bottom:8px">'
          + '<button class="btn btn-outline" id="view-single-btn" type="button" aria-pressed="' + (!state.listView) + '">ทำทีละข้อ</button>'
          + '<button class="btn btn-outline" id="view-list-btn" type="button" aria-pressed="' + state.listView + '">มุมมองรายการ</button>'
          + "</div>";
      }

      if (state.listView) {
        html += '<div class="exam-list-view">' + questions.map(function (e, i) { return renderQuestionHTML(e); }).join("") + "</div>";
      } else {
        html += renderQuestionHTML(entry);
        html += '<div class="exam-q-actions" style="display:flex;justify-content:space-between;gap:10px;margin-top:12px;flex-wrap:wrap">'
          + '<button class="btn btn-outline" id="exam-prev-btn" type="button">← ข้อก่อนหน้า</button>'
          + '<button class="btn btn-outline" id="exam-flag-btn" type="button" aria-pressed="' + (session.flags[entry.qid] ? "true" : "false") + '">' + (session.flags[entry.qid] ? "⚑ ติดธงแล้ว" : "⚐ ติดธง") + "</button>"
          + '<button class="btn btn-outline" id="exam-next-btn" type="button">ข้อถัดไป →</button>'
          + "</div>"
          + '<p class="kbd-hint" style="margin-top:8px">คีย์ลัด: <kbd>A</kbd>–<kbd>D</kbd> / <kbd>1</kbd>–<kbd>4</kbd> เลือกคำตอบ · <kbd>←</kbd><kbd>→</kbd> ข้อก่อน/ถัดไป · <kbd>F</kbd> ติดธง</p>';
      }
      html += "</section></div>";

      // sidebar navigator
      html += '<div class="exam-sidebar no-print">'
        + '<button class="exam-nav-toggle" id="exam-nav-toggle" type="button" aria-label="เปิดตัวนำทางข้อสอบ" aria-expanded="false">☰</button>'
        + '<div class="exam-nav-panel" id="exam-nav-panel">'
        + "<h3 style=\"margin-top:0\">ข้อทั้งหมด</h3>"
        + renderNavHTML()
        + '<p style="margin:10px 0 4px"><button class="btn btn-primary" id="exam-submit-btn-2" type="button" style="width:100%">ส่งข้อสอบ</button></p>'
        + App.navigator.legendHTML()
        + "</div></div></div>";
      appEl.innerHTML = html;
      bindEvents();
      updateHeaderCounts();
      if (timer) timer.start();
    }

    function bindEvents() {
      var entry = curMeta();
      // tabs (mobile)
      appEl.querySelectorAll(".exam-tabs [data-tab]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.mobileTab = btn.getAttribute("data-tab");
          var layout = appEl.querySelector(".exam-layout");
          if (layout) layout.setAttribute("data-tab", state.mobileTab);
          appEl.querySelectorAll(".exam-tabs [data-tab]").forEach(function (b) { b.classList.toggle("active", b === btn); });
        });
      });
      // view toggle
      var singleBtn = appEl.querySelector("#view-single-btn");
      var listBtn = appEl.querySelector("#view-list-btn");
      if (singleBtn) singleBtn.addEventListener("click", function () { state.listView = false; state.index = questions.indexOf(curMeta()); renderAll(); });
      if (listBtn) listBtn.addEventListener("click", function () { state.listView = true; renderAll(); });
      // options
      appEl.querySelectorAll(".question").forEach(function (qEl) {
        var qid = qEl.getAttribute("data-qid");
        var meta = questions.find(function (e) { return e.qid === qid; });
        if (!meta) return;
        qEl.addEventListener("change", function (ev) {
          var input = ev.target.closest('input[type="radio"]');
          if (!input) return;
          session.answers[qid] = input.value;
          // per-question time accounting
          flushTime(meta);
          qEl.querySelectorAll(".option").forEach(function (opt) { opt.classList.toggle("selected", opt.getAttribute("data-letter") === input.value); });
          if (session.instantReveal) {
            revealAnswer(qEl, meta);
          }
          save();
          updateHeaderCounts();
          refreshNav();
        });
      });
      // prev / next
      var prev = appEl.querySelector("#exam-prev-btn");
      var next = appEl.querySelector("#exam-next-btn");
      if (prev) prev.addEventListener("click", function () { go(-1); });
      if (next) next.addEventListener("click", function () { go(1); });
      // flag
      var flagBtn = appEl.querySelector("#exam-flag-btn");
      if (flagBtn) flagBtn.addEventListener("click", function () { toggleFlag(entry); });
      // navigator toggle
      var navToggle = appEl.querySelector("#exam-nav-toggle");
      var navPanel = appEl.querySelector("#exam-nav-panel");
      if (navToggle && navPanel) {
        navToggle.addEventListener("click", function () {
          var open = navPanel.classList.toggle("open");
          navToggle.setAttribute("aria-expanded", open ? "true" : "false");
        });
      }
      // nav goto
      appEl.querySelectorAll(".q-nav button[data-goto-no]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var no = parseInt(btn.getAttribute("data-goto-no"), 10);
          jumpToNo(no);
        });
      });
      // submit buttons
      var s1 = appEl.querySelector("#exam-submit-btn");
      var s2 = appEl.querySelector("#exam-submit-btn-2");
      if (s1) s1.addEventListener("click", openSubmitModal);
      if (s2) s2.addEventListener("click", openSubmitModal);
    }

    function flushTime(meta) {
      var now = Date.now();
      var last = session._lastTs || session.startedAt;
      var delta = Math.max(0, now - last);
      session.perQuestion[meta.qid] = (session.perQuestion[meta.qid] || 0) + delta;
      session._lastTs = now;
    }

    function revealAnswer(qEl, meta) {
      if (qEl.classList.contains("revealed")) return;
      qEl.classList.add("revealed");
      var letter = session.answers[meta.qid];
      var q = meta.q;
      qEl.querySelectorAll('input[type="radio"]').forEach(function (inp) { inp.disabled = true; });
      qEl.querySelectorAll(".option").forEach(function (optEl) {
        optEl.classList.add("locked");
        var l = optEl.getAttribute("data-letter");
        if (l === q.answer) optEl.classList.add("correct");
        else if (l === letter) optEl.classList.add("wrong");
      });
      var explainDiv = document.createElement("div");
      explainDiv.innerHTML = App.question.renderExplainHTML(q, { evidence: q.evidence || [] });
      qEl.appendChild(explainDiv.firstChild);
    }

    function go(delta) {
      flushTime(curMeta());
      var next = Math.min(questions.length - 1, Math.max(0, state.index + delta));
      state.index = next;
      session.index = next;
      session.currentNo = displayNo(questions[next]);
      save();
      renderAll();
      var app = document.getElementById("app");
      if (app) app.focus();
    }

    function jumpToNo(no) {
      flushTime(curMeta());
      var i = questions.findIndex(function (e) { return displayNo(e) === no; });
      if (i === -1) return;
      state.index = i;
      session.index = i;
      session.currentNo = no;
      save();
      renderAll();
    }

    function toggleFlag(meta) {
      if (session.flags[meta.qid]) delete session.flags[meta.qid];
      else session.flags[meta.qid] = true;
      save();
      var btn = appEl.querySelector("#exam-flag-btn");
      if (btn) { btn.innerHTML = session.flags[meta.qid] ? "⚑ ติดธงแล้ว" : "⚐ ติดธง"; btn.setAttribute("aria-pressed", session.flags[meta.qid] ? "true" : "false"); }
      updateHeaderCounts();
      refreshNav();
    }

    function refreshNav() {
      var panel = appEl.querySelector("#exam-nav-panel");
      if (!panel) return;
      var old = panel.querySelector(".q-nav");
      if (old) old.outerHTML = renderNavHTML();
      panel.querySelectorAll(".q-nav button[data-goto-no]").forEach(function (btn) {
        btn.addEventListener("click", function () { jumpToNo(parseInt(btn.getAttribute("data-goto-no"), 10)); });
      });
    }

    function openSubmitModal() {
      flushTime(curMeta());
      save();
      var unanswered = [], flagged = [];
      questions.forEach(function (e) {
        var dn = displayNo(e);
        if (!session.answers[e.qid]) unanswered.push(dn);
        if (session.flags[e.qid]) flagged.push(dn);
      });
      var backdrop = document.createElement("div");
      backdrop.className = "modal-backdrop";
      backdrop.innerHTML = '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="submit-modal-title">'
        + '<h2 id="submit-modal-title">ยืนยันการส่งข้อสอบ?</h2>'
        + '<p>ตอบแล้ว <strong>' + (questions.length - unanswered.length) + "/" + questions.length + "</strong> ข้อ" + (flagged.length ? " · ติดธง " + flagged.length + " ข้อ" : "") + "</p>"
        + (unanswered.length ? '<div class="callout trap"><div class="callout-title">ยังไม่ได้ตอบ (' + unanswered.length + ' ข้อ)</div><div class="q-list-inline">' + unanswered.map(function (n) { return "<span>" + n + "</span>"; }).join("") + "</div></div>" : '<div class="callout tip"><div class="callout-title">ครบทุกข้อแล้ว ✓</div><div>พร้อมส่งแล้ว</div></div>')
        + (flagged.length ? '<div class="callout"><div class="callout-title">ข้อที่ติดธง (' + flagged.length + ')</div><div class="q-list-inline">' + flagged.map(function (n) { return "<span>" + n + "</span>"; }).join("") + "</div></div>" : "")
        + '<div class="modal-actions"><button class="btn btn-outline" id="cancel-submit" type="button">ทำต่อ</button><button class="btn btn-primary" id="confirm-submit" type="button">ส่งข้อสอบ</button></div>'
        + "</div>";
      document.body.appendChild(backdrop);
      backdrop.querySelector("#cancel-submit").addEventListener("click", function () { backdrop.remove(); });
      backdrop.querySelector("#confirm-submit").addEventListener("click", function () { backdrop.remove(); finalize(false); });
      backdrop.addEventListener("click", function (ev) { if (ev.target === backdrop) backdrop.remove(); });
    }

    function finalize(autoSubmitted) {
      flushTime(curMeta());
      var total = questions.length, correct = 0;
      var partScores = { 5: { correct: 0, total: 0 }, 6: { correct: 0, total: 0 }, 7: { correct: 0, total: 0 } };
      var tagStats = {};
      var perPartSec = { 5: 0, 6: 0, 7: 0 };
      var questionResults = [];
      var flaggedOut = [];
      questions.forEach(function (e) {
        var userAnswer = session.answers[e.qid] || null;
        var isCorrect = userAnswer === e.q.answer;
        if (isCorrect) correct++;
        if (e.part) { partScores[e.part].total++; if (isCorrect) partScores[e.part].correct++; perPartSec[e.part] += (session.perQuestion[e.qid] || 0); }
        (e.q.tags || []).forEach(function (t) {
          if (!tagStats[t]) tagStats[t] = { total: 0, wrong: 0 };
          tagStats[t].total++;
          if (!isCorrect) tagStats[t].wrong++;
        });
        questionResults.push({ qid: e.qid, no: e.no, part: e.part, answer: e.q.answer, userAnswer: userAnswer, tags: e.q.tags || [], difficulty: e.q.difficulty, source: e.source, contextHeader: e.context ? e.context.header : null });
        if (session.flags[e.qid]) flaggedOut.push(e.qid);
      });
      var timeUsedSec = Math.round((Date.now() - session.startedAt) / 1000);
      var attempt = {
        id: "att-" + Date.now(),
        examId: examId === "_" ? null : examId,
        mode: mode,
        examTitle: session.title,
        submittedAt: Date.now(),
        autoSubmitted: !!autoSubmitted,
        totalCorrect: correct,
        totalQuestions: total,
        partScores: partScores,
        timeUsedSec: timeUsedSec,
        perPartSec: perPartSec,
        tagStats: tagStats,
        flags: flaggedOut,
        questionResults: questionResults
      };
      App.store.saveAttempt(attempt);
      // สมุดข้อผิด: บันทึกทุกข้อ (ผิด → เข้า, ถูกติดกัน 2 ครั้ง → ออก)
      questions.forEach(function (e) {
        var isCorrect = session.answers[e.qid] === e.q.answer;
        App.store.recordMistakeOutcome({ qid: e.qid, examId: examId === "_" ? null : examId, no: e.no, part: e.part, tags: e.q.tags || [], correct: isCorrect });
      });
      App.store.clearCurrentExam();
      if (timer) timer.stop();
      App.navigate("#/result/" + attempt.id);
    }

    // beforeunload
    var beforeUnloadHandler = function (ev) {
      if (!session.submitted) { ev.preventDefault(); ev.returnValue = ""; return ""; }
    };
    window.addEventListener("beforeunload", beforeUnloadHandler);
    // keyboard
    var keyHandler = function (ev) {
      var target = ev.target;
      if (target && /INPUT|TEXTAREA|SELECT/.test(target.tagName)) return;
      var active = document.activeElement;
      if (active && active.id === "app") { /* fine */ }
      var meta = questions[state.index];
      if (!meta) return;
      var k = ev.key;
      if (/^[1-4a-dA-D]$/.test(k)) {
        var idx = /^[1-4]$/.test(k) ? parseInt(k, 10) - 1 : "abcd".indexOf(k.toLowerCase());
        var qEl = appEl.querySelector('.question[data-qid="' + meta.qid + '"]');
        var opt = qEl ? qEl.querySelector('input[value="' + LETTERS[idx] + '"]') : null;
        if (opt && !opt.disabled) { opt.checked = true; opt.dispatchEvent(new Event("change", { bubbles: true })); }
        ev.preventDefault();
      } else if (k === "ArrowLeft") { go(-1); ev.preventDefault(); }
      else if (k === "ArrowRight") { go(1); ev.preventDefault(); }
      else if (k === "f" || k === "F") { toggleFlag(meta); ev.preventDefault(); }
    };
    document.addEventListener("keydown", keyHandler);

    App._currentCleanup = function () {
      if (timer) timer.stop();
      window.removeEventListener("beforeunload", beforeUnloadHandler);
      document.removeEventListener("keydown", keyHandler);
    };

    renderAll();
  }

  // ===== helpers: build/rebuild session =====
  function buildQuestions(exam, mode, partList, drillTag, drillLimit, appEl, attemptId) {
    var questions = [];
    if (mode === "retry") {
      var wrong = collectRetryQuestions(attemptId);
      if (!wrong.length) {
        appEl.innerHTML = '<div class="card"><h1>ไม่มีข้อที่ผิดในผลสอบนี้</h1><p class="muted">เยี่ยมมาก — ตอบถูกหมดทุกข้อ หรือไม่พบข้อมูลผลสอบ (อาจถูกล้างจากเครื่องแล้ว)</p><p><a class="btn btn-primary" href="#/exams">กลับไปหน้า Mock Exam</a></p></div>';
        return null;
      }
      questions = wrong; // คงเลขข้อเดิมไว้ (navigator จะแสดงเลขข้อจริง)
      return questions;
    }
    if (mode === "drill") {
      var all = collectDrillQuestions(drillTag);
      if (!all.length) {
        appEl.innerHTML = '<div class="card"><h1>ไม่พบข้อสอบสำหรับ tag นี้</h1><p class="muted">ยังไม่มีข้อสอบที่มี tag <code>' + utils.escapeHtml(drillTag) + '</code> — เพิ่มข้อสอบ/ควิซก่อน หรือเลือก tag อื่น</p><p><a class="btn btn-primary" href="#/exams">กลับไปหน้าเลือกชุดสอบ</a></p></div>';
        return null;
      }
      questions = shuffle(all).slice(0, drillLimit);
      // renumber sequentially for drill
      questions.forEach(function (e, i) { e.no = i + 1; });
    } else if (mode === "part") {
      collectExamQuestions(exam).forEach(function (entry) {
        if (partList.indexOf(entry.part) !== -1) questions.push(entry);
      });
    } else {
      questions = collectExamQuestions(exam);
    }
    if (!questions.length) {
      appEl.innerHTML = '<div class="card"><h1>ไม่พบข้อสอบ</h1><p class="muted">เงื่อนไขไม่ตรงกับชุดใด ๆ</p><p><a class="btn btn-primary" href="#/exams">กลับไปหน้าเลือกชุดสอบ</a></p></div>';
      return null;
    }
    return questions;
  }

  function rebuildQuestions(session) {
    var questions = [];
    if (session.mode === "retry") {
      var wrong = collectRetryQuestions(session.drillTag); // retry เก็บ attemptId ไว้ใน drillTag
      var rmap = {};
      wrong.forEach(function (e) { rmap[e.qid] = e; });
      questions = (session.questionQids || []).map(function (qid) { return rmap[qid]; }).filter(Boolean);
      return questions;
    }
    if (!session.examId) {
      // drill: look up by qid
      var all = collectDrillQuestions(session.drillTag);
      var map = {};
      all.forEach(function (e) { map[e.qid] = e; });
      questions = (session.questionQids || []).map(function (qid) { return map[qid]; }).filter(Boolean);
      questions.forEach(function (e, i) { e.no = i + 1; });
      return questions;
    }
    var exam = (window.TOEIC.exams || {})[session.examId];
    if (!exam) return [];
    var all = collectExamQuestions(exam);
    var set = {};
    (session.questionQids || []).forEach(function (qid) { set[qid] = true; });
    questions = all.filter(function (e) { return set[e.qid]; });
    return questions;
  }

  function createSession(exam, mode, partList, drillTag, drillLimit, instantReveal, timed, title, key, questions) {
    var startedAt = Date.now();
    var totalMinutes = 0;
    if (timed) {
      if (mode === "full") totalMinutes = 75;
      else totalMinutes = partList.reduce(function (sum, p) { return sum + (PART_TIME[p] || 0); }, 0);
    }
    return {
      key: key,
      examId: exam ? exam.id : null,
      mode: mode,
      title: title,
      partList: partList,
      drillTag: drillTag,
      drillLimit: drillLimit,
      instantReveal: !!instantReveal,
      timed: !!timed,
      timeLimitMin: totalMinutes || null,
      startedAt: startedAt,
      endAt: timed && totalMinutes ? startedAt + totalMinutes * 60 * 1000 : null,
      answers: {},
      flags: {},
      perQuestion: {},
      questionQids: questions.map(function (e) { return e.qid; }),
      index: 0,
      currentNo: questions[0] ? questions[0].no : 1,
      submitted: false,
      savedAt: startedAt
    };
  }

  App.registerRoute("#/exam/:id/:mode", render);
  App.registerRoute("#/drill/:tag", function (params, query, appEl) {
    // เข้าผ่าน route drill แยก → ใช้โหมด drill กับ tag ที่ให้มา
    var examParams = { id: "_", mode: "drill" };
    render(examParams, { tag: params.tag, limit: query.limit || "10" }, appEl);
  });
  App.registerRoute("#/retry/:attemptId", function (params, query, appEl) {
    // ทำใหม่เฉพาะข้อที่ผิดของ attempt นั้น ๆ
    render({ id: "_", mode: "retry" }, { attemptId: params.attemptId }, appEl);
  });
  App.views = App.views || {};
  App.views.exam = render;
})();
