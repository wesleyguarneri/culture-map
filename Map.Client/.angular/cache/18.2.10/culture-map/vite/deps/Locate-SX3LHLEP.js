import {
  b as b2
} from "./chunk-I3EAMXIH.js";
import {
  p
} from "./chunk-S6XQ5WYN.js";
import {
  r as r2
} from "./chunk-55LUHDLJ.js";
import "./chunk-YKOY3XWH.js";
import {
  e as e4
} from "./chunk-ZDGJDLVE.js";
import "./chunk-IM5W3NWZ.js";
import "./chunk-ONOHIFCT.js";
import {
  e as e3
} from "./chunk-HBMA4SRU.js";
import "./chunk-F35MWZH7.js";
import "./chunk-YA5CTHMT.js";
import "./chunk-HD65DNIO.js";
import {
  k
} from "./chunk-4KWLMXIA.js";
import "./chunk-BIUXKPKA.js";
import "./chunk-634JLXD4.js";
import "./chunk-Y3EDGYWG.js";
import "./chunk-UF6JOUSJ.js";
import "./chunk-T5JGQSO3.js";
import "./chunk-CIW3KHOW.js";
import "./chunk-J55F4AC2.js";
import "./chunk-IQLBZKUD.js";
import "./chunk-7MZZCQ64.js";
import "./chunk-6A7CWJED.js";
import "./chunk-HT2T6PUB.js";
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
import "./chunk-7XMEZQ34.js";
import "./chunk-BDM2D6IC.js";
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import {
  f
} from "./chunk-MNLT652N.js";
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
  i
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
  b
} from "./chunk-HJY2YILU.js";
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

// ../../../node_modules/@arcgis/core/widgets/Locate/LocateViewModel.js
function d() {
  return __async(this, null, function* () {
    const t = yield h("esri/widgets/Locate/t9n/Locate");
    return new k({
      title: t.currentLocation,
      fieldInfos: [{
        fieldName: "timestamp",
        label: t.timestamp,
        format: {
          dateFormat: "short-date-short-time"
        }
      }, {
        fieldName: "latitude",
        label: t.latitude,
        format: {
          places: 4,
          digitSeparator: true
        }
      }, {
        fieldName: "longitude",
        label: t.longitude,
        format: {
          places: 4,
          digitSeparator: true
        }
      }, {
        fieldName: "accuracy",
        label: t.accuracy,
        format: {
          places: 0,
          digitSeparator: true
        }
      }, {
        fieldName: "altitude",
        label: t.altitude,
        format: {
          places: 0,
          digitSeparator: true
        }
      }, {
        fieldName: "altitudeAccuracy",
        label: t.altitudeAccuracy,
        format: {
          places: 0,
          digitSeparator: true
        }
      }, {
        fieldName: "heading",
        label: t.heading,
        format: {
          places: 0,
          digitSeparator: true
        }
      }, {
        fieldName: "speed",
        label: t.speed,
        format: {
          places: 0,
          digitSeparator: true
        }
      }],
      actions: [r2.clone()],
      content: [{
        type: "fields"
      }]
    });
  });
}
var u = class extends b2 {
  constructor(t) {
    super(t), this._locateController = null, this.error = void 0, this.popupEnabled = true, this.locate = this.locate.bind(this);
  }
  initialize() {
    this.addHandles([f(() => {
      const {
        graphic: t,
        view: e5
      } = this;
      if (!t) return;
      const o = e5?.graphics?.includes(t);
      o && this._updatePopupTemplate(t);
    })]);
  }
  destroy() {
    this.cancelLocate();
  }
  get state() {
    return this._geolocationUsable ? this.view?.ready ? this._locateController ? "locating" : null != this.error ? "error" : "ready" : "disabled" : "feature-unsupported";
  }
  locate() {
    return __async(this, null, function* () {
      if (this.cancelLocate(), "disabled" === this.state) throw new s("locate:disabled-state", "Cannot locate when disabled.");
      if ("feature-unsupported" === this.state) throw new s("locate:feature-unsupported-state", "Cannot locate in unsecure domain.");
      const t = new AbortController();
      this._locateController = t, this.error = void 0;
      try {
        const e5 = yield p(this.geolocationOptions);
        if (yield this.updatePosition(e5, t), this._locateController !== t) return null;
        const {
          graphic: o
        } = this;
        return o && (yield this._updatePopupTemplate(o)), this._addGraphic(), this.emit("locate", {
          position: e5
        }), this._locateController = null, e5;
      } catch (e5) {
        if (b(e5)) return null;
        throw t === this._locateController && (this._locateController = null), this.error = e5, this.emit("locate-error", {
          error: e5
        }), e5;
      }
    });
  }
  cancelLocate() {
    this._clearGraphic(), this._locateController && this._locateController.abort(), this._locateController = null;
  }
  _updatePopupTemplate(t) {
    return __async(this, null, function* () {
      if (!this.popupEnabled) return;
      const e5 = yield d(), o = t !== this.graphic;
      this.destroyed || o || (t.popupTemplate = e5);
    });
  }
};
e([y()], u.prototype, "_locateController", void 0), e([y()], u.prototype, "error", void 0), e([y()], u.prototype, "popupEnabled", void 0), e([y({
  readOnly: true
})], u.prototype, "state", null), e([y()], u.prototype, "locate", null), e([y()], u.prototype, "cancelLocate", null), u = e([a("esri.widgets.Locate.LocateViewModel")], u);
var m = u;

