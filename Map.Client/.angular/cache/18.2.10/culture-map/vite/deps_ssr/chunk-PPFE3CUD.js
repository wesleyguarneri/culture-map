import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  l
} from "./chunk-GNCXYHNE.js";
import {
  S2 as S
} from "./chunk-6SSA7P3A.js";

// ../../../node_modules/@arcgis/core/views/support/spatialReferenceSupport.js
function r(r2, S2) {
  return null != r2 && (null == S2 || (S2 === l.Local ? !r2.isGeographic || r2.isWGS84 || r2.wkid === S.CGCS2000 : r2.isWebMercator || r2.isWGS84 || r2.wkid === S.CGCS2000 || r2.wkid === S.GCSMARS2000 || r2.wkid === S.GCSMARS2000_SPHERE || r2.wkid === S.GCSMOON2000));
}

export {
  r
};
//# sourceMappingURL=chunk-PPFE3CUD.js.map
