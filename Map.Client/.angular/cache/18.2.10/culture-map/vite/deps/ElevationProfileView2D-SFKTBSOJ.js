import {
  a
} from "./chunk-FV6BSQBI.js";
import {
  t
} from "./chunk-SV4PAQ3O.js";
import "./chunk-PNAY7MWN.js";
import {
  n
} from "./chunk-D3AKDIJC.js";
import "./chunk-YAGNWBGU.js";
import "./chunk-LQTSBE7P.js";
import "./chunk-GCFUJXGH.js";
import "./chunk-ZVFENZUF.js";
import "./chunk-SZWWBMQN.js";
import "./chunk-KKD7A2GN.js";
import "./chunk-4MMTPKY4.js";
import "./chunk-IMVP5ADD.js";
import "./chunk-DUTZNK67.js";
import "./chunk-IN6BQCWS.js";
import "./chunk-OGZAGPIO.js";
import "./chunk-HJJIIYFF.js";
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
import {
  A,
  d as d2
} from "./chunk-6WHTZNUH.js";
import "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import {
  d
} from "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
import "./chunk-4Z5SGKRM.js";
import {
  r
} from "./chunk-ANKOCGE2.js";
import "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import {
  s
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import {
  e,
  l,
  u
} from "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/ElevationProfile/support/InputRepresentation2D.js
var l2 = class {
  constructor(i) {
    this._params = i, this._highlightTask = null, this._highlightHandle = null;
  }
  destroy() {
    this.remove();
  }
  remove() {
    this._highlightTask = e(this._highlightTask), this._highlightHandle = l(this._highlightHandle);
  }
  update(t2) {
    if (this.remove(), null == t2 || !r2(t2)) return;
    const h2 = t2.layer;
    this._highlightTask = d((i) => __async(this, null, function* () {
      const l3 = yield this._params.view.whenLayerView(h2);
      s(i);
      const r3 = n(l3) ? l3 : null;
      r3 && (this._highlightHandle = r3.highlight(t2));
    }));
  }
};
function r2(i) {
  return null != i.geometry && "polyline" === i.geometry.type;
}

// ../../../node_modules/@arcgis/core/widgets/ElevationProfile/support/ElevationProfileView2D.js
var h = class {
  constructor(e2, n2) {
    this._handles = new r(), this._inputRepresentation = new l2({
      view: e2
    }), this._hoveredPoints = new a({
      view: e2
    }), this._handles.add([d2(() => n2.viewModel.hoveredPoints, (t2) => this._hoveredPoints.update(t2), A), d2(() => {
      const {
        state: t2,
        highlightEnabled: e3,
        viewModel: i
      } = n2;
      return {
        input: i.input,
        state: t2,
        highlightEnabled: e3
      };
    }, (t2) => this._updateInputRepresentation(t2), A)]);
  }
  destroy() {
    this._handles = u(this._handles), this._inputRepresentation = u(this._inputRepresentation), this._hoveredPoints = u(this._hoveredPoints);
  }
  _updateInputRepresentation({
    input: t2,
    state: e2,
    highlightEnabled: i
  }) {
    e2 === t.Selected && i ? this._inputRepresentation.update(t2) : this._inputRepresentation.remove();
  }
};
export {
  h as ElevationProfileView2D
};
//# sourceMappingURL=ElevationProfileView2D-SFKTBSOJ.js.map
