import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o as o4
} from "./chunk-BMO2W6EC.js";
import {
  o as o2
} from "./chunk-IS4RJOPJ.js";
import {
  e as e3
} from "./chunk-XK3CKE5Q.js";
import {
  e as e2
} from "./chunk-AMH7CZMY.js";
import {
  o as o3
} from "./chunk-Q5JLNMWZ.js";
import {
  e
} from "./chunk-YGAXDKHF.js";
import {
  i
} from "./chunk-KOI252FF.js";
import {
  o
} from "./chunk-MZM4INJV.js";
import {
  l,
  n
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js
function f(r, e4) {
  e4.instancedDoublePrecision ? r.constants.add("cameraPosition", "vec3", l) : r.uniforms.add(new o2("cameraPosition", (r2, e5) => o(v, e5.camera.viewInverseTransposeMatrix[3] - r2.origin[0], e5.camera.viewInverseTransposeMatrix[7] - r2.origin[1], e5.camera.viewInverseTransposeMatrix[11] - r2.origin[2])));
}
function d(e4, a) {
  if (!a.instancedDoublePrecision) return void e4.uniforms.add(new e3("proj", (r, e5) => e5.camera.projectionMatrix), new o4("view", (e5, i2) => i(l2, i2.camera.viewMatrix, e5.origin)), new o2("localOrigin", (r) => r.origin));
  const o5 = (r) => o(v, r.camera.viewInverseTransposeMatrix[3], r.camera.viewInverseTransposeMatrix[7], r.camera.viewInverseTransposeMatrix[11]);
  e4.uniforms.add(new e3("proj", (r, e5) => e5.camera.projectionMatrix), new e3("view", (e5, i2) => i(l2, i2.camera.viewMatrix, o5(i2))), new e2("localOrigin", (r, e5) => o5(e5)));
}
var l2 = e();
var v = n();
function p(r) {
  r.uniforms.add(new e3("viewNormal", (r2, e4) => e4.camera.viewInverseTransposeMatrix));
}
function w(r) {
  r.uniforms.add(new o3("pixelRatio", (r2, e4) => e4.camera.pixelRatio / e4.overlayStretch));
}

export {
  f,
  d,
  p,
  w
};
//# sourceMappingURL=chunk-T257OY4U.js.map
