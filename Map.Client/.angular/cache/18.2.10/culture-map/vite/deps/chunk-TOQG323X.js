import {
  C as C2,
  P as P2,
  T,
  u as u4
} from "./chunk-K7KZCCPZ.js";
import {
  h as h2
} from "./chunk-2WSNLRTZ.js";
import {
  u as u3
} from "./chunk-TLAW3ACJ.js";
import {
  C
} from "./chunk-67LE7VNQ.js";
import {
  t as t2
} from "./chunk-MOCGEINB.js";
import {
  t
} from "./chunk-NSSWLGUQ.js";
import {
  l
} from "./chunk-CITBGG5A.js";
import {
  _
} from "./chunk-PFFFLPSP.js";
import {
  i as i2
} from "./chunk-UQMQLPLV.js";
import {
  y as y3
} from "./chunk-5JJ6GBOU.js";
import {
  h
} from "./chunk-Y37SHKPH.js";
import {
  M,
  b
} from "./chunk-Z6Z2SY6R.js";
import {
  E,
  c
} from "./chunk-ZQ57XGAE.js";
import {
  y as y2
} from "./chunk-PFMGJTQM.js";
import {
  d as d2
} from "./chunk-HD65DNIO.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import {
  A,
  P,
  d,
  p
} from "./chunk-6WHTZNUH.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S,
  i2 as i
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  s as s2,
  u as u2
} from "./chunk-HJY2YILU.js";
import {
  u
} from "./chunk-2MMLMOWS.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  U
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/FeatureLayerViewPerformanceInfo.js
var t3 = class extends t {
  constructor(e2, t4, s3, r, o, a3) {
    super(e2.usedMemory, e2.displayedFeatures, e2.totalFeatures, e2.maximumFeatures, e2.nodes, e2.core), this.storedFeatures = t4, this.totalVertices = s3, this.partial = r, this.mode = o, this.symbolComplexity = a3;
  }
};

// ../../../node_modules/@arcgis/core/views/3d/support/PBFDecoder.js
var n = class {
  constructor(e2) {
    this._controller = e2, this._handle = new c2((r) => e2.schedule(r));
  }
  destroy() {
    this._handle.destroy();
  }
  invoke(r, s3) {
    return r.buffer && 0 !== r.buffer.byteLength ? (r.options.sourceSpatialReference && r.options.sourceSpatialReference instanceof f && (r.options = __spreadProps(__spreadValues({}, r.options), {
      sourceSpatialReference: r.options.sourceSpatialReference.toJSON()
    })), this._handle.invoke(r, s3).then((r2) => {
      let s4 = 0, n2 = 0;
      const c3 = f.fromJSON(r2.spatialReference);
      r2.spatialReference = c3;
      const i4 = (t4) => __async(this, null, function* () {
        const l2 = r2.fields;
        if (l2) {
          for (; s4 < l2.length; ) if (l2[s4] = y2.fromJSON(l2[s4]), s4++, t4.madeProgress()) return this._controller.reschedule((e2) => i4(e2));
        }
        const p3 = r2.features;
        for (; n2 < p3.length; ) {
          const r3 = p3[n2];
          ++n2, r3.uid = d2.generateUID();
          const s5 = r3.geometry;
          if (null != s5 && (s5.spatialReference = c3, a2(s5), t4.madeProgress())) return this._controller.reschedule((e2) => i4(e2));
        }
        return r2;
      });
      return this._controller.schedule((e2) => i4(e2));
    })) : Promise.resolve(null);
  }
};
function a2(e2) {
  switch (e2.type) {
    case "polyline":
      e2.paths.reduce((e3, r) => e3 + r.length, 0) < U && (e2.paths = e2.hasZ || e2.hasM ? e2.paths.map((e3) => e3.map((e4) => [e4[0], e4[1], e4[2]])) : e2.paths.map((e3) => e3.map((e4) => [e4[0], e4[1]])));
      break;
    case "polygon":
      e2.rings.reduce((e3, r) => e3 + r.length, 0) < U && (e2.rings = e2.hasZ || e2.hasM ? e2.rings.map((e3) => e3.map((e4) => [e4[0], e4[1], e4[2]])) : e2.rings.map((e3) => e3.map((e4) => [e4[0], e4[1]])));
  }
}
var c2 = class extends h {
  constructor(e2) {
    super("PBFDecoderWorker", "_parseFeatureQuery", {
      _parseFeatureQuery: (e3) => [e3.buffer]
    }, e2);
  }
};

