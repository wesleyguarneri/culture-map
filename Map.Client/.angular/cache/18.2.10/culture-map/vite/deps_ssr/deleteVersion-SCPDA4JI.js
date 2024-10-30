import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  r
} from "./chunk-JBQRFOAL.js";
import {
  f,
  i,
  s as s2
} from "./chunk-FDI2X6GO.js";
import {
  U
} from "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import "./chunk-NUICEVIH.js";
import "./chunk-NXK752PZ.js";
import "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import "./chunk-UDMPWVPF.js";
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

// ../../../node_modules/@arcgis/core/rest/versionManagement/deleteVersion.js
var n = /* @__PURE__ */ new Map();
function a(a2, m, p) {
  return __async(this, null, function* () {
    n.has(a2) || (yield r(n, a2));
    const c = n.get(a2);
    if ((c?.serverVersion ?? 0) <= 11.1) throw new s("deleteVersion:enterprise-version", "versioning API requires ArcGIS Enterprise version 11.2 or higher");
    const u = f(a2), d = m.toJSON(), f2 = i(u.query, __spreadProps(__spreadValues({
      query: s2(__spreadProps(__spreadValues({}, d), {
        f: "json"
      }))
    }, p), {
      authMode: "immediate",
      method: "post"
    })), h = `${u.path}/delete`, {
      data: j
    } = yield U(h, f2);
    return j.success;
  });
}
export {
  a as deleteVersion,
  n as serverVersionCacheMap
};
//# sourceMappingURL=deleteVersion-SCPDA4JI.js.map
