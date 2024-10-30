import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  v
} from "./chunk-VFYCIIDC.js";
import {
  d
} from "./chunk-CXNERL22.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/geometry/support/heightModelInfoUtils.js
function i(n, i2) {
  if (!n) return null;
  if (!s2(n)) return new s("webscene:unsupported-height-model-info", "The vertical coordinate system of the scene is not supported", {
    heightModelInfo: n
  });
  const a2 = n.heightUnit, o2 = v.deriveUnitFromSR(n, i2).heightUnit;
  return a2 !== o2 ? new s("webscene:incompatible-height-unit", `The vertical units of the scene (${a2}) must match the horizontal units of the scene (${o2})`, {
    verticalUnit: a2,
    horizontalUnit: o2
  }) : null;
}
function a(n, i2, a2) {
  const s3 = l(n), h2 = i2, u2 = o(s3, h2, a2);
  if (s3) {
    const i3 = v.deriveUnitFromSR(s3, n.spatialReference).heightUnit;
    if (!a2 && i3 !== s3.heightUnit) {
      const t = new s("layerview:unmatched-height-unit", `The vertical units of the layer must match the horizontal units (${i3})`, {
        horizontalUnit: i3
      });
      return new s("layerview:unsupported-height-model-info", "The vertical coordinate system of the layer is not supported", {
        heightModelInfo: s3,
        error: t
      });
    }
  }
  if (!c(n) || u2 === r.Unsupported) return new s("layerview:unsupported-height-model-info", "The vertical coordinate system of the layer is not supported", {
    heightModelInfo: s3
  });
  switch (u2) {
    case r.Units: {
      const t = s3?.heightUnit || "unknown", n2 = h2?.heightUnit || "unknown", i3 = new s("layerview:incompatible-height-unit", `The vertical units of the layer (${t}) must match the vertical units of the scene (${n2})`, {
        layerUnit: t,
        sceneUnit: n2
      });
      return new s("layerview:incompatible-height-model-info", "The vertical coordinate system of the layer is incompatible with the scene", {
        layerHeightModelInfo: s3,
        sceneHeightModelInfo: h2,
        error: i3
      });
    }
    case r.HeightModel: {
      const t = s3?.heightModel || "unknown", n2 = h2?.heightModel || "unknown", i3 = new s("layerview:incompatible-height-model", `The height model of the layer (${t}) must match the height model of the scene (${n2})`, {
        layerHeightModel: t,
        sceneHeightModel: n2
      });
      return new s("layerview:incompatible-height-model-info", "The vertical coordinate system of the layer is incompatible with the scene", {
        layerHeightModelInfo: s3,
        sceneHeightModelInfo: h2,
        error: i3
      });
    }
    case r.CRS: {
      const t = s3?.vertCRS || "unknown", n2 = h2?.vertCRS || "unknown", i3 = new s("layerview:incompatible-vertical-datum", `The vertical datum of the layer (${t}) must match the vertical datum of the scene (${n2})`, {
        layerDatum: t,
        sceneDatum: n2
      });
      return new s("layerview:incompatible-height-model-info", "The vertical coordinate system of the layer is incompatible with the scene", {
        layerHeightModelInfo: s3,
        sceneHeightModelInfo: h2,
        error: i3
      });
    }
  }
  return null;
}
function o(e, t, n) {
  if (!s2(e) || !s2(t)) return r.Unsupported;
  if (null == e || null == t) return r.Ok;
  if (!n && e.heightUnit !== t.heightUnit) return r.Units;
  if (e.heightModel !== t.heightModel) return r.HeightModel;
  switch (e.heightModel) {
    case "gravity-related-height":
      return r.Ok;
    case "ellipsoidal":
      return e.vertCRS === t.vertCRS ? r.Ok : r.CRS;
    default:
      return r.Unsupported;
  }
}
var r;
function s2(e) {
  return null == e || null != e.heightModel && null != e.heightUnit;
}
function c(e) {
  return "heightModelInfo" in e && null != e.heightModelInfo || null != e.spatialReference || !d2(e);
}
function l(e) {
  if ("integrated-mesh-3dtiles" === e.type) return null;
  const i2 = e.url ? d(e.url) : void 0, a2 = e.spatialReference?.vcsWkid;
  return !(null == a2 && null != i2 && "ImageServer" === i2.serverType) && h(e) && e.heightModelInfo ? e.heightModelInfo : d2(e) ? v.deriveUnitFromSR(p, e.spatialReference) : null;
}
function h(e) {
  return "heightModelInfo" in e;
}
function u(e) {
  if ("unknown" === e.type || !("capabilities" in e)) return false;
  switch (e.type) {
    case "catalog":
    case "catalog-footprint":
    case "csv":
    case "feature":
    case "geojson":
    case "subtype-group":
    case "ogc-feature":
    case "oriented-imagery":
    case "wfs":
    case "knowledge-graph-sublayer":
      return true;
    default:
      return false;
  }
}
function d2(e) {
  return u(e) ? !!(e.capabilities && e.capabilities.data && e.capabilities.data.supportsZ) : f(e);
}
function g(e) {
  return null != e.layers || f(e) || u(e) || h(e);
}
function f(e) {
  switch (e.type) {
    case "building-scene":
    case "elevation":
    case "integrated-mesh":
    case "integrated-mesh-3dtiles":
    case "point-cloud":
    case "scene":
    case "voxel":
      return true;
    case "base-dynamic":
    case "base-elevation":
    case "base-tile":
    case "bing-maps":
    case "catalog":
    case "catalog-footprint":
    case "catalog-dynamic-group":
    case "csv":
    case "dimension":
    case "geojson":
    case "feature":
    case "subtype-group":
    case "geo-rss":
    case "graphics":
    case "group":
    case "imagery":
    case "imagery-tile":
    case "kml":
    case "knowledge-graph":
    case "link-chart":
    case "knowledge-graph-sublayer":
    case "line-of-sight":
    case "map-image":
    case "map-notes":
    case "media":
    case "ogc-feature":
    case "open-street-map":
    case "oriented-imagery":
    case "route":
    case "stream":
    case "tile":
    case "unknown":
    case "unsupported":
    case "vector-tile":
    case "video":
    case "wcs":
    case "web-tile":
    case "wfs":
    case "wms":
    case "wmts":
    case null:
      return false;
  }
  return false;
}
!function(e) {
  e[e.Ok = 0] = "Ok", e[e.Units = 1] = "Units", e[e.HeightModel = 2] = "HeightModel", e[e.CRS = 3] = "CRS", e[e.Unsupported = 4] = "Unsupported";
}(r || (r = {}));
var p = new v({
  heightModel: "gravity-related-height"
});

export {
  i,
  a,
  l,
  g
};
//# sourceMappingURL=chunk-CQIKG7VH.js.map
