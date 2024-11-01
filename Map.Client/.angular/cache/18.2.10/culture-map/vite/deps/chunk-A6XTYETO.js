import {
  F,
  W,
  v
} from "./chunk-SUUOAZQT.js";
import {
  a,
  t
} from "./chunk-PA7WZX2U.js";
import {
  o as o2
} from "./chunk-GPUGMSHU.js";
import {
  e as e2
} from "./chunk-52UEU7LG.js";
import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-TYQXPPSP.js";
import {
  n
} from "./chunk-N6TJI25E.js";
import {
  n as n2
} from "./chunk-IMVP5ADD.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js
function n3(o3, a2) {
  switch (a2.normalType) {
    case a.Attribute:
    case a.Compressed:
      o3.include(t, a2), o3.varyings.add("vNormalWorld", "vec3"), o3.varyings.add("vNormalView", "vec3"), o3.vertex.uniforms.add(new o2("transformNormalGlobalFromModel", (r) => r.transformNormalGlobalFromModel), new e2("transformNormalViewFromGlobal", (r) => r.transformNormalViewFromGlobal)), o3.vertex.code.add(o`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);
      break;
    case a.Ground:
      o3.include(v, a2), o3.varyings.add("vNormalWorld", "vec3"), o3.vertex.code.add(o`
        void forwardNormal() {
          vNormalWorld = ${a2.spherical ? o`normalize(vPositionWorldCameraRelative);` : o`vec3(0.0, 0.0, 1.0);`}
        }
        `);
      break;
    case a.ScreenDerivative:
      o3.vertex.code.add(o`void forwardNormal() {}`);
      break;
    default:
      n(a2.normalType);
    case a.COUNT:
  }
}
var f = class extends F {
  constructor() {
    super(...arguments), this.transformNormalViewFromGlobal = e();
  }
};
var v2 = class extends W {
  constructor() {
    super(...arguments), this.transformNormalGlobalFromModel = e(), this.toMapSpace = n2();
  }
};

export {
  n3 as n,
  f,
  v2 as v
};
//# sourceMappingURL=chunk-A6XTYETO.js.map
