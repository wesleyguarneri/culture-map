import {
  d
} from "./chunk-3MNGTHM3.js";
import {
  o as o3
} from "./chunk-JXVDTUGR.js";
import {
  s
} from "./chunk-UCPBGEQD.js";
import {
  o as o4
} from "./chunk-SIZK72CP.js";
import {
  o as o2
} from "./chunk-R5ZE5A4K.js";
import {
  o
} from "./chunk-SZWWBMQN.js";

// ../../../node_modules/@arcgis/core/chunks/Heatmap.glsl.js
function t(t2) {
  const a2 = new o4();
  a2.include(o3), a2.include(d);
  const {
    usesHalfFloat: d2
  } = t2;
  return a2.fragment.uniforms.add(new s("densityMap", (e) => e.densityMap), new s("tex", (e) => e.colorRamp), new o2("densityNormalizer", (e) => 1 / (e.maxDensity - e.minDensity)), new o2("minDensity", (e) => e.minDensity), new o2("densityMultiplier", (e) => 3 / (e.searchRadius * e.searchRadius * Math.PI))), d2 && a2.constants.add("compressionFactor", "float", 4), a2.fragment.code.add(o`
    void main() {
      float density = texture(densityMap, uv).r * densityMultiplier${d2 ? o` * compressionFactor` : ""};
      float densityRatio = (density - minDensity) * densityNormalizer;

      vec4 color = texture(tex, vec2(clamp(densityRatio, 0.0, 1.0), 0.5));

      discardOrAdjustAlpha(color);
      fragColor = color;
    }
  `), a2;
}
var a = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: t
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  t,
  a
};
//# sourceMappingURL=chunk-RDOYE3NP.js.map
