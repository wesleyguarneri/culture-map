import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  $,
  H,
  It,
  K,
  U,
  at,
  ht,
  x as x2
} from "./chunk-X5QZGB37.js";
import {
  R
} from "./chunk-T5C2TZNO.js";
import {
  e
} from "./chunk-JSWVKNBA.js";
import {
  t as t2
} from "./chunk-2BOKEEZV.js";
import {
  J,
  N as N2,
  O as O2
} from "./chunk-LM3JDV4W.js";
import {
  f,
  m,
  p,
  s as s2,
  y as y2
} from "./chunk-4DSGTDZJ.js";
import {
  l2 as l
} from "./chunk-MRPCXIVS.js";
import {
  Z,
  o2 as o,
  r,
  t
} from "./chunk-RNF7VOCU.js";
import {
  M,
  x,
  y
} from "./chunk-TIRJMGGG.js";
import {
  A,
  G,
  N,
  X,
  g2 as g,
  w
} from "./chunk-6SSA7P3A.js";
import {
  n
} from "./chunk-Y2HYKTTT.js";
import {
  L
} from "./chunk-AIZ3T7E3.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  O
} from "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/graphics/data/projectionSupport.js
var c = [0, 0];
function h(s4, t5) {
  if (!t5) return null;
  if ("x" in t5) {
    const e4 = {
      x: 0,
      y: 0
    };
    return [e4.x, e4.y] = s4(t5.x, t5.y, c), null != t5.z && (e4.z = t5.z), null != t5.m && (e4.m = t5.m), e4;
  }
  if ("xmin" in t5) {
    const e4 = {
      xmin: 0,
      ymin: 0,
      xmax: 0,
      ymax: 0
    };
    return [e4.xmin, e4.ymin] = s4(t5.xmin, t5.ymin, c), [e4.xmax, e4.ymax] = s4(t5.xmax, t5.ymax, c), t5.hasZ && (e4.zmin = t5.zmin, e4.zmax = t5.zmax, e4.hasZ = true), t5.hasM && (e4.mmin = t5.mmin, e4.mmax = t5.mmax, e4.hasM = true), e4;
  }
  return "rings" in t5 ? {
    rings: l2(t5.rings, s4),
    hasM: t5.hasM,
    hasZ: t5.hasZ
  } : "paths" in t5 ? {
    paths: l2(t5.paths, s4),
    hasM: t5.hasM,
    hasZ: t5.hasZ
  } : "points" in t5 ? {
    points: f2(t5.points, s4),
    hasM: t5.hasM,
    hasZ: t5.hasZ
  } : null;
}
function l2(s4, t5) {
  const e4 = [];
  for (const n4 of s4) e4.push(f2(n4, t5));
  return e4;
}
function f2(s4, t5) {
  const e4 = [];
  for (const n4 of s4) {
    const s5 = t5(n4[0], n4[1], [0, 0]);
    e4.push(s5), n4.length > 2 && s5.push(n4[2]), n4.length > 3 && s5.push(n4[3]);
  }
  return e4;
}
function x3(t5, n4) {
  return __async(this, null, function* () {
    if (!t5 || !n4) return;
    const r3 = Array.isArray(t5) ? t5.map((s4) => null != s4.geometry ? s4.geometry.spatialReference : null).filter(O) : [t5];
    yield N2(r3.map((s4) => ({
      source: s4,
      dest: n4
    })));
  });
}
var y3 = h.bind(null, M);
var g2 = h.bind(null, y);
function j(s4, t5, e4, m3) {
  if (!s4) return s4;
  if (e4 || (e4 = t5, t5 = s4.spatialReference), !N(t5) || !N(e4) || G(t5, e4)) return s4;
  if (x(t5, e4)) {
    const t6 = w(e4) ? y3(s4) : g2(s4);
    return t6.spatialReference = e4, t6;
  }
  return O2(t2, [s4], t5, e4, null, m3)[0];
}
var _ = class {
  constructor() {
    this._jobs = [], this._timer = null, this._process = this._process.bind(this);
  }
  push(s4, e4, n4, r3) {
    return __async(this, null, function* () {
      if (!s4?.length || !e4 || !n4 || G(e4, n4)) return s4;
      const i2 = {
        geometries: s4,
        inSpatialReference: e4,
        outSpatialReference: n4,
        geographicTransformation: r3,
        resolve: L()
      };
      return this._jobs.push(i2), this._timer ??= setTimeout(this._process, 10), i2.resolve.promise;
    });
  }
  _process() {
    this._timer = null;
    const s4 = this._jobs.shift();
    if (!s4) return;
    const {
      geometries: t5,
      inSpatialReference: e4,
      outSpatialReference: i2,
      resolve: o3,
      geographicTransformation: m3
    } = s4;
    x(e4, i2) ? w(i2) ? o3(t5.map(y3)) : o3(t5.map(g2)) : o3(O2(t2, t5, e4, i2, m3, null)), this._jobs.length > 0 && (this._timer = setTimeout(this._process, 10));
  }
};
var M2 = new _();
function b(s4, t5, e4, n4) {
  return M2.push(s4, t5, e4, n4);
}

