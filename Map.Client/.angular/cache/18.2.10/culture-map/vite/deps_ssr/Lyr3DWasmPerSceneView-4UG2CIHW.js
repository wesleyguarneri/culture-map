import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e2
} from "./chunk-4W3KYTNN.js";
import {
  h
} from "./chunk-C7GHK6X7.js";
import {
  n as n2
} from "./chunk-TTFKGMDU.js";
import {
  d as d2,
  m,
  u
} from "./chunk-XJFLCQGY.js";
import {
  R
} from "./chunk-ZSJNH2BT.js";
import "./chunk-OOK3QTWF.js";
import "./chunk-7QOUHKW5.js";
import "./chunk-NHYYZMJR.js";
import "./chunk-2EJFYNM7.js";
import "./chunk-5X5U7R6O.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import {
  U
} from "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import {
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
import {
  A,
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import {
  b
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/Lyr3DWorkerHandle.js
var s = class extends h {
  constructor(r) {
    super("Lyr3DWorker", "process", {
      process: (r2) => r2.inputs
    }, r, {
      hasInitialize: true
    });
  }
  destroyWasm() {
    return this.broadcast({}, "destroyWasm");
  }
};

// ../../../node_modules/@arcgis/core/layers/Lyr3DWasmPerSceneView.js
var c;
var b2;
!function(e3) {
  e3[e3.Lifetime = 0] = "Lifetime", e3[e3.Jobs = 1] = "Jobs", e3[e3.Renderables = 2] = "Renderables";
}(c || (c = {})), function(e3) {
  e3[e3.Critical = 0] = "Critical", e3[e3.Error = 1] = "Error", e3[e3.Warning = 2] = "Warning", e3[e3.Info = 3] = "Info";
}(b2 || (b2 = {}));
var f = class extends S {
  constructor(e3) {
    super(e3), this._lyr3DMainPromise = null, this._lyr3DMain = null, this._layers = /* @__PURE__ */ new Map(), this._debugFlags = /* @__PURE__ */ new Set(), this._debugLevel = b2.Critical, this._wasmNotLoaded = "method requiring WASM was called when WASM isn't loaded", this._pulseTaskHandle = null, this._session = null, this._debugFlags.add(c.Lifetime), this._debugFlags.add(c.Jobs), this._debugFlags.add(c.Renderables);
  }
  _debugLog(e3, t, i, s2 = true) {
    if (this._debugFlags.has(e3) && this._debugLevel >= t) {
      const e4 = s2 ? `[js] ${i}` : `${i}`;
      t === b2.Critical || t === b2.Error ? n.getLogger(this).error(e4) : t === b2.Warning && n.getLogger(this).warn(e4), n.getLogger(this).info(e4);
    }
  }
  initialize() {
    this._debugLevel > b2.Warning && (n.getLogger(this).level = "info"), this._debugLog(c.Lifetime, b2.Info, "Lyr3DWasmPerSceneView.initialize()"), this.addHandles([d(() => this.view.state?.contentCamera, () => this._updateWasmCamera())]), this._pulseTaskHandle = A({
      preRender: () => this._pulseTask()
    });
  }
  destroy() {
    this._debugLog(c.Lifetime, b2.Info, "Lyr3DWasmPerSceneView.destroy()"), this._lyr3DMain && (this._layers.forEach((e4) => {
      e4.abortController.abort();
    }), this._lyr3DMain.uninitialize_lyr3d_wasm(), this._lyr3DMain = null);
    const e3 = this._worker;
    e3 && e3.destroyWasm().then(() => {
      this._worker?.destroy(), this._worker = null;
    }), this._pulseTaskHandle?.remove(), this._pulseTaskHandle = null;
  }
  add3DTilesLayerView(e3) {
    return this._lyr3DMain ? this._add3DTilesLayerView(e3) : (this._debugLog(c.Lifetime, b2.Error, "Lyr3DWasmPerSceneView.add3DTilesLayerView() called when WASM wasn't initialized"), d2);
  }
  remove3DTilesLayerView(e3) {
    if (!this._lyr3DMain) return this._debugLog(c.Lifetime, b2.Error, this._wasmNotLoaded), 0;
    this._doRemoveLayerView(e3);
    const t = this._layers.size;
    return 0 === t && (this._debugLog(c.Lifetime, b2.Info, "Lyr3DWasmPerSceneView.remove3DTilesLayerView() no Lyr3D layers left after removing a layer, destroying"), this.destroy()), t;
  }
  setEnabled(e3, t) {
    if (!this._lyr3DMain) return void this._debugLog(c.Lifetime, b2.Error, this._wasmNotLoaded);
    const i = this._layers.get(e3.wasmLayerId);
    i && (this._lyr3DMain.set_enabled(e3.wasmLayerId, t), i.needMemoryUsageUpdate = true, i.needFrame = true, i.layerView.updatingFlagChanged());
  }
  setLayerOffset(e3, t) {
    if (!this._lyr3DMain) return void this._debugLog(c.Lifetime, b2.Error, this._wasmNotLoaded);
    this._layers.get(e3.wasmLayerId) && this._lyr3DMain.set_carto_offset_z(e3.wasmLayerId, t);
  }
  getAttributionText() {
    if (!this._lyr3DMain) return this._debugLog(c.Lifetime, b2.Error, this._wasmNotLoaded), [];
    return this._lyr3DMain.get_current_attribution_text().split("|");
  }
  onRenderableEvicted(e3, t, i) {
    if (!this._lyr3DMain) return void this._debugLog(c.Lifetime, b2.Error, this._wasmNotLoaded);
    this._layers.get(e3.wasmLayerId) && this._lyr3DMain.on_renderable_evicted(e3.wasmLayerId, t, i);
  }
  isUpdating(e3) {
    if (!this._lyr3DMain && this._lyr3DMainPromise) return true;
    const t = this._layers.get(e3);
    return !!t && (t.outstandingJobCount > 0 || t.outstandingRenderableCount > 0 || t.needFrame);
  }
  initializeWasm() {
    return this._lyr3DMain ? Promise.resolve() : (this._debugLog(c.Lifetime, b2.Info, "Lyr3DWasmPerSceneView.initializeWasm()"), this._lyr3DMainPromise || (this._lyr3DMainPromise = n2().then((e3) => {
      this._lyr3DMain = e3, this._lyr3DMainPromise = null;
      const t = this._lyr3DMain.addFunction(this._onNewJob.bind(this), "v"), i = this._lyr3DMain.addFunction(this._onNewRenderable.bind(this), "v"), r = this._lyr3DMain.addFunction(this._freeRenderables.bind(this), "viii"), s2 = this._lyr3DMain.addFunction(this._setRenderableVisibility.bind(this), "viiii"), n3 = this._lyr3DMain.addFunction(this._onWasmError.bind(this), "viiii"), a2 = "global" === this.view.viewingMode, o = this.view.renderSpatialReference?.isWebMercator ? 3857 : this.view.renderSpatialReference?.wkid ?? -1, l = this.view.heightModelInfo?.heightModel, d3 = !l || "gravity-related-height" === l;
      return this._lyr3DMain.initialize_lyr3d_wasm(n3, t, i, r, s2, a2, d3, o, this._debugLevel) ? (this._worker = new s(e2(this.view.resourceController)), this._worker.promise ? this._worker.promise : void 0) : (this._lyr3DMain = null, void this._debugLog(c.Lifetime, b2.Critical, "Lyr3d Main WASM failed to initialize", false));
    }).catch((e3) => {
      this._debugLog(c.Lifetime, b2.Critical, `Lyr3d WASM failed to download error = ${e3}`, false);
    })), this._lyr3DMainPromise);
  }
  _pulseTask() {
    if (this._lyr3DMain) {
      let e3 = 0, t = 0;
      this._layers.forEach((i2) => {
        e3 += i2.layerView.usedMemory, t += i2.layerView.unloadedMemory;
      }), e3 /= 1048576, t /= 1048576;
      const i = this.view.resourceController.memoryController, r = i.usedMemory * i.maxMemory - e3;
      this._lyr3DMain.frame_pulse(i.memoryFactor, e3, t, r, i.maxMemory), this._layers.forEach((e4) => {
        true === e4.needFrame && (e4.needFrame = false, e4.layerView.updatingFlagChanged());
      });
    }
  }
  _incrementJobCount(e3) {
    e3.outstandingJobCount += 1, 1 === e3.outstandingJobCount && e3.outstandingRenderableCount < 1 && e3.layerView.updatingFlagChanged();
  }
  _decrementJobCount(e3) {
    e3.outstandingJobCount -= 1, 0 === e3.outstandingJobCount && e3.outstandingRenderableCount < 1 && e3.layerView.updatingFlagChanged();
  }
  _incrementRenderableCount(e3) {
    e3.outstandingRenderableCount += 1, e3.outstandingJobCount < 1 && 1 === e3.outstandingRenderableCount && e3.layerView.updatingFlagChanged();
  }
  _decrementRenderableCount(e3) {
    e3.outstandingRenderableCount -= 1, e3.outstandingJobCount < 1 && 0 === e3.outstandingRenderableCount && e3.layerView.updatingFlagChanged();
  }
  _onJobFailed(e3, t, i) {
    t.error.length && this._debugLog(c.Jobs, b2.Error, t.error, false), this._lyr3DMain && this._lyr3DMain.on_job_failed(i.jobId, i.desc), this._decrementJobCount(e3);
  }
  _onJobSucceeded(e3, t, i) {
    if (this._lyr3DMain) {
      const e4 = t.data.byteLength, r = this._lyr3DMain._malloc(e4);
      new Uint8Array(this._lyr3DMain.HEAPU8.buffer, r, e4).set(t.data), this._lyr3DMain.on_job_completed(i.jobId, t.jobDescJson, r, e4), this._lyr3DMain._free(r);
    }
    this._decrementJobCount(e3);
  }
  _getRequestPromises(e3, i, r) {
    const s2 = [];
    for (const n3 of e3) {
      const e4 = new URL(n3), a2 = e4.searchParams.get("session");
      a2 ? this._session = a2 : !this._session || e4.origin === r.origin && e4.pathname === r.pathname || e4.searchParams.append("session", this._session), s2.push(U(e4.toString(), i).then((e5) => e5.data));
    }
    return s2;
  }
  _onNewJob() {
    const e3 = this._lyr3DMain.get_next_job(), t = this._layers.get(e3.layerId);
    if (!t) return;
    this._incrementJobCount(t);
    const i = t.abortController.signal, r = {
      responseType: "array-buffer",
      signal: i,
      query: __spreadProps(__spreadValues({}, t.customParameters), {
        token: t.apiKey
      })
    }, n3 = {
      inputs: [],
      jobDescJson: e3.desc,
      isMissingResourceCase: false
    }, a2 = new URL(t.layerView.layer.url), o = this._getRequestPromises(e3.urls, r, a2);
    Promise.all(o).then((e4) => (n3.inputs = e4, this._worker.invoke(n3, i))).then((e4) => e4).catch((t2) => (b(t2) ? this._debugLog(c.Jobs, b2.Warning, `job ${e3.jobId} was cancelled.`) : this._debugLog(c.Jobs, b2.Error, `job ${e3.jobId} failed with error ${t2}.`), {
      status: u.Failed,
      error: "",
      jobDescJson: "",
      data: new Uint8Array(0),
      missingInputUrls: [],
      inputs: []
    })).then((o2) => {
      if (o2.status === u.Failed) this._onJobFailed(t, o2, e3);
      else if (o2.status === u.Succeeded) this._onJobSucceeded(t, o2, e3);
      else if (o2.status === u.MissingInputs) {
        const l = this._getRequestPromises(o2.missingInputUrls, r, a2);
        Promise.all(l).then((e4) => {
          n3.jobDescJson = o2.jobDescJson, o2.originalInputs ? n3.inputs = o2.originalInputs : n3.inputs = [], n3.isMissingResourceCase = true;
          for (const t2 of e4) n3.inputs.push(t2);
          return this._worker.invoke(n3, i);
        }).then((i2) => {
          i2.status === u.Failed ? this._onJobFailed(t, i2, e3) : i2.status === u.Succeeded && this._onJobSucceeded(t, i2, e3);
        }).catch((i2) => {
          this._decrementJobCount(t), b(i2) ? this._debugLog(c.Jobs, b2.Warning, `job ${e3.jobId} was cancelled.`) : this._debugLog(c.Jobs, b2.Error, `job ${e3.jobId} failed with error2 ${i2}.`), this._lyr3DMain && this._lyr3DMain.on_job_failed(e3.jobId, e3.desc);
        });
      }
    });
  }
  _onNewRenderable() {
    const e3 = this._lyr3DMain.get_next_renderable(), t = e3.meshData;
    if (t.data && t.data.byteLength > 0) {
      const e4 = t.data.slice();
      t.data = e4;
    }
    const i = this._layers.get(e3.layerId);
    i && (this._incrementRenderableCount(i), i.layerView.createRenderable(e3).then((t2) => {
      this._lyr3DMain && this._lyr3DMain.on_renderable_created(true, e3.layerId, e3.handle, t2.memUsageBytes), this._decrementRenderableCount(i);
    }).catch((t2) => {
      b(t2) || this._debugLog(c.Renderables, b2.Error, `createRenderable failed with error ${t2}.`), this._lyr3DMain && this._lyr3DMain.on_renderable_created(false, e3.layerId, e3.handle, 0), this._decrementRenderableCount(i);
    }));
  }
  _freeRenderables(e3, t, i) {
    if (i < 1) return;
    const r = this._layers.get(e3);
    if (!r) return;
    const s2 = r.layerView, n3 = [], a2 = new Uint32Array(this._lyr3DMain.HEAPU32.buffer, t, i);
    for (let o = 0; o < i; ++o) n3.push(a2[o]);
    for (let o = 0; o < i; ++o) s2.freeRenderable(n3[o]);
  }
  _setRenderableVisibility(e3, t, i, r) {
    if (r < 1) return;
    const s2 = this._layers.get(e3);
    if (!s2) return;
    const n3 = s2.layerView, a2 = [], o = [], l = new Uint32Array(this._lyr3DMain.HEAPU32.buffer, t, r), d3 = new Uint8Array(this._lyr3DMain.HEAPU8.buffer, i, r);
    for (let h2 = 0; h2 < r; ++h2) a2.push(l[h2]), o.push(1 === d3[h2]);
    n3.setRenderableVisibility(a2, o, r);
  }
  _onWasmError(e3, t, i, r) {
    this._lyr3DMain && this._debugLog(i, r, this._lyr3DMain.UTF8ToString(e3, t), false);
  }
  _doRemoveLayerView(e3) {
    const t = this._layers.get(e3.wasmLayerId);
    return !!t && (t.abortController.abort(), this._lyr3DMain.remove_layer(e3.wasmLayerId), this._layers.delete(e3.wasmLayerId), true);
  }
  _add3DTilesLayerView(e3) {
    const t = e3.layer;
    if (!t.url) return m;
    const i = this._lyr3DMain.get_next_layer_id(), r = new AbortController();
    this._layers.set(i, {
      layerView: e3,
      abortController: r,
      needMemoryUsageUpdate: false,
      outstandingJobCount: 0,
      outstandingRenderableCount: 0,
      customParameters: t.customParameters,
      apiKey: t.apiKey,
      needFrame: false
    });
    const s2 = R(t.elevationInfo);
    return this._lyr3DMain.add_layer(t.url, i, s2) ? (this._updateWasmCamera(), i) : (this._layers.delete(i), m);
  }
  _updateWasmCamera() {
    const e3 = this.view.state?.contentCamera;
    if (!e3 || !this._lyr3DMain) return;
    const {
      eye: t,
      center: i,
      up: r,
      near: s2,
      far: n3,
      fovY: a2
    } = e3, o = [e3.viewport[2], e3.viewport[3]], l = e3.width / e3.height;
    this._lyr3DMain.set_camera_parameters({
      eye: t,
      center: i,
      up: r,
      near: s2,
      far: n3,
      fov: a2,
      aspectRatio: l,
      viewport: o
    });
  }
};
e([y({
  constructOnly: true
})], f.prototype, "view", void 0), f = e([a("esri.layers.Lyr3DWasmPerSceneView")], f);
var w = f;
export {
  w as default
};
//# sourceMappingURL=Lyr3DWasmPerSceneView-4UG2CIHW.js.map
