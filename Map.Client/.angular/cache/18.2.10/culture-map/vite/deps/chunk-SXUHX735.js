import {
  a as a3,
  s as s3
} from "./chunk-Q77FSDLB.js";
import {
  p as p2
} from "./chunk-T64NGWGJ.js";
import {
  v as v2
} from "./chunk-N3IR233K.js";
import {
  l
} from "./chunk-DSMB46HB.js";
import {
  j
} from "./chunk-SJX5DIA7.js";
import {
  b
} from "./chunk-ZUSCOMQM.js";
import {
  p
} from "./chunk-DSEUCBVP.js";
import {
  S
} from "./chunk-RXWBJSJ5.js";
import {
  f
} from "./chunk-M2NS3MSU.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  U,
  v
} from "./chunk-SYATLP3H.js";
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
  s as s2
} from "./chunk-HJY2YILU.js";
import {
  t
} from "./chunk-2MMLMOWS.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/ElevationLayer.js
var w = class extends p2(l(b(j(S(f))))) {
  constructor(...e2) {
    super(...e2), this.capabilities = {
      operations: {
        supportsTileMap: false
      }
    }, this.copyright = null, this.heightModelInfo = null, this.path = null, this.minScale = void 0, this.maxScale = void 0, this.opacity = 1, this.operationalLayerType = "ArcGISTiledElevationServiceLayer", this.sourceJSON = null, this.type = "elevation", this.url = null, this.version = null, this._lercDecoder = s3();
  }
  normalizeCtorArgs(e2, r) {
    return "string" == typeof e2 ? __spreadValues({
      url: e2
    }, r) : e2;
  }
  destroy() {
    this._lercDecoder = t(this._lercDecoder);
  }
  readCapabilities(e2, r) {
    const t2 = r.capabilities && r.capabilities.split(",").map((e3) => e3.toLowerCase().trim());
    if (!t2) return {
      operations: {
        supportsTileMap: false
      }
    };
    return {
      operations: {
        supportsTileMap: t2.includes("tilemap")
      }
    };
  }
  readVersion(e2, r) {
    let t2 = r.currentVersion;
    return t2 || (t2 = 9.3), t2;
  }
  load(e2) {
    const r = null != e2 ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({
      supportedTypes: ["Image Service"],
      supportsData: false,
      validateItem: (e3) => {
        if (e3.typeKeywords) {
          for (let r2 = 0; r2 < e3.typeKeywords.length; r2++) if ("elevation 3d layer" === e3.typeKeywords[r2].toLowerCase()) return true;
        }
        throw new s("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}' ", {
          type: "Image Service",
          expectedType: "Image Service Elevation 3D Layer"
        });
      }
    }, e2).catch(a).then(() => this._fetchImageService(r))), Promise.resolve(this);
  }
  fetchTile(e2, t2, i, o2) {
    const s4 = null != (o2 = o2 || {
      signal: null
    }).signal ? o2.signal : o2.signal = new AbortController().signal, a4 = {
      responseType: "array-buffer",
      signal: s4
    }, p3 = {
      noDataValue: o2.noDataValue,
      returnFileInfo: true
    };
    return this.load().then(() => this._fetchTileAvailability(e2, t2, i, o2)).then(() => U(this.getTileUrl(e2, t2, i), a4)).then((e3) => this._lercDecoder.decode(e3.data, p3, s4)).then((e3) => new a3(e3));
  }
  getTileUrl(e2, r, t2) {
    const i = !this.capabilities.operations.supportsTileMap && this.supportsBlankTile, o2 = v(__spreadProps(__spreadValues({}, this.parsedUrl.query), {
      blankTile: !i && null
    }));
    return `${this.parsedUrl.path}/tile/${e2}/${r}/${t2}${o2 ? "?" + o2 : ""}`;
  }
  queryElevation(e2, r) {
    return __async(this, null, function* () {
      const {
        ElevationQuery: t2
      } = yield import("./ElevationQuery-HI6MQWAL.js");
      s2(r);
      return new t2().query(this, e2, r);
    });
  }
  createElevationSampler(e2, r) {
    return __async(this, null, function* () {
      const {
        ElevationQuery: t2
      } = yield import("./ElevationQuery-HI6MQWAL.js");
      s2(r);
      return new t2().createSampler(this, e2, r);
    });
  }
  _fetchTileAvailability(e2, r, t2, i) {
    return this.tilemapCache ? this.tilemapCache.fetchAvailability(e2, r, t2, i) : Promise.resolve("unknown");
  }
  _fetchImageService(e2) {
    return __async(this, null, function* () {
      if (this.sourceJSON) return this.sourceJSON;
      const t2 = {
        query: __spreadValues({
          f: "json"
        }, this.parsedUrl.query),
        responseType: "json",
        signal: e2
      }, i = yield U(this.parsedUrl.path, t2);
      i.ssl && (this.url = this.url?.replace(/^http:/i, "https:")), this.sourceJSON = i.data, this.read(i.data, {
        origin: "service",
        url: this.parsedUrl
      });
    });
  }
  get hasOverriddenFetchTile() {
    return !this.fetchTile[S2];
  }
};
e([y({
  readOnly: true
})], w.prototype, "capabilities", void 0), e([o("service", "capabilities", ["capabilities"])], w.prototype, "readCapabilities", null), e([y({
  json: {
    read: {
      source: "copyrightText"
    }
  }
})], w.prototype, "copyright", void 0), e([y({
  readOnly: true,
  type: v2
})], w.prototype, "heightModelInfo", void 0), e([y({
  type: String,
  json: {
    origins: {
      "web-scene": {
        read: true,
        write: true
      }
    },
    read: false
  }
})], w.prototype, "path", void 0), e([y({
  type: ["show", "hide"]
})], w.prototype, "listMode", void 0), e([y({
  json: {
    read: false,
    write: false,
    origins: {
      service: {
        read: false,
        write: false
      },
      "portal-item": {
        read: false,
        write: false
      },
      "web-document": {
        read: false,
        write: false
      }
    }
  },
  readOnly: true
})], w.prototype, "minScale", void 0), e([y({
  json: {
    read: false,
    write: false,
    origins: {
      service: {
        read: false,
        write: false
      },
      "portal-item": {
        read: false,
        write: false
      },
      "web-document": {
        read: false,
        write: false
      }
    }
  },
  readOnly: true
})], w.prototype, "maxScale", void 0), e([y({
  json: {
    read: false,
    write: false,
    origins: {
      "web-document": {
        read: false,
        write: false
      }
    }
  }
})], w.prototype, "opacity", void 0), e([y({
  type: ["ArcGISTiledElevationServiceLayer"]
})], w.prototype, "operationalLayerType", void 0), e([y()], w.prototype, "sourceJSON", void 0), e([y({
  json: {
    read: false
  },
  value: "elevation",
  readOnly: true
})], w.prototype, "type", void 0), e([y(p)], w.prototype, "url", void 0), e([y()], w.prototype, "version", void 0), e([o("version", ["currentVersion"])], w.prototype, "readVersion", null), w = e([a2("esri.layers.ElevationLayer")], w);
var S2 = Symbol("default-fetch-tile");
w.prototype.fetchTile[S2] = true;
var T = w;

export {
  T
};
//# sourceMappingURL=chunk-SXUHX735.js.map
