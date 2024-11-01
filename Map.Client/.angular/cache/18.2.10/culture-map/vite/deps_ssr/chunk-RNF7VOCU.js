import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  R,
  _,
  d,
  n,
  x
} from "./chunk-TIRJMGGG.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  G,
  s2 as s
} from "./chunk-6SSA7P3A.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  r
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/geometry/support/contains.js
var n2 = [0, 0];
function t(n3, t2) {
  return null != t2 && e2(n3, t2.x, t2.y, t2.z);
}
function r2(n3, t2) {
  if (!t2.points || t2.points.length) return false;
  for (const r3 of t2.points) if (!i(n3, r3)) return false;
  return true;
}
function u(n3, t2) {
  const {
    xmin: r3,
    ymin: u4,
    zmin: i3,
    xmax: o3,
    ymax: f5,
    zmax: c3
  } = t2;
  return n3.hasZ && t2.hasZ ? e2(n3, r3, u4, i3) && e2(n3, r3, f5, i3) && e2(n3, o3, f5, i3) && e2(n3, o3, u4, i3) && e2(n3, r3, u4, c3) && e2(n3, r3, f5, c3) && e2(n3, o3, f5, c3) && e2(n3, o3, u4, c3) : e2(n3, r3, u4) && e2(n3, r3, f5) && e2(n3, o3, f5) && e2(n3, o3, u4);
}
function i(n3, t2) {
  return e2(n3, t2[0], t2[1]);
}
function o(n3, t2) {
  return e2(n3, t2[0], t2[1], t2[2]);
}
function e2(n3, t2, r3, u4) {
  return t2 >= n3.xmin && t2 <= n3.xmax && r3 >= n3.ymin && r3 <= n3.ymax && (null == u4 || !n3.hasZ || u4 >= n3.zmin && u4 <= n3.zmax);
}
function f2(t2, r3) {
  return n2[1] = r3.y, n2[0] = r3.x, c(t2, n2);
}
function c(n3, t2) {
  return s2(n3.rings, t2);
}
function s2(n3, t2) {
  if (!n3) return false;
  if (x2(n3)) return m(false, n3, t2);
  let r3 = false;
  for (let u4 = 0, i3 = n3.length; u4 < i3; u4++) r3 = m(r3, n3[u4], t2);
  return r3;
}
function x2(n3) {
  return !Array.isArray(n3[0][0]);
}
function m(n3, t2, r3) {
  const [u4, i3] = r3;
  let o3 = n3, e3 = 0;
  for (let f5 = 0, c3 = t2.length; f5 < c3; f5++) {
    e3++, e3 === c3 && (e3 = 0);
    const [n4, r4] = t2[f5], [s4, x4] = t2[e3];
    (r4 < i3 && x4 >= i3 || x4 < i3 && r4 >= i3) && n4 + (i3 - r4) / (x4 - r4) * (s4 - n4) < u4 && (o3 = !o3);
  }
  return o3;
}

