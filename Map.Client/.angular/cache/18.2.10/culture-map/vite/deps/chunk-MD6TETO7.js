import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/views/layers/OGCFeatureLayerView.js
var o = (o2) => {
  let t = class extends o2 {
    get availableFields() {
      return this.layer.fieldsIndex.fields.map((e2) => e2.name);
    }
  };
  return e([y()], t.prototype, "layer", void 0), e([y({
    readOnly: true
  })], t.prototype, "availableFields", null), t = e([a("esri.views.layers.OGCFeatureLayerView")], t), t;
};

export {
  o
};
//# sourceMappingURL=chunk-MD6TETO7.js.map
