import {
  e as e2
} from "./chunk-3NGDRCQI.js";
import {
  s2 as s
} from "./chunk-JJS7PR2U.js";
import {
  e
} from "./chunk-5SELS7VU.js";

// ../../../node_modules/@arcgis/core/views/2d/tiling/LODInfo.js
function o(t, r2) {
  return [t, r2];
}
function i(t, r2, o3) {
  return t[0] = r2, t[1] = o3, t;
}
function e3(t, r2, o3, i3, e4) {
  return t[0] = r2, t[1] = o3, t[2] = i3, t[3] = e4, t;
}
var s2 = new e2("0/0/0/0");
var n = class _n {
  static create(r2, e4, s4 = null) {
    const l = s(r2.spatialReference), h2 = e4.origin || o(r2.origin.x, r2.origin.y), a2 = o(r2.size[0] * e4.resolution, r2.size[1] * e4.resolution), u = o(-1 / 0, -1 / 0), m = o(1 / 0, 1 / 0), g = o(1 / 0, 1 / 0);
    null != s4 && (i(u, Math.max(0, Math.floor((s4.xmin - h2[0]) / a2[0])), Math.max(0, Math.floor((h2[1] - s4.ymax) / a2[1]))), i(m, Math.max(0, Math.floor((s4.xmax - h2[0]) / a2[0])), Math.max(0, Math.floor((h2[1] - s4.ymin) / a2[1]))), i(g, m[0] - u[0] + 1, m[1] - u[1] + 1));
    const {
      cols: w,
      rows: c
    } = e4;
    let d, f, F, z;
    return !s4 && w && c && (i(u, w[0], c[0]), i(m, w[1], c[1]), i(g, w[1] - w[0] + 1, c[1] - c[0] + 1)), r2.isWrappable ? (d = o(Math.ceil(Math.round((l.valid[1] - l.valid[0]) / e4.resolution) / r2.size[0]), g[1]), f = o(Math.floor((l.origin[0] - h2[0]) / a2[0]), u[1]), F = o(d[0] + f[0] - 1, m[1]), z = true) : (f = u, F = m, d = g, z = false), new _n(e4.level, e4.resolution, e4.scale, h2, u, m, g, a2, f, F, d, z);
  }
  constructor(t, r2, o3, i3, e4, s4, n3, l, h2, a2, u, m) {
    this.level = t, this.resolution = r2, this.scale = o3, this.origin = i3, this.first = e4, this.last = s4, this.size = n3, this.norm = l, this.worldStart = h2, this.worldEnd = a2, this.worldSize = u, this.wrap = m;
  }
  normalizeCol(t) {
    if (!this.wrap) return t;
    const r2 = this.worldSize[0];
    return t < 0 ? r2 - 1 - Math.abs((t + 1) % r2) : t % r2;
  }
  denormalizeCol(t, r2) {
    return this.wrap ? this.worldSize[0] * r2 + t : t;
  }
  getWorldForColumn(t) {
    return this.wrap ? Math.floor(t / this.worldSize[0]) : 0;
  }
  getFirstColumnForWorld(t) {
    return t * this.worldSize[0] + this.first[0];
  }
  getLastColumnForWorld(t) {
    return t * this.worldSize[0] + this.first[0] + this.size[0] - 1;
  }
  getColumnForX(t) {
    return (t - this.origin[0]) / this.norm[0];
  }
  getXForColumn(t) {
    return this.origin[0] + t * this.norm[0];
  }
  getRowForY(t) {
    return (this.origin[1] - t) / this.norm[1];
  }
  getYForRow(t) {
    return this.origin[1] - t * this.norm[1];
  }
  getTileBounds(t, r2, o3 = false) {
    s2.set(r2);
    const i3 = o3 ? s2.col : this.denormalizeCol(s2.col, s2.world), n3 = s2.row;
    return e3(t, this.getXForColumn(i3), this.getYForRow(n3 + 1), this.getXForColumn(i3 + 1), this.getYForRow(n3)), t;
  }
  getTileCoords(t, r2, o3 = false) {
    s2.set(r2);
    const e4 = o3 ? s2.col : this.denormalizeCol(s2.col, s2.world);
    return Array.isArray(t) ? i(t, this.getXForColumn(e4), this.getYForRow(s2.row)) : (t.x = this.getXForColumn(e4), t.y = this.getYForRow(s2.row)), t;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/tiling/TileCoverage.js
var s3 = class {
  constructor() {
    this.spans = [];
  }
  acquire(o3) {
    this.lodInfo = o3;
  }
  release() {
    this.lodInfo = null, this.spans.length = 0;
  }
  *keys() {
    const o3 = this.lodInfo;
    for (const {
      row: s4,
      colFrom: e4,
      colTo: r2
    } of this.spans) for (let t = e4; t <= r2; t++) {
      const e5 = o3.getWorldForColumn(t);
      yield new e2(o3.level, s4, o3.normalizeCol(t), e5);
    }
  }
  forEach(o3, l) {
    const {
      spans: s4,
      lodInfo: e4
    } = this, {
      level: r2
    } = e4;
    if (0 !== s4.length) for (const {
      row: t,
      colFrom: n3,
      colTo: c
    } of s4) for (let s5 = n3; s5 <= c; s5++) o3.call(l, r2, t, e4.normalizeCol(s5), e4.getWorldForColumn(s5));
  }
};
s3.pool = new e(s3);

// ../../../node_modules/@arcgis/core/views/2d/tiling/TileSpan.js
var o2 = class {
  constructor(o3, s4, t) {
    this.row = o3, this.colFrom = s4, this.colTo = t;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/tiling/TileInfoView.js
var i2 = new e2("0/0/0/0");
var n2 = class _n {
  static create(e4, t) {
    e4[1] > t[1] && ([e4, t] = [t, e4]);
    const [o3, l] = e4, [s4, i3] = t, r2 = s4 - o3, a2 = i3 - l, h2 = 0 !== a2 ? r2 / a2 : 0, c = (Math.ceil(l) - l) * h2, f = (Math.floor(l) - l) * h2;
    return new _n(o3, Math.floor(l), Math.ceil(i3), h2, r2 < 0 ? c : f, r2 < 0 ? f : c, r2 < 0 ? s4 : o3, r2 < 0 ? o3 : s4);
  }
  constructor(e4, t, o3, l, s4, i3, n3, r2) {
    this.x = e4, this.ymin = t, this.ymax = o3, this.invM = l, this.leftAdjust = s4, this.rightAdjust = i3, this.leftBound = n3, this.rightBound = r2;
  }
  incrRow() {
    this.x += this.invM;
  }
  getLeftCol() {
    return Math.max(this.x + this.leftAdjust, this.leftBound);
  }
  getRightCol() {
    return Math.min(this.x + this.rightAdjust, this.rightBound);
  }
};
var r = [[0, 0], [0, 0], [0, 0], [0, 0]];
var a = 1e-6;
var h = class {
  constructor(e4, o3 = null, l = e4.lods[0].level, s4 = e4.lods[e4.lods.length - 1].level) {
    this.tileInfo = e4, this.fullExtent = o3, this.scales = [], this._infoByScale = {}, this._infoByLevel = {};
    const i3 = e4.lods.filter((e5) => e5.level >= l && e5.level <= s4);
    this.minScale = i3[0].scale, this.maxScale = i3[i3.length - 1].scale;
    const n3 = this._lodInfos = i3.map((l2) => n.create(e4, l2, o3));
    i3.forEach((e5, t) => {
      this._infoByLevel[e5.level] = n3[t], this._infoByScale[e5.scale] = n3[t], this.scales[t] = e5.scale;
    }, this), this._wrap = e4.isWrappable;
  }
  get spatialReference() {
    return this.tileInfo.spatialReference;
  }
  getLODInfoAt(e4) {
    return this._infoByLevel["number" == typeof e4 ? e4 : e4.level];
  }
  getTileBounds(e4, t, o3 = false) {
    i2.set(t);
    const l = this._infoByLevel[i2.level];
    return l ? l.getTileBounds(e4, i2, o3) : e4;
  }
  getTileCoords(e4, t, o3 = false) {
    i2.set(t);
    const l = this._infoByLevel[i2.level];
    return l ? l.getTileCoords(e4, i2, o3) : e4;
  }
  getTileCoverage(e4, t = 192, l = true, i3 = "closest") {
    if (!l && (e4.scale > this.minScale || e4.scale < this.maxScale)) return null;
    const a2 = "closest" === i3 ? this.getClosestInfoForScale(e4.scale) : this.getSmallestInfoForScale(e4.scale), h2 = s3.pool.acquire(a2), c = this._wrap;
    let f, u, m, g = 1 / 0, d = -1 / 0;
    const v = h2.spans;
    r[0][0] = r[0][1] = r[1][1] = r[3][0] = -t, r[1][0] = r[2][0] = e4.size[0] + t, r[2][1] = r[3][1] = e4.size[1] + t;
    for (const o3 of r) e4.toMap(o3, o3), o3[0] = a2.getColumnForX(o3[0]), o3[1] = a2.getRowForY(o3[1]);
    const y = [];
    let _ = 3;
    for (let o3 = 0; o3 < 4; o3++) {
      if (r[o3][1] === r[_][1]) {
        _ = o3;
        continue;
      }
      const e5 = n2.create(r[o3], r[_]);
      g = Math.min(e5.ymin, g), d = Math.max(e5.ymax, d), void 0 === y[e5.ymin] && (y[e5.ymin] = []), y[e5.ymin].push(e5), _ = o3;
    }
    if (null == g || null == d || d - g > 100) return null;
    let p = [];
    for (f = g; f < d; ) {
      null != y[f] && (p = p.concat(y[f])), u = 1 / 0, m = -1 / 0;
      for (let e5 = p.length - 1; e5 >= 0; e5--) {
        const t2 = p[e5];
        u = Math.min(u, t2.getLeftCol()), m = Math.max(m, t2.getRightCol());
      }
      if (u = Math.floor(u), m = Math.floor(m), f >= a2.first[1] && f <= a2.last[1]) if (c) {
        if (a2.size[0] < a2.worldSize[0]) {
          const e5 = Math.floor(m / a2.worldSize[0]);
          for (let t2 = Math.floor(u / a2.worldSize[0]); t2 <= e5; t2++) v.push(new o2(f, Math.max(a2.getFirstColumnForWorld(t2), u), Math.min(a2.getLastColumnForWorld(t2), m)));
        } else v.push(new o2(f, u, m));
      } else u > a2.last[0] || m < a2.first[0] || (u = Math.max(u, a2.first[0]), m = Math.min(m, a2.last[0]), v.push(new o2(f, u, m)));
      f += 1;
      for (let e5 = p.length - 1; e5 >= 0; e5--) {
        const t2 = p[e5];
        t2.ymax >= f ? t2.incrRow() : p.splice(e5, 1);
      }
    }
    return h2;
  }
  getTileParentId(e4) {
    i2.set(e4);
    const t = this._infoByLevel[i2.level], o3 = this._lodInfos.indexOf(t) - 1;
    return o3 < 0 ? null : (this._getTileIdAtLOD(i2, this._lodInfos[o3], i2), i2.id);
  }
  getTileResolution(e4) {
    const t = this._infoByLevel["object" == typeof e4 ? e4.level : e4];
    return t ? t.resolution : -1;
  }
  getTileScale(e4) {
    const t = this._infoByLevel[e4.level];
    return t ? t.scale : -1;
  }
  intersects(e4, t) {
    i2.set(t);
    const o3 = this._infoByLevel[i2.level], l = e4.lodInfo;
    if (l.resolution > o3.resolution) {
      this._getTileIdAtLOD(i2, l, i2);
      const t2 = l.denormalizeCol(i2.col, i2.world);
      for (const o4 of e4.spans) if (o4.row === i2.row && o4.colFrom <= t2 && o4.colTo >= t2) return true;
    }
    if (l.resolution < o3.resolution) {
      const [t2, s5, n3, r2] = e4.spans.reduce((e5, t3) => (e5[0] = Math.min(e5[0], t3.row), e5[1] = Math.max(e5[1], t3.row), e5[2] = Math.min(e5[2], t3.colFrom), e5[3] = Math.max(e5[3], t3.colTo), e5), [1 / 0, -1 / 0, 1 / 0, -1 / 0]), a2 = o3.denormalizeCol(i2.col, i2.world), h2 = l.getColumnForX(o3.getXForColumn(a2)), c = l.getRowForY(o3.getYForRow(i2.row)), f = l.getColumnForX(o3.getXForColumn(a2 + 1)) - 1, u = l.getRowForY(o3.getYForRow(i2.row + 1)) - 1;
      return !(h2 > r2 || f < n3 || c > s5 || u < t2);
    }
    const s4 = l.denormalizeCol(i2.col, i2.world);
    return e4.spans.some((e5) => e5.row === i2.row && e5.colFrom <= s4 && e5.colTo >= s4);
  }
  normalizeBounds(t, o3, l) {
    if (t[0] = o3[0], t[1] = o3[1], t[2] = o3[2], t[3] = o3[3], this._wrap) {
      const o4 = s(this.tileInfo.spatialReference), s4 = -l * (o4.valid[1] - o4.valid[0]);
      t[0] += s4, t[2] += s4;
    }
    return t;
  }
  getSmallestInfoForScale(e4) {
    const t = this.scales;
    if (this._infoByScale[e4]) return this._infoByScale[e4];
    if (e4 > t[0]) return this._infoByScale[t[0]];
    for (let o3 = 1; o3 < t.length - 1; o3++) if (e4 > t[o3] + a) return this._infoByScale[t[o3 - 1]];
    return this._infoByScale[t[t.length - 1]];
  }
  getClosestInfoForScale(e4) {
    const t = this.scales;
    return this._infoByScale[e4] || (e4 = t.reduce((t2, o3) => Math.abs(o3 - e4) < Math.abs(t2 - e4) ? o3 : t2, t[0])), this._infoByScale[e4];
  }
  scaleToLevel(e4) {
    const t = this.scales;
    if (this._infoByScale[e4]) return this._infoByScale[e4].level;
    for (let o3 = t.length - 1; o3 >= 0; o3--) if (e4 < t[o3]) {
      if (o3 === t.length - 1) return this._infoByScale[t[t.length - 1]].level;
      return this._infoByScale[t[o3]].level + (t[o3] - e4) / (t[o3] - t[o3 + 1]);
    }
    return this._infoByScale[t[0]].level;
  }
  scaleToZoom(e4) {
    return this.tileInfo.scaleToZoom(e4);
  }
  zoomToScale(e4) {
    return this.tileInfo.zoomToScale(e4);
  }
  _getTileIdAtLOD(e4, t, o3) {
    const l = this._infoByLevel[o3.level];
    return e4.set(o3), t.resolution < l.resolution ? null : (t.resolution === l.resolution || (e4.level = t.level, e4.col = Math.floor(o3.col * l.resolution / t.resolution + 0.01), e4.row = Math.floor(o3.row * l.resolution / t.resolution + 0.01)), e4);
  }
};

export {
  s3 as s,
  h
};
//# sourceMappingURL=chunk-ON42KCSZ.js.map
