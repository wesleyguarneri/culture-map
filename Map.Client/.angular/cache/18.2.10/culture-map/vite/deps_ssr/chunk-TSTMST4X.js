import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o as o2
} from "./chunk-HITI6WDM.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  e
} from "./chunk-D7C26LZP.js";

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
//# sourceMappingURL=chunk-TSTMST4X.js.map
