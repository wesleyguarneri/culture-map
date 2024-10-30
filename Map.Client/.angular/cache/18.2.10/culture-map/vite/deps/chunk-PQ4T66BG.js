import {
  h
} from "./chunk-SWPHGZYB.js";

// ../../../node_modules/@arcgis/core/core/LRUCache.js
var e = class {
  constructor(e2, s) {
    this._storage = new h(), this.id = "", this.name = "", this.size = 0, this._storage.maxSize = e2, this._storage.register(this), s && this._storage.registerRemoveFunc("", s);
  }
  destroy() {
    this._storage.deregister(this), this._storage.destroy();
  }
  put(t, e2, s = 1) {
    this._storage.put(this, t, e2, s, 1);
  }
  pop(t) {
    return this._storage.pop(this, t);
  }
  get(t) {
    return this._storage.get(this, t);
  }
  clear() {
    this._storage.clearAll();
  }
  get maxSize() {
    return this._storage.maxSize;
  }
  set maxSize(t) {
    this._storage.maxSize = t;
  }
  resetHitRate() {
  }
};

export {
  e
};
//# sourceMappingURL=chunk-PQ4T66BG.js.map
