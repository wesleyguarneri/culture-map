import {
  a as a3
} from "./chunk-SLCHZ6DD.js";
import {
  l
} from "./chunk-CIW3KHOW.js";
import {
  _
} from "./chunk-O7UDKFOW.js";
import {
  s
} from "./chunk-NKCPFCP3.js";
import {
  u2 as u
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

// ../../../node_modules/@arcgis/core/analysis/dimensionUtils.js
var t;
!function(t2) {
  t2.Horizontal = "horizontal", t2.Vertical = "vertical", t2.Direct = "direct";
}(t || (t = {}));
var r = [t.Horizontal, t.Vertical, t.Direct];

// ../../../node_modules/@arcgis/core/analysis/LengthDimension.js
var l2 = class extends u(l) {
  constructor(o) {
    super(o), this.type = "length", this.startPoint = null, this.endPoint = null, this.measureType = t.Direct, this.offset = 0, this.orientation = 0;
  }
};
e([y({
  type: ["length"],
  json: {
    write: {
      isRequired: true
    }
  }
})], l2.prototype, "type", void 0), e([y({
  type: _,
  json: {
    write: true
  }
})], l2.prototype, "startPoint", void 0), e([y({
  type: _,
  json: {
    write: true
  }
})], l2.prototype, "endPoint", void 0), e([y({
  type: r,
  nonNullable: true,
  json: {
    write: {
      isRequired: true
    }
  }
})], l2.prototype, "measureType", void 0), e([y({
  type: Number,
  nonNullable: true,
  json: {
    write: {
      isRequired: true
    }
  }
})], l2.prototype, "offset", void 0), e([y({
  type: Number,
  nonNullable: true,
  json: {
    write: {
      isRequired: true
    }
  }
}), s((o) => a3.normalize(a(o), 0, true))], l2.prototype, "orientation", void 0), l2 = e([a2("esri.analysis.LengthDimension")], l2);
var u2 = l2;

export {
  t,
  r,
  u2 as u
};
//# sourceMappingURL=chunk-TCNXPK2T.js.map
