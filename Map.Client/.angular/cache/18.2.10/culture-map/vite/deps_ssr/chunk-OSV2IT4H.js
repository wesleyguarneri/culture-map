import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  P,
  x
} from "./chunk-RQNBFP7M.js";
import {
  it
} from "./chunk-2NPPOPEZ.js";
import {
  n as n4,
  t as t4,
  u as u3
} from "./chunk-3Q4YEFJ3.js";
import {
  E
} from "./chunk-4WON4QDF.js";
import {
  A as A2
} from "./chunk-XUZTWNKD.js";
import {
  i as i2,
  n as n3
} from "./chunk-FBMJVQWQ.js";
import {
  E as E2,
  R
} from "./chunk-DZAXDRPA.js";
import {
  r as r2,
  r2 as r3,
  t as t2
} from "./chunk-22UDIQGJ.js";
import {
  r as r4,
  t as t3
} from "./chunk-LA4GCRJY.js";
import {
  O as O2
} from "./chunk-E5RXQH35.js";
import {
  S,
  _ as _2
} from "./chunk-HUOFTIIK.js";
import {
  s
} from "./chunk-LCPLUSDH.js";
import {
  _
} from "./chunk-KYLW5XXS.js";
import {
  o
} from "./chunk-HITI6WDM.js";
import {
  e as e4
} from "./chunk-YGAXDKHF.js";
import {
  e as e3,
  n as n2
} from "./chunk-VSQZQLTQ.js";
import {
  J,
  d as d2,
  f,
  i,
  p,
  q
} from "./chunk-KOI252FF.js";
import {
  M,
  e as e2,
  h
} from "./chunk-2OZSYJDX.js";
import {
  K,
  O,
  j,
  u as u2
} from "./chunk-MZM4INJV.js";
import {
  n,
  r
} from "./chunk-J4GMQHGL.js";
import {
  A,
  d
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  t,
  u
} from "./chunk-6WGE3IUL.js";
import {
  has
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ViewshedFaceCamera.js
var g = class extends it {
  constructor() {
    super(...arguments), this.sectionAngles = n2();
  }
  get sectionAnglesDeg() {
    return e3(this.sectionAngles.map((t5) => M(t5)));
  }
  set sectionAnglesDeg(t5) {
    this.sectionAngles = e3(t5.map((t6) => h(t6)));
  }
  get projectionMatrix() {
    const t5 = e4();
    return J(t5, this.sectionMatrix, this._projectionMatrixInternal);
  }
  get sectionMatrix() {
    const t5 = this.sectionAngles[0], s3 = this.sectionAngles[1], o2 = this.sectionAngles[2], e5 = this.sectionAngles[3];
    s(t5 <= s3), s(o2 <= e5);
    const r5 = 2 * Math.tan(this.fovX / 2), l2 = 2 * Math.tan(this.fovY / 2), p3 = Math.tan(t5), m = Math.tan(s3), g3 = Math.tan(o2), f2 = m - p3, M3 = Math.tan(e5) - g3, j2 = r5 / f2, u4 = l2 / M3, A3 = -(p3 + f2 / 2) / r5 * 2, x3 = -(g3 + M3 / 2) / l2 * 2, b2 = e4();
    q(b2, [A3, x3, 0]);
    const d3 = e4();
    d2(d3, [j2, u4, 1]);
    const v = e4();
    return J(v, d3, b2);
  }
  get _sectionRatioX() {
    const t5 = Math.tan(this.sectionAngles[0]), s3 = Math.tan(this.sectionAngles[1]), o2 = 2 * Math.tan(this.fovX / 2);
    return Math.min(1, (s3 - t5) / o2);
  }
  setViewport(t5, s3) {
    const o2 = s3 * this._sectionRatioX;
    return this.viewport = [t5[0], t5[1], o2, s3], o2;
  }
};
e([y()], g.prototype, "sectionAngles", void 0), e([y()], g.prototype, "sectionAnglesDeg", null), e([y()], g.prototype, "projectionMatrix", null), e([y()], g.prototype, "sectionMatrix", null), e([y()], g.prototype, "_sectionRatioX", null), g = e([a("esri.views.3d.webgl-engine.lib.ViewshedFaceCamera")], g);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ViewshedShadowMap.js
var x2 = class {
  constructor() {
    this.textureSizeModHighQuality = 1.3, this.textureSizeModLowQuality = 0.9, this.textureSizeMultiple = 128, this.toleranceSides = 5, this.toleranceBottomTop = 10;
  }
  textureSizeModifier(t5) {
    return t5 ? this.textureSizeModHighQuality : this.textureSizeModLowQuality;
  }
  textureResizeModulo(t5) {
    return Math.ceil(t5 / this.textureSizeMultiple) * this.textureSizeMultiple;
  }
};
var p2 = ["front", "left", "right", "back", "top", "bottom"];
function _3(t5) {
  return !["top", "bottom"].includes(t5);
}
var g2 = class {
  constructor(t5) {
    this._fbos = t5, this._enabled = false, this._faces = {}, this._textureWidth = 0, this._textureHeight = 0, this.settings = new x2(), this._maxTextureWidth = Math.min(has("esri-mobile") ? 4096 : 16384, t5.rctx.parameters.maxTextureSize);
  }
  get depthTexture() {
    return this._handle?.getTexture();
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(t5) {
    this._enabled = t5, t5 || this.disposeOffscreenBuffers();
  }
  get isTextureZero() {
    return 0 === this._textureWidth || 0 === this._textureHeight;
  }
  get nearFar() {
    const t5 = this.faces;
    return 0 === t5.length ? null : t5[0].nearFar;
  }
  get numActiveFaces() {
    const t5 = this._faces;
    let e5 = 0;
    return Object.keys(t5).forEach((i3) => {
      t5[i3] && (e5 += 1);
    }), e5;
  }
  get faces() {
    const t5 = this._faces, e5 = [];
    for (const i3 of p2) {
      const s3 = t5[i3];
      s3 && e5.push(s3);
    }
    return e5;
  }
  get atlasRegions() {
    return this.faces.map((t5) => [t5.x / this._textureWidth, (t5.x + t5.width) / this._textureWidth, t5.y / this._textureHeight, (t5.y + t5.height) / this._textureHeight]);
  }
  get viewshedProjectionMatrices() {
    return this.faces.map((t5) => t5.projectionMatrix);
  }
  get viewshedViewMatrices() {
    return this.faces.map((t5) => t5.viewMatrix);
  }
  _setupFaceCamera(e5, c, u4, l2) {
    const {
      observerRenderSpace: f2,
      tiltedUpVector: m,
      targetRenderSpace: x3,
      farDistanceRenderSpace: p3,
      horizontalFieldOfView: g3,
      verticalFieldOfView: b2
    } = c, M3 = n();
    K(M3, x3, f2);
    const F = n(), w = n(), B = (t5, e6) => {
      const r5 = n(), o2 = e4();
      return p(o2, t5, e6), O(r5, M3, o2), u2(r5, f2, r5), r5;
    };
    let T, S2 = m;
    const z = Math.min(90, g3), O3 = Math.min(90, Math.max(0, (g3 - 90) / 2));
    let j2 = -45, v = 45, R3 = -45, k = 45;
    if (_3(e5)) {
      const e6 = (e7) => e2(e7, -45, 45);
      R3 = e6(-b2 / 2) - this.settings.toleranceBottomTop, k = e6(+b2 / 2) + this.settings.toleranceBottomTop;
    }
    switch (e5) {
      case "front":
        T = x3, j2 = -z / 2, v = z / 2;
        break;
      case "left":
        T = B(Math.PI / 2, m), j2 = 45 - O3;
        break;
      case "right":
        T = B(-Math.PI / 2, m), v = -45 + O3;
        break;
      case "top":
        T = u2(F, f2, m), S2 = j(w, M3);
        break;
      case "bottom":
        T = K(F, f2, m), S2 = M3;
        break;
      case "back":
        T = B(Math.PI, m);
    }
    const H = new g({
      center: T,
      eye: f2,
      up: S2,
      far: p3
    });
    H.sectionAnglesDeg = [j2 - this.settings.toleranceSides, v + this.settings.toleranceSides, R3, k], H.fovY = Math.PI / 2;
    const y3 = H.setViewport(u4, l2);
    return this._faces[e5] = H, y3;
  }
  _bindFBO() {
    const t5 = this._fbos.rctx;
    t5.unbindTexture(this.depthTexture), t5.bindFramebuffer(this._handle?.fbo);
  }
  _computeActiveFaces(t5) {
    const e5 = /* @__PURE__ */ new Set(), {
      horizontalFieldOfView: i3,
      verticalFieldOfView: s3
    } = t5, r5 = -s3 / 2, a2 = s3 / 2;
    return 0 === i3 || 0 === s3 || (r5 <= 45 && a2 >= -45 && e5.add("front"), i3 > 90 && (e5.add("left"), e5.add("right")), i3 > 270 && e5.add("back"), a2 > 45 - this.settings.toleranceBottomTop && e5.add("top"), r5 < -45 + this.settings.toleranceBottomTop && e5.add("bottom")), e5;
  }
  _computeBaseTextureSize(t5, e5, i3, s3) {
    const r5 = Math.min(window.devicePixelRatio, e5) / t5.pixelRatio, a2 = this.settings.textureSizeModifier(i3), o2 = n3(Math.floor(Math.max(t5.fullWidth, t5.fullHeight) * r5 * a2)), h2 = Math.floor(this._maxTextureWidth / s3), n5 = Math.min(h2, o2);
    return i2(n5);
  }
  _ensureFBO() {
    const t5 = this._textureWidth, e5 = this._textureHeight;
    this._handle?.fbo?.width === t5 && this._handle?.fbo?.height === e5 || (this._handle?.release(), this._handle = this._fbos.acquire(t5, e5, "viewshed shadow map", R.RGBA4)), this._handle.acquireDepth(E2.DEPTH16_BUFFER);
  }
  clearFBO() {
    const t5 = this._fbos.rctx;
    this._ensureFBO(), this._bindFBO(), t5.setClearColor(1, 1, 1, 1), t5.clear(_.COLOR_BUFFER_BIT | _.DEPTH_BUFFER_BIT);
  }
  dispose() {
    this.enabled = false, this.disposeOffscreenBuffers();
  }
  disposeOffscreenBuffers() {
    this._handle = t(this._handle);
  }
  start(t5, e5, i3, s3) {
    if (this._faces = {}, !this.enabled) return false;
    const r5 = this._computeActiveFaces(e5), a2 = r5.size;
    if (0 === a2) return false;
    const o2 = this._computeBaseTextureSize(t5, s3, i3, a2);
    if (0 === o2) return false;
    let h2 = 0, n5 = 0, c = 0;
    return p2.filter((t6) => r5.has(t6)).forEach((t6) => {
      const i4 = b(t6, a2);
      i4 > n5 && (c = Math.max(c, h2), h2 = 0), n5 = i4;
      const s4 = i4 * o2;
      h2 += this._setupFaceCamera(t6, e5, [h2, s4], o2);
    }), c = Math.max(c, h2), this._textureWidth = this.settings.textureResizeModulo(c), this._textureHeight = M2(a2) * o2, this.clearFBO(), true;
  }
  finish() {
    this._handle?.detachDepth();
  }
  get test() {
    return {
      faces: this._faces,
      faceTypes: p2
    };
  }
};
function b(t5, e5) {
  if (e5 < 4) return 0;
  const i3 = "front" === t5 || "left" === t5;
  return 4 === e5 ? i3 ? 0 : 1 : i3 || "right" === t5 ? 0 : 1;
}
function M2(t5) {
  return t5 < 4 ? 1 : 2;
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/ViewshedTechnique.js
var l = class _l extends r2 {
  initializeProgram(e5) {
    return new r3(e5.rctx, _l.shader.get().build(this.configuration), O2);
  }
  initializePipeline() {
    return S({
      colorWrite: _2,
      blending: A2
    });
  }
};
l.shader = new t2(P, () => import("./Viewshed.glsl-DBDRZ7OJ.js"));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/ViewshedTechniqueConfiguration.js
var s2 = class extends t3 {
  constructor() {
    super(...arguments), this.useNormalMap = true;
  }
};
e([r4()], s2.prototype, "useNormalMap", void 0);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Viewshed.js
var C = class extends u3 {
  get viewshedShadowMap() {
    return this._viewshedShadowMap;
  }
  get enabled() {
    return this._viewsheds.length > 0;
  }
  constructor(e5, i3) {
    super(e5), this._pluginContext = null, this.renderHighQuality = false, this._parameters = new x(), this._configuration = new s2(), this._viewsheds = new V(), this.produces = /* @__PURE__ */ new Map([[E.VIEWSHED, () => true]]), this._renderShadowMap = i3;
  }
  initialize() {
    this.addHandles(d(() => this.view.qualitySettings.maximumPixelRatio, (e5) => this._maximumPixelRatio = e5, A));
  }
  destroy() {
    this.uninitializeRenderContext();
  }
  consumes() {
    return this.enabled ? n4 : t4;
  }
  initializeRenderContext(e5) {
    this._pluginContext = e5, this._viewshedShadowMap = new g2(this.fboCache), this._viewshedShadowMap.enabled = true;
  }
  renderNode(e5, t5, i3) {
    const {
      bindParameters: s3,
      rctx: r5
    } = e5;
    if (!this.enabled || !s3.depth || null == i3) return;
    const o2 = this._setupNormals(i3);
    if (null != this._technique && this._configuration.useNormalMap === o2 || (this._configuration.useNormalMap = o2, this._technique = this._pluginContext?.techniques.acquire(l, this._configuration)), this._technique?.compiled) for (const a2 of this._viewsheds) {
      const t6 = e5.rctx.getBoundFramebufferObject(), i4 = this._renderViewshedShadowCubeMap(s3, a2), o3 = this._viewshedShadowMap;
      i4 && null != o3.depthTexture && !o3.isTextureZero && (this._setPassParameters(a2), e5.rctx.bindFramebuffer(t6), r5.bindTechnique(this._technique, s3, this._parameters), r5.screen.draw());
    }
    else this._pluginContext?.requestRender();
  }
  uninitializeRenderContext() {
    this._pluginContext = null, this._viewshedShadowMap.dispose(), this._technique = u(this._technique);
  }
  updateViewsheds(e5) {
    const i3 = e5.removes;
    null != i3 && (V.isCollection(i3) ? this._viewsheds.removeMany(i3) : this._viewsheds.remove(i3));
    const s3 = e5.adds;
    if (null != s3) if (V.isCollection(s3)) {
      const e6 = s3.filter((e7) => !this._viewsheds.includes(e7));
      this._viewsheds.addMany(e6);
    } else this._viewsheds.includes(s3) || this._viewsheds.add(s3);
  }
  _renderViewshedShadowCubeMap(e5, t5) {
    const i3 = this._viewshedShadowMap;
    if (!i3.enabled) return false;
    const s3 = i3.start(e5.camera, t5, this.renderHighQuality, this._maximumPixelRatio);
    if (s3) for (const r5 of i3.faces) this._renderShadowMap(e5, r5, o.ViewshedShadow);
    return i3.finish(), s3;
  }
  _setPassParameters(e5) {
    const t5 = this._parameters, s3 = this._viewshedShadowMap, r5 = e5.observerRenderSpace;
    t5.localOrigin = r5, t5.fovs = [h(e5.horizontalFieldOfView), h(e5.verticalFieldOfView)], t5.headingAndTilt = [h(e5.heading), h(e5.tiltParallelToSurface)], t5.upVector = e5.tiltedUpVector;
    const o2 = V2(e5.targetRenderSpace, r5);
    t5.targetVector = o2, t5.shadowMap = s3;
    const a2 = [], n5 = [];
    for (let i3 = 0; i3 < s3.numActiveFaces; i3++) i(y2, s3.viewshedViewMatrices[i3], r5), a2.push(...y2.flat()), q2(s3.viewshedProjectionMatrices[i3], y2, R2), n5.push(...R2.flat());
    t5.viewMatrices = a2, t5.projectionMatrices = n5;
  }
  _setupNormals(e5) {
    const t5 = e5.get("normals"), i3 = t5?.getTexture();
    return this._parameters.normalTexture = i3, null != i3;
  }
  get test() {
    return {
      viewsheds: this._viewsheds
    };
  }
};
function V2(e5, t5) {
  const i3 = n();
  return K(i3, e5, t5);
}
function q2(e5, t5, i3) {
  const s3 = r(0.5, 0.5, 0.5);
  return q(i3, s3), f(i3, i3, s3), J(i3, i3, e5), J(i3, i3, t5), i3;
}
e([y()], C.prototype, "_pluginContext", void 0), e([y()], C.prototype, "fboCache", void 0), e([y()], C.prototype, "view", void 0), e([y()], C.prototype, "viewshedShadowMap", null), C = e([a("esri.views.3d.webgl-engine.lib.Viewshed")], C);
var y2 = e4();
var R2 = e4();

export {
  C
};
//# sourceMappingURL=chunk-OSV2IT4H.js.map
