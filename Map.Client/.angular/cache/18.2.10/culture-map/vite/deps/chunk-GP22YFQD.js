import {
  V
} from "./chunk-XVR4FEAF.js";
import {
  e as e2,
  t as t2
} from "./chunk-MOCGEINB.js";
import {
  t
} from "./chunk-NSSWLGUQ.js";
import {
  i,
  u
} from "./chunk-D3AKDIJC.js";
import {
  w
} from "./chunk-6WHTZNUH.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/TiledLayerView3D.js
var p = (p2) => {
  let m = class extends p2 {
    constructor() {
      super(...arguments), this.hasMixedImageFormats = true;
    }
    get imageFormatIsOpaque() {
      return false;
    }
    get fullExtent() {
      return this.layer.fullExtent;
    }
    get isOpaque() {
      return this.fullOpacity >= 1 && this.imageFormatIsOpaque;
    }
    get visibleAtCurrentScale() {
      if (!u(this.layer.minScale, this.layer.maxScale) || !this.view.terrainScale) return true;
      const e3 = Math.round(this.view.basemapTerrain.tilingScheme.levelAtScale(this.view.terrainScale));
      return e3 >= this.displayLevelRange.minLevel && e3 <= this.displayLevelRange.maxLevel;
    }
    get dataScaleRange() {
      const e3 = this.tileInfo.lods;
      let t3 = e3[0].scale, i2 = e3[e3.length - 1].scale;
      if ("tilemapCache" in this.layer && this.layer.tilemapCache) {
        const {
          effectiveMinLOD: e4,
          effectiveMaxLOD: a2
        } = this.layer.tilemapCache;
        t3 = this.tileInfo.lodAt(e4).scale, i2 = this.tileInfo.lodAt(a2).scale;
      }
      return {
        minScale: t3,
        maxScale: i2
      };
    }
    canResume() {
      const e3 = this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null;
      return this.visible && this.layer?.loaded && !this.parent?.suspended && this.view?.ready && i(e3) && this.visibleAtCurrentTimeExtent || false;
    }
    get dataLevelRange() {
      const {
        minScale: e3,
        maxScale: t3
      } = this.dataScaleRange;
      return this.levelRangeFromScaleRange(e3, t3);
    }
    get displayLevelRange() {
      const e3 = this.layer.minScale || this.dataScaleRange.minScale, t3 = this.layer.maxScale || this.dataScaleRange.maxScale, i2 = this.levelRangeFromScaleRange(e3, t3);
      return this.layer.maxScale && i2.maxLevel++, i2;
    }
    get performanceInfo() {
      return new t(this.view.basemapTerrain.getUsedMemoryForLayerView(this));
    }
    getTileUrl(e3) {
      return this.layer.getTileUrl(e3[0], e3[1], e3[2]);
    }
    _addTilingSchemeMatchPromise() {
      if (null == this.fullExtent) return this.addResolvingPromise(Promise.reject(new s("tilingscheme:extent-not-defined", "This layer doesn't define a fullExtent.")));
      const e3 = this._getTileInfoSupportError(this.tileInfo, this.fullExtent);
      if (e3) return this.addResolvingPromise(Promise.reject(e3));
      this.addResolvingPromise(w(() => this.view?.basemapTerrain?.tilingSchemeLocked).then(() => {
        const e4 = this.view.basemapTerrain.tilingScheme, t3 = "tilemapCache" in this.layer ? this.layer.tilemapCache?.effectiveMaxLOD : void 0, i2 = this._getTileInfoCompatibilityError(this.tileInfo, e4, t3);
        if (i2) throw i2;
      }));
    }
    _getTileInfoSupportError(e3, i2) {
      const a2 = V(e3, i2, this.view.spatialReference, this.view.state.viewingMode, "tilemapCache" in this.layer ? this.layer.tilemapCache?.effectiveMaxLOD : void 0);
      if (!a2) return;
      const r = {
        layer: this.layer,
        error: a2
      };
      switch (a2.name) {
        case "tilingscheme:spatial-reference-mismatch":
        case "tilingscheme:global-unsupported-spatial-reference":
        case "tilingscheme:local-unsupported-spatial-reference":
          return new s("layerview:spatial-reference-incompatible", "The spatial reference of this layer does not meet the requirements of the view", r);
        default:
          return new s("layerview:tiling-scheme-unsupported", "The tiling scheme of this layer is not supported by SceneView", r);
      }
    }
    _getTileInfoCompatibilityError(e3, i2, a2) {
      return null != e3 && i2.compatibleWith(e3, a2) ? null : new s("layerview:tiling-scheme-incompatible", "The tiling scheme of this layer is incompatible with the tiling scheme of the surface");
    }
    levelRangeFromScaleRange(e3, t3) {
      const i2 = {
        minLevel: 0,
        maxLevel: 1 / 0
      }, a2 = this.view && this.view.basemapTerrain && this.view.basemapTerrain.tilingScheme;
      if (!a2) return i2;
      const r = a2.levels[0], l = (e4) => {
        const t4 = Math.log(r.scale / e4) / Math.LN2;
        return 0.5 - Math.abs(0.5 - t4 % 1) < 1e-9 ? Math.round(t4) : Math.ceil(t4);
      };
      return null != e3 && e3 > 0 && (i2.minLevel = Math.max(0, l(e3))), null != t3 && t3 > 0 && (i2.maxLevel = Math.max(0, l(t3))), i2;
    }
    isUpdating() {
      return !!(this.view && this.view.basemapTerrain && this.view.basemapTerrain.updating);
    }
  };
  return e([y({
    readOnly: true
  })], m.prototype, "imageFormatIsOpaque", null), e([y({
    readOnly: true
  })], m.prototype, "updating", void 0), e([y(t2)], m.prototype, "updatingProgress", void 0), e([y(e2)], m.prototype, "updatingProgressValue", void 0), e([y()], m.prototype, "hasMixedImageFormats", void 0), e([y()], m.prototype, "fullExtent", null), e([y({
    readOnly: true
  })], m.prototype, "isOpaque", null), e([y({
    readOnly: true
  })], m.prototype, "visibleAtCurrentScale", null), e([y()], m.prototype, "dataScaleRange", null), e([y({
    readOnly: true
  })], m.prototype, "dataLevelRange", null), e([y({
    readOnly: true
  })], m.prototype, "displayLevelRange", null), e([y()], m.prototype, "layer", void 0), m = e([a("esri.views.3d.layers.TiledLayerView3D")], m), m;
};

export {
  p
};
//# sourceMappingURL=chunk-GP22YFQD.js.map
