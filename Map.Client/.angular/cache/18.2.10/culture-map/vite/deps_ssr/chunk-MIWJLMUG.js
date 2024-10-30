import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  N,
  a as a2,
  c,
  d as d4,
  f,
  s as s2,
  v as v2
} from "./chunk-MDOKECP3.js";
import {
  b as b4,
  j as j5,
  z as z2
} from "./chunk-IVVINOEJ.js";
import {
  c as c2
} from "./chunk-DUSY4H5O.js";
import {
  d as d3,
  j as j6
} from "./chunk-XUM2DDAI.js";
import {
  e as e5
} from "./chunk-JRL65HQ7.js";
import {
  _ as _3
} from "./chunk-62PN4TEW.js";
import {
  B,
  E as E2,
  _ as _2,
  b as b3,
  d as d2,
  e as e4,
  j as j4,
  o as o2,
  p as p2,
  q as q2
} from "./chunk-B76NC7GX.js";
import {
  e as e3
} from "./chunk-XP2AJZUL.js";
import {
  Q,
  V,
  Y,
  k,
  w
} from "./chunk-L6FG3WIC.js";
import {
  D,
  E,
  F as F2,
  J,
  R,
  V as V2,
  b as b2,
  j as j3,
  w as w2
} from "./chunk-2TNGEJGS.js";
import {
  j as j2
} from "./chunk-OYGNGIHQ.js";
import {
  a,
  n as n4,
  r as r3
} from "./chunk-BZHHBBFX.js";
import {
  b
} from "./chunk-ORYC4PVJ.js";
import {
  n as n3
} from "./chunk-VSQZQLTQ.js";
import {
  j,
  s
} from "./chunk-K43CZ3M5.js";
import {
  g
} from "./chunk-C2OXE4NQ.js";
import {
  n
} from "./chunk-5EGQYY2H.js";
import {
  i
} from "./chunk-AOEBZVTA.js";
import {
  F,
  l
} from "./chunk-2OZSYJDX.js";
import {
  G,
  H,
  K,
  P,
  Z,
  _,
  e as e2,
  o,
  p,
  q,
  r as r2,
  v,
  x,
  z
} from "./chunk-MZM4INJV.js";
import {
  n as n2,
  r,
  t,
  y
} from "./chunk-J4GMQHGL.js";
import {
  e
} from "./chunk-MHPE4SZA.js";
import {
  A,
  d
} from "./chunk-LZSLQ24Q.js";
import {
  u2 as u
} from "./chunk-NXK752PZ.js";
import {
  O,
  h
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/views/interactive/snapping/snappingUtils.js
function d5(e6, t2) {
  const n5 = e6.x - t2.x, r4 = e6.y - t2.y;
  return n5 * n5 + r4 * r4;
}
function g2(e6, t2) {
  return Math.sqrt(d5(e6, t2));
}
function f2(e6, t2) {
  t2.sort((t3, n5) => p(t3.targetPoint, e6) - p(n5.targetPoint, e6));
}
var E3;
function y2({
  point: e6,
  distance: t2,
  returnEdge: n5,
  vertexMode: i2,
  coordinateHelper: {
    spatialReference: l2
  },
  filter: c3
}, p3, u2) {
  return u2 = null != u2 ? u2.clone() : new b({
    where: "1=1"
  }), c3 && (u2.geometry = c3.geometry, u2.distance = c3.distance, u2.spatialRelationship = c3.spatialRelationship, u2.where = n(u2.where, c3.where), u2.timeExtent = g(u2.timeExtent, c3.timeExtent), u2.objectIds = h2(u2.objectIds, c3.objectIds)), {
    point: e3(e6[0], e6[1], e6[2], l2.toJSON()),
    mode: p3,
    distance: t2,
    returnEdge: n5,
    vertexMode: i2,
    query: u2.toJSON()
  };
}
function h2(e6, t2) {
  return e6 || t2 ? t2 ? e6 ? Array.from(u(new Set(e6), new Set(t2))) : t2 : e6 : null;
}
function w3(e6, t2, n5) {
  return {
    left: N(e6.leftVertex.pos, t2, n5),
    right: N(e6.rightVertex.pos, t2, n5)
  };
}
function j7(e6) {
  return e6.createQuery();
}
!function(e6) {
  e6[e6.TARGET = 0] = "TARGET", e6[e6.REFERENCE = 1] = "REFERENCE", e6[e6.REFERENCE_EXTENSION = 2] = "REFERENCE_EXTENSION";
}(E3 || (E3 = {}));
var R2 = Symbol("snapping-toggle");
function N2(n5, r4 = () => {
}) {
  const o3 = d(() => ({
    view: n5.view,
    snappingOptions: n5.snappingOptions
  }), ({
    view: e6,
    snappingOptions: t2
  }) => {
    if (n5.removeHandles(R2), !e6 || !t2) return;
    const o4 = _3.TOOL, i2 = [e6.on("key-down", (e7) => {
      e7.key !== c2.toggle || e7.repeat || (t2.enabledToggled = true, r4());
    }, o4), e6.on("key-up", (e7) => {
      e7.key === c2.toggle && (t2.enabledToggled = false, r4());
    }, o4), e6.on("pointer-move", (e7) => {
      const n6 = e7.native.ctrlKey;
      t2.enabledToggled !== n6 && (t2.enabledToggled = n6, r4());
    }, o4)];
    n5.addHandles(i2, R2);
  }, A);
  n5.addHandles(o3);
}
function v3(e6) {
  return e5(e6) && "utilityNetworks" in e6 && !!e6.utilityNetworks?.length;
}

// ../../../node_modules/@arcgis/core/views/support/geometry3dUtils.js
function U({
  start: t2,
  end: o3,
  type: c3
}, i2, u2) {
  const a3 = [], f3 = e4(et, o3, t2), m2 = e4(ot, t2, i2), L = p2(f3), h3 = 2 * j4(f3, m2), A2 = h3 * h3 - 4 * L * (p2(m2) - u2 * u2);
  if (0 === A2) {
    const n5 = -h3 / (2 * L);
    (c3 === rt.PLANE || n5 >= 0) && a3.push(d2(n4(), t2, f3, n5));
  } else if (A2 > 0) {
    const n5 = Math.sqrt(A2), r4 = (-h3 + n5) / (2 * L);
    (c3 === rt.PLANE || r4 >= 0) && a3.push(d2(n4(), t2, f3, r4));
    const s3 = (-h3 - n5) / (2 * L);
    (c3 === rt.PLANE || s3 >= 0) && a3.push(d2(n4(), t2, f3, s3));
  }
  return a3;
}
function k2(t2, r4) {
  const e6 = t2.start, c3 = t2.end, i2 = e4(et, c3, e6), u2 = o(it, -i2[1], i2[0], 0), a3 = r4.start, f3 = r4.end, p3 = K(ut, f3, a3), m2 = P(p3, u2), L = o(at, e6[0], e6[1], 0), E4 = K(ft, L, a3), N3 = P(E4, u2), y3 = e();
  if (Math.abs(m2) < y3) return Math.abs(N3), [];
  const P2 = q(pt, a3, p3, N3 / m2);
  if (r4.type === j6.RAY) {
    const t3 = K(mt, P2, a3);
    if (P(t3, p3) < -y3) return [];
  }
  if (t2.type === rt.HALF_PLANE) {
    const t3 = B(ot, P2, e6);
    if (j4(t3, i2) < -y3) return [];
  }
  return [t(P2)];
}
function w4(t2, n5) {
  return T(X(ht, n5[2], t2), n5);
}
function z3(t2, n5) {
  const r4 = 0;
  return S(X(ht, r4, t2), X(At, r4, n5)).map(([t3, n6]) => r3(t3, n6));
}
function C(t2, n5, r4) {
  return J2(t2, X(ht, t2[2], n5), r4);
}
function D2(t2, r4, s3, o3 = n2()) {
  const i2 = e4(et, t2, r4), u2 = q2(i2);
  return d2(o3, r4, i2, 0 === u2 ? 1 : s3 / u2), o3[2] = t2[2], o3;
}
function J2(t2, {
  start: n5,
  end: r4,
  type: s3
}, e6 = n2()) {
  const o3 = K(ct, t2, n5), c3 = K(it, r4, n5), i2 = P(o3, c3) / P(c3, c3);
  return q(e6, n5, c3, s3 === j6.RAY ? Math.max(i2, 0) : i2);
}
var O2 = (() => {
  const t2 = n2(), n5 = n2(), r4 = n2();
  return ({
    start: s3,
    end: e6
  }, {
    center: o3,
    radius: c3,
    normal: i2,
    slicePlane: u2
  }) => {
    const a3 = j3(o3, i2, Lt);
    if ($(R(a3, s3), 0) && $(R(a3, e6), 0)) {
      j2(i2, t2, n5);
      const a4 = (s4, e7) => (e2(r4, e7, o3), o2(s4, P(r4, t2), P(r4, n5)), s4), p4 = d3({
        start: a4(et, s3),
        end: a4(ot, e6),
        type: j6.LINE
      }, a, c3), m2 = [];
      for (const [r5, s4] of p4) {
        const e7 = r2(n2(), o3);
        q(e7, e7, t2, r5), q(e7, e7, n5, s4), u2 && !nt(u2, e7) || m2.push(e7);
      }
      return m2;
    }
    const p3 = n2();
    return w2(a3, s3, e6, p3) ? !$(x(p3, o3), c3) || u2 && !nt(u2, p3) ? [] : [p3] : [];
  };
})();
function Q2({
  start: t2,
  end: e6,
  type: o3
}, c3, i2) {
  const u2 = [], a3 = e2(ct, e6, t2), f3 = e4(ot, t2, c3), p3 = p2(a3), m2 = 2 * j4(a3, f3), L = m2 * m2 - 4 * p3 * (p2(f3) - i2 * i2);
  if (0 === L) {
    const n5 = -m2 / (2 * p3);
    (o3 === j6.LINE || n5 >= 0) && u2.push(q(n2(), t2, a3, n5));
  } else if (L > 0) {
    const n5 = Math.sqrt(L), r4 = (-m2 + n5) / (2 * p3);
    (o3 === j6.LINE || r4 >= 0) && u2.push(q(n2(), t2, a3, r4));
    const s3 = (-m2 - n5) / (2 * p3);
    (o3 === j6.LINE || s3 >= 0) && u2.push(q(n2(), t2, a3, s3));
  }
  return u2;
}
function S(t2, n5) {
  const r4 = t2.start, s3 = t2.end, e6 = n5.start, o3 = n5.end, c3 = K(ct, s3, r4), i2 = K(it, o3, e6), u2 = K(ut, e6, r4), a3 = _(at, c3, i2);
  if (!$(P(u2, a3), 0)) return [];
  const f3 = Z(a3);
  if ($(f3, 0)) return [];
  const p3 = _(ft, u2, i2), m2 = P(p3, a3) / f3, L = q(pt, r4, c3, m2);
  if (t2.type === j6.RAY) {
    const t3 = K(mt, L, r4);
    if (P(c3, t3) < -e()) return [];
  }
  if (n5.type === j6.RAY) {
    const t3 = K(mt, L, e6);
    if (P(i2, t3) < -e()) return [];
  }
  return [t(L)];
}
function T({
  start: t2,
  end: n5,
  type: r4
}, s3) {
  const e6 = K(ct, s3, t2), o3 = K(it, n5, t2), c3 = _(ut, o3, e6), i2 = Z(c3) / Z(o3), u2 = e();
  if (i2 < u2) switch (r4) {
    case j6.LINE:
      return [t(s3)];
    case j6.RAY:
      return P(o3, e6) < -u2 ? [] : [t(s3)];
  }
  return [];
}
function W(t2, n5, r4, s3) {
  const [e6, o3] = t2, [c3, i2] = r4, u2 = c3 - e6, f3 = i2 - o3, p3 = u2 * u2 + f3 * f3, L = Math.sqrt(p3);
  if (L > n5 + s3) return [];
  if (L < Math.abs(n5 - s3)) return [];
  if ($(L, 0) && $(n5, s3)) return [];
  const h3 = (n5 * n5 - s3 * s3 + p3) / (2 * L), A2 = Math.sqrt(n5 * n5 - h3 * h3), d6 = A2 * f3 / L, l2 = A2 * u2 / L, [E4, N3] = _2(et, t2, r4, h3 / L);
  return $(d6, l2) ? [r3(E4, N3)] : [r3(E4 + d6, N3 - l2), r3(E4 - d6, N3 + l2)];
}
function X(t2, n5, {
  start: r4,
  end: s3,
  type: e6
}) {
  return o(t2.start, r4[0], r4[1], n5), o(t2.end, s3[0], s3[1], n5), t2.type = st[e6], t2;
}
function Z2(t2, n5) {
  return $(t2[2], n5[2]);
}
function $(n5, r4) {
  return F(Math.abs(n5 - r4), 0, e());
}
function tt(t2, n5) {
  return n5.filter((n6) => nt(t2, n6));
}
function nt(t2, n5) {
  return D(t2, n5);
}
var rt;
!function(t2) {
  t2[t2.PLANE = 0] = "PLANE", t2[t2.HALF_PLANE = 1] = "HALF_PLANE";
}(rt || (rt = {}));
var st = {
  [rt.PLANE]: j6.LINE,
  [rt.HALF_PLANE]: j6.RAY
};
var et = n4();
var ot = n4();
var ct = n2();
var it = n2();
var ut = n2();
var at = n2();
var ft = n2();
var pt = n2();
var mt = n2();
var Lt = E();
var ht = {
  start: n2(),
  end: n2(),
  type: j6.LINE
};
var At = {
  start: n2(),
  end: n2(),
  type: j6.LINE
};

// ../../../node_modules/@arcgis/core/views/interactive/sketch/constraints.js
var mt2 = class {
  intersect(t2) {
    return Ht(this, t2);
  }
  closestPoints(t2) {
    return [this.closestTo(t2)];
  }
};
var gt = class extends mt2 {
  constructor(t2) {
    super(), this.point = t2;
  }
  equals(t2) {
    return this === t2 || Le(t2) && G(this.point, t2.point);
  }
  closestTo() {
    return v2(this.point);
  }
};
var _t = class extends mt2 {
  constructor(t2, e6, s3) {
    super(), this.start = t2, this.end = e6, this.lineLike = {
      start: t2,
      end: e6,
      type: s3
    };
  }
  equals(t2) {
    return this === t2 || ke(t2) && this.lineLike.type === t2.lineLike.type && G(this.start, t2.start) && G(this.end, t2.end);
  }
  closestTo(t2) {
    const e6 = c();
    return J2(t2, this.lineLike, e6), e6;
  }
};
var Lt2 = class extends _t {
  constructor(t2, e6) {
    super(t2, e6, j6.LINE);
  }
};
var kt = class extends _t {
  constructor(t2, e6) {
    super(t2, e6, j6.RAY);
  }
};
var Mt = class extends mt2 {
  constructor(t2) {
    super(), this.constraints = t2;
  }
  equals(t2) {
    return this === t2 || _e(t2) && h(this.constraints, t2.constraints, (t3, e6) => t3.equals(e6));
  }
  closestTo(t2) {
    let e6, s3 = 1 / 0;
    for (const r4 of this.constraints) {
      const n5 = r4.closestTo(t2), i2 = p(t2, n5);
      i2 < s3 && (s3 = i2, e6 = n5);
    }
    return v2(e6 ?? t2);
  }
  closestPoints(t2) {
    return this.constraints.flatMap((e6) => e6 === this ? [] : e6.closestPoints(t2));
  }
};
var xt = class extends mt2 {
  constructor(t2, e6) {
    super(), this.center = t2, this.radius = e6;
  }
  equals(t2) {
    return this === t2 || ye(t2) && this.center[0] === t2.center[0] && this.center[1] === t2.center[1] && this.radius === t2.radius;
  }
  closestTo(t2) {
    const e6 = c();
    return D2(t2, this.center, this.radius, e6), e6;
  }
};
var yt = class extends mt2 {
  constructor(t2, e6) {
    super(), this.center = t2, this.radius = e6;
  }
  equals(t2) {
    return this === t2 || Pe(t2) && G(this.center, t2.center) && this.radius === t2.radius;
  }
  closestTo(t2) {
    const e6 = c();
    return D2(t2, this.center, this.radius, e6), e6[2] = this.center[2], e6;
  }
  asCircle() {
    return new Pt(v2(this.center), this.radius, d4(0, 0, 1));
  }
};
var Pt = class extends mt2 {
  constructor(t2, e6, s3, r4 = void 0) {
    super(), this.center = t2, this.radius = e6, this.normal = s3, this.slicePlane = r4;
  }
  equals(t2) {
    return this === t2 || ze(t2) && G(this.center, t2.center) && G(this.normal, t2.normal) && this.radius === t2.radius;
  }
  closestTo(t2) {
    const {
      center: e6,
      radius: s3
    } = this;
    J(this.getPlane(vt), t2, zt);
    const r4 = K(zt, zt, e6), n5 = v(r4);
    if ($(n5, 0)) return v2(t2);
    const i2 = s3 / Math.sqrt(n5), o3 = c();
    q(o3, e6, r4, i2);
    const {
      slicePlane: c3
    } = this;
    if (c3 && !nt(c3, o3)) {
      const e7 = Jt(c3, this);
      return e7?.closestTo(t2) ?? v2(t2);
    }
    return o3;
  }
  getPlane(t2 = E()) {
    return j3(this.center, this.normal, t2);
  }
};
var zt = n2();
var vt = E();
var Tt = class extends mt2 {
  constructor(t2) {
    super(), this.z = t2;
  }
  equals(t2) {
    return this === t2 || Me(t2) && this.z === t2.z;
  }
  closestTo(t2) {
    return d4(t2[0], t2[1], this.z);
  }
  getPlane(t2 = E()) {
    return o(qt, 0, 0, this.z), j3(qt, y, t2);
  }
};
var qt = n2();
var wt = class extends mt2 {
  constructor(t2, e6, s3) {
    super(), this.start = t2, this.end = e6, this.planeLike = {
      start: s2(t2),
      end: s2(e6),
      type: s3
    };
  }
  equals(t2) {
    return this === t2 || xe(t2) && this.planeLike.type === t2.planeLike.type && G(this.start, t2.start) && G(this.end, t2.end);
  }
  closestTo(t2) {
    const e6 = c();
    return C(t2, this.planeLike, e6), e6;
  }
  closestEndTo(t2) {
    const {
      start: e6,
      end: s3
    } = this.planeLike;
    return Math.sign(j4(e4(jt, s3, e6), e4(At2, s2(t2), e6))) > 0 ? this.end : this.start;
  }
  getPlane(t2 = E()) {
    const e6 = r2(Dt, this.end);
    return e6[2] += 1, b2(this.start, this.end, e6, t2);
  }
  getSlicePlane(t2 = E()) {
    const {
      start: e6,
      end: s3,
      type: r4
    } = this.planeLike;
    if (r4 === rt.PLANE) return;
    const n5 = o(Dt, e6[0], e6[1], 0), i2 = o(bt, s3[0], s3[1], 0), o3 = e2(bt, i2, n5);
    return j3(n5, o3, t2), t2;
  }
};
var jt = n4();
var At2 = n4();
var Dt = n2();
var bt = n2();
var Et = class extends wt {
  constructor(t2, e6) {
    super(t2, e6, rt.HALF_PLANE);
  }
};
var Rt = class extends wt {
  constructor(t2, e6) {
    super(t2, e6, rt.PLANE);
  }
};
var Nt = class extends mt2 {
  constructor(t2, e6) {
    super(), this.sphere = k(t2, e6);
  }
  equals(t2) {
    return this === t2 || ve(t2) && w(this.sphere, t2.sphere);
  }
  closestTo(t2) {
    const e6 = c();
    return Q(this.sphere, t2, e6), e6;
  }
  get center() {
    return V(this.sphere);
  }
  get radius() {
    return this.sphere[3];
  }
};
var Ut = class extends mt2 {
  constructor(t2, e6, s3) {
    super(), this.start = t2, this.end = e6, this.getZ = s3, this.planeLike = {
      start: s2(t2),
      end: s2(e6),
      type: rt.PLANE
    };
  }
  equals(t2) {
    return this === t2 || Te(t2) && G(this.start, t2.start) && G(this.end, t2.end) && this.getZ === t2.getZ;
  }
  closestTo(t2) {
    return Ft(this, t2);
  }
  addIfOnTheGround(t2, e6) {
    for (const s3 of e6) {
      const e7 = this.getZ(s3[0], s3[1]) ?? 0;
      $(s3[2], e7) && (s3[2] = e7, t2.push(s3));
    }
  }
};
var Zt = class extends mt2 {
  constructor(t2, e6, s3) {
    super(), this._x = t2, this._y = e6, this._z = s3;
  }
  equals(t2) {
    return this === t2 || we(t2) && this._x === t2._x && this._y === t2._y && this._z === t2._z;
  }
  closestTo([t2, e6, s3]) {
    return f(this._x ?? t2, this._y ?? e6, this._z ?? s3);
  }
};
var It = class extends mt2 {
  constructor(t2, e6, s3, r4, n5) {
    super(), this._origin = t2, this._spatialReference = e6, this._distanceMeters = s3, this._elevationMeters = r4, this._directionDegrees = n5;
  }
  equals(t2) {
    return this === t2 || qe(t2) && E2(this._origin, t2._origin) && this._spatialReference === t2._spatialReference && this._distanceMeters === t2._distanceMeters && this._elevationMeters === t2._elevationMeters && this._directionDegrees === t2._directionDegrees;
  }
  closestTo([t2, e6, s3]) {
    return o2(Gt, t2, e6), E2(Gt, this._origin) || this._applyDirectionAndDistance(Gt), f(Gt[0], Gt[1], this._elevationMeters ?? s3);
  }
  _applyDirectionAndDistance(t2) {
    if (null != this._directionDegrees && null != this._distanceMeters) b4(t2, this._origin, this._directionDegrees, this._distanceMeters, this._spatialReference);
    else if (null != this._directionDegrees) Ct(t2, this._origin, this._directionDegrees, t2, this._spatialReference);
    else if (null != this._distanceMeters) {
      const {
        azimuth: e6
      } = j5(St, this._origin, t2, this._spatialReference);
      b4(t2, this._origin, e6 ?? 0, this._distanceMeters, this._spatialReference);
    }
  }
};
var Gt = [0, 0];
var St = new z2();
function Ct(t2, e6, s3, r4, n5) {
  let {
    azimuth: i2,
    distance: o3
  } = j5(Ot, e6, r4, n5);
  i2 ??= 0;
  let c3 = o3 * Math.cos((i2 - s3) * i);
  c3 = Math.max(0, c3), b4(t2, e6, s3, c3, n5);
}
var Ot = new z2();
function Ft(t2, e6) {
  const s3 = c();
  return C(e6, t2.planeLike, s3), s3[2] = t2.getZ(s3[0], s3[1]) ?? je, s3;
}
function Ht(t2, e6) {
  if (_e(t2)) {
    const s3 = [];
    for (const r4 of t2.constraints) {
      const t3 = r4.intersect(e6);
      t3 && s3.push(t3);
    }
    return ge(s3);
  }
  if (_e(e6)) return Ht(e6, t2);
  if (Te(t2)) return fe(t2, e6);
  if (Te(e6)) return fe(e6, t2);
  if (Le(t2)) {
    const {
      point: s3
    } = t2;
    if (Le(e6)) return G(s3, e6.point) ? t2 : void 0;
    const r4 = e6.closestTo(s3);
    return H(r4, s3) ? t2 : void 0;
  }
  if (ke(t2)) {
    if (Le(e6)) return Ht(e6, t2);
    if (ke(e6)) return pe(S(t2.lineLike, e6.lineLike));
    if (Me(e6)) return Vt(t2, e6);
    if (xe(e6)) return pe(k2(e6.planeLike, t2.lineLike));
    if (ye(e6)) return pe(Q2(t2.lineLike, e6.center, e6.radius));
    if (ze(e6)) return pe(O2(t2.lineLike, e6));
    if (Pe(e6)) return Yt(t2, e6);
    if (ve(e6)) return Bt(t2, e6);
  } else if (Me(t2)) {
    if (Le(e6) || ke(e6)) return Ht(e6, t2);
    if (Me(e6)) return Kt(t2, e6);
    if (xe(e6)) return Qt(t2, e6);
    if (ye(e6)) return Wt(t2, e6);
    if (ze(e6)) return $t(t2, e6);
    if (Pe(e6)) return Xt(t2, e6);
    if (ve(e6)) return te(t2, e6);
  } else if (xe(t2)) {
    if (Le(e6) || ke(e6) || Me(e6)) return Ht(e6, t2);
    if (xe(e6)) return de(z3(t2.planeLike, e6.planeLike));
    if (ye(e6)) return de(U(t2.planeLike, e6.center, e6.radius));
    if (ze(e6)) return se(t2, e6);
    if (Pe(e6)) return ee(t2, e6);
    if (ve(e6)) return re(t2, e6);
  } else if (ye(t2)) {
    if (Le(e6) || ke(e6) || Me(e6) || xe(e6)) return Ht(e6, t2);
    if (ye(e6)) return de(W(s2(t2.center), t2.radius, s2(e6.center), e6.radius));
    if (ze(e6)) return ne();
    if (Pe(e6)) return ie(t2, e6);
    if (ve(e6)) return oe();
  } else if (ze(t2)) {
    if (Le(e6) || ke(e6) || Me(e6) || xe(e6) || ye(e6)) return Ht(e6, t2);
    if (ze(e6)) return ce();
    if (Pe(e6)) return ce(e6.asCircle());
    if (ve(e6)) return ue();
  } else if (Pe(t2)) {
    if (Le(e6) || ke(e6) || Me(e6) || xe(e6) || ye(e6) || ze(e6)) return Ht(e6, t2);
    if (Pe(e6)) return ae(e6, t2);
    if (ve(e6)) return he();
  } else if (ve(t2)) {
    if (Le(e6) || ke(e6) || Me(e6) || xe(e6) || ye(e6) || Pe(e6)) return Ht(e6, t2);
    if (ve(e6)) return le();
  }
}
var Vt = (() => {
  const t2 = E();
  return (e6, s3) => {
    const {
      start: r4,
      end: n5
    } = e6;
    if (Z2(r4, n5) && $(r4[2], s3.z)) return e6;
    const i2 = c();
    return w2(s3.getPlane(t2), r4, n5, i2) ? new gt(i2) : void 0;
  };
})();
function Yt({
  lineLike: t2
}, {
  center: e6,
  radius: s3
}) {
  const r4 = e6[2];
  return pe(Q2(t2, e6, s3).filter((t3) => $(t3[2], r4)));
}
function Bt({
  lineLike: t2
}, {
  sphere: e6
}) {
  return pe(Y(e6, t2.start, t2.end));
}
var Jt = (() => {
  const t2 = n3(), e6 = n2(), r4 = n2();
  return (n5, i2, o3) => {
    const {
      normal: c3,
      center: u2,
      radius: h3
    } = i2;
    j2(c3, e6, r4);
    const l2 = F2(n5), f3 = h3 * P(l2, e6), d6 = h3 * P(l2, r4);
    s(t2, u2[0], u2[1], u2[2], 1);
    const p3 = j(n5, t2), m2 = Math.hypot(f3, d6), g3 = $(m2, 0);
    if ($(R(n5, u2), 0)) {
      if (g3) return i2;
      if ($(h3, 0)) return !o3 || nt(o3, u2) ? new gt(v2(u2)) : void 0;
      _(e6, l2, c3), z(e6, e6);
      const t3 = new Array(), s3 = t(u2);
      q(s3, s3, e6, h3), o3 && !nt(o3, s3) || t3.push(s3);
      const r5 = t(u2);
      return q(r5, r5, e6, -h3), o3 && !nt(o3, r5) || t3.push(r5), pe(t3);
    }
    if (g3) return;
    const _4 = -p3 / m2;
    if (Math.abs(_4) > 1 || $(_4, 1)) return;
    const P2 = Math.atan(f3 / d6), z4 = l(_4) - P2, q3 = Math.PI - z4, w5 = new Array(), j8 = n2();
    q(j8, u2, e6, h3 * Math.cos(z4)), q(j8, j8, r4, h3 * Math.sin(z4)), w5.push(j8);
    const A2 = n2();
    return q(A2, u2, e6, h3 * Math.cos(q3)), q(A2, A2, r4, h3 * Math.sin(q3)), w5.push(A2), pe(o3 ? tt(o3, w5) : w5);
  };
})();
function Kt(t2, e6) {
  return $(t2.z, e6.z) ? t2 : void 0;
}
function Qt({
  z: t2
}, {
  planeLike: e6
}) {
  const [s3, r4] = e6.start, [n5, i2] = e6.end, o3 = d4(s3, r4, t2), c3 = d4(n5, i2, t2);
  return e6.type === rt.PLANE ? new Lt2(o3, c3) : new kt(o3, c3);
}
function Wt(t2, e6) {
  const [s3, r4] = e6.center;
  return new yt(d4(s3, r4, t2.z), e6.radius);
}
function Xt(t2, e6) {
  return $(e6.center[2], t2.z) ? e6 : void 0;
}
var $t = (() => {
  const t2 = E();
  return (e6, s3) => Jt(e6.getPlane(t2), s3, s3.slicePlane);
})();
function te(t2, {
  center: e6,
  radius: s3
}) {
  const r4 = Math.abs(e6[2] - t2.z);
  if (r4 > s3 && !$(r4, s3)) return;
  const n5 = d4(e6[0], e6[1], t2.z), i2 = Math.sqrt(s3 ** 2 - r4 ** 2);
  return $(i2, 0) ? void 0 : new yt(n5, i2);
}
var ee = (() => {
  const t2 = E();
  return (e6, {
    center: s3,
    radius: r4
  }) => {
    const n5 = U(e6.planeLike, s3, r4), i2 = s3[2];
    e6.getSlicePlane(t2);
    const o3 = new Array();
    for (const [c3, u2] of n5) {
      const e7 = [c3, u2, i2];
      nt(t2, e7) && o3.push(e7);
    }
    return pe(o3);
  };
})();
var se = (() => {
  const t2 = E(), e6 = E();
  return (s3, r4) => Jt(s3.getPlane(t2), r4, s3.getSlicePlane(e6));
})();
var re = (() => {
  const t2 = E();
  return (e6, {
    center: s3,
    radius: r4
  }) => {
    const n5 = e6.getPlane(t2), i2 = V2(n5, s3), o3 = Math.abs(i2);
    if (o3 > r4 && !$(o3, r4)) return;
    const c3 = Math.sqrt(r4 ** 2 - i2 ** 2);
    if ($(c3, 0)) {
      const t3 = c();
      return J(n5, s3, t3), new gt(t3);
    }
    const u2 = c(), h3 = t(F2(n5));
    return q(u2, s3, h3, i2), new Pt(u2, c3, h3, e6.getSlicePlane());
  };
})();
function ne(t2, e6) {
}
function ie(t2, e6) {
  const s3 = b3(s2(t2.center), s2(e6.center));
  if ($(s3, 0) && $(t2.radius, e6.radius)) return e6;
  return me(W(s2(t2.center), t2.radius, s2(e6.center), e6.radius), e6.center[2]);
}
function oe(t2, e6) {
}
function ce(t2, e6) {
}
function ue(t2, e6) {
}
function ae(t2, e6) {
  if (!Z2(t2.center, e6.center)) return;
  const s3 = b3(s2(t2.center), s2(e6.center));
  if ($(s3, 0) && $(t2.radius, e6.radius)) return t2;
  return me(W(s2(t2.center), t2.radius, s2(e6.center), e6.radius), t2.center[2]);
}
function he(t2, e6) {
}
function le(t2, e6) {
}
function fe(t2, e6) {
  const {
    planeLike: s3,
    getZ: r4
  } = t2, n5 = new Array();
  if (Le(e6)) t2.addIfOnTheGround(n5, w4(s3, e6.point));
  else if (ke(e6)) t2.addIfOnTheGround(n5, k2(s3, e6.lineLike));
  else if (ye(e6)) for (const [i2, o3] of U(s3, e6.center, e6.radius)) {
    const t3 = r4(i2, o3);
    null != t3 && n5.push(r(i2, o3, t3));
  }
  else if (xe(e6) || Te(e6)) for (const [i2, o3] of z3(s3, e6.planeLike)) {
    const t3 = r4(i2, o3) ?? je;
    n5.push(r(i2, o3, t3));
  }
  return pe(n5);
}
function de(t2) {
  return ge(t2.map(([t3, e6]) => {
    const s3 = d4(t3, e6, 0), r4 = d4(t3, e6, 1);
    return new Lt2(s3, r4);
  }));
}
function pe(t2) {
  return ge(t2.map((t3) => t3 ? new gt(a2(t3)) : void 0));
}
function me(t2, e6) {
  return pe(t2.map(([t3, s3]) => [t3, s3, e6]));
}
function ge(e6) {
  if (0 !== e6.length) return 1 === e6.length ? e6[0] ?? void 0 : new Mt(e6.filter(O));
}
function _e(t2) {
  return t2 instanceof Mt;
}
function Le(t2) {
  return t2 instanceof gt;
}
function ke(t2) {
  return t2 instanceof _t;
}
function Me(t2) {
  return t2 instanceof Tt;
}
function xe(t2) {
  return t2 instanceof wt;
}
function ye(t2) {
  return t2 instanceof xt;
}
function Pe(t2) {
  return t2 instanceof yt;
}
function ze(t2) {
  return t2 instanceof Pt;
}
function ve(t2) {
  return t2 instanceof Nt;
}
function Te(t2) {
  return t2 instanceof Ut;
}
function qe(t2) {
  return t2 instanceof It;
}
function we(t2) {
  return t2 instanceof Zt;
}
var je = 0;

export {
  d5 as d,
  g2 as g,
  f2 as f,
  E3 as E,
  y2 as y,
  w3 as w,
  j7 as j,
  N2 as N,
  v3 as v,
  J2 as J,
  gt,
  Lt2 as Lt,
  xt,
  Tt,
  Et,
  Rt,
  Ut,
  Zt,
  It,
  ge,
  Le
};
//# sourceMappingURL=chunk-MIWJLMUG.js.map
