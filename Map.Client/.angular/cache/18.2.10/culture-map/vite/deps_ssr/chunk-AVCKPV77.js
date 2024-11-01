import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s as s3
} from "./chunk-MNBTLVRM.js";
import {
  l as l3
} from "./chunk-GNCXYHNE.js";
import {
  O as O2,
  X as X2,
  x
} from "./chunk-CSK4VZQ7.js";
import {
  F,
  c as c2,
  o as o3
} from "./chunk-2TNGEJGS.js";
import {
  e as e3,
  o as o2
} from "./chunk-GSG4T2KM.js";
import {
  n as n4
} from "./chunk-BZHHBBFX.js";
import {
  u as u2
} from "./chunk-MRP3FBLV.js";
import {
  a
} from "./chunk-Y7SJWJAL.js";
import {
  f as f2,
  p
} from "./chunk-A2FDYA6M.js";
import {
  e
} from "./chunk-YGAXDKHF.js";
import {
  e as e2,
  t
} from "./chunk-4TOSJLKR.js";
import {
  n as n3
} from "./chunk-VSQZQLTQ.js";
import {
  z
} from "./chunk-K43CZ3M5.js";
import {
  G,
  n as n2
} from "./chunk-QGBMZIP4.js";
import {
  E,
  K,
  S,
  X,
  Z,
  b,
  c,
  f,
  g,
  l as l2,
  m,
  o,
  q,
  s as s2,
  u
} from "./chunk-MZM4INJV.js";
import {
  l,
  n,
  r,
  y
} from "./chunk-J4GMQHGL.js";
import {
  O,
  s3 as s
} from "./chunk-6SSA7P3A.js";

