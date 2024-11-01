import {
  f
} from "./chunk-43JJA43P.js";
import {
  F,
  F2,
  c,
  c2,
  e as e4,
  l as l2
} from "./chunk-LHQMQT36.js";
import {
  p as p3
} from "./chunk-OZB3UTFI.js";
import {
  e as e3
} from "./chunk-6VVHYTZ7.js";
import {
  n as n2
} from "./chunk-VRZ6RXNW.js";
import {
  E2 as E,
  P,
  a as a3,
  p
} from "./chunk-Q666VSL3.js";
import {
  p as p2
} from "./chunk-4SCJM64G.js";
import {
  n
} from "./chunk-FLWLBYXO.js";
import {
  _ as _2
} from "./chunk-2ERGO64O.js";
import {
  h
} from "./chunk-GT3AQDRW.js";
import {
  u as u2
} from "./chunk-6MR4UDDL.js";
import {
  e as e2
} from "./chunk-O2DTA3XK.js";
import {
  l
} from "./chunk-KKD7A2GN.js";
import {
  i
} from "./chunk-7ZJ6P7J7.js";
import {
  _
} from "./chunk-O7UDKFOW.js";
import {
  o
} from "./chunk-WGAPNV7F.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a2
} from "./chunk-DDYVXG4F.js";
import {
  d
} from "./chunk-HJY2YILU.js";
import {
  u
} from "./chunk-2MMLMOWS.js";
import {
  a
} from "./chunk-WYIDUUN2.js";
import {
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/draw/DrawAction.js
var v;
var f2 = v = class extends o.EventedAccessor {
  constructor(e6) {
    super(e6), this._hasZ = null, this._cursorScreenPoint = null, this._activePointerId = null, this._stagedVertexUnsnapped = null, this._lastVertexUnsnapped = null, this.interactiveUndoDisabled = false, this.history = [], this.redoHistory = [], this.snapToScene = false, this.view = null, this.elevationInfo = null, this.defaultZ = 0, this._coordinateHelper = P(!!e6.hasZ, false, e6.view.spatialReference), this._snappingManager = e6.snappingManager, this._editGeometryOperations = new E(new p(e6.editGeometryType ?? "polygon", this._coordinateHelper), l.Local), this._snappingGraphicsLayer = new h({
      id: v.SNAPPING_GRAPHICS_LAYER_ID,
      listMode: "hide",
      internal: true
    }), this._snappingContext = new e3({
      editGeometryOperations: this._editGeometryOperations,
      elevationInfo: {
        mode: "on-the-ground",
        offset: 0
      },
      pointer: "mouse",
      visualizer: new f(this._snappingGraphicsLayer)
    }), this._activeComponent = new a3(e6.view.spatialReference, l.Local), this._editGeometryOperations.data.components.push(this._activeComponent);
  }
  normalizeCtorArgs(e6) {
    const t = __spreadValues({}, e6);
    return delete t.editGeometryType, delete t.snappingManager, t;
  }
  initialize() {
    this._snappingOperation = new p3({
      view: this.view
    }), "2d" === this.view.type && this.view.map.layers.add(this._snappingGraphicsLayer);
  }
  destroy() {
    this.view.map.layers.remove(this._snappingGraphicsLayer), this._snappingGraphicsLayer.destroy(), null != this._snappingManager && this._snappingManager.doneSnapping(), this._snappingOperation = u(this._snappingOperation), this._editGeometryOperations.destroy();
  }
  get _committedVertices() {
    return this._editGeometryOperations.data.components[0].vertices.map((e6) => e6.pos);
  }
  get vertices() {
    return null != this._stagedVertex ? [...this._committedVertices, this._coordinateHelper.pointToArray(this._stagedVertex)] : this._committedVertices;
  }
  get hasZ() {
    return null != this._hasZ ? this._hasZ : "3d" === this.view.type;
  }
  set hasZ(e6) {
    this._hasZ = e6, this.notifyChange("hasZ");
  }
  get _stagedVertex() {
    return this._snappingOperation.stagedPoint;
  }
  set _stagedVertex(e6) {
    this._snappingOperation.stagedPoint = a(e6);
  }
  canUndo() {
    return this._editGeometryOperations.canUndo;
  }
  canRedo() {
    return this._editGeometryOperations.canRedo;
  }
  undo() {
    this.canUndo && this._editGeometryOperations.undo();
  }
  redo() {
    this.canRedo && this._editGeometryOperations.redo();
  }
  getCoordsFromScreenPoint(e6) {
    const t = e6 && this.screenToMap(e6);
    return null == t ? null : t.hasZ ? [t.x, t.y, t.z] : [t.x, t.y];
  }
  getCoordsAndPointFromScreenPoint(e6) {
    const t = this.screenToMap(e6);
    return null == t ? null : t.hasZ ? {
      vertex: [t.x, t.y, t.z],
      mapPoint: t
    } : {
      vertex: [t.x, t.y],
      mapPoint: t
    };
  }
  screenToMap(e6) {
    let t = null;
    if ("3d" === this.view.type) {
      if (this.hasZ) {
        const i3 = this.elevationInfo ?? x;
        t = this.view.sceneIntersectionHelper.intersectElevationFromScreen(i(e6.x, e6.y), i3, this._getGeometryZValue());
      } else {
        const i3 = this.elevationInfo ?? G;
        t = this.view.sceneIntersectionHelper.intersectElevationFromScreen(i(e6.x, e6.y), i3, 0), null != t && (t.z = void 0);
      }
    } else t = this.view.toMap(e6), null != t && (t.z = this.hasZ ? this._getGeometryZValue() : void 0);
    return t;
  }
  _pushCursorVertex(e6, t) {
    const i3 = e2(e6[0], e6[1], void 0, this.view.spatialReference);
    this._stagedVertexUnsnapped = i3;
    const r2 = this._snappingManager;
    if (null == r2) return this._stagedVertex = i3, void t();
    d(this._snappingOperation.snap({
      point: i3
    }, r2, this._snappingContext)).then(() => {
      t();
    });
  }
  _popCursorVertex() {
    this._stagedVertexUnsnapped = null, this._stagedVertex = null;
  }
  _getGeometryZValue() {
    return this.defaultZ;
  }
  _abortSnapping() {
    this._snappingOperation.abort();
  }
  _isDuplicateOfLastVertex(e6) {
    const t = this._editGeometryOperations.data.components[0].getLastVertex()?.pos;
    if (t && e6[0] === t[0] && e6[1] === t[1]) return true;
    const {
      x: i3,
      y: r2
    } = this._coordinateHelper.vectorToDehydratedPoint(e6);
    return null != this._lastVertexUnsnapped && i3 === this._lastVertexUnsnapped.x && r2 === this._lastVertexUnsnapped.y;
  }
  _shouldHandlePointerEvent(e6) {
    return w(e6) && (null == this._activePointerId || this._activePointerId === e6.pointerId);
  }
  _vertexAddHandler(e6) {
    const t = null != this._stagedVertex ? this._coordinateHelper.pointToArray(this._stagedVertex) : this.getCoordsFromScreenPoint(this._cursorScreenPoint);
    null != t && this._addVertex(t, e6.native);
  }
  _drawCompleteHandler(e6) {
    this._completeDrawing(e6.native);
  }
};
f2.SNAPPING_GRAPHICS_LAYER_ID = "DrawAction-snapping-graphics-layer", e([y({
  readOnly: true
})], f2.prototype, "vertices", null), e([y({
  type: Boolean,
  nonNullable: true
})], f2.prototype, "interactiveUndoDisabled", void 0), e([y({
  readOnly: true
})], f2.prototype, "history", void 0), e([y({
  readOnly: true
})], f2.prototype, "redoHistory", void 0), e([y()], f2.prototype, "snapToScene", void 0), e([y()], f2.prototype, "view", void 0), e([y()], f2.prototype, "elevationInfo", void 0), e([y({
  nonNullable: true
})], f2.prototype, "defaultZ", void 0), e([y()], f2.prototype, "hasZ", null), e([y()], f2.prototype, "_snappingOperation", void 0), e([y()], f2.prototype, "_stagedVertex", null), f2 = v = e([a2("esri.views.draw.DrawAction")], f2);
var x = {
  mode: "absolute-height",
  offset: 0
};
var G = {
  mode: "on-the-ground",
  offset: 0
};
function w(e6) {
  return "mouse" !== e6.pointerType || 0 === e6.button;
}
var V = f2;

// ../../../node_modules/@arcgis/core/views/draw/input/DrawEvents.js
var e5 = class {
  constructor(e6, t, s2) {
    this.view = e6, this.vertexIndex = t, this.vertices = s2, this.defaultPrevented = false, this.type = "vertex-add";
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
};
var s = class {
  constructor(e6, t, s2) {
    this.view = e6, this.vertexIndex = t, this.vertices = s2, this.defaultPrevented = false, this.type = "vertex-remove";
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
};
var i2 = class {
  constructor(e6, t, s2, i3 = null) {
    this.view = e6, this.vertexIndex = t, this.vertices = s2, this.mapPoint = i3, this.coordinates = null, this.defaultPrevented = false, this.type = "cursor-update", this.coordinates = 1 === s2.length ? s2[0] : null;
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
};
var r = class {
  constructor(e6) {
    this.vertices = e6, this.coordinates = null, this.defaultPrevented = false, this.type = "draw-complete", this.coordinates = 1 === e6.length ? e6[0] : null;
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
};

// ../../../node_modules/@arcgis/core/views/draw/MultipointDrawAction.js
var l3 = Symbol("view-handles");
var c3 = Symbol("undo-redo-handles");
var _3 = class extends V {
  constructor(e6) {
    super(e6), this._popVertexOnPointerMove = false, this._addVertexOnPointerUp = false;
  }
  initialize() {
    this._addViewHandles(), this._addUndoRedoHandles();
  }
  destroy() {
    this._removeViewHandles(), this._removeUndoRedoHandles(), this.emit("destroy");
  }
  undo() {
    super.undo(), this.notifyChange("vertices");
  }
  redo() {
    super.redo(), this.notifyChange("vertices");
  }
  complete() {
    this._completeDrawing();
  }
  _addViewHandles() {
    this._removeViewHandles(), this.addHandles([this.view.on("click", (e6) => {
      e6.stopPropagation();
    }, _2.TOOL), this.view.on("pointer-down", (e6) => {
      this._shouldHandlePointerEvent(e6) && (this._abortSnapping(), this._activePointerId = e6.pointerId, this._addVertexOnPointerUp = true, this._cursorScreenPoint = n(e6), "touch" === e6.pointerType && this._updateCursor());
    }, _2.TOOL), this.view.on("pointer-move", (e6) => {
      this._popVertexOnPointerMove && (this.undo(), this._popVertexOnPointerMove = false), this._abortSnapping(), this._cursorScreenPoint = n(e6), "touch" !== e6.pointerType && this._updateCursor();
    }, _2.TOOL), this.view.on("pointer-drag", (e6) => {
      this._shouldHandlePointerEvent(e6) && (this._abortSnapping(), this._addVertexOnPointerUp = false);
    }, _2.TOOL), this.view.on("pointer-up", (e6) => {
      if (this._shouldHandlePointerEvent(e6)) if (this._abortSnapping(), this._activePointerId = null, this._addVertexOnPointerUp) this._vertexAddHandler(e6);
      else {
        const t = "touch" === e6.pointerType;
        this._updateCursor(t);
      }
    }, _2.TOOL), this.view.on("drag", ["Shift"], (e6) => {
      e6.stopPropagation();
    }, _2.TOOL), this.view.on("double-click", (e6) => {
      e6.stopPropagation(), this._drawCompleteHandler(e6);
    }, _2.TOOL), this.view.on("double-click", ["Control"], (e6) => {
      e6.stopPropagation(), this._drawCompleteHandler(e6);
    }, _2.TOOL), this.view.on("key-down", (e6) => {
      const {
        key: t,
        repeat: i3
      } = e6;
      t === p2.vertexAdd && !i3 && this._cursorScreenPoint ? (e6.stopPropagation(), this._abortSnapping(), this._vertexAddHandler(e6)) : t !== p2.complete || i3 ? t !== p2.undo || this.interactiveUndoDisabled || i3 ? t !== p2.redo || this.interactiveUndoDisabled || i3 ? t !== p2.pan || i3 || e6.stopPropagation() : (e6.stopPropagation(), this.redo()) : (e6.stopPropagation(), this.undo()) : (e6.stopPropagation(), this._drawCompleteHandler(e6));
    }, _2.TOOL), this.view.on("key-up", (e6) => {
      e6.key === p2.pan && e6.stopPropagation();
    }, _2.TOOL)], l3);
  }
  _addUndoRedoHandles() {
    this._removeUndoRedoHandles(), this.addHandles([this._editGeometryOperations.on("vertex-remove", (e6) => {
      if (this.notifyChange("vertices"), "undo" === e6.operation) {
        const t = [...this._committedVertices];
        null != this._stagedVertex && t.push(this._coordinateHelper.pointToArray(this._stagedVertex)), this.emit("undo", new s(this.view, e6.vertices[0].index, t));
      }
    }), this._editGeometryOperations.on("vertex-add", (e6) => {
      if (this.notifyChange("vertices"), "apply" === e6.operation) {
        const e7 = this._committedVertices.length - 1, t = new e5(this.view, e7, this.vertices);
        this.emit("vertex-add", t), t.defaultPrevented && (this._popVertexOnPointerMove = true);
      } else if ("redo" === e6.operation) {
        const t = [...this._committedVertices];
        null != this._stagedVertex && t.push(this._coordinateHelper.pointToArray(this._stagedVertex)), this.emit("redo", new e5(this.view, e6.vertices[0].index, t));
      }
    })], c3);
  }
  _removeViewHandles() {
    this.removeHandles(l3);
  }
  _removeUndoRedoHandles() {
    this.removeHandles(c3);
  }
  _addVertex(e6) {
    const t = this._coordinateHelper.arrayToVector(e6);
    this._isDuplicateOfLastVertex(t) || this._editGeometryOperations.appendVertex(t);
  }
  _updateCursor(e6 = false) {
    if (this._popCursorVertex(), !this._cursorScreenPoint) return;
    const t = this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);
    null == t || e6 || this._pushCursorVertex(t.vertex, () => this.emit("cursor-update", new i2(this.view, this._activeComponent.vertices.length, this.vertices, null != this._stagedVertex ? new _(this._stagedVertex) : null)));
  }
  _completeDrawing() {
    if (this._activePointerId = null, this._popCursorVertex(), this._abortSnapping(), null != this._snappingManager && this._snappingManager.doneSnapping(), this.vertices.length < 1) return;
    const e6 = new r(this.vertices);
    this.emit("draw-complete", e6), e6.defaultPrevented || this._removeViewHandles();
  }
};
_3 = e([a2("esri.views.draw.MultipointDrawAction")], _3);

// ../../../node_modules/@arcgis/core/views/draw/DrawTool.js
var l4 = class extends o.EventedMixin(n2) {
  constructor(e6) {
    super(e6), this.defaultZ = 0, this.elevationInfo = null, this.hasZ = true, this.mode = null, this.snapToScene = null, this.type = "draw-3d";
  }
  initialize() {
    const e6 = this.view, t = u2(this.hasZ, this.elevationInfo);
    this.drawOperation = new F2({
      view: e6,
      manipulators: this.manipulators,
      geometryType: this.geometryType,
      drawingMode: this.mode,
      hasZ: this.hasZ,
      defaultZ: this.defaultZ,
      snapToSceneEnabled: this.snapToScene,
      drawSurface: "3d" === e6.type ? new l2(e6, t) : null,
      elevationDrawSurface: "3d" === e6.type ? new c2(t, this.defaultZ, e6) : null,
      hasM: false,
      elevationInfo: t
    }), this.addHandles([this.drawOperation.on("vertex-add", (e7) => this.onVertexAdd(e7)), this.drawOperation.on("vertex-remove", (e7) => this.onVertexRemove(e7)), this.drawOperation.on("vertex-update", (e7) => this.onVertexUpdate(e7)), this.drawOperation.on("cursor-update", (e7) => this.onCursorUpdate(e7)), this.drawOperation.on("complete", (e7) => this.onComplete(e7))]), this.finishToolCreation();
  }
  destroy() {
    this.drawOperation = u(this.drawOperation), this._set("view", null);
  }
  set enabled(e6) {
    this.drawOperation.interactive = e6, this._set("enabled", e6);
  }
  get updating() {
    return this.drawOperation?.updating ?? false;
  }
  completeCreateOperation() {
    this.drawOperation.complete();
  }
  onDeactivate() {
    this.drawOperation.isCompleted || this.drawOperation.cancel();
  }
  getVertexCoords() {
    return this.drawOperation.geometryIncludingUncommittedVertices;
  }
  onInputEvent(e6) {
    this.drawOperation.onInputEvent(e6);
  }
  canRedo() {
    return this.drawOperation.canRedo;
  }
  canUndo() {
    return this.drawOperation.canUndo;
  }
  redo() {
    this.drawOperation.redo();
  }
  reset() {
  }
  undo() {
    this.drawOperation.undo();
  }
  onComplete(e6) {
    this.emit("complete", e6);
  }
  onCursorUpdate(e6) {
    this.emit("cursor-update", e6);
  }
  onVertexAdd(e6) {
    this.emit("vertex-add", e6);
  }
  onVertexRemove(e6) {
    this.emit("vertex-remove", e6);
  }
  onVertexUpdate(e6) {
    this.emit("vertex-update", e6);
  }
};
e([y({
  constructOnly: true,
  nonNullable: true
})], l4.prototype, "defaultZ", void 0), e([y()], l4.prototype, "drawOperation", void 0), e([y({
  constructOnly: true
})], l4.prototype, "elevationInfo", void 0), e([y({
  value: true
})], l4.prototype, "enabled", null), e([y({
  constructOnly: true
})], l4.prototype, "geometryType", void 0), e([y({
  constructOnly: true
})], l4.prototype, "hasZ", void 0), e([y({
  constructOnly: true
})], l4.prototype, "mode", void 0), e([y()], l4.prototype, "snapToScene", void 0), e([y({
  readOnly: true
})], l4.prototype, "type", void 0), e([y({
  readOnly: true
})], l4.prototype, "updating", null), e([y({
  constructOnly: true,
  nonNullable: true
})], l4.prototype, "view", void 0), l4 = e([a2("esri.views.draw.DrawTool")], l4);

// ../../../node_modules/@arcgis/core/views/draw/PointDrawAction.js
var h2 = class extends V {
  constructor(e6) {
    super(e6), this._addVertexOnPointerUp = false, this._drawTool = null;
  }
  initialize() {
    this._addViewHandles(), "3d" === this.view.type && this._addDrawTool();
  }
  destroy() {
    this._removeDrawTool(), this.emit("destroy");
  }
  complete() {
    this._completeDrawing();
  }
  _addViewHandles() {
    this._addViewHandles2DOnly(), this.addHandles([this.view.on("key-down", (e6) => {
      e6.key === p2.complete && (this._drawTool ? this.complete() : (this._abortSnapping(), this._vertexAddHandler(e6)));
    }, _2.TOOL)]);
  }
  _addViewHandles2DOnly() {
    "2d" === this.view.type && this.addHandles([this.view.on("pointer-down", (e6) => {
      this._shouldHandlePointerEvent(e6) && (this._abortSnapping(), this._activePointerId = e6.pointerId, this._addVertexOnPointerUp = true, this._cursorScreenPoint = n(e6), "touch" === e6.pointerType && this._updateCursor());
    }, _2.TOOL), this.view.on("pointer-move", (e6) => {
      this._abortSnapping(), this._cursorScreenPoint = n(e6), "touch" !== e6.pointerType && this._updateCursor();
    }, _2.TOOL), this.view.on("pointer-drag", (e6) => {
      this._shouldHandlePointerEvent(e6) && (this._abortSnapping(), this._addVertexOnPointerUp = false);
    }, _2.TOOL), this.view.on("pointer-up", (e6) => {
      if (this._shouldHandlePointerEvent(e6)) if (this._abortSnapping(), this._activePointerId = null, this._addVertexOnPointerUp) e6.stopPropagation(), this._vertexAddHandler(e6);
      else {
        const t = "touch" === e6.pointerType;
        this._updateCursor(t);
      }
    }, _2.TOOL), this.view.on("drag", ["Shift"], (e6) => {
      e6.stopPropagation();
    }, _2.TOOL)]);
  }
  _addDrawTool() {
    const e6 = new l4({
      view: this.view,
      elevationInfo: this.elevationInfo,
      hasZ: this.hasZ,
      geometryType: "point",
      mode: "click"
    });
    this._drawTool = e6, this.view.addAndActivateTool(e6), this.addHandles([e6.on("cursor-update", (t) => {
      1 === t.vertices.length && this.emit("cursor-update", new i2(this.view, t.vertices[0].vertexIndex, e6.getVertexCoords()));
    }), e6.on("complete", (t) => {
      this.emit("draw-complete", new r(e6.getVertexCoords())), this._removeDrawTool(), this.removeAllHandles();
    })]);
  }
  _removeDrawTool() {
    this._drawTool && (this.view.tools.remove(this._drawTool), this._drawTool = null);
  }
  _addVertex(e6) {
    const t = this._coordinateHelper.arrayToVector(e6);
    this._isDuplicateOfLastVertex(t) || (this._lastVertexUnsnapped = this._stagedVertexUnsnapped, this._popCursorVertex(), this._editGeometryOperations.appendVertex(t), this.notifyChange("vertices"), this._completeDrawing());
  }
  _updateCursor(e6 = false) {
    if (this._popCursorVertex(), !this._cursorScreenPoint) return;
    const t = this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);
    null == t || e6 || this._pushCursorVertex(t.vertex, () => this.emit("cursor-update", new i2(this.view, this._activeComponent.vertices.length, this.vertices, null != this._stagedVertex ? new _(this._stagedVertex) : null)));
  }
  _completeDrawing() {
    if (this._drawTool) return void this._drawTool.completeCreateOperation();
    this._activePointerId = null, this._popCursorVertex(), this._abortSnapping(), null != this._snappingManager && this._snappingManager.doneSnapping();
    const e6 = new r(this.vertices);
    this.emit("draw-complete", e6), e6.defaultPrevented || this.removeAllHandles();
  }
};
h2 = e([a2("esri.views.draw.PointDrawAction")], h2);

// ../../../node_modules/@arcgis/core/views/draw/PolygonDrawAction.js
var m = class extends V {
  constructor(e6) {
    super(e6), this._panEnabled = false, this._popVertexOnPointerMove = false, this._addVertexOnPointerUp = false, this._drawTool = null, this.mode = e4;
  }
  initialize() {
    this._addViewHandles(), "3d" === this.view.type && this._addDrawTool();
  }
  destroy() {
    this._removeDrawTool(), this.emit("destroy");
  }
  get _dragEnabled() {
    return "freehand" === this.mode || "hybrid" === this.mode;
  }
  get _clickEnabled() {
    return "click" === this.mode || "hybrid" === this.mode;
  }
  undo() {
    this._drawTool ? this._drawTool.undo() : (super.undo(), this.notifyChange("vertices"));
  }
  redo() {
    this._drawTool ? this._drawTool.redo() : (super.redo(), this.notifyChange("vertices"));
  }
  canUndo() {
    return this._drawTool?.canUndo() ?? super.canUndo();
  }
  canRedo() {
    return this._drawTool?.canRedo() ?? super.canRedo();
  }
  complete() {
    this._completeDrawing();
  }
  _getGeometryZValue() {
    return this.hasZ && this.vertices.length > 0 ? this.vertices[0][2] : this.defaultZ;
  }
  _addViewHandles() {
    this._addViewHandles2DOnly(), this.addHandles(this.view.on("key-down", (e6) => {
      const {
        key: t,
        repeat: i3
      } = e6;
      t !== p2.vertexAdd || i3 ? t !== p2.complete || i3 ? t !== p2.undo || this.interactiveUndoDisabled || i3 ? t !== p2.redo || this.interactiveUndoDisabled || i3 || (e6.stopPropagation(), this.redo()) : (e6.stopPropagation(), this.undo()) : (e6.stopPropagation(), this._drawCompleteHandler(e6)) : (e6.stopPropagation(), this._handleVertexAddKey(e6));
    }, _2.TOOL));
  }
  _addViewHandles2DOnly() {
    "2d" === this.view.type && (this.addHandles([this.view.on("click", (e6) => {
      e6.stopPropagation();
    }, _2.TOOL), this.view.on("pointer-down", (e6) => {
      this._shouldHandlePointerEvent(e6) && (this._abortSnapping(), this._activePointerId = e6.pointerId, this._addVertexOnPointerUp = true, this._cursorScreenPoint = n(e6), "touch" === e6.pointerType && this._updateCursor());
    }, _2.TOOL), this.view.on("pointer-move", (e6) => {
      this._abortSnapping(), this._popVertexOnPointerMove && (this.undo(), this._popVertexOnPointerMove = false), this._cursorScreenPoint = n(e6), "touch" !== e6.pointerType && this._updateCursor();
    }, _2.TOOL), this.view.on("pointer-drag", (e6) => {
      this._shouldHandlePointerEvent(e6) && (this._abortSnapping(), this._cursorScreenPoint = n(e6), this._dragEnabled && !this._panEnabled ? this._vertexAddHandler(e6) : this._addVertexOnPointerUp = false);
    }, _2.TOOL), this.view.on("pointer-up", (e6) => {
      if (this._shouldHandlePointerEvent(e6)) if (this._abortSnapping(), this._activePointerId = null, this._addVertexOnPointerUp) {
        if (!this._clickEnabled) return 1 === this.vertices.length && this.vertices.pop(), void this._drawCompleteHandler(e6);
        this._vertexAddHandler(e6);
      } else {
        const t = "touch" === e6.pointerType;
        this._updateCursor(t);
      }
    }, _2.TOOL), this.view.on("drag", (e6) => {
      this._dragEnabled && null != this._activePointerId && !this._panEnabled && e6.stopPropagation();
    }, _2.TOOL), this.view.on("drag", ["Shift"], (e6) => {
      e6.stopPropagation();
    }, _2.TOOL), this.view.on("double-click", (e6) => {
      e6.stopPropagation(), this._drawCompleteHandler(e6);
    }, _2.TOOL), this.view.on("double-click", ["Control"], (e6) => {
      e6.stopPropagation(), this._drawCompleteHandler(e6);
    }, _2.TOOL), this.view.on("key-down", (e6) => {
      const {
        key: t,
        repeat: i3
      } = e6;
      t !== p2.pan || i3 || (e6.stopPropagation(), this._panEnabled = true);
    }, _2.TOOL), this.view.on("key-up", (e6) => {
      e6.key === p2.pan && (e6.stopPropagation(), this._panEnabled = false);
    }, _2.TOOL)]), this._addUndoRedoHandles());
  }
  _handleVertexAddKey(e6) {
    this._drawTool ? this._drawTool.drawOperation.commitStagedVertex() : this._cursorScreenPoint && (this._abortSnapping(), this._vertexAddHandler(e6));
  }
  _addUndoRedoHandles() {
    this.addHandles([this._editGeometryOperations.on("vertex-remove", (e6) => {
      if (this.notifyChange("vertices"), "undo" === e6.operation) {
        const t = [...this._committedVertices];
        null != this._stagedVertex && t.push(this._coordinateHelper.pointToArray(this._stagedVertex)), this.emit("undo", new s(this.view, e6.vertices[0].index, t));
      }
    }), this._editGeometryOperations.on("vertex-add", (e6) => {
      if (this.notifyChange("vertices"), "apply" === e6.operation) {
        const e7 = this._committedVertices.length - 1, t = new e5(this.view, e7, this.vertices);
        this.emit("vertex-add", t), t.defaultPrevented && (this._popVertexOnPointerMove = true);
      } else if ("redo" === e6.operation) {
        const t = [...this._committedVertices];
        null != this._stagedVertex && t.push(this._coordinateHelper.pointToArray(this._stagedVertex)), this.emit("redo", new e5(this.view, e6.vertices[0].index, t));
      }
    })]);
  }
  _addDrawTool() {
    const e6 = new l4({
      view: this.view,
      elevationInfo: this.elevationInfo,
      hasZ: this.hasZ,
      geometryType: "polygon",
      mode: this.mode
    });
    this._drawTool = e6, this.view.addAndActivateTool(e6), e6.on("vertex-add", (t) => {
      if (1 === t.vertices.length) {
        const {
          view: i3
        } = this, o2 = t.vertices[0].vertexIndex, r2 = e6.getVertexCoords();
        this.emit("vertex-add", new e5(i3, o2, r2)), "undo" !== t.operation && "redo" !== t.operation || this.emit(t.operation, new e5(i3, o2, r2));
      }
    }), e6.on("vertex-remove", (t) => {
      if (1 === t.vertices.length) {
        const {
          view: i3
        } = this, o2 = t.vertices[0].vertexIndex, r2 = e6.getVertexCoords();
        this.emit("vertex-remove", new s(i3, o2, r2)), "undo" !== t.operation && "redo" !== t.operation || this.emit(t.operation, new s(i3, o2, r2));
      }
    }), e6.on("cursor-update", (t) => {
      1 === t.vertices.length && this.emit("cursor-update", new i2(this.view, t.vertices[0].vertexIndex, e6.getVertexCoords()));
    }), e6.on("complete", (t) => {
      this.emit("draw-complete", new r(e6.getVertexCoords())), this._removeDrawTool(), this.removeAllHandles();
    });
  }
  _removeDrawTool() {
    this._drawTool && (this.view.tools.remove(this._drawTool), this._drawTool = null);
  }
  _addVertex(e6) {
    const t = this._coordinateHelper.arrayToVector(e6);
    this._isDuplicateOfLastVertex(t) || (this._lastVertexUnsnapped = this._stagedVertexUnsnapped, this._popCursorVertex(), this._editGeometryOperations.appendVertex(t));
  }
  _updateCursor(e6 = false) {
    if (this._popCursorVertex(), !this._cursorScreenPoint) return;
    const t = this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);
    null == t || e6 || this._pushCursorVertex(t.vertex, () => this.emit("cursor-update", new i2(this.view, this._activeComponent.vertices.length, this.vertices, null != this._stagedVertex ? new _(this._stagedVertex) : null)));
  }
  _completeDrawing() {
    if (this._drawTool) return void this._drawTool.completeCreateOperation();
    if (this._activePointerId = null, this._popCursorVertex(), this._committedVertices.length < 3) return;
    this._abortSnapping(), null != this._snappingManager && this._snappingManager.doneSnapping();
    const e6 = new r(this.vertices);
    this.emit("draw-complete", e6), e6.defaultPrevented || this.removeAllHandles();
  }
};
e([y()], m.prototype, "_dragEnabled", null), e([y()], m.prototype, "_clickEnabled", null), e([y({
  type: c
})], m.prototype, "mode", void 0), m = e([a2("esri.views.draw.PolygonDrawAction")], m);

// ../../../node_modules/@arcgis/core/views/draw/PolylineDrawAction.js
var m2 = class extends V {
  constructor(e6) {
    super(e6), this._panEnabled = false, this._popVertexOnPointerMove = false, this._addVertexOnPointerUp = false, this._drawTool = null, this.mode = e4;
  }
  initialize() {
    this._addViewHandles(), "3d" === this.view.type && this._addDrawTool();
  }
  destroy() {
    this._removeDrawTool(), this.emit("destroy");
  }
  get _clickEnabled() {
    return "click" === this.mode || "hybrid" === this.mode;
  }
  get _dragEnabled() {
    return "freehand" === this.mode || "hybrid" === this.mode;
  }
  undo() {
    this._drawTool ? this._drawTool.undo() : (super.undo(), this.notifyChange("vertices"));
  }
  redo() {
    this._drawTool ? this._drawTool.redo() : (super.redo(), this.notifyChange("vertices"));
  }
  canUndo() {
    return this._drawTool?.canUndo() ?? super.canUndo();
  }
  canRedo() {
    return this._drawTool?.canRedo() ?? super.canRedo();
  }
  complete() {
    this._completeDrawing();
  }
  _addViewHandles() {
    this._addViewHandles2DOnly(), this.addHandles([this.view.on("key-down", (e6) => {
      const {
        key: t,
        repeat: i3
      } = e6;
      t !== p2.vertexAdd || i3 ? t !== p2.complete || i3 ? t !== p2.undo || this.interactiveUndoDisabled || i3 ? t !== p2.redo || this.interactiveUndoDisabled || i3 || (e6.stopPropagation(), this.redo()) : (e6.stopPropagation(), this.undo()) : (e6.stopPropagation(), this._drawCompleteHandler(e6)) : (e6.stopPropagation(), this._handleVertexAddKey(e6));
    }, _2.TOOL)]);
  }
  _addViewHandles2DOnly() {
    "2d" === this.view.type && (this.addHandles([this.view.on("click", (e6) => {
      e6.stopPropagation();
    }, _2.TOOL), this.view.on("pointer-down", (e6) => {
      this._shouldHandlePointerEvent(e6) && !this._panEnabled && (this._abortSnapping(), this._activePointerId = e6.pointerId, this._addVertexOnPointerUp = true, this._cursorScreenPoint = n(e6), "touch" === e6.pointerType && this._updateCursor());
    }, _2.TOOL), this.view.on("pointer-move", (e6) => {
      this._popVertexOnPointerMove && (this.undo(), this._popVertexOnPointerMove = false), this._abortSnapping(), this._cursorScreenPoint = n(e6), "touch" !== e6.pointerType && this._updateCursor();
    }, _2.TOOL), this.view.on("pointer-drag", (e6) => {
      this._shouldHandlePointerEvent(e6) && (this._abortSnapping(), this._cursorScreenPoint = n(e6), this._dragEnabled && !this._panEnabled ? this._vertexAddHandler(e6) : this._addVertexOnPointerUp = false);
    }, _2.TOOL), this.view.on("pointer-up", (e6) => {
      if (this._shouldHandlePointerEvent(e6)) if (this._abortSnapping(), this._activePointerId = null, this._addVertexOnPointerUp) {
        if (!this._clickEnabled) return 1 === this.vertices.length && this.vertices.pop(), void this._drawCompleteHandler(e6);
        this._vertexAddHandler(e6);
      } else {
        const t = "touch" === e6.pointerType;
        this._updateCursor(t);
      }
    }, _2.TOOL), this.view.on("drag", (e6) => {
      this._dragEnabled && null != this._activePointerId && !this._panEnabled && e6.stopPropagation();
    }, _2.TOOL), this.view.on("drag", ["Shift"], (e6) => {
      e6.stopPropagation();
    }, _2.TOOL), this.view.on("double-click", (e6) => {
      e6.stopPropagation(), this._drawCompleteHandler(e6);
    }, _2.TOOL), this.view.on("double-click", ["Control"], (e6) => {
      e6.stopPropagation(), this._drawCompleteHandler(e6);
    }, _2.TOOL), this.view.on("key-down", (e6) => {
      const {
        key: t,
        repeat: i3
      } = e6;
      t !== p2.pan || i3 || (e6.stopPropagation(), this._panEnabled = true);
    }, _2.TOOL), this.view.on("key-up", (e6) => {
      e6.key === p2.pan && (e6.stopPropagation(), this._panEnabled = false);
    }, _2.TOOL)]), this._addUndoRedoHandles());
  }
  _handleVertexAddKey(e6) {
    this._drawTool ? this._drawTool.drawOperation.commitStagedVertex() : this._cursorScreenPoint && (this._abortSnapping(), this._vertexAddHandler(e6));
  }
  _addUndoRedoHandles() {
    this.addHandles([this._editGeometryOperations.on("vertex-remove", (e6) => {
      if (this.notifyChange("vertices"), "undo" === e6.operation) {
        const t = [...this._committedVertices];
        null != this._stagedVertex && t.push(this._coordinateHelper.pointToArray(this._stagedVertex)), this.emit("undo", new s(this.view, e6.vertices[0].index, t));
      }
    }), this._editGeometryOperations.on("vertex-add", (e6) => {
      if (this.notifyChange("vertices"), "apply" === e6.operation) {
        const e7 = this._committedVertices.length - 1, t = new e5(this.view, e7, this.vertices);
        this.emit("vertex-add", t), t.defaultPrevented && (this._popVertexOnPointerMove = true);
      } else if ("redo" === e6.operation) {
        const t = [...this._committedVertices];
        null != this._stagedVertex && t.push(this._coordinateHelper.pointToArray(this._stagedVertex)), this.emit("redo", new e5(this.view, e6.vertices[0].index, t));
      }
    })]);
  }
  _addDrawTool() {
    const e6 = new l4({
      view: this.view,
      elevationInfo: this.elevationInfo,
      hasZ: this.hasZ,
      geometryType: "polyline",
      mode: this.mode
    });
    this._drawTool = e6, this.view.addAndActivateTool(e6), this.addHandles([e6.on("vertex-add", (t) => {
      if (1 !== t.vertices.length) return;
      const {
        view: i3
      } = this, o2 = t.vertices[0].vertexIndex, r2 = e6.getVertexCoords();
      this.emit("vertex-add", new e5(i3, o2, r2)), "undo" !== t.operation && "redo" !== t.operation || this.emit(t.operation, new e5(i3, o2, r2));
    }), e6.on("vertex-remove", (t) => {
      if (1 !== t.vertices.length) return;
      const {
        view: i3
      } = this, o2 = t.vertices[0].vertexIndex, r2 = e6.getVertexCoords();
      this.emit("vertex-remove", new s(i3, o2, r2)), "undo" !== t.operation && "redo" !== t.operation || this.emit(t.operation, new s(i3, o2, r2));
    }), e6.on("cursor-update", (t) => {
      1 === t.vertices.length && this.emit("cursor-update", new i2(this.view, t.vertices[0].vertexIndex, e6.getVertexCoords()));
    }), e6.on("complete", (t) => {
      this.emit("draw-complete", new r(e6.getVertexCoords())), this._removeDrawTool(), this.removeAllHandles();
    })]);
  }
  _removeDrawTool() {
    this._drawTool && (this.view.tools.remove(this._drawTool), this._drawTool = null);
  }
  _addVertex(e6) {
    const t = this._coordinateHelper.arrayToVector(e6);
    this._isDuplicateOfLastVertex(t) || (this._lastVertexUnsnapped = this._stagedVertexUnsnapped, this._popCursorVertex(), this._editGeometryOperations.appendVertex(t));
  }
  _updateCursor(e6 = false) {
    if (this._popCursorVertex(), !this._cursorScreenPoint) return;
    const t = this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);
    null == t || e6 || this._pushCursorVertex(t.vertex, () => this.emit("cursor-update", new i2(this.view, this._activeComponent.vertices.length, this.vertices, null != this._stagedVertex ? new _(this._stagedVertex) : null)));
  }
  _completeDrawing() {
    if (this._drawTool) return void this._drawTool.completeCreateOperation();
    if (this._activePointerId = null, this._popCursorVertex(), this._committedVertices.length < 2) return;
    this._abortSnapping(), null != this._snappingManager && this._snappingManager.doneSnapping();
    const e6 = new r(this.vertices);
    this.emit("draw-complete", e6), e6.defaultPrevented || this.removeAllHandles();
  }
};
e([y()], m2.prototype, "_clickEnabled", null), e([y()], m2.prototype, "_dragEnabled", null), e([y({
  type: c
})], m2.prototype, "mode", void 0), m2 = e([a2("esri.views.draw.PolylineDrawAction")], m2);

// ../../../node_modules/@arcgis/core/views/draw/SegmentDrawAction.js
var u3 = ["freehand", "click"];
var w2 = class extends V {
  constructor(e6) {
    super(e6), this._isDragging = false, this._panEnabled = false, this._addVertexOnPointerUp = false, this._drawTool = null, this.viewAlignedCoordinateSystem = null, this.mode = "freehand";
  }
  initialize() {
    "2d" === this.view.type ? this._addViewHandles() : this._addDrawTool();
  }
  destroy() {
    this._removeDrawTool(), this.emit("destroy");
  }
  complete() {
    this._completeDrawing();
  }
  _getGeometryZValue() {
    return this.hasZ && this.vertices.length > 0 ? this.vertices[0][2] : this.defaultZ;
  }
  _addViewHandles() {
    "click" === this.mode ? this.addHandles(this._getClickModeViewHandles()) : this.addHandles(this._getDragModeViewHandles());
  }
  _getDragModeViewHandles() {
    return [this.view.on("immediate-click", (e6) => {
      if (e6.stopPropagation(), e6.mapPoint && !this._panEnabled) {
        null != this.getCoordsFromScreenPoint(n(e6)) && (this._vertexAddHandler(e6), this._drawCompleteHandler(e6));
      }
    }, _2.TOOL), this.view.on("pointer-down", (e6) => {
      this._shouldHandlePointerEvent(e6) && (this._abortSnapping(), this._panEnabled || (this._resetGeometry(), this._addVertexOnPointerUp = true, this._cursorScreenPoint = n(e6), this._activePointerId = e6.pointerId, this._vertexAddHandler(e6), this._isDragging = false, "touch" === e6.pointerType && this._updateCursor()));
    }, _2.TOOL), this.view.on("pointer-move", (e6) => {
      this._abortSnapping(), null == this._activePointerId && "touch" !== e6.pointerType && (this._cursorScreenPoint = n(e6), this._updateCursor());
    }, _2.TOOL), this.view.on("pointer-drag", (e6) => {
      this._shouldHandlePointerEvent(e6) && (this._abortSnapping(), this._isDragging = true, this._cursorScreenPoint = n(e6), this._updateCursor());
    }, _2.TOOL), this.view.on("pointer-up", (e6) => {
      this._shouldHandlePointerEvent(e6) && this._addVertexOnPointerUp && (this._abortSnapping(), this._activePointerId = null, this._isDragging && this._vertexAddHandler(e6), 2 === this._committedVertices.length && this._drawCompleteHandler(e6), this._isDragging = false);
    }, _2.TOOL), this.view.on("key-down", (e6) => {
      e6.key === p2.complete && this._cursorScreenPoint ? (this._abortSnapping(), this._vertexAddHandler(e6), this._drawCompleteHandler(e6)) : e6.key === p2.pan && (this._panEnabled = true);
    }, _2.TOOL), this.view.on("key-up", (e6) => {
      e6.key === p2.pan && (this._panEnabled = false);
    }, _2.TOOL), this.view.on("drag", (e6) => {
      null != this._activePointerId && e6.stopPropagation();
    }, _2.TOOL), this.view.on("drag", ["Shift"], (e6) => {
      e6.stopPropagation();
    }, _2.TOOL)];
  }
  _getClickModeViewHandles() {
    return [this.view.on("pointer-down", (e6) => {
      this._abortSnapping(), this._cursorScreenPoint = n(e6), this._activePointerId = e6.pointerId, this._isDragging = false, "touch" === e6.pointerType && this._updateCursor();
    }, _2.TOOL), this.view.on("pointer-move", (e6) => {
      this._abortSnapping(), this._cursorScreenPoint = n(e6), null == this._activePointerId && "touch" !== e6.pointerType && this._updateCursor();
    }, _2.TOOL), this.view.on("pointer-drag", (e6) => {
      this._shouldHandlePointerEvent(e6) && (this._abortSnapping(), this._isDragging = true);
    }, _2.TOOL), this.view.on("pointer-up", (e6) => {
      this._shouldHandlePointerEvent(e6) && (this._abortSnapping(), this._activePointerId = null, e6.stopPropagation(), this._isDragging || this._vertexAddHandler(e6), 2 !== this.vertices.length || this._isDragging || this._drawCompleteHandler(e6), this._isDragging = false);
    }, _2.TOOL), this.view.on("key-down", (e6) => {
      e6.key === p2.vertexAdd && this._cursorScreenPoint && (this._vertexAddHandler(e6), 2 === this.vertices.length && this._drawCompleteHandler(e6)), e6.key === p2.complete && this._cursorScreenPoint && 2 === this.vertices.length && (this._vertexAddHandler(e6), this._drawCompleteHandler(e6));
    }, _2.TOOL)];
  }
  _addDrawTool() {
    const e6 = new l4({
      view: this.view,
      elevationInfo: this.elevationInfo,
      hasZ: this.hasZ,
      geometryType: "segment",
      mode: this.mode
    });
    this._drawTool = e6, this.view.addAndActivateTool(e6), this.addHandles([e6.on("vertex-add", (t) => {
      1 === t.vertices.length && this.emit("vertex-add", new e5(this.view, t.vertices[0].vertexIndex, e6.getVertexCoords()));
    }), e6.on("cursor-update", (t) => {
      1 === t.vertices.length && this.emit("cursor-update", new i2(this.view, t.vertices[0].vertexIndex, e6.getVertexCoords()));
    }), e6.on("complete", (t) => {
      this.emit("draw-complete", new r(e6.getVertexCoords())), this._removeDrawTool();
    }), this.view.on("key-down", (t) => {
      t.key !== p2.vertexAdd || t.repeat || "click" !== this.mode ? t.key !== p2.complete || t.repeat || e6.completeCreateOperation() : e6.drawOperation.numCommittedVertices > 0 ? e6.completeCreateOperation() : e6.drawOperation.commitStagedVertex();
    }, _2.TOOL)]);
  }
  _removeDrawTool() {
    this._drawTool && (this.view.tools.remove(this._drawTool), this._drawTool = null);
  }
  _addVertex(e6) {
    const t = this._coordinateHelper.arrayToVector(e6);
    if (this._isDuplicateOfLastVertex(t)) return;
    this._lastVertexUnsnapped = this._stagedVertexUnsnapped, this._popCursorVertex(), this._editGeometryOperations.appendVertex(t), 1 === this._committedVertices.length && (this.viewAlignedCoordinateSystem = F(this.view, this._committedVertices[0]));
    const i3 = this._committedVertices.length - 1, r2 = new e5(this.view, i3, this.vertices);
    this.emit("vertex-add", r2);
  }
  _updateCursor() {
    if (this._popCursorVertex(), !this._cursorScreenPoint) return;
    const e6 = this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);
    null != e6 && this._pushCursorVertex(e6.vertex, () => this.emit("cursor-update", new i2(this.view, this._activeComponent.vertices.length, this.vertices, null != this._stagedVertex ? new _(this._stagedVertex) : null)));
  }
  _completeDrawing() {
    if (this._drawTool) return this._drawTool.completeCreateOperation(), void this.removeAllHandles();
    if (this._activePointerId = null, this._popCursorVertex(), this._cursorScreenPoint = null, this._isDragging = false, this._abortSnapping(), null != this._snappingManager && this._snappingManager.doneSnapping(), this.vertices.length < 1) return;
    const e6 = new r(this.vertices);
    this.emit("draw-complete", e6), e6.defaultPrevented || this.removeAllHandles();
  }
  _resetGeometry() {
    this._editGeometryOperations.destroy(), this._editGeometryOperations = new E(new p("polygon", this._coordinateHelper), l.Local), this._activeComponent = new a3(this._coordinateHelper.spatialReference, l.Local), this._editGeometryOperations.data.components.push(this._activeComponent);
  }
};
e([y({
  type: u3
})], w2.prototype, "mode", void 0), w2 = e([a2("esri.views.draw.SegmentDrawAction")], w2);