// ../../../node_modules/@arcgis/core/views/3d/layers/support/featureTileQuery3D.js
var p2 = class extends S {
  constructor(e2) {
    super(e2);
  }
  get implicitFields() {
    const e2 = this.layer.outFields?.includes("*");
    if (!e2) return /* @__PURE__ */ new Set();
    const r = new Set(this.layerView.requiredFields), t4 = new Set(this.layerView.availableFields);
    return i(t4, r);
  }
  get queryFeaturesDehydrated() {
    const {
      layer: e2
    } = this, r = e2.capabilities, t4 = r && r.query, u5 = t4 && t4.supportsFormatPBF, i4 = e2.parsedUrl;
    if (u5) {
      null == this._decoder && (this._decoder = new n(this.controller));
      const r2 = {
        sourceSpatialReference: e2.spatialReference?.toJSON() ?? null,
        applyTransform: true,
        maxStringAttributeFields: this.implicitFields,
        maxStringAttributeLength: f2
      };
      return (e3, t5) => E(i4, e3, "pbf", this._createRequestOptions(t5)).then((e4) => (s2(t5), null != this._decoder ? this._decoder.invoke({
        buffer: e4.data,
        options: r2
      }, t5.signal) : Promise.reject(u2())));
    }
    return (r2, t5) => c(i4, r2, e2.spatialReference, this._createRequestOptions(t5)).then((e3) => b(e3.data, {
      maxStringAttributeFields: this.implicitFields,
      maxStringAttributeLength: f2
    }));
  }
  queryFeatureCount(e2, r) {
    return this.layer.queryFeatureCount(e2, r);
  }
  destroy() {
    this._decoder = u(this._decoder);
  }
  _createRequestOptions(e2) {
    return __spreadProps(__spreadValues({}, e2), {
      query: __spreadValues(__spreadProps(__spreadValues({}, this.layer.customParameters), {
        token: this.layer.apiKey
      }), e2?.query)
    });
  }
};
e([y({
  constructOnly: true
})], p2.prototype, "layer", void 0), e([y({
  constructOnly: true
})], p2.prototype, "layerView", void 0), e([y({
  constructOnly: true
})], p2.prototype, "controller", void 0), e([y({
  readOnly: true
})], p2.prototype, "implicitFields", null), e([y({
  readOnly: true
})], p2.prototype, "queryFeaturesDehydrated", null), p2 = e([a("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")], p2);
var d3 = class extends S {
  constructor(e2) {
    super(e2);
  }
  queryFeaturesDehydrated(e2, r) {
    return this.layer.queryFeatures(e2, r);
  }
  queryFeatureCount(e2, r) {
    return this.layer.queryFeatureCount(e2, r);
  }
};
e([y({
  constructOnly: true
})], d3.prototype, "layer", void 0), e([y({
  readOnly: true
})], d3.prototype, "queryFeaturesDehydrated", null), d3 = e([a("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")], d3);
var m = class extends S {
  constructor(e2) {
    super(e2);
  }
  queryFeaturesDehydrated(e2, r) {
    return this.layer.queryFeatures(e2, r);
  }
};
e([y({
  constructOnly: true
})], m.prototype, "layer", void 0), m = e([a("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileOGCServiceQuery3D")], m);
var h3 = class extends S {
  constructor(e2) {
    super(e2);
  }
  queryFeaturesDehydrated(e2, r) {
    return this.source.queryFeaturesJSON(e2, r).then(b, (t4) => {
      if (t4 && "query-features-json:unsupported" === t4.name) return this.layer.queryFeatures(e2, r);
      throw t4;
    });
  }
  queryFeatureCount(e2, r) {
    return this.layer.queryFeatureCount(e2, r);
  }
};
function F(e2, r) {
  const {
    layer: t4
  } = e2;
  return "feature" === t4.type && "feature-layer" === t4.source.type || "catalog-footprint" === t4.type ? "infoFor3D" in t4 && null != t4.infoFor3D ? new d3({
    layer: t4
  }) : new p2({
    layer: t4,
    layerView: e2,
    controller: r
  }) : "feature" === t4.type && "memory" === t4.source.type || "csv" === t4.type || "geojson" === t4.type || "oriented-imagery" === t4.type || "wfs" === t4.type ? new h3({
    layer: t4,
    source: t4.source
  }) : "ogc-feature" === t4.type ? new m({
    layer: t4
  }) : null;
}
e([y({
  constructOnly: true
})], h3.prototype, "layer", void 0), e([y({
  constructOnly: true
})], h3.prototype, "source", void 0), h3 = e([a("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")], h3);
var f2 = 1024;

