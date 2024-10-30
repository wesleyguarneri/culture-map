import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  U,
  V
} from "./chunk-XLEC46FY.js";
import {
  n2 as n,
  s,
  s2
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/assets.js
function i(s3, r) {
  return U(n2(s3), r);
}
function n2(t) {
  if (!s.assetsPath) throw n.getLogger("esri.assets").errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"), new s2("assets:path-not-set", "config.assetsPath is not set");
  return V(s.assetsPath, t);
}

export {
  i,
  n2 as n
};
//# sourceMappingURL=chunk-GS7Y3YOG.js.map
