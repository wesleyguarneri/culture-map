import {
  s as s3
} from "./chunk-U4WO2GC4.js";
import {
  n
} from "./chunk-A6XTYETO.js";
import {
  e as e4
} from "./chunk-EKCE56CG.js";
import {
  o as o3
} from "./chunk-PPMHRAOP.js";
import {
  e as e3
} from "./chunk-GOOZVNO4.js";
import {
  d as d2
} from "./chunk-BG32AOSQ.js";
import {
  l
} from "./chunk-33LKI2Y7.js";
import {
  c
} from "./chunk-YAGNWBGU.js";
import {
  a as a2
} from "./chunk-ICUHXX2J.js";
import {
  o as o4
} from "./chunk-DXGCBLDW.js";
import {
  i
} from "./chunk-Z3FHX4FD.js";
import {
  P
} from "./chunk-OZG2NNUW.js";
import {
  d
} from "./chunk-KTRZHJ2M.js";
import {
  s as s2
} from "./chunk-UCPBGEQD.js";
import {
  s
} from "./chunk-ZVFENZUF.js";
import {
  e2
} from "./chunk-WDDCGJTI.js";
import {
  a,
  t
} from "./chunk-PA7WZX2U.js";
import {
  o as o2
} from "./chunk-WJKYGQOY.js";
import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-4MMTPKY4.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js
function e5(e6) {
  e6.vertex.code.add(o`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js
function i2(i3, t2) {
  t2.hasSymbolColors ? (i3.include(e2), i3.attributes.add(e.SYMBOLCOLOR, "vec4"), i3.varyings.add("colorMixMode", "mediump float"), i3.vertex.code.add(o`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)) : (i3.fragment.uniforms.add(new e3("colorMixMode", (o5) => c[o5.colorMixMode])), i3.vertex.code.add(o`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`));
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js
function x(x2, h) {
  const {
    vertex: j,
    fragment: O
  } = x2, w = h.hasColorTexture && h.alphaDiscardMode !== s.Opaque;
  switch (h.output) {
    case o2.Depth:
      d(j, h), x2.include(o4, h), x2.include(P, h), x2.include(o3, h), w && O.uniforms.add(new s2("tex", (o5) => o5.texture)), j.code.add(o`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`), x2.include(s3, h), O.code.add(o`
          void main(void) {
            discardBySlice(vpos);
            ${w ? o`
                    vec4 texColor = texture(tex, ${h.hasColorTextureTransform ? o`colorUV` : o`vuv0`});
                    discardOrAdjustAlpha(texColor);` : ""}
          }
        `);
      break;
    case o2.Shadow:
    case o2.ShadowHighlight:
    case o2.ShadowExcludeHighlight:
    case o2.ViewshedShadow:
    case o2.ObjectAndLayerIdColor:
      d(j, h), x2.include(o4, h), x2.include(o3, h), x2.include(l, h), x2.include(e4, h), x2.include(P, h), x2.include(d2, h), i(x2), x2.varyings.add("depth", "float"), w && O.uniforms.add(new s2("tex", (o5) => o5.texture)), j.code.add(o`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`), x2.include(s3, h), O.code.add(o`
          void main(void) {
            discardBySlice(vpos);
            ${w ? o`
                    vec4 texColor = texture(tex, ${h.hasColorTextureTransform ? o`colorUV` : o`vuv0`});
                    discardOrAdjustAlpha(texColor);` : ""}
            ${h.output === o2.ObjectAndLayerIdColor ? o`outputObjectAndLayerIdColor();` : o`outputDepth(depth);`}
          }
        `);
      break;
    case o2.Normal: {
      d(j, h), x2.include(o4, h), x2.include(t, h), x2.include(n, h), x2.include(o3, h), x2.include(l, h), w && O.uniforms.add(new s2("tex", (o6) => o6.texture)), h.normalType === a.ScreenDerivative && x2.varyings.add("vPositionView", "vec3");
      const o5 = h.normalType === a.Attribute || h.normalType === a.Compressed;
      j.code.add(o`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${o5 ? o`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));` : o`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `), x2.include(P, h), x2.include(s3, h), O.code.add(o`
          void main() {
            discardBySlice(vpos);
            ${w ? o`
                    vec4 texColor = texture(tex, ${h.hasColorTextureTransform ? o`colorUV` : o`vuv0`});
                    discardOrAdjustAlpha(texColor);` : ""}

            ${h.normalType === a.ScreenDerivative ? o`vec3 normal = screenDerivativeNormal(vPositionView);` : o`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);
      break;
    }
    case o2.Highlight:
      d(j, h), x2.include(o4, h), x2.include(o3, h), x2.include(l, h), w && O.uniforms.add(new s2("tex", (o5) => o5.texture)), j.code.add(o`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`), x2.include(P, h), x2.include(s3, h), x2.include(a2, h), O.code.add(o`
          void main() {
            discardBySlice(vpos);
            ${w ? o`
                    vec4 texColor = texture(tex, ${h.hasColorTextureTransform ? o`colorUV` : o`vuv0`});
                    discardOrAdjustAlpha(texColor);` : ""}
            outputHighlight();
          }
        `);
  }
}

export {
  e5 as e,
  i2 as i,
  x
};
//# sourceMappingURL=chunk-PZH3N2FW.js.map