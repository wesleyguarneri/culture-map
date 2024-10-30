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

// ../../../node_modules/@arcgis/core/chunks/AtmosphereCompositing.glsl.js
var a = class extends n {
};
function n2(r) {
  const a2 = new o3();
  a2.include(o2), a2.fragment.uniforms.add(new s("colorTexture", (e) => e.color), new s("depthTexture", (e) => e.depth));
  const n3 = r.haze;
  return a2.fragment.code.add(o`
    void main() {
      float depthSample = texture(depthTexture, uv).r;
      if (depthSample ${n3 ? o`== 1.0` : o`!= 1.0`} ) {
          fragColor = vec4(0);
          return;
      }
      fragColor = texture(colorTexture, uv);
    }
    `), a2;
}
var d = Object.freeze(Object.defineProperty({
  __proto__: null,
  AtmosphereCompositingPassParameters: a,
  build: n2
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  a,
  n2 as n,
  d
};
//# sourceMappingURL=chunk-XAGLWTE6.js.map
