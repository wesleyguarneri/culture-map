import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o as o3
} from "./chunk-BCNABTAE.js";
import {
  c
} from "./chunk-3PPEJ4QJ.js";
import {
  e as e5
} from "./chunk-ZEOLGKXL.js";
import {
  o as o2
} from "./chunk-IS4RJOPJ.js";
import {
  e as e6
} from "./chunk-XK3CKE5Q.js";
import {
  e as e4
} from "./chunk-AMH7CZMY.js";
import {
  n as n2,
  o
} from "./chunk-LGS63R4F.js";
import {
  e as e3
} from "./chunk-D7C26LZP.js";
import {
  e
} from "./chunk-YGAXDKHF.js";
import {
  e as e2
} from "./chunk-4TOSJLKR.js";
import {
  n
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js
function o4(o5) {
  o5.attributes.add(e3.POSITION, "vec3"), o5.vertex.code.add(o`vec3 positionModel() { return position; }`);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl.js
function v(r, o5) {
  r.include(o4);
  const e7 = r.vertex;
  e7.include(c, o5), r.varyings.add("vPositionWorldCameraRelative", "vec3"), r.varyings.add("vPosition_view", "vec3"), e7.uniforms.add(new e4("transformWorldFromViewTH", (r2) => r2.transformWorldFromViewTH), new e4("transformWorldFromViewTL", (r2) => r2.transformWorldFromViewTL), new e5("transformViewFromCameraRelativeRS", (r2) => r2.transformViewFromCameraRelativeRS), new e6("transformProjFromView", (r2) => r2.transformProjFromView), new o3("transformWorldFromModelRS", (r2) => r2.transformWorldFromModelRS), new o2("transformWorldFromModelTH", (r2) => r2.transformWorldFromModelTH), new o2("transformWorldFromModelTL", (r2) => r2.transformWorldFromModelTL)), e7.code.add(o`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`), e7.code.add(o`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o5.spherical ? o`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)` : o`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `), r.fragment.uniforms.add(new e4("transformWorldFromViewTL", (r2) => r2.transformWorldFromViewTL)), e7.code.add(o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`), r.fragment.code.add(o`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);
}
var F = class extends n2 {
  constructor() {
    super(...arguments), this.transformWorldFromViewTH = n(), this.transformWorldFromViewTL = n(), this.transformViewFromCameraRelativeRS = e2(), this.transformProjFromView = e();
  }
};
var W = class extends n2 {
  constructor() {
    super(...arguments), this.transformWorldFromModelRS = e2(), this.transformWorldFromModelTH = n(), this.transformWorldFromModelTL = n();
  }
};

export {
  o4 as o,
  v,
  F,
  W
};
//# sourceMappingURL=chunk-ALQIX2AS.js.map
