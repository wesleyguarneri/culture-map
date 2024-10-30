import {
  n as n5
} from "./chunk-S47MZ7BS.js";
import {
  d as d3,
  f as f2,
  m as m2,
  r as r2,
  u as u3
} from "./chunk-CQII6DAY.js";
import {
  A as A3
} from "./chunk-VGYXQASE.js";
import {
  D
} from "./chunk-JF6YDQ2P.js";
import {
  t
} from "./chunk-JSBFNTSJ.js";
import {
  a as a3
} from "./chunk-IVKE5IFG.js";
import {
  e as e5
} from "./chunk-DKRGLYVY.js";
import {
  e as e7
} from "./chunk-HR6RJVBL.js";
import {
  e as e6
} from "./chunk-HBMA4SRU.js";
import "./chunk-FHW2TG7X.js";
import "./chunk-VS26W5Y5.js";
import "./chunk-SZWWBMQN.js";
import "./chunk-KKD7A2GN.js";
import "./chunk-4OGGMTIH.js";
import "./chunk-DY7FJHTG.js";
import "./chunk-BQZBOYBD.js";
import {
  n as n4
} from "./chunk-6A7CWJED.js";
import {
  i as i2,
  m
} from "./chunk-OKJHJ3CY.js";
import "./chunk-XTVPEVHA.js";
import {
  u as u2
} from "./chunk-K226GFDN.js";
import {
  c as c2,
  i as i3,
  s as s3
} from "./chunk-7ZJ6P7J7.js";
import "./chunk-FPFZQCEQ.js";
import {
  B,
  e2 as e4,
  r
} from "./chunk-WYMXVOAT.js";
import {
  n as n2
} from "./chunk-K7TO5IIO.js";
import "./chunk-A4VVDRCH.js";
import {
  f
} from "./chunk-CQDYITZC.js";
import {
  n
} from "./chunk-5I6J67HP.js";
import {
  l as l2,
  s as s2
} from "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import {
  j
} from "./chunk-CVB43GGP.js";
import {
  Duration
} from "./chunk-LLDOZWVV.js";
import "./chunk-EDSMXTFO.js";
import {
  a as a2,
  c
} from "./chunk-MNLT652N.js";
import "./chunk-7RMVJCDW.js";
import "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import {
  i
} from "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import {
  n as n3
} from "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import {
  A as A2,
  d as d2
} from "./chunk-6WHTZNUH.js";
import {
  V
} from "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import {
  d
} from "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
import {
  e as e3
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
  A,
  s
} from "./chunk-HJY2YILU.js";
import {
  e as e2
} from "./chunk-7DA6A5LD.js";
import {
  e,
  l,
  u
} from "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import {
  O
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/ShadowCast/css.js
var i4 = "esri-shadow-cast";
var e8 = {
  base: i4,
  timeRange: `${i4}__time-range`,
  timeRangeIndicator: `${i4}__time-range__indicator`,
  datePickerContainer: `${i4}__date-picker-container`,
  datePicker: `${i4}__date-picker`,
  visualization: `${i4}__visualization`,
  visualizationSelect: `${i4}__visualization__select`,
  visualizationConfigHidden: `${i4}__visualization__config--hidden`
};
var a4 = `${i4}__label`;
var _ = `${i4}__threshold-config`;
var t2 = {
  base: _,
  valueLabel: `${_}__value-label`
};
var n6 = `${i4}__duration-config`;
var o = {
  base: n6,
  radioGroup: `${n6}__radio-group`
};
var r3 = `${i4}__discrete-config`;
var c3 = {
  base: r3
};
var s4 = `${i4}__tooltip`;
var l3 = {
  base: s4,
  content: `${s4}__content`
};

// ../../../node_modules/@arcgis/core/widgets/ShadowCast/ShadowCastState.js
var a5;
!function(a6) {
  a6.Disabled = "disabled", a6.Ready = "ready";
}(a5 || (a5 = {}));

// ../../../node_modules/@arcgis/core/widgets/ShadowCast/DiscreteOptions.js
var p = class extends S {
  constructor() {
    super({}), this.color = new u2([50, 50, 50, 0.7]), this.intervalOptions = new V([m(15, "minutes", "milliseconds"), m(30, "minutes", "milliseconds"), m(1, "hours", "milliseconds"), m(2, "hours", "milliseconds"), m(3, "hours", "milliseconds")]), this.interval = this.intervalOptions.at(0);
  }
  set intervalOptions(o3) {
    this._set("intervalOptions", n4(o3, this._get("intervalOptions")));
  }
};
e3([y({
  type: u2
})], p.prototype, "color", void 0), e3([y()], p.prototype, "interval", void 0), e3([y({
  type: V
})], p.prototype, "intervalOptions", null), p = e3([a("esri.widgets.ShadowCast.DiscreteOptions")], p);
var n7 = p;

// ../../../node_modules/@arcgis/core/widgets/ShadowCast/DurationMode.js
var o2;
!function(o3) {
  o3.Continuous = "continuous", o3.Hourly = "hourly";
}(o2 || (o2 = {}));

// ../../../node_modules/@arcgis/core/widgets/ShadowCast/DurationOptions.js
var c4 = class extends S {
  constructor() {
    super(...arguments), this.color = new u2([0, 0, 255, 0.7]), this.mode = o2.Continuous;
  }
};
e3([y({
  type: u2
})], c4.prototype, "color", void 0), e3([y()], c4.prototype, "mode", void 0), c4 = e3([a("esri.widgets.ShadowCast.DurationOptions")], c4);
var i5 = c4;

