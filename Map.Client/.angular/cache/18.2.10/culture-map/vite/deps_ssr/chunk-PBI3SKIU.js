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
  o
} from "./chunk-LGS63R4F.js";

// ../../../node_modules/@arcgis/core/chunks/Blur.glsl.js
function s2() {
  const s3 = new o3();
  return s3.include(o2), s3.fragment.uniforms.add(new s("blendWeightsTexture", (e) => e.inputTexture), new s("colorTexture", (e) => e.color)), s3.fragment.code.add(o`void main() {
vec2 resolution = 1.0 / vec2(textureSize(colorTexture, 0));
vec4 offsets = vec4(uv.x + resolution.x, uv.y, uv.x, uv.y - resolution.y);
vec4 a;
a.rb = texture(blendWeightsTexture, uv).rb;
a.g = texture(blendWeightsTexture, offsets.zw).g;
a.a = texture(blendWeightsTexture, offsets.xy).a;
if ( dot(a, vec4(1.0)) < 1e-5 ) {
fragColor = texture( colorTexture, uv, 0.0 );
} else {
vec2 offset;
offset.x = a.a > a.b ? a.a : -a.b;
offset.y = a.g > a.r ? -a.g : a.r;
if ( abs( offset.x ) > abs( offset.y )) {
offset.y = 0.0;
} else {
offset.x = 0.0;
}
vec4 C = texture( colorTexture, uv, 0.0 );
vec4 Cop = texture( colorTexture, uv + sign( offset ) * resolution.xy, 0.0 );
float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );
fragColor = mix(C, Cop, s);
}
}`), s3;
}
var f = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: s2
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  s2 as s,
  f
};
//# sourceMappingURL=chunk-PBI3SKIU.js.map
