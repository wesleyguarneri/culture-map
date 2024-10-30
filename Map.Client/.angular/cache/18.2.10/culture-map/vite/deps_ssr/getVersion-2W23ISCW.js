import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f,
  i,
  s
} from "./chunk-FDI2X6GO.js";
import {
  U,
  V
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
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/rest/versionManagement/getVersion.js
function o(o2, n, a) {
  return __async(this, null, function* () {
    const u = f(o2), m = i(u.query, __spreadValues({
      query: s({
        f: "json"
      })
    }, a));
    n.startsWith("{") && (n = n.slice(1, -1));
    const c = V(u.path, "versions", n), {
      data: f2
    } = yield U(c, m), _a = f2, {
      versionName: p,
      versionGuid: d
    } = _a, j = __objRest(_a, [
      "versionName",
      "versionGuid"
    ]);
    return __spreadProps(__spreadValues({}, j), {
      versionIdentifier: {
        name: p,
        guid: d
      }
    });
  });
}
export {
  o as getVersion
};
//# sourceMappingURL=getVersion-2W23ISCW.js.map
