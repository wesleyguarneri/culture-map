import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  w
} from "./chunk-GGTDLTZW.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

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
//# sourceMappingURL=chunk-FALQTRQL.js.map
