import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e2,
  t as t2
} from "./chunk-VY63YX6I.js";
import {
  C as C3
} from "./chunk-EXKCGLRO.js";
import {
  I,
  P as P2,
  S,
  a as a5,
  b,
  g,
  h as h2,
  j,
  j2,
  n,
  t as t3,
  v as v4,
  x,
  y as y3
} from "./chunk-NE35ZNG6.js";
import {
  t
} from "./chunk-TFW6WS6R.js";
import {
  ot
} from "./chunk-X5QZGB37.js";
import {
  R
} from "./chunk-T5C2TZNO.js";
import {
  Z
} from "./chunk-5R3HARKC.js";
import {
  e
} from "./chunk-BKSTWG4S.js";
import {
  h,
  r as r2
} from "./chunk-FSG7HOZQ.js";
import {
  i
} from "./chunk-Q5TIVVER.js";
import {
  C,
  O as O2,
  i as i2,
  o
} from "./chunk-VOOO6FU5.js";
import {
  w
} from "./chunk-NU4K6CTR.js";
import {
  $,
  B,
  C as C2,
  E,
  P,
  T,
  U,
  c,
  d,
  f as f2,
  k,
  p,
  v as v3
} from "./chunk-CRYYUS4E.js";
import {
  s as s3
} from "./chunk-FP37456K.js";
import {
  Y
} from "./chunk-LM3JDV4W.js";
import {
  Fe,
  Ie,
  be,
  ge,
  ye
} from "./chunk-I2TVVMQ6.js";
import {
  i as i3
} from "./chunk-JKPUNUQA.js";
import {
  f,
  m,
  y as y2
} from "./chunk-4DSGTDZJ.js";
import {
  a as a4,
  l as l3,
  l2 as l4,
  r,
  v as v2
} from "./chunk-MRPCXIVS.js";
import {
  a as a3,
  u as u2
} from "./chunk-GCVQXAS4.js";
import {
  O
} from "./chunk-CBOFHWPI.js";
import {
  G,
  N,
  W2 as W
} from "./chunk-6SSA7P3A.js";
import {
  a as a2
} from "./chunk-4AZPIP7K.js";
import {
  l as l2,
  s as s2
} from "./chunk-AIZ3T7E3.js";
import {
  l,
  u
} from "./chunk-6WGE3IUL.js";
import {
  a,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  v,
  y
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/core/sql/WhereClauseCache.js
var r3 = class {
  constructor(e3, r4) {
    this._cache = new e(e3), this._invalidCache = new e(r4);
  }
  get(t5, r4) {
    const i4 = `${r4.uid}:${t5}`, c5 = this._cache.get(i4);
    if (c5) return c5;
    if (null != this._invalidCache.get(i4)) return null;
    try {
      const c6 = O.create(t5, r4);
      return this._cache.put(i4, c6), c6;
    } catch (n3) {
      return this._invalidCache.put(i4, n3), null;
    }
  }
  getError(t5, e3) {
    const r4 = `${e3.uid}:${t5}`;
    return this._invalidCache.get(r4) ?? null;
  }
};

// ../../../node_modules/@arcgis/core/layers/graphics/data/attributeSupport.js
var s4 = new r3(50, 500);
var t4 = "unsupported-query";
var n2 = " as ";
var o2 = /* @__PURE__ */ new Set(["esriFieldTypeOID", "esriFieldTypeSmallInteger", "esriFieldTypeBigInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeLong"]);
var a6 = /* @__PURE__ */ new Set(["esriFieldTypeDate", "esriFieldTypeDateOnly", "esriFieldTypeTimeOnly", "esriFieldTypeTimestampOffset"]);
var l5 = /* @__PURE__ */ new Set(["esriFieldTypeString", "esriFieldTypeGUID", "esriFieldTypeGlobalID", ...o2, ...a6]);
function d2(i4, r4, n3 = {}) {
  const o3 = c2(r4, i4);
  if (!o3) {
    const n4 = s4.getError(r4, i4);
    throw new s(t4, "invalid SQL expression", {
      expression: r4,
      error: n4
    });
  }
  const a7 = n3.expressionName || "expression";
  if (n3.validateStandardized && !o3.isStandardized) throw new s(t4, `${a7} is not standard`, {
    expression: r4
  });
  if (n3.validateAggregate && !o3.isAggregate) throw new s(t4, `${a7} does not contain a valid aggregate function`, {
    expression: r4
  });
  return o3.fieldNames;
}
function p2(e3, i4, r4, s5) {
  if (!r4) return true;
  const t5 = "where clause";
  return g2(e3, i4, d2(e3, r4, {
    validateStandardized: true,
    expressionName: t5
  }), {
    expressionName: t5,
    query: s5
  }), true;
}
function f3(i4, r4, s5, n3, o3) {
  if (!s5) return true;
  const a7 = "having clause", l6 = d2(i4, s5, {
    validateAggregate: true,
    expressionName: a7
  });
  g2(i4, r4, l6, {
    expressionName: a7,
    query: o3
  });
  const p4 = c2(s5, i4), f5 = p4?.getExpressions().every((e3) => {
    const {
      aggregateType: r5,
      field: s6
    } = e3, t5 = i4.get(s6)?.name;
    return n3.some((e4) => {
      const {
        onStatisticField: s7,
        statisticType: n4
      } = e4, o4 = i4.get(s7)?.name;
      return o4 === t5 && n4.toLowerCase().trim() === r5;
    });
  });
  if (!f5) throw new s(t4, "expressions in having clause should also exist in outStatistics", {
    having: s5
  });
  return true;
}
function c2(e3, i4) {
  return e3 ? s4.get(e3, i4) : null;
}
function u3(e3) {
  return /\((.*?)\)/.test(e3) ? e3 : e3.split(n2)[0];
}
function y4(e3) {
  return e3.split(n2)[1];
}
function g2(i4, r4, s5, n3 = {}) {
  const o3 = /* @__PURE__ */ new Map();
  if (m2(o3, i4, r4, n3.allowedFieldTypes ?? l5, s5), o3.size) {
    const i5 = n3.expressionName ?? "expression";
    throw new s(t4, `${i5} contains invalid or missing fields`, {
      errors: Array.from(o3.values()),
      query: n3.query
    });
  }
}
function m2(e3, i4, r4, s5, t5) {
  const n3 = t5.includes("*") ? [...r4, ...t5.filter((e4) => "*" !== e4)] : t5;
  for (const a7 of n3) {
    if (i4.get(a7)) T2(e3, i4, r4, s5, a7);
    else try {
      const t6 = d2(i4, u3(a7), {
        validateStandardized: true
      });
      for (const n4 of t6) T2(e3, i4, r4, s5, n4);
    } catch (o3) {
      e3.set(a7, {
        type: "expression-error",
        expression: a7,
        error: o3
      });
    }
  }
}
function T2(e3, i4, s5, t5, n3) {
  const o3 = i4.get(n3);
  o3 ? s5.has(o3.name) ? "all" !== t5 && false === t5?.has(o3.type) && e3.set(n3, {
    type: "invalid-type",
    fieldName: o3.name,
    fieldType: i.fromJSON(o3.type),
    allowedFieldTypes: Array.from(t5, (e4) => i.fromJSON(e4))
  }) : e3.set(n3, {
    type: "missing-field",
    fieldName: o3.name
  }) : e3.set(n3, {
    type: "invalid-field",
    fieldName: n3
  });
}

// ../../../node_modules/@arcgis/core/layers/graphics/data/AttributesBuilder.js
var c3 = class {
  constructor(s5, a7, l6) {
    this._fieldDataCache = /* @__PURE__ */ new Map(), this._returnDistinctMap = /* @__PURE__ */ new Map(), this.returnDistinctValues = s5.returnDistinctValues ?? false, this.fieldsIndex = l6, this.featureAdapter = a7;
    const r4 = s5.outFields;
    if (r4 && !r4.includes("*")) {
      this.outFields = r4;
      let s6 = 0;
      for (const a8 of r4) {
        const r5 = u3(a8), n3 = this.fieldsIndex.get(r5), u5 = n3 ? null : c2(r5, l6), o3 = n3 ? n3.name : y4(a8) || "FIELD_EXP_" + s6++;
        this._fieldDataCache.set(a8, {
          alias: o3,
          clause: u5
        });
      }
    }
  }
  countDistinctValues(t5) {
    return this.returnDistinctValues ? (t5.forEach((t6) => this.getAttributes(t6)), this._returnDistinctMap.size) : t5.length;
  }
  getAttributes(t5) {
    const e3 = this._processAttributesForOutFields(t5);
    return this._processAttributesForDistinctValues(e3);
  }
  getFieldValue(t5, i4, s5) {
    const a7 = s5 ? s5.name : i4;
    let l6 = null;
    return this._fieldDataCache.has(a7) ? l6 = this._fieldDataCache.get(a7)?.clause : s5 || (l6 = c2(i4, this.fieldsIndex), this._fieldDataCache.set(a7, {
      alias: a7,
      clause: l6
    })), s5 ? this.featureAdapter.getAttribute(t5, a7) : l6?.calculateValue(t5, this.featureAdapter);
  }
  getDataValues(t5, e3, i4 = true) {
    const s5 = e3.normalizationType, d4 = e3.normalizationTotal, c5 = this.fieldsIndex.get(e3.field), h4 = Fe(c5) || Ie(c5), f5 = be(c5);
    return t5.map((t6) => {
      let a7 = e3.field && this.getFieldValue(t6, e3.field, this.fieldsIndex.get(e3.field));
      if (e3.field2 ? (a7 = `${c(a7)}${e3.fieldDelimiter}${c(this.getFieldValue(t6, e3.field2, this.fieldsIndex.get(e3.field2)))}`, e3.field3 && (a7 = `${a7}${e3.fieldDelimiter}${c(this.getFieldValue(t6, e3.field3, this.fieldsIndex.get(e3.field3)))}`)) : "string" == typeof a7 && i4 && (h4 ? a7 = a7 ? new Date(a7).getTime() : null : f5 && (a7 = a7 ? w(a7) : null)), s5 && Number.isFinite(a7)) {
        const i5 = "field" === s5 && e3.normalizationField ? this.getFieldValue(t6, e3.normalizationField, this.fieldsIndex.get(e3.normalizationField)) : null;
        a7 = B(a7, s5, i5, d4);
      }
      return a7;
    });
  }
  getExpressionValues(t5, e3, i4, a7, l6) {
    return __async(this, null, function* () {
      const {
        arcadeUtils: r4
      } = yield i3(), n3 = r4.hasGeometryOperations(e3);
      n3 && (yield r4.enableGeometryOperations());
      const u5 = r4.createFunction(e3), o3 = r4.getViewInfo(i4), c5 = {
        fields: this.fieldsIndex.fields
      };
      return t5.map((t6) => {
        const e4 = {
          attributes: this.featureAdapter.getAttributes(t6),
          layer: c5,
          geometry: n3 ? __spreadProps(__spreadValues({}, a5(a7.geometryType, a7.hasZ, a7.hasM, this.featureAdapter.getGeometry(t6))), {
            spatialReference: i4?.spatialReference
          }) : null
        }, d4 = r4.createExecContext(e4, o3, l6);
        return r4.executeFunction(u5, d4);
      });
    });
  }
  validateItem(t5, i4) {
    return this._fieldDataCache.has(i4) || this._fieldDataCache.set(i4, {
      alias: i4,
      clause: c2(i4, this.fieldsIndex)
    }), this._fieldDataCache.get(i4)?.clause?.testFeature(t5, this.featureAdapter) ?? false;
  }
  validateItems(t5, i4) {
    return this._fieldDataCache.has(i4) || this._fieldDataCache.set(i4, {
      alias: i4,
      clause: c2(i4, this.fieldsIndex)
    }), this._fieldDataCache.get(i4)?.clause?.testSet(t5, this.featureAdapter) ?? false;
  }
  _processAttributesForOutFields(t5) {
    const e3 = this.outFields;
    if (!e3?.length) return this.featureAdapter.getAttributes(t5);
    const i4 = {};
    for (const s5 of e3) {
      const {
        alias: e4,
        clause: a7
      } = this._fieldDataCache.get(s5);
      i4[e4] = a7 ? a7.calculateValue(t5, this.featureAdapter) : this.featureAdapter.getAttribute(t5, e4);
    }
    return i4;
  }
  _processAttributesForDistinctValues(t5) {
    if (null == t5 || !this.returnDistinctValues) return t5;
    const e3 = this.outFields, i4 = [];
    if (e3) for (const l6 of e3) {
      const {
        alias: e4
      } = this._fieldDataCache.get(l6);
      i4.push(t5[e4]);
    }
    else for (const l6 in t5) i4.push(t5[l6]);
    const s5 = `${(e3 || ["*"]).join(",")}=${i4.join(",")}`;
    let a7 = this._returnDistinctMap.get(s5) || 0;
    return this._returnDistinctMap.set(s5, ++a7), a7 > 1 ? null : t5;
  }
};

// ../../../node_modules/@arcgis/core/layers/graphics/data/QueryEngineResult.js
var q = class {
  constructor(e3, t5, s5) {
    this.items = e3, this.query = t5, this.geometryType = s5.geometryType, this.hasM = s5.hasM, this.hasZ = s5.hasZ, this.fieldsIndex = s5.fieldsIndex, this.objectIdField = s5.objectIdField, this.spatialReference = s5.spatialReference, this.featureAdapter = s5.featureAdapter;
  }
  get size() {
    return this.items.length;
  }
  createQueryResponseForCount() {
    const e3 = new c3(this.query, this.featureAdapter, this.fieldsIndex);
    if (!this.query.outStatistics) return e3.countDistinctValues(this.items);
    const {
      groupByFieldsForStatistics: t5,
      having: s5,
      outStatistics: i4
    } = this.query, a7 = t5?.length;
    if (!!!a7) return 1;
    const r4 = /* @__PURE__ */ new Map(), n3 = /* @__PURE__ */ new Map(), o3 = /* @__PURE__ */ new Set();
    for (const l6 of i4) {
      const {
        statisticType: i5
      } = l6, a8 = "exceedslimit" !== i5 ? l6.onStatisticField : void 0;
      if (!n3.has(a8)) {
        const s6 = [];
        for (const i6 of t5) {
          const t6 = this._getAttributeValues(e3, i6, r4);
          s6.push(t6);
        }
        n3.set(a8, this._calculateUniqueValues(s6, e3.returnDistinctValues));
      }
      const u5 = n3.get(a8);
      for (const t6 in u5) {
        const {
          data: i6,
          items: a9
        } = u5[t6], r5 = i6.join(",");
        s5 && !e3.validateItems(a9, s5) || o3.add(r5);
      }
    }
    return o3.size;
  }
  createQueryResponse() {
    return __async(this, null, function* () {
      let e3;
      if (this.query.outStatistics) {
        e3 = this.query.outStatistics.some((e4) => "exceedslimit" === e4.statisticType) ? this._createExceedsLimitQueryResponse(this.query) : yield this._createStatisticsQueryResponse(this.query);
      } else e3 = this._createFeatureQueryResponse(this.query);
      if (this.query.returnQueryGeometry) {
        const t5 = this.query.geometry;
        N(this.query.outSR) && !G(t5.spatialReference, this.query.outSR) ? e3.queryGeometry = h2(__spreadValues({
          spatialReference: this.query.outSR
        }, j(t5, t5.spatialReference, this.query.outSR))) : e3.queryGeometry = h2(__spreadValues({
          spatialReference: this.query.outSR
        }, t5));
      }
      return e3;
    });
  }
  createSnappingResponse(e3, t5) {
    const s5 = this.featureAdapter, i4 = C4(this.hasZ, this.hasM), {
      point: a7,
      mode: r4
    } = e3, n3 = "number" == typeof e3.distance ? e3.distance : e3.distance.x, o3 = "number" == typeof e3.distance ? e3.distance : e3.distance.y, l6 = {
      candidates: []
    }, u5 = "esriGeometryPolygon" === this.geometryType, c5 = this._getPointCreator(r4, this.spatialReference, t5), d4 = new G2(null, 0), m4 = new G2(null, 0), f5 = {
      x: 0,
      y: 0,
      z: 0
    };
    for (const p4 of this.items) {
      const t6 = s5.getGeometry(p4);
      if (null == t6) continue;
      const {
        coords: r5,
        lengths: y6
      } = t6;
      if (d4.coords = r5, m4.coords = r5, e3.returnEdge) {
        let e4 = 0;
        for (let t7 = 0; t7 < y6.length; t7++) {
          const r6 = y6[t7];
          for (let t8 = 0; t8 < r6; t8++, e4 += i4) {
            const u6 = d4;
            if (u6.coordsIndex = e4, t8 !== r6 - 1) {
              const t9 = m4;
              t9.coordsIndex = e4 + i4;
              const r7 = f5;
              N2(f5, a7, u6, t9);
              const d5 = (a7.x - r7.x) / n3, g3 = (a7.y - r7.y) / o3, y7 = d5 * d5 + g3 * g3;
              y7 <= 1 && l6.candidates.push(e2(s5.getObjectId(p4), c5(r7), Math.sqrt(y7), c5(u6), c5(t9)));
            }
          }
        }
      }
      if ("none" !== e3.vertexMode) {
        const t7 = u5 ? r5.length - i4 : r5.length;
        if ("all" === e3.vertexMode) for (let e4 = 0; e4 < t7; e4 += i4) {
          const t8 = d4;
          t8.coordsIndex = e4;
          const i5 = (a7.x - t8.x) / n3, r6 = (a7.y - t8.y) / o3, u6 = i5 * i5 + r6 * r6;
          u6 <= 1 && l6.candidates.push(t2(s5.getObjectId(p4), c5(t8), Math.sqrt(u6)));
        }
        else if ("ends" === e3.vertexMode) {
          const e4 = [0];
          u5 || e4.push(r5.length - i4);
          for (const t8 of e4) {
            const e5 = d4;
            e5.coordsIndex = t8;
            const i5 = (a7.x - e5.x) / n3, r6 = (a7.y - e5.y) / o3, u6 = i5 * i5 + r6 * r6;
            u6 <= 1 && l6.candidates.push(t2(s5.getObjectId(p4), c5(e5), Math.sqrt(u6)));
          }
        }
      }
    }
    return l6.candidates.sort((e4, t6) => e4.distance - t6.distance), l6;
  }
  _getPointCreator(e3, t5, s5) {
    const i4 = null == s5 || G(t5, s5) ? (e4) => e4 : (e4) => j(e4, t5, s5), {
      hasZ: a7
    } = this, r4 = 0;
    return "3d" === e3 ? a7 ? ({
      x: e4,
      y: t6,
      z: s6
    }) => i4({
      x: e4,
      y: t6,
      z: s6
    }) : ({
      x: e4,
      y: t6
    }) => i4({
      x: e4,
      y: t6,
      z: r4
    }) : ({
      x: e4,
      y: t6
    }) => i4({
      x: e4,
      y: t6
    });
  }
  createSummaryStatisticsResponse(e3) {
    return __async(this, null, function* () {
      const {
        field: t5,
        valueExpression: s5,
        normalizationField: i4,
        normalizationType: a7,
        normalizationTotal: r4,
        minValue: n3,
        maxValue: o3,
        scale: l6,
        timeZone: u5
      } = e3, c5 = this.fieldsIndex.get(t5), d4 = ge(c5) || Fe(c5) || Ie(c5), m4 = yield this._getDataValues({
        field: t5,
        valueExpression: s5,
        normalizationField: i4,
        normalizationType: a7,
        normalizationTotal: r4,
        scale: l6,
        timeZone: u5
      }), h4 = f2({
        normalizationType: a7,
        normalizationField: i4,
        minValue: n3,
        maxValue: o3
      }), g3 = {
        value: 0.5,
        fieldType: c5?.type
      }, I2 = ye(c5) ? d({
        values: m4,
        supportsNullCount: h4,
        percentileParams: g3
      }) : p({
        values: m4,
        minValue: n3,
        maxValue: o3,
        useSampleStdDev: !a7,
        supportsNullCount: h4,
        percentileParams: g3
      });
      return C2(I2, d4);
    });
  }
  createUniqueValuesResponse(e3) {
    return __async(this, null, function* () {
      const {
        field: t5,
        valueExpression: s5,
        domains: i4,
        returnAllCodedValues: a7,
        scale: r4,
        timeZone: n3
      } = e3, o3 = yield this._getDataValues({
        field: t5,
        field2: e3.field2,
        field3: e3.field3,
        fieldDelimiter: e3.fieldDelimiter,
        valueExpression: s5,
        scale: r4,
        timeZone: n3
      }, false), l6 = k(o3);
      return $(l6, i4, a7, e3.fieldDelimiter);
    });
  }
  createClassBreaksResponse(e3) {
    return __async(this, null, function* () {
      const {
        field: t5,
        valueExpression: s5,
        normalizationField: i4,
        normalizationType: a7,
        normalizationTotal: r4,
        classificationMethod: n3,
        standardDeviationInterval: o3,
        minValue: l6,
        maxValue: u5,
        numClasses: c5,
        scale: d4,
        timeZone: m4
      } = e3, h4 = yield this._getDataValues({
        field: t5,
        valueExpression: s5,
        normalizationField: i4,
        normalizationType: a7,
        normalizationTotal: r4,
        scale: d4,
        timeZone: m4
      }), g3 = E(h4, {
        field: t5,
        normalizationField: i4,
        normalizationType: a7,
        normalizationTotal: r4,
        classificationMethod: n3,
        standardDeviationInterval: o3,
        minValue: l6,
        maxValue: u5,
        numClasses: c5
      });
      return P(g3, n3);
    });
  }
  createHistogramResponse(e3) {
    return __async(this, null, function* () {
      const {
        field: t5,
        valueExpression: s5,
        normalizationField: i4,
        normalizationType: a7,
        normalizationTotal: r4,
        classificationMethod: n3,
        standardDeviationInterval: o3,
        minValue: l6,
        maxValue: u5,
        numBins: c5,
        scale: d4,
        timeZone: m4
      } = e3, h4 = yield this._getDataValues({
        field: t5,
        valueExpression: s5,
        normalizationField: i4,
        normalizationType: a7,
        normalizationTotal: r4,
        scale: d4,
        timeZone: m4
      });
      return U(h4, {
        field: t5,
        normalizationField: i4,
        normalizationType: a7,
        normalizationTotal: r4,
        classificationMethod: n3,
        standardDeviationInterval: o3,
        minValue: l6,
        maxValue: u5,
        numBins: c5
      });
    });
  }
  _sortFeatures(e3, t5, s5) {
    if (e3.length > 1 && t5?.length) for (const i4 of t5.reverse()) {
      const t6 = i4.split(" "), a7 = t6[0], r4 = this.fieldsIndex.get(a7), n3 = !!t6[1] && "desc" === t6[1].toLowerCase(), o3 = T(r4?.type, n3);
      e3.sort((e4, t7) => {
        const i5 = s5(e4, a7, r4), n4 = s5(t7, a7, r4);
        return o3(i5, n4);
      });
    }
  }
  _createFeatureQueryResponse(e3) {
    const t5 = this.items, {
      geometryType: s5,
      hasM: i4,
      hasZ: a7,
      objectIdField: n3,
      spatialReference: o3
    } = this, {
      outFields: l6,
      outSR: c5,
      quantizationParameters: d4,
      resultRecordCount: m4,
      resultOffset: h4,
      returnZ: g3,
      returnM: f5
    } = e3, p4 = null != m4 && t5.length > (h4 || 0) + m4, y6 = l6 && (l6.includes("*") ? [...this.fieldsIndex.fields] : l6.map((e4) => this.fieldsIndex.get(e4)));
    return {
      exceededTransferLimit: p4,
      features: this._createFeatures(e3, t5),
      fields: y6,
      geometryType: s5,
      hasM: i4 && f5,
      hasZ: a7 && g3,
      objectIdFieldName: n3,
      spatialReference: h2(c5 || o3),
      transform: d4 && s3(d4) || null
    };
  }
  _createFeatures(e3, t5) {
    const s5 = new c3(e3, this.featureAdapter, this.fieldsIndex), {
      hasM: i4,
      hasZ: a7
    } = this, {
      orderByFields: n3,
      quantizationParameters: o3,
      returnGeometry: u5,
      returnCentroid: m4,
      maxAllowableOffset: h4,
      resultOffset: g3,
      resultRecordCount: f5,
      returnZ: p4 = false,
      returnM: y6 = false
    } = e3, x2 = a7 && p4, I2 = i4 && y6;
    let T3 = [], V = 0;
    const F = [...t5];
    if (this._sortFeatures(F, n3, (e4, t6, i5) => s5.getFieldValue(e4, t6, i5)), this.geometryType && (u5 || m4)) {
      const e4 = s3(o3) ?? void 0, t6 = "esriGeometryPolygon" === this.geometryType || "esriGeometryPolyline" === this.geometryType;
      if (u5 && !m4) for (const i5 of F) {
        const a8 = this.featureAdapter.getGeometry(i5), r4 = {
          attributes: s5.getAttributes(i5),
          geometry: a5(this.geometryType, this.hasZ, this.hasM, a8, h4, e4, x2, I2)
        };
        t6 && a8 && !r4.geometry && (r4.centroid = y3(this, this.featureAdapter.getCentroid(i5, this), e4)), T3[V++] = r4;
      }
      else if (!u5 && m4) for (const i5 of F) T3[V++] = {
        attributes: s5.getAttributes(i5),
        centroid: y3(this, this.featureAdapter.getCentroid(i5, this), e4)
      };
      else for (const i5 of F) T3[V++] = {
        attributes: s5.getAttributes(i5),
        centroid: y3(this, this.featureAdapter.getCentroid(i5, this), e4),
        geometry: a5(this.geometryType, this.hasZ, this.hasM, this.featureAdapter.getGeometry(i5), h4, e4, x2, I2)
      };
    } else for (const r4 of F) {
      const e4 = s5.getAttributes(r4);
      e4 && (T3[V++] = {
        attributes: e4
      });
    }
    const S2 = g3 || 0;
    if (null != f5) {
      const e4 = S2 + f5;
      T3 = T3.slice(S2, Math.min(T3.length, e4));
    }
    return T3;
  }
  _createExceedsLimitQueryResponse(e3) {
    let t5 = false, s5 = Number.POSITIVE_INFINITY, i4 = Number.POSITIVE_INFINITY, a7 = Number.POSITIVE_INFINITY;
    for (const r4 of e3.outStatistics ?? []) if ("exceedslimit" === r4.statisticType) {
      s5 = null != r4.maxPointCount ? r4.maxPointCount : Number.POSITIVE_INFINITY, i4 = null != r4.maxRecordCount ? r4.maxRecordCount : Number.POSITIVE_INFINITY, a7 = null != r4.maxVertexCount ? r4.maxVertexCount : Number.POSITIVE_INFINITY;
      break;
    }
    if ("esriGeometryPoint" === this.geometryType) t5 = this.items.length > s5;
    else if (this.items.length > i4) t5 = true;
    else {
      const e4 = C4(this.hasZ, this.hasM), s6 = this.featureAdapter;
      t5 = this.items.reduce((e5, t6) => {
        const i5 = s6.getGeometry(t6);
        return e5 + (null != i5 && i5.coords.length || 0);
      }, 0) / e4 > a7;
    }
    return {
      fields: [{
        name: "exceedslimit",
        type: "esriFieldTypeInteger",
        alias: "exceedslimit",
        sqlType: "sqlTypeInteger",
        domain: null,
        defaultValue: null
      }],
      features: [{
        attributes: {
          exceedslimit: Number(t5)
        }
      }]
    };
  }
  _createStatisticsQueryResponse(e3) {
    return __async(this, null, function* () {
      const t5 = {
        attributes: {}
      }, s5 = [], i4 = /* @__PURE__ */ new Map(), a7 = /* @__PURE__ */ new Map(), r4 = /* @__PURE__ */ new Map(), n3 = /* @__PURE__ */ new Map(), o3 = new c3(e3, this.featureAdapter, this.fieldsIndex), u5 = e3.outStatistics, {
        groupByFieldsForStatistics: c5,
        having: d4,
        orderByFields: m4,
        resultRecordCount: h4
      } = e3, g3 = c5?.length, f5 = !!g3, p4 = f5 ? c5[0] : null, y6 = f5 && !this.fieldsIndex.get(p4);
      for (const l6 of u5 ?? []) {
        const {
          outStatisticFieldName: e4,
          statisticType: u6
        } = l6, m5 = l6, h5 = "exceedslimit" !== u6 ? l6.onStatisticField : void 0, I3 = "percentile_disc" === u6 || "percentile_cont" === u6, T3 = "EnvelopeAggregate" === u6 || "CentroidAggregate" === u6 || "ConvexHullAggregate" === u6, V = f5 && 1 === g3 && (h5 === p4 || y6) && "count" === u6;
        if (f5) {
          if (!r4.has(h5)) {
            const e5 = [];
            for (const t7 of c5) {
              const s7 = this._getAttributeValues(o3, t7, i4);
              e5.push(s7);
            }
            r4.set(h5, this._calculateUniqueValues(e5, !T3 && o3.returnDistinctValues));
          }
          const t6 = r4.get(h5);
          if (!t6) continue;
          const s6 = Object.keys(t6);
          for (const a8 of s6) {
            const {
              count: s7,
              data: r5,
              items: l7,
              itemPositions: u7
            } = t6[a8], g4 = r5.join(",");
            if (!d4 || o3.validateItems(l7, d4)) {
              const t7 = n3.get(g4) || {
                attributes: {}
              };
              if (T3) {
                t7.aggregateGeometries || (t7.aggregateGeometries = {});
                const {
                  aggregateGeometries: e5,
                  outStatisticFieldName: s8
                } = yield this._getAggregateGeometry(m5, l7);
                t7.aggregateGeometries[s8] = e5;
              } else {
                let a10 = null;
                if (V) a10 = s7;
                else {
                  const e5 = this._getAttributeValues(o3, h5, i4), t8 = u7.map((t9) => e5[t9]);
                  a10 = I3 && "statisticParameters" in m5 ? this._getPercentileValue(m5, t8) : this._getStatisticValue(m5, t8, null, o3.returnDistinctValues);
                }
                t7.attributes[e4] = a10;
              }
              let a9 = 0;
              c5.forEach((e5, s8) => t7.attributes[this.fieldsIndex.get(e5) ? e5 : "EXPR_" + ++a9] = r5[s8]), n3.set(g4, t7);
            }
          }
        } else if (T3) {
          t5.aggregateGeometries || (t5.aggregateGeometries = {});
          const {
            aggregateGeometries: e5,
            outStatisticFieldName: s6
          } = yield this._getAggregateGeometry(m5, this.items);
          t5.aggregateGeometries[s6] = e5;
        } else {
          const s6 = this._getAttributeValues(o3, h5, i4);
          t5.attributes[e4] = I3 && "statisticParameters" in m5 ? this._getPercentileValue(m5, s6) : this._getStatisticValue(m5, s6, a7, o3.returnDistinctValues);
        }
        const F = "min" !== u6 && "max" !== u6 || !ye(this.fieldsIndex.get(h5)) && !this._isAnyDateField(h5) ? null : this.fieldsIndex.get(h5)?.type;
        s5.push({
          name: e4,
          alias: e4,
          type: F || "esriFieldTypeDouble"
        });
      }
      const I2 = f5 ? Array.from(n3.values()) : [t5];
      return this._sortFeatures(I2, m4, (e4, t6) => e4.attributes[t6]), h4 && (I2.length = Math.min(h4, I2.length)), {
        fields: s5,
        features: I2
      };
    });
  }
  _isAnyDateField(e3) {
    const t5 = this.fieldsIndex.get(e3);
    return ge(t5) || Fe(t5) || Ie(t5) || be(t5);
  }
  _getAggregateGeometry(e3, r4) {
    return __async(this, null, function* () {
      const {
        convexHull: n3,
        union: o3
      } = yield import("./geometryEngineJSON-EW2QOKL3.js"), {
        statisticType: l6,
        outStatisticFieldName: u5
      } = e3, {
        featureAdapter: d4,
        spatialReference: m4,
        geometryType: h4,
        hasZ: g3,
        hasM: f5
      } = this, p4 = r4.map((e4) => a5(h4, g3, f5, d4.getGeometry(e4))), y6 = n3(m4, p4, true)[0], x2 = {
        aggregateGeometries: null,
        outStatisticFieldName: null
      };
      if ("EnvelopeAggregate" === l6) {
        const e4 = y6 ? v2(y6) : l4(o3(m4, p4));
        x2.aggregateGeometries = __spreadProps(__spreadValues({}, e4), {
          spatialReference: m4
        }), x2.outStatisticFieldName = u5 || "extent";
      } else if ("CentroidAggregate" === l6) {
        const e4 = y6 ? l3(y6) : r(l4(o3(m4, p4)));
        x2.aggregateGeometries = {
          x: e4[0],
          y: e4[1],
          spatialReference: m4
        }, x2.outStatisticFieldName = u5 || "centroid";
      } else "ConvexHullAggregate" === l6 && (x2.aggregateGeometries = y6, x2.outStatisticFieldName = u5 || "convexHull");
      return x2;
    });
  }
  _getStatisticValue(e3, t5, s5, i4) {
    const {
      onStatisticField: a7,
      statisticType: r4
    } = e3;
    let n3 = null;
    n3 = s5?.has(a7) ? s5.get(a7) : ye(this.fieldsIndex.get(a7)) || this._isAnyDateField(a7) ? d({
      values: t5,
      returnDistinct: i4
    }) : p({
      values: i4 ? [...new Set(t5)] : t5,
      minValue: null,
      maxValue: null,
      useSampleStdDev: true
    }), s5 && s5.set(a7, n3);
    return n3["var" === r4 ? "variance" : r4];
  }
  _getPercentileValue(e3, t5) {
    const {
      onStatisticField: s5,
      statisticParameters: i4,
      statisticType: a7
    } = e3, {
      value: r4,
      orderBy: n3
    } = i4, o3 = this.fieldsIndex.get(s5);
    return v3(t5, {
      value: r4,
      orderBy: n3,
      fieldType: o3?.type,
      isDiscrete: "percentile_disc" === a7
    });
  }
  _getAttributeValues(e3, t5, s5) {
    if (s5.has(t5)) return s5.get(t5);
    const i4 = this.fieldsIndex.get(t5), a7 = this.items.map((s6) => e3.getFieldValue(s6, t5, i4));
    return s5.set(t5, a7), a7;
  }
  _calculateUniqueValues(e3, t5) {
    const s5 = {}, i4 = this.items, a7 = i4.length;
    for (let r4 = 0; r4 < a7; r4++) {
      const a8 = i4[r4], n3 = [];
      for (const t6 of e3) n3.push(t6[r4]);
      const o3 = n3.join(",");
      null == s5[o3] ? s5[o3] = {
        count: 1,
        data: n3,
        items: [a8],
        itemPositions: [r4]
      } : (t5 || s5[o3].count++, s5[o3].items.push(a8), s5[o3].itemPositions.push(r4));
    }
    return s5;
  }
  _getDataValues(t5, s5 = true) {
    return __async(this, null, function* () {
      const i4 = new c3(this.query, this.featureAdapter, this.fieldsIndex), {
        valueExpression: a7,
        scale: r4,
        timeZone: n3
      } = t5;
      return a7 ? i4.getExpressionValues(this.items, a7, {
        viewingMode: "map",
        scale: r4,
        spatialReference: this.query.outSR || this.spatialReference
      }, {
        geometryType: this.geometryType,
        hasZ: this.hasZ,
        hasM: this.hasM
      }, n3) : i4.getDataValues(this.items, a(t5), s5);
    });
  }
};
function N2(e3, t5, s5, i4) {
  const a7 = i4.x - s5.x, r4 = i4.y - s5.y, n3 = a7 * a7 + r4 * r4, o3 = (t5.x - s5.x) * a7 + (t5.y - s5.y) * r4, l6 = Math.min(1, Math.max(0, o3 / n3));
  e3.x = s5.x + a7 * l6, e3.y = s5.y + r4 * l6;
}
function C4(e3, t5) {
  return e3 ? t5 ? 4 : 3 : t5 ? 3 : 2;
}
var G2 = class {
  constructor(e3, t5) {
    this.coords = e3, this.coordsIndex = t5;
  }
  get x() {
    return this.coords[this.coordsIndex];
  }
  get y() {
    return this.coords[this.coordsIndex + 1];
  }
  get z() {
    return this.coords[this.coordsIndex + 2];
  }
};

// ../../../node_modules/@arcgis/core/layers/graphics/data/queryValidationUtils.js
var u4 = "unsupported-query";
function p3(_0, _1) {
  return __async(this, arguments, function* (t5, {
    fieldsIndex: i4,
    geometryType: s5,
    spatialReference: r4,
    availableFields: o3
  }) {
    if ((t5.distance ?? 0) < 0 || null != t5.geometryPrecision || t5.multipatchOption && "xyFootprint" !== t5.multipatchOption || t5.pixelSize || t5.relationParam || t5.text) throw new s(u4, "Unsupported query options", {
      query: t5
    });
    return c4(i4, o3, t5), f4(i4, o3, t5), Promise.all([P2(t5, s5, r4), x(r4, t5.outSR)]).then(() => t5);
  });
}
function c4(t5, i4, o3) {
  const {
    outFields: n3,
    orderByFields: a7,
    returnDistinctValues: l6,
    outStatistics: p4
  } = o3, c5 = p4 ? p4.map((e3) => e3.outStatisticFieldName && e3.outStatisticFieldName.toLowerCase()).filter(Boolean) : [];
  if (a7 && a7.length > 0) {
    const e3 = " asc", r4 = " desc", n4 = a7.map((t6) => {
      const i5 = t6.toLowerCase();
      return i5.includes(e3) ? i5.split(e3)[0] : i5.includes(r4) ? i5.split(r4)[0] : t6;
    }).filter((e4) => !c5.includes(e4));
    g2(t5, i4, n4, {
      expressionName: "orderByFields",
      query: o3
    });
  }
  if (n3 && n3.length > 0) g2(t5, i4, n3, {
    expressionName: "outFields",
    query: o3,
    allowedFieldTypes: "all"
  });
  else if (l6) throw new s(u4, "outFields should be specified for returnDistinctValues", {
    query: o3
  });
  p2(t5, i4, o3.where, o3);
}
var d3 = /* @__PURE__ */ new Set([...o2, ...a6]);
function f4(t5, i4, r4) {
  const {
    outStatistics: n3,
    groupByFieldsForStatistics: a7,
    having: l6
  } = r4, p4 = a7?.length, c5 = n3?.length;
  if (l6) {
    if (!p4 || !c5) throw new s(u4, "outStatistics and groupByFieldsForStatistics should be specified with having", {
      query: r4
    });
    f3(t5, i4, l6, n3, r4);
  }
  if (c5) {
    if (!h3(n3)) return;
    const o3 = n3.map((e3) => e3.onStatisticField).filter(Boolean);
    g2(t5, i4, o3, {
      expressionName: "onStatisticFields",
      query: r4
    }), p4 && g2(t5, i4, a7, {
      expressionName: "groupByFieldsForStatistics",
      query: r4
    });
    for (const a8 of n3) {
      const {
        onStatisticField: o4,
        statisticType: n4
      } = a8;
      if (("percentile_disc" === n4 || "percentile_cont" === n4) && "statisticParameters" in a8) {
        const {
          statisticParameters: t6
        } = a8;
        if (!t6) throw new s(u4, "statisticParameters should be set for percentile type", {
          definition: a8,
          query: r4
        });
      } else t5.get(o4) && "count" !== n4 && "min" !== n4 && "max" !== n4 && g2(t5, i4, [o4], {
        expressionName: `outStatistics with '${n4}' statistic type`,
        allowedFieldTypes: d3,
        query: r4
      });
    }
  }
}
function m3(_0, _1, _2) {
  return __async(this, arguments, function* (t5, i4, {
    fieldsIndex: s5,
    geometryType: r4,
    spatialReference: o3,
    availableFields: l6
  }) {
    if ((t5.distance ?? 0) < 0 || null != t5.geometryPrecision || t5.multipatchOption || t5.pixelSize || t5.relationParam || t5.text || t5.outStatistics || t5.groupByFieldsForStatistics || t5.having || t5.orderByFields) throw new s(u4, "Unsupported query options", {
      query: t5
    });
    return c4(s5, l6, t5), Promise.all([y5(s5, l6, i4, t5), P2(t5, r4, o3), x(o3, t5.outSR)]).then(() => t5);
  });
}
function y5(t5, i4, r4, o3) {
  return __async(this, null, function* () {
    let n3 = [];
    if (r4.valueExpression) {
      const {
        arcadeUtils: e3
      } = yield i3();
      n3 = e3.extractFieldNames(r4.valueExpression);
    }
    if (r4.field && n3.push(r4.field), r4.field2 && n3.push(r4.field2), r4.field3 && n3.push(r4.field3), r4.normalizationField && n3.push(r4.normalizationField), !n3.length && !r4.valueExpression) throw new s(u4, "field or valueExpression is required", {
      params: r4
    });
    g2(t5, i4, n3, {
      expressionName: "statistics",
      query: o3
    });
  });
}
function h3(e3) {
  return null != e3 && e3.every((e4) => "exceedslimit" !== e4.statisticType);
}

// ../../../node_modules/@arcgis/core/layers/graphics/data/QueryEngine.js
var L = "unsupported-query";
var D = new h(2e6);
var W2 = 0;
var $2 = class {
  constructor(e3) {
    this._geometryQueryCache = null, this._changeHandle = null, this.capabilities = {
      query: t
    }, this.geometryType = e3.geometryType, this.hasM = !!e3.hasM, this.hasZ = !!e3.hasZ, this.objectIdField = e3.objectIdField, this.spatialReference = e3.spatialReference, this.definitionExpression = e3.definitionExpression, this.featureStore = e3.featureStore, this.aggregateAdapter = e3.aggregateAdapter, this._changeHandle = this.featureStore.events.on("changed", () => this.clearCache()), this.timeInfo = e3.timeInfo, e3.cacheSpatialQueries && (this._geometryQueryCache = new r2(W2++ + "$$", D)), this.fieldsIndex = a2(e3.fieldsIndex) ? e3.fieldsIndex : Z.fromJSON(e3.fieldsIndex), !e3.availableFields || 1 === e3.availableFields.length && "*" === e3.availableFields[0] ? this.availableFields = new Set(this.fieldsIndex.fields.map((e4) => e4.name)) : this.availableFields = new Set(e3.availableFields.map((e4) => this.fieldsIndex.get(e4)?.name).filter((e4) => null != e4)), e3.scheduler && e3.priority && (this._frameTask = e3.scheduler.registerTask(e3.priority));
  }
  destroy() {
    this._frameTask = l(this._frameTask), this.clearCache(), u(this._geometryQueryCache), this._changeHandle = l(this._changeHandle);
  }
  get featureAdapter() {
    return this.featureStore.featureAdapter;
  }
  clearCache() {
    this._geometryQueryCache?.clear(), this._allFeaturesPromise = null, this._timeExtentPromise = null, this._fullExtentPromise = null;
  }
  executeQuery(e3, t5) {
    return __async(this, null, function* () {
      const i4 = l2(t5);
      try {
        return (yield this._executeQuery(e3, {}, i4)).createQueryResponse();
      } catch (s5) {
        if (s5 !== g) throw s5;
        return new q([], e3, this).createQueryResponse();
      }
    });
  }
  executeQueryForCount() {
    return __async(this, arguments, function* (e3 = {}, t5) {
      const i4 = l2(t5);
      try {
        return (yield this._executeQuery(e3, {
          returnGeometry: false,
          returnCentroid: false,
          outSR: null
        }, i4)).createQueryResponseForCount();
      } catch (s5) {
        if (s5 !== g) throw s5;
        return 0;
      }
    });
  }
  executeQueryForExtent(e3, t5) {
    return __async(this, null, function* () {
      const i4 = l2(t5), s5 = e3.outSR;
      try {
        const t6 = yield this._executeQuery(e3, {
          returnGeometry: true,
          returnCentroid: false,
          outSR: null
        }, i4), r4 = t6.size;
        if (!r4) return {
          count: 0,
          extent: null
        };
        return {
          count: r4,
          extent: yield this._getBounds(t6.items, t6.spatialReference, s5 || this.spatialReference)
        };
      } catch (r4) {
        if (r4 === g) return {
          count: 0,
          extent: null
        };
        throw r4;
      }
    });
  }
  executeQueryForIds(e3, t5) {
    return __async(this, null, function* () {
      return this.executeQueryForIdSet(e3, t5).then((e4) => Array.from(e4));
    });
  }
  executeQueryForIdSet(e3, t5) {
    return __async(this, null, function* () {
      const i4 = l2(t5);
      try {
        const t6 = yield this._executeQuery(e3, {
          returnGeometry: true,
          returnCentroid: false,
          outSR: null
        }, i4), s5 = t6.items, r4 = /* @__PURE__ */ new Set();
        return yield this._reschedule(() => {
          for (const e4 of s5) r4.add(t6.featureAdapter.getObjectId(e4));
        }, i4), r4;
      } catch (s5) {
        if (s5 === g) return /* @__PURE__ */ new Set();
        throw s5;
      }
    });
  }
  executeQueryForSnapping(e3, t5) {
    return __async(this, null, function* () {
      const i4 = l2(t5), {
        point: s5,
        distance: a7,
        returnEdge: n3,
        vertexMode: l6
      } = e3;
      if (!n3 && "none" === l6) return {
        candidates: []
      };
      let u5 = a(e3.query);
      u5 = yield this._schedule(() => j2(u5, this.definitionExpression, this.spatialReference), i4), u5 = yield this._reschedule(() => p3(u5, {
        availableFields: this.availableFields,
        fieldsIndex: this.fieldsIndex,
        geometryType: this.geometryType,
        spatialReference: this.spatialReference
      }), i4);
      const h4 = !G(s5.spatialReference, this.spatialReference);
      h4 && (yield x(s5.spatialReference, this.spatialReference));
      const c5 = "number" == typeof a7 ? a7 : a7.x, m4 = "number" == typeof a7 ? a7 : a7.y, f5 = {
        xmin: s5.x - c5,
        xmax: s5.x + c5,
        ymin: s5.y - m4,
        ymax: s5.y + m4,
        spatialReference: s5.spatialReference
      }, y6 = h4 ? j(f5, this.spatialReference) : f5;
      if (!y6) return {
        candidates: []
      };
      const p4 = (yield R(y2(s5), null, {
        signal: i4
      }))[0], d4 = (yield R(y2(y6), null, {
        signal: i4
      }))[0];
      if (null == p4 || null == d4) return {
        candidates: []
      };
      const g3 = new q(yield this._reschedule(() => this._searchFeatures(K(d4.toJSON())), i4), u5, this);
      yield this._reschedule(() => this._executeObjectIdsQuery(g3), i4), yield this._reschedule(() => this._executeTimeQuery(g3), i4), yield this._reschedule(() => this._executeAttributesQuery(g3), i4), yield this._reschedule(() => this._executeGeometryQueryForSnapping(g3, i4), i4);
      const x2 = p4.toJSON(), _ = h4 ? j(x2, this.spatialReference) : x2, F = h4 ? Math.max(y6.xmax - y6.xmin, y6.ymax - y6.ymin) / 2 : a7;
      return g3.createSnappingResponse(__spreadProps(__spreadValues({}, e3), {
        point: _,
        distance: F
      }), s5.spatialReference);
    });
  }
  executeQueryForLatestObservations(e3, t5) {
    return __async(this, null, function* () {
      const s5 = l2(t5);
      if (!this.timeInfo?.trackIdField) throw new s(L, "Missing timeInfo or timeInfo.trackIdField", {
        query: e3,
        timeInfo: this.timeInfo
      });
      try {
        const t6 = yield this._executeQuery(e3, {}, s5);
        return yield this._reschedule(() => this._filterLatest(t6), s5), t6.createQueryResponse();
      } catch (r4) {
        if (r4 !== g) throw r4;
        return new q([], e3, this).createQueryResponse();
      }
    });
  }
  executeQueryForSummaryStatistics() {
    return __async(this, arguments, function* (e3 = {}, t5, i4) {
      const s5 = l2(i4), {
        field: r4,
        normalizationField: a7,
        valueExpression: n3
      } = t5;
      return (yield this._executeQueryForStatistics(e3, {
        field: r4,
        normalizationField: a7,
        valueExpression: n3
      }, s5)).createSummaryStatisticsResponse(t5);
    });
  }
  executeQueryForUniqueValues() {
    return __async(this, arguments, function* (e3 = {}, t5, i4) {
      const s5 = l2(i4), {
        field: r4,
        field2: a7,
        field3: n3,
        valueExpression: l6
      } = t5;
      return (yield this._executeQueryForStatistics(e3, {
        field: r4,
        field2: a7,
        field3: n3,
        valueExpression: l6
      }, s5)).createUniqueValuesResponse(t5);
    });
  }
  executeQueryForClassBreaks() {
    return __async(this, arguments, function* (e3 = {}, t5, i4) {
      const s5 = l2(i4), {
        field: r4,
        normalizationField: a7,
        valueExpression: n3
      } = t5;
      return (yield this._executeQueryForStatistics(e3, {
        field: r4,
        normalizationField: a7,
        valueExpression: n3
      }, s5)).createClassBreaksResponse(t5);
    });
  }
  executeQueryForHistogram() {
    return __async(this, arguments, function* (e3 = {}, t5, i4) {
      const s5 = l2(i4), {
        field: r4,
        normalizationField: a7,
        valueExpression: n3
      } = t5;
      return (yield this._executeQueryForStatistics(e3, {
        field: r4,
        normalizationField: a7,
        valueExpression: n3
      }, s5)).createHistogramResponse(t5);
    });
  }
  fetchRecomputedExtents(e3) {
    return __async(this, null, function* () {
      const t5 = l2(e3);
      this._timeExtentPromise ||= n(this.timeInfo, this.featureStore);
      const [i4, s5] = yield Promise.all([this._getFullExtent(), this._timeExtentPromise]);
      return s2(t5), {
        fullExtent: i4,
        timeExtent: s5
      };
    });
  }
  _getBounds(e3, t5, i4) {
    return __async(this, null, function* () {
      const s5 = O2(i2(), C);
      yield this.featureStore.forEachBounds(e3, (e4) => o(s5, e4));
      const r4 = {
        xmin: s5[0],
        ymin: s5[1],
        xmax: s5[3],
        ymax: s5[4],
        spatialReference: h2(this.spatialReference)
      };
      this.hasZ && isFinite(s5[2]) && isFinite(s5[5]) && (r4.zmin = s5[2], r4.zmax = s5[5], r4.hasZ = true);
      const a7 = j(r4, t5, i4);
      if (a7.spatialReference = h2(i4), a7.xmax - a7.xmin == 0) {
        const e4 = W(a7.spatialReference);
        a7.xmin -= e4, a7.xmax += e4;
      }
      if (a7.ymax - a7.ymin == 0) {
        const e4 = W(a7.spatialReference);
        a7.ymin -= e4, a7.ymax += e4;
      }
      if (this.hasZ && null != a7.zmin && null != a7.zmax && a7.zmax - a7.zmin == 0) {
        const e4 = W(a7.spatialReference);
        a7.zmin -= e4, a7.zmax += e4;
      }
      return a7;
    });
  }
  _getFullExtent() {
    return this._fullExtentPromise ||= "getFullExtent" in this.featureStore && this.featureStore.getFullExtent ? Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)) : this._getAllFeatures().then((e3) => this._getBounds(e3, this.spatialReference, this.spatialReference)), this._fullExtentPromise;
  }
  _schedule(e3, t5) {
    return __async(this, null, function* () {
      return null != this._frameTask ? this._frameTask.schedule(e3, t5) : e3(C3);
    });
  }
  _reschedule(e3, t5) {
    return __async(this, null, function* () {
      return null != this._frameTask ? this._frameTask.reschedule(e3, t5) : e3(C3);
    });
  }
  _getAllFeaturesQueryEngineResult(e3) {
    return __async(this, null, function* () {
      return new q(yield this._getAllFeatures(), e3, this);
    });
  }
  _getAllFeatures() {
    return __async(this, null, function* () {
      if (null == this._allFeaturesPromise) {
        const e4 = [];
        this._allFeaturesPromise = (() => __async(this, null, function* () {
          yield this.featureStore.forEach((t6) => e4.push(t6));
        }))().then(() => e4);
      }
      const e3 = this._allFeaturesPromise, t5 = yield e3;
      return e3 === this._allFeaturesPromise ? t5.slice() : this._getAllFeatures();
    });
  }
  _executeQuery(e3, t5, i4) {
    return __async(this, null, function* () {
      e3 = a(e3), e3 = yield this._schedule(() => S(e3, this.definitionExpression, this.spatialReference), i4), e3 = yield this._reschedule(() => p3(e3, {
        availableFields: this.availableFields,
        fieldsIndex: this.fieldsIndex,
        geometryType: this.geometryType,
        spatialReference: this.spatialReference
      }), i4), e3 = __spreadValues(__spreadValues({}, e3), t5);
      const s5 = yield this._reschedule(() => this._executeSceneFilterQuery(e3, i4), i4), a7 = yield this._reschedule(() => this._executeGeometryQuery(e3, s5, i4), i4);
      return yield this._reschedule(() => this._executeAggregateIdsQuery(a7), i4), yield this._reschedule(() => this._executeObjectIdsQuery(a7), i4), yield this._reschedule(() => this._executeTimeQuery(a7), i4), yield this._reschedule(() => this._executeAttributesQuery(a7), i4), a7;
    });
  }
  _executeSceneFilterQuery(e3, t5) {
    return __async(this, null, function* () {
      if (null == e3.sceneFilter) return null;
      const {
        outSR: i4,
        returnGeometry: s5,
        returnCentroid: r4
      } = e3, a7 = this.featureStore.featureSpatialReference, n3 = e3.sceneFilter.geometry, l6 = null == a7 || G(a7, n3.spatialReference) ? n3 : j(n3, a7);
      if (!l6) return null;
      const u5 = s5 || r4, o3 = N(i4) && !G(this.spatialReference, i4) && u5 ? (e4) => __async(this, null, function* () {
        return this._project(e4, i4);
      }) : (e4) => e4, h4 = this.featureAdapter, c5 = yield this._reschedule(() => this._searchFeatures(K(l6)), t5);
      if ("disjoint" === e3.sceneFilter.spatialRelationship) {
        if (!c5.length) return null;
        const i5 = /* @__PURE__ */ new Set();
        for (const e4 of c5) i5.add(h4.getObjectId(e4));
        const s6 = yield this._reschedule(() => this._getAllFeatures(), t5), r5 = yield this._reschedule(() => __async(this, null, function* () {
          const r6 = yield v4("esriSpatialRelDisjoint", l6, this.geometryType, this.hasZ, this.hasM), a8 = (e4) => !i5.has(h4.getObjectId(e4)) || r6(h4.getGeometry(e4)), n4 = yield this._runSpatialFilter(s6, a8, t5);
          return new q(n4, e3, this);
        }), t5);
        return o3(r5);
      }
      if (!c5.length) return new q([], e3, this);
      if (this._canExecuteSinglePass(l6, e3)) return o3(new q(c5, e3, this));
      const m4 = yield v4("esriSpatialRelContains", l6, this.geometryType, this.hasZ, this.hasM), f5 = yield this._runSpatialFilter(c5, (e4) => m4(h4.getGeometry(e4)), t5);
      return o3(new q(f5, e3, this));
    });
  }
  _executeGeometryQuery(i4, s5, r4) {
    return __async(this, null, function* () {
      if (null != s5 && 0 === s5.items.length) return s5;
      i4 = null != s5 ? s5.query : i4;
      const {
        geometry: a7,
        outSR: n3,
        spatialRel: l6,
        returnGeometry: u5,
        returnCentroid: o3
      } = i4, h4 = this.featureStore.featureSpatialReference, c5 = !a7 || null == h4 || G(h4, a7.spatialReference) ? a7 : j(a7, h4), m4 = u5 || o3, f5 = N(n3) && !G(this.spatialReference, n3), y6 = this._geometryQueryCache && null == s5 ? f5 && m4 ? JSON.stringify({
        originalFilterGeometry: a7,
        spatialRelationship: l6,
        outSpatialReference: n3
      }) : JSON.stringify({
        originalFilterGeometry: a7,
        spatialRelationship: l6
      }) : null, p4 = y6 ? this._geometryQueryCache.get(y6) : null;
      if (null != p4) return new q(p4, i4, this);
      const d4 = (e3) => __async(this, null, function* () {
        return f5 && m4 && (yield this._project(e3, n3)), y6 && this._geometryQueryCache.put(y6, e3.items, e3.items.length + 1), e3;
      });
      if (!c5) return d4(null != s5 ? s5 : yield this._getAllFeaturesQueryEngineResult(i4));
      const g3 = this.featureAdapter;
      let x2 = yield this._reschedule(() => this._searchFeatures(K(a7)), r4);
      if ("esriSpatialRelDisjoint" === l6) {
        if (!x2.length) return d4(null != s5 ? s5 : yield this._getAllFeaturesQueryEngineResult(i4));
        const e3 = /* @__PURE__ */ new Set();
        for (const i5 of x2) e3.add(g3.getObjectId(i5));
        const t5 = null != s5 ? s5.items : yield this._reschedule(() => this._getAllFeatures(), r4), a8 = yield this._reschedule(() => __async(this, null, function* () {
          const s6 = yield v4(l6, c5, this.geometryType, this.hasZ, this.hasM), a9 = (t6) => !e3.has(g3.getObjectId(t6)) || s6(g3.getGeometry(t6)), n4 = yield this._runSpatialFilter(t5, a9, r4);
          return new q(n4, i4, this);
        }), r4);
        return d4(a8);
      }
      if (null != s5) {
        const i5 = new v();
        x2 = x2.filter((t5) => y(s5.items, t5, s5.items.length, i5) >= 0);
      }
      if (!x2.length) {
        const e3 = new q([], i4, this);
        return y6 && this._geometryQueryCache.put(y6, e3.items, 1), e3;
      }
      if (this._canExecuteSinglePass(c5, i4)) return d4(new q(x2, i4, this));
      const _ = yield v4(l6, c5, this.geometryType, this.hasZ, this.hasM), w2 = yield this._runSpatialFilter(x2, (e3) => _(g3.getGeometry(e3)), r4);
      return d4(new q(w2, i4, this));
    });
  }
  _executeGeometryQueryForSnapping(e3, t5) {
    return __async(this, null, function* () {
      const {
        query: i4
      } = e3, {
        spatialRel: s5
      } = i4;
      if (!e3?.items?.length || !i4.geometry || !s5) return;
      const r4 = yield v4(s5, i4.geometry, this.geometryType, this.hasZ, this.hasM), a7 = yield this._runSpatialFilter(e3.items, (e4) => r4(e4.geometry), t5);
      e3.items = a7;
    });
  }
  _executeAggregateIdsQuery(e3) {
    if (0 === e3.items.length || !e3.query.aggregateIds?.length || null == this.aggregateAdapter) return;
    const t5 = /* @__PURE__ */ new Set();
    for (const s5 of e3.query.aggregateIds) {
      this.aggregateAdapter.getFeatureObjectIds(s5).forEach((e4) => t5.add(e4));
    }
    const i4 = this.featureAdapter.getObjectId;
    e3.items = e3.items.filter((e4) => t5.has(i4(e4)));
  }
  _executeObjectIdsQuery(e3) {
    if (0 === e3.items.length || !e3.query.objectIds?.length) return;
    const t5 = new Set(e3.query.objectIds), i4 = this.featureAdapter.getObjectId;
    e3.items = e3.items.filter((e4) => t5.has(i4(e4)));
  }
  _executeTimeQuery(e3) {
    if (0 === e3.items.length) return;
    const t5 = t3(this.timeInfo, e3.query.timeExtent, this.featureAdapter);
    null != t5 && (e3.items = e3.items.filter(t5));
  }
  _executeAttributesQuery(e3) {
    if (0 === e3.items.length) return;
    const t5 = c2(e3.query.where, this.fieldsIndex);
    if (t5) {
      if (!t5.isStandardized) throw new TypeError("Where clause is not standardized");
      e3.items = e3.items.filter((e4) => t5.testFeature(e4, this.featureAdapter));
    }
  }
  _runSpatialFilter(e3, t5, i4) {
    return __async(this, null, function* () {
      if (!t5) return e3;
      if (null == this._frameTask) return e3.filter((e4) => t5(e4));
      let s5 = 0;
      const r4 = new Array(), a7 = (n3) => __async(this, null, function* () {
        for (; s5 < e3.length; ) {
          const l6 = e3[s5++];
          t5(l6) && (r4.push(l6), n3.madeProgress()), n3.done && (yield this._reschedule((e4) => a7(e4), i4));
        }
      });
      return this._reschedule((e4) => a7(e4), i4).then(() => r4);
    });
  }
  _filterLatest(e3) {
    const {
      trackIdField: t5,
      startTimeField: i4,
      endTimeField: s5
    } = this.timeInfo, r4 = s5 || i4, a7 = /* @__PURE__ */ new Map(), n3 = this.featureAdapter.getAttribute;
    for (const l6 of e3.items) {
      const e4 = n3(l6, t5), i5 = n3(l6, r4), s6 = a7.get(e4);
      (!s6 || i5 > n3(s6, r4)) && a7.set(e4, l6);
    }
    e3.items = Array.from(a7.values());
  }
  _canExecuteSinglePass(e3, t5) {
    const {
      spatialRel: i4
    } = t5;
    return I(e3) && ("esriSpatialRelEnvelopeIntersects" === i4 || "esriGeometryPoint" === this.geometryType && ("esriSpatialRelIntersects" === i4 || "esriSpatialRelContains" === i4));
  }
  _project(e3, t5) {
    return __async(this, null, function* () {
      if (!t5 || G(this.spatialReference, t5)) return e3;
      const i4 = this.featureAdapter;
      let s5;
      try {
        const e4 = yield this._getFullExtent();
        s5 = Y(this.spatialReference, t5, e4);
      } catch {
      }
      const r4 = yield b(e3.items.map((e4) => a5(this.geometryType, this.hasZ, this.hasM, i4.getGeometry(e4))), this.spatialReference, t5, s5);
      return e3.items = r4.map((t6, s6) => i4.cloneWithGeometry(e3.items[s6], ot(t6, this.hasZ, this.hasM))), e3;
    });
  }
  _searchFeatures(e3) {
    return __async(this, null, function* () {
      const t5 = /* @__PURE__ */ new Set();
      yield Promise.all(e3.map((e4) => this.featureStore.forEachInBounds(e4, (e5) => t5.add(e5))));
      const i4 = Array.from(t5.values());
      return t5.clear(), i4;
    });
  }
  _executeQueryForStatistics(e3, t5, i4) {
    return __async(this, null, function* () {
      e3 = a(e3);
      try {
        e3 = yield this._schedule(() => S(e3, this.definitionExpression, this.spatialReference), i4), e3 = yield this._reschedule(() => m3(e3, t5, {
          availableFields: this.availableFields,
          fieldsIndex: this.fieldsIndex,
          geometryType: this.geometryType,
          spatialReference: this.spatialReference
        }), i4);
        const s5 = yield this._reschedule(() => this._executeSceneFilterQuery(e3, i4), i4), r4 = yield this._reschedule(() => this._executeGeometryQuery(e3, s5, i4), i4);
        return yield this._reschedule(() => this._executeAggregateIdsQuery(r4), i4), yield this._reschedule(() => this._executeObjectIdsQuery(r4), i4), yield this._reschedule(() => this._executeTimeQuery(r4), i4), yield this._reschedule(() => this._executeAttributesQuery(r4), i4), r4;
      } catch (s5) {
        if (s5 !== g) throw s5;
        return new q([], e3, this);
      }
    });
  }
};
function K(e3) {
  if (I(e3)) {
    if (m(e3)) return [a3(Math.min(e3.xmin, e3.xmax), Math.min(e3.ymin, e3.ymax), Math.max(e3.xmin, e3.xmax), Math.max(e3.ymin, e3.ymax))];
    if (f(e3)) return e3.rings.map((e4) => a3(Math.min(e4[0][0], e4[2][0]), Math.min(e4[0][1], e4[2][1]), Math.max(e4[0][0], e4[2][0]), Math.max(e4[0][1], e4[2][1])));
  }
  return [a4(u2(), e3)];
}

export {
  $2 as $
};
//# sourceMappingURL=chunk-FWEBARAB.js.map
