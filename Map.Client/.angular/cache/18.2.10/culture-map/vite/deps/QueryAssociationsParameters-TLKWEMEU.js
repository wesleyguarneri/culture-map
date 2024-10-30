import {
  p
} from "./chunk-7NERSLA5.js";
import {
  i
} from "./chunk-2ACBZNFZ.js";
import "./chunk-V5C6HSAM.js";
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

// ../../../node_modules/@arcgis/core/rest/networks/support/QueryAssociationsParameters.js
var m;
var n = m = class extends f {
  static from(e2) {
    return g(m, e2);
  }
  constructor(e2) {
    super(e2), this.returnDeletes = false, this.elements = [], this.types = [], this.gdbVersion = null, this.moment = null;
  }
};
e([y({
  type: Boolean,
  json: {
    write: true
  }
})], n.prototype, "returnDeletes", void 0), e([y({
  type: [p],
  json: {
    write: true
  }
})], n.prototype, "elements", void 0), e([y({
  type: [i.apiValues],
  json: {
    type: i.jsonValues,
    read: i.read,
    write: i.write
  }
})], n.prototype, "types", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], n.prototype, "gdbVersion", void 0), e([y({
  type: Date,
  json: {
    type: Number,
    write: {
      writer: (e2, t) => {
        t.moment = e2?.getTime();
      }
    }
  }
})], n.prototype, "moment", void 0), n = m = e([a("esri.rest.networks.support.QueryAssociationsParameters")], n);
var a2 = n;
export {
  a2 as default
};
//# sourceMappingURL=QueryAssociationsParameters-TLKWEMEU.js.map