// ../../../node_modules/@arcgis/core/widgets/ShadowCast/ShadowTooltipViewModel.js
var l4;
!function(t3) {
  t3.PointerMove = "pointer-move", t3.Main = "main";
}(l4 || (l4 = {}));
var m3 = 300;
var u4 = class extends S {
  constructor(t3) {
    super(t3), this._screenPoint = null, this._accumulatedShadowTime = null, this._shadowTimeTask = null, this._updateAccumulatedShadowTime = (t4, e12) => {
      this._shadowTimeTask = e(this._shadowTimeTask), this._shadowTimeTask = d((o3) => __async(this, null, function* () {
        const {
          results: i7,
          ground: s6
        } = yield t4.hitTest(e12);
        if (0 === i7.length && !s6.mapPoint) return void (this._accumulatedShadowTime = null);
        const a6 = yield this.getDuration(e12, o3);
        this._accumulatedShadowTime = a6;
      }));
    }, this._throttledUpdateAccumulatedShadowTime = e5(this._updateAccumulatedShadowTime, m3);
  }
  initialize() {
    this.addHandles(d2(() => ({
      enabled: this.enabled,
      view: this.view
    }), ({
      enabled: t3,
      view: e12
    }) => {
      t3 && null != e12 ? this._startTracking(e12) : this._stopTracking();
    }, A2));
  }
  get screenPoint() {
    return this.enabled ? this._screenPoint : null;
  }
  get accumulatedShadowTime() {
    return this.enabled ? this._accumulatedShadowTime : null;
  }
  get testData() {
  }
  _startTracking(t3) {
    if (this.hasHandles(l4.Main)) return;
    const e12 = () => {
      this.hasHandles(l4.PointerMove) || this.addHandles(t3.on("pointer-move", (e13) => {
        const o4 = c2(e13.x, e13.y);
        this._screenPoint = o4, this._throttledUpdateAccumulatedShadowTime(t3, o4);
      }), l4.PointerMove);
    }, o3 = () => {
      this.removeHandles(l4.PointerMove), this._screenPoint = null, this._accumulatedShadowTime = null;
    };
    this.addHandles([this._throttledUpdateAccumulatedShadowTime, t3.on("pointer-enter", e12), t3.on("pointer-leave", o3), t3.on("pointer-down", o3), t3.on("pointer-drag", o3), t3.on("pointer-up", e12), t3.on("click", (e13) => {
      const o4 = c2(e13.x, e13.y);
      this._screenPoint = o4, this._updateAccumulatedShadowTime(t3, o4);
    }), e2(() => {
      this._shadowTimeTask = e(this._shadowTimeTask);
    })], l4.Main), e12();
  }
  _stopTracking() {
    this.removeHandles(l4.Main);
  }
};
e3([y()], u4.prototype, "getDuration", void 0), e3([y()], u4.prototype, "view", void 0), e3([y()], u4.prototype, "enabled", void 0), e3([y()], u4.prototype, "screenPoint", null), e3([y()], u4.prototype, "accumulatedShadowTime", null), e3([y()], u4.prototype, "_screenPoint", void 0), e3([y()], u4.prototype, "_accumulatedShadowTime", void 0), e3([y()], u4.prototype, "_shadowTimeTask", void 0), u4 = e3([a("esri.widgets.ShadowCast.ShadowTooltipViewModel")], u4);

// ../../../node_modules/@arcgis/core/widgets/ShadowCast/ShadowVisualizationType.js
var r4;
!function(r6) {
  r6.Threshold = "threshold", r6.Duration = "duration", r6.Discrete = "discrete";
}(r4 || (r4 = {}));
var e9 = [r4.Threshold, r4.Duration, r4.Discrete];

// ../../../node_modules/@arcgis/core/widgets/ShadowCast/ThresholdOptions.js
var p2 = class extends S {
  constructor() {
    super(...arguments), this.color = new u2([255, 0, 0, 0.7]), this.value = m(4, "hours", "milliseconds"), this.minValue = 0, this.maxValue = m(8, "hours", "milliseconds");
  }
};
e3([y({
  type: u2
})], p2.prototype, "color", void 0), e3([y()], p2.prototype, "value", void 0), e3([y()], p2.prototype, "minValue", void 0), e3([y()], p2.prototype, "maxValue", void 0), p2 = e3([a("esri.widgets.ShadowCast.ThresholdOptions")], p2);
var c5 = p2;

