import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c
} from "./chunk-KSOKDIBG.js";
import {
  s
} from "./chunk-TRF6JO5N.js";
import {
  o
} from "./chunk-LGS63R4F.js";

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
//# sourceMappingURL=chunk-GYNRSS5Q.js.map
