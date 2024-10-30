import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e
} from "./chunk-BKSTWG4S.js";
import "./chunk-FSG7HOZQ.js";
import {
  c
} from "./chunk-BBUQOCRA.js";
import {
  F,
  i
} from "./chunk-VOOO6FU5.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-66YQWHHE.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
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
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/symbols/support/symbolLayerUtils.js
var c2 = a();
function a() {
  return new e(50);
}
function u() {
  c2 = a();
}
function l(e2, o) {
  return __async(this, null, function* () {
    if (e2.resource?.href) return m(e2.resource.href).then((e3) => [e3.width, e3.height]);
    if (e2.resource?.primitive) return null != o ? [o, o] : [256, 256];
    throw new s("symbol3d:invalid-symbol-layer", "symbol layers of type Icon must have either an href or a primitive resource");
  });
}
function m(r) {
  return U(r, {
    responseType: "image"
  }).then((e2) => e2.data);
}
function f(e2, o = null) {
  return __async(this, null, function* () {
    if (!e2.isPrimitive) {
      const o2 = e2.resource?.href;
      if (!o2) throw new s("symbol:invalid-resource", "The symbol does not have a valid resource");
      const s2 = c2.get(o2);
      if (void 0 !== s2) return s2;
      const {
        fetch: n2
      } = yield import("./objectResourceUtils-GVUNT4D7.js"), a3 = yield n2(o2, {
        disableTextures: true
      }), u2 = F(a3.referenceBoundingBox, n());
      return c2.put(o2, u2), u2;
    }
    if (!e2.resource?.primitive) throw new s("symbol:invalid-resource", "The symbol does not have a valid resource");
    const a2 = i(c(e2.resource.primitive));
    if (null != o) for (let r = 0; r < a2.length; r++) a2[r] *= o;
    return F(a2, n());
  });
}
export {
  u as clearBoundingBoxCache,
  l as computeIconLayerResourceSize,
  f as computeObjectLayerResourceSize
};
//# sourceMappingURL=symbolLayerUtils-BD24DU3W.js.map
