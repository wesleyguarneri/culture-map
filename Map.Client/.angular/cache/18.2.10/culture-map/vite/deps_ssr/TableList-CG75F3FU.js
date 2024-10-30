import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  M,
  a as a3,
  e as e6,
  n as n4,
  u
} from "./chunk-IAY2Q5KW.js";
import {
  n as n3,
  t
} from "./chunk-PCDJV6LA.js";
import {
  e as e5
} from "./chunk-TFJN5Q7A.js";
import {
  e as e4
} from "./chunk-5L5LGHM5.js";
import "./chunk-LTKDZMRF.js";
import {
  e as e3
} from "./chunk-FYGR4X6I.js";
import {
  a as a2,
  c,
  p
} from "./chunk-WVFB3H4O.js";
import {
  s as s2
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
import {
  s
} from "./chunk-66YQWHHE.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import {
  P,
  d
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import {
  o as o2
} from "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S,
  i
} from "./chunk-NXK752PZ.js";
import {
  o,
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
import "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/TableList/css.js
var t2 = "esri-table-list";
var e7 = `${t2}__item`;
var i2 = {
  base: t2,
  actionMenu: `${t2}__action-menu`,
  actionGroup: `${t2}__action-group`,
  filterNoResults: `${t2}__filter-no-results`,
  item: e7,
  itemContent: `${e7}-content`,
  itemContentBottom: `${e7}-content-bottom`,
  itemMessage: `${e7}-message`,
  itemActionIcon: `${e7}-action-icon`,
  itemActionImage: `${e7}-action-image`,
  itemTemporaryIcon: `${e7}-temporary-icon`,
  publishing: `${t2}__publishing`,
  statusIndicator: `${t2}__status-indicator`
};

// ../../../node_modules/@arcgis/core/widgets/TableList/ListItemPanel.js
var l = class extends s2(B) {
  constructor(t4, e8) {
    super(t4, e8), this.className = null, this.content = null, this.flowEnabled = false, this.image = null, this.listItem = null, this.open = false, this.visible = true;
  }
  get disabled() {
    return !(this.content && this.listItem);
  }
  set disabled(t4) {
    this._overrideIfSome("disabled", t4);
  }
  get icon() {
    const {
      image: t4
    } = this, e8 = this._getFirstWidget();
    return this._get("icon") ?? (!t4 && e8 ? e8.icon : null);
  }
  set icon(t4) {
    this._overrideIfSome("icon", t4);
  }
  get title() {
    return this._get("title") || (this._getFirstWidget()?.label ?? "");
  }
  set title(t4) {
    this._override("title", t4);
  }
  render() {
    return n2("div", {
      class: "esri-list-item-panel"
    }, this._renderContents());
  }
  _renderContent(t4) {
    const {
      disabled: e8,
      open: i3
    } = this;
    return t4 && !e8 && i3 ? "string" == typeof t4 ? n2("div", {
      innerHTML: t4,
      key: t4
    }) : e5(t4) ? n2("div", {
      key: "content-widget"
    }, t4.render()) : t4 instanceof HTMLElement ? n2("div", {
      afterCreate: this._attachToNode,
      bind: t4,
      key: "content-element"
    }) : null : null;
  }
  _renderContents() {
    const {
      content: t4,
      open: e8
    } = this;
    return e8 ? Array.isArray(t4) ? t4.map((t5) => this._renderContent(t5)) : this._renderContent(t4) : null;
  }
  _attachToNode(t4) {
    t4.appendChild(this);
  }
  _getWidget(t4) {
    return e5(t4) ? t4 : null;
  }
  _getFirstWidget() {
    const {
      content: t4
    } = this;
    return Array.isArray(t4) ? t4.map((t5) => this._getWidget(t5)).find((t5) => t5) : this._getWidget(t4);
  }
};
e([y()], l.prototype, "className", void 0), e([y()], l.prototype, "content", void 0), e([y()], l.prototype, "disabled", null), e([y()], l.prototype, "flowEnabled", void 0), e([y()], l.prototype, "icon", null), e([y()], l.prototype, "image", void 0), e([y()], l.prototype, "listItem", void 0), e([y()], l.prototype, "open", void 0), e([y()], l.prototype, "title", null), e([y()], l.prototype, "visible", void 0), l = e([a("esri.widgets.TableList.ListItemPanel")], l);
var d2 = l;

// ../../../node_modules/@arcgis/core/widgets/TableList/ListItem.js
var y2;
var b = V.ofType({
  key: "type",
  defaultKeyValue: "button",
  base: p,
  typeMap: {
    button: c,
    toggle: a2,
    slider: a3
  }
});
var f = V.ofType(b);
var j = y2 = class extends s2(S) {
  constructor(t4) {
    super(t4), this.actionsSections = new f(), this.actionsOpen = false, this.checkPublishStatusEnabled = false, this.hidden = false, this.layer = null, this.listItemCreatedFunction = null, this.panel = null, this.sortable = true;
  }
  initialize() {
    if (this.addHandles([d(() => this.panel, (t4) => this._setListItemOnPanel(t4), P)]), "function" == typeof this.listItemCreatedFunction) {
      const t4 = {
        item: this
      };
      this.listItemCreatedFunction.call(null, t4);
    }
  }
  destroy() {
    this.panel?.destroy();
  }
  get error() {
    return this.layer?.loadError;
  }
  castPanel(t4) {
    return this.panel?.open && !t4.hasOwnProperty("open") && (t4.open = true), t4 ? new d2(t4) : null;
  }
  get publishing() {
    const {
      layer: t4,
      checkPublishStatusEnabled: e8
    } = this;
    return (e8 && t4 && "publishingInfo" in t4 && "publishing" === t4.publishingInfo?.status) ?? false;
  }
  get title() {
    const t4 = o(this, "layer.layer");
    return (!t4 || t4 && o(this, "layer.layer.loaded") ? this.layer?.title : null) ?? "";
  }
  set title(t4) {
    this._overrideIfSome("title", t4);
  }
  clone() {
    return new y2({
      actionsSections: this.actionsSections.clone(),
      actionsOpen: this.actionsOpen,
      checkPublishStatusEnabled: this.checkPublishStatusEnabled,
      hidden: this.hidden,
      layer: this.layer,
      listItemCreatedFunction: this.listItemCreatedFunction,
      panel: this.panel,
      sortable: this.sortable,
      title: this.title
    });
  }
  _setListItemOnPanel(t4) {
    t4 && (t4.listItem = this);
  }
};
e([y({
  type: f
})], j.prototype, "actionsSections", void 0), e([y()], j.prototype, "actionsOpen", void 0), e([y()], j.prototype, "checkPublishStatusEnabled", void 0), e([y({
  readOnly: true
})], j.prototype, "error", null), e([y()], j.prototype, "hidden", void 0), e([y()], j.prototype, "layer", void 0), e([y()], j.prototype, "listItemCreatedFunction", void 0), e([y({
  type: d2
})], j.prototype, "panel", void 0), e([s("panel")], j.prototype, "castPanel", null), e([y({
  readOnly: true
})], j.prototype, "publishing", null), e([y()], j.prototype, "sortable", void 0), e([y()], j.prototype, "title", null), j = y2 = e([a("esri.widgets.TableList.ListItem")], j);
var I = j;

// ../../../node_modules/@arcgis/core/widgets/TableList/TableListViewModel.js
var m = {
  map: "map",
  layerListMode: "layer-list-mode"
};
var n5 = "hide";
var c2 = V.ofType(I);
var h = class extends o2.EventedAccessor {
  constructor(t4) {
    super(t4), this.checkPublishStatusEnabled = false, this.listItemCreatedFunction = null, this.listModeDisabled = false, this.tableItems = new c2(), this.map = null;
  }
  initialize() {
    this.addHandles([d(() => [this.tables, this.map?.allTables.toArray()], () => this._compileList(), P), d(() => [this.map?.loaded, this.listItemCreatedFunction, this.checkPublishStatusEnabled, this.listModeDisabled], () => this._recompileList())], m.map);
  }
  destroy() {
    this._removeAllItems(), this.map = null, this.tables = null;
  }
  get tables() {
    return this.map?.allTables;
  }
  set tables(t4) {
    this._overrideIfSome("tables", t4);
  }
  get state() {
    const {
      map: t4,
      tables: e8
    } = this;
    if (!t4) return e8 ? "ready" : "disabled";
    const s4 = t4?.loadStatus;
    return "string" == typeof s4 ? "loaded" === s4 ? "ready" : "loading" === s4 ? "loading" : "disabled" : "ready";
  }
  get totalItems() {
    return this.tableItems.length;
  }
  triggerAction(t4, e8) {
    t4 && !t4.disabled && this.emit("trigger-action", {
      action: t4,
      item: e8
    });
  }
  _removeAllItems() {
    this.tableItems.destroyAll();
  }
  _getViewableTables(t4) {
    return t4 ? this.listModeDisabled ? t4 : t4.filter((t5) => u(t5) !== n5) : void 0;
  }
  _watchTablesListMode(t4) {
    this.removeHandles(m.layerListMode), t4 && !this.listModeDisabled && this.addHandles(d(() => t4.filter((t5) => "listMode" in t5).map((t5) => t5.listMode).toArray(), () => this._compileList()), m.layerListMode);
  }
  _compileList() {
    const {
      tables: t4
    } = this;
    this._watchTablesListMode(t4);
    const e8 = this._getViewableTables(t4);
    e8?.length ? (this._createNewItems(e8), this._removeItems(e8), this._sortItems(e8)) : this._removeAllItems();
  }
  _createNewItems(t4) {
    const {
      tableItems: e8,
      listItemCreatedFunction: s4,
      checkPublishStatusEnabled: i3
    } = this;
    t4.forEach((t5) => {
      e8.some((e9) => e9.layer === t5) || e8.add(new I({
        checkPublishStatusEnabled: i3,
        layer: t5,
        listItemCreatedFunction: s4
      }));
    });
  }
  _removeItems(t4) {
    const {
      tableItems: e8
    } = this;
    e8.forEach((s4) => {
      if (!s4) return;
      const i3 = t4?.find((t5) => s4.layer === t5);
      i3 || (e8.remove(s4), s4.destroy());
    });
  }
  _sortItems(t4) {
    const {
      tableItems: e8
    } = this;
    e8.sort((e9, s4) => {
      const i3 = t4.indexOf(e9.layer), o3 = t4.indexOf(s4.layer);
      return i3 > o3 ? -1 : i3 < o3 ? 1 : 0;
    });
  }
  _recompileList() {
    this._removeAllItems(), this._compileList();
  }
};
e([y()], h.prototype, "checkPublishStatusEnabled", void 0), e([y()], h.prototype, "listItemCreatedFunction", void 0), e([y({
  nonNullable: true
})], h.prototype, "listModeDisabled", void 0), e([y({
  type: c2,
  readOnly: true
})], h.prototype, "tableItems", void 0), e([y()], h.prototype, "tables", null), e([y()], h.prototype, "map", void 0), e([y({
  readOnly: true
})], h.prototype, "state", null), e([y()], h.prototype, "totalItems", null), h = e([a("esri.widgets.TableList.TableListViewModel")], h);
var p2 = h;

// ../../../node_modules/@arcgis/core/widgets/TableList/TableListVisibleElements.js
var s3 = class extends S {
  constructor() {
    super(...arguments), this.closeButton = false, this.collapseButton = false, this.errors = false, this.filter = false, this.flow = true, this.heading = false, this.statusIndicators = true, this.temporaryTableIndicators = false;
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
})], s3.prototype, "temporaryTableIndicators", void 0), s3 = e([a("esri.widgets.TableList.TableListVisibleElements")], s3);
var l2 = s3;

