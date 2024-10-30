import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  n
} from "./chunk-6WGE3IUL.js";

// ../../../node_modules/@arcgis/core/widgets/support/GoTo.js
var t = (t2) => {
  let i = class extends t2 {
    constructor(...o) {
      super(...o), this.goToOverride = null, this.view = null;
    }
    callGoTo(o) {
      const {
        view: e2
      } = this;
      return n(e2), this.goToOverride ? this.goToOverride(e2, o) : e2.goTo(o.target, o.options);
    }
  };
  return e([y()], i.prototype, "goToOverride", void 0), e([y()], i.prototype, "view", void 0), i = e([a("esri.widgets.support.GoTo")], i), i;
};

export {
  t
};
//# sourceMappingURL=chunk-JPJAW3N6.js.map
