import {
  t
} from "./chunk-LN4EMOLP.js";
import {
  r
} from "./chunk-KUYTX4V6.js";

// ../../../node_modules/@arcgis/core/views/webgl/ProgramCache.js
var s = class {
  constructor(r2) {
    this._rctx = r2, this._store = new t();
  }
  dispose() {
    this._store.forEach((t2) => t2.forEach((t3) => t3.dispose())), this._store.clear();
  }
  acquire(t2, s2, e, o) {
    const i = this._store.get(t2, s2);
    if (null != i) return i.ref(), i;
    const c = new r(this._rctx, t2, s2, e, o);
    return c.ref(), this._store.set(t2, s2, c), c;
  }
  get test() {
  }
};

export {
  s
};
//# sourceMappingURL=chunk-L7Q5TZIL.js.map
