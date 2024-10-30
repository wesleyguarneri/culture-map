import {
  l
} from "./chunk-PNAY7MWN.js";
import {
  B
} from "./chunk-WYMXVOAT.js";
import {
  n
} from "./chunk-K7TO5IIO.js";
import {
  d
} from "./chunk-6WHTZNUH.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  A
} from "./chunk-HJY2YILU.js";

// ../../../node_modules/@arcgis/core/widgets/Spinner/SpinnerViewModel.js
var t = class extends l {
  constructor(o) {
    super(o), this.visible = false;
  }
};
e([y()], t.prototype, "visible", void 0), t = e([a("esri.widgets.Spinner.SpinnerViewModel")], t);
var p = t;

// ../../../node_modules/@arcgis/core/widgets/Spinner.js
var a2 = "esri-spinner";
var c = {
  base: a2,
  spinnerStart: `${a2}--start`,
  spinnerFinish: `${a2}--finish`
};
var p2 = class extends B {
  constructor(i, e2) {
    super(i, e2), this._animationDelay = 500, this._animationPromise = null, this.viewModel = new p();
  }
  initialize() {
    this.addHandles(d(() => this.visible, (i) => this._visibleChange(i)));
  }
  destroy() {
    this._animationPromise = null;
  }
  get location() {
    return this.viewModel.location;
  }
  set location(i) {
    this.viewModel.location = i;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(i) {
    this.viewModel.view = i;
  }
  get visible() {
    return this.viewModel.visible;
  }
  set visible(i) {
    this.viewModel.visible = i;
  }
  show(i) {
    const {
      location: e2,
      promise: t2
    } = i ?? {};
    e2 && (this.viewModel.location = e2), this.visible = true;
    const s = () => this.hide();
    t2 && t2.catch(() => {
    }).then(s);
  }
  hide() {
    this.visible = false;
  }
  render() {
    const {
      visible: i
    } = this, {
      screenLocation: e2
    } = this.viewModel, t2 = !!e2, s = i && t2, o = !i && t2, r = {
      [c.spinnerStart]: s,
      [c.spinnerFinish]: o
    }, n2 = this._getPositionStyles();
    return n("div", {
      class: this.classes(c.base, r),
      styles: n2
    });
  }
  _visibleChange(i) {
    if (i) return void (this.viewModel.screenLocationEnabled = true);
    const t2 = A(this._animationDelay);
    this._animationPromise = t2, t2.catch(() => {
    }).then(() => {
      this._animationPromise === t2 && (this.viewModel.screenLocationEnabled = false, this._animationPromise = null);
    });
  }
  _getPositionStyles() {
    const {
      screenLocation: i,
      view: e2
    } = this.viewModel;
    if (null == e2 || null == i) return {};
    const {
      padding: t2
    } = e2;
    return {
      left: i.x - t2.left + "px",
      top: i.y - t2.top + "px"
    };
  }
};
e([y()], p2.prototype, "location", null), e([y()], p2.prototype, "view", null), e([y({
  type: p
})], p2.prototype, "viewModel", void 0), e([y()], p2.prototype, "visible", null), p2 = e([a("esri.widgets.Spinner")], p2);
var h = p2;

export {
  p,
  h
};
//# sourceMappingURL=chunk-BFBXDOCU.js.map
