import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c
} from "./chunk-KSOKDIBG.js";
import {
  s
} from "./chunk-TRF6JO5N.js";
import {
  o
} from "./chunk-LGS63R4F.js";

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
//# sourceMappingURL=chunk-ZFMS3XGM.js.map
