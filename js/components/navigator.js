/* js/components/navigator.js — Question Navigator grid ข้อ 101–200 */
(function () {
  var App = window.App = window.App || {};
  var utils = App.utils;

  /* renderNavigatorHTML({ questions:[{no}], answers:{qid:letter}, flags:{}, currentNo }) */
  function renderHTML(config) {
    var html = '<div class="q-nav" role="navigation" aria-label="ตัวนำทางข้อสอบ">';
    config.questions.forEach(function (q) {
      var qid = config.qidOf(q);
      var answered = !!config.answers[qid];
      var flagged = !!config.flags[qid];
      var cls = [];
      if (answered) cls.push("answered");
      if (flagged) cls.push("flagged");
      if (config.currentNo === q.no) cls.push("current");
      var label = "ข้อ " + q.no + (answered ? " (ตอบแล้ว)" : " (ยังไม่ตอบ)") + (flagged ? " ติดธง" : "");
      html += '<button type="button" data-goto-no="' + q.no + '" class="' + cls.join(" ") + '" aria-label="' + utils.escapeHtml(label) + '">' + q.no + "</button>";
    });
    html += "</div>";
    return html;
  }

  // legend HTML
  function legendHTML() {
    return '<div class="kbd-hint" aria-hidden="true">'
      + '<span class="badge badge-soft">น้ำเงิน = ตอบแล้ว</span> '
      + '<span class="badge" style="border:2px solid var(--accent)">กรอบส้ม = ติดธง</span> '
      + '<span class="badge" style="box-shadow:0 0 0 2px var(--text) inset">กรอบเข้ม = ข้อปัจจุบัน</span>'
      + "</div>";
  }

  App.navigator = { renderHTML: renderHTML, legendHTML: legendHTML };
})();
