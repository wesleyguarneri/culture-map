import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i as i2
} from "./chunk-BNB2X2FJ.js";
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
//# sourceMappingURL=validateNetworkTopology-KFDTOVNK.js.map
