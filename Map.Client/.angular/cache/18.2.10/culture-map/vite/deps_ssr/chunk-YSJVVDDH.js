import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  U,
  y2 as y
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/geometry/support/DoubleArray.js
function t(n, t2 = false) {
  return n <= U ? t2 ? new Array(n).fill(0) : new Array(n) : new Float64Array(n);
}
function e(t2) {
  return (y(t2) ? t2.length : t2.byteLength / 8) <= U ? Array.from(t2) : new Float64Array(t2);
}
function a(r, n, t2) {
  return Array.isArray(r) ? r.slice(n, n + t2) : r.subarray(n, n + t2);
}
function o(r, n) {
  for (let t2 = 0; t2 < n.length; ++t2) r[t2] = n[t2];
  return r;
}
function y2(r) {
  return Array.isArray(r) ? new Float64Array(r) : r;
}

export {
  t,
  e,
  a,
  o,
  y2 as y
};
//# sourceMappingURL=chunk-YSJVVDDH.js.map
