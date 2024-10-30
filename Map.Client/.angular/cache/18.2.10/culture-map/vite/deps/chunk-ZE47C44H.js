import {
  S,
  k
} from "./chunk-5GIS2C3K.js";
import {
  c,
  f,
  f2
} from "./chunk-N4KQPPPI.js";
import {
  n as n3,
  r
} from "./chunk-IMVP5ADD.js";
import {
  L as L2,
  a
} from "./chunk-H7WPOTQH.js";
import {
  p as p2
} from "./chunk-XTVPEVHA.js";
import {
  n as n2
} from "./chunk-6CA6K3O7.js";
import {
  L,
  m
} from "./chunk-3ZXOUEQG.js";
import {
  A,
  O,
  _,
  e as e2,
  g,
  o,
  p,
  q,
  s,
  u,
  v,
  x,
  z
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import {
  e
} from "./chunk-POILQGXA.js";

// ../../../node_modules/@arcgis/core/chunks/sphere.js
var C = _2();
function _2() {
  return n3();
}
var w = L2;
var O2 = L2;
function T(t, r2) {
  return a(r2, t);
}
function k2(t, r2) {
  return r(t[0], t[1], t[2], r2);
}
function z2(t) {
  return t;
}
function E(t) {
  t[0] = t[1] = t[2] = t[3] = 0;
}
function L3(t, r2) {
  return t[0] = t[1] = t[2] = 0, t[3] = r2, t;
}
function N(t) {
  return t[3];
}
function V(t) {
  return t;
}
function Z(t, r2, n4, o2) {
  return r(t, r2, n4, o2);
}
function B(t, r2, n4) {
  return t !== n4 && (n4[0] = t[0], n4[1] = t[1], n4[2] = t[2]), n4[3] = t[3] + r2, n4;
}
function U(t, r2, n4) {
  return t !== n4 && T(t, n4), n4;
}
function X(t, r2, n4) {
  if (null == r2) return false;
  if (!F(t, r2, D)) return false;
  let {
    t0: o2,
    t1: s2
  } = D;
  if ((o2 < 0 || s2 < o2 && s2 > 0) && (o2 = s2), o2 < 0) return false;
  if (n4) {
    const {
      origin: t2,
      direction: s3
    } = r2;
    n4[0] = t2[0] + s3[0] * o2, n4[1] = t2[1] + s3[1] * o2, n4[2] = t2[2] + s3[2] * o2;
  }
  return true;
}
function Y(t, r2, n4) {
  const o2 = k(r2, n4);
  if (!F(t, o2, D)) return [];
  const {
    origin: s2,
    direction: e3
  } = o2, {
    t0: i,
    t1: a2
  } = D, c2 = (r3) => {
    const n5 = n();
    return q(n5, s2, e3, r3), Q(t, n5, n5);
  };
  return Math.abs(i - a2) < e() ? [c2(i)] : [c2(i), c2(a2)];
}
var D = {
  t0: 0,
  t1: 0
};
function F(t, r2, n4) {
  const {
    origin: o2,
    direction: s2
  } = r2, e3 = G;
  e3[0] = o2[0] - t[0], e3[1] = o2[1] - t[1], e3[2] = o2[2] - t[2];
  const i = s2[0] * s2[0] + s2[1] * s2[1] + s2[2] * s2[2];
  if (0 === i) return false;
  const a2 = 2 * (s2[0] * e3[0] + s2[1] * e3[1] + s2[2] * e3[2]), c2 = a2 * a2 - 4 * i * (e3[0] * e3[0] + e3[1] * e3[1] + e3[2] * e3[2] - t[3] * t[3]);
  if (c2 < 0) return false;
  const u2 = Math.sqrt(c2);
  return n4.t0 = (-a2 - u2) / (2 * i), n4.t1 = (-a2 + u2) / (2 * i), true;
}
var G = n();
function H(t, r2) {
  return X(t, r2, null);
}
function I(t, r2, n4) {
  if (X(t, r2, n4)) return n4;
  const a2 = J(t, r2, c.get());
  return u(n4, r2.origin, g(c.get(), r2.direction, x(r2.origin, a2) / s(r2.direction))), n4;
}
function J(t, r2, o2) {
  const e3 = c.get(), u2 = f.get();
  _(e3, r2.origin, r2.direction);
  const f3 = N(t);
  _(o2, e3, r2.origin), g(o2, o2, 1 / s(o2) * f3);
  const m2 = $(t, r2.origin), l = f2(r2.origin, o2);
  return p2(u2, l + m2, e3), O(o2, o2, u2), o2;
}
function K(t, r2, n4) {
  return X(t, r2, n4) ? n4 : (S(r2, V(t), n4), Q(t, n4, n4));
}
function Q(t, r2, n4) {
  const e3 = e2(c.get(), r2, V(t)), a2 = g(c.get(), e3, t[3] / s(e3));
  return u(n4, a2, V(t));
}
function W(t, r2) {
  const n4 = e2(c.get(), r2, V(t)), o2 = v(n4), s2 = t[3] * t[3];
  return Math.sqrt(Math.abs(o2 - s2));
}
function $(r2, n4) {
  const o2 = e2(c.get(), n4, V(r2)), s2 = s(o2), e3 = N(r2), a2 = e3 + Math.abs(e3 - s2);
  return m(e3 / a2);
}
var tt = n();
function rt(t, n4, o2, s2) {
  const e3 = e2(tt, n4, V(t));
  switch (o2) {
    case n2.X: {
      const t2 = L(e3, tt)[2];
      return o(s2, -Math.sin(t2), Math.cos(t2), 0);
    }
    case n2.Y: {
      const t2 = L(e3, tt), n5 = t2[1], o3 = t2[2], i = Math.sin(n5);
      return o(s2, -i * Math.cos(o3), -i * Math.sin(o3), Math.cos(n5));
    }
    case n2.Z:
      return z(s2, e3);
    default:
      return;
  }
}
function nt(t, r2) {
  const n4 = e2(it, r2, V(t));
  return s(n4) - t[3];
}
function ot(t, r2, n4, e3) {
  const i = nt(t, r2), a2 = rt(t, r2, n2.Z, it), c2 = g(it, a2, n4 - i);
  return u(e3, r2, c2);
}
function st(t, r2) {
  const n4 = p(V(t), r2), o2 = N(t);
  return n4 <= o2 * o2;
}
function et(t, r2, n4 = n3()) {
  const o2 = x(V(t), V(r2)), s2 = t[3], i = r2[3];
  return o2 + i < s2 ? (a(n4, t), n4) : o2 + s2 < i ? (a(n4, r2), n4) : (A(n4, V(t), V(r2), (o2 + i - s2) / (2 * o2)), n4[3] = (o2 + s2 + i) / 2, n4);
}
var it = n();
var at = _2();
var ct = Object.freeze(Object.defineProperty({
  __proto__: null,
  NullSphere: C,
  altitudeAt: nt,
  angleToSilhouette: $,
  axisAt: rt,
  clear: E,
  closestPoint: K,
  closestPointOnSilhouette: J,
  containsPoint: st,
  copy: T,
  create: _2,
  distanceToSilhouette: W,
  elevate: B,
  equals: O2,
  exactEquals: w,
  fromCenterAndRadius: k2,
  fromRadius: L3,
  fromValues: Z,
  getCenter: V,
  getRadius: N,
  intersectLine: Y,
  intersectRay: X,
  intersectRayClosestSilhouette: I,
  intersectsRay: H,
  projectPoint: Q,
  setAltitudeAt: ot,
  setExtent: U,
  tmpSphere: at,
  union: et,
  wrap: z2
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  C,
  _2 as _,
  w,
  T,
  k2 as k,
  z2 as z,
  L3 as L,
  N,
  V,
  Z,
  X,
  Y,
  H,
  J,
  Q,
  W,
  st,
  et,
  at,
  ct
};
//# sourceMappingURL=chunk-ZE47C44H.js.map
