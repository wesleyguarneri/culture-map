import {
  c
} from "./chunk-HAO4WCNW.js";
import {
  s
} from "./chunk-UCPBGEQD.js";
import {
  o
} from "./chunk-SZWWBMQN.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js
function a(a2, o3) {
  if (!o3.multipassEnabled) return;
  a2.fragment.include(c), a2.fragment.uniforms.add(new s("terrainDepthTexture", (e, t) => t.multipassTerrain.depth?.attachment));
  const n = o3.occlusionPass;
  a2.fragment.code.add(o`
   ${n ? "bool" : "void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${n ? o`return fragmentDepth < linearDepth && depth < 1.0;` : o`
          if(fragmentDepth ${o3.cullAboveGround ? ">" : "<="} linearDepth){
            discard;
          }`}
    }`);
}
var o2 = class {
  constructor() {
    this.cullAboveGround = false;
  }
};

export {
  a,
  o2 as o
};
//# sourceMappingURL=chunk-ZKSEQXDM.js.map
