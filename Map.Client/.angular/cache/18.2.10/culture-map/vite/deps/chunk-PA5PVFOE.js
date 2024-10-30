import {
  h,
  r
} from "./chunk-SWPHGZYB.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  A,
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/views/3d/support/MemoryManagedView.js
function e2(e3) {
  return "usedMemory" in e3 && "unloadedMemory" in e3 && "ignoresMemoryFactor" in e3;
}

// ../../../node_modules/@arcgis/core/views/3d/support/MemoryController.js
function d(e3) {
  return new p({
    view: e3
  });
}
var l = 0.1;
var m = 1;
var u = 1;
var n2 = 0.75;
var _ = 0.6;
var c = 1.3;
var p = class extends S {
  constructor(e3) {
    super(e3), this._quality = 1, this._usedMemory = 0, this._updating = false, this._stableQuality = 0, this._downscaleMemoryUsed = 0, this._canFastRecover = false, this._memoryPredicted = 0, this._cacheStorage = new h(), this._warnMemoryUsage = null, this._numQualityChanges = 0, this._maxMemory = 750, this._additionalCacheMemory = 0, this.addHandles(A({
      prepare: () => this._updateMemory()
    }));
  }
  destroy() {
    this._cacheStorage.destroy();
  }
  get maxMemory() {
    return this._maxMemory;
  }
  set maxMemory(e3) {
    null == e3 || e3 <= 0 || (this._stableQuality = 0, this._canFastRecover = false, this._maxMemory < e3 && this._updateQuality(m), this._maxMemory = e3);
  }
  get additionalCacheMemory() {
    return this._additionalCacheMemory;
  }
  set additionalCacheMemory(e3) {
    null != e3 && (this._additionalCacheMemory = e3);
  }
  get memoryFactor() {
    return this._quality;
  }
  get updating() {
    return this._updating;
  }
  get usedMemory() {
    return this._usedMemory;
  }
  get usedCacheMemory() {
    return this._cacheStorage.size;
  }
  newCache(e3, t) {
    return new r(e3, this._cacheStorage, t);
  }
  resetStableQuality() {
    this._stableQuality = 0;
  }
  disableMemCache() {
    this.additionalCacheMemory = -4096;
  }
  update() {
    if (this._memoryPredicted <= 0 && !this._updating) return;
    let e3 = this._layersUpdating();
    if (this._memoryPredicted < _ && this._canFastRecover) this._downscaleMemoryUsed = 0, this._stableQuality = 0, this._canFastRecover = false, this._updateQuality(m);
    else if (e3) (this._memoryPredicted > 1.1 * u || this._usedMemory > u) && (this._stableQuality > 0 ? (this._downscaleMemoryUsed = 0, this._updateQuality(this._stableQuality)) : this._quality > l && this._downscaleMemoryUsed < this._usedMemory && (this._updateQuality(this._quality / c), this._downscaleMemoryUsed = this._usedMemory, this._canFastRecover = false));
    else if (this._downscaleMemoryUsed = 0, this._usedMemory > u) this._stableQuality = 0, this._canFastRecover = false, e3 = this._updateQuality(this._quality / c), this._downscaleMemoryUsed = this._memoryPredicted;
    else if (this._stableQuality !== this._quality) if (this._usedMemory < n2 && this._quality < m) {
      this._stableQuality = this._quality;
      const t = 0.05;
      e3 = this._updateQuality(this._quality + t);
    } else this._quality < 1 && (this._canFastRecover = true);
    this._updating = e3;
  }
  _updateQuality(e3) {
    return (e3 = Math.min(Math.max(e3, l), m)) !== this._quality && (this._quality = e3, ++this._numQualityChanges, true);
  }
  _layersUpdating() {
    return this.view.allLayerViews.some((e3) => !!e3.updating);
  }
  _updateMemory() {
    if (!this.view) return;
    this.view._stage?.renderer?.tick();
    const e3 = this.view._stage?.renderer?.usedMemory;
    let t = (this.view.basemapTerrain?.usedMemory ?? 0) + (e3 ? e3.fbos + e3.edges + e3.plugins : 0), s = 0;
    this.view.allLayerViews && this.view.allLayerViews.forEach((e4) => {
      if (e2(e4)) {
        const i = e4.ignoresMemoryFactor ? this._quality : 1;
        t += e4.usedMemory * i, s += e4.unloadedMemory * i;
      }
    });
    const r2 = null == this._warnMemoryUsage || Math.round(10 * t) !== Math.round(10 * this._warnMemoryUsage), a2 = 1048576 * this.maxMemory;
    if (t > a2 && r2) {
      this._warnMemoryUsage = t;
      const e4 = (e5) => (e5 / 1048576).toLocaleString(void 0, {
        maximumFractionDigits: 1
      }) + " MB", r3 = Math.round(100 * this._quality);
      n.getLogger(this).warn(`Memory Limit exceeded! Limit: ${e4(a2)} Current: ${e4(t)} Projected: ${e4(t + s)} Quality: ${r3}%`);
    }
    this._usedMemory = t / a2, this._memoryPredicted = (t + s) / a2;
    const o = a2 - t;
    this._cacheStorage.maxSize = Math.max(0, o + 1048576 * this.additionalCacheMemory);
  }
  get test() {
  }
};
e([y({
  constructOnly: true
})], p.prototype, "view", void 0), e([y()], p.prototype, "maxMemory", null), e([y()], p.prototype, "additionalCacheMemory", null), e([y({
  readOnly: true
})], p.prototype, "memoryFactor", null), e([y({
  readOnly: true
})], p.prototype, "updating", null), e([y({
  readOnly: true
})], p.prototype, "usedMemory", null), e([y({
  readOnly: true
})], p.prototype, "usedCacheMemory", null), e([y()], p.prototype, "_quality", void 0), e([y()], p.prototype, "_usedMemory", void 0), e([y()], p.prototype, "_updating", void 0), e([y()], p.prototype, "_stableQuality", void 0), e([y()], p.prototype, "_maxMemory", void 0), e([y()], p.prototype, "_additionalCacheMemory", void 0), p = e([a("esri.views.3d.support.MemoryController")], p);

export {
  d,
  l
};
//# sourceMappingURL=chunk-PA5PVFOE.js.map
