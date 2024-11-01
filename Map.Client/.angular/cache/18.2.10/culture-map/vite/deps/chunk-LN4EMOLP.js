// ../../../node_modules/@arcgis/core/core/NestedMap.js
var t = class {
  constructor() {
    this._outer = /* @__PURE__ */ new Map();
  }
  clear() {
    this._outer.clear();
  }
  get empty() {
    return 0 === this._outer.size;
  }
  get(t2, e) {
    return this._outer.get(t2)?.get(e);
  }
  set(t2, e, r) {
    const s = this._outer.get(t2);
    s ? s.set(e, r) : this._outer.set(t2, /* @__PURE__ */ new Map([[e, r]]));
  }
  delete(t2, e) {
    const r = this._outer.get(t2);
    r && (r.delete(e), 0 === r.size && this._outer.delete(t2));
  }
  forEach(t2) {
    this._outer.forEach((e, r) => t2(e, r));
  }
};

export {
  t
};
//# sourceMappingURL=chunk-LN4EMOLP.js.map
