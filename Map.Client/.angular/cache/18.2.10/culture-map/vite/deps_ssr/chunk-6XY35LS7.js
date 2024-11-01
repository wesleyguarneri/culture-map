import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  y as y3
} from "./chunk-VZ37C3ID.js";
import {
  d
} from "./chunk-NVOJILW6.js";
import {
  n as n2
} from "./chunk-SR7PRON4.js";
import {
  f as f3,
  y as y2
} from "./chunk-4DSGTDZJ.js";
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
  n
} from "./chunk-Y2HYKTTT.js";
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
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import {
  a
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/rest/support/FeatureSet.js
var y4;
var h = new n({
  esriGeometryPoint: "point",
  esriGeometryMultipoint: "multipoint",
  esriGeometryPolyline: "polyline",
  esriGeometryPolygon: "polygon",
  esriGeometryEnvelope: "extent",
  mesh: "mesh",
  "": null
});
var g = y4 = class extends f {
  constructor(e2) {
    super(e2), this.displayFieldName = null, this.exceededTransferLimit = false, this.features = [], this.fields = null, this.geometryType = null, this.hasM = false, this.hasZ = false, this.queryGeometry = null, this.spatialReference = null;
  }
  readFeatures(e2, t) {
    const o2 = f2.fromJSON(t.spatialReference), s = [];
    for (let n3 = 0; n3 < e2.length; n3++) {
      const t2 = e2[n3], i = d.fromJSON(t2), l = t2.geometry?.spatialReference;
      null == i.geometry || l || (i.geometry.spatialReference = o2);
      const a3 = t2.aggregateGeometries, p = i.aggregateGeometries;
      if (a3 && null != p) for (const e3 in p) {
        const t3 = p[e3], r2 = a3[e3], s2 = r2?.spatialReference;
        null == t3 || s2 || (t3.spatialReference = o2);
      }
      s.push(i);
    }
    return s;
  }
  writeGeometryType(e2, t, r2, o2) {
    if (e2) return void h.write(e2, t, r2, o2);
    const {
      features: s
    } = this;
    if (s) {
      for (const n3 of s) if (null != n3?.geometry) return void h.write(n3.geometry.type, t, r2, o2);
    }
  }
  readQueryGeometry(e2, t) {
    if (!e2) return null;
    const r2 = !!e2.spatialReference, o2 = y2(e2);
    return o2 && !r2 && t.spatialReference && (o2.spatialReference = f2.fromJSON(t.spatialReference)), o2;
  }
  writeSpatialReference(e2, t) {
    if (e2) return void (t.spatialReference = e2.toJSON());
    const {
      features: r2
    } = this;
    if (r2) {
      for (const o2 of r2) if (o2 && null != o2.geometry && o2.geometry.spatialReference) return void (t.spatialReference = o2.geometry.spatialReference.toJSON());
    }
  }
  clone() {
    return new y4(this.cloneProperties());
  }
  cloneProperties() {
    return a({
      displayFieldName: this.displayFieldName,
      exceededTransferLimit: this.exceededTransferLimit,
      features: this.features,
      fields: this.fields,
      geometryType: this.geometryType,
      hasM: this.hasM,
      hasZ: this.hasZ,
      queryGeometry: this.queryGeometry,
      spatialReference: this.spatialReference,
      transform: this.transform
    });
  }
  toJSON(e2) {
    const t = this.write();
    if (t.features && Array.isArray(e2) && e2.length > 0) for (let r2 = 0; r2 < t.features.length; r2++) {
      const o2 = t.features[r2];
      if (o2.geometry) {
        const t2 = e2?.[r2];
        o2.geometry = t2?.toJSON() || o2.geometry;
      }
    }
    return t;
  }
  quantize(e2) {
    const {
      scale: [t, r2],
      translate: [o2, s]
    } = e2, n3 = (e3) => Math.round((e3 - o2) / t), i = (e3) => Math.round((s - e3) / r2), l = this.features, a3 = this._getQuantizationFunction(this.geometryType, n3, i);
    for (let p = 0, m = l.length; p < m; p++) a3?.(l[p].geometry) || (l.splice(p, 1), p--, m--);
    return this.transform = e2, this;
  }
  unquantize() {
    const {
      geometryType: e2,
      features: t,
      transform: r2
    } = this;
    if (!r2) return this;
    const {
      translate: [o2, s],
      scale: [n3, i]
    } = r2, l = (e3) => e3 * n3 + o2, a3 = (e3) => s - e3 * i;
    let p = null, m = null;
    if (this.hasZ && null != r2?.scale?.[2]) {
      const {
        translate: [, , e3],
        scale: [, , t2]
      } = r2;
      p = (r3) => r3 * t2 + e3;
    }
    if (this.hasM && null != r2?.scale?.[3]) {
      const {
        translate: [, , , e3],
        scale: [, , , t2]
      } = r2;
      m = (r3) => null == r3 ? r3 : r3 * t2 + e3;
    }
    const c = this._getHydrationFunction(e2, l, a3, p, m);
    for (const {
      geometry: f4
    } of t) null != f4 && c && c(f4);
    return this.transform = null, this;
  }
  _quantizePoints(e2, t, r2) {
    let o2, s;
    const n3 = [];
    for (let i = 0, l = e2.length; i < l; i++) {
      const l2 = e2[i];
      if (i > 0) {
        const e3 = t(l2[0]), i2 = r2(l2[1]);
        e3 === o2 && i2 === s || (n3.push([e3 - o2, i2 - s]), o2 = e3, s = i2);
      } else o2 = t(l2[0]), s = r2(l2[1]), n3.push([o2, s]);
    }
    return n3.length > 0 ? n3 : null;
  }
  _getQuantizationFunction(e2, t, r2) {
    return "point" === e2 ? (e3) => (e3.x = t(e3.x), e3.y = r2(e3.y), e3) : "polyline" === e2 || "polygon" === e2 ? (e3) => {
      const o2 = f3(e3) ? e3.rings : e3.paths, s = [];
      for (let n3 = 0, i = o2.length; n3 < i; n3++) {
        const e4 = o2[n3], i2 = this._quantizePoints(e4, t, r2);
        i2 && s.push(i2);
      }
      return s.length > 0 ? (f3(e3) ? e3.rings = s : e3.paths = s, e3) : null;
    } : "multipoint" === e2 ? (e3) => {
      const o2 = this._quantizePoints(e3.points, t, r2);
      return o2 && o2.length > 0 ? (e3.points = o2, e3) : null;
    } : "extent" === e2 ? (e3) => e3 : null;
  }
  _getHydrationFunction(e2, t, r2, o2, s) {
    return "point" === e2 ? (e3) => {
      e3.x = t(e3.x), e3.y = r2(e3.y), o2 && (e3.z = o2(e3.z));
    } : "polyline" === e2 || "polygon" === e2 ? (e3) => {
      const n3 = f3(e3) ? e3.rings : e3.paths;
      let i, l;
      for (let o3 = 0, s2 = n3.length; o3 < s2; o3++) {
        const e4 = n3[o3];
        for (let o4 = 0, s3 = e4.length; o4 < s3; o4++) {
          const s4 = e4[o4];
          o4 > 0 ? (i += s4[0], l += s4[1]) : (i = s4[0], l = s4[1]), s4[0] = t(i), s4[1] = r2(l);
        }
      }
      if (o2 && s) for (let t2 = 0, r3 = n3.length; t2 < r3; t2++) {
        const e4 = n3[t2];
        for (let t3 = 0, r4 = e4.length; t3 < r4; t3++) {
          const r5 = e4[t3];
          r5[2] = o2(r5[2]), r5[3] = s(r5[3]);
        }
      }
      else if (o2) for (let t2 = 0, r3 = n3.length; t2 < r3; t2++) {
        const e4 = n3[t2];
        for (let t3 = 0, r4 = e4.length; t3 < r4; t3++) {
          const r5 = e4[t3];
          r5[2] = o2(r5[2]);
        }
      }
      else if (s) for (let t2 = 0, r3 = n3.length; t2 < r3; t2++) {
        const e4 = n3[t2];
        for (let t3 = 0, r4 = e4.length; t3 < r4; t3++) {
          const r5 = e4[t3];
          r5[2] = s(r5[2]);
        }
      }
    } : "extent" === e2 ? (e3) => {
      e3.xmin = t(e3.xmin), e3.ymin = r2(e3.ymin), e3.xmax = t(e3.xmax), e3.ymax = r2(e3.ymax), o2 && null != e3.zmax && null != e3.zmin && (e3.zmax = o2(e3.zmax), e3.zmin = o2(e3.zmin)), s && null != e3.mmax && null != e3.mmin && (e3.mmax = s(e3.mmax), e3.mmin = s(e3.mmin));
    } : "multipoint" === e2 ? (e3) => {
      const n3 = e3.points;
      let i, l;
      for (let o3 = 0, s2 = n3.length; o3 < s2; o3++) {
        const e4 = n3[o3];
        o3 > 0 ? (i += e4[0], l += e4[1]) : (i = e4[0], l = e4[1]), e4[0] = t(i), e4[1] = r2(l);
      }
      if (o2 && s) for (let t2 = 0, r3 = n3.length; t2 < r3; t2++) {
        const e4 = n3[t2];
        e4[2] = o2(e4[2]), e4[3] = s(e4[3]);
      }
      else if (o2) for (let t2 = 0, r3 = n3.length; t2 < r3; t2++) {
        const e4 = n3[t2];
        e4[2] = o2(e4[2]);
      }
      else if (s) for (let t2 = 0, r3 = n3.length; t2 < r3; t2++) {
        const e4 = n3[t2];
        e4[2] = s(e4[2]);
      }
    } : null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], g.prototype, "displayFieldName", void 0), e([y({
  type: Boolean,
  json: {
    write: {
      overridePolicy: (e2) => ({
        enabled: e2
      })
    }
  }
})], g.prototype, "exceededTransferLimit", void 0), e([y({
  type: [d],
  json: {
    write: true
  }
})], g.prototype, "features", void 0), e([o("features")], g.prototype, "readFeatures", null), e([y({
  type: [y3],
  json: {
    write: true
  }
})], g.prototype, "fields", void 0), e([y({
  type: ["point", "multipoint", "polyline", "polygon", "extent", "mesh"],
  json: {
    read: {
      reader: h.read
    }
  }
})], g.prototype, "geometryType", void 0), e([r("geometryType")], g.prototype, "writeGeometryType", null), e([y({
  type: Boolean,
  json: {
    write: {
      overridePolicy: (e2) => ({
        enabled: e2
      })
    }
  }
})], g.prototype, "hasM", void 0), e([y({
  type: Boolean,
  json: {
    write: {
      overridePolicy: (e2) => ({
        enabled: e2
      })
    }
  }
})], g.prototype, "hasZ", void 0), e([y({
  types: n2,
  json: {
    write: true
  }
})], g.prototype, "queryGeometry", void 0), e([o("queryGeometry")], g.prototype, "readQueryGeometry", null), e([y({
  type: f2,
  json: {
    write: true
  }
})], g.prototype, "spatialReference", void 0), e([r("spatialReference")], g.prototype, "writeSpatialReference", null), e([y({
  json: {
    write: true
  }
})], g.prototype, "transform", void 0), g = y4 = e([a2("esri.rest.support.FeatureSet")], g), g.prototype.toJSON.isDefaultToJSON = true;
var d2 = g;

export {
  d2 as d
};
//# sourceMappingURL=chunk-6XY35LS7.js.map
