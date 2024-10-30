import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  I
} from "./chunk-JKNSHHXJ.js";
import {
  l,
  m,
  n as n3,
  r as r2,
  t as t2,
  u,
  x
} from "./chunk-IAY2Q5KW.js";
import {
  a as a2
} from "./chunk-2L7HC722.js";
import {
  n as n2,
  t
} from "./chunk-PCDJV6LA.js";
import "./chunk-TFJN5Q7A.js";
import {
  e as e4
} from "./chunk-5L5LGHM5.js";
import "./chunk-LTKDZMRF.js";
import {
  e as e3
} from "./chunk-FYGR4X6I.js";
import {
  s as s2
} from "./chunk-IQEF4U4C.js";
import "./chunk-WVFB3H4O.js";
import {
  s
} from "./chunk-ASCK5HJ5.js";
import "./chunk-HEG4CVDM.js";
import {
  B,
  e2,
  r
} from "./chunk-UVQYXHKM.js";
import {
  n
} from "./chunk-M5N6UHWJ.js";
import "./chunk-EBCBYN6Y.js";
import "./chunk-ODFKYX74.js";
import "./chunk-EGBDRLCX.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import {
  P,
  d,
  v
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
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
import "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/CatalogLayerList/CatalogLayerListViewModel.js
var m2 = {
  layerListMode: "layer-list-mode"
};
var n4 = "hide";
var h = V.ofType(I);
var p = class extends o.EventedAccessor {
  constructor(t4) {
    super(t4), this.catalogItems = new h(), this.checkPublishStatusEnabled = false, this.catalogLayer = null, this.listItemCreatedFunction = null, this.listModeDisabled = false, this.view = null;
  }
  initialize() {
    this.addHandles([d(() => [this.catalogLayer?.loaded, this.view?.ready], () => this._compileList(), P), v(() => this.catalogLayer?.dynamicGroupLayer.layers, "change", () => this._compileList()), d(() => [this.listItemCreatedFunction, this.checkPublishStatusEnabled, this.listModeDisabled], () => this._recompileList())]);
  }
  destroy() {
    this.view = null, this.catalogItems.removeAll();
  }
  get state() {
    const {
      view: t4,
      catalogLayer: e6
    } = this;
    return t4?.ready && e6?.loaded ? "ready" : t4 && e6 ? "loading" : "disabled";
  }
  get totalItems() {
    return this.catalogItems.flatten((t4) => t4.children).length;
  }
  triggerAction(t4, e6) {
    t4 && !t4.disabled && this.emit("trigger-action", {
      action: t4,
      item: e6
    });
  }
  _createListItem(t4) {
    const {
      view: e6,
      listItemCreatedFunction: s4,
      checkPublishStatusEnabled: i2,
      listModeDisabled: o2
    } = this;
    return new I({
      checkPublishStatusEnabled: i2,
      listModeDisabled: o2,
      layer: t4,
      listItemCreatedFunction: s4,
      view: e6
    });
  }
  _removeAllItems() {
    this.catalogItems.removeAll();
  }
  _getViewableLayers(t4) {
    return t4 ? this.listModeDisabled ? t4 : t4.filter((t5) => u(t5) !== n4) : void 0;
  }
  _watchLayersListMode(t4) {
    this.removeHandles(m2.layerListMode), t4 && !this.listModeDisabled && this.addHandles(d(() => t4.filter((t5) => "listMode" in t5).map((t5) => t5.listMode).toArray(), () => this._compileList()), m2.layerListMode);
  }
  _compileList() {
    const {
      catalogLayer: t4
    } = this;
    if (!t4?.loaded) return;
    const e6 = t4?.dynamicGroupLayer.layers;
    this._watchLayersListMode(e6);
    const s4 = this._getViewableLayers(e6);
    s4?.length ? (this._createNewItems(s4), this._removeItems(s4), this._sortItems(s4)) : this._removeAllItems();
  }
  _createNewItems(t4) {
    const {
      catalogItems: e6
    } = this;
    t4.forEach((t5) => {
      e6.some((e7) => e7.layer === t5) || e6.add(this._createListItem(t5));
    });
  }
  _removeItems(t4) {
    const {
      catalogItems: e6
    } = this, s4 = [];
    e6.forEach((e7) => {
      e7 && t4?.includes(e7.layer) || s4.push(e7);
    }), e6.removeMany(s4);
  }
  _sortItems(t4) {
    const {
      catalogItems: e6
    } = this;
    e6.sort((e7, s4) => {
      const i2 = t4.indexOf(e7.layer), o2 = t4.indexOf(s4.layer);
      return i2 > o2 ? -1 : i2 < o2 ? 1 : 0;
    });
  }
  _recompileList() {
    this._removeAllItems(), this._compileList();
  }
};
e([y({
  type: h
})], p.prototype, "catalogItems", void 0), e([y()], p.prototype, "checkPublishStatusEnabled", void 0), e([y()], p.prototype, "catalogLayer", void 0), e([y()], p.prototype, "listItemCreatedFunction", void 0), e([y({
  nonNullable: true
})], p.prototype, "listModeDisabled", void 0), e([y({
  readOnly: true
})], p.prototype, "state", null), e([y()], p.prototype, "totalItems", null), e([y()], p.prototype, "view", void 0), p = e([a("esri.widgets.CatalogLayerList.CatalogLayerListViewModel")], p);
var y2 = p;

