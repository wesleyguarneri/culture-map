import {
  G,
  L,
  P,
  U
} from "./chunk-YLE5AYZV.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/views/webgl/heatmapTextureUtils.js
var l = class {
  constructor(e, t, r, o) {
    this.dataType = e, this.samplingMode = t, this.pixelFormat = r, this.internalFormat = o;
  }
};
function n(n2, i) {
  const {
    textureFloatLinear: f,
    colorBufferFloat: s2
  } = n2.capabilities, u = s2?.textureFloat, _ = s2?.textureHalfFloat, m = s2?.floatBlend, p = n2.driverTest.floatBufferBlend.result;
  if (!u && !_) throw new s("heatmap:missing-color-buffer-float", "HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.");
  if (!(m && p || _)) throw new s("heatmap:missing-float-blend", "HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float." + (p ? "" : " This device claims support for EXT_float_blend, but does not actually support it."));
  const c = u && m && p, d = _, h = f, b = !!s2?.R32F, R = !!s2?.R16F;
  if (c && h) return h || i.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."), new l(U.FLOAT, h ? L.LINEAR : L.NEAREST, b ? G.RED : G.RGBA, b ? P.R32F : G.RGBA);
  if (d) return new l(U.HALF_FLOAT, L.LINEAR, R ? G.RED : G.RGBA, R ? P.R16F : G.RGBA);
  throw new s("heatmap:missing-hardware-support", "HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.");
}

export {
  n
};
//# sourceMappingURL=chunk-KM65NCZ2.js.map