// ../../../node_modules/@arcgis/core/views/3d/support/dito.js
var m2 = 1e-6;
var f3 = n();
var h = n();
function u3(t2, r2) {
  const {
    data: n5,
    size: i
  } = t2, o4 = n5.length / i;
  if (o4 <= 0) return;
  const s4 = new tt(t2);
  it(f3, s4.minProj, s4.maxProj), st(f3, f3, 0.5), ot(h, s4.maxProj, s4.minProj);
  const a2 = nt(h), m3 = new rt();
  m3.quality = a2, o4 < 14 && (t2 = new s3(new Float64Array(s4.buffer, 112, 42), 3));
  const u4 = n(), j2 = n(), P2 = n(), b3 = n(), x3 = n(), I3 = n(), N3 = n();
  switch (l4(s4, t2, N3, u4, j2, P2, b3, x3, I3, m3)) {
    case 1:
      return void O3(f3, h, r2);
    case 2:
      return void K2(t2, b3, r2);
  }
  w(t2, N3, u4, j2, P2, b3, x3, I3, m3), L(t2, m3.b0, m3.b1, m3.b2, D, H);
  const V3 = n();
  ot(V3, H, D), m3.quality = nt(V3), m3.quality < a2 ? Z2(m3.b0, m3.b1, m3.b2, D, H, V3, r2) : O3(f3, h, r2);
}
function l4(t2, r2, n5, i, o4, s4, e4, a2, c3, f4) {
  if (A(t2, i, o4), ft(i, o4) < m2) return 1;
  ot(e4, i, o4), ct(e4, e4);
  return q2(r2, i, e4, s4) < m2 ? 2 : (ot(a2, o4, s4), ct(a2, a2), ot(c3, s4, i), ct(c3, c3), at(n5, a2, e4), ct(n5, n5), Y(r2, n5, e4, a2, c3, f4), 0);
}
var j = n();
var P = n();
var b2 = n();
var x2 = n();
var I = n();
var N = n();
var V = n();
var y2 = n();
function w(t2, r2, n5, i, o4, s4, e4, a2, c3) {
  M(t2, r2, n5, j, P), void 0 !== j[0] && (ot(b2, j, n5), ct(b2, b2), ot(x2, j, i), ct(x2, x2), ot(I, j, o4), ct(I, I), at(N, x2, s4), ct(N, N), at(V, I, e4), ct(V, V), at(y2, b2, a2), ct(y2, y2), Y(t2, N, s4, x2, b2, c3), Y(t2, V, e4, I, x2, c3), Y(t2, y2, a2, b2, I, c3)), void 0 !== P[0] && (ot(b2, P, n5), ct(b2, b2), ot(x2, P, i), ct(x2, x2), ot(I, P, o4), ct(I, I), at(N, x2, s4), ct(N, N), at(V, I, e4), ct(V, V), at(y2, b2, a2), ct(y2, y2), Y(t2, N, s4, x2, b2, c3), Y(t2, V, e4, I, x2, c3), Y(t2, y2, a2, b2, I, c3));
}
function A(t2, r2, n5) {
  let i = ft(t2.maxVert[0], t2.minVert[0]), o4 = 0;
  for (let s4 = 1; s4 < 7; ++s4) {
    const r3 = ft(t2.maxVert[s4], t2.minVert[s4]);
    r3 > i && (i = r3, o4 = s4);
  }
  et(r2, t2.minVert[o4]), et(n5, t2.maxVert[o4]);
}
var g2 = [0, 0, 0];
function q2(t2, r2, n5, i) {
  const {
    data: o4,
    size: s4
  } = t2;
  let e4 = Number.NEGATIVE_INFINITY, a2 = 0;
  for (let c3 = 0; c3 < o4.length; c3 += s4) {
    g2[0] = o4[c3] - r2[0], g2[1] = o4[c3 + 1] - r2[1], g2[2] = o4[c3 + 2] - r2[2];
    const t3 = n5[0] * g2[0] + n5[1] * g2[1] + n5[2] * g2[2], i2 = n5[0] * n5[0] + n5[1] * n5[1] + n5[2] * n5[2], s5 = g2[0] * g2[0] + g2[1] * g2[1] + g2[2] * g2[2] - t3 * t3 / i2;
    s5 > e4 && (e4 = s5, a2 = c3);
  }
  return et(i, o4, a2), e4;
}
var d = n4();
function M(t2, r2, n5, i, o4) {
  G2(t2, r2, d, o4, i);
  const s4 = ht(n5, r2);
  d[1] - m2 <= s4 && (i[0] = void 0), d[0] + m2 >= s4 && (o4[0] = void 0);
}
var F2 = n();
var T = n();
var v = n();
var E2 = n();
var p2 = n();
var z2 = n();
function Y(t2, r2, n5, i, o4, s4) {
  if (mt(r2) < m2) return;
  at(F2, n5, r2), at(T, i, r2), at(v, o4, r2), S2(t2, r2, d), p2[1] = d[0], E2[1] = d[1], z2[1] = E2[1] - p2[1];
  const e4 = [n5, i, o4], a2 = [F2, T, v];
  for (let c3 = 0; c3 < 3; ++c3) {
    S2(t2, e4[c3], d), p2[0] = d[0], E2[0] = d[1], S2(t2, a2[c3], d), p2[2] = d[0], E2[2] = d[1], z2[0] = E2[0] - p2[0], z2[2] = E2[2] - p2[2];
    const n6 = nt(z2);
    n6 < s4.quality && (et(s4.b0, e4[c3]), et(s4.b1, r2), et(s4.b2, a2[c3]), s4.quality = n6);
  }
}
var _ = n();
function S2(t2, r2, n5) {
  const {
    data: i,
    size: o4
  } = t2;
  n5[0] = Number.POSITIVE_INFINITY, n5[1] = Number.NEGATIVE_INFINITY;
  for (let s4 = 0; s4 < i.length; s4 += o4) {
    const t3 = i[s4] * r2[0] + i[s4 + 1] * r2[1] + i[s4 + 2] * r2[2];
    n5[0] = Math.min(n5[0], t3), n5[1] = Math.max(n5[1], t3);
  }
}
function G2(t2, r2, n5, i, o4) {
  const {
    data: s4,
    size: e4
  } = t2;
  et(i, s4), et(o4, i), n5[0] = ht(_, r2), n5[1] = n5[0];
  for (let a2 = e4; a2 < s4.length; a2 += e4) {
    const t3 = s4[a2] * r2[0] + s4[a2 + 1] * r2[1] + s4[a2 + 2] * r2[2];
    t3 < n5[0] && (n5[0] = t3, et(i, s4, a2)), t3 > n5[1] && (n5[1] = t3, et(o4, s4, a2));
  }
}
function O3(t2, n5, i) {
  i.center = t2, i.halfSize = g(n5, n5, 0.5), i.quaternion = o2;
}
var k = n();
var B = n();
var C = n();
var D = n();
var H = n();
var J = n();
function K2(t2, r2, n5) {
  et(k, r2), Math.abs(r2[0]) > Math.abs(r2[1]) && Math.abs(r2[0]) > Math.abs(r2[2]) ? k[0] = 0 : Math.abs(r2[1]) > Math.abs(r2[2]) ? k[1] = 0 : k[2] = 0, mt(k) < m2 && (k[0] = k[1] = k[2] = 1), at(B, r2, k), ct(B, B), at(C, r2, B), ct(C, C), L(t2, r2, B, C, D, H), ot(J, H, D), Z2(r2, B, C, D, H, J, n5);
}
function L(t2, r2, n5, i, o4, s4) {
  S2(t2, r2, d), o4[0] = d[0], s4[0] = d[1], S2(t2, n5, d), o4[1] = d[0], s4[1] = d[1], S2(t2, i, d), o4[2] = d[0], s4[2] = d[1];
}
var Q = n();
var R = n();
var U = n();
var W = t(1, 0, 0, 0, 1, 0, 0, 0, 1);
var X3 = e3();
function Z2(t2, r2, n5, i, e4, a2, c3) {
  W[0] = t2[0], W[1] = t2[1], W[2] = t2[2], W[3] = r2[0], W[4] = r2[1], W[5] = r2[2], W[6] = n5[0], W[7] = n5[1], W[8] = n5[2], c3.quaternion = ut(X3, W), it(Q, i, e4), st(Q, Q, 0.5), st(R, t2, Q[0]), st(U, r2, Q[1]), it(R, R, U), st(U, n5, Q[2]), c3.center = u(R, R, U), c3.halfSize = g(Q, a2, 0.5);
}
var $ = 7;
var tt = class {
  constructor(t2) {
    this.minVert = new Array($), this.maxVert = new Array($);
    const r2 = 64 * $;
    this.buffer = new ArrayBuffer(r2);
    let n5 = 0;
    this.minProj = new Float64Array(this.buffer, n5, $), n5 += 8 * $, this.maxProj = new Float64Array(this.buffer, n5, $), n5 += 8 * $;
    for (let a2 = 0; a2 < $; ++a2) this.minVert[a2] = new Float64Array(this.buffer, n5, 3), n5 += 24;
    for (let a2 = 0; a2 < $; ++a2) this.maxVert[a2] = new Float64Array(this.buffer, n5, 3), n5 += 24;
    for (let a2 = 0; a2 < $; ++a2) this.minProj[a2] = Number.POSITIVE_INFINITY, this.maxProj[a2] = Number.NEGATIVE_INFINITY;
    const i = new Array($), o4 = new Array($), {
      data: s4,
      size: e4
    } = t2;
    for (let a2 = 0; a2 < s4.length; a2 += e4) {
      let t3 = s4[a2];
      t3 < this.minProj[0] && (this.minProj[0] = t3, i[0] = a2), t3 > this.maxProj[0] && (this.maxProj[0] = t3, o4[0] = a2), t3 = s4[a2 + 1], t3 < this.minProj[1] && (this.minProj[1] = t3, i[1] = a2), t3 > this.maxProj[1] && (this.maxProj[1] = t3, o4[1] = a2), t3 = s4[a2 + 2], t3 < this.minProj[2] && (this.minProj[2] = t3, i[2] = a2), t3 > this.maxProj[2] && (this.maxProj[2] = t3, o4[2] = a2), t3 = s4[a2] + s4[a2 + 1] + s4[a2 + 2], t3 < this.minProj[3] && (this.minProj[3] = t3, i[3] = a2), t3 > this.maxProj[3] && (this.maxProj[3] = t3, o4[3] = a2), t3 = s4[a2] + s4[a2 + 1] - s4[a2 + 2], t3 < this.minProj[4] && (this.minProj[4] = t3, i[4] = a2), t3 > this.maxProj[4] && (this.maxProj[4] = t3, o4[4] = a2), t3 = s4[a2] - s4[a2 + 1] + s4[a2 + 2], t3 < this.minProj[5] && (this.minProj[5] = t3, i[5] = a2), t3 > this.maxProj[5] && (this.maxProj[5] = t3, o4[5] = a2), t3 = s4[a2] - s4[a2 + 1] - s4[a2 + 2], t3 < this.minProj[6] && (this.minProj[6] = t3, i[6] = a2), t3 > this.maxProj[6] && (this.maxProj[6] = t3, o4[6] = a2);
    }
    for (let a2 = 0; a2 < $; ++a2) {
      let t3 = i[a2];
      et(this.minVert[a2], s4, t3), t3 = o4[a2], et(this.maxVert[a2], s4, t3);
    }
  }
};
var rt = class {
  constructor() {
    this.b0 = r(1, 0, 0), this.b1 = r(0, 1, 0), this.b2 = r(0, 0, 1), this.quality = 0;
  }
};
function nt(t2) {
  return t2[0] * t2[1] + t2[0] * t2[2] + t2[1] * t2[2];
}
function it(t2, r2, n5) {
  t2[0] = r2[0] + n5[0], t2[1] = r2[1] + n5[1], t2[2] = r2[2] + n5[2];
}
function ot(t2, r2, n5) {
  t2[0] = r2[0] - n5[0], t2[1] = r2[1] - n5[1], t2[2] = r2[2] - n5[2];
}
function st(t2, r2, n5) {
  t2[0] = r2[0] * n5, t2[1] = r2[1] * n5, t2[2] = r2[2] * n5;
}
function et(t2, r2, n5 = 0) {
  t2[0] = r2[n5], t2[1] = r2[n5 + 1], t2[2] = r2[n5 + 2];
}
function at(t2, r2, n5) {
  const i = r2[0], o4 = r2[1], s4 = r2[2], e4 = n5[0], a2 = n5[1], c3 = n5[2];
  t2[0] = o4 * c3 - s4 * a2, t2[1] = s4 * e4 - i * c3, t2[2] = i * a2 - o4 * e4;
}
function ct(t2, r2) {
  const n5 = r2[0] * r2[0] + r2[1] * r2[1] + r2[2] * r2[2];
  if (n5 > 0) {
    const i = 1 / Math.sqrt(n5);
    t2[0] = r2[0] * i, t2[1] = r2[1] * i, t2[2] = r2[2] * i;
  }
}
function mt(t2) {
  return t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2];
}
function ft(t2, r2) {
  const n5 = r2[0] - t2[0], i = r2[1] - t2[1], o4 = r2[2] - t2[2];
  return n5 * n5 + i * i + o4 * o4;
}
function ht(t2, r2) {
  return t2[0] * r2[0] + t2[1] * r2[1] + t2[2] * r2[2];
}
function ut(t2, r2) {
  const n5 = r2[0] + r2[4] + r2[8];
  if (n5 > 0) {
    let i = Math.sqrt(n5 + 1);
    t2[3] = 0.5 * i, i = 0.5 / i, t2[0] = (r2[5] - r2[7]) * i, t2[1] = (r2[6] - r2[2]) * i, t2[2] = (r2[1] - r2[3]) * i;
  } else {
    let n6 = 0;
    r2[4] > r2[0] && (n6 = 1), r2[8] > r2[3 * n6 + n6] && (n6 = 2);
    const i = (n6 + 1) % 3, o4 = (n6 + 2) % 3;
    let s4 = Math.sqrt(r2[3 * n6 + n6] - r2[3 * i + i] - r2[3 * o4 + o4] + 1);
    t2[n6] = 0.5 * s4, s4 = 0.5 / s4, t2[3] = (r2[3 * i + o4] - r2[3 * o4 + i]) * s4, t2[i] = (r2[3 * i + n6] + r2[3 * n6 + i]) * s4, t2[o4] = (r2[3 * o4 + n6] + r2[3 * n6 + o4]) * s4;
  }
  return t2;
}

