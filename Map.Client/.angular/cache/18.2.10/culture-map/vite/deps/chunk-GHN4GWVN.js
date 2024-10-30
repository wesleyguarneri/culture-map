import {
  n
} from "./chunk-TJIA4U42.js";
import {
  n as n2
} from "./chunk-WQXGIEVZ.js";
import {
  gt
} from "./chunk-T3EGKTN6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=chunk-GHN4GWVN.js.map
