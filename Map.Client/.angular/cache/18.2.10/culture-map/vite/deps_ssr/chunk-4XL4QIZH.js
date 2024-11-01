import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f
} from "./chunk-6NVF5BZF.js";
import {
  o as o4
} from "./chunk-DUV7OLAZ.js";
import {
  c
} from "./chunk-KSOKDIBG.js";
import {
  e
} from "./chunk-3NWWTJOW.js";
import {
  s
} from "./chunk-TRF6JO5N.js";
import {
  o as o5
} from "./chunk-ZHVMMFTW.js";
import {
  o as o3
} from "./chunk-B76NC7GX.js";
import {
  o as o2
} from "./chunk-Q5JLNMWZ.js";
import {
  o
} from "./chunk-LGS63R4F.js";
import {
  n
} from "./chunk-BZHHBBFX.js";

// ../../../node_modules/@arcgis/core/chunks/SSAO.glsl.js
var u = 16;
function f2() {
  const r = new o5(), f3 = r.fragment;
  return r.include(o4), r.include(f), f3.include(c), f3.uniforms.add(new o2("radius", (e2, r2) => d(r2.camera))).code.add(o`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`), f3.code.add(o`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`), f3.uniforms.add(new s("normalMap", (e2) => e2.normalTexture), new s("depthMap", (e2) => e2.depthTexture), new o2("projScale", (e2) => e2.projScale), new s("rnm", (e2) => e2.noiseTexture), new e("rnmScale", (r2, t) => o3(m, t.camera.fullWidth / r2.noiseTexture.descriptor.width, t.camera.fullHeight / r2.noiseTexture.descriptor.height)), new o2("intensity", (e2) => e2.intensity), new e("screenSize", (r2, t) => o3(m, t.camera.fullWidth, t.camera.fullHeight))), r.outputs.add("fragOcclusion", "float"), f3.code.add(o`
    void main(void) {
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${o.int(u)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${o.int(u)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `), r;
}
function d(e2) {
  return Math.max(10, 20 * e2.computeScreenPixelSizeAtDist(Math.abs(4 * e2.relativeElevation)));
}
var m = n();
var v = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: f2,
  getRadius: d
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  f2 as f,
  d,
  v
};
//# sourceMappingURL=chunk-4XL4QIZH.js.map
