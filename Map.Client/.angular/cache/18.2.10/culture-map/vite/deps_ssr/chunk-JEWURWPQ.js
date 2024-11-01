import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a as a2
} from "./chunk-T2SCEBLQ.js";
import {
  n as n2
} from "./chunk-ZFES27RA.js";
import {
  a,
  w as w2
} from "./chunk-Y7SJWJAL.js";
import {
  o,
  x
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import {
  A2 as A,
  C,
  G,
  P2 as P,
  Z,
  ee,
  k,
  w
} from "./chunk-6SSA7P3A.js";

// ../../../node_modules/@arcgis/core/views/support/measurementUtils.js
function l(l2) {
  return P(l2) ? C(l2) || w(l2) || k(l2) || A(l2) ? w2 : l2 : a(l2);
}

// ../../../node_modules/@arcgis/core/views/support/euclideanLengthMeasurementUtils.js
var a3;
function f(t) {
  return p(t, a3.Horizontal);
}
function p(r, e) {
  const {
    hasZ: i,
    spatialReference: l2
  } = r, o2 = l(l2);
  let c = 0;
  const s = Z(o2);
  if (null == s) return null;
  const f2 = e === a3.Direct ? Z2 : j;
  for (const t of r.paths) {
    if (t.length < 2) continue;
    const n3 = t.length - 1;
    for (let r2 = 0; r2 < n3; ++r2) {
      const n4 = t[r2];
      D[0] = n4[0], D[1] = n4[1], D[2] = i ? n4[2] : 0;
      const e2 = t[r2 + 1];
      H[0] = e2[0], H[1] = e2[1], H[2] = i ? e2[2] : 0;
      const o3 = f2(D, H, l2);
      if (null == o3) return null;
      c += o3.value;
    }
  }
  return a2(c, s);
}
function h(t, n3) {
  const {
    spatialReference: r
  } = t;
  return G(r, n3.spatialReference) ? (D[0] = t.x, D[1] = t.y, D[2] = t.hasZ ? t.z : 0, H[0] = n3.x, H[1] = n3.y, H[2] = n3.hasZ ? n3.z : 0, x2(D, H, r)) : null;
}
function m(t, n3) {
  const {
    spatialReference: r
  } = t;
  return G(r, n3.spatialReference) ? (D[0] = t.x, D[1] = t.y, D[2] = t.hasZ ? t.z : 0, H[0] = n3.x, H[1] = n3.y, H[2] = n3.hasZ ? n3.z : 0, Z2(D, H, r)) : null;
}
function z(t, n3) {
  const {
    spatialReference: r
  } = t;
  return G(r, n3.spatialReference) ? (D[0] = t.x, D[1] = t.y, D[2] = t.hasZ ? t.z : 0, H[0] = n3.x, H[1] = n3.y, H[2] = n3.hasZ ? n3.z : 0, j(D, H, r)) : null;
}
function y(t, n3) {
  const {
    spatialReference: r
  } = t;
  return G(r, n3.spatialReference) ? (D[0] = t.x, D[1] = t.y, D[2] = t.hasZ ? t.z : 0, H[0] = n3.x, H[1] = n3.y, H[2] = n3.hasZ ? n3.z : 0, g(D, H, r)) : null;
}
function R(t) {
  return null != t ? v(t.hasZ ? t.z : 0, t.spatialReference) : null;
}
function v(n3, e) {
  const i = ee(e);
  return null != i ? a2(n3 ?? 0, i) : null;
}
function x2(n3, r, e) {
  const i = V(n3, r, e);
  return null != i ? {
    direct: a2(i.direct, i.unit),
    horizontal: a2(i.horizontal, i.unit),
    vertical: a2(i.vertical, i.unit)
  } : null;
}
function Z2(n3, r, e) {
  const i = V(n3, r, e, a3.Direct);
  return null != i ? a2(i.direct, i.unit) : null;
}
function j(n3, r, e) {
  const i = V(n3, r, e, a3.Horizontal);
  return null != i ? a2(i.horizontal, i.unit) : null;
}
function g(n3, r, e) {
  const i = V(n3, r, e, a3.Vertical);
  return null != i ? a2(i.verticalSigned, i.unit) : null;
}
function V(t, r, l2, c) {
  const s = l(l2), f2 = Z(s);
  if (null == f2) return null;
  const p2 = r[2] - t[2];
  if (c === a3.Vertical) return {
    verticalSigned: p2,
    unit: f2
  };
  if (!n2(t, l2, U, s) || !n2(r, l2, b, s)) return null;
  if (c === a3.Direct) {
    return {
      direct: x(b, U),
      unit: f2
    };
  }
  if (o(S, t[0], t[1], r[2]), !n2(S, l2, S, s)) return null;
  const h2 = x(S, b);
  if (c === a3.Horizontal) return {
    horizontal: h2,
    unit: f2
  };
  return {
    direct: x(b, U),
    horizontal: h2,
    vertical: Math.abs(p2),
    unit: f2
  };
}
!function(t) {
  t[t.Direct = 0] = "Direct", t[t.Horizontal = 1] = "Horizontal", t[t.Vertical = 2] = "Vertical";
}(a3 || (a3 = {}));
var D = n();
var H = n();
var U = n();
var b = n();
var S = n();

export {
  l,
  f,
  h,
  m,
  z,
  y,
  R,
  v,
  Z2 as Z,
  j,
  g
};
//# sourceMappingURL=chunk-JEWURWPQ.js.map
