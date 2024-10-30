import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i as i2
} from "./chunk-K5IZTR4L.js";
import {
  p
} from "./chunk-IOZX2TXW.js";
import "./chunk-QJ4KFDZU.js";
import "./chunk-C22SF7N4.js";
import "./chunk-J53R4G62.js";
import "./chunk-R7WTJU3N.js";
import {
  l
} from "./chunk-ECUSUVZM.js";
import "./chunk-CQIKG7VH.js";
import {
  U,
  _
} from "./chunk-MNCE3Q3R.js";
import {
  r
} from "./chunk-BZGBXDFF.js";
import {
  i
} from "./chunk-AEJ7YVFP.js";
import {
  y as y2
} from "./chunk-CXYUBZAK.js";
import "./chunk-LUORW76W.js";
import "./chunk-PZKTCBLJ.js";
import "./chunk-6Y3Z2LOO.js";
import "./chunk-HRIGBQ5I.js";
import "./chunk-HFXXFWYN.js";
import "./chunk-T5C2TZNO.js";
import "./chunk-AOGKNBDG.js";
import "./chunk-F4FQ67JP.js";
import "./chunk-FDI2X6GO.js";
import "./chunk-VENH3UKS.js";
import "./chunk-VFYCIIDC.js";
import "./chunk-GNCXYHNE.js";
import "./chunk-NVOJILW6.js";
import "./chunk-KYPTWEOO.js";
import "./chunk-WVFB3H4O.js";
import "./chunk-ZREJ3Y2F.js";
import "./chunk-IR6CVPPC.js";
import "./chunk-BBUQOCRA.js";
import "./chunk-YBUJLIWZ.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-VOOO6FU5.js";
import "./chunk-IUPJR3FF.js";
import "./chunk-TGZW6QWO.js";
import "./chunk-OYIDHTXG.js";
import "./chunk-KUBMHTYA.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-NXXQ35YM.js";
import {
  J
} from "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-CXNERL22.js";
import "./chunk-7V4JSBFA.js";
import "./chunk-KAHESDP5.js";
import "./chunk-ONRZ4VTT.js";
import "./chunk-REIMIECM.js";
import "./chunk-NKXXHQDD.js";
import "./chunk-DC5LRNPY.js";
import "./chunk-ASCK5HJ5.js";
import "./chunk-XNLAOXPY.js";
import "./chunk-C2OXE4NQ.js";
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
import "./chunk-7QV7DHWN.js";
import "./chunk-4L4Y34YK.js";
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
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
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/TileLayerView3D.js
var c = class extends i(p(l(y2))) {
  constructor() {
    super(...arguments), this.type = "tile-3d", this._popupHighlightHelper = null;
  }
  get imageFormatIsOpaque() {
    return "jpg" === this.layer.tileInfo.format;
  }
  get hasMixedImageFormats() {
    return "mixed" === this.layer.tileInfo.format;
  }
  get tileInfo() {
    return this.layer.tileInfo;
  }
  initialize() {
    if ("web-tile" === this.layer.type) {
      const e2 = this.layer.fullExtent?.spatialReference, r2 = this.layer.tileInfo?.spatialReference;
      if (null == e2 || null == r2 || !J(e2, r2)) {
        const e3 = "defaults" === this.layer.originOf("fullExtent") || null == this.layer.fullExtent ? "SceneView requires fullExtent to be specified by the user on WebTileLayer" : "SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";
        this.addResolvingPromise(Promise.reject(new s("layerview:incompatible-fullextent", e3)));
      }
    }
    U(this, this.layer) && (this._popupHighlightHelper = new _({
      createFetchPopupFeaturesQueryGeometry: (e2, t) => r(e2, t, this.view),
      layerView: this,
      updatingHandles: this._updatingHandles
    })), this._addTilingSchemeMatchPromise();
  }
  destroy() {
    this._popupHighlightHelper?.destroy();
  }
  fetchTile(e2, t) {
    return __async(this, null, function* () {
      return i2(this, e2, t);
    });
  }
  fetchPopupFeaturesAtLocation(e2, t) {
    return __async(this, null, function* () {
      return this._popupHighlightHelper?.fetchPopupFeaturesAtLocation(e2, t) ?? [];
    });
  }
  doRefresh() {
    return __async(this, null, function* () {
      this.suspended || this.emit("data-changed");
    });
  }
};
e([y()], c.prototype, "imageFormatIsOpaque", null), e([y()], c.prototype, "hasMixedImageFormats", null), e([y()], c.prototype, "layer", void 0), e([y()], c.prototype, "tileInfo", null), c = e([a("esri.views.3d.layers.TileLayerView3D")], c);
var f = c;
export {
  f as default
};
//# sourceMappingURL=TileLayerView3D-UF2HCM57.js.map
