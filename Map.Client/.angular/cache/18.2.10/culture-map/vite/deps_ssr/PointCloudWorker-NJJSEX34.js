import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c,
  f as f2,
  i,
  u
} from "./chunk-I75KW3AP.js";
import {
  n as n2,
  t as t2
} from "./chunk-YEB36ZCF.js";
import "./chunk-MTXTLDZX.js";
import "./chunk-WVSTX2NW.js";
import "./chunk-MKFGPBQ3.js";
import {
  I
} from "./chunk-AVCKPV77.js";
import "./chunk-MNBTLVRM.js";
import "./chunk-GNCXYHNE.js";
import {
  O as O2
} from "./chunk-CSK4VZQ7.js";
import "./chunk-2TNGEJGS.js";
import "./chunk-OYGNGIHQ.js";
import {
  e
} from "./chunk-GSG4T2KM.js";
import "./chunk-D7C26LZP.js";
import "./chunk-BZHHBBFX.js";
import "./chunk-MRP3FBLV.js";
import "./chunk-Y7SJWJAL.js";
import "./chunk-A2FDYA6M.js";
import "./chunk-YGAXDKHF.js";
import "./chunk-4TOSJLKR.js";
import "./chunk-KUBMHTYA.js";
import "./chunk-VSQZQLTQ.js";
import "./chunk-K43CZ3M5.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-KOI252FF.js";
import "./chunk-RLGDH6IY.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import "./chunk-BCCDYCTQ.js";
import {
  n
} from "./chunk-QGBMZIP4.js";
import "./chunk-AOEBZVTA.js";
import "./chunk-2OZSYJDX.js";
import {
  E
} from "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
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
import {
  O,
  t4 as t
} from "./chunk-2ZJE6ZFX.js";
import "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=PointCloudWorker-NJJSEX34.js.map
