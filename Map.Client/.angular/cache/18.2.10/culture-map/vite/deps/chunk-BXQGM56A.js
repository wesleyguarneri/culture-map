import {
  r2 as r
} from "./chunk-ANKOCGE2.js";

// ../../../node_modules/@arcgis/core/core/accessorSupport/tracking/SimpleObservable.js
var s = class extends r {
  notify() {
    const o = this._observers;
    if (o && o.length > 0) {
      const s2 = o.slice();
      for (const o2 of s2) o2.onInvalidated(), o2.onCommitted();
    }
  }
};

export {
  s
};
//# sourceMappingURL=chunk-BXQGM56A.js.map
