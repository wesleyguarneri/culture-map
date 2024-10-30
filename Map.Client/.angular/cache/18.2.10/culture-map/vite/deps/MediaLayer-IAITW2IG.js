import {
  X,
  a as a2,
  b as b2,
  f as f3,
  j as j2
} from "./chunk-TG5SAXSX.js";
import {
  m as m2
} from "./chunk-4DWBMVDA.js";
import "./chunk-M6OMH2UP.js";
import "./chunk-S5SROJXI.js";
import "./chunk-Q7ENCKPJ.js";
import "./chunk-OHXCVJMH.js";
import "./chunk-VS26W5Y5.js";
import {
  o as o4
} from "./chunk-BIWDYV6F.js";
import "./chunk-ED7UGR2X.js";
import "./chunk-YVOGHYE3.js";
import "./chunk-IBOZJLSO.js";
import "./chunk-DY7FJHTG.js";
import "./chunk-JYODC3YQ.js";
import "./chunk-TYQXPPSP.js";
import "./chunk-CIW3KHOW.js";
import {
  A
} from "./chunk-ZZEAVAVX.js";
import {
  j
} from "./chunk-SJX5DIA7.js";
import {
  n as n3
} from "./chunk-6A7CWJED.js";
import "./chunk-LFKEQKEA.js";
import {
  K,
  N
} from "./chunk-DUTZNK67.js";
import "./chunk-IN6BQCWS.js";
import "./chunk-JM7HAEY6.js";
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
import "./chunk-DSEUCBVP.js";
import "./chunk-UPDWQH75.js";
import {
  S
} from "./chunk-RXWBJSJ5.js";
import {
  f as f2
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
import "./chunk-7ZJ6P7J7.js";
import "./chunk-FPFZQCEQ.js";
import "./chunk-5I6J67HP.js";
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-FYAEQPUY.js";
import "./chunk-7XMEZQ34.js";
import {
  m
} from "./chunk-BDM2D6IC.js";
import "./chunk-U2ZVAEKG.js";
import {
  n as n2
} from "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import "./chunk-OGZAGPIO.js";
import "./chunk-HJJIIYFF.js";
import "./chunk-7RMVJCDW.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import {
  o as o3
} from "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import {
  w,
  x
} from "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import {
  o as o2
} from "./chunk-NQOJNTB3.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import {
  s as s3
} from "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import {
  G
} from "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import {
  d
} from "./chunk-6WHTZNUH.js";
import {
  V
} from "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import "./chunk-XNUH25NY.js";
import {
  o
} from "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
import {
  e as e2
} from "./chunk-4Z5SGKRM.js";
import {
  e
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import {
  k,
  s as s2
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

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
      } = yield import("./mediaLayerUtils-2CKCJKNP.js");
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
//# sourceMappingURL=MediaLayer-IAITW2IG.js.map
