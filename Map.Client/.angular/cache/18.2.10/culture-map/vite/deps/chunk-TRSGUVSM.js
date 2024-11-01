import {
  i
} from "./chunk-U3MA63JX.js";
import {
  K
} from "./chunk-WYKKCLBI.js";
import {
  c
} from "./chunk-DR5TVNEL.js";
import {
  n as n2
} from "./chunk-GAW5JHG4.js";
import {
  y as y2
} from "./chunk-S3IO7V4Q.js";
import {
  o
} from "./chunk-4ZZRP4MA.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  _
} from "./chunk-O7UDKFOW.js";
import {
  f as f2
} from "./chunk-TKPMIAIW.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import {
  s
} from "./chunk-NKCPFCP3.js";
import {
  n
} from "./chunk-V5C6HSAM.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a2,
  g2 as g
} from "./chunk-DDYVXG4F.js";
import {
  a
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/rest/support/QuantizationParameters.js
var n3;
var c2 = new n({
  upperLeft: "upper-left",
  lowerLeft: "lower-left"
});
var m = n3 = class extends f {
  constructor(e2) {
    super(e2), this.extent = null, this.mode = "view", this.originPosition = "upper-left", this.tolerance = 1;
  }
  clone() {
    return new n3(a({
      extent: this.extent,
      mode: this.mode,
      originPosition: this.originPosition,
      tolerance: this.tolerance
    }));
  }
};
e([y({
  type: w,
  json: {
    write: {
      overridePolicy() {
        return {
          enabled: "view" === this.mode
        };
      }
    }
  }
})], m.prototype, "extent", void 0), e([y({
  type: ["view", "edit"],
  json: {
    write: true
  }
})], m.prototype, "mode", void 0), e([y({
  type: String,
  json: {
    read: c2.read,
    write: c2.write
  }
})], m.prototype, "originPosition", void 0), e([y({
  type: Number,
  json: {
    write: {
      overridePolicy() {
        return {
          enabled: "view" === this.mode
        };
      }
    }
  }
})], m.prototype, "tolerance", void 0), m = n3 = e([a2("esri.rest.support.QuantizationParameters")], m);
var a3 = m;

// ../../../node_modules/@arcgis/core/rest/support/spatialRelationships.js
var s2 = new n({
  esriSpatialRelIntersects: "intersects",
  esriSpatialRelContains: "contains",
  esriSpatialRelCrosses: "crosses",
  esriSpatialRelDisjoint: "disjoint",
  esriSpatialRelEnvelopeIntersects: "envelope-intersects",
  esriSpatialRelIndexIntersects: "index-intersects",
  esriSpatialRelOverlaps: "overlaps",
  esriSpatialRelTouches: "touches",
  esriSpatialRelWithin: "within",
  esriSpatialRelRelation: "relation"
});

// ../../../node_modules/@arcgis/core/rest/support/StatisticDefinition.js
var c3;
var n4 = new n({
  count: "count",
  sum: "sum",
  min: "min",
  max: "max",
  avg: "avg",
  stddev: "stddev",
  var: "var",
  exceedslimit: "exceedslimit",
  percentile_cont: "percentile-continuous",
  percentile_disc: "percentile-discrete",
  EnvelopeAggregate: "envelope-aggregate",
  CentroidAggregate: "centroid-aggregate",
  ConvexHullAggregate: "convex-hull-aggregate"
});
var p = c3 = class extends f {
  constructor(t) {
    super(t), this.maxPointCount = void 0, this.maxRecordCount = void 0, this.maxVertexCount = void 0, this.onStatisticField = null, this.outStatisticFieldName = null, this.statisticType = null, this.statisticParameters = null;
  }
  writeStatisticParameters(t, e2) {
    "percentile-continuous" !== this.statisticType && "percentile-discrete" !== this.statisticType || (e2.statisticParameters = a(t));
  }
  clone() {
    return new c3({
      maxPointCount: this.maxPointCount,
      maxRecordCount: this.maxRecordCount,
      maxVertexCount: this.maxVertexCount,
      onStatisticField: this.onStatisticField,
      outStatisticFieldName: this.outStatisticFieldName,
      statisticType: this.statisticType,
      statisticParameters: a(this.statisticParameters)
    });
  }
};
e([y({
  type: Number,
  json: {
    write: true
  }
})], p.prototype, "maxPointCount", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], p.prototype, "maxRecordCount", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], p.prototype, "maxVertexCount", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p.prototype, "onStatisticField", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p.prototype, "outStatisticFieldName", void 0), e([y({
  type: String,
  json: {
    read: {
      source: "statisticType",
      reader: n4.read
    },
    write: {
      target: "statisticType",
      writer: n4.write
    }
  }
})], p.prototype, "statisticType", void 0), e([y({
  type: Object
})], p.prototype, "statisticParameters", void 0), e([r("statisticParameters")], p.prototype, "writeStatisticParameters", null), p = c3 = e([a2("esri.rest.support.StatisticDefinition")], p);
var m2 = p;

