import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-4MMTPKY4.js";

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
//# sourceMappingURL=chunk-JXVDTUGR.js.map
