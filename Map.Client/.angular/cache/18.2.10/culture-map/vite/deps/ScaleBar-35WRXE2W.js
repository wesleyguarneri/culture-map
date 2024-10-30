import {
  e as e4
} from "./chunk-4YFNKQX7.js";
import "./chunk-2SHZAJ7S.js";
import {
  v,
  w
} from "./chunk-DABQKFI5.js";
import {
  e as e3
} from "./chunk-HBMA4SRU.js";
import {
  M
} from "./chunk-Z3GMSC63.js";
import "./chunk-F35MWZH7.js";
import "./chunk-ED7UGR2X.js";
import "./chunk-YA5CTHMT.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import {
  c
} from "./chunk-7ZJ6P7J7.js";
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
import {
  l
} from "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-7XMEZQ34.js";
import "./chunk-BDM2D6IC.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import "./chunk-HJJIIYFF.js";
import {
  m2 as m
} from "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import "./chunk-NYQ5CYNR.js";
import {
  R,
  _
} from "./chunk-O7UDKFOW.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import {
  $,
  N,
  j,
  s2 as s
} from "./chunk-JJS7PR2U.js";
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
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/widgets/ScaleBar/css.js
var e5 = "esri-scale-bar";
var n2 = {
  base: e5,
  labelContainer: `${e5}__label-container`,
  rulerLabelContainer: `${e5}__label-container--ruler`,
  lineLabelContainer: `${e5}__label-container--line`,
  topLabelContainer: `${e5}__label-container--top`,
  bottomLabelContainer: `${e5}__label-container--bottom`,
  label: `${e5}__label`,
  line: `${e5}__line`,
  topLine: `${e5}__line--top`,
  bottomLine: `${e5}__line--bottom`,
  ruler: `${e5}__ruler`,
  rulerBlock: `${e5}__ruler-block`,
  barContainer: `${e5}__bar-container`,
  rulerBarContainer: `${e5}__bar-container--ruler`,
  lineBarContainer: `${e5}__bar-container--line`
};

// ../../../node_modules/@arcgis/core/widgets/ScaleBar/ScaleBarViewModel.js
function g(e6) {
  return e6 > 0.5 ? {
    min: 0.5,
    max: 1
  } : e6 > 0.2 ? {
    min: 0.2,
    max: 0.5
  } : {
    min: 0.1,
    max: 0.2
  };
}
function w2(e6, t) {
  switch (t) {
    case "metric":
      return e6 > 1e3 ? {
        distance: j(e6, "meters", "kilometers"),
        unit: "kilometer"
      } : e6 > 1 ? {
        distance: e6,
        unit: "meter"
      } : e6 > 0.01 ? {
        distance: j(e6, "meters", "centimeters"),
        unit: "centimeter"
      } : {
        distance: j(e6, "meters", "millimeters"),
        unit: "millimeter"
      };
    case "imperial":
      return e6 > 1609.344 ? {
        distance: j(e6, "meters", "miles"),
        unit: "mile"
      } : e6 > 0.3048 ? {
        distance: j(e6, "meters", "feet"),
        unit: "foot"
      } : {
        distance: j(e6, "meters", "inches"),
        unit: "inch"
      };
  }
}
function y2(e6) {
  const {
    isWebMercator: t,
    wkt: r,
    wkt2: s2
  } = e6;
  return t || ((s2 || r)?.includes("WGS_1984_Web_Mercator") ?? false);
}
function j2({
  state: {
    paddedViewState: e6
  },
  spatialReference: t,
  width: r
}) {
  return t.isWrappable && e6.worldScreenWidth < r;
}
function S2(e6, t) {
  const {
    x: r,
    y: s2
  } = e6 ? R(t, true) : t;
  return [r, s2];
}
var v2 = class extends S {
  constructor(e6) {
    super(e6), this.scaleComputedFrom = c(), this.view = null;
  }
  get state() {
    return this.view?.ready && "2d" === this.view?.type ? "ready" : "disabled";
  }
  getScaleBarProperties(e6, t) {
    if ("disabled" === this.state || isNaN(e6) || !t || !this.view) return null;
    const r = this._getDistanceInMeters();
    return null == r ? null : this._getScaleBarProps(e6, r, t);
  }
  _getDistanceInMeters() {
    const {
      state: e6,
      spatialReference: t
    } = this.view;
    if (!N(t)) return null;
    const {
      isGeographic: r
    } = t, i = y2(t);
    if (!r && !i) {
      return e6.extent.width * ($(t) ?? 1);
    }
    const [o, n3] = this._getScaleMeasuringPoints(), p = i || r && !w(t) ? f.WGS84 : t, u = new m({
      paths: [[S2(i, o), S2(i, n3)]],
      spatialReference: p
    }), h2 = M(u, 10);
    let g2;
    try {
      [g2] = v([h2], "meters");
    } catch {
      return null;
    }
    return g2;
  }
  _getScaleMeasuringPoints() {
    const e6 = this.view, {
      width: t,
      height: s2,
      position: i,
      spatialReference: o
    } = e6;
    if (j2(e6)) {
      const e7 = s(o), {
        valid: t2
      } = e7;
      return [new _(t2[0], 0, o), new _(t2[1], 0, o)];
    }
    let n3 = this.scaleComputedFrom.y - i[1];
    n3 > s2 ? n3 = s2 : n3 < 0 && (n3 = 0);
    const a2 = c(0, n3), c2 = c(t, n3);
    return [e6.toMap(a2), e6.toMap(c2)];
  }
  _getScaleBarProps(e6, t, r) {
    const s2 = this.view, i = e6 * t / (j2(s2) ? s2.state.paddedViewState.worldScreenWidth : s2.width);
    if (i < 1e-3) return null;
    const o = w2(i, r), {
      distance: n3,
      unit: a2
    } = o;
    let c2 = n3, m3 = 0;
    for (; c2 >= 1; ) c2 /= 10, m3++;
    const {
      min: l2,
      max: p
    } = g(c2), u = p / c2 >= c2 / l2 ? l2 : p;
    return {
      length: e6 * (u / c2),
      value: 10 ** m3 * u,
      unit: a2
    };
  }
};
e([y()], v2.prototype, "scaleComputedFrom", void 0), e([y({
  readOnly: true
})], v2.prototype, "state", null), e([y()], v2.prototype, "view", void 0), v2 = e([a("esri.widgets.ScaleBar.ScaleBarViewModel")], v2);
var M2 = v2;

