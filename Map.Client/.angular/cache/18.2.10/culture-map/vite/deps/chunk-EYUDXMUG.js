import {
  _,
  n2 as n,
  y
} from "./chunk-GQOLRPFL.js";
import {
  E
} from "./chunk-PAFFV5BJ.js";
import {
  has
} from "./chunk-DXLOWWK7.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/TileContainer.js
var n2 = (e, r) => e.key.level - r.key.level != 0 ? e.key.level - r.key.level : e.key.row - r.key.row != 0 ? e.key.row - r.key.row : e.key.col - r.key.col;
var i = class extends n {
  constructor(e) {
    super(), this._tileInfoView = e;
  }
  renderChildren(e) {
    this.sortChildren(n2), this.setStencilReference(e), super.renderChildren(e);
  }
  createRenderParams(e) {
    const {
      state: r
    } = e, s = super.createRenderParams(e);
    return s.requiredLevel = this._tileInfoView.getClosestInfoForScale(r.scale).level, s.displayLevel = this._tileInfoView.tileInfo.scaleToZoom(r.scale), s;
  }
  prepareRenderPasses(r) {
    const n3 = super.prepareRenderPasses(r);
    return n3.push(r.registerRenderPass({
      name: "stencil",
      brushes: [_],
      drawPhase: E.DEBUG | E.MAP | E.HIGHLIGHT | E.LABEL,
      target: () => this.getStencilTarget()
    })), has("esri-tiles-debug") && n3.push(r.registerRenderPass({
      name: "tileInfo",
      brushes: [y],
      drawPhase: E.DEBUG,
      target: () => this.children
    })), n3;
  }
  getStencilTarget() {
    return this.children;
  }
  setStencilReference(e) {
    let r = 1;
    for (const s of this.children) s.stencilRef = r++;
  }
};

export {
  i
};
//# sourceMappingURL=chunk-EYUDXMUG.js.map
