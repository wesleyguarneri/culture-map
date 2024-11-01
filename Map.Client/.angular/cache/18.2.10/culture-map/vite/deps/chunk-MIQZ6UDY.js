import {
  o
} from "./chunk-4ZZRP4MA.js";
import {
  n as n2
} from "./chunk-V5C6HSAM.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/rest/support/ClassBreaksDefinition.js
var a2 = new n2({
  esriClassifyEqualInterval: "equal-interval",
  esriClassifyManual: "manual",
  esriClassifyNaturalBreaks: "natural-breaks",
  esriClassifyQuantile: "quantile",
  esriClassifyStandardDeviation: "standard-deviation",
  esriClassifyDefinedInterval: "defined-interval"
});
var n3 = new n2({
  esriNormalizeByLog: "log",
  esriNormalizeByPercentOfTotal: "percent-of-total",
  esriNormalizeByField: "field"
});
var l = class extends f {
  constructor(e2) {
    super(e2), this.type = "class-breaks-definition", this.breakCount = null, this.classificationField = null, this.classificationMethod = null, this.normalizationField = null, this.normalizationType = null;
  }
  set standardDeviationInterval(e2) {
    "standard-deviation" === this.classificationMethod && this._set("standardDeviationInterval", e2);
  }
  set definedInterval(e2) {
    "defined-interval" === this.classificationMethod && this._set("definedInterval", e2);
  }
};
e([o({
  classBreaksDef: "class-breaks-definition"
})], l.prototype, "type", void 0), e([y({
  json: {
    write: true
  }
})], l.prototype, "breakCount", void 0), e([y({
  json: {
    write: true
  }
})], l.prototype, "classificationField", void 0), e([y({
  type: String,
  json: {
    read: a2.read,
    write: a2.write
  }
})], l.prototype, "classificationMethod", void 0), e([y({
  json: {
    write: true
  }
})], l.prototype, "normalizationField", void 0), e([y({
  json: {
    read: n3.read,
    write: n3.write
  }
})], l.prototype, "normalizationType", void 0), e([y({
  value: null,
  json: {
    write: true
  }
})], l.prototype, "standardDeviationInterval", null), e([y({
  value: null,
  json: {
    write: true
  }
})], l.prototype, "definedInterval", null), l = e([a("esri.rest.support.ClassBreaksDefinition")], l);
var d = l;

