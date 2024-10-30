import {
  E,
  j,
  m,
  x as x2
} from "./chunk-6MR4UDDL.js";
import {
  e,
  n
} from "./chunk-O2DTA3XK.js";
import {
  G,
  x
} from "./chunk-AXVPJBVW.js";
import {
  r
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/views/interactive/sketch/normalizedPoint.js
var l;
function f(n3, t, e2) {
  return c(n3, t, e2);
}
function c(t = 0, e2 = 0, o = 0) {
  return r(t, e2, o);
}
function a(n3) {
  return n3;
}
function s(n3) {
  return n3;
}
function d(t, e2, o) {
  return a(r(t, e2, o));
}
function v(n3) {
  const [t, e2, o] = n3;
  return n3.length > 3 ? [t, e2, o, n3[3]] : [t, e2, o];
}
function p(n3) {
  return n3[3] = ((n3.length > 3 ? n3[3] : void 0) ?? l.NONE) | l.TARGET, n3;
}
function m2(n3) {
  return Boolean(((n3.length > 3 ? n3[3] : void 0) ?? l.NONE) & l.TARGET);
}
function N(n3, t, {
  coordinateHelper: e2,
  elevationInfo: o
}, r2) {
  return n3 ? E2(e2.vectorToDehydratedPoint(n3, g), t, o, r2) : null;
}
function E2(n3, t, e2, u = c()) {
  return u[0] = n3.x, u[1] = n3.y, u[2] = n3.z ?? 0, null == t || ("2d" === t.type ? u[2] = 0 : u[2] = m(t, n3, e2, j) ?? 0), u;
}
function T(n3, o, r2) {
  return r2 ? (n(r2, n3[0], n3[1], n3[2], o), r2) : e(n3[0], n3[1], n3[2], o);
}
function h(n3, o, {
  z: i,
  m: l2
}, f2, c2) {
  const {
    spatialReference: a2,
    elevationInfo: s3
  } = f2;
  let d2;
  if (null == i && null == l2) d2 = void 0;
  else if (null == o || "2d" === o.type) d2 = i ?? void 0;
  else {
    d2 = x2(o, n3, a2, j, s3) ?? 0;
  }
  const [v2, p2] = n3;
  return c2 ? n(c2, v2, p2, d2, a2) : c2 = e(v2, p2, d2, a2), null != l2 && (c2.m = l2, c2.hasM = true), c2;
}
function y(n3, t, e2, o, u = c()) {
  const [f2, a2] = n3;
  return u[0] = f2, u[1] = a2, n3.length > 3 && (u[3] = n3[3] ?? l.NONE), "3d" !== e2?.type ? (u[2] = t.value, u) : (u[2] = E(e2, f2, a2, t.value, o, t.elevationInfo, j) ?? 0, u);
}
!function(n3) {
  n3[n3.NONE = 0] = "NONE", n3[n3.TARGET = 1] = "TARGET";
}(l || (l = {}));
var g = e(0, 0, 0, null);

// ../../../node_modules/@arcgis/core/views/interactive/snapping/SnappingDomain.js
var E3;
!function(E4) {
  E4[E4.FEATURE = 1] = "FEATURE", E4[E4.SELF = 2] = "SELF", E4[E4.ALL = 3] = "ALL";
}(E3 || (E3 = {}));

// ../../../node_modules/@arcgis/core/views/interactive/snapping/hints/SnappingHint.js
var s2 = class {
  constructor(s3, t) {
    this.isDraped = s3, this.domain = t;
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/snapping/hints/LineSnappingHint.js
var n2 = class _n extends s2 {
  constructor(t, e2, s3, n3, r2 = E3.ALL, a2 = true, h2 = true) {
    super(n3, r2), this.type = t, this.lineStart = e2, this.lineEnd = s3, this.fadeLeft = a2, this.fadeRight = h2;
  }
  equals(e2) {
    return e2 instanceof _n && this.type === e2.type && G(this.lineStart, e2.lineStart) && G(this.lineEnd, e2.lineEnd) && this.fadeLeft === e2.fadeLeft && this.fadeRight === e2.fadeRight;
  }
  get length() {
    return x(this.lineStart, this.lineEnd);
  }
};

export {
  f,
  c,
  a,
  s,
  d,
  v,
  p,
  m2 as m,
  N,
  E2 as E,
  T,
  h,
  y,
  E3 as E2,
  s2,
  n2 as n
};
//# sourceMappingURL=chunk-ZFPMGEAK.js.map
