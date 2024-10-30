import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c as c3
} from "./chunk-7J24PH7A.js";
import {
  p as p4
} from "./chunk-PF7D56B5.js";
import {
  f as f3
} from "./chunk-VFDQ2IPM.js";
import {
  e as e6
} from "./chunk-Q23C3NFQ.js";
import {
  M,
  R as R2,
  T,
  j
} from "./chunk-DUZT23UA.js";
import {
  D,
  p as p3
} from "./chunk-J5J3QXIV.js";
import {
  E2 as E3,
  P as P2,
  a as a5,
  p as p2
} from "./chunk-VC76DE2W.js";
import {
  t
} from "./chunk-6NBMJUQX.js";
import {
  Et,
  It,
  Le,
  N,
  Tt,
  Zt,
  ge,
  gt,
  xt
} from "./chunk-MIWJLMUG.js";
import {
  E as E4,
  c as c2,
  h as h2
} from "./chunk-MDOKECP3.js";
import {
  A as A2
} from "./chunk-IVVINOEJ.js";
import {
  x
} from "./chunk-IPGNBAEV.js";
import {
  s
} from "./chunk-AEX7USXS.js";
import {
  e as e5,
  r as r2
} from "./chunk-H5GZAILH.js";
import {
  a as a4,
  f as f2,
  o as o3
} from "./chunk-T2SCEBLQ.js";
import {
  a as a3,
  i as i2
} from "./chunk-HVJMAP6C.js";
import {
  u as u4
} from "./chunk-U4NXHH3L.js";
import {
  h
} from "./chunk-HFXXFWYN.js";
import {
  E as E2,
  m,
  p,
  u as u3
} from "./chunk-ZSJNH2BT.js";
import {
  n as n3
} from "./chunk-ZFES27RA.js";
import {
  e as e3
} from "./chunk-XP2AJZUL.js";
import {
  d as d3
} from "./chunk-IEB4ZCRH.js";
import {
  l
} from "./chunk-GNCXYHNE.js";
import {
  L,
  R
} from "./chunk-CSK4VZQ7.js";
import {
  e as e4
} from "./chunk-GSG4T2KM.js";
import {
  c,
  i
} from "./chunk-VYTPFEL2.js";
import {
  n as n2
} from "./chunk-UFQD6AL4.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  E,
  P,
  _ as _2,
  e as e2,
  g,
  r,
  u as u2,
  z
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import {
  Z,
  ee
} from "./chunk-6SSA7P3A.js";
import {
  A,
  d as d2
} from "./chunk-LZSLQ24Q.js";
import {
  o as o2
} from "./chunk-JAMSDYD6.js";
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
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import {
  d
} from "./chunk-AIZ3T7E3.js";
import {
  o,
  u
} from "./chunk-6WGE3IUL.js";
import {
  a
} from "./chunk-6JFGZTLU.js";
import {
  O
} from "./chunk-2ZJE6ZFX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/draw/DrawingMode.js
var c4 = ["freehand", "hybrid", "click"];
var e7 = "click";

