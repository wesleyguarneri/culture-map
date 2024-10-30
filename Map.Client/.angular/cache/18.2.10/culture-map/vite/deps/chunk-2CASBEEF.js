import {
  o as o4
} from "./chunk-VIIVMRRO.js";
import {
  a
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
  f,
  p
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
  e as e2
} from "./chunk-PPMDUJ4E.js";
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
} from "./chunk-IMVP5ADD.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ScreenSizeScaling.glsl.js
function o7(o8, c) {
  if (!c.screenSizeEnabled) return;
  const n2 = o8.vertex;
  f(n2, c), n2.uniforms.add(new o3("perScreenPixelRatio", (e5, i) => i.camera.perScreenPixelRatio), new o3("screenSizeScale", (e5) => e5.screenSizeScale)), n2.code.add(o`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`);
}

// ../../../node_modules/@arcgis/core/chunks/ShadedColorMaterial.glsl.js
function u(e5) {
  const u2 = new o6(), b2 = e5.multipassEnabled && e5.output === o2.Color;
  u2.include(o5, e5), u2.include(o7, e5), u2.include(P, e5);
  const {
    vertex: h2,
    fragment: y
  } = u2;
  return y.include(e4), d(h2, e5), y.uniforms.add(new e3("uColor", (e6) => e6.color)), u2.attributes.add(e.POSITION, "vec3"), u2.varyings.add("vWorldPosition", "vec3"), b2 && u2.varyings.add("depth", "float"), e5.screenSizeEnabled && u2.attributes.add(e.OFFSET, "vec3"), e5.shadingEnabled && (p(h2), u2.attributes.add(e.NORMAL, "vec3"), u2.varyings.add("vViewNormal", "vec3")), h2.code.add(o`
    void main(void) {
      vWorldPosition = ${e5.screenSizeEnabled ? "screenSizeScaling(offset, position)" : "position"};
  `), e5.shadingEnabled && h2.code.add(o`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`), h2.code.add(o`
    ${b2 ? "depth = (view * vec4(vWorldPosition, 1.0)).z;" : ""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `), b2 && u2.include(a, e5), y.code.add(o`
    void main() {
      discardBySlice(vWorldPosition);
      ${b2 ? "terrainDepthTest(depth);" : ""}
    `), e5.shadingEnabled ? (y.uniforms.add(new e2("shadingDirection", (e6) => e6.shadingDirection)), y.uniforms.add(new e3("shadedColor", (e6) => w(e6.shadingTint, e6.color))), y.code.add(o`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`)) : y.code.add(o`vec4 finalColor = uColor;`), e5.transparencyPassType === o4.ColorAlpha && (u2.outputs.add("fragColor", "vec4", 0), u2.outputs.add("fragAlpha", "float", 1)), y.code.add(o`
      ${e5.output === o2.ObjectAndLayerIdColor ? o`finalColor.a = 1.0;` : ""}
      if (finalColor.a < ${o.float(t)}) {
        discard;
      }

      ${e5.output === o2.Color ? o`fragColor = highlightSlice(finalColor, vWorldPosition); ${e5.transparencyPassType === o4.ColorAlpha ? o`
                    fragColor = premultiplyAlpha(fragColor);
                    fragAlpha = fragColor.a;` : ""}` : ""}
    }
    `), u2;
}
function w(e5, o8) {
  const r = 1 - e5[3], i = e5[3] + o8[3] * r;
  return 0 === i ? (b[3] = i, b) : (b[0] = (e5[0] * e5[3] + o8[0] * o8[3] * r) / i, b[1] = (e5[1] * e5[3] + o8[1] * o8[3] * r) / i, b[2] = (e5[2] * e5[3] + o8[2] * o8[3] * r) / i, b[3] = o8[3], b);
}
var b = n();
var h = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: u
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  u,
  h
};
//# sourceMappingURL=chunk-2CASBEEF.js.map
