import {
  t
} from "./chunk-CX4XTOUC.js";

// ../../../node_modules/@arcgis/core/layers/support/ElevationTile.js
var t2 = class {
  constructor(t3, l2 = null) {
    if (this.tile = t3, null != l2 && null != t3) {
      const e = t3.extent;
      this._samplerData = new t(l2, e);
    }
  }
  get zmin() {
    return null != this._samplerData ? this._samplerData.data.minValue : 0;
  }
  get zmax() {
    return null != this._samplerData ? this._samplerData.data.maxValue : 0;
  }
  get hasNoDataValues() {
    return !!this._samplerData?.data.hasNoDataValues;
  }
  sample(a, t3) {
    if (null == this._samplerData) return;
    const {
      safeWidth: e,
      data: s,
      dx: r,
      dy: n,
      y1: i,
      x0: u
    } = this._samplerData, {
      width: o,
      values: m,
      noDataValue: h
    } = s, p = l(n * (i - t3), 0, e), D = l(r * (a - u), 0, e), d = Math.floor(p), f = Math.floor(D), _ = d * o + f, c = _ + o, x = m[_], V = m[c], g = m[_ + 1], v = m[c + 1];
    if (x !== h && V !== h && g !== h && v !== h) {
      const a2 = D - f, t4 = x + (g - x) * a2;
      return t4 + (V + (v - V) * a2 - t4) * (p - d);
    }
  }
};
function l(a, t3, l2) {
  return a < t3 ? t3 : a > l2 ? l2 : a;
}

export {
  t2 as t
};
//# sourceMappingURL=chunk-4DJIV2NV.js.map
