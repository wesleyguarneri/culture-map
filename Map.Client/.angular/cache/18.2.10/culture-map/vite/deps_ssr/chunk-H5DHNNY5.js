import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o as o2
} from "./chunk-DUV7OLAZ.js";
import {
  s
} from "./chunk-TRF6JO5N.js";
import {
  o as o3
} from "./chunk-ZHVMMFTW.js";
import {
  n,
  o
} from "./chunk-LGS63R4F.js";

// ../../../node_modules/@arcgis/core/chunks/HUDCompositing.glsl.js
var t = class extends n {
};
function a() {
  const r = new o3();
  return r.include(o2), r.fragment.uniforms.add(new s("tex", (e) => e.texture)), r.fragment.code.add(o`void main() {
fragColor = vec4(1.0 - texture(tex, uv).a);
}`), r;
}
var i = Object.freeze(Object.defineProperty({
  __proto__: null,
  HUDCompositingPassParameters: t,
  build: a
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  t,
  a,
  i
};
//# sourceMappingURL=chunk-H5DHNNY5.js.map
