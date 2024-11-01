import {
  c,
  e2 as e
} from "./chunk-P7OSFLIX.js";
import {
  D,
  G,
  L,
  P,
  U,
  o
} from "./chunk-YLE5AYZV.js";
import {
  a
} from "./chunk-DY7FJHTG.js";

// ../../../node_modules/@arcgis/core/views/webgl/rasterUtils.js
function f(e2, o2, f2 = "nearest", c3 = false) {
  const m2 = !(c3 && "u8" === o2.pixelType), l2 = m2 ? U.FLOAT : U.UNSIGNED_BYTE, _2 = null == o2.pixels || 0 === o2.pixels.length ? null : m2 ? o2.getAsRGBAFloat() : o2.getAsRGBA(), g2 = e2.capabilities.textureFloatLinear, p2 = new e();
  return p2.width = o2.width, p2.height = o2.height, p2.internalFormat = m2 ? P.RGBA32F : G.RGBA, p2.samplingMode = !g2 || "bilinear" !== f2 && "cubic" !== f2 ? L.NEAREST : L.LINEAR, p2.dataType = l2, p2.wrapMode = D.CLAMP_TO_EDGE, new c(e2, p2, _2);
}
function c2(e2, r) {
  const {
    spacing: o2,
    offsets: f2,
    coefficients: c3,
    size: [m2, l2]
  } = r, _2 = o2[0] > 1, g2 = new e();
  g2.width = _2 ? 4 * m2 : m2, g2.height = l2, g2.internalFormat = P.RGBA32F, g2.dataType = U.FLOAT, g2.samplingMode = L.NEAREST, g2.wrapMode = D.CLAMP_TO_EDGE;
  const p2 = new Float32Array(_2 ? m2 * l2 * 16 : 2 * f2.length);
  if (_2 && null != c3) for (let t = 0, n = 0; t < c3.length; t++) p2[n++] = c3[t], t % 3 == 2 && (p2[n++] = 1);
  else for (let t = 0; t < l2; t++) for (let e3 = 0; e3 < m2; e3++) {
    const n = 4 * (t * m2 + e3), r2 = 2 * (e3 * l2 + t);
    p2[n] = f2[r2], p2[n + 1] = f2[r2 + 1], p2[n + 3] = -1 === f2[r2] ? 0 : 1;
  }
  return new c(e2, g2, p2);
}
function m(e2, t) {
  const n = new e();
  return n.internalFormat = G.RGBA, n.width = t.length / 4, n.height = 1, n.samplingMode = L.NEAREST, n.wrapMode = D.CLAMP_TO_EDGE, new c(e2, n, t);
}
function l(t, n, r, a2 = 1, i = true) {
  return {
    u_flipY: i,
    u_applyTransform: !!t,
    u_opacity: a2,
    u_transformSpacing: t ? t.spacing : a,
    u_transformGridSize: t ? t.size : a,
    u_targetImageSize: n,
    u_srcImageSize: r
  };
}
function _(e2, t) {
  return {
    u_colormapOffset: t || 0,
    u_colormapMaxIndex: e2 ? e2.length / 4 - 1 : 0
  };
}
function g(e2, t) {
  return {
    u_scale: e2,
    u_offset: t
  };
}
function p(e2) {
  return {
    u_bandCount: e2.bandCount,
    u_minOutput: e2.outMin,
    u_maxOutput: e2.outMax,
    u_minCutOff: e2.minCutOff,
    u_maxCutOff: e2.maxCutOff,
    u_factor: e2.factor,
    u_useGamma: e2.useGamma,
    u_gamma: e2.gamma,
    u_gammaCorrection: e2.gammaCorrection
  };
}
function A(e2) {
  return {
    u_hillshadeType: e2.hillshadeType,
    u_sinZcosAs: e2.sinZcosAs,
    u_sinZsinAs: e2.sinZsinAs,
    u_cosZs: e2.cosZs,
    u_weights: e2.weights,
    u_factor: e2.factor,
    u_minValue: e2.minValue,
    u_maxValue: e2.maxValue
  };
}
function T(e2, t) {
  const n = e2.gl, r = t.glName, a2 = /* @__PURE__ */ new Map();
  if (null == r) return a2;
  const i = n.getProgramParameter(r, n.ACTIVE_UNIFORMS);
  let o2;
  for (let s = 0; s < i; s++) o2 = n.getActiveUniform(r, s), o2 && a2.set(o2.name, {
    location: n.getUniformLocation(r, o2.name),
    info: o2
  });
  return a2;
}
function h(e2, t, n) {
  Object.keys(n).forEach((r) => {
    const a2 = t.get(r) || t.get(r + "[0]");
    a2 && E(e2, r, n[r], a2);
  });
}
function O(e2, t, n, r) {
  n.length === r.length && (r.some((e3) => null == e3) || n.some((e3) => null == e3) || n.forEach((n2, a2) => {
    t.setUniform1i(n2, a2), e2.bindTexture(r[a2], a2);
  }));
}
function E(e2, t, n, r) {
  if (null === r || null == n) return false;
  const {
    info: a2
  } = r;
  switch (a2.type) {
    case o.FLOAT:
      a2.size > 1 ? e2.setUniform1fv(t, n) : e2.setUniform1f(t, n);
      break;
    case o.FLOAT_VEC2:
      e2.setUniform2fv(t, n);
      break;
    case o.FLOAT_VEC3:
      e2.setUniform3fv(t, n);
      break;
    case o.FLOAT_VEC4:
      e2.setUniform4fv(t, n);
      break;
    case o.FLOAT_MAT3:
      e2.setUniformMatrix3fv(t, n);
      break;
    case o.FLOAT_MAT4:
      e2.setUniformMatrix4fv(t, n);
      break;
    case o.INT:
      a2.size > 1 ? e2.setUniform1iv(t, n) : e2.setUniform1i(t, n);
      break;
    case o.BOOL:
      e2.setUniform1i(t, n ? 1 : 0);
      break;
    case o.INT_VEC2:
    case o.BOOL_VEC2:
      e2.setUniform2iv(t, n);
      break;
    case o.INT_VEC3:
    case o.BOOL_VEC3:
      e2.setUniform3iv(t, n);
      break;
    case o.INT_VEC4:
    case o.BOOL_VEC4:
      e2.setUniform4iv(t, n);
      break;
    default:
      return false;
  }
  return true;
}

export {
  f,
  c2 as c,
  m,
  l,
  _,
  g,
  p,
  A,
  T,
  h,
  O
};
//# sourceMappingURL=chunk-XS2MWMEF.js.map
