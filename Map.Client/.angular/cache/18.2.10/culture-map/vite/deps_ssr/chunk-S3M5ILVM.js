import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t as t5
} from "./chunk-VN66JXYD.js";
import {
  C,
  O,
  o as o7
} from "./chunk-X3HF4XA3.js";
import {
  T
} from "./chunk-JA3N2M36.js";
import {
  i
} from "./chunk-TV5XWCY5.js";
import {
  i as i3,
  t as t4
} from "./chunk-HFMWGPCY.js";
import {
  e as e7
} from "./chunk-H6YDISWJ.js";
import {
  n as n2
} from "./chunk-2IRGMYX2.js";
import {
  e as e6,
  h,
  p
} from "./chunk-EJJ75QBE.js";
import {
  e as e5
} from "./chunk-RV5QLAWU.js";
import {
  m as m2
} from "./chunk-T7SGV75D.js";
import {
  c,
  l,
  s as s5
} from "./chunk-Z4PRO5ND.js";
import {
  e as e4
} from "./chunk-MHGADXDL.js";
import {
  d,
  o as o4
} from "./chunk-VYJ7IUDT.js";
import {
  a as a4
} from "./chunk-2ZXVDYHF.js";
import {
  n as n3
} from "./chunk-LZSSTWLW.js";
import {
  v
} from "./chunk-ALQIX2AS.js";
import {
  a as a3
} from "./chunk-6YHZYHJS.js";
import {
  r,
  t as t3
} from "./chunk-LA4GCRJY.js";
import {
  o as o5
} from "./chunk-62ZEBDPC.js";
import {
  a as a5
} from "./chunk-ZFMS3XGM.js";
import {
  t as t2
} from "./chunk-YLQMUXQA.js";
import {
  _
} from "./chunk-4U7LUZFD.js";
import {
  i as i2
} from "./chunk-KSOKDIBG.js";
import {
  s as s6
} from "./chunk-TRF6JO5N.js";
import {
  o as o6
} from "./chunk-ZHVMMFTW.js";
import {
  e as e3,
  s as s4
} from "./chunk-EPIUUGS2.js";
import {
  m,
  s as s3
} from "./chunk-QI5HKZYN.js";
import {
  o as o3
} from "./chunk-RIZOHDTP.js";
import {
  a as a2
} from "./chunk-NCMX3DAD.js";
import {
  o as o2
} from "./chunk-HITI6WDM.js";
import {
  s as s2
} from "./chunk-EAVSYZXD.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  a
} from "./chunk-U4EMQMDC.js";
import {
  n
} from "./chunk-C7BQE556.js";
import {
  e as e2,
  s,
  t
} from "./chunk-FQBTLEUI.js";
import {
  e
} from "./chunk-NUICEVIH.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/VertexDiscardByOpacity.glsl.js
var r2;
function c2(c3, i4) {
  const t6 = c3.vertex;
  switch (t6.code.add(o`#define VERTEX_DISCARD_CUTOFF (1.0 - 1.0 / 255.0)`), i4.vertexDiscardMode) {
    case r2.None:
      t6.code.add(o`#define vertexDiscardByOpacity(_opacity_) {}`);
      break;
    case r2.Opaque:
      t6.code.add(o`#define vertexDiscardByOpacity(_opacity_) { if (_opacity_ >  VERTEX_DISCARD_CUTOFF) {  gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`);
      break;
    case r2.Transparent:
      t6.code.add(o`#define vertexDiscardByOpacity(_opacity_) { if (_opacity_ <= VERTEX_DISCARD_CUTOFF) {  gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`);
      break;
    case r2.COUNT:
      break;
    default:
      n(i4.vertexDiscardMode);
  }
}
!function(e8) {
  e8[e8.None = 0] = "None", e8[e8.Transparent = 1] = "Transparent", e8[e8.Opaque = 2] = "Opaque", e8[e8.COUNT = 3] = "COUNT";
}(r2 || (r2 = {}));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/ComponentTechniqueConfiguration.js
var v2;
!function(o8) {
  o8[o8.None = 0] = "None", o8[o8.NoOverlay = 1] = "NoOverlay", o8[o8.ColorOverlay = 2] = "ColorOverlay", o8[o8.ColorOverlayWithWater = 3] = "ColorOverlayWithWater", o8[o8.COUNT = 4] = "COUNT";
}(v2 || (v2 = {}));
var m3 = class extends t3 {
  constructor() {
    super(...arguments), this.output = o2.Color, this.textureCoordinateType = d.None, this.componentData = s3.Uniform, this.cullFace = e3.Back, this.vertexDiscardMode = r2.None, this.doubleSidedMode = i.WindingOrder, this.alphaDiscardMode = s4.Opaque, this.integratedMeshMode = v2.None, this.transparencyPassType = o5.NONE, this.ellipsoidMode = t5.Earth, this.pbrMode = c.Disabled, this.normalType = a2.Attribute, this.spherical = false, this.doublePrecisionRequiresObfuscation = false, this.hasVertexColors = false, this.hasNormals = false, this.hasSlicePlane = false, this.hasColorTexture = false, this.receiveAmbientOcclusion = true, this.receiveShadows = true, this.blendingEnabled = true, this.hasScreenSpaceReflections = false, this.hasPolygonOffset = false, this.hasMetallicRoughnessTexture = false, this.hasEmissionTexture = false, this.hasOcclusionTexture = false, this.hasNormalTexture = false, this.hasOccludees = false, this.multipassEnabled = false, this.cullAboveGround = false, this.hasNormalTextureTransform = false, this.hasCloudsReflections = true, this.snowCover = false, this.objectAndLayerIdColor = false;
  }
};
e([r({
  count: o2.COUNT
})], m3.prototype, "output", void 0), e([r({
  count: d.COUNT
})], m3.prototype, "textureCoordinateType", void 0), e([r({
  count: s3.COUNT
})], m3.prototype, "componentData", void 0), e([r({
  count: e3.COUNT
})], m3.prototype, "cullFace", void 0), e([r({
  count: r2.COUNT
})], m3.prototype, "vertexDiscardMode", void 0), e([r({
  count: i.COUNT
})], m3.prototype, "doubleSidedMode", void 0), e([r({
  count: s4.COUNT
})], m3.prototype, "alphaDiscardMode", void 0), e([r({
  count: v2.COUNT
})], m3.prototype, "integratedMeshMode", void 0), e([r({
  count: o5.COUNT
})], m3.prototype, "transparencyPassType", void 0), e([r({
  count: t5.COUNT
})], m3.prototype, "ellipsoidMode", void 0), e([r({
  count: c.COUNT
})], m3.prototype, "pbrMode", void 0), e([r({
  count: a2.COUNT
})], m3.prototype, "normalType", void 0), e([r()], m3.prototype, "spherical", void 0), e([r()], m3.prototype, "doublePrecisionRequiresObfuscation", void 0), e([r()], m3.prototype, "hasVertexColors", void 0), e([r()], m3.prototype, "hasNormals", void 0), e([r()], m3.prototype, "hasSlicePlane", void 0), e([r()], m3.prototype, "hasColorTexture", void 0), e([r()], m3.prototype, "receiveAmbientOcclusion", void 0), e([r()], m3.prototype, "receiveShadows", void 0), e([r()], m3.prototype, "blendingEnabled", void 0), e([r()], m3.prototype, "hasScreenSpaceReflections", void 0), e([r()], m3.prototype, "hasPolygonOffset", void 0), e([r()], m3.prototype, "hasMetallicRoughnessTexture", void 0), e([r()], m3.prototype, "hasEmissionTexture", void 0), e([r()], m3.prototype, "hasOcclusionTexture", void 0), e([r()], m3.prototype, "hasNormalTexture", void 0), e([r()], m3.prototype, "hasOccludees", void 0), e([r()], m3.prototype, "multipassEnabled", void 0), e([r()], m3.prototype, "cullAboveGround", void 0), e([r()], m3.prototype, "hasNormalTextureTransform", void 0), e([r()], m3.prototype, "hasCloudsReflections", void 0), e([r()], m3.prototype, "snowCover", void 0), e([r()], m3.prototype, "objectAndLayerIdColor", void 0), e([r({
  constValue: false
})], m3.prototype, "occlusionPass", void 0), e([r({
  constValue: a.Draw
})], m3.prototype, "pbrTextureBindType", void 0), e([r({
  constValue: true
})], m3.prototype, "hasSliceHighlight", void 0), e([r({
  constValue: false
})], m3.prototype, "hasSliceInVertexProgram", void 0), e([r({
  constValue: false
})], m3.prototype, "useCustomDTRExponentForWater", void 0), e([r({
  constValue: false
})], m3.prototype, "hasVertexTangents", void 0), e([r({
  constValue: true
})], m3.prototype, "supportsTextureAtlas", void 0), e([r({
  constValue: false
})], m3.prototype, "highStepCount", void 0), e([r({
  constValue: false
})], m3.prototype, "instancedDoublePrecision", void 0), e([r({
  constValue: false
})], m3.prototype, "hasModelTransformation", void 0), e([r({
  constValue: true
})], m3.prototype, "useFillLights", void 0), e([r({
  constValue: false
})], m3.prototype, "objectAndLayerIdColorInstanced", void 0);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ComputeMaterialColor.glsl.js
function l2(l4, s7) {
  l4.include(e5, s7), l4.fragment.include(i3);
  const i4 = l4.fragment;
  i4.uniforms.add(new o3("baseColor", (o8) => o8.baseColor)), i4.uniforms.add(new e7("objectOpacity", (o8) => o8.objectOpacity)), s7.hasVertexColors ? i4.code.add(o`vec3 _baseColor() {
return baseColor.rgb * vColor.rgb;
}
float _baseOpacity() {
return baseColor.a * vColor.a;
}`) : i4.code.add(o`vec3 _baseColor() {
return baseColor.rgb;
}
float _baseOpacity() {
return baseColor.a;
}`), i4.code.add(o`vec4 computeMaterialColor(vec4 textureColor, vec4 externalColor, int externalColorMixMode) {
vec3 baseColor = _baseColor();
float baseOpacity = _baseOpacity();
vec3 color = mixExternalColor(
baseColor,
textureColor.rgb,
externalColor.rgb,
externalColorMixMode
);
float opacity = objectOpacity * mixExternalOpacity(
baseOpacity,
textureColor.a,
externalColor.a,
externalColorMixMode
);
return vec4(color, opacity);
}`);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ComputeShadingNormal.glsl.js
function l3(l4, n4) {
  const s7 = l4.fragment;
  switch (n4.doubleSidedMode) {
    case i.None:
      s7.code.add(o`vec3 _adjustDoublesided(vec3 normal) {
return normal;
}`);
      break;
    case i.View:
      l4.include(v, n4), s7.code.add(o`vec3 _adjustDoublesided(vec3 normal) {
return dot(normal, vPositionWorldCameraRelative) > 0.0 ? -normal : normal;
}`);
      break;
    case i.WindingOrder:
      s7.code.add(o`vec3 _adjustDoublesided(vec3 normal) {
return gl_FrontFacing ? normal : -normal;
}`);
      break;
    default:
      n(n4.doubleSidedMode);
    case i.COUNT:
  }
  switch (n4.normalType) {
    case a2.Attribute:
    case a2.Compressed:
      l4.include(n2, n4), s7.code.add(o`vec3 shadingNormalWorld() {
return _adjustDoublesided(normalize(vNormalWorld));
}
vec3 shadingNormal_view() {
vec3 normal = normalize(vNormalView);
return gl_FrontFacing ? normal : -normal;
}`);
      break;
    case a2.ScreenDerivative:
      l4.include(v, n4), s7.code.add(o`vec3 shadingNormalWorld() {
return normalize(cross(
dFdx(vPositionWorldCameraRelative),
dFdy(vPositionWorldCameraRelative)
));
}
vec3 shadingNormal_view() {
return normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view)));
}`);
      break;
    case a2.Ground:
      n4.spherical ? (l4.include(v, n4), s7.code.add(o`vec3 shadingNormalWorld() {
return normalize(positionWorld());
}`)) : s7.code.add(o`vec3 shadingNormalWorld() {
return vec3(0.0, 0.0, 1.0);
}`), s7.code.add(o`vec3 shadingNormal_view() {
return normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view))).xyz;
}`);
      break;
    default:
      n(n4.normalType);
    case a2.COUNT:
  }
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadBaseColorTexture.glsl.js
function d2(d3, i4) {
  const l4 = d3.fragment;
  if (i4.hasColorTexture && (i4.output === o2.Color || i4.alphaDiscardMode !== s4.Opaque)) {
    d3.include(s5, i4);
    const e8 = i4.textureCoordinateType === d.Atlas;
    l4.uniforms.add(new s2("baseColorTexture", (e9) => e9.texture)), e8 ? (d3.include(e4), l4.code.add(o`vec4 readBaseColorTexture() {
return textureAtlasLookup(baseColorTexture, vuv0, vuvRegion);
}`)) : l4.code.add(o`vec4 readBaseColorTexture() {
return texture(baseColorTexture, vuv0);
}`);
  } else l4.code.add(o`vec4 readBaseColorTexture() { return vec4(1.0); }`);
}

// ../../../node_modules/@arcgis/core/chunks/ComponentShader.glsl.js
function V(V2) {
  const I2 = new o6();
  I2.include(v, V2), I2.include(n2, V2), I2.include(e5, V2), I2.include(o4, V2), I2.include(n3, V2), I2.include(m, V2), I2.include(t4, V2), I2.include(_, V2), I2.include(d2, V2), I2.include(c2, V2);
  const {
    vertex: _2,
    fragment: G
  } = I2;
  V2.pbrMode !== c.Normal && V2.pbrMode !== c.Schematic || (I2.include(l, V2), V2.hasNormalTexture && I2.include(T, V2));
  const F = V2.output === o2.Shadow || V2.output === o2.ShadowHighlight || V2.output === o2.ShadowExcludeHighlight;
  F && V2.componentData === s3.Varying ? _2.code.add(o`#define discardShadows(castShadows) { if(!castShadows) { gl_Position = vec4(1e38, 1e38, 1e38, 1.0); return; } }`) : _2.code.add(o`#define discardShadows(castShadows) {}`);
  const H = V2.integratedMeshMode === v2.ColorOverlay || V2.integratedMeshMode === v2.ColorOverlayWithWater, k = H && V2.output === o2.Color && V2.pbrMode === c.WaterOnIntegratedMesh;
  H && (I2.include(p, V2), I2.include(C, V2), V2.spherical ? _2.code.add(o`
      const float invEllipsoidRadius = ${o.float(1 / (V2.ellipsoidMode === t5.Earth ? s.radius : V2.ellipsoidMode === t5.Mars ? t.radius : e2.radius))};
      vec2 projectOverlay(vec3 pos) {
        return pos.xy / (1.0 + invEllipsoidRadius * pos.z);
      }
      `) : _2.code.add(o`vec2 projectOverlay(vec3 pos) { return pos.xy; }`)), k && (I2.varyings.add("tbnTangent", "vec3"), I2.varyings.add("tbnBiTangent", "vec3"), I2.varyings.add("groundNormal", "vec3")), _2.code.add(o`
    void main() {
      bool castShadows;
      vec4 externalColor = forwardExternalColor(castShadows);
      discardShadows(castShadows);

      vertexDiscardByOpacity(externalColor.a);

      ${V2.output === o2.ObjectAndLayerIdColor ? o`externalColor.a = 1.0;` : ""}

      if (externalColor.a < ${o.float(t2)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      forwardPosition(readElevationOffset());
      forwardNormal();
      forwardTextureCoordinates();
      forwardVertexColor();
      forwardLinearDepth();
      ${V2.output === o2.ObjectAndLayerIdColor ? o`forwardObjectAndLayerIdColor();` : ""}
      ${k ? V2.spherical ? o`
                groundNormal = normalize(positionWorld());
                tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), groundNormal));
                tbnBiTangent = normalize(cross(groundNormal, tbnTangent));` : o`
                groundNormal = vec3(0.0, 0.0, 1.0);
                tbnTangent = vec3(1.0, 0.0, 0.0);
                tbnBiTangent = vec3(0.0, 1.0, 0.0);` : ""}
      ${H ? o`setOverlayVTC(projectOverlay(position));` : ""}
    }
  `), V2.output === o2.Color && (G.include(i2), I2.include(a5, V2), I2.include(l2, V2), I2.include(l3, V2), I2.include(p, V2), V2.transparencyPassType === o5.ColorAlpha && (I2.outputs.add("fragColor", "vec4", 0), I2.outputs.add("fragAlpha", "float", 1)), V2.receiveShadows ? (I2.include(m2, V2), G.code.add(o`float evaluateShadow() {
return readShadowMap(vPositionWorldCameraRelative, linearDepth);
}`)) : G.code.add(o`float evaluateShadow() { return 0.0; }`), H && G.uniforms.add(new s6("ovColorTex", (e8, o8) => O(e8, o8))), G.code.add(o`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);
        ${V2.multipassEnabled ? o`terrainDepthTest(vPosition_view.z);` : ""}

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        vec4 externalColor;
        int externalColorMixMode;
        readExternalColor(externalColor, externalColorMixMode);

        vec4 materialColor = computeMaterialColor(
          textureColor,
          externalColor,
          externalColorMixMode
        );
        ${H ? o`vec4 overlayColor = getOverlayColor(ovColorTex, vtcOverlay);` : ""}
    `), V2.pbrMode === c.Normal || V2.pbrMode === c.Schematic ? (a4(G), G.code.add(o`
        ${V2.pbrMode === c.Normal ? o`
                applyPBRFactors();
                if (int(externalColorMixMode) == 3) {
                  mrr = vec3(0.0, 0.6, 0.2);
                }` : ""}
        vec3 normalVertex = shadingNormalWorld();
        float additionalIrradiance = 0.02 * mainLightIntensity[2];
      `), V2.hasNormalTexture ? G.code.add(o`mat3 tangentSpace = computeTangentSpace(normalVertex, vPositionWorldCameraRelative, vuv0);
vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`) : G.code.add(o`vec3 shadingNormal = normalVertex;`), G.code.add(o`${V2.spherical ? o`vec3 normalGround = normalize(positionWorld());` : o`vec3 normalGround = vec3(0.0, 0.0, 1.0);`}
      `), G.code.add(o`
        vec3 viewDir = normalize(vPositionWorldCameraRelative);
        float ssao = 1.0 - occlusion * evaluateAmbientOcclusionInverse();
        ${V2.snowCover ? o`
                vec3 surfaceNormal = normalize(shadingNormalWorld());
                float snow = smoothstep(0.5, 0.55, dot(surfaceNormal, normalize(positionWorld())));
                materialColor.rgb = mix(materialColor.rgb, vec3(1.1), snow);
                ssao = mix(ssao, 0.5 * ssao, snow);
                shadingNormal = mix(shadingNormal, surfaceNormal, snow);` : ""}

        ${H ? o` materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;` : ""}

        vec3 additionalLight = evaluateAdditionalLighting(ssao, positionWorld());
        vec4 shadedColor = vec4(evaluateSceneLightingPBR(shadingNormal, materialColor.rgb, evaluateShadow(), ssao, additionalLight, viewDir, normalGround, mrr, emission, additionalIrradiance), materialColor.a);
        `)) : (V2.receiveShadows ? G.code.add(o`float shadow = evaluateShadow();`) : V2.spherical ? (h(G), G.code.add(o`float additionalAmbientScale = additionalDirectedAmbientLight(positionWorld());
float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);`)) : G.code.add(o`float shadow = 0.0;`), k && G.uniforms.add(new s6("ovNormalTex", (e8, o8) => o8.overlay?.getTexture(o7.WaterNormal))), V2.snowCover && G.code.add(o`vec3 surfaceNormal = normalize(cross(dFdx(vPositionWorldCameraRelative), dFdy(vPositionWorldCameraRelative)));
float snow = smoothstep(0.5, 0.55, dot(surfaceNormal, normalize(positionWorld())));
materialColor.rgb = mix(materialColor.rgb, vec3(1), snow);`), G.code.add(o`
        float ambientOcclusion = evaluateAmbientOcclusion();
        vec3 additionalLight = evaluateAdditionalLighting(ambientOcclusion, positionWorld());

        ${H ? o` materialColor = materialColor * (1.0 - overlayColor.a) + overlayColor;` : ""}

        vec4 shadedColor = vec4(evaluateSceneLighting(shadingNormalWorld(), materialColor.rgb, shadow, ambientOcclusion, additionalLight), materialColor.a);
      ${k ? o`
              vec4 overlayWaterMask = getOverlayColor(ovNormalTex, vtcOverlay);
              float waterNormalLength = length(overlayWaterMask);
              if (waterNormalLength > 0.95) {
                mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, groundNormal);
                vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, overlayColor, -normalize(vPositionWorldCameraRelative), shadow, groundNormal, tbnMatrix, vPosition_view, positionWorld());
                vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                // un-gamma the ground color to mix in linear space
                shadedColor = mix(shadedColor, waterColorNonLinear, waterColorLinear.w);
              }` : ""}
      `)), G.code.add(o`
        fragColor = highlightSlice(shadedColor, vPositionWorldCameraRelative);
        ${V2.transparencyPassType === o5.ColorAlpha ? o`
                fragColor = premultiplyAlpha(fragColor);
                fragAlpha = fragColor.a;` : ""}
      }
    `));
  const q = V2.output === o2.Depth;
  return (q || F || V2.output === o2.ViewshedShadow) && (q || I2.include(e6, V2), G.code.add(o`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        ${q ? "" : o`outputDepth(linearDepth);`}
      }
    `)), V2.output === o2.Normal && (I2.include(l3, V2), G.code.add(o`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        // note: the alpha component needs to be 1.0 in order for this material to influence ambient occlusion,
        // see the ssao fragment shader
        float alpha = ${V2.normalType === a2.Ground ? "0.0" : "1.0"};
        fragColor = vec4(vec3(.5) + .5 * shadingNormal_view(), alpha);
      }
    `)), V2.output === o2.ObjectAndLayerIdColor && I2.fragment.code.add(o`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        ${H ? o`fragColor = getOverlayColorTexel(vtcOverlay);` : "outputObjectAndLayerIdColor();"}
      }
    `), V2.output === o2.Highlight && (I2.include(a3), G.code.add(o`
      void main() {
        discardBySlice(vPositionWorldCameraRelative);

        vec4 textureColor = readBaseColorTexture();
        discardOrAdjustAlpha(textureColor);

        ${H ? o`
                vec4 overlayColor = getCombinedOverlayColor();
                if (overlayColor.a == 0.0) {
                  fragColor = vec4(0.0);
                  return;
                }` : ""}

        outputHighlight();
      }
    `)), I2;
}
var I = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: V
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  r2 as r,
  v2 as v,
  m3 as m,
  V,
  I
};
//# sourceMappingURL=chunk-S3M5ILVM.js.map
