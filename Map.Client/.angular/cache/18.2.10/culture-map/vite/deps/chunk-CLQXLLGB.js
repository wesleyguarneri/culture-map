import {
  N
} from "./chunk-FAW72HJW.js";

// ../../../node_modules/@arcgis/core/arcade/Attachment.js
var t = class _t extends N {
  constructor(e, t2, i, s, l, d, h) {
    super(), this.attachmentUrl = l, this.declaredClass = "esri.arcade.Attachment", this.immutable = false, this.setField("id", e), this.setField("name", t2), this.setField("contenttype", i), this.setField("size", s), this.setField("exifinfo", d), this.setField("keywords", h), this.immutable = true;
  }
  deepClone() {
    return new _t(this.field("id"), this.field("name"), this.field("contenttype"), this.field("size"), this.attachmentUrl, this.field("exifinfo")?.deepClone() ?? null, this.field("keywords"));
  }
};

export {
  t
};
//# sourceMappingURL=chunk-CLQXLLGB.js.map
