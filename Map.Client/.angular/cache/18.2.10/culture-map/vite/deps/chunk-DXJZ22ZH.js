import {
  d
} from "./chunk-KTRZHJ2M.js";
import {
  o as o3
} from "./chunk-SIZK72CP.js";
import {
  o as o2
} from "./chunk-R5ZE5A4K.js";
import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-4MMTPKY4.js";

// ../../../node_modules/@arcgis/core/chunks/HeatmapDensity.glsl.js
function t(t2) {
  const s2 = new o3(), {
    vertex: d2,
    fragment: u,
    attributes: n,
    varyings: l
  } = s2;
  d(d2, t2);
  const {
    isAttributeDriven: c,
    usesHalfFloat: f
  } = t2;
  return n.add(e.POSITION, "vec3"), n.add(e.UV0, "vec2"), c && (n.add(e.FEATUREATTRIBUTE, "float"), l.add("attributeValue", "float")), f && s2.constants.add("compressionFactor", "float", 0.25), l.add("unitCirclePos", "vec2"), d2.uniforms.add(new o2("radius", ({
    resolutionForScale: e2,
    searchRadius: i
  }, {
    camera: o4,
    screenToWorldRatio: r,
    overlayStretch: a
  }) => 2 * i * (0 === e2 ? 1 : e2 / r) * o4.pixelRatio / o4.fullViewport[2] / a)), d2.code.add(o`
    void main() {
      unitCirclePos = uv0;

      vec4 posProj = proj * (view * vec4(${e.POSITION}, 1.0));
      vec4 quadOffset = vec4(unitCirclePos * radius, 0.0, 0.0);

      ${c ? o`attributeValue = ${e.FEATUREATTRIBUTE};` : ""}
      gl_Position = posProj + quadOffset;
    }
  `), u.code.add(o`
    void main() {
      float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
      if (radiusRatioSquared > 1.0) {
        discard;
      }

      float oneMinusRadiusRatioSquared = 1.0 - radiusRatioSquared;
      float density = oneMinusRadiusRatioSquared * oneMinusRadiusRatioSquared ${c ? o` * attributeValue` : ""} ${f ? o` * compressionFactor` : ""};
      fragColor = vec4(density);
    }
  `), s2;
}
var s = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: t
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  t,
  s
};
//# sourceMappingURL=chunk-DXJZ22ZH.js.map
