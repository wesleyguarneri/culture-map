import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e
} from "./chunk-2OZSYJDX.js";
import {
  g,
  o,
  s
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/views/navigation/FilteredFiniteDifference.js
var t = class {
  constructor(t3) {
    this._gain = t3, this.lastValue = void 0, this.filteredDelta = void 0;
  }
  update(t3) {
    if (this.hasLastValue()) {
      const e2 = this.computeDelta(t3);
      this._updateDelta(e2);
    }
    this.lastValue = t3;
  }
  reset() {
    this.lastValue = void 0, this.filteredDelta = void 0;
  }
  hasLastValue() {
    return void 0 !== this.lastValue;
  }
  hasFilteredDelta() {
    return void 0 !== this.filteredDelta;
  }
  computeDelta(t3) {
    return void 0 === this.lastValue ? NaN : t3 - this.lastValue;
  }
  _updateDelta(t3) {
    void 0 !== this.filteredDelta ? this.filteredDelta = (1 - this._gain) * this.filteredDelta + this._gain * t3 : this.filteredDelta = t3;
  }
};

// ../../../node_modules/@arcgis/core/views/navigation/Momentum.js
var t2 = class {
  constructor(t3, i, o2) {
    this._initialVelocity = t3, this._stopVelocity = i, this._friction = o2, this._duration = Math.abs(Math.log(Math.abs(this._initialVelocity) / this._stopVelocity) / Math.log(1 - this._friction));
  }
  get duration() {
    return this._duration;
  }
  isFinished(t3) {
    return t3 > this.duration;
  }
  get friction() {
    return this._friction;
  }
  value(t3) {
    return this.valueFromInitialVelocity(this._initialVelocity, t3);
  }
  valueDelta(t3, i) {
    const o2 = this.value(t3);
    return this.value(t3 + i) - o2;
  }
  valueFromInitialVelocity(t3, i) {
    i = Math.min(i, this.duration);
    const o2 = 1 - this.friction;
    return t3 * (o2 ** i - 1) / Math.log(o2);
  }
};

// ../../../node_modules/@arcgis/core/views/navigation/PanPlanarMomentumEstimator.js
var l = class extends t2 {
  constructor(e2, t3, i, s4, n2) {
    super(e2, t3, i), this._sceneVelocity = s4, this.direction = n2;
  }
  value(e2) {
    return super.valueFromInitialVelocity(this._sceneVelocity, e2);
  }
};
var c = class {
  constructor(e2 = 300, t3 = 12, i = 0.84) {
    this._minimumInitialVelocity = e2, this._stopVelocity = t3, this._friction = i, this.enabled = true, this._time = new t(0.6), this._screen = [new t(0.4), new t(0.4)], this._scene = [new t(0.6), new t(0.6), new t(0.6)], this._tmpDirection = n();
  }
  add(e2, t3, i) {
    if (this.enabled) {
      if (this._time.hasLastValue()) {
        if (this._time.computeDelta(i) < 0.015) return;
      }
      this._screen[0].update(e2[0]), this._screen[1].update(e2[1]), this._scene[0].update(t3[0]), this._scene[1].update(t3[1]), this._scene[2].update(t3[2]), this._time.update(i);
    }
  }
  reset() {
    this._screen[0].reset(), this._screen[1].reset(), this._scene[0].reset(), this._scene[1].reset(), this._scene[2].reset(), this._time.reset();
  }
  evaluateMomentum() {
    if (!this.enabled || !this._screen[0].hasFilteredDelta() || !this._time.hasFilteredDelta()) return null;
    const e2 = this._screen[0].filteredDelta, t3 = this._screen[1].filteredDelta, i = null == e2 || null == t3 ? 0 : Math.sqrt(e2 * e2 + t3 * t3), s4 = this._time.filteredDelta, n2 = null == s4 || null == i ? 0 : i / s4;
    return Math.abs(n2) < this._minimumInitialVelocity ? null : this.createMomentum(n2, this._stopVelocity, this._friction);
  }
  createMomentum(s4, n2, r2) {
    o(this._tmpDirection, this._scene[0].filteredDelta ?? 0, this._scene[1].filteredDelta ?? 0, this._scene[2].filteredDelta ?? 0);
    const c2 = s(this._tmpDirection);
    c2 > 0 && g(this._tmpDirection, this._tmpDirection, 1 / c2);
    const h = this._time.filteredDelta;
    return new l(s4, n2, r2, null == h ? 0 : c2 / h, this._tmpDirection);
  }
};

// ../../../node_modules/@arcgis/core/views/navigation/MomentumEstimator.js
var s2 = class {
  constructor(t3 = 2.5, i = 0.01, s4 = 0.95, l2 = 12) {
    this._minimumInitialVelocity = t3, this._stopVelocity = i, this._friction = s4, this._maxVelocity = l2, this.enabled = true, this.value = new t(0.8), this.time = new t(0.3);
  }
  add(t3, e2) {
    if (this.enabled && null != e2) {
      if (this.time.hasLastValue()) {
        if (this.time.computeDelta(e2) < 0.01) return;
        if (this.value.hasFilteredDelta()) {
          const e3 = this.value.computeDelta(t3);
          this.value.filteredDelta * e3 < 0 && this.value.reset();
        }
      }
      this.time.update(e2), this.value.update(t3);
    }
  }
  reset() {
    this.value.reset(), this.time.reset();
  }
  evaluateMomentum() {
    if (!this.enabled || !this.value.hasFilteredDelta() || !this.time.hasFilteredDelta()) return null;
    let e2 = this.value.filteredDelta / this.time.filteredDelta;
    return e2 = e(e2, -this._maxVelocity, this._maxVelocity), Math.abs(e2) < this._minimumInitialVelocity ? null : this.createMomentum(e2, this._stopVelocity, this._friction);
  }
  createMomentum(t3, e2, s4) {
    return new t2(t3, e2, s4);
  }
};

// ../../../node_modules/@arcgis/core/views/navigation/RotationMomentumEstimator.js
var a = class extends s2 {
  constructor(t3 = 3, a2 = 0.01, s4 = 0.95, o2 = 12) {
    super(t3, a2, s4, o2);
  }
  add(t3, a2) {
    const s4 = this.value.lastValue;
    if (null != s4) {
      let a3 = t3 - s4;
      for (; a3 > Math.PI; ) a3 -= 2 * Math.PI;
      for (; a3 < -Math.PI; ) a3 += 2 * Math.PI;
      t3 = s4 + a3;
    }
    super.add(t3, a2);
  }
};

// ../../../node_modules/@arcgis/core/views/navigation/ZoomMomentumEstimator.js
var r = class extends t2 {
  constructor(e2, t3, r2) {
    super(e2, t3, r2);
  }
  value(e2) {
    const t3 = super.value(e2);
    return Math.exp(t3);
  }
  valueDelta(e2, t3) {
    const r2 = super.value(e2), s4 = super.value(e2 + t3) - r2;
    return Math.exp(s4);
  }
};
var s3 = class extends s2 {
  constructor(e2 = 2.5, t3 = 0.01, r2 = 0.95, s4 = 12) {
    super(e2, t3, r2, s4);
  }
  add(e2, t3) {
    super.add(Math.log(e2), t3);
  }
  createMomentum(e2, t3, s4) {
    return new r(e2, t3, s4);
  }
};

export {
  t,
  t2,
  c,
  a,
  s3 as s
};
//# sourceMappingURL=chunk-NYQ72E6S.js.map
