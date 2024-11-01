import {
  G,
  L,
  O2 as O
} from "./chunk-JJS7PR2U.js";

// ../../../node_modules/@arcgis/core/geometry/support/zscale.js
function o(o2, f, u) {
  if (null == f || null == u || u.vcsWkid || G(f, u) || O(f) || O(u)) return null;
  const a = L(f) / L(u);
  if (1 === a) return null;
  switch (o2) {
    case "point":
    case "esriGeometryPoint":
      return (n) => r(n, a);
    case "polyline":
    case "esriGeometryPolyline":
      return (n) => l(n, a);
    case "polygon":
    case "esriGeometryPolygon":
      return (n) => i(n, a);
    case "multipoint":
    case "esriGeometryMultipoint":
      return (n) => s(n, a);
    case "extent":
    case "esriGeometryEnvelope":
      return (n) => c(n, a);
    default:
      return null;
  }
}
function r(n, e) {
  null != n?.z && (n.z *= e);
}
function i(n, e) {
  if (n) for (const t of n.rings) for (const n2 of t) n2.length > 2 && (n2[2] *= e);
}
function l(n, e) {
  if (n) for (const t of n.paths) for (const n2 of t) n2.length > 2 && (n2[2] *= e);
}
function s(n, e) {
  if (n) for (const t of n.points) t.length > 2 && (t[2] *= e);
}
function c(n, e) {
  n && null != n.zmin && null != n.zmax && (n.zmin *= e, n.zmax *= e);
}

export {
  o
};
//# sourceMappingURL=chunk-IN6BQCWS.js.map
