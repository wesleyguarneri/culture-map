import {
  r
} from "./chunk-DM4WHMQY.js";
import {
  E
} from "./chunk-EITGQLII.js";
import {
  o
} from "./chunk-WGAPNV7F.js";
import {
  n3 as n
} from "./chunk-ANKOCGE2.js";

// ../../../node_modules/@arcgis/core/views/3d/support/EventedSet.js
var h = class extends o {
  constructor() {
    super(...arguments), this._set = /* @__PURE__ */ new Set(), this._length = r(0);
  }
  clear() {
    if (this._set.size > 0) {
      const e = this.toArray();
      this._set.clear(), this.emit("after-changes", {
        type: E.REMOVE
      }), this.emit("change", {
        added: [],
        removed: e
      });
    }
  }
  get length() {
    return this._length.value;
  }
  addMany(e) {
    if (0 !== e.length) {
      for (const t of e) this._set.add(t);
      this._length.value = this._set.size, this.emit("after-changes", {
        type: E.ADD
      }), this.emit("change", {
        added: e,
        removed: []
      });
    }
  }
  remove(e) {
    this._set.delete(e) && (this._length.value = this._set.size, this.emit("after-changes", {
      type: E.REMOVE
    }), this.emit("change", {
      added: [],
      removed: [e]
    }));
  }
  removeMany(e) {
    const s = [];
    for (const t of e) this._set.delete(t) && s.push(t);
    s.length > 0 && (this._length.value = this._set.size, this.emit("after-changes", {
      type: E.REMOVE
    }), this.emit("change", {
      added: [],
      removed: s
    }));
  }
  toArray() {
    return [...this._set];
  }
  find(e) {
    let t;
    return n(this._set, (s) => !!e(s) && (t = s, true)), t;
  }
  forEach(e) {
    this._set.forEach((t) => e(t));
  }
};

export {
  h
};
//# sourceMappingURL=chunk-2WSNLRTZ.js.map
