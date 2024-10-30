import {
  g
} from "./chunk-YNX4ZC52.js";
import {
  l as l2
} from "./chunk-LVYRNWV6.js";
import {
  E as E3,
  m as m2
} from "./chunk-GW7WMRYJ.js";
import {
  e as e6
} from "./chunk-Z52R7W33.js";
import {
  ct
} from "./chunk-O7OCS6XP.js";
import {
  C
} from "./chunk-67LE7VNQ.js";
import {
  E as E2
} from "./chunk-557LD7Q2.js";
import {
  l
} from "./chunk-CITBGG5A.js";
import {
  i
} from "./chunk-UQMQLPLV.js";
import {
  y as y2
} from "./chunk-5JJ6GBOU.js";
import {
  c as c2
} from "./chunk-D3AKDIJC.js";
import {
  I as I2
} from "./chunk-WG5JLPNN.js";
import {
  N
} from "./chunk-GOKBAMCG.js";
import {
  t as t4
} from "./chunk-DE6MQ5XE.js";
import {
  t as t2
} from "./chunk-WN3YAMRZ.js";
import {
  D
} from "./chunk-YLE5AYZV.js";
import {
  t as t3
} from "./chunk-62WUYJJN.js";
import {
  t
} from "./chunk-RDQF44TE.js";
import {
  e as e5
} from "./chunk-4MMTPKY4.js";
import {
  E,
  I,
  M,
  U,
  e as e4,
  s as s2,
  u as u2
} from "./chunk-IHVSZYZS.js";
import {
  w as w2
} from "./chunk-NYQ5CYNR.js";
import {
  w
} from "./chunk-6WHTZNUH.js";
import {
  _,
  a as a2
} from "./chunk-XNUH25NY.js";
import {
  e as e3
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  b,
  c2 as c,
  k,
  m,
  s,
  u
} from "./chunk-HJY2YILU.js";
import {
  e as e2
} from "./chunk-7DA6A5LD.js";
import {
  e
} from "./chunk-2MMLMOWS.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/support/overlayImageUtils.js
function u3(r, o, n2) {
  const i2 = M(r) / s2(r), m3 = {
    width: n2,
    height: n2
  };
  return i2 > 1.0001 ? m3.height = n2 / i2 : i2 < 0.9999 && (m3.width = n2 * i2), m3.width = Math.round(m3.width / (M(r) / M(o))), m3.height = Math.round(m3.height / (s2(r) / s2(o))), m3;
}
function l3(t5, e7) {
  return ct(t5, [[e7[0], e7[1], -1], [e7[2], e7[1], -1], [e7[2], e7[3], -1], [e7[0], e7[3], -1]]);
}
function s3(t5, e7, h) {
  if (!E(e7, h)) return l3(t5, h);
  const u4 = [e7[1] - h[1], Math.min(e7[3], h[3]) - Math.max(e7[1], h[1]), h[3] - e7[3], 123456], s4 = [e7[0] - h[0], Math.min(e7[2], h[2]) - Math.max(e7[0], h[0]), h[2] - e7[2], 123456], f = h[2] - h[0], p = h[3] - h[1], w3 = s4[0] > 0 && s4[2] > 0 ? 3 : 2, b2 = u4[0] > 0 && u4[2] > 0 ? 3 : 2, c3 = (b2 + 1) * (w3 + 1), y3 = t3(3 * c3), d = t2(2 * c3), j = new Array(6 * (b2 * w3 - 1));
  let A = 0, M2 = 0, x = 0, O = 0, G = 0;
  for (let r = 0; r < 4; r++) {
    const t6 = u4[r];
    if (t6 <= 0) continue;
    let e8 = 0;
    for (let o = 0; o < 4; o++) {
      const t7 = s4[o];
      t7 <= 0 || (y3[M2++] = h[0] + e8, y3[M2++] = h[1] + A, y3[M2++] = -1, d[x++] = e8 / f, d[x++] = A / p, o < 3 && r < 3 && (1 !== o || 1 !== r) && (j[G++] = O, j[G++] = O + 1, j[G++] = O + w3 + 1, j[G++] = O + 1, j[G++] = O + w3 + 2, j[G++] = O + w3 + 1), O++, e8 += t7);
    }
    A += t6;
  }
  const I3 = new Array(j.length);
  return new I2(t5, [[e5.POSITION, new t(y3, j, 3, true)], [e5.NORMAL, new t(a3, I3, 3, true)], [e5.UV0, new t(d, j, 2, true)]]);
}
var a3 = [0, 0, 1];