// ../../../node_modules/@arcgis/core/widgets/ShadowCast/ShadowCastViewModel.js
var C = [];
var V2 = n3();
var E = [];
var R = 255;
var S2 = m(1, "hours", "milliseconds");
var A4 = 500;
var x = class extends S {
  constructor(e12) {
    super(e12), this.view = null, this.tooltip = new u4({
      getDuration: (e13, t3) => this.getDuration(e13, t3)
    }), this.startTimeOfDay = m(10, "hours", "milliseconds"), this.endTimeOfDay = m(16, "hours", "milliseconds"), this.visualizationType = r4.Threshold, this.thresholdOptions = new c5(), this.durationOptions = new i5(), this.discreteOptions = new n7(), this._running = true, this._stopPreviewingTask = null, this._forcePreview = false, this._autoRestoreForcePreviewEnabled = true, this._utcOffset = null, this.date = /* @__PURE__ */ new Date();
  }
  initialize() {
    this.addHandles([d2(() => ({
      view: this.view,
      tooltipEnabled: this._tooltipEnabled
    }), ({
      view: e12,
      tooltipEnabled: t3
    }) => {
      this.tooltip.view = e12, this.tooltip.enabled = t3;
    }, A2), d2(() => this._forcePreviewDependencies, () => {
      e(this._stopPreviewingTask), this._forcePreview = true, this._autoRestoreForcePreviewEnabled && (this._stopPreviewingTask = d((e12) => __async(this, null, function* () {
        yield A(A4, e12), s(e12), this._forcePreview = false;
      })));
    }, A2), d2(() => ({
      renderer: this.renderer,
      parameters: this._visualizationParameters
    }), (e12) => N(e12.renderer, e12.parameters), A2), d2(() => ({
      renderer: this.renderer,
      parameters: {
        lightDirections: this._lightDirections
      }
    }), (e12) => N(e12.renderer, e12.parameters), A2), d2(() => ({
      renderer: this.renderer,
      parameters: {
        enabled: this._running
      }
    }), (e12) => N(e12.renderer, e12.parameters), A2), d2(() => ({
      renderer: this.renderer,
      parameters: {
        previewing: this._previewing
      }
    }), (e12) => N(e12.renderer, e12.parameters), A2)]);
  }
  destroy() {
    this.stop(), N(this.renderer, {
      enabled: false
    }), u(this.tooltip);
  }
  get state() {
    return null != this.view && this.view.ready && null != this._referencePosition ? a5.Ready : a5.Disabled;
  }
  set date(e12) {
    const t3 = new Date(e12);
    t3.setHours(0, 0, 0, 0), this._set("date", t3);
  }
  get utcOffset() {
    return this._utcOffset ?? this._utcOffsetAuto;
  }
  set utcOffset(e12) {
    this._utcOffset = e12;
  }
  get testData() {
  }
  get _previewing() {
    const {
      view: e12
    } = this;
    return null == e12?.allLayerViews || this._forcePreview || !e12.stationary || e12.allLayerViews.some((e13) => M(e13) && e13.updating);
  }
  get _utcOffsetAuto() {
    const e12 = this._referencePosition;
    return null != e12 ? a3(e12[0], false) : 0;
  }
  get _dateUTCOffset() {
    let e12 = this.date;
    return e12 = i2(e12, -e12.getTimezoneOffset(), "minutes"), e12 = i2(e12, -this.utcOffset, "hours"), e12;
  }
  get _startDateTimeUTC() {
    return i2(this._dateUTCOffset, this.startTimeOfDay);
  }
  get _endDateTimeUTC() {
    return i2(this._dateUTCOffset, this.endTimeOfDay);
  }
  get _referencePosition() {
    return this.view?.environmentManager?.referencePositionGeographic;
  }
  get _interval() {
    const e12 = this._duration > 0 ? Math.floor(this._duration / R) : R, t3 = this.discreteOptions.interval;
    switch (this.visualizationType) {
      case r4.Threshold:
      case r4.Duration:
        return e12;
      case r4.Discrete:
        return t3 > 0 ? t3 : e12;
    }
  }
  get _sampleCount() {
    return this._lightDirections.length;
  }
  get _duration() {
    return this.endTimeOfDay - this.startTimeOfDay;
  }
  get _lightDirections() {
    const {
      view: e12
    } = this;
    if (null == e12) return C;
    const t3 = "global" === e12.viewingMode ? V2 : this._referencePosition;
    if (null == t3) return C;
    const i7 = this._interval, r6 = D(this._startDateTimeUTC, this._endDateTimeUTC, i7, t3, e12.state.viewingMode), s6 = r6.length;
    E.length = 0;
    const o3 = n5(0, s6, E), n9 = new Array(s6);
    for (let a6 = 0; a6 < s6; ++a6) n9[a6] = r6[o3[a6]];
    return n9;
  }
  get _tooltipEnabled() {
    return this.state === a5.Ready && this.visualizationType !== r4.Discrete && this._running && !this._previewing;
  }
  get _visualizationParameters() {
    if (!this._running) return null;
    switch (this.visualizationType) {
      case r4.Threshold:
        return this._thresholdVisualizationParameters;
      case r4.Duration:
        return this._durationVisualizationParameters;
      case r4.Discrete:
        return this._discreteVisualizationParameters;
    }
  }
  get _thresholdVisualizationParameters() {
    const {
      value: e12,
      color: i7
    } = this.thresholdOptions, r6 = this._duration;
    return {
      visualization: t.Threshold,
      color: u2.toUnitRGBA(i7),
      threshold: r6 > 0 ? e12 / this._duration : 0
    };
  }
  get _durationVisualizationParameters() {
    const {
      color: e12,
      mode: i7
    } = this.durationOptions, r6 = this._duration, s6 = r6 > 0 && i7 === o2.Hourly ? S2 / r6 : 0;
    return {
      color: u2.toUnitRGBA(e12),
      visualization: t.Gradient,
      bandsEnabled: s6 > 0,
      bandSize: s6
    };
  }
  get _discreteVisualizationParameters() {
    return {
      color: u2.toUnitRGBA(this.discreteOptions.color),
      visualization: t.Gradient,
      bandsEnabled: false,
      bandSize: 0
    };
  }
  get _forcePreviewDependencies() {
    const {
      view: e12
    } = this;
    if (null == e12) return null;
    const t3 = e12.slicePlane, i7 = e12.allLayerViews.toArray().filter(M), s6 = i7.map((e13) => e13.layer).filter(O), o3 = i7.map((e13) => e13.visible), n9 = s6.map((e13) => e13.visible), a6 = s6.map((e13) => e13.opacity), l6 = s6.filter((e13) => "definitionExpression" in e13).map((e13) => e13.definitionExpression), u7 = i7.filter((e13) => "filter" in e13).map((e13) => e13.filter);
    return {
      slicePlane: t3,
      startDateUTC: this._startDateTimeUTC,
      endDateUTC: this._endDateTimeUTC,
      layerViewVisibilities: o3,
      layerVisibilities: n9,
      layerOpacities: a6,
      filters: u7,
      definitionExpressions: l6
    };
  }
  get renderer() {
    const {
      view: e12
    } = this;
    if (null == e12) return null;
    const t3 = e12._stage;
    return null == t3 ? null : t3.renderer;
  }
  start() {
    this.setRunning(true);
  }
  stop() {
    this.setRunning(false);
  }
  setRunning(e12) {
    this._running = e12;
  }
  getDuration(e12, t3) {
    return __async(this, null, function* () {
      const {
        view: i7,
        renderer: r6
      } = this;
      if (null == i7 || null == r6) return 0;
      const s6 = i7.state.camera.screenToRender(i3(e12.x, e12.y), s3()), o3 = r6.readAccumulatedShadow(s6), n9 = this._sampleCount;
      if (0 === n9) return 0;
      return o3 * n9 * (this._duration / n9);
    });
  }
};
function N(e12, t3) {
  null != e12 && null != t3 && e12.setParameters({
    shadowCast: t3
  });
}
function M(e12) {
  if (e12.suspended) return false;
  switch (e12.type) {
    case "building-scene-3d":
    case "csv-3d":
    case "elevation-3d":
    case "feature-3d":
    case "geojson-3d":
    case "graphics-3d":
    case "integrated-mesh-3d":
    case "integrated-mesh-3dtiles":
    case "ogc-feature-3d":
    case "route-3d":
    case "scene-layer-3d":
    case "scene-layer-graphics-3d":
    case "stream-3d":
    case "wms-3d":
      return true;
    case "base-dynamic-3d":
    case "catalog-3d":
    case "catalog-footprint-3d":
    case "catalog-dynamic-group-3d":
    case "dimension-3d":
    case "imagery-3d":
    case "imagery-tile-3d":
    case "line-of-sight-3d":
    case "map-image-3d":
    case "point-cloud-3d":
    case "tile-3d":
    case "vector-tile-3d":
    case "voxel-3d":
    case "wfs-3d":
    case "wmts-3d":
    case "media-3d":
    default:
      return false;
    case "group":
      return e12.layerViews.toArray().some((e13) => M(e13));
  }
}
e3([y()], x.prototype, "state", null), e3([y()], x.prototype, "view", void 0), e3([y()], x.prototype, "tooltip", void 0), e3([y({
  nonNullable: true
})], x.prototype, "date", null), e3([y({
  nonNullable: true
})], x.prototype, "utcOffset", null), e3([y({
  nonNullable: true
})], x.prototype, "startTimeOfDay", void 0), e3([y({
  nonNullable: true
})], x.prototype, "endTimeOfDay", void 0), e3([y({
  nonNullable: true
})], x.prototype, "visualizationType", void 0), e3([y({
  type: c5,
  nonNullable: true
})], x.prototype, "thresholdOptions", void 0), e3([y({
  type: i5,
  nonNullable: true
})], x.prototype, "durationOptions", void 0), e3([y({
  type: n7,
  nonNullable: true
})], x.prototype, "discreteOptions", void 0), e3([y()], x.prototype, "_running", void 0), e3([y()], x.prototype, "_stopPreviewingTask", void 0), e3([y()], x.prototype, "_forcePreview", void 0), e3([y()], x.prototype, "_autoRestoreForcePreviewEnabled", void 0), e3([y()], x.prototype, "_previewing", null), e3([y()], x.prototype, "_utcOffset", void 0), e3([y()], x.prototype, "_utcOffsetAuto", null), e3([y()], x.prototype, "_dateUTCOffset", null), e3([y()], x.prototype, "_startDateTimeUTC", null), e3([y()], x.prototype, "_endDateTimeUTC", null), e3([y()], x.prototype, "_referencePosition", null), e3([y()], x.prototype, "_interval", null), e3([y()], x.prototype, "_sampleCount", null), e3([y()], x.prototype, "_duration", null), e3([y()], x.prototype, "_lightDirections", null), e3([y()], x.prototype, "_tooltipEnabled", null), e3([y()], x.prototype, "_visualizationParameters", null), e3([y()], x.prototype, "_thresholdVisualizationParameters", null), e3([y()], x.prototype, "_durationVisualizationParameters", null), e3([y()], x.prototype, "_discreteVisualizationParameters", null), e3([y()], x.prototype, "_forcePreviewDependencies", null), e3([y()], x.prototype, "renderer", null), x = e3([a("esri.widgets.ShadowCast.ShadowCastViewModel")], x);
var G = x;

