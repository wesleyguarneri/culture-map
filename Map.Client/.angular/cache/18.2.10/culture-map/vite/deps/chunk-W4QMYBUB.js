import {
  V
} from "./chunk-EITGQLII.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

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
//# sourceMappingURL=chunk-W4QMYBUB.js.map
