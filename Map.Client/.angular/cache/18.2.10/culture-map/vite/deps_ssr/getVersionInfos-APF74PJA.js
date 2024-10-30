import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f,
  i,
  s
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
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=getVersionInfos-APF74PJA.js.map
