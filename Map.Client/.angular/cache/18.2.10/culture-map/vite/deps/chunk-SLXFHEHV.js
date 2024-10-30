import {
  e as e3
} from "./chunk-HBMA4SRU.js";
import {
  B,
  e2,
  r
} from "./chunk-WYMXVOAT.js";
import {
  n
} from "./chunk-K7TO5IIO.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  d
} from "./chunk-HJY2YILU.js";

// ../../../node_modules/@arcgis/core/widgets/Zoom/ZoomConditions2D.js
var r2 = class extends S {
  get canZoomIn() {
    const o = this.view?.ready;
    if (!o) return false;
    const t = this.view?.constraints?.effectiveMaxScale;
    return 0 === t || this._scale > t;
  }
  get canZoomOut() {
    const {
      view: o
    } = this, t = o?.ready;
    if (!t) return false;
    const e4 = o.constraints?.effectiveMinScale;
    return 0 === e4 || this._scale < e4;
  }
  get _scale() {
    const o = this.view?.animation?.target;
    return (o && "then" in o ? void 0 : o?.scale) ?? this.view?.scale ?? 0;
  }
};
e([y({
  readOnly: true
})], r2.prototype, "canZoomIn", null), e([y({
  readOnly: true
})], r2.prototype, "canZoomOut", null), e([y()], r2.prototype, "view", void 0), e([y()], r2.prototype, "_scale", null), r2 = e([a("esri.widgets.Zoom.ZoomConditions2D")], r2);
var c = r2;

// ../../../node_modules/@arcgis/core/widgets/Zoom/ZoomConditions3D.js
var s = class extends S {
  get canZoomIn() {
    return !!this.view.ready;
  }
  get canZoomOut() {
    return !!this.view.ready;
  }
};
e([y({
  readOnly: true
})], s.prototype, "canZoomIn", null), e([y({
  readOnly: true
})], s.prototype, "canZoomOut", null), e([y()], s.prototype, "view", void 0), s = e([a("esri.widgets.Zoom.ZoomConditions3D")], s);
var c2 = s;

// ../../../node_modules/@arcgis/core/widgets/Zoom/ZoomViewModel.js
var m = class extends S {
  constructor(o) {
    super(o);
  }
  destroy() {
    this.view = null;
  }
  get canZoomIn() {
    return null != this._zoomConditions && this._zoomConditions.canZoomIn;
  }
  get canZoomOut() {
    return null != this._zoomConditions && this._zoomConditions?.canZoomOut;
  }
  get state() {
    return this.view?.ready ? "ready" : "disabled";
  }
  set view(o) {
    o ? "2d" === o.type ? this._zoomConditions = new c({
      view: o
    }) : "3d" === o.type && (this._zoomConditions = new c2({
      view: o
    })) : this._zoomConditions = null, this._set("view", o);
  }
  zoomIn() {
    if (!this.canZoomIn) return;
    const o = this.view;
    "2d" === o.type ? o.mapViewNavigation.zoomIn() : d(o.goTo({
      zoomFactor: 2
    }));
  }
  zoomOut() {
    if (!this.canZoomOut) return;
    const o = this.view;
    "2d" === o.type ? o.mapViewNavigation.zoomOut() : d(o.goTo({
      zoomFactor: 0.5
    }));
  }
};
e([y()], m.prototype, "_zoomConditions", void 0), e([y()], m.prototype, "canZoomIn", null), e([y()], m.prototype, "canZoomOut", null), e([y({
  readOnly: true
})], m.prototype, "state", null), e([y()], m.prototype, "view", null), m = e([a("esri.widgets.Zoom.ZoomViewModel")], m);
var p = m;

// ../../../node_modules/@arcgis/core/widgets/Zoom.js
var m2 = {
  base: "esri-zoom",
  horizontalLayout: "esri-zoom--horizontal"
};
var c3 = class extends B {
  constructor(o, t) {
    super(o, t), this.messages = null, this.viewModel = new p(), this.zoomIn = () => this.viewModel.zoomIn(), this.zoomOut = () => this.viewModel.zoomOut();
  }
  loadDependencies() {
    return r({
      button: () => import("./calcite-button-TT4KT5XH.js")
    });
  }
  get icon() {
    return "magnifying-glass-plus";
  }
  set icon(o) {
    this._overrideIfSome("icon", o);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(o) {
    this._overrideIfSome("label", o);
  }
  set layout(o) {
    "horizontal" !== o && (o = "vertical"), this._set("layout", o);
  }
  set view(o) {
    this.viewModel.view = o;
  }
  get view() {
    return this.viewModel.view;
  }
  render() {
    const o = {
      [m2.horizontalLayout]: "horizontal" === this.layout
    }, {
      canZoomIn: t,
      canZoomOut: e4
    } = this.viewModel, {
      zoomIn: s2,
      zoomOut: i
    } = this.messages;
    return n("div", {
      class: this.classes(m2.base, e3.widget, o)
    }, n("calcite-button", {
      class: e3.widgetButton,
      disabled: !t,
      iconStart: "plus",
      kind: "neutral",
      label: s2,
      onclick: this.zoomIn,
      title: s2
    }), n("calcite-button", {
      class: e3.widgetButton,
      disabled: !e4,
      iconStart: "minus",
      kind: "neutral",
      label: i,
      onclick: this.zoomOut,
      title: i
    }));
  }
};
e([y()], c3.prototype, "icon", null), e([y()], c3.prototype, "label", null), e([y({
  value: "vertical"
})], c3.prototype, "layout", null), e([y(), e2("esri/widgets/Zoom/t9n/Zoom")], c3.prototype, "messages", void 0), e([y()], c3.prototype, "view", null), e([y({
  type: p
})], c3.prototype, "viewModel", void 0), c3 = e([a("esri.widgets.Zoom")], c3);
var p2 = c3;

export {
  p,
  p2
};
//# sourceMappingURL=chunk-SLXFHEHV.js.map
