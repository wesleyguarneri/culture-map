import {
  s
} from "./chunk-UCPBGEQD.js";
import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  r
} from "./chunk-IMVP5ADD.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js
var r2 = r(1, 1, 0, 1);
var d = r(1, 0, 1, 1);
function a(e) {
  e.fragment.uniforms.add(new s("depthTexture", (e2, o2) => o2.mainDepth)), e.fragment.constants.add("occludedHighlightFlag", "vec4", r2).add("unoccludedHighlightFlag", "vec4", d), e.fragment.code.add(o`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`);
}

export {
  r2 as r,
  d,
  a
};
//# sourceMappingURL=chunk-ICUHXX2J.js.map
