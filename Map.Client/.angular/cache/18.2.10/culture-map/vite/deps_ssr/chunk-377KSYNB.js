import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  A as A2,
  j,
  v as v3
} from "./chunk-SNHVHW2N.js";
import {
  x as x2
} from "./chunk-6ZLH7XBS.js";
import {
  s as s3
} from "./chunk-44ZUWZXU.js";
import {
  A,
  B,
  D,
  E,
  F,
  J as J2,
  O as O2,
  S,
  T,
  U,
  a,
  c,
  v as v2,
  z as z2
} from "./chunk-2TNGEJGS.js";
import {
  e as e2
} from "./chunk-YGAXDKHF.js";
import {
  h,
  p,
  s as s2
} from "./chunk-KOI252FF.js";
import {
  n as n3
} from "./chunk-UFQD6AL4.js";
import {
  m
} from "./chunk-2OZSYJDX.js";
import {
  G,
  J,
  O,
  P,
  e,
  g,
  o,
  r as r2,
  s,
  u,
  v,
  x,
  z
} from "./chunk-MZM4INJV.js";
import {
  n as n2,
  r,
  t
} from "./chunk-J4GMQHGL.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/chunks/boundedPlane.js
var U2 = () => n.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");
var z3 = class {
  constructor() {
    this.plane = E(), this.origin = n2(), this.basis1 = n2(), this.basis2 = n2();
  }
};
var G2 = z3;
function W(s4 = Ns) {
  return {
    plane: E(s4.plane),
    origin: t(s4.origin),
    basis1: t(s4.basis1),
    basis2: t(s4.basis2)
  };
}
function X(s4, t2, i) {
  const n4 = Ss.get();
  return n4.origin = s4, n4.basis1 = t2, n4.basis2 = i, n4.plane = v2(0, 0, 0, 0), J3(n4), n4;
}
function Z(s4, t2 = W()) {
  return H(s4.origin, s4.basis1, s4.basis2, t2);
}
function D2(s4, t2) {
  r2(t2.origin, s4.origin), r2(t2.basis1, s4.basis1), r2(t2.basis2, s4.basis2), A(t2.plane, s4.plane);
}
function H(s4, t2, i, n4 = W()) {
  return r2(n4.origin, s4), r2(n4.basis1, t2), r2(n4.basis2, i), J3(n4), Ps(n4, "fromValues()"), n4;
}
function J3(s4) {
  U(s4.basis2, s4.basis1, s4.origin, s4.plane);
}
function K(s4, t2, i) {
  s4 !== i && Z(s4, i);
  const n4 = g(c.get(), ds(s4), t2);
  return u(i.origin, i.origin, n4), i.plane[3] -= t2, i;
}
function Q(s4, t2, i) {
  return $(t2, i), K(i, bs(s4, s4.origin), i), i;
}
function $(s4, t2 = W()) {
  const i = (s4[2] - s4[0]) / 2, n4 = (s4[3] - s4[1]) / 2;
  return o(t2.origin, s4[0] + i, s4[1] + n4, 0), o(t2.basis1, i, 0, 0), o(t2.basis2, 0, n4, 0), T(0, 0, 1, 0, t2.plane), t2;
}
function ss(s4, t2, i) {
  return !!S(s4.plane, t2, i) && js(s4, i);
}
function ts(s4, t2, i) {
  if (ss(s4, t2, i)) return i;
  const n4 = is(s4, t2, c.get());
  return u(i, t2.origin, g(c.get(), t2.direction, x(t2.origin, n4) / s(t2.direction))), i;
}
function is(s4, i, n4) {
  const r3 = ws.get();
  vs(s4, i, r3, ws.get());
  let o2 = Number.POSITIVE_INFINITY;
  for (const e3 of Ts) {
    const c2 = ys(s4, e3, xs.get()), u2 = c.get();
    if (z2(r3, c2, u2)) {
      const s5 = J(c.get(), i.origin, u2), r4 = Math.abs(m(P(i.direction, s5)));
      r4 < o2 && (o2 = r4, r2(n4, u2));
    }
  }
  return o2 === Number.POSITIVE_INFINITY ? ns(s4, i, n4) : n4;
}
function ns(s4, t2, i) {
  if (ss(s4, t2, i)) return i;
  const n4 = ws.get(), r3 = ws.get();
  vs(s4, t2, n4, r3);
  let o2 = Number.POSITIVE_INFINITY;
  for (const e3 of Ts) {
    const c2 = ys(s4, e3, xs.get()), u2 = c.get();
    if (B(n4, c2, u2)) {
      const s5 = x2(t2, u2);
      if (!D(r3, u2)) continue;
      s5 < o2 && (o2 = s5, r2(i, u2));
    }
  }
  return es(s4, t2.origin) < o2 && rs(s4, t2.origin, i), i;
}
function rs(s4, t2, i) {
  const n4 = J2(s4.plane, t2, c.get()), r3 = A2(Is(s4, s4.basis1), n4, -1, 1, c.get()), o2 = A2(Is(s4, s4.basis2), n4, -1, 1, c.get());
  return e(i, u(c.get(), r3, o2), s4.origin), i;
}
function os(s4, t2, i) {
  const {
    origin: n4,
    basis1: r3,
    basis2: o2
  } = s4, e3 = e(c.get(), t2, n4), a2 = a(r3, e3), c2 = a(o2, e3), u2 = a(ds(s4), e3);
  return o(i, a2, c2, u2);
}
function es(s4, t2) {
  const i = os(s4, t2, c.get()), {
    basis1: n4,
    basis2: r3
  } = s4, o2 = s(n4), e3 = s(r3), a2 = Math.max(Math.abs(i[0]) - o2, 0), c2 = Math.max(Math.abs(i[1]) - e3, 0), u2 = i[2];
  return a2 * a2 + c2 * c2 + u2 * u2;
}
function as(s4, t2) {
  return Math.sqrt(es(s4, t2));
}
function cs(s4, t2) {
  let i = Number.NEGATIVE_INFINITY;
  for (const n4 of Ts) {
    const r3 = ys(s4, n4, xs.get()), o2 = j(r3, t2);
    o2 > i && (i = o2);
  }
  return Math.sqrt(i);
}
function us(s4, t2) {
  return D(s4.plane, t2) && js(s4, t2);
}
function gs(s4, t2, i, n4) {
  return hs(s4, i, n4);
}
function bs(s4, t2) {
  const i = -s4.plane[3];
  return a(ds(s4), t2) - i;
}
function fs(s4, t2, i, n4) {
  const r3 = bs(s4, t2), o2 = g(Ms, ds(s4), i - r3);
  return u(n4, t2, o2), n4;
}
function ps(s4, t2) {
  return G(s4.basis1, t2.basis1) && G(s4.basis2, t2.basis2) && G(s4.origin, t2.origin);
}
function ls(s4, t2, i) {
  return s4 !== i && Z(s4, i), h(As, t2), s2(As, As), O(i.basis1, s4.basis1, As), O(i.basis2, s4.basis2, As), O(F(i.plane), F(s4.plane), As), O(i.origin, s4.origin, t2), O2(i.plane, i.plane, i.origin), i;
}
function ms(s4, t2, i, n4) {
  return s4 !== n4 && Z(s4, n4), p(Vs, t2, i), O(n4.basis1, s4.basis1, Vs), O(n4.basis2, s4.basis2, Vs), J3(n4), n4;
}
function ds(s4) {
  return F(s4.plane);
}
function hs(s4, t2, i) {
  switch (t2) {
    case n3.X:
      r2(i, s4.basis1), z(i, i);
      break;
    case n3.Y:
      r2(i, s4.basis2), z(i, i);
      break;
    case n3.Z:
      r2(i, ds(s4));
  }
  return i;
}
function js(s4, t2) {
  const i = e(c.get(), t2, s4.origin), n4 = v(s4.basis1), r3 = v(s4.basis2), o2 = P(s4.basis1, i), e3 = P(s4.basis2, i);
  return -o2 - n4 < 0 && o2 - n4 < 0 && -e3 - r3 < 0 && e3 - r3 < 0;
}
function Is(s4, t2) {
  const i = xs.get();
  return r2(i.origin, s4.origin), r2(i.vector, t2), i;
}
function ys(s4, t2, i) {
  const {
    basis1: n4,
    basis2: r3,
    origin: o2
  } = s4, e3 = g(c.get(), n4, t2.origin[0]), a2 = g(c.get(), r3, t2.origin[1]);
  u(i.origin, e3, a2), u(i.origin, i.origin, o2);
  const g2 = g(c.get(), n4, t2.direction[0]), b = g(c.get(), r3, t2.direction[1]);
  return g(i.vector, u(g2, g2, b), 2), i;
}
function Ps(s4, t2) {
  Math.abs(P(s4.basis1, s4.basis2) / (s(s4.basis1) * s(s4.basis2))) > 1e-6 && U2().warn(t2, "Provided basis vectors are not perpendicular"), Math.abs(P(s4.basis1, ds(s4))) > 1e-6 && U2().warn(t2, "Basis vectors and plane normal are not perpendicular"), Math.abs(-P(ds(s4), s4.origin) - s4.plane[3]) > 1e-6 && U2().warn(t2, "Plane offset is not consistent with plane origin");
}
function vs(s4, t2, i, n4) {
  const r3 = ds(s4);
  U(r3, t2.direction, t2.origin, i), U(F(i), r3, t2.origin, n4);
}
var Ns = {
  plane: E(),
  origin: r(0, 0, 0),
  basis1: r(1, 0, 0),
  basis2: r(0, 1, 0)
};
var ws = new s3(E);
var xs = new s3(v3);
var Ms = n2();
var Ss = new s3(() => W());
var Ts = [{
  origin: [-1, -1],
  direction: [1, 0]
}, {
  origin: [1, -1],
  direction: [0, 1]
}, {
  origin: [1, 1],
  direction: [-1, 0]
}, {
  origin: [-1, 1],
  direction: [0, -1]
}];
var As = e2();
var Vs = e2();
var _s = Object.freeze(Object.defineProperty({
  __proto__: null,
  BoundedPlaneClass: G2,
  altitudeAt: bs,
  axisAt: gs,
  closestPoint: ns,
  closestPointOnSilhouette: is,
  copy: Z,
  copyWithoutVerify: D2,
  create: W,
  distance: as,
  distance2: es,
  distanceToSilhouette: cs,
  elevate: K,
  equals: ps,
  extrusionContainsPoint: us,
  fromAABoundingRect: $,
  fromValues: H,
  intersectRay: ss,
  intersectRayClosestSilhouette: ts,
  normal: ds,
  projectPoint: rs,
  projectPointLocal: os,
  rotate: ms,
  setAltitudeAt: fs,
  setExtent: Q,
  transform: ls,
  up: Ns,
  updateUnboundedPlane: J3,
  wrap: X
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  G2 as G,
  W,
  Z,
  H,
  J3 as J,
  $,
  ss,
  as,
  us,
  ps,
  ls,
  ms,
  ds,
  _s
};
//# sourceMappingURL=chunk-377KSYNB.js.map