// ../../../node_modules/@arcgis/core/widgets/ShadowCast/ShadowCastVisibleElements.js
var s5 = class extends S {
  constructor() {
    super(...arguments), this.timeRangeSlider = true, this.timezone = true, this.datePicker = true, this.visualizationOptions = true, this.colorPicker = true, this.tooltip = true;
  }
};
e3([y()], s5.prototype, "timeRangeSlider", void 0), e3([y()], s5.prototype, "timezone", void 0), e3([y()], s5.prototype, "datePicker", void 0), e3([y()], s5.prototype, "visualizationOptions", void 0), e3([y()], s5.prototype, "colorPicker", void 0), e3([y()], s5.prototype, "tooltip", void 0), s5 = e3([a("esri.widgets.ShadowCast.ShadowCastVisibleElements")], s5);
var i6 = s5;

// ../../../node_modules/@arcgis/core/intl/duration.js
function n8(l6, r6 = "milliseconds", n9 = {}) {
  const i7 = {
    locale: e10(),
    numberingSystem: "latn"
  };
  let s6;
  return s6 = l6 ? Duration.fromMillis(m(l6, r6, "milliseconds"), i7).rescale() : Duration.fromObject({
    seconds: 0
  }, i7), s6.toHuman(__spreadValues({
    listStyle: "narrow",
    unitDisplay: "long"
  }, n9));
}
function e10() {
  return "bs" === a2() ? "hr" : c();
}

