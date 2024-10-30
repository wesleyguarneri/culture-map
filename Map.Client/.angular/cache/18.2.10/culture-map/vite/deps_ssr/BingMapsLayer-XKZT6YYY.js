import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  o
} from "./chunk-ACSTKBET.js";
import {
  p,
  z
} from "./chunk-KAHESDP5.js";
import {
  t as t2
} from "./chunk-ONRZ4VTT.js";
import {
  f as f3
} from "./chunk-REIMIECM.js";
import {
  l
} from "./chunk-EO2EW5KR.js";
import "./chunk-JEFPXTYT.js";
import "./chunk-MVS2BECH.js";
import {
  t
} from "./chunk-UZ7IOCF3.js";
import {
  b
} from "./chunk-OS542PQQ.js";
import "./chunk-3B5GODXR.js";
import "./chunk-NKXXHQDD.js";
import {
  S
} from "./chunk-7TBQUMV3.js";
import {
  f as f2
} from "./chunk-TPLUZX3A.js";
import "./chunk-BGLJ2FAH.js";
import "./chunk-2EJFYNM7.js";
import "./chunk-DC5LRNPY.js";
import "./chunk-ASCK5HJ5.js";
import "./chunk-5X5U7R6O.js";
import "./chunk-XNLAOXPY.js";
import "./chunk-ZT7V2AVD.js";
import "./chunk-C2OXE4NQ.js";
import "./chunk-KOI252FF.js";
import "./chunk-I2TVVMQ6.js";
import "./chunk-5EGQYY2H.js";
import "./chunk-JKPUNUQA.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-VYTPFEL2.js";
import "./chunk-RLGDH6IY.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import {
  u
} from "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-4L4Y34YK.js";
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import {
  n
} from "./chunk-Y2HYKTTT.js";
import {
  U
} from "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import "./chunk-G73HQZEL.js";
import "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/BaseTileLayer.js
var h;
var d = new t2("0/0/0", 0, 0, 0, void 0);
var g = h = class extends l(t(f3(f2))) {
  constructor() {
    super(...arguments), this.tileInfo = z.create({
      spatialReference: f.WebMercator,
      size: 256
    }), this.type = "base-tile", this.fullExtent = new w(-20037508342787e-6, -2003750834278e-5, 2003750834278e-5, 20037508342787e-6, f.WebMercator), this.spatialReference = f.WebMercator;
  }
  getTileBounds(e2, t3, r, o2) {
    const s2 = o2 || u();
    return d.level = e2, d.row = t3, d.col = r, d.extent = s2, this.tileInfo.updateTileInfo(d), d.extent = void 0, s2;
  }
  fetchTile(e2, r, o2, s2 = {}) {
    const {
      signal: i
    } = s2, a2 = this.getTileUrl(e2, r, o2), p2 = {
      responseType: "image",
      signal: i,
      query: __spreadValues({}, this.refreshParameters)
    };
    return U(a2 ?? "", p2).then((e3) => e3.data);
  }
  fetchImageBitmapTile(_0, _1, _2) {
    return __async(this, arguments, function* (e2, r, o2, s2 = {}) {
      const {
        signal: i
      } = s2;
      if (this.fetchTile !== h.prototype.fetchTile) {
        const t3 = yield this.fetchTile(e2, r, o2, s2);
        return o(t3, e2, r, o2, i);
      }
      const a2 = this.getTileUrl(e2, r, o2) ?? "", p2 = {
        responseType: "blob",
        signal: i,
        query: __spreadValues({}, this.refreshParameters)
      }, {
        data: l2
      } = yield U(a2, p2);
      return o(l2, e2, r, o2, i);
    });
  }
  getTileUrl() {
    throw new s("basetilelayer:gettileurl-not-implemented", "getTileUrl() is not implemented");
  }
};
e([y({
  type: z
})], g.prototype, "tileInfo", void 0), e([y({
  type: ["show", "hide"]
})], g.prototype, "listMode", void 0), e([y({
  readOnly: true,
  value: "base-tile"
})], g.prototype, "type", void 0), e([y({
  nonNullable: true
})], g.prototype, "fullExtent", void 0), e([y()], g.prototype, "spatialReference", void 0), g = h = e([a("esri.layers.BaseTileLayer")], g);
var j = g;