// ../../../node_modules/@arcgis/core/layers/graphics/data/geometryUtils.js
var u = new e();
var f3 = new e();
var m2 = new e();
var c2 = {
  esriGeometryPoint: x2,
  esriGeometryPolyline: $,
  esriGeometryPolygon: H,
  esriGeometryMultipoint: U
};
function y4(r3, t5, o3, i2 = r3.hasZ, s4 = r3.hasM) {
  if (null == t5) return null;
  const l4 = r3.hasZ && i2, u3 = r3.hasM && s4;
  if (o3) {
    const f6 = at(m2, t5, r3.hasZ, r3.hasM, "esriGeometryPoint", o3, i2, s4);
    return x2(f6, l4, u3);
  }
  return x2(t5, l4, u3);
}
function a(e4, o3, i2, s4, l4, y5, a2 = o3, h5 = i2) {
  const p4 = o3 && a2, G5 = i2 && h5, g5 = null != s4 ? "coords" in s4 ? s4 : s4.geometry : null;
  if (null == g5) return null;
  if (l4) {
    let t5 = ht(f3, g5, o3, i2, e4, l4, a2, h5);
    return y5 && (t5 = at(m2, t5, p4, G5, e4, y5)), c2[e4]?.(t5, p4, G5) ?? null;
  }
  if (y5) {
    const r3 = at(m2, g5, o3, i2, e4, y5, a2, h5);
    return c2[e4]?.(r3, p4, G5) ?? null;
  }
  return It(u, g5, o3, i2, a2, h5), c2[e4]?.(u, p4, G5) ?? null;
}
function h2(n4) {
  return n4 && p2 in n4 ? JSON.parse(JSON.stringify(n4, G2)) : n4;
}
var p2 = "_geVersion";
var G2 = (n4, e4) => n4 !== p2 ? e4 : void 0;

