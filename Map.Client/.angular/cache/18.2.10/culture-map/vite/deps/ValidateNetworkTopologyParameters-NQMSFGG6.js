import {
  c
} from "./chunk-2ACBZNFZ.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import {
  f as f2
} from "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import {
  a3 as a,
  g2 as g
} from "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/rest/networks/support/ValidateNetworkTopologyParameters.js
var l;
var c2 = l = class extends f {
  static from(t) {
    return g(l, t);
  }
  constructor(t) {
    super(t), this.gdbVersion = null, this.sessionID = null, this.validationType = null, this.validateArea = null, this.validationSet = null, this.outSpatialReference = null;
  }
  writeOutSR(t, o, e2) {
    if (null != t) {
      const {
        wkid: r2
      } = t;
      o[e2] = JSON.stringify({
        wkid: r2
      });
    }
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], c2.prototype, "gdbVersion", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], c2.prototype, "sessionID", void 0), e([y({
  type: c.apiValues,
  json: {
    type: c.jsonValues,
    read: c.read,
    write: c.write
  }
})], c2.prototype, "validationType", void 0), e([y({
  type: w,
  json: {
    write: true
  }
})], c2.prototype, "validateArea", void 0), e([y({
  type: [Object],
  json: {
    write: true
  }
})], c2.prototype, "validationSet", void 0), e([y({
  type: f2,
  json: {
    write: {
      allowNull: true,
      target: "outSR"
    }
  }
})], c2.prototype, "outSpatialReference", void 0), e([r("outSpatialReference")], c2.prototype, "writeOutSR", null), c2 = l = e([a("esri.rest.networks.support.ValidateNetworkTopologyParameters")], c2);
var u = c2;
export {
  u as default
};
//# sourceMappingURL=ValidateNetworkTopologyParameters-NQMSFGG6.js.map
