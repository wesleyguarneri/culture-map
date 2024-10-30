import {
  i as i3
} from "./chunk-PQKIJHUT.js";
import {
  a as a2
} from "./chunk-GJ7RIUPZ.js";
import {
  d as d4
} from "./chunk-CYRWOVUJ.js";
import {
  e as e2,
  t as t2
} from "./chunk-2ACBZNFZ.js";
import {
  Ze
} from "./chunk-B7GRWOZI.js";
import {
  r
} from "./chunk-KDJZAYOF.js";
import {
  d as d3
} from "./chunk-UFVMJL32.js";
import {
  c,
  c2,
  g,
  h,
  i as i2,
  l,
  t
} from "./chunk-5GQ3OMCZ.js";
import {
  b as b2
} from "./chunk-TRSGUVSM.js";
import {
  d as d2
} from "./chunk-HD65DNIO.js";
import {
  d
} from "./chunk-CRNUMTSV.js";
import {
  S as S3
} from "./chunk-RXWBJSJ5.js";
import {
  y as y2
} from "./chunk-S3IO7V4Q.js";
import {
  o
} from "./chunk-4ZZRP4MA.js";
import {
  S as S2
} from "./chunk-FYAEQPUY.js";
import {
  m
} from "./chunk-BDM2D6IC.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  f as f2
} from "./chunk-TKPMIAIW.js";
import {
  i,
  n as n2
} from "./chunk-V5C6HSAM.js";
import {
  I,
  U
} from "./chunk-SYATLP3H.js";
import {
  f,
  u2
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  b,
  u
} from "./chunk-HJY2YILU.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __superGet
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/networks/support/TopologyValidationJobInfo.js
var n3 = i()({
  Pending: "job-waiting",
  InProgress: "job-executing",
  Completed: "job-succeeded"
});
var l2 = class extends i3 {
  constructor(t3) {
    super(t3), this.statusUrl = null, this.status = null, this.submissionTime = null, this.lastUpdatedTime = null, this._timer = void 0;
  }
  destroy() {
    clearInterval(this._timer);
  }
  checkJobStatus(t3) {
    return __async(this, null, function* () {
      const s4 = __spreadProps(__spreadValues({}, t3), {
        query: {
          f: "json"
        }
      }), {
        data: r2
      } = yield U(this.statusUrl, s4);
      return this.read(r2), this.editsResolver && this.editsResolver.resolve({
        edits: null,
        addedFeatures: [],
        updatedFeatures: [],
        deletedFeatures: [],
        addedAttachments: [],
        updatedAttachments: [],
        deletedAttachments: [],
        exceededTransferLimit: true,
        historicMoment: null
      }), this;
    });
  }
  waitForJobCompletion() {
    return __async(this, arguments, function* (t3 = {}) {
      const {
        interval: e4 = 1e3,
        statusCallback: s4
      } = t3;
      return new Promise((t4, o2) => {
        this._clearTimer();
        const i5 = setInterval(() => {
          this._timer || o2(u()), this.checkJobStatus().then((e5) => {
            const {
              status: r2
            } = e5;
            switch (this.status = r2, r2) {
              case "job-succeeded":
                this._clearTimer(), t4(this);
                break;
              case "job-waiting":
              case "job-executing":
                s4 && s4(this);
            }
          }, (t5) => {
            this._clearTimer(), o2(t5);
          });
        }, e4);
        this._timer = i5;
      });
    });
  }
  _clearTimer() {
    clearInterval(this._timer), this._timer = void 0;
  }
};
e([y()], l2.prototype, "editsResolver", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], l2.prototype, "statusUrl", void 0), e([o(n3)], l2.prototype, "status", void 0), e([y({
  type: Date,
  json: {
    type: Number,
    write: {
      writer: (t3, e4) => {
        e4.submissionTime = t3 ? t3.getTime() : null;
      }
    }
  }
})], l2.prototype, "submissionTime", void 0), e([y({
  type: Date,
  json: {
    type: Number,
    write: {
      writer: (t3, e4) => {
        e4.lastUpdatedTime = t3 ? t3.getTime() : null;
      }
    }
  }
})], l2.prototype, "lastUpdatedTime", void 0), l2 = e([a("esri.networks.support.TopologyValidationJobInfo")], l2);
var m2 = l2;

