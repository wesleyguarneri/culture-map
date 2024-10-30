import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  g as g2
} from "./chunk-NCXTRC7L.js";
import {
  h as h7
} from "./chunk-SF5T5ZX3.js";
import {
  b as b3
} from "./chunk-ATL6GPJC.js";
import {
  k,
  u as u5,
  x as x2
} from "./chunk-IPGNBAEV.js";
import {
  d as d3
} from "./chunk-N7TLJ6LV.js";
import {
  a
} from "./chunk-INUNNFZT.js";
import {
  it
} from "./chunk-2NPPOPEZ.js";
import {
  O as O4,
  a as a2
} from "./chunk-JP4VYCP3.js";
import {
  C
} from "./chunk-T4DTOVU4.js";
import {
  t as t4,
  u as u4
} from "./chunk-WOWVQEU2.js";
import {
  E as E3
} from "./chunk-4WON4QDF.js";
import {
  E as E4,
  b as b2,
  p as p2
} from "./chunk-45GTM6LF.js";
import {
  A,
  O as O3,
  c as c4,
  l as l2,
  s as s3
} from "./chunk-XUZTWNKD.js";
import {
  t as t3
} from "./chunk-TIAWSZQK.js";
import {
  r as r4,
  r2 as r5,
  t as t2
} from "./chunk-22UDIQGJ.js";
import {
  t
} from "./chunk-Z5ZLX3BE.js";
import {
  r as r6
} from "./chunk-LA4GCRJY.js";
import {
  c2 as c3,
  h as h5,
  u2 as u3
} from "./chunk-UE7ZYRIH.js";
import {
  o as o5
} from "./chunk-62ZEBDPC.js";
import {
  S as S3,
  _ as _4,
  h as h6,
  o as o6
} from "./chunk-HUOFTIIK.js";
import {
  e as e7
} from "./chunk-EPIUUGS2.js";
import {
  B,
  h as h4,
  j as j2,
  v
} from "./chunk-SNHVHW2N.js";
import {
  H
} from "./chunk-GHPF24X4.js";
import {
  s as s2
} from "./chunk-LCPLUSDH.js";
import {
  O as O2
} from "./chunk-KYLW5XXS.js";
import {
  i as i2
} from "./chunk-DLWZ3HVT.js";
import {
  b
} from "./chunk-B76NC7GX.js";
import {
  h as h3
} from "./chunk-ZSJNH2BT.js";
import {
  d as d2,
  o as o4
} from "./chunk-HITI6WDM.js";
import {
  m
} from "./chunk-6ZLH7XBS.js";
import {
  D
} from "./chunk-NAG6YX7T.js";
import {
  E as E2,
  S as S2,
  c as c2,
  f,
  j
} from "./chunk-2TNGEJGS.js";
import {
  e as e6
} from "./chunk-D7C26LZP.js";
import {
  n as n4
} from "./chunk-MRP3FBLV.js";
import {
  n as n5
} from "./chunk-A2FDYA6M.js";
import {
  e as e4
} from "./chunk-YGAXDKHF.js";
import {
  e as e5
} from "./chunk-4TOSJLKR.js";
import {
  n as n3
} from "./chunk-C7BQE556.js";
import {
  E,
  _ as _3
} from "./chunk-VOOO6FU5.js";
import {
  r as r3
} from "./chunk-VSQZQLTQ.js";
import {
  $,
  J
} from "./chunk-LM3JDV4W.js";
import {
  c,
  h as h2,
  n as n2,
  o as o3,
  r as r2
} from "./chunk-KOI252FF.js";
import {
  d,
  i,
  x,
  y as y2
} from "./chunk-VYTPFEL2.js";
import {
  F
} from "./chunk-GCVQXAS4.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  y
} from "./chunk-QGBMZIP4.js";
import {
  h
} from "./chunk-2OZSYJDX.js";
import {
  O,
  S,
  _ as _2,
  e as e3,
  g,
  o as o2,
  p,
  r,
  u as u2,
  z
} from "./chunk-MZM4INJV.js";
import {
  l,
  n
} from "./chunk-J4GMQHGL.js";
import {
  s3 as s
} from "./chunk-6SSA7P3A.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  e
} from "./chunk-6UEMNP3E.js";
import {
  u
} from "./chunk-6WGE3IUL.js";

