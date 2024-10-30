import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  p
} from "./chunk-FW7J76DZ.js";
import {
  V
} from "./chunk-LM3JDV4W.js";
import {
  j
} from "./chunk-MRPCXIVS.js";
import {
  o
} from "./chunk-GCVQXAS4.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

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
//# sourceMappingURL=chunk-B5L6EMPL.js.map