// ../../../node_modules/@arcgis/core/layers/graphics/data/queryUtils.js
var R2 = new n({
  esriSRUnit_Meter: "meters",
  esriSRUnit_Kilometer: "kilometers",
  esriSRUnit_Foot: "feet",
  esriSRUnit_StatuteMile: "miles",
  esriSRUnit_NauticalMile: "nautical-miles",
  esriSRUnit_USNauticalMile: "us-nautical-miles"
});
var g3 = Object.freeze({});
function S(e4, t5, i2) {
  return __async(this, null, function* () {
    const {
      outFields: r3,
      orderByFields: n4,
      groupByFieldsForStatistics: o3,
      outStatistics: s4
    } = e4;
    if (r3) for (let a2 = 0; a2 < r3.length; a2++) r3[a2] = r3[a2].trim();
    if (n4) for (let a2 = 0; a2 < n4.length; a2++) n4[a2] = n4[a2].trim();
    if (o3) for (let a2 = 0; a2 < o3.length; a2++) o3[a2] = o3[a2].trim();
    if (s4) for (let a2 = 0; a2 < s4.length; a2++) s4[a2].onStatisticField && (s4[a2].onStatisticField = s4[a2].onStatisticField.trim());
    return e4.geometry && !e4.outSR && (e4.outSR = e4.geometry.spatialReference), j2(e4, t5, i2);
  });
}
function j2(e4, t5, i2) {
  return __async(this, null, function* () {
    if (!e4) return null;
    let {
      where: o3
    } = e4;
    if (e4.where = o3 = o3?.trim(), (!o3 || /^1 *= *1$/.test(o3) || t5 && t5 === o3) && (e4.where = null), !e4.geometry) return e4;
    let s4 = yield d(e4);
    if (e4.distance = 0, e4.units = null, "esriSpatialRelEnvelopeIntersects" === e4.spatialRel) {
      const {
        spatialReference: t6
      } = e4.geometry;
      s4 = l(s4), s4.spatialReference = t6;
    }
    if (s4) {
      yield x3(s4.spatialReference, i2), s4 = x4(s4, i2);
      const t6 = (yield R(y2(s4)))[0];
      if (null == t6) throw g3;
      const r3 = "quantizationParameters" in e4 && e4.quantizationParameters?.tolerance || "maxAllowableOffset" in e4 && e4.maxAllowableOffset || 0, o4 = r3 && w2(s4, i2) ? {
        densificationStep: 8 * r3
      } : void 0, a2 = t6.toJSON(), m3 = j(a2, a2.spatialReference, i2, o4);
      if (!m3) throw g3;
      m3.spatialReference = i2, e4.geometry = m3;
    }
    return e4;
  });
}
function w2(e4, t5) {
  if (!e4) return false;
  const r3 = e4.spatialReference;
  return (m(e4) || f(e4) || s2(e4)) && !G(r3, t5) && !J(r3, t5);
}
function x4(e4, t5) {
  const i2 = e4.spatialReference;
  return w2(e4, t5) && m(e4) ? {
    spatialReference: i2,
    rings: [[[e4.xmin, e4.ymin], [e4.xmin, e4.ymax], [e4.xmax, e4.ymax], [e4.xmax, e4.ymin], [e4.xmin, e4.ymin]]]
  } : e4;
}
function d(e4) {
  return __async(this, null, function* () {
    const {
      distance: i2,
      units: r3
    } = e4, n4 = e4.geometry;
    if (null == i2 || "vertexAttributes" in n4) return n4;
    const o3 = n4.spatialReference, s4 = r3 ? R2.fromJSON(r3) : X(o3), a2 = o3 && (A(o3) || w(o3)) ? n4 : yield x3(o3, g).then(() => j(n4, g));
    return (yield U2())(a2.spatialReference, a2, i2, s4);
  });
}
function U2() {
  return __async(this, null, function* () {
    return (yield import("./geometryEngineJSON-EW2QOKL3.js")).geodesicBuffer;
  });
}

// ../../../node_modules/@arcgis/core/geometry/support/intersects.js
function s3(s4) {
  return "mesh" === s4 ? o : Z(s4);
}

// ../../../node_modules/@arcgis/core/layers/graphics/contains.js
function n2(n4, t5) {
  return n4 ? t5 ? 4 : 3 : t5 ? 3 : 2;
}
function t3(n4, t5, r3, e4) {
  return o2(n4, t5, r3, e4.coords[0], e4.coords[1]);
}
function r2(t5, r3, e4, c3, u3, f6) {
  const s4 = n2(u3, f6), {
    coords: i2,
    lengths: l4
  } = c3;
  if (!l4) return false;
  for (let n4 = 0, d2 = 0; n4 < l4.length; n4++, d2 += s4) if (!o2(t5, r3, e4, i2[d2], i2[d2 + 1])) return false;
  return true;
}
function o2(t5, r3, o3, c3, u3) {
  if (!t5) return false;
  const f6 = n2(r3, o3), {
    coords: s4,
    lengths: i2
  } = t5;
  let l4 = false, d2 = 0;
  for (const n4 of i2) l4 = e2(l4, s4, f6, d2, n4, c3, u3), d2 += n4 * f6;
  return l4;
}
function e2(n4, t5, r3, o3, e4, c3, u3) {
  let f6 = n4, s4 = o3;
  for (let i2 = o3, l4 = o3 + e4 * r3; i2 < l4; i2 += r3) {
    s4 = i2 + r3, s4 === l4 && (s4 = o3);
    const n5 = t5[i2], e5 = t5[i2 + 1], d2 = t5[s4], g5 = t5[s4 + 1];
    (e5 < u3 && g5 >= u3 || g5 < u3 && e5 >= u3) && n5 + (u3 - e5) / (g5 - e5) * (d2 - n5) < c3 && (f6 = !f6);
  }
  return f6;
}