// ../../../node_modules/@arcgis/core/views/3d/interactive/Manipulator3D.js
var ee = class {
  constructor(e9) {
    this.metadata = void 0, this._camera = new it(), this._elevation = {
      offset: 0,
      override: null
    }, this.collisionType = {
      type: "point"
    }, this.collisionPriority = 0, this._renderObjects = new Array(), this.autoScaleRenderObjects = true, this._available = true, this._noDisplayCount = 0, this._radius = 10, this._worldSized = false, this.focusMultiplier = 2, this.touchMultiplier = 2.5, this.worldOriented = false, this._modelTransform = e4(), this._worldFrame = null, this._renderLocation = n(), this._renderLocationDirty = true, this._location = new _({
      x: 0,
      y: 0,
      z: 0
    }), this._elevationAlignedLocation = new _(), this._elevationAlignedLocationDirty = true, this.interactive = true, this.selectable = false, this.grabbable = true, this.consumesClicks = true, this.cursor = null, this.grabCursor = null, this._grabbing = false, this.dragging = false, this._hovering = false, this._selected = false, this._state = u4.None, this._focused = false, this.events = new o.EventEmitter(), this._screenLocation = {
      screenPointArray: i(),
      renderScreenPointArray: x(),
      pixelSize: 0
    }, this._screenLocationDirty = true, this._engineResourcesAddedToStage = false, this._attached = false, this._location.spatialReference = e9.view.spatialReference, Object.assign(this, e9);
    const i3 = this.view.state?.camera;
    i3 && this._camera.copyFrom(i3);
  }
  destroy() {
    this._applyObjectTransform = pe, this._removeResourcesFromStage(), this._engineResources = null, this.view = null, this._camera = null;
  }
  get _stage() {
    return this.view?._stage;
  }
  get elevationInfo() {
    return this._elevationInfo;
  }
  set elevationInfo(e9) {
    this._elevationInfo = e9, this._elevationAlignedLocationDirty = true, this._renderLocationDirty = true, this._updateEngineObject();
  }
  get renderObjects() {
    return this._renderObjects;
  }
  set renderObjects(e9) {
    this._removeResourcesFromStage(), this._engineResources = null, this._renderObjects = e9.slice(), this._updateEngineObject();
  }
  set available(e9) {
    e9 !== this._available && (this._available = e9, this._updateEngineObject());
  }
  get available() {
    return this._available;
  }
  disableDisplay() {
    return this._noDisplayCount++, 1 === this._noDisplayCount && this._updateEngineObject(), e(() => {
      this._noDisplayCount--, 0 === this._noDisplayCount && this._updateEngineObject();
    });
  }
  set radius(e9) {
    e9 !== this._radius && (this._radius = e9, this._updateEngineObject());
  }
  get radius() {
    return this._radius;
  }
  set worldSized(e9) {
    e9 !== this._worldSized && (this._worldSized = e9, this._updateEngineObject());
  }
  get worldSized() {
    return this._worldSized;
  }
  get modelTransform() {
    return this._modelTransform;
  }
  set modelTransform(e9) {
    te(e9) && (this._screenLocationDirty = true), n2(this._modelTransform, e9), this._updateEngineObject();
  }
  get renderLocation() {
    return this._renderLocationDirty && (this._renderLocationDirty = false, this.view.renderCoordsHelper.toRenderCoords(this.elevationAlignedLocation, this._renderLocation), this.worldOriented ? (this._worldFrame || (this._worldFrame = e4()), ie(this.view, this._renderLocation, this._worldFrame)) : this._worldFrame && (this._worldFrame = null)), this._renderLocation;
  }
  set renderLocation(e9) {
    this.view.renderCoordsHelper.fromRenderCoords(e9, this._location), this.elevationAlignedLocation = this._location;
  }
  get location() {
    return this._location;
  }
  set location(e9) {
    x2(e9, this._location), this._notifyLocationChanged();
  }
  _notifyLocationChanged() {
    this._renderLocationDirty = true, this._screenLocationDirty = true, this._elevationAlignedLocationDirty = true, this._updateEngineObject(), this.events.emit("location-update", {
      location: this._location
    });
  }
  get elevationAlignedLocation() {
    return this._elevationAlignedLocationDirty ? (this._evaluateElevationAlignment(), this._updateElevationAlignedLocation(), this._elevationAlignedLocation) : this._elevationAlignedLocation;
  }
  set elevationAlignedLocation(e9) {
    x2(e9, this._location), this._evaluateElevationAlignment(), this._location.z -= this._elevation.offset, this._updateElevationAlignedLocation(), this._updateEngineObject(), this.events.emit("location-update", {
      location: this._location
    });
  }
  _updateElevationAlignedLocation() {
    const e9 = null != this._elevation.override ? this._elevation.override : this.location.z || 0;
    this._elevationAlignedLocation.x = this.location.x, this._elevationAlignedLocation.y = this.location.y, this._elevationAlignedLocation.z = e9 + this._elevation.offset, this._elevationAlignedLocation.spatialReference = k(this.location.spatialReference), this._renderLocationDirty = true, this._screenLocationDirty = true, this._elevationAlignedLocationDirty = false;
  }
  grabbableForEvent() {
    return true;
  }
  get grabbing() {
    return this._grabbing;
  }
  set grabbing(e9) {
    e9 !== this._grabbing && (this._grabbing = e9, this._setFocused(this._hovering || this._grabbing), this._updateEngineObject());
  }
  get hovering() {
    return this._hovering;
  }
  set hovering(e9) {
    e9 !== this._hovering && (this._hovering = e9, this._setFocused(this._hovering || this._grabbing), this._updateEngineObject());
  }
  get selected() {
    return this._selected;
  }
  set selected(e9) {
    e9 !== this._selected && (this._selected = e9, this._updateEngineObject(), this.events.emit("select-changed", {
      action: e9 ? "select" : "deselect"
    }));
  }
  get state() {
    return this._state;
  }
  set state(e9) {
    e9 !== this._state && (this._state = e9, this._updateEngineObject());
  }
  updateStateEnabled(e9, t6) {
    t6 ? this.state |= e9 : this.state &= ~e9;
  }
  _setFocused(e9) {
    e9 !== this._focused && (this._focused = e9, this.events.emit("focus-changed", {
      action: true === e9 ? "focus" : "unfocus"
    }));
  }
  get focused() {
    return this._focused;
  }
  get screenLocation() {
    return this._ensureScreenLocation(), this._screenLocation;
  }
  _ensureScreenLocation() {
    if (!this._screenLocationDirty) return;
    this._screenLocation.pixelSize = this._camera.computeScreenPixelSizeAt(this.renderLocation), this._screenLocationDirty = false;
    let e9;
    if (te(this._modelTransform)) {
      const t6 = this._calculateModelTransformOffset(me);
      e9 = u2(t6, t6, this.renderLocation);
    } else e9 = this.renderLocation;
    this._camera.projectToRenderScreen(e9, this._screenLocation.renderScreenPointArray), this._camera.renderToScreen(this._screenLocation.renderScreenPointArray, this._screenLocation.screenPointArray);
  }
  get applyObjectTransform() {
    return this._applyObjectTransform;
  }
  set applyObjectTransform(e9) {
    this._applyObjectTransform = e9, this._screenLocationDirty = true, this._updateEngineObject();
  }
  get attached() {
    return this._attached;
  }
  intersectionDistance(t6, i3) {
    if (!this.available) return null;
    const s4 = d(t6, se), o7 = this._getCollisionRadius(i3), r7 = -1 * this.collisionPriority;
    switch (this.collisionType.type) {
      case "point":
        if (b(this.screenLocation.screenPointArray, s4) < o7 * o7) return this.screenLocation.renderScreenPointArray[2] + r7;
        break;
      case "line": {
        const e9 = this.collisionType.paths, t7 = this._getWorldToScreenObjectScale(), i4 = this._calculateObjectTransform(t7, ce), n6 = o7 * this.screenLocation.pixelSize, a3 = g2(this._camera, s4, re);
        if (null == a3) return null;
        for (const s5 of e9) {
          if (0 === s5.length) continue;
          const e10 = O(he, s5[0], i4);
          for (let t8 = 1; t8 < s5.length; t8++) {
            const o8 = O(de, s5[t8], i4), l3 = B(h4(e10, o8, oe), a3);
            if (null != l3 && l3 < n6 * n6) {
              const t9 = u2(c2.get(), e10, o8);
              g(t9, t9, 0.5);
              const i5 = y2(c2.get());
              return this._camera.projectToRenderScreen(t9, i5), i5[2] + r7;
            }
            r(e10, o8);
          }
        }
        break;
      }
      case "disc": {
        const e9 = this.collisionType.direction, t7 = this.collisionType.offset ?? l, i4 = this._getWorldToScreenObjectScale(), n6 = this._calculateObjectTransform(i4, ce), a3 = o7 * this.screenLocation.pixelSize, c5 = g2(this._camera, s4, re);
        if (null == c5) return null;
        const h9 = n5(ne, n6), d4 = S(ue, e9, h9), _5 = O(ge, t7, n6);
        j(_5, d4, le);
        const u6 = _e;
        if (S2(le, c5, u6) && p(u6, _5) < a3 * a3) return this.screenLocation.renderScreenPointArray[2] + r7;
        break;
      }
      case "ribbon": {
        const {
          paths: e9,
          direction: t7
        } = this.collisionType, i4 = this._getWorldToScreenObjectScale(), n6 = this._calculateObjectTransform(i4, ce), a3 = o7 * this._camera.computeScreenPixelSizeAt(this.renderLocation), h9 = g2(this._camera, s4, re);
        if (null == h9) return null;
        const d4 = n5(ne, n6), _5 = S(ue, t7, d4), u6 = this._calculateModelTransformPosition(ge);
        j(u6, _5, le);
        const g3 = _e;
        if (!S2(le, h9, g3)) break;
        for (const s5 of e9) {
          if (0 === s5.length) continue;
          const e10 = O(he, s5[0], n6);
          for (let t8 = 1; t8 < s5.length; t8++) {
            const i5 = O(de, s5[t8], n6), o8 = j2(h4(e10, i5, oe), g3);
            if (null != o8 && o8 < a3 * a3) {
              const t9 = u2(c2.get(), e10, i5);
              g(t9, t9, 0.5);
              const s6 = y2(c2.get());
              return this._camera.projectToRenderScreen(t9, s6), s6[2] + r7;
            }
            r(e10, i5);
          }
        }
        break;
      }
      default:
        n3(this.collisionType);
    }
    return null;
  }
  attach(e9 = {
    manipulator3D: {}
  }) {
    const t6 = this._stage;
    if (!t6) return;
    const i3 = e9.manipulator3D;
    null == i3.engineLayerId ? (this._engineLayer = new a2(t6, {
      pickable: false,
      updatePolicy: C.SYNC
    }), i3.engineLayerId = this._engineLayer.id) : t6?.getObject && (this._engineLayer = t6.getObject(i3.engineLayerId)), i3.engineLayerReferences = (i3.engineLayerReferences || 0) + 1, this._materialIdReferences = i3.materialIdReferences, null == this._materialIdReferences && (this._materialIdReferences = /* @__PURE__ */ new Map(), i3.materialIdReferences = this._materialIdReferences), this._camera.copyFrom(this.view.state.camera), this._attached = true, this._updateEngineObject(), J(this._location.spatialReference, this.view.spatialReference) || (this.location = new _({
      x: 0,
      y: 0,
      z: 0,
      spatialReference: this.view.spatialReference
    }));
  }
  detach(e9 = {
    manipulator3D: {}
  }) {
    const t6 = e9.manipulator3D;
    t6.engineLayerReferences--;
    const i3 = 0 === t6.engineLayerReferences;
    this._removeResourcesFromStage(), i3 && (t6.engineLayerId = null, u(this._engineLayer)), this._engineResources = null, this._engineLayer = null, this._materialIdReferences = null, this._attached = false;
  }
  onViewChange() {
    this._camera.copyFrom(this.view.state.camera), this._screenLocationDirty = true, this._updateEngineObject();
  }
  onElevationChange(e9) {
    $(this.location, fe, e9.spatialReference) && F(e9.extent, fe) && this._notifyLocationChanged();
  }
  _evaluateElevationAlignment() {
    if (null == this.elevationInfo) return;
    let e9 = null, t6 = 0;
    const i3 = h3(this.elevationInfo, this.location.spatialReference ?? this.view.elevationProvider.spatialReference);
    switch (this.elevationInfo.mode) {
      case "on-the-ground":
        e9 = a(this.view.elevationProvider, this.location, "ground") ?? 0;
        break;
      case "relative-to-ground":
        t6 = (a(this.view.elevationProvider, this.location, "ground") ?? 0) + i3;
        break;
      case "relative-to-scene":
        t6 = (a(this.view.elevationProvider, this.location, "scene") ?? 0) + i3;
        break;
      case "absolute-height":
        t6 = i3;
    }
    return t6 !== this._elevation.offset || e9 !== this._elevation.override ? (this._elevation.offset = t6, void (this._elevation.override = e9)) : void 0;
  }
  _updateEngineObject() {
    if (!this._attached) return;
    if (!this.available) return void this._removeResourcesFromStage();
    const e9 = this._getWorldToScreenObjectScale(), t6 = ce;
    if (true === this.autoScaleRenderObjects) {
      const i4 = this._getFocusedSize(this._radius, this.focused) * e9;
      this._calculateObjectTransform(i4, t6);
    } else this._calculateObjectTransform(e9, t6);
    const {
      objectsByState: i3
    } = this._ensureEngineResources(), s4 = (this.focused ? t4.Focused : t4.Unfocused) | (this.selected ? t4.Selected : t4.Unselected), o7 = this._noDisplayCount > 0;
    for (const {
      stateMask: r7,
      objects: n6
    } of i3) {
      if (o7) {
        for (const e11 of n6) e11.visible = false;
        continue;
      }
      const e10 = (r7 & t4.All) !== t4.None, i4 = (r7 & u4.All) !== u4.None, a3 = !e10 || (s4 & r7) == (r7 & t4.All), c5 = !i4 || (this.state & r7) == (r7 & u4.All);
      if (a3 && c5) for (const s5 of n6) s5.visible = true, s5.transformation = t6;
      else for (const t7 of n6) t7.visible = false;
    }
  }
  _ensureEngineResources() {
    if (null == this._engineResources) {
      const e9 = this._engineLayer, t6 = [], i3 = /* @__PURE__ */ new Set();
      this.renderObjects.forEach(({
        geometry: {
          material: e10
        }
      }) => {
        i3.has(e10) || (t6.push(e10), i3.add(e10));
      });
      const s4 = /* @__PURE__ */ new Map();
      this._renderObjects.forEach((e10) => {
        const t7 = new O4({
          castShadow: false,
          geometries: [e10.geometry]
        }), i4 = s4.get(e10.stateMask) || [];
        i4.push(t7), s4.set(e10.stateMask, i4);
      });
      const o7 = [];
      s4.forEach((e10, t7) => o7.push({
        stateMask: t7,
        objects: e10
      })), this._engineResources = {
        objectsByState: o7,
        layer: e9,
        materials: t6
      };
    }
    return this._addResourcesToStage(), this._engineResources;
  }
  _addResourcesToStage() {
    const e9 = this._stage;
    if (this._engineResourcesAddedToStage || null == this._engineResources || !e9) return;
    const {
      objectsByState: t6,
      layer: i3,
      materials: s4
    } = this._engineResources;
    s4.forEach((t7) => {
      const i4 = this._materialIdReferences, s5 = i4.get(t7.id) || 0;
      0 === s5 && e9.add(t7), i4.set(t7.id, s5 + 1);
    }), t6.forEach(({
      objects: t7
    }) => {
      i3.addMany(t7), e9.addMany(t7);
    }), this._engineResourcesAddedToStage = true;
  }
  _removeResourcesFromStage() {
    const e9 = this._stage;
    if (!this._engineResourcesAddedToStage || null == this._engineResources || !e9) return;
    const {
      objectsByState: t6,
      layer: i3,
      materials: s4
    } = this._engineResources;
    t6.forEach(({
      objects: t7
    }) => {
      i3.removeMany(t7), e9.removeMany(t7);
    }), s4.forEach((t7) => {
      const i4 = this._materialIdReferences, s5 = i4.get(t7.id);
      1 === s5 ? (e9.remove(t7), i4.delete(t7.id)) : i4.set(t7.id, s5 - 1);
    }), this._engineResourcesAddedToStage = false;
  }
  _getCollisionRadius(e9) {
    return this._getFocusedSize(this.radius, true) * ("touch" === e9 ? this.touchMultiplier : 1);
  }
  _getFocusedSize(e9, t6) {
    return e9 * (t6 ? this.focusMultiplier : 1);
  }
  _getWorldToScreenObjectScale() {
    return this._worldSized ? 1 : this.screenLocation.pixelSize;
  }
  _calculateModelTransformPosition(e9) {
    const t6 = this._getWorldToScreenObjectScale(), i3 = this._calculateObjectTransform(t6, ae);
    return o2(e9, i3[12], i3[13], i3[14]);
  }
  _calculateModelTransformOffset(e9) {
    const t6 = this._calculateModelTransformPosition(e9);
    return e3(e9, t6, this.renderLocation);
  }
  _calculateObjectTransform(e9, t6) {
    return r2(t6, e9, 0, 0, 0, 0, e9, 0, 0, 0, 0, e9, 0, 0, 0, 0, 1), this._worldFrame && c(t6, t6, this._worldFrame), c(t6, t6, this._modelTransform), t6[12] += this.renderLocation[0], t6[13] += this.renderLocation[1], t6[14] += this.renderLocation[2], t6[15] = 1, null != this._applyObjectTransform && this._applyObjectTransform(t6), t6;
  }
  get test() {
  }
};
function te(e9) {
  return 0 !== e9[12] || 0 !== e9[13] || 0 !== e9[14];
}
function ie(e9, t6, i3) {
  switch (e9.viewingMode) {
    case "local":
      return o3(i3), true;
    case "global": {
      const o7 = s(e9.renderCoordsHelper.spatialReference);
      return y(t6, 0, he, 0, o7.radius), n4(h(he[0]), h(he[1]), i3), true;
    }
  }
}
var se = i();
var oe = v();
var re = m();
var ne = e5();
var ae = e4();
var ce = e4();
var le = E2();
var he = n();
var de = n();
var _e = n();
var ue = n();
var ge = n();
var me = n();
var fe = new _({
  x: 0,
  y: 0,
  z: 0,
  spatialReference: null
});
var pe = () => {
};

