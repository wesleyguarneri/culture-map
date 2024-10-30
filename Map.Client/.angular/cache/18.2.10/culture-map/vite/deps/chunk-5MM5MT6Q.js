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
  e
} from "./chunk-PPMDUJ4E.js";
import {
  n,
  o
} from "./chunk-SZWWBMQN.js";
import {
  r
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/chunks/TextureOnly.glsl.js
var a = class extends n {
  constructor() {
    super(...arguments), this.color = r(1, 1, 1);
  }
};
function l() {
  const e2 = new o3();
  return e2.include(o2), e2.fragment.uniforms.add(new s("tex", (e3) => e3.texture), new e("uColor", (e3) => e3.color)), e2.fragment.code.add(o`void main() {
vec4 texColor = texture(tex, uv);
fragColor = texColor * vec4(uColor, 1.0);
}`), e2;
}
var d = Object.freeze(Object.defineProperty({
  __proto__: null,
  TextureOnlyPassParameters: a,
  build: l
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  a,
  l,
  d
};
//# sourceMappingURL=chunk-5MM5MT6Q.js.map
