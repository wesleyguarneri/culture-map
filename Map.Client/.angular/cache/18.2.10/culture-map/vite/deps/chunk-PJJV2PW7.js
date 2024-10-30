import {
  M
} from "./chunk-XVR4FEAF.js";
import {
  m
} from "./chunk-DOK4SACJ.js";
import {
  c2 as c,
  u
} from "./chunk-HJY2YILU.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=chunk-PJJV2PW7.js.map
