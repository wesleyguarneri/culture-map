import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f2 as f,
  p
} from "./chunk-6SSA7P3A.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/EllipsoidMode.js
var t;
function a(a2) {
  return a2 && f(a2) ? t.Mars : a2 && p(a2) ? t.Moon : t.Earth;
}
!function(r) {
  r[r.Earth = 1] = "Earth", r[r.Mars = 2] = "Mars", r[r.Moon = 3] = "Moon", r[r.COUNT = 4] = "COUNT";
}(t || (t = {}));

export {
  t,
  a
};
//# sourceMappingURL=chunk-VN66JXYD.js.map
