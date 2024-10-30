import {
  e as e3
} from "./chunk-4YFNKQX7.js";
import "./chunk-2SHZAJ7S.js";
import {
  B,
  e2
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
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import {
  M,
  w2 as w
} from "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import {
  d as d2
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
import {
  d
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/Measurement/MeasurementViewModel.js
var n2 = class extends S {
  constructor(e4) {
    super(e4), this.activeTool = null, this.activeViewModel = null, this.view = null;
  }
  get areaUnit() {
    return this.defaultUnit;
  }
  set areaUnit(e4) {
    this._overrideIfSome("areaUnit", e4);
  }
  get linearUnit() {
    return this.defaultUnit;
  }
  set linearUnit(e4) {
    this._overrideIfSome("linearUnit", e4);
  }
  get state() {
    const {
      activeViewModel: e4
    } = this;
    return e4 ? e4.state : "disabled";
  }
};
e([y({
  type: ["area", "distance", "direct-line"]
})], n2.prototype, "activeTool", void 0), e([y()], n2.prototype, "activeViewModel", void 0), e([y({
  type: w
})], n2.prototype, "areaUnit", null), e([y(e3)], n2.prototype, "defaultUnit", void 0), e([y({
  type: M
})], n2.prototype, "linearUnit", null), e([y({
  readOnly: true
})], n2.prototype, "state", null), e([y()], n2.prototype, "view", void 0), n2 = e([a("esri.widgets.Measurement.MeasurementViewModel")], n2);
var p = n2;

// ../../../node_modules/@arcgis/core/widgets/Measurement.js
var d3 = {
  base: "esri-measurement"
};
function u(e4) {
  return "esri.widgets.AreaMeasurement2D" === e4?.declaredClass || "esri.widgets.AreaMeasurement3D" === e4?.declaredClass;
}
var c = class extends B {
  constructor(e4, t) {
    super(e4, t), this._widgets = /* @__PURE__ */ new Map(), this.activeWidget = null, this.messages = null, this.viewModel = new p();
  }
  initialize() {
    this.activeWidget && this.viewModel.set("activeViewModel", this.activeWidget.viewModel), this.view && this.activeTool && this._getActiveWidget().then((e4) => {
      this._set("activeWidget", e4);
    }), this.addHandles([d2(() => [this.view, this.activeTool], () => __async(this, null, function* () {
      this._set("activeWidget", yield this._getActiveWidget());
    })), d2(() => this.activeWidget, (e4, t) => {
      this.viewModel.set("activeViewModel", e4 ? e4.viewModel : null), t && (t.visible = false);
    }), d2(() => [this.areaUnit, this.linearUnit, this.uiStrings], () => this._updateSubWidgetProperties())]);
  }
  destroy() {
    this._destroyWidgets();
  }
  get activeTool() {
    return this.viewModel.activeTool;
  }
  set activeTool(e4) {
    this.viewModel.activeTool = e4;
  }
  get areaUnit() {
    return this.viewModel.areaUnit;
  }
  set areaUnit(e4) {
    this.viewModel.areaUnit = e4;
  }
  get icon() {
    return "measure";
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
  get linearUnit() {
    return this.viewModel.linearUnit;
  }
  set linearUnit(e4) {
    this.viewModel.linearUnit = e4;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e4) {
    this.viewModel.view = e4;
  }
  render() {
    const {
      activeWidget: e4
    } = this, t = e4 && !e4.destroyed ? e4.render() : null;
    return n("div", {
      class: d3.base
    }, t);
  }
  clear() {
    this.activeTool = null, this._destroyWidgets();
  }
  startMeasurement() {
    const {
      activeViewModel: e4
    } = this.viewModel;
    e4 && d(e4.start());
  }
  _createWidget(e4) {
    return __async(this, null, function* () {
      const {
        areaUnit: t,
        linearUnit: i,
        view: s
      } = this;
      if (!s) return null;
      switch (e4) {
        case "area": {
          const {
            type: i2
          } = s;
          switch (i2) {
            case "2d":
              return new (0, (yield import("./AreaMeasurement2D-2A4R6RS3.js")).default)({
                view: s,
                unit: t,
                uiStrings: this._createUIStringsForWidget(e4)
              });
            case "3d":
              return new (0, (yield import("./AreaMeasurement3D-JPO63X52.js")).default)({
                view: s,
                unit: t,
                uiStrings: this._createUIStringsForWidget(e4)
              });
            default:
              return null;
          }
        }
        case "distance": {
          const {
            type: t2
          } = s;
          if ("2d" === t2) {
            return new (0, (yield import("./DistanceMeasurement2D-3AXCA7HS.js")).default)({
              view: s,
              unit: i,
              uiStrings: this._createUIStringsForWidget(e4)
            });
          }
          return null;
        }
        case "direct-line": {
          const {
            type: t2
          } = s;
          if ("3d" === t2) {
            return new (0, (yield import("./DirectLineMeasurement3D-YNGUTSLJ.js")).default)({
              view: s,
              unit: i,
              uiStrings: this._createUIStringsForWidget(e4)
            });
          }
          return null;
        }
        default:
          return null;
      }
    });
  }
  _destroyWidgets() {
    this._widgets.forEach((e4) => e4.destroy()), this._widgets.clear();
  }
  _getActiveWidget() {
    return __async(this, null, function* () {
      const {
        activeTool: e4,
        view: t
      } = this;
      if (!t || !e4) return null;
      let i = null;
      if (this._widgets.has(e4)) i = this._widgets.get(e4), i.visible = true;
      else {
        if (i = yield this._createWidget(e4), !i) return null;
        yield i.viewModel.start(), this._widgets.set(e4, i);
      }
      return i;
    });
  }
  _createUIStringsForWidget(e4) {
    if (!this.uiStrings) return;
    const t = e4 + "-" + this.view?.type;
    return this.uiStrings[t];
  }
  _updateSubWidgetProperties() {
    this._widgets.forEach((e4, t) => {
      const {
        areaUnit: i,
        linearUnit: s
      } = this;
      e4.unit = u(e4) ? i : s, e4.uiStrings = this._createUIStringsForWidget(t);
    });
  }
};
e([y()], c.prototype, "activeTool", null), e([y({
  readOnly: true
})], c.prototype, "activeWidget", void 0), e([y()], c.prototype, "areaUnit", null), e([y()], c.prototype, "icon", null), e([y()], c.prototype, "label", null), e([y()], c.prototype, "linearUnit", null), e([y(), e2("esri/widgets/Measurement/t9n/Measurement")], c.prototype, "messages", void 0), e([y()], c.prototype, "uiStrings", void 0), e([y()], c.prototype, "view", null), e([y({
  type: p
})], c.prototype, "viewModel", void 0), c = e([a("esri.widgets.Measurement")], c);
var g = c;
export {
  g as default
};
//# sourceMappingURL=Measurement-5GR3H44O.js.map
