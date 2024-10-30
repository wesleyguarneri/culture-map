import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n
} from "./chunk-RFURERTV.js";
import {
  n as n2
} from "./chunk-CATQ6UZ5.js";
import {
  gt
} from "./chunk-MIWJLMUG.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/interactive/snapping/candidates/VertexSnappingCandidate.js
var r = class extends n2 {
  constructor(n3) {
    super(__spreadProps(__spreadValues({}, n3), {
      constraint: new gt(n3.targetPoint)
    }));
  }
  get hints() {
    return [new n(this.targetPoint, this.isDraped, this.domain)];
  }
};

export {
  r
};
//# sourceMappingURL=chunk-2KWC6XPV.js.map
