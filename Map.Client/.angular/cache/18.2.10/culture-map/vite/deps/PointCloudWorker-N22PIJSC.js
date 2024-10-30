import {
  c,
  f as f2,
  i,
  u
} from "./chunk-C4K4FKYW.js";
import {
  n as n2,
  t as t2
} from "./chunk-DLRYNII2.js";
import "./chunk-VHN5TB5W.js";
import "./chunk-63QCTVYB.js";
import "./chunk-W5ERGD4Y.js";
import {
  I
} from "./chunk-7B5YPLFX.js";
import "./chunk-RDQF44TE.js";
import "./chunk-KKD7A2GN.js";
import {
  O as O2
} from "./chunk-ZWCV4HKG.js";
import "./chunk-N4KQPPPI.js";
import "./chunk-4OGGMTIH.js";
import {
  e
} from "./chunk-NQVBBKAN.js";
import "./chunk-4MMTPKY4.js";
import "./chunk-DY7FJHTG.js";
import "./chunk-KVKFHRJ3.js";
import "./chunk-VWML4J2J.js";
import "./chunk-JYODC3YQ.js";
import "./chunk-BQZBOYBD.js";
import "./chunk-TYQXPPSP.js";
import "./chunk-IMVP5ADD.js";
import "./chunk-H7WPOTQH.js";
import "./chunk-XTVPEVHA.js";
import "./chunk-K226GFDN.js";
import "./chunk-4ZZRP4MA.js";
import "./chunk-FPFZQCEQ.js";
import {
  n
} from "./chunk-OGZAGPIO.js";
import "./chunk-HJJIIYFF.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-3ZXOUEQG.js";
import {
  E
} from "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
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
import {
  O,
  t4 as t
} from "./chunk-DXLOWWK7.js";
import "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/PointCloudWorker.js
var c2 = class {
  transform(t3) {
    const e2 = this._transform(t3), o = [e2.points.buffer, e2.rgb.buffer];
    null != e2.pointIdFilterMap && o.push(e2.pointIdFilterMap.buffer);
    for (const a of e2.attributes) "buffer" in a.values && t(a.values.buffer) && a.values.buffer !== e2.rgb.buffer && o.push(a.values.buffer);
    return Promise.resolve({
      result: e2,
      transferList: o
    });
  }
  _transform(r) {
    const e2 = u(r.schema, r.geometryBuffer);
    let o = e2.length / 3, a = null;
    const i2 = new Array(), f3 = c(r.primaryAttributeData, e2, o);
    null != r.primaryAttributeData && f3 && i2.push({
      attributeInfo: r.primaryAttributeData.attributeInfo,
      values: f3
    });
    const s = c(r.modulationAttributeData, e2, o);
    null != r.modulationAttributeData && s && i2.push({
      attributeInfo: r.modulationAttributeData.attributeInfo,
      values: s
    });
    let c3 = i(r.rendererInfo, f3, s, o);
    if (r.filterInfo && r.filterInfo.length > 0 && null != r.filterAttributesData) {
      const f4 = r.filterAttributesData.filter(O).map((t3) => {
        const r2 = c(t3, e2, o), a2 = {
          attributeInfo: t3.attributeInfo,
          values: r2
        };
        return i2.push(a2), a2;
      });
      a = new Uint32Array(o), o = f2(e2, c3, a, r.filterInfo, f4);
    }
    for (const t3 of r.userAttributesData) {
      const r2 = c(t3, e2, o);
      i2.push({
        attributeInfo: t3.attributeInfo,
        values: r2
      });
    }
    3 * o < c3.length && (c3 = new Uint8Array(c3.buffer.slice(0, 3 * o))), I2(e2, o, r.elevationOffset);
    const A2 = h(e2, o, I.fromData(r.obbData), f.fromJSON(r.inSR), f.fromJSON(r.outSR));
    return {
      obbData: r.obbData,
      points: A2,
      rgb: c3,
      attributes: i2,
      pointIdFilterMap: a
    };
  }
};
function h(t3, r, o, n3, u2) {
  if (!n(t3, n3, 0, t3, u2, 0, r)) throw new Error("Can't reproject");
  const l = t2(o.center), m = n2(), b = n2(), p = t2(o.halfSize);
  O2(A, o.quaternion);
  const c3 = new Float32Array(3 * r);
  for (let e2 = 0; e2 < r; e2++) {
    let r2 = 3 * e2;
    m[0] = t3[r2] - l[0], m[1] = t3[r2 + 1] - l[1], m[2] = t3[r2 + 2] - l[2], E(b, m, A), p[0] = Math.max(p[0], Math.abs(b[0])), p[1] = Math.max(p[1], Math.abs(b[1])), p[2] = Math.max(p[2], Math.abs(b[2])), c3[r2++] = m[0], c3[r2++] = m[1], c3[r2] = m[2];
  }
  return o.halfSize = p, c3;
}
function I2(t3, r, e2) {
  if (0 !== e2) for (let o = 0; o < r; o++) t3[3 * o + 2] += e2;
}
var A = e();
function g() {
  return new c2();
}
export {
  g as default
};
//# sourceMappingURL=PointCloudWorker-N22PIJSC.js.map
