import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i as i2,
  l as l3,
  m,
  n as n7,
  r as r2
} from "./chunk-SGTIVMVY.js";
import {
  h
} from "./chunk-DU4CPDF3.js";
import {
  l as l2
} from "./chunk-S5FY2EPM.js";
import {
  n as n3
} from "./chunk-727KBFZ6.js";
import {
  e as e4,
  n as n4
} from "./chunk-PCDJV6LA.js";
import {
  L
} from "./chunk-XJ6YJASZ.js";
import {
  o as o2
} from "./chunk-3ILFY654.js";
import {
  s as s3
} from "./chunk-AEX7USXS.js";
import {
  t as t2
} from "./chunk-JPJAW3N6.js";
import {
  n as n6
} from "./chunk-LUORW76W.js";
import {
  W,
  Y,
  n as n5,
  t
} from "./chunk-Y4563USE.js";
import {
  e as e3
} from "./chunk-ZWGLR3ES.js";
import {
  e as e7
} from "./chunk-5L5LGHM5.js";
import {
  e as e6
} from "./chunk-XJ4XZPHY.js";
import {
  e as e5
} from "./chunk-FYGR4X6I.js";
import {
  d as d3
} from "./chunk-NVOJILW6.js";
import {
  S as S2
} from "./chunk-IUPJR3FF.js";
import {
  K,
  N
} from "./chunk-LM3JDV4W.js";
import {
  f as f2
} from "./chunk-TPLUZX3A.js";
import {
  B,
  e2,
  r
} from "./chunk-UVQYXHKM.js";
import {
  i,
  n as n2
} from "./chunk-M5N6UHWJ.js";
import {
  l,
  s as s2
} from "./chunk-THZPD5CT.js";
import {
  o
} from "./chunk-2JI245BP.js";
import {
  _,
  d as d2
} from "./chunk-TIRJMGGG.js";
import {
  C,
  d,
  p
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
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
  b,
  f2 as f,
  k
} from "./chunk-AIZ3T7E3.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  O
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/Features/css.js
var e8 = "esri-features";
var n8 = {
  icon: `${e8}__icon`,
  actionImage: `${e8}__action-image`,
  base: e8,
  container: `${e8}__container`,
  contentContainer: `${e8}__content-container`,
  contentFeature: `${e8}__content-feature`,
  flowItemCollapsed: `${e8}__flow-item--collapsed`,
  header: `${e8}__header`,
  footer: `${e8}__footer`,
  featureMenuObserver: `${e8}__feature-menu-observer`,
  actionExit: `${e8}__action--exit`,
  loader: `${e8}__loader`,
  featuresHeading: `${e8}__heading`,
  paginationActionBar: `${e8}__pagination-action-bar`,
  paginationPrevious: `${e8}__pagination-previous`,
  paginationNext: `${e8}__pagination-next`
};

// ../../../node_modules/@arcgis/core/widgets/Features/FeaturesRelatedRecords.js
var n9 = class extends B {
  constructor(e9, t3) {
    super(e9, t3), this.messages = null, this.closed = false, this.closable = true, this._handleOpenRelatedFeature = (e10) => {
      this.emit("open-related-feature", {
        feature: e10
      });
    };
  }
  loadDependencies() {
    return r({
      action: () => import("./calcite-action-BXG7XWUR.js"),
      "flow-item": () => import("./calcite-flow-item-6QKZ7KRC.js")
    });
  }
  render() {
    const {
      flowItems: e9
    } = this, t3 = e9?.toArray();
    return n2(i, null, t3?.map((e10) => this._renderRelatedRecordsFlowItem(e10)));
  }
  _handleCloseClick() {
    this.emit("close");
  }
  _handleExitClick() {
    this.emit("exit");
  }
  _handleRelatedRecordsBackClick() {
    const e9 = this.flowItems?.pop();
    e9 && ("showAllEnabled" in e9.viewModel && (e9.viewModel.showAllEnabled = false), e9 && (e9.viewModel = null, e9.destroy()));
  }
  _renderRelatedRecordsFlowItem(e9) {
    const {
      messages: t3,
      closable: o3,
      closed: s6
    } = this, r3 = "graphic" in e9 && !e9.isTable && e9.graphic?.geometry, l6 = t3.exitRelatedRecords, a2 = t3.selectFeature;
    return n2("calcite-flow-item", {
      bind: this,
      closable: o3,
      closed: s6,
      description: this._getRelatedRecordsFlowItemDescription(e9),
      heading: e9.title ?? "",
      key: `flow-item-${e9.viewModel.uid}`,
      onCalciteFlowItemBack: (e10) => {
        e10.preventDefault(), this._handleRelatedRecordsBackClick();
      },
      onCalciteFlowItemClose: this._handleCloseClick
    }, n2("calcite-action", {
      appearance: "transparent",
      bind: this,
      class: n8.actionExit,
      icon: "move-up",
      key: "exit-related-records-action",
      onclick: this._handleExitClick,
      slot: "header-actions-start",
      text: l6,
      title: l6
    }), r3 ? n2("calcite-action", {
      appearance: "transparent",
      bind: this,
      icon: "zoom-to-object",
      key: "open-related-feature-action",
      onclick: () => this._handleOpenRelatedFeature(e9),
      slot: "header-actions-end",
      text: a2,
      title: a2
    }) : null, n2("div", {
      class: n8.container
    }, e9.render()));
  }
  _getRelatedRecordsFlowItemDescription(e9) {
    return "featureCountDescription" in e9 ? e9.featureCountDescription : e9.viewModel.description ?? "";
  }
};
e([y()], n9.prototype, "flowItems", void 0), e([y(), e2("esri/widgets/Features/t9n/Features")], n9.prototype, "messages", void 0), e([y()], n9.prototype, "closed", void 0), e([y()], n9.prototype, "closable", void 0), n9 = e([a("esri.widgets.Features.FeaturesRelatedRecords")], n9);
var d4 = n9;

