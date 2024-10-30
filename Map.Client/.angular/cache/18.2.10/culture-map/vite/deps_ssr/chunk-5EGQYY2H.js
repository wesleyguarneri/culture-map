import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/core/sql.js
function e(e2, n2) {
  return __async(this, null, function* () {
    const {
      WhereClause: r
    } = yield import("./WhereClause-OTQDW6MZ.js");
    return r.create(e2, n2);
  });
}
function n(e2, n2) {
  return "1=1" === e2 ? n2 ?? e2 : "1=1" === n2 ? e2 ?? n2 : null != e2 && "" !== e2 ? null != n2 && "" !== n2 ? `(${e2}) AND (${n2})` : e2 : n2;
}

export {
  e,
  n
};
//# sourceMappingURL=chunk-5EGQYY2H.js.map
