import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  _
} from "./chunk-2Z74YYUI.js";
import {
  a as a2
} from "./chunk-V6ZMT2EX.js";
import "./chunk-PTO6XZBI.js";
import {
  i
} from "./chunk-AEJ7YVFP.js";
import {
  f
} from "./chunk-XK5LKXMQ.js";
import "./chunk-74SVQPE6.js";
import {
  y as y2
} from "./chunk-CXYUBZAK.js";
import "./chunk-LUORW76W.js";
import "./chunk-BUAHJQUY.js";
import "./chunk-MWR6F5NE.js";
import "./chunk-NLU6ZPOA.js";
import "./chunk-YQDGVKY6.js";
import "./chunk-PAFRRTJD.js";
import "./chunk-A47NS37R.js";
import "./chunk-VOJZD4TW.js";
import "./chunk-6JRLR4LF.js";
import "./chunk-OQI6JU2J.js";
import "./chunk-7PJ3GUSK.js";
import "./chunk-BNFI45VE.js";
import "./chunk-CSA6OEKA.js";
import "./chunk-ZCCDVQ3H.js";
import "./chunk-DDV74AXO.js";
import "./chunk-37RAJ54N.js";
import "./chunk-I6EZE7ZH.js";
import "./chunk-VM4DYPO2.js";
import "./chunk-PXFPCKFW.js";
import "./chunk-RAYFUCRQ.js";
import "./chunk-ONQZSDXQ.js";
import "./chunk-FWYSNIVU.js";
import "./chunk-MDEPINSI.js";
import "./chunk-SKOGSS6Z.js";
import "./chunk-WS7U2AGS.js";
import "./chunk-U4NXHH3L.js";
import "./chunk-J7FRIDYV.js";
import "./chunk-2LHHRVKS.js";
import "./chunk-QATJRB5Q.js";
import "./chunk-7Z4UWMRU.js";
import "./chunk-NOBDTR4N.js";
import "./chunk-5RF6XDV4.js";
import "./chunk-Q47GASPN.js";
import "./chunk-YEB36ZCF.js";
import "./chunk-KINQ7OJ3.js";
import "./chunk-KYLW5XXS.js";
import "./chunk-B76NC7GX.js";
import "./chunk-HFXXFWYN.js";
import "./chunk-X5QZGB37.js";
import "./chunk-3XHDZQO5.js";
import "./chunk-2BLQXT54.js";
import "./chunk-JSWVKNBA.js";
import "./chunk-BZHHBBFX.js";
import "./chunk-A2FDYA6M.js";
import "./chunk-VOOO6FU5.js";
import "./chunk-KUBMHTYA.js";
import "./chunk-NXXQ35YM.js";
import "./chunk-KAHESDP5.js";
import "./chunk-ONRZ4VTT.js";
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
import {
  b
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

// ../../../node_modules/@arcgis/core/views/2d/layers/BaseDynamicLayerView2D.js
var m = class extends i(f(y2)) {
  update(t) {
    this._strategy.update(t).catch((t2) => {
      b(t2) || n.getLogger(this).error(t2);
    }), this.notifyChange("updating");
  }
  attach() {
    this._bitmapContainer = new a2(), this.container.addChild(this._bitmapContainer), this._strategy = new _({
      container: this._bitmapContainer,
      fetchSource: this.fetchBitmapData.bind(this),
      requestUpdate: this.requestUpdate.bind(this)
    });
  }
  detach() {
    this._strategy.destroy(), this._strategy = null, this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  fetchBitmapData(t, e2, r) {
    return this.layer.fetchImageBitmap(t, e2, r);
  }
  doRefresh() {
    return __async(this, null, function* () {
      this.requestUpdate();
    });
  }
  isUpdating() {
    return this._strategy.updating || this.updateRequested;
  }
};
e([y()], m.prototype, "_strategy", void 0), e([y()], m.prototype, "updating", void 0), m = e([a("esri.views.2d.layers.BaseDynamicLayerView2D")], m);
var d = m;
export {
  d as default
};
//# sourceMappingURL=BaseDynamicLayerView2D-VYDK2OIO.js.map
