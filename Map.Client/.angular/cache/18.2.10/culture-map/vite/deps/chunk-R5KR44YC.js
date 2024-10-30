import {
  e as e3
} from "./chunk-HBMA4SRU.js";
import {
  B,
  e2,
  r
} from "./chunk-WYMXVOAT.js";
import {
  n
} from "./chunk-K7TO5IIO.js";
import {
  p
} from "./chunk-6WHTZNUH.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/widgets/NavigationToggle/css.js
var o = "esri-navigation-toggle";
var t = {
  base: o,
  isLayoutHorizontal: `${o}--horizontal`
};

// ../../../node_modules/@arcgis/core/widgets/NavigationToggle/NavigationToggleViewModel.js
var s = class extends S {
  constructor(t2) {
    super(t2), this._navigationMode = "pan", this.view = null;
  }
  initialize() {
    this.addHandles(p(() => this.view?.inputManager, () => this._setNavigationMode()));
  }
  destroy() {
    this.view = null;
  }
  get state() {
    return this.view?.ready && "3d" === this.view?.type ? "ready" : "disabled";
  }
  get navigationMode() {
    return this._navigationMode;
  }
  set navigationMode(t2) {
    this._navigationMode = t2, this._setNavigationMode();
  }
  toggle() {
    "disabled" !== this.state && (this.navigationMode = "pan" !== this.navigationMode ? "pan" : "rotate");
  }
  _setNavigationMode() {
    const t2 = this.view?.inputManager;
    t2 && (t2.primaryDragAction = "pan" === this._navigationMode ? "pan" : "rotate");
  }
};
e([y({
  readOnly: true
})], s.prototype, "state", null), e([y()], s.prototype, "_navigationMode", void 0), e([y()], s.prototype, "view", void 0), s = e([a("esri.widgets.NavigationToggle.NavigationToggleViewModel")], s);
var r2 = s;

// ../../../node_modules/@arcgis/core/widgets/NavigationToggle.js
var c = class extends B {
  constructor(t2, e4) {
    super(t2, e4), this.messages = null, this.viewModel = new r2(), this.toggle = () => this.viewModel.toggle(), this._panButton = null, this._rotateButton = null, this._toggle = () => {
      const t3 = "pan" === this.viewModel?.navigationMode ? this._rotateButton : this._panButton;
      t3?.setFocus(), this.toggle();
    };
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-TT4KT5XH.js")
    });
  }
  get icon() {
    return "move";
  }
  set icon(t2) {
    this._overrideIfSome("icon", t2);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(t2) {
    this._overrideIfSome("label", t2);
  }
  set layout(t2) {
    "horizontal" !== t2 && (t2 = "vertical"), this._set("layout", t2);
  }
  get view() {
    return this.viewModel.view;
  }
  set view(t2) {
    this.viewModel.view = t2;
  }
  render() {
    const t2 = "disabled" === this.viewModel?.state, e4 = "pan" === this.viewModel?.navigationMode, o2 = this.messages.toggle;
    return n("div", {
      class: this.classes(t.base, e3.widget, {
        [t.isLayoutHorizontal]: "horizontal" === this.layout
      })
    }, n("calcite-button", {
      afterCreate: (t3) => {
        this._panButton = t3;
      },
      appearance: e4 ? "outline-fill" : "solid",
      class: e3.widgetButton,
      disabled: t2,
      iconStart: "move",
      kind: "neutral",
      label: o2,
      onclick: this._toggle,
      tabIndex: e4 ? void 0 : -1,
      title: o2
    }), n("calcite-button", {
      afterCreate: (t3) => {
        this._rotateButton = t3;
      },
      appearance: e4 ? "solid" : "outline-fill",
      class: e3.widgetButton,
      disabled: t2,
      iconStart: "rotate",
      kind: "neutral",
      label: o2,
      onclick: this._toggle,
      tabIndex: e4 ? -1 : void 0,
      title: o2
    }));
  }
};
e([y()], c.prototype, "icon", null), e([y()], c.prototype, "label", null), e([y({
  value: "vertical"
})], c.prototype, "layout", null), e([y(), e2("esri/widgets/NavigationToggle/t9n/NavigationToggle")], c.prototype, "messages", void 0), e([y()], c.prototype, "view", null), e([y({
  type: r2
})], c.prototype, "viewModel", void 0), c = e([a("esri.widgets.NavigationToggle")], c);
var g = c;

export {
  g
};
//# sourceMappingURL=chunk-R5KR44YC.js.map
