import {
  U,
  t3 as t
} from "./chunk-SYATLP3H.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/support/layerUtils.js
function n(e) {
  return f(e) || o(e);
}
function r(e) {
  return null != e && "object" == typeof e && "type" in e && "feature" === e.type;
}
function i(e) {
  return null != e && "object" == typeof e && "type" in e && "graphics" === e.type;
}
function u(e) {
  return null != e && "object" == typeof e && "type" in e && "map-notes" === e.type && "sublayers" in e;
}
function s(e) {
  return null != e && "object" == typeof e && "type" in e && "knowledge-graph" === e.type && "layers" in e;
}
function a(e) {
  return null != e && "object" == typeof e && "type" in e && "link-chart" === e.type && "layers" in e;
}
function o(e) {
  return "scene" === e?.type;
}
function c(e) {
  return null != e && "object" == typeof e && "type" in e && "subtype-group" === e.type && "sublayers" in e;
}
function l(e) {
  return "subtype-sublayer" === e?.type;
}
function f(e) {
  const t2 = e?.type;
  return "imagery-tile" === t2 || "tile" === t2 || "open-street-map" === t2 || "vector-tile" === t2 || "web-tile" === t2 || "wmts" === t2;
}
function y(e) {
  const t2 = e?.type;
  return "base-tile" === t2 || "tile" === t2 || "elevation" === t2 || "imagery-tile" === t2 || "base-elevation" === t2 || "open-street-map" === t2 || "wcs" === t2 || "web-tile" === t2 || "wmts" === t2 || "vector-tile" === t2;
}
function p(e) {
  return null != e && "type" in e && "group" === e.type;
}
var g = {
  Point: "SceneLayer",
  "3DObject": "SceneLayer",
  IntegratedMesh: "IntegratedMeshLayer",
  PointCloud: "PointCloudLayer",
  Building: "BuildingSceneLayer"
};
function b(e) {
  const t2 = e?.type;
  return "building-scene" === t2 || "integrated-mesh" === t2 || "point-cloud" === t2 || "scene" === t2;
}
function d(e) {
  return "IntegratedMeshLayer" === e || "IntegratedMesh3DTilesLayer" === e;
}
function m(e) {
  return "integrated-mesh" === e || "integrated-mesh-3dtiles" === e;
}
function h(e) {
  return "voxel" === e?.type;
}
function v(e) {
  return "imagery-tile" === e?.type;
}
function j(e) {
  return null != e?.parent && "declaredClass" in e.parent && "esri.Basemap" === e.parent.declaredClass && e.parent.baseLayers.includes(e);
}
function w(e) {
  return "feature" === e?.type && !e.url && "memory" === e.source?.type;
}
function L(e) {
  return ("feature" === e?.type || "subtype-group" === e?.type) && "feature-layer" === e.source?.type;
}
function M(e) {
  if (e.activeLayer) {
    const t2 = e.activeLayer.tileMatrixSet;
    if (t2) return t2;
    const n2 = e.activeLayer.tileMatrixSets;
    if (n2) return n2;
  }
  return null;
}
function x(n2, r2) {
  return __async(this, null, function* () {
    const i2 = t?.findServerInfo(n2);
    if (null != i2?.currentVersion) return i2.owningSystemUrl || null;
    const u2 = n2.toLowerCase().indexOf("/rest/services");
    if (-1 === u2) return null;
    const s2 = `${n2.substring(0, u2)}/rest/info`, a2 = null != r2 ? r2.signal : null, {
      data: o2
    } = yield U(s2, {
      query: {
        f: "json"
      },
      responseType: "json",
      signal: a2
    });
    return o2?.owningSystemUrl || null;
  });
}
function I(e) {
  if (!("capabilities" in e)) return false;
  switch (e.type) {
    case "catalog":
    case "catalog-footprint":
    case "csv":
    case "feature":
    case "geojson":
    case "imagery":
    case "knowledge-graph-sublayer":
    case "ogc-feature":
    case "oriented-imagery":
    case "scene":
    case "sublayer":
    case "subtype-group":
    case "subtype-sublayer":
    case "wfs":
      return true;
    default:
      return false;
  }
}
function k(e) {
  return null != e && "object" == typeof e && "isTable" in e && !!e.isTable;
}
function O(e) {
  return I(e) ? "effectiveCapabilities" in e ? e.effectiveCapabilities : e.capabilities : null;
}
function T(e) {
  if (!("editingEnabled" in e)) return false;
  switch (e.type) {
    case "csv":
    case "feature":
    case "geojson":
    case "oriented-imagery":
    case "scene":
    case "subtype-group":
    case "subtype-sublayer":
      return true;
    default:
      return false;
  }
}
function B(e) {
  return !!T(e) && ("effectiveEditingEnabled" in e ? e.effectiveEditingEnabled : e.editingEnabled);
}

export {
  n,
  r,
  i,
  u,
  s,
  a,
  c,
  l,
  f,
  y,
  p,
  g,
  b,
  d,
  m,
  h,
  v,
  j,
  w,
  L,
  M,
  x,
  k,
  O,
  B
};
//# sourceMappingURL=chunk-JM7HAEY6.js.map
