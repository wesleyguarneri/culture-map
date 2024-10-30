import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i,
  o,
  o2
} from "./chunk-K6JW77RY.js";

// ../../../node_modules/@arcgis/core/views/3d/terrain/Intersector.js
function n(r) {
  return o2(r) && r.intersector === i.TERRAIN && !!r.target;
}
var i2 = class extends o {
  constructor(e, r, t) {
    super(e, r), this.triangleNr = t;
  }
};
function o3(r) {
  return o2(r) && r.intersector === i.OVERLAY && !!r.target;
}

export {
  n,
  i2 as i,
  o3 as o
};
//# sourceMappingURL=chunk-BKOZEXTL.js.map
