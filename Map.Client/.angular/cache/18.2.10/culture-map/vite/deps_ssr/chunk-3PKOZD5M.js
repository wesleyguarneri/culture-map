import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  debounce,
  isObject
} from "./chunk-6J7SHXU3.js";

// ../../../node_modules/@esri/calcite-components/dist/components/throttle.js
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}

export {
  throttle
};
/*! Bundled license information:

@esri/calcite-components/dist/components/throttle.js:
  (*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
   * v2.13.2
   *)
*/
//# sourceMappingURL=chunk-3PKOZD5M.js.map
