import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e4
} from "./chunk-BUA2HOYZ.js";
import {
  r as r2
} from "./chunk-LKON3V7U.js";
import {
  E,
  P,
  r
} from "./chunk-5F4Q35S4.js";
import {
  a as a2,
  l as l2,
  p as p3
} from "./chunk-R3ALLGC4.js";
import {
  c as c3
} from "./chunk-7J24PH7A.js";
import {
  I,
  c as c2
} from "./chunk-IA5UKRA2.js";
import {
  N
} from "./chunk-MIWJLMUG.js";
import {
  p as p2
} from "./chunk-DUSY4H5O.js";
import {
  n as n3
} from "./chunk-WQIJCG2D.js";
import {
  _ as _2
} from "./chunk-62PN4TEW.js";
import {
  h as h3
} from "./chunk-XP4RC2MQ.js";
import {
  f,
  l,
  v as v2
} from "./chunk-ZSJNH2BT.js";
import {
  n as n2
} from "./chunk-C7BQE556.js";
import {
  c3 as c,
  h as h2,
  j3 as j
} from "./chunk-ZREJ3Y2F.js";
import {
  S
} from "./chunk-IUPJR3FF.js";
import {
  y as y2
} from "./chunk-TGZW6QWO.js";
import {
  d as d2
} from "./chunk-OYIDHTXG.js";
import {
  J,
  K,
  W,
  _
} from "./chunk-LM3JDV4W.js";
import {
  m
} from "./chunk-7V4JSBFA.js";
import {
  e as e3
} from "./chunk-YTKVV2Y3.js";
import {
  G,
  s3 as s2
} from "./chunk-6SSA7P3A.js";
import {
  A,
  d,
  p,
  v,
  w
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  h,
  u as u2
} from "./chunk-AIZ3T7E3.js";
import {
  e,
  u
} from "./chunk-6WGE3IUL.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/reshape/isSupportedObject.js
function e5(t) {
  return n4(t).result;
}
function n4(e6) {
  if (e6.graphic && "graphics" !== e6.graphic.layer?.type) return {
    result: P.GRAPHICS_LAYER_MISSING
  };
  if (!e6.operations) return {
    result: P.GEOMETRY_MISSING
  };
  if (v2(e6.elevationInfo)) return {
    result: P.ELEVATION_MODE_UNSUPPORTED
  };
  const o2 = e6.operations.data.type, n6 = e6.operations.data.geometry;
  return "point" === o2 || "mesh" === o2 || "polyline" === o2 || "polygon" === o2 ? {
    result: P.SUPPORTED,
    geometry: n6
  } : {
    result: P.GEOMETRY_TYPE_UNSUPPORTED
  };
}

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/transform/isSupportedGraphic.js
function r3(r4) {
  if ("graphics" !== r4.layer?.type) return P.GRAPHICS_LAYER_MISSING;
  if (null == r4.geometry) return P.GEOMETRY_MISSING;
  switch (r4.geometry.type) {
    case "point":
      break;
    case "polygon":
    case "polyline":
    case "multipoint":
    case "extent":
    case "mesh":
      return P.SUPPORTED;
    default:
      return P.GEOMETRY_TYPE_UNSUPPORTED;
  }
  const s3 = null != r4.symbol && "point-3d" === r4.symbol.type && r4.symbol.symbolLayers;
  if (!s3 || !s3.some((e6) => "object" === e6.type)) return P.SYMBOL_TYPE_UNSUPPORTED;
  return "on-the-ground" !== l(r4) && f(r4) ? P.ELEVATION_MODE_UNSUPPORTED : P.SUPPORTED;
}

// ../../../node_modules/@arcgis/core/widgets/Sketch/support/OperationHandle.js
var n5 = class extends o.EventedAccessor {
  constructor(e6) {
    super(e6), this.cancelled = false, this.history = {
      undo: [],
      redo: []
    }, this.type = null;
  }
  get tool() {
    if (!this.activeComponent) return null;
    switch (this.activeComponent.type) {
      case "graphic-mover":
      case "move-3d":
        return "move";
      case "box":
      case "transform-3d":
        return "transform";
      case "reshape":
      case "reshape-3d":
        return "reshape";
      case "draw-2d":
      case "draw-3d":
        return this.activeComponent.geometryType;
      default:
        n2(this.activeComponent);
    }
    return null;
  }
  addToHistory(e6) {
    this.history.redo = [], this.history.undo.push(e6);
  }
  resetHistory() {
    this.history.redo = [], this.history.undo = [];
  }
  canUndo() {
    return this.history.undo.length > 0;
  }
  canRedo() {
    return this.history.redo.length > 0;
  }
  complete() {
    this._reset(), this.onEnd(), this.emit("complete");
  }
  cancel() {
    this.cancelled = true, this.complete();
  }
  _reset() {
    this.activeComponent?.reset();
  }
  refreshComponent() {
    const e6 = this.activeComponent;
    e6 && ("box" !== e6.type && "reshape" !== e6.type && "graphic-mover" !== e6.type || e6.refresh());
  }
  set undo(e6) {
    this._set("undo", () => {
      this.canUndo() && e6();
    });
  }
  set redo(e6) {
    this._set("redo", () => {
      this.canRedo() && e6();
    });
  }
};
e2([y()], n5.prototype, "activeComponent", void 0), e2([y()], n5.prototype, "cancelled", void 0), e2([y()], n5.prototype, "history", void 0), e2([y()], n5.prototype, "tool", null), e2([y()], n5.prototype, "type", void 0), e2([y()], n5.prototype, "canUndo", null), e2([y()], n5.prototype, "canRedo", null), e2([y()], n5.prototype, "onEnd", void 0), e2([y()], n5.prototype, "undo", null), e2([y()], n5.prototype, "redo", null), e2([y()], n5.prototype, "toggleTool", void 0), e2([y()], n5.prototype, "addToSelection", void 0), e2([y()], n5.prototype, "removeFromSelection", void 0), n5 = e2([a("esri.widgets.Sketch.support.OperationHandle")], n5);
var p4 = class extends n5 {
};
e2([y()], p4.prototype, "activeComponent", void 0), p4 = e2([a("esri.widgets.Sketch.support.OperationHandle.CreateOperationHandle")], p4);
var i = class extends n5 {
};
e2([y()], i.prototype, "activeComponent", void 0), i = e2([a("esri.widgets.Sketch.support.OperationHandle.UpdateOperationHandle")], i);