// ../../../node_modules/@arcgis/core/widgets/TableList/support/tableListUtils.js
function n6(n7) {
  return n7["data-item"];
}
function t3(n7, t4) {
  n7?.sort((n8, i3) => {
    const e8 = t4.indexOf(n8.uid), r2 = t4.indexOf(i3.uid);
    return e8 > r2 ? -1 : e8 < r2 ? 1 : 0;
  });
}

// ../../../node_modules/@arcgis/core/widgets/TableList.js
var C = V.ofType(I);
var F = class extends s2(B) {
  constructor(e8, t4) {
    super(e8, t4), this._focusRootFlowItem = false, this._focusPanelFlowItem = false, this._lastDragDetail = null, this._selectedDragItemLayerUid = null, this._rootGroupUid = `table-${this.uid}`, this.collapsed = false, this.dragEnabled = false, this.filterPlaceholder = "", this.filterText = "", this.headingLevel = 2, this.listItemCanGiveFunction = null, this.listItemCanReceiveFunction = null, this.messages = null, this.messagesCommon = null, this.minDragEnabledItems = e6, this.minFilterItems = n4, this.selectedItems = new C(), this.selectionMode = "none", this.viewModel = new p2(), this.visibleElements = new l2(), this._canMove = ({
      dragEl: e9,
      fromEl: t5,
      toEl: i3
    }, o3) => {
      const s4 = "pull" === o3 ? this.listItemCanGiveFunction : this.listItemCanReceiveFunction, l3 = n6(e9);
      if (!l3?.sortable) return false;
      const n7 = n6(t5), r2 = M(t5), a4 = n6(i3), c3 = M(i3), d3 = !!r2 && !!c3 && r2 === c3, m2 = {
        selected: l3,
        from: n7,
        to: a4
      }, u2 = t5.group, h2 = i3.group;
      return u2 && h2 && "function" == typeof s4 ? s4.call(null, m2) : d3;
    }, this._onCalciteListOrderChange = (e9) => {
      const {
        _lastDragDetail: t5
      } = this, {
        toEl: i3,
        fromEl: o3,
        dragEl: s4,
        newIndex: l3
      } = e9;
      if (!o3 || !i3 || t5?.newIndex === l3 && t5?.dragEl === s4 && t5?.toEl === i3 && t5?.fromEl === o3) return;
      this._lastDragDetail = e9;
      const n7 = Array.from(o3.children).filter((e10) => e10?.matches("calcite-list-item")).map((e10) => e10.value);
      t3(this.map?.tables, n7);
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
      notice: () => import("./calcite-notice-GSFPF5BZ.js")
    });
  }
  get _dragEnabled() {
    return this.viewModel.totalItems >= this.minDragEnabledItems && this.dragEnabled;
  }
  get _filterEnabled() {
    return this.viewModel.totalItems >= this.minFilterItems && this.visibleElements.filter;
  }
  get icon() {
    return "table";
  }
  set icon(e8) {
    this._overrideIfSome("icon", e8);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e8) {
    this._overrideIfSome("label", e8);
  }
  get listItemCreatedFunction() {
    return this.viewModel.listItemCreatedFunction;
  }
  set listItemCreatedFunction(e8) {
    this.viewModel.listItemCreatedFunction = e8;
  }
  get map() {
    return this.viewModel.map;
  }
  set map(e8) {
    this.viewModel.map = e8;
  }
  get multipleSelectionEnabled() {
    return i(n.getLogger(this), "multipleSelectionEnabled", {
      replacement: "selectionMode",
      version: "4.29",
      warnOnce: true
    }), "multiple" === this.selectionMode;
  }
  set multipleSelectionEnabled(e8) {
    i(n.getLogger(this), "multipleSelectionEnabled", {
      replacement: "selectionMode",
      version: "4.29",
      warnOnce: true
    }), this.selectionMode = e8 ? "multiple" : this.selectionEnabled ? "single" : "none";
  }
  get selectionEnabled() {
    return i(n.getLogger(this), "selectionEnabled", {
      replacement: "selectionMode, dragEnabled",
      version: "4.29",
      warnOnce: true
    }), "none" !== this.selectionMode && this.dragEnabled;
  }
  set selectionEnabled(e8) {
    i(n.getLogger(this), "selectionEnabled", {
      replacement: "selectionMode, dragEnabled",
      version: "4.29",
      warnOnce: true
    }), this.dragEnabled = e8, this.selectionMode = e8 ? this.multipleSelectionEnabled ? "multiple" : "single" : "none";
  }
  get tableItems() {
    return this.viewModel.tableItems;
  }
  get tables() {
    return this.viewModel.tables;
  }
  set tables(e8) {
    this.viewModel.tables = e8;
  }
  triggerAction(e8, t4) {
    return this.viewModel.triggerAction(e8, t4);
  }
  render() {
    const e8 = this.viewModel?.state, t4 = {
      [e3.hidden]: "loading" === e8,
      [e3.disabled]: "disabled" === e8
    }, i3 = this.tableItems?.filter((e9) => !e9.hidden && (this.visibleElements.errors || !e9.error));
    return n2("div", {
      class: this.classes(i2.base, e3.widget, e3.panel, t4)
    }, i3?.length ? this._renderItems(i3) : this._renderNoItems());
  }
  _renderNoItemsMessage() {
    return n2("div", {
      slot: "message"
    }, this.messages.noItemsToDisplay);
  }
  _renderNoItems() {
    return n2("div", {
      class: i2.itemMessage,
      key: "esri-layer-list__no-items"
    }, n2("calcite-notice", {
      icon: "information",
      kind: "info",
      open: true,
      width: "full"
    }, this._renderNoItemsMessage()));
  }
  _renderPanelFlowItems(e8) {
    return e8?.toArray().filter(({
      panel: e9
    }) => e9?.open && !e9.disabled && e9.flowEnabled).map(({
      title: e9,
      panel: t4
    }) => {
      const i3 = () => this._handlePanelFlowItemBack(t4);
      return n2("calcite-flow-item", {
        afterCreate: this._focusPanelFlowItemNode,
        afterUpdate: this._focusPanelFlowItemNode,
        bind: this,
        description: e9,
        heading: t4.title,
        headingLevel: this.headingLevel,
        key: `flow-panel-${t4.uid}`,
        onCalciteFlowItemBack: (e10) => {
          e10.preventDefault(), i3();
        }
      }, t4.render(), n2("calcite-button", {
        appearance: "transparent",
        onclick: i3,
        slot: "footer-actions",
        width: "full"
      }, this.messagesCommon.back));
    });
  }
  _handlePanelFlowItemBack(e8) {
    e8.open = false, this._focusRootFlowItem = true;
  }
  _focusRootFlowItemNode(e8) {
    this._focusRootFlowItem && (this._focusRootFlowItem = false, requestAnimationFrame(() => e8?.setFocus()));
  }
  _focusPanelFlowItemNode(e8) {
    this._focusPanelFlowItem && (this._focusPanelFlowItem = false, requestAnimationFrame(() => e8?.setFocus()));
  }
  _renderItems(e8) {
    const {
      visible: t4,
      collapsed: i3,
      visibleElements: {
        closeButton: o3,
        collapseButton: s4,
        heading: l3,
        flow: n7
      },
      _dragEnabled: r2,
      _filterEnabled: a4,
      _rootGroupUid: c3,
      selectionMode: d3,
      messages: m2,
      filterPlaceholder: p3,
      filterText: u2
    } = this, h2 = [n2("calcite-flow-item", {
      afterCreate: this._focusRootFlowItemNode,
      afterUpdate: this._focusRootFlowItemNode,
      bind: this,
      closable: o3,
      closed: !t4,
      collapsed: i3,
      collapsible: s4,
      heading: l3 ? m2.widgetLabel : void 0,
      headingLevel: this.headingLevel,
      key: "root-flow-item",
      onCalciteFlowItemClose: () => this.visible = false
    }, n2("calcite-list", {
      canPull: (e9) => this._canMove(e9, "pull"),
      canPut: (e9) => this._canMove(e9, "put"),
      "data-layer-type": c3,
      dragEnabled: r2,
      filterEnabled: a4,
      filterPlaceholder: p3,
      filterText: a4 ? u2 : "",
      group: c3,
      key: "root-list",
      label: m2.widgetLabel,
      selectionAppearance: "border",
      selectionMode: d3,
      onCalciteListChange: (e9) => this._handleCalciteListChange(e9),
      onCalciteListDragEnd: (e9) => this._handleCalciteListDragEnd(e9.detail),
      onCalciteListFilter: (e9) => this.filterText = e9.target?.filterText ?? "",
      onCalciteListOrderChange: (e9) => this._onCalciteListOrderChange(e9.detail)
    }, e8?.toArray().map((e9) => this._renderItem(e9)), e8?.length && a4 ? n2("div", {
      class: i2.filterNoResults,
      slot: "filter-no-results"
    }, n2("calcite-notice", {
      kind: "info",
      open: true,
      width: "full"
    }, this._renderNoItemsMessage())) : null)), this._renderPanelFlowItems(e8)];
    return t4 ? n7 ? n2("calcite-flow", {
      key: "root-flow"
    }, h2) : h2 : null;
  }
  _handleCalciteListDragEnd(e8) {
    const {
      fromEl: t4,
      dragEl: i3,
      oldIndex: o3
    } = e8;
    t4.insertBefore(i3, t4.children[o3]);
  }
  _renderItemMessage(e8) {
    return e8.error ? n2("div", {
      class: i2.itemMessage,
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
    }, this.messages.tableError))) : null;
  }
  _renderItem(e8) {
    const {
      _selectedDragItemLayerUid: t4,
      selectionMode: i3,
      selectedItems: o3,
      messages: s4
    } = this, l3 = e8.title || s4.untitledTable, n7 = this._filterActions(e8.actionsSections), r2 = this._countActions(n7);
    return n2("calcite-list-item", {
      afterCreate: (t5) => this._focusSelectedDragEl(t5, e8),
      afterUpdate: (t5) => this._focusSelectedDragEl(t5, e8),
      class: i2.item,
      "data-item": e8,
      "data-layer-id": e8.layer.id,
      dragDisabled: !e8.sortable,
      dragSelected: e8.layer.uid === t4,
      id: e8.layer?.uid,
      key: `list-item-${e8.layer.uid}`,
      label: l3,
      metadata: {
        title: l3
      },
      selected: "none" !== i3 && o3.includes(e8),
      title: l3,
      value: e8.layer?.uid,
      onCalciteListItemDragHandleChange: (t5) => this._handleCalciteListItemDragHandleChange(t5, e8)
    }, n2("div", {
      class: i2.itemContent,
      slot: "content"
    }, l3), this._renderItemStatus(e8), this._renderItemTemporaryIcon(e8), this._renderItemMessage(e8), this._renderPanel(e8.panel), this._renderPanelAction(e8.panel), r2 > 1 ? this._renderActionsSections(e8, n7) : 1 === r2 ? this._renderAction({
      item: e8,
      action: this._getSingleAction(n7),
      textEnabled: false
    }) : null);
  }
  _renderItemTemporaryIcon(e8) {
    return this.visibleElements.temporaryTableIndicators && !e8.layer.persistenceEnabled ? n2("calcite-icon", {
      class: i2.itemTemporaryIcon,
      icon: "temporary",
      key: "temporary-icon",
      scale: "s",
      slot: "actions-start",
      title: this.messages.temporary
    }) : null;
  }
  _renderItemStatus(e8) {
    const {
      visibleElements: t4
    } = this;
    if (!t4.statusIndicators) return null;
    const {
      publishing: i3
    } = e8;
    return n2("calcite-icon", {
      class: this.classes({
        [i2.statusIndicator]: true,
        [i2.publishing]: i3
      }),
      icon: "stop-square",
      key: "layer-item-status",
      scale: "s",
      slot: "actions-end"
    });
  }
  _renderPanel(e8) {
    return !e8?.open || e8.disabled || e8.flowEnabled ? null : n2("div", {
      class: i2.itemContentBottom,
      key: `content-panel-${e8.uid}`,
      slot: "content-bottom"
    }, e8.render());
  }
  _renderPanelAction(e8) {
    if (!e8?.visible) return null;
    const {
      open: t4,
      title: i3,
      disabled: o3
    } = e8;
    return n2("calcite-action", {
      active: t4,
      appearance: "transparent",
      disabled: o3,
      icon: t(e8),
      key: `action-${e8.uid}`,
      onclick: () => this._togglePanel(e8),
      scale: "s",
      slot: "actions-end",
      text: i3 ?? "",
      title: i3 ?? void 0
    }, this._renderFallbackIcon(e8));
  }
  _renderActionsSections(e8, t4) {
    const i3 = this.messagesCommon.options;
    return n2("calcite-action-menu", {
      appearance: "transparent",
      class: i2.actionMenu,
      key: "item-action-menu",
      label: this.messagesCommon.menu,
      open: e8.actionsOpen,
      overlayPositioning: "fixed",
      placement: "bottom-end",
      scale: "s",
      slot: "actions-end",
      onCalciteActionMenuOpen: (t5) => e8.actionsOpen = t5.target.open
    }, n2("calcite-action", {
      appearance: "transparent",
      icon: "ellipsis",
      scale: "s",
      slot: "trigger",
      text: i3,
      title: i3
    }), t4.toArray().map((t5, i4) => this._renderActionSection(e8, t5, i4)));
  }
  _renderActionSection(e8, t4, i3) {
    return n2("calcite-action-group", {
      class: i2.actionGroup,
      key: `action-section-${i3}`
    }, t4.toArray().map((t5) => this._renderAction({
      item: e8,
      action: t5,
      textEnabled: true
    })));
  }
  _renderFallbackIcon(e8) {
    const {
      className: t4,
      icon: i3
    } = e8;
    if (i3) return null;
    const o3 = "image" in e8 ? e8.image : void 0, s4 = {
      [i2.itemActionIcon]: !!t4,
      [i2.itemActionImage]: !!o3
    };
    return t4 && (s4[t4] = true), o3 || t4 ? n2("span", {
      "aria-hidden": "true",
      class: this.classes(i2.itemActionIcon, s4),
      key: "icon",
      styles: n3(o3)
    }) : null;
  }
  _renderAction(e8) {
    const {
      item: t4,
      action: i3,
      textEnabled: o3
    } = e8;
    if (!i3) return null;
    const {
      active: s4,
      disabled: l3,
      title: n7,
      type: a4,
      indicator: c3
    } = i3;
    return n2("calcite-action", {
      active: "toggle" === a4 && i3.value,
      appearance: "transparent",
      disabled: l3,
      icon: t(i3),
      indicator: c3,
      key: `action-${i3.uid}`,
      loading: s4,
      onclick: () => this._triggerAction(t4, i3),
      scale: "s",
      slot: o3 ? void 0 : "actions-end",
      text: n7 ?? "",
      textEnabled: o3,
      title: n7 ?? void 0
    }, this._renderFallbackIcon(i3));
  }
  _filterActions(e8) {
    return e8.map((e9) => e9.filter((e10) => e10.visible));
  }
  _getSingleAction(e8) {
    return e8.reduce((e9) => e9).find((e9) => e9 && ("button" === e9.type || "toggle" === e9.type));
  }
  _countActions(e8) {
    return e8.reduce((e9, t4) => e9 + t4.length, 0);
  }
  _focusSelectedDragEl(e8, t4) {
    this._selectedDragItemLayerUid === t4.layer.uid && requestAnimationFrame(() => e8?.setFocus());
  }
  _handleCalciteListItemDragHandleChange(e8, t4) {
    e8.stopPropagation();
    const i3 = e8.target.dragSelected;
    this._selectedDragItemLayerUid = i3 ? t4.layer.uid : null;
  }
  _handleCalciteListChange(e8) {
    const {
      selectionMode: t4,
      selectedItems: i3
    } = this;
    if ("none" === t4) return;
    const o3 = e8.target.selectedItems.map((e9) => n6(e9)).filter(Boolean);
    i3.removeAll(), i3.addMany(o3);
  }
  _togglePanel(e8) {
    e8.open = !e8.open, e8.open && (this._focusPanelFlowItem = true);
  }
  _triggerAction(e8, t4) {
    t4 && e8 && ("toggle" === t4.type && (t4.value = !t4.value), this.triggerAction(t4, e8));
  }
};
e([y()], F.prototype, "_focusRootFlowItem", void 0), e([y()], F.prototype, "_focusPanelFlowItem", void 0), e([y()], F.prototype, "_dragEnabled", null), e([y()], F.prototype, "_filterEnabled", null), e([y()], F.prototype, "collapsed", void 0), e([y()], F.prototype, "dragEnabled", void 0), e([y()], F.prototype, "filterPlaceholder", void 0), e([y()], F.prototype, "filterText", void 0), e([y()], F.prototype, "headingLevel", void 0), e([y()], F.prototype, "icon", null), e([y()], F.prototype, "label", null), e([y()], F.prototype, "listItemCanGiveFunction", void 0), e([y()], F.prototype, "listItemCanReceiveFunction", void 0), e([y()], F.prototype, "listItemCreatedFunction", null), e([y()], F.prototype, "map", null), e([y(), e2("esri/widgets/TableList/t9n/TableList")], F.prototype, "messages", void 0), e([y(), e2("esri/t9n/common")], F.prototype, "messagesCommon", void 0), e([y()], F.prototype, "minDragEnabledItems", void 0), e([y()], F.prototype, "minFilterItems", void 0), e([y()], F.prototype, "multipleSelectionEnabled", null), e([y()], F.prototype, "selectionEnabled", null), e([y()], F.prototype, "selectedItems", void 0), e([y()], F.prototype, "selectionMode", void 0), e([y({
  readOnly: true
})], F.prototype, "tableItems", null), e([y()], F.prototype, "tables", null), e([e4("trigger-action"), y({
  type: p2
})], F.prototype, "viewModel", void 0), e([y({
  type: l2,
  nonNullable: true
})], F.prototype, "visibleElements", void 0), F = e([a("esri.widgets.TableList")], F);
var L = F;
export {
  L as default
};
//# sourceMappingURL=TableList-CG75F3FU.js.map
