import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  H,
  L as L2,
  N
} from "./chunk-FIQ7DCCC.js";
import {
  E as E2,
  r as r4
} from "./chunk-B76NC7GX.js";
import {
  m as m2
} from "./chunk-6ZLH7XBS.js";
import {
  l as l2
} from "./chunk-GNCXYHNE.js";
import {
  a as a3
} from "./chunk-2TNGEJGS.js";
import {
  r as r3
} from "./chunk-BZHHBBFX.js";
import {
  e as e3
} from "./chunk-YGAXDKHF.js";
import {
  n as n4,
  r as r2
} from "./chunk-VSQZQLTQ.js";
import {
  E,
  L,
  a as a2,
  m,
  x as x3,
  z as z2
} from "./chunk-K43CZ3M5.js";
import {
  A,
  C,
  X as X2,
  c,
  h,
  n as n3,
  s as s2
} from "./chunk-KOI252FF.js";
import {
  i,
  x as x2
} from "./chunk-VYTPFEL2.js";
import {
  f
} from "./chunk-2OZSYJDX.js";
import {
  G,
  J,
  K,
  P,
  X,
  Z,
  _,
  e as e2,
  g,
  o,
  r,
  s,
  x,
  z
} from "./chunk-MZM4INJV.js";
import {
  n as n2
} from "./chunk-J4GMQHGL.js";
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
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  l
} from "./chunk-MLYB2YW4.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ChangeSet.js
var s3 = class {
  constructor() {
    this.adds = new l(), this.removes = new l(), this.updates = new l({
      allocator: (e4) => e4 || new r5(),
      deallocator: (e4) => (e4.renderGeometry = null, e4)
    });
  }
  clear() {
    this.adds.clear(), this.removes.clear(), this.updates.clear();
  }
  prune() {
    this.adds.prune(), this.removes.prune(), this.updates.prune();
  }
  get empty() {
    return 0 === this.adds.length && 0 === this.removes.length && 0 === this.updates.length;
  }
};
var r5 = class {
};
var t = class {
  constructor() {
    this.adds = new Array(), this.removes = new Array(), this.updates = new Array();
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/rendererUtils.js
var r6;
var t2;
function n5(r8) {
  const t4 = /* @__PURE__ */ new Map(), n7 = (r9) => {
    let n8 = t4.get(r9);
    return n8 || (n8 = new t(), t4.set(r9, n8)), n8;
  };
  return r8.removes.forAll((e4) => {
    o2(e4) && n7(e4.material).removes.push(e4);
  }), r8.adds.forAll((e4) => {
    o2(e4) && n7(e4.material).adds.push(e4);
  }), r8.updates.forAll((e4) => {
    o2(e4.renderGeometry) && n7(e4.renderGeometry.material).updates.push(e4);
  }), t4;
}
function o2(e4) {
  return e4.geometry.indexCount >= 1;
}
!function(e4) {
  e4[e4.Default = 0] = "Default", e4[e4.Screenshot = 1] = "Screenshot", e4[e4.ObjectAndLayerID = 2] = "ObjectAndLayerID";
}(r6 || (r6 = {})), function(e4) {
  e4[e4.TOP = 0] = "TOP", e4[e4.RIGHT = 1] = "RIGHT", e4[e4.BOTTOM = 2] = "BOTTOM", e4[e4.LEFT = 3] = "LEFT";
}(t2 || (t2 = {}));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/fov.js
function t3(t4, a5, n7) {
  return 2 * Math.atan(Math.sqrt(a5 * a5 + n7 * n7) * Math.tan(0.5 * t4) / a5);
}
function a4(t4, a5, n7) {
  return 2 * Math.atan(Math.sqrt(a5 * a5 + n7 * n7) * Math.tan(0.5 * t4) / n7);
}
function n6(t4, a5, n7) {
  return 2 * Math.atan(a5 * Math.tan(0.5 * t4) / Math.sqrt(a5 * a5 + n7 * n7));
}
function r7(t4, a5, n7) {
  return 2 * Math.atan(n7 * Math.tan(0.5 * t4) / Math.sqrt(a5 * a5 + n7 * n7));
}

// ../../../node_modules/@arcgis/core/views/3d/webgl/RenderCamera.js
var $;
var tt = $ = class extends S {
  constructor(t4) {
    super(t4), this._ray = m2(), this._viewport = r2(0, 0, 1, 1), this._padding = r2(0, 0, 0, 0), this._fov = 55 / 180 * Math.PI, this._nearFar = r3(1, 1e3), this._viewDirty = true, this._viewMatrix = e3(), this._viewProjectionDirty = true, this._viewProjectionMatrix = e3(), this._viewInverseTransposeMatrixDirty = true, this._viewInverseTransposeMatrix = e3(), this._frustumDirty = true, this._frustum = H(), this._fullViewport = n4(), this._pixelRatio = 1, this.row = 0, this.column = 0, this._rows = 1, this._columns = 1, this._center = n2(), this._up = n2(), this.relativeElevation = 0;
  }
  get pixelRatio() {
    return this._pixelRatio;
  }
  set pixelRatio(t4) {
    this._pixelRatio = t4 > 0 ? t4 : 1;
  }
  get rows() {
    return this._rows;
  }
  set rows(t4) {
    this._rows = Math.max(1, t4);
  }
  get columns() {
    return this._columns;
  }
  set columns(t4) {
    this._columns = Math.max(1, t4);
  }
  get eye() {
    return this._ray.origin;
  }
  set eye(t4) {
    this._compareAndSetView(t4, this._ray.origin);
  }
  get center() {
    return this._center;
  }
  set center(t4) {
    this._compareAndSetView(t4, this._center, "_center");
  }
  get ray() {
    return e2(this._ray.direction, this.center, this.eye), this._ray;
  }
  get up() {
    return this._up;
  }
  set up(t4) {
    this._compareAndSetView(t4, this._up, "_up");
  }
  get viewMatrix() {
    return this._ensureViewClean(), this._viewMatrix;
  }
  set viewMatrix(t4) {
    n3(this._viewMatrix, t4), this.notifyChange("_viewMatrix"), this._viewDirty = false, this._viewInverseTransposeMatrixDirty = true, this._viewProjectionDirty = true, this._frustumDirty = true;
  }
  get viewForward() {
    return this._ensureViewClean(), o(n2(), -this._viewMatrix[2], -this._viewMatrix[6], -this._viewMatrix[10]);
  }
  get viewUp() {
    return this._ensureViewClean(), o(n2(), this._viewMatrix[1], this._viewMatrix[5], this._viewMatrix[9]);
  }
  get viewRight() {
    return this._ensureViewClean(), o(n2(), this._viewMatrix[0], this._viewMatrix[4], this._viewMatrix[8]);
  }
  get nearFar() {
    return this._nearFar;
  }
  get near() {
    return this._nearFar[0];
  }
  set near(t4) {
    this._nearFar[0] !== t4 && (this._nearFar[0] = t4, this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_nearFar"));
  }
  get far() {
    return this._nearFar[1];
  }
  set far(t4) {
    this._nearFar[1] !== t4 && (this._nearFar[1] = t4, this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_nearFar"));
  }
  get viewport() {
    return this._viewport;
  }
  set viewport(t4) {
    this.x = t4[0], this.y = t4[1], this.width = t4[2], this.height = t4[3];
  }
  get screenViewport() {
    if (1 === this.pixelRatio) return this._viewport;
    const t4 = m(n4(), this._viewport, 1 / this.pixelRatio), i2 = this._get("screenViewport");
    return i2 && L(t4, i2) ? i2 : t4;
  }
  get screenPadding() {
    if (1 === this.pixelRatio) return this._padding;
    const t4 = m(n4(), this._padding, 1 / this.pixelRatio), i2 = this._get("screenPadding");
    return i2 && L(t4, i2) ? i2 : t4;
  }
  get x() {
    return this._viewport[0];
  }
  set x(t4) {
    t4 += this._padding[t2.LEFT], this._viewport[0] !== t4 && (this._viewport[0] = t4, this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_viewport"));
  }
  get y() {
    return this._viewport[1];
  }
  set y(t4) {
    t4 += this._padding[t2.BOTTOM], this._viewport[1] !== t4 && (this._viewport[1] = t4, this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_viewport"));
  }
  get width() {
    return this._viewport[2];
  }
  set width(t4) {
    this._viewport[2] !== t4 && (this._viewport[2] = t4, this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_viewport"));
  }
  get height() {
    return this._viewport[3];
  }
  set height(t4) {
    this._viewport[3] !== t4 && (this._viewport[3] = t4, this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_viewport"));
  }
  get fullWidth() {
    return this._viewport[2] + this._padding[t2.RIGHT] + this._padding[t2.LEFT];
  }
  set fullWidth(t4) {
    this.width = t4 - (this._padding[t2.RIGHT] + this._padding[t2.LEFT]);
  }
  get fullHeight() {
    return this._viewport[3] + this._padding[t2.TOP] + this._padding[t2.BOTTOM];
  }
  set fullHeight(t4) {
    this.height = t4 - (this._padding[t2.TOP] + this._padding[t2.BOTTOM]);
  }
  get fullViewport() {
    return this._fullViewport[0] = this._viewport[0] - this._padding[t2.LEFT], this._fullViewport[1] = this._viewport[1] - this._padding[t2.BOTTOM], this._fullViewport[2] = this.fullWidth, this._fullViewport[3] = this.fullHeight, this._fullViewport;
  }
  get _aspect() {
    return this.width / this.height;
  }
  get padding() {
    return this._padding;
  }
  set padding(t4) {
    E(this._padding, t4) || (this._viewport[0] += t4[t2.LEFT] - this._padding[t2.LEFT], this._viewport[1] += t4[t2.BOTTOM] - this._padding[t2.BOTTOM], this._viewport[2] -= t4[t2.RIGHT] + t4[t2.LEFT] - (this._padding[t2.RIGHT] + this._padding[t2.LEFT]), this._viewport[3] -= t4[t2.TOP] + t4[t2.BOTTOM] - (this._padding[t2.TOP] + this._padding[t2.BOTTOM]), a2(this._padding, t4), this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_padding"), this.notifyChange("_viewport"));
  }
  get viewProjectionMatrix() {
    return this._viewProjectionDirty && (c(this._viewProjectionMatrix, this.projectionMatrix, this.viewMatrix), this._viewProjectionDirty = false), this._viewProjectionMatrix;
  }
  get projectionMatrix() {
    return this._projectionMatrixInternal;
  }
  get inverseProjectionMatrix() {
    return h(e3(), this.projectionMatrix) || this._get("inverseProjectionMatrix") || e3();
  }
  get fov() {
    return this._fov;
  }
  set fov(t4) {
    this._fov = t4, this._viewProjectionDirty = true, this._frustumDirty = true;
  }
  get fovX() {
    return n6(this._fov, this.width, this.height);
  }
  set fovX(t4) {
    this._fov = t3(t4, this.width, this.height), this._viewProjectionDirty = true, this._frustumDirty = true;
  }
  get fovY() {
    return r7(this._fov, this.width, this.height);
  }
  set fovY(t4) {
    this._fov = a4(t4, this.width, this.height), this._viewProjectionDirty = true, this._frustumDirty = true;
  }
  get distance() {
    return x(this.center, this.eye);
  }
  get frustum() {
    return this._recomputeFrustum(), this._frustum;
  }
  get viewInverseTransposeMatrix() {
    return (this._viewInverseTransposeMatrixDirty || this._viewDirty) && (h(this._viewInverseTransposeMatrix, this.viewMatrix), s2(this._viewInverseTransposeMatrix, this._viewInverseTransposeMatrix), this._viewInverseTransposeMatrixDirty = false), this._viewInverseTransposeMatrix;
  }
  depthNDCToWorld(t4) {
    const i2 = 2 * t4 - 1;
    return 2 * this.near * this.far / (this.far + this.near - i2 * (this.far - this.near));
  }
  get perRenderPixelRatio() {
    return Math.tan(this.fovX / 2) / (this.width / 2);
  }
  get perScreenPixelRatio() {
    return this.perRenderPixelRatio * this.pixelRatio;
  }
  get aboveGround() {
    return null != this.relativeElevation && this.relativeElevation >= 0;
  }
  get _projectionMatrixInternal() {
    const t4 = this.width, i2 = this.height, e4 = this.near * Math.tan(this.fovY / 2) * 2, r8 = e4 * this._aspect, s4 = e4 / this.rows, o3 = r8 / this.columns, n7 = -r8 / 2 + this.column * o3, h2 = n7 + o3, a5 = -e4 / 2 + this.row * s4, p = a5 + s4, u = A(e3(), n7 * (1 + 2 * this._padding[t2.LEFT] / t4), h2 * (1 + 2 * this._padding[t2.RIGHT] / t4), a5 * (1 + 2 * this._padding[t2.BOTTOM] / i2), p * (1 + 2 * this._padding[t2.TOP] / i2), this.near, this.far), l3 = this._get("projectionMatrix");
    return l3 && C(l3, u) ? l3 : u;
  }
  copyFrom(t4) {
    r(this._ray.origin, t4.eye), this.center = t4.center, this.up = t4.up, a2(this._viewport, t4.viewport), this.notifyChange("_viewport"), a2(this._padding, t4.padding), this.notifyChange("_padding"), r4(this._nearFar, t4.nearFar), this.notifyChange("_nearFar"), this._fov = t4.fov, this.row = t4.row, this.column = t4.column, this.rows = t4.rows, this.columns = t4.columns, this.relativeElevation = t4.relativeElevation;
    const i2 = t4;
    return this._viewDirty = i2._viewDirty, this._viewDirty || (n3(this._viewMatrix, t4.viewMatrix), this.notifyChange("_viewMatrix")), this._viewProjectionDirty = true, this._frustumDirty = i2._frustumDirty, this._frustumDirty || (N(this._frustum, t4.frustum), this._frustumDirty = false), i2._viewInverseTransposeMatrixDirty ? this._viewInverseTransposeMatrixDirty = true : (n3(this._viewInverseTransposeMatrix, t4.viewInverseTransposeMatrix), this._viewInverseTransposeMatrixDirty = false), a2(this._fullViewport, t4.fullViewport), this.pixelRatio = t4.pixelRatio, this;
  }
  copyViewFrom(t4) {
    this.eye = t4.eye, this.center = t4.center, this.up = t4.up;
  }
  clone() {
    return new $().copyFrom(this);
  }
  equals(t4) {
    return G(this.eye, t4.eye) && G(this.center, t4.center) && G(this.up, t4.up) && E(this._viewport, t4.viewport) && E(this._padding, t4.padding) && E2(this.nearFar, t4.nearFar) && this._fov === t4.fov && this.pixelRatio === t4.pixelRatio && this.relativeElevation === t4.relativeElevation && this.row === t4.row && this.column === t4.column && this.rows === t4.rows && this.columns === t4.columns;
  }
  almostEquals(t4) {
    const i2 = Math.max(1, 1 / this.pixelRatio, 1 / t4.pixelRatio);
    if (Math.abs(t4.fov - this._fov) >= 1e-3 || x3(t4.screenPadding, this.screenPadding) >= i2 || x3(this.screenViewport, t4.screenViewport) >= i2 || this.row !== t4.row || this.column !== t4.column || this.rows !== t4.rows || this.columns !== t4.columns) return false;
    K(st, t4.eye, t4.center), K(ot, this.eye, this.center);
    const e4 = P(st, ot), r8 = Z(st), s4 = Z(ot), o3 = 5e-4;
    return e4 * e4 >= (1 - 1e-10) * r8 * s4 && X(t4.eye, this.eye) < Math.max(r8, s4) * o3 * o3;
  }
  computeRenderPixelSizeAt(t4) {
    return this.computeRenderPixelSizeAtDist(this._viewDirectionDistance(t4));
  }
  computeRenderPixelSizeAtDist(t4) {
    return t4 * this.perRenderPixelRatio;
  }
  computeScreenPixelSizeAt(t4) {
    return this.computeScreenPixelSizeAtDist(this._viewDirectionDistance(t4));
  }
  _viewDirectionDistance(t4) {
    return Math.abs(a3(this.viewForward, e2(st, t4, this.eye)));
  }
  computeScreenPixelSizeAtDist(t4) {
    return t4 * this.perScreenPixelRatio;
  }
  computeDistanceFromRadius(t4, i2) {
    return t4 / Math.tan(Math.min(this.fovX, this.fovY) / (2 * (i2 || 1)));
  }
  getScreenCenter(t4 = i()) {
    return t4[0] = (this.padding[t2.LEFT] + this.width / 2) / this.pixelRatio, t4[1] = (this.padding[t2.TOP] + this.height / 2) / this.pixelRatio, t4;
  }
  getRenderCenter(t4, i2 = 0.5, e4 = 0.5) {
    return t4[0] = this.padding[t2.LEFT] + this.width * i2, t4[1] = this.padding[t2.BOTTOM] + this.height * e4, t4[2] = 0.5, t4;
  }
  setGLViewport(t4) {
    const i2 = this.viewport, e4 = this.padding;
    t4.setViewport(i2[0] - e4[3], i2[1] - e4[2], i2[2] + e4[1] + e4[3], i2[3] + e4[0] + e4[2]);
  }
  applyProjection(t4, i2) {
    t4 !== et && r(et, t4), et[3] = 1, z2(et, et, this.projectionMatrix);
    const e4 = Math.abs(et[3]);
    g(et, et, 1 / e4);
    const s4 = this.fullViewport;
    i2[0] = f(0, s4[0] + s4[2], 0.5 + 0.5 * et[0]), i2[1] = f(0, s4[1] + s4[3], 0.5 + 0.5 * et[1]), i2[2] = 0.5 * (et[2] + 1), i2[3] = e4;
  }
  unapplyProjection(t4, i2) {
    const e4 = this.fullViewport;
    et[0] = (t4[0] / (e4[0] + e4[2]) * 2 - 1) * t4[3], et[1] = (t4[1] / (e4[1] + e4[3]) * 2 - 1) * t4[3], et[2] = (2 * t4[2] - 1) * t4[3], et[3] = t4[3], null != this.inverseProjectionMatrix && (z2(et, et, this.inverseProjectionMatrix), i2[0] = et[0], i2[1] = et[1], i2[2] = et[2]);
  }
  projectToScreen(t4, i2) {
    return this.projectToRenderScreen(t4, nt), this.renderToScreen(nt, i2), i2;
  }
  projectToRenderScreen(t4, i2) {
    if (et[0] = t4[0], et[1] = t4[1], et[2] = t4[2], et[3] = 1, z2(et, et, this.viewProjectionMatrix), 0 === et[3]) return null;
    const e4 = et;
    g(e4, e4, 1 / Math.abs(et[3]));
    const s4 = this.fullViewport, o3 = f(0, s4[0] + s4[2], 0.5 + 0.5 * e4[0]), n7 = f(0, s4[1] + s4[3], 0.5 + 0.5 * e4[1]);
    return "x" in i2 ? (i2.x = o3, i2.y = n7) : (i2[0] = o3, i2[1] = n7, i2.length > 2 && (i2[2] = 0.5 * (e4[2] + 1))), i2;
  }
  unprojectFromScreen(t4, i2) {
    return this.unprojectFromRenderScreen(this.screenToRender(t4, nt), i2);
  }
  unprojectFromRenderScreen(t4, i2) {
    if (c(rt, this.projectionMatrix, this.viewMatrix), !h(rt, rt)) return null;
    const e4 = this.fullViewport;
    return et[0] = 2 * (t4[0] - e4[0]) / e4[2] - 1, et[1] = 2 * (t4[1] - e4[1]) / e4[3] - 1, et[2] = 2 * t4[2] - 1, et[3] = 1, z2(et, et, rt), 0 === et[3] ? null : (i2[0] = et[0] / et[3], i2[1] = et[1] / et[3], i2[2] = et[2] / et[3], i2);
  }
  constrainWindowSize(t4, i2, e4, r8) {
    const s4 = t4 * this.pixelRatio, o3 = i2 * this.pixelRatio, n7 = Math.max(s4 - e4 / 2, 0), h2 = Math.max(this.fullHeight - o3 - r8 / 2, 0), a5 = -Math.min(s4 - e4 / 2, 0), p = -Math.min(this.fullHeight - o3 - r8 / 2, 0), u = e4 - a5 - -Math.min(this.fullWidth - s4 - e4 / 2, 0), l3 = r8 - p - -Math.min(o3 - r8 / 2, 0);
    return [Math.round(n7), Math.round(h2), Math.round(u), Math.round(l3)];
  }
  computeUp(t4) {
    t4 === l2.Global ? this._computeUpGlobal() : this._computeUpLocal();
  }
  screenToRender(t4, i2) {
    const e4 = t4[0] * this.pixelRatio, r8 = this.fullHeight - t4[1] * this.pixelRatio;
    return i2[0] = e4, i2[1] = r8, i2;
  }
  renderToScreen(t4, i2) {
    const e4 = t4[0] / this.pixelRatio, r8 = (this.fullHeight - t4[1]) / this.pixelRatio;
    i2[0] = e4, i2[1] = r8;
  }
  _computeUpGlobal() {
    e2(st, this.center, this.eye);
    const t4 = s(this.center);
    t4 < 1 ? (o(this._up, 0, 0, 1), this._markViewDirty(), this.notifyChange("_up")) : Math.abs(P(st, this.center)) > 0.9999 * s(st) * t4 || (_(this._up, st, this.center), _(this._up, this._up, st), z(this._up, this._up), this.notifyChange("_up"), this._markViewDirty());
  }
  _computeUpLocal() {
    J(st, this.eye, this.center), Math.abs(st[2]) <= 0.9999 && (g(st, st, st[2]), o(this._up, -st[0], -st[1], 1 - st[2]), z(this._up, this._up), this.notifyChange("_up"), this._markViewDirty());
  }
  _compareAndSetView(t4, i2, r8 = "") {
    "number" == typeof t4[0] && isFinite(t4[0]) && "number" == typeof t4[1] && isFinite(t4[1]) && "number" == typeof t4[2] && isFinite(t4[2]) ? G(t4, i2) || (r(i2, t4), this._markViewDirty(), r8.length && this.notifyChange(r8)) : n.getLogger("esri.views.3d.webgl-engine.lib.RenderCamera").warn("RenderCamera vector contains invalid number, ignoring value");
  }
  _markViewDirty() {
    this._viewDirty = true, this._frustumDirty = true, this._viewProjectionDirty = true;
  }
  _recomputeFrustum() {
    this._frustumDirty && (L2(this.viewMatrix, this.projectionMatrix, this._frustum), this._frustumDirty = false);
  }
  _ensureViewClean() {
    this._viewDirty && (X2(this._viewMatrix, this.eye, this.center, this.up), this.notifyChange("_viewMatrix"), this._viewDirty = false, this._viewInverseTransposeMatrixDirty = true);
  }
};
e([y()], tt.prototype, "_viewport", void 0), e([y()], tt.prototype, "_padding", void 0), e([y()], tt.prototype, "_fov", void 0), e([y()], tt.prototype, "_nearFar", void 0), e([y()], tt.prototype, "_viewDirty", void 0), e([y()], tt.prototype, "_viewMatrix", void 0), e([y()], tt.prototype, "_pixelRatio", void 0), e([y()], tt.prototype, "pixelRatio", null), e([y()], tt.prototype, "row", void 0), e([y()], tt.prototype, "column", void 0), e([y()], tt.prototype, "_rows", void 0), e([y()], tt.prototype, "rows", null), e([y()], tt.prototype, "_columns", void 0), e([y()], tt.prototype, "columns", null), e([y()], tt.prototype, "eye", null), e([y()], tt.prototype, "center", null), e([y()], tt.prototype, "_center", void 0), e([y()], tt.prototype, "up", null), e([y()], tt.prototype, "_up", void 0), e([y()], tt.prototype, "viewMatrix", null), e([y({
  readOnly: true
})], tt.prototype, "viewForward", null), e([y({
  readOnly: true
})], tt.prototype, "viewUp", null), e([y({
  readOnly: true
})], tt.prototype, "viewRight", null), e([y({
  readOnly: true
})], tt.prototype, "nearFar", null), e([y()], tt.prototype, "near", null), e([y()], tt.prototype, "far", null), e([y()], tt.prototype, "viewport", null), e([y({
  readOnly: true
})], tt.prototype, "screenViewport", null), e([y({
  readOnly: true
})], tt.prototype, "screenPadding", null), e([y()], tt.prototype, "x", null), e([y()], tt.prototype, "y", null), e([y()], tt.prototype, "width", null), e([y()], tt.prototype, "height", null), e([y()], tt.prototype, "fullWidth", null), e([y()], tt.prototype, "fullHeight", null), e([y({
  readOnly: true
})], tt.prototype, "_aspect", null), e([y()], tt.prototype, "padding", null), e([y({
  readOnly: true
})], tt.prototype, "projectionMatrix", null), e([y({
  readOnly: true
})], tt.prototype, "inverseProjectionMatrix", null), e([y()], tt.prototype, "fov", null), e([y()], tt.prototype, "fovX", null), e([y()], tt.prototype, "fovY", null), e([y()], tt.prototype, "viewInverseTransposeMatrix", null), e([y({
  readOnly: true
})], tt.prototype, "_projectionMatrixInternal", null), e([y()], tt.prototype, "relativeElevation", void 0), tt = $ = e([a("esri.views.3d.webgl.RenderCamera")], tt);
var it = tt;
var et = n4();
var rt = e3();
var st = n2();
var ot = n2();
var nt = x2();

export {
  s3 as s,
  r6 as r,
  t2 as t,
  n5 as n,
  it
};
//# sourceMappingURL=chunk-2NPPOPEZ.js.map
