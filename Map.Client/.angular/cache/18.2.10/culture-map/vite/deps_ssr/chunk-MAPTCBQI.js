import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  I
} from "./chunk-JKNSHHXJ.js";
import {
  f,
  u
} from "./chunk-IAY2Q5KW.js";
import {
  P,
  d
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/widgets/LayerList/LayerListViewModel.js
var m = {
  view: "view",
  viewLayers: "view-layers",
  mapLayers: "map-layers",
  layerViews: "layer-views",
  layerListMode: "layer-list-mode"
};
var c = "hide";
var h = V.ofType(I);
var p = class extends o.EventedAccessor {
  constructor(e2) {
    super(e2), this.checkPublishStatusEnabled = false, this.listItemCreatedFunction = null, this.listModeDisabled = false, this.operationalItems = new h(), this.view = null;
  }
  initialize() {
    this.addHandles([d(() => true === this.view?.ready, () => this._viewHandles(), P), d(() => [this.listItemCreatedFunction, this.checkPublishStatusEnabled, this.listModeDisabled], () => this._recompileList())], m.view);
  }
  destroy() {
    this._removeAllItems(), this.view = null;
  }
  get state() {
    const {
      view: e2
    } = this;
    return e2?.ready ? "ready" : e2 ? "loading" : "disabled";
  }
  get totalItems() {
    return this.operationalItems.flatten((e2) => e2.children).length;
  }
  triggerAction(e2, t) {
    e2 && !e2.disabled && this.emit("trigger-action", {
      action: e2,
      item: t
    });
  }
  moveListItem(e2, t, s, i) {
    const r = e2?.layer;
    if (!r || "subtype-sublayer" === r.type || "sublayer" === r.type) return;
    const a2 = this.view?.map?.layers, o2 = t ? f(t) : a2, l = s ? f(s) : a2;
    if (!o2 || !l) return;
    const {
      operationalItems: d2
    } = this, m2 = t?.children || d2, c2 = s?.children || d2, h2 = l.length - i;
    e2.parent = s || null, m2.remove(e2), o2.remove(r), c2.includes(e2) || c2.add(e2, h2), l.includes(r) || l.add(r, h2), this._compileList();
  }
  _createLayerViewHandles(e2) {
    this.removeHandles(m.layerViews), this._compileList(), e2 && this.addHandles(e2.on("change", () => this._compileList()), m.layerViews);
  }
  _createMapLayerHandles(e2) {
    this.removeHandles(m.mapLayers), this._compileList(), e2 && this.addHandles(e2.on("change", () => this._compileList()), m.mapLayers);
  }
  _createListItem(e2) {
    const {
      view: t,
      listItemCreatedFunction: s,
      checkPublishStatusEnabled: i,
      listModeDisabled: r
    } = this;
    return new I({
      checkPublishStatusEnabled: i,
      listModeDisabled: r,
      layer: e2,
      listItemCreatedFunction: s,
      view: t
    });
  }
  _removeAllItems() {
    this.operationalItems.destroyAll();
  }
  _getViewableLayers(e2) {
    return e2 ? this.listModeDisabled ? e2 : e2.filter((e3) => u(e3) !== c) : void 0;
  }
  _watchLayersListMode(e2) {
    this.removeHandles(m.layerListMode), e2 && !this.listModeDisabled && this.addHandles(d(() => e2.filter((e3) => "listMode" in e3).map((e3) => e3.listMode).toArray(), () => this._compileList()), m.layerListMode);
  }
  _compileList() {
    const e2 = this.view?.map?.layers;
    this._watchLayersListMode(e2);
    const t = this._getViewableLayers(e2);
    t?.length ? (this._createNewItems(t), this._removeItems(t), this._sortItems(t)) : this._removeAllItems();
  }
  _createNewItems(e2) {
    const {
      operationalItems: t
    } = this;
    e2.forEach((e3) => {
      t.some((t2) => t2.layer === e3) || t.add(this._createListItem(e3));
    });
  }
  _removeItems(e2) {
    const {
      operationalItems: t
    } = this, s = [];
    t.forEach((t2) => {
      t2 && e2 && e2.includes(t2.layer) || s.push(t2);
    }), t.destroyMany(s);
  }
  _sortItems(e2) {
    const {
      operationalItems: t
    } = this;
    t.sort((t2, s) => {
      const i = e2.indexOf(t2.layer), r = e2.indexOf(s.layer);
      return i > r ? -1 : i < r ? 1 : 0;
    });
  }
  _recompileList() {
    this._removeAllItems(), this._compileList();
  }
  _viewHandles() {
    const {
      view: e2
    } = this;
    this.removeHandles([m.mapLayers, m.layerViews, m.viewLayers]), e2?.ready ? this.addHandles([d(() => this.view?.map?.allLayers, (e3) => this._createMapLayerHandles(e3), P), d(() => this.view?.allLayerViews, (e3) => this._createLayerViewHandles(e3), P)], m.viewLayers) : this._removeAllItems();
  }
};
e([y()], p.prototype, "checkPublishStatusEnabled", void 0), e([y()], p.prototype, "listItemCreatedFunction", void 0), e([y({
  nonNullable: true
})], p.prototype, "listModeDisabled", void 0), e([y({
  type: h
})], p.prototype, "operationalItems", void 0), e([y({
  readOnly: true
})], p.prototype, "state", null), e([y()], p.prototype, "totalItems", null), e([y()], p.prototype, "view", void 0), p = e([a("esri.widgets.LayerList.LayerListViewModel")], p);
var y2 = p;

export {
  y2 as y
};
//# sourceMappingURL=chunk-MAPTCBQI.js.map
