import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e2
} from "./chunk-ZDFN6OZC.js";
import {
  e
} from "./chunk-3NWWTJOW.js";
import {
  o as o2
} from "./chunk-B76NC7GX.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  n as n2
} from "./chunk-BZHHBBFX.js";
import {
  n
} from "./chunk-VSQZQLTQ.js";
import {
  s
} from "./chunk-K43CZ3M5.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl.js
function f(r) {
  r.fragment.uniforms.add(new e2("projInfo", (r2, o3) => c(o3.camera))), r.fragment.uniforms.add(new e("zScale", (r2, o3) => m(o3.camera))), r.fragment.code.add(o`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`);
}
function c(r) {
  const o3 = r.projectionMatrix;
  return 0 === o3[11] ? s(n3, 2 / (r.fullWidth * o3[0]), 2 / (r.fullHeight * o3[5]), (1 + o3[12]) / o3[0], (1 + o3[13]) / o3[5]) : s(n3, -2 / (r.fullWidth * o3[0]), -2 / (r.fullHeight * o3[5]), (1 - o3[8]) / o3[0], (1 - o3[9]) / o3[5]);
}
var n3 = n();
function m(o3) {
  return 0 === o3.projectionMatrix[11] ? o2(l, 0, 1) : o2(l, 1, 0);
}
var l = n2();

export {
  f
};
//# sourceMappingURL=chunk-6NVF5BZF.js.map
