import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  e
} from "./chunk-D7C26LZP.js";
import {
  n
} from "./chunk-C7BQE556.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js
function t(t2, i) {
  switch (i.normalType) {
    case a.Compressed:
      t2.attributes.add(e.NORMALCOMPRESSED, "vec2"), t2.vertex.code.add(o`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);
      break;
    case a.Attribute:
      t2.attributes.add(e.NORMAL, "vec3"), t2.vertex.code.add(o`vec3 normalModel() {
return normal;
}`);
      break;
    case a.ScreenDerivative:
      t2.fragment.code.add(o`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);
      break;
    default:
      n(i.normalType);
    case a.COUNT:
    case a.Ground:
  }
}
var a;
!function(e2) {
  e2[e2.Attribute = 0] = "Attribute", e2[e2.Compressed = 1] = "Compressed", e2[e2.Ground = 2] = "Ground", e2[e2.ScreenDerivative = 3] = "ScreenDerivative", e2[e2.COUNT = 4] = "COUNT";
}(a || (a = {}));

export {
  t,
  a
};
//# sourceMappingURL=chunk-NCMX3DAD.js.map
