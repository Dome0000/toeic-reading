/* js/core/utils.js — helpers ใช้ร่วมกันทั้งเว็บ */
(function () {
  var App = window.App = window.App || {};
  var utils = {};

  var ESCAPE_MAP = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  utils.escapeHtml = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ESCAPE_MAP[c]; });
  };

  // strip HTML tags → ข้อความล้วน (ใช้เทียบ evidence quote)
  utils.stripHtml = function (html) {
    var tmp = document.createElement("div");
    tmp.innerHTML = String(html || "");
    return (tmp.textContent || "").replace(/\s+/g, " ").trim();
  };

  utils.normalizeSpace = function (s) {
    return String(s || "").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
  };

  utils.formatTime = function (totalSeconds) {
    var s = Math.max(0, Math.floor(totalSeconds));
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    var mm = (m < 10 ? "0" : "") + m, ss = (sec < 10 ? "0" : "") + sec;
    return h > 0 ? h + ":" + mm + ":" + ss : mm + ":" + ss;
  };

  utils.formatDateTime = function (ts) {
    var d = new Date(ts);
    var p = function (n) { return (n < 10 ? "0" : "") + n; };
    return p(d.getDate()) + "/" + p(d.getMonth() + 1) + "/" + d.getFullYear() + " " + p(d.getHours()) + ":" + p(d.getMinutes());
  };

  utils.timeAgo = function (ts) {
    var diff = Date.now() - ts, min = Math.floor(diff / 60000);
    if (min < 1) return "เมื่อสักครู่";
    if (min < 60) return min + " นาทีที่แล้ว";
    var hr = Math.floor(min / 60);
    if (hr < 24) return hr + " ชั่วโมงที่แล้ว";
    var d = Math.floor(hr / 24);
    return d + " วันที่แล้ว";
  };

  utils.letters = ["A", "B", "C", "D"];

  // คะแนน Reading โดยประมาณ (ไม่ใช่ตารางแปลงคะแนนทางการของ ETS) — แสดงเป็นช่วง
  utils.approxReadingRange = function (rawCorrect, totalQuestions) {
    totalQuestions = totalQuestions || 100;
    var ratio = totalQuestions > 0 ? rawCorrect / totalQuestions : 0;
    var mid = Math.round(5 + ratio * 490);
    var spread = 35;
    var low = Math.max(5, Math.round((mid - spread) / 5) * 5);
    var high = Math.min(495, Math.round((mid + spread) / 5) * 5);
    return { low: low, high: high, mid: mid };
  };

  utils.debounce = function (fn, wait) {
    var t = null;
    return function () {
      var args = arguments, self = this;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(self, args); }, wait);
    };
  };

  utils.toast = function (message) {
    var el = document.getElementById("toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.className = "toast";
      el.setAttribute("role", "status");
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(utils._toastTimer);
    utils._toastTimer = setTimeout(function () { el.classList.remove("show"); }, 2600);
  };

  // ชุดคำถามแผ่ราบ: รองรับ item แบบข้อเดี่ยว และชุดบทความ (passage set)
  // คืน array ของ { q, context } โดย context = { passages, header } หรือ null
  utils.flattenQuizItems = function (items) {
    var out = [];
    (items || []).forEach(function (item) {
      if (item && Array.isArray(item.questions)) {
        item.questions.forEach(function (q) {
          out.push({ q: q, context: { header: item.header || "", passages: item.passages || [] } });
        });
      } else if (item) {
        out.push({ q: item, context: null });
      }
    });
    return out;
  };

  utils.collectAllQuestions = function (exam) {
    // คืน array ของ { no, q, part, setId } ครบ 100 ข้อของชุดสอบ
    var out = [];
    (exam.part5 || []).forEach(function (q) { out.push({ no: q.no, q: q, part: 5, setId: null }); });
    (exam.part6 || []).forEach(function (set) {
      (set.questions || []).forEach(function (q) { out.push({ no: q.no, q: q, part: 6, setId: set.setId }); });
    });
    (exam.part7Single || []).forEach(function (set) {
      (set.questions || []).forEach(function (q) { out.push({ no: q.no, q: q, part: 7, setId: set.setId }); });
    });
    (exam.part7Multi || []).forEach(function (set) {
      (set.questions || []).forEach(function (q) { out.push({ no: q.no, q: q, part: 7, setId: set.setId }); });
    });
    return out;
  };

  utils.qid = function (examId, no) { return examId + "-" + no; };

  // หาข้อสอบจาก qid ทุกแหล่งในเว็บ (exams + lesson quizzes)
  // คืน { q, source, context } หรือ null
  utils.findQuestionByQid = function (qid) {
    var m = /^(.+)-(\d+)$/.exec(qid);
    if (m) {
      var exam = (window.TOEIC.exams || {})[m[1]];
      if (exam) {
        var all = [];
        (exam.part5 || []).forEach(function (q) { all.push({ q: q, part: 5, setId: null, source: exam.title || exam.id }); });
        (exam.part6 || []).forEach(function (set) {
          (set.questions || []).forEach(function (q) { all.push({ q: q, part: 6, setId: set.setId, source: exam.title || exam.id, context: { header: set.header, passages: [{ label: "Passage", html: set.passageHtml }] } }); });
        });
        (exam.part7Single || []).concat(exam.part7Multi || []).forEach(function (set) {
          (set.questions || []).forEach(function (q) { all.push({ q: q, part: 7, setId: set.setId, source: exam.title || exam.id, context: { header: set.header, passages: set.passages } }); });
        });
        var hit = all.find(function (e) { return e.q.no === parseInt(m[2], 10); });
        if (hit) return { q: hit.q, source: hit.source, context: hit.context || null, examId: exam.id, part: hit.part };
      }
    }
    var lm = /^lesson-(.+)-quiz-(\d+)$/.exec(qid);
    if (lm) {
      var l = (window.TOEIC.lessons || {})[lm[1]];
      if (l) {
        var flat = utils.flattenQuizItems(l.quiz);
        var idx = parseInt(lm[2], 10);
        var item = flat[idx];
        if (item) return { q: item.q, source: l.title, context: item.context || null, lessonId: lm[1], part: null };
      }
    }
    return null;
  };

  App.utils = utils;
})();
