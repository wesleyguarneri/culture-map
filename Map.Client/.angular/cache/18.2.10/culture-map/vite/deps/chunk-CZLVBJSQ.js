import {
  f as f2,
  o as o9
} from "./chunk-S2UCXOWF.js";
import {
  r as r2
} from "./chunk-TP2RTSHJ.js";
import {
  x
} from "./chunk-WRHEXEG3.js";
import {
  r
} from "./chunk-XUAPJ5BK.js";
import {
  c
} from "./chunk-GTZOXRB5.js";
import {
  a as a2,
  o as o8,
  t as t2
} from "./chunk-75N5YDQB.js";
import {
  d as d2
} from "./chunk-BG32AOSQ.js";
import {
  a
} from "./chunk-ICUHXX2J.js";
import {
  o as o5
} from "./chunk-VIIVMRRO.js";
import {
  a as a3
} from "./chunk-ZKSEQXDM.js";
import {
  e as e4
} from "./chunk-675UQNXB.js";
import {
  o as o6
} from "./chunk-DXGCBLDW.js";
import {
  n as n3
} from "./chunk-Z3FHX4FD.js";
import {
  t
} from "./chunk-TGHJVD7I.js";
import {
  P
} from "./chunk-OZG2NNUW.js";
import {
  d,
  f
} from "./chunk-KTRZHJ2M.js";
import {
  e as e3
} from "./chunk-ACZYDHB3.js";
import {
  e as e2
} from "./chunk-X2OAE75B.js";
import {
  s as s2
} from "./chunk-UCPBGEQD.js";
import {
  o as o7
} from "./chunk-SIZK72CP.js";
import {
  o as o4
} from "./chunk-VS26W5Y5.js";
import {
  o as o2
} from "./chunk-WJKYGQOY.js";
import {
  o as o3
} from "./chunk-R5ZE5A4K.js";
import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-4MMTPKY4.js";
import {
  n as n2
} from "./chunk-DY7FJHTG.js";
import {
  n
} from "./chunk-IMVP5ADD.js";
import {
  s
} from "./chunk-H7WPOTQH.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/WaterDistortion.glsl.js
function u(t3) {
  t3.fragment.uniforms.add(new s2("texWaveNormal", (e5) => e5.waveNormal), new s2("texWavePerturbation", (e5) => e5.wavePerturbation), new e3("waveParams", (e5) => s(c2, e5.waveStrength, e5.waveTextureRepeat, e5.flowStrength, e5.flowOffset)), new e2("waveDirection", (t4) => o4(n4, t4.waveDirection[0] * t4.waveVelocity, t4.waveDirection[1] * t4.waveVelocity))), t3.include(o9), t3.fragment.code.add(o`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`);
}
var c2 = n();
var n4 = n2();

// ../../../node_modules/@arcgis/core/chunks/WaterSurface.glsl.js
function S(S2) {
  const M2 = new o7(), {
    vertex: A,
    fragment: N
  } = M2;
  d(A, S2), M2.include(o6, S2), M2.attributes.add(e.POSITION, "vec3"), M2.attributes.add(e.UV0, "vec2");
  const O = new e3("waterColor", (e5) => e5.color);
  if (S2.output === o2.Color && S2.draped) return M2.varyings.add("vpos", "vec3"), A.uniforms.add(O), A.code.add(o`
        void main(void) {
          if (waterColor.a < ${o.float(t)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `), N.uniforms.add(O), N.code.add(o`void main() {
fragColor = waterColor;
}`), M2;
  switch (S2.output === o2.Color && (M2.include(r2, S2), M2.include(n3, S2), M2.varyings.add("vuv", "vec2"), M2.varyings.add("vpos", "vec3"), M2.varyings.add("vnormal", "vec3"), M2.varyings.add("vtbnMatrix", "mat3"), S2.multipassEnabled && M2.varyings.add("depth", "float"), A.uniforms.add(O), A.code.add(o`
      void main(void) {
        if (waterColor.a < ${o.float(t)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${S2.multipassEnabled ? "depth = (view * vec4(vpos, 1.0)).z;" : ""}

        gl_Position = transformPosition(proj, view, vpos);
        ${S2.output === o2.Color ? "forwardLinearDepth();" : ""}
      }
    `)), M2.include(a3, S2), S2.output) {
    case o2.Color:
      M2.include(o8), M2.include(r, {
        pbrMode: c.Disabled,
        lightingSphericalHarmonicsOrder: 2
      }), M2.include(u), M2.include(P, S2), M2.include(x, S2), M2.include(f2, S2), N.uniforms.add(O, new o3("timeElapsed", (e5) => e5.timeElapsed), A.uniforms.get("view"), A.uniforms.get("localOrigin")), f(N, S2), N.include(e4), S2.transparencyPassType === o5.ColorAlpha && (M2.outputs.add("fragColor", "vec4", 0), M2.outputs.add("fragAlpha", "float", 1)), t2(N), a2(N), N.code.add(o`
      void main() {
        discardBySlice(vpos);
        ${S2.multipassEnabled ? "terrainDepthTest(depth);" : ""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${S2.receiveShadows ? o`1.0 - readShadowMap(vpos, linearDepth)` : "1.0"};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        fragColor = delinearizeGamma(final);
        fragColor = highlightSlice(fragColor, vpos);
        ${S2.transparencyPassType === o5.ColorAlpha ? o`
                fragColor = premultiplyAlpha(fragColor);
                fragAlpha = fragColor.a;` : ""}
      }
    `);
      break;
    case o2.Normal:
      M2.include(r2, S2), M2.include(u, S2), M2.include(P, S2), M2.varyings.add("vpos", "vec3"), M2.varyings.add("vuv", "vec2"), A.uniforms.add(O), A.code.add(o`
        void main(void) {
          if (waterColor.a < ${o.float(t)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `), N.uniforms.add(new o3("timeElapsed", (e5) => e5.timeElapsed)), N.code.add(o`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
fragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`);
      break;
    case o2.Highlight:
      M2.include(a, S2), M2.varyings.add("vpos", "vec3"), A.uniforms.add(O), A.code.add(o`
      void main(void) {
        if (waterColor.a < ${o.float(t)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `), M2.include(P, S2), N.code.add(o`void main() {
discardBySlice(vpos);
outputHighlight();
}`);
      break;
    case o2.ObjectAndLayerIdColor:
      M2.include(d2, S2), M2.varyings.add("vpos", "vec3"), A.uniforms.add(O), A.code.add(o`
      void main(void) {
        if (waterColor.a < ${o.float(t)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
        forwardObjectAndLayerIdColor();
      }
    `), M2.include(P, S2), N.code.add(o`void main() {
discardBySlice(vpos);
outputObjectAndLayerIdColor();
}`);
  }
  return M2;
}
var M = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: S
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  S,
  M
};
//# sourceMappingURL=chunk-CZLVBJSQ.js.map
