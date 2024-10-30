import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  te
} from "./chunk-BV256A2V.js";
import {
  u
} from "./chunk-6SSO6SUU.js";
import {
  a as a2,
  p
} from "./chunk-4UXMYOWI.js";
import {
  a,
  t
} from "./chunk-YSJVVDDH.js";
import {
  n
} from "./chunk-QGBMZIP4.js";

// ../../../node_modules/@arcgis/core/views/3d/support/renderInfoUtils/line.js
function p2(o, t2, s, p3) {
  const l2 = "polygon" === o.type ? p.CCW_IS_HOLE : p.NONE, a3 = "polygon" === o.type ? o.rings : o.paths, {
    position: u2,
    outlines: f
  } = a2(a3, !!o.hasZ, l2, o.spatialReference), g = t(u2.length), m = u(u2, o.spatialReference, 0, g, 0, u2, 0, u2.length / 3, t2, s, p3), y = null != m;
  return {
    lines: y ? c(f, u2, g) : [],
    projectionSuccess: y,
    sampledElevation: m
  };
}
function l(e, t2) {
  const i = "polygon" === e.type ? p.CCW_IS_HOLE : p.NONE, p3 = "polygon" === e.type ? e.rings : e.paths, {
    position: l2,
    outlines: a3
  } = a2(p3, false, i), u2 = n(l2, e.spatialReference, 0, l2, t2, 0, l2.length / 3);
  for (let o = 2; o < l2.length; o += 3) l2[o] = te;
  return {
    lines: u2 ? c(a3, l2) : [],
    projectionSuccess: u2
  };
}
function c(o, e, n2 = null) {
  const r = new Array();
  for (const {
    index: i,
    count: s
  } of o) {
    if (s <= 1) continue;
    const o2 = 3 * i, p3 = 3 * s;
    r.push({
      position: a(e, 3 * i, 3 * s),
      mapPositions: null != n2 ? a(n2, o2, p3) : void 0
    });
  }
  return r;
}

export {
  p2 as p,
  l
};
//# sourceMappingURL=chunk-K2ZPKMR7.js.map
