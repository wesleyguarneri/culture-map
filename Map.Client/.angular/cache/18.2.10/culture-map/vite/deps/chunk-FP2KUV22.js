import {
  j as j2
} from "./chunk-XJ3IF5WI.js";
import {
  D,
  G
} from "./chunk-SR7MLPR2.js";
import {
  e as e6,
  ee,
  f as f2
} from "./chunk-ZYJAXFRJ.js";
import {
  M,
  f as f3,
  g as g2,
  j,
  m,
  p as p4,
  w
} from "./chunk-VRZ6RXNW.js";
import {
  d as d3
} from "./chunk-GFPWBDCO.js";
import {
  at,
  ft,
  mt,
  pt,
  wt
} from "./chunk-O7OCS6XP.js";
import {
  t
} from "./chunk-F2TT4B6M.js";
import {
  h
} from "./chunk-YAGNWBGU.js";
import {
  e as e5
} from "./chunk-ZVFENZUF.js";
import {
  p as p3
} from "./chunk-6MR4UDDL.js";
import {
  c as c2,
  f
} from "./chunk-N4KQPPPI.js";
import {
  L
} from "./chunk-TCPN7AEH.js";
import {
  e as e4
} from "./chunk-BQZBOYBD.js";
import {
  R,
  c,
  d as d2,
  i,
  l as l2,
  p as p2,
  q
} from "./chunk-XTVPEVHA.js";
import {
  u as u2
} from "./chunk-K226GFDN.js";
import {
  e as e3
} from "./chunk-3ZXOUEQG.js";
import {
  P as P2,
  U,
  _,
  e as e2,
  g,
  o as o3,
  z
} from "./chunk-AXVPJBVW.js";
import {
  n,
  r as r2
} from "./chunk-OXEPWRM7.js";
import {
  P,
  d,
  p
} from "./chunk-6WHTZNUH.js";
import {
  o as o2
} from "./chunk-WGAPNV7F.js";
import {
  r
} from "./chunk-ANKOCGE2.js";
import {
  e,
  o
} from "./chunk-7DA6A5LD.js";
import {
  l,
  u
} from "./chunk-2MMLMOWS.js";
import {
  has
} from "./chunk-DXLOWWK7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/ManipulatorType.js
var A;
!function(A2) {
  A2[A2.TRANSLATE_Z = 0] = "TRANSLATE_Z", A2[A2.TRANSLATE_XY = 1] = "TRANSLATE_XY", A2[A2.SCALE = 2] = "SCALE", A2[A2.ROTATE = 3] = "ROTATE", A2[A2.SCALE_ROTATE = 4] = "SCALE_ROTATE";
}(A || (A = {}));

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/manipulations/config.js
var t2 = 128;
var a = 70;
var e7 = 80;
var h2 = 0.02;
var M2 = 54;
var c3 = 100;
var o4 = Math.ceil(a / 3 * 2);
var I = 160;
var P3 = 0.5;
var i2 = 24;
var l3 = 9;
var n2 = I + 30;
var p5 = I + 53;
var r3 = 60;
var s = 23;
var x = 5 * Math.PI / 12;
var b = 1 * Math.PI / 3;
var d4 = 10;
var f4 = 0.2;
var g3 = 30;
var j3 = 53;
var k = 0.2;
var m2 = 0.3;
var q2 = 200;
var u3 = 3;
var v = 1e6;

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/manipulations/moveUtils.js
function n3(n4, a3, r4) {
  const c5 = (t4, e9) => {
    a3({
      action: t4,
      object: n4,
      dxScreen: e9.screenDeltaX,
      dyScreen: e9.screenDeltaY
    });
  };
  return r4((a4, r5, s2) => (r5.next((t4) => ("start" === t4.action && c5("start", t4), t4)).next(f3(n4)).next((t4) => {
    switch (t4.action) {
      case "start":
      case "update":
        (t4.translationX || t4.translationY || t4.translationZ) && c5("update", t4);
        break;
      case "end":
        c5("end", t4);
    }
    return t4;
  }), {
    steps: r5,
    cancel: s2 = s2.next(g2(n4)).next((t4) => (c5("end", {
      screenDeltaX: 0,
      screenDeltaY: 0
    }), t4))
  }));
}
function a2(t4) {
  if (null == t4?.axis) return 1;
  const {
    mapStart: e9,
    mapEnd: n4,
    axis: a3
  } = t4, r4 = [n4.x - e9.x, n4.y - e9.y];
  return r4[0] * a3[0] + r4[1] * a3[1] > 0 ? 1 : -1;
}

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/manipulations/Manipulation.js
var t3 = class {
  constructor() {
    this._available = true;
  }
  set location(a3) {
    this._forEachManipulator3D((t4) => t4.location = a3);
  }
  set elevationAlignedLocation(a3) {
    this._forEachManipulator3D((t4) => t4.elevationAlignedLocation = a3);
  }
  set elevationInfo(a3) {
    this._forEachManipulator3D((t4) => t4.elevationInfo = a3);
  }
  get renderLocation() {
    let a3;
    return this._forEachManipulator3D((t4) => {
      a3 || (a3 = t4.renderLocation);
    }), a3;
  }
  get available() {
    return this._available;
  }
  set available(a3) {
    this._available = a3, this._forEachManipulator3D((t4) => t4.available = a3);
  }
  get hovering() {
    return this.someManipulator((a3) => a3.hovering);
  }
  get grabbing() {
    return this.someManipulator((a3) => a3.grabbing);
  }
  get dragging() {
    return this.someManipulator((a3) => a3.dragging);
  }
  get selected() {
    return this.someManipulator((a3) => a3.selected);
  }
  hasManipulator(a3) {
    return this.someManipulator((t4) => t4 === a3);
  }
  someManipulator(a3) {
    let t4 = false;
    return this.forEachManipulator((i3) => {
      !t4 && a3(i3) && (t4 = true);
    }), t4;
  }
  _forEachManipulator3D(t4) {
    this.forEachManipulator((i3, e9) => {
      i3 instanceof ee && t4(i3, e9);
    });
  }
};

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/manipulations/MoveXYAxisManipulation.js
var C = class extends t3 {
  constructor(t4) {
    super(), this._handles = new r(), this._arrowManipulatorInfos = new Array(), this._angle = 0, this._scale = 1, this._radius = a, this._updateAfterDrag = false, this.events = new o2(), this._tool = t4.tool, this._view = t4.view, this._opaqueMaterial = this._createMaterial(), this._transparentMaterial = this._createMaterial(0.5), null != t4.radius && (this._radius = t4.radius), this._createManipulators(), this.forEachManipulator((t5) => this._tool.manipulators.add(t5));
  }
  set orthogonalAvailable(t4) {
    this._arrowManipulatorInfos.length >= 3 && (this._arrowManipulatorInfos[1].manipulator.available = t4, this._arrowManipulatorInfos[3].manipulator.available = t4);
  }
  destroy() {
    this._handles = u(this._handles), this.forEachManipulator((t4) => {
      this._tool.manipulators.remove(t4), t4.destroy();
    }), this._tool = null, this._view = null, this._arrowManipulatorInfos.length = 0;
  }
  forEachManipulator(t4) {
    for (const {
      manipulator: r4
    } of this._arrowManipulatorInfos) t4(r4, A.TRANSLATE_XY);
  }
  createManipulatedObjectDragPipeline(t4, r4, a3) {
    if (!r4.operations) return e();
    const i3 = r4.operations.data.spatialReference, o5 = r4.graphic;
    return n3(r4, a3, (a4) => this.createDragPipeline((r5, e9, i4, o6, s2) => ({
      steps: e9,
      cancel: i4
    } = t4(r5, e9, i4, o6, s2), a4(r5, e9, i4)), r4.elevationInfo, i3, o5));
  }
  createDragPipeline(t4, r4, a3, e9) {
    return o(this._arrowManipulatorInfos.map(({
      manipulator: i3
    }, o5) => p4(i3, (i4, s2, n4, l4, p6) => {
      const u5 = s2.next((t5) => __spreadProps(__spreadValues({}, t5), {
        manipulatorType: A.TRANSLATE_XY
      })).next(M(this._view, i4.elevationAlignedLocation)).next(D(this._view, i4.elevationAlignedLocation, r4, a3, e9)).next(m(i4.location, this.angle + (o5 + 1) * Math.PI * 0.5)).next(j());
      t4(i4, u5, n4, l4, p6);
    })));
  }
  get angle() {
    return this._angle;
  }
  set angle(t4) {
    this._angle = t4, this.dragging ? this._updateAfterDrag = true : this._updateManipulatorTransform();
  }
  get displayScale() {
    return this._scale;
  }
  set displayScale(t4) {
    this._scale = t4, this._updateManipulatorTransform();
  }
  get radius() {
    return this._radius;
  }
  set radius(t4) {
    this._radius !== t4 && (this._radius = t4, this._updateManipulators());
  }
  _updateManipulators() {
    for (let t4 = 0; t4 < this._arrowManipulatorInfos.length; t4++) this._updateArrowManipulator(this._arrowManipulatorInfos[t4], t4);
    this._updateManipulatorTransform();
  }
  _updateArrowManipulator({
    manipulator: t4,
    transform: r4
  }, a3) {
    const e9 = this._radius / a, i3 = M2 * e9, o5 = i3 * Math.sqrt(3) / 2, s2 = wt(this._opaqueMaterial, o5, i3 / 2, i3 / 2, h2);
    mt(s2, q(f.get(), o3(c2.get(), 0, -o5 / 3, 0))), t4.renderObjects = [new e6(s2, t.Focused), new e6(s2.instantiate({
      material: this._transparentMaterial
    }), t.Unfocused)], t4.radius = o5 / 3 * 2 * 1.2;
    const n4 = R(f.get(), a3 * Math.PI / 2), h4 = q(f.get(), o3(c2.get(), 0, c3 * e9, 0));
    c(r4, n4, h4);
  }
  _createManipulators() {
    for (let t4 = 0; t4 < 4; t4++) {
      const r4 = this._createArrowManipulator(t4);
      this._arrowManipulatorInfos.push(r4);
    }
    this._updateManipulatorTransform();
  }
  _updateManipulatorTransform() {
    const t4 = this.angle, r4 = p2(f.get(), t4, r2(0, 0, 1));
    if (null == r4) return;
    const a3 = d2(f.get(), o3(c2.get(), this.displayScale, this.displayScale, this.displayScale)), e9 = c(f.get(), a3, r4);
    for (const i3 of this._arrowManipulatorInfos) {
      const t5 = c(f.get(), e9, i3.transform);
      i3.manipulator.modelTransform = t5;
    }
  }
  _createArrowManipulator(t4) {
    const r4 = new ee({
      view: this._view,
      autoScaleRenderObjects: false,
      worldOriented: true,
      focusMultiplier: 1,
      touchMultiplier: 1,
      collisionType: {
        type: "disc",
        direction: r2(0, 0, 1)
      }
    }), a3 = {
      manipulator: r4,
      transform: e4()
    };
    return this._updateArrowManipulator(a3, t4), this._handles.add(r4.events.on("drag", (t5) => {
      this._updateAfterDrag && "end" === t5.action && !this.dragging && (this._updateManipulatorTransform(), this._updateAfterDrag = false);
    })), a3;
  }
  _createMaterial(r4 = 1) {
    const a3 = new d3({
      cullFace: e5.Back,
      renderOccluded: h.Transparent,
      isDecoration: true
    });
    return this._handles.add(d(() => u2.toUnitRGBA(this._view.effectiveTheme.accentColor), (t4) => {
      t4[3] *= r4, a3.setParameters({
        color: t4
      });
    }, P)), a3;
  }
  get test() {
  }
};

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/snapping/SnapToScene.js
var e8 = class {
  constructor() {
    this._view = null, this._elevationInfo = null, this._lastDragEvent = null, this._next = null, this._enabled = false;
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(t4) {
    if (this._enabled !== t4 && null != this._lastDragEvent && null != this._next) {
      const n4 = this._lastDragEvent.mapEnd, e9 = this._snap(this._lastDragEvent.screenEnd);
      if (null != e9) {
        const s2 = {
          action: "update",
          mapStart: this._lastDragEvent.mapStart,
          mapEnd: true === t4 ? e9 : n4,
          screenStart: this._lastDragEvent.screenEnd,
          screenEnd: this._lastDragEvent.screenEnd
        };
        this._next.execute(s2);
      }
    }
    this._enabled = t4;
  }
  _snap(n4) {
    const e9 = null != this._view ? this._view.toMap(n4, {
      exclude: []
    }) : null;
    return null != e9 && null != this._view && (e9.z = p3(e9, this._view, this._elevationInfo)), e9;
  }
  createDragEventPipelineStep(t4, e9) {
    this._view = t4, this._elevationInfo = e9, this._lastDragEvent = null;
    const s2 = new w();
    this._next = s2;
    return [(t5) => {
      if (this._lastDragEvent = "end" !== t5.action ? __spreadValues({}, t5) : null, this._enabled) {
        const n4 = this._snap(t5.screenEnd);
        return null != n4 ? {
          action: t5.action,
          mapStart: t5.mapStart,
          mapEnd: n4,
          screenStart: t5.screenStart,
          screenEnd: t5.screenEnd
        } : null;
      }
      return {
        action: t5.action,
        mapStart: t5.mapStart,
        mapEnd: t5.mapEnd,
        screenStart: t5.screenStart,
        screenEnd: t5.screenEnd
      };
    }, s2];
  }
};

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/manipulations/MoveXYDiscManipulation.js
var O = class extends t3 {
  constructor(t4) {
    super(), this._handles = new r(), this._snapToScene = new e8(), this._scale = 1, this._radius = a, this._view = t4.view, this._tool = t4.tool, this._discMaterial = this._createMaterial(), this._discMaterialTransparent = this._createMaterial(0.5), null != t4.snapToScene && (this.snapToScene = t4.snapToScene), null != t4.radius && (this._radius = t4.radius), this._createManipulator(), this.forEachManipulator((t5) => this._tool.manipulators.add(t5));
  }
  destroy() {
    this._handles = u(this._handles), this.forEachManipulator((t4) => {
      this._tool.manipulators.remove(t4), t4.destroy();
    }), this._tool = null, this._view = null, this._manipulator = null;
  }
  forEachManipulator(t4) {
    t4(this._manipulator, A.TRANSLATE_XY);
  }
  get displayScale() {
    return this._scale;
  }
  set displayScale(t4) {
    this._scale = t4, this._updateManipulatorTransform();
  }
  get snapToScene() {
    return this._snapToScene.enabled;
  }
  set snapToScene(t4) {
    this._snapToScene.enabled = t4;
  }
  get radius() {
    return this._radius;
  }
  set radius(t4) {
    t4 !== this._radius && (this._radius = t4, this._updateManipulator());
  }
  get discManipulator() {
    return this._manipulator;
  }
  createManipulatedObjectDragPipeline(t4, e9, a3) {
    if (!e9.operations) return e();
    const r4 = e9.graphic, s2 = e9.elevationInfo, o5 = e9.operations.data.spatialReference;
    return n3(e9, a3, (e10) => this.createDragPipeline((i3, a4, r5, s3, o6) => ({
      steps: a4,
      cancel: r5
    } = t4(i3, a4, r5, s3, o6), e10(i3, a4, r5)), s2, o5, r4));
  }
  createDragPipeline(t4, e9, i3, a3) {
    const r4 = this._view;
    return p4(this._manipulator, (s2, o5, n4, l4, p6) => {
      const c5 = o5.next(M(r4, s2.elevationAlignedLocation)).next(D(r4, s2.elevationAlignedLocation, e9, i3, a3)).next(...this._snapToScene.createDragEventPipelineStep(r4, e9)).next((t5) => __spreadProps(__spreadValues({}, t5), {
        manipulatorType: A.TRANSLATE_XY
      })).next(j());
      t4(s2, c5, n4, l4, p6);
    });
  }
  _updateManipulatorTransform() {
    const t4 = d2(f.get(), o3(c2.get(), this.displayScale, this.displayScale, this.displayScale));
    this._manipulator.modelTransform = t4;
  }
  _createManipulator() {
    const t4 = this._view;
    this._manipulator = new ee({
      view: t4,
      worldSized: false,
      autoScaleRenderObjects: false,
      focusMultiplier: 1,
      touchMultiplier: 1,
      collisionType: {
        type: "disc",
        direction: r2(0, 0, 1)
      },
      worldOriented: true
    }), this._updateManipulator();
  }
  _updateManipulator() {
    const t4 = ft(this._discMaterial, h2, 1, t2, r2(0, 0, 1), r2(0, 0, 0));
    t4.transformation = d2(e4(), r2(this._radius, this._radius, this._radius)), this._manipulator.renderObjects = [new e6(t4, t.Focused), new e6(t4.instantiate({
      material: this._discMaterialTransparent
    }), t.Unfocused)], this._manipulator.radius = e7 * (this._radius / a);
  }
  _createMaterial(e9 = 1) {
    const i3 = new d3({
      cullFace: e5.Back,
      renderOccluded: h.Transparent,
      isDecoration: true
    });
    return this._handles.add(d(() => u2.toUnitRGBA(this._view.effectiveTheme.accentColor), (t4) => {
      t4[3] *= e9, i3.setParameters({
        color: t4
      });
    }, P)), i3;
  }
  get test() {
  }
};

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/manipulations/MoveZManipulation.js
var R2 = class extends t3 {
  constructor(t4) {
    super(), this._radius = a, this.events = new o2(), this._tool = t4.tool, this._view = t4.view;
    const e9 = new j2({
      getTheme: () => this._view.effectiveTheme
    });
    this._settings = e9, null != t4.radius && (this._radius = t4.radius);
    const r4 = this._view.effectiveTheme.accentColor;
    this._materials = {
      materialUnfocused: f2(C2(r4, 1, 0.25), h.Occlude),
      materialFocused: f2(C2(r4, 1, 0), h.Occlude),
      materialOccludedUnfocused: f2(C2(r4, 0.7, 0), e9.zManipulator.renderOccluded),
      materialOccludedFocused: f2(C2(r4, 0.85, 0), e9.zManipulator.renderOccluded)
    }, this._themeHandle = d(() => this._view.effectiveTheme.accentColor, (t5) => {
      const e10 = C2(t5, 1, 0.25), i3 = C2(t5, 1, 0), r5 = C2(t5, 0.7, 0), a3 = C2(t5, 0.85, 0), {
        materialUnfocused: o5,
        materialFocused: s2,
        materialOccludedUnfocused: n4,
        materialOccludedFocused: l4
      } = this._materials;
      o5.setParameters({
        color: e10
      }), s2.setParameters({
        color: i3
      }), n4.setParameters({
        color: r5
      }), l4.setParameters({
        color: a3
      });
    }), this._createManipulator(), this.forEachManipulator((t5) => this._tool.manipulators.add(t5));
  }
  destroy() {
    this._themeHandle = l(this._themeHandle), this._manipulator.applyObjectTransform = L2, this.forEachManipulator((t4) => {
      this._tool.manipulators.remove(t4), t4.destroy();
    });
  }
  forEachManipulator(t4) {
    t4(this._manipulator, A.TRANSLATE_Z);
  }
  createManipulatedObjectDragPipeline(t4, e9, i3) {
    if (!e9.operations) return e();
    const a3 = e9.operations.data.spatialReference;
    return n3(e9, i3, (e10) => this.createDragPipeline((i4, r4, a4, o5, s2) => ({
      steps: r4,
      cancel: a4
    } = t4(i4, r4, a4, o5, s2), e10(i4, r4, a4)), a3));
  }
  createDragPipeline(t4, e9) {
    const i3 = this._view;
    return p4(this._manipulator, (r4, a3, o5, s2, n4) => {
      const l4 = a3.next((t5) => __spreadProps(__spreadValues({}, t5), {
        manipulatorType: A.TRANSLATE_Z
      })).next(G(i3, r4.renderLocation, e9)).next(j());
      t4(r4, l4, o5, s2, n4);
    });
  }
  get radius() {
    return this._radius;
  }
  set radius(t4) {
    t4 !== this._radius && (this._radius = t4, this._updateManipulator());
  }
  _updateManipulator() {
    const t4 = this._settings, e9 = this._radius / a, i3 = t4.zManipulator.height * e9, r4 = t4.zManipulator.coneHeight * e9, a3 = t4.zManipulator.coneWidth * e9, o5 = t4.zManipulator.width * e9, s2 = [r2(0, 0, 0), r2(0, 0, i3)], m3 = [r2(0, 0, 0), r2(0, 0, i3 + r4)], u5 = ((t5) => {
      const e10 = e4();
      return i(e10, e10, [0, 0, i3]), l2(e10, e10, Math.PI / 2), e10;
    })(), {
      materialUnfocused: d5,
      materialFocused: p6,
      materialOccludedUnfocused: h4,
      materialOccludedFocused: f5
    } = this._materials, _2 = pt(d5, s2, o5 / 2, 16, false), w2 = at(d5, r4, a3 / 2, 16, false);
    w2.transformation = u5, this._manipulator.renderObjects = [new e6(w2, t.Unfocused), new e6(_2, t.Unfocused), new e6(w2.instantiate({
      material: p6
    }), t.Focused), new e6(_2.instantiate({
      material: p6
    }), t.Focused), new e6(w2.instantiate({
      material: h4
    }), t.Unfocused), new e6(_2.instantiate({
      material: h4
    }), t.Unfocused), new e6(w2.instantiate({
      material: f5
    }), t.Focused), new e6(_2.instantiate({
      material: f5
    }), t.Focused)], this._manipulator.radius = o5 / 2 + 2, this._manipulator.collisionType = {
      type: "line",
      paths: [m3]
    };
  }
  _createManipulator() {
    const t4 = this._view, e9 = new ee({
      view: t4,
      autoScaleRenderObjects: false,
      worldSized: false,
      selectable: false,
      cursor: "ns-resize",
      elevationInfo: this.elevationInfo,
      worldOriented: true,
      collisionPriority: 1.6
    });
    e9.applyObjectTransform = (e10) => {
      const i3 = t4.state.camera, r4 = D2;
      t4.renderCoordsHelper.toRenderCoords(this._manipulator.elevationAlignedLocation, r4);
      const o5 = U(i3.eye, r4), s2 = i3.computeRenderPixelSizeAtDist(o5), n4 = e2(H, r4, i3.eye);
      z(n4, n4);
      const l4 = S;
      t4.renderCoordsHelper.worldUpAtPosition(D2, l4);
      const c5 = Math.abs(P2(n4, l4)), _2 = _(H, n4, l4), j4 = _(H, _2, l4), w2 = e3(c5, 0.01, 1), v2 = 1 - Math.sqrt(1 - w2 * w2) / w2 / i3.fullWidth, g4 = this._settings, M3 = this._radius / a, U2 = g4.zManipulator.width * M3;
      g(j4, z(j4, j4), (1 / v2 - 1) * o5 + s2 * U2), e10[12] -= H[0], e10[13] -= H[1], e10[14] -= H[2];
    }, this._manipulator = e9, this._updateManipulator();
  }
  get test() {
  }
};
function C2(i3, r4, a3) {
  const o5 = L(i3, a3);
  return o5.a *= r4, u2.toUnitRGBA(o5);
}
var D2 = n();
var H = n();
var S = n();
var L2 = () => {
};

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/manipulations/MoveManipulation.js
var u4 = class extends t3 {
  constructor(a3) {
    super(), this._handles = new r(), this._interactive = true;
    const {
      tool: t4,
      view: n4,
      snapToScene: e9,
      radius: s2
    } = a3;
    this._view = n4, this.xyManipulation = new O({
      tool: t4,
      view: n4,
      snapToScene: e9,
      radius: s2
    }), this.xyAxisManipulation = new C({
      tool: t4,
      view: n4,
      radius: s2
    }), this.zManipulation = new R2({
      tool: t4,
      view: n4,
      radius: s2
    }), this.xyManipulation.available = a3.xyAvailable, this.xyAxisManipulation.available = a3.xyAxisAvailable, this.zManipulation.available = a3.zAvailable, this._autoHideXYAxis(), this.forEachManipulator((i3) => this._handles.add(i3.events.on("grab-changed", () => this._updateManipulatorInteractivity())));
  }
  destroy() {
    this._handles.destroy(), this.xyManipulation.destroy(), this.xyAxisManipulation.destroy(), this.zManipulation.destroy();
  }
  createManipulatedObjectDragPipeline(i3, t4, n4) {
    return o([this.xyManipulation.createManipulatedObjectDragPipeline((a3, t5, n5, e9, s2) => i3(c4.XY, a3, t5, n5, e9, s2), t4, n4), this.xyAxisManipulation.createManipulatedObjectDragPipeline((a3, t5, n5, e9, s2) => i3(c4.XY_AXIS, a3, t5, n5, e9, s2), t4, n4), this.zManipulation.createManipulatedObjectDragPipeline((a3, t5, n5, e9, s2) => i3(c4.Z, a3, t5, n5, e9, s2), t4, n4)]);
  }
  createDragPipeline(i3, t4, n4, e9) {
    return o([this.xyManipulation.createDragPipeline((a3, t5, n5, e10, s2) => i3(c4.XY, a3, t5, n5, e10, s2), t4, n4, e9), this.xyAxisManipulation.createDragPipeline((a3, t5, n5, e10, s2) => i3(c4.XY_AXIS, a3, t5, n5, e10, s2), t4, n4, e9), this.zManipulation.createDragPipeline((a3, t5, n5, e10, s2) => i3(c4.Z, a3, t5, n5, e10, s2), n4)]);
  }
  set snapToScene(i3) {
    this.xyManipulation.snapToScene = i3;
  }
  set angle(i3) {
    this.xyAxisManipulation.angle = i3;
  }
  set interactive(i3) {
    this._interactive !== i3 && (this._interactive = i3, this._updateManipulatorInteractivity());
  }
  set radius(i3) {
    this.xyAxisManipulation.radius = i3, this.xyManipulation.radius = i3, this.zManipulation.radius = i3;
  }
  set displayScale(i3) {
    this.xyManipulation.displayScale = i3, this.xyAxisManipulation.displayScale = i3;
  }
  forEachManipulator(i3) {
    this.xyManipulation.forEachManipulator((a3) => i3(a3, A.TRANSLATE_XY)), this.xyAxisManipulation.forEachManipulator((a3) => i3(a3, A.TRANSLATE_XY)), this.zManipulation.forEachManipulator((a3) => i3(a3, A.TRANSLATE_Z));
  }
  get _xyAxisVisible() {
    const i3 = this.xyManipulation.someManipulator((i4) => i4.focused) || this.xyAxisManipulation.someManipulator((i4) => i4.focused);
    return this._view.inputManager && "touch" === this._view.inputManager.latestPointerType || i3;
  }
  _autoHideXYAxis() {
    const i3 = this.xyAxisManipulation, a3 = this.xyManipulation;
    if (has("esri-mobile")) return;
    const n4 = [];
    a3.forEachManipulator((i4) => n4.push(i4)), i3.forEachManipulator((i4) => n4.push(i4));
    const e9 = () => {
      const a4 = [];
      this._xyAxisVisible || i3.forEachManipulator((i4) => a4.push(i4.disableDisplay())), this._handles.remove(h3), this._handles.add(a4, h3);
    };
    for (const t4 of n4) this._handles.add(t4.events.on("focus-changed", e9));
    this._view.inputManager && this._handles.add(p(() => this._view.inputManager?.latestPointerType, e9)), e9();
  }
  _updateManipulatorInteractivity() {
    const i3 = this.grabbing;
    this.forEachManipulator((a3) => {
      a3.interactive = !i3 && this._interactive || a3.grabbing;
    });
  }
  static radiusForSymbol(i3) {
    const a3 = null != i3 && "point-3d" === i3.type && i3.symbolLayers;
    return !!a3 && a3.some((i4) => "icon" === i4.type) ? o4 : a;
  }
};
var h3 = "disable-xy-axis-display";
var c4;
!function(i3) {
  i3[i3.XY = 0] = "XY", i3[i3.XY_AXIS = 1] = "XY_AXIS", i3[i3.Z = 2] = "Z";
}(c4 || (c4 = {}));

export {
  A,
  t2 as t,
  a,
  o4 as o,
  I,
  P3 as P,
  i2 as i,
  l3 as l,
  n2 as n,
  p5 as p,
  r3 as r,
  s,
  x,
  b,
  d4 as d,
  f4 as f,
  g3 as g,
  j3 as j,
  k,
  m2 as m,
  q2 as q,
  u3 as u,
  v,
  t3 as t2,
  n3 as n2,
  a2,
  u4 as u2,
  c4 as c
};
//# sourceMappingURL=chunk-FP2KUV22.js.map
