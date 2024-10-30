import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  A as A3
} from "./chunk-EO43B5GN.js";
import {
  n2 as n4,
  y as y2
} from "./chunk-5WZBN555.js";
import {
  e as e4
} from "./chunk-5L5LGHM5.js";
import {
  t as t2
} from "./chunk-LTKDZMRF.js";
import {
  i
} from "./chunk-YEDQK53F.js";
import {
  e as e3
} from "./chunk-FYGR4X6I.js";
import {
  l
} from "./chunk-PLGJMWC5.js";
import {
  n as n3
} from "./chunk-C7BQE556.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-6EIBUVMG.js";
import {
  c as c3
} from "./chunk-DC5LRNPY.js";
import {
  c as c2,
  o as o3
} from "./chunk-C2OXE4NQ.js";
import {
  c
} from "./chunk-HEG4CVDM.js";
import {
  B,
  e2,
  r as r2
} from "./chunk-UVQYXHKM.js";
import {
  n as n2
} from "./chunk-M5N6UHWJ.js";
import "./chunk-EBCBYN6Y.js";
import {
  m
} from "./chunk-ODFKYX74.js";
import "./chunk-EGBDRLCX.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import {
  E,
  j,
  o as o2,
  r
} from "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import {
  A as A2,
  P,
  d,
  w
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import {
  o
} from "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  t
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import {
  a3 as a,
  b as b2
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import {
  A,
  b
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  h
} from "./chunk-2ZJE6ZFX.js";
import "./chunk-L4CMR4WM.js";
import "./chunk-7JIACICA.js";
import "./chunk-IE4UBD3F.js";
import "./chunk-IAO6HACY.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/widgets/TimeSlider/css.js
var t3 = "esri-time-slider";
var e5 = {
  timeSlider: `${t3}`,
  timeSliderOutOfBounds: `${t3}--out-of-bounds`,
  timeSliderMode: `${t3}__mode--`,
  timeSliderLayout: `${t3}__layout--`,
  timeSliderRow: `${t3}__row`,
  animation: `${t3}__animation`,
  animationButton: `${t3}__animation-button`,
  timeExtent: `${t3}__time-extent`,
  timeExtentGroup: `${t3}__time-extent-group`,
  timeExtentDate: `${t3}__time-extent-date`,
  timeExtentTime: `${t3}__time-extent-time`,
  timeExtentSeparator: `${t3}__time-extent-separator`,
  playbackControls: `${t3}__playback-controls`,
  min: `${t3}__min`,
  minDate: `${t3}__min-date`,
  minTime: `${t3}__min-time`,
  slider: `${t3}__slider`,
  sliderMajorTick: "majorTick",
  sliderMinorTick: "minorTick",
  max: `${t3}__max`,
  maxDate: `${t3}__max-date`,
  maxTime: `${t3}__max-time`,
  previous: `${t3}__previous`,
  previousButton: `${t3}__previous-button`,
  next: `${t3}__next`,
  nextButton: `${t3}__next-button`,
  warning: `${t3}__warning`,
  warningText: `${t3}__warning-text`,
  hasActions: `${t3}--has-actions`,
  actions: `${t3}__actions`,
  actionsButton: `${t3}__actions-button`
};

// ../../../node_modules/@arcgis/core/widgets/TimeSlider/TimeSliderViewModel.js
var T = 1e4;
function x(t4) {
  return null != t4 && void 0 !== t4.count;
}
function E2(t4) {
  return null != t4 && void 0 !== t4.interval;
}
function _(t4) {
  return null != t4 && void 0 !== t4.dates;
}
var y3 = class extends o.EventedAccessor {
  constructor(t4) {
    super(t4), this._animationController = null, this._isViewTimeExtentInitialized = false, this._timerId = null, this.actions = new V(), this.fullTimeExtent = null, this.loop = false, this.mode = "time-window", this.stops = {
      count: 10
    }, this.timeExtent = null, this.view = null;
  }
  initialize() {
    this.addHandles([d(() => this.effectiveStops, () => {
      null == this.timeExtent && (this.timeExtent = this._getDefaultTimeExtent());
    }, P), d(() => this.view, (t4, e6) => {
      this._unregisterWidget(e6), this._registerWidget(t4);
    }, A2), d(() => this.timeExtent, (t4) => {
      if (null == this.view) return;
      const e6 = this.view.timeExtent;
      (null != t4 && !t4.isAllTime || null != e6 && !e6.isAllTime) && (null != t4 && null != e6 && t4.equals(e6) || (this.view.timeExtent = t4));
    }, P), d(() => this.view?.timeExtent, (t4) => {
      this._isViewTimeExtentInitialized ? (null != t4 && !t4.isAllTime || null != this.timeExtent && !this.timeExtent.isAllTime) && (null != t4 && null != this.timeExtent && t4.equals(this.timeExtent) || (this.timeExtent = t4)) : this._isViewTimeExtentInitialized = true;
    })]);
  }
  destroy() {
    null != this._timerId && (clearInterval(this._timerId), this._timerId = null), this._unregisterWidget(this.view), this.view = null, null != this._animationController && (this._animationController.abort(), this._animationController = null);
  }
  get effectiveStops() {
    const {
      fullTimeExtent: t4,
      stops: e6
    } = this;
    if (_(e6)) {
      const {
        dates: i2
      } = e6;
      if (null == i2 || 0 === i2.length) return null;
      const n5 = i2.sort((t5, e7) => t5.getTime() - e7.getTime());
      if (null == t4) return n5;
      const {
        start: l2,
        end: s
      } = t4;
      if (null == l2 || null == s) return n5;
      return n5.filter((t5) => !(t5.getTime() < l2.getTime() || t5.getTime() > s.getTime()));
    }
    if (x(e6)) {
      const i2 = e6.timeExtent ?? t4;
      return this._divideTimeExtentByCount(i2, e6.count);
    }
    if (E2(e6)) {
      const i2 = e6.timeExtent ?? t4;
      return this._divideTimeExtentByInterval(i2, e6.interval);
    }
    return [];
  }
  set playRate(t4) {
    t4 <= 0 || t4 > 36e5 || ("playing" === this.state && this._startAnimation(), this._set("playRate", t4));
  }
  get state() {
    return null == this.fullTimeExtent ? "disabled" : null != this._animationController ? "playing" : "ready";
  }
  get timeExtentValues() {
    const {
      mode: t4,
      timeExtent: e6
    } = this;
    if (null == e6 || e6.isAllTime || e6.isEmpty) return null;
    const {
      start: i2,
      end: n5
    } = e6;
    switch (t4) {
      case "cumulative-from-end":
      case "instant":
        return null != i2 ? [i2.getTime()] : null;
      case "cumulative-from-start":
        return null != n5 ? [n5.getTime()] : null;
      case "time-window":
        return null != i2 && null != n5 ? [i2.getTime(), n5.getTime()] : null;
    }
  }
  static getPropertiesFromWebMap(t4, e6) {
    return __async(this, null, function* () {
      t(n.getLogger("esri.widgets.TimeSlider.TimeSliderViewModel"), "`TimeSliderViewModel.getPropertiesFromWebMap` is deprecated in favor of 'timeUtils.getTimeSliderSettingsFromWebDocument'", {
        replacement: "timeUtils.getTimeSliderSettingsFromWebDocument",
        version: "4.29",
        see: "https://developers.arcgis.com/javascript/latest/api-reference/esri-support-timeUtils.html#getTimeSliderSettingsFromWebDocument",
        warnOnce: true
      });
      const {
        getTimeSliderSettingsFromWebDocument: i2
      } = yield import("./timeUtils-R5AELEYD.js");
      return i2(t4, e6);
    });
  }
  next() {
    this._step({
      forward: true,
      allowRestart: false
    });
  }
  play() {
    this._startAnimation();
  }
  previous() {
    this._step({
      forward: false,
      allowRestart: false
    });
  }
  stop() {
    this._stopAnimation();
  }
  triggerAction(t4) {
    this.emit("trigger-action", {
      action: t4
    });
  }
  updateWebDocument(t4) {
    const e6 = new y2({
      currentTimeExtent: this.timeExtent,
      fullTimeExtent: this.fullTimeExtent,
      loop: this.loop,
      numStops: x(this.stops) ? this.stops.count : null,
      numThumbs: "time-window" === this.mode ? 2 : 1,
      stopDelay: this.playRate,
      stopInterval: E2(this.stops) ? this.stops.interval : null,
      stops: _(this.stops) ? this.stops.dates : null
    });
    t4.widgets ? t4.widgets.timeSlider = e6 : t4.widgets = new n4({
      timeSlider: e6
    });
  }
  valuesToTimeExtent(t4) {
    if (null == t4) return null;
    const i2 = t4.sort((t5, e6) => t5 - e6).map((t5) => new Date(t5)), n5 = i2.length > 0 ? i2[0] : null, l2 = i2.length > 1 ? i2[1] : null;
    switch (this.mode) {
      case "time-window":
        return new c3({
          start: n5,
          end: l2
        });
      case "instant":
        return new c3({
          start: n5,
          end: n5
        });
      case "cumulative-from-start":
        return new c3({
          start: null,
          end: n5
        });
      case "cumulative-from-end":
        return new c3({
          start: n5,
          end: null
        });
      default:
        return c3.allTime;
    }
  }
  _animate() {
    return __async(this, null, function* () {
      try {
        const t4 = this.view, e6 = this._animationController?.signal;
        yield Promise.all([A(this.playRate, null, e6), null != t4 && w(() => false === t4.updating, e6)]);
      } catch (t4) {
        return b(t4) || n.getLogger(this).error(t4), void (this._animationController = null);
      }
      this._step({
        forward: true,
        allowRestart: false
      }), null != this._animationController && this._animate();
    });
  }
  _divideTimeExtentByCount(t4, e6 = 10) {
    if (!t4 || !e6) return [];
    const {
      start: i2,
      end: n5
    } = t4;
    if (null == i2 || null == n5) return [];
    if (e6 > T) return this._divideTimeExtentByCount(t4);
    const l2 = [], s = i2.getTime(), r3 = n5.getTime() - s;
    for (let o4 = 0; o4 <= e6; o4++) l2.push(new Date(s + o4 / e6 * r3));
    return l2;
  }
  _divideTimeExtentByInterval(t4, e6, i2 = T) {
    if (!t4 || !e6) return [];
    const {
      start: n5,
      end: l2
    } = t4;
    if (null == n5 || null == l2) return [];
    const s = l2.getTime() - n5.getTime(), r3 = e6.toMilliseconds();
    if (r3 <= 0 || s / r3 > i2) return this._divideTimeExtentByCount(t4);
    const o4 = [], {
      value: a2,
      unit: m2
    } = e6;
    let u = n5;
    for (; u.getTime() <= l2.getTime(); ) o4.push(new Date(u.getTime())), u = o3(u, a2, m2);
    return o4;
  }
  _getDefaultTimeExtent() {
    const {
      effectiveStops: t4,
      mode: i2
    } = this;
    if (null == t4 || !i2) return null;
    switch (i2) {
      case "time-window":
        return t4.length > 1 ? new c3({
          start: t4[0],
          end: t4[1]
        }) : null;
      case "cumulative-from-start":
        return t4.length > 0 ? new c3({
          start: null,
          end: t4[0]
        }) : null;
      case "cumulative-from-end":
        return t4.length > 0 ? new c3({
          start: t4[0],
          end: null
        }) : null;
      case "instant":
        return t4.length > 0 ? new c3({
          start: t4[0],
          end: t4[0]
        }) : null;
      default:
        return null;
    }
  }
  _registerWidget(t4) {
    if (null != t4) {
      t4.persistableViewModels.includes(this) || t4.persistableViewModels.add(this);
    }
  }
  _startAnimation() {
    this._stopAnimation(), this._animationController = new AbortController(), this._step({
      forward: true,
      allowRestart: true
    }), this._animate();
  }
  _step(t4) {
    const {
      forward: e6,
      allowRestart: i2
    } = t4, {
      effectiveStops: n5
    } = this;
    if (null == this.timeExtentValues || null == n5) return;
    const l2 = n5.map((t5) => t5.getTime()), s = this.timeExtentValues.map((t5) => {
      const e7 = l2.indexOf(t5);
      if (-1 !== e7) return e7;
      const i3 = l2.reduce((e8, i4) => Math.abs(i4 - t5) < Math.abs(e8 - t5) ? i4 : e8);
      return l2.indexOf(i3);
    }), r3 = s.map((t5) => t5 + (e6 ? 1 : -1)), o4 = r3.some((t5) => t5 < 0 || t5 > l2.length - 1), {
      loop: a2,
      state: m2
    } = this;
    if (o4) {
      if (a2 || i2) {
        const t5 = Math.min(...s), i3 = Math.max(...s), n6 = (e6 ? s.map((e7) => e7 - t5) : s.map((t6) => t6 + (l2.length - 1 - i3))).map((t6) => l2[t6]);
        this.timeExtent = this.valuesToTimeExtent(n6);
      } else "playing" === m2 && this.stop();
    } else {
      const t5 = r3.map((t6) => l2[t6]);
      this.timeExtent = this.valuesToTimeExtent(t5);
    }
  }
  _stopAnimation() {
    null != this._animationController && (this._animationController.abort(), this._animationController = null);
  }
  _unregisterWidget(t4) {
    null != t4 && t4.persistableViewModels.remove(this);
  }
};
e([y()], y3.prototype, "_animationController", void 0), e([y({
  type: V
})], y3.prototype, "actions", void 0), e([y({
  readOnly: true
})], y3.prototype, "effectiveStops", null), e([y({
  type: c3
})], y3.prototype, "fullTimeExtent", void 0), e([y({
  nonNullable: true
})], y3.prototype, "loop", void 0), e([y({
  nonNullable: true
})], y3.prototype, "mode", void 0), e([y({
  nonNullable: true,
  value: 1e3
})], y3.prototype, "playRate", null), e([y({
  readOnly: true
})], y3.prototype, "state", null), e([y({
  cast: (t4) => null == t4 ? null : (E2(t4) && (t4.interval = b2(l, t4.interval)), (E2(t4) || x(t4)) && (t4.timeExtent = b2(c3, t4.timeExtent)), t4)
})], y3.prototype, "stops", void 0), e([y({
  type: c3
})], y3.prototype, "timeExtent", void 0), e([y({
  readOnly: true
})], y3.prototype, "timeExtentValues", null), e([y()], y3.prototype, "view", void 0), e([y()], y3.prototype, "next", null), e([y()], y3.prototype, "play", null), e([y()], y3.prototype, "previous", null), e([y()], y3.prototype, "stop", null), e([y()], y3.prototype, "updateWebDocument", null), y3 = e([a("esri.widgets.TimeSlider.TimeSliderViewModel")], y3);
var b3 = y3;

// ../../../node_modules/@arcgis/core/widgets/TimeSlider.js
var F = 3;
var C = 858;
var D = [{
  minor: {
    value: 100,
    unit: "milliseconds"
  },
  major: {
    value: 1,
    unit: "seconds"
  },
  format: {
    second: "numeric"
  }
}, {
  minor: {
    value: 500,
    unit: "milliseconds"
  },
  major: {
    value: 5,
    unit: "seconds"
  },
  format: {
    second: "numeric"
  }
}, {
  minor: {
    value: 1,
    unit: "seconds"
  },
  major: {
    value: 20,
    unit: "seconds"
  },
  format: {
    minute: "numeric",
    second: "numeric"
  }
}, {
  minor: {
    value: 2,
    unit: "seconds"
  },
  major: {
    value: 30,
    unit: "seconds"
  },
  format: {
    minute: "numeric",
    second: "numeric"
  }
}, {
  minor: {
    value: 10,
    unit: "seconds"
  },
  major: {
    value: 1,
    unit: "minutes"
  },
  format: {
    minute: "numeric"
  }
}, {
  minor: {
    value: 15,
    unit: "seconds"
  },
  major: {
    value: 5,
    unit: "minutes"
  },
  format: {
    hour: "numeric",
    minute: "numeric"
  }
}, {
  minor: {
    value: 1,
    unit: "minutes"
  },
  major: {
    value: 20,
    unit: "minutes"
  },
  format: {
    hour: "numeric",
    minute: "numeric"
  }
}, {
  minor: {
    value: 5,
    unit: "minutes"
  },
  major: {
    value: 2,
    unit: "hours"
  },
  format: {
    hour: "numeric",
    minute: "numeric"
  }
}, {
  minor: {
    value: 15,
    unit: "minutes"
  },
  major: {
    value: 6,
    unit: "hours"
  },
  format: {
    hour: "numeric",
    minute: "numeric"
  }
}, {
  minor: {
    value: 1,
    unit: "hours"
  },
  major: {
    value: 1,
    unit: "days"
  },
  format: {
    day: "numeric",
    month: "short"
  }
}, {
  minor: {
    value: 6,
    unit: "hours"
  },
  major: {
    value: 1,
    unit: "weeks"
  },
  format: {
    day: "numeric",
    month: "short"
  }
}, {
  minor: {
    value: 1,
    unit: "days"
  },
  major: {
    value: 1,
    unit: "months"
  },
  format: {
    month: "long"
  }
}, {
  minor: {
    value: 2,
    unit: "days"
  },
  major: {
    value: 1,
    unit: "months"
  },
  format: {
    month: "short"
  }
}, {
  minor: {
    value: 3,
    unit: "days"
  },
  major: {
    value: 1,
    unit: "months"
  },
  format: {
    month: "short"
  }
}, {
  minor: {
    value: 4,
    unit: "days"
  },
  major: {
    value: 3,
    unit: "months"
  },
  format: {
    month: "short",
    year: "numeric"
  }
}, {
  minor: {
    value: 1,
    unit: "weeks"
  },
  major: {
    value: 1,
    unit: "years"
  },
  format: {
    year: "numeric"
  }
}, {
  minor: {
    value: 1,
    unit: "months"
  },
  major: {
    value: 1,
    unit: "years"
  },
  format: {
    year: "numeric"
  }
}, {
  minor: {
    value: 2,
    unit: "months"
  },
  major: {
    value: 2,
    unit: "years"
  },
  format: {
    year: "numeric"
  }
}, {
  minor: {
    value: 1,
    unit: "years"
  },
  major: {
    value: 1,
    unit: "decades"
  },
  format: {
    year: "numeric"
  }
}, {
  minor: {
    value: 2,
    unit: "years"
  },
  major: {
    value: 5,
    unit: "decades"
  },
  format: {
    year: "numeric"
  }
}, {
  minor: {
    value: 5,
    unit: "decades"
  },
  major: {
    value: 10,
    unit: "centuries"
  },
  format: {
    era: "short",
    year: "numeric"
  }
}, {
  minor: {
    value: 1,
    unit: "centuries"
  },
  major: {
    value: 10,
    unit: "centuries"
  },
  format: {
    era: "short",
    year: "numeric"
  }
}, {
  minor: {
    value: 2,
    unit: "centuries"
  },
  major: {
    value: 20,
    unit: "centuries"
  },
  format: {
    era: "short",
    year: "numeric"
  }
}, {
  minor: {
    value: 5,
    unit: "centuries"
  },
  major: {
    value: 50,
    unit: "centuries"
  },
  format: {
    era: "short",
    year: "numeric"
  }
}, {
  minor: {
    value: 10,
    unit: "centuries"
  },
  major: {
    value: 100,
    unit: "centuries"
  },
  format: {
    era: "short",
    year: "numeric"
  }
}, {
  minor: {
    value: 20,
    unit: "centuries"
  },
  major: {
    value: 200,
    unit: "centuries"
  },
  format: {
    era: "short",
    year: "numeric"
  }
}, {
  minor: {
    value: 50,
    unit: "centuries"
  },
  major: {
    value: 500,
    unit: "centuries"
  },
  format: {
    era: "short",
    year: "numeric"
  }
}, {
  minor: {
    value: 100,
    unit: "centuries"
  },
  major: {
    value: 1e3,
    unit: "centuries"
  },
  format: {
    era: "short",
    year: "numeric"
  }
}, {
  minor: {
    value: 200,
    unit: "centuries"
  },
  major: {
    value: 1e3,
    unit: "centuries"
  },
  format: {
    era: "short",
    year: "numeric"
  }
}, {
  minor: {
    value: 500,
    unit: "centuries"
  },
  major: {
    value: 5e3,
    unit: "centuries"
  },
  format: {
    era: "short",
    year: "numeric"
  }
}, {
  minor: {
    value: 1e3,
    unit: "centuries"
  },
  major: {
    value: 1e4,
    unit: "centuries"
  },
  format: {
    era: "short",
    year: "numeric"
  }
}];
var U = class extends B {
  constructor(t4, e6) {
    super(t4, e6), this._ignoreNextSliderUpdate = false, this._slider = new A3({
      precision: 0,
      visibleElements: {
        rangeLabels: false
      },
      rangeLabelInputsEnabled: false,
      thumbsConstrained: false
    }), this._tickFormat = null, this.disabled = false, this.labelFormatFunction = null, this.messages = null, this.messagesCommon = null, this.tickConfigs = null, this.timeVisible = false, this.viewModel = new b3();
  }
  initialize() {
    this.addHandles([d(() => this._slider.values, (t4) => {
      if (this._ignoreNextSliderUpdate) return void (this._ignoreNextSliderUpdate = false);
      const e6 = this.viewModel.valuesToTimeExtent(t4);
      null != this.timeExtent ? null != e6 ? this.timeExtent.equals(e6) || (this.timeExtent = e6) : this.timeExtent = null : null != e6 && (this.timeExtent = e6);
    }), d(() => this.effectiveStops, () => this._updateSliderSteps(), P)]);
  }
  loadDependencies() {
    return r2({
      action: () => import("./calcite-action-BXG7XWUR.js"),
      "action-menu": () => import("./calcite-action-menu-D4SIA23A.js")
    });
  }
  destroy() {
    this._slider.destroy(), this._tickFormat = null;
  }
  get _dateFormat() {
    return this._getIntlOptions("short-date");
  }
  get _timeFormat() {
    return this._getIntlOptions("long-time");
  }
  get actions() {
    return this.viewModel.actions;
  }
  set actions(t4) {
    this.viewModel.actions = t4;
  }
  get effectiveStops() {
    return this.viewModel.effectiveStops;
  }
  get fullTimeExtent() {
    return this.viewModel.fullTimeExtent;
  }
  set fullTimeExtent(t4) {
    this.viewModel.fullTimeExtent = t4;
  }
  get icon() {
    return "clock";
  }
  set icon(t4) {
    this._overrideIfSome("icon", t4);
  }
  get interactive() {
    return !(this.disabled || "disabled" === this.viewModel.state || this.timeZone === r);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(t4) {
    this._overrideIfSome("label", t4);
  }
  set layout(t4) {
    ["auto", "compact", "wide"].includes(t4) || (t4 = "auto"), this._set("layout", t4);
  }
  get loop() {
    return this.viewModel.loop;
  }
  set loop(t4) {
    this.viewModel.loop = t4;
  }
  get mode() {
    return this.viewModel.mode;
  }
  set mode(t4) {
    this.viewModel.mode = t4;
  }
  get playRate() {
    return this.viewModel.playRate;
  }
  set playRate(t4) {
    this.viewModel.playRate = t4;
  }
  get stops() {
    return this.viewModel.stops;
  }
  set stops(t4) {
    this.viewModel.stops = t4;
  }
  get tickFormats() {
    const {
      timeZone: t4
    } = this;
    return D.map(({
      minor: i2,
      major: s,
      format: o4
    }) => ({
      minor: new l(i2),
      major: new l(s),
      format: __spreadProps(__spreadValues({}, o4), {
        timeZone: t4
      })
    }));
  }
  get timeExtent() {
    return this.viewModel.timeExtent;
  }
  set timeExtent(t4) {
    this.viewModel.timeExtent = t4;
  }
  get timeZone() {
    return this.viewModel.view?.timeZone ?? o2;
  }
  set timeZone(t4) {
    this._overrideIfSome("timeZone", t4);
  }
  get view() {
    return this.viewModel.view;
  }
  set view(t4) {
    this.viewModel.view = t4;
  }
  static getPropertiesFromWebMap(t4, e6) {
    return __async(this, null, function* () {
      return t(n.getLogger("esri.widgets.TimeSlider"), "`TimeSlider.getPropertiesFromWebMap` is deprecated in favor of 'timeUtils.getTimeSliderSettingsFromWebDocument'", {
        replacement: "timeUtils.getTimeSliderSettingsFromWebDocument",
        version: "4.29",
        see: "https://developers.arcgis.com/javascript/latest/api-reference/esri-support-timeUtils.html#getTimeSliderSettingsFromWebDocument",
        warnOnce: true
      }), b3.getPropertiesFromWebMap(t4, e6);
    });
  }
  next() {
    return this.viewModel.next();
  }
  play() {
    return this.viewModel.play();
  }
  previous() {
    return this.viewModel.previous();
  }
  stop() {
    return this.viewModel.stop();
  }
  render() {
    const {
      _slider: t4,
      actions: e6,
      domNode: s,
      effectiveStops: o4,
      fullTimeExtent: r3,
      interactive: a2,
      messages: n5,
      messagesCommon: l2,
      mode: m2,
      tickConfigs: u,
      timeExtent: d2,
      timeVisible: p,
      viewModel: {
        state: v,
        timeExtentValues: h2
      }
    } = this;
    if (null != r3) {
      const {
        start: e7,
        end: i2
      } = r3;
      if (null != e7 && null != i2) {
        const s2 = e7.getTime(), o5 = i2.getTime(), r4 = t4.min !== s2 || t4.max !== o5;
        if (r4 && (t4.min = s2, t4.max = o5), null != u) t4.tickConfigs !== u && (t4.tickConfigs = u);
        else {
          const e8 = (o5 - s2) / (t4.trackElement?.offsetWidth || 400), i3 = this.tickFormats.find((t5) => t5.minor.toMilliseconds() > F * e8) ?? this.tickFormats.at(-1), a3 = this._tickFormat !== i3 && null != i3;
          if (a3 && (this._tickFormat = i3), r4 || a3) {
            const e9 = {
              mode: "position",
              values: this._getTickPositions(i3.minor),
              labelsVisible: false,
              tickCreatedFunction: (t5, e10) => {
                e10?.classList.add(e5.sliderMinorTick);
              }
            }, s3 = {
              mode: "position",
              values: this._getTickPositions(i3.major),
              labelsVisible: true,
              tickCreatedFunction: (t5, e10) => {
                e10?.classList.add(e5.sliderMajorTick);
              },
              labelFormatFunction: (t5) => j(t5, i3.format)
            };
            t4.tickConfigs = [e9, s3];
          }
        }
      }
    }
    const f = null == this.fullTimeExtent?.start || null == this.fullTimeExtent.end || null == this.timeExtent || this.timeExtent.isAllTime || this.timeExtent.isEmpty || null != this.timeExtent.start && (this.timeExtent.start < this.fullTimeExtent.start || this.timeExtent.start > this.fullTimeExtent.end) || null != this.timeExtent.end && (this.timeExtent.end > this.fullTimeExtent.end || this.timeExtent.end < this.fullTimeExtent.start);
    if (f) switch (this._ignoreNextSliderUpdate = true, m2) {
      case "time-window":
        t4.values = [t4.min, t4.max];
        break;
      case "instant":
      case "cumulative-from-end":
        t4.values = [t4.min];
        break;
      case "cumulative-from-start":
        t4.values = [t4.max];
    }
    else null != h2 ? h(t4.values, h2) || (t4.values = h2) : t4.values = null;
    t4.disabled = !a2;
    const y4 = "ready" === v, g = "playing" === v, w2 = f || !a2 || null == o4 || 0 === o4.length, j2 = "auto" === this.layout ? s.clientWidth < C ? "compact" : "wide" : this.layout, k = n2("div", {
      class: e5.animation
    }, n2("button", {
      "aria-disabled": w2 ? "true" : "false",
      "aria-label": g ? l2.control.stop : l2.control.play,
      bind: this,
      class: this.classes(e3.widgetButton, e5.animationButton, w2 && e3.buttonDisabled),
      disabled: w2,
      onclick: this._playOrStopClick,
      title: g ? l2.control.stop : l2.control.play,
      type: "button"
    }, n2("div", {
      class: this.classes((y4 || w2) && i.play, g && i.pause)
    }))), M = null != this.labelFormatFunction ? n2("div", {
      afterCreate: this._createLabel,
      afterUpdate: this._createLabel,
      bind: this,
      class: e5.timeExtentDate,
      "data-date": d2 ? [d2.start, d2.end] : null,
      "data-layout": j2,
      "data-type": "extent",
      key: "extent"
    }) : null == d2 || null != d2 && d2.isAllTime ? [n2("div", {
      class: this.classes(e5.warning, i.noticeTriangle)
    }), n2("div", {
      class: e5.warningText,
      key: "warning-text"
    }, n5.noTimeExtent)] : d2.isEmpty ? [n2("div", {
      class: this.classes(e5.warning, i.noticeTriangle)
    }), n2("div", {
      class: e5.warningText,
      key: "warning-text"
    }, n5.emptyTimeExtent)] : [null != d2.start && n2("div", {
      class: e5.timeExtentGroup,
      key: "start-date-group"
    }, n2("div", {
      class: e5.timeExtentDate,
      key: "start-date"
    }, this._formatDate(d2.start)), p ? n2("div", {
      class: e5.timeExtentTime,
      key: "start-time"
    }, this._formatTime(d2.start)) : null), null != d2.start && null != d2.end && d2.start.getTime() !== d2.end.getTime() && n2("div", {
      class: e5.timeExtentSeparator,
      key: "separator"
    }, "–"), null != d2.end && (null == d2.start || d2.start.getTime() !== d2.end.getTime()) && n2("div", {
      class: e5.timeExtentGroup,
      key: "end-date-group"
    }, n2("div", {
      class: e5.timeExtentDate,
      key: "end-date"
    }, this._formatDate(d2.end)), p ? n2("div", {
      class: e5.timeExtentTime,
      key: "end-time"
    }, this._formatTime(d2.end)) : null)], D2 = n2("div", {
      class: this.classes(e5.timeExtent, !a2 && e3.buttonDisabled)
    }, [M]), U2 = null != this.labelFormatFunction ? n2("div", {
      afterCreate: this._createLabel,
      afterUpdate: this._createLabel,
      bind: this,
      class: e5.minDate,
      "data-date": r3?.start,
      "data-layout": j2,
      "data-type": "min",
      key: "min-date"
    }) : null != r3?.start && [n2("div", {
      class: e5.minDate,
      key: "min-date"
    }, this._formatDate(r3.start)), p && n2("div", {
      class: e5.minTime,
      key: "min-time"
    }, this._formatTime(r3.start))], L2 = n2("div", {
      class: this.classes(e5.min, !a2 && e3.buttonDisabled)
    }, [U2]), Z = n2("div", {
      class: e5.slider
    }, t4.render()), W = null != this.labelFormatFunction ? n2("div", {
      afterCreate: this._createLabel,
      afterUpdate: this._createLabel,
      bind: this,
      class: e5.maxDate,
      "data-date": r3?.end,
      "data-layout": j2,
      "data-type": "max",
      key: "max-date"
    }) : null != r3?.end && [n2("div", {
      class: e5.maxDate,
      key: "max-date"
    }, this._formatDate(r3.end)), p && n2("div", {
      class: e5.maxTime,
      key: "max-time"
    }, this._formatTime(r3.end))], O = n2("div", {
      class: this.classes(e5.max, !a2 && e3.buttonDisabled)
    }, [W]), R = n2("div", {
      class: e5.previous
    }, n2("button", {
      "aria-disabled": w2 ? "true" : "false",
      "aria-label": l2.pagination.previous,
      bind: this,
      class: this.classes(e3.widgetButton, e5.previousButton, (g || w2) && e3.buttonDisabled),
      disabled: w2,
      onclick: this._previousClick,
      title: l2.pagination.previous,
      type: "button"
    }, n2("div", {
      class: i.reverse
    }))), B2 = n2("div", {
      class: e5.next
    }, n2("button", {
      "aria-disabled": w2 ? "true" : "false",
      "aria-label": l2.pagination.next,
      bind: this,
      class: this.classes(e3.widgetButton, e5.nextButton, (g || w2) && e3.buttonDisabled),
      disabled: w2,
      onclick: this._nextClick,
      title: l2.pagination.next,
      type: "button"
    }, n2("div", {
      class: i.forward
    }))), I = e6?.length > 0, A4 = I && n2("div", {
      class: e5.actions,
      title: l2.options
    }, n2("calcite-action-menu", {
      class: e5.actionsButton,
      label: l2.options
    }, e6.toArray().map((t5) => n2("calcite-action", {
      bind: this,
      icon: t5.icon,
      id: t5.id,
      onclick: () => this.viewModel.triggerAction(t5),
      text: t5.title,
      textEnabled: true,
      title: t5.title
    }))));
    return n2("div", {
      afterCreate: (t5) => {
        this.addHandles(m(t5, () => this.scheduleRender()));
      },
      "aria-label": n5.widgetLabel,
      class: this.classes(e5.timeSlider, e3.widget, `${e5.timeSliderMode}${m2}`, `${e5.timeSliderLayout}${j2}`, !a2 && e3.disabled, f && e5.timeSliderOutOfBounds, I && e5.hasActions, c())
    }, "wide" === j2 && n2("div", {
      class: e5.timeSliderRow
    }, n2("div", {
      class: e5.playbackControls
    }, [k, D2, L2, Z, O, R, B2]), A4), "compact" === j2 && [n2("div", {
      class: e5.timeSliderRow,
      key: "time-slider-row-1"
    }, [D2, A4]), n2("div", {
      class: e5.timeSliderRow,
      key: "time-slider-row-2"
    }, [Z]), n2("div", {
      class: e5.timeSliderRow,
      key: "time-slider-row-3"
    }, [L2, R, k, B2, O])]);
  }
  updateWebDocument(t4) {
    this.viewModel?.updateWebDocument(t4);
  }
  _createLabel(t4) {
    if (null == this.labelFormatFunction) return;
    const e6 = t4.getAttribute("data-type"), i2 = t4.getAttribute("data-layout"), s = t4["data-date"];
    this.labelFormatFunction(s, e6, t4, i2);
  }
  _formatDate(t4) {
    return j(t4, this._dateFormat);
  }
  _formatTime(t4) {
    return j(t4, this._timeFormat);
  }
  _getIntlOptions(t4) {
    const {
      timeZone: e6
    } = this;
    return __spreadProps(__spreadValues({}, E(t4)), {
      timeZone: e6
    });
  }
  _getTickPositions(t4) {
    const {
      fullTimeExtent: e6
    } = this;
    if (null == e6?.start || null == e6.end) return [];
    const {
      start: i2,
      end: s
    } = e6, o4 = [], {
      value: r3,
      unit: a2
    } = t4;
    let n5 = c2(i2, a2, this.timeZone);
    for (; n5.getTime() <= s.getTime(); ) n5.getTime() >= i2.getTime() && o4.push(n5.getTime()), n5 = o3(n5, r3, a2, this.timeZone);
    return o4;
  }
  _updateSliderSteps() {
    this._slider.steps = null != this.effectiveStops && this.effectiveStops.length > 0 ? this.effectiveStops.map((t4) => t4.getTime()) : null;
  }
  _playOrStopClick() {
    switch (this.viewModel.state) {
      case "ready":
        this.viewModel.play();
        break;
      case "playing":
        this.viewModel.stop();
        break;
      case "disabled":
        break;
      default:
        n3(this.viewModel.state);
    }
  }
  _previousClick() {
    this.viewModel.previous();
  }
  _nextClick() {
    this.viewModel.next();
  }
};
e([y()], U.prototype, "_dateFormat", null), e([y()], U.prototype, "_timeFormat", null), e([y()], U.prototype, "actions", null), e([y()], U.prototype, "disabled", void 0), e([y()], U.prototype, "effectiveStops", null), e([y()], U.prototype, "fullTimeExtent", null), e([y()], U.prototype, "icon", null), e([y({
  readOnly: true
})], U.prototype, "interactive", null), e([y()], U.prototype, "label", null), e([y()], U.prototype, "labelFormatFunction", void 0), e([y({
  value: "auto"
})], U.prototype, "layout", null), e([y()], U.prototype, "loop", null), e([y(), e2("esri/widgets/TimeSlider/t9n/TimeSlider")], U.prototype, "messages", void 0), e([y(), e2("esri/t9n/common")], U.prototype, "messagesCommon", void 0), e([y()], U.prototype, "mode", null), e([y()], U.prototype, "playRate", null), e([y()], U.prototype, "stops", null), e([y()], U.prototype, "tickConfigs", void 0), e([y()], U.prototype, "tickFormats", null), e([y()], U.prototype, "timeExtent", null), e([y({
  nonNullable: true
})], U.prototype, "timeVisible", void 0), e([y()], U.prototype, "timeZone", null), e([y()], U.prototype, "view", null), e([y({
  type: b3
}), e4("trigger-action")], U.prototype, "viewModel", void 0), e([t2()], U.prototype, "_playOrStopClick", null), e([t2()], U.prototype, "_previousClick", null), e([t2()], U.prototype, "_nextClick", null), U = e([a("esri.widgets.TimeSlider")], U);
var L = U;
export {
  L as default
};
//# sourceMappingURL=TimeSlider-R6XJA5DS.js.map
