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

// ../../../node_modules/@arcgis/core/rest/versionManagement/gdbVersion/support/PostResult.js
var t = class extends f {
  constructor(o) {
    super(o), this.moment = null, this.success = false;
  }
};
e([y({
  type: Date,
  json: {
    type: Number,
    write: {
      writer: (o, r2) => {
        r2.moment = o ? o.getTime() : null;
      }
    }
  }
})], t.prototype, "moment", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], t.prototype, "success", void 0), t = e([a("esri.rest.versionManagement.gdbVersion.support.PostResult")], t);
var p = t;

// ../../../node_modules/@arcgis/core/rest/versionManagement/gdbVersion/post.js
var p2 = /* @__PURE__ */ new Map();
function m(m2, f3, a2, u) {
  return __async(this, null, function* () {
    p2.has(m2) || (yield r(p2, m2));
    const c = p2.get(m2);
    if ((c?.serverVersion ?? 0) <= 11.1) throw new s("post:enterprise-version", "versioning API requires ArcGIS Enterprise version 11.2 or higher");
    if (!f3) throw new s("post:missing-guid", "guid for version is missing");
    const w = f2(m2), g = a2.toJSON();
    a2.rows && (g.rows = JSON.stringify(a2.rows));
    const h = i(w.query, __spreadProps(__spreadValues({
      query: s2(__spreadProps(__spreadValues({}, g), {
        f: "json"
      }))
    }, u), {
      method: "post"
    }));
    f3.startsWith("{") && (f3 = f3.slice(1, -1));
    const v = `${w.path}/versions/${f3}/post`, {
      data: j
    } = yield U(v, h);
    return p.fromJSON(j);
  });
}
export {
  m as post,
  p2 as serverVersionCacheMap
};
//# sourceMappingURL=post-NGWI3S6F.js.map
