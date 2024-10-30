import {
  l
} from "./chunk-PUH7YYDT.js";

// ../../../node_modules/@arcgis/core/views/2d/layers/support/HighlightCounter.js
var e = class {
  constructor() {
    this._idToCounters = /* @__PURE__ */ new Map();
  }
  get empty() {
    return 0 === this._idToCounters.size;
  }
  addReason(t, e2) {
    for (const o of t) {
      let t2 = this._idToCounters.get(o);
      t2 || (t2 = /* @__PURE__ */ new Map(), this._idToCounters.set(o, t2)), t2.set(e2, (t2.get(e2) || 0) + 1);
    }
  }
  deleteReason(t, e2) {
    for (const o of t) {
      const t2 = this._idToCounters.get(o);
      if (!t2) continue;
      let s = t2.get(e2);
      if (null == s) return;
      s--, s > 0 ? t2.set(e2, s) : t2.delete(e2), 0 === t2.size && this._idToCounters.delete(o);
    }
  }
  getHighlightReason(e2) {
    const o = this._idToCounters.get(e2);
    if (!o) return null;
    let s = null;
    for (const n of l) o.get(n) && (s = n);
    return s || null;
  }
  ids() {
    return this._idToCounters.keys();
  }
};

export {
  e
};
//# sourceMappingURL=chunk-KOUYF3XE.js.map
