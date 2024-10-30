import {
  e as e2
} from "./chunk-3WPOFZBT.js";
import {
  d,
  o as o3
} from "./chunk-PPMHRAOP.js";
import {
  s as s2
} from "./chunk-UCPBGEQD.js";
import {
  o as o2
} from "./chunk-GY52WOQZ.js";
import {
  e
} from "./chunk-PPMDUJ4E.js";
import {
  s
} from "./chunk-ZTT6ENBS.js";
import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  a
} from "./chunk-R3F4JMNC.js";
import {
  n
} from "./chunk-N6TJI25E.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTextureCoordinates.glsl.js
function s3(s4, a2) {
  switch (s4.include(o3, a2), a2.textureCoordinateType) {
    case d.Default:
    case d.Compressed:
      return void s4.fragment.code.add(o`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);
    case d.Atlas:
      return s4.include(e2), void s4.fragment.code.add(o`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);
    default:
      n(a2.textureCoordinateType);
    case d.None:
    case d.COUNT:
      return;
  }
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js
var c;
!function(e3) {
  e3[e3.Disabled = 0] = "Disabled", e3[e3.Normal = 1] = "Normal", e3[e3.Schematic = 2] = "Schematic", e3[e3.Water = 3] = "Water", e3[e3.WaterOnIntegratedMesh = 4] = "WaterOnIntegratedMesh", e3[e3.Simplified = 5] = "Simplified", e3[e3.TerrainWithWater = 6] = "TerrainWithWater", e3[e3.COUNT = 7] = "COUNT";
}(c || (c = {}));
function l2(n2, u) {
  const l3 = n2.fragment, m = u.hasMetallicRoughnessTexture || u.hasEmissionTexture || u.hasOcclusionTexture;
  if (u.pbrMode === c.Normal && m && n2.include(s3, u), u.pbrMode !== c.Schematic) {
    if (u.pbrMode !== c.Disabled) {
      if (u.pbrMode === c.Normal) {
        l3.code.add(o`vec3 mrr;
vec3 emission;
float occlusion;`);
        const e3 = u.pbrTextureBindType;
        u.hasMetallicRoughnessTexture && (l3.uniforms.add(e3 === a.Pass ? new s2("texMetallicRoughness", (e4) => e4.textureMetallicRoughness) : new s("texMetallicRoughness", (e4) => e4.textureMetallicRoughness)), l3.code.add(o`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)), u.hasEmissionTexture && (l3.uniforms.add(e3 === a.Pass ? new s2("texEmission", (e4) => e4.textureEmissive) : new s("texEmission", (e4) => e4.textureEmissive)), l3.code.add(o`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)), u.hasOcclusionTexture ? (l3.uniforms.add(e3 === a.Pass ? new s2("texOcclusion", (e4) => e4.textureOcclusion) : new s("texOcclusion", (e4) => e4.textureOcclusion)), l3.code.add(o`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)) : l3.code.add(o`float getBakedOcclusion() { return 1.0; }`), e3 === a.Pass ? l3.uniforms.add(new e("emissionFactor", (e4) => e4.emissiveFactor), new e("mrrFactors", (e4) => e4.mrrFactors)) : l3.uniforms.add(new o2("emissionFactor", (e4) => e4.emissiveFactor), new o2("mrrFactors", (e4) => e4.mrrFactors)), l3.code.add(o`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${u.hasMetallicRoughnessTexture ? o`applyMetallnessAndRoughness(${u.hasMetallicRoughnessTextureTransform ? o`metallicRoughnessUV` : "vuv0"});` : ""}

      ${u.hasEmissionTexture ? o`applyEmission(${u.hasEmissiveTextureTransform ? o`emissiveUV` : "vuv0"});` : ""}

      ${u.hasOcclusionTexture ? o`applyOcclusion(${u.hasOcclusionTextureTransform ? o`occlusionUV` : "vuv0"});` : ""}
    }
  `);
      }
    } else l3.code.add(o`float getBakedOcclusion() { return 1.0; }`);
  } else l3.code.add(o`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);
}

export {
  s3 as s,
  c,
  l2 as l
};
//# sourceMappingURL=chunk-GTZOXRB5.js.map