// ../../../node_modules/@arcgis/core/networks/support/utils.js
function n4(e4, t3) {
  const r2 = [], o2 = /* @__PURE__ */ new Map();
  for (const n7 of t3) {
    const t4 = e4.getLayerIdBySourceId(n7.networkSourceId);
    if (null == t4) continue;
    let r3 = o2.get(t4);
    void 0 === r3 && (r3 = []), r3.push(n7.objectId), o2.set(t4, r3);
  }
  const a5 = e4.featureServiceUrl;
  return o2.forEach((e5, t4) => r2.push({
    layerUrl: `${a5}/${t4}`,
    objectIds: e5
  })), r2;
}
function s2(e4, t3) {
  return __async(this, null, function* () {
    const o2 = e4.layers, n7 = e4.layerInfos, s4 = e4.returnGeometry || false, l5 = e4.outSpatialReference;
    yield Promise.all(o2.map((e5) => __async(this, null, function* () {
      yield e5.load();
    })));
    return (yield Promise.all(o2.map((e5) => __async(this, null, function* () {
      const o3 = n7.find((t4) => t4.layerUrl === e5.parsedUrl?.path);
      if (!o3?.objectIds?.length) return {
        layer: e5,
        featureSet: void 0
      };
      const i5 = e5.createQuery();
      i5.returnGeometry = s4, i5.outFields = o3.outFields || ["*"], i5.outSpatialReference = l5, i5.gdbVersion = e5.gdbVersion, i5.objectIds = o3.objectIds, t3 && (i5.where = "1=1");
      const u3 = d3.fromJSON(yield r(e5, i5));
      return {
        layer: e5,
        featureSet: u3
      };
    })))).filter((e5) => void 0 !== e5.featureSet);
  });
}
function l3(e4, t3) {
  return __async(this, null, function* () {
    if ("Utility Network Layer" === e4) {
      const {
        default: e5
      } = yield import("./UtilityNetwork-F5SLZC4P.js");
      return new e5({
        layerUrl: t3
      });
    }
    return null;
  });
}
function i4(r2) {
  return __async(this, null, function* () {
    let a5 = "portalItem" in r2 ? r2 : {
      portalItem: r2
    };
    !a5.portalItem || a5.portalItem instanceof S2 || (a5 = __spreadProps(__spreadValues({}, a5), {
      portalItem: new S2(a5.portalItem)
    }));
    const n7 = a5.portalItem;
    if (yield n7.load(), "Feature Service" !== n7.type) throw new s("portal:unknown-item-type", "Unknown item type '${type}'", {
      type: n7.type
    });
    const s4 = n7.url, i5 = yield U(s4, {
      responseType: "json",
      query: {
        f: "json"
      }
    }), u3 = "Network Layer";
    if (i5.data.type?.includes(u3)) return l3(i5.data.type, s4);
    if (i5.data.layers) {
      const e4 = i5.data.layers.find((e5) => e5.type.includes(u3));
      if (e4) {
        const t3 = `${s4}/${e4.id}`;
        return l3(e4.type, t3);
      }
    }
    return null;
  });
}

