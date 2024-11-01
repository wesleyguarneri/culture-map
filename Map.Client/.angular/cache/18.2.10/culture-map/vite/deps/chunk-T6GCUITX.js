import {
  a as a3,
  c,
  i
} from "./chunk-TUIGM7TV.js";
import {
  u
} from "./chunk-IHVSZYZS.js";
import {
  f as f2,
  p,
  w
} from "./chunk-NYQ5CYNR.js";
import {
  _,
  g,
  n
} from "./chunk-O7UDKFOW.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a2
} from "./chunk-DDYVXG4F.js";
import {
  a
} from "./chunk-WYIDUUN2.js";
import {
  h
} from "./chunk-DXLOWWK7.js";

// ../../../node_modules/@arcgis/core/geometry/support/zmUtils.js
function h2(h7, a6, s4 = false) {
  let {
    hasM: t4,
    hasZ: e4
  } = h7;
  Array.isArray(a6) ? 4 !== a6.length || t4 || e4 ? 3 === a6.length && s4 && !t4 ? (e4 = true, t4 = false) : 3 === a6.length && t4 && e4 && (t4 = false, e4 = false) : (t4 = true, e4 = true) : (e4 = !e4 && a6.hasZ && (!t4 || a6.hasM), t4 = !t4 && a6.hasM && (!e4 || a6.hasZ)), h7.hasZ = e4, h7.hasM = t4;
}

// ../../../node_modules/@arcgis/core/geometry/Multipoint.js
var h3;
function l(t4) {
  return (s4, e4) => null == s4 ? e4 : null == e4 ? s4 : t4(s4, e4);
}
function c2(t4) {
  return t4 && ("esri.geometry.SpatialReference" === t4.declaredClass || null != t4.wkid);
}
var m = h3 = class extends n {
  constructor(...t4) {
    super(...t4), this.points = [], this.type = "multipoint";
  }
  normalizeCtorArgs(t4, s4) {
    if (!t4 && !s4) return {};
    const e4 = {};
    Array.isArray(t4) ? (e4.points = t4, e4.spatialReference = s4) : c2(t4) ? e4.spatialReference = t4 : (t4.points && (e4.points = t4.points), t4.spatialReference && (e4.spatialReference = t4.spatialReference), t4.hasZ && (e4.hasZ = t4.hasZ), t4.hasM && (e4.hasM = t4.hasM));
    const i4 = e4.points?.[0];
    return i4 && (void 0 === e4.hasZ && void 0 === e4.hasM ? (e4.hasZ = i4.length > 2, e4.hasM = false) : void 0 === e4.hasZ ? e4.hasZ = i4.length > 3 : void 0 === e4.hasM && (e4.hasM = i4.length > 3)), e4;
  }
  get cache() {
    return this.commitProperty("points"), this.commitProperty("hasZ"), this.commitProperty("hasM"), this.commitProperty("spatialReference"), {};
  }
  get extent() {
    const t4 = this.points;
    if (!t4.length) return null;
    const s4 = new w(), e4 = this.hasZ, i4 = this.hasM, r5 = e4 ? 3 : 2, n3 = t4[0], a6 = l(Math.min), p2 = l(Math.max);
    let h7, c7, m5, u7, [f7, y3] = n3, [d3, g3] = n3;
    for (let o4 = 0, l5 = t4.length; o4 < l5; o4++) {
      const s5 = t4[o4], [n4, l6] = s5;
      if (f7 = a6(f7, n4), y3 = a6(y3, l6), d3 = p2(d3, n4), g3 = p2(g3, l6), e4 && s5.length > 2) {
        const t5 = s5[2];
        h7 = a6(h7, t5), m5 = p2(m5, t5);
      }
      if (i4 && s5.length > r5) {
        const t5 = s5[r5];
        c7 = a6(c7, t5), u7 = p2(u7, t5);
      }
    }
    return s4.xmin = f7, s4.ymin = y3, s4.xmax = d3, s4.ymax = g3, s4.spatialReference = this.spatialReference, e4 ? (s4.zmin = h7, s4.zmax = m5) : (s4.zmin = void 0, s4.zmax = void 0), i4 ? (s4.mmin = c7, s4.mmax = u7) : (s4.mmin = void 0, s4.mmax = void 0), s4;
  }
  writePoints(t4, e4) {
    e4.points = a(this.points);
  }
  addPoint(t4) {
    return h2(this, t4), Array.isArray(t4) ? this.points.push(t4) : this.points.push(t4.toArray()), this.notifyChange("points"), this;
  }
  clone() {
    const t4 = {
      points: a(this.points),
      spatialReference: this.spatialReference
    };
    return this.hasZ && (t4.hasZ = true), this.hasM && (t4.hasM = true), new h3(t4);
  }
  getPoint(t4) {
    if (!this._validateInputs(t4)) return null;
    const s4 = this.points[t4], e4 = {
      x: s4[0],
      y: s4[1],
      spatialReference: this.spatialReference
    };
    let i4 = 2;
    return this.hasZ && (e4.z = s4[2], i4 = 3), this.hasM && (e4.m = s4[i4]), new _(e4);
  }
  removePoint(t4) {
    if (!this._validateInputs(t4)) return null;
    const s4 = new _(this.points.splice(t4, 1)[0], this.spatialReference);
    return this.notifyChange("points"), s4;
  }
  setPoint(t4, s4) {
    return this._validateInputs(t4) ? (h2(this, s4), Array.isArray(s4) || (s4 = s4.toArray()), this.points[t4] = s4, this.notifyChange("points"), this) : this;
  }
  toJSON(t4) {
    return this.write({}, t4);
  }
  _validateInputs(t4) {
    return null != t4 && t4 >= 0 && t4 < this.points.length;
  }
};
e([y({
  readOnly: true
})], m.prototype, "cache", null), e([y()], m.prototype, "extent", null), e([y({
  type: [[Number]],
  json: {
    write: {
      isRequired: true
    }
  }
})], m.prototype, "points", void 0), e([r("points")], m.prototype, "writePoints", null), m = h3 = e([a2("esri.geometry.Multipoint")], m), m.prototype.toJSON.isDefaultToJSON = true;
var u2 = m;

