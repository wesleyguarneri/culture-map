import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t as t7
} from "./chunk-7RXQQ22H.js";
import {
  A,
  N
} from "./chunk-O3EWP5OO.js";
import {
  w
} from "./chunk-7ZLUUE5X.js";
import {
  r as r7
} from "./chunk-NLRSH3TD.js";
import {
  c as c2,
  n as n3
} from "./chunk-3Q4YEFJ3.js";
import {
  E as E2
} from "./chunk-4WON4QDF.js";
import {
  r as r4,
  r2 as r5,
  t as t5
} from "./chunk-22UDIQGJ.js";
import {
  r as r6,
  t as t6
} from "./chunk-LA4GCRJY.js";
import {
  i2 as i
} from "./chunk-UE7ZYRIH.js";
import {
  O
} from "./chunk-E5RXQH35.js";
import {
  S,
  _,
  s
} from "./chunk-HUOFTIIK.js";
import {
  a as a2,
  j,
  m,
  p as p2,
  y as y2
} from "./chunk-FIQ7DCCC.js";
import {
  b,
  p,
  v
} from "./chunk-SNHVHW2N.js";
import {
  c
} from "./chunk-MDEPINSI.js";
import {
  t as t3
} from "./chunk-WHVSAUHM.js";
import {
  H
} from "./chunk-GHPF24X4.js";
import {
  E,
  F,
  R
} from "./chunk-KYLW5XXS.js";
import {
  t as t4
} from "./chunk-YSJVVDDH.js";
import {
  n as n2
} from "./chunk-LGS63R4F.js";
import {
  l
} from "./chunk-6ZLH7XBS.js";
import {
  l as l2
} from "./chunk-GNCXYHNE.js";
import {
  e as e3
} from "./chunk-D7C26LZP.js";
import {
  h
} from "./chunk-2OZSYJDX.js";
import {
  e as e2,
  o,
  r as r3,
  u
} from "./chunk-MZM4INJV.js";
import {
  n,
  r as r2,
  t as t2
} from "./chunk-J4GMQHGL.js";
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
  r,
  t
} from "./chunk-6WGE3IUL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/effects/laserlines/LaserlinePathTechnique.js
var m2 = class _m extends r4 {
  initializeProgram(e5) {
    return new r5(e5.rctx, _m.shader.get().build(this.configuration), h2);
  }
  initializePipeline() {
    return S({
      blending: s(R.ONE, R.ONE_MINUS_SRC_ALPHA),
      colorWrite: _
    });
  }
};
m2.shader = new t5(w, () => import("./LaserlinePath.glsl-WNBB3KIC.js"));
var h2 = /* @__PURE__ */ new Map([[e3.START, 0], [e3.END, 1], [e3.UP, 2], [e3.EXTRUDE, 3]]);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/effects/laserlines/LaserlinePathData.js
var h3 = class {
  constructor(e5) {
    this._renderCoordsHelper = e5, this._buffers = null, this._origin = n(), this._dirty = false, this._count = 0, this._vao = null;
  }
  set vertices(e5) {
    const t8 = t4(3 * e5.length);
    let r8 = 0;
    for (const s2 of e5) t8[r8++] = s2[0], t8[r8++] = s2[1], t8[r8++] = s2[2];
    this.buffers = [t8];
  }
  set buffers(t8) {
    if (this._buffers = t8, this._buffers.length > 0) {
      const t9 = this._buffers[0], r8 = 3 * Math.floor(t9.length / 3 / 2);
      o(this._origin, t9[r8], t9[r8 + 1], t9[r8 + 2]);
    } else o(this._origin, 0, 0, 0);
    this._dirty = true;
  }
  get origin() {
    return this._origin;
  }
  draw(e5) {
    const t8 = this._ensureVAO(e5);
    null != t8 && (e5.bindVAO(t8), e5.drawArrays(E.TRIANGLES, 0, this._count));
  }
  dispose() {
    null != this._vao && this._vao.dispose();
  }
  _ensureVAO(e5) {
    return null == this._buffers ? null : (null == this._vao && (this._vao = this._createVAO(e5, this._buffers)), this._ensureVertexData(this._vao, this._buffers), this._vao);
  }
  _createVAO(e5, t8) {
    const r8 = this._createDataBuffer(t8);
    return this._dirty = false, new r7(e5, h2, {
      data: t3(V)
    }, {
      data: c.createVertex(e5, F.STATIC_DRAW, r8)
    });
  }
  _ensureVertexData(e5, t8) {
    if (!this._dirty) return;
    const r8 = this._createDataBuffer(t8);
    e5.vertexBuffers.data?.setData(r8), this._dirty = false;
  }
  _createDataBuffer(r8) {
    const s2 = r8.reduce((e5, t8) => e5 + _2(t8), 0);
    this._count = s2;
    const i2 = V.createBuffer(s2), o2 = this._origin;
    let u2 = 0, f2 = 0;
    for (const n5 of r8) {
      for (let r9 = 0; r9 < n5.length; r9 += 3) {
        const s3 = o(p3, n5[r9], n5[r9 + 1], n5[r9 + 2]);
        0 === r9 ? f2 = this._renderCoordsHelper.getAltitude(s3) : this._renderCoordsHelper.setAltitude(s3, f2);
        const a3 = this._renderCoordsHelper.worldUpAtPosition(s3, d), l3 = u2 + 2 * r9, c4 = e2(p3, s3, o2);
        if (r9 < n5.length - 3) {
          i2.up.setVec(l3, a3), i2.up.setVec(l3 + 3, a3), i2.up.setVec(l3 + 5, a3);
          for (let e5 = 0; e5 < 6; e5++) i2.start.setVec(l3 + e5, c4);
          i2.extrude.setValues(l3, 0, -1), i2.extrude.setValues(l3 + 1, 1, -1), i2.extrude.setValues(l3 + 2, 1, 1), i2.extrude.setValues(l3 + 3, 0, -1), i2.extrude.setValues(l3 + 4, 1, 1), i2.extrude.setValues(l3 + 5, 0, 1);
        }
        if (r9 > 0) {
          i2.up.setVec(l3 - 2, a3), i2.up.setVec(l3 - 4, a3), i2.up.setVec(l3 - 5, a3);
          for (let e5 = -6; e5 < 0; e5++) i2.end.setVec(l3 + e5, c4);
        }
      }
      u2 += _2(n5);
    }
    return i2.buffer;
  }
};
function _2(e5) {
  return 3 * (2 * (e5.length / 3 - 1));
}
var d = n();
var p3 = n();
var V = H().vec3f(e3.START).vec3f(e3.END).vec3f(e3.UP).vec2f(e3.EXTRUDE);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/effects/laserlines/LaserlinePathTechniqueConfiguration.js
var e4 = class extends t6 {
  constructor() {
    super(...arguments), this.contrastControlEnabled = false;
  }
};
e([r6()], e4.prototype, "contrastControlEnabled", void 0);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/effects/laserlines/LaserlineTechnique.js
var f = class extends n2 {
  constructor() {
    super(...arguments), this.innerColor = r2(1, 1, 1), this.innerWidth = 1, this.glowColor = r2(1, 0.5, 0), this.glowWidth = 8, this.glowFalloff = 8, this.globalAlpha = 0.75, this.globalAlphaContrastBoost = 2, this.angleCutoff = h(6), this.pointDistanceOrigin = n(), this.pointDistanceTarget = n(), this.lineVerticalPlaneSegment = v(), this.intersectsLineSegment = v(), this.intersectsLineRadius = 3, this.heightManifoldTarget = n(), this.lineStartWorld = n(), this.lineEndWorld = n();
  }
};
var p4 = class _p extends r4 {
  initializeProgram(e5) {
    return new r5(e5.rctx, _p.shader.get().build(this.configuration), O);
  }
  initializePipeline() {
    return S({
      blending: s(R.ONE, R.ONE_MINUS_SRC_ALPHA),
      colorWrite: _
    });
  }
};
p4.shader = new t5(N, () => import("./Laserlines.glsl-LFGYHBUV.js"));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/effects/laserlines/LaserlineTechniqueConfiguration.js
var n4 = class extends e4 {
  constructor() {
    super(...arguments), this.heightManifoldEnabled = false, this.pointDistanceEnabled = false, this.lineVerticalPlaneEnabled = false, this.intersectsLineEnabled = false, this.spherical = false;
  }
};
e([r6()], n4.prototype, "heightManifoldEnabled", void 0), e([r6()], n4.prototype, "pointDistanceEnabled", void 0), e([r6()], n4.prototype, "lineVerticalPlaneEnabled", void 0), e([r6()], n4.prototype, "intersectsLineEnabled", void 0), e([r6()], n4.prototype, "spherical", void 0);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/effects/laserlines/LaserLineRenderer.js
var R2 = class extends c2 {
  constructor(e5) {
    super(e5), this._technique = null, this._heightManifoldEnabled = false, this._pointDistanceEnabled = false, this._lineVerticalPlaneEnabled = false, this._intersectsLineEnabled = false, this._intersectsLineInfinite = false, this._pathVerticalPlaneEnabled = false, this._pathVerticalPlaneData = null, this._pathTechnique = null, this._passParameters = new f(), this.produces = /* @__PURE__ */ new Map([[E2.LASERLINES, () => !this.contrastControlEnabled], [E2.LASERLINES_CONTRAST_CONTROL, () => this.contrastControlEnabled]]);
  }
  initialize() {
    this._passParameters.renderCoordsHelper = this.renderCoordsHelper;
  }
  consumes() {
    return n3;
  }
  get isDecoration() {
    return this._isDecoration;
  }
  get heightManifoldEnabled() {
    return this._heightManifoldEnabled;
  }
  set heightManifoldEnabled(e5) {
    this._heightManifoldEnabled !== e5 && (this._heightManifoldEnabled = e5, this._requestRender());
  }
  get heightManifoldTarget() {
    return this._passParameters.heightManifoldTarget;
  }
  set heightManifoldTarget(e5) {
    r3(this._passParameters.heightManifoldTarget, e5), this._requestRender();
  }
  get pointDistanceEnabled() {
    return this._pointDistanceEnabled;
  }
  set pointDistanceEnabled(e5) {
    e5 !== this._pointDistanceEnabled && (this._pointDistanceEnabled = e5, this._requestRender());
  }
  get pointDistanceTarget() {
    return this._passParameters.pointDistanceTarget;
  }
  set pointDistanceTarget(e5) {
    r3(this._passParameters.pointDistanceTarget, e5), this._requestRender();
  }
  get pointDistanceOrigin() {
    return this._passParameters.pointDistanceOrigin;
  }
  set pointDistanceOrigin(e5) {
    r3(this._passParameters.pointDistanceOrigin, e5), this._requestRender();
  }
  get lineVerticalPlaneEnabled() {
    return this._lineVerticalPlaneEnabled;
  }
  set lineVerticalPlaneEnabled(e5) {
    e5 !== this._lineVerticalPlaneEnabled && (this._lineVerticalPlaneEnabled = e5, this._requestRender());
  }
  get lineVerticalPlaneSegment() {
    return this._passParameters.lineVerticalPlaneSegment;
  }
  set lineVerticalPlaneSegment(e5) {
    p(e5, this._passParameters.lineVerticalPlaneSegment), this._requestRender();
  }
  get intersectsLineEnabled() {
    return this._intersectsLineEnabled;
  }
  set intersectsLineEnabled(e5) {
    e5 !== this._intersectsLineEnabled && (this._intersectsLineEnabled = e5, this._requestRender());
  }
  get intersectsLineSegment() {
    return this._passParameters.intersectsLineSegment;
  }
  set intersectsLineSegment(e5) {
    p(e5, this._passParameters.intersectsLineSegment), this._requestRender();
  }
  get intersectsLineRadius() {
    return this._passParameters.intersectsLineRadius;
  }
  set intersectsLineRadius(e5) {
    e5 !== this._passParameters.intersectsLineRadius && (this._passParameters.intersectsLineRadius = e5, this._requestRender());
  }
  get intersectsLineInfinite() {
    return this._intersectsLineInfinite;
  }
  set intersectsLineInfinite(e5) {
    e5 !== this._intersectsLineInfinite && (this._intersectsLineInfinite = e5, this._requestRender());
  }
  get pathVerticalPlaneEnabled() {
    return this._pathVerticalPlaneEnabled;
  }
  set pathVerticalPlaneEnabled(e5) {
    e5 !== this._pathVerticalPlaneEnabled && (this._pathVerticalPlaneEnabled = e5, null != this._pathVerticalPlaneData && this._requestRender());
  }
  set pathVerticalPlaneVertices(e5) {
    null == this._pathVerticalPlaneData && (this._pathVerticalPlaneData = new h3(this._passParameters.renderCoordsHelper)), this._pathVerticalPlaneData.vertices = e5, this.pathVerticalPlaneEnabled && this._requestRender();
  }
  set pathVerticalPlaneBuffers(e5) {
    null == this._pathVerticalPlaneData && (this._pathVerticalPlaneData = new h3(this._passParameters.renderCoordsHelper)), this._pathVerticalPlaneData.buffers = e5, this.pathVerticalPlaneEnabled && this._requestRender();
  }
  setParameters(e5) {
    i(this._passParameters, e5) && this._requestRender();
  }
  initializeRenderContext(e5) {
    this._context = e5, this._techniques = e5.techniques, this._techniqueConfig = new n4();
    const t8 = new e4();
    t8.contrastControlEnabled = this.contrastControlEnabled, this._pathTechnique = this._techniques.acquire(m2, t8);
  }
  uninitializeRenderContext() {
    this._technique = t(this._technique), this._pathVerticalPlaneData = r(this._pathVerticalPlaneData), this._pathTechnique = t(this._pathTechnique);
  }
  prepareTechnique() {
    return this.heightManifoldEnabled || this.pointDistanceEnabled || this.lineVerticalPlaneSegment || this.intersectsLineEnabled ? (this._techniqueConfig.heightManifoldEnabled = this.heightManifoldEnabled, this._techniqueConfig.lineVerticalPlaneEnabled = this.lineVerticalPlaneEnabled, this._techniqueConfig.pointDistanceEnabled = this.pointDistanceEnabled, this._techniqueConfig.intersectsLineEnabled = this.intersectsLineEnabled, this._techniqueConfig.contrastControlEnabled = this.contrastControlEnabled, this._techniqueConfig.spherical = this.viewingMode === l2.Global, this._technique = this._techniques.releaseAndAcquire(p4, this._techniqueConfig, this._technique), this._technique) : this._pathTechnique;
  }
  renderNode(e5, t8, i2) {
    const s2 = i2?.get("normals")?.getTexture();
    s2 && (this._passParameters.normals = s2, (this.heightManifoldEnabled || this.pointDistanceEnabled || this.lineVerticalPlaneSegment || this.intersectsLineEnabled) && this._renderUnified(e5, t8), this.pathVerticalPlaneEnabled && this._renderPath(e5));
  }
  _renderUnified(e5, t8) {
    const i2 = e5.rctx;
    this._updatePassParameters(e5), i2.bindTechnique(t8, e5.bindParameters, this._passParameters), i2.screen.draw();
  }
  _renderPath(e5) {
    if (null == this._pathVerticalPlaneData || null == this._pathTechnique) return;
    const t8 = e5.rctx, i2 = this._pathTechnique;
    t8.bindTechnique(i2, e5.bindParameters, __spreadProps(__spreadValues({}, this._passParameters), {
      origin: this._pathVerticalPlaneData.origin
    })), this._pathVerticalPlaneData.draw(e5.rctx);
  }
  _updatePassParameters(e5) {
    if (!this._intersectsLineEnabled) return;
    const t8 = e5.bindParameters.camera;
    if (this._intersectsLineInfinite) {
      if (y2(l(this._passParameters.intersectsLineSegment.origin, this._passParameters.intersectsLineSegment.vector), C), C.c0 = -Number.MAX_VALUE, !m(t8.frustum, C)) return;
      j(C, this._passParameters.lineStartWorld), p2(C, this._passParameters.lineEndWorld);
    } else r3(this._passParameters.lineStartWorld, this._passParameters.intersectsLineSegment.origin), u(this._passParameters.lineEndWorld, this._passParameters.intersectsLineSegment.origin, this._passParameters.intersectsLineSegment.vector);
  }
  _requestRender() {
    this._context && this._context.requestRender();
  }
  get test() {
  }
};
e([y({
  constructOnly: true
})], R2.prototype, "viewingMode", void 0), e([y({
  constructOnly: true
})], R2.prototype, "contrastControlEnabled", void 0), e([y({
  constructOnly: true
})], R2.prototype, "_isDecoration", void 0), e([y({
  constructOnly: true
})], R2.prototype, "renderCoordsHelper", void 0), R2 = e([a("esri.views.3d.webgl-engine.effects.laserlines.LaserLineRenderer")], R2);
var C = a2();

