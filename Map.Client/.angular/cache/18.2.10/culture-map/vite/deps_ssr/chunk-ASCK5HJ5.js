import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/core/Identifiable.js
var r = 0;
var s = (s2) => {
  let i2 = class extends s2 {
    constructor(...e2) {
      super(...e2), Object.defineProperty(this, "uid", {
        writable: false,
        configurable: false,
        value: Date.now().toString(16) + "-object-" + r++
      });
    }
  };
  return i2 = e([a("esri.core.Identifiable")], i2), i2;
};
var i = (s2) => {
  let i2 = class extends s2 {
    constructor(...e2) {
      super(...e2), Object.defineProperty(this, "uid", {
        writable: false,
        configurable: false,
        value: r++
      });
    }
  };
  return i2 = e([a("esri.core.Identifiable.NumericIdentifiable")], i2), i2;
};
var o = class extends s(class {
}) {
};
o = e([a("esri.core.Identifiable")], o);

export {
  s,
  i,
  o
};
//# sourceMappingURL=chunk-ASCK5HJ5.js.map
