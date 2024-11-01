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
  n
} from "./chunk-M5N6UHWJ.js";
import "./chunk-EBCBYN6Y.js";
import {
  k
} from "./chunk-ODFKYX74.js";
import "./chunk-EGBDRLCX.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
import {
  M,
  h
} from "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import {
  d
} from "./chunk-LZSLQ24Q.js";
import "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import "./chunk-L4CMR4WM.js";
import "./chunk-7JIACICA.js";
import "./chunk-IE4UBD3F.js";
import "./chunk-IAO6HACY.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/DirectionalPad/constants.js
var e5 = [-45, 0, 45, -90, 90, -135, 180, 135];
var o2 = [...e5, -180];
var n2 = {
  0: {
    label: "north",
    iconName: "chevron-up"
  },
  45: {
    label: "northEast",
    iconName: "chevron-up-right"
  },
  90: {
    label: "east",
    iconName: "chevron-right"
  },
  135: {
    label: "southEast",
    iconName: "chevron-down-right"
  },
  180: {
    label: "south",
    iconName: "chevron-down"
  },
  "-135": {
    label: "southWest",
    iconName: "chevron-down-left"
  },
  "-90": {
    label: "west",
    iconName: "chevron-left"
  },
  "-45": {
    label: "northWest",
    iconName: "chevron-up-left"
  }
};
var t2 = 200;

// ../../../node_modules/@arcgis/core/widgets/DirectionalPad/css.js
var t3 = "esri-directional-pad";
var o3 = {
  base: t3,
  buttonsContainer: `${t3}__buttons-container`,
  button: `${t3}__button`,
  compassButton: `${t3}__compass`,
  rotationContainer: `${t3}__rotation-container`,
  rotationSliderContainer: `${t3}__rotation-slider-container`,
  rotationReset: `${t3}__rotation-reset-button`,
  error: `${t3}__error`
};

// ../../../node_modules/@arcgis/core/widgets/DirectionalPad/utils.js
function r2(t4) {
  const n3 = s(t4), r3 = o2.map((t5) => ({
    angle: t5,
    offset: Math.abs(t5 - n3)
  })).sort((t5, n4) => t5.offset - n4.offset), e7 = r3[0].angle;
  return -180 === e7 ? 180 : e7;
}
function s({
  x: n3,
  y: o4
}) {
  const r3 = Math.atan2(n3, o4);
  return M(r3);
}
function e6(t4) {
  const o4 = h(t4);
  return {
    x: Math.sin(o4),
    y: Math.cos(o4)
  };
}
function c(t4, n3) {
  const o4 = n3.y - t4.y, r3 = n3.x - t4.x, s3 = Math.sqrt(r3 * r3 + o4 * o4);
  return {
    x: r3 / s3,
    y: o4 / s3
  };
}
function a2(t4) {
  const {
    x: n3,
    y: o4,
    width: r3,
    height: s3
  } = t4.getBoundingClientRect();
  return {
    x: n3 + r3 / 2,
    y: o4 + s3 / 2
  };
}

