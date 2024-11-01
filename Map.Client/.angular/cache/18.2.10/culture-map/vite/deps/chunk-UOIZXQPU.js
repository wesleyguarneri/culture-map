import {
  s as s2
} from "./chunk-BXQGM56A.js";
import {
  s
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/core/ReactiveSet.js
var s3 = class {
  constructor(t) {
    this._observable = new s2(), this._set = new Set(t);
  }
  get size() {
    return s(this._observable), this._set.size;
  }
  add(t) {
    const e = this._set.size;
    return this._set.add(t), this._set.size !== e && this._observable.notify(), this;
  }
  clear() {
    this._set.size > 0 && (this._set.clear(), this._observable.notify());
  }
  delete(t) {
    const e = this._set.delete(t);
    return e && this._observable.notify(), e;
  }
  entries() {
    return s(this._observable), this._set.entries();
  }
  forEach(e, s4) {
    s(this._observable), this._set.forEach((t, r) => e.call(s4, t, r, this), s4);
  }
  has(e) {
    return s(this._observable), this._set.has(e);
  }
  keys() {
    return s(this._observable), this._set.keys();
  }
  values() {
    return s(this._observable), this._set.values();
  }
  [Symbol.iterator]() {
    return s(this._observable), this._set[Symbol.iterator]();
  }
  get [Symbol.toStringTag]() {
    return this._set[Symbol.toStringTag];
  }
};

export {
  s3 as s
};
//# sourceMappingURL=chunk-UOIZXQPU.js.map
