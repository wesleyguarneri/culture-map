import {
  a as a3,
  c as c2,
  o as o2,
  p as p2,
  s as s3,
  u as u2
} from "./chunk-YBWOLLLC.js";
import {
  e as e2
} from "./chunk-7PY7QIZQ.js";
import {
  a as a2,
  c,
  p
} from "./chunk-BIUXKPKA.js";
import {
  s as s2
} from "./chunk-HT2T6PUB.js";
import {
  B
} from "./chunk-WYMXVOAT.js";
import {
  n
} from "./chunk-K7TO5IIO.js";
import {
  s
} from "./chunk-NKCPFCP3.js";
import {
  P,
  d
} from "./chunk-6WHTZNUH.js";
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
  o,
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  u
} from "./chunk-2MMLMOWS.js";
import {
  O
} from "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/LayerList/ListItemPanel.js
var g = class extends s2(B) {
  constructor(e3, t) {
    super(e3, t), this._legend = null, this.className = null, this.content = null, this.flowEnabled = false, this.image = null, this.listItem = null, this.open = false, this.visible = true;
  }
  initialize() {
    this.addHandles([d(() => this._canCreateLegend, () => this._createLegend(), P), d(() => [this._legend, this._legendOptions], () => this._updateLegend(), P)]);
  }
  destroy() {
    this._legend = u(this._legend);
  }
  get _canCreateLegend() {
    const {
      content: e3,
      listItem: t
    } = this;
    if (!t) return false;
    const n2 = "legend";
    return e3 === n2 || null != e3 && !!Array.isArray(e3) && e3.includes(n2);
  }
  get _legendOptions() {
    const {
      listItem: e3,
      _legendLayerInfo: t
    } = this, n2 = e3?.view;
    return t && n2 ? {
      view: n2,
      layerInfos: [t]
    } : {};
  }
  get _legendLayerInfo() {
    const e3 = this.listItem?.layer;
    if (!e3 || "subtype-sublayer" === e3.type) return null;
    const t = p2(e3) ? e3 : null, n2 = e3?.parent, i = null != n2 && "type" in n2 && "map-image" === n2.type ? t?.source : null, r = "";
    return i && n2 ? {
      layer: n2,
      title: r,
      sublayerIds: [i.mapLayerId]
    } : {
      layer: e3,
      title: r
    };
  }
  get disabled() {
    const {
      listItem: e3,
      _legend: t,
      content: n2
    } = this;
    return !e3 || !(Array.isArray(n2) && n2.length > 1) && !!t && (!t.activeLayerInfos?.length || !e3.visibleAtCurrentScale || !e3.visible);
  }
  set disabled(e3) {
    this._overrideIfSome("disabled", e3);
  }
  get icon() {
    const {
      image: e3
    } = this, t = this._getFirstWidget();
    return this._get("icon") ?? (!e3 && t ? t.icon : null);
  }
  set icon(e3) {
    this._overrideIfSome("icon", e3);
  }
  get title() {
    return this._get("title") || (this._getFirstWidget()?.label ?? "");
  }
  set title(e3) {
    this._override("title", e3);
  }
  render() {
    return n("div", {
      class: "esri-list-item-panel"
    }, this._renderContents());
  }
  _renderContent(e3) {
    const {
      _legend: t,
      disabled: n2,
      open: i
    } = this;
    return e3 && !n2 && i ? "legend" === e3 && t ? n("div", {
      key: "legend-widget"
    }, t.render()) : "string" == typeof e3 ? n("div", {
      innerHTML: e3,
      key: e3
    }) : e2(e3) ? n("div", {
      key: "content-widget"
    }, e3.render()) : e3 instanceof HTMLElement ? n("div", {
      afterCreate: this._attachToNode,
      bind: e3,
      key: "content-element"
    }) : null : null;
  }
  _renderContents() {
    const {
      content: e3,
      open: t
    } = this;
    return t ? Array.isArray(e3) ? e3.map((e4) => this._renderContent(e4)) : this._renderContent(e3) : null;
  }
  _createLegend() {
    return __async(this, null, function* () {
      if (u(this._legend), this._legend = null, !this._canCreateLegend) return;
      const {
        default: e3
      } = yield import("./Legend-HIDJGPLM.js"), t = new e3(this._legendOptions);
      this._legend = t;
    });
  }
  _attachToNode(e3) {
    e3.appendChild(this);
  }
  _updateLegend() {
    const e3 = this._legend;
    e3 && e3.set(this._legendOptions);
  }
  _getWidget(e3) {
    return "legend" === e3 ? this._legend : e2(e3) ? e3 : null;
  }
  _getFirstWidget() {
    const {
      content: e3
    } = this;
    return Array.isArray(e3) ? e3.map((e4) => this._getWidget(e4)).find((e4) => e4) : this._getWidget(e3);
  }
};
e([y()], g.prototype, "_legend", void 0), e([y()], g.prototype, "_canCreateLegend", null), e([y()], g.prototype, "_legendOptions", null), e([y()], g.prototype, "_legendLayerInfo", null), e([y()], g.prototype, "className", void 0), e([y()], g.prototype, "content", void 0), e([y()], g.prototype, "disabled", null), e([y()], g.prototype, "flowEnabled", void 0), e([y()], g.prototype, "icon", null), e([y()], g.prototype, "image", void 0), e([y()], g.prototype, "listItem", void 0), e([y()], g.prototype, "open", void 0), e([y()], g.prototype, "title", null), e([y()], g.prototype, "visible", void 0), g = e([a("esri.widgets.LayerList.ListItemPanel")], g);
var c3 = g;

