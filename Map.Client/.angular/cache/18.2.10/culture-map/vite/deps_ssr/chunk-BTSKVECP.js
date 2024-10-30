import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  A,
  C,
  d as d2,
  p,
  w
} from "./chunk-LZSLQ24Q.js";
import {
  d
} from "./chunk-AUUN7RFQ.js";
import {
  e as e2
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
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
  e,
  l
} from "./chunk-6WGE3IUL.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  __async,
  __objRest
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/support/AnalysisViewModel.js
var v;
!function(e3) {
  e3[e3.PENDING = 0] = "PENDING", e3[e3.WAIT_FOR_VIEW_READY = 1] = "WAIT_FOR_VIEW_READY", e3[e3.RUNNING = 2] = "RUNNING";
}(v || (v = {}));
var _ = class extends S {
  constructor(e3 = {}) {
    super(e3), this.view = null, this.analysisView = null, this._reconnectViewTask = null, this._forceInteractiveHandle = null, this._parentChangeFromReconnect = false, this._startUserOperation = null;
    const t = e3?.analysis;
    null != t ? this.analysis = t : (this._set("analysis", this.constructAnalysis()), this._set("isAnalysisOwner", true)), null != e3?.visible && (this.visible = e3.visible);
  }
  normalizeCtorArgs(e3) {
    const _a = e3, {
      analysis: t
    } = _a, s2 = __objRest(_a, [
      "analysis"
    ]);
    return s2;
  }
  initialize() {
    this.addHandles([d2(() => ({
      readyAndNotSupported: null != this.view && this.view.ready && !this.supported
    }), ({
      readyAndNotSupported: e3
    }) => {
      e3 && n.getLogger(this).errorOnce(this.unsupportedErrorMessage);
    }, A), d2(() => this.analysis?.parent, (e3) => {
      this._parentChangeFromReconnect || e3 === this.view || this._set("isAnalysisOwner", false);
      const t = !this._parentChangeFromReconnect;
      this._parentChangeFromReconnect = false, t && this._scheduleViewReconnect();
    }, C), d2(() => ({
      view: this.view,
      ready: null != this.view && this.view.ready,
      supported: this.supported
    }), ({
      view: e3
    }, t) => {
      const s2 = t?.view;
      e3 !== s2 && (this._startUserOperation = e(this._startUserOperation), this._disconnectFromView(s2)), this._scheduleViewReconnect();
    }, A)]);
  }
  destroy() {
    this._reconnectViewTask = e(this._reconnectViewTask), this._startUserOperation = e(this._startUserOperation), null != this.analysisView && (this.analysisView.visible = void 0), this._disconnectFromView(this.view), this._set("view", null), null != this.analysis && this.isAnalysisOwner && (this.analysis.destroy(), this._set("analysis", null));
  }
  get supported() {
    return null == this.view || this.view.type === this.supportedViewType;
  }
  set visible(e3) {
    this._set("visible", e3), null != this.analysisView && (this.analysisView.visible = e3);
  }
  get active() {
    return null != this.tool && this.tool.active;
  }
  get disabled() {
    return null == this.view || !this.view.ready || !this.supported;
  }
  set analysis(e3) {
    e3 !== this._get("analysis") && (this._startUserOperation = e(this._startUserOperation), this._disconnectFromView(this.view), this._setExternalAnalysis(e3), this._scheduleViewReconnect());
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
  get tool() {
    return null != this.analysisView ? this.analysisView.tool : null;
  }
  clear() {
    this._startUserOperation = e(this._startUserOperation), this._resetInteractiveCreationState(), null != this.tool && null != this.view && this.view.activeTool === this.tool && (this.view.activeTool = null);
  }
  start() {
    return __async(this, null, function* () {
      if (!this.visible) return void n.getLogger(this).warn("Cannot start analysis when not visible");
      this.clear();
      const e3 = {
        task: null,
        abort: null,
        state: v.PENDING
      }, t = d((t2) => __async(this, null, function* () {
        if (e3.state = v.WAIT_FOR_VIEW_READY, yield w(() => this.ready, t2), e3.state = v.RUNNING, null == this.analysisView || null == this.view) return;
        const s2 = this.analysisView.tool;
        null != s2 && (this.view.activeTool = s2, p(() => s2.created, () => {
          s2.active && null != this.view && (this.view.activeTool = null);
        }, {
          initial: true,
          once: true
        }));
      }));
      return e3.task = t, e3.abort = () => t.abort(), this._startUserOperation = e3, t.promise;
    });
  }
  onConnectToAnalysisView(e3) {
  }
  onDisconnectFromAnalysisView() {
  }
  _scheduleViewReconnect() {
    this._reconnectViewTask = e(this._reconnectViewTask);
    const e3 = d((t) => __async(this, null, function* () {
      try {
        yield this._reconnectView(t);
      } catch (s2) {
        if (s(t), !b(s2)) return void n.getLogger(this).warn("Failed to use analysis in view model", s2);
        throw s2;
      } finally {
        e3 === this._reconnectViewTask && (this._reconnectViewTask = null);
      }
    }));
    this._reconnectViewTask = e3;
  }
  _reconnectView(e3) {
    return __async(this, null, function* () {
      const {
        view: t
      } = this, s2 = null != t && t.ready && this.supported, n2 = this.analysis;
      if (this._startUserOperation = V(this._startUserOperation), this._disconnectFromView(t), s2 && null != t && null != n2) {
        if (this.isAnalysisOwner) {
          if (null != n2.parent) return void n.getLogger(this).errorOnce("expected owned analysis to have null parent when connecting to view");
          this._parentChangeFromReconnect = true, t.analyses.add(n2);
        }
        this.analysisView = yield t.whenAnalysisView(n2), c(e3) ? this._startUserOperation = V(this._startUserOperation) : (this.analysisView.visible = this.visible, this._forceInteractiveHandle = this.analysisView.forceInteractiveForViewModel(), this.addHandles(this._forceInteractiveHandle), this.onConnectToAnalysisView(this.analysisView));
      }
    });
  }
  _disconnectFromView(e3) {
    null != e3 && this.isAnalysisOwner && e3.analyses.includes(this.analysis) && (this._parentChangeFromReconnect = true, this.analysis.clear(), e3.analyses.remove(this.analysis)), this.onDisconnectFromAnalysisView(), this._forceInteractiveHandle = l(this._forceInteractiveHandle), this.analysisView = null;
  }
  _setExternalAnalysis(e3) {
    null == this.analysisView || this.isAnalysisOwner || (this.analysisView.visible = void 0, this._forceInteractiveHandle = l(this._forceInteractiveHandle)), this.analysisView = null, this._set("isAnalysisOwner", false), this._set("analysis", e3), this._parentChangeFromReconnect = false;
  }
  _resetInteractiveCreationState() {
    this.analysis.clear(), null != this.tool && this.tool.resetCreated();
  }
  get testInfo() {
  }
};
function V(e3) {
  return null != e3 && e3.state >= v.RUNNING ? (e3.abort(), null) : e3;
}
e2([y()], _.prototype, "supported", null), e2([y()], _.prototype, "view", void 0), e2([y({
  type: Boolean,
  value: true
})], _.prototype, "visible", null), e2([y()], _.prototype, "active", null), e2([y()], _.prototype, "disabled", null), e2([y({
  nonNullable: true
})], _.prototype, "analysis", null), e2([y()], _.prototype, "analysisView", void 0), e2([y()], _.prototype, "ready", null), e2([y()], _.prototype, "connectingToView", null), e2([y({
  readOnly: true
})], _.prototype, "isAnalysisOwner", null), e2([y()], _.prototype, "_reconnectViewTask", void 0), e2([y()], _.prototype, "_forceInteractiveHandle", void 0), e2([y()], _.prototype, "tool", null), _ = e2([a("esri.widgets.support.AnalysisViewModel")], _);

export {
  _
};
//# sourceMappingURL=chunk-BTSKVECP.js.map