// ../../../node_modules/@arcgis/core/views/draw/DrawManipulator.js
var t2 = class {
  constructor({
    consumesClicks: t3,
    grabbableForEvent: s2
  }) {
    this.events = new o2(), this.interactive = true, this.selectable = false, this.cursor = null, this.grabbable = true, this.consumesClicks = t3, this.grabbableForEvent = s2;
  }
  destroy() {
  }
  intersectionDistance(e8, t3) {
    return 0;
  }
  attach() {
  }
  detach() {
  }
  onElevationChange() {
  }
  onViewChange() {
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/sketch/constraintUtils.js
function Z2(e8, n4, t3, r3, o4, i3) {
  let l3 = "geodesic", u6 = A2(t3);
  const a6 = c2();
  return E4(e8, n4, r3, a6), a6[2] = 0, u6 && n3(a6, t3, a6, u6) || (l3 = "euclidean", u6 = t3), {
    mode: l3,
    view: n4,
    elevationInfo: r3,
    hasZ: o4,
    directionMode: i3,
    spatialReference: e8.spatialReference,
    measurementSR: u6,
    origin: a6
  };
}
function b(n4, t3, r3) {
  if (null == t3 || null == n4) return;
  const i3 = Z(r3.measurementSR);
  if (null == i3) return;
  const l3 = G(n4, r3);
  if (null == l3) return;
  const u6 = f2(t3, i3);
  return new xt(l3, u6);
}
function A3(e8, n4, r3, o4) {
  if (null == r3 || null == e8) return;
  const i3 = G(e8, o4);
  if (null == i3) return;
  const l3 = T(r3), u6 = 10, s2 = (e9) => {
    if (null == e9) return;
    const n5 = c2(), r4 = o3(e9, "degrees", "geographic");
    return M(n5, i3, o4.measurementSR, u6, r4, o4.mode) ? new Et(i3, n5) : void 0;
  }, c6 = () => {
    if (null != n4 && null != e8) return T(R2(n4, e8));
  };
  switch (o4.directionMode) {
    case j.Absolute:
      return s2(l3);
    case j.Relative: {
      const e9 = c6();
      if (null == e9) return;
      return s2(e9 + l3);
    }
    case j.RelativeBilateral: {
      const e9 = c6();
      if (null == e9) return;
      return ge([s2(e9 + l3), s2(e9 - l3)]);
    }
  }
}
function B(e8, n4) {
  const t3 = C(e8, n4);
  return null != t3 ? new Tt(t3) : void 0;
}
function P3(e8, n4, t3) {
  const {
    context: r3,
    longitude: o4,
    latitude: i3,
    direction: l3,
    distance: u6,
    elevation: s2
  } = t3;
  if (null != o4 || null != i3 || null != u6 || null != s2 || null != l3) {
    if (null != o4 || null != i3) {
      const e9 = T(o4), n5 = T(i3), t4 = D2(s2, r3);
      return new Zt(e9, n5, t4);
    }
    return T2(e8, n4, t3);
  }
}
function T2(n4, t3, {
  context: r3,
  direction: o4,
  distance: i3,
  elevation: l3
}) {
  if (null == t3) return B(l3, r3);
  const {
    view: u6,
    elevationInfo: c6,
    measurementSR: a6
  } = r3, f4 = E4(t3, u6, c6);
  if (!a6 || !n3(f4, t3.spatialReference, F, a6)) return;
  const [m2, p5] = F, v2 = null != i3 ? f2(i3, "meters") : void 0, j2 = T(o4), y2 = D2(l3, r3), h4 = (e8) => {
    const n5 = new It([m2, p5], a6, v2, y2, e8);
    return null == v2 || null == e8 || null == y2 && r3.hasZ ? n5 : new gt(n5.closestTo(f4));
  };
  if (null == j2) return h4(void 0);
  const U2 = () => {
    if (null != n4 && null != t3) return T(R2(n4, t3));
  };
  switch (r3.directionMode) {
    case j.Absolute:
      return h4(j2);
    case j.Relative: {
      const e8 = U2();
      if (null == e8) return;
      return h4(e8 + j2);
    }
    case j.RelativeBilateral: {
      const e8 = U2();
      if (null == e8) return;
      return ge([h4(e8 + j2), h4(e8 - j2)]);
    }
  }
}
function V(e8) {
  return "geodesic" === e8.context.mode ? P3(null, null, e8) : q(e8);
}
function k(e8, n4, t3) {
  const {
    context: r3,
    x: o4,
    y: i3,
    distance: l3,
    direction: u6,
    elevation: s2
  } = t3;
  return "geodesic" === r3.mode ? P3(n4, e8, t3) : null != o4 || null != i3 ? q(t3) : z2([b(e8, l3, r3), A3(e8, n4, u6, r3), B(s2, r3)]);
}
function q({
  x: e8,
  y: n4,
  elevation: t3,
  context: r3
}) {
  K.x = e8?.value ?? 0, K.y = n4?.value ?? 0, K.spatialReference = r3.spatialReference;
  const o4 = G(K, r3, H);
  return new Zt(null != e8 && null != o4 ? o4[0] : void 0, null != n4 && null != o4 ? o4[1] : void 0, D2(t3, r3));
}
function z2(e8) {
  let n4;
  for (const t3 of e8) t3 && (n4 = n4?.intersect(t3) ?? t3);
  return n4;
}
function G(e8, n4, t3 = c2()) {
  const {
    view: r3,
    elevationInfo: o4,
    measurementSR: l3,
    origin: u6,
    mode: c6
  } = n4;
  if (E4(e8, r3, o4, t3), n3(t3, e8.spatialReference, t3, l3)) return "geodesic" !== c6 && e2(t3, t3, u6), t3;
}
function W(e8, n4, t3, r3) {
  const {
    view: o4,
    measurementSR: i3,
    spatialReference: c6,
    origin: a6,
    mode: f4
  } = t3;
  if ("geodesic" === f4 ? r(J, e8) : u2(J, e8, a6), n3(J, i3, J, c6)) return h2(J, o4, n4, t3, r3);
}
function C(e8, n4) {
  return E5(e8, n4)?.value ?? void 0;
}
function D2(n4, t3) {
  const r3 = E5(n4, t3);
  return null != r3 ? f2(r3, "meters") : void 0;
}
function E5(t3, {
  view: o4,
  origin: i3,
  elevationInfo: l3,
  hasZ: u6,
  measurementSR: s2
}) {
  if (null == t3 || !u6) return;
  const c6 = ee(s2);
  if (null == c6) return;
  const [a6, m2] = i3, d4 = f2(t3, c6), p5 = "3d" === o4?.type ? E2(o4, a6, m2, d4, s2, l3) : d4;
  return null != p5 ? a4(p5, c6) : void 0;
}
var F = c2();
var H = c2();
var J = c2();
var K = e3(0, 0, 0, f.WGS84);

// ../../../node_modules/@arcgis/core/views/draw/DrawOperation.js
var A4 = "crosshair";
var L2 = "progress";
var U = Symbol();
var z3 = Symbol();
var F2 = class extends o2.EventedMixin(S) {
  constructor(t3) {
    super(t3), this._createOperationCompleted = false, this._hideDefaultCursor = false, this._pointerDownStates = new s(), this._stagedScreenPoint = null, this._stagedPointerType = null, this._updatingHandles = new h(), this._stagedPointerId = null, this.constraintsEnabled = false, this.constraints = void 0, this._getPointConstraint = t(V), this._getPolylineOrPolygonConstraint = t(k), this.constraintZ = null, this.defaultZ = null, this.isDraped = true, this.labelOptions = new c3(), this.cursor = null, this.loading = false, this.snapToSceneEnabled = null, this.firstVertex = null, this.lastVertex = null, this.secondToLastVertex = null, null == t3.elevationInfo && (this.elevationInfo = u3(!!t3.hasZ));
  }
  initialize() {
    const {
      geometryType: t3,
      view: e8
    } = this, i3 = e8.spatialReference, n4 = "viewingMode" in e8.state ? e8.state.viewingMode : l.Local, o4 = "segment" === t3 || "multipoint" === t3 ? "polyline" : t3;
    this.coordinateHelper = P2(this.hasZ, this.hasM, i3), this._editGeometryOperations = new E3(new p2(o4, this.coordinateHelper), n4), this._snappingOperation = new p4({
      view: e8
    }), this.addHandles([d2(() => ({
      stagedPoint: this._snappingOperation.stagedPoint,
      constraint: this._constraint
    }), ({
      stagedPoint: t4,
      constraint: e9
    }, i4) => {
      const {
        snappingOptions: n5
      } = this;
      n5 && (n5.forceDisabled = null != e9 && Le(e9));
      if (null != i4 && t4 === i4.stagedPoint && e9 !== i4.constraint) return this._onKeyboardBasedChange();
      this._processCursor(t4 ?? this._screenToMap(this._stagedScreenPoint));
    }, {
      equals: (t4, e9) => t4.stagedPoint === e9.stagedPoint && o(t4.constraint, e9.constraint)
    }), d2(() => this.view.viewpoint, (t4, e9) => {
      t4 && e9 && d3(t4, e9) && this._onKeyboardBasedChange();
    })]), this._activeComponent = new a5(i3, n4), this._editGeometryOperations.data.components.push(this._activeComponent);
    const s2 = this.segmentLabels;
    null != s2 && (s2.context = {
      view: e8,
      editGeometryOperations: this._editGeometryOperations,
      elevationInfo: this.elevationInfo,
      labelOptions: this.labelOptions
    }, this.addHandles(d2(() => this.labelOptions.enabled, (t4) => {
      s2.visible = t4;
    }, A))), this.addHandles(this._editGeometryOperations.on(["vertex-add", "vertex-update", "vertex-remove"], (t4) => {
      const e9 = t4.vertices.map((t5) => ({
        componentIndex: 0,
        vertexIndex: t5.index,
        coordinates: this.coordinateHelper.vectorToArray(t5.pos)
      })), i4 = e9.map((t5) => t5.coordinates), n5 = this.coordinateHelper.vectorToDehydratedPoint(this._activeComponent.getFirstVertex()?.pos) ?? null;
      a3(n5, this.firstVertex) || (this.firstVertex = n5);
      const o5 = this.coordinateHelper.vectorToDehydratedPoint(this._activeComponent.getLastVertex()?.pos) ?? null;
      a3(o5, this.lastVertex) || (this.lastVertex = o5);
      const r3 = this.coordinateHelper.vectorToDehydratedPoint(this._activeComponent.edges.at(-1)?.leftVertex?.pos) ?? null;
      switch (a3(r3, this.secondToLastVertex) || (this.secondToLastVertex = r3), this._processCursor(this.cursorVertex), t4.type) {
        case "vertex-add":
          this.emit(t4.type, __spreadProps(__spreadValues({}, t4), {
            added: i4,
            vertices: e9
          }));
          break;
        case "vertex-update":
          this.emit(t4.type, __spreadProps(__spreadValues({}, t4), {
            updated: i4,
            vertices: e9
          }));
          break;
        case "vertex-remove":
          this.emit(t4.type, __spreadProps(__spreadValues({}, t4), {
            removed: i4,
            vertices: e9
          }));
      }
    }));
    const p5 = this._manipulator = new t2({
      consumesClicks: false,
      grabbableForEvent: (t4) => "click" !== this.drawingMode || "touch" === t4.pointerType && this._snappingEnabled && 1 === this._pointerDownStates.size
    });
    this.manipulators.add(p5), p5.grabbable = "point" !== t3, this.addHandles([p5.events.on("immediate-click", (t4) => this._onImmediateClick(t4)), p5.events.on("immediate-double-click", (t4) => this._onImmediateDoubleClick(t4)), d2(() => this.drawingMode, () => {
      this.removeHandles(U), this.addHandles(this._createManipulatorDragPipeline(p5), U);
    }, A), d2(() => ({
      effectiveCursor: this.effectiveCursor
    }), ({
      effectiveCursor: t4
    }) => {
      p5.cursor = t4;
    }, A)]), N(this, () => {
      const t4 = this.view.inputManager.latestPointerType ?? "mouse", e9 = this._getSnappingContext(t4);
      if (null != this.snappingManager) {
        const t5 = this._snappingOperation.snapAgainNearPreviousMapPoint(this.snappingManager, e9);
        this._updatingHandles.addPromise(d(t5));
      }
    });
  }
  destroy() {
    u(this.segmentLabels), u(this._snappingOperation), this._editGeometryOperations = u(this._editGeometryOperations), this._updatingHandles.destroy();
  }
  get _isDragging() {
    const {
      _stagedPointerId: t3,
      _manipulator: e8
    } = this;
    return null != t3 && this._pointerDownStates.has(t3) || e8.grabbing || !e8.interactive;
  }
  get _snappingEnabled() {
    return null != this.snappingManager && this.snappingManager.options.effectiveEnabled;
  }
  get _requiresScenePoint() {
    const t3 = this._updateAndGetEffectiveDrawSurface();
    return "3d" === this.view.type && this.drawSurface !== t3;
  }
  get canRedo() {
    return this._editGeometryOperations.canRedo;
  }
  get canUndo() {
    return this._editGeometryOperations.canUndo;
  }
  get committedVertices() {
    return this._activeComponent.vertices.map((t3) => this.coordinateHelper.vectorToArray(t3.pos));
  }
  get _constraint() {
    const {
      constraints: t3,
      constraintsEnabled: e8
    } = this;
    if (t3 && e8) switch (this.geometryType) {
      case "point":
        return this._getPointConstraint(t3);
      case "polygon":
      case "polyline":
        return this._getPolylineOrPolygonConstraint(this.lastVertex, this.secondToLastVertex, t3);
    }
  }
  set drawingMode(t3) {
    this._set("drawingMode", t3 ?? e7);
  }
  get effectiveCursor() {
    return this.loading ? L2 : this._hideDefaultCursor ? null : this.cursor || A4;
  }
  get interactive() {
    return this._manipulator.interactive;
  }
  set interactive(t3) {
    this._manipulator.interactive = t3;
  }
  get isCompleted() {
    return this._createOperationCompleted;
  }
  get numCommittedVertices() {
    return this._activeComponent.vertices.length;
  }
  get snappingOptions() {
    return null != this.snappingManager ? this.snappingManager.options : null;
  }
  get cursorVertex() {
    return this._get("cursorVertex");
  }
  get visualizationCursorVertex() {
    return "mouse" === this._stagedPointerType ? this.cursorVertex : null;
  }
  get committableVertex() {
    const {
      cursorVertex: t3,
      lastVertex: e8,
      firstVertex: i3,
      geometryType: n4
    } = this;
    return "polygon" === n4 && i2(t3, i3) || i2(t3, e8) ? null : t3;
  }
  get updating() {
    return this._updatingHandles.updating;
  }
  get geometryIncludingUncommittedVertices() {
    const {
      committedVertices: t3,
      committableVertex: e8,
      coordinateHelper: i3
    } = this, n4 = t3.slice();
    return null != e8 && n4.push(i3.pointToArray(e8)), n4;
  }
  cancel() {
    this.complete({
      aborted: true
    });
  }
  commitStagedVertex() {
    this._snappingOperation.abort();
    const {
      committableVertex: t3
    } = this;
    null != t3 && this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(t3));
  }
  complete(t3) {
    const e8 = t3?.aborted || false;
    this._snappingOperation.abort(), this.snappingManager?.doneSnapping();
    const {
      geometryType: i3,
      numCommittedVertices: n4
    } = this, o4 = "multipoint" === i3 && 0 === n4 || "polyline" === i3 && n4 < 2 || "polygon" === i3 && n4 < 3;
    "segment" !== i3 && "point" !== i3 || this.commitStagedVertex(), this._createOperationCompleted = !o4, (this.isCompleted || e8) && (this._stagedScreenPoint = null, this._stagedPointerId = null, this._stagedPointerType = null, this._processCursor(null), this.emit("complete", {
      vertices: this.committedVertices.map((t4, e9) => ({
        componentIndex: 0,
        vertexIndex: e9,
        coordinates: t4
      })),
      aborted: e8,
      type: "complete"
    }));
  }
  onInputEvent(t3) {
    switch (t3.type) {
      case "pointer-down":
        this._pointerDownStates.add(t3.pointerId);
        break;
      case "pointer-up":
        this._pointerDownStates.delete(t3.pointerId);
    }
    switch (t3.type) {
      case "pointer-move":
        return this._onPointerMove(t3);
      case "hold":
        return this._onHold(t3);
    }
  }
  redo() {
    this._editGeometryOperations.redo();
  }
  undo() {
    null != this.snappingManager && this.snappingManager.doneSnapping(), this._editGeometryOperations.undo();
  }
  _processCursor(t3) {
    const e8 = a(this.cursorVertex), i3 = a(t3), o4 = i3 && (this._updateAndGetEffectiveDrawSurface()?.constrainZ(i3) ?? i3), r3 = this._snapToClosingVertex(o4), s2 = this._applyConstraints(r3);
    i2(e8, s2) || (this._set("cursorVertex", s2), this.segmentLabels?.set("stagedVertex", null != s2 ? this.coordinateHelper.pointToVector(s2) : null), null == s2 || "mouse" !== this._stagedPointerType ? this.emit("cursor-remove") : this.emit("cursor-update", {
      updated: null,
      vertices: [{
        componentIndex: 0,
        vertexIndex: this._activeComponent.vertices.length,
        coordinates: this.coordinateHelper.pointToArray(s2)
      }],
      operation: "apply",
      type: "vertex-update"
    }));
  }
  _snapToClosingVertex(t3) {
    if (null == t3 || this._isDragging || "polygon" !== this.geometryType || this.numCommittedVertices <= 2) return t3;
    const e8 = this._mapToScreen(t3);
    if (!e8) return t3;
    const i3 = this._activeComponent;
    return this._vertexWithinPointerDistance(i3.vertices[0].pos, e8) ? this.firstVertex : this._vertexWithinPointerDistance(i3.vertices.at(-1).pos, e8) ? this.lastVertex : t3;
  }
  _createManipulatorDragPipeline(t3) {
    switch (this.drawingMode) {
      case "click":
        return this._createManipulatorDragPipelineClick(t3);
      case "freehand":
        return this._createManipulatorDragPipelineFreehand(t3);
      case "hybrid":
        return this._createManipulatorDragPipelineHybrid(t3);
    }
  }
  _createManipulatorDragPipelineClick(t3) {
    return p3(t3, (t4, e8, i3, n4) => {
      const o4 = "touch" === n4 && this._snappingEnabled;
      if (this.isCompleted || !o4) return;
      const {
        snappingStep: r3,
        cancelSnapping: s2
      } = f3({
        predicate: () => o4,
        snappingManager: this.snappingManager,
        snappingContext: new e6({
          editGeometryOperations: this._editGeometryOperations,
          elevationInfo: this.elevationInfo,
          feature: this.graphic,
          pointer: n4,
          visualizer: this.snappingVisualizer,
          drawConstraints: this.constraints
        }),
        updatingHandles: this._updatingHandles,
        useZ: !this._requiresScenePoint
      });
      i3 = i3.next((t5) => (o4 && null != this.snappingManager && this.snappingManager.doneSnapping(), t5)).next(s2), e8.next(this._screenToMapDragEventStep()).next((t5) => ("start" === t5.action && (this._processCursor(t5.mapStart), ("segment" === this.geometryType || o4 && !this.numCommittedVertices) && this.commitStagedVertex()), t5)).next(D(this.view, this.elevationInfo)).next(...r3).next((t5) => (o4 && (this._processCursor(t5.mapEnd), "end" === t5.action && this.commitStagedVertex()), t5)).next((t5) => ("end" === t5.action && ("mouse" !== this._stagedPointerType && this._snappingOperation.abort(), "segment" !== this.geometryType && "point" !== this.geometryType || this.complete()), t5));
    });
  }
  _createManipulatorDragPipelineFreehand(t3) {
    return p3(t3, (t4, e8) => {
      this.isCompleted || e8.next(this._screenToMapDragEventStep()).next((t5) => ("start" === t5.action && (this._snappingOperation.abort(), null == this.committableVertex && this._processCursor(t5.mapStart), "segment" === this.geometryType && this.commitStagedVertex()), t5)).next((t5) => {
        switch (t5.action) {
          case "start":
          case "update":
            this._processCursor(t5.mapEnd), "polygon" !== this.geometryType && "polyline" !== this.geometryType || this.commitStagedVertex();
            break;
          case "end":
            this.complete();
        }
        return t5;
      });
    });
  }
  _createManipulatorDragPipelineHybrid(t3) {
    return p3(t3, (t4, e8) => {
      this.isCompleted || e8.next(this._screenToMapDragEventStep()).next((t5) => ("start" === t5.action && (this._snappingOperation.abort(), this.addHandles(this._editGeometryOperations.createUndoGroup(), z3), this._processCursor(t5.mapStart), this.commitStagedVertex()), t5)).next((t5) => {
        switch (t5.action) {
          case "start":
          case "update":
            this._processCursor(t5.mapEnd), "polygon" !== this.geometryType && "polyline" !== this.geometryType || this.commitStagedVertex();
            break;
          case "end":
            "mouse" !== this._stagedPointerType && this._snappingOperation.abort(), this.removeHandles(z3), "segment" !== this.geometryType && "point" !== this.geometryType || this.complete();
        }
        return t5;
      });
    });
  }
  get _drawAtFixedElevation() {
    const {
      constraintsEnabled: t3,
      constraintZ: e8,
      geometryType: i3,
      numCommittedVertices: n4
    } = this;
    return t3 ? null != e8 || "segment" === i3 && n4 > 0 : ("segment" === i3 || "polygon" === i3) && n4 > 0;
  }
  _updateAndGetEffectiveDrawSurface() {
    const {
      constraintsEnabled: t3,
      coordinateHelper: e8,
      drawSurface: i3,
      elevationDrawSurface: n4,
      snapToSceneEnabled: o4
    } = this;
    if (null == n4) return i3;
    if (!this.hasZ) return n4.defaultZ = null, n4;
    const r3 = this.elevationInfo?.mode;
    let s2 = this.defaultZ, a6 = t3 || "absolute-height" === r3;
    if (null != o4 && (a6 = o4), "on-the-ground" === r3 && (a6 = false), this._drawAtFixedElevation) {
      s2 = (t3 ? this.constraintZ : null) ?? e8.getZ(this._activeComponent.vertices[0].pos), a6 = false;
    }
    return a6 ? i3 : (n4.defaultZ = s2, n4);
  }
  _mapToScreen(t3) {
    return this._updateAndGetEffectiveDrawSurface()?.mapToScreen(t3);
  }
  _onHold(t3) {
    this._snappingOperation.abort(), "click" === this.drawingMode && "touch" === t3.pointerType && this._snappingEnabled && this._processCursor(t3.mapPoint), t3.stopPropagation();
  }
  _onImmediateClick(t3) {
    if (!("mouse" === t3.pointerType && 2 === t3.button || this._manipulator.dragging)) try {
      const {
        drawingMode: e8,
        geometryType: i3
      } = this;
      this._stagedPointerType = t3.pointerType, this._stagedScreenPoint = t3.screenPoint;
      const n4 = this._screenToMap(t3.screenPoint);
      if (null == n4) return;
      if (null == n4 || "freehand" === e8 && "point" !== i3) return;
      if (this._snappingEnabled && null != this.cursorVertex || this._processCursor(n4), null == this.committableVertex) return void this.complete();
      this.commitStagedVertex(), "mouse" !== t3.pointerType && this._processCursor(null), ("freehand" === e8 || "point" === i3 || "segment" === i3 && 2 === this.numCommittedVertices || "segment" === i3 && "hybrid" === e8 && 1 === this.numCommittedVertices) && this.complete();
    } finally {
      t3.stopPropagation();
    }
  }
  _onImmediateDoubleClick(t3) {
    this._manipulator.dragging || "point" === this.geometryType || (this.complete(), t3.stopPropagation());
  }
  _onPointerMove(t3) {
    const e8 = c(t3.x, t3.y);
    this._stagedScreenPoint = e8, this._stagedPointerType = t3.pointerType, this._stagedPointerId = t3.pointerId, this._isDragging ? this._snappingOperation.abort() : (t3.stopPropagation(), this._processCursorMovementRelativeToSurface(e8, t3.pointerType));
  }
  _onKeyboardBasedChange() {
    "mouse" === this._stagedPointerType && this._stagedScreenPoint && null != this._stagedPointerId && !this._isDragging ? this._processCursorMovementRelativeToSurface(this._stagedScreenPoint, this._stagedPointerType) : this._snappingOperation.abort();
  }
  _processCursorMovementRelativeToSurface(t3, e8) {
    const i3 = this._snappingOperation, n4 = this._screenToMap(t3), o4 = this._requiresScenePoint ? this.drawSurface?.screenToMap(t3) : null;
    if (null == n4) return this._hideDefaultCursor = true, this._processCursor(null), void i3.abort();
    this._hideDefaultCursor = false;
    const r3 = this.snappingManager;
    if (null == r3) return this._processCursor(n4), void i3.abort();
    const s2 = this._getSnappingContext(e8);
    this._updatingHandles.addPromise(d(i3.snap({
      point: n4,
      scenePoint: o4
    }, r3, s2)));
  }
  _applyConstraints(t3) {
    const {
      _constraint: e8,
      constraints: i3
    } = this;
    if (!t3 || !i3 || !e8) return t3;
    const {
      context: n4
    } = i3, o4 = G(t3, n4), r3 = o4 ? e8.closestTo(o4) : void 0;
    if (!r3) return t3;
    const s2 = W(r3, t3, n4), a6 = "2d" === this.view.type || "absolute-height" !== n4.elevationInfo.mode;
    return null != s2 && a6 && null != this.constraintZ && this.hasZ && (s2.z = this.constraintZ), s2;
  }
  _screenToMap(t3) {
    return t3 ? this._updateAndGetEffectiveDrawSurface()?.screenToMap(t3) : null;
  }
  _screenToMapDragEventStep() {
    let t3 = null;
    return (e8) => {
      if ("start" === e8.action && (t3 = this._screenToMap(e8.screenStart)), null == t3) return null;
      const i3 = this._screenToMap(e8.screenEnd);
      return null != i3 ? __spreadProps(__spreadValues({}, e8), {
        mapStart: t3,
        mapEnd: i3
      }) : null;
    };
  }
  _vertexWithinPointerDistance(t3, e8) {
    const i3 = 25, n4 = this._mapToScreen(this.coordinateHelper.vectorToDehydratedPoint(t3));
    return null != n4 && R3(n4, e8, i3);
  }
  _getSnappingContext(t3) {
    const e8 = this._drawAtFixedElevation ? this.elevationDrawSurface?.defaultZ : null;
    return new e6({
      editGeometryOperations: this._editGeometryOperations,
      elevationInfo: this.elevationInfo,
      pointer: t3,
      feature: this.graphic,
      visualizer: this.snappingVisualizer,
      selfSnappingZ: null != e8 ? {
        value: e8,
        elevationInfo: this.elevationInfo
      } : null,
      drawConstraints: this.constraints
    });
  }
};
function R3(t3, e8, i3) {
  const n4 = t3.x - e8.x, o4 = t3.y - e8.y;
  return n4 * n4 + o4 * o4 <= i3;
}
e([y()], F2.prototype, "_hideDefaultCursor", void 0), e([y()], F2.prototype, "_stagedPointerId", void 0), e([y()], F2.prototype, "_isDragging", null), e([y()], F2.prototype, "_snappingOperation", void 0), e([y()], F2.prototype, "_snappingEnabled", null), e([y({
  constructOnly: true
})], F2.prototype, "graphic", void 0), e([y()], F2.prototype, "constraintsEnabled", void 0), e([y()], F2.prototype, "constraints", void 0), e([y()], F2.prototype, "_constraint", null), e([y()], F2.prototype, "constraintZ", void 0), e([y()], F2.prototype, "defaultZ", void 0), e([y()], F2.prototype, "isDraped", void 0), e([y({
  value: e7
})], F2.prototype, "drawingMode", null), e([y({
  constructOnly: true
})], F2.prototype, "elevationDrawSurface", void 0), e([y({
  constructOnly: true
})], F2.prototype, "elevationInfo", void 0), e([y({
  constructOnly: true,
  type: c3
})], F2.prototype, "labelOptions", void 0), e([y({
  constructOnly: true
})], F2.prototype, "geometryType", void 0), e([y({
  constructOnly: true
})], F2.prototype, "hasM", void 0), e([y({
  constructOnly: true
})], F2.prototype, "hasZ", void 0), e([y()], F2.prototype, "cursor", void 0), e([y()], F2.prototype, "effectiveCursor", null), e([y()], F2.prototype, "loading", void 0), e([y({
  constructOnly: true
})], F2.prototype, "manipulators", void 0), e([y({
  constructOnly: true
})], F2.prototype, "drawSurface", void 0), e([y({
  constructOnly: true
})], F2.prototype, "segmentLabels", void 0), e([y({
  constructOnly: true
})], F2.prototype, "snappingManager", void 0), e([y({
  constructOnly: true
})], F2.prototype, "snappingVisualizer", void 0), e([y()], F2.prototype, "snapToSceneEnabled", void 0), e([y({
  readOnly: true
})], F2.prototype, "cursorVertex", null), e([y({
  readOnly: true
})], F2.prototype, "visualizationCursorVertex", null), e([y()], F2.prototype, "committableVertex", null), e([y()], F2.prototype, "firstVertex", void 0), e([y()], F2.prototype, "lastVertex", void 0), e([y()], F2.prototype, "secondToLastVertex", void 0), e([y()], F2.prototype, "updating", null), e([y({
  constructOnly: true
})], F2.prototype, "view", void 0), F2 = e([a2("esri.views.draw.DrawOperation")], F2);

// ../../../node_modules/@arcgis/core/views/draw/drawSurfaces.js
var c5 = class {
  constructor(e8, t3, r3, s2 = null) {
    this._elevationInfo = e8, this.defaultZ = t3, this._view = r3, this._excludeGraphics = s2;
  }
  screenToMap(t3) {
    const {
      defaultZ: r3,
      _view: s2
    } = this, n4 = s2.sceneIntersectionHelper.intersectElevationFromScreen(i(t3.x, t3.y), this._elevationInfo, r3 ?? 0, this._excludeGraphics);
    return null == r3 && null != n4 && (n4.z = void 0), n4;
  }
  mapToScreen(e8) {
    const t3 = e3(e8.x, e8.y, m(this._view, e8, this._elevationInfo), e8.spatialReference);
    return this._view.toScreen(t3);
  }
  constrainZ(e8) {
    const {
      defaultZ: t3
    } = this;
    return null != t3 && e8.z !== t3 && ((e8 = x(e8)).z = t3), e8;
  }
};
var l2 = class {
  constructor(e8, t3, r3 = []) {
    this.view = e8, this.elevationInfo = t3, this.exclude = r3;
  }
  screenToMap(e8) {
    const t3 = this.view.toMap(e8, {
      exclude: this.exclude,
      excludeHud: true
    });
    return null != t3 && (t3.z = p(t3, this.view, this.elevationInfo)), t3;
  }
  mapToScreen(e8) {
    let t3 = e8;
    return null != this.elevationInfo && (t3 = e3(e8.x, e8.y, m(this.view, e8, this.elevationInfo), e8.spatialReference)), this.view.toScreen(t3);
  }
  constrainZ(e8) {
    return e8;
  }
};
var h3 = class {
  constructor(e8, t3 = false, r3 = 0) {
    this.view = e8, this.hasZ = t3, this.defaultZ = r3, this.mapToScreen = (t4) => e8.toScreen(t4), this.screenToMap = t3 ? (t4) => {
      const s2 = e8.toMap(t4);
      return s2.z = r3, s2;
    } : (t4) => e8.toMap(t4);
  }
  constrainZ(e8) {
    const {
      defaultZ: t3
    } = this;
    return this.hasZ && e8.z !== t3 && ((e8 = x(e8)).z = t3), e8;
  }
};
var u5 = class _u {
  screenToMap(e8) {
    const {
      x: t3,
      y: r3
    } = e8;
    return new _({
      x: t3,
      y: r3,
      spatialReference: _u.spatialReference
    });
  }
  mapToScreen(e8) {
    return c(e8.x, e8.y);
  }
  constrainZ(e8) {
    return e8;
  }
};
u5.spatialReference = new f();

// ../../../node_modules/@arcgis/core/views/draw/support/surfaceCoordinateSystems.js
function g2(t3, r3, e8 = null) {
  return null != e8 ? [t3, r3, e8] : [t3, r3];
}
function w(t3, r3, e8 = null) {
  return null != e8 ? {
    x: t3,
    y: r3,
    z: e8
  } : {
    x: t3,
    y: r3
  };
}
var R4 = class {
  constructor(t3) {
    this.spatialReference = t3;
  }
  mapToLocalMultiple(r3) {
    return r3.map((t3) => this.mapToLocal(t3)).filter(O);
  }
  get doUnnormalization() {
    return false;
  }
};
var W2 = class extends R4 {
  constructor(t3, a6, o4 = null) {
    super(a6), this._defaultZ = o4, this.transform = e5(), this.transformInv = e5(), this.transform = r2(t3), u4(this.transformInv, this.transform);
  }
  makeMapPoint(t3, r3) {
    return g2(t3, r3, this._defaultZ);
  }
  mapToLocal(t3) {
    return w(this.transform[0] * t3[0] + this.transform[2] * t3[1] + this.transform[4], this.transform[1] * t3[0] + this.transform[3] * t3[1] + this.transform[5]);
  }
  localToMap(t3) {
    return g2(this.transformInv[0] * t3.x + this.transformInv[2] * t3.y + this.transformInv[4], this.transformInv[1] * t3.x + this.transformInv[3] * t3.y + this.transformInv[5], this._defaultZ);
  }
};
var v = class extends R4 {
  constructor(t3, r3) {
    super(t3.spatialReference), this.view = t3, this.defaultZ = null, this.pWS = n(), this.tangentFrameUpWS = n(), this.tangentFrameRightWS = n(), this.tangentFrameForwardWS = n(), this.localFrameRightWS = n(), this.localFrameUpWS = n(), this.worldToLocalTransform = e4(), this.localToWorldTransform = e4(), this.scale = 1, this.scale = t3.resolution, this.referenceMapPoint = r3, this.defaultZ = r3.hasZ ? r3.z : null;
    const e8 = t3.state.camera.viewRight;
    this.view.renderCoordsHelper.toRenderCoords(this.referenceMapPoint, this.pWS), this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS, n2.X, this.tangentFrameRightWS), this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS, n2.Y, this.tangentFrameUpWS), this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS, n2.Z, this.tangentFrameForwardWS);
    const s2 = n();
    g(s2, this.tangentFrameForwardWS, P(e8, this.tangentFrameForwardWS)), e2(this.localFrameRightWS, e8, s2), z(this.localFrameRightWS, this.localFrameRightWS), _2(this.localFrameUpWS, this.tangentFrameForwardWS, this.localFrameRightWS), R(this.worldToLocalTransform, this.localFrameRightWS, this.tangentFrameRightWS), L(this.localToWorldTransform, this.worldToLocalTransform);
  }
  get doUnnormalization() {
    return "global" === this.view.viewingMode;
  }
  makeMapPoint(t3, r3) {
    return g2(t3, r3, this.defaultZ);
  }
  mapToLocal(t3) {
    const r3 = n();
    this.view.renderCoordsHelper.toRenderCoords(new _({
      x: t3[0],
      y: t3[1],
      spatialReference: this.spatialReference
    }), r3), E(r3, r3, this.worldToLocalTransform);
    const e8 = this.view.renderCoordsHelper.fromRenderCoords(r3, new _({
      spatialReference: this.view.spatialReference
    }));
    return null != e8 ? w(e8.x / this.scale, e8.y / this.scale) : null;
  }
  localToMap(t3) {
    const r3 = n();
    this.view.renderCoordsHelper.toRenderCoords(new _({
      x: t3.x * this.scale,
      y: t3.y * this.scale,
      spatialReference: this.spatialReference
    }), r3), E(r3, r3, this.localToWorldTransform);
    const e8 = this.view.renderCoordsHelper.fromRenderCoords(r3, new _({
      spatialReference: this.view.spatialReference
    }));
    return null != e8 ? g2(e8.x, e8.y, this.defaultZ) : null;
  }
};
function F3(t3, r3) {
  if ("2d" === t3.type) return new W2(t3.state.transform, t3.spatialReference, r3.length > 2 ? r3[2] : null);
  if ("3d" === t3.type) {
    const e8 = r3.length > 2 ? new _({
      x: r3[0],
      y: r3[1],
      z: r3[2],
      spatialReference: t3.spatialReference
    }) : new _({
      x: r3[0],
      y: r3[1],
      spatialReference: t3.spatialReference
    });
    return new v(t3, e8);
  }
  return null;
}

export {
  w,
  W2 as W,
  F3 as F,
  Z2 as Z,
  c4 as c,
  e7 as e,
  F2,
  c5 as c2,
  l2 as l,
  h3 as h,
  u5 as u
};
//# sourceMappingURL=chunk-UWZXGGYT.js.map
