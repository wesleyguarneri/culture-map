import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var t = (t2) => {
  let l = class extends t2 {
    constructor() {
      super(...arguments), this.minScale = 0, this.maxScale = 0;
    }
    get effectiveScaleRange() {
      const e2 = {
        minScale: this.minScale,
        maxScale: this.maxScale
      }, a2 = this.parent;
      a2 && "effectiveScaleRange" in a2 && r(e2, a2.effectiveScaleRange);
      const c = this._get("effectiveScaleRange");
      return c && c.minScale === e2.minScale && c.maxScale === e2.maxScale ? c : e2;
    }
  };
  return e([y({
    type: Number,
    nonNullable: true,
    json: {
      write: true
    }
  })], l.prototype, "minScale", void 0), e([y({
    type: Number,
    nonNullable: true,
    json: {
      write: true
    }
  })], l.prototype, "maxScale", void 0), e([y({
    readOnly: true
  })], l.prototype, "effectiveScaleRange", null), l = e([a("esri.layers.mixins.ScaleRangeLayer")], l), l;
};
function r(e2, a2) {
  return e2.minScale = e2.minScale > 0 ? a2.minScale > 0 ? Math.min(e2.minScale, a2.minScale) : e2.minScale : a2.minScale, e2.maxScale = e2.maxScale > 0 ? a2.maxScale > 0 ? Math.max(e2.maxScale, a2.maxScale) : e2.maxScale : a2.maxScale, e2;
}

export {
  t
};
//# sourceMappingURL=chunk-UWJIHV6Q.js.map
