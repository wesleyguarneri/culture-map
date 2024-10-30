import {
  s as s4
} from "./chunk-5RHKQDDL.js";
import {
  e as e2
} from "./chunk-ACZYDHB3.js";
import {
  s as s3
} from "./chunk-UCPBGEQD.js";
import {
  o as o2
} from "./chunk-SIZK72CP.js";
import {
  n as n2,
  o
} from "./chunk-SZWWBMQN.js";
import {
  e
} from "./chunk-4MMTPKY4.js";
import {
  n
} from "./chunk-IMVP5ADD.js";
import {
  s as s2
} from "./chunk-H7WPOTQH.js";
import {
  d,
  i,
  s
} from "./chunk-7ZJ6P7J7.js";

// ../../../node_modules/@arcgis/core/chunks/Magnifier.glsl.js
var f = class extends n2 {
  constructor() {
    super(...arguments), this.mask = null, this.overlay = null, this.input = null, this.size = 0;
  }
};
function v() {
  const e3 = new o2();
  return e3.attributes.add(e.POSITION, "vec2"), e3.vertex.uniforms.add(new e2("drawPosition", (e4, r) => c(e4, r))), e3.varyings.add("vUV", "vec2"), e3.vertex.code.add(o`void main(void) {
vUV = position;
gl_Position = vec4(drawPosition.xy + vec2(position - 0.5) * drawPosition.zw, 0.0, 1.0);
}`), e3.fragment.uniforms.add(new s3("textureInput", (e4) => e4.input)), e3.fragment.uniforms.add(new s3("textureMask", (e4) => e4.mask)), e3.fragment.uniforms.add(new s3("textureOverlay", (e4) => e4.overlay)), e3.fragment.uniforms.add(new s4("maskEnabled", (e4) => e4.magnifier.maskEnabled)), e3.fragment.uniforms.add(new s4("overlayEnabled", (e4) => e4.magnifier.overlayEnabled)), e3.fragment.code.add(o`const float barrelFactor = 1.1;
vec2 barrel(vec2 uv) {
vec2 uvn = uv * 2.0 - 1.0;
if (uvn.x == 0.0 && uvn.y == 0.0) {
return vec2(0.5, 0.5);
}
float theta = atan(uvn.y, uvn.x);
float r = pow(length(uvn), barrelFactor);
return r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;
}
void main() {
float mask = maskEnabled ? texture(textureMask, vUV).a : 1.0;
vec4 inputColor = texture(textureInput, barrel(vUV)) * mask;
vec4 overlayColor = overlayEnabled ? texture(textureOverlay, vUV) : vec4(0);
fragColor = overlayColor + (1.0 - overlayColor.a) * inputColor;
}`), e3;
}
function c(r, o3) {
  const t = o3.camera.pixelRatio, n3 = r.magnifier.offset.x * t, i2 = r.magnifier.offset.y * t;
  d(r.magnifier.position, g);
  const s5 = o3.camera.screenToRender(g, b), l = Math.ceil(t * r.magnifier.size), d2 = o3.camera.fullWidth, m = o3.camera.fullHeight;
  return s2(p, (s5[0] + n3) / d2 * 2 - 1, (s5[1] - i2) / m * 2 - 1, l / d2 * 2, l / m * 2);
}
var g = i();
var b = s();
var p = n();
var w = Object.freeze(Object.defineProperty({
  __proto__: null,
  MagnifierPassParameters: f,
  build: v
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  f,
  v,
  w
};
//# sourceMappingURL=chunk-LGOPK4HF.js.map
