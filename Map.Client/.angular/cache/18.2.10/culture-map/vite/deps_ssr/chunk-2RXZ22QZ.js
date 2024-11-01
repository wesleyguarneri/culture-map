import { createRequire } from 'module';const require = createRequire(import.meta.url);

// ../../../node_modules/@arcgis/core/views/draw/support/helpMessageUtils.js
function e(e2, l) {
  switch (e2) {
    case "point":
    case "multipoint":
      return n();
    case "polyline":
      return t(l);
    case "polygon":
      return o(l);
    default:
      return;
  }
}
function n(e2) {
  return "point";
}
function t(e2) {
  return (null != e2 && "polyline" === e2.type && e2.paths.length ? e2.paths[0].length : 0) < 2 ? "polylineZeroVertices" : "polylineOneVertex";
}
function o(e2) {
  const n2 = null != e2 && "polygon" === e2.type && e2.rings.length ? e2.rings[0].length : 0;
  return n2 < 3 ? "polylineZeroVertices" : n2 < 4 ? "polygonOneVertex" : "polygonTwoVertices";
}

export {
  e
};
//# sourceMappingURL=chunk-2RXZ22QZ.js.map
