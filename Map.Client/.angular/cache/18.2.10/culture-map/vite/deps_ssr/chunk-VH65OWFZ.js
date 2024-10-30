import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c,
  m,
  n,
  p as p2,
  s as s2,
  s2 as s3,
  w as w2
} from "./chunk-DTMLHZFB.js";
import {
  o as o4
} from "./chunk-62ZEBDPC.js";
import {
  a as a2
} from "./chunk-ZFMS3XGM.js";
import {
  e as e5
} from "./chunk-QWQJOAVR.js";
import {
  t
} from "./chunk-YLQMUXQA.js";
import {
  P
} from "./chunk-4U7LUZFD.js";
import {
  d,
  p,
  w
} from "./chunk-T257OY4U.js";
import {
  e as e4
} from "./chunk-ZDFN6OZC.js";
import {
  e as e3
} from "./chunk-3NWWTJOW.js";
import {
  s
} from "./chunk-TRF6JO5N.js";
import {
  o as o5
} from "./chunk-ZHVMMFTW.js";
import {
  o as o2
} from "./chunk-HITI6WDM.js";
import {
  e as e2
} from "./chunk-XK3CKE5Q.js";
import {
  a
} from "./chunk-7GHUVMBI.js";
import {
  o as o3
} from "./chunk-Q5JLNMWZ.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  e
} from "./chunk-D7C26LZP.js";

// ../../../node_modules/@arcgis/core/chunks/LineMarker.glsl.js
function C(C2) {
  const j2 = new o5(), L = C2.multipassEnabled && C2.output === o2.Color, M = C2.space === p2.World;
  j2.include(c, C2), j2.include(n, C2);
  const {
    vertex: k,
    fragment: N
  } = j2;
  return N.include(a), d(k, C2), j2.attributes.add(e.POSITION, "vec3"), j2.attributes.add(e.PREVPOSITION, "vec3"), j2.attributes.add(e.UV0, "vec2"), j2.varyings.add("vColor", "vec4"), j2.varyings.add("vpos", "vec3"), j2.varyings.add("vUV", "vec2"), j2.varyings.add("vSize", "float"), L && j2.varyings.add("depth", "float"), C2.hasTip && j2.varyings.add("vLineWidth", "float"), k.uniforms.add(new e3("nearFar", (e6, r) => r.camera.nearFar), new e4("viewport", (e6, r) => r.camera.fullViewport)), k.code.add(o`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`), k.code.add(o`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`), M ? (j2.attributes.add(e.NORMAL, "vec3"), p(k), k.constants.add("tiltThreshold", "float", 0.7), k.code.add(o`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)) : k.code.add(o`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`), k.code.add(o`
      #define vecN ${M ? "vec3" : "vec2"}

      vecN normalizedSegment(vecN pos, vecN prev) {
        vecN segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${M ? "vec3(0.0, 0.0, 0.0)" : "vec2(0.0, 0.0)"};
      }

      vecN displace(vecN pos, vecN prev, float displacementLen) {
        vecN segment = normalizedSegment(pos, prev);

        vecN displacementDirU = perpendicular(segment);
        vecN displacementDirV = segment;

        ${C2.anchor === s2.Tip ? "pos -= 0.5 * displacementLen * displacementDirV;" : ""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `), C2.space === p2.Screen && (k.uniforms.add(new e2("inverseProjectionMatrix", (e6, r) => r.camera.inverseProjectionMatrix)), k.code.add(o`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`), k.code.add(o`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`), k.uniforms.add(new o3("perScreenPixelRatio", (e6, r) => r.camera.perScreenPixelRatio)), k.code.add(o`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${C2.hasCap ? "\n                if(prev.z > posLeft.z) {\n                  vec2 diff = posLeft.xy - posRight.xy;\n                  planeOrigin.xy += perpendicular(diff) / 2.0;\n                }\n              " : ""};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)), w(k), k.code.add(o`void main(void) {
if (uv0.y == 0.0) {
gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
}
else {
float lineWidth = getLineWidth();
float screenMarkerSize = getScreenMarkerSize();
vec4 pos  = view * vec4(position, 1.0);
vec4 prev = view * vec4(prevPosition, 1.0);
clip(pos, prev);`), M ? (C2.hideOnShortSegments && k.code.add(o`if (areWorldMarkersHidden(pos, prev)) {
gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
return;
}`), k.code.add(o`pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos));
vec4 displacedPosScreen = projectAndScale(pos);`)) : (k.code.add(o`vec4 posScreen = projectAndScale(pos);
vec4 prevScreen = projectAndScale(prev);
vec4 displacedPosScreen = posScreen;
displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);`), C2.space === p2.Screen && k.code.add(o`vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));
vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);
pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
displacedPosScreen = projectAndScale(pos);`)), k.code.add(o`
        ${L ? "depth = pos.z;" : ""}

        // Convert back into NDC
        displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

        // Convert texture coordinate into [0,1]
        vUV = (uv0 + 1.0) / 2.0;

        ${M ? "" : "vUV *= displacedPosScreen.w;"}

        ${C2.hasTip ? "vLineWidth = lineWidth;" : ""}

        vSize = screenMarkerSize;
        vColor = getColor();

        // Use camera space for slicing
        vpos = pos.xyz;

        gl_Position = displacedPosScreen;
      }
    }
  `), L && j2.include(a2, C2), j2.include(P, C2), N.uniforms.add(new e4("intrinsicColor", (e6) => e6.color), new s("tex", (e6) => e6.markerTexture)), N.include(e5), j2.constants.add("texelSize", "float", 1 / m), N.code.add(o`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = rgba2float(texture(tex, samplePos)) - 0.5;
float distance = sdf * vSize;
distance -= 0.5;
return clamp(0.5 - distance, 0.0, 1.0);
}`), C2.hasTip && (j2.constants.add("relativeMarkerSize", "float", s3 / m), j2.constants.add("relativeTipLineWidth", "float", w2), N.code.add(o`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * vLineWidth);

      ${M ? "halfTipLineWidth *= fwidth(samplePos.y);" : ""}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `)), C2.transparencyPassType === o4.ColorAlpha && (j2.outputs.add("fragColor", "vec4", 0), j2.outputs.add("fragAlpha", "float", 1)), j2.constants.add("symbolAlphaCutoff", "float", t), N.code.add(o`
  void main() {
    discardBySlice(vpos);
    ${L ? "terrainDepthTest(depth);" : ""}

    vec4 finalColor = intrinsicColor * vColor;

    ${M ? "vec2 samplePos = vUV;" : "vec2 samplePos = vUV * gl_FragCoord.w;"}

    ${C2.hasTip ? "finalColor.a *= max(markerAlpha(samplePos), tipAlpha(samplePos));" : "finalColor.a *= markerAlpha(samplePos);"}

    ${C2.output === o2.ObjectAndLayerIdColor ? o`finalColor.a = 1.0;` : ""}

    if (finalColor.a < symbolAlphaCutoff) {
      discard;
    }

    ${C2.output === o2.Color ? o`fragColor = highlightSlice(finalColor, vpos);` : ""}
    ${C2.output === o2.Color && C2.transparencyPassType === o4.ColorAlpha ? o`
            fragColor = premultiplyAlpha(fragColor);
            fragAlpha = fragColor.a;` : ""}
    ${C2.output === o2.Highlight ? o`fragColor = vec4(1.0);` : ""}
  }
  `), j2;
}
var j = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: C
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  C,
  j
};
//# sourceMappingURL=chunk-VH65OWFZ.js.map
