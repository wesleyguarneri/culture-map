import {
  o as o2
} from "./chunk-JXVDTUGR.js";
import {
  s
} from "./chunk-UCPBGEQD.js";
import {
  o as o3
} from "./chunk-SIZK72CP.js";
import {
  n,
  o
} from "./chunk-SZWWBMQN.js";

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
//# sourceMappingURL=chunk-HW3L4VAK.js.map
