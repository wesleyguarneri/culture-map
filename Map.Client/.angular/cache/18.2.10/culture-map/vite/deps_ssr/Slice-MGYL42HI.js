import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  _
} from "./chunk-BTSKVECP.js";
import {
  h
} from "./chunk-IFQJT5WB.js";
import {
  e as e4
} from "./chunk-XJ4XZPHY.js";
import {
  e as e3
} from "./chunk-FYGR4X6I.js";
import "./chunk-4X2M4YSF.js";
import "./chunk-D5RCKR5Z.js";
import "./chunk-HKAONIBH.js";
import {
  c
} from "./chunk-RHVUMKCC.js";
import "./chunk-D3XX7CQS.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-JDVVCQU6.js";
import {
  n as n2,
  t
} from "./chunk-NXXQ35YM.js";
import "./chunk-ASCK5HJ5.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
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
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
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
import "./chunk-LZSLQ24Q.js";
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
  d
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import "./chunk-L4CMR4WM.js";
import "./chunk-7JIACICA.js";
import "./chunk-IE4UBD3F.js";
import "./chunk-IAO6HACY.js";
import {
  __async,
  __superGet
} from "./chunk-XBPEBUD5.js";

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
      action: () => import("./calcite-action-BXG7XWUR.js"),
      button: () => import("./calcite-button-LAMWLR56.js"),
      "list-item": () => import("./calcite-list-item-TVXB7DPG.js"),
      list: () => import("./calcite-list-IDJ56B53.js")
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
//# sourceMappingURL=Slice-MGYL42HI.js.map
