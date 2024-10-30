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

// ../../../node_modules/@arcgis/core/rest/versionManagement/gdbVersion/support/DeleteForwardEditsParameters.js
var p;
var i = p = class extends f {
  static from(r) {
    return g(p, r);
  }
  constructor(r) {
    super(r), this.sessionId = void 0, this.moment = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], i.prototype, "sessionId", void 0), e([y({
  type: Date,
  json: {
    type: Number,
    write: {
      writer: (r, o) => {
        o.moment = r ? r.getTime() : null;
      }
    }
  }
})], i.prototype, "moment", void 0), i = p = e([a("esri.rest.versionManagement.gdbVersion.support.DeleteForwardEditsParameters")], i);
var m = i;
export {
  m as default
};
//# sourceMappingURL=DeleteForwardEditsParameters-C4OZBO6U.js.map
