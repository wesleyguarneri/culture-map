import {
  E as E2,
  Lt
} from "./chunk-T3EGKTN6.js";
import {
  E2 as E,
  n
} from "./chunk-ZFPMGEAK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/interactive/snapping/candidates/SnappingCandidate.js
var t = class {
  constructor(t2, s, i, o) {
    this.targetPoint = t2, this.constraint = s, this.isDraped = i, this.domain = o;
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/snapping/candidates/FeatureSnappingCandidate.js
var n2 = class extends t {
  constructor({
    targetPoint: o,
    objectId: n3,
    constraint: r2,
    isDraped: i
  }) {
    super(o, r2, i, E.FEATURE), this.objectId = n3;
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/snapping/candidates/EdgeSnappingCandidate.js
var r = class extends n2 {
  constructor(n3) {
    super(__spreadProps(__spreadValues({}, n3), {
      constraint: new Lt(n3.edgeStart, n3.edgeEnd)
    }));
  }
  get hints() {
    return [new n(E2.REFERENCE, this.constraint.start, this.constraint.end, this.isDraped, this.domain)];
  }
};

export {
  t,
  n2 as n,
  r
};
//# sourceMappingURL=chunk-WQXGIEVZ.js.map
