import {
  e as e6
} from "./chunk-ISTWMT33.js";
import {
  I,
  m,
  r as r7,
  v
} from "./chunk-ZERTHD35.js";
import {
  t as t3
} from "./chunk-M66N34RL.js";
import {
  o as o5,
  o2 as o6
} from "./chunk-DDIAZD6H.js";
import {
  r as r6
} from "./chunk-74INNEIP.js";
import {
  A,
  O,
  c as c2,
  f as f2,
  s as s4
} from "./chunk-IFUKJDOU.js";
import {
  e as e5,
  f as f3,
  u as u2
} from "./chunk-LD5YIQXD.js";
import {
  i
} from "./chunk-PO7V7AQE.js";
import {
  c
} from "./chunk-GTZOXRB5.js";
import {
  r as r4,
  r2 as r5,
  t as t2
} from "./chunk-XGDLE7WK.js";
import {
  o as o2
} from "./chunk-VIIVMRRO.js";
import {
  o as o4
} from "./chunk-TGHJVD7I.js";
import {
  S,
  _,
  h,
  o as o3
} from "./chunk-LKHUGH5W.js";
import {
  N,
  e as e4,
  s as s3
} from "./chunk-ZVFENZUF.js";
import {
  f
} from "./chunk-YLE5AYZV.js";
import {
  s
} from "./chunk-URWREU3E.js";
import {
  n
} from "./chunk-WDDCGJTI.js";
import {
  a
} from "./chunk-PA7WZX2U.js";
import {
  o
} from "./chunk-WJKYGQOY.js";
import {
  n as n2
} from "./chunk-SZWWBMQN.js";
import {
  l
} from "./chunk-KKD7A2GN.js";
import {
  e as e3
} from "./chunk-4MMTPKY4.js";
import {
  s as s2,
  u
} from "./chunk-JYODC3YQ.js";
import {
  r as r3
} from "./chunk-TYQXPPSP.js";
import {
  r as r2
} from "./chunk-IMVP5ADD.js";
import {
  H
} from "./chunk-H7WPOTQH.js";
import {
  V
} from "./chunk-AXVPJBVW.js";
import {
  e as e2,
  r
} from "./chunk-OXEPWRM7.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  t
} from "./chunk-2MMLMOWS.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/ComponentTechnique.js
var N2 = class _N extends r4 {
  initializeConfiguration(r9, i3) {
    i3.spherical = r9.viewingMode === l.Global, i3.doublePrecisionRequiresObfuscation = r9.rctx.driverTest.doublePrecisionRequiresObfuscation.result;
  }
  initializeProgram(e8) {
    return new r5(e8.rctx, _N.shader.get().build(this.configuration), S2);
  }
  _setPipelineState(e8) {
    const i3 = this.configuration, o7 = i3.integratedMeshMode !== v.None, n3 = e8 === o2.NONE, p = e8 === o2.FrontFace;
    return S({
      blending: i3.output === o.Color && i3.blendingEnabled ? n3 ? A : c2(e8) : null,
      culling: h(i3.cullFace),
      depthTest: {
        func: f2(e8)
      },
      depthWrite: n3 || p ? o3 : null,
      drawBuffers: i3.output === o.Depth ? {
        buffers: [f.NONE]
      } : s4(e8),
      colorWrite: _,
      stencilWrite: o7 || i3.hasOccludees ? e5 : null,
      stencilTest: o7 ? u2(N.IntegratedMeshMaskExcluded) : i3.hasOccludees ? f3 : null,
      polygonOffset: n3 || p ? i3.hasPolygonOffset ? {
        factor: 2,
        units: 2
      } : null : O
    });
  }
  initializePipeline() {
    return this._setPipelineState(this.configuration.transparencyPassType);
  }
};
N2.shader = new t2(I, () => import("./ComponentShader.glsl-ZQXVAIOH.js"));
var S2 = /* @__PURE__ */ new Map([[e3.POSITION, 0], [e3.NORMAL, 1], [e3.NORMALCOMPRESSED, 1], [e3.COLOR, 2], [e3.UV0, 3], [e3.UVREGION, 4], [e3.COMPONENTINDEX, 5]]);

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/material/MaterialBase.js
var e7 = class extends n2 {
  constructor() {
    super(...arguments), this._dirty = true;
  }
  _setDirty() {
    this._dirty = true;
  }
  _setClean() {
    if (this._dirty = false, null != this._parameterBlocks) for (const t4 of this._parameterBlocks) this[t4]._setClean();
  }
  get dirty() {
    return this._dirty || this._checkParameterBlocksDirty();
  }
  _checkParameterBlocksDirty() {
    if (null == this._parameterBlocks) return false;
    for (const t4 of this._parameterBlocks) if (this[t4].dirty) return true;
    return false;
  }
};
var r8 = class {
  constructor() {
    this._dirty = true;
  }
  _setDirty() {
    this._dirty = true;
  }
  _setClean() {
    this._dirty = false;
  }
  get dirty() {
    return this._dirty;
  }
};
function s5(t4 = {}) {
  return (e8, r9) => {
    const s6 = e8._parameterCount ?? 0;
    if (e8._parameterCount = s6 + 1, t4.vectorOps) {
      const i3 = t4.vectorOps;
      Object.defineProperty(e8, r9, {
        get() {
          return this[s6];
        },
        set(t5) {
          const e9 = this[s6];
          if (null == e9) this[s6] = t5;
          else {
            if (i3.equals(e9, t5)) return;
            i3.copy(e9, t5);
          }
          this._setDirty();
        }
      });
    } else Object.defineProperty(e8, r9, {
      get() {
        return this[s6];
      },
      set(e9) {
        this[s6] !== e9 && (t4.dispose && this[s6] && this[s6].dispose(), this[s6] = e9, this._setDirty());
      }
    });
  };
}
function i2() {
  return (t4, e8) => {
    const r9 = t4._parameterCount ?? 0;
    t4._parameterCount = r9 + 1, t4._parameterBlocks = t4._parameterBlocks || [], t4._parameterBlocks.push(r9), Object.defineProperty(t4, e8, {
      get() {
        return this[r9];
      },
      set(t5) {
        this[r9] !== t5 && (this[r9] = t5, this._setDirty());
      }
    });
  };
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/ComponentMaterial.js
var R = class extends e7 {
  constructor(e8, t4) {
    super(), this.toMapSpace = t4, this.baseColor = r2(1, 1, 1, 1), this.usePBR = false, this.hasParametersFromSource = false, this.mrrFactors = e2(r6), this.emissiveFactor = r(0, 0, 0), this.baseColorTexture = null, this.metallicRoughnessTexture = null, this.emissionTexture = null, this.occlusionTexture = null, this.normalTexture = null, this.objectOpacity = 1, this.commonMaterialParameters = new E(), this.componentParameters = new W(), this.textureAlphaCutoff = o4, this.alphaDiscardMode = s3.Opaque, this.isIntegratedMesh = false, this.polygonOffsetEnabled = false, this.ellipsoidMode = t3.Earth, this.hasOccludees = false, this._techniqueConfiguration = new m();
    const a2 = new e6(e8.position), n3 = r3(e8.rotationScale);
    s2(n3, n3), u(n3, n3), this.transformNormalGlobalFromModel = n3, this.transformWorldFromModelTL = a2.low, this.transformWorldFromModelTH = a2.high, this.transformWorldFromModelRS = e8.rotationScale;
  }
  dispose() {
    this._technique = t(this._technique), this.baseColorTexture = null, this.metallicRoughnessTexture = null, this.emissionTexture = null, this.occlusionTexture = null, this.normalTexture = null;
  }
  get texture() {
    return null != this.baseColorTexture ? this.baseColorTexture.glTexture : null;
  }
  get textureMetallicRoughness() {
    return null != this.metallicRoughnessTexture ? this.metallicRoughnessTexture.glTexture : null;
  }
  get textureEmissive() {
    return null != this.emissionTexture ? this.emissionTexture.glTexture : null;
  }
  get textureOcclusion() {
    return null != this.occlusionTexture ? this.occlusionTexture.glTexture : null;
  }
  get textureNormal() {
    return null != this.normalTexture ? this.normalTexture.glTexture : null;
  }
  prepareTechnique(e8, t4, r9, o7) {
    const s6 = this._techniqueConfiguration;
    s6.hasVertexColors = o7.colors, s6.hasNormals = o7.hasNormals, s6.textureCoordinateType = o7.textureCoordinates, s6.hasMetallicRoughnessTexture = null != this.metallicRoughnessTexture, s6.hasEmissionTexture = null != this.emissionTexture, s6.hasOcclusionTexture = null != this.occlusionTexture, s6.hasNormalTexture = null != this.normalTexture, s6.transparencyPassType = t4.identifier === o6.Material && null != r9.transparencyPassType ? r9.transparencyPassType : o2.NONE, s6.multipassEnabled = t4.identifier === o6.Material && r9.multipassEnabled, s6.cullAboveGround = t4.identifier === o6.Material && r9.multipassTerrain.cullAboveGround, s6.ellipsoidMode = this.ellipsoidMode, s6.componentData = this.componentParameters.type, s6.cullFace = this.commonMaterialParameters.cullFace, s6.doubleSidedMode = this.commonMaterialParameters.doubleSided ? i.View : i.None, s6.hasColorTexture = null != this.baseColorTexture;
    const a2 = this._computeWhichMaterialPass();
    if (s6.blendingEnabled = a2 === F.Transparent || a2 === F.OpaqueAndTransparent, s6.alphaDiscardMode = this.alphaDiscardMode, s6.integratedMeshMode = this.isIntegratedMesh ? L(r9) ? B(r9) ? v.ColorOverlayWithWater : v.ColorOverlay : v.NoOverlay : v.None, s6.hasPolygonOffset = this.polygonOffsetEnabled, s6.pbrMode = s6.integratedMeshMode === v.ColorOverlayWithWater ? c.WaterOnIntegratedMesh : this.usePBR ? this.hasParametersFromSource ? o7.needsNormals && this.isIntegratedMesh ? c.Disabled : c.Schematic : c.Normal : c.Disabled, s6.normalType = o7.needsNormals ? s6.hasNormals ? a.Compressed : a.ScreenDerivative : a.Ground, s6.hasSlicePlane = null != r9.slicePlane && this.commonMaterialParameters.hasSlicePlane, t4.identifier === o6.ShadowMap) s6.output = o.Shadow, s6.vertexDiscardMode = r7.None;
    else if (t4.identifier === o6.ViewshedShadowMap) s6.output = o.ViewshedShadow, s6.vertexDiscardMode = r7.None;
    else if (t4.identifier === o6.Highlight) s6.output = o.Highlight, s6.vertexDiscardMode = r7.None;
    else {
      switch (a2 === F.OpaqueAndTransparent ? s6.vertexDiscardMode = t4.transparent ? r7.Opaque : r7.Transparent : s6.vertexDiscardMode = r7.None, s6.output = t4.output, s6.receiveAmbientOcclusion = false, s6.receiveShadows = false, t4.output) {
        case o.Color:
          s6.receiveAmbientOcclusion = null != r9.ssao, s6.hasOccludees = r9.hasOccludees, s6.receiveShadows = r9.shadowMap.ready, s6.hasScreenSpaceReflections = null != r9.ssr.lastFrameColor, s6.hasCloudsReflections = null != r9.cloudsFade.data;
          break;
        case o.ObjectAndLayerIdColor:
          s6.objectAndLayerIdColor = true;
      }
      s6.snowCover = this.hasSnowCover(r9);
    }
    return this._technique = e8.releaseAndAcquire(N2, s6, this._technique), this._setClean(), this._technique;
  }
  hasSnowCover(e8) {
    return null != e8.weather && e8.weatherVisible && "snowy" === e8.weather.type && "enabled" === e8.weather.snowCover;
  }
  submit(e8, t4, r9) {
    if (0 === this.objectOpacity) return;
    const o7 = r9.renderable.geometry, s6 = r9.components, a2 = r9.renderable.meta.cameraDepthSquared, i3 = s6.geometryRanges, l2 = s6.highlightRanges, n3 = s6.defaultShadowMapRanges;
    switch (this._computeWhichMaterialPass()) {
      case F.Opaque:
        e8.materialOpaque.submitDraw(this, o7, i3, a2);
        break;
      case F.Transparent:
        e8.materialTransparent.submitDraw(this, o7, i3, a2);
        break;
      case F.OpaqueAndTransparent:
        e8.materialOpaque.submitDraw(this, o7, i3, a2), e8.materialTransparent.submitDraw(this, o7, i3, a2);
        break;
      case F.IntegratedMesh:
        e8.materialIntegratedMesh.submitDraw(this, o7, i3, a2), k(t4) && e8.highlightIntegratedMesh.submitDraw(this, o7, i3, a2);
    }
    const u3 = this.componentParameters.castShadows !== I2.None;
    u3 && e8.shadowMap.submitDraw(this, o7, i3, a2), null != l2 && (e8.highlight.submitDraw(this, o7, l2, a2), u3 && e8.highlightShadowMap.submitDraw(this, o7, l2, a2)), t4.viewshedEnabled && e8.viewshedShadowMap.submitDraw(this, o7, i3, a2), u3 && null != n3 && e8.defaultShadowMap.submitDraw(this, o7, n3, a2);
  }
  _computeWhichMaterialPass() {
    return this.isIntegratedMesh ? F.IntegratedMesh : this.objectOpacity < 1 ? F.Transparent : this.componentParameters.opaqueOverride === I2.All ? F.Opaque : this.baseColor[3] < 1 || this.alphaDiscardMode === s3.Blend || this.alphaDiscardMode === s3.MaskBlend ? F.Transparent : this.componentParameters.transparent === I2.None ? F.Opaque : this.componentParameters.transparent === I2.All ? F.Transparent : F.OpaqueAndTransparent;
  }
};
var F;
var I2;
e([s5({
  vectorOps: H
})], R.prototype, "baseColor", void 0), e([s5()], R.prototype, "usePBR", void 0), e([s5()], R.prototype, "hasParametersFromSource", void 0), e([s5({
  vectorOps: V
})], R.prototype, "mrrFactors", void 0), e([s5({
  vectorOps: V
})], R.prototype, "emissiveFactor", void 0), e([s5({
  dispose: true
})], R.prototype, "baseColorTexture", void 0), e([s5({
  dispose: true
})], R.prototype, "metallicRoughnessTexture", void 0), e([s5({
  dispose: true
})], R.prototype, "emissionTexture", void 0), e([s5({
  dispose: true
})], R.prototype, "occlusionTexture", void 0), e([s5({
  dispose: true
})], R.prototype, "normalTexture", void 0), e([s5()], R.prototype, "objectOpacity", void 0), e([i2()], R.prototype, "commonMaterialParameters", void 0), e([i2()], R.prototype, "componentParameters", void 0), e([s5()], R.prototype, "textureAlphaCutoff", void 0), e([s5()], R.prototype, "alphaDiscardMode", void 0), e([s5()], R.prototype, "isIntegratedMesh", void 0), e([s5()], R.prototype, "polygonOffsetEnabled", void 0), e([s5()], R.prototype, "ellipsoidMode", void 0), e([s5()], R.prototype, "hasOccludees", void 0), function(e8) {
  e8[e8.Opaque = 0] = "Opaque", e8[e8.Transparent = 1] = "Transparent", e8[e8.OpaqueAndTransparent = 2] = "OpaqueAndTransparent", e8[e8.IntegratedMesh = 3] = "IntegratedMesh";
}(F || (F = {}));
var E = class extends r8 {
  constructor() {
    super(...arguments), this.doubleSided = false, this.cullFace = e4.Back, this.hasSlicePlane = true;
  }
};
e([s5()], E.prototype, "doubleSided", void 0), e([s5()], E.prototype, "cullFace", void 0), e([s5()], E.prototype, "hasSlicePlane", void 0);
var W = class extends r8 {
  constructor() {
    super(...arguments), this.externalColor = r2(1, 1, 1, 1), this.externalColorMixMode = n.Multiply, this.castShadows = I2.All;
  }
  get transparent() {
    return this.externalColor[3] < 1 ? I2.All : I2.None;
  }
  get opaqueOverride() {
    return this.externalColorMixMode === n.Replace && 1 === this.externalColor[3] ? I2.All : I2.None;
  }
  get visible() {
    return this.externalColor[3] > 0 ? I2.All : I2.None;
  }
  get type() {
    return s.Uniform;
  }
};
e([s5({
  vectorOps: H
})], W.prototype, "externalColor", void 0), e([s5()], W.prototype, "externalColorMixMode", void 0), e([s5()], W.prototype, "castShadows", void 0), function(e8) {
  e8[e8.All = 0] = "All", e8[e8.Some = 1] = "Some", e8[e8.None = 2] = "None";
}(I2 || (I2 = {}));
var _2 = class extends r8 {
  constructor() {
    super(...arguments), this.texture = null, this.transparent = I2.None, this.opaqueOverride = I2.None, this.castShadows = I2.None;
  }
  get type() {
    return s.Varying;
  }
};
function k(e8) {
  return null != e8.overlay?.getTexture(o5.Highlight);
}
function B(e8) {
  return null != e8.overlay?.getTexture(o5.WaterNormal);
}
function L(e8) {
  return null != e8.overlay?.getTexture(o5.ColorNoRasterImage);
}
e([s5()], _2.prototype, "texture", void 0), e([s5()], _2.prototype, "transparent", void 0), e([s5()], _2.prototype, "opaqueOverride", void 0), e([s5()], _2.prototype, "castShadows", void 0);

export {
  S2 as S,
  R,
  I2 as I,
  W,
  _2 as _
};
//# sourceMappingURL=chunk-WLZIKLQT.js.map
