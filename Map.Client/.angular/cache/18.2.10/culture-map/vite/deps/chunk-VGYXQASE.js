import {
  e as e3
} from "./chunk-HBMA4SRU.js";
import {
  B,
  e2
} from "./chunk-WYMXVOAT.js";
import {
  n as n3
} from "./chunk-K7TO5IIO.js";
import {
  m
} from "./chunk-CQDYITZC.js";
import {
  s as s3
} from "./chunk-YVULORT6.js";
import {
  s as s2
} from "./chunk-NKCPFCP3.js";
import {
  V
} from "./chunk-EITGQLII.js";
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
import {
  n as n2
} from "./chunk-2MMLMOWS.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/Slider/css.js
var e4 = "esri-slider";
var t = {
  base: e4,
  reversed: `${e4}--reversed`,
  horizontalLayout: `${e4}--horizontal`,
  verticalLayout: `${e4}--vertical`,
  contentElement: `${e4}__content`,
  extraContentElement: `${e4}__extra-content`,
  trackElement: `${e4}__track`,
  ticksContainerElement: `${e4}__ticks`,
  tickElement: `${e4}__tick`,
  tickLabelElement: `${e4}__tick-label`,
  maxElement: `${e4}__max`,
  minElement: `${e4}__min`,
  maxElementInteractive: `${e4}__max--interactive`,
  minElementInteractive: `${e4}__min--interactive`,
  rangeElementActive: `${e4}__range--active`,
  rangeInput: `${e4}__range-input`,
  anchorElement: `${e4}__anchor`,
  movingAnchorElement: `${e4}__anchor--moving`,
  lastMovedAnchorElement: `${e4}__anchor--moved`,
  anchorElementActive: `${e4}__anchor--active`,
  anchorElementIndexPrefix: `${e4}__anchor-`,
  segmentElement: `${e4}__segment`,
  segmentElementIndexPrefix: `${e4}__segment-`,
  segmentElementInteractive: `${e4}__segment--interactive`,
  segmentElementActive: `${e4}__segment--active`,
  effectiveSegmentElement: `${e4}__effective-segment`,
  effectiveMaxSegmentElement: `${e4}__effective-max-segment`,
  effectiveMinSegmentElement: `${e4}__effective-min-segment`,
  thumbElement: `${e4}__thumb`,
  labelElement: `${e4}__label`,
  labelElementInteractive: `${e4}__label--interactive`,
  labelInput: `${e4}__label-input`
};

// ../../../node_modules/@arcgis/core/widgets/Slider/SliderViewModel.js
var o = class extends S {
  constructor(t2) {
    super(t2), this.precision = 4, this.thumbsConstrained = true;
  }
  set effectiveMax(t2) {
    this.setEffectiveMax(t2);
  }
  set effectiveMin(t2) {
    this.setEffectiveMin(t2);
  }
  set labelFormatFunction(t2) {
    this._set("labelFormatFunction", t2);
  }
  set inputFormatFunction(t2) {
    this._set("inputFormatFunction", t2);
  }
  set inputParseFunction(t2) {
    this._set("inputParseFunction", t2);
  }
  get labels() {
    const {
      max: t2,
      min: e5,
      values: i
    } = this, s4 = i?.length ? i.map((t3, e6) => this.getLabelForValue(t3, "value", e6)) : [];
    return {
      max: this.getLabelForValue(t2, "max"),
      min: this.getLabelForValue(e5, "min"),
      values: s4
    };
  }
  set max(t2) {
    this.setMax(t2);
  }
  set min(t2) {
    this.setMin(t2);
  }
  get state() {
    const {
      max: t2,
      min: e5
    } = this;
    return null != t2 && null != e5 && t2 > e5 ? "ready" : "disabled";
  }
  set values(t2) {
    const {
      max: e5,
      min: i
    } = this, s4 = this.values;
    s4 && t2 && s4.length === t2.length && s4.every((e6, i2) => e6 === t2[i2]) || (this._set("values", null), t2?.length && (null != i && t2.some((t3) => t3 < i) && (this.min = Math.min(...t2)), null != e5 && t2.some((t3) => t3 > e5) && (this.max = Math.max(...t2))), this._set("values", t2));
  }
  toPrecision(t2) {
    return parseFloat(t2.toFixed(this.precision));
  }
  defaultLabelFormatFunction(t2) {
    const {
      max: e5,
      min: i,
      precision: s4
    } = this, n4 = null != e5 && null != i && e5 - i > 10 ? 2 : s4;
    return parseFloat(t2.toFixed(n4)).toString();
  }
  defaultInputFormatFunction(t2) {
    return t2.toString();
  }
  defaultInputParseFunction(t2) {
    return parseFloat(t2);
  }
  getBounds() {
    const {
      effectiveMax: t2,
      effectiveMin: e5,
      max: i,
      min: s4
    } = this;
    return {
      min: null != e5 && null != s4 ? Math.max(s4, e5) : s4,
      max: null != t2 && null != i ? Math.min(i, t2) : i
    };
  }
  getBoundsForValueAtIndex(t2) {
    const {
      thumbsConstrained: e5,
      values: i
    } = this, {
      min: s4,
      max: n4
    } = this.getBounds();
    if (e5 && i) {
      const e6 = t2 - 1, r = t2 + 1;
      return {
        min: null != i[e6] ? i[e6] : s4,
        max: null != i[r] ? i[r] : n4
      };
    }
    return {
      min: s4,
      max: n4
    };
  }
  getLabelForValue(t2, e5, i) {
    return null == t2 ? null : this.labelFormatFunction ? this.labelFormatFunction(t2, e5, i) : this.defaultLabelFormatFunction(t2);
  }
  setMax(t2) {
    const {
      max: e5,
      values: i
    } = this;
    if (null == t2) return void this._set("max", null);
    if (isNaN(t2)) return void this._logError("slider:invalid-value", "Supplied value for property 'max' is NaN.");
    const s4 = this.toPrecision(t2);
    if (e5 !== s4 && (this._set("max", s4), i?.length)) for (let n4 = 0; n4 < i.length; n4++) s4 < i[n4] && this.setValue(n4, s4);
  }
  setMin(t2) {
    const {
      min: e5,
      values: i
    } = this;
    if (null == t2) return void this._set("min", null);
    if (isNaN(t2)) return void this._logError("slider:invalid-value", "Supplied value for property 'min' is NaN.");
    const s4 = this.toPrecision(t2);
    if (e5 !== s4 && (this._set("min", s4), i?.length)) for (let n4 = 0; n4 < i.length; n4++) s4 > i[n4] && this.setValue(n4, s4);
  }
  setEffectiveMax(t2) {
    if (null == t2) return void this._set("effectiveMax", null);
    if (isNaN(t2)) return void this._logError("slider:invalid-value", "Supplied value for property 'effectiveMax' is NaN.");
    const e5 = this.toPrecision(t2);
    this.effectiveMax !== e5 && this._set("effectiveMax", this._applyBoundsToValue(e5));
  }
  setEffectiveMin(t2) {
    if (null == t2) return void this._set("effectiveMin", null);
    if (isNaN(t2)) return void this._logError("slider:invalid-value", "Supplied value for property 'effectiveMin' is NaN.");
    const e5 = this.toPrecision(t2);
    this.effectiveMin !== e5 && this._set("effectiveMin", this._applyBoundsToValue(e5));
  }
  setValue(t2, e5) {
    if (isNaN(e5)) return void this._logError("slider:invalid-value", "Supplied value for member of property 'values' is NaN.");
    const {
      values: i
    } = this;
    if (null == i) return void this._logError("slider:invalid-value", "Supplied value for member of property 'values' is null.");
    const s4 = i[t2], n4 = this.toPrecision(e5);
    if (s4 === n4) return;
    const r = [...i];
    r[t2] = n4, this._set("values", r), this.notifyChange("labels");
  }
  _applyBoundsToValue(t2) {
    const {
      max: e5,
      min: i
    } = this;
    return null != i && t2 < i ? i : null != e5 && t2 > e5 ? e5 : t2;
  }
  _logError(t2, e5, n4) {
    n.getLogger(this).error(new s(t2, e5, n4));
  }
};
e([y()], o.prototype, "effectiveMax", null), e([y()], o.prototype, "effectiveMin", null), e([y()], o.prototype, "labelFormatFunction", null), e([y()], o.prototype, "inputFormatFunction", null), e([y()], o.prototype, "inputParseFunction", null), e([y({
  readOnly: true
})], o.prototype, "labels", null), e([y()], o.prototype, "max", null), e([y()], o.prototype, "min", null), e([y()], o.prototype, "precision", void 0), e([y({
  readOnly: true
})], o.prototype, "state", null), e([y()], o.prototype, "thumbsConstrained", void 0), e([y()], o.prototype, "values", null), o = e([a("esri.widgets.Slider.SliderViewModel")], o);
var l = o;

