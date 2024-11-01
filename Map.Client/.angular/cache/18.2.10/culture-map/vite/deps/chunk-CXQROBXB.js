import {
  j
} from "./chunk-T6GCUITX.js";
import {
  G
} from "./chunk-NYQ5CYNR.js";
import {
  _
} from "./chunk-O7UDKFOW.js";
import {
  M
} from "./chunk-3ZXOUEQG.js";
import {
  W2 as W
} from "./chunk-JJS7PR2U.js";
import {
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/arcade/functions/centroid.js
function r(t, n, e) {
  return Math.sqrt((t[0] - n[0]) ** 2 + (t[1] - n[1]) ** 2 + (void 0 !== t[2] && void 0 !== n[2] ? (t[2] * e - n[2] * e) ** 2 : 0));
}
function o(t, n, e) {
  return (t[0] - n[0]) ** 2 + (t[1] - n[1]) ** 2 + (void 0 !== t[2] && void 0 !== n[2] ? (t[2] * e - n[2] * e) ** 2 : 0);
}
var s = [];
for (const N of [[9002, 56146130, 6131, 6132, 8050, 8051, 8228], [9003, 5702, 6358, 6359, 6360, 8052, 8053], [9095, 5754]]) {
  const t = N[0];
  for (let n = 1; n < N.length; n++) s[N[n]] = t;
}
var i = [];
function c(t) {
  return t.vcsWkid && void 0 !== s[t.vcsWkid] ? i[s[t.vcsWkid]] : t.latestVcsWkid && void 0 !== s[t.latestVcsWkid] ? i[s[t.latestVcsWkid]] : 1;
}
function f(t, n, e) {
  const r2 = {
    x: 0,
    y: 0
  };
  n && (r2.z = 0), e && (r2.m = 0);
  let o2 = 0, s2 = t[0];
  for (let i2 = 0; i2 < t.length; i2++) {
    const c2 = t[i2];
    if (false === x(c2, s2)) {
      const t2 = h(s2, c2, n), i3 = u(s2, c2, n, e);
      i3.x *= t2, i3.y *= t2, r2.x += i3.x, r2.y += i3.y, n && (i3.z *= t2, r2.z += i3.z), e && (i3.m *= t2, r2.m += i3.m), o2 += t2, s2 = c2;
    }
  }
  return o2 > 0 ? (r2.x /= o2, r2.y /= o2, n && (r2.z /= o2), e && (r2.m /= o2)) : (r2.x = t[0][0], r2.y = t[0][1], n && (r2.z = t[0][2]), e && n ? r2.m = t[0][3] : e && (r2.m = t[0][2])), r2;
}
function u(t, n, e, r2) {
  const o2 = {
    x: (t[0] + n[0]) / 2,
    y: (t[1] + n[1]) / 2
  };
  return e && (o2.z = (t[2] + n[2]) / 2), e && r2 ? o2.m = (t[3] + n[3]) / 2 : r2 && (o2.m = (t[2] + n[2]) / 2), o2;
}
function a(t, n) {
  if (t.length <= 1) return 0;
  let e = 0;
  for (let r2 = 1; r2 < t.length; r2++) e += h(t[r2 - 1], t[r2], n);
  return e;
}
function h(t, n, e) {
  const r2 = n[0] - t[0], o2 = n[1] - t[1];
  if (e) {
    const t2 = n[2] - n[2];
    return Math.sqrt(r2 * r2 + o2 * o2 + t2 * t2);
  }
  return Math.sqrt(r2 * r2 + o2 * o2);
}
function l(t, n, e) {
  const r2 = n[0] - t[0], o2 = n[1] - t[1];
  if (e) {
    const t2 = n[2] - n[2];
    return r2 * r2 + o2 * o2 + t2 * t2;
  }
  return r2 * r2 + o2 * o2;
}
function x(t, n) {
  if (t.length !== n.length) return false;
  for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return false;
  return true;
}
function y(t) {
  const e = {
    x: 0,
    y: 0,
    spatialReference: t.spatialReference.toJSON()
  }, r2 = {
    x: 0,
    y: 0,
    spatialReference: t.spatialReference.toJSON()
  };
  let o2 = 0, s2 = 0;
  for (let n = 0; n < t.paths.length; n++) {
    if (0 === t.paths[n].length) continue;
    const i2 = a(t.paths[n], true === t.hasZ);
    if (0 === i2) {
      const r3 = f(t.paths[n], true === t.hasZ, true === t.hasM);
      e.x += r3.x, e.y += r3.y, true === t.hasZ && (e.z += r3.z), true === t.hasM && (e.m += r3.m), ++o2;
    } else {
      const e2 = f(t.paths[n], true === t.hasZ, true === t.hasM);
      r2.x += e2.x * i2, r2.y += e2.y * i2, true === t.hasZ && (r2.z += e2.z * i2), true === t.hasM && (r2.m += e2.m * i2), s2 += i2;
    }
  }
  return s2 > 0 ? (r2.x /= s2, r2.y /= s2, true === t.hasZ && (r2.z /= s2), true === t.hasM && (r2.m /= s2), new _(r2)) : o2 > 0 ? (e.x /= o2, e.y /= o2, true === t.hasZ && (r2.z /= o2), true === t.hasM && (e.m /= o2), new _(e)) : null;
}
function m(t) {
  if (0 === t.points.length) return null;
  let e = 0, r2 = 0, o2 = 0, s2 = 0;
  for (let n = 0; n < t.points.length; n++) {
    const i3 = t.getPoint(n);
    true === i3.hasZ && (o2 += i3.z), true === i3.hasM && (s2 += i3.m), e += i3.x, r2 += i3.y, s2 += i3.m;
  }
  const i2 = {
    x: e / t.points.length,
    y: r2 / t.points.length,
    spatialReference: null
  };
  return i2.spatialReference = t.spatialReference.toJSON(), true === t.hasZ && (i2.z = o2 / t.points.length), true === t.hasM && (i2.m = s2 / t.points.length), new _(i2);
}
function p(t, n) {
  return t.x * n.x + t.y * n.y;
}
function g(t, n) {
  return t.x * n.y - n.x * t.y;
}
function M2(t, n, e = 0) {
  for (; t < e; ) t += n;
  const r2 = e + n;
  for (; t >= r2; ) t -= n;
  return t;
}
function z(t, n) {
  return Math.atan2(n.y - t.y, n.x - t.x);
}
function d(t, n) {
  return M2(z(t, n), 2 * Math.PI) * (180 / Math.PI);
}
function v(t, n) {
  return M2(Math.PI / 2 - z(t, n), 2 * Math.PI) * (180 / Math.PI);
}
function P(t, n, e) {
  const r2 = {
    x: t.x - n.x,
    y: t.y - n.y
  }, o2 = {
    x: e.x - n.x,
    y: e.y - n.y
  };
  return Math.atan2(g(r2, o2), p(r2, o2));
}
function Z(n, e, r2) {
  return M(M2(P(n, e, r2), 2 * Math.PI));
}
function I(n, e, r2) {
  return M(M2(-1 * P(n, e, r2), 2 * Math.PI));
}
i[9002] = 0.3048, i[9003] = 0.3048006096012192, i[9095] = 0.3048007491;
var R = [0, 0];
function k(t) {
  for (let n = 0; n < t.length; n++) {
    const r2 = t[n];
    for (let s2 = 0; s2 < r2.length - 1; s2++) {
      const o3 = r2[s2], i2 = r2[s2 + 1];
      for (let r3 = n + 1; r3 < t.length; r3++) for (let n2 = 0; n2 < t[r3].length - 1; n2++) {
        const s3 = t[r3][n2], c2 = t[r3][n2 + 1];
        if (G(o3, i2, s3, c2, R) && !(R[0] === o3[0] && R[1] === o3[1] || R[0] === s3[0] && R[1] === s3[1] || R[0] === i2[0] && R[1] === i2[1] || R[0] === c2[0] && R[1] === c2[1])) return true;
      }
    }
    const o2 = r2.length;
    if (!(o2 < 3)) for (let t2 = 0; t2 <= o2 - 2; t2++) {
      const n2 = r2[t2], s2 = r2[t2 + 1];
      for (let i2 = t2 + 2; i2 <= o2 - 2; i2++) {
        const t3 = r2[i2], o3 = r2[i2 + 1];
        if (G(n2, s2, t3, o3, R) && !(R[0] === n2[0] && R[1] === n2[1] || R[0] === t3[0] && R[1] === t3[1] || R[0] === s2[0] && R[1] === s2[1] || R[0] === o3[0] && R[1] === o3[1])) return true;
      }
    }
  }
  return false;
}
function W2(t, n, e) {
  return Math.max(n, Math.min(e, t));
}
function j2(t, n) {
  return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
}
function q(t) {
  return t[0] * t[0] + t[1] * t[1] + t[2] * t[2];
}
function w(t, n, e) {
  const r2 = [e[0] - n[0], e[1] - n[1], e[2] - n[2]], o2 = W2(j2(r2, [t[0] - n[0], t[1] - n[1], t[2] - n[2]]) / q(r2), 0, 1);
  return [n[0] + (e[0] - n[0]) * o2, n[1] + (e[1] - n[1]) * o2, n[2] + (e[2] - n[2]) * o2];
}
function J(t, n, e) {
  let r2 = 0;
  const o2 = e[0] - n[0], s2 = e[1] - n[1], i2 = o2 * o2 + s2 * s2;
  if (0 === i2) r2 = 0.5;
  else {
    r2 = ((t[0] - n[0]) * o2 + (t[1] - n[1]) * s2) / i2, r2 < 0 ? r2 = 0 : r2 > 1 && (r2 = 1);
  }
  return r2 <= 0.5 ? [n[0] + (e[0] - n[0]) * r2, n[1] + (e[1] - n[1]) * r2] : [e[0] - (e[0] - n[0]) * (1 - r2), e[1] - (e[1] - n[1]) * (1 - r2)];
}

// ../../../node_modules/@arcgis/core/arcade/functions/measures.js
function f2(e, t, n) {
  const s2 = t[0] - e[0], a2 = t[1] - e[1];
  return Math.sqrt(s2 * s2 + a2 * a2);
}
function u2(e) {
  return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
}
function h2(e) {
  const t = u2(e);
  return [e[0] / t, e[1] / t, e[2] / t];
}
function p2(e, t, n, s2) {
  const a2 = h2([t[0] - e[0], t[1] - e[1], t[2] * s2 - e[2] * s2]);
  return [e[0] + a2[0] * n, e[1] + a2[1] * n, e[2] + a2[2] * n];
}
function m2(e, t, n, s2) {
  return e + (t - e) / n * s2;
}
function d2(e, t, n) {
  let s2 = t[0] - e[0], a2 = t[1] - e[1];
  const r2 = Math.sqrt(s2 * s2 + a2 * a2);
  return s2 /= r2, a2 /= r2, s2 *= n, a2 *= n, [e[0] + s2, e[1] + a2];
}
function y2(n, s2) {
  if (!n) return null;
  switch (n.type) {
    case "extent":
    case "multipoint":
    case "mesh":
    case "point":
      return null;
  }
  const a2 = "polygon" === n.type ? n.rings : n.paths;
  let r2 = 1;
  if (n.spatialReference.vcsWkid || n.spatialReference.latestVcsWkid) {
    r2 = c(n.spatialReference) / W(n.spatialReference);
  }
  if (0 === a2.length) return null;
  if (0 === a2[0].length) return null;
  if (false === n.hasM) return null;
  let l2 = -1, o2 = 0;
  const u3 = n.hasZ ? r : f2, h3 = n.hasZ ? 3 : 2, m3 = 2;
  for (const e of a2) {
    if (l2++, e.length > 0 && e[0][h3] === s2) return {
      partId: l2,
      distanceAlong: o2,
      coordinate: new _(__spreadValues(__spreadValues({
        hasZ: n.hasZ,
        hasM: n.hasM,
        spatialReference: n.spatialReference,
        x: e[0][0],
        y: e[0][1]
      }, n.hasZ ? {
        z: e[0][m3]
      } : {}), n.hasM ? {
        m: e[0][h3]
      } : {})),
      segmentId: 0
    };
    let t = -1;
    for (let a3 = 1; a3 < e.length; a3++) {
      const i2 = u3(e[a3 - 1], e[a3], r2);
      t++;
      const f3 = e[a3][h3] - e[a3 - 1][h3], y3 = e[a3][h3];
      if (y3 === s2) return {
        partId: l2,
        distanceAlong: i2 + o2,
        coordinate: new _(__spreadValues(__spreadValues({
          hasZ: n.hasZ,
          hasM: n.hasM,
          spatialReference: n.spatialReference,
          x: e[a3][0],
          y: e[a3][1]
        }, n.hasZ ? {
          z: e[a3][m3]
        } : {}), n.hasM ? {
          m: e[a3][h3]
        } : {})),
        segmentId: t
      };
      if (y3 > s2 && s2 > e[a3 - 1][h3]) {
        const y4 = (s2 - e[a3 - 1][h3]) / f3 * i2;
        let Z3 = n.hasZ ? p2(e[a3 - 1], e[a3], y4, r2) : d2(e[a3 - 1], e[a3], y4);
        Z3 = [...Z3, s2];
        const R3 = new _(__spreadValues(__spreadValues({
          hasZ: n.hasZ,
          hasM: n.hasM,
          spatialReference: n.spatialReference,
          x: Z3[0],
          y: Z3[1]
        }, n.hasZ ? {
          z: Z3[m3]
        } : {}), n.hasM ? {
          m: Z3[h3]
        } : {}));
        return {
          partId: l2,
          distanceAlong: o2 + u3(e[a3 - 1], [R3.x, R3.y, ...R3.hasZ ? [R3.z] : [], ...R3.hasM ? [R3.m] : []], r2),
          coordinate: R3,
          segmentId: t
        };
      }
      o2 += i2;
    }
  }
  return null;
}
function Z2(n, s2) {
  if (!n) return null;
  switch (n.type) {
    case "extent":
    case "multipoint":
    case "mesh":
    case "point":
      return null;
  }
  const a2 = "polygon" === n.type ? n.rings : n.paths;
  if (s2 < 0) return null;
  let r2 = 1;
  if (n.spatialReference.vcsWkid || n.spatialReference.latestVcsWkid) {
    r2 = c(n.spatialReference) / W(n.spatialReference);
  }
  let l2 = 0;
  const o2 = n.hasZ ? 3 : 2, u3 = 2, h3 = n.hasZ ? r : f2;
  let y3 = -1;
  if (0 === s2) return 0 === a2.length || 0 === a2[0].length ? null : {
    partId: 0,
    coordinate: new _(__spreadValues(__spreadValues({
      hasZ: n.hasZ,
      hasM: n.hasM,
      spatialReference: n.spatialReference,
      x: a2[0][0][0],
      y: a2[0][0][1]
    }, n.hasZ ? {
      z: a2[0][0][u3]
    } : {}), n.hasM ? {
      m: a2[0][0][o2]
    } : {})),
    segmentId: 0
  };
  for (const e of a2) {
    y3++;
    let t = -1;
    for (let a3 = 1; a3 < e.length; a3++) {
      t++;
      const i2 = h3(e[a3 - 1], e[a3], r2), f3 = l2 + i2;
      if (f3 === s2) return {
        partId: y3,
        coordinate: new _(__spreadValues(__spreadValues({
          hasZ: n.hasZ,
          hasM: n.hasM,
          spatialReference: n.spatialReference,
          x: e[a3][0],
          y: e[a3][1]
        }, n.hasZ ? {
          z: e[a3][u3]
        } : {}), n.hasM ? {
          m: e[a3][o2]
        } : {})),
        segmentId: t
      };
      if (f3 > s2) {
        let f4 = n.hasZ ? p2(e[a3 - 1], e[a3], s2 - l2, r2) : d2(e[a3 - 1], e[a3], s2 - l2);
        return f4 = [...f4, m2(e[a3 - 1][o2], e[a3][o2], i2, s2 - l2)], {
          partId: y3,
          coordinate: new _(__spreadValues(__spreadValues({
            hasZ: n.hasZ,
            hasM: n.hasM,
            spatialReference: n.spatialReference,
            x: f4[0],
            y: f4[1]
          }, n.hasZ ? {
            z: f4[u3]
          } : {}), n.hasM ? {
            m: f4[o2]
          } : {})),
          segmentId: t
        };
      }
      l2 = f3;
    }
  }
  return null;
}
function R2(s2, a2) {
  if (!s2) return null;
  if (!a2) return null;
  let r2 = 1;
  if (a2.spatialReference.vcsWkid || a2.spatialReference.latestVcsWkid) {
    r2 = c(a2.spatialReference) / W(a2.spatialReference);
  }
  let l2 = null, c2 = 0;
  return l2 = s2, c2 = s2.hasZ && a2.hasZ ? r([a2.x, a2.y, a2.z], [s2.x, s2.y, s2.z], r2) : h([a2.x, a2.y], [s2.x, s2.y], false), {
    coordinate: l2,
    distance: c2
  };
}
function g2(t, n) {
  if (!t) return null;
  if (!n) return null;
  let r2 = 1;
  if (n.spatialReference.vcsWkid || n.spatialReference.latestVcsWkid) {
    r2 = c(n.spatialReference) / W(n.spatialReference);
  }
  let l2 = null, c2 = 0, o2 = Number.MAX_VALUE, f3 = -1, u3 = -1;
  for (const e of t.points || []) {
    u3++;
    const l3 = t.hasZ && n.hasZ ? o([e[0], e[1], e[2]], [n.x, n.y, n.z], r2) : l([e[0], e[1]], [n.x, n.y], false);
    l3 < o2 && (o2 = l3, f3 = u3);
  }
  return f3 < 0 ? null : (c2 = o2, l2 = t.getPoint(f3), {
    coordinate: l2,
    distance: Math.sqrt(c2)
  });
}
function M3(o2, f3) {
  if (!o2) return null;
  if (!f3) return null;
  const u3 = "polygon" === o2.type ? o2.rings : o2.paths;
  let h3 = 1;
  if (f3.spatialReference.vcsWkid || f3.spatialReference.latestVcsWkid) {
    h3 = c(f3.spatialReference) / W(f3.spatialReference);
  }
  let p3 = Number.MAX_VALUE, d3 = -1, y3 = -1, Z3 = -1;
  const R3 = o2.hasZ && f3.hasZ;
  let g3 = null;
  const M4 = R3 ? [f3.x, f3.y, f3.z] : [f3.x, f3.y];
  for (const e of u3) {
    y3++;
    for (let t = 1; t < e.length; t++) {
      const n = R3 ? w(M4, e[t - 1], e[t]) : J(M4, e[t - 1], e[t]), i2 = R3 ? o(n, M4, h3) : l(n, M4, false);
      i2 < p3 && (p3 = i2, g3 = n, Z3 = y3, d3 = t - 1);
    }
  }
  if (d3 < 0) return null;
  const x3 = o2.hasM && o2.hasZ ? 3 : 2, I2 = 2, z2 = u3[Z3][d3], w2 = u3[Z3][d3 + 1];
  let k2 = null, W3 = null, A = R3 ? g3[2] : null;
  o2.hasM && (W3 = m2(z2[x3], w2[x3], R3 ? r(z2, w2, h3) : h(z2, w2, false), R3 ? r(z2, g3, h3) : h(z2, g3, false))), o2.hasZ && false === f3.hasZ && (A = m2(z2[I2], w2[I2], R3 ? r(z2, w2, h3) : h(z2, w2, false), R3 ? r(z2, g3, h3) : h(z2, g3, false))), k2 = new _(__spreadValues(__spreadValues({
    hasZ: R3,
    hasM: o2.hasM,
    spatialReference: f3.spatialReference,
    x: g3[0],
    y: g3[1]
  }, o2.hasZ ? {
    z: A
  } : {}), o2.hasM ? {
    m: W3
  } : {}));
  let V = 0;
  for (let e = 0; e <= Z3; e++) {
    const s2 = u3[e], a2 = e === Z3 ? d3 : s2.length - 1;
    for (let e2 = 1; e2 <= a2; e2++) V += o2.hasZ ? r(s2[e2 - 1], s2[e2], h3) : h([s2[e2 - 1][0], s2[e2 - 1][1]], [s2[e2][0], s2[e2][1]], false);
  }
  return V += o2.hasZ ? r(z2, [k2.x, k2.y, k2.z], h3) : h(z2, [k2.x, k2.y], false), {
    partId: Z3,
    segmentId: d3,
    coordinate: k2,
    distance: Math.sqrt(p3),
    distanceAlong: V
  };
}
function x2(e, t) {
  if (!e) return null;
  if (!t) return null;
  if ("extent" === e.type) {
    const t2 = e;
    e = new j({
      spatialReference: e.spatialReference,
      rings: [[[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]]
    });
  }
  switch (e.type) {
    case "point":
      return R2(e, t) ?? null;
    case "multipoint":
      return g2(e, t) ?? null;
    case "polygon":
    case "polyline":
      return M3(e, t) ?? null;
    default:
      return null;
  }
}

export {
  r,
  c,
  y,
  m,
  d,
  v,
  Z,
  I,
  k,
  y2,
  Z2,
  x2 as x
};
//# sourceMappingURL=chunk-CXQROBXB.js.map
