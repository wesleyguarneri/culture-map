import {
  o as o4
} from "./chunk-VWVZLPC3.js";
import {
  o as o3
} from "./chunk-JXVDTUGR.js";
import {
  c
} from "./chunk-HAO4WCNW.js";
import {
  s as s2
} from "./chunk-UCPBGEQD.js";
import {
  o as o5
} from "./chunk-SIZK72CP.js";
import {
  s
} from "./chunk-ZTT6ENBS.js";
import {
  o as o2
} from "./chunk-R5ZE5A4K.js";
import {
  o
} from "./chunk-SZWWBMQN.js";
import {
  x
} from "./chunk-AXVPJBVW.js";

// ../../../node_modules/@arcgis/core/chunks/SSAOBlur.glsl.js
var i = 4;
function f() {
  const f2 = new o5(), u2 = f2.fragment;
  f2.include(o3);
  const c2 = (i + 1) / 2, p = 1 / (2 * c2 * c2);
  return u2.include(c), u2.uniforms.add(new s2("depthMap", (e) => e.depthTexture), new s("tex", (e) => e.colorTexture), new o4("blurSize", (e) => e.blurSize), new o2("projScale", (r, o6) => {
    const t = x(o6.camera.eye, o6.camera.center);
    return t > 5e4 ? Math.max(0, r.projScale - (t - 5e4)) : r.projScale;
  })), u2.code.add(o`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${o.float(p)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `), f2.outputs.add("fragBlur", "float"), u2.code.add(o`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${o.int(i)}; r <= ${o.int(i)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `), f2;
}
var u = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: f
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  f,
  u
};
//# sourceMappingURL=chunk-ODLAAWPY.js.map