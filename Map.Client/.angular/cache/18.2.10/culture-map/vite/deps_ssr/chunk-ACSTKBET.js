import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s as s2
} from "./chunk-AIZ3T7E3.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/support/imageBitmapUtils.js
function t(t2, o2, a) {
  return __async(this, null, function* () {
    let c;
    try {
      c = yield createImageBitmap(t2);
    } catch (l) {
      throw new s("request:server", `Unable to load ${o2}`, {
        url: o2,
        error: l
      });
    }
    return s2(a), c;
  });
}
function o(t2, o2, a, c, l) {
  return __async(this, null, function* () {
    let n;
    try {
      n = yield createImageBitmap(t2);
    } catch (i) {
      throw new s("request:server", `Unable to load tile ${o2}/${a}/${c}`, {
        error: i,
        level: o2,
        row: a,
        col: c
      });
    }
    return s2(l), n;
  });
}

export {
  t,
  o
};
//# sourceMappingURL=chunk-ACSTKBET.js.map
