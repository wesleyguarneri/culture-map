import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  e
} from "./chunk-D7C26LZP.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js
function e2(e3, d) {
  d.hasVertexColors ? (e3.attributes.add(e.COLOR, "vec4"), e3.varyings.add("vColor", "vec4"), e3.vertex.code.add(o`void forwardVertexColor() { vColor = color; }`), e3.vertex.code.add(o`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)) : e3.vertex.code.add(o`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);
}

export {
  e2 as e
};
//# sourceMappingURL=chunk-RV5QLAWU.js.map
