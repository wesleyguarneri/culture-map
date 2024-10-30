import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e3
} from "./chunk-FYGR4X6I.js";
import {
  B,
  e2
} from "./chunk-UVQYXHKM.js";
import {
  n
} from "./chunk-M5N6UHWJ.js";
import {
  m
} from "./chunk-ODFKYX74.js";
import {
  s
} from "./chunk-THZPD5CT.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/widgets/Histogram/HistogramViewModel.js
var s2 = class extends S {
  constructor(t) {
    super(t), this.average = null, this.bins = null, this.max = null, this.min = null;
  }
  get binRange() {
    const {
      bins: t
    } = this;
    return t && t.length > 1 ? t[t.length - 1].maxValue - t[0].minValue : 0;
  }
  set labelFormatFunction(t) {
    this._set("labelFormatFunction", t);
  }
  get range() {
    const {
      max: t,
      min: o
    } = this;
    return null != t && null != o ? t - o : 0;
  }
  get state() {
    const {
      bins: t,
      range: o
    } = this;
    return o > 0 && t?.length ? "ready" : "disabled";
  }
};
e([y()], s2.prototype, "average", void 0), e([y()], s2.prototype, "bins", void 0), e([y({
  readOnly: true
})], s2.prototype, "binRange", null), e([y()], s2.prototype, "labelFormatFunction", null), e([y()], s2.prototype, "max", void 0), e([y()], s2.prototype, "min", void 0), e([y({
  readOnly: true
})], s2.prototype, "range", null), e([y({
  readOnly: true
})], s2.prototype, "state", null), s2 = e([a("esri.widgets.Histogram.HistogramViewModel")], s2);
var n2 = s2;

