import {
  b as b2
} from "./chunk-I3EAMXIH.js";
import "./chunk-S6XQ5WYN.js";
import "./chunk-YKOY3XWH.js";
import {
  e as e4
} from "./chunk-ZDGJDLVE.js";
import "./chunk-IM5W3NWZ.js";
import {
  e as e3
} from "./chunk-HBMA4SRU.js";
import "./chunk-F35MWZH7.js";
import "./chunk-YA5CTHMT.js";
import "./chunk-HD65DNIO.js";
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
  b,
  d,
  k
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

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
      button: () => import("./calcite-button-TT4KT5XH.js"),
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
//# sourceMappingURL=Track-6T4Y4H2L.js.map
