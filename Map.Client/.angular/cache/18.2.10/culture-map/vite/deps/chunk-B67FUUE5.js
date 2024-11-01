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
  f as f2
} from "./chunk-TKPMIAIW.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
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
  b
} from "./chunk-DDYVXG4F.js";
import {
  a
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/rest/support/TopFilter.js
var e2;
var p = e2 = class extends f {
  constructor(o) {
    super(o), this.groupByFields = void 0, this.topCount = void 0, this.orderByFields = void 0;
  }
  clone() {
    return new e2({
      groupByFields: this.groupByFields,
      topCount: this.topCount,
      orderByFields: this.orderByFields
    });
  }
};
e([y({
  type: [String],
  json: {
    write: true
  }
})], p.prototype, "groupByFields", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], p.prototype, "topCount", void 0), e([y({
  type: [String],
  json: {
    write: true
  }
})], p.prototype, "orderByFields", void 0), p = e2 = e([a2("esri.rest.support.TopFilter")], p);
var i = p;

// ../../../node_modules/@arcgis/core/rest/support/TopFeaturesQuery.js
var y3;
var m = new n({
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
var h = new n({
  esriSRUnit_Meter: "meters",
  esriSRUnit_Kilometer: "kilometers",
  esriSRUnit_Foot: "feet",
  esriSRUnit_StatuteMile: "miles",
  esriSRUnit_NauticalMile: "nautical-miles",
  esriSRUnit_USNauticalMile: "us-nautical-miles"
});
var j = y3 = class extends f {
  constructor(e3) {
    super(e3), this.cacheHint = void 0, this.distance = void 0, this.geometry = null, this.geometryPrecision = void 0, this.maxAllowableOffset = void 0, this.num = void 0, this.objectIds = null, this.orderByFields = null, this.outFields = null, this.outSpatialReference = null, this.resultType = null, this.returnGeometry = false, this.returnM = void 0, this.returnZ = void 0, this.start = void 0, this.spatialRelationship = "intersects", this.timeExtent = null, this.topFilter = void 0, this.units = null, this.where = "1=1";
  }
  writeStart(e3, t) {
    t.resultOffset = this.start, t.resultRecordCount = this.num || 10;
  }
  clone() {
    return new y3(a({
      cacheHint: this.cacheHint,
      distance: this.distance,
      geometry: this.geometry,
      geometryPrecision: this.geometryPrecision,
      maxAllowableOffset: this.maxAllowableOffset,
      num: this.num,
      objectIds: this.objectIds,
      orderByFields: this.orderByFields,
      outFields: this.outFields,
      outSpatialReference: this.outSpatialReference,
      resultType: this.resultType,
      returnGeometry: this.returnGeometry,
      returnZ: this.returnZ,
      returnM: this.returnM,
      start: this.start,
      spatialRelationship: this.spatialRelationship,
      timeExtent: this.timeExtent,
      topFilter: this.topFilter,
      units: this.units,
      where: this.where
    }));
  }
};
e([y({
  type: Boolean,
  json: {
    write: true
  }
})], j.prototype, "cacheHint", void 0), e([y({
  type: Number,
  json: {
    write: {
      overridePolicy: (e3) => ({
        enabled: e3 > 0
      })
    }
  }
})], j.prototype, "distance", void 0), e([y({
  types: n2,
  json: {
    read: y2,
    write: true
  }
})], j.prototype, "geometry", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], j.prototype, "geometryPrecision", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], j.prototype, "maxAllowableOffset", void 0), e([y({
  type: Number,
  json: {
    read: {
      source: "resultRecordCount"
    }
  }
})], j.prototype, "num", void 0), e([y({
  json: {
    write: true
  }
})], j.prototype, "objectIds", void 0), e([y({
  type: [String],
  json: {
    write: true
  }
})], j.prototype, "orderByFields", void 0), e([y({
  type: [String],
  json: {
    write: true
  }
})], j.prototype, "outFields", void 0), e([y({
  type: f2,
  json: {
    read: {
      source: "outSR"
    },
    write: {
      target: "outSR"
    }
  }
})], j.prototype, "outSpatialReference", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], j.prototype, "resultType", void 0), e([y({
  json: {
    write: true
  }
})], j.prototype, "returnGeometry", void 0), e([y({
  type: Boolean,
  json: {
    write: {
      overridePolicy: (e3) => ({
        enabled: e3
      })
    }
  }
})], j.prototype, "returnM", void 0), e([y({
  type: Boolean,
  json: {
    write: {
      overridePolicy: (e3) => ({
        enabled: e3
      })
    }
  }
})], j.prototype, "returnZ", void 0), e([y({
  type: Number,
  json: {
    read: {
      source: "resultOffset"
    }
  }
})], j.prototype, "start", void 0), e([r("start"), r("num")], j.prototype, "writeStart", null), e([y({
  type: String,
  json: {
    read: {
      source: "spatialRel",
      reader: m.read
    },
    write: {
      target: "spatialRel",
      writer: m.write
    }
  }
})], j.prototype, "spatialRelationship", void 0), e([y({
  type: c,
  json: {
    write: true
  }
})], j.prototype, "timeExtent", void 0), e([y({
  type: i,
  json: {
    write: true
  }
})], j.prototype, "topFilter", void 0), e([y({
  type: String,
  json: {
    read: h.read,
    write: {
      writer: h.write,
      overridePolicy(e3) {
        return {
          enabled: null != e3 && null != this.distance && this.distance > 0
        };
      }
    }
  }
})], j.prototype, "units", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], j.prototype, "where", void 0), j = y3 = e([a2("esri.rest.support.TopFeaturesQuery")], j), j.from = b(j);
var S = j;

export {
  S
};
//# sourceMappingURL=chunk-B67FUUE5.js.map
