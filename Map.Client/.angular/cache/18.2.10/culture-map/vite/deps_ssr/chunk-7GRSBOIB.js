import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a as a2
} from "./chunk-AABDXAD3.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  a
} from "./chunk-U4EMQMDC.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloat16Encoding.glsl.js
function a3(a4) {
  a4.code.add(o`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sPassUniform.js
var e = class extends a2 {
  constructor(r, e2, o2) {
    super(r, "mat4", a.Pass, (s, o3, t) => s.setUniformMatrix4fv(r, e2(o3, t)), o2);
  }
};

export {
  a3 as a,
  e
};
//# sourceMappingURL=chunk-7GRSBOIB.js.map
