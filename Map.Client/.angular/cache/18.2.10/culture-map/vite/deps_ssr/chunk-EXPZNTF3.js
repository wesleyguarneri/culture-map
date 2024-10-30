import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o
} from "./chunk-34V2CLL5.js";

// ../../../node_modules/@arcgis/core/rest/query/operations/queryZScale.js
function t(t2, o2, r) {
  if (!r?.features || !r.hasZ) return;
  const f = o(r.geometryType, o2, t2.outSpatialReference);
  if (null != f) for (const e of r.features) f(e.geometry);
}

export {
  t
};
//# sourceMappingURL=chunk-EXPZNTF3.js.map
