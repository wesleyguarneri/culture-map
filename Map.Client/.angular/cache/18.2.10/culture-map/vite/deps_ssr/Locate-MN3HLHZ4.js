import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  b as b2
} from "./chunk-S3P5NDMT.js";
import {
  p
} from "./chunk-PW54Q6GB.js";
import {
  r as r2
} from "./chunk-SGTIVMVY.js";
import "./chunk-JPJAW3N6.js";
import {
  e as e4
} from "./chunk-5L5LGHM5.js";
import "./chunk-GJ3FZNZ2.js";
import "./chunk-YEDQK53F.js";
import {
  e as e3
} from "./chunk-FYGR4X6I.js";
import "./chunk-AOGKNBDG.js";
import "./chunk-FDI2X6GO.js";
import "./chunk-NVOJILW6.js";
import {
  k
} from "./chunk-KYPTWEOO.js";
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
import "./chunk-NXXQ35YM.js";
import "./chunk-ASCK5HJ5.js";
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
  n as n2
} from "./chunk-M5N6UHWJ.js";
import "./chunk-EBCBYN6Y.js";
import "./chunk-ODFKYX74.js";
import "./chunk-EGBDRLCX.js";
import "./chunk-THZPD5CT.js";
import {
  h
} from "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-7QV7DHWN.js";
import "./chunk-4L4Y34YK.js";
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import {
  f
} from "./chunk-AYL3HQHD.js";
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
import "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  i
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
  b
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import "./chunk-L4CMR4WM.js";
import "./chunk-7JIACICA.js";
import "./chunk-IE4UBD3F.js";
import "./chunk-IAO6HACY.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

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
      button: () => import("./calcite-button-LAMWLR56.js"),
      loader: () => import("./calcite-loader-XGS6NTUP.js"),
      tooltip: () => import("./calcite-tooltip-V7ITFPXY.js")
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
//# sourceMappingURL=Locate-MN3HLHZ4.js.map
