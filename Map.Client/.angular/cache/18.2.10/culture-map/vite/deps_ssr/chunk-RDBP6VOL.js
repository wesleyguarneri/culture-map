import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  m
} from "./chunk-T7SGV75D.js";
import {
  f
} from "./chunk-6NVF5BZF.js";
import {
  o as o2
} from "./chunk-DUV7OLAZ.js";
import {
  c
} from "./chunk-KSOKDIBG.js";
import {
  s
} from "./chunk-TRF6JO5N.js";
import {
  o as o3
} from "./chunk-ZHVMMFTW.js";
import {
  e as e2
} from "./chunk-XK3CKE5Q.js";
import {
  a
} from "./chunk-7GHUVMBI.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  e
} from "./chunk-YGAXDKHF.js";
import {
  h,
  i
} from "./chunk-KOI252FF.js";

// ../../../node_modules/@arcgis/core/chunks/ShadowCastAccumulate.glsl.js
var h2 = 255;
var m2 = 1 / h2;
function w(r) {
  const h3 = new o3(), w2 = h3.fragment;
  return w2.include(a), w2.include(c), h3.include(f), h3.include(o2), h3.include(m, r), w2.uniforms.add(new s("shadowMap", (e3, a2) => a2.shadowMap.depthTexture), new s("depthMap", (e3, a2) => a2.depth?.attachment), new e2("inverseViewMatrix", (r2, o4) => h(u, i(u, o4.camera.viewMatrix, o4.camera.center)))), w2.constants.add("sampleValue", "float", m2), h3.outputs.add("sampleCount", "float"), w2.code.add(o`void main(void) {
float depth = depthFromTexture(depthMap, uv);
if (depth >= 1.0 || depth <= 0.0) {
discard;
}
float currentPixelDepth = linearizeDepth(depth);
vec4 currentPixelPos = vec4(reconstructPosition(gl_FragCoord.xy, currentPixelDepth), 1.0);
vec4 worldSpacePos = inverseViewMatrix * currentPixelPos;
mat4 shadowMatrix;
float linearDepth = -currentPixelDepth;
int i = chooseCascade(linearDepth, shadowMatrix);
if (i >= numCascades) {
discard;
}
vec3 lvpos = lightSpacePosition(worldSpacePos.xyz, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
discard;
}
ivec2 texSize = textureSize(shadowMap, 0);
ivec2 uvShadow = ivec2(cascadeCoordinates(i, texSize, lvpos) * vec2(texSize));
float depthShadow = readShadowMapDepth(uvShadow, shadowMap);
bool shadow = depthShadow < lvpos.z;
if (!shadow) {
discard;
}
sampleCount = sampleValue;
}`), h3;
}
var u = e();
var g = Object.freeze(Object.defineProperty({
  __proto__: null,
  ShadowCastMaxSamples: h2,
  build: w
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  h2 as h,
  w,
  g
};
//# sourceMappingURL=chunk-RDBP6VOL.js.map
