import {
  c
} from "./chunk-GTZOXRB5.js";
import {
  e as e2
} from "./chunk-ACZYDHB3.js";
import {
  e
} from "./chunk-PPMDUJ4E.js";
import {
  o as o2
} from "./chunk-SZWWBMQN.js";
import {
  n as n2
} from "./chunk-IMVP5ADD.js";
import {
  s
} from "./chunk-H7WPOTQH.js";
import {
  o
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl.js
function r(n3, g) {
  const r2 = n3.fragment, o3 = void 0 !== g.lightingSphericalHarmonicsOrder ? g.lightingSphericalHarmonicsOrder : 2;
  0 === o3 ? (r2.uniforms.add(new e("lightingAmbientSH0", (n4, t) => o(a, t.lighting.sh.r[0], t.lighting.sh.g[0], t.lighting.sh.b[0]))), r2.code.add(o2`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)) : 1 === o3 ? (r2.uniforms.add(new e2("lightingAmbientSH_R", (i, n4) => s(m, n4.lighting.sh.r[0], n4.lighting.sh.r[1], n4.lighting.sh.r[2], n4.lighting.sh.r[3])), new e2("lightingAmbientSH_G", (i, n4) => s(m, n4.lighting.sh.g[0], n4.lighting.sh.g[1], n4.lighting.sh.g[2], n4.lighting.sh.g[3])), new e2("lightingAmbientSH_B", (i, n4) => s(m, n4.lighting.sh.b[0], n4.lighting.sh.b[1], n4.lighting.sh.b[2], n4.lighting.sh.b[3]))), r2.code.add(o2`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)) : 2 === o3 && (r2.uniforms.add(new e("lightingAmbientSH0", (n4, t) => o(a, t.lighting.sh.r[0], t.lighting.sh.g[0], t.lighting.sh.b[0])), new e2("lightingAmbientSH_R1", (i, n4) => s(m, n4.lighting.sh.r[1], n4.lighting.sh.r[2], n4.lighting.sh.r[3], n4.lighting.sh.r[4])), new e2("lightingAmbientSH_G1", (i, n4) => s(m, n4.lighting.sh.g[1], n4.lighting.sh.g[2], n4.lighting.sh.g[3], n4.lighting.sh.g[4])), new e2("lightingAmbientSH_B1", (i, n4) => s(m, n4.lighting.sh.b[1], n4.lighting.sh.b[2], n4.lighting.sh.b[3], n4.lighting.sh.b[4])), new e2("lightingAmbientSH_R2", (i, n4) => s(m, n4.lighting.sh.r[5], n4.lighting.sh.r[6], n4.lighting.sh.r[7], n4.lighting.sh.r[8])), new e2("lightingAmbientSH_G2", (i, n4) => s(m, n4.lighting.sh.g[5], n4.lighting.sh.g[6], n4.lighting.sh.g[7], n4.lighting.sh.g[8])), new e2("lightingAmbientSH_B2", (i, n4) => s(m, n4.lighting.sh.b[5], n4.lighting.sh.b[6], n4.lighting.sh.b[7], n4.lighting.sh.b[8]))), r2.code.add(o2`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`), g.pbrMode !== c.Normal && g.pbrMode !== c.Schematic || r2.code.add(o2`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));
}
var a = n();
var m = n2();

export {
  r
};
//# sourceMappingURL=chunk-XUAPJ5BK.js.map
