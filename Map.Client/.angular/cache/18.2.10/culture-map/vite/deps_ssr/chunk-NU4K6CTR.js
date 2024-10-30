import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Z
} from "./chunk-42ZAWY2C.js";
import {
  B,
  c
} from "./chunk-CRYYUS4E.js";
import {
  l,
  u as u2
} from "./chunk-E5NWFBZG.js";
import {
  j
} from "./chunk-FP37456K.js";
import {
  r
} from "./chunk-C2OXE4NQ.js";
import {
  be
} from "./chunk-I2TVVMQ6.js";
import {
  i
} from "./chunk-JKPUNUQA.js";
import {
  u
} from "./chunk-VYTPFEL2.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  W,
  s2 as s
} from "./chunk-6SSA7P3A.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/smartMapping/statistics/support/utils.js
var $ = null;
var g = /^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;
function I(e, t, n) {
  return e.x < 0 ? e.x += t : e.x > n && (e.x -= t), e;
}
function j2(e, t, n, r2) {
  const l2 = W(n) ? s(n) : null, u3 = l2 ? Math.round((l2.valid[1] - l2.valid[0]) / t.scale[0]) : null;
  return e.map((e2) => {
    const n2 = new _(e2.geometry);
    return j(t, n2, n2), e2.geometry = l2 ? I(n2, u3 ?? 0, r2[0]) : n2, e2;
  });
}
function x(e, n = 18, r2, o, i2) {
  const s3 = new Float64Array(o * i2);
  n = Math.round(u(n));
  let l2 = Number.POSITIVE_INFINITY, u3 = Number.NEGATIVE_INFINITY;
  const a = u2(r2);
  for (const {
    geometry: t,
    attributes: m
  } of e) {
    const {
      x: e2,
      y: r3
    } = t, c2 = Math.max(0, e2 - n), p = Math.max(0, r3 - n), d = Math.min(i2, r3 + n), h = Math.min(o, e2 + n), y = +a(m);
    for (let t2 = p; t2 < d; t2++) for (let i3 = c2; i3 < h; i3++) {
      const a2 = t2 * o + i3, m2 = l(i3 - e2, t2 - r3, n) * y, c3 = s3[a2] += m2;
      l2 = Math.min(l2, c3), u3 = Math.max(u3, c3);
    }
  }
  return {
    min: l2,
    max: u3
  };
}
function w(e) {
  const t = g.exec(e);
  if (!t) return null;
  const {
    hh: r2,
    mm: o,
    ss: i2,
    ms: s3
  } = t.groups;
  return Number(r2) * r.hours + Number(o) * r.minutes + Number(i2) * r.seconds + Number(s3 || 0);
}
function b(e, t, n = true) {
  return __async(this, null, function* () {
    if (!t) return [];
    const {
      field: o,
      field2: i2,
      field3: s3,
      fieldDelimiter: u3,
      fieldInfos: a,
      timeZone: f2
    } = e, m = o && a?.find((e2) => e2.name.toLowerCase() === o.toLowerCase()), y = !!m && be(m), g2 = !!m && Z(m), I2 = e.valueExpression, j3 = e.normalizationType, x2 = e.normalizationField, b2 = e.normalizationTotal, F = [], N = e.viewInfoParams;
    let E = null, v = null;
    if (I2) {
      if (!$) {
        const {
          arcadeUtils: e2
        } = yield i();
        $ = e2;
      }
      $.hasGeometryOperations(I2) && (yield $.enableGeometryOperations()), E = $.createFunction(I2), v = N ? $.getViewInfo({
        viewingMode: N.viewingMode,
        scale: N.scale,
        spatialReference: new f(N.spatialReference)
      }) : null;
    }
    const U = e.fieldInfos, M = !(t[0] && "declaredClass" in t[0] && "esri.Graphic" === t[0].declaredClass) && U ? {
      fields: U
    } : null;
    return t.forEach((e2) => {
      const t2 = e2.attributes;
      let r2;
      if (I2) {
        const t3 = M ? __spreadProps(__spreadValues({}, e2), {
          layer: M
        }) : e2, n2 = $.createExecContext(t3, v, f2);
        r2 = $.executeFunction(E, n2);
      } else t2 && (r2 = t2[o], i2 ? (r2 = `${c(r2)}${u3}${c(t2[i2])}`, s3 && (r2 = `${r2}${u3}${c(t2[s3])}`)) : "string" == typeof r2 && n && (g2 ? r2 = r2 ? new Date(r2).getTime() : null : y && (r2 = r2 ? w(r2) : null)));
      if (j3 && "number" == typeof r2 && isFinite(r2)) {
        const e3 = t2 && parseFloat(t2[x2]);
        r2 = B(r2, j3, e3, b2);
      }
      F.push(r2);
    }), F;
  });
}

export {
  j2 as j,
  x,
  w,
  b
};
//# sourceMappingURL=chunk-NU4K6CTR.js.map
