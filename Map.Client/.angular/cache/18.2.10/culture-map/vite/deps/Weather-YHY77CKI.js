import {
  t
} from "./chunk-P3B4Y6UN.js";
import {
  a as a2,
  c,
  n as n3,
  n2 as n4,
  n3 as n5,
  s,
  u
} from "./chunk-MYKOM3G6.js";
import {
  e as e4
} from "./chunk-HR6RJVBL.js";
import {
  e as e3
} from "./chunk-HBMA4SRU.js";
import "./chunk-4ZZRP4MA.js";
import {
  B,
  e2,
  r
} from "./chunk-WYMXVOAT.js";
import {
  i,
  n as n2
} from "./chunk-K7TO5IIO.js";
import "./chunk-A4VVDRCH.js";
import {
  f
} from "./chunk-CQDYITZC.js";
import "./chunk-5I6J67HP.js";
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import {
  A,
  d
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
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/Weather/css.js
var e5 = "esri-weather";
var r2 = {
  base: e5,
  content: `${e5}__content`,
  hasError: `${e5}__content--has-error`,
  selector: `${e5}__selector`,
  options: `${e5}__options`,
  optionsHidden: `${e5}__options--hidden`,
  error: `${e5}__error`,
  warning: `${e5}__warning`
};
var o = {
  base: `${`${e5}__labeled-slider`}`
};

// ../../../node_modules/@arcgis/core/widgets/Weather/enums.js
var e6;
var o2;
!function(e7) {
  e7.Disabled = "disabled", e7.Ready = "ready", e7.Error = "error";
}(e6 || (e6 = {})), function(e7) {
  e7.NotVisible = "not-visible", e7.LocalScene = "local-scene", e7.NoAtmosphere = "no-atmosphere", e7.UnsupportedView = "unsupported-view";
}(o2 || (o2 = {}));

// ../../../node_modules/@arcgis/core/widgets/Weather/LabeledSlider.js
var c2 = class extends B {
  constructor(e7) {
    super(e7), this._onChange = (e8) => {
      this.onChange(e8.target.value);
    };
  }
  render() {
    const {
      label: e7
    } = this;
    return n2("div", {
      class: o.base
    }, n2("calcite-label", {
      scale: "s"
    }, e7, n2("calcite-slider", {
      "aria-label": e7,
      disabled: this.disabled,
      max: 1,
      min: 0,
      step: 0.01,
      value: this.value,
      onCalciteSliderChange: this._onChange,
      onCalciteSliderInput: this._onChange
    })));
  }
  loadDependencies() {
    return r({
      label: () => import("./calcite-label-NSQ5QQOX.js"),
      slider: () => import("./calcite-slider-RC35Z43N.js")
    });
  }
};
e([y()], c2.prototype, "value", void 0), e([y()], c2.prototype, "onChange", void 0), e([y()], c2.prototype, "disabled", void 0), c2 = e([a("esri.widgets.Weather.LabeledSlider")], c2);

// ../../../node_modules/@arcgis/core/widgets/Weather/VisibleElements.js
var t2 = class extends S {
  constructor(o3) {
    super(o3), this.header = true;
  }
};
e([y({
  type: Boolean,
  nonNullable: true
})], t2.prototype, "header", void 0), t2 = e([a("esri.widgets.Weather.VisibleElements")], t2);
var c3 = t2;

// ../../../node_modules/@arcgis/core/widgets/Weather/WeatherViewModel.js
var c4 = class extends S {
  constructor(e7) {
    super(e7), this.view = null, this._weatherByType = {
      sunny: new n5(),
      cloudy: new u(),
      rainy: new c(),
      snowy: new n4(),
      foggy: new n3()
    }, this._settingWeather = false;
  }
  initialize() {
    this.addHandles([d(() => this.current, (e7) => {
      this._settingWeather || null == e7 || (this._weatherByType = __spreadProps(__spreadValues({}, this._weatherByType), {
        [e7.type]: e7
      }));
    }, A)]);
  }
  get state() {
    const e7 = this.view;
    return null != e7 && e7.ready ? null != this.error ? this.error === o2.NotVisible ? e6.Ready : e6.Error : e6.Ready : e6.Disabled;
  }
  get weatherByType() {
    return this._weatherByType;
  }
  get error() {
    const e7 = this.view;
    return null != e7 && e7.ready ? "3d" !== e7.type ? o2.UnsupportedView : "local" === e7.viewingMode ? o2.LocalScene : e7.environment.atmosphereEnabled ? e7.environmentManager.weatherVisible ? null : o2.NotVisible : o2.NoAtmosphere : null;
  }
  get current() {
    return this._environment?.weather ?? this._weatherByType.sunny;
  }
  set current(e7) {
    const t3 = this._environment;
    t3 && (t3.weather = e7);
  }
  get _environment() {
    const e7 = this.view;
    return null != e7 && "3d" === e7.type ? e7.environment : null;
  }
  setWeatherByType(e7) {
    if (!s(e7, n.getLogger(this))) return;
    const t3 = this._environment;
    null != t3 && (this._settingWeather = true, t3.weather = this._weatherByType[e7], this._settingWeather = false);
  }
  setSnowCoverEnabled(e7) {
    const t3 = this.current;
    "snowCover" in t3 && (t3.snowCover = e7 ? "enabled" : "disabled");
  }
};
e([y()], c4.prototype, "view", void 0), e([y()], c4.prototype, "state", null), e([y()], c4.prototype, "_weatherByType", void 0), e([y()], c4.prototype, "weatherByType", null), e([y()], c4.prototype, "error", null), e([y()], c4.prototype, "current", null), e([y()], c4.prototype, "_environment", null), c4 = e([a("esri.widgets.Weather.WeatherViewModel")], c4);
var d2 = c4;

// ../../../node_modules/@arcgis/core/widgets/Weather.js
var w = {
  sunny: "brightness",
  cloudy: "partly-cloudy",
  rainy: "rain",
  snowy: "snow",
  foggy: "fog"
};
var C = class extends B {
  constructor(e7) {
    super(e7), this.viewModel = new d2(), this.headingLevel = 4, this.visibleElements = new c3(), this._renderWeatherTypeButton = (e8) => {
      const o3 = this.viewModel, t3 = this.messages[e8].label, r3 = o3.state === e6.Disabled, s2 = !r3 && o3.current.type === e8;
      return n2("calcite-button", {
        appearance: s2 ? "solid" : "outline",
        "aria-checked": s2 ? "true" : "false",
        disabled: r3,
        iconStart: w[e8],
        key: `${e8}-type-button`,
        kind: s2 ? "brand" : "neutral",
        label: t3,
        onclick: () => {
          s2 || o3.setWeatherByType(e8);
        },
        scale: "l",
        title: t3
      });
    }, this._memoizedCallbacks = t((e8) => ({
      onCloudCoverChange: (o3) => {
        "cloudCover" in e8 && (e8.cloudCover = o3);
      },
      onPrecipitationChange: (o3) => {
        "precipitation" in e8 && (e8.precipitation = o3);
      },
      onFogStrengthChange: (o3) => {
        "fogStrength" in e8 && (e8.fogStrength = o3);
      },
      onSnowCoverChange: (e9) => {
        this.viewModel.setSnowCoverEnabled(e9.target.checked);
      }
    }));
  }
  render() {
    const e7 = this.viewModel.state === e6.Disabled;
    return n2("div", {
      "aria-label": this.messages.widgetLabelAccessible,
      class: this.classes(r2.base, e3.widget, e7 && e3.widgetDisabled),
      role: "region"
    }, this._renderContent());
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-TT4KT5XH.js"),
      checkbox: () => import("./calcite-checkbox-ZPWECFBW.js"),
      icon: () => import("./calcite-icon-FE3MORNT.js"),
      label: () => import("./calcite-label-NSQ5QQOX.js")
    });
  }
  get view() {
    return this.viewModel?.view;
  }
  set view(e7) {
    this.viewModel && (this.viewModel.view = e7);
  }
  get icon() {
    return "partly-cloudy";
  }
  set icon(e7) {
    this._overrideIfSome("icon", e7);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e7) {
    this._overrideIfSome("label", e7);
  }
  get _errorMessage() {
    const e7 = this.messages.error;
    switch (this.viewModel.error) {
      case o2.LocalScene:
        return e7.localScene;
      case o2.NoAtmosphere:
        return e7.noAtmosphere;
      case o2.UnsupportedView:
        return e7.unsupported;
      default:
        return null;
    }
  }
  get _warningMessage() {
    if (this.viewModel.error === o2.NotVisible) {
      return null != this.view && "3d" === this.view?.type && this.view.environment.atmosphereEnabled ? this.messages.error.notVisible : null;
    }
    return null;
  }
  _renderContent() {
    const {
      headingLevel: e7,
      messages: o3,
      viewModel: t3,
      visibleElements: r3
    } = this, n6 = this._warningMessage, i2 = t3.current, a3 = t3.state === e6.Error;
    return n2(i, null, r3.header ? n2(e4, {
      level: e7
    }, o3.widgetLabel) : null, a3 ? n2("div", {
      class: r2.error,
      key: "error"
    }, this._errorMessage) : null, n2("div", {
      class: f({
        [r2.content]: true,
        [r2.hasError]: a3
      }),
      key: "content"
    }, n2("div", {
      "aria-label": o3.weatherType,
      class: r2.selector,
      key: "type-selector",
      role: "radiogroup"
    }, a2.map(this._renderWeatherTypeButton)), Object.values(t3.weatherByType).map((e8) => n2("div", {
      class: f({
        [r2.options]: true,
        [r2.optionsHidden]: e8.type !== i2?.type
      }),
      key: "options-container"
    }, this._renderOptions(e8))), null != n6 ? this._renderWarning(n6) : null));
  }
  _renderOptions(e7) {
    const {
      viewModel: o3,
      messages: t3
    } = this, r3 = o3.state === e6.Disabled, s2 = this._memoizedCallbacks(e7);
    switch (e7.type) {
      case "sunny":
        return n2(c2, {
          disabled: r3,
          key: "sunny-cover",
          label: t3.sunny.cloudCover,
          value: e7.cloudCover,
          onChange: s2.onCloudCoverChange
        });
      case "cloudy":
        return n2(c2, {
          disabled: r3,
          key: "cloudy-cover",
          label: t3.cloudy.cloudCover,
          value: e7.cloudCover,
          onChange: s2.onCloudCoverChange
        });
      case "rainy":
        return n2(i, null, n2(c2, {
          disabled: r3,
          key: "rainy-cover",
          label: t3.rainy.cloudCover,
          value: e7.cloudCover,
          onChange: s2.onCloudCoverChange
        }), n2(c2, {
          disabled: r3,
          key: "rainy-precipitation",
          label: t3.rainy.precipitation,
          value: e7.precipitation,
          onChange: s2.onPrecipitationChange
        }));
      case "snowy":
        return n2(i, null, n2(c2, {
          disabled: r3,
          key: "snowy-cloud-cover",
          label: t3.snowy.cloudCover,
          value: e7.cloudCover,
          onChange: s2.onCloudCoverChange
        }), n2(c2, {
          disabled: r3,
          key: "snowy-precipitation",
          label: t3.snowy.precipitation,
          value: e7.precipitation,
          onChange: s2.onPrecipitationChange
        }), n2("calcite-label", {
          key: "snow-cover",
          layout: "inline",
          scale: "s",
          title: t3.snowy.snowCoverTooltip
        }, n2("calcite-checkbox", {
          checked: "enabled" === e7.snowCover,
          disabled: r3,
          onCalciteCheckboxChange: s2.onSnowCoverChange
        }), t3.snowy.snowCover));
      case "foggy":
        return n2(c2, {
          disabled: r3,
          key: "foggy-cover",
          label: t3.foggy.fogStrength,
          value: e7.fogStrength,
          onChange: s2.onFogStrengthChange
        });
    }
  }
  _renderWarning(e7) {
    return n2("div", {
      class: r2.warning,
      key: "warning"
    }, n2("calcite-icon", {
      icon: "exclamation-mark-triangle",
      scale: "s"
    }), e7);
  }
};
e([y()], C.prototype, "viewModel", void 0), e([y()], C.prototype, "view", null), e([y()], C.prototype, "headingLevel", void 0), e([y({
  type: c3,
  nonNullable: true
})], C.prototype, "visibleElements", void 0), e([y()], C.prototype, "icon", null), e([y()], C.prototype, "label", null), e([y(), e2("esri/widgets/Weather/t9n/Weather")], C.prototype, "messages", void 0), e([y()], C.prototype, "_errorMessage", null), e([y()], C.prototype, "_warningMessage", null), C = e([a("esri.widgets.Weather")], C);
var f2 = C;
export {
  f2 as default
};
//# sourceMappingURL=Weather-YHY77CKI.js.map
