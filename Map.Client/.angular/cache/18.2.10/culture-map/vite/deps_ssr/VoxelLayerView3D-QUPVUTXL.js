import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i as i2,
  l as l2,
  o as o2
} from "./chunk-HZA5JXRZ.js";
import {
  i
} from "./chunk-6JE54UIZ.js";
import {
  t
} from "./chunk-R7WTJU3N.js";
import {
  l
} from "./chunk-ECUSUVZM.js";
import "./chunk-CQIKG7VH.js";
import {
  y as y2
} from "./chunk-CXYUBZAK.js";
import {
  c
} from "./chunk-LUORW76W.js";
import "./chunk-HFXXFWYN.js";
import "./chunk-VENH3UKS.js";
import "./chunk-VFYCIIDC.js";
import {
  n as n3
} from "./chunk-ZFES27RA.js";
import "./chunk-XP2AJZUL.js";
import "./chunk-GK5M6FUR.js";
import {
  P as P2,
  h
} from "./chunk-VOOO6FU5.js";
import "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-CXNERL22.js";
import "./chunk-ASCK5HJ5.js";
import "./chunk-I2TVVMQ6.js";
import "./chunk-5EGQYY2H.js";
import "./chunk-JKPUNUQA.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
import "./chunk-QGBMZIP4.js";
import "./chunk-AOEBZVTA.js";
import "./chunk-2OZSYJDX.js";
import {
  _,
  o,
  z
} from "./chunk-MZM4INJV.js";
import {
  n as n2
} from "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import {
  G
} from "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import {
  P,
  d
} from "./chunk-LZSLQ24Q.js";
import "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/VoxelLayerView3D.js
var W;
!function(e2) {
  e2[e2.API = 1] = "API", e2[e2.VerboseAPI = 2] = "VerboseAPI", e2[e2.Error = 3] = "Error";
}(W || (W = {}));
var T = n2();
var L = n2();
var A = class extends i(l(y2)) {
  constructor() {
    super(...arguments), this._suspendedHandle = null, this._usedMemory = 0, this._futureMemory = 0, this.type = "voxel-3d", this.slicePlaneEnabled = false, this._wasmLayerId = -1, this.ignoresMemoryFactor = true, this._dbgFlags = /* @__PURE__ */ new Set();
  }
  get baseUrl() {
    return this.layer.parsedUrl?.path ?? "";
  }
  get wasmLayerId() {
    return this._wasmLayerId;
  }
  initialize() {
    if (this._dbgFlags.add(W.Error), "local" !== this.view.viewingMode) throw new s("voxel:unsupported-viewingMode", "Voxel layers support local viewingMode only.", {});
    if (!!!this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat?.textureFloat) throw new s("voxel:missing-color-buffer-float", "Voxel layers require the WebGL2 extension EXT_color_buffer_float", {});
    const e2 = this.layer.spatialReference;
    if (!G(e2, this.view.spatialReference)) throw new s("layerview:spatial-reference-incompatible", "The spatial reference of this scene layer is incompatible with the spatial reference of the view", {});
    const t2 = this.layer.currentVariableId, a2 = this.layer.getVolume(t2), o3 = this.layer.getVariable(t2);
    if (null != a2 && null != o3) {
      const e3 = a2.dimensions[0], s2 = a2.dimensions[1], t3 = a2.zDimension;
      if (t3 > 1) {
        const i3 = a2.dimensions[t3], r = e3.size * s2.size * i3.size;
        let l4 = 1;
        switch (o3.renderingFormat.type) {
          case "Int16":
          case "UInt16":
            l4 = 2;
            break;
          case "Int32":
          case "UInt32":
          case "Float32":
            l4 = 4;
        }
        this._futureMemory = l4 * r;
      }
    }
    const l3 = l2(this).then((e3) => {
      this._wasmLayerId = e3, this._suspendedHandle = d(() => this.suspended, (e4) => {
        const s2 = o2(this.view);
        s2 && s2.setEnabled(this, !e4);
      }, P), this.addHandles([d(() => this.layer.renderMode, (e4) => this._pushRenderModeToWasm(e4)), d(() => this.layer.currentVariableId, (e4) => this._pushCurrentVariableIdToWasm(e4)), d(() => this.layer.getSections(), (e4) => this._pushSectionsToWasm(e4)), d(() => this.layer.getVariableStyles(), (e4) => this._pushVariableStylesToWasm(e4)), d(() => this.layer.getVolumeStyles(), (e4) => this._pushVolumeStylesToWasm(e4)), d(() => this.layer.enableDynamicSections, (e4) => this._pushEnableDynamicSectionsToWasm(e4)), d(() => this.layer.enableIsosurfaces, (e4) => this._pushEnableIsosurfacesToWasm(e4)), d(() => this.layer.enableSections, (e4) => this._pushEnableSectionsToWasm(e4)), d(() => this.layer.enableSlices, (e4) => this._pushEnableSlicesToWasm(e4)), d(() => [this.layer.timeOffset, this.layer.timeExtent, this.layer.useViewTime], () => this._updateLayerTimeProperties()), d(() => this.slicePlaneEnabled, (e4) => this._pushAnalysisSliceToWasm(e4, this.view.slicePlane)), d(() => this.view.slicePlane, (e4) => this._pushAnalysisSliceToWasm(this.slicePlaneEnabled, e4))]);
    }).catch((e3) => {
      if (i2(this), this._wasmLayerId = -1, -1 === e3) throw new s("voxel:addLayer-failure", "The voxel layer description was invalid.", {});
      if (-2 === e3) throw new s("voxel:addLayer-failure", "The voxel layer web assembly module failed to download.", {});
    });
    this.addResolvingPromise(l3);
  }
  destroy() {
    i2(this), this._suspendedHandle && (this._suspendedHandle.remove(), this._suspendedHandle = null);
  }
  isUpdating() {
    const e2 = o2(this.view);
    return !(this._wasmLayerId < 0 || null == e2) && e2.isUpdating(this._wasmLayerId);
  }
  updatingFlagChanged() {
    this.notifyChange("updating");
  }
  get usedMemory() {
    return this._usedMemory;
  }
  get unloadedMemory() {
    return this._futureMemory;
  }
  get performanceInfo() {
    return new t(this.usedMemory);
  }
  get visibleAtCurrentScale() {
    return c(this.layer.effectiveScaleRange, this.view.terrainScale);
  }
  whenGraphicBounds(e2, s2) {
    const t2 = e2.attributes["Voxel.WorldPosition"];
    if (t2) {
      const e3 = P2(), s3 = JSON.parse(t2);
      if (n3(s3, this.view.renderSpatialReference, L, this.view.spatialReference || f.WGS84)) return h(e3, L), Promise.resolve({
        boundingBox: e3,
        screenSpaceObjects: []
      });
    }
    return Promise.reject();
  }
  setUsedMemory(e2) {
    this._usedMemory = e2, this._futureMemory = 0;
  }
  captureFrustum() {
    const e2 = o2(this.view);
    e2?.captureFrustum();
  }
  toggleFullVolumeExtentDraw() {
    const e2 = o2(this.view);
    e2?.toggleFullVolumeExtentDraw(this);
  }
  getLayerTimes() {
    const e2 = o2(this.view);
    return e2?.getLayerTimes(this) ?? [];
  }
  getCurrentLayerTimeIndex() {
    const e2 = o2(this.view);
    return e2?.getCurrentLayerTimeIndex(this) ?? 0;
  }
  _pushRenderModeToWasm(e2) {
    const s2 = o2(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushRenderModeToWasm() called, " + (s2 ? "have WASM" : "don't have WASM!!!")), s2?.setRenderMode(this, e2) || this._dbg(W.Error, "VoxelLayerView3D._pushRenderModeToWasm() failed!");
  }
  _pushSectionsToWasm(e2) {
    const s2 = o2(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushSectionsToWasm() called, " + (s2 ? "have WASM" : "don't have WASM!!!")), s2?.setStaticSections(this, e2) || this._dbg(W.Error, "VoxelLayerView3D._pushSectionsToWasm() failed!");
  }
  _pushCurrentVariableIdToWasm(e2) {
    const s2 = o2(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, " + (s2 ? "have WASM" : "don't have WASM!!!")), s2?.setCurrentVariable(this, e2) || this._dbg(W.Error, "VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!");
  }
  _pushVariableStylesToWasm(e2) {
    const s2 = o2(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushVariableStylesToWasm() called, " + (s2 ? "have WASM" : "don't have WASM!!!")), s2?.setVariableStyles(this, e2) || this._dbg(W.Error, "VoxelLayerView3D._pushVariableStylesToWasm() failed!");
  }
  _accountForEnableSlices(e2, s2) {
    const t2 = null != s2 ? s2 : this.layer.enableSlices;
    for (let i3 = 0; i3 < e2.length; ++i3) {
      const s3 = e2[i3];
      for (const e3 of s3.slices) e3.enabled = e3.enabled && t2;
    }
  }
  _pushVolumeStylesToWasm(e2) {
    const s2 = o2(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushVolumeStylesToWasm() called, " + (s2 ? "have WASM" : "don't have WASM!!!")), s2 && (this._accountForEnableSlices(e2, null), s2.setVolumeStyles(this, e2) || this._dbg(W.Error, "VoxelLayerView3D._pushVolumeStylesToWasm() failed!"));
  }
  _pushAnalysisSliceToWasm(e2, s2) {
    const t2 = o2(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushAnalysisSliceToWasm() called, " + (t2 ? "have WASM" : "don't have WASM!!!"));
    let i3 = false;
    if (t2) {
      if (s2) {
        const r = s2.origin;
        _(T, s2.basis1, s2.basis2), z(T, T), i3 = t2.setAnalysisSlice(this, e2, r, T);
      } else o(T, 0, 0, 1), i3 = t2.setAnalysisSlice(this, false, T, T);
      i3 || this._dbg(W.Error, "VoxelLayerView3D._pushAnalysisSliceToWasm() failed!");
    }
  }
  _updateLayerTimeProperties() {
    const e2 = o2(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._updateLayerTimeProperties() called, " + (e2 ? "have WASM" : "don't have WASM!!!")), e2 && e2.updateLayerTimeProperties(this);
  }
  _pushEnableDynamicSectionsToWasm(e2) {
    const s2 = o2(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, " + (s2 ? "have WASM" : "don't have WASM!!!")), s2?.setEnableDynamicSections(this, e2) || this._dbg(W.Error, "VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!");
  }
  _pushEnableSlicesToWasm(e2) {
    const s2 = o2(this.view);
    if (this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushEnableSlicesToWasm() called, " + (s2 ? "have WASM" : "don't have WASM!!!")), s2) {
      const t2 = this.layer.getVolumeStyles();
      this._accountForEnableSlices(t2, e2), s2.setVolumeStyles(this, t2) || this._dbg(W.Error, "VoxelLayerView3D._pushEnableSlicesToWasm() failed!");
    }
  }
  _pushEnableIsosurfacesToWasm(e2) {
    const s2 = o2(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, " + (s2 ? "have WASM" : "don't have WASM!!!")), s2?.setEnableIsosurfaces(this, e2) || this._dbg(W.Error, "VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!");
  }
  _pushEnableSectionsToWasm(e2) {
    const s2 = o2(this.view);
    this._dbg(W.VerboseAPI, "VoxelLayerView3D._pushEnableSectionsToWasm() called, " + (s2 ? "have WASM" : "don't have WASM!!!")), s2?.setEnableSections(this, e2) || this._dbg(W.Error, "VoxelLayerView3D._pushEnableSectionsToWasm() failed!");
  }
  whenGraphicAttributes(e2, s2) {
    return __async(this, null, function* () {
      return e2;
    });
  }
  _dbg(e2, s2) {
    this._dbgFlags.has(e2) && (e2 === W.Error ? n.getLogger(this).error(s2) : n.getLogger(this).warn(s2));
  }
};
e([y()], A.prototype, "layer", void 0), e([y()], A.prototype, "baseUrl", null), e([y({
  type: Boolean
})], A.prototype, "slicePlaneEnabled", void 0), e([y({
  readOnly: true
})], A.prototype, "visibleAtCurrentScale", null), A = e([a("esri.views.3d.layers.VoxelLayerView3D")], A);
var x = A;
export {
  x as default
};
//# sourceMappingURL=VoxelLayerView3D-QUPVUTXL.js.map