// ../../../node_modules/@arcgis/core/widgets/DirectionalPad/DirectionalPadViewModel.js
var d2 = class extends t(o.EventedAccessor) {
  constructor(t4) {
    super(t4), this._initialAngle = void 0, this._movementVector = void 0, this._widgetCenter = void 0, this._anyAngleMovementEnabled = false, this._movementTimeout = void 0, this._disabled = false, this._moveOnceDuration = t2, this.angle = void 0, this.speed = 1, this.beginFollowingPointer = (t5, e7) => {
      if (this.disabled) return;
      this._widgetCenter = e7;
      const o4 = this._pointerLocationToVector(t5);
      if (void 0 === o4) return;
      const i2 = this._resolveClosestAngle(t5, o4);
      void 0 !== i2 && (this._emitMove(e6(i2)), this.angle = i2, this._initialAngle = i2, this._setMovementTimeout(() => {
        void 0 === this._widgetCenter && this._stopMovement();
      }), document.addEventListener("pointermove", this._onPointerMove, {
        passive: true
      }), document.addEventListener("pointerup", this._onPointerUp, {
        passive: true,
        once: true
      }));
    }, this.moveOnce = (t5) => {
      const e7 = e6(t5);
      this._emitMove(e7), this._setMovementTimeout(this._stopMovement);
    }, this._pointerLocationToVector = (t5) => {
      if (void 0 === this._widgetCenter) return;
      const {
        x: e7,
        y: o4
      } = c(this._widgetCenter, t5);
      return {
        x: e7,
        y: -o4
      };
    }, this._resolveClosestAngle = (t5, e7) => {
      const o4 = t5.target, i2 = o4?.getAttribute?.("data-angle"), s3 = o4?.classList?.contains(o3.compassButton);
      if (s3) return;
      const r3 = Number.parseInt(i2 ?? "", 10);
      return Number.isNaN(r3) ? r2(e7) : r3;
    }, this._onPointerMove = (t5) => {
      if (0 === t5.buttons) return void this._stopMovement();
      const e7 = this._pointerLocationToVector(t5);
      if (void 0 === e7) return;
      this._setMovementTimeout(void 0);
      const o4 = this._resolveClosestAngle(t5, e7);
      if (void 0 === o4) return void this._emitStop();
      const i2 = e6(o4), s3 = null != this._initialAngle && this._initialAngle !== o4;
      this._anyAngleMovementEnabled ||= s3;
      const n3 = this._anyAngleMovementEnabled ? e7 : i2;
      (n3.x !== this._movementVector?.x || n3.y !== this._movementVector?.y) && (this.angle = o4, this._emitMove(n3));
    }, this._onPointerUp = () => {
      void 0 === this._movementTimeout ? this._stopMovement() : this._widgetCenter = void 0;
    }, this._stopMovement = () => {
      this._emitStop(), this._widgetCenter = void 0, this._initialAngle = void 0, this._anyAngleMovementEnabled = false, document.removeEventListener("pointermove", this._onPointerMove), document.removeEventListener("pointerup", this._stopMovement), this._setMovementTimeout(void 0);
    }, this.on("move-start", () => this.view?.mapViewNavigation.begin()), this.on("move-direction-change", ({
      vector: {
        x: t5,
        y: e7
      }
    }) => this.view?.mapViewNavigation.continuousPanVector({
      x: t5 * this.speed,
      y: e7 * this.speed
    })), this.on("move-stop", () => this.view?.mapViewNavigation.stop());
  }
  destroy() {
    this._stopMovement();
  }
  get disabled() {
    const {
      view: t4,
      _disabled: e7,
      supported: o4
    } = this;
    return false === t4?.ready || e7 || !o4;
  }
  set disabled(t4) {
    this._disabled = t4;
  }
  get rotation() {
    return this.view?.rotation ?? this._get("rotation") ?? 0;
  }
  set rotation(t4) {
    this.view ? this.view.constraints.rotationEnabled && this.callGoTo({
      target: {
        rotation: t4
      },
      options: {
        animate: 0 === t4 && void 0
      }
    }) : this._set("rotation", t4);
  }
  get supported() {
    return null == this.view || "2d" === this.view.type;
  }
  get state() {
    const {
      disabled: t4,
      angle: e7
    } = this;
    return t4 ? "disabled" : null != e7 ? "moving" : "ready";
  }
  _setMovementTimeout(t4) {
    clearTimeout(this._movementTimeout), this._movementTimeout = void 0 === t4 ? void 0 : setTimeout(() => {
      this._movementTimeout = void 0, t4();
    }, this._moveOnceDuration);
  }
  _emitMove(t4) {
    null == this._movementVector && this._emitMoveStartEvent({
      vector: t4
    });
    const e7 = this._movementVector;
    this._movementVector = t4, this._emitMoveDirectionChangeEvent({
      vector: t4,
      oldVector: e7
    });
  }
  _emitStop() {
    this.angle = void 0, void 0 !== this._movementVector && (this._emitMoveStopEvent({
      oldVector: this._movementVector
    }), this._movementVector = void 0);
  }
  _emitMoveStartEvent(t4) {
    this.emit("move-start", __spreadProps(__spreadValues({}, t4), {
      type: "move-start"
    }));
  }
  _emitMoveDirectionChangeEvent(t4) {
    this.emit("move-direction-change", __spreadProps(__spreadValues({}, t4), {
      type: "move-direction-change"
    }));
  }
  _emitMoveStopEvent(t4) {
    this.emit("move-stop", __spreadProps(__spreadValues({}, t4), {
      type: "move-stop"
    }));
  }
};
e([y()], d2.prototype, "_initialAngle", void 0), e([y()], d2.prototype, "_movementVector", void 0), e([y()], d2.prototype, "_widgetCenter", void 0), e([y()], d2.prototype, "_anyAngleMovementEnabled", void 0), e([y()], d2.prototype, "_movementTimeout", void 0), e([y()], d2.prototype, "_disabled", void 0), e([y()], d2.prototype, "_moveOnceDuration", void 0), e([y()], d2.prototype, "disabled", null), e([y()], d2.prototype, "angle", void 0), e([y({
  type: Number,
  range: {
    min: 0,
    max: 100
  }
})], d2.prototype, "speed", void 0), e([y()], d2.prototype, "rotation", null), e([y()], d2.prototype, "supported", null), e([y({
  readOnly: true
})], d2.prototype, "state", null), e([y()], d2.prototype, "view", void 0), d2 = e([a("esri.widgets.DirectionalPad.DirectionalPadViewModel")], d2);
var h2 = d2;

