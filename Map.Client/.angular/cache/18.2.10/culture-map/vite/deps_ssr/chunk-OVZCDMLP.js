import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  p
} from "./chunk-BQIZESK5.js";
import {
  A,
  C,
  d as d2,
  w
} from "./chunk-LZSLQ24Q.js";
import {
  d
} from "./chunk-AUUN7RFQ.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import {
  b,
  c2 as c,
  s
} from "./chunk-AIZ3T7E3.js";
import {
  e
} from "./chunk-6WGE3IUL.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  __async,
  __objRest
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/support/InteractiveAnalysisViewModel.js
var _;
!function(s2) {
  s2[s2.PENDING = 0] = "PENDING", s2[s2.WAIT_FOR_VIEW_READY = 1] = "WAIT_FOR_VIEW_READY", s2[s2.RUNNING = 2] = "RUNNING";
}(_ || (_ = {}));
var u = class extends p {
  constructor(s2 = {}) {
    super(s2), this.analysisView = null, this._reconnectViewTask = null, this._parentChangeFromReconnect = false, this._startUserOperation = null;
    const t = s2?.analysis;
    null != t ? this.analysis = t : (this._set("analysis", this.constructAnalysis()), this._set("isAnalysisOwner", true));
  }
  normalizeCtorArgs(s2) {
    const _a = s2, {
      analysis: t
    } = _a, i = __objRest(_a, [
      "analysis"
    ]);
    return i;
  }
  initialize() {
    this.addHandles([d2(() => this.analysis?.parent, (s2) => {
      this._parentChangeFromReconnect || s2 === this.view || this._set("isAnalysisOwner", false);
      const t = !this._parentChangeFromReconnect;
      this._parentChangeFromReconnect = false, t && this._scheduleViewReconnect();
    }, C), d2(() => ({
      view: this.view,
      ready: null != this.view && this.view.ready,
      supported: this.supported
    }), ({
      view: s2
    }, t) => {
      const i = t?.view;
      s2 !== i && (this._startUserOperation = e(this._startUserOperation), this._disconnectFromView(i)), this._scheduleViewReconnect();
    }, A), d2(() => this.analysis.isEditable, (s2, t) => {
      null != this.analysisView && (s2 && !t && null == this.tool ? this.createTool() : s2 || !t || null == this.tool || this.tool.active || this.removeTool());
    })]);
  }
  destroy() {
    this._reconnectViewTask = e(this._reconnectViewTask), this._startUserOperation = e(this._startUserOperation), null != this.analysisView && (this.analysisView.visible = void 0), this._disconnectFromView(this.view), null != this.analysis && this.isAnalysisOwner && (this.analysis.destroy(), this._set("analysis", null));
  }
  set analysis(s2) {
    s2 !== this._get("analysis") && (this._startUserOperation = e(this._startUserOperation), this._disconnectFromView(this.view), this._setExternalAnalysis(s2), this._scheduleViewReconnect());
  }
  get ready() {
    return null != this.analysisView && !this.connectingToView;
  }
  get connectingToView() {
    return null != this._reconnectViewTask;
  }
  get isAnalysisOwner() {
    return this._get("isAnalysisOwner");
  }
  set visible(s2) {
    this._set("visible", s2), null != this.analysisView && (this.analysisView.visible = s2);
  }
  start() {
    return __async(this, null, function* () {
      if (!this.visible) return void n.getLogger(this).warn("Cannot start analysis when not visible");
      this.clear();
      const s2 = {
        task: null,
        abort: null,
        state: _.PENDING
      }, e3 = d((t) => __async(this, null, function* () {
        s2.state = _.WAIT_FOR_VIEW_READY, yield w(() => this.ready, t), s2.state = _.RUNNING, this.createTool({
          interactive: true
        });
      }));
      return s2.task = e3, s2.abort = () => e3.abort(), this._startUserOperation = s2, e3.promise;
    });
  }
  clear() {
    this._startUserOperation = e(this._startUserOperation), this.removeTool(), this.analysis.clear();
  }
  onConnectToAnalysisView(s2) {
  }
  onDisconnectFromAnalysisView() {
  }
  _scheduleViewReconnect() {
    this._reconnectViewTask = e(this._reconnectViewTask);
    const s2 = d((t) => __async(this, null, function* () {
      try {
        yield this._reconnectView(t);
      } catch (e3) {
        if (s(t), !b(e3)) return void n.getLogger(this).warn("Failed to use analysis in view model", e3);
        throw e3;
      } finally {
        s2 === this._reconnectViewTask && (this._reconnectViewTask = null);
      }
    }));
    this._reconnectViewTask = s2;
  }
  _reconnectView(s2) {
    return __async(this, null, function* () {
      const {
        view: t
      } = this, i = null != t && t.ready && this.supported, e3 = this.analysis;
      if (this._startUserOperation = V(this._startUserOperation), this._disconnectFromView(t), i && null != t && null != e3) {
        if (this.isAnalysisOwner) {
          if (null != e3.parent) return void this.logError("expected owned analysis to have null parent when connecting to view");
          this._parentChangeFromReconnect = true, t.analyses.add(e3);
        }
        this.analysisView = yield t.whenAnalysisView(e3), c(s2) ? this._startUserOperation = V(this._startUserOperation) : (this.analysisView.visible = this.visible, this.onConnectToAnalysisView(this.analysisView), this.createTool());
      }
    });
  }
  _disconnectFromView(s2) {
    this.removeTool(), null != s2 && this.isAnalysisOwner && (this._parentChangeFromReconnect = true, s2.analyses.remove(this.analysis), this.analysis.clear()), this.analysisView = null, this.onDisconnectFromAnalysisView();
  }
  _setExternalAnalysis(s2) {
    null == this.analysisView || this.isAnalysisOwner || (this.analysisView.visible = true), this.analysisView = null, this._set("isAnalysisOwner", false), this._set("analysis", s2), this._parentChangeFromReconnect = false;
  }
  get testInfo() {
  }
};
function V(s2) {
  return null != s2 && s2.state >= _.RUNNING ? (s2.abort(), null) : s2;
}
e2([y({
  nonNullable: true
})], u.prototype, "analysis", null), e2([y()], u.prototype, "analysisView", void 0), e2([y()], u.prototype, "ready", null), e2([y()], u.prototype, "connectingToView", null), e2([y({
  readOnly: true
})], u.prototype, "isAnalysisOwner", null), e2([y({
  type: Boolean,
  value: true
})], u.prototype, "visible", null), e2([y()], u.prototype, "_reconnectViewTask", void 0), u = e2([a("esri.widgets.support.InteractiveAnalysisViewModel")], u);

export {
  u
};
//# sourceMappingURL=chunk-OVZCDMLP.js.map
