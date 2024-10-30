import {
  t
} from "./chunk-TGHJVD7I.js";
import {
  o
} from "./chunk-SZWWBMQN.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlphaBlend.glsl.js
function d(d2) {
  d2.fragment.code.add(o`
    #define discardOrAdjustAlpha(color) { if (color.a < ${o.float(t)}) { discard; } }
  `);
}

export {
  d
};
//# sourceMappingURL=chunk-3MNGTHM3.js.map
