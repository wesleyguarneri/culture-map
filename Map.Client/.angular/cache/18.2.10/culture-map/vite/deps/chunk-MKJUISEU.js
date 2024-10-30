import {
  U
} from "./chunk-SYATLP3H.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=chunk-MKJUISEU.js.map
