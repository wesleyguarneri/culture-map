import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a,
  d
} from "./chunk-V33IUWAS.js";

// ../../../node_modules/@arcgis/core/statistics/utils.js
var t = "<Null>";
var l = "equal-interval";
var i = 1;
var a2 = 5;
var o = 10;
var r = /\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi;
var u = /* @__PURE__ */ new Set(["esriFieldTypeDate", "esriFieldTypeInteger", "esriFieldTypeSmallInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeLong", "esriFieldTypeOID", "esriFieldTypeBigInteger"]);
var s = /* @__PURE__ */ new Set(["esriFieldTypeTimeOnly", "esriFieldTypeDateOnly"]);
var m = ["min", "max", "avg", "stddev", "count", "sum", "variance", "nullcount", "median"];
function c(n) {
  return null == n || "string" == typeof n && !n ? t : n;
}
function f(n) {
  const e = null != n.normalizationField || null != n.normalizationType, t2 = null != n.minValue || null != n.maxValue, l2 = !!n.sqlExpression && n.supportsSQLExpression;
  return !e && !t2 && !l2;
}
function d2(n) {
  const e = n.returnDistinct ? [...new Set(n.values)] : n.values, t2 = e.filter((n2) => null != n2).sort(), l2 = t2.length, i2 = {
    count: l2,
    min: t2[0],
    max: t2[l2 - 1]
  };
  return n.supportsNullCount && (i2.nullcount = e.length - l2), n.percentileParams && (i2.median = v(e, n.percentileParams)), i2;
}
function p(n) {
  const {
    values: e,
    useSampleStdDev: t2,
    supportsNullCount: l2
  } = n;
  let i2 = Number.POSITIVE_INFINITY, a3 = Number.NEGATIVE_INFINITY, o2 = null, r2 = null, u2 = null, s2 = null, m2 = 0;
  const c2 = null == n.minValue ? -1 / 0 : n.minValue, f2 = null == n.maxValue ? 1 / 0 : n.maxValue;
  for (const p2 of e) Number.isFinite(p2) ? p2 >= c2 && p2 <= f2 && (o2 = null === o2 ? p2 : o2 + p2, i2 = Math.min(i2, p2), a3 = Math.max(a3, p2), m2++) : "string" == typeof p2 && m2++;
  if (m2 && null != o2) {
    r2 = o2 / m2;
    let n2 = 0;
    for (const t3 of e) Number.isFinite(t3) && t3 >= c2 && t3 <= f2 && (n2 += (t3 - r2) ** 2);
    s2 = t2 ? m2 > 1 ? n2 / (m2 - 1) : 0 : m2 > 0 ? n2 / m2 : 0, u2 = Math.sqrt(s2);
  } else i2 = null, a3 = null;
  const d3 = {
    avg: r2,
    count: m2,
    max: a3,
    min: i2,
    stddev: u2,
    sum: o2,
    variance: s2
  };
  return l2 && (d3.nullcount = e.length - m2), n.percentileParams && (d3.median = v(e, n.percentileParams)), d3;
}
function v(n, e) {
  const {
    fieldType: t2,
    value: l2,
    orderBy: i2,
    isDiscrete: a3
  } = e, o2 = T(t2, "desc" === i2);
  if (0 === (n = [...n].filter((n2) => null != n2).sort((n2, e2) => o2(n2, e2))).length) return null;
  if (l2 <= 0) return n[0];
  if (l2 >= 1) return n[n.length - 1];
  const r2 = (n.length - 1) * l2, u2 = Math.floor(r2), s2 = u2 + 1, m2 = r2 % 1, c2 = n[u2], f2 = n[s2];
  return s2 >= n.length || a3 || "string" == typeof c2 || "string" == typeof f2 ? c2 : c2 * (1 - m2) + f2 * m2;
}
function T(n, e) {
  if (n) {
    if (u.has(n)) return S(e);
    if (s.has(n)) return z(e, false);
    if ("esriFieldTypeTimestampOffset" === n) return x(e);
    const t3 = z(e, true);
    if ("esriFieldTypeString" === n) return t3;
    if ("esriFieldTypeGUID" === n || "esriFieldTypeGlobalID" === n) return (n2, e2) => t3(M(n2), M(e2));
  }
  const t2 = e ? 1 : -1, l2 = S(e), i2 = z(e, true);
  return (n2, e2) => "number" == typeof n2 && "number" == typeof e2 ? l2(n2, e2) : "string" == typeof n2 && "string" == typeof e2 ? i2(n2, e2) : t2;
}
var g = (n, e) => null == n ? null == e ? 0 : 1 : null == e ? -1 : null;
var h = (n, e) => null == n ? null == e ? 0 : -1 : null == e ? 1 : null;
function V(n) {
  return n ? g : h;
}
var b = (n, e) => h(n, e) ?? (n === e ? 0 : new Date(n).getTime() - new Date(e).getTime());
var y = (n, e) => g(n, e) ?? (n === e ? 0 : new Date(e).getTime() - new Date(n).getTime());
function x(n) {
  return n ? y : b;
}
var F = (n, e) => h(n, e) ?? (n === e ? 0 : n < e ? -1 : 1);
var D = (n, e) => g(n, e) ?? (n === e ? 0 : n < e ? 1 : -1);
function z(n, e) {
  if (!e) return n ? D : F;
  const t2 = V(n);
  return n ? (n2, e2) => {
    const l2 = t2(n2, e2);
    return null != l2 ? l2 : (n2 = n2.toUpperCase()) > (e2 = e2.toUpperCase()) ? -1 : n2 < e2 ? 1 : 0;
  } : (n2, e2) => {
    const l2 = t2(n2, e2);
    return null != l2 ? l2 : (n2 = n2.toUpperCase()) < (e2 = e2.toUpperCase()) ? -1 : n2 > e2 ? 1 : 0;
  };
}
var I = (n, e) => g(n, e) ?? e - n;
var N = (n, e) => h(n, e) ?? n - e;
function S(n) {
  return n ? I : N;
}
function M(n) {
  return n.substr(24, 12) + n.substr(19, 4) + n.substr(16, 2) + n.substr(14, 2) + n.substr(11, 2) + n.substr(9, 2) + n.substr(6, 2) + n.substr(4, 2) + n.substr(2, 2) + n.substr(0, 2);
}
function C(n, e) {
  let t2;
  for (t2 in n) m.includes(t2) && (Number.isFinite(n[t2]) || (n[t2] = null));
  return e ? (["avg", "stddev", "variance"].forEach((e2) => {
    null != n[e2] && (n[e2] = Math.ceil(n[e2] ?? 0));
  }), n) : n;
}
function k(n) {
  const e = {};
  for (let t2 of n) (null == t2 || "string" == typeof t2 && "" === t2.trim()) && (t2 = null), null == e[t2] ? e[t2] = {
    count: 1,
    data: t2
  } : e[t2].count++;
  return {
    count: e
  };
}
function w(n) {
  return "coded-value" !== n?.type ? [] : n.codedValues.map((n2) => n2.code);
}
function $(n, e, t2, l2) {
  const i2 = n.count, a3 = [];
  if (t2 && e) {
    const n2 = [], t3 = w(e[0]);
    for (const i3 of t3) if (e[1]) {
      const t4 = w(e[1]);
      for (const a4 of t4) if (e[2]) {
        const t5 = w(e[2]);
        for (const e2 of t5) n2.push(`${c(i3)}${l2}${c(a4)}${l2}${c(e2)}`);
      } else n2.push(`${c(i3)}${l2}${c(a4)}`);
    } else n2.push(i3);
    for (const e2 of n2) i2.hasOwnProperty(e2) || (i2[e2] = {
      data: e2,
      count: 0
    });
  }
  for (const o2 in i2) {
    const n2 = i2[o2];
    a3.push({
      value: n2.data,
      count: n2.count,
      label: n2.label
    });
  }
  return {
    uniqueValueInfos: a3
  };
}
function B(n, e, t2, l2) {
  let i2 = null;
  switch (e) {
    case "log":
      0 !== n && (i2 = Math.log(n) * Math.LOG10E);
      break;
    case "percent-of-total":
      Number.isFinite(l2) && 0 !== l2 && (i2 = n / l2 * 100);
      break;
    case "field":
      Number.isFinite(t2) && 0 !== t2 && (i2 = n / t2);
      break;
    case "natural-log":
      n > 0 && (i2 = Math.log(n));
      break;
    case "square-root":
      n > 0 && (i2 = n ** 0.5);
  }
  return i2;
}
function E(n, t2) {
  const l2 = q({
    field: t2.field,
    normalizationType: t2.normalizationType,
    normalizationField: t2.normalizationField,
    classificationMethod: t2.classificationMethod,
    standardDeviationInterval: t2.standardDeviationInterval,
    breakCount: t2.numClasses || a2
  });
  return n = O(n, t2.minValue, t2.maxValue), a({
    definition: l2,
    values: n,
    normalizationTotal: t2.normalizationTotal
  });
}
function O(n, e, t2) {
  const l2 = e ?? -1 / 0, i2 = t2 ?? 1 / 0;
  return n.filter((n2) => Number.isFinite(n2) && n2 >= l2 && n2 <= i2);
}
function q(e) {
  const {
    breakCount: t2,
    field: a3,
    normalizationField: o2,
    normalizationType: r2
  } = e, u2 = e.classificationMethod || l, s2 = "standard-deviation" === u2 ? e.standardDeviationInterval || i : void 0;
  return new d({
    breakCount: t2,
    classificationField: a3,
    classificationMethod: u2,
    normalizationField: "field" === r2 ? o2 : void 0,
    normalizationType: r2,
    standardDeviationInterval: s2
  });
}
function P(n, e) {
  let t2 = n.classBreaks;
  const l2 = t2.length, i2 = t2[0]?.minValue, a3 = t2[l2 - 1]?.maxValue, o2 = "standard-deviation" === e, u2 = r;
  return t2 = t2.map((n2) => {
    const e2 = n2.label, t3 = {
      minValue: n2.minValue,
      maxValue: n2.maxValue,
      label: e2
    };
    if (o2 && e2) {
      const n3 = e2.match(u2), l3 = n3?.map((n4) => +n4.trim()) ?? [];
      2 === l3.length ? (t3.minStdDev = l3[0], t3.maxStdDev = l3[1], l3[0] < 0 && l3[1] > 0 && (t3.hasAvg = true)) : 1 === l3.length && (e2.includes("<") ? (t3.minStdDev = null, t3.maxStdDev = l3[0]) : e2.includes(">") && (t3.minStdDev = l3[0], t3.maxStdDev = null));
    }
    return t3;
  }), {
    minValue: i2,
    maxValue: a3,
    classBreakInfos: t2,
    normalizationTotal: n.normalizationTotal
  };
}
function U(n, e) {
  const t2 = G(n, e);
  if (null == t2.min && null == t2.max) return {
    bins: [],
    minValue: t2.min,
    maxValue: t2.max,
    normalizationTotal: e.normalizationTotal
  };
  const l2 = t2.intervals, i2 = t2.min ?? 0, a3 = t2.max ?? 0, o2 = l2.map((n2, e2) => ({
    minValue: l2[e2][0],
    maxValue: l2[e2][1],
    count: 0
  }));
  for (const r2 of n) if (null != r2 && r2 >= i2 && r2 <= a3) {
    const n2 = L(l2, r2);
    n2 > -1 && o2[n2].count++;
  }
  return {
    bins: o2,
    minValue: i2,
    maxValue: a3,
    normalizationTotal: e.normalizationTotal
  };
}
function G(n, e) {
  const {
    field: t2,
    classificationMethod: l2,
    standardDeviationInterval: i2,
    normalizationType: a3,
    normalizationField: r2,
    normalizationTotal: u2,
    minValue: s2,
    maxValue: m2
  } = e, c2 = e.numBins || o;
  let d3 = null, v2 = null, T2 = null;
  if ((!l2 || "equal-interval" === l2) && !a3) {
    if (null != s2 && null != m2) d3 = s2, v2 = m2;
    else {
      const e2 = p({
        values: n,
        minValue: s2,
        maxValue: m2,
        useSampleStdDev: !a3,
        supportsNullCount: f({
          normalizationType: a3,
          normalizationField: r2,
          minValue: s2,
          maxValue: m2
        })
      });
      d3 = e2.min ?? null, v2 = e2.max ?? null;
    }
    T2 = j(d3 ?? 0, v2 ?? 0, c2);
  } else {
    const {
      classBreaks: e2
    } = E(n, {
      field: t2,
      normalizationType: a3,
      normalizationField: r2,
      normalizationTotal: u2,
      classificationMethod: l2,
      standardDeviationInterval: i2,
      minValue: s2,
      maxValue: m2,
      numClasses: c2
    });
    d3 = e2[0].minValue, v2 = e2[e2.length - 1].maxValue, T2 = e2.map((n2) => [n2.minValue, n2.maxValue]);
  }
  return {
    min: d3,
    max: v2,
    intervals: T2
  };
}
function L(n, e) {
  let t2 = -1;
  for (let l2 = n.length - 1; l2 >= 0; l2--) {
    if (e >= n[l2][0]) {
      t2 = l2;
      break;
    }
  }
  return t2;
}
function j(n, e, t2) {
  const l2 = (e - n) / t2, i2 = [];
  let a3, o2 = n;
  for (let r2 = 1; r2 <= t2; r2++) a3 = o2 + l2, a3 = Number(a3.toFixed(16)), i2.push([o2, r2 === t2 ? e : a3]), o2 = a3;
  return i2;
}

export {
  c,
  f,
  d2 as d,
  p,
  v,
  T,
  C,
  k,
  $,
  B,
  E,
  P,
  U
};
//# sourceMappingURL=chunk-CRYYUS4E.js.map
