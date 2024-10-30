import {
  o as o2
} from "./chunk-WJKYGQOY.js";
import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-4MMTPKY4.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl.js
function d(d2, t) {
  const a = t.output === o2.ObjectAndLayerIdColor, n = t.objectAndLayerIdColorInstanced;
  a && (d2.varyings.add("objectAndLayerIdColorVarying", "vec4"), n ? d2.attributes.add(e.INSTANCEOBJECTANDLAYERIDCOLOR, "vec4") : d2.attributes.add(e.OBJECTANDLAYERIDCOLOR, "vec4")), d2.vertex.code.add(o`
     void forwardObjectAndLayerIdColor() {
      ${a ? n ? o`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;` : o`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;` : o``} }`), d2.fragment.code.add(o`
      void outputObjectAndLayerIdColor() {
        ${a ? o`fragColor = objectAndLayerIdColorVarying;` : o``} }`);
}

export {
  d
};
//# sourceMappingURL=chunk-BG32AOSQ.js.map
