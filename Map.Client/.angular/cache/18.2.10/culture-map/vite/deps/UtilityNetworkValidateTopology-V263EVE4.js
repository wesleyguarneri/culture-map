import {
  t
} from "./chunk-322SYD2C.js";
import {
  h as h2
} from "./chunk-PVO5NM6Q.js";
import {
  r as r2,
  x
} from "./chunk-JM7HAEY6.js";
import {
  B,
  e2,
  r
} from "./chunk-WYMXVOAT.js";
import {
  n as n2
} from "./chunk-K7TO5IIO.js";
import "./chunk-A4VVDRCH.js";
import "./chunk-CQDYITZC.js";
import "./chunk-5I6J67HP.js";
import "./chunk-YVULORT6.js";
import {
  h
} from "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import {
  C
} from "./chunk-7XMEZQ34.js";
import "./chunk-BDM2D6IC.js";
import "./chunk-EDSMXTFO.js";
import {
  f
} from "./chunk-MNLT652N.js";
import "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import {
  P,
  d,
  v
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
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/UtilityNetworkValidateTopology/UtilityNetworkValidateTopologyViewModel.js
var v2 = {
  noDirtyAreasInExtent: -2147208940,
  noUtilityNetworkExtension: -2147208474,
  cannotAcquireVersionLock_v10: -2147217146,
  cannotAcquireVersionLock_v11: -2147220947
};
var m = class extends S {
  constructor(t2) {
    super(t2), this._activeOperationDidSucceed = false, this._initialValidationsFinished = false, this._dirtyAreasLayer = null, this._serverVersion = null, this._updatingHandles = new h2(), this._validConstructProperties = false, this.executionError = "", this.extentToValidate = "current", this.loadErrors = new V();
  }
  initialize() {
    const t2 = () => __async(this, null, function* () {
      this.messages || (this.messages = yield h("esri/widgets/UtilityNetworkValidateTopology/t9n/UtilityNetworkValidateTopology"));
    });
    t2().then(() => {
      this.view || (this.view = null), this.utilityNetwork || (this.utilityNetwork = null), this.addHandles([d(() => [this.view, this.utilityNetwork], () => __async(this, null, function* () {
        const {
          loadErrors: t3,
          messages: {
            info: {
              noUtilityNetwork: i,
              noView: e3
            }
          }
        } = this;
        this._initialValidationsFinished = false, t3.removeAll(), this._validConstructProperties = true, this._dirtyAreasLayer = null, this._serverVersion = null, "utility" !== this.utilityNetwork?.type && (this.loadErrors.push(i), n.getLogger(this).error(new s("utilityNetworkValidateTopology:missing-property", i)), this._validConstructProperties = false), "2d" !== this.view?.type && (this.loadErrors.push(e3), n.getLogger(this).error(new s("utilityNetworkValidateTopology:missing-property", e3)), this._validConstructProperties = false), this._validConstructProperties && (this.utilityNetwork.loaded || (yield this.utilityNetwork.load().catch((t4) => {
          n.getLogger(this).error(t4), this._validConstructProperties = false;
        })), yield this._setDirtyAreasLayer()), this._validConstructProperties && (yield this._validateNetworkExtension());
      }), P), v(() => this.view?.map?.layers, "change", () => __async(this, null, function* () {
        const {
          loadErrors: t3,
          messages: {
            info: {
              noUtilityNetwork: i
            }
          }
        } = this, e3 = t3.find((t4) => t4 === i);
        this._initialValidationsFinished = false, e3 || (t3.removeAll(), yield this._validateNetworkExtension(), yield this._setDirtyAreasLayer()), this._initialValidationsFinished = true;
      })), f(t2)]);
    });
  }
  destroy() {
    this._updatingHandles.destroy();
  }
  get state() {
    return this.loadErrors.length || !this._validConstructProperties ? "disabled" : this.executionError ? "failed" : this._updatingHandles.updating ? "executing" : this._activeOperationDidSucceed ? "success" : this._initialValidationsFinished ? "ready" : "loading";
  }
  set utilityNetwork(t2) {
    this._get("utilityNetwork") !== t2 && this._set("utilityNetwork", t2);
  }
  set view(t2) {
    this._get("view") !== t2 && this._set("view", t2);
  }
  validateTopology() {
    return __async(this, null, function* () {
      const {
        messages: {
          info: {
            cannotAcquireVersionLock: t2,
            noDirtyAreasInExtent: i
          }
        },
        utilityNetwork: e3,
        view: s2
      } = this;
      this.loadErrors.length || (this._activeOperationDidSucceed = false, this._set("executionError", ""), this._updatingHandles.addPromise(e3?.validateTopology({
        validateArea: "current" === this.extentToValidate ? s2.extent.clone() : e3.fullExtent.clone(),
        outSpatialReference: s2.spatialReference?.clone() || null
      }).then(() => {
        this._activeOperationDidSucceed = true;
      }, (e4) => {
        let s3 = "Error: " + e4;
        if (e4 instanceof s && e4.details?.raw) switch (e4.details.raw.extendedCode) {
          case v2.noDirtyAreasInExtent:
            s3 = i;
            break;
          case v2.cannotAcquireVersionLock_v10:
          case v2.cannotAcquireVersionLock_v11:
            s3 = t2;
            break;
          default:
            s3 = e4.details.message;
        }
        this._set("executionError", s3);
      })));
    });
  }
  _setDirtyAreasLayer() {
    return __async(this, null, function* () {
      const {
        messages: {
          info: {
            noDirtyAreasLayer: t2
          }
        }
      } = this, i = this.view?.map.allLayers.items.filter((t3) => r2(t3)).find((t3) => t3.parsedUrl?.path === this.utilityNetwork?.networkSystemLayers.dirtyAreasLayerUrl);
      i ? (this._dirtyAreasLayer = i, yield this._dirtyAreasLayer.load(), this._serverVersion = this._dirtyAreasLayer.version ?? 0, this._validConstructProperties = true) : (this.loadErrors.push(t2), n.getLogger(this).error(new s("utilityNetworkValidateTopology:missing-layer", t2)), this._validConstructProperties = false);
    });
  }
  _validateNetworkExtension() {
    return __async(this, null, function* () {
      const {
        messages: {
          info: {
            noAdvancedEditingUserTypeExtension: t2,
            noUtilityNetworkServiceUserTypeExtension: i
          }
        }
      } = this, e3 = yield x(this.utilityNetwork.layerUrl), o = new C({
        url: e3
      });
      yield o.load();
      const a3 = o.user?.username ?? "", n3 = Number(this._serverVersion) <= 11.1 ? "utilityNetwork" : "advediting";
      if (!(yield t(o, a3, n3))) {
        const e4 = Number(this._serverVersion) <= 11.1 ? i : t2;
        this.loadErrors.push(e4), n.getLogger(this).error(new s("utilityNetworkValidateTopology:no-user-type-extension", e4)), this._validConstructProperties = false;
      }
      this._initialValidationsFinished = true;
    });
  }
};
e([y()], m.prototype, "_initialValidationsFinished", void 0), e([y()], m.prototype, "_dirtyAreasLayer", void 0), e([y()], m.prototype, "_validConstructProperties", void 0), e([y({
  readOnly: true
})], m.prototype, "executionError", void 0), e([y()], m.prototype, "extentToValidate", void 0), e([y()], m.prototype, "loadErrors", void 0), e([y()], m.prototype, "messages", void 0), e([y({
  readOnly: true
})], m.prototype, "state", null), e([y()], m.prototype, "utilityNetwork", null), e([y()], m.prototype, "view", null), m = e([a("esri.widgets.UtilityNetworkValidateTopology.UtilityNetworkValidateTopologyViewModel")], m);
var _ = m;

