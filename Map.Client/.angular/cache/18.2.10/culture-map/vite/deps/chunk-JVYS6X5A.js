import {
  j
} from "./chunk-SJX5DIA7.js";
import {
  o as o2
} from "./chunk-YI35FRTC.js";
import {
  p,
  z
} from "./chunk-LJEOBI2I.js";
import {
  f as f4
} from "./chunk-DOK4SACJ.js";
import {
  l
} from "./chunk-OUKUASAF.js";
import {
  t
} from "./chunk-UWJIHV6Q.js";
import {
  b
} from "./chunk-ZUSCOMQM.js";
import {
  S
} from "./chunk-RXWBJSJ5.js";
import {
  f as f3
} from "./chunk-M2NS3MSU.js";
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
  o
} from "./chunk-NQOJNTB3.js";
import {
  r as r2
} from "./chunk-MFOQYQFG.js";
import {
  Ct,
  K,
  U,
  pt,
  x
} from "./chunk-SYATLP3H.js";
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
  a3 as a2
} from "./chunk-DDYVXG4F.js";
import {
  a,
  r,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/support/WMTSLayerInfo.js
var i;
var p2 = i = class extends f {
  constructor(r3) {
    super(r3);
  }
  clone() {
    return new i({
      customLayerParameters: a(this.customLayerParameters),
      customParameters: a(this.customParameters),
      layerIdentifier: this.layerIdentifier,
      tileMatrixSet: this.tileMatrixSet,
      url: this.url
    });
  }
};
e([y({
  json: {
    type: Object,
    write: true
  }
})], p2.prototype, "customLayerParameters", void 0), e([y({
  json: {
    type: Object,
    write: true
  }
})], p2.prototype, "customParameters", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p2.prototype, "layerIdentifier", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p2.prototype, "tileMatrixSet", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p2.prototype, "url", void 0), p2 = i = e([a2("esri.layers.support.WMTSLayerInfo")], p2);

// ../../../node_modules/@arcgis/core/layers/WebTileLayer.js
var L;
var U2 = L = class extends l(f4(t(b(j(S(f3)))))) {
  constructor(...e2) {
    super(...e2), this.copyright = "", this.fullExtent = new w(-20037508342787e-6, -2003750834278e-5, 2003750834278e-5, 20037508342787e-6, f2.WebMercator), this.legendEnabled = false, this.isReference = null, this.popupEnabled = false, this.spatialReference = f2.WebMercator, this.subDomains = null, this.tileInfo = new z({
      size: [256, 256],
      dpi: 96,
      format: "png8",
      compressionQuality: 0,
      origin: new _({
        x: -20037508342787e-6,
        y: 20037508342787e-6,
        spatialReference: f2.WebMercator
      }),
      spatialReference: f2.WebMercator,
      lods: [new p({
        level: 0,
        scale: 591657527591555e-6,
        resolution: 156543.033928
      }), new p({
        level: 1,
        scale: 295828763795777e-6,
        resolution: 78271.5169639999
      }), new p({
        level: 2,
        scale: 147914381897889e-6,
        resolution: 39135.7584820001
      }), new p({
        level: 3,
        scale: 73957190948944e-6,
        resolution: 19567.8792409999
      }), new p({
        level: 4,
        scale: 36978595474472e-6,
        resolution: 9783.93962049996
      }), new p({
        level: 5,
        scale: 18489297737236e-6,
        resolution: 4891.96981024998
      }), new p({
        level: 6,
        scale: 9244648868618e-6,
        resolution: 2445.98490512499
      }), new p({
        level: 7,
        scale: 4622324434309e-6,
        resolution: 1222.99245256249
      }), new p({
        level: 8,
        scale: 2311162217155e-6,
        resolution: 611.49622628138
      }), new p({
        level: 9,
        scale: 1155581108577e-6,
        resolution: 305.748113140558
      }), new p({
        level: 10,
        scale: 577790.554289,
        resolution: 152.874056570411
      }), new p({
        level: 11,
        scale: 288895.277144,
        resolution: 76.4370282850732
      }), new p({
        level: 12,
        scale: 144447.638572,
        resolution: 38.2185141425366
      }), new p({
        level: 13,
        scale: 72223.819286,
        resolution: 19.1092570712683
      }), new p({
        level: 14,
        scale: 36111.909643,
        resolution: 9.55462853563415
      }), new p({
        level: 15,
        scale: 18055.954822,
        resolution: 4.77731426794937
      }), new p({
        level: 16,
        scale: 9027.977411,
        resolution: 2.38865713397468
      }), new p({
        level: 17,
        scale: 4513.988705,
        resolution: 1.19432856685505
      }), new p({
        level: 18,
        scale: 2256.994353,
        resolution: 0.597164283559817
      }), new p({
        level: 19,
        scale: 1128.497176,
        resolution: 0.298582141647617
      }), new p({
        level: 20,
        scale: 564.248588,
        resolution: 0.14929107082380833
      }), new p({
        level: 21,
        scale: 282.124294,
        resolution: 0.07464553541190416
      }), new p({
        level: 22,
        scale: 141.062147,
        resolution: 0.03732276770595208
      }), new p({
        level: 23,
        scale: 70.5310735,
        resolution: 0.01866138385297604
      })]
    }), this.type = "web-tile", this.urlTemplate = null, this.wmtsInfo = null;
  }
  normalizeCtorArgs(e2, t2) {
    return "string" == typeof e2 ? __spreadValues({
      urlTemplate: e2
    }, t2) : e2;
  }
  load(e2) {
    const t2 = this.loadFromPortal({
      supportedTypes: ["WMTS"]
    }, e2).then(() => {
      let e3 = "";
      if (this.urlTemplate) {
        if (this.spatialReference.equals(this.tileInfo.spatialReference)) {
          const t3 = new x(this.urlTemplate);
          !(!!this.subDomains && this.subDomains.length > 0) && t3.authority?.includes("{subDomain}") && (e3 = "is missing 'subDomains' property");
        } else e3 = "spatialReference must match tileInfo.spatialReference";
      } else e3 = "is missing the required 'urlTemplate' property value";
      if (e3) throw new s("web-tile-layer:load", `WebTileLayer (title: '${this.title}', id: '${this.id}') ${e3}`);
    });
    return this.addResolvingPromise(t2), Promise.resolve(this);
  }
  get levelValues() {
    const e2 = [];
    if (!this.tileInfo) return null;
    for (const t2 of this.tileInfo.lods) e2[t2.level] = t2.levelValue || t2.level;
    return e2;
  }
  readSpatialReference(e2, t2) {
    return e2 || f2.fromJSON(t2.fullExtent?.spatialReference);
  }
  get tileServers() {
    if (!this.urlTemplate) return null;
    const e2 = [], {
      urlTemplate: t2,
      subDomains: r3
    } = this, l2 = new x(t2), o3 = l2.scheme ? l2.scheme + "://" : "//", n = o3 + l2.authority + "/", a3 = l2.authority;
    if (a3?.includes("{subDomain}")) {
      if (r3 && r3.length > 0 && a3.split(".").length > 1) for (const s2 of r3) e2.push(o3 + a3.replaceAll(/\{subDomain\}/gi, s2) + "/");
    } else e2.push(n);
    return e2.map(Ct);
  }
  get urlPath() {
    if (!this.urlTemplate) return null;
    const e2 = this.urlTemplate, t2 = new x(e2), r3 = (t2.scheme ? t2.scheme + "://" : "//") + t2.authority + "/";
    return e2.substring(r3.length);
  }
  readUrlTemplate(e2, t2) {
    return e2 || t2.templateUrl;
  }
  writeUrlTemplate(e2, t2) {
    pt(e2) && (e2 = "https:" + e2), e2 && (e2 = e2.replaceAll(/\{z\}/gi, "{level}").replaceAll(/\{x\}/gi, "{col}").replaceAll(/\{y\}/gi, "{row}"), e2 = K(e2)), t2.templateUrl = e2;
  }
  fetchTile(e2, r3, l2, o3 = {}) {
    const {
      signal: s2
    } = o3, i2 = this.getTileUrl(e2, r3, l2), n = {
      responseType: "image",
      signal: s2,
      query: __spreadValues({}, this.refreshParameters)
    };
    return U(i2, n).then((e3) => e3.data);
  }
  fetchImageBitmapTile(_0, _1, _2) {
    return __async(this, arguments, function* (e2, r3, l2, o3 = {}) {
      const {
        signal: s2
      } = o3;
      if (this.fetchTile !== L.prototype.fetchTile) {
        const t2 = yield this.fetchTile(e2, r3, l2, o3);
        return o2(t2, e2, r3, l2, s2);
      }
      const i2 = this.getTileUrl(e2, r3, l2), n = {
        responseType: "blob",
        signal: s2,
        query: __spreadValues({}, this.refreshParameters)
      }, {
        data: a3
      } = yield U(i2, n);
      return o2(a3, e2, r3, l2, s2);
    });
  }
  getTileUrl(e2, t2, r3) {
    const {
      levelValues: l2,
      tileServers: s2,
      urlPath: i2
    } = this;
    if (!l2 || !s2 || !i2) return "";
    const n = l2[e2];
    return s2[t2 % s2.length] + r(i2, {
      level: n,
      z: n,
      col: r3,
      x: r3,
      row: t2,
      y: t2
    });
  }
};
e([y({
  type: String,
  value: "",
  json: {
    write: true
  }
})], U2.prototype, "copyright", void 0), e([y({
  type: w,
  json: {
    write: true
  },
  nonNullable: true
})], U2.prototype, "fullExtent", void 0), e([y({
  readOnly: true,
  json: {
    read: false,
    write: false
  }
})], U2.prototype, "legendEnabled", void 0), e([y({
  type: ["show", "hide"]
})], U2.prototype, "listMode", void 0), e([y({
  json: {
    read: true,
    write: true
  }
})], U2.prototype, "blendMode", void 0), e([y()], U2.prototype, "levelValues", null), e([y({
  type: Boolean,
  json: {
    read: false,
    write: {
      enabled: true,
      overridePolicy: () => ({
        enabled: false
      })
    }
  }
})], U2.prototype, "isReference", void 0), e([y({
  type: ["WebTiledLayer"],
  value: "WebTiledLayer"
})], U2.prototype, "operationalLayerType", void 0), e([y({
  readOnly: true,
  json: {
    read: false,
    write: false
  }
})], U2.prototype, "popupEnabled", void 0), e([y({
  type: f2
})], U2.prototype, "spatialReference", void 0), e([o("spatialReference", ["spatialReference", "fullExtent.spatialReference"])], U2.prototype, "readSpatialReference", null), e([y({
  type: [String],
  json: {
    write: true
  }
})], U2.prototype, "subDomains", void 0), e([y({
  type: z,
  json: {
    write: true
  }
})], U2.prototype, "tileInfo", void 0), e([y({
  readOnly: true
})], U2.prototype, "tileServers", null), e([y({
  json: {
    read: false
  }
})], U2.prototype, "type", void 0), e([y()], U2.prototype, "urlPath", null), e([y({
  type: String,
  json: {
    origins: {
      "portal-item": {
        read: {
          source: "url"
        }
      }
    }
  }
})], U2.prototype, "urlTemplate", void 0), e([o("urlTemplate", ["urlTemplate", "templateUrl"])], U2.prototype, "readUrlTemplate", null), e([r2("urlTemplate", {
  templateUrl: {
    type: String
  }
})], U2.prototype, "writeUrlTemplate", null), e([y({
  type: p2,
  json: {
    write: true
  }
})], U2.prototype, "wmtsInfo", void 0), U2 = L = e([a2("esri.layers.WebTileLayer")], U2);
var I = U2;

export {
  p2 as p,
  I
};
//# sourceMappingURL=chunk-JVYS6X5A.js.map
