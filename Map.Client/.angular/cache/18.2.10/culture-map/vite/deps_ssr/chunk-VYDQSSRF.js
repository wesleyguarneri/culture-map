import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e2
} from "./chunk-RV5QLAWU.js";
import {
  o as o4
} from "./chunk-23Q4INNG.js";
import {
  a
} from "./chunk-6YHZYHJS.js";
import {
  t
} from "./chunk-YLQMUXQA.js";
import {
  P
} from "./chunk-4U7LUZFD.js";
import {
  d
} from "./chunk-T257OY4U.js";
import {
  e as e3
} from "./chunk-ZDFN6OZC.js";
import {
  o as o5
} from "./chunk-ZHVMMFTW.js";
import {
  o as o2
} from "./chunk-HITI6WDM.js";
import {
  o as o3
} from "./chunk-Q5JLNMWZ.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  e
} from "./chunk-D7C26LZP.js";

// ../../../node_modules/@arcgis/core/chunks/NativeLine.glsl.js
function u(u2) {
  const m2 = new o5(), {
    vertex: p,
    fragment: w
  } = m2;
  return m2.include(o4, u2), m2.include(e2, u2), d(p, u2), m2.attributes.add(e.POSITION, "vec3"), m2.varyings.add("vpos", "vec3"), p.code.add(o`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);
}`), u2.output === o2.Highlight && m2.include(a, u2), m2.include(P, u2), w.uniforms.add(new o3("alphaCoverage", (e4, o6) => Math.min(1, e4.width * o6.camera.pixelRatio))), u2.hasVertexColors || w.uniforms.add(new e3("constantColor", (e4) => e4.color)), w.code.add(o`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${u2.hasVertexColors ? "vColor" : "constantColor"};

    ${u2.output === o2.ObjectAndLayerIdColor ? o`color.a = 1.0;` : ""}

    if (color.a < ${o.float(t)}) {
      discard;
    }

    ${u2.output === o2.Color ? o`fragColor = highlightSlice(color, vpos);` : ""}
    ${u2.output === o2.Highlight ? o`outputHighlight();` : ""}
  }
  `), m2;
}
var m = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: u
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  u,
  m
};
//# sourceMappingURL=chunk-VYDQSSRF.js.map
