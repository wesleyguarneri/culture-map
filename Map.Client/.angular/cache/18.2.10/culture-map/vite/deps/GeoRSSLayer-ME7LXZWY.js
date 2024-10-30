import {
  n as n2
} from "./chunk-634JLXD4.js";
import "./chunk-Y3EDGYWG.js";
import "./chunk-UF6JOUSJ.js";
import "./chunk-T5JGQSO3.js";
import "./chunk-CIW3KHOW.js";
import "./chunk-J55F4AC2.js";
import {
  S as S2
} from "./chunk-IQLBZKUD.js";
import {
  y as y3
} from "./chunk-7MZZCQ64.js";
import {
  j
} from "./chunk-SJX5DIA7.js";
import "./chunk-6A7CWJED.js";
import "./chunk-LFKEQKEA.js";
import "./chunk-DUTZNK67.js";
import "./chunk-IN6BQCWS.js";
import "./chunk-JM7HAEY6.js";
import {
  f as f2
} from "./chunk-DOK4SACJ.js";
import {
  l
} from "./chunk-OUKUASAF.js";
import "./chunk-V5RMUGJJ.js";
import "./chunk-D2NB6D6N.js";
import {
  t
} from "./chunk-UWJIHV6Q.js";
import {
  b
} from "./chunk-ZUSCOMQM.js";
import {
  g,
  p,
  y as y2
} from "./chunk-DSEUCBVP.js";
import "./chunk-UPDWQH75.js";
import {
  S
} from "./chunk-RXWBJSJ5.js";
import {
  f
} from "./chunk-M2NS3MSU.js";
import "./chunk-HMNBB7ED.js";
import "./chunk-3RRMLFFN.js";
import "./chunk-DR5TVNEL.js";
import "./chunk-HT2T6PUB.js";
import "./chunk-K64AAM77.js";
import "./chunk-6EUVKE22.js";
import "./chunk-A3NNJ7XA.js";
import "./chunk-OKJHJ3CY.js";
import "./chunk-XTVPEVHA.js";
import "./chunk-DTUSTSEJ.js";
import "./chunk-JCWFGRHQ.js";
import "./chunk-JILEJ6R2.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import {
  d,
  n
} from "./chunk-DZALMCYL.js";
import "./chunk-K226GFDN.js";
import "./chunk-4ZZRP4MA.js";
import "./chunk-7ZJ6P7J7.js";
import "./chunk-FPFZQCEQ.js";
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-FYAEQPUY.js";
import "./chunk-7XMEZQ34.js";
import "./chunk-BDM2D6IC.js";
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import "./chunk-OGZAGPIO.js";
import "./chunk-HJJIIYFF.js";
import "./chunk-7RMVJCDW.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import {
  C
} from "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import {
  U,
  bt
} from "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import "./chunk-6WHTZNUH.js";
import "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import {
  a3 as a2
} from "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import {
  a
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  s
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/GeoRSSLayer.js
var G = ["atom", "xml"];
var P = {
  base: n,
  key: "type",
  typeMap: {
    "simple-line": d
  },
  errorContext: "symbol"
};
var R = {
  base: n,
  key: "type",
  typeMap: {
    "picture-marker": n2,
    "simple-marker": y3
  },
  errorContext: "symbol"
};
var k = {
  base: n,
  key: "type",
  typeMap: {
    "simple-fill": S2
  },
  errorContext: "symbol"
};
var _ = class extends l(f2(b(j(t(S(f)))))) {
  constructor(...e2) {
    super(...e2), this.description = null, this.fullExtent = null, this.legendEnabled = true, this.lineSymbol = null, this.pointSymbol = null, this.polygonSymbol = null, this.operationalLayerType = "GeoRSS", this.url = null, this.type = "geo-rss";
  }
  normalizeCtorArgs(e2, o2) {
    return "string" == typeof e2 ? __spreadValues({
      url: e2
    }, o2) : e2;
  }
  readFeatureCollections(e2, o2) {
    return o2.featureCollection.layers.forEach((e3) => {
      const o3 = e3.layerDefinition.drawingInfo.renderer.symbol;
      o3 && "esriSFS" === o3.type && o3.outline?.style.includes("esriSFS") && (o3.outline.style = "esriSLSSolid");
    }), o2.featureCollection.layers;
  }
  get hasPoints() {
    return this._hasGeometry("esriGeometryPoint");
  }
  get hasPolylines() {
    return this._hasGeometry("esriGeometryPolyline");
  }
  get hasPolygons() {
    return this._hasGeometry("esriGeometryPolygon");
  }
  get title() {
    const e2 = this._get("title");
    return e2 && "defaults" !== this.originOf("title") ? e2 : this.url ? bt(this.url, G) || "GeoRSS" : e2;
  }
  set title(e2) {
    this._set("title", e2);
  }
  load(e2) {
    const o2 = null != e2 ? e2.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({
      supportedTypes: ["Map Service", "Feature Service", "Feature Collection", "Scene Service"]
    }, e2).catch(a).then(() => this._fetchService(o2)).then((e3) => {
      this.read(e3, {
        origin: "service"
      });
    })), Promise.resolve(this);
  }
  hasDataChanged() {
    return __async(this, null, function* () {
      const e2 = yield this._fetchService();
      return this.read(e2, {
        origin: "service",
        ignoreDefaults: true
      }), true;
    });
  }
  _fetchService(e2) {
    return __async(this, null, function* () {
      const t2 = this.spatialReference, {
        data: s2
      } = yield U(s.geoRSSServiceUrl, {
        query: {
          url: this.url,
          refresh: !!this.loaded || void 0,
          outSR: C(t2) ? void 0 : t2.wkid ?? JSON.stringify(t2)
        },
        signal: e2
      });
      return s2;
    });
  }
  _hasGeometry(e2) {
    return this.featureCollections?.some((o2) => o2.featureSet?.geometryType === e2 && o2.featureSet.features?.length > 0) ?? false;
  }
};
e([y()], _.prototype, "description", void 0), e([y()], _.prototype, "featureCollections", void 0), e([o("service", "featureCollections", ["featureCollection.layers"])], _.prototype, "readFeatureCollections", null), e([y({
  type: w,
  json: {
    name: "lookAtExtent"
  }
})], _.prototype, "fullExtent", void 0), e([y(g)], _.prototype, "id", void 0), e([y(y2)], _.prototype, "legendEnabled", void 0), e([y({
  types: P,
  json: {
    write: true
  }
})], _.prototype, "lineSymbol", void 0), e([y({
  type: ["show", "hide"]
})], _.prototype, "listMode", void 0), e([y({
  types: R,
  json: {
    write: true
  }
})], _.prototype, "pointSymbol", void 0), e([y({
  types: k,
  json: {
    write: true
  }
})], _.prototype, "polygonSymbol", void 0), e([y({
  type: ["GeoRSS"]
})], _.prototype, "operationalLayerType", void 0), e([y(p)], _.prototype, "url", void 0), e([y({
  json: {
    origins: {
      service: {
        read: {
          source: "name",
          reader: (e2) => e2 || void 0
        }
      }
    }
  }
})], _.prototype, "title", null), e([y({
  readOnly: true,
  json: {
    read: false
  },
  value: "geo-rss"
})], _.prototype, "type", void 0), _ = e([a2("esri.layers.GeoRSSLayer")], _);
var w2 = _;
export {
  w2 as default
};
//# sourceMappingURL=GeoRSSLayer-ME7LXZWY.js.map
