import {
  A,
  b,
  j as j2,
  z
} from "./chunk-DABQKFI5.js";
import {
  m,
  o as o2
} from "./chunk-IIVUY2T7.js";
import {
  a,
  n as n4
} from "./chunk-SLCHZ6DD.js";
import {
  L
} from "./chunk-VS26W5Y5.js";
import {
  n as n2
} from "./chunk-L7ZKWTWL.js";
import {
  _,
  n as n3
} from "./chunk-DY7FJHTG.js";
import {
  G as G2,
  o,
  r
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import {
  G,
  j
} from "./chunk-JJS7PR2U.js";

// ../../../node_modules/@arcgis/core/views/support/angularMeasurementUtils.js
var j3;
function R(e, t) {
  if (null == e || null == t) return;
  const i = b2(e, t);
  return null != i ? o2(i, "radians", "geographic") : void 0;
}
!function(e) {
  e.Absolute = "absolute", e.Relative = "relative", e.RelativeBilateral = "relative-bilateral";
}(j3 || (j3 = {}));
var b2 = (() => {
  const e = n(), t = n();
  return (r2, i) => (o(e, r2.x, r2.y, r2.z ?? 0), o(t, i.x, i.y, i.z ?? 0), y(e, t, r2.spatialReference, i.spatialReference));
})();
var y = (() => {
  const e = n3(), t = n(), r2 = n();
  return (i, s, c, u) => {
    if (G2(i, s)) return;
    const f = A(c), v = A(u);
    if (f && v && G(f, v) && n2(i, c, t, f) && n2(s, u, r2, v)) {
      const {
        azimuth: e2
      } = j2(k, t, r2, f);
      return null != e2 ? j(e2, "degrees", "radians") : void 0;
    }
    e[0] = s[0] - i[0], e[1] = s[1] - i[1];
    let d = L(_, e);
    return e[0] < 0 && (d = q - d), d;
  };
})();
function x(e, t, r2, i = j3.Absolute) {
  if (t && r2) switch (i) {
    case j3.Absolute:
      return R(t, r2);
    case j3.Relative:
      return w(z2(e, t, r2), j3.Relative);
    case j3.RelativeBilateral:
      return w(z2(e, t, r2), j3.RelativeBilateral);
  }
}
function z2(e, t, i) {
  if (!e || !t || !i) return;
  const o3 = b2(e, t), n5 = b2(t, i);
  return null != o3 && null != n5 ? o2(n5 - o3, "radians", "geographic") : void 0;
}
function w(e, t) {
  if (null != e) switch (t) {
    case j3.Absolute:
      return A2(e);
    case j3.Relative: {
      const t2 = T(e);
      let i = I.normalize(t2, 0, true);
      return -180 === i && (i = 180), o2(i, "degrees", "geographic");
    }
    case j3.RelativeBilateral: {
      const t2 = T(e), i = Math.abs(I.normalize(t2, 0, true));
      return o2(i, "degrees", "geographic");
    }
  }
}
function A2(e) {
  const t = T(e), i = C.normalize(t, 0, true);
  return o2(i, "degrees", "geographic");
}
var M = (() => {
  const e = n();
  return (t, r2, n5, a2, s, l = "geodesic") => {
    r(e, r2);
    const f = T(s);
    if ("geodesic" === l) {
      const i = A(n5);
      if (i && n2(e, n5, e, i)) return b(t, e, f, a2, i), t[2] = r2[2], !!n2(t, i, t, n5);
    }
    const p = m(f, "geographic", "arithmetic"), d = j(p, "degrees", "radians"), h = r2[0] + a2 * Math.cos(d), j4 = r2[1] + a2 * Math.sin(d), R2 = r2[2];
    return o(t, h, j4, R2), true;
  };
})();
function T(e) {
  if (null != e) return m(V(e), e.rotationType, "geographic");
}
function U(e) {
  if (null != e) return m(V(e), e.rotationType, "arithmetic");
}
function V(e) {
  return j(e.value, e.unit, "degrees");
}
var k = new z();
var q = 2 * Math.PI;
var C = a;
var I = new n4(-180, 180);

export {
  j3 as j,
  R,
  y,
  x,
  w,
  A2 as A,
  M,
  T,
  U
};
//# sourceMappingURL=chunk-TMPIWG43.js.map
