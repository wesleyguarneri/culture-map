import {
  f as f2,
  x
} from "./chunk-NLEBYD5G.js";
import {
  l
} from "./chunk-KKD7A2GN.js";
import {
  M
} from "./chunk-JM7HAEY6.js";
import {
  b,
  o,
  q,
  u as u2
} from "./chunk-IHVSZYZS.js";
import {
  A,
  j
} from "./chunk-3ZXOUEQG.js";
import {
  P as P2,
  e,
  g,
  r,
  u
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import {
  C,
  P2 as P,
  f2 as f,
  k,
  p
} from "./chunk-JJS7PR2U.js";
import {
  V
} from "./chunk-EITGQLII.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/views/3d/terrain/TerrainConst.js
var s2 = 64;
var a = 512;
var i = 2.5;
var l2 = A(j / 10);
var n2 = 2;
var m = u2();
f2.WebMercatorAuxiliarySphere.getExtent(0, 0, 0, m);
var c = u2([-180, -90, 180, 90]);
var u3 = "Cannot extend surface to encompass all layers because it would result in too many root tiles.";
var p2 = "Surface extent is too large for tile resolution at level 0.";
var f3 = 4;

// ../../../node_modules/@arcgis/core/views/3d/terrain/NeighborIndex.js
var T;
!function(T3) {
  T3[T3.NORTH = 0] = "NORTH", T3[T3.NORTH_EAST = 1] = "NORTH_EAST", T3[T3.EAST = 2] = "EAST", T3[T3.SOUTH_EAST = 3] = "SOUTH_EAST", T3[T3.SOUTH = 4] = "SOUTH", T3[T3.SOUTH_WEST = 5] = "SOUTH_WEST", T3[T3.WEST = 6] = "WEST", T3[T3.NORTH_WEST = 7] = "NORTH_WEST";
}(T || (T = {}));

// ../../../node_modules/@arcgis/core/views/3d/terrain/TerrainData.js
function t(t2) {
  return null != t2 && "type" in t2 && "vector-tile" === t2.type;
}
function e2(t2) {
  return null != t2 && "type" in t2 && "raster-tile" === t2.type;
}
function n3(t2) {
  return null != t2 && "type" in t2 && "tile-texture" === t2.type;
}
function r2(t2) {
  return null != t2 && "type" in t2 && "image+type" === t2.type;
}

// ../../../node_modules/@arcgis/core/views/3d/support/supportedSpatialReference.js
function o2(e3) {
  return i2(e3) || f(e3) || p(e3);
}
function i2(r4) {
  return C(r4) || k(r4);
}

// ../../../node_modules/@arcgis/core/chunks/terrainUtilsPlanar.js
var g2 = n();
var d = n();
var x2 = n();
var M2 = n();
function S(e3, t2, o4 = 0) {
  const n4 = e3.extent;
  if (null == n4) return false;
  if (0 === o4) return b(n4, t2);
  const r4 = Math.min(n4[2] - n4[0], n4[3] - n4[1]);
  return q(n4, t2, o4 * r4);
}
function v(e3, s5, l4, a2) {
  r(g2, l4), g2[a2] = s5[a2];
  const c2 = e(g2, g2, s5), u4 = e(d, e3, s5), f4 = P2(u4, c2), m3 = P2(c2, c2);
  let p4;
  p4 = f4 <= 0 ? s5 : m3 <= f4 ? l4 : u(g2, s5, g(c2, c2, f4 / m3));
  const h2 = e(g2, e3, p4);
  return Math.PI / 2 - Math.atan(h2[2] / Math.sqrt(h2[0] * h2[0] + h2[1] * h2[1]));
}
function j2(e3, t2, o4) {
  const n4 = e3.extent;
  if (null == n4) return 0;
  x2[0] = n4[0], x2[1] = n4[1], x2[2] = o4, M2[0] = n4[2], M2[1] = n4[3], M2[2] = o4;
  let r4 = 1 / 0, i3 = 1 / 0;
  return t2[0] < x2[0] ? r4 = v(t2, x2, M2, 0) : t2[0] > M2[0] && (r4 = v(t2, M2, x2, 0)), t2[1] < x2[1] ? i3 = v(t2, x2, M2, 1) : t2[1] > M2[1] && (i3 = v(t2, M2, x2, 1)), Math.min(r4, i3);
}
function w(t2, o4, n4, r4) {
  if (null == t2) return x();
  const i3 = t2.spatialReference;
  if (i3.isGeographic && !i2(i3)) return new s("tilingscheme:local-unsupported-spatial-reference", "The tiling scheme spatial reference is not supported in local scenes");
  const s5 = f2.checkUnsupported(t2);
  if (null != s5) return s5;
  if (null == n4) return new s("tilingscheme:extent-not-exist", "The layer does not provide a layer extent.");
  const l4 = T2(t2, n4);
  return l4 || (null == o4 || i3.equals(o4) || o4.isWGS84 && i3.isWebMercator ? null : new s("tilingscheme:spatial-reference-mismatch", "The tiling scheme does not match the spatial reference of the local scene"));
}
function T2(t2, o4) {
  const n4 = t2.lods, r4 = n4[0].resolution * 2 ** n4[0].level, i3 = [r4 * t2.size[0], r4 * t2.size[1]], s5 = [t2.origin.x, t2.origin.y], l4 = o(o4), a2 = u2();
  f2.computeRowColExtent(l4, i3, s5, a2);
  const f4 = (a2[2] - a2[0]) * (a2[3] - a2[1]);
  if (f4 > s2) {
    const o5 = n4[0].scale * 2 ** n4[0].level;
    let i4 = Math.max((l4[3] - l4[1]) / t2.size[1], (l4[2] - l4[0]) / t2.size[0]) * o5 / r4;
    const s6 = Math.floor(Math.log(i4) / Math.log(10));
    return i4 = Math.ceil(i4 / 10 ** s6) * 10 ** s6, new s("tilingscheme:too-many-root-tiles", "Scale of level 0 of the tiling scheme (1:" + Math.floor(o5).toLocaleString() + ") is too large for the layer's extent. Suggested scale: 1:" + i4.toLocaleString() + ".", {
      level0Scale: o5,
      suggestedLevel0Scale: i4,
      requiredNumRootTiles: f4,
      allowedNumRootTiles: s2
    });
  }
  return null;
}
var y = Object.freeze(Object.defineProperty({
  __proto__: null,
  checkIfTileInfoSupportedForViewSR: w,
  isInsideExtent: S,
  tiltToExtentEdge: j2
}, Symbol.toStringTag, {
  value: "Module"
}));

// ../../../node_modules/@arcgis/core/chunks/terrainUtilsSpherical.js
function l3() {
  return true;
}
function r3() {
  return 0;
}
function o3(l4, r4, o4, s5) {
  if (null == l4) return x();
  const c2 = l4?.lods.length - 1, a2 = l4.spatialReference;
  if (a2.isWebMercator) {
    if (!f2.makeWebMercatorAuxiliarySphere(c2).compatibleWith(l4, s5)) return new s("tilingscheme:incompatible-global-web-mercator", "The tiling scheme is not compatible with the ArcGIS Online Web Mercator tiling scheme");
  } else {
    if (!o2(a2)) return new s("tilingscheme:global-unsupported-spatial-reference", "The tiling scheme spatial reference is not supported in global scenes");
    if (!f2.makeGCSWithTileSize(l4.spatialReference, l4.size[0], c2).compatibleWith(l4, s5)) return l4.spatialReference.isWGS84 ? new s("tilingscheme:incompatible-global-wgs84", "The tiling scheme is not compatible with the ArcGIS Online WGS84 tiling scheme") : new s("tilingscheme:incompatible-global", "The tiling scheme is not compatible with the ArcGIS Online tiling scheme");
  }
  return null == r4 || l4.spatialReference.equals(r4) ? null : new s("tilingscheme:spatial-reference-mismatch", "The tiling scheme does not match the spatial reference of the global scene");
}
var s3 = Object.freeze(Object.defineProperty({
  __proto__: null,
  checkIfTileInfoSupportedForViewSR: o3,
  isInsideExtent: l3,
  tiltToExtentEdge: r3
}, Symbol.toStringTag, {
  value: "Module"
}));

// ../../../node_modules/@arcgis/core/views/3d/terrain/terrainUtils.js
var s4 = {
  [l.Global]: s3,
  [l.Local]: y
};
function S2(n4, t2) {
  n4 || console.warn("Terrain: " + t2);
}
var E = false;
var m2 = false;
function p3(n4) {
  m2 = n4, E = E || n4;
}
function H(n4) {
  E = n4;
}
function O(n4, t2) {
  if (E && !n4) {
    const n5 = new Error().stack?.slice(5);
    throw console.warn("Terrain internal: " + (t2 ?? "") + " at " + n5), new Error("Assertion failed" + (t2 ? ": " + t2 : ""));
  }
}
function y2(n4) {
  return I(n4) ? {
    fullExtent: n4.fullExtent,
    minScale: n4.layer.minScale,
    maxScale: n4.layer.maxScale,
    tilemapCache: null
  } : n4.layer;
}
function _(n4) {
  return "imagery-tile" === n4?.type || "wcs" === n4?.type;
}
function I(n4) {
  return "imagery-tile-3d" === n4?.type;
}
function R(n4) {
  return "tile-3d" === n4?.type;
}
function d2(n4) {
  return "vector-tile-3d" === n4?.type;
}
function N(n4) {
  return "wmts-3d" === n4?.type;
}
function U(n4) {
  return "elevation-3d" === n4?.type;
}
function x3(n4) {
  return "group" === n4?.type;
}
function A2(n4) {
  return n4 && (R(n4) || N(n4) || I(n4) || d2(n4));
}
function h(n4) {
  return n4 && (R(n4) || I(n4) || d2(n4) || N(n4));
}
function L(n4) {
  return h(n4) || U(n4);
}
function g3(n4) {
  return e2(n4?.sourceLayerInfo?.data);
}
function w2(n4) {
  return v2(n4?.sourceLayerInfo) || !!n4?.isVTLBackground;
}
function C2(n4) {
  return n3(n4?.sourceLayerInfo?.data);
}
function j3(n4) {
  const t2 = n4?.sourceLayerInfo?.data;
  return r2(t2) || t2 instanceof HTMLImageElement || t2 instanceof HTMLCanvasElement || t2 instanceof ImageData;
}
function v2(n4) {
  return t(n4?.data);
}
function b2(n4) {
  return null != n4 && "release" in n4 && n4.release(), null;
}
function M3(n4) {
  return n4.fetchTile && false !== n4.hasOverriddenFetchTile;
}
function V2(n4, t2, e3, r4, o4) {
  return s4[r4].checkIfTileInfoSupportedForViewSR(n4, e3, t2, o4);
}
function k2(n4, t2, e3) {
  let r4 = null, i3 = null;
  if ("wmts" === n4?.type) {
    const o4 = F(n4, t2, e3);
    r4 = o4.tileInfo, i3 = o4.fullExtent;
  } else {
    i3 = _(n4) ? n4.getCompatibleFullExtent(t2) : n4.fullExtent;
    const l5 = e3 === l.Local;
    if (_(n4)) r4 = n4.getCompatibleTileInfo(t2, i3, l5);
    else if ("vector-tile" === n4?.type) {
      r4 = l5 && !D(t2) || G.force512VTL ? n4.tileInfo : n4.tileInfo.getCompatibleForVTL(256);
    } else r4 = n4.tileInfo;
  }
  const l4 = "tilemapCache" in n4 ? n4.tilemapCache?.effectiveMaxLOD : void 0;
  return null != r4 && null != i3 && null == V2(r4, i3, t2, e3, l4) ? {
    tileInfo: r4,
    fullExtent: i3
  } : null;
}
function F(t2, e3, o4) {
  const i3 = M(t2);
  if (null != i3) {
    if (!V.isCollection(i3)) return {
      tileInfo: i3.tileInfo,
      fullExtent: i3.fullExtent
    };
    {
      const n4 = i3.find((n5) => null == V2(n5.tileInfo, n5.fullExtent, e3, o4));
      if (n4) return {
        tileInfo: n4.tileInfo,
        fullExtent: n4.fullExtent
      };
    }
  }
  return {
    tileInfo: null,
    fullExtent: null
  };
}
function D(n4) {
  return n4.isWGS84 || n4.isWebMercator || k(n4) || !P(n4);
}
var G = {
  force512VTL: false
};
function B(n4) {
  return "[" + n4[0] + "," + n4[1] + "," + n4[2] + "]";
}
function P3(n4) {
  return "(" + n4[0] + "," + n4[1] + "," + n4[2] + ")";
}
function q2(n4, t2, e3 = en) {
  return Math.abs(n4 - t2) < e3;
}
function z(n4) {
  return n4 === T.NORTH_EAST ? T.SOUTH_WEST : n4 === T.NORTH_WEST ? T.SOUTH_EAST : n4 === T.SOUTH_WEST ? T.NORTH_EAST : T.NORTH_WEST;
}
function J(n4) {
  return n4 === T.NORTH ? T.SOUTH : n4 === T.EAST ? T.WEST : n4 === T.SOUTH ? T.NORTH : T.EAST;
}
function K(n4) {
  return n4 === T.NORTH_WEST || n4 === T.SOUTH_WEST;
}
function Q(n4) {
  return n4 === T.NORTH_WEST || n4 === T.NORTH_EAST;
}
function X(n4) {
  return n4 === T.NORTH_WEST || n4 === T.WEST || n4 === T.SOUTH_WEST;
}
function Y(n4) {
  return n4 === T.NORTH_EAST || n4 === T.EAST || n4 === T.SOUTH_EAST;
}
function Z(n4) {
  return n4 === T.SOUTH_EAST || n4 === T.SOUTH || n4 === T.SOUTH_WEST;
}
function $(n4) {
  return n4 === T.NORTH_EAST || n4 === T.NORTH || n4 === T.NORTH_WEST;
}
var nn = [T.NORTH, T.EAST, T.SOUTH, T.WEST];
var tn = [T.NORTH_EAST, T.SOUTH_EAST, T.SOUTH_WEST, T.NORTH_WEST];
var en = 1e-5;

export {
  s2 as s,
  a,
  i,
  l2 as l,
  n2 as n,
  m,
  c,
  u3 as u,
  p2 as p,
  f3 as f,
  T,
  t,
  e2 as e,
  n3 as n2,
  r2 as r,
  o2 as o,
  i2,
  S2 as S,
  E,
  m2,
  p3 as p2,
  H,
  O,
  y2 as y,
  _,
  d2 as d,
  U,
  x3 as x,
  A2 as A,
  h,
  L,
  g3 as g,
  w2 as w,
  C2 as C,
  j3 as j,
  v2 as v,
  b2 as b,
  M3 as M,
  V2 as V,
  k2 as k,
  F,
  D,
  G,
  B,
  P3 as P,
  q2 as q,
  z,
  J,
  K,
  Q,
  X,
  Y,
  Z,
  $,
  nn,
  tn
};
//# sourceMappingURL=chunk-XVR4FEAF.js.map
