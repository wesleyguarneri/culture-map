import {
  T
} from "./chunk-JS5N3Y4L.js";
import {
  e as e4
} from "./chunk-PO7V7AQE.js";
import {
  e as e5,
  i,
  x
} from "./chunk-PZH3N2FW.js";
import {
  i as i2,
  s as s2
} from "./chunk-U4WO2GC4.js";
import {
  n
} from "./chunk-A6XTYETO.js";
import {
  h,
  p,
  t as t3,
  u
} from "./chunk-EKCE56CG.js";
import {
  m,
  x as x2
} from "./chunk-WRHEXEG3.js";
import {
  n as n3
} from "./chunk-TEOUFCJA.js";
import {
  c,
  l
} from "./chunk-GTZOXRB5.js";
import {
  d,
  o as o5
} from "./chunk-PPMHRAOP.js";
import {
  a as a3
} from "./chunk-75N5YDQB.js";
import {
  a as a2
} from "./chunk-JUTKZ3GO.js";
import {
  N
} from "./chunk-PEZTN5WV.js";
import {
  l as l2
} from "./chunk-33LKI2Y7.js";
import {
  e as e6
} from "./chunk-MBMY7SS6.js";
import {
  o as o6
} from "./chunk-VIIVMRRO.js";
import {
  a as a4
} from "./chunk-ZKSEQXDM.js";
import {
  o as o8
} from "./chunk-DXGCBLDW.js";
import {
  n as n2
} from "./chunk-Z3FHX4FD.js";
import {
  o as o7
} from "./chunk-SUUOAZQT.js";
import {
  t as t2
} from "./chunk-TGHJVD7I.js";
import {
  P
} from "./chunk-OZG2NNUW.js";
import {
  d as d2,
  f
} from "./chunk-KTRZHJ2M.js";
import {
  e as e7
} from "./chunk-ACZYDHB3.js";
import {
  s
} from "./chunk-UCPBGEQD.js";
import {
  o as o9
} from "./chunk-SIZK72CP.js";
import {
  a,
  t
} from "./chunk-PA7WZX2U.js";
import {
  e as e3
} from "./chunk-52UEU7LG.js";
import {
  o as o3
} from "./chunk-WJKYGQOY.js";
import {
  e as e2
} from "./chunk-PPMDUJ4E.js";
import {
  o as o4
} from "./chunk-R5ZE5A4K.js";
import {
  o as o2
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-4MMTPKY4.js";
import {
  o
} from "./chunk-TYQXPPSP.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/TextureTransformUV.glsl.js
function t4(e8, t5) {
  t5.hasColorTextureTransform ? (e8.vertex.uniforms.add(new e3("colorTextureTransformMatrix", (e9) => e9.colorTextureTransformMatrix ?? o)), e8.varyings.add("colorUV", "vec2"), e8.vertex.code.add(o2`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : e8.vertex.code.add(o2`void forwardColorUV(){}`);
}
function s3(t5, s4) {
  s4.hasNormalTextureTransform && s4.textureCoordinateType !== d.None ? (t5.vertex.uniforms.add(new e3("normalTextureTransformMatrix", (e8) => e8.normalTextureTransformMatrix ?? o)), t5.varyings.add("normalUV", "vec2"), t5.vertex.code.add(o2`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : t5.vertex.code.add(o2`void forwardNormalUV(){}`);
}
function i3(t5, s4) {
  s4.hasEmissionTextureTransform && s4.textureCoordinateType !== d.None ? (t5.vertex.uniforms.add(new e3("emissiveTextureTransformMatrix", (e8) => e8.emissiveTextureTransformMatrix ?? o)), t5.varyings.add("emissiveUV", "vec2"), t5.vertex.code.add(o2`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : t5.vertex.code.add(o2`void forwardEmissiveUV(){}`);
}
function d3(t5, s4) {
  s4.hasOcclusionTextureTransform && s4.textureCoordinateType !== d.None ? (t5.vertex.uniforms.add(new e3("occlusionTextureTransformMatrix", (e8) => e8.occlusionTextureTransformMatrix ?? o)), t5.varyings.add("occlusionUV", "vec2"), t5.vertex.code.add(o2`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : t5.vertex.code.add(o2`void forwardOcclusionUV(){}`);
}
function n4(t5, s4) {
  s4.hasMetallicRoughnessTextureTransform && s4.textureCoordinateType !== d.None ? (t5.vertex.uniforms.add(new e3("metallicRoughnessTextureTransformMatrix", (e8) => e8.metallicRoughnessTextureTransformMatrix ?? o)), t5.varyings.add("metallicRoughnessUV", "vec2"), t5.vertex.code.add(o2`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)) : t5.vertex.code.add(o2`void forwardMetallicRoughnessUV(){}`);
}

// ../../../node_modules/@arcgis/core/chunks/DefaultMaterial.glsl.js
function H(H2) {
  const J2 = new o9(), {
    vertex: K,
    fragment: Q,
    varyings: X
  } = J2;
  if (d2(K, H2), J2.include(o7), X.add("vpos", "vec3"), J2.include(l2, H2), J2.include(N, H2), J2.include(a2, H2), J2.include(t4, H2), H2.output === o3.Color) {
    J2.include(s3, H2), J2.include(i3, H2), J2.include(d3, H2), J2.include(n4, H2), f(K, H2), J2.include(t, H2), J2.include(o8, H2);
    const o10 = H2.normalType === a.Attribute || H2.normalType === a.Compressed;
    o10 && H2.offsetBackfaces && J2.include(e5), J2.include(T, H2), J2.include(n, H2), H2.instancedColor && J2.attributes.add(e.INSTANCECOLOR, "vec4"), X.add("vPositionLocal", "vec3"), J2.include(o5, H2), J2.include(n2, H2), J2.include(i, H2), J2.include(e6, H2), K.uniforms.add(new e7("externalColor", (e8) => e8.externalColor)), X.add("vcolorExt", "vec4"), H2.multipassEnabled && X.add("depth", "float"), K.code.add(o2`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${H2.instancedColor ? "vcolorExt *= instanceColor * 0.003921568627451;" : ""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${o2.float(t2)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${o10 ? o2`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));` : ""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${H2.hasVertexTangents ? "vTangent = dpTransformVertexTangent(tangent);" : ""}
          gl_Position = transformPosition(proj, view, vpos);
          ${o10 && H2.offsetBackfaces ? "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);" : ""}
        }

        ${H2.multipassEnabled ? "depth = (view * vec4(vpos, 1.0)).z;" : ""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `), J2.include(P, H2), J2.include(p, H2), J2.include(t3, H2), J2.include(s2, H2), J2.include(H2.instancedDoublePrecision ? m : x2, H2), J2.include(a4, H2), f(Q, H2), Q.uniforms.add(K.uniforms.get("localOrigin"), new e2("ambient", (e8) => e8.ambient), new e2("diffuse", (e8) => e8.diffuse), new o4("opacity", (e8) => e8.opacity), new o4("layerOpacity", (e8) => e8.layerOpacity)), H2.hasColorTexture && Q.uniforms.add(new s("tex", (e8) => e8.texture)), J2.include(l, H2), J2.include(n3, H2), Q.include(i2), J2.include(e4, H2), u(Q), h(Q), a3(Q), H2.transparencyPassType === o6.ColorAlpha && (J2.outputs.add("fragColor", "vec4", 0), J2.outputs.add("fragAlpha", "float", 1)), Q.code.add(o2`
      void main() {
        discardBySlice(vpos);
        ${H2.multipassEnabled ? "terrainDepthTest(depth);" : ""}
        ${H2.hasColorTexture ? o2`
                vec4 texColor = texture(tex, ${H2.hasColorTextureTransform ? o2`colorUV` : o2`vuv0`});
                ${H2.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
                discardOrAdjustAlpha(texColor);` : o2`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${H2.normalType === a.ScreenDerivative ? o2`
                vec3 normal = screenDerivativeNormal(vPositionLocal);` : o2`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${H2.pbrMode === c.Normal ? "applyPBRFactors();" : ""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${H2.receiveShadows ? "readShadowMap(vpos, linearDepth)" : H2.spherical ? "lightingGlobalFactor * (1.0 - additionalAmbientScale)" : "0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${H2.hasVertexColors ? o2`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : o2`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${H2.hasNormalTexture ? o2`
                mat3 tangentSpace = ${H2.hasVertexTangents ? "computeTangentSpace(normal);" : "computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${H2.hasNormalTextureTransform ? o2`normalUV` : "vuv0"});` : o2`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${H2.spherical ? o2`normalize(posWorld);` : o2`vec3(0.0, 0.0, 1.0);`}

        ${H2.snowCover ? o2`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);` : ""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${H2.pbrMode === c.Normal || H2.pbrMode === c.Schematic ? o2`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${H2.snowCover ? o2`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);` : ""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);` : o2`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${H2.transparencyPassType === o6.ColorAlpha ? o2`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;` : ""}
      }
    `);
  }
  return J2.include(x, H2), J2;
}
var J = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: H
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  H,
  J
};
//# sourceMappingURL=chunk-PDYGQYJC.js.map
