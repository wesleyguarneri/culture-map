import {
  n
} from "./chunk-SSMSHZ2C.js";
import {
  e as e2
} from "./chunk-O437BSYE.js";
import {
  e
} from "./chunk-YZNT6QWD.js";

// ../../../node_modules/@arcgis/core/layers/graphics/data/optimizedFeatureQueryEngineAdapter.js
var o = {
  getObjectId: (t) => t.objectId,
  getAttributes: (t) => t.attributes,
  getAttribute: (t, e3) => t.attributes[e3],
  cloneWithGeometry: (t, r) => new e2(r, t.attributes, null, t.objectId),
  getGeometry: (t) => t.geometry,
  getCentroid: (e3, o2) => (null == e3.centroid && (e3.centroid = n(new e(), e3.geometry, o2.hasZ, o2.hasM)), e3.centroid)
};

export {
  o
};
//# sourceMappingURL=chunk-6UYQMUGI.js.map
