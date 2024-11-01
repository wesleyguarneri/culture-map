import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  p
} from "./chunk-4YRHCFPB.js";
import {
  j,
  m2 as m,
  u
} from "./chunk-MRPCXIVS.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/rest/networks/support/AggregatedGeometry.js
var n = class extends f {
  constructor(o) {
    super(o), this.line = null, this.multipoint = null, this.polygon = null;
  }
};
e([y({
  type: m,
  json: {
    write: true
  },
  readOnly: true
})], n.prototype, "line", void 0), e([y({
  type: u,
  json: {
    read: {
      source: "point"
    },
    write: {
      target: "point"
    }
  },
  readOnly: true
})], n.prototype, "multipoint", void 0), e([y({
  type: j,
  json: {
    write: true
  },
  readOnly: true
})], n.prototype, "polygon", void 0), n = e([a("esri.rest.networks.support.AggregatedGeometry")], n);
var l = n;

// ../../../node_modules/@arcgis/core/rest/networks/support/FunctionResult.js
var s = class extends f {
  constructor(t) {
    super(t), this.functionType = null, this.networkAttributeName = null, this.result = null;
  }
};
e([y({
  type: ["add", "subtract", "average", "count", "min", "max"],
  json: {
    write: true
  },
  readOnly: true
})], s.prototype, "functionType", void 0), e([y({
  type: String,
  json: {
    write: true
  },
  readOnly: true
})], s.prototype, "networkAttributeName", void 0), e([y({
  type: Number,
  json: {
    write: true
  },
  readOnly: true
})], s.prototype, "result", void 0), s = e([a("esri.rest.networks.support.FunctionResult")], s);
var p2 = s;

// ../../../node_modules/@arcgis/core/rest/networks/support/TraceResult.js
var p3 = class extends f {
  constructor(o) {
    super(o), this.aggregatedGeometry = null, this.elements = null, this.globalFunctionResults = null, this.kFeaturesForKNNFound = false, this.startingPointsIgnored = false, this.warnings = null;
  }
};
e([y({
  type: l,
  json: {
    write: true
  },
  readOnly: true
})], p3.prototype, "aggregatedGeometry", void 0), e([y({
  type: [p],
  json: {
    write: true
  },
  readOnly: true
})], p3.prototype, "elements", void 0), e([y({
  type: [p2],
  json: {
    write: true
  },
  readOnly: true
})], p3.prototype, "globalFunctionResults", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  },
  readOnly: true
})], p3.prototype, "kFeaturesForKNNFound", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  },
  readOnly: true
})], p3.prototype, "startingPointsIgnored", void 0), e([y({
  type: [String],
  json: {
    write: true
  },
  readOnly: true
})], p3.prototype, "warnings", void 0), p3 = e([a("esri.rest.networks.support.TraceResult")], p3);
var a2 = p3;

export {
  a2 as a
};
//# sourceMappingURL=chunk-JDM73SXR.js.map
