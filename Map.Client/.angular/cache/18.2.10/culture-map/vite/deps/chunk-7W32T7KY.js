import {
  v
} from "./chunk-VI6HLZLR.js";
import {
  e as e7
} from "./chunk-JRZPZOI3.js";
import {
  r
} from "./chunk-XUAPJ5BK.js";
import {
  c
} from "./chunk-GTZOXRB5.js";
import {
  o as o3
} from "./chunk-75N5YDQB.js";
import {
  t
} from "./chunk-TCQSUQ7Y.js";
import {
  e as e6
} from "./chunk-675UQNXB.js";
import {
  o as o2
} from "./chunk-SIZK72CP.js";
import {
  e as e5
} from "./chunk-GAYJ4YPJ.js";
import {
  e as e4
} from "./chunk-PPMDUJ4E.js";
import {
  a
} from "./chunk-MFZTGYUJ.js";
import {
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

// ../../../node_modules/@arcgis/core/chunks/CloudsComposition.glsl.js
function v2() {
  const r2 = new o2(), {
    attributes: v3,
    varyings: f2,
    vertex: h,
    fragment: p
  } = r2;
  return v3.add(e3.POSITION, "vec2"), f2.add("worldRay", "vec3"), h.uniforms.add(new e5("inverseProjectionMatrix", (e8, r3) => r3.camera.inverseProjectionMatrix), new e5("inverseViewMatrix", (r3, i) => e(u, i.camera.viewMatrix))), h.code.add(o`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1.0, 1.0)).xyz;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0.0)).xyz;
gl_Position = vec4(position, 1.0, 1.0);
}`), p.include(e6), p.include(a), r2.include(r, {
    pbrMode: c.Disabled,
    lightingSphericalHarmonicsOrder: 2
  }), r2.include(t), r2.include(e7), r2.include(o3), r2.include(v), p.uniforms.add(new e4("cameraPosition", (e8, r3) => r3.camera.eye)), p.code.add(o`void main() {
vec4 cloudsColor = renderClouds(normalize(worldRay), cameraPosition);
fragColor = vec4((1.0 - totalFadeInOut) * cloudsColor.rgb, cloudsColor.a);
}`), r2;
}
var u = e2();
var f = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: v2
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  v2 as v,
  f
};
//# sourceMappingURL=chunk-7W32T7KY.js.map