// ../../../node_modules/@arcgis/core/views/3d/support/orientedBoundingBox.js
var I2 = class _I {
  constructor(t2 = l, a2 = gt, e4 = o2) {
    this._data = [t2[0], t2[1], t2[2], a2[0], a2[1], a2[2], e4[0], e4[1], e4[2], e4[3]];
  }
  clone() {
    const t2 = new _I();
    return t2._data = this._data.slice(), t2;
  }
  invalidate() {
    this._data[3] = -1;
  }
  get isValid() {
    return this._data[3] >= 0;
  }
  static fromData(t2) {
    const a2 = new _I();
    return a2._data = t2.slice(), a2;
  }
  static fromJSON(t2) {
    return new _I(t2.center, t2.halfSize, t2.quaternion);
  }
  copy(t2) {
    this._data = t2.data.slice();
  }
  get center() {
    return o(c2.get(), this._data[0], this._data[1], this._data[2]);
  }
  get centerX() {
    return this._data[0];
  }
  get centerY() {
    return this._data[1];
  }
  get centerZ() {
    return this._data[2];
  }
  getCenter(t2) {
    return t2[0] = this._data[0], t2[1] = this._data[1], t2[2] = this._data[2], t2;
  }
  set center(t2) {
    this._data[0] = t2[0], this._data[1] = t2[1], this._data[2] = t2[2];
  }
  setCenter(t2, a2, e4) {
    this._data[0] = t2, this._data[1] = a2, this._data[2] = e4;
  }
  get halfSize() {
    return o(c2.get(), this._data[3], this._data[4], this._data[5]);
  }
  get halfSizeX() {
    return this._data[3];
  }
  get halfSizeY() {
    return this._data[4];
  }
  get halfSizeZ() {
    return this._data[5];
  }
  getHalfSize(t2) {
    return t2[0] = this._data[3], t2[1] = this._data[4], t2[2] = this._data[5], t2;
  }
  set halfSize(t2) {
    this._data[3] = t2[0], this._data[4] = t2[1], this._data[5] = t2[2];
  }
  get quaternion() {
    return X2(o3.get(), this._data[6], this._data[7], this._data[8], this._data[9]);
  }
  getQuaternion(t2) {
    return t2[0] = this._data[6], t2[1] = this._data[7], t2[2] = this._data[8], t2[3] = this._data[9], t2;
  }
  set quaternion(t2) {
    this._data[6] = t2[0], this._data[7] = t2[1], this._data[8] = t2[2], this._data[9] = t2[3];
  }
  get data() {
    return this._data;
  }
  getCorners(t2) {
    const a2 = O4, e4 = this._data;
    a2[0] = e4[6], a2[1] = e4[7], a2[2] = e4[8], a2[3] = e4[9];
    for (let s4 = 0; s4 < 8; ++s4) {
      const i = t2[s4];
      i[0] = (1 & s4 ? -1 : 1) * e4[3], i[1] = (2 & s4 ? -1 : 1) * e4[4], i[2] = (4 & s4 ? -1 : 1) * e4[5], E(i, i, a2), i[0] += e4[0], i[1] += e4[1], i[2] += e4[2];
    }
  }
  doesIntersectFrustumConservativeApproximation(t2) {
    return this.intersectPlane(t2[0]) <= 0 && this.intersectPlane(t2[1]) <= 0 && this.intersectPlane(t2[2]) <= 0 && this.intersectPlane(t2[3]) <= 0 && this.intersectPlane(t2[4]) <= 0 && this.intersectPlane(t2[5]) <= 0;
  }
  get radius() {
    const t2 = this._data[3], a2 = this._data[4], e4 = this._data[5];
    return Math.sqrt(t2 * t2 + a2 * a2 + e4 * e4);
  }
  intersectSphere(t2) {
    X4[0] = this._data[0] - t2[0], X4[1] = this._data[1] - t2[1], X4[2] = this._data[2] - t2[2];
    const a2 = this.getQuaternion(T2);
    return O2(O4, a2), E(X4, X4, O4), f(X4, X4), Y2[0] = Math.min(X4[0], this._data[3]), Y2[1] = Math.min(X4[1], this._data[4]), Y2[2] = Math.min(X4[2], this._data[5]), X(Y2, X4) < t2[3] * t2[3];
  }
  intersectSphereWithMBS(t2, a2 = this.radius) {
    const e4 = this._data;
    X4[0] = e4[0] - t2[0], X4[1] = e4[1] - t2[1], X4[2] = e4[2] - t2[2];
    const s4 = t2[3], i = s4 + a2;
    return !(Z(X4) > i * i) && (O4[0] = -e4[6], O4[1] = -e4[7], O4[2] = -e4[8], O4[3] = e4[9], E(X4, X4, O4), f(X4, X4), Y2[0] = Math.min(X4[0], e4[3]), Y2[1] = Math.min(X4[1], e4[4]), Y2[2] = Math.min(X4[2], e4[5]), X(Y2, X4) < s4 * s4);
  }
  intersectPlane(t2) {
    const a2 = t2[0] * this._data[0] + t2[1] * this._data[1] + t2[2] * this._data[2] + t2[3], e4 = this.projectedRadius(F(t2));
    return a2 > e4 ? 1 : a2 < -e4 ? -1 : 0;
  }
  intersectRay(t2, a2, e4 = 0) {
    const s4 = this._data, i = O4;
    i[0] = -s4[6], i[1] = -s4[7], i[2] = -s4[8], i[3] = s4[9], X4[0] = t2[0] - s4[0], X4[1] = t2[1] - s4[1], X4[2] = t2[2] - s4[2];
    const r2 = E(X4, X4, O4), n5 = E(Y2, a2, O4);
    let o4 = -1 / 0, h2 = 1 / 0;
    const c3 = this.getHalfSize(ct2);
    for (let d2 = 0; d2 < 3; d2++) {
      const t3 = r2[d2], a3 = n5[d2], s5 = c3[d2] + e4;
      if (Math.abs(a3) > 1e-6) {
        const e5 = (s5 - t3) / a3, i2 = (-s5 - t3) / a3;
        o4 = Math.max(o4, Math.min(e5, i2)), h2 = Math.min(h2, Math.max(e5, i2));
      } else if (t3 > s5 || t3 < -s5) return false;
    }
    return o4 <= h2;
  }
  projectedArea(e4, s4, i, n5) {
    const o4 = this.getQuaternion(T2);
    O2(O4, o4), X4[0] = e4[0] - this._data[0], X4[1] = e4[1] - this._data[1], X4[2] = e4[2] - this._data[2], E(X4, X4, O4);
    const h2 = this.getHalfSize(ct2), _2 = X4[0] < -h2[0] ? -1 : X4[0] > h2[0] ? 1 : 0, l5 = X4[1] < -h2[1] ? -1 : X4[1] > h2[1] ? 1 : 0, m3 = X4[2] < -h2[2] ? -1 : X4[2] > h2[2] ? 1 : 0, g3 = Math.abs(_2) + Math.abs(l5) + Math.abs(m3);
    if (0 === g3) return 1 / 0;
    const p3 = 1 === g3 ? 4 : 6, M2 = 6 * (_2 + 3 * l5 + 9 * m3 + 13);
    p(dt, o4), f2(dt, dt, h2);
    const b3 = this.getCenter(ot2);
    for (let t2 = 0; t2 < p3; t2++) {
      const a2 = K3[M2 + t2];
      o(X4, ((1 & a2) << 1) - 1, (2 & a2) - 1, ((4 & a2) >> 1) - 1), S(X4, X4, dt), u(E3, b3, X4), E3[3] = 1, z(E3, E3, s4);
      const e5 = 1 / Math.max(1e-6, E3[3]);
      N2[2 * t2] = E3[0] * e5, N2[2 * t2 + 1] = E3[1] * e5;
    }
    const j2 = 2 * p3 - 2;
    let S3 = N2[0] * (N2[3] - N2[j2 + 1]) + N2[j2] * (N2[1] - N2[j2 - 1]);
    for (let t2 = 2; t2 < j2; t2 += 2) S3 += N2[t2] * (N2[t2 + 3] - N2[t2 - 1]);
    return Math.abs(S3) * i * n5 * 0.125;
  }
  projectedRadius(t2) {
    const a2 = this.getQuaternion(T2);
    return O2(O4, a2), E(X4, t2, O4), Math.abs(X4[0] * this._data[3]) + Math.abs(X4[1] * this._data[4]) + Math.abs(X4[2] * this._data[5]);
  }
  minimumDistancePlane(t2) {
    return t2[0] * this._data[0] + t2[1] * this._data[1] + t2[2] * this._data[2] + t2[3] - this.projectedRadius(F(t2));
  }
  maximumDistancePlane(t2) {
    return t2[0] * this._data[0] + t2[1] * this._data[1] + t2[2] * this._data[2] + t2[3] + this.projectedRadius(F(t2));
  }
  toAaBoundingBox(a2) {
    const e4 = this.getQuaternion(T2), s4 = p(dt, e4), i = this._data[3] * Math.abs(s4[0]) + this._data[4] * Math.abs(s4[3]) + this._data[5] * Math.abs(s4[6]), r2 = this._data[3] * Math.abs(s4[1]) + this._data[4] * Math.abs(s4[4]) + this._data[5] * Math.abs(s4[7]), n5 = this._data[3] * Math.abs(s4[2]) + this._data[4] * Math.abs(s4[5]) + this._data[5] * Math.abs(s4[8]);
    a2[0] = this._data[0] - i, a2[1] = this._data[1] - r2, a2[2] = this._data[2] - n5, a2[3] = this._data[0] + i, a2[4] = this._data[1] + r2, a2[5] = this._data[2] + n5;
  }
  transform(t2, a2, e4, s4 = 0, i = a(e4), r2 = a(a2), n5 = G(a2, r2)) {
    if (e4 === i) a2.isGeographic ? st2(this, t2, a2, s4, r2) : et2(this, t2, a2, s4, r2, n5);
    else if (a2.isWGS84 && (e4.isWebMercator || O(e4))) $2(a2, this, e4, t2, s4);
    else if (a2.isWebMercator && O(e4)) tt2(a2, this, e4, t2, s4);
    else {
      const i2 = this.getCenter(ot2);
      i2[2] += s4, n2(i2, a2, 0, i2, e4, 0, 1), t2.center = i2, this !== t2 && (t2.quaternion = this.getQuaternion(T2), t2.halfSize = this.getHalfSize(ct2));
    }
  }
};
var O4 = e3();
var T2 = e3();
var V2 = e3();
var X4 = n();
var Y2 = n();
var E3 = n3();
function J2(t2, a2 = new I2()) {
  return u3(t2, a2), a2;
}
var N2 = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2];
var K3 = (() => {
  const t2 = new Int8Array(162);
  let a2 = 0;
  const e4 = (e5) => {
    for (let s4 = 0; s4 < e5.length; s4++) t2[a2 + s4] = e5[s4];
    a2 += 6;
  };
  return e4([6, 2, 3, 1, 5, 4]), e4([0, 2, 3, 1, 5, 4]), e4([0, 2, 3, 7, 5, 4]), e4([0, 1, 3, 2, 6, 4]), e4([0, 1, 3, 2, 0, 0]), e4([0, 1, 5, 7, 3, 2]), e4([0, 1, 3, 7, 6, 4]), e4([0, 1, 3, 7, 6, 2]), e4([0, 1, 5, 7, 6, 2]), e4([0, 1, 5, 4, 6, 2]), e4([0, 1, 5, 4, 0, 0]), e4([0, 1, 3, 7, 5, 4]), e4([0, 2, 6, 4, 0, 0]), e4([0, 0, 0, 0, 0, 0]), e4([1, 3, 7, 5, 0, 0]), e4([2, 3, 7, 6, 4, 0]), e4([2, 3, 7, 6, 0, 0]), e4([2, 3, 1, 5, 7, 6]), e4([0, 1, 5, 7, 6, 2]), e4([0, 1, 5, 7, 6, 4]), e4([0, 1, 3, 7, 6, 4]), e4([4, 5, 7, 6, 2, 0]), e4([4, 5, 7, 6, 0, 0]), e4([4, 5, 1, 3, 7, 6]), e4([0, 2, 3, 7, 5, 4]), e4([6, 2, 3, 7, 5, 4]), e4([6, 2, 3, 1, 5, 4]), t2;
})();
function L2(t2, a2, e4, s4, i) {
  const n5 = t2.getQuaternion(T2);
  i.quaternion = n5, O2(O4, n5);
  const o4 = t2.getCenter(ot2), h2 = t2.getHalfSize(ct2);
  if (s4 === l3.Global) {
    E(mt2, o4, O4), f(ft2, mt2), m(ut2, ft2, h2), K(ut2, ft2, ut2);
    const s5 = s2(ut2);
    u(ut2, ft2, h2);
    const r2 = s2(ut2);
    if (s5 < e4) i.center = o4, o(mt2, e4, e4, e4), i.halfSize = u(mt2, h2, mt2);
    else {
      const n6 = r2 > 0 ? 1 + a2 / r2 : 1, o5 = s5 > 0 ? 1 + e4 / s5 : 1, c3 = (o5 + n6) / 2, _2 = (o5 - n6) / 2;
      g(ut2, ft2, _2), i.halfSize = q(ut2, ut2, h2, c3), g(ut2, ft2, c3), q(ut2, ut2, h2, _2), l2(mt2, mt2), c(mt2, ut2, mt2);
      const l5 = t2.getQuaternion(V2);
      i.center = E(mt2, mt2, l5);
    }
  } else {
    i.center = q(mt2, o4, y, (e4 + a2) / 2);
    const t3 = E(mt2, y, O4);
    f(t3, t3), i.halfSize = q(ft2, h2, t3, (e4 - a2) / 2);
  }
  return i;
}
function $2(t2, a2, e4, s4, i) {
  a2.getCenter(ot2), ot2[2] += i;
  const r2 = a(e4);
  n2(ot2, t2, 0, ot2, r2, 0, 1), at2(r2, a2, ot2, e4, s4);
}
function tt2(t2, a2, e4, s4, i) {
  a2.getCenter(ot2), ot2[2] += i, at2(t2, a2, ot2, e4, s4);
}
function at2(a2, e4, s4, i, r2) {
  const n5 = e4.getQuaternion(T2), o4 = p(dt, n5), h2 = e4.getHalfSize(ct2);
  for (let t2 = 0; t2 < 8; ++t2) {
    for (let a3 = 0; a3 < 3; ++a3) nt2[a3] = h2[a3] * (t2 & 1 << a3 ? -1 : 1);
    for (let a3 = 0; a3 < 3; ++a3) {
      let e5 = s4[a3];
      for (let t3 = 0; t3 < 3; ++t3) e5 += nt2[t3] * o4[3 * t3 + a3];
      it2[3 * t2 + a3] = e5;
    }
  }
  n2(it2, a2, 0, it2, i, 0, 8), J2(rt2, r2);
}
function et2(t2, a2, e4, s4, i = a(e4), o4 = G(e4, i)) {
  t2.getCorners(lt), t2.getCenter(nt2), nt2[2] += s4, u2(e4, nt2, _t, i), a2.setCenter(_t[12], _t[13], _t[14]);
  const h2 = 2 * Math.sqrt(1 + _t[0] + _t[5] + _t[10]);
  O4[0] = (_t[6] - _t[9]) / h2, O4[1] = (_t[8] - _t[2]) / h2, O4[2] = (_t[1] - _t[4]) / h2, O4[3] = 0.25 * h2;
  const l5 = t2.getQuaternion(T2);
  a2.quaternion = x(O4, O4, l5), O2(O4, O4), o(ft2, 0, 0, 0);
  const m3 = a2.getCenter(ht2);
  for (const r2 of lt) r2[2] += s4, o4(r2, 0, r2, 0), K(mt2, r2, m3), E(mt2, mt2, O4), f(mt2, mt2), b(ft2, ft2, mt2);
  a2.halfSize = ft2;
}
function st2(t2, a2, e4, s4, i = a(e4)) {
  const n5 = s(e4), o4 = 1 + Math.max(0, s4) / (n5.radius + t2.centerZ);
  t2.getCenter(nt2), nt2[2] += s4, n2(nt2, e4, 0, nt2, i, 0, 1), a2.center = nt2;
  const h2 = t2.getQuaternion(T2);
  a2.quaternion = h2, O2(O4, h2), o(mt2, 0, 0, 1), E(mt2, mt2, O4);
  const _2 = t2.getHalfSize(ct2);
  o(mt2, _2[0] * Math.abs(mt2[0]), _2[1] * Math.abs(mt2[1]), _2[2] * Math.abs(mt2[2])), g(mt2, mt2, n5.inverseFlattening), u(mt2, _2, mt2), a2.halfSize = g(mt2, mt2, o4);
}
var it2 = new Array(24);
var rt2 = new s3(it2, 3);
var nt2 = n();
var ot2 = n();
var ht2 = n();
var ct2 = n();
var dt = e2();
var _t = e();
var lt = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
var mt2 = n();
var ft2 = n();
var ut2 = n();
var gt = r(-1, -1, -1);

export {
  I2 as I,
  J2 as J,
  L2 as L
};
//# sourceMappingURL=chunk-AVCKPV77.js.map