// ../../../node_modules/@arcgis/core/views/3d/layers/support/FeatureTileFetcher3DLayerViewContext.js
var i3 = class {
  constructor(e2) {
    this._memoryCache = null, this._capabilities = null;
    const r = e2.layerView.layer;
    this._layerView = e2.layerView, this.objectIdField = r.objectIdField, this.globalIdField = "globalIdField" in r ? r.globalIdField : null, this._returnZ = e2.returnZ, this._returnM = e2.returnM;
    const i4 = this._layerView.view.resourceController;
    this.query = F(this._layerView, i4.normal), i4 && this._memoryCacheEnabled && (this._memoryCache = i4.memoryController.newCache(`fl-${r.uid}`));
  }
  get _memoryCacheEnabled() {
    switch (this._layerView.layer.source.type) {
      case "feature-layer":
      case "ogc-feature":
      case "oriented-imagery":
        return true;
      case "csv":
      case "geojson":
      case "memory":
      case "wfs":
        return false;
    }
  }
  destroy() {
    this._memoryCache = u(this._memoryCache), this.query.destroy();
  }
  createQuery() {
    const e2 = this._layerView.layer.createQuery();
    return e2.outFields = this._layerView.availableFields, e2.returnZ = this._returnZ, e2.returnM = this._returnM, e2.outSpatialReference = this.tilingScheme.spatialReference, e2;
  }
  get memoryCache() {
    return this._memoryCache;
  }
  get viewingMode() {
    return this._layerView.view.state.viewingMode;
  }
  get tilingScheme() {
    return this._layerView.view.featureTiles.tilingScheme;
  }
  get scheduler() {
    const e2 = this._layerView.view.resourceController;
    return e2 ? e2.scheduler : null;
  }
  get geometryType() {
    return this._layerView.layer.geometryType;
  }
  get fullExtent() {
    return this._layerView.layer.fullExtent;
  }
  get tileMaxRecordCount() {
    return this._layerView.layer.capabilities.query.tileMaxRecordCount;
  }
  get maxRecordCount() {
    return this._layerView.layer.capabilities.query.maxRecordCount;
  }
  get capabilities() {
    return null != this._capabilities || (this._capabilities = P2(this._layerView.layer)), this._capabilities;
  }
  logFetchError(e2, r) {
    e2.error("#fetchTile()", this._layerView.layer, r?.message ?? r);
  }
};

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/FeatureGraphics3DGraphicsPipeline.js
var f3 = class extends C2 {
  constructor(e2) {
    super(e2), this._controllerTotal = 0, this._processorTotal = 0, this._needsRefresh = false, this.suspendResumeExtentMode = "data";
  }
  initialize() {
    this.addHandles(d(() => ({
      controller: this.controller,
      suspended: this.suspended
    }), ({
      controller: e2,
      suspended: r
    }) => {
      e2 && !r && this._needsRefresh && (e2.refetch(), this._needsRefresh = false);
    }));
  }
  destroy() {
    this._fetcherContext = u(this._fetcherContext);
  }
  get maximumNumberOfFeatures() {
    return this.controller?.maximumNumberOfFeatures ?? this._get("maximumNumberOfFeatures");
  }
  set maximumNumberOfFeatures(e2) {
    this._set("maximumNumberOfFeatures", e2), this.controller && (this.controller.maximumNumberOfFeatures = e2);
  }
  get maximumNumberOfFeaturesExceeded() {
    return !!this.controller && !(this.suspended || !this.controller.maximumNumberOfFeaturesExceeded);
  }
  get updatingProgressValue() {
    let e2 = 0;
    if (this.controller?.updating) {
      const r2 = this.controller.updatingRemaining, t4 = Math.max(this.controller.updatingTotal, this._controllerTotal);
      t4 > 0 && (e2 = (t4 - r2) / t4, this._controllerTotal = t4);
    }
    let r = 0;
    if (this.processor?.updating) {
      const e3 = this.processor.updatingRemaining, t4 = Math.max(e3, this._processorTotal);
      t4 > 0 && (r = (t4 - e3) / t4, this._processorTotal = t4);
    }
    return 0.5 * (e2 + r);
  }
  get updatePolicy() {
    if (!this.controller) return C.ASYNC;
    switch (this.controller.mode) {
      case "snapshot": {
        const e2 = y4.get(this.layer.geometryType);
        return null == e2 || this.controller.serviceDataCount > e2 ? C.ASYNC : C.SYNC;
      }
      case "tiles":
        return C.ASYNC;
    }
  }
  get usedMemory() {
    return (this.processor?.usedMemory ?? 0) + (this.controller?.memoryForUnusedFeatures ?? 0);
  }
  get unloadedMemory() {
    const e2 = this.processor?.unprocessedMemoryEstimate ?? 0, r = this.controller?.expectedFeatureDiff ?? 0, t4 = this.processor?.loadedFeatures ?? 0, s3 = t4 + r > 0 ? t4 / (t4 + r) : 1;
    return e2 + r * (this.processor?.usedMemoryPerFeature ?? 0) * s3;
  }
  get ignoresMemoryFactor() {
    return this.controller?.hasMaximumNumberOfFeaturesOverride;
  }
  get performanceInfo() {
    const e2 = this.controller?.displayFeatureLimit, r = null != e2 ? e2.averageSymbolComplexity : void 0, t4 = null != r ? `f:${r.verticesPerFeature},v:${r.verticesPerCoordinate}` : "n/a";
    return new t3(super.performanceInfo, this.controller?.performanceInfo?.storedFeatures ?? 0, this.controller?.performanceInfo?.totalVertices ?? 0, this.maximumNumberOfFeaturesExceeded, this.controller?.mode ?? "n/a", t4);
  }
  doRefresh(e2) {
    return __async(this, null, function* () {
      const {
        controller: r,
        processor: t4,
        suspended: s3
      } = this;
      e2 && r && (s3 ? this._needsRefresh = true : (r.refetch(), this._needsRefresh = false)), t4.refreshFilter();
    });
  }
  setVisibility(e2, r) {
    this.processor?.setObjectIdVisibility(e2, r);
  }
  getMissingAttributesForFeature(e2) {
    return this.controller.getMissingAttributesForFeature(e2);
  }
  getHydratedGeometry(e2) {
    const r = this.graphics3DProcessor;
    if (null == r) return null;
    const t4 = r.graphics3DGraphicsByObjectID;
    if (null == t4) return null;
    const s3 = t4.get(e2);
    return null == s3 ? null : u3(s3.graphic.geometry);
  }
  createController() {
    this._fetcherContext = new i3({
      layerView: this.layerView,
      returnZ: this.hasZ,
      returnM: this.hasM
    });
    const e2 = new T({
      layerView: this.layerView,
      context: this._fetcherContext,
      graphics: new h2(),
      extent: this.clippingExtent
    });
    return this.updatingHandles.add(() => e2.serviceDataExtent, (e3) => {
      this.processor && (this.processor.dataExtent = e3);
    }, P), this.addHandles(d(() => this.suspended && this.layerView.updateSuspended, (r) => {
      r ? e2.suspend() : e2.resume();
    }, A)), this.updatingHandles.add(() => this.processor?.displayFeatureLimit, (r) => e2.displayFeatureLimit = r, P), this.addHandles(p(() => !this.updating, () => {
      this._controllerTotal = 0, this._processorTotal = 0;
    })), e2;
  }
  beforeSetController(e2) {
    e2.maximumNumberOfFeatures = this.maximumNumberOfFeatures;
  }
  get test() {
    return {
      controller: this.controller,
      graphics3DProcessor: this.graphics3DProcessor,
      heatmapProcessor: this.heatmapProcessor,
      loadedGraphics: this.loadedGraphics
    };
  }
};
e([y()], f3.prototype, "layerView", void 0), e([y()], f3.prototype, "controller", void 0), e([y()], f3.prototype, "_controllerTotal", void 0), e([y()], f3.prototype, "_processorTotal", void 0), e([y()], f3.prototype, "_needsRefresh", void 0), e([y()], f3.prototype, "maximumNumberOfFeatures", null), e([y()], f3.prototype, "maximumNumberOfFeaturesExceeded", null), e([y()], f3.prototype, "updatingProgressValue", null), e([y()], f3.prototype, "updatePolicy", null), e([y()], f3.prototype, "suspendResumeExtentMode", void 0), f3 = e([a("esri.views.3d.layers.graphics.FeatureGraphics3DGraphicsPipeline")], f3);
var y4 = /* @__PURE__ */ new Map([["point", 5e3], ["polygon", 500], ["polyline", 1e3]]);

