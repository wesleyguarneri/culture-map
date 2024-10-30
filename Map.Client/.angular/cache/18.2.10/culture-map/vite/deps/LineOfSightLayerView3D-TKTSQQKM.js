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
import "./chunk-EITGQLII.js";
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
  c2 as c
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

// ../../../node_modules/@arcgis/core/views/3d/layers/LineOfSightLayerView3D.js
var c2 = "analysis-view-handles";
var p = class extends l(y2) {
  constructor(s2) {
    super(s2), this.type = "line-of-sight-3d", this._analysisModule = null;
  }
  initialize() {
    this.addHandles(d2(() => this.layer.analysis, (s2) => {
      this._destroyAnalysisView(), null != s2 && this._createAnalysisView(s2);
    }, A), c2);
  }
  destroy() {
    this.removeHandles(c2), this._destroyAnalysisView();
  }
  whenAnalysisView() {
    return __async(this, null, function* () {
      if (null != this.analysisView) return this.analysisView;
      if (null != this._createAnalysisViewTask) return this._createAnalysisViewTask.promise;
      throw new s("layerview:no-analysisview-for-analysis", "The analysis has not been set on the LineOfSightLayer of this layer view");
    });
  }
  isUpdating() {
    return null != this._createAnalysisViewTask || null != this.analysisView && this.analysisView.updating;
  }
  _createAnalysisView(s2) {
    const e3 = d((i) => __async(this, null, function* () {
      return this.analysisView = yield this._createAnalysisViewPromise(s2, i), this._createAnalysisViewTask === e3 && (this._createAnalysisViewTask = null), this.analysisView;
    }));
    this._createAnalysisViewTask = e3;
  }
  _destroyAnalysisView() {
    this.analysisView = u(this.analysisView), this._createAnalysisViewTask = e(this._createAnalysisViewTask);
  }
  _createAnalysisViewPromise(s2, i) {
    return __async(this, null, function* () {
      let a2 = this._analysisModule;
      if (null == a2) {
        const s3 = yield this._loadAnalysisModule();
        this._analysisModule = s3, a2 = s3;
      }
      const t = new a2.default({
        analysis: s2,
        view: this.view,
        parent: this
      });
      if (yield t.when(), c(i)) throw t.destroy(), new s("layerview:no-analysisview-for-analysis", "The analysis has not been added to the LineOfSightLayer of this layer view", {
        analysis: s2
      });
      return t;
    });
  }
  _loadAnalysisModule() {
    return import("./LineOfSightAnalysisView3D-WWMEFRCJ.js");
  }
};
e2([y()], p.prototype, "type", void 0), e2([y()], p.prototype, "layer", void 0), e2([y()], p.prototype, "analysisView", void 0), e2([y()], p.prototype, "_createAnalysisViewTask", void 0), p = e2([a("esri.views.3d.layers.LineOfSightLayerView3D")], p);
var d3 = p;
export {
  d3 as default
};
//# sourceMappingURL=LineOfSightLayerView3D-TKTSQQKM.js.map
