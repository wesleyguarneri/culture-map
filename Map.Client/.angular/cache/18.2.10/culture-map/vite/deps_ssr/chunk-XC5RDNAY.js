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

// ../../../node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var e2 = (e3) => {
  let t = class extends e3 {
    constructor() {
      super(...arguments), this.customParameters = null;
    }
  };
  return e([y({
    type: Object,
    json: {
      write: {
        overridePolicy: (r) => ({
          enabled: !!(r && Object.keys(r).length > 0)
        })
      }
    }
  })], t.prototype, "customParameters", void 0), t = e([a("esri.layers.mixins.CustomParametersMixin")], t), t;
};

export {
  e2 as e
};
//# sourceMappingURL=chunk-XC5RDNAY.js.map
