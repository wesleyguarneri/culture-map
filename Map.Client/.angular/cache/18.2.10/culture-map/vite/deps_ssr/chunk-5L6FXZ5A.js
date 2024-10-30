import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o as o3
} from "./chunk-DUV7OLAZ.js";
import {
  c
} from "./chunk-KSOKDIBG.js";
import {
  e
} from "./chunk-3NWWTJOW.js";
import {
  s
} from "./chunk-TRF6JO5N.js";
import {
  o as o4
} from "./chunk-ZHVMMFTW.js";
import {
  a
} from "./chunk-7GHUVMBI.js";
import {
  o as o2
} from "./chunk-Q5JLNMWZ.js";
import {
  n,
  o
} from "./chunk-LGS63R4F.js";

// ../../../node_modules/@arcgis/core/chunks/Compositing.glsl.js
var l = class extends n {
  constructor() {
    super(...arguments), this.opacity = 1;
  }
};
function m(i) {
  const l2 = new o4();
  return l2.include(o3), l2.fragment.uniforms.add(new s("tex", (e2) => e2.texture)), i.hasOpacityFactor && l2.fragment.uniforms.add(new o2("opacity", (e2) => e2.opacity)), i.isDepthBlit && (l2.fragment.uniforms.add(new e("nearFar", (e2, r) => r.camera.nearFar)), l2.fragment.include(c), l2.fragment.include(a)), l2.fragment.code.add(o`
    void main() {
      ${i.isDepthBlit ? o`
              float normalizedLinearDepth = (-linearDepthFromTexture(tex, uv) - nearFar[0]) / (nearFar[1] - nearFar[0]);
              fragColor = float2rgba(normalizedLinearDepth);` : o`
              fragColor = texture(tex, uv) ${i.hasOpacityFactor ? "* opacity" : ""};`}
    }`), l2;
}
var c2 = Object.freeze(Object.defineProperty({
  __proto__: null,
  CompositingPassParameters: l,
  build: m
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  l,
  m,
  c2 as c
};
//# sourceMappingURL=chunk-5L6FXZ5A.js.map
