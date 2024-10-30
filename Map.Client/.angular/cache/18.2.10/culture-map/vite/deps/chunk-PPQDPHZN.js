import {
  p
} from "./chunk-WE6VW4MG.js";
import {
  y
} from "./chunk-DABQKFI5.js";
import {
  l
} from "./chunk-IIVUY2T7.js";
import {
  k
} from "./chunk-GHUJU3NS.js";

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
//# sourceMappingURL=chunk-PPQDPHZN.js.map
