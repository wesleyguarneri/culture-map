import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-4MMTPKY4.js";
import {
  n
} from "./chunk-N6TJI25E.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js
var d;
function o2(o3, v) {
  switch (v.textureCoordinateType) {
    case d.Default:
      return o3.attributes.add(e.UV0, "vec2"), o3.varyings.add("vuv0", "vec2"), void o3.vertex.code.add(o`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);
    case d.Compressed:
      return o3.attributes.add(e.UV0, "vec2"), o3.varyings.add("vuv0", "vec2"), void o3.vertex.code.add(o`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);
    case d.Atlas:
      return o3.attributes.add(e.UV0, "vec2"), o3.varyings.add("vuv0", "vec2"), o3.attributes.add(e.UVREGION, "vec4"), o3.varyings.add("vuvRegion", "vec4"), void o3.vertex.code.add(o`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);
    default:
      n(v.textureCoordinateType);
    case d.None:
      return void o3.vertex.code.add(o`void forwardTextureCoordinates() {}`);
    case d.COUNT:
      return;
  }
}
!function(e2) {
  e2[e2.None = 0] = "None", e2[e2.Default = 1] = "Default", e2[e2.Atlas = 2] = "Atlas", e2[e2.Compressed = 3] = "Compressed", e2[e2.COUNT = 4] = "COUNT";
}(d || (d = {}));

export {
  d,
  o2 as o
};
//# sourceMappingURL=chunk-PPMHRAOP.js.map
