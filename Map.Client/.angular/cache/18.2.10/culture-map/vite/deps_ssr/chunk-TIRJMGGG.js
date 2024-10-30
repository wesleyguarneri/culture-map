import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f as f2
} from "./chunk-ZDRQSPB6.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  s
} from "./chunk-66YQWHHE.js";
import {
  A,
  C,
  G,
  s2 as s3,
  w
} from "./chunk-6SSA7P3A.js";
import {
  s as s2
} from "./chunk-FQBTLEUI.js";
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
  a as a2,
  a3
} from "./chunk-UDMPWVPF.js";
import {
  a,
  n2 as n
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/geometry/Geometry.js
var c = class extends f {
  constructor(...e3) {
    super(...e3), this.type = null, this.hasM = false, this.hasZ = false, this.spatialReference = f2.WGS84;
  }
  get cache() {
    return this.commitProperty("spatialReference"), {};
  }
  get extent() {
    return null;
  }
  readSpatialReference(e3, r2) {
    if (e3 instanceof f2) return e3;
    if (null != e3) {
      const t = new f2();
      return t.read(e3, r2), t;
    }
    return e3;
  }
  clone() {
    return console.warn(".clone() is not implemented for " + this.declaredClass), null;
  }
  clearCache() {
    this.notifyChange("cache");
  }
  getCacheValue(e3) {
    return this.cache[e3];
  }
  setCacheValue(e3, r2) {
    this.cache[e3] = r2;
  }
};
e([y()], c.prototype, "type", void 0), e([y({
  readOnly: true
})], c.prototype, "cache", null), e([y({
  readOnly: true
})], c.prototype, "extent", null), e([y({
  type: Boolean,
  json: {
    write: {
      overridePolicy: (e3) => ({
        enabled: e3
      })
    }
  }
})], c.prototype, "hasM", void 0), e([y({
  type: Boolean,
  json: {
    write: {
      overridePolicy: (e3) => ({
        enabled: e3
      })
    }
  }
})], c.prototype, "hasZ", void 0), e([y({
  type: f2,
  json: {
    write: true
  },
  value: f2.WGS84
})], c.prototype, "spatialReference", void 0), e([o("spatialReference")], c.prototype, "readSpatialReference", null), c = e([a3("esri.geometry.Geometry")], c);
var n2 = c;

// ../../../node_modules/@arcgis/core/geometry/support/webMercatorUtils.js
var a4 = 57.29577951308232;
var o2 = 0.017453292519943;
function u(n3) {
  return n3 * a4;
}
function l(n3) {
  return n3 * o2;
}
function p(n3) {
  return n3 / s2.radius;
}
function f3(n3) {
  return Math.PI / 2 - 2 * Math.atan(Math.exp(-n3 / s2.radius));
}
function c2(n3) {
  return null != n3.wkid || null != n3.wkt;
}
var h = [0, 0];
function m(n3, t, e3, i2, r2) {
  const s4 = n3, a5 = r2;
  if (a5.spatialReference = e3, "x" in s4 && "x" in a5) [a5.x, a5.y] = t(s4.x, s4.y, h, i2);
  else if ("xmin" in s4 && "xmin" in a5) [a5.xmin, a5.ymin] = t(s4.xmin, s4.ymin, h, i2), [a5.xmax, a5.ymax] = t(s4.xmax, s4.ymax, h, i2);
  else if ("paths" in s4 && "paths" in a5 || "rings" in s4 && "rings" in a5) {
    const n4 = "paths" in s4 ? s4.paths : s4.rings, e4 = [];
    let r3;
    for (let s5 = 0; s5 < n4.length; s5++) {
      const a6 = n4[s5];
      r3 = [], e4.push(r3);
      for (let n5 = 0; n5 < a6.length; n5++) r3.push(t(a6[n5][0], a6[n5][1], [0, 0], i2)), a6[n5].length > 2 && r3[n5].push(a6[n5][2]), a6[n5].length > 3 && r3[n5].push(a6[n5][3]);
    }
    "paths" in a5 ? a5.paths = e4 : a5.rings = e4;
  } else if ("points" in s4 && "points" in a5) {
    const n4 = s4.points, e4 = [];
    for (let r3 = 0; r3 < n4.length; r3++) e4[r3] = t(n4[r3][0], n4[r3][1], [0, 0], i2), n4[r3].length > 2 && e4[r3].push(n4[r3][2]), n4[r3].length > 3 && e4[r3].push(n4[r3][3]);
    a5.points = e4;
  }
  return r2;
}
function x(n3, t) {
  const e3 = n3 && (c2(n3) ? n3 : n3.spatialReference), a5 = t && (c2(t) ? t : t.spatialReference);
  return !(n3 && "type" in n3 && "mesh" === n3.type || t && "type" in t && "mesh" === t.type || !e3 || !a5) && (!!G(a5, e3) || w(a5) && C(e3) || w(e3) && C(a5));
}
function g(e3, a5) {
  if (null == e3) return null;
  const o4 = e3.spatialReference, u3 = a5 && (c2(a5) ? a5 : a5.spatialReference);
  return x(o4, u3) ? G(o4, u3) ? a(e3) : w(u3) ? m(e3, M, f2.WebMercator, false, a(e3)) : C(u3) ? m(e3, y2, f2.WGS84, false, a(e3)) : null : null;
}
function M(n3, t, i2 = [0, 0]) {
  t > 89.99999 ? t = 89.99999 : t < -89.99999 && (t = -89.99999);
  const r2 = l(t);
  return i2[0] = l(n3) * s2.radius, i2[1] = s2.halfSemiMajorAxis * Math.log((1 + Math.sin(r2)) / (1 - Math.sin(r2))), i2;
}
function y2(n3, t, i2 = [0, 0], r2 = false) {
  const s4 = u(n3 / s2.radius);
  return i2[0] = r2 ? s4 : s4 - 360 * Math.floor((s4 + 180) / 360), i2[1] = u(Math.PI / 2 - 2 * Math.atan(Math.exp(-t / s2.radius))), i2;
}
function d(e3, i2 = false, r2 = a(e3)) {
  return m(e3, M, f2.WebMercator, i2, r2);
}
function R(e3, i2 = false, r2 = a(e3)) {
  return m(e3, y2, f2.WGS84, i2, r2);
}

// ../../../node_modules/@arcgis/core/geometry/support/pointUtils.js
function e2(n3, r2) {
  const t = n3.x - r2.x, e3 = n3.y - r2.y, u3 = null != n3.z && null != r2.z ? n3.z - r2.z : 0;
  return Math.sqrt(t * t + e3 * e3 + u3 * u3);
}
function u2(n3) {
  return i(n3, o3)?.[0] ?? null;
}
function l2(n3) {
  return i(n3, o3)?.[1] ?? null;
}
function i({
  x: e3,
  y: u3,
  spatialReference: l3
}, i2 = [0, 0]) {
  if (l3) {
    if (w(l3)) return y2(e3, u3, i2);
    if (A(l3)) return i2[0] = e3, i2[1] = u3, i2;
  }
  return null;
}
var o3 = [0, 0];

// ../../../node_modules/@arcgis/core/geometry/Point.js
var f4;
var g2 = [0, 0];
function w2(t) {
  return t && ("esri.geometry.SpatialReference" === t.declaredClass || null != t.wkid);
}
var x2 = f4 = class extends n2 {
  static copy(t, e3) {
    e3._set("x", t._get("x")), e3._set("y", t._get("y")), e3._set("z", t._get("z")), e3._set("m", t._get("m"));
    const r2 = t._get("spatialReference");
    e3._set("spatialReference", Object.isFrozen(r2) ? r2 : r2.clone());
  }
  constructor(...t) {
    super(...t), this.x = 0, this.y = 0, this.z = void 0, this.m = void 0, this.type = "point";
  }
  normalizeCtorArgs(t, r2, s4, i2, o4) {
    let l3;
    if (Array.isArray(t)) l3 = t, o4 = r2, t = l3[0], r2 = l3[1], s4 = l3[2], i2 = l3[3];
    else if (t && "object" == typeof t) {
      if (l3 = t, t = null != l3.x ? l3.x : l3.longitude, r2 = null != l3.y ? l3.y : l3.latitude, s4 = l3.z, i2 = l3.m, (o4 = l3.spatialReference) && "esri.geometry.SpatialReference" !== o4.declaredClass && (o4 = new f2(o4)), null != l3.longitude || null != l3.latitude) {
        if (null == l3.longitude) n.getLogger(this).warn(".longitude=", "Latitude was defined without longitude");
        else if (null == l3.latitude) n.getLogger(this).warn(".latitude=", "Longitude was defined without latitude");
        else if (!l3.declaredClass && o4?.isWebMercator) {
          const e3 = M(l3.longitude, l3.latitude, g2);
          t = e3[0], r2 = e3[1];
        }
      }
    } else w2(s4) ? (o4 = s4, s4 = null) : w2(i2) && (o4 = i2, i2 = null);
    const a5 = {
      x: t,
      y: r2
    };
    return null == a5.x && null != a5.y ? n.getLogger(this).warn(".y=", "Y coordinate was defined without an X coordinate") : null == a5.y && null != a5.x && n.getLogger(this).warn(".x=", "X coordinate was defined without a Y coordinate"), null != o4 && (a5.spatialReference = o4), null != s4 && (a5.z = s4), null != i2 && (a5.m = i2), a5;
  }
  get cache() {
    return this.commitProperty("x"), this.commitProperty("y"), this.commitProperty("z"), this.commitProperty("m"), this.commitProperty("spatialReference"), {};
  }
  get hasM() {
    return void 0 !== this.m;
  }
  set hasM(t) {
    t !== (void 0 !== this._get("m")) && (this._set("m", t ? 0 : void 0), this._set("hasM", t));
  }
  get hasZ() {
    return void 0 !== this.z;
  }
  set hasZ(t) {
    t !== (void 0 !== this._get("z")) && (this._set("z", t ? 0 : void 0), this._set("hasZ", t));
  }
  get latitude() {
    return l2(this);
  }
  set latitude(t) {
    const {
      spatialReference: e3,
      x: r2
    } = this;
    null != t && e3 && (e3.isWebMercator ? this._set("y", M(r2, t, g2)[1]) : e3.isGeographic && this._set("y", t), this._set("latitude", t));
  }
  get longitude() {
    return u2(this);
  }
  set longitude(t) {
    const {
      y: e3,
      spatialReference: r2
    } = this;
    null != t && r2 && (r2.isWebMercator ? this._set("x", M(t, e3, g2)[0]) : r2.isGeographic && this._set("x", t), this._set("longitude", t));
  }
  writeX(t, e3, r2) {
    e3[r2] = isNaN(t) ? "NaN" : t;
  }
  readX(t) {
    return "string" == typeof t ? NaN : t;
  }
  clone() {
    const t = new f4();
    return t.x = this.x, t.y = this.y, t.z = this.z, t.m = this.m, t.spatialReference = this.spatialReference, t;
  }
  copy(t) {
    return f4.copy(t, this), this;
  }
  equals(t) {
    if (null == t) return false;
    const {
      x: e3,
      y: r2,
      z: s4,
      m: i2,
      spatialReference: o4
    } = this, {
      z: l3,
      m: a5
    } = t;
    let {
      x: n3,
      y: u3,
      spatialReference: p2
    } = t;
    if (!o4.equals(p2)) if (o4.isWebMercator && p2.isWGS84) [n3, u3] = M(n3, u3), p2 = o4;
    else {
      if (!o4.isWGS84 || !p2.isWebMercator) return false;
      [n3, u3] = y2(n3, u3), p2 = o4;
    }
    return e3 === n3 && r2 === u3 && s4 === l3 && i2 === a5 && o4.wkid === p2.wkid;
  }
  offset(t, e3, r2) {
    return this.x += t, this.y += e3, null != r2 && (this.z = (this.z ?? 0) + r2), this;
  }
  normalize() {
    if (!this.spatialReference) return this;
    const t = s3(this.spatialReference);
    if (!t) return this;
    let e3 = this.x;
    const [r2, s4] = t.valid, i2 = 2 * s4;
    let o4;
    return e3 > s4 ? (o4 = Math.ceil(Math.abs(e3 - s4) / i2), e3 -= o4 * i2) : e3 < r2 && (o4 = Math.ceil(Math.abs(e3 - r2) / i2), e3 += o4 * i2), this._set("x", e3), this;
  }
  distance(t) {
    return e2(this, t);
  }
  toArray() {
    const t = this.hasZ, e3 = this.hasM;
    return t && e3 ? [this.x, this.y, this.z, this.m] : t ? [this.x, this.y, this.z] : e3 ? [this.x, this.y, this.m] : [this.x, this.y];
  }
  toJSON(t) {
    return this.write({}, t);
  }
};
e([y({
  readOnly: true
})], x2.prototype, "cache", null), e([y({
  type: Boolean,
  json: {
    read: false,
    write: {
      enabled: false,
      overridePolicy: null
    }
  }
})], x2.prototype, "hasM", null), e([y({
  type: Boolean,
  json: {
    read: false,
    write: {
      enabled: false,
      overridePolicy: null
    }
  }
})], x2.prototype, "hasZ", null), e([y({
  type: Number
})], x2.prototype, "latitude", null), e([y({
  type: Number
})], x2.prototype, "longitude", null), e([y({
  type: Number,
  json: {
    type: [Number, String],
    write: {
      isRequired: true,
      allowNull: true
    }
  }
}), s((t) => isNaN(t) ? t : a2(t))], x2.prototype, "x", void 0), e([r("x")], x2.prototype, "writeX", null), e([o("x")], x2.prototype, "readX", null), e([y({
  type: Number,
  json: {
    write: true
  }
})], x2.prototype, "y", void 0), e([y({
  type: Number,
  json: {
    write: {
      overridePolicy() {
        return {
          enabled: this.hasZ
        };
      }
    }
  }
})], x2.prototype, "z", void 0), e([y({
  type: Number,
  json: {
    write: {
      overridePolicy() {
        return {
          enabled: this.hasM
        };
      }
    }
  }
})], x2.prototype, "m", void 0), x2 = f4 = e([a3("esri.geometry.Point")], x2), x2.prototype.toJSON.isDefaultToJSON = true;
var _ = x2;

export {
  n2 as n,
  p,
  f3 as f,
  x,
  g,
  M,
  y2 as y,
  d,
  R,
  e2 as e,
  i,
  _
};
//# sourceMappingURL=chunk-TIRJMGGG.js.map
