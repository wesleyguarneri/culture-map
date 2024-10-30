import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i
} from "./chunk-UZL2AATT.js";
import {
  y as y2
} from "./chunk-F2EOMEXH.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/views/layers/MapImageLayerView.js
var i2 = (i3) => {
  let p = class extends i3 {
    initialize() {
      this.exportImageParameters = new y2({
        layer: this.layer
      });
    }
    destroy() {
      this.exportImageParameters.destroy(), this.exportImageParameters = null;
    }
    get floors() {
      return this.view?.floors ?? null;
    }
    get exportImageVersion() {
      return this.exportImageParameters?.commitProperty("version"), this.commitProperty("timeExtent"), this.commitProperty("floors"), (this._get("exportImageVersion") || 0) + 1;
    }
    get timeExtent() {
      return i(this.layer, this.view?.timeExtent, this._get("timeExtent"));
    }
    canResume() {
      return !!super.canResume() && !this.timeExtent?.isEmpty;
    }
  };
  return e([y()], p.prototype, "exportImageParameters", void 0), e([y({
    readOnly: true
  })], p.prototype, "floors", null), e([y({
    readOnly: true
  })], p.prototype, "exportImageVersion", null), e([y()], p.prototype, "layer", void 0), e([y()], p.prototype, "suspended", void 0), e([y({
    readOnly: true
  })], p.prototype, "timeExtent", null), p = e([a("esri.views.layers.MapImageLayerView")], p), p;
};

export {
  i2 as i
};
//# sourceMappingURL=chunk-N5VCPHCH.js.map