// ../../../node_modules/@arcgis/core/widgets/DirectionalPad/VisibleElements.js
var s2 = class extends S {
  constructor(o4) {
    super(o4), this.directionalButtons = true, this.rotationSlider = false, this.rotationResetButton = false;
  }
};
e([y({
  type: Boolean,
  nonNullable: true
})], s2.prototype, "directionalButtons", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s2.prototype, "rotationSlider", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s2.prototype, "rotationResetButton", void 0), s2 = e([a("esri.widgets.DirectionalPad.VisibleElements")], s2);
var i = s2;

// ../../../node_modules/@arcgis/core/widgets/DirectionalPad.js
var _ = class extends B {
  constructor(t4, e7) {
    super(t4, e7), this._buttonsContainer = null, this._buttons = {}, this.messages = null, this.visibleElements = new i(), this.viewModel = new h2(), this.visualScale = "s", this._rotateIcon = (t5) => ({
      "--rotation": `rotate(${t5}deg)`
    }), this._afterButtonContainerCreate = (t5) => {
      this._buttonsContainer = t5, this._buttonsContainer.addEventListener("contextmenu", this._onContextMenu, {
        capture: true
      });
    }, this._afterButtonContainerRemoved = () => {
      this._buttonsContainer?.removeEventListener("contextmenu", this._onContextMenu, {
        capture: true
      }), this._buttonsContainer = null;
    }, this._afterButtonCreate = (t5, e8) => {
      this._buttons[t5] = e8;
    }, this._afterButtonRemoved = (t5) => {
      this._buttons[t5] = void 0;
    }, this._onContextMenu = (t5) => t5.preventDefault(), this._onButtonPointerDown = (t5) => {
      if (null === this._buttonsContainer) return;
      const e8 = t5.target, i2 = e8?.shadowRoot?.querySelector("button");
      i2?.hasPointerCapture(t5.pointerId) && i2.releasePointerCapture(t5.pointerId);
      const o4 = a2(this._buttonsContainer);
      this.viewModel.beginFollowingPointer(t5, o4);
    }, this._onKeyDown = (t5, {
      key: e8
    }) => {
      k(e8) && this.viewModel.moveOnce(t5);
    }, this._onSliderInput = ({
      target: t5
    }) => {
      "number" == typeof t5.value && (this.viewModel.rotation = t5.value);
    }, this._onRotationReset = () => {
      this.viewModel.rotation = 0;
    };
  }
  loadDependencies() {
    return r({
      action: () => import("./calcite-action-BXG7XWUR.js"),
      "action-group": () => import("./calcite-action-group-VZNSHMI7.js"),
      "action-pad": () => import("./calcite-action-pad-BQNDYQYA.js"),
      icon: () => import("./calcite-icon-42Z6A6ZS.js"),
      slider: () => import("./calcite-slider-L6JJC4BZ.js")
    });
  }
  initialize() {
    this.addHandles(d(() => this.viewModel.angle, () => {
      const t4 = this._buttonsContainer?.contains(document.activeElement);
      t4 && (null == this.viewModel.angle ? this.container?.focus() : this._buttons[this.viewModel.angle]?.setFocus());
    }));
  }
  get disabled() {
    return this.viewModel.disabled;
  }
  set disabled(t4) {
    this.viewModel.disabled = t4;
  }
  get icon() {
    return "move";
  }
  set icon(t4) {
    this._overrideIfSome("icon", t4);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(t4) {
    this._overrideIfSome("label", t4);
  }
  get view() {
    return this.viewModel.view;
  }
  set view(t4) {
    this.viewModel.view = t4;
  }
  get speed() {
    return this.viewModel.speed;
  }
  set speed(t4) {
    this.viewModel.speed = t4;
  }
  get _rotationEnabled() {
    return !this.view?.ready || this.view.constraints.rotationEnabled;
  }
  render() {
    const {
      label: t4,
      disabled: e7,
      viewModel: i2
    } = this, o4 = this.classes(o3.base, e3.widget, e7 ? e3.disabled : null);
    return n("div", {
      "aria-label": t4,
      class: o4,
      tabIndex: -1
    }, i2.supported ? this._renderContent() : this._renderUnsupportedMessage());
  }
  _renderUnsupportedMessage() {
    return n("section", {
      class: o3.error,
      key: "unsupported"
    }, n("p", null, this.messages.unsupported));
  }
  _renderContent() {
    return [this.visibleElements.directionalButtons ? this._renderDirectionalButtons() : void 0, this.visibleElements.rotationSlider ? this._renderRotation() : void 0];
  }
  _renderDirectionalButtons() {
    return n("calcite-action-pad", {
      expandDisabled: true,
      key: "directional-buttons-container",
      layout: "grid"
    }, n("calcite-action-group", {
      afterCreate: this._afterButtonContainerCreate,
      afterRemoved: this._afterButtonContainerRemoved,
      class: o3.buttonsContainer,
      dir: "ltr"
    }, e5.slice(0, 4).map((t4) => this._renderButton(t4)), this._renderCompass(), e5.slice(4).map((t4) => this._renderButton(t4))));
  }
  _renderButton(t4) {
    const {
      label: e7,
      iconName: i2
    } = n2[t4], o4 = this.messages[e7];
    return n("calcite-action", {
      active: this.viewModel.angle === t4,
      afterCreate: (e8) => this._afterButtonCreate(t4, e8),
      afterRemoved: () => this._afterButtonRemoved(t4),
      alignment: "center",
      class: o3.button,
      "data-angle": t4.toString(),
      disabled: this.disabled,
      key: t4,
      onkeydown: this._onKeyDown.bind(void 0, t4),
      onpointerdown: this._onButtonPointerDown,
      scale: this.visualScale,
      text: o4,
      title: o4
    }, n("calcite-icon", {
      icon: i2,
      scale: this.visualScale
    }));
  }
  _renderCompass() {
    const t4 = this.disabled || e4(this.view) ? "compass-needle" : "arrow-up", e7 = 0 === this.viewModel.rotation, i2 = this.messages.resetHeading;
    return n("calcite-action", {
      alignment: "center",
      class: o3.compassButton,
      disabled: this.disabled || !this._rotationEnabled || e7,
      key: "compass",
      onclick: this._onRotationReset,
      scale: this.visualScale,
      styles: this._rotateIcon(this.viewModel.rotation),
      text: i2,
      title: i2
    }, !e7 && n("calcite-icon", {
      icon: t4,
      scale: this.visualScale
    }));
  }
  _renderRotation() {
    return n("calcite-action-pad", {
      expandDisabled: true,
      key: "slider-container",
      layout: "horizontal"
    }, n("calcite-action-group", {
      class: o3.rotationContainer
    }, this.visibleElements.rotationResetButton ? this._renderRotationResetButton() : null, this._renderRotationSlider()));
  }
  _renderRotationResetButton() {
    const t4 = this.messages.resetHeading;
    return n("calcite-action", {
      alignment: "center",
      class: o3.rotationReset,
      disabled: this.disabled || !this._rotationEnabled,
      onclick: this._onRotationReset,
      scale: this.visualScale,
      text: t4,
      title: t4
    }, n("calcite-icon", {
      flipRtl: true,
      icon: "rotate",
      scale: this.visualScale
    }));
  }
  _renderRotationSlider() {
    return n("div", {
      class: o3.rotationSliderContainer
    }, n("calcite-slider", {
      "aria-label": this.messages.heading,
      disabled: this.disabled || !this._rotationEnabled,
      labelHandles: true,
      max: 360,
      min: 0,
      required: true,
      scale: this.visualScale,
      value: Math.round(this.viewModel.rotation),
      onCalciteSliderInput: this._onSliderInput
    }));
  }
};
e([y()], _.prototype, "_buttonsContainer", void 0), e([y()], _.prototype, "_buttons", void 0), e([y()], _.prototype, "disabled", null), e([y()], _.prototype, "icon", null), e([y()], _.prototype, "label", null), e([y(), e2("esri/widgets/DirectionalPad/t9n/DirectionalPad")], _.prototype, "messages", void 0), e([y({
  type: i,
  nonNullable: true
})], _.prototype, "visibleElements", void 0), e([y()], _.prototype, "view", null), e([y()], _.prototype, "viewModel", void 0), e([y()], _.prototype, "visualScale", void 0), e([y()], _.prototype, "speed", null), e([y({
  readOnly: true
})], _.prototype, "_rotationEnabled", null), _ = e([a("esri.widgets.DirectionalPad")], _);
var g = _;
export {
  g as default
};
//# sourceMappingURL=DirectionalPad-3HPTTJ2C.js.map
