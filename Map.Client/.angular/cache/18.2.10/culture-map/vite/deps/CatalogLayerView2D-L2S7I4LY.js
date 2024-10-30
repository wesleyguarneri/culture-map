import {
  i
} from "./chunk-W4QMYBUB.js";
import {
  f
} from "./chunk-4HCKDN6K.js";
import "./chunk-ONOVFOVG.js";
import {
  y as y2
} from "./chunk-5JJ6GBOU.js";
import "./chunk-PAFFV5BJ.js";
import "./chunk-Q645EYZX.js";
import "./chunk-6QDMUFEM.js";
import "./chunk-T3454WZK.js";
import "./chunk-D3AKDIJC.js";
import "./chunk-PUH7YYDT.js";
import "./chunk-5JFTHL5W.js";
import "./chunk-P7OSFLIX.js";
import "./chunk-ZDC4PV4Y.js";
import "./chunk-R4DKV4UN.js";
import "./chunk-YLE5AYZV.js";
import "./chunk-PVO5NM6Q.js";
import "./chunk-6A7CWJED.js";
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
import {
  V
} from "./chunk-EITGQLII.js";
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
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=CatalogLayerView2D-L2S7I4LY.js.map
