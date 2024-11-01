import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e9
} from "./chunk-FT6GF7ST.js";
import {
  d,
  o as o3
} from "./chunk-VYJ7IUDT.js";
import {
  t
} from "./chunk-2ZXVDYHF.js";
import {
  e as e8
} from "./chunk-ZDFN6OZC.js";
import {
  c
} from "./chunk-KSOKDIBG.js";
import {
  e as e7
} from "./chunk-3NWWTJOW.js";
import {
  s
} from "./chunk-TRF6JO5N.js";
import {
  o as o4
} from "./chunk-ZHVMMFTW.js";
import {
  e as e6
} from "./chunk-XK3CKE5Q.js";
import {
  e as e5
} from "./chunk-AMH7CZMY.js";
import {
  o as o2
} from "./chunk-Q5JLNMWZ.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  e as e4
} from "./chunk-D7C26LZP.js";
import {
  e as e3
} from "./chunk-YGAXDKHF.js";
import {
  e as e2
} from "./chunk-KOI252FF.js";
import {
  e
} from "./chunk-2OZSYJDX.js";
import {
  r
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/views/3d/environment/atmosphereUtils.js
function e10(e11) {
  const o6 = 1e5;
  return e((e11 - o6) / (1e6 - o6), 0, 1);
}
var o5 = 1e4;
var r2 = 0.085;
var n = 1e5;

// ../../../node_modules/@arcgis/core/chunks/ChapmanAtmosphere.glsl.js
var y = r(parseFloat(Number(5802e-9).toFixed(6)), parseFloat(Number(13558e-9).toFixed(6)), parseFloat(Number(331e-7).toFixed(6)));
var b = 3;
var D = r(b * parseFloat(Number(65e-8).toFixed(6)), b * parseFloat(Number(1881e-9).toFixed(6)), b * parseFloat(Number(85e-9).toFixed(6)));
var P = 3996e-9;
var w = r(parseFloat(Number(y[0] + D[0]).toFixed(6)), parseFloat(Number(y[1] + D[1]).toFixed(6)), parseFloat(Number(y[2] + D[2]).toFixed(6)));
function S(t2) {
  const a = new o4();
  a.attributes.add(e4.POSITION, "vec2"), a.include(o3, {
    textureCoordinateType: d.Default
  }), a.varyings.add("worldRay", "vec3"), a.varyings.add("eyeDir", "vec3");
  const {
    vertex: b2,
    fragment: D2
  } = a;
  return b2.uniforms.add(new e6("inverseProjectionMatrix", (e11, t3) => t3.camera.inverseProjectionMatrix), new e6("inverseViewMatrix", (t3, a2) => e2(z, a2.camera.viewMatrix))), b2.code.add(o`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1, 1)).xyz;
eyeDir = posViewNear;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0)).xyz;
forwardTextureCoordinates();
gl_Position = vec4(position, 1, 1);
}`), D2.uniforms.add(new e5("backgroundColor", (e11) => e11.backgroundColor), new e7("radii", (e11) => e11.radii), new e5("cameraPosition", (e11, t3) => t3.camera.eye), new e8("heightParameters", (e11) => e11.heightParameters), new o2("innerFadeDistance", (e11) => e11.innerFadeDistance), new o2("altitudeFade", (e11) => e11.altitudeFade), new s("depthTexture", (e11) => e11.depthTexture), new o2("hazeStrength", (e11) => e11.hazeStrength)), D2.constants.add("betaRayleigh", "vec3", y), D2.constants.add("betaCombined", "vec3", w), D2.constants.add("betaMie", "float", P), D2.constants.add("scaleHeight", "float", r2 * n), t(D2), a.include(e9), t2.haze && D2.include(c), D2.code.add(o`vec2 sphereIntersect(vec3 start, vec3 dir, float radius, bool planet) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float c = planet ? heightParameters[1] - radius * radius : heightParameters[2];
float d = (b * b) - 4.0 * a * c;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}`), D2.code.add(o`float chapmanApproximation(float X, float h, float cosZenith) {
float c = sqrt(X + h);
float cExpH = c * exp(-h);
if (cosZenith >= 0.0) {
return cExpH / (c * cosZenith + 1.0);
} else {
float x0 = sqrt(1.0 - cosZenith * cosZenith) * (X + h);
float c0 = sqrt(x0);
return 2.0 * c0 * exp(X - x0) - cExpH / (1.0 - c * cosZenith);
}
}`), D2.code.add(o`float getOpticalDepth(vec3 position, vec3 dir, float h) {
return scaleHeight * chapmanApproximation(radii[0] / scaleHeight, h, dot(normalize(position), dir));
}`), D2.code.add(o`
    const int STEPS = 6;

    vec3 getAtmosphereColour(vec3 cameraPos, vec3 rayDir, vec3 lightDir, float terrainDepth) {
      float reducedPlanetRadius = radii[0] - 20000.0;
      vec2 rayPlanetIntersect = sphereIntersect(cameraPos, rayDir, reducedPlanetRadius, true);
      vec2 rayAtmosphereIntersect = sphereIntersect(cameraPos, rayDir, radii[1], false);
      bool hitsAtmosphere = (rayAtmosphereIntersect.x <= rayAtmosphereIntersect.y) && rayAtmosphereIntersect.x > 0.0;
      bool insideAtmosphere = heightParameters[0] < radii[1];

      if (!(hitsAtmosphere || insideAtmosphere)) {
        return vec3(0);
      }

      bool hitsPlanet = (rayPlanetIntersect.x <= rayPlanetIntersect.y) && rayPlanetIntersect.x > 0.0;

      float start = insideAtmosphere ? 0.0 : rayAtmosphereIntersect.x;

      if (heightParameters[0] < reducedPlanetRadius) {
        // Long light rays from the night side of the planet lead to numerical instability
        // Do not render the atmosphere in such cases
        if (dot(rayDir, normalize(cameraPos)) < -0.025) {
          return vec3(0);
        }
        start = rayPlanetIntersect.y;
      }

      float end = hitsPlanet ? rayPlanetIntersect.x : rayAtmosphereIntersect.y;
      float maxEnd = end;

      ${t2.haze ? o`if (terrainDepth != -1.0) { end = terrainDepth; }` : ""}

      vec3 samplePoint = cameraPos + rayDir * end;
      float multiplier = hitsPlanet ? -1.0 : 1.0;

      vec3 scattering = vec3(0);
      float scaleFract = (length(samplePoint) - radii[0]) / scaleHeight;
      float lastOpticalDepth = getOpticalDepth(samplePoint, rayDir, scaleFract);
      float stepSize = (end - start) / float(STEPS);
      for (int i = 0; i < STEPS; i++) {
        samplePoint -= stepSize * rayDir;
        scaleFract = (length(samplePoint) - radii[0]) / scaleHeight;
        float opticalDepth = multiplier * getOpticalDepth(samplePoint, rayDir * multiplier, scaleFract);

        if (i > 0) {
          scattering *= ${t2.haze ? "" : o`mix(2.5, 1.0, clamp((length(cameraPos) - radii[0]) / 50e3, 0.0, 1.0)) * `} exp(-(mix(betaCombined, betaRayleigh, 0.5) + betaMie) * max(0.0, (opticalDepth - lastOpticalDepth)));
        }

        if (dot(normalize(samplePoint), lightDir) > -0.3) {

          float scale = exp(-scaleFract);
          float lightDepth = getOpticalDepth(samplePoint, lightDir, scaleFract);

          scattering += scale * exp(-(betaCombined + betaMie) * lightDepth);
          ${t2.haze ? "" : o`scattering += scale * exp(-(0.25 * betaCombined ) * lightDepth);`}
        }

        lastOpticalDepth = opticalDepth;

      }

      float mu = dot(rayDir, lightDir);
      float mumu = 1.0 + mu * mu;

      float phaseRayleigh = 0.0596831 * mumu;

      ${t2.haze ? o`return 3.0 * scattering * stepSize * phaseRayleigh * betaRayleigh;` : o`
            const float g = 0.8;
            const float gg = g * g;
            float phaseMie = end == maxEnd ? 0.1193662 * ((1.0 - gg) * mumu) / (pow(1.0 + gg - 2.0 * mu * g, 1.5) * (2.0 + gg)) : 0.0;
            phaseMie = clamp(phaseMie, 0.0, 128.0);
            return 3.0 * scattering * stepSize * (phaseRayleigh * betaRayleigh + 0.025 * phaseMie * betaMie);`}
    }

    ${t2.haze ? "" : o`
            vec4 applyUndergroundAtmosphere(vec3 rayDir, vec3 lightDirection, vec4 fragColor) {
              vec2 rayPlanetIntersect = sphereIntersect(cameraPosition, rayDir, radii[0], true);
              if (!((rayPlanetIntersect.x <= rayPlanetIntersect.y) && rayPlanetIntersect.y > 0.0)) {
                return fragColor;
              }

              float lightAngle = dot(lightDirection, normalize(cameraPosition + rayDir * max(0.0, rayPlanetIntersect.x)));
              vec4 surfaceColor = vec4(vec3(max(0.0, (smoothstep(-1.0, 0.8, 2.0 * lightAngle)))), 1.0 - altitudeFade);
              float relDist = (rayPlanetIntersect.y - max(0.0, rayPlanetIntersect.x)) / innerFadeDistance;
              if (relDist > 1.0) {
                return surfaceColor;
              }

              return mix(fragColor, surfaceColor, smoothstep(0.0, 1.0, relDist * relDist));
            }

            float getGlow(float dist, float radius, float intensity) {
              return pow(radius / max(dist, 1e-6), intensity);
            }

            vec3 getSun(vec3 cameraPos, vec3 rayDir, vec3 lightDir){

              // Get the amount of atmosphere between camera and the Sun along the view ray
              float scaleFract = (length(cameraPos) - radii[0]) / scaleHeight;
              float sunOpticalDepth = getOpticalDepth(cameraPos, rayDir, max(scaleFract, 0.0));

              // Find the amount of light that remains after travelling through the atmosphere from the Sun along the view ray
              // This will make the colour of the Sun reddish on the horizon and white from space
              vec3 sunTransmittance = exp(-(mix(betaCombined, betaRayleigh, 0.5)) * max(0.0, sunOpticalDepth));

              // Alignment of light direction and view ray
              float mu = clamp(dot(rayDir, lightDir), 0.0, 1.0);
              // Draw the Sun as a bright disc
              float sunDisc = 256.0 * smoothstep(0.0, 128.0, clamp(getGlow(1.0 - mu, 3e-5, 3.0), 0.0, 128.0));

              return normalize(sunTransmittance) * sunDisc;
            }`}

    ${t2.haze && t2.reduced ? o`
        float getDepth(vec2 uv){
          return linearDepthFromTexture(depthTexture, uv);
        }

        float textureBilinear(vec2 uv) {
          // Information about the high-resolution depth texture
          vec2 depthTextureSize = vec2(textureSize(depthTexture, 0));
          vec2 texelSize = 1.0 / depthTextureSize;

          // The uv inside the upper right pixel - of the tile of 4 pixels -
          // that the atmosphere uv maps to in the depth texture
          vec2 depthUV = (uv * depthTextureSize) - vec2(0.5);

          // Relative distance of the uv coordinates inside the depth texture pixel
          vec2 f = fract(depthUV);

          // Snap to the centre of the depth texture pixel
          vec2 snapUV = (floor(depthUV) + vec2(0.5)) / depthTextureSize;

          // Read the depth texture pixel and its three neighbours
          float d0 = getDepth(snapUV);
          float d1 = getDepth(snapUV + vec2(texelSize.x, 0.0));
          float d2 = getDepth(snapUV + vec2(0.0, texelSize.y));
          float d3 = getDepth(snapUV + texelSize);

          // Return the bilinearly interpolated value of the neighbouring pixels based
          // on the sample position in the depth texture pixel
          return mix(mix(d0, d1, f.x), mix(d2, d3, f.x), f.y);
        }
        ` : ""}

    vec3 tonemapACES(vec3 x) {
      return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
    }

    void main() {
      vec3 rayDir = normalize(worldRay);
      float terrainDepth = -1.0;
      ${t2.haze ? o`
          float depthSample = texture(depthTexture, vuv0).r;
          if (depthSample != 1.0) {
            vec3 cameraSpaceRay = normalize(eyeDir);
            cameraSpaceRay /= cameraSpaceRay.z;

              ${t2.reduced ? o`cameraSpaceRay *= -textureBilinear(vuv0);` : o`cameraSpaceRay *= -linearDepthFromTexture(depthTexture, vuv0);`}

            terrainDepth = max(0.0, length(cameraSpaceRay));
          }else{
            discard;
          }
          ` : o`${t2.reduced ? "" : o`
                float depthSample = texture(depthTexture, vuv0).r;
                if (depthSample != 1.0) {
                  fragColor = vec4(0);
                  return;
                }`}`}

      ${t2.haze ? o`
            vec3 col = vec3(0);
            float fadeOut = smoothstep(-10000.0, -15000.0, heightParameters[0] - radii[0]);
            if(depthSample != 1.0){
              col = (1.0 - fadeOut) * hazeStrength * getAtmosphereColour(cameraPosition, rayDir, mainLightDirection, terrainDepth);
            }
            // Alpha is ignored for haze blending
            float alpha = 1.0;
            ` : o`
            vec3 col = linearizeGamma(backgroundColor);
            col += getAtmosphereColour(cameraPosition, rayDir, mainLightDirection, terrainDepth);
            col += getSun(cameraPosition, rayDir, mainLightDirection);
            float alpha = smoothstep(0.0, mix(0.15, 0.01, heightParameters[3]), length(col));`}

      col = tonemapACES(col);
      fragColor = delinearizeGamma(vec4(col, alpha));
      ${t2.haze ? "" : o`fragColor = applyUndergroundAtmosphere(rayDir, mainLightDirection, fragColor);`}
    }
  `), a;
}
var z = e3();
var F = Object.freeze(Object.defineProperty({
  __proto__: null,
  betaRayleigh: y,
  build: S
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  e10 as e,
  o5 as o,
  n,
  y,
  S,
  F
};
//# sourceMappingURL=chunk-A42MPHQF.js.map
