import {
  d
} from "./chunk-KTRZHJ2M.js";
import {
  e as e2
} from "./chunk-ACZYDHB3.js";
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

// ../../../node_modules/@arcgis/core/chunks/MeasurementArrow.glsl.js
function n(n2) {
  const s2 = new o3(), {
    vertex: a,
    fragment: l
  } = s2;
  d(a, n2), a.uniforms.add(new o2("width", (e3) => e3.width)), s2.attributes.add(e.POSITION, "vec3"), s2.attributes.add(e.NORMAL, "vec3"), s2.attributes.add(e.UV0, "vec2"), s2.attributes.add(e.LENGTH, "float"), s2.varyings.add("vtc", "vec2"), s2.varyings.add("vlength", "float"), s2.varyings.add("vradius", "float"), a.code.add(o`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = length;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`), l.uniforms.add(new o2("outlineSize", (e3) => e3.outlineSize), new e2("outlineColor", (e3) => e3.outlineColor), new o2("stripeLength", (e3) => e3.stripeLength), new e2("stripeEvenColor", (e3) => e3.stripeEvenColor), new e2("stripeOddColor", (e3) => e3.stripeOddColor));
  const v = 1 / Math.sqrt(2);
  return l.code.add(o`
    const float INV_SQRT2 = ${o.float(v)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      fragColor = color;
    }
  `), s2;
}
var s = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: n
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  n,
  s
};
//# sourceMappingURL=chunk-NZNCWPFS.js.map
