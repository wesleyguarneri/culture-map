import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f
} from "./chunk-4AZPIP7K.js";
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

// ../../../node_modules/@arcgis/core/layers/support/LayerFloorInfo.js
var l;
var i = l = class extends f {
  constructor(o) {
    super(o), this.floorField = null, this.viewAllMode = false, this.viewAllLevelIds = new V();
  }
  clone() {
    return new l({
      floorField: this.floorField,
      viewAllMode: this.viewAllMode,
      viewAllLevelIds: this.viewAllLevelIds
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], i.prototype, "floorField", void 0), e([y({
  json: {
    read: false,
    write: false
  }
})], i.prototype, "viewAllMode", void 0), e([y({
  json: {
    read: false,
    write: false
  }
})], i.prototype, "viewAllLevelIds", void 0), i = l = e([a("esri.layers.support.LayerFloorInfo")], i);
var p = i;

export {
  p
};
//# sourceMappingURL=chunk-PXTZCDRW.js.map
