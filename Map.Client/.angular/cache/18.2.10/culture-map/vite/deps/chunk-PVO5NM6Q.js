import {
  C,
  d,
  p,
  v as v2
} from "./chunk-6WHTZNUH.js";
import {
  e as e2
} from "./chunk-4Z5SGKRM.js";
import {
  S,
  v
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  e
} from "./chunk-7DA6A5LD.js";

// ../../../node_modules/@arcgis/core/core/support/UpdatingHandles.js
var h = class extends S {
  constructor() {
    super(...arguments), this.updating = false, this._handleId = 0, this._scheduleHandleId = 0, this._pendingPromises = /* @__PURE__ */ new Set();
  }
  destroy() {
    this.removeAll();
  }
  add(s, e3, t = {}) {
    return this._installWatch(s, e3, t, d);
  }
  addWhen(s, e3, t = {}) {
    return this._installWatch(s, e3, t, p);
  }
  addOnCollectionChange(s, e3, {
    initial: i = false,
    final: n = false
  } = {}) {
    const r = ++this._handleId;
    return this.addHandles([v2(s, "after-changes", this._createSyncUpdatingCallback(), C), v2(s, "change", e3, {
      onListenerAdd: i ? (s2) => e3({
        added: s2.toArray(),
        removed: []
      }) : void 0,
      onListenerRemove: n ? (s2) => e3({
        added: [],
        removed: s2.toArray()
      }) : void 0
    })], r), e(() => this.removeHandles(r));
  }
  addPromise(s) {
    if (null == s) return s;
    const e3 = ++this._handleId;
    this.addHandles(e(() => {
      this._pendingPromises.delete(s) && (0 !== this._pendingPromises.size || this.hasHandles(c) || this._set("updating", false));
    }), e3), this._pendingPromises.add(s), this._set("updating", true);
    const i = () => this.removeHandles(e3);
    return s.then(i, i), s;
  }
  removeAll() {
    this._pendingPromises.clear(), this.removeAllHandles(), this._set("updating", false);
  }
  _installWatch(s, e3, i = {}, n) {
    const d2 = ++this._handleId;
    i.sync || this._installSyncUpdatingWatch(s, d2);
    const a2 = n(s, e3, i);
    return this.addHandles(a2, d2), e(() => this.removeHandles(d2));
  }
  _installSyncUpdatingWatch(s, e3) {
    const t = this._createSyncUpdatingCallback(), n = d(s, t, {
      sync: true,
      equals: () => false
    });
    return this.addHandles(n, e3), n;
  }
  _createSyncUpdatingCallback() {
    return () => {
      this.removeHandles(c), ++this._scheduleHandleId;
      const s = this._scheduleHandleId;
      this._get("updating") || this._set("updating", true), this.addHandles(v(() => {
        s === this._scheduleHandleId && (this._set("updating", this._pendingPromises.size > 0), this.removeHandles(c));
      }), c);
    };
  }
};
e2([y({
  readOnly: true
})], h.prototype, "updating", void 0), h = e2([a("esri.core.support.UpdatingHandles")], h);
var c = -42;

export {
  h
};
//# sourceMappingURL=chunk-PVO5NM6Q.js.map
