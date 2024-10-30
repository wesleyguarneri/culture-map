import {
  it
} from "./chunk-UW23RIEM.js";
import {
  i as i2,
  n as n4
} from "./chunk-E3P3LIVT.js";
import {
  E,
  R
} from "./chunk-CILAEMQM.js";
import {
  c as c3
} from "./chunk-P7OSFLIX.js";
import {
  c as c2,
  f as f2,
  s as s2,
  u as u2
} from "./chunk-SYYDVGKY.js";
import {
  M,
  _ as _2
} from "./chunk-YLE5AYZV.js";
import {
  _,
  b,
  e as e5,
  j as j2,
  l as l2,
  o as o3,
  r as r2,
  u,
  v,
  x
} from "./chunk-VS26W5Y5.js";
import {
  l
} from "./chunk-KKD7A2GN.js";
import {
  n as n3
} from "./chunk-DY7FJHTG.js";
import {
  e as e3,
  o as o2
} from "./chunk-BQZBOYBD.js";
import {
  e as e4
} from "./chunk-TYQXPPSP.js";
import {
  n as n2
} from "./chunk-IMVP5ADD.js";
import {
  s,
  z
} from "./chunk-H7WPOTQH.js";
import {
  X,
  c,
  h,
  i
} from "./chunk-XTVPEVHA.js";
import {
  e as e2,
  f,
  m
} from "./chunk-3ZXOUEQG.js";
import {
  G,
  O,
  j,
  o,
  r
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  t
} from "./chunk-2MMLMOWS.js";
import {
  has
} from "./chunk-DXLOWWK7.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/CascadeCamera.js
var i3 = class extends it {
  constructor() {
    super(...arguments), this._projectionMatrix = e3();
  }
  get projectionMatrix() {
    return this._projectionMatrix;
  }
};
e([y()], i3.prototype, "_projectionMatrix", void 0), e([y({
  readOnly: true
})], i3.prototype, "projectionMatrix", null), i3 = e([a("esri.views.3d.webgl-engine.lib.CascadeCamera")], i3);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ShadowMap.js
var P;
!function(t2) {
  t2[t2.Highlight = 0] = "Highlight", t2[t2.ExcludeHighlight = 1] = "ExcludeHighlight";
}(P || (P = {}));
var q = class {
  constructor() {
    this.camera = new i3(), this.lightMat = e3();
  }
};
var k = class {
  constructor() {
    this.maxNumCascadesHighQuality = 4, this.maxNumCascadesLowQuality = 4, this.textureSizeModHighQuality = 1.3, this.textureSizeModLowQuality = 0.9, this.splitSchemeLambda = 0;
  }
};
var G2 = class {
  constructor(t2, s3) {
    this._fbos = t2, this._viewingMode = s3, this._enabled = false, this._snapshots = new Array(), this._textureHeight = 0, this._numCascades = 1, this.settings = new k(), this._projectionView = e3(), this._projectionViewInverse = e3(), this._modelViewLight = e3(), this._cascadeDistances = [0, 0, 0, 0, 0], this._usedCascadeDistances = n2(), this._cascades = [new q(), new q(), new q(), new q()], this._lastOrigin = null, this._maxTextureWidth = Math.min(has("esri-mobile") ? 4096 : 16384, t2.rctx.parameters.maxTextureSize);
  }
  dispose() {
    this.enabled = false, this.disposeOffscreenBuffers();
  }
  get depthTexture() {
    return this._handle?.getTexture();
  }
  get _textureWidth() {
    return this._textureHeight * this._numCascades;
  }
  get numCascades() {
    return this._numCascades;
  }
  get cascadeDistances() {
    return s(this._usedCascadeDistances, this._cascadeDistances[0], this._numCascades > 1 ? this._cascadeDistances[1] : 1 / 0, this._numCascades > 2 ? this._cascadeDistances[2] : 1 / 0, this._numCascades > 3 ? this._cascadeDistances[3] : 1 / 0);
  }
  disposeOffscreenBuffers() {
    this._handle = t(this._handle), this._discardSnapshots();
  }
  set maxCascades(s3) {
    this.settings.maxNumCascadesHighQuality = e2(Math.floor(s3), 1, 4);
  }
  get maxCascades() {
    return this.settings.maxNumCascadesHighQuality;
  }
  set enabled(t2) {
    this._enabled = t2, t2 || this.disposeOffscreenBuffers();
  }
  get enabled() {
    return this._enabled;
  }
  get ready() {
    return this._enabled && null != this.depthTexture;
  }
  get cascades() {
    for (let t2 = 0; t2 < this._numCascades; ++t2) it2[t2] = this._cascades[t2];
    return it2.length = this._numCascades, it2;
  }
  start(t2, s3, e6, i4, a2) {
    s2(this.enabled);
    const {
      near: r3,
      far: h2
    } = jt(e6);
    this._computeCascadeDistances(r3, h2, i4), this._textureHeight = this._computeTextureHeight(t2, a2, i4), this._setupMatrices(t2, s3);
    const {
      viewMatrix: o4,
      projectionMatrix: n5
    } = t2;
    for (let c4 = 0; c4 < this._numCascades; ++c4) this._constructCascade(c4, n5, o4, s3);
    this._lastOrigin = null, this.clear();
  }
  finish() {
    s2(this.enabled), this._handle?.detachDepth();
  }
  getShadowMapMatrices(t2) {
    if (!this._lastOrigin || !G(t2, this._lastOrigin)) {
      this._lastOrigin = this._lastOrigin || n(), r(this._lastOrigin, t2);
      for (let s3 = 0; s3 < this._numCascades; ++s3) {
        i(at, this._cascades[s3].lightMat, t2);
        for (let t3 = 0; t3 < 16; ++t3) rt[16 * s3 + t3] = at[t3];
      }
    }
    return rt;
  }
  moveSnapshot(t2) {
    s2(this.enabled), this._handle?.detachDepth(), this._snapshots[t2]?.release(), this._snapshots[t2] = this._handle, this._handle = null, this.clear();
  }
  copySnapshot(t2) {
    const s3 = this._handle?.getTexture()?.descriptor;
    if (!this.enabled || !s3) return;
    this._snapshots[t2]?.release();
    const {
      width: e6,
      height: i4
    } = s3, a2 = t2 === P.Highlight ? "shadow highlight snapshot" : "shadow no highlight snapshot";
    this._snapshots[t2] = this._fbos.acquire(e6, i4, a2, R.RGBA4);
    const r3 = this._fbos.rctx;
    this._bindFbo();
    const h2 = r3.bindTexture(this._snapshots[t2]?.getTexture(), c3.TEXTURE_UNIT_FOR_UPDATES);
    r3.gl.copyTexSubImage2D(M.TEXTURE_2D, 0, 0, 0, 0, 0, e6, i4), r3.bindTexture(h2, c3.TEXTURE_UNIT_FOR_UPDATES);
  }
  getSnapshot(t2) {
    return this.enabled ? this._snapshots[t2]?.getTexture() : null;
  }
  clear() {
    const t2 = this._fbos.rctx;
    this._ensureFbo(), this._bindFbo(), t2.setClearColor(1, 1, 1, 1), t2.clear(_2.COLOR_BUFFER_BIT | _2.DEPTH_BUFFER_BIT);
  }
  _computeTextureHeight(t2, s3, e6) {
    const i4 = Math.min(window.devicePixelRatio, s3) / t2.pixelRatio, a2 = e6 ? this.settings.textureSizeModHighQuality : this.settings.textureSizeModLowQuality, r3 = n4(Math.floor(Math.max(t2.fullWidth, t2.fullHeight) * i4 * a2)), h2 = Math.min(this._maxTextureWidth, this._numCascades * r3);
    return i2(h2 / this._numCascades);
  }
  _ensureFbo() {
    this._handle?.fbo?.width === this._textureWidth && this._handle?.fbo.height === this._textureHeight || (this._handle?.release(), this._handle = this._fbos.acquire(this._textureWidth, this._textureHeight, "shadow map", R.RGBA4)), this._handle?.acquireDepth(E.DEPTH16_BUFFER);
  }
  _discardSnapshot(t2) {
    this._snapshots[t2] = t(this._snapshots[t2]);
  }
  _discardSnapshots() {
    for (let t2 = 0; t2 < this._snapshots.length; ++t2) this._discardSnapshot(t2);
    this._snapshots.length = 0;
  }
  _bindFbo() {
    const t2 = this._fbos.rctx;
    t2.unbindTexture(this.depthTexture), t2.bindFramebuffer(this._handle?.fbo);
  }
  _constructCascade(t2, s3, e6, i4) {
    const a2 = this._cascades[t2], o4 = -this._cascadeDistances[t2], n5 = -this._cascadeDistances[t2 + 1], c4 = (s3[10] * o4 + s3[14]) / Math.abs(s3[11] * o4 + s3[15]), l3 = (s3[10] * n5 + s3[14]) / Math.abs(s3[11] * n5 + s3[15]);
    s2(c4 < l3);
    for (let r3 = 0; r3 < 8; ++r3) {
      s(J, r3 % 4 == 0 || r3 % 4 == 3 ? -1 : 1, r3 % 4 == 0 || r3 % 4 == 1 ? -1 : 1, r3 < 4 ? c4 : l3, 1);
      const t3 = K[r3];
      z(t3, J, this._projectionViewInverse), t3[0] /= t3[3], t3[1] /= t3[3], t3[2] /= t3[3];
    }
    j(et, K[0]), a2.camera.viewMatrix = i(X2, this._modelViewLight, et);
    for (let r3 = 0; r3 < 8; ++r3) O(K[r3], K[r3], a2.camera.viewMatrix);
    let d = K[0][2], u3 = K[0][2];
    for (let r3 = 1; r3 < 8; ++r3) d = Math.min(d, K[r3][2]), u3 = Math.max(u3, K[r3][2]);
    d -= 200, u3 += 200, a2.camera.near = -u3, a2.camera.far = -d, Tt(e6, i4, d, u3, a2.camera), c(a2.lightMat, a2.camera.projectionMatrix, a2.camera.viewMatrix);
    const _3 = this._textureHeight;
    a2.camera.viewport = [t2 * _3, 0, _3, _3];
  }
  _setupMatrices(t2, s3) {
    c(this._projectionView, t2.projectionMatrix, t2.viewMatrix), h(this._projectionViewInverse, this._projectionView);
    const e6 = this._viewingMode === l.Global ? t2.eye : o(et, 0, 0, 1);
    X(this._modelViewLight, [0, 0, 0], [-s3[0], -s3[1], -s3[2]], e6);
  }
  _computeCascadeDistances(t2, e6, i4) {
    const a2 = i4 ? this.settings.maxNumCascadesHighQuality : this.settings.maxNumCascadesLowQuality;
    this._numCascades = Math.min(1 + Math.floor(u2(e6 / t2, 4)), a2);
    const r3 = (e6 - t2) / this._numCascades, h2 = (e6 / t2) ** (1 / this._numCascades);
    let o4 = t2, n5 = t2;
    for (let c4 = 0; c4 < this._numCascades + 1; ++c4) this._cascadeDistances[c4] = f(o4, n5, this.settings.splitSchemeLambda), o4 *= h2, n5 += r3;
  }
  get test() {
  }
};
var X2 = e3();
var J = n2();
var K = [];
for (let yt = 0; yt < 8; ++yt) K.push(n2());
var Y = n3();
var Z = n3();
var $ = n3();
var tt = n3();
var st = n3();
var et = n();
var it2 = [];
var at = e3();
var rt = o2.concat(o2, o2, o2, o2);
var ht = n3();
var ot = n3();
var nt = [n3(), n3(), n3(), n3()];
var ct = n3();
var lt = n3();
var dt = n3();
var ut = n3();
var _t = n3();
var mt = n3();
var ft = n3();
function gt(t2, s3, e6, i4, a2, r3, h2, o4) {
  o3(ht, 0, 0);
  for (let d = 0; d < 4; ++d) u(ht, ht, t2[d]);
  l2(ht, ht, 0.25), o3(ot, 0, 0);
  for (let d = 4; d < 8; ++d) u(ot, ot, t2[d]);
  l2(ot, ot, 0.25), _(nt[0], t2[4], t2[5], 0.5), _(nt[1], t2[5], t2[6], 0.5), _(nt[2], t2[6], t2[7], 0.5), _(nt[3], t2[7], t2[4], 0.5);
  let n5 = 0, c4 = b(nt[0], ht);
  for (let d = 1; d < 4; ++d) {
    const t3 = b(nt[d], ht);
    t3 < c4 && (c4 = t3, n5 = d);
  }
  e5(ct, nt[n5], t2[n5 + 4]);
  const l3 = ct[0];
  let M2, C;
  ct[0] = -ct[1], ct[1] = l3, e5(lt, ot, ht), j2(lt, ct) < 0 && x(ct, ct), _(ct, ct, lt, e6), v(ct, ct), M2 = C = j2(e5(dt, t2[0], ht), ct);
  for (let d = 1; d < 8; ++d) {
    const s4 = j2(e5(dt, t2[d], ht), ct);
    s4 < M2 ? M2 = s4 : s4 > C && (C = s4);
  }
  r2(i4, ht), l2(dt, ct, M2 - s3), u(i4, i4, dt);
  let T = -1, j3 = 1, y2 = 0, D = 0;
  for (let d = 0; d < 8; ++d) {
    e5(ut, t2[d], i4), v(ut, ut);
    const s4 = ct[0] * ut[1] - ct[1] * ut[0];
    s4 > 0 ? s4 > T && (T = s4, y2 = d) : s4 < j3 && (j3 = s4, D = d);
  }
  c2(T > 0, "leftArea"), c2(j3 < 0, "rightArea"), l2(_t, ct, M2), u(_t, _t, ht), l2(mt, ct, C), u(mt, mt, ht), ft[0] = -ct[1], ft[1] = ct[0];
  const H = f2(i4, t2[D], mt, u(dt, mt, ft), 1, a2), v2 = f2(i4, t2[y2], mt, dt, 1, r3), S = f2(i4, t2[y2], _t, u(dt, _t, ft), 1, h2), R2 = f2(i4, t2[D], _t, dt, 1, o4);
  c2(H, "rayRay"), c2(v2, "rayRay"), c2(S, "rayRay"), c2(R2, "rayRay");
}
function pt(t2, s3) {
  return 3 * s3 + t2;
}
var xt = n3();
function bt(t2, s3) {
  return o3(xt, t2[s3], t2[s3 + 3]), xt;
}
var wt = n3();
var Mt = e4();
function Ct(t2, s3, e6, i4, a2) {
  e5(wt, e6, i4), l2(wt, wt, 0.5), Mt[0] = wt[0], Mt[1] = wt[1], Mt[2] = 0, Mt[3] = wt[1], Mt[4] = -wt[0], Mt[5] = 0, Mt[6] = wt[0] * wt[0] + wt[1] * wt[1], Mt[7] = wt[0] * wt[1] - wt[1] * wt[0], Mt[8] = 1, Mt[pt(0, 2)] = -j2(bt(Mt, 0), t2), Mt[pt(1, 2)] = -j2(bt(Mt, 1), t2);
  let r3 = j2(bt(Mt, 0), e6) + Mt[pt(0, 2)], h2 = j2(bt(Mt, 1), e6) + Mt[pt(1, 2)], o4 = j2(bt(Mt, 0), i4) + Mt[pt(0, 2)], n5 = j2(bt(Mt, 1), i4) + Mt[pt(1, 2)];
  r3 = -(r3 + o4) / (h2 + n5), Mt[pt(0, 0)] += Mt[pt(1, 0)] * r3, Mt[pt(0, 1)] += Mt[pt(1, 1)] * r3, Mt[pt(0, 2)] += Mt[pt(1, 2)] * r3, r3 = 1 / (j2(bt(Mt, 0), e6) + Mt[pt(0, 2)]), h2 = 1 / (j2(bt(Mt, 1), e6) + Mt[pt(1, 2)]), Mt[pt(0, 0)] *= r3, Mt[pt(0, 1)] *= r3, Mt[pt(0, 2)] *= r3, Mt[pt(1, 0)] *= h2, Mt[pt(1, 1)] *= h2, Mt[pt(1, 2)] *= h2, Mt[pt(2, 0)] = Mt[pt(1, 0)], Mt[pt(2, 1)] = Mt[pt(1, 1)], Mt[pt(2, 2)] = Mt[pt(1, 2)], Mt[pt(1, 2)] += 1, r3 = j2(bt(Mt, 1), s3) + Mt[pt(1, 2)], h2 = j2(bt(Mt, 2), s3) + Mt[pt(2, 2)], o4 = j2(bt(Mt, 1), e6) + Mt[pt(1, 2)], n5 = j2(bt(Mt, 2), e6) + Mt[pt(2, 2)], r3 = -0.5 * (r3 / h2 + o4 / n5), Mt[pt(1, 0)] += Mt[pt(2, 0)] * r3, Mt[pt(1, 1)] += Mt[pt(2, 1)] * r3, Mt[pt(1, 2)] += Mt[pt(2, 2)] * r3, r3 = j2(bt(Mt, 1), s3) + Mt[pt(1, 2)], h2 = j2(bt(Mt, 2), s3) + Mt[pt(2, 2)], o4 = -h2 / r3, Mt[pt(1, 0)] *= o4, Mt[pt(1, 1)] *= o4, Mt[pt(1, 2)] *= o4, a2[0] = Mt[0], a2[1] = Mt[1], a2[2] = 0, a2[3] = Mt[2], a2[4] = Mt[3], a2[5] = Mt[4], a2[6] = 0, a2[7] = Mt[5], a2[8] = 0, a2[9] = 0, a2[10] = 1, a2[11] = 0, a2[12] = Mt[6], a2[13] = Mt[7], a2[14] = 0, a2[15] = Mt[8];
}
function Tt(t2, s3, i4, a2, r3) {
  const h2 = 1 / K[0][3], o4 = 1 / K[4][3];
  s2(h2 < o4);
  let n5 = h2 + Math.sqrt(h2 * o4);
  const c4 = Math.sin(m(t2[2] * s3[0] + t2[6] * s3[1] + t2[10] * s3[2]));
  n5 /= c4, gt(K, n5, c4, Y, Z, $, tt, st), Ct(Y, Z, tt, st, r3.projectionMatrix), r3.projectionMatrix[10] = 2 / (i4 - a2), r3.projectionMatrix[14] = -(i4 + a2) / (i4 - a2);
}
function jt(t2) {
  let {
    near: s3,
    far: e6
  } = t2;
  return s3 < 2 && (s3 = 2), e6 < 2 && (e6 = 2), s3 >= e6 && (s3 = 2, e6 = 4), {
    near: s3,
    far: e6
  };
}

export {
  P,
  G2 as G
};
//# sourceMappingURL=chunk-DOYOAB3G.js.map