// ../../../node_modules/@arcgis/core/views/3d/interactive/visualElements/LaserlineVisualElement.js
var c3 = class extends t7 {
  constructor(e5) {
    super(e5), this._angleCutoff = A, this._style = {}, this._heightManifoldTarget = n(), this._heightManifoldEnabled = false, this._intersectsLine = v(), this._intersectsLineEnabled = false, this._intersectsLineInfinite = false, this._lineVerticalPlaneSegment = null, this._pathVerticalPlaneBuffers = null, this._pointDistanceLine = null, this.applyProperties(e5);
  }
  get testData() {
  }
  createResources() {
    this._ensureRenderer();
  }
  destroyResources() {
    this._disposeRenderer();
  }
  updateVisibility() {
    this._syncRenderer(), this._syncHeightManifold(), this._syncIntersectsLine(), this._syncPathVerticalPlane(), this._syncLineVerticalPlane(), this._syncPointDistance();
  }
  get angleCutoff() {
    return this._angleCutoff;
  }
  set angleCutoff(e5) {
    this._angleCutoff !== e5 && (this._angleCutoff = e5, this._syncAngleCutoff());
  }
  get style() {
    return this._style;
  }
  set style(e5) {
    this._style = e5, this._syncStyle();
  }
  get heightManifoldTarget() {
    return this._heightManifoldEnabled ? this._heightManifoldTarget : null;
  }
  set heightManifoldTarget(t8) {
    null != t8 ? (r3(this._heightManifoldTarget, t8), this._heightManifoldEnabled = true) : this._heightManifoldEnabled = false, this._syncRenderer(), this._syncHeightManifold();
  }
  set intersectsWorldUpAtLocation(e5) {
    if (null == e5) return void (this.intersectsLine = null);
    const t8 = this.view.renderCoordsHelper.worldUpAtPosition(e5, _3);
    this.intersectsLine = b(e5, t8), this.intersectsLineInfinite = true;
  }
  get intersectsLine() {
    return this._intersectsLineEnabled ? this._intersectsLine : null;
  }
  set intersectsLine(e5) {
    null != e5 ? (p(e5, this._intersectsLine), this._intersectsLineEnabled = true) : this._intersectsLineEnabled = false, this._syncIntersectsLine(), this._syncRenderer();
  }
  get intersectsLineInfinite() {
    return this._intersectsLineInfinite;
  }
  set intersectsLineInfinite(e5) {
    this._intersectsLineInfinite = e5, this._syncIntersectsLineInfinite();
  }
  get lineVerticalPlaneSegment() {
    return this._lineVerticalPlaneSegment;
  }
  set lineVerticalPlaneSegment(e5) {
    this._lineVerticalPlaneSegment = null != e5 ? p(e5) : null, this._syncLineVerticalPlane(), this._syncRenderer();
  }
  get pathVerticalPlane() {
    return this._pathVerticalPlaneBuffers;
  }
  set pathVerticalPlane(e5) {
    this._pathVerticalPlaneBuffers = e5, this._syncPathVerticalPlane(), this._syncLineVerticalPlane(), this._syncPointDistance(), this._syncRenderer();
  }
  get pointDistanceLine() {
    return this._pointDistanceLine;
  }
  set pointDistanceLine(e5) {
    this._pointDistanceLine = null != e5 ? {
      origin: t2(e5.origin),
      target: e5.target ? t2(e5.target) : null
    } : null, this._syncPointDistance(), this._syncRenderer();
  }
  _syncRenderer() {
    this.attached && this.visible && (this._intersectsLineEnabled || this._heightManifoldEnabled || null != this._pointDistanceLine || null != this._pathVerticalPlaneBuffers) ? this._ensureRenderer() : this._disposeRenderer();
  }
  _ensureRenderer() {
    null == this._renderer && (this._renderer = new R2({
      renderCoordsHelper: this.view.renderCoordsHelper,
      contrastControlEnabled: true,
      _isDecoration: this.isDecoration,
      viewingMode: this.view.state.viewingMode
    }), this._syncStyle(), this._syncHeightManifold(), this._syncIntersectsLine(), this._syncIntersectsLineInfinite(), this._syncPathVerticalPlane(), this._syncLineVerticalPlane(), this._syncPointDistance(), this._syncAngleCutoff(), this.view._stage && this.view._stage.addRenderPlugin(this._renderer));
  }
  _syncStyle() {
    null != this._renderer && (this._renderer.setParameters(this._style), null != this._style.intersectsLineRadius && (this._renderer.intersectsLineRadius = this._style.intersectsLineRadius));
  }
  _syncAngleCutoff() {
    null != this._renderer && this._renderer.setParameters({
      angleCutoff: this._angleCutoff
    });
  }
  _syncHeightManifold() {
    null != this._renderer && (this._renderer.heightManifoldEnabled = this._heightManifoldEnabled && this.visible, this._heightManifoldEnabled && (this._renderer.heightManifoldTarget = this._heightManifoldTarget));
  }
  _syncIntersectsLine() {
    null != this._renderer && (this._renderer.intersectsLineEnabled = this._intersectsLineEnabled && this.visible, this._intersectsLineEnabled && (this._renderer.intersectsLineSegment = this._intersectsLine));
  }
  _syncIntersectsLineInfinite() {
    null != this._renderer && (this._renderer.intersectsLineInfinite = this._intersectsLineInfinite);
  }
  _syncPathVerticalPlane() {
    null != this._renderer && (this._renderer.pathVerticalPlaneEnabled = null != this._pathVerticalPlaneBuffers && this.visible, null != this._pathVerticalPlaneBuffers && (this._renderer.pathVerticalPlaneBuffers = this._pathVerticalPlaneBuffers));
  }
  _syncLineVerticalPlane() {
    null != this._renderer && (this._renderer.lineVerticalPlaneEnabled = null != this._lineVerticalPlaneSegment && this.visible, null != this._lineVerticalPlaneSegment && (this._renderer.lineVerticalPlaneSegment = this._lineVerticalPlaneSegment));
  }
  _syncPointDistance() {
    if (null == this._renderer) return;
    const e5 = this._pointDistanceLine, t8 = null != e5;
    this._renderer.pointDistanceEnabled = t8 && null != e5.target && this.visible, t8 && (this._renderer.pointDistanceOrigin = e5.origin, null != e5.target && (this._renderer.pointDistanceTarget = e5.target));
  }
  _disposeRenderer() {
    null != this._renderer && this.view._stage && (this.view._stage.removeRenderPlugin(this._renderer), this._renderer = null);
  }
};
var _3 = n();

export {
  c3 as c
};
//# sourceMappingURL=chunk-6AG7CVLS.js.map
