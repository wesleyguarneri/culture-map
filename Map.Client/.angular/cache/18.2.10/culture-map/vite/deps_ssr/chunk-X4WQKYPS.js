import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c2 as c
} from "./chunk-XLEC46FY.js";
import {
  s,
  s2
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/webdoc/support/saveAPIKeyUtils.js
function i(i2) {
  if (s.apiKey && c(i2.portal.url)) throw new s2("save-api-key-utils:api-key-not-supported", `Saving is not supported on ${i2.portal.url} when using an api key`);
}

export {
  i
};
//# sourceMappingURL=chunk-X4WQKYPS.js.map
