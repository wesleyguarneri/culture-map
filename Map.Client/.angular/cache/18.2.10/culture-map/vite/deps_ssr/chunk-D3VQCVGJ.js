import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o
} from "./chunk-LGS63R4F.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js
function t(t2) {
  t2.vertex.code.add(o`const float PI = 3.141592653589793;`), t2.fragment.code.add(o`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`);
}

export {
  t
};
//# sourceMappingURL=chunk-D3VQCVGJ.js.map