import {
  p
} from "./chunk-S5SROJXI.js";
import {
  V
} from "./chunk-DUTZNK67.js";
import {
  j
} from "./chunk-T6GCUITX.js";
import {
  o
} from "./chunk-IHVSZYZS.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/layers/support/MediaElementView.js
var m = class extends S {
  constructor(o2) {
    super(o2);
  }
  get bounds() {
    const o2 = this.coords;
    return null == o2?.extent ? null : o(o2.extent);
  }
  get coords() {
    const o2 = this.element.georeference?.coords;
    return V(o2, this.spatialReference).geometry;
  }
  get normalizedCoords() {
    return j.fromJSON(p(this.coords));
  }
  get normalizedBounds() {
    const o2 = null != this.normalizedCoords ? this.normalizedCoords.extent : null;
    return null != o2 ? o(o2) : null;
  }
};
e([y()], m.prototype, "spatialReference", void 0), e([y()], m.prototype, "element", void 0), e([y()], m.prototype, "bounds", null), e([y()], m.prototype, "coords", null), e([y()], m.prototype, "normalizedCoords", null), e([y()], m.prototype, "normalizedBounds", null), m = e([a("esri.layers.support.MediaElementView")], m);

export {
  m
};
//# sourceMappingURL=chunk-4DWBMVDA.js.map
