import {
  h2 as h,
  n2 as n
} from "./chunk-GQOLRPFL.js";
import {
  E
} from "./chunk-PAFFV5BJ.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/BitmapContainer.js
var a = class extends n {
  constructor() {
    super(...arguments), this._hasCrossfade = false;
  }
  get requiresDedicatedFBO() {
    return super.requiresDedicatedFBO || this._hasCrossfade;
  }
  beforeRender(e) {
    super.beforeRender(e), this._manageFade();
  }
  prepareRenderPasses(s) {
    const a2 = s.registerRenderPass({
      name: "bitmap",
      brushes: [h.bitmap],
      target: () => this.children,
      drawPhase: E.MAP
    });
    return [...super.prepareRenderPasses(s), a2];
  }
  _manageFade() {
    this.children.reduce((e, r) => e + (r.inFadeTransition ? 1 : 0), 0) >= 2 ? (this.children.forEach((e) => e.blendFunction = "additive"), this._hasCrossfade = true) : (this.children.forEach((e) => e.blendFunction = "standard"), this._hasCrossfade = false);
  }
};

export {
  a
};
//# sourceMappingURL=chunk-TZGJB4CO.js.map
