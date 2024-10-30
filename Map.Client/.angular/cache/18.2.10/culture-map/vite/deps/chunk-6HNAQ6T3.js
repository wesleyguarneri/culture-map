import {
  d
} from "./chunk-PPMHRAOP.js";
import {
  H
} from "./chunk-NWICVENM.js";
import {
  e
} from "./chunk-4MMTPKY4.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/SourceGeometry.js
function o(o2) {
  const i = H().vec3f(e.POSITION);
  return o2.hasNormals && i.vec2i16(e.NORMALCOMPRESSED, {
    glNormalized: true
  }), o2.textureCoordinates === d.Default ? i.vec2f(e.UV0) : o2.textureCoordinates === d.Atlas && (i.vec2f(e.UV0), i.vec4u16(e.UVREGION, {
    glNormalized: true
  })), o2.colors && i.vec4u8(e.COLOR, {
    glNormalized: true
  }), i;
}

export {
  o
};
//# sourceMappingURL=chunk-6HNAQ6T3.js.map
