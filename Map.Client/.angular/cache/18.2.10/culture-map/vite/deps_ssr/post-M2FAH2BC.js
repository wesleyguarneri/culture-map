import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  r
} from "./chunk-JBQRFOAL.js";
import {
  f as f2,
  i,
  s as s2
} from "./chunk-FDI2X6GO.js";
import {
  U
} from "./chunk-XLEC46FY.js";
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
  a3 as a
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=post-M2FAH2BC.js.map
