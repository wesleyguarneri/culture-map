import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i
} from "./chunk-TV5XWCY5.js";
import {
  s as s2
} from "./chunk-Z4PRO5ND.js";
import {
  d
} from "./chunk-VYJ7IUDT.js";
import {
  e as e3
} from "./chunk-3NWWTJOW.js";
import {
  s as s3
} from "./chunk-TRF6JO5N.js";
import {
  e as e2
} from "./chunk-ZEOLGKXL.js";
import {
  s
} from "./chunk-EAVSYZXD.js";
import {
  o as o2
} from "./chunk-LGS63R4F.js";
import {
  a
} from "./chunk-U4EMQMDC.js";
import {
  e
} from "./chunk-D7C26LZP.js";
import {
  l
} from "./chunk-BZHHBBFX.js";
import {
  o
} from "./chunk-4TOSJLKR.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js
function T(T2, u) {
  const x = T2.fragment;
  u.hasVertexTangents ? (T2.attributes.add(e.TANGENT, "vec4"), T2.varyings.add("vTangent", "vec4"), u.doubleSidedMode === i.WindingOrder ? x.code.add(o2`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`) : x.code.add(o2`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)) : x.code.add(o2`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`), u.textureCoordinateType !== d.None && (T2.include(s2, u), x.uniforms.add(u.pbrTextureBindType === a.Pass ? new s3("normalTexture", (e4) => e4.textureNormal) : new s("normalTexture", (e4) => e4.textureNormal)), u.hasNormalTextureTransform && (x.uniforms.add(new e3("scale", (e4) => e4.scale ?? l)), x.uniforms.add(new e2("normalTextureTransformMatrix", (t) => t.normalTextureTransformMatrix ?? o))), x.code.add(o2`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`), u.hasNormalTextureTransform && x.code.add(o2`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`), x.code.add(o2`return tangentSpace * rawNormal;
}`));
}

export {
  T
};
//# sourceMappingURL=chunk-JA3N2M36.js.map
