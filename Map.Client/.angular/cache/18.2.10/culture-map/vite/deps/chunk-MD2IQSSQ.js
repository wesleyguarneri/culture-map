import {
  s
} from "./chunk-XCOHDMBF.js";
import {
  c
} from "./chunk-N4KQPPPI.js";
import {
  e as e2
} from "./chunk-3ZXOUEQG.js";
import {
  P,
  e,
  g,
  p,
  r,
  u,
  v
} from "./chunk-AXVPJBVW.js";
import {
  n,
  t
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/geometry/support/lineSegment.js
function v2(t2) {
  return t2 ? {
    origin: t(t2.origin),
    vector: t(t2.vector)
  } : {
    origin: n(),
    vector: n()
  };
}
function m(t2, r2) {
  const n2 = S.get();
  return n2.origin = t2, n2.vector = r2, n2;
}
function p2(t2, r2 = v2()) {
  return b(t2.origin, t2.vector, r2);
}
function b(t2, r2, o = v2()) {
  return r(o.origin, t2), r(o.vector, r2), o;
}
function h(t2, r2, e3 = v2()) {
  return r(e3.origin, t2), e(e3.vector, r2, t2), e3;
}
function j(r2, n2) {
  const c2 = e(c.get(), n2, r2.origin), s2 = P(r2.vector, c2), a = P(r2.vector, r2.vector), u2 = e2(s2 / a, 0, 1), g2 = e(c.get(), g(c.get(), r2.vector, u2), c2);
  return P(g2, g2);
}
function M(t2, r2, n2) {
  return A(t2, r2, 0, 1, n2);
}
function l(t2, r2, n2) {
  return u(n2, t2.origin, g(n2, t2.vector, r2));
}
function A(r2, n2, a, u2, g2) {
  const {
    vector: v3,
    origin: m2
  } = r2, p3 = e(c.get(), n2, m2), b2 = P(v3, p3) / v(v3);
  return g(g2, v3, e2(b2, a, u2)), u(g2, g2, r2.origin);
}
function B(t2, r2) {
  if (k(t2, m(r2.origin, r2.direction), false, x)) {
    const {
      tA: r3,
      pB: n2,
      distance2: o
    } = x;
    if (r3 >= 0 && r3 <= 1) return o;
    if (r3 < 0) return p(t2.origin, n2);
    if (r3 > 1) return p(u(c.get(), t2.origin, t2.vector), n2);
  }
  return null;
}
function d(t2, r2, o) {
  return !!k(t2, r2, true, x) && (r(o, x.pA), true);
}
function k(r2, n2, o, e3) {
  const i = 1e-6, s2 = r2.origin, u2 = u(c.get(), s2, r2.vector), g2 = n2.origin, v3 = u(c.get(), g2, n2.vector), m2 = c.get(), p3 = c.get();
  if (m2[0] = s2[0] - g2[0], m2[1] = s2[1] - g2[1], m2[2] = s2[2] - g2[2], p3[0] = v3[0] - g2[0], p3[1] = v3[1] - g2[1], p3[2] = v3[2] - g2[2], Math.abs(p3[0]) < i && Math.abs(p3[1]) < i && Math.abs(p3[2]) < i) return false;
  const b2 = c.get();
  if (b2[0] = u2[0] - s2[0], b2[1] = u2[1] - s2[1], b2[2] = u2[2] - s2[2], Math.abs(b2[0]) < i && Math.abs(b2[1]) < i && Math.abs(b2[2]) < i) return false;
  const h2 = m2[0] * p3[0] + m2[1] * p3[1] + m2[2] * p3[2], j2 = p3[0] * b2[0] + p3[1] * b2[1] + p3[2] * b2[2], M2 = m2[0] * b2[0] + m2[1] * b2[1] + m2[2] * b2[2], l2 = p3[0] * p3[0] + p3[1] * p3[1] + p3[2] * p3[2], A2 = (b2[0] * b2[0] + b2[1] * b2[1] + b2[2] * b2[2]) * l2 - j2 * j2;
  if (Math.abs(A2) < i) return false;
  let B2 = (h2 * j2 - M2 * l2) / A2, d2 = (h2 + j2 * B2) / l2;
  o && (B2 = e2(B2, 0, 1), d2 = e2(d2, 0, 1));
  const k2 = c.get(), x2 = c.get();
  return k2[0] = s2[0] + B2 * b2[0], k2[1] = s2[1] + B2 * b2[1], k2[2] = s2[2] + B2 * b2[2], x2[0] = g2[0] + d2 * p3[0], x2[1] = g2[1] + d2 * p3[1], x2[2] = g2[2] + d2 * p3[2], e3.tA = B2, e3.tB = d2, e3.pA = k2, e3.pB = x2, e3.distance2 = p(k2, x2), true;
}
var x = {
  tA: 0,
  tB: 0,
  pA: n(),
  pB: n(),
  distance2: 0
};
var S = new s(() => v2());

export {
  v2 as v,
  m,
  p2 as p,
  b,
  h,
  j,
  M,
  l,
  A,
  B,
  d
};
//# sourceMappingURL=chunk-MD2IQSSQ.js.map
