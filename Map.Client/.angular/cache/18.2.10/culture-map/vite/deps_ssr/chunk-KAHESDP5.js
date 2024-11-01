import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t
} from "./chunk-ONRZ4VTT.js";
import {
  u
} from "./chunk-GCVQXAS4.js";
import {
  _,
  g
} from "./chunk-TIRJMGGG.js";
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
  A,
  G,
  N as N2,
  W2 as W,
  s2 as s
} from "./chunk-6SSA7P3A.js";
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
  N,
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/support/LOD.js
var i;
var l = i = class extends f {
  constructor(e2) {
    super(e2), this.cols = null, this.level = 0, this.levelValue = null, this.origin = null, this.resolution = 0, this.rows = null, this.scale = 0;
  }
  clone() {
    return new i({
      cols: this.cols,
      level: this.level,
      levelValue: this.levelValue,
      resolution: this.resolution,
      rows: this.rows,
      scale: this.scale
    });
  }
};
e([y({
  json: {
    write: true,
    origins: {
      "web-document": {
        read: false,
        write: false
      },
      "portal-item": {
        read: false,
        write: false
      }
    }
  }
})], l.prototype, "cols", void 0), e([y({
  type: N,
  json: {
    write: true
  }
})], l.prototype, "level", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], l.prototype, "levelValue", void 0), e([y({
  json: {
    write: true,
    origins: {
      "web-document": {
        read: false,
        write: false
      },
      "portal-item": {
        read: false,
        write: false
      }
    }
  }
})], l.prototype, "origin", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], l.prototype, "resolution", void 0), e([y({
  json: {
    write: true,
    origins: {
      "web-document": {
        read: false,
        write: false
      },
      "portal-item": {
        read: false,
        write: false
      }
    }
  }
})], l.prototype, "rows", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], l.prototype, "scale", void 0), l = i = e([a("esri.layers.support.LOD")], l);
var p = l;

