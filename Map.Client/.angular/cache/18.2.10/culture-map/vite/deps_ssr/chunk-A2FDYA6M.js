import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e
} from "./chunk-MHPE4SZA.js";

// ../../../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js
function n(t, n2) {
  return t[0] = n2[0], t[1] = n2[1], t[2] = n2[2], t[3] = n2[4], t[4] = n2[5], t[5] = n2[6], t[6] = n2[8], t[7] = n2[9], t[8] = n2[10], t;
}
function a(t, n2) {
  return t[0] = n2[0], t[1] = n2[1], t[2] = n2[2], t[3] = n2[3], t[4] = n2[4], t[5] = n2[5], t[6] = n2[6], t[7] = n2[7], t[8] = n2[8], t;
}
function r(t, n2, a2, r2, o2, u2, s2, c2, e3, i2) {
  return t[0] = n2, t[1] = a2, t[2] = r2, t[3] = o2, t[4] = u2, t[5] = s2, t[6] = c2, t[7] = e3, t[8] = i2, t;
}
function o(t) {
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
}
function u(t, n2) {
  if (t === n2) {
    const a2 = n2[1], r2 = n2[2], o2 = n2[5];
    t[1] = n2[3], t[2] = n2[6], t[3] = a2, t[5] = n2[7], t[6] = r2, t[7] = o2;
  } else t[0] = n2[0], t[1] = n2[3], t[2] = n2[6], t[3] = n2[1], t[4] = n2[4], t[5] = n2[7], t[6] = n2[2], t[7] = n2[5], t[8] = n2[8];
  return t;
}
function s(t, n2) {
  const a2 = n2[0], r2 = n2[1], o2 = n2[2], u2 = n2[3], s2 = n2[4], c2 = n2[5], e3 = n2[6], i2 = n2[7], M2 = n2[8], h2 = M2 * s2 - c2 * i2, f2 = -M2 * u2 + c2 * e3, b2 = i2 * u2 - s2 * e3;
  let l2 = a2 * h2 + r2 * f2 + o2 * b2;
  return l2 ? (l2 = 1 / l2, t[0] = h2 * l2, t[1] = (-M2 * r2 + o2 * i2) * l2, t[2] = (c2 * r2 - o2 * s2) * l2, t[3] = f2 * l2, t[4] = (M2 * a2 - o2 * e3) * l2, t[5] = (-c2 * a2 + o2 * u2) * l2, t[6] = b2 * l2, t[7] = (-i2 * a2 + r2 * e3) * l2, t[8] = (s2 * a2 - r2 * u2) * l2, t) : null;
}
function c(t, n2) {
  const a2 = n2[0], r2 = n2[1], o2 = n2[2], u2 = n2[3], s2 = n2[4], c2 = n2[5], e3 = n2[6], i2 = n2[7], M2 = n2[8];
  return t[0] = s2 * M2 - c2 * i2, t[1] = o2 * i2 - r2 * M2, t[2] = r2 * c2 - o2 * s2, t[3] = c2 * e3 - u2 * M2, t[4] = a2 * M2 - o2 * e3, t[5] = o2 * u2 - a2 * c2, t[6] = u2 * i2 - s2 * e3, t[7] = r2 * e3 - a2 * i2, t[8] = a2 * s2 - r2 * u2, t;
}
function e2(t) {
  const n2 = t[0], a2 = t[1], r2 = t[2], o2 = t[3], u2 = t[4], s2 = t[5], c2 = t[6], e3 = t[7], i2 = t[8];
  return n2 * (i2 * u2 - s2 * e3) + a2 * (-i2 * o2 + s2 * c2) + r2 * (e3 * o2 - u2 * c2);
}
function i(t, n2, a2) {
  const r2 = n2[0], o2 = n2[1], u2 = n2[2], s2 = n2[3], c2 = n2[4], e3 = n2[5], i2 = n2[6], M2 = n2[7], h2 = n2[8], f2 = a2[0], b2 = a2[1], l2 = a2[2], m2 = a2[3], d2 = a2[4], x2 = a2[5], p2 = a2[6], y2 = a2[7], j2 = a2[8];
  return t[0] = f2 * r2 + b2 * s2 + l2 * i2, t[1] = f2 * o2 + b2 * c2 + l2 * M2, t[2] = f2 * u2 + b2 * e3 + l2 * h2, t[3] = m2 * r2 + d2 * s2 + x2 * i2, t[4] = m2 * o2 + d2 * c2 + x2 * M2, t[5] = m2 * u2 + d2 * e3 + x2 * h2, t[6] = p2 * r2 + y2 * s2 + j2 * i2, t[7] = p2 * o2 + y2 * c2 + j2 * M2, t[8] = p2 * u2 + y2 * e3 + j2 * h2, t;
}
function M(t, n2, a2) {
  const r2 = n2[0], o2 = n2[1], u2 = n2[2], s2 = n2[3], c2 = n2[4], e3 = n2[5], i2 = n2[6], M2 = n2[7], h2 = n2[8], f2 = a2[0], b2 = a2[1];
  return t[0] = r2, t[1] = o2, t[2] = u2, t[3] = s2, t[4] = c2, t[5] = e3, t[6] = f2 * r2 + b2 * s2 + i2, t[7] = f2 * o2 + b2 * c2 + M2, t[8] = f2 * u2 + b2 * e3 + h2, t;
}
function h(t, n2, a2) {
  const r2 = n2[0], o2 = n2[1], u2 = n2[2], s2 = n2[3], c2 = n2[4], e3 = n2[5], i2 = n2[6], M2 = n2[7], h2 = n2[8], f2 = Math.sin(a2), b2 = Math.cos(a2);
  return t[0] = b2 * r2 + f2 * s2, t[1] = b2 * o2 + f2 * c2, t[2] = b2 * u2 + f2 * e3, t[3] = b2 * s2 - f2 * r2, t[4] = b2 * c2 - f2 * o2, t[5] = b2 * e3 - f2 * u2, t[6] = i2, t[7] = M2, t[8] = h2, t;
}
function f(t, n2, a2) {
  const r2 = a2[0], o2 = a2[1], u2 = a2[2];
  return t[0] = r2 * n2[0], t[1] = r2 * n2[1], t[2] = r2 * n2[2], t[3] = o2 * n2[3], t[4] = o2 * n2[4], t[5] = o2 * n2[5], t[6] = u2 * n2[6], t[7] = u2 * n2[7], t[8] = u2 * n2[8], t;
}
function b(t, n2, a2) {
  const r2 = a2[0], o2 = a2[1];
  return t[0] = r2 * n2[0], t[1] = r2 * n2[1], t[2] = r2 * n2[2], t[3] = o2 * n2[3], t[4] = o2 * n2[4], t[5] = o2 * n2[5], t;
}
function l(t, n2) {
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = n2[0], t[7] = n2[1], t[8] = 1, t;
}
function m(t, n2) {
  const a2 = Math.sin(n2), r2 = Math.cos(n2);
  return t[0] = r2, t[1] = a2, t[2] = 0, t[3] = -a2, t[4] = r2, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
}
function d(t, n2) {
  return t[0] = n2[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = n2[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
}
function x(t, n2) {
  return t[0] = n2[0], t[1] = n2[1], t[2] = 0, t[3] = n2[2], t[4] = n2[3], t[5] = 0, t[6] = n2[4], t[7] = n2[5], t[8] = 1, t;
}
function p(t, n2) {
  const a2 = n2[0], r2 = n2[1], o2 = n2[2], u2 = n2[3], s2 = a2 + a2, c2 = r2 + r2, e3 = o2 + o2, i2 = a2 * s2, M2 = r2 * s2, h2 = r2 * c2, f2 = o2 * s2, b2 = o2 * c2, l2 = o2 * e3, m2 = u2 * s2, d2 = u2 * c2, x2 = u2 * e3;
  return t[0] = 1 - h2 - l2, t[3] = M2 - x2, t[6] = f2 + d2, t[1] = M2 + x2, t[4] = 1 - i2 - l2, t[7] = b2 - m2, t[2] = f2 - d2, t[5] = b2 + m2, t[8] = 1 - i2 - h2, t;
}
function y(t, n2) {
  const a2 = n2[0], r2 = n2[1], o2 = n2[2], u2 = n2[4], s2 = n2[5], c2 = n2[6], e3 = n2[8], i2 = n2[9], M2 = n2[10], h2 = M2 * s2 - c2 * i2, f2 = -M2 * u2 + c2 * e3, b2 = i2 * u2 - s2 * e3, l2 = a2 * h2 + r2 * f2 + o2 * b2;
  if (!l2) return null;
  const m2 = 1 / l2;
  return t[0] = h2 * m2, t[1] = (-M2 * r2 + o2 * i2) * m2, t[2] = (c2 * r2 - o2 * s2) * m2, t[3] = f2 * m2, t[4] = (M2 * a2 - o2 * e3) * m2, t[5] = (-c2 * a2 + o2 * u2) * m2, t[6] = b2 * m2, t[7] = (-i2 * a2 + r2 * e3) * m2, t[8] = (s2 * a2 - r2 * u2) * m2, t;
}
function j(t, n2) {
  const a2 = n2[0], r2 = n2[1], o2 = n2[2], u2 = n2[3], s2 = n2[4], c2 = n2[5], e3 = n2[6], i2 = n2[7], M2 = n2[8], h2 = n2[9], f2 = n2[10], b2 = n2[11], l2 = n2[12], m2 = n2[13], d2 = n2[14], x2 = n2[15], p2 = a2 * c2 - r2 * s2, y2 = a2 * e3 - o2 * s2, j2 = a2 * i2 - u2 * s2, S2 = r2 * e3 - o2 * c2, g2 = r2 * i2 - u2 * c2, _2 = o2 * i2 - u2 * e3, q2 = M2 * m2 - h2 * l2, O2 = M2 * d2 - f2 * l2, v2 = M2 * x2 - b2 * l2, A2 = h2 * d2 - f2 * m2, F2 = h2 * x2 - b2 * m2, T2 = f2 * x2 - b2 * d2;
  let z2 = p2 * T2 - y2 * F2 + j2 * A2 + S2 * v2 - g2 * O2 + _2 * q2;
  return z2 ? (z2 = 1 / z2, t[0] = (c2 * T2 - e3 * F2 + i2 * A2) * z2, t[1] = (e3 * v2 - s2 * T2 - i2 * O2) * z2, t[2] = (s2 * F2 - c2 * v2 + i2 * q2) * z2, t[3] = (o2 * F2 - r2 * T2 - u2 * A2) * z2, t[4] = (a2 * T2 - o2 * v2 + u2 * O2) * z2, t[5] = (r2 * v2 - a2 * F2 - u2 * q2) * z2, t[6] = (m2 * _2 - d2 * g2 + x2 * S2) * z2, t[7] = (d2 * j2 - l2 * _2 - x2 * y2) * z2, t[8] = (l2 * g2 - m2 * j2 + x2 * p2) * z2, t) : null;
}
function S(t, n2, a2) {
  return t[0] = 2 / n2, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / a2, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t;
}
function g(t) {
  return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")";
}
function _(t) {
  return Math.sqrt(t[0] ** 2 + t[1] ** 2 + t[2] ** 2 + t[3] ** 2 + t[4] ** 2 + t[5] ** 2 + t[6] ** 2 + t[7] ** 2 + t[8] ** 2);
}
function q(t, n2, a2) {
  return t[0] = n2[0] + a2[0], t[1] = n2[1] + a2[1], t[2] = n2[2] + a2[2], t[3] = n2[3] + a2[3], t[4] = n2[4] + a2[4], t[5] = n2[5] + a2[5], t[6] = n2[6] + a2[6], t[7] = n2[7] + a2[7], t[8] = n2[8] + a2[8], t;
}
function O(t, n2, a2) {
  return t[0] = n2[0] - a2[0], t[1] = n2[1] - a2[1], t[2] = n2[2] - a2[2], t[3] = n2[3] - a2[3], t[4] = n2[4] - a2[4], t[5] = n2[5] - a2[5], t[6] = n2[6] - a2[6], t[7] = n2[7] - a2[7], t[8] = n2[8] - a2[8], t;
}
function v(t, n2, a2) {
  return t[0] = n2[0] * a2, t[1] = n2[1] * a2, t[2] = n2[2] * a2, t[3] = n2[3] * a2, t[4] = n2[4] * a2, t[5] = n2[5] * a2, t[6] = n2[6] * a2, t[7] = n2[7] * a2, t[8] = n2[8] * a2, t;
}
function A(t, n2, a2, r2) {
  return t[0] = n2[0] + a2[0] * r2, t[1] = n2[1] + a2[1] * r2, t[2] = n2[2] + a2[2] * r2, t[3] = n2[3] + a2[3] * r2, t[4] = n2[4] + a2[4] * r2, t[5] = n2[5] + a2[5] * r2, t[6] = n2[6] + a2[6] * r2, t[7] = n2[7] + a2[7] * r2, t[8] = n2[8] + a2[8] * r2, t;
}
function F(t, n2) {
  return t[0] === n2[0] && t[1] === n2[1] && t[2] === n2[2] && t[3] === n2[3] && t[4] === n2[4] && t[5] === n2[5] && t[6] === n2[6] && t[7] === n2[7] && t[8] === n2[8];
}
function T(n2, a2) {
  const r2 = n2[0], o2 = n2[1], u2 = n2[2], s2 = n2[3], c2 = n2[4], e3 = n2[5], i2 = n2[6], M2 = n2[7], h2 = n2[8], f2 = a2[0], b2 = a2[1], l2 = a2[2], m2 = a2[3], d2 = a2[4], x2 = a2[5], p2 = a2[6], y2 = a2[7], j2 = a2[8], S2 = e();
  return Math.abs(r2 - f2) <= S2 * Math.max(1, Math.abs(r2), Math.abs(f2)) && Math.abs(o2 - b2) <= S2 * Math.max(1, Math.abs(o2), Math.abs(b2)) && Math.abs(u2 - l2) <= S2 * Math.max(1, Math.abs(u2), Math.abs(l2)) && Math.abs(s2 - m2) <= S2 * Math.max(1, Math.abs(s2), Math.abs(m2)) && Math.abs(c2 - d2) <= S2 * Math.max(1, Math.abs(c2), Math.abs(d2)) && Math.abs(e3 - x2) <= S2 * Math.max(1, Math.abs(e3), Math.abs(x2)) && Math.abs(i2 - p2) <= S2 * Math.max(1, Math.abs(i2), Math.abs(p2)) && Math.abs(M2 - y2) <= S2 * Math.max(1, Math.abs(M2), Math.abs(y2)) && Math.abs(h2 - j2) <= S2 * Math.max(1, Math.abs(h2), Math.abs(j2));
}
function z(n2) {
  const a2 = e(), r2 = n2[0], o2 = n2[1], u2 = n2[2], s2 = n2[3], c2 = n2[4], e3 = n2[5], i2 = n2[6], M2 = n2[7], h2 = n2[8];
  return Math.abs(1 - (r2 * r2 + s2 * s2 + i2 * i2)) <= a2 && Math.abs(1 - (o2 * o2 + c2 * c2 + M2 * M2)) <= a2 && Math.abs(1 - (u2 * u2 + e3 * e3 + h2 * h2)) <= a2;
}
var B = i;
var E = O;
var L = Object.freeze(Object.defineProperty({
  __proto__: null,
  add: q,
  adjoint: c,
  copy: a,
  determinant: e2,
  equals: T,
  exactEquals: F,
  frob: _,
  fromMat2d: x,
  fromMat4: n,
  fromQuat: p,
  fromRotation: m,
  fromScaling: d,
  fromTranslation: l,
  identity: o,
  invert: s,
  isOrthoNormal: z,
  mul: B,
  multiply: i,
  multiplyScalar: v,
  multiplyScalarAndAdd: A,
  normalFromMat4: j,
  normalFromMat4Legacy: y,
  projection: S,
  rotate: h,
  scale: f,
  scaleByVec2: b,
  set: r,
  str: g,
  sub: E,
  subtract: O,
  translate: M,
  transpose: u
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  n,
  r,
  o,
  u,
  s,
  c,
  i,
  M,
  h,
  f,
  b,
  l,
  p,
  y,
  j,
  B
};
//# sourceMappingURL=chunk-A2FDYA6M.js.map