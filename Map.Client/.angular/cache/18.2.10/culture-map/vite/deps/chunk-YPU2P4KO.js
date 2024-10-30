import {
  K
} from "./chunk-WYKKCLBI.js";
import {
  f as f2
} from "./chunk-TKPMIAIW.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
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

// ../../../node_modules/@arcgis/core/rest/support/RelationshipQuery.js
var u;
var c = u = class extends f {
  constructor(t) {
    super(t), this.cacheHint = void 0, this.dynamicDataSource = void 0, this.gdbVersion = null, this.geometryPrecision = void 0, this.historicMoment = null, this.maxAllowableOffset = void 0, this.objectIds = null, this.orderByFields = null, this.outFields = null, this.outSpatialReference = null, this.relationshipId = void 0, this.start = void 0, this.num = void 0, this.returnGeometry = false, this.returnM = void 0, this.returnZ = void 0, this.where = null;
  }
  _writeHistoricMoment(t, e2) {
    e2.historicMoment = t && t.getTime();
  }
  writeStart(t, e2) {
    e2.resultOffset = this.start, e2.resultRecordCount = this.num || 10, this.start > 0 && null == this.where && (e2.definitionExpression = "1=1");
  }
  clone() {
    return new u(a({
      cacheHint: this.cacheHint,
      dynamicDataSource: this.dynamicDataSource,
      gdbVersion: this.gdbVersion,
      geometryPrecision: this.geometryPrecision,
      historicMoment: this.historicMoment && new Date(this.historicMoment.getTime()),
      maxAllowableOffset: this.maxAllowableOffset,
      objectIds: this.objectIds,
      orderByFields: this.orderByFields,
      outFields: this.outFields,
      outSpatialReference: this.outSpatialReference,
      relationshipId: this.relationshipId,
      start: this.start,
      num: this.num,
      returnGeometry: this.returnGeometry,
      where: this.where,
      returnZ: this.returnZ,
      returnM: this.returnM
    }));
  }
};
e([y({
  type: Boolean,
  json: {
    write: true
  }
})], c.prototype, "cacheHint", void 0), e([y({
  type: K,
  json: {
    write: true
  }
})], c.prototype, "dynamicDataSource", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], c.prototype, "gdbVersion", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], c.prototype, "geometryPrecision", void 0), e([y({
  type: Date
})], c.prototype, "historicMoment", void 0), e([r("historicMoment")], c.prototype, "_writeHistoricMoment", null), e([y({
  type: Number,
  json: {
    write: true
  }
})], c.prototype, "maxAllowableOffset", void 0), e([y({
  json: {
    write: true
  }
})], c.prototype, "objectIds", void 0), e([y({
  type: [String],
  json: {
    write: true
  }
})], c.prototype, "orderByFields", void 0), e([y({
  type: [String],
  json: {
    write: true
  }
})], c.prototype, "outFields", void 0), e([y({
  type: f2,
  json: {
    read: {
      source: "outSR"
    },
    write: {
      target: "outSR"
    }
  }
})], c.prototype, "outSpatialReference", void 0), e([y({
  json: {
    write: true
  }
})], c.prototype, "relationshipId", void 0), e([y({
  type: Number,
  json: {
    read: {
      source: "resultOffset"
    }
  }
})], c.prototype, "start", void 0), e([r("start"), r("num")], c.prototype, "writeStart", null), e([y({
  type: Number,
  json: {
    read: {
      source: "resultRecordCount"
    }
  }
})], c.prototype, "num", void 0), e([y({
  json: {
    write: true
  }
})], c.prototype, "returnGeometry", void 0), e([y({
  type: Boolean,
  json: {
    write: {
      overridePolicy: (t) => ({
        enabled: t
      })
    }
  }
})], c.prototype, "returnM", void 0), e([y({
  type: Boolean,
  json: {
    write: {
      overridePolicy: (t) => ({
        enabled: t
      })
    }
  }
})], c.prototype, "returnZ", void 0), e([y({
  type: String,
  json: {
    read: {
      source: "definitionExpression"
    },
    write: {
      target: "definitionExpression"
    }
  }
})], c.prototype, "where", void 0), c = u = e([a2("esri.rest.support.RelationshipQuery")], c), c.from = b(c);
var d = c;

export {
  d
};
//# sourceMappingURL=chunk-YPU2P4KO.js.map
