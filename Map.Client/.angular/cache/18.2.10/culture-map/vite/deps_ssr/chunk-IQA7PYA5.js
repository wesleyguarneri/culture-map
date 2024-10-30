import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e4
} from "./chunk-CWUF5YIE.js";
import {
  t
} from "./chunk-JPJAW3N6.js";
import {
  e as e3
} from "./chunk-FYGR4X6I.js";
import {
  B,
  e2,
  r
} from "./chunk-UVQYXHKM.js";
import {
  n as n2
} from "./chunk-M5N6UHWJ.js";
import {
  P,
  d
} from "./chunk-LZSLQ24Q.js";
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
  n
} from "./chunk-PNUA7JOS.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  has
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/widgets/Compass/CompassViewModel.js
var d2 = class extends t(S) {
  constructor(t2) {
    super(t2), this.orientation = {
      x: 0,
      y: 0,
      z: 0
    }, this.view = null, this._updateForCamera = this._updateForCamera.bind(this), this._updateForRotation = this._updateForRotation.bind(this), this._updateRotationWatcher = this._updateRotationWatcher.bind(this);
  }
  initialize() {
    this.addHandles(d(() => this.view, this._updateRotationWatcher, P));
  }
  destroy() {
    this.view = null;
  }
  get canShowNorth() {
    return e4(this.view);
  }
  get state() {
    return !this.view?.ready || "2d" === this.view.type && !this.view.constraints.rotationEnabled ? "disabled" : this.canShowNorth ? "compass" : "rotation";
  }
  reset() {
    this.view?.ready && ("2d" === this.view?.type ? this.callGoTo({
      target: {
        rotation: 0
      },
      options: {
        animationMode: "always",
        duration: n(has("mapview-essential-goto-duration"))
      }
    }) : this.callGoTo({
      target: {
        heading: 0
      }
    }));
  }
  _updateForRotation(t2) {
    null != t2 && this._set("orientation", {
      z: t2
    });
  }
  _updateForCamera(t2) {
    if (!t2) return;
    const o2 = -t2.heading;
    this._set("orientation", {
      x: 0,
      y: 0,
      z: o2
    });
  }
  _updateRotationWatcher(t2) {
    this.removeAllHandles(), t2 && this.addHandles("2d" === t2.type ? d(() => t2?.rotation, this._updateForRotation, P) : d(() => t2?.camera, this._updateForCamera, P));
  }
};
e([y({
  readOnly: true
})], d2.prototype, "canShowNorth", null), e([y({
  readOnly: true
})], d2.prototype, "orientation", void 0), e([y({
  readOnly: true
})], d2.prototype, "state", null), e([y()], d2.prototype, "view", void 0), d2 = e([a("esri.widgets.Compass.CompassViewModel")], d2);
var h = d2;

// ../../../node_modules/@arcgis/core/widgets/Compass/css.js
var n3 = "esri-compass";
var o = {
  base: n3,
  iconContainer: `${n3}__icon-container`
};

// ../../../node_modules/@arcgis/core/widgets/Compass.js
var c = class extends B {
  constructor(e5, t2) {
    super(e5, t2), this.messages = null, this.viewModel = new h(), this._reset = () => {
      this.viewModel.reset();
    }, this._toRotationTransform = (e6) => ({
      transform: `rotateZ(${e6.z}deg)`
    });
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-LAMWLR56.js"),
      icon: () => import("./calcite-icon-42Z6A6ZS.js")
    });
  }
  get goToOverride() {
    return this.viewModel.goToOverride;
  }
  set goToOverride(e5) {
    this.viewModel.goToOverride = e5;
  }
  get icon() {
    return "rotation" === this.viewModel.state ? "arrow-up" : "compass-needle";
  }
  set icon(e5) {
    this._overrideIfSome("icon", e5);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e5) {
    this._overrideIfSome("label", e5);
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e5) {
    this.viewModel.view = e5;
  }
  reset() {
    return this.viewModel.reset();
  }
  render() {
    const {
      orientation: e5,
      state: t2
    } = this.viewModel, {
      messages: s
    } = this;
    return n2("div", {
      class: this.classes(o.base, e3.widget)
    }, n2("calcite-button", {
      class: e3.widgetButton,
      disabled: "disabled" === t2,
      kind: "neutral",
      label: s.reset,
      onclick: this._reset,
      round: true,
      scale: "s",
      title: s.reset
    }, n2("div", {
      "aria-hidden": "true",
      class: o.iconContainer,
      title: s.reset
    }, n2("calcite-icon", {
      icon: this.icon,
      styles: this._toRotationTransform(e5)
    }))));
  }
};
e([y()], c.prototype, "goToOverride", null), e([y()], c.prototype, "icon", null), e([y()], c.prototype, "label", null), e([y(), e2("esri/widgets/Compass/t9n/Compass")], c.prototype, "messages", void 0), e([y()], c.prototype, "view", null), e([y({
  type: h
})], c.prototype, "viewModel", void 0), c = e([a("esri.widgets.Compass")], c);
var d3 = c;

export {
  d3 as d
};
//# sourceMappingURL=chunk-IQA7PYA5.js.map
