import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  m
} from "./chunk-T24WHHIJ.js";
import {
  _
} from "./chunk-2Z74YYUI.js";
import {
  a as a2
} from "./chunk-V6ZMT2EX.js";
import "./chunk-UZL2AATT.js";
import "./chunk-LWIPFUZ3.js";
import "./chunk-JRL65HQ7.js";
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
import "./chunk-7QB35HXN.js";
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
import "./chunk-UAETKRWQ.js";
import "./chunk-NXXQ35YM.js";
import "./chunk-KAHESDP5.js";
import "./chunk-ONRZ4VTT.js";
import "./chunk-MVS2BECH.js";
import "./chunk-DC5LRNPY.js";
import "./chunk-ASCK5HJ5.js";
import "./chunk-ZT7V2AVD.js";
import "./chunk-C2OXE4NQ.js";
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
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-2HDBQXAR.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
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
import {
  d
} from "./chunk-LZSLQ24Q.js";
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
import {
  u
} from "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/2d/layers/WMSLayerView2D.js
var g = class extends m(i(f(y2))) {
  constructor() {
    super(...arguments), this.bitmapContainer = new a2();
  }
  supportsSpatialReference(e2) {
    return this.layer.serviceSupportsSpatialReference(e2);
  }
  update(e2) {
    this.strategy.update(e2).catch((e3) => {
      b(e3) || n.getLogger(this).error(e3);
    });
  }
  attach() {
    const {
      layer: e2
    } = this, {
      imageMaxHeight: t,
      imageMaxWidth: r
    } = e2;
    this.bitmapContainer = new a2(), this.container.addChild(this.bitmapContainer), this.strategy = new _({
      container: this.bitmapContainer,
      fetchSource: this.fetchImage.bind(this),
      requestUpdate: this.requestUpdate.bind(this),
      imageMaxHeight: t,
      imageMaxWidth: r,
      imageRotationSupported: false,
      imageNormalizationSupported: false,
      hidpi: false
    }), this.addAttachHandles(d(() => this.exportImageVersion, () => this.requestUpdate()));
  }
  detach() {
    this.strategy = u(this.strategy), this.container.removeAllChildren();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  createFetchPopupFeaturesQuery(e2) {
    const {
      view: t,
      bitmapContainer: r
    } = this, {
      x: i2,
      y: s
    } = e2, {
      spatialReference: a3
    } = t;
    let o, p = 0, m2 = 0;
    if (r.children.some((e3) => {
      const {
        width: t2,
        height: r2,
        resolution: h2,
        x: c2,
        y: d3
      } = e3, u2 = c2 + h2 * t2, g2 = d3 - h2 * r2;
      return i2 >= c2 && i2 <= u2 && s <= d3 && s >= g2 && (o = new w({
        xmin: c2,
        ymin: g2,
        xmax: u2,
        ymax: d3,
        spatialReference: a3
      }), p = t2, m2 = r2, true);
    }), !o) return null;
    const h = o.width / p, c = Math.round((i2 - o.xmin) / h), d2 = Math.round((o.ymax - s) / h);
    return {
      extent: o,
      width: p,
      height: m2,
      x: c,
      y: d2
    };
  }
  doRefresh() {
    return __async(this, null, function* () {
      this.requestUpdate();
    });
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(e2, t, r, i2) {
    return this.layer.fetchImageBitmap(e2, t, r, __spreadValues({
      timeExtent: this.timeExtent
    }, i2));
  }
};
e([y()], g.prototype, "strategy", void 0), e([y()], g.prototype, "updating", void 0), g = e([a("esri.views.2d.layers.WMSLayerView2D")], g);
var y3 = g;
export {
  y3 as default
};
//# sourceMappingURL=WMSLayerView2D-GSJYIV3M.js.map
