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
//# sourceMappingURL=reconcile-EM3ULLD7.js.map