// ../../../node_modules/@arcgis/core/layers/graphics/data/spatialQuerySupport.js
var f5 = "unsupported-query";
var R3 = {
  esriSpatialRelIntersects: "intersects",
  esriSpatialRelContains: "contains",
  esriSpatialRelCrosses: "crosses",
  esriSpatialRelDisjoint: "disjoint",
  esriSpatialRelEnvelopeIntersects: "intersects",
  esriSpatialRelIndexIntersects: null,
  esriSpatialRelOverlaps: "overlaps",
  esriSpatialRelTouches: "touches",
  esriSpatialRelWithin: "within",
  esriSpatialRelRelation: null
};
var S2 = {
  spatialRelationship: {
    esriSpatialRelIntersects: true,
    esriSpatialRelContains: true,
    esriSpatialRelWithin: true,
    esriSpatialRelCrosses: true,
    esriSpatialRelDisjoint: true,
    esriSpatialRelTouches: true,
    esriSpatialRelOverlaps: true,
    esriSpatialRelEnvelopeIntersects: true,
    esriSpatialRelIndexIntersects: false,
    esriSpatialRelRelation: false
  },
  queryGeometry: {
    esriGeometryPoint: true,
    esriGeometryMultipoint: true,
    esriGeometryPolyline: true,
    esriGeometryPolygon: true,
    esriGeometryEnvelope: true
  },
  layerGeometry: {
    esriGeometryPoint: true,
    esriGeometryMultipoint: true,
    esriGeometryPolyline: true,
    esriGeometryPolygon: true,
    esriGeometryEnvelope: false
  }
};
function G4(e4) {
  return null != e4 && true === S2.spatialRelationship[e4];
}
function g4(e4) {
  return null != e4 && true === S2.queryGeometry[p(e4)];
}
function j3(e4) {
  return null != e4 && true === S2.layerGeometry[e4];
}
function h4() {
  return import("./geometryEngineJSON-EW2QOKL3.js");
}
function v(e4, n4, l4, c3, f6) {
  if (f(n4) && "esriGeometryPoint" === l4 && ("esriSpatialRelIntersects" === e4 || "esriSpatialRelContains" === e4)) {
    const e5 = K(new e(), n4, false, false);
    return Promise.resolve((r3) => t3(e5, false, false, r3));
  }
  if (f(n4) && "esriGeometryMultipoint" === l4) {
    const r3 = K(new e(), n4, false, false);
    if ("esriSpatialRelContains" === e4) return Promise.resolve((e5) => r2(r3, false, false, e5, c3, f6));
  }
  if (m(n4) && "esriGeometryPoint" === l4 && ("esriSpatialRelIntersects" === e4 || "esriSpatialRelContains" === e4)) return Promise.resolve((e5) => t(n4, a(l4, c3, f6, e5)));
  if (m(n4) && "esriGeometryMultipoint" === l4 && "esriSpatialRelContains" === e4) return Promise.resolve((e5) => r(n4, a(l4, c3, f6, e5)));
  if (m(n4) && "esriSpatialRelIntersects" === e4) {
    const e5 = s3(l4);
    return Promise.resolve((r3) => e5(n4, a(l4, c3, f6, r3)));
  }
  return h4().then((r3) => {
    const t5 = r3[R3[e4]].bind(null, n4.spatialReference, n4);
    return (e5) => t5(a(l4, c3, f6, e5));
  });
}
function P(r3, t5, i2) {
  return __async(this, null, function* () {
    const {
      spatialRel: s4,
      geometry: o3
    } = r3;
    if (o3) {
      if (!G4(s4)) throw new s(f5, "Unsupported query spatial relationship", {
        query: r3
      });
      if (N(o3.spatialReference) && N(i2)) {
        if (!g4(o3)) throw new s(f5, "Unsupported query geometry type", {
          query: r3
        });
        if (!j3(t5)) throw new s(f5, "Unsupported layer geometry type", {
          query: r3
        });
        if (r3.outSR) return x3(r3.geometry?.spatialReference, r3.outSR);
      }
    }
  });
}
function I(e4) {
  if (m(e4)) return true;
  if (f(e4)) {
    for (const r3 of e4.rings) {
      if (5 !== r3.length) return false;
      if (r3[0][0] !== r3[1][0] || r3[0][0] !== r3[4][0] || r3[2][0] !== r3[3][0] || r3[0][1] !== r3[3][1] || r3[0][1] !== r3[4][1] || r3[1][1] !== r3[2][1]) return false;
    }
    return true;
  }
  return false;
}

