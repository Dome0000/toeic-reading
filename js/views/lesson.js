/* js/views/lesson.js — เรนเดอร์บทเรียน + quiz + print */
(function () {
  var App = window.App = window.App || {};
  var utils = App.utils;

  var FREQ_BADGE = { "สูง": "badge-freq-high", "กลาง": "badge-medium", "ต่ำ": "badge-low", "ต่ำ–กลาง": "badge-low" };

  function renderBlock(block) {
    if (!block || !block.type) return "";
    var t = block.type;
    if (t === "text") return block.html || "";
    if (t === "table") {
      var h = block.title ? '<p><strong>' + utils.escapeHtml(block.title) + "</strong></p>" : "";
      h += '<div class="table-wrap"><table class="data"><thead><tr>';
      (block.headers || []).forEach(function (th) { h += "<th>" + utils.escapeHtml(th) + "</th>"; });
      h += "</tr></thead><tbody>";
      (block.rows || []).forEach(function (row) {
        h += "<tr>" + row.map(function (cell) { return "<td>" + cell + "</td>"; }).join("") + "</tr>";
      });
      return h + "</tbody></table></div>";
    }
    if (t === "examples") {
      var id = "ex-" + Math.random().toString(36).slice(2, 8);
      var ex = '<div class="examples-block">';
      if (block.title) ex += '<p><strong>' + utils.escapeHtml(block.title) + "</strong></p>";
      ex += '<button class="btn btn-outline no-print toggle-translations" data-target="' + id + '" type="button">แสดง/ซ่อนคำแปล</button><div id="' + id + '">';
      (block.items || []).forEach(function (item, i) {
        ex += '<div class="example-item"><div class="en">' + (i + 1) + ". " + utils.escapeHtml(item.en) + '</div>'
          + '<div class="example-th">' + utils.escapeHtml(item.th || "") + "</div></div>";
      });
      return ex + "</div></div>";
    }
    if (t === "clue") {
      return '<div class="callout tip"><div class="callout-title">' + utils.escapeHtml(block.title || "เห็นอะไร → ตอบอะไร") + "</div><div>" + (block.html || "") + "</div></div>";
    }
    if (t === "callout") {
      var tone = block.tone || "tip";
      var title = block.title || (tone === "trap" ? "กับดักที่ข้อสอบชอบใช้" : tone === "thai-mistake" ? "จุดที่คนไทยมักพลาด" : "เทคนิค");
      return '<div class="callout ' + utils.escapeHtml(tone) + '"><div class="callout-title">' + utils.escapeHtml(title) + "</div><div>" + (block.html || "") + "</div></div>";
    }
    if (t === "cheatsheet") {
      return '<div class="cheatsheet" id="cheatsheet"><div class="callout-title" style="color:var(--primary)">Cheat Sheet — สรุปท้ายบท</div>' + (block.html || "") + "</div>";
    }
    return "";
  }

  function findAdjacent(current) {
    var lessons = Object.keys(window.TOEIC.lessons || {}).map(function (id) { return window.TOEIC.lessons[id]; })
      .sort(function (a, b) { return (a.module - b.module) || ((a.order || 0) - (b.order || 0)); });
    var idx = lessons.findIndex(function (l) { return l.id === current.id; });
    return { prev: idx > 0 ? lessons[idx - 1] : null, next: idx >= 0 && idx < lessons.length - 1 ? lessons[idx + 1] : null };
  }

  function render(params, query, appEl) {
    var id = params.id;
    var lesson = (window.TOEIC.lessons || {})[id];
    if (!lesson) {
      appEl.innerHTML = '<div class="card"><h1>ไม่พบบทเรียน</h1><p class="muted">ไม่มีบทเรียน id <code>' + utils.escapeHtml(id) + '</code></p><p><a class="btn btn-primary" href="#/lessons">ดูบทเรียนทั้งหมด</a></p></div>';
      return;
    }

    var freq = lesson.frequency || "";
    var freqCls = FREQ_BADGE[freq] || "badge-soft";
    var state = App.store.getLessonState(id) || {};
    var adj = findAdjacent(lesson);

    var html = '<div class="lesson-hero"><div class="crumbs"><a href="#/">หน้าแรก</a> › <a href="#/lessons">บทเรียน</a> › ' + utils.escapeHtml(lesson.title) + "</div>"
      + "<h1>" + utils.escapeHtml(lesson.title) + "</h1>"
      + '<p><span class="badge ' + freqCls + '">ความถี่ที่ออกสอบ: ' + utils.escapeHtml(freq || "n/a") + "</span>"
      + (state.done ? ' <span class="badge badge-low">เรียนจบแล้ว ✓</span>' : "")
      + (state.quizTotal != null ? ' <span class="badge badge-soft">ควิซดีสุด ' + state.quizBest + "/" + state.quizTotal + "</span>" : "")
      + "</p></div>";

    html += '<div class="lesson-body blocks">' + (lesson.blocks || []).map(renderBlock).join("\n") + "</div>";

    // quiz section
    var quizItems = lesson.quiz || [];
    if (quizItems.length) {
      html += '<section class="quiz-section no-print card" style="margin-top:18px"><div id="lesson-quiz"></div></section>';
    } else {
      html += '<div class="card no-print" style="margin-top:18px"><p class="muted">บทนี้ไม่มีแบบทดสอบ (เป็นหน้าสรุป/รวมความรู้)</p></div>';
    }

    html += '<div class="lesson-actions no-print">'
      + '<button class="btn ' + (state.done ? "btn-outline" : "btn-primary") + '" id="toggle-done-btn" type="button">' + (state.done ? "ยกเลิกสถานะจบแล้ว" : "✓ ทำเครื่องหมายว่าเรียนจบแล้ว") + "</button>"
      + '<button class="btn btn-outline" id="print-lesson-btn" type="button">🖨 พิมพ์ / บันทึก PDF</button>'
      + (adj.prev ? '<a class="btn btn-ghost" href="#/lesson/' + utils.escapeHtml(adj.prev.id) + '">← ' + utils.escapeHtml(adj.prev.title) + "</a>" : "")
      + (adj.next ? '<a class="btn btn-ghost" href="#/lesson/' + utils.escapeHtml(adj.next.id) + '">' + utils.escapeHtml(adj.next.title) + " →</a>" : "")
      + "</div>";

    appEl.innerHTML = html;

    // toggle translations
    appEl.querySelectorAll(".toggle-translations").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var box = appEl.querySelector("#" + btn.getAttribute("data-target"));
        if (!box) return;
        box.querySelectorAll(".example-th").forEach(function (el) { el.hidden = !el.hidden; });
      });
    });
    // default: ซ่อนคำแปลไว้ก่อน
    appEl.querySelectorAll(".example-th").forEach(function (el) { el.hidden = true; });

    var doneBtn = appEl.querySelector("#toggle-done-btn");
    if (doneBtn) doneBtn.addEventListener("click", function () {
      var nowDone = !(App.store.getLessonState(id) || {}).done;
      App.store.markLessonDone(id, nowDone);
      utils.toast(nowDone ? "บันทึกว่าเรียนจบแล้ว" : "ยกเลิกสถานะจบแล้ว");
      render(params, query, appEl);
    });
    var printBtn = appEl.querySelector("#print-lesson-btn");
    if (printBtn) printBtn.addEventListener("click", function () { window.print(); });

    if (quizItems.length) {
      App.quiz.mount(appEl.querySelector("#lesson-quiz"), { lessonId: lesson.id, items: quizItems });
    }
  }

  App.registerRoute("#/lesson/:id", render);
  App.views = App.views || {};
  App.views.lesson = render;
})();
