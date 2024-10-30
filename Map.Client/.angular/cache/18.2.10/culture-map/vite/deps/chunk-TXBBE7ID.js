import {
  S,
  p
} from "./chunk-ZQ57XGAE.js";
import {
  f
} from "./chunk-YA5CTHMT.js";
import {
  b
} from "./chunk-TRSGUVSM.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=chunk-TXBBE7ID.js.map