// ../../../node_modules/@arcgis/core/widgets/LayerList/ListItem.js
var g2;
var w = V.ofType({
  key: "type",
  defaultKeyValue: "button",
  base: p,
  typeMap: {
    button: c,
    toggle: a2,
    slider: a3
  }
});
var S2 = V.ofType(w);
var _ = "layer";
var M = "child-list-mode";
var P2 = "hide";
var O2 = g2 = class extends s2(S) {
  constructor(t) {
    super(t), this.actionsSections = new S2(), this.actionsOpen = false, this.checkPublishStatusEnabled = false, this.children = new (V.ofType(g2))(), this.childrenSortable = true, this.hidden = false, this.layer = null, this.listItemCreatedFunction = null, this.listModeDisabled = false, this.open = false, this.panel = null, this.parent = null, this.view = null;
  }
  initialize() {
    if (this.addHandles([d(() => [this.layer, this.layer?.listMode, this.listModeDisabled], () => this._watchLayerProperties(this.layer), P), d(() => this.checkPublishStatusEnabled, (t) => this._updateChildrenPublishing(t), P), d(() => this.view, (t) => this._updateChildrenView(t), P), d(() => this.panel, (t) => this._setListItemOnPanel(t), P)]), "function" == typeof this.listItemCreatedFunction) {
      const t = {
        item: this
      };
      this.listItemCreatedFunction.call(null, t);
    }
  }
  destroy() {
    this.panel?.destroy(), this.children.destroyAll(), this.view = null;
  }
  get connectionStatus() {
    const {
      layerView: t,
      publishing: e3
    } = this;
    if (!e3 && t && "connectionStatus" in t) return t.connectionStatus;
  }
  get error() {
    return this.layer?.loadError;
  }
  get incompatible() {
    const {
      layerView: t
    } = this;
    return !(!t || !("spatialReferenceSupported" in t)) && !t.spatialReferenceSupported;
  }
  get layerView() {
    const {
      layer: t,
      view: e3
    } = this;
    if (!t || !e3 || "sublayer" === t.type) return null;
    const i = "subtype-sublayer" === t.type ? t.parent : t;
    return e3.allLayerViews.find((t2) => t2.layer === i) ?? null;
  }
  castPanel(t) {
    return this.panel?.open && !t.hasOwnProperty("open") && (t.open = true), t ? new c3(t) : null;
  }
  get sortable() {
    return "knowledge-graph-sublayer" !== this.layer?.type && this._get("sortable");
  }
  set sortable(t) {
    this._set("sortable", t);
  }
  get title() {
    const t = o(this, "layer.layer");
    return (!t || t && o(this, "layer.layer.loaded")) && o(this, "layer.title") || o(this, "layer.attributes.title") || "";
  }
  set title(t) {
    this._override("title", t);
  }
  get publishing() {
    const {
      layer: t,
      checkPublishStatusEnabled: e3
    } = this;
    return e3 && t && "publishingInfo" in t && "publishing" === t.publishingInfo?.status;
  }
  get updating() {
    const {
      layerView: t,
      connectionStatus: e3,
      layer: i,
      publishing: s4
    } = this;
    return !s4 && !e3 && (t ? t.updating : "loading" === i?.loadStatus || false);
  }
  get visible() {
    return this.layer?.visible;
  }
  set visible(t) {
    const e3 = this.layer;
    e3 && (e3.visible = t);
  }
  get visibleAtCurrentScale() {
    return this.layerView?.visibleAtCurrentScale ?? true;
  }
  get visibleAtCurrentTimeExtent() {
    return this.layerView?.visibleAtCurrentTimeExtent ?? true;
  }
  get visibilityMode() {
    return s3(this.layer);
  }
  clone() {
    return new g2({
      actionsSections: this.actionsSections.clone(),
      actionsOpen: this.actionsOpen,
      checkPublishStatusEnabled: this.checkPublishStatusEnabled,
      children: this.children.clone(),
      childrenSortable: this.childrenSortable,
      hidden: this.hidden,
      layer: this.layer,
      listItemCreatedFunction: this.listItemCreatedFunction,
      listModeDisabled: this.listModeDisabled,
      open: this.open,
      panel: this.panel,
      parent: this.parent,
      sortable: this.sortable,
      title: this.title,
      view: this.view,
      visible: this.visible
    });
  }
  _setListItemOnPanel(t) {
    t && (t.listItem = this);
  }
  _updateChildrenPublishing(t) {
    const e3 = this.children;
    e3 && e3.forEach((e4) => e4.checkPublishStatusEnabled = t);
  }
  _updateChildrenView(t) {
    const e3 = this.children;
    e3 && e3.forEach((e4) => e4.view = t);
  }
  _createChildren(t) {
    const {
      listModeDisabled: e3,
      children: i
    } = this, s4 = t.filter((t2) => !i.some((e4) => e4.layer === t2));
    i.addMany(this._createChildItems(s4, e3));
  }
  _destroyChildren(t) {
    const {
      children: e3
    } = this, i = e3.filter((e4) => !t.includes(e4.layer));
    e3.destroyMany(i);
  }
  _sortChildren(t) {
    this.children.sort((e3, i) => t.indexOf(i.layer) - t.indexOf(e3.layer));
  }
  _destroyAllChildren() {
    this.removeHandles(M), this.children.destroyAll();
  }
  _watchChildLayerListMode(t) {
    this.removeHandles(M), this.listModeDisabled || this.addHandles(t.toArray().map((e3) => d(() => e3.listMode, () => this._compileChildren(t))), M);
  }
  _compileChildren(t) {
    const e3 = this.listModeDisabled ? t : t?.filter((t2) => u2(t2) !== P2);
    e3?.length ? (this._createChildren(e3), this._destroyChildren(e3), this._sortChildren(e3), this._watchChildLayerListMode(t)) : this._destroyAllChildren();
  }
  _watchSublayerChanges(t) {
    t && this.addHandles(t.on("change", () => this._compileChildren(t)), _);
  }
  _initializeChildLayers(t) {
    this._compileChildren(t), this._watchSublayerChanges(t);
  }
  _createChildItems(t, e3) {
    return t.map((t2) => e3 || c2(t2) ? new g2({
      layer: t2,
      checkPublishStatusEnabled: this.checkPublishStatusEnabled,
      listItemCreatedFunction: this.listItemCreatedFunction,
      listModeDisabled: this.listModeDisabled,
      parent: this,
      view: this.view
    }) : null).filter(O).reverse();
  }
  _watchLayerProperties(t) {
    if (this.removeHandles(_), this.removeHandles(M), !t) return;
    if ("hide-children" === (!this.listModeDisabled && u2(t))) return void this.children.destroyAll();
    const e3 = o2(t);
    e3 && this.addHandles(d(() => t[e3], (i) => {
      t.hasOwnProperty(e3) && this._initializeChildLayers(i);
    }, P), _);
  }
};
e([y({
  type: S2
})], O2.prototype, "actionsSections", void 0), e([y()], O2.prototype, "actionsOpen", void 0), e([y()], O2.prototype, "checkPublishStatusEnabled", void 0), e([y({
  type: V
})], O2.prototype, "children", void 0), e([y()], O2.prototype, "childrenSortable", void 0), e([y({
  readOnly: true
})], O2.prototype, "connectionStatus", null), e([y({
  readOnly: true
})], O2.prototype, "error", null), e([y()], O2.prototype, "hidden", void 0), e([y({
  readOnly: true
})], O2.prototype, "incompatible", null), e([y()], O2.prototype, "layer", void 0), e([y({
  readOnly: true
})], O2.prototype, "layerView", null), e([y()], O2.prototype, "listItemCreatedFunction", void 0), e([y({
  nonNullable: true
})], O2.prototype, "listModeDisabled", void 0), e([y()], O2.prototype, "open", void 0), e([y({
  type: c3
})], O2.prototype, "panel", void 0), e([s("panel")], O2.prototype, "castPanel", null), e([y()], O2.prototype, "parent", void 0), e([y({
  value: true
})], O2.prototype, "sortable", null), e([y()], O2.prototype, "title", null), e([y({
  readOnly: true
})], O2.prototype, "publishing", null), e([y({
  readOnly: true
})], O2.prototype, "updating", null), e([y()], O2.prototype, "view", void 0), e([y()], O2.prototype, "visible", null), e([y({
  readOnly: true
})], O2.prototype, "visibleAtCurrentScale", null), e([y({
  readOnly: true
})], O2.prototype, "visibleAtCurrentTimeExtent", null), e([y({
  readOnly: true
})], O2.prototype, "visibilityMode", null), O2 = g2 = e([a("esri.widgets.LayerList.ListItem")], O2);
var I = O2;

export {
  I
};
//# sourceMappingURL=chunk-OUEC6DVS.js.map
