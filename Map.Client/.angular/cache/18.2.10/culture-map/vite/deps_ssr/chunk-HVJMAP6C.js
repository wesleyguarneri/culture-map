import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  F
} from "./chunk-2OZSYJDX.js";
import {
  G
} from "./chunk-6SSA7P3A.js";

// ../../../node_modules/@arcgis/core/layers/graphics/dehydratedFeatureComparison.js
function t(e, n) {
  if (e === n) return true;
  if (null == e || null == n) return false;
  if (e.length !== n.length) return false;
  for (let t2 = 0; t2 < e.length; t2++) {
    const r2 = e[t2], a2 = n[t2];
    if (r2.length !== a2.length) return false;
    for (let e2 = 0; e2 < r2.length; e2++) if (r2[e2] !== a2[e2]) return false;
  }
  return true;
}
function r(e, n) {
  if (e === n) return true;
  if (null == e || null == n) return false;
  if (e.length !== n.length) return false;
  for (let r2 = 0; r2 < e.length; r2++) if (!t(e[r2], n[r2])) return false;
  return true;
}
function a(e, t2) {
  return e === t2 || null != e && null != t2 && G(e.spatialReference, t2.spatialReference) && e.x === t2.x && e.y === t2.y && e.z === t2.z && e.m === t2.m;
}
function i(t2, r2, a2) {
  return t2 === r2 || null != t2 && null != r2 && G(t2.spatialReference, r2.spatialReference) && F(t2.x, r2.x, a2) && F(t2.y, r2.y, a2) && F(t2.z ?? 0, r2.z ?? 0, a2) && F(t2.m ?? 0, r2.m ?? 0, a2);
}
function u(e, t2) {
  return e.hasZ === t2.hasZ && e.hasM === t2.hasM && !!G(e.spatialReference, t2.spatialReference) && r(e.paths, t2.paths);
}
function l(e, t2) {
  return e.hasZ === t2.hasZ && e.hasM === t2.hasM && !!G(e.spatialReference, t2.spatialReference) && r(e.rings, t2.rings);
}
function s(e, r2) {
  return e.hasZ === r2.hasZ && e.hasM === r2.hasM && !!G(e.spatialReference, r2.spatialReference) && t(e.points, r2.points);
}
function f(e, t2) {
  return e.hasZ === t2.hasZ && e.hasM === t2.hasM && !!G(e.spatialReference, t2.spatialReference) && e.xmin === t2.xmin && e.ymin === t2.ymin && e.zmin === t2.zmin && e.xmax === t2.xmax && e.ymax === t2.ymax && e.zmax === t2.zmax;
}
function c(e, n) {
  if (e === n) return true;
  if (null == e || null == n) return false;
  if (e.type !== n.type) return false;
  switch (e.type) {
    case "point":
      return a(e, n);
    case "extent":
      return f(e, n);
    case "polyline":
      return u(e, n);
    case "polygon":
      return l(e, n);
    case "multipoint":
      return s(e, n);
    case "mesh":
      return false;
    default:
      return;
  }
}
function o(e, n) {
  if (e === n) return true;
  if (!e || !n) return false;
  const t2 = Object.keys(e), r2 = Object.keys(n);
  if (t2.length !== r2.length) return false;
  for (const a2 of t2) if (e[a2] !== n[a2]) return false;
  return true;
}
function h(e, n) {
  return e === n || null != e && null != n && e.objectId === n.objectId && !!c(e.geometry, n.geometry) && !!o(e.attributes, n.attributes);
}

export {
  a,
  i,
  h
};
//# sourceMappingURL=chunk-HVJMAP6C.js.map