// ../../../node_modules/@arcgis/core/widgets/Popup/actionUtils.js
var s4 = "esri.widgets.Popup.PopupViewModel";
var c = () => n.getLogger(s4);
var u = (t3) => {
  const {
    event: s6,
    view: c2,
    viewModel: u2
  } = t3, {
    action: l6
  } = s6;
  if (!l6) return Promise.reject(new s("trigger-action:missing-arguments", "Event has no action"));
  const {
    disabled: d6,
    id: g2
  } = l6;
  if (!g2) return Promise.reject(new s("trigger-action:invalid-action", "action.id is missing"));
  if (d6) return Promise.reject(new s("trigger-action:invalid-action", "Action is disabled"));
  if (g2 === n7.id) return w(u2).catch(f);
  if (g2 === l3.id) return f3(u2);
  if (g2 === m.id) return u2.browseClusterEnabled = !u2.browseClusterEnabled, u2.featureMenuOpen = u2.browseClusterEnabled, Promise.resolve();
  if (g2 === r2.id) {
    u2.visible = false;
    const {
      selectedFeature: t4
    } = u2;
    if (!t4) return Promise.reject(new s(`trigger-action:${r2.id}`, "selectedFeature is required", {
      selectedFeature: t4
    }));
    const {
      sourceLayer: r3
    } = t4;
    return r3 ? r3.remove(t4) : c2?.graphics.remove(t4), Promise.resolve();
  }
  return Promise.resolve();
};
function l4(e9) {
  const {
    selectedFeature: t3,
    location: r3,
    view: o3
  } = e9;
  return o3 ? t3 ?? r3 ?? null : null;
}
function d5(e9) {
  return !!e9 && e9.isAggregate && "cluster" === e9.sourceLayer?.featureReduction?.type;
}
function g(e9, t3) {
  return __async(this, null, function* () {
    if ("3d" !== t3?.type || !e9 || "esri.Graphic" !== e9.declaredClass) return true;
    const r3 = t3.getViewForGraphic(e9);
    if (r3 && "whenGraphicBounds" in r3) {
      let t4 = null;
      try {
        t4 = yield r3.whenGraphicBounds(e9, {
          useViewElevation: true
        });
      } catch (o3) {
      }
      return !t4 || !t4.boundingBox || t4.boundingBox[0] === t4.boundingBox[3] && t4.boundingBox[1] === t4.boundingBox[4] && t4.boundingBox[2] === t4.boundingBox[5];
    }
    return true;
  });
}
function w(t3) {
  return __async(this, null, function* () {
    const {
      location: r3,
      selectedFeature: i3,
      view: n10,
      zoomFactor: a2
    } = t3, s6 = l4(t3);
    if (!n10 || !s6) {
      const t4 = new s("zoom-to:invalid-target-or-view", "Cannot zoom to location without a target and view.", {
        target: s6,
        view: n10
      });
      throw c().error(t4), t4;
    }
    const u2 = n10.scale / a2, d6 = t3.selectedFeature?.geometry, w2 = d6 ?? r3, f4 = null != w2 && "point" === w2.type && (yield g(i3, n10));
    n7.active = true, n7.disabled = true;
    try {
      yield t3.zoomTo({
        target: {
          target: s6,
          scale: f4 ? u2 : void 0
        }
      });
    } catch (v2) {
      const t4 = new s("zoom-to:invalid-graphic", "Could not zoom to the location of the graphic.", {
        graphic: i3
      });
      c().error(t4);
    } finally {
      n7.active = false, n7.disabled = false, t3.zoomToLocation = null, f4 && (t3.location = w2);
    }
  });
}
function f3(t3) {
  return __async(this, null, function* () {
    const {
      selectedFeature: r3,
      view: o3
    } = t3;
    if ("2d" !== o3?.type) {
      const t4 = new s("zoomToCluster:invalid-view", "View must be 2d MapView.", {
        view: o3
      });
      throw c().error(t4), t4;
    }
    if (!r3 || !d5(r3)) {
      const t4 = new s("zoomToCluster:invalid-selectedFeature", "Selected feature must represent an aggregate/cluster graphic.", {
        selectedFeature: r3
      });
      throw c().error(t4), t4;
    }
    const [n10, a2] = yield p2(o3, r3);
    l3.active = true, l3.disabled = true;
    const {
      extent: s6
    } = yield n10.queryExtent(a2);
    s6 && (yield t3.zoomTo({
      target: s6
    })), l3.active = false, l3.disabled = false;
  });
}
function v(e9) {
  return __async(this, null, function* () {
    const {
      view: t3,
      selectedFeature: r3
    } = e9;
    if (!t3 || !r3) return;
    const [o3, i3] = yield p2(t3, r3), {
      extent: n10
    } = yield o3.queryExtent(i3);
    e9.selectedClusterBoundaryFeature.geometry = n10, t3.graphics.add(e9.selectedClusterBoundaryFeature);
  });
}
function m2(e9) {
  return __async(this, null, function* () {
    const {
      selectedFeature: t3,
      view: r3
    } = e9;
    if (!r3 || !t3) return;
    const [o3, i3] = yield p2(r3, t3);
    m.active = true, m.disabled = true;
    const {
      features: a2
    } = yield o3.queryFeatures(i3);
    m.active = false, m.disabled = false, m.value = true, e9?.open({
      features: [t3].concat(a2),
      featureMenuOpen: true
    });
  });
}
function p2(e9, t3) {
  return __async(this, null, function* () {
    const r3 = yield e9.whenLayerView(t3.sourceLayer), o3 = r3.createQuery(), i3 = t3.getObjectId();
    return o3.aggregateIds = null != i3 ? [i3] : [], [r3, o3];
  });
}
function y2(e9) {
  m.value = false;
  const t3 = e9.features.filter((e10) => d5(e10));
  t3.length && (e9.features = t3);
}

