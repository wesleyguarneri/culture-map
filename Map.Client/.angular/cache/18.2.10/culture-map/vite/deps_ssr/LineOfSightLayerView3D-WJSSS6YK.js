import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  l
} from "./chunk-ECUSUVZM.js";
import "./chunk-CQIKG7VH.js";
import {
  y as y2
} from "./chunk-CXYUBZAK.js";
import "./chunk-LUORW76W.js";
import "./chunk-HFXXFWYN.js";
import "./chunk-VFYCIIDC.js";
import "./chunk-CXNERL22.js";
import "./chunk-ASCK5HJ5.js";
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
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
import {
  e as e2
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
  c2 as c
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import {
  e,
  u
} from "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

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
    return import("./LineOfSightAnalysisView3D-VPVFQNXM.js");
  }
};
e2([y()], p.prototype, "type", void 0), e2([y()], p.prototype, "layer", void 0), e2([y()], p.prototype, "analysisView", void 0), e2([y()], p.prototype, "_createAnalysisViewTask", void 0), p = e2([a("esri.views.3d.layers.LineOfSightLayerView3D")], p);
var d3 = p;
export {
  d3 as default
};
//# sourceMappingURL=LineOfSightLayerView3D-WJSSS6YK.js.map
