import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  l as l3,
  n2,
  t as t4
} from "./chunk-M6PHREXO.js";
import {
  e as e3
} from "./chunk-UAETKRWQ.js";
import {
  l
} from "./chunk-KLK34CGP.js";
import {
  A as A2
} from "./chunk-NBJSAHZT.js";
import {
  j
} from "./chunk-BD24XM4D.js";
import {
  f
} from "./chunk-YCXNHEGB.js";
import {
  t as t2
} from "./chunk-CSATD3VX.js";
import "./chunk-NXXQ35YM.js";
import {
  r as r2
} from "./chunk-XU6JZUMA.js";
import "./chunk-3BXPVUY5.js";
import "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import {
  a as a3
} from "./chunk-QZ6SIXQA.js";
import "./chunk-7V4JSBFA.js";
import {
  l as l2
} from "./chunk-EO2EW5KR.js";
import "./chunk-JEFPXTYT.js";
import "./chunk-MVS2BECH.js";
import {
  t as t3
} from "./chunk-UZ7IOCF3.js";
import {
  b
} from "./chunk-OS542PQQ.js";
import "./chunk-3B5GODXR.js";
import "./chunk-NKXXHQDD.js";
import {
  S as S2
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
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import {
  S
} from "./chunk-KETDH2J4.js";
import "./chunk-7QV7DHWN.js";
import "./chunk-4L4Y34YK.js";
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
import "./chunk-QGBMZIP4.js";
import "./chunk-AOEBZVTA.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import "./chunk-G73HQZEL.js";
import {
  A,
  C,
  d,
  v
} from "./chunk-LZSLQ24Q.js";
import "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
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
  a3 as a2,
  t
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import {
  a,
  k
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

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
      } = yield import("./groupLayerUtils-X3NW3DU6.js");
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
//# sourceMappingURL=GroupLayer-YUOD43BC.js.map
