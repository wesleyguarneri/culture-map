import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a
} from "./chunk-2L7HC722.js";
import {
  B,
  O
} from "./chunk-7V4JSBFA.js";

// ../../../node_modules/@arcgis/core/layers/support/editableLayers.js
function n(t) {
  return "object" == typeof t && null != t && "loaded" in t && true === t.loaded && "type" in t;
}
function e(e2) {
  return !(!n(e2) || !O(e2)?.operations?.supportsEditing || "editingEnabled" in e2 && !B(e2) || a(e2));
}

export {
  e
};
//# sourceMappingURL=chunk-H5Z6ZNKP.js.map
