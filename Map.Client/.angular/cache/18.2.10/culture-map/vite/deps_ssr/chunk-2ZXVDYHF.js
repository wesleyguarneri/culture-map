import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e
} from "./chunk-AMH7CZMY.js";
import {
  o
} from "./chunk-LGS63R4F.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js
function t(n) {
  n.uniforms.add(new e("mainLightDirection", (i, n2) => n2.lighting.mainLight.direction));
}
function a(n) {
  n.uniforms.add(new e("mainLightIntensity", (i, n2) => n2.lighting.mainLight.intensity));
}
function o2(i) {
  t(i.fragment), a(i.fragment), i.fragment.code.add(o`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`);
}

export {
  t,
  a,
  o2 as o
};
//# sourceMappingURL=chunk-2ZXVDYHF.js.map