import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o as o2,
  t,
  u as u2,
  y
} from "./chunk-UVNLCXWD.js";
import {
  n as n2
} from "./chunk-PNUA7JOS.js";
import {
  e as e2
} from "./chunk-OR2FKGUM.js";
import {
  I,
  a3 as a2,
  f,
  g,
  i,
  k,
  m,
  o,
  p,
  r,
  s
} from "./chunk-UDMPWVPF.js";
import {
  t as t2
} from "./chunk-XJNKCEWL.js";
import {
  L as L2,
  c2 as c,
  u as u3
} from "./chunk-AIZ3T7E3.js";
import {
  e
} from "./chunk-6UEMNP3E.js";
import {
  u
} from "./chunk-6WGE3IUL.js";
import {
  l
} from "./chunk-MLYB2YW4.js";
import {
  a,
  h,
  j,
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  L,
  has
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadValues,
  __yieldStar
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/core/deprecate.js
var e3 = /* @__PURE__ */ new WeakMap();
function n3(n8, r9, t13 = false) {
  const i7 = `🛑 DEPRECATED - ${r9}`;
  if (!t13) return void n8.warn(i7);
  let o10 = e3.get(n8);
  o10 || (o10 = /* @__PURE__ */ new Set(), e3.set(n8, o10)), o10.has(r9) || (o10.add(r9), n8.warn(i7));
}
function t3(e10, n8, r9 = {}) {
  if (has("esri-deprecation-warnings")) {
    const {
      moduleName: t13
    } = r9;
    a3(e10, `Function: ${(t13 ? t13 + "::" : "") + n8 + "()"}`, r9);
  }
}
function i2(e10, n8, r9 = {}) {
  if (has("esri-deprecation-warnings")) {
    const {
      moduleName: t13
    } = r9;
    a3(e10, `Property: ${(t13 ? t13 + "::" : "") + n8}`, r9);
  }
}
function o3(e10, n8, r9 = {}) {
  has("esri-deprecation-warnings") && a3(e10, `Multiple argument constructor: ${n8}`, __spreadValues({
    warnOnce: true,
    replacement: `new ${n8}({ <your properties here> })`
  }, r9));
}
function a3(e10, r9, t13 = {}) {
  if (has("esri-deprecation-warnings")) {
    const {
      replacement: i7,
      version: o10,
      see: a4,
      warnOnce: s8
    } = t13;
    let c5 = r9;
    i7 && (c5 += `
	🛠️ Replacement: ${i7}`), o10 && (c5 += `
	⚙️ Version: ${o10}`), a4 && (c5 += `
	🔗 See ${a4} for more details.`), n3(e10, c5, s8);
  }
}

// ../../../node_modules/@arcgis/core/core/iteratorUtils.js
function n4(n8) {
  const o10 = [];
  return function* () {
    yield* __yieldStar(o10);
    for (const t13 of n8) o10.push(t13), yield t13;
  };
}
function o4(n8, o10) {
  for (const t13 of n8) if (null != t13 && o10(t13)) return t13;
}
function t4(n8) {
  return null != n8 && "function" == typeof n8[Symbol.iterator];
}

// ../../../node_modules/@arcgis/core/core/Handles.js
var r2 = class {
  constructor() {
    this._groups = /* @__PURE__ */ new Map();
  }
  destroy() {
    this.removeAll();
  }
  get size() {
    let t13 = 0;
    return this._groups.forEach((r9) => {
      t13 += r9.length;
    }), t13;
  }
  add(r9, e10) {
    if (t4(r9)) {
      const t13 = this._getOrCreateGroup(e10);
      for (const e11 of r9) o5(e11) && t13.push(e11);
    } else if (o5(r9)) {
      this._getOrCreateGroup(e10).push(r9);
    }
    return this;
  }
  forEach(t13, r9) {
    if ("function" == typeof t13) this._groups.forEach((r10) => r10.forEach(t13));
    else {
      const e10 = this._getGroup(t13);
      e10 && r9 && e10.forEach(r9);
    }
  }
  has(t13) {
    return this._groups.has(e4(t13));
  }
  remove(r9) {
    if ("string" != typeof r9 && t4(r9)) {
      for (const t13 of r9) this.remove(t13);
      return this;
    }
    return this.has(r9) ? (s2(this._getGroup(r9)), this._groups.delete(e4(r9)), this) : this;
  }
  removeAll() {
    return this._groups.forEach(s2), this._groups.clear(), this;
  }
  removeReference(t13) {
    return this._groups.delete(t13), this;
  }
  _getOrCreateGroup(t13) {
    if (this.has(t13)) return this._getGroup(t13);
    const r9 = [];
    return this._groups.set(e4(t13), r9), r9;
  }
  _getGroup(t13) {
    return this._groups.get(e4(t13));
  }
};
function e4(t13) {
  return t13 || "_default_";
}
function s2(t13) {
  for (const e10 of t13) e10 instanceof r2 ? e10.removeAll() : e10.remove();
}
function o5(t13) {
  return null != t13 && (!!t13.remove || t13 instanceof r2);
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/tracking/ObservationHandle.js
var s3 = class {
  constructor(r9, s8) {
    this._observers = r9, this._observer = s8;
  }
  remove() {
    L(this._observers, this._observer);
  }
};

// ../../../node_modules/@arcgis/core/core/accessorSupport/ObservableBase.js
var r3 = class {
  constructor() {
    this._observers = null, this.destroyed = false;
  }
  observe(e10) {
    if (this.destroyed || e10.destroyed) return t5;
    null == this._observers && (this._observers = []);
    const r9 = this._observers;
    let o10 = false, i7 = false;
    const n8 = r9.length;
    for (let s8 = 0; s8 < n8; ++s8) {
      const t13 = r9[s8];
      if (t13.destroyed) i7 = true;
      else if (t13 === e10) {
        o10 = true;
        break;
      }
    }
    return o10 || (r9.push(e10), i7 && this._removeDestroyedObservers()), new s3(r9, e10);
  }
  _removeDestroyedObservers() {
    const e10 = this._observers;
    if (!e10 || 0 === e10.length) return;
    const s8 = e10.length;
    let r9 = 0;
    for (let t13 = 0; t13 < s8; ++t13) {
      for (; t13 + r9 < s8; ) {
        if (!e10[t13 + r9].destroyed) break;
        ++r9;
      }
      if (r9 > 0) {
        if (!(t13 + r9 < s8)) break;
        e10[t13] = e10[t13 + r9];
      }
    }
    e10.length = s8 - r9;
  }
  destroy() {
    if (this.destroyed) return;
    this.destroyed = true;
    const e10 = this._observers;
    if (null != e10) {
      for (const s8 of e10) s8.onCommitted();
      this._observers = null;
    }
  }
};
var t5 = e();

// ../../../node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var e5;
!function(e10) {
  e10[e10.DEFAULTS = 0] = "DEFAULTS", e10[e10.COMPUTED = 1] = "COMPUTED", e10[e10.SERVICE = 2] = "SERVICE", e10[e10.PORTAL_ITEM = 3] = "PORTAL_ITEM", e10[e10.WEB_SCENE = 4] = "WEB_SCENE", e10[e10.WEB_MAP = 5] = "WEB_MAP", e10[e10.LINK_CHART = 6] = "LINK_CHART", e10[e10.USER = 7] = "USER";
}(e5 || (e5 = {}));
var r4 = e5.USER + 1;
function n5(r9) {
  switch (r9) {
    case "defaults":
      return e5.DEFAULTS;
    case "service":
      return e5.SERVICE;
    case "portal-item":
      return e5.PORTAL_ITEM;
    case "web-scene":
      return e5.WEB_SCENE;
    case "web-map":
      return e5.WEB_MAP;
    case "link-chart":
      return e5.LINK_CHART;
    case "user":
      return e5.USER;
    default:
      return null;
  }
}
function t6(r9) {
  switch (r9) {
    case e5.DEFAULTS:
      return "defaults";
    case e5.SERVICE:
      return "service";
    case e5.PORTAL_ITEM:
      return "portal-item";
    case e5.WEB_SCENE:
      return "web-scene";
    case e5.WEB_MAP:
      return "web-map";
    case e5.LINK_CHART:
      return "link-chart";
    case e5.USER:
      return "user";
  }
}
function u4(e10) {
  return t6(e10);
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/Property.js
var r5 = class extends r3 {
  constructor(t13, s8) {
    super(), this.propertyName = t13, this.metadata = s8, this._accessed = null, this._handles = null, this.flags = 0, this.flags = i.Dirty | (s8.nonNullable ? i.NonNullable : 0) | (s8.hasOwnProperty("value") ? i.HasDefaultValue : 0) | (void 0 === s8.get ? i.DepTrackingInitialized : 0) | (void 0 === s8.dependsOn ? i.AutoTracked : 0);
  }
  destroy() {
    this.flags & i.Dirty && this.onCommitted(), super.destroy(), this._accessed = null, this._clearObservationHandles();
  }
  getComputed(t13) {
    s(this);
    const r9 = t13.store, l4 = this.propertyName, h4 = this.flags, d3 = r9.get(l4);
    if (h4 & i.Computing) return d3;
    if (~h4 & i.Dirty && r9.has(l4)) return d3;
    this.flags |= i.Computing;
    const c5 = t13.host;
    let g6;
    h4 & i.AutoTracked ? g6 = f(this, this.metadata.get, c5) : (k(c5, this), g6 = this.metadata.get.call(c5)), r9.set(l4, g6, e5.COMPUTED);
    const m6 = r9.get(l4);
    return m6 === d3 ? this.flags &= ~i.Dirty : g(this.commit, this), this.flags &= ~i.Computing, m6;
  }
  onObservableAccessed(t13) {
    t13 !== this && (this._accessed ??= /* @__PURE__ */ new Set(), this._accessed.add(t13));
  }
  onTrackingEnd() {
    this._clearObservationHandles(), this.flags |= i.DepTrackingInitialized, null != this._accessed && (this._handles ??= [], this._accessed.forEach((t13) => {
      this._handles.push(t13.observe(this));
    }), this._accessed.clear());
  }
  notifyChange() {
    this.onInvalidated(), this.onCommitted();
  }
  invalidate() {
    this.onInvalidated();
  }
  commit() {
    this.flags &= ~i.Dirty, this.onCommitted();
  }
  _clearObservationHandles() {
    const t13 = this._handles;
    if (null !== t13) {
      for (let s8 = 0; s8 < t13.length; ++s8) t13[s8].remove();
      t13.length = 0;
    }
  }
  onInvalidated() {
    ~this.flags & i.Overridden && (this.flags |= i.Dirty);
    const t13 = this._observers;
    if (t13 && t13.length > 0) for (const s8 of t13) s8.onInvalidated();
  }
  onCommitted() {
    const t13 = this._observers;
    if (t13 && t13.length > 0) {
      const s8 = t13.slice();
      for (const t14 of s8) t14.onCommitted();
    }
  }
};

// ../../../node_modules/@arcgis/core/core/accessorSupport/Store.js
var t7 = class _t {
  constructor() {
    this._values = /* @__PURE__ */ new Map(), this.multipleOriginsSupported = false;
  }
  clone(s8) {
    const r9 = new _t();
    return this._values.forEach((t13, i7) => {
      s8 && s8.has(i7) || r9.set(i7, a(t13));
    }), r9;
  }
  get(e10) {
    return this._values.get(e10);
  }
  originOf() {
    return e5.USER;
  }
  keys() {
    return [...this._values.keys()];
  }
  set(e10, s8) {
    this._values.set(e10, s8);
  }
  delete(e10) {
    this._values.delete(e10);
  }
  has(e10) {
    return this._values.has(e10);
  }
  forEach(e10) {
    this._values.forEach(e10);
  }
};

// ../../../node_modules/@arcgis/core/core/accessorSupport/Properties.js
function f2(t13, e10, i7) {
  return void 0 !== t13;
}
function d(t13, e10, s8, r9) {
  return void 0 !== t13 && (!(null == s8 && t13.flags & i.NonNullable) || (r9.lifecycle, I.INITIALIZING, false));
}
var g2 = class {
  constructor(t13) {
    this.host = t13, this.propertiesByName = /* @__PURE__ */ new Map(), this.ctorArgs = null, this.lifecycle = I.INITIALIZING, this.store = new t7(), this._origin = e5.USER;
    const e10 = this.host.constructor.__accessorMetadata__;
    for (const i7 in e10) {
      const t14 = new r5(i7, e10[i7]);
      this.propertiesByName.set(i7, t14);
    }
    this.metadata = e10;
  }
  initialize() {
    this.lifecycle = I.CONSTRUCTING;
  }
  constructed() {
    this.lifecycle = I.CONSTRUCTED;
  }
  destroy() {
    this.lifecycle = I.DESTROYED, this.propertiesByName.forEach((t13) => t13.destroy());
  }
  get initialized() {
    return this.lifecycle !== I.INITIALIZING;
  }
  get(t13) {
    const e10 = this.propertiesByName.get(t13);
    if (e10.metadata.get) return e10.getComputed(this);
    s(e10);
    const i7 = this.store;
    return i7.has(t13) ? i7.get(t13) : e10.metadata.value;
  }
  originOf(t13) {
    const e10 = this.store.originOf(t13);
    if (void 0 === e10) {
      const e11 = this.propertiesByName.get(t13);
      if (void 0 !== e11 && e11.flags & i.HasDefaultValue) return "defaults";
    }
    return t6(e10);
  }
  has(t13) {
    return this.propertiesByName.has(t13) && this.store.has(t13);
  }
  keys() {
    return [...this.propertiesByName.keys()];
  }
  internalGet(t13) {
    const e10 = this.propertiesByName.get(t13);
    if (f2(e10)) return this.store.has(t13) ? this.store.get(t13) : e10.metadata.value;
  }
  internalSet(t13, e10) {
    const i7 = this.propertiesByName.get(t13);
    f2(i7) && this._internalSet(i7, e10);
  }
  getDependsInfo(t13, e10, i7) {
    const r9 = this.propertiesByName.get(e10);
    if (!f2(r9)) return "";
    const o10 = /* @__PURE__ */ new Set(), a4 = f({
      onObservableAccessed: (t14) => o10.add(t14),
      onTrackingEnd: () => {
      }
    }, () => r9.metadata.get?.call(t13));
    let n8 = `${i7}${t13.declaredClass.split(".").pop()}.${e10}: ${a4}
`;
    if (0 === o10.size) return n8;
    i7 += "  ";
    for (const c5 of o10) {
      if (!(c5 instanceof r5)) continue;
      n8 += `${i7}${c5.propertyName}: undefined
`;
    }
    return n8;
  }
  setAtOrigin(t13, e10, i7) {
    const s8 = this.propertiesByName.get(t13);
    if (f2(s8)) return this._setAtOrigin(s8, e10, i7);
  }
  isOverridden(t13) {
    const e10 = this.propertiesByName.get(t13);
    return void 0 !== e10 && !!(e10.flags & i.Overridden);
  }
  clearOverride(t13) {
    const e10 = this.propertiesByName.get(t13);
    e10 && e10.flags & i.Overridden && (e10.flags &= ~i.Overridden, e10.notifyChange());
  }
  override(t13, e10) {
    const i7 = this.propertiesByName.get(t13);
    if (!d(i7, t13, e10, this)) return;
    const s8 = i7.metadata.cast;
    if (s8) {
      const t14 = this._cast(s8, e10), {
        valid: i8,
        value: r9
      } = t14;
      if (u5.release(t14), !i8) return;
      e10 = r9;
    }
    i7.flags |= i.Overridden, this._internalSet(i7, e10);
  }
  set(t13, e10) {
    const i7 = this.propertiesByName.get(t13);
    if (!d(i7, t13, e10, this)) return;
    const s8 = i7.metadata.cast;
    if (s8) {
      const t14 = this._cast(s8, e10), {
        valid: i8,
        value: r10
      } = t14;
      if (u5.release(t14), !i8) return;
      e10 = r10;
    }
    const r9 = i7.metadata.set;
    r9 ? r9.call(this.host, e10) : this._internalSet(i7, e10);
  }
  setDefaultOrigin(t13) {
    this._origin = n5(t13);
  }
  getDefaultOrigin() {
    return t6(this._origin);
  }
  notifyChange(t13) {
    const e10 = this.propertiesByName.get(t13);
    void 0 !== e10 && e10.notifyChange();
  }
  invalidate(t13) {
    const e10 = this.propertiesByName.get(t13);
    void 0 !== e10 && e10.invalidate();
  }
  commit(t13) {
    const e10 = this.propertiesByName.get(t13);
    void 0 !== e10 && e10.commit();
  }
  _internalSet(t13, e10) {
    const s8 = this.lifecycle !== I.INITIALIZING ? this._origin : e5.DEFAULTS;
    this._setAtOrigin(t13, e10, s8);
  }
  _setAtOrigin(e10, i7, s8) {
    const r9 = this.store, o10 = e10.propertyName;
    r9.has(o10, s8) && j(i7, r9.get(o10)) && ~e10.flags & i.Overridden && s8 === r9.originOf(o10) || (e10.invalidate(), r9.set(o10, i7, s8), e10.commit(), m(this.host, e10));
  }
  _cast(t13, e10) {
    const i7 = u5.acquire();
    return i7.valid = true, i7.value = e10, t13 && (i7.value = t13.call(this.host, e10, i7)), i7;
  }
};
var m2 = class {
  constructor() {
    this.value = null, this.valid = true;
  }
  acquire() {
    this.valid = true;
  }
  release() {
    this.value = null;
  }
};
var u5 = new e2(m2);

// ../../../node_modules/@arcgis/core/core/accessorSupport/testSupport.js
var r6;
function o6() {
  return r6;
}
var t8;
!function(r9) {
  r9[r9.Ignore = 0] = "Ignore", r9[r9.Destroy = 1] = "Destroy", r9[r9.ThrowError = 2] = "ThrowError";
}(t8 || (t8 = {}));

// ../../../node_modules/@arcgis/core/core/ArrayPool.js
function r7(e10) {
  e10.length = 0;
}
var t9 = class {
  constructor(t13 = 50, o10 = 50) {
    this._pool = new e2(Array, void 0, r7, o10, t13);
  }
  acquire() {
    return this._pool.acquire();
  }
  release(e10) {
    this._pool.release(e10);
  }
  prune() {
    this._pool.prune(0);
  }
  static acquire() {
    return o7.acquire();
  }
  static release(e10) {
    return o7.release(e10);
  }
  static prune() {
    o7.prune();
  }
};
var o7 = new t9(100);

// ../../../node_modules/@arcgis/core/core/ReentrantObjectPool.js
var s4 = class extends e2 {
  constructor() {
    super(...arguments), this._set = /* @__PURE__ */ new Set();
  }
  destroy() {
    super.destroy(), this._set = null;
  }
  acquire(...e10) {
    const s8 = super.acquire(...e10);
    return this._set.delete(s8), s8;
  }
  release(e10) {
    e10 && !this._set.has(e10) && (super.release(e10), this._set.add(e10));
  }
  _dispose(e10) {
    this._set.delete(e10), super._dispose(e10);
  }
};

// ../../../node_modules/@arcgis/core/core/PerformanceSampler.js
var s5 = class {
  constructor(s8, e10 = 30) {
    this.name = s8, this._counter = 0, this._samples = new Array(e10);
  }
  record(s8) {
    null != s8 && (this._samples[++this._counter % this._samples.length] = s8);
  }
  get median() {
    return this._samples.slice().sort((s8, e10) => s8 - e10)[Math.floor(this._samples.length / 2)];
  }
  get average() {
    return this._samples.reduce((s8, e10) => s8 + e10, 0) / this._samples.length;
  }
  get last() {
    return this._samples[this._counter % this._samples.length];
  }
};

// ../../../node_modules/@arcgis/core/core/scheduling.js
var i3 = class {
  constructor(e10) {
    this.phases = e10, this.paused = false, this.ticks = -1, this.removed = false;
  }
};
var c2 = class {
  constructor(e10) {
    this.callback = e10, this.isActive = true;
  }
  remove() {
    this.isActive = false;
  }
};
var m3 = 0;
var l2 = 0;
var u6 = {
  time: n2(0),
  deltaTime: n2(0),
  elapsedFrameTime: n2(0),
  frameDuration: n2(0)
};
var p2 = ["prepare", "preRender", "render", "postRender", "update", "finish"];
var f3 = [];
var h2 = new l();
var d2 = class {
  constructor(e10) {
    this._task = e10;
  }
  remove() {
    this._task.removed = true;
  }
  pause() {
    this._task.paused = true;
  }
  resume() {
    this._task.paused = false;
  }
};
function w() {
  null != F && (cancelAnimationFrame(F), F = requestAnimationFrame(x));
}
var k2 = {
  frameTasks: h2,
  willDispatch: false,
  clearFrameTasks: T,
  dispatch: _,
  executeFrameTasks: D,
  reschedule: w
};
function v(t13) {
  const r9 = new c2(t13);
  return f3.push(r9), k2.willDispatch || (k2.willDispatch = true, t2(_)), r9;
}
function A(e10) {
  const t13 = new i3(e10);
  return h2.push(t13), null == F && (m3 = performance.now(), F = requestAnimationFrame(x)), new d2(t13);
}
var F = null;
function T(e10 = false) {
  h2.forAll((e11) => {
    e11.removed = true;
  }), e10 && q();
}
function j2(e10) {
  l2 = Math.max(0, e10);
}
function x() {
  const e10 = performance.now();
  F = null, F = h2.length > 0 ? requestAnimationFrame(x) : null, k2.executeFrameTasks(e10);
}
function D(e10) {
  const t13 = n2(e10 - m3);
  m3 = e10;
  const r9 = l2 > 0 ? l2 : 1e3 / 60, n8 = Math.max(0, t13 - r9);
  u6.time = e10, u6.frameDuration = n2(r9 - n8);
  for (let s8 = 0; s8 < p2.length; s8++) {
    const r10 = performance.now(), n9 = p2[s8];
    h2.forAll((r11) => {
      if (r11.paused || r11.removed) return;
      0 === s8 && r11.ticks++;
      r11.phases[n9] && (u6.elapsedFrameTime = n2(performance.now() - e10), u6.deltaTime = 0 === r11.ticks ? n2(0) : t13, r11.phases[n9]?.call(r11, u6));
    }), b[s8].record(performance.now() - r10);
  }
  q(), U.record(performance.now() - e10);
}
var g3 = new l();
function q() {
  h2.forAll((e10) => {
    e10.removed && g3.push(e10);
  }), h2.removeUnorderedMany(g3.data, g3.length), g3.clear();
}
function _() {
  for (; f3.length; ) {
    const e10 = f3.shift();
    e10.isActive && e10.callback();
  }
  k2.willDispatch = false;
}
function y2(t13 = 1, r9) {
  const a4 = L2(), i7 = () => {
    c(r9) ? a4.reject(u3()) : 0 === t13 ? a4() : (--t13, t2(() => i7()));
  };
  return i7(), a4.promise;
}
function M(e10) {
  return y2(1, e10);
}
function R() {
  return __async(this, null, function* () {
    yield M(), yield new Promise((e10) => requestAnimationFrame(e10));
  });
}
var b = p2.map((e10) => new s5(e10));
var U = new s5("total");

// ../../../node_modules/@arcgis/core/core/SetUtils.js
function n6(n8, r9) {
  for (const t13 of n8.entries()) if (r9(t13[0])) return true;
  return false;
}
function r8(n8, r9) {
  if (!r9) return n8;
  for (const t13 of r9) null != t13 && n8.add(t13);
  return n8;
}
function t10(n8, r9) {
  return null != r9 && n8.add(r9), n8;
}
function o8(n8, t13) {
  const o10 = /* @__PURE__ */ new Set();
  return r8(o10, n8), r8(o10, t13), o10;
}
function u7(n8, r9) {
  const t13 = /* @__PURE__ */ new Set();
  for (const o10 of r9) n8.has(o10) && t13.add(o10);
  return t13;
}
function e6(n8, r9) {
  if (!n8 || !r9) return false;
  if (n8 === r9) return true;
  for (const t13 of n8) if (!r9.has(t13)) return false;
  return true;
}
function f4(n8, r9) {
  if (null == n8 && null == r9) return true;
  if (null == n8 || null == r9 || n8.size !== r9.size) return false;
  for (const t13 of n8) if (!r9.has(t13)) return false;
  return true;
}
function i4(n8, r9) {
  const t13 = new Set(n8);
  for (const o10 of r9) t13.delete(o10);
  return t13;
}
function c3(n8, r9) {
  return i4(o8(n8, r9), u7(n8, r9));
}
function s6(n8) {
  let r9;
  for (r9 of n8) ;
  return r9;
}

// ../../../node_modules/@arcgis/core/core/uid.js
var t11 = 0;
var n7 = 0;
function e7() {
  return ++t11;
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/tracking/SimpleTrackingTarget.js
var e8 = class {
  constructor(e10) {
    this._accessed = /* @__PURE__ */ new Set(), this._handles = [], this._observerObject = new s7(e10), t12.register(this, new WeakRef(this._observerObject), this);
  }
  destroy() {
    t12.unregister(this._observerObject), this._accessed.clear(), this._observerObject?.destroy(), this.clear();
  }
  onObservableAccessed(e10) {
    this._accessed.add(e10);
  }
  onTrackingEnd() {
    const e10 = this._handles, s8 = this._observerObject;
    this._accessed.forEach((t13) => {
      e10.push(t13.observe(s8));
    }), this._accessed.clear();
  }
  clear() {
    const e10 = this._handles;
    for (let s8 = 0; s8 < e10.length; ++s8) e10[s8].remove();
    e10.length = 0;
  }
};
var s7 = class {
  constructor(e10) {
    this._notify = e10, this._invalidCount = 0, this.destroyed = false;
  }
  onInvalidated() {
    this._invalidCount++;
  }
  onCommitted() {
    if (this.destroyed) return;
    const e10 = this._invalidCount;
    if (1 === e10) return this._invalidCount = 0, void this._notify();
    this._invalidCount = e10 > 0 ? e10 - 1 : 0;
  }
  destroy() {
    this.destroyed = true, this._notify = i5;
  }
};
var t12 = new FinalizationRegistry((e10) => {
  e10.deref()?.destroy();
});
function i5() {
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/trackingUtils.js
var l3 = false;
var u8 = [];
function o9(u9, o10) {
  let e10 = new e8(a4), i7 = null, s8 = false;
  function a4() {
    if (!e10 || s8) return;
    if (l3) return void c4(a4);
    const n8 = i7;
    e10.clear(), l3 = true, s8 = true, i7 = f(e10, u9), s8 = false, l3 = false, o10(i7, n8), f5();
  }
  function m6() {
    e10 && (e10.destroy(), e10 = null, i7 = null);
  }
  return s8 = true, i7 = f(e10, u9), s8 = false, e(m6);
}
function e9(l4, u9) {
  let o10 = new e8(i7), e10 = null;
  function i7() {
    u9(e10, f7);
  }
  function c5() {
    o10 && (o10.destroy(), o10 = null), e10 = null;
  }
  function f7() {
    return o10 ? (o10.clear(), e10 = f(o10, l4), e10) : null;
  }
  return f7(), e(c5);
}
function i6(u9) {
  let o10 = new e8(i7), e10 = false;
  function i7() {
    o10 && !e10 && (l3 ? c4(i7) : (o10.clear(), l3 = true, e10 = true, f(o10, u9), e10 = false, l3 = false, f5()));
  }
  function s8() {
    o10 && (o10.destroy(), o10 = null);
  }
  return e10 = true, f(o10, u9), e10 = false, e(s8);
}
function c4(n8) {
  u8.includes(n8) || u8.unshift(n8);
}
function f5() {
  for (; u8.length; ) u8.pop()();
}

// ../../../node_modules/@arcgis/core/core/accessorSupport/watch.js
var h3;
!function(e10) {
  e10[e10.Untracked = 0] = "Untracked", e10[e10.Tracked = 1] = "Tracked";
}(h3 || (h3 = {}));
var m4 = class {
  constructor() {
    this.uid = e7(), this.removed = false, this.type = null, this.oldValue = null, this.callback = null, this.getValue = null, this.target = null, this.path = null, this.equals = null;
  }
  static acquireUntracked(e10, t13, l4, o10, i7) {
    return this.pool.acquire(h3.Untracked, e10, t13, l4, o10, i7, j);
  }
  static acquireTracked(e10, t13, r9, l4) {
    return this.pool.acquire(h3.Tracked, e10, t13, r9, null, null, l4);
  }
  notify(e10, t13) {
    this.type === h3.Untracked ? this.callback.call(this.target, e10, t13, this.path, this.target) : this.callback.call(null, e10, t13, void 0, void 0);
  }
  acquire(e10, t13, r9, l4, o10, i7, n8) {
    this.uid = e7(), this.removed = false, this.type = e10, this.oldValue = t13, this.callback = r9, this.getValue = l4, this.target = o10, this.path = i7, this.equals = n8;
  }
  release() {
    this.target = this.path = this.oldValue = this.callback = this.getValue = null, this.uid = e7(), this.removed = true;
  }
};
m4.pool = new s4(m4);
var p3 = new t9();
var v2 = /* @__PURE__ */ new Set();
var k3;
function _2(e10) {
  v2.delete(e10), v2.add(e10), k3 || (k3 = v(q2));
}
function g4(e10) {
  if (e10.removed) return;
  const t13 = e10.oldValue, r9 = e10.getValue();
  e10.equals(t13, r9) || (e10.oldValue = r9, e10.notify(r9, t13));
}
function j3(e10) {
  for (const t13 of v2.values()) t13.target === e10 && (t13.removed = true);
}
function q2() {
  let e10 = 10;
  for (; k3 && e10--; ) {
    k3 = null;
    const e11 = V(), t13 = p3.acquire();
    for (const r9 of e11) {
      const e12 = r9.uid;
      g4(r9), e12 === r9.uid && r9.removed && t13.push(r9);
    }
    for (const r9 of v2) r9.removed && (t13.push(r9), v2.delete(r9));
    for (const r9 of t13) m4.pool.release(r9);
    p3.release(t13), p3.release(e11), y3.forEach((e12) => e12());
  }
}
function V() {
  const e10 = p3.acquire();
  e10.length = v2.size;
  let t13 = 0;
  for (const r9 of v2) e10[t13] = r9, ++t13;
  return v2.clear(), e10;
}
var y3 = /* @__PURE__ */ new Set();
function U2(e10) {
  return y3.add(e10), e(() => y3.delete(e10));
}
function T2(e10, r9, l4) {
  let o10 = p(e10, r9, l4, (e11, r10, l5) => {
    let i7, n8, s8 = e9(() => u2(e11, r10), (t13, s9) => {
      e11.__accessor__?.lifecycle === I.DESTROYED || i7 && i7.uid !== n8 ? o10.remove() : (i7 || (i7 = m4.acquireUntracked(t13, l5, s9, e11, r10), n8 = i7.uid), _2(i7));
    });
    return e(() => {
      s8.remove(), i7 && (i7.uid !== n8 || i7.removed || (i7.removed = true, _2(i7)), i7 = null), o10 = s8 = null;
    });
  });
  return o10;
}
function E(e10, t13, l4) {
  const o10 = p(e10, t13, l4, (e11, t14, l5) => {
    let i7 = false;
    return o9(() => u2(e11, t14), (n8, s8) => {
      e11.__accessor__.lifecycle !== I.DESTROYED ? i7 || (i7 = true, j(s8, n8) || l5.call(e11, n8, s8, t14, e11), i7 = false) : o10.remove();
    });
  });
  return o10;
}
function b2(e10, r9, l4, o10 = false) {
  return e10.__accessor__ && e10.__accessor__.lifecycle !== I.DESTROYED ? o10 ? E(e10, r9, l4) : T2(e10, r9, l4) : e();
}
function D2(e10, r9, l4) {
  let o10, i7, n8 = e9(e10, (e11, t13) => {
    o10 && o10.uid !== i7 ? n8.remove() : (o10 || (o10 = m4.acquireTracked(e11, r9, t13, l4), i7 = o10.uid), _2(o10));
  });
  return e(() => {
    n8.remove(), o10 && (o10.uid !== i7 || o10.removed || (o10.removed = true, _2(o10)), o10 = null), n8 = null;
  });
}
function S(e10, t13, r9) {
  let l4 = false;
  return o9(e10, (e11, o10) => {
    l4 || (l4 = true, r9(o10, e11) || t13(e11, o10), l4 = false);
  });
}
function w2(e10, t13, r9 = false, o10 = h) {
  return r9 ? S(e10, t13, o10) : D2(e10, t13, o10);
}
function O(e10) {
  return n6(v2, (t13) => t13.oldValue === e10);
}

// ../../../node_modules/@arcgis/core/core/Accessor.js
var f6;
var m5;
function y4(e10) {
  if (null == e10) return {
    value: e10
  };
  if (Array.isArray(e10)) return {
    type: [e10[0]],
    value: null
  };
  switch (typeof e10) {
    case "object":
      return e10.constructor?.__accessorMetadata__ || e10 instanceof Date ? {
        type: e10.constructor,
        value: e10
      } : e10;
    case "boolean":
      return {
        type: Boolean,
        value: e10
      };
    case "string":
      return {
        type: String,
        value: e10
      };
    case "number":
      return {
        type: Number,
        value: e10
      };
    case "function":
      return {
        type: e10,
        value: null
      };
    default:
      return;
  }
}
var v3 = Symbol("Accessor-Handles");
var g5 = Symbol("Accessor-Initialized");
var S2 = class _S {
  static createSubclass(e10 = {}) {
    if (Array.isArray(e10)) throw new Error("Multi-inheritance unsupported since 4.16");
    const {
      properties: r9,
      declaredClass: t13,
      constructor: s8
    } = e10;
    delete e10.declaredClass, delete e10.properties, delete e10.constructor;
    const o10 = this;
    class i7 extends o10 {
      constructor(...e11) {
        super(...e11), this.inherited = null, s8 && s8.apply(this, e11);
      }
    }
    r(i7.prototype);
    for (const c5 in e10) {
      const r10 = e10[c5];
      i7.prototype[c5] = "function" == typeof r10 ? function(...e11) {
        const t14 = this.inherited;
        let s9;
        this.inherited = function(...e12) {
          if (o10.prototype[c5]) return o10.prototype[c5].apply(this, e12);
        };
        try {
          s9 = r10.apply(this, e11);
        } catch (i8) {
          throw this.inherited = t14, i8;
        }
        return this.inherited = t14, s9;
      } : e10[c5];
    }
    for (const c5 in r9) {
      const e11 = y4(r9[c5]);
      y(e11)(i7.prototype, c5);
    }
    return a2(t13)(i7);
  }
  constructor(...e10) {
    if (this[f6] = null, this[m5] = false, this.constructor === _S) throw new Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");
    const r9 = new g2(this);
    Object.defineProperty(this, "__accessor__", {
      enumerable: false,
      value: r9
    }), e10.length > 0 && (r9.ctorArgs = this.normalizeCtorArgs?.apply(this, e10) ?? e10[0]), o6()?.onInstanceConstruct(this);
  }
  postscript() {
    const e10 = this.__accessor__, r9 = e10.ctorArgs;
    e10.initialize(), r9 && (this.set(r9), e10.ctorArgs = null), e10.constructed(), this.initialize(), this[g5] = true;
  }
  initialize() {
  }
  [o]() {
    this[v3] = u(this[v3]);
  }
  destroy() {
    this.destroyed || (j3(this), this.__accessor__.destroy(), o6()?.onInstanceDestroy(this));
  }
  [Symbol.dispose]() {
    this.destroy();
  }
  get constructed() {
    return this.__accessor__ && this.__accessor__.initialized || false;
  }
  get initialized() {
    return this[g5];
  }
  get destroyed() {
    return this.__accessor__?.lifecycle === I.DESTROYED || false;
  }
  commitProperty(e10) {
    o2(this, e10);
  }
  get(r9) {
    return t3(n.getLogger(this), "`Accessor.get` is deprecated in favor of using optional chaining", {
      version: "4.28",
      see: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
    }), o2(this, r9);
  }
  hasOwnProperty(e10) {
    return this.__accessor__ ? this.__accessor__.has(e10) : Object.prototype.hasOwnProperty.call(this, e10);
  }
  keys() {
    return this.__accessor__ ? this.__accessor__.keys() : [];
  }
  set(e10, r9) {
    return t(this, e10, r9), this;
  }
  watch(e10, r9, t13) {
    return b2(this, e10, r9, t13);
  }
  addHandles(e10, t13) {
    if (this.destroyed) {
      const r9 = Array.isArray(e10) ? e10 : [e10];
      for (const e11 of r9) e11.remove();
      return;
    }
    (this[v3] ??= new r2()).add(e10, t13);
  }
  removeHandles(e10) {
    this[v3]?.remove(e10);
  }
  removeAllHandles() {
    this[v3]?.removeAll();
  }
  removeHandlesReference(e10) {
    this[v3]?.removeReference(e10);
  }
  hasHandles(e10) {
    return true === this[v3]?.has(e10);
  }
  _override(e10, r9) {
    void 0 === r9 ? this.__accessor__.clearOverride(e10) : this.__accessor__.override(e10, r9);
  }
  _clearOverride(e10) {
    return this.__accessor__.clearOverride(e10);
  }
  _overrideIfSome(e10, r9) {
    null == r9 ? this.__accessor__.clearOverride(e10) : this.__accessor__.override(e10, r9);
  }
  _isOverridden(e10) {
    return this.__accessor__.isOverridden(e10);
  }
  notifyChange(e10) {
    this.__accessor__.notifyChange(e10);
  }
  _get(e10) {
    return this.__accessor__.internalGet(e10);
  }
  _set(e10, r9) {
    return this.__accessor__.internalSet(e10, r9), this;
  }
};
f6 = v3, m5 = g5;

export {
  t3 as t,
  i2 as i,
  o3 as o,
  a3 as a,
  n4 as n,
  o4 as o2,
  t4 as t2,
  r2 as r,
  r3 as r2,
  e5 as e,
  r4 as r3,
  n5 as n2,
  t6 as t3,
  u4 as u,
  t9 as t4,
  s4 as s,
  s5 as s2,
  v,
  A,
  j2 as j,
  y2 as y,
  M,
  R,
  n6 as n3,
  r8 as r4,
  t10 as t5,
  o8 as o3,
  u7 as u2,
  e6 as e2,
  f4 as f,
  i4 as i2,
  c3 as c,
  s6 as s3,
  n7 as n4,
  e7 as e3,
  e8 as e4,
  i6 as i3,
  U2 as U,
  w2 as w,
  O,
  S2 as S
};
//# sourceMappingURL=chunk-NXK752PZ.js.map
