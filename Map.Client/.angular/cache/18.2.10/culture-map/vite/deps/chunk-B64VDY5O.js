import {
  d as d3,
  o as o9,
  t as t3
} from "./chunk-MAG65NGG.js";
import {
  o as o7,
  s as s2,
  t as t2
} from "./chunk-JUTKZ3GO.js";
import {
  d
} from "./chunk-BG32AOSQ.js";
import {
  l
} from "./chunk-33LKI2Y7.js";
import {
  d as d2,
  r as r2
} from "./chunk-ICUHXX2J.js";
import {
  o as o5
} from "./chunk-VIIVMRRO.js";
import {
  a as a2
} from "./chunk-ZKSEQXDM.js";
import {
  e as e4
} from "./chunk-675UQNXB.js";
import {
  o as o6,
  t
} from "./chunk-TGHJVD7I.js";
import {
  P
} from "./chunk-OZG2NNUW.js";
import {
  w
} from "./chunk-KTRZHJ2M.js";
import {
  e as e3
} from "./chunk-ACZYDHB3.js";
import {
  e as e2
} from "./chunk-X2OAE75B.js";
import {
  s
} from "./chunk-UCPBGEQD.js";
import {
  o as o8
} from "./chunk-SIZK72CP.js";
import {
  o as o4,
  r
} from "./chunk-VS26W5Y5.js";
import {
  o as o2
} from "./chunk-WJKYGQOY.js";
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
import {
  n
} from "./chunk-DY7FJHTG.js";
import {
  _
} from "./chunk-IMVP5ADD.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/HUDOcclusionPass.glsl.js
function i(i2, r3) {
  const {
    vertex: s3,
    fragment: p
  } = i2;
  s3.include(o9), r3.multipassEnabled && i2.varyings.add("depth", "float"), s3.code.add(o`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${r3.multipassEnabled ? "depth = projectAux.posView.z;" : ""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `), i2.include(a2, r3), p.code.add(o`
  void main() {
    fragColor = vec4(1);
    ${r3.multipassEnabled ? o`
        if(terrainDepthTest(depth)) {
          fragColor.g = 0.5;
        }` : ""}
  }
  `);
}

