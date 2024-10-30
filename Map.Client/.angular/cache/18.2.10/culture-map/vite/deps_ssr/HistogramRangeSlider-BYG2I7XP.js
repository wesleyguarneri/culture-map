import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  p
} from "./chunk-2KOANOUX.js";
import {
  A,
  l
} from "./chunk-EO43B5GN.js";
import {
  a as a2,
  r,
  s
} from "./chunk-M7AKPZST.js";
import "./chunk-HZS5HO34.js";
import "./chunk-QBSYSL2F.js";
import "./chunk-2AZDYW2O.js";
import {
  e as e3
} from "./chunk-FYGR4X6I.js";
import "./chunk-5ZLERKFB.js";
import "./chunk-62NDSO75.js";
import "./chunk-ARN5GJBK.js";
import "./chunk-EPLJRYUV.js";
import "./chunk-VYRCS5VR.js";
import "./chunk-EKHRAAS6.js";
import "./chunk-WVSTX2NW.js";
import "./chunk-BKSTWG4S.js";
import "./chunk-FSG7HOZQ.js";
import "./chunk-GBJYL7OX.js";
import "./chunk-GHKVDSKU.js";
import "./chunk-NVOJILW6.js";
import "./chunk-KYPTWEOO.js";
import "./chunk-WVFB3H4O.js";
import "./chunk-C7BQE556.js";
import "./chunk-ZREJ3Y2F.js";
import "./chunk-IR6CVPPC.js";
import "./chunk-BBUQOCRA.js";
import "./chunk-YBUJLIWZ.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-VOOO6FU5.js";
import "./chunk-IUPJR3FF.js";
import "./chunk-TGZW6QWO.js";
import "./chunk-OYIDHTXG.js";
import {
  u
} from "./chunk-KUBMHTYA.js";
import "./chunk-42ZAWY2C.js";
import "./chunk-TVHVZK5G.js";
import "./chunk-P2MUOE6G.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-YCXNHEGB.js";
import "./chunk-CSATD3VX.js";
import "./chunk-NXXQ35YM.js";
import "./chunk-7V4JSBFA.js";
import "./chunk-JEFPXTYT.js";
import "./chunk-MVS2BECH.js";
import "./chunk-ASCK5HJ5.js";
import "./chunk-5X5U7R6O.js";
import "./chunk-XNLAOXPY.js";
import "./chunk-ZT7V2AVD.js";
import "./chunk-C2OXE4NQ.js";
import "./chunk-KOI252FF.js";
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
  e2
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
import "./chunk-KETDH2J4.js";
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
import "./chunk-G73HQZEL.js";
import {
  d
} from "./chunk-LZSLQ24Q.js";
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
  N,
  a3 as a
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import "./chunk-L4CMR4WM.js";
import "./chunk-7JIACICA.js";
import "./chunk-IE4UBD3F.js";
import "./chunk-IAO6HACY.js";
import "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=HistogramRangeSlider-BYG2I7XP.js.map
