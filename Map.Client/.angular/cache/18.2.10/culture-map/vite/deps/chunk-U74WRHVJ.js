import {
  u
} from "./chunk-K226GFDN.js";
import {
  o
} from "./chunk-4ZZRP4MA.js";
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
  a3 as a2
} from "./chunk-DDYVXG4F.js";
import {
  a
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/rest/support/ColorRamp.js
var e2 = class extends f {
  constructor(r) {
    super(r), this.type = null;
  }
};
e([y({
  readOnly: true,
  json: {
    read: false,
    write: true
  }
})], e2.prototype, "type", void 0), e2 = e([a2("esri.rest.support.ColorRamp")], e2);
var p = e2;

// ../../../node_modules/@arcgis/core/rest/support/AlgorithmicColorRamp.js
var m;
var c = m = class extends p {
  constructor(o2) {
    super(o2), this.algorithm = null, this.fromColor = null, this.toColor = null, this.type = "algorithmic";
  }
  clone() {
    return new m({
      fromColor: a(this.fromColor),
      toColor: a(this.toColor),
      algorithm: this.algorithm
    });
  }
};
e([o({
  esriCIELabAlgorithm: "cie-lab",
  esriHSVAlgorithm: "hsv",
  esriLabLChAlgorithm: "lab-lch"
})], c.prototype, "algorithm", void 0), e([y({
  type: u,
  json: {
    type: [N],
    write: true
  }
})], c.prototype, "fromColor", void 0), e([y({
  type: u,
  json: {
    type: [N],
    write: true
  }
})], c.prototype, "toColor", void 0), e([y({
  type: ["algorithmic"]
})], c.prototype, "type", void 0), c = m = e([a2("esri.rest.support.AlgorithmicColorRamp")], c);
var a3 = c;

// ../../../node_modules/@arcgis/core/rest/support/MultipartColorRamp.js
var m2;
var c2 = m2 = class extends p {
  constructor(o2) {
    super(o2), this.colorRamps = null, this.type = "multipart";
  }
  clone() {
    return new m2({
      colorRamps: a(this.colorRamps)
    });
  }
};
e([y({
  type: [a3],
  json: {
    write: true
  }
})], c2.prototype, "colorRamps", void 0), e([y({
  type: ["multipart"]
})], c2.prototype, "type", void 0), c2 = m2 = e([a2("esri.rest.support.MultipartColorRamp")], c2);
var a4 = c2;

// ../../../node_modules/@arcgis/core/rest/support/colorRamps.js
var m3 = {
  key: "type",
  base: p,
  typeMap: {
    algorithmic: a3,
    multipart: a4
  }
};
function p2(o2) {
  return o2?.type ? "algorithmic" === o2.type ? a3.fromJSON(o2) : "multipart" === o2.type ? a4.fromJSON(o2) : null : null;
}

export {
  a4 as a,
  m3 as m,
  p2 as p
};
//# sourceMappingURL=chunk-U74WRHVJ.js.map