// ../../../node_modules/@arcgis/core/widgets/ShadowCast/components/Label.js
function r5(r6, e12) {
  const _a = r6, {
    for: a6,
    label: c7,
    tabIndex: l6
  } = _a, i7 = __objRest(_a, [
    "for",
    "label",
    "tabIndex"
  ]);
  return n2("div", __spreadValues({
    class: f(a4, i7?.class),
    key: a6
  }, i7), n2("calcite-label", {
    for: a6,
    scale: "s",
    tabIndex: l6
  }, c7), e12);
}

// ../../../node_modules/@arcgis/core/widgets/support/ColorPicker.js
var c6 = "esri-color-picker";
var d4 = {
  base: c6,
  backgroundPattern: `${c6}__bg-pattern`,
  toggleButton: `${c6}__toggle-button`,
  popover: `${c6}__popover`
};
var m4 = class extends B {
  constructor(e12, t3) {
    super(e12, t3), this.value = new u2(), this.alphaEnabled = true, this._containerElement = null, this._button = null, this._open = false, this._onColorInput = (e13) => {
      const t4 = e13.target.value, r6 = "string" == typeof t4 ? new u2(t4) : new u2();
      this.value = r6, this.onChange?.(r6);
    };
  }
  initialize() {
    this.addHandles(d2(() => ({
      container: this._containerElement,
      value: this.value
    }), ({
      container: e12,
      value: o3
    }) => {
      e12?.style.setProperty("--esri-color-picker-value", o3.toCss(true));
    }, A2));
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-TT4KT5XH.js"),
      "color-picker": () => import("./calcite-color-picker-LHLFSKOM.js"),
      popover: () => import("./calcite-popover-24Y2F2AH.js")
    });
  }
  render() {
    const e12 = this._messages, o3 = this._open ? e12.close : e12.open;
    return n2("div", {
      afterCreate: (e13) => this._containerElement = e13,
      class: this.classes(d4.base, this.class)
    }, n2("div", {
      class: d4.backgroundPattern,
      key: "background-pattern"
    }), n2("calcite-button", {
      afterCreate: (e13) => this._button = e13,
      appearance: "transparent",
      class: d4.toggleButton,
      key: "popover-trigger",
      kind: "neutral",
      label: o3,
      scale: "s",
      tabIndex: -1,
      title: o3
    }), n2("calcite-popover", {
      autoClose: true,
      class: d4.popover,
      key: "popover",
      label: e12.label,
      overlayPositioning: "fixed",
      referenceElement: this._button,
      onCalcitePopoverClose: () => this._open = false,
      onCalcitePopoverOpen: () => this._open = true
    }, n2("calcite-color-picker", {
      alphaChannel: this.alphaEnabled,
      channelsDisabled: true,
      key: "color-picker",
      savedDisabled: true,
      value: this.value.toCss(),
      onCalciteColorPickerInput: this._onColorInput
    })));
  }
};
e3([y()], m4.prototype, "class", void 0), e3([y()], m4.prototype, "value", void 0), e3([y()], m4.prototype, "alphaEnabled", void 0), e3([y()], m4.prototype, "onChange", void 0), e3([y()], m4.prototype, "_containerElement", void 0), e3([y()], m4.prototype, "_button", void 0), e3([y()], m4.prototype, "_open", void 0), e3([y(), e4("esri/widgets/support/t9n/ColorPicker")], m4.prototype, "_messages", void 0), m4 = e3([a("esri.widgets.support.ColorPicker")], m4);

// ../../../node_modules/@arcgis/core/widgets/ShadowCast/components/LabeledColorPicker.js
function e11(e12) {
  return n2(r5, {
    for: e12.id,
    label: e12.label,
    tabIndex: -1
  }, n2(m4, {
    id: e12.id,
    value: e12.value,
    onChange: e12.onChange
  }));
}

// ../../../node_modules/@arcgis/core/widgets/ShadowCast/components/DiscreteConfigurator.js
var d5 = class extends B {
  constructor(o3) {
    super(o3), this.colorPickerVisible = true, this._selectId = `select-${n()}`, this._colorPickerId = `color-picker-${n()}`, this._onColorChange = (o4) => {
      this.options.color = o4;
    };
  }
  loadDependencies() {
    return r({
      label: () => import("./calcite-label-NSQ5QQOX.js"),
      option: () => import("./calcite-option-HXDEP2SV.js"),
      select: () => import("./calcite-select-VUQDZAVH.js")
    });
  }
  render() {
    const o3 = this._messages.discrete, e12 = o3.intervalLabel, {
      color: t3,
      interval: s6,
      intervalOptions: i7
    } = this.options;
    return n2("div", {
      class: c3.base
    }, n2(r5, {
      for: this._selectId,
      label: e12
    }, n2("calcite-select", {
      bind: this,
      id: this._selectId,
      label: e12,
      onCalciteSelectChange: this._onIntervalChange
    }, i7.toArray().map((o4) => n2("calcite-option", {
      key: o4,
      selected: o4 === s6,
      value: String(o4)
    }, n8(o4))))), this.colorPickerVisible ? n2(e11, {
      id: this._colorPickerId,
      label: o3.colorLabel,
      value: t3,
      onChange: this._onColorChange
    }) : null);
  }
  _onIntervalChange(o3) {
    const e12 = parseInt(o3.target.selectedOption?.value, 10);
    Number.isFinite(e12) && (this.options.interval = e12);
  }
};
e3([y()], d5.prototype, "options", void 0), e3([y()], d5.prototype, "colorPickerVisible", void 0), e3([y(), e4("esri/widgets/ShadowCast/t9n/ShadowCast")], d5.prototype, "_messages", void 0), d5 = e3([a("esri.widgets.ShadowCast.components.DiscreteConfigurator")], d5);

