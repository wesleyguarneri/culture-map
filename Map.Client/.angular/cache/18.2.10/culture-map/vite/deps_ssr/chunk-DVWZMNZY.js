import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a
} from "./chunk-INUNNFZT.js";
import {
  H
} from "./chunk-LM3JDV4W.js";

// ../../../node_modules/@arcgis/core/views/3d/analysis/support/projectionUtils.js
function r(r2, t2, i, n = false) {
  const l = H(r2, t2);
  return null == l ? null : (l.hasZ && !n || null == i || (l.z = a(i, l) ?? 0), l);
}
function t(o, e, r2) {
  r2.warnOnce(`Failed to project analysis geometry (id: '${o.id}'), projection from spatial reference (wkid: '${e.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`);
}

export {
  r,
  t
};
//# sourceMappingURL=chunk-DVWZMNZY.js.map
