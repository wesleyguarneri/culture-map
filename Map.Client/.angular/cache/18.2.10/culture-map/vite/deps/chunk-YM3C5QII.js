import {
  a,
  e as e5,
  o as o6,
  r as r2,
  t as t2
} from "./chunk-XLUW354K.js";
import {
  u
} from "./chunk-6FZS4YUQ.js";
import {
  r,
  t
} from "./chunk-FHW2TG7X.js";
import {
  o as o4
} from "./chunk-JXVDTUGR.js";
import {
  e as e4
} from "./chunk-X2OAE75B.js";
import {
  s
} from "./chunk-UCPBGEQD.js";
import {
  o as o5
} from "./chunk-SIZK72CP.js";
import {
  o as o3
} from "./chunk-VS26W5Y5.js";
import {
  e as e3
} from "./chunk-52UEU7LG.js";
import {
  o as o2
} from "./chunk-R5ZE5A4K.js";
import {
  n as n2,
  o
} from "./chunk-SZWWBMQN.js";
import {
  n
} from "./chunk-DY7FJHTG.js";
import {
  e as e2
} from "./chunk-TYQXPPSP.js";
import {
  f
} from "./chunk-3ZXOUEQG.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  has
} from "./chunk-DXLOWWK7.js";

// ../../../node_modules/@arcgis/core/views/3d/environment/CloudsTechniqueConfiguration.js
var s2;
!function(e7) {
  e7[e7.SIXTEEN = 0] = "SIXTEEN", e7[e7.HUNDRED = 1] = "HUNDRED", e7[e7.TWOHUNDRED = 2] = "TWOHUNDRED", e7[e7.COUNT = 3] = "COUNT";
}(s2 || (s2 = {}));
var i = class extends t {
  constructor() {
    super(...arguments), this.steps = s2.SIXTEEN, this.writeTextureChannels = u.RG;
  }
};
e([r({
  count: s2.COUNT
})], i.prototype, "steps", void 0), e([r({
  constValue: has("esri-mobile") ? 1024 : 2048
})], i.prototype, "cubeMapSize", void 0), e([r()], i.prototype, "writeTextureChannels", void 0);

// ../../../node_modules/@arcgis/core/views/3d/environment/CloudsPresets.js
var i2 = class {
  constructor(s3, i3, t4, e7, n3, o7, h, r3, a2 = 0.5) {
    this.coverage = s3, this.density = i3, this.absorption = t4, this.cloudSize = e7, this.detailSize = n3, this.smoothness = o7, this.cloudHeight = h, this.raymarchingSteps = r3, this.median = a2;
  }
};
var t3 = new i2([0, 0.6], [0.03, 0.03], [0, 0], [0.9, 0.9], [0.8, 0.8], [0.7, 0.7], [0.05, 0.05], s2.SIXTEEN);
var e6 = {
  sunny: t3,
  cloudy: new i2([0.3, 0.65], [0.2, 0.4], [0, 0], [0.85, 0.85], [0.75, 0.75], [0.3, 0.4], [1, 1], s2.TWOHUNDRED, 0.6),
  rainy: new i2([0.6, 0.8], [0.5, 0.8], [0.1, 0.5], [0.9, 0.9], [0.75, 0.75], [0.5, 0.5], [1, 1], s2.TWOHUNDRED, 0.4),
  snowy: new i2([0.25, 0.75], [0.3, 0.3], [0, 0], [0.95, 0.95], [0.7, 0.7], [0.69, 0.75], [0.3, 1], s2.HUNDRED, 0.65),
  foggy: new i2([0.8, 0.8], [0.5, 0.5], [0, 0], [0.95, 0.95], [0.9, 0.9], [0.55, 0.55], [0.3, 0.3], s2.SIXTEEN),
  default: t3
};

