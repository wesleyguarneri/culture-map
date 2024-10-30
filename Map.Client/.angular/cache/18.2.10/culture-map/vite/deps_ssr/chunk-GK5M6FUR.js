import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  H,
  J,
  N
} from "./chunk-LM3JDV4W.js";
import {
  n as n2
} from "./chunk-QGBMZIP4.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/geometry/projection/projectPointToVector.js
function c(e, o, c2, i2) {
  if (J(e.spatialReference, c2)) {
    f[0] = e.x, f[1] = e.y;
    const r = e.z;
    return f[2] = r ?? i2 ?? 0, n2(f, e.spatialReference, 0, o, c2, 0, 1);
  }
  const s = H(e, c2);
  return !!s && (o[0] = s?.x, o[1] = s?.y, o[2] = s?.z ?? i2 ?? 0, true);
}
function i(e, r, t, n3, i2) {
  return __async(this, null, function* () {
    return yield N(e.spatialReference, t, null, i2), c(e, r, t, n3);
  });
}
var f = n();

export {
  c,
  i
};
//# sourceMappingURL=chunk-GK5M6FUR.js.map
