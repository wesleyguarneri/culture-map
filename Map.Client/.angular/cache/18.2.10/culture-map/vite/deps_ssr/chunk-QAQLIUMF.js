import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  I,
  R,
  b as b2,
  f as f2,
  j,
  m as m2,
  y as y2
} from "./chunk-OAMMMPR2.js";
import {
  x
} from "./chunk-WT2NMUXS.js";
import {
  s as s3
} from "./chunk-OEC3KBO5.js";
import {
  v
} from "./chunk-JARG4EKD.js";
import {
  F
} from "./chunk-YT63GLYW.js";
import {
  a as a3
} from "./chunk-B63XAMYJ.js";
import {
  i
} from "./chunk-THUD7LGO.js";
import {
  o
} from "./chunk-6A4CZ4JY.js";
import {
  i as i3
} from "./chunk-IKBXTTSU.js";
import {
  T
} from "./chunk-VMZV7772.js";
import {
  c as c2,
  i as i2,
  o as o2,
  t
} from "./chunk-D3QK4EV3.js";
import {
  b
} from "./chunk-ORYC4PVJ.js";
import {
  g
} from "./chunk-CXNERL22.js";
import {
  c
} from "./chunk-DC5LRNPY.js";
import {
  r
} from "./chunk-EGBDRLCX.js";
import {
  m
} from "./chunk-4L4Y34YK.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  n as n2
} from "./chunk-Y2HYKTTT.js";
import {
  U,
  V
} from "./chunk-XLEC46FY.js";
import {
  d
} from "./chunk-LZSLQ24Q.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import {
  A,
  a,
  k
} from "./chunk-AIZ3T7E3.js";
import {
  e,
  n2 as n,
  s,
  s2
} from "./chunk-6JFGZTLU.js";
import {
  L,
  O,
  has
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/graphics/sources/FeatureLayerSource.js
var V2 = new n2({
  originalAndCurrentFeatures: "original-and-current-features",
  none: "none"
});
var $ = new n2({
  Started: "published",
  Publishing: "publishing",
  Stopped: "unavailable"
});
var G = class extends m {
  constructor(e3) {
    super(e3), this.type = "feature-layer", this.supportedSourceTypes = /* @__PURE__ */ new Set(["Feature Layer", "Oriented Imagery Layer", "Table", "Catalog Layer"]), this.refresh = k(() => __async(this, null, function* () {
      yield this.load();
      const e4 = this.sourceJSON.editingInfo?.lastEditDate;
      if (null == e4) return {
        dataChanged: true,
        updates: {}
      };
      try {
        yield this._fetchService(null);
      } catch {
        return {
          dataChanged: true,
          updates: {}
        };
      }
      const t2 = e4 !== this.sourceJSON.editingInfo?.lastEditDate;
      return {
        dataChanged: t2,
        updates: t2 ? {
          editingInfo: this.sourceJSON.editingInfo,
          extent: this.sourceJSON.extent
        } : null
      };
    })), this._ongoingAssetUploads = /* @__PURE__ */ new Map();
  }
  load(e3) {
    const t2 = this.layer.sourceJSON, r2 = this._fetchService(t2, __spreadValues({}, e3)).then(() => this.layer.setUserPrivileges(this.sourceJSON.serviceItemId, e3)).then(() => this._ensureLatestMetadata(e3));
    return this.addResolvingPromise(r2), Promise.resolve(this);
  }
  initialize() {
    this.addHandles([d(() => {
      const e3 = this.layer;
      return e3 && "lastEditsEventDate" in e3 ? e3.lastEditsEventDate : null;
    }, (e3) => this._handleLastEditsEventChange(e3))]);
  }
  destroy() {
    this._removeEditInterceptor();
  }
  get queryTask() {
    const {
      capabilities: e3,
      parsedUrl: t2,
      gdbVersion: r2,
      spatialReference: s4,
      fieldsIndex: a4
    } = this.layer, i4 = "infoFor3D" in this.layer ? this.layer.infoFor3D : null, n3 = "dynamicDataSource" in this.layer ? this.layer.dynamicDataSource : null, o3 = has("featurelayer-pbf") && e3?.query.supportsFormatPBF && null == i4, u = e3?.operations?.supportsQueryAttachments ?? false;
    return new x({
      url: t2.path,
      pbfSupported: o3,
      fieldsIndex: a4,
      infoFor3D: i4,
      dynamicDataSource: n3,
      gdbVersion: r2,
      sourceSpatialReference: s4,
      queryAttachmentsSupported: u
    });
  }
  addAttachment(e3, t2) {
    return __async(this, null, function* () {
      yield this.load();
      const {
        layer: s4
      } = this;
      yield T(s4, "editing");
      const a4 = e3.attributes[s4.objectIdField], i4 = s4.parsedUrl.path + "/" + a4 + "/addAttachment", n3 = this._getLayerRequestOptions(), o3 = this._getFormDataForAttachment(t2, n3.query);
      try {
        const e4 = yield U(i4, {
          body: o3
        });
        return R(e4.data.addAttachmentResult);
      } catch (u) {
        throw this._createAttachmentErrorResult(a4, u);
      }
    });
  }
  updateAttachment(e3, t2, s4) {
    return __async(this, null, function* () {
      yield this.load();
      const {
        layer: a4
      } = this;
      yield T(a4, "editing");
      const i4 = e3.attributes[a4.objectIdField], n3 = a4.parsedUrl.path + "/" + i4 + "/updateAttachment", o3 = this._getLayerRequestOptions({
        query: {
          attachmentId: t2
        }
      }), u = this._getFormDataForAttachment(s4, o3.query);
      try {
        const e4 = yield U(n3, {
          body: u
        });
        return R(e4.data.updateAttachmentResult);
      } catch (l) {
        throw this._createAttachmentErrorResult(i4, l);
      }
    });
  }
  applyEdits(e3, t2) {
    return __async(this, null, function* () {
      yield this.load();
      const {
        layer: s4
      } = this;
      yield T(s4, "editing");
      const i4 = "infoFor3D" in s4 ? s4.infoFor3D : null, o3 = null != i4, u = o3 || (t2?.globalIdUsed ?? false), l = o3 ? yield this._uploadMeshesAndGetAssetMapEditsJSON(e3) : null, c3 = e3.addFeatures?.map((e4) => m2(this.layer, e4, i4)) ?? [], d2 = (yield Promise.all(c3)).filter(O), p = e3.updateFeatures?.map((e4) => m2(this.layer, e4, i4)) ?? [], h = (yield Promise.all(p)).filter(O), y3 = b2(this.layer, e3.deleteFeatures, u);
      i3(d2, h, s4.spatialReference);
      const m3 = yield f2(this.layer, e3), f3 = s4.capabilities.editing.supportsAsyncApplyEdits && o3, g2 = t2?.gdbVersion || s4.gdbVersion, w2 = {
        gdbVersion: g2,
        rollbackOnFailure: t2?.rollbackOnFailureEnabled,
        useGlobalIds: u,
        returnEditMoment: t2?.returnEditMoment,
        usePreviousEditMoment: t2?.usePreviousEditMoment,
        async: f3
      };
      yield i2(this.layer.url, g2, true);
      const S = c2(this.layer.url, g2 || null);
      if (yield o2(s4.url, g2, s4.historicMoment)) throw new s2("feature-layer-source:historic-version", "Editing a historic version is not allowed");
      t2?.returnServiceEditsOption ? (w2.edits = JSON.stringify([{
        id: s4.layerId,
        adds: d2.length ? d2 : null,
        updates: h.length ? h : null,
        deletes: y3.length ? y3 : null,
        attachments: m3,
        assetMaps: l
      }]), w2.returnServiceEditsOption = V2.toJSON(t2?.returnServiceEditsOption), w2.returnServiceEditsInSourceSR = t2?.returnServiceEditsInSourceSR) : (w2.adds = d2.length ? JSON.stringify(d2) : null, w2.updates = h.length ? JSON.stringify(h) : null, w2.deletes = y3.length ? u ? JSON.stringify(y3) : y3.join(",") : null, w2.attachments = m3 && JSON.stringify(m3), w2.assetMaps = null != l ? JSON.stringify(l) : void 0);
      const q = this._getLayerRequestOptions({
        method: "post",
        query: w2
      });
      S && (q.authMode = "immediate", q.query.returnEditMoment = true, q.query.sessionId = t);
      const E = t2?.returnServiceEditsOption ? s4.url : s4.parsedUrl.path;
      let O2;
      try {
        O2 = f3 ? yield this._asyncApplyEdits(E + "/applyEdits", q) : yield U(E + "/applyEdits", q);
      } catch (_) {
        if (!j(_)) throw _;
        q.authMode = "immediate", O2 = f3 ? yield this._asyncApplyEdits(E + "/applyEdits", q) : yield U(E + "/applyEdits", q);
      }
      return this._createEditsResult(O2);
    });
  }
  deleteAttachments(e3, t2) {
    return __async(this, null, function* () {
      yield this.load();
      const {
        layer: s4
      } = this;
      yield T(s4, "editing");
      const a4 = e3.attributes[s4.objectIdField], i4 = s4.parsedUrl.path + "/" + a4 + "/deleteAttachments";
      try {
        return (yield U(i4, this._getLayerRequestOptions({
          query: {
            attachmentIds: t2.join(",")
          },
          method: "post"
        }))).data.deleteAttachmentResults.map(R);
      } catch (n3) {
        throw this._createAttachmentErrorResult(a4, n3);
      }
    });
  }
  fetchRecomputedExtents(e3 = {}) {
    const t2 = e3.signal;
    return this.load({
      signal: t2
    }).then(() => __async(this, null, function* () {
      const t3 = this._getLayerRequestOptions(__spreadProps(__spreadValues({}, e3), {
        query: {
          returnUpdates: true
        }
      })), {
        layerId: a4,
        url: i4
      } = this.layer, {
        data: n3
      } = yield U(`${i4}/${a4}`, t3), {
        id: o3,
        extent: u,
        fullExtent: l,
        timeExtent: c3
      } = n3, d2 = u || l;
      return {
        id: o3,
        fullExtent: d2 && w.fromJSON(d2),
        timeExtent: c3 && c.fromJSON({
          start: c3[0],
          end: c3[1]
        })
      };
    }));
  }
  queryAttachments(_0) {
    return __async(this, arguments, function* (e3, t2 = {}) {
      yield this.load();
      const r2 = this._getLayerRequestOptions(t2);
      return this.queryTask.executeAttachmentQuery(e3, r2);
    });
  }
  queryFeatures(e3, t2) {
    return __async(this, null, function* () {
      yield this.load();
      const r2 = yield this.queryTask.execute(e3, __spreadProps(__spreadValues({}, t2), {
        query: this._createRequestQueryOptions(t2)
      }));
      return e3.outStatistics?.length && r2.features.length && r2.features.forEach((t3) => {
        const r3 = t3.attributes;
        e3.outStatistics?.forEach(({
          outStatisticFieldName: e4
        }) => {
          if (e4) {
            const t4 = e4.toLowerCase();
            t4 && t4 in r3 && e4 !== t4 && (r3[e4] = r3[t4], delete r3[t4]);
          }
        });
      }), r2;
    });
  }
  queryFeaturesJSON(e3, t2) {
    return __async(this, null, function* () {
      return yield this.load(), this.queryTask.executeJSON(e3, __spreadProps(__spreadValues({}, t2), {
        query: this._createRequestQueryOptions(t2)
      }));
    });
  }
  queryObjectIds(e3, t2) {
    return __async(this, null, function* () {
      return yield this.load(), this.queryTask.executeForIds(e3, __spreadProps(__spreadValues({}, t2), {
        query: this._createRequestQueryOptions(t2)
      }));
    });
  }
  queryFeatureCount(e3, t2) {
    return __async(this, null, function* () {
      return yield this.load(), this.queryTask.executeForCount(e3, __spreadProps(__spreadValues({}, t2), {
        query: this._createRequestQueryOptions(t2)
      }));
    });
  }
  queryExtent(e3, t2) {
    return __async(this, null, function* () {
      return yield this.load(), this.queryTask.executeForExtent(e3, __spreadProps(__spreadValues({}, t2), {
        query: this._createRequestQueryOptions(t2)
      }));
    });
  }
  queryRelatedFeatures(e3, t2) {
    return __async(this, null, function* () {
      return yield this.load(), this.queryTask.executeRelationshipQuery(e3, __spreadProps(__spreadValues({}, t2), {
        query: this._createRequestQueryOptions(t2)
      }));
    });
  }
  queryRelatedFeaturesCount(e3, t2) {
    return __async(this, null, function* () {
      return yield this.load(), this.queryTask.executeRelationshipQueryForCount(e3, __spreadProps(__spreadValues({}, t2), {
        query: this._createRequestQueryOptions(t2)
      }));
    });
  }
  queryTopFeatures(e3, t2) {
    return __async(this, null, function* () {
      return yield this.load(), this.queryTask.executeTopFeaturesQuery(e3, __spreadProps(__spreadValues({}, t2), {
        query: this._createRequestQueryOptions(t2)
      }));
    });
  }
  queryTopObjectIds(e3, t2) {
    return __async(this, null, function* () {
      return yield this.load(), this.queryTask.executeForTopIds(e3, __spreadProps(__spreadValues({}, t2), {
        query: this._createRequestQueryOptions(t2)
      }));
    });
  }
  queryTopExtents(e3, t2) {
    return __async(this, null, function* () {
      return yield this.load(), this.queryTask.executeForTopExtents(e3, __spreadProps(__spreadValues({}, t2), {
        query: this._createRequestQueryOptions(t2)
      }));
    });
  }
  queryTopCount(e3, t2) {
    return __async(this, null, function* () {
      return yield this.load(), this.queryTask.executeForTopCount(e3, __spreadProps(__spreadValues({}, t2), {
        query: this._createRequestQueryOptions(t2)
      }));
    });
  }
  fetchPublishingStatus() {
    return __async(this, null, function* () {
      if (!g(this.layer.url)) return "unavailable";
      const e3 = V(this.layer.url, "status"), t2 = yield U(e3, {
        query: {
          f: "json"
        }
      });
      return $.fromJSON(t2.data.status);
    });
  }
  uploadAssets(e3, t2) {
    return __async(this, null, function* () {
      const {
        uploadAssets: r2
      } = yield import("./uploadAssets-KU63R2NZ.js");
      return r2(e3, {
        layer: this.layer,
        ongoingUploads: this._ongoingAssetUploads
      }, t2);
    });
  }
  _handleLastEditsEventChange(e3) {
    const t2 = this.layer;
    if (null == e3 || !("capabilities" in t2) || !("effectiveCapabilities" in t2)) return;
    if (!(!t2.capabilities?.operations?.supportsEditing && t2.effectiveCapabilities?.operations?.supportsEditing)) return;
    const r2 = t2.url;
    if (null == r2) return;
    "layerId" in t2 && V(r2, t2.layerId.toString());
    this._getOrCreateEditInterceptor(r2).before = (t3) => {
      const r3 = t3.requestOptions.method ?? "auto";
      if ("auto" === r3 || "head" === r3) {
        const r4 = t3.requestOptions.query ?? {};
        r4._ts = e3.getTime(), t3.requestOptions.query = r4;
      }
    };
  }
  _getOrCreateEditInterceptor(e3) {
    return null == this._editInterceptor && (this._editInterceptor = {
      urls: e3
    }, s.request.internalInterceptors.push(this._editInterceptor)), this._editInterceptor;
  }
  _removeEditInterceptor() {
    null != this._editInterceptor && (L(s.request.internalInterceptors, this._editInterceptor), this._editInterceptor = null);
  }
  _asyncApplyEdits(e3, t2) {
    return __async(this, null, function* () {
      const s4 = (yield U(e3, t2)).data.statusUrl;
      for (; ; ) {
        const e4 = (yield U(s4, {
          query: {
            f: "json"
          },
          responseType: "json"
        })).data;
        switch (e4.status) {
          case "Completed":
            return U(e4.resultUrl, {
              query: {
                f: "json"
              },
              responseType: "json"
            });
          case "CompletedWithErrors":
            throw new s2("async-applyEdits-failed", "asynchronous applyEdits call failed.");
          case "Failed ImportChanges":
          case "InProgress":
          case "Pending":
          case "ExportAttachments":
          case "ExportChanges":
          case "ExportingData":
          case "ExportingSnapshot":
          case "ImportAttachments":
          case "ProvisioningReplica":
          case "UnRegisteringReplica":
            break;
          default:
            throw new s2("async-applyEdits-failed", "asynchronous applyEdits call failed (undefined response status)");
        }
        yield A(H);
      }
    });
  }
  _createRequestQueryOptions(e3) {
    const t2 = __spreadValues(__spreadProps(__spreadValues({}, this.layer.customParameters), {
      token: this.layer.apiKey
    }), e3?.query);
    return this.layer.datesInUnknownTimezone && (t2.timeReferenceUnknownClient = true), t2;
  }
  _fetchService(e3, t2) {
    return __async(this, null, function* () {
      if (!e3) {
        const s5 = {};
        has("featurelayer-advanced-symbols") && (s5.returnAdvancedSymbols = true), t2?.cacheBust && (s5._ts = Date.now());
        const {
          data: a4
        } = yield U(this.layer.parsedUrl.path, this._getLayerRequestOptions({
          query: s5,
          signal: t2?.signal
        }));
        e3 = a4;
      }
      this.sourceJSON = yield this._patchServiceJSON(e3, t2?.signal);
      const s4 = e3.type;
      if (!this.supportedSourceTypes.has(s4)) throw new s2("feature-layer-source:unsupported-type", `Source type "${s4}" is not supported`);
    });
  }
  _patchServiceJSON(e3, t2) {
    return __async(this, null, function* () {
      if ("Table" !== e3.type && e3.geometryType && !e3?.drawingInfo?.renderer && !e3.defaultSymbol) {
        const t3 = o(e3.geometryType).renderer;
        e("drawingInfo.renderer", t3, e3);
      }
      if ("esriGeometryMultiPatch" === e3.geometryType && e3.infoFor3D && (e3.geometryType = "mesh"), null == e3.extent) try {
        const {
          data: s4
        } = yield U(this.layer.url, this._getLayerRequestOptions({
          signal: t2
        }));
        s4.spatialReference && (e3.extent = {
          xmin: 0,
          ymin: 0,
          xmax: 0,
          ymax: 0,
          spatialReference: s4.spatialReference
        });
      } catch (s4) {
        a(s4);
      }
      return e3;
    });
  }
  _ensureLatestMetadata(e3) {
    return __async(this, null, function* () {
      if (this.layer.userHasUpdateItemPrivileges && this.sourceJSON.cacheMaxAge > 0) return this._fetchService(null, __spreadProps(__spreadValues({}, e3), {
        cacheBust: true
      }));
    });
  }
  _uploadMeshesAndGetAssetMapEditsJSON(e3) {
    return __async(this, null, function* () {
      const {
        addAssetFeatures: t2
      } = e3;
      if (!t2?.length) return null;
      if (yield this._areAllAssetsAlreadyMapped(t2)) return null;
      const r2 = e3.addFeatures.filter((e4) => e4.geometry);
      if (t2.length !== r2.length + e3.updateFeatures.length) throw new s2("feature-layer-source:unsupported-mesh-edits", "Mixing attribute only edits with mesh geometry edits is not currently supported");
      const s4 = new Array(), a4 = /* @__PURE__ */ new Map();
      for (const i4 of t2) {
        const {
          geometry: e4
        } = i4, {
          vertexSpace: t3
        } = e4;
        if (a3(t3)) s4.push(e4);
        else {
          const t4 = e4.anchor, {
            convertMeshVertexSpace: r3
          } = yield import("./convertMeshVertexSpace-2OF4R6LE.js"), n3 = yield r3(e4, new i({
            origin: [t4.x, t4.y, t4.z ?? 0]
          }));
          a4.set(n3, e4), i4.geometry = n3, s4.push(n3);
        }
      }
      yield this.uploadAssets(s4);
      for (const [i4, n3] of a4) n3.addExternalSources(i4.metadata.externalSources.items);
      return {
        adds: this._getAssetMapEditsJSON(t2),
        updates: [],
        deletes: []
      };
    });
  }
  _getAssetMapEditsJSON(e3) {
    const t2 = new Array(), r2 = this.layer.globalIdField, s4 = this.layer.parsedUrl;
    for (const a4 of e3) {
      const e4 = a4.geometry, {
        metadata: i4
      } = e4, n3 = i4.getExternalSourcesOnService(s4), o3 = a4.getAttribute(r2);
      if (0 === n3.length) {
        n.getLogger(this).error(`Skipping feature ${o3}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);
        continue;
      }
      const {
        source: u
      } = n3.find(v) ?? n3[0];
      for (const r3 of u) 1 === r3.parts.length ? t2.push({
        globalId: r(),
        parentGlobalId: o3,
        assetName: r3.assetName,
        assetHash: r3.parts[0].partHash,
        flags: []
      }) : n.getLogger(this).error(`Skipping asset ${r3.assetName}. It does not have exactly one part, so we cannot map it to a feature.`);
    }
    return t2;
  }
  _createEditsResult(e3) {
    const t2 = e3.data, {
      layerId: r2
    } = this.layer, s4 = [];
    let a4 = null;
    if (Array.isArray(t2)) for (const n3 of t2) s4.push({
      id: n3.id,
      editedFeatures: n3.editedFeatures
    }), n3.id === r2 && (a4 = {
      addResults: n3.addResults ?? [],
      updateResults: n3.updateResults ?? [],
      deleteResults: n3.deleteResults ?? [],
      attachments: n3.attachments,
      editMoment: n3.editMoment
    });
    else a4 = t2;
    const i4 = y2(a4);
    if (s4.length > 0) {
      i4.editedFeatureResults = [];
      for (const e4 of s4) {
        const {
          editedFeatures: t3
        } = e4, r3 = t3?.spatialReference ? new f(t3.spatialReference) : null;
        i4.editedFeatureResults.push({
          layerId: e4.id,
          editedFeatures: I(t3, r3)
        });
      }
    }
    return i4;
  }
  _createAttachmentErrorResult(e3, t2) {
    const r2 = t2.details.messages?.[0] || t2.message, s4 = t2.details.httpStatus || t2.details.messageCode;
    return {
      objectId: e3,
      globalId: null,
      error: new s2("feature-layer-source:attachment-failure", r2, {
        code: s4
      })
    };
  }
  _getFormDataForAttachment(e3, t2) {
    const r2 = e3 instanceof FormData ? e3 : e3 && e3.elements ? new FormData(e3) : null;
    if (r2) for (const s4 in t2) {
      const e4 = t2[s4];
      null != e4 && (r2.set ? r2.set(s4, e4) : r2.append(s4, e4));
    }
    return r2;
  }
  _getLayerRequestOptions(e3 = {}) {
    const {
      layer: t2,
      layer: {
        parsedUrl: r2,
        gdbVersion: s4
      }
    } = this;
    return __spreadProps(__spreadValues({}, e3), {
      query: __spreadValues(__spreadProps(__spreadValues({
        gdbVersion: s4,
        layer: "dynamicDataSource" in t2 && t2.dynamicDataSource ? JSON.stringify({
          source: t2.dynamicDataSource
        }) : void 0
      }, r2.query), {
        f: "json"
      }), this._createRequestQueryOptions(e3)),
      responseType: "json"
    });
  }
  _areAllAssetsAlreadyMapped(e3) {
    return __async(this, null, function* () {
      const {
        layer: t2
      } = this, {
        globalIdField: r2,
        parsedUrl: s4
      } = t2, i4 = "infoFor3D" in t2 ? t2.infoFor3D : null;
      if (null == i4 || null == r2) return false;
      const n3 = F(i4);
      if (null == n3) return false;
      const o3 = V(s4.path, `../${n3.id}`), u = new Array();
      for (const a4 of e3) {
        if (!(a4.geometry.metadata.getExternalSourcesOnService(s4).length > 0)) return false;
        u.push(a4);
      }
      const l = u.map((e4) => e4.getAttribute(r2)).filter(O);
      if (0 === l.length) return false;
      const {
        assetMapFieldRoles: {
          parentGlobalId: c3,
          assetHash: d2
        }
      } = i4, p = new b({
        where: `${c3} IN (${l.map((e4) => `'${e4}'`)})`,
        outFields: [d2, c3],
        returnGeometry: false
      }), h = yield s3(o3, p), {
        features: y3
      } = h;
      return 0 !== y3.length && !u.some((e4) => {
        const t3 = e4.getAttribute(r2);
        if (!t3) return true;
        const {
          metadata: a4
        } = e4.geometry, i5 = y3.filter((e5) => e5.getAttribute(c3) === t3);
        if (0 === i5.length) return true;
        const n4 = i5.map((e5) => e5.getAttribute(d2));
        return a4.getExternalSourcesOnService(s4).flatMap(({
          source: e5
        }) => e5.flatMap((e6) => e6.parts.map((e7) => e7.partHash))).some((e5) => n4.every((t4) => e5 !== t4));
      });
    });
  }
};
e2([y()], G.prototype, "type", void 0), e2([y({
  constructOnly: true
})], G.prototype, "layer", void 0), e2([y({
  constructOnly: true
})], G.prototype, "supportedSourceTypes", void 0), e2([y({
  readOnly: true
})], G.prototype, "queryTask", null), G = e2([a2("esri.layers.graphics.sources.FeatureLayerSource")], G);
var H = 1e3;
var z = G;

export {
  z
};
//# sourceMappingURL=chunk-QAQLIUMF.js.map
