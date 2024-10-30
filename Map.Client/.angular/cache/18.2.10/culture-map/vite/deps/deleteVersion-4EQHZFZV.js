import {
  r
} from "./chunk-3YX3MWZT.js";
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
//# sourceMappingURL=deleteVersion-4EQHZFZV.js.map
