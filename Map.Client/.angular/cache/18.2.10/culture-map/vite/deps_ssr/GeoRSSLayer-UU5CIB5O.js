import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n as n2
} from "./chunk-ZREJ3Y2F.js";
import "./chunk-IR6CVPPC.js";
import "./chunk-BBUQOCRA.js";
import "./chunk-YBUJLIWZ.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-VOOO6FU5.js";
import {
  S as S2
} from "./chunk-IUPJR3FF.js";
import {
  y as y3
} from "./chunk-TGZW6QWO.js";
import {
  d,
  n
} from "./chunk-OYIDHTXG.js";
import "./chunk-KUBMHTYA.js";
import "./chunk-6EIBUVMG.js";
import {
  j
} from "./chunk-BD24XM4D.js";
import "./chunk-NXXQ35YM.js";
import "./chunk-3BXPVUY5.js";
import "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-7V4JSBFA.js";
import {
  f as f2
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
import {
  g,
  p,
  y as y2
} from "./chunk-3B5GODXR.js";
import "./chunk-NKXXHQDD.js";
import {
  S
} from "./chunk-7TBQUMV3.js";
import {
  f
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
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-KETDH2J4.js";
import "./chunk-7QV7DHWN.js";
import "./chunk-4L4Y34YK.js";
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
import "./chunk-QGBMZIP4.js";
import "./chunk-AOEBZVTA.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import {
  C
} from "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import {
  U,
  bt
} from "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import "./chunk-G73HQZEL.js";
import "./chunk-LZSLQ24Q.js";
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
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import {
  a
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  s
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=GeoRSSLayer-UU5CIB5O.js.map
