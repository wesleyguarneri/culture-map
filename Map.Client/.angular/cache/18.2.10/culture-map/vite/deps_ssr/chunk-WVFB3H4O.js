import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s
} from "./chunk-ASCK5HJ5.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/support/actions/ActionBase.js
var r;
var c = r = class extends s(S) {
  constructor(t) {
    super(t), this.active = false, this.className = null, this.disabled = false, this.icon = null, this.id = null, this.indicator = false, this.title = null, this.type = null, this.visible = true;
  }
  clone() {
    return new r({
      active: this.active,
      className: this.className,
      disabled: this.disabled,
      icon: this.icon,
      id: this.id,
      indicator: this.indicator,
      title: this.title,
      visible: this.visible
    });
  }
};
e([y()], c.prototype, "active", void 0), e([y()], c.prototype, "className", void 0), e([y()], c.prototype, "disabled", void 0), e([y()], c.prototype, "icon", void 0), e([y()], c.prototype, "id", void 0), e([y()], c.prototype, "indicator", void 0), e([y()], c.prototype, "title", void 0), e([y()], c.prototype, "type", void 0), e([y()], c.prototype, "visible", void 0), c = r = e([a("esri.support.actions.ActionBase")], c);
var p = c;

// ../../../node_modules/@arcgis/core/support/actions/ActionButton.js
var e2;
var r2 = e2 = class extends p {
  constructor(s2) {
    super(s2), this.image = null, this.type = "button";
  }
  clone() {
    return new e2({
      active: this.active,
      className: this.className,
      disabled: this.disabled,
      icon: this.icon,
      id: this.id,
      indicator: this.indicator,
      title: this.title,
      visible: this.visible,
      image: this.image
    });
  }
};
e([y()], r2.prototype, "image", void 0), r2 = e2 = e([a("esri.support.actions.ActionButton")], r2);
var c2 = r2;

// ../../../node_modules/@arcgis/core/support/actions/ActionToggle.js
var e3;
var r3 = e3 = class extends p {
  constructor(s2) {
    super(s2), this.image = null, this.type = "toggle", this.value = false;
  }
  clone() {
    return new e3({
      active: this.active,
      className: this.className,
      disabled: this.disabled,
      icon: this.icon,
      id: this.id,
      indicator: this.indicator,
      title: this.title,
      visible: this.visible,
      image: this.image,
      value: this.value
    });
  }
};
e([y()], r3.prototype, "image", void 0), e([y()], r3.prototype, "value", void 0), r3 = e3 = e([a("esri.support.actions.ActionToggle")], r3);
var a2 = r3;

export {
  p,
  c2 as c,
  a2 as a
};
//# sourceMappingURL=chunk-WVFB3H4O.js.map
