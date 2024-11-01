import {
  t as t2
} from "./chunk-JSBFNTSJ.js";
import {
  h
} from "./chunk-GICNYLA4.js";
import {
  f
} from "./chunk-QZVEEM53.js";
import {
  e
} from "./chunk-ACZYDHB3.js";
import {
  o as o3
} from "./chunk-JXVDTUGR.js";
import {
  i
} from "./chunk-HAO4WCNW.js";
import {
  s
} from "./chunk-UCPBGEQD.js";
import {
  o as o4
} from "./chunk-SIZK72CP.js";
import {
  a
} from "./chunk-MFZTGYUJ.js";
import {
  o as o2
} from "./chunk-R5ZE5A4K.js";
import {
  n,
  o
} from "./chunk-SZWWBMQN.js";
import {
  r,
  t
} from "./chunk-IMVP5ADD.js";

// ../../../node_modules/@arcgis/core/chunks/ShadowCastVisualize.glsl.js
var p = class extends n {
  constructor(s2) {
    super(), this._data = s2, this.sampleScale = 0, this.opacityFromElevation = 1, this.color = t(g), this.bandSize = 0.1, this.threshold = 0.5;
  }
  get shadowCastMap() {
    return this._data.shadowCastTexture;
  }
};
var g = r(0.01, 0, 0.25, 1);
function w(e2) {
  const s2 = new o4(), n2 = s2.fragment;
  n2.include(a), n2.include(i), s2.include(f), s2.include(o3);
  const {
    visualization: p2,
    bandsEnabled: g2
  } = e2;
  n2.constants.add("inverseSampleValue", "float", h), n2.uniforms.add(new s("shadowCastMap", (e3) => e3.shadowCastMap), new o2("sampleScale", (e3) => e3.sampleScale), new o2("opacityFromElevation", (e3) => e3.opacityFromElevation), new e("uColor", (e3) => e3.color));
  const w2 = p2 === t2.Gradient, f3 = p2 === t2.Threshold;
  return w2 && g2 ? n2.uniforms.add(new o2("bandSize", (e3) => e3.bandSize)) : f3 && n2.uniforms.add(new o2("threshold", (e3) => e3.threshold)), n2.code.add(o`
    void main(void) {
      float record = texture(shadowCastMap, uv).r;
      float pixelSamples = record * inverseSampleValue;
      if (pixelSamples < 1.0) {
        discard;
      }

      float strength = pixelSamples * sampleScale;

      ${f3 ? o`
          if (strength <= threshold) {
            discard;
          }` : ""}

      ${w2 && g2 ? o`strength = ceil(strength / bandSize) * bandSize;` : ""}

      fragColor = vec4(uColor.xyz, uColor.a * opacityFromElevation ${w2 ? o`* strength` : ""});
    }
  `), s2;
}
var f2 = Object.freeze(Object.defineProperty({
  __proto__: null,
  ShadowCastVisualizePassParameters: p,
  build: w
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  p,
  w,
  f2 as f
};
//# sourceMappingURL=chunk-TPDHAOY6.js.map
