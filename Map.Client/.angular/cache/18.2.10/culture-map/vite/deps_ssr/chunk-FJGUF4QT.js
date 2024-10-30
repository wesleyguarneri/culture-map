import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  d,
  s as s3
} from "./chunk-UF24H2KJ.js";
import {
  e as e3
} from "./chunk-ZDFN6OZC.js";
import {
  e as e2
} from "./chunk-3NWWTJOW.js";
import {
  s as s2
} from "./chunk-TRF6JO5N.js";
import {
  o as o2
} from "./chunk-ZHVMMFTW.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  e
} from "./chunk-D7C26LZP.js";
import {
  n
} from "./chunk-VSQZQLTQ.js";
import {
  s
} from "./chunk-K43CZ3M5.js";

// ../../../node_modules/@arcgis/core/chunks/HighlightApply.glsl.js
function g() {
  const o3 = new o2(), {
    vertex: g2,
    fragment: d3
  } = o3, f = g2.code, h = d3.code;
  return o3.attributes.add(e.POSITION, "vec2"), o3.varyings.add("uv", "vec2"), o3.attributes.add(e.UV0, "vec2"), g2.uniforms.add(new s2("coverageTex", (e4) => e4.coverageTexture), new e2("coverageRounding", (e4) => e4.coverageRounding)), f.add(o`void main() {
vec4 cov = texture(coverageTex, uv0 * coverageRounding);
if (cov.r == 0.0) {
gl_Position = vec4(0.0);
return;
}
gl_Position = vec4(position, 0.0, 1.0);
uv = position.xy * 0.5 + vec2(0.5);
}`), d3.uniforms.add(new s2("tex", (e4) => e4.blurTexture), new s2("highlightTexture", (e4) => e4.highlightTexture), new e3("uColor", (e4) => e4.color), new e3("haloColor", (e4) => e4.haloColor), new e3("opacities", (o4) => s(u, o4.haloOpacity, o4.haloOpacityOccluded, o4.fillOpacity, o4.fillOpacityOccluded))), d3.constants.add("inner", "float", 1 - (s3 - d) / s3), h.add(o`void main() {
vec4 blurredHighlightValue = texture(tex, uv);
float highlightIntensity = blurredHighlightValue.a;
if (highlightIntensity == 0.0) {
discard;
}
vec4 origin_color = texture(highlightTexture, uv);
float outlineIntensity;
float fillIntensity;
if (blurredHighlightValue.g > blurredHighlightValue.b) {
outlineIntensity = haloColor.w * opacities[1];
fillIntensity = uColor.w * opacities[3];
}
else {
outlineIntensity = haloColor.w * opacities[0];
fillIntensity = uColor.w * opacities[2];
}
float outlineFactor = smoothstep(0.0, inner, highlightIntensity);
float fillFactor = any(notEqual(origin_color, vec4(0.0, 0.0, 0.0, 0.0))) ? 1.0 : 0.0;
float intensity = outlineIntensity * outlineFactor * (1.0 - fillFactor) + fillIntensity * fillFactor;
fragColor = vec4(mix(haloColor.rgb, uColor.rgb, fillFactor), intensity);
}`), o3;
}
var u = n();
var d2 = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: g
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  g,
  d2 as d
};
//# sourceMappingURL=chunk-FJGUF4QT.js.map
