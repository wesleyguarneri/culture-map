import {
  s as s2
} from "./chunk-BXQGM56A.js";
import {
  s
} from "./chunk-DDYVXG4F.js";
import {
  __yieldStar
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/core/Queue.js
var s3 = class {
  constructor(t = (t2) => t2.values().next().value) {
    this._peeker = t, this._observable = new s2(), this._items = /* @__PURE__ */ new Set();
  }
  get length() {
    return s(this._observable), this._items.size;
  }
  clear() {
    0 !== this.length && (this._items.clear(), this._observable.notify());
  }
  last() {
    if (0 === this.length) return;
    let t;
    for (t of this._items) ;
    return t;
  }
  peek() {
    if (0 !== this.length) return this._peeker(this._items);
  }
  push(t) {
    this.contains(t) || (this._items.add(t), this._observable.notify());
  }
  contains(e) {
    return s(this._observable), this._items.has(e);
  }
  pop() {
    if (0 === this.length) return;
    const t = this.peek();
    return this._items.delete(t), this._observable.notify(), t;
  }
  popLast() {
    if (0 === this.length) return;
    const t = this.last();
    return this._items.delete(t), this._observable.notify(), t;
  }
  remove(t) {
    this.contains(t) && (this._items.delete(t), this._observable.notify());
  }
  filter(t) {
    const e = this.length;
    return this._items.forEach((e2) => {
      t(e2) || this._items.delete(e2);
    }), e !== this._items.size && this._observable.notify(), this;
  }
  *[Symbol.iterator]() {
    s(this._observable), yield* __yieldStar(this._items);
  }
};

export {
  s3 as s
};
//# sourceMappingURL=chunk-HOH445RO.js.map
