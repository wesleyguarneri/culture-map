import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  b
} from "./chunk-PTO6XZBI.js";
import {
  i
} from "./chunk-YQ4BFXXY.js";
import {
  h2 as h
} from "./chunk-BUAHJQUY.js";
import {
  r
} from "./chunk-YQDGVKY6.js";
import {
  E
} from "./chunk-VOJZD4TW.js";
import {
  e as e2
} from "./chunk-7PJ3GUSK.js";
import {
  u
} from "./chunk-GCVQXAS4.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/BitmapTile.js
var r2 = class extends r {
  constructor(e4, s, r4, i2, a2, n3, o2 = null) {
    super(e4, s, r4, i2, a2, n3), this.bitmap = new b(o2), this.bitmap.coordScale = [a2, n3], this.bitmap.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(), this.bitmap.destroy();
  }
  beforeRender(e4) {
    this.bitmap.beforeRender(e4), super.beforeRender(e4);
  }
  afterRender(e4) {
    this.bitmap.afterRender(e4), super.afterRender(e4);
  }
  set stencilRef(e4) {
    this.bitmap.stencilRef = e4;
  }
  get stencilRef() {
    return this.bitmap.stencilRef;
  }
  _createTransforms() {
    return {
      displayViewScreenMat3: e2(),
      tileMat3: e2()
    };
  }
  setTransform(e4) {
    super.setTransform(e4), this.bitmap.transforms.displayViewScreenMat3 = this.transforms.displayViewScreenMat3;
  }
  onAttach() {
    this.bitmap.stage = this.stage;
  }
  onDetach() {
    this.bitmap && (this.bitmap.stage = null);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/BitmapTileContainer.js
var n = class extends i {
  get requiresDedicatedFBO() {
    return this.children.some((e4) => "additive" === e4.bitmap.blendFunction);
  }
  createTile(r4) {
    const t2 = this._tileInfoView.getTileBounds(u(), r4), s = this._tileInfoView.getTileResolution(r4.level), [n3, o2] = this._tileInfoView.tileInfo.size;
    return new r2(r4, s, t2[0], t2[3], n3, o2);
  }
  prepareRenderPasses(e4) {
    const i2 = e4.registerRenderPass({
      name: "bitmap (tile)",
      brushes: [h.bitmap],
      target: () => this.children.map((e5) => e5.bitmap),
      drawPhase: E.MAP
    });
    return [...super.prepareRenderPasses(e4), i2];
  }
  doRender(e4) {
    this.visible && e4.drawPhase === E.MAP && super.doRender(e4);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/BitmapTileLayerView2D.js
var r3 = (r4) => {
  let s = class extends r4 {
    attach() {
      this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`), this._bitmapView = new n(this._tileInfoView), this.container.addChild(this._bitmapView);
    }
    detach() {
      this.container.removeChild(this._bitmapView), this._bitmapView?.removeAllChildren(), this._bitmapView = null;
    }
  };
  return s = e([a("esri.views.2d.layers.BitmapTileLayerView2D")], s), s;
};

// ../../../node_modules/@arcgis/core/views/2d/layers/support/imageUtils.js
function e3(e4) {
  return e4 instanceof HTMLImageElement ? e4.naturalWidth : e4.width;
}
function t(e4) {
  return e4 instanceof HTMLImageElement ? e4.naturalHeight : e4.height;
}
function n2(n3, l, r4, u2) {
  if (r4.level === u2.level) return l;
  const i2 = n3.tileInfo.size, a2 = n3.getTileResolution(r4.level), c = n3.getTileResolution(u2.level);
  let g = n3.getLODInfoAt(u2.level);
  const h2 = g.getXForColumn(u2.col), d = g.getYForRow(u2.row);
  g = n3.getLODInfoAt(r4.level);
  const f = g.getXForColumn(r4.col), s = g.getYForRow(r4.row), m = e3(l) / i2[0], v = t(l) / i2[1], w = Math.round(m * ((h2 - f) / a2)), I = Math.round(v * (-(d - s) / a2)), M = Math.round(m * i2[0] * (c / a2)), F = Math.round(v * i2[1] * (c / a2)), L = o(i2);
  return L.getContext("2d").drawImage(l, w, I, M, F, 0, 0, i2[0], i2[1]), L;
}
function o(e4) {
  const t2 = document.createElement("canvas");
  return [t2.width, t2.height] = e4, t2;
}

export {
  r3 as r,
  n2 as n,
  o
};
//# sourceMappingURL=chunk-ZKG2FGOF.js.map
