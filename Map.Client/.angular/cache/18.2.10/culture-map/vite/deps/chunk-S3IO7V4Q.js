import {
  j,
  m2 as m,
  u
} from "./chunk-T6GCUITX.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  _,
  n
} from "./chunk-O7UDKFOW.js";

// ../../../node_modules/@arcgis/core/geometry/support/jsonUtils.js
function m2(o) {
  return void 0 !== o.xmin && void 0 !== o.ymin && void 0 !== o.xmax && void 0 !== o.ymax;
}
function l(o) {
  return void 0 !== o.points;
}
function u2(o) {
  return void 0 !== o.x && void 0 !== o.y;
}
function s(o) {
  return void 0 !== o.paths;
}
function f(o) {
  return void 0 !== o.rings;
}
function y(y2) {
  return null == y2 ? null : y2 instanceof n ? y2 : u2(y2) ? _.fromJSON(y2) : s(y2) ? m.fromJSON(y2) : f(y2) ? j.fromJSON(y2) : l(y2) ? u.fromJSON(y2) : m2(y2) ? w.fromJSON(y2) : null;
}
function p(o) {
  return o ? u2(o) ? "esriGeometryPoint" : s(o) ? "esriGeometryPolyline" : f(o) ? "esriGeometryPolygon" : m2(o) ? "esriGeometryEnvelope" : l(o) ? "esriGeometryMultipoint" : null : null;
}
var v = {
  esriGeometryPoint: _,
  esriGeometryPolyline: m,
  esriGeometryPolygon: j,
  esriGeometryEnvelope: w,
  esriGeometryMultipoint: u
};
function G(o) {
  return o && v[o] || null;
}

export {
  m2 as m,
  l,
  u2 as u,
  s,
  f,
  y,
  p,
  G
};
//# sourceMappingURL=chunk-S3IO7V4Q.js.map
