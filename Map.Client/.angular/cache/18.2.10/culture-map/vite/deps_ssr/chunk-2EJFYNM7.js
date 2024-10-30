import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  m
} from "./chunk-5X5U7R6O.js";

// ../../../node_modules/@arcgis/core/symbols/support/unitConversionUtils.js
function n(n2) {
  return !!n2 && null != m[n2];
}
function r(n2) {
  return 1 / (m[n2] || 1);
}
function e() {
  const n2 = Object.keys(m);
  return n2.sort(), n2;
}
var o = e();

export {
  n,
  r,
  o
};
//# sourceMappingURL=chunk-2EJFYNM7.js.map
