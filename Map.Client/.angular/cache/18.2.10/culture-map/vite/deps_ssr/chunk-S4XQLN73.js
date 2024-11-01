import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  j,
  m2 as m,
  u
} from "./chunk-MRPCXIVS.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import {
  _
} from "./chunk-TIRJMGGG.js";

// ../../../node_modules/@arcgis/core/geometry/geometryAdapters/hydrated.js
var r = {
  convertToGEGeometry: s,
  exportPoint: a,
  exportPolygon: c,
  exportPolyline: h,
  exportMultipoint: m2,
  exportExtent: x
};
function s(e, n) {
  if (null == n) return null;
  let t = "cache" in n ? n.cache._geVersion : void 0;
  return null == t && (t = e.convertJSONToGeometry(n), "cache" in n && (n.cache._geVersion = t)), t;
}
function a(e, n, o) {
  const i = e.hasZ(n), r2 = e.hasM(n), s2 = new _({
    x: e.getPointX(n),
    y: e.getPointY(n),
    spatialReference: o
  });
  return i && (s2.z = e.getPointZ(n)), r2 && (s2.m = e.getPointM(n)), s2.cache._geVersion = n, s2;
}
function c(e, n, t) {
  const i = new j({
    rings: e.exportPaths(n),
    hasZ: e.hasZ(n),
    hasM: e.hasM(n),
    spatialReference: t
  });
  return i.cache._geVersion = n, i;
}
function h(e, n, t) {
  const o = new m({
    paths: e.exportPaths(n),
    hasZ: e.hasZ(n),
    hasM: e.hasM(n),
    spatialReference: t
  });
  return o.cache._geVersion = n, o;
}
function m2(e, t, o) {
  const i = new u({
    hasZ: e.hasZ(t),
    hasM: e.hasM(t),
    points: e.exportPoints(t),
    spatialReference: o
  });
  return i.cache._geVersion = t, i;
}
function x(n, t, o) {
  const i = n.hasZ(t), r2 = n.hasM(t), s2 = new w({
    xmin: n.getXMin(t),
    ymin: n.getYMin(t),
    xmax: n.getXMax(t),
    ymax: n.getYMax(t),
    spatialReference: o
  });
  if (i) {
    const e = n.getZExtent(t);
    s2.zmin = e.vmin, s2.zmax = e.vmax;
  }
  if (r2) {
    const e = n.getMExtent(t);
    s2.mmin = e.vmin, s2.mmax = e.vmax;
  }
  return s2.cache._geVersion = t, s2;
}

export {
  r
};
//# sourceMappingURL=chunk-S4XQLN73.js.map