// ../../../node_modules/@arcgis/core/widgets/CatalogLayerList/CatalogLayerListVisibleElements.js
var s3 = class extends S {
  constructor() {
    super(...arguments), this.closeButton = false, this.collapseButton = false, this.errors = false, this.filter = false, this.flow = true, this.heading = false, this.statusIndicators = true, this.temporaryLayerIndicators = false;
  }
};
e([y({
  type: Boolean,
  nonNullable: true
})], s3.prototype, "closeButton", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s3.prototype, "collapseButton", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s3.prototype, "errors", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s3.prototype, "filter", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s3.prototype, "flow", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s3.prototype, "heading", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s3.prototype, "statusIndicators", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s3.prototype, "temporaryLayerIndicators", void 0), s3 = e([a("esri.widgets.CatalogLayerList.CatalogLayerListVisibleElements")], s3);
var l2 = s3;

// ../../../node_modules/@arcgis/core/widgets/CatalogLayerList/css.js
var t3 = "esri-catalog-layer-list";
var i = `${t3}__item`;
var e5 = {
  base: t3,
  actionMenu: `${t3}__action-menu`,
  actionGroup: `${t3}__action-group`,
  filterNoResults: `${t3}__filter-no-results`,
  item: i,
  itemActive: `${i}--active`,
  itemContent: `${i}-content`,
  itemContentBottom: `${i}-content-bottom`,
  itemMessage: `${i}-message`,
  itemInvisible: `${i}--invisible`,
  itemActionIcon: `${i}-action-icon`,
  itemActionImage: `${i}-action-image`,
  itemTemporaryIcon: `${i}-temporary-icon`,
  itemTableIcon: `${i}-table-icon`,
  statusIndicator: `${t3}__status-indicator`,
  publishing: `${t3}__publishing`,
  updating: `${t3}__updating`,
  connectionStatus: `${t3}__connection-status`,
  connectionStatusConnected: `${t3}__connection-status--connected`,
  visibleToggle: `${t3}__visible-toggle`,
  visibleIcon: `${t3}__visible-icon`
};

