import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  X,
  a as a2,
  b as b2,
  f as f3,
  j as j2
} from "./chunk-PCY3647G.js";
import {
  m as m2
} from "./chunk-B5L6EMPL.js";
import "./chunk-YYCVXVUF.js";
import "./chunk-FW7J76DZ.js";
import "./chunk-D5RCKR5Z.js";
import "./chunk-NOVQFMBE.js";
import "./chunk-B76NC7GX.js";
import {
  o as o4
} from "./chunk-YEWOBDQB.js";
import "./chunk-F4FQ67JP.js";
import "./chunk-LL33G4DK.js";
import "./chunk-CILHMGNK.js";
import "./chunk-BZHHBBFX.js";
import "./chunk-A2FDYA6M.js";
import "./chunk-4TOSJLKR.js";
import "./chunk-DL2B6IFJ.js";
import {
  A
} from "./chunk-NBJSAHZT.js";
import {
  j
} from "./chunk-BD24XM4D.js";
import {
  n as n3
} from "./chunk-NXXQ35YM.js";
import "./chunk-3BXPVUY5.js";
import {
  K,
  N
} from "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-7V4JSBFA.js";
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
  o as o3
} from "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-EGBDRLCX.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-KETDH2J4.js";
import "./chunk-7QV7DHWN.js";
import {
  m
} from "./chunk-4L4Y34YK.js";
import "./chunk-BXONKQKI.js";
import {
  n as n2
} from "./chunk-2HDBQXAR.js";
import {
  w,
  x
} from "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  o as o2
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import {
  s as s3
} from "./chunk-66YQWHHE.js";
import "./chunk-QGBMZIP4.js";
import "./chunk-AOEBZVTA.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import {
  G
} from "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import "./chunk-G73HQZEL.js";
import {
  d
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  e
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import {
  k,
  s as s2
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/support/LocalMediaElementSource.js
var w2 = {
  key: "type",
  defaultKeyValue: "image",
  base: j2,
  typeMap: {
    image: b2,
    video: a2
  }
};
var M = V.ofType(w2);
var I = class extends m.LoadableMixin(n2(o.EventedAccessor)) {
  constructor(e3) {
    super(e3), this._index = new o4(), this._elementViewsMap = /* @__PURE__ */ new Map(), this._elementsIndexes = /* @__PURE__ */ new Map(), this._elementsChangedHandler = (e4) => {
      for (const s4 of e4.removed) {
        const e5 = this._elementViewsMap.get(s4);
        this._elementViewsMap.delete(s4), this._index.delete(e5), this.removeHandles(e5), e5.destroy(), this.notifyChange("fullExtent");
      }
      const {
        spatialReference: t2
      } = this;
      for (const s4 of e4.added) {
        if (this._elementViewsMap.get(s4)) continue;
        const e5 = new m2({
          spatialReference: t2,
          element: s4
        });
        this._elementViewsMap.set(s4, e5);
        const r2 = d(() => e5.coords, () => this._updateIndexForElement(e5, false));
        this._updateIndexForElement(e5, true), this.addHandles(r2, e5);
      }
      this._elementsIndexes.clear(), this.elements.forEach((e5, t3) => this._elementsIndexes.set(e5, t3)), this.emit("refresh");
    }, this.elements = new M();
  }
  load(e3) {
    return __async(this, null, function* () {
      if (s2(e3), !this.spatialReference) {
        const e4 = this.elements.find((e5) => null != e5.georeference?.coords);
        this._set("spatialReference", e4 ? e4.georeference.coords.spatialReference : f.WGS84);
      }
      return this._elementsChangedHandler({
        added: this.elements.items,
        removed: []
      }), this.addHandles(this.elements.on("change", this._elementsChangedHandler)), this;
    });
  }
  destroy() {
    this._index.clear(), this._elementViewsMap.clear(), this._elementsIndexes.clear();
  }
  set elements(e3) {
    this._set("elements", n3(e3, this._get("elements"), M));
  }
  get fullExtent() {
    if ("not-loaded" === this.loadStatus) return null;
    const e3 = this._index.fullBounds;
    return null == e3 ? null : new w({
      xmin: e3[0],
      ymin: e3[1],
      xmax: e3[2],
      ymax: e3[3],
      spatialReference: this.spatialReference
    });
  }
  set spatialReference(e3) {
    "not-loaded" === this.loadStatus ? this._set("spatialReference", e3) : n.getLogger(this).error("#spatialReference", "spatialReference cannot be changed after the source is loaded.");
  }
  queryElements(e3, t2) {
    return __async(this, null, function* () {
      yield this.load(), yield N(e3.spatialReference, this.spatialReference, null, t2);
      const s4 = G(e3.spatialReference, this.spatialReference) ? e3 : K(e3, this.spatialReference);
      if (!s4) return [];
      const r2 = s4.normalize(), o5 = [];
      for (const n4 of r2) this._index.forEachInBounds(o3(n4), ({
        normalizedCoords: e4,
        element: t3
      }) => {
        null != e4 && x(n4, e4) && o5.push(t3);
      });
      return o5.sort((e4, t3) => this._elementsIndexes.get(e4) - this._elementsIndexes.get(t3)), o5;
    });
  }
  hasElement(e3) {
    return this.elements.includes(e3);
  }
  _updateIndexForElement(e3, t2) {
    const s4 = e3.normalizedBounds, r2 = this._index.has(e3), o5 = null != s4;
    this._index.delete(e3), o5 && this._index.set(e3, s4), this.notifyChange("fullExtent"), t2 || (r2 !== o5 ? this.emit("refresh") : this.emit("change", {
      element: e3.element
    }));
  }
};
e2([y()], I.prototype, "elements", null), e2([y({
  readOnly: true
})], I.prototype, "fullExtent", null), e2([y()], I.prototype, "spatialReference", null), I = e2([a("esri.layers.support.LocalMediaElementSource")], I);
var V2 = I;

// ../../../node_modules/@arcgis/core/layers/MediaLayer.js
function b3(e3) {
  return "object" == typeof e3 && null != e3 && "type" in e3;
}
function L(e3) {
  return b3(e3) && "image" === e3.type;
}
var E = class extends l(t(b(j(S(f2))))) {
  constructor(e3) {
    super(e3), this.effectiveSource = null, this.georeference = null, this.copyright = null, this.operationalLayerType = "MediaLayer", this.spatialReference = null, this.type = "media", this._debouncedSaveOperations = k((e4, r2, o5) => __async(this, null, function* () {
      const {
        save: t2,
        saveAs: s4
      } = yield import("./mediaLayerUtils-CGZZSKSS.js");
      switch (e4) {
        case A.SAVE:
          return t2(this, r2);
        case A.SAVE_AS:
          return s4(this, o5, r2);
      }
    })), this.source = new V2();
  }
  load(e3) {
    return this.addResolvingPromise(this._doLoad(e3)), Promise.resolve(this);
  }
  _doLoad(e3) {
    return __async(this, null, function* () {
      yield this.loadFromPortal({
        supportedTypes: ["Media Layer"]
      }, e3);
      let t2 = this.source;
      if (!t2) throw new s("media-layer:source-missing", "Set 'MediaLayer.source' before loading the layer.");
      const s4 = this._getSourceOverride(t2, this.georeference);
      s4 && (this.setAtOrigin("source", s4, "web-map"), this.setAtOrigin("source", s4, "web-scene"), t2 = s4);
      const i = b3(t2) ? new V2({
        elements: new V([t2])
      }) : t2;
      this._set("effectiveSource", i), this.spatialReference && (i.spatialReference = this.spatialReference), yield i.load(e3), this.spatialReference = i.spatialReference;
    });
  }
  destroy() {
    this.effectiveSource?.destroy(), this.effectiveSource !== this.source && this.source?.destroy();
  }
  readGeoreference(e3, r2) {
    return e3 && "itemId" in r2 && r2.itemId ? e3 : void 0;
  }
  get fullExtent() {
    return this.loaded ? this.effectiveSource.fullExtent : null;
  }
  set source(e3) {
    "loaded" !== this.loadStatus && "failed" !== this.loadStatus ? this._set("source", e3) : n.getLogger(this).error("#source", "source cannot be changed after the layer is loaded.");
  }
  castSource(e3) {
    return e3 ? Array.isArray(e3) ? new V2({
      elements: new V(e3)
    }) : e3 instanceof V ? new V2({
      elements: e3
    }) : e3 : null;
  }
  readSource(e3, r2, o5) {
    if ("itemId" in r2 && r2.itemId) return;
    const t2 = this._createSource(r2);
    return t2?.read(r2, o5), t2;
  }
  writeSource(e3, r2, t2, s4) {
    if (e3 && e3 instanceof V2) {
      const r3 = e3.elements.length;
      if (1 !== r3) return void (s4?.messages && s4.messages.push(new s("media-layer:unsupported-source", `local media element source can only be persisted if it contains exactly one ImageElement, but it has ${r3}.`)));
      e3 = e3.elements.at(0);
    }
    L(e3) ? e3.write(r2, s4) : s4?.messages && (e3 ? s4.messages.push(new s("media-layer:unsupported-source", "only media elements of type 'ImageElement' can be persisted")) : s4.messages.push(new s("media-layer:unsupported-source", "the media layer is missing a source")));
  }
  save(e3) {
    return __async(this, null, function* () {
      return this._debouncedSaveOperations(A.SAVE, e3);
    });
  }
  saveAs(e3, r2) {
    return __async(this, null, function* () {
      return this._debouncedSaveOperations(A.SAVE_AS, r2, e3);
    });
  }
  _createSource(e3) {
    if ("mediaType" in e3) switch (e3.mediaType) {
      case "image":
        return new b2();
      case "video":
        return new a2();
    }
    return null;
  }
  _getSourceOverride(e3, r2) {
    if (b3(e3) && this.originIdOf("source") === e.PORTAL_ITEM && r2 && (this.originIdOf("georeference") === e.WEB_MAP || this.originIdOf("georeference") === e.WEB_SCENE)) {
      const o5 = e3.toJSON(), t2 = this._createSource(o5);
      return t2.read(__spreadValues({}, o5), {
        origin: "portal-item"
      }), t2.read({
        georeference: r2
      }, {
        origin: "web-map"
      }), t2.read({
        georeference: r2
      }, {
        origin: "web-scene"
      }), t2;
    }
    return null;
  }
};
e2([y({
  readOnly: true
})], E.prototype, "effectiveSource", void 0), e2([y({
  readOnly: true,
  json: {
    read: false,
    write: false,
    origins: {
      "web-document": {
        read: true
      }
    }
  }
})], E.prototype, "georeference", void 0), e2([o2("web-document", "georeference")], E.prototype, "readGeoreference", null), e2([y({
  type: String
})], E.prototype, "copyright", void 0), e2([y({
  readOnly: true
})], E.prototype, "fullExtent", null), e2([y({
  type: ["MediaLayer"]
})], E.prototype, "operationalLayerType", void 0), e2([y({
  type: ["show", "hide"]
})], E.prototype, "listMode", void 0), e2([y({
  nonNullable: true,
  json: {
    write: {
      enabled: true,
      allowNull: false,
      target: {
        url: {
          type: String
        },
        mediaType: {
          type: ["image"]
        },
        georeference: {
          type: X
        }
      },
      overridePolicy(e3, r2, o5) {
        return {
          enabled: true,
          allowNull: false,
          ignoreOrigin: f3(this, o5?.origin) && L(e3) && !!e3.georeference && e3.originIdOf("georeference") > e.PORTAL_ITEM
        };
      }
    }
  }
})], E.prototype, "source", null), e2([s3("source")], E.prototype, "castSource", null), e2([o2("source", ["url"])], E.prototype, "readSource", null), e2([r("source")], E.prototype, "writeSource", null), e2([y()], E.prototype, "spatialReference", void 0), e2([y({
  readOnly: true
})], E.prototype, "type", void 0), E = e2([a("esri.layers.MediaLayer")], E);
var _ = E;
export {
  _ as default
};
//# sourceMappingURL=MediaLayer-TFV3WRZH.js.map
