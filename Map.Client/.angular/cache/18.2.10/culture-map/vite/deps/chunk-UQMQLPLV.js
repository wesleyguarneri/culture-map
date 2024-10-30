import {
  v
} from "./chunk-6WHTZNUH.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  b
} from "./chunk-HJY2YILU.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/views/layers/RefreshableLayerView.js
var i = (i2) => {
  let a2 = class extends i2 {
    initialize() {
      this.addHandles(v(() => this.layer, "refresh", (r) => {
        this.doRefresh(r.dataChanged).catch((r2) => {
          b(r2) || n.getLogger(this).error(r2);
        });
      }), "RefreshableLayerView");
    }
  };
  return a2 = e([a("esri.views.layers.RefreshableLayerView")], a2), a2;
};

export {
  i
};
//# sourceMappingURL=chunk-UQMQLPLV.js.map
