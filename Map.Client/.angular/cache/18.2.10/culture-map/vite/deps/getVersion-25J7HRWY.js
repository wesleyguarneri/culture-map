import {
  f,
  i,
  s
} from "./chunk-YA5CTHMT.js";
import {
  U,
  V
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
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=getVersion-25J7HRWY.js.map
