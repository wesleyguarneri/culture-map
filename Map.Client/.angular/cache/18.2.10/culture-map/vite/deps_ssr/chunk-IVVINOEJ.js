import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  j as j2,
  m2 as m
} from "./chunk-MRPCXIVS.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  d,
  i,
  t
} from "./chunk-AOEBZVTA.js";
import {
  A,
  j,
  w
} from "./chunk-6SSA7P3A.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/geometry/support/geodesicUtils.js
function p(e) {
  if (!e) return null;
  if (A(e) && e.wkid) {
    const t3 = d[e.wkid];
    if (t3) return t3;
  }
  const t2 = e.wkt2 || e.wkt;
  if (t2) {
    const e2 = u(t2);
    if (e2) return e2;
  }
  return null;
}
function u(e) {
  const t2 = t.exec(e);
  if (!t2 || 2 !== t2.length) return null;
  const n = t2[1].split(",");
  if (!n || n.length < 3) return null;
  const i2 = parseFloat(n[1]), r = parseFloat(n[2]);
  if (isNaN(i2) || isNaN(r)) return null;
  return {
    a: i2,
    f: 0 === r ? 0 : 1 / r
  };
}
function d2(e) {
  const t2 = p(e);
  if (m2(t2)) return t2;
  const n = t2.a * (1 - t2.f);
  return Object.assign(t2, {
    b: n,
    eSq: 1 - (n / t2.a) ** 2,
    radius: (2 * t2.a + n) / 3,
    densificationRatio: 1e4 / ((2 * t2.a + n) / 3)
  });
}
function m2(e) {
  return null != e && "b" in e && "eSq" in e && "radius" in e;
}
function M(e, t2, i2) {
  const {
    a: s2,
    eSq: r
  } = d2(i2), a = Math.sqrt(r), o = Math.sin(t2[1] * i), c = s2 * t2[0] * i;
  let l;
  if (r > 0) {
    l = s2 * ((1 - r) * (o / (1 - r * (o * o)) - 1 / (2 * a) * Math.log((1 - a * o) / (1 + a * o)))) * 0.5;
  } else l = s2 * o;
  return e[0] = c, e[1] = l, e;
}
function w2(e) {
  return null !== p(e);
}
function y(n, i2 = "square-meters") {
  if (n.some((e) => !w2(e.spatialReference))) throw new s("geodesic-areas:invalid-spatial-reference", "the input geometries spatial reference is not supported");
  const s2 = [];
  for (let e = 0; e < n.length; e++) {
    const t2 = n[e], i3 = t2.spatialReference, {
      radius: r2,
      densificationRatio: a2
    } = d2(i3), o2 = r2 * a2;
    s2.push(R(t2, o2));
  }
  const r = [], a = [0, 0], o = [0, 0];
  for (let e = 0; e < s2.length; e++) {
    const {
      rings: n2,
      spatialReference: c
    } = s2[e];
    let l = 0;
    for (let e2 = 0; e2 < n2.length; e2++) {
      const t2 = n2[e2];
      M(a, t2[0], c), M(o, t2[t2.length - 1], c);
      let i3 = o[0] * a[1] - a[0] * o[1];
      for (let e3 = 0; e3 < t2.length - 1; e3++) M(a, t2[e3 + 1], c), M(o, t2[e3], c), i3 += o[0] * a[1] - a[0] * o[1];
      l += i3;
    }
    l = j(l, "square-meters", i2), r.push(l / -2);
  }
  return r;
}
function v(n, i2 = "meters") {
  if (!n) throw new s("geodesic-lengths:invalid-geometries", "the input geometries type is not supported");
  if (n.some((e) => !w2(e.spatialReference))) throw new s("geodesic-lengths:invalid-spatial-reference", "the input geometries spatial reference is not supported");
  const s2 = [];
  for (let e = 0; e < n.length; e++) {
    const r = n[e], {
      spatialReference: a
    } = r, o = "polyline" === r.type ? r.paths : r.rings;
    let c = 0;
    for (let e2 = 0; e2 < o.length; e2++) {
      const t2 = o[e2];
      let n2 = 0;
      for (let e3 = 1; e3 < t2.length; e3++) {
        const i3 = t2[e3 - 1][0], s3 = t2[e3][0], r2 = t2[e3 - 1][1], o2 = t2[e3][1];
        if (r2 !== o2 || i3 !== s3) {
          const e4 = new z();
          j3(e4, [i3, r2], [s3, o2], a), n2 += e4.distance;
        }
      }
      c += n2;
    }
    c = j(c, "meters", i2), s2.push(c);
  }
  return s2;
}
function R(t2, n) {
  if ("polyline" !== t2.type && "polygon" !== t2.type) throw new s("geodesic-densify:invalid-geometry", "the input geometry is neither polyline nor polygon");
  const {
    spatialReference: i2
  } = t2;
  if (!w2(i2)) throw new s("geodesic-densify:invalid-spatial-reference", "the input geometry spatial reference is not supported");
  const s2 = "polyline" === t2.type ? t2.paths : t2.rings, r = [], a = [0, 0], o = new z();
  for (const e of s2) {
    const t3 = [];
    r.push(t3), t3.push([e[0][0], e[0][1]]);
    let s3, c, l = e[0][0], h = e[0][1];
    for (let r2 = 0; r2 < e.length - 1; r2++) {
      if (s3 = e[r2 + 1][0], c = e[r2 + 1][1], l === s3 && h === c) continue;
      const f2 = [l, h];
      j3(o, [l, h], [s3, c], i2);
      const {
        azimuth: p2,
        distance: u2
      } = o, d3 = u2 / n;
      if (d3 > 1) {
        for (let e2 = 1; e2 <= d3 - 1; e2++) {
          b(a, f2, p2, e2 * n, i2), t3.push(a.slice(0));
        }
        b(a, f2, p2, (u2 + Math.floor(d3 - 1) * n) / 2, i2), t3.push(a.slice(0));
      }
      b(a, f2, p2, u2, i2), t3.push(a.slice(0)), l = a[0], h = a[1];
    }
  }
  return "polyline" === t2.type ? new m({
    paths: r,
    spatialReference: i2
  }) : new j2({
    rings: r,
    spatialReference: i2
  });
}
var z = class {
  constructor(e = 0, t2 = void 0, n = void 0) {
    this.distance = e, this.azimuth = t2, this.reverseAzimuth = n;
  }
};
function b(e, t2, i2, s2, r) {
  const a = t2[0], o = t2[1], c = a * i, l = o * i, h = (i2 ?? 0) * i, {
    a: f2,
    b: p2,
    f: u2
  } = d2(r), m3 = Math.sin(h), g = Math.cos(h), M2 = (1 - u2) * Math.tan(l), w3 = 1 / Math.sqrt(1 + M2 * M2), y2 = M2 * w3, v2 = Math.atan2(M2, g), R2 = w3 * m3, z2 = R2 * R2, b2 = 1 - z2, j4 = b2 * (f2 * f2 - p2 * p2) / (p2 * p2), q = 1 + j4 / 16384 * (4096 + j4 * (j4 * (320 - 175 * j4) - 768)), x = j4 / 1024 * (256 + j4 * (j4 * (74 - 47 * j4) - 128));
  let A3, N, S, k, P = s2 / (p2 * q), F = 2 * Math.PI;
  for (; Math.abs(P - F) > 1e-12; ) S = Math.cos(2 * v2 + P), A3 = Math.sin(P), N = Math.cos(P), k = x * A3 * (S + x / 4 * (N * (2 * S * S - 1) - x / 6 * S * (4 * A3 * A3 - 3) * (4 * S * S - 3))), F = P, P = s2 / (p2 * q) + k;
  const U = y2 * A3 - w3 * N * g, C = Math.atan2(y2 * N + w3 * A3 * g, (1 - u2) * Math.sqrt(z2 + U * U)), E = Math.atan2(A3 * m3, w3 * N - y2 * A3 * g), G2 = u2 / 16 * b2 * (4 + u2 * (4 - 3 * b2)), I = C / i, O = (c + (E - (1 - G2) * u2 * R2 * (P + G2 * A3 * (S + G2 * N * (2 * S * S - 1))))) / i;
  return e[0] = O, e[1] = I, e;
}
function j3(e, t2, i2, s2) {
  const r = t2[0] * i, a = t2[1] * i, o = i2[0] * i, c = i2[1] * i, {
    a: l,
    b: h,
    f: f2,
    radius: p2
  } = d2(s2), u2 = o - r, m3 = Math.atan((1 - f2) * Math.tan(a)), g = Math.atan((1 - f2) * Math.tan(c)), M2 = Math.sin(m3), w3 = Math.cos(m3), y2 = Math.sin(g), v2 = Math.cos(g);
  let R2, z2, b2, j4, q, x, A3, N, S, k, P = 1e3, F = u2;
  do {
    if (A3 = Math.sin(F), N = Math.cos(F), b2 = Math.sqrt(v2 * A3 * (v2 * A3) + (w3 * y2 - M2 * v2 * N) * (w3 * y2 - M2 * v2 * N)), 0 === b2) return e.distance = 0, e.azimuth = void 0, e.reverseAzimuth = void 0, e;
    q = M2 * y2 + w3 * v2 * N, x = Math.atan2(b2, q), S = w3 * v2 * A3 / b2, z2 = 1 - S * S, j4 = q - 2 * M2 * y2 / z2, isNaN(j4) && (j4 = 0), k = f2 / 16 * z2 * (4 + f2 * (4 - 3 * z2)), R2 = F, F = u2 + (1 - k) * f2 * S * (x + k * b2 * (j4 + k * q * (2 * j4 * j4 - 1)));
  } while (Math.abs(F - R2) > 1e-12 && --P > 0);
  if (0 === P) {
    const t3 = p2, i3 = Math.acos(Math.sin(a) * Math.sin(c) + Math.cos(a) * Math.cos(c) * Math.cos(o - r)) * t3, s3 = o - r, l2 = Math.sin(s3) * Math.cos(c), h2 = Math.cos(a) * Math.sin(c) - Math.sin(a) * Math.cos(c) * Math.cos(s3), f3 = Math.atan2(l2, h2);
    return e.azimuth = f3 / i, e.distance = i3, e.reverseAzimuth = void 0, e;
  }
  const U = z2 * (l * l - h * h) / (h * h), C = U / 1024 * (256 + U * (U * (74 - 47 * U) - 128)), E = h * (1 + U / 16384 * (4096 + U * (U * (320 - 175 * U) - 768))) * (x - C * b2 * (j4 + C / 4 * (q * (2 * j4 * j4 - 1) - C / 6 * j4 * (4 * b2 * b2 - 3) * (4 * j4 * j4 - 3)))), G2 = Math.atan2(v2 * Math.sin(F), w3 * y2 - M2 * v2 * Math.cos(F)), I = Math.atan2(w3 * Math.sin(F), w3 * y2 * Math.cos(F) - M2 * v2);
  return e.azimuth = G2 / i, e.distance = E, e.reverseAzimuth = I / i, e;
}
function A2(e) {
  return w2(e) ? e : w(e) ? f.WGS84 : null;
}

export {
  w2 as w,
  y,
  v,
  R,
  z,
  b,
  j3 as j,
  A2 as A
};
//# sourceMappingURL=chunk-IVVINOEJ.js.map
