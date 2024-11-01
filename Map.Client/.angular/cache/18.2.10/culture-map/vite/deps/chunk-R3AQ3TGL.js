import {
  s
} from "./chunk-6QDMUFEM.js";
import {
  e
} from "./chunk-3NGDRCQI.js";
import {
  i,
  r
} from "./chunk-JYODC3YQ.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/TiledDisplayObject.js
var r2 = class extends s {
  constructor(t, e2, i2, r3, n, o, h = n, l = o) {
    super(), this.tileDebugInfoTexture = null, this.debugInfo = {
      display: {
        length: 0,
        minOrderedLength: 0,
        minUnorderedLength: 0,
        triangleCount: 0
      },
      memory: {
        bytesUsed: 0,
        bytesReserved: 0
      }
    }, this._destroyed = false, this.key = new e(t), this.resolution = e2, this.x = i2, this.y = r3, this.width = n, this.height = o, this.rangeX = h, this.rangeY = l;
  }
  destroy() {
    this.tileDebugInfoTexture && (this.tileDebugInfoTexture.dispose(), this.tileDebugInfoTexture = null), this._destroyed = true;
  }
  get debugSlot() {
    let t = this;
    for (; t.parent !== this._stage; ) {
      if (!t.parent) return 0;
      t = t.parent;
    }
    return this._stage.children.indexOf(t);
  }
  setTransform(i2) {
    const s2 = this.resolution / (i2.resolution * i2.pixelRatio), r3 = this.transforms.tileMat3, [n, o] = i2.toScreenNoRotation([0, 0], [this.x, this.y]), h = this.width / this.rangeX * s2, l = this.height / this.rangeY * s2;
    r(r3, h, 0, 0, 0, l, 0, n, o, 1), i(this.transforms.displayViewScreenMat3, i2.displayViewMat3, r3);
  }
  get destroyed() {
    return this._destroyed;
  }
};

export {
  r2 as r
};
//# sourceMappingURL=chunk-R3AQ3TGL.js.map