// ../../../node_modules/@arcgis/core/widgets/ScaleBar.js
function m2(e6, t) {
  return l(e6, {
    style: "unit",
    unit: t,
    unitDisplay: "short"
  });
}
var h = class extends B {
  constructor(e6, t) {
    super(e6, t), this.messages = null, this.style = "line", this.viewModel = new M2();
  }
  initialize() {
    this.addHandles(d(() => {
      const {
        view: e6
      } = this;
      return [e6?.stationary, e6?.center, e6?.scale, e6?.zoom];
    }, ([e6]) => {
      e6 && this.scheduleRender();
    }));
  }
  get icon() {
    return "actual-size";
  }
  set icon(e6) {
    this._overrideIfSome("icon", e6);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e6) {
    this._overrideIfSome("label", e6);
  }
  get unit() {
    return this._defaultUnit;
  }
  set unit(e6) {
    this._overrideIfSome("unit", e6);
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e6) {
    this.viewModel.view = e6;
  }
  render() {
    const e6 = "disabled" === this.viewModel.state, t = {
      [e3.disabled]: e6
    };
    let r, s2;
    if (!e6) {
      const {
        unit: e7,
        style: t2
      } = this, i = "metric" === e7 || "dual" === e7, o = 100, l2 = "dual" === e7 ? "line" : t2;
      if ("imperial" === e7 || "dual" === e7) {
        const e8 = this.viewModel.getScaleBarProperties(o, "imperial");
        e8 && (s2 = "ruler" === l2 ? this._renderRuler(e8) : this._renderLine(e8, "bottom"));
      }
      if (i) {
        const e8 = this.viewModel.getScaleBarProperties(o, "metric");
        e8 && (r = "ruler" === l2 ? this._renderRuler(e8) : this._renderLine(e8, "top"));
      }
    }
    return n("div", {
      afterCreate: this._handleRootCreateOrUpdate,
      afterUpdate: this._handleRootCreateOrUpdate,
      bind: this,
      class: this.classes(n2.base, e3.widget, t)
    }, r, s2);
  }
  _renderRuler(e6) {
    const {
      length: t,
      unit: r,
      value: s2
    } = e6, i = Math.round(t), o = m2(s2, r);
    return n("div", {
      class: this.classes(n2.barContainer, n2.rulerBarContainer),
      key: n2.rulerBarContainer
    }, n("div", {
      class: n2.ruler,
      styles: {
        width: `${i}px`
      }
    }, n("div", {
      class: n2.rulerBlock
    }), n("div", {
      class: n2.rulerBlock
    }), n("div", {
      class: n2.rulerBlock
    }), n("div", {
      class: n2.rulerBlock
    })), n("div", {
      class: this.classes(n2.labelContainer, n2.rulerLabelContainer)
    }, n("div", {
      class: n2.label
    }, "0"), n("div", {
      class: n2.label
    }, o)));
  }
  _renderLine(e6, t) {
    const {
      length: r,
      unit: s2,
      value: i
    } = e6, o = Math.round(r), l2 = m2(i, s2), a2 = {
      [n2.topLabelContainer]: "top" === t,
      [n2.bottomLabelContainer]: "bottom" === t
    }, d2 = n("div", {
      class: this.classes(n2.labelContainer, n2.lineLabelContainer, a2),
      key: n2.labelContainer
    }, n("div", {
      class: n2.label
    }, l2)), c2 = {
      [n2.topLine]: "top" === t,
      [n2.bottomLine]: "bottom" === t
    }, p = n("div", {
      class: this.classes(n2.line, c2),
      key: n2.line,
      styles: {
        width: `${o}px`
      }
    });
    return n("div", {
      class: this.classes(n2.barContainer, n2.lineBarContainer),
      key: n2.lineBarContainer
    }, [p, d2]);
  }
  _handleRootCreateOrUpdate(e6) {
    if (!this.viewModel) return;
    const {
      scaleComputedFrom: t
    } = this.viewModel, s2 = e6.getBoundingClientRect(), i = s2.left + window.pageXOffset, o = s2.top + window.pageYOffset, l2 = c(i, o);
    (l2.x !== t.x || l2.y !== t.y) && (this.viewModel.scaleComputedFrom = l2);
  }
};
e([y(e4)], h.prototype, "_defaultUnit", void 0), e([y()], h.prototype, "icon", null), e([y()], h.prototype, "label", null), e([y(), e2("esri/widgets/ScaleBar/t9n/ScaleBar")], h.prototype, "messages", void 0), e([y({
  type: ["ruler", "line"]
})], h.prototype, "style", void 0), e([y({
  type: ["metric", "imperial", "dual"]
})], h.prototype, "unit", null), e([y()], h.prototype, "view", null), e([y()], h.prototype, "viewModel", void 0), h = e([a("esri.widgets.ScaleBar")], h);
var v3 = h;
export {
  v3 as default
};
//# sourceMappingURL=ScaleBar-35WRXE2W.js.map
