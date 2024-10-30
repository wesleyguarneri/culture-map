import {
  f,
  i,
  s
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
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/rest/versionManagement/getVersionInfos.js
function s2(s3, t, i2) {
  return __async(this, null, function* () {
    const a = f(s3), u = t.toJSON(), m = i(a.query, __spreadValues({
      query: s(__spreadProps(__spreadValues({}, u), {
        f: "json"
      }))
    }, i2)), f2 = `${a.path}/versionInfos`, {
      data: p
    } = yield U(f2, m);
    return p.versions.map((r) => {
      const _a = r, {
        versionName: e,
        versionGuid: n
      } = _a, o = __objRest(_a, [
        "versionName",
        "versionGuid"
      ]);
      return __spreadProps(__spreadValues({}, o), {
        versionIdentifier: {
          name: e,
          guid: n
        }
      });
    });
  });
}
export {
  s2 as getVersionInfos
};
//# sourceMappingURL=getVersionInfos-PQRYLZ4X.js.map
