import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i,
  p
} from "./chunk-ZTTGFJJT.js";
import {
  N,
  n as n2,
  u
} from "./chunk-TFCCIKDP.js";
import {
  a as a3,
  t
} from "./chunk-2ZXVDYHF.js";
import {
  s as s3
} from "./chunk-FCVY35OB.js";
import {
  b as b2,
  d,
  y
} from "./chunk-2B3WLK32.js";
import {
  I
} from "./chunk-47DYJR3W.js";
import {
  e as e5
} from "./chunk-XK3CKE5Q.js";
import {
  e as e4
} from "./chunk-AMH7CZMY.js";
import {
  o as o3
} from "./chunk-Q5JLNMWZ.js";
import {
  a as a2
} from "./chunk-AABDXAD3.js";
import {
  o as o2
} from "./chunk-LGS63R4F.js";
import {
  a
} from "./chunk-U4EMQMDC.js";
import {
  e as e3,
  o
} from "./chunk-YGAXDKHF.js";
import {
  b
} from "./chunk-KOI252FF.js";
import {
  e as e2
} from "./chunk-2OZSYJDX.js";
import {
  e,
  g,
  r as r2,
  s as s2,
  z
} from "./chunk-MZM4INJV.js";
import {
  n,
  r
} from "./chunk-J4GMQHGL.js";
import {
  s
} from "./chunk-FQBTLEUI.js";