// ../../../node_modules/@arcgis/core/widgets/Sketch/SketchViewModel.js
var Y = {
  defaultZ: 0
};
var J2 = {
  reshapeOptions: {
    edgeOperation: "split",
    shapeOperation: "move",
    vertexOperation: "move"
  },
  enableMoveAllGraphics: true,
  enableRotation: true,
  enableScaling: true,
  multipleSelectionEnabled: true,
  preserveAspectRatio: false,
  toggleToolOnClick: true,
  enableZ: true,
  highlightOptions: {
    enabled: true
  },
  tool: "transform"
};
var Q = class extends o.EventedAccessor {
  constructor(e6) {
    super(e6), this._numUpdating = 0, this._defaultSnappingManager = null, this._internalGraphicsLayer = new h3({
      listMode: "hide",
      internal: true,
      title: "SVM Internal"
    }), this._operationHandle = null, this._viewHandlesKey = "viewHandles", this.activeFillSymbol = null, this.activeLineSymbol = null, this.activeVertexSymbol = null, this.allowDeleteKey = true, this.layer = null, this.pointSymbol = new y2({
      style: "circle",
      size: 6,
      color: [255, 255, 255],
      outline: {
        color: [50, 50, 50],
        width: 1
      }
    }), this.polygonSymbol = new S({
      color: [150, 150, 150, 0.2],
      outline: {
        color: [50, 50, 50],
        width: 2
      }
    }), this.polylineSymbol = new d2({
      color: [130, 130, 130, 1],
      width: 2
    }), this.meshSymbol = new c({
      symbolLayers: new V([new h2()])
    }), this.updateGraphics = new V(), this.updateOnGraphicClick = true, this.vertexSymbol = new y2({
      style: "circle",
      size: 6,
      color: [255, 255, 255],
      outline: {
        color: [50, 50, 50],
        width: 1
      }
    }), this.sketchOptions = new l2(), this._moduleLoaderAbortController = null, this._viewReadyAbortController = null, this._originalPopupEnabled = null, this.defaultCreateOptions = Y, this.defaultUpdateOptions = J2, this.snappingOptions = e6?.snappingManager?.options ?? e6?.snappingOptions ?? new c2();
  }
  initialize() {
    this.addHandles([v(() => this.view?.map?.layers, "change", (e6) => {
      e6.removed.includes(this.layer) && this.cancel();
    }), v(() => this.layer?.graphics, "change", (e6) => {
      if (null != this._operationHandle) for (const t of e6.removed) this.updateGraphics.includes(t) && (this.updateGraphics.length > 1 ? this._operationHandle.removeFromSelection(t) : this._operationHandle.cancel());
    }), d(() => this.layer?.elevationInfo ?? null, (e6) => {
      e6 !== this._internalGraphicsLayer.elevationInfo && (this.cancel(), this._internalGraphicsLayer.elevationInfo = e6);
    }, A), d(() => this.view, (e6) => {
      this._defaultSnappingManager = u(this._defaultSnappingManager), e6 && (this.snappingManager || (this._defaultSnappingManager = new I({
        view: e6,
        options: this.snappingOptions
      })), "2d" === e6.type ? import("./editingTools-LANOIFYG.js") : "3d" === e6.type && (import("./editingTools-J3URP33C.js"), import("./GraphicsLayerView3D-HI2R6D6W.js")));
    }, A), d(() => this.view?.spatialReference, (e6, t) => {
      e6 && t && !e6.equals(t) && this.cancel();
    })]), N(this);
  }
  destroy() {
    this.cancel(), this._removeDefaultLayer(), this._defaultSnappingManager = u(this._defaultSnappingManager), this._set("snappingManager", null), this._set("view", null), this.emit("destroy");
  }
  get updating() {
    return this._numUpdating > 0 || null != this.snappingManager && this.snappingManager.updating;
  }
  get activeTool() {
    return this._operationHandle?.tool ?? null;
  }
  get activeComponent() {
    return this._operationHandle?.activeComponent ?? null;
  }
  get createGraphic() {
    return null == this.activeComponent || "draw-3d" !== this.activeComponent.type && "draw-2d" !== this.activeComponent.type ? this._get("createGraphic") : this.activeComponent.graphic;
  }
  get defaultCreateOptions() {
    return this._get("defaultCreateOptions");
  }
  set defaultCreateOptions(e6) {
    this._set("defaultCreateOptions", __spreadValues(__spreadValues({}, Y), e6));
  }
  get defaultUpdateOptions() {
    return this._get("defaultUpdateOptions");
  }
  set defaultUpdateOptions(e6) {
    this._set("defaultUpdateOptions", __spreadProps(__spreadValues(__spreadValues({}, J2), e6), {
      reshapeOptions: __spreadValues(__spreadValues({}, J2.reshapeOptions), e6?.reshapeOptions),
      highlightOptions: __spreadValues(__spreadValues({}, J2.highlightOptions), e6?.highlightOptions)
    }));
  }
  get labelOptions() {
    return this.sketchOptions.labels;
  }
  set labelOptions(e6) {
    this.sketchOptions.labels = e6;
  }
  get snappingOptions() {
    return this.snappingManager?.options ?? this._get("snappingOptions");
  }
  set snappingOptions(e6) {
    null != this._defaultSnappingManager && (this._defaultSnappingManager.options = e6), this._set("snappingOptions", e6);
  }
  get snappingManager() {
    return this._isOverridden("snappingManager") && this._get("snappingManager"), this._defaultSnappingManager;
  }
  set snappingManager(e6) {
    if (e6) this._isOverridden("snappingManager") || (this._defaultSnappingManager = u(this._defaultSnappingManager)), this._override("snappingManager", e6);
    else {
      const {
        view: e7
      } = this;
      !this._defaultSnappingManager && e7 && (this._defaultSnappingManager = new I({
        options: this.snappingOptions,
        view: e7
      })), this._clearOverride("snappingManager");
    }
  }
  get state() {
    const e6 = !(!this.view?.ready || !this.layer), t = this._operationHandle;
    return e6 && t ? "active" : e6 ? "ready" : "disabled";
  }
  get tooltipOptions() {
    return this.sketchOptions.tooltips;
  }
  set tooltipOptions(e6) {
    this.sketchOptions.tooltips = e6;
  }
  get valueOptions() {
    return this.sketchOptions.values;
  }
  set valueOptions(e6) {
    this.sketchOptions.values = e6;
  }
  get view() {
    return this._get("view");
  }
  set view(e6) {
    const t = this._get("view");
    if (t) {
      const {
        container: e7,
        map: o3
      } = t;
      e7 && (t.cursor = null), o3?.remove(this._internalGraphicsLayer), this.removeHandles(this._viewHandlesKey), this.cancel();
    }
    const o2 = "view-ready";
    this.removeHandles(o2), e6 && this.addHandles(p(() => e6.ready, (t2) => {
      this.removeHandles(this._viewHandlesKey), t2 && this.addHandles(this._generateViewHandles(e6), this._viewHandlesKey);
    }, A), o2), this._set("view", e6);
  }
  cancel() {
    this._moduleLoaderAbortController = e(this._moduleLoaderAbortController), this._viewReadyAbortController = e(this._viewReadyAbortController), this._operationHandle && this._operationHandle.cancel();
  }
  complete() {
    this._operationHandle && this._operationHandle.complete();
  }
  delete() {
    const {
      state: e6,
      updateGraphics: t
    } = this;
    if ("active" === e6 && t.length) {
      const {
        activeTool: e7,
        layer: o2
      } = this, i2 = t.toArray();
      o2.removeMany(i2), this.cancel(), this._emitDeleteEvent({
        graphics: i2,
        tool: e7
      });
    }
  }
  duplicate() {
    if ("active" === this.state && this.updateGraphics.length) {
      const e6 = this.updateGraphics.map((e7) => e7.clone()).toArray();
      return this.layer.addMany(e6), this.emit("duplicate", {
        graphics: e6,
        type: "duplicate"
      }), e6;
    }
    return [];
  }
  create(e6, t) {
    return __async(this, null, function* () {
      this.cancel(), yield this._waitViewReady();
      const {
        view: o2,
        layer: i2
      } = this;
      if (!o2 || "disabled" === this.state) throw i2 || this._logMissingLayer(), u2();
      if (null != o2.activeTool && (o2.activeTool = null), !e6) return void this._logError("sketch:missing-parameter", "Missing parameter 'tool'.");
      e4(o2, this._internalGraphicsLayer);
      const a3 = yield this._setupCreateOperation(e6, t);
      if (null == a3 || this.destroyed) return void o2.map.remove(this._internalGraphicsLayer);
      const r4 = () => {
        if (a3 === this._operationHandle) {
          const t2 = this.createGraphic, o3 = this._operationHandle.cancelled;
          this._operationHandle.destroy(), this._operationHandle = null, this._set("createGraphic", null), this.view?.map && this.view.map.remove(this._internalGraphicsLayer), a3.cancelled || null == t2 || i2.add(t2), this.emit("create", {
            graphic: t2,
            state: o3 ? "cancel" : "complete",
            tool: e6,
            toolEventInfo: null,
            type: "create"
          });
        }
      };
      a3.on("complete", r4), this._operationHandle = a3, o2.ready && o2.focus();
    });
  }
  place(e6, t) {
    return __async(this, null, function* () {
      return this.create("mesh", __spreadValues({
        mode: "click",
        hasZ: e6.hasZ,
        geometryToPlace: e6
      }, t));
    });
  }
  update(e6, t) {
    return __async(this, null, function* () {
      this.cancel(), yield this._waitViewReady();
      const {
        layer: o2,
        view: i2,
        state: a3
      } = this;
      if (!i2 || "disabled" === a3) throw o2 || this._logMissingLayer(), u2();
      null != i2.activeTool && (i2.activeTool = null);
      const r4 = Array.isArray(e6) ? e6 : [e6];
      if (null == e6 || !r4?.length) return void this._logError("sketch:missing-parameter", "Missing parameter 'graphics'.");
      if (r4.some((e7) => e7.layer !== o2 ? (this._logError("sketch:invalid-parameter", "Parameter 'graphics' contains one or more graphics missing from the supplied GraphicsLayer."), true) : null == e7.geometry && (this._logError("sketch:invalid-parameter", "Parameter 'graphics' contains one or more graphics with an unsupported geometry."), true))) return;
      const s3 = yield this._setupUpdateOperation(r4, t);
      this.destroyed || null == s3 || ne(s3) || (e4(i2, this._internalGraphicsLayer), this._setUpdateOperationHandle(s3, t), this.emit("update", {
        graphics: r4,
        state: "start",
        aborted: false,
        tool: s3.tool,
        toolEventInfo: null,
        type: "update"
      }));
    });
  }
  _updateSpatialReference(e6) {
    return __async(this, null, function* () {
      const t = this.view;
      if (t) {
        this._beginAsyncOperation(), e6 = Array.isArray(e6) ? e6 : [e6];
        for (const o2 of e6) null == o2.geometry || "mesh" === o2.geometry.type || G(o2.geometry.spatialReference, t.spatialReference) || (J(o2.geometry.spatialReference, t.spatialReference) || _() || (yield W()), o2.geometry = K(o2.geometry, t.spatialReference));
        this._endAsyncOperation();
      } else this._logMissingView();
    });
  }
  undo() {
    this.canUndo() && this._operationHandle?.undo();
  }
  redo() {
    this.canRedo() && this._operationHandle?.redo();
  }
  canUndo() {
    return !!this._operationHandle?.canUndo();
  }
  canRedo() {
    return !!this._operationHandle?.canRedo();
  }
  toggleUpdateTool() {
    this._operationHandle?.toggleTool();
  }
  _getFirstHit(e6) {
    return __async(this, null, function* () {
      const t = this.view;
      if (!t) return this._logMissingView(), null;
      if ("2d" === t.type) {
        const o3 = [];
        t.map.allLayers.forEach((e7) => {
          "vector-tile" !== e7.type && "imagery" !== e7.type || o3.push(e7);
        });
        const i3 = yield t.hitTest(e6, {
          exclude: o3
        });
        return r2(i3.results);
      }
      const o2 = [t.map.ground];
      t.map.allLayers.forEach((e7) => {
        m(e7.type) && o2.push(e7);
      });
      const i2 = yield t.hitTest(e6, {
        exclude: o2
      });
      if (i2.results.length > 0) {
        const e7 = i2.results[0];
        if (null != e7 && "graphic" === e7.type && e7.graphic && (!i2.ground.mapPoint || t.map.ground.opacity < 1 || i2.ground.distance - (e7.distance ?? 0) > -Math.min(3 * i2.ground.distance, "global" === t.viewingMode ? s2(t.renderCoordsHelper.spatialReference).radius / t.renderCoordsHelper.unitInMeters : Number.POSITIVE_INFINITY))) return e7;
      }
      return null;
    });
  }
  _generateViewHandles(e6) {
    return [e6.on("immediate-click", (t) => __async(this, null, function* () {
      const o2 = "active" === this.state && "create" === this._operationHandle?.type;
      if ("disabled" === this.state || o2 || !this.updateOnGraphicClick) return;
      this._beginAsyncOperation();
      const i2 = yield t.async(() => this._getFirstHit(n3(t)));
      let a3 = null;
      if (null != i2) {
        const o3 = i2.graphic;
        this.updateGraphics.includes(o3) || o3.layer === this.layer ? (t.stopPropagation(), a3 = o3) : "2d" !== e6.type || this._isComponentGraphic(o3) || "active" !== this.state || this.cancel();
      } else "active" === this.state && this.cancel();
      null == a3 || this.updateGraphics.includes(a3) || (yield this.update([a3], __spreadProps(__spreadValues({}, this.defaultUpdateOptions), {
        reshapeOptions: __spreadValues({}, this.defaultUpdateOptions.reshapeOptions)
      }))), this._endAsyncOperation();
    }), _2.WIDGET)];
  }
  _setupCreateOperation(e6, t) {
    return __async(this, null, function* () {
      const o2 = this.view;
      if (!o2) return this._logMissingView(), null;
      const i2 = __spreadValues(__spreadValues({
        hasZ: "3d" === o2.type
      }, this.defaultCreateOptions), t), a3 = yield this._setupDrawGraphicTool(e6, o2, i2);
      return null == a3 ? null : (o2.tools.add(a3), o2.activeTool = a3, this._setupCreateOperationHandle(a3));
    });
  }
  _setupDrawGraphicTool(e6, t, o2) {
    return __async(this, null, function* () {
      if ("multipoint" === e6 && "3d" === t.type) return this._logError("sketch:create", "Multipoint geometries are not supported in SceneView."), null;
      if (!t) return this._logMissingView(), null;
      const {
        cursor: i2,
        defaultZ: a3,
        hasZ: r4,
        geometryToPlace: s3,
        graphicProperties: n6,
        mode: p5,
        preserveAspectRatio: l3
      } = o2, h4 = "rectangle" === e6 || "circle" === e6 ? "hybrid" : "click", c4 = l3 ?? "rectangle" !== e6, d3 = {
        centered: "rectangle" !== e6 && !("circle" === e6 && !c4),
        cursor: i2,
        defaultZ: a3,
        forceUniformSize: c4,
        graphicProperties: n6,
        geometryToPlace: s3,
        geometryType: e6,
        graphicSymbol: this._getGraphicSymbolFromTool(e6),
        hasZ: r4,
        mode: p5 ?? h4,
        snappingManager: this.snappingManager,
        snapToScene: false,
        view: t
      };
      return "2d" === t.type ? this._makeDrawGraphicTool2D(d3) : this._makeDrawGraphicTool3D(d3);
    });
  }
  _makeDrawGraphicTool2D(e6) {
    return __async(this, null, function* () {
      const t = yield this._requireModule(import("./editingTools-LANOIFYG.js"));
      return ne(t) || this.destroyed ? null : new t.module.DrawGraphicTool2D(__spreadProps(__spreadValues({}, e6), {
        activeVertexSymbol: this.activeVertexSymbol,
        regularVerticesSymbol: this.vertexSymbol,
        activeLineSymbol: this.activeLineSymbol,
        activeFillSymbol: te(e6.geometryType) ? this.activeFillSymbol : null,
        sketchOptions: this.sketchOptions
      }));
    });
  }
  _makeDrawGraphicTool3D(e6) {
    return __async(this, null, function* () {
      const t = yield this._requireModule(import("./editingTools-J3URP33C.js"));
      if (ne(t) || this.destroyed) return null;
      const {
        elevationInfo: o2
      } = this.layer;
      return new t.module.DrawGraphicTool3D(__spreadProps(__spreadValues({}, e6), {
        elevationInfo: o2,
        snapToScene: true,
        sketchOptions: this.sketchOptions
      }));
    });
  }
  _setupCreateOperationHandle(e6) {
    const t = this.view;
    if (!t) return this._logMissingView(), null;
    let o2 = null;
    const i2 = e6.forceUniformSize, a3 = e6.centered, r4 = [t.on("key-down", (t2) => {
      if (t2.key === p2.pan) t2.stopPropagation(), t2.repeat || (e6.enabled = false);
      else if (t2.key === p2.complete) t2.stopPropagation(), e6.completeCreateOperation();
      else if (t2.key !== p2.vertexAdd || t2.repeat) t2.key === p2.undo ? (t2.stopPropagation(), s3.undo()) : t2.key === p2.redo ? (t2.stopPropagation(), s3.redo()) : t2.key !== p2.constraint || "rectangle" !== e6.geometryType && "circle" !== e6.geometryType || t2.repeat ? t2.key === p2.center && (t2.repeat || (e6.centered = !a3, t2.stopPropagation())) : (e6.forceUniformSize = !i2, t2.stopPropagation());
      else {
        const o3 = e6.drawOperation.geometryType;
        "polyline" !== o3 && "polygon" !== o3 && "multipoint" !== o3 || (t2.stopPropagation(), e6.drawOperation.commitStagedVertex());
      }
    }, _2.WIDGET), t.on("key-up", (t2) => {
      t2.key === p2.pan ? e6.enabled = true : t2.key !== p2.constraint || "rectangle" !== e6.geometryType && "circle" !== e6.geometryType ? t2.key === p2.center && (e6.centered = a3, t2.stopPropagation()) : (e6.forceUniformSize = i2, t2.stopPropagation());
    }, _2.WIDGET), e6.on("vertex-add", (t2) => {
      switch (o2 = null == o2 ? "start" : "active", t2.operation) {
        case "apply":
          this.emit("create", {
            graphic: e6.graphic,
            state: o2,
            tool: this.activeTool,
            toolEventInfo: t2,
            type: "create"
          });
          break;
        case "undo":
          this._emitUndoEvent({
            graphics: [e6.graphic],
            tool: e6.geometryType
          });
          break;
        case "redo":
          this._emitRedoEvent({
            graphics: [e6.graphic],
            tool: e6.geometryType
          });
      }
    }), e6.on("cursor-update", (t2) => {
      e6.drawOperation.numCommittedVertices > 0 && this.emit("create", {
        graphic: e6.graphic,
        state: "active",
        tool: this.activeTool,
        toolEventInfo: {
          coordinates: t2.vertices[0].coordinates,
          type: "cursor-update"
        },
        type: "create"
      });
    }), e6.on("vertex-remove", (t2) => {
      switch (t2.operation) {
        case "apply":
          this.emit("create", {
            graphic: e6.graphic,
            state: "active",
            tool: this.activeTool,
            toolEventInfo: t2,
            type: "create"
          });
          break;
        case "undo":
          this._emitUndoEvent({
            graphics: [e6.graphic],
            tool: e6.geometryType
          });
          break;
        case "redo":
          this._emitRedoEvent({
            graphics: [e6.graphic],
            tool: e6.geometryType
          });
      }
    }), e6.on("complete", (e7) => {
      this._set("createGraphic", e7.graphic), o2 = "complete", e7.aborted ? s3 && s3.cancel() : s3 && s3.complete();
    }), d(() => this._getGraphicSymbolFromTool(e6.geometryType), (t2) => {
      e6.graphicSymbol = t2;
    })], s3 = new p4({
      activeComponent: e6,
      tool: e6.geometryType,
      type: "create",
      onEnd: () => {
        r4.forEach((e7) => e7.remove()), r4.length = 0, t.tools?.remove(e6);
      },
      undo: () => {
        e6.canUndo && e6.undo();
      },
      redo: () => {
        e6.canRedo && e6.redo();
      },
      canUndo: () => e6.canUndo,
      canRedo: () => e6.canRedo
    });
    return s3;
  }
  _getGraphicSymbolFromTool(e6) {
    switch (e6) {
      case "point":
      case "multipoint":
        return this.pointSymbol;
      case "polyline":
        return this.polylineSymbol;
      case "circle":
      case "rectangle":
      case "polygon":
        return this.polygonSymbol;
      case "mesh":
        return this.meshSymbol;
    }
  }
  _setupUpdateOperation(e6, t) {
    return __async(this, null, function* () {
      const {
        layer: o2,
        view: i2
      } = this;
      if (!i2) return this._logMissingView(), null;
      const a3 = __spreadProps(__spreadValues(__spreadValues({}, this.defaultUpdateOptions), t), {
        reshapeOptions: __spreadValues(__spreadValues({}, this.defaultUpdateOptions.reshapeOptions), t?.reshapeOptions),
        highlightOptions: __spreadValues(__spreadValues({}, this.defaultUpdateOptions.highlightOptions), t?.highlightOptions)
      });
      let r4 = a3.tool ?? J2.tool;
      for (const s3 of e6) o2.remove(s3), o2.add(s3);
      if ("3d" === i2.type) {
        if (0 === e6.length) return null;
        switch (r4) {
          case "move":
            return this._setupMove3DOperation(e6, a3, i2, r4);
          case "reshape":
            return e6.length > 1 ? (this._logError("sketch:reshape-multiple", "Reshape operation does not support multiple graphics."), null) : this._setupReshape3DOperation(e6[0], a3, i2);
          case "transform":
            return this._setupGraphicTransform3DOperation(e6, a3, i2);
        }
      }
      switch (r4) {
        case "move":
          return this._setupMove2DOperation(e6, a3, i2);
        case "reshape":
          return e6.length > 1 ? (this._logError("sketch:reshape-multiple", "Reshape operation does not support multiple graphics."), null) : this._setupTransformOrReshape2DOperation(e6, r4, a3, i2);
        case "transform":
          if (1 === e6.length) {
            const t2 = e6[0].geometry?.type;
            "point" !== t2 && "multipoint" !== t2 || (r4 = "reshape");
          }
          return this._setupTransformOrReshape2DOperation(e6, r4, a3, i2);
      }
    });
  }
  _setupMove3DOperation(e6, t, o2, i2, a3 = false) {
    return __async(this, null, function* () {
      const r4 = yield this._requireModule(import("./editingTools-J3URP33C.js"));
      if (ne(r4)) return r4;
      const {
        ManipulatedObject3DGraphic: s3,
        MoveTool3D: n6
      } = r4.module, p5 = /* @__PURE__ */ new Map(), l3 = () => {
        p5.forEach((e7) => e7.destroy()), p5.clear();
      };
      for (const u3 of e6) {
        const e7 = new s3({
          view: o2,
          graphic: u3
        }), t2 = r(e7);
        if (t2 !== P.SUPPORTED) return l3(), this._logError("sketch:move", `Move operation not supported for provided graphic(s) (${E(t2)}).`), null;
        p5.set(u3, e7);
      }
      const h4 = new n6({
        view: o2,
        enableZ: t.enableZ,
        snappingManager: this.snappingManager,
        sketchOptions: this.sketchOptions
      });
      o2.tools.add(h4), h4.objects.addMany(Array.from(p5.values())), a3 || this.updateGraphics.addMany(e6);
      const c4 = [], d3 = new i({
        activeComponent: h4,
        tool: i2,
        type: "update",
        onEnd: () => {
          c4.forEach((e7) => e7.remove()), c4.length = 0, o2.tools?.remove(h4), h4.destroyed || h4.destroy(), l3();
        },
        undo: () => {
          re(this.view, h4), oe(d3, this.updateGraphics.toArray()), this._emitUndoEvent({
            graphics: this.updateGraphics.toArray(),
            tool: i2
          });
        },
        redo: () => {
          ie(d3, this.updateGraphics.toArray()), this._emitRedoEvent({
            graphics: this.updateGraphics.toArray(),
            tool: i2
          });
        },
        addToSelection: (e7) => {
          this.updateGraphics.push(e7);
          const t2 = new s3({
            view: o2,
            graphic: e7
          });
          p5.set(e7, t2), h4.objects.push(t2), this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              added: [e7],
              removed: [],
              type: "selection-change"
            },
            type: "update"
          });
        },
        removeFromSelection: (e7) => {
          const t2 = this.updateGraphics.indexOf(e7);
          if (d3.history.undo.forEach((e8) => e8.updates.splice(t2, 1)), d3.history.redo.forEach((e8) => e8.updates.splice(t2, 1)), this.updateGraphics.remove(e7), this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              added: [],
              removed: [e7],
              type: "selection-change"
            },
            type: "update"
          }), 0 === this.updateGraphics.length) return void d3.complete();
          const o3 = p5.get(e7);
          o3 && (h4.objects.remove(o3), o3.destroy(), p5.delete(e7));
        },
        toggleTool: () => __async(this, null, function* () {
          if (1 !== this.updateGraphics.length || false === t.toggleToolOnClick) return;
          if ("transform" !== i2) return;
          const e7 = this.updateGraphics.at(0), a4 = yield this._setupReshape3DOperation(e7, t, o2, true);
          a4 && !ne(a4) && (d3.onEnd(), d3.destroy(), this._setUpdateOperationHandle(a4, t));
        })
      });
      return c4.push(...this._getHandlesForComponent(d3, t), o2.on("immediate-click", (e7) => this._getCommonUpdateOperationClickHandlers(d3, e7, t), _2.WIDGET), o2.on("key-down", (e7) => {
        this._getCommonUpdateOperationKeyDownHandlers(d3, e7);
      }, _2.WIDGET)), d3;
    });
  }
  _setupGraphicTransform3DOperation(e6, t, o2, i2 = false) {
    if (1 === e6.length && r3(e6[0]) === P.SUPPORTED) {
      const a3 = e6[0], r4 = a3.geometry;
      if (null != r4 && ("point" === r4.type || "mesh" === r4.type)) return this._setupPointTransform3DOperation(a3, t, o2);
      if (null != r4 && ("polygon" === r4.type || "polyline" === r4.type)) return this._setupPolyTransform3DOperation(a3, t, o2, i2);
    }
    return this._setupMove3DOperation(e6, t, o2, "transform", i2);
  }
  _setupPointTransform3DOperation(e6, t, o2) {
    return __async(this, null, function* () {
      const i2 = "transform", {
        enableRotation: a3,
        enableScaling: r4,
        enableZ: s3
      } = t, n6 = yield this._requireModule(import("./editingTools-J3URP33C.js"));
      if (ne(n6)) return n6;
      const {
        TransformTool3D: p5,
        ManipulatedObject3DGraphic: l3
      } = n6.module, h4 = new l3({
        graphic: e6,
        view: o2
      }), c4 = new p5({
        object: h4,
        view: o2,
        enableRotation: a3,
        enableScaling: r4,
        enableZ: s3,
        snappingManager: this.snappingManager,
        sketchOptions: this.sketchOptions
      });
      o2.tools.add(c4), this.updateGraphics.add(e6);
      const d3 = [], u3 = new i({
        activeComponent: c4,
        tool: i2,
        type: "update",
        onEnd: () => {
          d3.forEach((e7) => e7.remove()), d3.length = 0, o2.tools?.remove(c4), c4.destroyed || c4.destroy(), h4.destroy();
        },
        undo: () => {
          re(this.view, c4), oe(u3, this.updateGraphics.toArray()), this._emitUndoEvent({
            graphics: this.updateGraphics.toArray(),
            tool: i2
          });
        },
        redo: () => {
          ie(u3, this.updateGraphics.toArray()), this._emitRedoEvent({
            graphics: this.updateGraphics.toArray(),
            tool: i2
          });
        },
        addToSelection: (e7) => __async(this, null, function* () {
          this.updateGraphics.add(e7), this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              added: [e7],
              removed: [],
              type: "selection-change"
            },
            type: "update"
          }), u3.onEnd(), u3.destroy();
          const i3 = yield this._setupMove3DOperation(this.updateGraphics.toArray(), t, o2, "transform", true);
          ne(i3) || this._setUpdateOperationHandle(i3, t);
        }),
        removeFromSelection: (e7) => {
          this.updateGraphics.remove(e7), this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              added: [],
              removed: [e7],
              type: "selection-change"
            },
            type: "update"
          }), u3.complete();
        },
        toggleTool: () => {
        }
      });
      return d3.push(...this._getHandlesForComponent(u3, t), o2.on("immediate-click", (e7) => this._getCommonUpdateOperationClickHandlers(u3, e7, t), _2.WIDGET), o2.on("key-down", (e7) => {
        this._getCommonUpdateOperationKeyDownHandlers(u3, e7);
      }, _2.WIDGET)), u3;
    });
  }
  _setupPolyTransform3DOperation(e6, t, o2, i2 = false) {
    return __async(this, null, function* () {
      const a3 = "transform", {
        enableRotation: r4,
        enableScaling: s3,
        enableZ: n6,
        preserveAspectRatio: p5
      } = t, l3 = yield this._requireModule(import("./editingTools-J3URP33C.js"));
      if (ne(l3)) return l3;
      const {
        ManipulatedObject3DGraphic: h4,
        ExtentTransformTool: c4
      } = l3.module, d3 = this.view?.inputManager?.isModifierKeyDown(p2.constraint), u3 = new h4({
        view: o2,
        graphic: e6
      }), y3 = new c4({
        object: u3,
        view: o2,
        enableRotation: r4,
        enableScaling: s3,
        enableZ: n6,
        preserveAspectRatio: !!p5 != !!d3,
        sketchOptions: this.sketchOptions
      });
      o2.tools.add(y3), i2 || this.updateGraphics.add(e6);
      const m2 = [], v3 = new i({
        activeComponent: y3,
        tool: a3,
        type: "update",
        onEnd: () => {
          m2.forEach((e7) => e7.remove()), m2.length = 0, o2.tools?.remove(y3), y3.destroyed || y3.destroy(), u3.destroy();
        },
        canUndo: () => y3.canUndo,
        undo: () => {
          y3.undo(), this._emitUndoEvent({
            graphics: this.updateGraphics.toArray(),
            tool: a3
          });
        },
        canRedo: () => y3.canRedo,
        redo: () => {
          y3.redo(), this._emitRedoEvent({
            graphics: this.updateGraphics.toArray(),
            tool: a3
          });
        },
        addToSelection: (e7) => __async(this, null, function* () {
          this.updateGraphics.add(e7), this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              added: [e7],
              removed: [],
              type: "selection-change"
            },
            type: "update"
          }), v3.onEnd(), v3.destroy();
          const i3 = yield this._setupMove3DOperation(this.updateGraphics.toArray(), t, o2, "transform", true);
          ne(i3) || this._setUpdateOperationHandle(i3, t);
        }),
        removeFromSelection: (e7) => {
          this.updateGraphics.remove(e7), this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              added: [],
              removed: [e7],
              type: "selection-change"
            },
            type: "update"
          }), v3.complete();
        },
        toggleTool: () => __async(this, null, function* () {
          if (1 !== this.updateGraphics.length || false === t.toggleToolOnClick) return;
          const i3 = yield this._setupReshape3DOperation(e6, t, o2, true);
          i3 && !ne(i3) && (v3.onEnd(), v3.destroy(), this._setUpdateOperationHandle(i3, t));
        })
      });
      return m2.push(...this._getHandlesForComponent(v3, t), o2.on("immediate-click", (e7) => this._getCommonUpdateOperationClickHandlers(v3, e7, t), _2.WIDGET), o2.on("key-down", (e7) => this._getCommonUpdateOperationKeyDownHandlers(v3, e7), _2.WIDGET), o2.on("key-down", (e7) => {
        e7.key !== p2.constraint || e7.repeat || (y3.preserveAspectRatio = !y3.preserveAspectRatio, e7.stopPropagation());
      }, _2.WIDGET), o2.on("key-up", (e7) => {
        e7.key === p2.constraint && (y3.preserveAspectRatio = !y3.preserveAspectRatio, e7.stopPropagation());
      }, _2.WIDGET)), v3;
    });
  }
  _setupMove2DOperation(e6, t, o2) {
    return __async(this, null, function* () {
      const i2 = "move";
      this.updateGraphics.addMany(e6), yield this._updateSpatialReference(e6);
      const a3 = yield this._getGraphicMover(e6, t, o2);
      if (ne(a3)) return a3;
      const r4 = new i({
        activeComponent: a3,
        tool: i2,
        type: "update",
        onEnd: () => {
          this._displayDefaultCursor(), p5.forEach((e7) => e7.remove()), n6.forEach((e7) => e7.remove()), p5 = [], n6 = [], a3.destroy(), this._internalGraphicsLayer?.removeMany([...this.updateGraphics.toArray()]);
        },
        undo: () => {
          const e7 = this.updateGraphics.toArray();
          oe(r4, e7), r4.refreshComponent(), this._emitUndoEvent({
            graphics: e7,
            tool: i2
          });
        },
        redo: () => {
          const e7 = this.updateGraphics.toArray();
          ie(r4, e7), r4.refreshComponent(), this._emitRedoEvent({
            graphics: e7,
            tool: i2
          });
        },
        addToSelection: (e7) => __async(this, null, function* () {
          yield this._updateSpatialReference(e7), this.updateGraphics.push(e7), a3.graphics = this.updateGraphics.toArray(), this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              added: [e7],
              removed: [],
              type: "selection-change"
            },
            type: "update"
          });
        }),
        removeFromSelection: (e7) => {
          const t2 = this.updateGraphics.indexOf(e7);
          r4.history.undo.forEach((e8) => e8.updates.splice(t2, 1)), r4.history.redo.forEach((e8) => e8.updates.splice(t2, 1)), this.updateGraphics.remove(e7);
          const o3 = this.updateGraphics.toArray();
          this.emit("update", {
            graphics: o3,
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              added: [],
              removed: [e7],
              type: "selection-change"
            },
            type: "update"
          }), 0 !== this.updateGraphics.length ? a3.graphics = o3 : r4.complete();
        }
      });
      let s3 = false, n6 = [o2.on("immediate-click", (e7) => this._getCommonUpdateOperationClickHandlers(r4, e7, t), _2.WIDGET), o2.on("key-down", (e7) => {
        this._getCommonUpdateOperationKeyDownHandlers(r4, e7), e7.key !== p2.constraint || e7.repeat || (s3 = true, a3.enableMoveAllGraphics = !a3.enableMoveAllGraphics);
      }, _2.WIDGET), o2.on("key-up", (e7) => {
        e7.key === p2.constraint && s3 && (s3 = false, a3.enableMoveAllGraphics = !a3.enableMoveAllGraphics);
      }, _2.WIDGET)], p5 = this._getHandlesForComponent(r4, t);
      return r4;
    });
  }
  _setupReshape3DOperation(e6, t, o2, i2 = false) {
    return __async(this, null, function* () {
      const a3 = "reshape", r4 = yield this._requireModule(import("./editingTools-J3URP33C.js"));
      if (ne(r4)) return r4;
      const {
        ManipulatedObject3DGraphic: s3,
        ReshapeTool3D: n6
      } = r4.module, p5 = new s3({
        view: o2,
        graphic: e6
      }), l3 = e5(p5);
      if (l3 !== P.SUPPORTED) return p5.destroy(), this._logError("sketch:reshape", `Reshape operation not supported for provided graphic(s) (${E(l3)}).`), null;
      const h4 = t.reshapeOptions, c4 = new n6({
        view: o2,
        object: p5,
        enableZVertex: t.enableZ && "move" === h4?.vertexOperation,
        enableZShape: t.enableZ && "move" === h4?.shapeOperation,
        enableMoveObject: "move" === h4?.shapeOperation || "move-xy" === h4?.shapeOperation,
        enableMidpoints: "split" === h4?.edgeOperation,
        enableEdgeOffset: "offset" === h4?.edgeOperation,
        snappingManager: this.snappingManager,
        sketchOptions: this.sketchOptions
      });
      o2.tools.add(c4), i2 || this.updateGraphics.add(p5.graphic);
      const d3 = [], u3 = new i({
        activeComponent: c4,
        tool: a3,
        type: "update",
        onEnd: () => {
          d3.forEach((e7) => e7.remove()), d3.length = 0, o2.tools?.remove(c4), c4.destroyed || c4.destroy(), p5.destroy();
        },
        canUndo: () => c4.canUndo,
        undo: () => {
          c4.undo(), this._emitUndoEvent({
            graphics: this.updateGraphics.toArray(),
            tool: a3
          });
        },
        canRedo: () => c4.canRedo,
        redo: () => {
          c4.redo(), this._emitRedoEvent({
            graphics: this.updateGraphics.toArray(),
            tool: a3
          });
        },
        addToSelection: (e7) => __async(this, null, function* () {
          this.updateGraphics.add(e7), this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              added: [e7],
              removed: [],
              type: "selection-change"
            },
            type: "update"
          }), u3.onEnd(), u3.destroy();
          const i3 = yield this._setupMove3DOperation(this.updateGraphics.toArray(), t, o2, "transform", true);
          ne(i3) || this._setUpdateOperationHandle(i3, t);
        }),
        removeFromSelection: (e7) => {
          this.updateGraphics.remove(e7), this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              added: [],
              removed: [e7],
              type: "selection-change"
            },
            type: "update"
          }), u3.complete();
        },
        toggleTool: () => __async(this, null, function* () {
          if (false === t.toggleToolOnClick) return;
          u3.onEnd(), u3.destroy();
          const e7 = yield this._setupGraphicTransform3DOperation(this.updateGraphics.toArray(), t, o2, true);
          ne(e7) || this._setUpdateOperationHandle(e7, t);
        })
      });
      return d3.push(...this._getHandlesForComponent(u3, t), o2.on("immediate-click", (e7) => this._getCommonUpdateOperationClickHandlers(u3, e7, t), _2.WIDGET), o2.on("key-down", (e7) => {
        this._getCommonUpdateOperationKeyDownHandlers(u3, e7);
      }, _2.WIDGET)), u3;
    });
  }
  _setupTransformOrReshape2DOperation(e6, t, o2, i2) {
    return __async(this, null, function* () {
      this.updateGraphics.addMany(e6), yield this._updateSpatialReference(e6);
      const a3 = "transform" === t ? yield this._getBox(e6, o2, i2) : yield this._getReshape(e6, o2, i2);
      if (ne(a3)) return a3;
      const r4 = new i({
        activeComponent: a3,
        type: "update",
        onEnd: () => {
          n6.forEach((e7) => e7.remove()), s3.forEach((e7) => e7.remove()), n6 = [], s3 = [], r4.activeComponent && !r4.activeComponent.destroyed && r4.activeComponent.destroy(), this._internalGraphicsLayer.removeMany(this.updateGraphics.toArray());
        },
        undo: () => {
          oe(r4, this.updateGraphics.toArray()), r4.refreshComponent(), this._emitUndoEvent({
            graphics: this.updateGraphics.toArray(),
            tool: r4.tool
          });
        },
        redo: () => {
          ie(r4, this.updateGraphics.toArray()), r4.refreshComponent(), this._emitRedoEvent({
            graphics: this.updateGraphics.toArray(),
            tool: r4.tool
          });
        },
        addToSelection: (e7) => __async(this, null, function* () {
          let t2 = r4.activeComponent;
          if ("reshape" === t2?.type) {
            const t3 = [...this.updateGraphics, e7];
            this.updateGraphics.removeAll(), r4.onEnd(), r4.destroy();
            const a4 = yield this._setupTransformOrReshape2DOperation(t3, "transform", o2, i2);
            if (ne(a4)) return;
            this._setUpdateOperationHandle(a4, o2);
          } else this.updateGraphics.add(e7), t2.graphics = this.updateGraphics.toArray(), t2.refresh(), r4.resetHistory();
          this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              added: [e7],
              removed: [],
              type: "selection-change"
            },
            type: "update"
          });
        }),
        removeFromSelection: (e7) => __async(this, null, function* () {
          const t2 = this.updateGraphics.indexOf(e7);
          r4.history.undo.forEach((e8) => e8.updates.splice(t2, 1)), r4.history.redo.forEach((e8) => e8.updates.splice(t2, 1)), this.updateGraphics.remove(e7);
          const o3 = this.updateGraphics.toArray();
          if (0 === o3.length) r4.complete();
          else {
            const e8 = o3[0].geometry;
            1 !== o3.length || null == e8 || "point" !== e8.type && "multipoint" !== e8.type ? r4.activeComponent.graphics = o3 : r4.toggleTool();
          }
          this.emit("update", {
            graphics: o3,
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              added: [],
              removed: [e7],
              type: "selection-change"
            },
            type: "update"
          });
        }),
        toggleTool: () => __async(this, null, function* () {
          if (this.updateGraphics.length > 1) return;
          const e7 = this.updateGraphics.at(0), t2 = e7.geometry;
          if (null != t2 && ("reshape" === r4.tool && ("point" === t2.type || "multipoint" === t2.type) || "transform" === r4.tool && "extent" === t2.type)) return;
          let a4 = null;
          "transform" === r4.tool ? a4 = yield this._getReshape([e7], o2, i2) : "reshape" === r4.tool && (a4 = yield this._getBox([e7], o2, i2)), ne(a4) || (r4.activeComponent?.destroy(), r4.activeComponent = a4, r4.activeComponent && (n6.forEach((e8) => e8.remove()), n6 = this._getHandlesForComponent(r4, o2)));
        })
      });
      let s3 = [i2.on("immediate-click", (e7) => this._getCommonUpdateOperationClickHandlers(r4, e7, o2), _2.WIDGET), i2.on("key-down", (e7) => {
        if (this._getCommonUpdateOperationKeyDownHandlers(r4, e7), e7.key === p2.constraint && !e7.repeat && r4) {
          const e8 = r4.activeComponent;
          e8 && "box" === e8.type && (e8.preserveAspectRatio = !e8.preserveAspectRatio);
        }
      }, _2.WIDGET), i2.on("key-up", (e7) => {
        if (e7.key === p2.constraint && r4) {
          const e8 = r4.activeComponent;
          e8 && "box" === e8.type && (e8.preserveAspectRatio = !e8.preserveAspectRatio);
        }
      }, _2.WIDGET)], n6 = this._getHandlesForComponent(r4, o2);
      return r4;
    });
  }
  _getGraphicMover(e6, t, o2) {
    return __async(this, null, function* () {
      const {
        enableMoveAllGraphics: i2,
        highlightOptions: a3
      } = t, r4 = yield this._requireModule(import("./GraphicMover-IQNRFAFH.js"));
      return ne(r4) ? r4 : new r4.module.default({
        enableMoveAllGraphics: i2,
        highlightsEnabled: !!a3?.enabled,
        indicatorsEnabled: false,
        graphics: e6,
        view: o2,
        callbacks: {
          onGraphicMoveStart: ({
            dx: e7,
            dy: t2,
            graphic: o3
          }) => {
            this._displayGrabbingCursor(), this.emit("update", {
              graphics: this.updateGraphics.toArray(),
              state: "active",
              aborted: false,
              tool: this.activeTool,
              toolEventInfo: {
                dx: e7,
                dy: t2,
                mover: o3,
                type: "move-start"
              },
              type: "update"
            });
          },
          onGraphicMove: ({
            dx: e7,
            dy: t2,
            graphic: o3
          }) => this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              dx: e7,
              dy: t2,
              mover: o3,
              type: "move"
            },
            type: "update"
          }),
          onGraphicMoveStop: ({
            dx: e7,
            dy: t2,
            graphic: o3
          }) => {
            this._displayPointerCursor(), this.emit("update", {
              graphics: this.updateGraphics.toArray(),
              state: "active",
              aborted: false,
              tool: this.activeTool,
              toolEventInfo: {
                dx: e7,
                dy: t2,
                mover: o3,
                type: "move-stop"
              },
              type: "update"
            });
          },
          onGraphicPointerOver: () => this._displayPointerCursor(),
          onGraphicPointerOut: () => this._displayDefaultCursor()
        }
      });
    });
  }
  _getBox(e6, t, o2) {
    return __async(this, null, function* () {
      const {
        enableRotation: i2,
        enableScaling: a3,
        highlightOptions: r4,
        preserveAspectRatio: s3
      } = t, n6 = yield this._requireModule(import("./Box-6WOESIZZ.js"));
      if (ne(n6)) return n6;
      const p5 = this.view?.inputManager?.isModifierKeyDown(p2.constraint);
      return new n6.module.default({
        graphics: e6,
        enableRotation: i2,
        enableScaling: a3,
        highlightsEnabled: !!r4?.enabled,
        preserveAspectRatio: !!s3 != !!p5,
        layer: this._internalGraphicsLayer,
        view: o2,
        sketchOptions: this.sketchOptions,
        callbacks: {
          onMoveStart: (e7) => this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: __spreadValues({}, e7),
            type: "update"
          }),
          onMove: (e7) => this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: __spreadValues({}, e7),
            type: "update"
          }),
          onMoveStop: (e7) => this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: __spreadValues({}, e7),
            type: "update"
          }),
          onScaleStart: (e7) => this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: __spreadValues({}, e7),
            type: "update"
          }),
          onScale: (e7) => this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: __spreadValues({}, e7),
            type: "update"
          }),
          onScaleStop: (e7) => this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: __spreadValues({}, e7),
            type: "update"
          }),
          onRotateStart: (e7) => this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: __spreadValues({}, e7),
            type: "update"
          }),
          onRotate: (e7) => this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: __spreadValues({}, e7),
            type: "update"
          }),
          onRotateStop: (e7) => this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: __spreadValues({}, e7),
            type: "update"
          })
        }
      });
    });
  }
  _getReshape(e6, t, o2) {
    return __async(this, null, function* () {
      const i2 = "split" === t.reshapeOptions?.edgeOperation, a3 = "move" === t.reshapeOptions?.shapeOperation, r4 = !!t.highlightOptions?.enabled, s3 = yield this._requireModule(import("./Reshape-2OHDN6TJ.js"));
      return ne(s3) ? s3 : new s3.module.default({
        enableMidpoints: i2,
        enableMovement: a3,
        graphic: e6[0],
        highlightsEnabled: r4,
        layer: this._internalGraphicsLayer,
        snappingManager: this.snappingManager,
        sketchOptions: this.sketchOptions,
        view: o2,
        callbacks: {
          onReshapeStart: (e7) => this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: __spreadValues({}, e7),
            type: "update"
          }),
          onReshape: (e7) => this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: __spreadValues({}, e7),
            type: "update"
          }),
          onReshapeStop: ({
            mover: e7,
            type: t2
          }) => this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              mover: e7,
              type: t2
            },
            type: "update"
          }),
          onMoveStart: ({
            dx: e7,
            dy: t2,
            mover: o3,
            type: i3
          }) => this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              dx: e7,
              dy: t2,
              mover: o3,
              type: i3
            },
            type: "update"
          }),
          onMove: ({
            dx: e7,
            dy: t2,
            mover: o3,
            type: i3
          }) => this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              dx: e7,
              dy: t2,
              mover: o3,
              type: i3
            },
            type: "update"
          }),
          onMoveStop: ({
            dx: e7,
            dy: t2,
            mover: o3,
            type: i3
          }) => this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              dx: e7,
              dy: t2,
              mover: o3,
              type: i3
            },
            type: "update"
          }),
          onVertexAdd: ({
            added: e7,
            type: t2,
            vertices: o3
          }) => {
            const i3 = e7.map((e8) => e3(e8.geometry));
            this.emit("update", {
              graphics: this.updateGraphics.toArray(),
              state: "active",
              aborted: false,
              tool: this.activeTool,
              toolEventInfo: {
                added: i3,
                vertices: o3,
                type: t2
              },
              type: "update"
            });
          },
          onVertexRemove: ({
            removed: e7,
            type: t2,
            vertices: o3
          }) => {
            const i3 = e7.map((e8) => e3(e8.geometry));
            this.emit("update", {
              graphics: this.updateGraphics.toArray(),
              state: "active",
              aborted: false,
              tool: this.activeTool,
              toolEventInfo: {
                removed: i3,
                vertices: o3,
                type: t2
              },
              type: "update"
            });
          }
        }
      });
    });
  }
  _getHandlesForComponent(e6, t) {
    const o2 = e6.activeComponent;
    if (!o2) return [];
    switch (o2.type) {
      case "graphic-mover":
        return [o2.on("graphic-click", ({
          graphic: t2,
          viewEvent: o3
        }) => {
          o3.native?.shiftKey && (o3.stopPropagation(), e6.removeFromSelection(t2));
        }), o2.on("graphic-move-start", (t2) => e6.addToHistory(se(t2.allGraphics)))];
      case "box":
        return [o2.on("graphic-click", (o3) => this._onTransformOrReshape2DGraphicClick(e6, t, o3)), o2.on("move-start", (t2) => e6.addToHistory(se(t2.graphics))), o2.on("rotate-start", (t2) => e6.addToHistory(se(t2.graphics))), o2.on("scale-start", (t2) => e6.addToHistory(se(t2.graphics)))];
      case "reshape":
        return [o2.on("graphic-click", (o3) => this._onTransformOrReshape2DGraphicClick(e6, t, o3)), o2.on("move-start", (t2) => e6.addToHistory(se([t2.mover]))), o2.on("reshape-start", (t2) => e6.addToHistory(se([t2.graphic]))), o2.on("vertex-add", (t2) => e6.addToHistory(se([t2.oldGraphic]))), o2.on("vertex-remove", (t2) => e6.addToHistory(se([t2.oldGraphic])))];
      case "move-3d":
        return [o2.events.on("record-undo", ({
          updates: t2
        }) => {
          e6.addToHistory({
            updates: t2
          });
        }), o2.events.on("move-start", (e7) => {
          this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              dx: 0,
              dy: 0,
              mover: e7.objects.length > 0 ? e7.objects[0].graphic : null,
              type: "move-start"
            },
            type: "update"
          });
        }), o2.events.on("move", (e7) => {
          this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              dx: e7.dx,
              dy: e7.dy,
              mover: e7.objects.length > 0 ? e7.objects[0].graphic : null,
              type: "move"
            },
            type: "update"
          });
        }), o2.events.on("move-stop", (e7) => {
          this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              dx: 0,
              dy: 0,
              mover: e7.objects.length > 0 ? e7.objects[0].graphic : null,
              type: "move-stop"
            },
            type: "update"
          });
        }), o2.events.on("immediate-click", (o3) => {
          o3.shiftKey ? this._toggleSelection([o3.object.graphic], e6, t) : e6.toggleTool();
        })];
      case "transform-3d":
        return [o2.events.on("record-undo", ({
          updates: t2
        }) => {
          e6.addToHistory({
            updates: t2
          });
        }), o2.events.on("translate-start", (e7) => {
          this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              mover: e7.object.graphic,
              dx: e7.dxScreen,
              dy: e7.dyScreen,
              type: "move-start"
            },
            type: "update"
          });
        }), o2.events.on("translate-stop", (e7) => {
          this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              mover: e7.object.graphic,
              dx: e7.dxScreen,
              dy: e7.dyScreen,
              type: "move-stop"
            },
            type: "update"
          });
        }), o2.events.on("rotate-start", (e7) => {
          this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              mover: e7.object.graphic,
              angle: e7.angle,
              type: "rotate-start"
            },
            type: "update"
          });
        }), o2.events.on("rotate-stop", (e7) => {
          this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              mover: e7.object.graphic,
              angle: e7.angle,
              type: "rotate-stop"
            },
            type: "update"
          });
        }), o2.events.on("scale-start", (e7) => {
          this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              mover: e7.object.graphic,
              xScale: e7.xScale,
              yScale: e7.yScale,
              type: "scale-start"
            },
            type: "update"
          });
        }), o2.events.on("scale-stop", (e7) => {
          this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              mover: e7.object.graphic,
              xScale: e7.xScale,
              yScale: e7.yScale,
              type: "scale-stop"
            },
            type: "update"
          });
        }), o2.events.on("translate", (e7) => {
          this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              mover: e7.object.graphic,
              dx: e7.dxScreen,
              dy: e7.dyScreen,
              type: "move"
            },
            type: "update"
          });
        }), o2.events.on("rotate", (e7) => {
          this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              mover: e7.object.graphic,
              angle: e7.angle,
              type: "rotate"
            },
            type: "update"
          });
        }), o2.events.on("scale", (e7) => {
          this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: {
              mover: e7.object.graphic,
              xScale: e7.xScale,
              yScale: e7.yScale,
              type: "scale"
            },
            type: "update"
          });
        }), o2.events.on("immediate-click", (o3) => {
          o3.shiftKey ? this._toggleSelection([o3.object.graphic], e6, t) : e6.toggleTool();
        })];
      case "reshape-3d":
        return [o2.events.on("reshape", (e7) => {
          this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: __spreadProps(__spreadValues({}, e7), {
              mover: e7.object.graphic
            }),
            type: "update"
          });
        }), o2.events.on("move", (e7) => {
          this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: __spreadProps(__spreadValues({}, e7), {
              mover: e7.object.graphic
            }),
            type: "update"
          });
        }), o2.events.on("vertex-add", (e7) => {
          this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: e7,
            type: "update"
          });
        }), o2.events.on("vertex-remove", (e7) => {
          this.emit("update", {
            graphics: this.updateGraphics.toArray(),
            state: "active",
            aborted: false,
            tool: this.activeTool,
            toolEventInfo: e7,
            type: "update"
          });
        }), o2.events.on("immediate-click", (o3) => {
          o3.shiftKey ? this._toggleSelection([o3.object.graphic], e6, t) : e6.toggleTool();
        })];
    }
  }
  _onTransformOrReshape2DGraphicClick(e6, t, o2) {
    const {
      graphic: i2,
      viewEvent: a3
    } = o2;
    return a3.native?.shiftKey && i2.layer === this.layer ? (a3.stopPropagation(), e6.removeFromSelection(i2)) : t.toggleToolOnClick ? (a3.stopPropagation(), e6.toggleTool()) : void 0;
  }
  _setUpdateOperationHandle(e6, t) {
    this._operationHandle = e6;
    const o2 = this.view?.map;
    this._disablePopup(t);
    const i2 = () => {
      if (e6 === this._operationHandle) {
        const i3 = this.updateGraphics.toArray(), a3 = this._operationHandle.tool;
        this._operationHandle.destroy(), this._operationHandle = null, this._internalGraphicsLayer.removeMany(this.updateGraphics.toArray()), this.updateGraphics.removeAll(), o2 && o2.remove(this._internalGraphicsLayer), this._restorePopup(t), this.emit("update", {
          graphics: i3,
          state: "complete",
          aborted: e6.cancelled,
          tool: a3,
          toolEventInfo: null,
          type: "update"
        });
      }
    };
    e6.on("complete", i2);
  }
  _getCommonUpdateOperationClickHandlers(e6, t, o2) {
    return __async(this, null, function* () {
      const i2 = n3(t), a3 = yield t.async(() => this._getFirstHit(i2));
      if (null == a3) return void e6.complete();
      if (t.native.shiftKey && this._toggleSelection([a3.graphic], e6, o2)) return void t.stopPropagation();
      this.updateGraphics.includes(a3.graphic) ? t.stopPropagation() : e6.complete();
    });
  }
  _toggleSelection(e6, t, o2) {
    const i2 = !!o2.multipleSelectionEnabled;
    return e6.some((e7) => null != e7 && !(!i2 || e7.layer !== this.layer) && (this.updateGraphics.includes(e7) ? t.removeFromSelection(e7) : t.addToSelection(e7), true));
  }
  _getCommonUpdateOperationKeyDownHandlers(e6, t) {
    if (!e6) return;
    const o2 = t.key;
    o2 === p2.undo && e6.canUndo() ? (t.stopPropagation(), e6.undo()) : o2 === p2.redo && e6.canRedo() ? (t.stopPropagation(), e6.redo()) : o2 === p2.cancel ? (t.stopPropagation(), e6.cancel()) : this.allowDeleteKey && p2.delete.includes(o2) && this._onDeleteKey(t);
  }
  _onDeleteKey(e6) {
    if (!this._operationHandle || "update" !== this._operationHandle.type) return;
    const t = this.activeComponent, o2 = this.updateGraphics.toArray();
    null != t && ("reshape" !== t.type || 1 === o2.length && "point" === o2[0].geometry?.type) && (e6.stopPropagation(), this.delete());
  }
  _removeDefaultLayer() {
    this._internalGraphicsLayer && (this.view?.map?.remove(this._internalGraphicsLayer), this._internalGraphicsLayer = u(this._internalGraphicsLayer));
  }
  _isComponentGraphic(e6) {
    const {
      activeComponent: t
    } = this;
    return !(!e6 || null == t) && (e6.attributes?.esriSketchTool || "draw-2d" === t.type && t.graphic === e6 || ("box" === t.type || "reshape" === t.type) && t.isUIGraphic(e6));
  }
  _displayPointerCursor() {
    this.view?.container && "pointer" !== this.view.cursor && (this.view.cursor = "pointer");
  }
  _displayGrabbingCursor() {
    this.view?.container && "grabbing" !== this.view.cursor && (this.view.cursor = "grabbing");
  }
  _displayDefaultCursor() {
    this.view?.container && null !== this.view.cursor && (this.view.cursor = null);
  }
  _logError(e6, t, o2) {
    n.getLogger(this).error(new s(e6, t, o2));
  }
  _requireModule(e6) {
    return __async(this, null, function* () {
      const t = new AbortController();
      this._moduleLoaderAbortController = t;
      const o2 = yield e6;
      return this._moduleLoaderAbortController !== t || t.signal.aborted ? {
        requireError: "aborted"
      } : {
        module: o2
      };
    });
  }
  _emitUndoEvent(e6) {
    this.emit("undo", __spreadProps(__spreadValues({}, e6), {
      type: "undo"
    }));
  }
  _emitRedoEvent(e6) {
    this.emit("redo", __spreadProps(__spreadValues({}, e6), {
      type: "redo"
    }));
  }
  _emitDeleteEvent(e6) {
    this.emit("delete", __spreadProps(__spreadValues({}, e6), {
      type: "delete"
    }));
  }
  get test() {
  }
  wait() {
    return w(() => !this.updating);
  }
  _beginAsyncOperation() {
    this._numUpdating += 1, this.notifyChange("updating");
  }
  _endAsyncOperation() {
    this._numUpdating -= 1, this.notifyChange("updating");
  }
  _disablePopupEnabled(e6) {
    return "3d" !== this.view?.type || this.updateOnGraphicClick || (e6?.toggleToolOnClick ?? false);
  }
  _disablePopup(e6) {
    this._disablePopupEnabled(e6) && this.view && null == this._originalPopupEnabled && (this._originalPopupEnabled = this.view.popupEnabled, this.view.popupEnabled = false);
  }
  _restorePopup(e6) {
    this._disablePopupEnabled(e6) && this.view && null != this._originalPopupEnabled && (this.view.popupEnabled = this._originalPopupEnabled, this._originalPopupEnabled = null);
  }
  _waitViewReady() {
    return __async(this, null, function* () {
      const e6 = this.view;
      e6 ? (e(this._viewReadyAbortController), this._viewReadyAbortController = new AbortController(), yield h(w(() => e6?.ready), this._viewReadyAbortController.signal)) : this._logMissingView();
    });
  }
  _logMissingView() {
    this._logError("sketch:missing-property", ee("view"));
  }
  _logMissingLayer() {
    this._logError(X, ee("layer"));
  }
};
e2([y()], Q.prototype, "_defaultSnappingManager", void 0), e2([y()], Q.prototype, "updating", null), e2([y()], Q.prototype, "_operationHandle", void 0), e2([y({
  readOnly: true
})], Q.prototype, "activeTool", null), e2([y()], Q.prototype, "activeFillSymbol", void 0), e2([y()], Q.prototype, "activeLineSymbol", void 0), e2([y()], Q.prototype, "activeVertexSymbol", void 0), e2([y()], Q.prototype, "allowDeleteKey", void 0), e2([y({
  readOnly: true
})], Q.prototype, "createGraphic", null), e2([y()], Q.prototype, "defaultCreateOptions", null), e2([y()], Q.prototype, "defaultUpdateOptions", null), e2([y({
  type: c3,
  nonNullable: true
})], Q.prototype, "labelOptions", null), e2([y()], Q.prototype, "layer", void 0), e2([y({
  types: j
})], Q.prototype, "pointSymbol", void 0), e2([y({
  types: j
})], Q.prototype, "polygonSymbol", void 0), e2([y({
  types: j
})], Q.prototype, "polylineSymbol", void 0), e2([y()], Q.prototype, "meshSymbol", void 0), e2([y({
  type: c2,
  nonNullable: true
})], Q.prototype, "snappingOptions", null), e2([y()], Q.prototype, "snappingManager", null), e2([y({
  readOnly: true
})], Q.prototype, "state", null), e2([y({
  type: p3,
  nonNullable: true
})], Q.prototype, "tooltipOptions", null), e2([y({
  readOnly: true
})], Q.prototype, "updateGraphics", void 0), e2([y()], Q.prototype, "updateOnGraphicClick", void 0), e2([y({
  type: a2,
  nonNullable: true
})], Q.prototype, "valueOptions", null), e2([y({
  types: j
})], Q.prototype, "vertexSymbol", void 0), e2([y({
  value: null
})], Q.prototype, "view", null), e2([y({
  constructOnly: true,
  type: l2
})], Q.prototype, "sketchOptions", void 0), Q = e2([a("esri.widgets.Sketch.SketchViewModel")], Q);
var X = "sketch:missing-property";
var ee = (e6) => `Property '${e6}' is missing on SketchViewModel.`;
function te(e6) {
  return "polygon" === e6 || "rectangle" === e6 || "circle" === e6;
}
function oe(e6, t) {
  ae("undo", e6.history.undo, e6.history.redo, t);
}
function ie(e6, t) {
  ae("redo", e6.history.redo, e6.history.undo, t);
}
function ae(e6, t, o2, i2) {
  const a3 = t.pop();
  if (!a3) return;
  const r4 = a3.updates, s3 = [];
  i2.forEach((t2, o3) => {
    const i3 = r4[o3];
    null != i3 && ("geometry" in i3 && null != i3.geometry && (s3.push({
      geometry: t2.geometry
    }), t2.geometry = i3.geometry), "symbol" in i3 && null != i3.symbol && (s3.push({
      symbol: t2.symbol
    }), t2.symbol = i3.symbol), "undo" in i3 && (s3.push(i3), i3[e6](t2)));
  }), o2.push({
    updates: s3
  });
}
function re(e6, t) {
  null != e6 && t.hasGrabbedManipulators && (e6.activeTool = null);
}
function se(e6) {
  return {
    updates: e6.map(({
      geometry: e7
    }) => "mesh" === e7?.type ? {
      geometry: e7.cloneShallow()
    } : {
      geometry: e7
    })
  };
}
function ne(e6) {
  return "requireError" in e6 && "aborted" === e6.requireError;
}
var pe = Q;

export {
  pe
};
//# sourceMappingURL=chunk-66F7E2ZC.js.map