// ../../../node_modules/@arcgis/core/geometry/support/intersectsBase.js
function i2(t2, e3) {
  return t(t2, e3);
}
function o2(n3, t2) {
  const e3 = n3.hasZ && t2.hasZ;
  let r3, i3, o3;
  if (n3.xmin <= t2.xmin) {
    if (r3 = t2.xmin, n3.xmax < r3) return false;
  } else if (r3 = n3.xmin, t2.xmax < r3) return false;
  if (n3.ymin <= t2.ymin) {
    if (i3 = t2.ymin, n3.ymax < i3) return false;
  } else if (i3 = n3.ymin, t2.ymax < i3) return false;
  if (e3 && t2.hasZ) {
    if (n3.zmin <= t2.zmin) {
      if (o3 = t2.zmin, n3.zmax < o3) return false;
    } else if (o3 = n3.zmin, t2.zmax < o3) return false;
  }
  return true;
}
function f3(n3, t2) {
  const {
    points: i3,
    hasZ: o3
  } = t2, f5 = o3 ? o : i;
  for (const e3 of i3) if (f5(n3, e3)) return true;
  return false;
}
var s3 = [0, 0];
var u2 = [0, 0];
var c2 = [0, 0];
var m2 = [0, 0];
var l = [s3, u2, c2, m2];
var a2 = [[c2, s3], [s3, u2], [u2, m2], [m2, c2]];
function x3(n3, t2) {
  return y2(n3, t2.rings);
}
function y2(n3, r3) {
  s3[0] = n3.xmin, s3[1] = n3.ymax, u2[0] = n3.xmax, u2[1] = n3.ymax, c2[0] = n3.xmin, c2[1] = n3.ymin, m2[0] = n3.xmax, m2[1] = n3.ymin;
  for (const e3 of l) if (s2(r3, e3)) return true;
  for (const t2 of r3) {
    if (!t2.length) continue;
    let r4 = t2[0];
    if (i(n3, r4)) return true;
    for (let i3 = 1; i3 < t2.length; i3++) {
      const o3 = t2[i3];
      if (i(n3, o3) || z(r4, o3, a2)) return true;
      r4 = o3;
    }
  }
  return false;
}
function h(n3, t2) {
  s3[0] = n3.xmin, s3[1] = n3.ymax, u2[0] = n3.xmax, u2[1] = n3.ymax, c2[0] = n3.xmin, c2[1] = n3.ymin, m2[0] = n3.xmax, m2[1] = n3.ymin;
  const r3 = t2.paths;
  for (const i3 of r3) {
    if (!r3.length) continue;
    let t3 = i3[0];
    if (i(n3, t3)) return true;
    for (let r4 = 1; r4 < i3.length; r4++) {
      const o3 = i3[r4];
      if (i(n3, o3) || z(t3, o3, a2)) return true;
      t3 = o3;
    }
  }
  return false;
}
var g = [0, 0];
function p(n3) {
  for (let t2 = 0; t2 < n3.length; t2++) {
    const e3 = n3[t2];
    for (let i3 = 0; i3 < e3.length - 1; i3++) {
      const r4 = e3[i3], o3 = e3[i3 + 1];
      for (let e4 = t2 + 1; e4 < n3.length; e4++) for (let t3 = 0; t3 < n3[e4].length - 1; t3++) {
        const i4 = n3[e4][t3], f5 = n3[e4][t3 + 1];
        if (G2(r4, o3, i4, f5, g) && !(g[0] === r4[0] && g[1] === r4[1] || g[0] === i4[0] && g[1] === i4[1] || g[0] === o3[0] && g[1] === o3[1] || g[0] === f5[0] && g[1] === f5[1])) return true;
      }
    }
    const r3 = e3.length;
    if (!(r3 <= 4)) for (let n4 = 0; n4 < r3 - 3; n4++) {
      let t3 = r3 - 1;
      0 === n4 && (t3 = r3 - 2);
      const i3 = e3[n4], o3 = e3[n4 + 1];
      for (let r4 = n4 + 2; r4 < t3; r4++) {
        const n5 = e3[r4], t4 = e3[r4 + 1];
        if (G2(i3, o3, n5, t4, g) && !(g[0] === i3[0] && g[1] === i3[1] || g[0] === n5[0] && g[1] === n5[1] || g[0] === o3[0] && g[1] === o3[1] || g[0] === t4[0] && g[1] === t4[1])) return true;
      }
    }
  }
  return false;
}
function z(n3, t2, e3) {
  for (let r3 = 0; r3 < e3.length; r3++) if (G2(n3, t2, e3[r3][0], e3[r3][1])) return true;
  return false;
}
function G2(n3, t2, e3, r3, i3) {
  const [o3, f5] = n3, [s4, u4] = t2, [c3, m3] = e3, [l2, a3] = r3, x4 = l2 - c3, y3 = o3 - c3, h2 = s4 - o3, g2 = a3 - m3, p2 = f5 - m3, z3 = u4 - f5, G3 = g2 * h2 - x4 * z3;
  if (0 === G3) return false;
  const Z2 = (x4 * p2 - g2 * y3) / G3, P = (h2 * p2 - z3 * y3) / G3;
  return Z2 >= 0 && Z2 <= 1 && P >= 0 && P <= 1 && (i3 && (i3[0] = o3 + Z2 * (s4 - o3), i3[1] = f5 + Z2 * (u4 - f5)), true);
}
function Z(n3) {
  switch (n3) {
    case "esriGeometryEnvelope":
    case "extent":
      return o2;
    case "esriGeometryMultipoint":
    case "multipoint":
      return f3;
    case "esriGeometryPoint":
    case "point":
      return i2;
    case "esriGeometryPolygon":
    case "polygon":
      return x3;
    case "esriGeometryPolyline":
    case "polyline":
      return h;
  }
}