// ../../../node_modules/@arcgis/core/networks/Network.js
var k = class extends S3(m) {
  static fromPortalItem(e4) {
    return i4(e4);
  }
  constructor(e4) {
    super(e4), this.id = null, this.title = null, this.layerUrl = null, this.dataElement = null, this.fullExtent = null, this.spatialReference = null, this.type = null, this.sourceJSON = null, this.gdbVersion = null, this.historicMoment = null, this._applyEditsHandler = (e5) => {
      const {
        serviceUrl: t3,
        gdbVersion: r2,
        result: o2
      } = e5, s4 = t3 === this.featureServiceUrl, i5 = g(t3, r2, this.gdbVersion);
      s4 && i5 && o2.then((e6) => {
        c(t3, r2) && (this.historicMoment = e6.historicMoment);
      });
    }, this._updateMomentHandler = (e5) => {
      const {
        serviceUrl: t3,
        gdbVersion: r2,
        moment: o2
      } = e5, s4 = t3 === this.featureServiceUrl, i5 = g(t3, r2, this.gdbVersion);
      s4 && i5 && (this.historicMoment = o2);
    }, this.when().then(() => {
      this.addHandles([l(this._applyEditsHandler), h(this._updateMomentHandler)]);
    }, () => {
    });
  }
  initialize() {
    this.when().catch((e4) => {
      b(e4) || n.getLogger(this).error("#load()", `Failed to load layer (title: '${this.title ?? "no title"}', id: '${this.id ?? "no id"}')`, {
        error: e4
      });
    });
  }
  get datasetName() {
    return this.dataElement?.name ?? null;
  }
  get owner() {
    return this.dataElement?.userIdentity ?? null;
  }
  get schemaGeneration() {
    return this.dataElement?.schemaGeneration ?? null;
  }
  get parsedUrl() {
    return I(this.layerUrl);
  }
  get featureServiceUrl() {
    return d(this.parsedUrl.path).url.path;
  }
  get networkServiceUrl() {
    return this.featureServiceUrl.replace(/\/FeatureServer/i, "/UtilityNetworkServer");
  }
  get layerId() {
    return d(this.parsedUrl.path).sublayer;
  }
  get networkSystemLayers() {
    return null;
  }
  load(e4) {
    return __async(this, null, function* () {
      return this.addResolvingPromise(this._fetchDataElement(this.featureServiceUrl, this.layerId.toString(), e4)), this.addResolvingPromise(this._fetchLayerMetaData(this.layerUrl, e4)), this;
    });
  }
  getLayerIdBySourceId(e4) {
    if (this.dataElement) {
      const t3 = this.dataElement.domainNetworks;
      for (const r2 of t3) {
        for (const t4 of r2.edgeSources ?? []) if (t4.sourceId === e4) return t4.layerId;
        for (const t4 of r2.junctionSources ?? []) if (t4.sourceId === e4) return t4.layerId;
      }
      return null;
    }
    return null;
  }
  queryNamedTraceConfigurations(e4, t3) {
    return __async(this, null, function* () {
      const [{
        queryNamedTraceConfigurations: r2
      }, {
        default: o2
      }] = yield Promise.all([import("./queryNamedTraceConfigurations-ZY24BV62.js"), import("./QueryNamedTraceConfigurationsParameters-FPABTQL2.js")]), s4 = this.networkServiceUrl, i5 = o2.from(e4);
      return (yield r2(s4, i5, __spreadValues({}, t3)))?.namedTraceConfigurations;
    });
  }
  validateTopology(e4, t3) {
    return __async(this, null, function* () {
      if (!e4.validateArea) throw new s("network:undefined-validateArea", "the network must have validateArea defined in the validate network topology parameters.");
      const [{
        validateNetworkTopology: r2
      }, {
        default: s4
      }] = yield Promise.all([import("./validateNetworkTopology-BT5LVOUG.js"), import("./ValidateNetworkTopologyParameters-NQMSFGG6.js")]), i5 = s4.from(e4);
      c(this.featureServiceUrl, this.gdbVersion || null) ? (i5.sessionID = t, yield i2(this.featureServiceUrl, this.gdbVersion, true)) : i5.sessionID = null, i5.gdbVersion = this.gdbVersion;
      const a5 = this.networkServiceUrl, n7 = this.featureServiceUrl, l5 = c2(n7, null, this.gdbVersion, true), d5 = yield r2(a5, i5, __spreadValues({}, t3));
      if (d5?.serviceEdits) {
        const e5 = [];
        for (const t4 of d5.serviceEdits) {
          const {
            editedFeatures: r3
          } = t4, o2 = r3?.spatialReference ? new f2(r3.spatialReference) : null;
          e5.push({
            layerId: t4.layerId,
            editedFeatures: {
              adds: r3?.adds?.map((e6) => N(e6, o2)) || [],
              updates: r3?.updates?.map((e6) => ({
                original: N(e6[0], o2),
                current: N(e6[1], o2)
              })) || [],
              deletes: r3?.deletes?.map((e6) => N(e6, o2)) || [],
              spatialReference: o2
            }
          });
        }
        l5.resolve({
          edits: null,
          addedFeatures: [],
          updatedFeatures: [],
          deletedFeatures: [],
          addedAttachments: [],
          updatedAttachments: [],
          deletedAttachments: [],
          editedFeatures: e5,
          exceededTransferLimit: false,
          historicMoment: d5.moment
        });
      }
      return d5;
    });
  }
  submitTopologyValidationJob(e4, t3) {
    return __async(this, null, function* () {
      let s4 = null;
      if (!e4.validateArea) throw new s("network:undefined-validateArea", "the network must have validateArea defined in the validate network topology parameters.");
      if (!this.gdbVersion) {
        const e5 = this.layerUrl.replace(/\/FeatureServer/i, "/VersionManagementServer").replace(/\/\d*$/, "");
        s4 = (yield U(e5, {
          responseType: "json",
          query: {
            f: "json"
          }
        })).data.defaultVersionName;
      }
      const [{
        submitValidateNetworkTopologyJob: i5
      }, {
        default: a5
      }] = yield Promise.all([import("./validateNetworkTopology-BT5LVOUG.js"), import("./ValidateNetworkTopologyParameters-NQMSFGG6.js")]), n7 = a5.from(e4);
      c(this.featureServiceUrl, this.gdbVersion || null) ? (n7.sessionID = t, yield i2(this.featureServiceUrl, this.gdbVersion, true)) : n7.sessionID = null, n7.gdbVersion = this.gdbVersion || s4;
      const l5 = this.networkServiceUrl, d5 = this.featureServiceUrl ? c2(this.featureServiceUrl, null, this.gdbVersion, true) : void 0, u3 = yield i5(l5, n7, __spreadValues({}, t3));
      return new m2({
        statusUrl: u3,
        editsResolver: d5
      });
    });
  }
  _fetchLayerMetaData(e4, t3) {
    return __async(this, null, function* () {
      const o2 = yield U(e4, __spreadValues({
        responseType: "json",
        query: {
          f: "json"
        }
      }, t3));
      this.sourceJSON = o2.data, this.read(o2.data, {
        origin: "service"
      });
    });
  }
  _fetchDataElement(e4, t3, o2) {
    return __async(this, null, function* () {
      if (this.dataElement) return;
      const s4 = yield U(`${e4}/queryDataElements`, __spreadValues({
        responseType: "json",
        query: {
          layers: JSON.stringify([t3]),
          f: "json"
        }
      }, o2)).then((e5) => e5.data.layerDataElements?.[0]);
      s4 && this.read(s4, {
        origin: "service"
      });
    });
  }
};
function N(e4, r2) {
  return new d2({
    attributes: e4.attributes,
    geometry: y2(__spreadProps(__spreadValues({}, e4.geometry), {
      spatialReference: r2
    }))
  });
}
e([y({
  type: String,
  nonNullable: true,
  json: {
    origins: {
      "web-map": {
        read: true,
        write: {
          isRequired: true
        }
      },
      service: {
        read: true
      }
    },
    read: false
  }
})], k.prototype, "id", void 0), e([y({
  type: String,
  nonNullable: true,
  json: {
    origins: {
      "web-map": {
        read: true,
        write: {
          isRequired: true
        }
      },
      service: {
        read: {
          source: "name"
        }
      }
    },
    read: false
  }
})], k.prototype, "title", void 0), e([y({
  type: String,
  nonNullable: true,
  json: {
    origins: {
      "web-map": {
        read: {
          source: "url"
        },
        write: {
          target: "url",
          isRequired: true
        }
      }
    },
    read: false
  }
})], k.prototype, "layerUrl", void 0), e([y({
  type: Object,
  json: {
    origins: {
      service: {
        read: true
      }
    },
    read: false
  }
})], k.prototype, "dataElement", void 0), e([y({
  type: w,
  json: {
    origins: {
      service: {
        read: {
          source: "extent"
        }
      }
    },
    read: false
  }
})], k.prototype, "fullExtent", void 0), e([y({
  type: f2,
  json: {
    origins: {
      service: {
        read: {
          source: "extent.spatialReference"
        }
      }
    },
    read: false
  }
})], k.prototype, "spatialReference", void 0), e([y({
  type: ["utility", "trace"],
  readOnly: true,
  json: {
    read: false,
    write: false
  }
})], k.prototype, "type", void 0), e([y({
  readOnly: true
})], k.prototype, "datasetName", null), e([y({
  readOnly: true
})], k.prototype, "owner", null), e([y({
  readOnly: true
})], k.prototype, "schemaGeneration", null), e([y({
  readOnly: true
})], k.prototype, "parsedUrl", null), e([y({
  readOnly: true
})], k.prototype, "featureServiceUrl", null), e([y({
  readOnly: true
})], k.prototype, "networkServiceUrl", null), e([y({
  readOnly: true
})], k.prototype, "layerId", null), e([y()], k.prototype, "sourceJSON", void 0), e([y({
  readOnly: true
})], k.prototype, "networkSystemLayers", null), e([y()], k.prototype, "gdbVersion", void 0), e([y({
  type: Date
})], k.prototype, "historicMoment", void 0), k = e([a("esri.networks.Network")], k);
var V = k;

