import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  v
} from "./chunk-YUYMEQ3T.js";
import {
  e as e7
} from "./chunk-FT6GF7ST.js";
import {
  r
} from "./chunk-HRVAAVBD.js";
import {
  c
} from "./chunk-Z4PRO5ND.js";
import {
  o as o3
} from "./chunk-2ZXVDYHF.js";
import {
  t
} from "./chunk-D3VQCVGJ.js";
import {
  e as e6
} from "./chunk-QWQJOAVR.js";
import {
  o as o2
} from "./chunk-ZHVMMFTW.js";
import {
  e as e5
} from "./chunk-XK3CKE5Q.js";
import {
  e as e4
} from "./chunk-AMH7CZMY.js";
import {
  a
} from "./chunk-7GHUVMBI.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  e as e3
} from "./chunk-D7C26LZP.js";
import {
  e as e2
} from "./chunk-YGAXDKHF.js";
import {
  e
} from "./chunk-KOI252FF.js";

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
//# sourceMappingURL=chunk-UKL3ZZHX.js.map
