import {
  t
} from "./chunk-U7YHNT5S.js";

// ../../../node_modules/@arcgis/core/views/3d/support/ElevationProvider.js
var r = class {
  constructor(e, r2 = null, t3 = 0) {
    this.array = e, this.spatialReference = r2, this.offset = t3;
  }
};
function t2(e) {
  return "array" in e;
}
function a(r2, a2, n = "ground") {
  if (t(a2)) return r2.getElevation(a2.x, a2.y, a2.z || 0, a2.spatialReference, n);
  if (t2(a2)) {
    let e = a2.offset;
    return r2.getElevation(a2.array[e++], a2.array[e++], a2.array[e] || 0, a2.spatialReference ?? r2.spatialReference, n);
  }
  return r2.getElevation(a2[0], a2[1], a2[2] || 0, r2.spatialReference, n);
}

export {
  r,
  t2 as t,
  a
};
//# sourceMappingURL=chunk-TKHURHLF.js.map