// ../../../node_modules/@arcgis/core/views/3d/layers/FeatureLayerViewBase3D.js
var f4 = class extends i2(u4(_(l(y3)))) {
  constructor(e2) {
    super(e2);
  }
  initialize() {
    this.addHandles(d(() => this._updatingRequiredFieldsPromise, (e2) => this._updatingHandles.addPromise(e2), A));
  }
  destroy() {
    this._updatingHandles.removeAll(), this._fetcherContext = u(this._fetcherContext);
  }
  get maximumNumberOfFeatures() {
    return this.graphicsPipeline.maximumNumberOfFeatures;
  }
  set maximumNumberOfFeatures(e2) {
    this.graphicsPipeline.maximumNumberOfFeatures = e2;
  }
  get maximumNumberOfFeaturesExceeded() {
    return null != this.graphicsPipeline && !this.suspended && this.graphicsPipeline.maximumNumberOfFeaturesExceeded;
  }
  get updatingProgressValue() {
    return this.graphicsPipeline?.updatingProgressValue ?? 0;
  }
  get updatePolicy() {
    return this.graphicsPipeline?.updatePolicy ?? C.ASYNC;
  }
  get hasZ() {
    const e2 = this.layer, r = e2.capabilities && e2.capabilities.data;
    return !(!r || !r.supportsZ) && ("returnZ" in e2 && null != e2.returnZ ? e2.returnZ : r.supportsZ);
  }
  get hasM() {
    const e2 = this.layer, r = e2.capabilities && e2.capabilities.data;
    return !(!r || !r.supportsM) && "returnM" in e2 && null != e2.returnM && e2.returnM;
  }
  setVisibility(e2, r) {
    this.graphicsPipeline?.setVisibility(e2, r);
  }
  createQuery() {
    return super.createQuery();
  }
  queryFeatures(e2, r) {
    const t4 = () => super.queryFeatures(e2, r);
    return "mesh" === this.layer.geometryType ? this._queryFeaturesMesh(this._ensureQuery(e2), t4) : t4();
  }
  createGraphicsPipeline() {
    return new f3({
      layerView: this
    });
  }
  doRefresh(e2) {
    return __async(this, null, function* () {
      return yield this.graphicsPipeline.doRefresh(e2);
    });
  }
  _popupFeatureHasRequiredFields(e2, r) {
    if (!super._popupFeatureHasRequiredFields(e2, r)) return false;
    const t4 = M(e2, this.layer.objectIdField);
    if (null == t4) return true;
    const i4 = this.graphicsPipeline.getMissingAttributesForFeature(t4);
    if (null == i4) return true;
    for (const s3 of r) if (i4.has(s3)) return false;
    return true;
  }
  get usedMemory() {
    return this.graphicsPipeline?.usedMemory ?? 0;
  }
  get unloadedMemory() {
    return this.graphicsPipeline?.unloadedMemory ?? 0;
  }
  get ignoresMemoryFactor() {
    return this.graphicsPipeline?.ignoresMemoryFactor ?? false;
  }
  _queryFeaturesMesh(e2, r) {
    return __async(this, null, function* () {
      yield this._validateQueryFeaturesMesh(e2);
      const t4 = yield r(), i4 = this.graphicsPipeline;
      if (e2?.outStatistics || null == i4) return t4;
      const s3 = this.layer.objectIdField, a3 = [];
      for (const o of t4.features) if (o.geometry) {
        const e3 = i4.getHydratedGeometry(o.attributes[s3]);
        e3 && (o.geometry = e3, a3.push(o));
      } else a3.push(o);
      return t4.features = a3, t4;
    });
  }
  _validateQueryFeaturesMesh(e2) {
    return __async(this, null, function* () {
      if (!e2) return;
      const t4 = (e3) => {
        throw new s("feature-layer-view:unsupported-query", `Queries on Mesh feature collection layers do not support '${e3}'`);
      }, i4 = ["quantizationParameters", "geometryPrecision", "maxAllowableOffset"];
      for (const r of i4) null != e2[r] && t4(r);
      "returnM" in e2 && e2.returnM && t4("returnM"), "returnCentroid" in e2 && e2.returnCentroid && t4("returnCentroid"), null == e2.outSpatialReference || e2.outSpatialReference.equals(this.view.spatialReference) || t4("outSpatialReference");
    });
  }
  get test() {
  }
};
e([y()], f4.prototype, "layer", void 0), e([y()], f4.prototype, "graphicsPipeline", void 0), e([y()], f4.prototype, "maximumNumberOfFeatures", null), e([y()], f4.prototype, "maximumNumberOfFeaturesExceeded", null), e([y(t2)], f4.prototype, "updatingProgress", void 0), e([y({
  readOnly: true
})], f4.prototype, "updatingProgressValue", null), e([y({
  readOnly: true
})], f4.prototype, "updatePolicy", null), e([y({
  readOnly: true
})], f4.prototype, "hasZ", null), e([y({
  readOnly: true
})], f4.prototype, "hasM", null), f4 = e([a("esri.views.3d.layers.FeatureLayerViewBase3D")], f4);
var g = f4;

export {
  g
};
//# sourceMappingURL=chunk-TOQG323X.js.map
