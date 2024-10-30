import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  _ as _4,
  t as t8
} from "./chunk-KJGRJNY4.js";
import {
  G as G2
} from "./chunk-AJ474NL3.js";
import {
  f,
  o as o6
} from "./chunk-X3HF4XA3.js";
import {
  it,
  n as n7,
  s as s5
} from "./chunk-2NPPOPEZ.js";
import {
  i as i5
} from "./chunk-BKOZEXTL.js";
import {
  r as r6
} from "./chunk-NLRSH3TD.js";
import {
  c as c5,
  u as u4
} from "./chunk-3Q4YEFJ3.js";
import {
  G,
  e as e5,
  i as i4
} from "./chunk-K6JW77RY.js";
import {
  A as A2
} from "./chunk-YUYMEQ3T.js";
import {
  E as E3,
  I as I3
} from "./chunk-4B3LNBOC.js";
import {
  a as a3,
  e as e6,
  t as t7
} from "./chunk-KAKCJGSZ.js";
import {
  C as C2
} from "./chunk-T4DTOVU4.js";
import {
  m
} from "./chunk-GYNRSS5Q.js";
import {
  a as a4,
  d as d2
} from "./chunk-JZISCETB.js";
import {
  d as d3,
  m as m2
} from "./chunk-DM6DHTKZ.js";
import {
  E as E2
} from "./chunk-OEBP4L4N.js";
import {
  c as c4
} from "./chunk-UT2ZOLZR.js";
import {
  E
} from "./chunk-4WON4QDF.js";
import {
  t as t3
} from "./chunk-ONVI4SC3.js";
import {
  v as v2
} from "./chunk-2IRGMYX2.js";
import {
  _ as _3,
  i as i3
} from "./chunk-OU2TYICP.js";
import {
  R as R2
} from "./chunk-DZAXDRPA.js";
import {
  r as r3,
  r2 as r4,
  t as t4
} from "./chunk-22UDIQGJ.js";
import {
  r as r5,
  t as t5
} from "./chunk-LA4GCRJY.js";
import {
  h as h2
} from "./chunk-UE7ZYRIH.js";
import {
  t as t6
} from "./chunk-W24M6HII.js";
import {
  O
} from "./chunk-E5RXQH35.js";
import {
  o as o4
} from "./chunk-62ZEBDPC.js";
import {
  o as o5
} from "./chunk-ZFMS3XGM.js";
import {
  S as S3,
  _ as _2,
  l as l4,
  s as s4
} from "./chunk-HUOFTIIK.js";
import {
  a as a2,
  i as i2
} from "./chunk-EPIUUGS2.js";
import {
  c as c2
} from "./chunk-MDEPINSI.js";
import {
  c as c3,
  e2 as e4
} from "./chunk-QATJRB5Q.js";
import {
  t as t2
} from "./chunk-WHVSAUHM.js";
import {
  l as l3,
  s as s3
} from "./chunk-LCPLUSDH.js";
import {
  F,
  L,
  R,
  _
} from "./chunk-KYLW5XXS.js";
import {
  C,
  I as I2
} from "./chunk-EXKCGLRO.js";
import {
  o as o3
} from "./chunk-HITI6WDM.js";
import {
  V
} from "./chunk-L6FG3WIC.js";
import {
  l as l2
} from "./chunk-GNCXYHNE.js";
import {
  n as n6
} from "./chunk-BZHHBBFX.js";
import {
  e as e3
} from "./chunk-YGAXDKHF.js";
import {
  i,
  s as s2
} from "./chunk-FSG7HOZQ.js";
import {
  Q,
  c,
  h,
  q,
  s
} from "./chunk-KOI252FF.js";
import {
  e as e2,
  u as u3,
  z
} from "./chunk-GCVQXAS4.js";
import {
  u as u2
} from "./chunk-2OZSYJDX.js";
import {
  o as o2
} from "./chunk-MZM4INJV.js";
import {
  n as n5,
  r as r2
} from "./chunk-J4GMQHGL.js";
import {
  A,
  d,
  v
} from "./chunk-LZSLQ24Q.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S as S2,
  n3
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  n as n2
} from "./chunk-PNUA7JOS.js";
import {
  a3 as a,
  n as n4
} from "./chunk-UDMPWVPF.js";
import {
  r,
  t,
  u
} from "./chunk-6WGE3IUL.js";
import {
  l
} from "./chunk-MLYB2YW4.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  I,
  S,
  has
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/terrain/Overlay.js
var n8 = class {
  constructor() {
    this._extent = u3(), this.resolution = 0, this.renderLocalOrigin = t8(0, 0, 0, "O"), this.pixelRatio = 1, this.mapUnitsPerPixel = 1, this.canvasGeometries = new r7();
  }
  get extent() {
    return this._extent;
  }
  setupGeometryViewsCyclical(e7) {
    this.setupGeometryViewsDirect();
    const s13 = 1e-3 * e7.range;
    if (this._extent[0] - s13 <= e7.min) {
      const s14 = this.canvasGeometries.extents[this.canvasGeometries.numViews++];
      z(this._extent, e7.range, 0, s14);
    }
    if (this._extent[2] + s13 >= e7.max) {
      const s14 = this.canvasGeometries.extents[this.canvasGeometries.numViews++];
      z(this._extent, -e7.range, 0, s14);
    }
  }
  setupGeometryViewsDirect() {
    this.canvasGeometries.numViews = 1, e2(this.canvasGeometries.extents[0], this._extent);
  }
  hasSomeSizedView() {
    for (let e7 = 0; e7 < this.canvasGeometries.numViews; e7++) {
      const t13 = this.canvasGeometries.extents[e7];
      if (t13[0] !== t13[2] && t13[1] !== t13[3]) return true;
    }
    return false;
  }
};
var r7 = class {
  constructor() {
    this.extents = [u3(), u3(), u3()], this.numViews = 0;
  }
};

// ../../../node_modules/@arcgis/core/views/3d/terrain/OverlayFramebufferObject.js
var t9 = class {
  constructor(e7, t13, h4) {
    this._fbos = e7, this._format = t13, this._name = h4;
  }
  get valid() {
    return null != this._handle?.getTexture();
  }
  dispose() {
    this._handle = t(this._handle);
  }
  get texture() {
    return this._handle?.getTexture();
  }
  bind(e7, t13, h4) {
    this._handle && this._handle.fbo?.width === t13 && this._handle.fbo?.height === h4 || (this._handle?.release(), this._handle = this._fbos.acquire(t13, h4, this._name, this._format)), e7.unbindTexture(this._handle?.fbo?.colorTexture), e7.bindFramebuffer(this._handle?.fbo);
  }
  generateMipMap() {
    this._handle?.getTexture()?.descriptor?.hasMipmap && this._handle?.getTexture()?.generateMipmap();
  }
};

