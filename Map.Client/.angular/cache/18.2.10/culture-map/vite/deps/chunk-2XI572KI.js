import {
  n as n4
} from "./chunk-R4P4UBKU.js";
import {
  o as o2,
  t
} from "./chunk-62WUYJJN.js";
import {
  e as e3,
  f as f3,
  l as l2
} from "./chunk-AWJPQWYU.js";
import {
  T,
  i
} from "./chunk-JNWMZ6EJ.js";
import {
  u
} from "./chunk-KVKFHRJ3.js";
import {
  a
} from "./chunk-VWML4J2J.js";
import {
  j,
  n as n3
} from "./chunk-JYODC3YQ.js";
import {
  e,
  o
} from "./chunk-BQZBOYBD.js";
import {
  e as e2
} from "./chunk-TYQXPPSP.js";
import {
  J
} from "./chunk-DUTZNK67.js";
import {
  C,
  c,
  h as h2
} from "./chunk-XTVPEVHA.js";
import {
  n as n2
} from "./chunk-OGZAGPIO.js";
import {
  f as f2
} from "./chunk-O7UDKFOW.js";
import {
  _,
  h
} from "./chunk-3ZXOUEQG.js";
import {
  G,
  S,
  z
} from "./chunk-AXVPJBVW.js";
import {
  l,
  n
} from "./chunk-OXEPWRM7.js";
import {
  f2 as f,
  k,
  p
} from "./chunk-JJS7PR2U.js";
import {
  s
} from "./chunk-L5YS4GSA.js";

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/projection.js
var L = "Projection may be possible after calling projection.load().";
function S2(r, t2, o3, e4) {
  r.error(`Failed to project from (wkid:${t2.wkid}) to (wkid:${o3.wkid}).${e4 ? " " : ""}${e4}`);
}
function v(r, t2, o3, e4, n5) {
  return I(z2.TO_PCPF, i.fromTypedArray(r), D.NORMAL, T.fromTypedArray(t2), T.fromTypedArray(o3), e4, i.fromTypedArray(n5)) ? n5 : null;
}
function k2(r, t2, o3, e4, n5) {
  return I(z2.FROM_PCPF, i.fromTypedArray(r), D.NORMAL, T.fromTypedArray(t2), T.fromTypedArray(o3), e4, i.fromTypedArray(n5)) ? n5 : null;
}
function w(r, t2, o3) {
  return n2(r, t2, 0, o3, a(t2), 0, r.length / 3) ? o3 : null;
}
function G2(r, t2, o3) {
  return n2(r, a(o3), 0, t2, o3, 0, r.length / 3) ? t2 : null;
}
function V(t2, e4, n5) {
  return j(or, n5), f3(e4, t2, or), _(or) && l2(e4, e4), e4;
}
function B(t2, o3, n5) {
  return n3(or, n5), n4(o3, t2, or), _(or) && l2(o3, o3, 4), o3;
}
function U(r, o3, e4, n5) {
  const i2 = o3 === D.NORMAL;
  return W(r, o3, e4, (r2, o4) => {
    const e5 = Math.cos(h(r2));
    o4[0] = i2 ? e5 : 1 / e5, o4[1] = 1;
  }, n5);
}
function $(r, t2, o3, e4) {
  const n5 = t2 === D.NORMAL;
  return W(r, t2, o3, (r2, t3) => {
    const o4 = Math.cosh(-r2 / s.radius);
    t3[0] = 1, t3[1] = n5 ? o4 : 1 / o4;
  }, e4);
}
function W(r, t2, o3, e4, n5) {
  const i2 = t2 === D.NORMAL ? 3 : 4, c2 = [0, 0];
  for (let a2 = 0, f4 = 1; a2 < r.length; a2 += i2, f4 += 3) {
    e4(o3[f4], c2);
    const t3 = r[a2] * c2[0], s2 = r[a2 + 1] * c2[1], l3 = r[a2 + 2], m = 1 / Math.sqrt(t3 * t3 + s2 * s2 + l3 * l3);
    n5[a2] = t3 * m, n5[a2 + 1] = s2 * m, n5[a2 + 2] = l3 * m, 4 === i2 && (n5[a2 + 3] = r[a2 + 3]);
  }
  return n5;
}
function Y(r, t2, o3, e4, n5) {
  if (!I(z2.TO_PCPF, i.fromTypedArray(r, 4 * Float32Array.BYTES_PER_ELEMENT), D.TANGENT, T.fromTypedArray(t2), T.fromTypedArray(o3), e4, i.fromTypedArray(n5, 4 * Float32Array.BYTES_PER_ELEMENT))) return null;
  for (let i2 = 3; i2 < r.length; i2 += 4) n5[i2] = r[i2];
  return n5;
}
function q(r, t2, o3, e4, n5) {
  if (!I(z2.FROM_PCPF, i.fromTypedArray(r, 16), D.TANGENT, T.fromTypedArray(t2), T.fromTypedArray(o3), e4, i.fromTypedArray(n5, 16))) return null;
  for (let i2 = 3; i2 < r.length; i2 += 4) n5[i2] = r[i2];
  return n5;
}
var D;
var z2;
function H(r, t2, n5, i2, c2) {
  switch (u(i2, n5, tr, i2), r === z2.FROM_PCPF && h2(tr, tr), t2) {
    case D.NORMAL:
      return j(c2, tr);
    case D.TANGENT:
      return n3(c2, tr);
  }
}
function I(r, t2, o3, e4, n5, i2, c2) {
  if (!t2) return;
  const a2 = e4.count, f4 = a(i2);
  if (X(i2)) for (let s2 = 0; s2 < a2; s2++) n5.getVec(s2, Z), t2.getVec(s2, rr), S(rr, rr, H(r, o3, Z, f4, or)), c2.setVec(s2, rr);
  else for (let s2 = 0; s2 < a2; s2++) {
    n5.getVec(s2, Z), t2.getVec(s2, rr);
    const i3 = f2(e4.get(s2, 1));
    let a3 = Math.cos(i3);
    o3 === D.TANGENT != (r === z2.TO_PCPF) && (a3 = 1 / a3), H(r, o3, Z, f4, or), r === z2.TO_PCPF ? (or[0] *= a3, or[1] *= a3, or[2] *= a3, or[3] *= a3, or[4] *= a3, or[5] *= a3) : (or[0] *= a3, or[3] *= a3, or[6] *= a3, or[1] *= a3, or[4] *= a3, or[7] *= a3), S(rr, rr, or), z(rr, rr), c2.setVec(s2, rr);
  }
  return c2;
}
function J2(r) {
  return "local" === r.vertexSpace.type ? K(r) : Q(r);
}
function K({
  vertexSpace: r,
  transform: t2,
  inSpatialReference: o3,
  outSpatialReference: e4,
  localMode: n5,
  outPositions: c2,
  positions: a2
}) {
  const s2 = r.origin ?? l, l3 = null != r.origin ? t2?.localMatrix ?? o : o, m = a(o3), u2 = e4.isWebMercator && n5 || !J(o3, m) ? o3 : m;
  u(o3, s2, tr, u2), c(tr, tr, l3);
  const T2 = c2 ?? t(a2.length);
  return e3(T2, a2, tr), n2(T2, u2, 0, T2, e4, 0, T2.length / 3), T2;
}
function Q({
  vertexSpace: r,
  transform: t2,
  outPositions: o3,
  positions: e4,
  inSpatialReference: n5,
  outSpatialReference: i2
}) {
  const a2 = null != r.origin ? t2?.localMatrix ?? o : o, s2 = o3 ?? t(e4.length);
  C(a2, o) ? o2(s2, e4) : e3(s2, e4, a2);
  const l3 = r.origin ?? l;
  if (!G(l3, l)) {
    const [r2, t3, o4] = l3;
    for (let e5 = 0; e5 < s2.length; e5 += 3) s2[e5] += r2, s2[e5 + 1] += t3, s2[e5 + 2] += o4;
  }
  return n2(s2, n5, 0, s2, i2, 0, s2.length / 3) ? s2 : null;
}
function X(r) {
  return r.isWGS84 || k(r) || f(r) || p(r);
}
!function(r) {
  r[r.NORMAL = 0] = "NORMAL", r[r.TANGENT = 1] = "TANGENT";
}(D || (D = {})), function(r) {
  r[r.TO_PCPF = 0] = "TO_PCPF", r[r.FROM_PCPF = 1] = "FROM_PCPF";
}(z2 || (z2 = {}));
var Z = n();
var rr = n();
var tr = e();
var or = e2();

export {
  L,
  S2 as S,
  v,
  k2 as k,
  w,
  G2 as G,
  V,
  B,
  U,
  $,
  Y,
  q,
  D,
  J2 as J
};
//# sourceMappingURL=chunk-2XI572KI.js.map
