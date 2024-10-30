import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  v
} from "./chunk-LZSLQ24Q.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  b
} from "./chunk-AIZ3T7E3.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";

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
//# sourceMappingURL=chunk-AEJ7YVFP.js.map
