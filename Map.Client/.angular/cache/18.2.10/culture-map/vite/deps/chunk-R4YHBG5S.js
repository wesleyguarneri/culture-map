import {
  b
} from "./chunk-MFKZR4D2.js";
import {
  h
} from "./chunk-ON42KCSZ.js";
import {
  e as e2
} from "./chunk-3NGDRCQI.js";
import {
  z
} from "./chunk-LJEOBI2I.js";
import {
  c,
  u
} from "./chunk-IHVSZYZS.js";
import {
  s2
} from "./chunk-JJS7PR2U.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a2
} from "./chunk-DDYVXG4F.js";
import {
  a,
  k,
  s,
  v
} from "./chunk-HJY2YILU.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/2d/viewStateUtils.js
var t = Math.PI / 180;
function n(n2) {
  return n2 * t;
}
function o(t2, o2) {
  const a4 = n(o2.rotation), r = Math.abs(Math.cos(a4)), s3 = Math.abs(Math.sin(a4)), [u2, c2] = o2.size;
  return t2[0] = Math.round(c2 * s3 + u2 * r), t2[1] = Math.round(c2 * r + u2 * s3), t2;
}
function a3(t2, n2, o2, a4) {
  const [r, s3] = n2, [u2, c2] = a4, h2 = 0.5 * o2;
  return t2[0] = r - h2 * u2, t2[1] = s3 - h2 * c2, t2[2] = r + h2 * u2, t2[3] = s3 + h2 * c2, t2;
}

// ../../../node_modules/@arcgis/core/views/2d/layers/support/ExportStrategy.js
var y2 = u();
var x = [0, 0];
var S2 = new e2(0, 0, 0, 0);
var w = {
  container: null,
  fetchSource: null,
  requestUpdate: null,
  imageMaxWidth: 2048,
  imageMaxHeight: 2048,
  imageRotationSupported: false,
  imageNormalizationSupported: false,
  hidpi: false
};
var M = class extends S {
  constructor(t2) {
    super(t2), this._imagePromise = null, this.bitmaps = [], this.hidpi = w.hidpi, this.imageMaxWidth = w.imageMaxWidth, this.imageMaxHeight = w.imageMaxHeight, this.imageRotationSupported = w.imageRotationSupported, this.imageNormalizationSupported = w.imageNormalizationSupported, this.update = k((t3, e3) => __async(this, null, function* () {
      if (s(e3), !t3.stationary || this.destroyed) return;
      const i = t3.state, s3 = s2(i.spatialReference), a4 = this.hidpi ? t3.pixelRatio : 1, n2 = i.worldScreenWidth > 0, p = n2 && this.imageNormalizationSupported && i.worldScreenWidth < i.size[0], m = Math.round((this.imageMaxWidth ?? 0) / a4), l = Math.round((this.imageMaxHeight ?? 0) / a4);
      p ? (x[0] = i.worldScreenWidth, x[1] = i.size[1]) : this.imageRotationSupported ? (x[0] = i.size[0], x[1] = i.size[1]) : o(x, i);
      const c2 = Math.floor(x[0]) > m || Math.floor(x[1]) > l, u2 = s3 && (i.extent.xmin < s3.valid[0] || i.extent.xmax > s3.valid[1]), g = !this.imageNormalizationSupported && u2, f = !c2 && !g, y3 = this.imageRotationSupported ? i.rotation : 0, S3 = this.container.children.slice();
      if (f) {
        const t4 = p ? i.paddedViewState.center : i.center;
        this._imagePromise = this._singleExport(i, x, t4, i.resolution, y3, a4, e3);
      } else {
        let t4 = Math.min(m, l);
        n2 && (t4 = Math.min(i.worldScreenWidth, t4), t4 = Math.round(i.worldScreenWidth / Math.ceil(i.worldScreenWidth / t4))), this._imagePromise = this._tiledExport(i, t4, a4, e3);
      }
      try {
        const t4 = (yield this._imagePromise) ?? [];
        s(e3);
        const i2 = [];
        if (this._imagePromise = null, this.destroyed) return;
        this.bitmaps = t4;
        for (const e4 of S3) t4.includes(e4) || i2.push(e4.fadeOut().then(() => {
          e4.remove(), e4.destroy();
        }));
        for (const e4 of t4) i2.push(e4.fadeIn());
        yield Promise.all(i2);
      } catch (w2) {
        this._imagePromise = null, a(w2);
      }
    }), 5e3), this.updateExports = k((t3) => __async(this, null, function* () {
      const e3 = [];
      for (const i of this.container.children) {
        if (!i.visible || !i.stage) return;
        e3.push(t3(i).then(() => {
          i.invalidateTexture(), i.requestRender();
        }));
      }
      this._imagePromise = v(e3).then(() => this._imagePromise = null), yield this._imagePromise;
    }));
  }
  destroy() {
    this.bitmaps.forEach((t2) => t2.destroy()), this.bitmaps = [];
  }
  get updating() {
    return !this.destroyed && null !== this._imagePromise;
  }
  _export(t2, e3, i, r, s3, a4) {
    return __async(this, null, function* () {
      const n2 = yield this.fetchSource(t2, Math.floor(e3 * s3), Math.floor(i * s3), {
        rotation: r,
        pixelRatio: s3,
        signal: a4
      });
      s(a4);
      const p = new b(null, true);
      return p.x = t2.xmin, p.y = t2.ymax, p.resolution = t2.width / e3, p.rotation = r, p.pixelRatio = s3, p.opacity = 0, this.container.addChild(p), yield p.setSourceAsync(n2, a4), s(a4), p;
    });
  }
  _singleExport(t2, e3, i, o2, r, s3, a4) {
    return __async(this, null, function* () {
      a3(y2, i, o2, e3);
      const n2 = c(y2, t2.spatialReference);
      return [yield this._export(n2, e3[0], e3[1], r, s3, a4)];
    });
  }
  _tiledExport(t2, e3, i, o2) {
    const r = z.create({
      size: e3,
      spatialReference: t2.spatialReference,
      scales: [t2.scale]
    }), s3 = new h(r), a4 = s3.getTileCoverage(t2);
    if (!a4) return null;
    const n2 = [];
    return a4.forEach((r2, a5, p, h2) => {
      S2.set(r2, a5, p, 0), s3.getTileBounds(y2, S2);
      const l = c(y2, t2.spatialReference);
      n2.push(this._export(l, e3, e3, 0, i, o2).then((t3) => (0 !== h2 && (S2.set(r2, a5, p, h2), s3.getTileBounds(y2, S2), t3.x = y2[0], t3.y = y2[3]), t3)));
    }), Promise.all(n2);
  }
};
e([y()], M.prototype, "_imagePromise", void 0), e([y()], M.prototype, "bitmaps", void 0), e([y()], M.prototype, "container", void 0), e([y()], M.prototype, "fetchSource", void 0), e([y()], M.prototype, "hidpi", void 0), e([y()], M.prototype, "imageMaxWidth", void 0), e([y()], M.prototype, "imageMaxHeight", void 0), e([y()], M.prototype, "imageRotationSupported", void 0), e([y()], M.prototype, "imageNormalizationSupported", void 0), e([y()], M.prototype, "requestUpdate", void 0), e([y()], M.prototype, "updating", null), M = e([a2("esri.views.2d.layers.support.ExportStrategy")], M);
var _ = M;

export {
  _
};
//# sourceMappingURL=chunk-R4YHBG5S.js.map
