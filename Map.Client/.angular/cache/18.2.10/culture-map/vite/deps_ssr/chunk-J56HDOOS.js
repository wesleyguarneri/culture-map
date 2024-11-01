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

// ../../../node_modules/@arcgis/core/chunks/EdgeDetect.glsl.js
var r = {
  threshold: 0.05,
  localConstrastAdaption: 2
};
function l() {
  const l2 = new o3();
  return l2.include(o2), l2.fragment.uniforms.add(new s("colorTexture", (e) => e.color)), l2.outputs.add("fragEdges", "vec2"), l2.fragment.code.add(o`
    float absMax3(vec3 v) {
      vec3 t = abs(v);
      return max(max(t.r, t.g), t.b);
    }

    void main() {
      vec2 resolution = 1.0 / vec2(textureSize(colorTexture, 0));
      vec4 offsets[3];
      offsets[0] = vec4(uv.x - resolution.x, uv.y, uv.x, uv.y + resolution.y);
      offsets[1] = vec4(uv.x + resolution.x, uv.y, uv.x, uv.y - resolution.y);
      offsets[2] = vec4(uv.x - 2.0 * resolution.x, uv.y, uv.x, uv.y + 2.0 * resolution.y);

      // Calculate color deltas:
      vec4 delta;
      vec3 C = texture(colorTexture, uv).rgb;

      vec3 Cleft = texture(colorTexture, offsets[0].xy).rgb;
      delta.x = absMax3(C - Cleft);

      vec3 Ctop = texture(colorTexture, offsets[0].zw).rgb;
      delta.y = absMax3(C - Ctop);

      vec2 edges = step(vec2(${o.float(r.threshold)}), delta.xy);

      // discard if there is no edge:
      if (dot(edges, vec2(1.0)) == 0.0) {
        discard;
      }

      // Calculate right and bottom deltas:
      vec3 Cright = texture(colorTexture, offsets[1].xy).rgb;
      delta.z = absMax3(C - Cright);

      vec3 Cbottom  = texture(colorTexture, offsets[1].zw).rgb;
      delta.w = absMax3(C - Cbottom);

      // Calculate the maximum delta in the direct neighborhood:
      float maxDelta = max(max(max(delta.x, delta.y), delta.z), delta.w);

      // Calculate left-left and top-top deltas:
      vec3 Cleftleft  = texture(colorTexture, offsets[2].xy).rgb;
      delta.z = absMax3(C - Cleftleft);

      vec3 Ctoptop = texture(colorTexture, offsets[2].zw).rgb;
      delta.w = absMax3(C - Ctoptop);

      // Calculate the final maximum delta:
      maxDelta = max(max(maxDelta, delta.z), delta.w);

      // Local contrast adaptation in action:
      edges *= step(maxDelta, float(${o.float(r.localConstrastAdaption)}) * delta.xy);

      fragEdges = edges;
    }
  `), l2;
}
var s2 = Object.freeze(Object.defineProperty({
  __proto__: null,
  build: l
}, Symbol.toStringTag, {
  value: "Module"
}));

export {
  l,
  s2 as s
};
//# sourceMappingURL=chunk-J56HDOOS.js.map
