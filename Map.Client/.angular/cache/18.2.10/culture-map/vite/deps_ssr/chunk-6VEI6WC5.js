import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  b
} from "./chunk-IVVINOEJ.js";
import {
  j as j2
} from "./chunk-MRPCXIVS.js";
import {
  R,
  _,
  d
} from "./chunk-TIRJMGGG.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  $,
  G3 as G,
  j,
  r2 as r,
  re,
  s3 as s
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
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/geometry/Circle.js
var f2;
var g = f2 = class extends j2 {
  constructor(...e2) {
    super(...e2), this.center = null, this.geodesic = false, this.numberOfPoints = 60, this.radius = 1e3, this.radiusUnit = "meters";
  }
  normalizeCtorArgs(e2, r2) {
    let t;
    if (e2?.center) t = e2;
    else {
      if (e2?.rings) return super.normalizeCtorArgs(e2, r2);
      t = {
        center: e2
      };
    }
    return __spreadValues(__spreadValues(__spreadValues({}, super.normalizeCtorArgs()), t), r2);
  }
  initialize() {
    const e2 = this.center, o = this.numberOfPoints;
    if (this.hasZ = e2?.hasZ ?? false, 0 !== this.rings.length || !e2) return;
    const c = j(this.radius, this.radiusUnit, "meters"), a2 = e2.spatialReference;
    let p, l = "geographic";
    if (a2.isWebMercator ? l = "webMercator" : (null != (a2.wkid && r[a2.wkid]) || (a2.wkt2 || a2.wkt) && re(a2.wkt2 || a2.wkt)) && (l = "projected"), this.geodesic) {
      let r2;
      switch (l) {
        case "webMercator":
          r2 = R(e2);
          break;
        case "projected":
          console.error("Creating a geodesic circle requires the center to be specified in web mercator or geographic coordinate system");
          break;
        case "geographic":
          r2 = e2;
      }
      p = this._createGeodesicCircle(r2, c, o), "webMercator" === l && (p = d(p));
    } else {
      let r2;
      "webMercator" === l || "projected" === l ? r2 = c / $(e2.spatialReference) : "geographic" === l && (r2 = G(c, "meters", s(e2.spatialReference).radius)), p = this._createPlanarCircle(e2, r2, o);
    }
    this.spatialReference = p.spatialReference, this.addRing(p.rings[0]);
  }
  clone() {
    const {
      center: e2,
      numberOfPoints: r2,
      radius: t,
      radiusUnit: s2,
      geodesic: i
    } = this;
    return new f2({
      center: e2?.clone(),
      numberOfPoints: r2,
      radius: t,
      radiusUnit: s2,
      geodesic: i
    });
  }
  _createGeodesicCircle(e2, r2, t) {
    let s2 = 0;
    const i = [];
    for (; s2 < 360; ) {
      const o = [0, 0], c = [e2.x, e2.y];
      b(o, c, s2, r2, f.WGS84), this.hasZ && o.push(e2.z), i.push(o), s2 += 360 / t;
    }
    return i.push(i[0]), new j2(i);
  }
  _createPlanarCircle(e2, r2, t) {
    const s2 = [], i = 2 * Math.PI / t;
    for (let o = 0; o < t; ++o) {
      const t2 = i * o, c = [e2.x + Math.cos(-t2) * r2, e2.y + Math.sin(-t2) * r2];
      this.hasZ && c.push(e2.z), s2.push(c);
    }
    return s2.push(s2[0]), new j2({
      spatialReference: e2.spatialReference,
      rings: [s2]
    });
  }
};
e([y({
  type: _
})], g.prototype, "center", void 0), e([y()], g.prototype, "geodesic", void 0), e([y()], g.prototype, "numberOfPoints", void 0), e([y()], g.prototype, "radius", void 0), e([y()], g.prototype, "radiusUnit", void 0), g = f2 = e([a("esri.geometry.Circle")], g);
var b2 = g;

export {
  b2 as b
};
//# sourceMappingURL=chunk-6VEI6WC5.js.map
