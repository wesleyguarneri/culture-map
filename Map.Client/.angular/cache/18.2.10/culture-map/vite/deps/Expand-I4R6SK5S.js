import {
  e as e4,
  t
} from "./chunk-7PY7QIZQ.js";
import "./chunk-ZDGJDLVE.js";
import "./chunk-TDWXQPNS.js";
import {
  e as e3
} from "./chunk-HBMA4SRU.js";
import "./chunk-VDB6Y4TZ.js";
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
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import {
  U,
  p,
  v
} from "./chunk-6WHTZNUH.js";
import "./chunk-EITGQLII.js";
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
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/Expand/ExpandViewModel.js
var p2 = class extends S {
  constructor(e5) {
    super(e5), this._viewpointHandle = null, this.group = null;
  }
  initialize() {
    this.addHandles(v(() => this.view?.ui, "expand", (e5) => {
      const {
        target: t2
      } = e5;
      t2 && t2 !== this && t2.expanded && t2.group && t2.group === this.group && this._collapse();
    }));
  }
  destroy() {
    this._viewpointHandle = null, this.view = null;
  }
  set autoCollapse(e5) {
    this._set("autoCollapse", e5), this._watchViewpoint();
  }
  set expanded(e5) {
    const t2 = !!e5;
    this._set("expanded", t2);
    const i = this.view?.ui;
    i && i.emit("expand", {
      target: this
    }), this._viewpointHandleChange(t2);
  }
  get state() {
    return this.view?.ready ? "ready" : "disabled";
  }
  set view(e5) {
    this._get("view") !== e5 && (this._set("view", e5), e5 && p(() => e5.ready, () => {
      this.view === e5 && this._watchViewpoint();
    }, {
      once: true,
      initial: true
    }));
  }
  _viewpointHandleChange(e5) {
    this._viewpointHandle && (e5 ? p(() => this.view?.stationary, () => this._viewpointHandle?.resume(), {
      once: true,
      initial: true
    }) : this._viewpointHandle.pause());
  }
  _watchViewpoint() {
    const e5 = "viewpoint";
    this.removeHandles(e5), this._viewpointHandle = null;
    const {
      autoCollapse: t2,
      view: i
    } = this;
    if (!i || !t2) return;
    const s = U(() => "3d" === i.type ? i.camera : i.viewpoint, () => this._collapse());
    this.addHandles(s, e5), this._viewpointHandle = s;
  }
  _collapse() {
    this.expanded = false;
  }
};
e([y({
  value: false
})], p2.prototype, "autoCollapse", null), e([y({
  value: false
})], p2.prototype, "expanded", null), e([y()], p2.prototype, "group", void 0), e([y({
  readOnly: true
})], p2.prototype, "state", null), e([y({
  value: null
})], p2.prototype, "view", null), p2 = e([a("esri.widgets.Expand.ExpandViewModel")], p2);
var r2 = p2;

