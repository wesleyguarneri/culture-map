import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o as o2,
  r as r2
} from "./chunk-AOGKNBDG.js";
import {
  i,
  o,
  r,
  s as s4
} from "./chunk-F4FQ67JP.js";
import {
  f
} from "./chunk-FDI2X6GO.js";
import {
  p,
  y
} from "./chunk-4DSGTDZJ.js";
import {
  j,
  m2 as m
} from "./chunk-MRPCXIVS.js";
import {
  R,
  d as d2
} from "./chunk-TIRJMGGG.js";
import {
  d2 as d,
  s2 as s3
} from "./chunk-6SSA7P3A.js";
import {
  I,
  U
} from "./chunk-XLEC46FY.js";
import {
  n2 as n,
  s,
  s2
} from "./chunk-6JFGZTLU.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/rest/geometryService/cut.js
function i2(i3, n2, p2, m4) {
  return __async(this, null, function* () {
    const a = f(i3), u = n2[0].spatialReference, c = __spreadProps(__spreadValues({}, m4), {
      responseType: "json",
      query: __spreadProps(__spreadValues({}, a.query), {
        f: "json",
        sr: d(u),
        target: JSON.stringify({
          geometryType: p(n2[0]),
          geometries: n2
        }),
        cutter: JSON.stringify(p2)
      })
    }), f2 = yield U(a.path + "/cut", c), {
      cutIndexes: y3,
      geometries: g2 = []
    } = f2.data;
    return {
      cutIndexes: y3,
      geometries: g2.map((e) => {
        const t = y(e);
        return t.spatialReference = u, t;
      })
    };
  });
}

// ../../../node_modules/@arcgis/core/rest/geometryService/simplify.js
function m2(m4, p2, f2) {
  return __async(this, null, function* () {
    const n2 = "string" == typeof m4 ? I(m4) : m4, a = p2[0].spatialReference, u = p(p2[0]), l = __spreadProps(__spreadValues({}, f2), {
      query: __spreadProps(__spreadValues({}, n2.query), {
        f: "json",
        sr: d(a),
        geometries: JSON.stringify(r2(p2))
      })
    }), {
      data: y3
    } = yield U(n2.path + "/simplify", l);
    return o2(y3.geometries, u, a);
  });
}

