import {
  e as e2
} from "./chunk-JCWFGRHQ.js";
import {
  i as i2
} from "./chunk-JILEJ6R2.js";
import {
  E,
  I,
  i,
  j,
  k,
  x
} from "./chunk-CVB43GGP.js";
import {
  DateTime,
  FixedOffsetZone
} from "./chunk-LLDOZWVV.js";
import {
  c
} from "./chunk-MNLT652N.js";
import {
  e as e3
} from "./chunk-3ZXOUEQG.js";
import {
  o3 as o
} from "./chunk-ANKOCGE2.js";
import {
  f
} from "./chunk-2MMLMOWS.js";
import {
  e,
  s2 as s,
  t
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/support/dataUtils.js
function n(n2) {
  return "number" == typeof n2;
}
function t2(n2) {
  return "string" == typeof n2 || n2 instanceof String;
}

// ../../../node_modules/@arcgis/core/widgets/support/dateUtils.js
var y = i;
var p = {
  date: null,
  time: null,
  timeZoneOffset: null
};
var h = /* @__PURE__ */ new Map([["hours", 3600], ["minutes", 60], ["seconds", 1], ["deciseconds", 0.1], ["centiseconds", 0.01], ["milliseconds", 1e-3]]);
var S = "yyyy-MM-dd";
var v = "TT";
var M;
!function(t4) {
  t4.HM = "HH:mm", t4.HMS = "HH:mm:ss", t4.HMS_MS = "HH:mm:ss.SSS";
}(M || (M = {}));
var O = [M.HMS_MS, M.HMS, M.HM, v];
var w = "latn";
var H = /* @__PURE__ */ new Set(["date-only", "time-only", "timestamp-offset"]);
var Z = (t4) => "valueAsDate" in t4;
function j2(t4) {
  return {
    locale: c(),
    numberingSystem: w,
    zone: t4 ?? y
  };
}
function g(t4, n2) {
  return null === t4 ? null : DateTime.fromMillis(t4, j2(n2));
}
function I2(t4, n2) {
  if (null == t4 || !t2(t4) || "" === t4) {
    if (n2) {
      const t5 = DateTime.local({
        zone: n2
      });
      return {
        date: null,
        time: null,
        timeZoneOffset: t5.isValid ? t5.offset.toString() : null
      };
    }
    return p;
  }
  const e4 = DateTime.fromISO(t4, {
    setZone: true
  });
  return {
    date: e4.toFormat(S, j2()),
    time: e4.toFormat(M.HMS_MS, j2()),
    timeZoneOffset: e4.offset.toString()
  };
}
function V(t4, n2) {
  if (null == t4 || !n(t4) || isNaN(t4)) return p;
  const e4 = g(t4, n2);
  return e4 ? {
    date: e4.toFormat(S, j2(n2)),
    time: e4.toFormat(v, j2(n2))
  } : p;
}
function F(t4) {
  switch (t4.type) {
    case "date":
    default:
      return E("short-date-short-time");
    case "date-only":
      return E("short-date");
    case "time-only":
      return E("short-time");
    case "timestamp-offset":
      return __spreadProps(__spreadValues({}, E("short-date-short-time")), {
        timeZone: void 0,
        timeZoneName: "short"
      });
  }
}
function T(t4, n2, e4) {
  if (!t4 || null == n2) return null;
  switch (t4.type) {
    case "date":
      return j(n2, e4);
    case "date-only":
      return k(n2, e4);
    case "time-only":
      return I(n2, e4);
    case "timestamp-offset":
      return x(n2, e4);
    default:
      return null;
  }
}
function D(t4) {
  const {
    dateComponent: n2,
    defaultTimeZone: e4,
    timeComponent: o3,
    timeZoneComponent: l2,
    oldValue: r2
  } = t4;
  if (!n2?.value || !o3?.value) return null;
  const {
    year: i3,
    month: u3,
    day: m3
  } = DateTime.fromFormat(n2.value, S), {
    hour: s3,
    minute: d3,
    second: y3,
    millisecond: p3
  } = z(o3, i) ?? DateTime.now(), h3 = I2(r2, e4), v3 = null != l2?.value ? parseInt(l2.value, 10) : null != h3.timeZoneOffset ? parseInt(h3.timeZoneOffset, 10) : (/* @__PURE__ */ new Date()).getTimezoneOffset(), M3 = FixedOffsetZone.instance(v3), O3 = DateTime.fromObject({
    year: i3,
    month: u3,
    day: m3,
    hour: s3,
    minute: d3,
    second: y3,
    millisecond: p3
  }, {
    zone: M3
  });
  return O3.isValid ? O3.toISO({
    includeOffset: true
  }) : null;
}
function C(t4) {
  const {
    dateComponent: n2,
    timeComponent: e4,
    timeZone: o3,
    max: l2,
    min: r2,
    oldValue: i3
  } = t4, u3 = z(n2, o3);
  let a2 = !!t4.applyRange;
  if (!u3) return null;
  let m3 = null;
  if (null != e4?.value) {
    const t5 = z(e4, o3), n3 = Date.now(), r3 = null != l2 && l2 < n3 ? l2 : n3, i4 = DateTime.fromMillis(r3, j2(o3)), a3 = u3 || i4, {
      year: s4,
      month: c3,
      day: d3
    } = a3, {
      hour: y3,
      minute: p3,
      second: h3,
      millisecond: S3
    } = t5 || i4;
    m3 = a3.set({
      year: s4,
      month: c3,
      day: d3,
      hour: y3,
      minute: p3,
      second: h3,
      millisecond: S3
    });
  } else {
    const t5 = g(A({
      value: i3 ?? Date.now(),
      max: l2,
      min: r2
    }), o3), {
      year: n3,
      month: e5,
      day: s4
    } = u3, {
      hour: f3,
      minute: c3,
      second: d3,
      millisecond: y3
    } = t5;
    a2 = true, m3 = u3.set({
      year: n3,
      month: e5,
      day: s4,
      hour: f3,
      minute: c3,
      second: d3,
      millisecond: y3
    });
  }
  if (!m3.isValid) return null;
  const s3 = m3.toMillis();
  return a2 ? A({
    value: s3,
    max: l2,
    min: r2
  }) : s3;
}
function z(t4, n2) {
  if (null == t4?.value || Array.isArray(t4.value)) return null;
  let e4 = null;
  return e4 = Z(t4) ? DateTime.fromFormat(t4.value, S, j2(n2)) : J(t4.value), e4?.isValid ? e4 : null;
}
function N(t4) {
  const {
    max: n2,
    min: e4,
    value: o3
  } = t4;
  return !isNaN(o3) && !(null != n2 && o3 > n2) && !(null != e4 && o3 < e4);
}
function A(t4) {
  const {
    max: e4,
    min: o3,
    value: l2
  } = t4;
  return null != e4 && null != o3 ? e3(l2, o3, e4) : null != e4 && l2 > e4 ? e4 : null != o3 && l2 < o3 ? o3 : l2;
}
function U(n2) {
  if (!n2) return "";
  const e4 = n2.split(".").at(0);
  if (!e4 || e4.length < 1) throw new s("invalid time-only field", `Cannot parse valid time-only field value from ${n2}`);
  const o3 = e4.split(":"), l2 = new Array(3);
  for (let t4 = 0; t4 < 3; t4++) {
    const n3 = o3.at(t4) ?? "";
    l2[t4] = n3.padStart(2, "0");
  }
  return l2.join(":");
}
function _(t4, n2) {
  switch (n2) {
    case "date":
      return t4.getTime();
    case "date-only":
      return t4.toISODate();
    case "time-only":
      return U(t4.toISOTime(true, false));
    case "timestamp-offset":
      return t4.toISOString(false);
    default:
      return null;
  }
}
function k2(t4) {
  return !!t4 && "object" == typeof t4 && "getTime" in t4 && "toISOString" in t4 && "timeZone" in t4;
}
function E2(t4) {
  if (!t4 || !t2(t4)) return null;
  const n2 = DateTime.fromFormat(t4, S);
  return n2.isValid ? n2 : null;
}
function J(t4) {
  return t4 && t2(t4) ? f(O, (n2) => {
    const e4 = DateTime.fromFormat(t4, n2);
    return e4.isValid ? e4 : null;
  }) ?? null : null;
}
function R(t4) {
  if (!t4 || !t2(t4)) return null;
  const n2 = DateTime.fromISO(t4);
  return n2.isValid ? n2 : null;
}
function $(t4) {
  const {
    type: n2,
    range: e4,
    value: o3
  } = t4;
  if (null == o3 || !e4 || o3 === e4.min || o3 === e4.max) return true;
  if ("date" === n2) return N({
    value: o3,
    min: e4.min,
    max: e4.max
  });
  const {
    rawMax: l2,
    rawMin: r2
  } = e4;
  let i3 = null, u3 = null, a2 = null;
  switch (n2) {
    case "date-only":
      i3 = E2(l2), u3 = E2(r2), a2 = E2(o3);
      break;
    case "time-only":
      i3 = J(l2), u3 = J(r2), a2 = J(o3);
      break;
    case "timestamp-offset":
      i3 = R(l2), u3 = R(r2), a2 = R(o3);
  }
  return !a2 || N({
    value: a2.valueOf(),
    min: u3?.valueOf(),
    max: i3?.valueOf()
  });
}

// ../../../node_modules/@arcgis/core/layers/support/domainUtils.js
var l;
!function(e4) {
  e4.VALUE_OUT_OF_RANGE = "domain-validation-error::value-out-of-range", e4.INVALID_CODED_VALUE = "domain-validation-error::invalid-coded-value";
}(l || (l = {}));
var t3 = /* @__PURE__ */ new Set(["integer", "small-integer", "big-integer", "esriFieldTypeInteger", "esriFieldTypeSmallInteger", "esriFieldTypeBigInteger"]);
function r(e4) {
  return null != e4 && t3.has(e4.type);
}
function a(e4) {
  return null != e4 && ("date-only" === e4.type || "esriFieldTypeDateOnly" === e4.type);
}
function u(e4) {
  return null != e4 && ("timestamp-offset" === e4.type || "esriFieldTypeTimestampOffset" === e4.type);
}
function o2(e4) {
  return null != e4 && ("time-only" === e4.type || "esriFieldTypeTimeOnly" === e4.type);
}
function s2(e4, n2, i3) {
  const t4 = i3 ?? e4?.domain;
  if (!t4) return null;
  switch (t4.type) {
    case "range": {
      const {
        min: t5,
        max: r2
      } = m(e4, i3);
      if (null != t5 && +n2 < t5 || null != r2 && +n2 > r2) return l.VALUE_OUT_OF_RANGE;
      break;
    }
    case "coded-value":
    case "codedValue":
      if (null == t4.codedValues || t4.codedValues.every((e5) => null == e5 || e5.code !== n2)) return l.INVALID_CODED_VALUE;
  }
  return null;
}
function m(e4, n2) {
  const i3 = n2 ?? e4?.domain;
  if (!i3 || "range" !== i3.type) return;
  const l2 = "range" in i3 ? i3.range[0] : i3.minValue, t4 = "range" in i3 ? i3.range[1] : i3.maxValue, s3 = r(e4);
  return a(e4) || o2(e4) || u(e4) ? __spreadProps(__spreadValues({}, d(e4, t4, l2)), {
    isInteger: s3
  }) : {
    min: null != l2 && "number" == typeof l2 ? l2 : null,
    max: null != t4 && "number" == typeof t4 ? t4 : null,
    rawMin: l2,
    rawMax: t4,
    isInteger: s3
  };
}
function d(l2, t4, r2) {
  return a(l2) ? {
    min: E2(r2)?.toMillis(),
    max: E2(t4)?.toMillis(),
    rawMin: r2,
    rawMax: t4
  } : o2(l2) ? {
    min: J(r2)?.toMillis(),
    max: J(t4)?.toMillis(),
    rawMin: r2,
    rawMax: t4
  } : u(l2) ? {
    min: R(r2)?.toMillis(),
    max: R(t4)?.toMillis(),
    rawMin: r2,
    rawMax: t4
  } : {
    max: null,
    min: null
  };
}

// ../../../node_modules/@arcgis/core/layers/support/fieldUtils.js
var u2 = /^([0-9_])/;
var f2 = /[^a-z0-9_\u0080-\uffff]+/gi;
function c2(e4) {
  if (null == e4) return null;
  return e4.trim().replaceAll(f2, "_").replace(u2, "F$1") || null;
}
var d2 = ["field", "field2", "field3", "normalizationField", "rotationInfo.field", "proportionalSymbolInfo.field", "proportionalSymbolInfo.normalizationField", "colorInfo.field", "colorInfo.normalizationField"];
var m2 = ["field", "normalizationField"];
function p2(e4, n2) {
  if (null != e4 && null != n2) {
    for (const i3 of Array.isArray(e4) ? e4 : [e4]) if (y2(d2, i3, n2), "visualVariables" in i3 && i3.visualVariables) for (const e5 of i3.visualVariables) y2(m2, e5, n2);
  }
}
function y2(e4, t4, r2) {
  if (e4) for (const l2 of e4) {
    const e5 = t(l2, t4), o3 = e5 && "function" != typeof e5 && r2.get(e5);
    o3 && e(l2, o3.name, t4);
  }
}
function g2(e4, n2) {
  if (null != e4 && n2?.fields?.length) if ("startField" in e4) {
    const i3 = n2.get(e4.startField), t4 = n2.get(e4.endField);
    e4.startField = i3?.name ?? null, e4.endField = t4?.name ?? null;
  } else {
    const i3 = n2.get(e4.startTimeField), t4 = n2.get(e4.endTimeField);
    e4.startTimeField = i3?.name ?? null, e4.endTimeField = t4?.name ?? null;
  }
}
var F2 = /* @__PURE__ */ new Set();
function I3(e4, n2) {
  return e4 && n2 ? (F2.clear(), b(F2, e4, n2), Array.from(F2).sort()) : [];
}
function b(e4, n2, i3) {
  if (i3) if (n2?.fields?.length) {
    if (i3.includes("*")) for (const {
      name: t4
    } of n2.fields) e4.add(t4);
    else for (const t4 of i3) w2(e4, n2, t4);
  } else {
    if (i3.includes("*")) return e4.clear(), void e4.add("*");
    for (const n3 of i3) null != n3 && e4.add(n3);
  }
}
function w2(e4, n2, i3) {
  if ("string" == typeof i3) if (n2) {
    const t4 = n2.get(i3);
    t4 && e4.add(t4.name);
  } else e4.add(i3);
}
function x2(e4, n2) {
  return null == n2 || null == e4 ? [] : n2.includes("*") ? (e4.fields ?? []).map((e5) => e5.name) : n2;
}
function T2(e4, n2, i3 = 1) {
  if (!n2 || !e4) return [];
  if (n2.includes("*")) return ["*"];
  const t4 = I3(e4, n2);
  return t4.length / e4.fields.length >= i3 ? ["*"] : t4;
}
function h2(e4, n2, i3) {
  return __async(this, null, function* () {
    if (!i3) return;
    const {
      arcadeUtils: t4
    } = yield i2(), r2 = t4.extractFieldNames(i3, n2?.fields?.map((e5) => e5.name));
    for (const l2 of r2) w2(e4, n2, l2);
  });
}
function E3(n2, i3, t4) {
  return __async(this, null, function* () {
    if (t4 && "1=1" !== t4) {
      const l2 = yield e2(t4, i3);
      if (!l2.isStandardized) throw new s("fieldUtils:collectFilterFields", "Where clause is not standardized", {
        where: t4
      });
      b(n2, i3, l2.fieldNames);
    }
  });
}
function _2({
  displayField: e4,
  fields: n2
}) {
  return e4 || (n2?.length ? S2(n2, "name-or-title") || S2(n2, "unique-identifier") || S2(n2, "type-or-category") || A2(n2) : null);
}
function A2(e4) {
  for (const n2 of e4) {
    if (!n2?.name) continue;
    const e5 = n2.name.toLowerCase();
    if (e5.includes("name") || e5.includes("title")) return n2.name;
  }
  return null;
}
function S2(e4, n2) {
  for (const i3 of e4) if (i3?.valueType && i3.valueType === n2) return i3.name;
  return null;
}
function v2(e4, n2) {
  return __async(this, null, function* () {
    if (!n2) return;
    const i3 = n2.elevationInfo?.featureExpressionInfo;
    return i3 ? i3.collectRequiredFields(e4, n2.fieldsIndex) : void 0;
  });
}
function $2(e4, n2, i3) {
  i3.onStatisticExpression ? h2(e4, n2, i3.onStatisticExpression.expression) : e4.add(i3.onStatisticField);
}
function L(e4, n2, i3) {
  return __async(this, null, function* () {
    if (!n2 || !i3 || !("fields" in i3)) return;
    const t4 = [], r2 = i3.popupTemplate;
    t4.push(D2(e4, n2, r2)), i3.fields && t4.push(...i3.fields.map((i4) => __async(this, null, function* () {
      return $2(e4, n2.fieldsIndex, i4);
    }))), yield Promise.all(t4);
  });
}
function D2(e4, n2, i3) {
  return __async(this, null, function* () {
    const t4 = [];
    i3?.expressionInfos && t4.push(...i3.expressionInfos.map((i4) => h2(e4, n2.fieldsIndex, i4.expression)));
    const r2 = i3?.content;
    if (Array.isArray(r2)) for (const l2 of r2) "expression" === l2.type && l2.expressionInfo && t4.push(h2(e4, n2.fieldsIndex, l2.expressionInfo.expression));
    yield Promise.all(t4);
  });
}
function M2(e4, n2, i3) {
  return __async(this, null, function* () {
    n2 && (n2.timeInfo && i3?.timeExtent && b(e4, n2.fieldsIndex, [n2.timeInfo.startField, n2.timeInfo.endField]), n2.floorInfo && b(e4, n2.fieldsIndex, [n2.floorInfo.floorField]), null != i3?.where && (yield E3(e4, n2.fieldsIndex, i3.where)));
  });
}
function O2(e4, n2, i3) {
  return __async(this, null, function* () {
    n2 && i3 && (yield Promise.all(i3.map((i4) => V2(e4, n2, i4))));
  });
}
function V2(e4, n2, i3) {
  return __async(this, null, function* () {
    n2 && i3 && (i3.valueExpression ? yield h2(e4, n2.fieldsIndex, i3.valueExpression) : i3.field && w2(e4, n2.fieldsIndex, i3.field));
  });
}
function j3(e4) {
  return e4 ? I3(e4.fieldsIndex, z2(e4)) : [];
}
function R2(e4) {
  if (!e4) return [];
  const n2 = e4.geometryFieldsInfo;
  return n2 ? I3(e4.fieldsIndex, [n2.shapeAreaField, n2.shapeLengthField]) : [];
}
var C2 = /* @__PURE__ */ new Set(["oid", "global-id", "guid"]);
var G = /* @__PURE__ */ new Set(["oid", "global-id"]);
var k3 = [/^fnode_$/i, /^tnode_$/i, /^lpoly_$/i, /^rpoly_$/i, /^poly_$/i, /^shape$/i, /^shape_$/i, /^subclass$/i, /^subclass_$/i, /^rings_ok$/i, /^rings_nok$/i, /perimeter/i, /objectid/i, /_i$/i];
function X(e4) {
  const n2 = /* @__PURE__ */ new Set();
  P(e4).forEach((e5) => n2.add(e5)), R2(e4).forEach((e5) => n2.add(e5.toLowerCase()));
  const i3 = e4 && "infoFor3D" in e4 ? e4.infoFor3D : void 0;
  return i3 && (Object.values(i3.assetMapFieldRoles).forEach((e5) => n2.add(e5.toLowerCase())), Object.values(i3.transformFieldRoles).forEach((e5) => n2.add(e5.toLowerCase()))), Array.from(n2);
}
function z2(e4) {
  if (!e4) return [];
  const n2 = "editFieldsInfo" in e4 && e4.editFieldsInfo;
  if (!n2) return [];
  const {
    creationDateField: i3,
    creatorField: t4,
    editDateField: r2,
    editorField: l2
  } = n2;
  return [i3, t4, r2, l2].filter(Boolean);
}
function P(e4) {
  return z2(e4).map((e5) => e5.toLowerCase());
}
function q(e4, n2) {
  return e4.editable && !C2.has(e4.type) && !P(n2).includes(e4.name?.toLowerCase() ?? "");
}
function B(e4, n2) {
  const i3 = e4.name?.toLowerCase() ?? "";
  return !(null != n2?.objectIdField && i3 === n2.objectIdField.toLowerCase() || null != n2?.globalIdField && i3 === n2.globalIdField.toLowerCase() || X(n2).includes(i3) || G.has(e4.type) || k3.some((e5) => e5.test(i3)));
}
function J2(e4, n2) {
  return __async(this, null, function* () {
    const {
      labelingInfo: i3,
      fieldsIndex: t4
    } = n2;
    i3?.length && (yield Promise.all(i3.map((n3) => W(e4, t4, n3))));
  });
}
function W(e4, n2, i3) {
  return __async(this, null, function* () {
    if (!i3) return;
    const t4 = i3.getLabelExpression(), r2 = i3.where;
    if ("arcade" === t4.type) yield h2(e4, n2, t4.expression);
    else {
      const i4 = t4.expression.match(/{[^}]*}/g);
      i4 && i4.forEach((i5) => {
        w2(e4, n2, i5.slice(1, -1));
      });
    }
    yield E3(e4, n2, r2);
  });
}
function H2(e4) {
  const n2 = e4.defaultValue;
  return void 0 !== n2 && re(e4, n2) ? n2 : e4.nullable ? null : void 0;
}
function K(e4) {
  const n2 = "string" == typeof e4 ? {
    type: e4
  } : e4;
  return ye(n2) ? 255 : "esriFieldTypeDate" === n2.type || "date" === n2.type ? 8 : void 0;
}
function Q(e4) {
  return "number" == typeof e4 && !isNaN(e4) && isFinite(e4);
}
function Z2(e4) {
  return null === e4 || Q(e4);
}
function ee(e4) {
  return null === e4 || Number.isInteger(e4);
}
function ne(e4) {
  return null != e4 && "string" == typeof e4;
}
function ie(e4) {
  return null === e4 || ne(e4);
}
function te() {
  return true;
}
function re(e4, n2) {
  let i3;
  switch (e4.type) {
    case "date":
    case "integer":
    case "long":
    case "small-integer":
    case "big-integer":
    case "esriFieldTypeDate":
    case "esriFieldTypeInteger":
    case "esriFieldTypeLong":
    case "esriFieldTypeSmallInteger":
    case "esriFieldTypeBigInteger":
      i3 = e4.nullable ? ee : Number.isInteger;
      break;
    case "double":
    case "single":
    case "esriFieldTypeSingle":
    case "esriFieldTypeDouble":
      i3 = e4.nullable ? Z2 : Q;
      break;
    case "string":
    case "esriFieldTypeString":
      i3 = e4.nullable ? ie : ne;
      break;
    default:
      i3 = te;
  }
  return 1 === arguments.length ? i3 : i3(n2);
}
var le = ["integer", "small-integer", "big-integer"];
var oe = ["single", "double"];
var se = [...le, ...oe];
var ae = ["esriFieldTypeInteger", "esriFieldTypeSmallInteger", "esriFieldTypeBigInteger"];
var ue = ["esriFieldTypeSingle", "esriFieldTypeDouble"];
var fe = /* @__PURE__ */ new Set([...le, ...ae]);
var ce = /* @__PURE__ */ new Set([...oe, ...ue]);
var de = o(fe, ce);
function me(e4) {
  return null != e4 && fe.has(e4.type);
}
function pe(e4) {
  return null != e4 && de.has(e4.type);
}
function ye(e4) {
  return null != e4 && ("string" === e4.type || "esriFieldTypeString" === e4.type);
}
function ge(e4) {
  return null != e4 && ("date" === e4.type || "esriFieldTypeDate" === e4.type);
}
function Fe(e4) {
  return null != e4 && ("date-only" === e4.type || "esriFieldTypeDateOnly" === e4.type);
}
function Ie(e4) {
  return null != e4 && ("timestamp-offset" === e4.type || "esriFieldTypeTimestampOffset" === e4.type);
}
function be(e4) {
  return null != e4 && ("time-only" === e4.type || "esriFieldTypeTimeOnly" === e4.type);
}
function we(e4) {
  return null != e4 && ("oid" === e4.type || "esriFieldTypeOID" === e4.type);
}
function xe(e4) {
  return null != e4 && ("global-id" === e4.type || "esriFieldTypeGlobalID" === e4.type);
}
function Te(e4, n2) {
  return null === Ae(e4, n2);
}
var he;
var Ee;
function _e(e4) {
  return null == e4 || "number" == typeof e4 && isNaN(e4) ? null : e4;
}
function Ae(e4, n2) {
  return null == e4 || e4.nullable && null === n2 ? null : pe(e4) && !Se(e4.type, Number(n2)) ? he.OUT_OF_RANGE : re(e4, n2) ? e4.domain ? s2(e4, n2) : null : Ee.INVALID_TYPE;
}
function Se(e4, n2) {
  const i3 = "string" == typeof e4 ? ve(e4) : e4;
  if (!i3) return false;
  const t4 = i3.min, r2 = i3.max;
  return i3.isInteger ? Number.isInteger(n2) && n2 >= t4 && n2 <= r2 : n2 >= t4 && n2 <= r2;
}
function Ne(e4, n2) {
  const i3 = m(e4, n2);
  return i3 || (pe(e4) ? ve(e4.type) : void 0);
}
function ve(e4) {
  switch (e4) {
    case "esriFieldTypeSmallInteger":
    case "small-integer":
      return Le;
    case "esriFieldTypeInteger":
    case "integer":
      return De;
    case "esriFieldTypeBigInteger":
    case "big-integer":
      return Me;
    case "esriFieldTypeSingle":
    case "single":
      return Oe;
    case "esriFieldTypeDouble":
    case "double":
      return Ve;
  }
}
!function(e4) {
  e4.OUT_OF_RANGE = "numeric-range-validation-error::out-of-range";
}(he || (he = {})), function(e4) {
  e4.INVALID_TYPE = "type-validation-error::invalid-type";
}(Ee || (Ee = {}));
var Le = {
  min: -32768,
  max: 32767,
  isInteger: true,
  rawMin: -32768,
  rawMax: 32767
};
var De = {
  min: -2147483648,
  max: 2147483647,
  isInteger: true,
  rawMin: -2147483648,
  rawMax: 2147483647
};
var Me = {
  min: -Number.MAX_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  isInteger: true,
  rawMin: -Number.MAX_SAFE_INTEGER,
  rawMax: Number.MAX_SAFE_INTEGER
};
var Oe = {
  min: -34e37,
  max: 12e37,
  isInteger: false,
  rawMin: -34e37,
  rawMax: 12e37
};
var Ve = {
  min: -Number.MAX_VALUE,
  max: Number.MAX_VALUE,
  isInteger: false,
  rawMin: -Number.MAX_VALUE,
  rawMax: Number.MAX_VALUE
};
function Ue(e4, n2, i3) {
  switch (e4) {
    case l.INVALID_CODED_VALUE:
      return `Value ${i3} is not in the coded domain - field: ${n2.name}, domain: ${JSON.stringify(n2.domain)}`;
    case l.VALUE_OUT_OF_RANGE:
      return `Value ${i3} is out of the range of valid values - field: ${n2.name}, domain: ${JSON.stringify(n2.domain)}`;
    case Ee.INVALID_TYPE:
      return `Value ${i3} is not a valid value for the field type - field: ${n2.name}, type: ${n2.type}, nullable: ${n2.nullable}`;
    case he.OUT_OF_RANGE: {
      const {
        min: e5,
        max: t4
      } = ve(n2.type);
      return `Value ${i3} is out of range for the number type - field: ${n2.name}, type: ${n2.type}, value range is ${e5} to ${t4}`;
    }
  }
}
function je(e4, n2) {
  return !Re(e4, n2, null);
}
function Re(e4, n2, i3) {
  if (!n2?.attributes || !e4) {
    if (null != i3) for (const n3 of e4 ?? []) i3.add(n3);
    return true;
  }
  const t4 = new Set(Object.keys(n2.attributes));
  let r2 = false;
  for (const l2 of e4) if (!t4.has(l2)) {
    if (r2 = true, null == i3) break;
    i3.add(l2);
  }
  return r2;
}
function Ge(e4) {
  return !!e4 && ["raster.itempixelvalue", "raster.servicepixelvalue"].some((n2) => e4.toLowerCase().startsWith(n2));
}
function Xe(e4) {
  const n2 = e4?.match(/{[^}]+}/g);
  return n2 ? n2.map((e5) => e5.slice(1, -1).split(":")[0].trim()) : [];
}

export {
  n,
  t2 as t,
  h,
  S,
  v,
  w,
  H,
  j2 as j,
  I2 as I,
  V,
  F,
  T,
  D,
  C,
  U,
  _,
  k2 as k,
  $,
  l,
  s2 as s,
  m,
  d,
  c2 as c,
  p2 as p,
  g2 as g,
  I3 as I2,
  b,
  w2,
  x2 as x,
  T2,
  h2,
  _2,
  v2,
  L,
  M2 as M,
  O2 as O,
  j3 as j2,
  X,
  P,
  q,
  B,
  J2 as J,
  H2,
  K,
  me,
  pe,
  ye,
  ge,
  Fe,
  Ie,
  be,
  we,
  xe,
  Te,
  he,
  Ee,
  _e,
  Ae,
  Ne,
  Ue,
  je,
  Re,
  Ge,
  Xe
};
//# sourceMappingURL=chunk-DTUSTSEJ.js.map
