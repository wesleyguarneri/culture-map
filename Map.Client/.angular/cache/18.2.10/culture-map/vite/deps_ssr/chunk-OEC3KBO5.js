import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c
} from "./chunk-BY3XBMAH.js";
import {
  f
} from "./chunk-FDI2X6GO.js";
import {
  d
} from "./chunk-6XY35LS7.js";
import {
  b
} from "./chunk-ORYC4PVJ.js";
import {
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/rest/query/executeQueryJSON.js
function s(r, t, e) {
  return __async(this, null, function* () {
    const s2 = yield a(r, t, e);
    return d.fromJSON(s2);
  });
}
function a(o, s2, a2) {
  return __async(this, null, function* () {
    const n = f(o), i = __spreadValues({}, a2), p = b.from(s2), {
      data: u
    } = yield c(n, p, p.sourceSpatialReference, i);
    return u;
  });
}

export {
  s,
  a
};
//# sourceMappingURL=chunk-OEC3KBO5.js.map
