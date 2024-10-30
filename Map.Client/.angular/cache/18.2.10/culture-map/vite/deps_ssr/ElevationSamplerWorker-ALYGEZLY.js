import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  M
} from "./chunk-MIIC4I55.js";
import "./chunk-B63XAMYJ.js";
import {
  i
} from "./chunk-THUD7LGO.js";
import "./chunk-A45QR3VT.js";
import "./chunk-MYCEJRPQ.js";
import "./chunk-YSJVVDDH.js";
import "./chunk-53Z6KOJR.js";
import "./chunk-DLWZ3HVT.js";
import "./chunk-B76NC7GX.js";
import {
  h
} from "./chunk-LL33G4DK.js";
import "./chunk-CILHMGNK.js";
import "./chunk-GK5M6FUR.js";
import "./chunk-MRP3FBLV.js";
import "./chunk-Y7SJWJAL.js";
import "./chunk-A2FDYA6M.js";
import "./chunk-YGAXDKHF.js";
import "./chunk-4TOSJLKR.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-K43CZ3M5.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-KOI252FF.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-66YQWHHE.js";
import "./chunk-QGBMZIP4.js";
import "./chunk-AOEBZVTA.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import "./chunk-G73HQZEL.js";
import "./chunk-PH6NPTP7.js";
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
import {
  has
} from "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=ElevationSamplerWorker-ALYGEZLY.js.map
