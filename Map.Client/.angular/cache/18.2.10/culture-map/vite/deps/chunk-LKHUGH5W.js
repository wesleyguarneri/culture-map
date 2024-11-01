import {
  e
} from "./chunk-ZVFENZUF.js";
import {
  N,
  S,
  T
} from "./chunk-YLE5AYZV.js";
import {
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/webgl/renderState.js
function s(t, e2, i = T.ADD, s2 = [0, 0, 0, 0]) {
  return {
    srcRgb: t,
    srcAlpha: t,
    dstRgb: e2,
    dstAlpha: e2,
    opRgb: i,
    opAlpha: i,
    color: {
      r: s2[0],
      g: s2[1],
      b: s2[2],
      a: s2[3]
    }
  };
}
function l(t, e2, i, s2, l2 = T.ADD, r2 = T.ADD, a2 = [0, 0, 0, 0]) {
  return {
    srcRgb: t,
    srcAlpha: e2,
    dstRgb: i,
    dstAlpha: s2,
    opRgb: l2,
    opAlpha: r2,
    color: {
      r: a2[0],
      g: a2[1],
      b: a2[2],
      a: a2[3]
    }
  };
}
var r = {
  face: N.BACK,
  mode: S.CCW
};
var a = {
  face: N.FRONT,
  mode: S.CCW
};
var h = (e2) => e2 === e.Back ? r : e2 === e.Front ? a : null;
var o = {
  zNear: 0,
  zFar: 1
};
var _ = {
  r: true,
  g: true,
  b: true,
  a: true
};
function c(t) {
  return w.intern(t);
}
function d(t) {
  return D.intern(t);
}
function u(t) {
  return O.intern(t);
}
function f(t) {
  return m.intern(t);
}
function p(t) {
  return R.intern(t);
}
function g(t) {
  return P.intern(t);
}
function v(t) {
  return F.intern(t);
}
function I(t) {
  return K.intern(t);
}
function W(t) {
  return x.intern(t);
}
function S2(t) {
  return q.intern(t);
}
var b = class {
  constructor(t, e2) {
    this._makeKey = t, this._makeRef = e2, this._interns = /* @__PURE__ */ new Map();
  }
  intern(t) {
    if (!t) return null;
    const e2 = this._makeKey(t), i = this._interns;
    return i.has(e2) || i.set(e2, this._makeRef(t)), i.get(e2) ?? null;
  }
};
function T2(t) {
  return "[" + t.join(",") + "]";
}
var w = new b(B, (t) => __spreadValues({
  __tag: "Blending"
}, t));
function B(t) {
  return t ? T2([t.srcRgb, t.srcAlpha, t.dstRgb, t.dstAlpha, t.opRgb, t.opAlpha, t.color.r, t.color.g, t.color.b, t.color.a]) : null;
}
var D = new b(y, (t) => __spreadValues({
  __tag: "Culling"
}, t));
function y(t) {
  return t ? T2([t.face, t.mode]) : null;
}
var O = new b(C, (t) => __spreadValues({
  __tag: "PolygonOffset"
}, t));
function C(t) {
  return t ? T2([t.factor, t.units]) : null;
}
var m = new b(A, (t) => __spreadValues({
  __tag: "DepthTest"
}, t));
function A(t) {
  return t ? T2([t.func]) : null;
}
var R = new b(k, (t) => __spreadValues({
  __tag: "StencilTest"
}, t));
function k(t) {
  return t ? T2([t.function.func, t.function.ref, t.function.mask, t.operation.fail, t.operation.zFail, t.operation.zPass]) : null;
}
var P = new b(z, (t) => __spreadValues({
  __tag: "DepthWrite"
}, t));
function z(t) {
  return t ? T2([t.zNear, t.zFar]) : null;
}
var F = new b(j, (t) => __spreadValues({
  __tag: "ColorWrite"
}, t));
function j(t) {
  return t ? T2([t.r, t.g, t.b, t.a]) : null;
}
var K = new b(N2, (t) => __spreadValues({
  __tag: "StencilWrite"
}, t));
function N2(t) {
  return t ? T2([t.mask]) : null;
}
var x = new b(M, (t) => __spreadValues({
  __tag: "DrawBuffers"
}, t));
function M(t) {
  return t ? T2(t.buffers) : null;
}
var q = new b(E, (t) => ({
  blending: c(t.blending),
  culling: d(t.culling),
  polygonOffset: u(t.polygonOffset),
  depthTest: f(t.depthTest),
  stencilTest: p(t.stencilTest),
  depthWrite: g(t.depthWrite),
  colorWrite: v(t.colorWrite),
  stencilWrite: I(t.stencilWrite),
  drawBuffers: W(t.drawBuffers)
}));
function E(t) {
  return t ? T2([B(t.blending), y(t.culling), C(t.polygonOffset), A(t.depthTest), k(t.stencilTest), z(t.depthWrite), j(t.colorWrite), N2(t.stencilWrite), M(t.drawBuffers)]) : null;
}
var G = class {
  constructor(t) {
    this._pipelineInvalid = true, this._blendingInvalid = true, this._cullingInvalid = true, this._polygonOffsetInvalid = true, this._depthTestInvalid = true, this._stencilTestInvalid = true, this._depthWriteInvalid = true, this._colorWriteInvalid = true, this._stencilWriteInvalid = true, this._drawBuffersInvalid = true, this._stateSetters = t;
  }
  setPipeline(t) {
    (this._pipelineInvalid || t !== this._pipeline) && (this._setBlending(t.blending), this._setCulling(t.culling), this._setPolygonOffset(t.polygonOffset), this._setDepthTest(t.depthTest), this._setStencilTest(t.stencilTest), this._setDepthWrite(t.depthWrite), this._setColorWrite(t.colorWrite), this._setStencilWrite(t.stencilWrite), this._setDrawBuffers(t.drawBuffers), this._pipeline = t), this._pipelineInvalid = false;
  }
  invalidateBlending() {
    this._blendingInvalid = true, this._pipelineInvalid = true;
  }
  invalidateCulling() {
    this._cullingInvalid = true, this._pipelineInvalid = true;
  }
  invalidatePolygonOffset() {
    this._polygonOffsetInvalid = true, this._pipelineInvalid = true;
  }
  invalidateDepthTest() {
    this._depthTestInvalid = true, this._pipelineInvalid = true;
  }
  invalidateStencilTest() {
    this._stencilTestInvalid = true, this._pipelineInvalid = true;
  }
  invalidateDepthWrite() {
    this._depthWriteInvalid = true, this._pipelineInvalid = true;
  }
  invalidateColorWrite() {
    this._colorWriteInvalid = true, this._pipelineInvalid = true;
  }
  invalidateStencilWrite() {
    this._stencilTestInvalid = true, this._pipelineInvalid = true;
  }
  invalidateDrawBuffers() {
    this._drawBuffersInvalid = true, this._pipelineInvalid = true;
  }
  _setBlending(t) {
    this._blending = this._setSubState(t, this._blending, this._blendingInvalid, this._stateSetters.setBlending), this._blendingInvalid = false;
  }
  _setCulling(t) {
    this._culling = this._setSubState(t, this._culling, this._cullingInvalid, this._stateSetters.setCulling), this._cullingInvalid = false;
  }
  _setPolygonOffset(t) {
    this._polygonOffset = this._setSubState(t, this._polygonOffset, this._polygonOffsetInvalid, this._stateSetters.setPolygonOffset), this._polygonOffsetInvalid = false;
  }
  _setDepthTest(t) {
    this._depthTest = this._setSubState(t, this._depthTest, this._depthTestInvalid, this._stateSetters.setDepthTest), this._depthTestInvalid = false;
  }
  _setStencilTest(t) {
    this._stencilTest = this._setSubState(t, this._stencilTest, this._stencilTestInvalid, this._stateSetters.setStencilTest), this._stencilTestInvalid = false;
  }
  _setDepthWrite(t) {
    this._depthWrite = this._setSubState(t, this._depthWrite, this._depthWriteInvalid, this._stateSetters.setDepthWrite), this._depthWriteInvalid = false;
  }
  _setColorWrite(t) {
    this._colorWrite = this._setSubState(t, this._colorWrite, this._colorWriteInvalid, this._stateSetters.setColorWrite), this._colorWriteInvalid = false;
  }
  _setStencilWrite(t) {
    this._stencilWrite = this._setSubState(t, this._stencilWrite, this._stencilWriteInvalid, this._stateSetters.setStencilWrite), this._stencilTestInvalid = false;
  }
  _setDrawBuffers(t) {
    this._drawBuffers = this._setSubState(t, this._drawBuffers, this._drawBuffersInvalid, this._stateSetters.setDrawBuffers), this._drawBuffersInvalid = false;
  }
  _setSubState(t, e2, i, n) {
    return (i || t !== e2) && (n(t), this._pipelineInvalid = true), t;
  }
};

export {
  s,
  l,
  r,
  a,
  h,
  o,
  _,
  S2 as S,
  G
};
//# sourceMappingURL=chunk-LKHUGH5W.js.map
