import {
  y as y2
} from "./chunk-2DUNFKZA.js";
import {
  I
} from "./chunk-OUEC6DVS.js";
import {
  c as c2,
  o
} from "./chunk-YBWOLLLC.js";
import {
  e as e5
} from "./chunk-Q6IZWY56.js";
import {
  l
} from "./chunk-JBQJ3BUL.js";
import {
  c,
  p
} from "./chunk-STVIJ4IV.js";
import {
  e as e4
} from "./chunk-HBMA4SRU.js";
import {
  B,
  e2 as e3,
  r
} from "./chunk-WYMXVOAT.js";
import {
  i,
  n
} from "./chunk-K7TO5IIO.js";
import {
  P,
  d
} from "./chunk-6WHTZNUH.js";
import {
  V
} from "./chunk-EITGQLII.js";
import {
  e as e2
} from "./chunk-4Z5SGKRM.js";
import {
  S,
  e3 as e
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  u
} from "./chunk-2MMLMOWS.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  O
} from "./chunk-DXLOWWK7.js";
import {
  __objRest
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/support/LabeledSwitch.js
var l2 = () => Promise.all([r({
  icon: () => import("./calcite-icon-FE3MORNT.js"),
  label: () => import("./calcite-label-NSQ5QQOX.js"),
  switch: () => import("./calcite-switch-OIFS4TEC.js"),
  tooltip: () => import("./calcite-tooltip-AYI56I5U.js")
})]);
var i2 = "esri-labeled-switch";
var o2 = {
  label: `${i2}__label`,
  labelContent: `${i2}__label-content`,
  icon: `${i2}__icon`,
  tooltip: `${i2}__tooltip`
};
function s2({
  checked: e6,
  disabled: l5,
  hint: i3,
  key: s6,
  label: n3,
  onChange: a3
}) {
  return n("calcite-label", {
    class: o2.label,
    disabled: l5,
    key: s6,
    layout: "inline-space-between",
    scale: "s"
  }, n("div", {
    class: o2.labelContent,
    key: "label-content"
  }, i3 ? n(i, null, n("div", null, n3), n("calcite-icon", {
    class: o2.icon,
    icon: "information",
    id: s6,
    scale: "s"
  }), n("calcite-tooltip", {
    class: o2.tooltip,
    referenceElement: s6
  }, i3)) : n3), n("calcite-switch", {
    checked: e6,
    disabled: l5,
    scale: "s",
    onCalciteSwitchChange: (e7) => a3(e7.target.checked)
  }));
}

// ../../../node_modules/@arcgis/core/widgets/support/SketchTooltipControls/VisibleElements.js
var s3 = class extends S {
  constructor(o3) {
    super(o3), this.directionModePicker = false, this.header = false, this.labelsToggle = true, this.tooltipsToggle = true;
  }
};
e2([y({
  type: Boolean,
  nonNullable: true
})], s3.prototype, "directionModePicker", void 0), e2([y({
  type: Boolean,
  nonNullable: true
})], s3.prototype, "header", void 0), e2([y({
  type: Boolean,
  nonNullable: true
})], s3.prototype, "labelsToggle", void 0), e2([y({
  type: Boolean,
  nonNullable: true
})], s3.prototype, "tooltipsToggle", void 0), s3 = e2([a("esri.widgets.support.SketchTooltipControls.VisibleElements")], s3);
var l3 = s3;

// ../../../node_modules/@arcgis/core/widgets/support/SketchTooltipControls.js
var m = "esri-sketch-tooltip-controls";
var g = {
  base: m,
  block: `${m}__block`,
  blockContent: `${m}__block-content`,
  hintIcon: `${m}__hint-icon`,
  radioButtonLabelWrapper: `${m}__radio-button-label-wrapper`
};
var u2 = class extends B {
  constructor(e6, t2) {
    super(e6, t2), this.viewModel = null, this.visibleElements = new l3(), this.sketchOptions = new l(), this.viewType = void 0, this._onTooltipsEnabledChange = (e7) => {
      this.sketchOptions.tooltips.enabled = e7;
    }, this._onLabelsEnabledChange = (e7) => {
      this.sketchOptions.labels.enabled = e7;
    }, this._onDirectionModeChange = (e7) => {
      this.sketchOptions.values.directionMode = e7.target.selectedItem.value;
    };
  }
  loadDependencies() {
    return Promise.all([r({
      block: () => import("./calcite-block-PSHTVVZX.js"),
      label: () => import("./calcite-label-NSQ5QQOX.js"),
      icon: () => import("./calcite-icon-FE3MORNT.js"),
      "radio-button": () => import("./calcite-radio-button-BXICHY4X.js"),
      "radio-button-group": () => import("./calcite-radio-button-group-UKIBC6RS.js")
    }), l2()]);
  }
  render() {
    const {
      label: e6,
      visibleElements: t2
    } = this, o3 = this._renderContent();
    return n("div", {
      "aria-label": e6,
      class: this.classes(g.base, e4.widget)
    }, o3 ? n("calcite-block", {
      class: g.block,
      heading: t2.header ? this.label : "",
      key: "content-block",
      open: true
    }, n("div", {
      class: g.blockContent,
      key: "content"
    }, o3)) : void 0);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e6) {
    this._overrideIfSome("label", e6);
  }
  _renderContent() {
    const {
      visibleElements: e6,
      viewType: o3
    } = this, i3 = [e6.tooltipsToggle ? this._renderTooltipsToggle() : null, e6.labelsToggle && "2d" !== o3 ? this._renderLabelsToggle() : null, e6.directionModePicker ? this._renderDirectionModePicker() : null].filter(O);
    return 0 === i3.length ? null : i3;
  }
  _renderTooltipsToggle() {
    const {
      messages: e6,
      sketchOptions: t2
    } = this;
    return n(s2, {
      checked: t2.tooltips.effectiveEnabled,
      hint: e6.tooltipsToggleHint,
      key: `${this.id}__tooltips`,
      label: e6.tooltipsToggle,
      onChange: this._onTooltipsEnabledChange
    });
  }
  _renderLabelsToggle() {
    const {
      messages: e6,
      sketchOptions: t2
    } = this;
    return n(s2, {
      checked: t2.labels.enabled,
      hint: e6.labelsToggleHint,
      key: `${this.id}__labels`,
      label: e6.labelsToggle,
      onChange: this._onLabelsEnabledChange
    });
  }
  _renderDirectionModePicker() {
    const {
      messages: e6,
      sketchOptions: t2
    } = this, {
      directionMode: o3
    } = t2.values;
    return n("calcite-label", {
      key: "direction-mode",
      layout: "default",
      scale: "s"
    }, e6.directionModePicker, n("calcite-radio-button-group", {
      key: "radio-button-group",
      layout: "horizontal",
      name: this.id,
      scale: "s",
      value: o3,
      onCalciteRadioButtonGroupChange: this._onDirectionModeChange
    }, this._renderDirectionModeOption("relative", o3, e6.directionModeRelative), this._renderDirectionModeOption("absolute", o3, e6.directionModeAbsolute)));
  }
  _renderDirectionModeOption(e6, t2, o3) {
    return n("calcite-label", {
      key: e6,
      layout: "inline",
      scale: "s"
    }, n("calcite-radio-button", {
      checked: e6 === t2,
      scale: "s",
      value: e6
    }), n("div", {
      class: g.radioButtonLabelWrapper,
      key: "label-wrapper"
    }, n("calcite-icon", {
      icon: e5[e6],
      scale: "s"
    }), o3));
  }
};
e2([y()], u2.prototype, "label", null), e2([y({
  type: l3,
  nonNullable: true
})], u2.prototype, "visibleElements", void 0), e2([y(), e3("esri/widgets/support/SketchTooltipControls/t9n/SketchTooltipControls")], u2.prototype, "messages", void 0), e2([y({
  nonNullable: true,
  type: l
})], u2.prototype, "sketchOptions", void 0), e2([y({
  type: String
})], u2.prototype, "viewType", void 0), u2 = e2([a("esri.widgets.support.SketchTooltipControls")], u2);
var k = u2;

// ../../../node_modules/@arcgis/core/widgets/support/SnappingControls/snappingLayerListUtils.js
var s4 = (e6) => t(e6) || r2(e6);
var t = (e6) => {
  if (!("type" in e6)) return false;
  switch (e6.type) {
    case "feature":
    case "geojson":
    case "csv":
    case "graphics":
    case "wfs":
    case "map-notes":
    case "oriented-imagery":
    case "scene":
    case "building-scene":
    case "subtype-sublayer":
      return true;
    default:
      return false;
  }
};
var r2 = (t2) => {
  const r4 = o(t2);
  if (null != r4 && t2.hasOwnProperty(r4) && null != t2[r4]) {
    for (const e6 of t2[r4]) if (s4(e6)) return true;
  }
  return false;
};
var n2 = (e6, s6) => null != s6 && null != e6 && (s6.test(e6.title) ? "self" : !!e6.children.some((e7) => false !== n2(e7, s6)) && "children");

// ../../../node_modules/@arcgis/core/widgets/support/SnappingControls/SnappingListItem.js
var l4;
var p2 = l4 = class extends I {
  constructor(e6) {
    super(e6), this.children = new V(), this.parent = null;
  }
  get enabled() {
    const {
      children: e6
    } = this;
    if (0 === e6.length) return null != this.featureSource && this.featureSource.enabled ? "enabled" : "disabled";
    let r4 = false, t2 = false;
    for (const i3 of e6) {
      if ("indeterminate" === i3.enabled) return i3.enabled;
      if ("enabled" === i3.enabled ? r4 = true : "disabled" === i3.enabled && (t2 = true), t2 && r4) return "indeterminate";
    }
    return t2 ? "disabled" : "enabled";
  }
  get childLayerIds() {
    return this.children.toArray().flatMap((e6) => [e6.layer.id, ...e6.childLayerIds]);
  }
  get featureSource() {
    const {
      layer: e6,
      getFeatureSnappingSources: r4
    } = this;
    return r4().find((r5) => r5.layer === e6);
  }
  _initializeChildLayers(e6) {
    if (!e6) return;
    const r4 = e6.filter(s4);
    super._initializeChildLayers(r4);
  }
  _createChildItems(e6) {
    return e6.map((e7) => c2(e7) ? new l4({
      layer: e7,
      parent: this,
      view: this.view,
      getFeatureSnappingSources: this.getFeatureSnappingSources
    }) : null).filter(O).reverse();
  }
};
e2([y()], p2.prototype, "enabled", null), e2([y()], p2.prototype, "children", void 0), e2([y()], p2.prototype, "childLayerIds", null), e2([y()], p2.prototype, "featureSource", null), e2([y({
  constructOnly: true
})], p2.prototype, "getFeatureSnappingSources", void 0), e2([y()], p2.prototype, "parent", void 0), p2 = l4 = e2([a("esri.widgets.support.SnappingControls.SnappingListItem")], p2);

// ../../../node_modules/@arcgis/core/widgets/support/SnappingControls/SnappingLayerListViewModel.js
var a2 = class extends y2 {
  constructor() {
    super(...arguments), this.featureSnappingSources = new V();
  }
  get operationalItemsFlat() {
    return this.operationalItems.flatten((e6) => e6.children);
  }
  get selectableItems() {
    return this.operationalItemsFlat.filter((e6) => !e6.children?.length);
  }
  _compileList() {
    const e6 = this.view?.map?.layers;
    if (!e6) return;
    const t2 = e6.filter(s4);
    this._watchLayersListMode(t2);
    const r4 = this._getViewableLayers(t2);
    r4?.length ? (this._createNewItems(r4), this._removeItems(r4), this._sortItems(r4)) : this._removeAllItems();
  }
  _createListItem(e6) {
    return new p2({
      layer: e6,
      view: this.view,
      getFeatureSnappingSources: () => this.featureSnappingSources
    });
  }
};
e2([y()], a2.prototype, "featureSnappingSources", void 0), e2([y()], a2.prototype, "operationalItems", void 0), e2([y()], a2.prototype, "operationalItemsFlat", null), e2([y()], a2.prototype, "selectableItems", null), a2 = e2([a("esri.widgets.support.SnappingControls.SnappingLayerListViewModel")], a2);

// ../../../node_modules/@arcgis/core/widgets/support/SnappingControls/SnappingControlsViewModel.js
var c3 = class extends S {
  constructor(e6) {
    super(e6), this.layerListViewModel = new a2(), this.snappingOptions = new c(), this.view = null;
  }
  initialize() {
    this.addHandles([d(() => ({
      viewModel: this.layerListViewModel,
      view: this.view
    }), ({
      viewModel: e6,
      view: r4
    }) => {
      e6.view = r4;
    }, P), d(() => ({
      viewModel: this.layerListViewModel,
      sources: this.snappingOptions?.featureSources
    }), ({
      viewModel: e6,
      sources: r4
    }) => {
      e6.featureSnappingSources = r4;
    }, P)]);
  }
  get allLayersEnabled() {
    return (this.layerListViewModel?.selectableItems ?? []).every((e6) => "enabled" === e6.enabled);
  }
  get allLayersDisabled() {
    return (this.layerListViewModel?.selectableItems ?? []).every((e6) => !e6.enabled);
  }
  get layersEnabledCount() {
    return this.layerListViewModel?.selectableItems?.filter((e6) => "enabled" === e6.enabled).length ?? 0;
  }
  get state() {
    return this.snappingOptions ? "ready" : "disabled";
  }
  toggleSnappingForLayers(e6, r4) {
    e6?.forEach((e7) => r4 ? this.enableSnappingForLayer(e7) : this.disableSnappingForLayer(e7));
  }
  toggleSnappingForAllLayers(e6) {
    this.layerListViewModel.selectableItems.forEach(({
      layer: {
        id: r4
      }
    }) => {
      e6 ? this.enableSnappingForLayer(r4) : this.disableSnappingForLayer(r4);
    });
  }
  enableSnappingForLayer(e6) {
    const r4 = this._findSnappingSourceForLayer(e6) ?? this._makeSnappingSourceForLayer(e6);
    r4 && (r4.enabled = true);
  }
  disableSnappingForLayer(e6) {
    const r4 = this._findSnappingSourceForLayer(e6);
    r4 && (r4.enabled = false);
  }
  updateEnabledFeatureSources(e6) {
    for (const r4 of this.snappingOptions.featureSources) c2(r4.layer) && (r4.enabled = e6.includes(r4.layer.id));
  }
  _findSnappingSourceForLayer(e6) {
    return this.snappingOptions.featureSources.find((r4) => r4.layer.id === e6);
  }
  _makeSnappingSourceForLayer(e6) {
    const r4 = this.layerListViewModel.operationalItemsFlat.find((r5) => r5.layer.id === e6)?.layer;
    if (!r4) throw new s("snapping-controls:layer-not-found", `cannot enable snapping for layer with id ${e6} because no such layer was found in the view`);
    if ("group" === r4.type) return;
    const i3 = new p({
      layer: r4
    });
    return this.snappingOptions.featureSources.add(i3), i3;
  }
};
e2([y()], c3.prototype, "allLayersEnabled", null), e2([y()], c3.prototype, "allLayersDisabled", null), e2([y({
  constructOnly: true
})], c3.prototype, "layerListViewModel", void 0), e2([y()], c3.prototype, "layersEnabledCount", null), e2([y({
  type: c,
  nonNullable: true
})], c3.prototype, "snappingOptions", void 0), e2([y()], c3.prototype, "state", null), e2([y()], c3.prototype, "view", void 0), c3 = e2([a("esri.widgets.support.SnappingControls.SnappingControlsViewModel")], c3);
var y3 = c3;

// ../../../node_modules/@arcgis/core/widgets/support/SnappingControls/VisibleElements.js
var r3 = class extends S {
  constructor(o3) {
    super(o3), this.enabledToggle = true, this.featureEnabledToggle = true, this.header = false, this.layerList = true, this.layerListToggleLayersButton = true, this.selfEnabledToggle = true;
  }
};
e2([y({
  type: Boolean,
  nonNullable: true
})], r3.prototype, "enabledToggle", void 0), e2([y({
  type: Boolean,
  nonNullable: true
})], r3.prototype, "featureEnabledToggle", void 0), e2([y({
  type: Boolean,
  nonNullable: true
})], r3.prototype, "header", void 0), e2([y({
  type: Boolean,
  nonNullable: true
})], r3.prototype, "layerList", void 0), e2([y({
  type: Boolean,
  nonNullable: true
})], r3.prototype, "layerListToggleLayersButton", void 0), e2([y({
  type: Boolean,
  nonNullable: true
})], r3.prototype, "selfEnabledToggle", void 0), r3 = e2([a("esri.widgets.support.SnappingControls.VisibleElements")], r3);
var s5 = r3;

// ../../../node_modules/@arcgis/core/widgets/support/SnappingControls.js
var m2 = "esri-snapping-controls";
var y4 = {
  base: m2,
  container: `${m2}__container`,
  item: `${m2}__item`,
  toggleBlock: `${m2}__toggle-block`,
  layerListBlock: `${m2}__layer-list-block`,
  layerList: `${m2}__layer-list`,
  layerListFilter: `${m2}__layer-list__filter`,
  layerListButton: `${m2}__layer-list__button`,
  layerListItem: `${m2}__layer-list__item`,
  layerListGroup: `${m2}__layer-list__group`,
  nestedContainer: `${m2}__nested-container`
};
var _ = class extends B {
  constructor(e6, t2) {
    super(e6, t2), this._defaultViewModel = null, this._layerListFilter = null, this.layerListOpen = true, this.messages = null, this.visibleElements = new s5(), this._enableSnappingSwitchChange = (e7) => {
      this.snappingOptions.enabled = e7;
    }, this._featureEnabledSwitchChange = (e7) => {
      this.snappingOptions.featureEnabled = e7;
    }, this._selfEnabledSwitchChange = (e7) => {
      this.snappingOptions.selfEnabled = e7;
    }, this._onToggleLayersButtonClick = (e7) => {
      this.viewModel.toggleSnappingForAllLayers(!this.viewModel.allLayersEnabled), requestAnimationFrame(() => e7.target.setFocus());
    };
    const {
      snappingOptions: s6,
      view: l5,
      viewModel: i3
    } = e6;
    this.viewModel = i3 ?? (this._defaultViewModel = new y3({
      snappingOptions: s6,
      view: l5
    }));
  }
  normalizeCtorArgs(e6) {
    const _a = e6, {
      snappingOptions: t2,
      view: s6,
      viewModel: l5
    } = _a, i3 = __objRest(_a, [
      "snappingOptions",
      "view",
      "viewModel"
    ]);
    return i3;
  }
  destroy() {
    this.viewModel !== this._defaultViewModel && (this._defaultViewModel = u(this._defaultViewModel));
  }
  loadDependencies() {
    return Promise.all([r({
      block: () => import("./calcite-block-PSHTVVZX.js"),
      button: () => import("./calcite-button-TT4KT5XH.js"),
      input: () => import("./calcite-input-WHALBGAT.js"),
      list: () => import("./calcite-list-QRFMTME5.js"),
      "list-item": () => import("./calcite-list-item-MF2DTJRA.js"),
      checkbox: () => import("./calcite-checkbox-ZPWECFBW.js")
    }), l2()]);
  }
  get icon() {
    return "snap-to-point";
  }
  set icon(e6) {
    this._overrideIfSome("icon", e6);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e6) {
    this._overrideIfSome("label", e6);
  }
  get snappingOptions() {
    return this.viewModel.snappingOptions;
  }
  set snappingOptions(e6) {
    this.viewModel.snappingOptions = e6;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e6) {
    this.viewModel.view = e6;
  }
  set viewModel(e6) {
    e6 !== this._get("viewModel") && (null != this._defaultViewModel && this._defaultViewModel === e6 || (this._defaultViewModel = u(this._defaultViewModel)), this._set("viewModel", e6));
  }
  render() {
    const {
      label: e6
    } = this;
    return n("div", {
      "aria-label": e6,
      class: this.classes(y4.base, e4.widget)
    }, n("div", {
      class: y4.container
    }, this._renderContent()));
  }
  _renderContent() {
    return [this._renderToggles(), this._renderLayerList()];
  }
  _renderToggles() {
    const {
      visibleElements: e6
    } = this, s6 = [e6.selfEnabledToggle ? this._renderSelfEnabledToggle() : null, e6.featureEnabledToggle ? this._renderFeatureEnabledToggle() : null].filter(O), l5 = [e6.enabledToggle ? this._renderEnabledToggle() : null, s6.length > 0 ? n("div", {
      class: y4.nestedContainer
    }, s6) : null].filter(O);
    return 0 === l5.length ? null : n("calcite-block", {
      class: y4.toggleBlock,
      heading: e6.header ? this.label : "",
      key: "toggle-block",
      open: true
    }, l5);
  }
  _renderEnabledToggle() {
    const {
      messages: e6,
      viewModel: t2
    } = this, {
      snappingOptions: s6
    } = t2;
    return n(s2, {
      checked: s6.enabled,
      disabled: this._enabledToggleDisabled,
      key: `${this.id}__enabled-toggle`,
      label: e6.enableSnapping,
      onChange: this._enableSnappingSwitchChange
    });
  }
  _renderSelfEnabledToggle() {
    const {
      messages: e6,
      viewModel: t2
    } = this, {
      snappingOptions: s6
    } = t2, l5 = s6.enabled && s6.selfEnabled;
    return n(s2, {
      checked: l5,
      disabled: this._secondaryElementsDisabled,
      key: `${this.id}__self-enabled-toggle`,
      label: e6.geometryGuides,
      onChange: this._selfEnabledSwitchChange
    });
  }
  _renderFeatureEnabledToggle() {
    const {
      messages: e6,
      viewModel: t2
    } = this, {
      snappingOptions: s6
    } = t2, l5 = s6.enabled && s6.featureEnabled;
    return n(s2, {
      checked: l5,
      disabled: this._secondaryElementsDisabled,
      key: `${this.id}__feature-enabled-toggle`,
      label: e6.featureToFeature,
      onChange: this._featureEnabledSwitchChange
    });
  }
  _renderLayerList() {
    if (!this.visibleElements.layerList) return null;
    const {
      messages: e6,
      viewModel: t2
    } = this, s6 = ({
      target: {
        value: e7
      }
    }) => {
      this._layerListFilter = "" === e7 ? null : new RegExp(e7, "i");
    }, l5 = t2.layerListViewModel.operationalItems.length > 9 ? n("calcite-input", {
      class: y4.layerListFilter,
      clearable: true,
      placeholder: e6?.searchLayers,
      onCalciteInputInput: s6
    }) : null, i3 = this._secondaryElementsDisabled, n3 = this.layerListOpen && !i3;
    return n("calcite-block", {
      class: y4.layerListBlock,
      collapsible: true,
      disabled: this._secondaryElementsDisabled,
      heading: e6.snappingLayers,
      key: "list-block",
      open: n3,
      onCalciteBlockToggle: (e7) => this.layerListOpen = e7.target.open
    }, l5, this._renderToggleLayersButton(), n("calcite-list", {
      class: y4.layerList,
      selectionMode: "none"
    }, this._renderLayerListItemCollection(t2.layerListViewModel.operationalItems)));
  }
  _renderLayerListItemCollection(e6) {
    const s6 = this._layerListFilter;
    return e6.map((e7) => {
      switch (s6 ? n2(e7, s6) : null) {
        case "children": {
          const t2 = e7.children.filter((e8) => false !== n2(e8, s6));
          return this._renderLayerListItemGroup(e7, t2);
        }
        case "self":
        case null:
          return this._renderLayerListItemOrGroup(e7);
        case false:
          return "self" === n2(e7.parent, s6) ? this._renderLayerListItemOrGroup(e7) : null;
      }
    }).toArray().filter(O);
  }
  _renderToggleLayersButton() {
    if (!this.visibleElements.layerListToggleLayersButton) return null;
    const {
      viewModel: {
        allLayersEnabled: e6
      },
      messages: t2
    } = this, s6 = e6 ? t2.disableAllLayers : t2.enableAllLayers;
    return n("calcite-button", {
      appearance: "transparent",
      class: y4.layerListButton,
      label: s6,
      name: "layer-toggle",
      onclick: this._onToggleLayersButtonClick
    }, s6);
  }
  _renderLayerListItemOrGroup(e6) {
    if (e6.children.length) return this._renderLayerListItemGroup(e6);
    const {
      messages: {
        untitledLayer: t2
      }
    } = this, s6 = e6.title || t2, l5 = () => {
      this.viewModel.toggleSnappingForLayers([e6.layer.id], "enabled" !== e6.enabled);
    };
    return n("calcite-list-item", {
      class: y4.layerListItem,
      key: `${this.id}-list-item-${e6.uid}`,
      label: s6,
      onCalciteListItemSelect: (e7) => {
        e7.stopPropagation(), l5();
      }
    }, n("calcite-checkbox", {
      checked: "enabled" === e6.enabled,
      slot: "actions-start",
      onCalciteCheckboxChange: l5
    }));
  }
  _renderLayerListItemGroup(e6, t2) {
    const {
      children: s6,
      title: i3
    } = e6, n3 = i3 || this.messages.untitledLayer, o3 = i3 && "" !== i3 ? i3 : e(), r4 = !!t2?.length, a3 = t2 ?? s6, d2 = () => {
      this.viewModel.toggleSnappingForLayers(e6.childLayerIds, "enabled" !== e6.enabled);
    };
    return n("calcite-list-item", {
      class: y4.layerListGroup,
      key: o3,
      label: n3,
      open: r4,
      onCalciteListItemSelect: (e7) => {
        e7.stopPropagation(), d2();
      }
    }, n("calcite-checkbox", {
      checked: "enabled" === e6.enabled,
      indeterminate: "indeterminate" === e6.enabled,
      slot: "actions-start",
      onCalciteCheckboxChange: d2
    }), n("calcite-list", null, this._renderLayerListItemCollection(a3)));
  }
  get _enabledToggleDisabled() {
    const e6 = this.snappingOptions;
    return e6.enabledToggled || e6.forceDisabled;
  }
  get _secondaryElementsDisabled() {
    return this._enabledToggleDisabled || !this.snappingOptions.enabled;
  }
};
e2([y()], _.prototype, "_defaultViewModel", void 0), e2([y()], _.prototype, "_layerListFilter", void 0), e2([y()], _.prototype, "label", null), e2([y({
  type: Boolean,
  nonNullable: true
})], _.prototype, "layerListOpen", void 0), e2([y(), e3("esri/widgets/support/SnappingControls/t9n/SnappingControls")], _.prototype, "messages", void 0), e2([y()], _.prototype, "snappingOptions", null), e2([y()], _.prototype, "view", null), e2([y()], _.prototype, "viewModel", null), e2([y({
  type: s5,
  nonNullable: true
})], _.prototype, "visibleElements", void 0), e2([y()], _.prototype, "_enabledToggleDisabled", null), e2([y()], _.prototype, "_secondaryElementsDisabled", null), _ = e2([a("esri.widgets.support.SnappingControls")], _);
var L = _;

export {
  s5 as s,
  k,
  L
};
//# sourceMappingURL=chunk-QG3DCJKX.js.map
