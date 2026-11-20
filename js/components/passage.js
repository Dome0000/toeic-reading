/* js/components/passage.js — เรนเดอร์บทความ/เอกสาร Part 6 & 7 */
(function () {
  var App = window.App = window.App || {};
  var utils = App.utils;

  // เรนเดอร์ passages array → HTML (label แสดงขอบชนิดเอกสาร)
  function renderPassagesHTML(passages) {
    return (passages || []).map(function (p, i) {
      var multi = (passages || []).length > 1;
      var sep = multi && i > 0 ? '<hr class="multi-passage-separator">' : "";
      var label = p.label ? '<div class="passage-label">' + utils.escapeHtml(p.label) + "</div>" : "";
      return sep + '<div class="passage-doc" data-passage-index="' + i + '">' + label + (p.html || "") + "</div>";
    }).join("");
  }

  // ไฮไลต์ evidence quote ในบทความ (ใช้ในหน้า Review)
  function highlightEvidence(container, evidence) {
    if (!container || !evidence || !evidence.length) return 0;
    var count = 0;
    evidence.forEach(function (ev) {
      var quote = utils.normalizeSpace(ev.quote);
      if (!quote) return;
      var passageIndex = typeof ev.passage === "number" ? ev.passage : 0;
      var root = container.querySelector('.passage-doc[data-passage-index="' + passageIndex + '"]');
      if (!root) return;
      var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
      var textNodes = [], node;
      while ((node = walker.nextNode())) textNodes.push(node);
      var full = "", map = [];
      textNodes.forEach(function (n) {
        var start = full.length;
        full += n.nodeValue;
        map.push({ node: n, start: start, end: full.length });
      });
      var hay = utils.normalizeSpace(full);
      var idx = hay.indexOf(quote);
      if (idx === -1) return; // ไม่พบ — ไม่ไฮไลต์ (validate จะจับเคสนี้แล้ว)
      var endIdx = idx + quote.length;
      // หาช่วงตัวอักษรจริงใน full (normalizeSpace อาจยุบช่องว่าง) — ใช้สัดส่วน heuristic
      var ratio = full.length / (hay.length || 1);
      var approxStart = Math.floor(idx * ratio), approxEnd = Math.ceil(endIdx * ratio);
      var affected = map.filter(function (m) { return m.end > approxStart && m.start < approxEnd; });
      affected.forEach(function (m) {
        var span = document.createElement("span");
        span.className = "evidence-highlight";
        var parent = m.node.parentNode;
        parent.insertBefore(span, m.node);
        span.appendChild(m.node);
        count++;
      });
    });
    return count;
  }

  App.passage = {
    renderHTML: renderPassagesHTML,
    highlightEvidence: highlightEvidence
  };
})();
