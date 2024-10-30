import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t
} from "./chunk-Q2RVB4BK.js";
import {
  Dt,
  tt
} from "./chunk-NOBDTR4N.js";
import {
  o
} from "./chunk-CZA7RDJP.js";
import {
  m
} from "./chunk-4DSGTDZJ.js";

// ../../../node_modules/@arcgis/core/symbols/cim/SDFHelper.js
function l(t2) {
  switch (t2.type) {
    case "CIMPointSymbol": {
      const o2 = t2.symbolLayers;
      if (!o2 || 1 !== o2.length) return null;
      const n = o2[0];
      return "CIMVectorMarker" !== n.type ? null : l(n);
    }
    case "CIMVectorMarker": {
      const o2 = t2.markerGraphics;
      if (!o2 || 1 !== o2.length) return null;
      const n = o2[0];
      if (!n) return null;
      const r = n.geometry;
      if (!r) return null;
      const e = n.symbol;
      return !e || "CIMPolygonSymbol" !== e.type && "CIMLineSymbol" !== e.type || e.symbolLayers?.some((t3) => !!t3.effects) ? null : {
        type: "sdf",
        geom: r,
        asFill: "CIMPolygonSymbol" === e.type
      };
    }
  }
}
function i(t2) {
  return t2 ? t2.rings ? t2.rings : t2.paths ? t2.paths : void 0 !== t2.xmin && void 0 !== t2.ymin && void 0 !== t2.xmax && void 0 !== t2.ymax ? [[[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]] : null : null;
}
function s(t2) {
  let o2 = 1 / 0, r = -1 / 0, e = 1 / 0, l2 = -1 / 0;
  for (const n of t2) for (const t3 of n) t3[0] < o2 && (o2 = t3[0]), t3[0] > r && (r = t3[0]), t3[1] < e && (e = t3[1]), t3[1] > l2 && (l2 = t3[1]);
  return new t(o2, e, r - o2, l2 - e);
}
function f(t2) {
  let o2 = 1 / 0, n = -1 / 0, r = 1 / 0, e = -1 / 0;
  for (const l2 of t2) for (const t3 of l2) t3[0] < o2 && (o2 = t3[0]), t3[0] > n && (n = t3[0]), t3[1] < r && (r = t3[1]), t3[1] > e && (e = t3[1]);
  return [o2, r, n, e];
}
function m2(t2) {
  return t2 ? t2.rings ? f(t2.rings) : t2.paths ? f(t2.paths) : m(t2) ? [t2.xmin, t2.ymin, t2.xmax, t2.ymax] : null : null;
}
function a(t2, o2, n, l2, i2) {
  const [s2, f2, m3, a2] = t2;
  if (m3 < s2 || a2 < f2) return [0, 0, 0, 1];
  const c2 = m3 - s2, u2 = a2 - f2, y2 = Dt, h2 = tt, x = Math.floor(0.5 * (0.5 * y2 - h2)), M = (y2 - 2 * (x + h2)) / Math.max(c2, u2), p = Math.round(c2 * M) + 2 * x, g = Math.round(u2 * M) + 2 * x;
  let d = 1;
  if (o2) {
    d = g / M / (o2.ymax - o2.ymin);
  }
  let b = 0, w = 0, C = 1;
  l2 && (i2 ? o2 && n && o2.ymax - o2.ymin > 0 && (C = (o2.xmax - o2.xmin) / (o2.ymax - o2.ymin), b = l2.x / (n * C), w = l2.y / n) : (b = l2.x, w = l2.y)), o2 && (b = 0.5 * (o2.xmax + o2.xmin) + b * (o2.xmax - o2.xmin), w = 0.5 * (o2.ymax + o2.ymin) + w * (o2.ymax - o2.ymin)), b -= s2, w -= f2, b *= M, w *= M, b += x, w += x;
  let I = b / p - 0.5, j = w / g - 0.5;
  return i2 && n && (I *= n * C, j *= n), [d, I, j, C];
}
function c(t2) {
  const o2 = i(t2.geom), n = s(o2), l2 = Dt, f2 = tt, m3 = Math.floor(0.5 * (0.5 * l2 - f2)), a2 = (l2 - 2 * (m3 + f2)) / Math.max(n.width, n.height), c2 = Math.round(n.width * a2) + 2 * m3, x = Math.round(n.height * a2) + 2 * m3, M = [];
  for (const r of o2) if (r && r.length > 1) {
    const o3 = [];
    for (const e of r) {
      let [r2, l3] = e;
      r2 -= n.x, l3 -= n.y, r2 *= a2, l3 *= a2, r2 += m3 - 0.5, l3 += m3 - 0.5, t2.asFill ? o3.push([r2, l3]) : o3.push([Math.round(r2), Math.round(l3)]);
    }
    if (t2.asFill) {
      const t3 = o3.length - 1;
      o3[0][0] === o3[t3][0] && o3[0][1] === o3[t3][1] || o3.push(o3[0]);
    }
    M.push(o3);
  }
  const p = u(M, c2, x, m3);
  return t2.asFill && y(M, c2, x, m3, p), [h(p, m3), c2, x];
}
function u(t2, o2, n, r) {
  const e = o2 * n, l2 = new Array(e), i2 = r * r + 1;
  for (let s2 = 0; s2 < e; ++s2) l2[s2] = i2;
  for (const s2 of t2) {
    const t3 = s2.length;
    for (let e2 = 1; e2 < t3; ++e2) {
      const t4 = s2[e2 - 1], i3 = s2[e2];
      let f2, m3, a2, c2;
      t4[0] < i3[0] ? (f2 = t4[0], m3 = i3[0]) : (f2 = i3[0], m3 = t4[0]), t4[1] < i3[1] ? (a2 = t4[1], c2 = i3[1]) : (a2 = i3[1], c2 = t4[1]);
      let u2 = Math.floor(f2) - r, y2 = Math.floor(m3) + r, h2 = Math.floor(a2) - r, x = Math.floor(c2) + r;
      u2 < 0 && (u2 = 0), y2 > o2 && (y2 = o2), h2 < 0 && (h2 = 0), x > n && (x = n);
      const M = i3[0] - t4[0], p = i3[1] - t4[1], g = M * M + p * p;
      for (let r2 = u2; r2 < y2; r2++) for (let e3 = h2; e3 < x; e3++) {
        const s3 = r2 + 0.5, f3 = e3 + 0.5;
        let m4, a3, c3 = (s3 - t4[0]) * M + (f3 - t4[1]) * p;
        c3 < 0 ? (m4 = t4[0], a3 = t4[1]) : c3 > g ? (m4 = i3[0], a3 = i3[1]) : (c3 /= g, m4 = t4[0] + c3 * M, a3 = t4[1] + c3 * p);
        const u3 = (s3 - m4) * (s3 - m4) + (f3 - a3) * (f3 - a3), y3 = (n - e3 - 1) * o2 + r2;
        u3 < l2[y3] && (l2[y3] = u3);
      }
    }
  }
  for (let s2 = 0; s2 < e; ++s2) l2[s2] = Math.sqrt(l2[s2]);
  return l2;
}
function y(t2, o2, n, r, e) {
  for (const l2 of t2) {
    const t3 = l2.length;
    for (let i2 = 1; i2 < t3; ++i2) {
      const t4 = l2[i2 - 1], s2 = l2[i2];
      let f2, m3, a2, c2;
      t4[0] < s2[0] ? (f2 = t4[0], m3 = s2[0]) : (f2 = s2[0], m3 = t4[0]), t4[1] < s2[1] ? (a2 = t4[1], c2 = s2[1]) : (a2 = s2[1], c2 = t4[1]);
      let u2 = Math.floor(f2), y2 = Math.floor(m3) + 1, h2 = Math.floor(a2), x = Math.floor(c2) + 1;
      u2 < r && (u2 = r), y2 > o2 - r && (y2 = o2 - r), h2 < r && (h2 = r), x > n - r && (x = n - r);
      for (let l3 = h2; l3 < x; ++l3) {
        if (t4[1] > l3 == s2[1] > l3) continue;
        const i3 = l3 + 0.5, f3 = (n - l3 - 1) * o2;
        for (let o3 = u2; o3 < y2; ++o3) {
          o3 + 0.5 < (s2[0] - t4[0]) * (i3 - t4[1]) / (s2[1] - t4[1]) + t4[0] && (e[f3 + o3] = -e[f3 + o3]);
        }
        for (let t5 = r; t5 < u2; ++t5) e[f3 + t5] = -e[f3 + t5];
      }
    }
  }
}
function h(o2, n) {
  const r = 2 * n, e = o2.length, l2 = new Uint8Array(4 * e);
  for (let i2 = 0; i2 < e; ++i2) {
    const n2 = 0.5 - o2[i2] / r;
    o(n2, l2, 4 * i2);
  }
  return l2;
}

export {
  l,
  m2 as m,
  a,
  c
};
//# sourceMappingURL=chunk-NJ3JLLJN.js.map
