import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n as n2
} from "./chunk-CATQ6UZ5.js";
import {
  E,
  Ut
} from "./chunk-MIWJLMUG.js";
import {
  n
} from "./chunk-MDOKECP3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/interactive/snapping/candidates/DrapedEdgeSnappingCandidate.js
var r = class extends n2 {
  constructor(n3) {
    super(__spreadProps(__spreadValues({}, n3), {
      isDraped: true,
      constraint: new Ut(n3.edgeStart, n3.edgeEnd, n3.getGroundElevation)
    }));
  }
  get hints() {
    return [new n(E.REFERENCE, this.constraint.start, this.constraint.end, this.isDraped, this.domain)];
  }
};

export {
  r
};
//# sourceMappingURL=chunk-WXECQAUG.js.map
