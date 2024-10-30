import {
  m
} from "./chunk-65O5URSJ.js";
import {
  _
} from "./chunk-R4YHBG5S.js";
import {
  a as a2
} from "./chunk-TZGJB4CO.js";
import "./chunk-EOYCWFZW.js";
import "./chunk-MFKZR4D2.js";
import {
  i
} from "./chunk-UQMQLPLV.js";
import {
  f
} from "./chunk-4HCKDN6K.js";
import "./chunk-ONOVFOVG.js";
import {
  y as y2
} from "./chunk-5JJ6GBOU.js";
import "./chunk-GQOLRPFL.js";
import "./chunk-OICO7AS6.js";
import "./chunk-WSWHLWMU.js";
import "./chunk-R3AQ3TGL.js";
import "./chunk-B6VSQC7C.js";
import "./chunk-BLE2CCDD.js";
import "./chunk-PAFFV5BJ.js";
import "./chunk-Q645EYZX.js";
import "./chunk-6QDMUFEM.js";
import "./chunk-T3454WZK.js";
import "./chunk-LZ6MXOBD.js";
import "./chunk-HSB7FBE7.js";
import "./chunk-6YA72G7G.js";
import "./chunk-D4LAF4TH.js";
import "./chunk-QL5HR3YL.js";
import "./chunk-D3AKDIJC.js";
import "./chunk-HHSJQWOH.js";
import "./chunk-3PCYF7PE.js";
import "./chunk-MPUFKSB2.js";
import "./chunk-ON42KCSZ.js";
import "./chunk-EMZQT2MP.js";
import "./chunk-PUH7YYDT.js";
import "./chunk-5JFTHL5W.js";
import "./chunk-KUYTX4V6.js";
import "./chunk-EXODD7PD.js";
import "./chunk-C7VF4AR2.js";
import "./chunk-4HODTCAO.js";
import "./chunk-EK3IKAMF.js";
import "./chunk-IJVN5N2Q.js";
import "./chunk-3NGDRCQI.js";
import "./chunk-JCWQ2LOQ.js";
import "./chunk-P7OSFLIX.js";
import "./chunk-ZDC4PV4Y.js";
import "./chunk-R4DKV4UN.js";
import "./chunk-SNHPS7NU.js";
import "./chunk-L3F4XA4B.js";
import "./chunk-DLRYNII2.js";
import "./chunk-6HBAAUBO.js";
import "./chunk-YLE5AYZV.js";
import "./chunk-VS26W5Y5.js";
import "./chunk-PVO5NM6Q.js";
import "./chunk-C7NRYPDG.js";
import "./chunk-4QBFFLOC.js";
import "./chunk-O437BSYE.js";
import "./chunk-YZNT6QWD.js";
import "./chunk-DY7FJHTG.js";
import "./chunk-JYODC3YQ.js";
import "./chunk-J55F4AC2.js";
import "./chunk-WPPFJVPN.js";
import "./chunk-6A7CWJED.js";
import "./chunk-LJEOBI2I.js";
import "./chunk-2OMCGIU4.js";
import "./chunk-D2NB6D6N.js";
import "./chunk-DR5TVNEL.js";
import "./chunk-HT2T6PUB.js";
import "./chunk-A3NNJ7XA.js";
import "./chunk-OKJHJ3CY.js";
import "./chunk-XTVPEVHA.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-K226GFDN.js";
import "./chunk-7ZJ6P7J7.js";
import "./chunk-FPFZQCEQ.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
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
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
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
  d
} from "./chunk-6WHTZNUH.js";
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
  a3 as a
} from "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import {
  b
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import {
  u
} from "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=WMSLayerView2D-UU6DU4AA.js.map
