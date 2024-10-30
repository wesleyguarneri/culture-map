import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  M
} from "./chunk-QJ4KFDZU.js";
import {
  m
} from "./chunk-REIMIECM.js";
import {
  c2 as c,
  u
} from "./chunk-AIZ3T7E3.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/support/fetchTile.js
function i(i2, a, l) {
  return __async(this, null, function* () {
    const m2 = i2.layer;
    if (M(m2)) {
      const s = yield m2.fetchTile(a[0], a[1], a[2], l);
      if (c(l)) throw n.getLogger(i2).warnOnce("A call to fetchTile resolved even though the request was aborted. fetchTile should not resolve if options.signal.aborted is true."), u();
      return s;
    }
    let n2 = i2.getTileUrl(a);
    m(m2) && m2.refreshTimestamp && (n2 += `${n2.includes("?") ? "&" : "?"}_ts=${m2.refreshTimestamp}`);
    const f = i2.hasMixedImageFormats ? "image+type" : "image";
    return l.requester.request(n2, f, l);
  });
}

export {
  i
};
//# sourceMappingURL=chunk-K5IZTR4L.js.map
