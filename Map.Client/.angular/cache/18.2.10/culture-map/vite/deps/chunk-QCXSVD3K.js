import {
  o as o2
} from "./chunk-VWVZLPC3.js";
import {
  e as e2
} from "./chunk-X2OAE75B.js";
import {
  s as s2
} from "./chunk-UCPBGEQD.js";
import {
  o as o3
} from "./chunk-SIZK72CP.js";
import {
  s
} from "./chunk-ZTT6ENBS.js";
import {
  n as n2,
  o
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-4MMTPKY4.js";
import {
  n
} from "./chunk-DY7FJHTG.js";

// ../../../node_modules/@arcgis/core/chunks/HighlightBlur.glsl.js
var d = class extends n2 {
  constructor() {
    super(...arguments), this.blurSize = n();
  }
};
function l() {
  const e3 = new o3(), {
    attributes: t,
    varyings: d2,
    vertex: l2,
    fragment: c2
  } = e3;
  return t.add(e.POSITION, "vec2"), t.add(e.UV0, "vec2"), d2.add("blurCoordinate", "vec3"), l2.uniforms.add(new s2("coverageTex", (e4) => e4.coverageTexture), new e2("coverageRounding", (e4) => e4.coverageRounding)), l2.code.add(o`void main() {
gl_Position = vec4(position, 0.0, 1.0);
vec4 cov = texture(coverageTex, uv0 * coverageRounding);
if (cov.r == 0.0) {
gl_Position = vec4(0.0);
}
blurCoordinate = vec3(gl_Position.xy * 0.5 + vec2(0.5), cov.g);
}`), c2.uniforms.add(new o2("blurSize", (e4) => e4.blurSize), new s("tex", (e4) => e4.blurInputTexture)), c2.code.add(o`void main() {
vec2 uv = blurCoordinate.xy;
vec4 center = texture(tex, uv);
if (blurCoordinate.z == 1.0) {
fragColor = center;
} else {
vec4 sum = center * 0.204164;
sum += texture(tex, uv + blurSize * 1.407333) * 0.304005;
sum += texture(tex, uv - blurSize * 1.407333) * 0.304005;
sum += texture(tex, uv + blurSize * 3.294215) * 0.093913;
sum += texture(tex, uv - blurSize * 3.294215) * 0.093913;
fragColor = sum;
}
}`), e3;
}
var c = Object.freeze(Object.defineProperty({
  __proto__: null,
  HighlightBlurDrawParameters: d,
  build: l
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  d,
  l,
  c
};
//# sourceMappingURL=chunk-QCXSVD3K.js.map
