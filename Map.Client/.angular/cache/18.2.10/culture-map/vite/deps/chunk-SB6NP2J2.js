import {
  s as s4,
  t as t5
} from "./chunk-AXXQSWHU.js";
import {
  A as A3,
  G as G2,
  L as L4,
  N,
  c2,
  d as d6,
  e as e8,
  e2 as e9,
  e3 as e10,
  i3 as i5,
  l as l4,
  l2 as l5,
  m as m4,
  r as r4
} from "./chunk-PPMYY5TL.js";
import {
  u as u5
} from "./chunk-ONNA6736.js";
import {
  e as e11
} from "./chunk-UAMCUBIO.js";
import {
  i as i4
} from "./chunk-PR6QK2UX.js";
import {
  _ as _3
} from "./chunk-E7VVOB2F.js";
import {
  a as a2,
  d2 as d5
} from "./chunk-6YVA5E7L.js";
import {
  b as b3
} from "./chunk-4KGPH7OX.js";
import {
  c
} from "./chunk-TLAW3ACJ.js";
import {
  a as a3
} from "./chunk-R6CAUNOR.js";
import {
  T,
  e as e7
} from "./chunk-ZIDRXKSJ.js";
import {
  C as C3
} from "./chunk-67LE7VNQ.js";
import {
  o as o5
} from "./chunk-RP2GKJCD.js";
import {
  t as t4
} from "./chunk-D3AKDIJC.js";
import {
  t as t3
} from "./chunk-ZVFENZUF.js";
import {
  F as F2,
  M,
  y as y2
} from "./chunk-Z6Z2SY6R.js";
import {
  h as h4
} from "./chunk-PVO5NM6Q.js";
import {
  o as o3
} from "./chunk-6UYQMUGI.js";
import {
  C as C2,
  F,
  I,
  i as i2,
  o as o4
} from "./chunk-YFQ32AQX.js";
import {
  e as e5
} from "./chunk-O437BSYE.js";
import {
  e as e4
} from "./chunk-YZNT6QWD.js";
import {
  h as h3
} from "./chunk-YVOGHYE3.js";
import {
  u as u4
} from "./chunk-2N3BR7QT.js";
import {
  A as A2
} from "./chunk-AQJS6F3O.js";
import {
  n as n5
} from "./chunk-L7ZKWTWL.js";
import {
  d as d4,
  m as m3
} from "./chunk-QCBC3RJX.js";
import {
  E as E2
} from "./chunk-4MMTPKY4.js";
import {
  e as e6
} from "./chunk-SWPHGZYB.js";
import {
  d as d3,
  g as g2
} from "./chunk-MAO5BVLA.js";
import {
  b as b2,
  h4 as h2
} from "./chunk-634JLXD4.js";
import {
  m3 as m2
} from "./chunk-T5JGQSO3.js";
import {
  B,
  E,
  P as P2,
  S as S2,
  Z,
  h,
  i
} from "./chunk-J55F4AC2.js";
import {
  S as S3
} from "./chunk-5EBAJR7X.js";
import {
  $,
  J,
  t as t2
} from "./chunk-DUTZNK67.js";
import {
  f
} from "./chunk-M2NS3MSU.js";
import {
  r as r3
} from "./chunk-3RRMLFFN.js";
import {
  i as i3
} from "./chunk-JILEJ6R2.js";
import {
  n as n4
} from "./chunk-OGZAGPIO.js";
import {
  R,
  e as e3,
  l as l3,
  m,
  u as u3
} from "./chunk-IHVSZYZS.js";
import {
  w as w2
} from "./chunk-NYQ5CYNR.js";
import {
  _ as _2
} from "./chunk-O7UDKFOW.js";
import {
  g,
  o as o2,
  r as r2,
  u as u2
} from "./chunk-AXVPJBVW.js";
import {
  n as n3
} from "./chunk-OXEPWRM7.js";
import {
  G,
  L as L3,
  s3
} from "./chunk-JJS7PR2U.js";
import {
  A,
  C,
  P,
  d as d2,
  p,
  v as v2,
  w
} from "./chunk-6WHTZNUH.js";
import {
  _
} from "./chunk-XNUH25NY.js";
import {
  o
} from "./chunk-WGAPNV7F.js";
import {
  e as e2
} from "./chunk-4Z5SGKRM.js";
import {
  S,
  v
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a,
  n as n2,
  t2 as t
} from "./chunk-DDYVXG4F.js";
import {
  L as L2,
  b,
  d,
  s as s2
} from "./chunk-HJY2YILU.js";
import {
  e
} from "./chunk-7DA6A5LD.js";
import {
  l,
  r,
  u
} from "./chunk-2MMLMOWS.js";
import {
  l as l2
} from "./chunk-4323ZVPF.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  L,
  O,
  has
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __superGet
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/DisplayFeatureLimit.js
var e12 = class {
  constructor(e16, m5, t8) {
    this.maximumTotalNumberOfVertices = e16, this.maximumNumberOfFeatures = m5, this.averageSymbolComplexity = t8;
  }
};

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DFeatureStore.js
var d7 = i();
var l6 = class extends S {
  constructor(t8) {
    super(t8), this.events = new o(), this.hasZ = null, this.hasM = null, this.objectIdField = null, this.featureAdapter = {
      getAttribute: (t9, e16) => "graphic" in t9 ? t9.graphic.attributes[e16] : o3.getAttribute(t9, e16),
      getAttributes: (t9) => "graphic" in t9 ? t9.graphic.attributes : o3.getAttributes(t9),
      getObjectId: (t9) => "graphic" in t9 ? M(t9.graphic, this.objectIdField) ?? void 0 : o3.getObjectId(t9),
      getGeometry: (t9) => "graphic" in t9 ? t9.getAsOptimizedGeometry(this.hasZ, this.hasM) : o3.getGeometry(t9),
      getCentroid: (t9, e16) => {
        if ("graphic" in t9) {
          let r7 = null;
          null != t9.centroid ? r7 = t9.centroid : "point" === t9.graphic.geometry.type && $(t9.graphic.geometry, u6, this.viewSpatialReference) && (r7 = u6);
          const o8 = new Array(2 + (e16.hasZ ? 1 : 0) + (e16.hasM ? 1 : 0));
          return null == r7 ? (o8[0] = 0, o8[1] = 0, o8[2] = 0, o8[3] = 0) : (o8[0] = r7.x, o8[1] = r7.y, e16.hasZ && (o8[2] = r7.hasZ ? r7.z : 0), e16.hasM && (o8[e16.hasZ ? 3 : 2] = r7.hasM ? r7.m : 0)), new e4([], o8);
        }
        return o3.getCentroid(t9, e16);
      },
      cloneWithGeometry: (t9, e16) => "graphic" in t9 ? new e5(e16, this.featureAdapter.getAttributes(t9), null, this.featureAdapter.getObjectId(t9)) : o3.cloneWithGeometry(t9, e16)
    };
  }
  forEachInBounds(t8, e16) {
    this.getSpatialIndex().forEachInBounds(t8, e16);
  }
  forEachBounds(t8, e16) {
    const r7 = this.getSpatialIndex();
    for (const o8 of t8) {
      const t9 = this.featureAdapter.getObjectId(o8);
      null != r7.getBounds(t9, d7) && e16(d7);
    }
  }
};
e2([y({
  constructOnly: true
})], l6.prototype, "getSpatialIndex", void 0), e2([y({
  constructOnly: true
})], l6.prototype, "forEach", void 0), e2([y({
  constructOnly: true
})], l6.prototype, "hasZ", void 0), e2([y({
  constructOnly: true
})], l6.prototype, "hasM", void 0), e2([y({
  constructOnly: true
})], l6.prototype, "objectIdField", void 0), e2([y({
  constructOnly: true
})], l6.prototype, "viewSpatialReference", void 0), e2([y({
  constructOnly: true
})], l6.prototype, "featureSpatialReference", void 0), l6 = e2([a("esri.views.3d.layers.graphics.Graphics3DFeatureStore")], l6);
var u6 = {
  type: "point",
  x: 0,
  y: 0,
  hasZ: false,
  hasM: false,
  spatialReference: null
};

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DPointSymbol.js
var s5 = class _s extends c2 {
  constructor(r7, o8, t8) {
    super(r7, o8, t8), this._calloutSymbolLayer = null, this.symbol.hasVisibleCallout() && (this._calloutSymbolLayer = e10(this.symbol, o8));
  }
  doLoad(o8) {
    return __async(this, null, function* () {
      const a6 = this._calloutSymbolLayer ? _(this._calloutSymbolLayer.load()) : null;
      try {
        yield __superGet(_s.prototype, this, "doLoad").call(this, o8), s2(o8);
      } catch (l7) {
        throw this._calloutSymbolLayer?.abortLoad(), l7;
      }
      a6 && (yield a6);
    });
  }
  destroy() {
    super.destroy(), this._calloutSymbolLayer = u(this._calloutSymbolLayer);
  }
  createGraphics3DGraphic(r7, o8) {
    const t8 = super.createGraphics3DGraphic(r7, o8);
    if (null != this._calloutSymbolLayer && null != t8) {
      const o9 = this._createCalloutGraphic(r7);
      o9 && t8.setCalloutGraphic(o9);
    }
    return t8;
  }
  globalPropertyChanged(r7, o8) {
    return !!super.globalPropertyChanged(r7, o8) && (!this._calloutSymbolLayer || this._calloutSymbolLayer.globalPropertyChanged(r7, o8, (r8) => r8.calloutLayer));
  }
  updateGeometry(r7, o8) {
    const t8 = super.updateGeometry(r7, o8);
    if (t8 && this._calloutSymbolLayer) {
      const t9 = r7.calloutLayer;
      if (t9) return this._calloutSymbolLayer.updateGeometry(t9, o8);
    }
    return t8;
  }
  _createCalloutGraphic(r7) {
    const o8 = r7.renderingInfo;
    return r7.renderingInfo = new G2(o8.renderer, o8.symbol), this._calloutSymbolLayer.createGraphics3DGraphic(r7);
  }
};

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DSymbolFactory.js
function t6(t8, i7, n6) {
  return "point-3d" === t8.type ? new s5(t8, i7, n6) : new c2(t8, i7, n6);
}

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/GraphicsCorePerformanceInfo.js
var s6 = class {
  constructor(s8, i7, t8) {
    this.visible = s8, this.missing = i7, this.pending = t8;
  }
};

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/GraphicStateTracking.js
var e13 = class {
  constructor(t8) {
    this._graphicsCore = t8, this._idToState = /* @__PURE__ */ new Map(), this._states = /* @__PURE__ */ new Set();
    const i7 = t8.owner.layer?.objectIdField;
    i7 ? (this._getGraphicId = (t9) => M(t9, i7), this._getGraphics3DGraphicById = (t9) => this._graphicsCore.getGraphics3DGraphicByObjectId(t9)) : (this._getGraphicId = (t9) => t9.uid, this._getGraphics3DGraphicById = (t9) => this._graphicsCore.getGraphics3DGraphicById(t9));
  }
  destroy() {
    this._idToState.clear(), this._states.forEach((t8, i7) => this.remove(i7));
  }
  add(t8) {
    const s8 = e(() => this.remove(t8));
    if (this._states.has(t8)) return s8;
    const e16 = this._getGraphicId(t8.graphic), a6 = this._getGraphics3DGraphicById(e16);
    this._states.has(t8) || this._states.add(t8);
    return this._ensureStateList(e16).push(t8), t8.displaying = null != a6 && a6.isVisible(), t8.isDraped = null != a6 && a6.isDraped, t8.tracking = true, null != a6 && t8.emit("changed"), s8;
  }
  remove(i7) {
    if (this._states.has(i7)) {
      if (this._idToState.size) {
        const s8 = this._getGraphicId(i7.graphic), e16 = this._idToState.get(s8);
        e16 && (L(e16, i7), 0 === e16.length && this._idToState.delete(s8));
      }
      this._states.delete(i7), i7.tracking = false, i7.displaying = false;
    }
  }
  addGraphic(t8) {
    this._forEachState(t8, (i7) => {
      i7.displaying = t8.isVisible(), i7.isDraped = t8.isDraped, i7.emit("changed");
    });
  }
  removeGraphic(t8) {
    this._forEachState(t8, (t9) => {
      t9.displaying = false, t9.isDraped = false;
    });
  }
  updateGraphicGeometry(t8) {
    this._forEachState(t8, (t9) => t9.emit("changed"));
  }
  updateGraphicVisibility(t8) {
    this._forEachState(t8, (i7) => i7.displaying = t8.isVisible());
  }
  allGraphicsDeleted() {
    this._states.forEach((t8) => t8.displaying = false);
  }
  _ensureStateList(t8) {
    const i7 = this._idToState.get(t8);
    if (i7) return i7;
    const s8 = new Array();
    return this._idToState.set(t8, s8), s8;
  }
  _forEachState(t8, i7) {
    if (0 === this._states.size || 0 === this._idToState.size) return;
    const s8 = this._getGraphicId(t8.graphic), e16 = this._idToState.get(s8);
    null != e16 && e16.forEach(i7);
  }
};

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/SpatialIndex2D.js
var d8 = class extends S {
  constructor(t8) {
    super(t8), this._index = new h3(9, has("esri-csp-restrictions") ? (t9) => ({
      minX: t9.extent[0],
      minY: t9.extent[1],
      maxX: t9.extent[2],
      maxY: t9.extent[3]
    }) : [".extent[0]", ".extent[1]", ".extent[2]", ".extent[3]"]), this._missing = /* @__PURE__ */ new Set(), this._boundsByFeature = /* @__PURE__ */ new Map(), this.spatialReference = null, this.hasZ = null, this.hasM = null, this.objectIdField = null, this.updating = false;
  }
  setup(t8) {
    this._addMany(t8);
  }
  destroy() {
    this._missing.clear(), this._index = u(this._index), this._boundsByFeature.clear(), this._boundsByFeature = null;
  }
  update() {
    this._missing.size > 0 && (this._addMany(Array.from(this._missing.values())), this.updating = false, this._missing.clear());
  }
  get updatingRemaining() {
    return this._missing.size;
  }
  queryGraphicUIDsInExtent(t8, e16, s8) {
    null != e16 && e16.equals(this.spatialReference) && (u7.minX = t8[0], u7.minY = t8[1], u7.maxX = t8[2], u7.maxY = t8[3], this.update(), this._index.search(u7, (t9) => s8(t9.graphic.uid)));
  }
  add(t8) {
    this._missing.add(t8), this.updating = true;
  }
  remove(t8) {
    if (this._missing.delete(t8)) return void (this.updating = this._missing.size > 0);
    if (!t8.extent) return;
    this._index.remove(t8);
    const e16 = M(t8.graphic, this._get("objectIdField"));
    null != e16 && this._boundsByFeature.delete(e16);
  }
  _addMany(t8) {
    if (0 === t8.length) return;
    const e16 = this._get("objectIdField");
    for (const s8 of t8) {
      s8.computeExtent(this.spatialReference);
      const t9 = M(s8.graphic, e16);
      null != t9 && this._boundsByFeature.set(t9, s8.extent);
    }
    this._index.load(t8);
  }
  clear() {
    this._index.clear(), this._missing.clear(), this._boundsByFeature.clear(), this.updating = false;
  }
  forEachInBounds(t8, e16) {
    u7.minX = t8[0], u7.minY = t8[1], u7.maxX = t8[2], u7.maxY = t8[3], this.update(), this._index.search(u7, (t9) => {
      e16(t9);
    });
  }
  getBounds(t8, e16) {
    this.update();
    const s8 = this._boundsByFeature.get(t8);
    return s8 ? Z(e16, s8) : null;
  }
};
e2([y({
  constructOnly: true
})], d8.prototype, "spatialReference", void 0), e2([y({
  constructOnly: true
})], d8.prototype, "hasZ", void 0), e2([y({
  constructOnly: true
})], d8.prototype, "hasM", void 0), e2([y({
  constructOnly: true
})], d8.prototype, "objectIdField", void 0), e2([y()], d8.prototype, "updating", void 0), e2([y({
  readOnly: true
})], d8.prototype, "updatingRemaining", null), d8 = e2([a("esri.views.3d.layers.graphics.SpatialIndex2D")], d8);
var u7 = {
  minX: 0,
  minY: 0,
  maxX: 0,
  maxY: 0
};

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/symbolMemory.js
var e14 = 2216;
var o6 = 4096;
function r5(r7) {
  return e14 + o6 * r7.symbolLayers.length + r7.complexity.memory.resourceBytes;
}

