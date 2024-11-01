import {
  t
} from "./chunk-R27BBJA3.js";

// ../../../node_modules/@arcgis/core/views/webgl/capabilities.js
var r;
function t2() {
  return r || (r = n()), r;
}
var o = class {
  constructor() {
    this.available = false, this.majorPerformanceCaveat = false, this.maxTextureSize = 0, this.supportsVertexShaderSamplers = false, this.supportsHighPrecisionFragment = false, this.supportsColorBufferFloat = false, this.supportsColorBufferFloatBlend = false, this.supportsColorBufferHalfFloat = false;
  }
};
function l(r2) {
  if ("undefined" == typeof WebGL2RenderingContext) return null;
  const t3 = document.createElement("canvas");
  if (!t3) return null;
  let o2 = t(t3, {
    failIfMajorPerformanceCaveat: true
  });
  if (null == o2 && (o2 = t(t3), null != o2 && (r2.majorPerformanceCaveat = true)), null == o2) return o2;
  r2.available = true, r2.maxTextureSize = o2.getParameter(o2.MAX_TEXTURE_SIZE), r2.supportsVertexShaderSamplers = o2.getParameter(o2.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0;
  const l2 = o2.getShaderPrecisionFormat(o2.FRAGMENT_SHADER, o2.HIGH_FLOAT);
  return l2 && (r2.supportsHighPrecisionFragment = l2.precision > 0), o2;
}
function n() {
  const e = new o(), r2 = l(e);
  return null == r2 || (e.supportsColorBufferFloat = null !== r2.getExtension("EXT_color_buffer_float"), e.supportsColorBufferFloatBlend = null !== r2.getExtension("EXT_float_blend"), e.supportsColorBufferHalfFloat = e.supportsColorBufferFloat || null !== r2.getExtension("EXT_color_buffer_half_float")), e;
}

export {
  t2 as t
};
//# sourceMappingURL=chunk-BAAB562I.js.map
