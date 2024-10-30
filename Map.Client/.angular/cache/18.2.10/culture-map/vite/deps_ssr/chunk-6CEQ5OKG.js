import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e3,
  i,
  x
} from "./chunk-ARXBOZID.js";
import {
  i as i2,
  s as s2
} from "./chunk-HFMWGPCY.js";
import {
  h,
  p,
  t as t3,
  u
} from "./chunk-EJJ75QBE.js";
import {
  e as e4
} from "./chunk-RV5QLAWU.js";
import {
  m,
  x as x2
} from "./chunk-T7SGV75D.js";
import {
  n as n2
} from "./chunk-AA5NMQ6N.js";
import {
  c,
  l
} from "./chunk-Z4PRO5ND.js";
import {
  o as o4
} from "./chunk-VYJ7IUDT.js";
import {
  a as a2,
  t as t4
} from "./chunk-2ZXVDYHF.js";
import {
  o as o7
} from "./chunk-23Q4INNG.js";
import {
  n
} from "./chunk-LZSSTWLW.js";
import {
  o as o6
} from "./chunk-ALQIX2AS.js";
import {
  a
} from "./chunk-UVHNQY4M.js";
import {
  N
} from "./chunk-I47GCEJP.js";
import {
  l as l2
} from "./chunk-ZTMARHUQ.js";
import {
  o as o5
} from "./chunk-62ZEBDPC.js";
import {
  a as a3
} from "./chunk-ZFMS3XGM.js";
import {
  t as t2
} from "./chunk-YLQMUXQA.js";
import {
  P
} from "./chunk-4U7LUZFD.js";
import {
  d,
  f
} from "./chunk-T257OY4U.js";
import {
  e as e5
} from "./chunk-ZDFN6OZC.js";
import {
  s
} from "./chunk-TRF6JO5N.js";
import {
  o as o8
} from "./chunk-ZHVMMFTW.js";
import {
  t
} from "./chunk-NCMX3DAD.js";
import {
  o as o2
} from "./chunk-HITI6WDM.js";
import {
  e as e2
} from "./chunk-AMH7CZMY.js";
import {
  o as o3
} from "./chunk-Q5JLNMWZ.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  e
} from "./chunk-D7C26LZP.js";

// ../../../node_modules/@arcgis/core/chunks/RealisticTree.glsl.js
function I(I2) {
  const R2 = new o8(), {
    vertex: z,
    fragment: k,
    varyings: G
  } = R2;
  return d(z, I2), R2.include(o6), G.add("vpos", "vec3"), R2.include(l2, I2), R2.include(N, I2), R2.include(a, I2), I2.output === o2.Color && (f(R2.vertex, I2), R2.include(t, I2), R2.include(o7, I2), I2.offsetBackfaces && R2.include(e3), I2.instancedColor && R2.attributes.add(e.INSTANCECOLOR, "vec4"), G.add("vNormalWorld", "vec3"), G.add("localvpos", "vec3"), I2.multipassEnabled && G.add("depth", "float"), R2.include(o4, I2), R2.include(n, I2), R2.include(i, I2), R2.include(e4, I2), z.uniforms.add(new e5("externalColor", (e6) => e6.externalColor)), G.add("vcolorExt", "vec4"), z.code.add(o`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${I2.instancedColor ? "vcolorExt *= instanceColor * 0.003921568627451;" : ""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${o.float(t2)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${I2.offsetBackfaces ? "gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);" : ""}
          }
          ${I2.multipassEnabled ? o`depth = (view * vec4(vpos, 1.0)).z;` : ""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)), I2.output === o2.Color && (R2.include(P, I2), R2.include(p, I2), R2.include(t3, I2), R2.include(s2, I2), R2.include(I2.instancedDoublePrecision ? m : x2, I2), R2.include(a3, I2), f(R2.fragment, I2), t4(k), u(k), h(k), k.uniforms.add(z.uniforms.get("localOrigin"), z.uniforms.get("view"), new e2("ambient", (e6) => e6.ambient), new e2("diffuse", (e6) => e6.diffuse), new o3("opacity", (e6) => e6.opacity), new o3("layerOpacity", (e6) => e6.layerOpacity)), I2.hasColorTexture && k.uniforms.add(new s("tex", (e6) => e6.texture)), R2.include(l, I2), R2.include(n2, I2), k.include(i2), I2.transparencyPassType === o5.ColorAlpha && (R2.outputs.add("fragColor", "vec4", 0), R2.outputs.add("fragAlpha", "float", 1)), a2(k), k.code.add(o`
      void main() {
        discardBySlice(vpos);
        ${I2.multipassEnabled ? o`terrainDepthTest(depth);` : ""}
        ${I2.hasColorTexture ? o`
                vec4 texColor = texture(tex, ${I2.hasColorTextureTransform ? o`colorUV` : o`vuv0`});
                ${I2.textureAlphaPremultiplied ? "texColor.rgb /= texColor.a;" : ""}
                discardOrAdjustAlpha(texColor);` : o`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${I2.pbrMode === c.Normal ? "applyPBRFactors();" : ""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${I2.receiveShadows ? "float shadow = readShadowMap(vpos, linearDepth);" : I2.spherical ? "float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);" : "float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${I2.hasVertexColors ? o`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : o`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${I2.snowCover ? o`albedo = mix(albedo, vec3(1), 0.9);` : o``}
        ${o`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${I2.pbrMode === c.Normal || I2.pbrMode === c.Schematic ? I2.spherical ? o`vec3 normalGround = normalize(vpos + localOrigin);` : o`vec3 normalGround = vec3(0.0, 0.0, 1.0);` : o``}
        ${I2.pbrMode === c.Normal || I2.pbrMode === c.Schematic ? o`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${I2.snowCover ? o`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);` : ""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);` : o`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${I2.transparencyPassType === o5.ColorAlpha ? o`
                fragColor = premultiplyAlpha(fragColor);
                fragAlpha = fragColor.a;` : ""}
      }
    `)), R2.include(x, I2), R2;
}
var R = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: I
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  I,
  R
};
//# sourceMappingURL=chunk-6CEQ5OKG.js.map
