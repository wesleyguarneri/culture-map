import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Ge,
  Wt,
  ct,
  g,
  si,
  ue
} from "./chunk-NB5HU2BF.js";

// ../../../node_modules/@arcgis/core/chunks/Button.js
var n = class extends Ge {
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("cornerRadiusTL") || this.isDirty("cornerRadiusTR") || this.isDirty("cornerRadiusBR") || this.isDirty("cornerRadiusBL")) && (this._clear = true);
  }
  _draw() {
    let e = this.width(), a = this.height(), r = e, n2 = a, o2 = r / Math.abs(e), h = n2 / Math.abs(a);
    if (g(r) && g(n2)) {
      let e2 = Math.min(r, n2) / 2, s = ct(this.get("cornerRadiusTL", 8), e2), a2 = ct(this.get("cornerRadiusTR", 8), e2), l = ct(this.get("cornerRadiusBR", 8), e2), c = ct(this.get("cornerRadiusBL", 8), e2), d = Math.min(Math.abs(r / 2), Math.abs(n2 / 2));
      s = ue(s, 0, d), a2 = ue(a2, 0, d), l = ue(l, 0, d), c = ue(c, 0, d);
      const u = this._display;
      u.moveTo(s * o2, 0), u.lineTo(r - a2 * o2, 0), a2 > 0 && u.arcTo(r, 0, r, a2 * h, a2), u.lineTo(r, n2 - l * h), l > 0 && u.arcTo(r, n2, r - l * o2, n2, l), u.lineTo(c * o2, n2), c > 0 && u.arcTo(0, n2, 0, n2 - c * h, c), u.lineTo(0, s * h), s > 0 && u.arcTo(0, 0, s * o2, 0, s), u.closePath();
    }
  }
};
Object.defineProperty(n, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RoundedRectangle"
}), Object.defineProperty(n, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Ge.classNames.concat([n.className])
});
var o = class extends si {
  _afterNew() {
    this._settings.themeTags = Wt(this._settings.themeTags, ["button"]), super._afterNew(), this._settings.background || this.set("background", n.new(this._root, {
      themeTags: Wt(this._settings.themeTags, ["background"])
    })), this.setPrivate("trustBounds", true);
  }
  _prepareChildren() {
    if (super._prepareChildren(), this.isDirty("icon")) {
      const e = this._prevSettings.icon, s = this.get("icon");
      s !== e && (this._disposeProperty("icon"), e && e.dispose(), s && this.children.push(s), this._prevSettings.icon = s);
    }
    if (this.isDirty("label")) {
      const e = this._prevSettings.label, s = this.get("label");
      s !== e && (this._disposeProperty("label"), e && e.dispose(), s && this.children.push(s), this._prevSettings.label = s);
    }
  }
};
Object.defineProperty(o, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Button"
}), Object.defineProperty(o, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: si.classNames.concat([o.className])
});

export {
  n,
  o
};
//# sourceMappingURL=chunk-VRCE6HSK.js.map
