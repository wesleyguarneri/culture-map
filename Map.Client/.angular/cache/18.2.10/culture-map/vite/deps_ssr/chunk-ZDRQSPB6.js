import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  A,
  C,
  G,
  U,
  W,
  W2,
  X,
  g2 as g,
  h,
  w
} from "./chunk-6SSA7P3A.js";
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
  N,
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import {
  a
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/geometry/SpatialReference.js
var h2;
var S = h2 = class extends f {
  static fromJSON(e2) {
    if (!e2) return null;
    if (e2.wkid) {
      if (102100 === e2.wkid) return h2.WebMercator;
      if (4326 === e2.wkid) return h2.WGS84;
    }
    const t = new h2();
    return t.read(e2), t;
  }
  constructor(e2) {
    super(e2), this.latestWkid = null, this.wkid = null, this.wkt = null, this.wkt2 = null, this.vcsWkid = null, this.latestVcsWkid = null, this.imageCoordinateSystem = null;
  }
  normalizeCtorArgs(e2) {
    if (e2 && "object" == typeof e2) return e2;
    const t = "string" == typeof e2 ? "wkt" : "wkid";
    return {
      [t]: e2
    };
  }
  get isWGS84() {
    return C(this);
  }
  get isWebMercator() {
    return w(this);
  }
  get isGeographic() {
    return A(this);
  }
  get isWrappable() {
    return W(this);
  }
  get metersPerUnit() {
    return W2(this);
  }
  get unit() {
    return X(this) || (this.isGeographic ? "degrees" : null);
  }
  writeWkt(e2, t) {
    this.wkid || (t.wkt = e2);
  }
  clone() {
    if (this === h2.WGS84) return new h2(g);
    if (this === h2.WebMercator) return new h2(U);
    const e2 = new h2();
    return null != this.wkid ? (e2.wkid = this.wkid, null != this.latestWkid && (e2.latestWkid = this.latestWkid), null != this.vcsWkid && (e2.vcsWkid = this.vcsWkid), null != this.latestVcsWkid && (e2.latestVcsWkid = this.latestVcsWkid)) : (null != this.wkt && (e2.wkt = this.wkt), null != this.wkt2 && (e2.wkt2 = this.wkt2)), this.imageCoordinateSystem && (e2.imageCoordinateSystem = a(this.imageCoordinateSystem)), e2;
  }
  equals(e2) {
    if (null == e2) return false;
    if (this.imageCoordinateSystem || e2.imageCoordinateSystem) {
      if (null == this.imageCoordinateSystem || null == e2.imageCoordinateSystem) return false;
      const {
        id: t,
        referenceServiceName: r2
      } = e2.imageCoordinateSystem, {
        geodataXform: i
      } = e2.imageCoordinateSystem, o = this.imageCoordinateSystem;
      return null == t || i ? JSON.stringify(o) === JSON.stringify(e2.imageCoordinateSystem) : r2 ? o.id === t && o.referenceServiceName === r2 : o.id === t;
    }
    return G(this, e2);
  }
  toJSON(e2) {
    return this.write(void 0, e2);
  }
};
S.GCS_NAD_1927 = null, S.WGS84 = null, S.WebMercator = null, S.PlateCarree = null, e([y({
  readOnly: true
})], S.prototype, "isWGS84", null), e([y({
  readOnly: true
})], S.prototype, "isWebMercator", null), e([y({
  readOnly: true
})], S.prototype, "isGeographic", null), e([y({
  readOnly: true
})], S.prototype, "isWrappable", null), e([y({
  type: N,
  json: {
    write: true
  }
})], S.prototype, "latestWkid", void 0), e([y({
  readOnly: true
})], S.prototype, "metersPerUnit", null), e([y({
  readOnly: true
})], S.prototype, "unit", null), e([y({
  type: N,
  json: {
    write: true,
    origins: {
      "web-scene": {
        write: {
          overridePolicy() {
            return {
              isRequired: null == this.wkt
            };
          }
        }
      }
    }
  }
})], S.prototype, "wkid", void 0), e([y({
  type: String,
  json: {
    origins: {
      "web-scene": {
        write: {
          overridePolicy() {
            return {
              isRequired: null == this.wkid
            };
          }
        }
      }
    }
  }
})], S.prototype, "wkt", void 0), e([r("wkt"), r("web-scene", "wkt")], S.prototype, "writeWkt", null), e([y({
  type: String,
  json: {
    write: false
  }
})], S.prototype, "wkt2", void 0), e([y({
  type: N,
  json: {
    write: true
  }
})], S.prototype, "vcsWkid", void 0), e([y({
  type: N,
  json: {
    write: true
  }
})], S.prototype, "latestVcsWkid", void 0), e([y()], S.prototype, "imageCoordinateSystem", void 0), S = h2 = e([a2("esri.geometry.SpatialReference")], S), S.prototype.toJSON.isDefaultToJSON = true, S.GCS_NAD_1927 = new S({
  wkid: 4267,
  wkt: 'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]'
}), S.WGS84 = new S(g), S.WebMercator = new S(U), S.PlateCarree = new S(h), Object.freeze && (Object.freeze(S.GCS_NAD_1927), Object.freeze(S.WGS84), Object.freeze(S.WebMercator), Object.freeze(S.PlateCarree));
var f2 = S;

export {
  f2 as f
};
//# sourceMappingURL=chunk-ZDRQSPB6.js.map