// ../../../node_modules/@arcgis/core/networks/RulesTable.js
var a3 = class extends u2(m) {
  constructor(e4) {
    super(e4), this.rulesCategorized = {
      attachment: [],
      containment: [],
      connectivity: []
    }, this.request = U;
  }
  initialize() {
  }
  load(e4) {
    return __async(this, null, function* () {
      const t3 = this.layer.load(e4).then(() => this._initializeRulesTable());
      return this.addResolvingPromise(t3), this;
    });
  }
  getFeatureSQL(e4, t3) {
    const o2 = e4.layerId.toString(), s4 = e4.fieldsIndex?.normalizeFieldName("assetGroup"), r2 = e4.fieldsIndex?.normalizeFieldName("assetType"), i5 = s4 ? t3.attributes[s4] : null, n7 = r2 ? t3.attributes[r2] : null, a5 = this.rulesHash[o2];
    if (a5) {
      const e5 = a5.assetGroupHash[i5];
      if (e5) {
        return e5.assetTypeHash[n7] || null;
      }
    }
    return null;
  }
  _initializeRulesTable() {
    return __async(this, null, function* () {
      const e4 = {};
      let t3;
      !function(e5) {
        e5[e5.from = 0] = "from", e5[e5.to = 1] = "to", e5[e5.via = 2] = "via";
      }(t3 || (t3 = {}));
      const o2 = [{
        networkSourceId: "fromNetworkSource",
        assetGroupId: "fromAssetGroup",
        assetTypeId: "fromAssetType"
      }, {
        networkSourceId: "toNetworkSource",
        assetGroupId: "toAssetGroup",
        assetTypeId: "toAssetType"
      }, {
        networkSourceId: "viaNetworkSource",
        assetGroupId: "viaAssetGroup",
        assetTypeId: "viaAssetType"
      }];
      this.rulesCategorized = {
        attachment: [],
        containment: [],
        connectivity: []
      };
      for (const s4 of this.rules) {
        if (s4.ruleType === t2.RTAttachment) {
          this.rulesCategorized.attachment.push(s4);
          continue;
        }
        if (s4.ruleType === t2.RTContainment) {
          this.rulesCategorized.containment.push(s4);
          continue;
        }
        if (s4.ruleType === t2.RTJunctionJunctionConnectivity) {
          this.rulesCategorized.connectivity.push(s4);
          continue;
        }
        this.rulesCategorized.connectivity.push(s4);
        let r2 = [[t3.from, t3.to], [t3.to, t3.from]];
        s4.ruleType === t2.RTEdgeJunctionEdgeConnectivity && (r2 = [[t3.from, t3.via], [t3.via, t3.from], [t3.to, t3.via], [t3.via, t3.to]]);
        for (const i5 of r2) {
          const r3 = i5.shift(), a5 = i5.shift();
          let c4 = false;
          switch (s4.ruleType) {
            case t2.RTEdgeJunctionEdgeConnectivity:
              c4 = r3 === t3.from || r3 === t3.to;
              break;
            case t2.RTJunctionEdgeConnectivity:
              c4 = r3 === t3.to;
          }
          const u3 = o2[r3], p4 = s4[u3.networkSourceId]?.layerId.toString() ?? "", d5 = s4[u3.assetGroupId]?.assetGroupCode?.toString(), l5 = s4[u3.assetTypeId], y3 = l5?.assetTypeCode?.toString(), m4 = o2[a5], h2 = s4[m4.networkSourceId]?.layerId.toString() ?? "", f4 = s4[m4.assetGroupId]?.assetGroupCode?.toString(), T2 = s4[m4.assetTypeId], g2 = T2?.assetTypeCode?.toString(), v = e4[p4] ?? {
            assetGroupHash: {}
          };
          if (!(d5 && y3 && f4 && g2)) continue;
          const I2 = v.assetGroupHash[d5] ?? {
            assetTypeHash: {}
          }, S4 = I2.assetTypeHash[y3] ?? {};
          if (S4[h2] = S4[h2] ?? {}, c4) {
            S4[p4] = S4[p4] ?? {};
            const e5 = `(assetgroup = ${d5} AND assettype = ${y3})`;
            S4[p4].anyVertex = S4[p4].anyVertex ? `${S4[p4].anyVertex}` : `${e5}`, "esriNECPEndVertex" === T2?.connectivityPolicy && (S4[p4].endVertex = S4[p4]?.endVertex ? `${S4[p4].endVertex}` : `${e5}`);
          }
          const C = `(assetgroup = ${f4} AND assettype = ${g2})`;
          S4[h2].anyVertex = S4[h2]?.anyVertex ? `${S4[h2].anyVertex} OR ${C}` : `${C}`, "esriNECPEndVertex" === T2?.connectivityPolicy && (S4[h2].endVertex = S4[h2]?.endVertex ? `${S4[h2].endVertex} OR ${C}` : `${C}`), I2.assetTypeHash[y3] = S4, v.assetGroupHash[d5] = I2, e4[p4] = v;
        }
      }
      this.rulesHash = e4;
    });
  }
};
e([y({
  constructOnly: true
})], a3.prototype, "layer", void 0), e([y({
  constructOnly: true
})], a3.prototype, "rules", void 0), e([y()], a3.prototype, "rulesHash", void 0), e([y()], a3.prototype, "rulesCategorized", void 0), e([y({
  constructOnly: true
})], a3.prototype, "request", void 0), a3 = e([a("esri.networks.RulesTable")], a3);
var c3 = a3;

