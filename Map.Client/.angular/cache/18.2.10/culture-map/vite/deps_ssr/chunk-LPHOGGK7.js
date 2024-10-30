import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

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
//# sourceMappingURL=chunk-LPHOGGK7.js.map
