import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  V
} from "./chunk-U3RHUXYK.js";

// ../../../node_modules/@arcgis/core/core/collectionUtils.js
function n(n2, t2, i = V) {
  return t2 || (t2 = new i()), t2 === n2 || (t2.removeAll(), e(n2) ? t2.addMany(n2) : n2 && t2.add(n2)), t2;
}
function t(r) {
  return r;
}
function e(r) {
  return r && (Array.isArray(r) || "items" in r && Array.isArray(r.items));
}

export {
  n,
  t
};
//# sourceMappingURL=chunk-NXXQ35YM.js.map