// ../../../node_modules/@arcgis/core/networks/support/NetworkSystemLayers.js
var e3 = class extends S {
  constructor(r2) {
    super(r2), this.rulesTableId = null, this.rulesTableUrl = null, this.subnetworksTableId = null, this.subnetworksTableUrl = null, this.dirtyAreasLayerId = null, this.dirtyAreasLayerUrl = null, this.associationsTableId = null, this.associationsTableUrl = null;
  }
};
e([y({
  constructOnly: true
})], e3.prototype, "rulesTableId", void 0), e([y({
  constructOnly: true
})], e3.prototype, "rulesTableUrl", void 0), e([y({
  constructOnly: true
})], e3.prototype, "subnetworksTableId", void 0), e([y({
  constructOnly: true
})], e3.prototype, "subnetworksTableUrl", void 0), e([y({
  constructOnly: true
})], e3.prototype, "dirtyAreasLayerId", void 0), e([y({
  constructOnly: true
})], e3.prototype, "dirtyAreasLayerUrl", void 0), e([y({
  constructOnly: true
})], e3.prototype, "associationsTableId", void 0), e([y({
  constructOnly: true
})], e3.prototype, "associationsTableUrl", void 0), e3 = e([a("esri.networks.support.NetworkSystemLayers")], e3);
var l4 = e3;

// ../../../node_modules/@arcgis/core/networks/support/Terminal.js
var s3 = class extends f {
  constructor(r2) {
    super(r2), this.id = null, this.name = null;
  }
};
e([y({
  type: Number,
  json: {
    read: {
      source: "terminalId"
    },
    write: {
      target: "terminalId"
    }
  }
})], s3.prototype, "id", void 0), e([y({
  type: String,
  json: {
    read: {
      source: "terminalName"
    },
    write: {
      target: "terminalName"
    }
  }
})], s3.prototype, "name", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], s3.prototype, "isUpstreamTerminal", void 0), s3 = e([a("esri.networks.support.Terminal")], s3);
var p = s3;

// ../../../node_modules/@arcgis/core/networks/support/TerminalConfiguration.js
var a4 = new n2({
  esriUNTMBidirectional: "bidirectional",
  esriUNTMDirectional: "directional"
});
var n5 = class extends f {
  constructor(r2) {
    super(r2), this.defaultConfiguration = null, this.id = null, this.name = null, this.terminals = [], this.traversabilityModel = null;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], n5.prototype, "defaultConfiguration", void 0), e([y({
  type: Number,
  json: {
    read: {
      source: "terminalConfigurationId"
    },
    write: {
      target: "terminalConfigurationId"
    }
  }
})], n5.prototype, "id", void 0), e([y({
  type: String,
  json: {
    read: {
      source: "terminalConfigurationName"
    },
    write: {
      target: "terminalConfigurationName"
    }
  }
})], n5.prototype, "name", void 0), e([y({
  type: [p],
  json: {
    write: true
  }
})], n5.prototype, "terminals", void 0), e([y({
  type: a4.apiValues,
  json: {
    type: a4.jsonValues,
    read: a4.read,
    write: a4.write
  }
})], n5.prototype, "traversabilityModel", void 0), n5 = e([a("esri.networks.support.TerminalConfiguration")], n5);
var p2 = n5;

// ../../../node_modules/@arcgis/core/networks/support/TraceJobInfo.js
var m3 = i()({
  Pending: "job-waiting",
  InProgress: "job-executing",
  Completed: "job-succeeded"
});
var n6 = class extends a2 {
  constructor(t3) {
    super(t3), this.statusUrl = null, this.status = null, this.submissionTime = null, this.lastUpdatedTime = null, this._timer = void 0;
  }
  destroy() {
    clearInterval(this._timer);
  }
  checkJobStatus(t3) {
    return __async(this, null, function* () {
      const e4 = __spreadProps(__spreadValues({}, t3), {
        query: {
          f: "json"
        }
      }), {
        data: r2
      } = yield U(this.statusUrl, e4), o2 = r2.traceResults ? __spreadValues(__spreadValues({}, r2.traceResults), r2) : r2;
      return this.read(o2), this;
    });
  }
  waitForJobCompletion() {
    return __async(this, arguments, function* (t3 = {}) {
      const {
        interval: s4 = 1e3,
        statusCallback: e4
      } = t3;
      return new Promise((t4, o2) => {
        this._clearTimer();
        const i5 = setInterval(() => {
          this._timer || o2(u()), this.checkJobStatus().then((s5) => {
            const {
              status: r2
            } = s5;
            switch (this.status = r2, r2) {
              case "job-succeeded":
                this._clearTimer(), t4(this);
                break;
              case "job-waiting":
              case "job-executing":
                e4 && e4(this);
            }
          }, (t5) => {
            this._clearTimer(), o2(t5);
          });
        }, s4);
        this._timer = i5;
      });
    });
  }
  _clearTimer() {
    clearInterval(this._timer), this._timer = void 0;
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], n6.prototype, "statusUrl", void 0), e([o(m3)], n6.prototype, "status", void 0), e([y({
  type: Date,
  json: {
    type: Number,
    write: {
      writer: (t3, s4) => {
        s4.submissionTime = t3 ? t3.getTime() : null;
      }
    }
  }
})], n6.prototype, "submissionTime", void 0), e([y({
  type: Date,
  json: {
    type: Number,
    write: {
      writer: (t3, s4) => {
        s4.lastUpdatedTime = t3 ? t3.getTime() : null;
      }
    }
  }
})], n6.prototype, "lastUpdatedTime", void 0), n6 = e([a("esri.networks.support.TraceJobInfo")], n6);
var p3 = n6;

