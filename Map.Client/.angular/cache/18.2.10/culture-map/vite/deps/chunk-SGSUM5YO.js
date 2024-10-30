import {
  w
} from "./chunk-JM7HAEY6.js";
import {
  y
} from "./chunk-DDYVXG4F.js";
import {
  a,
  s2 as s,
  t
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/webdoc/support/writeUtils.js
var o = /* @__PURE__ */ new Set(["bing-maps", "imagery", "imagery-tile", "map-image", "open-street-map", "tile", "unknown", "unsupported", "vector-tile", "web-tile", "wms", "wmts"]);
var l = /* @__PURE__ */ new Set(["catalog", "csv", "feature", "geo-rss", "geojson", "group", "imagery", "imagery-tile", "kml", "knowledge-graph", "map-image", "map-notes", "media", "ogc-feature", "oriented-imagery", "route", "stream", "subtype-group", "tile", "unknown", "unsupported", "vector-tile", "web-tile", "wfs", "wms", "wmts"]);
function d(e) {
  return "basemap" === e.layerContainerType ? o : "operational-layers" === e.layerContainerType ? l : null;
}
function p(e, t2) {
  if (t2.restrictedWebMapWriting) {
    const n = d(t2);
    return null == n || n.has(e.type) && !w(e);
  }
  return true;
}
function u(e, t2) {
  if (t2) if (w(e)) {
    const r = t("featureCollection.layers", t2), i = r?.[0]?.layerDefinition;
    i && c(e, i);
  } else "group" !== e.type && c(e, t2);
}
function c(e, t2) {
  "maxScale" in e && (t2.maxScale = y(e.maxScale) ?? void 0), "minScale" in e && (t2.minScale = y(e.minScale) ?? void 0);
}
function m(e, t2) {
  if (u(e, t2), t2 && (t2.id = e.id, "blendMode" in e && (t2.blendMode = e.blendMode, "normal" === t2.blendMode && delete t2.blendMode), t2.opacity = y(e.opacity) ?? void 0, t2.title = e.title || "Layer", t2.visibility = e.visible, "legendEnabled" in e && "wmts" !== e.type)) if (w(e)) {
    const n = t2.featureCollection;
    n && (n.showLegend = e.legendEnabled);
  } else t2.showLegend = e.legendEnabled;
}
function f(n, r, o2) {
  if (!n.persistenceEnabled) return null;
  if (!("write" in n) || !n.write) return o2?.messages && o2.messages.push(new s("layer:unsupported", `Layers (${n.title}, ${n.id}) of type '${n.declaredClass}' cannot be persisted`, {
    layer: n
  })), null;
  if (w(n) && !n.isTable) r = n.resourceInfo;
  else if (p(n, o2)) {
    const e = {};
    return n.write(e, o2) ? e : null;
  }
  return null != r && m(n, r = a(r)), r;
}

export {
  f
};
//# sourceMappingURL=chunk-SGSUM5YO.js.map
