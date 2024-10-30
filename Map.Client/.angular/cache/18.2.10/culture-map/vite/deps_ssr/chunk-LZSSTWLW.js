import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  v
} from "./chunk-ALQIX2AS.js";
import {
  e
} from "./chunk-3NWWTJOW.js";
import {
  o as o2
} from "./chunk-HITI6WDM.js";
import {
  o
} from "./chunk-LGS63R4F.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js
function t(e2) {
  e2.varyings.add("linearDepth", "float");
}
function i(e2) {
  e2.vertex.uniforms.add(new e("nearFar", (e3, a) => a.camera.nearFar));
}
function d(e2) {
  e2.vertex.code.add(o`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`);
}
function n(r, n2) {
  const {
    vertex: s
  } = r;
  switch (n2.output) {
    case o2.Color:
      if (n2.receiveShadows) return t(r), void s.code.add(o`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);
      break;
    case o2.Shadow:
    case o2.ShadowHighlight:
    case o2.ShadowExcludeHighlight:
    case o2.ViewshedShadow:
      return r.include(v, n2), t(r), i(r), d(r), void s.code.add(o`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`);
  }
  s.code.add(o`void forwardLinearDepth() {}`);
}

export {
  t,
  i,
  d,
  n
};
//# sourceMappingURL=chunk-LZSSTWLW.js.map
