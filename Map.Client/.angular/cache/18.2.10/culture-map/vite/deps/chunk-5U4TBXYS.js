import {
  u
} from "./chunk-K226GFDN.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  N,
  a3 as a
} from "./chunk-DDYVXG4F.js";

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
//# sourceMappingURL=chunk-5U4TBXYS.js.map
