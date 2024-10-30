import {
  d,
  m,
  o2 as o4
} from "./chunk-KBAXMVAM.js";
import {
  t
} from "./chunk-6N3CFEVA.js";
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
  o as o2
} from "./chunk-R5ZE5A4K.js";
import {
  o
} from "./chunk-SZWWBMQN.js";

// ../../../node_modules/@arcgis/core/chunks/BlendLayers.glsl.js
var l;
function u(u2) {
  const g2 = new o3(), c = g2.fragment;
  if (g2.include(d), u2.background === l.Only) {
    const o5 = u2.output === o4.ColorComposite;
    return o5 ? c.uniforms.add(new e("backgroundColor", (e2) => e2.backgroundColor)) : c.include(t), c.code.add(o`
      void main() {
        fragColor = vec4(${o5 ? o`backgroundColor` : o`gridColor(uv)`}, 1.0);
      }
    `), g2;
  }
  return g2.include(m, u2), c.uniforms.add(new s("tex", (e2) => e2.texture), new o2("opacity", (e2) => e2.opacity)).code.add(o`void main() {
fragColor = blendLayers(uv, texture(tex, uv), opacity);
}`), g2;
}
!function(e2) {
  e2[e2.BelowLayer = 0] = "BelowLayer", e2[e2.Only = 1] = "Only", e2[e2.COUNT = 2] = "COUNT";
}(l || (l = {}));
var g = Object.freeze(Object.defineProperty({
  __proto__: null,
  get BackgroundMode() {
    return l;
  },
  build: u
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  l,
  u,
  g
};
//# sourceMappingURL=chunk-V2F5C2UG.js.map
