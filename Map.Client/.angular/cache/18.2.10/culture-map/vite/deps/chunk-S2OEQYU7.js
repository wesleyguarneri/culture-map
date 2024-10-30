import {
  n as n2
} from "./chunk-L7ZKWTWL.js";
import {
  N
} from "./chunk-DUTZNK67.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=chunk-S2OEQYU7.js.map
