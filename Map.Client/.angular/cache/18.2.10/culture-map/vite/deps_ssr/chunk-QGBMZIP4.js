import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s as s2
} from "./chunk-AOEBZVTA.js";
import {
  M,
  e as e2,
  h,
  l
} from "./chunk-2OZSYJDX.js";
import {
  A2 as A,
  C,
  G,
  G2,
  O,
  S2 as S,
  W2 as W,
  f2 as f,
  p,
  p2,
  u,
  w
} from "./chunk-6SSA7P3A.js";
import {
  e,
  s,
  t
} from "./chunk-FQBTLEUI.js";

// ../../../node_modules/@arcgis/core/geometry/projection/projectors.js
var N;
!function(n2) {
  n2[n2.UNKNOWN = 0] = "UNKNOWN", n2[n2.SPHERICAL_ECEF = 1] = "SPHERICAL_ECEF", n2[n2.WGS84 = 2] = "WGS84", n2[n2.WEB_MERCATOR = 3] = "WEB_MERCATOR", n2[n2.WGS84_ECEF = 4] = "WGS84_ECEF", n2[n2.CGCS2000 = 5] = "CGCS2000", n2[n2.SPHERICAL_MARS_PCPF = 6] = "SPHERICAL_MARS_PCPF", n2[n2.GCSMARS2000 = 7] = "GCSMARS2000", n2[n2.SPHERICAL_MOON_PCPF = 8] = "SPHERICAL_MOON_PCPF", n2[n2.GCSMOON2000 = 9] = "GCSMOON2000", n2[n2.LON_LAT = 10] = "LON_LAT", n2[n2.PLATE_CARREE = 11] = "PLATE_CARREE";
}(N || (N = {}));
var L = {
  [N.WGS84]: {
    [N.CGCS2000]: f2,
    [N.GCSMARS2000]: null,
    [N.GCSMOON2000]: null,
    [N.LON_LAT]: f2,
    [N.SPHERICAL_ECEF]: x,
    [N.SPHERICAL_MARS_PCPF]: null,
    [N.SPHERICAL_MOON_PCPF]: null,
    [N.UNKNOWN]: null,
    [N.WEB_MERCATOR]: h2,
    [N.PLATE_CARREE]: d,
    [N.WGS84]: f2,
    [N.WGS84_ECEF]: X
  },
  [N.CGCS2000]: {
    [N.CGCS2000]: f2,
    [N.GCSMARS2000]: null,
    [N.GCSMOON2000]: null,
    [N.LON_LAT]: f2,
    [N.SPHERICAL_ECEF]: x,
    [N.SPHERICAL_MARS_PCPF]: null,
    [N.SPHERICAL_MOON_PCPF]: null,
    [N.UNKNOWN]: null,
    [N.WEB_MERCATOR]: h2,
    [N.PLATE_CARREE]: d,
    [N.WGS84]: f2,
    [N.WGS84_ECEF]: X
  },
  [N.GCSMARS2000]: {
    [N.CGCS2000]: null,
    [N.GCSMARS2000]: f2,
    [N.GCSMOON2000]: null,
    [N.LON_LAT]: f2,
    [N.SPHERICAL_ECEF]: null,
    [N.SPHERICAL_MARS_PCPF]: k,
    [N.SPHERICAL_MOON_PCPF]: null,
    [N.UNKNOWN]: null,
    [N.WEB_MERCATOR]: null,
    [N.PLATE_CARREE]: null,
    [N.WGS84]: null,
    [N.WGS84_ECEF]: null
  },
  [N.GCSMOON2000]: {
    [N.CGCS2000]: null,
    [N.GCSMARS2000]: null,
    [N.GCSMOON2000]: f2,
    [N.LON_LAT]: f2,
    [N.SPHERICAL_ECEF]: null,
    [N.SPHERICAL_MARS_PCPF]: null,
    [N.SPHERICAL_MOON_PCPF]: b,
    [N.UNKNOWN]: null,
    [N.WEB_MERCATOR]: null,
    [N.PLATE_CARREE]: null,
    [N.WGS84]: null,
    [N.WGS84_ECEF]: null
  },
  [N.WEB_MERCATOR]: {
    [N.CGCS2000]: I,
    [N.GCSMARS2000]: null,
    [N.GCSMOON2000]: null,
    [N.LON_LAT]: I,
    [N.SPHERICAL_ECEF]: T,
    [N.SPHERICAL_MARS_PCPF]: null,
    [N.SPHERICAL_MOON_PCPF]: null,
    [N.UNKNOWN]: null,
    [N.WEB_MERCATOR]: f2,
    [N.PLATE_CARREE]: K,
    [N.WGS84]: I,
    [N.WGS84_ECEF]: p3
  },
  [N.WGS84_ECEF]: {
    [N.CGCS2000]: Y,
    [N.GCSMARS2000]: null,
    [N.GCSMOON2000]: null,
    [N.LON_LAT]: Y,
    [N.SPHERICAL_ECEF]: Z,
    [N.SPHERICAL_MARS_PCPF]: null,
    [N.SPHERICAL_MOON_PCPF]: null,
    [N.UNKNOWN]: null,
    [N.WEB_MERCATOR]: $,
    [N.PLATE_CARREE]: m,
    [N.WGS84]: Y,
    [N.WGS84_ECEF]: f2
  },
  [N.SPHERICAL_ECEF]: {
    [N.CGCS2000]: D,
    [N.GCSMARS2000]: null,
    [N.GCSMOON2000]: null,
    [N.LON_LAT]: D,
    [N.SPHERICAL_ECEF]: f2,
    [N.SPHERICAL_MARS_PCPF]: null,
    [N.SPHERICAL_MOON_PCPF]: null,
    [N.UNKNOWN]: null,
    [N.WEB_MERCATOR]: J,
    [N.PLATE_CARREE]: w2,
    [N.WGS84]: D,
    [N.WGS84_ECEF]: Q
  },
  [N.SPHERICAL_MARS_PCPF]: {
    [N.CGCS2000]: null,
    [N.GCSMARS2000]: z,
    [N.GCSMOON2000]: null,
    [N.LON_LAT]: z,
    [N.SPHERICAL_ECEF]: null,
    [N.SPHERICAL_MARS_PCPF]: f2,
    [N.SPHERICAL_MOON_PCPF]: null,
    [N.UNKNOWN]: null,
    [N.WEB_MERCATOR]: null,
    [N.PLATE_CARREE]: null,
    [N.WGS84]: null,
    [N.WGS84_ECEF]: null
  },
  [N.SPHERICAL_MOON_PCPF]: {
    [N.CGCS2000]: null,
    [N.GCSMARS2000]: null,
    [N.GCSMOON2000]: v,
    [N.LON_LAT]: v,
    [N.SPHERICAL_ECEF]: null,
    [N.SPHERICAL_MARS_PCPF]: null,
    [N.SPHERICAL_MOON_PCPF]: f2,
    [N.UNKNOWN]: null,
    [N.WEB_MERCATOR]: null,
    [N.PLATE_CARREE]: null,
    [N.WGS84]: null,
    [N.WGS84_ECEF]: null
  },
  [N.UNKNOWN]: {
    [N.CGCS2000]: null,
    [N.GCSMARS2000]: null,
    [N.GCSMOON2000]: null,
    [N.LON_LAT]: null,
    [N.SPHERICAL_ECEF]: null,
    [N.SPHERICAL_MARS_PCPF]: null,
    [N.SPHERICAL_MOON_PCPF]: null,
    [N.UNKNOWN]: f2,
    [N.WEB_MERCATOR]: null,
    [N.PLATE_CARREE]: null,
    [N.WGS84]: null,
    [N.WGS84_ECEF]: null
  },
  [N.LON_LAT]: {
    [N.CGCS2000]: f2,
    [N.GCSMARS2000]: f2,
    [N.GCSMOON2000]: f2,
    [N.LON_LAT]: f2,
    [N.SPHERICAL_ECEF]: x,
    [N.SPHERICAL_MARS_PCPF]: k,
    [N.SPHERICAL_MOON_PCPF]: b,
    [N.UNKNOWN]: null,
    [N.WEB_MERCATOR]: h2,
    [N.PLATE_CARREE]: d,
    [N.WGS84]: f2,
    [N.WGS84_ECEF]: X
  },
  [N.PLATE_CARREE]: {
    [N.CGCS2000]: U,
    [N.GCSMARS2000]: null,
    [N.GCSMOON2000]: null,
    [N.LON_LAT]: U,
    [N.SPHERICAL_ECEF]: B,
    [N.SPHERICAL_MARS_PCPF]: null,
    [N.SPHERICAL_MOON_PCPF]: null,
    [N.UNKNOWN]: null,
    [N.WEB_MERCATOR]: j,
    [N.PLATE_CARREE]: f2,
    [N.WGS84]: U,
    [N.WGS84_ECEF]: q
  }
};
function G3(n2, C2, l2 = Cn()) {
  return null == n2 || null == C2 ? null : nn(n2, C2, l2).projector;
}
function W2(n2, C2) {
  switch (G3(n2, C2, En)) {
    case f2:
      return "copy3";
    case x:
      return "wgs84ToSphericalECEF";
    case h2:
      return "wgs84ToWebMercator";
    case d:
      return "wgs84ToPlateCarree";
    case X:
      return "wgs84ToWGS84ECEF";
    case I:
      return "webMercatorToWGS84";
    case T:
      return "webMercatorToSphericalECEF";
    case p3:
      return "webMercatorToWGS84ECEF";
    case K:
      return "webMercatorToPlateCarree";
    case Y:
      return "wgs84ECEFToWGS84";
    case Z:
      return "wgs84ECEFToSphericalECEF";
    case $:
      return "wgs84ECEFToWebMercator";
    case D:
      return "sphericalECEFToWGS84";
    case J:
      return "sphericalECEFToWebMercator";
    case z:
      return "sphericalMarsPCPFToMars2000";
    case v:
      return "sphericalMoonPCPFToMoon2000";
    case Q:
      return "sphericalECEFToWGS84ECEF";
    case k:
      return "mars2000ToSphericalPCPF";
    case b:
      return "moon2000ToSphericalPCPF";
    default:
      return null;
  }
}
function F(n2, C2) {
  return n2 ? C2.spatialReference === n2 ? C2.spatialReferenceId : (C2.spatialReference = n2, "metersPerUnit" in C2 && (C2.metersPerUnit = W(n2, 1)), A(n2) ? C2.spatialReferenceId = N.SPHERICAL_ECEF : C(n2) ? C2.spatialReferenceId = N.WGS84 : w(n2) ? C2.spatialReferenceId = N.WEB_MERCATOR : O(n2) ? C2.spatialReferenceId = N.PLATE_CARREE : n2.wkt === u.wkt ? C2.spatialReferenceId = N.WGS84_ECEF : n2.wkid === S.CGCS2000 ? C2.spatialReferenceId = N.CGCS2000 : n2.wkt === G2.wkt ? C2.spatialReferenceId = N.SPHERICAL_MARS_PCPF : n2.wkt === p2.wkt ? C2.spatialReferenceId = N.SPHERICAL_MOON_PCPF : f(n2) ? C2.spatialReferenceId = N.GCSMARS2000 : p(n2) ? C2.spatialReferenceId = N.GCSMOON2000 : C2.spatialReferenceId = N.UNKNOWN) : N.UNKNOWN;
}
function f2(n2, C2, l2, e3) {
  n2 !== l2 && (l2[e3++] = n2[C2++], l2[e3++] = n2[C2++], l2[e3] = n2[C2]);
}
function I(n2, C2, l2, e3) {
  l2[e3] = Sn * (n2[C2] / Rn), l2[e3 + 1] = Sn * (un - 2 * Math.atan(Math.exp(-n2[C2 + 1] / Rn))), l2[e3 + 2] = n2[C2 + 2];
}
function T(n2, C2, l2, e3) {
  const E = n2[C2] / Rn, t2 = un - 2 * Math.atan(Math.exp(-n2[C2 + 1] / Rn)), S2 = Rn + n2[C2 + 2], r = Math.cos(t2) * S2;
  l2[e3] = Math.cos(E) * r, l2[e3 + 1] = Math.sin(E) * r, l2[e3 + 2] = Math.sin(t2) * S2;
}
function p3(n2, C2, l2, e3) {
  I(n2, C2, l2, e3), X(l2, e3, l2, e3);
}
function H(n2, l2, e3, E, t2) {
  const S2 = 0.4999999 * rn, r = e2(tn * n2[l2 + 1], -S2, S2), u2 = Math.sin(r);
  e3[E++] = tn * n2[l2] * t2.radius, e3[E++] = t2.halfSemiMajorAxis * Math.log((1 + u2) / (1 - u2)), e3[E] = n2[l2 + 2];
}
function h2(n2, C2, l2, e3) {
  H(n2, C2, l2, e3, s);
}
function d(n2, C2, l2, e3) {
  l2[e3] = n2[C2] * an, l2[e3 + 1] = n2[C2 + 1] * an, l2[e3 + 2] = n2[C2 + 2];
}
function U(n2, C2, l2, e3) {
  l2[e3] = n2[C2] * An, l2[e3 + 1] = n2[C2 + 1] * An, l2[e3 + 2] = n2[C2 + 2];
}
function K(n2, C2, l2, e3) {
  I(n2, C2, l2, e3), d(l2, e3, l2, e3);
}
function m(n2, C2, l2, e3) {
  Y(n2, C2, l2, e3), d(l2, e3, l2, e3);
}
function w2(n2, C2, l2, e3) {
  D(n2, C2, l2, e3), d(l2, e3, l2, e3);
}
function B(n2, C2, l2, e3) {
  U(n2, C2, l2, e3), x(l2, e3, l2, e3);
}
function j(n2, C2, l2, e3) {
  U(n2, C2, l2, e3), h2(l2, e3, l2, e3);
}
function q(n2, C2, l2, e3) {
  U(n2, C2, l2, e3), X(l2, e3, l2, e3);
}
function g(n2, C2, l2, e3, E) {
  const t2 = E + n2[C2 + 2], S2 = tn * n2[C2 + 1], r = tn * n2[C2], u2 = Math.cos(S2) * t2;
  l2[e3] = Math.cos(r) * u2, l2[e3 + 1] = Math.sin(r) * u2, l2[e3 + 2] = Math.sin(S2) * t2;
}
function b(n2, C2, l2, e3) {
  g(n2, C2, l2, e3, e.radius);
}
function k(n2, C2, l2, e3) {
  g(n2, C2, l2, e3, t.radius);
}
function x(n2, C2, l2, e3) {
  g(n2, C2, l2, e3, s.radius);
}
function y(n2, C2, l2, E, t2) {
  const S2 = n2[C2], r = n2[C2 + 1], u2 = n2[C2 + 2], R = Math.sqrt(S2 * S2 + r * r + u2 * u2), a = l(u2 / (0 === R ? 1 : R)), A2 = Math.atan2(r, S2);
  l2[E++] = Sn * A2, l2[E++] = Sn * a, l2[E] = R - t2;
}
function v(n2, C2, l2, e3) {
  y(n2, C2, l2, e3, e.radius);
}
function z(n2, C2, l2, e3) {
  y(n2, C2, l2, e3, t.radius);
}
function D(n2, C2, l2, e3) {
  y(n2, C2, l2, e3, s.radius);
}
function J(n2, C2, l2, e3) {
  D(n2, C2, l2, e3), h2(l2, e3, l2, e3);
}
function Q(n2, C2, l2, e3) {
  D(n2, C2, l2, e3), X(l2, e3, l2, e3);
}
function V(n2, C2, l2, e3, E) {
  const t2 = tn * n2[C2], S2 = tn * n2[C2 + 1], r = n2[C2 + 2], u2 = Math.sin(S2), R = Math.cos(S2), a = E.radius / Math.sqrt(1 - E.eccentricitySquared * u2 * u2);
  l2[e3++] = (a + r) * R * Math.cos(t2), l2[e3++] = (a + r) * R * Math.sin(t2), l2[e3++] = (a * (1 - E.eccentricitySquared) + r) * u2;
}
function X(n2, C2, l2, e3) {
  V(n2, C2, l2, e3, s);
}
function Y(n2, C2, l2, e3) {
  const E = s2, t2 = n2[C2], S2 = n2[C2 + 1], r = n2[C2 + 2];
  let u2, R, a, _, c, s3, o, M2, i, O2, N2, L2, G4, W3, F2, f3, I2, T2, p4, H2, h3;
  u2 = Math.abs(r), R = t2 * t2 + S2 * S2, a = Math.sqrt(R), _ = R + r * r, c = Math.sqrt(_), H2 = Math.atan2(S2, t2), s3 = r * r / _, o = R / _, W3 = E.a2 / c, F2 = E.a3 - E.a4 / c, o > 0.3 ? (M2 = u2 / c * (1 + o * (E.a1 + W3 + s3 * F2) / c), p4 = Math.asin(M2), O2 = M2 * M2, i = Math.sqrt(1 - O2)) : (i = a / c * (1 - s3 * (E.a5 - W3 - o * F2) / c), p4 = Math.acos(i), O2 = 1 - i * i, M2 = Math.sqrt(O2)), N2 = 1 - s.eccentricitySquared * O2, L2 = s.radius / Math.sqrt(N2), G4 = E.a6 * L2, W3 = a - L2 * i, F2 = u2 - G4 * M2, I2 = i * W3 + M2 * F2, f3 = i * F2 - M2 * W3, T2 = f3 / (G4 / N2 + I2), p4 += T2, h3 = I2 + f3 * T2 / 2, r < 0 && (p4 = -p4), l2[e3++] = Sn * H2, l2[e3++] = Sn * p4, l2[e3] = h3;
}
function Z(n2, C2, l2, e3) {
  Y(n2, C2, l2, e3), x(l2, e3, l2, e3);
}
function $(n2, C2, l2, e3) {
  Y(n2, C2, l2, e3), h2(l2, e3, l2, e3);
}
function nn(n2, C2, l2) {
  if (null == n2 || null == C2 || l2.source.spatialReference === n2 && l2.dest.spatialReference === C2) return l2;
  const e3 = F(n2, l2.source), E = F(C2, l2.dest);
  return e3 === N.UNKNOWN && E === N.UNKNOWN ? G(n2, C2) ? l2.projector = f2 : l2.projector = null : l2.projector = L[e3][E], l2;
}
function Cn() {
  return {
    source: {
      spatialReference: null,
      spatialReferenceId: N.UNKNOWN,
      metersPerUnit: 1
    },
    dest: {
      spatialReference: null,
      spatialReferenceId: N.UNKNOWN,
      metersPerUnit: 1
    },
    projector: f2
  };
}
var ln = {
  spatialReference: null,
  spatialReferenceId: N.UNKNOWN
};
var en = {
  spatialReference: null,
  spatialReferenceId: N.UNKNOWN
};
var En = Cn();
var tn = h(1);
var Sn = M(1);
var rn = Math.PI;
var un = 0.5 * rn;
var Rn = s.radius;
var an = Rn * rn / 180;
var An = 180 / (Rn * rn);

// ../../../node_modules/@arcgis/core/geometry/projection/projectBuffer.js
function n(n2, e3, f3, u2, c, i, s3 = 1) {
  const l2 = G3(e3, c, En);
  if (null == l2) return false;
  if (l2 === f2) {
    if (n2 === u2 && f3 === i) return true;
    const r = f3 + 3 * s3;
    for (let t2 = f3, o = i; t2 < r; t2++, o++) u2[o] = n2[t2];
    return true;
  }
  const p4 = f3 + 3 * s3;
  for (let r = f3, t2 = i; r < p4; r += 3, t2 += 3) l2(n2, r, u2, t2);
  return true;
}

export {
  N,
  L,
  G3 as G,
  W2 as W,
  F,
  f2 as f,
  H,
  h2 as h,
  y,
  nn,
  Cn,
  ln,
  en,
  En,
  An,
  n
};
//# sourceMappingURL=chunk-QGBMZIP4.js.map
