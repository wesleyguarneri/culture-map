import {
  d,
  y as y2
} from "./chunk-CRNUMTSV.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var l = (l2) => {
  let p = class extends l2 {
    get title() {
      if (this._get("title") && "defaults" !== this.originOf("title")) return this._get("title");
      if (this.url) {
        const t = d(this.url);
        if (null != t && t.title) return t.title;
      }
      return this._get("title") || "";
    }
    set title(t) {
      this._set("title", t);
    }
    set url(t) {
      this._set("url", y2(t, n.getLogger(this)));
    }
  };
  return e([y()], p.prototype, "title", null), e([y({
    type: String
  })], p.prototype, "url", null), p = e([a("esri.layers.mixins.ArcGISService")], p), p;
};

export {
  l
};
//# sourceMappingURL=chunk-DSMB46HB.js.map
