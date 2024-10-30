import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  mt
} from "./chunk-KZBRH42J.js";
import {
  h2,
  n2 as n
} from "./chunk-BUAHJQUY.js";
import {
  E
} from "./chunk-VOJZD4TW.js";
import {
  e
} from "./chunk-7PJ3GUSK.js";
import {
  t
} from "./chunk-2LHHRVKS.js";
import {
  r
} from "./chunk-YEB36ZCF.js";
import {
  L
} from "./chunk-T5C2TZNO.js";
import {
  M,
  f,
  h,
  i,
  o
} from "./chunk-A2FDYA6M.js";
import {
  s2 as s
} from "./chunk-6SSA7P3A.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/OverlayContainer.js
var f2 = class extends n {
  constructor() {
    super(...arguments), this._viewStateId = -1, this._dvsMat3 = e();
  }
  get dvsMat3() {
    return this._dvsMat3;
  }
  beforeRender(t2) {
    this._updateMatrices(t2), this._updateOverlays(t2, this.children);
    for (const e2 of this.children) e2.beforeRender(t2);
  }
  prepareRenderPasses(t2) {
    const e2 = t2.registerRenderPass({
      name: "overlay",
      brushes: [h2.overlay],
      target: () => this.children,
      drawPhase: E.MAP
    });
    return [...super.prepareRenderPasses(t2), e2];
  }
  _updateMatrices(i2) {
    const {
      state: c
    } = i2, {
      id: p,
      size: m,
      pixelRatio: d,
      resolution: h3,
      rotation: f3,
      viewpoint: u,
      displayMat3: M2
    } = c;
    if (this._viewStateId === p) return;
    const v = Math.PI / 180 * f3, g = d * m[0], _ = d * m[1];
    this._localOrigin = u.targetGeometry.clone();
    const {
      x: y,
      y: b
    } = this._localOrigin, x = L(y, c.spatialReference);
    this._localOrigin.x = x, this._localOrigin.y = b;
    const j = h3 * g, w = h3 * _, R = o(this._dvsMat3);
    i(R, R, M2), M(R, R, t(g / 2, _ / 2)), f(R, R, r(g / j, -_ / w, 1)), h(R, R, -v), this._viewStateId = p;
  }
  _updateOverlays(t2, e2) {
    const {
      state: r2
    } = t2, {
      rotation: s2,
      spatialReference: o2,
      worldScreenWidth: i2,
      size: a,
      viewpoint: n2
    } = r2, l = this._localOrigin;
    let m, d = 0;
    const h3 = s(o2);
    if (h3 && o2.isWrappable) {
      const t3 = a[0], e3 = a[1], l2 = 180 / Math.PI * s2, c = Math.abs(Math.cos(l2)), f3 = Math.abs(Math.sin(l2)), u = Math.round(t3 * c + e3 * f3), [M2, v] = h3.valid, g = mt(o2), {
        x: _,
        y
      } = n2.targetGeometry, b = [_, y], x = [0, 0];
      r2.toScreen(x, b);
      const j = [0, 0];
      let w;
      w = u > i2 ? 0.5 * i2 : 0.5 * u;
      const R = Math.floor((_ + 0.5 * g) / g), O = M2 + R * g, P = v + R * g, I = [x[0] + w, 0];
      r2.toMap(j, I), j[0] > P && (d = g), I[0] = x[0] - w, r2.toMap(j, I), j[0] < O && (d = -g), m = {
        worldWidth: g,
        xBounds: [M2, v]
      };
    }
    for (const c of e2) c.updateDrawCoords(l, d, o2, m);
  }
};

export {
  f2 as f
};
//# sourceMappingURL=chunk-B7HSKXXD.js.map
