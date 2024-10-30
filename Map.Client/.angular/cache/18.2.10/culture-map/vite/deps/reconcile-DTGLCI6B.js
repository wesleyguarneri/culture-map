import {
  r
} from "./chunk-3YX3MWZT.js";
import {
  f as f2,
  i,
  s as s2
} from "./chunk-YA5CTHMT.js";
import {
  U
} from "./chunk-SYATLP3H.js";
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
  a3 as a
} from "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/rest/versionManagement/gdbVersion/support/ReconcileResult.js
var r2 = class extends f {
  constructor(o) {
    super(o), this.hasConflicts = false, this.moment = null, this.didPost = false, this.success = false;
  }
};
e([y({
  type: Boolean,
  json: {
    write: true
  }
})], r2.prototype, "hasConflicts", void 0), e([y({
  type: Date,
  json: {
    type: Number,
    write: {
      writer: (o, t) => {
        t.moment = o ? o.getTime() : null;
      }
    }
  }
})], r2.prototype, "moment", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], r2.prototype, "didPost", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], r2.prototype, "success", void 0), r2 = e([a("esri.rest.versionManagement.gdbVersion.support.ReconcileResult")], r2);
var p = r2;

// ../../../node_modules/@arcgis/core/rest/versionManagement/gdbVersion/reconcile.js
var c = /* @__PURE__ */ new Map();
function m(m2, p2, a2, f3) {
  return __async(this, null, function* () {
    c.has(m2) || (yield r(c, m2));
    const u = c.get(m2);
    if ((u?.serverVersion ?? 0) <= 11.1) throw new s("reconcile:enterprise-version", "versioning API requires ArcGIS Enterprise version 11.2 or higher");
    if (!p2) throw new s("reconcile:missing-guid", "guid for version is missing");
    const h = f2(m2), l = a2.toJSON(), g = i(h.query, __spreadProps(__spreadValues({
      query: s2(__spreadProps(__spreadValues({}, l), {
        f: "json"
      }))
    }, f3), {
      method: "post"
    }));
    p2.startsWith("{") && (p2 = p2.slice(1, -1));
    const v = `${h.path}/versions/${p2}/reconcile`, {
      data: w
    } = yield U(v, g);
    return p.fromJSON(w);
  });
}
export {
  m as reconcile,
  c as serverVersionCacheMap
};
//# sourceMappingURL=reconcile-DTGLCI6B.js.map