// ../../../node_modules/@arcgis/core/views/3d/environment/CloudsParameters.js
var A = class {
  constructor() {
    this.readChannels = u.RG, this.renderingStage = n2.FINISHED, this.startTime = 0, this.startTimeHeightFade = 0, this.cameraPositionLastFrame = n(), this.parallax = new C(), this.parallaxNew = new C(), this.pointOnGround = n(), this.fadeMode = O.HIDE, this.fadeFactor = 0, this.opacity = 0;
  }
  updateParallax(t2) {
    const s5 = this.parallax, o4 = s2(t2.eye);
    if (s5.radiusCurvatureCorrectionFactor = 0.84 * Math.sqrt(Math.max(o4 * o4 - s.radius * s.radius, 0)) / o4, d(g2, s5.anchorPointClouds, S), b(s5.transform, o, S[3], y(S)), this.fadeMode === O.CROSS_FADE) {
      const t3 = this.parallaxNew;
      d(g2, t3.anchorPointClouds, S), b(t3.transform, o, S[3], y(S));
    }
  }
  updateFading(t2, a4, i2, s5) {
    this.isFading && this._advanceFading(i2, s5), this._evaluateFading(t2, a4, i2);
  }
  _evaluateFading(t2, a4, i2) {
    const s5 = t2.relativeElevation, e6 = this._calculateDistanceToAnchorPoint(t2);
    if ((s5 > 1.7 * p || s5 < -p || e6 > x) && this.opacity > 0) this._setFade(O.HIDE, i2);
    else if (!this.isFading) {
      if ((s5 > p || s5 < -0.35 * p || e6 > M) && this.opacity > 0) this._setFade(O.FADE_OUT, i2);
      else if (s5 <= p && s5 >= -0.35 * p && a4 === I.IDLE && N(this.data)) {
        if (0 === this.opacity) return void this._setFade(O.FADE_IN, i2);
        (e6 > y2 || this.renderingStage === n2.FADING) && this._setFade(O.CROSS_FADE, i2);
      }
    }
  }
  _advanceFading(t2, a4) {
    this._switchReadChannels(), this._updateAnchorPoint(), this._advanceFadingFactorAndOpacity(t2, a4);
  }
  _advanceFadingFactorAndOpacity(a4, i2) {
    if (this.fadeFactor < 1) return this.fadeFactor = i2 ? e2((a4 - this.startTime) / (I2 * i2), 0, 1) : 1, this.fadeMode === O.FADE_OUT && (this.opacity = 1 - this.fadeFactor), this.fadeMode === O.FADE_IN && (this.opacity = this.fadeFactor), void (this.fadeMode === O.CROSS_FADE && (this.opacity = 1));
    this.fadeFactor = 0, this.fadeMode === O.FADE_OUT && (this.opacity = 0), this.fadeMode === O.FADE_IN && (this.opacity = 1), this.fadeMode === O.CROSS_FADE && (this.opacity = 1), this.fadeMode = O.NONE;
  }
  _switchReadChannels() {
    const t2 = this.fadeMode === O.CROSS_FADE && 1 === this.fadeFactor, a4 = this.fadeMode === O.FADE_IN && 0 === this.fadeFactor;
    this.renderingStage === n2.FADING && (t2 || a4) && (this.readChannels = 1 - this.readChannels, this.renderingStage = n2.FINISHED);
  }
  _calculateDistanceToAnchorPoint(t2) {
    return z(this.pointOnGround, t2.eye), g(this.pointOnGround, this.pointOnGround, s.radius), s2(e(N2, this.parallax.anchorPointClouds, this.pointOnGround));
  }
  _updateAnchorPoint() {
    this.fadeMode === O.CROSS_FADE && (0 === this.fadeFactor && r2(this.parallaxNew.anchorPointClouds, this.pointOnGround), 1 === this.fadeFactor && r2(this.parallax.anchorPointClouds, this.parallaxNew.anchorPointClouds)), this.fadeMode === O.FADE_IN && 0 === this.fadeFactor && r2(this.parallax.anchorPointClouds, this.pointOnGround);
  }
  _setFade(t2, a4) {
    switch (t2) {
      case O.HIDE:
        this.opacity = 0;
        break;
      case O.FADE_OUT:
        this.opacity = 1;
        break;
      case O.FADE_IN:
        this.opacity = 0;
        break;
      case O.CROSS_FADE:
        this.opacity = 1;
    }
    this.fadeMode = t2, this.fadeFactor = 0, this.startTime = a4;
  }
  get isFading() {
    return this.fadeMode === O.FADE_OUT || this.fadeMode === O.FADE_IN || this.fadeMode === O.CROSS_FADE;
  }
};
var O;
!function(t2) {
  t2[t2.NONE = 0] = "NONE", t2[t2.HIDE = 1] = "HIDE", t2[t2.FADE_OUT = 2] = "FADE_OUT", t2[t2.FADE_IN = 3] = "FADE_IN", t2[t2.CROSS_FADE = 4] = "CROSS_FADE";
}(O || (O = {}));
var C = class {
  constructor() {
    this.anchorPointClouds = n(), this.radiusCurvatureCorrectionFactor = 0, this.transform = e3();
  }
};
var g2 = r(0, 0, 1);
var S = b2();
var N2 = n();
var I2 = 1.25;
var y2 = 34e3;
var M = 64e3;
var x = 2e5;

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/TextureCubePassUniform.js
var s4 = class extends a2 {
  constructor(e6, s5) {
    super(e6, "samplerCube", a.Pass, (r3, o4, t2) => r3.bindTexture(e6, s5(o4, t2)));
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/CloudsParallaxShading.glsl.js
function v(v2) {
  const R = v2.fragment;
  R.uniforms.add(new e5("rotationMatrixClouds", (o4, a4) => a4.cloudsFade.parallax.transform), new e5("rotationMatrixCloudsCrossFade", (o4, a4) => a4.cloudsFade.parallaxNew.transform), new e4("anchorPosition", (o4, a4) => a4.cloudsFade.parallax.anchorPointClouds), new e4("anchorPositionCrossFade", (o4, a4) => a4.cloudsFade.parallaxNew.anchorPointClouds), new o3("cloudsHeight", () => i), new o3("radiusCurvatureCorrectionFactor", (o4, a4) => a4.cloudsFade.parallax.radiusCurvatureCorrectionFactor), new o3("totalFadeInOut", (o4, a4) => 1 - a4.cloudsFade.opacity), new o3("crossFadeAnchorFactor", (a4, t2) => e2(t2.cloudsFade.fadeFactor, 0, 1)), new s4("cubeMap", (o4, a4) => a4.cloudsFade.data?.cubeMap?.colorTexture ?? null), new s3("crossFade", (o4, a4) => a4.cloudsFade.fadeMode === O.CROSS_FADE), new s3("readChannelsRG", (o4, a4) => a4.cloudsFade.readChannels === u.RG), new s3("fadeTextureChannels", (o4, a4) => a4.cloudsFade.renderingStage === n2.FADING)), R.constants.add("planetRadius", "float", s.radius), R.code.add(o2`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos)
{
float radiusClouds = planetRadius + cloudsHeight;
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusClouds * radiusClouds;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
vec3 intersectionPont = cameraPosition + dir * pointIntDist;
intersectionPont =  intersectionPont - spherePos;
return intersectionPont;
}`), R.code.add(o2`vec3 correctForPlanetCurvature(vec3 dir)
{
dir.z = dir.z*(1.-radiusCurvatureCorrectionFactor) + radiusCurvatureCorrectionFactor;
return dir;
}`), R.code.add(o2`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec)
{
return (rotMat * vec4(inVec, 0.0)).xyz;
}`), t(R), a3(R), R.code.add(o2`const float SUNSET_TRANSITION_FACTOR = 0.3;
const vec3 RIM_COLOR = vec3(0.28, 0.175, 0.035);
const float RIM_SCATTERING_FACTOR = 140.0;
const float BACKLIGHT_FACTOR = 0.2;
const float BACKLIGHT_SCATTERING_FACTOR = 10.0;
const float BACKLIGHT_TRANSITION_FACTOR = 0.3;
vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds)
{
float upDotLight = dot(normalize(cameraPosition), normalize(mainLightDirection));
float dirDotLight = max(dot(normalize(-worldSpaceRay), normalize(mainLightDirection)), 0.0);
float sunsetTransition = clamp(pow(max(upDotLight, 0.0), SUNSET_TRANSITION_FACTOR), 0.0, 1.0);
vec3 ambientLight = calculateAmbientIrradiance(normalize(cameraPosition),  0.0);
vec3 mainLight = evaluateMainLighting(normalize(cameraPosition),  0.0);
vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));
float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
float rimLightIntensity = 0.5 + 0.5 *pow(max(upDotLight, 0.0), 0.35);
vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, RIM_SCATTERING_FACTOR)) * scatteringMod;
float additionalLight = BACKLIGHT_FACTOR * pow(dirDotLight, BACKLIGHT_SCATTERING_FACTOR) * (1. - pow(sunsetTransition, BACKLIGHT_TRANSITION_FACTOR)) ;
return vec3(baseCloudColor * (1. + additionalLight) + directSunScattering);
}`), R.code.add(o2`vec4 getCloudData(vec3 rayDir, bool readOtherChannel)
{
vec4 cloudData = texture(cubeMap, rayDir);
float mu = dot(rayDir, vec3(0, 0, 1));
bool readChannels = readChannelsRG ^^ readOtherChannel;
if (readChannels) {
cloudData = vec4(vec3(cloudData.r), cloudData.g);
} else {
cloudData = vec4(vec3(cloudData.b), cloudData.a);
}
if (length(cloudData) == 0.0) {
return vec4(cloudData.rgb, 1.0);
}
return cloudData;
}`), R.code.add(o2`vec4 renderCloudsNoFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected, false);
float totalTransmittance = clamp(cloudData.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudData.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), totalTransmittance);
}`), R.code.add(o2`vec4 renderCloudsCrossFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected, false);
vec4 cloudColor = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPositionCrossFade);
worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixCloudsCrossFade, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = getCloudData(worldRayRotatedCorrected, fadeTextureChannels);
vec4 cloudColorCrossFade = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorCrossFade, crossFadeAnchorFactor);
float totalTransmittance = clamp(cloudColor.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudColor.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(cloudColor.rgb, totalTransmittance);
}`), R.code.add(o2`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition)
{
return crossFade ? renderCloudsCrossFade(worldRay, cameraPosition) : renderCloudsNoFade(worldRay, cameraPosition);
}`);
}

export {
  A,
  O,
  v
};
//# sourceMappingURL=chunk-YUYMEQ3T.js.map
