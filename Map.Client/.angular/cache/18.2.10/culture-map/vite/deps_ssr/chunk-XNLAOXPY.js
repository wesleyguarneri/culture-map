import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s2 as s
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/webdoc/support/opacityUtils.js
function n(n2) {
  const r2 = s(100 * (1 - n2));
  return Math.max(0, Math.min(r2, 100));
}
function r(t) {
  const n2 = 1 - t / 100;
  return Math.max(0, Math.min(n2, 1));
}

export {
  n,
  r
};
//# sourceMappingURL=chunk-XNLAOXPY.js.map
