import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Gt,
  Y,
  i,
  ni,
  r,
  w,
  x
} from "./chunk-NB5HU2BF.js";

// ../../../node_modules/@arcgis/core/chunks/ResponsiveTheme.js
var l = class extends ni {
  setupDefaultRules() {
    super.setupDefaultRules(), this.rule("InterfaceColors").setAll({
      stroke: Gt.fromHex(0),
      fill: Gt.fromHex(2829099),
      primaryButton: Gt.lighten(Gt.fromHex(6788316), -0.2),
      primaryButtonHover: Gt.lighten(Gt.fromHex(6779356), -0.2),
      primaryButtonDown: Gt.lighten(Gt.fromHex(6872181), -0.2),
      primaryButtonActive: Gt.lighten(Gt.fromHex(6872182), -0.2),
      primaryButtonText: Gt.fromHex(16777215),
      primaryButtonStroke: Gt.lighten(Gt.fromHex(6788316), -0.2),
      secondaryButton: Gt.fromHex(3881787),
      secondaryButtonHover: Gt.lighten(Gt.fromHex(3881787), 0.1),
      secondaryButtonDown: Gt.lighten(Gt.fromHex(3881787), 0.15),
      secondaryButtonActive: Gt.lighten(Gt.fromHex(3881787), 0.2),
      secondaryButtonText: Gt.fromHex(12303291),
      secondaryButtonStroke: Gt.lighten(Gt.fromHex(3881787), -0.2),
      grid: Gt.fromHex(12303291),
      background: Gt.fromHex(0),
      alternativeBackground: Gt.fromHex(16777215),
      text: Gt.fromHex(16777215),
      alternativeText: Gt.fromHex(0),
      disabled: Gt.fromHex(11382189),
      positive: Gt.fromHex(5288704),
      negative: Gt.fromHex(11730944)
    });
  }
};
var o = class _o extends ni {
  constructor(e, t) {
    super(e, t), Object.defineProperty(this, "_dp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(this, "responsiveRules", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    }), this._dp = new Y([this._root._rootContainer.onPrivate("width", (e2) => {
      this._isUsed() && this._maybeApplyRules();
    }), this._root._rootContainer.onPrivate("height", (e2) => {
      this._isUsed() && this._maybeApplyRules();
    })]);
  }
  static widthXXS(e, t) {
    return e <= _o.XXS;
  }
  static widthXS(e, t) {
    return e <= _o.XS;
  }
  static widthS(e, t) {
    return e <= _o.S;
  }
  static widthM(e, t) {
    return e <= _o.M;
  }
  static widthL(e, t) {
    return e <= _o.L;
  }
  static widthXL(e, t) {
    return e <= _o.XL;
  }
  static widthXXL(e, t) {
    return e <= _o.XXL;
  }
  static heightXXS(e, t) {
    return t <= _o.XXS;
  }
  static heightXS(e, t) {
    return t <= _o.XS;
  }
  static heightS(e, t) {
    return t <= _o.S;
  }
  static heightM(e, t) {
    return t <= _o.M;
  }
  static heightL(e, t) {
    return t <= _o.L;
  }
  static heightXL(e, t) {
    return t <= _o.XL;
  }
  static heightXXL(e, t) {
    return t <= _o.XXL;
  }
  static isXXS(e, t) {
    return e <= _o.XXS && t <= _o.XXS;
  }
  static isXS(e, t) {
    return e <= _o.XS && t <= _o.XS;
  }
  static isS(e, t) {
    return e <= _o.S && t <= _o.S;
  }
  static isM(e, t) {
    return e <= _o.M && t <= _o.M;
  }
  static isL(e, t) {
    return e <= _o.L && t <= _o.L;
  }
  static isXL(e, t) {
    return e <= _o.XL && t <= _o.XL;
  }
  static isXXL(e, t) {
    return e <= _o.XXL && t <= _o.XXL;
  }
  static maybeXXS(e, t) {
    return e <= _o.XXS || t <= _o.XXS;
  }
  static maybeXS(e, t) {
    return e <= _o.XS || t <= _o.XS;
  }
  static maybeS(e, t) {
    return e <= _o.S || t <= _o.S;
  }
  static maybeM(e, t) {
    return e <= _o.M || t <= _o.M;
  }
  static maybeL(e, t) {
    return e <= _o.L || t <= _o.L;
  }
  static maybeXL(e, t) {
    return e <= _o.XL || t <= _o.XL;
  }
  static maybeXXL(e, t) {
    return e <= _o.XXL || t <= _o.XXL;
  }
  static newEmpty(e) {
    return new this(e, true);
  }
  addRule(e) {
    return e.name && !e.template && (e.template = this.rule(e.name, e.tags)), this.responsiveRules.push(e), this._maybeApplyRule(e), e;
  }
  removeRule(e) {
    x(this.responsiveRules, e);
  }
  dispose() {
    this._dp && this._dp.dispose();
  }
  _isUsed() {
    return -1 !== this._root._rootContainer.get("themes").indexOf(this);
  }
  _maybeApplyRules() {
    w(this.responsiveRules, (e) => {
      this._maybeUnapplyRule(e);
    }), w(this.responsiveRules, (e) => {
      this._maybeApplyRule(e);
    });
  }
  _maybeApplyRule(e) {
    if (e.applied) return;
    const t = this._root._rootContainer.getPrivate("width"), i2 = this._root._rootContainer.getPrivate("height");
    e.relevant.call(e, t, i2) && (e.applied = true, e.template && e.settings && e.template.setAll(e.settings), e.applying && e.applying.call(e));
  }
  _maybeUnapplyRule(e) {
    if (!e.applied) return;
    const t = this._root._rootContainer.getPrivate("width"), i2 = this._root._rootContainer.getPrivate("height");
    e.relevant.call(e, t, i2) || (e.applied = false, e.template && e.template.removeAll(), e.removing && e.removing.call(e));
  }
  setupDefaultRules() {
    super.setupDefaultRules();
    const e = (e2) => this.addRule(e2);
    e({
      name: "Chart",
      relevant: _o.widthXXS,
      settings: {
        paddingLeft: 0,
        paddingRight: 0
      }
    }), e({
      name: "Chart",
      relevant: _o.heightXXS,
      settings: {
        paddingTop: 0,
        paddingBottom: 0
      }
    }), e({
      name: "Bullet",
      relevant: _o.isXS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "Legend",
      relevant: _o.isXS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "HeatLegend",
      tags: ["vertical"],
      relevant: _o.widthXS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "HeatLegend",
      tags: ["horizontal"],
      relevant: _o.heightXS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "Label",
      tags: ["heatlegend", "start"],
      relevant: _o.maybeXS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "Label",
      tags: ["heatlegend", "end"],
      relevant: _o.maybeXS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "Button",
      tags: ["resize"],
      relevant: _o.maybeXS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "AxisRendererX",
      relevant: _o.heightXS,
      settings: {
        inside: true
      }
    }), e({
      name: "AxisRendererY",
      relevant: _o.widthXS,
      settings: {
        inside: true
      }
    }), e({
      name: "AxisRendererXLabel",
      relevant: _o.heightXS,
      settings: {
        minPosition: 0.1,
        maxPosition: 0.9
      }
    }), e({
      name: "AxisLabel",
      tags: ["y"],
      relevant: _o.widthXS,
      settings: {
        centerY: r,
        maxPosition: 0.9
      }
    }), e({
      name: "AxisLabel",
      tags: ["x"],
      relevant: _o.heightXXS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "AxisLabel",
      tags: ["x", "minor"],
      relevant: _o.widthXXL,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "AxisLabel",
      tags: ["y"],
      relevant: _o.widthXXS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "AxisLabel",
      tags: ["y", "minor"],
      relevant: _o.heightXXL,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "AxisTick",
      tags: ["x"],
      relevant: _o.heightXS,
      settings: {
        inside: true,
        minPosition: 0.1,
        maxPosition: 0.9
      }
    }), e({
      name: "AxisTick",
      tags: ["y"],
      relevant: _o.widthXXS,
      settings: {
        inside: true,
        minPosition: 0.1,
        maxPosition: 0.9
      }
    }), e({
      name: "Grid",
      relevant: _o.maybeXXS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "RadialLabel",
      tags: ["radial"],
      relevant: _o.maybeXS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "RadialLabel",
      tags: ["circular"],
      relevant: _o.maybeS,
      settings: {
        inside: true
      }
    }), e({
      name: "AxisTick",
      relevant: _o.maybeS,
      settings: {
        inside: true
      }
    }), e({
      name: "RadialLabel",
      tags: ["circular"],
      relevant: _o.maybeXS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "AxisTick",
      tags: ["circular"],
      relevant: _o.maybeXS,
      settings: {
        inside: true
      }
    }), e({
      name: "PieChart",
      relevant: _o.maybeXS,
      settings: {
        radius: i(99)
      }
    }), e({
      name: "PieChart",
      relevant: _o.widthM,
      settings: {
        radius: i(99)
      }
    }), e({
      name: "RadialLabel",
      tags: ["pie"],
      relevant: _o.maybeXS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "RadialLabel",
      tags: ["pie"],
      relevant: _o.widthM,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "Tick",
      tags: ["pie"],
      relevant: _o.maybeXS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "Tick",
      tags: ["pie"],
      relevant: _o.widthM,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "FunnelSeries",
      relevant: _o.widthM,
      settings: {
        alignLabels: false
      }
    }), e({
      name: "Label",
      tags: ["funnel", "vertical"],
      relevant: _o.widthL,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "Tick",
      tags: ["funnel", "vertical"],
      relevant: _o.widthL,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "Label",
      tags: ["funnel", "horizontal"],
      relevant: _o.heightS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "Tick",
      tags: ["funnel", "horizontal"],
      relevant: _o.heightS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "PyramidSeries",
      relevant: _o.widthM,
      settings: {
        alignLabels: false
      }
    }), e({
      name: "Label",
      tags: ["pyramid", "vertical"],
      relevant: _o.widthL,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "Tick",
      tags: ["pyramid", "vertical"],
      relevant: _o.widthL,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "Label",
      tags: ["pyramid", "horizontal"],
      relevant: _o.heightS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "Tick",
      tags: ["pyramid", "horizontal"],
      relevant: _o.heightS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "PictorialStackedSeries",
      relevant: _o.widthM,
      settings: {
        alignLabels: false
      }
    }), e({
      name: "Label",
      tags: ["pictorial", "vertical"],
      relevant: _o.widthL,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "Tick",
      tags: ["pictorial", "vertical"],
      relevant: _o.widthL,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "Label",
      tags: ["pictorial", "horizontal"],
      relevant: _o.heightS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "Tick",
      tags: ["pictorial", "horizontal"],
      relevant: _o.heightS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "Label",
      tags: ["flow", "horizontal"],
      relevant: _o.widthS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "Label",
      tags: ["flow", "vertical"],
      relevant: _o.heightS,
      settings: {
        forceHidden: true
      }
    }), e({
      name: "Chord",
      relevant: _o.maybeXS,
      settings: {
        radius: i(99)
      }
    }), e({
      name: "Label",
      tags: ["hierarchy", "node"],
      relevant: _o.maybeXS,
      settings: {
        forceHidden: true
      }
    });
  }
};
Object.defineProperty(o, "XXS", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 100
}), Object.defineProperty(o, "XS", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 200
}), Object.defineProperty(o, "S", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 300
}), Object.defineProperty(o, "M", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 400
}), Object.defineProperty(o, "L", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 600
}), Object.defineProperty(o, "XL", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 800
}), Object.defineProperty(o, "XXL", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 1e3
});

export {
  l,
  o
};
//# sourceMappingURL=chunk-NXKBE36M.js.map
