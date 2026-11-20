/* js/core/timer.js — จับเวลาถอยหลังจาก timestamp (ไม่เพี้ยนเมื่อแท็บอยู่เบื้องหลัง) */
(function () {
  var App = window.App = window.App || {};

  function ExamTimer(config) {
    // config: { endAt: epoch ms, onTick(remainingSec), onWarn(minutesLeft), onExpire() }
    this.endAt = config.endAt;
    this.onTick = config.onTick || function () {};
    this.onWarn = config.onWarn || function () {};
    this.onExpire = config.onExpire || function () {};
    this._interval = null;
    this._warned = { 15: false, 5: false };
    this._expired = false;
  }
  ExamTimer.prototype.remainingSec = function () {
    return Math.max(0, Math.round((this.endAt - Date.now()) / 1000));
  };
  ExamTimer.prototype.start = function () {
    var self = this;
    this.stop();
    var tick = function () {
      var remaining = self.remainingSec();
      self.onTick(remaining);
      var minutesLeft = remaining / 60;
      [15, 5].forEach(function (m) {
        if (!self._warned[m] && minutesLeft <= m && minutesLeft > 0) {
          self._warned[m] = true;
          self.onWarn(m);
        }
      });
      if (remaining <= 0 && !self._expired) {
        self._expired = true;
        self.stop();
        self.onExpire();
      }
    };
    this._interval = setInterval(tick, 250);
    tick();
  };
  ExamTimer.prototype.stop = function () {
    if (this._interval) { clearInterval(this._interval); this._interval = null; }
  };

  App.ExamTimer = ExamTimer;
})();