// ../../../node_modules/@arcgis/core/views/3d/interactive/editingTools/manipulatedObjectUtils.js
function t5(t6) {
  return t6?.operations?.data.geometry;
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/ShadedColorMaterialTechnique.js
var j3 = class _j extends r4 {
  initializeProgram(e9) {
    return new r5(e9.rctx, _j.shader.get().build(this.configuration), E5);
  }
  _setPipelineState(e9) {
    const r7 = this.configuration, o7 = e9 === o5.NONE, i3 = e9 === o5.FrontFace;
    return S3({
      blending: r7.output === o4.Color && r7.transparent ? o7 ? A : c4(e9) : null,
      culling: h6(r7.cullFace),
      depthTest: {
        func: i3 ? O2.LESS : r7.shadingEnabled ? O2.LEQUAL : O2.LESS
      },
      depthWrite: o7 ? r7.writeDepth ? o6 : null : l2(e9),
      drawBuffers: s3(e9),
      colorWrite: _4,
      polygonOffset: o7 || i3 ? null : O3
    });
  }
  initializePipeline() {
    return this._setPipelineState(this.configuration.transparencyPassType);
  }
};
j3.shader = new t2(h7, () => import("./ShadedColorMaterial.glsl-B5WV75NV.js"));
var v2 = class extends t3 {
  constructor() {
    super(...arguments), this.output = o4.Color, this.cullFace = e7.None, this.transparencyPassType = o5.NONE, this.hasSlicePlane = false, this.transparent = false, this.writeDepth = true, this.screenSizeEnabled = true, this.shadingEnabled = true, this.multipassEnabled = false, this.cullAboveGround = false;
  }
};
e2([r6({
  count: o4.COUNT
})], v2.prototype, "output", void 0), e2([r6({
  count: e7.COUNT
})], v2.prototype, "cullFace", void 0), e2([r6({
  count: o5.COUNT
})], v2.prototype, "transparencyPassType", void 0), e2([r6()], v2.prototype, "hasSlicePlane", void 0), e2([r6()], v2.prototype, "transparent", void 0), e2([r6()], v2.prototype, "writeDepth", void 0), e2([r6()], v2.prototype, "screenSizeEnabled", void 0), e2([r6()], v2.prototype, "shadingEnabled", void 0), e2([r6()], v2.prototype, "multipassEnabled", void 0), e2([r6()], v2.prototype, "cullAboveGround", void 0), e2([r6({
  constValue: false
})], v2.prototype, "occlusionPass", void 0);
var E5 = /* @__PURE__ */ new Map([[e6.POSITION, 0], [e6.NORMAL, 1], [e6.OFFSET, 2]]);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/ShadedColorMaterial.js
var w = class extends c3 {
  constructor(e9) {
    super(e9, new x3()), this.supportsEdges = true, this.produces = /* @__PURE__ */ new Map([[E3.OPAQUE_MATERIAL, (e10) => e10 === o4.Highlight || d2(e10) && !this._isTransparent], [E3.TRANSPARENT_MATERIAL, (e10) => d2(e10) && this._isTransparent && this.parameters.writeDepth], [E3.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL, (e10) => d2(e10) && this._isTransparent && !this.parameters.writeDepth]]), this._configuration = new v2(), this._vertexAttributeLocations = E5;
  }
  getConfiguration(e9, t6) {
    return this._configuration.output = e9, this._configuration.cullFace = this.parameters.cullFace, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.transparent = this._isTransparent, this._configuration.writeDepth = this.parameters.writeDepth, this._configuration.screenSizeEnabled = this.parameters.screenSizeEnabled, this._configuration.shadingEnabled = this.parameters.shadingEnabled, this._configuration.transparencyPassType = t6.transparencyPassType, this._configuration.multipassEnabled = t6.multipassEnabled, this._configuration.cullAboveGround = t6.multipassTerrain.cullAboveGround, this._configuration;
  }
  intersect(e9, s4, a3, c5, l3, h9) {
    if (this.parameters.screenSizeEnabled) {
      const s5 = e9.attributes.get(e6.OFFSET), u6 = {
        applyToVertex: (e10, n6, o7, c6) => {
          const l4 = o2(O5, s5.data[3 * c6], s5.data[3 * c6 + 1], s5.data[3 * c6 + 2]), h10 = o2(y3, e10, n6, o7);
          return g(l4, l4, this.parameters.screenSizeScale * a3.camera.computeScreenPixelSizeAt(l4)), u2(h10, h10, l4), [h10[0], h10[1], h10[2]];
        },
        applyToAabb: (e10) => {
          const t6 = E(e10, O5);
          return _3(e10, this.parameters.screenSizeScale * a3.camera.computeScreenPixelSizeAt(t6));
        }
      };
      p2(e9, a3, c5, l3, u6, h9);
    } else p2(e9, a3, c5, l3, void 0, h9);
  }
  createGLMaterial(e9) {
    return new v3(e9);
  }
  createBufferWriter() {
    return new z2(this.parameters.screenSizeEnabled);
  }
  get _isTransparent() {
    return this.parameters.color[3] < 1 || this.parameters.forceTransparentMode;
  }
};
var v3 = class extends t {
  beginSlot(e9) {
    return this.ensureTechnique(j3, e9);
  }
};
var x3 = class extends u3 {
  constructor() {
    super(...arguments), this.color = r3(1, 1, 1, 1), this.shadingTint = r3(0, 0, 0, 0.25), this.shadingDirection = z(n(), [0.5, -0.5, -0.5]), this.screenSizeScale = 14, this.forceTransparentMode = false, this.writeDepth = true, this.hasSlicePlane = false, this.cullFace = e7.None, this.screenSizeEnabled = false, this.shadingEnabled = true;
  }
};
var z2 = class {
  constructor(e9) {
    this.screenSizeEnabled = e9;
    const t6 = H().vec3f(e6.POSITION).vec3f(e6.NORMAL);
    this.screenSizeEnabled && t6.vec3f(e6.OFFSET), this.vertexBufferLayout = t6;
  }
  elementCount(e9) {
    return e9.attributes.get(e6.POSITION).indices.length;
  }
  write(e9, t6, r7, i3, s4) {
    if (E4(r7, this.vertexBufferLayout, e9, t6, i3, s4), this.screenSizeEnabled) {
      if (!r7.attributes.has(e6.OFFSET)) throw new Error(`${e6.OFFSET} vertex attribute required for screenSizeEnabled ShadedColorMaterial`);
      {
        const e10 = r7.attributes.get(e6.OFFSET);
        s2(3 === e10.size);
        const a3 = i3.getField(e6.OFFSET, i2);
        if (!a3) throw new Error("unable to acquire view for " + e6.OFFSET);
        b2(e10, t6, a3, s4);
      }
    }
  }
};
var O5 = n();
var y3 = n();

// ../../../node_modules/@arcgis/core/views/3d/interactive/manipulatorUtils.js
function f2(t6, r7 = h5.OccludeAndTransparent, o7 = true) {
  const n6 = D(t6), i3 = !(t6[3] < 1);
  return o7 ? new w({
    color: n6,
    writeDepth: i3,
    cullFace: e7.Back,
    renderOccluded: r7,
    isDecoration: true
  }) : new d3({
    color: n6,
    writeDepth: i3,
    cullFace: e7.Back,
    renderOccluded: r7,
    isDecoration: true
  });
}
function h8(t6, r7 = h5.OccludeAndTransparent) {
  const o7 = D(t6);
  return new d3({
    color: o7,
    writeDepth: true,
    cullFace: e7.Front,
    renderOccluded: r7,
    isDecoration: true
  });
}
var j4 = Object.freeze({
  calloutLength: 40,
  calloutWidth: 1,
  discRadius: 27,
  focusMultiplier: 1.1
});
var b4 = Object.freeze({
  autoScaleRenderObjects: false,
  worldSized: true
});
function w2(e9, i3, l3, s4) {
  const u6 = e3(c2.get(), e9, l3), m2 = O6(u6, _2(c2.get(), s4, u6), l3, f.get());
  h2(m2, m2);
  const p3 = O(c2.get(), i3, m2);
  return Math.atan2(p3[1], p3[0]);
}
function O6(e9, t6, r7, n6) {
  const a3 = z(c2.get(), e9), l3 = z(c2.get(), t6), s4 = _2(c2.get(), a3, l3);
  return n6[0] = a3[0], n6[1] = a3[1], n6[2] = a3[2], n6[3] = 0, n6[4] = l3[0], n6[5] = l3[1], n6[6] = l3[2], n6[7] = 0, n6[8] = s4[0], n6[9] = s4[1], n6[10] = s4[2], n6[11] = 0, n6[12] = r7[0], n6[13] = r7[1], n6[14] = r7[2], n6[15] = 1, n6;
}
function D2(e9, t6) {
  const r7 = e9.getViewForGraphic(t6);
  return null != r7 && "computeAttachmentOrigin" in r7 ? r7.computeAttachmentOrigin(t6, e9.spatialReference) : null;
}
function F2(e9, t6) {
  const r7 = t6.origin;
  null == r7 ? y4(e9, t5(t6)) : e9.elevationAlignedLocation = r7;
}
function y4(e9, t6) {
  if (null == t6) return;
  const r7 = "mesh" === t6.type ? t6.anchor : b3(t6);
  null != r7 && (e9.location = u5(r7));
}

// ../../../node_modules/@arcgis/core/views/3d/interactive/RenderObject.js
var e8 = class {
  constructor(e9, s4 = t4.None) {
    this.geometry = e9, this.stateMask = s4;
  }
};

export {
  ee,
  t5 as t,
  w,
  f2 as f,
  h8 as h,
  j4 as j,
  b4 as b,
  w2,
  O6 as O,
  D2 as D,
  F2 as F,
  e8 as e
};
//# sourceMappingURL=chunk-73EW5OP6.js.map