// ../../../node_modules/@arcgis/core/widgets/UtilityNetworkValidateTopology.js
var a2 = "esri-un-validate-topology";
var l = {
  container: `${a2}__container`,
  content: `${a2}__content`,
  controlsContainer: `${a2}__controls-container`,
  statusIconError: `${a2}__status-icon-error`,
  statusIconSuccess: `${a2}__status-icon-success`,
  statusIconContainer: `${a2}__status-icon-container`
};
var d2 = class extends B {
  constructor(t2, e3) {
    super(t2, e3), this.messages = null, this.viewModel = new _();
  }
  loadDependencies() {
    return r({
      action: () => import("./calcite-action-M3FHAAKV.js"),
      block: () => import("./calcite-block-PSHTVVZX.js"),
      icon: () => import("./calcite-icon-FE3MORNT.js"),
      notice: () => import("./calcite-notice-56I7IIQT.js"),
      option: () => import("./calcite-option-HXDEP2SV.js"),
      select: () => import("./calcite-select-VUQDZAVH.js"),
      tooltip: () => import("./calcite-tooltip-AYI56I5U.js")
    });
  }
  get extentToValidate() {
    return this.viewModel.extentToValidate;
  }
  set extentToValidate(t2) {
    this.viewModel.extentToValidate = t2;
  }
  get icon() {
    return "check-circle";
  }
  set icon(t2) {
    this._overrideIfSome("icon", t2);
  }
  get label() {
    return this.messages?.label ?? "";
  }
  set label(t2) {
    this._overrideIfSome("label", t2);
  }
  get utilityNetwork() {
    return this.viewModel.utilityNetwork;
  }
  set utilityNetwork(t2) {
    this.viewModel.utilityNetwork = t2;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(t2) {
    this.viewModel.view = t2;
  }
  render() {
    const {
      viewModel: t2
    } = this;
    return "disabled" === t2.state ? n2("div", {
      class: l.container
    }, n2("calcite-block", {
      class: l.content,
      collapsible: false,
      heading: this.label,
      open: true
    }, this._renderLoadErrorStatusIcon(), this._renderLoadErrorsNotices())) : n2("div", {
      class: l.container
    }, n2("calcite-block", {
      class: l.content,
      collapsible: true,
      heading: this.label,
      open: false
    }, this._renderStatusIcon(), this._renderValidateTopologyAction(), this._renderControls()));
  }
  _extentOptionSelectChange(t2) {
    this.extentToValidate = t2.target.value;
  }
  _getLoadErrorMessagesAsNotices(t2, e3) {
    return n2("calcite-notice", {
      closable: false,
      key: "error-notice-" + e3,
      kind: "warning",
      open: true,
      scale: "s"
    }, n2("div", {
      slot: "message"
    }, t2));
  }
  _handleValidateTopologyAction() {
    this.viewModel.validateTopology().catch(() => {
    });
  }
  _renderControls() {
    const {
      viewModel: t2
    } = this;
    return "failed" === t2.state ? n2("div", {
      class: l.controlsContainer
    }, this._renderExtentOptionSelect(), this._renderStatusNotice()) : this._renderExtentOptionSelect();
  }
  _renderExtentOptionSelect() {
    const {
      messages: t2,
      viewModel: e3
    } = this;
    return n2("div", {
      key: "selectExtentDiv"
    }, n2("calcite-select", {
      bind: this,
      disabled: "loading" === e3.state || "executing" === e3.state,
      label: t2.input.extentToValidate,
      onCalciteSelectChange: this._extentOptionSelectChange
    }, n2("calcite-option", {
      value: "current"
    }, t2.input.currentExtent), n2("calcite-option", {
      value: "entire"
    }, t2.input.entireExtent)));
  }
  _renderLoadErrorsNotices() {
    const {
      viewModel: t2
    } = this;
    return n2("div", {
      class: l.controlsContainer,
      key: "loadErrorsDiv"
    }, t2.loadErrors.items.map(this._getLoadErrorMessagesAsNotices));
  }
  _renderLoadErrorStatusIcon() {
    return n2("div", {
      class: l.statusIconContainer,
      key: "statusDiv",
      slot: "control"
    }, n2("calcite-icon", {
      class: l.statusIconError,
      icon: "exclamation-mark-triangle",
      scale: "s"
    }));
  }
  _renderStatusIcon() {
    const {
      messages: t2,
      viewModel: e3
    } = this, o = `${this.id}-validation-status-action`, i = `${this.id}-error-status-icon`, s2 = `${this.id}-success-status-icon`, n3 = (t3) => {
      setTimeout(() => {
        t3.innerHTML = "";
      }, 3500);
    };
    return "executing" === e3.state ? n2("div", {
      key: "statusDivExecuting",
      slot: "control"
    }, n2("calcite-action", {
      id: o,
      loading: true,
      text: t2.status.executing
    }), n2("calcite-tooltip", {
      referenceElement: o
    }, n2("span", null, t2.status.executing))) : "success" === e3.state ? n2("div", {
      afterCreate: n3,
      class: l.statusIconContainer,
      key: "statusDivSuccess",
      slot: "control"
    }, n2("calcite-icon", {
      class: l.statusIconSuccess,
      icon: "check-circle",
      id: s2,
      scale: "s"
    }), n2("calcite-tooltip", {
      referenceElement: s2
    }, n2("span", null, t2.status.success))) : "failed" === e3.state ? n2("div", {
      class: l.statusIconContainer,
      key: "statusDivFailed",
      slot: "control"
    }, n2("calcite-icon", {
      class: l.statusIconError,
      icon: "exclamation-mark-triangle",
      id: i,
      scale: "s"
    }), n2("calcite-tooltip", {
      referenceElement: i
    }, n2("span", null, e3.executionError))) : n2("div", {
      class: l.statusIconContainer,
      key: "statusDiv",
      slot: "control"
    });
  }
  _renderStatusNotice() {
    const {
      viewModel: t2
    } = this;
    return n2("div", {
      key: "executionErrorDiv"
    }, n2("calcite-notice", {
      closable: true,
      kind: "warning",
      open: true,
      scale: "s"
    }, n2("div", {
      slot: "message"
    }, t2.executionError)));
  }
  _renderValidateTopologyAction() {
    const {
      messages: t2,
      viewModel: e3
    } = this, o = `${this.id}-validation-action`;
    return n2("div", {
      key: "actionDiv",
      slot: "control"
    }, n2("calcite-action", {
      bind: this,
      disabled: "executing" === e3.state,
      icon: "play-f",
      id: o,
      loading: "loading" === e3.state,
      onclick: this._handleValidateTopologyAction,
      text: t2.input.validateTopology
    }), n2("calcite-tooltip", {
      referenceElement: o
    }, n2("span", null, "loading" === e3.state ? t2.status.loading : t2.input.validateTopology)));
  }
};
e([y()], d2.prototype, "extentToValidate", null), e([y()], d2.prototype, "icon", null), e([y()], d2.prototype, "label", null), e([y(), e2("esri/widgets/UtilityNetworkValidateTopology/t9n/UtilityNetworkValidateTopology")], d2.prototype, "messages", void 0), e([y()], d2.prototype, "utilityNetwork", null), e([y()], d2.prototype, "view", null), e([y({
  type: _
})], d2.prototype, "viewModel", void 0), d2 = e([a("esri.widgets.UtilityNetworkValidateTopology")], d2);
var p = d2;
export {
  p as default
};
//# sourceMappingURL=UtilityNetworkValidateTopology-V263EVE4.js.map