// ../../../node_modules/@arcgis/core/geometry/support/boundsUtils.js
function t(n3) {
  return void 0 !== n3.xmin && void 0 !== n3.ymin && void 0 !== n3.xmax && void 0 !== n3.ymax;
}
function i2(n3) {
  return void 0 !== n3.points;
}
function o(n3) {
  return void 0 !== n3.x && void 0 !== n3.y;
}
function e2(n3) {
  return void 0 !== n3.paths;
}
function r2(n3) {
  return void 0 !== n3.rings;
}
function u3(n3) {
  function t4(t5, i4) {
    return null == t5 ? i4 : null == i4 ? t5 : n3(t5, i4);
  }
  return t4;
}
var l2 = u3(Math.min);
var h4 = u3(Math.max);
function a4(n3, u7) {
  return e2(u7) ? x(n3, u7.paths, false, false) : r2(u7) ? x(n3, u7.rings, false, false) : i2(u7) ? g2(n3, u7.points, false, false, false, false) : t(u7) ? s(n3, u7) : (o(u7) && (n3[0] = u7.x, n3[1] = u7.y, n3[2] = u7.x, n3[3] = u7.y), n3);
}
function c3(t4) {
  let i4, o4, e4, r5;
  for (t4.reset(), i4 = e4 = 1 / 0, o4 = r5 = -1 / 0; t4.nextPath(); ) {
    const n3 = f3(t4);
    i4 = Math.min(n3[0], i4), e4 = Math.min(n3[1], e4), o4 = Math.max(n3[2], o4), r5 = Math.max(n3[3], r5);
  }
  return u([i4, e4, o4, r5]);
}
function f3(t4) {
  let i4, o4, e4, r5;
  for (i4 = e4 = 1 / 0, o4 = r5 = -1 / 0; t4.nextPoint(); ) i4 = Math.min(t4.x, i4), e4 = Math.min(t4.y, e4), o4 = Math.max(t4.x, o4), r5 = Math.max(t4.y, r5);
  return u([i4, e4, o4, r5]);
}
function m2(n3, u7) {
  return e2(u7) ? x(n3, u7.paths, true, false) : r2(u7) ? x(n3, u7.rings, true, false) : i2(u7) ? g2(n3, u7.points, true, false, true, false) : t(u7) ? s(n3, u7, true, false, true, false) : (o(u7) && (n3[0] = u7.x, n3[1] = u7.y, n3[2] = u7.z, n3[3] = u7.x, n3[4] = u7.y, n3[5] = u7.z), n3);
}
function x(n3, t4, i4, o4) {
  const e4 = i4 ? 3 : 2;
  if (!t4.length || !t4[0].length) return null;
  let r5, u7, a6, c7, [f7, m5] = t4[0][0], [x5, s4] = t4[0][0];
  for (let g3 = 0; g3 < t4.length; g3++) {
    const n4 = t4[g3];
    for (let t5 = 0; t5 < n4.length; t5++) {
      const g4 = n4[t5], [y3, d3] = g4;
      if (f7 = l2(f7, y3), m5 = l2(m5, d3), x5 = h4(x5, y3), s4 = h4(s4, d3), i4 && g4.length > 2) {
        const n5 = g4[2];
        r5 = l2(r5, n5), u7 = h4(u7, n5);
      }
      if (o4 && g4.length > e4) {
        const n5 = g4[e4];
        a6 = l2(r5, n5), c7 = h4(u7, n5);
      }
    }
  }
  return i4 ? o4 ? (n3[0] = f7, n3[1] = m5, n3[2] = r5, n3[3] = a6, n3[4] = x5, n3[5] = s4, n3[6] = u7, n3[7] = c7, n3.length = 8, n3) : (n3[0] = f7, n3[1] = m5, n3[2] = r5, n3[3] = x5, n3[4] = s4, n3[5] = u7, n3.length = 6, n3) : o4 ? (n3[0] = f7, n3[1] = m5, n3[2] = a6, n3[3] = x5, n3[4] = s4, n3[5] = c7, n3.length = 6, n3) : (n3[0] = f7, n3[1] = m5, n3[2] = x5, n3[3] = s4, n3.length = 4, n3);
}
function s(n3, t4, i4, o4, e4, r5) {
  const u7 = t4.xmin, l5 = t4.xmax, h7 = t4.ymin, a6 = t4.ymax;
  let c7 = t4.zmin, f7 = t4.zmax, m5 = t4.mmin, x5 = t4.mmax;
  return e4 ? (c7 = c7 || 0, f7 = f7 || 0, r5 ? (m5 = m5 || 0, x5 = x5 || 0, n3[0] = u7, n3[1] = h7, n3[2] = c7, n3[3] = m5, n3[4] = l5, n3[5] = a6, n3[6] = f7, n3[7] = x5, n3) : (n3[0] = u7, n3[1] = h7, n3[2] = c7, n3[3] = l5, n3[4] = a6, n3[5] = f7, n3)) : r5 ? (m5 = m5 || 0, x5 = x5 || 0, n3[0] = u7, n3[1] = h7, n3[2] = m5, n3[3] = l5, n3[4] = a6, n3[5] = x5, n3) : (n3[0] = u7, n3[1] = h7, n3[2] = l5, n3[3] = a6, n3);
}
function g2(n3, t4, i4, o4, e4, r5) {
  const u7 = i4 ? 3 : 2, a6 = o4 && r5, c7 = i4 && e4;
  if (!t4.length || !t4[0].length) return null;
  let f7, m5, x5, s4, [g3, y3] = t4[0], [d3, M] = t4[0];
  for (let v2 = 0; v2 < t4.length; v2++) {
    const n4 = t4[v2], [i5, o5] = n4;
    if (g3 = l2(g3, i5), y3 = l2(y3, o5), d3 = h4(d3, i5), M = h4(M, o5), c7 && n4.length > 2) {
      const t5 = n4[2];
      f7 = l2(f7, t5), m5 = h4(m5, t5);
    }
    if (a6 && n4.length > u7) {
      const t5 = n4[u7];
      x5 = l2(f7, t5), s4 = h4(m5, t5);
    }
  }
  return e4 ? (f7 = f7 || 0, m5 = m5 || 0, r5 ? (x5 = x5 || 0, s4 = s4 || 0, n3[0] = g3, n3[1] = y3, n3[2] = f7, n3[3] = x5, n3[4] = d3, n3[5] = M, n3[6] = m5, n3[7] = s4, n3) : (n3[0] = g3, n3[1] = y3, n3[2] = f7, n3[3] = d3, n3[4] = M, n3[5] = m5, n3)) : r5 ? (x5 = x5 || 0, s4 = s4 || 0, n3[0] = g3, n3[1] = y3, n3[2] = x5, n3[3] = d3, n3[4] = M, n3[5] = s4, n3) : (n3[0] = g3, n3[1] = y3, n3[2] = d3, n3[3] = M, n3);
}