// ../../../node_modules/@arcgis/core/widgets/Locate.js
var m2 = {
  base: "esri-locate"
};
var g = class extends B {
  constructor(e5, o) {
    super(e5, o), this.messages = null, this.messagesCommon = null, this.viewModel = new m(), this._locate = () => {
      const {
        viewModel: e6
      } = this;
      "locating" === e6.state ? e6.cancelLocate() : e6.locate().catch(() => {
      });
    };
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-TT4KT5XH.js"),
      loader: () => import("./calcite-loader-UGV3HF5I.js"),
      tooltip: () => import("./calcite-tooltip-AYI56I5U.js")
    });
  }
  get geolocationOptions() {
    return this.viewModel.geolocationOptions;
  }
  set geolocationOptions(e5) {
    this.viewModel.geolocationOptions = e5;
  }
  get goToLocationEnabled() {
    return this.viewModel.goToLocationEnabled;
  }
  set goToLocationEnabled(e5) {
    this.viewModel.goToLocationEnabled = e5;
  }
  get goToOverride() {
    return this.viewModel.goToOverride;
  }
  set goToOverride(e5) {
    this.viewModel.goToOverride = e5;
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e5) {
    this.viewModel.graphic = e5;
  }
  get icon() {
    return "gps-off";
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
  get popupEnabled() {
    return this.viewModel.popupEnabled;
  }
  set popupEnabled(e5) {
    this.viewModel.popupEnabled = e5;
  }
  get rotationEnabled() {
    return i(n.getLogger(this), "rotationEnabled", {
      replacement: "use Track widget",
      version: "4.29",
      warnOnce: true
    }), this.viewModel.rotationEnabled;
  }
  set rotationEnabled(e5) {
    i(n.getLogger(this), "rotationEnabled", {
      replacement: "use Track widget",
      version: "4.29",
      warnOnce: true
    }), this.viewModel.rotationEnabled = e5;
  }
  get scale() {
    return this.viewModel.scale;
  }
  set scale(e5) {
    this.viewModel.scale = e5;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e5) {
    this.viewModel.view = e5;
  }
  cancelLocate() {
    this.viewModel.cancelLocate();
  }
  locate() {
    return this.viewModel.locate();
  }
  render() {
    const {
      viewModel: e5,
      icon: o
    } = this, {
      state: t
    } = e5, i2 = "locating" === t, s2 = i2 ? this.messagesCommon.cancel : this.messages.title, r3 = "feature-unsupported" === t, l = this._localizeError(this.viewModel?.error);
    return n2("div", {
      class: this.classes(m2.base, e3.widget)
    }, !r3 && n2("calcite-button", {
      class: e3.widgetButton,
      disabled: "disabled" === t,
      iconStart: i2 ? void 0 : o,
      kind: "neutral",
      label: s2,
      onclick: this._locate,
      title: s2
    }, i2 ? n2("calcite-loader", {
      inline: true,
      label: ""
    }) : null), l ? n2("calcite-tooltip", {
      open: true,
      overlayPositioning: "fixed",
      referenceElement: this.container
    }, l) : null);
  }
  _localizeError(e5) {
    return e5 instanceof GeolocationPositionError ? e5.code === GeolocationPositionError.PERMISSION_DENIED ? this.messages?.permissionError : e5.code === GeolocationPositionError.TIMEOUT ? this.messages?.timeoutError : this.messages?.positionUnavailable : e5 instanceof Error ? e5.message : void 0;
  }
};
e([y()], g.prototype, "geolocationOptions", null), e([y()], g.prototype, "goToLocationEnabled", null), e([y()], g.prototype, "goToOverride", null), e([y()], g.prototype, "graphic", null), e([y()], g.prototype, "icon", null), e([y()], g.prototype, "label", null), e([y(), e2("esri/widgets/Locate/t9n/Locate")], g.prototype, "messages", void 0), e([y(), e2("esri/t9n/common")], g.prototype, "messagesCommon", void 0), e([y()], g.prototype, "popupEnabled", null), e([y()], g.prototype, "rotationEnabled", null), e([y()], g.prototype, "scale", null), e([y()], g.prototype, "view", null), e([y({
  type: m
}), e4(["locate", "locate-error"])], g.prototype, "viewModel", void 0), g = e([a("esri.widgets.Locate")], g);
var u2 = g;
export {
  u2 as default
};
//# sourceMappingURL=Locate-SX3LHLEP.js.map
