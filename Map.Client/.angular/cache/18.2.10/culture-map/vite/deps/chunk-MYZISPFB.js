import {
  o as o5
} from "./chunk-QSQ5ROSR.js";
import {
  N,
  S,
  T,
  _,
  c as c2,
  c2 as c3,
  g,
  h,
  h2,
  i as i3,
  m,
  m2,
  o as o4,
  s as s2,
  s2 as s4,
  v as v2
} from "./chunk-QBPVT4BK.js";
import {
  s2 as s3
} from "./chunk-SFPOKBWH.js";
import {
  e as e2,
  f3 as f
} from "./chunk-4JFSB6JC.js";
import {
  t as t2
} from "./chunk-HUHWKEOY.js";
import {
  o as o3,
  r
} from "./chunk-EMZQT2MP.js";
import {
  a2,
  c
} from "./chunk-EU7HJNZD.js";
import {
  i as i2
} from "./chunk-4HODTCAO.js";
import {
  n as n3
} from "./chunk-EK3IKAMF.js";
import {
  M,
  i
} from "./chunk-IJVN5N2Q.js";
import {
  t
} from "./chunk-JCWQ2LOQ.js";
import {
  B,
  l,
  o as o2,
  u as u2,
  v
} from "./chunk-VS26W5Y5.js";
import {
  ht,
  rt
} from "./chunk-C7NRYPDG.js";
import {
  e
} from "./chunk-YZNT6QWD.js";
import {
  n as n2
} from "./chunk-DY7FJHTG.js";
import {
  u
} from "./chunk-7ZJ6P7J7.js";
import {
  o3 as o
} from "./chunk-DDYVXG4F.js";
import {
  a,
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  O
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/segmentUtils.js
function e3(t3, e4, n6) {
  return t3[0] = e4[0] - n6[0], t3[1] = e4[1] - n6[1], t3;
}
function n4(t3, e4) {
  return Math.sqrt(t3 * t3 + e4 * e4);
}
function s5(t3) {
  const e4 = n4(t3[0], t3[1]);
  t3[0] /= e4, t3[1] /= e4;
}
function i4(t3, e4) {
  return n4(t3[0] - e4[0], t3[1] - e4[1]);
}
function r2(t3, e4) {
  return t3[e4 + 1];
}
function h3(t3) {
  return t3.length - 1;
}
function a3(t3) {
  let e4 = 0;
  for (let n6 = 0; n6 < h3(t3); n6++) e4 += c4(t3, n6);
  return e4;
}
function c4(t3, e4, n6 = 1) {
  let [s6, i5] = r2(t3, e4);
  return [s6, i5] = [Math.round(s6), Math.round(i5)], Math.sqrt(s6 * s6 + i5 * i5) * n6;
}
var u3 = class _u {
  constructor(t3, e4, n6, s6, i5) {
    this._segments = t3, this._index = e4, this._distance = n6, this._xStart = s6, this._yStart = i5, this._done = false;
  }
  static create(t3) {
    return new _u(t3, 0, 0, t3[0][0], t3[0][1]);
  }
  clone() {
    return new _u(this._segments, this._index, this._distance, this.xStart, this.yStart);
  }
  equals(t3) {
    return this._index === t3._index || t3._index === this._index - 1 && (0 === this._distance || 1 === t3._distance) || t3._index === this._index + 1 && (1 === this._distance || 0 === t3._distance);
  }
  leq(t3) {
    return this._index < t3._index || this._index === t3._index && this._distance <= t3._distance;
  }
  geq(t3) {
    return this._index > t3._index || this._index === t3._index && this._distance >= t3._distance;
  }
  get _segment() {
    return this._segments[this._index + 1];
  }
  get angle() {
    const t3 = this.dy, e4 = (0 * t3 + -1 * -this.dx) / (1 * this.length);
    let n6 = Math.acos(e4);
    return t3 > 0 && (n6 = 2 * Math.PI - n6), n6;
  }
  get xStart() {
    return this._xStart;
  }
  get yStart() {
    return this._yStart;
  }
  get x() {
    return this.xStart + this.distance * this.dx;
  }
  get y() {
    return this.yStart + this.distance * this.dy;
  }
  get dx() {
    return this._segment[0];
  }
  get dy() {
    return this._segment[1];
  }
  get xMidpoint() {
    return this.xStart + 0.5 * this.dx;
  }
  get yMidpoint() {
    return this.yStart + 0.5 * this.dy;
  }
  get xEnd() {
    return this.xStart + this.dx;
  }
  get yEnd() {
    return this.yStart + this.dy;
  }
  get length() {
    const {
      dx: t3,
      dy: e4
    } = this;
    return Math.sqrt(t3 * t3 + e4 * e4);
  }
  get remainingLength() {
    return this.length * (1 - this._distance);
  }
  get backwardLength() {
    return this.length * this._distance;
  }
  get distance() {
    return this._distance;
  }
  get done() {
    return this._done;
  }
  hasPrev() {
    return this._index - 1 >= 0;
  }
  hasNext() {
    return this._index + 1 < h3(this._segments);
  }
  next() {
    return this.hasNext() ? (this._xStart += this.dx, this._yStart += this.dy, this._distance = 0, this._index += 1, this) : null;
  }
  prev() {
    return this.hasPrev() ? (this._index -= 1, this._xStart -= this.dx, this._yStart -= this.dy, this._distance = 1, this) : (this._done = true, null);
  }
  _seekBackwards(t3, e4) {
    const n6 = this.backwardLength;
    if (t3 <= n6) return this._distance = (n6 - t3) / this.length, this;
    let s6 = this.backwardLength;
    for (; this.prev(); ) {
      if (s6 + this.length > t3) return this._seekBackwards(t3 - s6);
      s6 += this.length;
    }
    return this._distance = 0, e4 ? this : null;
  }
  seek(t3, e4 = false) {
    if (t3 < 0) return this._seekBackwards(Math.abs(t3), e4);
    if (t3 <= this.remainingLength) return this._distance = (this.backwardLength + t3) / this.length, this;
    let n6 = this.remainingLength;
    for (; this.next(); ) {
      if (n6 + this.length > t3) return this.seek(t3 - n6, e4);
      n6 += this.length;
    }
    return this._distance = 1, e4 ? this : null;
  }
};
function d(e4, n6, s6, i5 = true) {
  const r4 = a3(e4), h4 = u3.create(e4), c6 = r4 / 2;
  if (!i5) return h4.seek(c6), void (Math.abs(h4.x) < t2 && Math.abs(h4.y) < t2 && s6(h4.clone(), 0, c6 + 0 * n6, r4));
  const d2 = Math.max((r4 - n6) / 2, 0), o6 = Math.floor(d2 / n6), _2 = c6 - o6 * n6;
  h4.seek(_2);
  for (let a4 = -o6; a4 <= o6; a4++) Math.abs(h4.x) < t2 && Math.abs(h4.y) < t2 && s6(h4.clone(), a4, c6 + a4 * n6, r4), h4.seek(n6);
}
function l2(t3, e4) {
  const n6 = e4;
  for (let s6 = 0; s6 < t3.length; s6++) {
    let e5 = t3[s6];
    g2(e5, n6);
    const i5 = [];
    i5.push(e5[0]);
    for (let t4 = 1; t4 < e5.length; t4++) {
      const [n7, s7] = e5[t4 - 1], [r4, h4] = e5[t4], a4 = r4 - n7, c6 = h4 - s7;
      i5.push([a4, c6]);
    }
    t3[s6] = i5, e5 = i5;
  }
  return t3;
}
function g2(t3, n6) {
  const r4 = 1e-6;
  if (n6 <= 0) return;
  const h4 = t3.length;
  if (h4 < 3) return;
  const a4 = [];
  let c6 = 0;
  a4.push(0);
  for (let e4 = 1; e4 < h4; e4++) c6 += i4(t3[e4], t3[e4 - 1]), a4.push(c6);
  n6 = Math.min(n6, 0.2 * c6);
  const u4 = [];
  u4.push(t3[0][0]), u4.push(t3[0][1]);
  const d2 = t3[h4 - 1][0], o6 = t3[h4 - 1][1], _2 = e3([0, 0], t3[0], t3[1]);
  s5(_2), t3[0][0] += n6 * _2[0], t3[0][1] += n6 * _2[1], e3(_2, t3[h4 - 1], t3[h4 - 2]), s5(_2), t3[h4 - 1][0] += n6 * _2[0], t3[h4 - 1][1] += n6 * _2[1];
  for (let e4 = 1; e4 < h4; e4++) a4[e4] += n6;
  a4[h4 - 1] += n6;
  const l4 = 0.5 * n6;
  for (let e4 = 1; e4 < h4 - 1; e4++) {
    let s6 = 0, i5 = 0, c7 = 0;
    for (let h5 = e4 - 1; h5 >= 0 && !(a4[h5 + 1] < a4[e4] - l4); h5--) {
      const u5 = l4 + a4[h5 + 1] - a4[e4], d3 = a4[h5 + 1] - a4[h5], o7 = a4[e4] - a4[h5] < l4 ? 1 : u5 / d3;
      if (Math.abs(o7) < r4) break;
      const _3 = o7 * o7, g3 = o7 * u5 - 0.5 * _3 * d3, x = o7 * d3 / n6, f3 = t3[h5 + 1], y = t3[h5][0] - f3[0], k = t3[h5][1] - f3[1];
      s6 += x / g3 * (f3[0] * o7 * u5 + 0.5 * _3 * (u5 * y - d3 * f3[0]) - _3 * o7 * d3 * y / 3), i5 += x / g3 * (f3[1] * o7 * u5 + 0.5 * _3 * (u5 * k - d3 * f3[1]) - _3 * o7 * d3 * k / 3), c7 += x;
    }
    for (let u5 = e4 + 1; u5 < h4 && !(a4[u5 - 1] > a4[e4] + l4); u5++) {
      const h5 = l4 - a4[u5 - 1] + a4[e4], d3 = a4[u5] - a4[u5 - 1], o7 = a4[u5] - a4[e4] < l4 ? 1 : h5 / d3;
      if (Math.abs(o7) < r4) break;
      const _3 = o7 * o7, g3 = o7 * h5 - 0.5 * _3 * d3, x = o7 * d3 / n6, f3 = t3[u5 - 1], y = t3[u5][0] - f3[0], k = t3[u5][1] - f3[1];
      s6 += x / g3 * (f3[0] * o7 * h5 + 0.5 * _3 * (h5 * y - d3 * f3[0]) - _3 * o7 * d3 * y / 3), i5 += x / g3 * (f3[1] * o7 * h5 + 0.5 * _3 * (h5 * k - d3 * f3[1]) - _3 * o7 * d3 * k / 3), c7 += x;
    }
    u4.push(s6 / c7), u4.push(i5 / c7);
  }
  u4.push(d2), u4.push(o6);
  for (let e4 = 0, s6 = 0; e4 < h4; e4++) t3[e4][0] = u4[s6++], t3[e4][1] = u4[s6++];
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/labels/LabelMeshWriter.js
var L = 1;
var S2 = 0;
var I = 128;
var A = o((e4) => {
  let t3 = 0;
  if (0 === e4) return 1 / 0;
  for (; !(e4 % 2); ) t3++, e4 /= 2;
  return t3;
});
var z = class extends N {
  constructor() {
    super(...arguments), this._zoomLevel = 0;
  }
  _write(e4, t3, i5, s6) {
    if (this._zoomLevel = s6 || 0, null != i5) throw new Error("InternalError: EffectGeometry not support for LabelMeshWriter");
    switch (t3.geometryType) {
      case "esriGeometryPoint": {
        const i6 = t3.readXForDisplay(), s7 = t3.readYForDisplay();
        return this._writePoint(e4, i6, s7, t3);
      }
      case "esriGeometryEnvelope":
      case "esriGeometryPolygon":
      case "esriGeometryMultipoint": {
        const i6 = t3.readCentroidForDisplay();
        if (!i6) return;
        const [s7, r4] = i6.coords;
        return this._writePoint(e4, s7, r4, t3);
      }
      case "esriGeometryPolyline":
        this._writeLines(e4, t3);
    }
  }
  _writePoint(e4, t3, i5, s6) {
    const r4 = this._getShaping();
    if (!r4) return;
    let o6 = this._getPointReferenceBounds();
    o6 || (o6 = {
      offsetX: 0,
      offsetY: 0,
      size: 0
    });
    const n6 = r4.boundsT, a4 = a2(this.evaluatedMeshParams.horizontalAlignment), l4 = c(this.evaluatedMeshParams.verticalAlignment), h4 = this.evaluatedMeshParams.scaleInfo?.maxScale ?? 0, c6 = this.evaluatedMeshParams.scaleInfo?.minScale ?? 0, m4 = f(s6.getDisplayId());
    e4.metricStart(new r(m4, t3, i5, a4, l4, h4, c6, o6)), e4.metricBoxWrite(n6), this._writeGlyphs(e4, s6.getDisplayId(), t3, i5, r4, 0, o6), e4.metricEnd();
  }
  _getPointReferenceBounds() {
    if (!this._references) return null;
    for (const e4 of this._references) {
      const t3 = e4.getBoundsInfo();
      if (t3) return t3;
    }
    return null;
  }
  _writeLines(e4, t3) {
    const {
      scaleInfo: i5,
      verticalAlignment: s6
    } = this.evaluatedMeshParams, r4 = this.evaluatedMeshParams.repeatLabelDistance || 128, o6 = this._getShaping("middle");
    if (!o6) return;
    const n6 = (e5, t4, i6, s7) => this._placeSubdivGlyphs(e5, t4, i6, s7), a4 = (o6.bounds.width + r4) / (1 << L);
    this._current = {
      out: e4,
      id: t3.getDisplayId(),
      shaping: o6,
      zoomRange: m(i5, this.getTileInfo()),
      referenceBounds: this._getPointReferenceBounds() || {
        offsetX: 0,
        offsetY: 0,
        size: 0
      },
      offsetDirection: null
    }, this._verticalPlacement = "bottom" === s6 ? "above" : "top" === s6 ? "below" : null, this._verticalPlacement ? this._writeAboveAndBelowAlong(t3, n6, a4) : this._writeCenterAlong(t3, n6, a4);
  }
  _writeAboveAndBelowAlong(e4, i5, s6) {
    const {
      repeatLabel: r4,
      fontSize: o6
    } = this.evaluatedMeshParams, {
      shaping: n6
    } = this._current, a4 = u(o6), l4 = e4.readGeometryForDisplay();
    if (!l4) return;
    const h4 = new e();
    ht(h4, l4, false, false, "esriGeometryPolyline", 1);
    const c6 = D(new e(), h4, a4), m4 = D(new e(), h4, -a4), g3 = rt(m4, "esriGeometryPolyline", false, false), p2 = rt(c6, "esriGeometryPolyline", false, false), _2 = l2(p2.paths, n6.bounds.width), x = l2(g3.paths, n6.bounds.width);
    this._current.offsetDirection = "above";
    for (const t3 of _2) d(t3, s6, i5, !!r4);
    this._current.offsetDirection = "below";
    for (const t3 of x) d(t3, s6, i5, !!r4);
  }
  _writeCenterAlong(e4, t3, i5) {
    const {
      repeatLabel: s6
    } = this.evaluatedMeshParams, {
      shaping: r4
    } = this._current, o6 = l2(e4.readLegacyGeometryForDisplay().paths, r4.bounds.width);
    for (const n6 of o6) d(n6, i5, t3, !!s6);
  }
  _placeSubdivGlyphs(e4, t3, i5, s6) {
    const {
      allowOverrun: r4,
      labelPosition: o6,
      repeatLabelDistance: n6
    } = this.evaluatedMeshParams, a4 = this._current.zoomRange[0], l4 = A(t3), h4 = this._current.shaping.bounds.width / (1 << L), c6 = Math.sqrt(n6 || I) / (1 << L), m4 = Math.min(i5, s6 - i5), d2 = this._current.shaping.isMultiline ? S : Math.log2(m4 / (c6 + h4 / 2)), u4 = 0 === t3 ? d2 : Math.min(l4, d2), f3 = Math.max(a4, this._zoomLevel + L - u4), g3 = this._zoomLevel - f3, p2 = this._current.shaping.bounds.width / 2 * 2 ** g3;
    this._current.shaping.isMultiline ? 0 === t3 && this._placeStraight(e4, f3) : r4 && g3 < 0 ? this._placeStraightAlong(e4, a4) : "parallel" === o6 ? this._placeStraightAlong(e4, f3) : "curved" === o6 && this._placeCurved(e4, f3, p2);
  }
  _placeStraight(e4, t3) {
    const {
      out: i5,
      id: s6,
      shaping: r4,
      referenceBounds: o6
    } = this._current, {
      x: n6,
      y: a4
    } = e4, l4 = f(s6), h4 = this.evaluatedMeshParams.scaleInfo?.maxScale ?? 0, c6 = this.evaluatedMeshParams.scaleInfo?.minScale ?? 0;
    i5.metricStart(new r(l4, e4.x, e4.y, 0, 0, h4, c6, null)), i5.metricBoxWrite(r4.boundsT);
    const m4 = e4.angle * (180 / Math.PI) % 360, d2 = (e4.angle * (180 / Math.PI) + 180) % 360;
    this._writeGlyphs(i5, s6, n6, a4, r4, 0, o6, {
      clipAngle: m4,
      mapAligned: true,
      isLineLabel: true,
      minZoom: t3
    }), this._writeGlyphs(i5, s6, n6, a4, r4, 0, o6, {
      clipAngle: d2,
      mapAligned: true,
      isLineLabel: true,
      minZoom: t3
    }), i5.metricEnd();
  }
  _placeCurved(e4, t3, i5) {
    const {
      out: s6,
      id: r4
    } = this._current, o6 = e4.clone(), n6 = e4.angle * (180 / Math.PI) % 360, a4 = (e4.angle * (180 / Math.PI) + 180) % 360, l4 = f(r4), h4 = this.evaluatedMeshParams.scaleInfo?.maxScale ?? 0, c6 = this.evaluatedMeshParams.scaleInfo?.minScale ?? 0;
    s6.metricStart(new r(l4, e4.x, e4.y, 0, 0, h4, c6, null)), this._verticalPlacement && this._verticalPlacement !== this._current.offsetDirection || (this._placeFirst(o6, t3, 1, n6), this._placeBack(e4, o6, t3, i5, 1, n6), this._placeForward(e4, o6, t3, i5, 1, n6)), this._verticalPlacement && this._verticalPlacement === this._current.offsetDirection || (this._placeFirst(o6, t3, 0, a4), this._placeBack(e4, o6, t3, i5, 0, a4), this._placeForward(e4, o6, t3, i5, 0, a4)), s6.metricEnd();
  }
  _placeStraightAlong(e4, o6) {
    const {
      out: n6,
      id: a4,
      shaping: l4,
      zoomRange: h4,
      referenceBounds: m4
    } = this._current, {
      boxBorderLineColor: d2,
      boxBackgroundColor: u4
    } = this.evaluatedMeshParams, f3 = e4.clone(), g3 = e4.angle * (180 / Math.PI) % 360, p2 = (e4.angle * (180 / Math.PI) + 180) % 360;
    if (l4.glyphs.length > 0 && !(!d2 && !u4)) {
      const d3 = Math.max(o6, h4[0], 0), u5 = Math.min(S, h4[1]), f4 = M(n3(), -e4.angle), _2 = {
        minZoom: d3,
        maxZoom: u5,
        clipAngle: g3,
        mapAligned: true,
        isLineLabel: true
      }, x2 = u(this.evaluatedMeshParams.offsetX), y = u(this.evaluatedMeshParams.offsetY);
      if (!this._verticalPlacement || this._verticalPlacement === this._current.offsetDirection) {
        const t3 = t(x2, -1 * y), [i5, o7] = l4.shapeBackground(i(n3(), f4, t3));
        n6.recordStart(this.instanceId, this.attributeLayout, l4.glyphs[0].textureBinding);
        const h5 = 2 * Math.max(i5.width, i5.height);
        n6.recordBounds(e4.x + i5.x, e4.y + i5.y, h5, h5), this._writeTextBox(n6, a4, e4.x, e4.y, o7, m4, _2), n6.recordEnd();
      }
      if (!this._verticalPlacement || this._verticalPlacement !== this._current.offsetDirection) {
        const t3 = t(x2, y), [i5, o7] = l4.shapeBackground(i(n3(), f4, t3));
        _2.clipAngle = p2, n6.recordStart(this.instanceId, this.attributeLayout, l4.glyphs[0].textureBinding);
        const h5 = 2 * Math.max(i5.width, i5.height);
        n6.recordBounds(e4.x + i5.x, e4.y + i5.y, h5, h5), this._writeTextBox(n6, a4, e4.x, e4.y, o7, m4, _2), n6.recordEnd();
      }
    }
    const x = f(a4), v3 = this.evaluatedMeshParams.scaleInfo?.maxScale ?? 0, M2 = this.evaluatedMeshParams.scaleInfo?.minScale ?? 0;
    n6.metricStart(new r(x, e4.x, e4.y, 0, 0, v3, M2, null)), this._verticalPlacement && this._verticalPlacement !== this._current.offsetDirection || this._placeFirst(f3, o6, 1, g3, true), this._verticalPlacement && this._verticalPlacement === this._current.offsetDirection || this._placeFirst(f3, o6, 0, p2, true), n6.metricEnd();
  }
  _placeBack(e4, t3, i5, s6, r4, o6) {
    const n6 = e4.clone();
    let a4 = e4.backwardLength + S2;
    for (; n6.prev() && !(a4 >= s6); ) this._placeOnSegment(n6, t3, a4, i5, -1, r4, o6), a4 += n6.length + S2;
  }
  _placeForward(e4, t3, i5, s6, r4, o6) {
    const n6 = e4.clone();
    let a4 = e4.remainingLength + S2;
    for (; n6.next() && !(a4 >= s6); ) this._placeOnSegment(n6, t3, a4, i5, 1, r4, o6), a4 += n6.length + S2;
  }
  _placeFirst(e4, t3, i5, s6, r4 = false) {
    const {
      out: o6,
      id: n6,
      shaping: a4,
      zoomRange: l4,
      referenceBounds: h4
    } = this._current, c6 = a4.glyphs;
    for (const m4 of c6) {
      const c7 = m4.x > a4.bounds.x ? i5 : 1 - i5, d2 = c7 * e4.remainingLength + (1 - c7) * e4.backwardLength, u4 = Math.abs(m4.x + m4.width / 2 - a4.bounds.x), f3 = Math.max(0, this._zoomLevel + Math.log2(u4 / (d2 + S2))), g3 = Math.max(t3, r4 ? 0 : f3);
      m4.maxZoom = Math.min(l4[1], S), m4.angle = e4.angle + (1 - i5) * Math.PI, m4.minZoom = Math.max(l4[0], g3), this._writeLineGlyph(o6, n6, e4.x, e4.y, a4.bounds, m4, s6, h4, true), i5 && this._isVisible(m4.minZoom, m4.maxZoom) && o6.metricBoxWrite(m4.bounds);
    }
  }
  _placeOnSegment(e4, t3, i5, s6, r4, o6, n6) {
    const {
      out: a4,
      id: l4,
      shaping: h4,
      referenceBounds: c6
    } = this._current, m4 = h4.glyphs, d2 = e4.dx / e4.length, u4 = e4.dy / e4.length, f3 = {
      x: e4.x + i5 * -r4 * d2,
      y: e4.y + i5 * -r4 * u4
    };
    for (const g3 of m4) {
      const m5 = g3.x > h4.bounds.x ? o6 : 1 - o6;
      if (!(m5 && 1 === r4 || !m5 && -1 === r4)) continue;
      const d3 = Math.abs(g3.x + g3.width / 2 - h4.bounds.x), u5 = Math.max(0, this._zoomLevel + Math.log2(d3 / i5) - 0.1), p2 = Math.max(s6, this._zoomLevel + Math.log2(d3 / (i5 + e4.length + S2)));
      if (0 !== u5 && (g3.angle = e4.angle + (1 - o6) * Math.PI, g3.minZoom = p2, g3.maxZoom = u5, this._writeLineGlyph(a4, l4, f3.x, f3.y, h4.bounds, g3, n6, c6, true), o6 && this._isVisible(g3.minZoom, g3.maxZoom))) {
        const i6 = g3.bounds, s7 = e4.x - t3.x, r5 = e4.y - t3.y, o7 = new i2(i6.center[0] + s7, i6.center[1] + r5, i6.width, i6.height);
        a4.metricBoxWrite(o7);
      }
    }
  }
  _writeLineGlyph(e4, t3, i5, s6, r4, o6, n6, a4, l4) {
    const h4 = i5 + r4.x, c6 = s6 + r4.y, m4 = 2 * (this.evaluatedMeshParams.minPixelBuffer ? this.evaluatedMeshParams.minPixelBuffer / this._textMeshTransformProps.fontSize : 1), d2 = Math.max(r4.width, r4.height) * m4;
    e4.recordStart(this.instanceId, this.attributeLayout, o6.textureBinding), e4.recordBounds(h4, c6, d2, d2);
    const {
      texcoords: u4,
      offsets: f3
    } = o6, g3 = this._textMeshTransformProps.fontSize;
    this._writeQuad(e4, t3, i5, s6, {
      texcoords: u4,
      offsets: f3,
      fontSize: g3,
      color: g(this.evaluatedMeshParams.color),
      isBackground: false,
      referenceBounds: a4,
      minZoom: Math.max(this._current.zoomRange[0], o6.minZoom),
      maxZoom: Math.min(this._current.zoomRange[1], o6.maxZoom),
      clipAngle: n6,
      mapAligned: l4,
      isLineLabel: true
    }), e4.recordEnd();
  }
  _isVisible(e4, t3) {
    const i5 = this._zoomLevel;
    return e4 <= i5 && i5 <= t3;
  }
};
function D(e4, t3, i5) {
  const {
    coords: s6,
    lengths: r4
  } = t3, c6 = n2(), d2 = n2(), u4 = n2(), f3 = n2(), g3 = n2(), p2 = n2(), _2 = 2;
  let x = 0;
  for (let m4 = 0; m4 < r4.length; m4++) {
    const t4 = r4[m4];
    for (let r5 = 0; r5 < t4; r5++) {
      const m5 = _2 * (r5 + x - 1), y = _2 * (r5 + x), v3 = _2 * (r5 + x + 1);
      r5 > 0 ? o2(c6, s6[m5], s6[m5 + 1]) : o2(c6, 0, 0), o2(d2, s6[y], s6[y + 1]), r5 < t4 - 1 ? o2(u4, s6[v3], s6[v3 + 1]) : o2(u4, 0, 0), 0 === r5 ? o2(f3, 0, 0) : (B(f3, d2, c6), v(f3, f3), o2(f3, f3[1], -f3[0])), r5 === t4 - 1 ? o2(g3, 0, 0) : (B(g3, u4, d2), v(g3, g3), o2(g3, g3[1], -g3[0])), u2(p2, f3, g3), v(p2, p2);
      const M2 = p2[0] * g3[0] + p2[1] * g3[1];
      0 !== M2 && l(p2, p2, M2), l(p2, p2, i5), e4.coords.push(d2[0] + p2[0], d2[1] + p2[1]);
    }
    e4.lengths.push(t4), x += t4;
  }
  return e4;
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/support/DictionaryValue.js
var r3 = class extends s3 {
  constructor(e4) {
    super(), this._value = e4;
  }
  resize(e4) {
  }
  read(e4, r4) {
    return this._value;
  }
  readWithDefault(e4, r4, t3) {
    return this._value;
  }
  referencesScale() {
    return false;
  }
  referencesGeometry() {
    return false;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/MeshWriterInputEvaluator.js
var n5 = () => n.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.mesh.MeshWriterInputEvaluator");
function c5(e4, r4, t3 = false) {
  return __async(this, null, function* () {
    const {
      defaultValue: s6,
      valueExpressionInfo: a4,
      value: o6
    } = r4;
    if (a4) {
      const {
        expression: o7
      } = a4, i5 = yield e4.createComputedField({
        expression: o7
      }, t3);
      return i5 ? __spreadProps(__spreadValues({}, r4), {
        computed: i5,
        defaultValue: s6
      }) : null;
    }
    return __spreadProps(__spreadValues({}, r4), {
      computed: new r3(o6),
      defaultValue: s6
    });
  });
}
function m3(e4, r4) {
  return __async(this, null, function* () {
    const {
      defaultValue: t3,
      valueExpressionInfo: s6
    } = r4, {
      expression: a4
    } = s6, o6 = yield e4.createComputedField({
      expression: a4
    });
    return o6 ? __spreadProps(__spreadValues({}, r4), {
      computed: o6,
      defaultValue: t3
    }) : null;
  });
}
var p = (e4) => "boolean" != typeof e4 && "number" != typeof e4 && "valueExpressionInfo" in e4;
var f2 = (e4) => e4.some((e5) => {
  for (const r4 in e5) {
    const t3 = e5[r4];
    if (p(t3)) return true;
  }
  return false;
});
var l3 = class _l {
  static create(r4, t3, s6) {
    return __async(this, null, function* () {
      const a4 = {}, o6 = /* @__PURE__ */ new Map(), i5 = /* @__PURE__ */ new Map(), n6 = /* @__PURE__ */ new Map(), u4 = /* @__PURE__ */ new Map(), d2 = /* @__PURE__ */ new Map();
      for (const l4 in s6) {
        const h4 = s6[l4];
        if (null != h4 && "object" == typeof h4) {
          if (Array.isArray(h4)) {
            if ("object" == typeof h4[0]) throw new Error(`InternalError: Cannot handle ${l4}. Nested array params are not supported`);
            a4[l4] = h4;
          } else if ("valueExpressionInfo" in h4) {
            if (h4.value) {
              a4[l4] = h4.value;
              continue;
            }
            const e4 = yield m3(r4, h4);
            if (!e4) {
              a4[l4] = h4.defaultValue;
              continue;
            }
            o6.set(l4, e4), a4[l4] = null;
          } else switch (h4.type) {
            case "cim-effect-infos":
              if (h4.effectInfos.some((e4) => e4.overrides.length)) {
                i5.set(l4, {
                  effects: yield Promise.all(h4.effectInfos.map((t4) => __async(this, null, function* () {
                    const s7 = t4.overrides.map((e4) => c5(r4, e4));
                    return {
                      effect: t4.effect,
                      compiledOverrides: (yield Promise.all(s7)).filter(O)
                    };
                  })))
                });
                break;
              }
              a4[l4] = h4.effectInfos.map((e4) => e4.effect);
              break;
            case "cim-marker-placement-param":
              h4.overrides.length && n6.set(l4, {
                placementInfo: h4,
                compiledOverrides: (yield Promise.all(h4.overrides.map((e4) => c5(r4, e4)))).filter(O)
              }), a4[l4] = h4.placement;
              break;
            case "text-rasterization-param": {
              if (h4.overrides.length) {
                const t4 = h4.overrides.map((e4) => c5(r4, e4, h4.useLegacyLabelEvaluationRules));
                u4.set(l4, {
                  compiledOverrides: (yield Promise.all(t4)).filter(O),
                  rasterizationParam: h4,
                  objectIdToResourceId: /* @__PURE__ */ new Map()
                });
                continue;
              }
              const s7 = {
                type: "cim-rasterization-info",
                resource: h4.resource
              };
              a4[l4] = (yield t3.fetchResourceImmediate(s7)) ?? null;
              break;
            }
            case "sprite-rasterization-param": {
              if (h4.overrides.length) {
                const t4 = h4.overrides.map((e4) => c5(r4, e4));
                u4.set(l4, {
                  compiledOverrides: (yield Promise.all(t4)).filter(O),
                  rasterizationParam: h4,
                  objectIdToResourceId: /* @__PURE__ */ new Map()
                });
                continue;
              }
              if ("animated" === h4.resource.type) {
                u4.set(l4, {
                  compiledOverrides: [],
                  rasterizationParam: h4,
                  objectIdToResourceId: /* @__PURE__ */ new Map()
                });
                continue;
              }
              const s7 = {
                type: "cim-rasterization-info",
                resource: h4.resource
              };
              a4[l4] = (yield t3.fetchResourceImmediate(s7)) ?? null;
              break;
            }
            case "cim-marker-transform-param": {
              const {
                params: e4
              } = h4;
              if (f2(e4)) {
                const t4 = {
                  compiledMarkerInfos: []
                };
                yield Promise.all(e4.map((e5) => __async(this, null, function* () {
                  const s7 = {
                    props: {}
                  };
                  for (const t5 in e5) if (p(e5[t5])) {
                    const a5 = yield m3(r4, e5[t5]);
                    s7.compiledExpressionMap || (s7.compiledExpressionMap = /* @__PURE__ */ new Map());
                    const o7 = s7.compiledExpressionMap;
                    a5 && o7.set(t5, a5);
                  } else s7.props[t5] = e5[t5];
                  t4.compiledMarkerInfos.push(s7);
                }))), d2.set(l4, t4);
              } else a4[l4] = {
                type: "cim-marker-transform-info",
                infos: e4
              };
              break;
            }
            default:
              a4[l4] = h4;
          }
        } else a4[l4] = h4;
      }
      return new _l(s6, a4, o6, i5, n6, u4, d2);
    });
  }
  constructor(e4, r4, t3, s6, a4, o6, i5) {
    this.inputMeshParams = e4, this._resolvedMeshParams = r4, this._dynamicProperties = t3, this._dynamicEffectProperties = s6, this._dynamicPlacementProperties = a4, this._dynamicAsyncProperties = o6, this._dynamicTransformProperties = i5, this.evaluator = (e5) => e5;
  }
  get hasDynamicProperties() {
    return !!(this._dynamicProperties.size || this._dynamicAsyncProperties.size || this._dynamicEffectProperties.size || this._dynamicTransformProperties.size || this._dynamicPlacementProperties.size);
  }
  get evaluatedMeshParams() {
    return this._evaluatedMeshParams || (this._evaluatedMeshParams = this.evaluator(this._resolvedMeshParams)), this._evaluatedMeshParams;
  }
  enqueueRequest(e4, s6, i5) {
    for (const m4 of this._dynamicAsyncProperties.values()) {
      const p2 = a(m4.rasterizationParam.resource);
      "animated" === m4.rasterizationParam.resource.type && m4.rasterizationParam.resource.randomizeStartTime && (p2.primitiveName = "__RESERVED__PRIMITIVE__NAME__", p2.startGroup = o5(s6.getObjectId() || 0));
      for (const {
        primitiveName: e5,
        propertyName: t3,
        computed: a4,
        defaultValue: l4,
        valueExpressionInfo: u4
      } of m4.compiledOverrides) try {
        const r4 = "animated" === m4.rasterizationParam.resource.type ? p2.primitiveName : e5;
        o3(p2, r4, t3, a4, s6, i5, l4);
      } catch (c6) {
        n5().errorOnce(new s("invalid-arcade-expression", `Encountered an error when evaluating the arcade expression '${u4?.expression}' (primitive: '${e5}', property: '${t3}')`, c6));
      }
      const f3 = e4.enqueueRequest({
        type: "cim-rasterization-info",
        resource: p2
      });
      m4.objectIdToResourceId.set(s6.getObjectId(), f3);
    }
  }
  evaluateMeshParams(e4, r4, t3) {
    for (const [s6, a4] of this._dynamicProperties.entries()) this._resolvedMeshParams[s6] = a4.computed.readWithDefault(r4, t3, a4.defaultValue);
    for (const [s6, a4] of this._dynamicPlacementProperties.entries()) for (const {
      computed: e5,
      defaultValue: o6,
      propertyName: i5
    } of a4.compiledOverrides) {
      const n6 = e5.readWithDefault(r4, t3, o6);
      a4.placementInfo.placement[i5] = n6, this._resolvedMeshParams[s6] = a4.placementInfo.placement;
    }
    for (const [s6, a4] of this._dynamicEffectProperties.entries()) for (const e5 of a4.effects) {
      for (const {
        computed: s7,
        defaultValue: a5,
        propertyName: o6
      } of e5.compiledOverrides) {
        const i5 = s7.readWithDefault(r4, t3, a5);
        e5.effect[o6] = i5;
      }
      this._resolvedMeshParams[s6] = a4.effects.map((e6) => e6.effect);
    }
    for (const [s6, a4] of this._dynamicTransformProperties.entries()) {
      const e5 = {
        type: "cim-marker-transform-info",
        infos: []
      };
      for (const s7 of a4.compiledMarkerInfos) {
        const a5 = __spreadValues({}, s7.props);
        if (s7.compiledExpressionMap) for (const [e6, o6] of s7.compiledExpressionMap) {
          const s8 = o6.computed.readWithDefault(r4, t3, o6.defaultValue);
          a5[e6] = "number" == typeof s8 || "boolean" == typeof s8 ? s8 : o6.defaultValue;
        }
        e5.infos.push(a5);
      }
      this._resolvedMeshParams[s6] = e5;
    }
    for (const [s6, a4] of this._dynamicAsyncProperties.entries()) {
      const t4 = a4.objectIdToResourceId.get(r4.getObjectId());
      if (null == t4) continue;
      const o6 = e4.getResource(t4);
      this._resolvedMeshParams[s6] = o6;
    }
    return this._evaluatedMeshParams = this.evaluator(this._resolvedMeshParams), this.evaluatedMeshParams;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/MeshWriterRegistry.js
var W = class {
  createMeshWriter(e4, r4, t3, i5) {
    return __async(this, null, function* () {
      const s6 = this._getMeshWriter(i5.techniqueType), l4 = yield l3.create(e4, r4, i5.inputParams), a4 = new s6(i5.id, l4, i5.optionalAttributes, t3);
      return yield a4.loadDependencies(), a4;
    });
  }
  _getMeshWriter(c6) {
    switch (c6) {
      case e2.Fill:
        return c2;
      case e2.DotDensity:
        return s2;
      case e2.ComplexFill:
        return h;
      case e2.PatternFill:
        return o4;
      case e2.OutlineFill:
        return h2;
      case e2.PatternOutlineFill:
        return c3;
      case e2.ComplexOutlineFill:
        return _;
      case e2.Marker:
        return v2;
      case e2.PieChart:
        return s4;
      case e2.Text:
        return N;
      case e2.Line:
        return T;
      case e2.TexturedLine:
        return m2;
      case e2.Heatmap:
        return i3;
      case e2.Label:
        return z;
      case e2.Test:
        throw new Error("Internal Error: Found invalid mesh writer");
    }
  }
};

export {
  r3 as r,
  W
};
//# sourceMappingURL=chunk-MYZISPFB.js.map
