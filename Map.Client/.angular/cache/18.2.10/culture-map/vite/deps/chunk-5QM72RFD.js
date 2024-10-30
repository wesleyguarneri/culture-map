import {
  n as n2
} from "./chunk-WQXGIEVZ.js";
import {
  E,
  Ut
} from "./chunk-T3EGKTN6.js";
import {
  n
} from "./chunk-ZFPMGEAK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=chunk-5QM72RFD.js.map
