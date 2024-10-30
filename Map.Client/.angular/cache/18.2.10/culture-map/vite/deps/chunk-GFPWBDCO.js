import {
  m
} from "./chunk-JMV2M56E.js";
import {
  e as e6
} from "./chunk-BFWLPS7M.js";
import {
  r
} from "./chunk-K2LTET4M.js";
import {
  E as E2
} from "./chunk-RASN5P76.js";
import {
  A,
  E,
  _ as _3,
  c,
  f as f2,
  s
} from "./chunk-IFUKJDOU.js";
import {
  e as e5,
  f as f3,
  o as o4
} from "./chunk-LD5YIQXD.js";
import {
  t as t4
} from "./chunk-J7KF6IEI.js";
import {
  r as r2,
  r2 as r3,
  t as t2
} from "./chunk-XGDLE7WK.js";
import {
  t
} from "./chunk-GDEAPZ64.js";
import {
  r as r4
} from "./chunk-FHW2TG7X.js";
import {
  t as t3
} from "./chunk-YCQXFVJL.js";
import {
  O
} from "./chunk-GCFUJXGH.js";
import {
  o as o2
} from "./chunk-VIIVMRRO.js";
import {
  S,
  _ as _2,
  h,
  o as o3
} from "./chunk-LKHUGH5W.js";
import {
  e as e4
} from "./chunk-ZVFENZUF.js";
import {
  H
} from "./chunk-NWICVENM.js";
import {
  f
} from "./chunk-YLE5AYZV.js";
import {
  d,
  e as e3,
  g,
  o
} from "./chunk-WJKYGQOY.js";
import {
  e as e2
} from "./chunk-4MMTPKY4.js";
import {
  _
} from "./chunk-IMVP5ADD.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  has
} from "./chunk-DXLOWWK7.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/ColorMaterialTechnique.js
var S2 = class _S extends r2 {
  initializeProgram(e7) {
    return new r3(e7.rctx, _S.shader.get().build(this.configuration), O);
  }
  _createPipeline(e7, t5) {
    const i2 = this.configuration, s2 = e7 === o2.NONE, p = e7 === o2.FrontFace;
    return S({
      blending: i2.output === o.Color && i2.transparent ? s2 ? A : c(e7) : null,
      culling: h(i2.cullFace),
      depthTest: i2.draped ? null : {
        func: f2(e7)
      },
      depthWrite: i2.draped ? null : (s2 || p) && i2.writeDepth ? o3 : null,
      drawBuffers: i2.output === o.Depth ? {
        buffers: [f.NONE]
      } : s(e7),
      colorWrite: _2,
      stencilWrite: i2.hasOccludees ? e5 : null,
      stencilTest: i2.hasOccludees ? t5 ? o4 : f3 : null,
      polygonOffset: s2 || p ? i2.polygonOffset ? w : null : _3(i2.enableOffset)
    });
  }
  initializePipeline() {
    return this._occludeePipelineState = this._createPipeline(this.configuration.transparencyPassType, true), this._createPipeline(this.configuration.transparencyPassType, false);
  }
  getPipeline(e7) {
    return e7 ? this._occludeePipelineState : super.getPipeline();
  }
};
S2.shader = new t2(m, () => import("./ColorMaterial.glsl-B7QYSA3B.js"));
var w = {
  factor: 1,
  units: 1
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/ColorMaterialTechniqueConfiguration.js
var i = class extends t4 {
  constructor() {
    super(...arguments), this.output = o.Color, this.cullFace = e4.None, this.transparencyPassType = o2.NONE, this.hasSlicePlane = false, this.hasVertexColors = false, this.transparent = false, this.polygonOffset = false, this.enableOffset = true, this.writeDepth = true, this.hasOccludees = false, this.multipassEnabled = false, this.cullAboveGround = false, this.objectAndLayerIdColorInstanced = false, this.vvColor = false, this.draped = false;
  }
};
e([r4({
  count: o.COUNT
})], i.prototype, "output", void 0), e([r4({
  count: e4.COUNT
})], i.prototype, "cullFace", void 0), e([r4({
  count: o2.COUNT
})], i.prototype, "transparencyPassType", void 0), e([r4()], i.prototype, "hasSlicePlane", void 0), e([r4()], i.prototype, "hasVertexColors", void 0), e([r4()], i.prototype, "transparent", void 0), e([r4()], i.prototype, "polygonOffset", void 0), e([r4()], i.prototype, "enableOffset", void 0), e([r4()], i.prototype, "writeDepth", void 0), e([r4()], i.prototype, "hasOccludees", void 0), e([r4()], i.prototype, "multipassEnabled", void 0), e([r4()], i.prototype, "cullAboveGround", void 0), e([r4()], i.prototype, "objectAndLayerIdColorInstanced", void 0), e([r4()], i.prototype, "vvColor", void 0), e([r4()], i.prototype, "draped", void 0), e([r4({
  constValue: false
})], i.prototype, "occlusionPass", void 0), e([r4({
  constValue: true
})], i.prototype, "hasVvInstancing", void 0), e([r4({
  constValue: false
})], i.prototype, "vvSize", void 0), e([r4({
  constValue: false
})], i.prototype, "vvOpacity", void 0);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/ColorMaterial.js
var d2 = class extends e6 {
  constructor(e7) {
    super(e7, new g2()), this.supportsEdges = true, this.produces = /* @__PURE__ */ new Map([[E2.OPAQUE_MATERIAL, (e8) => e8 === o.Highlight || d(e8) && !this._isTransparent], [E2.OPAQUE_NO_SSAO_DEPTH, (e8) => g(e8) && this.parameters.writeLinearDepth && !this._isTransparent], [E2.TRANSPARENT_MATERIAL, (e8) => d(e8) && this._isTransparent && this.parameters.writeDepth], [E2.TRANSPARENT_NO_SSAO_DEPTH, (e8) => g(e8) && this.parameters.writeLinearDepth && this._isTransparent && this.parameters.writeDepth], [E2.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL, (e8) => (d(e8) || g(e8) && this.parameters.writeLinearDepth) && this._isTransparent && !this.parameters.writeDepth], [E2.DRAPED_MATERIAL, (e8) => e3(e8)]]), this._configuration = new i();
  }
  getConfiguration(e7, r5) {
    return this._configuration.output = e7, this._configuration.cullFace = this.parameters.cullFace, this._configuration.hasVertexColors = this.parameters.hasVertexColors && !this.parameters.vvColor, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.transparent = this._isTransparent, this._configuration.polygonOffset = this.parameters.polygonOffset, this._configuration.writeDepth = this.parameters.writeDepth, this._configuration.hasOccludees = this.parameters.hasOccludees, this._configuration.transparencyPassType = r5.transparencyPassType, this._configuration.enableOffset = r5.camera.relativeElevation < E, this._configuration.multipassEnabled = r5.multipassEnabled, this._configuration.cullAboveGround = r5.multipassTerrain.cullAboveGround, this._configuration.vvColor = !!this.parameters.vvColor, this._configuration.draped = this.parameters.draped, this._configuration;
  }
  createGLMaterial(e7) {
    return new T(e7);
  }
  createBufferWriter() {
    const e7 = H().vec3f(e2.POSITION);
    return has("enable-feature:objectAndLayerId-rendering") && e7.vec4u8(e2.OBJECTANDLAYERIDCOLOR), this.parameters.vvColor ? e7.f32(e2.COLORFEATUREATTRIBUTE) : e7.vec4u8(e2.COLOR), new r(e7);
  }
  get _isTransparent() {
    return this.parameters.color[3] < 1 || this.parameters.forceTransparentMode;
  }
};
var T = class extends t {
  _updateOccludeeState(e7) {
    e7.hasOccludees !== this._material.parameters.hasOccludees && this._material.setParameters({
      hasOccludees: e7.hasOccludees
    });
  }
  beginSlot(e7) {
    return this._output === o.Color && this._updateOccludeeState(e7), this.ensureTechnique(S2, e7);
  }
};
var g2 = class extends t3 {
  constructor() {
    super(...arguments), this.color = _, this.forceTransparentMode = false, this.writeDepth = true, this.writeLinearDepth = false, this.hasVertexColors = false, this.polygonOffset = false, this.hasSlicePlane = false, this.cullFace = e4.None, this.hasOccludees = false, this.draped = false;
  }
};

export {
  d2 as d
};
//# sourceMappingURL=chunk-GFPWBDCO.js.map