// ../../../node_modules/@arcgis/core/widgets/Features/FeaturesViewModel.js
var H = "location-scale-handle";
var B2 = () => [n7.clone()];
var U = () => [l3.clone(), m.clone()];
var G = null;
function Z(e9, t3) {
  return "building-scene" === e9 || "2d" === t3 && ("map-image" === e9 || "tile" === e9 || "imagery" === e9 || "imagery-tile" === e9);
}
var z = class extends t2(l2) {
  constructor(e9) {
    super(e9), this._pendingPromises = new s3(), this._fetchFeaturesController = null, this._highlightSelectedFeaturePromise = null, this._highlightActiveFeaturePromise = null, this._selectedClusterFeature = null, this.actions = new i2(), this.activeFeature = null, this.autoCloseEnabled = false, this.browseClusterEnabled = false, this.content = null, this.defaultPopupTemplateEnabled = false, this.featurePage = null, this.featuresPerPage = 20, this.featureMenuOpen = false, this.featureViewModelAbilities = null, this.featureViewModels = [], this.highlightEnabled = true, this.includeDefaultActions = true, this.selectedClusterBoundaryFeature = new d3({
      symbol: new S2({
        outline: {
          width: 1.5,
          color: "cyan"
        },
        style: "none"
      })
    }), this.title = null, this.updateLocationEnabled = false, this.view = null, this.visible = false, this.zoomFactor = 4, this.zoomToLocation = null, this._debouncedLocationUpdate = k((e10) => __async(this, null, function* () {
      const {
        spatialReference: t3
      } = this, i3 = this.selectedFeature?.geometry?.type, s6 = this.location ?? e10;
      if (i3 && "mesh" !== i3 && t3 && s6 && this.selectedFeature) if ("point" !== i3) try {
        const e11 = this.selectedFeature;
        let i4 = e11.geometry;
        const r3 = this._getHighlightLayer(e11), o3 = e11.getObjectId();
        if (!r3 || !this.view) return;
        if (o3) {
          const e12 = this.view?.allLayerViews.find((e13) => e13.layer.uid === r3.uid);
          if (!e12 || !("queryFeatures" in e12)) return;
          const s7 = e12.createQuery();
          s7.outSpatialReference = t3, s7.objectIds = [o3], s7.returnGeometry = true;
          const {
            features: a2
          } = yield e12.queryFeatures(s7);
          i4 = a2[0]?.geometry;
        }
        if (!i4 || "mesh" === i4.type) return;
        if (i4 = K(i4, t3), G || (G = yield import("./geometryEngineAsync-B5I5LOGI.js")), !(yield G.intersects(i4, s6))) {
          const t4 = (yield G.nearestCoordinate(i4, s6)).coordinate ?? s6;
          this.selectedFeature === e11 && (this.location = t4);
        }
      } catch (o3) {
        b(o3) || n.getLogger(this).error(o3);
      }
      else this.location = n3(this.selectedFeature.geometry) ?? s6;
    }));
  }
  initialize() {
    this.addHandles([this.on("view-change", () => this._autoClose()), d(() => [this.highlightEnabled, this.selectedFeature, this.visible, this.view], () => this._highlightSelectedFeature()), d(() => [this.highlightEnabled, this.activeFeature, this.visible, this.view], () => this._highlightActiveFeature()), d(() => this.view?.animation?.state, (e9) => this._animationStateChange(e9)), d(() => this.location, (e9) => this._locationChange(e9)), d(() => this.selectedFeature, (e9) => this._selectedFeatureChange(e9)), d(() => [this.selectedFeatureIndex, this.featureCount, this.featuresPerPage], () => this._selectedFeatureIndexChange()), d(() => [this.featurePage, this.selectedFeatureIndex, this.featureCount, this.featuresPerPage, this.featureViewModels], () => this._setGraphicOnFeatureViewModels()), d(() => this.featureViewModels, () => this._featureViewModelsChange()), this.on("trigger-action", (e9) => u({
      event: e9,
      viewModel: this,
      view: this.view
    })), p(() => !this.waitingForResult, () => this._waitingForResultChange(), C), d(() => [this.features, this.map, this.spatialReference, this.timeZone], () => this._updateFeatureVMs()), d(() => this.view?.scale, () => this._viewScaleChange()), p(() => !this.visible, () => this.browseClusterEnabled = false), d(() => this.browseClusterEnabled, (e9) => e9 ? this.enableClusterBrowsing() : this.disableClusterBrowsing())]);
  }
  destroy() {
    this._cancelFetchingFeatures(), this._pendingPromises.clear(), this.browseClusterEnabled = false, this.view = null, this.map = null, this.spatialReference = null, this.timeZone = null;
  }
  get active() {
    return !(!this.visible || this.waitingForResult);
  }
  get allActions() {
    const e9 = this._get("allActions") || new i2();
    e9.removeAll();
    const {
      actions: t3,
      defaultActions: i3,
      defaultPopupTemplateEnabled: s6,
      includeDefaultActions: r3,
      selectedFeature: o3
    } = this, a2 = r3 ? i3.concat(t3) : t3, n10 = o3 && ("function" == typeof o3.getEffectivePopupTemplate && o3.getEffectivePopupTemplate(s6) || o3.popupTemplate), l6 = n10?.actions, u2 = n10?.overwriteActions ? l6 : l6?.concat(a2) ?? a2;
    return u2?.filter(Boolean).forEach((t4) => e9.add(t4)), e9;
  }
  get defaultActions() {
    const e9 = this._get("defaultActions") || new i2();
    return e9.removeAll(), e9.addMany(d5(this.selectedFeature) ? U() : B2()), e9;
  }
  get featureCount() {
    return this.features.length;
  }
  set features(e9) {
    const t3 = e9 || [];
    this._set("features", t3);
    const {
      pendingPromisesCount: i3,
      promiseCount: s6,
      selectedFeatureIndex: r3
    } = this, o3 = s6 && t3.length;
    o3 && i3 && -1 === r3 ? this.selectedFeatureIndex = 0 : o3 && -1 !== r3 || (this.selectedFeatureIndex = t3.length ? 0 : -1);
  }
  set location(e9) {
    let t3 = e9;
    const i3 = this.spatialReference?.isWebMercator, s6 = e9?.spatialReference?.isWGS84;
    s6 && i3 && (t3 = d2(e9)), this._set("location", t3);
  }
  get map() {
    return this.view?.map ?? null;
  }
  set map(e9) {
    this._override("map", e9);
  }
  get pendingPromisesCount() {
    return this._pendingPromises.size;
  }
  get promiseCount() {
    return this.promises.length;
  }
  get promises() {
    return this._get("promises") || [];
  }
  set promises(e9) {
    this._pendingPromises.clear(), this.features = [], Array.isArray(e9) && e9.length ? (this._set("promises", e9), (e9 = e9.slice(0)).forEach((e10) => this._pendingPromises.add(e10)), e9.reduce((e10, t3) => e10.finally(() => t3.then((e11) => {
      this._pendingPromises.has(t3) && this._updateFeatures(e11);
    }).finally(() => this._pendingPromises.delete(t3)).catch(() => {
    })), Promise.resolve())) : this._set("promises", []);
  }
  get selectedFeature() {
    const {
      features: e9,
      selectedFeatureIndex: t3
    } = this;
    if (-1 === t3) return null;
    return e9[t3] || null;
  }
  get selectedFeatureIndex() {
    const e9 = this._get("selectedFeatureIndex");
    return "number" == typeof e9 ? e9 : -1;
  }
  set selectedFeatureIndex(e9) {
    const {
      featureCount: t3
    } = this;
    e9 = isNaN(e9) || e9 < -1 || !t3 ? -1 : (e9 + t3) % t3, this.activeFeature = null, this._set("selectedFeatureIndex", e9);
  }
  get selectedFeatureViewModel() {
    return this.featureViewModels[this.selectedFeatureIndex] || null;
  }
  get spatialReference() {
    return this.view?.spatialReference ?? null;
  }
  set spatialReference(e9) {
    this._override("spatialReference", e9);
  }
  get state() {
    const {
      view: e9,
      map: t3
    } = this;
    return e9 ? e9.ready ? "ready" : "disabled" : t3 ? "ready" : "disabled";
  }
  get timeZone() {
    return this.view?.timeZone ?? o;
  }
  set timeZone(e9) {
    this._overrideIfSome("timeZone", e9);
  }
  get waitingForContents() {
    return this.featureViewModels.some((e9) => e9.waitingForContent);
  }
  get waitingForResult() {
    return !(!(!!this._fetchFeaturesController || this.pendingPromisesCount > 0) || 0 !== this.featureCount);
  }
  centerAtLocation() {
    const {
      view: e9
    } = this, t3 = l4(this);
    return t3 && e9 ? this.callGoTo({
      target: {
        target: t3,
        scale: e9.scale
      }
    }) : Promise.reject(new s("center-at-location:invalid-target-or-view", "Cannot center at a location without a target and view.", {
      target: t3,
      view: e9
    }));
  }
  zoomTo(e9) {
    return this.callGoTo(e9);
  }
  clear() {
    this.set({
      promises: [],
      features: [],
      content: null,
      title: null,
      location: null,
      activeFeature: null
    });
  }
  fetchFeatures(e9, t3) {
    const {
      view: i3
    } = this;
    if (!i3 || !e9) throw new s("fetch-features:invalid-screenpoint-or-view", "Cannot fetch features without a screenPoint and view.", {
      screenPoint: e9,
      view: i3
    });
    return i3.fetchPopupFeatures(e9, {
      pointerType: t3?.event?.pointerType,
      defaultPopupTemplateEnabled: this.defaultPopupTemplateEnabled,
      signal: t3?.signal
    });
  }
  open(e9) {
    const t3 = __spreadProps(__spreadValues({
      updateLocationEnabled: false,
      promises: [],
      fetchFeatures: false
    }, e9), {
      visible: true
    }), {
      fetchFeatures: i3
    } = t3;
    delete t3.fetchFeatures, i3 && this._setFetchFeaturesPromises(t3.location);
    const s6 = ["actionsMenuOpen", "collapsed"];
    for (const r3 of s6) delete t3[r3];
    this.set(t3);
  }
  triggerAction(e9) {
    const t3 = this.allActions.at(e9);
    t3 && !t3.disabled && this.emit("trigger-action", {
      action: t3
    });
  }
  next() {
    return this.selectedFeatureIndex++, this;
  }
  previous() {
    return this.selectedFeatureIndex--, this;
  }
  disableClusterBrowsing() {
    y2(this), this._clearBrowsedClusterGraphics();
  }
  enableClusterBrowsing() {
    return __async(this, null, function* () {
      const {
        view: e9,
        selectedFeature: t3
      } = this;
      "2d" === e9?.type ? d5(t3) ? (yield v(this), yield m2(this)) : n.getLogger(this).warn("enableClusterBrowsing:invalid-selectedFeature: Selected feature must represent an aggregate/cluster graphic.", t3) : n.getLogger(this).warn("enableClusterBrowsing:invalid-view: View must be 2d MapView.", t3);
    });
  }
  handleViewClick(e9) {
    this._fetchFeaturesAndOpen(e9);
  }
  _animationStateChange(e9) {
    this.zoomToLocation || (n7.disabled = "waiting-for-target" === e9);
  }
  _clearBrowsedClusterGraphics() {
    const e9 = [this.selectedClusterBoundaryFeature, this._selectedClusterFeature].filter(O);
    this.view?.graphics?.removeMany(e9), this._selectedClusterFeature = null, this.selectedClusterBoundaryFeature.geometry = null;
  }
  _viewScaleChange() {
    if (d5(this.selectedFeature)) return this.browseClusterEnabled = false, this.visible = false, void this.clear();
    this.browseClusterEnabled && (this.features = this.selectedFeature ? [this.selectedFeature] : []);
  }
  _locationChange(e9) {
    const {
      selectedFeature: t3,
      updateLocationEnabled: i3,
      view: s6
    } = this;
    s6 && i3 && e9 && (!t3 || t3.geometry) && this.centerAtLocation();
  }
  _selectedFeatureIndexChange() {
    this.featurePage = this.featureCount > 1 ? Math.floor(this.selectedFeatureIndex / this.featuresPerPage) + 1 : null;
  }
  _featureViewModelsChange() {
    this.featurePage = this.featureCount > 1 ? 1 : null;
  }
  _setGraphicOnFeatureViewModels() {
    const {
      features: e9,
      featureCount: t3,
      featurePage: i3,
      featuresPerPage: s6,
      featureViewModels: r3
    } = this;
    if (null === i3) return;
    const o3 = ((i3 - 1) * s6 + t3) % t3, a2 = o3 + s6;
    r3.slice(o3, a2).forEach((t4, i4) => {
      t4 && (t4.graphic ??= e9[o3 + i4]);
    });
  }
  _selectedFeatureChange(e9) {
    return __async(this, null, function* () {
      const {
        location: t3,
        updateLocationEnabled: i3,
        view: s6
      } = this;
      if (!e9 || !s6) return;
      if (this.browseClusterEnabled) {
        if (this._selectedClusterFeature && (s6.graphics.remove(this._selectedClusterFeature), this._selectedClusterFeature = null), d5(e9)) return;
        return e9.symbol = yield L(e9), this._selectedClusterFeature = e9, void s6.graphics.add(this._selectedClusterFeature);
      }
      const r3 = e9.sourceLayer?.type;
      if ("map-image" !== r3 && "imagery" !== r3 && "imagery-tile" !== r3 || (e9.symbol = yield L(e9)), !i3 && t3 || !e9.geometry) {
        if (i3 && !e9.geometry) {
          yield this.centerAtLocation();
          const e10 = s6.center?.clone();
          e10 && (this.location = e10);
        }
      } else this.location = n3(e9.geometry);
    });
  }
  _waitingForResultChange() {
    !this.featureCount && this.promises && (this.visible = false);
  }
  _setFetchFeaturesPromises(e9) {
    return __async(this, null, function* () {
      const {
        pendingFeatures: t3
      } = yield this._fetchFeaturesWithController({
        mapPoint: e9
      });
      this.promises = t3;
    });
  }
  _destroyFeatureVMs() {
    this.featureViewModels.forEach((e9) => e9 && !e9.destroyed && e9.destroy()), this._set("featureViewModels", []);
  }
  _updateFeatureVMs() {
    const {
      selectedFeature: e9,
      features: t3,
      featureViewModels: i3,
      view: s6,
      spatialReference: r3,
      map: o3,
      timeZone: a2,
      location: n10
    } = this;
    if (d5(e9) || (this.browseClusterEnabled = false), this._destroyFeatureVMs(), !t3?.length) return;
    const l6 = i3.slice(0), u2 = [];
    t3.forEach((t4, i4) => {
      if (!t4) return;
      let h2 = null;
      if (l6.some((e10, i5) => (e10 && e10.graphic === t4 && (h2 = e10, l6.splice(i5, 1)), !!h2)), h2) u2[i4] = h2;
      else {
        const l7 = new Y({
          abilities: this.featureViewModelAbilities,
          defaultPopupTemplateEnabled: this.defaultPopupTemplateEnabled,
          spatialReference: r3,
          graphic: t4 === e9 ? t4 : null,
          location: n10,
          map: o3,
          view: s6,
          timeZone: a2
        });
        u2[i4] = l7;
      }
    }), l6.forEach((e10) => e10 && !e10.destroyed && e10.destroy()), this._set("featureViewModels", u2);
  }
  _getScreenPoint(e9, t3) {
    return __async(this, null, function* () {
      const {
        spatialReference: i3,
        view: s6
      } = this;
      if (!s6) return null;
      yield s6?.when();
      const r3 = e9?.spatialReference;
      return r3 && i3 ? (yield N(r3, i3, null, t3), s6.toScreen(e9)) : null;
    });
  }
  _cancelFetchingFeatures() {
    const e9 = this._fetchFeaturesController;
    e9 && e9.abort(), this._fetchFeaturesController = null;
  }
  _projectScreenPointAndFetchFeatures(_0) {
    return __async(this, arguments, function* ({
      mapPoint: e9,
      screenPoint: t3,
      event: i3,
      signal: s6
    }) {
      return this.fetchFeatures(t3 ?? (yield this._getScreenPoint(e9 ?? this.location, {
        signal: s6
      })), {
        signal: s6,
        event: i3
      });
    });
  }
  _fetchFeaturesWithController({
    mapPoint: e9,
    screenPoint: t3,
    event: i3
  }) {
    this._cancelFetchingFeatures();
    const s6 = new AbortController(), {
      signal: r3
    } = s6;
    this._fetchFeaturesController = s6;
    const o3 = this._projectScreenPointAndFetchFeatures({
      mapPoint: e9,
      screenPoint: t3,
      signal: r3,
      event: i3
    });
    return o3.catch(() => {
    }).then(() => {
      this._fetchFeaturesController = null;
    }), o3;
  }
  _fetchFeaturesAndOpen(e9) {
    return __async(this, null, function* () {
      const {
        mapPoint: t3,
        screenPoint: i3
      } = e9, {
        view: s6
      } = this;
      this.removeHandles(H), this.addHandles([d(() => this.view?.scale, () => this._debouncedLocationUpdate(t3).catch((e10) => {
        b(e10) || n.getLogger(this).error(e10);
      })), p(() => !this.visible, () => {
        this.removeHandles(H);
      }, {
        once: true
      })], H);
      const {
        pendingFeatures: o3
      } = yield this._fetchFeaturesWithController({
        mapPoint: t3,
        screenPoint: i3,
        event: e9
      });
      s6?.popup && "open" in s6.popup && s6.popup.open({
        location: t3 ?? void 0,
        promises: o3
      });
    });
  }
  _autoClose() {
    this.autoCloseEnabled && (this.visible = false);
  }
  _getLayerView(e9, t3) {
    return __async(this, null, function* () {
      return yield e9.when(), e9.whenLayerView(t3);
    });
  }
  _getHighlightLayer(e9) {
    const {
      layer: t3,
      sourceLayer: i3
    } = e9;
    return i3 && "layer" in i3 && i3.layer ? i3.layer : "map-notes" === i3?.type || "subtype-group" === i3?.type ? i3 : t3;
  }
  _getHighlightTarget(e9, t3, i3) {
    if (Z(t3.type, i3)) return e9;
    const s6 = e9.getObjectId();
    if (null != s6) return s6;
    const r3 = "imagery" === t3.type ? void 0 : "objectIdField" in t3 ? t3.objectIdField || o2 : null, o3 = e9.attributes;
    return o3 && r3 && o3[r3] || e9;
  }
  _mapIncludesLayer(e9) {
    return !!this.map?.allLayers?.includes(e9);
  }
  _highlightActiveFeature() {
    return __async(this, null, function* () {
      const e9 = "highlight-active-feature";
      this.removeHandles(e9);
      const {
        highlightEnabled: t3,
        view: i3,
        activeFeature: s6,
        visible: r3
      } = this;
      if (!(s6 && i3 && t3 && r3)) return;
      const o3 = this._getHighlightLayer(s6);
      if (!(o3 && o3 instanceof f2 && this._mapIncludesLayer(o3))) return;
      const a2 = this._getLayerView(i3, o3);
      this._highlightActiveFeaturePromise = a2;
      const n10 = yield a2;
      if (!(n10 && n6(n10) && this._highlightActiveFeaturePromise === a2 && this.activeFeature && this.highlightEnabled)) return;
      const l6 = n10.highlight(this._getHighlightTarget(s6, o3, i3.type));
      this.addHandles(l6, e9);
    });
  }
  _highlightSelectedFeature() {
    return __async(this, null, function* () {
      const e9 = "highlight-selected-feature";
      this.removeHandles(e9);
      const {
        selectedFeature: t3,
        highlightEnabled: i3,
        view: s6,
        visible: r3
      } = this;
      if (!(t3 && s6 && i3 && r3)) return;
      const o3 = this._getHighlightLayer(t3);
      if (!(o3 && o3 instanceof f2 && this._mapIncludesLayer(o3))) return;
      const a2 = this._getLayerView(s6, o3);
      this._highlightSelectedFeaturePromise = a2;
      const n10 = yield a2;
      if (!(n10 && n6(n10) && this._highlightSelectedFeaturePromise === a2 && this.selectedFeature && this.highlightEnabled && this.visible)) return;
      const l6 = n10.highlight(this._getHighlightTarget(t3, o3, s6.type));
      this.addHandles(l6, e9);
    });
  }
  _updateFeatures(e9) {
    const {
      features: t3
    } = this, i3 = e9.filter((e10) => !t3.includes(e10));
    i3?.length && (this.features = t3.concat(i3));
  }
};
e([y()], z.prototype, "_fetchFeaturesController", void 0), e([y({
  type: i2
})], z.prototype, "actions", void 0), e([y({
  readOnly: true
})], z.prototype, "active", null), e([y()], z.prototype, "activeFeature", void 0), e([y({
  readOnly: true
})], z.prototype, "allActions", null), e([y()], z.prototype, "autoCloseEnabled", void 0), e([y()], z.prototype, "browseClusterEnabled", void 0), e([y()], z.prototype, "content", void 0), e([y({
  type: i2,
  readOnly: true
})], z.prototype, "defaultActions", null), e([y({
  type: Boolean
})], z.prototype, "defaultPopupTemplateEnabled", void 0), e([y({
  readOnly: true
})], z.prototype, "featureCount", null), e([y()], z.prototype, "featurePage", void 0), e([y({
  value: []
})], z.prototype, "features", null), e([y()], z.prototype, "featuresPerPage", void 0), e([y()], z.prototype, "featureMenuOpen", void 0), e([y()], z.prototype, "featureViewModelAbilities", void 0), e([y({
  readOnly: true
})], z.prototype, "featureViewModels", void 0), e([y()], z.prototype, "highlightEnabled", void 0), e([y()], z.prototype, "includeDefaultActions", void 0), e([y({
  type: _
})], z.prototype, "location", null), e([y()], z.prototype, "map", null), e([y({
  readOnly: true
})], z.prototype, "pendingPromisesCount", null), e([y({
  readOnly: true
})], z.prototype, "promiseCount", null), e([y()], z.prototype, "promises", null), e([y({
  readOnly: true
})], z.prototype, "selectedClusterBoundaryFeature", void 0), e([y({
  value: null,
  readOnly: true
})], z.prototype, "selectedFeature", null), e([y({
  value: -1
})], z.prototype, "selectedFeatureIndex", null), e([y({
  readOnly: true
})], z.prototype, "selectedFeatureViewModel", null), e([y({
  readOnly: true
})], z.prototype, "state", null), e([y()], z.prototype, "timeZone", null), e([y()], z.prototype, "title", void 0), e([y()], z.prototype, "updateLocationEnabled", void 0), e([y()], z.prototype, "view", void 0), e([y()], z.prototype, "visible", void 0), e([y({
  readOnly: true
})], z.prototype, "waitingForContents", null), e([y({
  readOnly: true
})], z.prototype, "waitingForResult", null), e([y()], z.prototype, "zoomFactor", void 0), e([y()], z.prototype, "zoomToLocation", void 0), e([y()], z.prototype, "centerAtLocation", null), z = e([a("esri.widgets.Features.FeaturesViewModel")], z);
var W2 = z;

