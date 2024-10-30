import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e
} from "./chunk-GCVQXAS4.js";
import {
  n as n2
} from "./chunk-QGBMZIP4.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import {
  G
} from "./chunk-6SSA7P3A.js";

// ../../../node_modules/@arcgis/core/geometry/projection/projectBoundingRect.js
function i(r, i2, s, f) {
  return null != r && (G(i2, f) ? (e(s, r), true) : (p[0] = r[0], p[1] = r[1], p[2] = 0, !!n2(p, i2, 0, p, f, 0, 1) && (s[0] = p[0], s[1] = p[1], p[0] = r[2], p[1] = r[3], p[2] = 0, !!n2(p, i2, 0, p, f, 0, 1) && (s[2] = p[0], s[3] = p[1], true))));
}
var p = n();

export {
  i
};
//# sourceMappingURL=chunk-23QWXKUK.js.map
