import { createRequire } from 'module';const require = createRequire(import.meta.url);
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

// ../../../node_modules/@arcgis/core/layers/support/FeatureReduction.js
var t = class extends f {
  constructor() {
    super(...arguments), this.type = null;
  }
};
e([y({
  type: ["selection", "cluster", "binning"],
  readOnly: true,
  json: {
    read: false,
    write: true
  }
})], t.prototype, "type", void 0), t = e([a("esri.layers.support.FeatureReduction")], t);

// ../../../node_modules/@arcgis/core/layers/support/FeatureReductionSelection.js
var s;
var c = s = class extends t {
  constructor(o) {
    super(o), this.type = "selection";
  }
  clone() {
    return new s();
  }
};
e([y({
  type: ["selection"]
})], c.prototype, "type", void 0), c = s = e([a("esri.layers.support.FeatureReductionSelection")], c);
var p = c;

export {
  t,
  p
};
//# sourceMappingURL=chunk-W26QF64E.js.map