// ../../../node_modules/@arcgis/core/networks/UtilityNetwork.js
var f3 = class _this extends V {
  constructor(e4) {
    super(e4), this.sharedNamedTraceConfigurations = [], this.type = "utility";
  }
  get serviceTerritoryFeatureLayerId() {
    return this.dataElement?.serviceTerritoryFeatureLayerId ?? null;
  }
  get networkSystemLayers() {
    return new l4({
      rulesTableId: this.sourceJSON?.systemLayers.rulesTableId,
      rulesTableUrl: this.sourceJSON ? `${this.featureServiceUrl}/${this.sourceJSON?.systemLayers.rulesTableId}` : null,
      subnetworksTableId: this.sourceJSON?.systemLayers.subnetworksTableId,
      subnetworksTableUrl: this.sourceJSON ? `${this.featureServiceUrl}/${this.sourceJSON?.systemLayers.subnetworksTableId}` : null,
      dirtyAreasLayerId: this.sourceJSON?.systemLayers.dirtyAreasLayerId,
      dirtyAreasLayerUrl: this.sourceJSON ? `${this.featureServiceUrl}/${this.sourceJSON?.systemLayers.dirtyAreasLayerId}` : null,
      associationsTableId: this.sourceJSON?.systemLayers.associationsTableId,
      associationsTableUrl: this.sourceJSON ? `${this.featureServiceUrl}/${this.sourceJSON?.systemLayers.associationsTableId}` : null
    });
  }
  get terminalConfigurations() {
    return this.dataElement?.terminalConfigurations.map((e4) => p2.fromJSON(e4)) || [];
  }
  get domainNetworkNames() {
    return this.dataElement?.domainNetworks.map((e4) => e4.domainNetworkName) || [];
  }
  get _utilityLayerList() {
    const e4 = /* @__PURE__ */ new Set();
    return this.dataElement?.domainNetworks?.map((t3) => {
      t3.edgeSources.map((t4) => {
        e4.add(t4.layerId);
      }), t3.junctionSources.map((t4) => {
        e4.add(t4.layerId);
      });
    }), e4;
  }
  load(e4) {
    return __async(this, null, function* () {
      return this.addResolvingPromise(__superGet(_this.prototype, this, "load").call(this, e4)), this.addResolvingPromise(this._loadNamedTraceConfigurationsFromNetwork(e4)), this;
    });
  }
  getTerminalConfiguration(e4) {
    let t3 = null, r2 = null;
    const o2 = e4.layer;
    let s4 = null;
    if ("feature" === o2?.type) {
      if (s4 = o2.layerId, null === s4) return null;
    } else {
      if ("subtype-sublayer" !== o2?.type) return null;
      if (s4 = o2?.parent?.layerId ?? null, null === s4) return null;
    }
    const a5 = e4.attributes;
    if (null == a5) return null;
    for (const l5 of Object.keys(a5)) "ASSETGROUP" === l5.toUpperCase() && (t3 = e4.getAttribute(l5)), "ASSETTYPE" === l5.toUpperCase() && (r2 = e4.getAttribute(l5));
    if (!this.dataElement) return null;
    let i5 = null;
    const n7 = this.dataElement.domainNetworks;
    for (const l5 of n7) {
      const e5 = l5.junctionSources?.find((e6) => e6.layerId === s4);
      if (e5) {
        const o3 = e5.assetGroups?.find((e6) => e6.assetGroupCode === t3);
        if (o3) {
          const e6 = o3.assetTypes?.find((e7) => e7.assetTypeCode === r2);
          if (e6) {
            i5 = e6.terminalConfigurationId;
            break;
          }
        }
      }
    }
    if (null != i5) {
      const e5 = this.dataElement.terminalConfigurations, t4 = e5?.find((e6) => e6.terminalConfigurationId === i5);
      return t4 ? p2.fromJSON(t4) : null;
    }
    return null;
  }
  getTierNames(e4) {
    const t3 = this.dataElement?.domainNetworks.find((t4) => t4.domainNetworkName === e4);
    return t3?.tiers.map((e5) => e5.name) || [];
  }
  getRulesTable() {
    return __async(this, null, function* () {
      return this._sharedRulesTable || (this._sharedRulesTable = this._createRulesTable()), yield this._sharedRulesTable;
    });
  }
  isUtilityLayer(e4) {
    return this._utilityLayerList.has(e4.layerId) && (e4.url?.startsWith(this.featureServiceUrl) ?? false);
  }
  queryAssociations(e4) {
    return __async(this, null, function* () {
      const [{
        queryAssociations: t3
      }, {
        default: r2
      }] = yield Promise.all([import("./queryAssociations-CJRQLSH6.js"), import("./QueryAssociationsParameters-TLKWEMEU.js")]), o2 = r2.from(e4);
      o2.gdbVersion = this.gdbVersion, o2.moment = this.historicMoment;
      return (yield t3(this.networkServiceUrl, o2)).associations;
    });
  }
  synthesizeAssociationGeometries(e4) {
    return __async(this, null, function* () {
      const [{
        synthesizeAssociationGeometries: t3
      }, {
        default: r2
      }] = yield Promise.all([import("./synthesizeAssociationGeometries-JFDFLE4J.js"), import("./SynthesizeAssociationGeometriesParameters-PBU2OJMB.js")]), o2 = r2.from(e4);
      return o2.gdbVersion = this.gdbVersion, o2.moment = this.historicMoment, t3(this.networkServiceUrl, o2);
    });
  }
  trace(e4) {
    return __async(this, null, function* () {
      const [{
        trace: t3
      }, {
        default: r2
      }] = yield Promise.all([import("./trace-KR7WWBFC.js"), import("./TraceParameters-4JMOK53J.js")]), o2 = r2.from(e4);
      return o2.gdbVersion = this.gdbVersion, o2.moment = this.historicMoment, t3(this.networkServiceUrl, o2);
    });
  }
  submitTraceJob(e4) {
    return __async(this, null, function* () {
      const [{
        submitTraceJob: t3
      }, {
        default: r2
      }] = yield Promise.all([import("./trace-KR7WWBFC.js"), import("./TraceParameters-4JMOK53J.js")]), o2 = r2.from(e4);
      o2.gdbVersion = this.gdbVersion, o2.moment = this.historicMoment;
      const s4 = yield t3(this.networkServiceUrl, o2);
      return new p3({
        statusUrl: s4
      });
    });
  }
  canAddAssociation(e4) {
    return __async(this, null, function* () {
      const t3 = yield this.getRulesTable();
      if (!t3) return false;
      yield t3.load();
      const r2 = (e5, t4) => e5 ? 1 === e5.terminalId ? !t4?.terminalId || t4?.terminalId === e5.terminalId : e5.terminalId === t4?.terminalId : !t4?.terminalId, o2 = (e5, t4) => e5.fromNetworkSource?.sourceId === t4.fromNetworkElement?.networkSourceId && e5.toNetworkSource?.sourceId === t4.toNetworkElement?.networkSourceId && e5.fromAssetGroup?.assetGroupCode === t4.fromNetworkElement?.assetGroupCode && e5.fromAssetType?.assetTypeCode === t4.fromNetworkElement?.assetTypeCode && e5.toAssetGroup?.assetGroupCode === t4.toNetworkElement?.assetGroupCode && e5.toAssetType?.assetTypeCode === t4.toNetworkElement?.assetTypeCode && r2(e5.fromTerminal, t4.fromNetworkElement) && r2(e5.toTerminal, t4.toNetworkElement);
      if ("containment" === e4.associationType) {
        return t3.rulesCategorized.containment.some((t4) => o2(t4, e4));
      }
      if ("attachment" === e4.associationType) {
        return t3.rulesCategorized.attachment.some((t4) => o2(t4, e4));
      }
      return t3.rulesCategorized.connectivity.some((t4) => t4.viaNetworkSource ? t4.fromNetworkSource?.sourceId === e4.fromNetworkElement?.networkSourceId && t4.viaNetworkSource?.sourceId === e4.toNetworkElement?.networkSourceId && t4.fromAssetGroup?.assetGroupCode === e4.fromNetworkElement?.assetGroupCode && t4.fromAssetType?.assetTypeCode === e4.fromNetworkElement?.assetTypeCode && t4.viaAssetGroup?.assetGroupCode === e4.toNetworkElement?.assetGroupCode && t4.viaAssetType?.assetTypeCode === e4.toNetworkElement?.assetTypeCode && r2(t4.fromTerminal, e4.fromNetworkElement) && r2(t4.viaTerminal, e4.toNetworkElement) || t4.viaNetworkSource?.sourceId === e4.fromNetworkElement?.networkSourceId && t4.toNetworkSource?.sourceId === e4.toNetworkElement?.networkSourceId && t4.viaAssetGroup?.assetGroupCode === e4.fromNetworkElement?.assetGroupCode && t4.viaAssetType?.assetTypeCode === e4.fromNetworkElement?.assetTypeCode && t4.toAssetGroup?.assetGroupCode === e4.toNetworkElement?.assetGroupCode && t4.toAssetType?.assetTypeCode === e4.toNetworkElement?.assetTypeCode && r2(t4.viaTerminal, e4.fromNetworkElement) && r2(t4.toTerminal, e4.toNetworkElement) : o2(t4, e4));
    });
  }
  generateAddAssociations(e4) {
    return {
      addFeatures: e4.map((e5) => new d2({
        attributes: {
          fromnetworksourceid: e5.fromNetworkElement?.networkSourceId,
          fromglobalid: e5.fromNetworkElement?.globalId,
          fromterminalid: e5.fromNetworkElement?.terminalId,
          tonetworksourceid: e5.toNetworkElement?.networkSourceId,
          toglobalid: e5.toNetworkElement?.globalId,
          toterminalid: e5.toNetworkElement?.terminalId,
          associationtype: e2[e5.associationType],
          iscontentvisible: e5.isContentVisible ? 1 : 0,
          percentalong: e5.percentAlong,
          globalid: e5.globalId
        }
      })),
      id: this.networkSystemLayers.associationsTableId,
      identifierFields: {
        globalIdField: "globalid",
        objectIdField: "objectid"
      }
    };
  }
  generateDeleteAssociations(e4) {
    return {
      deleteFeatures: e4.map((e5) => ({
        globalId: e5.globalId
      })),
      id: this.networkSystemLayers.associationsTableId,
      identifierFields: {
        globalIdField: "globalid",
        objectIdField: "objectid"
      }
    };
  }
  _loadNamedTraceConfigurationsFromNetwork(e4) {
    return __async(this, null, function* () {
      if (0 === this.sharedNamedTraceConfigurations?.length) return;
      const t3 = this.sharedNamedTraceConfigurations.map((e5) => e5.globalId), r2 = yield this.queryNamedTraceConfigurations({
        globalIds: t3
      }, e4);
      for (const o2 of this.sharedNamedTraceConfigurations) {
        const e5 = r2?.find((e6) => e6.globalId === o2.globalId);
        if (e5) {
          const t4 = e5.write({}, {
            origin: "service"
          });
          o2.read(t4, {
            origin: "service"
          });
        }
      }
    });
  }
  _createRulesTable() {
    return __async(this, null, function* () {
      const e4 = this.networkSystemLayers.rulesTableUrl, t3 = new Ze({
        url: e4
      });
      yield t3.load();
      const r2 = this.dataElement?.domainNetworks;
      if (!r2) return null;
      const o2 = r2.flatMap((e5) => [...e5.edgeSources || [], ...e5.junctionSources || []]), a5 = (yield w2(t3)).map((e5) => this._hydrateRuleInfo(t3, o2, e5));
      return new c3({
        layer: t3,
        rules: a5
      });
    });
  }
  _hydrateRuleInfo(e4, t3, r2) {
    const o2 = e4.fieldsIndex, s4 = o2.get("RULETYPE"), a5 = o2.get("CREATIONDATE"), i5 = o2.get("FROMNETWORKSOURCEID"), n7 = o2.get("FROMASSETGROUP"), l5 = o2.get("FROMASSETTYPE"), u3 = o2.get("FROMTERMINALID"), m4 = o2.get("TONETWORKSOURCEID"), d5 = o2.get("TOASSETGROUP"), c4 = o2.get("TOASSETTYPE"), y3 = o2.get("TOTERMINALID"), f4 = o2.get("VIANETWORKSOURCEID"), w3 = o2.get("VIAASSETGROUP"), T2 = o2.get("VIAASSETTYPE"), I2 = o2.get("VIATERMINALID"), g2 = r2.attributes[s4.name], k2 = new Date(r2.attributes[a5.name]), b3 = [{
      networkSourceId: r2.attributes[i5.name],
      assetGroupId: r2.attributes[n7.name],
      assetTypeId: r2.attributes[l5.name],
      terminalId: r2.attributes[u3.name]
    }, {
      networkSourceId: r2.attributes[m4.name],
      assetGroupId: r2.attributes[d5.name],
      assetTypeId: r2.attributes[c4.name],
      terminalId: r2.attributes[y3.name]
    }, {
      networkSourceId: r2.attributes[f4.name],
      assetGroupId: r2.attributes[w3.name],
      assetTypeId: r2.attributes[T2.name],
      terminalId: r2.attributes[I2.name]
    }];
    let h2;
    !function(e5) {
      e5[e5.from = 0] = "from", e5[e5.to = 1] = "to", e5[e5.via = 2] = "via";
    }(h2 || (h2 = {}));
    const N2 = {
      ruleType: g2,
      creationDate: k2
    };
    for (const S4 of [h2.from, h2.to, h2.via]) {
      if (g2 !== t2.RTEdgeJunctionEdgeConnectivity && S4 === h2.via) continue;
      const e5 = b3[S4], r3 = t3.find((t4) => t4.sourceId === e5.networkSourceId), o3 = r3?.assetGroups.find((t4) => t4.assetGroupCode === e5.assetGroupId), s5 = o3?.assetTypes.find((t4) => t4.assetTypeCode === e5.assetTypeId), a6 = this._getTerminal(s5, e5);
      let i6 = "";
      switch (S4) {
        case h2.from:
          i6 = "from";
          break;
        case h2.to:
          i6 = "to";
          break;
        case h2.via:
          i6 = "via";
      }
      N2[`${i6}NetworkSource`] = r3, N2[`${i6}AssetGroup`] = o3, N2[`${i6}AssetType`] = s5, N2[`${i6}Terminal`] = a6?.toJSON();
    }
    return N2;
  }
  _getTerminal(e4, t3) {
    const r2 = e4?.terminalConfigurationId, o2 = this.terminalConfigurations?.find((e5) => e5.id === r2);
    return o2?.terminals?.find((e5) => e5.id === t3.terminalId) ?? null;
  }
};
function w2(e4) {
  return __async(this, null, function* () {
    const t3 = new b2({
      where: "1=1",
      outFields: ["*"]
    });
    return (yield r(e4, t3)).features;
  });
}
e([y({
  type: [d4],
  json: {
    origins: {
      "web-map": {
        read: {
          source: "traceConfigurations"
        },
        write: {
          target: "traceConfigurations"
        }
      },
      service: {
        read: {
          source: "traceConfigurations"
        }
      }
    },
    read: false
  }
})], f3.prototype, "sharedNamedTraceConfigurations", void 0), e([y({
  type: ["utility"],
  readOnly: true,
  json: {
    read: false,
    write: false
  }
})], f3.prototype, "type", void 0), e([y({
  readOnly: true
})], f3.prototype, "serviceTerritoryFeatureLayerId", null), e([y({
  readOnly: true
})], f3.prototype, "networkSystemLayers", null), e([y({
  readOnly: true
})], f3.prototype, "terminalConfigurations", null), e([y({
  readOnly: true
})], f3.prototype, "domainNetworkNames", null), f3 = e([a("esri.networks.UtilityNetwork")], f3);
var T = f3;

export {
  n4 as n,
  s2 as s,
  T
};
//# sourceMappingURL=chunk-IFHCRMMI.js.map