// ../../../node_modules/@arcgis/core/rest/support/Query.js
var S;
var g2 = new n({
  esriSRUnit_Meter: "meters",
  esriSRUnit_Kilometer: "kilometers",
  esriSRUnit_Foot: "feet",
  esriSRUnit_StatuteMile: "miles",
  esriSRUnit_NauticalMile: "nautical-miles",
  esriSRUnit_USNauticalMile: "us-nautical-miles"
});
var R = S = class extends f {
  static from(t) {
    return g(S, t);
  }
  constructor(t) {
    super(t), this.aggregateIds = null, this.cacheHint = void 0, this.compactGeometryEnabled = false, this.datumTransformation = null, this.defaultSpatialReferenceEnabled = false, this.distance = void 0, this.dynamicDataSource = void 0, this.formatOf3DObjects = null, this.fullText = null, this.gdbVersion = null, this.geometry = null, this.geometryPrecision = void 0, this.groupByFieldsForStatistics = null, this.having = null, this.historicMoment = null, this.maxAllowableOffset = void 0, this.maxRecordCountFactor = 1, this.multipatchOption = null, this.num = void 0, this.objectIds = null, this.orderByFields = null, this.outFields = null, this.outSpatialReference = null, this.outStatistics = null, this.parameterValues = null, this.pixelSize = null, this.quantizationParameters = null, this.rangeValues = null, this.relationParameter = null, this.resultType = null, this.returnCentroid = false, this.returnDistinctValues = false, this.returnExceededLimitFeatures = true, this.returnGeometry = false, this.returnQueryGeometry = false, this.returnM = void 0, this.returnZ = void 0, this.sourceSpatialReference = null, this.spatialRelationship = "intersects", this.start = void 0, this.sqlFormat = null, this.text = null, this.timeExtent = null, this.timeReferenceUnknownClient = false, this.units = null, this.where = null;
  }
  castDatumTransformation(t) {
    return "number" == typeof t || "object" == typeof t ? t : null;
  }
  writeHistoricMoment(t, e2) {
    e2.historicMoment = t && t.getTime();
  }
  writeParameterValues(t, e2) {
    if (t) {
      const r2 = {};
      for (const e3 in t) {
        const o2 = t[e3];
        Array.isArray(o2) ? r2[e3] = o2.map((t2) => t2 instanceof Date ? t2.getTime() : t2) : o2 instanceof Date ? r2[e3] = o2.getTime() : r2[e3] = o2;
      }
      e2.parameterValues = r2;
    }
  }
  writeStart(t, e2) {
    e2.resultOffset = this.start, e2.resultRecordCount = this.num || 10, e2.where = "1=1";
  }
  writeWhere(t, e2) {
    e2.where = t || "1=1";
  }
  clone() {
    return new S(a({
      aggregateIds: this.aggregateIds,
      cacheHint: this.cacheHint,
      compactGeometryEnabled: this.compactGeometryEnabled,
      datumTransformation: this.datumTransformation,
      defaultSpatialReferenceEnabled: this.defaultSpatialReferenceEnabled,
      distance: this.distance,
      fullText: this.fullText,
      formatOf3DObjects: this.formatOf3DObjects,
      gdbVersion: this.gdbVersion,
      geometry: this.geometry,
      geometryPrecision: this.geometryPrecision,
      groupByFieldsForStatistics: this.groupByFieldsForStatistics,
      having: this.having,
      historicMoment: null != this.historicMoment ? new Date(this.historicMoment.getTime()) : null,
      maxAllowableOffset: this.maxAllowableOffset,
      maxRecordCountFactor: this.maxRecordCountFactor,
      multipatchOption: this.multipatchOption,
      num: this.num,
      objectIds: this.objectIds,
      orderByFields: this.orderByFields,
      outFields: this.outFields,
      outSpatialReference: this.outSpatialReference,
      outStatistics: this.outStatistics,
      parameterValues: this.parameterValues,
      pixelSize: this.pixelSize,
      quantizationParameters: this.quantizationParameters,
      rangeValues: this.rangeValues,
      relationParameter: this.relationParameter,
      resultType: this.resultType,
      returnDistinctValues: this.returnDistinctValues,
      returnGeometry: this.returnGeometry,
      returnCentroid: this.returnCentroid,
      returnExceededLimitFeatures: this.returnExceededLimitFeatures,
      returnQueryGeometry: this.returnQueryGeometry,
      returnM: this.returnM,
      returnZ: this.returnZ,
      dynamicDataSource: this.dynamicDataSource,
      sourceSpatialReference: this.sourceSpatialReference,
      spatialRelationship: this.spatialRelationship,
      start: this.start,
      sqlFormat: this.sqlFormat,
      text: this.text,
      timeExtent: this.timeExtent,
      timeReferenceUnknownClient: this.timeReferenceUnknownClient,
      units: this.units,
      where: this.where
    }));
  }
};
R.MAX_MAX_RECORD_COUNT_FACTOR = 5, e([y({
  json: {
    write: true
  }
})], R.prototype, "aggregateIds", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], R.prototype, "cacheHint", void 0), e([y({
  type: Boolean,
  json: {
    default: false,
    write: true
  }
})], R.prototype, "compactGeometryEnabled", void 0), e([y({
  json: {
    write: true
  }
})], R.prototype, "datumTransformation", void 0), e([s("datumTransformation")], R.prototype, "castDatumTransformation", null), e([y({
  type: Boolean,
  json: {
    default: false,
    write: true
  }
})], R.prototype, "defaultSpatialReferenceEnabled", void 0), e([y({
  type: Number,
  json: {
    write: {
      overridePolicy: (t) => ({
        enabled: t > 0
      })
    }
  }
})], R.prototype, "distance", void 0), e([y({
  type: K,
  json: {
    write: true
  }
})], R.prototype, "dynamicDataSource", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], R.prototype, "formatOf3DObjects", void 0), e([y({
  type: [i],
  json: {
    write: {
      enabled: true,
      overridePolicy() {
        return {
          enabled: null != this.fullText && this.fullText.length > 0
        };
      }
    }
  }
})], R.prototype, "fullText", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], R.prototype, "gdbVersion", void 0), e([y({
  types: n2,
  json: {
    read: y2,
    write: true
  }
})], R.prototype, "geometry", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], R.prototype, "geometryPrecision", void 0), e([y({
  type: [String],
  json: {
    write: true
  }
})], R.prototype, "groupByFieldsForStatistics", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], R.prototype, "having", void 0), e([y({
  type: Date
})], R.prototype, "historicMoment", void 0), e([r("historicMoment")], R.prototype, "writeHistoricMoment", null), e([y({
  type: Number,
  json: {
    write: true
  }
})], R.prototype, "maxAllowableOffset", void 0), e([y({
  type: Number,
  cast: (t) => t < 1 ? 1 : t > R.MAX_MAX_RECORD_COUNT_FACTOR ? R.MAX_MAX_RECORD_COUNT_FACTOR : t,
  json: {
    write: {
      overridePolicy: (t) => ({
        enabled: t > 1
      })
    }
  }
})], R.prototype, "maxRecordCountFactor", void 0), e([y({
  type: ["xyFootprint"],
  json: {
    write: true
  }
})], R.prototype, "multipatchOption", void 0), e([y({
  type: Number,
  json: {
    read: {
      source: "resultRecordCount"
    }
  }
})], R.prototype, "num", void 0), e([y({
  json: {
    write: true
  }
})], R.prototype, "objectIds", void 0), e([y({
  type: [String],
  json: {
    write: true
  }
})], R.prototype, "orderByFields", void 0), e([y({
  type: [String],
  json: {
    write: true
  }
})], R.prototype, "outFields", void 0), e([y({
  type: f2,
  json: {
    name: "outSR",
    write: true
  }
})], R.prototype, "outSpatialReference", void 0), e([y({
  type: [m2],
  json: {
    write: {
      enabled: true,
      overridePolicy() {
        return {
          enabled: null != this.outStatistics && this.outStatistics.length > 0
        };
      }
    }
  }
})], R.prototype, "outStatistics", void 0), e([y({
  json: {
    write: true
  }
})], R.prototype, "parameterValues", void 0), e([r("parameterValues")], R.prototype, "writeParameterValues", null), e([y({
  type: _,
  json: {
    write: true
  }
})], R.prototype, "pixelSize", void 0), e([y({
  type: a3,
  json: {
    write: true
  }
})], R.prototype, "quantizationParameters", void 0), e([y({
  type: [Object],
  json: {
    write: true
  }
})], R.prototype, "rangeValues", void 0), e([y({
  type: String,
  json: {
    read: {
      source: "relationParam"
    },
    write: {
      target: "relationParam",
      overridePolicy() {
        return {
          enabled: "relation" === this.spatialRelationship
        };
      }
    }
  }
})], R.prototype, "relationParameter", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], R.prototype, "resultType", void 0), e([y({
  type: Boolean,
  json: {
    default: false,
    write: true
  }
})], R.prototype, "returnCentroid", void 0), e([y({
  type: Boolean,
  json: {
    default: false,
    write: true
  }
})], R.prototype, "returnDistinctValues", void 0), e([y({
  type: Boolean,
  json: {
    default: true,
    write: true
  }
})], R.prototype, "returnExceededLimitFeatures", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], R.prototype, "returnGeometry", void 0), e([y({
  type: Boolean,
  json: {
    default: false,
    write: true
  }
})], R.prototype, "returnQueryGeometry", void 0), e([y({
  type: Boolean,
  json: {
    default: false,
    write: true
  }
})], R.prototype, "returnM", void 0), e([y({
  type: Boolean,
  json: {
    write: {
      overridePolicy: (t) => ({
        enabled: t
      })
    }
  }
})], R.prototype, "returnZ", void 0), e([y({
  type: f2,
  json: {
    write: true
  }
})], R.prototype, "sourceSpatialReference", void 0), e([o(s2, {
  ignoreUnknown: false,
  name: "spatialRel"
})], R.prototype, "spatialRelationship", void 0), e([y({
  type: Number,
  json: {
    read: {
      source: "resultOffset"
    }
  }
})], R.prototype, "start", void 0), e([r("start"), r("num")], R.prototype, "writeStart", null), e([y({
  type: String,
  json: {
    write: true
  }
})], R.prototype, "sqlFormat", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], R.prototype, "text", void 0), e([y({
  type: c,
  json: {
    write: true
  }
})], R.prototype, "timeExtent", void 0), e([y({
  type: Boolean,
  json: {
    default: false,
    write: true
  }
})], R.prototype, "timeReferenceUnknownClient", void 0), e([o(g2, {
  ignoreUnknown: false
}), y({
  json: {
    write: {
      overridePolicy(t) {
        return {
          enabled: !!t && null != this.distance && this.distance > 0
        };
      }
    }
  }
})], R.prototype, "units", void 0), e([y({
  type: String,
  json: {
    write: {
      overridePolicy(t) {
        return {
          enabled: null != t || null != this.start && this.start > 0
        };
      }
    }
  }
})], R.prototype, "where", void 0), e([r("where")], R.prototype, "writeWhere", null), R = S = e([a2("esri.rest.support.Query")], R);
var b = R;

export {
  a3 as a,
  s2 as s,
  m2 as m,
  b
};
//# sourceMappingURL=chunk-TRSGUVSM.js.map
