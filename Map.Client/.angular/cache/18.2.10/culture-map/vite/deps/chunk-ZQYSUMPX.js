import {
  d as d2
} from "./chunk-BG32AOSQ.js";
import {
  l
} from "./chunk-33LKI2Y7.js";
import {
  e as e2
} from "./chunk-MBMY7SS6.js";
import {
  a
} from "./chunk-ICUHXX2J.js";
import {
  o as o4
} from "./chunk-VIIVMRRO.js";
import {
  a as a2
} from "./chunk-ZKSEQXDM.js";
import {
  e as e4
} from "./chunk-675UQNXB.js";
import {
  o as o5
} from "./chunk-DXGCBLDW.js";
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
  o as o6
} from "./chunk-SIZK72CP.js";
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

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/PatternStyle.js
var a3;
!function(a4) {
  a4[a4.Horizontal = 0] = "Horizontal", a4[a4.Vertical = 1] = "Vertical", a4[a4.Cross = 2] = "Cross", a4[a4.ForwardDiagonal = 3] = "ForwardDiagonal", a4[a4.BackwardDiagonal = 4] = "BackwardDiagonal", a4[a4.DiagonalCross = 5] = "DiagonalCross", a4[a4.COUNT = 6] = "COUNT";
}(a3 || (a3 = {}));

// ../../../node_modules/@arcgis/core/chunks/Pattern.glsl.js
var b = 0.70710678118;
var y = b;
var C = 0.08715574274;
function S(S2) {
  const T2 = new o6(), x = S2.multipassEnabled && S2.output === o2.Color, {
    vertex: P2,
    fragment: R,
    attributes: A,
    varyings: V
  } = T2;
  d(P2, S2), T2.include(o5, S2), T2.include(e2, S2), T2.include(l, S2), T2.include(d2, S2), S2.draped ? P2.uniforms.add(new o3("worldToScreenRatio", (e5, o7) => 1 / o7.screenToPCSRatio)) : A.add(e.BOUNDINGRECT, "mat3"), A.add(e.POSITION, "vec3"), A.add(e.UVMAPSPACE, "vec4"), S2.vvColor && A.add(e.COLORFEATUREATTRIBUTE, "float"), V.add("vColor", "vec4"), V.add("vpos", "vec3"), V.add("vuv", "vec2"), x && V.add("depth", "float"), P2.uniforms.add(new e3("uColor", (e5) => e5.color));
  const $ = S2.style === a3.ForwardDiagonal || S2.style === a3.BackwardDiagonal || S2.style === a3.DiagonalCross;
  return $ && P2.code.add(o`
      const mat2 rotate45 = mat2(${o.float(b)}, ${o.float(-y)},
                                 ${o.float(y)}, ${o.float(b)});
    `), S2.draped || (f(P2, S2), P2.uniforms.add(new o3("worldToScreenPerDistanceRatio", (e5, o7) => 1 / o7.camera.perScreenPixelRatio)), P2.code.add(o`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`), P2.code.add(o`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`), P2.code.add(o`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${o.float(C)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `)), P2.code.add(o`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${$ ? " * rotate45" : ""};
      vec2 uvCellOrigin = uvMapSpace.zw ${$ ? " * rotate45" : ""};

      ${S2.draped ? "" : o`
            float distanceToCamera = boundingRectDistanceToCamera();
            float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;
          `}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${o.float(S2.patternSpacing)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `), P2.code.add(o`
    void main(void) {
      vuv = scaledUV();
      vpos = position;
      ${x ? "depth = (view * vec4(vpos, 1.0)).z;" : ""}
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();
      ${S2.hasVertexColors ? "vColor *= uColor;" : S2.vvColor ? "vColor = uColor * interpolateVVColor(colorFeatureAttribute);" : "vColor = uColor;"}
      gl_Position = transformPosition(proj, view, vpos);
    }
  `), T2.include(P, S2), R.include(e4), S2.draped && R.uniforms.add(new o3("texelSize", (e5, o7) => 1 / o7.camera.pixelRatio)), S2.output === o2.Highlight && T2.include(a, S2), x && T2.include(a2, S2), S2.output !== o2.Highlight && (R.code.add(o`
      const float lineWidth = ${o.float(S2.lineWidth)};
      const float spacing = ${o.float(S2.patternSpacing)};
      const float spacingINV = ${o.float(1 / S2.patternSpacing)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `), S2.draped || R.code.add(o`const int maxSamples = 5;
float sampleAA(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`)), S2.transparencyPassType === o4.ColorAlpha && (T2.outputs.add("fragColor", "vec4", 0), T2.outputs.add("fragAlpha", "float", 1)), R.code.add(o`
    void main() {
      discardBySlice(vpos);
      ${x ? "terrainDepthTest(depth);" : ""}
      vec4 color = vColor;
      color = highlightSlice(color, vpos);

      ${S2.output !== o2.Highlight ? o`color.a *= ${j(S2)};` : ""}

      ${S2.output === o2.ObjectAndLayerIdColor ? o`color.a = 1.0;` : ""}

      if (color.a < ${o.float(t)}) {
        discard;
      }

      ${S2.output === o2.Color ? o`fragColor = color; ${S2.transparencyPassType === o4.ColorAlpha ? o`
                    fragColor = premultiplyAlpha(fragColor);
                    fragAlpha = fragColor.a;` : ""}` : ""}
      ${S2.output === o2.Highlight ? o`outputHighlight();` : ""}
      ${S2.output === o2.ObjectAndLayerIdColor ? o`outputObjectAndLayerIdColor();` : ""}
    }
  `), T2;
}
function j(e5) {
  function o7(o8) {
    return e5.draped ? o`coverage(vuv.${o8}, texelSize)` : o`sampleAA(vuv.${o8})`;
  }
  switch (e5.style) {
    case a3.ForwardDiagonal:
    case a3.Horizontal:
      return o7("y");
    case a3.BackwardDiagonal:
    case a3.Vertical:
      return o7("x");
    case a3.DiagonalCross:
    case a3.Cross:
      return o`
        1.0 - (1.0 - ${o7("x")}) * (1.0 - ${o7("y")})
      `;
    default:
      return "0.0";
  }
}
var T = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: S
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  a3 as a,
  S,
  T
};
//# sourceMappingURL=chunk-ZQYSUMPX.js.map
