import { createRequire } from 'module';const require = createRequire(import.meta.url);
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

// ../../../node_modules/@arcgis/core/rest/versionManagement/gdbVersion/startReading.js
function e(e2, n, a, m) {
  return __async(this, null, function* () {
    if (!n) throw new s("start-reading:missing-guid", "guid for version is missing");
    const u = f(e2), c = i(u.query, __spreadProps(__spreadValues({
      query: s2({
        sessionId: a,
        f: "json"
      })
    }, m), {
      method: "post"
    }));
    n.startsWith("{") && (n = n.slice(1, -1));
    const d = `${u.path}/versions/${n}/startReading`, {
      data: f2
    } = yield U(d, c);
    return f2 || {
      success: false
    };
  });
}
export {
  e as startReading
};
//# sourceMappingURL=startReading-REQOEBYM.js.map