// ../../../node_modules/@arcgis/core/chunks/Clouds.glsl.js
var w = class extends n2 {
  constructor() {
    super(...arguments), this.cloudRadius = 0, this.cloudSize = 0, this.detailSize = 0, this.absorption = 0, this.density = 0, this.smoothness = 0, this.cloudHeight = 0, this.coverage = 0, this.raymarchingSteps = e6.default.raymarchingSteps, this.weatherTile = n(), this.viewMatrix = e2();
  }
};
function S(e7) {
  const o7 = new o5();
  o7.include(o4, false);
  const i3 = o7.fragment;
  return i3.uniforms.add(new o2("cloudRadius", (t4) => t4.cloudRadius), new o2("power", (e8) => f(35, 120, e8.absorption)), new o2("sigmaE", (t4) => 1 + t4.absorption), new o2("density", (e8) => f(0, 0.3, e8.density)), new o2("cloudSize", (e8) => f(0, 0.02, Math.max(0.01, 1 - e8.cloudSize))), new o2("detailSize", (e8) => f(0, 0.2, Math.max(0.01, 1 - e8.detailSize))), new o2("smoothness", (e8) => f(0, 0.5, 1 - e8.smoothness)), new o2("cloudHeight", (e8) => f(0, 1500, e8.cloudHeight)), new o2("coverage", (t4) => t4.coverage), new e3("view", (t4) => t4.viewMatrix), new s("cloudShapeTexture", (t4) => null != t4.noiseTexture ? t4.noiseTexture.textureAtlas : null), new e4("cloudVariables", (t4) => o3(x, t4.coverage, t4.absorption))), i3.constants.add("halfCubeMapSize", "float", 0.5 * e7.cubeMapSize), i3.code.add(o`
    const int STEPS = ${e7.steps === s2.SIXTEEN ? o`16` : e7.steps === s2.HUNDRED ? o`100` : o`200`};
    const int STEPS_LIGHT = 6;
    const float stepL = 300.0 / float(STEPS_LIGHT);
    const float cloudStart = 1500.0;

    vec3 rayDirection(vec2 fragCoord) {
      vec2 xy = fragCoord - halfCubeMapSize;
      return normalize(vec3(-xy, -halfCubeMapSize));
    }

    float remap(float x, float low1, float high1, float low2, float high2) {
      return low2 + (x - low1) * (high2 - low2) / (high1 - low1);
    }

    float saturate(float x) {
      return clamp(x, 0.0, 1.0);
    }`), i3.code.add(o`
    float getCloudShape(vec3 pos, float pOffset) {
      const float textureWidth = ${o.float(t2)};
      const float dataWidth = ${o.float(t2)};
      const float tileRows = ${o.float(r2)};
      const vec3 atlasDimensions = vec3(${o.float(e5)}, ${o.float(e5)}, tileRows * tileRows);

      //Change from Y being height to Z being height
      vec3 p = float(${o.float(o6)}) * pos.xzy;

      //Pixel coordinates of point in the 3D data
      vec3 coord = vec3(mod(p - pOffset * atlasDimensions, atlasDimensions));
      float f = fract(coord.z);
      float level = floor(coord.z);
      float tileY = floor(level / tileRows);
      float tileX = level - tileY * tileRows;

      //The data coordinates are offset by the x and y tile, the two boundary cells between each tile pair and the initial boundary cell on the first row/column
      vec2 offset = atlasDimensions.x * vec2(tileX, tileY) + 2.0 * vec2(tileX, tileY) + 1.0;
      vec2 pixel = coord.xy + offset;
      vec2 data = texture(cloudShapeTexture, mod(pixel, dataWidth) / textureWidth).xy;

      return 1.0 - mix(data.x, data.y, f);
    }

    float getCloudMap(vec2 p){
      // Shift the texture center to origin to avoid seam artifacts
      vec2 uv = (${o.float(a)} * p) / ${o.float(t2)} + 0.5;

      return texture(cloudShapeTexture, uv).a;
    }
    `), i3.code.add(o`float clouds(vec3 p) {
float cloud = saturate(0.5 * mix(0.0, 1.0, min(2.0 * coverage, 1.0)));
if (cloud <= 0.0) {
return 0.0;
}
float cloudMap = getCloudMap(cloudSize * p.xy);
cloud = mix(cloud, min(2.0 * (coverage), 1.0) * cloudMap, min(2.0 * (1.0 - coverage), 1.0));
if (cloud <= 0.0) {
return 0.0;
}
float shape = getCloudShape(8.0 * cloudSize * p, 0.0);
cloud = saturate(remap(cloud, smoothness * shape, 1.0, 0.0, 1.0));
if (cloud <= 0.0) {
return 0.0;
}
float heightFraction = saturate((length(p) - cloudRadius - cloudStart) / cloudHeight);
cloud *= saturate(remap(heightFraction, 0.0, 0.25, 0.0, 1.0)) * smoothstep(1.0, 0.25, heightFraction);
if (cloud <= 0.0) {
return 0.0;
}
return density * saturate(remap(cloud, 0.35 * smoothness * getCloudShape(detailSize * p, 0.0), 1.0, 0.0, 1.0));
}`), i3.code.add(o`vec2 sphereIntersections(vec3 start, vec3 dir, float radius) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float c = dot(start, start) - (radius * radius);
float d = (b * b) - 4.0 * a * c;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}
float HenyeyGreenstein(float g, float costh) {
return (1.0 / (4.0 * 3.1415))  * ((1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * costh, 1.5));
}`), i3.code.add("\n    float multipleOctaves(float extinction, float mu, float stepL) {\n      float attenuation = 1.0;\n      float contribution = 1.0;\n      float phaseAttenuation = 1.0;\n      float luminance = 0.0;\n\n      for (int i = 0; i < 4; i++) {\n        float phase = mix(HenyeyGreenstein(0.0, mu), HenyeyGreenstein(0.3 * phaseAttenuation, mu), 0.7);\n        luminance += contribution * phase * exp(-stepL * extinction * sigmaE * attenuation);\n        attenuation *= 0.2;\n        contribution *= 0.6;\n        phaseAttenuation *= 0.5;\n      }\n\n      return luminance;\n    }"), i3.code.add(o`float lightRay(vec3 org, vec3 p, float phaseFunction, float mu, vec3 sunDirection) {
float lightRayDensity = clouds(p);
lightRayDensity += clouds(p + sunDirection * 1.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 2.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 3.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 4.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 5.0 * stepL);
float beersLaw = multipleOctaves(lightRayDensity, mu, stepL);
return mix(beersLaw * 2.0 * (1.0 - (exp(-stepL * lightRayDensity * 2.0 * sigmaE ))), beersLaw, 0.5 + 0.5 * mu);
}`), i3.code.add(o`float mainRay(vec3 org, vec3 dir, vec3 sunDirection, float distToStart, float totalDistance, out float totalTransmittance) {
if (dir.z < 0.0) {
return 0.0;
}
totalTransmittance = 1.0;
float stepS = totalDistance / float(STEPS);
float cameraHeight = length(org);
float mu = 0.5 + 0.5 * dot(sunDirection, dir);
float phaseFunction = mix(HenyeyGreenstein(-0.3, mu), HenyeyGreenstein(0.3, mu), 0.7);
vec3 p = org + distToStart  * dir;
float dist = distToStart;
float shading = 0.0;
for (int i = 0; i < STEPS; i++) {
float sampleDensity = clouds(p);
float sampleSigmaE = sampleDensity * sigmaE;
if (sampleDensity > 0.0 ) {
float ambient = mix((1.2), (1.6), saturate((length(p) - cloudRadius - cloudStart) / cloudHeight));
float luminance = sampleDensity * (ambient + power * phaseFunction * lightRay(org, p, phaseFunction, mu, sunDirection));
float transmittance = exp(-sampleSigmaE * stepS);
shading += totalTransmittance * (luminance - luminance * transmittance) / sampleSigmaE;
totalTransmittance *= transmittance;
if (totalTransmittance <= 0.001) {
totalTransmittance = 0.0;
break;
}
}
dist += stepS;
p = org + dir * dist;
}
return shading;
}`), i3.code.add(o`void main() {
if (coverage ==  0.0) {
fragColor = vec4(0.0, 1.0, 0.0, 1.0);
return;
}
vec3 rayDir = rayDirection(gl_FragCoord.xy);
rayDir = normalize(view * rayDir);
vec3 viewPos = vec3(0, 0, cloudRadius + 1.0);
bool hitsPlanet = rayDir.z < 0.0;
float hazeFactor = smoothstep(-0.01, mix(0.0, 0.075, cloudVariables.x), abs(dot(rayDir, vec3(0, 0, 1))));
float totalTransmittance = 1.0;
float shading = 0.0;
if (hitsPlanet) {
shading = clamp(1.0 - cloudVariables.y, 0.6, 1.0) * (1.0 - hazeFactor);
totalTransmittance = hazeFactor;
fragColor = vec4(shading, totalTransmittance, shading, totalTransmittance);
return;
}
vec2 rayStartIntersect = sphereIntersections(viewPos, rayDir, cloudRadius + cloudStart);
vec2 rayEndIntersect = sphereIntersections(viewPos, rayDir, cloudRadius + cloudStart + cloudHeight);
float distToStart = rayStartIntersect.y;
float totalDistance = rayEndIntersect.y - distToStart;
vec3 sunDirection = normalize(vec3(0, 0, 1));
shading = 0.5 * mainRay(viewPos, rayDir, sunDirection, distToStart, totalDistance, totalTransmittance);
shading = mix(clamp(1.0 - cloudVariables.y, 0.6, 1.0), shading, hazeFactor);
totalTransmittance = mix(0.0, totalTransmittance, hazeFactor);
fragColor = vec4(shading, totalTransmittance, shading, totalTransmittance);
}`), o7;
}
var x = n();
var b = Object.freeze(Object.defineProperty({
  __proto__: null,
  CloudsPassParameters: w,
  build: S
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  s2 as s,
  i,
  e6 as e,
  w,
  S,
  b
};
//# sourceMappingURL=chunk-YM3C5QII.js.map
