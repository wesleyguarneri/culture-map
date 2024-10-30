import {
  c
} from "./chunk-DR5TVNEL.js";
import {
  s as s3
} from "./chunk-HT2T6PUB.js";
import {
  m
} from "./chunk-BDM2D6IC.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import {
  I,
  U
} from "./chunk-SYATLP3H.js";
import {
  o
} from "./chunk-WGAPNV7F.js";
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
  b
} from "./chunk-HJY2YILU.js";
import {
  n2 as n,
  s,
  s2
} from "./chunk-WYIDUUN2.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/support/fromPortalItem.js
function o2(o3) {
  return __async(this, null, function* () {
    const a2 = "portalItem" in o3 ? o3 : {
      portalItem: o3
    }, {
      fromItem: e2
    } = yield import("./portalLayers-U242YVJP.js");
    try {
      return yield e2(a2);
    } catch (p) {
      const o4 = a2?.portalItem, e3 = o4?.id || "unset", l = o4?.portal?.url || s.portalUrl;
      throw n.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()", "Failed to create layer from portal item (portal: '" + l + "', id: '" + e3 + "')", p), p;
    }
  });
}

// ../../../node_modules/@arcgis/core/layers/Layer.js
var h = 0;
var b2 = class extends o.EventedMixin(s3(m)) {
  constructor() {
    super(...arguments), this.attributionDataUrl = null, this.fullExtent = new w(-180, -90, 180, 90, f.WGS84), this.id = Date.now().toString(16) + "-layer-" + h++, this.legendEnabled = true, this.listMode = "show", this.opacity = 1, this.parent = null, this.persistenceEnabled = false, this.popupEnabled = true, this.attributionVisible = true, this.spatialReference = f.WGS84, this.title = null, this.type = null, this.url = null, this.visibilityTimeExtent = null, this.visible = true;
  }
  static fromArcGISServerUrl(t) {
    return __async(this, null, function* () {
      const e2 = "string" == typeof t ? {
        url: t
      } : t;
      return (yield import("./arcgisLayers-QNOJHNWJ.js")).fromUrl(e2);
    });
  }
  static fromPortalItem(t) {
    return o2(t);
  }
  initialize() {
    this.when().catch((t) => {
      b(t) || n.getLogger(this).error("#load()", `Failed to load layer (title: '${this.title ?? "no title"}', id: '${this.id ?? "no id"}')`, {
        error: t
      });
    });
  }
  destroy() {
    const t = this.parent;
    if (t) {
      const e2 = this;
      "layers" in t && t.layers.includes(e2) ? t.layers.remove(e2) : "tables" in t && t.tables.includes(e2) ? t.tables.remove(e2) : "baseLayers" in t && t.baseLayers.includes(e2) ? t.baseLayers.remove(e2) : "referenceLayers" in t && t.referenceLayers.includes(e2) && t.referenceLayers.remove(e2), this._set("parent", null);
    }
  }
  get hasAttributionData() {
    return null != this.attributionDataUrl;
  }
  get parsedUrl() {
    return I(this.url);
  }
  fetchAttributionData() {
    return __async(this, null, function* () {
      const t = this.attributionDataUrl;
      if (this.hasAttributionData && t) {
        return (yield U(t, {
          query: {
            f: "json"
          },
          responseType: "json"
        })).data;
      }
      throw new s2("layer:no-attribution-data", "Layer does not have attribution data");
    });
  }
};
e([y({
  type: String
})], b2.prototype, "attributionDataUrl", void 0), e([y({
  type: w
})], b2.prototype, "fullExtent", void 0), e([y({
  readOnly: true
})], b2.prototype, "hasAttributionData", null), e([y({
  type: String,
  clonable: false
})], b2.prototype, "id", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], b2.prototype, "legendEnabled", void 0), e([y({
  type: ["show", "hide", "hide-children"]
})], b2.prototype, "listMode", void 0), e([y({
  type: Number,
  range: {
    min: 0,
    max: 1
  },
  nonNullable: true
})], b2.prototype, "opacity", void 0), e([y({
  clonable: false
})], b2.prototype, "parent", void 0), e([y({
  readOnly: true
})], b2.prototype, "parsedUrl", null), e([y({
  type: Boolean,
  readOnly: true
})], b2.prototype, "persistenceEnabled", void 0), e([y({
  type: Boolean
})], b2.prototype, "popupEnabled", void 0), e([y({
  type: Boolean
})], b2.prototype, "attributionVisible", void 0), e([y({
  type: f
})], b2.prototype, "spatialReference", void 0), e([y({
  type: String
})], b2.prototype, "title", void 0), e([y({
  readOnly: true,
  json: {
    read: false
  }
})], b2.prototype, "type", void 0), e([y()], b2.prototype, "url", void 0), e([y({
  type: c
})], b2.prototype, "visibilityTimeExtent", void 0), e([y({
  type: Boolean,
  nonNullable: true
})], b2.prototype, "visible", void 0), b2 = e([a("esri.layers.Layer")], b2);
var f2 = b2;

export {
  f2 as f
};
//# sourceMappingURL=chunk-M2NS3MSU.js.map
