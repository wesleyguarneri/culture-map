import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n
} from "./chunk-J5J3QXIV.js";
import {
  A,
  d
} from "./chunk-LZSLQ24Q.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

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
//# sourceMappingURL=chunk-2FVMT5KX.js.map
