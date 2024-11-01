import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  j,
  v,
  w as w2,
  z
} from "./chunk-IVVINOEJ.js";
import {
  a
} from "./chunk-T2SCEBLQ.js";
import {
  q
} from "./chunk-O7RCHW3H.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import {
  A,
  G,
  w
} from "./chunk-6SSA7P3A.js";

// ../../../node_modules/@arcgis/core/views/support/geodesicMeasurementUtils.js
function r(r2) {
  return A(r2) && w2(r2) || w(r2);
}
function p(r2, p3, i2, ...n2) {
  return A(r2) && w2(r2) ? p3.apply(void 0, n2) : w(r2) ? i2.apply(void 0, n2) : null;
}
var i = 1e5;

// ../../../node_modules/@arcgis/core/views/support/geodesicLengthMeasurementUtils.js
function m(e) {
  const {
    spatialReference: t
  } = e;
  return p(t, l, g, e);
}
function f(e, t) {
  if (!G(e.spatialReference, t.spatialReference)) return null;
  const {
    spatialReference: r2
  } = e;
  return R[0] = e.x, R[1] = e.y, R[2] = e.hasZ ? e.z : 0, d[0] = t.x, d[1] = t.y, d[2] = t.hasZ ? t.z : 0, u(R, d, r2);
}
function u(e, t, r2) {
  return p(r2, a2, p2, e, t, r2);
}
function a2(t, r2, s) {
  return a(j(j2, t, r2, s).distance, "meters");
}
function p2(t, n2, s) {
  return a(q(y(t, n2, s), "meters"), "meters");
}
function l(t) {
  return a(v([t], "meters")[0], "meters");
}
function g(t) {
  return a(q(t, "meters"), "meters");
}
function y(e, t, r2) {
  return {
    type: "polyline",
    spatialReference: r2,
    paths: [[[...e], [...t]]]
  };
}
var j2 = new z();
var R = n();
var d = n();

export {
  r,
  p,
  i,
  m,
  f,
  u
};
//# sourceMappingURL=chunk-ZEZCWQFR.js.map
