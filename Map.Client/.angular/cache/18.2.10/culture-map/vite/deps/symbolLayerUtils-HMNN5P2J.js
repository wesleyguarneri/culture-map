import {
  e
} from "./chunk-PQ4T66BG.js";
import "./chunk-SWPHGZYB.js";
import {
  c
} from "./chunk-UF6JOUSJ.js";
import {
  F,
  i
} from "./chunk-J55F4AC2.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
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
  __async
} from "./chunk-JWIQHGQB.js";

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
      } = yield import("./objectResourceUtils-3477FVPT.js"), a3 = yield n2(o2, {
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
//# sourceMappingURL=symbolLayerUtils-HMNN5P2J.js.map
