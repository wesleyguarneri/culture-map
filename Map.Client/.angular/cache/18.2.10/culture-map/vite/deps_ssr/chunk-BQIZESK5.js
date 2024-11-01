import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n as n3
} from "./chunk-CG3HCSGN.js";
import {
  B,
  r
} from "./chunk-UVQYXHKM.js";
import {
  n as n2
} from "./chunk-M5N6UHWJ.js";
import {
  A,
  d,
  p
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
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/widgets/support/MeasurementWidgetContent.js
var a2 = "esri-measurement-widget-content";
var m = {
  base: a2,
  actions: `${a2}__actions`,
  error: `${a2}__error`,
  hint: `${a2}__hint`,
  hintText: `${a2}__hint-text`,
  panelError: `${a2}__panel--error`,
  settings: `${a2}__settings`,
  measurement: `${a2}__measurement`,
  measurementItem: `${a2}__measurement-item`,
  measurementItemDisabled: `${a2}__measurement-item--disabled`,
  measurementItemTitle: `${a2}__measurement-item__title`,
  measurementItemValue: `${a2}__measurement-item__value`
};
var u = class extends B {
  constructor(e2, t) {
    super(e2, t);
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-LAMWLR56.js")
    });
  }
  render() {
    return n2("div", {
      class: m.base
    }, this._renderContent());
  }
  _renderContent() {
    const {
      supported: e2,
      active: t,
      state: s
    } = this;
    switch (s) {
      case "disabled":
      case "ready":
        return e2 ? t ? this._renderHint() : this._renderActions() : this._renderUnsupportedMessage();
      case "measuring":
      case "measured":
        return [this._renderSettings(), this._renderMeasurement(), this._renderActions()];
    }
  }
  _renderUnsupportedMessage() {
    return n2("section", {
      class: m.error,
      key: "unsupported"
    }, n2("p", null, this.messages.unsupported));
  }
  _renderHint() {
    const {
      messages: e2
    } = this;
    return n2("section", {
      class: m.hint,
      key: "hint"
    }, n2("p", {
      class: m.hintText
    }, e2.hint));
  }
  _renderSettings() {
    return n2("div", {
      class: m.settings,
      key: "settings"
    }, n2(n3, {
      options: this.unitOptions,
      selectLabel: this.messages.unit,
      value: this.unit,
      onChange: this.onUnitChange
    }));
  }
  _renderMeasurement() {
    return n2("section", {
      class: m.measurement,
      key: "measurement"
    }, this.measurementItems.map((e2) => this._renderMeasurementItem(e2)));
  }
  _renderMeasurementItem({
    key: e2,
    title: t,
    value: s
  }) {
    return n2("div", {
      class: this.classes(m.measurementItem, null == s && m.measurementItemDisabled),
      key: e2
    }, n2("span", {
      class: m.measurementItemTitle
    }, t), n2("span", {
      "aria-live": "polite",
      class: m.measurementItemValue
    }, s ?? this.messages.notApplicable));
  }
  _renderActions() {
    const {
      messages: e2
    } = this;
    return n2("div", {
      class: m.actions
    }, n2("calcite-button", {
      class: this.newMeasurementButtonClass,
      disabled: "disabled" === this.state,
      onclick: this.onNewMeasurementClick
    }, e2.newMeasurement));
  }
};
e([y()], u.prototype, "active", void 0), e([y()], u.prototype, "measurementItems", void 0), e([y()], u.prototype, "messages", void 0), e([y()], u.prototype, "newMeasurementButtonClass", void 0), e([y()], u.prototype, "onNewMeasurementClick", void 0), e([y()], u.prototype, "onUnitChange", void 0), e([y()], u.prototype, "state", void 0), e([y()], u.prototype, "supported", void 0), e([y()], u.prototype, "unit", void 0), e([y()], u.prototype, "unitOptions", void 0), u = e([a("esri.widgets.support.MeasurementWidgetContent")], u);

// ../../../node_modules/@arcgis/core/widgets/support/InteractiveToolViewModel.js
var p2 = class extends S {
  constructor(t) {
    super(t), this.tool = null, this._loggedUnsupportedErrorOnce = false, null != t?.visible && (this.visible = t.visible);
  }
  initialize() {
    this.addHandles(d(() => ({
      ready: null != this.view && this.view.ready,
      supported: this.supported
    }), ({
      ready: t,
      supported: e2
    }) => {
      !t || e2 || this._loggedUnsupportedErrorOnce || (this.logError(this.unsupportedErrorMessage), this._loggedUnsupportedErrorOnce = true);
    }, A));
  }
  destroy() {
    this.removeTool(), this.view = null;
  }
  get active() {
    return null != this.tool && this.tool.active;
  }
  get disabled() {
    return null == this.view || !this.view.ready || !this.supported;
  }
  get supported() {
    return null == this.view || this.view.type === this.supportedViewType;
  }
  get view() {
    return this._get("view");
  }
  set view(t) {
    if (t === this.view) return;
    this.removeTool(), this._set("view", t);
    const e2 = "tools";
    this.removeHandles(e2), null != t && this.addHandles(t.tools.on("after-remove", (t2) => {
      t2.item === this.tool && this._set("tool", null);
    }), e2);
  }
  set visible(t) {
    this._set("visible", t), null != this.tool && (this.tool.visible = t);
  }
  createTool(t = {
    interactive: false
  }) {
    if (this.removeTool(), null == this.view || !this.view.ready || !this.supported) return;
    const e2 = this.constructTool();
    e2.created ? (this._set("tool", e2), this.view.tools.add(e2)) : t.interactive ? (this._set("tool", e2), this.view.addAndActivateTool(e2), p(() => e2.created, () => {
      e2.active && null != this.view && (this.view.activeTool = null);
    }, {
      initial: true,
      once: true
    })) : e2.destroy();
  }
  removeTool() {
    const t = this.tool;
    if (null == t) return;
    const e2 = this.view?.tools;
    null != e2 ? e2.remove(t) : t.destroy(), this._set("tool", null);
  }
  logError(...t) {
    n.getLogger(this).error(...t);
  }
};
e([y({
  constructOnly: true
})], p2.prototype, "tool", void 0), e([y()], p2.prototype, "active", null), e([y()], p2.prototype, "disabled", null), e([y()], p2.prototype, "supported", null), e([y({
  value: null
})], p2.prototype, "view", null), e([y({
  type: Boolean,
  value: true
})], p2.prototype, "visible", null), p2 = e([a("esri.widgets.support.InteractiveToolViewModel")], p2);

export {
  p2 as p,
  u
};
//# sourceMappingURL=chunk-BQIZESK5.js.map
