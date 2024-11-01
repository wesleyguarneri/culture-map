import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i,
  r,
  s as s3
} from "./chunk-F4FQ67JP.js";
import {
  f,
  l,
  m,
  s as s2,
  u as u2
} from "./chunk-4DSGTDZJ.js";
import {
  a as a2
} from "./chunk-MRPCXIVS.js";
import {
  g
} from "./chunk-YTKVV2Y3.js";
import {
  u
} from "./chunk-GCVQXAS4.js";
import {
  s2 as s,
  w
} from "./chunk-6SSA7P3A.js";
import {
  a
} from "./chunk-4AZPIP7K.js";

// ../../../node_modules/@arcgis/core/geometry/support/normalizeUtilsSync.js
function p(t) {
  return f2(t, true);
}
function a3(t) {
  return f2(t, false);
}
function f2(i2, n) {
  if (null == i2) return null;
  const p2 = i2.spatialReference, a4 = s(p2), f3 = a(i2) ? i2.toJSON() : i2;
  if (!a4) return f3;
  const I2 = w(p2) ? 102100 : 4326, g3 = r[I2].maxX, v2 = r[I2].minX;
  if (u2(f3)) return y(f3, g3, v2);
  if (l(f3)) return f3.points = f3.points.map((t) => y(t, g3, v2)), f3;
  if (m(f3)) return d(f3, a4);
  if (f(f3) || s2(f3)) {
    const t = a2(S, f3), i3 = {
      xmin: t[0],
      ymin: t[1],
      xmax: t[2],
      ymax: t[3]
    }, e = i(i3.xmin, v2) * (2 * g3), h = 0 === e ? f3 : s3(f3, e);
    return i3.xmin += e, i3.xmax += e, i3.xmax > g3 ? C(h, g3, n) : i3.xmin < v2 ? C(h, v2, n) : h;
  }
  return f3;
}
function d(t, i2) {
  if (!i2) return t;
  const s4 = I(t, i2).map((t2) => t2.extent);
  return s4.length < 2 ? s4[0] || t : s4.length > 2 ? (t.xmin = i2.valid[0], t.xmax = i2.valid[1], t) : {
    rings: s4.map((t2) => [[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]])
  };
}
function y(t, i2, s4) {
  if (Array.isArray(t)) {
    const n = t[0];
    if (n > i2) {
      const s5 = i(n, i2);
      t[0] = n + s5 * (-2 * i2);
    } else if (n < s4) {
      const i3 = i(n, s4);
      t[0] = n + i3 * (-2 * s4);
    }
  } else {
    const n = t.x;
    if (n > i2) {
      const s5 = i(n, i2);
      t.x += s5 * (-2 * i2);
    } else if (n < s4) {
      const i3 = i(n, s4);
      t.x += i3 * (-2 * s4);
    }
  }
  return t;
}
function I(t, i2) {
  const s4 = [], {
    ymin: n,
    ymax: e,
    xmin: h,
    xmax: o
  } = t, u3 = t.xmax - t.xmin, [r2, m2] = i2.valid, {
    x,
    frameId: _
  } = g2(t.xmin, i2), {
    x: l2,
    frameId: c
  } = g2(t.xmax, i2), p2 = x === l2 && u3 > 0;
  if (u3 > 2 * m2) {
    const t2 = {
      xmin: h < o ? x : l2,
      ymin: n,
      xmax: m2,
      ymax: e
    }, i3 = {
      xmin: r2,
      ymin: n,
      xmax: h < o ? l2 : x,
      ymax: e
    }, u4 = {
      xmin: 0,
      ymin: n,
      xmax: m2,
      ymax: e
    }, p3 = {
      xmin: r2,
      ymin: n,
      xmax: 0,
      ymax: e
    }, a4 = [], f3 = [];
    v(t2, u4) && a4.push(_), v(t2, p3) && f3.push(_), v(i3, u4) && a4.push(c), v(i3, p3) && f3.push(c);
    for (let s5 = _ + 1; s5 < c; s5++) a4.push(s5), f3.push(s5);
    s4.push(new P(t2, [_]), new P(i3, [c]), new P(u4, a4), new P(p3, f3));
  } else x > l2 || p2 ? s4.push(new P({
    xmin: x,
    ymin: n,
    xmax: m2,
    ymax: e
  }, [_]), new P({
    xmin: r2,
    ymin: n,
    xmax: l2,
    ymax: e
  }, [c])) : s4.push(new P({
    xmin: x,
    ymin: n,
    xmax: l2,
    ymax: e
  }, [_]));
  return s4;
}
function g2(t, i2) {
  const [s4, n] = i2.valid, e = 2 * n;
  let h, o = 0;
  return t > n ? (h = Math.ceil(Math.abs(t - n) / e), t -= h * e, o = h) : t < s4 && (h = Math.ceil(Math.abs(t - s4) / e), t += h * e, o = -h), {
    x: t,
    frameId: o
  };
}
function v(t, i2) {
  const {
    xmin: s4,
    ymin: n,
    xmax: e,
    ymax: h
  } = i2;
  return O(t, s4, n) && O(t, s4, h) && O(t, e, h) && O(t, e, n);
}
function O(t, i2, s4) {
  return i2 >= t.xmin && i2 <= t.xmax && s4 >= t.ymin && s4 <= t.ymax;
}
function C(t, i2, s4 = true) {
  const e = !s2(t);
  if (e && g(t), s4) {
    return new T().cut(t, i2);
  }
  const h = e ? t.rings : t.paths, o = e ? 4 : 2, u3 = h.length, m2 = -2 * i2;
  for (let n = 0; n < u3; n++) {
    const t2 = h[n];
    if (t2 && t2.length >= o) {
      const i3 = [];
      for (const s5 of t2) i3.push([s5[0] + m2, s5[1]]);
      h.push(i3);
    }
  }
  return e ? t.rings = h : t.paths = h, t;
}
var P = class {
  constructor(t, i2) {
    this.extent = t, this.frameIds = i2;
  }
};
var S = u();
var T = class {
  constructor() {
    this._linesIn = [], this._linesOut = [];
  }
  cut(t, i2) {
    let s4;
    if (this._xCut = i2, t.rings) this._closed = true, s4 = t.rings, this._minPts = 4;
    else {
      if (!t.paths) return null;
      this._closed = false, s4 = t.paths, this._minPts = 2;
    }
    for (const e of s4) {
      if (!e || e.length < this._minPts) continue;
      let t2 = true;
      for (const i3 of e) t2 ? (this.moveTo(i3), t2 = false) : this.lineTo(i3);
      this._closed && this.close();
    }
    this._pushLineIn(), this._pushLineOut(), s4 = [];
    for (const e of this._linesIn) e && e.length >= this._minPts && s4.push(e);
    const n = -2 * this._xCut;
    for (const e of this._linesOut) if (e && e.length >= this._minPts) {
      for (const t2 of e) t2[0] += n;
      s4.push(e);
    }
    return this._closed ? t.rings = s4 : t.paths = s4, t;
  }
  moveTo(t) {
    this._pushLineIn(), this._pushLineOut(), this._prevSide = this._side(t[0]), this._moveTo(t[0], t[1], this._prevSide), this._prevPt = t, this._firstPt = t;
  }
  lineTo(t) {
    const i2 = this._side(t[0]);
    if (i2 * this._prevSide == -1) {
      const s4 = this._intersect(this._prevPt, t);
      this._lineTo(this._xCut, s4, 0), this._prevSide = 0, this._lineTo(t[0], t[1], i2);
    } else this._lineTo(t[0], t[1], i2);
    this._prevSide = i2, this._prevPt = t;
  }
  close() {
    const t = this._firstPt, i2 = this._prevPt;
    t[0] === i2[0] && t[1] === i2[1] || this.lineTo(t), this._checkClosingPt(this._lineIn), this._checkClosingPt(this._lineOut);
  }
  _moveTo(t, i2, s4) {
    this._closed ? (this._lineIn.push([s4 <= 0 ? t : this._xCut, i2]), this._lineOut.push([s4 >= 0 ? t : this._xCut, i2])) : (s4 <= 0 && this._lineIn.push([t, i2]), s4 >= 0 && this._lineOut.push([t, i2]));
  }
  _lineTo(t, i2, s4) {
    this._closed ? (j(this._lineIn, s4 <= 0 ? t : this._xCut, i2), j(this._lineOut, s4 >= 0 ? t : this._xCut, i2)) : s4 < 0 ? (0 === this._prevSide && this._pushLineOut(), this._lineIn.push([t, i2])) : s4 > 0 ? (0 === this._prevSide && this._pushLineIn(), this._lineOut.push([t, i2])) : this._prevSide < 0 ? (this._lineIn.push([t, i2]), this._lineOut.push([t, i2])) : this._prevSide > 0 && (this._lineOut.push([t, i2]), this._lineIn.push([t, i2]));
  }
  _checkClosingPt(t) {
    const i2 = t.length;
    i2 > 3 && t[0][0] === this._xCut && t[i2 - 2][0] === this._xCut && t[1][0] === this._xCut && (t[0][1] = t[i2 - 2][1], t.pop());
  }
  _side(t) {
    return t < this._xCut ? -1 : t > this._xCut ? 1 : 0;
  }
  _intersect(t, i2) {
    const s4 = (this._xCut - t[0]) / (i2[0] - t[0]);
    return t[1] + s4 * (i2[1] - t[1]);
  }
  _pushLineIn() {
    this._lineIn && this._lineIn.length >= this._minPts && this._linesIn.push(this._lineIn), this._lineIn = [];
  }
  _pushLineOut() {
    this._lineOut && this._lineOut.length >= this._minPts && this._linesOut.push(this._lineOut), this._lineOut = [];
  }
};
function j(t, i2, s4) {
  const n = t.length;
  n > 1 && t[n - 1][0] === i2 && t[n - 2][0] === i2 ? t[n - 1][1] = s4 : t.push([i2, s4]);
}

export {
  p,
  a3 as a
};
//# sourceMappingURL=chunk-FW7J76DZ.js.map
