import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o
} from "./chunk-LGS63R4F.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl.js
function e(e2) {
  e2.fragment.code.add(o`const float GAMMA = 2.2;
const float INV_GAMMA = 0.4545454545;
vec4 delinearizeGamma(vec4 color) {
return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`);
}

export {
  e
};
//# sourceMappingURL=chunk-FT6GF7ST.js.map
