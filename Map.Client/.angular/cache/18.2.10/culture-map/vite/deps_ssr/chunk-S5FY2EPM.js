import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  V
} from "./chunk-LM3JDV4W.js";
import {
  d,
  p
} from "./chunk-LZSLQ24Q.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/widgets/support/AnchorElementViewModel.js
var c = class extends o.EventedAccessor {
  constructor(e2) {
    super(e2), this.location = null, this.screenLocationEnabled = false, this.view = null, this.addHandles([p(() => {
      const e3 = this.screenLocationEnabled ? this.view : null;
      return e3 ? [e3.size, "3d" === e3.type ? e3.camera : e3.viewpoint] : null;
    }, () => this.notifyChange("screenLocation")), d(() => this.screenLocation, (e3, o2) => {
      null != e3 && null != o2 && this.emit("view-change");
    })]);
  }
  destroy() {
    this.view = null;
  }
  get screenLocation() {
    const {
      location: e2,
      view: o2,
      screenLocationEnabled: t
    } = this, r = o2?.spatialReference, s = r ? V(e2, r).geometry : null;
    return t && s && o2?.ready ? o2.toScreen(s) : null;
  }
};
e([y()], c.prototype, "location", void 0), e([y()], c.prototype, "screenLocation", null), e([y()], c.prototype, "screenLocationEnabled", void 0), e([y()], c.prototype, "view", void 0), c = e([a("esri.widgets.support.AnchorElementViewModel")], c);
var l = c;

export {
  l
};
//# sourceMappingURL=chunk-S5FY2EPM.js.map