// ../../../node_modules/@arcgis/core/widgets/ShadowCast/components/DurationConfigurator.js
var u5 = class extends B {
  constructor(o3) {
    super(o3), this.colorPickerVisible = true, this._modeSelectorId = `mode-selector-${n()}`, this._colorPickerId = `color-picker-${n()}`, this._onColorChange = (o4) => {
      this.options.color = o4;
    }, this._setContinuous = () => {
      this.options.mode = o2.Continuous;
    }, this._setHourly = () => {
      this.options.mode = o2.Hourly;
    };
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-TT4KT5XH.js"),
      label: () => import("./calcite-label-NSQ5QQOX.js")
    });
  }
  render() {
    const o3 = this._messages.duration, {
      color: t3,
      mode: s6
    } = this.options;
    return n2("div", {
      class: o.base
    }, n2(r5, {
      for: this._modeSelectorId,
      label: o3.modeLabel
    }, n2("div", {
      class: o.radioGroup
    }, n2(d6, {
      active: s6 === o2.Continuous,
      label: o3.continuousLabel,
      onclick: this._setContinuous
    }), n2(d6, {
      active: s6 === o2.Hourly,
      label: o3.hourlyLabel,
      onclick: this._setHourly
    }))), this.colorPickerVisible ? n2(e11, {
      id: this._colorPickerId,
      label: o3.colorLabel,
      value: t3,
      onChange: this._onColorChange
    }) : null);
  }
};
function d6(_a) {
  var _b = _a, {
    active: o3,
    label: t3
  } = _b, s6 = __objRest(_b, [
    "active",
    "label"
  ]);
  return n2("calcite-button", __spreadValues({
    alignment: "center",
    appearance: o3 ? "solid" : "outline",
    scale: "s",
    width: "half"
  }, s6), t3);
}
e3([y()], u5.prototype, "options", void 0), e3([y()], u5.prototype, "colorPickerVisible", void 0), e3([y(), e4("esri/widgets/ShadowCast/t9n/ShadowCast")], u5.prototype, "_messages", void 0), u5 = e3([a("esri.widgets.ShadowCast.components.DurationConfigurator")], u5);

// ../../../node_modules/@arcgis/core/widgets/ShadowCast/components/ShadowTooltipContent.js
var l5 = m(1, "minutes", "milliseconds");
var d7 = m(15, "minutes", "milliseconds");
var u6 = class extends B {
  constructor(t3, o3) {
    super(t3, o3), this.accumulatedShadowTime = null, this._messages = null;
  }
  render() {
    const t3 = this._formattedContent;
    return n2("div", {
      class: l3.base
    }, t3 ? n2("div", {
      class: l3.content
    }, t3) : null);
  }
  get _formattedContent() {
    const t3 = this._messages, s6 = this.accumulatedShadowTime;
    if (null == t3 || null == s6) return null;
    const r6 = i(s6, s6 < d7 ? l5 : d7);
    return s2(t3.timeInShadow, {
      duration: n8(r6)
    });
  }
};
e3([y()], u6.prototype, "accumulatedShadowTime", void 0), e3([y()], u6.prototype, "view", void 0), e3([y(), e4("esri/widgets/ShadowCast/t9n/ShadowCast")], u6.prototype, "_messages", void 0), e3([y({
  readOnly: true
})], u6.prototype, "_formattedContent", null), u6 = e3([a("esri.widgets.ShadowCast.components.ShadowTooltipContent")], u6);

// ../../../node_modules/@arcgis/core/widgets/ShadowCast/components/ShadowTooltip.js
var d8 = class extends S {
  constructor(t3) {
    super(t3), this._updateHandle = null, this._contentContainer = this._createContainer();
  }
  initialize() {
    this.container.appendChild(this._contentContainer), this._contentWidget = new u6({}, this._contentContainer), this._updateHandle = d2(() => {
      const t3 = this._contentContainer, {
        screenPoint: e12,
        accumulatedShadowTime: o3
      } = this.viewModel.tooltip;
      return {
        contentContainer: t3,
        screenPoint: e12,
        accumulatedShadowTime: o3
      };
    }, (t3) => this._update(t3), A2);
  }
  destroy() {
    this._updateHandle = l(this._updateHandle), this._contentWidget = u(this._contentWidget), this.container.contains(this._contentContainer) && this.container.removeChild(this._contentContainer);
  }
  get testData() {
  }
  _update({
    contentContainer: t3,
    screenPoint: e12,
    accumulatedShadowTime: o3
  }) {
    const {
      style: n9
    } = t3;
    null != e12 ? (n9.display = "block", n9.transform = `translate(${e12.x}px, ${e12.y}px)`, this._contentWidget.accumulatedShadowTime = o3) : n9.display = "none";
  }
  _createContainer() {
    const t3 = document.createElement("div"), {
      style: e12
    } = t3;
    return e12.position = "absolute", e12.top = "0", e12.left = "0", t3;
  }
};
e3([y()], d8.prototype, "viewModel", void 0), e3([y()], d8.prototype, "container", void 0), e3([y()], d8.prototype, "_contentContainer", void 0), e3([y()], d8.prototype, "_contentWidget", void 0), d8 = e3([a("esri.widgets.ShadowCast.components.ShadowTooltip")], d8);

