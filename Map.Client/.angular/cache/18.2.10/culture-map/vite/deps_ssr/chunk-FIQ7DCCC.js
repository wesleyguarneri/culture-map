import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  b,
  m,
  v
} from "./chunk-6ZLH7XBS.js";
import {
  s as s2
} from "./chunk-44ZUWZXU.js";
import {
  A,
  E,
  G,
  H,
  V,
  b as b2,
  f,
  r as r2
} from "./chunk-2TNGEJGS.js";
import {
  r
} from "./chunk-VSQZQLTQ.js";
import {
  z
} from "./chunk-K43CZ3M5.js";
import {
  c,
  h
} from "./chunk-KOI252FF.js";
import {
  g,
  o,
  s,
  u
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/geometry/support/clipRay.js
function a(r3) {
  return r3 ? {
    ray: m(r3.ray),
    c0: r3.c0,
    c1: r3.c1
  } : {
    ray: m(),
    c0: 0,
    c1: Number.MAX_VALUE
  };
}
function y(r3, c2 = a()) {
  return b(r3, c2.ray), c2.c0 = 0, c2.c1 = Number.MAX_VALUE, c2;
}
function m2(r3, n2, t = a()) {
  const o2 = s(r3.vector);
  return v(r3.origin, n2, t.ray), t.c0 = 0, t.c1 = o2, t;
}
function j(r3, c2) {
  return g2(r3, r3.c0, c2);
}
function p(r3, c2) {
  return g2(r3, r3.c1, c2);
}
function g2(r3, c2, o2) {
  return u(o2, r3.ray.origin, g(o2, r3.ray.direction, c2));
}
var A2 = new s2(() => a());

// ../../../node_modules/@arcgis/core/geometry/support/frustum.js
function H2(T) {
  return T ? [E(T[0]), E(T[1]), E(T[2]), E(T[3]), E(T[4]), E(T[5])] : [E(), E(), E(), E(), E(), E()];
}
function I() {
  return [n(), n(), n(), n(), n(), n(), n(), n()];
}
function N(T, _) {
  for (let O = 0; O < b3; O++) A(T[O], _[O]);
  return T;
}
function L(T, t, A3, E2 = y2) {
  const F = c(f.get(), t, T);
  h(F, F);
  for (let _ = 0; _ < h2; ++_) {
    const T2 = z(r2.get(), k[_], F);
    o(E2[_], T2[0] / T2[3], T2[1] / T2[3], T2[2] / T2[3]);
  }
  P(A3, E2);
}
function P(T, _) {
  b2(_[g3.FAR_BOTTOM_LEFT], _[g3.NEAR_BOTTOM_LEFT], _[g3.NEAR_TOP_LEFT], T[j2.LEFT]), b2(_[g3.NEAR_BOTTOM_RIGHT], _[g3.FAR_BOTTOM_RIGHT], _[g3.FAR_TOP_RIGHT], T[j2.RIGHT]), b2(_[g3.FAR_BOTTOM_LEFT], _[g3.FAR_BOTTOM_RIGHT], _[g3.NEAR_BOTTOM_RIGHT], T[j2.BOTTOM]), b2(_[g3.NEAR_TOP_LEFT], _[g3.NEAR_TOP_RIGHT], _[g3.FAR_TOP_RIGHT], T[j2.TOP]), b2(_[g3.NEAR_BOTTOM_LEFT], _[g3.NEAR_BOTTOM_RIGHT], _[g3.NEAR_TOP_RIGHT], T[j2.NEAR]), b2(_[g3.FAR_BOTTOM_RIGHT], _[g3.FAR_BOTTOM_LEFT], _[g3.FAR_TOP_LEFT], T[j2.FAR]);
}
function s3(T, _) {
  for (let O = 0; O < b3; O++) {
    const R = T[O];
    if (R[0] * _[0] + R[1] * _[1] + R[2] * _[2] + R[3] >= _[3]) return false;
  }
  return true;
}
function u2(T, _) {
  return p2(T, y(_, x.get()));
}
function m3(T, _) {
  for (let O = 0; O < b3; O++) {
    const R = T[O];
    if (!H(R, _)) return false;
  }
  return true;
}
function a2(T, _, O) {
  return p2(T, m2(_, O, x.get()));
}
function l(T, _) {
  for (let O = 0; O < b3; O++) {
    if (V(T[O], _) > 0) return false;
  }
  return true;
}
function p2(T, _) {
  for (let O = 0; O < b3; O++) if (!G(T[O], _)) return false;
  return true;
}
var j2;
var g3;
!function(T) {
  T[T.LEFT = 0] = "LEFT", T[T.RIGHT = 1] = "RIGHT", T[T.BOTTOM = 2] = "BOTTOM", T[T.TOP = 3] = "TOP", T[T.NEAR = 4] = "NEAR", T[T.FAR = 5] = "FAR";
}(j2 || (j2 = {})), function(T) {
  T[T.NEAR_BOTTOM_LEFT = 0] = "NEAR_BOTTOM_LEFT", T[T.NEAR_BOTTOM_RIGHT = 1] = "NEAR_BOTTOM_RIGHT", T[T.NEAR_TOP_RIGHT = 2] = "NEAR_TOP_RIGHT", T[T.NEAR_TOP_LEFT = 3] = "NEAR_TOP_LEFT", T[T.FAR_BOTTOM_LEFT = 4] = "FAR_BOTTOM_LEFT", T[T.FAR_BOTTOM_RIGHT = 5] = "FAR_BOTTOM_RIGHT", T[T.FAR_TOP_RIGHT = 6] = "FAR_TOP_RIGHT", T[T.FAR_TOP_LEFT = 7] = "FAR_TOP_LEFT";
}(g3 || (g3 = {}));
var v2 = {
  bottom: [g3.FAR_BOTTOM_RIGHT, g3.NEAR_BOTTOM_RIGHT, g3.NEAR_BOTTOM_LEFT, g3.FAR_BOTTOM_LEFT],
  near: [g3.NEAR_BOTTOM_LEFT, g3.NEAR_BOTTOM_RIGHT, g3.NEAR_TOP_RIGHT, g3.NEAR_TOP_LEFT],
  far: [g3.FAR_BOTTOM_RIGHT, g3.FAR_BOTTOM_LEFT, g3.FAR_TOP_LEFT, g3.FAR_TOP_RIGHT],
  right: [g3.NEAR_BOTTOM_RIGHT, g3.FAR_BOTTOM_RIGHT, g3.FAR_TOP_RIGHT, g3.NEAR_TOP_RIGHT],
  left: [g3.FAR_BOTTOM_LEFT, g3.NEAR_BOTTOM_LEFT, g3.NEAR_TOP_LEFT, g3.FAR_TOP_LEFT],
  top: [g3.FAR_TOP_LEFT, g3.NEAR_TOP_LEFT, g3.NEAR_TOP_RIGHT, g3.FAR_TOP_RIGHT]
};
var b3 = 6;
var h2 = 8;
var k = [r(-1, -1, -1, 1), r(1, -1, -1, 1), r(1, 1, -1, 1), r(-1, 1, -1, 1), r(-1, -1, 1, 1), r(1, -1, 1, 1), r(1, 1, 1, 1), r(-1, 1, 1, 1)];
var x = new s2(a);
var y2 = I();

export {
  a,
  y,
  j,
  p,
  H2 as H,
  I,
  N,
  L,
  P,
  s3 as s,
  u2 as u,
  m3 as m,
  a2,
  l,
  j2,
  g3 as g,
  v2 as v,
  b3 as b
};
//# sourceMappingURL=chunk-FIQ7DCCC.js.map