// ../../../node_modules/@arcgis/core/rest/support/generateRendererUtils.js
var t = () => n.getLogger("esri.rest.support.generateRendererUtils");
function l2(e2, t2) {
  return Number(e2.toFixed(t2));
}
function a3(e2) {
  const {
    normalizationTotal: t2
  } = e2;
  return {
    classBreaks: u(e2),
    normalizationTotal: t2
  };
}
function u(e2) {
  const t2 = e2.definition, {
    classificationMethod: n4,
    normalizationType: a4,
    definedInterval: u2
  } = t2, i2 = t2.breakCount ?? 1, c2 = [];
  let b2 = e2.values;
  if (0 === b2.length) return [];
  b2 = b2.sort((e3, t3) => e3 - t3);
  const V = b2[0], p = b2[b2.length - 1];
  if ("equal-interval" === n4) {
    if (b2.length >= i2) {
      const e3 = (p - V) / i2;
      let t3 = V;
      for (let n5 = 1; n5 < i2; n5++) {
        const u3 = l2(V + n5 * e3, 6);
        c2.push({
          minValue: t3,
          maxValue: u3,
          label: s(t3, u3, a4)
        }), t3 = u3;
      }
      c2.push({
        minValue: t3,
        maxValue: p,
        label: s(t3, p, a4)
      });
    } else b2.forEach((e3) => {
      c2.push({
        minValue: e3,
        maxValue: e3,
        label: s(e3, e3, a4)
      });
    });
  } else if ("natural-breaks" === n4) {
    const t3 = o2(b2), n5 = e2.valueFrequency || t3.valueFrequency, u3 = r(t3.uniqueValues, n5, i2);
    let f3 = V;
    for (let e3 = 1; e3 < i2; e3++) if (t3.uniqueValues.length > e3) {
      const n6 = l2(t3.uniqueValues[u3[e3]], 6);
      c2.push({
        minValue: f3,
        maxValue: n6,
        label: s(f3, n6, a4)
      }), f3 = n6;
    }
    c2.push({
      minValue: f3,
      maxValue: p,
      label: s(f3, p, a4)
    });
  } else if ("quantile" === n4) {
    if (b2.length >= i2 && V !== p) {
      let e3 = V, t3 = Math.ceil(b2.length / i2), l3 = 0;
      for (let n5 = 1; n5 < i2; n5++) {
        let u3 = t3 + l3 - 1;
        u3 > b2.length && (u3 = b2.length - 1), u3 < 0 && (u3 = 0), c2.push({
          minValue: e3,
          maxValue: b2[u3],
          label: s(e3, b2[u3], a4)
        }), e3 = b2[u3], l3 += t3, t3 = Math.ceil((b2.length - l3) / (i2 - n5));
      }
      c2.push({
        minValue: e3,
        maxValue: p,
        label: s(e3, p, a4)
      });
    } else {
      let e3 = -1;
      for (let t3 = 0; t3 < b2.length; t3++) {
        const l3 = b2[t3];
        l3 !== e3 && (e3 = l3, c2.push({
          minValue: e3,
          maxValue: l3,
          label: s(e3, l3, a4)
        }), e3 = l3);
      }
    }
  } else if ("standard-deviation" === n4) {
    const e3 = h(b2), t3 = m(b2, e3);
    if (0 === t3) c2.push({
      minValue: b2[0],
      maxValue: b2[0],
      label: s(b2[0], b2[0], a4)
    });
    else {
      const n5 = f2(V, p, i2, e3, t3) * t3;
      let u3 = 0, o3 = V;
      for (let t4 = i2; t4 >= 1; t4--) {
        const r3 = l2(e3 - (t4 - 0.5) * n5, 6);
        c2.push({
          minValue: o3,
          maxValue: r3,
          label: s(o3, r3, a4)
        }), o3 = r3, u3++;
      }
      let r2 = l2(e3 + 0.5 * n5, 6);
      c2.push({
        minValue: o3,
        maxValue: r2,
        label: s(o3, r2, a4)
      }), o3 = r2, u3++;
      for (let t4 = 1; t4 <= i2; t4++) r2 = u3 === 2 * i2 ? p : l2(e3 + (t4 + 0.5) * n5, 6), c2.push({
        minValue: o3,
        maxValue: r2,
        label: s(o3, r2, a4)
      }), o3 = r2, u3++;
    }
  } else if ("defined-interval" === n4) {
    if (!u2) return c2;
    const e3 = b2[0], t3 = b2[b2.length - 1], n5 = Math.ceil((t3 - e3) / u2);
    let o3 = e3;
    for (let r2 = 1; r2 < n5; r2++) {
      const t4 = l2(e3 + r2 * u2, 6);
      c2.push({
        minValue: o3,
        maxValue: t4,
        label: s(o3, t4, a4)
      }), o3 = t4;
    }
    c2.push({
      minValue: o3,
      maxValue: t3,
      label: s(o3, t3, a4)
    });
  }
  return c2;
}
function s(e2, t2, l3) {
  let n4 = null;
  return n4 = e2 === t2 ? l3 && "percent-of-total" === l3 ? e2 + "%" : e2.toString() : l3 && "percent-of-total" === l3 ? e2 + "% - " + t2 + "%" : e2 + " - " + t2, n4;
}
function o2(e2) {
  const t2 = [], l3 = [];
  let n4 = Number.MIN_VALUE, a4 = 1, u2 = -1;
  for (let s2 = 0; s2 < e2.length; s2++) {
    const o3 = e2[s2];
    o3 === n4 ? (a4++, l3[u2] = a4) : null !== o3 && (t2.push(o3), n4 = o3, a4 = 1, l3.push(a4), u2++);
  }
  return {
    uniqueValues: t2,
    valueFrequency: l3
  };
}
function r(e2, t2, l3) {
  const n4 = e2.length, a4 = [];
  l3 > n4 && (l3 = n4);
  for (let s2 = 0; s2 < l3; s2++) a4.push(Math.round(s2 * n4 / l3 - 1));
  a4.push(n4 - 1);
  let u2 = i(a4, e2, t2, l3);
  return c(u2.mean, u2.sdcm, a4, e2, t2, l3) && (u2 = i(a4, e2, t2, l3)), a4;
}
function i(e2, t2, l3, n4) {
  let a4 = [], u2 = [], s2 = [], o3 = 0;
  const r2 = [], i2 = [];
  for (let m2 = 0; m2 < n4; m2++) {
    const n5 = b(m2, e2, t2, l3);
    r2.push(n5.sbMean), i2.push(n5.sbSdcm), o3 += i2[m2];
  }
  let c2, f3 = o3, h2 = true;
  for (; h2 || o3 < f3; ) {
    h2 = false, a4 = [];
    for (let t3 = 0; t3 < n4; t3++) a4.push(e2[t3]);
    for (let l4 = 0; l4 < n4; l4++) for (let a5 = e2[l4] + 1; a5 <= e2[l4 + 1]; a5++) if (c2 = t2[a5], l4 > 0 && a5 !== e2[l4 + 1] && Math.abs(c2 - r2[l4]) > Math.abs(c2 - r2[l4 - 1])) e2[l4] = a5;
    else if (l4 < n4 - 1 && e2[l4] !== a5 - 1 && Math.abs(c2 - r2[l4]) > Math.abs(c2 - r2[l4 + 1])) {
      e2[l4 + 1] = a5 - 1;
      break;
    }
    f3 = o3, o3 = 0, u2 = [], s2 = [];
    for (let a5 = 0; a5 < n4; a5++) {
      u2.push(r2[a5]), s2.push(i2[a5]);
      const n5 = b(a5, e2, t2, l3);
      r2[a5] = n5.sbMean, i2[a5] = n5.sbSdcm, o3 += i2[a5];
    }
  }
  if (o3 > f3) {
    for (let t3 = 0; t3 < n4; t3++) e2[t3] = a4[t3], r2[t3] = u2[t3], i2[t3] = s2[t3];
    o3 = f3;
  }
  return {
    mean: r2,
    sdcm: i2
  };
}
function c(e2, t2, l3, n4, a4, u2) {
  let s2 = 0, o3 = 0, r2 = 0, i2 = 0, c2 = true;
  for (let f3 = 0; f3 < 2 && c2; f3++) {
    0 === f3 && (c2 = false);
    for (let f4 = 0; f4 < u2 - 1; f4++) for (; l3[f4 + 1] + 1 !== l3[f4 + 2]; ) {
      l3[f4 + 1] = l3[f4 + 1] + 1;
      const u3 = b(f4, l3, n4, a4);
      r2 = u3.sbMean, s2 = u3.sbSdcm;
      const h2 = b(f4 + 1, l3, n4, a4);
      if (i2 = h2.sbMean, o3 = h2.sbSdcm, !(s2 + o3 < t2[f4] + t2[f4 + 1])) {
        l3[f4 + 1] = l3[f4 + 1] - 1;
        break;
      }
      t2[f4] = s2, t2[f4 + 1] = o3, e2[f4] = r2, e2[f4 + 1] = i2, c2 = true;
    }
    for (let f4 = u2 - 1; f4 > 0; f4--) for (; l3[f4] !== l3[f4 - 1] + 1; ) {
      l3[f4] = l3[f4] - 1;
      const u3 = b(f4 - 1, l3, n4, a4);
      r2 = u3.sbMean, s2 = u3.sbSdcm;
      const h2 = b(f4, l3, n4, a4);
      if (i2 = h2.sbMean, o3 = h2.sbSdcm, !(s2 + o3 < t2[f4 - 1] + t2[f4])) {
        l3[f4] = l3[f4] + 1;
        break;
      }
      t2[f4 - 1] = s2, t2[f4] = o3, e2[f4 - 1] = r2, e2[f4] = i2, c2 = true;
    }
  }
  return c2;
}
function f2(e2, t2, l3, n4, a4) {
  let u2 = Math.max(n4 - e2, t2 - n4) / a4 / l3;
  return u2 = u2 >= 1 ? 1 : u2 >= 0.5 ? 0.5 : 0.25, u2;
}
function h(e2) {
  let t2 = 0;
  for (let l3 = 0; l3 < e2.length; l3++) t2 += e2[l3];
  return t2 /= e2.length, t2;
}
function m(e2, t2) {
  let l3 = 0;
  for (let n4 = 0; n4 < e2.length; n4++) {
    const a4 = e2[n4];
    l3 += (a4 - t2) * (a4 - t2);
  }
  l3 /= e2.length;
  return Math.sqrt(l3);
}
function b(e2, l3, n4, a4) {
  let u2 = 0, s2 = 0;
  for (let t2 = l3[e2] + 1; t2 <= l3[e2 + 1]; t2++) {
    const e3 = a4[t2];
    u2 += n4[t2] * e3, s2 += e3;
  }
  s2 <= 0 && t().warn("Exception in Natural Breaks calculation");
  const o3 = u2 / s2;
  let r2 = 0;
  for (let t2 = l3[e2] + 1; t2 <= l3[e2 + 1]; t2++) r2 += a4[t2] * (n4[t2] - o3) ** 2;
  return {
    sbMean: o3,
    sbSdcm: r2
  };
}

export {
  d,
  a3 as a
};
//# sourceMappingURL=chunk-MIQZ6UDY.js.map
