import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  u
} from "./chunk-GCVQXAS4.js";
import {
  w
} from "./chunk-RNF7VOCU.js";

// ../../../node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
function r(n) {
  return n;
}
function i(n = D) {
  return r([n[0], n[1], n[2], n[3], n[4], n[5]]);
}
function a(n, t, r2, a2, u2, e2, m = i()) {
  return m[0] = n, m[1] = t, m[2] = r2, m[3] = a2, m[4] = u2, m[5] = e2, m;
}
function e(t, r2) {
  const i2 = isFinite(t[2]) || isFinite(t[5]);
  return new w(i2 ? {
    xmin: t[0],
    xmax: t[3],
    ymin: t[1],
    ymax: t[4],
    zmin: t[2],
    zmax: t[5],
    spatialReference: r2
  } : {
    xmin: t[0],
    xmax: t[3],
    ymin: t[1],
    ymax: t[4],
    spatialReference: r2
  });
}
function o(n, t) {
  n[0] = Math.min(n[0], t[0]), n[1] = Math.min(n[1], t[1]), n[2] = Math.min(n[2], t[2]), n[3] = Math.max(n[3], t[3]), n[4] = Math.max(n[4], t[4]), n[5] = Math.max(n[5], t[5]);
}
function f(n, t) {
  n[0] = Math.min(n[0], t[0]), n[1] = Math.min(n[1], t[1]), n[3] = Math.max(n[3], t[2]), n[4] = Math.max(n[4], t[3]);
}
function h(n, t) {
  n[0] = Math.min(n[0], t[0]), n[1] = Math.min(n[1], t[1]), n[2] = Math.min(n[2], t[2]), n[3] = Math.max(n[3], t[0]), n[4] = Math.max(n[4], t[1]), n[5] = Math.max(n[5], t[2]);
}
function c(n, t, r2 = 0, i2 = t.length / 3) {
  let a2 = n[0], u2 = n[1], e2 = n[2], m = n[3], o2 = n[4], f2 = n[5];
  for (let h2 = 0; h2 < i2; h2++) a2 = Math.min(a2, t[r2 + 3 * h2]), u2 = Math.min(u2, t[r2 + 3 * h2 + 1]), e2 = Math.min(e2, t[r2 + 3 * h2 + 2]), m = Math.max(m, t[r2 + 3 * h2]), o2 = Math.max(o2, t[r2 + 3 * h2 + 1]), f2 = Math.max(f2, t[r2 + 3 * h2 + 2]);
  n[0] = a2, n[1] = u2, n[2] = e2, n[3] = m, n[4] = o2, n[5] = f2;
}
function x(n, t, r2) {
  const i2 = t.length;
  let a2 = n[0], u2 = n[1], e2 = n[2], m = n[3], o2 = n[4], f2 = n[5];
  if (r2) for (let h2 = 0; h2 < i2; h2++) {
    const n2 = t[h2];
    a2 = Math.min(a2, n2[0]), u2 = Math.min(u2, n2[1]), e2 = Math.min(e2, n2[2]), m = Math.max(m, n2[0]), o2 = Math.max(o2, n2[1]), f2 = Math.max(f2, n2[2]);
  }
  else for (let h2 = 0; h2 < i2; h2++) {
    const n2 = t[h2];
    a2 = Math.min(a2, n2[0]), u2 = Math.min(u2, n2[1]), m = Math.max(m, n2[0]), o2 = Math.max(o2, n2[1]);
  }
  n[0] = a2, n[1] = u2, n[2] = e2, n[3] = m, n[4] = o2, n[5] = f2;
}
function l(n) {
  for (let t = 0; t < 6; t++) if (!isFinite(n[t])) return false;
  return true;
}
function s(n) {
  return n[0] >= n[3] ? 0 : n[3] - n[0];
}
function I(n) {
  return n[1] >= n[4] ? 0 : n[4] - n[1];
}
function N(n) {
  return n[2] >= n[5] ? 0 : n[5] - n[2];
}
function T(n) {
  const t = s(n), r2 = N(n), i2 = I(n);
  return Math.sqrt(t * t + r2 * r2 + i2 * i2);
}
function E(n, t = [0, 0, 0]) {
  return t[0] = n[0] + s(n) / 2, t[1] = n[1] + I(n) / 2, t[2] = n[2] + N(n) / 2, t;
}
function F(n, t = [0, 0, 0]) {
  return t[0] = s(n), t[1] = I(n), t[2] = N(n), t;
}
function y(n, t) {
  return t[0] >= n[0] && t[1] >= n[1] && t[2] >= n[2] && t[0] <= n[3] && t[1] <= n[4] && t[2] <= n[5];
}
function b(n, t) {
  return t[0] >= n[0] && t[1] >= n[1] && t[2] >= n[2] && t[3] <= n[3] && t[4] <= n[4] && t[5] <= n[5];
}
function z(n, t) {
  return Math.max(t[0], n[0]) <= Math.min(t[3], n[3]) && Math.max(t[1], n[1]) <= Math.min(t[4], n[4]) && Math.max(t[2], n[2]) <= Math.min(t[5], n[5]);
}
function V(n, t) {
  return null == t || z(n, t);
}
function Y(n, t, r2, i2, a2 = n) {
  return a2[0] = n[0] + t, a2[1] = n[1] + r2, a2[2] = n[2] + i2, a2[3] = n[3] + t, a2[4] = n[4] + r2, a2[5] = n[5] + i2, a2;
}
function _(n, t, r2 = n) {
  const i2 = n[0] + s(n) / 2, a2 = n[1] + I(n) / 2, u2 = n[2] + N(n) / 2;
  return r2[0] = i2 + (n[0] - i2) * t, r2[1] = a2 + (n[1] - a2) * t, r2[2] = u2 + (n[2] - u2) * t, r2[3] = i2 + (n[3] - i2) * t, r2[4] = a2 + (n[4] - a2) * t, r2[5] = u2 + (n[5] - u2) * t, r2;
}
function R(n, t) {
  return t[0] = n[0], t[1] = n[1], t[2] = n[2], t;
}
function A(n, t, r2 = n) {
  return r2[0] = t[0], r2[1] = t[1], r2[2] = t[2], r2 !== n && (r2[3] = n[3], r2[4] = n[4], r2[5] = n[5]), r2;
}
function G(n, t, r2 = n) {
  return r2[3] = t[0], r2[4] = t[1], r2[5] = t[2], r2 !== n && (r2[0] = n[0], r2[1] = n[1], r2[2] = n[2]), n;
}
function O(n, t) {
  return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n;
}
function P(n) {
  return n ? O(n, C) : i(C);
}
function S(n, r2) {
  return r2 || (r2 = u()), r2[0] = n[0], r2[1] = n[1], r2[2] = n[3], r2[3] = n[4], r2;
}
function Z(n, t) {
  return n[0] = t[0], n[1] = t[1], n[2] = Number.NEGATIVE_INFINITY, n[3] = t[2], n[4] = t[3], n[5] = Number.POSITIVE_INFINITY, n;
}
function d(n, t, r2, i2, a2) {
  return n[0] = t, n[1] = r2, n[2] = Number.NEGATIVE_INFINITY, n[3] = i2, n[4] = a2, n[5] = Number.POSITIVE_INFINITY, n;
}
function q(n) {
  return 6 === n.length;
}
function w2(n) {
  return 0 === s(n) && 0 === I(n) && 0 === N(n);
}
function B(n, t, r2) {
  if (null == n || null == t) return n === t;
  if (!q(n) || !q(t)) return false;
  if (r2) {
    for (let i2 = 0; i2 < n.length; i2++) if (!r2(n[i2], t[i2])) return false;
  } else for (let i2 = 0; i2 < n.length; i2++) if (n[i2] !== t[i2]) return false;
  return true;
}
function k(n, t, r2, i2, u2, e2) {
  return a(n, t, r2, i2, u2, e2, H);
}
var v = r([-1 / 0, -1 / 0, -1 / 0, 1 / 0, 1 / 0, 1 / 0]);
var C = r([1 / 0, 1 / 0, 1 / 0, -1 / 0, -1 / 0, -1 / 0]);
var D = r([0, 0, 0, 0, 0, 0]);
var H = i();

export {
  i,
  a,
  e,
  o,
  f,
  h,
  c,
  x,
  l,
  s,
  I,
  N,
  T,
  E,
  F,
  y,
  b,
  z,
  V,
  Y,
  _,
  R,
  A,
  G,
  O,
  P,
  S,
  Z,
  d,
  q,
  w2 as w,
  B,
  k,
  v,
  C,
  D
};
//# sourceMappingURL=chunk-VOOO6FU5.js.map
