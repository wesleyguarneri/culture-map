import {
  f
} from "./chunk-KTRZHJ2M.js";
import {
  e as e2
} from "./chunk-ACZYDHB3.js";
import {
  e
} from "./chunk-PPMDUJ4E.js";
import {
  o as o2
} from "./chunk-SZWWBMQN.js";
import {
  n as n2
} from "./chunk-IMVP5ADD.js";
import {
  s
} from "./chunk-H7WPOTQH.js";
import {
  o
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js
function s2(e3) {
  e3.vertex.code.add(o2`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`), e3.vertex.code.add(o2`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`), e3.vertex.code.add(o2`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`), e3.vertex.code.add(o2`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`), e3.vertex.code.add(o2`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`), e3.vertex.code.add(o2`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);
}
function t(e3) {
  e3.uniforms.add(new e("screenSizePerspective", (e4) => i(e4.screenSizePerspective)));
}
function o3(e3) {
  e3.uniforms.add(new e("screenSizePerspectiveAlignment", (e4) => i(e4.screenSizePerspectiveAlignment || e4.screenSizePerspective)));
}
function i(a2) {
  return o(n3, a2.parameters.divisor, a2.parameters.offset, a2.minScaleFactor);
}
var n3 = n();

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js
function a(e3, r) {
  const c = e3.vertex;
  r.hasVerticalOffset ? (f2(c), r.hasScreenSizePerspective && (e3.include(s2), o3(c), f(e3.vertex, r)), c.code.add(o2`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${r.spherical ? o2`vec3 worldNormal = normalize(worldPos + localOrigin);` : o2`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${r.hasScreenSizePerspective ? o2`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);` : o2`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)) : c.code.add(o2`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`);
}
var s3 = n2();
function f2(r) {
  r.uniforms.add(new e2("verticalOffset", (r2, t2) => {
    const {
      minWorldLength: l,
      maxWorldLength: o4,
      screenLength: c
    } = r2.verticalOffset, i2 = Math.tan(0.5 * t2.camera.fovY) / (0.5 * t2.camera.fullViewport[3]), a2 = t2.camera.pixelRatio || 1;
    return s(s3, c * a2, i2, l, o4);
  }));
}

export {
  s2 as s,
  t,
  o3 as o,
  a,
  f2 as f
};
//# sourceMappingURL=chunk-JUTKZ3GO.js.map
