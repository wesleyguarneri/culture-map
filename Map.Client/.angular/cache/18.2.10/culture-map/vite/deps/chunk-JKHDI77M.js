import {
  w
} from "./chunk-3AY5EJVP.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/layers/mixins/FeatureEffectLayer.js
var s = {
  write: {
    allowNull: true
  }
};
var p = {
  type: w,
  json: {
    origins: {
      "web-map": s,
      "portal-item": s
    }
  }
};
var c = (t) => {
  let s2 = class extends t {
    constructor() {
      super(...arguments), this.featureEffect = null;
    }
  };
  return e([y(p)], s2.prototype, "featureEffect", void 0), s2 = e([a("esri.layers.mixins.FeatureEffectLayer")], s2), s2;
};

export {
  p,
  c
};
//# sourceMappingURL=chunk-JKHDI77M.js.map
