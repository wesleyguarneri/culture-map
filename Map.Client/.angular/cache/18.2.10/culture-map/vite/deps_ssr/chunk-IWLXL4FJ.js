import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i
} from "./chunk-OPZOJLPA.js";
import {
  E,
  R,
  a as a2
} from "./chunk-VOJZD4TW.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/views/2d/layers/graphics/HighlightGraphicContainer.js
var a3 = class extends i {
  get hasHighlight() {
    return this.children.some((r) => r.hasData);
  }
  renderChildren(r) {
    this.attributeView.update(), r.drawPhase === E.HIGHLIGHT && this.children.some((r2) => r2.hasData) && (super.renderChildren(r), r.context.setColorMask(true, true, true, true), a2(r, true, (r2) => {
      this._renderChildren(r2, R.All);
    }));
  }
};
a3 = e([a("esri.views.2d.layers.graphics.HighlightGraphicContainer")], a3);
var h = a3;

export {
  h
};
//# sourceMappingURL=chunk-IWLXL4FJ.js.map
