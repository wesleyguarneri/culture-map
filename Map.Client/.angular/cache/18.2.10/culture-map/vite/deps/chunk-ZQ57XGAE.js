import {
  t
} from "./chunk-UXW277HY.js";
import {
  t as t2
} from "./chunk-OR5F5ACQ.js";
import {
  R
} from "./chunk-Z3GMSC63.js";
import {
  t as t3
} from "./chunk-W2IRSMFY.js";
import {
  p
} from "./chunk-S3IO7V4Q.js";
import {
  d2 as d
} from "./chunk-JJS7PR2U.js";
import {
  I,
  U,
  V
} from "./chunk-SYATLP3H.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/rest/query/operations/query.js
var s = "Layer does not support extent calculation.";
function m(t4, e) {
  if (e && "extent" === t4.type) return `${t4.xmin},${t4.ymin},${t4.xmax},${t4.ymax}`;
  if (e && "point" === t4.type) return `${t4.x},${t4.y}`;
  const n = t4.toJSON();
  return delete n.spatialReference, JSON.stringify(n);
}
function y(t4, e) {
  const n = t4.geometry, i = t4.toJSON();
  delete i.compactGeometryEnabled, delete i.defaultSpatialReferenceEnabled;
  const o = i;
  let u, l, s2;
  if (null != n && (l = n.spatialReference, s2 = d(l), o.geometryType = p(n), o.geometry = m(n, t4.compactGeometryEnabled), o.inSR = s2), i.groupByFieldsForStatistics && (o.groupByFieldsForStatistics = i.groupByFieldsForStatistics.join(",")), i.objectIds && (o.objectIds = i.objectIds.join(",")), i.orderByFields && (o.orderByFields = i.orderByFields.join(",")), !i.outFields || !i.returnDistinctValues && (e?.returnCountOnly || e?.returnExtentOnly || e?.returnIdsOnly) ? delete o.outFields : i.outFields.includes("*") ? o.outFields = "*" : o.outFields = i.outFields.join(","), i.outSR ? (o.outSR = d(i.outSR), u = t4.outSpatialReference) : n && (i.returnGeometry || i.returnCentroid) && (o.outSR = o.inSR, u = l), i.returnGeometry && delete i.returnGeometry, i.outStatistics && (o.outStatistics = JSON.stringify(i.outStatistics)), i.fullText && (o.fullText = JSON.stringify(i.fullText)), i.pixelSize && (o.pixelSize = JSON.stringify(i.pixelSize)), i.quantizationParameters && (t4.defaultSpatialReferenceEnabled && null != l && null != t4.quantizationParameters?.extent && l.equals(t4.quantizationParameters.extent.spatialReference) && delete i.quantizationParameters.extent.spatialReference, o.quantizationParameters = JSON.stringify(i.quantizationParameters)), i.parameterValues && (o.parameterValues = JSON.stringify(i.parameterValues)), i.rangeValues && (o.rangeValues = JSON.stringify(i.rangeValues)), i.dynamicDataSource && (o.layer = JSON.stringify({
    source: i.dynamicDataSource
  }), delete i.dynamicDataSource), i.timeExtent) {
    const t5 = i.timeExtent, {
      start: e2,
      end: n2
    } = t5;
    null == e2 && null == n2 || (o.time = e2 === n2 ? e2 : `${e2 ?? "null"},${n2 ?? "null"}`), delete i.timeExtent;
  }
  return t4.defaultSpatialReferenceEnabled && null != l && null != u && l.equals(u) && (o.defaultSR = o.inSR, delete o.inSR, delete o.outSR), o;
}
function c(t4, e, n, r) {
  return __async(this, null, function* () {
    const i = null != e.timeExtent && e.timeExtent.isEmpty ? {
      data: {
        features: []
      }
    } : yield E(t4, e, "json", r);
    return t3(e, n, i.data), i;
  });
}
function f(t4, e, n, r) {
  return __async(this, null, function* () {
    if (null != e.timeExtent && e.timeExtent.isEmpty) return {
      data: n.createFeatureResult()
    };
    const i = yield d2(t4, e, r), a = i;
    return a.data = t2(i.data, n), a;
  });
}
function d2(t4, e, n) {
  return E(t4, e, "pbf", n);
}
function p2(t4, e, n) {
  return null != e.timeExtent && e.timeExtent.isEmpty ? Promise.resolve({
    data: {
      objectIds: []
    }
  }) : E(t4, e, "json", n, {
    returnIdsOnly: true
  });
}
function S(t4, e, n) {
  return null != e.timeExtent && e.timeExtent.isEmpty ? Promise.resolve({
    data: {
      count: 0
    }
  }) : E(t4, e, "json", n, {
    returnIdsOnly: true,
    returnCountOnly: true
  });
}
function x(t4, e, n) {
  return __async(this, null, function* () {
    if (null != e.timeExtent && e.timeExtent.isEmpty) return {
      data: {
        count: 0,
        extent: null
      }
    };
    const r = yield E(t4, e, "json", n, {
      returnExtentOnly: true,
      returnCountOnly: true
    }), i = r.data;
    if (i.hasOwnProperty("extent")) return r;
    if (i.features) throw new Error(s);
    if (i.hasOwnProperty("count")) throw new Error(s);
    return r;
  });
}
function E(_0, _1, _2) {
  return __async(this, arguments, function* (r, a, u, l = {}, s2 = {}) {
    const m2 = "string" == typeof r ? I(r) : r, c2 = a.geometry ? [a.geometry] : [], f2 = yield R(c2, null, {
      signal: l.signal
    }), d3 = f2?.[0];
    null != d3 && ((a = a.clone()).geometry = d3);
    const p3 = t(__spreadValues(__spreadValues(__spreadProps(__spreadValues({}, m2.query), {
      f: u
    }), s2), y(a, s2)));
    return U(V(m2.path, g(a, s2) ? "query3d" : "query"), __spreadProps(__spreadValues({}, l), {
      responseType: "pbf" === u ? "array-buffer" : "json",
      query: __spreadValues(__spreadValues({}, p3), l.query)
    }));
  });
}
function g(t4, e) {
  return null != t4.formatOf3DObjects && !(e.returnCountOnly || e.returnExtentOnly || e.returnIdsOnly);
}

export {
  c,
  f,
  d2 as d,
  p2 as p,
  S,
  x,
  E
};
//# sourceMappingURL=chunk-ZQ57XGAE.js.map
