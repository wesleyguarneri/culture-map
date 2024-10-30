import {
  M
} from "./chunk-6V5NKLIC.js";
import "./chunk-CZQYBYHB.js";
import {
  i
} from "./chunk-Q5ZRUB2Y.js";
import "./chunk-2XI572KI.js";
import "./chunk-R4P4UBKU.js";
import "./chunk-62WUYJJN.js";
import "./chunk-AWJPQWYU.js";
import "./chunk-JNWMZ6EJ.js";
import "./chunk-VS26W5Y5.js";
import {
  h
} from "./chunk-YVOGHYE3.js";
import "./chunk-IBOZJLSO.js";
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
import "./chunk-7RMVJCDW.js";
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
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import {
  has
} from "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/ElevationSamplerWorker.js
var r = class {
  createIndex(t, n) {
    return __async(this, null, function* () {
      const r2 = new Array();
      if (!t.vertexAttributes?.position) return new h();
      const o2 = a(t), s2 = null != n ? yield n.invoke("createIndexThread", o2, {
        transferList: r2
      }) : this.createIndexThread(o2).result;
      return i2().fromJSON(s2);
    });
  }
  createIndexThread(e) {
    const t = i2();
    if (!e) return {
      result: t.toJSON()
    };
    const n = new Float64Array(e.position);
    return e.components ? s(t, n, e.components.map((e2) => new Uint32Array(e2))) : o(t, n);
  }
};
function o(e, t) {
  const n = new Array(t.length / 9);
  let r2 = 0;
  for (let o2 = 0; o2 < t.length; o2 += 9) n[r2++] = c(t, o2, o2 + 3, o2 + 6);
  return e.load(n), {
    result: e.toJSON()
  };
}
function s(e, t, n) {
  let r2 = 0;
  for (const a2 of n) r2 += a2.length / 3;
  const o2 = new Array(r2);
  let s2 = 0;
  for (const a2 of n) for (let e2 = 0; e2 < a2.length; e2 += 3) o2[s2++] = c(t, 3 * a2[e2], 3 * a2[e2 + 1], 3 * a2[e2 + 2]);
  return e.load(o2), {
    result: e.toJSON()
  };
}
function a(e) {
  const {
    vertexAttributes: {
      position: r2
    },
    vertexSpace: o2,
    spatialReference: s2,
    transform: a2
  } = e, i3 = M({
    vertexAttributes: {
      position: r2
    },
    vertexSpace: o2,
    spatialReference: s2,
    transform: a2
  }, new i(), {
    allowBufferReuse: true
  })?.position;
  return i3 ? !e.components || e.components.some((e2) => !e2.faces) ? {
    position: i3.buffer
  } : {
    position: i3.buffer,
    components: e.components.map((e2) => e2.faces)
  } : null;
}
function i2() {
  return new h(9, has("esri-csp-restrictions") ? (e) => e : [".minX", ".minY", ".maxX", ".maxY"]);
}
function c(e, t, n, r2) {
  return {
    minX: Math.min(e[t], e[n], e[r2]),
    maxX: Math.max(e[t], e[n], e[r2]),
    minY: Math.min(e[t + 1], e[n + 1], e[r2 + 1]),
    maxY: Math.max(e[t + 1], e[n + 1], e[r2 + 1]),
    p0: [e[t], e[t + 1], e[t + 2]],
    p1: [e[n], e[n + 1], e[n + 2]],
    p2: [e[r2], e[r2 + 1], e[r2 + 2]]
  };
}
export {
  r as default
};
//# sourceMappingURL=ElevationSamplerWorker-6I5POT4T.js.map