// ../../../node_modules/@arcgis/core/chunks/HUDMaterial.glsl.js
function F(o10) {
  const r3 = new o8(), F2 = o10.signedDistanceFieldEnabled;
  if (r3.include(d3, o10), r3.include(P, o10), o10.occlusionPass) return r3.include(i, o10), r3;
  const {
    vertex: B2,
    fragment: H2
  } = r3;
  r3.include(s2), H2.include(a), H2.include(e4), r3.include(l, o10), r3.include(d, o10), r3.include(t3), r3.varyings.add("vcolor", "vec4"), r3.varyings.add("vtc", "vec2"), r3.varyings.add("vsize", "vec2"), r3.varyings.add("voccluded", "float"), B2.uniforms.add(new e3("viewport", (e5, o11) => o11.camera.fullViewport), new e2("screenOffset", (o11, r4) => o4(T, 2 * o11.screenOffset[0] * r4.camera.pixelRatio, 2 * o11.screenOffset[1] * r4.camera.pixelRatio)), new e2("anchorPosition", (e5) => D(e5)), new e3("materialColor", (e5) => e5.color)), w(B2), F2 && (B2.uniforms.add(new e3("outlineColor", (e5) => e5.outlineColor)), H2.uniforms.add(new e3("outlineColor", (e5) => L(e5) ? e5.outlineColor : _), new o3("outlineSize", (e5) => L(e5) ? e5.outlineSize : 0))), o10.pixelSnappingEnabled && B2.include(o9), o10.hasScreenSizePerspective && (t2(B2), o7(B2)), o10.debugDrawLabelBorder && r3.varyings.add("debugBorderCoords", "vec4"), r3.attributes.add(e.UV0, "vec2"), r3.attributes.add(e.COLOR, "vec4"), r3.attributes.add(e.SIZE, "vec2"), r3.attributes.add(e.FEATUREATTRIBUTE, "vec4"), B2.code.add(o`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${o10.hasScreenSizePerspective ? o`
            inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
            vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         ` : o`
            inputSize = size;
            vec2 screenOffsetScaled = screenOffset;`}

      ${o10.vvSize ? "inputSize *= vvScale(featureAttribute).xx;" : ""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);
      bool visible = testHUDVisibility(posProj);
      voccluded = visible ? 0.0 : 1.0;
    `);
  const U = o`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`, V = o10.pixelSnappingEnabled ? F2 ? o`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;` : o`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}` : o`posProj += quadOffset;`;
  B2.code.add(o`
    ${o10.occlusionTestEnabled ? "if (visible) {" : ""}
    ${U}
    ${o10.vvColor ? "vcolor = interpolateVVColor(featureAttribute.y) * materialColor;" : "vcolor = color / 255.0 * materialColor;"}

    ${o10.output === o2.ObjectAndLayerIdColor ? o`vcolor.a = 1.0;` : ""}

    bool alphaDiscard = vcolor.a < ${o.float(t)};
    ${F2 ? `alphaDiscard = alphaDiscard && outlineColor.a < ${o.float(t)};` : ""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${V}
      gl_Position = posProj;
    }

    vtc = uv;

    ${o10.debugDrawLabelBorder ? "debugBorderCoords = vec4(uv01, 1.5 / combinedSize);" : ""}
    vsize = inputSize;
    ${o10.occlusionTestEnabled ? o`} else { vtc = vec2(0.0);
      ${o10.debugDrawLabelBorder ? "debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}" : "}"}` : ""}
  }
  `), H2.uniforms.add(new s("tex", (e5) => e5.texture));
  const E = o10.debugDrawLabelBorder ? o`(isBorder > 0.0 ? 0.0 : ${o.float(o6)})` : o.float(o6), I = o`
    ${o10.debugDrawLabelBorder ? o`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));` : ""}

    ${o10.sampleSignedDistanceFieldTexelCenter ? o`
      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;
      ` : o`
      vec2 samplePos = vtc;
      `}

    ${F2 ? o`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${E} ||
          fillPixelColor.a + outlinePixelColor.a < ${o.float(t)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        fragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${E}) {
          discard;
        }

        fragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      ` : o`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${E}) {
            discard;
          }
          fragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${o10.debugDrawLabelBorder ? o`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);` : ""}
  `;
  switch (o10.output) {
    case o2.Color:
      o10.transparencyPassType === o5.ColorAlpha && (r3.outputs.add("fragColor", "vec4", 0), r3.outputs.add("fragAlpha", "float", 1)), H2.code.add(o`
        void main() {
          ${I}
          ${o10.transparencyPassType === o5.FrontFace ? "fragColor.rgb /= fragColor.a;" : ""}
          ${o10.transparencyPassType === o5.ColorAlpha ? "fragAlpha = fragColor.a;" : ""}
        }`);
      break;
    case o2.ObjectAndLayerIdColor:
      H2.code.add(o`
        void main() {
          ${I}
          outputObjectAndLayerIdColor();
        }`);
      break;
    case o2.Highlight:
      H2.constants.add("occludedHighlightFlag", "vec4", r2), H2.constants.add("unoccludedHighlightFlag", "vec4", d2), H2.code.add(o`
        void main() {
          ${I}
          if (voccluded == 1.0) {
            fragColor = occludedHighlightFlag;
          } else {
            fragColor = unoccludedHighlightFlag;
          }
        }`);
  }
  return r3;
}
function L(e5) {
  return e5.outlineColor[3] > 0 && e5.outlineSize > 0;
}
function D(e5, r3 = T) {
  return e5.textureIsSignedDistanceField ? B(e5.anchorPosition, e5.distanceFieldBoundingBox, r3) : r(r3, e5.anchorPosition), r3;
}
function B(o10, r3, i2) {
  null != r3 ? o4(i2, o10[0] * (r3[2] - r3[0]) + r3[0], o10[1] * (r3[3] - r3[1]) + r3[1]) : o4(i2, 0, 0);
}
var T = n();
var H = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: F,
  calculateAnchorPosForRendering: D
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  F,
  D,
  H
};
//# sourceMappingURL=chunk-B64VDY5O.js.map
