import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o as o2
} from "./chunk-62ZEBDPC.js";
import {
  a
} from "./chunk-ZFMS3XGM.js";
import {
  e as e4
} from "./chunk-QWQJOAVR.js";
import {
  d
} from "./chunk-T257OY4U.js";
import {
  e as e3
} from "./chunk-ZDFN6OZC.js";
import {
  e as e2
} from "./chunk-3NWWTJOW.js";
import {
  o as o3
} from "./chunk-ZHVMMFTW.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  e
} from "./chunk-D7C26LZP.js";

// ../../../node_modules/@arcgis/core/chunks/CheckerBoard.glsl.js
function n(n2) {
  const c2 = new o3(), {
    vertex: p,
    fragment: v
  } = c2;
  return d(p, n2), c2.attributes.add(e.POSITION, "vec3"), c2.attributes.add(e.UV0, "vec2"), c2.varyings.add("vUV", "vec2"), n2.multipassEnabled && c2.varyings.add("depth", "float"), p.code.add(o`
    void main(void) {
      vUV = uv0;
      ${n2.multipassEnabled ? "depth = (view * vec4(position, 1.0)).z;" : ""}
      gl_Position = proj * view * vec4(position, 1.0);
    }
  `), c2.include(a, n2), v.uniforms.add(new e2("size", (e5) => e5.size)), v.uniforms.add(new e3("color1", (e5) => e5.color1)), v.uniforms.add(new e3("color2", (e5) => e5.color2)), v.include(e4), n2.transparencyPassType === o2.ColorAlpha && (c2.outputs.add("fragColor", "vec4", 0), c2.outputs.add("fragAlpha", "float", 1)), v.code.add(o`
    void main() {
      ${n2.multipassEnabled ? "terrainDepthTest(depth);" : ""}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      fragColor = mix(color2, color1, t);
      ${n2.transparencyPassType === o2.ColorAlpha ? o`
              fragColor = premultiplyAlpha(fragColor);
              fragAlpha = fragColor.a;` : ""}
    }
  `), c2;
}
var c = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: n
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  n,
  c
};
//# sourceMappingURL=chunk-BGVXUZD4.js.map
