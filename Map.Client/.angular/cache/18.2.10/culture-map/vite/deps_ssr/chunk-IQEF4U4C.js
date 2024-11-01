import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s as s2
} from "./chunk-PH6NPTP7.js";
import {
  s
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/core/ReactiveMap.js
var s3 = class {
  constructor(e) {
    this._observable = new s2(), this._map = new Map(e);
  }
  get size() {
    return s(this._observable), this._map.size;
  }
  clear() {
    this._map.size > 0 && (this._map.clear(), this._observable.notify());
  }
  delete(e) {
    const t = this._map.delete(e);
    return t && this._observable.notify(), t;
  }
  entries() {
    return s(this._observable), this._map.entries();
  }
  forEach(t, s4) {
    s(this._observable), this._map.forEach((e, r) => t.call(s4, e, r, this), s4);
  }
  get(t) {
    return s(this._observable), this._map.get(t);
  }
  has(t) {
    return s(this._observable), this._map.has(t);
  }
  keys() {
    return s(this._observable), this._map.keys();
  }
  set(e, t) {
    return this._map.set(e, t), this._observable.notify(), this;
  }
  values() {
    return s(this._observable), this._map.values();
  }
  [Symbol.iterator]() {
    return s(this._observable), this._map[Symbol.iterator]();
  }
  get [Symbol.toStringTag]() {
    return this._map[Symbol.toStringTag];
  }
};

export {
  s3 as s
};
//# sourceMappingURL=chunk-IQEF4U4C.js.map
