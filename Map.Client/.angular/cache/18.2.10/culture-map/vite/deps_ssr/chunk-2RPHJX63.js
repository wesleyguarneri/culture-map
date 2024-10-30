import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o as o2
} from "./chunk-DUV7OLAZ.js";
import {
  s
} from "./chunk-TRF6JO5N.js";
import {
  o as o3
} from "./chunk-ZHVMMFTW.js";
import {
  n,
  o
} from "./chunk-LGS63R4F.js";

// ../../../node_modules/@arcgis/core/chunks/OITCompositing.glsl.js
var s2 = class extends n {
};
function n2() {
  const r = new o3();
  return r.include(o2), r.fragment.uniforms.add(new s("colorTexture", (e) => e.colorTexture), new s("alphaTexture", (e) => e.alphaTexture), new s("frontFaceTexture", (e) => e.frontFaceTexture)), r.fragment.code.add(o`void main() {
float srcAlpha = texture(alphaTexture, uv).r;
if(srcAlpha <= 1e-5){
discard;
}
vec4 srcColor = texture(colorTexture, uv);
vec4 frontFace = texture(frontFaceTexture, uv);
fragColor = vec4(mix(srcColor.rgb / srcAlpha, frontFace.rgb, frontFace.a), 1.0 - srcColor.a);
}`), r;
}
var c = Object.freeze(Object.defineProperty({
  __proto__: null,
  OITCompositingPassParameters: s2,
  build: n2
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  s2 as s,
  n2 as n,
  c
};
//# sourceMappingURL=chunk-2RPHJX63.js.map
