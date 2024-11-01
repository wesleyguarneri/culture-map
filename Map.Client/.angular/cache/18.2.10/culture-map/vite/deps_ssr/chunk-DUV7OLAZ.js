import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  e
} from "./chunk-D7C26LZP.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl.js
function o2(o3, t = true) {
  o3.attributes.add(e.POSITION, "vec2"), t && o3.varyings.add("uv", "vec2"), o3.vertex.code.add(o`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t ? o`uv = position * 0.5 + vec2(0.5);` : ""}
    }
  `);
}

export {
  o2 as o
};
//# sourceMappingURL=chunk-DUV7OLAZ.js.map
