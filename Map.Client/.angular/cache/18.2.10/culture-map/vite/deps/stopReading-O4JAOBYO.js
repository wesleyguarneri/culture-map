import {
  f,
  i,
  s as s2
} from "./chunk-YA5CTHMT.js";
import {
  U
} from "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import "./chunk-DDYVXG4F.js";
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

// ../../../node_modules/@arcgis/core/rest/versionManagement/gdbVersion/stopReading.js
function e(e2, n, a, m) {
  return __async(this, null, function* () {
    if (!n) throw new s("stop-reading:missing-guid", "guid for version is missing");
    const u = f(e2), c = i(u.query, __spreadProps(__spreadValues({
      query: s2({
        sessionId: a,
        f: "json"
      })
    }, m), {
      method: "post"
    }));
    n.startsWith("{") && (n = n.slice(1, -1));
    const p = `${u.path}/versions/${n}/stopReading`, {
      data: d
    } = yield U(p, c);
    return d || {
      success: false
    };
  });
}
export {
  e as stopReading
};
//# sourceMappingURL=stopReading-O4JAOBYO.js.map
