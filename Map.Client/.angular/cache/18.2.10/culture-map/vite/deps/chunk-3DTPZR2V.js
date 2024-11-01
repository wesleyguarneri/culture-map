import {
  f
} from "./chunk-ATQ5GYTB.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/geometry/support/geometryUtils.js
function n(e) {
  switch (e?.type) {
    case "point":
      return e;
    case "extent":
      return e.center;
    case "polygon":
      return e.centroid;
    case "multipoint":
    case "polyline":
      return e.extent?.center;
    default:
      return null;
  }
}
function r(e, t) {
  return __async(this, null, function* () {
    if (e.hasZ || "2d" === t.type) return e;
    const n2 = t.map?.ground;
    if (!n2?.layers.length) return e;
    const {
      geometry: r2
    } = yield n2.queryElevation(e, {
      cache: t.basemapTerrain?.elevationQueryCache
    });
    return r2;
  });
}
function a(e, t, n2) {
  return i(e.center, t, n2);
}
function c(e, t, n2) {
  switch (e?.type) {
    case "extent":
      return e;
    case "multipoint":
    case "polygon":
    case "polyline":
      return e.extent;
    case "point":
      return i(e, t, n2);
    default:
      return null;
  }
}
function i(n2, r2, a2) {
  const c2 = n2.hasZ ? n2.z : void 0;
  if (r2?.map) {
    return (null != a2 ? f(r2, a2) : r2.extent).clone().centerAt(n2).set({
      zmax: c2,
      zmin: c2
    });
  }
  const {
    x: i2,
    y: o,
    spatialReference: u
  } = n2;
  return new w({
    xmin: i2 - 0.25,
    ymin: o - 0.25,
    xmax: i2 + 0.25,
    ymax: o + 0.25,
    spatialReference: u,
    zmin: c2,
    zmax: c2
  });
}

export {
  n,
  r,
  a,
  c
};
//# sourceMappingURL=chunk-3DTPZR2V.js.map
