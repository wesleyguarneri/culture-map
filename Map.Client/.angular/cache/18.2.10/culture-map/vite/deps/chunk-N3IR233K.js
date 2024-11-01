import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import {
  H,
  Y
} from "./chunk-JJS7PR2U.js";
import {
  i
} from "./chunk-V5C6HSAM.js";
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
  a3 as a,
  s3 as s
} from "./chunk-DDYVXG4F.js";
import {
  S
} from "./chunk-DXLOWWK7.js";
import {
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/geometry/HeightModelInfo.js
var d;
var p = i()({
  orthometric: "gravity-related-height",
  gravity_related_height: "gravity-related-height",
  ellipsoidal: "ellipsoidal"
});
var u = p.jsonValues.slice();
S(u, "orthometric");
var g = i()({
  meter: "meters",
  foot: "feet",
  "us-foot": "us-feet",
  "clarke-foot": "clarke-feet",
  "clarke-yard": "clarke-yards",
  "clarke-link": "clarke-links",
  "sears-yard": "sears-yards",
  "sears-foot": "sears-feet",
  "sears-chain": "sears-chains",
  "benoit-1895-b-chain": "benoit-1895-b-chains",
  "indian-yard": "indian-yards",
  "indian-1937-yard": "indian-1937-yards",
  "gold-coast-foot": "gold-coast-feet",
  "sears-1922-truncated-chain": "sears-1922-truncated-chains",
  "50-kilometers": "50-kilometers",
  "150-kilometers": "150-kilometers"
});
var m = d = class extends f {
  constructor(e2) {
    super(e2), this.heightModel = "gravity-related-height", this.heightUnit = "meters", this.vertCRS = null;
  }
  writeHeightModel(e2, t, r2) {
    return p.write(e2, t, r2);
  }
  readHeightModel(e2, t, r2) {
    const o2 = p.read(e2);
    return o2 || (r2?.messages && r2.messages.push(f2(e2, {
      context: r2
    })), null);
  }
  readHeightUnit(e2, t, r2) {
    const o2 = g.read(e2);
    return o2 || (r2?.messages && r2.messages.push(y2(e2, {
      context: r2
    })), null);
  }
  readHeightUnitService(e2, t, r2) {
    const o2 = H(e2) || g.read(e2);
    return o2 || (r2?.messages && r2.messages.push(y2(e2, {
      context: r2
    })), null);
  }
  readVertCRS(e2, t) {
    return t.vertCRS || t.ellipsoid || t.geoid;
  }
  clone() {
    return new d({
      heightModel: this.heightModel,
      heightUnit: this.heightUnit,
      vertCRS: this.vertCRS
    });
  }
  equals(e2) {
    return !!e2 && (this === e2 || this.heightModel === e2.heightModel && this.heightUnit === e2.heightUnit && this.vertCRS === e2.vertCRS);
  }
  static deriveUnitFromSR(e2, t) {
    const r2 = Y(t);
    return new d({
      heightModel: e2.heightModel,
      heightUnit: r2 ?? void 0,
      vertCRS: e2.vertCRS
    });
  }
  write(e2, t) {
    return t = __spreadValues({
      origin: "web-scene"
    }, t), super.write(e2, t);
  }
  static fromJSON(e2) {
    if (!e2) return null;
    const t = new d();
    return t.read(e2, {
      origin: "web-scene"
    }), t;
  }
};
function y2(e2, t) {
  return new s("height-unit:unsupported", `Height unit of value '${e2}' is not supported`, t);
}
function f2(e2, t) {
  return new s("height-model:unsupported", `Height model of value '${e2}' is not supported`, t);
}
e([y({
  type: p.apiValues,
  constructOnly: true,
  json: {
    origins: {
      "web-scene": {
        type: u,
        default: "ellipsoidal"
      }
    }
  }
})], m.prototype, "heightModel", void 0), e([r("web-scene", "heightModel")], m.prototype, "writeHeightModel", null), e([o(["web-scene", "service"], "heightModel")], m.prototype, "readHeightModel", null), e([y({
  type: g.apiValues,
  constructOnly: true,
  json: {
    origins: {
      "web-scene": {
        type: g.jsonValues,
        write: g.write
      }
    }
  }
})], m.prototype, "heightUnit", void 0), e([o("web-scene", "heightUnit")], m.prototype, "readHeightUnit", null), e([o("service", "heightUnit")], m.prototype, "readHeightUnitService", null), e([y({
  type: String,
  constructOnly: true,
  json: {
    origins: {
      "web-scene": {
        write: true
      }
    }
  }
})], m.prototype, "vertCRS", void 0), e([o("service", "vertCRS", ["vertCRS", "ellipsoid", "geoid"])], m.prototype, "readVertCRS", null), m = d = e([a("esri.geometry.HeightModelInfo")], m);
var v = m;

export {
  v
};
//# sourceMappingURL=chunk-N3IR233K.js.map
