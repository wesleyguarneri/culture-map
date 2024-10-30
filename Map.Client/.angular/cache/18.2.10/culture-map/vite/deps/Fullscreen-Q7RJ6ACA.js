import {
  e as e3
} from "./chunk-HBMA4SRU.js";
import {
  B,
  e2,
  r
} from "./chunk-WYMXVOAT.js";
import {
  n as n2
} from "./chunk-K7TO5IIO.js";
import "./chunk-A4VVDRCH.js";
import "./chunk-CQDYITZC.js";
import "./chunk-5I6J67HP.js";
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import "./chunk-6WHTZNUH.js";
import "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import "./chunk-YPWMP2VK.js";
import "./chunk-23E6RT3O.js";
import "./chunk-RCBGISRX.js";
import "./chunk-2P72IR2Y.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/Fullscreen/FullscreenViewModel.js
var o = class extends S {
  constructor(e4) {
    super(e4), this._vendorInfo = null, this._fullscreenStyle = "width: 100%; height: 100%;", this.view = null, this._errorHandler = this._errorHandler.bind(this), this._stateHandler = this._stateHandler.bind(this);
  }
  destroy() {
    this._removeFullscreenListeners(), this.view = null;
  }
  get element() {
    return this.view?.container ?? null;
  }
  set element(e4) {
    this._override("element", e4);
  }
  get state() {
    return this.element ? this._isSupported() ? this._isActive() ? "active" : "ready" : "feature-unsupported" : "disabled";
  }
  enter() {
    this._enterFullscreen();
  }
  exit() {
    this._exitFullscreen();
  }
  toggle() {
    this._isActive() ? this._exitFullscreen() : this._enterFullscreen();
  }
  _isSupported() {
    this._removeFullscreenListeners();
    const e4 = this._getVendorInfo(this.element);
    return this._addFullscreenListeners(e4), this._vendorInfo = e4, !!e4;
  }
  _isActive() {
    return !!this._vendorInfo && !!document[this._vendorInfo.propertyName];
  }
  _stateHandler() {
    this.notifyChange("state"), "active" === this.state ? this._addStyle() : this._removeStyle();
  }
  _errorHandler(e4) {
    n.getLogger(this).error("fullscreen request failed", e4);
  }
  _getVendorInfo(e4) {
    if (e4) return e4.requestFullscreen ? {
      enterName: "requestFullscreen",
      exitName: "exitFullscreen",
      errorEventName: "fullscreenerror",
      changeEventName: "fullscreenchange",
      propertyName: "fullscreen"
    } : e4.webkitRequestFullScreen ? {
      enterName: "webkitRequestFullscreen",
      exitName: "webkitCancelFullScreen",
      errorEventName: "webkitfullscreenerror",
      changeEventName: "webkitfullscreenchange",
      propertyName: "webkitIsFullScreen"
    } : e4.mozRequestFullScreen ? {
      enterName: "mozRequestFullScreen",
      exitName: "mozCancelFullScreen",
      errorEventName: "mozfullscreenerror",
      changeEventName: "mozfullscreenchange",
      propertyName: "mozFullScreen"
    } : void 0;
  }
  _enterFullscreen() {
    if ("feature-unsupported" === this.state) return void n.getLogger(this).warn("The fullscreen API is not supported in this browser.");
    const {
      element: e4
    } = this;
    e4 && (this._vendorInfo && e4[this._vendorInfo.enterName].call(e4), this.notifyChange("state"));
  }
  _addStyle() {
    const {
      element: e4
    } = this;
    e4 && e4.setAttribute("style", this._fullscreenStyle);
  }
  _removeStyle() {
    const {
      element: e4
    } = this;
    e4 && e4.removeAttribute("style");
  }
  _exitFullscreen() {
    if ("feature-unsupported" === this.state) return;
    const {
      element: e4
    } = this;
    e4 && (this._vendorInfo && document[this._vendorInfo.exitName].call(document), this.notifyChange("state"));
  }
  _addFullscreenListeners(e4) {
    e4 && (document.addEventListener(e4.changeEventName, this._stateHandler), document.addEventListener(e4.errorEventName, this._errorHandler));
  }
  _removeFullscreenListeners() {
    const {
      _vendorInfo: e4
    } = this;
    e4 && (document.removeEventListener(e4.changeEventName, this._stateHandler), document.removeEventListener(e4.errorEventName, this._errorHandler));
  }
};
e([y()], o.prototype, "element", null), e([y({
  readOnly: true
})], o.prototype, "state", null), e([y()], o.prototype, "view", void 0), e([y()], o.prototype, "enter", null), e([y()], o.prototype, "exit", null), e([y()], o.prototype, "toggle", null), o = e([a("esri.widgets.Fullscreen.FullscreenViewModel")], o);
var l = o;

// ../../../node_modules/@arcgis/core/widgets/Fullscreen.js
var c = {
  base: "esri-fullscreen"
};
var a2 = class extends B {
  constructor(e4, t) {
    super(e4, t), this.messages = null, this.viewModel = new l(), this._toggle = () => {
      this.viewModel.toggle();
    };
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-TT4KT5XH.js")
    });
  }
  get element() {
    return this.viewModel.element;
  }
  set element(e4) {
    this.viewModel.element = e4;
  }
  get fullscreenTitle() {
    const e4 = this.viewModel?.state;
    return "active" === e4 ? this.messages.exit : "ready" === e4 ? this.messages.enter : "";
  }
  get icon() {
    const e4 = this.viewModel?.state;
    return "ready" === e4 || "disabled" === e4 || "feature-unsupported" === e4 ? "zoom-out-fixed" : "zoom-in-fixed";
  }
  set icon(e4) {
    this._overrideIfSome("icon", e4);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e4) {
    this._overrideIfSome("label", e4);
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e4) {
    this.viewModel.view = e4;
  }
  render() {
    const {
      fullscreenTitle: e4,
      icon: t
    } = this, s = this.viewModel?.state, o2 = "feature-unsupported" === s;
    return n2("div", {
      class: this.classes(c.base, e3.widget)
    }, !o2 && n2("calcite-button", {
      class: e3.widgetButton,
      disabled: "disabled" === s,
      iconStart: t,
      kind: "neutral",
      label: e4,
      onclick: this._toggle,
      title: e4
    }));
  }
};
e([y()], a2.prototype, "element", null), e([y({
  readOnly: true
})], a2.prototype, "fullscreenTitle", null), e([y()], a2.prototype, "icon", null), e([y()], a2.prototype, "label", null), e([y(), e2("esri/widgets/Fullscreen/t9n/Fullscreen")], a2.prototype, "messages", void 0), e([y()], a2.prototype, "view", null), e([y({
  type: l
})], a2.prototype, "viewModel", void 0), a2 = e([a("esri.widgets.Fullscreen")], a2);
var d = a2;
export {
  d as default
};
//# sourceMappingURL=Fullscreen-Q7RJ6ACA.js.map
