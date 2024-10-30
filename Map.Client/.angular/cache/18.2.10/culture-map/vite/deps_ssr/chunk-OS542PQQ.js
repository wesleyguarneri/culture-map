import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  v,
  w
} from "./chunk-3B5GODXR.js";
import {
  a as a2
} from "./chunk-NKXXHQDD.js";
import {
  c
} from "./chunk-DC5LRNPY.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  Z
} from "./chunk-XLEC46FY.js";
import {
  d,
  g
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  N,
  _,
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/mixins/operationalLayers.js
var e2 = {
  ArcGISAnnotationLayer: true,
  ArcGISDimensionLayer: true,
  ArcGISFeatureLayer: true,
  ArcGISImageServiceLayer: true,
  ArcGISImageServiceVectorLayer: true,
  ArcGISMapServiceLayer: true,
  ArcGISStreamLayer: true,
  ArcGISTiledImageServiceLayer: true,
  ArcGISTiledMapServiceLayer: true,
  BingMapsAerial: true,
  BingMapsHybrid: true,
  BingMapsRoad: true,
  CatalogLayer: true,
  CSV: true,
  GeoJSON: true,
  GeoRSS: true,
  GroupLayer: true,
  KML: true,
  KnowledgeGraphLayer: true,
  MediaLayer: true,
  OGCFeatureLayer: true,
  OrientedImageryLayer: true,
  SubtypeGroupLayer: true,
  VectorTileLayer: true,
  WFS: true,
  WMS: true,
  WebTiledLayer: true
};
var r2 = {
  ArcGISImageServiceLayer: true,
  ArcGISImageServiceVectorLayer: true,
  ArcGISMapServiceLayer: true,
  ArcGISTiledImageServiceLayer: true,
  ArcGISTiledMapServiceLayer: true,
  BingMapsAerial: true,
  BingMapsHybrid: true,
  BingMapsRoad: true,
  OpenStreetMap: true,
  VectorTileLayer: true,
  WMS: true,
  WebTiledLayer: true
};
var a3 = {
  ArcGISFeatureLayer: true,
  SubtypeGroupTable: true
};
var i = {
  "web-scene/operational-layers": {
    ArcGISDimensionLayer: true,
    ArcGISFeatureLayer: true,
    ArcGISImageServiceLayer: true,
    ArcGISMapServiceLayer: true,
    ArcGISSceneServiceLayer: true,
    ArcGISTiledElevationServiceLayer: true,
    ArcGISTiledImageServiceLayer: true,
    ArcGISTiledMapServiceLayer: true,
    BuildingSceneLayer: true,
    CatalogLayer: true,
    CSV: true,
    GeoJSON: true,
    GroupLayer: true,
    IntegratedMesh3DTilesLayer: true,
    IntegratedMeshLayer: true,
    KML: true,
    LineOfSightLayer: true,
    MediaLayer: true,
    OGCFeatureLayer: true,
    PointCloudLayer: true,
    RasterDataLayer: true,
    VectorTileLayer: true,
    Voxel: true,
    WFS: true,
    WMS: true,
    WebTiledLayer: true
  },
  "web-scene/basemap": {
    ArcGISImageServiceLayer: true,
    ArcGISMapServiceLayer: true,
    ArcGISSceneServiceLayer: true,
    ArcGISTiledImageServiceLayer: true,
    ArcGISTiledMapServiceLayer: true,
    OpenStreetMap: true,
    VectorTileLayer: true,
    WMS: true,
    WebTiledLayer: true
  },
  "web-scene/ground": {
    ArcGISTiledElevationServiceLayer: true,
    RasterDataElevationLayer: true
  },
  "web-scene/tables": {
    ArcGISFeatureLayer: true
  },
  "web-map/operational-layers": e2,
  "web-map/basemap": r2,
  "web-map/tables": a3,
  "link-chart/operational-layers": __spreadProps(__spreadValues({}, e2), {
    LinkChartLayer: true
  }),
  "link-chart/basemap": r2,
  "link-chart/tables": a3,
  "portal-item/operational-layers": {
    ArcGISFeatureLayer: true,
    ArcGISImageServiceLayer: true,
    ArcGISSceneServiceLayer: true,
    ArcGISStreamLayer: true,
    ArcGISTiledImageServiceLayer: true,
    BuildingSceneLayer: true,
    IntegratedMesh3DTilesLayer: true,
    IntegratedMeshLayer: true,
    MediaLayer: true,
    OrientedImageryLayer: true,
    PointCloudLayer: true,
    SubtypeGroupLayer: true
  }
};

// ../../../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js
var b = (b2) => {
  let T = class extends b2 {
    constructor() {
      super(...arguments), this.persistenceEnabled = true, this.title = null;
    }
    readId(e3, r3, t) {
      return "Group Layer" === t?.portalItem?.type ? void 0 : e3;
    }
    writeListMode(e3, r3, t, i2) {
      (i2 && "ground" === i2.layerContainerType || e3 && g(this, t, {}, i2)) && (r3[t] = e3);
    }
    writeOperationalLayerType(e3, r3, t, i2) {
      e3 && "tables" !== i2?.layerContainerType && (r3.layerType = e3);
    }
    writeTitle(e3, r3) {
      r3.title = e3 ?? "Layer";
    }
    readTimeExtent(e3) {
      return e3 ? c.fromArray(e3) : null;
    }
    writeTimeExtent(e3, r3, i2, o2) {
      e3 && "tables" !== o2.layerContainerType && (e3.isEmpty ? o2?.messages && o2.messages.push(new s("layer:invalid-visibilityTimeExtent", "visibilityTimeExtent cannot be empty")) : r3[i2] = e3.toArray());
    }
    read(e3, r3) {
      r3 && (r3.layer = this), d(this, e3, (r4) => super.read(e3, r4), r3);
    }
    write(e3, r3) {
      if (!this.persistenceEnabled && !r3?.ignorePersistenceEnabled) return null;
      if (r3?.origin) {
        const e4 = `${r3.origin}/${r3.layerContainerType || "operational-layers"}`, i2 = i[e4];
        let o3 = !!i2?.[this.operationalLayerType];
        if ("ArcGISTiledElevationServiceLayer" === this.operationalLayerType && "web-scene/operational-layers" === e4 && (o3 = false), "ArcGISDimensionLayer" === this.operationalLayerType && "web-map/operational-layers" === e4 && (o3 = false), !o3) return r3.messages?.push(new s("layer:unsupported", `Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e4}'`, {
          layer: this
        })), null;
      }
      const o2 = super.write(e3, __spreadProps(__spreadValues({}, r3), {
        layer: this
      })), s2 = !!r3 && !!r3.messages && !!r3.messages.filter((e4) => e4 instanceof s && "web-document-write:property-required" === e4.name).length;
      return Z(o2?.url) ? (r3?.messages?.push(new s("layer:invalid-url", `Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`, {
        layer: this
      })), null) : !this.url && s2 ? null : o2;
    }
    beforeSave() {
    }
  };
  return e([y({
    type: String,
    json: {
      write: {
        ignoreOrigin: true
      },
      origins: {
        "web-scene": {
          write: {
            isRequired: true,
            ignoreOrigin: true
          }
        },
        "portal-item": {
          write: false
        }
      }
    }
  })], T.prototype, "id", void 0), e([o("id", ["id"])], T.prototype, "readId", null), e([y(v)], T.prototype, "listMode", void 0), e([r("listMode")], T.prototype, "writeListMode", null), e([y({
    type: String,
    readOnly: true,
    json: {
      read: false,
      write: {
        target: "layerType",
        ignoreOrigin: true
      },
      origins: {
        "portal-item": {
          write: false
        },
        "web-scene": {
          name: "layerType",
          read: false,
          write: {
            enabled: true,
            ignoreOrigin: true,
            layerContainerTypes: a2
          }
        }
      }
    }
  })], T.prototype, "operationalLayerType", void 0), e([r("operationalLayerType")], T.prototype, "writeOperationalLayerType", null), e([y(w)], T.prototype, "opacity", void 0), e([y({
    type: Boolean,
    readOnly: false
  })], T.prototype, "persistenceEnabled", void 0), e([y({
    type: String,
    json: {
      write: {
        ignoreOrigin: true,
        writerEnsuresNonNull: true
      },
      origins: {
        "web-scene": {
          write: {
            isRequired: true,
            ignoreOrigin: true,
            writerEnsuresNonNull: true
          }
        },
        "portal-item": {
          write: false
        }
      }
    },
    value: "Layer"
  })], T.prototype, "title", void 0), e([r("title"), r(["web-scene"], "title")], T.prototype, "writeTitle", null), e([y({
    type: c,
    json: {
      origins: {
        "web-scene": {
          write: {
            layerContainerTypes: a2
          }
        }
      }
    }
  })], T.prototype, "visibilityTimeExtent", void 0), e([o("visibilityTimeExtent")], T.prototype, "readTimeExtent", null), e([r(["portal-item", "web-map", "web-scene"], "visibilityTimeExtent", {
    visibilityTimeExtent: {
      type: [[N, _]]
    }
  })], T.prototype, "writeTimeExtent", null), e([y({
    type: Boolean,
    json: {
      origins: {
        "web-scene": {
          name: "visibility",
          write: {
            enabled: true,
            layerContainerTypes: a2
          }
        }
      },
      name: "visibility",
      write: true
    }
  })], T.prototype, "visible", void 0), T = e([a("esri.layers.mixins.OperationalLayer")], T), T;
};

export {
  b
};
//# sourceMappingURL=chunk-OS542PQQ.js.map
