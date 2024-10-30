import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/views/layers/CatalogFootprintLayerView.js
var s = (s2) => {
  let t = class extends s2 {
    constructor(...r) {
      super(...r);
    }
    get updateSuspended() {
      const r = this.parent?.dynamicGroupLayerView;
      return this.suspended && (!r || true === r.suspended);
    }
  };
  return e([y()], t.prototype, "layer", void 0), e([y()], t.prototype, "parent", void 0), e([y()], t.prototype, "updateSuspended", null), t = e([a("esri.views.layers.CatalogFootprintLayerView")], t), t;
};

export {
  s
};
//# sourceMappingURL=chunk-HQ4UGNLD.js.map
