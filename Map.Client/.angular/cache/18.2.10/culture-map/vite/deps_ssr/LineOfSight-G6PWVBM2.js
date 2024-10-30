import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  _ as _2
} from "./chunk-BTSKVECP.js";
import {
  e as e3
} from "./chunk-FYGR4X6I.js";
import {
  v
} from "./chunk-BYORSVZF.js";
import {
  f,
  u as u2
} from "./chunk-7VRJFZQR.js";
import "./chunk-4X2M4YSF.js";
import "./chunk-D5RCKR5Z.js";
import "./chunk-RHVUMKCC.js";
import {
  j,
  m,
  u
} from "./chunk-ZSJNH2BT.js";
import "./chunk-D3XX7CQS.js";
import {
  d as d3
} from "./chunk-NVOJILW6.js";
import "./chunk-KYPTWEOO.js";
import "./chunk-WVFB3H4O.js";
import "./chunk-ZREJ3Y2F.js";
import "./chunk-IR6CVPPC.js";
import "./chunk-BBUQOCRA.js";
import "./chunk-YBUJLIWZ.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-VOOO6FU5.js";
import "./chunk-IUPJR3FF.js";
import "./chunk-TGZW6QWO.js";
import "./chunk-OYIDHTXG.js";
import "./chunk-KUBMHTYA.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-JDVVCQU6.js";
import {
  n as n2,
  t
} from "./chunk-NXXQ35YM.js";
import "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-BGLJ2FAH.js";
import "./chunk-2EJFYNM7.js";
import "./chunk-ASCK5HJ5.js";
import "./chunk-5X5U7R6O.js";
import "./chunk-XNLAOXPY.js";
import "./chunk-I2TVVMQ6.js";
import "./chunk-5EGQYY2H.js";
import "./chunk-JKPUNUQA.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-VYTPFEL2.js";
import "./chunk-RLGDH6IY.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import {
  B,
  e2,
  r
} from "./chunk-UVQYXHKM.js";
import {
  n
} from "./chunk-M5N6UHWJ.js";
import "./chunk-EBCBYN6Y.js";
import "./chunk-ODFKYX74.js";
import "./chunk-EGBDRLCX.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-7QV7DHWN.js";
import "./chunk-4L4Y34YK.js";
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
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
  C,
  d as d2
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
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
  d
} from "./chunk-AIZ3T7E3.js";
import {
  o
} from "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import "./chunk-L4CMR4WM.js";
import "./chunk-7JIACICA.js";
import "./chunk-IE4UBD3F.js";
import "./chunk-IAO6HACY.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/LineOfSight/LineOfSightTarget.js
var p = class extends S {
  constructor(o2) {
    super(o2), this.location = null, this.intersectedLocation = null, this.intersectedGraphic = null, this.visible = void 0;
  }
};
e([y({
  type: _
})], p.prototype, "location", void 0), e([y({
  type: _
})], p.prototype, "intersectedLocation", void 0), e([y({
  type: d3
})], p.prototype, "intersectedGraphic", void 0), e([y({
  type: Boolean
})], p.prototype, "visible", void 0), p = e([a("esri.widgets.LineOfSight.LineOfSightTarget")], p);
var c = p;

