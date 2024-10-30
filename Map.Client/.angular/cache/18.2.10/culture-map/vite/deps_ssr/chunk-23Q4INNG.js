import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  d
} from "./chunk-LZSSTWLW.js";
import {
  o
} from "./chunk-LGS63R4F.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js
function o2(o3) {
  d(o3), o3.vertex.code.add(o`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`), o3.vertex.code.add(o`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`);
}

export {
  o2 as o
};
//# sourceMappingURL=chunk-23Q4INNG.js.map
