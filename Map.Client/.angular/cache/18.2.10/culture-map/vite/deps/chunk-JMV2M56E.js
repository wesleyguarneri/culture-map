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
  o as o3
} from "./chunk-VIIVMRRO.js";
import {
  a as a2
} from "./chunk-ZKSEQXDM.js";
import {
  e as e4
} from "./chunk-675UQNXB.js";
import {
  o as o4
} from "./chunk-DXGCBLDW.js";
import {
  t
} from "./chunk-TGHJVD7I.js";
import {
  P
} from "./chunk-OZG2NNUW.js";
import {
  d
} from "./chunk-KTRZHJ2M.js";
import {
  e as e3
} from "./chunk-ACZYDHB3.js";
import {
  o as o5
} from "./chunk-SIZK72CP.js";
import {
  o as o2
} from "./chunk-WJKYGQOY.js";
import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-4MMTPKY4.js";

// ../../../node_modules/@arcgis/core/chunks/ColorMaterial.glsl.js
function f(f2) {
  const m2 = new o5(), {
    vertex: w,
    fragment: h,
    attributes: C,
    varyings: y
  } = m2;
  d(w, f2), m2.include(o4, f2), m2.include(e2, f2), m2.include(l, f2), m2.include(d2, f2), C.add(e.POSITION, "vec3"), f2.vvColor && C.add(e.COLORFEATUREATTRIBUTE, "float"), y.add("vColor", "vec4"), y.add("vpos", "vec3");
  const j = f2.multipassEnabled && f2.output === o2.Color;
  j && y.add("depth", "float"), w.uniforms.add(new e3("eColor", (e5) => e5.color)), w.code.add(o`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${f2.hasVertexColors ? "vColor *= eColor;" : f2.vvColor ? "vColor = eColor * interpolateVVColor(colorFeatureAttribute);" : "vColor = eColor;"}
      ${j ? "depth = (view * vec4(vpos, 1.0)).z;" : ""}
      gl_Position = transformPosition(proj, view, vpos);
    }
  `), m2.include(P, f2), j && m2.include(a2, f2), h.include(e4);
  const L = f2.output === o2.Highlight;
  return L && m2.include(a, f2), f2.transparencyPassType === o3.ColorAlpha && (m2.outputs.add("fragColor", "vec4", 0), m2.outputs.add("fragAlpha", "float", 1)), h.code.add(o`
  void main() {
    discardBySlice(vpos);
    ${j ? "terrainDepthTest(depth);" : ""}
    vec4 fColor = vColor;

    ${f2.output === o2.ObjectAndLayerIdColor ? o`fColor.a = 1.0;` : ""}

    if (fColor.a < ${o.float(t)}) {
      discard;
    }

    ${f2.output === o2.Color ? o`fragColor = highlightSlice(fColor, vpos); ${f2.transparencyPassType === o3.ColorAlpha ? o`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;` : ""}` : ""}
    ${L ? o`outputHighlight();` : ""};
    ${f2.output === o2.ObjectAndLayerIdColor ? o`outputObjectAndLayerIdColor();` : ""}
  }
  `), m2;
}
var m = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: f
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  f,
  m
};
//# sourceMappingURL=chunk-JMV2M56E.js.map
