import {
  A as A2
} from "./chunk-VGYXQASE.js";
import {
  e as e4
} from "./chunk-ZDGJDLVE.js";
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
import {
  o
} from "./chunk-WGAPNV7F.js";
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
import {
  A,
  b,
  k
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/ValuePicker/ValuePickerBaseComponent.js
var t = class extends B {
  constructor(o2, r4) {
    super(o2, r4), this.type = null, this.viewModel = null;
  }
};
e([y()], t.prototype, "type", void 0), e([y()], t.prototype, "viewModel", void 0), t = e([a("esri.widgets.ValuePicker.ValuePickerBaseComponent")], t);
var p = t;

// ../../../node_modules/@arcgis/core/widgets/ValuePicker/ValuePickerCollection.js
var r2 = class extends p {
  constructor(e5, t3) {
    super(e5, t3), this.collection = null, this.type = "collection";
  }
  get canNext() {
    return !(!this.collection?.length || !this.viewModel) && this.collection.at(-1) !== this.viewModel.values?.[0];
  }
  get canPlay() {
    return null != this.viewModel && !!this.collection?.length;
  }
  get canPrevious() {
    return !(!this.collection?.length || !this.viewModel) && this.collection.at(0) !== this.viewModel.values?.[0];
  }
  render() {
    return n2("div", null);
  }
  animate(e5) {
    this._step(1, e5);
  }
  next() {
    this._step(1);
  }
  previous() {
    this._step(-1);
  }
  _step(e5, t3 = false) {
    if (!this.viewModel || !this.collection?.length) return;
    if (!this.viewModel.values) return void (this.viewModel.values = [this.collection.at(0)]);
    if (!this.collection.includes(this.viewModel.values[0])) return void (this.viewModel.values = [this.collection.at(0)]);
    const o2 = this.collection.indexOf(this.viewModel.values[0]) + e5;
    o2 < 0 || o2 >= this.collection.length ? this.viewModel.loop || t3 ? this.viewModel.values = [this.collection.at(1 === e5 ? 0 : -1)] : "playing" === this.viewModel.state && this.viewModel.pause() : this.viewModel.values = [this.collection.at(o2)];
  }
};
e([y()], r2.prototype, "canNext", null), e([y()], r2.prototype, "canPlay", null), e([y()], r2.prototype, "canPrevious", null), e([y({
  type: V
})], r2.prototype, "collection", void 0), e([y()], r2.prototype, "type", void 0), r2 = e([a("esri.widgets.ValuePicker.ValuePickerCollection")], r2);
var c = r2;

// ../../../node_modules/@arcgis/core/widgets/ValuePicker/ValuePickerCombobox.js
var r3 = "esri-value-picker__combobox";
var a2 = class extends p {
  constructor(e5, t3) {
    super(e5, t3), this.items = null, this.placeholder = null, this.type = "combobox";
  }
  loadDependencies() {
    return r({
      combobox: () => import("./calcite-combobox-XTDI5CG6.js"),
      "combobox-item": () => import("./calcite-combobox-item-SJ5IB5U6.js")
    });
  }
  get canNext() {
    return !(!this.items || !this.viewModel) && this.items.findIndex(({
      value: e5
    }) => e5 === this.viewModel.values?.[0]) !== this.items.length - 1;
  }
  get canPlay() {
    return null != this.viewModel && !!this.items?.length;
  }
  get canPrevious() {
    const {
      items: e5,
      viewModel: t3
    } = this;
    return !(!e5 || !t3) && 0 !== e5.findIndex(({
      value: e6
    }) => e6 === t3.values?.[0]);
  }
  render() {
    const {
      viewModel: e5
    } = this;
    if (null == e5) return n2("div", null);
    const t3 = e5.values?.[0];
    return n2("div", {
      class: r3
    }, n2("calcite-combobox", {
      disabled: e5.disabled,
      label: this.label,
      maxItems: 10,
      overlayPositioning: "fixed",
      placeholder: this.placeholder ?? void 0,
      selectionMode: "single",
      onCalciteComboboxChange: (t4) => {
        Array.isArray(t4.target.value) || (null != e5.values ? e5.values[0] !== t4.target.value && (e5.values = [t4.target.value]) : e5.values = [t4.target.value]);
      }
    }, this.items?.map(({
      value: e6,
      label: o2
    }, s2) => n2("calcite-combobox-item", {
      key: s2,
      selected: e6 === t3,
      textLabel: o2,
      value: e6
    }))));
  }
  animate(e5) {
    this._step(1, e5);
  }
  next() {
    this._step(1);
  }
  previous() {
    this._step(-1);
  }
  _step(e5, t3 = false) {
    const {
      viewModel: o2,
      items: s2
    } = this;
    if (!s2?.length || !o2) return;
    if (!o2.values) return void (o2.values = [s2[0].value]);
    const i2 = s2.findIndex(({
      value: e6
    }) => e6 === o2.values[0]);
    if (-1 === i2) return void (o2.values = [s2[0].value]);
    const l3 = i2 + e5;
    l3 < 0 || l3 >= s2.length ? o2.loop || t3 ? o2.values = [s2[1 === e5 ? 0 : s2.length - 1].value] : "playing" === o2.state && o2.pause() : o2.values = [s2[l3].value];
  }
};
e([y()], a2.prototype, "canNext", null), e([y()], a2.prototype, "canPlay", null), e([y()], a2.prototype, "canPrevious", null), e([y()], a2.prototype, "items", void 0), e([y()], a2.prototype, "placeholder", void 0), e([y()], a2.prototype, "type", void 0), a2 = e([a("esri.widgets.ValuePicker.ValuePickerCombobox")], a2);
var n3 = a2;

// ../../../node_modules/@arcgis/core/widgets/ValuePicker/ValuePickerLabel.js
var i = "esri-value-picker__label";
var l = {
  border: `${i}-border`,
  text: `${i}-text`
};
var a3 = class extends p {
  constructor(e5, t3) {
    super(e5, t3), this.items = null, this.type = "label";
  }
  get canNext() {
    return !(!this.items || !this.viewModel) && this.items.findIndex(({
      value: e5
    }) => e5 === this.viewModel.values?.[0]) !== this.items.length - 1;
  }
  get canPlay() {
    return null != this.viewModel && !!this.items?.length;
  }
  get canPrevious() {
    const {
      items: e5,
      viewModel: t3
    } = this;
    return !(!e5 || !t3) && 0 !== e5.findIndex(({
      value: e6
    }) => e6 === t3.values?.[0]);
  }
  render() {
    const {
      viewModel: e5
    } = this;
    if (null == e5) return n2("div", null);
    const t3 = this.items?.find(({
      value: t4
    }) => t4 === e5.values?.[0]);
    return n2("div", {
      class: i
    }, n2("div", {
      class: l.border
    }, n2("div", {
      class: l.text
    }, t3?.label)));
  }
  animate(e5) {
    this._step(1, e5);
  }
  next() {
    this._step(1);
  }
  previous() {
    this._step(-1);
  }
  _step(e5, t3 = false) {
    const {
      viewModel: s2,
      items: r4
    } = this;
    if (!r4?.length || !s2) return;
    if (!s2.values) return void (s2.values = [r4[0].value]);
    const o2 = r4.findIndex(({
      value: e6
    }) => e6 === s2.values[0]);
    if (-1 === o2) return void (s2.values = [r4[0].value]);
    const i2 = o2 + e5;
    i2 < 0 || i2 >= r4.length ? s2.loop || t3 ? s2.values = [r4[1 === e5 ? 0 : r4.length - 1].value] : "playing" === s2.state && s2.pause() : s2.values = [r4[i2].value];
  }
};
e([y()], a3.prototype, "canNext", null), e([y()], a3.prototype, "canPlay", null), e([y()], a3.prototype, "canPrevious", null), e([y()], a3.prototype, "items", void 0), e([y()], a3.prototype, "type", void 0), a3 = e([a("esri.widgets.ValuePicker.ValuePickerLabel")], a3);
var n4 = a3;

// ../../../node_modules/@arcgis/core/widgets/ValuePicker/ValuePickerSliderVisibleElements.js
var t2 = class extends S {
  constructor(o2) {
    super(o2), this.steps = false, this.thumbTooltip = false;
  }
};
e([y({
  nonNullable: true
})], t2.prototype, "steps", void 0), e([y({
  nonNullable: true
})], t2.prototype, "thumbTooltip", void 0), t2 = e([a("esri.widgets.ValuePicker.ValuePickerSliderVisibleElements")], t2);
var p2 = t2;

// ../../../node_modules/@arcgis/core/widgets/ValuePicker/ValuePickerSlider.js
var c2 = "esri-value-picker__slider";
var d2 = {
  minorTick: `${c2}__tick-minor`,
  majorTick: `${c2}__tick-major`,
  stepsTick: `${c2}__tick-steps`,
  tooltip: `${c2}__tooltip`
};
function h(e5) {
  return (t3, s2) => {
    s2?.classList.add(e5);
  };
}
var m = class extends p {
  constructor(e5, s2) {
    super(e5, s2), this._majorTickCreatedFunction = h(d2.majorTick), this._minorTickCreatedFunction = h(d2.minorTick), this._stepsTickCreatedFunction = h(d2.stepsTick), this._thumbNode = null, this._tooltip = null, this._slider = new A2({
      thumbCreatedFunction: (e6, t3, s3) => {
        this._thumbNode = s3;
      }
    }), this.labelFormatFunction = null, this.labels = null, this.min = null, this.minorTicks = null, this.majorTicks = null, this.max = null, this.reversed = false, this.steps = null, this.type = "slider", this.visibleElements = new p2(), this._thumbDragDebounced = k((e6) => __async(this, null, function* () {
      yield this._tooltip?.reposition(false);
    }));
  }
  initialize() {
    this.addHandles([d(() => this.viewModel?.values, (e5) => {
      this._slider.values = e5;
    }, P), d(() => this._slider.values, (e5) => {
      this.viewModel && this.viewModel.values !== e5 && (this.viewModel.values = e5);
    }), this._slider.on("thumb-drag", this._thumbDragDebounced)]);
  }
  destroy() {
    this._slider.destroy();
  }
  loadDependencies() {
    return r({
      tooltip: () => import("./calcite-tooltip-AYI56I5U.js")
    });
  }
  get _ascending() {
    const {
      reversed: e5,
      viewModel: t3
    } = this;
    if (!t3) return null;
    const {
      layout: s2
    } = t3;
    return "horizontal" === s2 && !e5 || "vertical" === s2 && e5;
  }
  get canNext() {
    const {
      _ascending: e5,
      min: t3,
      max: s2,
      steps: i2,
      viewModel: o2
    } = this;
    if (null == e5 || null == t3 || null == s2 || !i2?.length || !o2) return false;
    const {
      values: l3
    } = o2, r4 = l3?.[0];
    return null == r4 || (e5 ? r4 !== i2[i2.length - 1] : r4 !== i2[0]);
  }
  get canPlay() {
    return null != this.viewModel && !!this.steps?.length && null != this.min && null != this.max;
  }
  get canPrevious() {
    const {
      _ascending: e5,
      min: t3,
      max: s2,
      steps: i2,
      viewModel: o2
    } = this;
    if (null == e5 || null == t3 || null == s2 || !i2?.length || !o2) return false;
    const {
      values: l3
    } = o2, r4 = l3?.[0];
    return null == r4 || (e5 ? r4 !== i2[0] : r4 !== i2[i2.length - 1]);
  }
  render() {
    const {
      labels: e5,
      labelFormatFunction: t3,
      min: s2,
      max: i2,
      steps: o2,
      minorTicks: l3,
      majorTicks: r4,
      reversed: n6,
      viewModel: u2
    } = this;
    if (!u2) return n2("div", null);
    const {
      disabled: p5,
      layout: d3
    } = u2, h2 = `${d3}${n6 ? "-reversed" : ""}`, m2 = "position", v3 = [];
    return null != s2 && null != i2 && (l3 && v3.push({
      mode: m2,
      values: l3,
      tickCreatedFunction: this._minorTickCreatedFunction
    }), r4 && v3.push({
      mode: m2,
      values: r4,
      tickCreatedFunction: this._majorTickCreatedFunction
    }), e5 && v3.push({
      mode: m2,
      values: e5,
      labelsVisible: true
    }), this.visibleElements.steps && this.steps && v3.push({
      mode: m2,
      values: this.steps,
      tickCreatedFunction: this._stepsTickCreatedFunction
    })), this._slider.set({
      disabled: p5,
      labelFormatFunction: t3,
      layout: h2,
      min: s2,
      max: i2,
      steps: o2,
      tickConfigs: v3
    }), n2("div", {
      class: c2
    }, this._slider.render(), this._renderToolTip());
  }
  animate(e5) {
    this._step(1, e5);
  }
  next() {
    this._step(this._ascending ? 1 : -1);
  }
  previous() {
    this._step(this._ascending ? -1 : 1);
  }
  _onTooltipAfterCreate(e5) {
    this._tooltip = e5;
  }
  _renderToolTip() {
    if (!this.visibleElements.thumbTooltip || !this._thumbNode || !this._slider.values) return null;
    const e5 = this._slider.viewModel.getLabelForValue(this._slider.values[0], "value");
    return e5 ? n2("calcite-tooltip", {
      afterCreate: this._onTooltipAfterCreate,
      class: d2.tooltip,
      referenceElement: this._thumbNode
    }, e5) : null;
  }
  _step(e5, t3 = false) {
    if (!this.viewModel || !this.steps?.length) return;
    if (!this.viewModel.values || !this.steps.includes(this.viewModel.values[0])) return void (this.viewModel.values = [this.steps[0]]);
    const s2 = this.steps.indexOf(this.viewModel.values[0]) + e5;
    s2 < 0 || s2 >= this.steps.length ? this.viewModel.loop || t3 ? this.viewModel.values = [this.steps[1 === e5 ? 0 : this.steps.length - 1]] : "playing" === this.viewModel.state && this.viewModel.pause() : this.viewModel.values = [this.steps[s2]];
  }
};
e([y()], m.prototype, "_ascending", null), e([y()], m.prototype, "canNext", null), e([y()], m.prototype, "canPlay", null), e([y()], m.prototype, "canPrevious", null), e([y()], m.prototype, "labelFormatFunction", void 0), e([y()], m.prototype, "labels", void 0), e([y()], m.prototype, "min", void 0), e([y()], m.prototype, "minorTicks", void 0), e([y()], m.prototype, "majorTicks", void 0), e([y()], m.prototype, "max", void 0), e([y({
  nonNullable: true
})], m.prototype, "reversed", void 0), e([y()], m.prototype, "steps", void 0), e([y()], m.prototype, "type", void 0), e([y({
  type: p2,
  nonNullable: true
})], m.prototype, "visibleElements", void 0), m = e([a("esri.widgets.ValuePicker.ValuePickerSlider")], m);
var v2 = m;

// ../../../node_modules/@arcgis/core/widgets/ValuePicker/ValuePickerViewModel.js
var l2 = {
  first: true
};
var n5 = {
  first: false
};
var p3 = class extends o.EventedAccessor {
  constructor(t3) {
    super(t3), this._animationController = null, this.disabled = false, this.layout = "horizontal", this.loop = false, this.playRate = 1e3, this.values = null;
  }
  destroy() {
    this._pause();
  }
  get state() {
    return this._animationController ? "playing" : "ready";
  }
  next() {
    this.emit("next");
  }
  pause() {
    this.emit("pause"), this._pause();
  }
  play() {
    this.emit("play"), this._play();
  }
  previous() {
    this.emit("previous");
  }
  _pause() {
    this._animationController?.abort(), this._animationController = null;
  }
  _play() {
    this._pause(), this._animationController = new AbortController(), this._animate(l2);
  }
  _animate(t3) {
    return __async(this, null, function* () {
      if (this.emit("animate", t3), this._animationController) {
        try {
          yield A(this.playRate, null, this._animationController.signal);
        } catch (o2) {
          return b(o2) || n.getLogger(this).error(o2), void this._pause();
        }
        this._animate(n5);
      }
    });
  }
};
e([y()], p3.prototype, "_animationController", void 0), e([y({
  nonNullable: true
})], p3.prototype, "disabled", void 0), e([y({
  nonNullable: true
})], p3.prototype, "layout", void 0), e([y({
  nonNullable: true
})], p3.prototype, "loop", void 0), e([y({
  nonNullable: true
})], p3.prototype, "playRate", void 0), e([y({
  readOnly: true
})], p3.prototype, "state", null), e([y()], p3.prototype, "values", void 0), e([y()], p3.prototype, "next", null), e([y()], p3.prototype, "pause", null), e([y()], p3.prototype, "play", null), e([y()], p3.prototype, "previous", null), p3 = e([a("esri.widgets.ValuePicker.ValuePickerViewModel")], p3);
var u = p3;

// ../../../node_modules/@arcgis/core/widgets/ValuePicker/ValuePickerVisibleElements.js
var s = class extends S {
  constructor(o2) {
    super(o2), this.nextButton = true, this.playButton = true, this.previousButton = true;
  }
};
e([y({
  nonNullable: true
})], s.prototype, "nextButton", void 0), e([y({
  nonNullable: true
})], s.prototype, "playButton", void 0), e([y({
  nonNullable: true
})], s.prototype, "previousButton", void 0), s = e([a("esri.widgets.ValuePicker.ValuePickerVisibleElements")], s);
var p4 = s;

// ../../../node_modules/@arcgis/core/widgets/ValuePicker.js
var y2 = "esri-value-picker";
var b2 = {
  actionBar: `${y2}__action-bar`,
  caption: `${y2}__caption`,
  captionBorder: `${y2}__caption-border`,
  captionText: `${y2}__caption-text`,
  separator: `${y2}__separator`
};
var g = {
  base: null,
  key: "type",
  typeMap: {
    collection: c,
    combobox: n3,
    label: n4,
    slider: v2
  }
};
var w = class extends B {
  constructor(e5, t3) {
    super(e5, t3), this.caption = null, this.messages = null, this.messagesCommon = null, this.viewModel = new u(), this.visibleElements = new p4();
  }
  initialize() {
    this.addHandles([v(() => this.viewModel, "animate", ({
      first: e5
    }) => {
      this.component?.animate(e5);
    }), v(() => this.viewModel, "next", () => {
      this.component?.next();
    }), v(() => this.viewModel, "previous", () => {
      this.component?.previous();
    })]);
  }
  loadDependencies() {
    return r({
      action: () => import("./calcite-action-M3FHAAKV.js"),
      "action-bar": () => import("./calcite-action-bar-YZ2VEV46.js")
    });
  }
  get canNext() {
    return this.component?.canNext ?? true;
  }
  get canPlay() {
    return this.component?.canPlay ?? true;
  }
  get canPrevious() {
    return this.component?.canPrevious ?? true;
  }
  set component(e5) {
    e5 && (e5.viewModel ??= this.viewModel), this._set("component", e5);
  }
  get disabled() {
    return this.viewModel.disabled;
  }
  set disabled(e5) {
    this.viewModel.disabled = e5;
  }
  get icon() {
    return "list-rectangle";
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
  get layout() {
    return this.viewModel.layout;
  }
  set layout(e5) {
    this.viewModel.layout = e5;
  }
  get loop() {
    return this.viewModel.loop;
  }
  set loop(e5) {
    this.viewModel.loop = e5;
  }
  get playRate() {
    return this.viewModel.playRate;
  }
  set playRate(e5) {
    this.viewModel.playRate = e5;
  }
  get values() {
    return this.viewModel.values;
  }
  set values(e5) {
    this.viewModel.values = e5;
  }
  next() {
    this.viewModel.next();
  }
  pause() {
    this.viewModel.pause();
  }
  play() {
    this.viewModel.play();
  }
  previous() {
    this.viewModel.previous();
  }
  render() {
    const {
      disabled: e5,
      state: t3
    } = this.viewModel, o2 = "playing" === t3, i2 = "horizontal" === this.layout, {
      control: s2,
      pagination: l3
    } = this.messagesCommon, {
      pause: r4,
      play: n6
    } = s2, {
      previous: c3,
      up: u2,
      next: m2,
      down: d3
    } = l3, h2 = o2 ? r4 : n6, v3 = this.visibleElements.playButton && n2("calcite-action", {
      active: o2,
      alignment: "center",
      bind: this,
      disabled: e5 || !this.canPlay,
      icon: o2 ? "pause" : "play",
      key: "play",
      onclick: o2 ? this.pause : this.play,
      text: h2,
      title: h2
    }), g2 = i2 ? c3 : u2, w2 = this.visibleElements.previousButton && n2("calcite-action", {
      alignment: "center",
      bind: this,
      disabled: e5 || o2 || !this.canPrevious,
      icon: i2 ? "chevron-left" : "chevron-up",
      key: "previous",
      onclick: this.previous,
      text: g2,
      title: g2
    }), x2 = i2 ? m2 : d3, k2 = this.visibleElements.nextButton && n2("calcite-action", {
      alignment: "center",
      bind: this,
      disabled: e5 || o2 || !this.canNext,
      icon: i2 ? "chevron-right" : "chevron-down",
      key: "next",
      onclick: this.next,
      text: x2,
      title: x2
    }), M = this.caption && n2("div", {
      class: b2.caption
    }, n2("div", {
      class: b2.captionBorder
    }, n2("div", {
      class: b2.captionText
    }, this.caption))), j = "combobox" === this.component?.type || "label" === this.component?.type || "slider" === this.component?.type, P2 = (v3 || w2 || k2) && (M || j) && n2("div", {
      class: b2.separator
    }), f = this.component?.render();
    return n2("div", {
      "aria-label": this.label,
      class: this.classes(y2, e3.widget, `${y2}__layout--${this.layout}`, `${y2}__type--${this.component?.type}`)
    }, n2("calcite-action-bar", {
      class: b2.actionBar,
      expandDisabled: true,
      layout: this.layout
    }, [v3, w2, k2, P2, M, f]));
  }
};
e([y()], w.prototype, "canNext", null), e([y()], w.prototype, "canPlay", null), e([y()], w.prototype, "canPrevious", null), e([y()], w.prototype, "caption", void 0), e([y({
  types: g,
  value: null
})], w.prototype, "component", null), e([y()], w.prototype, "disabled", null), e([y()], w.prototype, "icon", null), e([y()], w.prototype, "label", null), e([y()], w.prototype, "layout", null), e([y()], w.prototype, "loop", null), e([y(), e2("esri/widgets/ValuePicker/t9n/ValuePicker")], w.prototype, "messages", void 0), e([y(), e2("esri/t9n/common")], w.prototype, "messagesCommon", void 0), e([y()], w.prototype, "playRate", null), e([y()], w.prototype, "values", null), e([y(), e4(["animate", "next", "pause", "play", "previous"])], w.prototype, "viewModel", void 0), e([y({
  type: p4,
  nonNullable: true
})], w.prototype, "visibleElements", void 0), w = e([a("esri.widgets.ValuePicker")], w);
var x = w;
export {
  x as default
};
//# sourceMappingURL=ValuePicker-BDAISLVG.js.map
