import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  S,
  p
} from "./chunk-BY3XBMAH.js";
import {
  f
} from "./chunk-FDI2X6GO.js";
import {
  b
} from "./chunk-ORYC4PVJ.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/rest/query/executeForCount.js
function s(s3, i, m) {
  return __async(this, null, function* () {
    const n = f(s3), {
      data: p2
    } = yield S(n, b.from(i), m);
    return p2.count;
  });
}

// ../../../node_modules/@arcgis/core/rest/query/executeForIds.js
function s2(s3, i, m) {
  return __async(this, null, function* () {
    const p2 = f(s3), {
      data: a
    } = yield p(p2, b.from(i), m);
    return a.objectIds;
  });
}

export {
  s,
  s2
};
//# sourceMappingURL=chunk-FN552AT6.js.map
