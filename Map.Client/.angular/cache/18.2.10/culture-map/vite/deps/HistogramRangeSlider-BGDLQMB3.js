import {
  p
} from "./chunk-JC4QFJCR.js";
import {
  A,
  l
} from "./chunk-VGYXQASE.js";
import {
  a as a2,
  r,
  s
} from "./chunk-AKJFF2YB.js";
import "./chunk-DME7BDTC.js";
import "./chunk-K5IDJ4GJ.js";
import {
  e as e3
} from "./chunk-HBMA4SRU.js";
import "./chunk-TPVEWGXS.js";
import "./chunk-ZUHJZKEM.js";
import "./chunk-B4EEJXBQ.js";
import "./chunk-5U4TBXYS.js";
import "./chunk-WUB6LJVL.js";
import "./chunk-QXSES7JX.js";
import "./chunk-ZR5BOILP.js";
import "./chunk-63QCTVYB.js";
import "./chunk-PQ4T66BG.js";
import "./chunk-SWPHGZYB.js";
import "./chunk-7KRERHHR.js";
import "./chunk-T4AP6CTC.js";
import "./chunk-HD65DNIO.js";
import "./chunk-4KWLMXIA.js";
import "./chunk-BIUXKPKA.js";
import "./chunk-N6TJI25E.js";
import "./chunk-634JLXD4.js";
import "./chunk-Y3EDGYWG.js";
import "./chunk-UF6JOUSJ.js";
import "./chunk-T5JGQSO3.js";
import "./chunk-CIW3KHOW.js";
import "./chunk-J55F4AC2.js";
import "./chunk-IQLBZKUD.js";
import "./chunk-7MZZCQ64.js";
import "./chunk-DI6VABAK.js";
import "./chunk-5EBAJR7X.js";
import "./chunk-5JA2JHV3.js";
import "./chunk-SGSUM5YO.js";
import "./chunk-SG5TCCCK.js";
import "./chunk-6A7CWJED.js";
import "./chunk-JM7HAEY6.js";
import "./chunk-V5RMUGJJ.js";
import "./chunk-D2NB6D6N.js";
import "./chunk-HT2T6PUB.js";
import "./chunk-K64AAM77.js";
import "./chunk-6EUVKE22.js";
import "./chunk-A3NNJ7XA.js";
import "./chunk-OKJHJ3CY.js";
import "./chunk-XTVPEVHA.js";
import "./chunk-DTUSTSEJ.js";
import "./chunk-JCWFGRHQ.js";
import "./chunk-JILEJ6R2.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-DZALMCYL.js";
import {
  u
} from "./chunk-K226GFDN.js";
import "./chunk-4ZZRP4MA.js";
import "./chunk-7ZJ6P7J7.js";
import "./chunk-FPFZQCEQ.js";
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
import "./chunk-FYAEQPUY.js";
import "./chunk-7XMEZQ34.js";
import "./chunk-BDM2D6IC.js";
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import "./chunk-7RMVJCDW.js";
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
import {
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
import "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import {
  N,
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

// ../../../node_modules/@arcgis/core/widgets/HistogramRangeSlider/HistogramRangeSliderViewModel.js
var n2 = class extends l {
  constructor(e4) {
    super(e4), this.average = null, this.bins = null, this.hasTimeData = false, this.labelFormatFunction = (e5) => {
      if (this.hasTimeData) return r(e5);
      const {
        max: t,
        min: r2,
        precision: s2
      } = this, n3 = t - r2 > 10 ? 2 : s2;
      return s(parseFloat(e5.toFixed(n3)));
    }, this.rangeType = "equal", this.standardDeviation = null;
  }
  generateWhereClause(e4) {
    const {
      rangeType: t,
      state: r2,
      values: s2
    } = this;
    if ("ready" !== r2 || !s2?.length || null == e4) return null;
    const o = s2[0], a3 = s2.length > 1 ? s2[s2.length - 1] : null;
    switch (t) {
      case "equal":
        return `${e4} = ${o}`;
      case "not-equal":
        return `${e4} <> ${o}`;
      case "less-than":
        return `${e4} < ${o}`;
      case "greater-than":
        return `${e4} > ${o}`;
      case "at-least":
        return `${e4} >= ${o}`;
      case "at-most":
        return `${e4} <= ${o}`;
      case "between":
        return `${e4} BETWEEN ${o} AND ${a3}`;
      case "not-between":
        return `${e4} NOT BETWEEN ${o} AND ${a3}`;
      default:
        return null;
    }
  }
};
e([y()], n2.prototype, "average", void 0), e([y()], n2.prototype, "bins", void 0), e([y()], n2.prototype, "hasTimeData", void 0), e([y()], n2.prototype, "labelFormatFunction", void 0), e([y()], n2.prototype, "rangeType", void 0), e([y()], n2.prototype, "standardDeviation", void 0), n2 = e([a("esri.widgets.HistogramRangeSlider.HistogramRangeSliderViewModel")], n2);
var i = n2;

// ../../../node_modules/@arcgis/core/widgets/HistogramRangeSlider.js
var g = "esri-histogram-range-slider";
var c = {
  base: g,
  sliderContainer: `${g}__slider-container`,
  histogramContainer: `${g}__histogram-container`,
  rangeTypePrefix: `${g}__range-type--`
};
var v = class extends B {
  constructor(e4, i2) {
    super(e4, i2), this._barElements = [], this._histogram = null, this._slider = null, this.barCreatedFunction = null, this.dataLines = null, this.dataLineCreatedFunction = null, this.excludedBarColor = new u("#d7e5f0"), this.includedBarColor = new u("#599dd4"), this.messages = null, this.standardDeviationCount = 1, this.viewModel = new i();
  }
  initialize() {
    const {
      average: e4,
      bins: t,
      hasTimeData: r2,
      max: s2,
      min: a3,
      viewModel: l2
    } = this;
    this._updateBarFill = this._updateBarFill.bind(this), this._histogram = new p({
      average: e4,
      bins: t,
      barCreatedFunction: (e5, t2) => {
        0 === e5 && (this._barElements = []), this._barElements.push(t2), this._updateBarFill(e5, t2), this.barCreatedFunction && this.barCreatedFunction(e5, t2);
      },
      dataLines: this._getDataLines(),
      dataLineCreatedFunction: (e5, t2) => {
        this.dataLineCreatedFunction && this.dataLineCreatedFunction(e5, t2);
      },
      labelFormatFunction: this.labelFormatFunction,
      layout: "horizontal",
      max: s2,
      min: a3
    }), this._slider = new A({
      labelFormatFunction: this.labelFormatFunction,
      layout: "horizontal",
      visibleElements: {
        labels: true,
        rangeLabels: true
      },
      rangeLabelInputsEnabled: !r2,
      viewModel: l2
    }), this.addHandles([this._slider.on("max-change", (e5) => this.emit("max-change", e5)), this._slider.on("min-change", (e5) => this.emit("min-change", e5)), this._slider.on("segment-drag", (e5) => {
      this._updateBarFills(), this.emit("segment-drag", e5);
    }), this._slider.on("thumb-change", (e5) => {
      this._updateBarFills(), this.emit("thumb-change", e5);
    }), this._slider.on("thumb-drag", (e5) => {
      this._updateBarFills(), this.emit("thumb-drag", e5);
    }), d(() => this.bins, (e5) => {
      if (e5 && this._histogram.bins) {
        const t2 = this._histogram.bins.length - e5.length;
        this._barElements.splice(-t2, t2);
      } else this._barElements = [];
      this._histogram.set({
        bins: e5
      }), this._updateBarFills(), this.scheduleRender();
    }), d(() => [this.max, this.min, this.rangeType, this.values], ([e5, t2]) => {
      this._histogram.set({
        max: e5,
        min: t2
      }), this._updateBarFills(), this.scheduleRender();
    }), d(() => [this.average, this.dataLines, this.standardDeviation, this.standardDeviationCount], ([e5]) => {
      this._histogram.set({
        average: e5,
        dataLines: this._getDataLines()
      });
    }), d(() => this.labelFormatFunction, (e5) => {
      this._histogram.set({
        labelFormatFunction: e5
      });
    }), d(() => this.hasTimeData, (e5) => {
      this._slider.set({
        rangeLabelInputsEnabled: !e5
      });
    })]);
  }
  get average() {
    return this.viewModel.average;
  }
  set average(e4) {
    this.viewModel.average = e4;
  }
  get bins() {
    return this.viewModel.bins;
  }
  set bins(e4) {
    this.viewModel.bins = e4;
  }
  get hasTimeData() {
    return this.viewModel.hasTimeData;
  }
  set hasTimeData(e4) {
    this.viewModel.hasTimeData = e4;
  }
  get icon() {
    return "arrow-double-horizontal";
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
  get labelFormatFunction() {
    return this.viewModel.labelFormatFunction;
  }
  set labelFormatFunction(e4) {
    this.viewModel.labelFormatFunction = e4;
  }
  get max() {
    return this.viewModel.max;
  }
  set max(e4) {
    this.viewModel.max = e4;
  }
  get min() {
    return this.viewModel.min;
  }
  set min(e4) {
    this.viewModel.min = e4;
  }
  get precision() {
    return this.viewModel.precision;
  }
  set precision(e4) {
    this.viewModel.precision = e4;
  }
  get rangeType() {
    return this.viewModel.rangeType;
  }
  set rangeType(e4) {
    this.viewModel.rangeType = e4;
  }
  get standardDeviation() {
    return this.viewModel.standardDeviation;
  }
  set standardDeviation(e4) {
    this.viewModel.standardDeviation = e4;
  }
  get values() {
    return this.viewModel.values;
  }
  set values(e4) {
    this.viewModel.values = e4;
  }
  generateWhereClause(e4) {
    return this.viewModel.generateWhereClause(e4);
  }
  render() {
    const {
      rangeType: e4,
      viewModel: t,
      label: i2
    } = this, r2 = this.classes(c.base, e3.widget, `${c.rangeTypePrefix}${e4}`, "disabled" === t.state ? e3.disabled : null);
    return n("div", {
      "aria-label": i2,
      class: r2
    }, "disabled" === t.state ? null : this._renderContent());
  }
  _renderContent() {
    return [this._renderHistogram(), this._renderSlider()];
  }
  _renderSlider() {
    return n("div", {
      class: c.sliderContainer,
      key: `${this.id}-slider-container`
    }, this._slider.render());
  }
  _renderHistogram() {
    return n("div", {
      class: c.histogramContainer
    }, this._histogram.render());
  }
  _getDataLines() {
    return [...this._getStandardDeviationDataLines(), ...this.dataLines || []];
  }
  _getStandardDeviationDataLines() {
    const {
      average: e4,
      standardDeviation: t,
      standardDeviationCount: i2
    } = this;
    return a2(t, e4, i2).map((e5) => ({
      value: e5
    }));
  }
  _updateBarFills() {
    this._barElements.forEach((e4, t) => this._updateBarFill(t, e4));
  }
  _updateBarFill(e4, t) {
    t.setAttribute("fill", this._getFillForBar(e4)?.toHex() ?? "");
  }
  _getFillForBar(e4) {
    const {
      bins: t,
      rangeType: i2,
      values: r2
    } = this;
    if (-1 === e4 || !t?.length || !i2 || !r2?.length) return null;
    const s2 = t[e4];
    if (!s2) return null;
    const {
      maxValue: a3,
      minValue: o
    } = s2, n3 = a3 - o, l2 = r2[0] > o && r2[0] < a3;
    switch (i2) {
      case "equal":
      case "not-equal":
        return this.includedBarColor;
      case "less-than":
      case "at-most":
        return l2 ? this._getBlendedColor((r2[0] - o) / n3) : a3 <= r2[0] ? this.includedBarColor : this.excludedBarColor;
      case "greater-than":
      case "at-least":
        return l2 ? this._getBlendedColor(1 - (r2[0] - o) / n3) : o >= r2[0] ? this.includedBarColor : this.excludedBarColor;
      case "between":
        if (2 === r2.length) return r2[0] > o && r2[0] < a3 ? this._getBlendedColor(1 - (r2[0] - o) / n3) : r2[1] > o && r2[1] < a3 ? this._getBlendedColor((r2[1] - o) / n3) : o >= r2[0] && a3 <= r2[1] ? this.includedBarColor : this.excludedBarColor;
        break;
      case "not-between":
        if (2 === r2.length) return r2[0] > o && r2[0] < a3 ? this._getBlendedColor((r2[0] - o) / n3) : r2[1] > o && r2[1] < a3 ? this._getBlendedColor(1 - (r2[1] - o) / n3) : o > r2[0] && a3 < r2[1] ? this.excludedBarColor : this.includedBarColor;
    }
    return this.includedBarColor;
  }
  _getBlendedColor(e4) {
    return u.blendColors(this.excludedBarColor, this.includedBarColor, e4);
  }
};
e([y()], v.prototype, "average", null), e([y()], v.prototype, "barCreatedFunction", void 0), e([y()], v.prototype, "bins", null), e([y()], v.prototype, "dataLines", void 0), e([y()], v.prototype, "dataLineCreatedFunction", void 0), e([y({
  type: u,
  json: {
    type: [N],
    write: true
  }
})], v.prototype, "excludedBarColor", void 0), e([y()], v.prototype, "hasTimeData", null), e([y({
  type: u,
  json: {
    type: [N],
    write: true
  }
})], v.prototype, "includedBarColor", void 0), e([y()], v.prototype, "icon", null), e([y()], v.prototype, "label", null), e([y()], v.prototype, "labelFormatFunction", null), e([y()], v.prototype, "max", null), e([y(), e2("esri/widgets/HistogramRangeSlider/t9n/HistogramRangeSlider")], v.prototype, "messages", void 0), e([y()], v.prototype, "min", null), e([y()], v.prototype, "precision", null), e([y()], v.prototype, "rangeType", null), e([y()], v.prototype, "standardDeviation", null), e([y()], v.prototype, "standardDeviationCount", void 0), e([y()], v.prototype, "values", null), e([y()], v.prototype, "viewModel", void 0), v = e([a("esri.widgets.HistogramRangeSlider")], v);
var b = v;
export {
  b as default
};
//# sourceMappingURL=HistogramRangeSlider-BGDLQMB3.js.map
