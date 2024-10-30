import {
  i
} from "./chunk-EOYCWFZW.js";
import {
  y as y2
} from "./chunk-AYHKFOHI.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

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
//# sourceMappingURL=chunk-UTNY3H5Y.js.map
