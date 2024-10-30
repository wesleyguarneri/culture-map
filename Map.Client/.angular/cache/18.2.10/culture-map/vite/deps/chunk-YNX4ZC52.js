import {
  f as f3
} from "./chunk-LWAFK7Z6.js";
import {
  e as e5
} from "./chunk-BFWLPS7M.js";
import {
  f as f4
} from "./chunk-M4YLDDTR.js";
import {
  r
} from "./chunk-K2LTET4M.js";
import {
  E as E2
} from "./chunk-RASN5P76.js";
import {
  A,
  d
} from "./chunk-5L3YXBNN.js";
import {
  E,
  _ as _2,
  c,
  f,
  l,
  s as s3
} from "./chunk-IFUKJDOU.js";
import {
  e as e4,
  f as f2,
  o as o4
} from "./chunk-LD5YIQXD.js";
import {
  t as t2
} from "./chunk-J7KF6IEI.js";
import {
  r as r2,
  r2 as r3,
  t
} from "./chunk-XGDLE7WK.js";
import {
  u
} from "./chunk-QMUS26QM.js";
import {
  r as r4
} from "./chunk-FHW2TG7X.js";
import {
  u2
} from "./chunk-YAGNWBGU.js";
import {
  o as o2
} from "./chunk-VIIVMRRO.js";
import {
  S,
  _,
  h as h2,
  o as o3,
  s as s2
} from "./chunk-LKHUGH5W.js";
import {
  e as e3
} from "./chunk-ZVFENZUF.js";
import {
  s
} from "./chunk-SYYDVGKY.js";
import {
  R
} from "./chunk-YLE5AYZV.js";
import {
  y
} from "./chunk-JNWMZ6EJ.js";
import {
  h,
  i,
  o
} from "./chunk-WJKYGQOY.js";
import {
  e as e2
} from "./chunk-4MMTPKY4.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/ImageMaterialTechnique.js
var E3 = class _E extends r2 {
  initializeProgram(e6) {
    return new r3(e6.rctx, _E.shader.get().build(this.configuration), _3);
  }
  _setPipelineState(e6, r5) {
    const i2 = this.configuration, o5 = e6 === o2.NONE, s4 = e6 === o2.FrontFace;
    return S({
      blending: i2.output === o.Color && i2.transparent ? o5 ? w : c(e6) : null,
      culling: h2(i2.cullFace),
      depthTest: {
        func: f(e6)
      },
      depthWrite: o5 ? i2.writeDepth ? o3 : null : l(e6),
      drawBuffers: s3(e6),
      colorWrite: _,
      stencilWrite: i2.hasOccludees ? e4 : null,
      stencilTest: i2.hasOccludees ? r5 ? o4 : f2 : null,
      polygonOffset: o5 || s4 ? null : _2(i2.enableOffset)
    });
  }
  initializePipeline() {
    return this._occludeePipelineState = this._setPipelineState(this.configuration.transparencyPassType, true), this._setPipelineState(this.configuration.transparencyPassType, false);
  }
  getPipeline(e6) {
    return e6 ? this._occludeePipelineState : super.getPipeline();
  }
};
E3.shader = new t(f4, () => import("./ImageMaterial.glsl-HZEG3UTA.js"));
var w = s2(R.ONE, R.ONE_MINUS_SRC_ALPHA);
var C = class extends t2 {
  constructor() {
    super(...arguments), this.output = o.Color, this.cullFace = e3.None, this.hasSlicePlane = false, this.transparent = false, this.enableOffset = true, this.writeDepth = true, this.hasOccludees = false, this.transparencyPassType = o2.NONE, this.multipassEnabled = false, this.cullAboveGround = false, this.perspectiveInterpolation = true;
  }
};
e([r4({
  count: o.COUNT
})], C.prototype, "output", void 0), e([r4({
  count: e3.COUNT
})], C.prototype, "cullFace", void 0), e([r4()], C.prototype, "hasSlicePlane", void 0), e([r4()], C.prototype, "transparent", void 0), e([r4()], C.prototype, "enableOffset", void 0), e([r4()], C.prototype, "writeDepth", void 0), e([r4()], C.prototype, "hasOccludees", void 0), e([r4({
  count: o2.COUNT
})], C.prototype, "transparencyPassType", void 0), e([r4()], C.prototype, "multipassEnabled", void 0), e([r4()], C.prototype, "cullAboveGround", void 0), e([r4()], C.prototype, "perspectiveInterpolation", void 0), e([r4({
  constValue: false
})], C.prototype, "occlusionPass", void 0);
var _3 = /* @__PURE__ */ new Map([[e2.POSITION, 0], [e2.UV0, 2], [e2.PERSPECTIVEDIVIDE, 3]]);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/ImageMaterial.js
var g = class extends e5 {
  constructor(e6) {
    super(e6, new P()), this.supportsEdges = true, this.produces = /* @__PURE__ */ new Map([[E2.OPAQUE_MATERIAL, (e7) => h(e7) || i(e7) && !this.parameters.transparent], [E2.TRANSPARENT_MATERIAL, (e7) => i(e7) && this.parameters.transparent && this.parameters.writeDepth], [E2.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL, (e7) => i(e7) && this.parameters.transparent && !this.parameters.writeDepth], [E2.DRAPED_MATERIAL, (e7) => i(e7) || h(e7)]]), this._vertexAttributeLocations = _3, this._configuration = new C();
  }
  getConfiguration(e6, t3) {
    return this._configuration.output = e6, this._configuration.cullFace = this.parameters.cullFace, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.transparent = this.parameters.transparent, this._configuration.writeDepth = this.parameters.writeDepth, this._configuration.hasOccludees = this.parameters.hasOccludees, this._configuration.transparencyPassType = t3.transparencyPassType, this._configuration.enableOffset = t3.camera.relativeElevation < E, this._configuration.multipassEnabled = t3.multipassEnabled, this._configuration.cullAboveGround = t3.multipassTerrain.cullAboveGround, this._configuration.perspectiveInterpolation = this.parameters.perspectiveInterpolation, this._configuration;
  }
  createGLMaterial(e6) {
    return new I(e6);
  }
  createBufferWriter() {
    const e6 = f3.clone();
    return this.parameters.perspectiveInterpolation && e6.f32(e2.PERSPECTIVEDIVIDE), new b(e6);
  }
};
var I = class extends u {
  constructor(e6) {
    super(__spreadValues(__spreadValues({}, e6), e6.material.parameters));
  }
  _updateParameters(e6) {
    return this.updateTexture(this._material.parameters.textureId), this._material.setParameters(this.textureBindParameters), this.ensureTechnique(E3, e6);
  }
  _updateOccludeeState(e6) {
    e6.hasOccludees !== this._material.parameters.hasOccludees && (this._material.setParameters({
      hasOccludees: e6.hasOccludees
    }), this._updateParameters(e6));
  }
  beginSlot(e6) {
    return this._output === o.Color && this._updateOccludeeState(e6), this._updateParameters(e6);
  }
};
var b = class extends r {
  write(t3, r5, s4, a, i2) {
    for (const n2 of this.vertexBufferLayout.fields.keys()) {
      const o5 = s4.attributes.get(n2);
      if (o5) if (n2 === e2.PERSPECTIVEDIVIDE) {
        s(1 === o5.size);
        const t4 = a.getField(n2, y);
        t4 && d(o5, t4, i2);
      } else A(n2, o5, t3, r5, a, i2);
    }
  }
};
var P = class extends u2 {
  constructor() {
    super(...arguments), this.transparent = false, this.writeDepth = true, this.hasSlicePlane = false, this.cullFace = e3.None, this.hasOccludees = false, this.opacity = 1, this.textureId = null, this.initTextureTransparent = true, this.perspectiveInterpolation = false;
  }
};

export {
  g
};
//# sourceMappingURL=chunk-YNX4ZC52.js.map
