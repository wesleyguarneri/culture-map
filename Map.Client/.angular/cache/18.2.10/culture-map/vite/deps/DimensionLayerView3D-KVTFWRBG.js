import {
  l
} from "./chunk-CITBGG5A.js";
import "./chunk-6HTAUV5K.js";
import {
  y as y2
} from "./chunk-5JJ6GBOU.js";
import "./chunk-D3AKDIJC.js";
import "./chunk-PVO5NM6Q.js";
import "./chunk-N3IR233K.js";
import "./chunk-CRNUMTSV.js";
import "./chunk-HT2T6PUB.js";
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
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
import {
  V
} from "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import {
  d
} from "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
import {
  e as e2
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
  c2 as c,
  u as u2
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import {
  e,
  u
} from "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/layers/DimensionLayerView.js
var n = (n2) => {
  let o = class extends n2 {
    constructor(...e3) {
      super(...e3), this.layer = null;
    }
    get interactive() {
      return null != this.analysisView && this.analysisView.interactive;
    }
    set interactive(e3) {
      null != this.analysisView && (this.analysisView.interactive = e3);
    }
    get results() {
      return null != this.analysisView ? this.analysisView.results : new V();
    }
    get selectedDimension() {
      return null != this.analysisView ? this.analysisView.selectedDimension : null;
    }
    set selectedDimension(e3) {
      null != this.analysisView && (this.analysisView.selectedDimension = e3);
    }
    createLengthDimensions(e3) {
      return __async(this, null, function* () {
        if (null == this.analysisView) throw u2();
        yield this.analysisView.createLengthDimensions(e3);
      });
    }
  };
  return e2([y()], o.prototype, "layer", void 0), e2([y()], o.prototype, "interactive", null), e2([y({
    readOnly: true
  })], o.prototype, "results", null), e2([y()], o.prototype, "selectedDimension", null), o = e2([a("esri.views.layers.DimensionLayerView")], o), o;
};

// ../../../node_modules/@arcgis/core/views/3d/layers/DimensionLayerView3D.js
var p = "analysis-view-handles";
var d3 = class extends l(n(y2)) {
  constructor(s2) {
    super(s2), this.type = "dimension-3d", this._analysisModule = null;
  }
  initialize() {
    this.addHandles(d2(() => this.layer.source, (s2) => {
      this._destroyAnalysisView(), null != s2 && this._createAnalysisView(s2);
    }, A), p);
  }
  destroy() {
    this.removeHandles(p), this._destroyAnalysisView();
  }
  isUpdating() {
    return null != this._createAnalysisViewTask || null != this.analysisView && this.analysisView.updating;
  }
  whenAnalysisView() {
    return __async(this, null, function* () {
      if (null != this.analysisView) return this.analysisView;
      if (null != this._createAnalysisViewTask) return this._createAnalysisViewTask.promise;
      throw new s("layerview:no-analysisview-for-analysis", "The analysis has not been set on the DimensionLayer of this layer view");
    });
  }
  _createAnalysisView(s2) {
    const e3 = d((i) => __async(this, null, function* () {
      return this.analysisView = yield this._createAnalysisViewPromise(s2, i), this._createAnalysisViewTask === e3 && (this._createAnalysisViewTask = null), this.analysisView;
    }));
    this.addResolvingPromise(e3.promise), this._createAnalysisViewTask = e3;
  }
  _destroyAnalysisView() {
    this.analysisView = u(this.analysisView), this._createAnalysisViewTask = e(this._createAnalysisViewTask);
  }
  _createAnalysisViewPromise(s2, i) {
    return __async(this, null, function* () {
      let e3 = this._analysisModule;
      if (null == e3) {
        const s3 = yield this._loadAnalysisModule();
        this._analysisModule = s3, e3 = s3;
      }
      const a2 = new e3.default({
        analysis: s2,
        view: this.view,
        parent: this
      });
      if (yield a2.when(), c(i)) throw a2.destroy(), u2();
      return a2;
    });
  }
  _loadAnalysisModule() {
    return import("./DimensionAnalysisView3D-UCHIFQTQ.js");
  }
};
e2([y()], d3.prototype, "type", void 0), e2([y()], d3.prototype, "analysisView", void 0), e2([y()], d3.prototype, "_createAnalysisViewTask", void 0), d3 = e2([a("esri.views.3d.layers.DimensionLayerView3D")], d3);
var V2 = d3;
export {
  V2 as default
};
//# sourceMappingURL=DimensionLayerView3D-KVTFWRBG.js.map
