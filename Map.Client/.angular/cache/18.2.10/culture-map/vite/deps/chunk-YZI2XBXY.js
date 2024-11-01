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
  N,
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/layers/support/exifUtils.js
function n(n2) {
  const {
    exifInfo: e2,
    exifName: a3,
    tagName: u
  } = n2;
  if (!e2 || !a3 || !u) return null;
  const f2 = e2.find((n3) => n3.name === a3);
  return f2 ? t({
    tagName: u,
    tags: f2.tags
  }) : null;
}
function t(n2) {
  const {
    tagName: t2,
    tags: e2
  } = n2;
  if (!e2 || !t2) return null;
  const a3 = e2.find((n3) => n3.name === t2);
  return a3?.value || null;
}

// ../../../node_modules/@arcgis/core/rest/query/support/AttachmentInfo.js
var s;
var p = {
  1: {
    id: 1,
    rotation: 0,
    mirrored: false
  },
  2: {
    id: 2,
    rotation: 0,
    mirrored: true
  },
  3: {
    id: 3,
    rotation: 180,
    mirrored: false
  },
  4: {
    id: 4,
    rotation: 180,
    mirrored: true
  },
  5: {
    id: 5,
    rotation: -90,
    mirrored: true
  },
  6: {
    id: 6,
    rotation: 90,
    mirrored: false
  },
  7: {
    id: 7,
    rotation: 90,
    mirrored: true
  },
  8: {
    id: 8,
    rotation: -90,
    mirrored: false
  }
};
var d = s = class extends f {
  constructor(o) {
    super(o), this.contentType = null, this.exifInfo = null, this.id = null, this.globalId = null, this.keywords = null, this.name = null, this.parentGlobalId = null, this.parentObjectId = null, this.size = null, this.url = null;
  }
  get orientationInfo() {
    const {
      exifInfo: o
    } = this, t2 = n({
      exifName: "Exif IFD0",
      tagName: "Orientation",
      exifInfo: o
    });
    return p[t2] || null;
  }
  clone() {
    return new s({
      contentType: this.contentType,
      exifInfo: this.exifInfo,
      id: this.id,
      globalId: this.globalId,
      keywords: this.keywords,
      name: this.name,
      parentGlobalId: this.parentGlobalId,
      parentObjectId: this.parentObjectId,
      size: this.size,
      url: this.url
    });
  }
};
e([y({
  type: String
})], d.prototype, "contentType", void 0), e([y()], d.prototype, "exifInfo", void 0), e([y({
  readOnly: true
})], d.prototype, "orientationInfo", null), e([y({
  type: N
})], d.prototype, "id", void 0), e([y({
  type: String
})], d.prototype, "globalId", void 0), e([y({
  type: String
})], d.prototype, "keywords", void 0), e([y({
  type: String
})], d.prototype, "name", void 0), e([y({
  json: {
    read: false
  }
})], d.prototype, "parentGlobalId", void 0), e([y({
  json: {
    read: false
  }
})], d.prototype, "parentObjectId", void 0), e([y({
  type: N
})], d.prototype, "size", void 0), e([y({
  json: {
    read: false
  }
})], d.prototype, "url", void 0), d = s = e([a("esri.rest.query.support.AttachmentInfo")], d);
var a2 = d;

export {
  a2 as a
};
//# sourceMappingURL=chunk-YZI2XBXY.js.map
