import {
  e as e4,
  e2 as e5
} from "./chunk-YCQXFVJL.js";
import {
  o as o2
} from "./chunk-ZAP7ZEWR.js";
import {
  e as e3
} from "./chunk-52UEU7LG.js";
import {
  e as e2
} from "./chunk-PPMDUJ4E.js";
import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-4MMTPKY4.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js
function l(l2, n) {
  const {
    vertex: s,
    attributes: u
  } = l2;
  n.hasVvInstancing && (n.vvSize || n.vvColor) && u.add(e.INSTANCEFEATUREATTRIBUTE, "vec4"), n.vvSize ? (s.uniforms.add(new e2("vvSizeMinSize", (e6) => e6.vvSize.minSize)), s.uniforms.add(new e2("vvSizeMaxSize", (e6) => e6.vvSize.maxSize)), s.uniforms.add(new e2("vvSizeOffset", (e6) => e6.vvSize.offset)), s.uniforms.add(new e2("vvSizeFactor", (e6) => e6.vvSize.factor)), s.uniforms.add(new e3("vvSymbolRotationMatrix", (e6) => e6.vvSymbolRotationMatrix)), s.uniforms.add(new e2("vvSymbolAnchor", (e6) => e6.vvSymbolAnchor)), s.code.add(o`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`), s.code.add(o`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${n.hasVvInstancing ? o`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }` : ""}
    `)) : s.code.add(o`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`), n.vvColor ? (s.constants.add("vvColorNumber", "int", e5), s.uniforms.add(new o2("vvColorValues", (e6) => e6.vvColor.values, e5), new e4("vvColorColors", (e6) => e6.vvColor.colors, e5)), s.code.add(o`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${n.hasVvInstancing ? o`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }` : "vec4 vvColor() { return vec4(1.0); }"}
    `)) : s.code.add(o`vec4 vvColor() { return vec4(1.0); }`);
}

export {
  l
};
//# sourceMappingURL=chunk-33LKI2Y7.js.map