// ../../../node_modules/@arcgis/core/views/3d/terrain/OverlayRenderTargets.js
var a5 = class {
  constructor(r11, t13, a9, s13, l6 = R2.RGBA_MIPMAP) {
    this.output = a9, this.content = s13, this.fbo = new t9(r11, l6, t13);
  }
  get valid() {
    return this.fbo.valid;
  }
};
var s6 = class {
  constructor(e7) {
    this.targets = [new a5(e7, "overlay color", o3.Color, o6.Color), new a5(e7, "overlay IM color", o3.Color, o6.ColorNoRasterImage), new a5(e7, "overlay highlight", o3.Highlight, o6.Highlight, R2.RGBA4), new a5(e7, "overlay water", o3.Normal, o6.WaterNormal), new a5(e7, "overlay occluded", o3.Color, o6.Occluded)], has("enable-feature:objectAndLayerId-rendering") && this.targets.push(new a5(e7, "overlay oid", o3.ObjectAndLayerIdColor, o6.ObjectAndLayerIdColor));
  }
  getTexture(r11) {
    return this.targets[r11]?.fbo.texture;
  }
  dispose() {
    for (const r11 of this.targets) r11.fbo.dispose();
  }
  computeValidity() {
    return this.targets.reduce((r11, e7, o10) => e7.valid ? r11 |= 1 << o10 : r11, 0);
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueRepository.js
var r8 = class {
  constructor(t13) {
    this._context = t13, this._perConstructorInstances = new t3(), this._frameCounter = 0, this._keepAliveFrameCount = n9;
  }
  get viewingMode() {
    return this._context.viewingMode;
  }
  get constructionContext() {
    return this._context;
  }
  destroy() {
    this._perConstructorInstances.forEach((e7) => e7.forEach((e8) => e8.technique.destroy())), this._perConstructorInstances.clear();
  }
  acquire(e7, t13 = o7) {
    const r11 = t13.key;
    let n13 = this._perConstructorInstances.get(e7, r11);
    if (null == n13) {
      const o10 = new e7(this._context, t13, () => this.release(o10));
      n13 = new s7(o10), this._perConstructorInstances.set(e7, r11, n13);
    }
    return ++n13.refCount, n13.technique;
  }
  releaseAndAcquire(e7, t13, r11) {
    if (null != r11) {
      if (t13.key === r11.key) return r11;
      this.release(r11);
    }
    return this.acquire(e7, t13);
  }
  release(e7) {
    if (null == e7 || this._perConstructorInstances.empty) return;
    const t13 = this._perConstructorInstances.get(e7.constructor, e7.key);
    null != t13 && (--t13.refCount, 0 === t13.refCount && (t13.refZeroFrame = this._frameCounter));
  }
  frameUpdate() {
    this._frameCounter++, this._keepAliveFrameCount !== n9 && this._perConstructorInstances.forEach((e7, t13) => {
      e7.forEach((e8, r11) => {
        0 === e8.refCount && e8.refZeroFrame + this._keepAliveFrameCount < this._frameCounter && (e8.technique.destroy(), this._perConstructorInstances.delete(t13, r11));
      });
    });
  }
  reloadAll() {
    return __async(this, null, function* () {
      const e7 = new Array();
      this._perConstructorInstances.forEach((t13, r11) => {
        const s13 = (e8, t14) => __async(this, null, function* () {
          const r12 = t14.shader;
          r12 && (yield r12.reload(), e8.forEach((e9) => e9.technique.reload(this._context)));
        });
        e7.push(s13(t13, r11));
      }), yield Promise.all(e7);
    });
  }
};
var s7 = class {
  constructor(e7) {
    this.technique = e7, this.refCount = 0, this.refZeroFrame = 0;
  }
};
var n9 = -1;
var o7 = new t5();

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterialRepository.js
var s8 = class {
  constructor(e7, t13, i6, s13) {
    this._textures = e7, this._techniques = t13, this.materialChanged = i6, this.requestRender = s13, this._id2glMaterialRef = new t3();
  }
  dispose() {
    this._textures.destroy();
  }
  acquire(e7, t13, r11) {
    this._ownMaterial(e7);
    const i6 = e7.produces.get(t13);
    if (!i6?.(r11)) return null;
    let s13 = this._id2glMaterialRef.get(r11, e7.id);
    if (null == s13) {
      const t14 = e7.createGLMaterial({
        material: e7,
        techniques: this._techniques,
        textures: this._textures,
        output: r11
      });
      s13 = new a6(t14), this._id2glMaterialRef.set(r11, e7.id, s13);
    }
    return s13.ref(), s13.glMaterial;
  }
  release(e7, r11) {
    const i6 = this._id2glMaterialRef.get(r11, e7.id);
    null != i6 && (i6.unref(), i6.referenced || (r(i6.glMaterial), this._id2glMaterialRef.delete(r11, e7.id)));
  }
  _ownMaterial(t13) {
    t13.repository && t13.repository !== this && n.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository").error("Material is already owned by a different material repository"), t13.repository = this;
  }
};
var a6 = class {
  constructor(e7) {
    this.glMaterial = e7, this._refCnt = 0;
  }
  ref() {
    ++this._refCnt;
  }
  unref() {
    --this._refCnt, s3(this._refCnt >= 0);
  }
  get referenced() {
    return this._refCnt > 0;
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/BindParameters.js
var m3 = class {
  constructor(i6, m5) {
    this.shadowMap = i6, this.slicePlane = m5, this.slot = E.OPAQUE_MATERIAL, this.hasOccludees = false, this.enableFillLights = true, this.transparencyPassType = o4.NONE, this.alignPixelEnabled = false, this.decorations = i2.ON, this.overlayStretch = 1, this.viewshedEnabled = false, this._camera = new it(), this._inverseViewport = n6(), this.oldLighting = new _3(), this.newLighting = new _3(), this._fadedLighting = new _3(), this._lighting = this.newLighting, this.ssr = new d4(), this.multipassEnabled = false, this.multipassTerrain = new o5(), this.multipassGeometry = new m(), this.hudRenderStyle = c4.Occluded, this.cloudsFade = new A2(), this.shadowHighlightsVisible = false;
  }
  get camera() {
    return this._camera;
  }
  set camera(i6) {
    this._camera = i6, this._inverseViewport[0] = 1 / i6.fullViewport[2], this._inverseViewport[1] = 1 / i6.fullViewport[3];
  }
  get inverseViewport() {
    return this._inverseViewport;
  }
  get lighting() {
    return this._lighting;
  }
  get weatherFading() {
    return this._lighting === this._fadedLighting;
  }
  fadeLighting(i6) {
    const {
      oldLighting: t13,
      newLighting: e7
    } = this;
    i6 >= 1 ? this._lighting = e7 : (this._fadedLighting.lerpLighting(t13, e7, i6), this._lighting = this._fadedLighting);
  }
};
var d4 = class {
  constructor() {
    this.fadeFactor = 1, this.reprojectionMatrix = e3();
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderContext.js
var a7 = class {
  constructor(e7, i6, a9 = null) {
    this.rctx = e7, this.sliceHelper = a9, this.lastFrameCamera = new it(), this.output = o3.Color, this.renderOccludedMask = l5, this.bindParameters = new m3(i6, null != a9 ? a9.plane : null), this.bindParameters.alignPixelEnabled = true;
  }
};
var n10 = class extends a7 {
  constructor(r11, t13, s13, i6) {
    super(r11, s13, i6), this.offscreenRenderingHelper = t13, this.sliceHelper = i6, this.time = n2(0);
  }
};
var l5 = h2.Occlude | h2.OccludeAndTransparent | h2.OccludeAndTransparentStencil;

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterials.js
var t10 = class {
  constructor(s13, t13) {
    this._material = s13, this._repository = t13, this._map = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._map.forEach((s13, t13) => {
      null != s13 && this._repository.release(this._material, t13);
    });
  }
  load(t13, e7, r11) {
    const i6 = this._material.produces.get(e7);
    if (!i6?.(r11)) return null;
    this._map.has(r11) || this._map.set(r11, this._repository.acquire(this._material, e7, r11));
    const a9 = this._map.get(r11);
    if (null != a9) {
      if (a9.ensureResources(t13) === a2.LOADED) return a9;
      this._repository.requestRender();
    }
    return null;
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DrawParameters.js
var s9 = class extends v2 {
  constructor(i6 = n5()) {
    super(), this.origin = i6, this.slicePlaneLocalOrigin = this.origin;
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/BufferRange.js
var t11 = class {
  constructor(t13 = 0, o10 = 0) {
    this.from = t13, this.to = o10;
  }
  get numElements() {
    return this.to - this.from;
  }
};
function o8(t13) {
  const o10 = /* @__PURE__ */ new Map();
  t13.forAll((t14) => o10.set(t14.from, t14));
  let e7 = true;
  for (; e7; ) {
    e7 = false;
    for (let r11 = 0; r11 < t13.length; ++r11) {
      const n13 = t13.data[r11], s13 = o10.get(n13.to);
      if (!s13) return;
      n13.to = s13.to, o10.delete(s13.from), t13.removeUnordered(s13), e7 = true;
    }
  }
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/Instance.js
var s10 = class extends t11 {
  constructor(e7, s13, t13) {
    super(s13, t13), this.geometry = e7;
  }
  get isVisible() {
    return this.geometry.visible;
  }
  get hasHighlights() {
    return null != this.geometry.highlights && this.isVisible;
  }
  get hasOccludees() {
    return null != this.geometry.occludees;
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/DrawCommand.js
var t12 = class {
  constructor() {
    this.first = 0, this.count = 0;
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/PerBufferData.js
var n11 = class {
  constructor() {
    this._numElements = 0, this._instances = /* @__PURE__ */ new Map(), this.holes = new l({
      allocator: (s13) => s13 || new t11(),
      deallocator: null
    }), this.hasHiddenInstances = false, this.hasHighlights = false, this.hasOccludees = false, this.drawCommandsDirty = true, this.drawCommandsDefault = o9(), this.drawCommandsHighlight = o9(), this.drawCommandsOccludees = o9(), this.drawCommandsShadowHighlightRest = o9();
  }
  get numElements() {
    return this._numElements;
  }
  get instances() {
    return this._instances;
  }
  addInstance(s13, t13) {
    this.deleteInstance(s13), this._instances.set(s13, t13), this._numElements += t13.numElements;
  }
  deleteInstance(s13) {
    const t13 = this._instances.get(s13);
    t13 && (this._numElements -= t13.numElements, this._instances.delete(s13));
  }
  updateInstance(s13, t13, e7) {
    const n13 = this._instances.get(s13);
    n13 && (this._numElements -= n13.numElements, n13.from = t13, n13.to = e7, this._numElements += n13.numElements);
  }
  updateDrawState(s13) {
    s13.isVisible ? (s13.hasHighlights && (this.hasHighlights = true), s13.hasOccludees && (this.hasOccludees = true)) : this.hasHiddenInstances = true;
  }
  updateDrawCommands(s13) {
    if (this.drawCommandsDefault.clear(), this.drawCommandsHighlight.clear(), this.drawCommandsOccludees.clear(), this.drawCommandsShadowHighlightRest.clear(), this.drawCommandsDirty = false, 0 === this._instances.size) return;
    if (!this.needsMultipleCommands()) {
      const t14 = this.drawCommandsDefault.pushNew(), e7 = this.holes.front();
      return null != this.vao && 1 === this.holes.length && e7.to === Math.floor(this.vao.byteSize / s13) ? (t14.first = 0, void (t14.count = e7.from)) : (t14.first = 1 / 0, t14.count = 0, this._instances.forEach((s14) => {
        t14.first = Math.min(t14.first, s14.from), t14.count = Math.max(t14.count, s14.to);
      }), void (t14.count -= t14.first));
    }
    const t13 = Array.from(this._instances.values()).sort((s14, t14) => s14.from === t14.from ? s14.to - t14.to : s14.from - t14.from);
    for (const e7 of t13) e7.isVisible && (h3(e7.hasOccludees ? this.drawCommandsOccludees : this.drawCommandsDefault, e7), h3(e7.hasHighlights ? this.drawCommandsHighlight : this.drawCommandsShadowHighlightRest, e7));
  }
  needsMultipleCommands() {
    return this.hasOccludees || this.hasHighlights || this.hasHiddenInstances;
  }
};
function a8(s13) {
  return null != s13.vao;
}
function o9() {
  return new l({
    allocator: (s13) => s13 || new t12(),
    deallocator: (s13) => s13
  });
}
function h3(s13, t13) {
  const e7 = s13.back();
  if (null == e7) {
    const e8 = s13.pushNew();
    return e8.first = t13.from, void (e8.count = t13.numElements);
  }
  if (r9(e7, t13)) {
    const s14 = t13.from - e7.first + t13.numElements;
    e7.count = s14;
  } else {
    const e8 = s13.pushNew();
    e8.first = t13.from, e8.count = t13.numElements;
  }
}
function r9(s13, t13) {
  return s13.first + s13.count >= t13.from;
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/PerOriginData.js
var s11 = class {
  constructor(s13) {
    this.origin = s13, this.buffers = new Array();
  }
  dispose() {
    this.buffers.forEach((s13) => s13.vao.dispose()), this.buffers.length = 0;
  }
  findBuffer(s13) {
    return this.buffers.find((r11) => r11.instances.has(s13));
  }
};

// ../../../node_modules/@arcgis/core/core/MemCachePool.js
var c6 = class {
  constructor(t13, c7) {
    this._cache = t13(c7, (t14, c8, s13) => {
      switch (c8) {
        case i.ALL:
          return t14.forEach((e7) => e7.dispose()), 0;
        case i.SOME: {
          const e7 = t14.shift();
          return e7 && (s13 -= Math.round(e7.usedMemory), e7.dispose()), s13;
        }
      }
    });
  }
  hitrate() {
    return this._cache.hitRate;
  }
  destroy() {
    this._cache.destroy();
  }
  clear() {
    this._cache.clear();
  }
  getSize(e7) {
    return this._cache.getSize(e7);
  }
  pop(e7) {
    const t13 = this._cache.peek(e7);
    if (!t13) return;
    const c7 = t13.pop();
    if (t13.length > 0) {
      if (c7) {
        const s13 = this._cache.getSize(e7) - Math.round(c7.usedMemory);
        this._cache.updateSize(e7, t13, s13);
      }
    } else this._cache.pop(e7);
    return c7;
  }
  put(e7, c7, s13 = s2) {
    const h4 = this._cache.peek(e7);
    if (!h4) return void this._cache.put(e7, [c7], c7.usedMemory, s13);
    h4.push(c7);
    const r11 = this._cache.getSize(e7) + Math.round(c7.usedMemory);
    this._cache.updateSize(e7, h4, r11);
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/VaoCache.js
var s12 = class {
  constructor(e7, r11, o10) {
    this._rctx = e7, this._locations = r11, this._layout = o10, this._cache = new c6(e7.newCache, "VAOCache");
  }
  dispose() {
    this._cache.destroy();
  }
  newVao(t13) {
    const s13 = t13.toString();
    let c7 = this._cache.pop(s13);
    return c7 || (c7 = new r6(this._rctx, this._locations, {
      geometry: this._layout
    }, {
      geometry: c2.createVertex(this._rctx, F.STATIC_DRAW)
    }), c7.vertexBuffers.geometry.setSize(t13), c7);
  }
  deleteVao(t13) {
    if (null == t13) return;
    const e7 = t13.byteSize.toString();
    this._cache.put(e7, t13);
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/MergedRenderer.js
var S4 = class extends c5 {
  constructor(e7) {
    super(e7), this._vaoCache = null, this._glMaterials = null, this._bufferWriter = null, this._dataByOrigin = /* @__PURE__ */ new Map(), this._hasHighlights = false, this._hasOccludees = false, this._produces = /* @__PURE__ */ new Map(), this.drapedPriority = 0;
  }
  destroy() {
    this._glMaterials = r(this._glMaterials), this._dataByOrigin.forEach((e7) => e7.dispose()), this._dataByOrigin.clear(), this._vaoCache = r(this._vaoCache);
  }
  initialize() {
    this.material.produces.forEach((e7, t13) => {
      this._produces.set(t13, (t14) => !(0 === this._dataByOrigin.size || !(t14 !== o3.Highlight && t14 !== o3.ShadowHighlight || this._hasHighlights)) && e7(t14));
    });
  }
  get produces() {
    return this._produces;
  }
  initializeRenderContext(e7, t13) {
    const {
      rctx: r11
    } = e7.renderContext;
    this._glMaterials = new t10(this.material, t13 ?? e7.materials), this._bufferWriter = this.material.createBufferWriter(), this._vaoCache = new s12(r11, this.material.vertexAttributeLocations, t2(this._bufferWriter.vertexBufferLayout));
  }
  uninitializeRenderContext() {
  }
  get hasOccludees() {
    return this._hasOccludees;
  }
  get isDecoration() {
    return this.material.parameters.isDecoration;
  }
  queryRenderOccludedState(e7) {
    return this.material.queryRenderOccludedState(e7);
  }
  get materialReference() {
    return this.material;
  }
  get numGeometries() {
    let e7 = 0;
    return this._dataByOrigin.forEach((t13) => e7 += t13.buffers.reduce((e8, t14) => e8 + t14.instances.size, 0)), e7;
  }
  get usedMemory() {
    let e7 = 0;
    return this._dataByOrigin.forEach((t13) => e7 += t13.buffers.reduce((e8, t14) => e8 + t14.vao.usedMemory, 0)), e7;
  }
  forEachGeometry(e7) {
    this._dataByOrigin.forEach((t13) => t13.buffers.forEach((t14) => t14.instances.forEach((t15) => e7(t15.geometry))));
  }
  modify(e7) {
    this._updateGeometries(e7.updates), this._addAndRemoveGeometries(e7.adds, e7.removes), this._updateDrawCommands();
  }
  _updateGeometries(e7) {
    const t13 = this._bufferWriter;
    if (null === t13) return;
    const r11 = t13.vertexBufferLayout.stride / 4;
    for (const i6 of e7) {
      const e8 = i6.renderGeometry, s13 = this._dataByOrigin.get(e8.localOrigin.id), o10 = s13?.findBuffer(e8.id);
      if (null == o10) return;
      const a9 = o10.instances.get(e8.id);
      if (i6.updateType & (I3.GEOMETRY | I3.TRANSFORMATION)) {
        const i7 = U(t13.elementCount(a9.geometry.geometry) * r11), s14 = t13.vertexBufferLayout.createView(i7.buffer);
        this._writeGeometry(e8, s14, 0), o10.vao.vertexBuffers.geometry.setSubData(i7, a9.from * r11, 0, a9.numElements * r11);
      }
      i6.updateType & (I3.HIGHLIGHT | I3.OCCLUDEE | I3.VISIBILITY) && (o10.drawCommandsDirty = true);
    }
  }
  _computeDeltas(e7, t13) {
    const r11 = new t3();
    for (const i6 of e7) {
      const e8 = i6.localOrigin;
      if (null == e8) continue;
      let t14 = r11.get(e8.id, null);
      null == t14 && (t14 = new x(e8.vec3), r11.set(e8.id, null, t14)), t14.changes.push(i6);
    }
    for (const i6 of t13) {
      const e8 = i6.localOrigin;
      if (null == e8) continue;
      const t14 = this._dataByOrigin.get(e8.id), s13 = t14?.findBuffer(i6.id);
      if (null == s13) continue;
      let o10 = r11.get(e8.id, s13);
      null == o10 && (o10 = new x(e8.vec3), r11.set(e8.id, s13, o10)), o10.changes.push(i6);
    }
    return r11;
  }
  _addAndRemoveGeometries(e7, r11) {
    if (null === this._bufferWriter || null === this._vaoCache) return;
    const {
      _bufferWriter: i6,
      _dataByOrigin: s13
    } = this, o10 = i6.vertexBufferLayout.stride / 4, a9 = this._computeDeltas(e7, r11);
    a9.forEach((e8, r12) => {
      const n13 = e8.get(null), l6 = null != n13 ? n13.changes : [];
      a9.delete(r12, null);
      let u5 = s13.get(r12);
      if (e8.forEach((e9, n14) => {
        if (a9.delete(r12, n14), null == n14) return void s3(false, "No VAO for removed geometries");
        if (n14.instances.size === e9.changes.length) return this._vaoCache.deleteVao(n14.vao), S(u5.buffers, n14), void (0 === u5.buffers.length && 0 === l6.length && s13.delete(r12));
        const h4 = n14.numElements, c7 = n14.vao.byteSize / 4, f2 = l6.reduce((e10, t13) => e10 + i6.elementCount(t13.geometry), 0), d5 = e9.changes.reduce((e10, t13) => e10 + i6.elementCount(t13.geometry), 0), m5 = Math.min((h4 + f2 - d5) * o10, z2), g = m5 > c7;
        m5 > G3 && m5 < c7 / 2 ? (e9.changes.forEach(({
          id: e10
        }) => n14.deleteInstance(e10)), n14.instances.forEach(({
          geometry: e10
        }) => l6.push(e10)), this._vaoCache.deleteVao(n14.vao), S(u5.buffers, n14)) : g ? this._applyAndRebuild(n14, l6, e9) : this._applyRemoves(n14, e9);
      }), l6.length > 0) for (null == u5 && (u5 = new s11(n13.origin), s13.set(r12, u5)), u5.buffers.forEach((e9) => this._applyAdds(e9, l6)); l6.length > 0; ) u5.buffers.push(this._applyAndRebuild(new n11(), l6, null));
    });
  }
  _updateDrawCommands() {
    this._hasHighlights = false, this._hasOccludees = false, this._dataByOrigin.forEach((e7) => {
      e7.buffers.forEach((e8) => {
        e8.drawCommandsDirty && (e8.hasHiddenInstances = false, e8.hasHighlights = false, e8.hasOccludees = false, n4(e8.instances, (t13) => (e8.updateDrawState(t13), e8.hasHiddenInstances && e8.hasHighlights && e8.hasOccludees)), e8.updateDrawCommands(this._bufferWriter.vertexBufferLayout.stride)), this._hasHighlights = this._hasHighlights || e8.hasHighlights, this._hasOccludees = this._hasOccludees || e8.hasOccludees;
      });
    });
  }
  _applyAndRebuild(e7, t13, r11) {
    if (null != r11) for (const d5 of r11.changes) e7.deleteInstance(d5.id);
    const i6 = this._bufferWriter, s13 = i6.vertexBufferLayout.stride, o10 = s13 / 4, a9 = Math.floor(z2 / o10);
    let n13 = e7.numElements;
    for (; t13.length > 0; ) {
      const r12 = t13.pop(), s14 = i6.elementCount(r12.geometry);
      if (n13 + s14 > a9 && n13 > 0) {
        t13.push(r12);
        break;
      }
      n13 += s14;
      const o11 = new s10(r12, 0, 0);
      s3(null == e7.instances.get(r12.id)), e7.addInstance(r12.id, o11);
    }
    const l6 = n13 * o10, u5 = U(l6), h4 = i6.vertexBufferLayout.createView(u5.buffer);
    let c7 = 0;
    e7.hasHiddenInstances = false, e7.hasHighlights = false, e7.hasOccludees = false, e7.instances.forEach((t14, r12) => {
      this._writeGeometry(t14.geometry, h4, c7);
      const s14 = c7;
      c7 += i6.elementCount(t14.geometry.geometry), e7.updateInstance(r12, s14, c7), e7.updateDrawState(t14);
    }), this._vaoCache.deleteVao(e7.vao), e7.vao = this._vaoCache.newVao(q2(l6)), e7.vao.vertexBuffers.geometry.setSubData(u5, 0, 0, c7 * o10), e7.holes.clear();
    const f2 = e7.holes.pushNew();
    return f2.from = c7, f2.to = Math.floor(e7.vao.byteSize / s13), e7.updateDrawCommands(s13), e7;
  }
  _applyRemoves(e7, t13) {
    if (0 === t13.changes.length || null === this._bufferWriter) return;
    for (const a9 of t13.changes) {
      const t14 = a9.id, r12 = e7.instances.get(t14);
      if (!r12) continue;
      e7.deleteInstance(t14);
      const i7 = T.back();
      if (i7) {
        if (i7.to === r12.from) {
          i7.to = r12.to;
          continue;
        }
        if (i7.from === r12.to) {
          i7.from = r12.from;
          continue;
        }
      }
      const s14 = T.pushNew();
      s14.from = r12.from, s14.to = r12.to;
    }
    o8(T);
    const r11 = this._bufferWriter.vertexBufferLayout.stride / 4, i6 = T.reduce((e8, t14) => Math.max(e8, t14.numElements), 0) * r11, s13 = U(i6);
    s13.fill(0, 0, i6);
    const o10 = e7.vao.vertexBuffers.geometry;
    T.forAll((e8) => o10.setSubData(s13, e8.from * r11, 0, e8.numElements * r11)), e7.holes.pushArray(T.data, T.length), T.forAll((e8, t14) => T.data[t14] = null), T.clear(), e7.drawCommandsDirty = true;
  }
  _applyAdds(e7, t13) {
    if (0 === t13.length || null === this._bufferWriter) return;
    if (!a8(e7)) return void this._applyAndRebuild(e7, t13, null);
    const i6 = this._bufferWriter, s13 = i6.vertexBufferLayout.stride / 4, o10 = e7.numElements, a9 = t13.reduce((e8, t14) => e8 + i6.elementCount(t14.geometry), 0), n13 = Math.min((o10 + a9) * s13, z2), l6 = 4 * n13;
    if (e7.vao.byteSize < q2(z2 - G3) && l6 > e7.vao.byteSize) return void this._applyAndRebuild(e7, t13, null);
    o8(e7.holes);
    const u5 = new Array();
    for (const r11 of t13) {
      const t14 = i6.elementCount(r11.geometry), s14 = M(e7.holes, t14);
      u5.push(s14);
    }
    const h4 = e7.vao.vertexBuffers.geometry;
    let c7 = 0, f2 = 0, d5 = 0;
    const m5 = U(n13), g = i6.vertexBufferLayout.createView(m5.buffer);
    t13.forEach((t14, r11) => {
      const o11 = u5[r11];
      if (null == o11) return;
      if (!(d5 === o11)) {
        const e8 = d5 - f2;
        e8 > 0 && h4.setSubData(m5, f2 * s13, 0, e8 * s13), f2 = o11, c7 = 0;
      }
      const a10 = i6.elementCount(t14.geometry);
      this._writeGeometry(t14, g, c7), c7 += a10, d5 = o11 + a10;
      const n14 = new s10(t14, o11, o11 + a10);
      s3(null == e7.instances.get(t14.id)), e7.addInstance(t14.id, n14), e7.drawCommandsDirty = true;
    });
    const p = d5 - f2;
    p > 0 && h4.setSubData(m5, f2 * s13, 0, p * s13), I(t13, (e8, t14) => null == u5[t14]);
  }
  _writeGeometry(e7, t13, r11) {
    if (null === this._bufferWriter) return;
    const i6 = e7.localOrigin.vec3;
    l3(j, -i6[0], -i6[1], -i6[2]);
    const s13 = c(L2, j, e7.transformation);
    h(I4, s13), s(I4, I4), this._bufferWriter.write(s13, I4, e7.geometry, t13, r11);
  }
  updateAnimation(e7) {
    return this.material.update(e7);
  }
  prepareTechnique(e7) {
    if (!this.material.shouldRender(e7)) return null;
    const {
      output: t13,
      bindParameters: r11
    } = e7, i6 = this.material.produces.get(r11.slot);
    if (!i6?.(t13)) return null;
    const s13 = t13 === o3.Highlight || t13 === o3.ShadowHighlight;
    if (s13 && !this._hasHighlights) return null;
    const o10 = t13 === o3.ShadowExcludeHighlight, a9 = !(s13 || o10);
    for (const n13 of this._dataByOrigin.values()) for (const i7 of n13.buffers) {
      if (s13 && !i7.hasHighlights) continue;
      const n14 = (s13 ? i7.drawCommandsHighlight : o10 && i7.needsMultipleCommands() ? i7.drawCommandsShadowHighlightRest : i7.drawCommandsDefault) || null, l6 = a9 && i7.drawCommandsOccludees || null;
      if (n14?.length || l6?.length) {
        const i8 = this._glMaterials.load(e7.rctx, r11.slot, t13), s14 = null != i8 ? i8.beginSlot(r11) : null;
        if (null != s14) return s14;
      }
    }
    return null;
  }
  renderNode(e7, t13) {
    const {
      output: r11,
      bindParameters: i6
    } = e7, s13 = r11 === o3.Highlight || r11 === o3.ShadowHighlight, o10 = r11 === o3.ShadowExcludeHighlight, a9 = !(s13 || o10), n13 = i6.slot === E.OCCLUDER_MATERIAL, l6 = i6.slot === E.TRANSPARENT_OCCLUDER_MATERIAL, u5 = e7.rctx;
    u5.runAppleAmdDriverHelper(), u5.bindTechnique(t13, i6, this.material.parameters);
    for (const h4 of this._dataByOrigin.values()) for (const e8 of h4.buffers) {
      if (s13 && !e8.hasHighlights) continue;
      const r12 = (s13 ? e8.drawCommandsHighlight : o10 && e8.needsMultipleCommands() ? e8.drawCommandsShadowHighlightRest : e8.drawCommandsDefault) || null, c7 = a9 && e8.drawCommandsOccludees || null;
      if (r12?.length || c7?.length) {
        t13.program.bindDraw(new s9(h4.origin), i6, this.material.parameters), t13.ensureAttributeLocations(e8.vao), u5.bindVAO(e8.vao), r12?.length && (u5.setPipelineState(t13.getPipeline(false, n13, l6)), r12.forAll((e9) => u5.drawArrays(t13.primitiveType, e9.first, e9.count))), c7?.length && (u5.setPipelineState(t13.getPipeline(true, n13, l6)), c7.forAll((e9) => u5.drawArrays(t13.primitiveType, e9.first, e9.count)));
      }
    }
  }
  get test() {
  }
};
e([y({
  constructOnly: true
})], S4.prototype, "material", void 0), S4 = e([a("esri.views.3d.webgl-engine.materials.renderers.MergedRenderer")], S4);
var x = class {
  constructor(e7) {
    this.origin = e7, this.changes = new Array();
  }
};
function M(e7, t13) {
  let r11;
  if (!e7.some((e8) => !(e8.numElements < t13) && (r11 = e8, true))) return null;
  const i6 = r11.from;
  return r11.from += t13, r11.from >= r11.to && e7.removeUnordered(r11), i6;
}
var j = e3();
var L2 = e3();
var I4 = e3();
var T = new l({
  allocator: (e7) => e7 || new t11(),
  deallocator: null
});
var G3 = 65536;
var W = 4 * G3;
var P = 1024;
var V2 = 16777216;
var z2 = V2 / 4;
var N = new Float32Array(G3);
function U(e7) {
  return N.length < e7 && (N = new Float32Array(e7)), N;
}
function q2(e7) {
  const t13 = 4 * e7;
  return t13 <= P ? P : t13 < W ? u2(t13) : Math.max(Math.min(Math.ceil(1.5 * t13 / W) * W, V2), t13);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/SortedRenderGeometryRenderer.js
var G4 = class extends S2 {
  constructor(e7) {
    super(e7), this._pending = new v3(), this._changes = new s5(), this._materialRenderers = /* @__PURE__ */ new Map(), this._sortedMaterialRenderers = new l(), this._geometries = /* @__PURE__ */ new Map(), this._hasHighlights = false, this._hasWater = false;
  }
  destroy() {
    this._changes.prune(), this._materialRenderers.forEach((e7) => e7.destroy()), this._materialRenderers.clear(), this._sortedMaterialRenderers.clear(), this._geometries.clear(), this._pending.clear();
  }
  get updating() {
    return !this._pending.empty || this._changes.updates.length > 0;
  }
  get rctx() {
    return this.rendererContext.rctx;
  }
  get _materials() {
    return this.rendererContext.materials;
  }
  get _localOriginFactory() {
    return this.rendererContext.localOriginFactory;
  }
  get hasHighlights() {
    return this._hasHighlights;
  }
  get hasWater() {
    return this._hasWater;
  }
  get rendersOccludedDraped() {
    return n4(this._materialRenderers, (e7) => 0 !== e7.numGeometries && !e7.queryRenderOccludedState(h2.Occlude));
  }
  get isEmpty() {
    return !this.updating && 0 === this._materialRenderers.size && 0 === this._geometries.size;
  }
  getMaterialRenderer(e7) {
    return this._materialRenderers.get(e7);
  }
  commitChanges() {
    if (!this.updating) return false;
    this._processAddsRemoves();
    const e7 = n7(this._changes);
    let r11 = false;
    return e7.forEach((e8, t13) => {
      let s13 = this.getMaterialRenderer(t13);
      if (!s13 && e8.adds.length > 0) {
        const e9 = new S4({
          material: t13
        });
        e9.initializeRenderContext(this.rendererContext.pluginContext, this._materials), s13 = e9, this._materialRenderers.set(t13, s13), r11 = true;
      }
      s13 && (s13.modify(e8), 0 === s13.numGeometries && (this._materialRenderers.delete(t13), s13.destroy(), r11 = true));
    }), this._changes.clear(), r11 && this._updateSortedMaterialRenderers(), this._hasHighlights = n4(this._materialRenderers, (e8) => {
      const r12 = e8.produces.get(E.DRAPED_MATERIAL);
      return !!r12 && r12(o3.Highlight);
    }), this._hasWater = n4(this._materialRenderers, (e8) => {
      const r12 = e8.produces.get(E.DRAPED_WATER);
      return !!r12 && r12(o3.Normal);
    }), this.notifyChange("updating"), true;
  }
  addGeometries(e7, r11) {
    if (0 === e7.length) return;
    const t13 = this._validateRenderGeometries(e7);
    for (const i6 of t13) this._geometries.set(i6.id, i6);
    const s13 = this._pending.empty;
    for (const i6 of t13) this._pending.adds.add(i6);
    s13 && this.notifyChange("updating"), r11 === E3.UPDATE && this._notifyGraphicGeometryChanged(e7);
  }
  removeGeometries(e7, r11) {
    const t13 = this._pending.empty, s13 = this._pending.adds;
    for (const i6 of e7) s13.has(i6) ? (this._pending.removed.add(i6), s13.delete(i6)) : this._pending.removed.has(i6) || this._pending.removes.add(i6), this._geometries.delete(i6.id);
    t13 && !this._pending.empty && this.notifyChange("updating"), r11 === E3.UPDATE && this._notifyGraphicGeometryChanged(e7);
  }
  modifyGeometries(e7, r11) {
    const t13 = 0 === this._changes.updates.length;
    for (const s13 of e7) {
      const e8 = this._changes.updates.pushNew();
      e8.renderGeometry = this._validateRenderGeometry(s13), e8.updateType = r11;
    }
    switch (t13 && this._changes.updates.length > 0 && this.notifyChange("updating"), r11) {
      case I3.TRANSFORMATION:
      case I3.GEOMETRY:
        return this._notifyGraphicGeometryChanged(e7);
      case I3.VISIBILITY:
        return this._notifyGraphicVisibilityChanged(e7);
    }
  }
  updateAnimation(e7) {
    let r11 = false;
    return this._sortedMaterialRenderers.forAll((t13) => r11 = !!t13.updateAnimation && t13.updateAnimation(e7) || r11), r11;
  }
  shouldRender(e7) {
    return this._sortedMaterialRenderers.some((r11) => r11.prepareTechnique(e7));
  }
  render(e7) {
    this._sortedMaterialRenderers.forAll((r11) => {
      const t13 = r11.prepareTechnique(e7);
      null != t13 && r11.renderNode(e7, t13);
    });
  }
  intersect(e7, r11, t13, s13, i6) {
    return this._geometries.forEach((n13) => {
      if (s13 && !s13(n13)) return;
      this._intersectRenderGeometry(n13, t13, r11, 0, e7, i6);
      const o10 = this.rendererContext.longitudeCyclical;
      o10 && (n13.boundingSphere[0] - n13.boundingSphere[3] < o10.min && this._intersectRenderGeometry(n13, t13, r11, o10.range, e7, i6), n13.boundingSphere[0] + n13.boundingSphere[3] > o10.max && this._intersectRenderGeometry(n13, t13, r11, -o10.range, e7, i6)), i6++;
    }), i6;
  }
  _updateSortedMaterialRenderers() {
    this._sortedMaterialRenderers.clear();
    let e7 = 0;
    for (const r11 of this._materialRenderers.values()) r11.drapedPriority = e7++, this._sortedMaterialRenderers.push(r11);
    this._sortedMaterialRenderers.sort((e8, r11) => r11.materialReference?.renderPriority === e8.materialReference?.renderPriority ? e8.drapedPriority - r11.drapedPriority : (r11.materialReference?.renderPriority || 0) - (e8.materialReference?.renderPriority || 0));
  }
  _processAddsRemoves() {
    this._changes.adds.clear(), this._changes.removes.clear(), this._changes.adds.pushArray(Array.from(this._pending.adds)), this._changes.removes.pushArray(Array.from(this._pending.removes));
    for (let e7 = 0; e7 < this._changes.updates.length; ) {
      const r11 = this._changes.updates.data[e7];
      this._pending.has(r11.renderGeometry) ? this._changes.updates.removeUnorderedIndex(e7) : e7++;
    }
    this._pending.clear();
  }
  _intersectRenderGeometry(e7, r11, t13, s13, i6, n13) {
    if (!e7.visible) return;
    let o10 = 0;
    s13 += e7.transformation[12], o10 = e7.transformation[13], A3[0] = t13[0] - s13, A3[1] = t13[1] - o10, e7.screenToWorldRatio = this.rendererContext.screenToWorldRatio, e7.material.intersectDraped(e7, null, i6, A3, (t14, s14, o11) => {
      C3(r11, o11, n13, e7.material.renderPriority, i6, e7.layerUid, e7.graphicUid);
    }, r11);
  }
  _notifyGraphicGeometryChanged(e7) {
    if (null == this.drapeSource.notifyGraphicGeometryChanged) return;
    let r11;
    for (const t13 of e7) {
      const e8 = t13.graphicUid;
      null != e8 && e8 !== r11 && (this.drapeSource.notifyGraphicGeometryChanged(e8), r11 = e8);
    }
  }
  _notifyGraphicVisibilityChanged(e7) {
    if (null == this.drapeSource.notifyGraphicVisibilityChanged) return;
    let r11;
    for (const t13 of e7) {
      const e8 = t13.graphicUid;
      null != e8 && e8 !== r11 && (this.drapeSource.notifyGraphicVisibilityChanged(e8), r11 = e8);
    }
  }
  _validateRenderGeometries(e7) {
    for (const r11 of e7) this._validateRenderGeometry(r11);
    return e7;
  }
  _validateRenderGeometry(e7) {
    return null == e7.localOrigin && (e7.localOrigin = this._localOriginFactory.getOrigin(V(e7.boundingSphere))), e7;
  }
  get test() {
  }
};
e([y()], G4.prototype, "drapeSource", void 0), e([y()], G4.prototype, "updating", null), e([y()], G4.prototype, "rctx", null), e([y({
  constructOnly: true
})], G4.prototype, "rendererContext", void 0), e([y()], G4.prototype, "_materials", null), e([y()], G4.prototype, "_localOriginFactory", null), e([y({
  readOnly: true
})], G4.prototype, "isEmpty", null), e([y()], G4.prototype, "_materialRenderers", void 0), e([y()], G4.prototype, "_geometries", void 0), G4 = e([a("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")], G4);
var v3 = class {
  constructor() {
    this.adds = /* @__PURE__ */ new Set(), this.removes = /* @__PURE__ */ new Set(), this.removed = /* @__PURE__ */ new Set();
  }
  get empty() {
    return 0 === this.adds.size && 0 === this.removes.size && 0 === this.removed.size;
  }
  has(e7) {
    return this.adds.has(e7) || this.removes.has(e7) || this.removed.has(e7);
  }
  clear() {
    this.adds.clear(), this.removes.clear(), this.removed.clear();
  }
};
function C3(e7, r11, t13, s13, i6, n13, o10) {
  const a9 = new i5(n13, o10, r11), h4 = (r12) => {
    r12.set(i4.OVERLAY, a9, e7.dist, e7.normal, e7.transformation, t13, s13);
  };
  if ((null == i6.results.min.drapedLayerOrder || t13 >= i6.results.min.drapedLayerOrder) && (null == i6.results.min.dist || i6.results.ground.dist <= i6.results.min.dist) && h4(i6.results.min), i6.options.store !== e5.MIN && (null == i6.results.max.drapedLayerOrder || t13 < i6.results.max.drapedLayerOrder) && (null == i6.results.max.dist || i6.results.ground.dist > i6.results.max.dist) && h4(i6.results.max), i6.options.store === e5.ALL) {
    const e8 = G(i6.ray);
    h4(e8), i6.results.all.push(e8);
  }
}
var A3 = n6();

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextureTechnique.js
var m4 = class _m extends r3 {
  initializeProgram(e7) {
    return new r4(e7.rctx, _m.shader.get().build(), O);
  }
  initializePipeline() {
    return this.configuration.hasAlpha ? S3({
      blending: l4(R.SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE_MINUS_SRC_ALPHA),
      colorWrite: _2
    }) : S3({
      colorWrite: _2
    });
  }
};
m4.shader = new t4(d2, () => import("./TextureOnly.glsl-2OB23KE2.js"));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextureTechniqueConfiguration.js
var r10 = class extends t5 {
  constructor() {
    super(...arguments), this.hasAlpha = false;
  }
};
e([r5()], r10.prototype, "hasAlpha", void 0);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/OverlayCompositingTechnique.js
var n12 = class _n extends r3 {
  initializeProgram(e7) {
    return new r4(e7.rctx, _n.shader.get().build(), O);
  }
  initializePipeline() {
    return S3({
      blending: s4(R.ONE, R.ONE_MINUS_SRC_ALPHA),
      colorWrite: _2
    });
  }
};
n12.shader = new t4(m2, () => import("./OverlayCompositing.glsl-ED2TIEHW.js"));

// ../../../node_modules/@arcgis/core/views/3d/terrain/OverlayRenderer.js
var $ = class extends u4 {
  constructor(e7) {
    super(e7), this._overlays = null, this._renderTargets = null, this._overlayParameters = new d3(), this.hasHighlights = false, this._hasWater = false, this._renderers = /* @__PURE__ */ new Map(), this._sortedDrapeSourceRenderersDirty = false, this._sortedRenderers = new l(), this._passParameters = new a4(), this._materials = null, this._screenToWorldRatio = 1, this._localOriginFactory = null, this.unloadedMemory = 0, this.ignoresMemoryFactor = false, this._camera = new it(), this.worldToPCSRatio = 1, this.events = new o(), this.longitudeCyclical = null, this.produces = /* @__PURE__ */ new Map([[E.DRAPED_MATERIAL, (e8) => e8 !== o3.Highlight || this.hasHighlights], [E.DRAPED_WATER, () => this._hasWater]]), this._hasTargetWithoutRasterImage = false, this._hasDrapedFeatureSource = false, this._hasDrapedRasterSource = false;
  }
  initialize() {
    const e7 = this.view._stage.renderer.fboCache, r11 = this.view._stage.renderView, {
      waterTextures: t13,
      stippleTextures: s13,
      markerTextures: i6
    } = r11;
    this._techniques = new r8({
      rctx: this._rctx,
      viewingMode: l2.Local,
      stippleTextures: s13,
      markerTextures: i6,
      waterTextures: t13
    }), this._renderContext = new a7(this._rctx, new G2(e7, this.view.state.viewingMode), null), this.addHandles([d(() => t13.updating, () => this.events.emit("content-changed"), A), d(() => this.spatialReference, (e8) => this._localOriginFactory = new _4(e8), A), v(() => this.view.allLayerViews, "after-changes", () => this._sortedDrapeSourceRenderersDirty = true)]), this._materials = new s8(r11.textures, this._techniques, () => {
      this.notifyChange("rendersOccludedDraped"), this.events.emit("content-changed"), this.notifyChange("updating"), this.notifyChange("isEmpty");
    }, () => this.events.emit("content-changed")), this._bindParameters.slot = E.DRAPED_MATERIAL, this._bindParameters.mainDepth = null, this._camera.near = 1, this._camera.far = 1e4, this._camera.relativeElevation = null, this._bindParameters.camera = this._camera, this._bindParameters.transparencyPassType = o4.NONE, this._bindParameters.newLighting.noonFactor = 0, this._bindParameters.newLighting.globalFactor = 0, this._bindParameters.newLighting.set([new i3(r2(1, 1, 1))]), this.addHandles(this.view.resourceController.scheduler.registerTask(I2.STAGE, this));
  }
  destroy() {
    this._renderers.forEach((e7) => e7.destroy()), this._renderers.clear(), this._debugTextureTechnique = t(this._debugTextureTechnique), this._passParameters.texture = r(this._passParameters.texture), this._techniques = u(this._techniques), this.disposeOverlays();
  }
  get _bindParameters() {
    return this._renderContext.bindParameters;
  }
  get _rctx() {
    return this.view._stage.renderView.renderingContext;
  }
  get rctx() {
    return this._rctx;
  }
  get materials() {
    return this._materials;
  }
  get screenToWorldRatio() {
    return this._screenToWorldRatio;
  }
  get localOriginFactory() {
    return this._localOriginFactory;
  }
  initializeRenderContext(e7) {
    this.pluginContext = e7;
  }
  uninitializeRenderContext() {
  }
  renderNode() {
  }
  get updating() {
    return this._sortedDrapeSourceRenderersDirty || n4(this._renderers, (e7) => e7.updating);
  }
  get hasOverlays() {
    return null != this._overlays && null != this._renderTargets;
  }
  getMaterialRenderer(e7) {
    for (const r11 of this._renderers.values()) {
      const t13 = r11.getMaterialRenderer(e7);
      if (t13) return t13;
    }
    return null;
  }
  get layers() {
    return this._sortedDrapeSourceRenderersDirty && this._updateSortedDrapeSourceRenderers(), this._sortedRenderers.map((e7) => e7.drapeSource.layer).filter((e7) => !!e7);
  }
  createGeometryDrapeSourceRenderer(e7) {
    return this.createDrapeSourceRenderer(e7, G4);
  }
  createDrapeSourceRenderer(e7, r11, t13) {
    const s13 = this._renderers.get(e7);
    null != s13 && s13.destroy();
    const i6 = new r11(__spreadProps(__spreadValues({}, t13), {
      rendererContext: this,
      drapeSource: e7
    }));
    return this._renderers.set(e7, i6), this._sortedDrapeSourceRenderersDirty = true, "fullOpacity" in e7 && this.addHandles(d(() => e7.fullOpacity, () => this.events.emit("content-changed")), e7), i6;
  }
  removeDrapeSourceRenderer(e7) {
    if (null == e7) return;
    const r11 = this._renderers.get(e7);
    null != r11 && (this._sortedDrapeSourceRenderersDirty = true, this._renderers.delete(e7), this.removeHandles(e7), r11.destroy());
  }
  computeValidity() {
    return this._renderTargets?.computeValidity() ?? 0;
  }
  releaseRenderTargets() {
    this._renderTargets?.dispose();
  }
  get overlays() {
    return this._overlays ?? [];
  }
  ensureDrapeTargets(e7) {
    this._hasTargetWithoutRasterImage = !!this._overlays && n3(e7, (e8) => e8.drapeTargetType === t7.WithoutRasterImage);
  }
  ensureDrapeSources(e7) {
    this._overlays ? (this._hasDrapedFeatureSource = n3(e7, (e8) => e8.drapeSourceType === e6.Features), this._hasDrapedRasterSource = n3(e7, (e8) => e8.drapeSourceType === e6.RasterImage)) : this._hasDrapedFeatureSource = this._hasDrapedRasterSource = false;
  }
  get _needsColorWithoutRasterImage() {
    return this._hasDrapedRasterSource && this._hasDrapedFeatureSource && this._hasTargetWithoutRasterImage;
  }
  ensureOverlays(e7, r11, t13 = this._bindParameters.overlayStretch) {
    null == this._overlays && (this._renderTargets = new s6(this.view._stage.renderer.fboCache), this._overlays = [new n8(), new n8()]), this.ensureDrapeTargets(e7), this.ensureDrapeSources(r11), this._bindParameters.overlayStretch = t13;
  }
  disposeOverlays() {
    this._overlays = null, this._renderTargets = r(this._renderTargets), this.events.emit("textures-disposed");
  }
  getTexture(e7) {
    if (null != e7) return e7 === o6.ColorNoRasterImage && !this._needsColorWithoutRasterImage && this._hasDrapedFeatureSource ? this._renderTargets?.getTexture(o6.Color) : this._renderTargets?.getTexture(e7);
  }
  get running() {
    return this.updating;
  }
  runTask(e7) {
    this._processDrapeSources(e7, () => true);
  }
  _processDrapeSources(e7, r11) {
    let s13 = false;
    for (const [t13, i6] of this._renderers) {
      if (e7.done) break;
      (t13.destroyed || r11(t13)) && i6.commitChanges() && (s13 = true, e7.madeProgress());
    }
    this._sortedDrapeSourceRenderersDirty && (this._sortedDrapeSourceRenderersDirty = false, s13 = true, this._updateSortedDrapeSourceRenderers()), s13 && (null != this._overlays && 0 === this._renderers.size && this.disposeOverlays(), this.notifyChange("updating"), this.notifyChange("isEmpty"), this.events.emit("content-changed"), this.hasHighlights = n4(this._renderers, (e8) => e8.hasHighlights), this.notifyChange("rendersOccludedDraped"), this._updateHasWater());
  }
  processSyncDrapeSources() {
    this._processDrapeSources(C, (e7) => e7.updatePolicy === C2.SYNC);
  }
  get isEmpty() {
    return !t6.OVERLAY_DRAW_DEBUG_TEXTURE && !n4(this._renderers, (e7) => !e7.isEmpty);
  }
  get hasWater() {
    return this._hasWater;
  }
  get rendersOccludedDraped() {
    const e7 = this._renderContext.renderOccludedMask;
    this._renderContext.renderOccludedMask = se;
    const r11 = this._sortedRenderers.some(({
      renderer: e8
    }) => e8.shouldRender(this._renderContext));
    return this._renderContext.renderOccludedMask = e7, r11;
  }
  renders(e7) {
    return t6.OVERLAY_DRAW_DEBUG_TEXTURE && e7 !== o6.Occluded || this._sortedRenderers.some(({
      renderer: e8
    }) => e8.shouldRender(this._renderContext));
  }
  get mode() {
    return this.isEmpty ? f.Disabled : this._renderTargets?.getTexture(o6.WaterNormal) ? f.EnabledWithWater : this._renderTargets?.getTexture(o6.Color) ? f.Enabled : f.Disabled;
  }
  updateAnimation(e7) {
    let r11 = false;
    return this._renderers.forEach((t13) => r11 = t13.updateAnimation(e7) || r11), r11;
  }
  updateDrapeSourceOrder() {
    this._sortedDrapeSourceRenderersDirty = true;
  }
  drawOverlays(e7) {
    if (this._overlays && this._renderTargets) {
      for (const e8 of this._overlays) this.longitudeCyclical ? e8.setupGeometryViewsCyclical(this.longitudeCyclical) : e8.setupGeometryViewsDirect();
      for (const r11 of this._renderTargets.targets) {
        if (r11.content === o6.ColorNoRasterImage && !this._needsColorWithoutRasterImage) continue;
        const t13 = this._drawTarget(E2.INNER, r11, e7), s13 = this._drawTarget(E2.OUTER, r11, e7);
        (t13 || s13) && r11.fbo.generateMipMap();
      }
    }
  }
  _drawTarget(e7, r11, t13) {
    const s13 = this._overlays[e7], i6 = s13.canvasGeometries;
    if (0 === i6.numViews) return false;
    const {
      alignPixelEnabled: a9,
      contentPixelRatio: n13
    } = t13;
    this._screenToWorldRatio = n13 * s13.mapUnitsPerPixel / this._bindParameters.overlayStretch;
    const o10 = r11.output;
    if (this.isEmpty || o10 === o3.Highlight && !this.hasHighlights || o10 === o3.Normal && !this.hasWater || !s13.hasSomeSizedView()) return false;
    const h4 = this._rctx;
    if (this._camera.pixelRatio = s13.pixelRatio * n13, this._renderContext.output = o10, this._bindParameters.alignPixelEnabled = a9, this._bindParameters.screenToWorldRatio = this._screenToWorldRatio, this._bindParameters.screenToPCSRatio = this._screenToWorldRatio * this.worldToPCSRatio, this._bindParameters.slot = o10 === o3.Normal ? E.DRAPED_WATER : E.DRAPED_MATERIAL, r11.content === o6.Occluded && (this._renderContext.renderOccludedMask = se), !this.renders(r11.content)) return this._renderContext.renderOccludedMask = l5, false;
    const d5 = s13.resolution;
    this._rctx.setViewport(e7 === E2.INNER ? 0 : d5, 0, d5, d5);
    const l6 = 2 * s13.resolution, c7 = s13.resolution, u5 = r11.fbo;
    u5.bind(h4, l6, c7), e7 === E2.INNER && (h4.setClearColor(0, 0, 0, 0), h4.clear(_.COLOR_BUFFER_BIT));
    if (t6.OVERLAY_DRAW_DEBUG_TEXTURE && r11.content !== o6.Occluded) for (let p = 0; p < i6.numViews; p++) this._setViewParameters(i6.extents[p], s13), this._ensureDebugPatternResources(s13.resolution, re[e7]), this._rctx.bindTechnique(this._debugTextureTechnique, this._renderContext.bindParameters, this._passParameters), this._rctx.screen.draw();
    return this._sortedRenderers.forAll(({
      drapeSource: t14,
      renderer: a10
    }) => {
      if (r11.content === o6.ColorNoRasterImage && t14.drapeSourceType === e6.RasterImage) return;
      const {
        fullOpacity: n14
      } = t14, d6 = null != n14 && n14 < 1 && o10 === o3.Color ? this.bindTemporaryFramebuffer(l6, c7) : null;
      for (let e8 = 0; e8 < i6.numViews; e8++) this._setViewParameters(i6.extents[e8], s13), a10.render(this._renderContext);
      if (d6) {
        u5.bind(h4, l6, c7), this._overlayParameters.texture = d6.getTexture(), this._overlayParameters.opacity = n14, this._overlayParameters.overlayIndex = e7;
        const r12 = this.pluginContext.techniques.acquire(n12);
        this._rctx.bindTechnique(r12, this._renderContext.bindParameters, this._overlayParameters), this._rctx.screen.draw(), r12.release(), d6.release();
      }
    }), h4.bindFramebuffer(null), this._renderContext.renderOccludedMask = l5, true;
  }
  bindTemporaryFramebuffer(e7, r11) {
    const t13 = this.view._stage.renderer.fboCache, s13 = t13.acquire(e7, r11, "overlay tmp");
    return t13.rctx.unbindTexture(s13.fbo?.colorTexture), t13.rctx.bindFramebuffer(s13.fbo), t13.rctx.clear(_.COLOR_BUFFER_BIT), s13;
  }
  reloadShaders() {
    return __async(this, null, function* () {
      yield this._techniques.reloadAll();
    });
  }
  notifyContentChanged() {
    this.events.emit("content-changed");
  }
  intersect(e7, r11, t13, s13) {
    this._sortedDrapeSourceRenderersDirty && this._updateSortedDrapeSourceRenderers();
    let i6 = 0;
    for (const {
      renderer: a9
    } of this._sortedRenderers) i6 = a9.intersect?.(e7, r11, t13, s13, i6) ?? i6;
  }
  _updateSortedDrapeSourceRenderers() {
    if (this._sortedRenderers.clear(), 0 === this._renderers.size) return;
    const e7 = this.view.map.allLayers, r11 = e7.length;
    this._renderers.forEach((t13, s13) => {
      const i6 = e7.indexOf(s13.layer), a9 = i6 >= 0, n13 = s13.renderGroup ?? (a9 ? a3.MapLayer : a3.ViewLayer), o10 = r11 * n13 + (a9 ? i6 : 0);
      this._sortedRenderers.push(new ee(s13, t13, o10));
    }), this._sortedRenderers.sort((e8, r12) => e8.index - r12.index);
  }
  _setViewParameters(e7, r11) {
    const t13 = this._camera;
    t13.viewport = [0, 0, r11.resolution, r11.resolution], Q(t13.projectionMatrix, 0, e7[2] - e7[0], 0, e7[3] - e7[1], t13.near, t13.far), q(t13.viewMatrix, [-e7[0], -e7[1], 0]);
  }
  _updateHasWater() {
    const e7 = n4(this._renderers, (e8) => e8.hasWater);
    e7 !== this._hasWater && (this._hasWater = e7, this.events.emit("has-water", e7));
  }
  _ensureDebugPatternResources(e7, r11) {
    if (o2(this._passParameters.color, r11[0], r11[1], r11[2]), this._passParameters.texture) return;
    const t13 = new Uint8Array(e7 * e7 * 4);
    let s13 = 0;
    for (let n13 = 0; n13 < e7; n13++) for (let r12 = 0; r12 < e7; r12++) {
      const i7 = Math.floor(r12 / 10), a10 = Math.floor(n13 / 10);
      i7 < 2 || a10 < 2 || 10 * i7 > e7 - 20 || 10 * a10 > e7 - 20 ? (t13[s13++] = 255, t13[s13++] = 255, t13[s13++] = 255, t13[s13++] = 255) : (t13[s13++] = 255, t13[s13++] = 255, t13[s13++] = 255, t13[s13++] = 1 & i7 && 1 & a10 ? 1 & r12 ^ 1 & n13 ? 0 : 255 : 1 & i7 ^ 1 & a10 ? 0 : 128);
    }
    const i6 = new e4(e7);
    i6.samplingMode = L.NEAREST, this._passParameters.texture = new c3(this._rctx, i6, t13);
    const a9 = new r10();
    a9.hasAlpha = true, this._debugTextureTechnique = this._techniques.acquire(m4, a9);
  }
  get test() {
  }
};
e([y()], $.prototype, "hasHighlights", void 0), e([y()], $.prototype, "_sortedDrapeSourceRenderersDirty", void 0), e([y()], $.prototype, "_techniques", void 0), e([y({
  constructOnly: true
})], $.prototype, "view", void 0), e([y()], $.prototype, "worldToPCSRatio", void 0), e([y()], $.prototype, "spatialReference", void 0), e([y({
  type: Boolean,
  readOnly: true
})], $.prototype, "updating", null), e([y()], $.prototype, "isEmpty", null), e([y({
  readOnly: true
})], $.prototype, "rendersOccludedDraped", null), $ = e([a("esri.views.3d.terrain.OverlayRenderer")], $);
var ee = class {
  constructor(e7, r11, t13) {
    this.drapeSource = e7, this.renderer = r11, this.index = t13;
  }
};
var re = [[1, 0.5, 0.5], [0.5, 0.5, 1]];
var te = -2;
var se = h2.OccludeAndTransparent;

export {
  r8 as r,
  s8 as s,
  m3 as m,
  n10 as n,
  l5 as l,
  t10 as t,
  s9 as s2,
  c6 as c,
  S4 as S,
  G4 as G,
  m4 as m2,
  r10 as r2,
  $,
  te,
  se
};
//# sourceMappingURL=chunk-BV256A2V.js.map
