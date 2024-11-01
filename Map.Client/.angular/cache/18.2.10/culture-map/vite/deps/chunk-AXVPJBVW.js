import {
  n
} from "./chunk-OXEPWRM7.js";
import {
  e,
  o
} from "./chunk-POILQGXA.js";

// ../../../node_modules/@arcgis/core/chunks/vec32.js
function s(t) {
  const n2 = t[0], a = t[1], s2 = t[2];
  return Math.sqrt(n2 * n2 + a * a + s2 * s2);
}
function r(t, n2) {
  return t[0] = n2[0], t[1] = n2[1], t[2] = n2[2], t;
}
function o2(t, n2, a, s2) {
  return t[0] = n2, t[1] = a, t[2] = s2, t;
}
function u(t, n2, a) {
  return t[0] = n2[0] + a[0], t[1] = n2[1] + a[1], t[2] = n2[2] + a[2], t;
}
function e2(t, n2, a) {
  return t[0] = n2[0] - a[0], t[1] = n2[1] - a[1], t[2] = n2[2] - a[2], t;
}
function c(t, n2, a) {
  return t[0] = n2[0] * a[0], t[1] = n2[1] * a[1], t[2] = n2[2] * a[2], t;
}
function i(t, n2, a) {
  return t[0] = n2[0] / a[0], t[1] = n2[1] / a[1], t[2] = n2[2] / a[2], t;
}
function h(t, n2) {
  return t[0] = Math.ceil(n2[0]), t[1] = Math.ceil(n2[1]), t[2] = Math.ceil(n2[2]), t;
}
function M(t, n2) {
  return t[0] = Math.floor(n2[0]), t[1] = Math.floor(n2[1]), t[2] = Math.floor(n2[2]), t;
}
function f(t, n2) {
  return t[0] = Math.abs(n2[0]), t[1] = Math.abs(n2[1]), t[2] = Math.abs(n2[2]), t;
}
function l(t, n2) {
  return t[0] = Math.sign(n2[0]), t[1] = Math.sign(n2[1]), t[2] = Math.sign(n2[2]), t;
}
function m(t, n2, a) {
  return t[0] = Math.min(n2[0], a[0]), t[1] = Math.min(n2[1], a[1]), t[2] = Math.min(n2[2], a[2]), t;
}
function b(t, n2, a) {
  return t[0] = Math.max(n2[0], a[0]), t[1] = Math.max(n2[1], a[1]), t[2] = Math.max(n2[2], a[2]), t;
}
function d(t, n2) {
  return t[0] = Math.round(n2[0]), t[1] = Math.round(n2[1]), t[2] = Math.round(n2[2]), t;
}
function g(t, n2, a) {
  return t[0] = n2[0] * a, t[1] = n2[1] * a, t[2] = n2[2] * a, t;
}
function q(t, n2, a, s2) {
  return t[0] = n2[0] + a[0] * s2, t[1] = n2[1] + a[1] * s2, t[2] = n2[2] + a[2] * s2, t;
}
function x(t, n2) {
  const a = n2[0] - t[0], s2 = n2[1] - t[1], r2 = n2[2] - t[2];
  return Math.sqrt(a * a + s2 * s2 + r2 * r2);
}
function p(t, n2) {
  const a = n2[0] - t[0], s2 = n2[1] - t[1], r2 = n2[2] - t[2];
  return a * a + s2 * s2 + r2 * r2;
}
function v(t) {
  const n2 = t[0], a = t[1], s2 = t[2];
  return n2 * n2 + a * a + s2 * s2;
}
function j(t, n2) {
  return t[0] = -n2[0], t[1] = -n2[1], t[2] = -n2[2], t;
}
function y(t, n2) {
  return t[0] = 1 / n2[0], t[1] = 1 / n2[1], t[2] = 1 / n2[2], t;
}
function z(t, n2) {
  const a = n2[0], s2 = n2[1], r2 = n2[2];
  let o3 = a * a + s2 * s2 + r2 * r2;
  return o3 > 0 && (o3 = 1 / Math.sqrt(o3), t[0] = n2[0] * o3, t[1] = n2[1] * o3, t[2] = n2[2] * o3), t;
}
function P(t, n2) {
  return t[0] * n2[0] + t[1] * n2[1] + t[2] * n2[2];
}
function _(t, n2, a) {
  const s2 = n2[0], r2 = n2[1], o3 = n2[2], u2 = a[0], e3 = a[1], c2 = a[2];
  return t[0] = r2 * c2 - o3 * e3, t[1] = o3 * u2 - s2 * c2, t[2] = s2 * e3 - r2 * u2, t;
}
function A(t, n2, a, s2) {
  const r2 = n2[0], o3 = n2[1], u2 = n2[2];
  return t[0] = r2 + s2 * (a[0] - r2), t[1] = o3 + s2 * (a[1] - o3), t[2] = u2 + s2 * (a[2] - u2), t;
}
function D(t, n2, a, s2, r2, o3) {
  const u2 = o3 * o3, e3 = u2 * (2 * o3 - 3) + 1, c2 = u2 * (o3 - 2) + o3, i2 = u2 * (o3 - 1), h2 = u2 * (3 - 2 * o3);
  return t[0] = n2[0] * e3 + a[0] * c2 + s2[0] * i2 + r2[0] * h2, t[1] = n2[1] * e3 + a[1] * c2 + s2[1] * i2 + r2[1] * h2, t[2] = n2[2] * e3 + a[2] * c2 + s2[2] * i2 + r2[2] * h2, t;
}
function I(t, n2, a, s2, r2, o3) {
  const u2 = 1 - o3, e3 = u2 * u2, c2 = o3 * o3, i2 = e3 * u2, h2 = 3 * o3 * e3, M2 = 3 * c2 * u2, f2 = c2 * o3;
  return t[0] = n2[0] * i2 + a[0] * h2 + s2[0] * M2 + r2[0] * f2, t[1] = n2[1] * i2 + a[1] * h2 + s2[1] * M2 + r2[1] * f2, t[2] = n2[2] * i2 + a[2] * h2 + s2[2] * M2 + r2[2] * f2, t;
}
function L(t, n2) {
  n2 = n2 || 1;
  const s2 = o, r2 = 2 * s2() * Math.PI, o3 = 2 * s2() - 1, u2 = Math.sqrt(1 - o3 * o3) * n2;
  return t[0] = Math.cos(r2) * u2, t[1] = Math.sin(r2) * u2, t[2] = o3 * n2, t;
}
function O(t, n2, a) {
  const s2 = n2[0], r2 = n2[1], o3 = n2[2];
  return t[0] = a[0] * s2 + a[4] * r2 + a[8] * o3 + a[12], t[1] = a[1] * s2 + a[5] * r2 + a[9] * o3 + a[13], t[2] = a[2] * s2 + a[6] * r2 + a[10] * o3 + a[14], t;
}
function S(t, n2, a) {
  const s2 = n2[0], r2 = n2[1], o3 = n2[2];
  return t[0] = s2 * a[0] + r2 * a[3] + o3 * a[6], t[1] = s2 * a[1] + r2 * a[4] + o3 * a[7], t[2] = s2 * a[2] + r2 * a[5] + o3 * a[8], t;
}
function E(t, n2, a) {
  const s2 = a[0], r2 = a[1], o3 = a[2], u2 = a[3], e3 = n2[0], c2 = n2[1], i2 = n2[2], h2 = r2 * i2 - o3 * c2, M2 = o3 * e3 - s2 * i2, f2 = s2 * c2 - r2 * e3, l2 = r2 * f2 - o3 * M2, m2 = o3 * h2 - s2 * f2, b2 = s2 * M2 - r2 * h2, d2 = 2 * u2;
  return t[0] = e3 + h2 * d2 + 2 * l2, t[1] = c2 + M2 * d2 + 2 * m2, t[2] = i2 + f2 * d2 + 2 * b2, t;
}
function Q(t, n2, a, s2) {
  const r2 = [], o3 = [];
  return r2[0] = n2[0] - a[0], r2[1] = n2[1] - a[1], r2[2] = n2[2] - a[2], o3[0] = r2[0], o3[1] = r2[1] * Math.cos(s2) - r2[2] * Math.sin(s2), o3[2] = r2[1] * Math.sin(s2) + r2[2] * Math.cos(s2), t[0] = o3[0] + a[0], t[1] = o3[1] + a[1], t[2] = o3[2] + a[2], t;
}
function T(t, n2, a, s2) {
  const r2 = [], o3 = [];
  return r2[0] = n2[0] - a[0], r2[1] = n2[1] - a[1], r2[2] = n2[2] - a[2], o3[0] = r2[2] * Math.sin(s2) + r2[0] * Math.cos(s2), o3[1] = r2[1], o3[2] = r2[2] * Math.cos(s2) - r2[0] * Math.sin(s2), t[0] = o3[0] + a[0], t[1] = o3[1] + a[1], t[2] = o3[2] + a[2], t;
}
function k(t, n2, a, s2) {
  const r2 = [], o3 = [];
  return r2[0] = n2[0] - a[0], r2[1] = n2[1] - a[1], r2[2] = n2[2] - a[2], o3[0] = r2[0] * Math.cos(s2) - r2[1] * Math.sin(s2), o3[1] = r2[0] * Math.sin(s2) + r2[1] * Math.cos(s2), o3[2] = r2[2], t[0] = o3[0] + a[0], t[1] = o3[1] + a[1], t[2] = o3[2] + a[2], t;
}
function w(t, n2) {
  z(B, t), z(C, n2);
  const a = P(B, C);
  return a > 1 ? 0 : a < -1 ? Math.PI : Math.acos(a);
}
var B = n();
var C = n();
function F(t) {
  return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
}
function G(t, n2) {
  return t[0] === n2[0] && t[1] === n2[1] && t[2] === n2[2];
}
function H(t, a) {
  if (t === a) return true;
  const s2 = t[0], r2 = t[1], o3 = t[2], u2 = a[0], e3 = a[1], c2 = a[2], i2 = e();
  return Math.abs(s2 - u2) <= i2 * Math.max(1, Math.abs(s2), Math.abs(u2)) && Math.abs(r2 - e3) <= i2 * Math.max(1, Math.abs(r2), Math.abs(e3)) && Math.abs(o3 - c2) <= i2 * Math.max(1, Math.abs(o3), Math.abs(c2));
}
function J(t, n2, a) {
  const s2 = a[0] - n2[0], r2 = a[1] - n2[1], o3 = a[2] - n2[2];
  let u2 = s2 * s2 + r2 * r2 + o3 * o3;
  return u2 > 0 ? (u2 = 1 / Math.sqrt(u2), t[0] = s2 * u2, t[1] = r2 * u2, t[2] = o3 * u2, t) : (t[0] = 0, t[1] = 0, t[2] = 0, t);
}
var K = e2;
var N = c;
var R = i;
var U = x;
var X = p;
var Y = s;
var Z = v;
var V = Object.freeze(Object.defineProperty({
  __proto__: null,
  abs: f,
  add: u,
  angle: w,
  bezier: I,
  ceil: h,
  copy: r,
  cross: _,
  direction: J,
  dist: U,
  distance: x,
  div: R,
  divide: i,
  dot: P,
  equals: H,
  exactEquals: G,
  floor: M,
  hermite: D,
  inverse: y,
  len: Y,
  length: s,
  lerp: A,
  max: b,
  min: m,
  mul: N,
  multiply: c,
  negate: j,
  normalize: z,
  random: L,
  rotateX: Q,
  rotateY: T,
  rotateZ: k,
  round: d,
  scale: g,
  scaleAndAdd: q,
  set: o2,
  sign: l,
  sqrDist: X,
  sqrLen: Z,
  squaredDistance: p,
  squaredLength: v,
  str: F,
  sub: K,
  subtract: e2,
  transformMat3: S,
  transformMat4: O,
  transformQuat: E
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  s,
  r,
  o2 as o,
  u,
  e2 as e,
  c,
  i,
  M,
  f,
  l,
  m,
  b,
  g,
  q,
  x,
  p,
  v,
  j,
  y,
  z,
  P,
  _,
  A,
  O,
  S,
  E,
  k,
  w,
  G,
  H,
  J,
  K,
  U,
  X,
  Y,
  Z,
  V
};
//# sourceMappingURL=chunk-AXVPJBVW.js.map
