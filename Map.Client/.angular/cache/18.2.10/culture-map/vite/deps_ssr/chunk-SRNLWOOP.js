import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/views/layers/CatalogLayerView.js
var i = (i2) => {
  let s = class extends i2 {
    constructor(...r) {
      super(...r), this.layerViews = new V();
    }
    get dynamicGroupLayerView() {
      return this.layerViews.find((r) => r.layer === this.layer?.dynamicGroupLayer);
    }
    get footprintLayerView() {
      return this.layerViews.find((r) => r.layer === this.layer?.footprintLayer);
    }
    isUpdating() {
      return !this.dynamicGroupLayerView || !this.footprintLayerView || this.dynamicGroupLayerView.updating || this.footprintLayerView.updating;
    }
  };
  return e([y()], s.prototype, "layer", void 0), e([y()], s.prototype, "layerViews", void 0), e([y({
    readOnly: true
  })], s.prototype, "dynamicGroupLayerView", null), e([y({
    readOnly: true
  })], s.prototype, "footprintLayerView", null), s = e([a("esri.views.layers.CatalogLayerView")], s), s;
};

export {
  i
};
//# sourceMappingURL=chunk-SRNLWOOP.js.map
