import {
  E
} from "./chunk-557LD7Q2.js";
import {
  e
} from "./chunk-GOOZVNO4.js";
import {
  o as o3
} from "./chunk-JXVDTUGR.js";
import {
  s
} from "./chunk-UCPBGEQD.js";
import {
  o as o4
} from "./chunk-SIZK72CP.js";
import {
  o as o2
} from "./chunk-R5ZE5A4K.js";
import {
  n,
  o
} from "./chunk-SZWWBMQN.js";

// ../../../node_modules/@arcgis/core/chunks/OverlayCompositing.glsl.js
var d = class extends n {
  constructor() {
    super(...arguments), this.overlayIndex = E.INNER, this.opacity = 1;
  }
};
function l() {
  const e2 = new o4();
  return e2.include(o3), e2.fragment.uniforms.add(new s("tex", (e3) => e3.texture)), e2.fragment.uniforms.add(new e("overlayIdx", (e3) => e3.overlayIndex)), e2.fragment.uniforms.add(new o2("opacity", (e3) => e3.opacity)), e2.fragment.code.add(o`void main() {
vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
fragColor = texture(tex, overlayUV) * opacity;
}`), e2;
}
var m = Object.freeze(Object.defineProperty({
  __proto__: null,
  OverlayCompositingPassParameters: d,
  build: l
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  d,
  l,
  m
};
//# sourceMappingURL=chunk-SCLVG2SO.js.map
