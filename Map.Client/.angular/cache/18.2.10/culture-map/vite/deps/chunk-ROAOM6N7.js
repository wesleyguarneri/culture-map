import {
  e as e7
} from "./chunk-JRZPZOI3.js";
import {
  d,
  o as o3
} from "./chunk-PPMHRAOP.js";
import {
  i
} from "./chunk-HAO4WCNW.js";
import {
  e as e6
} from "./chunk-X2OAE75B.js";
import {
  s
} from "./chunk-UCPBGEQD.js";
import {
  o as o4
} from "./chunk-SIZK72CP.js";
import {
  e as e5
} from "./chunk-GAYJ4YPJ.js";
import {
  e as e4
} from "./chunk-PPMDUJ4E.js";
import {
  o as o2
} from "./chunk-R5ZE5A4K.js";
import {
  n as n2,
  o
} from "./chunk-SZWWBMQN.js";
import {
  e as e3
} from "./chunk-4MMTPKY4.js";
import {
  e as e2
} from "./chunk-BQZBOYBD.js";
import {
  e
} from "./chunk-XTVPEVHA.js";
import {
  n
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/chunks/Fog.glsl.js
var u = class extends n2 {
  constructor() {
    super(...arguments), this.fogColor = n(), this.fogStrength = 4e-6, this.atmosphereC = 1, this.fogAmount = 0;
  }
};
function h() {
  const r = new o4();
  r.attributes.add(e3.POSITION, "vec2"), r.include(o3, {
    textureCoordinateType: d.Default
  }), r.varyings.add("worldRay", "vec3"), r.varyings.add("eyeDir", "vec3");
  const {
    vertex: a,
    fragment: c
  } = r;
  return a.uniforms.add(new e5("inverseProjectionMatrix", (e8, r2) => r2.camera.inverseProjectionMatrix), new e5("inverseViewMatrix", (r2, a2) => e(w, a2.camera.viewMatrix))), a.code.add(o`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1, 1)).xyz;
eyeDir = posViewNear;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0)).xyz;
forwardTextureCoordinates();
gl_Position = vec4(position, 1, 1);
}`), c.uniforms.add(new o2("atmosphereC", (e8) => e8.atmosphereC), new e4("cameraPosition", (e8, r2) => r2.camera.eye), new e6("nearFar", (e8, r2) => r2.camera.nearFar), new s("depthTexture", (e8) => e8.depthTexture), new o2("fogStrength", (e8) => e8.fogStrength), new o2("fogAmount", (e8) => e8.fogAmount), new e4("fogColor", (e8) => e8.fogColor)), r.include(e7), c.include(i), c.code.add(o`vec2 sphereIntersect(vec3 start, vec3 dir) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float d = (b * b) - 4.0 * a * atmosphereC;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}`), c.code.add(o`vec4 applyFog(float dist, vec3 rayDir){
if(dist == -1.0){
vec2 rayAtmosphereIntersect = sphereIntersect(cameraPosition, rayDir);
dist = 0.055 * rayAtmosphereIntersect.y;
}
float fogAmount = fogAmount * (1.0 - exp(-dist * fogStrength));
return vec4(fogAmount * fogColor, fogAmount);
}`), c.code.add(o`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}
void main() {
vec3 rayDir = normalize(worldRay);
float terrainDepth = -1.0;
float depthSample = texture(depthTexture, vuv0).r;
float zNorm = 2.0 * depthSample - 1.0;
float linDepth = 2.0 * nearFar[0] * nearFar[1] / (nearFar[1] + nearFar[0] - zNorm * (nearFar[1] - nearFar[0]));
if(depthSample < 1.0 && depthSample > 0.0){
vec3 cameraSpaceRay = normalize(eyeDir);
cameraSpaceRay /= cameraSpaceRay.z;
cameraSpaceRay *= linDepth;
terrainDepth = max(0.0, length(cameraSpaceRay));
}
vec4 fog = applyFog(terrainDepth, rayDir);
fragColor = delinearizeGamma(vec4(tonemapACES(fog.rgb), fog.a));
}`), r;
}
var w = e2();
var b = Object.freeze(Object.defineProperty({
  __proto__: null,
  FogPassParameters: u,
  build: h
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  u,
  h,
  b
};
//# sourceMappingURL=chunk-ROAOM6N7.js.map
