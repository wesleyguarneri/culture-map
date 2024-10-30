import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  p
} from "./chunk-ZEZCWQFR.js";
import {
  y
} from "./chunk-IVVINOEJ.js";
import {
  l
} from "./chunk-T2SCEBLQ.js";
import {
  k
} from "./chunk-O7RCHW3H.js";

// ../../../node_modules/@arcgis/core/views/support/geodesicAreaMeasurementUtils.js
function o(e) {
  const {
    spatialReference: r
  } = e;
  return p(r, n, i, e);
}
function n(r) {
  return l(Math.abs(y([r], "square-meters")[0]), "square-meters");
}
function i(t) {
  try {
    return l(Math.abs(k(t, "square-meters")), "square-meters");
  } catch (s) {
    return null;
  }
}

export {
  o
};
//# sourceMappingURL=chunk-5E5FRWDI.js.map
