import {
  I
} from "./chunk-WG5JLPNN.js";
import {
  e as e3
} from "./chunk-LQTSBE7P.js";
import {
  n as n3,
  r as r3,
  t as t5
} from "./chunk-DLRYNII2.js";
import {
  a,
  t as t3
} from "./chunk-WN3YAMRZ.js";
import {
  A,
  l as l2
} from "./chunk-WU7FVYT7.js";
import {
  s
} from "./chunk-SYYDVGKY.js";
import {
  t as t4
} from "./chunk-62WUYJJN.js";
import {
  l
} from "./chunk-5GIS2C3K.js";
import {
  t as t2
} from "./chunk-RDQF44TE.js";
import {
  E,
  S,
  j
} from "./chunk-N4KQPPPI.js";
import {
  e as e2
} from "./chunk-4MMTPKY4.js";
import {
  n as n2
} from "./chunk-DY7FJHTG.js";
import {
  O,
  P,
  _,
  e,
  g,
  o,
  r as r2,
  u,
  z
} from "./chunk-AXVPJBVW.js";
import {
  n,
  r,
  t
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/BufferVectorMath.js
var n4;
!function(n5) {
  function t6(n6, t7) {
    const c2 = n6[t7], o3 = n6[t7 + 1], r5 = n6[t7 + 2];
    return Math.sqrt(c2 * c2 + o3 * o3 + r5 * r5);
  }
  function c(n6, t7) {
    const c2 = n6[t7], o3 = n6[t7 + 1], r5 = n6[t7 + 2], u3 = 1 / Math.sqrt(c2 * c2 + o3 * o3 + r5 * r5);
    n6[t7] *= u3, n6[t7 + 1] *= u3, n6[t7 + 2] *= u3;
  }
  function o2(n6, t7, c2) {
    n6[t7] *= c2, n6[t7 + 1] *= c2, n6[t7 + 2] *= c2;
  }
  function r4(n6, t7, c2, o3, r5, u3 = t7) {
    (r5 = r5 || n6)[u3] = n6[t7] + c2[o3], r5[u3 + 1] = n6[t7 + 1] + c2[o3 + 1], r5[u3 + 2] = n6[t7 + 2] + c2[o3 + 2];
  }
  function u2(n6, t7, c2, o3, r5, u3 = t7) {
    (r5 = r5 || n6)[u3] = n6[t7] - c2[o3], r5[u3 + 1] = n6[t7 + 1] - c2[o3 + 1], r5[u3 + 2] = n6[t7 + 2] - c2[o3 + 2];
  }
  n5.length = t6, n5.normalize = c, n5.scale = o2, n5.add = r4, n5.subtract = u2;
}(n4 || (n4 = {}));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GeometryUtil.js
var E2 = n4;
var x = [[-0.5, -0.5, 0.5], [0.5, -0.5, 0.5], [0.5, 0.5, 0.5], [-0.5, 0.5, 0.5], [-0.5, -0.5, -0.5], [0.5, -0.5, -0.5], [0.5, 0.5, -0.5], [-0.5, 0.5, -0.5]];
var U = [0, 0, 1, -1, 0, 0, 1, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, -1];
var V = [0, 0, 1, 0, 1, 1, 0, 1];
var v = [0, 1, 2, 2, 3, 0, 4, 0, 3, 3, 7, 4, 1, 5, 6, 6, 2, 1, 1, 0, 4, 4, 5, 1, 3, 2, 6, 6, 7, 3, 5, 4, 7, 7, 6, 5];
var F = new Array(36);
for (let Nt = 0; Nt < 6; Nt++) for (let t6 = 0; t6 < 6; t6++) F[6 * Nt + t6] = Nt;
var C = new Array(36);
for (let Nt = 0; Nt < 6; Nt++) C[6 * Nt] = 0, C[6 * Nt + 1] = 1, C[6 * Nt + 2] = 2, C[6 * Nt + 3] = 2, C[6 * Nt + 4] = 3, C[6 * Nt + 5] = 0;
function G(t6, n5) {
  Array.isArray(n5) || (n5 = [n5, n5, n5]);
  const e4 = new Array(24);
  for (let o2 = 0; o2 < 8; o2++) e4[3 * o2] = x[o2][0] * n5[0], e4[3 * o2 + 1] = x[o2][1] * n5[1], e4[3 * o2 + 2] = x[o2][2] * n5[2];
  return new I(t6, [[e2.POSITION, new t2(e4, v, 3, true)], [e2.NORMAL, new t2(U, F, 3)], [e2.UV0, new t2(V, C, 2)]]);
}
var D = [[-0.5, 0, -0.5], [0.5, 0, -0.5], [0.5, 0, 0.5], [-0.5, 0, 0.5], [0, -0.5, 0], [0, 0.5, 0]];
var q = [0, 1, -1, 1, 1, 0, 0, 1, 1, -1, 1, 0, 0, -1, -1, 1, -1, 0, 0, -1, 1, -1, -1, 0];
var B = [5, 1, 0, 5, 2, 1, 5, 3, 2, 5, 0, 3, 4, 0, 1, 4, 1, 2, 4, 2, 3, 4, 3, 0];
var k = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7];
function z2(t6, n5) {
  Array.isArray(n5) || (n5 = [n5, n5, n5]);
  const e4 = new Array(18);
  for (let o2 = 0; o2 < 6; o2++) e4[3 * o2] = D[o2][0] * n5[0], e4[3 * o2 + 1] = D[o2][1] * n5[1], e4[3 * o2 + 2] = D[o2][2] * n5[2];
  return new I(t6, [[e2.POSITION, new t2(e4, B, 3, true)], [e2.NORMAL, new t2(q, k, 3)]]);
}
var Z = r3(-0.5, 0, -0.5);
var H = r3(0.5, 0, -0.5);
var J = r3(0, 0, 0.5);
var K = r3(0, 0.5, 0);
var Q = n3();
var W = n3();
var X = n3();
var Y = n3();
var $ = n3();
e(Q, Z, K), e(W, Z, H), _(X, Q, W), z(X, X), e(Q, H, K), e(W, H, J), _(Y, Q, W), z(Y, Y), e(Q, J, K), e(W, J, Z), _($, Q, W), z($, $);
var _2 = [Z, H, J, K];
var tt = [0, -1, 0, X[0], X[1], X[2], Y[0], Y[1], Y[2], $[0], $[1], $[2]];
var nt = [0, 1, 2, 3, 1, 0, 3, 2, 1, 3, 0, 2];
var et = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3];
function ot(t6, n5) {
  Array.isArray(n5) || (n5 = [n5, n5, n5]);
  const e4 = new Array(12);
  for (let o2 = 0; o2 < 4; o2++) e4[3 * o2] = _2[o2][0] * n5[0], e4[3 * o2 + 1] = _2[o2][1] * n5[1], e4[3 * o2 + 2] = _2[o2][2] * n5[2];
  return new I(t6, [[e2.POSITION, new t2(e4, nt, 3, true)], [e2.NORMAL, new t2(tt, et, 3)]]);
}
function st(t6, n5, e4, o2, s2 = {
  uv: true
}) {
  const r4 = -Math.PI, l3 = 2 * Math.PI, h = -Math.PI / 2, u2 = Math.PI, c = Math.max(3, Math.floor(e4)), a2 = Math.max(2, Math.floor(o2)), f = (c + 1) * (a2 + 1), p = t3(3 * f), i = t3(3 * f), g2 = t3(2 * f), w = [];
  let m = 0;
  for (let O2 = 0; O2 <= a2; O2++) {
    const t7 = [], e5 = O2 / a2, o3 = h + e5 * u2, s3 = Math.cos(o3);
    for (let h2 = 0; h2 <= c; h2++) {
      const u3 = h2 / c, a3 = r4 + u3 * l3, f2 = Math.cos(a3) * s3, w2 = Math.sin(o3), O3 = -Math.sin(a3) * s3;
      p[3 * m] = f2 * n5, p[3 * m + 1] = w2 * n5, p[3 * m + 2] = O3 * n5, i[3 * m] = f2, i[3 * m + 1] = w2, i[3 * m + 2] = O3, g2[2 * m] = u3, g2[2 * m + 1] = e5, t7.push(m), ++m;
    }
    w.push(t7);
  }
  const M = new Array();
  for (let O2 = 0; O2 < a2; O2++) for (let t7 = 0; t7 < c; t7++) {
    const n6 = w[O2][t7], e5 = w[O2][t7 + 1], o3 = w[O2 + 1][t7 + 1], s3 = w[O2 + 1][t7];
    0 === O2 ? (M.push(n6), M.push(o3), M.push(s3)) : O2 === a2 - 1 ? (M.push(n6), M.push(e5), M.push(o3)) : (M.push(n6), M.push(e5), M.push(o3), M.push(o3), M.push(s3), M.push(n6));
  }
  const I2 = [[e2.POSITION, new t2(p, M, 3, true)], [e2.NORMAL, new t2(i, M, 3, true)]];
  return s2.uv && I2.push([e2.UV0, new t2(g2, M, 2, true)]), s2.offset && (I2[0][0] = e2.OFFSET, I2.push([e2.POSITION, new t2(Float64Array.from(s2.offset), A(M.length), 3, true)])), new I(t6, I2);
}
function rt(t6, n5, e4, o2) {
  const s2 = lt(n5, e4, o2);
  return new I(t6, s2);
}
function lt(t6, n5, e4) {
  const o2 = t6;
  let s2, r4;
  if (e4) s2 = [0, -1, 0, 1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 0, -1, 0, 1, 0], r4 = [0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1, 1, 5, 2, 2, 5, 3, 3, 5, 4, 4, 5, 1];
  else {
    const t7 = o2 * (1 + Math.sqrt(5)) / 2;
    s2 = [-o2, t7, 0, o2, t7, 0, -o2, -t7, 0, o2, -t7, 0, 0, -o2, t7, 0, o2, t7, 0, -o2, -t7, 0, o2, -t7, t7, 0, -o2, t7, 0, o2, -t7, 0, -o2, -t7, 0, o2], r4 = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
  }
  for (let c = 0; c < s2.length; c += 3) E2.scale(s2, c, t6 / E2.length(s2, c));
  let l3 = {};
  function h(n6, e5) {
    n6 > e5 && ([n6, e5] = [e5, n6]);
    const o3 = n6.toString() + "." + e5.toString();
    if (l3[o3]) return l3[o3];
    let r5 = s2.length;
    return s2.length += 3, E2.add(s2, 3 * n6, s2, 3 * e5, s2, r5), E2.scale(s2, r5, t6 / E2.length(s2, r5)), r5 /= 3, l3[o3] = r5, r5;
  }
  for (let c = 0; c < n5; c++) {
    const t7 = r4.length, n6 = new Array(4 * t7);
    for (let e5 = 0; e5 < t7; e5 += 3) {
      const t8 = r4[e5], o3 = r4[e5 + 1], s3 = r4[e5 + 2], l4 = h(t8, o3), u3 = h(o3, s3), c2 = h(s3, t8), a2 = 4 * e5;
      n6[a2] = t8, n6[a2 + 1] = l4, n6[a2 + 2] = c2, n6[a2 + 3] = o3, n6[a2 + 4] = u3, n6[a2 + 5] = l4, n6[a2 + 6] = s3, n6[a2 + 7] = c2, n6[a2 + 8] = u3, n6[a2 + 9] = l4, n6[a2 + 10] = u3, n6[a2 + 11] = c2;
    }
    r4 = n6, l3 = {};
  }
  const u2 = a(s2);
  for (let c = 0; c < u2.length; c += 3) E2.normalize(u2, c);
  return [[e2.POSITION, new t2(a(s2), r4, 3, true)], [e2.NORMAL, new t2(u2, r4, 3, true)]];
}
function ht(n5, e4, o2, s2, r4, l3, h, u2, c = null) {
  const a2 = o2 ? t(o2) : n(), f = e4 ? t(e4) : r(0, 0, 1);
  h ??= n2();
  const p = s2 ? [255 * s2[0], 255 * s2[1], 255 * s2[2], s2.length > 3 ? 255 * s2[3] : 255] : [255, 255, 255, 255], m = null != r4 && 2 === r4.length ? r4 : [1, 1], O2 = A(1), M = [[e2.POSITION, new t2(a2, O2, 3, true)], [e2.NORMAL, new t2(f, O2, 3, true)], [e2.UV0, new t2(h, O2, h.length)], [e2.COLOR, new t2(p, O2, 4, true)], [e2.SIZE, new t2(m, O2, 2)]];
  if (null != l3 && (l3 = [l3[0], l3[1], l3[2], l3[3]], M.push([e2.CENTEROFFSETANDDISTANCE, new t2(l3, O2, 4)])), u2) {
    const t6 = [u2[0], u2[1], u2[2], u2[3]];
    M.push([e2.FEATUREATTRIBUTE, new t2(t6, O2, 4)]);
  }
  return new I(n5, M, null, e3.Point, c);
}
var ut = [[-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0]];
function ct(t6, n5 = ut) {
  const e4 = new Array(12);
  for (let c = 0; c < 4; c++) for (let t7 = 0; t7 < 3; t7++) e4[3 * c + t7] = n5[c][t7];
  const o2 = [0, 1, 2, 2, 3, 0], s2 = [0, 0, 1], r4 = [0, 0, 0, 0, 0, 0], l3 = [0, 0, 1, 0, 1, 1, 0, 1], h = [255, 255, 255, 255], u2 = [[e2.POSITION, new t2(e4, o2, 3, true)], [e2.NORMAL, new t2(s2, r4, 3, true)], [e2.UV0, new t2(l3, o2, 2, true)], [e2.COLOR, new t2(h, r4, 4, true)]];
  return new I(t6, u2);
}
function at(t6, n5, e4, o2, s2, r4 = true, l3 = true) {
  let h = 0;
  const u2 = e4, c = n5;
  let f = r3(0, h, 0), p = r3(0, h + c, 0), i = r3(0, -1, 0), g2 = r3(0, 1, 0);
  s2 && (h = c, p = r3(0, 0, 0), f = r3(0, h, 0), i = r3(0, 1, 0), g2 = r3(0, -1, 0));
  const w = [p, f], m = [i, g2], M = o2 + 2, A2 = Math.sqrt(c * c + u2 * u2);
  if (s2) for (let O2 = o2 - 1; O2 >= 0; O2--) {
    const t7 = O2 * (2 * Math.PI / o2), n6 = r3(Math.cos(t7) * u2, h, Math.sin(t7) * u2);
    w.push(n6);
    const e5 = r3(c * Math.cos(t7) / A2, -u2 / A2, c * Math.sin(t7) / A2);
    m.push(e5);
  }
  else for (let O2 = 0; O2 < o2; O2++) {
    const t7 = O2 * (2 * Math.PI / o2), n6 = r3(Math.cos(t7) * u2, h, Math.sin(t7) * u2);
    w.push(n6);
    const e5 = r3(c * Math.cos(t7) / A2, u2 / A2, c * Math.sin(t7) / A2);
    m.push(e5);
  }
  const I2 = new Array(), y = new Array();
  if (r4) {
    for (let t7 = 3; t7 < w.length; t7++) I2.push(1), I2.push(t7 - 1), I2.push(t7), y.push(0), y.push(0), y.push(0);
    I2.push(w.length - 1), I2.push(2), I2.push(1), y.push(0), y.push(0), y.push(0);
  }
  if (l3) {
    for (let t7 = 3; t7 < w.length; t7++) I2.push(t7), I2.push(t7 - 1), I2.push(0), y.push(t7), y.push(t7 - 1), y.push(1);
    I2.push(0), I2.push(2), I2.push(w.length - 1), y.push(1), y.push(2), y.push(m.length - 1);
  }
  const N = t3(3 * M);
  for (let a2 = 0; a2 < M; a2++) N[3 * a2] = w[a2][0], N[3 * a2 + 1] = w[a2][1], N[3 * a2 + 2] = w[a2][2];
  const P2 = t3(3 * M);
  for (let a2 = 0; a2 < M; a2++) P2[3 * a2] = m[a2][0], P2[3 * a2 + 1] = m[a2][1], P2[3 * a2 + 2] = m[a2][2];
  const T = [[e2.POSITION, new t2(N, I2, 3, true)], [e2.NORMAL, new t2(P2, y, 3, true)]];
  return new I(t6, T);
}
function ft(t6, n5, u2, c, i, g2, w) {
  const m = i ? t5(i) : r3(1, 0, 0), M = g2 ? t5(g2) : r3(0, 0, 0);
  w ??= true;
  const A2 = n3();
  z(A2, m);
  const I2 = n3();
  g(I2, A2, Math.abs(n5));
  const y = n3();
  g(y, I2, -0.5), u(y, y, M);
  const N = r3(0, 1, 0);
  Math.abs(1 - P(A2, N)) < 0.2 && o(N, 0, 0, 1);
  const P2 = n3();
  _(P2, A2, N), z(P2, P2), _(N, P2, A2);
  const T = 2 * c + (w ? 2 : 0), b = c + (w ? 2 : 0), R = t3(3 * T), L = t3(3 * b), E3 = t3(2 * T), x2 = new Array(3 * c * (w ? 4 : 2)), U2 = new Array(3 * c * (w ? 4 : 2));
  w && (R[3 * (T - 2)] = y[0], R[3 * (T - 2) + 1] = y[1], R[3 * (T - 2) + 2] = y[2], E3[2 * (T - 2)] = 0, E3[2 * (T - 2) + 1] = 0, R[3 * (T - 1)] = R[3 * (T - 2)] + I2[0], R[3 * (T - 1) + 1] = R[3 * (T - 2) + 1] + I2[1], R[3 * (T - 1) + 2] = R[3 * (T - 2) + 2] + I2[2], E3[2 * (T - 1)] = 1, E3[2 * (T - 1) + 1] = 1, L[3 * (b - 2)] = -A2[0], L[3 * (b - 2) + 1] = -A2[1], L[3 * (b - 2) + 2] = -A2[2], L[3 * (b - 1)] = A2[0], L[3 * (b - 1) + 1] = A2[1], L[3 * (b - 1) + 2] = A2[2]);
  const V2 = (t7, n6, e4) => {
    x2[t7] = n6, U2[t7] = e4;
  };
  let v2 = 0;
  const F2 = n3(), C2 = n3();
  for (let e4 = 0; e4 < c; e4++) {
    const t7 = e4 * (2 * Math.PI / c);
    g(F2, N, Math.sin(t7)), g(C2, P2, Math.cos(t7)), u(F2, F2, C2), L[3 * e4] = F2[0], L[3 * e4 + 1] = F2[1], L[3 * e4 + 2] = F2[2], g(F2, F2, u2), u(F2, F2, y), R[3 * e4] = F2[0], R[3 * e4 + 1] = F2[1], R[3 * e4 + 2] = F2[2], E3[2 * e4] = e4 / c, E3[2 * e4 + 1] = 0, R[3 * (e4 + c)] = R[3 * e4] + I2[0], R[3 * (e4 + c) + 1] = R[3 * e4 + 1] + I2[1], R[3 * (e4 + c) + 2] = R[3 * e4 + 2] + I2[2], E3[2 * (e4 + c)] = e4 / c, E3[2 * e4 + 1] = 1;
    const n6 = (e4 + 1) % c;
    V2(v2++, e4, e4), V2(v2++, e4 + c, e4), V2(v2++, n6, n6), V2(v2++, n6, n6), V2(v2++, e4 + c, e4), V2(v2++, n6 + c, n6);
  }
  if (w) {
    for (let t7 = 0; t7 < c; t7++) {
      const n6 = (t7 + 1) % c;
      V2(v2++, T - 2, b - 2), V2(v2++, t7, b - 2), V2(v2++, n6, b - 2);
    }
    for (let t7 = 0; t7 < c; t7++) {
      const n6 = (t7 + 1) % c;
      V2(v2++, t7 + c, b - 1), V2(v2++, T - 1, b - 1), V2(v2++, n6 + c, b - 1);
    }
  }
  const G2 = [[e2.POSITION, new t2(R, x2, 3, true)], [e2.NORMAL, new t2(L, U2, 3, true)], [e2.UV0, new t2(E3, x2, 2, true)]];
  return new I(t6, G2);
}
function pt(t6, n5, e4, o2, s2, r4) {
  o2 = o2 || 10, s2 = null == s2 || s2, s(n5.length > 1);
  const l3 = [[0, 0, 0]], h = [], u2 = [];
  for (let c = 0; c < o2; c++) {
    h.push([0, -c - 1, -(c + 1) % o2 - 1]);
    const t7 = c / o2 * 2 * Math.PI;
    u2.push([Math.cos(t7) * e4, Math.sin(t7) * e4]);
  }
  return it(t6, u2, n5, l3, h, s2, r4);
}
function it(t6, l3, c, f, p, i, w = r3(0, 0, 0)) {
  const m = l3.length, M = t3(c.length * m * 3 + (6 * f.length || 0)), A2 = t3(c.length * m * 3 + (f ? 6 : 0)), I2 = new Array(), b = new Array();
  let R = 0, L = 0;
  const E3 = n(), x2 = n(), U2 = n(), V2 = n(), v2 = n(), F2 = n(), C2 = n(), G2 = n(), D2 = n(), q2 = n(), B2 = n(), k2 = n(), z3 = n(), Z2 = E();
  o(D2, 0, 1, 0), e(x2, c[1], c[0]), z(x2, x2), i ? (u(G2, c[0], w), z(U2, G2)) : o(U2, 0, 0, 1), At(x2, U2, D2, D2, v2, U2, It), r2(V2, U2), r2(k2, v2);
  for (let n5 = 0; n5 < f.length; n5++) g(F2, v2, f[n5][0]), g(G2, U2, f[n5][2]), u(F2, F2, G2), u(F2, F2, c[0]), M[R++] = F2[0], M[R++] = F2[1], M[R++] = F2[2];
  A2[L++] = -x2[0], A2[L++] = -x2[1], A2[L++] = -x2[2];
  for (let n5 = 0; n5 < p.length; n5++) I2.push(p[n5][0] > 0 ? p[n5][0] : -p[n5][0] - 1 + f.length), I2.push(p[n5][1] > 0 ? p[n5][1] : -p[n5][1] - 1 + f.length), I2.push(p[n5][2] > 0 ? p[n5][2] : -p[n5][2] - 1 + f.length), b.push(0), b.push(0), b.push(0);
  let H2 = f.length;
  const J2 = f.length - 1;
  for (let h = 0; h < c.length; h++) {
    let t7 = false;
    if (h > 0) {
      r2(E3, x2), h < c.length - 1 ? (e(x2, c[h + 1], c[h]), z(x2, x2)) : t7 = true, u(q2, E3, x2), z(q2, q2), u(B2, c[h - 1], V2), j(c[h], q2, Z2);
      S(Z2, l(B2, E3), G2) ? (e(G2, G2, c[h]), z(U2, G2), _(v2, q2, U2), z(v2, v2)) : At(q2, V2, k2, D2, v2, U2, It), r2(V2, U2), r2(k2, v2);
    }
    i && (u(G2, c[h], w), z(z3, G2));
    for (let n5 = 0; n5 < m; n5++) if (g(F2, v2, l3[n5][0]), g(G2, U2, l3[n5][1]), u(F2, F2, G2), z(C2, F2), A2[L++] = C2[0], A2[L++] = C2[1], A2[L++] = C2[2], u(F2, F2, c[h]), M[R++] = F2[0], M[R++] = F2[1], M[R++] = F2[2], !t7) {
      const t8 = (n5 + 1) % m;
      I2.push(H2 + n5), I2.push(H2 + m + n5), I2.push(H2 + t8), I2.push(H2 + t8), I2.push(H2 + m + n5), I2.push(H2 + m + t8);
      for (let n6 = 0; n6 < 6; n6++) {
        const t9 = I2.length - 6;
        b.push(I2[t9 + n6] - J2);
      }
    }
    H2 += m;
  }
  const K2 = c[c.length - 1];
  for (let n5 = 0; n5 < f.length; n5++) g(F2, v2, f[n5][0]), g(G2, U2, f[n5][1]), u(F2, F2, G2), u(F2, F2, K2), M[R++] = F2[0], M[R++] = F2[1], M[R++] = F2[2];
  const Q2 = L / 3;
  A2[L++] = x2[0], A2[L++] = x2[1], A2[L++] = x2[2];
  const W2 = H2 - m;
  for (let n5 = 0; n5 < p.length; n5++) I2.push(p[n5][0] >= 0 ? H2 + p[n5][0] : -p[n5][0] - 1 + W2), I2.push(p[n5][2] >= 0 ? H2 + p[n5][2] : -p[n5][2] - 1 + W2), I2.push(p[n5][1] >= 0 ? H2 + p[n5][1] : -p[n5][1] - 1 + W2), b.push(Q2), b.push(Q2), b.push(Q2);
  const X2 = [[e2.POSITION, new t2(M, I2, 3, true)], [e2.NORMAL, new t2(A2, b, 3, true)]];
  return new I(t6, X2);
}
function gt(t6, n5, e4, o2) {
  s(n5.length > 1, "createPolylineGeometry(): polyline needs at least 2 points"), s(3 === n5[0].length, "createPolylineGeometry(): malformed vertex"), s(null == e4 || e4.length === n5.length, "createPolylineGeometry: need same number of points and normals"), s(null == e4 || 3 === e4[0].length, "createPolylineGeometry(): malformed normal");
  const s2 = t4(3 * n5.length), r4 = new Array(2 * (n5.length - 1));
  let l3 = 0, h = 0;
  for (let c = 0; c < n5.length; c++) {
    for (let t7 = 0; t7 < 3; t7++) s2[l3++] = n5[c][t7];
    c > 0 && (r4[h++] = c - 1, r4[h++] = c);
  }
  const u2 = [[e2.POSITION, new t2(s2, r4, 3, true)]];
  if (e4) {
    const t7 = t3(3 * e4.length);
    let o3 = 0;
    for (let s3 = 0; s3 < n5.length; s3++) for (let n6 = 0; n6 < 3; n6++) t7[o3++] = e4[s3][n6];
    u2.push([e2.NORMAL, new t2(t7, r4, 3, true)]);
  }
  return o2 && u2.push([e2.COLOR, new t2(o2, l2(o2.length / 4), 4)]), new I(t6, u2, null, e3.Line);
}
function wt(t6, n5, e4, o2, s2, r4 = 0) {
  const l3 = new Array(18), h = [[-e4, r4, s2 / 2], [o2, r4, s2 / 2], [0, n5 + r4, s2 / 2], [-e4, r4, -s2 / 2], [o2, r4, -s2 / 2], [0, n5 + r4, -s2 / 2]], u2 = [0, 1, 2, 3, 0, 2, 2, 5, 3, 1, 4, 5, 5, 2, 1, 1, 0, 3, 3, 4, 1, 4, 3, 5];
  for (let c = 0; c < 6; c++) l3[3 * c] = h[c][0], l3[3 * c + 1] = h[c][1], l3[3 * c + 2] = h[c][2];
  return new I(t6, [[e2.POSITION, new t2(l3, u2, 3, true)]]);
}
function mt(t6, n5) {
  const e4 = t6.getMutableAttribute(e2.POSITION).data;
  for (let o2 = 0; o2 < e4.length; o2 += 3) {
    const t7 = e4[o2], s2 = e4[o2 + 1], r4 = e4[o2 + 2];
    o(yt, t7, s2, r4), O(yt, yt, n5), e4[o2] = yt[0], e4[o2 + 1] = yt[1], e4[o2 + 2] = yt[2];
  }
}
function Ot(t6, n5 = t6) {
  const e4 = t6.attributes, o2 = e4.get(e2.POSITION).data, s2 = e4.get(e2.NORMAL).data;
  if (s2) {
    const t7 = n5.getMutableAttribute(e2.NORMAL).data;
    for (let n6 = 0; n6 < s2.length; n6 += 3) {
      const e5 = s2[n6 + 1];
      t7[n6 + 1] = -s2[n6 + 2], t7[n6 + 2] = e5;
    }
  }
  if (o2) {
    const t7 = n5.getMutableAttribute(e2.POSITION).data;
    for (let n6 = 0; n6 < o2.length; n6 += 3) {
      const e5 = o2[n6 + 1];
      t7[n6 + 1] = -o2[n6 + 2], t7[n6 + 2] = e5;
    }
  }
}
function Mt(t6, n5, s2, r4, h) {
  return !(Math.abs(P(n5, t6)) > h) && (_(s2, t6, n5), z(s2, s2), _(r4, s2, t6), z(r4, r4), true);
}
function At(t6, n5, e4, o2, s2, r4, l3) {
  return Mt(t6, n5, s2, r4, l3) || Mt(t6, e4, s2, r4, l3) || Mt(t6, o2, s2, r4, l3);
}
var It = 0.99619469809;
var yt = n();

export {
  G,
  z2 as z,
  ot,
  st,
  rt,
  lt,
  ht,
  ct,
  at,
  ft,
  pt,
  it,
  gt,
  wt,
  mt,
  Ot,
  At
};
//# sourceMappingURL=chunk-O7OCS6XP.js.map
