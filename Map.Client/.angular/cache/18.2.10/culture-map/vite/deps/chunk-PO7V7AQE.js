import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  n
} from "./chunk-N6TJI25E.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js
function e(e2, o2) {
  const n2 = e2.fragment;
  switch (n2.code.add(o`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`), o2.doubleSidedMode) {
    case i.None:
      n2.code.add(o`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);
      break;
    case i.View:
      n2.code.add(o`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);
      break;
    case i.WindingOrder:
      n2.code.add(o`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);
      break;
    default:
      n(o2.doubleSidedMode);
    case i.COUNT:
  }
}
var i;
!function(a) {
  a[a.None = 0] = "None", a[a.View = 1] = "View", a[a.WindingOrder = 2] = "WindingOrder", a[a.COUNT = 3] = "COUNT";
}(i || (i = {}));

export {
  e,
  i
};
//# sourceMappingURL=chunk-PO7V7AQE.js.map
