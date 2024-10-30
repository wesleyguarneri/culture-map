import {
  o as o3
} from "./chunk-JXVDTUGR.js";
import {
  c
} from "./chunk-HAO4WCNW.js";
import {
  e
} from "./chunk-X2OAE75B.js";
import {
  s
} from "./chunk-UCPBGEQD.js";
import {
  o as o4
} from "./chunk-SIZK72CP.js";
import {
  a
} from "./chunk-MFZTGYUJ.js";
import {
  o as o2
} from "./chunk-R5ZE5A4K.js";
import {
  n,
  o
} from "./chunk-SZWWBMQN.js";

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
//# sourceMappingURL=chunk-OEHDMT4P.js.map
