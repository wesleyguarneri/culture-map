import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o as o6
} from "./chunk-23Q4INNG.js";
import {
  o as o4
} from "./chunk-62ZEBDPC.js";
import {
  a
} from "./chunk-ZFMS3XGM.js";
import {
  e as e2
} from "./chunk-QWQJOAVR.js";
import {
  o as o5
} from "./chunk-YLQMUXQA.js";
import {
  P
} from "./chunk-4U7LUZFD.js";
import {
  d
} from "./chunk-T257OY4U.js";
import {
  s
} from "./chunk-TRF6JO5N.js";
import {
  o as o7
} from "./chunk-ZHVMMFTW.js";
import {
  o as o2
} from "./chunk-HITI6WDM.js";
import {
  o as o3
} from "./chunk-Q5JLNMWZ.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  e
} from "./chunk-D7C26LZP.js";

// ../../../node_modules/@arcgis/core/chunks/ImageMaterial.glsl.js
function v(v2) {
  const f2 = new o7(), {
    vertex: u,
    fragment: m
  } = f2;
  return d(u, v2), f2.include(o6, v2), f2.attributes.add(e.POSITION, "vec3"), f2.attributes.add(e.UV0, "vec2"), v2.perspectiveInterpolation && f2.attributes.add(e.PERSPECTIVEDIVIDE, "float"), f2.varyings.add("vpos", "vec3"), v2.multipassEnabled && f2.varyings.add("depth", "float"), u.code.add(o`
    void main(void) {
      vpos = position;
      ${v2.multipassEnabled ? "depth = (view * vec4(vpos, 1.0)).z;" : ""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${v2.perspectiveInterpolation ? "gl_Position *= perspectiveDivide;" : ""}
    }
  `), f2.include(P, v2), f2.include(a, v2), m.uniforms.add(new s("tex", (e3) => e3.texture), new o3("opacity", (e3) => e3.opacity)), f2.varyings.add("vTexCoord", "vec2"), v2.transparencyPassType === o4.ColorAlpha && (f2.outputs.add("fragColor", "vec4", 0), f2.outputs.add("fragAlpha", "float", 1)), m.include(e2), m.code.add(o`
    void main() {
      discardBySlice(vpos);
      ${v2.multipassEnabled ? "terrainDepthTest(depth);" : ""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${o.float(o5)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${v2.transparencyPassType === o4.ColorAlpha ? o`
              fragColor = premultiplyAlpha(fragColor);
              fragAlpha = fragColor.a;` : ""}
      ${v2.output === o2.ObjectAndLayerIdColor ? o`
              fragColor = vec4(0,0,0,1);` : ""}
    }
    `), f2;
}
var f = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: v
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  v,
  f
};
//# sourceMappingURL=chunk-TDVWRWD6.js.map