// ../../../node_modules/@arcgis/core/views/3d/layers/DynamicLayerView3D.js
var V = class extends i(l(y2)) {
  constructor() {
    super(...arguments), this.drapeSourceType = e6.RasterImage, this.updatePolicy = C.SYNC, this.fullExtentInLocalViewSpatialReference = null, this.maximumDataResolution = null, this._images = new Array(), this._extents = new Array(), this._overlays = new Array(), this.updateWhenStationary = true, this._drapeSourceRenderer = null, this.refreshDebounced = k((e7) => __async(this, null, function* () {
      this.destroyed || (yield this._doRefresh(e7).catch((e8) => {
        b(e8) || n.getLogger(this).error(e8);
      }));
    }), 2e3);
  }
  get visibleAtCurrentScale() {
    const e7 = this.layer, t5 = "effectiveScaleRange" in e7 ? e7.effectiveScaleRange : null;
    return c2(t5, this.view.terrainScale);
  }
  initialize() {
    this._drapeSourceRenderer = this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this), this.addHandles(e2(() => this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))), this.addResolvingPromise(l2(this).then((e7) => this._set("fullExtentInLocalViewSpatialReference", e7))), this._updatingHandles.add(() => this.suspended, () => this._suspendedChangeHandler());
  }
  destroy() {
    this.clear();
  }
  setDrapingExtent(e7, t5) {
    this._spatialReference = t5, e7.forEach((e8, t6) => {
      this._overlays[t6] = e8, this._updateImageExtent(e8, t6);
    });
  }
  _updateImageExtent(e7, t5) {
    const r = this._clippedExtent(e7.extent, z);
    if (null == r) return;
    const i2 = u3(e7.extent, r, e7.resolution);
    let a4 = e7.pixelRatio * this.view.state.pixelRatio;
    const {
      layer: o
    } = this;
    if ("imageMaxWidth" in o && null != o.imageMaxWidth || "imageMaxHeight" in o && null != o.imageMaxHeight) {
      const e8 = o.imageMaxWidth, t6 = o.imageMaxHeight;
      if (i2.width > e8) {
        const t7 = e8 / i2.width;
        i2.height = Math.floor(i2.height * t7), i2.width = e8, a4 *= t7;
      }
      if (i2.height > t6) {
        const e9 = t6 / i2.height;
        i2.width = Math.floor(i2.width * e9), i2.height = t6, a4 *= e9;
      }
    }
    const l4 = this._extents[t5];
    l4 && I(l4.extent, r) && this._imageSizeEquals(r, l4.imageSize, i2) || (this._extents[t5] = {
      extent: u2(r),
      imageSize: i2,
      pixelRatio: a4
    }, this.suspended || this._fetch(t5).catch((e8) => {
      b(e8) || n.getLogger(this).error(e8);
    }));
  }
  clear() {
    for (let e7 = 0; e7 < this._images.length; e7++) this._clearImage(e7);
  }
  doRefresh() {
    return __async(this, null, function* () {
      return this._doRefresh();
    });
  }
  _doRefresh(e7) {
    return __async(this, null, function* () {
      if (this.suspended) return;
      const t5 = [];
      for (let r = 0; r < this._extents.length; r++) this._extents[r] && t5.push(this._fetch(r, e7));
      yield Promise.allSettled(t5);
    });
  }
  processResult(e7, t5, r) {
    return __async(this, null, function* () {
      (t5 instanceof HTMLImageElement || t5 instanceof HTMLCanvasElement) && (e7.image = t5);
    });
  }
  findExtentInfoAt(e7) {
    for (const t5 of this._extents) {
      const r = t5.extent;
      if (new w2(r[0], r[1], r[2], r[3], this._spatialReference).contains(e7)) return t5;
    }
    return null;
  }
  getFetchOptions() {
  }
  redraw(e7, r) {
    return __async(this, null, function* () {
      yield a2(this._images, (t5, i2) => __async(this, null, function* () {
        t5 && (yield e7(t5, r), yield this._createStageObjects(i2, t5.image, r));
      }));
    });
  }
  _imageSizeEquals(e7, t5, r) {
    if (!this.maximumDataResolution) return false;
    const i2 = M(e7) / this.maximumDataResolution.x, s4 = s2(e7) / this.maximumDataResolution.y, a4 = i2 / t5.width, o = s4 / t5.height, n2 = i2 / r.width, l4 = s4 / r.height, h = Math.abs(a4 - n2), m3 = Math.abs(o - l4), d = t4.TESTS_DISABLE_OPTIMIZATIONS ? 0 : 1.5;
    return h <= d && m3 <= d;
  }
  _fetch(e7, t5) {
    return __async(this, null, function* () {
      if (this.suspended) return;
      const r = this._extents[e7], i2 = r.extent;
      this._images[e7] || (this._images[e7] = {
        texture: null,
        material: null,
        renderGeometry: null,
        loadingPromise: null,
        loadingAbortController: null,
        image: null,
        pixelData: null,
        renderExtent: u2(i2)
      });
      const o = this._images[e7];
      o.loadingAbortController = e(o.loadingAbortController);
      const c3 = new w2(i2[0], i2[1], i2[2], i2[3], this._spatialReference);
      if (0 === c3.width || 0 === c3.height) return void this._clearImage(e7);
      const g2 = new AbortController();
      o.loadingAbortController = g2, m(t5, () => g2.abort());
      const u4 = g2.signal, f = this._waitFetchReady(u4).then(() => __async(this, null, function* () {
        const t6 = __spreadProps(__spreadValues({
          requestAsImageElement: true,
          pixelRatio: this._overlays[e7].pixelRatio
        }, this.getFetchOptions()), {
          signal: u4
        }), {
          height: i3,
          width: s4
        } = r.imageSize;
        return this.layer.fetchImage(c3, s4, i3, t6);
      })).then((e8) => {
        if (c(u4)) throw n.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."), u();
        return this.processResult(o, e8);
      }).then(() => {
        e4(o.renderExtent, i2);
      });
      o.loadingPromise = f, yield this._updatingHandles.addPromise(f.then(() => __async(this, null, function* () {
        s(u4), yield this._createStageObjects(e7, o.image, u4);
      })).catch((e8) => {
        throw e8 && !b(e8) && n.getLogger(this).error(e8), e8;
      }).finally(() => {
        f === o.loadingPromise && (o.loadingPromise = null, o.loadingAbortController = null);
      }));
    });
  }
  _clearImage(e7) {
    const t5 = this._images[e7];
    if (t5) {
      null != t5.renderGeometry && (this._drapeSourceRenderer.removeGeometries([t5.renderGeometry], E3.UPDATE), t5.renderGeometry = null);
      const e8 = this.view._stage, r = t5.texture;
      r?.unload(), e8.remove(r), t5.texture = null, e8.remove(t5.material), t5.material = null, t5.loadingAbortController = e(t5.loadingAbortController), t5.loadingPromise = null, t5.image = null, t5.pixelData = null;
    }
  }
  _createStageObjects(e7, t5, i2) {
    return __async(this, null, function* () {
      const s4 = this.view._stage, a4 = this._images[e7], o = () => {
        a4.texture?.unload(), s4.remove(a4.texture), a4.texture = null, a4.renderGeometry && (this._drapeSourceRenderer.removeGeometries([a4.renderGeometry], E3.UPDATE), a4.renderGeometry = null);
      };
      if (t5) {
        const n2 = new N(t5, {
          width: t5.width,
          height: t5.height,
          preMultiplyAlpha: true,
          wrap: {
            s: D.CLAMP_TO_EDGE,
            t: D.CLAMP_TO_EDGE
          }
        });
        let l4;
        if (yield _(this._images[e7 === E2.INNER ? E2.OUTER : E2.INNER].loadingPromise), s(i2), o(), yield s4.schedule(() => n2.load(s4.renderView.renderingContext), i2), s4.add(n2), a4.texture = n2, null == a4.material ? (a4.material = new g({
          transparent: true,
          textureId: n2.id
        }), s4.add(a4.material)) : a4.material.setParameters({
          textureId: n2.id
        }), e7 === E2.INNER) l4 = l3(a4.material, a4.renderExtent);
        else {
          const e8 = this._images[0].renderExtent;
          if (!e8) return void o();
          l4 = s3(a4.material, e8, a4.renderExtent);
        }
        a4.renderGeometry = new m2(l4), a4.renderGeometry.localOrigin = this._overlays[e7].renderLocalOrigin, this._drapeSourceRenderer.addGeometries([a4.renderGeometry], E3.UPDATE);
      } else o(), s4.remove(a4.material), a4.material = null;
    });
  }
  _clippedExtent(e7, t5) {
    if ("local" !== this.view.viewingMode) return e4(t5, e7);
    const r = this.view.basemapTerrain;
    return r.ready ? U(e7, r.extent, t5) : e4(t5, e7);
  }
  _suspendedChangeHandler() {
    this.suspended ? this.clear() : this.refreshDebounced();
  }
  _waitFetchReady(e7) {
    return __async(this, null, function* () {
      yield w(() => this.view.stationary, e7), s(e7);
    });
  }
};
e3([y()], V.prototype, "layer", void 0), e3([y()], V.prototype, "suspended", void 0), e3([y({
  readOnly: true
})], V.prototype, "fullExtentInLocalViewSpatialReference", void 0), e3([y({
  readOnly: true
})], V.prototype, "visibleAtCurrentScale", null), e3([y()], V.prototype, "updating", void 0), V = e3([a("esri.views.3d.layers.DynamicLayerView3D")], V);
var N2 = V;
var z = u2();

export {
  N2 as N
};
//# sourceMappingURL=chunk-CEHR2FVR.js.map
