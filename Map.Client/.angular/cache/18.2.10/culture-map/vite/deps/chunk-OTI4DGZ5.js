import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

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
//# sourceMappingURL=chunk-OTI4DGZ5.js.map
