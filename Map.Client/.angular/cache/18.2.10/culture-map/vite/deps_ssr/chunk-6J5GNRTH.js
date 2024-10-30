import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t as t2
} from "./chunk-2KOSNZKE.js";
import {
  h
} from "./chunk-RDBP6VOL.js";
import {
  f
} from "./chunk-6NVF5BZF.js";
import {
  e
} from "./chunk-ZDFN6OZC.js";
import {
  o as o3
} from "./chunk-DUV7OLAZ.js";
import {
  i
} from "./chunk-KSOKDIBG.js";
import {
  s
} from "./chunk-TRF6JO5N.js";
import {
  o as o4
} from "./chunk-ZHVMMFTW.js";
import {
  a
} from "./chunk-7GHUVMBI.js";
import {
  o as o2
} from "./chunk-Q5JLNMWZ.js";
import {
  n,
  o
} from "./chunk-LGS63R4F.js";
import {
  r,
  t
} from "./chunk-VSQZQLTQ.js";

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
//# sourceMappingURL=chunk-6J5GNRTH.js.map
