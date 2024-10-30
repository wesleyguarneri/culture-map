import {
  _
} from "./chunk-R4YHBG5S.js";
import {
  a as a2
} from "./chunk-TZGJB4CO.js";
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
import "./chunk-D3AKDIJC.js";
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
import "./chunk-6A7CWJED.js";
import "./chunk-LJEOBI2I.js";
import "./chunk-2OMCGIU4.js";
import "./chunk-D2NB6D6N.js";
import "./chunk-HT2T6PUB.js";
import "./chunk-A3NNJ7XA.js";
import "./chunk-XTVPEVHA.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-K226GFDN.js";
import "./chunk-7ZJ6P7J7.js";
import "./chunk-FPFZQCEQ.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-7RMVJCDW.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import "./chunk-NYQ5CYNR.js";
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
import "./chunk-6WHTZNUH.js";
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
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=BaseDynamicLayerView2D-2GP43R4C.js.map
