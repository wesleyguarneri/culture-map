import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n,
  p
} from "./chunk-GJ3FZNZ2.js";
import {
  C
} from "./chunk-7QV7DHWN.js";
import {
  s,
  s2
} from "./chunk-6JFGZTLU.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/portal/support/geometryServiceUtils.js
function n2(o = null, i) {
  return __async(this, null, function* () {
    if (s.geometryServiceUrl) return s.geometryServiceUrl;
    if (!o) throw new s2("internal:geometry-service-url-not-configured");
    let n3;
    n3 = "portal" in o ? o.portal || C.getDefault() : o, yield n3.load({
      signal: i
    });
    const a2 = n3.helperServices?.geometry?.url;
    if (!a2) throw new s2("internal:geometry-service-url-not-configured");
    return a2;
  });
}
function a(r, t, a2 = null, l) {
  return __async(this, null, function* () {
    const c = yield n2(a2, l), s3 = new p({
      geometries: [r],
      outSpatialReference: t
    }), m = yield n(c, s3, {
      signal: l
    });
    if (m && Array.isArray(m) && 1 === m.length) return m[0];
    throw new s2("internal:geometry-service-projection-failed");
  });
}

export {
  n2 as n,
  a
};
//# sourceMappingURL=chunk-N7GIZJ5Z.js.map
