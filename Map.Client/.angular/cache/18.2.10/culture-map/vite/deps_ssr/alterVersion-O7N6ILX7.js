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

// ../../../node_modules/@arcgis/core/rest/versionManagement/gdbVersion/alterVersion.js
var n = /* @__PURE__ */ new Map();
function a(a2, m, c, u) {
  return __async(this, null, function* () {
    n.has(a2) || (yield r(n, a2));
    const p = n.get(a2);
    if ((p?.serverVersion ?? 0) <= 11.1) throw new s("alterVersion:enterprise-version", "versioning API requires ArcGIS Enterprise version 11.2 or higher");
    if (!m) throw new s("alterVersion:missing-guid", "guid for version is missing");
    const f2 = f(a2), h = c.toJSON(), g = i(f2.query, __spreadProps(__spreadValues({
      query: s2(__spreadProps(__spreadValues({}, h), {
        f: "json"
      }))
    }, u), {
      authMode: "immediate",
      method: "post"
    }));
    m.startsWith("{") && (m = m.slice(1, -1));
    const v = `${f2.path}/versions/${m}/alter`, {
      data: w
    } = yield U(v, g);
    return !!w && w.success;
  });
}
export {
  a as alterVersion,
  n as serverVersionCacheMap
};
//# sourceMappingURL=alterVersion-O7N6ILX7.js.map