// ../../../node_modules/@arcgis/core/widgets/LineOfSight/LineOfSightViewModel.js
var u3 = V.ofType(c);
var f2 = class extends _2 {
  constructor(e4) {
    super(e4), this.analysis = null, this.supportedViewType = "3d", this.unsupportedErrorMessage = "LineOfSightViewModel is only supported in 3D views.", this._vmTargetsToConnection = /* @__PURE__ */ new Map(), this._analysisTargetsToConnection = /* @__PURE__ */ new Map();
  }
  initialize() {
    this.addHandles([this.targets.on("after-add", (e4) => this._onViewModelTargetAdded(e4.item)), this.targets.on("after-remove", (e4) => this._onViewModelTargetRemoved(e4.item)), d2(() => this.analysis, (e4) => this._onAnalysisChange(e4), A)]);
  }
  destroy() {
    this._analysisTargetsToConnection.forEach((e4) => e4.remove());
  }
  get state() {
    return this.disabled || !this.ready ? "disabled" : null == this.tool ? "ready" : this.tool.state;
  }
  get observer() {
    const {
      observer: e4
    } = this.analysis;
    return null == e4?.position ? null : this._convertAnalysisPointToAbsoluteHeight(e4.position, e4.elevationInfo);
  }
  set observer(e4) {
    let t2 = null;
    e4 && (t2 = e4.clone(), t2.hasZ || (t2.z = 0)), this.analysis.observer = new u2({
      position: t2
    });
  }
  get targets() {
    return this._get("targets") || new u3();
  }
  set targets(e4) {
    this._set("targets", n2(e4, this.targets, u3));
  }
  continue() {
    null != this.tool && this.tool.continue();
  }
  stop() {
    null != this.tool && this.tool.stop();
  }
  get testInfo() {
  }
  constructAnalysis() {
    return new v();
  }
  onConnectToAnalysisView(e4) {
    return __async(this, null, function* () {
      this.addHandles([e4.on("result-changed", (e5) => {
        const t2 = this._analysisTargetsToConnection.get(e5.target);
        t2 && (null != e5.result ? (t2.viewModelTarget.intersectedGraphic = e5.result.intersectedGraphic, t2.viewModelTarget.intersectedLocation = e5.result.intersectedLocation, t2.viewModelTarget.visible = e5.result.visible) : (t2.viewModelTarget.intersectedGraphic = null, t2.viewModelTarget.intersectedLocation = null, t2.viewModelTarget.visible = void 0));
      })], "view");
    });
  }
  onDisconnectFromAnalysisView() {
    this.removeHandles("view");
  }
  _onViewModelTargetAdded(e4) {
    if (this._vmTargetsToConnection.get(e4)) return;
    const t2 = new f({
      position: e4.location
    });
    this._connectViewModelWithAnalysisTarget(e4, t2), this.analysis.targets.add(t2);
  }
  _onViewModelTargetRemoved(e4) {
    const t2 = this._vmTargetsToConnection.get(e4);
    t2 && (t2.remove(), this.analysis.targets.remove(t2.analysisTarget));
  }
  _onAnalysisTargetAdded(e4) {
    if (this._analysisTargetsToConnection.get(e4)) return;
    const {
      position: t2
    } = e4, s = new c({
      location: t2 ? this._convertAnalysisPointToAbsoluteHeight(t2, e4.elevationInfo) : null
    });
    this._connectViewModelWithAnalysisTarget(s, e4), this.targets.add(s);
  }
  _onAnalysisTargetRemoved(e4) {
    const t2 = this._analysisTargetsToConnection.get(e4);
    t2 && (t2.remove(), this.targets.remove(t2.viewModelTarget));
  }
  _connectViewModelWithAnalysisTarget(e4, t2) {
    let s = false;
    const o2 = o([d2(() => ({
      position: t2.position,
      elevationInfo: t2.elevationInfo
    }), ({
      position: t3,
      elevationInfo: o3
    }) => {
      s || (s = true, e4.location = t3 ? this._convertAnalysisPointToAbsoluteHeight(t3, o3) : null, s = false);
    }, C), d2(() => e4.location, (e5) => {
      if (!s) {
        s = true;
        let o3 = null;
        e5 && (o3 = e5.clone(), o3.hasZ || (o3.z = 0)), t2.position = o3, t2.elevationInfo = null, s = false;
      }
    }, C)]), i = {
      analysisTarget: t2,
      viewModelTarget: e4,
      remove: () => {
        o2.remove(), this._vmTargetsToConnection.delete(e4), this._analysisTargetsToConnection.delete(t2);
      }
    };
    this._vmTargetsToConnection.set(e4, i), this._analysisTargetsToConnection.set(t2, i);
  }
  _onAnalysisChange(e4) {
    const t2 = "analysis";
    this.removeHandles(t2), this.addHandles([this.analysis.targets.on("after-add", (e5) => this._onAnalysisTargetAdded(e5.item)), this.analysis.targets.on("after-remove", (e5) => this._onAnalysisTargetRemoved(e5.item))], t2), this.targets.removeAll(), e4.targets.forEach((e5) => {
      this._onAnalysisTargetAdded(e5);
    });
  }
  _convertAnalysisPointToAbsoluteHeight(e4, t2) {
    const s = e4.clone();
    if (null != this.view) {
      const o2 = u(e4.hasZ, t2);
      s.z = m(this.view, e4, o2, j);
    }
    return s;
  }
};
e([y({
  type: v
})], f2.prototype, "analysis", void 0), e([y({
  readOnly: true
})], f2.prototype, "state", null), e([y()], f2.prototype, "observer", null), e([y({
  type: u3,
  cast: t,
  nonNullable: true
})], f2.prototype, "targets", null), f2 = e([a("esri.widgets.LineOfSight.LineOfSightViewModel")], f2);
var w = f2;