// ../../../node_modules/@arcgis/core/widgets/Histogram.js
var u;
var h = "esri-histogram";
var c = {
  base: h,
  horizontalLayout: `${h}--horizontal`,
  verticalLayout: `${h}--vertical`,
  content: `${h}__content`,
  svg: `${h}__svg`,
  bar: `${h}__bar`,
  bars: `${h}__bars`,
  label: `${h}__label`,
  dataLines: `${h}__data-lines`,
  dataLinesSubgroup: `${h}__data-lines-subgroup`,
  dataLine: `${h}__data-line`,
  averageLabel: `${h}__average-label`,
  averageDataLine: `${h}__average-data-line`,
  averageSymbol: `${h}__average-symbol`
};
var g = u = class extends B {
  constructor(e4, t) {
    super(e4, t), this._bgFillId = `${this.id}-bg-fill`, this._containerNode = null, this._containerDimensions = {
      width: 0,
      height: 0
    }, this._defaultBarColor = "#d8d8d8", this.barCreatedFunction = null, this.dataLines = null, this.dataLineCreatedFunction = null, this.dataLineUpdatedFunction = null, this.messages = null, this.viewModel = new n2();
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
  get icon() {
    return "graph-histogram";
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
  set layout(e4) {
    "vertical" !== e4 && (e4 = "horizontal"), this._set("layout", e4);
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
  get state() {
    return this.viewModel.state;
  }
  static fromHistogramResult(e4) {
    const {
      bins: t,
      maxValue: i,
      minValue: r
    } = e4;
    return new u({
      bins: t,
      max: i,
      min: r
    });
  }
  render() {
    const {
      label: e4,
      layout: t,
      state: i
    } = this, r = this.classes(c.base, e3.widget, "horizontal" === t ? c.horizontalLayout : c.verticalLayout, "disabled" === i ? e3.disabled : null);
    return n("div", {
      afterCreate: this._afterContainerNodeCreate,
      "aria-label": e4,
      bind: this,
      class: r
    }, "ready" === i ? this._renderContent() : null);
  }
  _renderContent() {
    if (!this._containerNode) return;
    const e4 = this._bgFillId, t = `clip-path: url(#${e4})`;
    return n("div", {
      class: c.content
    }, n("svg", {
      class: c.svg,
      xmlns: "http://www.w3.org/2000/svg"
    }, n("defs", null, this._renderFillDefinition(e4)), n("g", {
      style: t
    }, this._renderBarsGroup()), this._renderLinesGroup()));
  }
  _renderBarsGroup() {
    return n("g", {
      class: this.classes(c.bars)
    }, this._renderBars());
  }
  _renderBars() {
    const {
      layout: e4,
      viewModel: {
        binRange: t,
        range: i
      }
    } = this;
    if (!t || !i) return;
    const r = t / i, {
      width: s3,
      height: a2
    } = this._containerDimensions;
    if (0 === a2 && 0 === s3) return;
    if (0 === a2 && 0 !== s3) return void this.scheduleRender();
    const [n3, o] = "vertical" === e4 ? [a2 * r, s3] : [a2, s3 * r];
    return this._getBarDimensions(n3, o).map(([e5, t2], i2) => this._renderBar(i2, e5, t2));
  }
  _renderBar(e4, t, i) {
    const {
      bins: r,
      layout: s3,
      max: a2,
      messages: n3,
      viewModel: {
        range: o
      }
    } = this;
    if (!r || null == a2) return;
    const {
      width: u2,
      height: h2
    } = this._containerDimensions, g2 = r.slice()[e4], {
      count: p2,
      maxValue: m2,
      minValue: _
    } = g2, b = a2 - m2, [v, L] = "vertical" === s3 ? [0, b * (h2 / o)] : [u2 - i - b * (u2 / o), h2 - t], f = s(n3.barLabel, {
      count: p2,
      maxValue: m2,
      minValue: _
    });
    return n("rect", {
      afterCreate: this._afterBarCreate,
      "aria-label": f,
      bind: this,
      class: c.bar,
      "data-index": e4,
      fill: this._defaultBarColor,
      height: t,
      role: "img",
      "shape-rendering": "crispEdges",
      "stroke-width": "0",
      width: i,
      x: v,
      y: L
    });
  }
  _renderLinesGroup() {
    return n("g", {
      class: this.classes(c.dataLines)
    }, this._renderAverageLine(), this._renderCustomLines());
  }
  _renderAverageLine() {
    const {
      average: e4
    } = this;
    if (null == e4) return;
    const t = [n("tspan", {
      class: this.classes(c.averageSymbol)
    }, "x̄ "), n("tspan", {
      class: this.classes(c.averageLabel)
    }, this.labelFormatFunction ? this.labelFormatFunction(e4, "average") : e4)];
    return n("g", {
      afterCreate: this._afterLinesSubgroupCreate,
      afterUpdate: this._afterLinesSubgroupUpdate,
      bind: this,
      class: this.classes(c.dataLinesSubgroup)
    }, n("title", {
      key: "title"
    }, e4), this._renderLine(e4, this.classes(c.averageDataLine)), this._renderLabel({
      label: t,
      value: e4
    }));
  }
  _renderCustomLines() {
    if (this.dataLines?.length) return this.dataLines.map((e4, t) => this._renderLineSubgroup(e4, t));
  }
  _renderLineSubgroup(e4, t) {
    const {
      value: i
    } = e4;
    return n("g", {
      afterCreate: this._afterLinesSubgroupCreate,
      afterUpdate: this._afterLinesSubgroupUpdate,
      bind: this,
      class: this.classes(c.dataLinesSubgroup),
      "data-index": t
    }, n("title", {
      key: "title"
    }, i), this._renderLine(i), this._renderLabel(e4));
  }
  _renderLine(e4, t) {
    const [i, r, s3, a2] = this._getLinePosition(e4);
    return n("line", {
      class: this.classes(c.dataLine, t),
      "shape-rendering": "crispEdges",
      x1: i,
      x2: r,
      y1: s3,
      y2: a2
    });
  }
  _renderLabel(e4, t) {
    const {
      label: i,
      value: r
    } = e4, [s3, a2] = this._getLabelPosition(r), n3 = 2;
    return n("text", {
      class: this.classes(c.label, t),
      "text-anchor": "end",
      transform: "horizontal" === this.layout ? "rotate(270)" : null,
      x: s3,
      y: a2 - n3
    }, i ?? "");
  }
  _renderFillDefinition(e4) {
    const {
      width: t,
      height: i
    } = this._containerDimensions;
    return n("clipPath", {
      id: e4
    }, n("rect", {
      height: i,
      width: t,
      x: "0",
      y: "0"
    }));
  }
  _afterContainerNodeCreate(e4) {
    this._containerNode = e4, this.addHandles(m(e4, (e5) => {
      const {
        width: t,
        height: i
      } = e5.contentRect;
      this._containerDimensions = {
        width: t,
        height: i
      };
    }));
  }
  _getIndexFromElement(e4) {
    const t = e4.dataset?.index, i = e4.getAttribute("data-index");
    return null != t ? parseInt(t, 10) : null != i ? parseInt(i, 10) : null;
  }
  _afterBarCreate(e4) {
    if (this.barCreatedFunction) {
      const t = this._getIndexFromElement(e4) ?? -1;
      this.barCreatedFunction(t, e4);
    }
  }
  _afterLinesSubgroupCreate(e4) {
    if (this.dataLineCreatedFunction) {
      const t = this._getIndexFromElement(e4), i = e4.childNodes[1], r = e4.childNodes[2] ? e4.childNodes[2] : null;
      this.dataLineCreatedFunction(i, r, t);
    }
  }
  _afterLinesSubgroupUpdate(e4) {
    if (this.dataLineUpdatedFunction) {
      const t = this._getIndexFromElement(e4), i = e4.childNodes[1], r = e4.childNodes[2] ? e4.childNodes[2] : null;
      this.dataLineUpdatedFunction(i, r, t);
    }
  }
  _getBarDimensions(e4, t) {
    const {
      bins: i,
      layout: r
    } = this, s3 = i ? i.map((e5) => e5.count) : [], a2 = Math.max.apply(Math, s3);
    return s3.map((i2) => "vertical" === r ? [e4 / s3.length, 0 !== a2 ? i2 / a2 * t : 0] : [0 !== a2 ? i2 / a2 * e4 : 0, t / s3.length]);
  }
  _getLinePosition(e4) {
    const {
      layout: t,
      min: i,
      viewModel: {
        range: r
      }
    } = this;
    if (null == i) return [0, 0, 0, 0];
    const s3 = Math.round((e4 - i) / r * 100) / 100, {
      width: a2,
      height: n3
    } = this._containerDimensions, [o, l] = [s3 * a2 || 1, n3 - s3 * n3 || 1];
    return "vertical" === t ? [0, "100%", l, l] : [o, o, "100%", 0];
  }
  _getLabelPosition(e4) {
    const {
      layout: t,
      min: i,
      viewModel: {
        range: r
      }
    } = this;
    if (null == i) return [0, 0];
    const s3 = Math.round((e4 - i) / r * 100) / 100, {
      width: a2,
      height: n3
    } = this._containerDimensions;
    return "vertical" === t ? [a2, n3 - s3 * n3] : [0, s3 * a2];
  }
};
e([y()], g.prototype, "_bgFillId", void 0), e([y()], g.prototype, "_containerNode", void 0), e([y()], g.prototype, "_containerDimensions", void 0), e([y()], g.prototype, "_defaultBarColor", void 0), e([y()], g.prototype, "average", null), e([y()], g.prototype, "barCreatedFunction", void 0), e([y()], g.prototype, "dataLines", void 0), e([y()], g.prototype, "dataLineCreatedFunction", void 0), e([y()], g.prototype, "dataLineUpdatedFunction", void 0), e([y()], g.prototype, "icon", null), e([y()], g.prototype, "label", null), e([y()], g.prototype, "labelFormatFunction", null), e([y({
  value: "horizontal"
})], g.prototype, "layout", null), e([y()], g.prototype, "max", null), e([y(), e2("esri/widgets/Histogram/t9n/Histogram")], g.prototype, "messages", void 0), e([y()], g.prototype, "min", null), e([y({
  readOnly: true
})], g.prototype, "state", null), e([y()], g.prototype, "viewModel", void 0), g = u = e([a("esri.widgets.Histogram")], g);
var p = g;

export {
  p
};
//# sourceMappingURL=chunk-2KOANOUX.js.map
