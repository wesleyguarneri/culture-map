import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  B,
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import {
  a
} from "./chunk-6JFGZTLU.js";
import {
  O
} from "./chunk-2ZJE6ZFX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/support/DimensionalDefinition.js
var a3;
var n = a3 = class extends f {
  constructor(e2) {
    super(e2), this.variableName = null, this.dimensionName = null, this.values = [], this.isSlice = false;
  }
  clone() {
    return new a3({
      variableName: this.variableName,
      dimensionName: this.dimensionName,
      values: a(this.values),
      isSlice: this.isSlice
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], n.prototype, "variableName", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], n.prototype, "dimensionName", void 0), e([y({
  type: B.array(B.oneOf([B.native(Number), B.array(B.native(Number))])),
  json: {
    write: true
  }
})], n.prototype, "values", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], n.prototype, "isSlice", void 0), n = a3 = e([a2("esri.layers.support.DimensionalDefinition")], n);
var p = n;

// ../../../node_modules/@arcgis/core/layers/support/rasterDatasets/multidimensionalUtils.js
function t(e2, n2, i2) {
  const a5 = n2.shift();
  if (0 === i2.length) {
    const e3 = [];
    i2.push({
      sliceId: -1,
      multidimensionalDefinition: e3
    });
  }
  const s2 = i2.length;
  for (let t2 = 0; t2 < s2; t2++) {
    const n3 = i2.shift().multidimensionalDefinition;
    a5.values?.forEach((t3) => {
      i2.push({
        sliceId: -1,
        multidimensionalDefinition: [...n3, {
          variableName: e2,
          dimensionName: a5.name,
          values: [t3]
        }]
      });
    });
  }
  n2.length && t(e2, n2, i2);
}
function i(e2, n2) {
  const i2 = [];
  let a5 = 0;
  return (n2 ? e2.variables.filter((e3) => e3.name.toLowerCase() === n2.toLowerCase()) : [...e2.variables].sort((e3, n3) => e3.name > n3.name ? 1 : -1)).forEach((e3) => {
    const n3 = [], s2 = [...e3.dimensions].sort((e4, n4) => e4.name > n4.name ? -1 : 1);
    t(e3.name, s2, n3), n3.forEach((e4) => {
      i2.push(__spreadProps(__spreadValues({}, e4), {
        sliceId: a5++
      }));
    });
  }), i2;
}
function a4(e2, n2, t2) {
  let i2 = e2;
  if (n2 && (n2 = [...n2].sort((e3, n3) => e3.dimensionName < n3.dimensionName ? -1 : 1)).forEach(({
    dimensionName: e3,
    values: n3,
    isSlice: t3
  }) => {
    n3.length && (i2 = i2.filter((i3) => {
      const a5 = i3.multidimensionalDefinition.find((n4) => n4.dimensionName === e3);
      if (null == a5) return false;
      const s2 = a5.values[0];
      return "number" == typeof s2 ? "number" == typeof n3[0] ? n3.includes(s2) : n3.some((e4) => e4[0] <= s2 && e4[1] >= s2) : "number" == typeof n3[0] ? n3.some((e4) => s2[0] <= e4 && s2[1] >= e4) : t3 ? n3.some((e4) => e4[0] === s2[0] && e4[0] === s2[1]) : n3.some((e4) => e4[0] >= s2[0] && e4[0] <= s2[1] || e4[1] >= s2[0] && e4[1] <= s2[1] || e4[0] < s2[0] && e4[1] > s2[1]);
    }));
  }), i2.length && null != t2?.start && null != t2.end) {
    const e3 = t2.start.getTime(), n3 = t2.end.getTime(), a5 = i2[0].multidimensionalDefinition.findIndex((e4) => "StdTime" === e4.dimensionName);
    a5 > -1 && (i2 = i2.filter((t3) => {
      const i3 = t3.multidimensionalDefinition[a5].values[0];
      return e3 <= i3 && n3 >= i3;
    }));
  }
  return i2.map((e3) => e3.sliceId);
}
function s(e2, n2) {
  return Array.isArray(e2) ? n2[0] === n2[1] ? e2[0] === n2[0] || e2[1] === n2[0] : e2[0] >= n2[0] && e2[0] <= n2[1] && e2[1] >= n2[0] && e2[1] <= n2[1] : e2 >= n2[0] && e2 <= n2[1];
}
function r(e2, n2) {
  return e2[0] <= n2[0] && e2[1] >= n2[0] || e2[0] <= n2[1] && e2[1] >= n2[1] || e2[0] >= n2[0] && e2[1] <= n2[1];
}
function l(e2) {
  return 1 === e2.length ? [e2[0], e2[0]] : [e2[0], e2[e2.length - 1]];
}
function u(e2, n2, t2) {
  if (!n2?.subsetDefinitions?.length) return e2;
  let i2;
  if (t2) {
    const {
      variables: a6
    } = n2;
    if (a6.length && !a6.includes(t2)) return null;
    const s2 = n2.subsetDefinitions.find((n3) => n3.dimensionName === e2.name && n3.variableName === t2);
    if (!s2?.values?.length) return e2;
    i2 = l(s2.values);
  } else {
    const t3 = n2.dimensions.find(({
      name: n3
    }) => n3 === e2.name);
    i2 = t3?.extent;
  }
  const a5 = i2;
  if (!a5?.length) return e2;
  const r2 = e2.values.filter((e3) => s(e3, a5));
  return __spreadProps(__spreadValues({}, e2), {
    extent: [...a5],
    values: r2
  });
}
function o(e2, n2, t2) {
  if (!n2?.subsetDefinitions?.length) return false;
  const {
    variables: i2
  } = n2;
  if (i2.length && e2.some(({
    variableName: e3
  }) => e3 && !i2.includes(e3))) return true;
  for (let a5 = 0; a5 < e2.length; a5++) {
    const i3 = e2[a5], u2 = n2.subsetDefinitions.find((e3) => ("" === i3.variableName || e3.variableName === i3.variableName) && e3.dimensionName === i3.dimensionName);
    if (u2?.values.length) {
      const e3 = l(u2.values);
      if (!i3.isSlice && 2 === i3.values.length && !Array.isArray(i3.values[0]) && i3.values[0] !== i3.values[1] && t2) {
        if (!r(i3.values, e3)) return true;
      } else if (i3.values.some((n3) => !s(n3, e3))) return true;
    }
  }
  return false;
}
function m(e2, n2) {
  if (null == e2) return {
    isOutside: false
  };
  const {
    geometry: t2,
    timeExtent: i2,
    multidimensionalDefinition: a5
  } = n2;
  let s2 = null;
  if (null != i2 && (s2 = c(e2, i2), null == s2)) return {
    isOutside: true
  };
  const {
    areaOfInterest: r2
  } = e2;
  if (r2 && t2) {
    const e3 = "point" === t2.type ? t2 : "extent" === t2.type ? t2.center : "polygon" === t2.type ? t2.centroid : null;
    if (e3 && !r2.contains(e3)) return {
      isOutside: true
    };
  }
  return null != a5 && a5.length && o(a5, e2, true) ? {
    isOutside: true
  } : {
    isOutside: false,
    intersection: {
      geometry: t2,
      timeExtent: s2,
      multidimensionalDefinition: a5
    }
  };
}
function c(e2, t2) {
  const i2 = e2.dimensions.find(({
    name: e3
  }) => "StdTime" === e3);
  if (null == i2 || null == t2.start && null == t2.end) return t2;
  t2 = t2.clone();
  const {
    start: a5,
    end: s2
  } = t2.toJSON(), r2 = a5 === s2 ? [a5] : null != a5 && null != s2 ? [a5, s2] : [a5 ?? s2];
  if (2 === r2.length && i2?.extent.length && (r2[0] = Math.max(r2[0], i2.extent[0]), r2[1] = Math.min(r2[1], i2.extent[1] ?? i2.extent[0]), r2[1] < r2[0])) return null;
  return o([new p({
    variableName: "",
    dimensionName: "StdTime",
    isSlice: 1 === r2.length,
    values: r2
  })], e2, true) ? null : (t2.start = new Date(r2[0]), t2.end = new Date(r2[1] ?? r2[0]), t2);
}
function f2(e2, n2 = {}) {
  const {
    multidimensionalInfo: t2,
    keyProperties: i2
  } = e2;
  if (null == t2) return null;
  const {
    variableName: a5,
    multidimensionalSubset: s2,
    multidimensionalDefinition: r2
  } = n2, l2 = null != r2 ? r2[0]?.variableName : null, u2 = a5 || l2 || i2?.DefaultVariable;
  let {
    variables: o2
  } = t2;
  s2?.variables?.length && (o2 = o2.filter(({
    name: e3
  }) => s2.variables.includes(e3)));
  return u2 ? o2.find(({
    name: e3
  }) => e3 === u2) ?? o2[0] : o2[0];
}
function d(e2, t2 = {}) {
  const i2 = f2(e2, t2);
  if (!i2) return null;
  const a5 = [], {
    dimensions: s2,
    name: r2
  } = i2;
  if (0 === s2.length) return [new p({
    variableName: r2,
    dimensionName: "",
    values: [],
    isSlice: true
  })];
  for (let l2 = 0; l2 < s2.length; l2++) {
    const e3 = u(s2[l2], t2.multidimensionalSubset, r2);
    if (!e3) return null;
    const {
      values: i3,
      extent: o2
    } = e3;
    let m2 = i3?.[0] ?? o2?.[0];
    "stdz" === e3.name.toLowerCase() && !e3.hasRanges && o2 && Math.abs(o2[1]) <= Math.abs(o2[0]) && (m2 = i3?.length ? i3[i3.length - 1] : o2[1]), a5.push(new p({
      variableName: r2,
      dimensionName: e3.name,
      values: [m2],
      isSlice: !t2.useRangeForRangedDimensionInfo || !!e3.hasRanges
    }));
  }
  return a5;
}
function h(e2) {
  return !!e2?.length && e2.some((e3) => {
    if (null == e3.values) return true;
    const n2 = e3.values.length;
    return 0 === n2 || n2 > 1 || !e3.isSlice && Array.isArray(e3.values[0]);
  });
}
function g(n2, t2) {
  if (null == t2 || null == n2) return null;
  let i2 = t2.variables.map((e2) => __spreadValues({}, e2));
  return n2?.variables?.length && (i2 = i2.filter(({
    name: e2
  }) => n2.variables.includes(e2)), i2.forEach((t3) => {
    t3.dimensions = t3.dimensions.map((e2) => u(e2, n2, t3.name)).filter(O);
  })), i2;
}
function v(e2, n2) {
  const {
    values: t2
  } = n2;
  if (t2?.length) {
    const n3 = Array.isArray(t2[0]), i3 = Array.isArray(e2);
    return n3 !== i3 ? -1 : n3 && i3 ? t2.findIndex((n4) => n4[0] === e2[0] && n4[1] === e2[1]) : t2.indexOf(e2);
  }
  const {
    extent: i2
  } = n2;
  if (Array.isArray(e2) || !i2 || e2 < i2[0] || e2 > i2[1]) return -1;
  const a5 = n2.interval || 1;
  if ("ISO8601" !== n2.unit) return Math.round((e2 - i2[0]) / a5);
  const s2 = i2[0];
  let r2 = -1;
  switch (n2.intervalUnit?.toLowerCase() || "seconds") {
    case "seconds":
      r2 = Math.round((e2 - s2) / 1e3 / a5);
      break;
    case "minutes":
      r2 = Math.round((e2 - s2) / 6e4 / a5);
      break;
    case "hours":
      r2 = Math.round((e2 - s2) / 36e5 / a5);
      break;
    case "days":
      r2 = Math.round((e2 - s2) / 864e5 / a5);
      break;
    case "months":
      {
        const n3 = new Date(e2).getUTCFullYear() - new Date(s2).getUTCFullYear(), t3 = new Date(s2).getUTCMonth(), i3 = new Date(e2).getUTCMonth();
        r2 = 0 === n3 ? i3 - t3 : i3 + 11 - t3 + 12 * (n3 - 1);
      }
      break;
    case "years":
      r2 = Math.round((new Date(e2).getUTCFullYear() - new Date(s2).getUTCFullYear()) / a5);
      break;
    case "decades":
      r2 = Math.round((new Date(e2).getUTCFullYear() - new Date(s2).getUTCFullYear()) / 10 / a5);
  }
  return r2;
}
function b(e2) {
  let n2 = e2.values?.length;
  if (n2) return n2;
  const {
    extent: t2,
    unit: i2
  } = e2, a5 = e2.interval || 1, s2 = t2 ? t2[1] - t2[0] : 0;
  if ("ISO8601" !== i2) return Math.round(s2 / a5);
  switch (e2.intervalUnit?.toLowerCase() ?? "seconds") {
    case "seconds":
      n2 = Math.round(s2 / 1e3 / a5);
      break;
    case "minutes":
      n2 = Math.round(s2 / 6e4 / a5);
      break;
    case "hours":
      n2 = Math.round(s2 / 36e5 / a5);
      break;
    case "days":
      n2 = Math.round(s2 / 864e5 / a5);
      break;
    case "months":
      if (t2) {
        const e3 = new Date(t2[1]).getUTCFullYear() - new Date(t2[0]).getUTCFullYear(), i3 = new Date(t2[0]).getUTCMonth(), a6 = new Date(t2[1]).getUTCMonth();
        n2 = 0 === e3 ? a6 - i3 + 1 : a6 + 11 - i3 + 12 * (e3 - 1) + 1;
      } else n2 = 0;
      break;
    case "years":
      n2 = t2 ? Math.round((new Date(t2[1]).getUTCFullYear() - new Date(t2[0]).getUTCFullYear()) / a5) : 0;
      break;
    case "decades":
      n2 = t2 ? Math.round((new Date(t2[1]).getUTCFullYear() - new Date(t2[0]).getUTCFullYear()) / 10 / a5) : 0;
      break;
    default:
      n2 = 0;
  }
  return n2;
}
function D(e2, n2) {
  let t2 = 0;
  const i2 = e2[0].variableName, a5 = [...n2.variables].sort((e3, n3) => e3.name > n3.name ? 1 : -1);
  for (let s2 = 0; s2 < a5.length; s2++) {
    const n3 = a5[s2], r2 = [...n3.dimensions].sort((e3, n4) => e3.name > n4.name ? -1 : 1);
    if (n3.name !== i2) {
      t2 += r2.map((e3) => b(e3)).reduce((e3, n4) => e3 * n4);
      continue;
    }
    const l2 = r2.map((e3) => b(e3)), u2 = r2.length;
    for (let i3 = 0; i3 < u2; i3++) {
      const n4 = e2.find((e3) => e3.dimensionName === r2[i3].name);
      if (null == n4) return null;
      const a6 = v(n4.values[0], r2[i3]);
      if (-1 === a6) return null;
      l2.shift(), t2 += i3 === u2 - 1 ? a6 : a6 * l2.reduce((e3, n5) => e3 * n5);
    }
    break;
  }
  return t2;
}

export {
  p,
  i,
  a4 as a,
  o,
  m,
  f2 as f,
  d,
  h,
  g,
  D
};
//# sourceMappingURL=chunk-DSARYBLQ.js.map