// ../../../node_modules/@arcgis/core/layers/BingMapsLayer.js
var c = new n({
  BingMapsAerial: "aerial",
  BingMapsRoad: "road",
  BingMapsHybrid: "hybrid"
});
var m = "https://dev.virtualearth.net";
var h2 = class extends l(b(S(j))) {
  constructor(e2) {
    super(e2), this.type = "bing-maps", this.tileInfo = new z({
      size: [256, 256],
      dpi: 96,
      origin: new _({
        x: -20037508342787e-6,
        y: 20037508342787e-6,
        spatialReference: f.WebMercator
      }),
      spatialReference: f.WebMercator,
      lods: [new p({
        level: 1,
        resolution: 78271.5169639999,
        scale: 295828763795777e-6
      }), new p({
        level: 2,
        resolution: 39135.7584820001,
        scale: 147914381897889e-6
      }), new p({
        level: 3,
        resolution: 19567.8792409999,
        scale: 73957190948944e-6
      }), new p({
        level: 4,
        resolution: 9783.93962049996,
        scale: 36978595474472e-6
      }), new p({
        level: 5,
        resolution: 4891.96981024998,
        scale: 18489297737236e-6
      }), new p({
        level: 6,
        resolution: 2445.98490512499,
        scale: 9244648868618e-6
      }), new p({
        level: 7,
        resolution: 1222.99245256249,
        scale: 4622324434309e-6
      }), new p({
        level: 8,
        resolution: 611.49622628138,
        scale: 2311162217155e-6
      }), new p({
        level: 9,
        resolution: 305.748113140558,
        scale: 1155581108577e-6
      }), new p({
        level: 10,
        resolution: 152.874056570411,
        scale: 577790.554289
      }), new p({
        level: 11,
        resolution: 76.4370282850732,
        scale: 288895.277144
      }), new p({
        level: 12,
        resolution: 38.2185141425366,
        scale: 144447.638572
      }), new p({
        level: 13,
        resolution: 19.1092570712683,
        scale: 72223.819286
      }), new p({
        level: 14,
        resolution: 9.55462853563415,
        scale: 36111.909643
      }), new p({
        level: 15,
        resolution: 4.77731426794937,
        scale: 18055.954822
      }), new p({
        level: 16,
        resolution: 2.38865713397468,
        scale: 9027.977411
      }), new p({
        level: 17,
        resolution: 1.19432856685505,
        scale: 4513.988705
      }), new p({
        level: 18,
        resolution: 0.597164283559817,
        scale: 2256.994353
      }), new p({
        level: 19,
        resolution: 0.298582141647617,
        scale: 1128.497176
      }), new p({
        level: 20,
        resolution: 0.1492910708238085,
        scale: 564.248588
      })]
    }), this.key = null, this.style = "road", this.culture = "en-US", this.region = null, this.portalUrl = null, this.hasAttributionData = true;
  }
  get bingMetadata() {
    return this._get("bingMetadata");
  }
  set bingMetadata(e2) {
    this._set("bingMetadata", e2);
  }
  get copyright() {
    return null != this.bingMetadata ? this.bingMetadata.copyright : null;
  }
  get operationalLayerType() {
    return c.toJSON(this.style);
  }
  get bingLogo() {
    return null != this.bingMetadata ? this.bingMetadata.brandLogoUri : null;
  }
  load(e2) {
    return this.key ? this.addResolvingPromise(this._getMetadata()) : this.portalUrl ? this.addResolvingPromise(this._getPortalBingKey().then(() => this._getMetadata())) : this.addResolvingPromise(Promise.reject(new s("bingmapslayer:load", "Bing layer must have bing key."))), Promise.resolve(this);
  }
  getTileUrl(e2, t3, r) {
    if (!this.loaded || null == this.bingMetadata) return null;
    const o2 = this.bingMetadata.resourceSets[0].resources[0], a2 = o2.imageUrlSubdomains[t3 % o2.imageUrlSubdomains.length], s2 = this._getQuadKey(e2, t3, r);
    return o2.imageUrl.replace("{subdomain}", a2).replace("{quadkey}", s2);
  }
  fetchAttributionData() {
    return __async(this, null, function* () {
      return this.load().then(() => {
        if (null == this.bingMetadata) return null;
        return {
          contributors: this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e2) => ({
            attribution: e2.attribution,
            coverageAreas: e2.coverageAreas.map((e3) => ({
              zoomMin: e3.zoomMin,
              zoomMax: e3.zoomMax,
              score: 1,
              bbox: [e3.bbox[0], e3.bbox[1], e3.bbox[2], e3.bbox[3]]
            }))
          }))
        };
      });
    });
  }
  _getMetadata() {
    const e2 = {
      road: "roadOnDemand",
      aerial: "aerial",
      hybrid: "aerialWithLabelsOnDemand"
    }[this.style];
    return U(`${m}/REST/v1/Imagery/Metadata/${e2}`, {
      responseType: "json",
      query: {
        include: "ImageryProviders",
        uriScheme: "https",
        key: this.key,
        suppressStatus: true,
        output: "json",
        culture: this.culture,
        userRegion: this.region
      }
    }).then((e3) => {
      const t3 = e3.data;
      if (200 !== t3.statusCode) throw new s("bingmapslayer:getmetadata", t3.statusDescription);
      if (this.bingMetadata = t3, 0 === this.bingMetadata.resourceSets.length) throw new s("bingmapslayer:getmetadata", "no bing resourcesets");
      if (0 === this.bingMetadata.resourceSets[0].resources.length) throw new s("bingmapslayer:getmetadata", "no bing resources");
    }).catch((e3) => {
      throw new s("bingmapslayer:getmetadata", e3.message);
    });
  }
  _getPortalBingKey() {
    return U(this.portalUrl ?? "", {
      responseType: "json",
      authMode: "no-prompt",
      query: {
        f: "json"
      }
    }).then((e2) => {
      if (!e2.data.bingKey) throw new s("bingmapslayer:getportalbingkey", "The referenced Portal does not contain a valid bing key");
      this.key = e2.data.bingKey;
    }).catch((e2) => {
      throw new s("bingmapslayer:getportalbingkey", e2.message);
    });
  }
  _getQuadKey(e2, t3, r) {
    let o2 = "";
    for (let a2 = e2; a2 > 0; a2--) {
      let e3 = 0;
      const s2 = 1 << a2 - 1;
      r & s2 && (e3 += 1), t3 & s2 && (e3 += 2), o2 += e3.toString();
    }
    return o2;
  }
};
e([y({
  json: {
    read: false,
    write: false
  },
  value: null
})], h2.prototype, "bingMetadata", null), e([y({
  json: {
    read: false,
    write: false
  },
  value: "bing-maps",
  readOnly: true
})], h2.prototype, "type", void 0), e([y({
  type: z
})], h2.prototype, "tileInfo", void 0), e([y({
  type: String,
  readOnly: true,
  json: {
    read: false,
    write: false
  }
})], h2.prototype, "copyright", null), e([y({
  type: String,
  json: {
    write: false,
    read: false
  }
})], h2.prototype, "key", void 0), e([y({
  type: c.apiValues,
  nonNullable: true,
  json: {
    read: {
      source: "layerType",
      reader: c.read
    }
  }
})], h2.prototype, "style", void 0), e([y({
  type: ["BingMapsAerial", "BingMapsHybrid", "BingMapsRoad"]
})], h2.prototype, "operationalLayerType", null), e([y({
  type: String,
  json: {
    write: false,
    read: false
  }
})], h2.prototype, "culture", void 0), e([y({
  type: String,
  json: {
    write: false,
    read: false
  }
})], h2.prototype, "region", void 0), e([y({
  type: String,
  json: {
    write: true,
    read: true
  }
})], h2.prototype, "portalUrl", void 0), e([y({
  type: Boolean,
  json: {
    write: false,
    read: false
  }
})], h2.prototype, "hasAttributionData", void 0), e([y({
  type: String,
  readOnly: true
})], h2.prototype, "bingLogo", null), h2 = e([a("esri.layers.BingMapsLayer")], h2);
var b2 = h2;
export {
  b2 as default
};
//# sourceMappingURL=BingMapsLayer-XKZT6YYY.js.map
