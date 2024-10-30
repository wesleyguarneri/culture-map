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

// ../../../node_modules/@arcgis/core/rest/versionManagement/createVersion.js
function i2(i3, n, s2) {
  return __async(this, null, function* () {
    const a = f(i3), m = n.toJSON(), u = i(a.query, __spreadProps(__spreadValues({
      query: s(__spreadProps(__spreadValues({}, m), {
        f: "json"
      }))
    }, s2), {
      authMode: "immediate",
      method: "post"
    })), d = `${a.path}/create`, {
      data: f2
    } = yield U(d, u), _a = f2.versionInfo, {
      versionName: p,
      versionGuid: c
    } = _a, v = __objRest(_a, [
      "versionName",
      "versionGuid"
    ]);
    return __spreadProps(__spreadValues({}, v), {
      versionIdentifier: {
        name: p,
        guid: c
      }
    });
  });
}
export {
  i2 as createVersion
};
//# sourceMappingURL=createVersion-57ETTNGT.js.map
