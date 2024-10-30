import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t
} from "./chunk-YLQMUXQA.js";
import {
  o
} from "./chunk-LGS63R4F.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlphaBlend.glsl.js
function d(d2) {
  d2.fragment.code.add(o`
    #define discardOrAdjustAlpha(color) { if (color.a < ${o.float(t)}) { discard; } }
  `);
}

export {
  d
};
//# sourceMappingURL=chunk-TYNTF5BJ.js.map
