import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  r
} from "./chunk-GYNRSS5Q.js";
import {
  d,
  o as o6,
  t
} from "./chunk-JMJZXQF3.js";
import {
  o as o4
} from "./chunk-UVHNQY4M.js";
import {
  P
} from "./chunk-4U7LUZFD.js";
import {
  e as e3
} from "./chunk-ZDFN6OZC.js";
import {
  e as e2
} from "./chunk-3NWWTJOW.js";
import {
  o as o5
} from "./chunk-ZHVMMFTW.js";
import {
  o as o3
} from "./chunk-B76NC7GX.js";
import {
  o as o2
} from "./chunk-Q5JLNMWZ.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  e
} from "./chunk-D7C26LZP.js";
import {
  n
} from "./chunk-BZHHBBFX.js";
import {
  _
} from "./chunk-VSQZQLTQ.js";

// ../../../node_modules/@arcgis/core/chunks/LineCallout.glsl.js
function S(i) {
  const r2 = new o5(), {
    vertex: S2,
    fragment: h2
  } = r2;
  return S2.include(o6), r2.include(d, i), r2.include(P, i), r2.attributes.add(e.UV0, "vec2"), S2.uniforms.add(new e3("viewport", (e4, i2) => i2.camera.fullViewport), new o2("lineSize", (e4, i2) => e4.size > 0 ? Math.max(1, e4.size) * i2.camera.pixelRatio : 0), new e2("pixelToNDC", (i2, r3) => o3(b, 2 / r3.camera.fullViewport[2], 2 / r3.camera.fullViewport[3])), new o2("borderSize", (e4, i2) => null != e4.borderColor ? i2.camera.pixelRatio : 0), new e2("screenOffset", (i2, r3) => o3(b, i2.horizontalScreenOffset * r3.camera.pixelRatio, 0))), r2.varyings.add("coverageSampling", "vec4"), r2.varyings.add("lineSizes", "vec2"), i.multipassEnabled && r2.varyings.add("depth", "float"), i.occlusionTestEnabled && r2.include(t), i.hasScreenSizePerspective && o4(S2), S2.code.add(o`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 endPoint = projectPositionHUD(projectAux);

      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }
    ${i.occlusionTestEnabled ? o`
      if (!testHUDVisibility(endPoint)) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }` : ""}

    ${i.hasScreenSizePerspective ? o`
      vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
      vec2 screenOffsetScaled = applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);
        ` : o`vec2 screenOffsetScaled = screenOffset;`}
      // Add view dependent polygon offset to get exact same original starting point. This is mostly used to get the
      // correct depth value
      vec3 posView = (view * vec4(position, 1.0)).xyz;
      ${i.multipassEnabled ? "depth = posView.z;" : ""}

      applyHUDViewDependentPolygonOffset(centerOffsetAndDistance.w, projectAux.absCosAngle, posView);
      vec4 startPoint = proj * vec4(posView, 1.0);
      // Apply screen offset to both start and end point
      vec2 screenOffsetNorm = screenOffsetScaled * 2.0 / viewport.zw;
      startPoint.xy += screenOffsetNorm * startPoint.w;
      endPoint.xy += screenOffsetNorm * endPoint.w;
      // Align start and end to pixel origin
      vec4 startAligned = alignToPixelOrigin(startPoint, viewport.zw);
      vec4 endAligned = alignToPixelOrigin(endPoint, viewport.zw);
    ${i.depthHudEnabled ? i.depthHudAlignStartEnabled ? o`endAligned = vec4(endAligned.xy / endAligned.w * startAligned.w, startAligned.zw);` : o`startAligned = vec4(startAligned.xy / startAligned.w * endAligned.w, endAligned.zw);` : ""}
      vec4 projectedPosition = mix(startAligned, endAligned, uv0.y);
      // The direction of the line in screen space
      vec2 screenSpaceDirection = normalize(endAligned.xy / endAligned.w - startAligned.xy / startAligned.w);
      vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x);
    ${i.hasScreenSizePerspective ? o`
      float lineSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(lineSize, perspectiveFactor);
      float borderSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(borderSize, perspectiveFactor);
        ` : o`
      float lineSizeScaled = lineSize;
      float borderSizeScaled = borderSize;
        `}
      float halfPixelSize = lineSizeScaled * 0.5;

      // Compute full ndc offset, adding 1px padding for doing anti-aliasing and the border size
      float padding = 1.0 + borderSizeScaled;
      vec2 ndcOffset = (-halfPixelSize - padding + uv0.x * (lineSizeScaled + padding + padding)) * pixelToNDC;

      // Offset x/y from the center of the line in screen space
      projectedPosition.xy += perpendicularScreenSpaceDirection * ndcOffset * projectedPosition.w;

      // Compute a coverage varying which we can use in the fragment shader to determine
      // how much a pixel is actually covered by the line (i.e. to anti alias the line).
      // This works by computing two coordinates that can be linearly interpolated and then
      // subtracted to find out how far away from the line edge we are.
      float edgeDirection = (uv0.x * 2.0 - 1.0);

      float halfBorderSize = 0.5 * borderSizeScaled;
      float halfPixelSizeAndBorder = halfPixelSize + halfBorderSize;
      float outerEdgeCoverageSampler = edgeDirection * (halfPixelSizeAndBorder + halfBorderSize + 1.0);

      float isOneSided = float(lineSizeScaled < 2.0 && borderSize < 2.0);

      coverageSampling = vec4(
        // Edge coordinate
        outerEdgeCoverageSampler,

        // Border edge coordinate
        outerEdgeCoverageSampler - halfPixelSizeAndBorder * isOneSided,

        // Line offset
        halfPixelSize - 0.5,

        // Border offset
        halfBorderSize - 0.5 + halfPixelSizeAndBorder * (1.0 - isOneSided)
      );

      lineSizes = vec2(lineSizeScaled, borderSizeScaled);

      gl_Position = projectedPosition;
    }
  `), h2.uniforms.add(new e3("uColor", (e4) => m(e4.color)), new e3("borderColor", (e4) => m(e4.borderColor))), i.multipassEnabled && (h2.include(r, i), h2.uniforms.add(new e2("inverseViewport", (e4, i2) => i2.inverseViewport))), h2.code.add(o`
    void main() {
      ${i.multipassEnabled ? "if( geometryDepthTest(gl_FragCoord.xy * inverseViewport, depth) ){ discard; }" : ""}

      // Mix between line and border coverage offsets depending on whether we need
      // a border (based on the sidedness).
      vec2 coverage = min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);

      // Mix between border and line color based on the line coverage (conceptually the line blends on top of the
      // border background).
      //
      // Anti-alias by blending final result using the full (including optional border) coverage and the color alpha
      float borderAlpha = uColor.a * borderColor.a * coverage.y;
      float colorAlpha = uColor.a * coverage.x;

      float finalAlpha = mix(borderAlpha, 1.0, colorAlpha);

    ${i.depthHudEnabled ? o`
      if (finalAlpha < 0.01) {
        discard;
      }
      ` : o`
      vec3 finalRgb = mix(borderColor.rgb * borderAlpha, uColor.rgb, colorAlpha);
      fragColor = vec4(finalRgb, finalAlpha);
      `}
  }
  `), r2;
}
function m(e4) {
  return null != e4 ? e4 : _;
}
var b = n();
var h = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: S
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  S,
  h
};
//# sourceMappingURL=chunk-4EO5HMDC.js.map
