import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  r as r3
} from "./chunk-TO2KOAJE.js";
import {
  j
} from "./chunk-VH65OWFZ.js";
import {
  a,
  p,
  s as s3
} from "./chunk-DTMLHZFB.js";
import {
  E
} from "./chunk-4WON4QDF.js";
import {
  A,
  c as c2,
  f as f2,
  l as l2,
  s
} from "./chunk-XUZTWNKD.js";
import {
  P,
  e as e2,
  f as f3,
  i as i2,
  l as l3,
  m,
  o as o5,
  s as s2
} from "./chunk-Q5PBA64J.js";
import {
  r,
  r2,
  t
} from "./chunk-22UDIQGJ.js";
import {
  u
} from "./chunk-XFLPRRYT.js";
import {
  t as t2
} from "./chunk-P5MJSFMN.js";
import {
  c2 as c,
  h
} from "./chunk-UE7ZYRIH.js";
import {
  o as o3
} from "./chunk-62ZEBDPC.js";
import {
  S,
  _,
  o as o4
} from "./chunk-HUOFTIIK.js";
import {
  H as H2
} from "./chunk-GHPF24X4.js";
import {
  f
} from "./chunk-KYLW5XXS.js";
import {
  g,
  i,
  l,
  o as o2
} from "./chunk-HITI6WDM.js";
import {
  e
} from "./chunk-D7C26LZP.js";
import {
  H,
  O,
  o
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/LineMarkerTechnique.js
var I = /* @__PURE__ */ new Map([[e.POSITION, 0], [e.PREVPOSITION, 1], [e.UV0, 2], [e.NORMAL, 3], [e.COLOR, 4], [e.COLORFEATUREATTRIBUTE, 4], [e.SIZE, 5], [e.SIZEFEATUREATTRIBUTE, 5], [e.OPACITYFEATUREATTRIBUTE, 6]]);
var R = class _R extends r {
  initializeProgram(e3) {
    return new r2(e3.rctx, _R.shader.get().build(this.configuration), I);
  }
  _makePipelineState(i3, t3) {
    const a2 = this.configuration, d = i3 === o3.NONE;
    return S({
      blending: a2.output === o2.Color ? d ? A : c2(i3) : null,
      depthTest: a2.space === p.Draped ? null : {
        func: f2(i3)
      },
      depthWrite: a2.space === p.Draped ? null : d ? a2.writeDepth ? o4 : null : l2(i3),
      drawBuffers: a2.output === o2.Depth ? {
        buffers: [f.NONE]
      } : s(i3),
      colorWrite: _,
      stencilWrite: a2.hasOccludees ? e2 : null,
      stencilTest: a2.hasOccludees ? t3 ? o5 : f3 : null,
      polygonOffset: {
        factor: 0,
        units: -10
      }
    });
  }
  initializePipeline() {
    return this.configuration.occluder && (this._occluderPipelineTransparent = S({
      blending: A,
      depthTest: s2,
      depthWrite: null,
      colorWrite: _,
      stencilWrite: null,
      stencilTest: m
    }), this._occluderPipelineOpaque = S({
      blending: A,
      depthTest: s2,
      depthWrite: null,
      colorWrite: _,
      stencilWrite: l3,
      stencilTest: P
    }), this._occluderPipelineMaskWrite = S({
      blending: null,
      depthTest: i2,
      depthWrite: null,
      colorWrite: null,
      stencilWrite: e2,
      stencilTest: o5
    })), this._occludeePipelineState = this._makePipelineState(this.configuration.transparencyPassType, true), this._makePipelineState(this.configuration.transparencyPassType, false);
  }
  getPipeline(e3, i3, t3) {
    return e3 ? this._occludeePipelineState : this.configuration.occluder ? t3 ? this._occluderPipelineTransparent : i3 ? this._occluderPipelineOpaque : this._occluderPipelineMaskWrite : super.getPipeline();
  }
};
R.shader = new t(j, () => import("./LineMarker.glsl-DAL3IL6U.js"));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/LineMarkerMaterial.js
var O2 = class extends c {
  constructor(e3) {
    super(e3, new g2()), this.produces = /* @__PURE__ */ new Map([[E.OPAQUE_MATERIAL, (e4) => e4 === o2.Highlight || i(e4) && this.parameters.renderOccluded === h.OccludeAndTransparentStencil], [E.OPAQUE_NO_SSAO_DEPTH, (e4) => g(e4)], [E.OCCLUDER_MATERIAL, (e4) => l(e4) && this.parameters.renderOccluded === h.OccludeAndTransparentStencil], [E.TRANSPARENT_OCCLUDER_MATERIAL, (e4) => l(e4) && this.parameters.renderOccluded === h.OccludeAndTransparentStencil], [E.TRANSPARENT_MATERIAL, (e4) => i(e4) && this.parameters.writeDepth], [E.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL, (e4) => i(e4) && !this.parameters.writeDepth], [E.DRAPED_MATERIAL, (e4) => e4 === o2.Color || e4 === o2.Highlight]]), this._vertexAttributeLocations = I, this._configuration = new a(), this._layout = this.createLayout();
  }
  getConfiguration(e3, t3) {
    return this._configuration.output = e3, this._configuration.space = t3.slot === E.DRAPED_MATERIAL ? p.Draped : this.parameters.worldSpace ? p.World : p.Screen, this._configuration.hideOnShortSegments = this.parameters.hideOnShortSegments, this._configuration.hasCap = this.parameters.cap !== r3.BUTT, this._configuration.anchor = this.parameters.anchor, this._configuration.hasTip = this.parameters.hasTip, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.hasOccludees = this.parameters.hasOccludees, this._configuration.writeDepth = this.parameters.writeDepth, this._configuration.vvSize = !!this.parameters.vvSize, this._configuration.vvColor = !!this.parameters.vvColor, this._configuration.vvOpacity = !!this.parameters.vvOpacity, this._configuration.occluder = this.parameters.renderOccluded === h.OccludeAndTransparentStencil, this._configuration.transparencyPassType = t3.transparencyPassType, this._configuration.multipassEnabled = t3.multipassEnabled, this._configuration.cullAboveGround = t3.multipassTerrain.cullAboveGround, this._configuration;
  }
  intersect() {
  }
  createLayout() {
    const e3 = H2().vec3f(e.POSITION).vec3f(e.PREVPOSITION).vec2f(e.UV0);
    return this.parameters.worldSpace && e3.vec3f(e.NORMAL), this.parameters.vvSize ? e3.f32(e.SIZEFEATUREATTRIBUTE) : e3.f32(e.SIZE), this.parameters.vvColor ? e3.f32(e.COLORFEATUREATTRIBUTE) : e3.vec4f(e.COLOR), this.parameters.vvOpacity && e3.f32(e.OPACITYFEATUREATTRIBUTE), e3;
  }
  createBufferWriter() {
    return new R2(this._layout, this.parameters);
  }
  createGLMaterial(e3) {
    return new S2(e3);
  }
};
var S2 = class extends u {
  constructor() {
    super(...arguments), this._markerPrimitive = null;
  }
  dispose() {
    super.dispose(), this._markerTextures.release(this._markerPrimitive), this._markerPrimitive = null;
  }
  _updateParameters(e3) {
    const t3 = this._material.parameters.markerPrimitive;
    return t3 !== this._markerPrimitive && (this._material.setParameters({
      markerTexture: this._markerTextures.swap(t3, this._markerPrimitive)
    }), this._markerPrimitive = t3), this._material.setParameters(this.textureBindParameters), this.ensureTechnique(R, e3);
  }
  _updateOccludeeState(e3) {
    e3.hasOccludees !== this._material.parameters.hasOccludees && this._material.setParameters({
      hasOccludees: e3.hasOccludees
    });
  }
  beginSlot(e3) {
    return this._output === o2.Color && this._updateOccludeeState(e3), this._updateParameters(e3);
  }
};
var g2 = class extends t2 {
  constructor() {
    super(...arguments), this.width = 0, this.color = [1, 1, 1, 1], this.markerPrimitive = "arrow", this.placement = "end", this.cap = r3.BUTT, this.anchor = s3.Center, this.hasTip = false, this.worldSpace = false, this.hideOnShortSegments = false, this.writeDepth = true, this.hasSlicePlane = false, this.vvFastUpdate = false, this.hasOccludees = false, this.markerTexture = null;
  }
};
var R2 = class {
  constructor(e3, t3) {
    this.vertexBufferLayout = e3, this._parameters = t3;
  }
  elementCount() {
    return "begin-end" === this._parameters.placement ? 12 : 6;
  }
  write(a2, s4, i3, n2, o6) {
    const h2 = i3.attributes.get(e.POSITION).data, c3 = h2.length / 3;
    let u2 = [1, 0, 0];
    const l4 = i3.attributes.get(e.NORMAL);
    this._parameters.worldSpace && null != l4 && (u2 = l4.data);
    let p2 = 1, d = 0;
    this._parameters.vvSize ? d = i3.attributes.get(e.SIZEFEATUREATTRIBUTE).data[0] : i3.attributes.has(e.SIZE) && (p2 = i3.attributes.get(e.SIZE).data[0]);
    let T = [1, 1, 1, 1], _2 = 0;
    this._parameters.vvColor ? _2 = i3.attributes.get(e.COLORFEATUREATTRIBUTE).data[0] : i3.attributes.has(e.COLOR) && (T = i3.attributes.get(e.COLOR).data);
    let f4 = 0;
    this._parameters.vvOpacity && (f4 = i3.attributes.get(e.OPACITYFEATUREATTRIBUTE).data[0]);
    const E2 = new Float32Array(n2.buffer);
    let A2 = o6 * (this.vertexBufferLayout.stride / 4);
    const v = (e3, t3, r4, a3) => {
      if (E2[A2++] = e3[0], E2[A2++] = e3[1], E2[A2++] = e3[2], E2[A2++] = t3[0], E2[A2++] = t3[1], E2[A2++] = t3[2], E2[A2++] = r4[0], E2[A2++] = r4[1], this._parameters.worldSpace && (E2[A2++] = u2[0], E2[A2++] = u2[1], E2[A2++] = u2[2]), this._parameters.vvSize ? E2[A2++] = d : E2[A2++] = p2, this._parameters.vvColor) E2[A2++] = _2;
      else {
        const e4 = Math.min(4 * a3, T.length - 4);
        E2[A2++] = T[e4], E2[A2++] = T[e4 + 1], E2[A2++] = T[e4 + 2], E2[A2++] = T[e4 + 3];
      }
      this._parameters.vvOpacity && (E2[A2++] = f4);
    };
    let O3;
    !function(e3) {
      e3[e3.ASCENDING = 1] = "ASCENDING", e3[e3.DESCENDING = -1] = "DESCENDING";
    }(O3 || (O3 = {}));
    const S3 = (s5, i4) => {
      const n3 = o(P2, h2[3 * s5], h2[3 * s5 + 1], h2[3 * s5 + 2]), o7 = I2;
      let u3 = s5 + i4;
      do {
        o(o7, h2[3 * u3], h2[3 * u3 + 1], h2[3 * u3 + 2]), u3 += i4;
      } while (H(n3, o7) && u3 >= 0 && u3 < c3);
      a2 && (O(n3, n3, a2), O(o7, o7, a2)), v(n3, o7, [-1, -1], s5), v(n3, o7, [1, -1], s5), v(n3, o7, [1, 1], s5), v(n3, o7, [-1, -1], s5), v(n3, o7, [1, 1], s5), v(n3, o7, [-1, 1], s5);
    }, g3 = this._parameters.placement;
    "begin" !== g3 && "begin-end" !== g3 || S3(0, O3.ASCENDING), "end" !== g3 && "begin-end" !== g3 || S3(c3 - 1, O3.DESCENDING);
  }
};
var P2 = n();
var I2 = n();

export {
  O2 as O
};
//# sourceMappingURL=chunk-3CXCTPDQ.js.map
