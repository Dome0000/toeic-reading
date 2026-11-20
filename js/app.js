/* js/app.js — boot: theme, font size, nav, export/import/reset, router start */
(function () {
  var App = window.App = window.App || {};

  // ===== theme =====
  function applyTheme(theme) {
    var root = document.documentElement;
    if (theme === "auto") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", theme);
  }
  function applyFontSize(size) {
    var root = document.documentElement;
    if (size === "normal") root.removeAttribute("data-font");
    else root.setAttribute("data-font", size);
  }

  function initChrome() {
    var settings = App.store.getSettings();
    applyTheme(settings.theme);
    applyFontSize(settings.fontSize);

    // nav สร้างจากรายการนี้ — เพิ่ม route ใหม่แล้วเพิ่มรายการที่นี่
    var NAV = [
      { href: "#/", label: "หน้าแรก", route: "#/" },
      { href: "#/lessons", label: "บทเรียน", route: "#/lessons" },
      { href: "#/vocab", label: "คลังคำศัพท์", route: "#/vocab" },
      { href: "#/exams", label: "Mock Exam", route: "#/exams" },
      { href: "#/mistakes", label: "สมุดข้อผิด", route: "#/mistakes" },
      { href: "#/history", label: "ประวัติการสอบ", route: "#/history" },
      { href: "#/plan", label: "แผน 4 สัปดาห์", route: "#/plan" }
    ];
    var nav = document.getElementById("mainnav");
    if (nav) {
      nav.innerHTML = NAV.map(function (item) {
        return '<a href="' + item.href + '" data-route="' + item.route + '">' + item.label + "</a>";
      }).join("");
    }

    // mobile toggle
    var toggle = document.getElementById("nav-toggle");
    if (toggle && nav) {
      toggle.addEventListener("click", function () { nav.classList.toggle("open"); });
    }

    // theme toggle: auto → light → dark → auto
    var themeBtn = document.getElementById("theme-toggle");
    var THEME_CYCLE = { auto: "light", light: "dark", dark: "auto" };
    var THEME_ICON = { auto: "🖥", light: "☀️", dark: "🌙" };
    var THEME_LABEL = { auto: "ธีม: ตามระบบ", light: "ธีม: สว่าง", dark: "ธีม: มืด" };
    function refreshThemeBtn() {
      var t = App.store.getSettings().theme;
      themeBtn.textContent = THEME_ICON[t] || "🖥";
      themeBtn.title = THEME_LABEL[t] || "สลับธีม";
      themeBtn.setAttribute("aria-label", THEME_LABEL[t] || "สลับธีม");
    }
    if (themeBtn) {
      refreshThemeBtn();
      themeBtn.addEventListener("click", function () {
        var cur = App.store.getSettings().theme;
        App.store.saveSettings({ theme: THEME_CYCLE[cur] || "auto" });
        applyTheme(App.store.getSettings().theme);
        refreshThemeBtn();
      });
    }

    // font size: normal → large → xlarge
    var fontBtn = document.getElementById("font-toggle");
    var FONT_CYCLE = { normal: "large", large: "xlarge", xlarge: "normal" };
    var FONT_LABEL = { normal: "ขนาดตัวอักษร: ปกติ", large: "ขนาดตัวอักษร: ใหญ่", xlarge: "ขนาดตัวอักษร: ใหญ่มาก" };
    if (fontBtn) {
      fontBtn.addEventListener("click", function () {
        var cur = App.store.getSettings().fontSize;
        App.store.saveSettings({ fontSize: FONT_CYCLE[cur] || "normal" });
        applyFontSize(App.store.getSettings().fontSize);
        fontBtn.title = FONT_LABEL[App.store.getSettings().fontSize];
        fontBtn.setAttribute("aria-label", FONT_LABEL[App.store.getSettings().fontSize]);
        App.utils.toast(FONT_LABEL[App.store.getSettings().fontSize]);
      });
    }

    // export / import / reset
    var exportBtn = document.getElementById("export-btn");
    if (exportBtn) exportBtn.addEventListener("click", function () {
      var blob = new Blob([App.store.exportAll()], { type: "application/json" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "toeic-reading-backup.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      App.utils.toast("ส่งออกข้อมูลแล้ว");
    });

    var importBtn = document.getElementById("import-btn");
    var importInput = document.getElementById("import-input");
    if (importBtn && importInput) {
      importBtn.addEventListener("click", function () { importInput.click(); });
      importInput.addEventListener("change", function () {
        var file = importInput.files && importInput.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function () {
          try {
            var n = App.store.importAll(String(reader.result));
            App.utils.toast("นำเข้าข้อมูล " + n + " รายการแล้ว — กำลังโหลดหน้าใหม่");
            setTimeout(function () { location.reload(); }, 800);
          } catch (err) {
            App.utils.toast("นำเข้าไม่สำเร็จ: " + (err && err.message ? err.message : err));
          }
          importInput.value = "";
        };
        reader.readAsText(file);
      });
    }

    var resetBtn = document.getElementById("reset-btn");
    if (resetBtn) resetBtn.addEventListener("click", function () {
      var ok = window.confirm("ล้างข้อมูลทั้งหมดที่บันทึกไว้ในเครื่องนี้ (ความคืบหน้า ประวัติสอบ สมุดข้อผิด ศัพท์ที่จำได้)?\n\nแนะนำให้ Export สำรองก่อน — ลบแล้วกู้คืนไม่ได้");
      if (!ok) return;
      App.store.resetAll();
      App.utils.toast("ล้างข้อมูลแล้ว — กำลังโหลดหน้าใหม่");
      setTimeout(function () { location.reload(); }, 600);
    });
  }

  // ===== start =====
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
  function boot() {
    initChrome();
    App.startRouter();
  }
})();
