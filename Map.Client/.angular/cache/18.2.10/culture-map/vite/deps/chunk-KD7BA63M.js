import {
  i
} from "./chunk-NGV4VPR2.js";
import {
  E,
  R,
  a
} from "./chunk-PAFFV5BJ.js";

// ../../../node_modules/@arcgis/core/views/2d/layers/graphics/GraphicContainer.js
var t = class extends i {
  renderChildren(i2) {
    for (const e of this.children) e.setTransform(i2.state);
    if (super.renderChildren(i2), this.attributeView.update(), this.children.some((e) => e.hasData)) {
      switch (i2.drawPhase) {
        case E.MAP:
          this._renderChildren(i2, R.All);
          break;
        case E.HIGHLIGHT:
          this.hasHighlight && this._renderHighlight(i2);
      }
      this._boundsRenderer && this._boundsRenderer.doRender(i2);
    }
  }
  _renderHighlight(e) {
    a(e, false, (e2) => {
      this._renderChildren(e2, R.Highlight);
    });
  }
};

export {
  t
};
//# sourceMappingURL=chunk-KD7BA63M.js.map
