/* js/core/router.js — hash routing
   รูปแบบ route: { pattern: "#/lesson/:id", render: fn(params, query) }
   วิวถูกลงทะเบียนผ่าน App.registerView(name, fn) แล้วผูกใน app.js */
(function () {
  var App = window.App = window.App || {};
  var routes = [];

  App.registerRoute = function (pattern, handler) {
    var keys = [];
    var regexSrc = pattern
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      .replace(/:([A-Za-z_][\w]*)/g, function (_, name) { keys.push(name); return "([^/]+)"; });
    routes.push({ pattern: pattern, regex: new RegExp("^" + regexSrc + "$"), keys: keys, handler: handler });
  };

  function parseHash() {
    var raw = location.hash || "#/";
    var qIndex = raw.indexOf("?");
    var path = qIndex === -1 ? raw : raw.slice(0, qIndex);
    var query = {};
    if (qIndex !== -1) {
      raw.slice(qIndex + 1).split("&").forEach(function (pair) {
        if (!pair) return;
        var idx = pair.indexOf("=");
        var k = idx === -1 ? pair : pair.slice(0, idx);
        var v = idx === -1 ? "" : decodeURIComponent(pair.slice(idx + 1));
        query[decodeURIComponent(k)] = v;
      });
    }
    if (path.length > 2 && path.charAt(path.length - 1) === "/") path = path.slice(0, -1);
    return { path: path || "#/", query: query };
  }

  App.navigate = function (hash) {
    if (location.hash === hash) { App.refresh(); return; }
    location.hash = hash;
  };

  App.refresh = function () { renderRoute(); };

  function renderRoute() {
    var parsed = parseHash();
    var match = null, params = {};
    for (var i = 0; i < routes.length; i++) {
      var m = routes[i].regex.exec(parsed.path);
      if (m) {
        match = routes[i];
        routes[i].keys.forEach(function (k, j) { params[k] = decodeURIComponent(m[j + 1]); });
        break;
      }
    }
    var appEl = document.getElementById("app");
    if (!appEl) return;
    // cleanup hook จากวิวเดิม (เช่น timer ของหน้าสอบ)
    if (App._currentCleanup) { try { App._currentCleanup(); } catch (e) { console.warn(e); } App._currentCleanup = null; }
    window.scrollTo(0, 0);
    if (!match) {
      appEl.innerHTML = '<div class="card"><h1>ไม่พบหน้า</h1><p class="muted">ไม่มี route สำหรับ <code>' + App.utils.escapeHtml(parsed.path) + '</code></p><p><a class="btn btn-primary" href="#/">กลับหน้าแรก</a></p></div>';
      updateNav("");
      return;
    }
    try {
      match.handler(params, parsed.query, appEl);
    } catch (err) {
      console.error("Route render failed:", err);
      appEl.innerHTML = '<div class="card"><h1>เกิดข้อผิดพลาด</h1><p class="muted">' + App.utils.escapeHtml(err && err.message ? err.message : String(err)) + '</p><p><a class="btn btn-primary" href="#/">กลับหน้าแรก</a></p></div>';
    }
    updateNav(parsed.path);
  }

  function updateNav(path) {
    document.querySelectorAll(".mainnav a[data-route]").forEach(function (a) {
      var base = a.getAttribute("data-route");
      var active = path === base || (base !== "#/" && path.indexOf(base) === 0);
      a.classList.toggle("active", active);
      if (active) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    var nav = document.getElementById("mainnav");
    if (nav) nav.classList.remove("open");
  }

  window.addEventListener("hashchange", renderRoute);
  App.startRouter = renderRoute;
})();
