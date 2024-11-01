import {
  c
} from "./chunk-X5UPCJEP.js";
import {
  f as f2,
  o as o3,
  s as s2
} from "./chunk-JUTKZ3GO.js";
import {
  s as s3
} from "./chunk-5RHKQDDL.js";
import {
  d,
  f,
  p,
  w
} from "./chunk-KTRZHJ2M.js";
import {
  e as e2
} from "./chunk-ACZYDHB3.js";
import {
  s
} from "./chunk-UCPBGEQD.js";
import {
  o as o2
} from "./chunk-R5ZE5A4K.js";
import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-4MMTPKY4.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl.js
function o4(o5) {
  o5.uniforms.add(new s3("alignPixelEnabled", (e3, i) => i.alignPixelEnabled)), o5.code.add(o`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`), o5.code.add(o`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl.js
var p2 = 0.5;
function d2(d3, u) {
  d3.include(s2), d3.attributes.add(e.POSITION, "vec3"), d3.attributes.add(e.NORMAL, "vec3"), d3.attributes.add(e.CENTEROFFSETANDDISTANCE, "vec4");
  const v = d3.vertex;
  d(v, u), f(v, u), v.uniforms.add(new e2("viewport", (e3, t2) => t2.camera.fullViewport), new o2("polygonOffset", (e3) => e3.shaderPolygonOffset), new o2("cameraGroundRelative", (e3, t2) => t2.camera.aboveGround ? 1 : -1)), u.hasVerticalOffset && f2(v), v.constants.add("smallOffsetAngle", "float", 0.984807753012208), v.code.add(o`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`), v.code.add(o`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${u.multipassEnabled ? o.float(0) : o`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `), u.draped && !u.hasVerticalOffset || p(v), u.draped || (v.uniforms.add(new o2("perDistancePixelRatio", (e3, t2) => Math.tan(t2.camera.fovY / 2) / (t2.camera.fullViewport[2] / 2))), v.code.add(o`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${o.float(p2)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)), u.screenCenterOffsetUnitsEnabled && w(v), u.hasScreenSizePerspective && o3(v), v.code.add(o`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${u.draped ? "" : "applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${u.hasScreenSizePerspective && (u.hasVerticalOffset || u.screenCenterOffsetUnitsEnabled) ? "vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);" : ""}

      ${u.hasVerticalOffset ? u.hasScreenSizePerspective ? "float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);" : "float verticalOffsetScreenHeight = verticalOffset.x;" : ""}

      ${u.hasVerticalOffset ? o`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;` : ""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${u.screenCenterOffsetUnitsEnabled ? "" : o`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${u.screenCenterOffsetUnitsEnabled ? u.hasScreenSizePerspective ? "float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);" : "float centerOffsetY = centerOffset.y;" : ""}

      ${u.screenCenterOffsetUnitsEnabled ? "posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;" : ""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/HUDVisibility.glsl.js
function t(t2) {
  t2.vertex.uniforms.add(new o2("renderTransparentlyOccludedHUD", (e3, o5) => o5.hudRenderStyle === c.Occluded ? 1 : o5.hudRenderStyle === c.NotOccluded ? 0 : 0.75), new e2("viewport", (e3, r) => r.camera.fullViewport), new s("hudVisibilityTexture", (e3, r) => r.hudVisibility?.getTexture())), t2.vertex.include(o4), t2.vertex.code.add(o`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`);
}

export {
  o4 as o,
  p2 as p,
  d2 as d,
  t
};
//# sourceMappingURL=chunk-MAG65NGG.js.map
