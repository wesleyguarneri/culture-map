import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t as t5
} from "./chunk-2UXQPHEA.js";
import {
  f as f2,
  g,
  o as o9
} from "./chunk-X3HF4XA3.js";
import {
  r
} from "./chunk-TNVMQBUP.js";
import {
  e as e3,
  h,
  p as p2,
  t as t3,
  u
} from "./chunk-EJJ75QBE.js";
import {
  h as h2,
  x
} from "./chunk-T7SGV75D.js";
import {
  c
} from "./chunk-Z4PRO5ND.js";
import {
  o as o4
} from "./chunk-VYJ7IUDT.js";
import {
  a as a3,
  t as t4
} from "./chunk-2ZXVDYHF.js";
import {
  o as o6
} from "./chunk-23Q4INNG.js";
import {
  i as i2,
  n as n2,
  t as t2
} from "./chunk-LZSSTWLW.js";
import {
  o as o5
} from "./chunk-ALQIX2AS.js";
import {
  a as a2
} from "./chunk-6YHZYHJS.js";
import {
  P
} from "./chunk-4U7LUZFD.js";
import {
  d,
  f,
  p
} from "./chunk-T257OY4U.js";
import {
  o as o7
} from "./chunk-BMO2W6EC.js";
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
  o as o3
} from "./chunk-HITI6WDM.js";
import {
  e as e2
} from "./chunk-AMH7CZMY.js";
import {
  a
} from "./chunk-AABDXAD3.js";
import {
  o as o2
} from "./chunk-LGS63R4F.js";
import {
  e
} from "./chunk-YGAXDKHF.js";
import {
  i
} from "./chunk-KOI252FF.js";
import {
  o,
  z
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTangent.glsl.js
function e4(e5, t6) {
  e5.varyings.add("tbnTangent", "vec3"), e5.varyings.add("tbnBiTangent", "vec3"), t6.spherical ? e5.vertex.code.add(o2`void forwardVertexTangent(vec3 n) {
tbnTangent = normalize(cross(vec3(0.0, 0.0, 1.0), n));
tbnBiTangent = normalize(cross(n, tbnTangent));
}`) : e5.vertex.code.add(o2`void forwardVertexTangent(vec3 n) {
tbnTangent = vec3(1.0, 0.0, 0.0);
tbnBiTangent = normalize(cross(n, tbnTangent));
}`), e5.fragment.code.add(o2`mat3 getTBNMatrix(vec3 n) {
return mat3(tbnTangent, tbnBiTangent, n);
}`);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/terrain/TileBlendInput.js
var o10;
!function(o11) {
  o11[o11.LayerOnly = 0] = "LayerOnly", o11[o11.ColorComposite = 1] = "ColorComposite", o11[o11.GridComposite = 2] = "GridComposite", o11[o11.COUNT = 3] = "COUNT";
}(o10 || (o10 = {}));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/terrain/TerrainTexture.glsl.js
var n3 = class extends h2 {
  constructor() {
    super(...arguments), this.overlayOpacity = 1;
  }
};
function s2(e5, c2) {
  const {
    vertex: n4,
    fragment: s3,
    varyings: u2
  } = e5;
  u2.add("vtc", "vec2"), n4.uniforms.add(new i3("texOffsetAndScale")), s3.uniforms.add(new l("tex")), s3.uniforms.add(new a4("textureOpacities"));
  const x2 = c2.textureFadingEnabled && !c2.renderOccluded;
  x2 && (n4.uniforms.add(new i3("nextTexOffsetAndScale")), u2.add("nvtc", "vec2"), s3.uniforms.add(new l("texNext")), s3.uniforms.add(new a4("nextTexOpacities")), s3.uniforms.add(new d2("fadeFactor")));
  const f3 = c2.tileBlendInput === o10.ColorComposite, v = c2.tileBlendInput === o10.GridComposite;
  v && s3.include(t5), f3 && s3.uniforms.add(new a4("backgroundColor")), n4.code.add(o2`
  void forwardTextureCoordinatesWithTransform(in vec2 uv) {
    vtc = uv * texOffsetAndScale.zw + texOffsetAndScale.xy;
    ${x2 ? o2`nvtc = uv * nextTexOffsetAndScale.zw + nextTexOffsetAndScale.xy;` : o2``}
  }`), s3.code.add(o2`
    vec4 getColor(vec4 color, vec2 uv, vec3 opacities) {
      ${v || f3 ? o2`
              if (opacities.y <= 0.0) {
                return color * opacities.z * opacities.x;
              }
              vec4 bg = vec4(${f3 ? o2`backgroundColor` : o2`gridColor(uv)`} * opacities.y, opacities.y);
              vec4 layer = color * opacities.z;
              return (bg * (1.0 - layer.a) + layer) * opacities.x;` : o2`return color;`}
    }`), x2 ? s3.code.add(o2`vec4 getTileColor() {
vec4 color = getColor(texture(tex, vtc), vtc, textureOpacities);
if (fadeFactor >= 1.0) {
return color;
}
vec4 nextColor = getColor(texture(texNext, nvtc), nvtc, nextTexOpacities);
return mix(nextColor, color, fadeFactor);
}`) : s3.code.add(o2`vec4 getTileColor() {
return getColor(texture(tex, vtc), vtc, textureOpacities);
}`);
}
var d2 = class extends a {
  constructor(e5) {
    super(e5, "float");
  }
};
var a4 = class extends a {
  constructor(e5) {
    super(e5, "vec3");
  }
};
var i3 = class extends a {
  constructor(e5) {
    super(e5, "vec4");
  }
};
var l = class extends a {
  constructor(e5) {
    super(e5, "sampler2D");
  }
};

// ../../../node_modules/@arcgis/core/chunks/Terrain.glsl.js
var _ = class extends n3 {
};
function B(r2) {
  const a5 = new o8(), {
    vertex: T,
    fragment: _2,
    varyings: B2
  } = a5;
  a5.include(o5), a5.include(t, r2), a5.include(o4, r2);
  const q2 = () => {
    a5.include(r, r2), T.code.add(o2`vec3 getNormal() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
vec3 n = vec3(normalCompressed + vec2(normalCompressed.x >= 0.0 ? 1.0 : -1.0,
normalCompressed.y >= 0.0 ? 1.0 : -1.0) * min(z, 0.0), z);
return normalize(n);
}`);
  };
  d(T, r2), a5.include(o6, r2);
  const E = r2.overlayMode !== f2.Disabled, I = E && r2.invisible;
  switch (r2.output) {
    case o3.Color:
      {
        a5.include(s2, r2), a5.include(p2, r2), E && a5.include(g, __spreadProps(__spreadValues({}, r2), {
          pbrMode: r2.pbrMode === c.Simplified ? c.TerrainWithWater : c.Water
        }));
        const t6 = r2.overlayMode === f2.EnabledWithWater;
        t6 && a5.include(e4, r2), B2.add("vnormal", "vec3"), B2.add("vpos", "vec3"), B2.add("vup", "vec3"), q2(), r2.screenSizePerspective && p(T);
        const n4 = r2.receiveShadows && !r2.renderOccluded;
        n4 && a5.include(n2, r2), r2.screenSizePerspective && (B2.add("screenSizeDistanceToCamera", "float"), B2.add("screenSizeCosAngle", "float")), T.code.add(o2`
        void main(void) {
          //Position
          vpos = position;
          vec3 positionWorld = position + localOrigin;
          gl_Position = transformPosition(proj, view, vpos);

          //Normal
          vnormal = getNormal();

          //Up
          vup = getLocalUp(position, localOrigin);

          ${t6 ? o2`forwardVertexTangent(vnormal);` : o2``}

          //Texture UV
          vec2 uv = getUV0();
          forwardTextureCoordinatesWithTransform(uv);
          ${E ? o2`setOverlayVTC(uv);` : ""}
          ${r2.tileBorders ? o2`forwardTextureCoordinates();` : ""}

          ${r2.screenSizePerspective ? o2`
          vec3 viewPos = (view * vec4(vpos, 1.0)).xyz;
          screenSizeDistanceToCamera = length(viewPos);
          vec3 viewSpaceNormal = (viewNormal * vec4(normalize(positionWorld), 1.0)).xyz;
          screenSizeCosAngle = abs(viewSpaceNormal.z);` : ""}

          ${n4 ? o2`forwardLinearDepth();` : ""}

        }
      `), a5.include(P, r2), a5.include(p2, r2), a5.include(t3, r2), a5.include(x, r2), f(_2, r2), u(_2), h(_2), _2.uniforms.add(T.uniforms.get("localOrigin"), new e2("viewDirection", (e5, r3) => z(H, o(H, r3.camera.viewMatrix[12], r3.camera.viewMatrix[13], r3.camera.viewMatrix[14])))), t6 && _2.uniforms.add(new s("ovWaterTex", (e5, r3) => r3.overlay?.getTexture(o9.WaterNormal)), new o7("view", (r3, o11) => i(k, o11.camera.viewMatrix, r3.origin))), _2.code.add(o2`const float sliceOpacity = 0.2;
float lum(vec3 c) {
return (min(min(c.r, c.g), c.b) + max(max(c.r, c.g), c.b)) * 0.5;
}`), t4(_2), a3(_2), _2.code.add(o2`
        void main() {
          vec3 normal = normalize(vnormal);
          float vndl = dot(normal, mainLightDirection);

          float additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl*2.5, 0.0, 1.0));
          float shadow = ${r2.receiveShadows && !r2.renderOccluded ? "readShadowMap(vpos, linearDepth)" : r2.spherical ? "lightingGlobalFactor * (1.0 - additionalAmbientScale)" : "0.0"};

          float ssao = evaluateAmbientOcclusionInverse();
          vec4 tileColor = getTileColor();

          ${E ? o2`
              vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
              vec4 overlayColor = overlayOpacity * overlayColorOpaque;
              ${r2.invisible ? o2`if (overlayColor.a == 0.0) { discard; }` : ""}
              vec4 groundColor = tileColor;
              tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;` : ""}

          // If combined alpha is 0 we can discard pixel. The performance impact by having a discard here
          // is neglectable because terrain typically renders first into the framebuffer.
          if(tileColor.a <= 0.0) {
            discard;
          }

          bool sliced = rejectBySlice(vpos);
          if (sliced) {
            tileColor *= sliceOpacity;
          }

          vec3 albedo = tileColor.rgb;

          // heuristic shading function used in the old terrain, now used to add ambient lighting

          vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

          ${r2.pbrMode === c.Simplified || r2.pbrMode === c.TerrainWithWater ? o2`fragColor = vec4(evaluatePBRSimplifiedLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight, normalize(vpos - cameraPosition), vup), tileColor.a);` : o2`fragColor = vec4(evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);`}
          ${t6 ? o2`
              vec4 overlayWaterMask = getOverlayColor(ovWaterTex, vtcOverlay);
              float waterNormalLength = length(overlayWaterMask);
              if (waterNormalLength > 0.95) {
                mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, vnormal);
                vec4 waterOverlayColor = vec4(overlayColor.w > 0.0 ? overlayColorOpaque.xyz/overlayColor.w : vec3(1.0), overlayColor.w);
                vec4 viewPosition = view*vec4(vpos, 1.0);
                vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vpos - cameraPosition), shadow, vnormal, tbnMatrix, viewPosition.xyz,  vpos + localOrigin);
                vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                float opacity = sliced ? sliceOpacity : 1.0;
                // un-gamma the ground color to mix in linear space
                fragColor = mix(groundColor, waterColorNonLinear, waterColorLinear.w) * opacity;
              }` : ""}
          ${r2.screenSizePerspective ? o2`
            float perspectiveScale = screenSizePerspectiveScaleFloat(1.0, screenSizeCosAngle, screenSizeDistanceToCamera, vec4(0.0, 0.0, 0.0, 0.0));
            if (perspectiveScale <= 0.25) {
              fragColor = mix(fragColor, vec4(1.0, 0.0, 0.0, 1.0), perspectiveScale * 4.0);
            }
            else if (perspectiveScale <= 0.5) {
              fragColor = mix(fragColor, vec4(0.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.25) * 4.0);
            }
            else if (perspectiveScale >= 0.99) {
              fragColor = mix(fragColor, vec4(0.0, 1.0, 0.0, 1.0), 0.2);
            }
            else {
              fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.5) * 2.0);
            }` : ""}
          ${r2.visualizeNormals ? r2.spherical ? o2`
                  vec3 localUp = normalize(vpos + localOrigin);
                  vec3 right = normalize(cross(vec3(0.0, 0.0, 1.0), localUp));
                  vec3 forward = normalize(cross(localUp, right));
                  mat3 tbn = mat3(right, forward, localUp);
                  vec3 tNormal = normalize(normal * tbn);
                  fragColor = vec4(vec3(0.5) + 0.5 * tNormal, 0.0);
              ` : o2`
                  vec3 tNormal = normalize(normal);
                  fragColor = vec4(vec3(0.5) + 0.5 * tNormal, 0.0);
              ` : ""}
          ${r2.tileBorders ? o2`
              vec2 dVuv = fwidth(vuv0);
              vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv0, 1.0 - vuv0));
              float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);
              fragColor = mix(fragColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);` : ""}
          fragColor = highlightSlice(fragColor, vpos);
        }
      `);
      }
      break;
    case o3.Depth:
      I && a5.include(g, r2), T.code.add(o2`
              void main(void) {
                ${I ? o2`setOverlayVTC(getUV0());` : ""}
                gl_Position = transformPosition(proj, view, position);
              }
          `), _2.code.add(o2`
              void main() {
                ${I ? o2`if (getCombinedOverlayColor().a == 0.0) { discard; }` : ""}
              }
          `);
      break;
    case o3.Shadow:
    case o3.ShadowHighlight:
    case o3.ShadowExcludeHighlight:
    case o3.ViewshedShadow:
      a5.include(e3, r2), t2(a5), i2(a5), T.code.add(o2`void main(void) {
gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);
}`), _2.code.add(o2`void main() {
outputDepth(linearDepth);
}`);
      break;
    case o3.Normal:
      I && a5.include(g, r2), B2.add("vnormal", "vec3"), p(T), q2(), T.code.add(o2`
        void main(void) {
          ${I ? o2`setOverlayVTC(getUV0());` : ""}
          gl_Position = transformPosition(proj, view, position);
          vnormal = normalize((viewNormal * vec4(getNormal(), 1.0)).xyz);
        }
      `), _2.code.add(o2`
        void main() {
          ${I ? o2`if (getCombinedOverlayColor().a == 0.0) { discard; }` : ""}
          vec3 normal = normalize(vnormal);
          if (gl_FrontFacing == false) {
            normal = -normal;
          }
          fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
        }
      `);
      break;
    case o3.Highlight:
      E && a5.include(g, r2), T.code.add(o2`
          void main() {
            ${E ? o2`setOverlayVTC(getUV0());` : ""}
            gl_Position = transformPosition(proj, view, position);
          }
        `), a5.include(a2, r2), _2.code.add(o2`
          void main() {
            ${E ? o2`if (getCombinedOverlayColor().a == 0.0) { discard; }` : ""}
            outputHighlight();
          }
        `);
  }
  return r2.output === o3.ObjectAndLayerIdColor && (E ? (a5.include(g, __spreadProps(__spreadValues({}, r2), {
    pbrMode: c.Disabled
  })), T.code.add(o2`void main(void) {
gl_Position = transformPosition(proj, view, position);
setOverlayVTC(getUV0());
}`), _2.code.add(o2`void main() {
fragColor = getOverlayColorTexel(vtcOverlay);
}`)) : (T.code.add(o2`void main(void) {
        ${r2.opaque ? o2` gl_Position = transformPosition(proj, view, position);` : ""}
      }`), _2.code.add(o2`void main() {
fragColor = vec4(0.0);
}`))), a5;
}
var k = e();
var H = n();
var q = Object.freeze(Object.defineProperty({
  __proto__: null,
  TerrainPassParameters: _,
  build: B
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  o10 as o,
  _,
  B,
  q
};
//# sourceMappingURL=chunk-USA76EXM.js.map
