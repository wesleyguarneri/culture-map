import {
  e as e3
} from "./chunk-4QBFFLOC.js";
import {
  e as e2
} from "./chunk-O437BSYE.js";
import {
  e
} from "./chunk-YZNT6QWD.js";
import {
  d,
  q
} from "./chunk-J55F4AC2.js";
import {
  f,
  l,
  s as s2,
  u
} from "./chunk-S3IO7V4Q.js";
import {
  a
} from "./chunk-IHVSZYZS.js";
import {
  n as n2
} from "./chunk-2MMLMOWS.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js
function d2(t, e4) {
  return t ? e4 ? 4 : 3 : e4 ? 3 : 2;
}
var m = () => n.getLogger("esri.layers.graphics.featureConversionUtils");
var g = {
  esriGeometryPoint: 0,
  esriGeometryPolyline: 2,
  esriGeometryPolygon: 3,
  esriGeometryMultipoint: 0,
  esriGeometryEnvelope: 0
};
var y = (t, e4, n3, o, r, s3) => {
  t[n3] = r, t[n3 + 1] = s3;
};
var p = (t, e4, n3, o, r, s3) => {
  t[n3] = r, t[n3 + 1] = s3, t[n3 + 2] = e4[o + 2];
};
var I = (t, e4, n3, o, r, s3) => {
  t[n3] = r, t[n3 + 1] = s3, t[n3 + 2] = e4[o + 3];
};
var b = (t, e4, n3, o, r, s3) => {
  t[n3] = r, t[n3 + 1] = s3, t[n3 + 2] = e4[o + 2], t[n3 + 3] = e4[o + 3];
};
function M(t, e4, n3, o) {
  if (t) {
    if (n3) return e4 && o ? b : p;
    if (e4 && o) return I;
  } else if (e4 && o) return p;
  return y;
}
function N({
  scale: t,
  translate: e4
}, n3) {
  return Math.round((n3 - e4[0]) / t[0]);
}
function w({
  scale: t,
  translate: e4
}, n3) {
  return Math.round((e4[1] - n3) / t[1]);
}
function F({
  scale: t,
  translate: e4
}, n3, o) {
  return n3 * t[o] + e4[o];
}
function x(t, e4, n3) {
  return t ? e4 ? n3 ? k(t) : Z(t) : n3 ? v(t) : P(t) : null;
}
function P(t) {
  const e4 = t.coords;
  return {
    x: e4[0],
    y: e4[1]
  };
}
function j(t, e4) {
  return t.coords[0] = e4.x, t.coords[1] = e4.y, t;
}
function Z(t) {
  const e4 = t.coords;
  return {
    x: e4[0],
    y: e4[1],
    z: e4[2]
  };
}
function E(t, e4) {
  return t.coords[0] = e4.x, t.coords[1] = e4.y, t.coords[2] = e4.z, t;
}
function v(t) {
  const e4 = t.coords;
  return {
    x: e4[0],
    y: e4[1],
    m: e4[2]
  };
}
function z(t, e4) {
  return t.coords[0] = e4.x, t.coords[1] = e4.y, t.coords[2] = e4.m, t;
}
function k(t) {
  const e4 = t.coords;
  return {
    x: e4[0],
    y: e4[1],
    z: e4[2],
    m: e4[3]
  };
}
function V(t, e4) {
  return t.coords[0] = e4.x, t.coords[1] = e4.y, t.coords[2] = e4.z, t.coords[3] = e4.m, t;
}
function Y(t, e4, n3, o) {
  let r = P;
  n3 && o ? r = k : n3 ? r = Z : o && (r = v);
  for (const s3 of e4) {
    const {
      geometry: e5,
      attributes: n4
    } = s3, o2 = null != e5 ? r(e5) : null;
    t.push({
      attributes: n4,
      geometry: o2
    });
  }
  return t;
}
function _(t, e4) {
  return t && e4 ? V : t ? E : e4 ? z : j;
}
function L(t, e4, n3, o, r) {
  const s3 = _(n3, o);
  for (const {
    geometry: u2,
    attributes: l2
  } of e4) {
    const e5 = null != u2 ? s3(new e(), u2) : null;
    t.push(new e2(e5, l2, null, r ? l2[r] : void 0));
  }
  return t;
}
function O(t, e4, n3 = _(null != e4.z, null != e4.m)) {
  return n3(t, e4);
}
function S(t, e4, n3, o) {
  for (const {
    geometry: r,
    attributes: s3
  } of e4) t.push({
    attributes: s3,
    geometry: null != r ? U(r, n3, o) : null
  });
  return t;
}
function U(t, e4, n3) {
  if (null == t) return null;
  const o = d2(e4, n3), r = [];
  for (let s3 = 0; s3 < t.coords.length; s3 += o) {
    const e5 = [];
    for (let n4 = 0; n4 < o; n4++) e5.push(t.coords[s3 + n4]);
    r.push(e5);
  }
  return e4 ? n3 ? {
    points: r,
    hasZ: e4,
    hasM: n3
  } : {
    points: r,
    hasZ: e4
  } : n3 ? {
    points: r,
    hasM: n3
  } : {
    points: r
  };
}
function q2(t, e4, n3, o, r) {
  const s3 = d2(n3, o);
  for (const {
    geometry: u2,
    attributes: l2
  } of e4) {
    const e5 = null != u2 ? R(new e(), u2, s3) : null;
    t.push(new e2(e5, l2, null, r ? l2[r] : void 0));
  }
  return t;
}
function R(t, e4, n3 = d2(e4.hasZ, e4.hasM)) {
  t.lengths[0] = e4.points.length;
  const o = t.coords;
  let r = 0;
  for (const s3 of e4.points) for (let t2 = 0; t2 < n3; t2++) o[r++] = s3[t2];
  return t;
}
function A(t, e4, n3, o) {
  for (const {
    geometry: r,
    attributes: s3
  } of e4) t.push({
    attributes: s3,
    geometry: null != r ? $(r, n3, o) : null
  });
  return t;
}
function $(t, e4, n3) {
  if (!t) return null;
  const o = d2(e4, n3), {
    coords: r,
    lengths: s3
  } = t, u2 = [];
  let l2 = 0;
  for (const c of s3) {
    const t2 = [];
    for (let e5 = 0; e5 < c; e5++) {
      const e6 = [];
      for (let t3 = 0; t3 < o; t3++) e6.push(r[l2++]);
      t2.push(e6);
    }
    u2.push(t2);
  }
  return e4 ? n3 ? {
    paths: u2,
    hasZ: e4,
    hasM: n3
  } : {
    paths: u2,
    hasZ: e4
  } : n3 ? {
    paths: u2,
    hasM: n3
  } : {
    paths: u2
  };
}
function B(t, e4, n3, o, r) {
  const s3 = d2(n3, o);
  for (const {
    geometry: u2,
    attributes: l2,
    centroid: c
  } of e4) {
    const e5 = null != u2 ? C(new e(), u2, s3) : null, n4 = null != c ? O(new e(), c) : null;
    t.push(new e2(e5, l2, n4, r ? l2[r] : void 0));
  }
  return t;
}
function C(t, e4, n3 = d2(e4.hasZ, e4.hasM)) {
  const {
    lengths: o,
    coords: r
  } = t;
  let s3 = 0;
  for (const u2 of e4.paths) {
    for (const t2 of u2) for (let e5 = 0; e5 < n3; e5++) r[s3++] = t2[e5];
    o.push(u2.length);
  }
  return t;
}
function D(t, e4, n3, o) {
  for (const {
    geometry: r,
    attributes: s3,
    centroid: u2
  } of e4) {
    const e5 = null != r ? H(r, n3, o) : null;
    if (null != u2) {
      const n4 = P(u2);
      t.push({
        attributes: s3,
        centroid: n4,
        geometry: e5
      });
    } else t.push({
      attributes: s3,
      geometry: e5
    });
  }
  return t;
}
function H(t, e4, n3) {
  if (!t) return null;
  const o = d2(e4, n3), {
    coords: r,
    lengths: s3
  } = t, u2 = [];
  let l2 = 0;
  for (const c of s3) {
    const t2 = [];
    for (let e5 = 0; e5 < c; e5++) {
      const e6 = [];
      for (let t3 = 0; t3 < o; t3++) e6.push(r[l2++]);
      t2.push(e6);
    }
    u2.push(t2);
  }
  return e4 ? n3 ? {
    rings: u2,
    hasZ: e4,
    hasM: n3
  } : {
    rings: u2,
    hasZ: e4
  } : n3 ? {
    rings: u2,
    hasM: n3
  } : {
    rings: u2
  };
}
function J(t, e4, n3, o, r) {
  for (const {
    geometry: s3,
    centroid: u2,
    attributes: l2
  } of e4) {
    const e5 = null != s3 ? K(new e(), s3, n3, o) : null, c = r ? l2[r] : void 0;
    null != u2 ? t.push(new e2(e5, l2, j(new e(), u2), c)) : t.push(new e2(e5, l2, null, c));
  }
  return t;
}
function K(t, e4, n3 = e4.hasZ, o = e4.hasM) {
  return Q(t, e4.rings, n3, o);
}
function Q(t, e4, n3, o) {
  const r = d2(n3, o), {
    lengths: s3,
    coords: u2
  } = t;
  let l2 = 0;
  wt(t);
  for (const c of e4) {
    for (const t2 of c) for (let e5 = 0; e5 < r; e5++) u2[l2++] = t2[e5];
    s3.push(c.length);
  }
  return t;
}
var W = [];
var X = [];
function tt(t, e4, n3, o, r) {
  W[0] = t;
  const [s3] = et(X, W, e4, n3, o, r);
  return Tt(W), Tt(X), s3;
}
function et(e4, n3, o, r, s3, u2) {
  if (Tt(e4), !o) {
    for (const t of n3) {
      const n4 = u2 ? t.attributes[u2] : void 0;
      e4.push(new e2(null, t.attributes, null, n4));
    }
    return e4;
  }
  switch (o) {
    case "esriGeometryPoint":
      return L(e4, n3, r, s3, u2);
    case "esriGeometryMultipoint":
      return q2(e4, n3, r, s3, u2);
    case "esriGeometryPolyline":
      return B(e4, n3, r, s3, u2);
    case "esriGeometryPolygon":
      return J(e4, n3, r, s3, u2);
    default:
      m().error("convertToFeatureSet:unknown-geometry", new s(`Unable to parse unknown geometry type '${o}'`)), Tt(e4);
  }
  return e4;
}
function nt(t, e4, n3, o) {
  X[0] = t, ut(W, X, e4, n3, o);
  const r = W[0];
  return Tt(W), Tt(X), r;
}
function ot(e4, n3, o) {
  if (null == e4) return null;
  const r = new e();
  if ("hasZ" in e4 && null == n3 && (n3 = e4.hasZ), "hasM" in e4 && null == o && (o = e4.hasM), u(e4)) {
    return _(null != n3 ? n3 : null != e4.z, null != o ? o : null != e4.m)(r, e4);
  }
  return f(e4) ? K(r, e4, n3, o) : s2(e4) ? C(r, e4, d2(n3, o)) : l(e4) ? R(r, e4, d2(n3, o)) : void m().error("convertFromGeometry:unknown-geometry", new s(`Unable to parse unknown geometry type '${e4}'`));
}
function rt(e4, n3, o, r) {
  const s3 = e4 && ("coords" in e4 ? e4 : e4.geometry);
  if (null == s3) return null;
  switch (n3) {
    case "esriGeometryPoint": {
      let t = P;
      return o && r ? t = k : o ? t = Z : r && (t = v), t(s3);
    }
    case "esriGeometryMultipoint":
      return U(s3, o, r);
    case "esriGeometryPolyline":
      return $(s3, o, r);
    case "esriGeometryPolygon":
      return H(s3, o, r);
    default:
      return m().error("convertToGeometry:unknown-geometry", new s(`Unable to parse unknown geometry type '${n3}'`)), null;
  }
}
function st(t, e4) {
  for (const n3 of e4) t.push({
    attributes: n3.attributes
  });
  return t;
}
function ut(e4, n3, o, r, s3) {
  if (Tt(e4), null == o) return st(e4, n3);
  switch (o) {
    case "esriGeometryPoint":
      return Y(e4, n3, r, s3);
    case "esriGeometryMultipoint":
      return S(e4, n3, r, s3);
    case "esriGeometryPolyline":
      return A(e4, n3, r, s3);
    case "esriGeometryPolygon":
      return D(e4, n3, r, s3);
    default:
      m().error("convertToFeatureSet:unknown-geometry", new s(`Unable to parse unknown geometry type '${o}'`));
  }
  return e4;
}
function lt(t) {
  const {
    objectIdFieldName: e4,
    spatialReference: n3,
    transform: o,
    fields: r,
    hasM: s3,
    hasZ: u2,
    features: l2,
    geometryType: c,
    exceededTransferLimit: i,
    uniqueIdField: f2,
    queryGeometry: a2,
    queryGeometryType: h
  } = t, d3 = {
    features: ut([], l2, c, u2, s3),
    fields: r,
    geometryType: c,
    objectIdFieldName: e4,
    spatialReference: n3,
    uniqueIdField: f2,
    queryGeometry: rt(a2, h, false, false)
  };
  return o && (d3.transform = o), i && (d3.exceededTransferLimit = i), s3 && (d3.hasM = s3), u2 && (d3.hasZ = u2), d3;
}
function ct(e4, n3) {
  const o = new e3(), {
    hasM: r,
    hasZ: s3,
    features: u2,
    objectIdFieldName: l2,
    spatialReference: c,
    geometryType: i,
    exceededTransferLimit: f2,
    transform: h,
    fields: d3
  } = e4;
  return d3 && (o.fields = d3), o.geometryType = i ?? null, o.objectIdFieldName = l2 ?? n3 ?? null, o.spatialReference = c ?? null, o.objectIdFieldName ? (u2 && et(o.features, u2, i, s3, r, o.objectIdFieldName), f2 && (o.exceededTransferLimit = f2), r && (o.hasM = r), s3 && (o.hasZ = s3), h && (o.transform = h), o) : (m().error(new s("optimized-features:invalid-objectIdFieldName", "objectIdFieldName is missing")), o);
}
function it(t) {
  const {
    transform: e4,
    features: n3,
    hasM: o,
    hasZ: r
  } = t;
  if (!e4) return t;
  for (const s3 of n3) null != s3.geometry && pt(s3.geometry, s3.geometry, o, r, e4), null != s3.centroid && pt(s3.centroid, s3.centroid, o, r, e4);
  return t.transform = null, t;
}
function ft(t, e4) {
  const {
    geometryType: n3,
    features: o,
    hasM: r,
    hasZ: s3
  } = e4;
  if (!t) return e4;
  for (let u2 = 0; u2 < o.length; u2++) {
    const e5 = o[u2], l2 = e5.weakClone();
    l2.geometry = new e(), at(l2.geometry, e5.geometry, r, s3, n3, t), e5.centroid && (l2.centroid = new e(), at(l2.centroid, e5.centroid, r, s3, "esriGeometryPoint", t)), o[u2] = l2;
  }
  return e4.transform = t, e4;
}
function at(t, e4, n3, o, r, s3, u2 = n3, l2 = o) {
  if (wt(t), !e4?.coords.length) return null;
  const c = g[r], {
    coords: i,
    lengths: f2
  } = e4, a2 = d2(n3, o), h = d2(n3 && u2, o && l2), m2 = M(n3, o, u2, l2);
  if (!f2.length) return m2(t.coords, i, 0, 0, N(s3, i[0]), w(s3, i[1])), wt(t, a2, 0), t;
  let y2, p2, I2, b2, T = 0, G = 0, F2 = G;
  for (const d3 of f2) {
    if (d3 < c) continue;
    let e5 = 0;
    G = F2, I2 = y2 = N(s3, i[T]), b2 = p2 = w(s3, i[T + 1]), m2(t.coords, i, G, T, I2, b2), e5++, T += a2, G += h;
    for (let n4 = 1; n4 < d3; n4++, T += a2) I2 = N(s3, i[T]), b2 = w(s3, i[T + 1]), I2 === y2 && b2 === p2 || (m2(t.coords, i, G, T, I2 - y2, b2 - p2), G += h, e5++, y2 = I2, p2 = b2);
    e5 >= c && (t.lengths.push(e5), F2 = G);
  }
  return Tt(t.coords, F2), t.coords.length ? t : null;
}
function ht(t, e4, n3, o, r, s3, u2 = n3, l2 = o) {
  if (wt(t), !e4?.coords.length) return null;
  const c = g[r], {
    coords: i,
    lengths: f2
  } = e4, a2 = d2(n3, o), h = d2(n3 && u2, o && l2), m2 = M(n3, o, u2, l2);
  if (!f2.length) return m2(t.coords, i, 0, 0, i[0], i[1]), wt(t, a2, 0), t;
  let y2 = 0;
  const p2 = s3 * s3;
  for (const d3 of f2) {
    if (d3 < c) {
      y2 += d3 * a2;
      continue;
    }
    const e5 = t.coords.length / h, n4 = y2, o2 = y2 + (d3 - 1) * a2;
    m2(t.coords, i, t.coords.length, n4, i[n4], i[n4 + 1]), mt(t.coords, i, a2, p2, m2, n4, o2), m2(t.coords, i, t.coords.length, o2, i[o2], i[o2 + 1]);
    const r2 = t.coords.length / h - e5;
    r2 >= c ? t.lengths.push(r2) : Tt(t.coords, e5 * h), y2 += d3 * a2;
  }
  return t.coords.length ? t : null;
}
function dt(t, e4, n3, o) {
  const r = t[e4], s3 = t[e4 + 1], u2 = t[n3], l2 = t[n3 + 1], c = t[o], i = t[o + 1];
  let f2 = u2, a2 = l2, h = c - f2, d3 = i - a2;
  if (0 !== h || 0 !== d3) {
    const t2 = ((r - f2) * h + (s3 - a2) * d3) / (h * h + d3 * d3);
    t2 > 1 ? (f2 = c, a2 = i) : t2 > 0 && (f2 += h * t2, a2 += d3 * t2);
  }
  return h = r - f2, d3 = s3 - a2, h * h + d3 * d3;
}
function mt(t, e4, n3, o, r, s3, u2) {
  let l2, c = o, i = 0;
  for (let f2 = s3 + n3; f2 < u2; f2 += n3) l2 = dt(e4, f2, s3, u2), l2 > c && (i = f2, c = l2);
  c > o && (i - s3 > n3 && mt(t, e4, n3, o, r, s3, i), r(t, e4, t.length, i, e4[i], e4[i + 1]), u2 - i > n3 && mt(t, e4, n3, o, r, i, u2));
}
function gt(t, e4, n3, u2) {
  if (!e4?.coords?.length) return null;
  const l2 = d2(n3, u2);
  let c = Number.POSITIVE_INFINITY, i = Number.POSITIVE_INFINITY, f2 = Number.NEGATIVE_INFINITY, a2 = Number.NEGATIVE_INFINITY;
  if (e4 && e4.coords) {
    const t2 = e4.coords;
    for (let e5 = 0; e5 < t2.length; e5 += l2) {
      const n4 = t2[e5], o = t2[e5 + 1];
      c = Math.min(c, n4), f2 = Math.max(f2, n4), i = Math.min(i, o), a2 = Math.max(a2, o);
    }
  }
  return q(t) ? d(t, c, i, f2, a2) : a(c, i, f2, a2, t), t;
}
function pt(t, e4, o, r, s3) {
  const {
    coords: u2,
    lengths: l2
  } = e4, c = d2(o, r);
  if (!u2.length) return t !== e4 && wt(t), t;
  n2(s3);
  const {
    originPosition: i,
    scale: f2,
    translate: a2
  } = s3, h = Gt;
  h.originPosition = i;
  const m2 = h.scale;
  m2[0] = f2[0] ?? 1, m2[1] = -(f2[1] ?? 1), m2[2] = f2[2] ?? 1, m2[3] = f2[3] ?? 1;
  const g2 = h.translate;
  if (g2[0] = a2[0] ?? 0, g2[1] = a2[1] ?? 0, g2[2] = a2[2] ?? 0, g2[3] = a2[3] ?? 0, !l2.length) {
    for (let e5 = 0; e5 < c; ++e5) t.coords[e5] = F(h, u2[e5], e5);
    return t !== e4 && wt(t, c, 0), t;
  }
  let y2 = 0;
  for (let n3 = 0; n3 < l2.length; n3++) {
    const e5 = l2[n3];
    t.lengths[n3] = e5;
    for (let n4 = 0; n4 < c; ++n4) t.coords[y2 + n4] = F(h, u2[y2 + n4], n4);
    let o2 = t.coords[y2], r2 = t.coords[y2 + 1];
    y2 += c;
    for (let n4 = 1; n4 < e5; n4++, y2 += c) {
      o2 += u2[y2] * m2[0], r2 += u2[y2 + 1] * m2[1], t.coords[y2] = o2, t.coords[y2 + 1] = r2;
      for (let e6 = 2; e6 < c; ++e6) t.coords[y2 + e6] = F(h, u2[y2 + e6], e6);
    }
  }
  return t !== e4 && wt(t, u2.length, l2.length), t;
}
function It(t, e4, n3, o, r, s3) {
  if (wt(t), t.lengths.push(...e4.lengths), n3 === r && o === s3) for (let u2 = 0; u2 < e4.coords.length; u2++) t.coords.push(e4.coords[u2]);
  else {
    const u2 = d2(n3, o), l2 = M(n3, o, r, s3), c = e4.coords;
    for (let e5 = 0; e5 < c.length; e5 += u2) l2(t.coords, c, t.coords.length, e5, c[e5], c[e5 + 1]);
  }
  return t;
}
function Mt(t, e4, n3, o) {
  let r = 0, s3 = t[o * e4], u2 = t[o * (e4 + 1)];
  for (let l2 = 1; l2 < n3; l2++) {
    const n4 = s3 + t[o * (e4 + l2)], c = u2 + t[o * (e4 + l2) + 1], i = (n4 - s3) * (c + u2);
    s3 = n4, u2 = c, r += i;
  }
  return 0.5 * r;
}
function Nt(t, e4) {
  const {
    coords: n3,
    lengths: o
  } = t;
  let r = 0, s3 = 0;
  for (let u2 = 0; u2 < o.length; u2++) {
    const t2 = o[u2];
    s3 += Mt(n3, r, t2, e4), r += t2;
  }
  return Math.abs(s3);
}
function wt(t, e4 = 0, n3 = 0) {
  Tt(t.lengths, n3), Tt(t.coords, e4);
}
function Tt(t, e4 = 0) {
  t.length !== e4 && (t.length = e4);
}
var Gt = {
  originPosition: "lowerLeft",
  scale: [1, 1, 1, 1],
  translate: [0, 0, 0, 0]
};

export {
  N,
  w,
  x,
  O,
  U,
  $,
  H,
  K,
  Q,
  tt,
  et,
  nt,
  ot,
  rt,
  lt,
  ct,
  it,
  ft,
  at,
  ht,
  gt,
  pt,
  It,
  Nt
};
//# sourceMappingURL=chunk-C7NRYPDG.js.map
