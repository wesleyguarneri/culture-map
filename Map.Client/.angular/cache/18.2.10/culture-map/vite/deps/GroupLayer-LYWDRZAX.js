import {
  l as l3,
  n2,
  t as t4
} from "./chunk-ZACL2JP7.js";
import {
  e as e3
} from "./chunk-WPPFJVPN.js";
import {
  l
} from "./chunk-L3T5PF4P.js";
import {
  A as A2
} from "./chunk-ZZEAVAVX.js";
import {
  j
} from "./chunk-SJX5DIA7.js";
import {
  f
} from "./chunk-SGSUM5YO.js";
import {
  t as t2
} from "./chunk-SG5TCCCK.js";
import "./chunk-6A7CWJED.js";
import {
  r as r2
} from "./chunk-APL7ANIA.js";
import "./chunk-LFKEQKEA.js";
import "./chunk-DUTZNK67.js";
import "./chunk-IN6BQCWS.js";
import {
  a as a3
} from "./chunk-7W742U7L.js";
import "./chunk-JM7HAEY6.js";
import {
  l as l2
} from "./chunk-OUKUASAF.js";
import "./chunk-V5RMUGJJ.js";
import "./chunk-D2NB6D6N.js";
import {
  t as t3
} from "./chunk-UWJIHV6Q.js";
import {
  b
} from "./chunk-ZUSCOMQM.js";
import "./chunk-DSEUCBVP.js";
import "./chunk-UPDWQH75.js";
import {
  S as S2
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
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import {
  S
} from "./chunk-FYAEQPUY.js";
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
import "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import {
  A,
  C,
  d,
  v
} from "./chunk-6WHTZNUH.js";
import "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
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
  a3 as a2,
  t
} from "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import {
  a,
  k
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/GroupLayer.js
var V = class extends l2(t3(b(j(n2(l3(S2(f2))))))) {
  constructor(e4) {
    super(e4), this.allLayers = new l({
      getCollections: () => [this.layers],
      getChildrenFunction: (e5) => "layers" in e5 ? e5.layers : null
    }), this.allTables = t4(this), this.fullExtent = void 0, this.operationalLayerType = "GroupLayer", this.spatialReference = void 0, this.type = "group", this._debouncedSaveOperations = k((e5, i, t5) => __async(this, null, function* () {
      const {
        save: r3,
        saveAs: s
      } = yield import("./groupLayerUtils-ZBQD7TKR.js");
      switch (e5) {
        case A2.SAVE:
          return r3(this, i);
        case A2.SAVE_AS:
          return s(this, t5, i);
      }
    }));
  }
  initialize() {
    this._enforceVisibility(this.visibilityMode, this.visible), this.addHandles([d(() => {
      let e4 = this.parent;
      for (; e4 && "parent" in e4 && e4.parent; ) e4 = e4.parent;
      return e4 && e3 in e4;
    }, (e4) => {
      const i = "prevent-adding-tables";
      this.removeHandles(i), e4 && (this.tables.removeAll(), this.addHandles(v(() => this.tables, "before-add", (e5) => {
        e5.preventDefault(), n.getLogger(this).errorOnce("tables", "tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.");
      }), i));
    }, A), d(() => this.visible, this._onVisibilityChange.bind(this), C)]);
  }
  destroy() {
    this.allLayers.destroy(), this.allTables.destroy();
  }
  get sourceIsPortalItem() {
    return this.portalItem && this.originIdOf("portalItem") === e.USER;
  }
  _writeLayers(e4, i, t5, r3) {
    const s = [];
    if (!e4) return s;
    e4.forEach((e5) => {
      const i2 = f(e5, r3.webmap ? r3.webmap.getLayerJSONFromResourceInfo(e5) : null, r3);
      i2?.layerType && s.push(i2);
    }), i.layers = s;
  }
  set portalItem(e4) {
    this._set("portalItem", e4);
  }
  readPortalItem(e4, i, t5) {
    const {
      itemId: r3,
      layerType: s
    } = i;
    if ("GroupLayer" === s && r3) return new S({
      id: r3,
      portal: t5?.portal
    });
  }
  writePortalItem(e4, i) {
    e4?.id && (i.itemId = e4.id);
  }
  set visibilityMode(e4) {
    const i = this._get("visibilityMode") !== e4;
    this._set("visibilityMode", e4), i && this._enforceVisibility(e4, this.visible);
  }
  beforeSave() {
    return __async(this, null, function* () {
      return r2(this);
    });
  }
  load(e4) {
    const i = this.loadFromPortal({
      supportedTypes: ["Feature Service", "Feature Collection", "Group Layer", "Scene Service"],
      layerModuleTypeMap: a3
    }, e4).catch((e5) => {
      if (a(e5), this.sourceIsPortalItem) throw e5;
    });
    return this.addResolvingPromise(i), Promise.resolve(this);
  }
  loadAll() {
    return __async(this, null, function* () {
      return t2(this, (e4) => {
        e4(this.layers, this.tables);
      });
    });
  }
  save(e4) {
    return __async(this, null, function* () {
      return this._debouncedSaveOperations(A2.SAVE, e4);
    });
  }
  saveAs(e4, i) {
    return __async(this, null, function* () {
      return this._debouncedSaveOperations(A2.SAVE_AS, i, e4);
    });
  }
  layerAdded(e4) {
    e4.visible && "exclusive" === this.visibilityMode ? this._turnOffOtherLayers(e4) : "inherited" === this.visibilityMode && (e4.visible = this.visible), this.hasHandles(e4.uid) ? console.error(`Layer read to Grouplayer: uid=${e4.uid}`) : this.addHandles(d(() => e4.visible, (i) => this._onChildVisibilityChange(e4, i), C), e4.uid);
  }
  layerRemoved(e4) {
    this.removeHandles(e4.uid), this._enforceVisibility(this.visibilityMode, this.visible);
  }
  _turnOffOtherLayers(e4) {
    this.layers.forEach((i) => {
      i !== e4 && (i.visible = false);
    });
  }
  _enforceVisibility(e4, i) {
    if (!t(this).initialized) return;
    const t5 = this.layers;
    let r3 = t5.find((e5) => e5.visible);
    switch (e4) {
      case "exclusive":
        t5.length && !r3 && (r3 = t5.at(0), r3.visible = true), this._turnOffOtherLayers(r3);
        break;
      case "inherited":
        t5.forEach((e5) => {
          e5.visible = i;
        });
    }
  }
  _onVisibilityChange(e4) {
    "inherited" === this.visibilityMode && this.layers.forEach((i) => {
      i.visible = e4;
    });
  }
  _onChildVisibilityChange(e4, i) {
    switch (this.visibilityMode) {
      case "exclusive":
        i ? this._turnOffOtherLayers(e4) : this._isAnyLayerVisible() || (e4.visible = true);
        break;
      case "inherited":
        e4.visible = this.visible;
    }
  }
  _isAnyLayerVisible() {
    return this.layers.some((e4) => e4.visible);
  }
};
e2([y({
  readOnly: true,
  dependsOn: []
})], V.prototype, "allLayers", void 0), e2([y({
  readOnly: true
})], V.prototype, "allTables", void 0), e2([y({
  json: {
    read: true,
    write: true
  }
})], V.prototype, "blendMode", void 0), e2([y()], V.prototype, "fullExtent", void 0), e2([y({
  readOnly: true
})], V.prototype, "sourceIsPortalItem", null), e2([y({
  json: {
    read: false,
    write: {
      ignoreOrigin: true
    }
  }
})], V.prototype, "layers", void 0), e2([r("layers")], V.prototype, "_writeLayers", null), e2([y({
  type: ["GroupLayer"]
})], V.prototype, "operationalLayerType", void 0), e2([y({
  json: {
    origins: {
      "web-map": {
        read: false,
        write: {
          overridePolicy(e4, i, t5) {
            return {
              enabled: "Group Layer" === e4?.type && t5?.initiator !== this
            };
          }
        }
      },
      "web-scene": {
        read: false,
        write: false
      }
    }
  }
})], V.prototype, "portalItem", null), e2([o("web-map", "portalItem", ["itemId"])], V.prototype, "readPortalItem", null), e2([r("web-map", "portalItem", {
  itemId: {
    type: String
  }
})], V.prototype, "writePortalItem", null), e2([y()], V.prototype, "spatialReference", void 0), e2([y({
  json: {
    read: false
  },
  readOnly: true,
  value: "group"
})], V.prototype, "type", void 0), e2([y({
  type: ["independent", "inherited", "exclusive"],
  value: "independent",
  json: {
    write: true,
    origins: {
      "web-map": {
        type: ["independent", "exclusive"],
        write: (e4, i, t5) => {
          "inherited" !== e4 && (i[t5] = e4);
        }
      }
    }
  }
})], V.prototype, "visibilityMode", null), V = e2([a2("esri.layers.GroupLayer")], V);
var C2 = V;
export {
  C2 as default
};
//# sourceMappingURL=GroupLayer-LYWDRZAX.js.map
