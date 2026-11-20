/* js/core/store.js — localStorage wrapper (prefix "toeicR:") + export/import/reset */
(function () {
  var App = window.App = window.App || {};
  var PREFIX = "toeicR:";

  function get(key, fallback) {
    try {
      var raw = localStorage.getItem(PREFIX + key);
      return raw == null ? fallback : JSON.parse(raw);
    } catch (e) {
      console.warn("store.get failed:", key, e);
      return fallback;
    }
  }
  function set(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.warn("store.set failed:", key, e);
      return false;
    }
  }
  function remove(key) {
    try { localStorage.removeItem(PREFIX + key); } catch (e) { /* ignore */ }
  }

  var store = {};
  store.get = get;
  store.set = set;
  store.remove = remove;

  // ===== settings =====
  store.getSettings = function () {
    return Object.assign({ theme: "auto", fontSize: "normal" }, get("settings", {}));
  };
  store.saveSettings = function (patch) {
    var next = Object.assign(store.getSettings(), patch);
    set("settings", next);
    return next;
  };

  // ===== lesson progress =====
  // { [lessonId]: { done: bool, quizBest: number|null, quizTotal: number|null, updatedAt: ts } }
  store.getLessonStates = function () { return get("lessons", {}); };
  store.getLessonState = function (id) { return store.getLessonStates()[id] || null; };
  store.markLessonDone = function (id, done) {
    var all = store.getLessonStates();
    var cur = all[id] || {};
    cur.done = done !== false;
    cur.updatedAt = Date.now();
    all[id] = cur;
    set("lessons", all);
    return cur;
  };
  store.recordQuizResult = function (lessonId, score, total) {
    var all = store.getLessonStates();
    var cur = all[lessonId] || {};
    if (cur.quizTotal !== total || cur.quizBest == null || score > cur.quizBest) {
      cur.quizBest = score;
      cur.quizTotal = total;
    }
    cur.quizTakenAt = Date.now();
    all[lessonId] = cur;
    set("lessons", all);
    return cur;
  };

  // ===== vocab known set =====
  // array ของ "topic::word"
  store.getVocabKnown = function () { return get("vocabKnown", []); };
  store.isVocabKnown = function (topic, word) {
    return store.getVocabKnown().indexOf(topic + "::" + word) !== -1;
  };
  store.toggleVocabKnown = function (topic, word) {
    var list = store.getVocabKnown();
    var key = topic + "::" + word;
    var i = list.indexOf(key);
    if (i === -1) list.push(key); else list.splice(i, 1);
    set("vocabKnown", list);
    return i === -1;
  };

  // ===== attempts (ประวัติการสอบ) =====
  store.getAttempts = function () { return get("attempts", []); };
  store.saveAttempt = function (attempt) {
    var list = store.getAttempts();
    list.push(attempt);
    set("attempts", list);
    return attempt;
  };
  store.getAttempt = function (attemptId) {
    return store.getAttempts().find(function (a) { return a.id === attemptId; }) || null;
  };
  store.deleteAttempt = function (attemptId) {
    var list = store.getAttempts().filter(function (a) { return a.id !== attemptId; });
    set("attempts", list);
    return list.length;
  };
  store.clearAttempts = function () { set("attempts", []); };

  // ===== ข้อสอบที่ทำค้าง (autosave) =====
  store.getCurrentExam = function () { return get("currentExam", null); };
  store.saveCurrentExam = function (state) {
    state.savedAt = Date.now();
    set("currentExam", state);
  };
  store.clearCurrentExam = function () { remove("currentExam"); };

  // ===== Mistake Notebook =====
  // map: qid -> { qid, examId, no, part, tags, wrongCount, consecutiveCorrect, addedAt, lastSeenAt }
  store.getMistakes = function () { return get("mistakes", {}); };
  // เรียกหลังผู้เรียนตอบข้อนั้น (จาก mock หรือ quiz)
  store.recordMistakeOutcome = function (info) {
    var all = store.getMistakes();
    var cur = all[info.qid];
    if (info.correct) {
      if (cur) {
        cur.consecutiveCorrect = (cur.consecutiveCorrect || 0) + 1;
        cur.lastSeenAt = Date.now();
        if (cur.consecutiveCorrect >= 2) {
          delete all[info.qid]; // ตอบถูกติดกัน 2 ครั้ง → ออกจากสมุด
        } else {
          all[info.qid] = cur;
        }
      }
    } else {
      cur = cur || { qid: info.qid, examId: info.examId || null, no: info.no || null, part: info.part || null, tags: info.tags || [], addedAt: Date.now(), wrongCount: 0, consecutiveCorrect: 0 };
      cur.wrongCount = (cur.wrongCount || 0) + 1;
      cur.consecutiveCorrect = 0;
      cur.lastSeenAt = Date.now();
      if (info.tags) cur.tags = info.tags;
      all[info.qid] = cur;
    }
    set("mistakes", all);
    return all;
  };
  store.removeMistake = function (qid) {
    var all = store.getMistakes();
    delete all[qid];
    set("mistakes", all);
  };
  store.clearMistakes = function () { set("mistakes", {}); };

  // ===== export / import / reset =====
  store.exportAll = function () {
    var dump = { prefix: PREFIX, exportedAt: new Date().toISOString(), data: {} };
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf(PREFIX) === 0) {
          try { dump.data[k.slice(PREFIX.length)] = JSON.parse(localStorage.getItem(k)); } catch (e) { /* skip */ }
        }
      }
    } catch (e) { /* ignore */ }
    return JSON.stringify(dump, null, 2);
  };
  store.importAll = function (jsonText) {
    var dump = JSON.parse(jsonText);
    if (!dump || typeof dump !== "object" || !dump.data) throw new Error("ไฟล์ไม่ถูกต้อง: ไม่พบ object data");
    Object.keys(dump.data).forEach(function (k) {
      localStorage.setItem(PREFIX + k, JSON.stringify(dump.data[k]));
    });
    return Object.keys(dump.data).length;
  };
  store.resetAll = function () {
    var toDelete = [];
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf(PREFIX) === 0) toDelete.push(k);
      }
      toDelete.forEach(function (k) { localStorage.removeItem(k); });
    } catch (e) { /* ignore */ }
    return toDelete.length;
  };

  // ===== first visit =====
  store.isFirstVisit = function () { return get("visited", false) !== true; };
  store.markVisited = function () { set("visited", true); };

  App.store = store;
})();
