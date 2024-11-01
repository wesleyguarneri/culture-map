import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  r
} from "./chunk-XVGNFXIX.js";
import {
  l
} from "./chunk-S5FY2EPM.js";
import {
  A,
  d
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
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

// ../../../node_modules/@arcgis/core/widgets/ElevationProfile/support/HoveredPoints.js
var a2 = class extends S {
  constructor(o) {
    super(o), this._hoveredPoints = new V();
  }
  initialize() {
    this.addHandles(d(() => this._hoveredPoints.toArray().map(({
      anchor: o,
      element: e2
    }) => ({
      screenLocation: o.screenLocation,
      element: e2
    })), (o) => {
      for (const {
        screenLocation: e2,
        element: t
      } of o) e2 && (t.style.transform = `translate(${e2.x}px, ${e2.y}px)`);
    }, A));
  }
  destroy() {
    this._hoveredPoints.drain((o) => this._destroyHoveredPoint(o));
  }
  update(o) {
    const e2 = this.view, t = this._hoveredPoints, r2 = o.length;
    for (; this._hoveredPoints.length > r2; ) this._destroyHoveredPoint(this._hoveredPoints.pop());
    for (; this._hoveredPoints.length < r2; ) {
      const o2 = this._makeHoveredPoint();
      t.push(o2), e2.surface?.appendChild(o2.element);
    }
    for (let s = 0; s < r2; ++s) {
      const e3 = t.at(r2 - 1 - s), i = o[s];
      this._updateHoveredPoint(e3, i);
    }
  }
  _makeHoveredPoint() {
    const {
      size: o,
      borderStyle: e2,
      borderColor: t,
      borderWidth: r2,
      boxShadow: s
    } = r().hoveredPointsStyle, i = this.view, n = new l({
      view: i,
      screenLocationEnabled: true
    }), a3 = document.createElement("div"), p = a3.style;
    return p.position = "absolute", p.top = "0", p.left = "0", p.contain = "strict", p.boxSizing = "border-box", p.width = `${o}px`, p.height = `${o}px`, p.marginTop = `-${o / 2}px`, p.marginLeft = `-${o / 2}px`, p.border = `${e2} ${r2}px ${t}`, p.borderRadius = `${o}px`, p.boxShadow = s, {
      anchor: n,
      element: a3
    };
  }
  _updateHoveredPoint({
    anchor: o,
    element: e2
  }, t) {
    o.screenLocationEnabled = true, o.location = t.hoveredPoint;
    const r2 = e2.style;
    r2.display = "block", r2.background = t.color.toCss();
  }
  _destroyHoveredPoint({
    anchor: o,
    element: e2
  }) {
    o.destroy(), this.view.surface?.removeChild(e2);
  }
};
e([y()], a2.prototype, "view", void 0), e([y()], a2.prototype, "_hoveredPoints", void 0), a2 = e([a("esri.widgets.ElevationProfile.support.HoveredPoints")], a2);

export {
  a2 as a
};
//# sourceMappingURL=chunk-2DBZXJ4G.js.map
