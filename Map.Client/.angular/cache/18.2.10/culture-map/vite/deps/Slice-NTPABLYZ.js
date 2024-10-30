import {
  _
} from "./chunk-OHYWIZWO.js";
import {
  h
} from "./chunk-5P5DJEOE.js";
import {
  e as e4
} from "./chunk-HR6RJVBL.js";
import {
  e as e3
} from "./chunk-HBMA4SRU.js";
import "./chunk-6PFH6TN3.js";
import "./chunk-Q7ENCKPJ.js";
import "./chunk-SLCHZ6DD.js";
import {
  c
} from "./chunk-CQRPND5N.js";
import "./chunk-KQDYTHCF.js";
import "./chunk-CIW3KHOW.js";
import "./chunk-HEWCRCJC.js";
import {
  n as n2,
  t
} from "./chunk-6A7CWJED.js";
import "./chunk-HT2T6PUB.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
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
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
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
import "./chunk-6WHTZNUH.js";
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
  d
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __superGet
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/analysis/SliceAnalysis.js
var a2 = class extends c {
  constructor(e5) {
    super(e5), this.type = "slice", this.tiltEnabled = false, this.shape = null, this.excludeGroundSurface = false;
  }
  get excludedLayers() {
    return this._get("excludedLayers") || new V();
  }
  set excludedLayers(e5) {
    this._set("excludedLayers", n2(e5, this._get("excludedLayers")));
  }
  get requiredPropertiesForEditing() {
    return [this.shape?.position];
  }
  clear() {
    this.shape = null;
  }
};
e([y({
  type: ["slice"]
})], a2.prototype, "type", void 0), e([y()], a2.prototype, "tiltEnabled", void 0), e([y({
  types: {
    key: "type",
    base: null,
    typeMap: {
      plane: h
    },
    defaultKeyValue: "plane"
  }
})], a2.prototype, "shape", void 0), e([y({
  cast: t,
  clonable: (e5) => e5.slice()
})], a2.prototype, "excludedLayers", null), e([y({
  type: Boolean,
  nonNullable: true
})], a2.prototype, "excludeGroundSurface", void 0), e([y({
  readOnly: true
})], a2.prototype, "requiredPropertiesForEditing", null), a2 = e([a("esri.analysis.SliceAnalysis")], a2);
var c2 = a2;

// ../../../node_modules/@arcgis/core/widgets/Slice/SliceViewModel.js
var a3 = /* @__PURE__ */ new Set();
var i = class _this extends _ {
  constructor(e5) {
    super(e5), this.analysis = null, this.supportedViewType = "3d", this.unsupportedErrorMessage = "SliceViewModel is only supported in 3D views.", a3.add(this);
  }
  destroy() {
    a3.delete(this);
  }
  get state() {
    return this.disabled || !this.ready ? "disabled" : null == this.tool ? "ready" : this.tool.state;
  }
  get shape() {
    return this.analysis.shape;
  }
  set shape(e5) {
    this.analysis.shape = e5;
  }
  get tiltEnabled() {
    return this.analysis.tiltEnabled;
  }
  set tiltEnabled(e5) {
    this.analysis.tiltEnabled = e5;
  }
  get layersMode() {
    return this.tool?.layersMode ?? "none";
  }
  get excludedLayers() {
    return this.analysis.excludedLayers;
  }
  set excludedLayers(e5) {
    this.analysis.excludedLayers = V.isCollection(e5) ? e5 : new V(e5);
  }
  get excludeGroundSurface() {
    return this.analysis.excludeGroundSurface;
  }
  set excludeGroundSurface(e5) {
    this.analysis.excludeGroundSurface = e5;
  }
  start() {
    return __async(this, null, function* () {
      yield __superGet(_this.prototype, this, "start").call(this), a3.forEach((e5) => {
        e5.view === this.view && e5 !== this && e5.clear();
      }), null != this.analysisView && (this.analysisView.active = true);
    });
  }
  enterExcludeLayerMode() {
    null != this.tool && this.tool.enterExcludeLayerMode();
  }
  exitExcludeLayerMode() {
    null != this.tool && this.tool.exitExcludeLayerMode();
  }
  onConnectToAnalysisView(e5) {
    e5.active = true;
  }
  constructAnalysis() {
    return new c2();
  }
};
e([y({
  type: c2
})], i.prototype, "analysis", void 0), e([y({
  readOnly: true
})], i.prototype, "state", null), e([y()], i.prototype, "shape", null), e([y()], i.prototype, "tiltEnabled", null), e([y()], i.prototype, "layersMode", null), e([y()], i.prototype, "excludedLayers", null), e([y({
  nonNullable: true
})], i.prototype, "excludeGroundSurface", null), i = e([a("esri.widgets.Slice.SliceViewModel")], i);
var n3 = i;

