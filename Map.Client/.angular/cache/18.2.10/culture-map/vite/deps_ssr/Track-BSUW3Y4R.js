import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  b as b2
} from "./chunk-S3P5NDMT.js";
import "./chunk-PW54Q6GB.js";
import "./chunk-JPJAW3N6.js";
import {
  e as e4
} from "./chunk-5L5LGHM5.js";
import "./chunk-GJ3FZNZ2.js";
import {
  e as e3
} from "./chunk-FYGR4X6I.js";
import "./chunk-AOGKNBDG.js";
import "./chunk-FDI2X6GO.js";
import "./chunk-NVOJILW6.js";
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
import "./chunk-U3RHUXYK.js";
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
  b,
  d,
  k
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
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/Track/TrackViewModel.js
var n2 = 15e3;
var c = class extends b2 {
  constructor(t) {
    super(t), this._watchId = void 0, this._trackStartingTimeoutId = void 0, this._settingPosition = null, this._trackController = null, this.error = void 0, this.positionFilterFunction = null;
  }
  destroy() {
    this._stopTracking();
  }
  get state() {
    return this._geolocationUsable ? this.view && !this.view.ready ? "disabled" : this._settingPosition || void 0 !== this._trackStartingTimeoutId ? "waiting" : this.tracking ? "tracking" : null != this.error ? "error" : "ready" : "feature-unsupported";
  }
  get tracking() {
    return void 0 !== this._watchId;
  }
  start() {
    "disabled" !== this.state && "feature-unsupported" !== this.state && this._startTracking();
  }
  stop() {
    "disabled" !== this.state && "feature-unsupported" !== this.state && this._stopTracking();
  }
  _stopWatchingPosition() {
    void 0 !== this._watchId && (navigator.geolocation.clearWatch(this._watchId), this._watchId = void 0);
  }
  _stopTracking() {
    this._abortTrack(), this._clearWaitingTimer(), this._stopWatchingPosition(), this._clearGraphic();
  }
  _startTracking() {
    this._stopTracking();
    const t = k((t2) => __async(this, null, function* () {
      this._abortTrack();
      const i = new AbortController();
      this._trackController = i;
      const {
        timestamp: o,
        coords: s
      } = t2, e5 = {
        timestamp: o,
        coords: __spreadValues({}, s)
      };
      this.error = void 0;
      try {
        if ("function" == typeof this.positionFilterFunction && !this.positionFilterFunction.call(null, {
          position: e5
        })) return;
        if (yield this.updatePosition(t2, i), this._trackController !== i) return;
        this._clearWaitingTimer(), this._addGraphic(), this.emit("track", {
          position: t2
        }), this._trackController = null;
      } catch (a2) {
        if (b(a2)) return;
        throw this._trackController = null, this._emitError(a2), this._clearWaitingTimer(), a2;
      }
    }), 0);
    this._watchId = navigator.geolocation.watchPosition((o) => {
      this._settingPosition = t(o).catch(d);
    }, this._handleWatchPositionError.bind(this), this.geolocationOptions ?? void 0), this._trackStartingTimeoutId = setTimeout(() => {
      this._trackStartingTimeoutId = void 0;
    }, n2);
  }
  _handleWatchPositionError(t) {
    t.code === t.PERMISSION_DENIED && this._stopTracking(), this._emitError(t);
  }
  _abortTrack() {
    this._trackController?.abort(), this._trackController = null;
  }
  _clearWaitingTimer() {
    clearTimeout(this._trackStartingTimeoutId), this._trackStartingTimeoutId = void 0, this._settingPosition = null;
  }
  _emitError(t) {
    this.error = t, this.emit("track-error", {
      error: t
    });
  }
};
e([y()], c.prototype, "_watchId", void 0), e([y()], c.prototype, "_trackStartingTimeoutId", void 0), e([y()], c.prototype, "_settingPosition", void 0), e([y()], c.prototype, "error", void 0), e([y()], c.prototype, "positionFilterFunction", void 0), e([y({
  readOnly: true
})], c.prototype, "state", null), e([y({
  readOnly: true
})], c.prototype, "tracking", null), e([y()], c.prototype, "start", null), e([y()], c.prototype, "stop", null), c = e([a("esri.widgets.Track.TrackViewModel")], c);
var h = c;

// ../../../node_modules/@arcgis/core/widgets/Track.js
var p = {
  base: "esri-track"
};
var d2 = class extends B {
  constructor(e5, o) {
    super(e5, o), this.messages = null, this.viewModel = new h(), this._toggleTracking = () => {
      const e6 = this.viewModel;
      e6 && "feature-unsupported" !== e6.state && "disabled" !== e6.state && ("tracking" !== e6.state && "waiting" !== e6.state ? this.viewModel.start() : this.viewModel.stop());
    };
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-LAMWLR56.js"),
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
    return "compass-north-circle";
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
  get rotationEnabled() {
    return this.viewModel.rotationEnabled;
  }
  set rotationEnabled(e5) {
    this.viewModel.rotationEnabled = e5;
  }
  get scale() {
    return this.viewModel.scale;
  }
  set scale(e5) {
    this.viewModel.scale = e5;
  }
  get tracking() {
    return this.viewModel.tracking;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e5) {
    this.viewModel.view = e5;
  }
  start() {
    this.viewModel.start();
  }
  stop() {
    this.viewModel.stop();
  }
  render() {
    const {
      viewModel: e5,
      messages: o,
      icon: t
    } = this, i = e5?.state, r2 = "tracking" === i, n3 = this._localizeError(this.viewModel?.error), a2 = (r2 ? o?.stopTracking : o?.startTracking) ?? "", c2 = "feature-unsupported" === i, d3 = ("tracking" === i ? "pause" : void 0) ?? t;
    return n("div", {
      class: this.classes(p.base, e3.widget)
    }, !c2 && n("calcite-button", {
      class: e3.widgetButton,
      disabled: "disabled" === i,
      iconStart: d3,
      kind: "neutral",
      label: a2,
      loading: "waiting" === i,
      onclick: this._toggleTracking,
      title: a2
    }), n3 ? n("calcite-tooltip", {
      open: true,
      overlayPositioning: "fixed",
      referenceElement: this.container
    }, n3) : null);
  }
  _localizeError(e5) {
    return e5 instanceof GeolocationPositionError ? e5.code === GeolocationPositionError.PERMISSION_DENIED ? this.messages?.permissionError : e5.code === GeolocationPositionError.TIMEOUT ? this.messages?.timeoutError : this.messages?.positionUnavailable : e5 instanceof Error ? e5.message : void 0;
  }
};
e([y()], d2.prototype, "geolocationOptions", null), e([y()], d2.prototype, "goToLocationEnabled", null), e([y()], d2.prototype, "goToOverride", null), e([y()], d2.prototype, "graphic", null), e([y()], d2.prototype, "icon", null), e([y()], d2.prototype, "label", null), e([y(), e2("esri/widgets/Track/t9n/Track")], d2.prototype, "messages", void 0), e([y()], d2.prototype, "rotationEnabled", null), e([y()], d2.prototype, "scale", null), e([y({
  readOnly: true
})], d2.prototype, "tracking", null), e([y()], d2.prototype, "view", null), e([y({
  type: h
}), e4(["track", "track-error"])], d2.prototype, "viewModel", void 0), d2 = e([a("esri.widgets.Track")], d2);
var g = d2;
export {
  g as default
};
//# sourceMappingURL=Track-BSUW3Y4R.js.map