// ../../../node_modules/@arcgis/core/views/draw/Draw.js
var p4 = class extends S {
  constructor() {
    super(...arguments), this.activeAction = null, this.type = "draw", this.view = null;
  }
  destroy() {
    this.activeAction && (this.activeAction.destroy(), this.activeAction = null);
  }
  create(t, e6) {
    this.reset();
    const o2 = __spreadValues({
      view: this.view
    }, e6);
    switch (t) {
      case "point":
        o2.editGeometryType = "point", this.activeAction = new h2(o2);
        break;
      case "polyline":
        o2.editGeometryType = "polyline", this.activeAction = new m2(o2);
        break;
      case "multipoint":
        o2.editGeometryType = "polygon", this.activeAction = new _3(o2);
        break;
      case "polygon":
        o2.editGeometryType = "polygon", this.activeAction = new m(o2);
        break;
      case "rectangle":
      case "circle":
      case "ellipse":
      case "triangle":
        o2.editGeometryType = "polygon", this.activeAction = new w2(o2);
    }
    return this.activeAction;
  }
  complete() {
    this.activeAction && this.activeAction.complete(), this.activeAction = null;
  }
  reset() {
    this.activeAction && this.activeAction.destroy(), this.activeAction = null;
  }
};
e([y()], p4.prototype, "activeAction", void 0), e([y({
  readOnly: true
})], p4.prototype, "type", void 0), e([y()], p4.prototype, "view", void 0), p4 = e([a2("esri.views.draw.Draw")], p4);
var l5 = p4;

export {
  l5 as l
};
//# sourceMappingURL=chunk-VQZJVY7O.js.map
