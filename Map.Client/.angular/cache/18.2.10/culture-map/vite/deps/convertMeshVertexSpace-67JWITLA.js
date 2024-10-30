import {
  l
} from "./chunk-ZNDAVKXT.js";
import {
  M
} from "./chunk-6V5NKLIC.js";
import "./chunk-CZQYBYHB.js";
import "./chunk-Q5ZRUB2Y.js";
import "./chunk-2XI572KI.js";
import "./chunk-R4P4UBKU.js";
import "./chunk-62WUYJJN.js";
import "./chunk-AWJPQWYU.js";
import "./chunk-JNWMZ6EJ.js";
import "./chunk-VS26W5Y5.js";
import "./chunk-Q4KYZS3X.js";
import "./chunk-KVKFHRJ3.js";
import "./chunk-VWML4J2J.js";
import "./chunk-JYODC3YQ.js";
import "./chunk-BQZBOYBD.js";
import "./chunk-TYQXPPSP.js";
import "./chunk-CIW3KHOW.js";
import "./chunk-H7WPOTQH.js";
import "./chunk-DUTZNK67.js";
import "./chunk-IN6BQCWS.js";
import "./chunk-XTVPEVHA.js";
import "./chunk-4ZZRP4MA.js";
import "./chunk-OGZAGPIO.js";
import "./chunk-HJJIIYFF.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import "./chunk-BXQGM56A.js";
import "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import {
  s as s2
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  a,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/convertMeshVertexSpace.js
function i(i2, n, c) {
  return __async(this, null, function* () {
    yield Promise.resolve(), s2(c);
    const m = M(i2, n);
    if (!m) throw new s("meshUtils:convertVertexSpace()", "Failed to convert to provided vertex space due to projection errors");
    const p = i2.cloneAndModifyVertexAttributes(new l(__spreadProps(__spreadValues({}, m), {
      uv: a(i2.vertexAttributes.uv),
      color: a(i2.vertexAttributes.color)
    })), n);
    return p.transform = null, p;
  });
}
export {
  i as convertMeshVertexSpace
};
//# sourceMappingURL=convertMeshVertexSpace-67JWITLA.js.map
