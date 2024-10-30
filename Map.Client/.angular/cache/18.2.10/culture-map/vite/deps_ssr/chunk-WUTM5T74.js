import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  U
} from "./chunk-XLEC46FY.js";
import {
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/support/requestImageUtils.js
function t(t2, r) {
  return __async(this, null, function* () {
    const {
      data: a
    } = yield U(t2, __spreadValues({
      responseType: "image"
    }, r));
    return a;
  });
}

export {
  t
};
//# sourceMappingURL=chunk-WUTM5T74.js.map
