import {
  r as r2,
  t
} from "./chunk-FHW2TG7X.js";
import {
  p
} from "./chunk-KTRZHJ2M.js";
import {
  o as o6,
  r
} from "./chunk-VUVXW4AC.js";
import {
  c
} from "./chunk-AIS5CSUZ.js";
import {
  e as e4
} from "./chunk-52UEU7LG.js";
import {
  o as o4
} from "./chunk-WJKYGQOY.js";
import {
  o as o5
} from "./chunk-GY52WOQZ.js";
import {
  e as e5
} from "./chunk-GAYJ4YPJ.js";
import {
  o as o3
} from "./chunk-SZWWBMQN.js";
import {
  e as e3
} from "./chunk-4MMTPKY4.js";
import {
  j
} from "./chunk-JYODC3YQ.js";
import {
  o as o2
} from "./chunk-BQZBOYBD.js";
import {
  e as e2
} from "./chunk-TYQXPPSP.js";
import {
  o
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js
var O = class extends t {
  constructor() {
    super(...arguments), this.instancedDoublePrecision = false, this.hasModelTransformation = false;
  }
};
e([r2()], O.prototype, "instancedDoublePrecision", void 0), e([r2()], O.prototype, "hasModelTransformation", void 0);
var h = e2();
function N(e6, o7) {
  const i = o7.hasModelTransformation, c2 = o7.instancedDoublePrecision;
  i && (e6.vertex.uniforms.add(new e5("model", (e7) => e7.modelTransformation ?? o2)), e6.vertex.uniforms.add(new e4("normalLocalOriginFromModel", (e7) => (j(h, e7.modelTransformation ?? o2), h)))), o7.instanced && c2 && (e6.attributes.add(e3.INSTANCEMODELORIGINHI, "vec3"), e6.attributes.add(e3.INSTANCEMODELORIGINLO, "vec3"), e6.attributes.add(e3.INSTANCEMODEL, "mat3"), e6.attributes.add(e3.INSTANCEMODELNORMAL, "mat3"));
  const v = e6.vertex;
  c2 && (v.include(c, o7), v.uniforms.add(new o5("viewOriginHi", (e7, r3) => o6(o(T, r3.camera.viewInverseTransposeMatrix[3], r3.camera.viewInverseTransposeMatrix[7], r3.camera.viewInverseTransposeMatrix[11]), T)), new o5("viewOriginLo", (e7, r3) => r(o(T, r3.camera.viewInverseTransposeMatrix[3], r3.camera.viewInverseTransposeMatrix[7], r3.camera.viewInverseTransposeMatrix[11]), T)))), v.code.add(o3`
    vec3 getVertexInLocalOriginSpace() {
      return ${i ? c2 ? "(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz" : "(model * localPosition()).xyz" : c2 ? "instanceModel * localPosition().xyz" : "localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${c2 ? o3`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;` : "return vpos;"}
    }
    `), v.code.add(o3`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${i ? c2 ? "normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)" : "normalLocalOriginFromModel * _normal.xyz" : c2 ? "instanceModelNormal * _normal.xyz" : "_normal.xyz"});
    }
    `), o7.output === o4.Normal && (p(v), v.code.add(o3`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${i ? c2 ? "vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)" : "vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)" : c2 ? "vec4(instanceModelNormal * _normal.xyz, 1.0)" : "_normal"}).xyz);
    }
    `)), o7.hasVertexTangents && v.code.add(o3`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${i ? c2 ? "return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);" : "return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);" : c2 ? "return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);" : "return _tangent;"}
    }`);
}
var T = n();

export {
  O,
  N
};
//# sourceMappingURL=chunk-PEZTN5WV.js.map