import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Gt,
  Wt,
  Y,
  Z,
  ai,
  e,
  si,
  ue,
  x,
  ze
} from "./chunk-NB5HU2BF.js";

// ../../../node_modules/@arcgis/core/chunks/Tooltip.js
var p = class extends ze {
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("pointerBaseWidth") || this.isDirty("cornerRadius") || this.isDirty("pointerLength") || this.isDirty("pointerX") || this.isDirty("pointerY") || this.isDirty("width") || this.isDirty("height")) && (this._clear = true);
  }
  _changed() {
    if (super._changed(), this._clear) {
      this.markDirtyBounds();
      let e2 = this.width(), i = this.height();
      if (e2 > 0 && i > 0) {
        let s = this.get("cornerRadius", 8);
        s = ue(s, 0, Math.min(e2 / 2, i / 2));
        let o = this.get("pointerX", 0), l = this.get("pointerY", 0), r = this.get("pointerBaseWidth", 15) / 2, a = 0, n = 0, h = 0, p2 = (o - a) * (i - n) - (l - n) * (e2 - a), u2 = (o - h) * (0 - i) - (l - i) * (e2 - h);
        const d = this._display;
        if (d.moveTo(s, 0), p2 > 0 && u2 > 0) {
          let i2 = Math.round(ue(o, s + r, e2 - r - s));
          l = ue(l, -1 / 0, 0), d.lineTo(i2 - r, 0), d.lineTo(o, l), d.lineTo(i2 + r, 0);
        }
        if (d.lineTo(e2 - s, 0), d.arcTo(e2, 0, e2, s, s), p2 > 0 && u2 < 0) {
          let a2 = Math.round(ue(l, s + r, i - r - s));
          o = ue(o, e2, 1 / 0), d.lineTo(e2, s), d.lineTo(e2, Math.max(a2 - r, s)), d.lineTo(o, l), d.lineTo(e2, a2 + r);
        }
        if (d.lineTo(e2, i - s), d.arcTo(e2, i, e2 - s, i, s), p2 < 0 && u2 < 0) {
          let a2 = Math.round(ue(o, s + r, e2 - r - s));
          l = ue(l, i, 1 / 0), d.lineTo(e2 - s, i), d.lineTo(a2 + r, i), d.lineTo(o, l), d.lineTo(a2 - r, i);
        }
        if (d.lineTo(s, i), d.arcTo(0, i, 0, i - s, s), p2 < 0 && u2 > 0) {
          let e3 = Math.round(ue(l, s + r, i - s - r));
          o = ue(o, -1 / 0, 0), d.lineTo(0, i - s), d.lineTo(0, e3 + r), d.lineTo(o, l), d.lineTo(0, Math.max(e3 - r, s));
        }
        d.lineTo(0, s), d.arcTo(0, 0, s, 0, s), d.closePath();
      }
    }
  }
};
Object.defineProperty(p, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "PointedRectangle"
}), Object.defineProperty(p, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ze.classNames.concat([p.className])
});
var u = class extends si {
  constructor(e2, t, i, s = []) {
    super(e2, t, i, s), Object.defineProperty(this, "_fx", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "_fy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "_label", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_fillDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_strokeDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_labelDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_w", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "_h", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }), Object.defineProperty(this, "_keepHoverDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "_htmlContentHovered", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _afterNew() {
    this._settings.themeTags = Wt(this._settings.themeTags, ["tooltip"]), super._afterNew();
    this._setDefaultFn("background", () => p.new(this._root, {})).set("themeTags", ["tooltip", "background"]), this._label = this.children.push(ai.new(this._root, {})), this._disposers.push(this._label.events.on("boundschanged", () => {
      this._updateBackground();
    })), this._disposers.push(this.on("bounds", () => {
      this._updateBackground();
    })), this._updateTextColor(), this._root.tooltipContainer.children.push(this), this.hide(0), this._disposers.push(this.label.onPrivate("htmlElement", (e2) => {
      e2 && (this._disposers.push(Z(e2, "pointerover", (e3) => {
        this._htmlContentHovered = true;
      })), this._disposers.push(Z(e2, "pointerout", (e3) => {
        this._htmlContentHovered = false;
      })));
    })), this.on("visible", (e2) => {
      this._handleReaderAnnouncement();
    }), this.label.events.on("dataitemchanged", (e2) => {
      this._handleReaderAnnouncement();
    }), this._root._tooltips.push(this);
  }
  _handleReaderAnnouncement() {
    this.get("readerAnnounce") && this.isVisibleDeep() && this._root.readerAlert(this.label.getAccessibleText());
  }
  get label() {
    return this._label;
  }
  dispose() {
    super.dispose(), x(this._root._tooltips, this);
  }
  _updateChildren() {
    super._updateChildren(), (this.isDirty("pointerOrientation") || this.isPrivateDirty("minWidth") || this.isPrivateDirty("minHeight")) && this.get("background")._markDirtyKey("width");
    null != this.get("labelText") && this.label.set("text", this.get("labelText"));
    null != this.get("labelHTML") && this.label.set("html", this.get("labelHTML"));
    null != this.get("labelAriaLabel") && this.label.set("ariaLabel", this.get("labelAriaLabel"));
  }
  _changed() {
    if (super._changed(), (this.isDirty("pointTo") || this.isDirty("pointerOrientation")) && this._updateBackground(), this.isDirty("tooltipTarget") && this.updateBackgroundColor(), this.isDirty("keepTargetHover")) {
      if (this.get("keepTargetHover")) {
        const e2 = this.get("background");
        this._keepHoverDp = new Y([e2.events.on("pointerover", (e3) => {
          let t = this.get("tooltipTarget");
          t && (t.parent && t.parent.getPrivate("tooltipTarget") == t && (t = t.parent), t.hover());
        }), e2.events.on("pointerout", (e3) => {
          let t = this.get("tooltipTarget");
          t && (t.parent && t.parent.getPrivate("tooltipTarget") == t && (t = t.parent), this._htmlContentHovered || t.unhover());
        })]), this.label.onPrivate("htmlElement", (t) => {
          this._keepHoverDp && t && this._keepHoverDp.disposers.push(Z(t, "pointerleave", (t2) => {
            const i = this.root._renderer.getEvent(t2);
            e2.events.dispatch("pointerout", {
              type: "pointerout",
              originalEvent: i.event,
              point: i.point,
              simulated: false,
              target: e2
            });
          }));
        });
      } else this._keepHoverDp && (this._keepHoverDp.dispose(), this._keepHoverDp = void 0);
    }
  }
  _onShow() {
    super._onShow(), this.updateBackgroundColor();
  }
  updateBackgroundColor() {
    let e2 = this.get("tooltipTarget");
    const t = this.get("background");
    let i, s;
    e2 && t && (i = e2.get("fill"), s = e2.get("stroke"), null == i && (i = s), this.get("getFillFromSprite") && (this._fillDp && this._fillDp.dispose(), null != i && t.set("fill", i), this._fillDp = e2.on("fill", (e3) => {
      null != e3 && (t.set("fill", e3), this._updateTextColor(e3));
    }), this._disposers.push(this._fillDp)), this.get("getStrokeFromSprite") && (this._strokeDp && this._strokeDp.dispose(), null != i && t.set("stroke", i), this._strokeDp = e2.on("fill", (e3) => {
      null != e3 && t.set("stroke", e3);
    }), this._disposers.push(this._strokeDp)), this.get("getLabelFillFromSprite") && (this._labelDp && this._labelDp.dispose(), null != i && this.label.set("fill", i), this._labelDp = e2.on("fill", (e3) => {
      null != e3 && this.label.set("fill", e3);
    }), this._disposers.push(this._labelDp))), this._updateTextColor(i);
  }
  _updateTextColor(e2) {
    this.get("autoTextColor") && (null == e2 && (e2 = this.get("background").get("fill")), null == e2 && (e2 = this._root.interfaceColors.get("background")), e2 instanceof Gt && this.label.set("fill", Gt.alternative(e2, this._root.interfaceColors.get("alternativeText"), this._root.interfaceColors.get("text"))));
  }
  _setDataItem(e2) {
    super._setDataItem(e2), this.label._setDataItem(e2);
  }
  _updateBackground() {
    super.updateBackground();
    const e2 = this._root.container;
    if (e2) {
      let i = 0.5, s = 0.5, o = this.get("centerX");
      o instanceof e && (i = o.value);
      let l = this.get("centerY");
      l instanceof e && (s = l.value);
      let r = e2.width(), a = e2.height(), n = this.parent, u2 = 0, d = 0;
      if (n) {
        u2 = n.x(), d = n.y();
        const e3 = n.get("layerMargin");
        e3 && (u2 += e3.left || 0, d += e3.top || 0, r += (e3.left || 0) + (e3.right || 0), a += (e3.top || 0) + (e3.bottom || 0));
      }
      const g = this.get("bounds", {
        left: -u2,
        top: -d,
        right: r - u2,
        bottom: a - d
      });
      this._updateBounds();
      let b = this.width(), c = this.height();
      0 === b && (b = this._w), 0 === c && (c = this._h);
      let _ = this.get("pointTo", {
        x: r / 2,
        y: a / 2
      }), f = _.x, m = _.y, v = this.get("pointerOrientation"), T = this.get("background"), y = 0, D = 0, k = 0;
      T instanceof p && (y = T.get("pointerLength", 0), D = T.get("strokeWidth", 0) / 2, k = D, T.set("width", b), T.set("height", c));
      let w = 0, x2 = 0, P = g.right - g.left, C = g.bottom - g.top;
      "horizontal" == v || "left" == v || "right" == v ? (D = 0, "horizontal" == v ? f > g.left + P / 2 ? (f -= b * (1 - i) + y, k *= -1) : f += b * i + y : "left" == v ? f += b * (1 - i) + y : (f -= b * i + y, k *= -1)) : (k = 0, "vertical" == v ? m > g.top + c / 2 + y ? m -= c * (1 - s) + y : (m += c * s + y, D *= -1) : "down" == v ? m -= c * (1 - s) + y : (m += c * s + y, D *= -1)), f = ue(f, g.left + b * i, g.left + P - b * (1 - i)) + k, m = ue(m, g.top + c * s, g.top + C - c * (1 - s)) - D, w = _.x - f + b * i + k, x2 = _.y - m + c * s - D, this._fx = f, this._fy = m;
      const O = this.get("animationDuration", 0);
      if (O > 0 && this.get("visible") && this.get("opacity") > 0.1) {
        const e3 = this.get("animationEasing");
        this.animate({
          key: "x",
          to: f,
          duration: O,
          easing: e3
        }), this.animate({
          key: "y",
          to: m,
          duration: O,
          easing: e3
        });
      } else this.set("x", f), this.set("y", m);
      T instanceof p && (T.set("pointerX", w), T.set("pointerY", x2)), b > 0 && (this._w = b), c > 0 && (this._h = c);
    }
  }
};
Object.defineProperty(u, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Tooltip"
}), Object.defineProperty(u, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: si.classNames.concat([u.className])
});

export {
  u
};
//# sourceMappingURL=chunk-DD3M7GEU.js.map
