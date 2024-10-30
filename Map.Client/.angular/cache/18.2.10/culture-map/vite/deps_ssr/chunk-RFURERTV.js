import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s2 as s
} from "./chunk-MDOKECP3.js";
import {
  G
} from "./chunk-MZM4INJV.js";

// ../../../node_modules/@arcgis/core/views/interactive/snapping/hints/PointSnappingHint.js
var n = class _n extends s {
  constructor(t, s2, n2) {
    super(s2, n2), this.point = t;
  }
  equals(s2) {
    return s2 instanceof _n && G(this.point, s2.point);
  }
};

export {
  n
};
//# sourceMappingURL=chunk-RFURERTV.js.map