// ../../../node_modules/@arcgis/core/widgets/LineOfSight.js
var d4 = "esri-line-of-sight";
var p2 = {
  base: d4,
  actions: `${d4}__actions`,
  container: `${d4}__container`,
  error: `${d4}__error`,
  hint: `${d4}__hint`,
  hintText: `${d4}__hint-text`,
  newAnalysisButton: `${d4}__new-analysis-button`
};
var c2 = {
  newAnalysisButton: `${d4}__new-button`,
  continueButton: `${d4}__continue-button`,
  doneButton: `${d4}__done-button`
};
var h = class extends B {
  constructor(e4, s) {
    super(e4, s), this.messages = null, this.viewModel = new w(), this._onNewAnalysis = () => {
      d(this.viewModel.start());
    }, this._onDone = () => {
      this.viewModel.stop();
    }, this._onContinue = () => {
      this.viewModel.continue();
    };
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-LAMWLR56.js")
    });
  }
  get active() {
    return this.viewModel.active;
  }
  get analysis() {
    return this.viewModel.analysis;
  }
  set analysis(e4) {
    this.viewModel.analysis = e4;
  }
  get icon() {
    return "line-of-sight";
  }
  set icon(e4) {
    this._overrideIfSome("icon", e4);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e4) {
    this._overrideIfSome("label", e4);
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e4) {
    this.viewModel.view = e4;
  }
  get visible() {
    return this.viewModel.visible;
  }
  set visible(e4) {
    this.viewModel.visible = e4;
  }
  render() {
    return n("div", {
      class: this.classes(p2.base, e3.widget, e3.panel),
      role: "presentation"
    }, this._renderContainerNode());
  }
  _renderContainerNode() {
    if (!this.visible) return null;
    if (!this.viewModel.supported) return this._renderUnsupportedMessage();
    let e4 = null;
    const t2 = [this._renderNewAnalysisButton()];
    return "creating" === this.viewModel.state ? (e4 = this._renderHint(), t2.unshift(this._renderDoneButton())) : "created" === this.viewModel.state && this.viewModel.targets.length > 0 && t2.unshift(this._renderContinueButton()), n("div", {
      class: p2.container
    }, e4, n("div", {
      class: p2.actions
    }, t2));
  }
  _renderUnsupportedMessage() {
    return n("div", {
      class: p2.error,
      key: "esri-line-of-sight__unsupported"
    }, n("p", null, this.messages.unsupported));
  }
  _renderHint() {
    return n("div", {
      class: p2.hint,
      key: "esri-line-of-sight__hint"
    }, n("p", {
      class: p2.hintText
    }, this.messages.hint));
  }
  _renderNewAnalysisButton() {
    return this._renderButton({
      className: p2.newAnalysisButton,
      id: c2.newAnalysisButton,
      label: this.messages.newAnalysis,
      onClick: this._onNewAnalysis,
      primary: true
    });
  }
  _renderDoneButton() {
    return this._renderButton({
      id: c2.doneButton,
      label: this.messages.done,
      onClick: this._onDone,
      primary: false
    });
  }
  _renderContinueButton() {
    return this._renderButton({
      id: c2.newAnalysisButton,
      label: this.messages.continueAnalysis,
      onClick: this._onContinue,
      primary: false
    });
  }
  _renderButton({
    className: e4,
    id: t2,
    label: s,
    onClick: i,
    primary: n3
  }) {
    const o2 = "disabled" === this.viewModel.state;
    return n("calcite-button", {
      appearance: n3 ? "solid" : "outline-fill",
      class: e4,
      "data-id": t2,
      disabled: o2,
      key: t2,
      onclick: i
    }, s);
  }
  get test() {
  }
};
e([y()], h.prototype, "active", null), e([y({
  constructOnly: true,
  nonNullable: true
})], h.prototype, "analysis", null), e([y()], h.prototype, "icon", null), e([y()], h.prototype, "label", null), e([y(), e2("esri/widgets/LineOfSight/t9n/LineOfSight")], h.prototype, "messages", void 0), e([y()], h.prototype, "view", null), e([y({
  type: w
})], h.prototype, "viewModel", void 0), e([y()], h.prototype, "visible", null), h = e([a("esri.widgets.LineOfSight")], h);
var m2 = h;
export {
  m2 as default
};
//# sourceMappingURL=LineOfSight-G6PWVBM2.js.map
