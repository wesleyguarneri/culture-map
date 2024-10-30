import {
  a
} from "./chunk-GJ7RIUPZ.js";
import {
  f,
  i,
  s
} from "./chunk-YA5CTHMT.js";
import {
  U
} from "./chunk-SYATLP3H.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/rest/networks/trace.js
function s2(o, s3, n2) {
  return __async(this, null, function* () {
    const i2 = f(o), g = s3.toJSON();
    g.traceLocations = JSON.stringify(s3.traceLocations), s3.resultTypes && (g.resultTypes = JSON.stringify(s3.resultTypes));
    const y = i(i2.query, __spreadValues({
      query: s(__spreadProps(__spreadValues({}, g), {
        f: "json"
      }))
    }, n2)), u = `${i2.path}/trace`;
    return U(u, y).then((e) => c(e, s3.outSpatialReference));
  });
}
function n(o, s3, n2) {
  return __async(this, null, function* () {
    const c2 = f(o), i2 = s3.toJSON();
    i2.traceLocations = JSON.stringify(s3.traceLocations), s3.resultTypes && (i2.resultTypes = JSON.stringify(s3.resultTypes));
    const g = i(c2.query, __spreadValues({
      query: s(__spreadProps(__spreadValues({}, i2), {
        async: true,
        f: "json"
      }))
    }, n2)), y = `${c2.path}/trace`, {
      data: u
    } = yield U(y, g);
    return u.statusUrl;
  });
}
function c(e, t) {
  const {
    data: r
  } = e, a2 = a.fromJSON(r.traceResults);
  return a2.aggregatedGeometry && t && (a2.aggregatedGeometry.line && (a2.aggregatedGeometry.line.spatialReference = t.clone()), a2.aggregatedGeometry.multipoint && (a2.aggregatedGeometry.multipoint.spatialReference = t.clone()), a2.aggregatedGeometry.polygon && (a2.aggregatedGeometry.polygon.spatialReference = t.clone())), a2;
}

export {
  s2 as s,
  n
};
//# sourceMappingURL=chunk-S3GWRL6P.js.map