// ../../../node_modules/@arcgis/core/geometry/support/normalizeUtils.js
var m3 = () => n.getLogger("esri.geometry.support.normalizeUtils");
function g(t) {
  return "polygon" === t.type;
}
function y2(t) {
  return "polygon" === t[0].type;
}
function x(t) {
  return "polyline" === t[0].type;
}
function d3(t) {
  const e = [];
  let n2 = 0, o3 = 0;
  for (let s5 = 0; s5 < t.length; s5++) {
    const r3 = t[s5];
    let i3 = null;
    for (let t2 = 0; t2 < r3.length; t2++) i3 = r3[t2], e.push(i3), 0 === t2 ? (n2 = i3[0], o3 = n2) : (n2 = Math.min(n2, i3[0]), o3 = Math.max(o3, i3[0]));
    i3 && e.push([(n2 + o3) / 2, 0]);
  }
  return e;
}
function M(t, n2) {
  if (!(t instanceof m || t instanceof j)) {
    const t2 = "straightLineDensify: the input geometry is neither polyline nor polygon";
    throw m3().error(t2), new s2(t2);
  }
  const i3 = o(t), l = [];
  for (const e of i3) {
    const t2 = [];
    l.push(t2), t2.push([e[0][0], e[0][1]]);
    for (let o3 = 0; o3 < e.length - 1; o3++) {
      const s5 = e[o3][0], r3 = e[o3][1], i4 = e[o3 + 1][0], l2 = e[o3 + 1][1], c = Math.sqrt((i4 - s5) * (i4 - s5) + (l2 - r3) * (l2 - r3)), f2 = (l2 - r3) / c, u = (i4 - s5) / c, p2 = c / n2;
      if (p2 > 1) {
        for (let l3 = 1; l3 <= p2 - 1; l3++) {
          const e3 = l3 * n2, o5 = u * e3 + s5, i6 = f2 * e3 + r3;
          t2.push([o5, i6]);
        }
        const e2 = (c + Math.floor(p2 - 1) * n2) / 2, o4 = u * e2 + s5, i5 = f2 * e2 + r3;
        t2.push([o4, i5]);
      }
      t2.push([i4, l2]);
    }
  }
  return g(t) ? new j({
    rings: l,
    spatialReference: t.spatialReference
  }) : new m({
    paths: l,
    spatialReference: t.spatialReference
  });
}
function w(t, e, n2) {
  if (e) {
    const e2 = M(t, 1e6);
    t = R(e2, true);
  }
  return n2 && (t = s4(t, n2)), t;
}
function b(t, e, n2) {
  if (Array.isArray(t)) {
    const o3 = t[0];
    if (o3 > e) {
      const n3 = i(o3, e);
      t[0] = o3 + n3 * (-2 * e);
    } else if (o3 < n2) {
      const e2 = i(o3, n2);
      t[0] = o3 + e2 * (-2 * n2);
    }
  } else {
    const o3 = t.x;
    if (o3 > e) {
      const n3 = i(o3, e);
      t = t.clone().offset(n3 * (-2 * e), 0);
    } else if (o3 < n2) {
      const e2 = i(o3, n2);
      t = t.clone().offset(e2 * (-2 * n2), 0);
    }
  }
  return t;
}
function j2(t, e) {
  let n2 = -1;
  for (let o3 = 0; o3 < e.cutIndexes.length; o3++) {
    const s5 = e.cutIndexes[o3], i3 = e.geometries[o3], c = o(i3);
    for (let t2 = 0; t2 < c.length; t2++) {
      const e2 = c[t2];
      e2.some((n3) => {
        if (n3[0] < 180) return true;
        {
          let n4 = 0;
          for (let t3 = 0; t3 < e2.length; t3++) {
            const o5 = e2[t3][0];
            n4 = o5 > n4 ? o5 : n4;
          }
          n4 = Number(n4.toFixed(9));
          const o4 = -360 * i(n4, 180);
          for (let s6 = 0; s6 < e2.length; s6++) {
            const e3 = i3.getPoint(t2, s6);
            i3.setPoint(t2, s6, e3.clone().offset(o4, 0));
          }
          return true;
        }
      });
    }
    if (s5 === n2) {
      if (y2(t)) for (const e2 of o(i3)) t[s5] = t[s5].addRing(e2);
      else if (x(t)) for (const e2 of o(i3)) t[s5] = t[s5].addPath(e2);
    } else n2 = s5, t[s5] = i3;
  }
  return t;
}
function R2(e, n2, r3) {
  return __async(this, null, function* () {
    if (!Array.isArray(e)) return R2([e], n2);
    n2 && "string" != typeof n2 && m3().warn("normalizeCentralMeridian()", "The url object is deprecated, use the url string instead");
    const p2 = "string" == typeof n2 ? n2 : n2?.url ?? s.geometryServiceUrl;
    let g2, y3, x2, d4, M2, v2, P2, L2, U2 = 0;
    const z = [], A = [];
    for (const t of e) if (null != t) {
      if (g2 || (g2 = t.spatialReference, y3 = s3(g2), x2 = g2.isWebMercator, v2 = x2 ? 102100 : 4326, d4 = r[v2].maxX, M2 = r[v2].minX, P2 = r[v2].plus180Line, L2 = r[v2].minus180Line), y3) {
        if ("mesh" === t.type) A.push(t);
        else if ("point" === t.type) A.push(b(t.clone(), d4, M2));
        else if ("multipoint" === t.type) {
          const e2 = t.clone();
          e2.points = e2.points.map((t2) => b(t2, d4, M2)), A.push(e2);
        } else if ("extent" === t.type) {
          const e2 = t.clone()._normalize(false, false, y3);
          A.push(e2.rings ? new j(e2) : e2);
        } else if (t.extent) {
          const e2 = t.extent, n3 = i(e2.xmin, M2) * (2 * d4);
          let o3 = 0 === n3 ? t.clone() : s4(t.clone(), n3);
          e2.offset(n3, 0);
          let {
            xmin: s5,
            xmax: r4
          } = e2;
          s5 = Number(s5.toFixed(9)), r4 = Number(r4.toFixed(9)), e2.intersects(P2) && r4 !== d4 ? (U2 = r4 > U2 ? r4 : U2, o3 = w(o3, x2), z.push(o3), A.push("cut")) : e2.intersects(L2) && s5 !== M2 ? (U2 = r4 * (2 * d4) > U2 ? r4 * (2 * d4) : U2, o3 = w(o3, x2, 360), z.push(o3), A.push("cut")) : A.push(o3);
        } else A.push(t.clone());
      } else A.push(t);
    } else A.push(t);
    let F = i(U2, d4), N = -90;
    const S = F, k = new m();
    for (; F > 0; ) {
      const t = 360 * F - 180;
      k.addPath([[t, N], [t, -1 * N]]), N *= -1, F--;
    }
    if (z.length > 0 && S > 0) {
      const t = j2(z, yield i2(p2, z, k, r3)), n3 = [], o3 = [];
      for (let r4 = 0; r4 < A.length; r4++) {
        const s6 = A[r4];
        if ("cut" !== s6) o3.push(s6);
        else {
          const s7 = t.shift(), i4 = e[r4];
          null != i4 && "polygon" === i4.type && i4.rings && i4.rings.length > 1 && s7.rings.length >= i4.rings.length ? (n3.push(s7), o3.push("simplify")) : o3.push(x2 ? d2(s7) : s7);
        }
      }
      if (!n3.length) return o3;
      const s5 = yield m2(p2, n3, r3), i3 = [];
      for (let e2 = 0; e2 < o3.length; e2++) {
        const t2 = o3[e2];
        "simplify" !== t2 ? i3.push(t2) : i3.push(x2 ? d2(s5.shift()) : s5.shift());
      }
      return i3;
    }
    const C = [];
    for (let t = 0; t < A.length; t++) {
      const e2 = A[t];
      if ("cut" !== e2) C.push(e2);
      else {
        const t2 = z.shift();
        C.push(true === x2 ? d2(t2) : t2);
      }
    }
    return C;
  });
}
function v(t) {
  if (!t) return null;
  const e = t.extent;
  if (!e) return null;
  const n2 = t.spatialReference && s3(t.spatialReference);
  if (!n2) return e;
  const [o3, s5] = n2.valid, r3 = 2 * s5, {
    width: i3
  } = e;
  let l, {
    xmin: c,
    xmax: u
  } = e;
  if ([c, u] = [u, c], "extent" === t.type || 0 === i3 || i3 <= s5 || i3 > r3 || c < o3 || u > s5) return e;
  switch (t.type) {
    case "polygon":
      if (!(t.rings.length > 1)) return e;
      l = d3(t.rings);
      break;
    case "polyline":
      if (!(t.paths.length > 1)) return e;
      l = d3(t.paths);
      break;
    case "multipoint":
      l = t.points;
  }
  const p2 = e.clone();
  for (let f2 = 0; f2 < l.length; f2++) {
    let t2 = l[f2][0];
    t2 < 0 ? (t2 += s5, u = Math.max(t2, u)) : (t2 -= s5, c = Math.min(t2, c));
  }
  return p2.xmin = c, p2.xmax = u, p2.width < i3 ? (p2.xmin -= s5, p2.xmax -= s5, p2) : e;
}
function P(t, e, n2) {
  const o3 = s3(n2);
  if (null == o3) return t;
  const [s5, r3] = o3.valid, i3 = 2 * r3;
  let l = 0, c = 0;
  e > r3 ? l = Math.ceil(Math.abs(e - r3) / i3) : e < s5 && (l = -Math.ceil(Math.abs(e - s5) / i3)), t > r3 ? c = Math.ceil(Math.abs(t - r3) / i3) : t < s5 && (c = -Math.ceil(Math.abs(t - s5) / i3));
  let u = t + (l - c) * i3;
  const p2 = u - e;
  return p2 > r3 ? u -= i3 : p2 < s5 && (u += i3), u;
}
function L(t, e) {
  const n2 = s3(e);
  if (n2) {
    const [e2, o3] = n2.valid, s5 = o3 - e2;
    if (t < e2) for (; t < e2; ) t += s5;
    if (t > o3) for (; t > o3; ) t -= s5;
  }
  return t;
}

export {
  M,
  R2 as R,
  v,
  P,
  L
};
//# sourceMappingURL=chunk-T5C2TZNO.js.map
