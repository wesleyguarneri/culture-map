import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i,
  o,
  o2
} from "./chunk-K6JW77RY.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/Intersector.js
var s = class extends o {
  constructor(t, r, e, s2, i3, o3) {
    super(t, r), this.layerUid = t, this.graphicUid = r, this.geometryId = e, this.triangleNr = s2, this.baseBoundingSphere = i3, this.numLodLevels = o3;
  }
};
function i2(r) {
  return o2(r) && r.intersector === i.LOD && !!r.target;
}

export {
  s,
  i2 as i
};
//# sourceMappingURL=chunk-PDKNFFCG.js.map
