import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i
} from "./chunk-SRNLWOOP.js";
import {
  f
} from "./chunk-XK5LKXMQ.js";
import "./chunk-74SVQPE6.js";
import {
  y as y2
} from "./chunk-CXYUBZAK.js";
import "./chunk-LUORW76W.js";
import "./chunk-VOJZD4TW.js";
import "./chunk-6JRLR4LF.js";
import "./chunk-OQI6JU2J.js";
import "./chunk-7PJ3GUSK.js";
import "./chunk-PXFPCKFW.js";
import "./chunk-RAYFUCRQ.js";
import "./chunk-QATJRB5Q.js";
import "./chunk-7Z4UWMRU.js";
import "./chunk-NOBDTR4N.js";
import "./chunk-KYLW5XXS.js";
import "./chunk-HFXXFWYN.js";
import "./chunk-KUBMHTYA.js";
import "./chunk-NXXQ35YM.js";
import "./chunk-MVS2BECH.js";
import "./chunk-ASCK5HJ5.js";
import "./chunk-ZT7V2AVD.js";
import "./chunk-KOI252FF.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-VYTPFEL2.js";
import "./chunk-RLGDH6IY.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-66YQWHHE.js";
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
import "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
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
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/2d/layers/CatalogLayerView2D.js
var l = class extends i(f(y2)) {
  constructor() {
    super(...arguments), this.layerViews = new V();
  }
  update(e2) {
  }
  viewChange() {
  }
  moveEnd() {
  }
  attach() {
    this.addAttachHandles([this._updatingHandles.addOnCollectionChange(() => this.layerViews, () => this._updateStageChildren(), {
      initial: true
    })]);
  }
  detach() {
    this.container.removeAllChildren();
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e2, r) => this.container.addChildAt(e2.container, r));
  }
};
e([y()], l.prototype, "layerViews", void 0), l = e([a("esri.views.2d.layers.CatalogLayerView2D")], l);
var c = l;
export {
  c as default
};
//# sourceMappingURL=CatalogLayerView2D-QTP3TFZV.js.map
