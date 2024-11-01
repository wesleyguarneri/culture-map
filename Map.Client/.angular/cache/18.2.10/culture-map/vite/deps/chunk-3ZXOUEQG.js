import {
  o,
  s
} from "./chunk-AXVPJBVW.js";

// ../../../node_modules/@arcgis/core/core/mathUtils.js
var r = new Float32Array(1);
function u(t) {
  --t;
  for (let n = 1; n < 32; n <<= 1) t |= t >> n;
  return t + 1;
}
function e(t, n, r2) {
  return Math.min(Math.max(t, n), r2);
}
function i(t, n) {
  return 0 === n ? 0 : Math.round(t / n) * n;
}
function a(t) {
  return !(t & t - 1);
}
function o2(t) {
  return t--, t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, t |= t >> 16, ++t;
}
function c(t) {
  return 10 ** Math.ceil(Math.LOG10E * Math.log(t));
}
function f(t, n, r2) {
  return t + (n - t) * r2;
}
function s2(t, n, r2, u2, e2) {
  return f(u2, e2, (t - n) / (r2 - n));
}
function h(t) {
  return t * Math.PI / 180;
}
function M(t) {
  return 180 * t / Math.PI;
}
function b(t, n = 1e-6) {
  return (t < 0 ? -1 : 1) / Math.max(Math.abs(t), n);
}
function m(t) {
  return Math.acos(e(t, -1, 1));
}
function l(t) {
  return Math.asin(e(t, -1, 1));
}
function F(t, n, r2 = 1e-6) {
  if (t === n) return true;
  if (!Number.isFinite(t) || !Number.isFinite(n)) return false;
  return (t > n ? t - n : n - t) <= r2;
}
var N = new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT));
function g(t) {
  return N.setFloat64(0, t), N.getBigInt64(0);
}
function E(t) {
  return N.setBigInt64(0, t), N.getFloat64(0);
}
var B = BigInt("1000000");
var I = w(1);
function w(t) {
  const n = g(t = Math.abs(t)), r2 = E(n <= B ? B : n - B);
  return Math.abs(t - r2);
}
function x(t, n, r2 = I) {
  if (t === n) return true;
  if (!Number.isFinite(t) || !Number.isFinite(n)) return false;
  if (null != r2) {
    if (w(Math.min(Math.abs(t), Math.abs(n))) < r2) return Math.abs(t - n) <= r2;
  }
  const u2 = g(t), e2 = g(n);
  if (u2 < 0 != e2 < 0) return false;
  return !((u2 < e2 ? e2 - u2 : u2 - e2) > B);
}
function y(t, n, r2 = 1e-6) {
  if (t === n) return true;
  if (!Number.isFinite(t) || !Number.isFinite(n)) return false;
  const u2 = Math.abs(t - n), e2 = Math.abs(t), i2 = Math.abs(n);
  if (0 === t || 0 === n || e2 < 1e-12 && i2 < 1e-12) {
    if (u2 > 0.01 * r2) return false;
  } else if (u2 / (e2 + i2) > r2) return false;
  return true;
}
function A(t) {
  return P(Math.max(-j, Math.min(t, j)));
}
function P(t) {
  return r[0] = t, r[0];
}
function p(t, n, r2) {
  const u2 = e((r2 - t) / (n - t), 0, 1);
  return u2 * u2 * (3 - 2 * u2);
}
function L(r2, u2) {
  const e2 = s(r2), i2 = l(r2[2] / e2), a2 = Math.atan2(r2[1] / e2, r2[0] / e2);
  return o(u2, e2, i2, a2), u2;
}
function _(t) {
  const n = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], r2 = t[3] * t[3] + t[4] * t[4] + t[5] * t[5], u2 = t[6] * t[6] + t[7] * t[7] + t[8] * t[8];
  return !(F(n, 1) && F(r2, 1) && F(u2, 1));
}
function d(t, n) {
  return (t % n + n) % n;
}
var j = P(34028234663852886e22);

export {
  u,
  e,
  i,
  a,
  o2 as o,
  c,
  f,
  s2 as s,
  h,
  M,
  b,
  m,
  l,
  F,
  x,
  y,
  A,
  p,
  L,
  _,
  d,
  j
};
//# sourceMappingURL=chunk-3ZXOUEQG.js.map
