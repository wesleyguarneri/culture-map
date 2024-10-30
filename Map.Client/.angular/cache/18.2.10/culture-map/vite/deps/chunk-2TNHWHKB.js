import {
  i as i2
} from "./chunk-EM7X4J4S.js";
import {
  P
} from "./chunk-DOYOAB3G.js";
import {
  m
} from "./chunk-WRHEXEG3.js";
import {
  d
} from "./chunk-ICUHXX2J.js";
import {
  e as e4
} from "./chunk-ACZYDHB3.js";
import {
  o as o3
} from "./chunk-JXVDTUGR.js";
import {
  s
} from "./chunk-UCPBGEQD.js";
import {
  o as o4
} from "./chunk-SIZK72CP.js";
import {
  e as e3
} from "./chunk-GAYJ4YPJ.js";
import {
  e as e2
} from "./chunk-PPMDUJ4E.js";
import {
  a
} from "./chunk-MFZTGYUJ.js";
import {
  o as o2
} from "./chunk-R5ZE5A4K.js";
import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-BQZBOYBD.js";
import {
  h,
  i
} from "./chunk-XTVPEVHA.js";
import {
  O,
  z
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/chunks/ShadowHighlight.glsl.js
var x = 0.99999;
var b = 0.025;
function M(o5) {
  const r = new o4();
  r.include(m, o5), r.include(o3), r.include(i2);
  const M2 = r.fragment;
  return M2.include(a), M2.uniforms.add(new s("defaultDepthTex", (e5, i3) => i3.shadowMap.getSnapshot(P.ExcludeHighlight)), new s("highlightDepthTex", (e5, i3) => i3.shadowMap.getSnapshot(P.Highlight)), new s("depthMap", (e5, i3) => i3.depth?.attachment), new s("highlightTexture", (e5) => e5.highlight), new e4("uColor", (e5) => e5.shadowColor), new o2("opacity", (e5) => e5.shadowOpacity), new o2("occludedOpacity", (e5) => e5.occludedShadowOpacity), new o2("terminationFactor", (e5) => e5.opacityElevation * e5.dayNightTerminator), new e2("lightingMainDirectionView", (e5, i3) => z(S, O(S, i3.lighting.mainLight.direction, i3.camera.viewInverseTransposeMatrix))), new e3("inverseViewMatrix", (o6, t) => h(y, i(y, t.camera.viewMatrix, t.camera.center)))), M2.constants.add("unoccludedHighlightFlag", "vec4", d), M2.code.add(o`
    void main(void) {
      vec4 highlightInfo = texture(highlightTexture, uv);
      float visiblyHighlighted = (1.0 - clamp(distance(unoccludedHighlightFlag, highlightInfo), 0.0, 1.0)) * highlightInfo.a;
      if (visiblyHighlighted > ${o.float(x)}) {
        discard;
      }

      float depth = depthFromTexture(depthMap, uv);

      // 1.0 is the clear value of depthMap, which means nothing has been drawn there and we should discard
      if (depth >= 1.0 || depth <= 0.0) {
        discard;
      }

      float currentPixelDepth = linearizeDepth(depth);
      vec4 currentPixelPos = vec4(reconstructPosition(gl_FragCoord.xy, currentPixelDepth), 1.0);
      vec4 worldSpacePos = inverseViewMatrix * currentPixelPos;

      mat4 shadowMatrix;
      float linearDepth = -currentPixelDepth;
      int i = chooseCascade(linearDepth, shadowMatrix);
      if (i >= numCascades) {
        discard;
      }

      vec3 lvpos = lightSpacePosition(worldSpacePos.xyz, shadowMatrix);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
        discard;
      }

      ivec2 texSize = textureSize(highlightDepthTex, 0);
      ivec2 uvShadow = ivec2(cascadeCoordinates(i, texSize, lvpos) * vec2(texSize));

      float depthHighlight = readShadowMapDepth(uvShadow, highlightDepthTex);
      bool shadowHighlight = depthHighlight < lvpos.z;
      if (!shadowHighlight) {
        discard;
      }

      float depthDefault = readShadowMapDepth(uvShadow, defaultDepthTex);
      bool shadowDefault = depthDefault < lvpos.z;

      vec3 normal = normalFromDepth(depthMap, currentPixelPos.xyz, gl_FragCoord.xy, uv);
      bool shaded = dot(normal, lightingMainDirectionView) < ${o.float(b)};

      float fragOpacity = (shadowDefault || shaded) ? occludedOpacity : opacity;
      fragColor = vec4(uColor.rgb, uColor.a * fragOpacity * terminationFactor);
    }
  `), r;
}
var y = e();
var S = n();
var D = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: M
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  M,
  D
};
//# sourceMappingURL=chunk-2TNHWHKB.js.map
