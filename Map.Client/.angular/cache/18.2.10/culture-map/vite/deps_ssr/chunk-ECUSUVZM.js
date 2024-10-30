import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a as a2,
  g
} from "./chunk-CQIKG7VH.js";
import {
  w
} from "./chunk-LZSLQ24Q.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  s
} from "./chunk-AIZ3T7E3.js";
import {
  e
} from "./chunk-6UEMNP3E.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/LayerView3D.js
var l = (l2) => {
  let n = class extends l2 {
    constructor() {
      super(...arguments), this.slicePlaneEnabled = false, this.supportsHeightUnitConversion = false;
    }
    postscript() {
      super.postscript(), g(this.layer) && this.addResolvingPromise(this._validateHeightModelInfo());
    }
    _validateHeightModelInfo() {
      return __async(this, null, function* () {
        const o = new AbortController(), r = o.signal;
        this.addHandles(e(() => o.abort())), yield w(() => this.view.defaultsFromMap?.heightModelInfoReady, r), s(r);
        const i = a2(this.layer, this.view.heightModelInfo, this.supportsHeightUnitConversion);
        if (i) throw i;
      });
    }
  };
  return e2([y()], n.prototype, "view", void 0), e2([y()], n.prototype, "slicePlaneEnabled", void 0), n = e2([a("esri.views.3d.layers.LayerView3D")], n), n;
};

export {
  l
};
//# sourceMappingURL=chunk-ECUSUVZM.js.map
