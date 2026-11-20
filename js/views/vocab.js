/* js/views/vocab.js — คลังคำศัพท์ธุรกิจ 13 หมวด + flashcard */
(function () {
  var App = window.App = window.App || {};
  var utils = App.utils;

  var TOPICS = [
    { id: "office", title: "Office & Administration", icon: "🗂️" },
    { id: "hr", title: "HR & Recruitment", icon: "👥" },
    { id: "finance", title: "Finance & Accounting", icon: "📊" },
    { id: "marketing", title: "Marketing & Sales", icon: "📣" },
    { id: "purchasing", title: "Purchasing & Logistics", icon: "🚚" },
    { id: "manufacturing", title: "Manufacturing & Quality Control", icon: "🏭" },
    { id: "travel", title: "Travel & Hospitality", icon: "✈️" },
    { id: "dining", title: "Dining & Events", icon: "🍽️" },
    { id: "realestate", title: "Real Estate & Facilities", icon: "🏢" },
    { id: "tech", title: "Technology & IT", icon: "💻" },
    { id: "health", title: "Health & Insurance", icon: "🩺" },
    { id: "legal", title: "Contracts & Legal", icon: "⚖️" },
    { id: "customer", title: "Customer Service", icon: "🎧" }
  ];

  function getWords(topic) {
    var v = (window.TOEIC.vocab || {})[topic];
    return v ? v.words || [] : [];
  }
  function knownCount(topic) {
    return getWords(topic).filter(function (w) { return App.store.isVocabKnown(topic, w.word); }).length;
  }
  function topicProgressHTML(topic) {
    var total = getWords(topic).length, known = knownCount(topic);
    var pct = total ? Math.round((known / total) * 100) : 0;
    return '<div class="vocab-card-progress"><span class="muted" style="font-size:.8rem">จำได้ ' + known + "/" + total + '</span><div class="progress"><div style="width:' + pct + '%"></div></div></div>';
  }

  // ===== index: #/vocab =====
  function renderIndex(params, query, appEl) {
    var q = (query.q || "").trim().toLowerCase();
    var html = '<div class="lesson-hero"><div class="crumbs"><a href="#/">หน้าแรก</a> › คลังคำศัพท์</div>'
      + "<h1>คลังคำศัพท์ธุรกิจ (13 หมวด)</h1>"
      + '<p class="muted">คำศัพท์ TOEIC เชิงธุรกิจพร้อมคำแปล ตัวอย่างประโยค คำคู่ (collocations) และคำพ้องความหมาย — ค้นหา กรองหมวด อ่านเป็นแฟลชการ์ด หรือทำเครื่องหมาย "จำได้แล้ว"</p></div>';

    html += '<form id="vocab-search-form" class="vocab-controls" role="search">'
      + '<input type="search" id="vocab-search" placeholder="ค้นหาคำศัพท์หรือคำแปล…" aria-label="ค้นหาคำศัพท์" value="' + utils.escapeHtml(q) + '">'
      + '<button class="btn btn-primary" type="submit">ค้นหา</button></form>';

    if (q) {
      var matches = [];
      TOPICS.forEach(function (t) {
        getWords(t.id).forEach(function (w) {
          var hay = (w.word + " " + (w.th || "") + " " + (w.syn || []).join(" ") + " " + (w.colloc || []).join(" ")).toLowerCase();
          if (hay.indexOf(q) !== -1) matches.push({ topic: t, word: w });
        });
      });
      html += '<p class="muted">พบ ' + matches.length + ' คำ → <a href="#/vocab">ล้างการค้นหา</a></p>';
      html += '<div class="vocab-grid">' + matches.slice(0, 60).map(function (m) {
        return wordCardHTML(m.word, m.topic);
      }).join("") + "</div>";
    } else {
      html += '<div class="vocab-grid">' + TOPICS.map(function (t) {
        return '<a class="card vocab-topic-card" style="text-decoration:none;color:inherit" href="#/vocab/' + t.id + '">'
          + '<div style="font-size:1.6rem" aria-hidden="true">' + t.icon + "</div>"
          + "<h2 style=\"margin:.2em 0 .1em;font-size:1.05rem\">" + utils.escapeHtml(t.title) + "</h2>"
          + topicProgressHTML(t.id)
          + "</a>";
      }).join("") + "</div>";
    }
    appEl.innerHTML = html;

    var form = appEl.querySelector("#vocab-search-form");
    if (form) {
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var val = appEl.querySelector("#vocab-search").value.trim();
        App.navigate(val ? "#/vocab?q=" + encodeURIComponent(val) : "#/vocab");
      });
    }
    bindWordCards(appEl);
  }

  function wordCardHTML(w, topic) {
    var known = App.store.isVocabKnown(topic.id, w.word);
    return '<article class="word-card' + (known ? " known" : "") + '" data-topic="' + utils.escapeHtml(topic.id) + '" data-word="' + utils.escapeHtml(w.word) + '">'
      + '<div class="word">' + utils.escapeHtml(w.word) + '<span class="pos">' + utils.escapeHtml(w.pos) + '</span></div>'
      + '<div class="th">' + utils.escapeHtml(w.th) + '</div>'
      + '<div class="ex">' + utils.escapeHtml(w.ex) + '<br><span class="muted">' + utils.escapeHtml(w.exTh) + "</span></div>"
      + '<div class="chips">' + (w.colloc || []).map(function (c) { return '<span class="chip">' + utils.escapeHtml(c) + "</span>"; }).join("") + "</div>"
      + '<div class="chips" style="margin-top:4px">' + (w.syn || []).map(function (s) { return '<span class="chip" style="background:var(--primary-soft);color:var(--primary)">≈ ' + utils.escapeHtml(s) + "</span>"; }).join("") + "</div>"
      + '<button class="btn btn-ghost know-btn" type="button" data-toggle-known="1">' + (known ? "✓ จำได้แล้ว" : "ยังไม่แน่ใจ") + "</button>"
      + "</article>";
  }

  function bindWordCards(appEl) {
    appEl.querySelectorAll("[data-toggle-known]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var card = btn.closest(".word-card");
        var topic = card.getAttribute("data-topic");
        var word = card.getAttribute("data-word");
        var nowKnown = App.store.toggleVocabKnown(topic, word);
        card.classList.toggle("known", nowKnown);
        btn.textContent = nowKnown ? "✓ จำได้แล้ว" : "ยังไม่แน่ใจ";
        App.utils.toast(nowKnown ? 'บันทึก "' + word + '" ว่าจำได้แล้ว' : 'ย้าย "' + word + '" กลับไปทบทวน');
      });
    });
  }

  // ===== topic view: #/vocab/:topic =====
  function renderTopic(params, query, appEl) {
    var topicId = params.topic;
    var topic = TOPICS.find(function (t) { return t.id === topicId; });
    var words = getWords(topicId);
    if (!topic || !words.length) {
      appEl.innerHTML = '<div class="card"><h1>ไม่พบหมวดคำศัพท์</h1><p class="muted">ไม่มีหมวด id <code>' + utils.escapeHtml(topicId || "") + '</code></p><p><a class="btn btn-primary" href="#/vocab">กลับไปหน้าคลังคำศัพท์</a></p></div>';
      return;
    }
    var q = (query.q || "").trim().toLowerCase();
    var mode = query.mode === "flashcard" ? "flashcard" : "cards";

    var filtered = q
      ? words.filter(function (w) {
          var hay = (w.word + " " + (w.th || "") + " " + (w.syn || []).join(" ") + " " + (w.colloc || []).join(" ")).toLowerCase();
          return hay.indexOf(q) !== -1;
        })
      : words;

    var html = '<div class="lesson-hero"><div class="crumbs"><a href="#/">หน้าแรก</a> › <a href="#/vocab">คลังคำศัพท์</a> › ' + utils.escapeHtml(topic.title) + "</div>"
      + "<h1>" + topic.icon + " " + utils.escapeHtml(topic.title) + "</h1>"
      + '<p class="muted">' + words.length + ' คำ · จำได้แล้ว ' + knownCount(topicId) + " คำ</p></div>";

    html += '<form id="vocab-search-form" class="vocab-controls" role="search">'
      + '<input type="search" id="vocab-search" placeholder="ค้นหาในหมวดนี้…" aria-label="ค้นหาคำศัพท์" value="' + utils.escapeHtml(q) + '">'
      + '<a class="btn btn-outline" href="#/vocab/' + topicId + "?mode=cards" + (q ? "&q=" + encodeURIComponent(q) : "") + '">มุมมองการ์ด</a>'
      + '<a class="btn btn-outline" href="#/vocab/' + topicId + "?mode=flashcard" + (q ? "&q=" + encodeURIComponent(q) : "") + '">Flashcard</a>'
      + "</form>";

    if (mode === "flashcard") {
      html += renderFlashcardHTML(filtered, topicId);
    } else {
      if (q) html += '<p class="muted">พบ ' + filtered.length + ' คำ → <a href="#/vocab/' + topicId + '">ล้างการค้นหา</a></p>';
      html += '<div class="vocab-grid">' + filtered.map(function (w) { return wordCardHTML(w, topic); }).join("") + "</div>";
    }
    appEl.innerHTML = html;

    var form = appEl.querySelector("#vocab-search-form");
    if (form) {
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var val = appEl.querySelector("#vocab-search").value.trim();
        App.navigate("#/vocab/" + topicId + "?mode=" + mode + (val ? "&q=" + encodeURIComponent(val) : ""));
      });
    }
    bindWordCards(appEl);
    if (mode === "flashcard") bindFlashcard(appEl, filtered, topicId, topic);
  }

  function renderFlashcardHTML(words, topicId) {
    if (!words.length) return '<p class="muted">ไม่พบคำที่ตรงกับการค้นหา</p>';
    return '<div class="flashcard-wrap">'
      + '<div class="flashcard" id="flashcard" role="button" tabindex="0" aria-label="แตะเพื่อพลิกการ์ด">'
      + '<div class="flashcard-inner">'
      + '<div class="flash-face flash-front"><div class="pos" id="fc-pos"></div><div class="word" id="fc-word" style="font-size:2.2rem;font-weight:800"></div><p class="muted">แตะเพื่อดูความหมาย</p></div>'
      + '<div class="flash-face flash-back"><div class="th" id="fc-th" style="font-size:1.5rem;font-weight:700;color:var(--primary)"></div>'
      + '<div class="ex" id="fc-ex" style="margin-top:10px"></div>'
      + '<div class="muted" id="fc-exth" style="margin-top:6px"></div></div>'
      + "</div></div>"
      + '<div class="flashcard-nav" style="display:flex;gap:10px;align-items:center">'
      + '<button class="btn btn-outline" id="fc-prev" type="button" aria-label="ก่อนหน้า">← ก่อนหน้า</button>'
      + '<span id="fc-count" class="muted">1 / ' + words.length + "</span>"
      + '<button class="btn btn-outline" id="fc-next" type="button" aria-label="ถัดไป">ถัดไป →</button>'
      + "</div>"
      + '<button class="btn btn-primary" id="fc-toggle-known" type="button">ยังไม่แน่ใจ</button>'
      + "</div>";
  }

  function bindFlashcard(appEl, words, topicId, topic) {
    var card = appEl.querySelector("#flashcard");
    if (!card) return;
    var idx = 0;
    var flipped = false;
    var elPos = appEl.querySelector("#fc-pos");
    var elWord = appEl.querySelector("#fc-word");
    var elTh = appEl.querySelector("#fc-th");
    var elEx = appEl.querySelector("#fc-ex");
    var elExTh = appEl.querySelector("#fc-exth");
    var elCount = appEl.querySelector("#fc-count");
    var elKnown = appEl.querySelector("#fc-toggle-known");

    function render() {
      var w = words[idx];
      elPos.textContent = w.pos;
      elWord.textContent = w.word;
      elTh.textContent = w.th;
      elEx.textContent = w.ex;
      elExTh.textContent = w.exTh;
      elCount.textContent = (idx + 1) + " / " + words.length;
      flipped = false;
      card.classList.remove("flipped");
      var known = App.store.isVocabKnown(topicId, w.word);
      elKnown.textContent = known ? "✓ จำได้แล้ว" : "ยังไม่แน่ใจ";
      elKnown.className = "btn " + (known ? "btn-outline" : "btn-primary");
    }
    function go(delta) {
      idx = (idx + delta + words.length) % words.length;
      render();
    }
    card.addEventListener("click", function () { flipped = !flipped; card.classList.toggle("flipped", flipped); });
    card.addEventListener("keydown", function (ev) {
      if (ev.key === " " || ev.key === "Enter") { ev.preventDefault(); flipped = !flipped; card.classList.toggle("flipped", flipped); }
    });
    appEl.querySelector("#fc-prev").addEventListener("click", function () { go(-1); });
    appEl.querySelector("#fc-next").addEventListener("click", function () { go(1); });
    elKnown.addEventListener("click", function () {
      var w = words[idx];
      var nowKnown = App.store.toggleVocabKnown(topicId, w.word);
      App.utils.toast(nowKnown ? 'บันทึก "' + w.word + '" ว่าจำได้แล้ว' : 'ย้าย "' + w.word + '" กลับไปทบทวน');
      render();
    });
    render();
  }

  App.registerRoute("#/vocab", renderIndex);
  App.registerRoute("#/vocab/:topic", renderTopic);
  App.views = App.views || {};
  App.views.vocab = renderIndex;
  App.views.vocabTopic = renderTopic;
})();
