import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  r2 as r
} from "./chunk-NXK752PZ.js";

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
//# sourceMappingURL=chunk-PH6NPTP7.js.map
