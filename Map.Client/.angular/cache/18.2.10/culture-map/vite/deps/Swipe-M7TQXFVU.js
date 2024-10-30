import {
  p2 as p
} from "./chunk-ONOVFOVG.js";
import {
  i
} from "./chunk-ONOHIFCT.js";
import {
  e as e3
} from "./chunk-HBMA4SRU.js";
import {
  B,
  e2
} from "./chunk-WYMXVOAT.js";
import {
  n
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
import {
  P,
  d,
  v
} from "./chunk-6WHTZNUH.js";
import {
  V
} from "./chunk-EITGQLII.js";
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
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/Swipe/SwipeViewModel.js
function p2(i2, t) {
  const e4 = 10 ** t;
  return Math.round(i2 * e4) / e4;
}
var c = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
var h = class extends S {
  constructor(i2) {
    super(i2), this._leadingClips = /* @__PURE__ */ new Map(), this._trailingClips = /* @__PURE__ */ new Map(), this.direction = "horizontal", this.leadingLayers = new V(), this.max = 100, this.min = 0, this.precision = 4, this.step = 0.5, this.stepMultiplier = 10, this.trailingLayers = new V(), this.view = null;
  }
  initialize() {
    this.addHandles([d(() => [this.view, this.view?.ready, this.position, this.direction], () => this._clipLayers(), P), v(() => this.leadingLayers, "change", () => this._clipLeadingLayers()), v(() => this.trailingLayers, "change", () => this._clipTrailingLayers())]);
  }
  destroy() {
    this._removeExistingClips();
  }
  get position() {
    return 25;
  }
  set position(i2) {
    const {
      precision: t,
      min: e4,
      max: s
    } = this;
    this._set("position", p2(Math.max(Math.min(i2, s), e4), t));
  }
  get state() {
    return this.view?.ready ? "ready" : "disabled";
  }
  _clipLayers() {
    this._clipLeadingLayers(), this._clipTrailingLayers();
  }
  _clipLeadingLayers() {
    this._removeClips("leading");
    const {
      leadingLayers: i2
    } = this;
    i2.forEach((i3) => this._clipLayer({
      layer: i3,
      type: "leading"
    }));
  }
  _clipTrailingLayers() {
    this._removeClips("trailing");
    const {
      trailingLayers: i2
    } = this;
    i2.forEach((i3) => this._clipLayer({
      layer: i3,
      type: "trailing"
    }));
  }
  _getLayerView(i2) {
    return __async(this, null, function* () {
      const {
        view: t
      } = this;
      if (!i2 || !t) return null;
      const e4 = yield t.whenLayerView(i2);
      return "clips" in e4 ? e4 : null;
    });
  }
  _getVerticalClipRect(i2) {
    const {
      position: t
    } = this;
    return "leading" === i2 ? new p(__spreadProps(__spreadValues({}, c), {
      bottom: 100 - t + "%"
    })) : "trailing" === i2 ? new p(__spreadProps(__spreadValues({}, c), {
      top: `${t}%`
    })) : null;
  }
  _getHorizontalClipRect(i2) {
    const {
      position: t
    } = this;
    return "leading" === i2 ? new p(__spreadProps(__spreadValues({}, c), {
      right: 100 - t + "%"
    })) : "trailing" === i2 ? new p(__spreadProps(__spreadValues({}, c), {
      left: `${t}%`
    })) : null;
  }
  _getClipRect(i2) {
    const {
      direction: t
    } = this;
    return "vertical" === t ? this._getVerticalClipRect(i2) : "horizontal" === t ? this._getHorizontalClipRect(i2) : null;
  }
  _clipLayer(i2) {
    return __async(this, null, function* () {
      const {
        _leadingClips: t,
        _trailingClips: e4
      } = this, {
        layer: s,
        type: r
      } = i2, o = "trailing" === r ? e4 : "leading" === r ? t : null, l = yield this._getLayerView(s);
      if (!(l && "clips" in l && o && l.hasOwnProperty("clips"))) return;
      const n2 = o.get(l);
      n2 && l.clips.remove(n2);
      const a2 = this._getClipRect(r);
      a2 && (o.set(l, a2), l.clips.add(a2));
    });
  }
  _removeClips(i2) {
    const {
      _leadingClips: t,
      _trailingClips: e4
    } = this, s = "trailing" === i2 ? e4 : "leading" === i2 ? t : null;
    s && (s.forEach((i3, t2) => {
      t2 && t2.hasOwnProperty("clips") && t2.clips.remove(i3);
    }), s.clear());
  }
  _removeExistingClips() {
    this._removeClips("leading"), this._removeClips("trailing");
  }
};
e([y()], h.prototype, "direction", void 0), e([y({
  type: V,
  nonNullable: true
})], h.prototype, "leadingLayers", void 0), e([y({
  readOnly: true
})], h.prototype, "max", void 0), e([y({
  readOnly: true
})], h.prototype, "min", void 0), e([y()], h.prototype, "position", null), e([y()], h.prototype, "precision", void 0), e([y({
  readOnly: true
})], h.prototype, "state", null), e([y()], h.prototype, "step", void 0), e([y()], h.prototype, "stepMultiplier", void 0), e([y({
  type: V,
  nonNullable: true
})], h.prototype, "trailingLayers", void 0), e([y()], h.prototype, "view", void 0), h = e([a("esri.widgets.Swipe.SwipeViewModel")], h);
var g = h;

// ../../../node_modules/@arcgis/core/widgets/Swipe.js
var d2 = "esri-swipe";
var p3 = {
  base: d2,
  baseDisabled: `${d2}--disabled`,
  vertical: `${d2}--vertical`,
  horizontal: `${d2}--horizontal`,
  container: `${d2}__container`,
  divider: `${d2}__divider`,
  handle: `${d2}__handle`,
  handleHidden: `${d2}__handle--hidden`,
  handleIcon: `${d2}__handle-icon`
};
var c2 = {
  handle: true,
  divider: true
};
var h2 = class extends B {
  constructor(e4, t) {
    super(e4, t), this.disabled = false, this.messages = null, this.viewModel = new g(), this._pointerOffset = 0, this._container = null, this._onContainerPointerDown = this._onContainerPointerDown.bind(this), this._onContainerPointerMove = this._onContainerPointerMove.bind(this), this._onContainerPointerUp = this._onContainerPointerUp.bind(this);
  }
  get direction() {
    return this.viewModel.direction;
  }
  set direction(e4) {
    this.viewModel.direction = e4;
  }
  get dragLabel() {
    return this.messages?.dragLabel ?? "";
  }
  set dragLabel(e4) {
    this._overrideIfSome("dragLabel", e4);
  }
  get icon() {
    return "compare";
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
  get leadingLayers() {
    return this.viewModel.leadingLayers;
  }
  set leadingLayers(e4) {
    this.viewModel.leadingLayers = e4;
  }
  get position() {
    return this.viewModel.position;
  }
  set position(e4) {
    this.viewModel.position = e4;
  }
  get trailingLayers() {
    return this.viewModel.trailingLayers;
  }
  set trailingLayers(e4) {
    this.viewModel.trailingLayers = e4;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e4) {
    this.viewModel.view = e4;
  }
  set visibleElements(e4) {
    this._set("visibleElements", __spreadValues(__spreadValues({}, c2), e4));
  }
  get visibleElements() {
    return this._get("visibleElements") || c2;
  }
  render() {
    const {
      state: e4,
      direction: t
    } = this.viewModel, i2 = "disabled" === e4 || this.disabled, n2 = {
      [e3.disabled]: i2,
      [p3.baseDisabled]: i2,
      [p3.vertical]: "vertical" === t,
      [p3.horizontal]: "horizontal" === t
    };
    return n("div", {
      class: this.classes(p3.base, e3.widget, n2)
    }, "disabled" === e4 ? null : this._renderContainer());
  }
  _renderHandle() {
    const {
      direction: e4
    } = this.viewModel, {
      visibleElements: t
    } = this, i2 = {
      [i.dragHorizontal]: "vertical" === e4,
      [i.dragVertical]: "horizontal" === e4
    }, n2 = this.classes(p3.handle, !t.handle && p3.handleHidden);
    return n("div", {
      class: n2,
      key: "handle",
      role: "presentation"
    }, n("span", {
      "aria-hidden": "true",
      class: this.classes(p3.handleIcon, i2)
    }));
  }
  _renderDivider() {
    const {
      visibleElements: e4
    } = this;
    return e4 && e4.divider ? n("div", {
      class: p3.divider,
      key: "divider",
      role: "presentation"
    }) : null;
  }
  _renderContent() {
    return [this._renderDivider(), this._renderHandle()];
  }
  _renderContainer() {
    const {
      disabled: e4,
      dragLabel: t,
      viewModel: i2
    } = this, {
      max: n2,
      min: r,
      direction: o,
      position: s
    } = i2, l = `${s}%`, d3 = {
      top: "vertical" === o ? l : void 0,
      left: "vertical" === o ? void 0 : l
    }, c3 = this._renderContent();
    return n("div", e4 ? {
      class: p3.container,
      key: "container",
      role: "presentation",
      styles: d3
    } : {
      afterCreate: this._afterContainerCreate,
      "aria-label": t,
      "aria-orientation": o,
      "aria-valuemax": `${n2}`,
      "aria-valuemin": `${r}`,
      "aria-valuenow": `${s}`,
      "aria-valuetext": l,
      bind: this,
      class: p3.container,
      key: "container",
      onkeydown: this._onContainerKeyDown,
      role: "slider",
      styles: d3,
      tabIndex: 0,
      title: t,
      "touch-action": "none"
    }, c3);
  }
  _afterContainerCreate(e4) {
    this._container = e4, e4.addEventListener("pointerdown", this._onContainerPointerDown);
  }
  _calculatePointerOffset(e4) {
    const {
      direction: t
    } = this, i2 = e4.target, n2 = ("vertical" === t ? i2.clientHeight : i2.clientWidth) / 2, r = i2.getBoundingClientRect(), o = e4.clientX - r.left, s = e4.clientY - r.top;
    this._pointerOffset = "vertical" === t ? s - n2 : o - n2;
  }
  _onContainerPointerDown(e4) {
    e4.preventDefault(), this._container && document.activeElement !== this.container && this._container.focus(), this._calculatePointerOffset(e4), document.addEventListener("pointerup", this._onContainerPointerUp), document.addEventListener("pointermove", this._onContainerPointerMove);
  }
  _onContainerPointerUp(e4) {
    e4.preventDefault(), document.removeEventListener("pointerup", this._onContainerPointerUp), document.removeEventListener("pointermove", this._onContainerPointerMove);
  }
  _onContainerPointerMove(e4) {
    e4.preventDefault();
    const {
      _pointerOffset: t,
      container: i2,
      direction: n2
    } = this, {
      clientX: r,
      clientY: o
    } = e4, {
      top: s,
      left: a2,
      width: l,
      height: d3
    } = i2.getBoundingClientRect(), p4 = ("vertical" === n2 ? o - s - t : r - a2 - t) / ("vertical" === n2 ? d3 : l) * 100;
    this.position = p4;
  }
  _getKeyPosition(e4) {
    const {
      key: t
    } = e4, {
      position: i2
    } = this, {
      max: n2,
      min: r,
      step: o,
      stepMultiplier: s,
      direction: a2
    } = this.viewModel, l = o * s;
    ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(t) && (e4.preventDefault(), e4.stopPropagation());
    if ("vertical" === a2 ? "ArrowDown" === t || "ArrowRight" === t : "ArrowUp" === t || "ArrowRight" === t) {
      return i2 + (e4.shiftKey ? l : o);
    }
    if ("vertical" === a2 ? "ArrowUp" === t || "ArrowLeft" === t : "ArrowDown" === t || "ArrowLeft" === t) {
      return i2 - (e4.shiftKey ? l : o);
    }
    if ("Home" === t) return r;
    if ("End" === t) return n2;
    if ("vertical" === a2 ? "PageDown" === t : "PageUp" === t) return i2 + l;
    return ("vertical" === a2 ? "PageUp" === t : "PageDown" === t) ? i2 - l : null;
  }
  _onContainerKeyDown(e4) {
    const t = this._getKeyPosition(e4);
    "number" == typeof t && (this.position = t);
  }
};
e([y()], h2.prototype, "direction", null), e([y()], h2.prototype, "disabled", void 0), e([y()], h2.prototype, "dragLabel", null), e([y()], h2.prototype, "icon", null), e([y()], h2.prototype, "label", null), e([y()], h2.prototype, "leadingLayers", null), e([y(), e2("esri/widgets/Swipe/t9n/Swipe")], h2.prototype, "messages", void 0), e([y()], h2.prototype, "position", null), e([y()], h2.prototype, "trailingLayers", null), e([y()], h2.prototype, "view", null), e([y({
  type: g
})], h2.prototype, "viewModel", void 0), e([y()], h2.prototype, "visibleElements", null), h2 = e([a("esri.widgets.Swipe")], h2);
var v2 = h2;
export {
  v2 as default
};
//# sourceMappingURL=Swipe-M7TQXFVU.js.map
