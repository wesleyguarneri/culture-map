import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s as s4
} from "./chunk-QMJ2OQSU.js";
import {
  n as n4,
  p as p3
} from "./chunk-VENH3UKS.js";
import {
  a as a2,
  m as m3,
  p,
  y as y2
} from "./chunk-AS4KZK4Y.js";
import {
  r
} from "./chunk-IZJSB4V4.js";
import {
  Ze
} from "./chunk-FJ3AI2QH.js";
import {
  s as s5
} from "./chunk-GLFGRGCP.js";
import {
  p as p2
} from "./chunk-UGFQYEND.js";
import {
  u
} from "./chunk-KXVPQVTB.js";
import {
  $
} from "./chunk-ZWAQV54Z.js";
import {
  b
} from "./chunk-ORYC4PVJ.js";
import {
  Z
} from "./chunk-5R3HARKC.js";
import {
  d
} from "./chunk-NVOJILW6.js";
import {
  k
} from "./chunk-KYPTWEOO.js";
import {
  o as o2
} from "./chunk-6EIBUVMG.js";
import {
  c,
  s as s3
} from "./chunk-3B5GODXR.js";
import {
  m as m2
} from "./chunk-7TBQUMV3.js";
import {
  h
} from "./chunk-BGLJ2FAH.js";
import {
  s as s2
} from "./chunk-ASCK5HJ5.js";
import {
  x
} from "./chunk-I2TVVMQ6.js";
import {
  m
} from "./chunk-4L4Y34YK.js";
import {
  n as n3
} from "./chunk-2HDBQXAR.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  n as n2
} from "./chunk-Y2HYKTTT.js";
import {
  U
} from "./chunk-XLEC46FY.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  N,
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/buildingSublayers/BuildingSublayer.js
var n5 = class extends s2(m2) {
  constructor(e2) {
    super(e2), this.title = "", this.id = -1, this.modelName = null, this.isEmpty = null, this.legendEnabled = true, this.visible = true, this.opacity = 1;
  }
  readTitle(e2, o3) {
    return "string" == typeof o3.alias ? o3.alias : "string" == typeof o3.name ? o3.name : "";
  }
  readIdOnlyOnce(e2) {
    return -1 !== this.id ? this.id : "number" == typeof e2 ? e2 : -1;
  }
};
e([y({
  type: String,
  json: {
    origins: {
      "web-scene": {
        write: true
      },
      "portal-item": {
        write: true
      }
    }
  }
})], n5.prototype, "title", void 0), e([o("service", "title", ["alias", "name"])], n5.prototype, "readTitle", null), e([y()], n5.prototype, "layer", void 0), e([y({
  type: N,
  readOnly: true,
  json: {
    read: false,
    write: {
      ignoreOrigin: true
    }
  }
})], n5.prototype, "id", void 0), e([o("service", "id")], n5.prototype, "readIdOnlyOnce", null), e([y(c(String))], n5.prototype, "modelName", void 0), e([y(c(Boolean))], n5.prototype, "isEmpty", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], n5.prototype, "legendEnabled", void 0), e([y({
  type: Boolean,
  json: {
    name: "visibility",
    write: true
  }
})], n5.prototype, "visible", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], n5.prototype, "opacity", void 0), n5 = e([a("esri.layers.buildingSublayers.BuildingSublayer")], n5);
var a3 = n5;

