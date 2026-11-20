/* js/components/question.js — เรนเดอร์ข้อสอบแบบเดี่ยว (Part 5 / ข้อใน Part 6–7)
   mode: "quiz"  = เฉลยทันที + คำอธิบาย
         "exam"  = ฝั่งข้อสอบ (ไม่เฉลย)
         "review"= แสดงเฉลยคู่กับคำตอบผู้เรียน */
(function () {
  var App = window.App = window.App || {};
  var utils = App.utils;

  var LETTERS = utils.letters;

  function optionLetter(i) { return LETTERS[i]; }

  // สร้าง id ฐานของข้อ (unique ทั้งเว็บ)
  function baseQid(source, no) {
    if (source && source.examId) return source.examId + "-q" + no;
    if (source && source.lessonId) return "lesson-" + source.lessonId + "-q" + no;
    return "q-" + no;
  }

  /* renderQuestionHTML(q, opts)
     opts: { source:{examId}|{lessonId}, mode, selected:"A"|null, qid } */
  function renderQuestionHTML(q, opts) {
    opts = opts || {};
    var mode = opts.mode || "exam";
    var selected = opts.selected || null;
    var qid = opts.qid || baseQid(opts.source, q.no || q.number || 0);
    var name = "opt-" + qid;
    var showAnswer = mode === "review";

    var stemText = typeof q.stem === "string" ? q.stem : "";
    var stemHtml = stemText.trim() === ""
      ? '<span class="muted" style="font-weight:400">(ตอบจากช่องว่างในบทความ)</span>'
      : utils.escapeHtml(stemText).replace(/-------/g, '<span class="blank-inline">-------</span>');

    var html = '<div class="question" data-qid="' + utils.escapeHtml(qid) + '" data-no="' + utils.escapeHtml(String(q.no || "")) + '">';
    html += '<div class="q-stem"><span class="q-no">' + utils.escapeHtml(String(q.no || "")) + '.</span> ' + stemHtml + "</div>";
    html += '<div class="options" role="radiogroup" aria-label="ตัวเลือกข้อ ' + utils.escapeHtml(String(q.no || "")) + '">';

    (q.options || []).forEach(function (opt, i) {
      var letter = optionLetter(i);
      var checked = selected === letter ? " checked" : "";
      var cls = "option";
      if (selected === letter) cls += " selected";
      if (showAnswer) {
        if (letter === q.answer) cls += " correct";
        else if (letter === selected) cls += " wrong";
        cls += " locked";
      }
      var inputAttrs = 'type="radio" name="' + utils.escapeHtml(name) + '" value="' + letter + '"' + checked;
      if (showAnswer) inputAttrs += " disabled";
      html += '<label class="' + cls + '" data-letter="' + letter + '">'
        + '<input ' + inputAttrs + '>'
        + '<span class="opt-letter">(' + letter + ")</span>"
        + "<span>" + utils.escapeHtml(opt) + "</span>"
        + "</label>";
    });
    html += "</div>";

    if (showAnswer) html += renderExplainHTML(q);
    html += "</div>";
    return html;
  }

  // ===== ส่วนเฉลยละเอียด (ใช้ร่วมกัน quiz/review) =====
  function renderExplainHTML(q, opts) {
    opts = opts || {};
    var ex = q.explain || {};
    var html = '<div class="explain">';
    html += '<h4>ทำไม (' + utils.escapeHtml(q.answer || "?") + ') ถูก</h4><div>' + utils.escapeHtml(ex.why || "") + "</div>";

    if (q.translationTh) {
      html += '<div class="translation-th"><strong>แปลประโยค:</strong> ' + utils.escapeHtml(q.translationTh) + "</div>";
    }
    if (opts.evidence && opts.evidence.length) {
      html += '<h4>หลักฐานในบทความ</h4>';
      opts.evidence.forEach(function (ev) {
        html += '<div class="evidence-quote">' + utils.escapeHtml(ev.quote) + "</div>";
      });
    }
    var wrong = ex.wrong || {};
    var others = LETTERS.filter(function (l) { return l !== q.answer; });
    html += '<h4>ทำไมตัวเลือกอื่นผิด</h4><ul class="wrong-list">';
    others.forEach(function (l) {
      if (wrong[l]) html += "<li><b>(" + l + ")</b> " + utils.escapeHtml(wrong[l]) + "</li>";
    });
    html += "</ul>";
    if (ex.tip) {
      html += '<h4>จุดสังเกต / เทคนิค</h4><div>' + utils.escapeHtml(ex.tip) + "</div>";
    }
    if (q.tags && q.tags.length && App.store) {
      var tagsHtml = q.tags.map(function (t) {
        var tag = (window.TOEIC.tags || {})[t];
        if (!tag) return utils.escapeHtml(t);
        return '<a href="#/lesson/' + utils.escapeHtml(tag.lesson) + '">' + utils.escapeHtml(tag.th) + "</a>";
      }).join(" · ");
      html += '<h4>บทเรียนที่เกี่ยวข้อง</h4><div>' + tagsHtml + "</div>";
    }
    html += "</div>";
    return html;
  }

  App.question = {
    renderHTML: renderQuestionHTML,
    renderExplainHTML: renderExplainHTML,
    baseQid: baseQid,
    // อ่านคำตอบที่เลือกจาก DOM ของ .question
    readSelection: function (rootEl) {
      var checked = rootEl.querySelector('input[type="radio"]:checked');
      return checked ? checked.value : null;
    },
    // bind change events ใน container → callback(qid, letter)
    bindOptions: function (container, onChange) {
      container.addEventListener("change", function (ev) {
        var input = ev.target.closest('input[type="radio"]');
        if (!input) return;
        var qEl = input.closest(".question");
        if (!qEl) return;
        container.querySelectorAll('.question[data-qid="' + qEl.getAttribute("data-qid") + '"] .option').forEach(function (optEl) {
          optEl.classList.toggle("selected", optEl.getAttribute("data-letter") === input.value);
        });
        onChange(qEl.getAttribute("data-qid"), input.value, qEl);
      });
    }
  };
})();
