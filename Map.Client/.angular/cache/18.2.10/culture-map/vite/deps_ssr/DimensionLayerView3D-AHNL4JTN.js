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
import {
  V
} from "./chunk-U3RHUXYK.js";
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
  c2 as c,
  u as u2
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
    return import("./DimensionAnalysisView3D-TCGV2QSS.js");
  }
};
e2([y()], d3.prototype, "type", void 0), e2([y()], d3.prototype, "analysisView", void 0), e2([y()], d3.prototype, "_createAnalysisViewTask", void 0), d3 = e2([a("esri.views.3d.layers.DimensionLayerView3D")], d3);
var V2 = d3;
export {
  V2 as default
};
//# sourceMappingURL=DimensionLayerView3D-AHNL4JTN.js.map
