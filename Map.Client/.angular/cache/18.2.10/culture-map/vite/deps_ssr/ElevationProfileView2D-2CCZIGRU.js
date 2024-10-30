import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a
} from "./chunk-2DBZXJ4G.js";
import {
  t
} from "./chunk-XVGNFXIX.js";
import "./chunk-S5FY2EPM.js";
import {
  n
} from "./chunk-LUORW76W.js";
import "./chunk-UE7ZYRIH.js";
import "./chunk-FWGI52X4.js";
import "./chunk-E5RXQH35.js";
import "./chunk-EPIUUGS2.js";
import "./chunk-LGS63R4F.js";
import "./chunk-GNCXYHNE.js";
import "./chunk-D7C26LZP.js";
import "./chunk-VSQZQLTQ.js";
import "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
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
import {
  A,
  d as d2
} from "./chunk-LZSLQ24Q.js";
import "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import {
  d
} from "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import "./chunk-NUICEVIH.js";
import {
  r
} from "./chunk-NXK752PZ.js";
import "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import {
  s
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import {
  e,
  l,
  u
} from "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=ElevationProfileView2D-2CCZIGRU.js.map