// ../../../node_modules/@arcgis/core/widgets/Slice.js
var u = "esri-slice";
var p = {
  base: u,
  actions: `${u}__actions`,
  cancelButton: `${u}__cancel-button`,
  container: `${u}__container`,
  error: `${u}__error`,
  excludeButton: `${u}__exclude-button`,
  hint: `${u}__hint`,
  hintText: `${u}__hint-text`,
  layerItem: `${u}__layer-item`,
  layerList: `${u}__layer-list`,
  layerListHeading: `${u}__layer-list-title`,
  newSliceButton: `${u}__clear-button`
};
var m = class extends B {
  constructor(e5, s) {
    super(e5, s), this.headingLevel = 3, this.messages = null, this.viewModel = new n3(), this._onNewSliceClick = () => {
      d(this.viewModel.start());
    };
  }
  loadDependencies() {
    return r({
      action: () => import("./calcite-action-M3FHAAKV.js"),
      button: () => import("./calcite-button-TT4KT5XH.js"),
      "list-item": () => import("./calcite-list-item-MF2DTJRA.js"),
      list: () => import("./calcite-list-QRFMTME5.js")
    });
  }
  get active() {
    return this.viewModel.active;
  }
  get analysis() {
    return this.viewModel.analysis;
  }
  set analysis(e5) {
    this.viewModel.analysis = e5;
  }
  get excludedLayers() {
    return this.viewModel.excludedLayers;
  }
  set excludedLayers(e5) {
    this.viewModel.excludedLayers = e5;
  }
  get excludeGroundSurface() {
    return this.viewModel.excludeGroundSurface;
  }
  set excludeGroundSurface(e5) {
    this.viewModel.excludeGroundSurface = e5;
  }
  get icon() {
    return "slice";
  }
  set icon(e5) {
    this._overrideIfSome("icon", e5);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e5) {
    this._overrideIfSome("label", e5);
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e5) {
    this.viewModel.view = e5;
  }
  get visible() {
    return this.viewModel.visible;
  }
  set visible(e5) {
    this.viewModel.visible = e5;
  }
  get hasVoxelLayers() {
    const e5 = this.viewModel?.view;
    return null != e5 && e5.allLayerViews.some((e6) => "voxel-3d" === e6.type);
  }
  render() {
    return n("div", {
      class: this.classes(p.base, e3.widget, e3.panel),
      role: "presentation"
    }, this.visible ? n("div", {
      class: p.container
    }, this.viewModel.supported ? [this._renderHint(), this._renderLayerList(), this._renderActions()] : this._renderUnsupported()) : null);
  }
  _renderUnsupported() {
    return n("div", {
      class: p.error,
      key: "unsupported"
    }, n("p", null, this.messages.unsupported));
  }
  _renderHint() {
    const {
      hasVoxelLayers: e5,
      messages: t2,
      viewModel: s
    } = this, {
      active: i2,
      layersMode: l,
      state: r2
    } = s;
    let o = null;
    return i2 && ("exclude" === l ? o = t2.excludeHint : "ready" === r2 && (o = e5 ? t2.voxelHint : t2.hint)), o ? n("div", {
      class: p.hint,
      key: "hint"
    }, n("p", {
      class: p.hintText
    }, o), n("p", {
      class: p.hintText
    }, t2.verticalHint)) : null;
  }
  _renderLayerList() {
    const {
      excludedLayers: e5,
      excludeGroundSurface: t2,
      headingLevel: s,
      messages: i2,
      viewModel: l
    } = this, {
      layersMode: r2,
      state: o
    } = l, n4 = "slicing" === o || "sliced" === o, a4 = e5 ? e5.toArray().map((e6) => this._renderLayerItem({
      uid: e6.uid,
      title: e6.title,
      onClick: () => (this.excludedLayers.remove(e6), false)
    })) : [];
    return t2 && a4.push(this._renderLayerItem({
      uid: "ground",
      title: i2.ground,
      onClick: () => (this.excludeGroundSurface = false, false)
    })), "exclude" !== r2 && n4 && 0 !== a4.length ? n("div", {
      class: p.layerList,
      key: "settings"
    }, n(e4, {
      class: p.layerListHeading,
      level: s
    }, i2.excludedLayers), n("calcite-list", {
      selectionMode: "none"
    }, a4)) : null;
  }
  _renderActions() {
    const {
      messages: e5,
      viewModel: t2
    } = this, {
      active: s,
      state: i2
    } = t2, l = "disabled" === i2, r2 = "slicing" === i2 || "sliced" === i2, o = "exclude" === t2.layersMode, n4 = [];
    return s && !r2 || o || n4.push(n("calcite-button", {
      class: p.newSliceButton,
      disabled: l,
      key: "new-slice",
      onclick: this._onNewSliceClick
    }, e5.newSlice)), r2 && !o && n4.push(n("calcite-button", {
      appearance: "outline-fill",
      class: p.excludeButton,
      disabled: l,
      key: "exclude",
      onclick: () => t2.enterExcludeLayerMode()
    }, e5.excludeLayer)), s && o && n4.push(n("calcite-button", {
      appearance: "outline-fill",
      class: p.cancelButton,
      disabled: l,
      key: "cancel-exclude",
      onclick: () => t2.exitExcludeLayerMode()
    }, e5.cancel)), 0 === n4.length ? null : n("div", {
      class: p.actions
    }, n4);
  }
  _renderLayerItem(e5) {
    const t2 = this.messages.includeLayer;
    return n("calcite-list-item", {
      class: p.layerItem,
      key: e5.uid,
      label: e5.title ?? ""
    }, n("calcite-action", {
      icon: "x",
      onclick: e5.onClick,
      scale: "s",
      slot: "actions-end",
      text: t2,
      title: t2
    }));
  }
};
e([y()], m.prototype, "active", null), e([y({
  constructOnly: true,
  nonNullable: true
})], m.prototype, "analysis", null), e([y()], m.prototype, "excludedLayers", null), e([y()], m.prototype, "excludeGroundSurface", null), e([y()], m.prototype, "headingLevel", void 0), e([y()], m.prototype, "icon", null), e([y()], m.prototype, "label", null), e([y(), e2("esri/widgets/Slice/t9n/Slice")], m.prototype, "messages", void 0), e([y()], m.prototype, "view", null), e([y({
  type: n3
})], m.prototype, "viewModel", void 0), e([y()], m.prototype, "visible", null), e([y()], m.prototype, "hasVoxelLayers", null), m = e([a("esri.widgets.Slice")], m);
var y2 = m;
export {
  y2 as default
};
//# sourceMappingURL=Slice-NTPABLYZ.js.map