// ../../../node_modules/@arcgis/core/layers/support/TileInfo.js
var w;
var x = new n({
  PNG: "png",
  PNG8: "png8",
  PNG24: "png24",
  PNG32: "png32",
  JPEG: "jpg",
  JPG: "jpg",
  DIB: "dib",
  TIFF: "tiff",
  EMF: "emf",
  PS: "ps",
  PDF: "pdf",
  GIF: "gif",
  SVG: "svg",
  SVGZ: "svgz",
  Mixed: "mixed",
  MIXED: "mixed",
  LERC: "lerc",
  LERC2D: "lerc2d",
  RAW: "raw",
  pbf: "pbf"
});
var j = w = class extends f {
  static create(e2 = {}) {
    const {
      resolutionFactor: t2 = 1,
      scales: o2,
      size: r2 = 256,
      spatialReference: i2 = f2.WebMercator,
      numLODs: l2 = 24
    } = e2;
    if (!N2(i2)) {
      const e3 = [];
      if (o2) for (let t3 = 0; t3 < o2.length; t3++) {
        const s2 = o2[t3];
        e3.push(new p({
          level: t3,
          scale: s2,
          resolution: s2
        }));
      }
      else {
        let t3 = 5e-4;
        for (let o3 = l2 - 1; o3 >= 0; o3--) e3.unshift(new p({
          level: o3,
          scale: t3,
          resolution: t3
        })), t3 *= 2;
      }
      return new w({
        dpi: 96,
        lods: e3,
        origin: new _(0, 0, i2),
        size: [r2, r2],
        spatialReference: i2
      });
    }
    const n2 = s(i2), p2 = e2.origin ? new _({
      x: e2.origin.x,
      y: e2.origin.y,
      spatialReference: i2
    }) : new _(n2 ? {
      x: n2.origin[0],
      y: n2.origin[1],
      spatialReference: i2
    } : {
      x: 0,
      y: 0,
      spatialReference: i2
    }), u2 = 96, d = 1 / (W(i2) * 39.37 * u2), g2 = [];
    if (o2) for (let s2 = 0; s2 < o2.length; s2++) {
      const e3 = o2[s2], t3 = e3 * d;
      g2.push(new p({
        level: s2,
        scale: e3,
        resolution: t3
      }));
    }
    else {
      let e3 = A(i2) ? 512 / r2 * 5916575275917094e-7 : 256 / r2 * 591657527591555e-6;
      const o3 = Math.ceil(l2 / t2);
      g2.push(new p({
        level: 0,
        scale: e3,
        resolution: e3 * d
      }));
      for (let s2 = 1; s2 < o3; s2++) {
        const o4 = e3 / 2 ** t2, r3 = o4 * d;
        g2.push(new p({
          level: s2,
          scale: o4,
          resolution: r3
        })), e3 = o4;
      }
    }
    return new w({
      dpi: u2,
      lods: g2,
      origin: p2,
      size: [r2, r2],
      spatialReference: i2
    });
  }
  constructor(e2) {
    super(e2), this.dpi = 96, this.format = null, this.origin = null, this.size = null, this.spatialReference = null;
  }
  get isWrappable() {
    const {
      spatialReference: e2,
      origin: t2
    } = this;
    if (e2 && t2) {
      const o2 = s(e2);
      return e2.isWrappable && !!o2 && Math.abs(o2.origin[0] - t2.x) <= o2.dx;
    }
    return false;
  }
  readOrigin(e2, t2) {
    return _.fromJSON(__spreadValues({
      spatialReference: t2.spatialReference
    }, e2));
  }
  set lods(e2) {
    let t2 = 0, o2 = 0;
    const s2 = [], r2 = this._levelToLOD = {};
    e2 && (t2 = -1 / 0, o2 = 1 / 0, e2.forEach((e3) => {
      s2.push(e3.scale), t2 = e3.scale > t2 ? e3.scale : t2, o2 = e3.scale < o2 ? e3.scale : o2, r2[e3.level] = e3;
    })), this._set("scales", s2), this._set("lods", e2), this._initializeUpsampleLevels();
  }
  readSize(e2, t2) {
    return [t2.cols, t2.rows];
  }
  writeSize(e2, t2) {
    t2.cols = e2[0], t2.rows = e2[1];
  }
  zoomToScale(e2) {
    const t2 = this.scales;
    if (e2 <= 0) return t2[0];
    if (e2 >= t2.length - 1) return t2[t2.length - 1];
    const o2 = Math.floor(e2), s2 = o2 + 1;
    return t2[o2] / (t2[o2] / t2[s2]) ** (e2 - o2);
  }
  scaleToZoom(e2) {
    const t2 = this.scales, o2 = t2.length - 1;
    let s2 = 0;
    for (; s2 < o2; s2++) {
      const o3 = t2[s2], r2 = t2[s2 + 1];
      if (o3 <= e2) return s2;
      if (r2 === e2) return s2 + 1;
      if (o3 > e2 && r2 < e2) return s2 + Math.log(o3 / e2) / Math.log(o3 / r2);
    }
    return s2;
  }
  tileAt(e2, t2, o2, s2) {
    const r2 = this.lodAt(e2);
    if (!r2) return null;
    let i2, l2;
    if ("number" == typeof t2) i2 = t2, l2 = o2;
    else if (G(t2.spatialReference, this.spatialReference)) i2 = t2.x, l2 = t2.y, s2 = o2;
    else {
      const e3 = g(t2, this.spatialReference);
      if (null == e3) return null;
      i2 = e3.x, l2 = e3.y, s2 = o2;
    }
    const n2 = r2.resolution * this.size[0], p2 = r2.resolution * this.size[1];
    return s2 || (s2 = new t(null, 0, 0, 0, u())), s2.level = e2, s2.row = Math.floor((this.origin.y - l2) / p2 + 1e-3), s2.col = Math.floor((i2 - this.origin.x) / n2 + 1e-3), this.updateTileInfo(s2), s2;
  }
  updateTileInfo(e2, t2 = w.ExtrapolateOptions.NONE) {
    let o2 = this.lodAt(e2.level);
    if (!o2 && t2 === w.ExtrapolateOptions.POWER_OF_TWO) {
      const t3 = this.lods[this.lods.length - 1];
      t3.level < e2.level && (o2 = t3);
    }
    if (!o2) return;
    const s2 = e2.level - o2.level, r2 = o2.resolution * this.size[0] / 2 ** s2, i2 = o2.resolution * this.size[1] / 2 ** s2;
    e2.id = `${e2.level}/${e2.row}/${e2.col}`, e2.extent || (e2.extent = u()), e2.extent[0] = this.origin.x + e2.col * r2, e2.extent[1] = this.origin.y - (e2.row + 1) * i2, e2.extent[2] = e2.extent[0] + r2, e2.extent[3] = e2.extent[1] + i2;
  }
  upsampleTile(e2) {
    const t2 = this._upsampleLevels[e2.level];
    return !(!t2 || -1 === t2.parentLevel) && (e2.level = t2.parentLevel, e2.row = Math.floor(e2.row / t2.factor + 1e-3), e2.col = Math.floor(e2.col / t2.factor + 1e-3), this.updateTileInfo(e2), true);
  }
  getTileBounds(e2, t2) {
    const o2 = this.lodAt(t2.level);
    if (null == o2) return null;
    const {
      resolution: s2
    } = o2, r2 = s2 * this.size[0], i2 = s2 * this.size[1];
    return e2[0] = this.origin.x + t2.col * r2, e2[1] = this.origin.y - (t2.row + 1) * i2, e2[2] = e2[0] + r2, e2[3] = e2[1] + i2, e2;
  }
  lodAt(e2) {
    return this._levelToLOD?.[e2] ?? null;
  }
  clone() {
    return w.fromJSON(this.write({}));
  }
  getCompatibleForVTL(e2) {
    if (this.size[0] !== this.size[1] || 256 === this.size[0] && 512 === e2) return null;
    const t2 = (512 === this.size[0] && 256 === e2 ? -1 : 0) + (this.spatialReference.isGeographic ? 1 : 0);
    if (this.size[0] === e2 && 0 === t2) return this;
    const o2 = [], s2 = this.lods.length - t2;
    for (let r2 = 0; r2 < s2; r2++) {
      const e3 = r2 + t2, {
        scale: s3,
        resolution: i2
      } = e3 >= 0 ? this.lods[e3] : {
        scale: 2 * this.lods[0].scale,
        resolution: 2 * this.lods[0].resolution
      };
      o2.push(new p({
        level: r2,
        scale: s3,
        resolution: i2
      }));
    }
    return new w({
      size: [e2, e2],
      dpi: this.dpi,
      format: this.format,
      compressionQuality: this.compressionQuality,
      origin: this.origin,
      spatialReference: this.spatialReference,
      lods: o2
    });
  }
  _initializeUpsampleLevels() {
    const e2 = this.lods;
    this._upsampleLevels = [];
    let t2 = null;
    for (let o2 = 0; o2 < e2.length; o2++) {
      const s2 = e2[o2];
      this._upsampleLevels[s2.level] = {
        parentLevel: t2 ? t2.level : -1,
        factor: t2 ? t2.resolution / s2.resolution : 0
      }, t2 = s2;
    }
  }
};
e([y({
  type: Number,
  json: {
    write: true
  }
})], j.prototype, "compressionQuality", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], j.prototype, "dpi", void 0), e([y({
  type: String,
  json: {
    read: x.read,
    write: x.write,
    origins: {
      "web-scene": {
        read: false,
        write: false
      }
    }
  }
})], j.prototype, "format", void 0), e([y({
  readOnly: true
})], j.prototype, "isWrappable", null), e([y({
  type: _,
  json: {
    write: true
  }
})], j.prototype, "origin", void 0), e([o("origin")], j.prototype, "readOrigin", null), e([y({
  type: [p],
  value: null,
  json: {
    write: true
  }
})], j.prototype, "lods", null), e([y({
  readOnly: true
})], j.prototype, "scales", void 0), e([y({
  cast: (e2) => Array.isArray(e2) ? e2 : "number" == typeof e2 ? [e2, e2] : [256, 256]
})], j.prototype, "size", void 0), e([o("size", ["rows", "cols"])], j.prototype, "readSize", null), e([r("size", {
  cols: {
    type: N
  },
  rows: {
    type: N
  }
})], j.prototype, "writeSize", null), e([y({
  type: f2,
  json: {
    write: true
  }
})], j.prototype, "spatialReference", void 0), j = w = e([a("esri.layers.support.TileInfo")], j), function(e2) {
  var t2;
  (t2 = e2.ExtrapolateOptions || (e2.ExtrapolateOptions = {}))[t2.NONE = 0] = "NONE", t2[t2.POWER_OF_TWO = 1] = "POWER_OF_TWO";
}(j || (j = {}));
var z = j;

export {
  p,
  z
};
//# sourceMappingURL=chunk-KAHESDP5.js.map