// ../../../node_modules/@arcgis/core/widgets/CatalogLayerList.js
var C = V.ofType(I);
var M = class extends s(B) {
  constructor(e6, t4) {
    super(e6, t4), this._activeItem = null, this._tooltipReferenceMap = new s2(), this._focusRootFlowItem = false, this._focusPanelFlowItem = false, this._rootGroupUid = `operational-${this.uid}`, this.collapsed = false, this.filterPlaceholder = "", this.filterText = "", this.headingLevel = 2, this.messages = null, this.messagesLayerList = null, this.messagesCommon = null, this.minFilterItems = n3, this.selectedItems = new C(), this.selectionMode = "none", this.viewModel = new y2(), this.visibilityAppearance = "default", this.visibleElements = new l2(), this._clearActiveItem = () => {
      this._activeItem = null;
    }, this._setActiveItem = (e7) => {
      if ("default" !== this.visibilityAppearance) return;
      const t5 = Array.from(e7.composedPath()).find((e8) => e8.classList?.contains(e5.item));
      this._activeItem = x(t5);
    };
  }
  loadDependencies() {
    return r({
      action: () => import("./calcite-action-BXG7XWUR.js"),
      "action-group": () => import("./calcite-action-group-VZNSHMI7.js"),
      "action-menu": () => import("./calcite-action-menu-D4SIA23A.js"),
      button: () => import("./calcite-button-LAMWLR56.js"),
      flow: () => import("./calcite-flow-WGSZ7TX4.js"),
      "flow-item": () => import("./calcite-flow-item-6QKZ7KRC.js"),
      icon: () => import("./calcite-icon-42Z6A6ZS.js"),
      list: () => import("./calcite-list-IDJ56B53.js"),
      "list-item": () => import("./calcite-list-item-TVXB7DPG.js"),
      notice: () => import("./calcite-notice-GSFPF5BZ.js"),
      tooltip: () => import("./calcite-tooltip-V7ITFPXY.js")
    });
  }
  destroy() {
    this._tooltipReferenceMap.clear();
  }
  get _filterEnabled() {
    return this.viewModel.totalItems >= this.minFilterItems && this.visibleElements.filter;
  }
  get catalogItems() {
    return this.viewModel.catalogItems;
  }
  set catalogItems(e6) {
    this.viewModel.catalogItems = e6;
  }
  get catalogLayer() {
    return this.viewModel.catalogLayer;
  }
  set catalogLayer(e6) {
    this.viewModel.catalogLayer = e6;
  }
  get icon() {
    return "catalog-dataset";
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
  get listItemCreatedFunction() {
    return this.viewModel.listItemCreatedFunction;
  }
  set listItemCreatedFunction(e6) {
    this.viewModel.listItemCreatedFunction = e6;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e6) {
    this.viewModel.view = e6;
  }
  triggerAction(e6, t4) {
    return this.viewModel.triggerAction(e6, t4);
  }
  render() {
    const e6 = this.viewModel?.state, t4 = {
      [e3.hidden]: "loading" === e6,
      [e3.disabled]: "disabled" === e6
    }, i2 = this.catalogItems?.filter((e7) => !e7.hidden && (this.visibleElements.errors || !e7.error));
    return n("div", {
      class: this.classes(e5.base, e3.widget, e3.panel, t4)
    }, i2?.length ? [this._renderItemTooltips(i2), this._renderItems(i2)] : this._renderNoItems());
  }
  _renderItemTooltip(e6) {
    const {
      _tooltipReferenceMap: t4,
      messagesLayerList: i2
    } = this;
    return e6 ? n("calcite-tooltip", {
      key: `tooltip-${e6.layer.uid}`,
      referenceElement: t4.get(e6.layer.uid)
    }, i2.layerIncompatibleTooltip) : null;
  }
  _renderItemTooltipNodes(e6) {
    return e6.incompatible ? this._renderItemTooltip(e6) : e6.children?.filter((e7) => !e7.hidden).toArray().map((e7) => this._renderItemTooltipNodes(e7));
  }
  _renderItemTooltips(e6) {
    return e6?.toArray().map((e7) => this._renderItemTooltipNodes(e7));
  }
  _renderNoItemsMessage() {
    return n("div", {
      slot: "message"
    }, this.messagesLayerList.noItemsToDisplay);
  }
  _renderNoItems() {
    return n("div", {
      class: e5.itemMessage,
      key: "esri-layer-list__no-items"
    }, n("calcite-notice", {
      icon: "information",
      kind: "info",
      open: true,
      width: "full"
    }, this._renderNoItemsMessage()));
  }
  _renderPanelFlowItems(e6) {
    return e6 ? e6.flatten((e7) => e7.children).filter(({
      hidden: e7,
      panel: t4
    }) => !e7 && t4?.open && !t4.disabled && t4.flowEnabled).toArray().map(({
      title: e7,
      panel: t4
    }) => {
      const i2 = () => this._handlePanelFlowItemBack(t4);
      return n("calcite-flow-item", {
        afterCreate: this._focusPanelFlowItemNode,
        afterUpdate: this._focusPanelFlowItemNode,
        bind: this,
        description: e7,
        heading: t4.title,
        headingLevel: this.headingLevel,
        key: `flow-panel-${t4.uid}`,
        onCalciteFlowItemBack: (e8) => {
          e8.preventDefault(), i2();
        }
      }, t4.render(), n("calcite-button", {
        appearance: "transparent",
        onclick: i2,
        slot: "footer-actions",
        width: "full"
      }, this.messagesCommon.back));
    }) : [];
  }
  _handlePanelFlowItemBack(e6) {
    e6.open = false, this._focusRootFlowItem = true;
  }
  _focusRootFlowItemNode(e6) {
    this._focusRootFlowItem && (this._focusRootFlowItem = false, requestAnimationFrame(() => e6?.setFocus()));
  }
  _focusPanelFlowItemNode(e6) {
    this._focusPanelFlowItem && (this._focusPanelFlowItem = false, requestAnimationFrame(() => e6?.setFocus()));
  }
  _renderItems(e6) {
    const {
      visible: t4,
      collapsed: i2,
      _filterEnabled: o2,
      _rootGroupUid: s4,
      visibleElements: {
        closeButton: l3,
        collapseButton: n5,
        heading: r3,
        flow: a3
      },
      selectionMode: c,
      filterText: d2,
      filterPlaceholder: m3,
      messages: u2
    } = this, h2 = [n("calcite-flow-item", {
      afterCreate: this._focusRootFlowItemNode,
      afterUpdate: this._focusRootFlowItemNode,
      bind: this,
      closable: l3,
      closed: !t4,
      collapsed: i2,
      collapsible: n5,
      heading: r3 ? u2.widgetLabel : void 0,
      headingLevel: this.headingLevel,
      key: "root-flow-item",
      onCalciteFlowItemClose: () => this.visible = false
    }, n("calcite-list", {
      afterCreate: (e7) => {
        e7.addEventListener("focusin", this._setActiveItem), e7.addEventListener("focusout", this._clearActiveItem);
      },
      afterRemoved: (e7) => {
        e7.removeEventListener("focusin", this._setActiveItem), e7.removeEventListener("focusout", this._clearActiveItem);
      },
      "data-layer-type": s4,
      filterEnabled: o2,
      filterPlaceholder: m3,
      filterText: o2 ? d2 : "",
      group: s4,
      key: "root-list",
      label: u2.widgetLabel,
      onmouseleave: this._clearActiveItem,
      onmouseover: this._setActiveItem,
      selectionAppearance: "border",
      selectionMode: c,
      onCalciteListChange: (e7) => this._handleCalciteListChange(e7),
      onCalciteListFilter: (e7) => this.filterText = e7.target?.filterText ?? ""
    }, e6?.toArray().map((e7) => this._renderItem(e7)), e6?.length && o2 ? n("div", {
      class: e5.filterNoResults,
      slot: "filter-no-results"
    }, n("calcite-notice", {
      kind: "info",
      open: true,
      width: "full"
    }, this._renderNoItemsMessage())) : null)), this._renderPanelFlowItems(e6)];
    return t4 ? a3 ? n("calcite-flow", {
      key: "root-flow"
    }, h2) : h2 : null;
  }
  _renderChildList(e6, t4 = []) {
    const {
      _rootGroupUid: i2,
      viewModel: {
        listModeDisabled: o2
      },
      selectionMode: s4
    } = this, {
      children: l3
    } = e6, n5 = m(e6), r3 = !(!o2 && l(e6.layer)) && !n5 && "group" === e6.layer?.type;
    return n5 || r3 ? n("calcite-list", {
      "data-item": e6,
      "data-layer-type": i2,
      group: `${i2}-${e6.layer.uid}`,
      key: `child-list-${e6.layer.uid}`,
      selectionAppearance: "border",
      selectionMode: s4
    }, l3?.filter((e7) => !e7.hidden).toArray().map((i3) => this._renderItem(i3, e6, [...t4, e6.title]))) : null;
  }
  _renderItemMessage(e6) {
    return e6.error ? n("div", {
      class: e5.itemMessage,
      key: "esri-layer-list__error",
      slot: "content-bottom"
    }, n("calcite-notice", {
      icon: "exclamation-mark-triangle",
      kind: "warning",
      open: true,
      scale: "s",
      width: "full"
    }, n("div", {
      slot: "message"
    }, this.messagesLayerList.layerError))) : e6.incompatible ? n("div", {
      class: e5.itemMessage,
      key: "esri-layer-list__incompatible",
      slot: "content-bottom"
    }, n("calcite-notice", {
      afterCreate: (t4) => this._setTooltipReference(t4, e6),
      afterRemoved: () => this._removeTooltipReference(e6),
      bind: this,
      icon: "exclamation-mark-triangle",
      kind: "warning",
      open: true,
      scale: "s",
      tabIndex: 0,
      width: "full"
    }, n("div", {
      slot: "message"
    }, this.messagesLayerList.layerIncompatible))) : null;
  }
  _getLayerTitle(e6) {
    return e6.title || this.messagesLayerList.untitledLayer;
  }
  _renderItem(e6, t4, i2) {
    const {
      _activeItem: o2,
      selectionMode: s4,
      selectedItems: l3,
      messagesLayerList: n5
    } = this, r3 = this._getLayerTitle(e6), a3 = e6.visibleAtCurrentTimeExtent ? e6.visibleAtCurrentScale ? r3 : `${r3} (${n5.layerInvisibleAtScale})` : `${r3} (${n5.layerInvisibleAtTime})`, c = this._filterActions(e6.actionsSections), d2 = this._countActions(c);
    return n("calcite-list-item", {
      class: this.classes(e5.item, {
        [e5.itemActive]: o2 === e6
      }),
      "data-item": e6,
      "data-layer-id": e6.layer.id,
      id: e6.layer.uid,
      key: `list-item-${e6.layer.uid}`,
      label: r3,
      metadata: {
        parentTitles: i2,
        title: r3
      },
      open: e6.open,
      selected: "none" !== s4 && l3.includes(e6),
      title: a3,
      value: e6.layer.uid,
      onCalciteListItemSelect: (i3) => this._handleCalciteListItemSelect(i3, e6, t4),
      onCalciteListItemToggle: (t5) => this._handleCalciteListItemToggle(t5, e6)
    }, n("div", {
      class: this.classes({
        [e5.itemContent]: true,
        [e5.itemInvisible]: !e6.visibleAtCurrentScale || !e6.visibleAtCurrentTimeExtent
      }),
      slot: "content"
    }, r3), this._renderItemStatus(e6, t4), this._renderItemToggle(e6, t4), this._renderItemTemporaryIcon(e6), this._renderChildList(e6, i2), this._renderItemMessage(e6), this._renderPanel(e6.panel), this._renderPanelAction(e6.panel), d2 > 1 ? this._renderActionsSections(e6, c) : 1 === d2 ? this._renderAction({
      item: e6,
      action: this._getSingleAction(c),
      textEnabled: false
    }) : null);
  }
  _renderItemStatus(e6, t4) {
    const {
      visibleElements: i2
    } = this;
    if (!i2.statusIndicators) return null;
    const {
      connectionStatus: o2,
      publishing: s4,
      updating: l3
    } = e6, n5 = l3 && !t4, r3 = !!o2;
    return n("calcite-icon", {
      class: this.classes({
        [e5.statusIndicator]: true,
        [e5.publishing]: s4,
        [e5.updating]: n5,
        [e5.connectionStatus]: r3,
        [e5.connectionStatusConnected]: r3 && "connected" === o2
      }),
      icon: r2({
        connectionStatus: o2,
        publishing: s4
      }),
      key: "layer-item-status",
      scale: "s",
      slot: "actions-end"
    });
  }
  _renderItemTemporaryIcon(e6) {
    return this.visibleElements.temporaryLayerIndicators && "persistenceEnabled" in e6.layer && (a2(e6.layer) || !e6.layer.persistenceEnabled) ? n("calcite-icon", {
      class: e5.itemTemporaryIcon,
      icon: "temporary",
      key: "temporary-icon",
      scale: "s",
      slot: "actions-start",
      title: this.messagesLayerList.temporary
    }) : null;
  }
  _renderItemToggle(e6, t4) {
    const {
      messagesLayerList: i2,
      visibilityAppearance: o2
    } = this, {
      visible: s4
    } = e6, l3 = t4?.visibilityMode;
    if ("inherited" === l3) return null;
    const n5 = t2({
      visible: s4,
      exclusive: "exclusive" === l3,
      visibilityAppearance: o2
    }), r3 = "checkbox" === o2, a3 = i2.layerVisibility;
    return n("calcite-action", {
      appearance: "transparent",
      class: e5.visibleToggle,
      icon: r3 ? n5 : void 0,
      key: "visibility-toggle",
      onclick: () => this._toggleVisibility(e6, t4),
      scale: "s",
      slot: r3 ? "actions-start" : "actions-end",
      text: a3,
      title: a3
    }, r3 ? null : n("calcite-icon", {
      class: this.classes({
        [e5.visibleIcon]: "exclusive" !== l3 && s4
      }),
      icon: n5,
      scale: "s"
    }));
  }
  _renderPanel(e6) {
    return !e6?.open || e6.disabled || e6.flowEnabled ? null : n("div", {
      class: e5.itemContentBottom,
      key: `content-panel-${e6.uid}`,
      slot: "content-bottom"
    }, e6.render());
  }
  _renderPanelAction(e6) {
    if (!e6?.visible) return null;
    const {
      open: t4,
      title: i2,
      disabled: o2
    } = e6;
    return n("calcite-action", {
      active: t4,
      appearance: "transparent",
      disabled: o2,
      icon: t(e6),
      key: `action-${e6.uid}`,
      onclick: () => this._togglePanel(e6),
      scale: "s",
      slot: "actions-end",
      text: i2 ?? "",
      title: i2 ?? void 0
    }, this._renderFallbackIcon(e6));
  }
  _renderActionsSections(e6, t4) {
    const i2 = this.messagesCommon.options;
    return n("calcite-action-menu", {
      appearance: "transparent",
      class: e5.actionMenu,
      key: "item-action-menu",
      label: this.messagesCommon.menu,
      open: e6.actionsOpen,
      overlayPositioning: "fixed",
      placement: "bottom-end",
      scale: "s",
      slot: "actions-end",
      onCalciteActionMenuOpen: (t5) => e6.actionsOpen = t5.target.open
    }, n("calcite-action", {
      appearance: "transparent",
      icon: "ellipsis",
      scale: "s",
      slot: "trigger",
      text: i2,
      title: i2
    }), t4.toArray().map((t5, i3) => this._renderActionSection(e6, t5, i3)));
  }
  _renderActionSection(e6, t4, i2) {
    return n("calcite-action-group", {
      class: e5.actionGroup,
      key: `action-section-${i2}`
    }, t4.toArray().map((t5) => this._renderAction({
      item: e6,
      action: t5,
      textEnabled: true
    })));
  }
  _renderFallbackIcon(e6) {
    const {
      className: t4,
      icon: i2
    } = e6;
    if (i2) return null;
    const o2 = "image" in e6 ? e6.image : void 0, s4 = {
      [e5.itemActionIcon]: !!t4,
      [e5.itemActionImage]: !!o2
    };
    return t4 && (s4[t4] = true), o2 || t4 ? n("span", {
      "aria-hidden": "true",
      class: this.classes(e5.itemActionIcon, s4),
      key: "icon",
      styles: n2(o2)
    }) : null;
  }
  _renderAction(e6) {
    const {
      item: t4,
      action: i2,
      textEnabled: o2
    } = e6;
    if (!i2) return null;
    const {
      active: s4,
      disabled: l3,
      title: n5,
      type: a3,
      indicator: c
    } = i2;
    return n("calcite-action", {
      active: "toggle" === a3 && i2.value,
      appearance: "transparent",
      disabled: l3,
      icon: t(i2),
      indicator: c,
      key: `action-${i2.uid}`,
      loading: s4,
      onclick: () => this._triggerAction(t4, i2),
      scale: "s",
      slot: o2 ? void 0 : "actions-end",
      text: n5 ?? "",
      textEnabled: o2,
      title: n5 ?? void 0
    }, this._renderFallbackIcon(i2));
  }
  _setTooltipReference(e6, t4) {
    this._tooltipReferenceMap.set(t4.layer.uid, e6);
  }
  _removeTooltipReference(e6) {
    this._tooltipReferenceMap.delete(e6.layer.uid);
  }
  _getSingleAction(e6) {
    return e6.reduce((e7) => e7).find((e7) => e7 && ("button" === e7.type || "toggle" === e7.type));
  }
  _filterActions(e6) {
    return e6.map((e7) => e7.filter((e8) => e8.visible));
  }
  _countActions(e6) {
    return e6.reduce((e7, t4) => e7 + t4.length, 0);
  }
  _triggerAction(e6, t4) {
    t4 && e6 && ("toggle" === t4.type && (t4.value = !t4.value), this.triggerAction(t4, e6));
  }
  _handleCalciteListChange(e6) {
    const {
      selectionMode: t4,
      selectedItems: i2
    } = this;
    if ("none" === t4) return;
    const o2 = e6.target.selectedItems.map((e7) => x(e7)).filter(Boolean);
    i2.removeAll(), i2.addMany(o2);
  }
  _handleCalciteListItemToggle(e6, t4) {
    e6.stopPropagation(), t4.open = e6.target.open;
  }
  _handleCalciteListItemSelect(e6, t4, i2) {
    x(e6.target) === t4 && "none" === this.selectionMode && "inherited" !== i2?.visibilityMode && this._toggleVisibility(t4, i2);
  }
  _togglePanel(e6) {
    e6.open = !e6.open, e6.open && (this._focusPanelFlowItem = true);
  }
  _toggleVisibility(e6, t4) {
    if (!e6) return;
    const i2 = t4?.visibilityMode;
    "exclusive" === i2 && e6.visible || (e6.visible = !e6.visible);
  }
};
e([y()], M.prototype, "_activeItem", void 0), e([y()], M.prototype, "_tooltipReferenceMap", void 0), e([y()], M.prototype, "_focusRootFlowItem", void 0), e([y()], M.prototype, "_focusPanelFlowItem", void 0), e([y()], M.prototype, "_filterEnabled", null), e([y()], M.prototype, "catalogItems", null), e([y()], M.prototype, "catalogLayer", null), e([y()], M.prototype, "collapsed", void 0), e([y()], M.prototype, "filterPlaceholder", void 0), e([y()], M.prototype, "filterText", void 0), e([y()], M.prototype, "headingLevel", void 0), e([y()], M.prototype, "icon", null), e([y()], M.prototype, "label", null), e([y()], M.prototype, "listItemCreatedFunction", null), e([y(), e2("esri/widgets/CatalogLayerList/t9n/CatalogLayerList")], M.prototype, "messages", void 0), e([y(), e2("esri/widgets/LayerList/t9n/LayerList")], M.prototype, "messagesLayerList", void 0), e([y(), e2("esri/t9n/common")], M.prototype, "messagesCommon", void 0), e([y()], M.prototype, "minFilterItems", void 0), e([y()], M.prototype, "selectedItems", void 0), e([y()], M.prototype, "selectionMode", void 0), e([y()], M.prototype, "view", null), e([e4("trigger-action"), y({
  type: y2
})], M.prototype, "viewModel", void 0), e([y()], M.prototype, "visibilityAppearance", void 0), e([y({
  type: l2,
  nonNullable: true
})], M.prototype, "visibleElements", void 0), M = e([a("esri.widgets.CatalogLayerList")], M);
var F = M;
export {
  F as default
};
//# sourceMappingURL=CatalogLayerList-S55S3SZT.js.map
