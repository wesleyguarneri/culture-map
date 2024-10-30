import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i as i2
} from "./chunk-RNVVJN43.js";
import {
  a,
  e as e8
} from "./chunk-7GRSBOIB.js";
import {
  e as e5
} from "./chunk-MHGADXDL.js";
import {
  e as e7
} from "./chunk-PFTDB6ZJ.js";
import {
  o as o4
} from "./chunk-HMPRRFR4.js";
import {
  f
} from "./chunk-6NVF5BZF.js";
import {
  o as o5
} from "./chunk-DUV7OLAZ.js";
import {
  c
} from "./chunk-KSOKDIBG.js";
import {
  e as e6
} from "./chunk-3NWWTJOW.js";
import {
  s
} from "./chunk-TRF6JO5N.js";
import {
  o as o6
} from "./chunk-ZHVMMFTW.js";
import {
  e as e4
} from "./chunk-XK3CKE5Q.js";
import {
  e as e3
} from "./chunk-AMH7CZMY.js";
import {
  n,
  o as o3
} from "./chunk-LGS63R4F.js";
import {
  e as e2,
  o as o2
} from "./chunk-YGAXDKHF.js";
import {
  e,
  i
} from "./chunk-KOI252FF.js";
import {
  o
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/LocalFromScreenSpace.glsl.js
var m = class extends n {
  constructor() {
    super(...arguments), this.localOrigin = o();
  }
};
function n2(i3) {
  i3.include(f), i3.fragment.uniforms.add(new e4("inverseViewMatrix", (i4, t) => {
    const a2 = e2();
    return i(a2, t.camera.viewMatrix, i4.localOrigin), e(a2, a2);
  })), i3.fragment.code.add(o3`vec4 reconstructLocalPosition(vec2 coord, float linearDepth) {
vec4 cameraSpace = vec4(reconstructPosition(coord, linearDepth), 1.0);
return inverseViewMatrix * cameraSpace;
}`);
}

// ../../../node_modules/@arcgis/core/chunks/Viewshed.glsl.js
var x = class extends m {
  constructor() {
    super(...arguments), this.targetVector = [1, 0, 0], this.upVector = [0, 0, 1], this.fovs = [45, 45], this.headingAndTilt = [0, 0], this.shadowMap = {
      depthTexture: null,
      nearFar: [1, 100],
      numActiveFaces: 1,
      atlasRegions: [[0, 0, 1, 1]]
    }, this.projectionMatrices = o2.flat(), this.viewMatrices = o2.flat();
  }
};
function b(i3) {
  const o7 = new o6(), s2 = o7.fragment;
  o7.include(o5), o7.include(n2), o7.include(e5), s2.include(c), s2.include(a), s2.uniforms.add(new s("depthTexture", (e9, i4) => i4.depth?.attachment)), s2.uniforms.add(new e4("inverseProjectionMatrix", (e9, i4) => i4.camera.inverseProjectionMatrix), new e4("inverseViewNormalMatrix", (i4, o8) => e(M, o8.camera.viewInverseTransposeMatrix))), s2.uniforms.add(new e3("viewshedTargetVector", (e9, i4) => e9.targetVector), new e3("viewshedUpVector", (e9, i4) => e9.upVector), new e6("viewshedFOVs", (e9, i4) => e9.fovs), new e6("viewshedHeadingAndTilt", (e9, i4) => e9.headingAndTilt), new e6("viewshedNearFar", (e9, i4) => e9.shadowMap.nearFar ?? [1, 100])), s2.uniforms.add(new s("viewshedShadowMap", (e9) => e9.shadowMap.depthTexture), new e8("viewshedProjectionMatrices", (e9, i4) => e9.projectionMatrices, 6), new e8("viewshedViewMatrices", (e9, i4) => e9.viewMatrices, 6), new e7("viewshedNumFaces", (e9, i4) => e9.shadowMap.numActiveFaces), new o4("viewshedAtlasRegions", (e9, i4) => e9.shadowMap.atlasRegions.flat(), 24)), s2.constants.add("visibleColor", "vec4", [0, 1, 0, 0.5]), s2.constants.add("occludedColor", "vec4", [1, 0, 0, 0.5]);
  const x2 = i3.useNormalMap;
  return x2 ? (s2.uniforms.add(new s("normalMap", (e9, i4) => e9.normalTexture)), s2.code.add(o3`vec3 normalFromTexture() {
vec4 norm4 = texture(normalMap, uv);
vec3 nNormal = vec3(-1.0) + 2.0 * norm4.xyz;
return normalize((inverseViewNormalMatrix * vec4(nNormal, 1.0)).xyz);
}`)) : o7.include(i2), s2.code.add(o3`
    // UV coordinates of point projected onto viewshed shadow map
    vec2 getViewshedUv(vec4 worldPosition, int face) {
      mat4 viewshedMatrix = viewshedProjectionMatrices[face];
      vec4 viewshedUv4 = viewshedMatrix * worldPosition;
      vec3 viewshedUv = viewshedUv4.xyz / viewshedUv4.w;
      return viewshedUv.xy;
    }

    float viewshedDepthToFloat(float depth) {
      return (depth - viewshedNearFar[0]) / (viewshedNearFar[1] - viewshedNearFar[0]);
    }

    // Orthographic depth to viewshed of given point and given cube map face in range [0, 1].
    float getOrthographicDepthToViewshed(vec4 worldPosition, int face) {
      mat4 viewshedViewMatrix = viewshedViewMatrices[face];
      vec4 viewshedUv4 = viewshedViewMatrix * worldPosition;
      vec3 viewshedUv = viewshedUv4.xyz / viewshedUv4.w;
      float depth = -viewshedUv.z;
      return viewshedDepthToFloat(depth);
    }

    // Read depth from shadow map given uv and cube map face
    float getDepthFromShadowMap(vec2 uv, int face) {
      int index = 4 * face;

      float umin = viewshedAtlasRegions[index];
      float umax = viewshedAtlasRegions[index + 1];
      float vmin = viewshedAtlasRegions[index + 2];
      float vmax = viewshedAtlasRegions[index + 3];

      vec4 atlasRegion = vec4(umin, vmin, umax, vmax);
      return rgba4ToFloat(textureAtlasLookup(viewshedShadowMap, uv, atlasRegion));
    }

    struct ViewshedPoint {
      int face;
      vec2 uv;
      bool isWithin;
      float orthographicDepth;
    };

    // Find cube map face the given position lies in and return relevant information about it
    bool getViewshedPoint(vec4 worldPosition, out ViewshedPoint point) {
      vec3 nUp = normalize(viewshedUpVector);

      // Try with all active cube map faces
      for(int i=0; i < viewshedNumFaces; i++) {

        // Check if when projected, point lies within shadow map texture
        vec2 viewshedUv = getViewshedUv(worldPosition, i);
        if (viewshedUv.x > 0.0 && viewshedUv.x < 1.0 && viewshedUv.y > 0.0 && viewshedUv.y < 1.0) {
          float orthoDepth = getOrthographicDepthToViewshed(worldPosition, i);
          if (orthoDepth >= 0.0) { // found a cube map face

            // Check whether point is really inside viewshed geometry, not just within the camera frustum

            // outside farDistance
            vec3 position = worldPosition.xyz;
            bool isWithin = length(position) <= viewshedNearFar[1];

            // horizontally outside fov
            float t = dot(nUp, position);
            bool isBottomHalf = t > 0.0;
            vec3 nProjVector = normalize(position - t * nUp);
            if (isWithin) {
              float angle = acos(dot(normalize(viewshedTargetVector), nProjVector));
              if (angle > viewshedFOVs[0] / 2.0) {
                isWithin = false;
              }
            }

            // vertically outside fov
            if (isWithin) {
              float angle = acos(dot(nProjVector, normalize(position)));
              if (!isBottomHalf) {
                angle = -angle;
              }
              float tilt = viewshedHeadingAndTilt[1];
              float limit = viewshedFOVs[1] / 2.0;
              if (angle > limit || angle < -limit) {
                isWithin = false;
              }
            }

            point = ViewshedPoint(i, viewshedUv, isWithin, orthoDepth);
            return true;
          }
        }
      }

      // no cube face matches
      return false;
    }

    float normalCosAngle(float linearDepth, vec3 localPosition) {
      ${x2 ? o3`vec3 normal = normalFromTexture();` : o3`
        vec3 cameraSpacePosition = reconstructPosition(gl_FragCoord.xy, linearDepth);
        vec3 normal = normalFromDepth(depthTexture, cameraSpacePosition, gl_FragCoord.xy, uv);
        normal = (inverseViewNormalMatrix * vec4(normal, 1.0)).xyz;
        `};

      vec3 viewingDir = normalize(localPosition);
      return dot(normal, viewingDir);
    }

    void main() {
      float depth = depthFromTexture(depthTexture, uv);

      // Outside camera planes
      if (depth >= 1.0 || depth <= 0.0) {
        return;
      }

      float linearDepth = linearizeDepth(depth);

      // Relative to viewshed position
      vec4 localPosition = reconstructLocalPosition(gl_FragCoord.xy, linearDepth);

      ViewshedPoint point;
      bool foundFace = getViewshedPoint(localPosition, point);

      // Outside every viewshed
      if (!foundFace || !point.isWithin) {
        return;
      }

      float viewshedDepth = getDepthFromShadowMap(point.uv, point.face);
      float distance = point.orthographicDepth;

      bool visible = distance < viewshedDepth;
      fragColor = visible ? visibleColor : occludedColor;

      float cosAngle = normalCosAngle(linearDepth, localPosition.xyz);

      // Everything facing away, and close to parallel is considered occluded.
      // Theshold corresponds to around 0.6 degrees, tuned empirically.
      if (cosAngle > -0.01) {
        fragColor = occludedColor;
      }
    }`), o7;
}
var M = e2();
var P = Object.freeze(Object.defineProperty({
  __proto__: null,
  ViewshedPassParameters: x,
  build: b
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  x,
  b,
  P
};
//# sourceMappingURL=chunk-RQNBFP7M.js.map