// ../../../node_modules/@arcgis/core/widgets/Expand.js
var d = "esri-expand";
var h = {
  base: d,
  toggle: `${d}__toggle`,
  popoverContent: `${d}__popover-content`,
  panel: `${d}__panel`,
  panelContent: `${d}__panel-content`,
  sheet: `${d}__sheet`,
  panelIconNumber: `${d}__panel-icon-number`,
  contentContainer: `${d}__content-container`,
  icon: "esri-collapse__icon",
  iconFlip: "esri-collapse__icon-flip",
  iconExpanded: `${d}__icon--expanded`,
  iconNumber: `${d}__icon-number`,
  content: `${d}__content`,
  contentExpanded: `${d}__content--expanded`
};
var u = "chevrons-left";
var m = "chevrons-right";
var g = class extends B {
  constructor(e5, t2) {
    super(e5, t2), this.closeOnEsc = true, this.collapseTooltip = "", this.content = "", this.expandTooltip = "", this.iconNumber = 0, this.messages = null, this.messagesCommon = null, this.mode = "auto", this.placement = null, this.viewModel = new r2(), this.toggle = () => {
      this.viewModel.expanded = !this.viewModel.expanded;
    }, this._handlePopoverClose = (e6) => {
      e6.target === this._popoverEl && (this.viewModel.expanded = e6.target.open);
    }, this._handleSheetClose = (e6) => {
      this.viewModel.expanded = e6.target.open;
    }, this._handlePanelClose = (e6) => {
      this.viewModel.expanded = !e6.target.closed;
    }, this._handleKeyDown = (e6) => {
      this.viewModel.expanded && "Escape" === e6.key && !this._willCloseOnEsc(e6) && e6.preventDefault();
    }, this._storeToggleButtonEl = (e6) => {
      this._toggleButtonEl = e6;
    }, this._storePopoverEl = (e6) => {
      this._popoverEl = e6;
    };
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-TT4KT5XH.js"),
      icon: () => import("./calcite-icon-FE3MORNT.js"),
      panel: () => import("./calcite-panel-JKWQ43M4.js"),
      popover: () => import("./calcite-popover-24Y2F2AH.js"),
      sheet: () => import("./calcite-sheet-ZJSLZKTR.js")
    });
  }
  get expandTitle() {
    const {
      expanded: e5,
      messagesCommon: t2,
      collapseTooltip: o,
      expandTooltip: n2
    } = this;
    return (e5 ? o || t2?.collapse : n2 || t2?.expand) ?? "";
  }
  get _displaySheet() {
    switch (this.mode) {
      case "drawer":
        return true;
      case "auto":
        return "xsmall" === this.viewModel.view?.widthBreakpoint;
      default:
        return false;
    }
  }
  get autoCollapse() {
    return this.viewModel.autoCollapse;
  }
  set autoCollapse(e5) {
    this.viewModel.autoCollapse = e5;
  }
  get collapseIcon() {
    return m;
  }
  set collapseIcon(e5) {
    this._overrideIfSome("collapseIcon", e5);
  }
  get expanded() {
    return this.viewModel.expanded;
  }
  set expanded(e5) {
    this.viewModel.expanded = e5;
  }
  get expandIcon() {
    return e4(this.content) ? this.content.icon : u;
  }
  set expandIcon(e5) {
    this._overrideIfSome("expandIcon", e5);
  }
  get group() {
    return this.viewModel.group;
  }
  set group(e5) {
    this.viewModel.group = e5;
  }
  get icon() {
    return null;
  }
  get label() {
    return (e4(this.content) ? this.content.label : null) ?? this.messages?.widgetLabel ?? "";
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
  expand() {
    this.viewModel.expanded = true;
  }
  collapse() {
    this.viewModel.expanded = false;
  }
  render() {
    const {
      _displaySheet: e5,
      _toggleButtonEl: t2,
      viewModel: {
        expanded: o
      },
      label: n2,
      placement: s
    } = this;
    return n("div", {
      class: this.classes(h.base, e3.widget)
    }, this._renderToggle(), e5 ? n("calcite-sheet", {
      class: h.sheet,
      heightScale: "l",
      label: n2,
      onkeydown: this._handleKeyDown,
      open: o,
      position: "block-end",
      onCalciteSheetClose: this._handleSheetClose
    }, n("calcite-panel", {
      class: h.panel,
      closable: true,
      closed: !o,
      heading: n2,
      onkeydown: this._handleKeyDown,
      onCalcitePanelClose: this._handlePanelClose
    }, n("div", {
      class: h.panelContent
    }, this._renderContent()))) : t2 ? n("calcite-popover", {
      afterCreate: this._storePopoverEl,
      afterUpdate: this._storePopoverEl,
      label: n2,
      onkeydown: this._handleKeyDown,
      open: o,
      overlayPositioning: "fixed",
      placement: s ?? this._getPlacement(),
      referenceElement: t2,
      onCalcitePopoverClose: this._handlePopoverClose
    }, n("div", {
      class: h.popoverContent
    }, this._renderContent())) : null);
  }
  _getPlacement() {
    const {
      container: e5,
      view: t2
    } = this, o = e5 && t2 ? t2.ui.getPosition(e5) : null;
    if (!o || "manual" === o) return "auto";
    const [n2, s] = o.split("-");
    return `${"right" === s ? "left" : "right"}-${"bottom" === n2 ? "end" : "start"}`;
  }
  _willCloseOnEsc(e5) {
    const {
      closeOnEsc: t2
    } = this;
    return "function" == typeof t2 ? t2(e5) : t2;
  }
  _renderBadgeNumber() {
    const {
      expanded: e5,
      iconNumber: t2
    } = this;
    return t2 && !e5 ? n("span", {
      class: h.iconNumber,
      key: "expand__icon-number"
    }, t2) : null;
  }
  _renderToggleButton() {
    const {
      expanded: e5,
      expandTitle: t2,
      expandIcon: o,
      collapseIcon: n2
    } = this, s = e5 ? n2 : o, l = s === u || s === m;
    return n("calcite-button", {
      afterCreate: this._storeToggleButtonEl,
      afterUpdate: this._storeToggleButtonEl,
      class: e3.widgetButton,
      kind: "neutral",
      label: t2,
      onclick: this.toggle,
      scale: "s",
      title: t2
    }, s ? n("calcite-icon", {
      class: this.classes(h.icon, l && h.iconFlip),
      icon: s,
      scale: "s"
    }) : null);
  }
  _renderToggle() {
    return n("div", {
      class: h.toggle
    }, this._renderToggleButton(), this._renderBadgeNumber());
  }
  _renderContent() {
    const {
      content: e5
    } = this;
    return "string" == typeof e5 ? n("div", {
      class: h.contentContainer,
      innerHTML: e5,
      key: "content__string"
    }) : e4(e5) ? n("div", {
      class: h.contentContainer,
      key: "content__widget"
    }, e5.render()) : e5 instanceof HTMLElement ? n("div", {
      afterCreate: this._attachToNode,
      bind: e5,
      class: h.contentContainer,
      key: "content__html-element"
    }) : t(e5) ? n("div", {
      afterCreate: this._attachToNode,
      bind: e5.domNode,
      class: h.contentContainer,
      key: "content__node"
    }) : null;
  }
  _attachToNode(e5) {
    const t2 = this;
    e5.appendChild(t2);
  }
};
e([y({
  readOnly: true
})], g.prototype, "expandTitle", null), e([y()], g.prototype, "_toggleButtonEl", void 0), e([y()], g.prototype, "_displaySheet", null), e([y()], g.prototype, "autoCollapse", null), e([y()], g.prototype, "closeOnEsc", void 0), e([y()], g.prototype, "collapseIcon", null), e([y()], g.prototype, "collapseTooltip", void 0), e([y()], g.prototype, "content", void 0), e([y()], g.prototype, "expanded", null), e([y()], g.prototype, "expandIcon", null), e([y()], g.prototype, "expandTooltip", void 0), e([y()], g.prototype, "group", null), e([y()], g.prototype, "icon", null), e([y()], g.prototype, "iconNumber", void 0), e([y()], g.prototype, "label", null), e([y(), e2("esri/widgets/Expand/t9n/Expand")], g.prototype, "messages", void 0), e([y(), e2("esri/t9n/common")], g.prototype, "messagesCommon", void 0), e([y()], g.prototype, "mode", void 0), e([y()], g.prototype, "placement", void 0), e([y()], g.prototype, "view", null), e([y({
  type: r2
})], g.prototype, "viewModel", void 0), g = e([a("esri.widgets.Expand")], g);
var _ = g;
export {
  _ as default
};
//# sourceMappingURL=Expand-I4R6SK5S.js.map