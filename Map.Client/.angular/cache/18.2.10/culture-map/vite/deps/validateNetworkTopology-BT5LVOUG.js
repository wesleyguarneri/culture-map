import {
  i as i2
} from "./chunk-PQKIJHUT.js";
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

// ../../../node_modules/@arcgis/core/rest/networks/validateNetworkTopology.js
function a(o, a2, n2) {
  return __async(this, null, function* () {
    const d = f(o), l = a2.toJSON();
    a2.validationSet && (l.validationSet = JSON.stringify(a2.validationSet));
    const u = __spreadProps(__spreadValues({}, l), {
      returnEdits: true,
      f: "json"
    }), p = s2(__spreadValues(__spreadValues({}, d.query), u)), m = i(p, __spreadProps(__spreadValues({}, n2), {
      method: "post"
    })), v = `${d.path}/validateNetworkTopology`, {
      data: y
    } = yield U(v, m), c = i2.fromJSON(y);
    return c.serviceEdits = c.serviceEdits?.map((t) => ({
      layerId: t.id,
      editedFeatures: t.editedFeatures
    })) ?? [], c;
  });
}
function n(s3, a2, n2) {
  return __async(this, null, function* () {
    if (!a2.gdbVersion) throw new s("submit-validate-network-topology-job:missing-gdb-version", "version is missing");
    const d = f(s3), l = a2.toJSON();
    a2.validationSet && (l.validationSet = JSON.stringify(a2.validationSet));
    const u = i(d.query, __spreadProps(__spreadValues({
      query: s2(__spreadProps(__spreadValues({}, l), {
        returnEdits: true,
        async: true,
        f: "json"
      }))
    }, n2), {
      method: "post"
    })), p = `${d.path}/validateNetworkTopology`, {
      data: m
    } = yield U(p, u);
    return m ? m.statusUrl : null;
  });
}
export {
  n as submitValidateNetworkTopologyJob,
  a as validateNetworkTopology
};
//# sourceMappingURL=validateNetworkTopology-BT5LVOUG.js.map
