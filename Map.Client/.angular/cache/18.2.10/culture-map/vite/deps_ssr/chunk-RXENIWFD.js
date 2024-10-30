import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  U
} from "./chunk-XLEC46FY.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/support/requestPresets.js
function t(t2, o) {
  return __async(this, null, function* () {
    const {
      data: r
    } = yield U(t2, {
      responseType: "json",
      query: __spreadProps(__spreadValues({
        f: "json"
      }, o?.customParameters), {
        token: o?.apiKey
      })
    });
    return r;
  });
}

export {
  t
};
//# sourceMappingURL=chunk-RXENIWFD.js.map
