import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o,
  q,
  s
} from "./chunk-KOI252FF.js";
import {
  F,
  L,
  N,
  en,
  ln
} from "./chunk-QGBMZIP4.js";
import {
  h
} from "./chunk-2OZSYJDX.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import {
  G
} from "./chunk-6SSA7P3A.js";

// ../../../node_modules/@arcgis/core/geometry/projection/localRotationUtils.js
function n2(t, n3, o3) {
  const r = Math.sin(t), a = Math.cos(t), i = Math.sin(n3), s2 = Math.cos(n3), c2 = o3;
  return c2[0] = -r, c2[4] = -i * a, c2[8] = s2 * a, c2[12] = 0, c2[1] = a, c2[5] = -i * r, c2[9] = s2 * r, c2[13] = 0, c2[2] = 0, c2[6] = s2, c2[10] = i, c2[14] = 0, c2[3] = 0, c2[7] = 0, c2[11] = 0, c2[15] = 1, c2;
}
function o2(o3, r, a) {
  return n2(o3, r, a), s(a, a), a;
}

// ../../../node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js
function u(r, i, u2, _) {
  if (null == r || null == _) return false;
  const p = F(r, ln), a = F(_, en);
  if (p === a && !c(a) && (p !== N.UNKNOWN || G(r, _))) return q(u2, i), true;
  if (c(a)) {
    const r2 = L[p][N.LON_LAT], t = L[N.LON_LAT][a];
    return null != r2 && null != t && (r2(i, 0, L2, 0), t(L2, 0, R, 0), n2(A * L2[0], A * L2[1], u2), u2[12] = R[0], u2[13] = R[1], u2[14] = R[2], true);
  }
  if (!(a !== N.WEB_MERCATOR && a !== N.PLATE_CARREE && a !== N.WGS84 && a !== N.CGCS2000 || p !== N.WGS84 && p !== N.SPHERICAL_ECEF && p !== N.WEB_MERCATOR && p !== N.CGCS2000)) {
    const r2 = L[p][N.LON_LAT], t = L[N.LON_LAT][a];
    return null != r2 && null != t && (r2(i, 0, L2, 0), t(L2, 0, R, 0), p === N.SPHERICAL_ECEF ? o2(A * L2[0], A * L2[1], u2) : o(u2), u2[12] = R[0], u2[13] = R[1], u2[14] = R[2], true);
  }
  return false;
}
function c(r) {
  return r === N.SPHERICAL_ECEF || r === N.SPHERICAL_MARS_PCPF || r === N.SPHERICAL_MOON_PCPF;
}
var A = h(1);
var L2 = n();
var R = n();

export {
  n2 as n,
  u
};
//# sourceMappingURL=chunk-MRP3FBLV.js.map