// ../../../node_modules/@arcgis/core/views/3d/layers/support/StageLayerElevationProvider.js
var _4 = 1;
var v3 = Symbol("layerHandles");
var y3 = class extends o.EventedMixin(S) {
  get spatialReference() {
    return this.view?.spatialReference;
  }
  constructor(e16) {
    super(e16), this._elevationOffset = 0;
  }
  initialize() {
    this._renderCoordsHelper = this.view.renderCoordsHelper, this._intersectLayers = [this.stageLayer], this._intersector = T(this.view.state.viewingMode), this._intersector.options.store = e7.MIN;
    const e16 = this._computeLayerExtent(this.spatialReference, this.stageLayer);
    this._zmin = e16[2], this._zmax = e16[5];
    const t8 = this.stageLayer.events;
    this.addHandles([t8.on(["layerObjectAdded", "layerObjectRemoved", "geometryAdded", "geometryRemoved"], ({
      object: e17
    }) => this._objectChanged(e17)), t8.on("attributesChanged", ({
      attribute: e17,
      object: t9
    }) => E2(e17) && this._objectChanged(t9)), t8.on(["transformationChanged", "shaderTransformationChanged"], (e17) => this._objectChanged(e17))], v3);
  }
  dispose() {
    this.removeHandles(v3);
  }
  elevationInfoChanged() {
    const e16 = null != this.layer ? this.layer.elevationInfo : null;
    if (null != e16 && "on-the-ground" !== e16.mode) {
      const t8 = L3(this.layer.spatialReference), r7 = r3(e16.unit ?? "meters");
      this._elevationOffset = (e16.offset ?? 0) * r7 / t8;
    } else this._elevationOffset = 0;
  }
  getElevation(e16, t8, r7, s8) {
    if (x[0] = e16, x[1] = t8, x[2] = r7, !this._renderCoordsHelper.toRenderCoords(x, s8, x)) return n.getLogger(this).error("could not project point for elevation alignment"), null;
    const i7 = this._elevationOffset, n6 = this._zmin + i7, a6 = this._zmax + i7;
    this._renderCoordsHelper.setAltitude(C4, a6, x), this._renderCoordsHelper.setAltitude(E3, n6, x);
    const l7 = (e17) => !!e17.lastValidElevationBB;
    return this._intersector.reset(C4, E3, null), this._intersector.intersect(this._intersectLayers, null, _4, null, l7), this._intersector.results.min.getIntersectionPoint(x) ? this._renderCoordsHelper.getAltitude(x) : null;
  }
  _objectChanged(e16) {
    const t8 = this.spatialReference;
    if (!e16.lastValidElevationBB || !t8) return;
    P2(j);
    const r7 = e16.lastValidElevationBB;
    r7.isEmpty() || this._expandExtent(t8, r7.min, r7.max, j);
    const {
      min: o8,
      max: s8
    } = e16.boundingVolumeWorldSpace;
    this._expandExtent(t8, o8, s8, j), S2(j, b4.extent), this._zmin = Math.min(this._zmin, j[2]), this._zmax = Math.max(this._zmax, j[5]), b4.spatialReference = t8, this.emit("elevation-change", b4), r2(r7.min, o8), r2(r7.max, s8);
  }
  _computeLayerExtent(e16, t8) {
    return P2(j), null != e16 && t8.objects.forAll((t9) => this._expandExtent(e16, t9.boundingVolumeWorldSpace.min, t9.boundingVolumeWorldSpace.max, j)), j;
  }
  _expandExtent(e16, t8, r7, o8) {
    for (let s8 = 0; s8 < 8; ++s8) x[0] = 1 & s8 ? t8[0] : r7[0], x[1] = 2 & s8 ? t8[1] : r7[1], x[2] = 4 & s8 ? t8[2] : r7[2], this._renderCoordsHelper.fromRenderCoords(x, x, e16), h(o8, x);
    return o8;
  }
};
e2([y({
  constructOnly: true
})], y3.prototype, "layer", void 0), e2([y({
  constructOnly: true
})], y3.prototype, "stageLayer", void 0), e2([y({
  constructOnly: true
})], y3.prototype, "view", void 0), e2([y()], y3.prototype, "spatialReference", null), y3 = e2([a("esri.views.3d.layers.support.StageLayerElevationProvider")], y3);
var j = P2();
var b4 = new e11();
var x = n3();
var C4 = n3();
var E3 = n3();

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DCore.js
var Fe;
var Me = n3();
var Te = i();
var ze = Fe = class extends S {
  get _viewSpatialReference() {
    return this.owner.view.spatialReference;
  }
  get spatialIndex() {
    return this._spatialIndex || (this._spatialIndex = new d8({
      objectIdField: this.owner.layer?.objectIdField,
      spatialReference: this._viewSpatialReference,
      hasZ: !!this.hasZ,
      hasM: !!this.hasM
    }), this._spatialIndex.setup(Array.from(this.graphics3DGraphics.values()))), this._spatialIndex.update(), this._spatialIndex;
  }
  get deconflictor() {
    return this._deconflictor;
  }
  get labeler() {
    return this._labeler;
  }
  get numberOfGraphics() {
    return this._numberOfGraphics;
  }
  get effectiveUpdatePolicy() {
    return null != this.currentRenderer && "dictionary" === this.currentRenderer.type ? C3.ASYNC : this._forcedUpdatePolicy ?? this.preferredUpdatePolicy;
  }
  get featureStore() {
    return this._featureStore;
  }
  get initializePromise() {
    return this._initializePromise;
  }
  get scaleVisibility() {
    return this._scaleVisibility;
  }
  get elevationAlignment() {
    return this._elevationAlignment;
  }
  get objectStates() {
    return this._objectStates;
  }
  get filterVisibility() {
    return this._filterVisibility;
  }
  get updating() {
    return !!(this.dataUpdating || this._elevationAlignment?.updating || this._scaleVisibility?.updating || this._filterVisibility?.updating || this._rendererChangeAbortController || this._elevationInfoChangeAbortController || this._frameTaskHandle.updating || this.running);
  }
  get dataUpdating() {
    return !!(this._graphicsWaitingForSymbol.size > 0 || this._pendingUpdates.size > 0 || this._spatialIndex?.updating || this._updatingPendingLoadedGraphicsChange || this._dataUpdateQueue.running || this._loadingSymbols > 0);
  }
  get running() {
    return this._pendingUpdates.size > 0 || !!this._spatialIndex?.updating || this._dataUpdateQueue.running || this._updateQueue.running;
  }
  get suspendedOrOutsideOfView() {
    return this.owner.suspended || !!this.owner.suspendInfo?.outsideOfView;
  }
  get updatingRemaining() {
    return this.updating ? this._pendingUpdates.size + 0.1 * (this._spatialIndex?.updatingRemaining || 0) + 0.1 * (this._elevationAlignment?.updatingRemaining || 0) : 0;
  }
  get displayFeatureLimit() {
    const e16 = this.owner && this.owner.view && this.owner.view.qualitySettings, t8 = e16?.graphics3D.minTotalNumberOfFeatures ?? 0, i7 = e16?.graphics3D.maxTotalNumberOfFeatures ?? 0, r7 = e16?.graphics3D.maxNumberOfDrawCalls ?? 0, s8 = e16?.graphics3D.maxTotalNumberOfVertices ?? 0, a6 = this.averageSymbolComplexity, n6 = Math.max(1, a6?.verticesPerFeature ?? 1), o8 = a6 && a6.drawCallsPerFeature > 0 && r7 > 0 ? r7 / a6.drawCallsPerFeature : i7, l7 = Math.ceil(s8 / n6), h7 = Math.max(t8, Math.min(i7, l7, o8)), d10 = this._get("displayFeatureLimit");
    return d10 && d10.maximumTotalNumberOfVertices === s8 && d10.averageSymbolComplexity === a6 && d10.maximumNumberOfFeatures === h7 ? d10 : new e12(s8, h7, a6);
  }
  get averageSymbolComplexity() {
    const e16 = d6(this._symbolComplexities), t8 = this._get("averageSymbolComplexity");
    return 0 === e16.numComplexities || null != t8 && (e16.estimated && (t8.verticesPerFeature >= e16.verticesPerFeature || t8.verticesPerCoordinate >= e16.verticesPerCoordinate || t8.drawCallsPerFeature >= e16.drawCallsPerFeature) || t8.verticesPerFeature === e16.verticesPerFeature && t8.verticesPerCoordinate === e16.verticesPerCoordinate && t8.drawCallsPerFeature === e16.drawCallsPerFeature) ? t8 : e16;
  }
  get usedMemory() {
    const e16 = null != this.averageSymbolComplexity && this.labelsEnabled ? this.averageSymbolComplexity.memory.bytesPerFeatureLabel * this._numberOfGraphics : 0, t8 = this._getSymbolComplexitiesUsed().reduce((e17, t9) => e17 + t9.memory.resourceBytes, 0);
    if (null == this._symbolMaterials) {
      this._symbolMaterials = [];
      for (const e17 of this._symbols.values()) if (null != e17) {
        for (const t9 of e17.symbolLayers) if (t9) for (const e18 of t9.materials) e18 && this._symbolMaterials.push(e18);
      }
    }
    const i7 = this.owner.view._stage.renderer.plugins, r7 = this.owner.view.basemapTerrain.overlayManager.renderer, s8 = this._symbolMaterials.reduce((e17, t9) => e17 + ((i7.getMaterialRenderer(t9) || r7.getMaterialRenderer(t9))?.usedMemory ?? 0), 0);
    return this._usedMemory + e16 + t8 + s8;
  }
  get usedMemoryPerGraphic() {
    if (this._usedMemory && this._numberOfGraphics) {
      const e16 = this._numberOfGraphics / (this._numberOfGraphics + Math.max(this._pendingAdds, this._pendingRemoves));
      return this._usedMemory / this._numberOfGraphics * e16;
    }
    if (null != this.averageSymbolComplexity) {
      const e16 = this.labelsEnabled ? this.averageSymbolComplexity.memory.bytesPerFeatureLabel : 0;
      return this.averageSymbolComplexity.memory.bytesPerFeature + e16;
    }
    return 0;
  }
  get unprocessedMemoryEstimate() {
    return (this._pendingAdds - this._pendingRemoves) * this.usedMemoryPerGraphic;
  }
  get _symbolComplexities() {
    return this.currentRenderer ? this._getSymbolComplexitiesUsedOrRenderer(this.currentRenderer) : this._getSymbolComplexitiesUsed();
  }
  get visible() {
    return this._visible;
  }
  _getConvertedSymbol(e16) {
    if ("web-style" === e16.type) return e16.clone();
    const t8 = this._symbolConversionCache.get(e16.id);
    if (null != t8) return t8;
    const r7 = g2(e16, {
      geometryType: this.layer?.geometryType ?? void 0,
      retainId: true,
      hasLabelingContext: this._hasLabelingContext(e16),
      cimFallbackEnabled: true
    }), s8 = r7.symbol || null;
    return null == s8 && r7.error && n.getLogger(this).error(r7.error.message), this._symbolConversionCache.set(e16.id, s8), s8;
  }
  _getSymbolComplexitiesUsedOrRenderer(e16) {
    if (null == e16) return [];
    const t8 = e16.getSymbols(), i7 = "backgroundFillSymbol" in e16 ? e16.backgroundFillSymbol : null;
    if (!i7 && !t8?.length) return [];
    const r7 = [], s8 = this._getSymbolComplexityUsedOrRenderer(i7);
    null != s8 && r7.push(s8);
    for (const a6 of t8) {
      const e17 = this._getSymbolComplexityUsedOrRenderer(a6);
      null != e17 && r7.push(e17);
    }
    return r7;
  }
  _getSymbolComplexityUsedOrRenderer(e16) {
    if (null == e16) return null;
    const t8 = this._symbols.get(e16.id);
    if (null != t8) return t8.complexity;
    const i7 = this._getConvertedSymbol(e16);
    return null != i7 ? m4(i7) : null;
  }
  _getSymbolComplexitiesUsed() {
    const e16 = [];
    return this._symbols.forEach((t8) => {
      null != t8 && e16.push(t8.complexity);
    }), e16;
  }
  get _objectIdField() {
    return this.layer.objectIdField;
  }
  constructor(e16) {
    super(e16), this._propertiesPool = new o5({
      computedExtent: w2
    }, this), this.computedExtent = null, this.currentRenderer = null, this.rendererHasGeometryOperations = false, this._graphicStateTracking = null, this.graphics3DGraphics = /* @__PURE__ */ new Map(), this.stageLayer = null, this.stage = null, this._graphicsDrapedUids = /* @__PURE__ */ new Set(), this._graphicsBySymbol = /* @__PURE__ */ new Map(), this._symbolConversionCache = /* @__PURE__ */ new Map(), this._symbols = /* @__PURE__ */ new Map(), this._graphicsWithoutSymbol = /* @__PURE__ */ new Map(), this._graphicsWaitingForSymbol = /* @__PURE__ */ new Map(), this._graphicsUpdateId = 0, this._frameTaskHandle = F, this._dataUpdateQueue = new i2(), this._updateQueue = new i2(), this._suspendSymbolCleanup = false, this._arcadeOnDemand = null, this._rendererChangeAbortController = null, this._elevationInfoChangeAbortController = null, this._initializeAbortController = null, this._elevationAlignment = null, this._scaleVisibility = null, this._filterVisibility = null, this._spatialIndex = null, this.extentPadding = 0, this._updatingPendingLoadedGraphicsChange = null, this._featureStore = null, this._deconflictor = null, this._labeler = null, this._objectStates = null, this._viewElevationProvider = null, this._stageLayerElevationProvider = null, this._sharedSymbolResourcesOwnerHandle = null, this._whenGraphics3DGraphicRequests = {}, this._pendingUpdates = /* @__PURE__ */ new Map(), this._numberOfGraphics = 0, this._numberOfGraphicsProvidingElevation = 0, this._pendingAdds = 0, this._pendingRemoves = 0, this._applyPendingRemovesFirst = false, this._loadingSymbols = 0, this._pendingUpdatesPool = new l2({
      allocator: (e17) => e17 || new We(),
      deallocator: (e17) => (e17.clear(), e17)
    }), this._symbolWarningLogged = false, this._geometryWarningLogged = false, this._objectIdInvisibleSet = /* @__PURE__ */ new Set(), this._whenSymbolRemoved = new l2(), this.preferredUpdatePolicy = C3.SYNC, this._forcedUpdatePolicy = null, this.elevationFeatureExpressionEnabled = true, this.owner = null, this.layer = null, this.graphicSymbolSupported = true, this.getRenderingInfoWithoutRenderer = false, this.setUidToIdOnAdd = true, this.hasZ = null, this.hasM = null, this._usedMemory = 0, this._visible = false, this._startCreateGraphics = false, this._unusedSymbolsCache = e16.owner.view.resourceController.memoryController.newCache("graphics-3d-unused-symbols", (e17) => e17.destroy()), this.symbolCreationContext = new e8(e16.owner.view.resourceController.scheduler, (e17, t8) => this._updateQueue.push(e17, t8));
  }
  initialize() {
    this._featureStore = new l6({
      objectIdField: this.owner.layer?.objectIdField,
      hasZ: !!this.hasZ,
      hasM: !!this.hasM,
      viewSpatialReference: this._viewSpatialReference,
      featureSpatialReference: this.owner.featureSpatialReference,
      getSpatialIndex: () => this.spatialIndex,
      forEach: (e17) => this.graphics3DGraphics.forEach(e17)
    });
    const e16 = (e17, t9, i7) => this.spatialIndex.queryGraphicUIDsInExtent(e17, t9, i7), {
      componentFactories: t8
    } = this;
    this._elevationAlignment = t8.elevationAlignment?.(this, e16), this._scaleVisibility = t8.scaleVisibility?.(this, e16), this._filterVisibility = t8.filterVisibility?.({
      featureStore: this._featureStore,
      getFeatureCount: () => this.graphics3DGraphics.size,
      updateFeatureVisibilities: (e17) => this.modifyGraphics3DGraphicVisibilities((t9) => t9.setVisibilityFlag(A3.GRAPHIC, L4.FILTER, e17(M(t9.graphic, this._objectIdField)))),
      setAllFeaturesVisibility: (e17) => this.modifyGraphics3DGraphicVisibilities((t9) => t9.setVisibilityFlag(A3.GRAPHIC, L4.FILTER, e17)),
      clearFeaturesVisibility: () => this.modifyGraphics3DGraphicVisibilities((e17) => e17.setVisibilityFlag(A3.GRAPHIC, L4.FILTER, true))
    }), this._deconflictor = t8.deconflictor?.(this), this._labeler = t8.labeler?.(this, this._scaleVisibility), this._objectStates = t8.objectStates?.(this), this._initializeAbortController = new AbortController(), this._initializePromise = this._initializeAsync();
  }
  _initializeAsync() {
    return __async(this, null, function* () {
      const e16 = this._initializeAbortController?.signal, t8 = this.owner.view;
      this._viewElevationProvider = new l4(this._viewSpatialReference, t8), this._initializeStage(t8, this.layer.uid);
      const r7 = t8.sharedSymbolResources;
      this.symbolCreationContext.sharedResources = r7, this._sharedSymbolResourcesOwnerHandle = r7.addGraphicsOwner(this.owner), null != this.currentRenderer && (this.symbolCreationContext.renderer = this.currentRenderer), this.symbolCreationContext.stage = this.stage, this.symbolCreationContext.streamDataRequester = r7.streamDataRequester, this.symbolCreationContext.renderCoordsHelper = t8.renderCoordsHelper, this.symbolCreationContext.layer = this.layer, this.symbolCreationContext.graphicsCoreOwner = this.owner, this.symbolCreationContext.localOriginFactory = new _3(t8.renderSpatialReference), this.symbolCreationContext.elevationProvider = t8.elevationProvider, this.symbolCreationContext.notifyGraphicGeometryChanged = (e17) => this.notifyGraphicGeometryChanged(e17), this.symbolCreationContext.notifyGraphicVisibilityChanged = (e17) => this.notifyGraphicVisibilityChanged(e17);
      const s8 = d5(this.layer.elevationInfo, this.elevationFeatureExpressionEnabled);
      if (this.symbolCreationContext.featureExpressionInfoContext = yield a2(s8, this._viewSpatialReference, e16, n.getLogger(this)), s2(e16), this.symbolCreationContext.screenSizePerspectiveEnabled = t8.screenSizePerspectiveEnabled && !!this.layer.screenSizePerspectiveEnabled, this.symbolCreationContext.slicePlaneEnabled = !!this.owner.slicePlaneEnabled, this.symbolCreationContext.physicalBasedRenderingEnabled = !!this.owner.view.qualitySettings?.physicallyBasedRenderingEnabled, this.symbolCreationContext.skipHighSymbolLods = !!this.owner.view.qualitySettings?.graphics3D?.skipHighSymbolLods, "drapeSourceType" in this.owner) {
        const {
          owner: e17
        } = this;
        this.symbolCreationContext.drapeSourceRenderer = t8.basemapTerrain.overlayManager.registerGeometryDrapeSource(e17), this.addHandles(e(() => t8.basemapTerrain.overlayManager.unregisterDrapeSource(e17)));
      }
      this.addHandles([d2(() => this.suspendedOrOutsideOfView, () => this._updateQueue.unshift(() => this._updateLayerVisibility(), null).catch(d)), d2(() => [this.layer?.screenSizePerspectiveEnabled, this.owner.view?.screenSizePerspectiveEnabled], () => {
        const e17 = t8.screenSizePerspectiveEnabled && !!this.layer.screenSizePerspectiveEnabled;
        e17 !== this.symbolCreationContext.screenSizePerspectiveEnabled && (this.symbolCreationContext.screenSizePerspectiveEnabled = e17, this._labeler?.reset(), this.recreateAllGraphicsAndSymbols());
      }), d2(() => this.owner.slicePlaneEnabled, (e17) => this._slicePlaneEnabledChange(!!e17)), d2(() => this.owner.view.state?.rasterPixelRatio, () => this._pixelRatioChange()), d2(() => !!this.owner.view.qualitySettings?.physicallyBasedRenderingEnabled, (e17) => this._physicalBasedRenderingChange(e17)), d2(() => !!this.owner.view.qualitySettings?.graphics3D?.skipHighSymbolLods, (e17) => this._skipHighSymbolLoDsChange(e17)), p(() => t8.basemapTerrain?.tilingScheme, (e17) => {
        if (e17.spatialReference.equals(this.symbolCreationContext.overlaySR) || null == t8.basemapTerrain.spatialReference || (this.symbolCreationContext.overlaySR = t8.basemapTerrain.spatialReference), this.hasHandles("loaded-graphics")) this.recreateAllGraphics();
        else {
          const e18 = () => this.owner?.loadedGraphics;
          this.addHandles([v2(e18, "change", (e19) => {
            this._graphicsCollectionChanged(e19), this._signalUpdatingDuringAsyncLoadedGraphicsChange();
          }, {
            onListenerAdd: () => {
              this.recreateAllGraphics(), this._signalUpdatingDuringAsyncLoadedGraphicsChange();
            }
          })], "loaded-graphics");
        }
      }, {
        initial: true
      }), d2(() => this.effectiveUpdatePolicy, (e17) => {
        null != this.stageLayer && (this.stageLayer.updatePolicy = e17), this.symbolCreationContext.isAsync = this.effectiveUpdatePolicy === C3.ASYNC, e17 === C3.SYNC && this.runTask(C2);
      }, A)]), this._frameTaskHandle = t8.resourceController.scheduler.registerTask(I.GRAPHICS_CORE, this), this.layer && "featureReduction" in this.layer && this.addHandles(d2(() => this.layer.featureReduction, () => this._deconflictor?.featureReductionChange())), this.notifyChange("averageSymbolComplexity"), this.rendererChange(this.owner.renderer).catch(() => {
      }), this._initializeAbortController = null;
    });
  }
  _abortInitialize() {
    this._initializeAbortController && (this._initializeAbortController.abort(), this._initializeAbortController = null);
  }
  destroy() {
    this._unusedSymbolsCache.destroy(), this._abortInitialize(), this._abortRendererChange(), this._abortElevationInfoChange(), this._frameTaskHandle.remove(), this._frameTaskHandle = F, this._dataUpdateQueue.cancelAll(), this._updateQueue.cancelAll(), this._deconflictor = l(this._deconflictor), this._labeler = l(this._labeler), this._elevationAlignment = u(this._elevationAlignment), this._scaleVisibility = u(this._scaleVisibility), this._filterVisibility = u(this._filterVisibility), this._objectStates = u(this._objectStates), this.clear(), this._featureStore = u(this._featureStore), this._updatingPendingLoadedGraphicsChange = l(this._updatingPendingLoadedGraphicsChange), this._graphicStateTracking = u(this._graphicStateTracking), this.stage && (this.stageLayer = u(this.stageLayer), this.stage = null), this._set("owner", null);
    for (const e16 in this._whenGraphics3DGraphicRequests) this._whenGraphics3DGraphicRequests[e16].reject(new s("graphic:layer-destroyed", "Layer has been destroyed"));
    this._whenGraphics3DGraphicRequests = null, this._sharedSymbolResourcesOwnerHandle = l(this._sharedSymbolResourcesOwnerHandle), this._propertiesPool = u(this._propertiesPool), this._pendingUpdatesPool = null, this._symbolConversionCache.clear(), this._objectIdInvisibleSet.clear(), this._spatialIndex = u(this._spatialIndex);
  }
  clear() {
    this._objectStates?.allGraphicsDeleted(), null != this._graphicStateTracking && this._graphicStateTracking.allGraphicsDeleted(), this.graphics3DGraphics.forEach((e16) => e16.destroy()), this._spatialIndex?.clear(), this.graphics3DGraphics.clear(), this._numberOfGraphics = 0, this._usedMemory = 0, this._updateLayerVisibility(), this._symbols.forEach(u), this._symbols.clear(), this._symbolMaterials = null, this._graphicsBySymbol.clear(), this._graphicsWithoutSymbol.clear(), this._graphicsWaitingForSymbol.clear(), this._pendingUpdates.clear(), this._pendingUpdatesPool.clear(), this._pendingAdds = 0, this._pendingRemoves = 0, this._applyPendingRemovesFirst = false, this.notifyChange("dataUpdating"), this.notifyChange("running"), this.notifyChange("updatingRemaining"), this._featureStore.events.emit("changed");
  }
  _initializeStage(e16, t8) {
    this.stage = e16._stage, this.stageLayer = new a3(this.stage, {
      pickable: !this.suspendedOrOutsideOfView,
      updatePolicy: this.effectiveUpdatePolicy
    }, t8);
    const i7 = this.stageLayer.events;
    i7.on("transformationChanged", (e17) => this.notifyGraphicGeometryChanged(e17.graphicUid)), i7.on("shaderTransformationChanged", (e17) => this.notifyGraphicGeometryChanged(e17.graphicUid)), i7.on("visibilityChanged", (e17) => this.notifyGraphicVisibilityChanged(e17.graphicUid)), i7.on("geometryAdded", (e17) => this.notifyGraphicGeometryChanged(e17.object.graphicUid)), i7.on("geometryRemoved", (e17) => this.notifyGraphicGeometryChanged(e17.object.graphicUid)), i7.on("attributesChanged", (e17) => E2(e17.attribute) && this.notifyGraphicGeometryChanged(e17.object.graphicUid));
  }
  notifyGraphicGeometryChanged(e16) {
    if (null == this._graphicStateTracking || null == e16) return;
    const t8 = this.graphics3DGraphics.get(e16);
    t8 && this._graphicStateTracking.updateGraphicGeometry(t8);
  }
  notifyGraphicVisibilityChanged(e16) {
    if (null == this._graphicStateTracking || null == e16) return;
    const t8 = this.graphics3DGraphics.get(e16);
    t8 && this._graphicStateTracking.updateGraphicVisibility(t8);
  }
  _updateLayerVisibility() {
    const e16 = this.displayFeatureLimit.maximumNumberOfFeatures, t8 = this._numberOfGraphics > e16 * He, i7 = !this.suspendedOrOutsideOfView && !t8;
    i7 !== this._visible && (this._visible = i7, i7 ? (this.stageLayer.pickable = true, this.updateAllGraphicsVisibility()) : (this.stageLayer.pickable = false, this._hideAllGraphics()), this._updateStageLayerVisibility());
  }
  _updateStageLayerVisibility() {
    this.stageLayer.visible = this._visible && (null == this.layer.opacity || this.layer.opacity > 0);
  }
  getGraphics3DGraphicById(e16) {
    return null != e16 ? this.graphics3DGraphics.get(e16) : void 0;
  }
  getGraphics3DGraphicByObjectId(e16) {
    return this.owner.layer?.objectIdField ? this._findGraphics3DGraphicByObjectId(e16) : null;
  }
  _getGraphicObjectID(e16, t8 = this.owner.layer?.objectIdField) {
    return M(e16, t8);
  }
  get graphics3DGraphicsByObjectID() {
    const e16 = this.owner.layer?.objectIdField;
    if (!e16) return;
    const t8 = /* @__PURE__ */ new Map();
    return this.graphics3DGraphics.forEach((i7) => {
      if (!i7) return;
      const r7 = i7.graphic, s8 = this._getGraphicObjectID(r7, e16);
      null != s8 && t8.set(s8, i7);
    }), t8;
  }
  get labelsEnabled() {
    return !!this._labeler?.layerLabelsEnabled();
  }
  updateLabelingInfo(e16) {
    return __async(this, null, function* () {
      const t8 = this._deconflictor?.labelingInfoChange(e16), i7 = this._labeler?.labelingInfoChange(e16);
      yield Promise.allSettled([t8, i7]);
    });
  }
  updateVisibilityInfo() {
    this._deconflictor?.labelingInfoChange(), this._labeler?.visibilityInfoChange();
  }
  get symbolUpdateType() {
    if (this._pendingUpdates.size > 0) return "unknown";
    let e16 = 0, t8 = 0;
    return n2(this._symbols, (i7, r7) => {
      if (null != i7) {
        const s8 = i7.getFastUpdateStatus();
        if (s8.loading > 0) return true;
        this._graphicsBySymbol.has(r7) && (t8 += s8.fast, e16 += s8.slow);
      }
      return false;
    }) ? "unknown" : t8 >= 0 && 0 === e16 ? "fast" : e16 >= 0 && 0 === t8 ? "slow" : "mixed";
  }
  runTask(e16) {
    if (this._dataUpdateQueue.runTask(e16), this._updateQueue.runTask(e16), this._applyPendingUpdates(e16), this.notifyChange("running"), this.running || this.notifyChange("dataUpdating"), this.notifyChange("updatingRemaining"), !e16.hasProgressed) return o4;
  }
  setObjectIdVisibility(e16, t8) {
    t8 ? this._objectIdInvisibleSet.delete(e16) : this._objectIdInvisibleSet.add(e16);
    const i7 = this._findGraphics3DGraphicByObjectId(e16);
    null != i7 && this._updateUserVisibility(i7);
  }
  _findGraphics3DGraphicByObjectId(e16) {
    return t(this.graphics3DGraphics, (t8) => this._getGraphicObjectID(t8.graphic) === e16);
  }
  _updateUserVisibility(e16) {
    if (null == e16) return false;
    const t8 = e16.graphic, i7 = this._getGraphicObjectID(t8), r7 = t8.visible && !this.owner.suspended && (null == i7 || !this._objectIdInvisibleSet.has(i7));
    return e16.setVisibilityFlag(A3.GRAPHIC, L4.USER, r7);
  }
  _whenGraphics3DGraphic(e16) {
    const t8 = this.graphics3DGraphics.get(e16.uid);
    if (t8) return Promise.resolve(t8);
    const i7 = this._whenGraphics3DGraphicRequests[e16.uid];
    if (i7) return i7.promise;
    const r7 = L2();
    return this._whenGraphics3DGraphicRequests[e16.uid] = r7, r7.promise;
  }
  _boundsForGraphics3DGraphic(e16, t8) {
    return __async(this, null, function* () {
      const i7 = this._viewSpatialReference, r7 = this.owner.view.renderSpatialReference, s8 = this.owner.view.basemapTerrain.spatialReference, a6 = (e17, t9, s9) => n4(e17, r7, t9, e17, i7, t9, s9), n6 = (e17, t9, r8) => n4(e17, s8, t9, e17, i7, t9, r8), o8 = this._viewElevationProvider ? {
        service: this._viewElevationProvider,
        useViewElevation: null != t8 && !!t8.useViewElevation,
        minDemResolution: null != t8 ? t8.minDemResolution : null,
        minDemResolutionForPoints: this.owner.view.resolution
      } : null, l7 = yield e16.getProjectedBoundingBox(a6, n6, o8, t8?.signal);
      if (!l7) return null;
      const h7 = l7.boundingBox;
      if (l7.requiresDrapedElevation) {
        const e17 = this.symbolCreationContext.elevationProvider;
        if (e17) {
          E(h7, Me);
          const t9 = e17.getElevation(Me[0], Me[1], 0, i7, "ground") ?? 0;
          h7[2] = Math.min(h7[2], t9), h7[5] = Math.max(h7[5], t9);
        }
      }
      return {
        boundingBox: h7,
        screenSpaceObjects: l7.screenSpaceObjects
      };
    });
  }
  whenGraphicBounds(e16, t8) {
    return __async(this, null, function* () {
      yield w(() => this.owner?.loadedGraphics);
      const i7 = this.owner.layer?.objectIdField, r7 = this.owner.loadedGraphics.find((t9) => t9 === e16 || null != i7 && null != t9.attributes && e16.attributes && t9.attributes[i7] === e16.attributes[i7]);
      if (!r7) throw new s("internal:graphic-not-part-of-view", "Graphic is not part of this view");
      const s8 = yield this._whenGraphics3DGraphic(r7);
      return this._boundsForGraphics3DGraphic(s8, t8);
    });
  }
  computeAttachmentOrigin(e16, t8) {
    const i7 = this.graphics3DGraphics.get(e16.uid);
    if (!i7) return null;
    const r7 = i7.computeAttachmentOrigin();
    if (0 === r7.render.num && 0 === r7.draped.num) return null;
    o2(Ne, 0, 0, 0);
    let s8 = 0;
    if (r7.render.num > 0) {
      if (!n5(r7.render.origin, this.symbolCreationContext.renderCoordsHelper.spatialReference, Be, t8)) return null;
      u2(Ne, Ne, Be), s8++;
    }
    if (r7.draped.num > 0) {
      const [e17, i8] = r7.draped.origin, a6 = this._viewElevationProvider.getElevation(e17, i8, "ground") ?? 0;
      if (o2(Be, e17, i8, a6), !n5(Be, this._viewElevationProvider.spatialReference, Be, t8)) return null;
      u2(Ne, Ne, Be), s8++;
    }
    return s8 > 1 && g(Ne, Ne, 1 / s8), new _2({
      x: Ne[0],
      y: Ne[1],
      z: Ne[2],
      spatialReference: t8
    });
  }
  getSymbolLayerSize(e16, t8) {
    const i7 = this._symbols.get(e16.id);
    if (null == i7) throw new s("internal:symbol-not-part-of-view", "Symbol is not part of this view");
    const r7 = e16.symbolLayers.indexOf(t8);
    if (-1 === r7) throw new s("internal:missing-symbol-layer", "Symbol layer is not in symbol");
    const s8 = i7.getSymbolLayerSize(r7);
    if (null == s8) throw new s("internal:missing-size", "Symbol layer has no valid size");
    return s8;
  }
  _graphicsCollectionChanged(e16) {
    this._startCreateGraphics && (this.add(e16.added), this.remove(e16.removed));
  }
  graphicUpdateHandler(e16) {
    const t8 = e16.graphic.uid, i7 = this.graphics3DGraphics.get(t8);
    if (null != i7 || null != this._graphicsWithoutSymbol.get(t8)) switch (e16.property) {
      case "visible":
        this._graphicUpdateVisibleHandler(i7);
        break;
      case "geometry":
        this._graphicUpdateGeometryHandler(i7, e16);
        break;
      case "symbol":
        this._graphicUpdateSymbolHandler(i7, e16);
        break;
      case "attributes":
        break;
      case "origin-transform":
        this._graphicUpdateTransformHandler(i7, e16);
    }
  }
  _graphicUpdateGeometryHandler(e16, t8) {
    this._graphicUpdateGeometryOrTransformHandler(e16, t8, () => !(null == t8.newValue || null == e16 || !e16.graphics3DSymbol.updateGeometry(e16, t8.newValue) || !(this._labeler?.updateGraphicGeometry(e16) ?? 1)) && (this._labeler?.setDirty(), true));
    const i7 = t8.graphic.geometry;
    null != i7 && this._expandComputedExtent(i7);
  }
  _graphicUpdateTransformHandler(e16, t8) {
    const i7 = t8.graphic.geometry;
    this._graphicUpdateGeometryOrTransformHandler(e16, t8, () => null != t8.newValue && null != e16 && null != i7 && e16.graphics3DSymbol.updateTransform(e16, i7.spatialReference, t8.newValue, t8.action));
  }
  _graphicUpdateGeometryOrTransformHandler(e16, t8, i7) {
    if (null != t8.graphic.geometry) {
      if (null != e16) i7() || this._recreateGraphic(e16.graphic);
      else {
        const e17 = t8.graphic.symbol?.id;
        if (e17) {
          const t9 = this._symbols.get(e17);
          if (null != t9 && t9.loadStatus === l5.LOADING) return;
        }
        this._recreateGraphic(t8.graphic);
      }
    } else this._recreateGraphic(t8.graphic);
  }
  _graphicUpdateSymbolHandler(e16, t8) {
    const i7 = t8.graphic, r7 = null != e16 ? e16.graphics3DSymbol : null != t8.oldValue ? this._symbols.get(t8.oldValue.id) : null;
    if (null == r7 || null == t8.newValue) return void this._recreateGraphic(i7);
    const s8 = r7.symbol, a6 = this._getConvertedSymbol(t8.newValue);
    if (null != a6 && (a6.type !== s8.type || "web-style" === a6.type) || "web-style" === s8.type) return void this._recreateGraphic(i7);
    const n6 = this._graphicsBySymbol.get(s8.id);
    if (n6 && 1 !== n6.size) return void this._recreateGraphic(i7);
    const o8 = d4(s8, a6);
    if (null == o8) return void this._updateSymbolMapping(s8.id, a6);
    const l7 = {
      diff: o8,
      graphics3DGraphicPatches: [],
      symbolStatePatches: []
    };
    if (r7.prepareSymbolPatch(l7), !m3(l7.diff)) return void this._recreateGraphic(i7);
    const h7 = this._getRenderingInfo(i7);
    if (null == h7) return void this._recreateGraphic(i7);
    const d10 = r7.extentPadding;
    for (const p3 of l7.symbolStatePatches) p3();
    if (d10 !== r7.extentPadding && this._recomputeExtentPadding(), null != e16) for (const p3 of l7.graphics3DGraphicPatches) p3(e16, h7);
    this._updateSymbolMapping(s8.id, a6);
  }
  _graphicUpdateVisibleHandler(e16) {
    this._updateUserVisibility(e16) && (this._labeler?.setDirty(), this._deconflictor?.setDirty());
  }
  recreateGraphics(e16) {
    this._suspendSymbolCleanup = true, this.remove(e16), this.add(e16), this._suspendSymbolCleanup = false, this.effectiveUpdatePolicy === C3.SYNC && this._cleanupSymbols();
  }
  _recreateGraphic(e16) {
    this.recreateGraphics([e16]);
  }
  _beginGraphicUpdate(e16) {
    const t8 = this._graphicsUpdateId;
    return this._graphicsUpdateId++, this._graphicsWaitingForSymbol.set(e16.uid, t8), 1 === this._graphicsWaitingForSymbol.size && this.notifyChange("dataUpdating"), t8;
  }
  _endGraphicUpdate(e16) {
    e16 && (this._graphicsWaitingForSymbol.delete(e16.uid), 0 === this._graphicsWaitingForSymbol.size && (this._cleanupSymbols(), this.notifyChange("dataUpdating")));
  }
  _recomputeExtentPadding() {
    let e16 = 0;
    this._symbols.forEach((t8) => {
      null != t8 && (e16 = Math.max(e16, t8.extentPadding));
    }), this._set("extentPadding", e16);
  }
  _expandComputedExtent(e16) {
    const t8 = Te, i7 = e16.spatialReference;
    F2(e16, t8);
    const r7 = this._viewSpatialReference, s8 = Fe.tmpVec;
    if (G(i7, r7) || t2(t8[0], t8[1], 0, i7, s8, r7) && (t8[0] = s8[0], t8[1] = s8[1], t2(t8[3], t8[4], 0, i7, s8, r7), t8[3] = s8[0], t8[4] = s8[1]), !(isFinite(t8[0]) && isFinite(t8[3]) && isFinite(t8[1]) && isFinite(t8[4]))) return;
    const a6 = this.computedExtent;
    let n6 = null;
    const o8 = isFinite(t8[2]) && isFinite(t8[5]), l7 = o8 && (null == a6?.zmin || t8[2] < a6.zmin), h7 = o8 && (null == a6?.zmax || t8[5] > a6.zmax);
    if (a6) {
      (t8[0] < a6.xmin || t8[1] < a6.ymin || t8[3] > a6.xmax || t8[4] > a6.ymax || l7 || h7) && (n6 = this._propertiesPool.get("computedExtent"), n6.xmin = Math.min(t8[0], a6.xmin), n6.ymin = Math.min(t8[1], a6.ymin), n6.xmax = Math.max(t8[3], a6.xmax), n6.ymax = Math.max(t8[4], a6.ymax), n6.spatialReference = r7);
    } else n6 = this._propertiesPool.get("computedExtent"), n6.xmin = t8[0], n6.ymin = t8[1], n6.xmax = t8[3], n6.ymax = t8[4], n6.spatialReference = r7;
    n6 && (l7 && (n6.zmin = t8[2]), h7 && (n6.zmax = t8[5]), this._set("computedExtent", n6));
  }
  _abortElevationInfoChange() {
    this._elevationInfoChangeAbortController && (this._elevationInfoChangeAbortController.abort(), this._elevationInfoChangeAbortController = null);
  }
  elevationInfoChange() {
    return __async(this, null, function* () {
      this._abortElevationInfoChange();
      const e16 = new AbortController();
      this._elevationInfoChangeAbortController = e16;
      const t8 = d5(this.layer.elevationInfo, this.elevationFeatureExpressionEnabled);
      this.symbolCreationContext.featureExpressionInfoContext = yield a2(t8, this._viewSpatialReference, e16.signal, n.getLogger(this)), s2(e16.signal), this._elevationInfoChangeAbortController = null, this._labeler?.elevationInfoChange(), this.forEachGraphics3DSymbol((e17, t9, i7) => {
        e17.globalPropertyChanged("elevationInfo", t9) ? t9.forEach((e18) => {
          const t10 = e18.graphic, i8 = e18.labelLayers;
          for (const r7 of i8) {
            r7.graphics3DSymbolLayer.updateGraphicElevationContext(t10, r7);
          }
        }) : this._recreateSymbol(i7);
      }), this.updateStageLayerElevationProvider(), this._elevationAlignment?.elevationInfoChange();
    });
  }
  updateStageLayerElevationProvider() {
    this._stageLayerElevationProvider ? (this.layer.elevationInfo && "relative-to-scene" === this.layer.elevationInfo.mode || 0 === this._numberOfGraphicsProvidingElevation) && (this.owner.view.elevationProvider.unregister(this._stageLayerElevationProvider), this._stageLayerElevationProvider = r(this._stageLayerElevationProvider)) : (!this.layer.elevationInfo || this.layer.elevationInfo && "relative-to-scene" !== this.layer.elevationInfo.mode) && this._numberOfGraphicsProvidingElevation > 0 && (this._stageLayerElevationProvider = new y3({
      layer: this.layer,
      stageLayer: this.stageLayer,
      view: this.owner.view
    }), this.owner.view.elevationProvider.register("scene", this._stageLayerElevationProvider));
  }
  _clearSymbolsAndGraphics() {
    this.clear(), null != this._filterVisibility && this._filterVisibility.clear(), this._labeler?.reset(), this._deconflictor?.clear(), this._elevationAlignment?.clear(), this.stageLayer?.invalidateSpatialQueryAccelerator(), this._stageLayerElevationProvider && (this.owner.view.elevationProvider.unregister(this._stageLayerElevationProvider), this._stageLayerElevationProvider = r(this._stageLayerElevationProvider));
  }
  startCreateGraphics() {
    this._startCreateGraphics = true, this.recreateAllGraphics();
  }
  recreateAllGraphics() {
    this._recreateAllGraphics(false);
  }
  recreateAllGraphicsAndSymbols() {
    this._recreateAllGraphics(true);
  }
  _recreateAllGraphics(e16 = false) {
    if (!this._startCreateGraphics) return;
    const {
      loadedGraphics: t8,
      view: i7
    } = this.owner, r7 = i7.basemapTerrain.tilingScheme && t8?.length ? t8.toArray() : null;
    !e16 && r7 || this._clearSymbolsAndGraphics(), this.symbolCreationContext.screenSizePerspectiveEnabled = this.owner.view.screenSizePerspectiveEnabled && !!this.layer.screenSizePerspectiveEnabled, this.symbolCreationContext.slicePlaneEnabled = !!this.owner.slicePlaneEnabled, this._set("computedExtent", null), r7 && (e16 ? this.add(r7) : this.recreateGraphics(r7));
  }
  _recreateSymbol(e16) {
    const t8 = this._graphicsBySymbol.get(e16), i7 = [];
    t8 && (t8.forEach((e17, t9) => {
      const r8 = e17.usedMemory;
      this._conditionalRemove(e17, t9), this._spatialIndex?.remove(e17), i7.push(e17.graphic), e17.destroy(), this._removeGraphics3DGraphic(t9, r8), this._updateLayerVisibility(), this._featureStore.events.emit("changed");
    }), this._graphicsBySymbol.set(e16, /* @__PURE__ */ new Map()));
    const r7 = this._symbols.get(e16);
    u(r7), this._symbols.delete(e16), this._symbolMaterials = null, this.add(i7);
  }
  _recreateGraphicsForSymbol(e16) {
    const t8 = this._graphicsBySymbol.get(e16);
    if (t8) {
      const e17 = [];
      t8.forEach((t9) => e17.push(t9.graphic)), this.recreateGraphics(e17);
    }
  }
  _conditionalRemove(e16, t8) {
    this._graphicsDrapedUids.delete(t8), this._objectStates?.removeGraphic(e16), this._labeler?.removeGraphic(e16), this._deconflictor?.removeGraphic(e16), null != this._graphicStateTracking && this._graphicStateTracking.removeGraphic(e16);
  }
  add(e16) {
    e16 && 0 !== e16.length && (this.owner.view.basemapTerrain?.tilingScheme ? (this._updatePolicyForGraphics(e16) === C3.ASYNC ? this._addDelayed(e16) : this._addImmediate(e16), this.notifyChange("dataUpdating")) : n.getLogger(this).error("#add()", "Cannot add graphics before terrain surface has been initialized"));
  }
  _updatePolicyForGraphics(e16) {
    if (this.effectiveUpdatePolicy === C3.SYNC && ("mesh" === this.layer.geometryType || null == this.layer.geometryType)) {
      for (const t8 of e16) if (null != t8.geometry && "mesh" === t8.geometry.type && !t8.geometry.loaded) return C3.ASYNC;
    }
    return this.effectiveUpdatePolicy;
  }
  _addImmediate(e16) {
    this._geometryWarningLogged = false, this._symbolWarningLogged = false;
    for (const t8 of e16) this._addGraphic(t8, this._getRenderingInfo(t8, n.getLogger(this)), C3.SYNC);
    this._cleanupSymbols(), this._labeler?.setDirty(), this._deconflictor?.setDirty();
  }
  _addDelayed(e16) {
    for (const t8 of e16) {
      const e17 = t8.uid;
      let i7 = this._pendingUpdates.get(e17);
      i7 ? i7.add ? i7.state !== ke.NEW && i7.abortController?.abort() : this._pendingAdds++ : (i7 = this._pendingUpdatesPool.pushNew(), this._pendingAdds++, this._pendingUpdates.set(e17, i7)), i7.add = t8;
    }
    this.notifyChange("running"), this.notifyChange("updatingRemaining"), this.notifyChange("dataUpdating");
  }
  remove(e16) {
    this.effectiveUpdatePolicy === C3.ASYNC ? this._removeDelayed(e16) : this._removeImmediate(e16), this.notifyChange("dataUpdating");
  }
  _removeImmediate(e16) {
    for (const t8 of e16) this._removeGraphic(t8);
    this._cleanupSymbols(), this._labeler?.setDirty(), this._deconflictor?.setDirty();
  }
  _removeDelayed(e16) {
    for (const t8 of e16) {
      const e17 = t8.uid, i7 = this._pendingUpdates.get(e17);
      if (i7) i7.add && (i7.remove ? i7.add = null : this._pendingUpdates.delete(e17), i7.state === ke.LOADING && i7.abortController?.abort(), this._pendingAdds--);
      else {
        const i8 = this._pendingUpdatesPool.pushNew();
        i8.remove = t8, this._pendingUpdates.set(e17, i8), this._pendingRemoves++, this._applyPendingRemovesFirst = true;
      }
    }
    0 === this._pendingUpdates.size && this._finishPendingUpdates(), this.notifyChange("running"), this.notifyChange("updatingRemaining"), this.notifyChange("dataUpdating");
  }
  _finishPendingUpdates() {
    this._pendingUpdatesPool.clear(), this._cleanupSymbols(), (this._pendingAdds || this._pendingRemoves) && n.getLogger(this).warn("pendingAdds/Removes in inconsistent state!"), this._pendingAdds = 0, this._pendingRemoves = 0, this._applyPendingRemovesFirst = false;
  }
  _applyPendingUpdates(e16) {
    if (this._geometryWarningLogged = false, this._symbolWarningLogged = false, 0 === this._pendingUpdates.size && this._spatialIndex?.updating) return this._spatialIndex.update(), void e16.madeProgress();
    if (this._applyPendingRemovesFirst) {
      this._applyPendingRemovesFirst = false;
      for (const [t8, i7] of this._pendingUpdates) {
        if (e16.done) {
          this._applyPendingRemovesFirst = true;
          break;
        }
        if (i7.remove && !i7.add && (this._pendingRemoves--, e16.madeProgress(), this._removeGraphic(i7.remove), i7.remove = null, this._pendingUpdates.delete(t8), 0 === this._pendingRemoves)) break;
      }
    }
    for (const [t8, i7] of this._pendingUpdates) {
      if (e16.done) break;
      i7.add && i7.state === ke.NEW && this._processPendingUpdateNew(i7);
      let r7 = this.effectiveUpdatePolicy;
      if (!i7.remove || i7.add && i7.state !== ke.READY || (this._pendingRemoves--, e16.madeProgress(), this._removeGraphic(i7.remove), i7.remove = null, r7 = C3.SYNC), i7.add) switch (i7.state) {
        case ke.READY:
          this._addGraphic(i7.add, i7.renderingInfo, r7), i7.add = null, this._pendingAdds--, e16.madeProgress();
          break;
        case ke.REJECTED:
          i7.add = null, this._pendingAdds--;
        case ke.LOADING:
      }
      null == i7.remove && null == i7.add && this._pendingUpdates.delete(t8);
    }
    0 === this._pendingUpdates.size && (this._finishPendingUpdates(), this.notifyChange("running"), this.notifyChange("dataUpdating"));
  }
  _processPendingUpdateNew(e16) {
    if (!e16.add) return void (e16.state = ke.READY);
    const t8 = e16.add.geometry;
    null == t8 || "mesh" !== t8.type || t8.loaded ? this._processPendingUpdateNewRenderingInfo(e16) : this._processPendingUpdateNewMesh(e16, t8);
  }
  _processPendingUpdateNewMesh(e16, t8) {
    return __async(this, null, function* () {
      e16.state = ke.LOADING, e16.abortController = new AbortController();
      const i7 = e16.abortController.signal;
      try {
        yield t8.load({
          signal: i7
        });
      } catch (r7) {
        return this._processPendingUpdateNewError(e16, r7);
      }
      e16.abortController = null, this._processPendingUpdateNewRenderingInfo(e16);
    });
  }
  _processPendingUpdateNewError(e16, t8) {
    e16.abortController = null, b(t8) ? e16.state = ke.NEW : e16.state = ke.REJECTED;
  }
  _processPendingUpdateNewRenderingInfo(e16) {
    return __async(this, null, function* () {
      if (null == this.layer.renderer || "dictionary" !== this.layer.renderer.type) return e16.renderingInfo = this._getRenderingInfo(e16.add, n.getLogger(this)), void (e16.state = ke.READY);
      e16.state = ke.LOADING, e16.abortController = new AbortController();
      let t8 = null;
      try {
        t8 = yield this._getRenderingInfoAsync(e16.add, {
          signal: e16.abortController.signal
        });
      } catch (r7) {
        return e16.abortController = null, void (b(r7) ? e16.state = ke.NEW : e16.state = ke.REJECTED);
      }
      null == t8?.symbol ? (this._symbolWarningLogged || (this._symbolWarningLogged = true, n.getLogger(this).warn(`Graphic in layer ${this.layer.id} has no symbol and will not render`)), e16.renderingInfo = null) : e16.renderingInfo = t8, e16.state = ke.READY;
    });
  }
  _addGraphic(e16, t8, i7) {
    if (this._graphicsWithoutSymbol.set(e16.uid, e16), null == t8?.symbol || !y2(e16)) return;
    if (null != this.stage.renderView.objectAndLayerIdRenderHelper && this.setUidToIdOnAdd) {
      const t9 = S3(this.owner.view.map, this.layer.uid);
      this.stage.renderView.objectAndLayerIdRenderHelper.setUidToObjectAndLayerId(e16.objectId, e16.uid, this.layer.id, this.layer.uid, !!this.layer.popupEnabled && !t9 && u4(this.layer, this.owner.view.popup?.defaultPopupTemplateEnabled));
    }
    const r7 = t8.symbol, s8 = this.getOrCreateGraphics3DSymbol(r7, t8.renderer);
    if (null == s8) return;
    this._expandComputedExtent(e16.geometry);
    const a6 = this._beginGraphicUpdate(e16), n6 = new r4(e16, t8, this.layer);
    let o8 = false;
    const l7 = (e17) => {
      e17 === s8.symbol.id && (o8 = true);
    };
    this._whenSymbolRemoved.push(l7);
    const h7 = () => {
      if (--this._loadingSymbols, this.destroyed) return;
      this._whenSymbolRemoved.removeUnordered(l7);
      if (this._graphicsWaitingForSymbol.get(e16.uid) !== a6 || o8 || s8.destroyed || this.graphicSymbolSupported && e16.symbol && e16.symbol.id !== s8.symbol.id) --s8.referenced, this._cleanupSymbols();
      else {
        const t9 = this._createGraphics3DGraphic(s8, n6);
        this._spatialIndex && null != t9 && this._spatialIndex.add(t9), --s8.referenced, this._endGraphicUpdate(e16);
      }
      this._featureStore.events.emit("changed"), this._labeler?.setDirty();
    }, d10 = (t9) => {
      --this._loadingSymbols, this.destroyed || (this._whenSymbolRemoved.removeUnordered(l7), o8 || (b(t9) ? this.add([e16]) : s8.destroyed || this._endGraphicUpdate(e16)));
    };
    ++this._loadingSymbols, i7 === C3.ASYNC ? s8.load(() => this._dataUpdateQueue.push(h7, null).catch(d), (e17) => this._dataUpdateQueue.push(() => d10(e17), null).catch(d)) : s8.load(h7, d10);
  }
  _removeGraphic(e16) {
    const t8 = e16.uid, i7 = this.graphics3DGraphics.get(t8);
    if (i7) {
      i7.graphics3DSymbol.onRemoveGraphic(i7);
      const e17 = i7.usedMemory, r7 = i7.isElevationSource;
      this._conditionalRemove(i7, t8), this._spatialIndex?.remove(i7);
      const s8 = i7.graphics3DSymbol.symbol.id;
      this._graphicsBySymbol.get(s8)?.delete(t8), this._graphicsWithoutSymbol.delete(t8), this._removeGraphics3DGraphic(t8, e17, r7), i7.destroy(), this._featureStore.events.emit("changed");
    } else this._graphicsWithoutSymbol.delete(t8), this._graphicsWaitingForSymbol.delete(t8), 0 === this._graphicsWaitingForSymbol.size && (this._cleanupSymbols(), this.notifyChange("dataUpdating"));
  }
  _hasLabelingContext(e16) {
    if (e16 instanceof b2 || e16 instanceof m2) {
      const t8 = this.symbolCreationContext.layer;
      return !!t8.labelingInfo && t8.labelingInfo.some((t9) => t9.symbol === e16);
    }
    return false;
  }
  _hasValidSymbolCreationContext(e16) {
    return !(e16 instanceof b2 && !this._hasLabelingContext(e16)) || (n.getLogger(this).error("LabelSymbol3D is only valid as part of a LabelClass. Using LabelSymbol3D as a renderer symbol is not supported."), false);
  }
  _getRenderingInfo(e16, t8) {
    const i7 = e16.geometry;
    if (null == i7) return t8 && !this._geometryWarningLogged && (this._geometryWarningLogged = true, t8.warn(`Graphic in layer ${this.layer.id} has no geometry and will not render`)), null;
    if (!J(i7.spatialReference, this._viewSpatialReference)) return t8 && !this._geometryWarningLogged && (this._geometryWarningLogged = true, t8.warn(`Graphic in layer ${this.layer.id} has incompatible spatial reference and will not render`)), null;
    if (!this.graphicSymbolSupported && null != e16.symbol) return t8 && !this._symbolWarningLogged && (this._symbolWarningLogged = true, t8.warn(`Graphic in layer ${this.layer.id} is not allowed to have a symbol, use a renderer instead`)), null;
    const r7 = this.rendererHasGeometryOperations ? c(e16, this.layer) : e16;
    let s8;
    if (this.owner.getRenderingInfo && (this.getRenderingInfoWithoutRenderer || null != this.currentRenderer)) s8 = this.owner.getRenderingInfo(r7, this.currentRenderer, this._arcadeOnDemand);
    else {
      s8 = {
        symbol: r7.symbol || d3(r7.geometry)
      };
    }
    return null == s8?.symbol ? (t8 && !this._symbolWarningLogged && (this._symbolWarningLogged = true, t8.warn(`Graphic in layer ${this.layer.id} has no symbol and will not render`)), null) : s8;
  }
  _getRenderingInfoAsync(e16, t8) {
    if (null == e16.geometry) return this._geometryWarningLogged || (this._geometryWarningLogged = true, n.getLogger(this).warn(`Graphic in layer ${this.layer.id} has no geometry and will not render`)), null;
    if (!this.graphicSymbolSupported && null != e16.symbol) return this._symbolWarningLogged || (this._symbolWarningLogged = true, n.getLogger(this).warn(`Graphic in layer ${this.layer.id} is not allowed to have a symbol, use a renderer instead`)), null;
    const r7 = this.rendererHasGeometryOperations ? c(e16, this.layer) : e16;
    return this.owner.getRenderingInfoAsync(r7, this.currentRenderer, this._arcadeOnDemand, t8);
  }
  _createGraphics3DSymbol(e16, t8) {
    if (!this._hasValidSymbolCreationContext(e16)) return null;
    const i7 = this._getConvertedSymbol(e16);
    if (!i7) return null;
    let r7;
    if (null != t8 && "backgroundFillSymbol" in t8 && t8.backgroundFillSymbol) {
      const e17 = g2(t8.backgroundFillSymbol, {
        ignoreDrivers: true
      });
      null != e17.symbol && (r7 = e17.symbol.symbolLayers);
    }
    const s8 = t6(i7, this.symbolCreationContext, r7);
    return s8.load(() => {
      const e17 = s8.extentPadding;
      e17 > this.extentPadding && this._set("extentPadding", e17), this.notifyChange("averageSymbolComplexity");
    }, () => {
    }), s8;
  }
  getOrCreateGraphics3DSymbol(e16, t8) {
    let i7 = this._symbols.get(e16.id);
    if (void 0 === i7) {
      const r7 = this._unusedSymbolsCache.pop(e16.id);
      i7 = null != r7 ? r7 : e16 instanceof h2 ? new i5(e16, (e17) => this._dataUpdateQueue.push(e17, null), (e17) => this._createGraphics3DSymbol(e17, t8)) : this._createGraphics3DSymbol(e16, t8), this._symbols.set(e16.id, i7), this._symbolMaterials = null;
    }
    return null != i7 && ++i7.referenced, i7;
  }
  trackGraphicState(e16) {
    return null == this._graphicStateTracking && (this._graphicStateTracking = new e13(this)), this._graphicStateTracking.add(e16);
  }
  _addGraphics3DGraphic(e16) {
    this._usedMemory += e16.usedMemory, this.graphics3DGraphics.set(e16.graphic.uid, e16), this._numberOfGraphics++, e16.isElevationSource && (this._numberOfGraphicsProvidingElevation++, this.updateStageLayerElevationProvider()), this._updateLayerVisibility();
  }
  _removeGraphics3DGraphic(e16, t8, i7 = false) {
    this._usedMemory -= t8, this.graphics3DGraphics.delete(e16), this._numberOfGraphics--, i7 && (this._numberOfGraphicsProvidingElevation--, this.updateStageLayerElevationProvider()), this._updateLayerVisibility();
  }
  _createGraphics3DGraphic(e16, t8) {
    const i7 = t8.graphic;
    if (this._graphicsWithoutSymbol.delete(i7.uid), !this._symbols.has(e16.symbol.id)) return this.add([i7]), null;
    if (this.graphics3DGraphics.has(i7.uid)) return null;
    const r7 = e16.createGraphics3DGraphic(t8);
    if (null == r7) return null;
    this._addGraphics3DGraphic(r7);
    const s8 = e16.symbol.id;
    this._graphicsBySymbol.has(s8) || this._graphicsBySymbol.set(s8, /* @__PURE__ */ new Map()), this._graphicsBySymbol.get(s8).set(i7.uid, r7);
    if (r7.isDraped && this._graphicsDrapedUids.add(i7.uid), r7.centroid = null, null != i7.geometry && "point" !== i7.geometry.type && (r7.centroid = b3(i7.geometry, this._viewSpatialReference)), this._updateUserVisibility(r7), null != this._scaleVisibility && this._scaleVisibility.updateVisibility(r7), null != this._filterVisibility) {
      const {
        defaultVisibility: e17
      } = this._filterVisibility;
      r7.setVisibilityFlag(A3.GRAPHIC, L4.FILTER, e17), e17 || this._filterVisibility.reapply();
    }
    this._deconflictor?.addGraphic(r7), this._labeler?.addGraphic(r7), this._objectStates?.addGraphic(r7), r7.initialize(this.stageLayer, this.owner), null != this._graphicStateTracking && this._graphicStateTracking.addGraphic(r7);
    const a6 = this._whenGraphics3DGraphicRequests[i7.uid];
    return a6 && (delete this._whenGraphics3DGraphicRequests[i7.uid], a6.resolve(r7)), this._symbolMaterials = null, r7;
  }
  _abortRendererChange() {
    this._rendererChangeAbortController && (this._rendererChangeAbortController.abort(), this._rendererChangeAbortController = null);
  }
  rendererChange(e16) {
    return __async(this, null, function* () {
      if (this._abortRendererChange(), e16 !== this.currentRenderer) if (this._validateRenderer(e16), null == e16 && this._currentRendererChange(null, false), t5(e16)) {
        if (e16?.arcadeRequired) {
          const t8 = new AbortController();
          this._rendererChangeAbortController = t8;
          const {
            arcadeUtils: i7
          } = yield this._ensureArcade();
          s2(t8);
          const r7 = i7.hasGeometryOperations(e16);
          r7 && (yield i7.enableGeometryOperations(), s2(t8)), this.effectiveUpdatePolicy === C3.ASYNC ? yield this._updateQueue.push(() => this._currentRendererChange(e16, r7), t8.signal) : this._currentRendererChange(e16, r7), this._rendererChangeAbortController = null;
        } else if (this.effectiveUpdatePolicy === C3.ASYNC) {
          const t8 = new AbortController();
          this._rendererChangeAbortController = t8, yield this._updateQueue.push(() => this._currentRendererChange(e16, false), t8.signal), this._rendererChangeAbortController = null;
        } else this._currentRendererChange(e16, false);
      } else this._currentRendererChange(e16, false);
    });
  }
  _ensureArcade() {
    return __async(this, null, function* () {
      return null == this._arcadeOnDemand ? (this._arcadeOnDemand = yield i3(), this._arcadeOnDemand) : this._arcadeOnDemand;
    });
  }
  _currentRendererChange(e16, t8) {
    this.currentRenderer = e16, this.rendererHasGeometryOperations = t8, this.symbolCreationContext.arcade = this._arcadeOnDemand;
    const i7 = this.symbolCreationContext.renderer;
    if (e16 === i7) return;
    if (this._symbolConversionCache.clear(), this._unusedSymbolsCache.clear(), null == e16) return this.symbolCreationContext.renderer = null, void this.recreateAllGraphicsAndSymbols();
    const r7 = d4(i7, e16);
    this._updateUnchangedSymbolMappings(r7, e16, i7), this.symbolCreationContext.renderer = e16, null != r7 && ("complete" === r7.type ? this.recreateAllGraphicsAndSymbols() : "partial" === r7.type && (this._applyRendererDiff(r7, e16, i7) ? this._labeler?.reset() : this.recreateAllGraphicsAndSymbols()), this.notifyChange("averageSymbolComplexity"));
  }
  _diffHasSymbolChange(e16) {
    for (const t8 in e16.diff) switch (t8) {
      case "visualVariables":
      case "defaultSymbol":
      case "uniqueValueInfos":
        break;
      case "uniqueValueGroups":
      case "authoringInfo":
      case "fieldDelimiter":
        delete e16.diff[t8];
        break;
      default:
        return true;
    }
    return false;
  }
  _applySymbolSetDiff(e16, t8, i7) {
    e16 = e16 || [], t8 = t8 || [];
    const r7 = [];
    for (const s8 of t8) {
      const t9 = this._graphicsBySymbol.get(s8.id);
      t9 && t9.forEach((a6, n6) => {
        const o8 = a6.graphic, l7 = this.layer instanceof f ? this.layer : null, h7 = this._arcadeOnDemand;
        if (s8 === i7.defaultSymbol && i7.getSymbol(c(o8, l7), {
          arcade: h7
        }) === i7.defaultSymbol) return;
        const d10 = a6.usedMemory;
        e16.length || i7.defaultSymbol ? r7.push(o8) : this._graphicsWithoutSymbol.set(n6, o8);
        const p3 = this.graphics3DGraphics.get(n6);
        this._conditionalRemove(p3, n6), a6.destroy(), t9.delete(n6), this._removeGraphics3DGraphic(n6, d10), this._updateLayerVisibility();
      }), this._whenSymbolRemoved.forAll((e17) => e17(s8.id));
    }
    (e16.length || r7.length) && (this._graphicsWithoutSymbol.forEach((e17) => r7.push(e17)), this._graphicsWithoutSymbol.clear(), this.add(r7)), this._cleanupSymbols(), this._labeler?.setDirty(), this._deconflictor?.setDirty();
  }
  _applyUniqueValueRendererDiff(e16, t8, i7) {
    const r7 = e16.diff.defaultSymbol, a6 = e16.diff.uniqueValueInfos;
    if (r7 || a6) {
      const n6 = a6 ? a6.added.map((e17) => e17.symbol).filter(O) : [], o8 = a6 ? a6.removed.map((e17) => e17.symbol).filter(O) : [];
      if (a6) for (let e17 = 0; e17 < a6.changed.length; e17++) n6.push(a6.changed[e17].newValue.symbol), o8.push(a6.changed[e17].oldValue.symbol);
      return r7 ? (i7.defaultSymbol && o8.push(i7.defaultSymbol), t8.defaultSymbol && n6.push(t8.defaultSymbol)) : i7.defaultSymbol && n6.length && o8.push(t8.defaultSymbol), this._applySymbolSetDiff(n6, o8, t8), delete e16.diff.defaultSymbol, delete e16.diff.uniqueValueInfos, true;
    }
    return false;
  }
  _calculateUnchangedSymbolMapping(e16, t8, i7) {
    if ("unique-value" !== t8?.type || "unique-value" !== i7?.type || null != e16 && "partial" !== e16.type) return [];
    const r7 = (e17) => null != e17 ? e17.id : null, s8 = e16 && e16.diff, a6 = s8?.defaultSymbol, n6 = s8 && s8.uniqueValueInfos;
    let o8;
    if (n6) o8 = n6.unchanged.map((e17) => ({
      oldId: r7(e17.oldValue.symbol),
      newId: r7(e17.newValue.symbol)
    }));
    else {
      o8 = [];
      for (const e17 of i7.uniqueValueInfos ?? []) {
        const i8 = r7(e17.symbol), s9 = t8.uniqueValueInfos?.find((t9) => t9.value === e17.value);
        s9 && i8 !== r7(s9.symbol) && o8.push({
          oldId: i8,
          newId: r7(s9.symbol)
        });
      }
    }
    return !a6 && i7.defaultSymbol && o8.push({
      oldId: r7(i7.defaultSymbol),
      newId: r7(t8.defaultSymbol)
    }), o8;
  }
  _updateSymbolMapping(e16, t8) {
    const i7 = null != t8 && t8 ? "string" == typeof t8 ? t8 : t8.id : null;
    if (null == e16 || e16 === i7) return;
    const r7 = this._graphicsBySymbol.get(e16);
    this._graphicsBySymbol.delete(e16), void 0 !== r7 && this._graphicsBySymbol.set(i7, r7);
    const s8 = this._symbols.get(e16);
    if (void 0 !== s8 && (this._symbols.delete(e16), this._symbols.set(i7, s8), this._symbolMaterials = null, null != s8)) {
      const e17 = "string" == typeof t8 ? null : t8;
      null != e17 ? s8.symbol = e17 : s8.symbol.id = i7;
    }
  }
  _updateUnchangedSymbolMappings(e16, t8, i7) {
    const r7 = this._calculateUnchangedSymbolMapping(e16, t8, i7);
    for (const {
      oldId: s8,
      newId: a6
    } of r7) this._updateSymbolMapping(s8, a6);
  }
  _applyRendererDiff(e16, i7, r7) {
    if (this._diffHasSymbolChange(e16)) return false;
    if (i7 instanceof A2 && r7 instanceof A2 && this._applyUniqueValueRendererDiff(e16, i7, r7) && 0 === Object.keys(e16.diff).length) return true;
    for (const [t8] of this._graphicsBySymbol) {
      const r8 = this._symbols.get(t8);
      if (null != r8) switch (r8.applyRendererDiff(e16, i7)) {
        case e9.RecreateSymbol:
          this._recreateSymbol(t8);
          break;
        case e9.RecreateGraphics:
          this._recreateGraphicsForSymbol(t8);
        case e9.FastUpdate:
      }
    }
    return true;
  }
  opacityChange() {
    this.forEachGraphics3DSymbol((e16, t8) => e16.globalPropertyChanged("opacity", t8)), this._updateStageLayerVisibility();
  }
  _slicePlaneEnabledChange(e16) {
    e16 !== this.symbolCreationContext.slicePlaneEnabled && (this.symbolCreationContext.slicePlaneEnabled = e16, this.stageLayer.sliceable = e16, this.forEachGraphics3DSymbol((e17, t8) => e17.globalPropertyChanged("slicePlaneEnabled", t8)), this._deconflictor?.slicePlaneEnabledChange(), this._labeler?.slicePlaneEnabledChange());
  }
  _physicalBasedRenderingChange(e16) {
    this.symbolCreationContext.physicalBasedRenderingEnabled = e16, this.forEachGraphics3DSymbol((e17, t8, i7) => {
      e17.globalPropertyChanged("physicalBasedRenderingEnabled", t8) || this._recreateSymbol(i7);
    });
  }
  _skipHighSymbolLoDsChange(e16) {
    this.symbolCreationContext.skipHighSymbolLods = e16, this.forEachGraphics3DSymbol((e17, t8, i7) => {
      e17.globalPropertyChanged("skipHighSymbolLods", t8) || this._recreateSymbol(i7);
    });
  }
  _pixelRatioChange() {
    this.forEachGraphics3DSymbol((e16, t8, i7) => {
      e16.globalPropertyChanged("pixelRatio", t8) || this._recreateSymbol(i7);
    });
  }
  _signalUpdatingDuringAsyncLoadedGraphicsChange() {
    this._updatingPendingLoadedGraphicsChange && this._updatingPendingLoadedGraphicsChange.remove(), this._updatingPendingLoadedGraphicsChange = v(() => {
      this._updatingPendingLoadedGraphicsChange = null;
    });
  }
  setClippingExtent(e16, t8) {
    const i7 = this.symbolCreationContext.clippingExtent, r7 = u3();
    return u5(e16, r7, t8) ? this.symbolCreationContext.clippingExtent = Z(i(), r7) : this.symbolCreationContext.clippingExtent = null, !B(this.symbolCreationContext.clippingExtent, i7);
  }
  modifyGraphics3DGraphicVisibilities(e16) {
    if (this.destroyed) return;
    let t8 = false;
    this.graphics3DGraphics.forEach((i7) => {
      e16(i7) && (t8 = true);
    }), t8 && (this._labeler?.setDirty(), this._deconflictor?.setDirty());
  }
  forEachGraphics3DSymbol(e16) {
    for (const [t8, i7] of this._symbols) {
      if (null == i7) return;
      e16(i7, this._graphicsBySymbol.get(t8) || qe, t8);
    }
  }
  updateAllGraphicsVisibility() {
    null != this._filterVisibility && this._filterVisibility.reapply(), this.modifyGraphics3DGraphicVisibilities((e16) => {
      const t8 = this._updateUserVisibility(e16), i7 = null != this._scaleVisibility && this._scaleVisibility.updateVisibility(e16);
      return t8 || i7;
    });
  }
  _hideAllGraphics() {
    this.modifyGraphics3DGraphicVisibilities((e16) => e16.setVisibilityFlag(A3.GRAPHIC, L4.USER, false));
  }
  _validateRenderer(e16) {
    const t8 = () => `'${this.layer.title ? `${this.layer.title}, ` : ""}id:${this.layer.id}'`, r7 = s4(e16, {
      geometryType: this.layer?.geometryType,
      logWarning: (e17) => n.getLogger(this).warn(`Symbology conversion for layer ${t8()}: ${e17}`)
    });
    if (r7) {
      const e17 = `Renderer for layer ${t8} is not supported in a SceneView`;
      n.getLogger(this).warn(e17, r7.message);
    }
  }
  _cleanupSymbols() {
    if (this._graphicsWaitingForSymbol.size > 0 || this._suspendSymbolCleanup) return;
    let e16 = false;
    this._symbols.forEach((t8, i7) => {
      if (null == t8 || t8.referenced > 0) return;
      const r7 = this._graphicsBySymbol.get(i7);
      r7 && 0 !== r7.size || (this._graphicsBySymbol.delete(i7), this._symbols.delete(i7), this._symbolMaterials = null, this._unusedSymbolsCache.put(i7, t8, r5(t8), e6), e16 = true);
    }), e16 && (this._recomputeExtentPadding(), this.notifyChange("averageSymbolComplexity"));
  }
  get test() {
  }
  get performanceInfo() {
    return new s6(this.graphics3DGraphics.size, this._graphicsWithoutSymbol.size, this._pendingUpdates.size);
  }
};
var ke;
ze.tmpVec = n3(), e2([y({
  readOnly: true
})], ze.prototype, "computedExtent", void 0), e2([y()], ze.prototype, "currentRenderer", void 0), e2([y()], ze.prototype, "rendererHasGeometryOperations", void 0), e2([y()], ze.prototype, "_frameTaskHandle", void 0), e2([y()], ze.prototype, "_dataUpdateQueue", void 0), e2([y()], ze.prototype, "_updateQueue", void 0), e2([y({
  readOnly: true
})], ze.prototype, "_viewSpatialReference", null), e2([y()], ze.prototype, "_rendererChangeAbortController", void 0), e2([y()], ze.prototype, "_elevationInfoChangeAbortController", void 0), e2([y()], ze.prototype, "_initializeAbortController", void 0), e2([y()], ze.prototype, "_elevationAlignment", void 0), e2([y()], ze.prototype, "_scaleVisibility", void 0), e2([y()], ze.prototype, "_filterVisibility", void 0), e2([y()], ze.prototype, "_initializePromise", void 0), e2([y()], ze.prototype, "_spatialIndex", void 0), e2([y({
  readOnly: true
})], ze.prototype, "extentPadding", void 0), e2([y()], ze.prototype, "_updatingPendingLoadedGraphicsChange", void 0), e2([y()], ze.prototype, "_featureStore", void 0), e2([y()], ze.prototype, "_objectStates", void 0), e2([y()], ze.prototype, "_loadingSymbols", void 0), e2([y()], ze.prototype, "preferredUpdatePolicy", void 0), e2([y()], ze.prototype, "_forcedUpdatePolicy", void 0), e2([y({
  readOnly: true
})], ze.prototype, "effectiveUpdatePolicy", null), e2([y({
  constructOnly: true
})], ze.prototype, "elevationFeatureExpressionEnabled", void 0), e2([y({
  constructOnly: true
})], ze.prototype, "owner", void 0), e2([y({
  constructOnly: true
})], ze.prototype, "layer", void 0), e2([y({
  constructOnly: true
})], ze.prototype, "graphicSymbolSupported", void 0), e2([y({
  constructOnly: true
})], ze.prototype, "getRenderingInfoWithoutRenderer", void 0), e2([y({
  constructOnly: true
})], ze.prototype, "componentFactories", void 0), e2([y({
  constructOnly: true
})], ze.prototype, "setUidToIdOnAdd", void 0), e2([y()], ze.prototype, "featureStore", null), e2([y()], ze.prototype, "initializePromise", null), e2([y()], ze.prototype, "scaleVisibility", null), e2([y()], ze.prototype, "elevationAlignment", null), e2([y()], ze.prototype, "objectStates", null), e2([y()], ze.prototype, "filterVisibility", null), e2([y({
  readOnly: true
})], ze.prototype, "updating", null), e2([y({
  readOnly: true
})], ze.prototype, "dataUpdating", null), e2([y({
  readOnly: true
})], ze.prototype, "running", null), e2([y({
  readOnly: true
})], ze.prototype, "suspendedOrOutsideOfView", null), e2([y({
  readOnly: true,
  dependsOn: []
})], ze.prototype, "updatingRemaining", null), e2([y({
  readOnly: true
})], ze.prototype, "displayFeatureLimit", null), e2([y({
  readOnly: true,
  dependsOn: []
})], ze.prototype, "averageSymbolComplexity", null), e2([y({
  constructOnly: true
})], ze.prototype, "hasZ", void 0), e2([y({
  constructOnly: true
})], ze.prototype, "hasM", void 0), e2([y()], ze.prototype, "_objectIdField", null), ze = Fe = e2([a("esri.views.3d.layers.graphics.Graphics3DCore")], ze), function(e16) {
  e16[e16.NEW = 0] = "NEW", e16[e16.LOADING = 1] = "LOADING", e16[e16.READY = 2] = "READY", e16[e16.REJECTED = 3] = "REJECTED";
}(ke || (ke = {}));
var We = class {
  constructor() {
    this.add = null, this.renderingInfo = null, this.state = ke.NEW, this.abortController = null, this.remove = null;
  }
  clear() {
    this.add = null, this.renderingInfo = null, this.state = ke.NEW, this.abortController = null, this.remove = null;
  }
};
var He = 10;
var Ne = n3();
var Be = n3();
var qe = /* @__PURE__ */ new Map();

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DScaleVisibility.js
var u8 = class extends S {
  constructor(e16) {
    super(e16), this._scaleRangeActive = false, this._layerScaleRangeVisibilityQuery = false, this._extent = null, this._updatingHandles = new h4(), this.graphicsCoreOwner = null, this.layer = null, this.queryGraphicUIDsInExtent = null, this.graphicsCore = null, this.basemapTerrain = null, this.layerScaleEnabled = true, this.suspended = false, this._dirty = true;
  }
  initialize() {
    this.updateScaleRangeActive();
    const e16 = this.graphicsCoreOwner.view.resourceController.scheduler;
    this.addHandles(e16.registerTask(I.SCALE_VISIBILITY, this)), this._updatingHandles.add(() => this.layer.effectiveScaleRange, () => this.layerMinMaxScaleChangeHandler());
  }
  destroy() {
    this._updatingHandles.destroy(), this.removeHandles(), this._dirty = false, this._extent = null, this.graphicsCoreOwner = null, this.layer = null, this.queryGraphicUIDsInExtent = null, this.graphicsCore = null, this.basemapTerrain = null;
  }
  get updating() {
    return this._dirty || this._updatingHandles.updating;
  }
  _setDirty() {
    this._dirty = true;
  }
  setExtent(e16) {
    const i7 = this.graphicsCoreOwner.view.spatialReference, t8 = this.graphicsCoreOwner.view.basemapTerrain.spatialReference;
    if (i7 === t8) this._extent = e16 ?? null;
    else {
      const r7 = u3();
      i4(e16, i7, r7, t8) ? this._extent = r7 : this._extent = null;
    }
    this._setDirty();
  }
  scaleRangeActive() {
    return this._scaleRangeActive;
  }
  updateScaleRangeActive() {
    const e16 = this.layer, i7 = e16.effectiveScaleRange;
    let t8 = this.layerScaleEnabled && null != i7 && g3(i7.minScale, i7.maxScale);
    e16.labelingInfo && !t8 && (t8 = e16.labelingInfo.some((e17) => e17 && g3(e17.minScale ?? 0, e17.maxScale ?? 0)));
    const r7 = this._scaleRangeActive !== t8;
    return this._scaleRangeActive = t8, t8 && !this.hasHandles(y4) && this.basemapTerrain ? (this.addHandles(this.basemapTerrain.on("scale-change", (e17) => this._scaleUpdateHandler(e17)), y4), this.layerScaleEnabled && this.addHandles(this.basemapTerrain.on("tiles-visibility-changed", () => this._setDirty()), y4)) : !t8 && this.hasHandles(y4) && this.removeHandles(y4), r7;
  }
  get running() {
    return !(!this.graphicsCoreOwner.view.basemapTerrain || !this.updating);
  }
  runTask(e16) {
    const i7 = this.graphicsCoreOwner.view.basemapTerrain;
    if (this._extent && i7 && i7.ready && this._scaleRangeActive && this.layerScaleEnabled) {
      if (this._layerScaleRangeVisibilityQuery) return o4;
      {
        this._layerScaleRangeVisibilityQuery = true;
        const {
          minScale: e17,
          maxScale: t8
        } = this.layer.effectiveScaleRange;
        i7.queryVisibleScaleRange(this._extent, e17, t8, (e18) => this._finishUpdate(e18));
      }
    } else this._finishUpdate(true);
    e16.madeProgress();
  }
  _finishUpdate(e16) {
    this._layerScaleRangeVisibilityQuery = false, this._set("suspended", !e16), this._dirty = false;
  }
  _visibleAtLayerScale(e16) {
    const i7 = this.layer.effectiveScaleRange;
    return !this.layerScaleEnabled || t4(e16, i7.minScale || 0, i7.maxScale || 0);
  }
  _visibleAtLabelScale(e16, i7) {
    return t4(e16, i7.minScale || 0, i7.maxScale || 0);
  }
  _graphicScale(e16) {
    let i7;
    if (null != e16.centroid ? i7 = e16.centroid : null != e16.graphic.geometry && "point" === e16.graphic.geometry.type && (i7 = e16.graphic.geometry), i7) {
      return this.graphicsCoreOwner.view.basemapTerrain ? this.graphicsCoreOwner.view.basemapTerrain.getScale(i7) : 1;
    }
    return null;
  }
  _graphicVisible(e16) {
    if (!this.layerScaleEnabled) return true;
    const i7 = this._graphicScale(e16);
    return this._visibleAtLayerScale(i7);
  }
  updateVisibility(e16) {
    if (this._scaleRangeActive) {
      const i7 = this._graphicVisible(e16);
      return e16.setVisibilityFlag(A3.GRAPHIC, L4.SCALE_RANGE, i7);
    }
    return false;
  }
  updateGraphicLabelScaleVisibility(e16) {
    if (!this._scaleRangeActive) return false;
    if (!e16.labelLayers || 0 === e16.labelLayers.length) return false;
    const i7 = this._graphicScale(e16), t8 = this._updateLabelScaleVisibility(e16, i7);
    return t8 && (this.graphicsCore.deconflictor?.setDirty(), this.graphicsCore.labeler?.setDirty()), t8;
  }
  _updateLabelScaleVisibility(e16, i7) {
    if (!e16.labelLayers || 0 === e16.labelLayers.length) return false;
    const t8 = e16.labelLayers[0]._labelClass;
    if (null != t8?.minScale && null != t8.maxScale) {
      const r7 = this._visibleAtLabelScale(i7, t8);
      if (e16.setVisibilityFlag(A3.LABEL, L4.SCALE_RANGE, r7)) return true;
    }
    return false;
  }
  _scaleUpdateHandler(e16) {
    if (this._setDirty(), !this.graphicsCore.visible) return;
    const i7 = e16.extent, r7 = e16.scale, s8 = this._visibleAtLayerScale(r7);
    let a6 = false;
    const n6 = this.graphicsCoreOwner.view.spatialReference, h7 = e16.spatialReference;
    if (null == h7) return void n.getLogger(this).error("scaleUpdate: Internal error, no SpatialReference given for tiles");
    const p3 = !h7.equals(n6);
    if (p3) {
      if (!i4(i7, h7, b5, n6)) return void n.getLogger(this).error("scaleUpdate: Internal error, cannot project AABR from " + h7 + " to wkid " + n6);
    }
    const d10 = p3 ? b5 : i7;
    this.queryGraphicUIDsInExtent(d10, n6, (e17) => {
      const t8 = this.graphicsCore.getGraphics3DGraphicById(e17);
      if (null == t8) return;
      const l7 = t8.centroid;
      null != l7 && (i7[0] > l7.x || i7[1] > l7.y || i7[2] < l7.x || i7[3] < l7.y) || (t8.setVisibilityFlag(A3.GRAPHIC, L4.SCALE_RANGE, s8) && (a6 = true), this._updateLabelScaleVisibility(t8, r7) && (a6 = true));
    }), a6 && (this.graphicsCore.deconflictor?.setDirty(), this.graphicsCore.labeler?.setDirty());
  }
  layerMinMaxScaleChangeHandler() {
    this.updateScaleRangeActive() && !this._scaleRangeActive ? this.graphicsCore.modifyGraphics3DGraphicVisibilities((e16) => e16.setVisibilityFlag(A3.GRAPHIC, L4.SCALE_RANGE, true)) : this._scaleRangeActive && this.graphicsCore.updateAllGraphicsVisibility(), this._setDirty();
  }
};
function g3(e16, i7) {
  return e16 > 0 || i7 > 0;
}
e2([y()], u8.prototype, "graphicsCoreOwner", void 0), e2([y()], u8.prototype, "layer", void 0), e2([y()], u8.prototype, "queryGraphicUIDsInExtent", void 0), e2([y()], u8.prototype, "graphicsCore", void 0), e2([y()], u8.prototype, "basemapTerrain", void 0), e2([y({
  constructOnly: true
})], u8.prototype, "layerScaleEnabled", void 0), e2([y({
  readOnly: true
})], u8.prototype, "suspended", void 0), e2([y({
  readOnly: true
})], u8.prototype, "updating", null), e2([y()], u8.prototype, "_dirty", void 0), u8 = e2([a("esri.views.3d.layers.graphics.Graphics3DScaleVisibility")], u8);
var y4 = "terrain-events";
var b5 = u3();

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/ExtentSet.js
var h5 = 0.05;
var a4 = class {
  constructor() {
    this._extents = new l2({
      allocator: (t8) => t8 || u3()
    }), this._tmpExtent = u3(), this._dirty = false;
  }
  get empty() {
    return 0 === this._extents.length;
  }
  get size() {
    return this._extents.length;
  }
  clear() {
    this._extents.clear();
  }
  add(t8) {
    this._contains(t8) || (this._removeContained(t8), e3(this._extents.pushNew(), t8), this._dirty = true);
  }
  pop() {
    return this._dirty && this._mergeTight(), this._extents.pop();
  }
  merge(t8) {
    return this._mergeTight(t8), t8.hasProgressed;
  }
  _mergeTight(t8 = C2) {
    const e16 = this._extents, o8 = /* @__PURE__ */ new Set();
    let a6 = 0;
    for (; a6 !== e16.length; ) {
      e16.sort((t9, e17) => t9[0] - e17[0]), a6 = e16.length, o8.clear();
      for (let i7 = 0; i7 < e16.length; ++i7) {
        if (t8.done) return;
        const a7 = e16.at(i7);
        if (a7) {
          for (let t9 = i7 + 1; t9 < e16.length; ++t9) {
            const r7 = e16.at(t9);
            if (null == r7 || r7[0] >= a7[2]) break;
            o8.add(r7);
          }
          o8.forEach((i8) => {
            if (a7 === i8) return;
            if (i8[2] <= a7[0]) return void o8.delete(i8);
            const l7 = l3(a7), _5 = l3(i8), c3 = this._tmpExtent;
            m(a7, i8, c3);
            const d10 = l7 + _5;
            (l3(c3) - d10) / d10 < h5 && (e3(a7, c3), o8.delete(i8), e16.remove(i8), t8.madeProgress());
          }), o8.add(a7);
        }
      }
    }
    this._dirty = false;
  }
  _contains(t8) {
    return this._extents.some((e16) => R(e16, t8));
  }
  _removeContained(t8) {
    this._extents.filterInPlace((e16) => !R(t8, e16));
  }
  get test() {
  }
};

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DElevationAlignment.js
var p2 = class extends S {
  constructor(t8) {
    super(t8), this._dirtyExtents = new a4(), this._globalDirty = false, this._averageExtentUpdateSize = 0, this._dirtyGraphicsSet = /* @__PURE__ */ new Set(), this._updateElevation = false, this.graphicsCoreOwner = null, this.graphicsCore = null, this.events = new o();
  }
  initialize() {
    const t8 = this.elevationProvider, e16 = this.graphicsCoreOwner.view.resourceController.scheduler;
    this._task = e16.registerTask(d9(this.graphicsCore.layer.elevationInfo?.mode), this), this.addHandles([t8.on("elevation-change", (t9) => this._elevationChanged(t9)), d2(() => this.graphicsCoreOwner.suspended, () => this._suspendedChange()), this._task, d2(() => d9(this.graphicsCore.layer.elevationInfo?.mode), (t9) => this._task.priority = t9)]);
  }
  destroy() {
    this._dirtyGraphicsSet.clear(), this.graphicsCoreOwner = null, this.graphicsCore = null, this.queryGraphicUIDsInExtent = null, this.elevationProvider = null;
  }
  clear() {
    this._dirtyGraphicsSet.clear(), this.notifyChange("updating");
  }
  _suspendedChange() {
    true === this.graphicsCoreOwner.suspended ? this._updateElevation = false : false === this.graphicsCoreOwner.suspended && this._updateElevation && (this._globalDirty = true, this.notifyChange("updating"));
  }
  elevationInfoChange() {
    this._globalDirty = true, this.notifyChange("updating");
  }
  get updating() {
    return this.running;
  }
  get running() {
    return this._dirtyGraphicsSet.size > 0 || this._dirtyExtents && !this._dirtyExtents.empty || this._globalDirty;
  }
  get updatingRemaining() {
    return this._dirtyGraphicsSet.size + this._dirtyExtents.size * this._averageExtentUpdateSize;
  }
  runTask(t8) {
    for (this._globalDirty && (this._markAllGraphicsElevationDirty(), this._globalDirty = false, t8.madeProgress()), t8.run(() => this._dirtyExtents.merge(t8)); this.running && !t8.done; ) this._updateDirtyGraphics(t8), this._updateDirtyExtents(t8);
    this.notifyChange("updating");
  }
  _updateDirtyGraphics(t8) {
    const e16 = this.graphicsCoreOwner.view.renderCoordsHelper, i7 = this.graphicsCore.effectiveUpdatePolicy === C3.ASYNC;
    for (const r7 of this._dirtyGraphicsSet.keys()) {
      const s8 = this.graphicsCore.getGraphics3DGraphicById(r7);
      if (this._dirtyGraphicsSet.delete(r7), null != s8 && (s8.alignWithElevation(this.elevationProvider, e16, i7), this.graphicsCore.deconflictor?.setDirty(), t8.madeProgress()), t8.done) return;
    }
  }
  _updateDirtyExtents(t8) {
    for (; !this._dirtyExtents.empty && !t8.done; ) {
      const e16 = this._dirtyExtents.pop(), i7 = this.elevationProvider.spatialReference;
      this.events.emit("invalidate-elevation", {
        extent: e16,
        spatialReference: i7
      });
      const r7 = this._dirtyGraphicsSet.size;
      this.queryGraphicUIDsInExtent(e16, i7, (t9) => {
        const e17 = this.graphicsCore.getGraphics3DGraphicById(t9);
        null != e17 && e17.needsElevationUpdates() && this._dirtyGraphicsSet.add(t9);
      }), this._averageExtentUpdateSize = 0.1 * (this._dirtyGraphicsSet.size - r7) + 0.9 * this._averageExtentUpdateSize, t8.madeProgress();
    }
  }
  _markAllGraphicsElevationDirty() {
    this._dirtyExtents.clear(), this._dirtyGraphicsSet.clear(), this.graphicsCore.graphics3DGraphics.forEach((t8, e16) => this._dirtyGraphicsSet.add(e16));
  }
  _elevationChanged(t8) {
    if ("scene" === t8.context && (!this.graphicsCore.layer.elevationInfo || "relative-to-scene" !== this.graphicsCore.layer.elevationInfo.mode)) return;
    const e16 = t8.extent;
    if (this.graphicsCoreOwner.suspended) {
      if (!this._updateElevation) {
        const t9 = this.graphicsCore.computedExtent;
        t9 && e16[2] > t9.xmin && e16[0] < t9.xmax && e16[3] > t9.ymin && e16[1] < t9.ymax && (this._updateElevation = true);
      }
      this.events.emit("invalidate-elevation", t8);
    } else e16[0] === -1 / 0 ? this._globalDirty = true : this._dirtyExtents.add(e16), this.notifyChange("updating");
  }
};
function d9(t8) {
  return null == t8 ? I.ELEVATION_ALIGNMENT : "relative-to-scene" === t8 ? I.ELEVATION_ALIGNMENT_SCENE : I.ELEVATION_ALIGNMENT;
}
e2([y()], p2.prototype, "graphicsCoreOwner", void 0), e2([y()], p2.prototype, "graphicsCore", void 0), e2([y()], p2.prototype, "queryGraphicUIDsInExtent", void 0), e2([y()], p2.prototype, "elevationProvider", void 0), e2([y({
  readOnly: true
})], p2.prototype, "updating", null), e2([y({
  readOnly: true
})], p2.prototype, "updatingRemaining", null), p2 = e2([a("esri.views.3d.layers.graphics.Graphics3DElevationAlignment")], p2);

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DFrustumVisibility.js
var h6 = 1.2;
var u9 = class extends S {
  constructor(e16) {
    super(e16), this.suspended = false, this._extent = null, this._extentIntersectionDirty = true, this._isVisibleBelowSurfaceInternal = false, this.graphicsCoreOwner = null, this.updating = true;
  }
  initialize() {
    const {
      graphicsCoreOwner: e16
    } = this;
    this._extentIntersection = new N({
      renderCoordsHelper: e16.view.renderCoordsHelper
    });
    const t8 = e16.view, n6 = t8.basemapTerrain, o8 = t8.resourceController.scheduler;
    this.addHandles([t8.on("resize", () => this._viewChange()), d2(() => t8.state.camera, () => this._viewChange(), C), o8.registerTask(I.FRUSTUM_VISIBILITY, this), d2(() => n6.visibleElevationBounds, () => this._elevationBoundsChange())]), "local" === t8.viewingMode ? this._isVisibleBelowSurface = true : this.addHandles([d2(() => [n6.baseOpacity, n6.wireframe, t8.map?.ground?.navigationConstraint?.type], () => this._updateIsVisibleBelowSurface(), P)]);
  }
  destroy() {
    this._set("graphicsCoreOwner", null), this._extent = null, this._extentIntersection = null;
  }
  _setDirty() {
    this.updating || this._set("updating", true);
  }
  setExtent(e16) {
    this._extent = e16, this._extentIntersectionDirty = true, this._setDirty();
  }
  _viewChange() {
    this._setDirty();
  }
  _elevationBoundsChange() {
    this._setDirty(), this._extentIntersectionDirty = true;
  }
  set _isVisibleBelowSurface(e16) {
    this._isVisibleBelowSurfaceInternal = e16, this._setDirty(), this._extentIntersectionDirty = true;
  }
  _updateIsVisibleBelowSurface() {
    const e16 = this.graphicsCoreOwner.view, t8 = e16.basemapTerrain, s8 = "local" === e16.viewingMode, i7 = "none" === e16.map.ground?.navigationConstraint?.type;
    this._isVisibleBelowSurface = s8 || !t8.opaque || i7;
  }
  _updateExtentIntersection() {
    if (!this._extentIntersectionDirty) return;
    this._extentIntersectionDirty = false;
    const e16 = this.graphicsCoreOwner.view;
    let t8;
    if (this._isVisibleBelowSurfaceInternal) t8 = -0.3 * s3(e16.spatialReference).radius;
    else {
      const {
        min: s8,
        max: i7
      } = e16.basemapTerrain.visibleElevationBounds;
      t8 = s8 - Math.max(1, (i7 - s8) * (h6 - 1));
    }
    this._extentIntersection.update(this._extent, e16.spatialReference, t8);
  }
  get running() {
    return this.updating;
  }
  runTask(e16) {
    if (this._set("updating", false), !this._extent) return this._set("suspended", false), o4;
    this._updateExtentIntersection();
    const t8 = this.graphicsCoreOwner.view.frustum, s8 = s3(this.graphicsCoreOwner.view.spatialReference).radius;
    this._set("suspended", !this._extentIntersection.isVisibleInFrustum(t8, s8)), e16.madeProgress();
  }
};
e2([y({
  readOnly: true
})], u9.prototype, "suspended", void 0), e2([y({
  constructOnly: true
})], u9.prototype, "graphicsCoreOwner", void 0), e2([y({
  readOnly: true
})], u9.prototype, "updating", void 0), u9 = e2([a("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")], u9);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3DStateSet.js
var t7;
!function(e16) {
  e16[e16.Object = 0] = "Object", e16[e16.RenderGeometry = 1] = "RenderGeometry", e16[e16.External = 2] = "External", e16[e16.COUNT = 3] = "COUNT";
}(t7 || (t7 = {}));
var r6 = class {
  constructor() {
    this._items = [];
  }
  addObject(e16, r7) {
    this._items.push({
      type: t7.Object,
      objectStateId: r7,
      object: e16
    });
  }
  addRenderGeometry(e16, r7, o8) {
    this._items.push({
      type: t7.RenderGeometry,
      objectStateId: r7,
      renderGeometry: e16,
      owner: o8
    });
  }
  addExternal(e16, r7) {
    this._items.push({
      type: t7.External,
      objectStateId: r7,
      remove: e16
    });
  }
  remove(e16) {
    for (let t8 = this._items.length - 1; t8 >= 0; --t8) {
      const r7 = this._items[t8];
      r7.objectStateId === e16 && (o7(r7), this._items.splice(t8, 1));
    }
  }
  removeObject(e16) {
    for (let r7 = this._items.length - 1; r7 >= 0; --r7) {
      const s8 = this._items[r7];
      s8.type === t7.Object && s8.object === e16 && (o7(s8), this._items.splice(r7, 1));
    }
  }
  removeRenderGeometry(e16) {
    for (let r7 = this._items.length - 1; r7 >= 0; --r7) {
      const s8 = this._items[r7];
      s8.type === t7.RenderGeometry && s8.renderGeometry === e16 && (o7(s8), this._items.splice(r7, 1));
    }
  }
  removeAll() {
    this._items.forEach((e16) => {
      o7(e16);
    }), this._items = [];
  }
};
function o7(r7) {
  switch (r7.type) {
    case t7.Object:
      r7.objectStateId.channel === t3.Highlight ? r7.object.removeHighlight(r7.objectStateId) : r7.objectStateId.channel === t3.MaskOccludee && r7.object.removeOcclude(r7.objectStateId);
      break;
    case t7.RenderGeometry:
      r7.owner.removeRenderGeometryObjectState(r7.renderGeometry, r7.objectStateId);
      break;
    case t7.External:
      r7.remove(r7.objectStateId);
  }
}

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DObjectStateSet.js
var e15 = class {
  constructor(e16, i7) {
    this.stateType = e16, this.objectIdField = i7, this.objectStateSet = new r6(), this.ids = /* @__PURE__ */ new Set(), this.paused = false;
  }
  hasGraphic(t8) {
    if (this.objectIdField) {
      const e16 = t8.graphic.attributes[this.objectIdField];
      return this.ids.has(e16);
    }
    return this.ids.has(t8.graphic.uid);
  }
};

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DObjectStates.js
var s7 = class {
  constructor(t8) {
    this._graphicsCore = t8, this._stateSets = new Array();
  }
  destroy() {
    this.reset(), this._stateSets = null;
  }
  reset() {
    this._stateSets && (this._stateSets.forEach((t8) => t8.objectStateSet.removeAll()), this._stateSets.length = 0);
  }
  acquireSet(s8, a6) {
    const i7 = new e15(s8, a6);
    this._stateSets.push(i7);
    const h7 = e(() => this.releaseSet(i7));
    return {
      set: i7,
      handle: h7
    };
  }
  releaseSet(t8) {
    t8.objectStateSet.removeAll();
    const e16 = this._stateSets ? this._stateSets.indexOf(t8) : -1;
    -1 !== e16 && this._stateSets.splice(e16, 1);
  }
  setUid(t8, e16) {
    t8.ids.add(e16);
    const s8 = this._graphicsCore.graphics3DGraphics.get(e16);
    s8 && a5(s8, t8);
  }
  setUids(t8, e16) {
    e16.forEach((e17) => this.setUid(t8, e17));
  }
  setObjectIds(t8, e16) {
    e16.forEach((e17) => t8.ids.add(e17)), this._initializeSet(t8);
  }
  addGraphic(t8) {
    this._stateSets.forEach((e16) => {
      !e16.paused && e16.hasGraphic(t8) && a5(t8, e16);
    });
  }
  removeGraphic(t8) {
    this._stateSets.forEach((e16) => {
      e16.hasGraphic(t8) && i6(t8, e16);
    });
  }
  allGraphicsDeleted() {
    this._stateSets && this._stateSets.forEach((t8) => t8.objectStateSet.removeAll());
  }
  _initializeSet(t8) {
    const e16 = this._graphicsCore.graphics3DGraphics;
    t8.objectIdField ? e16.forEach((e17) => {
      e17 && t8.hasGraphic(e17) && a5(e17, t8);
    }) : t8.ids.forEach((s8) => {
      const i7 = e16.get(s8);
      i7 && a5(i7, t8);
    });
  }
  get test() {
  }
};
function a5(t8, e16) {
  t8.addObjectStateSet(e16.stateType, e16.objectStateSet);
}
function i6(t8, e16) {
  t8.removeObjectState(e16.objectStateSet);
}

export {
  e12 as e,
  s6 as s,
  ze,
  u8 as u,
  a4 as a,
  p2 as p,
  u9 as u2,
  s7 as s2
};
//# sourceMappingURL=chunk-SB6NP2J2.js.map
