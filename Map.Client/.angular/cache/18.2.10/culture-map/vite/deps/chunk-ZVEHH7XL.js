import {
  c
} from "./chunk-HAO4WCNW.js";
import {
  s
} from "./chunk-UCPBGEQD.js";
import {
  o
} from "./chunk-SZWWBMQN.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MultipassGeometryTest.glsl.js
function r(r2) {
  r2.include(c), r2.uniforms.add(new s("geometryDepthTexture", (e, t) => t.multipassGeometry.depth?.attachment)), r2.code.add(o`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos);
return (elementDepth < (geometryDepth - 1.0));
}`);
}
var m = class {
};

export {
  r,
  m
};
//# sourceMappingURL=chunk-ZVEHH7XL.js.map
