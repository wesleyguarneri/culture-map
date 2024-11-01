import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e
} from "./chunk-3NWWTJOW.js";
import {
  o as o2
} from "./chunk-B76NC7GX.js";
import {
  a
} from "./chunk-7GHUVMBI.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  n
} from "./chunk-BZHHBBFX.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl.js
function i(e2) {
  e2.include(a), e2.code.add(o`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return linearDepthFromRGBA(texelFetch(depthTexture, iuv, 0), nearFar);
}`);
}
function c(e2) {
  e2.uniforms.add(new e("zProjectionMap", (e3, t) => d(t.camera))), e2.code.add(o`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`), e2.code.add(o`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`), e2.code.add(o`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`);
}
function d(t) {
  const r = t.projectionMatrix;
  return o2(n2, r[14], r[10]);
}
var n2 = n();

export {
  i,
  c
};
//# sourceMappingURL=chunk-KSOKDIBG.js.map
