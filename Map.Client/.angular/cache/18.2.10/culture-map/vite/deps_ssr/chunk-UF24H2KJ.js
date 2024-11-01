import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o as o2
} from "./chunk-DUV7OLAZ.js";
import {
  o as o3
} from "./chunk-ZHVMMFTW.js";
import {
  s
} from "./chunk-EAVSYZXD.js";
import {
  n,
  o
} from "./chunk-LGS63R4F.js";

// ../../../node_modules/@arcgis/core/chunks/HighlightDownsample.glsl.js
var o4 = class extends n {
};
function i() {
  const r = new o3(), {
    outputs: o5,
    fragment: i2
  } = r;
  return r.include(o2), i2.uniforms.add(new s("textureInput", (e) => e.input)), i2.constants.add("sampleArea", "int", Math.ceil(s2 / 2)), o5.add("fragGrid", "vec2"), i2.code.add(o`
    void main() {
      float red = 0.0;
      float green = 1.0;
      int cellSize = ${o.int(n2)};
      vec2 texelSize = 1.0 / vec2(textureSize(textureInput, 0));
      vec2 offset = floor(gl_FragCoord.xy) * vec2(float(cellSize));

      for(int x = -sampleArea; x < cellSize + sampleArea; x += 2) {
        for(int y = -sampleArea; y < cellSize + sampleArea; y += 2) {
          vec2 coord = (offset + vec2(float(x), float(y))) * texelSize;
          vec4 value = texture(textureInput, coord);
          float mx = floor(max(value.g, value.b));

          red = max(red, ceil(value.r));
          green = min(green, mx);
          if(red == 1.0 && green == 0.0) {
            fragGrid = vec2(red, green);
            return;
          }
        }
      }
      fragGrid = vec2(red, green);
    }`), r;
}
var n2 = 32;
var s2 = 9;
var d = 0.4;
var c = Object.freeze(Object.defineProperty({
  __proto__: null,
  HighlightDownsampleDrawParameters: o4,
  blurSize: d,
  build: i,
  gridCellPixelSize: n2,
  outlineSize: s2
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  o4 as o,
  i,
  n2 as n,
  s2 as s,
  d,
  c
};
//# sourceMappingURL=chunk-UF24H2KJ.js.map
