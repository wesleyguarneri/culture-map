import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o as o2,
  x as x2
} from "./chunk-IPGNBAEV.js";
import {
  e as e3
} from "./chunk-XP2AJZUL.js";
import {
  e as e2
} from "./chunk-YGAXDKHF.js";
import {
  I,
  N,
  s
} from "./chunk-VOOO6FU5.js";
import {
  s as s3,
  t
} from "./chunk-VSQZQLTQ.js";
import {
  s as s2
} from "./chunk-K43CZ3M5.js";
import {
  $
} from "./chunk-LM3JDV4W.js";
import {
  l,
  m,
  x
} from "./chunk-KOI252FF.js";
import {
  o
} from "./chunk-MRPCXIVS.js";
import {
  h,
  p
} from "./chunk-YTKVV2Y3.js";
import {
  u
} from "./chunk-GCVQXAS4.js";
import {
  _,
  e
} from "./chunk-J4GMQHGL.js";
import {
  W2 as W
} from "./chunk-6SSA7P3A.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/graphicUtils.js
function b(t2, n) {
  if ("point" === t2.type) return M(t2, n, false);
  if (o2(t2)) switch (t2.type) {
    case "extent":
      return M(t2.center, n, false);
    case "polygon":
      return M(t2.centroid, n, false);
    case "polyline":
      return M(w(t2), n, true);
    case "mesh":
      return M(t2.origin, n, false);
  }
  else switch (t2.type) {
    case "extent":
      return M(z(t2), n, true);
    case "polygon":
      return M(R(t2), n, true);
    case "polyline":
      return M(w(t2), n, true);
  }
}
function w(t2) {
  const n = t2.paths[0];
  if (!n || 0 === n.length) return null;
  const r = p(n, h(n) / 2);
  return e3(r[0], r[1], r[2], t2.spatialReference);
}
function z(t2) {
  return e3(0.5 * (t2.xmax + t2.xmin), 0.5 * (t2.ymax + t2.ymin), null != t2.zmin && null != t2.zmax && isFinite(t2.zmin) && isFinite(t2.zmax) ? 0.5 * (t2.zmax + t2.zmin) : void 0, t2.spatialReference);
}
function R(t2) {
  const n = t2.rings[0];
  if (!n || 0 === n.length) return null;
  const r = o(t2.rings, !!t2.hasZ);
  return e3(r[0], r[1], r[2], t2.spatialReference);
}
function M(t2, n, r) {
  const e4 = r ? t2 : x2(t2);
  return n && t2 ? $(t2, e4, n) ? e4 : null : e4;
}
function P(t2, n, r, e4 = 0) {
  if (t2) {
    n || (n = u());
    const i = t2;
    let o3 = 0.5 * i.width * (r - 1), l2 = 0.5 * i.height * (r - 1);
    return i.width < 1e-7 * i.height ? o3 += l2 / 20 : i.height < 1e-7 * i.width && (l2 += o3 / 20), s2(n, i.xmin - o3 - e4, i.ymin - l2 - e4, i.xmax + o3 + e4, i.ymax + l2 + e4), n;
  }
  return null;
}
function F(t2, n, r = null) {
  const e4 = t(s3);
  return null != t2 && (e4[0] = t2[0], e4[1] = t2[1], e4[2] = t2[2]), null != n ? e4[3] = n : null != t2 && t2.length > 3 && (e4[3] = t2[3]), r && (e4[0] *= r, e4[1] *= r, e4[2] *= r, e4[3] *= r), e4;
}
function A(t2, n, r, e4, i, o3 = [0, 0, 0, 0]) {
  for (let l2 = 0; l2 < 3; ++l2) o3[l2] = null != t2?.[l2] ? t2[l2] : null != r?.[l2] ? r[l2] : i[l2];
  return o3[3] = null != n ? n : null != e4 ? e4 : i[3], o3;
}
function B(t2 = _, n, r, e4 = 1) {
  const i = new Array(3);
  if (null == n || null == r) i[0] = 1, i[1] = 1, i[2] = 1;
  else {
    let e5, o3 = 0;
    for (let l2 = 2; l2 >= 0; l2--) {
      const s4 = t2[l2];
      let u2;
      const a = null != s4, m2 = 0 === l2 && !e5 && !a, c = r[l2];
      "symbol-value" === s4 || m2 ? u2 = 0 !== c ? n[l2] / c : 1 : a && "proportional" !== s4 && isFinite(s4) && (u2 = 0 !== c ? s4 / c : 1), null != u2 && (i[l2] = u2, e5 = u2, o3 = Math.max(o3, Math.abs(u2)));
    }
    for (let t3 = 2; t3 >= 0; t3--) null == i[t3] ? i[t3] = e5 : 0 === i[t3] && (i[t3] = 1e-3 * o3);
  }
  for (let o3 = 2; o3 >= 0; o3--) i[o3] /= e4;
  return e(i);
}
function D(t2) {
  return null != t2.isPrimitive;
}
function I2(t2) {
  return S(D(t2) ? [t2.width, t2.depth, t2.height] : t2) ? null : "Symbol sizes may not be negative values";
}
function S(t2) {
  const n = (t3) => null == t3 || t3 >= 0;
  return Array.isArray(t2) ? t2.every(n) : n(t2);
}
function U(t2, o3, l2, s4 = e2()) {
  return t2 && x(s4, s4, -t2 / 180 * Math.PI), o3 && l(s4, s4, o3 / 180 * Math.PI), l2 && m(s4, s4, l2 / 180 * Math.PI), s4;
}
function k(n, r, e4) {
  if (null != e4.minDemResolution) return e4.minDemResolution;
  const i = W(r), o3 = s(n) * i, l2 = I(n) * i, s4 = N(n) * (r.isGeographic ? 1 : i);
  return 0 === o3 && 0 === l2 && 0 === s4 ? e4.minDemResolutionForPoints : 0.01 * Math.max(o3, l2, s4);
}

export {
  b,
  P,
  F,
  A,
  B,
  I2 as I,
  S,
  U,
  k
};
//# sourceMappingURL=chunk-ATL6GPJC.js.map
