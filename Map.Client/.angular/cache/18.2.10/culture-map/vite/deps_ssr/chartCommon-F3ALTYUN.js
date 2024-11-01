import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  l,
  o
} from "./chunk-NXKBE36M.js";
import {
  u
} from "./chunk-DD3M7GEU.js";
import {
  n,
  o as o2
} from "./chunk-VRCE6HSK.js";
import {
  s
} from "./chunk-2CPUE6KF.js";
import {
  Wt,
  g,
  ht,
  ni,
  si,
  ze,
  zt
} from "./chunk-NB5HU2BF.js";
import "./chunk-NUICEVIH.js";
import "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/Feature/FeatureMedia/chartCommon.js
var u2 = class extends si {
  constructor() {
    super(...arguments), Object.defineProperty(this, "thumb", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._makeThumb()
    }), Object.defineProperty(this, "startGrip", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._makeButton()
    }), Object.defineProperty(this, "endGrip", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._makeButton()
    }), Object.defineProperty(this, "_thumbBusy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "_startDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "_endDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "_thumbDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    }), Object.defineProperty(this, "_gripDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _addOrientationClass() {
    this._settings.themeTags = Wt(this._settings.themeTags, ["scrollbar", this._settings.orientation]), this._settings.background || (this._settings.background = n.new(this._root, {
      themeTags: Wt(this._settings.themeTags, ["main", "background"])
    }));
  }
  _makeButton() {
    return this.children.push(o2.new(this._root, {
      themeTags: ["resize", "button", this.get("orientation")],
      icon: ze.new(this._root, {
        themeTags: ["icon"]
      })
    }));
  }
  _makeThumb() {
    return this.children.push(n.new(this._root, {
      themeTags: ["thumb", this.get("orientation")]
    }));
  }
  _handleAnimation(t) {
    t && this._disposers.push(t.events.on("stopped", () => {
      this.setPrivateRaw("isBusy", false), this._thumbBusy = false;
    }));
  }
  _afterNew() {
    this._addOrientationClass(), super._afterNew();
    const t = this.startGrip, s2 = this.endGrip, e = this.thumb, a = this.get("background");
    a && this._disposers.push(a.events.on("click", (t2) => {
      this.setPrivateRaw("isBusy", true);
      const s3 = this._display.toLocal(t2.point), i = this.width(), a2 = this.height(), h = this.get("orientation");
      let r, n2, o3;
      r = "vertical" == h ? (s3.y - e.height() / 2) / a2 : (s3.x - e.width() / 2) / i, "vertical" == h ? (n2 = r * a2, o3 = "y") : (n2 = r * i, o3 = "x");
      const u3 = this.get("animationDuration", 0);
      u3 > 0 ? (this._thumbBusy = true, this._handleAnimation(this.thumb.animate({
        key: o3,
        to: n2,
        duration: u3,
        easing: this.get("animationEasing")
      }))) : (this.thumb.set(o3, n2), this._root.events.once("frameended", () => {
        this.setPrivateRaw("isBusy", false);
      }));
    })), this._disposers.push(e.events.on("dblclick", (t2) => {
      if (!ht(t2.originalEvent, this)) return;
      const s3 = this.get("animationDuration", 0), e2 = this.get("animationEasing");
      this.animate({
        key: "start",
        to: 0,
        duration: s3,
        easing: e2
      }), this.animate({
        key: "end",
        to: 1,
        duration: s3,
        easing: e2
      });
    })), this._disposers.push(t.events.on("pointerdown", () => {
      this.setPrivateRaw("isBusy", true), this._startDown = true, this._gripDown = "start";
    })), this._disposers.push(s2.events.on("pointerdown", () => {
      this.setPrivateRaw("isBusy", true), this._endDown = true, this._gripDown = "end";
    })), this._disposers.push(e.events.on("pointerdown", () => {
      this.setPrivateRaw("isBusy", true), this._thumbDown = true, this._gripDown = void 0;
    })), this._disposers.push(t.events.on("globalpointerup", () => {
      this._startDown && (this.setPrivateRaw("isBusy", false), this._released()), this._startDown = false;
    })), this._disposers.push(s2.events.on("globalpointerup", () => {
      this._endDown && (this.setPrivateRaw("isBusy", false), this._released()), this._endDown = false;
    })), this._disposers.push(e.events.on("globalpointerup", () => {
      this._thumbDown && (this.setPrivateRaw("isBusy", false), this._released()), this._thumbDown = false;
    })), this._disposers.push(t.on("x", () => {
      this._updateThumb();
    })), this._disposers.push(s2.on("x", () => {
      this._updateThumb();
    })), this._disposers.push(t.on("y", () => {
      this._updateThumb();
    })), this._disposers.push(s2.on("y", () => {
      this._updateThumb();
    })), this._disposers.push(e.events.on("positionchanged", () => {
      this._updateGripsByThumb();
    })), "vertical" == this.get("orientation") ? (t.set("x", 0), s2.set("x", 0), this._disposers.push(e.adapters.add("y", (t2) => Math.max(Math.min(Number(t2), this.height() - e.height()), 0))), this._disposers.push(e.adapters.add("x", (t2) => this.width() / 2)), this._disposers.push(t.adapters.add("x", (t2) => this.width() / 2)), this._disposers.push(s2.adapters.add("x", (t2) => this.width() / 2)), this._disposers.push(t.adapters.add("y", (t2) => Math.max(Math.min(Number(t2), this.height()), 0))), this._disposers.push(s2.adapters.add("y", (t2) => Math.max(Math.min(Number(t2), this.height()), 0)))) : (t.set("y", 0), s2.set("y", 0), this._disposers.push(e.adapters.add("x", (t2) => Math.max(Math.min(Number(t2), this.width() - e.width()), 0))), this._disposers.push(e.adapters.add("y", (t2) => this.height() / 2)), this._disposers.push(t.adapters.add("y", (t2) => this.height() / 2)), this._disposers.push(s2.adapters.add("y", (t2) => this.height() / 2)), this._disposers.push(t.adapters.add("x", (t2) => Math.max(Math.min(Number(t2), this.width()), 0))), this._disposers.push(s2.adapters.add("x", (t2) => Math.max(Math.min(Number(t2), this.width()), 0))));
  }
  _updateChildren() {
    super._updateChildren(), (this.isDirty("end") || this.isDirty("start") || this._sizeDirty) && this.updateGrips();
  }
  _changed() {
    if (super._changed(), this.isDirty("start") || this.isDirty("end")) {
      const t = "rangechanged";
      this.events.isEnabled(t) && this.events.dispatch(t, {
        type: t,
        target: this,
        start: this.get("start", 0),
        end: this.get("end", 1),
        grip: this._gripDown
      });
    }
  }
  _released() {
    const t = "released";
    this.events.isEnabled(t) && this.events.dispatch(t, {
      type: t,
      target: this
    });
  }
  updateGrips() {
    const t = this.startGrip, s2 = this.endGrip, e = this.get("orientation"), i = this.height(), a = this.width();
    "vertical" == e ? (t.set("y", i * this.get("start", 0)), s2.set("y", i * this.get("end", 1))) : (t.set("x", a * this.get("start", 0)), s2.set("x", a * this.get("end", 1)));
    const h = this.getPrivate("positionTextFunction"), r = Math.round(100 * this.get("start", 0)), n2 = Math.round(100 * this.get("end", 0));
    let o3, u3;
    h ? (o3 = h.call(this, this.get("start", 0)), u3 = h.call(this, this.get("end", 0))) : (o3 = r + "%", u3 = n2 + "%"), t.set("ariaLabel", this._t("From %1", void 0, o3)), t.set("ariaValueNow", "" + r), t.set("ariaValueText", r + "%"), t.set("ariaValueMin", "0"), t.set("ariaValueMax", "100"), s2.set("ariaLabel", this._t("To %1", void 0, u3)), s2.set("ariaValueNow", "" + n2), s2.set("ariaValueText", n2 + "%"), s2.set("ariaValueMin", "0"), s2.set("ariaValueMax", "100");
  }
  _updateThumb() {
    const t = this.thumb, s2 = this.startGrip, e = this.endGrip, i = this.height(), h = this.width();
    let r = s2.x(), n2 = e.x(), o3 = s2.y(), u3 = e.y(), d2 = 0, p2 = 1;
    "vertical" == this.get("orientation") ? g(o3) && g(u3) && (this._thumbBusy || t.isDragging() || (t.set("height", u3 - o3), t.set("y", o3)), d2 = o3 / i, p2 = u3 / i) : g(r) && g(n2) && (this._thumbBusy || t.isDragging() || (t.set("width", n2 - r), t.set("x", r)), d2 = r / h, p2 = n2 / h), !this.getPrivate("isBusy") || this.get("start") == d2 && this.get("end") == p2 || (this.set("start", d2), this.set("end", p2));
    const l2 = this.getPrivate("positionTextFunction"), m = Math.round(100 * this.get("start", 0)), g2 = Math.round(100 * this.get("end", 0));
    let b, c;
    l2 ? (b = l2.call(this, this.get("start", 0)), c = l2.call(this, this.get("end", 0))) : (b = m + "%", c = g2 + "%"), t.set("ariaLabel", this._t("From %1 to %2", void 0, b, c)), t.set("ariaValueNow", "" + m), t.set("ariaValueText", m + "%");
  }
  _updateGripsByThumb() {
    const t = this.thumb, s2 = this.startGrip, e = this.endGrip;
    if ("vertical" == this.get("orientation")) {
      const i = t.height();
      s2.set("y", t.y()), e.set("y", t.y() + i);
    } else {
      const i = t.width();
      s2.set("x", t.x()), e.set("x", t.x() + i);
    }
  }
};
Object.defineProperty(u2, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Scrollbar"
}), Object.defineProperty(u2, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: si.classNames.concat([u2.className])
});
var d = class extends ni {
  setupDefaultRules() {
    super.setupDefaultRules(), this.rule("Component").setAll({
      interpolationDuration: 600
    }), this.rule("Hierarchy").set("animationDuration", 600), this.rule("Scrollbar").set("animationDuration", 600), this.rule("Tooltip").set("animationDuration", 300), this.rule("MapChart").set("animationDuration", 1e3), this.rule("MapChart").set("wheelDuration", 300), this.rule("Entity").setAll({
      stateAnimationDuration: 600
    }), this.rule("Sprite").states.create("default", {
      stateAnimationDuration: 600
    }), this.rule("Tooltip", ["axis"]).setAll({
      animationDuration: 200
    }), this.rule("WordCloud").set("animationDuration", 500), this.rule("Polygon").set("animationDuration", 600), this.rule("ArcDiagram").set("animationDuration", 600);
  }
};
var p = ["#2888B8", "#EB7028", "#48A375", "#9370B1", "#e55035", "#3d9ccc", "#DC7B04", "#b87bb0", "#3fa681", "#EE6386"].map((t) => zt(t));
export {
  d as AnimatedThemeAm5,
  s as ColorSetAm5,
  l as DarkThemeAm5,
  o as ResponsiveThemeAm5,
  u2 as ScrollbarAm5,
  ni as ThemeAm5,
  u as TooltipAm5,
  zt as colorAm5,
  p as esriChartColorSet
};
//# sourceMappingURL=chartCommon-F3ALTYUN.js.map
