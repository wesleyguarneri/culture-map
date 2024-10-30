import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c
} from "./chunk-BQY5LM3B.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import {
  f as f2
} from "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import "./chunk-66YQWHHE.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import {
  a3 as a,
  g2 as g
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=ValidateNetworkTopologyParameters-FPOK6GYA.js.map
