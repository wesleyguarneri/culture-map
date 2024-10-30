import {
  _ as _2
} from "./chunk-OHYWIZWO.js";
import {
  e as e3
} from "./chunk-HBMA4SRU.js";
import {
  v
} from "./chunk-EVI3CYZC.js";
import {
  f,
  u as u2
} from "./chunk-JDVPMYNU.js";
import "./chunk-6PFH6TN3.js";
import "./chunk-Q7ENCKPJ.js";
import "./chunk-CQRPND5N.js";
import {
  j,
  m,
  u
} from "./chunk-6MR4UDDL.js";
import "./chunk-KQDYTHCF.js";
import {
  d as d3
} from "./chunk-HD65DNIO.js";
import "./chunk-4KWLMXIA.js";
import "./chunk-BIUXKPKA.js";
import "./chunk-634JLXD4.js";
import "./chunk-Y3EDGYWG.js";
import "./chunk-UF6JOUSJ.js";
import "./chunk-T5JGQSO3.js";
import "./chunk-CIW3KHOW.js";
import "./chunk-J55F4AC2.js";
import "./chunk-IQLBZKUD.js";
import "./chunk-7MZZCQ64.js";
import "./chunk-HEWCRCJC.js";
import {
  n as n2,
  t
} from "./chunk-6A7CWJED.js";
import "./chunk-DUTZNK67.js";
import "./chunk-IN6BQCWS.js";
import "./chunk-HMNBB7ED.js";
import "./chunk-3RRMLFFN.js";
import "./chunk-HT2T6PUB.js";
import "./chunk-K64AAM77.js";
import "./chunk-6EUVKE22.js";
import "./chunk-DTUSTSEJ.js";
import "./chunk-JCWFGRHQ.js";
import "./chunk-JILEJ6R2.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-DZALMCYL.js";
import "./chunk-K226GFDN.js";
import "./chunk-4ZZRP4MA.js";
import "./chunk-7ZJ6P7J7.js";
import "./chunk-FPFZQCEQ.js";
import {
  B,
  e2,
  r
} from "./chunk-WYMXVOAT.js";
import {
  n
} from "./chunk-K7TO5IIO.js";
import "./chunk-A4VVDRCH.js";
import "./chunk-CQDYITZC.js";
import "./chunk-5I6J67HP.js";
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-7XMEZQ34.js";
import "./chunk-BDM2D6IC.js";
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import "./chunk-OGZAGPIO.js";
import "./chunk-HJJIIYFF.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import "./chunk-NYQ5CYNR.js";
import {
  _
} from "./chunk-O7UDKFOW.js";
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
  C,
  d as d2
} from "./chunk-6WHTZNUH.js";
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
import "./chunk-YPWMP2VK.js";
import "./chunk-23E6RT3O.js";
import "./chunk-RCBGISRX.js";
import "./chunk-2P72IR2Y.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
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
  d
} from "./chunk-HJY2YILU.js";
import {
  o
} from "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

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
      button: () => import("./calcite-button-TT4KT5XH.js")
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
//# sourceMappingURL=LineOfSight-GBWWRAIL.js.map
