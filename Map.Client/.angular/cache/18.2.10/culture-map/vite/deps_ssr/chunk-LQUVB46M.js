import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  U,
  y2 as y
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/geometry/support/FloatArray.js
function t(n, t2 = false) {
  return n <= U ? t2 ? new Array(n).fill(0) : new Array(n) : new Float32Array(n);
}
function e(t2) {
  return y(t2) ? t2.length < U ? t2 : new Float32Array(t2) : t2.length < U ? Array.from(t2) : t2;
}
function a(t2) {
  return (y(t2) ? t2.length : t2.byteLength / 8) <= U ? Array.from(t2) : new Float32Array(t2);
}
function o(r, n, t2) {
  return Array.isArray(r) ? r.slice(n, n + t2) : r.subarray(n, n + t2);
}

export {
  t,
  e,
  a,
  o
};
//# sourceMappingURL=chunk-LQUVB46M.js.map
