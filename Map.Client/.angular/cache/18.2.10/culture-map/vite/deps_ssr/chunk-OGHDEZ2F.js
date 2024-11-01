import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e4
} from "./chunk-ZDFN6OZC.js";
import {
  o as o3
} from "./chunk-ZHVMMFTW.js";
import {
  e as e3
} from "./chunk-XK3CKE5Q.js";
import {
  o as o2
} from "./chunk-Q5JLNMWZ.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  e as e2
} from "./chunk-D7C26LZP.js";
import {
  e
} from "./chunk-YGAXDKHF.js";
import {
  c,
  n
} from "./chunk-KOI252FF.js";

// ../../../node_modules/@arcgis/core/chunks/Stars.glsl.js
function d() {
  const e5 = new o3();
  return e5.attributes.add(e2.POSITION, "vec3"), e5.attributes.add(e2.COLOR, "vec4"), e5.attributes.add(e2.SIZE, "float"), e5.varyings.add("vcolor", "vec4"), e5.varyings.add("vsize", "float"), e5.vertex.uniforms.add(new e3("transform", (e6, o4) => c2(e6, o4)), new e4("viewport", (e6, o4) => o4.camera.fullViewport), new o2("pixelRatio", (e6, o4) => o4.camera.pixelRatio)), e5.vertex.code.add(o`void main(void) {
gl_Position = transform * vec4(position, 0);
vcolor = color / 1.2;
vsize = size * 5.0 * pixelRatio;
gl_PointSize = vsize;
}`), e5.fragment.code.add(o`void main() {
float cap = 0.7;
float scale = 1.0 / cap;
float helper = clamp(length(abs(gl_PointCoord - vec2(0.5))), 0.0, cap);
float alpha = clamp((cap - helper) * scale, 0.0, 1.0);
float intensity = alpha * alpha * alpha;
if (vsize < 3.0) {
intensity *= 0.5;
}
fragColor = vec4(vcolor.xyz, intensity);
}`), e5;
}
function c2(r, a) {
  const i = 24e-8;
  return n(m, a.camera.projectionMatrix), m[10] = i - 1, m[11] = -1, m[14] = (i - 2) * a.camera.near, c(m, m, a.camera.viewMatrix), c(m, m, r.modelMatrix);
}
var m = e();
var f = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: d
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  d,
  f
};
//# sourceMappingURL=chunk-OGHDEZ2F.js.map
