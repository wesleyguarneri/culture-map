import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  p as p2,
  z
} from "./chunk-KAHESDP5.js";
import {
  u
} from "./chunk-GCVQXAS4.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import {
  _,
  f as f2,
  p
} from "./chunk-TIRJMGGG.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  F,
  h,
  y
} from "./chunk-2OZSYJDX.js";
import {
  A,
  W2 as W
} from "./chunk-6SSA7P3A.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/views/3d/terrain/TilingScheme.js
var g = 12;
var f3 = class _f {
  constructor(e) {
    const t = _f.checkUnsupported(e);
    if (null != t) throw t;
    const i = e;
    this.spatialReference = i.spatialReference, this._isWebMercator = this.spatialReference.isWebMercator, this._isGCS = A(this.spatialReference), this.origin = [i.origin.x, i.origin.y], this.pixelSize = i.size[0], this.dpi = i.dpi;
    const s2 = i.lods.reduce((e2, t2) => (t2.level < e2.minLod.level && (e2.minLod = t2), e2.max = Math.max(e2.max, t2.level), e2), {
      minLod: i.lods[0],
      max: -1 / 0
    }), r = s2.minLod, l = 2 ** r.level;
    let n = r.resolution * l, o = r.scale * l;
    this.levels = new Array(s2.max + 1);
    for (let a = 0; a < this.levels.length; a++) this.levels[a] = {
      resolution: n,
      scale: o,
      tileSize: [n * i.size[0], n * i.size[1]]
    }, n /= 2, o /= 2;
  }
  clone() {
    return new _f(this.toTileInfo());
  }
  toTileInfo() {
    return new z({
      dpi: this.dpi,
      origin: new _({
        x: this.origin[0],
        y: this.origin[1],
        spatialReference: this.spatialReference
      }),
      size: [this.pixelSize, this.pixelSize],
      spatialReference: this.spatialReference,
      lods: this.levels.map((e, t) => new p2({
        level: t,
        scale: e.scale,
        resolution: e.resolution
      }))
    });
  }
  getExtent(e, t, i, s2) {
    const r = this.levels[e], l = r.tileSize[0], n = r.tileSize[1];
    s2[0] = this.origin[0] + i * l, s2[2] = this.origin[0] + (i + 1) * l, s2[3] = this.origin[1] - t * n, s2[1] = this.origin[1] - (t + 1) * n;
  }
  convertExtentToRadians(e, i) {
    this._isWebMercator ? (i[0] = p(e[0]), i[1] = f2(e[1]), i[2] = p(e[2]), i[3] = f2(e[3])) : this._isGCS && (i[0] = h(e[0]), i[1] = h(e[1]), i[2] = h(e[2]), i[3] = h(e[3]));
  }
  getExtentGeometry(e, t, i, s2 = new w()) {
    return this.getExtent(e, t, i, v), s2.spatialReference = this.spatialReference, s2.xmin = v[0], s2.ymin = v[1], s2.xmax = v[2], s2.ymax = v[3], s2.zmin = void 0, s2.zmax = void 0, s2;
  }
  ensureMaxLod(e) {
    if (null == e) return false;
    let t = false;
    for (; this.levels.length <= e; ) {
      const {
        resolution: e2,
        scale: i
      } = this.levels[this.levels.length - 1], s2 = e2 / 2 * this.pixelSize;
      this.levels.push({
        resolution: e2 / 2,
        scale: i / 2,
        tileSize: [s2, s2]
      }), t = true;
    }
    return t;
  }
  capMaxLod(e) {
    this.levels.length > e + 1 && (this.levels.length = e + 1);
  }
  getMaxLod() {
    return this.levels.length - 1;
  }
  scaleAtLevel(e) {
    return this.levels[0].scale / 2 ** e;
  }
  levelAtScale(e) {
    const t = this.levels[0].scale;
    return e >= t ? 0 : Math.log(t / e) * Math.LOG2E;
  }
  resolutionAtLevel(e) {
    return this.levels[0].resolution / 2 ** e;
  }
  compatibleWith(e, t = 1 / 0) {
    if (_f.checkUnsupported(e)) return false;
    const s2 = new _f(e);
    if (!s2.spatialReference.equals(this.spatialReference)) return false;
    if (s2.pixelSize !== this.pixelSize) return false;
    const r = Math.min(this.levels.length - 1, s2.levels.length - 1, t), l = this.levels[r].resolution;
    let n = 0.5 * l;
    if (!F(s2.origin[0], this.origin[0], n) || !F(s2.origin[1], this.origin[1], n)) return false;
    return n = 0.5 * l / 2 ** r / this.pixelSize * g, F(l, s2.levels[r].resolution, n);
  }
  rootTilesInExtent(e, t = null, i = 1 / 0) {
    const s2 = new Array(), r = this.levels[0].tileSize;
    if (null == e || 0 === r[0] || 0 === r[1]) return s2;
    _f.computeRowColExtent(e, r, this.origin, v);
    let l = v[1], n = v[3], o = v[0], a = v[2];
    const h2 = a - o, c = n - l;
    if (h2 * c > i) {
      const e2 = Math.floor(Math.sqrt(i));
      c > e2 && (l = l + Math.floor(0.5 * c) - Math.floor(0.5 * e2), n = l + e2), h2 > e2 && (o = o + Math.floor(0.5 * h2) - Math.floor(0.5 * e2), a = o + e2);
    }
    for (let m = l; m < n; m++) for (let e2 = o; e2 < a; e2++) s2.push([0, m, e2]);
    return null != t && (t[0] = this.origin[0] + o * r[0], t[1] = this.origin[1] - n * r[1], t[2] = this.origin[0] + a * r[0], t[3] = this.origin[1] - l * r[1]), s2;
  }
  static computeRowColExtent(e, t, i, s2) {
    const r = 1e-3 * (e[2] - e[0] + (e[3] - e[1]));
    s2[0] = Math.max(0, Math.floor((e[0] + r - i[0]) / t[0])), s2[2] = Math.max(0, Math.ceil((e[2] - r - i[0]) / t[0])), s2[1] = Math.max(0, Math.floor((i[1] - e[3] + r) / t[1])), s2[3] = Math.max(0, Math.ceil((i[1] - e[1] - r) / t[1]));
  }
  static isPowerOfTwo(e) {
    const t = e.lods, i = t[0].resolution * 2 ** t[0].level;
    return !t.some((e2) => !y(e2.resolution, i / 2 ** e2.level));
  }
  static hasGapInLevels(e) {
    const t = e.lods.map((e2) => e2.level);
    t.sort((e2, t2) => e2 - t2);
    for (let i = 1; i < t.length; i++) if (t[i] !== t[0] + i) return true;
    return false;
  }
  static tileSizeSupported(e) {
    const t = e.size[1];
    return t === e.size[0] && !(t & t - 1) && t >= 128 && t <= 512;
  }
  static hasOriginPerLODs(e) {
    const t = e.origin;
    return e.lods.some((e2) => null != e2.origin && (e2.origin[0] !== t.x || e2.origin[1] !== t.y));
  }
  static getMissingTileInfoError() {
    return new s("tilingscheme:tile-info-missing", "Tiling scheme must have tiling information");
  }
  static checkUnsupported(t) {
    return null == t ? x() : t.lods.length < 1 ? new s("tilingscheme:generic", "Tiling scheme must have at least one level") : _f.isPowerOfTwo(t) ? _f.hasGapInLevels(t) ? new s("tilingscheme:gaps", "Tiling scheme levels must not have gaps between min and max level") : _f.tileSizeSupported(t) ? _f.hasOriginPerLODs(t) ? new s("tilingscheme:multiple-origin", "Tiling scheme levels must not have their own origin") : null : new s("tilingscheme:tile-size", "Tiles must be square and size must be one of [128, 256, 512]") : new s("tilingscheme:power-of-two", "Tiling scheme must be power of two");
  }
  static fromExtent(e, t) {
    const i = e[2] - e[0], s2 = e[3] - e[1], l = W(t), n = 1.2 * Math.max(i, s2), o = 256, a = n / o, h2 = a * l * (96 / 0.0254), c = new _f(new z({
      size: [o, o],
      origin: new _({
        x: e[0] - 0.5 * (n - i),
        y: e[3] + 0.5 * (n - s2)
      }),
      lods: [new p2({
        level: 0,
        resolution: a,
        scale: h2
      })],
      spatialReference: t
    }));
    return c.ensureMaxLod(20), c;
  }
  static makeWebMercatorAuxiliarySphere(e) {
    const t = new _f(_f.WebMercatorAuxiliarySphereTileInfo);
    return t.ensureMaxLod(e), t;
  }
  static makeGCSWithTileSize(e, t = 256, i = 16) {
    const s2 = 256 / t, r = new _f(new z({
      size: [t, t],
      origin: new _({
        x: -180,
        y: 90,
        spatialReference: e
      }),
      spatialReference: e,
      lods: [new p2({
        level: 0,
        resolution: 0.703125 * s2,
        scale: 295497598570834e-6 * s2
      })]
    }));
    return r.ensureMaxLod(i), r;
  }
  get test() {
  }
};
function x() {
  return new s("tilingscheme:tile-info-missing", "Tiling scheme must have tiling information");
}
f3.WebMercatorAuxiliarySphereTileInfo = new z({
  size: [256, 256],
  origin: new _({
    x: -20037508342787e-6,
    y: 20037508342787e-6,
    spatialReference: f.WebMercator
  }),
  spatialReference: f.WebMercator,
  lods: [new p2({
    level: 0,
    resolution: 156543.03392800014,
    scale: 591657527591555e-6
  })]
}), f3.WebMercatorAuxiliarySphere = f3.makeWebMercatorAuxiliarySphere(19);
var v = u();

export {
  f3 as f,
  x
};
//# sourceMappingURL=chunk-C22SF7N4.js.map
