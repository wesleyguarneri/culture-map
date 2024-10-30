import {
  j
} from "./chunk-6PFH6TN3.js";
import {
  a as a3
} from "./chunk-SLCHZ6DD.js";
import {
  i
} from "./chunk-CIW3KHOW.js";
import {
  _
} from "./chunk-O7UDKFOW.js";
import {
  s
} from "./chunk-NKCPFCP3.js";
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
  a,
  a3 as a2
} from "./chunk-DDYVXG4F.js";
import {
  o
} from "./chunk-2MMLMOWS.js";

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
//# sourceMappingURL=chunk-5P5DJEOE.js.map