// ../../../node_modules/@arcgis/core/geometry/Extent.js
var u3;
function f4(t2) {
  return t2 && ("esri.geometry.SpatialReference" === t2.declaredClass || null != t2.wkid);
}
function d2(t2, i3, e3) {
  return null == i3 ? e3 : null == e3 ? i3 : t2(i3, e3);
}
var z2 = u3 = class extends n {
  constructor(...t2) {
    super(...t2), this.type = "extent", this.xmin = 0, this.ymin = 0, this.mmin = void 0, this.zmin = void 0, this.xmax = 0, this.ymax = 0, this.mmax = void 0, this.zmax = void 0;
  }
  normalizeCtorArgs(t2, i3, e3, s4, n3) {
    return f4(t2) ? {
      spatialReference: t2,
      xmin: 0,
      ymin: 0,
      xmax: 0,
      ymax: 0
    } : "object" == typeof t2 ? (t2.spatialReference = null == t2.spatialReference ? f.WGS84 : t2.spatialReference, t2) : {
      xmin: t2,
      ymin: i3,
      xmax: e3,
      ymax: s4,
      spatialReference: n3 ?? f.WGS84
    };
  }
  static fromBounds(t2, i3) {
    return new u3({
      xmin: t2[0],
      ymin: t2[1],
      xmax: t2[2],
      ymax: t2[3],
      spatialReference: i3
    });
  }
  static fromPoint(t2) {
    return new u3({
      xmin: t2.x,
      ymin: t2.y,
      zmin: t2.z,
      xmax: t2.x,
      ymax: t2.y,
      zmax: t2.z,
      spatialReference: t2.spatialReference
    });
  }
  get cache() {
    return this.commitProperty("xmin"), this.commitProperty("ymin"), this.commitProperty("zmin"), this.commitProperty("mmin"), this.commitProperty("xmax"), this.commitProperty("ymax"), this.commitProperty("zmax"), this.commitProperty("mmax"), this.commitProperty("spatialReference"), {};
  }
  get center() {
    const t2 = new _({
      x: 0.5 * (this.xmin + this.xmax),
      y: 0.5 * (this.ymin + this.ymax),
      spatialReference: this.spatialReference
    });
    return this.hasZ && (t2.z = 0.5 * (this.zmin + this.zmax)), this.hasM && (t2.m = 0.5 * (this.mmin + this.mmax)), t2;
  }
  get extent() {
    return this.clone();
  }
  get hasM() {
    return null != this.mmin && null != this.mmax;
  }
  get hasZ() {
    return null != this.zmin && null != this.zmax;
  }
  get height() {
    return Math.abs(this.ymax - this.ymin);
  }
  get width() {
    return Math.abs(this.xmax - this.xmin);
  }
  centerAt(t2) {
    const i3 = this.center;
    return null != t2.z && this.hasZ ? this.offset(t2.x - i3.x, t2.y - i3.y, t2.z - i3.z) : this.offset(t2.x - i3.x, t2.y - i3.y);
  }
  clone() {
    const t2 = new u3();
    return t2.xmin = this.xmin, t2.ymin = this.ymin, t2.xmax = this.xmax, t2.ymax = this.ymax, t2.spatialReference = this.spatialReference, null != this.zmin && (t2.zmin = this.zmin, t2.zmax = this.zmax), null != this.mmin && (t2.mmin = this.mmin, t2.mmax = this.mmax), t2;
  }
  contains(t2) {
    if (!t2) return false;
    const i3 = this.spatialReference, e3 = t2.spatialReference;
    return i3 && e3 && !i3.equals(e3) && x(i3, e3) && (t2 = i3.isWebMercator ? d(t2) : R(t2, true)), "point" === t2.type ? t(this, t2) : "extent" === t2.type && u(this, t2);
  }
  equals(t2) {
    if (this === t2) return true;
    if (null == t2) return false;
    const i3 = this.spatialReference, e3 = t2.spatialReference;
    return i3 && e3 && !i3.equals(e3) && x(i3, e3) && (t2 = i3.isWebMercator ? d(t2) : R(t2, true)), this.xmin === t2.xmin && this.ymin === t2.ymin && this.zmin === t2.zmin && this.mmin === t2.mmin && this.xmax === t2.xmax && this.ymax === t2.ymax && this.zmax === t2.zmax && this.mmax === t2.mmax;
  }
  expand(t2) {
    const i3 = 0.5 * (1 - t2), e3 = this.width * i3, s4 = this.height * i3;
    if (this.xmin += e3, this.ymin += s4, this.xmax -= e3, this.ymax -= s4, this.hasZ) {
      const t3 = (this.zmax - this.zmin) * i3;
      this.zmin += t3, this.zmax -= t3;
    }
    if (this.hasM) {
      const t3 = (this.mmax - this.mmin) * i3;
      this.mmin += t3, this.mmax -= t3;
    }
    return this;
  }
  intersects(t2) {
    if (null == t2) return false;
    "mesh" === t2.type && (t2 = t2.extent);
    const i3 = this.spatialReference, e3 = t2.spatialReference;
    i3 && e3 && !G(i3, e3) && x(i3, e3) && (t2 = i3.isWebMercator ? d(t2) : R(t2, true));
    return Z(t2.type)(this, t2);
  }
  normalize() {
    const t2 = this._normalize(false, true);
    return Array.isArray(t2) ? t2 : [t2];
  }
  offset(t2, i3, e3) {
    return this.xmin += t2, this.ymin += i3, this.xmax += t2, this.ymax += i3, null != e3 && (this.zmin += e3, this.zmax += e3), this;
  }
  shiftCentralMeridian() {
    return this._normalize(true);
  }
  union(t2) {
    return this === t2 || (this.xmin = Math.min(this.xmin, t2.xmin), this.ymin = Math.min(this.ymin, t2.ymin), this.xmax = Math.max(this.xmax, t2.xmax), this.ymax = Math.max(this.ymax, t2.ymax), (this.hasZ || t2.hasZ) && (this.zmin = d2(Math.min, this.zmin, t2.zmin), this.zmax = d2(Math.max, this.zmax, t2.zmax)), (this.hasM || t2.hasM) && (this.mmin = d2(Math.min, this.mmin, t2.mmin), this.mmax = d2(Math.max, this.mmax, t2.mmax))), this;
  }
  intersection(t2) {
    return this === t2 ? this : null != t2 && this.intersects(t2) ? (this.xmin = Math.max(this.xmin, t2.xmin), this.ymin = Math.max(this.ymin, t2.ymin), this.xmax = Math.min(this.xmax, t2.xmax), this.ymax = Math.min(this.ymax, t2.ymax), (this.hasZ || t2.hasZ) && (this.zmin = d2(Math.max, this.zmin, t2.zmin), this.zmax = d2(Math.min, this.zmax, t2.zmax)), (this.hasM || t2.hasM) && (this.mmin = d2(Math.max, this.mmin, t2.mmin), this.mmax = d2(Math.min, this.mmax, t2.mmax)), this) : null;
  }
  toJSON(t2) {
    return this.write({}, t2);
  }
  _shiftCM(t2 = s(this.spatialReference)) {
    if (!t2 || !this.spatialReference) return this;
    const e3 = this.spatialReference, s4 = this._getCM(t2);
    if (s4) {
      const n3 = e3.isWebMercator ? R(s4) : s4;
      this.xmin -= s4.x, this.xmax -= s4.x, e3.isWebMercator || (n3.x = M(n3.x, t2).x), this.spatialReference = new f(r((e3.isWGS84 ? t2.altTemplate : null) ?? t2.wkTemplate, {
        Central_Meridian: n3.x
      }));
    }
    return this;
  }
  _getCM(t2) {
    let i3 = null;
    const [e3, s4] = t2.valid, n3 = this.xmin, m3 = this.xmax;
    return n3 >= e3 && n3 <= s4 && m3 >= e3 && m3 <= s4 || (i3 = this.center), i3;
  }
  _normalize(t2, i3, e3) {
    const s4 = this.spatialReference;
    if (!s4) return this;
    const n3 = e3 ?? s(s4);
    if (null == n3) return this;
    const m3 = this._getParts(n3).map((t3) => t3.extent);
    if (m3.length < 2) return m3[0] || this;
    if (m3.length > 2) return t2 ? this._shiftCM(n3) : this.set({
      xmin: n3.valid[0],
      xmax: n3.valid[1]
    });
    if (t2) return this._shiftCM(n3);
    if (i3) return m3;
    let r3 = true, a3 = true;
    return m3.forEach((t3) => {
      t3.hasZ || (r3 = false), t3.hasM || (a3 = false);
    }), {
      rings: m3.map((t3) => {
        const i4 = [[t3.xmin, t3.ymin], [t3.xmin, t3.ymax], [t3.xmax, t3.ymax], [t3.xmax, t3.ymin], [t3.xmin, t3.ymin]];
        if (r3) {
          const e4 = (t3.zmax - t3.zmin) / 2;
          for (let t4 = 0; t4 < i4.length; t4++) i4[t4].push(e4);
        }
        if (a3) {
          const e4 = (t3.mmax - t3.mmin) / 2;
          for (let t4 = 0; t4 < i4.length; t4++) i4[t4].push(e4);
        }
        return i4;
      }),
      hasZ: r3,
      hasM: a3,
      spatialReference: s4
    };
  }
  _getParts(t2) {
    let i3 = this.cache._parts;
    if (!i3) {
      i3 = [];
      const {
        ymin: e4,
        ymax: s5,
        spatialReference: n3
      } = this, m3 = this.width, r3 = this.xmin, a3 = this.xmax;
      let h2;
      t2 = t2 || s(n3);
      const [o3, x4] = t2.valid;
      h2 = M(this.xmin, t2);
      const c3 = h2.x, p2 = h2.frameId;
      h2 = M(this.xmax, t2);
      const y3 = h2.x, f5 = h2.frameId, d3 = c3 === y3 && m3 > 0;
      if (m3 > 2 * x4) {
        const t3 = new u3(r3 < a3 ? c3 : y3, e4, x4, s5, n3), m4 = new u3(o3, e4, r3 < a3 ? y3 : c3, s5, n3), h3 = new u3(0, e4, x4, s5, n3), l2 = new u3(o3, e4, 0, s5, n3), d4 = [], z3 = [];
        t3.contains(h3) && d4.push(p2), t3.contains(l2) && z3.push(p2), m4.contains(h3) && d4.push(f5), m4.contains(l2) && z3.push(f5);
        for (let i4 = p2 + 1; i4 < f5; i4++) d4.push(i4), z3.push(i4);
        i3.push({
          extent: t3,
          frameIds: [p2]
        }, {
          extent: m4,
          frameIds: [f5]
        }, {
          extent: h3,
          frameIds: d4
        }, {
          extent: l2,
          frameIds: z3
        });
      } else c3 > y3 || d3 ? i3.push({
        extent: new u3(c3, e4, x4, s5, n3),
        frameIds: [p2]
      }, {
        extent: new u3(o3, e4, y3, s5, n3),
        frameIds: [f5]
      }) : i3.push({
        extent: new u3(c3, e4, y3, s5, n3),
        frameIds: [p2]
      });
      this.cache._parts = i3;
    }
    const e3 = this.hasZ, s4 = this.hasM;
    if (e3 || s4) {
      const t3 = {};
      e3 && (t3.zmin = this.zmin, t3.zmax = this.zmax), s4 && (t3.mmin = this.mmin, t3.mmax = this.mmax);
      for (let e4 = 0; e4 < i3.length; e4++) i3[e4].extent.set(t3);
    }
    return i3;
  }
};
function M(t2, i3) {
  const [e3, s4] = i3.valid, n3 = 2 * s4;
  let m3, r3 = 0;
  return t2 > s4 ? (m3 = Math.ceil(Math.abs(t2 - s4) / n3), t2 -= m3 * n3, r3 = m3) : t2 < e3 && (m3 = Math.ceil(Math.abs(t2 - e3) / n3), t2 += m3 * n3, r3 = -m3), {
    x: t2,
    frameId: r3
  };
}
e([y({
  readOnly: true
})], z2.prototype, "cache", null), e([y({
  readOnly: true
})], z2.prototype, "center", null), e([y({
  readOnly: true
})], z2.prototype, "extent", null), e([y({
  readOnly: true,
  json: {
    write: {
      enabled: false,
      overridePolicy: null
    }
  }
})], z2.prototype, "hasM", null), e([y({
  readOnly: true,
  json: {
    write: {
      enabled: false,
      overridePolicy: null
    }
  }
})], z2.prototype, "hasZ", null), e([y({
  readOnly: true
})], z2.prototype, "height", null), e([y({
  readOnly: true
})], z2.prototype, "width", null), e([y({
  type: Number,
  json: {
    type: [Number, String],
    write: {
      enabled: true,
      allowNull: true
    }
  }
})], z2.prototype, "xmin", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], z2.prototype, "ymin", void 0), e([y({
  type: Number,
  json: {
    origins: {
      "web-scene": {
        write: false
      }
    },
    write: {
      overridePolicy() {
        return {
          enabled: this.hasM
        };
      }
    }
  }
})], z2.prototype, "mmin", void 0), e([y({
  type: Number,
  json: {
    origins: {
      "web-scene": {
        write: false
      }
    },
    write: {
      overridePolicy() {
        return {
          enabled: this.hasZ
        };
      }
    }
  }
})], z2.prototype, "zmin", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], z2.prototype, "xmax", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], z2.prototype, "ymax", void 0), e([y({
  type: Number,
  json: {
    origins: {
      "web-scene": {
        write: false
      }
    },
    write: {
      overridePolicy() {
        return {
          enabled: this.hasM
        };
      }
    }
  }
})], z2.prototype, "mmax", void 0), e([y({
  type: Number,
  json: {
    origins: {
      "web-scene": {
        write: false
      }
    },
    write: {
      overridePolicy() {
        return {
          enabled: this.hasZ
        };
      }
    }
  }
})], z2.prototype, "zmax", void 0), z2 = u3 = e([a("esri.geometry.Extent")], z2), z2.prototype.toJSON.isDefaultToJSON = true;
var w = z2;

export {
  t,
  r2 as r,
  i,
  o,
  e2 as e,
  f2 as f,
  s2 as s,
  o2,
  x3 as x,
  p,
  G2 as G,
  Z,
  w
};
//# sourceMappingURL=chunk-RNF7VOCU.js.map
