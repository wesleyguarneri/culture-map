import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a2,
  b
} from "./chunk-UDMPWVPF.js";
import {
  a
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/rest/support/AttachmentQuery.js
var a3;
var p = a3 = class extends f {
  constructor(t) {
    super(t), this.attachmentTypes = null, this.attachmentsWhere = null, this.cacheHint = void 0, this.keywords = null, this.globalIds = null, this.name = null, this.num = null, this.objectIds = null, this.returnMetadata = false, this.size = null, this.start = null, this.where = null;
  }
  writeStart(t, e2) {
    e2.resultOffset = this.start, e2.resultRecordCount = this.num || 10;
  }
  clone() {
    return new a3(a({
      attachmentTypes: this.attachmentTypes,
      attachmentsWhere: this.attachmentsWhere,
      cacheHint: this.cacheHint,
      keywords: this.keywords,
      where: this.where,
      globalIds: this.globalIds,
      name: this.name,
      num: this.num,
      objectIds: this.objectIds,
      returnMetadata: this.returnMetadata,
      size: this.size,
      start: this.start
    }));
  }
};
e([y({
  type: [String],
  json: {
    write: true
  }
})], p.prototype, "attachmentTypes", void 0), e([y({
  type: String,
  json: {
    read: {
      source: "attachmentsDefinitionExpression"
    },
    write: {
      target: "attachmentsDefinitionExpression"
    }
  }
})], p.prototype, "attachmentsWhere", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p.prototype, "cacheHint", void 0), e([y({
  type: [String],
  json: {
    write: true
  }
})], p.prototype, "keywords", void 0), e([y({
  type: [Number],
  json: {
    write: true
  }
})], p.prototype, "globalIds", void 0), e([y({
  json: {
    write: true
  }
})], p.prototype, "name", void 0), e([y({
  type: Number,
  json: {
    read: {
      source: "resultRecordCount"
    }
  }
})], p.prototype, "num", void 0), e([y({
  type: [Number],
  json: {
    write: true
  }
})], p.prototype, "objectIds", void 0), e([y({
  type: Boolean,
  json: {
    default: false,
    write: true
  }
})], p.prototype, "returnMetadata", void 0), e([y({
  type: [Number],
  json: {
    write: true
  }
})], p.prototype, "size", void 0), e([y({
  type: Number,
  json: {
    read: {
      source: "resultOffset"
    }
  }
})], p.prototype, "start", void 0), e([r("start"), r("num")], p.prototype, "writeStart", null), e([y({
  type: String,
  json: {
    read: {
      source: "definitionExpression"
    },
    write: {
      target: "definitionExpression"
    }
  }
})], p.prototype, "where", void 0), p = a3 = e([a2("esri.rest.support.AttachmentQuery")], p), p.from = b(p);
var c = p;

export {
  c
};
//# sourceMappingURL=chunk-LOZRWPGI.js.map
