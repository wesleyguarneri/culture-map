import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  E
} from "./chunk-OEBP4L4N.js";
import {
  e
} from "./chunk-PFTDB6ZJ.js";
import {
  o as o3
} from "./chunk-DUV7OLAZ.js";
import {
  s
} from "./chunk-TRF6JO5N.js";
import {
  o as o4
} from "./chunk-ZHVMMFTW.js";
import {
  o as o2
} from "./chunk-Q5JLNMWZ.js";
import {
  n,
  o
} from "./chunk-LGS63R4F.js";

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
//# sourceMappingURL=chunk-DM6DHTKZ.js.map
