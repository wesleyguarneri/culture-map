import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n as n2
} from "./chunk-ZFES27RA.js";
import {
  N
} from "./chunk-LM3JDV4W.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/geometry/projection/projectVectorToPoint.js
function t(r, e, t2) {
  return !!n2(r, e, i, t2.spatialReference) && (t2.x = i[0], t2.y = i[1], t2.z = i[2], true);
}
function c(r, o, c2, i2) {
  return __async(this, null, function* () {
    return yield N(o, c2.spatialReference, null, i2), t(r, o, c2);
  });
}
var i = n();

export {
  t,
  c
};
//# sourceMappingURL=chunk-OPYMVWCV.js.map
