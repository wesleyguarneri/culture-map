import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Ht
} from "./chunk-XLEC46FY.js";

// ../../../node_modules/@arcgis/core/portal/support/resourceExtension.js
function p(i) {
  return o[t(i)] || e;
}
function t(i) {
  return "json" === i.type ? "application/json" : "blob" === i.type ? i.blob.type : n(i.url);
}
function n(p2) {
  const t2 = Ht(p2);
  return g[t2] || a;
}
var o = {};
var a = "text/plain";
var e = o[a];
var g = {
  png: "image/png",
  jpeg: "image/jpeg",
  jpg: "image/jpg",
  bmp: "image/bmp",
  gif: "image/gif",
  json: "application/json",
  txt: "text/plain",
  xml: "application/xml",
  svg: "image/svg+xml",
  zip: "application/zip",
  pbf: "application/vnd.mapbox-vector-tile",
  gz: "application/gzip",
  "bin.gz": "application/octet-stream"
};
for (const l in g) o[g[l]] = l;

export {
  p
};
//# sourceMappingURL=chunk-D5RCKR5Z.js.map