// ../../../node_modules/@arcgis/core/layers/buildingSublayers/BuildingComponentSublayer.js
var Q = s5();
var E = class extends m.LoadableMixin(n3(a3)) {
  constructor(e2) {
    super(e2), this.type = "building-component", this.nodePages = null, this.materialDefinitions = [], this.textureSetDefinitions = [], this.geometryDefinitions = [], this.indexInfo = null, this.serviceUpdateTimeStamp = null, this.store = null, this.attributeStorageInfo = [], this.fields = [], this.associatedLayer = null, this.outFields = null, this.listMode = "show", this.renderer = null, this.definitionExpression = null, this.popupEnabled = true, this.popupTemplate = null, this.layerType = "3d-object";
  }
  get parsedUrl() {
    return this.layer ? {
      path: `${this.layer.parsedUrl?.path}/sublayers/${this.id}`,
      query: this.layer.parsedUrl?.query
    } : {
      path: ""
    };
  }
  get fieldsIndex() {
    return new Z(this.fields);
  }
  readAssociatedLayer(e2, t) {
    const r2 = this.layer.associatedFeatureServiceItem, o3 = t.associatedLayerID;
    return null != r2 && "number" == typeof o3 ? new Ze({
      portalItem: r2,
      customParameters: this.customParameters,
      layerId: o3
    }) : null;
  }
  get objectIdField() {
    if (null != this.fields) {
      for (const e2 of this.fields) if ("oid" === e2.type) return e2.name;
    }
    return null;
  }
  get displayField() {
    return null != this.associatedLayer ? this.associatedLayer.displayField : void 0;
  }
  get apiKey() {
    return this.layer.apiKey;
  }
  get customParameters() {
    return this.layer.customParameters;
  }
  get fullExtent() {
    return this.layer.fullExtent;
  }
  get spatialReference() {
    return this.layer.spatialReference;
  }
  get version() {
    return this.layer.version;
  }
  get elevationInfo() {
    return this.layer.elevationInfo;
  }
  get minScale() {
    return this.layer.minScale;
  }
  get maxScale() {
    return this.layer.maxScale;
  }
  get effectiveScaleRange() {
    return this.layer.effectiveScaleRange;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  load(e2) {
    const t = null != e2 ? e2.signal : null, r2 = this._fetchService(t).then(() => {
      this.indexInfo = r(this.parsedUrl.path, this.rootNode, this.nodePages, this.customParameters, this.apiKey, n.getLogger(this), t);
    });
    return this.addResolvingPromise(r2), Promise.resolve(this);
  }
  createPopupTemplate(e2) {
    return p2(this, e2);
  }
  _fetchService(e2) {
    return __async(this, null, function* () {
      const t = (yield U(this.parsedUrl.path, {
        query: __spreadProps(__spreadValues({
          f: "json"
        }, this.customParameters), {
          token: this.apiKey
        }),
        responseType: "json",
        signal: e2
      })).data;
      this.read(t, {
        origin: "service",
        url: this.parsedUrl
      });
    });
  }
  getField(e2) {
    return this.fieldsIndex.get(e2);
  }
  getFieldDomain(e2, t) {
    const r2 = this.getFeatureType(t?.feature)?.domains?.[e2];
    return r2 && "inherited" !== r2.type ? r2 : this.getField(e2)?.domain ?? null;
  }
  getFeatureType(e2) {
    return e2 && null != this.associatedLayer ? this.associatedLayer.getFeatureType(e2) : null;
  }
  get types() {
    return null != this.associatedLayer ? this.associatedLayer.types ?? [] : [];
  }
  get typeIdField() {
    return null != this.associatedLayer ? this.associatedLayer.typeIdField : null;
  }
  get geometryType() {
    return "3d-object" === this.layerType ? "mesh" : "point";
  }
  get profile() {
    return "3d-object" === this.layerType ? "mesh-pyramids" : "points";
  }
  get capabilities() {
    const e2 = null != this.associatedLayer && this.associatedLayer.capabilities ? this.associatedLayer.capabilities : s4, {
      query: t,
      data: {
        supportsZ: r2,
        supportsM: o3,
        isVersioned: s6
      }
    } = e2;
    return {
      query: t,
      data: {
        supportsZ: r2,
        supportsM: o3,
        isVersioned: s6
      }
    };
  }
  createQuery() {
    const e2 = new b();
    return "mesh" !== this.geometryType && (e2.returnGeometry = true, e2.returnZ = true), e2.where = this.definitionExpression || "1=1", e2.sqlFormat = "standard", e2;
  }
  queryExtent(e2, t) {
    return this._getAssociatedLayerForQuery().then((r2) => r2.queryExtent(e2 || this.createQuery(), t));
  }
  queryFeatureCount(e2, t) {
    return this._getAssociatedLayerForQuery().then((r2) => r2.queryFeatureCount(e2 || this.createQuery(), t));
  }
  queryFeatures(e2, t) {
    return this._getAssociatedLayerForQuery().then((r2) => r2.queryFeatures(e2 || this.createQuery(), t)).then((e3) => {
      if (e3?.features) for (const t2 of e3.features) t2.layer = this.layer, t2.sourceLayer = this;
      return e3;
    });
  }
  queryObjectIds(e2, t) {
    return this._getAssociatedLayerForQuery().then((r2) => r2.queryObjectIds(e2 || this.createQuery(), t));
  }
  queryCachedAttributes(e2, t) {
    return __async(this, null, function* () {
      const r2 = x(this.fieldsIndex, yield n4(this, p3(this)));
      return $(this.parsedUrl.path, this.attributeStorageInfo, e2, t, r2, this.apiKey, this.customParameters);
    });
  }
  queryCachedFeature(e2, r2) {
    return __async(this, null, function* () {
      const o3 = yield this.queryCachedAttributes(e2, [r2]);
      if (!o3 || 0 === o3.length) throw new s("scenelayer:feature-not-in-cached-data", "Feature not found in cached data");
      return new d({
        attributes: o3[0],
        layer: this,
        sourceLayer: this
      });
    });
  }
  getFieldUsageInfo(e2) {
    return this.fieldsIndex.has(e2) ? {
      supportsLabelingInfo: false,
      supportsRenderer: false,
      supportsPopupTemplate: false,
      supportsLayerQuery: false
    } : {
      supportsLabelingInfo: false,
      supportsRenderer: true,
      supportsPopupTemplate: true,
      supportsLayerQuery: null != this.associatedLayer
    };
  }
  _getAssociatedLayerForQuery() {
    const e2 = this.associatedLayer;
    return null != e2 && e2.loaded ? Promise.resolve(e2) : this._loadAssociatedLayerForQuery();
  }
  _loadAssociatedLayerForQuery() {
    return __async(this, null, function* () {
      if (yield this.load(), null == this.associatedLayer) throw new s("buildingscenelayer:query-not-available", "BuildingSceneLayer component layer queries are not available without an associated feature layer", {
        layer: this
      });
      try {
        yield this.associatedLayer.load();
      } catch (e2) {
        throw new s("buildingscenelayer:query-not-available", "BuildingSceneLayer associated feature layer could not be loaded", {
          layer: this,
          error: e2
        });
      }
      return this.associatedLayer;
    });
  }
};
e([y({
  readOnly: true
})], E.prototype, "parsedUrl", null), e([y({
  type: p,
  readOnly: true
})], E.prototype, "nodePages", void 0), e([y({
  type: [a2],
  readOnly: true
})], E.prototype, "materialDefinitions", void 0), e([y({
  type: [y2],
  readOnly: true
})], E.prototype, "textureSetDefinitions", void 0), e([y({
  type: [m3],
  readOnly: true
})], E.prototype, "geometryDefinitions", void 0), e([y({
  readOnly: true
})], E.prototype, "serviceUpdateTimeStamp", void 0), e([y({
  readOnly: true
})], E.prototype, "store", void 0), e([y({
  type: String,
  readOnly: true,
  json: {
    read: {
      source: "store.rootNode"
    }
  }
})], E.prototype, "rootNode", void 0), e([y({
  readOnly: true
})], E.prototype, "attributeStorageInfo", void 0), e([y(Q.fields)], E.prototype, "fields", void 0), e([y({
  readOnly: true
})], E.prototype, "fieldsIndex", null), e([y({
  readOnly: true,
  type: Ze
})], E.prototype, "associatedLayer", void 0), e([o("service", "associatedLayer", ["associatedLayerID"])], E.prototype, "readAssociatedLayer", null), e([y(Q.outFields)], E.prototype, "outFields", void 0), e([y({
  type: String,
  readOnly: true
})], E.prototype, "objectIdField", null), e([y({
  readOnly: true,
  type: String,
  json: {
    read: false
  }
})], E.prototype, "displayField", null), e([y({
  readOnly: true,
  type: String
})], E.prototype, "apiKey", null), e([y({
  readOnly: true,
  type: String
})], E.prototype, "customParameters", null), e([y({
  readOnly: true,
  type: w
})], E.prototype, "fullExtent", null), e([y({
  readOnly: true,
  type: f
})], E.prototype, "spatialReference", null), e([y({
  readOnly: true
})], E.prototype, "version", null), e([y({
  readOnly: true,
  type: h
})], E.prototype, "elevationInfo", null), e([y({
  readOnly: true,
  type: Number
})], E.prototype, "minScale", null), e([y({
  readOnly: true,
  type: Number
})], E.prototype, "maxScale", null), e([y({
  readOnly: true,
  type: Number
})], E.prototype, "effectiveScaleRange", null), e([y({
  type: ["hide", "show"],
  json: {
    write: true
  }
})], E.prototype, "listMode", void 0), e([y({
  types: u,
  json: {
    origins: {
      service: {
        read: {
          source: "drawingInfo.renderer"
        }
      }
    },
    name: "layerDefinition.drawingInfo.renderer",
    write: true
  },
  value: null
})], E.prototype, "renderer", void 0), e([y({
  type: String,
  json: {
    origins: {
      service: {
        read: false,
        write: false
      }
    },
    name: "layerDefinition.definitionExpression",
    write: {
      enabled: true,
      allowNull: true
    }
  }
})], E.prototype, "definitionExpression", void 0), e([y(s3)], E.prototype, "popupEnabled", void 0), e([y({
  type: k,
  json: {
    read: {
      source: "popupInfo"
    },
    write: {
      target: "popupInfo"
    }
  }
})], E.prototype, "popupTemplate", void 0), e([y({
  readOnly: true,
  type: String,
  json: {
    origins: {
      service: {
        read: {
          source: "store.normalReferenceFrame"
        }
      }
    },
    read: false
  }
})], E.prototype, "normalReferenceFrame", void 0), e([y({
  readOnly: true,
  json: {
    read: false
  }
})], E.prototype, "defaultPopupTemplate", null), e([y()], E.prototype, "types", null), e([y()], E.prototype, "typeIdField", null), e([y({
  json: {
    write: false
  }
}), o2(new n2({
  "3DObject": "3d-object",
  Point: "point"
}))], E.prototype, "layerType", void 0), e([y()], E.prototype, "geometryType", null), e([y()], E.prototype, "profile", null), e([y({
  readOnly: true,
  json: {
    read: false
  }
})], E.prototype, "capabilities", null), e([y({
  readOnly: true
})], E.prototype, "statisticsInfo", void 0), E = e([a("esri.layers.buildingSublayers.BuildingComponentSublayer")], E);
var A = E;

export {
  a3 as a,
  A
};
//# sourceMappingURL=chunk-5O46LCZR.js.map
