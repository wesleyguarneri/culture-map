import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  e
} from "./chunk-3ZXOUEQG.js";

// ../../../node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
function r(n) {
  return n;
}
function u(n = L) {
  return r([n[0], n[1], n[2], n[3]]);
}
function i(n) {
  return r([n[0], n[1], n[2], n[3]]);
}
function e2(n, t) {
  return n !== t && (n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3]), n;
}
function a(n, t, r2, i2, e3 = u()) {
  return e3[0] = n, e3[1] = t, e3[2] = r2, e3[3] = i2, e3;
}
function o(n, t = u()) {
  return t[0] = n.xmin, t[1] = n.ymin, t[2] = n.xmax, t[3] = n.ymax, t;
}
function c(n, r2) {
  return new w({
    xmin: n[0],
    ymin: n[1],
    xmax: n[2],
    ymax: n[3],
    spatialReference: r2
  });
}
function f(n, t) {
  t[0] < n[0] && (n[0] = t[0]), t[0] > n[2] && (n[2] = t[0]), t[1] < n[1] && (n[1] = t[1]), t[1] > n[3] && (n[3] = t[1]);
}
function m(n, t, r2) {
  if (null != t) {
    if ("length" in t) G(t) ? (r2[0] = Math.min(n[0], t[0]), r2[1] = Math.min(n[1], t[1]), r2[2] = Math.max(n[2], t[2]), r2[3] = Math.max(n[3], t[3])) : 2 !== t.length && 3 !== t.length || (r2[0] = Math.min(n[0], t[0]), r2[1] = Math.min(n[1], t[1]), r2[2] = Math.max(n[2], t[0]), r2[3] = Math.max(n[3], t[1]));
    else switch (t.type) {
      case "extent":
        r2[0] = Math.min(n[0], t.xmin), r2[1] = Math.min(n[1], t.ymin), r2[2] = Math.max(n[2], t.xmax), r2[3] = Math.max(n[3], t.ymax);
        break;
      case "point":
        r2[0] = Math.min(n[0], t.x), r2[1] = Math.min(n[1], t.y), r2[2] = Math.max(n[2], t.x), r2[3] = Math.max(n[3], t.y);
    }
  } else e2(r2, n);
}
function h(n, t, r2 = n) {
  const u2 = t.length;
  let i2 = n[0], e3 = n[1], a2 = n[2], o2 = n[3];
  for (let c2 = 0; c2 < u2; c2++) {
    const n2 = t[c2];
    i2 = Math.min(i2, n2[0]), e3 = Math.min(e3, n2[1]), a2 = Math.max(a2, n2[0]), o2 = Math.max(o2, n2[1]);
  }
  return r2[0] = i2, r2[1] = e3, r2[2] = a2, r2[3] = o2, r2;
}
function x(n) {
  for (let t = 0; t < 4; t++) if (!isFinite(n[t])) return false;
  return true;
}
function M(n) {
  return null == n || n[0] >= n[2] ? 0 : n[2] - n[0];
}
function s(n) {
  return null == n || n[1] >= n[3] ? 0 : n[3] - n[1];
}
function l(n) {
  return M(n) * s(n);
}
function y(n) {
  return M(n) > 0 && s(n) > 0;
}
function p(n, t = [0, 0]) {
  return t[0] = (n[0] + n[2]) / 2, t[1] = (n[1] + n[3]) / 2, t;
}
function b(n, t) {
  return w2(n, t[0], t[1]);
}
function g(n, t) {
  const r2 = t[3], u2 = 0.5 * (n[0] + n[2]), i2 = Math.abs(t[0] - u2), e3 = 0.5 * (n[2] - n[0]);
  if (i2 > r2 + e3) return false;
  const a2 = 0.5 * (n[1] + n[3]), o2 = 0.5 * (n[3] - n[1]), c2 = Math.abs(t[1] - a2);
  if (c2 > r2 + o2) return false;
  if (i2 < e3 || c2 < o2) return true;
  const f2 = i2 - e3, m2 = c2 - o2;
  return f2 * f2 + m2 * m2 <= r2 * r2;
}
function j(n, t, r2) {
  const u2 = n[0], i2 = n[1], e3 = n[2], a2 = n[3], {
    x: o2,
    y: c2
  } = t, {
    x: f2,
    y: m2
  } = r2, h2 = (n2, t2) => (m2 - c2) * n2 + (o2 - f2) * t2 + (f2 * c2 - o2 * m2) < 0, x2 = h2(u2, a2), M2 = h2(e3, a2), s2 = h2(e3, i2), l2 = h2(u2, i2);
  return !(x2 === M2 && M2 === s2 && s2 === l2 && l2 === x2 || o2 < u2 && f2 < u2 || o2 > e3 && f2 > e3 || c2 > a2 && m2 > a2 || c2 < i2 && m2 < i2);
}
function F(n, t) {
  return w2(n, t.x, t.y);
}
function w2(n, t, r2) {
  return t >= n[0] && r2 >= n[1] && t <= n[2] && r2 <= n[3];
}
function q(n, t, r2) {
  return t[0] >= n[0] - r2 && t[1] >= n[1] - r2 && t[0] <= n[2] + r2 && t[1] <= n[3] + r2;
}
function E(n, t) {
  return Math.max(t[0], n[0]) <= Math.min(t[2], n[2]) && Math.max(t[1], n[1]) <= Math.min(t[3], n[3]);
}
function R(n, t) {
  return t[0] >= n[0] && t[2] <= n[2] && t[1] >= n[1] && t[3] <= n[3];
}
function U(t, r2, u2) {
  if (null == r2) return e2(u2, t);
  const i2 = r2[0], a2 = r2[1], o2 = r2[2], c2 = r2[3];
  return u2[0] = e(t[0], i2, o2), u2[1] = e(t[1], a2, c2), u2[2] = e(t[2], i2, o2), u2[3] = e(t[3], a2, c2), u2;
}
function d(n, t) {
  const r2 = (n[0] + n[2]) / 2, u2 = (n[1] + n[3]) / 2, i2 = Math.max(Math.abs(t[0] - r2) - M(n) / 2, 0), e3 = Math.max(Math.abs(t[1] - u2) - s(n) / 2, 0);
  return Math.sqrt(i2 * i2 + e3 * e3);
}
function z(n, t, r2, u2 = n) {
  return u2[0] = n[0] + t, u2[1] = n[1] + r2, u2[2] = n[2] + t, u2[3] = n[3] + r2, u2;
}
function A(n, t, r2 = n) {
  return r2[0] = n[0] - t, r2[1] = n[1] - t, r2[2] = n[2] + t, r2[3] = n[3] + t, r2;
}
function D(n) {
  return n ? e2(n, K) : u(K);
}
function G(n) {
  return null != n && 4 === n.length;
}
function H(n) {
  return !(0 !== M(n) && isFinite(n[0]) || 0 !== s(n) && isFinite(n[1]));
}
function I(n, t) {
  return G(n) && G(t) ? n[0] === t[0] && n[1] === t[1] && n[2] === t[2] && n[3] === t[3] : n === t;
}
var J = r([-1 / 0, -1 / 0, 1 / 0, 1 / 0]);
var K = r([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
var L = r([0, 0, 0, 0]);
var N = r([0, 0, 1, 1]);

export {
  u,
  i,
  e2 as e,
  a,
  o,
  c,
  f,
  m,
  h,
  x,
  M,
  s,
  l,
  y,
  p,
  b,
  g,
  j,
  F,
  w2 as w,
  q,
  E,
  R,
  U,
  d,
  z,
  A,
  D,
  H,
  I,
  J,
  K
};
//# sourceMappingURL=chunk-IHVSZYZS.js.map
