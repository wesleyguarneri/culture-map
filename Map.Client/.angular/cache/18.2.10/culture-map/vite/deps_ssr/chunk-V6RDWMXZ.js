import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  d
} from "./chunk-VYJ7IUDT.js";
import {
  H
} from "./chunk-GHPF24X4.js";
import {
  e
} from "./chunk-D7C26LZP.js";

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
//# sourceMappingURL=chunk-V6RDWMXZ.js.map
