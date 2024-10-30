import {
  f
} from "./chunk-QZVEEM53.js";
import {
  c
} from "./chunk-HAO4WCNW.js";
import {
  s
} from "./chunk-UCPBGEQD.js";
import {
  e
} from "./chunk-PPMDUJ4E.js";
import {
  o as o2
} from "./chunk-R5ZE5A4K.js";
import {
  o
} from "./chunk-SZWWBMQN.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Laserline.glsl.js
function n(n2, p) {
  const i = n2.fragment;
  i.include(c), n2.include(f), i.uniforms.add(new o2("globalAlpha", (o3) => o3.globalAlpha), new e("glowColor", (o3) => o3.glowColor), new o2("glowWidth", (o3, e2) => o3.glowWidth * e2.camera.pixelRatio), new o2("glowFalloff", (o3) => o3.glowFalloff), new e("innerColor", (o3) => o3.innerColor), new o2("innerWidth", (o3, e2) => o3.innerWidth * e2.camera.pixelRatio), new s("depthMap", (o3, e2) => e2.depth?.attachment), new s("normalMap", (o3) => o3.normals), new s("frameColor", (o3, e2) => e2.mainColor)), i.code.add(o`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`), i.code.add(o`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`), i.code.add(o`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`), i.code.add(o`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
if (depthError > 0.2) {
normal = texture(normalMap, uv).xyz * 2.0 - 1.0;
angleCutoffAdjust = 0.004;
} else {
normal = normalize(cross(dFdx(pos), dFdy(pos)));
angleCutoffAdjust = 0.0;
}
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`), p.contrastControlEnabled ? (i.uniforms.add(new o2("globalAlphaContrastBoost", (o3) => null != o3.globalAlphaContrastBoost ? o3.globalAlphaContrastBoost : 1)), i.code.add(o`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)) : i.code.add(o`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`);
}

export {
  n
};
//# sourceMappingURL=chunk-UHYV4RE2.js.map
