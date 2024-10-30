import {
  a
} from "./chunk-ZVFENZUF.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterial.js
var t = class {
  constructor(e) {
    this._material = e.material, this._techniques = e.techniques, this._output = e.output;
  }
  dispose() {
    this._techniques.release(this._technique);
  }
  get technique() {
    return this._technique;
  }
  get _stippleTextures() {
    return this._techniques.constructionContext.stippleTextures;
  }
  get _markerTextures() {
    return this._techniques.constructionContext.markerTextures;
  }
  ensureTechnique(e, t2) {
    return this._technique = this._techniques.releaseAndAcquire(e, this._material.getConfiguration(this._output, t2), this._technique), this._technique;
  }
  ensureResources(t2) {
    return a.LOADED;
  }
};

export {
  t
};
//# sourceMappingURL=chunk-GDEAPZ64.js.map
