import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  j
} from "./chunk-4X2M4YSF.js";
import {
  a as a3
} from "./chunk-HKAONIBH.js";
import {
  i
} from "./chunk-DL2B6IFJ.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  s
} from "./chunk-66YQWHHE.js";
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
  a,
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import {
  o
} from "./chunk-6WGE3IUL.js";

// ../../../node_modules/@arcgis/core/analysis/SlicePlane.js
var c = class extends i(f) {
  constructor(o2) {
    super(o2), this.type = "plane", this.position = null, this.heading = 0, this.tilt = 0, this.width = 10, this.height = 10;
  }
  equals(o2) {
    return this.heading === o2.heading && this.tilt === o2.tilt && o(this.position, o2.position) && this.width === o2.width && this.height === o2.height;
  }
};
e([y({
  readOnly: true,
  json: {
    read: false,
    write: true
  }
})], c.prototype, "type", void 0), e([y({
  type: _
}), j()], c.prototype, "position", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 360
  }
}), j(), s((o2) => a3.normalize(a(o2), 0, true))], c.prototype, "heading", void 0), e([y({
  type: Number,
  nonNullable: true,
  range: {
    min: 0,
    max: 360
  }
}), j(), s((o2) => a3.normalize(a(o2), 0, true))], c.prototype, "tilt", void 0), e([y({
  type: Number,
  nonNullable: true
}), j()], c.prototype, "width", void 0), e([y({
  type: Number,
  nonNullable: true
}), j()], c.prototype, "height", void 0), c = e([a2("esri.analysis.SlicePlane")], c);
var h = c;

export {
  h
};
//# sourceMappingURL=chunk-IFQJT5WB.js.map
