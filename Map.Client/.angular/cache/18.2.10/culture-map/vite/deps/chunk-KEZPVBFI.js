import {
  n
} from "./chunk-VRZ6RXNW.js";
import {
  A,
  d
} from "./chunk-6WHTZNUH.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/views/interactive/AnalysisToolBase.js
var o = class extends n {
  constructor(s) {
    super(s);
  }
  initialize() {
    this.addHandles(d(() => this.analysisViewData.visible, (s) => this.visible = s, A));
  }
  deactivate() {
    this.onDeactivate(), this.created || this.analysis.clear();
  }
  resetCreated() {
    this._set("created", false);
  }
};
o = e([a("esri.views.interactive.AnalysisToolBase")], o);

export {
  o
};
//# sourceMappingURL=chunk-KEZPVBFI.js.map
