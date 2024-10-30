import {
  j
} from "./chunk-4OGGMTIH.js";
import {
  e as e5
} from "./chunk-NQVBBKAN.js";
import {
  n as n3
} from "./chunk-DY7FJHTG.js";
import {
  e as e3
} from "./chunk-BQZBOYBD.js";
import {
  e as e4
} from "./chunk-TYQXPPSP.js";
import {
  n as n2
} from "./chunk-IMVP5ADD.js";
import {
  e as e2,
  m
} from "./chunk-3ZXOUEQG.js";
import {
  G,
  P,
  _,
  e,
  g,
  o,
  r,
  s,
  u,
  z
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import {
  t
} from "./chunk-ANP42J2U.js";

// ../../../node_modules/@arcgis/core/geometry/support/vector.js
function e6(t3, o3, s2) {
  const c2 = P(t3, o3) / P(t3, t3);
  return g(s2, t3, c2);
}
function a(t3, n4) {
  return P(t3, n4) / s(t3);
}
function f(n4, s2) {
  const c2 = P(n4, s2) / (s(n4) * s(s2));
  return -m(c2);
}
function m2(n4, o3, i) {
  z(u2, n4), z(j2, o3);
  const e7 = P(u2, j2), a3 = m(e7), f3 = _(u2, u2, j2);
  return P(f3, i) < 0 ? 2 * Math.PI - a3 : a3;
}
var u2 = n();
var j2 = n();

// ../../../node_modules/@arcgis/core/core/VectorStack.js
var m3 = class _m {
  constructor(t3) {
    this._create = t3, this._items = new Array(), this._itemsPtr = 0;
  }
  get() {
    return 0 === this._itemsPtr && t(() => this._reset()), this._itemsPtr >= this._items.length && this._items.push(this._create()), this._items[this._itemsPtr++];
  }
  _reset() {
    const t3 = 2 * this._itemsPtr;
    this._items.length > t3 && (this._items.length = t3), this._itemsPtr = 0;
  }
  static createVec2f64() {
    return new _m(n3);
  }
  static createVec3f64() {
    return new _m(n);
  }
  static createVec4f64() {
    return new _m(n2);
  }
  static createMat3f64() {
    return new _m(e4);
  }
  static createMat4f64() {
    return new _m(e3);
  }
  static createQuatf64() {
    return new _m(e5);
  }
  get test() {
  }
};

// ../../../node_modules/@arcgis/core/geometry/support/vectorStacks.js
var t2 = m3.createVec2f64();
var c = m3.createVec3f64();
var r2 = m3.createVec4f64();
var a2 = m3.createMat3f64();
var f2 = m3.createMat4f64();
var o2 = m3.createQuatf64();

// ../../../node_modules/@arcgis/core/geometry/support/plane.js
function E2(t3 = Y) {
  return [t3[0], t3[1], t3[2], t3[3]];
}
function v(t3 = Y[0], n4 = Y[1], r3 = Y[2], o3 = Y[3]) {
  return T(t3, n4, r3, o3, r2.get());
}
function A(t3, n4) {
  return T(n4[0], n4[1], n4[2], n4[3], t3);
}
function F(t3) {
  return t3;
}
function T(t3, n4, r3, o3, c2 = E2()) {
  return c2[0] = t3, c2[1] = n4, c2[2] = r3, c2[3] = o3, c2;
}
function _2(t3, r3, o3) {
  return r(o3, t3), o3[3] = r3, o3;
}
function j3(t3, n4, r3) {
  const o3 = n4[0] * n4[0] + n4[1] * n4[1] + n4[2] * n4[2], c2 = Math.abs(o3 - 1) > 1e-5 && o3 > 1e-12 ? 1 / Math.sqrt(o3) : 1;
  return r3[0] = n4[0] * c2, r3[1] = n4[1] * c2, r3[2] = n4[2] * c2, r3[3] = -(r3[0] * t3[0] + r3[1] * t3[1] + r3[2] * t3[2]), r3;
}
function b(t3, n4, r3, o3 = E2()) {
  const c2 = r3[0] - n4[0], e7 = r3[1] - n4[1], u3 = r3[2] - n4[2], i = t3[0] - n4[0], s2 = t3[1] - n4[1], f3 = t3[2] - n4[2], a3 = e7 * f3 - u3 * s2, I = u3 * i - c2 * f3, N = c2 * s2 - e7 * i, M = a3 * a3 + I * I + N * N, m4 = Math.abs(M - 1) > 1e-5 && M > 1e-12 ? 1 / Math.sqrt(M) : 1;
  return o3[0] = a3 * m4, o3[1] = I * m4, o3[2] = N * m4, o3[3] = -(o3[0] * t3[0] + o3[1] * t3[1] + o3[2] * t3[2]), o3;
}
function X(t3, n4, u3, i = 0, s2 = Math.floor(u3 * (1 / 3)), f3 = Math.floor(u3 * (2 / 3))) {
  if (u3 < 3) return false;
  n4(C, i);
  let a3 = s2, I = false;
  for (; a3 < u3 - 1 && !I; ) n4(L2, a3), a3++, I = !G(C, L2);
  if (!I) return false;
  for (a3 = Math.max(a3, f3), I = false; a3 < u3 && !I; ) n4(P2, a3), a3++, e(k, C, L2), z(k, k), e(x, L2, P2), z(x, x), I = !G(C, P2) && !G(L2, P2) && Math.abs(P(k, x)) < y;
  return I ? (b(C, L2, P2, t3), true) : (0 !== i || 1 !== s2 || 2 !== f3) && X(t3, n4, u3, 0, 1, 2);
}
function d(t3, n4, r3 = true) {
  const o3 = n4.length / 3;
  return X(t3, (t4, r4) => o(t4, n4[3 * r4 + 0], n4[3 * r4 + 1], n4[3 * r4 + 2]), r3 ? o3 - 1 : o3);
}
var y = 0.99619469809;
var C = n();
var L2 = n();
var P2 = n();
var k = n();
var x = n();
function O(t3, n4, r3) {
  return n4 !== t3 && A(t3, n4), t3[3] = -P(F(t3), r3), t3;
}
function q(t3, n4) {
  return n4[0] = -t3[0], n4[1] = -t3[1], n4[2] = -t3[2], n4[3] = -t3[3], n4;
}
function U(t3, n4, r3, o3) {
  return _(P2, n4, t3), j3(r3, P2, o3);
}
function w(t3, n4, r3, c2) {
  return W(t3, n4, e(c.get(), r3, n4), $, c2);
}
function S(t3, n4, r3) {
  return null != n4 && W(t3, n4.origin, n4.direction, tt, r3);
}
function z2(t3, n4, r3) {
  return W(t3, n4.origin, n4.vector, Z.NONE, r3);
}
function B(t3, n4, r3) {
  return W(t3, n4.origin, n4.vector, Z.CLAMP, r3);
}
function D(t3, n4) {
  return V(t3, n4) >= 0;
}
function G2(t3, n4) {
  const r3 = P(F(t3), n4.ray.direction), o3 = -V(t3, n4.ray.origin);
  if (o3 < 0 && r3 >= 0) return false;
  if (r3 > -1e-6 && r3 < 1e-6) return o3 > 0;
  if ((o3 < 0 || r3 < 0) && !(o3 < 0 && r3 < 0)) return true;
  const c2 = o3 / r3;
  return r3 > 0 ? c2 < n4.c1 && (n4.c1 = c2) : c2 > n4.c0 && (n4.c0 = c2), n4.c0 <= n4.c1;
}
function H(t3, n4) {
  const r3 = P(F(t3), n4.ray.direction), o3 = -V(t3, n4.ray.origin);
  if (r3 > -1e-6 && r3 < 1e-6) return o3 > 0;
  const c2 = o3 / r3;
  return r3 > 0 ? c2 < n4.c1 && (n4.c1 = c2) : c2 > n4.c0 && (n4.c0 = c2), n4.c0 <= n4.c1;
}
function J(t3, n4, r3) {
  const c2 = g(c.get(), F(t3), -t3[3]), e7 = Q(t3, e(c.get(), n4, c2), c.get());
  return u(r3, e7, c2), r3;
}
function K(t3, n4, r3, c2) {
  const e7 = F(t3), i = c.get(), s2 = c.get();
  j(e7, i, s2);
  const f3 = e(c.get(), r3, n4), a3 = a(i, f3), I = a(s2, f3), N = a(e7, f3);
  return o(c2, a3, I, N);
}
function Q(t3, n4, r3) {
  const c2 = g(c.get(), F(t3), P(F(t3), n4));
  return e(r3, n4, c2), r3;
}
function R(t3, n4) {
  return Math.abs(V(t3, n4));
}
function V(t3, n4) {
  return P(F(t3), n4) + t3[3];
}
function W(n4, r3, o3, c2, u3) {
  const i = P(F(n4), o3);
  if (0 === i) return false;
  let a3 = -(P(F(n4), r3) + n4[3]) / i;
  return c2 & Z.CLAMP && (a3 = e2(a3, 0, 1)), !(!(c2 & Z.INFINITE_MIN) && a3 < 0 || !(c2 & Z.INFINITE_MAX) && a3 > 1) && (u(u3, r3, g(u3, o3, a3)), true);
}
var Y = [0, 0, 1, 0];
var Z;
!function(t3) {
  t3[t3.NONE = 0] = "NONE", t3[t3.CLAMP = 1] = "CLAMP", t3[t3.INFINITE_MIN = 4] = "INFINITE_MIN", t3[t3.INFINITE_MAX = 8] = "INFINITE_MAX";
}(Z || (Z = {}));
var $ = Z.INFINITE_MIN | Z.INFINITE_MAX;
var tt = Z.INFINITE_MAX;

export {
  t2 as t,
  c,
  r2 as r,
  f2 as f,
  o2 as o,
  e6 as e,
  a,
  f as f2,
  m2 as m,
  E2 as E,
  v,
  A,
  F,
  T,
  _2 as _,
  j3 as j,
  b,
  X,
  d,
  O,
  q,
  U,
  w,
  S,
  z2 as z,
  B,
  D,
  G2 as G,
  H,
  J,
  K,
  Q,
  R,
  V
};
//# sourceMappingURL=chunk-N4KQPPPI.js.map
