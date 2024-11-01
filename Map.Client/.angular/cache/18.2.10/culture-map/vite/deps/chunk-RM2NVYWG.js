import {
  e
} from "./chunk-3NGDRCQI.js";
import {
  a
} from "./chunk-TRSGUVSM.js";
import {
  u
} from "./chunk-IHVSZYZS.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  t4 as t
} from "./chunk-ANKOCGE2.js";

// ../../../node_modules/@arcgis/core/views/2d/layers/features/support/Tile.js
var n = class _n {
  constructor(e2, t2) {
    this.key = new e(0, 0, 0, 0), this.bounds = u(), this.objectIds = /* @__PURE__ */ new Set(), this.key.set(t2);
    const s = e2.getLODInfoAt(this.key);
    this.tileInfoView = e2, this.tileInfoView.getTileBounds(this.bounds, this.key, true), this.resolution = s.resolution, this.level = s.level, this.scale = s.scale, this.minScale = e2.zoomToScale(s.level - 1), this.maxScale = e2.zoomToScale(s.level + 1);
  }
  get lod() {
    return this.tileInfoView.getLODInfoAt(this.key);
  }
  get id() {
    return this.key.id;
  }
  get extent() {
    return w.fromBounds(this.bounds, this.tileInfoView.tileInfo.spatialReference);
  }
  get transform() {
    return {
      originPosition: "upperLeft",
      scale: [this.resolution, this.resolution],
      translate: [this.bounds[0], this.bounds[3]]
    };
  }
  createArcadeEvaluationOptions(e2) {
    return {
      $view: {
        scale: this.scale,
        timeZone: e2
      }
    };
  }
  createChildTiles() {
    const t2 = this.key.getChildKeys(), i = t.acquire();
    for (let e2 = 0; e2 < t2.length; e2++) i[e2] = new _n(this.tileInfoView, t2[e2]);
    return i;
  }
  getQuantizationParameters() {
    return a.fromJSON({
      mode: "view",
      originPosition: "upperLeft",
      tolerance: this.resolution,
      extent: {
        xmin: this.bounds[0],
        ymin: this.bounds[1],
        xmax: this.bounds[2],
        ymax: this.bounds[3],
        spatialReference: this.tileInfoView.tileInfo.spatialReference
      }
    });
  }
};

export {
  n
};
//# sourceMappingURL=chunk-RM2NVYWG.js.map