// ../../../node_modules/@arcgis/core/geometry/geometryCursorCollectUtils.js
function t2(t4) {
  const n3 = [];
  for (t4.reset(); t4.nextPath(); ) {
    const e4 = [];
    for (; t4.nextPoint(); ) e4.push([t4.x, t4.y]);
    n3.push(e4);
  }
  return t4.reset(), n3;
}
function n2(t4) {
  const n3 = [];
  for (; t4.nextPoint(); ) n3.push([t4.x, t4.y]);
  return t4.seekPathStart(), n3;
}

// ../../../node_modules/@arcgis/core/geometry/support/centroid.js
function r3(t4) {
  return t4 ? t4.hasZ ? [t4.xmax - t4.xmin / 2, t4.ymax - t4.ymin / 2, t4.zmax - t4.zmin / 2] : [t4.xmax - t4.xmin / 2, t4.ymax - t4.ymin / 2] : null;
}
function l3(t4) {
  return t4 ? o2(t4.rings, t4.hasZ ?? false) : null;
}
function o2(t4, n3) {
  if (!t4?.length) return null;
  const e4 = [], r5 = [], l5 = n3 ? [1 / 0, -1 / 0, 1 / 0, -1 / 0, 1 / 0, -1 / 0] : [1 / 0, -1 / 0, 1 / 0, -1 / 0];
  for (let o4 = 0, i4 = t4.length; o4 < i4; o4++) {
    const e5 = u4(t4[o4], n3, l5);
    e5 && r5.push(e5);
  }
  if (r5.sort((t5, e5) => {
    let r6 = t5[2] - e5[2];
    return 0 === r6 && n3 && (r6 = t5[4] - e5[4]), r6;
  }), r5.length && (e4[0] = r5[0][0], e4[1] = r5[0][1], n3 && (e4[2] = r5[0][3]), (e4[0] < l5[0] || e4[0] > l5[1] || e4[1] < l5[2] || e4[1] > l5[3] || n3 && (e4[2] < l5[4] || e4[2] > l5[5])) && (e4.length = 0)), !e4.length) {
    const r6 = t4[0] && t4[0].length ? s2(t4[0], n3) : null;
    if (!r6) return null;
    e4[0] = r6[0], e4[1] = r6[1], n3 && r6.length > 2 && (e4[2] = r6[2]);
  }
  return e4;
}
function u4(t4, n3, e4) {
  let r5 = 0, l5 = 0, o4 = 0, u7 = 0, i4 = 0;
  const s4 = t4.length ? t4[0][0] : 0, I2 = t4.length ? t4[0][1] : 0, h7 = t4.length && n3 ? t4[0][2] : 0;
  for (let f7 = 0; f7 < t4.length; f7++) {
    const c8 = t4[f7], N2 = t4[(f7 + 1) % t4.length], [x5, g3, a6] = c8, m5 = x5 - s4, P = g3 - I2, [T, y3, E] = N2, S = T - s4, p2 = y3 - I2, z = m5 * p2 - S * P;
    if (u7 += z, r5 += (m5 + S) * z, l5 += (P + p2) * z, n3 && c8.length > 2 && N2.length > 2) {
      const t5 = a6 - h7, n4 = E - h7, e5 = m5 * n4 - S * t5;
      o4 += (t5 + n4) * e5, i4 += e5;
    }
    x5 < e4[0] && (e4[0] = x5), x5 > e4[1] && (e4[1] = x5), g3 < e4[2] && (e4[2] = g3), g3 > e4[3] && (e4[3] = g3), n3 && (a6 < e4[4] && (e4[4] = a6), a6 > e4[5] && (e4[5] = a6));
  }
  if (u7 > 0 && (u7 *= -1), i4 > 0 && (i4 *= -1), !u7) return null;
  u7 *= 0.5, i4 *= 0.5;
  const c7 = [r5 / (6 * u7) + s4, l5 / (6 * u7) + I2, u7];
  return n3 && (e4[4] === e4[5] || 0 === i4 ? (c7[3] = (e4[4] + e4[5]) / 2, c7[4] = 0) : (c7[3] = o4 / (6 * i4) + h7, c7[4] = i4)), c7;
}
function i3(t4, n3) {
  let e4 = 0, r5 = 0, l5 = 0;
  t4.nextPoint();
  const o4 = t4.pathSize ? t4.x : 0, u7 = t4.pathSize ? t4.y : 0;
  for (let i4 = 0; i4 < t4.pathSize; i4++) {
    t4.seekInPath(i4);
    const s4 = [t4.x, t4.y];
    t4.seekInPath((i4 + 1) % t4.pathSize);
    const I2 = [t4.x, t4.y], [h7, c7] = s4, f7 = h7 - o4, N2 = c7 - u7, [x5, g3] = I2, a6 = x5 - o4, m5 = g3 - u7, P = f7 * m5 - a6 * N2;
    l5 += P, e4 += (f7 + a6) * P, r5 += (N2 + m5) * P, h7 < n3[0] && (n3[0] = h7), h7 > n3[1] && (n3[1] = h7), c7 < n3[2] && (n3[2] = c7), c7 > n3[3] && (n3[3] = c7);
  }
  if (l5 > 0 && (l5 *= -1), !l5) return null;
  l5 *= 0.5;
  return [e4 / (6 * l5) + o4, r5 / (6 * l5) + u7, l5];
}
function s2(t4, r5) {
  const l5 = r5 ? [0, 0, 0] : [0, 0], o4 = r5 ? [0, 0, 0] : [0, 0];
  let u7 = 0, i4 = 0, s4 = 0, I2 = 0;
  for (let h7 = 0, c7 = t4.length; h7 < c7 - 1; h7++) {
    const c8 = t4[h7], f7 = t4[h7 + 1];
    if (c8 && f7) {
      l5[0] = c8[0], l5[1] = c8[1], o4[0] = f7[0], o4[1] = f7[1], r5 && c8.length > 2 && f7.length > 2 && (l5[2] = c8[2], o4[2] = f7[2]);
      const t5 = i(l5, o4);
      if (t5) {
        u7 += t5;
        const n3 = c(c8, f7);
        i4 += t5 * n3[0], s4 += t5 * n3[1], r5 && n3.length > 2 && (I2 += t5 * n3[2]);
      }
    }
  }
  return u7 > 0 ? r5 ? [i4 / u7, s4 / u7, I2 / u7] : [i4 / u7, s4 / u7] : t4.length ? t4[0] : null;
}
function I(n3) {
  const {
    hasZ: e4,
    totalSize: r5
  } = n3;
  if (0 === r5) return null;
  const l5 = [], o4 = [], i4 = e4 ? [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY] : [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
  for (n3.reset(); n3.nextPath(); ) {
    const e5 = u4(n2(n3), n3.hasZ, i4);
    e5 && o4.push(e5);
  }
  if (o4.sort((t4, n4) => {
    let r6 = t4[2] - n4[2];
    return 0 === r6 && e4 && (r6 = t4[4] - n4[4]), r6;
  }), o4.length && (l5[0] = o4[0][0], l5[1] = o4[0][1], e4 && (l5[2] = o4[0][3]), (l5[0] < i4[0] || l5[0] > i4[1] || l5[1] < i4[2] || l5[1] > i4[3] || e4 && (l5[2] < i4[4] || l5[2] > i4[5])) && (l5.length = 0)), !l5.length) {
    n3.reset(), n3.nextPath();
    const t4 = n3.pathSize ? h5(n3) : null;
    if (!t4) return null;
    l5[0] = t4[0], l5[1] = t4[1], e4 && t4.length > 2 && (l5[2] = t4[2]);
  }
  return l5;
}
function h5(t4) {
  const {
    hasZ: r5
  } = t4, l5 = r5 ? [0, 0, 0] : [0, 0], o4 = r5 ? [0, 0, 0] : [0, 0];
  let u7 = 0, i4 = 0, s4 = 0, I2 = 0;
  if (t4.nextPoint()) {
    let h7 = t4.x, c7 = t4.y, f7 = t4.z;
    for (; t4.nextPoint(); ) {
      const N2 = t4.x, x5 = t4.y, g3 = t4.z;
      l5[0] = h7, l5[1] = c7, o4[0] = N2, o4[1] = x5, r5 && (l5[2] = f7, o4[2] = g3);
      const a6 = i(l5, o4);
      if (a6) {
        u7 += a6;
        const t5 = c(l5, o4);
        i4 += a6 * t5[0], s4 += a6 * t5[1], r5 && t5.length > 2 && (I2 += a6 * t5[2]);
      }
      h7 = N2, c7 = x5, f7 = g3;
    }
  }
  return u7 > 0 ? r5 ? [i4 / u7, s4 / u7, I2 / u7] : [i4 / u7, s4 / u7] : t4.pathSize ? (t4.seekPathStart(), t4.nextPoint(), [t4.x, t4.y]) : null;
}
var c4 = 1e-6;
function f4(t4) {
  let n3 = 0;
  for (t4.reset(); t4.nextPath(); ) n3 += t4.getCurrentRingArea();
  if (n3 < c4) {
    const n4 = I(t4);
    return n4 ? [n4[0], n4[1]] : null;
  }
  const e4 = [0, 0];
  if (t4.reset(), !t4.nextPath() || !t4.nextPoint()) return null;
  const r5 = [t4.x, t4.y];
  for (t4.reset(); t4.nextPath(); ) x2(e4, r5, t4);
  return e4[0] *= 1 / n3, e4[1] *= 1 / n3, e4[0] += r5[0], e4[1] += r5[1], e4;
}
var N = 1 / 3;
function x2(t4, n3, e4) {
  if (!t4 || !e4 || e4.pathSize < 3) return null;
  e4.nextPoint();
  const r5 = e4.x, l5 = e4.y;
  e4.nextPoint();
  let o4, u7 = e4.x - r5, i4 = e4.y - l5, s4 = 0, I2 = 0;
  for (; e4.nextPoint(); ) s4 = e4.x - r5, I2 = e4.y - l5, o4 = 0.5 * N * (s4 * i4 - I2 * u7), t4[0] += o4 * (u7 + s4), t4[1] += o4 * (i4 + I2), u7 = s4, i4 = I2;
  const h7 = e4.getCurrentRingArea(), c7 = [r5, l5];
  return c7[0] -= n3[0], c7[1] -= n3[1], c7[0] *= h7, c7[1] *= h7, t4[0] += c7[0], t4[1] += c7[1], t4;
}

// ../../../node_modules/@arcgis/core/geometry/support/extentUtils.js
function t3(n3) {
  return void 0 !== n3.xmin && void 0 !== n3.ymin && void 0 !== n3.xmax && void 0 !== n3.ymax;
}
function u5(n3) {
  return void 0 !== n3.points;
}
function m3(n3) {
  return void 0 !== n3.x && void 0 !== n3.y;
}
function o3(n3) {
  return void 0 !== n3.paths;
}
function r4(n3) {
  return void 0 !== n3.rings;
}
var x3 = [];
function a5(n3, i4, t4, u7) {
  return {
    xmin: n3,
    ymin: i4,
    xmax: t4,
    ymax: u7
  };
}
function c5(n3, i4, t4, u7, m5, o4) {
  return {
    xmin: n3,
    ymin: i4,
    zmin: t4,
    xmax: u7,
    ymax: m5,
    zmax: o4
  };
}
function s3(n3, i4, t4, u7, m5, o4) {
  return {
    xmin: n3,
    ymin: i4,
    mmin: t4,
    xmax: u7,
    ymax: m5,
    mmax: o4
  };
}
function e3(n3, i4, t4, u7, m5, o4, r5, x5) {
  return {
    xmin: n3,
    ymin: i4,
    zmin: t4,
    mmin: u7,
    xmax: m5,
    ymax: o4,
    zmax: r5,
    mmax: x5
  };
}
function f5(n3, i4 = false, t4 = false) {
  return i4 ? t4 ? e3(n3[0], n3[1], n3[2], n3[3], n3[4], n3[5], n3[6], n3[7]) : c5(n3[0], n3[1], n3[2], n3[3], n3[4], n3[5]) : t4 ? s3(n3[0], n3[1], n3[2], n3[3], n3[4], n3[5]) : a5(n3[0], n3[1], n3[2], n3[3]);
}
function l4(n3) {
  return n3 ? t3(n3) ? n3 : m3(n3) ? d(n3) : r4(n3) ? v(n3) : o3(n3) ? h6(n3) : u5(n3) ? y2(n3) : null : null;
}
function y2(i4) {
  const {
    hasZ: t4,
    hasM: u7,
    points: m5
  } = i4;
  return f5(g2(x3, m5, t4 ?? false, u7 ?? false), t4, u7);
}
function d(n3) {
  const {
    x: i4,
    y: t4,
    z: u7,
    m: m5
  } = n3, o4 = null != m5;
  return null != u7 ? o4 ? e3(i4, t4, u7, m5, i4, t4, u7, m5) : c5(i4, t4, u7, i4, t4, u7) : o4 ? s3(i4, t4, m5, i4, t4, m5) : a5(i4, t4, i4, t4);
}
function v(n3) {
  const {
    hasZ: t4,
    hasM: u7,
    rings: m5
  } = n3, o4 = x(x3, m5, t4 ?? false, u7 ?? false);
  return o4 ? f5(o4, t4, u7) : null;
}
function h6(n3) {
  const {
    hasZ: t4,
    hasM: u7,
    paths: m5
  } = n3, o4 = x(x3, m5, t4 ?? false, u7 ?? false);
  return o4 ? f5(o4, t4, u7) : null;
}

// ../../../node_modules/@arcgis/core/geometry/Polygon.js
var d2;
function R(t4) {
  return !Array.isArray(t4[0]);
}
var x4 = d2 = class extends n {
  static fromExtent(t4) {
    const r5 = t4.clone().normalize(), e4 = t4.spatialReference;
    let s4 = false, n3 = false;
    for (const o4 of r5) o4.hasZ && (s4 = true), o4.hasM && (n3 = true);
    const i4 = {
      rings: r5.map((t5) => {
        const r6 = [[t5.xmin, t5.ymin], [t5.xmin, t5.ymax], [t5.xmax, t5.ymax], [t5.xmax, t5.ymin], [t5.xmin, t5.ymin]];
        if (s4 && t5.hasZ) {
          const e5 = t5.zmin + 0.5 * (t5.zmax - t5.zmin);
          for (let t6 = 0; t6 < r6.length; t6++) r6[t6].push(e5);
        }
        if (n3 && t5.hasM) {
          const e5 = t5.mmin + 0.5 * (t5.mmax - t5.mmin);
          for (let t6 = 0; t6 < r6.length; t6++) r6[t6].push(e5);
        }
        return r6;
      }),
      spatialReference: e4
    };
    return s4 && (i4.hasZ = true), n3 && (i4.hasM = true), new d2(i4);
  }
  constructor(...t4) {
    super(...t4), this.rings = [], this.type = "polygon";
  }
  normalizeCtorArgs(t4, r5) {
    let e4, s4, n3 = null, i4 = null;
    return t4 && !Array.isArray(t4) ? (n3 = t4.rings ?? null, r5 || (t4.spatialReference ? r5 = t4.spatialReference : t4.rings || (r5 = t4)), e4 = t4.hasZ, s4 = t4.hasM) : n3 = t4, n3 = n3 || [], r5 = r5 || f.WGS84, n3.length && null != n3[0]?.[0] && "number" == typeof n3[0][0] && (n3 = [n3]), i4 = n3[0]?.[0], i4 && (void 0 === e4 && void 0 === s4 ? (e4 = i4.length > 2, s4 = i4.length > 3) : void 0 === e4 ? e4 = s4 ? i4.length > 3 : i4.length > 2 : void 0 === s4 && (s4 = e4 ? i4.length > 3 : i4.length > 2)), {
      rings: n3,
      spatialReference: r5,
      hasZ: e4,
      hasM: s4
    };
  }
  get cache() {
    return this.commitProperty("rings"), this.commitProperty("hasZ"), this.commitProperty("hasM"), this.commitProperty("spatialReference"), {};
  }
  get centroid() {
    const t4 = l3(this);
    if (!t4 || isNaN(t4[0]) || isNaN(t4[1]) || this.hasZ && isNaN(t4[2])) return null;
    const r5 = new _();
    return r5.x = t4[0], r5.y = t4[1], r5.spatialReference = this.spatialReference, this.hasZ && (r5.z = t4[2]), r5;
  }
  get extent() {
    const {
      spatialReference: t4
    } = this, r5 = v(this);
    if (!r5) return null;
    const e4 = new w(r5);
    return e4.spatialReference = t4, e4;
  }
  get isSelfIntersecting() {
    return p(this.rings);
  }
  writeRings(t4, r5) {
    r5.rings = a(this.rings);
  }
  addRing(t4) {
    if (!t4) return;
    const r5 = this.rings, e4 = r5.length;
    if (R(t4)) {
      const s4 = [];
      for (let r6 = 0, e5 = t4.length; r6 < e5; r6++) s4[r6] = t4[r6].toArray();
      r5[e4] = s4;
    } else r5[e4] = t4.concat();
    return this.notifyChange("rings"), this;
  }
  clone() {
    const t4 = new d2();
    return t4.spatialReference = this.spatialReference, t4.rings = a(this.rings), t4.hasZ = this.hasZ, t4.hasM = this.hasM, t4;
  }
  equals(t4) {
    if (this === t4) return true;
    if (null == t4) return false;
    const e4 = this.spatialReference, s4 = t4.spatialReference;
    if (null != e4 != (null != s4)) return false;
    if (null != e4 && null != s4 && !e4.equals(s4)) return false;
    if (this.rings.length !== t4.rings.length) return false;
    const n3 = ([t5, r5, e5, s5], [n4, i4, o4, a6]) => t5 === n4 && r5 === i4 && (null == e5 && null == o4 || e5 === o4) && (null == s5 && null == a6 || s5 === a6);
    for (let i4 = 0; i4 < this.rings.length; i4++) {
      const e5 = this.rings[i4], s5 = t4.rings[i4];
      if (!h(e5, s5, n3)) return false;
    }
    return true;
  }
  contains(t4) {
    if (!t4) return false;
    const r5 = g(t4, this.spatialReference);
    return f2(this, null != r5 ? r5 : t4);
  }
  isClockwise(t4) {
    const r5 = R(t4) ? t4.map((t5) => this.hasZ ? this.hasM ? [t5.x, t5.y, t5.z, t5.m] : [t5.x, t5.y, t5.z] : [t5.x, t5.y]) : t4;
    return a3(r5);
  }
  getPoint(t4, r5) {
    if (!this._validateInputs(t4, r5)) return null;
    const e4 = this.rings[t4][r5], s4 = this.hasZ, n3 = this.hasM;
    return s4 && !n3 ? new _(e4[0], e4[1], e4[2], void 0, this.spatialReference) : n3 && !s4 ? new _(e4[0], e4[1], void 0, e4[2], this.spatialReference) : s4 && n3 ? new _(e4[0], e4[1], e4[2], e4[3], this.spatialReference) : new _(e4[0], e4[1], this.spatialReference);
  }
  insertPoint(t4, r5, e4) {
    return this._validateInputs(t4, r5, true) ? (h2(this, e4), Array.isArray(e4) || (e4 = e4.toArray()), this.rings[t4].splice(r5, 0, e4), this.notifyChange("rings"), this) : this;
  }
  removePoint(t4, r5) {
    if (!this._validateInputs(t4, r5)) return null;
    const e4 = new _(this.rings[t4].splice(r5, 1)[0], this.spatialReference);
    return this.notifyChange("rings"), e4;
  }
  removeRing(t4) {
    if (!this._validateInputs(t4, null)) return null;
    const r5 = this.rings.splice(t4, 1)[0], e4 = this.spatialReference, s4 = r5.map((t5) => new _(t5, e4));
    return this.notifyChange("rings"), s4;
  }
  setPoint(t4, r5, e4) {
    return this._validateInputs(t4, r5) ? (h2(this, e4), Array.isArray(e4) || (e4 = e4.toArray()), this.rings[t4][r5] = e4, this.notifyChange("rings"), this) : this;
  }
  _validateInputs(t4, r5, e4 = false) {
    if (null == t4 || t4 < 0 || t4 >= this.rings.length) return false;
    if (null != r5) {
      const s4 = this.rings[t4];
      if (e4 && (r5 < 0 || r5 > s4.length)) return false;
      if (!e4 && (r5 < 0 || r5 >= s4.length)) return false;
    }
    return true;
  }
  toJSON(t4) {
    return this.write({}, t4);
  }
};
e([y({
  readOnly: true
})], x4.prototype, "cache", null), e([y({
  readOnly: true
})], x4.prototype, "centroid", null), e([y({
  readOnly: true
})], x4.prototype, "extent", null), e([y({
  readOnly: true
})], x4.prototype, "isSelfIntersecting", null), e([y({
  type: [[[Number]]],
  json: {
    write: {
      isRequired: true
    }
  }
})], x4.prototype, "rings", void 0), e([r("rings")], x4.prototype, "writeRings", null), x4 = d2 = e([a2("esri.geometry.Polygon")], x4), x4.prototype.toJSON.isDefaultToJSON = true;
var j = x4;

// ../../../node_modules/@arcgis/core/geometry/Polyline.js
var c6;
function u6(t4) {
  return !Array.isArray(t4[0]);
}
var f6 = c6 = class extends n {
  constructor(...t4) {
    super(...t4), this.paths = [], this.type = "polyline";
  }
  normalizeCtorArgs(t4, e4) {
    let s4, r5, i4 = null, a6 = null;
    return t4 && !Array.isArray(t4) ? (i4 = t4.paths ?? null, e4 || (t4.spatialReference ? e4 = t4.spatialReference : t4.paths || (e4 = t4)), s4 = t4.hasZ, r5 = t4.hasM) : i4 = t4, i4 = i4 || [], e4 = e4 || f.WGS84, i4.length && null != i4[0]?.[0] && "number" == typeof i4[0][0] && (i4 = [i4]), a6 = i4[0]?.[0], a6 && (void 0 === s4 && void 0 === r5 ? (s4 = a6.length > 2, r5 = false) : void 0 === s4 ? s4 = !r5 && a6.length > 3 : void 0 === r5 && (r5 = !s4 && a6.length > 3)), {
      paths: i4,
      spatialReference: e4,
      hasZ: s4,
      hasM: r5
    };
  }
  get cache() {
    return this.commitProperty("paths"), this.commitProperty("hasZ"), this.commitProperty("hasM"), this.commitProperty("spatialReference"), {};
  }
  get extent() {
    const {
      spatialReference: t4
    } = this, e4 = h6(this);
    if (!e4) return null;
    const s4 = new w(e4);
    return s4.spatialReference = t4, s4;
  }
  writePaths(t4, s4) {
    s4.paths = a(this.paths);
  }
  addPath(t4) {
    if (!t4) return;
    const e4 = this.paths, s4 = e4.length;
    if (u6(t4)) {
      const r5 = [];
      for (let e5 = 0, s5 = t4.length; e5 < s5; e5++) r5[e5] = t4[e5].toArray();
      e4[s4] = r5;
    } else e4[s4] = t4.concat();
    return this.notifyChange("paths"), this;
  }
  clone() {
    const t4 = new c6();
    return t4.spatialReference = this.spatialReference, t4.paths = a(this.paths), t4.hasZ = this.hasZ, t4.hasM = this.hasM, t4;
  }
  getPoint(t4, e4) {
    if (!this._validateInputs(t4, e4)) return null;
    const s4 = this.paths[t4][e4], r5 = this.hasZ, i4 = this.hasM;
    return r5 && !i4 ? new _(s4[0], s4[1], s4[2], void 0, this.spatialReference) : i4 && !r5 ? new _(s4[0], s4[1], void 0, s4[2], this.spatialReference) : r5 && i4 ? new _(s4[0], s4[1], s4[2], s4[3], this.spatialReference) : new _(s4[0], s4[1], this.spatialReference);
  }
  insertPoint(t4, e4, s4) {
    return this._validateInputs(t4, e4, true) ? (h2(this, s4), Array.isArray(s4) || (s4 = s4.toArray()), this.paths[t4].splice(e4, 0, s4), this.notifyChange("paths"), this) : this;
  }
  removePath(t4) {
    if (!this._validateInputs(t4, null)) return null;
    const e4 = this.paths.splice(t4, 1)[0], s4 = this.spatialReference, r5 = e4.map((t5) => new _(t5, s4));
    return this.notifyChange("paths"), r5;
  }
  removePoint(t4, e4) {
    if (!this._validateInputs(t4, e4)) return null;
    const s4 = new _(this.paths[t4].splice(e4, 1)[0], this.spatialReference);
    return this.notifyChange("paths"), s4;
  }
  setPoint(t4, e4, s4) {
    return this._validateInputs(t4, e4) ? (h2(this, s4), Array.isArray(s4) || (s4 = s4.toArray()), this.paths[t4][e4] = s4, this.notifyChange("paths"), this) : this;
  }
  _validateInputs(t4, e4, s4 = false) {
    if (null == t4 || t4 < 0 || t4 >= this.paths.length) return false;
    if (null != e4) {
      const r5 = this.paths[t4];
      if (s4 && (e4 < 0 || e4 > r5.length)) return false;
      if (!s4 && (e4 < 0 || e4 >= r5.length)) return false;
    }
    return true;
  }
  toJSON(t4) {
    return this.write({}, t4);
  }
};
e([y({
  readOnly: true
})], f6.prototype, "cache", null), e([y({
  readOnly: true
})], f6.prototype, "extent", null), e([y({
  type: [[[Number]]],
  json: {
    write: {
      isRequired: true
    }
  }
})], f6.prototype, "paths", void 0), e([r("paths")], f6.prototype, "writePaths", null), f6 = c6 = e([a2("esri.geometry.Polyline")], f6), f6.prototype.toJSON.isDefaultToJSON = true;
var m4 = f6;

export {
  u2 as u,
  t2 as t,
  n2 as n,
  r3 as r,
  l3 as l,
  o2 as o,
  i3 as i,
  f4 as f,
  a4 as a,
  c3 as c,
  f3 as f2,
  m2 as m,
  x,
  l4 as l2,
  v,
  j,
  m4 as m2
};
//# sourceMappingURL=chunk-T6GCUITX.js.map
