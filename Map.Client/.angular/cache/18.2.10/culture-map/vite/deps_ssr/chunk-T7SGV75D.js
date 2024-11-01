import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a as a3,
  e as e3
} from "./chunk-7GRSBOIB.js";
import {
  e
} from "./chunk-PFTDB6ZJ.js";
import {
  e as e2
} from "./chunk-ZDFN6OZC.js";
import {
  s
} from "./chunk-TRF6JO5N.js";
import {
  a as a2
} from "./chunk-AABDXAD3.js";
import {
  n as n2,
  o as o2
} from "./chunk-LGS63R4F.js";
import {
  a
} from "./chunk-U4EMQMDC.js";
import {
  o
} from "./chunk-YGAXDKHF.js";
import {
  n
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sDrawUniform.js
var o3 = class extends a2 {
  constructor(r, o4, s2) {
    super(r, "mat4", a.Draw, (e4, s3, t, i) => e4.setUniformMatrix4fv(r, o4(s3, t, i)), s2);
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js
var v = class extends n2 {
  constructor() {
    super(...arguments), this.modelTransformation = o;
  }
};
var h = class extends v {
  constructor() {
    super(...arguments), this.origin = n();
  }
};
function m(e4, s2) {
  s2.receiveShadows && (e4.fragment.uniforms.add(new e3("shadowMapMatrix", (e5, s3) => s3.shadowMap.getShadowMapMatrices(e5.origin), 4)), f(e4));
}
function x(e4, s2) {
  s2.receiveShadows && (e4.fragment.uniforms.add(new o3("shadowMapMatrix", (e5, s3) => s3.shadowMap.getShadowMapMatrices(e5.origin), 4)), f(e4));
}
function f(e4) {
  const s2 = e4.fragment;
  s2.include(a3), s2.uniforms.add(new s("shadowMap", (e5, s3) => s3.shadowMap.depthTexture), new e("numCascades", (e5, s3) => s3.shadowMap.numCascades), new e2("cascadeDistances", (e5, s3) => s3.shadowMap.cascadeDistances)), s2.code.add(o2`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`);
}

export {
  h,
  m,
  x
};
//# sourceMappingURL=chunk-T7SGV75D.js.map
