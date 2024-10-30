import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  y as y3
} from "./chunk-MAPTCBQI.js";
import {
  I
} from "./chunk-JKNSHHXJ.js";
import {
  M,
  a2,
  d as d2,
  e as e5,
  l,
  m,
  n as n4,
  r as r2,
  t as t2,
  x,
  y as y2
} from "./chunk-IAY2Q5KW.js";
import {
  n as n3,
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
  n as n2
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
  d
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S,
  i
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
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import "./chunk-L4CMR4WM.js";
import "./chunk-7JIACICA.js";
import "./chunk-IE4UBD3F.js";
import "./chunk-IAO6HACY.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/LayerList/css.js
var t3 = "esri-layer-list";
var i2 = `${t3}__item`;
var e6 = {
  base: t3,
  actionMenu: `${t3}__action-menu`,
  actionGroup: `${t3}__action-group`,
  filterNoResults: `${t3}__filter-no-results`,
  item: i2,
  itemActive: `${i2}--active`,
  itemContent: `${i2}-content`,
  itemContentBottom: `${i2}-content-bottom`,
  itemMessage: `${i2}-message`,
  itemInvisible: `${i2}--invisible`,
  itemActionIcon: `${i2}-action-icon`,
  itemActionImage: `${i2}-action-image`,
  itemTemporaryIcon: `${i2}-temporary-icon`,
  itemTableIcon: `${i2}-table-icon`,
  itemCatalogIcon: `${i2}-catalog-icon`,
  statusIndicator: `${t3}__status-indicator`,
  publishing: `${t3}__publishing`,
  updating: `${t3}__updating`,
  connectionStatus: `${t3}__connection-status`,
  connectionStatusConnected: `${t3}__connection-status--connected`,
  visibleToggle: `${t3}__visible-toggle`,
  visibleIcon: `${t3}__visible-icon`
};

// ../../../node_modules/@arcgis/core/widgets/LayerList/LayerListVisibleElements.js
var s3 = class extends S {
  constructor() {
    super(...arguments), this.catalogLayerList = true, this.closeButton = false, this.collapseButton = false, this.errors = false, this.filter = false, this.flow = true, this.heading = false, this.statusIndicators = true, this.temporaryLayerIndicators = false;
  }
};
e([y({
  type: Boolean,
  nonNullable: true
})], s3.prototype, "catalogLayerList", void 0), e([y({
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
})], s3.prototype, "temporaryLayerIndicators", void 0), s3 = e([a("esri.widgets.LayerList.LayerListVisibleElements")], s3);
var l2 = s3;

// ../../../node_modules/@arcgis/core/widgets/LayerList.js
var S2 = V.ofType(I);
var P = class extends s(B) {
  constructor(e7, t4) {
    super(e7, t4), this._activeItem = null, this._tooltipReferenceMap = new s2(), this._focusRootFlowItem = false, this._focusPanelFlowItem = false, this._focusTableListFlowItem = false, this._focusCatalogFlowItem = false, this._lastDragDetail = null, this._selectedDragItemLayerUid = null, this._rootGroupUid = `operational-${this.uid}`, this.catalogLayerList = null, this.catalogOptions = null, this.collapsed = false, this.dragEnabled = false, this.filterPlaceholder = "", this.filterText = "", this.headingLevel = 2, this.knowledgeGraphOptions = null, this.listItemCanGiveFunction = null, this.listItemCanReceiveFunction = null, this.messages = null, this.messagesCommon = null, this.minDragEnabledItems = e5, this.minFilterItems = n4, this.openCatalogItem = null, this.openTableListItem = null, this.selectedItems = new S2(), this.selectionMode = "none", this.tableList = null, this.viewModel = new y3(), this.visibilityAppearance = "default", this.visibleElements = new l2(), this._canMove = ({
      dragEl: e8,
      fromEl: t5,
      toEl: i3
    }, o) => {
      const s4 = "pull" === o ? this.listItemCanGiveFunction : this.listItemCanReceiveFunction, l3 = x(e8);
      if (!l3?.sortable) return false;
      const a3 = x(t5), n5 = M(t5), r3 = x(i3), c = M(i3), d3 = !!n5 && !!c && n5 === c, m2 = {
        selected: l3,
        from: a3,
        to: r3
      }, p = t5.group, h = i3.group, u = a3?.layer?.type ?? "", g = r3?.layer?.type ?? "", y4 = /* @__PURE__ */ new Set(["map-image", "catalog", "knowledge-graph"]), _ = "sublayer";
      return p && h && "function" == typeof s4 ? s4.call(null, m2) : d3 && !y4.has(u) && !y4.has(g) && l3?.layer?.type !== _;
    }, this._clearActiveItem = () => {
      this._activeItem = null;
    }, this._setActiveItem = (e8) => {
      if ("default" !== this.visibilityAppearance) return;
      const t5 = Array.from(e8.composedPath()).find((e9) => e9.classList?.contains(e6.item));
      this._activeItem = x(t5);
    }, this._onCalciteListOrderChange = (e8) => {
      const {
        _lastDragDetail: t5
      } = this, {
        toEl: i3,
        fromEl: o,
        dragEl: s4,
        newIndex: l3
      } = e8;
      if (o && i3 && !(t5?.newIndex === l3 && t5?.dragEl === s4 && t5?.toEl === i3 && t5?.fromEl === o)) if (this._lastDragDetail = e8, o !== i3) this._moveLayerFromChildList({
        toEl: i3,
        fromEl: o,
        dragEl: s4,
        newIndex: l3
      });
      else {
        const e9 = Array.from(o.children).filter((e10) => e10?.matches("calcite-list-item")).map((e10) => e10.value);
        this._sortLayers(o, e9);
      }
    };
  }
  initialize() {
    this.addHandles([d(() => this.openCatalogItem, (e7) => e7 ? this._createCatalog() : this._destroyCatalog()), d(() => this.openTableListItem, (e7) => e7 ? this._createTableList() : this._destroyTableList())]);
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
    this._destroyTableList(), this._tooltipReferenceMap.clear();
  }
  get _totalItems() {
    return this.viewModel.operationalItems.flatten((e7) => e7.children.filter((e8) => "catalog-dynamic-group" !== e8.layer.type)).length;
  }
  get _dragEnabled() {
    return this._totalItems >= this.minDragEnabledItems && this.dragEnabled;
  }
  get _filterEnabled() {
    return this._totalItems >= this.minFilterItems && this.visibleElements.filter;
  }
  get icon() {
    return "layers";
  }
  set icon(e7) {
    this._overrideIfSome("icon", e7);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e7) {
    this._overrideIfSome("label", e7);
  }
  get listItemCreatedFunction() {
    return this.viewModel.listItemCreatedFunction;
  }
  set listItemCreatedFunction(e7) {
    this.viewModel.listItemCreatedFunction = e7;
  }
  get multipleSelectionEnabled() {
    return i(n.getLogger(this), "multipleSelectionEnabled", {
      replacement: "selectionMode",
      version: "4.29",
      warnOnce: true
    }), "multiple" === this.selectionMode;
  }
  set multipleSelectionEnabled(e7) {
    i(n.getLogger(this), "multipleSelectionEnabled", {
      replacement: "selectionMode",
      version: "4.29",
      warnOnce: true
    }), this.selectionMode = e7 ? "multiple" : this.selectionEnabled ? "single" : "none";
  }
  get operationalItems() {
    return this.viewModel.operationalItems;
  }
  set operationalItems(e7) {
    this.viewModel.operationalItems = e7;
  }
  get selectionEnabled() {
    return i(n.getLogger(this), "selectionEnabled", {
      replacement: "selectionMode, dragEnabled",
      version: "4.29",
      warnOnce: true
    }), "none" !== this.selectionMode && this.dragEnabled;
  }
  set selectionEnabled(e7) {
    i(n.getLogger(this), "selectionEnabled", {
      replacement: "selectionMode, dragEnabled",
      version: "4.29",
      warnOnce: true
    }), this.dragEnabled = e7, this.selectionMode = e7 ? this.multipleSelectionEnabled ? "multiple" : "single" : "none";
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e7) {
    this.viewModel.view = e7;
  }
  triggerAction(e7, t4) {
    return this.viewModel.triggerAction(e7, t4);
  }
  render() {
    const e7 = this.viewModel?.state, t4 = {
      [e3.hidden]: "loading" === e7,
      [e3.disabled]: "disabled" === e7
    }, i3 = this.operationalItems?.filter((e8) => !e8.hidden && (this.visibleElements.errors || !e8.error));
    return n2("div", {
      class: this.classes(e6.base, e3.widget, e3.panel, t4)
    }, i3?.length ? [this._renderItemTooltips(i3), this._renderItems(i3)] : this._renderNoItems());
  }
  _renderItemTooltip(e7) {
    const {
      _tooltipReferenceMap: t4,
      messages: i3
    } = this;
    return e7 ? n2("calcite-tooltip", {
      key: `tooltip-${e7.layer.uid}`,
      referenceElement: t4.get(e7.layer.uid)
    }, i3.layerIncompatibleTooltip) : null;
  }
  _renderItemTooltipNodes(e7) {
    return e7.incompatible ? this._renderItemTooltip(e7) : e7.children?.filter((e8) => !e8.hidden).toArray().map((e8) => this._renderItemTooltipNodes(e8));
  }
  _renderItemTooltips(e7) {
    return e7?.toArray().map((e8) => this._renderItemTooltipNodes(e8));
  }
  _renderNoItemsMessage() {
    return n2("div", {
      slot: "message"
    }, this.messages.noItemsToDisplay);
  }
  _renderNoItems() {
    return n2("div", {
      class: e6.itemMessage,
      key: "esri-layer-list__no-items"
    }, n2("calcite-notice", {
      icon: "information",
      kind: "info",
      open: true,
      width: "full"
    }, this._renderNoItemsMessage()));
  }
  _destroyCatalog() {
    this.catalogLayerList?.destroy(), this._set("catalogLayerList", null);
  }
  _destroyTableList() {
    this.tableList?.destroy(), this._set("tableList", null);
  }
  _createCatalog() {
    return __async(this, null, function* () {
      this._destroyCatalog();
      const {
        default: e7
      } = yield import("./CatalogLayerList-S55S3SZT.js"), {
        headingLevel: t4,
        catalogOptions: i3,
        view: o,
        filterPlaceholder: s4,
        listItemCreatedFunction: l3,
        minFilterItems: a3,
        selectionMode: n5,
        visibilityAppearance: r3
      } = this, c = this.openCatalogItem?.layer;
      this._set("catalogLayerList", new e7(__spreadProps(__spreadValues({
        headingLevel: t4,
        view: o,
        filterPlaceholder: s4,
        listItemCreatedFunction: l3,
        minFilterItems: a3,
        selectionMode: n5,
        visibilityAppearance: r3
      }, i3), {
        catalogLayer: c
      })));
    });
  }
  _getTableListParams(e7) {
    const t4 = e7?.layer;
    return "knowledge-graph" === t4?.type ? __spreadProps(__spreadValues({}, this.knowledgeGraphOptions), {
      tables: t4?.tables
    }) : null;
  }
  _createTableList() {
    return __async(this, null, function* () {
      this._destroyTableList();
      const {
        default: e7
      } = yield import("./TableList-CG75F3FU.js"), t4 = this._getTableListParams(this.openTableListItem);
      if (!t4?.tables?.length) return;
      const {
        headingLevel: i3,
        selectionMode: o,
        dragEnabled: s4
      } = this;
      this._set("tableList", new e7(__spreadValues({
        headingLevel: i3,
        selectionMode: o,
        dragEnabled: s4
      }, t4)));
    });
  }
  _renderCatalogFlowItem() {
    const {
      openCatalogItem: e7,
      messages: t4
    } = this;
    if (!e7) return null;
    const i3 = this._getLayerTitle(e7);
    return n2("calcite-flow-item", {
      afterCreate: this._focusCatalogFlowItemNode,
      afterUpdate: this._focusCatalogFlowItemNode,
      bind: this,
      description: i3,
      heading: t4.catalogLayers,
      headingLevel: this.headingLevel,
      key: `flow-catalog-${e7.uid}`,
      onCalciteFlowItemBack: (e8) => {
        e8.preventDefault(), this.openCatalogItem = null, this._focusRootFlowItem = true;
      }
    }, this.catalogLayerList?.render());
  }
  _renderTableListFlowItem() {
    const {
      openTableListItem: e7,
      messages: t4
    } = this;
    if (!e7) return null;
    const i3 = this._getLayerTitle(e7);
    return n2("calcite-flow-item", {
      afterCreate: this._focusTableListFlowItemNode,
      afterUpdate: this._focusTableListFlowItemNode,
      bind: this,
      description: i3,
      heading: t4.tables,
      headingLevel: this.headingLevel,
      key: `flow-table-list-${e7.uid}`,
      onCalciteFlowItemBack: (e8) => {
        e8.preventDefault(), this.openTableListItem = null, this._focusRootFlowItem = true;
      }
    }, this.tableList?.render());
  }
  _renderPanelFlowItems(e7) {
    return e7 ? e7.flatten((e8) => e8.children).filter(({
      hidden: e8,
      panel: t4
    }) => !e8 && t4?.open && !t4.disabled && t4.flowEnabled).toArray().map(({
      title: e8,
      panel: t4
    }) => {
      const i3 = () => this._handlePanelFlowItemBack(t4);
      return n2("calcite-flow-item", {
        afterCreate: this._focusPanelFlowItemNode,
        afterUpdate: this._focusPanelFlowItemNode,
        bind: this,
        description: e8,
        heading: t4.title,
        headingLevel: this.headingLevel,
        key: `flow-panel-${t4.uid}`,
        onCalciteFlowItemBack: (e9) => {
          e9.preventDefault(), i3();
        }
      }, t4.render(), n2("calcite-button", {
        appearance: "transparent",
        onclick: i3,
        slot: "footer-actions",
        width: "full"
      }, this.messagesCommon.back));
    }) : [];
  }
  _handlePanelFlowItemBack(e7) {
    e7.open = false, this._focusRootFlowItem = true;
  }
  _focusRootFlowItemNode(e7) {
    this._focusRootFlowItem && (this._focusRootFlowItem = false, requestAnimationFrame(() => e7?.setFocus()));
  }
  _focusCatalogFlowItemNode(e7) {
    this._focusCatalogFlowItem && (this._focusCatalogFlowItem = false, requestAnimationFrame(() => e7?.setFocus()));
  }
  _focusTableListFlowItemNode(e7) {
    this._focusTableListFlowItem && (this._focusTableListFlowItem = false, requestAnimationFrame(() => e7?.setFocus()));
  }
  _focusPanelFlowItemNode(e7) {
    this._focusPanelFlowItem && (this._focusPanelFlowItem = false, requestAnimationFrame(() => e7?.setFocus()));
  }
  _renderItems(e7) {
    const {
      visible: t4,
      collapsed: i3,
      _filterEnabled: o,
      _rootGroupUid: s4,
      visibleElements: {
        closeButton: l3,
        collapseButton: a3,
        heading: n5,
        flow: r3
      },
      _dragEnabled: c,
      selectionMode: d3,
      filterText: m2,
      filterPlaceholder: h,
      messages: u
    } = this, g = [n2("calcite-flow-item", {
      afterCreate: this._focusRootFlowItemNode,
      afterUpdate: this._focusRootFlowItemNode,
      bind: this,
      closable: l3,
      closed: !t4,
      collapsed: i3,
      collapsible: a3,
      heading: n5 ? u.widgetLabel : void 0,
      headingLevel: this.headingLevel,
      key: "root-flow-item",
      onCalciteFlowItemClose: () => this.visible = false
    }, n2("calcite-list", {
      afterCreate: (e8) => {
        e8.addEventListener("focusin", this._setActiveItem), e8.addEventListener("focusout", this._clearActiveItem);
      },
      afterRemoved: (e8) => {
        e8.removeEventListener("focusin", this._setActiveItem), e8.removeEventListener("focusout", this._clearActiveItem);
      },
      canPull: (e8) => this._canMove(e8, "pull"),
      canPut: (e8) => this._canMove(e8, "put"),
      "data-layer-type": s4,
      dragEnabled: c,
      filterEnabled: o,
      filterPlaceholder: h,
      filterText: o ? m2 : "",
      group: s4,
      key: "root-list",
      label: u.widgetLabel,
      onmouseleave: this._clearActiveItem,
      onmouseover: this._setActiveItem,
      selectionAppearance: "border",
      selectionMode: d3,
      onCalciteListChange: (e8) => this._handleCalciteListChange(e8),
      onCalciteListDragEnd: (e8) => this._handleCalciteListDragEnd(e8.detail),
      onCalciteListFilter: (e8) => this.filterText = e8.target?.filterText ?? "",
      onCalciteListOrderChange: (e8) => this._onCalciteListOrderChange(e8.detail)
    }, e7?.toArray().map((e8) => this._renderItem(e8)), e7?.length && o ? n2("div", {
      class: e6.filterNoResults,
      slot: "filter-no-results"
    }, n2("calcite-notice", {
      kind: "info",
      open: true,
      width: "full"
    }, this._renderNoItemsMessage())) : null)), this._renderPanelFlowItems(e7), this._renderTableListFlowItem(), this._renderCatalogFlowItem()];
    return t4 ? r3 ? n2("calcite-flow", {
      key: "root-flow"
    }, g) : g : null;
  }
  _renderChildList(e7, t4 = []) {
    const {
      _dragEnabled: i3,
      _rootGroupUid: o,
      viewModel: {
        listModeDisabled: s4
      },
      messages: l3,
      selectionMode: a3
    } = this, {
      children: n5
    } = e7, r3 = "catalog-dynamic-group" !== e7.layer?.type && m(e7), c = !(!s4 && l(e7.layer)) && !r3 && i3 && "group" === e7.layer?.type;
    return r3 || c ? n2("calcite-list", {
      canPull: (e8) => this._canMove(e8, "pull"),
      canPut: (e8) => this._canMove(e8, "put"),
      "data-item": e7,
      "data-layer-type": o,
      dragEnabled: !!i3 && e7.childrenSortable && a2(e7),
      group: `${o}-${e7.layer.uid}`,
      key: `child-list-${e7.layer.uid}`,
      selectionAppearance: "border",
      selectionMode: a3
    }, n5?.filter((e8) => !e8.hidden).toArray().map((i4) => this._renderItem(i4, e7, [...t4, e7.title])), this._getTableListParams(e7)?.tables?.length ? n2("calcite-list-item", {
      class: e6.item,
      "data-layer-id": e7.layer.id,
      dragDisabled: true,
      key: `list-item-table-list-tables-${e7.layer.uid}`,
      title: l3.tables,
      onCalciteListItemSelect: () => {
        this.openTableListItem = e7, this._focusTableListFlowItem = true;
      }
    }, n2("div", {
      class: e6.itemContent,
      slot: "content"
    }, l3.tables), n2("calcite-icon", {
      class: e6.itemTableIcon,
      icon: "table",
      scale: "s",
      slot: "content-start"
    }), n2("calcite-icon", {
      flipRtl: true,
      icon: "chevron-right",
      scale: "s",
      slot: "content-end"
    })) : null) : null;
  }
  _renderItemMessage(e7) {
    return e7.error ? n2("div", {
      class: e6.itemMessage,
      key: "esri-layer-list__error",
      slot: "content-bottom"
    }, n2("calcite-notice", {
      icon: "exclamation-mark-triangle",
      kind: "warning",
      open: true,
      scale: "s",
      width: "full"
    }, n2("div", {
      slot: "message"
    }, this.messages.layerError))) : e7.incompatible ? n2("div", {
      class: e6.itemMessage,
      key: "esri-layer-list__incompatible",
      slot: "content-bottom"
    }, n2("calcite-notice", {
      afterCreate: (t4) => this._setTooltipReference(t4, e7),
      afterRemoved: () => this._removeTooltipReference(e7),
      bind: this,
      icon: "exclamation-mark-triangle",
      kind: "warning",
      open: true,
      scale: "s",
      tabIndex: 0,
      width: "full"
    }, n2("div", {
      slot: "message"
    }, this.messages.layerIncompatible))) : null;
  }
  _getLayerTitle(e7) {
    return e7.title || this.messages.untitledLayer;
  }
  _renderItem(e7, t4, i3) {
    const {
      _activeItem: o,
      _selectedDragItemLayerUid: s4,
      selectionMode: l3,
      selectedItems: a3,
      messages: n5,
      visibleElements: r3
    } = this, c = this._getLayerTitle(e7), d3 = e7.visibleAtCurrentTimeExtent ? e7.visibleAtCurrentScale ? c : `${c} (${n5.layerInvisibleAtScale})` : `${c} (${n5.layerInvisibleAtTime})`, m2 = this._filterActions(e7.actionsSections), h = this._countActions(m2), u = "catalog" === e7.parent?.layer?.type, g = "catalog-footprint" === e7.layer?.type, y4 = "catalog-dynamic-group" === e7.layer?.type, _ = g ? n2("calcite-icon", {
      class: e6.itemCatalogIcon,
      icon: "footprint",
      key: "footprint",
      scale: "s",
      slot: "content-start"
    }) : null, b = y4 ? n2("calcite-icon", {
      class: e6.itemCatalogIcon,
      icon: "catalog-dataset",
      key: "catalog-dataset",
      scale: "s",
      slot: "content-start"
    }) : null, f = r3.catalogLayerList && y4 ? n2("calcite-action", {
      appearance: "transparent",
      disabled: !e7.layer.visible,
      icon: "chevron-right",
      iconFlipRtl: true,
      onclick: () => {
        this.openCatalogItem = t4, this._focusCatalogFlowItem = true;
      },
      scale: "s",
      slot: "actions-end",
      text: c
    }) : null;
    return n2("calcite-list-item", {
      afterCreate: (t5) => this._focusSelectedDragEl(t5, e7),
      afterUpdate: (t5) => this._focusSelectedDragEl(t5, e7),
      class: this.classes(e6.item, {
        [e6.itemActive]: o === e7
      }),
      "data-item": e7,
      "data-layer-id": e7.layer.id,
      dragDisabled: !e7.sortable || u,
      dragSelected: e7.layer.uid === s4,
      id: e7.layer.uid,
      key: `list-item-${e7.layer.uid}`,
      label: c,
      metadata: {
        parentTitles: i3,
        title: c
      },
      open: e7.open,
      selected: "none" !== l3 && a3.includes(e7),
      title: d3,
      value: e7.layer.uid,
      onCalciteListItemDragHandleChange: (t5) => this._handleCalciteListItemDragHandleChange(t5, e7),
      onCalciteListItemSelect: (i4) => this._handleCalciteListItemSelect(i4, e7, t4),
      onCalciteListItemToggle: (t5) => this._handleCalciteListItemToggle(t5, e7)
    }, _, b, n2("div", {
      class: this.classes({
        [e6.itemContent]: true,
        [e6.itemInvisible]: !e7.visibleAtCurrentScale || !e7.visibleAtCurrentTimeExtent
      }),
      slot: "content"
    }, c), this._renderItemStatus(e7, t4), this._renderItemToggle(e7, t4), f, this._renderItemTemporaryIcon(e7), this._renderChildList(e7, i3), this._renderItemMessage(e7), this._renderPanel(e7.panel), this._renderPanelAction(e7.panel), h > 1 ? this._renderActionsSections(e7, m2) : 1 === h ? this._renderAction({
      item: e7,
      action: this._getSingleAction(m2),
      textEnabled: false
    }) : null);
  }
  _renderItemStatus(e7, t4) {
    const {
      visibleElements: i3
    } = this;
    if (!i3.statusIndicators) return null;
    const {
      connectionStatus: o,
      publishing: s4,
      updating: l3
    } = e7, a3 = l3 && !t4, n5 = !!o;
    return n2("calcite-icon", {
      class: this.classes({
        [e6.statusIndicator]: true,
        [e6.publishing]: s4,
        [e6.updating]: a3,
        [e6.connectionStatus]: n5,
        [e6.connectionStatusConnected]: n5 && "connected" === o
      }),
      icon: r2({
        connectionStatus: o,
        publishing: s4
      }),
      key: "layer-item-status",
      scale: "s",
      slot: "actions-end"
    });
  }
  _renderItemTemporaryIcon(e7) {
    return this.visibleElements.temporaryLayerIndicators && "persistenceEnabled" in e7.layer && !e7.layer.persistenceEnabled ? n2("calcite-icon", {
      class: e6.itemTemporaryIcon,
      icon: "temporary",
      key: "temporary-icon",
      scale: "s",
      slot: "actions-start",
      title: this.messages.temporary
    }) : null;
  }
  _renderItemToggle(e7, t4) {
    const {
      messages: i3,
      visibilityAppearance: o
    } = this, {
      visible: s4
    } = e7, l3 = t4?.visibilityMode;
    if ("inherited" === l3) return null;
    const a3 = t2({
      visible: s4,
      exclusive: "exclusive" === l3,
      visibilityAppearance: o
    }), n5 = "checkbox" === o, r3 = i3.layerVisibility;
    return n2("calcite-action", {
      appearance: "transparent",
      class: e6.visibleToggle,
      icon: n5 ? a3 : void 0,
      key: "visibility-toggle",
      onclick: () => this._toggleVisibility(e7, t4),
      scale: "s",
      slot: n5 ? "actions-start" : "actions-end",
      text: r3,
      title: r3
    }, n5 ? null : n2("calcite-icon", {
      class: this.classes({
        [e6.visibleIcon]: "exclusive" !== l3 && s4
      }),
      icon: a3,
      scale: "s"
    }));
  }
  _renderPanel(e7) {
    return !e7?.open || e7.disabled || e7.flowEnabled ? null : n2("div", {
      class: e6.itemContentBottom,
      key: `content-panel-${e7.uid}`,
      slot: "content-bottom"
    }, e7.render());
  }
  _renderPanelAction(e7) {
    if (!e7?.visible) return null;
    const {
      open: t4,
      title: i3,
      disabled: o
    } = e7;
    return n2("calcite-action", {
      active: t4,
      appearance: "transparent",
      disabled: o,
      icon: t(e7),
      key: `action-${e7.uid}`,
      onclick: () => this._togglePanel(e7),
      scale: "s",
      slot: "actions-end",
      text: i3 ?? "",
      title: i3 ?? void 0
    }, this._renderFallbackIcon(e7));
  }
  _renderActionsSections(e7, t4) {
    const i3 = this.messagesCommon.options;
    return n2("calcite-action-menu", {
      appearance: "transparent",
      class: e6.actionMenu,
      key: "item-action-menu",
      label: this.messagesCommon.menu,
      open: e7.actionsOpen,
      overlayPositioning: "fixed",
      placement: "bottom-end",
      scale: "s",
      slot: "actions-end",
      onCalciteActionMenuOpen: (t5) => e7.actionsOpen = t5.target.open
    }, n2("calcite-action", {
      appearance: "transparent",
      icon: "ellipsis",
      scale: "s",
      slot: "trigger",
      text: i3,
      title: i3
    }), t4.toArray().map((t5, i4) => this._renderActionSection(e7, t5, i4)));
  }
  _renderActionSection(e7, t4, i3) {
    return n2("calcite-action-group", {
      class: e6.actionGroup,
      key: `action-section-${i3}`
    }, t4.toArray().map((t5) => this._renderAction({
      item: e7,
      action: t5,
      textEnabled: true
    })));
  }
  _renderFallbackIcon(e7) {
    const {
      className: t4,
      icon: i3
    } = e7;
    if (i3) return null;
    const o = "image" in e7 ? e7.image : void 0, s4 = {
      [e6.itemActionIcon]: !!t4,
      [e6.itemActionImage]: !!o
    };
    return t4 && (s4[t4] = true), o || t4 ? n2("span", {
      "aria-hidden": "true",
      class: this.classes(e6.itemActionIcon, s4),
      key: "icon",
      styles: n3(o)
    }) : null;
  }
  _renderAction(e7) {
    const {
      item: t4,
      action: i3,
      textEnabled: o
    } = e7;
    if (!i3) return null;
    const {
      active: s4,
      disabled: l3,
      title: a3,
      type: n5,
      indicator: r3
    } = i3;
    return n2("calcite-action", {
      active: "toggle" === n5 && i3.value,
      appearance: "transparent",
      disabled: l3,
      icon: t(i3),
      indicator: r3,
      key: `action-${i3.uid}`,
      loading: s4,
      onclick: () => this._triggerAction(t4, i3),
      scale: "s",
      slot: o ? void 0 : "actions-end",
      text: a3 ?? "",
      textEnabled: o,
      title: a3 ?? void 0
    }, this._renderFallbackIcon(i3));
  }
  _setTooltipReference(e7, t4) {
    this._tooltipReferenceMap.set(t4.layer.uid, e7);
  }
  _removeTooltipReference(e7) {
    this._tooltipReferenceMap.delete(e7.layer.uid);
  }
  _moveLayerFromChildList({
    toEl: e7,
    fromEl: t4,
    dragEl: i3,
    newIndex: o
  }) {
    const s4 = x(i3), l3 = x(e7), a3 = x(t4);
    this.viewModel.moveListItem(s4, a3, l3, o);
  }
  _handleCalciteListDragEnd(e7) {
    const {
      fromEl: t4,
      dragEl: i3,
      oldIndex: o
    } = e7;
    t4.insertBefore(i3, t4.children[o]);
  }
  _sortLayers(e7, t4) {
    if (e7) if (e7.group === this._rootGroupUid) d2(this.view?.map?.layers, t4);
    else {
      const i3 = x(e7);
      if (!i3) return;
      y2(i3, t4);
    }
  }
  _getSingleAction(e7) {
    return e7.reduce((e8) => e8).find((e8) => e8 && ("button" === e8.type || "toggle" === e8.type));
  }
  _filterActions(e7) {
    return e7.map((e8) => e8.filter((e9) => e9.visible));
  }
  _countActions(e7) {
    return e7.reduce((e8, t4) => e8 + t4.length, 0);
  }
  _triggerAction(e7, t4) {
    t4 && e7 && ("toggle" === t4.type && (t4.value = !t4.value), this.triggerAction(t4, e7));
  }
  _handleCalciteListChange(e7) {
    const {
      selectionMode: t4,
      selectedItems: i3
    } = this;
    if ("none" === t4) return;
    const o = e7.target.selectedItems.map((e8) => x(e8)).filter(Boolean);
    i3.removeAll(), i3.addMany(o);
  }
  _handleCalciteListItemToggle(e7, t4) {
    e7.stopPropagation(), t4.open = e7.target.open;
  }
  _focusSelectedDragEl(e7, t4) {
    this._selectedDragItemLayerUid === t4.layer.uid && requestAnimationFrame(() => e7?.setFocus());
  }
  _handleCalciteListItemDragHandleChange(e7, t4) {
    e7.stopPropagation();
    const i3 = e7.target.dragSelected;
    this._selectedDragItemLayerUid = i3 ? t4.layer.uid : null;
  }
  _handleCalciteListItemSelect(e7, t4, i3) {
    x(e7.target) === t4 && "none" === this.selectionMode && "inherited" !== i3?.visibilityMode && this._toggleVisibility(t4, i3);
  }
  _togglePanel(e7) {
    e7.open = !e7.open, e7.open && (this._focusPanelFlowItem = true);
  }
  _toggleVisibility(e7, t4) {
    if (!e7) return;
    const i3 = t4?.visibilityMode;
    "exclusive" === i3 && e7.visible || (e7.visible = !e7.visible);
  }
};
e([y()], P.prototype, "_activeItem", void 0), e([y()], P.prototype, "_tooltipReferenceMap", void 0), e([y()], P.prototype, "_focusRootFlowItem", void 0), e([y()], P.prototype, "_focusPanelFlowItem", void 0), e([y()], P.prototype, "_focusTableListFlowItem", void 0), e([y()], P.prototype, "_focusCatalogFlowItem", void 0), e([y()], P.prototype, "_totalItems", null), e([y()], P.prototype, "_dragEnabled", null), e([y()], P.prototype, "_filterEnabled", null), e([y({
  readOnly: true
})], P.prototype, "catalogLayerList", void 0), e([y()], P.prototype, "catalogOptions", void 0), e([y()], P.prototype, "collapsed", void 0), e([y()], P.prototype, "dragEnabled", void 0), e([y()], P.prototype, "filterPlaceholder", void 0), e([y()], P.prototype, "filterText", void 0), e([y()], P.prototype, "headingLevel", void 0), e([y()], P.prototype, "icon", null), e([y()], P.prototype, "knowledgeGraphOptions", void 0), e([y()], P.prototype, "label", null), e([y()], P.prototype, "listItemCanGiveFunction", void 0), e([y()], P.prototype, "listItemCanReceiveFunction", void 0), e([y()], P.prototype, "listItemCreatedFunction", null), e([y(), e2("esri/widgets/LayerList/t9n/LayerList")], P.prototype, "messages", void 0), e([y(), e2("esri/t9n/common")], P.prototype, "messagesCommon", void 0), e([y()], P.prototype, "minDragEnabledItems", void 0), e([y()], P.prototype, "minFilterItems", void 0), e([y()], P.prototype, "multipleSelectionEnabled", null), e([y()], P.prototype, "openCatalogItem", void 0), e([y()], P.prototype, "openTableListItem", void 0), e([y()], P.prototype, "operationalItems", null), e([y()], P.prototype, "selectionEnabled", null), e([y()], P.prototype, "selectedItems", void 0), e([y()], P.prototype, "selectionMode", void 0), e([y({
  readOnly: true
})], P.prototype, "tableList", void 0), e([y()], P.prototype, "view", null), e([e4("trigger-action"), y({
  type: y3
})], P.prototype, "viewModel", void 0), e([y()], P.prototype, "visibilityAppearance", void 0), e([y({
  type: l2,
  nonNullable: true
})], P.prototype, "visibleElements", void 0), P = e([a("esri.widgets.LayerList")], P);
var x2 = P;
export {
  x2 as default
};
//# sourceMappingURL=LayerList-DRT3FV6L.js.map
