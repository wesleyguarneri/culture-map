import {
  x
} from "./chunk-URWREU3E.js";
import {
  t
} from "./chunk-PA7WZX2U.js";
import {
  o as o4
} from "./chunk-GPUGMSHU.js";
import {
  c
} from "./chunk-AIS5CSUZ.js";
import {
  e as e3
} from "./chunk-52UEU7LG.js";
import {
  o as o2
} from "./chunk-GY52WOQZ.js";
import {
  e as e4
} from "./chunk-GAYJ4YPJ.js";
import {
  e as e2
} from "./chunk-PPMDUJ4E.js";
import {
  s
} from "./chunk-ZTT6ENBS.js";
import {
  a
} from "./chunk-MFZTGYUJ.js";
import {
  o as o3
} from "./chunk-R5ZE5A4K.js";
import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-4MMTPKY4.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/sources/edgeRenderer/EdgeUtil.glsl.js
function v(v2, u2) {
  const p2 = v2.vertex;
  p2.include(a), v2.include(t, u2), p2.uniforms.add(new o3("distanceFalloffFactor", (o5) => o5.distanceFalloffFactor)), p2.code.add(o`float distanceBasedPerspectiveFactor(float distance) {
return clamp(sqrt(distanceFalloffFactor / distance), 0.0, 1.0);
}`), p2.uniforms.add(new s("componentDataTex", (o5) => o5.componentDataTexture)), v2.attributes.add(e.COMPONENTINDEX, "float"), p2.constants.add("componentColorFieldOffset", "float", 0), p2.constants.add("componentOtherFieldOffset", "float", 1), p2.constants.add("componentVerticalOffsetFieldOffset", "float", 2), p2.constants.add("componentFieldCount", "float", 3), p2.constants.add("lineWidthFractionFactor", "float", 8), p2.constants.add("extensionLengthOffset", "float", 128), p2.constants.add("verticalOffsetScale", "float", 2 * x), p2.code.add(o`
    vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
      float fieldIndex = componentFieldCount * componentIndex + fieldOffset;
      float texSize = float(textureSize(componentDataTex, 0).x);
      float colIndex = mod(fieldIndex, texSize);
      float rowIndex = floor(fieldIndex / texSize);

      return vec2(colIndex, rowIndex) + 0.5;
    }

    struct ComponentData {
      vec4 color;
      vec3 normal;
      vec3 normal2;
      float lineWidth;
      float extensionLength;
      float type;
      float verticalOffset;
    };

    ComponentData readComponentData() {
      vec2 colorIndex = _componentTextureCoords(componentIndex, componentColorFieldOffset);
      vec2 otherIndex = _componentTextureCoords(componentIndex, componentOtherFieldOffset);
      vec2 verticalOffsetIndex = _componentTextureCoords(componentIndex, componentVerticalOffsetFieldOffset);
      vec3 normal = normalModel();
      vec3 normal2 = ${u2.silhouette ? o`decompressNormal(normal2Compressed)` : o`normal`};

      vec4 colorValue = texelFetch(componentDataTex, ivec2(colorIndex), 0);
      vec4 otherValue = texelFetch(componentDataTex, ivec2(otherIndex), 0);
      float verticalOffset = (rgba2float(texelFetch(componentDataTex, ivec2(verticalOffsetIndex), 0)) - 0.5) * verticalOffsetScale;

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
        normal, normal2,
        otherValue.x * (255.0 / lineWidthFractionFactor),
        otherValue.y * 255.0 - extensionLengthOffset,
        -(otherValue.z * 255.0) + 0.5, // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
        verticalOffset
      );
    }
  `), u2.legacy ? p2.code.add(o`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`) : (p2.uniforms.add(new o4("transformNormalGlobalFromModel", (o5) => o5.transformNormalGlobalFromModel)), p2.code.add(o`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)), u2.silhouette ? (v2.attributes.add(e.NORMAL2COMPRESSED, "vec2"), p2.code.add(o`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(normalize(data.normal + data.normal2));
}`)) : p2.code.add(o`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(data.normal);
}`), u2.legacy ? p2.code.add(o`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`) : (p2.include(c, u2), p2.uniforms.add(new e3("transformViewFromCameraRelativeRS", (o5) => o5.transformViewFromCameraRelativeRS), new o4("transformWorldFromModelRS", (o5) => o5.transformWorldFromModelRS), new o2("transformWorldFromModelTL", (o5) => o5.transformWorldFromModelTL), new o2("transformWorldFromModelTH", (o5) => o5.transformWorldFromModelTH), new e2("transformWorldFromViewTL", (o5) => o5.transformWorldFromViewTL), new e2("transformWorldFromViewTH", (o5) => o5.transformWorldFromViewTH)), p2.code.add(o`
      void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
        vec3 rotatedModelPosition = transformWorldFromModelRS * modelPos;

        vec3 transformCameraRelativeFromModel = dpAdd(
          transformWorldFromModelTL,
          transformWorldFromModelTH,
          -transformWorldFromViewTL,
          -transformWorldFromViewTH
        );

        worldPos = transformCameraRelativeFromModel + rotatedModelPosition;

        if (verticalOffset != 0.0) {
          vec3 vUp = ${u2.spherical ? o`normalize(transformWorldFromModelTL + rotatedModelPosition);` : o`vec3(0.0, 0.0, 1.0);`}
          worldPos += verticalOffset * vUp;
        }

        viewPos = transformViewFromCameraRelativeRS * worldPos;
      }
    `)), p2.uniforms.add(new e4("transformProjFromView", (o5, e5) => e5.camera.projectionMatrix)), p2.code.add(o`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`), p2.code.add(o`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`);
}
function u(o5) {
  return o5 === p.Sketch || o5 === p.Mixed;
}
var p;
var x2;
!function(o5) {
  o5[o5.Solid = 0] = "Solid", o5[o5.Sketch = 1] = "Sketch", o5[o5.Mixed = 2] = "Mixed", o5[o5.COUNT = 3] = "COUNT";
}(p || (p = {})), function(o5) {
  o5[o5.REGULAR = 0] = "REGULAR", o5[o5.SILHOUETTE = 1] = "SILHOUETTE";
}(x2 || (x2 = {}));

export {
  v,
  u,
  p,
  x2 as x
};
//# sourceMappingURL=chunk-EBLQZUPS.js.map
