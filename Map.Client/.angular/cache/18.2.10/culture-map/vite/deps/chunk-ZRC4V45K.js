import {
  n
} from "./chunk-EDSMXTFO.js";
import {
  e as e2
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  e
} from "./chunk-7DA6A5LD.js";

// ../../../node_modules/@arcgis/core/views/3d/analysis/AnalysisView3D.js
var s = (s2) => {
  let n2 = class extends n(s2) {
    constructor() {
      super(...arguments), this.parent = null, this._userInteractive = false, this._interactiveViewModelCount = 0;
    }
    get interactive() {
      return this._interactiveViewModelCount > 0 || this._userInteractive;
    }
    set interactive(e3) {
      this._userInteractive = e3;
    }
    get updating() {
      return false;
    }
    get visible() {
      return null == this.parent || this.parent.visible && !this.parent.suspended;
    }
    set visible(e3) {
      this._overrideIfSome("visible", e3);
    }
    forceInteractiveForViewModel() {
      return this._interactiveViewModelCount++, e(() => this._interactiveViewModelCount--);
    }
  };
  return e2([y({
    constructOnly: true
  })], n2.prototype, "parent", void 0), e2([y({
    constructOnly: true
  })], n2.prototype, "view", void 0), e2([y({
    type: Boolean
  })], n2.prototype, "interactive", null), e2([y()], n2.prototype, "_userInteractive", void 0), e2([y({
    readOnly: true
  })], n2.prototype, "updating", null), e2([y()], n2.prototype, "visible", null), e2([y()], n2.prototype, "_interactiveViewModelCount", void 0), n2 = e2([a("esri.views.3d.analysis.AnalysisView3D")], n2), n2;
};

export {
  s
};
//# sourceMappingURL=chunk-ZRC4V45K.js.map