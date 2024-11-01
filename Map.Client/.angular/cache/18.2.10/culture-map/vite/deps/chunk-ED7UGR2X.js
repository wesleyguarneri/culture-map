import {
  f as f2
} from "./chunk-S3IO7V4Q.js";
import {
  m2 as m
} from "./chunk-T6GCUITX.js";
import {
  f
} from "./chunk-TKPMIAIW.js";

// ../../../node_modules/@arcgis/core/geometry/support/normalizeUtilsCommon.js
var r = {
  102100: {
    maxX: 20037508342788905e-9,
    minX: -20037508342788905e-9,
    plus180Line: new m({
      paths: [[[20037508342788905e-9, -20037508342788905e-9], [20037508342788905e-9, 20037508342788905e-9]]],
      spatialReference: f.WebMercator
    }),
    minus180Line: new m({
      paths: [[[-20037508342788905e-9, -20037508342788905e-9], [-20037508342788905e-9, 20037508342788905e-9]]],
      spatialReference: f.WebMercator
    })
  },
  4326: {
    maxX: 180,
    minX: -180,
    plus180Line: new m({
      paths: [[[180, -180], [180, 180]]],
      spatialReference: f.WGS84
    }),
    minus180Line: new m({
      paths: [[[-180, -180], [-180, 180]]],
      spatialReference: f.WGS84
    })
  }
};
function i(e, n) {
  return Math.ceil((e - n) / (2 * n));
}
function s(e, n) {
  const t = o(e);
  for (const r2 of t) for (const e2 of r2) e2[0] += n;
  return e;
}
function o(e) {
  return f2(e) ? e.rings : e.paths;
}

export {
  r,
  i,
  s,
  o
};
//# sourceMappingURL=chunk-ED7UGR2X.js.map
