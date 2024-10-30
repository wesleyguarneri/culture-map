import {
  c
} from "./chunk-DR5TVNEL.js";
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
  _,
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/widgets/Bookmarks/bookmarkUtils.js
var t = "https://.*";
function n(t2) {
  return !!t2 && /^https:\/\/.*/i.test(t2);
}
function e2(t2) {
  return !!t2 && /data:([-\w]+\/[-+\w.]+)?(;?\w+=[-\w]+)*(;base64)?,.*/gu.test(t2);
}

// ../../../node_modules/@arcgis/core/webdoc/support/SlideThumbnail.js
var p;
var u = p = class extends f {
  constructor() {
    super(...arguments), this.url = "";
  }
  destroy() {
    this.url = "";
  }
  get isSecureUrl() {
    return n(this.url);
  }
  get isDataURI() {
    return e2(this.url);
  }
  clone() {
    return new p({
      url: this.url
    });
  }
};
e([y({
  type: String,
  json: {
    write: {
      isRequired: true
    }
  }
})], u.prototype, "url", void 0), e([y()], u.prototype, "isSecureUrl", null), e([y()], u.prototype, "isDataURI", null), u = p = e([a("esri.webdoc.support.SlideThumbnail")], u);

// ../../../node_modules/@arcgis/core/webdoc/support/timeProperties.js
var s2 = {
  type: c,
  json: {
    read: {
      source: "timeExtent",
      reader: (r) => r ? Array.isArray(r) ? c.fromArray(r) : c.fromJSON(r) : null
    },
    write: {
      writer: (e3, t2, o, s3) => {
        e3 && (e3.isEmpty ? s3?.messages && s3.messages.push(new s("invalid-timeExtent", "TimeExtent cannot be empty")) : t2[o] = e3.toArray());
      },
      target: {
        timeExtent: {
          type: [[N, _]]
        }
      }
    }
  }
};

export {
  t,
  u,
  s2 as s
};
//# sourceMappingURL=chunk-UWCDGS6C.js.map
