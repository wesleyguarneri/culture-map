import {
  C
} from "./chunk-67LE7VNQ.js";
import {
  C as C2,
  r as r10,
  s as s7,
  w
} from "./chunk-BJM7H6OC.js";
import {
  s as s6
} from "./chunk-2ONAF54K.js";
import {
  n as n4,
  r as r7
} from "./chunk-WG5JLPNN.js";
import {
  r as r6
} from "./chunk-7XAWCQ7R.js";
import {
  E as E4
} from "./chunk-RASN5P76.js";
import {
  A as A2,
  O as O2,
  c as c4,
  f as f2,
  l as l2,
  s as s4
} from "./chunk-IFUKJDOU.js";
import {
  P as P2,
  e as e7,
  f as f3,
  i,
  l as l3,
  m as m3,
  o as o7,
  s as s5
} from "./chunk-LD5YIQXD.js";
import {
  r as r8,
  r2 as r9,
  t as t4
} from "./chunk-XGDLE7WK.js";
import {
  t as t3
} from "./chunk-GDEAPZ64.js";
import {
  t as t5
} from "./chunk-YCQXFVJL.js";
import {
  c2 as c3,
  h as h2
} from "./chunk-YAGNWBGU.js";
import {
  e as e6,
  r as r5
} from "./chunk-LQTSBE7P.js";
import {
  o as o5
} from "./chunk-VIIVMRRO.js";
import {
  S,
  _ as _2,
  o as o6
} from "./chunk-LKHUGH5W.js";
import {
  t as t2
} from "./chunk-ZVFENZUF.js";
import {
  Y
} from "./chunk-N3S77FRG.js";
import {
  j2
} from "./chunk-YYETZJJB.js";
import {
  d,
  h,
  j,
  v
} from "./chunk-MD2IQSSQ.js";
import {
  H as H2
} from "./chunk-NWICVENM.js";
import {
  m as m2,
  s as s3
} from "./chunk-SYYDVGKY.js";
import {
  E as E3,
  f
} from "./chunk-YLE5AYZV.js";
import {
  r as r4
} from "./chunk-VS26W5Y5.js";
import {
  c as c2,
  e as e5,
  g as g2,
  o as o4,
  t
} from "./chunk-WJKYGQOY.js";
import {
  V,
  _
} from "./chunk-ZE47C44H.js";
import {
  E as E2,
  F,
  V as V2,
  b
} from "./chunk-N4KQPPPI.js";
import {
  m
} from "./chunk-4OGGMTIH.js";
import {
  E,
  e as e4
} from "./chunk-4MMTPKY4.js";
import {
  e as e3,
  o as o3
} from "./chunk-BQZBOYBD.js";
import {
  s as s2
} from "./chunk-IMVP5ADD.js";
import {
  H,
  c,
  n as n3
} from "./chunk-XTVPEVHA.js";
import {
  x as x2
} from "./chunk-7ZJ6P7J7.js";
import {
  e as e2
} from "./chunk-3ZXOUEQG.js";
import {
  A,
  G,
  O,
  P,
  e,
  g,
  o as o2,
  r as r3,
  s,
  u as u2,
  x
} from "./chunk-AXVPJBVW.js";
import {
  n as n2,
  r as r2
} from "./chunk-OXEPWRM7.js";
import {
  o
} from "./chunk-WGAPNV7F.js";
import {
  r
} from "./chunk-ANKOCGE2.js";
import {
  u
} from "./chunk-2MMLMOWS.js";
import {
  l
} from "./chunk-4323ZVPF.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import {
  has
} from "./chunk-DXLOWWK7.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3D.js
var O3 = class extends r5 {
  get geometries() {
    return this._geometries;
  }
  get transformation() {
    return this._transformation ?? o3;
  }
  set transformation(e9) {
    this._transformation = n3(this._transformation ?? e3(), e9), this._invalidateBoundingVolume(), this._emit("transformationChanged", this);
  }
  get shaderTransformation() {
    return this._shaderTransformation;
  }
  set shaderTransformation(e9) {
    this._shaderTransformation = e9 ? n3(this._shaderTransformation ?? e3(), e9) : null, this._invalidateBoundingVolume(), this._emit("shaderTransformationChanged", this);
  }
  get effectiveTransformation() {
    return this.shaderTransformation ?? this.transformation;
  }
  constructor(t6 = {}) {
    super(), this.type = e6.Object, this._shaderTransformation = null, this._parentLayer = null, this._visible = true, this.castShadow = t6.castShadow ?? true, this.usesVerticalDistanceToGround = t6.usesVerticalDistanceToGround ?? false, this.graphicUid = t6.graphicUid, this.layerUid = t6.layerUid, t6.isElevationSource && (this.lastValidElevationBB = new A3()), this._geometries = t6.geometries ? Array.from(t6.geometries) : new Array();
  }
  dispose() {
    this._geometries.length = 0;
  }
  get parentLayer() {
    return this._parentLayer;
  }
  set parentLayer(t6) {
    s3(null == this._parentLayer || null == t6, "Object3D can only be added to a single Layer"), this._parentLayer = t6;
  }
  addGeometry(t6) {
    t6.visible = this._visible, this._geometries.push(t6), this._emit("geometryAdded", {
      object: this,
      geometry: t6
    }), this._invalidateBoundingVolume();
  }
  removeGeometry(t6) {
    const e9 = this._geometries.splice(t6, 1)[0];
    e9 && (this._emit("geometryRemoved", {
      object: this,
      geometry: e9
    }), this._invalidateBoundingVolume());
  }
  removeAllGeometries() {
    for (; this._geometries.length > 0; ) this.removeGeometry(0);
  }
  geometryVertexAttributeUpdated(t6, e9, i2 = false) {
    this._emit("attributesChanged", {
      object: this,
      geometry: t6,
      attribute: e9,
      sync: i2
    }), E(e9) && this._invalidateBoundingVolume();
  }
  get visible() {
    return this._visible;
  }
  set visible(t6) {
    if (this._visible !== t6) {
      this._visible = t6;
      for (const t7 of this._geometries) t7.visible = this._visible;
      this._emit("visibilityChanged", this);
    }
  }
  maskOccludee() {
    const t6 = new r6(t2.MaskOccludee);
    for (const e9 of this._geometries) e9.occludees = n4(e9.occludees, t6);
    return this._emit("occlusionChanged", this), t6;
  }
  removeOcclude(t6) {
    for (const e9 of this._geometries) e9.occludees = r7(e9.occludees, t6);
    this._emit("occlusionChanged", this);
  }
  highlight() {
    const t6 = new r6(t2.Highlight);
    for (const e9 of this._geometries) e9.highlights = n4(e9.highlights, t6);
    return this._emit("highlightChanged", this), t6;
  }
  removeHighlight(t6) {
    for (const e9 of this._geometries) e9.highlights = r7(e9.highlights, t6);
    this._emit("highlightChanged", this);
  }
  getCombinedStaticTransformation(t6, i2) {
    return c(i2, this.transformation, t6.transformation);
  }
  getCombinedShaderTransformation(t6, i2 = e3()) {
    return c(i2, this.effectiveTransformation, t6.transformation);
  }
  get boundingVolumeWorldSpace() {
    return this._bvWorldSpace || (this._bvWorldSpace = this._bvWorldSpace || new M(), this._validateBoundingVolume(this._bvWorldSpace, W.WorldSpace)), this._bvWorldSpace;
  }
  get boundingVolumeObjectSpace() {
    return this._bvObjectSpace || (this._bvObjectSpace = this._bvObjectSpace || new M(), this._validateBoundingVolume(this._bvObjectSpace, W.ObjectSpace)), this._bvObjectSpace;
  }
  _validateBoundingVolume(t6, e9) {
    const i2 = e9 === W.ObjectSpace;
    for (const s8 of this._geometries) {
      const e10 = s8.boundingInfo;
      e10 && L(e10, t6, i2 ? s8.transformation : this.getCombinedShaderTransformation(s8));
    }
    A(V(t6.bounds), t6.min, t6.max, 0.5);
    for (const s8 of this._geometries) {
      const e10 = s8.boundingInfo;
      if (null == e10) continue;
      const r11 = i2 ? s8.transformation : this.getCombinedShaderTransformation(s8), o8 = m(r11);
      O(U, e10.center, r11);
      const h3 = x(U, V(t6.bounds)), m4 = e10.radius * o8;
      t6.bounds[3] = Math.max(t6.bounds[3], h3 + m4);
    }
  }
  _invalidateBoundingVolume() {
    const t6 = this._bvWorldSpace?.bounds;
    this._bvObjectSpace = this._bvWorldSpace = void 0, this._parentLayer && t6 && this._parentLayer.notifyObjectBBChanged(this, t6);
  }
  _emit(t6, e9) {
    this._parentLayer && this._parentLayer.events.emit(t6, e9);
  }
  get test() {
  }
};
var A3 = class {
  constructor() {
    this.min = r2(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this.max = r2(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
  }
  isEmpty() {
    return this.max[0] < this.min[0] && this.max[1] < this.min[1] && this.max[2] < this.min[2];
  }
};
var M = class extends A3 {
  constructor() {
    super(...arguments), this.bounds = _();
  }
};
function L(t6, e9, s8) {
  const r11 = t6.bbMin, o8 = t6.bbMax;
  if (H(s8)) {
    const t7 = o2(T, s8[12], s8[13], s8[14]);
    u2(C3, r11, t7), u2(B, o8, t7);
    for (let i2 = 0; i2 < 3; ++i2) e9.min[i2] = Math.min(e9.min[i2], C3[i2]), e9.max[i2] = Math.max(e9.max[i2], B[i2]);
  } else if (O(C3, r11, s8), G(r11, o8)) for (let i2 = 0; i2 < 3; ++i2) e9.min[i2] = Math.min(e9.min[i2], C3[i2]), e9.max[i2] = Math.max(e9.max[i2], C3[i2]);
  else {
    O(B, o8, s8);
    for (let t7 = 0; t7 < 3; ++t7) e9.min[t7] = Math.min(e9.min[t7], C3[t7], B[t7]), e9.max[t7] = Math.max(e9.max[t7], C3[t7], B[t7]);
    for (let t7 = 0; t7 < 3; ++t7) {
      r3(C3, r11), r3(B, o8), C3[t7] = o8[t7], B[t7] = r11[t7], O(C3, C3, s8), O(B, B, s8);
      for (let t8 = 0; t8 < 3; ++t8) e9.min[t8] = Math.min(e9.min[t8], C3[t8], B[t8]), e9.max[t8] = Math.max(e9.max[t8], C3[t8], B[t8]);
    }
  }
}
var T = n2();
var C3 = n2();
var B = n2();
var U = n2();
var W;
!function(t6) {
  t6[t6.WorldSpace = 0] = "WorldSpace", t6[t6.ObjectSpace = 1] = "ObjectSpace";
}(W || (W = {}));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/DirtyEvents.js
var e8 = ["layerObjectAdded", "layerObjectRemoved", "layerObjectsAdded", "layerObjectsRemoved", "transformationChanged", "shaderTransformationChanged", "visibilityChanged", "occlusionChanged", "highlightChanged", "geometryAdded", "geometryRemoved", "attributesChanged"];

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/WebGLLayer.js
var a = class extends r5 {
  get objects() {
    return this._objects;
  }
  constructor(s8, r11, h3 = "") {
    super(), this.stage = s8, this.apiLayerUid = h3, this.type = e6.Layer, this.events = new o(), this.visible = true, this.pickable = true, this.sliceable = false, this._objects = new l(), this._objectsAdded = new l(), this._handles = new r(), this.apiLayerUid = h3, this.visible = r11?.visible ?? true, this.pickable = r11?.pickable ?? true, this.updatePolicy = r11?.updatePolicy ?? C.ASYNC, this._disableOctree = r11?.disableOctree ?? false, s8.add(this);
    for (const e9 of e8) this._handles.add(this.events.on(e9, (t6) => s8.handleEvent(e9, t6)));
  }
  destroy() {
    this._handles.size && (this._handles.destroy(), this.stage.remove(this), this.invalidateSpatialQueryAccelerator());
  }
  add(e9) {
    this._objects.push(e9), e9.parentLayer = this, this.events.emit("layerObjectAdded", {
      layer: this,
      object: e9
    }), null != this._octree && this._objectsAdded.push(e9);
  }
  remove(e9) {
    this._objects.removeUnordered(e9) && (e9.parentLayer = null, this.events.emit("layerObjectRemoved", {
      layer: this,
      object: e9
    }), null != this._octree && (this._objectsAdded.removeUnordered(e9) || this._octree.remove([e9])));
  }
  addMany(e9) {
    this._objects.pushArray(e9);
    for (const t6 of e9) t6.parentLayer = this;
    this.events.emit("layerObjectsAdded", {
      layer: this,
      objects: e9
    }), null != this._octree && this._objectsAdded.pushArray(e9);
  }
  removeMany(e9) {
    const t6 = new Array();
    if (this._objects.removeUnorderedMany(e9, e9.length, t6), 0 !== t6.length) {
      for (const e10 of t6) e10.parentLayer = null;
      if (this.events.emit("layerObjectsRemoved", {
        layer: this,
        objects: t6
      }), null != this._octree) {
        for (let e10 = 0; e10 < t6.length; ) this._objectsAdded.removeUnordered(t6[e10]) ? (t6[e10] = t6[t6.length - 1], t6.length -= 1) : ++e10;
        this._octree.remove(t6);
      }
    }
  }
  sync() {
    this.updatePolicy !== C.SYNC && this.stage.syncLayer(this.id);
  }
  notifyObjectBBChanged(e9, t6) {
    null == this._octree || this._objectsAdded.includes(e9) || this._octree.update(e9, t6);
  }
  getSpatialQueryAccelerator() {
    return null == this._octree && this._objects.length > 50 && !this._disableOctree ? (this._octree = new Y((e9) => e9.boundingVolumeWorldSpace.bounds), this._octree.add(this._objects.data, this._objects.length)) : null != this._octree && this._objectsAdded.length > 0 && (this._octree.add(this._objectsAdded.data, this._objectsAdded.length), this._objectsAdded.clear()), this._octree;
  }
  invalidateSpatialQueryAccelerator() {
    this._octree = u(this._octree), this._objectsAdded.clear();
  }
};
function n5(e9) {
  return null != e9 && e9.type === e6.Layer;
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RibbonLineTechnique.js
var W2 = /* @__PURE__ */ new Map([[e4.POSITION, 0], [e4.PREVPOSITION, 1], [e4.NEXTPOSITION, 2], [e4.SUBDIVISIONFACTOR, 3], [e4.UV0, 4], [e4.COLOR, 5], [e4.COLORFEATUREATTRIBUTE, 5], [e4.SIZE, 6], [e4.SIZEFEATUREATTRIBUTE, 6], [e4.OPACITYFEATUREATTRIBUTE, 7], [e4.OBJECTANDLAYERIDCOLOR, 8]]);
var j3 = class _j extends r8 {
  initializeProgram(e9) {
    return new r9(e9.rctx, _j.shader.get().build(this.configuration), W2);
  }
  _makePipelineState(i2, r11) {
    const c5 = this.configuration, d2 = i2 === o5.NONE, T2 = i2 === o5.FrontFace, O4 = t(c5.output);
    return S({
      blending: c5.output === o4.Color ? d2 ? A2 : c4(i2) : null,
      depthTest: {
        func: f2(i2)
      },
      depthWrite: d2 ? c5.writeDepth || O4 ? o6 : null : l2(i2),
      drawBuffers: c5.output === o4.Depth ? {
        buffers: [f.NONE]
      } : s4(i2),
      colorWrite: _2,
      stencilWrite: c5.hasOccludees ? e7 : null,
      stencilTest: c5.hasOccludees ? r11 ? o7 : f3 : null,
      polygonOffset: d2 || T2 ? c5.hasPolygonOffset ? A4 : null : O2
    });
  }
  initializePipeline() {
    const e9 = this.configuration;
    if (e9.occluder) {
      const i2 = e9.hasPolygonOffset ? A4 : null;
      this._occluderPipelineTransparent = S({
        blending: A2,
        polygonOffset: i2,
        depthTest: s5,
        depthWrite: null,
        colorWrite: _2,
        stencilWrite: null,
        stencilTest: m3,
        drawBuffers: e9.output === o4.Depth ? {
          buffers: [f.NONE]
        } : null
      }), this._occluderPipelineOpaque = S({
        blending: A2,
        polygonOffset: i2,
        depthTest: s5,
        depthWrite: null,
        colorWrite: _2,
        stencilWrite: l3,
        stencilTest: P2,
        drawBuffers: e9.output === o4.Depth ? {
          buffers: [f.NONE]
        } : null
      }), this._occluderPipelineMaskWrite = S({
        blending: null,
        polygonOffset: i2,
        depthTest: i,
        depthWrite: null,
        colorWrite: null,
        stencilWrite: e7,
        stencilTest: o7,
        drawBuffers: e9.output === o4.Depth ? {
          buffers: [f.NONE]
        } : null
      });
    }
    return this._occludeePipelineState = this._makePipelineState(this.configuration.transparencyPassType, true), this._makePipelineState(this.configuration.transparencyPassType, false);
  }
  get primitiveType() {
    return this.configuration.wireframe ? E3.LINES : E3.TRIANGLE_STRIP;
  }
  getPipeline(e9, t6, i2) {
    return e9 ? this._occludeePipelineState : this.configuration.occluder ? i2 ? this._occluderPipelineTransparent : t6 ? this._occluderPipelineOpaque : this._occluderPipelineMaskWrite : super.getPipeline();
  }
};
j3.shader = new t4(C2, () => import("./RibbonLine.glsl-GEGYQOEG.js"));
var A4 = {
  factor: 0,
  units: -4
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/RibbonLineMaterial.js
var H3;
!function(e9) {
  e9[e9.LEFT_JOIN_START = -2] = "LEFT_JOIN_START", e9[e9.LEFT_JOIN_END = -1] = "LEFT_JOIN_END", e9[e9.LEFT_CAP_START = -4] = "LEFT_CAP_START", e9[e9.LEFT_CAP_END = -5] = "LEFT_CAP_END", e9[e9.RIGHT_JOIN_START = 2] = "RIGHT_JOIN_START", e9[e9.RIGHT_JOIN_END = 1] = "RIGHT_JOIN_END", e9[e9.RIGHT_CAP_START = 4] = "RIGHT_CAP_START", e9[e9.RIGHT_CAP_END = 5] = "RIGHT_CAP_END";
}(H3 || (H3 = {}));
var z = class extends c3 {
  constructor(e9) {
    super(e9, new V3()), this._configuration = new s7(), this.produces = /* @__PURE__ */ new Map([[E4.OPAQUE_MATERIAL, (e10) => e10 === o4.Highlight || e10 === o4.ObjectAndLayerIdColor || e10 === o4.Color && this.parameters.renderOccluded === h2.OccludeAndTransparentStencil], [E4.OPAQUE_NO_SSAO_DEPTH, (e10) => g2(e10)], [E4.OCCLUDER_MATERIAL, (e10) => c2(e10) && this.parameters.renderOccluded === h2.OccludeAndTransparentStencil], [E4.TRANSPARENT_OCCLUDER_MATERIAL, (e10) => c2(e10) && this.parameters.renderOccluded === h2.OccludeAndTransparentStencil], [E4.TRANSPARENT_MATERIAL, (e10) => e10 === o4.Color && this.parameters.writeDepth && this.parameters.renderOccluded !== h2.OccludeAndTransparentStencil], [E4.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL, (e10) => e10 === o4.Color && !this.parameters.writeDepth && this.parameters.renderOccluded !== h2.OccludeAndTransparentStencil], [E4.DRAPED_MATERIAL, (e10) => e5(e10)]]), this._vertexAttributeLocations = W2;
  }
  getConfiguration(e9, t6) {
    this._configuration.output = e9, this._configuration.draped = t6.slot === E4.DRAPED_MATERIAL;
    const r11 = null != this.parameters.stipplePattern && e9 !== o4.Highlight;
    return this._configuration.stippleEnabled = r11, this._configuration.stippleOffColorEnabled = r11 && null != this.parameters.stippleOffColor, this._configuration.stipplePreferContinuous = r11 && this.parameters.stipplePreferContinuous, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.hasOccludees = this.parameters.hasOccludees, this._configuration.roundJoins = "round" === this.parameters.join, this._configuration.capType = this.parameters.cap, this._configuration.applyMarkerOffset = null != this.parameters.markerParameters && q(this.parameters.markerParameters), this._configuration.hasPolygonOffset = this.parameters.hasPolygonOffset, this._configuration.writeDepth = this.parameters.writeDepth, this._configuration.vvSize = !!this.parameters.vvSize, this._configuration.vvColor = !!this.parameters.vvColor, this._configuration.vvOpacity = !!this.parameters.vvOpacity, this._configuration.innerColorEnabled = this.parameters.innerWidth > 0 && null != this.parameters.innerColor, this._configuration.falloffEnabled = this.parameters.falloff > 0, this._configuration.occluder = this.parameters.renderOccluded === h2.OccludeAndTransparentStencil, this._configuration.transparencyPassType = t6.transparencyPassType, this._configuration.multipassEnabled = t6.multipassEnabled, this._configuration.cullAboveGround = t6.multipassTerrain.cullAboveGround, this._configuration.wireframe = this.parameters.wireframe, this._configuration;
  }
  intersectDraped(e9, r11, s8, i2, a2, n6) {
    if (!s8.options.selectionMode) return;
    const o8 = e9.attributes.get(e4.POSITION).data, l4 = e9.attributes.get(e4.SIZE);
    let c5 = this.parameters.width;
    if (this.parameters.vvSize) {
      const r12 = e9.attributes.get(e4.SIZEFEATUREATTRIBUTE).data[0];
      c5 *= e2(this.parameters.vvSize.offset[0] + r12 * this.parameters.vvSize.factor[0], this.parameters.vvSize.minSize[0], this.parameters.vvSize.maxSize[0]);
    } else l4 && (c5 *= l4.data[0]);
    const u3 = i2[0], h3 = i2[1], p = (c5 / 2 + 4) * e9.screenToWorldRatio;
    let m4 = Number.MAX_VALUE, f4 = 0;
    for (let d2 = 0; d2 < o8.length - 5; d2 += 3) {
      const e10 = o8[d2], r12 = o8[d2 + 1], s9 = u3 - e10, i3 = h3 - r12, a3 = o8[d2 + 3] - e10, n7 = o8[d2 + 4] - r12, l5 = e2((a3 * s9 + n7 * i3) / (a3 * a3 + n7 * n7), 0, 1), c6 = a3 * l5 - s9, p2 = n7 * l5 - i3, T2 = c6 * c6 + p2 * p2;
      T2 < m4 && (m4 = T2, f4 = d2 / 3);
    }
    m4 < p * p && a2(n6.dist, n6.normal, f4, false);
  }
  intersect(r11, p, m4, f4, T2, R) {
    if (!m4.options.selectionMode || !r11.visible) return;
    if (!m2(p)) return void n.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");
    const g3 = r11.attributes, b2 = g3.get(e4.POSITION).data;
    let v2 = this.parameters.width;
    if (this.parameters.vvSize) {
      const e9 = g3.get(e4.SIZEFEATUREATTRIBUTE).data[0];
      v2 *= e2(this.parameters.vvSize.offset[0] + e9 * this.parameters.vvSize.factor[0], this.parameters.vvSize.minSize[0], this.parameters.vvSize.maxSize[0]);
    } else g3.has(e4.SIZE) && (v2 *= g3.get(e4.SIZE).data[0]);
    const P3 = m4.camera, L2 = ee;
    r4(L2, m4.point);
    const N = v2 * P3.pixelRatio / 2 + 4 * P3.pixelRatio;
    o2(ue[0], L2[0] - N, L2[1] + N, 0), o2(ue[1], L2[0] + N, L2[1] + N, 0), o2(ue[2], L2[0] + N, L2[1] - N, 0), o2(ue[3], L2[0] - N, L2[1] - N, 0);
    for (let e9 = 0; e9 < 4; e9++) if (!P3.unprojectFromRenderScreen(ue[e9], he[e9])) return;
    b(P3.eye, he[0], he[1], pe), b(P3.eye, he[1], he[2], me), b(P3.eye, he[2], he[3], fe), b(P3.eye, he[3], he[0], de);
    let C4 = Number.MAX_VALUE, y = 0;
    const j4 = Y2(this.parameters, g3) ? b2.length - 2 : b2.length - 5;
    for (let e9 = 0; e9 < j4; e9 += 3) {
      X[0] = b2[e9] + p[12], X[1] = b2[e9 + 1] + p[13], X[2] = b2[e9 + 2] + p[14];
      const t6 = (e9 + 3) % b2.length;
      if (Q[0] = b2[t6] + p[12], Q[1] = b2[t6 + 1] + p[13], Q[2] = b2[t6 + 2] + p[14], V2(pe, X) < 0 && V2(pe, Q) < 0 || V2(me, X) < 0 && V2(me, Q) < 0 || V2(fe, X) < 0 && V2(fe, Q) < 0 || V2(de, X) < 0 && V2(de, Q) < 0) continue;
      if (P3.projectToRenderScreen(X, te), P3.projectToRenderScreen(Q, re), te[2] < 0 && re[2] > 0) {
        e(K, X, Q);
        const e10 = P3.frustum, t7 = -V2(e10[j2.NEAR], X) / P(K, F(e10[j2.NEAR]));
        g(K, K, t7), u2(X, X, K), P3.projectToRenderScreen(X, te);
      } else if (te[2] > 0 && re[2] < 0) {
        e(K, Q, X);
        const e10 = P3.frustum, t7 = -V2(e10[j2.NEAR], Q) / P(K, F(e10[j2.NEAR]));
        g(K, K, t7), u2(Q, Q, K), P3.projectToRenderScreen(Q, re);
      } else if (te[2] < 0 && re[2] < 0) continue;
      te[2] = 0, re[2] = 0;
      const r12 = j(h(te, re, ae), L2);
      r12 < C4 && (C4 = r12, r3(se, X), r3(ie, Q), y = e9 / 3);
    }
    const F2 = m4.rayBegin, w2 = m4.rayEnd;
    if (C4 < N * N) {
      let e9 = Number.MAX_VALUE;
      if (d(h(se, ie, ae), h(F2, w2, ne), $)) {
        e($, $, F2);
        const t6 = s($);
        g($, $, 1 / t6), e9 = t6 / x(F2, w2);
      }
      R(e9, $, y, false);
    }
  }
  get _layout() {
    const e9 = H2().vec3f(e4.POSITION).vec3f(e4.PREVPOSITION).vec3f(e4.NEXTPOSITION).f32(e4.SUBDIVISIONFACTOR).vec2f(e4.UV0);
    return this.parameters.vvSize ? e9.f32(e4.SIZEFEATUREATTRIBUTE) : e9.f32(e4.SIZE), this.parameters.vvColor ? e9.f32(e4.COLORFEATUREATTRIBUTE) : e9.vec4f(e4.COLOR), this.parameters.vvOpacity && e9.f32(e4.OPACITYFEATUREATTRIBUTE), has("enable-feature:objectAndLayerId-rendering") && e9.vec4u8(e4.OBJECTANDLAYERIDCOLOR), e9;
  }
  createBufferWriter() {
    return new Z(this._layout, this.parameters);
  }
  createGLMaterial(e9) {
    return new k(e9);
  }
  validateParameters(e9) {
    "miter" !== e9.join && (e9.miterLimit = 0), null != e9.markerParameters && (e9.markerScale = e9.markerParameters.width / e9.width);
  }
};
var k = class extends t3 {
  constructor() {
    super(...arguments), this._stipplePattern = null;
  }
  dispose() {
    super.dispose(), this._stippleTextures.release(this._stipplePattern), this._stipplePattern = null;
  }
  _updateOccludeeState(e9) {
    e9.hasOccludees !== this._material.parameters.hasOccludees && this._material.setParameters({
      hasOccludees: e9.hasOccludees
    });
  }
  beginSlot(e9) {
    this._output === o4.Color && this._updateOccludeeState(e9);
    const t6 = this._material.parameters.stipplePattern;
    return this._stipplePattern !== t6 && (this._material.setParameters({
      stippleTexture: this._stippleTextures.swap(t6, this._stipplePattern)
    }), this._stipplePattern = t6), this.ensureTechnique(j3, e9);
  }
};
var V3 = class extends t5 {
  constructor() {
    super(...arguments), this.width = 0, this.color = s2, this.join = "miter", this.cap = r10.BUTT, this.miterLimit = 5, this.writeDepth = true, this.hasPolygonOffset = false, this.stippleTexture = null, this.stipplePreferContinuous = true, this.markerParameters = null, this.markerScale = 1, this.hasSlicePlane = false, this.vvFastUpdate = false, this.isClosed = false, this.falloff = 0, this.innerWidth = 0, this.hasOccludees = false, this.wireframe = false;
  }
};
var Z = class {
  constructor(e9, t6) {
    this.vertexBufferLayout = e9, this._parameters = t6, this.numJoinSubdivisions = 0;
    const r11 = t6.stipplePattern ? 1 : 0;
    switch (this._parameters.join) {
      case "miter":
      case "bevel":
        this.numJoinSubdivisions = r11;
        break;
      case "round":
        this.numJoinSubdivisions = w + r11;
    }
  }
  _isClosed(e9) {
    return Y2(this._parameters, e9.attributes);
  }
  allocate(e9) {
    return this.vertexBufferLayout.createBuffer(e9);
  }
  elementCount(e9) {
    const t6 = 2, r11 = e9.attributes.get(e4.POSITION).indices.length / 2 + 1, s8 = this._isClosed(e9);
    let i2 = s8 ? 2 : 2 * t6;
    return i2 += ((s8 ? r11 : r11 - 1) - (s8 ? 0 : 1)) * (2 * this.numJoinSubdivisions + 4), i2 += 2, this._parameters.wireframe && (i2 = 2 + 4 * (i2 - 2)), i2;
  }
  write(e9, t6, r11, s8, a2) {
    const n6 = oe, o8 = le, l4 = ce, u3 = r11.attributes.get(e4.POSITION), m4 = u3.indices, f4 = u3.data.length / 3, d2 = r11.attributes.get(e4.DISTANCETOSTART)?.data;
    m4 && m4.length !== 2 * (f4 - 1) && console.warn("RibbonLineMaterial does not support indices");
    const T2 = r11.attributes.get(e4.SIZEFEATUREATTRIBUTE)?.data[0] ?? r11.attributes.get(e4.SIZE)?.data[0] ?? 1;
    let _3 = [1, 1, 1, 1], E5 = 0;
    const A5 = this.vertexBufferLayout.fields.has(e4.COLORFEATUREATTRIBUTE);
    A5 ? E5 = r11.attributes.get(e4.COLORFEATUREATTRIBUTE).data[0] : r11.attributes.has(e4.COLOR) && (_3 = r11.attributes.get(e4.COLOR).data);
    const R = has("enable-feature:objectAndLayerId-rendering") ? r11.objectAndLayerIdColor : null, O4 = this.vertexBufferLayout.fields.has(e4.OPACITYFEATUREATTRIBUTE), I = O4 ? r11.attributes.get(e4.OPACITYFEATUREATTRIBUTE).data[0] : 0, S2 = new Float32Array(s8.buffer), g3 = has("enable-feature:objectAndLayerId-rendering") ? new Uint8Array(s8.buffer) : null, b2 = this.vertexBufferLayout.stride / 4;
    let v2 = a2 * b2;
    const P3 = v2;
    let L2 = 0;
    const N = d2 ? (e10, t7, r12) => L2 = d2[r12] : (e10, t7, r12) => L2 += x(e10, t7), C4 = has("enable-feature:objectAndLayerId-rendering"), y = (e10, t7, r12, s9, i2, a3, n7) => {
      if (S2[v2++] = t7[0], S2[v2++] = t7[1], S2[v2++] = t7[2], S2[v2++] = e10[0], S2[v2++] = e10[1], S2[v2++] = e10[2], S2[v2++] = r12[0], S2[v2++] = r12[1], S2[v2++] = r12[2], S2[v2++] = s9, S2[v2++] = n7, S2[v2++] = i2, S2[v2++] = T2, A5) S2[v2++] = E5;
      else {
        const e11 = Math.min(4 * a3, _3.length - 4);
        S2[v2++] = _3[e11], S2[v2++] = _3[e11 + 1], S2[v2++] = _3[e11 + 2], S2[v2++] = _3[e11 + 3];
      }
      O4 && (S2[v2++] = I), C4 && (null != R && (g3[4 * v2] = R[0], g3[4 * v2 + 1] = R[1], g3[4 * v2 + 2] = R[2], g3[4 * v2 + 3] = R[3]), v2++);
    };
    v2 += b2, o2(o8, u3.data[0], u3.data[1], u3.data[2]), e9 && O(o8, o8, e9);
    const j4 = this._isClosed(r11);
    if (j4) {
      const t7 = u3.data.length - 3;
      o2(n6, u3.data[t7], u3.data[t7 + 1], u3.data[t7 + 2]), e9 && O(n6, n6, e9);
    } else o2(l4, u3.data[3], u3.data[4], u3.data[5]), e9 && O(l4, l4, e9), y(o8, o8, l4, 1, H3.LEFT_CAP_START, 0, 0), y(o8, o8, l4, 1, H3.RIGHT_CAP_START, 0, 0), r3(n6, o8), r3(o8, l4);
    const D = j4 ? 0 : 1, F2 = j4 ? f4 : f4 - 1;
    for (let h3 = D; h3 < F2; h3++) {
      const t7 = (h3 + 1) % f4 * 3;
      o2(l4, u3.data[t7], u3.data[t7 + 1], u3.data[t7 + 2]), e9 && O(l4, l4, e9), N(n6, o8, h3), y(n6, o8, l4, 0, H3.LEFT_JOIN_END, h3, L2), y(n6, o8, l4, 0, H3.RIGHT_JOIN_END, h3, L2);
      const r12 = this.numJoinSubdivisions;
      for (let e10 = 0; e10 < r12; ++e10) {
        const t8 = (e10 + 1) / (r12 + 1);
        y(n6, o8, l4, t8, H3.LEFT_JOIN_END, h3, L2), y(n6, o8, l4, t8, H3.RIGHT_JOIN_END, h3, L2);
      }
      y(n6, o8, l4, 1, H3.LEFT_JOIN_START, h3, L2), y(n6, o8, l4, 1, H3.RIGHT_JOIN_START, h3, L2), r3(n6, o8), r3(o8, l4);
    }
    j4 ? (o2(l4, u3.data[3], u3.data[4], u3.data[5]), e9 && O(l4, l4, e9), L2 = N(n6, o8, F2), y(n6, o8, l4, 0, H3.LEFT_JOIN_END, D, L2), y(n6, o8, l4, 0, H3.RIGHT_JOIN_END, D, L2)) : (L2 = N(n6, o8, F2), y(n6, o8, o8, 0, H3.LEFT_CAP_END, F2, L2), y(n6, o8, o8, 0, H3.RIGHT_CAP_END, F2, L2)), W3(S2, P3 + b2, S2, P3, b2);
    v2 = W3(S2, v2 - b2, S2, v2, b2), this._parameters.wireframe && this._addWireframeVertices(s8, P3, v2, b2);
  }
  _addWireframeVertices(e9, t6, r11, s8) {
    const i2 = new Float32Array(e9.buffer, r11 * Float32Array.BYTES_PER_ELEMENT), a2 = new Float32Array(e9.buffer, t6 * Float32Array.BYTES_PER_ELEMENT, r11 - t6);
    let n6 = 0;
    const o8 = (e10) => n6 = W3(a2, e10, i2, n6, s8);
    for (let l4 = 0; l4 < a2.length - 1; l4 += 2 * s8) o8(l4), o8(l4 + 2 * s8), o8(l4 + 1 * s8), o8(l4 + 2 * s8), o8(l4 + 1 * s8), o8(l4 + 3 * s8);
  }
};
function W3(e9, t6, r11, s8, i2) {
  for (let a2 = 0; a2 < i2; a2++) r11[s8++] = e9[t6++];
  return s8;
}
function Y2(e9, t6) {
  if (!e9.isClosed) return false;
  return t6.get(e4.POSITION).indices.length > 2;
}
function q(e9) {
  return e9.anchor === s6.Tip && e9.hideOnShortSegments && "begin-end" === e9.placement && e9.worldSpace;
}
var X = n2();
var Q = n2();
var K = n2();
var $ = n2();
var ee = n2();
var te = x2();
var re = x2();
var se = n2();
var ie = n2();
var ae = v();
var ne = v();
var oe = n2();
var le = n2();
var ce = n2();
var ue = [x2(), x2(), x2(), x2()];
var he = [n2(), n2(), n2(), n2()];
var pe = E2();
var me = E2();
var fe = E2();
var de = E2();

export {
  O3 as O,
  a,
  n5 as n,
  z
};
//# sourceMappingURL=chunk-R6CAUNOR.js.map