// ../../../node_modules/@arcgis/core/layers/graphics/data/timeSupport.js
function n3(n4, t5) {
  return __async(this, null, function* () {
    if (!n4) return null;
    const l4 = t5.featureAdapter, {
      startTimeField: u3,
      endTimeField: e4
    } = n4;
    let r3 = Number.POSITIVE_INFINITY, i2 = Number.NEGATIVE_INFINITY;
    if (u3 && e4) yield t5.forEach((n5) => {
      const t6 = l4.getAttribute(n5, u3), o3 = l4.getAttribute(n5, e4);
      null == t6 || isNaN(t6) || (r3 = Math.min(r3, t6)), null == o3 || isNaN(o3) || (i2 = Math.max(i2, o3));
    });
    else {
      const n5 = u3 || e4;
      yield t5.forEach((t6) => {
        const u4 = l4.getAttribute(t6, n5);
        null == u4 || isNaN(u4) || (r3 = Math.min(r3, u4), i2 = Math.max(i2, u4));
      });
    }
    return {
      start: r3,
      end: i2
    };
  });
}
function t4(n4, t5, r3) {
  if (!t5 || !n4) return null;
  const {
    startTimeField: i2,
    endTimeField: o3
  } = n4;
  if (!i2 && !o3) return null;
  const {
    start: s4,
    end: a2
  } = t5;
  if (null === s4 && null === a2) return null;
  if (void 0 === s4 && void 0 === a2) return e3();
  const c3 = r3.getAttributeAsTimestamp?.bind(r3) ?? r3.getAttribute.bind(r3);
  return i2 && o3 ? l3(c3, i2, o3, s4, a2) : u2(c3, i2 || o3, s4, a2);
}
function l3(n4, t5, l4, u3, e4) {
  return null != u3 && null != e4 ? (r3) => {
    const i2 = n4(r3, t5), o3 = n4(r3, l4);
    return (null == i2 || i2 <= e4) && (null == o3 || o3 >= u3);
  } : null != u3 ? (t6) => {
    const e5 = n4(t6, l4);
    return null == e5 || e5 >= u3;
  } : null != e4 ? (l5) => {
    const u4 = n4(l5, t5);
    return null == u4 || u4 <= e4;
  } : void 0;
}
function u2(n4, t5, l4, u3) {
  return null != l4 && null != u3 && l4 === u3 ? (u4) => n4(u4, t5) === l4 : null != l4 && null != u3 ? (e4) => {
    const r3 = n4(e4, t5);
    return null != r3 && r3 >= l4 && r3 <= u3;
  } : null != l4 ? (u4) => {
    const e4 = n4(u4, t5);
    return null != e4 && e4 >= l4;
  } : null != u3 ? (l5) => {
    const e4 = n4(l5, t5);
    return null != e4 && e4 <= u3;
  } : void 0;
}
function e3() {
  return () => false;
}

export {
  y4 as y,
  a,
  h2 as h,
  x3 as x,
  j,
  b,
  g3 as g,
  S,
  j2,
  v,
  P,
  I,
  n3 as n,
  t4 as t
};
//# sourceMappingURL=chunk-NE35ZNG6.js.map
