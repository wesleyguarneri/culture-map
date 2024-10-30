import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  b
} from "./chunk-ORYC4PVJ.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/support/featureQueryAll.js
function r(e, r2, a2) {
  return __async(this, null, function* () {
    r2 = r2.clone(), e.capabilities.query.supportsMaxRecordCountFactor && (r2.maxRecordCountFactor = u(e));
    const n = t(e), o = e.capabilities.query.supportsPagination;
    r2.start = 0, r2.num = n;
    let i = null;
    for (; ; ) {
      const t2 = yield e.source.queryFeaturesJSON(r2, a2);
      if (null == i ? i = t2 : i.features = i.features.concat(t2.features), i.exceededTransferLimit = t2.exceededTransferLimit, !o || !t2.exceededTransferLimit) break;
      r2.start += n;
    }
    return i;
  });
}
function t(e) {
  return u(e) * a(e);
}
function a(e) {
  return e.capabilities.query.maxRecordCount || 2e3;
}
function u(r2) {
  return r2.capabilities.query.supportsMaxRecordCountFactor ? b.MAX_MAX_RECORD_COUNT_FACTOR : 1;
}

export {
  r,
  t
};
//# sourceMappingURL=chunk-3FR2T2I2.js.map
