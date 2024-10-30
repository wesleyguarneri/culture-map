import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  u
} from "./chunk-KUBMHTYA.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  N,
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/renderers/support/HeatmapColorStop.js
var c;
var i = c = class extends f {
  constructor(o) {
    super(o), this.color = null, this.ratio = null;
  }
  clone() {
    return new c({
      color: this.color && this.color.clone(),
      ratio: this.ratio
    });
  }
};
e([y({
  type: u,
  json: {
    type: [N],
    default: null,
    write: true
  }
})], i.prototype, "color", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], i.prototype, "ratio", void 0), i = c = e([a("esri.renderers.support.HeatmapColorStop")], i);
var l = i;

export {
  l
};
//# sourceMappingURL=chunk-ARN5GJBK.js.map