// ../../../node_modules/@arcgis/core/widgets/ShadowCast/components/ThresholdConfigurator.js
var j2 = class extends B {
  constructor(o3) {
    super(o3), this.colorPickerVisible = true, this._valueSliderId = `value-slider-${n()}`, this._colorPickerId = `color-picker-${n()}`, this._valueSlider = new A3({
      visibleElements: {
        labels: false,
        rangeLabels: false
      },
      steps: m(30, "minutes", "milliseconds"),
      labelFormatFunction: (o4, e12) => {
        const s6 = m(o4, "milliseconds", "hours");
        return "tick" === e12 ? l2(s6, {
          maximumFractionDigits: 0
        }) : "";
      }
    }), this._onColorChange = (o4) => {
      this.options.color = o4;
    };
  }
  initialize() {
    const o3 = ({
      value: o4
    }) => {
      this.options.value = o4;
    };
    this.addHandles([d2(() => {
      const {
        value: o4,
        minValue: e12,
        maxValue: s6
      } = this.options;
      return {
        value: o4,
        minValue: e12,
        maxValue: s6
      };
    }, ({
      value: o4,
      minValue: e12,
      maxValue: s6
    }) => {
      const r6 = this._valueSlider;
      r6.min = e12, r6.max = s6, r6.values = [o4];
      const i7 = s6 - e12, l6 = Math.floor(m(i7, "milliseconds", "hours"));
      r6.tickConfigs = [{
        mode: "count",
        values: 2 * l6 + 1,
        labelsVisible: false
      }, {
        mode: "count",
        values: l6 + 1,
        labelsVisible: true
      }];
    }, A2), this._valueSlider.on("thumb-change", o3), this._valueSlider.on("thumb-drag", o3)]);
  }
  loadDependencies() {
    return r({
      label: () => import("./calcite-label-NSQ5QQOX.js")
    });
  }
  destroy() {
    this._valueSlider = u(this._valueSlider);
  }
  render() {
    const o3 = this._messages.threshold, {
      color: e12
    } = this.options;
    return n2("div", {
      class: t2.base
    }, n2(r5, {
      class: t2.valueLabel,
      for: this._valueSliderId,
      label: o3.valueLabel
    }, this._valueSlider.render()), this.colorPickerVisible ? n2(e11, {
      id: this._colorPickerId,
      label: o3.colorLabel,
      value: e12,
      onChange: this._onColorChange
    }) : null);
  }
  get testData() {
  }
};
e3([y()], j2.prototype, "options", void 0), e3([y()], j2.prototype, "colorPickerVisible", void 0), e3([y()], j2.prototype, "testData", null), e3([y()], j2.prototype, "_valueSlider", void 0), e3([y(), e4("esri/widgets/ShadowCast/t9n/ShadowCast")], j2.prototype, "_messages", void 0), j2 = e3([a("esri.widgets.ShadowCast.components.ThresholdConfigurator")], j2);

