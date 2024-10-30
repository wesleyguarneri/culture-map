import {
  I
} from "./chunk-OUEC6DVS.js";
import {
  M,
  a2,
  d as d2,
  f,
  l,
  m,
  n as n5,
  r as r2,
  t as t2,
  u,
  x,
  y as y2
} from "./chunk-YBWOLLLC.js";
import {
  n as n3,
  t
} from "./chunk-LSPBOBQ5.js";
import {
  n as n4
} from "./chunk-HR6RJVBL.js";
import "./chunk-7PY7QIZQ.js";
import {
  e as e4
} from "./chunk-ZDGJDLVE.js";
import "./chunk-TDWXQPNS.js";
import {
  e as e3
} from "./chunk-HBMA4SRU.js";
import "./chunk-BIUXKPKA.js";
import {
  s
} from "./chunk-HT2T6PUB.js";
import "./chunk-VDB6Y4TZ.js";
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
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import {
  P,
  d
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
  S,
  i
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
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/BasemapLayerList/BasemapLayerListViewModel.js
var m2 = {
  view: "view",
  basemap: "basemap",
  baseLayers: "base-layers",
  referenceLayers: "reference-layers",
  baseLayersListMode: "reference-layers-list-mode",
  referenceLayersListMode: "base-layers-list-mode",
  baseLayerViews: "base-layer-views",
  referenceLayerViews: "reference-layer-views",
  children: "children"
};
var d3 = "hide";
var h = V.ofType(I);
var p = class extends o.EventedAccessor {
  constructor(e6) {
    super(e6), this.baseItems = new h(), this.baseListItemCreatedFunction = null, this.checkPublishStatusEnabled = false, this.listModeDisabled = false, this.referenceListItemCreatedFunction = null, this.referenceItems = new h(), this.view = null, this._compileBaseList = this._compileBaseList.bind(this), this._compileReferenceList = this._compileReferenceList.bind(this);
  }
  initialize() {
    this.addHandles([d(() => [this.view?.map?.basemap, true === this.view?.ready, this.view?.basemapView], () => this._watchBasemapLayers(), P), d(() => [this.baseListItemCreatedFunction, this.checkPublishStatusEnabled, this.listModeDisabled], () => this._baseListItemCreatedFunctionChanged()), d(() => [this.referenceListItemCreatedFunction, this.checkPublishStatusEnabled, this.listModeDisabled], () => this._referenceListItemCreatedFunctionChanged())], m2.view);
  }
  destroy() {
    this.view = null, this._removeAllBaseItems(), this._removeAllReferenceItems();
  }
  get basemapTitle() {
    return this.view?.map?.basemap?.title ?? null;
  }
  set basemapTitle(e6) {
    this._override("basemapTitle", e6);
  }
  get state() {
    return this.view?.ready ? "ready" : this.view ? "loading" : "disabled";
  }
  get totalBaseItems() {
    return this.baseItems.flatten((e6) => e6.children).length;
  }
  get totalReferenceItems() {
    return this.referenceItems.flatten((e6) => e6.children).length;
  }
  triggerAction(e6, s3) {
    e6 && !e6.disabled && this.emit("trigger-action", {
      action: e6,
      item: s3
    });
  }
  moveListItem({
    targetItem: e6,
    fromParentItem: s3,
    toParentItem: t4,
    from: i3,
    to: a3,
    newIndex: r3
  }) {
    const l3 = e6?.layer;
    if (!l3 || "subtype-sublayer" === l3.type || "sublayer" === l3.type) return;
    const o2 = this.view?.map?.basemap, c = o2?.baseLayers, m3 = o2?.referenceLayers, d4 = s3 ? f(s3) : "base" === i3 ? c : m3, h2 = t4 ? f(t4) : "base" === a3 ? c : m3;
    if (!d4 || !h2) return;
    const {
      baseItems: p2,
      referenceItems: y4
    } = this, b = "base" === i3 ? p2 : y4, L = "base" === a3 ? p2 : y4, f2 = s3?.children || b, u2 = t4?.children || L, I2 = h2.length - r3;
    e6.parent = t4 || null, f2.remove(e6), d4.remove(l3), u2.includes(e6) || u2.add(e6, I2), h2.includes(l3) || h2.add(l3, I2), this._compileLists();
  }
  _createItemChangeHandles({
    items: e6,
    key: s3,
    callback: t4
  }) {
    this.removeHandles(s3), t4(), e6 && this.addHandles(e6.on("change", () => t4()), s3);
  }
  _createListItem({
    layer: e6,
    type: s3
  }) {
    const {
      view: t4,
      baseListItemCreatedFunction: i3,
      referenceListItemCreatedFunction: a3,
      checkPublishStatusEnabled: r3,
      listModeDisabled: l3
    } = this;
    return new I({
      layer: e6,
      checkPublishStatusEnabled: r3,
      listItemCreatedFunction: "base" === s3 ? i3 : a3,
      listModeDisabled: l3,
      view: t4
    });
  }
  _watchLayersListMode({
    layers: e6,
    key: s3,
    callback: t4
  }) {
    this.removeHandles(s3), e6 && !this.listModeDisabled && this.addHandles(d(() => e6.filter((e7) => "listMode" in e7).map((e7) => e7.listMode).toArray(), () => t4()), s3);
  }
  _getViewableLayers(e6) {
    return e6 ? this.listModeDisabled ? e6 : e6.filter((e7) => u(e7) !== d3) : void 0;
  }
  _compileListItems({
    layers: e6,
    items: s3,
    key: t4,
    type: i3,
    callback: a3
  }) {
    this._watchLayersListMode({
      layers: e6,
      key: t4,
      callback: a3
    });
    const r3 = this._getViewableLayers(e6);
    r3?.length ? (this._createNewItems({
      type: i3,
      items: s3,
      layers: r3
    }), this._removeItems({
      items: s3,
      layers: r3
    }), this._sortItems(s3, r3)) : "base" === i3 ? this._removeAllBaseItems() : this._removeAllReferenceItems();
  }
  _compileReferenceList() {
    const {
      referenceItems: e6
    } = this, s3 = this.view?.map?.basemap?.referenceLayers;
    this._compileListItems({
      type: "reference",
      layers: s3,
      items: e6,
      key: m2.referenceLayersListMode,
      callback: this._compileReferenceList
    });
  }
  _compileBaseList() {
    const {
      baseItems: e6
    } = this, s3 = this.view?.map?.basemap?.baseLayers;
    this._compileListItems({
      type: "base",
      layers: s3,
      items: e6,
      key: m2.baseLayersListMode,
      callback: this._compileBaseList
    });
  }
  _compileLists() {
    this._compileReferenceList(), this._compileBaseList();
  }
  _createNewItems({
    items: e6,
    layers: s3,
    type: t4
  }) {
    s3?.forEach((s4) => {
      e6.some((e7) => e7.layer === s4) || e6.add(this._createListItem({
        type: t4,
        layer: s4
      }));
    });
  }
  _removeItems({
    items: e6,
    layers: s3
  }) {
    e6 && e6.forEach((t4) => {
      if (!t4) return;
      const i3 = s3?.some((e7) => t4.layer === e7);
      i3 || (this.removeHandles(`${m2.children}-${t4.uid}`), e6.remove(t4), t4.destroy());
    });
  }
  _sortItems(e6, s3) {
    e6 && s3 && e6.sort((e7, t4) => {
      const i3 = s3.indexOf(e7.layer), a3 = s3.indexOf(t4.layer);
      return i3 > a3 ? -1 : i3 < a3 ? 1 : 0;
    });
  }
  _removeAllBaseItems() {
    this.baseItems.drain((e6) => {
      this.removeHandles(`${m2.children}-${e6.uid}`), e6.destroy();
    });
  }
  _removeAllReferenceItems() {
    this.referenceItems.drain((e6) => {
      this.removeHandles(`${m2.children}-${e6.uid}`), e6.destroy();
    });
  }
  _baseListItemCreatedFunctionChanged() {
    this._removeAllBaseItems(), this._compileLists();
  }
  _referenceListItemCreatedFunctionChanged() {
    this._removeAllReferenceItems(), this._compileLists();
  }
  _watchBasemapLayers() {
    const {
      view: e6
    } = this;
    if (this.removeHandles([m2.baseLayers, m2.referenceLayers, m2.basemap, m2.baseLayerViews, m2.referenceLayerViews]), !e6?.ready) return this._removeAllBaseItems(), void this._removeAllReferenceItems();
    this._compileLists(), this.addHandles([d(() => this.view?.map?.basemap?.baseLayers, (e7) => this._createItemChangeHandles({
      items: e7,
      key: m2.baseLayers,
      callback: this._compileBaseList
    }), P), d(() => this.view?.map?.basemap?.referenceLayers, (e7) => this._createItemChangeHandles({
      items: e7,
      key: m2.referenceLayers,
      callback: this._compileReferenceList
    }), P), d(() => this.view?.basemapView?.baseLayerViews, (e7) => this._createItemChangeHandles({
      items: e7,
      key: m2.baseLayerViews,
      callback: this._compileBaseList
    }), P), d(() => this.view?.basemapView?.referenceLayerViews, (e7) => this._createItemChangeHandles({
      items: e7,
      key: m2.referenceLayerViews,
      callback: this._compileReferenceList
    }), P)], m2.basemap);
  }
};
e([y({
  type: h,
  readOnly: true
})], p.prototype, "baseItems", void 0), e([y()], p.prototype, "basemapTitle", null), e([y()], p.prototype, "baseListItemCreatedFunction", void 0), e([y()], p.prototype, "checkPublishStatusEnabled", void 0), e([y({
  nonNullable: true
})], p.prototype, "listModeDisabled", void 0), e([y()], p.prototype, "referenceListItemCreatedFunction", void 0), e([y({
  type: h,
  readOnly: true
})], p.prototype, "referenceItems", void 0), e([y({
  readOnly: true
})], p.prototype, "state", null), e([y()], p.prototype, "totalBaseItems", null), e([y()], p.prototype, "totalReferenceItems", null), e([y()], p.prototype, "view", void 0), p = e([a("esri.widgets.BasemapLayerList.BasemapLayerListViewModel")], p);
var y3 = p;

// ../../../node_modules/@arcgis/core/widgets/BasemapLayerList/BasemapLayerListVisibleElements.js
var s2 = class extends S {
  constructor() {
    super(...arguments), this.baseLayers = true, this.catalogLayerList = true, this.closeButton = false, this.collapseButton = false, this.editTitleButton = false, this.errors = false, this.filter = false, this.flow = true, this.heading = true, this.referenceLayers = true, this.statusIndicators = true, this.temporaryLayerIndicators = false;
  }
};
e([y({
  type: Boolean,
  nonNullable: true
})], s2.prototype, "baseLayers", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s2.prototype, "catalogLayerList", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s2.prototype, "closeButton", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s2.prototype, "collapseButton", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s2.prototype, "editTitleButton", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s2.prototype, "errors", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s2.prototype, "filter", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s2.prototype, "flow", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s2.prototype, "heading", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s2.prototype, "referenceLayers", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s2.prototype, "statusIndicators", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s2.prototype, "temporaryLayerIndicators", void 0), s2 = e([a("esri.widgets.BasemapLayerList.BasemapLayerListVisibleElements")], s2);
var l2 = s2;

// ../../../node_modules/@arcgis/core/widgets/BasemapLayerList/css.js
var t3 = "esri-basemap-layer-list";
var i2 = `${t3}__item`;
var e5 = {
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
  itemCatalogIcon: `${i2}-catalog-icon`,
  statusIndicator: `${t3}__status-indicator`,
  publishing: `${t3}__publishing`,
  updating: `${t3}__updating`,
  editing: `${t3}__editing`,
  connectionStatus: `${t3}__connection-status`,
  connectionStatusConnected: `${t3}__connection-status--connected`,
  visibleToggle: `${t3}__visible-toggle`,
  visibleIcon: `${t3}__visible-icon`,
  section: `${t3}__section`
};

// ../../../node_modules/@arcgis/core/widgets/BasemapLayerList.js
var S2 = V.ofType(I);
var x2 = ".*\\S+.*";
var j = class extends s(B) {
  constructor(e6, t4) {
    super(e6, t4), this._activeItem = null, this._tooltipReferenceMap = /* @__PURE__ */ new Map(), this._editTitleInput = null, this._focusRootFlowItem = false, this._focusPanelFlowItem = false, this._focusEditingFlowItem = false, this._focusCatalogFlowItem = false, this._lastDragDetail = null, this._selectedDragItemLayerUid = null, this._rootGroupUid = `basemap-${this.uid}`, this.catalogLayerList = null, this.catalogOptions = null, this.collapsed = false, this.dragEnabled = false, this.editingTitle = false, this.filterPlaceholder = "", this.baseFilterText = "", this.referenceFilterText = "", this.listItemCanGiveFunction = null, this.listItemCanReceiveFunction = null, this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.minFilterItems = n5, this.openCatalogItem = null, this.selectedItems = new S2(), this.selectionMode = "none", this.viewModel = new y3(), this.visibilityAppearance = "default", this.visibleElements = new l2(), this._canMove = ({
      dragEl: e7,
      fromEl: t5,
      toEl: i3
    }, s3) => {
      const o2 = "pull" === s3 ? this.listItemCanGiveFunction : this.listItemCanReceiveFunction, l3 = x(e7);
      if (!l3?.sortable) return false;
      const n6 = x(t5), a3 = M(t5), r3 = x(i3), c = M(i3), d4 = !!a3 && !!c && a3 === c, m3 = {
        selected: l3,
        from: n6,
        to: r3
      }, p2 = t5.group, u2 = i3.group, h2 = n6?.layer?.type ?? "", g = r3?.layer?.type ?? "", b = /* @__PURE__ */ new Set(["map-image", "catalog", "knowledge-graph"]), _ = "sublayer";
      return p2 && u2 && "function" == typeof o2 ? o2.call(null, m3) : d4 && !b.has(h2) && !b.has(g) && l3?.layer?.type !== _;
    }, this._clearActiveItem = () => {
      this._activeItem = null;
    }, this._setActiveItem = (e7) => {
      if ("default" !== this.visibilityAppearance) return;
      const t5 = Array.from(e7.composedPath()).find((e8) => e8.classList?.contains(e5.item));
      this._activeItem = x(t5);
    }, this._onCalciteListOrderChange = (e7) => {
      const {
        _lastDragDetail: t5
      } = this, {
        toEl: i3,
        fromEl: s3,
        dragEl: o2,
        newIndex: l3
      } = e7;
      if (!s3 || !i3 || t5?.newIndex === l3 && t5?.dragEl === o2 && t5?.toEl === i3 && t5?.fromEl === s3) return;
      this._lastDragDetail = e7;
      const n6 = s3, a3 = i3;
      if (n6 !== a3) this._moveLayerFromChildList({
        toEl: a3,
        fromEl: n6,
        dragEl: o2,
        newIndex: l3
      });
      else {
        const e8 = Array.from(s3.children).filter((e9) => e9?.matches("calcite-list-item")).map((e9) => e9.value);
        this._sortLayers(n6, e8);
      }
    };
  }
  initialize() {
    this.addHandles([d(() => this.openCatalogItem, (e6) => e6 ? this._createCatalog() : this._destroyCatalog())]);
  }
  normalizeCtorArgs(e6) {
    return null != e6?.editingEnabled && null != e6.visibleElements ? __spreadProps(__spreadValues({}, e6), {
      visibleElements: new l2(__spreadProps(__spreadValues({}, e6.visibleElements), {
        editTitleButton: e6.editingEnabled
      }))
    }) : e6;
  }
  loadDependencies() {
    return r({
      action: () => import("./calcite-action-M3FHAAKV.js"),
      "action-group": () => import("./calcite-action-group-FVEIIC4M.js"),
      "action-menu": () => import("./calcite-action-menu-YNRKAV4X.js"),
      block: () => import("./calcite-block-PSHTVVZX.js"),
      label: () => import("./calcite-label-NSQ5QQOX.js"),
      input: () => import("./calcite-input-WHALBGAT.js"),
      button: () => import("./calcite-button-TT4KT5XH.js"),
      flow: () => import("./calcite-flow-TTW7IFPM.js"),
      "flow-item": () => import("./calcite-flow-item-4IHVAYF2.js"),
      icon: () => import("./calcite-icon-FE3MORNT.js"),
      list: () => import("./calcite-list-QRFMTME5.js"),
      "list-item": () => import("./calcite-list-item-MF2DTJRA.js"),
      notice: () => import("./calcite-notice-56I7IIQT.js"),
      tooltip: () => import("./calcite-tooltip-AYI56I5U.js")
    });
  }
  destroy() {
    this._tooltipReferenceMap.clear();
  }
  get _totalBaseItems() {
    return this.viewModel.baseItems.flatten((e6) => e6.children.filter((e7) => "catalog-dynamic-group" !== e7.layer.type)).length;
  }
  get _totalReferenceItems() {
    return this.viewModel.referenceItems.flatten((e6) => e6.children.filter((e7) => "catalog-dynamic-group" !== e7.layer.type)).length;
  }
  get _baseFilterEnabled() {
    return this._totalBaseItems >= this.minFilterItems && this.visibleElements.filter;
  }
  get _referenceFilterEnabled() {
    return this._totalReferenceItems >= this.minFilterItems && this.visibleElements.filter;
  }
  get basemapTitle() {
    return this.viewModel.basemapTitle;
  }
  set basemapTitle(e6) {
    this.viewModel.basemapTitle = e6;
  }
  get baseListItemCreatedFunction() {
    return this.viewModel.baseListItemCreatedFunction;
  }
  set baseListItemCreatedFunction(e6) {
    this.viewModel.baseListItemCreatedFunction = e6;
  }
  get editingEnabled() {
    return i(n.getLogger(this), "editingEnabled", {
      replacement: "selectionMode, dragEnabled, visibleElements.editTitleButton",
      version: "4.29",
      warnOnce: true
    }), "none" !== this.selectionMode && this.dragEnabled && this.visibleElements.editTitleButton;
  }
  set editingEnabled(e6) {
    i(n.getLogger(this), "editingEnabled", {
      replacement: "selectionMode, dragEnabled, visibleElements.editTitleButton",
      version: "4.29",
      warnOnce: true
    }), this.dragEnabled = e6, this.visibleElements.editTitleButton = e6, this.selectionMode = e6 ? this.multipleSelectionEnabled ? "multiple" : "single" : "none";
  }
  get icon() {
    return "layers";
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
  get multipleSelectionEnabled() {
    return i(n.getLogger(this), "multipleSelectionEnabled", {
      replacement: "selectionMode",
      version: "4.29",
      warnOnce: true
    }), "multiple" === this.selectionMode;
  }
  set multipleSelectionEnabled(e6) {
    i(n.getLogger(this), "multipleSelectionEnabled", {
      replacement: "selectionMode",
      version: "4.29",
      warnOnce: true
    }), this.selectionMode = e6 ? "multiple" : this.editingEnabled ? "single" : "none";
  }
  get referenceListItemCreatedFunction() {
    return this.viewModel.referenceListItemCreatedFunction;
  }
  set referenceListItemCreatedFunction(e6) {
    this.viewModel.referenceListItemCreatedFunction = e6;
  }
  get baseItems() {
    return this.viewModel.baseItems;
  }
  get referenceItems() {
    return this.viewModel.referenceItems;
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
    const {
      state: e6
    } = this.viewModel, t4 = {
      [e3.hidden]: "loading" === e6,
      [e3.disabled]: "disabled" === e6
    };
    return n2("div", {
      class: this.classes(e5.base, e3.widget, e3.panel, t4)
    }, this._renderItems());
  }
  _renderItemTooltip(e6) {
    return e6 ? n2("calcite-tooltip", {
      key: `tooltip-${e6.layer.uid}`,
      referenceElement: this._tooltipReferenceMap.get(e6.layer.uid)
    }, this.messages.layerIncompatibleTooltip) : null;
  }
  _renderItemTooltipNodes(e6) {
    return e6.incompatible ? this._renderItemTooltip(e6) : e6.children?.filter((e7) => !e7.hidden).toArray().map((e7) => this._renderItemTooltipNodes(e7));
  }
  _renderItemTooltips(e6) {
    return e6?.toArray().map((e7) => this._renderItemTooltipNodes(e7));
  }
  _createCatalog() {
    return __async(this, null, function* () {
      this._destroyCatalog();
      const {
        default: e6
      } = yield import("./CatalogLayerList-MKPR4PTA.js"), {
        headingLevel: t4,
        catalogOptions: i3,
        view: s3,
        filterPlaceholder: o2,
        baseListItemCreatedFunction: l3,
        referenceListItemCreatedFunction: n6,
        minFilterItems: a3,
        selectionMode: r3,
        visibilityAppearance: c,
        openCatalogItem: d4,
        referenceItems: m3
      } = this, p2 = d4 && m3.flatten((e7) => e7.children).includes(d4) ? "reference" : "base", u2 = this.openCatalogItem?.layer;
      this._set("catalogLayerList", new e6(__spreadProps(__spreadValues({
        headingLevel: t4,
        view: s3,
        filterPlaceholder: o2,
        minFilterItems: a3,
        selectionMode: r3,
        listItemCreatedFunction: "base" === p2 ? l3 : n6,
        visibilityAppearance: c
      }, i3), {
        catalogLayer: u2
      })));
    });
  }
  _destroyCatalog() {
    this.catalogLayerList?.destroy(), this._set("catalogLayerList", null);
  }
  _renderCatalogFlowItem() {
    const {
      openCatalogItem: e6,
      messages: t4
    } = this;
    if (!e6) return null;
    const i3 = this._getLayerTitle(e6);
    return n2("calcite-flow-item", {
      afterCreate: this._focusCatalogFlowItemNode,
      afterUpdate: this._focusCatalogFlowItemNode,
      bind: this,
      description: i3,
      heading: t4.catalogLayers,
      headingLevel: this.headingLevel,
      key: `flow-catalog-${e6.uid}`,
      onCalciteFlowItemBack: (e7) => {
        e7.preventDefault(), this.openCatalogItem = null, this._focusRootFlowItem = true;
      }
    }, this.catalogLayerList?.render());
  }
  _focusCatalogFlowItemNode(e6) {
    this._focusCatalogFlowItem && (this._focusCatalogFlowItem = false, requestAnimationFrame(() => e6?.setFocus()));
  }
  _renderPanelFlowItems(e6) {
    return e6 ? e6.flatten((e7) => e7.children).filter(({
      hidden: e7,
      panel: t4
    }) => !e7 && t4?.open && !t4.disabled && t4.flowEnabled).toArray().map(({
      title: e7,
      panel: t4
    }) => {
      const i3 = () => this._handlePanelFlowItemBack(t4);
      return n2("calcite-flow-item", {
        afterCreate: this._focusPanelFlowItemNode,
        afterUpdate: this._focusPanelFlowItemNode,
        bind: this,
        description: e7,
        heading: t4.title,
        headingLevel: this.headingLevel,
        key: `flow-panel-${t4.uid}`,
        onCalciteFlowItemBack: (e8) => {
          e8.preventDefault(), i3();
        }
      }, t4.render(), n2("calcite-button", {
        appearance: "transparent",
        onclick: i3,
        slot: "footer-actions",
        width: "full"
      }, this.messagesCommon.back));
    }) : [];
  }
  _handlePanelFlowItemBack(e6) {
    e6.open = false, this._focusRootFlowItem = true;
  }
  _focusEditingFlowItemNode(e6) {
    this._focusEditingFlowItem && (this._focusEditingFlowItem = false, requestAnimationFrame(() => e6?.setFocus()));
  }
  _focusRootFlowItemNode(e6) {
    this._focusRootFlowItem && (this._focusRootFlowItem = false, requestAnimationFrame(() => e6?.setFocus()));
  }
  _focusPanelFlowItemNode(e6) {
    this._focusPanelFlowItem && (this._focusPanelFlowItem = false, requestAnimationFrame(() => e6?.setFocus()));
  }
  _renderItemMessage(e6) {
    return e6.error ? n2("div", {
      class: e5.itemMessage,
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
    }, this.messages.layerError))) : e6.incompatible ? n2("div", {
      class: e5.itemMessage,
      key: "esri-layer-list__incompatible",
      slot: "content-bottom"
    }, n2("calcite-notice", {
      afterCreate: (t4) => this._setTooltipReference(t4, e6),
      afterRemoved: () => this._removeTooltipReference(e6),
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
  _getLayerTitle(e6) {
    return e6.title || this.messages.untitledLayer;
  }
  _renderItem(e6, t4, i3, s3, o2) {
    const {
      _activeItem: l3,
      _selectedDragItemLayerUid: n6,
      selectionMode: a3,
      selectedItems: r3,
      messages: c,
      visibleElements: d4
    } = this, m3 = this._getLayerTitle(e6), p2 = e6.visibleAtCurrentTimeExtent ? e6.visibleAtCurrentScale ? m3 : `${m3} (${c.layerInvisibleAtScale})` : `${m3} (${c.layerInvisibleAtTime})`, h2 = this._filterActions(e6.actionsSections), g = this._countActions(h2), f2 = "catalog" === e6.parent?.layer?.type, y4 = "catalog-footprint" === e6.layer?.type, b = "catalog-dynamic-group" === e6.layer?.type, _ = y4 ? n2("calcite-icon", {
      class: e5.itemCatalogIcon,
      icon: "footprint",
      key: "footprint",
      scale: "s",
      slot: "content-start"
    }) : null, v = d4.catalogLayerList && b ? n2("calcite-icon", {
      class: e5.itemCatalogIcon,
      icon: "catalog-dataset",
      key: "catalog-dataset",
      scale: "s",
      slot: "content-start"
    }) : null, I2 = b ? n2("calcite-action", {
      appearance: "transparent",
      icon: "chevron-right",
      iconFlipRtl: true,
      onclick: () => {
        this.openCatalogItem = s3, this._focusCatalogFlowItem = true;
      },
      scale: "s",
      slot: "actions-end",
      text: m3
    }) : null;
    return n2("calcite-list-item", {
      afterCreate: (t5) => this._focusSelectedDragEl(t5, e6),
      afterUpdate: (t5) => this._focusSelectedDragEl(t5, e6),
      class: this.classes(e5.item, {
        [e5.itemActive]: l3 === e6
      }),
      "data-item": e6,
      "data-layer-id": e6.layer.id,
      dragDisabled: !e6.sortable || i3 || f2,
      dragSelected: e6.layer.uid === n6,
      id: e6.layer.uid,
      key: `list-item-${e6.layer.uid}`,
      label: m3,
      metadata: {
        parentTitles: o2,
        title: m3
      },
      open: e6.open,
      selected: "none" !== a3 && r3.includes(e6),
      title: p2,
      value: e6.layer.uid,
      onCalciteListItemDragHandleChange: (t5) => this._handleCalciteListItemDragHandleChange(t5, e6),
      onCalciteListItemSelect: (t5) => this._handleCalciteListItemSelect(t5, e6, s3),
      onCalciteListItemToggle: (t5) => this._handleCalciteListItemToggle(t5, e6)
    }, _, v, n2("div", {
      class: this.classes({
        [e5.itemContent]: true,
        [e5.itemInvisible]: !e6.visibleAtCurrentScale || !e6.visibleAtCurrentTimeExtent
      }),
      slot: "content"
    }, m3), this._renderItemStatus(e6, s3), this._renderItemToggle(e6, s3), I2, this._renderItemTemporaryIcon(e6), this._renderChildList(e6, t4, o2), this._renderItemMessage(e6), this._renderPanel(e6.panel), this._renderPanelAction(e6.panel), g > 1 ? this._renderActionsSections(e6, h2) : 1 === g ? this._renderAction({
      item: e6,
      action: this._getSingleAction(h2),
      textEnabled: false
    }) : null);
  }
  _renderItemStatus(e6, t4) {
    const {
      visibleElements: i3
    } = this;
    if (!i3.statusIndicators) return null;
    const {
      connectionStatus: s3,
      publishing: o2,
      updating: l3
    } = e6, n6 = l3 && !t4, a3 = !!s3;
    return n2("calcite-icon", {
      class: this.classes({
        [e5.statusIndicator]: true,
        [e5.publishing]: o2,
        [e5.updating]: n6,
        [e5.connectionStatus]: a3,
        [e5.connectionStatusConnected]: a3 && "connected" === s3
      }),
      icon: r2({
        connectionStatus: s3,
        publishing: o2
      }),
      key: "layer-item-status",
      scale: "s",
      slot: "actions-end"
    });
  }
  _renderItemTemporaryIcon(e6) {
    return this.visibleElements.temporaryLayerIndicators && "persistenceEnabled" in e6.layer && !e6.layer.persistenceEnabled ? n2("calcite-icon", {
      class: e5.itemTemporaryIcon,
      icon: "temporary",
      key: "temporary-icon",
      scale: "s",
      slot: "actions-start",
      title: this.messages.temporary
    }) : null;
  }
  _renderItemToggle(e6, t4) {
    const {
      messages: i3,
      visibilityAppearance: s3
    } = this, {
      visible: o2
    } = e6, l3 = t4?.visibilityMode;
    if ("inherited" === l3) return null;
    const n6 = t2({
      visible: o2,
      exclusive: "exclusive" === l3,
      visibilityAppearance: s3
    }), a3 = "checkbox" === s3, r3 = i3.layerVisibility;
    return n2("calcite-action", {
      appearance: "transparent",
      class: e5.visibleToggle,
      icon: a3 ? n6 : void 0,
      key: "visibility-toggle",
      onclick: () => this._toggleVisibility(e6, t4),
      scale: "s",
      slot: a3 ? "actions-start" : "actions-end",
      text: r3,
      title: r3
    }, a3 ? null : n2("calcite-icon", {
      class: this.classes({
        [e5.visibleIcon]: "exclusive" !== l3 && o2
      }),
      icon: n6,
      scale: "s"
    }));
  }
  _renderPanel(e6) {
    return !e6?.open || e6.disabled || e6.flowEnabled ? null : n2("div", {
      class: e5.itemContentBottom,
      key: `content-panel-${e6.uid}`,
      slot: "content-bottom"
    }, e6.render());
  }
  _renderPanelAction(e6) {
    if (!e6?.visible) return null;
    const {
      open: t4,
      title: i3,
      disabled: s3
    } = e6;
    return n2("calcite-action", {
      active: t4,
      appearance: "transparent",
      disabled: s3,
      icon: t(e6),
      key: `action-${e6.uid}`,
      onclick: () => this._togglePanel(e6),
      scale: "s",
      slot: "actions-end",
      text: i3 ?? "",
      title: i3 ?? void 0
    }, this._renderFallbackIcon(e6));
  }
  _renderActionsSections(e6, t4) {
    const i3 = this.messagesCommon.options;
    return n2("calcite-action-menu", {
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
    }, n2("calcite-action", {
      appearance: "transparent",
      icon: "ellipsis",
      scale: "s",
      slot: "trigger",
      text: i3,
      title: i3
    }), t4.toArray().map((t5, i4) => this._renderActionSection(e6, t5, i4)));
  }
  _renderActionSection(e6, t4, i3) {
    return n2("calcite-action-group", {
      class: e5.actionGroup,
      key: `action-section-${i3}`
    }, t4.toArray().map((t5) => this._renderAction({
      item: e6,
      action: t5,
      textEnabled: true
    })));
  }
  _renderFallbackIcon(e6) {
    const {
      className: t4,
      icon: i3
    } = e6;
    if (i3) return null;
    const s3 = "image" in e6 ? e6.image : void 0, o2 = {
      [e5.itemActionIcon]: !!t4,
      [e5.itemActionImage]: !!s3
    };
    return t4 && (o2[t4] = true), s3 || t4 ? n2("span", {
      "aria-hidden": "true",
      class: this.classes(e5.itemActionIcon, o2),
      key: "icon",
      styles: n3(s3)
    }) : null;
  }
  _renderAction(e6) {
    const {
      item: t4,
      action: i3,
      textEnabled: s3
    } = e6;
    if (!i3) return null;
    const {
      active: o2,
      disabled: l3,
      title: n6,
      type: a3,
      indicator: c
    } = i3;
    return n2("calcite-action", {
      active: "toggle" === a3 && i3.value,
      appearance: "transparent",
      disabled: l3,
      icon: t(i3),
      indicator: c,
      key: `action-${i3.uid}`,
      loading: o2,
      onclick: () => this._triggerAction(t4, i3),
      scale: "s",
      slot: s3 ? void 0 : "actions-end",
      text: n6 ?? "",
      textEnabled: s3,
      title: n6 ?? void 0
    }, this._renderFallbackIcon(i3));
  }
  _setTooltipReference(e6, t4) {
    this._tooltipReferenceMap.set(t4.layer.uid, e6);
  }
  _removeTooltipReference(e6) {
    this._tooltipReferenceMap.delete(e6.layer.uid);
  }
  _moveLayerFromChildList({
    toEl: e6,
    fromEl: t4,
    dragEl: i3,
    newIndex: s3
  }) {
    const o2 = x(i3), l3 = x(e6), n6 = x(t4), a3 = B2(t4), r3 = B2(e6);
    a3 && r3 && this.viewModel.moveListItem({
      targetItem: o2,
      fromParentItem: n6,
      toParentItem: l3,
      newIndex: s3,
      from: a3,
      to: r3
    });
  }
  _handleCalciteListDragEnd(e6) {
    const {
      fromEl: t4,
      dragEl: i3,
      oldIndex: s3
    } = e6;
    t4.insertBefore(i3, t4.children[s3]);
  }
  _sortLayers(e6, t4) {
    if (e6) if (e6.group === this._rootGroupUid) {
      const i3 = B2(e6), s3 = "base" === i3 ? this.view?.map?.basemap?.baseLayers : "reference" === i3 ? this.view?.map?.basemap?.referenceLayers : null;
      d2(s3, t4);
    } else {
      const i3 = x(e6);
      if (!i3) return;
      y2(i3, t4);
    }
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
      selectedItems: i3
    } = this;
    if ("none" === t4) return;
    const s3 = e6.target.selectedItems.map((e7) => x(e7)).filter(Boolean);
    i3.removeAll(), i3.addMany(s3);
  }
  _handleCalciteListItemToggle(e6, t4) {
    e6.stopPropagation(), t4.open = e6.target.open;
  }
  _focusSelectedDragEl(e6, t4) {
    this._selectedDragItemLayerUid === t4.layer.uid && requestAnimationFrame(() => e6?.setFocus());
  }
  _handleCalciteListItemDragHandleChange(e6, t4) {
    e6.stopPropagation();
    const i3 = e6.target.dragSelected;
    this._selectedDragItemLayerUid = i3 ? t4.layer.uid : null;
  }
  _handleCalciteListItemSelect(e6, t4, i3) {
    x(e6.target) === t4 && "none" === this.selectionMode && "inherited" !== i3?.visibilityMode && this._toggleVisibility(t4, i3);
  }
  _togglePanel(e6) {
    e6.open = !e6.open, e6.open && (this._focusPanelFlowItem = true);
  }
  _toggleVisibility(e6, t4) {
    if (!e6) return;
    const i3 = t4?.visibilityMode;
    "exclusive" === i3 && e6.visible || (e6.visible = !e6.visible);
  }
  _renderEditingInput() {
    const {
      messages: e6
    } = this, {
      basemapTitle: t4
    } = this.viewModel;
    return n2("div", {
      class: e5.editing
    }, n2("calcite-label", null, e6.basemapTitle, n2("calcite-input", {
      afterCreate: (e7) => this._editTitleInput = e7,
      label: e6.basemapTitle,
      name: "basemaptitle",
      pattern: x2,
      placeholder: e6.basemapTitle,
      required: true,
      title: e6.basemapTitle,
      type: "text",
      value: t4 ?? void 0
    })));
  }
  _renderCancelButton() {
    const {
      messagesCommon: {
        cancel: e6
      }
    } = this;
    return n2("calcite-button", {
      appearance: "outline",
      bind: this,
      label: e6,
      onclick: this._toggleEditingTitle,
      slot: "footer",
      title: e6,
      width: "half"
    }, e6);
  }
  _renderSubmitButton() {
    const {
      messagesCommon: e6
    } = this;
    return n2("calcite-button", {
      label: e6.form.submit,
      slot: "footer",
      title: e6.form.submit,
      type: "submit",
      width: "half"
    }, e6.form.ok);
  }
  _renderEditingForm() {
    return this.editingTitle ? n2("form", {
      bind: this,
      onsubmit: this._formSubmit
    }, n2("calcite-flow-item", {
      afterCreate: this._focusEditingFlowItemNode,
      afterUpdate: this._focusEditingFlowItemNode,
      bind: this,
      heading: this.visibleElements.heading ? this.messages.basemapTitle : void 0,
      headingLevel: this.headingLevel,
      onCalciteFlowItemBack: (e6) => {
        e6.preventDefault(), this._toggleEditingTitle();
      }
    }, this._renderEditingInput(), this._renderCancelButton(), this._renderSubmitButton())) : null;
  }
  _renderEditTitleButton() {
    const {
      editingTitle: e6,
      visibleElements: t4,
      messagesCommon: i3
    } = this, s3 = i3.edit;
    return t4.editTitleButton && !e6 ? n2("calcite-action", {
      bind: this,
      icon: "pencil",
      onclick: this._toggleEditingTitle,
      slot: "header-actions-end",
      text: s3,
      title: s3
    }) : null;
  }
  _renderNoLayersInfoMessage(e6) {
    return n2("div", {
      slot: "message"
    }, e6);
  }
  _renderNoLayersInfo(e6, t4) {
    return n2("div", {
      class: e5.itemMessage
    }, n2("calcite-notice", {
      icon: "information",
      key: t4,
      kind: "info",
      open: true,
      width: "full"
    }, this._renderNoLayersInfoMessage(e6)));
  }
  _getFilteredItems(e6) {
    return e6?.filter((e7) => !e7.hidden && (this.visibleElements.errors || !e7.error));
  }
  _renderItems() {
    const {
      collapsed: e6,
      visible: t4,
      visibleElements: {
        closeButton: i3,
        collapseButton: s3,
        heading: o2,
        flow: l3
      },
      messages: n6,
      viewModel: a3,
      referenceItems: r3,
      baseItems: c
    } = this, d4 = this.visibleElements.referenceLayers ? this._getFilteredItems(r3) : null, m3 = this.visibleElements.baseLayers ? this._getFilteredItems(c) : null, p2 = [n2("calcite-flow-item", {
      afterCreate: this._focusRootFlowItemNode,
      afterUpdate: this._focusRootFlowItemNode,
      bind: this,
      closable: i3,
      closed: !t4,
      collapsed: e6,
      collapsible: s3,
      heading: o2 ? a3.basemapTitle ?? n6.widgetLabel : void 0,
      headingLevel: this.headingLevel,
      key: "root-flow-item",
      onCalciteFlowItemClose: () => this.visible = false
    }, this._renderEditTitleButton(), this._renderReferenceSection(d4), this._renderBaseSection(m3, 1 === m3?.length)), this._renderEditingForm(), this._renderPanelFlowItems(m3), this._renderPanelFlowItems(d4), this._renderCatalogFlowItem()];
    return t4 ? [l3 ? n2("calcite-flow", {
      key: "root-flow"
    }, p2) : p2, this._renderItemTooltips(d4), this._renderItemTooltips(m3)] : null;
  }
  _renderChildList(e6, t4, i3 = []) {
    const {
      _rootGroupUid: s3,
      dragEnabled: o2,
      viewModel: {
        listModeDisabled: l3
      },
      selectionMode: n6
    } = this, {
      children: a3
    } = e6, r3 = "catalog-dynamic-group" !== e6.layer?.type && m(e6), c = !(!l3 && l(e6.layer)) && !r3 && o2 && "group" === e6.layer?.type;
    return r3 || c ? n2("calcite-list", {
      canPull: (e7) => this._canMove(e7, "pull"),
      canPut: (e7) => this._canMove(e7, "put"),
      "data-basemap-layer-type": t4,
      "data-item": e6,
      "data-layer-type": s3,
      dragEnabled: !!o2 && e6.childrenSortable && a2(e6),
      group: `${s3}-${e6.layer.uid}`,
      key: `child-list-${e6.layer.uid}`,
      selectionAppearance: "border",
      selectionMode: n6
    }, a3?.filter((e7) => !e7.hidden).toArray().map((s4) => this._renderItem(s4, t4, false, e6, [...i3, e6.title]))) : null;
  }
  _renderList(e6, t4, i3) {
    const {
      messages: s3,
      dragEnabled: o2,
      selectionMode: l3,
      filterPlaceholder: n6,
      baseFilterText: a3,
      referenceFilterText: r3,
      _baseFilterEnabled: c,
      _referenceFilterEnabled: d4,
      _rootGroupUid: m3
    } = this, p2 = "reference" === t4 ? s3.noReferenceLayers : s3.noBaseLayers, h2 = "reference" === t4 ? d4 : c;
    return n2("calcite-block", {
      class: e5.section,
      collapsible: true,
      heading: "reference" === t4 ? s3.referenceHeading : s3.baseHeading,
      headingLevel: n4(this.headingLevel),
      key: `block-${t4}`,
      open: true
    }, 0 === e6?.length ? this._renderNoLayersInfo(p2, t4) : null, n2("calcite-list", {
      afterCreate: (e7) => {
        e7.addEventListener("focusin", this._setActiveItem), e7.addEventListener("focusout", this._clearActiveItem);
      },
      afterRemoved: (e7) => {
        e7.removeEventListener("focusin", this._setActiveItem), e7.removeEventListener("focusout", this._clearActiveItem);
      },
      canPull: (e7) => this._canMove(e7, "pull"),
      canPut: (e7) => this._canMove(e7, "put"),
      "data-basemap-layer-type": t4,
      "data-layer-type": m3,
      dragEnabled: o2,
      filterEnabled: h2,
      filterPlaceholder: n6,
      filterText: h2 ? "reference" === t4 ? r3 : a3 : "",
      group: m3,
      key: `list-${t4}`,
      label: s3.widgetLabel,
      onmouseleave: this._clearActiveItem,
      onmouseover: this._setActiveItem,
      selectionAppearance: "border",
      selectionMode: l3,
      onCalciteListChange: (e7) => this._handleCalciteListChange(e7),
      onCalciteListDragEnd: (e7) => this._handleCalciteListDragEnd(e7.detail),
      onCalciteListFilter: (e7) => this["reference" === t4 ? "referenceFilterText" : "baseFilterText"] = e7.target?.filterText ?? "",
      onCalciteListOrderChange: (e7) => this._onCalciteListOrderChange(e7.detail)
    }, e6?.toArray().map((e7) => this._renderItem(e7, t4, i3)), e6?.length && h2 ? n2("div", {
      class: e5.filterNoResults,
      slot: "filter-no-results"
    }, n2("calcite-notice", {
      kind: "info",
      open: true,
      width: "full"
    }, this._renderNoLayersInfoMessage(p2))) : null));
  }
  _renderBaseSection(e6, t4) {
    return this.visibleElements.baseLayers ? this._renderList(e6, "base", t4) : null;
  }
  _renderReferenceSection(e6) {
    return this.visibleElements.referenceLayers ? this._renderList(e6, "reference", false) : null;
  }
  _toggleEditingTitle() {
    const {
      editingTitle: e6
    } = this, t4 = !e6;
    this.editingTitle = t4, t4 ? this._focusEditingFlowItem = true : this._focusRootFlowItem = true;
  }
  _formSubmit(e6) {
    e6.preventDefault();
    const t4 = this._editTitleInput?.value;
    t4?.trim() && (this.basemapTitle = t4), this._toggleEditingTitle();
  }
};
function B2(e6) {
  return e6?.getAttribute("data-basemap-layer-type");
}
e([y()], j.prototype, "_activeItem", void 0), e([y()], j.prototype, "_tooltipReferenceMap", void 0), e([y()], j.prototype, "_focusRootFlowItem", void 0), e([y()], j.prototype, "_focusPanelFlowItem", void 0), e([y()], j.prototype, "_focusEditingFlowItem", void 0), e([y()], j.prototype, "_focusCatalogFlowItem", void 0), e([y()], j.prototype, "_totalBaseItems", null), e([y()], j.prototype, "_totalReferenceItems", null), e([y()], j.prototype, "_baseFilterEnabled", null), e([y()], j.prototype, "_referenceFilterEnabled", null), e([y()], j.prototype, "basemapTitle", null), e([y({
  readOnly: true
})], j.prototype, "catalogLayerList", void 0), e([y()], j.prototype, "catalogOptions", void 0), e([y()], j.prototype, "collapsed", void 0), e([y()], j.prototype, "dragEnabled", void 0), e([y()], j.prototype, "editingTitle", void 0), e([y()], j.prototype, "filterPlaceholder", void 0), e([y()], j.prototype, "baseFilterText", void 0), e([y()], j.prototype, "referenceFilterText", void 0), e([y()], j.prototype, "listItemCanGiveFunction", void 0), e([y()], j.prototype, "listItemCanReceiveFunction", void 0), e([y()], j.prototype, "baseListItemCreatedFunction", null), e([y()], j.prototype, "editingEnabled", null), e([y()], j.prototype, "headingLevel", void 0), e([y()], j.prototype, "icon", null), e([y()], j.prototype, "label", null), e([y(), e2("esri/widgets/BasemapLayerList/t9n/BasemapLayerList")], j.prototype, "messages", void 0), e([y(), e2("esri/t9n/common")], j.prototype, "messagesCommon", void 0), e([y()], j.prototype, "minFilterItems", void 0), e([y()], j.prototype, "multipleSelectionEnabled", null), e([y()], j.prototype, "referenceListItemCreatedFunction", null), e([y({
  readOnly: true
})], j.prototype, "baseItems", null), e([y()], j.prototype, "openCatalogItem", void 0), e([y({
  readOnly: true
})], j.prototype, "referenceItems", null), e([y()], j.prototype, "selectedItems", void 0), e([y()], j.prototype, "selectionMode", void 0), e([y()], j.prototype, "view", null), e([e4("trigger-action"), y({
  type: y3
})], j.prototype, "viewModel", void 0), e([y()], j.prototype, "visibilityAppearance", void 0), e([y({
  type: l2,
  nonNullable: true
})], j.prototype, "visibleElements", void 0), j = e([a("esri.widgets.BasemapLayerList")], j);
var P2 = j;
export {
  P2 as default
};
//# sourceMappingURL=BasemapLayerList-XACY63FP.js.map