// ../../../node_modules/@arcgis/core/widgets/Features/FeaturesVisibleElements.js
var s5 = class extends S {
  constructor() {
    super(...arguments), this.actionBar = true, this.closeButton = true, this.collapseButton = false, this.featureNavigation = true, this.featureListLayerTitle = true, this.flow = true, this.heading = true, this.spinner = true;
  }
};
e([y({
  type: Boolean,
  nonNullable: true
})], s5.prototype, "actionBar", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s5.prototype, "closeButton", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s5.prototype, "collapseButton", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s5.prototype, "featureNavigation", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s5.prototype, "featureListLayerTitle", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s5.prototype, "flow", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s5.prototype, "heading", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], s5.prototype, "spinner", void 0), s5 = e([a("esri.widgets.Features.FeaturesVisibleElements")], s5);
var l5 = s5;

// ../../../node_modules/@arcgis/core/widgets/Features.js
var O2 = "selected-index";
var x = 0;
var T = "features-spinner";
var j = 50;
function k2(e9) {
  return e9?.declaredClass.startsWith("esri.layers.") ?? false;
}
var E = class extends n5(B) {
  constructor(e9, i3) {
    super(e9, i3), this._featureMenuIntersectionObserverCallback = ([e10]) => {
      e10?.isIntersecting && null != this.viewModel.featurePage && this.viewModel.featurePage++;
    }, this._featureMenuIntersectionObserver = new IntersectionObserver(this._featureMenuIntersectionObserverCallback, {
      root: window.document
    }), this._featureMenuIntersectionObserverNode = null, this._focusOn = null, this._spinner = null, this._feature = null, this._relatedRecordsFlowItems = new V(), this._relatedRecordsWidget = new d4({
      flowItems: this._relatedRecordsFlowItems
    }), this._rootFlowItemNode = null, this._featureMenuViewportNode = null, this._actionBarMenuNode = null, this.collapsed = false, this.featureNavigationTop = false, this.headerActions = new i2(), this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.responsiveActionsEnabled = false, this.viewModel = new W2(), this.visibleElements = new l5(), this._renderAction = (e10, t3) => {
      const i4 = this._getActionTitle(e10), {
        type: o3,
        active: s6,
        uid: r3,
        disabled: n10,
        indicator: a2
      } = e10;
      return e10.visible ? n2("calcite-action", {
        active: "toggle" === o3 && e10.value,
        appearance: "solid",
        bind: this,
        "data-action-uid": r3,
        disabled: n10,
        icon: this._getActionIcon(e10),
        indicator: a2,
        key: `action-${t3}`,
        loading: s6,
        onclick: this._triggerAction,
        scale: "s",
        text: i4,
        title: this._hideActionText ? i4 : void 0
      }, this._getFallbackIcon(e10)) : null;
    }, this._openFeatureMenu = () => {
      this.featureMenuOpen = true, this._focusOn = "menu-flow-item";
    }, this._previousFeature = () => {
      this.viewModel.selectedFeatureIndex--;
    }, this._nextFeature = () => {
      this.viewModel.selectedFeatureIndex++;
    }, this._handleFeatureMenuBack = () => {
      this.featureMenuOpen && (this._focusOn = "root-flow-item", this.featureMenuOpen = false);
    }, this._focusFlowItemNode = (e10) => {
      this._focusOn === e10 && requestAnimationFrame(() => __async(this, null, function* () {
        switch (e10) {
          case "menu-flow-item":
            yield this._featureMenuViewportNode?.setFocus();
            break;
          case "root-flow-item":
            yield this._rootFlowItemNode?.setFocus();
        }
        this._focusOn = null;
      }));
    }, this._focusFlowItemNodeThrottled = e3(this._focusFlowItemNode, j), this._displaySpinnerThrottled = e3(() => this._displaySpinner(), x), this._addSelectedFeatureIndexHandle(), this.addHandles([this._displaySpinnerThrottled, this._focusFlowItemNodeThrottled, d(() => this.viewModel?.active, () => this._toggleScreenLocationEnabled()), d(() => this.viewModel?.active, (e10) => this._relatedRecordsWidget.closed = !e10), d(() => this.visibleElements?.closeButton, (e10) => this._relatedRecordsWidget.closable = e10), d(() => this.visibleElements?.spinner, (e10) => this._spinnerEnabledChange(e10)), d(() => this.viewModel?.view, (e10, t3) => this._viewChange(e10, t3)), d(() => this.viewModel?.view?.ready, (e10, t3) => this._viewReadyChange(e10 ?? false, t3 ?? false)), d(() => [this.viewModel?.waitingForResult, this.viewModel?.location], () => {
      this._hideSpinner(), this._displaySpinnerThrottled();
    }), d(() => this.viewModel?.screenLocation, () => this._closeOpenActionMenu()), d(() => this.selectedFeatureWidget, () => this._destroyRelatedRecordsFlowItemWidgets()), d(() => {
      const e10 = this.selectedFeatureWidget?.viewModel;
      return [e10?.title, e10?.state];
    }, () => this._setTitleFromFeatureWidget()), d(() => {
      const e10 = this.selectedFeatureWidget?.viewModel;
      return [e10?.content, e10?.state];
    }, () => this._setContentFromFeatureWidget()), d(() => this.viewModel?.featureViewModels, () => this._featureMenuViewportScrollTop()), this._relatedRecordsWidget.on("close", () => this.close()), this._relatedRecordsWidget.on("exit", () => this._destroyRelatedRecordsFlowItemWidgets()), this._relatedRecordsWidget.on("open-related-feature", ({
      feature: e10
    }) => this._openRelatedFeature(e10))]);
  }
  loadDependencies() {
    return r({
      action: () => import("./calcite-action-BXG7XWUR.js"),
      "action-bar": () => import("./calcite-action-bar-MNWLIHZ6.js"),
      "action-group": () => import("./calcite-action-group-VZNSHMI7.js"),
      button: () => import("./calcite-button-LAMWLR56.js"),
      flow: () => import("./calcite-flow-WGSZ7TX4.js"),
      "flow-item": () => import("./calcite-flow-item-6QKZ7KRC.js"),
      list: () => import("./calcite-list-IDJ56B53.js"),
      "list-item": () => import("./calcite-list-item-TVXB7DPG.js"),
      "list-item-group": () => import("./calcite-list-item-group-6BWZOKKY.js"),
      loader: () => import("./calcite-loader-XGS6NTUP.js")
    });
  }
  destroy() {
    this._destroyRelatedRecordsFlowItemWidgets(), this._destroySelectedFeatureWidget(), this._destroySpinner(), this._unobserveFeatureMenuObserver(), this._featureMenuIntersectionObserver?.disconnect(), this._relatedRecordsWidget?.destroy();
  }
  get _hideActionText() {
    if (!this.responsiveActionsEnabled) return false;
    const e9 = this.view?.widthBreakpoint;
    return "xsmall" === e9 || "small" === e9 || "medium" === e9;
  }
  get _featureNavigationVisible() {
    return this.viewModel.active && this.viewModel.featureCount > 1 && this.visibleElements.featureNavigation;
  }
  get _isCollapsed() {
    return this._collapseEnabled && this.collapsed;
  }
  get _collapseEnabled() {
    return this.visibleElements.collapseButton && !!this.title && !!this.content;
  }
  get active() {
    return this.viewModel.active;
  }
  get content() {
    return this.viewModel.content;
  }
  set content(e9) {
    this.viewModel.content = e9;
  }
  get icon() {
    return null;
  }
  get featureMenuOpen() {
    return this.viewModel.featureMenuOpen;
  }
  set featureMenuOpen(e9) {
    this.viewModel.featureMenuOpen = e9;
  }
  get features() {
    return this.viewModel.features;
  }
  set features(e9) {
    this.viewModel.features = e9;
  }
  get goToOverride() {
    return this.viewModel.goToOverride;
  }
  set goToOverride(e9) {
    this.viewModel.goToOverride = e9;
  }
  get location() {
    return this.viewModel.location;
  }
  set location(e9) {
    this.viewModel.location = e9;
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e9) {
    this._overrideIfSome("label", e9);
  }
  get map() {
    return this.viewModel.map;
  }
  set map(e9) {
    this.viewModel.map = e9;
  }
  get promises() {
    return this.viewModel.promises;
  }
  set promises(e9) {
    this.viewModel.promises = e9;
  }
  get selectedFeature() {
    return this.viewModel.selectedFeature;
  }
  get selectedFeatureIndex() {
    return this.viewModel.selectedFeatureIndex;
  }
  set selectedFeatureIndex(e9) {
    this.viewModel.selectedFeatureIndex = e9;
  }
  get selectedFeatureWidget() {
    const {
      _feature: e9,
      headingLevel: t3,
      _relatedRecordsFlowItems: i3,
      timeZone: o3,
      spatialReference: s6,
      map: r3
    } = this, {
      selectedFeatureViewModel: n10
    } = this.viewModel, a2 = {
      title: false
    };
    return n10 ? (e9 ? (e9.viewModel = n10, e9.visibleElements = a2) : this._feature = new W({
      flowItems: i3,
      headingLevel: t3 + 1,
      timeZone: o3,
      spatialReference: s6,
      map: r3,
      viewModel: n10,
      visibleElements: a2
    }), this._feature) : null;
  }
  get spatialReference() {
    return this.viewModel.spatialReference;
  }
  set spatialReference(e9) {
    this.viewModel.spatialReference = e9;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e9) {
    this.viewModel.title = e9;
  }
  get timeZone() {
    return this.viewModel.timeZone;
  }
  set timeZone(e9) {
    this.viewModel.timeZone = e9;
  }
  get updateLocationEnabled() {
    return this.viewModel.updateLocationEnabled;
  }
  set updateLocationEnabled(e9) {
    this.viewModel.updateLocationEnabled = e9;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e9) {
    this.viewModel.view = e9;
  }
  get visible() {
    return this.viewModel.visible;
  }
  set visible(e9) {
    this.viewModel.visible = e9;
  }
  blur() {
    const {
      active: e9
    } = this.viewModel;
    e9 ? this._rootFlowItemNode?.blur() : n.getLogger(this).warn("Features can only be blurred when currently active.");
  }
  clear() {
    return this.viewModel.clear();
  }
  close() {
    this.viewModel.visible = false;
  }
  fetchFeatures(e9, t3) {
    return this.viewModel.fetchFeatures(e9, t3);
  }
  focus() {
    const {
      active: e9
    } = this.viewModel;
    e9 ? this._setFocusOn() : n.getLogger(this).warn("Features can only be focused when currently active.");
  }
  next() {
    return this.viewModel.next();
  }
  open(e9) {
    this.removeHandles(O2);
    const t3 = {
      collapsed: e9?.collapsed ?? false
    };
    this.set(t3), this.viewModel.open(e9), this.addHandles(p(() => !this.viewModel.waitingForResult, () => this._addSelectedFeatureIndexHandle(), {
      once: true
    }));
  }
  previous() {
    return this.viewModel.previous();
  }
  triggerAction(e9) {
    return this.viewModel.triggerAction(e9);
  }
  render() {
    return n2("div", {
      bind: this,
      class: this.classes(n8.base, e5.widget, e5.panel),
      onkeydown: this._onMainKeydown
    }, this._renderHeader(), this._renderContentContainer());
  }
  _renderFeatureNavigation() {
    return [this._renderPagination(), this._renderFeatureMenuButton()];
  }
  _renderHeader() {
    return !this.featureMenuOpen && this.featureNavigationTop && this._featureNavigationVisible ? n2("div", {
      class: n8.header,
      key: "header-actions"
    }, this._renderFeatureNavigation()) : null;
  }
  _renderFooter() {
    return this.featureMenuOpen || this.featureNavigationTop || !this._featureNavigationVisible ? null : n2("div", {
      class: n8.footer,
      key: "footer-actions",
      slot: "footer"
    }, this._renderFeatureNavigation());
  }
  _renderFeatureMenuButton() {
    const {
      messages: e9,
      viewModel: t3
    } = this, {
      featureCount: i3,
      selectedFeatureIndex: o3,
      pendingPromisesCount: s6
    } = t3;
    return n2("calcite-action", {
      appearance: "solid",
      bind: this,
      icon: "list",
      key: "feature-menu-button",
      label: e9.selectFeature,
      loading: s6 > 0,
      onclick: this._openFeatureMenu,
      scale: "s",
      text: s2(e9.pageText, {
        index: l(o3 + 1),
        total: l(i3)
      }),
      textEnabled: true,
      title: e9.selectFeature
    });
  }
  _renderPagination() {
    const {
      previous: e9,
      next: t3
    } = this.messagesCommon.pagination;
    return n2("calcite-action-bar", {
      class: n8.paginationActionBar,
      expandDisabled: true,
      key: "pagination-action-bar",
      layout: "horizontal",
      overflowActionsDisabled: true,
      scale: "s"
    }, n2("calcite-action-group", {
      scale: "s"
    }, n2("calcite-action", {
      appearance: "solid",
      class: n8.paginationPrevious,
      icon: "chevron-left",
      iconFlipRtl: true,
      label: e9,
      onclick: this._previousFeature,
      scale: "s",
      text: e9,
      title: e9
    }), n2("calcite-action", {
      appearance: "solid",
      icon: "chevron-right",
      iconFlipRtl: true,
      label: t3,
      onclick: this._nextFeature,
      scale: "s",
      text: t3,
      title: t3
    })));
  }
  _renderFeatureMenuItem(e9) {
    const {
      selectedFeatureViewModel: t3,
      featureViewModels: i3
    } = this.viewModel, o3 = e9 === t3, s6 = i3.indexOf(e9);
    return n2("calcite-list-item", {
      bind: this,
      "data-feature-index": s6,
      key: `feature-menu-item-${e9.uid}`,
      onblur: this._removeActiveFeature,
      onfocus: this._setActiveFeature,
      onmouseleave: this._removeActiveFeature,
      onmouseover: this._setActiveFeature,
      selected: o3,
      onCalciteListItemSelect: this._selectFeature
    }, n2("span", {
      innerHTML: e9.title || this.messagesCommon.untitled,
      slot: "content"
    }));
  }
  _groupResultsByLayer() {
    const {
      featureViewModels: e9
    } = this.viewModel, t3 = /* @__PURE__ */ new Map();
    return e9.forEach((e10) => {
      const i3 = e10?.graphic;
      if (!i3) return;
      const {
        layer: o3,
        sourceLayer: s6
      } = i3, r3 = (k2(o3) ? o3 : null) || (k2(s6) ? s6 : null), n10 = t3.get(r3) ?? [];
      t3.set(r3, [...n10, e10]);
    }), t3;
  }
  _renderFeatureMenu() {
    const {
      featureViewModels: e9
    } = this.viewModel, t3 = this._groupResultsByLayer();
    return e9.length ? n2("calcite-list", {
      selectionAppearance: "icon",
      selectionMode: "single"
    }, Array.from(t3.keys(), (e10) => {
      const i3 = t3.get(e10)?.map((e11) => this._renderFeatureMenuItem(e11)), o3 = e10 ? e10.title ?? this.messagesCommon.untitled : null;
      return this.visibleElements.featureListLayerTitle && null !== o3 ? n2("calcite-list-item-group", {
        heading: o3,
        key: e10?.uid || "map-graphics"
      }, i3) : i3;
    })) : null;
  }
  _renderHeaderAction(e9, t3) {
    const i3 = e9.title || "";
    return e9.visible ? n2("calcite-action", {
      active: "toggle" === e9.type && e9.value,
      appearance: "solid",
      bind: this,
      "data-action-uid": e9.uid,
      disabled: e9.disabled,
      icon: e9.icon ?? void 0,
      indicator: e9.indicator,
      key: `header-action-${t3}`,
      loading: e9.active,
      onclick: this._triggerHeaderAction,
      slot: "header-actions-end",
      text: i3,
      title: i3
    }) : null;
  }
  _renderHeaderActions() {
    return this.headerActions.map((e9, t3) => this._renderHeaderAction(e9, t3)).toArray();
  }
  _renderContentFeature() {
    const {
      headingLevel: e9,
      visibleElements: t3,
      _isCollapsed: i3,
      _collapseEnabled: o3,
      featureNavigationTop: s6
    } = this, {
      title: r3,
      active: n10
    } = this.viewModel, a2 = t3.heading && r3 ? r3 : "";
    return n2("calcite-flow-item", {
      afterCreate: this._storeRootFlowItemNode,
      afterUpdate: this._focusRootFlowItemNode,
      bind: this,
      class: this.classes({
        [n8.contentFeature]: true,
        [n8.flowItemCollapsed]: i3
      }),
      closable: t3.closeButton,
      closed: !n10,
      collapsed: i3,
      collapseDirection: s6 ? "down" : "up",
      collapsible: o3,
      headingLevel: e9,
      key: "root-flow-item",
      onCalciteFlowItemClose: this.close,
      onCalciteFlowItemToggle: this._handleCollapseToggle
    }, a2 ? n2(e6, {
      class: this.classes(n8.featuresHeading, e5.heading),
      innerHTML: a2,
      key: "header-content",
      level: this.headingLevel,
      slot: "header-content"
    }) : null, this._renderHeaderActions(), this._renderActionBar(), i3 ? null : n2("div", {
      class: this.classes(n8.container, n8.contentContainer)
    }, this._renderContent()), this._renderFooter());
  }
  _renderFeatureMenuContainer() {
    const {
      viewModel: e9,
      featureMenuOpen: t3,
      messages: i3,
      messagesCommon: o3
    } = this, {
      active: s6,
      featureViewModels: r3,
      pendingPromisesCount: n10
    } = e9;
    return t3 ? n2("calcite-flow-item", {
      afterCreate: this._storeFeatureMenuFlowItemNode,
      afterUpdate: this._focusFeatureMenuFlowItemNode,
      bind: this,
      closable: false,
      closed: !s6,
      description: s2(i3.total, {
        total: r3.length
      }),
      heading: i3.selectFeature,
      key: "feature-menu",
      loading: e9.waitingForContents,
      onCalciteFlowItemBack: (e10) => {
        e10.preventDefault(), this._handleFeatureMenuBack();
      }
    }, n10 > 0 ? n2("calcite-loader", {
      class: n8.loader,
      inline: true,
      key: "feature-menu-loader",
      label: o3.loading,
      slot: "header-actions-end"
    }) : null, n2("div", {
      class: n8.container
    }, this._renderFeatureMenu()), n2("div", {
      afterCreate: this._featureMenuIntersectionObserverCreated,
      bind: this,
      class: n8.featureMenuObserver
    }), n2("calcite-button", {
      appearance: "transparent",
      onclick: this._handleFeatureMenuBack,
      slot: "footer-actions",
      width: "full"
    }, o3.back)) : null;
  }
  _renderContentContainer() {
    const e9 = [this._renderContentFeature(), this._renderFeatureMenuContainer(), this._relatedRecordsWidget.render()];
    return this.visibleElements.flow ? n2("calcite-flow", {
      key: "content-container"
    }, e9) : e9;
  }
  _getFallbackIcon(e9) {
    const {
      className: t3,
      icon: i3
    } = e9;
    if (i3) return null;
    const o3 = e4({
      action: e9,
      feature: this.selectedFeature
    }), s6 = {
      [n8.icon]: !!t3,
      [n8.actionImage]: !!o3
    };
    return t3 && (s6[t3] = true), o3 || t3 ? n2("span", {
      "aria-hidden": "true",
      class: this.classes(n8.icon, s6),
      key: "icon",
      styles: n4(o3)
    }) : null;
  }
  _renderActionBar() {
    return !this._isCollapsed && this.visibleElements.actionBar && this.viewModel.allActions?.length ? n2("calcite-action-bar", {
      expandDisabled: true,
      expanded: !this._hideActionText,
      key: "header-action-bar",
      scale: "s",
      slot: "action-bar"
    }, n2("calcite-action-group", {
      afterCreate: (e9) => this._actionBarMenuNode = e9,
      overlayPositioning: "fixed",
      scale: "s"
    }, this._renderActions())) : null;
  }
  _renderActions() {
    return this.viewModel.allActions.toArray().map(this._renderAction);
  }
  _renderContent() {
    const e9 = this.viewModel?.content;
    return e9 ? "string" == typeof e9 ? n2("div", {
      class: t.contentNode,
      innerHTML: e9,
      key: e9
    }) : this.renderNodeContent(e9) : null;
  }
  _setFocusOn() {
    this.renderNow(), requestAnimationFrame(() => {
      this._focusOn = this.featureMenuOpen ? "menu-flow-item" : "root-flow-item";
    });
  }
  _handleCollapseToggle() {
    this.collapsed = !this.collapsed;
  }
  _openRelatedFeature(e9) {
    return __async(this, null, function* () {
      yield e9.viewModel.updateGeometry();
      const t3 = e9.graphic, i3 = t3?.geometry;
      if (null == i3 || null == t3) return;
      this._destroyRelatedRecordsFlowItemWidgets(), yield this.viewModel.zoomTo({
        target: i3
      });
      const o3 = n3(i3);
      this.open({
        features: [t3],
        location: null != o3 ? o3 : void 0
      });
    });
  }
  _focusRootFlowItemNode() {
    this._focusFlowItemNodeThrottled("root-flow-item");
  }
  _focusFeatureMenuFlowItemNode() {
    this._focusFlowItemNodeThrottled("menu-flow-item");
  }
  _storeRootFlowItemNode(e9) {
    this._rootFlowItemNode = e9, this._focusFlowItemNodeThrottled("root-flow-item");
  }
  _storeFeatureMenuFlowItemNode(e9) {
    this._featureMenuViewportNode = e9, this._focusFlowItemNodeThrottled("menu-flow-item");
  }
  _setActiveFeature(e9) {
    const {
      viewModel: t3
    } = this, i3 = e9.currentTarget["data-feature-index"];
    t3.activeFeature = t3.features?.[i3] || null;
  }
  _removeActiveFeature() {
    this.viewModel.activeFeature = null;
  }
  _selectFeature(e9) {
    const t3 = e9.currentTarget["data-feature-index"];
    isNaN(t3) || (this.viewModel.selectedFeatureIndex = t3), this._handleFeatureMenuBack();
  }
  _unobserveFeatureMenuObserver() {
    this._featureMenuIntersectionObserverNode && this._featureMenuIntersectionObserver.unobserve(this._featureMenuIntersectionObserverNode);
  }
  _featureMenuIntersectionObserverCreated(e9) {
    this._unobserveFeatureMenuObserver(), this._featureMenuIntersectionObserver.observe(e9), this._featureMenuIntersectionObserverNode = e9;
  }
  _getActionIcon(e9) {
    return e9.icon ? e9.icon : e9.image || e9.className ? void 0 : "question";
  }
  _getActionTitle(e9) {
    const {
      messages: t3,
      selectedFeature: i3,
      messagesCommon: o3
    } = this, {
      id: s6
    } = e9, r3 = i3?.attributes, n10 = e9.title ?? "", a2 = "zoom-to-feature" === s6 ? s2(n10, {
      messages: t3
    }) : "remove-selected-feature" === s6 ? s2(n10, {
      messages: o3
    }) : "zoom-to-clustered-features" === s6 || "browse-clustered-features" === s6 ? s2(n10, {
      messages: t3
    }) : e9.title;
    return a2 && r3 ? s2(a2, r3) : a2 ?? "";
  }
  _onMainKeydown(e9) {
    const {
      key: t3
    } = e9;
    "ArrowLeft" === t3 && (e9.stopPropagation(), this._handleFeatureMenuBack(), this.previous()), "ArrowRight" === t3 && (e9.stopPropagation(), this._handleFeatureMenuBack(), this.next());
  }
  _featureMenuViewportScrollTop() {
    this._featureMenuViewportNode && this._featureMenuViewportNode.scrollContentTo({
      top: 0
    });
  }
  _setContentFromFeatureWidget() {
    const {
      selectedFeatureWidget: e9
    } = this;
    e9 && (this.viewModel.content = e9);
  }
  _setTitleFromFeatureWidget() {
    const {
      selectedFeatureWidget: e9,
      messagesCommon: t3
    } = this, i3 = e9?.viewModel;
    e9 && (this.viewModel.title = "error" === i3?.state ? t3?.errorMessage : i3?.title || "");
  }
  _addSelectedFeatureIndexHandle() {
    const e9 = d(() => this.viewModel?.selectedFeatureIndex, (e10, t3) => this._selectedFeatureIndexUpdated(e10, t3));
    this.addHandles(e9, O2);
  }
  _selectedFeatureIndexUpdated(e9, t3) {
    const {
      featureCount: i3
    } = this.viewModel;
    i3 && e9 !== t3 && -1 !== e9 && (this._destroyRelatedRecordsFlowItemWidgets(), this._rootFlowItemNode && this._rootFlowItemNode.scrollContentTo({
      top: 0
    }));
  }
  _triggerHeaderAction(e9) {
    const t3 = e9.currentTarget;
    if (t3.disabled) return;
    const i3 = t3.dataset.actionUid, o3 = this.headerActions.find(({
      uid: e10
    }) => e10 === i3);
    o3 && !o3.disabled && ("toggle" === o3?.type && (o3.value = !o3.value), this.emit("trigger-header-action", {
      action: o3
    }));
  }
  _triggerAction(e9) {
    const t3 = e9.currentTarget;
    if (t3.disabled) return;
    const i3 = t3.dataset.actionUid, {
      allActions: o3
    } = this.viewModel, s6 = o3.findIndex((e10) => e10.uid === i3), r3 = o3.at(s6);
    r3 && "toggle" === r3.type && (r3.value = !r3.value), this.viewModel.triggerAction(s6);
  }
  _createSpinner(e9) {
    e9 && (this._spinner = new h({
      view: e9
    }), e9.ui.add(this._spinner, {
      key: T,
      position: "manual",
      internal: true
    }));
  }
  _wireUpView(e9) {
    this._destroySpinner(), e9 && this.visibleElements?.spinner && this._createSpinner(e9);
  }
  _hideSpinner() {
    const {
      _spinner: e9
    } = this;
    e9 && (e9.location = null, e9.hide());
  }
  _viewReadyChange(e9, t3) {
    e9 ? this._wireUpView(this.viewModel?.view) : t3 && this.viewModel.clear();
  }
  _viewChange(e9, t3) {
    e9 && t3 && this.viewModel.clear();
  }
  _destroySelectedFeatureWidget() {
    const {
      _feature: e9
    } = this;
    e9 && (e9.viewModel = null, !e9.destroyed && e9.destroy()), this._feature = null;
  }
  _closeOpenActionMenu() {
    const {
      _actionBarMenuNode: e9
    } = this;
    e9 && (e9.menuOpen = false);
  }
  _destroyRelatedRecordsFlowItemWidgets() {
    this._relatedRecordsFlowItems.drain((e9) => {
      "showAllEnabled" in e9.viewModel && (e9.viewModel.showAllEnabled = false), e9.viewModel = null, e9.destroy();
    });
  }
  _toggleScreenLocationEnabled() {
    const {
      viewModel: e9
    } = this;
    e9 && (e9.screenLocationEnabled = e9.active);
  }
  _displaySpinner() {
    const {
      _spinner: e9
    } = this;
    if (!e9) return;
    const {
      location: t3,
      waitingForResult: i3
    } = this.viewModel;
    i3 && t3 ? e9.show({
      location: t3
    }) : e9.hide();
  }
  _destroySpinner() {
    const {
      _spinner: e9,
      view: t3
    } = this;
    e9 && (t3?.ui?.remove(e9, T), e9.destroy(), this._spinner = null);
  }
  _spinnerEnabledChange(e9) {
    this._destroySpinner(), e9 && this._createSpinner(this.viewModel?.view);
  }
};
e([y()], E.prototype, "_focusOn", void 0), e([y()], E.prototype, "_relatedRecordsFlowItems", void 0), e([y()], E.prototype, "_hideActionText", null), e([y()], E.prototype, "_featureNavigationVisible", null), e([y()], E.prototype, "_isCollapsed", null), e([y()], E.prototype, "_collapseEnabled", null), e([y({
  readOnly: true
})], E.prototype, "active", null), e([y()], E.prototype, "collapsed", void 0), e([y()], E.prototype, "content", null), e([y()], E.prototype, "icon", null), e([y()], E.prototype, "featureMenuOpen", null), e([y()], E.prototype, "featureNavigationTop", void 0), e([y()], E.prototype, "features", null), e([y()], E.prototype, "goToOverride", null), e([y({
  type: i2
})], E.prototype, "headerActions", void 0), e([y()], E.prototype, "headingLevel", void 0), e([y()], E.prototype, "location", null), e([y()], E.prototype, "label", null), e([y()], E.prototype, "map", null), e([y(), e2("esri/widgets/Features/t9n/Features")], E.prototype, "messages", void 0), e([y(), e2("esri/t9n/common")], E.prototype, "messagesCommon", void 0), e([y()], E.prototype, "promises", null), e([y()], E.prototype, "responsiveActionsEnabled", void 0), e([y({
  readOnly: true
})], E.prototype, "selectedFeature", null), e([y()], E.prototype, "selectedFeatureIndex", null), e([y({
  readOnly: true
})], E.prototype, "selectedFeatureWidget", null), e([y()], E.prototype, "spatialReference", null), e([y()], E.prototype, "title", null), e([y()], E.prototype, "timeZone", null), e([y()], E.prototype, "updateLocationEnabled", null), e([y()], E.prototype, "view", null), e([y({
  type: W2
}), e7(["triggerAction", "trigger-action"])], E.prototype, "viewModel", void 0), e([y({
  type: l5,
  nonNullable: true
})], E.prototype, "visibleElements", void 0), e([y()], E.prototype, "visible", null), E = e([a("esri.widgets.Features")], E);
var L2 = E;

export {
  W2 as W,
  L2 as L
};
//# sourceMappingURL=chunk-LFVCDSAE.js.map
