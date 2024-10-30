import {
  s as s4,
  u
} from "./chunk-UWCDGS6C.js";
import {
  m
} from "./chunk-XTCHBO6P.js";
import {
  s as s3
} from "./chunk-HT2T6PUB.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import {
  s as s2
} from "./chunk-NKCPFCP3.js";
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
  a,
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/webmap/Bookmark.js
var d;
var y2 = d = class extends s3(f) {
  constructor(t) {
    super(t), this.name = null, this.thumbnail = new u(), this.timeExtent = null;
  }
  castThumbnail(t) {
    return "string" == typeof t ? new u({
      url: t
    }) : b(u, t);
  }
  set viewpoint(t) {
    const {
      targetGeometry: e2,
      scale: o2
    } = t;
    null != e2 && "point" === e2.type && null == o2 && n.getLogger(this).warn("Bookmark.viewpoint should include 'scale' when its targetGeometry is a point.", t), this._set("viewpoint", t);
  }
  readViewpoint(t, o2) {
    const {
      extent: r2,
      viewpoint: i
    } = o2;
    return m.fromJSON(i || {
      targetGeometry: r2
    });
  }
  writeViewpoint(t, e2, r2, i) {
    if (!t) return;
    const {
      targetGeometry: s5
    } = t;
    if (null == s5 || "extent" === s5.type) null != s5 && (e2.extent = s5.toJSON()), e2[r2] = t.toJSON();
    else {
      const t2 = "Bookmark.viewpoint cannot be written to JSON when the viewpoint's targetGeometry is not an extent.";
      i?.messages ? i.messages.push(new s("property:unsupported", t2)) : n.getLogger(this).error(t2);
    }
  }
  clone() {
    return new d(a({
      name: this.name,
      thumbnail: this.thumbnail,
      timeExtent: this.timeExtent,
      viewpoint: this.viewpoint
    }));
  }
};
e([y({
  type: String,
  nonNullable: true,
  json: {
    write: {
      isRequired: true
    }
  }
})], y2.prototype, "name", void 0), e([y({
  type: u,
  json: {
    write: {
      overridePolicy: (t) => ({
        enabled: !(!t || !t.url)
      })
    }
  }
})], y2.prototype, "thumbnail", void 0), e([s2("thumbnail")], y2.prototype, "castThumbnail", null), e([y(s4)], y2.prototype, "timeExtent", void 0), e([y({
  type: m,
  nonNullable: true,
  json: {
    write: true
  }
})], y2.prototype, "viewpoint", null), e([o("viewpoint", ["extent", "viewpoint"])], y2.prototype, "readViewpoint", null), e([r("viewpoint")], y2.prototype, "writeViewpoint", null), y2 = d = e([a2("esri.webmap.Bookmark")], y2);
var f2 = y2;

export {
  f2 as f
};
//# sourceMappingURL=chunk-ALHGAKLZ.js.map