// ../../../node_modules/@arcgis/core/widgets/ShadowCast.js
var V3;
!function(e12) {
  e12.Slider = "slider";
}(V3 || (V3 = {}));
var O2 = {
  labelFormatFunction: m2,
  min: 0,
  max: 1439,
  steps: 15,
  rangeLabelInputsEnabled: false,
  visibleElements: {
    labels: false,
    rangeLabels: false
  },
  tickConfigs: [{
    mode: "position",
    values: [0, 360, 720, 1080, 1439],
    labelsVisible: true,
    tickCreatedFunction: (e12, i7, t3) => r2({
      tickElement: i7,
      labelElement: t3
    })
  }, {
    mode: "position",
    values: [120, 240, 480, 600, 840, 960, 1200, 1320],
    tickCreatedFunction: (e12, i7) => u3({
      tickElement: i7
    })
  }]
};
var P = class extends B {
  constructor(e12, i7) {
    super(e12, i7), this.viewModel = null, this.headingLevel = 4, this.visibleElements = new i6(), this._defaultViewModel = null, this._timeSlider = new A3(__spreadProps(__spreadValues({}, O2), {
      container: document.createElement("div")
    })), this._tooltip = null, this._onTimezoneChange = (e13) => {
      this.viewModel.utcOffset = e13;
    }, this._onDateChange = (e13) => {
      const i8 = e13.target.valueAsDate;
      this.viewModel.date = Array.isArray(i8) ? i8[0] : i8;
    }, e12?.viewModel || (this._defaultViewModel = new G({
      view: e12?.view
    }), this.viewModel = this._defaultViewModel);
  }
  initialize() {
    this.addHandles([d2(() => ({
      viewModel: this.viewModel,
      slider: this._timeSlider
    }), (e12) => this._connectTimeSlider(e12), A2), d2(() => ({
      container: this.view?.surface,
      viewModel: this.viewModel,
      tooltipVisible: this.visibleElements.tooltip
    }), ({
      container: e12,
      viewModel: t3,
      tooltipVisible: o3
    }) => {
      this._tooltip = u(this._tooltip), null != e12 && o3 && (this._tooltip = new d8({
        viewModel: t3,
        container: e12
      }));
    }, A2), d2(() => ({
      viewModel: this.viewModel,
      visible: this.visible
    }), ({
      viewModel: e12,
      visible: i7
    }) => e12.setRunning(i7), A2)]);
  }
  destroy() {
    this._timeSlider = u(this._timeSlider), null != this._defaultViewModel && this.viewModel !== this._defaultViewModel && this._defaultViewModel.destroy();
  }
  loadDependencies() {
    return r({
      "input-date-picker": () => import("./calcite-input-date-picker-DUUVK6UX.js"),
      option: () => import("./calcite-option-HXDEP2SV.js"),
      select: () => import("./calcite-select-VUQDZAVH.js")
    });
  }
  render() {
    const {
      visibleElements: e12,
      viewModel: i7
    } = this, t3 = i7.state === a5.Disabled;
    return n2("div", {
      class: this.classes(e8.base, e6.widget, e6.panel, {
        [e6.widgetDisabled]: t3
      }),
      key: this
    }, this._renderTimeRangeSection(), e12.visualizationOptions ? this._renderVisualizationOptionsSection() : null);
  }
  get view() {
    return this.viewModel?.view;
  }
  set view(e12) {
    this.viewModel && (this.viewModel.view = e12);
  }
  get icon() {
    return "measure-building-height-shadow";
  }
  set icon(e12) {
    this._overrideIfSome("icon", e12);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e12) {
    this._overrideIfSome("label", e12);
  }
  get testData() {
  }
  _connectTimeSlider({
    viewModel: e12,
    slider: i7
  }) {
    if (this.removeHandles(V3.Slider), null == i7) return;
    const l6 = (e13) => m(e13, "milliseconds", "minutes"), a6 = (e13) => m(e13, "minutes", "milliseconds"), r6 = ({
      index: i8,
      value: t3
    }) => {
      0 === i8 ? e12.startTimeOfDay = a6(t3) : e12.endTimeOfDay = a6(t3);
    };
    this.addHandles([d2(() => [e12.startTimeOfDay, e12.endTimeOfDay], (e13) => {
      i7.values = e13.map(l6);
    }, A2), i7.on("thumb-change", r6), i7.on("thumb-drag", r6), i7.on("segment-drag", () => {
      [e12.startTimeOfDay, e12.endTimeOfDay] = i7.values.map(a6);
    })], V3.Slider);
  }
  _renderTimeRangeSection() {
    const {
      visibleElements: e12
    } = this;
    return e12.timeRangeSlider || e12.datePicker ? n2("section", {
      class: e8.timeRange,
      key: "time-range"
    }, n2(e7, {
      level: this.headingLevel
    }, this.messages.timeLabel), e12.timeRangeSlider ? this._renderTimeRange() : null, e12.datePicker ? this._renderDatePicker() : null) : null;
  }
  _renderTimeRange() {
    const {
      messages: e12,
      viewModel: i7,
      visibleElements: t3
    } = this, {
      startTimeOfDay: o3,
      endTimeOfDay: s6
    } = i7, [l6, a6] = [o3, s6].map((e13) => j(new Date(e13), f2));
    return [n2("div", {
      class: e8.timeRangeIndicator,
      key: "time-range-indicator"
    }, s2(e12.timeRange, {
      start: l6,
      end: a6
    }), t3.timezone ? n2(d3, {
      value: i7.utcOffset,
      onChange: this._onTimezoneChange
    }) : null), n2("div", {
      afterCreate: this._timeSliderContainerAfterCreate,
      afterRemoved: this._timeSliderContainerAfterRemoved,
      bind: this,
      key: "time-slider-container"
    })];
  }
  _timeSliderContainerAfterCreate(e12) {
    const i7 = this._timeSlider?.container;
    i7 && e12.appendChild(i7);
  }
  _timeSliderContainerAfterRemoved(e12) {
    const i7 = this._timeSlider?.container;
    i7 && e12.removeChild(i7);
  }
  _renderDatePicker() {
    return n2("div", {
      class: e8.datePickerContainer,
      key: e8.datePickerContainer
    }, n2("calcite-input-date-picker", {
      class: e8.datePicker,
      "data-testid": "date-picker",
      key: e8.datePicker,
      overlayPositioning: "fixed",
      placement: "bottom",
      valueAsDate: this.viewModel.date,
      onCalciteInputDatePickerChange: this._onDateChange
    }));
  }
  _renderVisualizationOptionsSection() {
    const {
      headingLevel: e12,
      messages: i7,
      viewModel: t3,
      visibleElements: o3
    } = this, s6 = o3.colorPicker, l6 = (e13) => this.classes(t3.visualizationType === e13 ? null : e8.visualizationConfigHidden);
    return n2("section", {
      class: e8.visualization,
      key: "visualization"
    }, n2(e7, {
      level: e12
    }, i7.visualizationLabel), this._renderVisualizationSelect(), n2("div", {
      class: l6(r4.Threshold),
      key: "threshold-configurator"
    }, n2(j2, {
      colorPickerVisible: s6,
      options: t3.thresholdOptions
    })), n2("div", {
      class: l6(r4.Duration),
      key: "duration-configurator"
    }, n2(u5, {
      colorPickerVisible: s6,
      options: t3.durationOptions
    })), n2("div", {
      class: l6(r4.Discrete),
      key: "discrete-configurator"
    }, n2(d5, {
      colorPickerVisible: s6,
      options: t3.discreteOptions
    })));
  }
  _renderVisualizationSelect() {
    const e12 = this.messages, i7 = this.viewModel.visualizationType;
    return n2("calcite-select", {
      bind: this,
      class: e8.visualizationSelect,
      key: "visualization-select",
      label: e12.visualizationLabel,
      onCalciteSelectChange: this._onVisualizationTypeChange
    }, [{
      type: r4.Threshold,
      label: e12.threshold.label
    }, {
      type: r4.Duration,
      label: e12.duration.label
    }, {
      type: r4.Discrete,
      label: e12.discrete.label
    }].map(({
      type: e13,
      label: t3
    }) => n2("calcite-option", {
      selected: e13 === i7,
      value: e13
    }, t3)));
  }
  _onVisualizationTypeChange(e12) {
    const i7 = e12.target.selectedOption?.value;
    this.viewModel.visualizationType = i7 ?? r4.Threshold;
  }
};
e3([y()], P.prototype, "viewModel", void 0), e3([y()], P.prototype, "view", null), e3([y()], P.prototype, "headingLevel", void 0), e3([y()], P.prototype, "icon", null), e3([y()], P.prototype, "label", null), e3([y({
  type: i6,
  nonNullable: true
})], P.prototype, "visibleElements", void 0), e3([y(), e4("esri/widgets/ShadowCast/t9n/ShadowCast")], P.prototype, "messages", void 0), e3([y()], P.prototype, "_defaultViewModel", void 0), e3([y()], P.prototype, "_timeSlider", void 0), e3([y()], P.prototype, "_tooltip", void 0), P = e3([a("esri.widgets.ShadowCast")], P);
var E2 = P;
export {
  E2 as default
};
//# sourceMappingURL=ShadowCast-PCR4NRPS.js.map
