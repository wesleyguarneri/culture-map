import {
  e as e6
} from "./chunk-JO76LYW5.js";
import {
  a as a3
} from "./chunk-ZKSEQXDM.js";
import {
  P
} from "./chunk-OZG2NNUW.js";
import {
  e as e5
} from "./chunk-ACZYDHB3.js";
import {
  e as e4
} from "./chunk-X2OAE75B.js";
import {
  o as o4
} from "./chunk-SIZK72CP.js";
import {
  o as o3
} from "./chunk-VS26W5Y5.js";
import {
  p,
  u,
  v
} from "./chunk-EBLQZUPS.js";
import {
  e as e2
} from "./chunk-52UEU7LG.js";
import {
  e as e3
} from "./chunk-GAYJ4YPJ.js";
import {
  s
} from "./chunk-ZTT6ENBS.js";
import {
  a
} from "./chunk-MFZTGYUJ.js";
import {
  o as o2
} from "./chunk-R5ZE5A4K.js";
import {
  a as a2
} from "./chunk-24CN3HDP.js";
import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-4MMTPKY4.js";
import {
  n as n2,
  r
} from "./chunk-DY7FJHTG.js";
import {
  n
} from "./chunk-N6TJI25E.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/IsNaN.glsl.js
function o5(o8) {
  const e7 = o`bool isNaN( float val )
{
return ( val < 0.0 || 0.0 < val || val == 0.0 ) ? false : true;
}`;
  o8.code.add(e7);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/sources/edgeRenderer/AdjustProjectedPosition.glsl.js
var l = r(0.5, -4e-4);
function i(o8, i3) {
  const c = o8.vertex;
  c.include(o5), c.constants.add("depthBias", "vec2", l), c.uniforms.add(new e4("inverseViewport", (o9, r2) => r2.inverseViewport)), i3.legacy ? (c.uniforms.add(new e3("proj", (o9, r2) => r2.camera.projectionMatrix)), c.code.add(o`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = depthBias.x;
vec4 projNormal = proj * localView * vec4(globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * inverseViewport * normalize(projNormal.xyz).xy;
}`)) : (c.uniforms.add(new e2("transformNormalViewFromGlobal", (o9) => o9.transformNormalViewFromGlobal), new e3("transformProjFromView", (o9) => o9.transformProjFromView)), c.code.add(o`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = depthBias.x;
vec4 projNormal = transformProjFromView * vec4(transformNormalViewFromGlobal * globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * inverseViewport * normalize(projNormal.xyz).xy;
}`)), c.code.add(o`float _calculateProjectedBiasZ(vec4 projPos) {
float offsetZ = depthBias.y;
return sqrt(max(projPos.z,0.0)) * offsetZ;
}
vec4 adjustProjectedPosition(vec4 projPos, vec3 worldNormal, float lineWidth) {
vec2 offsetXY = calculateProjectedBiasXY(projPos, worldNormal);
if (!isNaN(offsetXY.x) && !isNaN(offsetXY.y)) {
projPos.xy += offsetXY;
}
projPos.z += _calculateProjectedBiasZ(projPos);
return projPos;
}`);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/sources/edgeRenderer/DiscardByCoverage.glsl.js
function o6(o8) {
  const r2 = o8.fragment;
  r2.constants.add("coverageTestThreshold", "float", 0.01), r2.code.add(o`#define discardByCoverage(radius, coverage) { if (coverage < coverageTestThreshold) discard; }`);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/sources/edgeRenderer/DiscardNonSilhouetteEdges.glsl.js
function o7(o8, r2) {
  const a4 = o8.vertex;
  r2.silhouette ? (a4.code.add(o`bool isSilhouetteEdge(vec3 viewDir, vec3 normalA, vec3 normalB) {
float faceAVisible = dot(viewDir, normalA);
float faceBVisible = dot(viewDir, normalB);
return faceAVisible * faceBVisible < 0.0;
}`), r2.legacy ? a4.code.add(o`bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos, ComponentData data) {
vec3 viewNormalA = _modelToViewNormal(data.normal);
vec3 viewNormalB = _modelToViewNormal(data.normal2);
vec3 viewDir = -viewPos;
if (isSilhouetteEdge(viewDir, viewNormalA, viewNormalB)) {
return false;
}
gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
return true;
}`) : a4.code.add(o`bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos, ComponentData data) {
vec3 worldNormalA = _modelToWorldNormal(data.normal);
vec3 worldNormalB = _modelToWorldNormal(data.normal2);
vec3 viewDir = -worldPos;
if (isSilhouetteEdge(viewDir, worldNormalA, worldNormalB)) {
return false;
}
gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
return true;
}`)) : a4.code.add(o`bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos, ComponentData data) {
return false;
}`);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/sources/edgeRenderer/UnpackAttributes.glsl.js
function i2(i3, o8) {
  const d2 = i3.vertex;
  switch (i3.attributes.add(e.SIDENESS, "vec2"), o8.type === p.Mixed ? d2.code.add(o`struct UnpackedAttributes {
vec2 sideness;
vec2 sidenessNorm;
float lineWidthPixels;
float extensionLengthPixels;
float type;
};`) : d2.code.add(o`struct UnpackedAttributes {
vec2 sideness;
vec2 sidenessNorm;
float lineWidthPixels;
float extensionLengthPixels;
};`), o8.type) {
    case p.Mixed:
      d2.code.add(o`UnpackedAttributes unpackAttributes(ComponentData component) {
vec2 sidenessNorm = sideness;
vec2 sideness = sidenessNorm * 2.0 - 1.0;
float fType = component.type;
float extensionLengthPixels = component.extensionLength;
float lineWidth = component.lineWidth;
if (fType <= 0.0) {
extensionLengthPixels *= variantExtension * 2.0 - 1.0;
}
return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels, fType);
}`);
      break;
    case p.Sketch:
      d2.code.add(o`UnpackedAttributes unpackAttributes(ComponentData component) {
vec2 sidenessNorm = sideness;
vec2 sideness = sidenessNorm * 2.0 - 1.0;
float extensionLengthPixels = component.extensionLength;
extensionLengthPixels *= variantExtension * 2.0 - 1.0;
float lineWidth = component.lineWidth;
return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels);
}`);
      break;
    case p.Solid:
      d2.code.add(o`UnpackedAttributes unpackAttributes(ComponentData component) {
vec2 sidenessNorm = sideness;
vec2 sideness = sidenessNorm * 2.0 - 1.0;
float extensionLengthPixels = component.extensionLength;
float lineWidth = component.lineWidth;
return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels);
}`);
      break;
    case p.COUNT:
      break;
    default:
      n(o8.type);
  }
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/sources/edgeRenderer/LineAmplitude.glsl.js
function d(d2, i3) {
  const o8 = d2.vertex;
  switch (d2.include(i2, i3), i3.type) {
    case p.Solid:
      o8.code.add(o`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return 0.0;
}`);
      break;
    case p.Sketch:
      o8.uniforms.add(new e6("strokesAmplitude", (e7) => e7.strokesTexture.amplitude)), o8.code.add(o`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
return strokesAmplitude;
}`);
      break;
    case p.Mixed:
      o8.uniforms.add(new e6("strokesAmplitude", (e7) => e7.strokesTexture.amplitude)), o8.code.add(o`float calculateLineAmplitude(UnpackedAttributes unpackedAttributes) {
float type = unpackedAttributes.type;
if (type <= 0.0) {
return strokesAmplitude;
}
return 0.0;
}`);
      break;
    case p.COUNT:
      break;
    default:
      n(i3.type);
  }
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/sources/edgeRenderer/LineOffset.glsl.js
function n4(a4, i3) {
  a4.include(i2, i3);
  const {
    vertex: n5,
    fragment: d2
  } = a4;
  switch (u(i3.type) && (n5.uniforms.add(new s("strokesTexture", (e7) => e7.strokesTexture.texture)), n5.uniforms.add(new e6("strokesLog2Resolution", (e7) => Math.log2(e7.strokesTexture.resolution)), new e6("strokeVariants", (e7) => e7.strokesTexture.variants)), a4.varyings.add("vStrokeUV", "vec2"), d2.uniforms.add(new s("strokesTexture", (e7) => e7.strokesTexture.texture), new e6("strokesNormalizationScale", (e7) => e7.strokesTexture.normalizationScale)), n5.code.add(o`void calculateStyleOutputsSketch(float lineLength, UnpackedAttributes unpackedAttributes) {
vec2 sidenessNorm = unpackedAttributes.sidenessNorm;
float lineIndex = clamp(ceil(log2(lineLength)), 0.0, strokesLog2Resolution);
vStrokeUV = vec2(exp2(lineIndex) * sidenessNorm.y, lineIndex * strokeVariants + variantStroke + 0.5) / vec2(textureSize(strokesTexture, 0));
vStrokeUV.x += variantOffset;
}`), a4.fragment.include(a), d2.code.add(o`float calculateLineOffsetSketch() {
float offsetNorm = rgba2float(texture(strokesTexture, vStrokeUV));
return (offsetNorm - 0.5) * strokesNormalizationScale;
}
float calculateLinePressureSketch() {
return rgba2float(texture(strokesTexture, vStrokeUV + vec2(0.0, 0.5)));
}`)), i3.type) {
    case p.Solid:
      n5.code.add(o`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes) {}`), d2.code.add(o`float calculateLineOffset() {
return 0.0;
}
float calculateLinePressure() {
return 1.0;
}`);
      break;
    case p.Sketch:
      n5.code.add(o`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}`), d2.code.add(o`float calculateLineOffset() {
return calculateLineOffsetSketch();
}
float calculateLinePressure() {
return calculateLinePressureSketch();
}`);
      break;
    case p.Mixed:
      a4.varyings.add("vType", "float"), n5.code.add(o`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
vType = unpackedAttributes.type;
if (unpackedAttributes.type <= 0.0) {
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}
}`), d2.code.add(o`float calculateLineOffset() {
if (vType <= 0.0) {
return calculateLineOffsetSketch();
}
else {
return 0.0;
}
}
float calculateLinePressure() {
if (vType <= 0.0) {
return calculateLinePressureSketch();
}
else {
return 1.0;
}
}`);
      break;
    case p.COUNT:
      break;
    default:
      n(i3.type);
  }
}

// ../../../node_modules/@arcgis/core/chunks/EdgeShader.glsl.js
function w(i3) {
  const r2 = new o4(), {
    vertex: w2,
    fragment: A2
  } = r2;
  return i3.legacy && w2.uniforms.add(new L("model"), new L("localView")), r2.include(i, i3), r2.include(v, i3), r2.include(d, i3), r2.include(i2, i3), r2.include(n4, i3), r2.include(P, i3), r2.include(o7, i3), r2.include(o6, i3), r2.include(a3, i3), r2.varyings.add("vColor", "vec4"), r2.varyings.add("vRadius", "float"), r2.varyings.add("vPosition", "vec3"), r2.varyings.add("vWorldPosition", "vec3"), i3.multipassEnabled && r2.varyings.add("vViewPos", "vec3"), r2.varyings.add("vLineLengthPixels", "float"), r2.varyings.add("vSizeFalloffFactor", "float"), w2.uniforms.add(new e4("pixelToNDC", (i4, o8) => o3(h, 2 / o8.camera.fullViewport[2], 2 / o8.camera.fullViewport[3])), new e5("viewport", (e7, i4) => i4.camera.fullViewport), new o2("pixelRatio", (e7, i4) => i4.camera.pixelRatio)), r2.attributes.add(e.POSITION0, "vec3"), r2.attributes.add(e.POSITION1, "vec3"), r2.attributes.add(e.VARIANTOFFSET, "float"), r2.attributes.add(e.VARIANTSTROKE, "float"), r2.attributes.add(e.VARIANTEXTENSION, "float"), w2.code.add(o`
    const float opaqueCutoff = 1.0 / 255.0;

    void calculateGeometricOutputs(vec3 viewPosV0, vec3 viewPosV1, vec3 worldPosV0, vec3 worldPosV1, vec3 worldNormal, UnpackedAttributes unpackedAttributes) {
      vec2 sideness = unpackedAttributes.sideness;
      vec2 sidenessNorm = unpackedAttributes.sidenessNorm;

      vWorldPosition = mix(worldPosV0, worldPosV1, sidenessNorm.y).xyz;

      vec3 viewPos = mix(viewPosV0, viewPosV1, sidenessNorm.y);
      ${i3.multipassEnabled ? "vViewPos = viewPos;" : ""}

      vec4 projPosV0 = projFromViewPosition(viewPosV0);
      vec4 projPosV1 = projFromViewPosition(viewPosV1);
      vec4 projPos = projFromViewPosition(viewPos);

      vec3 screenSpaceLineNDC = (projPosV1.xyz / projPosV1.w - projPosV0.xyz / projPosV0.w);
      vec2 ndcToPixel = viewport.zw * 0.5;
      vec2 screenSpaceLinePixels = screenSpaceLineNDC.xy * ndcToPixel;
      float lineLengthPixels = length(screenSpaceLinePixels);

      float dzPerPixel = screenSpaceLineNDC.z / lineLengthPixels;
      vec2 screenSpaceDirection = screenSpaceLinePixels / lineLengthPixels;
      vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x) * sideness.x;

      float falloffFactor = distanceBasedPerspectiveFactor(-viewPos.z) * pixelRatio;
      float lineWidthPixels = unpackedAttributes.lineWidthPixels * falloffFactor;

      float extensionLengthPixels = calculateExtensionLength(unpackedAttributes.extensionLengthPixels, lineLengthPixels) * falloffFactor;
      float lineAmplitudePixels = calculateLineAmplitude(unpackedAttributes) * pixelRatio;

      vSizeFalloffFactor = falloffFactor;

      float lineWidthAndAmplitudePixels = lineWidthPixels + lineAmplitudePixels + lineAmplitudePixels;
      float extendedLineLengthPixels = lineLengthPixels + extensionLengthPixels + extensionLengthPixels;

      const float aaPaddingPixels = 1.0;

      // Line size with padding
      float halfAAPaddedLineWidthAndAmplitudePixels = lineWidthAndAmplitudePixels * 0.5 + aaPaddingPixels;
      float aaPaddedRoundedCapSizePixels = lineWidthPixels * 0.5 + aaPaddingPixels;

      // Half line width in NDC including padding for anti aliasing
      vec2 halfAAPaddedLineWidthAndAmplitudeNDC = halfAAPaddedLineWidthAndAmplitudePixels * pixelToNDC;
      vec2 aaPaddedRoundedCapSizeNDC = aaPaddedRoundedCapSizePixels * pixelToNDC;
      vec2 extensionLengthNDC = extensionLengthPixels * pixelToNDC;

      // Compute screen space position of vertex, offsetting for line size and end caps
      vec2 ndcOffset = (
          screenSpaceDirection * sideness.y * (aaPaddedRoundedCapSizeNDC + extensionLengthNDC)
        + perpendicularScreenSpaceDirection * halfAAPaddedLineWidthAndAmplitudeNDC
      );

      projPos.xy += ndcOffset * projPos.w;
      projPos.z += (dzPerPixel * (aaPaddedRoundedCapSizePixels + extensionLengthPixels)) * sideness.y * projPos.w;

      projPos = adjustProjectedPosition(projPos, worldNormal, 1.0 + max((lineWidthAndAmplitudePixels - 1.0) * 0.5, 0.0));

      // Line length with end caps
      float aaPaddedLineWithCapsLengthPixels = extendedLineLengthPixels + aaPaddedRoundedCapSizePixels + aaPaddedRoundedCapSizePixels;

      float pixelPositionAlongLine = aaPaddedLineWithCapsLengthPixels * sidenessNorm.y - aaPaddedRoundedCapSizePixels;

      // Position in pixels with origin at first vertex of line segment
      vPosition = vec3(
        halfAAPaddedLineWidthAndAmplitudePixels * sideness.x,
        pixelPositionAlongLine,
        pixelPositionAlongLine / extendedLineLengthPixels
      );

      // The line width radius in pixels
      vRadius = lineWidthPixels * 0.5;
      vLineLengthPixels = extendedLineLengthPixels;

      // discard short edges below a certain length threshold
      ${i3.type === p.Sketch ? o`
        if (lineLengthPixels <= 3.0) {
          gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
          return;
        }` : i3.type === p.Mixed ? o`
        if (lineLengthPixels <= 3.0 && unpackedAttributes.type <= 0.0) {
           gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
           return;
        }` : ""}
      gl_Position = projPos;
    }

    void main() {
      ComponentData component = readComponentData();
      UnpackedAttributes unpackedAttributes = unpackAttributes(component);

      vec3 worldPosV0, worldPosV1, viewPosV0, viewPosV1;
      worldAndViewFromModelPosition(position0, component.verticalOffset, worldPosV0, viewPosV0);
      worldAndViewFromModelPosition(position1, component.verticalOffset, worldPosV1, viewPosV1);

      // Component color
      vColor = component.color;

      // Discard fully transparent edges
      if (vColor.a < opaqueCutoff) {
        gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
        return;
      }

      if (discardNonSilhouetteEdges(viewPosV0, worldPosV0, component)) {
        return;
      }

      // General geometric computation for all types of edges
      calculateGeometricOutputs(viewPosV0, viewPosV1, worldPosV0, worldPosV1, worldNormal(component), unpackedAttributes);

      // Specific computation for different edge styles
      calculateStyleOutputs(unpackedAttributes);
    }
  `), A2.code.add(o`
    vec2 lineWithCapsDistance(float radius, vec2 position, float lineLength) {
      float positionX = position.x - calculateLineOffset();

      if (radius < 1.0) {
        float coverageX = clamp(min(radius, positionX + 0.5) - max(-radius, positionX - 0.5), 0.0, 1.0);
        float coverageY = clamp(min(lineLength, position.y + 0.5) - max(0.0, position.y - 0.5), 0.0, 1.0);
        return vec2(0.5 - min(coverageX, coverageY), 0.0);
      }
      else {
        // Between -radius -> 0 for start cap, 0 for line, 0 -> radius
        float positionOnCap = position.y - clamp(position.y, 0.0, lineLength);

        vec2 lineToPosition = vec2(positionX, positionOnCap);
        return vec2(length(lineToPosition) - radius, positionOnCap / radius);
      }
    }

    void main() {
      ${i3.multipassEnabled ? "terrainDepthTest(vViewPos.z);" : ""}
      float radius = vRadius * calculateLinePressure();

      vec2 distance = lineWithCapsDistance(radius, vPosition.xy, vLineLengthPixels);
      float coverage = clamp(0.5 - distance.x, 0.0, 1.0);

      discardByCoverage(radius, coverage);
      discardBySlice(vWorldPosition);

      fragColor = vec4(vColor.rgb, vColor.a * coverage);
    }
  `), r2;
}
var h = n2();
var L = class extends a2 {
  constructor(e7) {
    super(e7, "mat4");
  }
};
var A = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: w
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  w,
  A
};
//# sourceMappingURL=chunk-YRS57NK4.js.map
