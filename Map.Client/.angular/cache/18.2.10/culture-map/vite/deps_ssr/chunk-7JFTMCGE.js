import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  d
} from "./chunk-T257OY4U.js";
import {
  e as e2
} from "./chunk-ZDFN6OZC.js";
import {
  o as o3
} from "./chunk-ZHVMMFTW.js";
import {
  o as o2
} from "./chunk-Q5JLNMWZ.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  e
} from "./chunk-D7C26LZP.js";

// ../../../node_modules/@arcgis/core/chunks/SlicePlaneMaterial.glsl.js
function t(t2) {
  const g2 = new o3(), {
    vertex: l,
    fragment: s,
    attributes: n,
    varyings: c
  } = g2;
  return d(l, t2), n.add(e.POSITION, "vec3"), n.add(e.UV0, "vec2"), c.add("vUV", "vec2"), l.code.add(o`void main(void) {
vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);
}`), s.uniforms.add(new e2("backgroundColor", (e3) => e3.backgroundColor), new e2("gridColor", (e3) => e3.gridColor), new o2("gridWidth", (e3) => e3.gridWidth)), s.code.add(o`void main() {
const float LINE_WIDTH = 1.0;
vec2 uvScaled = vUV * gridWidth;
vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);
grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);
float gridFade = max(grid.x, grid.y);
float gridAlpha = gridColor.a * gridFade;
fragColor =
vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
vec4(gridColor.rgb, 1.0) * gridAlpha;
}`), g2;
}
var g = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: t
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  t,
  g
};
//# sourceMappingURL=chunk-7JFTMCGE.js.map