// ../../../node_modules/@arcgis/core/widgets/Slider.js
var _ = {
  showInput: "Enter",
  hideInput1: "Enter",
  hideInput2: "Escape",
  hideInput3: "Tab",
  moveAnchorUp: "ArrowUp",
  moveAnchorDown: "ArrowDown",
  moveAnchorLeft: "ArrowLeft",
  moveAnchorRight: "ArrowRight",
  moveAnchorToMax: "End",
  moveAnchorToMin: "Home"
};
var p = {
  labels: false,
  rangeLabels: false
};
var v = class extends B {
  constructor(e5, i) {
    super(e5, i), this._activeLabelInputIndex = null, this._anchorElements = [], this._dragged = false, this._dragStartInfo = null, this._focusedAnchorIndex = null, this._isMinInputActive = false, this._isMaxInputActive = false, this._lastMovedHandleIndex = null, this._positionPrecision = 5, this._segmentDragStartInfo = null, this._trackHeight = null, this._trackWidth = null, this._zIndices = [], this._zIndexOffset = 3, this.disabled = false, this.draggableSegmentsEnabled = true, this.effectiveSegmentElements = new V(), this.extraNodes = [], this.inputCreatedFunction = null, this.labelElements = new V(), this.labelInputsEnabled = false, this.maxLabelElement = null, this.messages = null, this.minLabelElement = null, this.rangeLabelInputsEnabled = false, this.segmentElements = new V(), this.snapOnClickEnabled = true, this.steps = null, this.syncedSegmentsEnabled = false, this.thumbCreatedFunction = null, this.thumbElements = new V(), this.tickElements = new V(), this.trackElement = null, this.viewModel = new l(), this.visibleElements = __spreadValues({}, p), this._onAnchorPointerDown = this._onAnchorPointerDown.bind(this), this._onAnchorPointerMove = this._onAnchorPointerMove.bind(this), this._onAnchorPointerUp = this._onAnchorPointerUp.bind(this), this._onLabelPointerDown = this._onLabelPointerDown.bind(this), this._onLabelPointerUp = this._onLabelPointerUp.bind(this), this._onSegmentPointerDown = this._onSegmentPointerDown.bind(this), this._onSegmentPointerMove = this._onSegmentPointerMove.bind(this), this._onSegmentPointerUp = this._onSegmentPointerUp.bind(this), this._onTrackPointerDown = this._onTrackPointerDown.bind(this), this._onTrackPointerMove = this._onTrackPointerMove.bind(this), this._onTrackPointerUp = this._onTrackPointerUp.bind(this);
  }
  destroy() {
    document.removeEventListener("pointerup", this._onLabelPointerUp), document.removeEventListener("pointermove", this._onLabelPointerMove), document.removeEventListener("pointerup", this._onAnchorPointerUp), document.removeEventListener("pointermove", this._onAnchorPointerMove), this.labelElements.removeAll(), this.labelElements.destroy(), this.segmentElements.removeAll(), this.segmentElements.destroy(), this.effectiveSegmentElements.removeAll(), this.effectiveSegmentElements.destroy(), this.thumbElements.removeAll(), this.thumbElements.destroy(), this.tickElements.removeAll(), this.tickElements.destroy();
  }
  get effectiveMax() {
    return this.viewModel.effectiveMax;
  }
  set effectiveMax(e5) {
    this.viewModel.effectiveMax = e5;
  }
  get effectiveMin() {
    return this.viewModel.effectiveMin;
  }
  set effectiveMin(e5) {
    this.viewModel.effectiveMin = e5;
  }
  get inputFormatFunction() {
    return this.viewModel.inputFormatFunction;
  }
  set inputFormatFunction(e5) {
    this.viewModel.inputFormatFunction = e5;
  }
  get inputParseFunction() {
    return this.viewModel.inputParseFunction;
  }
  set inputParseFunction(e5) {
    this.viewModel.inputParseFunction = e5;
  }
  get icon() {
    return "caret-double-horizontal";
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
  get labelFormatFunction() {
    return this.viewModel.labelFormatFunction;
  }
  set labelFormatFunction(e5) {
    this.viewModel.labelFormatFunction = e5;
  }
  get labels() {
    return this.viewModel.labels;
  }
  set layout(e5) {
    ["vertical", "vertical-reversed", "horizontal", "horizontal-reversed"].includes(e5) || (e5 = "horizontal"), this._set("layout", e5);
  }
  get max() {
    return this.viewModel.max;
  }
  set max(e5) {
    this.viewModel.max = e5;
  }
  get min() {
    return this.viewModel.min;
  }
  set min(e5) {
    this.viewModel.min = e5;
  }
  get precision() {
    return this.viewModel.precision;
  }
  set precision(e5) {
    this.viewModel.precision = e5;
  }
  get state() {
    const {
      _activeLabelInputIndex: e5,
      _isMaxInputActive: t2,
      _isMinInputActive: i,
      _dragStartInfo: n4,
      _segmentDragStartInfo: s4,
      disabled: o2,
      viewModel: r
    } = this;
    return o2 ? "disabled" : !(null === e5 && !t2 && !i) ? "editing" : null != n4 || null != s4 ? "dragging" : r.state;
  }
  get thumbsConstrained() {
    return this.viewModel.thumbsConstrained;
  }
  set thumbsConstrained(e5) {
    this.viewModel.thumbsConstrained = e5;
  }
  set tickConfigs(e5) {
    this._set("tickConfigs", e5), this.scheduleRender();
  }
  get values() {
    return this.viewModel.values;
  }
  set values(e5) {
    this.viewModel.values = e5;
  }
  castVisibleElements(e5) {
    return __spreadValues(__spreadValues({}, p), e5);
  }
  render() {
    const {
      label: e5
    } = this, t2 = this.classes(t.base, e3.widget, this._isHorizontalLayout() ? t.horizontalLayout : t.verticalLayout, this._isReversedLayout() ? t.reversed : null, this._isDisabled() ? e3.disabled : null);
    return this._storeTrackDimensions(), n3("div", {
      afterCreate: this._afterContainerCreate,
      "aria-label": e5,
      bind: this,
      class: t2,
      "touch-action": "none"
    }, this._renderContent());
  }
  toNextStep(e5) {
    this._toStep(e5, 1);
  }
  toPreviousStep(e5) {
    this._toStep(e5, -1);
  }
  getCurrentPosition() {
    return this._positionFromValue(this.values?.[0] ?? 0);
  }
  _renderContent() {
    const {
      max: e5,
      min: t2
    } = this;
    if (!(null == t2 || null == e5 || t2 >= e5)) return [this._renderMin(), this._renderSliderContainer(), this._renderMax()];
  }
  _renderSliderContainer() {
    return n3("div", {
      bind: this,
      class: t.contentElement,
      key: "slider-container"
    }, this._renderTrackElement(), this._renderTicksContainer(), this._renderExtraContentElements());
  }
  _renderTrackElement() {
    return n3("div", {
      afterCreate: this._afterTrackCreate,
      afterRemoved: this._afterTrackRemoved,
      bind: this,
      class: t.trackElement,
      "touch-action": "none"
    }, this._renderEffectiveSegmentElements(), this._renderSegmentElements(), this._renderAnchorElements());
  }
  _renderEffectiveSegmentElements() {
    if (!this.trackElement || !this.values?.length) return;
    const e5 = null != this.effectiveMax, t2 = null != this.effectiveMin;
    if (!e5 && !t2) return;
    const {
      max: i,
      min: n4,
      viewModel: s4
    } = this, o2 = s4.getBounds(), r = [];
    return t2 && r.push(this._renderEffectiveSegmentElement(n4, o2.min, true)), e5 && r.push(this._renderEffectiveSegmentElement(o2.max, i, false)), r;
  }
  _renderSegmentElements() {
    if (!this.trackElement || !this.values?.length) return;
    const e5 = this.values.length, t2 = [];
    for (let i = 0; i <= e5; i++) t2.push(this._renderSegmentElement(i));
    return t2;
  }
  _renderSegmentElement(e5) {
    const {
      _trackHeight: t2,
      _trackWidth: i,
      draggableSegmentsEnabled: n4,
      id: s4,
      state: o2
    } = this, r = this.values, l2 = this._isHorizontalLayout(), h = l2 ? i : t2, u = this.viewModel.getBounds(), c = this._positionFromValue(u.max), m2 = this._positionFromValue(u.min), _2 = e5 === r?.length ? null : e5, p2 = 0 === e5 ? null : e5 - 1, v2 = null != _2, g2 = null != p2;
    let f2, b2;
    const E2 = [...r].sort((e6, t3) => e6 - t3);
    this._isReversedLayout() ? (f2 = g2 ? this._positionFromValue(E2[p2]) : m2, b2 = v2 ? this._positionFromValue(E2[_2]) : c) : (f2 = v2 ? this._positionFromValue(E2[_2]) : c, b2 = g2 ? this._positionFromValue(E2[p2]) : m2);
    const x2 = this._applyPrecisionToPosition(100 * b2 / h), y3 = (f2 - b2) / h, k2 = l2 ? `transform: translate(${x2}%, 0px) scale(${y3}, 1);` : `transform: translate(0px, ${x2}%) scale(1, ${y3});`, P2 = this.classes(t.segmentElement, t.segmentElementIndexPrefix + e5, n4 && v2 && g2 && "disabled" !== o2 ? t.segmentElementInteractive : null);
    return n3("div", {
      afterCreate: this._afterSegmentCreate,
      afterRemoved: this._afterSegmentRemoved,
      bind: this,
      class: P2,
      "data-max-thumb-index": _2,
      "data-min-thumb-index": p2,
      "data-segment-index": e5,
      key: `${s4}-segment-${e5}`,
      style: k2,
      "touch-action": "none"
    });
  }
  _renderEffectiveSegmentElement(e5, t2, i) {
    const {
      _trackHeight: n4,
      _trackWidth: s4,
      layout: o2
    } = this, r = this._positionFromValue(e5), l2 = this._positionFromValue(t2), h = this._isHorizontalLayout(), u = h ? s4 : n4, c = this._applyPrecisionToPosition(100 * r / u);
    let m2 = null;
    if ("horizontal" === o2) {
      const e6 = i ? u - l2 : l2, t3 = r === u ? 0 : c;
      m2 = `clip-path: inset(0% ${l2 === u ? 0 : this._applyPrecisionToPosition(e6 / u * 100)}% 0% ${t3}%);`;
    } else {
      const e6 = (l2 - r) / u;
      m2 = h ? `transform: translate(${c}%, 0px) scale(${e6}, 1);` : `transform: translate(0px, ${c}%) scale(1, ${e6});`;
    }
    const _2 = i ? t.effectiveMinSegmentElement : t.effectiveMaxSegmentElement, p2 = this.classes(t.segmentElement, t.effectiveSegmentElement, _2);
    return n3("div", {
      afterCreate: this._afterEffectiveSegmentCreate,
      afterRemoved: this._afterEffectiveSegmentRemoved,
      bind: this,
      class: p2,
      style: m2,
      "touch-action": "none"
    });
  }
  _renderAnchorElements() {
    const {
      trackElement: e5,
      values: t2
    } = this;
    if (t2?.length) return this._zIndices = t2.map((e6, i) => {
      const n4 = this._positionFromValue(e6), s4 = this._positionToPercent(n4), o2 = (this._isHorizontalLayout() ? s4 > 50 : s4 < 50) ? -1 : 1;
      return this._zIndexOffset + (t2.length + o2 * i);
    }), e5 && t2 && t2.length ? t2.map((e6, t3) => this._renderAnchorElement(e6, t3)) : null;
  }
  _renderAnchorElement(e5, t2) {
    const i = this._positionFromValue(e5), n4 = this._valueFromPosition(i);
    if (null == n4 || isNaN(n4)) return;
    const {
      _dragStartInfo: s4,
      _lastMovedHandleIndex: o2,
      id: r,
      layout: l2,
      visibleElements: {
        labels: h
      }
    } = this, u = this.values, c = s4 && s4.index === t2, _2 = o2 === t2, p2 = this.classes(t.anchorElement, t.anchorElementIndexPrefix + t2, c ? t.movingAnchorElement : null, _2 ? t.lastMovedAnchorElement : null), v2 = this.labels.values[t2], g2 = this._getStyleForAnchor(e5, t2, c || _2), {
      min: f2,
      max: b2
    } = this.viewModel.getBoundsForValueAtIndex(t2), {
      disabled: E2,
      messages: x2
    } = this, y3 = 2 === u.length ? s3(0 === t2 ? x2.rangeMinimum : x2.rangeMaximum, {
      value: e5
    }) : v2, k2 = 1 === u.length ? null : 0 === t2 ? `${r}-handle-${t2 + 1}` : t2 === u.length - 1 ? `${r}-handle-${t2 - 1}` : `${r}-handle-${t2 - 1} ${r}-handle-${t2 + 1}`;
    return n3("div", {
      afterCreate: this._afterAnchorCreate,
      afterRemoved: this._afterAnchorRemoved,
      afterUpdate: this._afterAnchorUpdate,
      "aria-controls": k2,
      "aria-label": x2.sliderValue,
      "aria-labelledby": h ? `${r}-label-${t2}` : null,
      "aria-orientation": l2,
      "aria-valuemax": b2?.toString(),
      "aria-valuemin": f2?.toString(),
      "aria-valuenow": e5.toString(),
      "aria-valuetext": y3,
      bind: this,
      class: p2,
      "data-thumb-index": t2,
      "data-value": e5,
      id: `${r}-handle-${t2}`,
      key: `${r}-handle-${t2}`,
      onkeydown: this._onAnchorKeyDown,
      role: "slider",
      style: g2,
      tabIndex: E2 ? -1 : 0,
      "touch-action": "none"
    }, n3("span", {
      afterCreate: this._afterThumbCreate,
      afterRemoved: this._afterThumbRemoved,
      bind: this,
      class: t.thumbElement,
      "data-thumb-index": t2,
      "touch-action": "none"
    }), this.renderThumbLabel(t2));
  }
  renderThumbLabel(e5) {
    const {
      id: t2,
      labels: i,
      labelInputsEnabled: n4,
      state: s4
    } = this, o2 = this.visibleElements.labels, r = i.values[e5], l2 = this.classes(t.labelElement, o2 ? null : e3.hidden, n4 && "disabled" !== s4 ? t.labelElementInteractive : null);
    return n3("span", {
      afterCreate: this._afterLabelCreate,
      afterRemoved: this._afterLabelRemoved,
      "aria-hidden": (!o2).toString(),
      bind: this,
      class: l2,
      "data-thumb-index": e5,
      id: `${t2}-label-${e5}`,
      key: `${t2}-label-${e5}`,
      role: n4 ? "button" : null,
      "touch-action": "none"
    }, this._activeLabelInputIndex === e5 ? this._renderValueInput(e5) : r);
  }
  _renderValueInput(e5) {
    const {
      disabled: t2,
      values: i
    } = this;
    if (null == i) return;
    const n4 = i[e5];
    return n3("input", {
      afterCreate: this._afterInputCreate,
      "aria-label": this.messages.sliderValue,
      bind: this,
      class: t.labelInput,
      "data-input-index": e5,
      "data-input-type": "thumb",
      key: `value-input-${e5}`,
      onblur: this._onLabelInputBlur,
      onkeydown: this._onInputKeyDown,
      required: true,
      tabIndex: t2 ? -1 : 0,
      type: "text",
      value: this._formatInputValue(n4, "value", e5)
    });
  }
  _renderMax() {
    const {
      _isMaxInputActive: e5,
      labels: t2,
      rangeLabelInputsEnabled: i,
      state: n4
    } = this, s4 = this.visibleElements.rangeLabels, o2 = this.classes(t.maxElement, {
      [e3.hidden]: !s4,
      [t.maxElementInteractive]: i && "disabled" !== n4,
      [t.rangeElementActive]: e5
    });
    return n3("div", {
      afterCreate: this._afterMaxLabelCreate,
      "aria-hidden": (!s4).toString(),
      bind: this,
      class: o2,
      onclick: this._onMaxLabelClick,
      onkeydown: this._onMaxLabelKeyDown,
      role: i ? "button" : null,
      tabIndex: !this.disabled && i ? 0 : -1
    }, e5 ? this._renderMaxInput() : t2.max);
  }
  _renderMin() {
    const {
      _isMinInputActive: e5,
      labels: t2,
      rangeLabelInputsEnabled: i,
      state: n4
    } = this, s4 = this.visibleElements.rangeLabels, o2 = this.classes(t.minElement, {
      [e3.hidden]: !s4,
      [t.minElementInteractive]: i && "disabled" !== n4,
      [t.rangeElementActive]: e5
    });
    return n3("div", {
      afterCreate: this._afterMinLabelCreate,
      "aria-hidden": (!s4).toString(),
      bind: this,
      class: o2,
      onclick: this._onMinLabelClick,
      onkeydown: this._onMinLabelKeyDown,
      role: i ? "button" : null,
      tabIndex: !this.disabled && i ? 0 : -1
    }, e5 ? this._renderMinInput() : t2.min);
  }
  _renderMaxInput() {
    return n3("input", {
      afterCreate: this._afterInputCreate,
      "aria-label": this.messages.maximumValue,
      bind: this,
      class: t.rangeInput,
      "data-input-type": "max",
      onblur: this._onMaxInputBlur,
      onkeydown: this._onInputKeyDown,
      required: true,
      tabIndex: this.disabled ? -1 : 0,
      type: "text",
      value: this._formatInputValue(this.max, "max")
    });
  }
  _renderMinInput() {
    return n3("input", {
      afterCreate: this._afterInputCreate,
      "aria-label": this.messages.minimumValue,
      bind: this,
      class: t.rangeInput,
      "data-input-type": "min",
      onblur: this._onMinInputBlur,
      onkeydown: this._onInputKeyDown,
      required: true,
      tabIndex: this.disabled ? -1 : 0,
      type: "text",
      value: this._formatInputValue(this.min, "min")
    });
  }
  _renderExtraContentElements() {
    return n3("div", {
      bind: this,
      class: t.extraContentElement
    }, this.extraNodes);
  }
  _renderTicksContainer() {
    if (this.tickConfigs && this.trackElement && (0 !== this._trackHeight || 0 !== this._trackWidth)) return this.tickConfigs.map((e5, t2) => n3("div", {
      class: this.classes(t.ticksContainerElement),
      key: "ticks-container"
    }, this._renderTicks(e5, t2)));
  }
  _renderTicks(e5, i) {
    const {
      mode: n4,
      values: s4
    } = e5;
    if (this.tickElements.at(i) || this.tickElements.add(new V(), i), "position" === n4) {
      const t2 = Array.isArray(s4) ? s4 : [s4];
      return this._calculateTickPositions(t2).map((t3, n5) => this._renderTickGroup(e5, n5, i, t3));
    }
    if ("percent" === n4 && Array.isArray(s4)) {
      const t2 = this.min ?? 0, n5 = (this.max ?? 0) - t2, o3 = s4.map((e6) => this._applyPrecisionToPosition(e6 / 100 * n5 + t2));
      return this._calculateTickPositions(o3).map((t3, n6) => this._renderTickGroup(e5, n6, i, t3));
    }
    const o2 = Array.isArray(s4) && s4.length ? s4[0] : isNaN(s4) ? null : s4, r = this._getTickCounts(o2, e5);
    return this._calculateEquidistantTickPositions(r).map((t2, n5) => this._renderTickGroup(e5, n5, i, t2));
  }
  _renderTickGroup(e5, t2, i, n4) {
    const s4 = "position" === e5.mode ? Array.isArray(e5.values) ? e5.values[t2] : e5.values : this._valueFromPosition(n4);
    if (null != s4 && !isNaN(s4)) return n3("div", {
      afterCreate: this._afterTickGroupCreate,
      afterRemoved: this._afterTickGroupRemoved,
      bind: this,
      "data-config": e5,
      "data-position": n4,
      "data-tick-config-index": i,
      "data-tick-group-index": t2,
      "data-value": s4,
      key: `tick-group-${t2}`,
      onclick: this._onTickGroupClick
    }, this._renderTickLine(e5, t2, i, s4), e5.labelsVisible ? this._renderTickLabel(e5, t2, i, s4) : null);
  }
  _renderTickLine(e5, t2, i, n4) {
    return n3("div", {
      afterCreate: this._afterTickLineCreate,
      "aria-valuenow": n4.toString(),
      bind: this,
      class: t.tickElement,
      "data-config": e5,
      "data-tick-config-index": i,
      "data-tick-group-index": t2,
      "data-value": n4,
      key: `tick-label-${t2}`,
      style: this._getPositionStyleForElement(n4)
    });
  }
  _renderTickLabel(e5, t2, i, n4) {
    const s4 = e5.labelFormatFunction ? e5.labelFormatFunction(n4, "tick", t2) : this.viewModel.getLabelForValue(n4, "tick", t2);
    return n3("div", {
      afterCreate: this._afterTickLabelCreate,
      "aria-label": s4,
      "aria-valuenow": n4.toString(),
      "aria-valuetext": s4,
      bind: this,
      class: t.tickLabelElement,
      "data-config": e5,
      "data-tick-config-index": i,
      "data-tick-group-index": t2,
      "data-value": n4,
      key: `tick-label-${t2}`,
      style: `transform: translate(-50%); ${this._getPositionStyleForElement(n4)}`
    }, s4);
  }
  _afterContainerCreate(e5) {
    this.addHandles(m(e5, () => this.scheduleRender()));
  }
  _afterTrackCreate(e5) {
    this._set("trackElement", e5), e5.addEventListener("pointerdown", this._onTrackPointerDown), this.scheduleRender();
  }
  _afterTrackRemoved(e5) {
    e5.removeEventListener("pointerdown", this._onTrackPointerDown), document.removeEventListener("pointermove", this._onTrackPointerMove), document.removeEventListener("pointerup", this._onTrackPointerUp);
  }
  _afterSegmentCreate(e5) {
    this.segmentElements.add(e5), e5.addEventListener("pointerdown", this._onSegmentPointerDown);
  }
  _afterSegmentRemoved(e5) {
    this.segmentElements.remove(e5), e5.removeEventListener("pointerdown", this._onSegmentPointerDown);
  }
  _afterEffectiveSegmentCreate(e5) {
    this.effectiveSegmentElements.add(e5);
  }
  _afterEffectiveSegmentRemoved(e5) {
    this.effectiveSegmentElements.remove(e5);
  }
  _afterAnchorCreate(e5) {
    if (this._anchorElements.push(e5), e5.addEventListener("pointerdown", this._onAnchorPointerDown), this.thumbCreatedFunction) {
      const t2 = g(e5), i = y2(e5), n4 = this.thumbElements.at(t2), s4 = this.labelElements.at(t2) || null;
      this.thumbCreatedFunction(t2, i, n4, s4);
    }
  }
  _afterAnchorUpdate(e5) {
    if (null != this._focusedAnchorIndex) {
      g(e5) === this._focusedAnchorIndex && (e5.focus(), this._focusedAnchorIndex = null);
    }
  }
  _afterAnchorRemoved(e5) {
    const t2 = this._anchorElements.indexOf(e5, 0);
    t2 > -1 && this._anchorElements.splice(t2, 1), e5.removeEventListener("pointerdown", this._onAnchorPointerDown);
  }
  _afterThumbCreate(e5) {
    this.thumbElements.add(e5);
  }
  _afterThumbRemoved(e5) {
    this.thumbElements.remove(e5);
  }
  _afterLabelCreate(e5) {
    this.labelElements.add(e5), e5.addEventListener("pointerdown", this._onLabelPointerDown), e5.addEventListener("pointerup", this._onLabelPointerUp);
  }
  _afterLabelRemoved(e5) {
    this.labelElements.remove(e5), e5.removeEventListener("pointerdown", this._onLabelPointerDown), e5.removeEventListener("pointerup", this._onLabelPointerUp);
  }
  _afterInputCreate(e5) {
    if (e5.focus(), e5.select(), this.inputCreatedFunction) {
      const t2 = e5.getAttribute("data-input-type"), i = "thumb" === t2 ? f(e5) : null;
      this.inputCreatedFunction(e5, t2, i);
    }
  }
  _afterTickLineCreate(e5) {
    const t2 = k(e5), i = P(e5), n4 = this.tickElements.at(t2), s4 = n4.at(i);
    s4 ? s4.tickElement = e5 : n4.add({
      groupElement: null,
      tickElement: e5,
      labelElement: null
    }, i);
  }
  _afterTickLabelCreate(e5) {
    const t2 = k(e5), i = P(e5), n4 = this.tickElements.at(t2), s4 = n4.at(i);
    s4 ? s4.labelElement = e5 : n4.add({
      groupElement: null,
      labelElement: e5,
      tickElement: null
    }, i);
  }
  _afterTickGroupRemoved(e5) {
    const t2 = k(e5), i = this.tickElements.items[t2], n4 = i?.find((t3) => t3.groupElement === e5);
    n4 && i.remove(n4);
  }
  _afterTickGroupCreate(e5) {
    const t2 = I(e5);
    if (t2?.tickCreatedFunction) {
      const i = k(e5), n4 = P(e5), s4 = y2(e5), o2 = this.tickElements?.at(i)?.at(n4);
      if (o2) {
        o2.groupElement = e5;
        const i2 = o2.tickElement || null, n5 = o2.labelElement || null;
        t2.tickCreatedFunction(s4, i2, n5);
      }
    }
  }
  _afterMaxLabelCreate(e5) {
    this._set("maxLabelElement", e5);
  }
  _afterMinLabelCreate(e5) {
    this._set("minLabelElement", e5);
  }
  _onAnchorKeyDown(e5) {
    if (this._isDisabled() || "editing" === this.state) return;
    const {
      key: t2,
      target: i
    } = e5, n4 = this.values, s4 = g(i), o2 = this._anchorElements[s4], r = n4[s4], a2 = [_.moveAnchorUp, _.moveAnchorDown, _.moveAnchorLeft, _.moveAnchorRight];
    if (t2 === _.showInput && this.labelInputsEnabled) this._activeLabelInputIndex = s4, this.notifyChange("state");
    else if (a2.includes(t2)) {
      e5.preventDefault();
      const {
        steps: i2
      } = this, n5 = t2 === _.moveAnchorUp || t2 === _.moveAnchorRight ? 1 : -1;
      if (null != i2) this._toStep(s4, this._isReversedLayout() ? -1 * n5 : n5);
      else {
        const {
          precision: e6
        } = this, t3 = this._getPositionOfElement(o2), i3 = this._valueFromPosition(t3), r2 = this._isHorizontalLayout() ? n5 : -1 * n5;
        let a4;
        a4 = 0 === e6 ? this._positionFromValue(i3 + r2) : 1 === e6 ? this._positionFromValue(i3 + 0.1 * r2) : t3 + r2, this._toPosition(s4, a4);
      }
      const a3 = this.values[s4];
      r !== a3 && this._emitThumbChangeEvent({
        index: s4,
        oldValue: r,
        value: a3
      });
    } else if (t2 === _.moveAnchorToMax || t2 === _.moveAnchorToMin) {
      e5.preventDefault();
      const {
        min: i2,
        max: n5
      } = this._getAnchorBoundsInPixels(s4), o3 = this._isPositionInverted() ? t2 === _.moveAnchorToMax ? i2 : n5 : t2 === _.moveAnchorToMin ? i2 : n5;
      this._toPosition(s4, o3);
      const a3 = this.values[s4];
      r !== a3 && this._emitThumbChangeEvent({
        index: s4,
        oldValue: r,
        value: a3
      });
    }
  }
  _onAnchorPointerDown(e5) {
    if (this._isDisabled()) return;
    const {
      target: t2,
      clientX: i,
      clientY: n4
    } = e5, s4 = g(t2);
    null != s4 && (e5.preventDefault(), this._anchorElements[s4] && this._anchorElements[s4].focus(), this._storeTrackDimensions(), this._dragStartInfo = {
      clientX: i,
      clientY: n4,
      index: s4,
      position: this._getPositionOfElement(this._anchorElements[s4])
    }, this.notifyChange("state"), document.addEventListener("pointerup", this._onAnchorPointerUp), document.addEventListener("pointermove", this._onAnchorPointerMove));
  }
  _onAnchorPointerMove(e5) {
    if ("editing" === this.state || !this._dragStartInfo) return;
    e5.preventDefault();
    const {
      values: t2,
      _anchorElements: i,
      _dragged: n4,
      _dragStartInfo: s4,
      _dragStartInfo: {
        index: o2,
        position: r
      }
    } = this, {
      clientX: a2,
      clientY: l2
    } = e5, h = n4 ? "drag" : "start", u = i[o2], c = this._getPositionOfElement(u), d = this._applyPrecisionToPosition(this._isHorizontalLayout() ? r + a2 - s4.clientX : r + l2 - s4.clientY);
    if (c === d) return;
    const m2 = t2[o2];
    this._dragged = true, this._toPosition(o2, d);
    const _2 = this.values[o2];
    n4 ? m2 !== _2 && this._emitThumbDragEvent({
      index: o2,
      state: h,
      value: _2
    }) : this._emitThumbDragEvent({
      index: o2,
      state: h,
      value: m2
    });
  }
  _onAnchorPointerUp(e5) {
    if (document.removeEventListener("pointerup", this._onAnchorPointerUp), document.removeEventListener("pointermove", this._onAnchorPointerMove), !this._dragStartInfo) return;
    e5.preventDefault();
    const {
      index: t2
    } = this._dragStartInfo, i = this._dragged, n4 = this.values[t2];
    this._dragged = false, this._dragStartInfo = null, this._lastMovedHandleIndex = t2, this.notifyChange("state"), i ? this._emitThumbDragEvent({
      index: t2,
      state: "stop",
      value: n4
    }) : (this.scheduleRender(), "editing" !== this.state && this._emitThumbClickEvent({
      index: t2,
      value: n4
    }));
  }
  _onTrackPointerDown(e5) {
    const {
      _dragStartInfo: t2,
      snapOnClickEnabled: i,
      state: n4,
      values: s4
    } = this;
    if (this._isDisabled() || "editing" === n4 || t2) return;
    if (document.addEventListener("pointermove", this._onTrackPointerMove), document.addEventListener("pointerup", this._onTrackPointerUp), !i || !s4?.length) return;
    const {
      steps: o2
    } = this, {
      clientX: r,
      clientY: a2
    } = e5, l2 = this._getCursorPositionFromEvent(e5), h = this._valueFromPosition(l2), u = this._getIndexOfNearestValue(h), c = s4[u], d = s4.some((e6, t3) => e6 === c && t3 !== u) && h > c ? s4.lastIndexOf(c) : u;
    if (null == d) return;
    const m2 = s4[d], _2 = null != o2 ? this._calculateNearestStepPosition(l2) : l2;
    this._toPosition(d, _2), this._dragged = true, this._dragStartInfo = {
      clientX: r,
      clientY: a2,
      index: d,
      position: _2
    }, this._focusedAnchorIndex = d, this.notifyChange("state"), this._emitThumbDragEvent({
      index: d,
      state: "start",
      value: m2
    });
    const p2 = this.values[d];
    m2 !== p2 && this._emitThumbDragEvent({
      index: d,
      state: "drag",
      value: p2
    }), document.addEventListener("pointerup", this._onAnchorPointerUp), document.addEventListener("pointermove", this._onAnchorPointerMove);
  }
  _onTrackPointerMove(e5) {
    e5.preventDefault(), this._dragged = true;
  }
  _onTrackPointerUp(e5) {
    if (e5.preventDefault(), document.removeEventListener("pointermove", this._onTrackPointerMove), document.removeEventListener("pointerup", this._onTrackPointerUp), this.snapOnClickEnabled || (this._dragged = false), !this._dragged) {
      const t2 = this._getCursorPositionFromEvent(e5), i = this._valueFromPosition(t2);
      this._emitTrackClickEvent({
        value: i
      });
    }
  }
  _onSegmentPointerDown(e5) {
    e5.preventDefault();
    const t2 = e5.target, i = b(t2), n4 = E(t2), s4 = x(t2);
    if (this._isDisabled() || null == n4 || null == s4) return;
    e5.stopPropagation(), this._storeTrackDimensions(), document.addEventListener("pointerup", this._onSegmentPointerUp);
    const o2 = this._getAnchorDetails(n4), r = this._getAnchorDetails(s4);
    this.syncedSegmentsEnabled ? (this.segmentElements.forEach((e6) => e6.classList.add(t.segmentElementActive)), this._anchorElements.forEach((e6) => e6.classList.add(t.anchorElementActive))) : (this.segmentElements.at(i).classList.add(t.segmentElementActive), this._anchorElements[o2.index]?.classList.add(t.anchorElementActive), this._anchorElements[r.index]?.classList.add(t.anchorElementActive)), this._segmentDragStartInfo = {
      cursorPosition: this._getCursorPositionFromEvent(e5),
      index: i,
      details: this._normalizeSegmentDetails({
        min: o2,
        max: r
      })
    }, this.draggableSegmentsEnabled && (document.addEventListener("pointermove", this._onSegmentPointerMove), this.notifyChange("state"), this._emitSegmentDragEvent({
      index: i,
      state: "start",
      thumbIndices: [n4, s4]
    }));
  }
  _onSegmentPointerMove(e5) {
    if (!this._segmentDragStartInfo) return;
    e5.preventDefault();
    const {
      _trackHeight: t2,
      _trackWidth: i,
      _segmentDragStartInfo: {
        index: n4,
        cursorPosition: s4,
        details: {
          min: o2,
          max: r
        }
      }
    } = this, {
      index: a2,
      position: l2,
      value: h
    } = o2, {
      index: u,
      position: c,
      value: d
    } = r;
    this._dragged = true;
    const m2 = this._getCursorPositionFromEvent(e5);
    if (m2 === s4) return;
    const _2 = this._positionToPercent(s4), p2 = this._positionToPercent(m2) - _2, v2 = this._positionToPercent(l2) + p2, g2 = this._positionToPercent(c) + p2, {
      min: f2
    } = this._getAnchorBoundsAsPercents(a2), {
      max: b2
    } = this._getAnchorBoundsAsPercents(u);
    let E2 = false, x2 = false;
    if (v2 < f2 ? E2 = true : g2 > b2 && (x2 = true), E2) {
      const {
        min: e6,
        max: t3
      } = this.viewModel.getBoundsForValueAtIndex(a2), i2 = this._isPositionInverted() ? t3 : e6, n5 = i2, s5 = d + (i2 - h), o3 = s5 - this.values[u];
      return void (this.syncedSegmentsEnabled ? this._updateAnchorValuesByDifference(o3) : this._updateAnchorValues([a2, u], [n5, s5]));
    }
    if (x2) {
      const {
        min: e6,
        max: t3
      } = this.viewModel.getBoundsForValueAtIndex(u), i2 = this._isPositionInverted() ? e6 : t3, n5 = i2, s5 = h + (i2 - d), o3 = s5 - this.values[a2];
      return void (this.syncedSegmentsEnabled ? this._updateAnchorValuesByDifference(o3) : this._updateAnchorValues([a2, u], [s5, n5]));
    }
    const y3 = this._isHorizontalLayout() ? i : t2, k2 = g2 / 100 * y3, P2 = v2 / 100 * y3, I2 = this.values, A2 = [I2[a2], I2[u]], M = this._getValueForAnchorAtPosition(a2, P2), L = this._getValueForAnchorAtPosition(u, k2);
    this.syncedSegmentsEnabled ? this._updateAnchorValuesByDifference(M - A2[0]) : this._updateAnchorValues([a2, u], [M, L]);
    [this.values[a2], this.values[u]].every((e6, t3) => e6 === A2[t3]) || this._emitSegmentDragEvent({
      index: n4,
      state: "drag",
      thumbIndices: [a2, u]
    });
  }
  _onSegmentPointerUp(e5) {
    if (e5.preventDefault(), document.removeEventListener("pointerup", this._onSegmentPointerUp), document.removeEventListener("pointermove", this._onSegmentPointerMove), !this._segmentDragStartInfo) return;
    const {
      _dragged: t2
    } = this, i = this.min, n4 = this.max, s4 = this.values, {
      index: o2,
      details: {
        min: {
          index: r
        },
        max: {
          index: l2
        }
      }
    } = this._segmentDragStartInfo;
    if (this.segmentElements.forEach((e6) => e6.classList.remove(t.segmentElementActive)), this._anchorElements.forEach((e6) => e6.classList.remove(t.anchorElementActive)), this.draggableSegmentsEnabled) {
      const e6 = n4 - i, t3 = s4[r], a2 = s4[l2];
      this._lastMovedHandleIndex = t3 === a2 ? t3 > e6 / 2 ? r : l2 : null, this._dragged = false, this._segmentDragStartInfo = null, this.notifyChange("state"), this._emitSegmentDragEvent({
        index: o2,
        state: "stop",
        thumbIndices: [r, l2]
      });
    }
    if (!t2) {
      const t3 = this._getCursorPositionFromEvent(e5), i2 = this._valueFromPosition(t3);
      this._emitSegmentClickEvent({
        index: o2,
        value: i2,
        thumbIndices: [r, l2]
      });
    }
  }
  _onTickGroupClick(e5) {
    const t2 = e5.target;
    if (I(t2)) {
      const e6 = k(t2), i = P(t2), n4 = y2(t2);
      this._emitTickClickEvent({
        configIndex: e6,
        groupIndex: i,
        value: n4
      });
    }
  }
  _storeTrackDimensions() {
    if (this.trackElement) {
      const e5 = this._getDimensions(this.trackElement);
      this._trackHeight = this._applyPrecisionToPosition(e5.height), this._trackWidth = this._applyPrecisionToPosition(e5.width);
    }
  }
  _onLabelPointerDown() {
    this._isDisabled() || (this._dragged = false, document.addEventListener("pointerup", this._onAnchorPointerUp), document.addEventListener("pointermove", this._onAnchorPointerMove));
  }
  _onLabelPointerMove() {
    this._isDisabled() || (this._dragged = true);
  }
  _onLabelPointerUp(e5) {
    if (this._isDisabled()) return;
    const t2 = g(e5.target);
    this.labelInputsEnabled && !this._dragged && null != t2 && (this._activeLabelInputIndex = t2), this._dragged = false, this.notifyChange("state"), document.removeEventListener("pointerup", this._onLabelPointerUp), document.removeEventListener("pointermove", this._onLabelPointerMove);
  }
  _onLabelInputBlur(e5) {
    const {
      _activeLabelInputIndex: t2,
      values: i,
      viewModel: n4
    } = this, s4 = e5.target.value;
    if (this._activeLabelInputIndex = null, this.notifyChange("state"), !s4 || null == t2 || null == i) return;
    const o2 = this._parseInputValue(s4, "value", t2), r = i[t2], {
      min: a2,
      max: l2
    } = this.viewModel.getBoundsForValueAtIndex(t2);
    if (o2 < a2 || o2 > l2) return;
    n4.setValue(t2, o2);
    const h = this.values[t2];
    r !== h && this._emitThumbChangeEvent({
      index: t2,
      oldValue: r,
      value: h
    });
  }
  _onInputKeyDown(e5) {
    if (this._isDisabled()) return;
    const {
      key: t2,
      target: i
    } = e5, {
      hideInput1: n4,
      hideInput2: s4,
      hideInput3: o2
    } = _, {
      _activeLabelInputIndex: r,
      _anchorElements: a2
    } = this, l2 = i;
    if (t2 === n4 || t2 === s4 || t2 === o2) {
      e5.stopPropagation();
      const t3 = r;
      l2.blur(), null != t3 ? a2[t3].focus() : l2.parentElement?.focus();
    }
  }
  _onMaxLabelClick() {
    this._isDisabled() || (this._emitMaxRangeLabelClickEvent({
      type: "max-click",
      value: this.max
    }), this.rangeLabelInputsEnabled && (this._isMaxInputActive = true, this.notifyChange("state")));
  }
  _onMaxLabelKeyDown({
    key: e5
  }) {
    this._isDisabled() || e5 !== _.showInput || (this._isMaxInputActive = true, this.notifyChange("state"));
  }
  _onMaxInputBlur(e5) {
    const t2 = e5.target.value;
    if (this._isMaxInputActive = false, this.notifyChange("state"), !t2) return;
    const i = this.max, n4 = this._parseInputValue(t2, "max");
    n4 <= this.min || (this.viewModel.set("max", n4), this.max !== i && this._emitMaxChangeEvent({
      oldValue: i,
      value: this.max
    }));
  }
  _onMinLabelClick() {
    this._isDisabled() || (this._emitMinRangeLabelClickEvent({
      type: "min-click",
      value: this.min
    }), this.rangeLabelInputsEnabled && (this._isMinInputActive = true, this.notifyChange("state")));
  }
  _onMinLabelKeyDown({
    key: e5
  }) {
    this._isDisabled() || e5 !== _.showInput || (this._isMinInputActive = true, this.notifyChange("state"));
  }
  _onMinInputBlur(e5) {
    const t2 = e5.target.value;
    if (this._isMinInputActive = false, this.notifyChange("state"), !t2) return;
    const i = this.min, n4 = this._parseInputValue(t2, "min");
    n4 >= this.max || (this.viewModel.set("min", n4), this.min !== i && this._emitMinChangeEvent({
      oldValue: i,
      value: this.min
    }));
  }
  _isDisabled() {
    return this.disabled || "disabled" === this.state;
  }
  _positionFromValue(e5) {
    const {
      _trackHeight: t2,
      _trackWidth: i
    } = this, n4 = this.min ?? 0, s4 = this.max ?? 0, o2 = s4 - n4;
    if (0 === o2 || null == e5) return 0;
    const r = this._isHorizontalLayout();
    let a2 = r ? this._applyPrecisionToPosition(i * (e5 - n4) / o2) : this._applyPrecisionToPosition(t2 * (s4 - e5) / o2);
    return this._isReversedLayout() && (a2 = r ? i - a2 : t2 - a2), a2;
  }
  _valueFromPosition(e5) {
    const {
      _trackHeight: t2,
      _trackWidth: i,
      precision: n4
    } = this, s4 = this.min ?? 0, o2 = this.max ?? 0, r = o2 - s4;
    let a2 = this._isHorizontalLayout() ? e5 * r / i + s4 : r * (1e3 - e5 / t2 * 1e3) / 1e3 + s4;
    return this._isReversedLayout() && (a2 = o2 + s4 - a2), parseFloat(a2.toFixed(n4));
  }
  _positionToPercent(e5) {
    const {
      _trackHeight: t2,
      _trackWidth: i
    } = this, n4 = 100 * e5 / (this._isHorizontalLayout() ? i : t2);
    return this._applyPrecisionToPosition(n4);
  }
  _applyPrecisionToPosition(e5) {
    return parseFloat(e5.toFixed(this._positionPrecision));
  }
  _isPositionInverted() {
    const {
      layout: e5
    } = this;
    return "horizontal-reversed" === e5 || "vertical" === e5;
  }
  _isHorizontalLayout() {
    return this.layout.includes("horizontal");
  }
  _isReversedLayout() {
    return this.layout.includes("reversed");
  }
  _normalizeSegmentDetails(e5) {
    if (this._isPositionInverted()) {
      const {
        min: t2,
        max: i
      } = e5;
      return {
        min: i,
        max: t2
      };
    }
    return e5;
  }
  _parseInputValue(e5, t2, i) {
    return this.inputParseFunction ? this.inputParseFunction(e5, t2, i) : this.viewModel.defaultInputParseFunction(e5);
  }
  _formatInputValue(e5, t2, i) {
    return this.inputFormatFunction ? this.inputFormatFunction(e5, t2, i) : this.viewModel.defaultInputFormatFunction(e5);
  }
  _getAnchorDetails(e5) {
    const t2 = this.values, i = [...t2].sort((e6, t3) => e6 - t3)[e5], n4 = t2.indexOf(i);
    return {
      index: n4,
      position: this._getPositionOfElement(this._anchorElements[n4]),
      value: i
    };
  }
  _updateAnchorStyle(e5, t2) {
    const i = this._anchorElements[e5];
    i && (this._isHorizontalLayout() ? i.style.left = `${t2}` : i.style.top = `${t2}`);
  }
  _getStyleForAnchor(e5, t2, i) {
    const n4 = this._getPositionStyleForElement(e5);
    if (1 === this.values?.length) return `${n4}`;
    const s4 = this._zIndices[t2];
    return `${n4}; z-index: ${i ? this._zIndexOffset + s4 : s4}`;
  }
  _getPositionStyleForElement(e5) {
    const t2 = this._positionFromValue(e5), i = this._positionToPercent(t2);
    return `${this._isHorizontalLayout() ? "left" : "top"}: ${i}%`;
  }
  _getPositionOfElement(e5) {
    const t2 = this._getDimensions(e5.offsetParent), i = this._getDimensions(e5);
    return this._isHorizontalLayout() ? this._applyPrecisionToPosition(i.left - t2.left) : this._applyPrecisionToPosition(i.top - t2.top);
  }
  _updateAnchorValues(e5, t2) {
    e5.forEach((e6, i) => this._toValue(e6, t2[i]));
  }
  _updateAnchorValuesByDifference(e5) {
    const {
      min: t2,
      max: i,
      values: n4
    } = this;
    n4?.forEach((n5, s4) => this._toValue(s4, Math.max(Math.min(n5 + e5, i), t2)));
  }
  _toValue(e5, t2) {
    if (null != this.steps) {
      t2 = this._getStepValues()[this._getIndexOfNearestStepValue(t2)];
    }
    this._updateAnchorStyle(e5, this._getPositionStyleForElement(t2)), this.viewModel.setValue(e5, t2);
  }
  _toPosition(e5, t2) {
    const i = null != this.steps ? this._getStepValueForAnchorAtPosition(e5, t2) : this._getValueForAnchorAtPosition(e5, t2);
    this._updateAnchorStyle(e5, this._getPositionStyleForElement(i)), this.viewModel.setValue(e5, i);
  }
  _getValueForAnchorAtPosition(e5, t2) {
    const {
      min: i,
      max: n4
    } = this._getAnchorBoundsInPixels(e5), {
      min: s4,
      max: o2
    } = this.viewModel.getBoundsForValueAtIndex(e5);
    let r, a2, l2 = null;
    return this._isPositionInverted() ? (r = s4, a2 = o2) : (r = o2, a2 = s4), l2 = t2 > n4 ? r : t2 < i ? a2 : this._valueFromPosition(t2), l2 > o2 ? l2 = o2 : l2 < s4 && (l2 = s4), l2;
  }
  _getStepValueForAnchorAtPosition(e5, t2) {
    const i = this._getStepValues(), n4 = this._calculateNearestStepPosition(t2), s4 = this._getValueForAnchorAtPosition(e5, n4);
    return i[this._getIndexOfNearestStepValue(s4)];
  }
  _getAnchorBoundsAsPercents(e5) {
    const {
      min: t2,
      max: i
    } = this._getAnchorBoundsInPixels(e5);
    return {
      min: this._positionToPercent(t2),
      max: this._positionToPercent(i)
    };
  }
  _getAnchorBoundsInPixels(e5) {
    const {
      _anchorElements: t2,
      _trackHeight: i,
      _trackWidth: n4,
      effectiveMax: s4,
      effectiveMin: o2,
      thumbsConstrained: r
    } = this, a2 = t2[e5 - 1], l2 = t2[e5 + 1], h = this._isHorizontalLayout() ? n4 : i;
    let u, c;
    return this._isPositionInverted() ? (u = null != o2 ? this._positionFromValue(o2) : h, c = null != s4 ? this._positionFromValue(s4) : 0) : (u = null != s4 ? this._positionFromValue(s4) : h, c = null != o2 ? this._positionFromValue(o2) : 0), r ? this._isPositionInverted() ? {
      max: a2 ? this._getPositionOfElement(a2) : u,
      min: l2 ? this._getPositionOfElement(l2) : c
    } : {
      max: l2 ? this._getPositionOfElement(l2) : u,
      min: a2 ? this._getPositionOfElement(a2) : c
    } : {
      max: u,
      min: c
    };
  }
  _getIndexOfNearestValue(e5) {
    const t2 = this.values;
    return t2.indexOf(t2.reduce((t3, i) => Math.abs(i - e5) < Math.abs(t3 - e5) ? i : t3));
  }
  _getCursorPositionFromEvent(e5) {
    const t2 = this._getDimensions(this.trackElement);
    return this._isHorizontalLayout() ? this._applyPrecisionToPosition(e5.clientX - t2.left) : this._applyPrecisionToPosition(e5.clientY - t2.top);
  }
  _getStepValues() {
    const {
      steps: e5
    } = this;
    if (Array.isArray(e5)) return e5;
    const {
      max: t2,
      min: i
    } = this;
    if (null == i || null == t2 || null == e5) return [];
    const n4 = Math.ceil((t2 - i) / e5), s4 = [];
    for (let o2 = 0; o2 <= n4; o2++) {
      const n5 = i + e5 * o2;
      s4.push(n5 > t2 ? t2 : n5);
    }
    return s4;
  }
  _toStep(e5, t2) {
    const i = this.values[e5], n4 = this._getStepValues(), s4 = n4.indexOf(i);
    let o2 = null;
    if (s4 > -1) {
      let i2 = n4[s4 + t2];
      isNaN(i2) && (i2 = n4[s4]);
      const r = this._positionFromValue(i2);
      o2 = this._getStepValueForAnchorAtPosition(e5, r);
    } else {
      o2 = n4[this._getIndexOfNearestStepValue(i) + t2];
    }
    this.viewModel.setValue(e5, o2);
  }
  _getIndexOfNearestStepValue(e5) {
    const {
      steps: t2
    } = this;
    if (null == t2) return null;
    const i = this._getStepValues(), n4 = i.reduce((t3, i2) => Math.abs(i2 - e5) < Math.abs(t3 - e5) ? i2 : t3);
    return i.indexOf(n4);
  }
  _calculateNearestStepPosition(e5) {
    const t2 = this._valueFromPosition(e5), i = this._getIndexOfNearestStepValue(t2), n4 = this._getStepValues();
    return this._positionFromValue(n4[i]);
  }
  _getTickCounts(e5, t2) {
    const {
      mode: i
    } = t2;
    return "count" === i || "position" === i ? e5 || 0 : "percent" === i && 100 / e5 || 0;
  }
  _calculateTickPositions(e5) {
    return e5.map((e6) => this._positionFromValue(e6));
  }
  _calculateEquidistantTickPositions(e5) {
    const {
      _trackWidth: t2,
      _trackHeight: i
    } = this, n4 = this._isHorizontalLayout() ? t2 : i, s4 = n4 / (e5 - 1), o2 = [];
    if (1 === e5) return [n4 / 2];
    for (let r = 0; r < e5; r++) {
      const e6 = r * s4;
      e6 <= n4 && o2.push(e6);
    }
    return o2;
  }
  _getDimensions(e5) {
    try {
      return n2(e5), e5.getBoundingClientRect();
    } catch (t2) {
      if ("object" == typeof t2 && null !== t2) return new DOMRect(0, 0, 0, 0);
      throw t2;
    }
  }
  _emitTrackClickEvent(e5) {
    this.emit("track-click", __spreadProps(__spreadValues({}, e5), {
      type: "track-click"
    }));
  }
  _emitTickClickEvent(e5) {
    this.emit("tick-click", __spreadProps(__spreadValues({}, e5), {
      type: "tick-click"
    }));
  }
  _emitMaxChangeEvent(e5) {
    this.emit("max-change", __spreadProps(__spreadValues({}, e5), {
      type: "max-change"
    }));
  }
  _emitMinChangeEvent(e5) {
    this.emit("min-change", __spreadProps(__spreadValues({}, e5), {
      type: "min-change"
    }));
  }
  _emitThumbChangeEvent(e5) {
    this.emit("thumb-change", __spreadProps(__spreadValues({}, e5), {
      type: "thumb-change"
    }));
  }
  _emitThumbClickEvent(e5) {
    this.emit("thumb-click", __spreadProps(__spreadValues({}, e5), {
      type: "thumb-click"
    }));
  }
  _emitThumbDragEvent(e5) {
    this.emit("thumb-drag", __spreadProps(__spreadValues({}, e5), {
      type: "thumb-drag"
    }));
  }
  _emitSegmentClickEvent(e5) {
    this.emit("segment-click", __spreadProps(__spreadValues({}, e5), {
      type: "segment-click"
    }));
  }
  _emitSegmentDragEvent(e5) {
    this.emit("segment-drag", __spreadProps(__spreadValues({}, e5), {
      type: "segment-drag"
    }));
  }
  _emitMinRangeLabelClickEvent(e5) {
    this.emit("min-click", e5);
  }
  _emitMaxRangeLabelClickEvent(e5) {
    this.emit("min-click", e5);
  }
};
function g(e5) {
  return e5?.["data-thumb-index"];
}
function f(e5) {
  return e5?.["data-input-index"];
}
function b(e5) {
  return e5?.["data-segment-index"];
}
function E(e5) {
  return e5?.["data-min-thumb-index"];
}
function x(e5) {
  return e5?.["data-max-thumb-index"];
}
function y2(e5) {
  return e5?.["data-value"];
}
function k(e5) {
  return e5?.["data-tick-config-index"];
}
function P(e5) {
  return e5?.["data-tick-group-index"];
}
function I(e5) {
  return e5?.["data-config"];
}
e([y()], v.prototype, "disabled", void 0), e([y()], v.prototype, "draggableSegmentsEnabled", void 0), e([y()], v.prototype, "effectiveMax", null), e([y()], v.prototype, "effectiveMin", null), e([y({
  readOnly: true
})], v.prototype, "effectiveSegmentElements", void 0), e([y()], v.prototype, "extraNodes", void 0), e([y()], v.prototype, "inputCreatedFunction", void 0), e([y()], v.prototype, "inputFormatFunction", null), e([y()], v.prototype, "inputParseFunction", null), e([y()], v.prototype, "icon", null), e([y()], v.prototype, "label", null), e([y({
  readOnly: true
})], v.prototype, "labelElements", void 0), e([y()], v.prototype, "labelInputsEnabled", void 0), e([y()], v.prototype, "labelFormatFunction", null), e([y({
  readOnly: true
})], v.prototype, "labels", null), e([y({
  value: "horizontal"
})], v.prototype, "layout", null), e([y()], v.prototype, "max", null), e([y({
  readOnly: true
})], v.prototype, "maxLabelElement", void 0), e([y(), e2("esri/widgets/Slider/t9n/Slider")], v.prototype, "messages", void 0), e([y()], v.prototype, "min", null), e([y({
  readOnly: true
})], v.prototype, "minLabelElement", void 0), e([y()], v.prototype, "precision", null), e([y()], v.prototype, "rangeLabelInputsEnabled", void 0), e([y({
  readOnly: true
})], v.prototype, "segmentElements", void 0), e([y()], v.prototype, "snapOnClickEnabled", void 0), e([y({
  readOnly: true
})], v.prototype, "state", null), e([y()], v.prototype, "steps", void 0), e([y()], v.prototype, "syncedSegmentsEnabled", void 0), e([y()], v.prototype, "thumbsConstrained", null), e([y()], v.prototype, "thumbCreatedFunction", void 0), e([y({
  readOnly: true
})], v.prototype, "thumbElements", void 0), e([y()], v.prototype, "tickConfigs", null), e([y({
  readOnly: true
})], v.prototype, "tickElements", void 0), e([y({
  readOnly: true
})], v.prototype, "trackElement", void 0), e([y()], v.prototype, "values", null), e([y()], v.prototype, "viewModel", void 0), e([y()], v.prototype, "visibleElements", void 0), e([s2("visibleElements")], v.prototype, "castVisibleElements", null), v = e([a("esri.widgets.Slider")], v);
var A = v;

export {
  l,
  A
};
//# sourceMappingURL=chunk-VGYXQASE.js.map
