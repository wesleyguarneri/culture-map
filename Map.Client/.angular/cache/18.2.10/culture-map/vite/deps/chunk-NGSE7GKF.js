import {
  M,
  U,
  h
} from "./chunk-HUMP672Y.js";
import {
  r
} from "./chunk-ZYQL5F6K.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/infos/MovePointTooltipInfo.js
var i = class extends h(r) {
  constructor(o) {
    super(o), this.type = "move-point", this.allFields.forEach((o2) => {
      o2.lockable = false, o2.setActual(null);
    });
  }
  get allFields() {
    return [this.longitude, this.latitude, this.x, this.y, this.elevation];
  }
};
e([y()], i.prototype, "allFields", null), i = e([a("esri.views.interactive.tooltip.infos.MovePointTooltipInfo")], i);

// ../../../node_modules/@arcgis/core/views/interactive/tooltip/infos/SelectedVertexTooltipInfo.js
var p = class extends h(r) {
  constructor(t) {
    super(t), this.type = "selected-vertex", this.area = M(), this.totalLength = U(), this.geometryType = "polyline", this.allFields.forEach((t2) => {
      t2.lockable = false, t2.setActual(null);
    });
  }
  get allFields() {
    return [this.longitude, this.latitude, this.x, this.y, this.elevation, "polygon" === this.geometryType ? this.area : this.totalLength];
  }
};
e([y()], p.prototype, "geometryType", void 0), e([y()], p.prototype, "allFields", null), p = e([a("esri.views.interactive.tooltip.infos.SelectedVertexTooltipInfo")], p);

export {
  i,
  p
};
//# sourceMappingURL=chunk-NGSE7GKF.js.map
