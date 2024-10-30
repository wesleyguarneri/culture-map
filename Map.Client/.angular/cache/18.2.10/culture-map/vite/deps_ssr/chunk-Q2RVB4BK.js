import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i as i4
} from "./chunk-SKOGSS6Z.js";
import {
  t as t4
} from "./chunk-G3WMCIUE.js";
import {
  a as a5,
  n as n3
} from "./chunk-WS7U2AGS.js";
import {
  M,
  e as e5,
  i as i3,
  s as s3
} from "./chunk-U4NXHH3L.js";
import {
  n as n4
} from "./chunk-2LHHRVKS.js";
import {
  C as C3
} from "./chunk-KB6CBN72.js";
import {
  t as t5
} from "./chunk-BCMXVFG5.js";
import {
  e as e4,
  i as i2,
  r
} from "./chunk-FB2GCV4L.js";
import {
  A as A2,
  Bt,
  V,
  W,
  X,
  st,
  zt
} from "./chunk-NOBDTR4N.js";
import {
  A as A3,
  B,
  C as C2,
  K,
  O,
  P as P2,
  R,
  T as T2,
  U,
  X as X2,
  Y,
  Z,
  a as a4,
  ie,
  k as k2,
  l as l3,
  ne,
  o as o2,
  oe,
  u as u5,
  w as w2,
  y
} from "./chunk-5RF6XDV4.js";
import {
  S as S2,
  o
} from "./chunk-B76NC7GX.js";
import {
  e as e2
} from "./chunk-JSWVKNBA.js";
import {
  A,
  C,
  D,
  G as G2,
  I,
  L,
  N,
  P,
  S,
  T,
  d,
  g,
  k,
  q,
  t as t3,
  w,
  x
} from "./chunk-EKHRAAS6.js";
import {
  u as u4
} from "./chunk-X36BR2QB.js";
import {
  m2,
  s as s2
} from "./chunk-YBUJLIWZ.js";
import {
  f as f6,
  l as l2,
  m,
  s,
  u as u2
} from "./chunk-4DSGTDZJ.js";
import {
  e as e3,
  u as u3
} from "./chunk-VYTPFEL2.js";
import {
  a as a3,
  c,
  f as f3,
  f2 as f5,
  i,
  j,
  l,
  n as n2,
  t as t2
} from "./chunk-MRPCXIVS.js";
import {
  f as f2,
  h
} from "./chunk-YTKVV2Y3.js";
import {
  a as a2,
  f as f4,
  u
} from "./chunk-GCVQXAS4.js";
import {
  G
} from "./chunk-RNF7VOCU.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  e
} from "./chunk-OR2FKGUM.js";
import {
  a,
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  has,
  t
} from "./chunk-2ZJE6ZFX.js";
import {
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/symbols/cim/effects/EffectAddControlPoints.js
var e6 = class _e {
  static local() {
    return null === _e.instance && (_e.instance = new _e()), _e.instance;
  }
  execute(e14, s13, n17, i14, o9) {
    return new t6(e14, s13, n17);
  }
};
e6.instance = null;
var t6 = class {
  constructor(e14, t15, s13) {
    this._inputGeometries = e14, this._angleTolerance = void 0 !== t15.angleTolerance ? t15.angleTolerance : 120, this._maxCosAngle = Math.cos((1 - Math.abs(this._angleTolerance) / 180) * Math.PI);
  }
  next() {
    let e14 = this._inputGeometries.next();
    for (; e14; ) {
      if ("esriGeometryPolygon" === e14.geometryType) this._isClosed = true;
      else if ("esriGeometryPolyline" === e14.geometryType) this._isClosed = false;
      else {
        if ("esriGeometryEnvelope" !== e14.geometryType) {
          e14 = this._inputGeometries.next();
          continue;
        }
        if (this._maxCosAngle) return e14;
        this._isClosed = true;
      }
      for (; e14.nextPath(); ) this._processPath(e14);
      return e14.reset(), e14;
    }
    return null;
  }
  _processPath(e14) {
    if (e14.nextPoint()) {
      const t15 = e14.x, s13 = e14.y;
      let n17 = t15, i14 = s13, o9 = e14.pathSize, l11 = 0, r18 = 0, a12 = 0, h8 = 0, c5 = 0, _6 = 0;
      this._isClosed && ++o9;
      for (let u14 = 1; e14.nextPoint() || u14 < o9; ++u14) {
        let x4, m6;
        this._isClosed && u14 === o9 - 1 ? (x4 = t15, m6 = s13) : (x4 = e14.x, m6 = e14.y);
        const y5 = x4 - n17, g4 = m6 - i14, C5 = Math.sqrt(y5 * y5 + g4 * g4);
        if (u14 > 1 && C5 > 0 && a12 > 0) {
          (l11 * y5 + r18 * g4) / C5 / a12 <= this._maxCosAngle && e14.setControlPointAt(u14 - 1);
        }
        1 === u14 && (h8 = y5, c5 = g4, _6 = C5), C5 > 0 && (n17 = x4, i14 = m6, l11 = y5, r18 = g4, a12 = C5);
      }
      if (this._isClosed && a12 > 0 && _6 > 0) {
        (l11 * h8 + r18 * c5) / _6 / a12 <= this._maxCosAngle && e14.setControlPointAt(0);
      }
    }
  }
};

// ../../../node_modules/@arcgis/core/geometry/GeometryCursor.js
var a6 = class {
  static fromOptimized(t15, e14, s13 = false, i14 = false, h8 = 1) {
    return new p().initialize(t15, e14, s13, i14, h8);
  }
  static fromJSON(t15, e14 = false, s13 = false) {
    const [i14, h8] = u6(t15);
    return new d2().initialize(i14, h8, e14, s13, 1);
  }
  static fromOptimizedCIM(t15, e14, s13 = false, i14 = false, h8 = 1) {
    return new m3().initialize(t15, e14, s13, i14, h8);
  }
  static fromJSONCIM(t15, e14 = false, s13 = false, i14 = 1) {
    const [h8, r18] = u6(t15);
    return new y2().initialize(h8, r18, e14, s13, i14);
  }
  static fromFeatureSetReader(t15) {
    const e14 = t15.readGeometryForDisplay(), s13 = t15.geometryType;
    return e14 && s13 ? this.fromOptimized(e14, s13) : null;
  }
  static fromFeatureSetReaderCIM(t15) {
    const e14 = t15.readGeometryForDisplay(), s13 = t15.geometryType;
    return e14 && s13 ? this.fromOptimizedCIM(e14, s13) : null;
  }
  static createEmptyOptimized(t15, e14 = false, s13 = false, i14 = 1) {
    return new p().initialize(new e2(), t15, e14, s13, i14);
  }
  static createEmptyJSON(t15, e14 = false, s13 = false) {
    return new d2().initialize([], t15, e14, s13, 1);
  }
  static createEmptyOptimizedCIM(t15, e14 = false, s13 = false, i14 = 1) {
    return new m3().initialize(new e2(), t15, e14, s13, i14);
  }
  static createEmptyJSONCIM(t15, e14 = false, s13 = false, i14 = 1) {
    return new y2().initialize([], t15, e14, s13, i14);
  }
  asJSON() {
    const t15 = t2(this);
    return "esriGeometryEnvelope" === this.geometryType ? {
      xmin: t15[0][0][0],
      ymin: t15[0][0][1],
      xmax: t15[0][2][0],
      ymax: t15[0][2][1]
    } : "esriGeometryMultipoint" === this.geometryType ? {
      points: t15.flat()
    } : "esriGeometryPoint" === this.geometryType ? {
      x: t15[0][0][0],
      y: t15[0][0][1]
    } : "esriGeometryPolygon" === this.geometryType ? {
      rings: t15
    } : {
      paths: t15
    };
  }
  getCurrentRingArea() {
    if (this.pathSize < 3) return 0;
    let t15, e14, s13 = 0;
    if (this.seekPathStart(), !this.nextPoint()) return 0;
    t15 = this.x, e14 = this.y;
    const i14 = t15, h8 = e14;
    for (; this.nextPoint(); ) s13 += (t15 - this.x) * (e14 + this.y), t15 = this.x, e14 = this.y;
    return s13 += (t15 - i14) * (e14 + h8), -0.5 * s13;
  }
  invertY() {
    this.yFactor *= -1;
  }
};
var p = class _p extends a6 {
  constructor() {
    super(...arguments), this._end = -1;
  }
  initialize(t15, e14, s13, i14, h8) {
    return this.hasZ = s13, this.hasM = i14, this.geometryType = e14, this._stride = 2 + Number(s13) + Number(i14), this._geometry = t15, this._pathIndex = -1, this._pathOffset = 0, this._pointOffset = -this._stride, this._end = -1, this.yFactor = h8, this;
  }
  reset() {
    this.initialize(this._geometry, this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  seekPath(t15) {
    if (t15 >= 0 && t15 < this.totalSize) {
      if (this._pathIndex < t15) for (; this._pathIndex < t15 && this.nextPath(); ) ;
      else if (this._pathIndex > t15) for (; this._pathIndex > t15 && this.prevPath(); ) ;
      return true;
    }
    return false;
  }
  seekPathStart() {
    this._pointOffset = this._pathOffset - this._stride;
  }
  seekPathEnd() {
    this._pointOffset = this._end;
  }
  seekInPath(t15) {
    const e14 = this._pathOffset + t15 * this._stride;
    return e14 >= 0 && e14 < this._end && (this._pointOffset = e14, true);
  }
  nextPoint() {
    return (this._pointOffset += this._stride) < this._end;
  }
  prevPoint() {
    return (this._pointOffset -= this._stride) >= this._pathOffset;
  }
  nextPath() {
    return !(this.pathIndex >= this.totalSize - 1) && (this._pathIndex >= 0 && (this._pathOffset += this._stride * this.pathSize), this._pathIndex++, this._pointOffset = this._pathOffset - this._stride, this._end = this._pointOffset + this._stride + this._stride * this.pathSize, true);
  }
  prevPath() {
    return !(this.pathIndex <= 0) && (this._pathIndex--, this._end = this._pathOffset, this._pathOffset -= this._stride * this.pathSize, this._pointOffset = this._pathOffset - this._stride, true);
  }
  pathLength() {
    const t15 = this._end, e14 = this._stride, s13 = this._geometry.coords;
    let i14 = 0;
    for (let h8 = this._pathOffset + e14; h8 < t15; h8 += e14) {
      const t16 = s13[h8 - e14], r18 = s13[h8 - e14 + 1], n17 = s13[h8] - t16, o9 = s13[h8 + 1] - r18;
      i14 += Math.sqrt(n17 * n17 + o9 * o9);
    }
    return i14;
  }
  startPath() {
    this._geometry.lengths.push(0);
  }
  pushPath(t15) {
    this.startPath(), this.pushPoints(t15);
  }
  pushPoint(t15) {
    for (let e14 = 0; e14 < this._stride; ++e14) this._geometry.coords.push(t15[e14]);
    this._geometry.lengths[this.totalSize - 1]++;
  }
  pushXY(t15, e14) {
    this._geometry.coords.push(t15, e14), this._geometry.lengths[this.totalSize - 1]++;
  }
  pushPoints(t15) {
    for (const e14 of t15) for (let t16 = 0; t16 < this._stride; ++t16) this._geometry.coords.push(e14[t16]);
    this._geometry.lengths[this.totalSize - 1] += t15.length;
  }
  pushCursor(t15) {
    const e14 = t15.asOptimized();
    this._geometry.coords.push(...e14.coords), this._geometry.lengths.push(...e14.lengths);
  }
  asOptimized() {
    const t15 = this._geometry.clone();
    if (1 !== this.yFactor) for (let e14 = 1; e14 < t15.coords.length; e14 += this._stride) t15.coords[e14] *= this.yFactor;
    return "esriGeometryPoint" === this.geometryType && (t15.lengths.length = 0), t15;
  }
  isClosed() {
    const t15 = this._geometry.coords, e14 = this._pathOffset, s13 = this._end - this._stride;
    for (let i14 = 0; i14 < this._stride; i14++) if (t15[e14 + i14] !== t15[s13 + i14]) return false;
    return true;
  }
  clone() {
    return new _p().initialize(this._geometry.clone(), this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  get totalPoints() {
    return this._geometry.isPoint ? 1 : this._geometry.lengths.reduce((t15, e14) => t15 + e14);
  }
  get pathSize() {
    const {
      lengths: t15
    } = this._geometry;
    return this._geometry.isPoint ? 1 : this._pathIndex < 0 || this._pathIndex > t15.length - 1 ? 0 : t15[this._pathIndex];
  }
  get totalSize() {
    return this._geometry.isPoint ? 1 : this._geometry.lengths.length;
  }
  get x() {
    return this._geometry.coords[this._pointOffset];
  }
  set x(t15) {
    this._geometry.coords[this._pointOffset] = t15;
  }
  get y() {
    return this.yFactor * this._geometry.coords[this._pointOffset + 1];
  }
  set y(t15) {
    this._geometry.coords[this._pointOffset + 1] = this.yFactor * t15;
  }
  get z() {
    return this._geometry.coords[this._pointOffset + 2];
  }
  set z(t15) {
    this._geometry.coords[this._pointOffset + 2] = t15;
  }
  get m() {
    const t15 = this.hasZ ? 3 : 2;
    return this._geometry.coords[this._pointOffset + t15];
  }
  set m(t15) {
    this._geometry.coords[this._pointOffset + 3] = t15;
  }
  get pathIndex() {
    return this._pathIndex;
  }
  get _coordIndex() {
    return this._pointOffset / this._stride;
  }
};
function _(t15) {
  const e14 = [t15.x, t15.y];
  return t15.z && e14.push(t15.z), t15.m && e14.push(t15.m), e14;
}
function u6(t15) {
  return f6(t15) ? [t15.rings, "esriGeometryPolygon"] : s(t15) ? [t15.paths, "esriGeometryPolyline"] : l2(t15) ? [[t15.points], "esriGeometryMultipoint"] : m(t15) ? [[[[t15.xmin, t15.ymin], [t15.xmin, t15.ymax], [t15.xmax, t15.ymax], [t15.xmax, t15.ymin], [t15.xmin, t15.ymin]]], "esriGeometryEnvelope"] : u2(t15) ? [[[_(t15)]], "esriGeometryPoint"] : [[], "esriGeometryPolyline"];
}
var d2 = class _d extends a6 {
  initialize(t15, e14, s13, i14, h8) {
    return this._paths = t15, this.geometryType = e14, this.hasZ = s13, this.hasM = i14, this._pathIndex = this._pointIndex = -1, this.yFactor = h8, this._mIndex = this.hasZ ? 3 : 2, this;
  }
  reset() {
    this._pathIndex = this._pointIndex = -1;
  }
  seekPath(t15) {
    return this._pathIndex = t15, this._pointIndex = -1, t15 >= 0 && t15 < this.totalSize && (this._currentPath = this._paths[t15], true);
  }
  seekPathStart() {
    this._pointIndex = -1;
  }
  seekPathEnd() {
    this._pointIndex = this._currentPath.length;
  }
  seekInPath(t15) {
    return t15 >= 0 && t15 < this._currentPath.length && (this._pointIndex = t15, this._currentPoint = this._currentPath[this._pointIndex], true);
  }
  nextPoint() {
    return this._currentPoint = this._currentPath[++this._pointIndex], this._pointIndex < this._currentPath.length;
  }
  prevPoint() {
    return this._currentPoint = this._currentPath[--this._pointIndex], this._pointIndex >= 0;
  }
  nextPath() {
    return this._pointIndex = -1, this._currentPath = this._paths[++this._pathIndex], this._pathIndex < this.totalSize;
  }
  prevPath() {
    return this.pathIndex > 0 && (this._pointIndex = -1, this._pathIndex--, this._currentPath = this._paths[this._pathIndex], true);
  }
  pathLength() {
    const t15 = this._currentPath.length, e14 = this._currentPath;
    let s13 = 0;
    for (let i14 = 1; i14 < t15; i14++) {
      const t16 = e14[i14 - 1], h8 = e14[i14], r18 = t16[0], n17 = t16[1], o9 = h8[0] - r18, a12 = h8[1] - n17;
      s13 += Math.sqrt(o9 * o9 + a12 * a12);
    }
    return s13;
  }
  startPath() {
    this._paths.push([]);
  }
  pushPath(t15) {
    this._paths.push(t15);
  }
  pushPoint(t15) {
    this._paths[this.totalSize - 1].push(t15);
  }
  pushXY(t15, e14) {
    this._paths[this.totalSize - 1].push([t15, e14]);
  }
  pushPoints(t15) {
    this._paths[this.totalSize - 1].push(...t15);
  }
  pushCursor(t15) {
    const s13 = t2(t15);
    for (const e14 of s13) this.pushPath(e14);
  }
  asOptimized() {
    const t15 = new e2();
    if ("esriGeometryPoint" === this.geometryType) t15.coords.push(...this._paths[0][0]), t15.lengths.length = 0;
    else for (const e14 of this._paths) {
      for (const s13 of e14) t15.coords.push(s13[0]), t15.coords.push(s13[1] * this.yFactor), this.hasZ && t15.coords.push(s13[2]), this.hasM && t15.coords.push(s13[this._mIndex]);
      t15.lengths.push(e14.length);
    }
    return t15;
  }
  isClosed() {
    const t15 = this._currentPath[0], e14 = this._currentPath[this._currentPath.length - 1];
    for (let s13 = 0; s13 < t15.length; s13++) if (t15[s13] !== e14[s13]) return false;
    return true;
  }
  clone() {
    return new _d().initialize(a(this._paths), this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  get totalPoints() {
    return this._paths.map((t15) => t15.length).reduce((t15, e14) => t15 + e14);
  }
  get pathSize() {
    return this._pathIndex < 0 || this._pathIndex > this.totalSize - 1 ? -1 : this._paths[this._pathIndex].length;
  }
  get totalSize() {
    return this._paths.length;
  }
  get x() {
    return this._currentPoint[0];
  }
  set x(t15) {
    this._currentPoint[0] = t15;
  }
  get y() {
    return this.yFactor * this._currentPoint[1];
  }
  set y(t15) {
    this._currentPoint[1] = this.yFactor * t15;
  }
  get z() {
    return this._currentPoint[2];
  }
  set z(t15) {
    this._currentPoint[2] = t15;
  }
  get m() {
    return this._currentPoint[this._mIndex];
  }
  set m(t15) {
    this._currentPoint[this._mIndex] = t15;
  }
  get pathIndex() {
    return this._pathIndex;
  }
};
var c2 = 4;
var l4 = 1;
var m3 = class _m extends p {
  initialize(t15, e14, s13, i14, h8) {
    return super.initialize(t15, e14, s13, i14, h8), this._controlPoints || (this._controlPoints = this._controlPoints = new Array(this.totalSize).fill(void 0).map((t16) => /* @__PURE__ */ new Set())), this;
  }
  startPath() {
    super.startPath(), this._controlPoints.push(/* @__PURE__ */ new Set());
  }
  clone() {
    const t15 = new _m().initialize(this._geometry.clone(), this.geometryType, this.hasZ, this.hasM, this.yFactor);
    return t15._controlPoints = this._controlPoints, t15;
  }
  setControlPoint() {
    this._controlPoints[this.pathIndex].add(this._coordIndex);
  }
  getControlPoint() {
    return this._controlPoints[this.pathIndex].has(this._coordIndex);
  }
  setControlPointAt(t15) {
    this._controlPoints[this.pathIndex].add(t15);
  }
  getControlPointAt(t15) {
    return this._controlPoints[this.pathIndex].has(t15);
  }
};
var y2 = class _y extends d2 {
  initialize(t15, e14, s13, i14, h8) {
    return super.initialize(t15, e14, s13, i14, h8);
  }
  clone() {
    return new _y().initialize(a(this._paths), this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  setControlPoint() {
    this._paths[this.pathIndex][this._pointIndex][c2] = l4;
  }
  getControlPoint() {
    return this._paths[this.pathIndex][this._pointIndex][c2] === l4;
  }
  setControlPointAt(t15) {
    this._paths[this.pathIndex][t15][c2] = l4;
  }
  getControlPointAt(t15) {
    return this._paths[this.pathIndex][t15][c2] === l4;
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/CIMEffects.js
var r2 = 512;
var n5;
var s4 = class {
  constructor(t15) {
    this._geometry = t15;
  }
  next() {
    const t15 = this._geometry;
    return this._geometry = null, t15;
  }
};
function i5(s13, i14) {
  n5 || (n5 = new e4(0, 0, 0, 1));
  const y5 = "esriGeometryPolygon" === s13.geometryType, m6 = y5 ? i2.Polygon : i2.LineString, l11 = y5 ? 3 : 2;
  let c5, p7;
  for (n5.reset(m6), n5.setPixelMargin(i14 + 1), n5.setExtent(r2); s13.nextPath(); ) if (!(s13.pathSize < l11)) {
    for (s13.nextPoint(), c5 = s13.x, p7 = -s13.y, n5.moveTo(c5, p7); s13.nextPoint(); ) c5 = s13.x, p7 = -s13.y, n5.lineTo(c5, p7);
    y5 && n5.close();
  }
  const f9 = n5.result(false);
  if (f9) {
    const e14 = a6.createEmptyOptimizedCIM(s13.geometryType);
    for (const t15 of f9) {
      e14.startPath();
      for (const o9 of t15) e14.pushXY(o9.x, -o9.y);
    }
    return e14.reset(), e14;
  }
  return null;
}

// ../../../node_modules/@arcgis/core/symbols/cim/CIMPlacements.js
var t7 = class {
  constructor() {
    this.setIdentity();
  }
  getAngle() {
    return (null == this.rz || 0 === this.rz && 1 !== this.rzCos && 0 !== this.rzSin) && (this.rz = Math.atan2(this.rzSin, this.rzCos)), this.rz;
  }
  setIdentity() {
    this.tx = 0, this.ty = 0, this.tz = 0, this.s = 1, this.rx = 0, this.ry = 0, this.rz = 0, this.rzCos = 1, this.rzSin = 0;
  }
  setTranslate(t15, s13) {
    this.tx = t15, this.ty = s13;
  }
  setTranslateZ(t15) {
    this.tz = t15;
  }
  setRotateCS(t15, s13) {
    this.rz = void 0, this.rzCos = t15, this.rzSin = s13;
  }
  setRotate(t15) {
    this.rz = t15, this.rzCos = void 0, this.rzSin = void 0;
  }
  setRotateY(t15) {
    this.ry = t15;
  }
  setScale(t15) {
    this.s = t15;
  }
  setMeasure(t15) {
    this.m = t15;
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/CIMCursor.js
function r3(t15, e14) {
  t15[4] = e14;
}
var s5 = class {
  constructor(t15, i14 = true, r18 = true, s13 = 0) {
    this.isClosed = false, this.geometryCursor = null, this.geometryCursor = !i14 && "esriGeometryPolygon" === t15.geometryType || !r18 && "esriGeometryPolyline" === t15.geometryType ? null : t15, this.geomUnitsPerPoint = s13, this.iterateMultiPath = false, this.iteratePath = false, this.internalPlacement = new t7();
  }
  next() {
    if (!this.geometryCursor) return null;
    const t15 = this.processMultiPath(this.geometryCursor);
    return this.iterateMultiPath && t15 || (this.geometryCursor = null), t15;
  }
  processMultiPath(t15) {
    for (; this.iteratePath || t15.pathIndex < t15.totalSize - 1; ) {
      this.iteratePath || t15.nextPath(), this.iterateMultiPath = true;
      const e14 = this.processPath(t15);
      if (e14) return e14;
    }
    return this.iterateMultiPath = false, null;
  }
};
var h2 = class {
  constructor(t15, e14, i14, r18 = 0) {
    this.isClosed = false, this._tileKey = null, this.inputGeometries = t15, this.acceptPolygon = e14, this.acceptPolyline = i14, this.geomUnitsPerPoint = r18, this.iteratePath = false, this.multiPathCursor = null;
  }
  next() {
    for (; ; ) {
      if (!this.multiPathCursor) {
        let e14 = this.inputGeometries.next();
        for (; e14 && (this.isClosed = this.acceptPolygon && "esriGeometryPolygon" === e14.geometryType || "esriGeometryEnvelope" === e14.geometryType, this.multiPathCursor = e14, !this.multiPathCursor); ) e14 = this.inputGeometries.next();
        if (!this.multiPathCursor) return null;
        this._tileKey && this.isClippingRequired(this.multiPathCursor) && (this.multiPathCursor.reset(), this.multiPathCursor = i5(this.multiPathCursor, 256));
      }
      for (; this.iteratePath || this.multiPathCursor.nextPath(); ) {
        this.multiPathCursor.seekPathStart();
        const t15 = this.processPath(this.multiPathCursor);
        if (t15) return t15;
      }
      this.multiPathCursor = null;
    }
  }
  isClippingRequired(t15) {
    return false;
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/CurveHelper.js
var n6 = 0.03;
var s6 = class {
  constructor(t15 = 0, e14 = false) {
  }
  isEmpty(t15) {
    if (!t15.nextPoint()) return true;
    let e14, n17, s13, r18;
    for (e14 = t15.x, n17 = t15.y; t15.nextPoint(); e14 = n17, n17 = r18) if (s13 = t15.x, r18 = t15.y, s13 !== e14 || r18 !== n17) return t15.seekPathStart(), false;
    return t15.seekPathStart(), true;
  }
  normalize(t15) {
    const e14 = Math.sqrt(t15[0] * t15[0] + t15[1] * t15[1]);
    0 !== e14 && (t15[0] /= e14, t15[1] /= e14);
  }
  getLength(t15, e14, n17, s13) {
    const r18 = n17 - t15, o9 = s13 - e14;
    return Math.sqrt(r18 * r18 + o9 * o9);
  }
  getSegLength(t15) {
    const [[e14, n17], [s13, r18]] = t15;
    return this.getLength(e14, n17, s13, r18);
  }
  getCoord2D(t15, e14, n17, s13, r18) {
    return [t15 + (n17 - t15) * r18, e14 + (s13 - e14) * r18];
  }
  getSegCoord2D(t15, e14) {
    const [[n17, s13], [r18, o9]] = t15;
    return this.getCoord2D(n17, s13, r18, o9, e14);
  }
  getAngle(t15, e14, n17, s13, r18) {
    const o9 = n17 - t15, i14 = s13 - e14;
    return Math.atan2(i14, o9);
  }
  getAngleCS(t15, e14, n17, s13, r18) {
    const o9 = n17 - t15, i14 = s13 - e14, u14 = Math.sqrt(o9 * o9 + i14 * i14);
    return u14 > 0 ? [o9 / u14, i14 / u14] : [1, 0];
  }
  getSegAngleCS(t15, e14) {
    const [[n17, s13], [r18, o9]] = t15;
    return this.getAngleCS(n17, s13, r18, o9, e14);
  }
  cut(t15, e14, n17, s13, r18, o9) {
    return [r18 <= 0 ? [t15, e14] : this.getCoord2D(t15, e14, n17, s13, r18), o9 >= 1 ? [n17, s13] : this.getCoord2D(t15, e14, n17, s13, o9)];
  }
  getSubCurve(e14, n17, s13) {
    const r18 = a6.createEmptyOptimizedCIM("esriGeometryPolyline");
    return this.appendSubCurve(r18, e14, n17, s13) ? r18 : null;
  }
  appendSubCurve(t15, e14, n17, s13) {
    t15.startPath(), e14.seekPathStart();
    let r18 = 0, o9 = true;
    if (!e14.nextPoint()) return false;
    let i14 = e14.x, u14 = e14.y;
    for (; e14.nextPoint(); ) {
      const h8 = this.getLength(i14, u14, e14.x, e14.y);
      if (0 !== h8) {
        if (o9) {
          if (r18 + h8 > n17) {
            const l11 = (n17 - r18) / h8;
            let a12 = 1, c5 = false;
            r18 + h8 >= s13 && (a12 = (s13 - r18) / h8, c5 = true);
            const f9 = this.cut(i14, u14, e14.x, e14.y, l11, a12);
            if (f9 && t15.pushPoints(f9), c5) break;
            o9 = false;
          }
        } else {
          if (r18 + h8 > s13) {
            const n18 = this.cut(i14, u14, e14.x, e14.y, 0, (s13 - r18) / h8);
            n18 && t15.pushPoint(n18[1]);
            break;
          }
          t15.pushXY(e14.x, e14.y);
        }
        r18 += h8, i14 = e14.x, u14 = e14.y;
      } else i14 = e14.x, u14 = e14.y;
    }
    return true;
  }
  getCIMPointAlong(t15, e14) {
    if (!t15.nextPoint()) return null;
    let n17, s13, r18, o9, i14 = 0;
    for (n17 = t15.x, s13 = t15.y; t15.nextPoint(); n17 = r18, s13 = o9) {
      r18 = t15.x, o9 = t15.y;
      const u14 = this.getLength(n17, s13, r18, o9);
      if (0 !== u14) {
        if (i14 + u14 > e14) {
          const t16 = (e14 - i14) / u14;
          return this.getCoord2D(n17, s13, r18, o9, t16);
        }
        i14 += u14;
      }
    }
    return null;
  }
  offset(t15, n17, s13, r18, o9) {
    if (!t15 || t15.length < 2) return null;
    let i14 = 0, u14 = t15[i14++], h8 = i14;
    for (; i14 < t15.length; ) {
      const e14 = t15[i14];
      e14[0] === u14[0] && e14[1] === u14[1] || (i14 !== h8 && (t15[h8] = t15[i14]), u14 = t15[h8++]), i14++;
    }
    const l11 = t15[0][0] === t15[h8 - 1][0] && t15[0][1] === t15[h8 - 1][1];
    if (l11 && --h8, h8 < (l11 ? 3 : 2)) return null;
    const a12 = [];
    u14 = l11 ? t15[h8 - 1] : null;
    let c5 = t15[0];
    for (let f9 = 0; f9 < h8; f9++) {
      const o10 = f9 === h8 - 1 ? l11 ? t15[0] : null : t15[f9 + 1];
      if (u14) {
        if (o10) {
          const t16 = [o10[0] - c5[0], o10[1] - c5[1]];
          this.normalize(t16);
          const i15 = [c5[0] - u14[0], c5[1] - u14[1]];
          this.normalize(i15);
          const h9 = i15[0] * t16[1] - i15[1] * t16[0], l12 = i15[0] * t16[0] + i15[1] * t16[1];
          if (0 === h9 && 1 === l12) {
            c5 = o10;
            continue;
          }
          if (h9 >= 0 == n17 <= 0) {
            if (l12 < 1) {
              const e14 = [t16[0] - i15[0], t16[1] - i15[1]];
              this.normalize(e14);
              const s14 = Math.sqrt((1 + l12) / 2);
              if (s14 > 1 / r18) {
                const t17 = -Math.abs(n17) / s14;
                a12.push([c5[0] - e14[0] * t17, c5[1] - e14[1] * t17]);
              }
            }
          } else switch (s13) {
            case O.Mitered: {
              const e14 = Math.sqrt((1 + l12) / 2);
              if (e14 > 0 && 1 / e14 < r18) {
                const s14 = [t16[0] - i15[0], t16[1] - i15[1]];
                this.normalize(s14);
                const r19 = Math.abs(n17) / e14;
                a12.push([c5[0] - s14[0] * r19, c5[1] - s14[1] * r19]);
                break;
              }
            }
            case O.Bevelled:
              a12.push([c5[0] + i15[1] * n17, c5[1] - i15[0] * n17]), a12.push([c5[0] + t16[1] * n17, c5[1] - t16[0] * n17]);
              break;
            case O.Rounded:
              if (l12 < 1) {
                a12.push([c5[0] + i15[1] * n17, c5[1] - i15[0] * n17]);
                const e14 = Math.floor(2.5 * (1 - l12));
                if (e14 > 0) {
                  const s14 = 1 / e14;
                  let r19 = s14;
                  for (let o11 = 1; o11 < e14; o11++, r19 += s14) {
                    const e15 = [i15[1] * (1 - r19) + t16[1] * r19, -i15[0] * (1 - r19) - t16[0] * r19];
                    this.normalize(e15), a12.push([c5[0] + e15[0] * n17, c5[1] + e15[1] * n17]);
                  }
                }
                a12.push([c5[0] + t16[1] * n17, c5[1] - t16[0] * n17]);
              }
              break;
            case O.Square:
            default:
              if (h9 < 0) a12.push([c5[0] + (i15[1] + i15[0]) * n17, c5[1] + (i15[1] - i15[0]) * n17]), a12.push([c5[0] + (t16[1] - t16[0]) * n17, c5[1] - (t16[0] + t16[1]) * n17]);
              else {
                const e14 = Math.sqrt((1 + Math.abs(l12)) / 2), s14 = [t16[0] - i15[0], t16[1] - i15[1]];
                this.normalize(s14);
                const r19 = n17 / e14;
                a12.push([c5[0] - s14[0] * r19, c5[1] - s14[1] * r19]);
              }
          }
        } else {
          const t16 = [c5[0] - u14[0], c5[1] - u14[1]];
          this.normalize(t16), a12.push([c5[0] + t16[1] * n17, c5[1] - t16[0] * n17]);
        }
      } else {
        const t16 = [o10[0] - c5[0], o10[1] - c5[1]];
        this.normalize(t16), a12.push([c5[0] + t16[1] * n17, c5[1] - t16[0] * n17]);
      }
      u14 = c5, c5 = o10;
    }
    return a12.length < (l11 ? 3 : 2) ? null : (l11 && a12.push([a12[0][0], a12[0][1]]), a12);
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/effects/EffectArrow.js
var c3 = 1.7320508075688772;
var u7 = 5;
var h3 = P2.OpenEnded;
var p2 = class _p {
  static local() {
    return null === _p.instance && (_p.instance = new _p()), _p.instance;
  }
  execute(t15, e14, r18, n17, o9) {
    return new P3(t15, e14, r18);
  }
};
p2.instance = null;
var P3 = class extends h2 {
  constructor(t15, e14, r18) {
    super(t15, false, true), this._curveHelper = new s6(), this._width = (void 0 !== e14.width ? e14.width : u7) * r18, this._arrowType = void 0 !== e14.geometricEffectArrowType ? e14.geometricEffectArrowType : void 0 !== e14.arrowType ? e14.arrowType : h3, this._offsetFlattenError = n6 * r18;
  }
  processPath(e14) {
    const r18 = a6.createEmptyOptimizedCIM(e14.geometryType);
    switch (this._arrowType) {
      case P2.OpenEnded:
      default:
        this._constructSimpleArrow(r18, e14, true);
        break;
      case P2.Block:
        this._constructSimpleArrow(r18, e14, false);
        break;
      case P2.Crossed:
        this._constructCrossedArrow(r18, e14);
    }
    return r18;
  }
  _constructSimpleArrow(t15, r18, n17) {
    const o9 = r18.pathLength();
    let s13 = this._width;
    o9 < 2 * s13 && (s13 = o9 / 2);
    const i14 = this._curveHelper.getSubCurve(r18, 0, o9 - s13);
    if (!i14 || !i14.nextPath()) return;
    i14.seekPathStart();
    const c5 = s13 / 2;
    if (this._curveHelper.isEmpty(i14)) return;
    const u14 = n2(i14), h8 = this._constructOffset(u14, -c5);
    if (!h8) return;
    const p7 = this._constructOffset(u14, c5);
    if (!p7) return;
    const P5 = this._constructArrowBasePoint(h8, -c5 / 2);
    if (!P5) return;
    const l11 = this._constructArrowBasePoint(p7, c5 / 2);
    if (!l11) return;
    r18.seekInPath(r18.pathSize - 1);
    const f9 = [r18.x, r18.y];
    t15.pushPath(p7), t15.nextPath(), t15.nextPoint(), t15.setControlPoint(), t15.pushPoint(l11), t15.nextPoint(), t15.setControlPoint(), t15.pushPoint(f9), t15.nextPoint(), t15.setControlPoint(), t15.pushPoint(P5), t15.nextPoint(), t15.setControlPoint(), t15.pushPoints(h8.reverse()), t15.setControlPoint(), n17 || (t15.setControlPointAt(0), t15.setControlPointAt(t15.pathSize - 1), t15.pushPoint(p7[0])), t15.reset();
  }
  _constructCrossedArrow(t15, r18) {
    const n17 = r18.pathLength();
    let o9 = this._width;
    n17 < o9 * (1 + c3 + 1) && (o9 = n17 / (1 + c3 + 1)), r18.seekPathStart();
    const s13 = this._curveHelper.getSubCurve(r18, 0, n17 - o9 * (1 + c3));
    if (!s13) return;
    s13.nextPath();
    const i14 = o9 / 2;
    if (this._curveHelper.isEmpty(s13)) return;
    const u14 = n2(s13), h8 = this._constructOffset(u14, i14);
    if (!h8) return;
    const p7 = this._constructOffset(u14, -i14);
    if (!p7) return;
    const P5 = this._curveHelper.getSubCurve(r18, 0, n17 - o9);
    if (!P5) return;
    if (P5.nextPath(), this._curveHelper.isEmpty(P5)) return;
    const l11 = n2(P5), f9 = this._constructOffset(l11, i14);
    if (!f9) return;
    const a12 = this._constructOffset(l11, -i14);
    if (!a12) return;
    const _6 = f9[f9.length - 1], m6 = this._constructArrowBasePoint(f9, i14 / 2);
    if (!m6) return;
    const C5 = a12[a12.length - 1], w5 = this._constructArrowBasePoint(a12, -i14 / 2);
    if (!w5) return;
    r18.seekInPath(r18.pathSize - 1);
    const x4 = [r18.x, r18.y];
    t15.pushPath(h8), t15.nextPath(), t15.nextPoint(), t15.setControlPoint(), t15.pushPoint(C5), t15.nextPoint(), t15.setControlPoint(), t15.pushPoint(w5), t15.nextPoint(), t15.setControlPoint(), t15.pushPoint(x4), t15.nextPoint(), t15.setControlPoint(), t15.pushPoint(m6), t15.nextPoint(), t15.setControlPoint(), t15.pushPoint(_6), t15.nextPoint(), t15.setControlPoint(), t15.pushPoints(p7.reverse()), t15.nextPoint(), t15.setControlPoint(), t15.reset();
  }
  _constructOffset(t15, e14) {
    return this._curveHelper.offset(t15, e14, O.Rounded, 4, this._offsetFlattenError);
  }
  _constructArrowBasePoint(t15, e14) {
    if (!t15 || t15.length < 2) return null;
    const r18 = t15[t15.length - 2], n17 = t15[t15.length - 1], o9 = [n17[0] - r18[0], n17[1] - r18[1]];
    return this._curveHelper.normalize(o9), [n17[0] + o9[1] * e14, n17[1] - o9[0] * e14];
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/effects/EffectBuffer.js
var m4 = class _m {
  static local() {
    return null === _m.instance && (_m.instance = new _m()), _m.instance;
  }
  execute(e14, t15, i14, s13, r18, n17) {
    return new l5(e14, t15, i14, s13, r18, n17);
  }
};
m4.instance = null;
var l5 = class {
  constructor(e14, t15, i14, n17, o9, m6) {
    this._inputGeometries = e14, this._tileKey = n17, this._geometryEngine = o9, this._curveHelper = new s6(), this._size = (void 0 !== t15.size ? t15.size : 1) * i14, this._maxInflateSize = m6 * i14, this._offsetFlattenError = n6 * i14;
  }
  next() {
    let s13;
    for (; s13 = this._inputGeometries.next(); ) {
      if (0 === this._size) return s13;
      if ("esriGeometryEnvelope" === s13.geometryType) {
        if (this._size > 0) {
          const i14 = a6.createEmptyOptimizedCIM(s13.geometryType), r19 = t2(s13)[0], o9 = this._curveHelper.offset(r19, this._size, O.Rounded, 4, this._offsetFlattenError);
          if (o9) return i14.pushPath(o9), i14;
        } else if (this._size < 0) {
          const t15 = s13.asJSON();
          if (Math.min(t15.xmax - t15.xmin, t15.ymax - t15.ymin) + 2 * this._size > 0) return a6.fromJSONCIM({
            xmin: t15.xmin - this._size,
            xmax: t15.xmax + this._size,
            ymin: t15.ymin - this._size,
            ymax: t15.ymax + this._size
          });
        }
      }
      const r18 = this._geometryEngine;
      if (null == r18) return null;
      const m6 = this._tileKey ? i5(s13, this._maxInflateSize) : s13;
      if (!m6) continue;
      const l11 = r18.buffer(f.WebMercator, m6.asJSON(), this._size, 1);
      return l11 ? a6.fromJSONCIM(l11) : null;
    }
    return null;
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/effects/EffectControlMeasureLine.js
var e7 = class _e {
  static local() {
    return null === _e.instance && (_e.instance = new _e()), _e.instance;
  }
  execute(s13, t15, i14, h8, e14) {
    return new r4(s13, t15, i14);
  }
};
e7.instance = null;
var r4 = class {
  constructor(s13, t15, i14) {
    this._defaultPointSize = 20, this._inputGeometries = s13, this._geomUnitsPerPoint = i14, this._rule = t15.rule ?? R.FullGeometry, this._defaultSize = this._defaultPointSize * i14;
  }
  next() {
    let i14;
    for (; i14 = this._inputGeometries.next(); ) {
      const h8 = this._processGeom(t2(i14));
      if (h8?.length) return a6.fromJSONCIM({
        paths: h8
      });
    }
    return null;
  }
  _clone(s13) {
    return [s13[0], s13[1]];
  }
  _mid(s13, t15) {
    return [(s13[0] + t15[0]) / 2, (s13[1] + t15[1]) / 2];
  }
  _mix(s13, t15, i14, h8) {
    return [s13[0] * t15 + i14[0] * h8, s13[1] * t15 + i14[1] * h8];
  }
  _add(s13, t15) {
    return [s13[0] + t15[0], s13[1] + t15[1]];
  }
  _add2(s13, t15, i14) {
    return [s13[0] + t15, s13[1] + i14];
  }
  _sub(s13, t15) {
    return [s13[0] - t15[0], s13[1] - t15[1]];
  }
  _dist(s13, t15) {
    return Math.sqrt((s13[0] - t15[0]) * (s13[0] - t15[0]) + (s13[1] - t15[1]) * (s13[1] - t15[1]));
  }
  _norm(s13) {
    return Math.sqrt(s13[0] * s13[0] + s13[1] * s13[1]);
  }
  _normalize(s13, t15 = 1) {
    const i14 = t15 / this._norm(s13);
    s13[0] *= i14, s13[1] *= i14;
  }
  _leftPerpendicular(s13) {
    const t15 = -s13[1], i14 = s13[0];
    s13[0] = t15, s13[1] = i14;
  }
  _leftPerp(s13) {
    return [-s13[1], s13[0]];
  }
  _rightPerpendicular(s13) {
    const t15 = s13[1], i14 = -s13[0];
    s13[0] = t15, s13[1] = i14;
  }
  _rightPerp(s13) {
    return [s13[1], -s13[0]];
  }
  _dotProduct(s13, t15) {
    return s13[0] * t15[0] + s13[1] * t15[1];
  }
  _crossProduct(s13, t15) {
    return s13[0] * t15[1] - s13[1] * t15[0];
  }
  _rotateDirect(s13, t15, i14) {
    const h8 = s13[0] * t15 - s13[1] * i14, e14 = s13[0] * i14 + s13[1] * t15;
    s13[0] = h8, s13[1] = e14;
  }
  _makeCtrlPt(s13) {
    const t15 = [s13[0], s13[1]];
    return r3(t15, 1), t15;
  }
  _addAngledTicks(s13, t15, i14, h8) {
    const e14 = this._sub(i14, t15);
    this._normalize(e14);
    const r18 = this._crossProduct(e14, this._sub(h8, t15));
    let _6;
    _6 = r18 > 0 ? this._rightPerp(e14) : this._leftPerp(e14);
    const c5 = Math.abs(r18) / 2, u14 = [];
    u14.push([t15[0] + (_6[0] - e14[0]) * c5, t15[1] + (_6[1] - e14[1]) * c5]), u14.push(t15), u14.push(i14), u14.push([i14[0] + (_6[0] + e14[0]) * c5, i14[1] + (_6[1] + e14[1]) * c5]), s13.push(u14);
  }
  _addBezier2(s13, t15, i14, h8, e14) {
    if (0 == e14--) return void s13.push(h8);
    const r18 = this._mid(t15, i14), _6 = this._mid(i14, h8), c5 = this._mid(r18, _6);
    this._addBezier2(s13, t15, r18, c5, e14), this._addBezier2(s13, c5, _6, h8, e14);
  }
  _addBezier3(s13, t15, i14, h8, e14, r18) {
    if (0 == r18--) return void s13.push(e14);
    const _6 = this._mid(t15, i14), c5 = this._mid(i14, h8), u14 = this._mid(h8, e14), o9 = this._mid(_6, c5), n17 = this._mid(c5, u14), a12 = this._mid(o9, n17);
    this._addBezier3(s13, t15, _6, o9, a12, r18), this._addBezier3(s13, a12, n17, u14, e14, r18);
  }
  _add90DegArc(s13, t15, i14, h8, e14) {
    const r18 = e14 ?? this._crossProduct(this._sub(i14, t15), this._sub(h8, t15)) > 0, _6 = this._mid(t15, i14), c5 = this._sub(_6, t15);
    r18 ? this._leftPerpendicular(c5) : this._rightPerpendicular(c5), _6[0] += c5[0], _6[1] += c5[1], this._addBezier3(s13, t15, this._mix(t15, 0.33333, _6, 0.66667), this._mix(i14, 0.33333, _6, 0.66667), i14, 4);
  }
  _addArrow(s13, t15, i14) {
    const h8 = t15[0], e14 = t15[1], r18 = t15[t15.length - 1], _6 = this._sub(h8, e14), c5 = this._norm(_6);
    this._normalize(_6);
    const u14 = Math.abs(this._crossProduct(_6, this._sub(r18, e14)));
    let o9 = this._dotProduct(_6, this._sub(r18, e14));
    o9 < 0.05 * c5 ? o9 = 0.05 * c5 : o9 > 0.95 * c5 && (o9 = 0.95 * c5);
    const n17 = 0.5 * u14, a12 = this._leftPerp(_6), p7 = [e14[0] + _6[0] * o9, e14[1] + _6[1] * o9], d4 = t15.length - 1, l11 = [];
    l11.push(i14 ? [-a12[0], -a12[1]] : a12);
    let b3 = [-_6[0], -_6[1]];
    for (let P5 = 1; P5 < d4 - 1; P5++) {
      const s14 = this._sub(t15[P5 + 1], t15[P5]);
      this._normalize(s14);
      const i15 = this._dotProduct(s14, b3), h9 = this._crossProduct(s14, b3), e15 = Math.sqrt((1 + i15) / 2), r19 = this._sub(s14, b3);
      this._normalize(r19), r19[0] /= e15, r19[1] /= e15, l11.push(h9 < 0 ? [-r19[0], -r19[1]] : r19), b3 = s14;
    }
    l11.push(this._rightPerp(b3));
    for (let P5 = l11.length - 1; P5 > 0; P5--) s13.push([t15[P5][0] + l11[P5][0] * n17, t15[P5][1] + l11[P5][1] * n17]);
    s13.push([p7[0] + l11[0][0] * n17, p7[1] + l11[0][1] * n17]), s13.push([p7[0] + l11[0][0] * u14, p7[1] + l11[0][1] * u14]), s13.push(h8), s13.push([p7[0] - l11[0][0] * u14, p7[1] - l11[0][1] * u14]), s13.push([p7[0] - l11[0][0] * n17, p7[1] - l11[0][1] * n17]);
    for (let P5 = 1; P5 < l11.length; P5++) s13.push([t15[P5][0] - l11[P5][0] * n17, t15[P5][1] - l11[P5][1] * n17]);
  }
  _cp2(s13, t15, i14) {
    return s13.length >= 2 ? s13[1] : this._add2(s13[0], t15 * this._defaultSize, i14 * this._defaultSize);
  }
  _cp3(s13, t15, i14, h8) {
    if (s13.length >= 3) return s13[2];
    const e14 = this._mix(s13[0], 1 - i14, t15, i14), r18 = this._sub(t15, s13[0]);
    return this._normalize(r18), this._rightPerpendicular(r18), [e14[0] + r18[0] * h8 * this._defaultSize, e14[1] + r18[1] * h8 * this._defaultSize];
  }
  _arrowPath(s13) {
    if (s13.length > 2) return s13;
    const t15 = s13[0], i14 = this._cp2(s13, -4, 0), h8 = this._sub(t15, i14);
    this._normalize(h8);
    const e14 = this._rightPerp(h8);
    return [t15, i14, [t15[0] + (e14[0] - h8[0]) * this._defaultSize, t15[1] + (e14[1] - h8[1]) * this._defaultSize]];
  }
  _arrowLastSeg(s13) {
    const t15 = s13[0], i14 = this._cp2(s13, -4, 0);
    let h8;
    if (s13.length >= 3) h8 = s13[s13.length - 1];
    else {
      const s14 = this._sub(t15, i14);
      this._normalize(s14);
      const e14 = this._rightPerp(s14);
      h8 = [t15[0] + (e14[0] - s14[0]) * this._defaultSize, t15[1] + (e14[1] - s14[1]) * this._defaultSize];
    }
    return [i14, h8];
  }
  _processGeom(s13) {
    if (!s13) return null;
    const t15 = [];
    for (const e14 of s13) {
      if (!e14 || 0 === e14.length) continue;
      const s14 = e14.length;
      let r18 = e14[0];
      switch (this._rule) {
        case R.PerpendicularFromFirstSegment: {
          const s15 = this._cp2(e14, 0, -1), i14 = this._cp3(e14, s15, 0.5, 4), h8 = [];
          h8.push(i14), h8.push(this._mid(r18, s15)), t15.push(h8);
          break;
        }
        case R.ReversedFirstSegment: {
          const s15 = this._cp2(e14, 0, -1);
          t15.push([s15, r18]);
          break;
        }
        case R.PerpendicularToSecondSegment: {
          if (e14.length < 3) return [];
          const s15 = this._cp2(e14, -4, 1), i14 = this._cp3(e14, s15, 0.882353, -1.94), h8 = [];
          h8.push(this._mid(s15, i14)), h8.push(r18), t15.push(h8);
          break;
        }
        case R.SecondSegmentWithTicks: {
          if (e14.length < 3) return [];
          const s15 = this._cp2(e14, -4, 1), i14 = this._cp3(e14, s15, 0.882353, -1.94), h8 = this._sub(i14, s15);
          let _6;
          _6 = this._crossProduct(h8, this._sub(r18, s15)) > 0 ? this._rightPerp(h8) : this._leftPerp(h8);
          const c5 = [];
          c5.push([s15[0] + (_6[0] - h8[0]) / 3, s15[1] + (_6[1] - h8[1]) / 3]), c5.push(s15), c5.push(i14), c5.push([i14[0] + (_6[0] + h8[0]) / 3, i14[1] + (_6[1] + h8[1]) / 3]), t15.push(c5);
          break;
        }
        case R.DoublePerpendicular: {
          const s15 = this._cp2(e14, 0, -1), i14 = this._cp3(e14, s15, 0.5, 3), h8 = this._mid(r18, s15), _6 = this._sub(h8, i14);
          this._normalize(_6);
          const c5 = this._crossProduct(_6, this._sub(r18, i14));
          this._leftPerpendicular(_6);
          const u14 = [];
          u14.push(r18), u14.push([i14[0] + _6[0] * c5, i14[1] + _6[1] * c5]), t15.push(u14);
          const o9 = [];
          o9.push([i14[0] - _6[0] * c5, i14[1] - _6[1] * c5]), o9.push(s15), t15.push(o9);
          break;
        }
        case R.OppositeToFirstSegment: {
          const s15 = this._cp2(e14, 0, -1), i14 = this._cp3(e14, s15, 0.5, 3), h8 = this._mid(r18, s15), _6 = this._sub(h8, i14);
          this._normalize(_6);
          const c5 = this._crossProduct(_6, this._sub(r18, i14));
          this._leftPerpendicular(_6);
          const u14 = [];
          u14.push([i14[0] + _6[0] * c5, i14[1] + _6[1] * c5]), u14.push([i14[0] - _6[0] * c5, i14[1] - _6[1] * c5]), t15.push(u14);
          break;
        }
        case R.TriplePerpendicular: {
          const s15 = this._cp2(e14, 0, -1), i14 = this._cp3(e14, s15, 0.5, 4), h8 = this._mid(r18, s15), _6 = this._sub(h8, i14);
          this._normalize(_6);
          const c5 = this._crossProduct(_6, this._sub(r18, i14));
          this._leftPerpendicular(_6);
          const u14 = [];
          u14.push([i14[0] + _6[0] * c5 * 0.8, i14[1] + _6[1] * c5 * 0.8]), u14.push([h8[0] + 0.8 * (r18[0] - h8[0]), h8[1] + 0.8 * (r18[1] - h8[1])]), t15.push(u14), t15.push([i14, h8]);
          const o9 = [];
          o9.push([i14[0] - _6[0] * c5 * 0.8, i14[1] - _6[1] * c5 * 0.8]), o9.push([h8[0] + 0.8 * (s15[0] - h8[0]), h8[1] + 0.8 * (s15[1] - h8[1])]), t15.push(o9);
          break;
        }
        case R.HalfCircleFirstSegment: {
          const s15 = this._cp2(e14, 0, -1), i14 = this._cp3(e14, s15, 0.5, 4), h8 = this._mid(r18, s15);
          let _6 = this._sub(s15, r18);
          const c5 = Math.cos(Math.PI / 18), u14 = Math.sin(Math.PI / 18), o9 = Math.sqrt((1 + c5) / 2), n17 = Math.sqrt((1 - c5) / 2), a12 = [];
          let p7;
          this._crossProduct(_6, this._sub(i14, r18)) > 0 ? (a12.push(r18), _6 = this._sub(r18, h8), p7 = s15) : (a12.push(s15), _6 = this._sub(s15, h8), p7 = r18), this._rotateDirect(_6, o9, n17), _6[0] /= o9, _6[1] /= o9;
          for (let t16 = 1; t16 <= 18; t16++) a12.push(this._add(h8, _6)), this._rotateDirect(_6, c5, u14);
          a12.push(p7), t15.push(a12);
          break;
        }
        case R.HalfCircleSecondSegment: {
          const s15 = this._cp2(e14, 0, -1), i14 = this._cp3(e14, s15, 1, -1);
          let h8 = this._sub(r18, s15);
          this._normalize(h8);
          const _6 = this._crossProduct(h8, this._sub(i14, s15)) / 2;
          this._leftPerpendicular(h8);
          const c5 = [s15[0] + h8[0] * _6, s15[1] + h8[1] * _6];
          h8 = this._sub(s15, c5);
          const u14 = Math.cos(Math.PI / 18);
          let o9 = Math.sin(Math.PI / 18);
          _6 > 0 && (o9 = -o9);
          const n17 = [s15];
          for (let t16 = 1; t16 <= 18; t16++) this._rotateDirect(h8, u14, o9), n17.push(this._add(c5, h8));
          t15.push(n17);
          break;
        }
        case R.HalfCircleExtended: {
          const i14 = this._cp2(e14, 0, -2), h8 = this._cp3(e14, i14, 1, -1);
          let _6;
          if (s14 >= 4) _6 = e14[3];
          else {
            const s15 = this._sub(r18, i14);
            _6 = this._add(h8, s15);
          }
          const c5 = this._dist(i14, h8) / 2 / 0.75, u14 = this._sub(i14, r18);
          this._normalize(u14, c5);
          const o9 = this._sub(h8, _6);
          this._normalize(o9, c5);
          const n17 = [_6, h8];
          t15.push(n17);
          const a12 = [this._clone(h8)];
          this._addBezier3(a12, h8, this._add(h8, o9), this._add(i14, u14), i14, 4), a12.push(r18), t15.push(a12);
          break;
        }
        case R.OpenCircle: {
          const s15 = this._cp2(e14, -2, 0), i14 = this._sub(s15, r18), h8 = Math.cos(Math.PI / 18), _6 = -Math.sin(Math.PI / 18), c5 = [s15];
          for (let t16 = 1; t16 <= 33; t16++) this._rotateDirect(i14, h8, _6), c5.push(this._add(r18, i14));
          t15.push(c5);
          break;
        }
        case R.CoverageEdgesWithTicks: {
          const i14 = this._cp2(e14, 0, -1);
          let h8, _6;
          if (s14 >= 3) h8 = e14[2];
          else {
            const s15 = this._sub(i14, r18), t16 = this._leftPerp(s15);
            h8 = [r18[0] + t16[0] - 0.25 * s15[0], r18[1] + t16[1] - 0.25 * s15[1]];
          }
          if (s14 >= 4) _6 = e14[3];
          else {
            const s15 = this._mid(r18, i14), t16 = this._sub(r18, i14);
            this._normalize(t16), this._leftPerpendicular(t16);
            const e15 = this._crossProduct(t16, this._sub(h8, s15));
            this._rightPerpendicular(t16), _6 = [h8[0] + t16[0] * e15 * 2, h8[1] + t16[1] * e15 * 2];
          }
          const c5 = this._sub(i14, r18);
          let u14, o9;
          u14 = this._crossProduct(c5, this._sub(h8, r18)) > 0 ? this._rightPerp(c5) : this._leftPerp(c5), o9 = [], o9.push(h8), o9.push(r18), o9.push([r18[0] + (u14[0] - c5[0]) / 3, r18[1] + (u14[1] - c5[1]) / 3]), t15.push(o9), u14 = this._crossProduct(c5, this._sub(_6, i14)) > 0 ? this._rightPerp(c5) : this._leftPerp(c5), o9 = [], o9.push([i14[0] + (u14[0] + c5[0]) / 3, i14[1] + (u14[1] + c5[1]) / 3]), o9.push(i14), o9.push(_6), t15.push(o9);
          break;
        }
        case R.GapExtentWithDoubleTicks: {
          const i14 = this._cp2(e14, 0, 2), h8 = this._cp3(e14, i14, 0, 1);
          let _6;
          if (s14 >= 4) _6 = e14[3];
          else {
            const s15 = this._sub(i14, r18);
            _6 = this._add(h8, s15);
          }
          this._addAngledTicks(t15, r18, i14, this._mid(h8, _6)), this._addAngledTicks(t15, h8, _6, this._mid(r18, i14));
          break;
        }
        case R.GapExtentMidline: {
          const i14 = this._cp2(e14, 2, 0), h8 = this._cp3(e14, i14, 0, 1);
          let _6;
          if (s14 >= 4) _6 = e14[3];
          else {
            const s15 = this._sub(i14, r18);
            _6 = this._add(h8, s15);
          }
          const c5 = [];
          c5.push(this._mid(r18, h8)), c5.push(this._mid(i14, _6)), t15.push(c5);
          break;
        }
        case R.Chevron: {
          const i14 = this._cp2(e14, -1, -1);
          let h8;
          if (s14 >= 3) h8 = e14[2];
          else {
            const s15 = this._sub(i14, r18);
            this._leftPerpendicular(s15), h8 = this._add(r18, s15);
          }
          t15.push([i14, this._makeCtrlPt(r18), h8]);
          break;
        }
        case R.PerpendicularWithArc: {
          const i14 = this._cp2(e14, 0, -2), h8 = this._cp3(e14, i14, 0.5, -1), _6 = this._sub(i14, r18), c5 = this._norm(_6);
          _6[0] /= c5, _6[1] /= c5;
          const u14 = this._crossProduct(_6, this._sub(h8, r18));
          let o9 = this._dotProduct(_6, this._sub(h8, r18));
          o9 < 0.05 * c5 ? o9 = 0.05 * c5 : o9 > 0.95 * c5 && (o9 = 0.95 * c5);
          const n17 = [r18[0] + _6[0] * o9, r18[1] + _6[1] * o9];
          let a12 = this._leftPerp(_6), p7 = [];
          if (p7.push([n17[0] - a12[0] * u14, n17[1] - a12[1] * u14]), p7.push([n17[0] + a12[0] * u14, n17[1] + a12[1] * u14]), t15.push(p7), s14 >= 4) {
            const s15 = e14[3];
            let i15 = this._dotProduct(_6, this._sub(s15, r18));
            i15 < 0.1 * c5 ? i15 = 0.1 * c5 : i15 > 0.9 * c5 && (i15 = 0.9 * c5);
            const h9 = [r18[0] + _6[0] * i15, r18[1] + _6[1] * i15], u15 = this._crossProduct(_6, this._sub(s15, r18)), o10 = [];
            o10.push([h9[0] - a12[0] * u15, h9[1] - a12[1] * u15]), o10.push([h9[0] + a12[0] * u15, h9[1] + a12[1] * u15]), t15.push(o10);
          }
          const d4 = [i14[0] + a12[0] * u14, i14[1] + a12[1] * u14];
          a12 = this._sub(i14, d4);
          const l11 = Math.cos(Math.PI / 18);
          let b3 = Math.sin(Math.PI / 18);
          u14 < 0 && (b3 = -b3), p7 = [r18, i14];
          for (let s15 = 1; s15 <= 9; s15++) this._rotateDirect(a12, l11, b3), p7.push(this._add(d4, a12));
          t15.push(p7);
          break;
        }
        case R.ClosedHalfCircle: {
          const s15 = this._cp2(e14, 2, 0), i14 = this._mid(r18, s15), h8 = this._sub(s15, i14), _6 = Math.cos(Math.PI / 18), c5 = Math.sin(Math.PI / 18), u14 = [r18, s15];
          for (let t16 = 1; t16 <= 18; t16++) this._rotateDirect(h8, _6, c5), u14.push(this._add(i14, h8));
          t15.push(u14);
          break;
        }
        case R.TripleParallelExtended: {
          const s15 = this._cp2(e14, 0, -2), h8 = this._cp3(e14, s15, 1, -2), _6 = this._mid(r18, s15), c5 = this._sub(h8, s15);
          this._normalize(c5);
          const u14 = Math.abs(this._crossProduct(c5, this._sub(_6, s15))) / 2, o9 = this._dist(s15, h8), n17 = [s15, r18];
          n17.push([r18[0] + c5[0] * o9 * 0.5, r18[1] + c5[1] * o9 * 0.5]), t15.push(n17);
          const a12 = [];
          a12.push([_6[0] - c5[0] * u14, _6[1] - c5[1] * u14]), a12.push([_6[0] + c5[0] * o9 * 0.375, _6[1] + c5[1] * o9 * 0.375]), r3(a12[a12.length - 1], 1), a12.push([_6[0] + c5[0] * o9 * 0.75, _6[1] + c5[1] * o9 * 0.75]), t15.push(a12);
          const p7 = [s15, h8];
          t15.push(p7);
          break;
        }
        case R.ParallelWithTicks: {
          const s15 = this._cp2(e14, 3, 0), i14 = this._cp3(e14, s15, 0.5, -1), h8 = this._sub(i14, s15);
          this._normalize(h8);
          const _6 = this._crossProduct(h8, this._sub(i14, r18));
          this._leftPerpendicular(h8), this._addAngledTicks(t15, r18, s15, i14), this._addAngledTicks(t15, this._mix(r18, 1, h8, _6), this._mix(s15, 1, h8, _6), this._mid(r18, s15));
          break;
        }
        case R.Parallel: {
          const s15 = this._cp2(e14, 3, 0), i14 = this._cp3(e14, s15, 0.5, -1), h8 = this._sub(s15, r18);
          this._normalize(h8);
          const _6 = this._leftPerp(h8), c5 = this._crossProduct(h8, this._sub(i14, r18));
          let u14 = [r18, s15];
          t15.push(u14), u14 = [], u14.push([r18[0] + _6[0] * c5, r18[1] + _6[1] * c5]), u14.push([s15[0] + _6[0] * c5, s15[1] + _6[1] * c5]), t15.push(u14);
          break;
        }
        case R.PerpendicularToFirstSegment: {
          const s15 = this._cp2(e14, 3, 0), i14 = this._cp3(e14, s15, 0.5, -1), h8 = this._mid(r18, s15), _6 = this._sub(s15, r18);
          this._normalize(_6);
          const c5 = this._crossProduct(_6, this._sub(i14, r18));
          this._leftPerpendicular(_6);
          const u14 = [];
          u14.push([h8[0] - _6[0] * c5 * 0.25, h8[1] - _6[1] * c5 * 0.25]), u14.push([h8[0] + _6[0] * c5 * 1.25, h8[1] + _6[1] * c5 * 1.25]), t15.push(u14);
          break;
        }
        case R.ParallelOffset: {
          const s15 = this._cp2(e14, 3, 0), i14 = this._cp3(e14, s15, 0.5, -1), h8 = this._sub(s15, r18);
          this._normalize(h8);
          const _6 = this._crossProduct(h8, this._sub(i14, r18));
          this._leftPerpendicular(h8);
          const c5 = [];
          c5.push([r18[0] - h8[0] * _6, r18[1] - h8[1] * _6]), c5.push([s15[0] - h8[0] * _6, s15[1] - h8[1] * _6]), t15.push(c5);
          const u14 = [];
          u14.push([r18[0] + h8[0] * _6, r18[1] + h8[1] * _6]), u14.push([s15[0] + h8[0] * _6, s15[1] + h8[1] * _6]), t15.push(u14);
          break;
        }
        case R.OffsetOpposite: {
          const s15 = this._cp2(e14, 3, 0), i14 = this._cp3(e14, s15, 0.5, -1), h8 = this._sub(s15, r18);
          this._normalize(h8);
          const _6 = this._crossProduct(h8, this._sub(i14, r18));
          this._leftPerpendicular(h8);
          const c5 = [];
          c5.push([r18[0] - h8[0] * _6, r18[1] - h8[1] * _6]), c5.push([s15[0] - h8[0] * _6, s15[1] - h8[1] * _6]), t15.push(c5);
          break;
        }
        case R.OffsetSame: {
          const s15 = this._cp2(e14, 3, 0), i14 = this._cp3(e14, s15, 0.5, -1), h8 = this._sub(s15, r18);
          this._normalize(h8);
          const _6 = this._crossProduct(h8, this._sub(i14, r18));
          this._leftPerpendicular(h8);
          const c5 = [];
          c5.push([r18[0] + h8[0] * _6, r18[1] + h8[1] * _6]), c5.push([s15[0] + h8[0] * _6, s15[1] + h8[1] * _6]), t15.push(c5);
          break;
        }
        case R.CircleWithArc: {
          let h8 = this._cp2(e14, 3, 0);
          const _6 = this._cp3(e14, h8, 0.5, -1);
          let c5, u14;
          if (s14 >= 4) c5 = e14[3], u14 = this._crossProduct(this._sub(c5, h8), this._sub(_6, h8)) > 0;
          else {
            c5 = h8, u14 = this._crossProduct(this._sub(c5, r18), this._sub(_6, r18)) > 0;
            const s15 = 24 * this._geomUnitsPerPoint, t16 = this._sub(c5, r18);
            this._normalize(t16, s15);
            const i14 = Math.sqrt(2) / 2;
            this._rotateDirect(t16, i14, u14 ? i14 : -i14), h8 = this._add(r18, t16);
          }
          const o9 = this._sub(h8, r18), n17 = Math.cos(Math.PI / 18), a12 = Math.sin(Math.PI / 18), p7 = [h8];
          for (let s15 = 1; s15 <= 36; s15++) this._rotateDirect(o9, n17, a12), p7.push(this._add(r18, o9));
          this._add90DegArc(p7, h8, c5, _6, u14), r3(p7[p7.length - 8], 1), t15.push(p7);
          break;
        }
        case R.DoubleJog: {
          let i14, h8 = this._cp2(e14, -3, 1), _6 = this._cp3(e14, h8, -1, -0.5);
          if (s14 >= 4) i14 = e14[3];
          else {
            const s15 = r18;
            r18 = h8, i14 = _6;
            const t16 = this._dist(r18, s15), e15 = this._dist(i14, s15);
            let c6 = 30 * this._geomUnitsPerPoint;
            0.5 * t16 < c6 && (c6 = 0.5 * t16), 0.5 * e15 < c6 && (c6 = 0.5 * e15), h8 = this._mix(r18, c6 / t16, s15, (t16 - c6) / t16), _6 = this._mix(i14, c6 / e15, s15, (e15 - c6) / e15);
          }
          const c5 = this._mid(r18, h8), u14 = this._mid(i14, _6), o9 = this._dist(r18, h8), n17 = this._dist(_6, i14);
          let a12 = Math.min(o9, n17) / 8;
          a12 = Math.min(a12, 24 * this._geomUnitsPerPoint);
          const p7 = Math.cos(Math.PI / 4);
          let d4 = this._sub(r18, h8);
          this._normalize(d4, a12), this._crossProduct(d4, this._sub(i14, h8)) > 0 ? this._rotateDirect(d4, p7, -p7) : this._rotateDirect(d4, p7, p7);
          let l11 = [];
          l11.push(h8), l11.push(this._add(c5, d4)), l11.push(this._sub(c5, d4)), l11.push(r18), t15.push(l11), d4 = this._sub(i14, _6), this._normalize(d4, a12), this._crossProduct(d4, this._sub(r18, _6)) < 0 ? this._rotateDirect(d4, p7, p7) : this._rotateDirect(d4, p7, -p7), l11 = [], l11.push(_6), l11.push(this._add(u14, d4)), l11.push(this._sub(u14, d4)), l11.push(i14), t15.push(l11);
          break;
        }
        case R.PerpendicularOffset: {
          const s15 = this._cp2(e14, -4, 1), i14 = this._cp3(e14, s15, 0.882353, -1.94), h8 = this._sub(i14, s15);
          this._crossProduct(h8, this._sub(r18, s15)) > 0 ? this._rightPerpendicular(h8) : this._leftPerpendicular(h8);
          const _6 = [h8[0] / 8, h8[1] / 8], c5 = this._sub(this._mid(s15, i14), _6);
          t15.push([c5, r18]);
          break;
        }
        case R.LineExcludingLastSegment: {
          const s15 = this._arrowPath(e14), i14 = [];
          let h8 = s15.length - 2;
          for (; h8--; ) i14.push(s15[h8]);
          t15.push(i14);
          break;
        }
        case R.MultivertexArrow: {
          const s15 = this._arrowPath(e14), i14 = [];
          this._addArrow(i14, s15, false), t15.push(i14);
          break;
        }
        case R.CrossedArrow: {
          const s15 = this._arrowPath(e14), i14 = [];
          this._addArrow(i14, s15, true), t15.push(i14);
          break;
        }
        case R.ChevronArrow: {
          const [s15, i14] = this._arrowLastSeg(e14), h8 = 10 * this._geomUnitsPerPoint, _6 = this._sub(r18, s15), c5 = this._norm(_6);
          this._normalize(_6);
          const u14 = this._crossProduct(_6, this._sub(i14, s15));
          let o9 = this._dotProduct(_6, this._sub(i14, s15));
          o9 < 0.05 * c5 ? o9 = 0.05 * c5 : o9 > 0.95 * c5 - h8 && (o9 = 0.95 * c5 - h8);
          const n17 = [s15[0] + _6[0] * o9, s15[1] + _6[1] * o9], a12 = this._leftPerp(_6), p7 = [];
          p7.push([n17[0] + a12[0] * u14 + _6[0] * h8, n17[1] + a12[1] * u14 + _6[1] * h8]), p7.push(r18), p7.push([n17[0] - a12[0] * u14 + _6[0] * h8, n17[1] - a12[1] * u14 + _6[1] * h8]), t15.push(p7);
          break;
        }
        case R.ChevronArrowOffset: {
          const [s15, i14] = this._arrowLastSeg(e14), h8 = this._sub(r18, s15), _6 = this._norm(h8);
          this._normalize(h8);
          const c5 = this._crossProduct(h8, this._sub(i14, s15));
          let u14 = this._dotProduct(h8, this._sub(i14, s15));
          u14 < 0.05 * _6 ? u14 = 0.05 * _6 : u14 > 0.95 * _6 && (u14 = 0.95 * _6);
          const o9 = [s15[0] + h8[0] * u14, s15[1] + h8[1] * u14];
          this._leftPerpendicular(h8);
          const n17 = [];
          n17.push([o9[0] + h8[0] * c5 * 0.5, o9[1] + h8[1] * c5 * 0.5]), n17.push(this._mid(o9, r18)), n17.push([o9[0] - h8[0] * c5 * 0.5, o9[1] - h8[1] * c5 * 0.5]), t15.push(n17);
          break;
        }
        case R.PartialFirstSegment: {
          const [s15, i14] = this._arrowLastSeg(e14), h8 = this._sub(r18, s15), _6 = this._norm(h8);
          this._normalize(h8);
          let c5 = this._dotProduct(h8, this._sub(i14, s15));
          c5 < 0.05 * _6 ? c5 = 0.05 * _6 : c5 > 0.95 * _6 && (c5 = 0.95 * _6);
          const u14 = [s15[0] + h8[0] * c5, s15[1] + h8[1] * c5];
          t15.push([s15, u14]);
          break;
        }
        case R.Arch: {
          const s15 = this._cp2(e14, 0, -1), i14 = this._cp3(e14, s15, 0.5, 1), h8 = this._sub(r18, s15), _6 = this._mix(i14, 1, h8, 0.55), c5 = this._mix(i14, 1, h8, -0.55), u14 = [r18];
          this._addBezier2(u14, r18, _6, i14, 4), this._addBezier2(u14, i14, c5, s15, 4), t15.push(u14);
          break;
        }
        case R.CurvedParallelTicks: {
          const s15 = this._cp2(e14, -4, 1), i14 = this._cp3(e14, s15, 0.882353, -1.94), h8 = this._sub(i14, s15);
          this._crossProduct(h8, this._sub(r18, s15)) > 0 ? this._rightPerpendicular(h8) : this._leftPerpendicular(h8);
          const _6 = [h8[0] / 8, h8[1] / 8], c5 = this._sub(this._mid(s15, i14), _6), u14 = this._sub(this._mix(s15, 0.75, i14, 0.25), _6), o9 = this._sub(this._mix(s15, 0.25, i14, 0.75), _6), n17 = [s15];
          this._addBezier2(n17, s15, u14, c5, 3), this._addBezier2(n17, c5, o9, i14, 3), t15.push(n17);
          for (let e15 = 0; e15 < 8; e15++) {
            const s16 = n17[2 * e15 + 1], i15 = [this._clone(s16)];
            i15.push(this._add(s16, [h8[0] / 4, h8[1] / 4])), t15.push(i15);
          }
          break;
        }
        case R.Arc90Degrees: {
          const s15 = this._cp2(e14, 0, -1), i14 = this._cp3(e14, s15, 0.5, 1), h8 = [s15];
          this._add90DegArc(h8, s15, r18, i14), t15.push(h8);
          break;
        }
        case R.TipWithPerpendicularAndTicks: {
          const [s15, i14] = this._arrowLastSeg(e14), h8 = 10 * this._geomUnitsPerPoint, _6 = this._sub(r18, s15), c5 = this._norm(_6);
          this._normalize(_6);
          let u14 = this._crossProduct(_6, this._sub(i14, s15)), o9 = this._dotProduct(_6, this._sub(i14, s15));
          o9 < 0.05 * c5 ? o9 = 0.05 * c5 : o9 > 0.95 * c5 - h8 && (o9 = 0.95 * c5 - h8);
          const n17 = this._leftPerp(_6), a12 = [r18[0] - _6[0] * h8, r18[1] - _6[1] * h8], p7 = 0.5 * Math.max(c5 - o9 - h8, h8);
          u14 = Math.abs(u14);
          const d4 = [];
          d4.push([a12[0] + n17[0] * (u14 + p7) - _6[0] * p7, a12[1] + n17[1] * (u14 + p7) - _6[1] * p7]), d4.push([a12[0] + n17[0] * u14, a12[1] + n17[1] * u14]), d4.push([a12[0] - n17[0] * u14, a12[1] - n17[1] * u14]), d4.push([a12[0] - n17[0] * (u14 + p7) - _6[0] * p7, a12[1] - n17[1] * (u14 + p7) - _6[1] * p7]), t15.push(d4), t15.push([a12, r18]);
          break;
        }
        case R.FullGeometry:
        default:
          t15.push(e14);
      }
    }
    return t15;
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/effects/EffectCut.js
var r5 = class _r {
  static local() {
    return null === _r.instance && (_r.instance = new _r()), _r.instance;
  }
  execute(e14, t15, i14, r18, n17) {
    return new u8(e14, t15, i14);
  }
};
r5.instance = null;
var u8 = class extends h2 {
  constructor(e14, t15, r18) {
    super(e14, true, true), this._curveHelper = new s6(), this._beginCut = (void 0 !== t15.beginCut ? t15.beginCut : 1) * r18, this._endCut = (void 0 !== t15.endCut ? t15.endCut : 1) * r18, this._middleCut = (void 0 !== t15.middleCut ? t15.middleCut : 0) * r18, this._invert = void 0 !== t15.invert && t15.invert, this._beginCut < 0 && (this._beginCut = 0), this._endCut < 0 && (this._endCut = 0), this._middleCut < 0 && (this._middleCut = 0);
  }
  processPath(t15) {
    const {
      _beginCut: i14,
      _endCut: r18,
      _middleCut: u14
    } = this, n17 = t15.pathLength(), s13 = a6.createEmptyOptimizedCIM("esriGeometryPolyline");
    if (this._invert) {
      if (0 !== i14 || 0 !== r18 || 0 !== u14) if (i14 + r18 + u14 >= n17) for (s13.startPath(); t15.nextPoint(); ) s13.pushXY(t15.x, t15.y);
      else this._curveHelper.appendSubCurve(s13, t15, 0, i14), this._curveHelper.appendSubCurve(s13, t15, 0.5 * (n17 - u14), 0.5 * (n17 + u14)), this._curveHelper.appendSubCurve(s13, t15, n17 - r18, r18);
    } else if (0 === i14 && 0 === r18 && 0 === u14) for (s13.startPath(); t15.nextPoint(); ) s13.pushXY(t15.x, t15.y);
    else i14 + r18 + u14 < n17 && (0 === u14 ? this._curveHelper.appendSubCurve(s13, t15, i14, n17 - r18) : (this._curveHelper.appendSubCurve(s13, t15, i14, 0.5 * (n17 - u14)), this._curveHelper.appendSubCurve(s13, t15, 0.5 * (n17 + u14), n17 - r18)));
    return 0 === s13.totalSize ? null : s13;
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/GeometryWalker.js
var n7 = 1e-7;
var i6 = class {
  constructor() {
    this._values = [], this.extPtGap = 0, this.ctrlPtGap = 0, this._length = 0, this._currentValue = 0;
  }
  isEmpty() {
    return 0 === this._values.length;
  }
  size() {
    return this._values.length;
  }
  init(t15, e14, s13 = true) {
    if (this._setEmpty(), !t15 || 0 === t15.length) return false;
    for (let i14 = 0; i14 < t15.length; i14++) {
      let e15 = Math.abs(t15[i14]);
      s13 && e15 < n7 && (e15 = n7), this._values.push(e15), this._length += e15;
    }
    return e14 && 1 & t15.length && (this._length *= 2), 0 !== this._length && (this.ctrlPtGap = this.extPtGap = 0, this._currentValue = -1, true);
  }
  scale(t15) {
    const e14 = this._values ? this._values.length : 0;
    for (let s13 = 0; s13 < e14; ++s13) this._values[s13] *= t15;
    this._length *= t15, this.extPtGap *= t15, this.ctrlPtGap *= t15;
  }
  addValue(t15) {
    this._length += t15, this._values.push(t15);
  }
  firstValue() {
    return this._values[0];
  }
  lastValue() {
    return this._values[this._values.length - 1];
  }
  nextValue() {
    return this._currentValue++, this._currentValue === this._values.length && (this._currentValue = 0), this._values[this._currentValue];
  }
  reset() {
    this._currentValue = -1;
  }
  length() {
    return this._length;
  }
  _setEmpty() {
    this.extPtGap = this.ctrlPtGap = this._length = 0, this._currentValue = -1, this._values.length = 0;
  }
};
var h4 = class {
  constructor() {
    this.pt = null, this.ca = 0, this.sa = 0;
  }
};
var r6;
!function(t15) {
  t15[t15.FAIL = 0] = "FAIL", t15[t15.END = 1] = "END", t15[t15.CONTINUE = 2] = "CONTINUE";
}(r6 || (r6 = {}));
var a7 = class {
  constructor() {
    this.reset();
  }
  reset() {
    this.segment = null, this.segmentLength = 0, this.abscissa = 0, this.isPathEnd = false, this.isPartEnd = false;
  }
  isValid() {
    return null !== this.segment;
  }
  copyTo(t15) {
    t15.segment = this.segment, t15.segmentLength = this.segmentLength, t15.abscissa = this.abscissa, t15.isPathEnd = this.isPathEnd, t15.isPartEnd = this.isPartEnd;
  }
};
var o3 = class extends s6 {
  constructor(t15 = 0, e14 = false) {
    super(t15, e14), this._tolerance = n6, this._currentPosition = new a7();
  }
  updateTolerance(t15) {
    this._tolerance = n6 * t15;
  }
  init(t15, e14, s13 = true) {
    return s13 ? (this._patternLength = e14.length(), this._partExtPtGap = e14.extPtGap, this._partCtrlPtGap = e14.ctrlPtGap) : (this._patternLength = 0, this._partExtPtGap = 0, this._partCtrlPtGap = 0), this._currentPosition.reset(), this._partSegCount = 0, this._pathCursor = t15, this._seg = -1, this._setPosAtNextPart();
  }
  curPositionIsValid() {
    return this._currentPosition.isValid();
  }
  nextPosition(t15, e14 = r6.FAIL) {
    const s13 = new a7();
    return !!this._nextPosition(t15, s13, null, e14) && (s13.copyTo(this._currentPosition), true);
  }
  curPointAndAngle(t15) {
    t15.pt = this._getPoint(this._currentPosition);
    const [e14, s13] = this._getAngleCS(this._currentPosition);
    t15.ca = e14, t15.sa = s13;
  }
  nextPointAndAngle(t15, e14, s13 = r6.FAIL) {
    const n17 = new a7();
    if (!this._nextPosition(t15, n17, null, s13)) return false;
    n17.copyTo(this._currentPosition), e14.pt = this._getPoint(n17);
    const [i14, h8] = this._getAngleCS(n17);
    return e14.ca = i14, e14.sa = h8, true;
  }
  nextCurve(e14) {
    if (0 === e14) return null;
    const s13 = a6.createEmptyOptimizedCIM("esriGeometryPolyline");
    s13.startPath(), s13.nextPath();
    const n17 = new a7();
    return this._nextPosition(e14, n17, s13, r6.END) ? (n17.copyTo(this._currentPosition), s13) : null;
  }
  isPathEnd() {
    return this._currentPosition.isPathEnd;
  }
  getPathEnd() {
    return this._currentPosition.segment[1];
  }
  getPt(t15) {
    return this._pathCursor.seekInPath(t15), [this._pathCursor.x, this._pathCursor.y];
  }
  getSeg(t15) {
    return [this.getPt(t15), this.getPt(t15 + 1)];
  }
  _nextPosition(t15, e14, s13, n17) {
    if (this._currentPosition.isPathEnd) return false;
    let i14 = this._currentPosition.abscissa;
    for (this._currentPosition.segmentLength > 0 && (i14 /= this._currentPosition.segmentLength), this._currentPosition.copyTo(e14); e14.abscissa + t15 * this._partLengthRatio > e14.segmentLength + this._tolerance; ) {
      if (s13) {
        if (0 === s13.pathSize) if (0 === i14) {
          const t17 = e14.segment[0];
          s13.pushXY(t17[0], t17[1]);
        } else s13.pushPoint(this.getSegCoord2D(e14.segment, i14));
        const t16 = e14.segment[1];
        s13.pushXY(t16[0], t16[1]);
      }
      if (i14 = 0, t15 -= (e14.segmentLength - e14.abscissa) / this._partLengthRatio, this._partSegCount) e14.segment = this._nextSegment(), e14.segmentLength = this.getSegLength(e14.segment), e14.abscissa = 0, this._partSegCount--;
      else {
        if (!this._setPosAtNextPart()) return n17 !== r6.FAIL && (e14.segmentLength = this.getSegLength(e14.segment), e14.isPartEnd = true, n17 === r6.END ? (e14.abscissa = e14.segmentLength, e14.isPathEnd = true) : e14.abscissa = e14.segmentLength + t15, true);
        this._currentPosition.copyTo(e14);
      }
    }
    if (e14.abscissa += t15 * this._partLengthRatio, s13) {
      0 === s13.pathSize && (0 === i14 ? s13.pushPoint(e14.segment[0]) : s13.pushPoint(this.getSegCoord2D(e14.segment, i14)));
      const t16 = e14.abscissa / e14.segmentLength;
      1 === t16 ? s13.pushPoint(e14.segment[1]) : s13.pushPoint(this.getSegCoord2D(e14.segment, t16));
    }
    return this._partSegCount || Math.abs(e14.abscissa - e14.segmentLength) < this._tolerance && (e14.isPathEnd = this._partIsLast, e14.isPartEnd = true), true;
  }
  _getPoint(t15) {
    const e14 = t15.segmentLength <= 0 ? 0 : t15.abscissa / t15.segmentLength;
    return this.getSegCoord2D(this._currentPosition.segment, e14);
  }
  _getAngleCS(t15) {
    const e14 = t15.segmentLength <= 0 ? 0 : t15.abscissa / t15.segmentLength;
    return this.getSegAngleCS(this._currentPosition.segment, e14);
  }
  _setPosAtNextPart() {
    for (; this._partSegCount; ) this._hasNextSegment() && this._nextSegment(), this._partSegCount--;
    if (!this._hasNextSegment()) return false;
    for (this._partLength = 0, this._partIsLast = true, this._partSegCount = 0; this._hasNextSegment(); ) if (this._partLength += this.getSegLength(this._nextSegment()), this._partSegCount++, this._pathCursor.getControlPointAt(this._getEndPointIndex())) {
      this._partIsLast = !this._hasNextSegment();
      break;
    }
    let t15 = this._partSegCount;
    for (; t15; ) this._previousSegment(), --t15;
    this._currentPosition.segment = this._nextSegment(), this._currentPosition.segmentLength = this.getSegLength(this._currentPosition.segment), this._currentPosition.abscissa = 0, this._currentPosition.isPathEnd = this._currentPosition.isPartEnd = false, --this._partSegCount;
    const e14 = this._getStartPointIndex();
    this._ctrlPtBegin = this._pathCursor.getControlPointAt(e14);
    let s13 = e14 + this._partSegCount + 1;
    if (s13 >= this._pathCursor.pathSize && (s13 = 0), this._ctrlPtEnd = this._pathCursor.getControlPointAt(s13), this._patternLength > 0) {
      const t16 = this._ctrlPtBegin ? this._partCtrlPtGap : this._partExtPtGap, e15 = this._ctrlPtEnd ? this._partCtrlPtGap : this._partExtPtGap;
      let s14 = Math.round((this._partLength - (t16 + e15)) / this._patternLength);
      s14 <= 0 && (s14 = t16 + e15 > 0 ? 0 : 1), this._partLengthRatio = this._partLength / (t16 + e15 + s14 * this._patternLength), this._partLengthRatio < 0.01 && (this._partLengthRatio = 1);
    } else this._partLengthRatio = 1;
    return true;
  }
  _hasNextSegment() {
    return this._seg < this._pathCursor.pathSize - 2;
  }
  _previousSegment() {
    return this.getSeg(--this._seg);
  }
  _nextSegment() {
    return this.getSeg(++this._seg);
  }
  _getStartPointIndex() {
    return this._seg;
  }
  _getEndPointIndex() {
    return this._seg + 1;
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/effects/EffectDashes.js
var o4 = 1e3;
var u9 = 1e-7;
var _2 = class __ {
  static local() {
    return null === __.instance && (__.instance = new __()), __.instance;
  }
  execute(t15, e14, s13, r18, i14) {
    return new p3(t15, e14, s13, r18);
  }
};
_2.instance = null;
var p3 = class extends h2 {
  constructor(t15, e14, s13, r18) {
    super(t15, true, true), this._firstCurve = null, this._walker = new o3(), this._walker.updateTolerance(s13), this._endings = e14.lineDashEnding, this._customDashPos = -(e14.offsetAlongLine ?? 0) * s13, this._offsetAtEnd = (e14.customEndingOffset ?? 0) * s13, this._tileKey = r18;
    let i14 = D(e14).dashTemplate;
    null == i14 && (i14 = []), i14.length % 2 && (i14 = [...i14, ...i14]);
    let a12 = 0;
    for (let n17 = 0; n17 < i14.length; n17++) {
      let t16 = Math.abs(i14[n17]);
      t16 < u9 && (t16 = u9), a12 += t16;
    }
    this._patternLength = a12, this._numOfDashesPerPattern = i14.length / 2, this._pattern = new i6(), this._pattern.init(i14, true), this._pattern.scale(s13);
  }
  processPath(s13) {
    if (0 === this._pattern.length()) {
      this.iteratePath = false;
      const r19 = n2(s13);
      return a6.fromJSONCIM({
        paths: [r19]
      });
    }
    if (!this.iteratePath) {
      let r19 = true;
      switch (this._endings) {
        case k2.HalfPattern:
        case k2.HalfGap:
        default:
          this._pattern.extPtGap = 0;
          break;
        case k2.FullPattern:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.firstValue());
          break;
        case k2.FullGap:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.lastValue());
          break;
        case k2.NoConstraint:
          this.isClosed || (r19 = false);
          break;
        case k2.Custom:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._offsetAtEnd);
      }
      const i15 = s13.pathLength();
      if (this._pattern.isEmpty() || i15 < 0.1 * this._pattern.length()) {
        const r20 = n2(s13);
        return a6.fromJSONCIM({
          paths: [r20]
        });
      }
      if (!this._walker.init(s13, this._pattern, r19)) {
        const r20 = n2(s13);
        return a6.fromJSONCIM({
          paths: [r20]
        });
      }
    }
    let r18;
    if (this.iteratePath) r18 = this._pattern.nextValue();
    else {
      let t15;
      switch (this._endings) {
        case k2.HalfPattern:
        default:
          t15 = 0.5 * this._pattern.firstValue();
          break;
        case k2.HalfGap:
          t15 = 0.5 * -this._pattern.lastValue();
          break;
        case k2.FullGap:
          t15 = -this._pattern.lastValue();
          break;
        case k2.FullPattern:
          t15 = 0;
          break;
        case k2.NoConstraint:
        case k2.Custom:
          t15 = -this._customDashPos;
      }
      let e14 = t15 / this._pattern.length();
      e14 -= Math.floor(e14), t15 = e14 * this._pattern.length(), this._pattern.reset(), r18 = this._pattern.nextValue();
      let s14 = false;
      for (; t15 >= r18; ) t15 -= r18, r18 = this._pattern.nextValue(), s14 = !s14;
      r18 -= t15, s14 ? (this._walker.nextPosition(r18), r18 = this._pattern.nextValue()) : this.isClosed && (this._firstCurve = this._walker.nextCurve(r18), r18 = this._pattern.nextValue(), this._walker.nextPosition(r18), r18 = this._pattern.nextValue());
    }
    let i14 = this._walker.nextCurve(r18);
    if (i14) {
      if (this._walker.isPathEnd()) {
        if (this.iteratePath = false, this._firstCurve) {
          for (this._firstCurve.nextPath(); this._firstCurve.nextPoint(); ) i14.pushXY(this._firstCurve.x, this._firstCurve.y);
          this._firstCurve = null;
        }
      } else r18 = this._pattern.nextValue(), !this._walker.nextPosition(r18) || this._walker.isPathEnd() ? (this.iteratePath = false, this._firstCurve && (i14.pushCursor(this._firstCurve), this._firstCurve = null)) : this.iteratePath = true;
    } else this.iteratePath = false, i14 = this._firstCurve, this._firstCurve = null;
    return i14?.reset(), i14;
  }
  isClippingRequired(t15) {
    const e14 = t2(t15);
    let i14 = 0;
    for (const s13 of e14) i14 += h(s13);
    return Math.round(this._numOfDashesPerPattern * (i14 / this._patternLength)) > o4;
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/effects/EffectDonut.js
var s7 = class _s {
  static local() {
    return null === _s.instance && (_s.instance = new _s()), _s.instance;
  }
  execute(t15, i14, e14, n17, s13, o9) {
    return new r7(t15, i14, e14, n17, s13, o9);
  }
};
s7.instance = null;
var r7 = class {
  constructor(t15, i14, n17, s13, r18, o9) {
    switch (this._inputGeometries = t15, this._tileKey = s13, this._geometryEngine = r18, this._maxInflateSize = o9 * n17, this._width = (void 0 !== i14.width ? i14.width : 2) * n17, i14.method) {
      case B.Mitered:
      case B.Bevelled:
      case B.Rounded:
      case B.TrueBuffer:
      case B.Square:
    }
    this._option = i14.option;
  }
  next() {
    let e14;
    for (; e14 = this._inputGeometries.next(); ) {
      if ("esriGeometryEnvelope" === e14.geometryType && this._width > 0) {
        const i14 = e14.asJSON();
        return Math.min(i14.xmax - i14.xmin, i14.ymax - i14.ymin) - 2 * this._width < 0 ? e14 : a6.fromJSONCIM({
          paths: [[[i14.xmin + this._width, i14.ymin + this._width], [i14.xmax - this._width, i14.ymin + this._width], [i14.xmax - this._width, i14.ymax - this._width], [i14.xmin + this._width, i14.ymax - this._width], [i14.xmin + this._width, i14.ymin + this._width]], [[i14.xmin, i14.ymin], [i14.xmin, i14.ymax], [i14.xmax, i14.ymax], [i14.xmax, i14.ymin], [i14.xmin, i14.ymin]]]
        });
      }
      if ("esriGeometryPolygon" === e14.geometryType) {
        if (0 === this._width) return e14.clone();
        const t15 = this._geometryEngine;
        if (null == t15) return null;
        const s13 = this._tileKey ? i5(e14, this._maxInflateSize) : e14.clone();
        if (!s13) continue;
        const r18 = t15.buffer(f.WebMercator, s13.asJSON(), -this._width, 1);
        if (r18) {
          for (const i14 of r18.rings) if (i14) {
            s13.startPath();
            for (const t16 of i14.reverse()) s13.pushXY(t16[0], s13.yFactor * t16[1]);
          }
        }
        return s13;
      }
    }
    return null;
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/effects/EffectJog.js
var e8 = class _e {
  static local() {
    return null === _e.instance && (_e.instance = new _e()), _e.instance;
  }
  execute(t15, i14, s13, e14, o9) {
    return new n8(t15, i14, s13);
  }
};
e8.instance = null;
var n8 = class extends h2 {
  constructor(t15, i14, e14) {
    super(t15, false, true), this._curveHelper = new s6(), this._length = (void 0 !== i14.length ? i14.length : 20) * e14, this._angle = void 0 !== i14.angle ? i14.angle : 225, this._position = void 0 !== i14.position ? i14.position : 50, this._length < 0 && (this._length = -this._length), this._position < 20 && (this._position = 20), this._position > 80 && (this._position = 80), this._mirror = false;
  }
  processPath(i14) {
    const s13 = a6.createEmptyOptimizedCIM("esriGeometryPolyline");
    if (this._curveHelper.isEmpty(i14)) return null;
    i14.seekInPath(0);
    const e14 = i14.x, n17 = i14.y;
    i14.seekInPath(i14.pathSize - 1);
    const o9 = i14.x, r18 = i14.y, h8 = [o9 - e14, r18 - n17];
    this._curveHelper.normalize(h8);
    const l11 = e14 + (o9 - e14) * this._position / 100, _6 = n17 + (r18 - n17) * this._position / 100, a12 = Math.cos((90 - this._angle) / 180 * Math.PI);
    let p7 = Math.sin((90 - this._angle) / 180 * Math.PI);
    this._mirror && (p7 = -p7), this._mirror = !this._mirror;
    const c5 = [l11 - this._length / 2 * a12, _6 - this._length / 2 * p7], m6 = [l11 + this._length / 2 * a12, _6 + this._length / 2 * p7];
    return s13.pushPath([[e14, n17], c5, m6, [o9, r18]]), s13;
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/effects/EffectMove.js
var t8 = class _t {
  static local() {
    return null === _t.instance && (_t.instance = new _t()), _t.instance;
  }
  execute(t15, s13, n17, o9, i14) {
    return new e9(t15, s13, n17);
  }
};
t8.instance = null;
var e9 = class {
  constructor(t15, e14, s13) {
    this._inputGeometries = t15, this._offsetX = void 0 !== e14.offsetX ? e14.offsetX * s13 : 0, this._offsetY = void 0 !== e14.offsetY ? e14.offsetY * s13 : 0;
  }
  next() {
    let t15 = this._inputGeometries.next();
    for (; t15; ) {
      if (t15.totalSize > 0) return this._move(t15.clone(), this._offsetX, this._offsetY);
      t15 = this._inputGeometries.next();
    }
    return null;
  }
  _move(t15, e14, s13) {
    for (; t15.nextPath(); ) for (; t15.nextPoint(); ) t15.x = t15.x + e14, t15.y = t15.y + s13;
    return t15.reset(), t15;
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/effects/EffectOffset.js
var f7 = 10;
var h5 = class _h {
  static local() {
    return null === _h.instance && (_h.instance = new _h()), _h.instance;
  }
  execute(t15, e14, s13, o9, r18, i14) {
    return new l6(t15, e14, s13, o9, r18, i14);
  }
};
h5.instance = null;
var l6 = class {
  constructor(t15, e14, s13, o9, n17, m6) {
    this._inputGeometries = t15, this._tileKey = o9, this._geometryEngine = n17, this._curveHelper = new s6(), this._offset = (e14.offset ?? 1) * s13, this._method = e14.method, this._maxInflateSize = Math.max(Math.abs(m6 * s13), f7), this._option = e14.option, this._offsetFlattenError = n6 * s13;
  }
  next() {
    let r18;
    for (; r18 = this._inputGeometries.next(); ) {
      if (0 === this._offset) return r18.clone();
      if ("esriGeometryEnvelope" === r18.geometryType) {
        if (this._method === O.Rounded && this._offset > 0) {
          const s13 = n2(r18), o10 = this._curveHelper.offset(s13, -this._offset, this._method, 4, this._offsetFlattenError);
          if (o10) {
            const e14 = a6.createEmptyOptimizedCIM(r18.geometryType);
            return e14.pushPath(o10), e14;
          }
          return null;
        }
        const o9 = r18.asJSON();
        if (m(o9) && Math.min(o9.xmax - o9.xmin, o9.ymax - o9.ymin) + 2 * this._offset > 0) return a6.fromJSONCIM({
          xmin: o9.xmin - this._offset,
          xmax: o9.xmax + this._offset,
          ymin: o9.ymin - this._offset,
          ymax: o9.ymax + this._offset
        });
      }
      const i14 = this._geometryEngine;
      if (null == i14) continue;
      const f9 = this._tileKey ? i5(r18, this._maxInflateSize) : r18.clone();
      if (!f9) continue;
      const h8 = i14.offset(f.WebMercator, f9.asJSON(), -this._offset, 1, this._method, 4, this._offsetFlattenError);
      return h8 ? a6.fromJSONCIM(h8) : null;
    }
    return null;
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/effects/EffectReverse.js
var e10 = class _e {
  static local() {
    return null === _e.instance && (_e.instance = new _e()), _e.instance;
  }
  execute(e14, n17, r18, s13, i14) {
    return new t9(e14, n17, r18);
  }
};
e10.instance = null;
var t9 = class {
  constructor(e14, t15, n17) {
    this._inputGeometries = e14, this._reverse = void 0 === t15.reverse || t15.reverse;
  }
  next() {
    let e14 = this._inputGeometries.next();
    for (; e14; ) {
      if (!this._reverse) return e14;
      if ("esriGeometryPolyline" === e14.geometryType) return n9(e14.clone());
      e14 = this._inputGeometries.next();
    }
    return null;
  }
};
function n9(e14) {
  for (; e14.nextPath(); ) for (let t15 = 0; t15 < e14.pathSize / 2; t15++) {
    e14.seekInPath(t15);
    const n17 = e14.x, r18 = e14.y;
    e14.seekInPath(e14.pathSize - t15 - 1);
    const s13 = e14.x, i14 = e14.y;
    e14.x = n17, e14.y = r18, e14.seekInPath(t15), e14.x = s13, e14.y = i14;
  }
  return e14.reset(), e14;
}

// ../../../node_modules/@arcgis/core/symbols/cim/effects/EffectRotate.js
var e11 = class _e {
  static local() {
    return null === _e.instance && (_e.instance = new _e()), _e.instance;
  }
  execute(t15, e14, r18, s13, o9) {
    return new n10(t15, e14, r18);
  }
};
e11.instance = null;
var n10 = class {
  constructor(t15, e14, n17) {
    this._inputGeometries = t15, this._rotateAngle = void 0 !== e14.angle ? e14.angle * Math.PI / 180 : 0;
  }
  next() {
    let e14 = this._inputGeometries.next();
    for (; e14; ) {
      if (0 === this._rotateAngle || "esriGeometryPoint" === e14.geometryType) return e14;
      if (e14.totalSize > 0) {
        const n17 = c(e14), r18 = (n17[2] + n17[0]) / 2, s13 = (n17[3] + n17[1]) / 2;
        return e14.reset(), this._rotate(e14.clone(), r18, s13);
      }
      e14 = this._inputGeometries.next();
    }
    return null;
  }
  _rotate(t15, e14, n17) {
    const r18 = Math.cos(this._rotateAngle), s13 = Math.sin(this._rotateAngle);
    for (; t15.nextPath(); ) for (; t15.nextPoint(); ) {
      const o9 = t15.x - e14, i14 = t15.y - n17;
      t15.x = e14 + o9 * r18 - i14 * s13, t15.y = n17 + o9 * s13 + i14 * r18;
    }
    return t15.reset(), t15;
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/effects/EffectScale.js
var e12 = class _e {
  static local() {
    return null === _e.instance && (_e.instance = new _e()), _e.instance;
  }
  execute(t15, e14, o9, s13, n17) {
    return new r8(t15, e14, o9);
  }
};
e12.instance = null;
var r8 = class {
  constructor(t15, e14, r18) {
    this._inputGeometries = t15, this._xFactor = void 0 !== e14.xScaleFactor ? e14.xScaleFactor : 1.15, this._yFactor = void 0 !== e14.yScaleFactor ? e14.yScaleFactor : 1.15;
  }
  next() {
    const e14 = this._inputGeometries.next();
    if (e14) {
      if (1 === this._xFactor && 1 === this._yFactor) return e14;
      if ("esriGeometryPoint" === e14.geometryType) return e14;
      if (e14.totalSize > 0) {
        const r18 = c(e14), o9 = (r18[2] + r18[0]) / 2, s13 = (r18[3] + r18[1]) / 2;
        return e14.reset(), this._scaleCursor(e14.clone(), o9, s13);
      }
    }
    return null;
  }
  _scaleCursor(t15, e14, r18) {
    for (; t15.nextPath(); ) for (; t15.nextPoint(); ) t15.x = e14 + (t15.x - e14) * this._xFactor, t15.y = r18 + (t15.y - r18) * this._yFactor;
    return t15.reset(), t15;
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/effects/EffectWave.js
var n11 = class _n {
  static local() {
    return null === _n.instance && (_n.instance = new _n()), _n.instance;
  }
  execute(t15, e14, i14, s13, h8) {
    return new r9(t15, e14, i14);
  }
};
n11.instance = null;
var r9 = class {
  constructor(t15, e14, h8) {
    this._inputGeometries = t15, this._height = (void 0 !== e14.amplitude ? e14.amplitude : 2) * h8, this._period = (void 0 !== e14.period ? e14.period : 3) * h8, this._style = e14.waveform, this._height <= 0 && (this._height = Math.abs(this._height)), this._period <= 0 && (this._period = Math.abs(this._period)), this._pattern = new i6(), this._pattern.addValue(this._period), this._pattern.addValue(this._period), this._walker = new o3(), this._walker.updateTolerance(h8);
  }
  next() {
    let t15 = this._inputGeometries.next();
    for (; t15; ) {
      if (0 === this._height || 0 === this._period) return t15;
      const e14 = this._processGeom(t15);
      if (e14) return e14;
      t15 = this._inputGeometries.next();
    }
    return null;
  }
  _processGeom(i14) {
    const s13 = a6.createEmptyOptimizedCIM(i14.geometryType);
    for (; i14.nextPath(); ) {
      s13.startPath();
      const t15 = i14.pathLength();
      if (this._walker.init(i14, this._pattern)) switch (this._style) {
        case A3.Sinus:
        default:
          this._constructCurve(s13, t15, false);
          break;
        case A3.Square:
          this._constructSquare(s13, t15);
          break;
        case A3.Triangle:
          this._constructTriangle(s13, t15);
          break;
        case A3.Random:
          this._constructCurve(s13, t15, true);
      }
      else for (; i14.nextPoint(); ) s13.pushXY(i14.x, i14.y);
    }
    return s13;
  }
  _constructCurve(t15, e14, i14) {
    let s13 = Math.round(e14 / this._period);
    0 === s13 && (s13 = 1);
    const n17 = s13 * 16 + 1, r18 = e14 / s13, a12 = this._period / 16, o9 = 1 / n17, p7 = 2 * Math.PI * e14 / r18, _6 = 2 * Math.PI * Math.random(), u14 = 2 * Math.PI * Math.random(), l11 = 2 * Math.PI * Math.random(), c5 = 0.75 - Math.random() / 2, d4 = 0.75 - Math.random() / 2, g4 = new h4();
    this._walker.curPointAndAngle(g4), t15.pushPoint(g4.pt);
    let w5 = 0;
    for (; ; ) {
      if (!this._walker.nextPointAndAngle(a12, g4)) {
        t15.pushPoint(this._walker.getPathEnd());
        break;
      }
      {
        const e15 = w5;
        let s14;
        if (w5 += o9, i14) {
          const t16 = this._height / 2 * (1 + 0.3 * Math.sin(c5 * p7 * e15 + _6));
          s14 = t16 * Math.sin(p7 * e15 + u14), s14 += t16 * Math.sin(d4 * p7 * e15 + l11), s14 /= 2;
        } else s14 = 0.5 * this._height * Math.sin(0.5 * p7 * e15);
        t15.pushXY(g4.pt[0] - s14 * g4.sa, g4.pt[1] + s14 * g4.ca);
      }
    }
  }
  _constructSquare(t15, e14) {
    Math.round(e14 / this._period);
    let i14 = true;
    for (; ; ) {
      let e15 = false;
      if (this._walker.curPositionIsValid()) {
        const s13 = new h4();
        this._walker.curPointAndAngle(s13);
        const n17 = new h4();
        if (this._walker.nextPointAndAngle(this._period, n17)) {
          const r18 = new h4();
          this._walker.nextPointAndAngle(this._period, r18) && (i14 ? (t15.pushPoint(s13.pt), i14 = false) : t15.pushPoint(s13.pt), t15.pushXY(s13.pt[0] - this._height / 2 * s13.sa, s13.pt[1] + this._height / 2 * s13.ca), t15.pushXY(n17.pt[0] - this._height / 2 * n17.sa, n17.pt[1] + this._height / 2 * n17.ca), t15.pushXY(n17.pt[0] + this._height / 2 * n17.sa, n17.pt[1] - this._height / 2 * n17.ca), t15.pushXY(r18.pt[0] + this._height / 2 * r18.sa, r18.pt[1] - this._height / 2 * r18.ca), e15 = true);
        }
      }
      if (!e15) {
        t15.pushPoint(this._walker.getPathEnd());
        break;
      }
    }
  }
  _constructTriangle(t15, e14) {
    Math.round(e14 / this._period);
    let i14 = true;
    for (; ; ) {
      let e15 = false;
      if (this._walker.curPositionIsValid()) {
        const s13 = new h4();
        this._walker.curPointAndAngle(s13);
        const n17 = new h4();
        if (this._walker.nextPointAndAngle(this._period / 2, n17)) {
          const r18 = new h4();
          this._walker.nextPointAndAngle(this._period, r18) && (this._walker.nextPosition(this._period / 2) && (i14 ? (t15.pushPoint(s13.pt), i14 = false) : t15.pushPoint(s13.pt), t15.pushXY(n17.pt[0] - this._height / 2 * n17.sa, n17.pt[1] + this._height / 2 * n17.ca), t15.pushXY(r18.pt[0] + this._height / 2 * r18.sa, r18.pt[1] - this._height / 2 * r18.ca)), e15 = true);
        }
      }
      if (!e15) {
        t15.pushPoint(this._walker.getPathEnd());
        break;
      }
    }
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/placements/PlacementAlongLineSameSize.js
var a8 = class _a {
  static local() {
    return null === _a.instance && (_a.instance = new _a()), _a.instance;
  }
  execute(t15, e14, s13, i14, n17) {
    return new r10(t15, e14, s13);
  }
};
a8.instance = null;
var r10 = class extends s5 {
  constructor(t15, e14, n17) {
    super(t15), this._geometryWalker = new o3(), this._geometryWalker.updateTolerance(n17), this._angleToLine = e14.angleToLine ?? true, this._offset = (e14.offset ? e14.offset : 0) * n17, this._originalEndings = e14.endings, this._offsetAtEnd = (e14.customEndingOffset ? e14.customEndingOffset : 0) * n17, this._position = -(e14.offsetAlongLine ? e14.offsetAlongLine : 0) * n17, this._pattern = new i6(), this._pattern.init(e14.placementTemplate, false), this._pattern.scale(n17), this._endings = this._originalEndings;
  }
  processPath(t15) {
    if (this._pattern.isEmpty()) return null;
    let s13;
    if (this.iteratePath) s13 = this._pattern.nextValue();
    else {
      this._originalEndings === X2.WithFullGap && this.isClosed ? this._endings = X2.WithMarkers : this._endings = this._originalEndings, this._pattern.extPtGap = 0;
      let i15, n17 = true;
      switch (this._endings) {
        case X2.NoConstraint:
          i15 = -this._position, i15 = this._adjustPosition(i15), n17 = false;
          break;
        case X2.WithHalfGap:
        default:
          i15 = -this._pattern.lastValue() / 2;
          break;
        case X2.WithFullGap:
          i15 = -this._pattern.lastValue(), this._pattern.extPtGap = this._pattern.lastValue();
          break;
        case X2.WithMarkers:
          i15 = 0;
          break;
        case X2.Custom:
          i15 = -this._position, i15 = this._adjustPosition(i15), this._pattern.extPtGap = 0.5 * this._offsetAtEnd;
      }
      if (!this._geometryWalker.init(t15, this._pattern, n17)) return null;
      this._pattern.reset();
      let a12 = 0;
      for (; i15 > a12; ) i15 -= a12, a12 = this._pattern.nextValue();
      a12 -= i15, s13 = a12, this.iteratePath = true;
    }
    const i14 = new h4();
    return this._geometryWalker.nextPointAndAngle(s13, i14) ? this._endings === X2.WithFullGap && this._geometryWalker.isPathEnd() ? (this.iteratePath = false, null) : this._endings === X2.WithMarkers && this._geometryWalker.isPathEnd() && (this.iteratePath = false, this.isClosed) ? null : (this.internalPlacement.setTranslate(i14.pt[0] - this._offset * i14.sa, i14.pt[1] + this._offset * i14.ca), this._angleToLine && this.internalPlacement.setRotateCS(i14.ca, i14.sa), this.internalPlacement) : (this.iteratePath = false, null);
  }
  _adjustPosition(t15) {
    let e14 = t15 / this._pattern.length();
    return e14 -= Math.floor(e14), e14 * this._pattern.length();
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/placements/PlacementAtExtremities.js
var i7 = class _i {
  static local() {
    return null === _i.instance && (_i.instance = new _i()), _i.instance;
  }
  execute(t15, e14, s13, i14, n17) {
    return new r11(t15, e14, s13);
  }
};
i7.instance = null;
var r11 = class extends s5 {
  constructor(t15, s13, i14) {
    super(t15, false, true), this._curveHelper = new s6(), this._placePerPart = s13.placePerPart ?? false, this._angleToLine = void 0 === s13.angleToLine || s13.angleToLine, this._offset = void 0 !== s13.offset ? s13.offset * i14 : 0, this._type = s13.extremityPlacement, this._position = void 0 !== s13.offsetAlongLine ? s13.offsetAlongLine * i14 : 0, this._beginProcessed = false;
  }
  processMultiPath(t15) {
    return this._placePerPart ? super.processMultiPath(t15) : this.processPath(t15);
  }
  processPath(t15) {
    let e14;
    switch (this._type) {
      case o2.Both:
      default:
        this._beginProcessed ? (e14 = this._atExtremities(t15, this._position, false), this._beginProcessed = false, this.iterateMultiPath = false, this.iteratePath = false) : (e14 = this._atExtremities(t15, this._position, true), this._beginProcessed = true, this.iterateMultiPath = true, this.iteratePath = true);
        break;
      case o2.JustBegin:
        e14 = this._atExtremities(t15, this._position, true);
        break;
      case o2.JustEnd:
        e14 = this._atExtremities(t15, this._position, false);
      case o2.None:
    }
    return e14;
  }
  _atExtremities(t15, e14, s13) {
    if (this._placePerPart || (s13 ? t15.seekPath(0) : t15.seekPath(t15.totalSize - 1)), s13 || t15.seekPathEnd(), s13 ? t15.nextPoint() : t15.prevPoint()) {
      let i14 = 0, [r18, n17] = [0, 0], [a12, o9] = [t15.x, t15.y];
      for (; s13 ? t15.nextPoint() : t15.prevPoint(); ) {
        r18 = a12, n17 = o9, a12 = t15.x, o9 = t15.y;
        const s14 = this._curveHelper.getLength(r18, n17, a12, o9);
        if (i14 + s14 > e14) {
          const t16 = (e14 - i14) / s14, [h8, l11] = this._curveHelper.getAngleCS(r18, n17, a12, o9, t16), c5 = this._curveHelper.getCoord2D(r18, n17, a12, o9, t16);
          return this.internalPlacement.setTranslate(c5[0] - this._offset * l11, c5[1] + this._offset * h8), this._angleToLine && this.internalPlacement.setRotateCS(-h8, -l11), this.internalPlacement;
        }
        i14 += s14;
      }
    }
    return null;
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/placements/PlacementAtRatioPositions.js
var a9 = class _a {
  static local() {
    return null === _a.instance && (_a.instance = new _a()), _a.instance;
  }
  execute(t15, i14, s13, e14, n17) {
    return new r12(t15, i14, s13);
  }
};
a9.instance = null;
var r12 = class extends s5 {
  constructor(t15, e14, n17) {
    super(t15), this._walker = new o3(), this._walker.updateTolerance(n17), this._angleToLine = void 0 === e14.angleToLine || e14.angleToLine, this._offset = void 0 !== e14.offset ? e14.offset * n17 : 0, this._beginGap = void 0 !== e14.beginPosition ? e14.beginPosition * n17 : 0, this._endGap = void 0 !== e14.endPosition ? e14.endPosition * n17 : 0, this._flipFirst = void 0 === e14.flipFirst || e14.flipFirst, this._pattern = new i6(), this._pattern.init(e14.positionArray, false, false), this._subPathLen = 0, this._posCount = this._pattern.size(), this._isFirst = true, this._prevPos = 0;
  }
  processPath(t15) {
    if (this._pattern.isEmpty()) return null;
    let i14;
    if (this.iteratePath) {
      const t16 = this._pattern.nextValue() * this._subPathLen, s14 = this._beginGap + t16;
      i14 = s14 - this._prevPos, this._prevPos = s14;
    } else {
      if (this._posCount = this._pattern.size(), this._isFirst = true, this._prevPos = 0, this._subPathLen = t15.pathLength() - this._beginGap - this._endGap, this._subPathLen < 0) return this.iteratePath = false, null;
      if (!this._walker.init(t15, this._pattern, false)) return null;
      this._pattern.reset();
      const s14 = this._pattern.nextValue() * this._subPathLen, e14 = this._beginGap + s14;
      i14 = e14 - this._prevPos, this._prevPos = e14, this.iteratePath = true;
    }
    const s13 = new h4();
    if (!this._walker.nextPointAndAngle(i14, s13, r6.END)) return this.iteratePath = false, null;
    this.internalPlacement.setTranslate(s13.pt[0] - this._offset * s13.sa, s13.pt[1] + this._offset * s13.ca);
    const a12 = this._isFirst && this._flipFirst;
    let r18, h8;
    return this._angleToLine ? (r18 = s13.ca, h8 = s13.sa) : (r18 = 1, h8 = 0), a12 && (r18 = -r18, h8 = -h8), this.internalPlacement.setRotateCS(r18, h8), this._isFirst = false, this._posCount--, 0 === this._posCount && (this.iteratePath = false), this.internalPlacement;
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/placements/PlacementInsidePolygon.js
var e13 = 512;
var h6 = 10;
var n12 = 24;
var _3 = 1e-6;
var r13 = class _r {
  static local() {
    return null === _r.instance && (_r.instance = new _r()), _r.instance;
  }
  execute(t15, s13, i14, e14, h8) {
    return new a10(t15, s13, i14, e14, h8);
  }
};
r13.instance = null;
var a10 = class _a {
  constructor(h8, n17, _6, r18, a12) {
    if (this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, this._currentX = 0, this._currentY = 0, this._accelerationMap = null, this._testInsidePolygon = false, this._verticalSubdivision = true, this._stepX = Math.abs(n17.stepX ?? 16) * _6, this._stepY = Math.abs(n17.stepY ?? 16) * _6, this._stepX = Math.round(128 * this._stepX) / 128, this._stepY = Math.round(128 * this._stepY) / 128, 0 !== this._stepX && 0 !== this._stepY) {
      if (this._gridType = n17.gridType ?? Y.Fixed, this._gridType === Y.Random) {
        const s13 = n17.seed ?? 13, i14 = 1;
        this._randomLCG = new t(s13 * i14), this._randomness = (n17.randomness ?? 100) / 100, this._gridAngle = 0, this._shiftOddRows = false, this._cosAngle = 1, this._sinAngle = 0, this._offsetX = 0, this._offsetY = 0, this._buildRandomValues();
      } else {
        if (this._randomness = 0, this._gridAngle = n17.gridAngle ?? 0, this._shiftOddRows = n17.shiftOddRows ?? false, this._offsetX = (n17.offsetX ?? 0) * _6, this._offsetY = (n17.offsetY ?? 0) * _6, this._cosAngle = Math.cos(this._gridAngle / 180 * Math.PI), this._sinAngle = -Math.sin(this._gridAngle / 180 * Math.PI), this._stepX) if (this._offsetX < 0) for (; this._offsetX < -0.5 * this._stepX; ) this._offsetX += this._stepX;
        else for (; this._offsetX >= 0.5 * this._stepX; ) this._offsetX -= this._stepX;
        if (this._stepY) if (this._offsetY < 0) for (; this._offsetY < -0.5 * this._stepY; ) this._offsetY += this._stepY;
        else for (; this._offsetY >= 0.5 * this._stepY; ) this._offsetY -= this._stepY;
      }
      if (this._graphicOriginX = 0, this._graphicOriginY = 0, null != r18) {
        const [t15, s13, i14, h9] = r18.split("/"), n18 = parseFloat(t15), _7 = parseFloat(s13), a13 = parseFloat(i14), o9 = parseFloat(h9);
        this._graphicOriginX = -(o9 * 2 ** n18 + a13) * e13, this._graphicOriginY = _7 * e13, this._testInsidePolygon = true;
      }
      this._internalPlacement = new t7(), this._calculateMinMax(h8), this._geometryCursor = h8;
    }
  }
  next() {
    return this._geometryCursor ? this._nextInside() : null;
  }
  _buildRandomValues() {
    if (!_a._randValues) {
      _a._randValues = [];
      for (let t15 = 0; t15 < n12; t15++) for (let s13 = 0; s13 < n12; s13++) _a._randValues.push(this._randomLCG.getFloat()), _a._randValues.push(this._randomLCG.getFloat());
    }
  }
  _calculateMinMax(t15) {
    let s13, i14, h8, n17, _6, r18, a12, o9, l11, f9, c5, u14, p7, M4;
    this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, a12 = o9 = p7 = c5 = Number.MAX_VALUE, l11 = f9 = M4 = u14 = -Number.MAX_VALUE;
    const g4 = 1 !== this._cosAngle;
    for (t15.reset(); t15.nextPath(); ) for (; t15.nextPoint(); ) r18 = t15.x, _6 = t15.y, s13 = r18 - this._graphicOriginX - this._offsetX, i14 = _6 - this._graphicOriginY - this._offsetY, g4 ? (h8 = this._cosAngle * s13 - this._sinAngle * i14, n17 = this._sinAngle * s13 + this._cosAngle * i14) : (h8 = s13, n17 = i14), a12 = Math.min(a12, h8), l11 = Math.max(l11, h8), o9 = Math.min(o9, n17), f9 = Math.max(f9, n17), c5 = Math.min(c5, _6), u14 = Math.max(u14, _6), p7 = Math.min(p7, r18), M4 = Math.max(M4, r18);
    c5 = c5 !== Number.MAX_VALUE ? c5 : -e13 - this._stepY, u14 = u14 !== -Number.MAX_VALUE ? u14 : this._stepY, p7 = p7 !== Number.MAX_VALUE ? p7 : -this._stepX, M4 = M4 !== -Number.MAX_VALUE ? M4 : e13 + this._stepX;
    const d4 = u14 - c5, X3 = M4 - p7;
    if (this._verticalSubdivision = d4 >= X3, this._polygonMin = this._verticalSubdivision ? c5 : p7, this._testInsidePolygon) {
      let t16 = 0 - this._graphicOriginX - this._offsetX - this._stepX, s14 = e13 - this._graphicOriginX - this._offsetX + this._stepX, i15 = -e13 - this._graphicOriginY - this._offsetY - this._stepY, h9 = 0 - this._graphicOriginY - this._offsetY + this._stepY;
      if (g4) {
        const e14 = [[t16, i15], [t16, h9], [s14, i15], [s14, h9]];
        t16 = i15 = Number.MAX_VALUE, s14 = h9 = -Number.MAX_VALUE;
        for (const n18 of e14) {
          const e15 = this._cosAngle * n18[0] - this._sinAngle * n18[1], _7 = this._sinAngle * n18[0] + this._cosAngle * n18[1];
          t16 = Math.min(t16, e15), s14 = Math.max(s14, e15), i15 = Math.min(i15, _7), h9 = Math.max(h9, _7);
        }
      }
      a12 = a12 !== Number.MAX_VALUE ? Math.max(a12, t16) : t16, o9 = o9 !== Number.MAX_VALUE ? Math.max(o9, i15) : i15, l11 = l11 !== -Number.MAX_VALUE ? Math.min(l11, s14) : s14, f9 = f9 !== -Number.MAX_VALUE ? Math.min(f9, h9) : h9;
    }
    this._xMin = Math.round(a12 / this._stepX), this._xMax = Math.round(l11 / this._stepX), this._yMin = Math.round(o9 / this._stepY), this._yMax = Math.round(f9 / this._stepY), this._currentX = this._xMax + 1, this._currentY = this._yMin - 1, this._buildAccelerationMap(t15, p7, M4, c5, u14);
  }
  _buildAccelerationMap(t15, s13, i14, n17, _6) {
    t15.reset();
    const r18 = /* @__PURE__ */ new Map(), a12 = this._verticalSubdivision, o9 = a12 ? _6 - n17 : i14 - s13;
    let f9 = Math.ceil(o9 / h6);
    if (f9 <= 1) return;
    const c5 = Math.floor(o9 / f9);
    let u14, p7, M4, g4, d4, X3, m6, x4, A6, Y4, y5;
    for (f9++, this._delta = c5, a12 ? (A6 = -e13 - 2 * this._stepY, Y4 = 2 * this._stepY, y5 = n17) : (A6 = -2 * this._stepX, Y4 = e13 + 2 * this._stepX, y5 = s13); t15.nextPath(); ) if (!(t15.pathSize < 2) && t15.nextPoint()) for (u14 = t15.x, p7 = t15.y; t15.nextPoint(); u14 = M4, p7 = g4) {
      if (M4 = t15.x, g4 = t15.y, a12) {
        if (p7 === g4 || p7 < A6 && g4 < A6 || p7 > Y4 && g4 > Y4) continue;
        d4 = Math.min(p7, g4), X3 = Math.max(p7, g4);
      } else {
        if (u14 === M4 || u14 < A6 && M4 < A6 || u14 > Y4 && M4 > Y4) continue;
        d4 = Math.min(u14, M4), X3 = Math.max(u14, M4);
      }
      for (; d4 < X3; ) m6 = Math.floor((d4 - y5) / c5), l7(m6, u14, p7, M4, g4, r18), d4 += c5;
      x4 = Math.floor((X3 - y5) / c5), x4 > m6 && l7(x4, u14, p7, M4, g4, r18);
    }
    this._accelerationMap = r18;
  }
  _nextInside() {
    for (; ; ) {
      if (this._currentX > this._xMax) {
        if (this._currentY++, this._currentY > this._yMax) return null;
        this._currentX = this._xMin, this._shiftOddRows && this._currentY % 2 && this._currentX--;
      }
      let t15 = this._currentX * this._stepX + this._offsetX;
      this._shiftOddRows && this._currentY % 2 && (t15 += 0.5 * this._stepX);
      const s13 = this._currentY * this._stepY + this._offsetY;
      let e14, h8;
      if (this._currentX++, this._gridType === Y.Random) {
        const i14 = (this._currentX % n12 + n12) % n12, _6 = (this._currentY % n12 + n12) % n12;
        e14 = this._graphicOriginX + t15 + this._stepX * this._randomness * (0.5 - _a._randValues[_6 * n12 + i14]) * 2 / 3, h8 = this._graphicOriginY + s13 + this._stepY * this._randomness * (0.5 - _a._randValues[_6 * n12 + i14 + 1]) * 2 / 3;
      } else e14 = this._graphicOriginX + this._cosAngle * t15 + this._sinAngle * s13, h8 = this._graphicOriginY - this._sinAngle * t15 + this._cosAngle * s13;
      if (!this._testInsidePolygon || this._isInsidePolygon(e14, h8, this._geometryCursor)) return this._internalPlacement.setTranslate(e14, h8), this._internalPlacement;
    }
  }
  _isInsidePolygon(t15, s13, i14) {
    if (null == this._accelerationMap) return o5(t15, s13, i14);
    t15 += _3, s13 += _3;
    const e14 = this._verticalSubdivision, h8 = e14 ? s13 : t15, n17 = Math.floor((h8 - this._polygonMin) / this._delta), r18 = this._accelerationMap.get(n17);
    if (!r18) return false;
    let a12, l11, f9, c5 = 0;
    for (const _6 of r18) {
      if (a12 = _6[0], l11 = _6[1], e14) {
        if (a12[1] > s13 == l11[1] > s13) continue;
        f9 = (l11[0] - a12[0]) * (s13 - a12[1]) - (l11[1] - a12[1]) * (t15 - a12[0]);
      } else {
        if (a12[0] > t15 == l11[0] > t15) continue;
        f9 = (l11[1] - a12[1]) * (t15 - a12[0]) - (l11[0] - a12[0]) * (s13 - a12[1]);
      }
      f9 > 0 ? c5++ : c5--;
    }
    return 0 !== c5;
  }
};
function o5(t15, s13, i14) {
  let e14, h8, n17, r18, a12 = 0;
  for (t15 += _3, s13 += _3, i14.reset(); i14.nextPath(); ) if (i14.nextPoint()) for (e14 = i14.x, h8 = i14.y; i14.nextPoint(); e14 = n17, h8 = r18) {
    if (n17 = i14.x, r18 = i14.y, h8 > s13 == r18 > s13) continue;
    (n17 - e14) * (s13 - h8) - (r18 - h8) * (t15 - e14) > 0 ? a12++ : a12--;
  }
  return 0 !== a12;
}
function l7(t15, s13, i14, e14, h8, n17) {
  let _6 = n17.get(t15);
  _6 || (_6 = [], n17.set(t15, _6)), _6.push([[s13, i14], [e14, h8]]);
}

// ../../../node_modules/@arcgis/core/symbols/cim/placements/PlacementOnLine.js
var i8 = 1e-3;
var s8 = class _s {
  static local() {
    return null === _s.instance && (_s.instance = new _s()), _s.instance;
  }
  execute(e14, t15, n17, i14, s13) {
    return new r14(e14, t15, n17);
  }
};
s8.instance = null;
var r14 = class extends s5 {
  constructor(e14, n17, s13) {
    super(e14), this._curveHelper = new s6(), this._angleToLine = void 0 === n17.angleToLine || n17.angleToLine, this._offset = void 0 !== n17.offset ? n17.offset * s13 : 0, this._relativeTo = n17.relativeTo, this._position = void 0 !== n17.startPointOffset ? n17.startPointOffset * s13 : 0, this._epsilon = i8 * s13;
  }
  processPath(e14) {
    const t15 = this._position;
    if (this._relativeTo === Z.SegmentMidpoint) {
      if (this.iteratePath || (this.iteratePath = true), e14.nextPoint()) {
        let [t16, n17] = [e14.x, e14.y], [i15, s13] = [0, 0];
        for (; e14.nextPoint(); ) {
          i15 = e14.x, s13 = e14.y;
          const r18 = this._curveHelper.getLength(t16, n17, i15, s13);
          if (r18 < this._epsilon) {
            t16 = i15, n17 = s13;
            continue;
          }
          const o9 = 0.5 + this._position / r18, [a12, l11] = this._curveHelper.getAngleCS(t16, n17, i15, s13, o9), h8 = this._curveHelper.getCoord2D(t16, n17, i15, s13, o9);
          return this.internalPlacement.setTranslate(h8[0] - this._offset * l11, h8[1] + this._offset * a12), this._angleToLine && this.internalPlacement.setRotateCS(a12, l11), this.internalPlacement;
        }
      }
      return this.iteratePath = false, null;
    }
    const i14 = this._relativeTo === Z.LineEnd;
    return this.onLine(e14, t15, i14);
  }
  onLine(e14, t15, i14) {
    let s13, r18 = false;
    switch (this._relativeTo) {
      case Z.LineMiddle:
      default:
        e14.seekPathStart(), s13 = e14.pathLength() / 2 + t15;
        break;
      case Z.LineBeginning:
        s13 = t15;
        break;
      case Z.LineEnd:
        s13 = t15, r18 = true;
    }
    i14 ? e14.seekPathEnd() : e14.seekPathStart();
    let o9 = 0;
    if (i14 ? e14.prevPoint() : e14.nextPoint()) {
      let [t16, n17] = [e14.x, e14.y], [a12, l11] = [0, 0];
      for (; i14 ? e14.prevPoint() : e14.nextPoint(); ) {
        a12 = e14.x, l11 = e14.y;
        const i15 = this._curveHelper.getLength(t16, n17, a12, l11);
        if (o9 + i15 > s13) {
          const e15 = (s13 - o9) / i15, [h8, c5] = this._curveHelper.getAngleCS(t16, n17, a12, l11, e15), f9 = this._curveHelper.getCoord2D(t16, n17, a12, l11, e15), u14 = r18 ? -this._offset : this._offset;
          return this.internalPlacement.setTranslate(f9[0] - u14 * c5, f9[1] + u14 * h8), this._angleToLine && (r18 ? this.internalPlacement.setRotateCS(-h8, -c5) : this.internalPlacement.setRotateCS(h8, c5)), this.internalPlacement;
        }
        t16 = a12, n17 = l11, o9 += i15;
      }
    }
    return null;
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/placements/PlacementOnVertices.js
var s9 = 1e-15;
var i9 = class _i {
  static local() {
    return null === _i.instance && (_i.instance = new _i()), _i.instance;
  }
  execute(t15, e14, s13, i14, o9) {
    return new n13(t15, e14, s13);
  }
};
i9.instance = null;
var n13 = class extends s5 {
  constructor(t15, s13, i14) {
    super(t15), this._curveHelper = new s6(), this._angleToLine = void 0 === s13.angleToLine || s13.angleToLine, this._offset = void 0 !== s13.offset ? s13.offset * i14 : 0, this._endPoints = void 0 === s13.placeOnEndPoints || s13.placeOnEndPoints, this._controlPoints = void 0 === s13.placeOnControlPoints || s13.placeOnControlPoints, this._regularVertices = void 0 === s13.placeOnRegularVertices || s13.placeOnRegularVertices, this._tags = [], this._tagIterator = 0;
  }
  processPath(t15) {
    if (this.iteratePath || (this._preparePath(t15), this.iteratePath = true), this._tagIterator >= this._tags.length) return this._tags.length = 0, this._tagIterator = 0, this.iteratePath = false, null;
    const e14 = this._tags[this._tagIterator];
    this._angleToLine && this.internalPlacement.setRotate(e14[2]);
    let s13 = e14[0], i14 = e14[1];
    if (0 !== this._offset) {
      const t16 = Math.cos(e14[2]), n17 = Math.sin(e14[2]);
      s13 -= this._offset * n17, i14 += this._offset * t16;
    }
    return this.internalPlacement.setTranslate(s13, i14), this._tagIterator++, this.internalPlacement;
  }
  _preparePath(t15) {
    this._tags.length = 0, this._tagIterator = 0, t15.seekPathStart();
    const e14 = t15.isClosed();
    let s13 = 0, i14 = false, n17 = 0, r18 = 0;
    if (t15.seekPathStart(), t15.nextPoint()) {
      let a12 = t15.x, h8 = t15.y, l11 = t15.getControlPoint(), _6 = true, c5 = t15.nextPoint();
      for (; c5; ) {
        const g4 = t15.x, P5 = t15.y, u14 = t15.getControlPoint();
        (this._angleToLine || 0 !== this._offset) && (n17 = this._curveHelper.getAngle(a12, h8, g4, P5, 0)), _6 ? (_6 = false, e14 ? (s13 = n17, i14 = l11) : (this._endPoints || this._controlPoints && l11) && this._tags.push([a12, h8, n17])) : l11 ? this._controlPoints && this._tags.push([a12, h8, o6(r18, n17)]) : this._regularVertices && this._tags.push([a12, h8, o6(r18, n17)]), (this._angleToLine || 0 !== this._offset) && (r18 = this._curveHelper.getAngle(a12, h8, g4, P5, 1)), c5 = t15.nextPoint(), c5 || (e14 ? u14 || i14 ? this._controlPoints && this._tags.push([g4, P5, o6(r18, s13)]) : this._regularVertices && this._tags.push([g4, P5, o6(r18, s13)]) : (this._endPoints || this._controlPoints && u14) && this._tags.push([g4, P5, r18])), a12 = g4, h8 = P5, l11 = u14;
      }
    }
    this._tagIterator = 0;
  }
};
function o6(t15, e14) {
  const i14 = Math.PI;
  for (; Math.abs(e14 - t15) > i14 + 2 * s9; ) e14 - t15 > i14 ? e14 -= 2 * i14 : e14 += 2 * i14;
  return (t15 + e14) / 2;
}

// ../../../node_modules/@arcgis/core/geometry/support/labelPoint.js
var N2 = 100 * 222045e-21;
function l8(t15) {
  if (0 === t15.totalSize) return null;
  const a12 = c(t15);
  if (!a12) return null;
  const o9 = 4 * (Math.abs(a12[0]) + Math.abs(a12[2]) + Math.abs(a12[1]) + Math.abs(a12[3]) + 1) * N2;
  let s13 = 0, c5 = 0;
  t15.reset();
  for (let e14 = 0; t15.nextPath(); e14++) {
    const n17 = t15.getCurrentRingArea();
    n17 > c5 && (c5 = n17, s13 = e14);
  }
  if (t15.seekPath(s13), 0 === t15.pathSize) return null;
  t15.seekPathStart();
  const l11 = f5(t15);
  if (Math.abs(c5) <= 2 * o9 * o9) return [(l11[0] + l11[2]) / 2, (l11[1] + l11[3]) / 2];
  t15.seekPathStart();
  const x4 = i(t15, u());
  if (null === x4) return null;
  if (t15.totalPoints < 4) return x4;
  const m6 = [[NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN]], d4 = [NaN, NaN, NaN, NaN], P5 = [NaN, NaN, NaN, NaN];
  let y5 = false, M4 = f8(x4, t15, true);
  0 === M4.distance && (y5 = true, m6[0][0] = x4[0], m6[0][1] = x4[1], M4 = f8(x4, t15, false)), d4[0] = M4.distance, P5[0] = 0;
  const b3 = [NaN, NaN];
  let S3 = false, k3 = 0.25, z2 = -1, g4 = NaN;
  do {
    if (g4 = NaN, m6[1] = h7(t15, w3(l11[0], l11[2], k3), o9, a12), isNaN(m6[1][0]) || isNaN(m6[1][1]) || (M4 = f8(m6[1], t15, false), g4 = M4.distance), !isNaN(g4) && g4 > o9 && u11(m6[1], t15)) S3 = true, d4[1] = g4, P5[1] = p4(m6[1], x4);
    else if (!isNaN(g4) && g4 > z2 && (z2 = g4, b3[0] = m6[1][0], b3[1] = m6[1][1]), k3 -= 0.01, k3 < 0.1) {
      if (!(z2 >= 0)) break;
      S3 = true, d4[1] = z2, m6[1][0] = b3[0], m6[1][1] = b3[1], P5[1] = p4(m6[1], x4);
    }
  } while (!S3);
  S3 = false, k3 = 0.5, z2 = -1;
  let q4 = 0.01, j3 = 1;
  do {
    if (g4 = NaN, m6[2] = h7(t15, w3(l11[0], l11[2], k3), o9, a12), isNaN(m6[2][0]) || isNaN(m6[2][1]) || (M4 = f8(m6[2], t15, false), g4 = M4.distance), !isNaN(g4) && g4 > o9 && u11(m6[2], t15)) S3 = true, d4[2] = g4, P5[2] = p4(m6[2], x4);
    else if (!isNaN(g4) && g4 > z2) z2 = g4, b3[0] = m6[2][0], b3[1] = m6[2][1];
    else if (g4 > z2 && (z2 = g4, b3[0] = m6[2][0], b3[1] = m6[2][1]), k3 = 0.5 + q4 * j3, q4 += 0.01, j3 *= -1, k3 < 0.3 || k3 > 0.7) {
      if (!(z2 >= 0)) break;
      S3 = true, d4[2] = z2, m6[2][0] = b3[0], m6[2][1] = b3[1], P5[2] = p4(m6[2], x4);
    }
  } while (!S3);
  S3 = false, k3 = 0.75, z2 = -1;
  do {
    if (g4 = NaN, m6[3] = h7(t15, w3(l11[0], l11[2], k3), o9, a12), isNaN(m6[3][0]) || isNaN(m6[3][1]) || (M4 = f8(m6[3], t15, false), g4 = M4.distance), !isNaN(g4) && g4 > o9 && u11(m6[3], t15)) S3 = true, d4[3] = g4, P5[3] = p4(m6[3], x4);
    else if (g4 > z2 && (z2 = g4, b3[0] = m6[3][0], b3[1] = m6[3][1]), k3 += 0.01, k3 > 0.9) {
      if (!(z2 >= 0)) break;
      S3 = true, d4[3] = z2, m6[3][0] = b3[0], m6[3][1] = b3[1], P5[3] = p4(m6[3], x4);
    }
  } while (!S3);
  const T4 = [0, 1, 2, 3], D2 = y5 ? 0 : 1;
  let R3;
  for (let e14 = D2; e14 < 4; e14++) for (let t16 = D2; t16 < 3; t16++) {
    const e15 = P5[t16], n17 = P5[t16 + 1];
    C4(e15, n17) > 0 && (R3 = T4[t16], T4[t16] = T4[t16 + 1], T4[t16 + 1] = R3, P5[t16] = n17, P5[t16 + 1] = e15);
  }
  let B3 = D2, Q3 = 0, U3 = 0;
  for (let e14 = D2; e14 < 4; e14++) {
    switch (e14) {
      case 0:
        U3 = 2 * d4[T4[e14]];
        break;
      case 1:
        U3 = 1.66666666 * d4[T4[e14]];
        break;
      case 2:
        U3 = 1.33333333 * d4[T4[e14]];
        break;
      case 3:
        U3 = d4[T4[e14]];
    }
    U3 > Q3 && (Q3 = U3, B3 = T4[e14]);
  }
  return m6[B3];
}
function u11(t15, e14) {
  let n17, i14, r18, a12, o9 = 0;
  for (e14.reset(); e14.nextPath() && e14.nextPoint(); ) for (n17 = e14.x, i14 = e14.y; e14.nextPoint(); n17 = r18, i14 = a12) {
    if (r18 = e14.x, a12 = e14.y, i14 > t15[1] == a12 > t15[1]) continue;
    (r18 - n17) * (t15[1] - i14) - (a12 - i14) * (t15[0] - n17) > 0 ? o9++ : o9--;
  }
  return 0 !== o9;
}
function f8(t15, e14, n17) {
  if (n17 && u11(t15, e14)) return {
    coord: t15,
    distance: 0
  };
  let i14 = 1 / 0, r18 = 0, a12 = 0, s13 = [0, 0], c5 = [0, 0];
  const N4 = [0, 0];
  for (e14.reset(); e14.nextPath() && e14.nextPoint(); ) if (!(e14.pathSize < 2)) for (s13[0] = e14.x, s13[1] = e14.y; e14.nextPoint(); s13 = c5) {
    c5 = [e14.x, e14.y], f2(N4, t15, s13, c5);
    const n18 = p4(t15, N4);
    n18 < i14 && (i14 = n18, r18 = N4[0], a12 = N4[1]);
  }
  return {
    coord: [r18, a12],
    distance: Math.sqrt(i14)
  };
}
function h7(t15, n17, i14, r18) {
  const a12 = [n17, 0];
  let o9 = 1 / 0, s13 = 1 / 0, N4 = false, l11 = false;
  const u14 = [[n17, r18[1] - 1], [n17, r18[3] + 1]], f9 = [0, 0], h8 = [0, 0], m6 = [0, 0], d4 = [[0, 0], [0, 0]], P5 = u();
  for (t15.reset(); t15.nextPath() && t15.nextPoint(); ) if (!(t15.pathSize < 2)) for (d4[0][0] = t15.x, d4[0][1] = t15.y; t15.nextPoint(); d4[0][0] = d4[1][0], d4[0][1] = d4[1][1]) {
    if (d4[1][0] = t15.x, d4[1][1] = t15.y, null === x2(P5, d4)) continue;
    if (h8[0] = u14[0][0], h8[1] = u14[0][1], m6[0] = u14[1][0], m6[1] = u14[1][1], 0 === M2(P5, h8, m6)) continue;
    if (!G(u14[0], u14[1], d4[0], d4[1], f9)) continue;
    const e14 = f9[1];
    o9 > s13 ? e14 < o9 && (o9 = e14, N4 = true) : e14 < s13 && (s13 = e14, l11 = true);
  }
  return N4 && l11 ? a12[1] = (o9 + s13) / 2 : a12[0] = a12[1] = NaN, a12;
}
function x2(t15, n17) {
  if (n17.length < 2) return null;
  t15 || (t15 = u());
  const [i14, r18] = n17[0], [a12, o9] = n17[1];
  return t15[0] = Math.min(i14, a12), t15[1] = Math.min(r18, o9), t15[2] = Math.max(i14, a12), t15[3] = Math.max(r18, o9), t15;
}
var m5 = 1;
var d3 = 4;
var P4 = 3;
var y3 = 12;
function M2(t15, e14, n17) {
  let i14 = b(e14, t15), r18 = b(n17, t15);
  const a12 = t15[0], o9 = t15[1], s13 = t15[2], c5 = t15[3];
  if (i14 & r18) return 0;
  if (!(i14 | r18)) return 4;
  const N4 = (i14 ? 1 : 0) | (r18 ? 2 : 0);
  do {
    const N5 = n17[0] - e14[0], l11 = n17[1] - e14[1];
    if (N5 > l11) i14 & P4 ? (i14 & m5 ? (e14[1] += l11 * (a12 - e14[0]) / N5, e14[0] = a12) : (e14[1] += l11 * (s13 - e14[0]) / N5, e14[0] = s13), i14 = b(e14, t15)) : r18 & P4 ? (r18 & m5 ? (n17[1] += l11 * (a12 - n17[0]) / N5, n17[0] = a12) : (n17[1] += l11 * (s13 - n17[0]) / N5, n17[0] = s13), r18 = b(n17, t15)) : i14 ? (i14 & d3 ? (e14[0] += N5 * (o9 - e14[1]) / l11, e14[1] = o9) : (e14[0] += N5 * (c5 - e14[1]) / l11, e14[1] = c5), i14 = b(e14, t15)) : (r18 & d3 ? (n17[0] += N5 * (o9 - n17[1]) / l11, n17[1] = o9) : (n17[0] += N5 * (c5 - n17[1]) / l11, n17[1] = c5), r18 = b(n17, t15));
    else if (i14 & y3 ? (i14 & d3 ? (e14[0] += N5 * (o9 - e14[1]) / l11, e14[1] = o9) : (e14[0] += N5 * (c5 - e14[1]) / l11, e14[1] = c5), i14 = b(e14, t15)) : r18 & y3 ? (r18 & d3 ? (n17[0] += N5 * (o9 - n17[1]) / l11, n17[1] = o9) : (n17[0] += N5 * (c5 - n17[1]) / l11, n17[1] = c5), r18 = b(n17, t15)) : i14 ? (i14 & m5 ? (e14[1] += l11 * (a12 - e14[0]) / N5, e14[0] = a12) : (e14[1] += l11 * (s13 - e14[0]) / N5, e14[0] = s13), i14 = b(e14, t15)) : (r18 & m5 ? (n17[1] += l11 * (a12 - n17[0]) / N5, n17[0] = a12) : (n17[1] += l11 * (s13 - n17[0]) / N5, n17[0] = s13), r18 = b(n17, t15)), i14 & r18) return 0;
  } while (i14 | r18);
  return N4;
}
function b(t15, e14) {
  return (t15[0] < e14[0] ? 1 : 0) | (t15[0] > e14[2] ? 1 : 0) << 1 | (t15[1] < e14[1] ? 1 : 0) << 2 | (t15[1] > e14[3] ? 1 : 0) << 3;
}
function w3(t15, e14, n17) {
  return t15 + (e14 - t15) * n17;
}
function p4(t15, e14) {
  return (t15[0] - e14[0]) * (t15[0] - e14[0]) + (t15[1] - e14[1]) * (t15[1] - e14[1]);
}
function C4(t15, e14) {
  if (t15 < e14) return -1;
  if (t15 > e14) return 1;
  if (t15 === e14) return 0;
  const n17 = isNaN(t15), i14 = isNaN(e14);
  return n17 < i14 ? -1 : n17 > i14 ? 1 : 0;
}

// ../../../node_modules/@arcgis/core/symbols/cim/placements/PlacementPolygonCenter.js
var r15 = class _r {
  static local() {
    return null === _r.instance && (_r.instance = new _r()), _r.instance;
  }
  execute(t15, e14, s13, n17, o9) {
    return new i10(t15, e14, s13);
  }
};
r15.instance = null;
var i10 = class {
  constructor(t15, e14, s13) {
    this._geometryCursor = t15, this._offsetX = void 0 !== e14.offsetX ? e14.offsetX * s13 : 0, this._offsetY = void 0 !== e14.offsetY ? e14.offsetY * s13 : 0, this._method = void 0 !== e14.method ? e14.method : K.OnPolygon, this._internalPlacement = new t7();
  }
  next() {
    const t15 = this._geometryCursor;
    return this._geometryCursor = null, t15 ? this._polygonCenter(t15) : null;
  }
  _polygonCenter(n17) {
    let r18 = false;
    switch (this._method) {
      case K.CenterOfMass:
        {
          const t15 = f3(n17);
          t15 && (this._internalPlacement.setTranslate(t15[0] + this._offsetX, t15[1] + this._offsetY), r18 = true);
        }
        break;
      case K.BoundingBoxCenter:
        {
          const e14 = c(n17);
          e14 && (this._internalPlacement.setTranslate((e14[2] + e14[0]) / 2 + this._offsetX, (e14[3] + e14[1]) / 2 + this._offsetY), r18 = true);
        }
        break;
      case K.OnPolygon:
      default: {
        const t15 = l8(n17);
        null !== t15 && (this._internalPlacement.setTranslate(t15[0] + this._offsetX, t15[1] + this._offsetY), r18 = true);
      }
    }
    return r18 ? this._internalPlacement : null;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/alignmentUtils.js
var t11 = () => n.getLogger("esri.views.2d.engine.webgl.alignmentUtils");
var r16;
var n14;
function a11(e14) {
  if (!e14) return r16.Center;
  switch (e14) {
    case "Left":
    case "left":
      return r16.Left;
    case "Right":
    case "right":
      return r16.Right;
    case "Justify":
      return t11().warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."), r16.Center;
    case "Center":
    case "center":
      return r16.Center;
  }
}
function c4(e14) {
  if (!e14) return n14.Center;
  switch (e14) {
    case "Top":
    case "top":
      return n14.Top;
    case "Center":
    case "middle":
      return n14.Center;
    case "Baseline":
    case "baseline":
      return n14.Baseline;
    case "Bottom":
    case "bottom":
      return n14.Bottom;
  }
}
function o7(e14) {
  switch (e14) {
    case "above-left":
    case "esriServerPointLabelPlacementAboveLeft":
      return ["right", "bottom"];
    case "above-center":
    case "above-along":
    case "esriServerPointLabelPlacementAboveCenter":
    case "esriServerLinePlacementAboveAlong":
      return ["center", "bottom"];
    case "above-right":
    case "esriServerPointLabelPlacementAboveRight":
      return ["left", "bottom"];
    case "center-left":
    case "esriServerPointLabelPlacementCenterLeft":
      return ["right", "middle"];
    case "center-center":
    case "center-along":
    case "esriServerPointLabelPlacementCenterCenter":
    case "esriServerLinePlacementCenterAlong":
    case "always-horizontal":
    case "esriServerPolygonPlacementAlwaysHorizontal":
      return ["center", "middle"];
    case "center-right":
    case "esriServerPointLabelPlacementCenterRight":
      return ["left", "middle"];
    case "below-left":
    case "esriServerPointLabelPlacementBelowLeft":
      return ["right", "top"];
    case "below-center":
    case "below-along":
    case "esriServerPointLabelPlacementBelowCenter":
    case "esriServerLinePlacementBelowAlong":
      return ["center", "top"];
    case "below-right":
    case "esriServerPointLabelPlacementBelowRight":
      return ["left", "top"];
    default:
      return console.debug(`Found invalid placement type ${e14}`), ["center", "middle"];
  }
}
function s10(e14) {
  switch (e14) {
    case r16.Right:
    case "right":
      return -1;
    case r16.Center:
    case "center":
      return 0;
    case r16.Left:
    case "left":
      return 1;
    default:
      return console.debug(`Found invalid horizontal alignment ${e14}`), 0;
  }
}
function i11(e14) {
  switch (e14) {
    case n14.Top:
    case "top":
      return 1;
    case n14.Center:
    case "middle":
      return 0;
    case n14.Bottom:
    case n14.Baseline:
    case "baseline":
    case "bottom":
      return -1;
    default:
      return console.debug(`Found invalid vertical alignment ${e14}`), 0;
  }
}
!function(e14) {
  e14[e14.Left = -1] = "Left", e14[e14.Center = 0] = "Center", e14[e14.Right = 1] = "Right";
}(r16 || (r16 = {})), function(e14) {
  e14[e14.Top = 1] = "Top", e14[e14.Center = 0] = "Center", e14[e14.Bottom = -1] = "Bottom", e14[e14.Baseline = 2] = "Baseline";
}(n14 || (n14 = {}));

// ../../../node_modules/@arcgis/core/symbols/cim/CIMImageColorSubstitutionHelper.js
var t12 = class {
  applyColorSubstituition(t15, a12) {
    if (!a12) return t15;
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas"));
    const {
      width: e14,
      height: n17
    } = t15, o9 = this._rasterizationCanvas, r18 = o9.getContext("2d", {
      willReadFrequently: true
    });
    t15 !== o9 && (o9.width = e14, o9.height = n17, r18.drawImage(t15, 0, 0, e14, n17));
    const i14 = r18.getImageData(0, 0, e14, n17).data;
    if (a12) {
      for (const l11 of a12) if (l11 && l11.oldColor && 4 === l11.oldColor.length && l11.newColor && 4 === l11.newColor.length) {
        const [t16, a13, e15, n18] = l11.oldColor, [o10, r19, s14, h8] = l11.newColor;
        if (t16 === o10 && a13 === r19 && e15 === s14 && n18 === h8) continue;
        for (let l12 = 0; l12 < i14.length; l12 += 4) t16 === i14[l12] && a13 === i14[l12 + 1] && e15 === i14[l12 + 2] && n18 === i14[l12 + 3] && (i14[l12] = o10, i14[l12 + 1] = r19, i14[l12 + 2] = s14, i14[l12 + 3] = h8);
      }
    }
    const s13 = new ImageData(i14, e14, n17);
    return r18.putImageData(s13, 0, 0), o9;
  }
  tintImageData(t15, a12) {
    if (!a12 || a12.length < 4) return t15;
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas"));
    const {
      width: e14,
      height: n17
    } = t15, o9 = this._rasterizationCanvas, r18 = o9.getContext("2d", {
      willReadFrequently: true
    });
    t15 !== o9 && (o9.width = e14, o9.height = n17, r18.drawImage(t15, 0, 0, e14, n17));
    const i14 = r18.getImageData(0, 0, e14, n17), s13 = new Uint8Array(i14.data), l11 = [a12[0] / 255, a12[1] / 255, a12[2] / 255, a12[3] / 255];
    for (let g4 = 0; g4 < s13.length; g4 += 4) s13[g4] *= l11[0], s13[g4 + 1] *= l11[1], s13[g4 + 2] *= l11[2], s13[g4 + 3] *= l11[3];
    const h8 = new ImageData(new Uint8ClampedArray(s13.buffer), e14, n17);
    return r18.putImageData(h8, 0, 0), o9;
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/CIMOperators.js
function A4(p7) {
  if (!p7) return null;
  switch (p7.type) {
    case "CIMGeometricEffectAddControlPoints":
      return e6.local();
    case "CIMGeometricEffectArrow":
      return p2.local();
    case "CIMGeometricEffectBuffer":
      return m4.local();
    case "CIMGeometricEffectControlMeasureLine":
      return e7.local();
    case "CIMGeometricEffectCut":
      return r5.local();
    case "CIMGeometricEffectDashes":
      return _2.local();
    case "CIMGeometricEffectDonut":
      return s7.local();
    case "CIMGeometricEffectJog":
      return e8.local();
    case "CIMGeometricEffectMove":
      return t8.local();
    case "CIMGeometricEffectOffset":
      return h5.local();
    case "CIMGeometricEffectReverse":
      return e10.local();
    case "CIMGeometricEffectRotate":
      return e11.local();
    case "CIMGeometricEffectScale":
      return e12.local();
    case "CIMGeometricEffectWave":
      return n11.local();
  }
  return null;
}
function g2(e14) {
  if (!e14) return null;
  switch (e14.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
      return a8.local();
    case "CIMMarkerPlacementAtExtremities":
      return i7.local();
    case "CIMMarkerPlacementAtRatioPositions":
      return a9.local();
    case "CIMMarkerPlacementInsidePolygon":
      return r13.local();
    case "CIMMarkerPlacementOnLine":
      return s8.local();
    case "CIMMarkerPlacementOnVertices":
      return i9.local();
    case "CIMMarkerPlacementPolygonCenter":
      return r15.local();
  }
  return null;
}

// ../../../node_modules/@arcgis/core/symbols/cim/imageUtils.js
function t13(t15) {
  const e14 = t15.getFrame(0);
  if (e14 instanceof HTMLImageElement || e14 instanceof HTMLCanvasElement) return e14;
  const n17 = document.createElement("canvas");
  n17.width = t15.width, n17.height = t15.height;
  const a12 = n17.getContext("2d");
  return e14 instanceof ImageData ? a12.putImageData(e14, 0, 0) : a12.drawImage(e14, 0, 0), n17;
}

// ../../../node_modules/@arcgis/core/symbols/cim/Rect.js
var t14 = class _t {
  constructor(t15 = 0, h8 = 0, i14 = 0, s13 = 0) {
    this.x = t15, this.y = h8, this.width = i14, this.height = s13;
  }
  static fromExtent(h8) {
    return new _t(h8.xmin, -h8.ymax, h8.xmax - h8.xmin, h8.ymax - h8.ymin);
  }
  get isEmpty() {
    return this.width <= 0 || this.height <= 0;
  }
  union(t15) {
    this.x = Math.min(this.x, t15.x), this.y = Math.min(this.y, t15.y), this.width = Math.max(this.width, t15.width), this.height = Math.max(this.height, t15.height);
  }
};

// ../../../node_modules/@arcgis/core/symbols/cim/TextRasterizer.js
function i12(t15) {
  return `rgb(${t15.slice(0, 3).toString()})`;
}
function s11(t15) {
  return `rgba(${t15.slice(0, 3).toString()},${t15[3]})`;
}
var n15 = class {
  constructor(t15) {
    t15 && (this._textRasterizationCanvas = t15);
  }
  rasterizeText(n17, h8) {
    this._textRasterizationCanvas || (this._textRasterizationCanvas = document.createElement("canvas"));
    const a12 = this._textRasterizationCanvas, l11 = a12.getContext("2d", {
      willReadFrequently: true
    });
    r17(l11, h8), this._parameters = h8, this._textLines = n17.split(/\r?\n/), this._lineHeight = this._computeLineHeight();
    const {
      decoration: d4,
      weight: c5
    } = h8.font;
    this._lineThroughWidthOffset = d4 && "line-through" === d4 ? 0.1 * this._lineHeight : 0;
    const g4 = null != h8.backgroundColor || null != h8.borderLine, _6 = g4 ? s2 : 0, f9 = this._computeTextWidth(l11, h8) + 2 * _6, u14 = this._lineHeight * this._textLines.length + 2 * _6;
    if (a12.width = f9 + 2 * this._lineThroughWidthOffset, a12.height = u14, 0 === a12.width || 0 === a12.height) return a12.width = a12.height = 1, {
      size: [0, 0],
      image: new Uint32Array(0),
      sdf: false,
      simplePattern: false,
      anchorX: 0,
      anchorY: 0,
      canvas: a12
    };
    this._renderedLineHeight = Math.round(this._lineHeight * h8.pixelRatio), this._renderedHaloSize = u3(h8.halo.size) * h8.pixelRatio, this._renderedWidth = f9 * h8.pixelRatio, this._renderedHeight = u14 * h8.pixelRatio, this._lineThroughWidthOffset *= h8.pixelRatio;
    const x4 = h8.color ?? [0, 0, 0, 0], p7 = h8.halo && h8.halo.color ? h8.halo.color : [0, 0, 0, 0];
    this._fillStyle = s11(x4), this._haloStyle = i12(p7);
    const m6 = this._renderedLineHeight, b3 = this._renderedHaloSize;
    l11.save(), l11.clearRect(0, 0, a12.width, a12.height), r17(l11, h8);
    const w5 = _6 * h8.pixelRatio, z2 = o8(l11.textAlign, this._renderedWidth - 2 * w5) + b3 + w5, y5 = b3 + w5, R3 = b3 > 0;
    let v2 = this._lineThroughWidthOffset, H2 = 0;
    if (g4) {
      l11.save();
      const e14 = h8.backgroundColor ?? [0, 0, 0, 0], i14 = h8.borderLine?.color ?? [0, 0, 0, 0], n18 = 2 * u3(h8.borderLine?.size ?? 0);
      l11.fillStyle = s11(e14), l11.strokeStyle = s11(i14), l11.lineWidth = n18, l11.fillRect(0, 0, a12.width, a12.height), l11.strokeRect(0, 0, a12.width, a12.height), l11.restore();
    }
    R3 && this._renderHalo(l11, z2, y5, v2, H2, h8), H2 += y5, v2 += z2;
    for (const t15 of this._textLines) R3 ? (l11.globalCompositeOperation = "destination-out", l11.fillStyle = "rgb(0, 0, 0)", l11.fillText(t15, v2, H2), l11.globalCompositeOperation = "source-over", l11.fillStyle = this._fillStyle, l11.fillText(t15, v2, H2)) : (l11.fillStyle = this._fillStyle, l11.fillText(t15, v2, H2)), d4 && "none" !== d4 && this._renderDecoration(l11, v2, H2, d4, c5), H2 += m6;
    l11.restore();
    const S3 = this._renderedWidth + 2 * this._lineThroughWidthOffset, C5 = this._renderedHeight, T4 = l11.getImageData(0, 0, S3, C5), W4 = new Uint8Array(T4.data);
    if (h8.premultiplyColors) {
      let t15;
      for (let e14 = 0; e14 < W4.length; e14 += 4) t15 = W4[e14 + 3] / 255, W4[e14] = W4[e14] * t15, W4[e14 + 1] = W4[e14 + 1] * t15, W4[e14 + 2] = W4[e14 + 2] * t15;
    }
    let k3, L3;
    switch (h8.horizontalAlignment) {
      case "left":
        k3 = -0.5;
        break;
      case "right":
        k3 = 0.5;
        break;
      default:
        k3 = 0;
    }
    switch (h8.verticalAlignment) {
      case "bottom":
        L3 = -0.5;
        break;
      case "top":
        L3 = 0.5;
        break;
      case "baseline":
        L3 = -1 / 6;
        break;
      default:
        L3 = 0;
    }
    return {
      size: [S3, C5],
      image: new Uint32Array(W4.buffer),
      sdf: false,
      simplePattern: false,
      anchorX: k3,
      anchorY: L3,
      canvas: a12
    };
  }
  _renderHalo(t15, e14, i14, s13, n17, o9) {
    const h8 = this._renderedWidth, a12 = this._renderedHeight;
    this._haloRasterizationCanvas || (this._haloRasterizationCanvas = document.createElement("canvas")), this._haloRasterizationCanvas.width = h8, this._haloRasterizationCanvas.height = a12;
    const l11 = this._haloRasterizationCanvas, d4 = l11.getContext("2d");
    d4.clearRect(0, 0, h8, a12), r17(d4, o9);
    const {
      decoration: c5,
      weight: g4
    } = o9.font;
    d4.fillStyle = this._haloStyle, d4.strokeStyle = this._haloStyle, d4.lineJoin = "round", this._renderHaloNative(d4, e14, i14, c5, g4), t15.globalAlpha = this._parameters.halo.color[3], t15.drawImage(l11, 0, 0, h8, a12, s13, n17, h8, a12), t15.globalAlpha = 1;
  }
  _renderHaloNative(t15, e14, i14, s13, n17) {
    const r18 = this._renderedLineHeight, o9 = this._renderedHaloSize;
    for (const h8 of this._textLines) {
      const a12 = 2 * o9, l11 = 5, d4 = 0.1;
      for (let r19 = 0; r19 < l11; r19++) {
        const o10 = (1 - (l11 - 1) * d4 + r19 * d4) * a12;
        t15.lineWidth = o10, t15.strokeText(h8, e14, i14), s13 && "none" !== s13 && this._renderDecoration(t15, e14, i14, s13, n17, o10);
      }
      i14 += r18;
    }
  }
  computeTextSize(t15, e14) {
    this._textRasterizationCanvas || (this._textRasterizationCanvas = document.createElement("canvas"));
    const i14 = this._textRasterizationCanvas, s13 = i14.getContext("2d");
    r17(s13, e14), this._parameters = e14, this._textLines = t15.split(/\r?\n/), this._lineHeight = this._computeLineHeight();
    const n17 = this._computeTextWidth(s13, e14), o9 = this._lineHeight * this._textLines.length;
    return i14.width = n17, i14.height = o9, [n17 * e14.pixelRatio, o9 * e14.pixelRatio];
  }
  _computeTextWidth(e14, i14) {
    let s13 = 0;
    for (const t15 of this._textLines) s13 = Math.max(s13, e14.measureText(t15).width);
    const n17 = i14.font;
    return ("italic" === n17.style || "oblique" === n17.style || "string" == typeof n17.weight && ("bold" === n17.weight || "bolder" === n17.weight) || "number" == typeof n17.weight && n17.weight > 600) && (s13 += 0.3 * e14.measureText("w").width), s13 += 2 * u3(this._parameters.halo.size), Math.round(s13);
  }
  _computeLineHeight() {
    let e14 = 1.275 * this._parameters.size;
    const i14 = this._parameters.font.decoration;
    return i14 && "underline" === i14 && (e14 *= 1.3), Math.round(e14 + 2 * u3(this._parameters.halo.size));
  }
  _renderDecoration(t15, e14, i14, s13, n17, r18) {
    const o9 = 0.9 * this._lineHeight, h8 = "bold" === n17 ? 0.06 : "bolder" === n17 ? 0.09 : 0.04;
    switch (t15.textAlign) {
      case "center":
        e14 -= this._renderedWidth / 2;
        break;
      case "right":
        e14 -= this._renderedWidth;
    }
    const a12 = t15.textBaseline;
    if ("underline" === s13) switch (a12) {
      case "top":
        i14 += o9;
        break;
      case "middle":
        i14 += o9 / 2;
    }
    else if ("line-through" === s13) switch (a12) {
      case "top":
        i14 += o9 / 1.5;
        break;
      case "middle":
        i14 += o9 / 3;
    }
    const l11 = r18 ? 1.5 * r18 : Math.ceil(o9 * h8);
    t15.save(), t15.beginPath(), t15.strokeStyle = t15.fillStyle, t15.lineWidth = l11, t15.moveTo(e14 - this._lineThroughWidthOffset, i14), t15.lineTo(e14 + this._renderedWidth + 2 * this._lineThroughWidthOffset, i14), t15.stroke(), t15.restore();
  }
};
function r17(e14, i14) {
  const s13 = Math.max(i14.size, 0.5), n17 = i14.font, r18 = `${n17.style} ${n17.weight} ${u3(s13 * i14.pixelRatio).toFixed(1)}px ${n17.family}, sans-serif`;
  let o9;
  switch (e14.font = r18, e14.textBaseline = "top", i14.horizontalAlignment) {
    case "left":
    default:
      o9 = "left";
      break;
    case "right":
      o9 = "right";
      break;
    case "center":
      o9 = "center";
  }
  e14.textAlign = o9;
}
function o8(t15, e14) {
  return "center" === t15 ? 0.5 * e14 : "right" === t15 ? e14 : 0;
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/shapingUtils.js
var _4 = 22;
var l9 = 4;
var u12 = _4 + l9;
var x3 = _4 - 6;
var p5 = 3;
var b2 = Math.PI / 180;
var y4 = 8;
var w4 = 1.5;
var M3 = class {
  constructor(t15, s13, i14, e14) {
    this._rotationT = n3(), this._xBounds = 0, this._yBounds = 0, this.minZoom = 0, this.maxZoom = 255, this._bounds = null;
    const h8 = i14.rect, n17 = new Float32Array(8);
    t15 *= e14, s13 *= e14;
    const r18 = i14.code ? h8.width * e14 : i14.metrics.width, a12 = i14.code ? h8.height * e14 : i14.metrics.height;
    this.width = r18, this.height = a12, n17[0] = t15, n17[1] = s13, n17[2] = t15 + r18, n17[3] = s13, n17[4] = t15, n17[5] = s13 + a12, n17[6] = t15 + r18, n17[7] = s13 + a12, this._data = n17, this._setTextureCoords(h8), this._scale = e14, this._mosaic = i14, this.x = t15, this.y = s13, this.maxOffset = Math.max(t15 + r18, s13 + a12);
  }
  get mosaic() {
    return this._mosaic;
  }
  set angle(s13) {
    this._angle = s13, M(this._rotationT, -s13), this._setOffsets();
  }
  get angle() {
    return this._angle;
  }
  get xTopLeft() {
    return this._data[0];
  }
  get yTopLeft() {
    return this._data[1];
  }
  get xBottomRight() {
    return this._data[6];
  }
  get yBottomRight() {
    return this._data[7];
  }
  get texcoords() {
    return this._texcoords;
  }
  get textureBinding() {
    return this._mosaic.textureBinding;
  }
  get offsets() {
    return this._offsets || this._setOffsets(), this._offsets;
  }
  get char() {
    return String.fromCharCode(this._mosaic.code);
  }
  get code() {
    return this._mosaic.code;
  }
  get bounds() {
    if (!this._bounds) {
      const {
        height: t15,
        width: i14
      } = this._mosaic.metrics, e14 = i14 * this._scale, n17 = Math.abs(t15) * this._scale, r18 = new Float32Array(8);
      r18[0] = this.x, r18[1] = this.y, r18[2] = this.x + e14, r18[3] = this.y, r18[4] = this.x, r18[5] = this.y + n17, r18[6] = this.x + e14, r18[7] = this.y + n17;
      const a12 = e5(n3(), this._rotationT, this._transform);
      a5(r18, r18, a12);
      let f9 = 1 / 0, c5 = 1 / 0, d4 = 0, m6 = 0;
      for (let s13 = 0; s13 < 4; s13++) {
        const t16 = r18[2 * s13], i15 = r18[2 * s13 + 1];
        f9 = Math.min(f9, t16), c5 = Math.min(c5, i15), d4 = Math.max(d4, t16), m6 = Math.max(m6, i15);
      }
      const _6 = d4 - f9, l11 = m6 - c5, u14 = f9 + _6 / 2, x4 = c5 + l11 / 2;
      this._bounds = new i4(u14, x4, _6, l11);
    }
    return this._bounds;
  }
  setTransform(t15) {
    this._transform = t15, this._offsets = null;
  }
  _setOffsets() {
    this._offsets || (this._offsets = {
      topLeft: [0, 0],
      topRight: [0, 0],
      bottomLeft: [0, 0],
      bottomRight: [0, 0]
    });
    const t15 = e5(n3(), this._rotationT, this._transform);
    this._offsets.topLeft[0] = this._data[0], this._offsets.topLeft[1] = this._data[1], this._offsets.topRight[0] = this._data[2], this._offsets.topRight[1] = this._data[3], this._offsets.bottomLeft[0] = this._data[4], this._offsets.bottomLeft[1] = this._data[5], this._offsets.bottomRight[0] = this._data[6], this._offsets.bottomRight[1] = this._data[7], S2(this._offsets.topLeft, this._offsets.topLeft, t15), S2(this._offsets.topRight, this._offsets.topRight, t15), S2(this._offsets.bottomLeft, this._offsets.bottomLeft, t15), S2(this._offsets.bottomRight, this._offsets.bottomRight, t15);
  }
  _setTextureCoords({
    x: t15,
    y: s13,
    width: i14,
    height: e14
  }) {
    this._texcoords = {
      topLeft: [t15, s13],
      topRight: [t15 + i14, s13],
      bottomLeft: [t15, s13 + e14],
      bottomRight: [t15 + i14, s13 + e14]
    };
  }
};
var L2 = (t15, s13) => ({
  code: 0,
  page: 0,
  sdf: true,
  rect: new t5(0, 0, 11, 8),
  textureBinding: s13,
  metrics: {
    advance: 0,
    height: 4,
    width: t15,
    left: 0,
    top: 0
  }
});
function R2(t15, s13) {
  return t15.forEach((t16) => S2(t16, t16, s13)), {
    topLeft: t15[0],
    topRight: t15[1],
    bottomLeft: t15[2],
    bottomRight: t15[3]
  };
}
var B2 = class {
  constructor(t15, s13, i14) {
    this._rotation = 0, this._decorate(t15, s13, i14), this.glyphs = t15, this.bounds = this._createBounds(t15), this.isMultiline = s13.length > 1, this._hasRotation = 0 !== i14.angle, this._transform = this._createGlyphTransform(this.bounds, i14), this._borderLineSizePx = i14.borderLineSizePx, (i14.borderLineSizePx || i14.hasBackground) && ([this.bounds, this.textBox] = this.shapeBackground(this._transform));
    for (const e14 of t15) e14.setTransform(this._transform);
  }
  setRotation(i14) {
    if (0 === i14 && 0 === this._rotation) return;
    this._rotation = i14;
    const e14 = this._transform, h8 = M(n3(), i14);
    e5(e14, h8, e14);
    for (const t15 of this.glyphs) t15.setTransform(this._transform);
  }
  _decorate(t15, s13, i14) {
    if (!i14.decoration || "none" === i14.decoration || !t15.length) return;
    const e14 = i14.scale, o9 = "underline" === i14.decoration ? u12 : x3, h8 = t15[0].textureBinding;
    for (const n17 of s13) {
      const s14 = n17.startX * e14, i15 = n17.startY * e14, r18 = (n17.width + n17.glyphWidthEnd) * e14;
      t15.push(new M3(s14, i15 + o9 * e14, L2(r18, h8), 1));
    }
  }
  shapeBackground(t15) {
    const s13 = this._borderLineSizePx || 0, i14 = (w4 + s13) / 2, e14 = this._borderLineSizePx ? i14 : 0, {
      xmin: o9,
      ymin: h8,
      xmax: n17,
      ymax: r18,
      x: a12,
      y: f9,
      width: c5,
      height: d4
    } = this.bounds, m6 = [o9 - y4, h8 - y4], _6 = [n17 + y4, h8 - y4], l11 = [o9 - y4, r18 + y4], u14 = [n17 + y4, r18 + y4], x4 = R2([[m6[0] - i14, m6[1] - i14], [_6[0] + i14, _6[1] - i14], [m6[0] + e14, m6[1] + e14], [_6[0] - e14, _6[1] + e14]], t15), p7 = R2([[l11[0] + e14, l11[1] - e14], [u14[0] - e14, u14[1] - e14], [l11[0] - i14, l11[1] + i14], [u14[0] + i14, u14[1] + i14]], t15), b3 = R2([[m6[0] - i14, m6[1] - i14], [m6[0] + e14, m6[1] + e14], [l11[0] - i14, l11[1] + i14], [l11[0] + e14, l11[1] - e14]], t15), M4 = R2([[_6[0] - e14, _6[1] + e14], [_6[0] + i14, _6[1] - i14], [u14[0] - e14, u14[1] - e14], [u14[0] + i14, u14[1] + i14]], t15), L3 = {
      main: R2([m6, _6, l11, u14], t15),
      top: x4,
      bot: p7,
      left: b3,
      right: M4
    };
    return [new i4(a12, f9, c5 + 2 * i14, d4 + 2 * i14), L3];
  }
  get boundsT() {
    const t15 = this.bounds, s13 = o(n4(), t15.x, t15.y);
    if (S2(s13, s13, this._transform), this._hasRotation) {
      const i14 = Math.max(t15.width, t15.height);
      return new i4(s13[0], s13[1], i14, i14);
    }
    return new i4(s13[0], s13[1], t15.width, t15.height);
  }
  _createBounds(t15) {
    let s13 = 1 / 0, i14 = 1 / 0, e14 = 0, o9 = 0;
    for (const r18 of t15) s13 = Math.min(s13, r18.xTopLeft), i14 = Math.min(i14, r18.yTopLeft), e14 = Math.max(e14, r18.xBottomRight), o9 = Math.max(o9, r18.yBottomRight);
    const h8 = e14 - s13, n17 = o9 - i14;
    return new i4(s13 + h8 / 2, i14 + n17 / 2, h8, n17);
  }
  _createGlyphTransform(t15, s13) {
    const h8 = b2 * s13.angle, n17 = n3(), f9 = n4();
    return i3(n17, n17, o(f9, s13.xOffset, -s13.yOffset)), s13.useCIMAngleBehavior ? s3(n17, n17, h8) : (i3(n17, n17, o(f9, t15.x, t15.y)), s3(n17, n17, h8), i3(n17, n17, o(f9, -t15.x, -t15.y))), n17;
  }
};
var T3 = class {
  constructor(t15, s13, i14, e14, o9, h8) {
    this.glyphWidthEnd = 0, this.startX = 0, this.startY = 0, this.start = Math.max(0, Math.min(s13, i14)), this.end = Math.max(0, Math.max(s13, i14)), this.end < t15.length && (this.glyphWidthEnd = t15[this.end].metrics.width), this.width = e14, this.yMin = o9, this.yMax = h8;
  }
};
var v = (t15) => 10 === t15;
var j2 = (t15) => 32 === t15;
function A5(t15, s13, i14) {
  const e14 = new Array(), o9 = 1 / i14.scale, h8 = i14.maxLineWidth * o9, n17 = s13 ? t15.length - 1 : 0, r18 = s13 ? -1 : t15.length, a12 = s13 ? -1 : 1;
  let f9 = n17, c5 = 0, d4 = 0, m6 = f9, g4 = m6, _6 = 0, l11 = 1 / 0, u14 = 0;
  for (; f9 !== r18; ) {
    const {
      code: s14,
      metrics: i15
    } = t15[f9], o10 = Math.abs(i15.top);
    if (v(s14) || j2(s14) || (l11 = Math.min(l11, o10), u14 = Math.max(u14, o10 + i15.height)), v(s14)) f9 !== n17 && (e14.push(new T3(t15, m6, f9 - a12, c5, l11 === 1 / 0 ? 0 : l11, u14)), l11 = 1 / 0, u14 = 0), c5 = 0, m6 = f9 + a12, g4 = f9 + a12, d4 = 0;
    else if (j2(s14)) g4 = f9 + a12, d4 = 0, _6 = i15.advance, c5 += i15.advance;
    else if (c5 > h8) {
      if (g4 !== m6) {
        const s15 = g4 - 2 * a12;
        c5 -= _6, e14.push(new T3(t15, m6, s15, c5 - d4, l11, u14)), l11 = 1 / 0, u14 = 0, m6 = g4, c5 = d4;
      } else e14.push(new T3(t15, m6, f9 - a12, c5, l11, u14)), l11 = 1 / 0, u14 = 0, m6 = f9, g4 = f9, c5 = 0;
      c5 += i15.advance, d4 += i15.advance;
    } else c5 += i15.advance, d4 += i15.advance;
    f9 += a12;
  }
  const x4 = new T3(t15, m6, f9 - a12, c5, l11, u14);
  return x4.start >= 0 && x4.end < t15.length && e14.push(x4), e14;
}
function z(t15, s13) {
  let i14 = 0;
  for (let h8 = 0; h8 < t15.length; h8++) {
    const {
      width: s14
    } = t15[h8];
    i14 = Math.max(s14, i14);
  }
  const e14 = "underline" === s13.decoration ? l9 : 0, o9 = t15[0].yMin;
  return {
    x: 0,
    y: o9,
    height: t15[t15.length - 1].yMax + s13.lineHeight * (t15.length - 1) + e14 - o9,
    width: i14
  };
}
function O2(t15, s13) {
  const i14 = s13.scale, e14 = new Array(), {
    glyphs: o9,
    isRightToLeft: h8
  } = t15, n17 = A5(o9, h8, s13), r18 = n17.length ? z(n17, s13) : {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  }, a12 = a11(s13.horizontalAlignment), m6 = c4(s13.verticalAlignment), g4 = m6 === n14.Baseline ? 1 : 0, l11 = g4 ? 0 : m6 - 1, u14 = (1 - g4) * -r18.y + l11 * (r18.height / 2) + (g4 ? 1 : 0) * -_4;
  for (let f9 = 0; f9 < n17.length; f9++) {
    const {
      start: t16,
      end: h9,
      width: r19
    } = n17[f9];
    let c5 = -1 * (a12 + 1) * (r19 / 2) - p5;
    const d4 = f9 * s13.lineHeight + u14 - p5;
    n17[f9].startX = c5, n17[f9].startY = d4;
    for (let s14 = t16; s14 <= h9; s14++) {
      const t17 = o9[s14];
      if (v(t17.code)) continue;
      const h10 = new M3(c5 + t17.metrics.left, d4 - t17.metrics.top, t17, i14);
      c5 += t17.metrics.advance, e14.push(h10);
    }
  }
  return new B2(e14, n17, s13);
}

// ../../../node_modules/@arcgis/core/views/2d/layers/graphics/graphicsUtils.js
var u13 = 50;
function l10(r18) {
  if (!r18) return null;
  const {
    xmin: n17,
    ymin: t15,
    xmax: i14,
    ymax: o9,
    spatialReference: s13
  } = r18;
  return new j({
    rings: [[[n17, t15], [n17, o9], [i14, o9], [i14, t15], [n17, t15]]],
    spatialReference: s13
  });
}
function p6(e14) {
  return e3(Math.round(u3(e14)));
}
function g3(n17) {
  const e14 = e3(zt), t15 = e3(Bt);
  return Math.max(e14, Math.min(n17 || t15, t15));
}

// ../../../node_modules/@arcgis/core/symbols/cim/CIMSymbolDrawHelper.js
var q2 = Math.PI / 180;
var Y2 = 0.5;
var W2 = () => n.getLogger("esri.symbols.cim.CIMSymbolDrawHelper");
var K2 = class _K {
  constructor(t15) {
    this._t = t15;
  }
  static createIdentity() {
    return new _K([1, 0, 0, 0, 1, 0]);
  }
  clone() {
    const t15 = this._t;
    return new _K(t15.slice());
  }
  transform(t15) {
    const e14 = this._t;
    return [e14[0] * t15[0] + e14[1] * t15[1] + e14[2], e14[3] * t15[0] + e14[4] * t15[1] + e14[5]];
  }
  static createScale(t15, e14) {
    return new _K([t15, 0, 0, 0, e14, 0]);
  }
  scale(t15, e14) {
    const r18 = this._t;
    return r18[0] *= t15, r18[1] *= t15, r18[2] *= t15, r18[3] *= e14, r18[4] *= e14, r18[5] *= e14, this;
  }
  scaleRatio() {
    return Math.sqrt(this._t[0] * this._t[0] + this._t[1] * this._t[1]);
  }
  static createTranslate(t15, e14) {
    return new _K([0, 0, t15, 0, 0, e14]);
  }
  translate(t15, e14) {
    const r18 = this._t;
    return r18[2] += t15, r18[5] += e14, this;
  }
  static createRotate(t15) {
    const e14 = Math.cos(t15), r18 = Math.sin(t15);
    return new _K([e14, -r18, 0, r18, e14, 0]);
  }
  rotate(t15) {
    return _K.multiply(this, _K.createRotate(t15), this);
  }
  angle() {
    const t15 = this._t[0], e14 = this._t[3], r18 = Math.sqrt(t15 * t15 + e14 * e14);
    return [t15 / r18, e14 / r18];
  }
  static multiply(t15, e14, r18) {
    const i14 = t15._t, s13 = e14._t, o9 = i14[0] * s13[0] + i14[3] * s13[1], n17 = i14[1] * s13[0] + i14[4] * s13[1], a12 = i14[2] * s13[0] + i14[5] * s13[1] + s13[2], l11 = i14[0] * s13[3] + i14[3] * s13[4], h8 = i14[1] * s13[3] + i14[4] * s13[4], c5 = i14[2] * s13[3] + i14[5] * s13[4] + s13[5], m6 = r18._t;
    return m6[0] = o9, m6[1] = n17, m6[2] = a12, m6[3] = l11, m6[4] = h8, m6[5] = c5, r18;
  }
  invert() {
    const t15 = this._t;
    let e14 = t15[0] * t15[4] - t15[1] * t15[3];
    if (0 === e14) return new _K([0, 0, 0, 0, 0, 0]);
    e14 = 1 / e14;
    const r18 = (t15[1] * t15[5] - t15[2] * t15[4]) * e14, i14 = (t15[2] * t15[3] - t15[0] * t15[5]) * e14, s13 = t15[4] * e14, o9 = -t15[1] * e14, n17 = -t15[3] * e14, a12 = t15[0] * e14;
    return new _K([s13, o9, r18, n17, a12, i14]);
  }
};
var Q = class {
  constructor(t15, e14) {
    this._resourceManager = t15, this._transfos = [], this._sizeTransfos = [], this._geomUnitsPerPoint = 1, this._placementPool = new e(t7, void 0, void 0, 100), this._earlyReturn = false, this._mapRotation = 0, this._transfos.push(e14 || K2.createIdentity()), this._sizeTransfos.push(e14 ? e14.scaleRatio() : 1);
  }
  setTransform(t15, e14) {
    this._transfos = [t15 || K2.createIdentity()], this._sizeTransfos = [e14 || (t15 ? t15.scaleRatio() : 1)];
  }
  setGeomUnitsPerPoint(t15) {
    this._geomUnitsPerPoint = t15;
  }
  transformPt(t15) {
    return this._transfos[this._transfos.length - 1].transform(t15);
  }
  transformSize(t15) {
    return t15 * this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  reverseTransformPt(t15) {
    return this._transfos[this._transfos.length - 1].invert().transform(t15);
  }
  reverseTransformSize(t15) {
    return t15 / this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  reverseTransformScalar(t15) {
    return t15 / this._transfos[this._transfos.length - 1].scaleRatio();
  }
  getTransformAngle() {
    return this._transfos[this._transfos.length - 1].angle();
  }
  geomUnitsPerPoint() {
    return this.isEmbedded() ? 1 : this._geomUnitsPerPoint;
  }
  prevGeomUnitsPerPoint() {
    return this._transfos.length > 2 ? 1 : this._geomUnitsPerPoint;
  }
  isEmbedded() {
    return this._transfos.length > 1;
  }
  back() {
    return this._transfos[this._transfos.length - 1];
  }
  push(t15, e14) {
    const r18 = e14 ? t15.scaleRatio() : 1;
    K2.multiply(t15, this.back(), t15), this._transfos.push(t15), this._sizeTransfos.push(this._sizeTransfos[this._sizeTransfos.length - 1] * r18);
  }
  pop() {
    this._transfos.splice(-1, 1), this._sizeTransfos.splice(-1, 1);
  }
  drawSymbol(t15, e14, r18) {
    if (t15) switch (t15.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        this.drawMultiLayerSymbol(t15, e14);
        break;
      case "CIMTextSymbol":
        this.drawTextSymbol(t15, e14, r18);
    }
  }
  drawMultiLayerSymbol(t15, e14) {
    if (!t15 || !e14) return;
    const r18 = t15.symbolLayers;
    if (!r18) return;
    const i14 = t15.effects;
    if (i14 && i14.length > 0) {
      const t16 = this.executeEffects(i14, e14);
      if (t16) {
        let e15 = t16.next();
        for (; e15; ) this.drawSymbolLayers(r18, e15.asJSON()), e15 = t16.next();
      }
    } else this.drawSymbolLayers(r18, e14);
  }
  executeEffects(t15, e14) {
    const r18 = this._resourceManager.geometryEngine;
    let i14 = new s4(a6.fromJSONCIM(e14));
    for (const s13 of t15) {
      const t16 = A4(s13);
      t16 && (i14 = t16.execute(i14, s13, this.geomUnitsPerPoint(), null, r18));
    }
    return i14;
  }
  drawSymbolLayers(t15, e14) {
    let r18 = t15.length;
    for (; r18--; ) {
      const i14 = t15[r18];
      if (!i14 || false === i14.enable) continue;
      const s13 = i14.effects;
      if (s13 && s13.length > 0) {
        const t16 = this.executeEffects(s13, e14);
        if (t16) {
          let e15 = null;
          for (; (e15 = t16.next()) && (this.drawSymbolLayer(i14, e15.asJSON()), !this._earlyReturn); ) ;
        }
      } else this.drawSymbolLayer(i14, e14);
      if (this._earlyReturn) return;
    }
  }
  drawSymbolLayer(t15, e14) {
    switch (t15.type) {
      case "CIMSolidFill":
        this.drawSolidFill(e14, t15.color);
        break;
      case "CIMHatchFill":
        this.drawHatchFill(e14, t15);
        break;
      case "CIMPictureFill":
        this.drawPictureFill(e14, t15);
        break;
      case "CIMGradientFill":
        this.drawGradientFill(e14, t15);
        break;
      case "CIMSolidStroke":
        this.drawSolidStroke(e14, t15.color, t15.width, t15.capStyle, t15.joinStyle, t15.miterLimit);
        break;
      case "CIMPictureStroke":
        this.drawPictureStroke(e14, t15);
        break;
      case "CIMGradientStroke":
        this.drawGradientStroke(e14, t15);
        break;
      case "CIMCharacterMarker":
      case "CIMPictureMarker":
      case "CIMVectorMarker":
        this.drawMarkerLayer(t15, e14);
    }
  }
  drawHatchFill(t15, e14) {
    const r18 = et(e14, t15, this.geomUnitsPerPoint());
    r18 && (this.pushClipPath(t15), this.drawMultiLayerSymbol(e14.lineSymbol, r18), this.popClipPath());
  }
  drawPictureFill(t15, e14) {
  }
  drawGradientFill(t15, e14) {
  }
  drawPictureStroke(t15, e14) {
  }
  drawGradientStroke(t15, e14) {
  }
  drawMarkerLayer(t15, e14) {
    const r18 = t15.markerPlacement;
    if (r18) {
      const i14 = g2(r18);
      if (i14) {
        const s13 = "CIMMarkerPlacementInsidePolygon" === r18.type || "CIMMarkerPlacementPolygonCenter" === r18.type && r18.clipAtBoundary;
        s13 && this.pushClipPath(e14);
        const o9 = i14.execute(a6.fromJSONCIM(e14), r18, this.geomUnitsPerPoint(), null, this._resourceManager.geometryEngine);
        if (o9) {
          let e15 = null;
          for (; (e15 = o9.next()) && (this.drawMarker(t15, e15), !this._earlyReturn); ) ;
        }
        s13 && this.popClipPath();
      }
    } else {
      const r19 = this._placementPool.acquire();
      if (u2(e14)) r19.tx = e14.x, r19.ty = e14.y, this.drawMarker(t15, r19);
      else if (f6(e14)) {
        const i14 = l(e14);
        i14 && ([r19.tx, r19.ty] = i14, this.drawMarker(t15, r19));
      } else for (const i14 of e14.points) if (r19.tx = i14[0], r19.ty = i14[1], this.drawMarker(t15, r19), this._earlyReturn) break;
      this._placementPool.release(r19);
    }
  }
  drawMarker(t15, e14) {
    switch (t15.type) {
      case "CIMCharacterMarker":
      case "CIMPictureMarker":
        this.drawPictureMarker(t15, e14);
        break;
      case "CIMVectorMarker":
        this.drawVectorMarker(t15, e14);
    }
  }
  drawPictureMarker(t15, e14) {
    if (!t15) return;
    const r18 = this._resourceManager.getResource(t15.url), i14 = I(t15.size, t3.CIMPictureMarker.size);
    if (null == r18 || i14 <= 0) return;
    const s13 = r18.width, o9 = r18.height;
    if (!s13 || !o9) return;
    const n17 = s13 / o9, a12 = I(t15.scaleX, 1), l11 = K2.createIdentity(), h8 = t15.anchorPoint;
    if (h8) {
      let e15 = h8.x, r19 = h8.y;
      "Absolute" !== t15.anchorPointUnits && (e15 *= i14 * n17 * a12, r19 *= i14), l11.translate(-e15, -r19);
    }
    let c5 = I(t15.rotation);
    t15.rotateClockwise && (c5 = -c5), this._mapRotation && (c5 += this._mapRotation), c5 && l11.rotate(c5 * q2);
    let m6 = I(t15.offsetX), f9 = I(t15.offsetY);
    if (m6 || f9) {
      if (this._mapRotation) {
        const t16 = q2 * this._mapRotation, e15 = Math.cos(t16), r19 = Math.sin(t16), i15 = m6 * r19 + f9 * e15;
        m6 = m6 * e15 - f9 * r19, f9 = i15;
      }
      l11.translate(m6, f9);
    }
    const u14 = this.geomUnitsPerPoint();
    1 !== u14 && l11.scale(u14, u14);
    const d4 = e14.getAngle();
    d4 && l11.rotate(d4), l11.translate(e14.tx, e14.ty), this.push(l11, false), this.drawImage(t15, i14), this.pop();
  }
  drawVectorMarker(t15, e14) {
    if (!t15) return;
    const r18 = t15.markerGraphics;
    if (!r18) return;
    const i14 = I(t15.size, t3.CIMVectorMarker.size), s13 = t15.frame, o9 = s13 ? s13.ymax - s13.ymin : 0, n17 = i14 && o9 ? i14 / o9 : 1, a12 = K2.createIdentity();
    s13 && a12.translate(0.5 * -(s13.xmax + s13.xmin), 0.5 * -(s13.ymax + s13.ymin));
    const l11 = t15.anchorPoint;
    if (l11) {
      let e15 = l11.x, r19 = l11.y;
      "Absolute" !== t15.anchorPointUnits ? s13 && (e15 *= s13.xmax - s13.xmin, r19 *= s13.ymax - s13.ymin) : (e15 /= n17, r19 /= n17), a12.translate(-e15, -r19);
    }
    1 !== n17 && a12.scale(n17, n17);
    let h8 = I(t15.rotation);
    t15.rotateClockwise && (h8 = -h8), this._mapRotation && (h8 += this._mapRotation), h8 && a12.rotate(h8 * q2);
    let c5 = I(t15.offsetX), m6 = I(t15.offsetY);
    if (c5 || m6) {
      if (this._mapRotation) {
        const t16 = q2 * this._mapRotation, e15 = Math.cos(t16), r19 = Math.sin(t16), i15 = c5 * r19 + m6 * e15;
        c5 = c5 * e15 - m6 * r19, m6 = i15;
      }
      a12.translate(c5, m6);
    }
    const f9 = this.geomUnitsPerPoint();
    1 !== f9 && a12.scale(f9, f9);
    const u14 = e14.getAngle();
    u14 && a12.rotate(u14), a12.translate(e14.tx, e14.ty), this.push(a12, t15.scaleSymbolsProportionally);
    for (const d4 of r18) {
      d4?.symbol && d4.geometry || W2().error("Invalid marker graphic", d4);
      let t16 = d4.textString;
      if ("number" == typeof t16 && (t16 = t16.toString()), this.drawSymbol(d4.symbol, d4.geometry, t16), this._earlyReturn) break;
    }
    this.pop();
  }
  drawTextSymbol(t15, e14, r18) {
    if (!t15) return;
    if (!u2(e14)) return;
    if (I(t15.height, t3.CIMTextSymbol.height) <= 0) return;
    const i14 = K2.createIdentity();
    let s13 = I(t15.angle);
    s13 = -s13, s13 && i14.rotate(s13 * q2);
    const o9 = I(t15.offsetX), n17 = I(t15.offsetY);
    (o9 || n17) && i14.translate(o9, n17);
    const a12 = this.geomUnitsPerPoint();
    1 !== a12 && i14.scale(a12, a12), i14.translate(e14.x, e14.y), this.push(i14, false), this.drawText(t15, r18), this.pop();
  }
};
var Z2 = class extends Q {
  constructor(t15, e14) {
    super(t15, e14), this.reset();
  }
  reset() {
    this._xmin = this._ymin = 1 / 0, this._xmax = this._ymax = -1 / 0, this._clipCount = 0;
  }
  envelope() {
    return new t14(this._xmin, this._ymin, this._xmax - this._xmin, this._ymax - this._ymin);
  }
  bounds() {
    return a2(this._xmin, this._ymin, this._xmax, this._ymax);
  }
  drawSolidFill(t15) {
    if (t15 && !(this._clipCount > 0)) if (f6(t15)) this._processPath(t15.rings, 0);
    else if (s(t15)) this._processPath(t15.paths, 0);
    else if (m(t15)) {
      const e14 = ot(t15);
      e14 && this._processPath(e14.rings, 0);
    } else console.error("drawSolidFill Unexpected geometry type!");
  }
  drawSolidStroke(t15, e14, r18) {
    if (!t15 || this._clipCount > 0 || null == r18 || r18 <= 0) return;
    const i14 = Math.max(0.5 * this.transformSize(I(r18, t3.CIMSolidStroke.width)), 0.5 * Y2);
    if (f6(t15)) this._processPath(t15.rings, i14);
    else if (s(t15)) this._processPath(t15.paths, i14);
    else if (m(t15)) {
      const e15 = ot(t15);
      e15 && this._processPath(e15.rings, i14);
    } else console.error("drawSolidStroke unexpected geometry type!");
  }
  drawMarkerLayer(t15, e14) {
    f6(e14) && t15.markerPlacement && ("CIMMarkerPlacementInsidePolygon" === t15.markerPlacement.type || "CIMMarkerPlacementPolygonCenter" === t15.markerPlacement.type && t15.markerPlacement.clipAtBoundary) ? this._processPath(e14.rings, 0) : super.drawMarkerLayer(t15, e14);
  }
  drawHatchFill(t15, e14) {
    this.drawSolidFill(t15);
  }
  drawPictureFill(t15, e14) {
    this.drawSolidFill(t15);
  }
  drawGradientFill(t15, e14) {
    this.drawSolidFill(t15);
  }
  drawPictureStroke(t15, e14) {
    this.drawSolidStroke(t15, null, e14.width);
  }
  drawGradientStroke(t15, e14) {
    this.drawSolidStroke(t15, null, e14.width);
  }
  pushClipPath(t15) {
    this.drawSolidFill(t15), this._clipCount++;
  }
  popClipPath() {
    this._clipCount--;
  }
  drawImage(t15, e14) {
    const {
      url: r18
    } = t15, i14 = I(t15.scaleX, 1);
    let s13 = i14 * e14, o9 = e14;
    const n17 = this._resourceManager.getResource(r18);
    if (null != n17) {
      const t16 = n17.height / n17.width;
      s13 = i14 * (e14 ? t16 > 1 ? e14 : e14 / t16 : n17.width), o9 = e14 ? t16 > 1 ? e14 * t16 : e14 : n17.height;
    }
    this._merge(this.transformPt([-s13 / 2, -o9 / 2]), 0), this._merge(this.transformPt([-s13 / 2, o9 / 2]), 0), this._merge(this.transformPt([s13 / 2, -o9 / 2]), 0), this._merge(this.transformPt([s13 / 2, o9 / 2]), 0);
  }
  drawText(t15, e14) {
    if (!e14 || 0 === e14.length) return;
    this._textRasterizer || (this._textRasterizer = new n15());
    const r18 = at(t15);
    let [i14, o9] = this._textRasterizer.computeTextSize(e14, r18);
    i14 = e3(i14), o9 = e3(o9);
    let n17 = 0;
    switch (t15.horizontalAlignment) {
      case "Left":
        n17 = i14 / 2;
        break;
      case "Right":
        n17 = -i14 / 2;
    }
    let a12 = 0;
    switch (t15.verticalAlignment) {
      case "Bottom":
        a12 = o9 / 2;
        break;
      case "Top":
        a12 = -o9 / 2;
        break;
      case "Baseline":
        a12 = o9 / 6;
    }
    this._merge(this.transformPt([-i14 / 2 + n17, -o9 / 2 + a12]), 0), this._merge(this.transformPt([-i14 / 2 + n17, o9 / 2 + a12]), 0), this._merge(this.transformPt([i14 / 2 + n17, -o9 / 2 + a12]), 0), this._merge(this.transformPt([i14 / 2 + n17, o9 / 2 + a12]), 0);
  }
  _processPath(t15, e14) {
    if (t15) for (const r18 of t15) {
      const t16 = r18 ? r18.length : 0;
      if (t16 > 1) {
        this._merge(this.transformPt(r18[0]), e14);
        for (let i14 = 1; i14 < t16; i14++) this._merge(this.transformPt(r18[i14]), e14);
      }
    }
  }
  _merge(t15, e14) {
    t15[0] - e14 < this._xmin && (this._xmin = t15[0] - e14), t15[0] + e14 > this._xmax && (this._xmax = t15[0] + e14), t15[1] - e14 < this._ymin && (this._ymin = t15[1] - e14), t15[1] + e14 > this._ymax && (this._ymax = t15[1] + e14);
  }
};
var $ = class extends Q {
  constructor() {
    super(...arguments), this._searchPoint = [0, 0], this._searchDistPoint = 0, this._textInfo = null;
  }
  hitTest(t15, e14, r18, i14, n17, a12) {
    const l11 = a12 * u3(1);
    this.setTransform(), this.setGeomUnitsPerPoint(l11), this._searchPoint = [(t15[0] + t15[2]) / 2, (t15[1] + t15[3]) / 2], this._searchDistPoint = (t15[2] - t15[0]) / 2 / l11, this._textInfo = i14;
    const h8 = e14 && ("CIMPointSymbol" === e14.type && "Map" !== e14.angleAlignment || "CIMTextSymbol" === e14.type);
    if (this._mapRotation = h8 ? n17 : 0, !has("esri-mobile")) {
      const t16 = e3(W * window.devicePixelRatio), r19 = e3(X);
      !(("CIMLineSymbol" === e14?.type || "CIMPolygonSymbol" === e14?.type) && e14.symbolLayers?.some(C)) && "CIMMeshSymbol" !== e14?.type && (q(e14) ?? 0) < r19 && (this._searchDistPoint = t16);
    }
    return this._earlyReturn = false, this.drawSymbol(e14, r18), this._earlyReturn;
  }
  drawSolidFill(t15, e14) {
    this._hitTestFill(t15);
  }
  drawHatchFill(t15, e14) {
    this._hitTestFill(t15);
  }
  drawPictureFill(t15, e14) {
    this._hitTestFill(t15);
  }
  drawGradientFill(t15, e14) {
    this._hitTestFill(t15);
  }
  drawSolidStroke(t15, e14, r18, i14, s13, o9) {
    this._hitTestStroke(t15, r18);
  }
  drawPictureStroke(t15, e14) {
    this._hitTestStroke(t15, e14.width);
  }
  drawGradientStroke(t15, e14) {
    this._hitTestStroke(t15, e14.width);
  }
  drawMarkerLayer(t15, e14) {
    t15.markerPlacement && ("CIMMarkerPlacementInsidePolygon" === t15.markerPlacement.type || "CIMMarkerPlacementPolygonCenter" === t15.markerPlacement.type && t15.markerPlacement.clipAtBoundary) ? this._hitTestFill(e14) : super.drawMarkerLayer(t15, e14);
  }
  pushClipPath(t15) {
  }
  popClipPath() {
  }
  drawImage(t15, e14) {
    const {
      url: r18
    } = t15, i14 = I(t15.scaleX, 1), s13 = this._resourceManager.getResource(r18);
    if (null == s13 || 0 === s13.height || 0 === e14) return;
    const o9 = e14 * this.geomUnitsPerPoint(), n17 = o9 * i14 * (s13.width / s13.height), a12 = this.reverseTransformPt(this._searchPoint), l11 = this._searchDistPoint;
    Math.abs(a12[0]) < n17 / 2 + l11 && Math.abs(a12[1]) < o9 / 2 + l11 && (this._earlyReturn = true);
  }
  drawText(t15, e14) {
    const r18 = this._textInfo;
    if (!r18) return;
    const i14 = r18.get(t15);
    if (!i14) return;
    if (!i14.glyphMosaicItems.glyphs.length) return;
    const s13 = p6(I(t15.height, t3.CIMTextSymbol.height)), {
      lineGapType: o9,
      lineGap: n17
    } = t15, a12 = o9 ? nt(o9, I(n17), s13) : 0, l11 = "CIMBackgroundCallout" === t15.callout?.type, h8 = O2(i14.glyphMosaicItems, {
      scale: s13 / A2,
      angle: 0,
      xOffset: 0,
      yOffset: 0,
      horizontalAlignment: t15.horizontalAlignment,
      verticalAlignment: t15.verticalAlignment,
      maxLineWidth: g3(t15.lineWidth),
      lineHeight: V * Math.max(0.25, Math.min(a12 || 1, 4)),
      decoration: t15.font.decoration || "none",
      useCIMAngleBehavior: true,
      hasBackground: l11
    }), c5 = this.reverseTransformPt(this._searchPoint), m6 = c5[0], f9 = c5[1];
    for (const u14 of h8.glyphs) if (m6 > u14.xTopLeft && m6 < u14.xBottomRight && f9 > -u14.yBottomRight && f9 < -u14.yTopLeft) {
      this._earlyReturn = true;
      break;
    }
  }
  _hitTestFill(t15) {
    let e14 = null;
    if (m(t15)) {
      const r19 = t15;
      e14 = [[[r19.xmin, r19.ymin], [r19.xmin, r19.ymax], [r19.xmax, r19.ymax], [r19.xmax, r19.ymin], [r19.xmin, r19.ymin]]];
    } else if (f6(t15)) e14 = t15.rings;
    else {
      if (!s(t15)) return;
      e14 = t15.paths;
    }
    const r18 = this.reverseTransformPt(this._searchPoint);
    if (rt(r18, e14) && (this._earlyReturn = true), !this._earlyReturn) {
      it(r18, e14, this.reverseTransformScalar(this._searchDistPoint) * this.prevGeomUnitsPerPoint()) && (this._earlyReturn = true);
    }
  }
  _hitTestStroke(t15, e14) {
    let r18 = null;
    if (m(t15)) {
      const e15 = t15;
      r18 = [[[e15.xmin, e15.ymin], [e15.xmin, e15.ymax], [e15.xmax, e15.ymax], [e15.xmax, e15.ymin], [e15.xmin, e15.ymin]]];
    } else if (f6(t15)) r18 = t15.rings;
    else {
      if (!s(t15)) return;
      r18 = t15.paths;
    }
    it(this.reverseTransformPt(this._searchPoint), r18, I(e14, t3.CIMSolidStroke.width) * this.geomUnitsPerPoint() / 2 + this.reverseTransformScalar(this._searchDistPoint) * this.prevGeomUnitsPerPoint()) && (this._earlyReturn = true);
  }
};
var tt = class extends Q {
  constructor(t15, e14, r18, i14) {
    super(e14, r18), this._applyAdditionalRenderProps = i14, this._colorSubstitutionHelper = new t12(), this._ctx = t15;
  }
  drawSolidFill(t15, e14) {
    if (!t15) return;
    if (f6(t15)) this._buildPath(t15.rings, true);
    else if (s(t15)) this._buildPath(t15.paths, true);
    else if (m(t15)) this._buildPath(ot(t15).rings, true);
    else {
      if (!l2(t15)) return;
      console.log("CanvasDrawHelper.drawSolidFill - No implementation!");
    }
    const r18 = this._ctx;
    r18.fillStyle = "string" == typeof e14 ? e14 : "rgba(" + Math.round(e14[0]) + "," + Math.round(e14[1]) + "," + Math.round(e14[2]) + "," + (e14[3] ?? 255) / 255 + ")", r18.fill("evenodd");
  }
  drawSolidStroke(t15, e14, r18, i14, s13, o9) {
    if (!t15 || !e14 || 0 === r18) return;
    if (f6(t15)) this._buildPath(t15.rings, true);
    else if (s(t15)) this._buildPath(t15.paths, false);
    else {
      if (!m(t15)) return void console.log("CanvasDrawHelper.drawSolidStroke isn't implemented!");
      this._buildPath(ot(t15).rings, true);
    }
    const n17 = this._ctx;
    n17.strokeStyle = "string" == typeof e14 ? e14 : "rgba(" + Math.round(e14[0]) + "," + Math.round(e14[1]) + "," + Math.round(e14[2]) + "," + (e14[3] ?? 255) / 255 + ")", n17.lineWidth = Math.max(this.transformSize(r18), Y2), this._setCapStyle(i14), this._setJoinStyle(s13), n17.miterLimit = o9, n17.stroke();
  }
  pushClipPath(t15) {
    if (this._ctx.save(), f6(t15)) this._buildPath(t15.rings, true);
    else if (s(t15)) this._buildPath(t15.paths, true);
    else {
      if (!m(t15)) return;
      this._buildPath(ot(t15).rings, true);
    }
    this._ctx.clip("evenodd");
  }
  popClipPath() {
    this._ctx.restore();
  }
  drawImage(t15, e14) {
    const {
      colorSubstitutions: r18,
      url: i14,
      tintColor: s13
    } = t15, o9 = I(t15.scaleX, 1), n17 = this._resourceManager.getResource(i14);
    if (null == n17) return;
    let a12 = e14 * (n17.width / n17.height), l11 = e14;
    e14 || (a12 = n17.width, l11 = n17.height);
    const h8 = G2(i14) || "src" in n17 && G2(n17.src);
    let c5 = "getFrame" in n17 ? t13(n17) : n17;
    r18 && (c5 = this._colorSubstitutionHelper.applyColorSubstituition(c5, r18)), this._applyAdditionalRenderProps && !h8 && s13 && (c5 = this._colorSubstitutionHelper.tintImageData(c5, s13));
    const m6 = this.transformPt([0, 0]), [f9, u14] = this.getTransformAngle(), d4 = this.transformSize(1), p7 = this._ctx;
    p7.save(), p7.setTransform({
      m11: o9 * d4 * f9,
      m12: o9 * d4 * u14,
      m21: -d4 * u14,
      m22: d4 * f9,
      m41: m6[0],
      m42: m6[1]
    }), p7.drawImage(c5, -a12 / 2, -l11 / 2, a12, l11), p7.restore();
  }
  drawText(t15, e14) {
    if (!e14 || 0 === e14.length) return;
    this._textRasterizer || (this._textRasterizer = new n15());
    const r18 = at(t15);
    r18.size *= this.transformSize(e3(1));
    const i14 = this._textRasterizer.rasterizeText(e14, r18);
    if (!i14) return;
    const {
      size: o9,
      anchorX: n17,
      anchorY: a12,
      canvas: l11
    } = i14, h8 = o9[0] * (n17 + 0.5), c5 = o9[1] * (a12 - 0.5), m6 = this._ctx, f9 = this.transformPt([0, 0]), [u14, d4] = this.getTransformAngle(), p7 = 1;
    m6.save(), m6.setTransform({
      m11: p7 * u14,
      m12: p7 * d4,
      m21: -p7 * d4,
      m22: p7 * u14,
      m41: f9[0] - p7 * h8,
      m42: f9[1] + p7 * c5
    }), m6.drawImage(l11, 0, 0), m6.restore();
  }
  drawPictureFill(t15, e14) {
    if (!t15) return;
    let {
      colorSubstitutions: r18,
      height: i14,
      offsetX: s13,
      offsetY: o9,
      rotation: n17,
      scaleX: a12,
      tintColor: l11,
      url: h8
    } = e14;
    const c5 = this._resourceManager.getResource(h8);
    if (null == c5) return;
    if (f6(t15)) this._buildPath(t15.rings, true);
    else if (s(t15)) this._buildPath(t15.paths, true);
    else if (m(t15)) this._buildPath(ot(t15).rings, true);
    else {
      if (!l2(t15)) return;
      console.log("CanvasDrawHelper.drawPictureFill - No implementation!");
    }
    const m6 = this._ctx, _6 = G2(h8) || "src" in c5 && G2(c5.src);
    let g4, y5 = "getFrame" in c5 ? t13(c5) : c5;
    if (r18 && (y5 = this._colorSubstitutionHelper.applyColorSubstituition(y5, r18)), this._applyAdditionalRenderProps) {
      _6 || l11 && (y5 = this._colorSubstitutionHelper.tintImageData(y5, l11)), g4 = m6.createPattern(y5, "repeat");
      const t16 = this.transformSize(1);
      n17 || (n17 = 0), s13 ? s13 *= t16 : s13 = 0, o9 ? o9 *= t16 : o9 = 0, i14 && (i14 *= t16);
      const e15 = i14 ? i14 / c5.height : 1, r19 = a12 && i14 ? a12 * i14 / c5.width : 1;
      if (0 !== n17 || 1 !== e15 || 1 !== r19 || 0 !== s13 || 0 !== o9) {
        const t17 = new DOMMatrix();
        t17.rotateSelf(0, 0, -n17).translateSelf(s13, o9).scaleSelf(r19, e15, 1), g4.setTransform(t17);
      }
    } else g4 = m6.createPattern(y5, "repeat");
    m6.save(), m6.fillStyle = g4, m6.fill("evenodd"), m6.restore();
  }
  drawPictureStroke(t15, r18) {
    if (!t15) return;
    let {
      colorSubstitutions: i14,
      capStyle: s13,
      joinStyle: n17,
      miterLimit: a12,
      tintColor: l11,
      url: h8,
      width: c5
    } = r18;
    const m6 = this._resourceManager.getResource(h8);
    if (null == m6) return;
    let _6;
    if (f6(t15)) _6 = t15.rings;
    else if (s(t15)) _6 = t15.paths;
    else {
      if (!m(t15)) return l2(t15) ? void console.log("CanvasDrawHelper.drawPictureStroke - No implementation!") : void 0;
      _6 = ot(t15).rings;
    }
    c5 || (c5 = m6.width);
    const g4 = G2(h8) || "src" in m6 && G2(m6.src);
    let y5 = "getFrame" in m6 ? t13(m6) : m6;
    i14 && (y5 = this._colorSubstitutionHelper.applyColorSubstituition(y5, i14)), this._applyAdditionalRenderProps && (g4 || l11 && (y5 = this._colorSubstitutionHelper.tintImageData(y5, l11)));
    const P5 = Math.max(this.transformSize(u3(c5)), 0.5), w5 = P5 / y5.width, x4 = this._ctx, S3 = x4.createPattern(y5, "repeat-y");
    let M4, k3;
    x4.save(), this._setCapStyle(s13), this._setJoinStyle(n17), void 0 !== a12 && (x4.miterLimit = a12), x4.lineWidth = P5;
    for (let o9 of _6) if (o9 = a(o9), ht(o9), o9 && !(o9.length <= 1)) {
      M4 = this.transformPt(o9[0]);
      for (let t16 = 1; t16 < o9.length; t16++) {
        k3 = this.transformPt(o9[t16]);
        const e14 = st2(M4, k3), r19 = new DOMMatrix();
        r19.translateSelf(0, M4[1] - P5 / 2).scaleSelf(w5, w5, 1).rotateSelf(0, 0, 90 - e14), S3.setTransform(r19), x4.strokeStyle = S3, x4.beginPath(), x4.moveTo(M4[0], M4[1]), x4.lineTo(k3[0], k3[1]), x4.stroke(), M4 = k3;
      }
    }
    x4.restore();
  }
  _buildPath(t15, e14) {
    const r18 = this._ctx;
    if (r18.beginPath(), t15) for (const i14 of t15) {
      const t16 = i14 ? i14.length : 0;
      if (t16 > 1) {
        let s13 = this.transformPt(i14[0]);
        r18.moveTo(s13[0], s13[1]);
        for (let e15 = 1; e15 < t16; e15++) s13 = this.transformPt(i14[e15]), r18.lineTo(s13[0], s13[1]);
        e14 && r18.closePath();
      }
    }
  }
  _setCapStyle(t15) {
    switch (t15) {
      case U.Butt:
        this._ctx.lineCap = "butt";
        break;
      case U.Round:
        this._ctx.lineCap = "round";
        break;
      case U.Square:
        this._ctx.lineCap = "square";
    }
  }
  _setJoinStyle(t15) {
    switch (t15) {
      case w2.Bevel:
        this._ctx.lineJoin = "bevel";
        break;
      case w2.Round:
        this._ctx.lineJoin = "round";
        break;
      case w2.Miter:
        this._ctx.lineJoin = "miter";
    }
  }
};
function et(t15, e14, r18) {
  let i14 = I(t15.separation, t3.CIMHatchFill.separation) * r18, s13 = I(t15.rotation);
  if (0 === i14) return null;
  i14 < 0 && (i14 = -i14);
  let o9 = 0;
  const n17 = 0.5 * i14;
  for (; o9 > n17; ) o9 -= i14;
  for (; o9 < -n17; ) o9 += i14;
  const a12 = u();
  a3(a12, e14), a12[0] -= n17, a12[1] -= n17, a12[2] += n17, a12[3] += n17;
  const c5 = [[a12[0], a12[1]], [a12[0], a12[3]], [a12[2], a12[3]], [a12[2], a12[1]]];
  for (; s13 > 180; ) s13 -= 180;
  for (; s13 < 0; ) s13 += 180;
  const m6 = Math.cos(s13 * q2), f9 = Math.sin(s13 * q2), u14 = -i14 * f9, d4 = i14 * m6;
  let p7, _6, g4, y5;
  o9 = I(t15.offsetX) * r18 * f9 - I(t15.offsetY) * r18 * m6, p7 = g4 = Number.MAX_VALUE, _6 = y5 = -Number.MAX_VALUE;
  for (const l11 of c5) {
    const t16 = l11[0], e15 = l11[1], r19 = m6 * t16 + f9 * e15, i15 = -f9 * t16 + m6 * e15;
    p7 = Math.min(p7, r19), g4 = Math.min(g4, i15), _6 = Math.max(_6, r19), y5 = Math.max(y5, i15);
  }
  g4 = Math.floor(g4 / i14) * i14;
  let P5 = m6 * p7 - f9 * g4 - u14 * o9 / i14, w5 = f9 * p7 + m6 * g4 - d4 * o9 / i14, S3 = m6 * _6 - f9 * g4 - u14 * o9 / i14, M4 = f9 * _6 + m6 * g4 - d4 * o9 / i14;
  const b3 = 1 + Math.round((y5 - g4) / i14), k3 = [];
  for (let l11 = 0; l11 < b3; l11++) P5 += u14, w5 += d4, S3 += u14, M4 += d4, k3.push([[P5, w5], [S3, M4]]);
  return {
    paths: k3
  };
}
function rt(t15, e14) {
  let r18 = 0;
  for (const i14 of e14) {
    const e15 = i14.length;
    for (let s13 = 1; s13 < e15; s13++) {
      const e16 = i14[s13 - 1], o9 = i14[s13];
      if (e16[1] > t15[1] == o9[1] > t15[1]) continue;
      (o9[0] - e16[0]) * (t15[1] - e16[1]) - (o9[1] - e16[1]) * (t15[0] - e16[0]) > 0 ? r18++ : r18--;
    }
  }
  return 0 !== r18;
}
function it(t15, e14, r18) {
  for (const i14 of e14) {
    const e15 = i14.length;
    for (let s13 = 1; s13 < e15; s13++) {
      const e16 = i14[s13 - 1], o9 = i14[s13];
      let n17 = (o9[0] - e16[0]) * (o9[0] - e16[0]) + (o9[1] - e16[1]) * (o9[1] - e16[1]);
      if (0 === n17) continue;
      n17 = Math.sqrt(n17);
      const a12 = ((o9[0] - e16[0]) * (t15[1] - e16[1]) - (o9[1] - e16[1]) * (t15[0] - e16[0])) / n17;
      if (Math.abs(a12) < r18) {
        const i15 = ((o9[0] - e16[0]) * (t15[0] - e16[0]) + (o9[1] - e16[1]) * (t15[1] - e16[1])) / n17;
        if (i15 > -r18 && i15 < n17 + r18) return true;
      }
    }
  }
  return false;
}
function st2(t15, e14) {
  const r18 = e14[0] - t15[0], i14 = e14[1] - t15[1];
  return 180 / Math.PI * Math.atan2(i14, r18);
}
var ot = (t15) => t15 ? {
  spatialReference: t15.spatialReference,
  rings: [[[t15.xmin, t15.ymin], [t15.xmin, t15.ymax], [t15.xmax, t15.ymax], [t15.xmax, t15.ymin], [t15.xmin, t15.ymin]]]
} : null;
var nt = (t15, e14, r18) => {
  switch (t15) {
    case "ExtraLeading":
      return 1 + e14 / r18;
    case "Multiple":
      return e14;
    case "Exact":
      return e14 / r18;
  }
};
function at(e14, r18 = 1) {
  const i14 = w(e14), s13 = P(e14.fontStyleName), o9 = e14.fontFamilyName ?? t4, {
    weight: n17,
    style: a12
  } = s13, l11 = r18 * (e14.height || 5), h8 = x(e14.horizontalAlignment), c5 = A(e14.verticalAlignment), m6 = L(e14), f9 = L(e14.haloSymbol), u14 = null != f9 ? r18 * (e14.haloSize ?? 0) : 0, d4 = "CIMBackgroundCallout" === e14.callout?.type ? e14.callout.backgroundSymbol : null, p7 = L(d4), _6 = T(d4), g4 = N(d4);
  return {
    color: m6,
    size: l11,
    horizontalAlignment: h8,
    verticalAlignment: c5,
    font: {
      family: o9,
      style: S(a12),
      weight: g(n17),
      decoration: i14
    },
    halo: {
      size: u14 || 0,
      color: f9,
      style: a12
    },
    backgroundColor: p7,
    borderLine: null != _6 && null != g4 ? {
      size: _6,
      color: g4
    } : null,
    pixelRatio: 1,
    premultiplyColors: true
  };
}
var lt = 1e-4;
function ht(t15) {
  let e14, r18, i14, s13, o9, n17 = t15[0], a12 = 1;
  for (; a12 < t15.length; ) e14 = t15[a12][0] - n17[0], r18 = t15[a12][1] - n17[1], s13 = 0 !== e14 ? r18 / e14 : Math.PI / 2, void 0 !== i14 && s13 - i14 <= lt ? (t15.splice(a12 - 1, 1), n17 = o9) : (o9 = n17, n17 = t15[a12], a12++), i14 = s13;
}

// ../../../node_modules/@arcgis/core/core/BidiText.js
var n16 = new C3();
function i13(r18) {
  if (null == r18) return ["", false];
  if (!n16.hasBidiChar(r18)) return [r18, false];
  let i14;
  return i14 = "rtl" === n16.checkContextual(r18) ? "IDNNN" : "ICNNN", [n16.bidiTransform(r18, i14, "VLYSN"), true];
}

// ../../../node_modules/@arcgis/core/symbols/cim/CIMSymbolHelper.js
var N3 = Math.PI;
var Y3 = N3 / 2;
var _5 = Math.PI / 180;
var U2 = 96 / 72;
var q3 = 1.4142135623730951;
var H = 4;
var O3 = () => n.getLogger("esri.symbols.cim.CIMSymbolHelper");
function W3(e14) {
  let t15;
  switch (e14.type) {
    case "cim":
      return e14.data;
    case "web-style":
      return e14;
    case "simple-marker": {
      const r18 = ee.fromSimpleMarker(e14);
      if (!r18) throw new Error("InternalError: Cannot convert symbol to CIM");
      t15 = r18;
      break;
    }
    case "picture-marker":
      t15 = ee.fromPictureMarker(e14);
      break;
    case "simple-line":
      t15 = ee.fromSimpleLineSymbol(e14);
      break;
    case "simple-fill":
      t15 = ee.fromSimpleFillSymbol(e14);
      break;
    case "picture-fill":
      t15 = ee.fromPictureFillSymbol(e14);
      break;
    case "text":
      t15 = ee.fromTextSymbol(e14);
  }
  return {
    type: "CIMSymbolReference",
    symbol: t15
  };
}
function $2(e14, t15, r18) {
  switch (t15.type) {
    case "CIMSymbolReference":
      return $2(e14, t15.symbol, r18);
    case "CIMPointSymbol":
      null == r18 && (r18 = {
        x: 0,
        y: 0
      }), e14.drawSymbol(t15, r18);
      break;
    case "CIMLineSymbol":
      null == r18 && (r18 = {
        paths: [[[0, 0], [10, 0]]]
      }), e14.drawSymbol(t15, r18);
      break;
    case "CIMPolygonSymbol":
      null == r18 && (r18 = {
        rings: [[[0, 0], [0, 10], [10, 10], [10, 0], [0, 0]]]
      }), e14.drawSymbol(t15, r18);
      break;
    case "CIMTextSymbol": {
      const r19 = {
        x: 0,
        y: 0
      };
      e14.drawSymbol(t15, r19);
      break;
    }
    case "CIMVectorMarker": {
      const r19 = new t7();
      e14.drawMarker(t15, r19);
      break;
    }
  }
  return e14.envelope();
}
function J(e14) {
  if (!e14) return 0;
  switch (e14.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
    case "CIMMarkerPlacementAlongLineRandomSize":
    case "CIMMarkerPlacementAtExtremities":
    case "CIMMarkerPlacementAtMeasuredUnits":
    case "CIMMarkerPlacementAtRatioPositions":
    case "CIMMarkerPlacementOnLine":
    case "CIMMarkerPlacementOnVertices":
      return Math.abs(e14.offset);
    default:
      return 0;
  }
}
function K3(e14) {
  if (!e14) return 0;
  switch (e14.type) {
    case "CIMGeometricEffectArrow":
      return Math.abs(0.5 * e14.width);
    case "CIMGeometricEffectBuffer":
      return Math.abs(e14.size);
    case "CIMGeometricEffectControlMeasureLine":
      return 500;
    case "CIMGeometricEffectExtension":
    case "CIMGeometricEffectRadial":
      return Math.abs(e14.length);
    case "CIMGeometricEffectJog":
      return Math.abs(0.5 * e14.length);
    case "CIMGeometricEffectMove":
      return Math.max(Math.abs(I(e14.offsetX)), Math.abs(I(e14.offsetY)));
    case "CIMGeometricEffectOffset":
    case "CIMGeometricEffectOffsetTangent":
      return Math.abs(e14.offset);
    case "CIMGeometricEffectRegularPolygon":
      return Math.abs(e14.radius);
    case "CIMGeometricEffectRotate":
    case "CIMGeometricEffectScale":
    default:
      return 0;
    case "CIMGeometricEffectTaperedPolygon":
      return 0.5 * Math.max(Math.abs(e14.fromWidth), Math.abs(e14.toWidth));
    case "CIMGeometricEffectWave":
      return Math.abs(e14.amplitude);
    case "CIMGeometricEffectDonut":
      return Math.abs(e14.width);
  }
}
function Q2(e14) {
  if (!e14) return 0;
  let t15 = 0;
  for (const r18 of e14) t15 += K3(r18);
  return t15;
}
var Z3 = class {
  static getSymbolInflateSize(e14, t15, r18, o9, a12) {
    return e14 || (e14 = [0, 0, 0, 0]), t15 ? this._getInflateSize(e14, t15, r18, o9, a12) : e14;
  }
  static safeSize(e14) {
    const t15 = Math.max(Math.abs(e14[0]), Math.abs(e14[2])), r18 = Math.max(Math.abs(e14[1]), Math.abs(e14[3]));
    return Math.sqrt(t15 * t15 + r18 * r18);
  }
  static _vectorMarkerBounds(e14, t15, r18, o9) {
    let a12 = true;
    const i14 = u();
    if (t15?.markerGraphics) for (const s13 of t15.markerGraphics) {
      const t16 = [0, 0, 0, 0];
      s13.geometry && (a3(i14, s13.geometry), t16[0] = 0, t16[1] = 0, t16[2] = 0, t16[3] = 0, this.getSymbolInflateSize(t16, s13.symbol, r18, 0, o9), i14[0] += t16[0], i14[1] += t16[1], i14[2] += t16[2], i14[3] += t16[3], a12 ? (e14[0] = i14[0], e14[1] = i14[1], e14[2] = i14[2], e14[3] = i14[3], a12 = false) : (e14[0] = Math.min(e14[0], i14[0]), e14[1] = Math.min(e14[1], i14[1]), e14[2] = Math.max(e14[2], i14[2]), e14[3] = Math.max(e14[3], i14[3])));
    }
    return e14;
  }
  static _getInflateSize(e14, t15, r18, o9, a12) {
    if (fe(t15)) {
      const s13 = this._getLayersInflateSize(e14, t15.symbolLayers, r18, o9, a12), i14 = Q2(t15.effects);
      return i14 > 0 && (s13[0] -= i14, s13[1] -= i14, s13[2] += i14, s13[3] += i14), s13;
    }
    return this._getTextInflatedSize(e14, t15, a12);
  }
  static _getLayersInflateSize(e14, t15, r18, o9, a12) {
    let n17 = true;
    if (!t15) return e14;
    for (const l11 of t15) {
      if (!l11) continue;
      let t16 = [0, 0, 0, 0];
      switch (l11.type) {
        case "CIMSolidFill":
        case "CIMPictureFill":
        case "CIMHatchFill":
        case "CIMGradientFill":
          break;
        case "CIMSolidStroke":
        case "CIMPictureStroke":
        case "CIMGradientStroke": {
          const e15 = l11;
          let r19 = e15.width;
          null != r19 && (e15.capStyle === U.Square || e15.joinStyle === w2.Miter ? r19 /= q3 : r19 /= 2, t16[0] = -r19, t16[1] = -r19, t16[2] = r19, t16[3] = r19);
          break;
        }
        case "CIMCharacterMarker":
        case "CIMVectorMarker":
        case "CIMPictureMarker": {
          const e15 = l11;
          if ("CIMVectorMarker" === l11.type) {
            const e16 = l11;
            if (t16 = this._vectorMarkerBounds(t16, e16, r18, a12), e16.frame) {
              const r19 = (e16.frame.xmin + e16.frame.xmax) / 2, o10 = (e16.frame.ymin + e16.frame.ymax) / 2;
              if (t16[0] -= r19, t16[1] -= o10, t16[2] -= r19, t16[3] -= o10, null != e16.size) {
                const r20 = e16.size / (e16.frame.ymax - e16.frame.ymin);
                t16[0] *= r20, t16[1] *= r20, t16[2] *= r20, t16[3] *= r20;
              }
            }
          } else if ("CIMPictureMarker" === l11.type) {
            const o10 = l11, a13 = r18.getResource(o10.url);
            let s13 = 1;
            if (null != a13 && a13.height && (s13 = a13.width / a13.height), null != e15.size) {
              const r19 = e15.size / 2, a14 = e15.size * s13 * o10.scaleX / 2;
              t16 = [-a14, -r19, a14, r19];
            }
          } else if (null != e15.size) {
            const r19 = e15.size / 2;
            t16 = [-r19, -r19, r19, r19];
          }
          if (e15.anchorPoint) {
            let r19, o10;
            "Absolute" === e15.anchorPointUnits ? (r19 = e15.anchorPoint.x, o10 = e15.anchorPoint.y) : (r19 = e15.anchorPoint.x * (t16[2] - t16[0]), o10 = e15.anchorPoint.y * (t16[3] - t16[1]));
            const a13 = 1.25 * Math.sqrt(r19 * r19 + o10 * o10);
            t16[0] -= a13, t16[1] -= a13, t16[2] += a13, t16[3] += a13;
          }
          let n18 = I(e15.rotation);
          if (e15.rotateClockwise && (n18 = -n18), o9 && (n18 -= o9), n18) {
            const e16 = _5 * n18, r19 = Math.cos(e16), o10 = Math.sin(e16), a13 = u([r, r, -r, -r]);
            f4(a13, [t16[0] * r19 - t16[1] * o10, t16[0] * o10 + t16[1] * r19]), f4(a13, [t16[0] * r19 - t16[3] * o10, t16[0] * o10 + t16[3] * r19]), f4(a13, [t16[2] * r19 - t16[1] * o10, t16[2] * o10 + t16[1] * r19]), f4(a13, [t16[2] * r19 - t16[3] * o10, t16[2] * o10 + t16[3] * r19]), t16 = a13;
          }
          let c6 = I(e15.offsetX), m6 = I(e15.offsetY);
          if (o9) {
            const e16 = _5 * o9, t17 = Math.cos(e16), r19 = Math.sin(e16), a13 = c6 * r19 + m6 * t17;
            c6 = c6 * t17 - m6 * r19, m6 = a13;
          }
          t16[0] += c6, t16[1] += m6, t16[2] += c6, t16[3] += m6;
          const f9 = J(e15.markerPlacement);
          f9 > 0 && (t16[0] -= f9, t16[1] -= f9, t16[2] += f9, t16[3] += f9);
          break;
        }
      }
      const c5 = Q2(l11.effects);
      c5 > 0 && (t16[0] -= c5, t16[1] -= c5, t16[2] += c5, t16[3] += c5), n17 ? (e14[0] = t16[0], e14[1] = t16[1], e14[2] = t16[2], e14[3] = t16[3], n17 = false) : (e14[0] = Math.min(e14[0], t16[0]), e14[1] = Math.min(e14[1], t16[1]), e14[2] = Math.max(e14[2], t16[2]), e14[3] = Math.max(e14[3], t16[3]));
    }
    return e14;
  }
  static _getTextInflatedSize(e14, t15, r18) {
    const o9 = p6(t15.height ?? t3.CIMTextSymbol.height);
    if (e14[0] = -o9 / 2, e14[1] = -o9 / 2, e14[2] = o9 / 2, e14[3] = o9 / 2, !r18) return e14;
    const a12 = r18.get(t15);
    if (!a12) return e14;
    if (!a12.glyphMosaicItems.glyphs.length) return e14;
    const {
      lineGapType: s13,
      lineGap: i14
    } = t15, n17 = s13 ? nt(s13, i14 ?? 0, o9) : 0, l11 = "CIMBackgroundCallout" === t15.callout?.type, c5 = O2(a12.glyphMosaicItems, {
      scale: o9 / A2,
      angle: I(t15.angle),
      xOffset: I(t15.offsetX),
      yOffset: I(t15.offsetY),
      horizontalAlignment: t15.horizontalAlignment,
      verticalAlignment: t15.verticalAlignment,
      maxLineWidth: g3(t15.lineWidth),
      lineHeight: V * Math.max(0.25, Math.min(n17 || 1, 4)),
      decoration: t15.font.decoration || "none",
      useCIMAngleBehavior: true,
      hasBackground: l11
    }).boundsT, m6 = Math.sqrt(c5.width * c5.width + c5.height * c5.height);
    return e14[0] -= c5.x + m6, e14[1] -= c5.y - m6, e14[2] += c5.x + m6, e14[3] += -c5.y + m6, e14;
  }
};
var ee = class _ee {
  static getEnvelope(e14, t15, r18) {
    if (!e14) return null;
    const o9 = new Z2(r18);
    if (Array.isArray(e14)) {
      let r19;
      for (const a12 of e14) r19 ? r19.union($2(o9, a12, t15)) : r19 = $2(o9, a12, t15);
      return r19;
    }
    return $2(o9, e14, t15);
  }
  static getTextureAnchor(e14, t15) {
    const r18 = this.getEnvelope(e14, null, t15);
    if (!r18) return [0, 0, 0];
    const o9 = (r18.x + 0.5 * r18.width) * U2, a12 = (r18.y + 0.5 * r18.height) * U2, s13 = r18.width * U2 + 2, i14 = r18.height * U2 + 2;
    return [-o9 / s13, -a12 / i14, i14];
  }
  static rasterize(e14, t15, r18, o9, a12 = true) {
    const s13 = r18 || this.getEnvelope(t15, null, o9);
    if (!s13) return [null, 0, 0, 0, 0];
    const i14 = (s13.x + 0.5 * s13.width) * U2, n17 = (s13.y + 0.5 * s13.height) * U2;
    e14.width = s13.width * U2, e14.height = s13.height * U2, r18 || (e14.width += 2, e14.height += 2);
    const l11 = e14.getContext("2d", {
      willReadFrequently: true
    }), m6 = K2.createScale(U2, -U2);
    m6.translate(0.5 * e14.width - i14, 0.5 * e14.height + n17);
    const h8 = new tt(l11, o9, m6);
    switch (t15.type) {
      case "CIMPointSymbol": {
        const e15 = {
          type: "point",
          x: 0,
          y: 0
        };
        h8.drawSymbol(t15, e15);
        break;
      }
      case "CIMVectorMarker": {
        const e15 = new t7();
        h8.drawMarker(t15, e15);
        break;
      }
    }
    const u14 = l11.getImageData(0, 0, e14.width, e14.height), p7 = new Uint8Array(u14.data);
    if (a12) {
      let e15;
      for (let t16 = 0; t16 < p7.length; t16 += 4) e15 = p7[t16 + 3] / 255, p7[t16] = p7[t16] * e15, p7[t16 + 1] = p7[t16 + 1] * e15, p7[t16 + 2] = p7[t16 + 2] * e15;
    }
    return [p7, e14.width, e14.height, -i14 / e14.width, -n17 / e14.height];
  }
  static fromTextSymbol(e14) {
    const {
      text: t15
    } = e14;
    return {
      type: "CIMPointSymbol",
      symbolLayers: [{
        type: "CIMVectorMarker",
        enable: true,
        anchorPointUnits: "Relative",
        dominantSizeAxis3D: "Y",
        size: 10,
        billboardMode3D: "FaceNearPlane",
        frame: {
          xmin: -5,
          ymin: -5,
          xmax: 5,
          ymax: 5
        },
        markerGraphics: [{
          type: "CIMMarkerGraphic",
          geometry: {
            x: 0,
            y: 0
          },
          symbol: _ee.createCIMTextSymbolfromTextSymbol(e14),
          textString: t15
        }],
        scaleSymbolsProportionally: true,
        respectFrame: true
      }],
      scaleX: 1,
      angleAlignment: "Display"
    };
  }
  static fromPictureFillSymbol(e14) {
    const {
      height: t15,
      outline: r18,
      width: o9,
      xoffset: a12,
      xscale: s13,
      yoffset: i14,
      yscale: n17
    } = e14, l11 = [], c5 = {
      type: "CIMPolygonSymbol",
      symbolLayers: l11
    };
    if (r18) {
      const e15 = pe(r18);
      e15 && l11.push(e15);
    }
    let m6 = e14.url;
    "esriPFS" === e14.type && e14.imageData && (m6 = e14.imageData);
    const f9 = "angle" in e14 ? e14.angle ?? 0 : 0, y5 = (o9 ?? 0) * (s13 || 1), h8 = (t15 ?? 0) * (n17 || 1);
    return l11.push({
      type: "CIMPictureFill",
      invertBackfaceTexture: false,
      scaleX: 1,
      textureFilter: ie.Picture,
      tintColor: null,
      url: m6,
      height: h8,
      width: y5,
      offsetX: I(a12),
      offsetY: I(i14),
      rotation: I(-f9),
      colorSubstitutions: null
    }), c5;
  }
  static fromSimpleFillSymbol(e14) {
    const {
      color: r18,
      style: o9,
      outline: s13
    } = e14, i14 = [], n17 = {
      type: "CIMPolygonSymbol",
      symbolLayers: i14
    };
    if (s13) {
      const e15 = pe(s13);
      e15 && i14.push(e15);
    }
    if (o9 && "solid" !== o9 && "none" !== o9 && "esriSFSSolid" !== o9 && "esriSFSNull" !== o9) {
      const e15 = {
        type: "CIMLineSymbol",
        symbolLayers: [{
          type: "CIMSolidStroke",
          color: ie2(r18),
          capStyle: U.Butt,
          joinStyle: w2.Miter,
          width: 0.75
        }]
      };
      let s14 = 0;
      const n18 = e3(he(o9) ? 8 : 10);
      switch (o9) {
        case "vertical":
        case "esriSFSVertical":
          s14 = 90;
          break;
        case "forward-diagonal":
        case "esriSFSForwardDiagonal":
        case "diagonal-cross":
        case "esriSFSDiagonalCross":
          s14 = -45;
          break;
        case "backward-diagonal":
        case "esriSFSBackwardDiagonal":
          s14 = 45;
          break;
        case "cross":
        case "esriSFSCross":
          s14 = 0;
      }
      i14.push({
        type: "CIMHatchFill",
        lineSymbol: e15,
        offsetX: 0,
        offsetY: 0,
        rotation: s14,
        separation: n18
      }), "cross" === o9 || "esriSFSCross" === o9 ? i14.push({
        type: "CIMHatchFill",
        lineSymbol: a(e15),
        offsetX: 0,
        offsetY: 0,
        rotation: 90,
        separation: n18
      }) : "diagonal-cross" !== o9 && "esriSFSDiagonalCross" !== o9 || i14.push({
        type: "CIMHatchFill",
        lineSymbol: a(e15),
        offsetX: 0,
        offsetY: 0,
        rotation: 45,
        separation: n18
      });
    } else !o9 || "solid" !== o9 && "esriSFSSolid" !== o9 || i14.push({
      type: "CIMSolidFill",
      enable: true,
      color: ie2(r18)
    });
    return n17;
  }
  static fromSimpleLineSymbol(e14) {
    const {
      cap: t15,
      color: r18,
      join: o9,
      marker: a12,
      miterLimit: s13,
      style: i14,
      width: n17
    } = e14;
    let l11 = null;
    "solid" !== i14 && "none" !== i14 && "esriSLSSolid" !== i14 && "esriSLSNull" !== i14 && (l11 = [{
      type: "CIMGeometricEffectDashes",
      dashTemplate: me(i14, t15),
      lineDashEnding: "NoConstraint",
      scaleDash: true,
      offsetAlongLine: null
    }]);
    const c5 = [];
    if (a12) {
      let e15;
      switch (a12.placement) {
        case "begin-end":
          e15 = o2.Both;
          break;
        case "begin":
          e15 = o2.JustBegin;
          break;
        case "end":
          e15 = o2.JustEnd;
          break;
        default:
          e15 = o2.None;
      }
      const t16 = _ee.fromSimpleMarker(a12, n17, r18).symbolLayers[0];
      t16.markerPlacement = {
        type: "CIMMarkerPlacementAtExtremities",
        placePerPart: false,
        angleToLine: true,
        offset: 0,
        extremityPlacement: e15,
        offsetAlongLine: 0
      }, c5.push(t16);
    }
    return c5.push({
      type: "CIMSolidStroke",
      color: "none" !== i14 && "esriSLSNull" !== i14 ? ie2(r18) : [0, 0, 0, 0],
      capStyle: re(t15),
      joinStyle: oe2(o9),
      miterLimit: s13,
      width: n17,
      effects: l11
    }), {
      type: "CIMLineSymbol",
      symbolLayers: c5
    };
  }
  static fromPictureMarker(e14) {
    const {
      angle: t15,
      height: r18,
      width: o9,
      xoffset: a12,
      yoffset: s13
    } = e14;
    let i14 = e14.url;
    return "esriPMS" === e14.type && e14.imageData && (i14 = e14.imageData), {
      type: "CIMPointSymbol",
      symbolLayers: [{
        type: "CIMPictureMarker",
        invertBackfaceTexture: false,
        scaleX: 1,
        textureFilter: ie.Picture,
        tintColor: null,
        url: i14,
        size: r18,
        width: o9,
        offsetX: I(a12),
        offsetY: I(s13),
        rotation: I(-t15)
      }]
    };
  }
  static createCIMTextSymbolfromTextSymbol(t15) {
    const {
      angle: r18,
      color: o9,
      font: a12,
      haloColor: s13,
      haloSize: i14,
      horizontalAlignment: n17,
      kerning: l11,
      lineWidth: c5,
      text: m6,
      verticalAlignment: f9,
      xoffset: y5,
      yoffset: h8,
      backgroundColor: u14,
      borderLineColor: p7,
      borderLineSize: M4
    } = t15;
    let S3, d4, L3, z2, D2, E;
    a12 && (S3 = a12.family, d4 = a12.style, L3 = a12.weight, z2 = a12.size, D2 = a12.decoration);
    let G3 = false;
    if (m6) {
      G3 = i13(m6)[1];
    }
    return (u14 || M4) && (E = {
      type: "CIMBackgroundCallout",
      margin: null,
      backgroundSymbol: {
        type: "CIMPolygonSymbol",
        symbolLayers: [{
          type: "CIMSolidFill",
          color: ie2(u14)
        }, {
          type: "CIMSolidStroke",
          color: ie2(p7),
          width: M4
        }]
      },
      accentBarSymbol: null,
      gap: null,
      leaderLineSymbol: null,
      lineStyle: null
    }), {
      type: "CIMTextSymbol",
      angle: r18,
      blockProgression: C2.BTT,
      depth3D: 1,
      extrapolateBaselines: true,
      fontEffects: l3.Normal,
      fontEncoding: a4.Unicode,
      fontFamilyName: S3 || "Arial",
      fontStyleName: ne2(d4, L3),
      fontType: u5.Unspecified,
      haloSize: i14,
      height: z2,
      hinting: y.Default,
      horizontalAlignment: ae(n17 ?? "center"),
      kerning: l11,
      letterWidth: 100,
      ligatures: true,
      lineGapType: "Multiple",
      lineWidth: c5,
      offsetX: I(y5),
      offsetY: I(h8),
      strikethrough: "line-through" === D2,
      underline: "underline" === D2,
      symbol: {
        type: "CIMPolygonSymbol",
        symbolLayers: [{
          type: "CIMSolidFill",
          enable: true,
          color: ie2(o9)
        }]
      },
      haloSymbol: {
        type: "CIMPolygonSymbol",
        symbolLayers: [{
          type: "CIMSolidFill",
          enable: true,
          color: ie2(s13)
        }]
      },
      shadowColor: [0, 0, 0, 255],
      shadowOffsetX: 1,
      shadowOffsetY: 1,
      textCase: "Normal",
      textDirection: G3 ? ne.RTL : ne.LTR,
      verticalAlignment: se(f9 ?? "baseline"),
      verticalGlyphOrientation: oe.Right,
      wordSpacing: 100,
      billboardMode3D: T2.FaceNearPlane,
      callout: E
    };
  }
  static createPictureMarkerRasterizationParam(e14) {
    const {
      angle: t15,
      height: r18,
      width: o9,
      xoffset: a12,
      yoffset: s13
    } = e14, i14 = e14.url ?? e14.source?.url ?? e14.source?.imageData;
    return i14 ? {
      type: "sprite-rasterization-param",
      overrides: [],
      resource: {
        type: "CIMPictureMarker",
        invertBackfaceTexture: false,
        scaleX: 1,
        textureFilter: ie.Picture,
        tintColor: null,
        url: i14,
        size: r18,
        width: o9,
        offsetX: I(a12),
        offsetY: I(s13),
        rotation: I(-t15)
      }
    } : null;
  }
  static createPictureFillRasterizationParam(e14) {
    const {
      width: t15,
      height: r18,
      xoffset: o9,
      yoffset: a12,
      url: s13
    } = e14;
    return s13 ? {
      type: "sprite-rasterization-param",
      overrides: [],
      resource: {
        type: "CIMPictureFill",
        scaleX: 1,
        textureFilter: ie.Picture,
        tintColor: null,
        url: s13,
        width: t15,
        height: r18,
        offsetX: I(o9),
        offsetY: I(a12),
        rotation: 0
      }
    } : null;
  }
  static fromSimpleMarker(e14, t15, r18) {
    const {
      style: o9
    } = e14, a12 = e14.color ?? r18;
    if ("path" === o9 || "esriSMSPath" === o9) {
      const t16 = [];
      if ("outline" in e14 && e14.outline) {
        const r20 = e14.outline;
        t16.push({
          type: "CIMSolidStroke",
          enable: true,
          width: r20.width,
          color: ie2(r20.color),
          path: e14.path
        });
      }
      t16.push({
        type: "CIMSolidFill",
        enable: true,
        color: ie2(a12),
        path: e14.path
      });
      const [r19, o10] = ye("square");
      return {
        type: "CIMPointSymbol",
        symbolLayers: [{
          type: "CIMVectorMarker",
          enable: true,
          rotation: -I(e14.angle),
          size: I(e14.size || 6),
          offsetX: I(e14.xoffset),
          offsetY: I(e14.yoffset),
          scaleSymbolsProportionally: false,
          frame: r19,
          markerGraphics: [{
            type: "CIMMarkerGraphic",
            geometry: o10,
            symbol: {
              type: "CIMPolygonSymbol",
              symbolLayers: t16
            }
          }]
        }]
      };
    }
    const s13 = [];
    let i14, n17, l11 = e14.size;
    if ("outline" in e14 && e14.outline && "none" !== e14.outline.style && "esriSLSNull" !== e14.outline.style) {
      const t16 = e14.outline, r19 = "solid" !== t16.style && "esriSLSSolid" !== t16.style;
      [i14, n17] = r19 ? ye(o9, e14.size) : ye(o9);
      const a13 = t16.width ?? u4.width;
      if (r19) {
        const t17 = a13 / e14.size, r20 = (i14.xmax - i14.xmin) * t17 / 2, o10 = (i14.ymax - i14.ymin) * t17 / 2;
        i14.xmin -= r20, i14.xmax += r20, i14.ymin -= o10, i14.ymax += o10, l11 && (l11 += a13);
      }
      const c6 = "cross" !== e14.style && "x" !== e14.style || "dot" === e14?.outline.style || "short-dot" === e14?.outline.style ? k2.HalfGap : k2.FullPattern, m6 = r19 ? [{
        type: "CIMGeometricEffectAddControlPoints"
      }, {
        type: "CIMGeometricEffectDashes",
        dashTemplate: me(t16.style, null).map((e15) => t16.width && t16.width > 0 ? e15 * t16.width : e15),
        lineDashEnding: c6,
        controlPointEnding: k2.FullPattern
      }] : void 0;
      s13.push({
        type: "CIMSolidStroke",
        capStyle: r19 ? U.Round : U.Butt,
        enable: true,
        width: a13,
        color: ie2(t16.color),
        effects: m6
      });
    } else !t15 || "line-marker" !== e14.type || "cross" !== e14.style && "x" !== e14.style ? [i14, n17] = ye(o9) : ([i14, n17] = ye(o9), s13.push({
      type: "CIMSolidStroke",
      enable: true,
      width: t15,
      color: ie2(a12)
    }));
    s13.push({
      type: "CIMSolidFill",
      enable: true,
      color: ie2(a12)
    });
    const c5 = {
      type: "CIMPolygonSymbol",
      symbolLayers: s13
    };
    return {
      type: "CIMPointSymbol",
      symbolLayers: [{
        type: "CIMVectorMarker",
        enable: true,
        rotation: I(-e14.angle),
        size: I(l11 || 6 * t15),
        offsetX: I(e14.xoffset),
        offsetY: I(e14.yoffset),
        scaleSymbolsProportionally: false,
        frame: i14,
        markerGraphics: [{
          type: "CIMMarkerGraphic",
          geometry: n17,
          symbol: c5
        }]
      }]
    };
  }
  static fromCIMHatchFill(e14, r18) {
    const o9 = r18 * (e14.separation ?? t3.CIMHatchFill.separation), a12 = o9 / 2, s13 = a(e14.lineSymbol);
    s13.symbolLayers?.forEach((e15) => {
      switch (e15.type) {
        case "CIMSolidStroke":
          null != e15.width && (e15.width *= r18), e15.effects?.forEach((e16) => {
            if ("CIMGeometricEffectDashes" === e16.type) {
              const t15 = e16.dashTemplate;
              e16.dashTemplate = t15?.map((e17) => e17 * r18);
            }
          });
          break;
        case "CIMVectorMarker": {
          null != e15.size && (e15.size *= r18);
          const t15 = e15.markerPlacement;
          null != t15 && "placementTemplate" in t15 && (t15.placementTemplate = t15.placementTemplate.map((e16) => e16 * r18));
          break;
        }
      }
    });
    let i14 = this._getLineSymbolPeriod(s13) || H;
    for (; i14 < H; ) i14 *= 2;
    const n17 = i14 / 2;
    return {
      type: "CIMVectorMarker",
      frame: {
        xmin: -n17,
        xmax: n17,
        ymin: -a12,
        ymax: a12
      },
      markerGraphics: [{
        type: "CIMMarkerGraphic",
        geometry: {
          paths: [[[-n17, 0], [n17, 0]]]
        },
        symbol: s13
      }],
      size: o9
    };
  }
  static fetchResources(e14, t15, r18, o9 = null) {
    return e14 && t15 ? (te(e14, (e15) => {
      ue(e15, t15, r18), "url" in e15 && e15.url && r18.push(t15.fetchResource(e15.url, {
        signal: o9
      }));
    }), r18) : r18;
  }
  static fetchFonts(e14, t15, r18) {
    if (e14 && t15) {
      if ("symbolLayers" in e14 && e14.symbolLayers) {
        for (const o9 of e14.symbolLayers) if ("CIMVectorMarker" === o9.type && o9.markerGraphics) for (const e15 of o9.markerGraphics) e15?.symbol && _ee.fetchFonts(e15.symbol, t15, r18);
      } else if ("CIMTextSymbol" === e14.type) {
        const {
          fontFamilyName: o9,
          fontStyleName: a12
        } = e14;
        if (!o9 || "calcitewebcoreicons" === o9.toLowerCase()) return;
        const {
          style: s13,
          weight: i14
        } = P(a12), n17 = w(e14), c5 = new m2({
          family: o9,
          style: s13,
          weight: i14,
          decoration: n17
        });
        r18.push(t15.loadFont(c5).catch(() => {
          O3().error(`Unsupported font ${o9} in CIM symbol`);
        }));
      }
    }
  }
  static _getLineSymbolPeriod(e14) {
    if (e14) {
      const t15 = this._getEffectsRepeat(e14.effects);
      if (t15) return t15;
      if (e14.symbolLayers) {
        for (const r18 of e14.symbolLayers) if (r18) {
          const e15 = this._getEffectsRepeat(r18.effects);
          if (e15) return e15;
          switch (r18.type) {
            case "CIMCharacterMarker":
            case "CIMPictureMarker":
            case "CIMVectorMarker":
            case "CIMObjectMarker3D":
            case "CIMglTFMarker3D": {
              const e16 = this._getPlacementRepeat(r18.markerPlacement);
              if (e16) return e16;
            }
          }
        }
      }
    }
    return 0;
  }
  static _getEffectsRepeat(e14) {
    if (e14) {
      for (const t15 of e14) if (t15) switch (t15.type) {
        case "CIMGeometricEffectDashes": {
          const e15 = t15.dashTemplate;
          if (e15 && e15.length) {
            let t16 = 0;
            for (const r18 of e15) t16 += r18;
            return 1 & e15.length && (t16 *= 2), t16;
          }
          break;
        }
        case "CIMGeometricEffectWave":
          return t15.period;
        default:
          O3().error(`unsupported geometric effect type ${t15.type}`);
      }
    }
    return 0;
  }
  static _getPlacementRepeat(e14) {
    if (e14) switch (e14.type) {
      case "CIMMarkerPlacementAlongLineSameSize":
      case "CIMMarkerPlacementAlongLineRandomSize":
      case "CIMMarkerPlacementAlongLineVariableSize": {
        const t15 = e14.placementTemplate;
        if (t15 && t15.length) {
          let e15 = 0;
          for (const r18 of t15) e15 += +r18;
          return 1 & t15.length && (e15 *= 2), e15;
        }
        break;
      }
    }
    return 0;
  }
  static fromCIMInsidePolygon(e14) {
    const t15 = e14.markerPlacement, r18 = __spreadValues({}, e14);
    r18.markerPlacement = null, r18.anchorPoint = null;
    const s13 = Math.abs(t15.stepX), i14 = Math.abs(t15.stepY), n17 = (t15.randomness ?? 100) / 100;
    let l11, c5, m6, f9;
    if ("Random" === t15.gridType) {
      const e15 = e3(st), r19 = Math.max(Math.floor(e15 / s13), 1), y5 = Math.max(Math.floor(e15 / i14), 1);
      l11 = r19 * s13 / 2, c5 = y5 * i14 / 2, m6 = 2 * c5;
      const h8 = new t(t15.seed), u14 = n17 * s13 / 1.5, p7 = n17 * i14 / 1.5;
      f9 = [];
      for (let t16 = 0; t16 < r19; t16++) for (let e16 = 0; e16 < y5; e16++) {
        const r20 = t16 * s13 - l11 + u14 * (0.5 - h8.getFloat()), o9 = e16 * i14 - c5 + p7 * (0.5 - h8.getFloat());
        f9.push({
          x: r20,
          y: o9
        }), 0 === t16 && f9.push({
          x: r20 + 2 * l11,
          y: o9
        }), 0 === e16 && f9.push({
          x: r20,
          y: o9 + 2 * c5
        });
      }
    } else true === t15.shiftOddRows ? (l11 = s13 / 2, c5 = i14, m6 = 2 * i14, f9 = [{
      x: -l11,
      y: 0
    }, {
      x: l11,
      y: 0
    }, {
      x: 0,
      y: c5
    }, {
      x: 0,
      y: -c5
    }]) : (l11 = s13 / 2, c5 = i14 / 2, m6 = i14, f9 = [{
      x: -s13,
      y: 0
    }, {
      x: 0,
      y: -i14
    }, {
      x: -s13,
      y: -i14
    }, {
      x: 0,
      y: 0
    }, {
      x: s13,
      y: 0
    }, {
      x: 0,
      y: i14
    }, {
      x: s13,
      y: i14
    }, {
      x: -s13,
      y: i14
    }, {
      x: s13,
      y: -i14
    }]);
    return {
      type: "CIMVectorMarker",
      frame: {
        xmin: -l11,
        xmax: l11,
        ymin: -c5,
        ymax: c5
      },
      markerGraphics: f9.map((e15) => ({
        type: "CIMMarkerGraphic",
        geometry: e15,
        symbol: {
          type: "CIMPointSymbol",
          symbolLayers: [r18]
        }
      })),
      size: m6
    };
  }
};
function te(e14, t15) {
  if (e14) switch (e14.type) {
    case "CIMPointSymbol":
    case "CIMLineSymbol":
    case "CIMPolygonSymbol": {
      const r18 = e14.symbolLayers;
      if (!r18) return;
      for (const e15 of r18) if (t15(e15), "CIMVectorMarker" === e15.type) {
        const r19 = e15.markerGraphics;
        if (!r19) continue;
        for (const e16 of r19) if (e16) {
          const r20 = e16.symbol;
          r20 && te(r20, t15);
        }
      }
      break;
    }
  }
}
var re = (e14) => {
  if (!e14) return U.Butt;
  switch (e14) {
    case "butt":
      return U.Butt;
    case "square":
      return U.Square;
    case "round":
      return U.Round;
  }
};
var oe2 = (e14) => {
  if (!e14) return w2.Miter;
  switch (e14) {
    case "miter":
      return w2.Miter;
    case "round":
      return w2.Round;
    case "bevel":
      return w2.Bevel;
  }
};
var ae = (e14) => {
  if (null == e14) return "Center";
  switch (e14) {
    case "left":
      return "Left";
    case "right":
      return "Right";
    case "center":
      return "Center";
  }
};
var se = (e14) => {
  if (null == e14) return "Center";
  switch (e14) {
    case "baseline":
      return "Baseline";
    case "top":
      return "Top";
    case "middle":
      return "Center";
    case "bottom":
      return "Bottom";
  }
};
var ie2 = (e14) => {
  if (!e14) return [0, 0, 0, 0];
  const {
    r: t15,
    g: r18,
    b: o9,
    a: a12
  } = e14;
  return [t15, r18, o9, 255 * a12];
};
var ne2 = (e14, t15) => {
  const r18 = le(t15), o9 = ce(e14);
  return r18 && o9 ? `${r18}-${o9}` : `${r18}${o9}`;
};
var le = (e14) => {
  if (!e14) return "";
  switch (e14.toLowerCase()) {
    case "bold":
    case "bolder":
      return "bold";
  }
  return "";
};
var ce = (e14) => {
  if (!e14) return "";
  switch (e14.toLowerCase()) {
    case "italic":
    case "oblique":
      return "italic";
  }
  return "";
};
var me = (e14, t15) => {
  const r18 = has("safari") ? 1e-3 : 0, o9 = "butt" === t15;
  switch (e14) {
    case "dash":
    case "esriSLSDash":
      return o9 ? [4, 3] : [3, 4];
    case "dash-dot":
    case "esriSLSDashDot":
      return o9 ? [4, 3, 1, 3] : [3, 4, r18, 4];
    case "dot":
    case "esriSLSDot":
      return o9 ? [1, 3] : [r18, 4];
    case "long-dash":
    case "esriSLSLongDash":
      return o9 ? [8, 3] : [7, 4];
    case "long-dash-dot":
    case "esriSLSLongDashDot":
      return o9 ? [8, 3, 1, 3] : [7, 4, r18, 4];
    case "long-dash-dot-dot":
    case "esriSLSDashDotDot":
      return o9 ? [8, 3, 1, 3, 1, 3] : [7, 4, r18, 4, r18, 4];
    case "short-dash":
    case "esriSLSShortDash":
      return o9 ? [4, 1] : [3, 2];
    case "short-dash-dot":
    case "esriSLSShortDashDot":
      return o9 ? [4, 1, 1, 1] : [3, 2, r18, 2];
    case "short-dash-dot-dot":
    case "esriSLSShortDashDotDot":
      return o9 ? [4, 1, 1, 1, 1, 1] : [3, 2, r18, 2, r18, 2];
    case "short-dot":
    case "esriSLSShortDot":
      return o9 ? [1, 1] : [r18, 2];
    case "solid":
    case "esriSLSSolid":
    case "none":
      return O3().error("Unexpected: style does not require rasterization"), [0, 0];
    default:
      return O3().error(`Tried to rasterize SLS, but found an unexpected style: ${e14}!`), [0, 0];
  }
};
function fe(e14) {
  return void 0 !== e14.symbolLayers;
}
var ye = (e14, t15 = 100) => {
  const r18 = t15 / 2;
  let o9, a12;
  const s13 = e14;
  if ("circle" === s13 || "esriSMSCircle" === s13) {
    const e15 = 0.25;
    let t16 = Math.acos(1 - e15 / r18), s14 = Math.ceil(N3 / t16 / 4);
    0 === s14 && (s14 = 1), t16 = Y3 / s14, s14 *= 4;
    const i14 = [];
    i14.push([r18, 0]);
    for (let o10 = 1; o10 < s14; o10++) i14.push([r18 * Math.cos(o10 * t16), -r18 * Math.sin(o10 * t16)]);
    i14.push([r18, 0]), o9 = {
      rings: [i14]
    }, a12 = {
      xmin: -r18,
      ymin: -r18,
      xmax: r18,
      ymax: r18
    };
  } else if ("cross" === s13 || "esriSMSCross" === s13) {
    const e15 = 0;
    o9 = {
      paths: [[[e15, r18], [e15, -r18]], [[r18, e15], [-r18, e15]]]
    }, a12 = {
      xmin: -r18,
      ymin: -r18,
      xmax: r18,
      ymax: r18
    };
  } else if ("diamond" === s13 || "esriSMSDiamond" === s13) o9 = {
    rings: [[[-r18, 0], [0, r18], [r18, 0], [0, -r18], [-r18, 0]]]
  }, a12 = {
    xmin: -r18,
    ymin: -r18,
    xmax: r18,
    ymax: r18
  };
  else if ("square" === s13 || "esriSMSSquare" === s13) o9 = {
    rings: [[[-r18, -r18], [-r18, r18], [r18, r18], [r18, -r18], [-r18, -r18]]]
  }, a12 = {
    xmin: -r18,
    ymin: -r18,
    xmax: r18,
    ymax: r18
  };
  else if ("x" === s13 || "esriSMSX" === s13) o9 = {
    paths: [[[r18, r18], [-r18, -r18]], [[r18, -r18], [-r18, r18]]]
  }, a12 = {
    xmin: -r18,
    ymin: -r18,
    xmax: r18,
    ymax: r18
  };
  else if ("triangle" === s13 || "esriSMSTriangle" === s13) {
    const e15 = t15 * 0.5773502691896257, r19 = -e15, s14 = 2 / 3 * t15, i14 = s14 - t15;
    o9 = {
      rings: [[[r19, i14], [0, s14], [e15, i14], [r19, i14]]]
    }, a12 = {
      xmin: r19,
      ymin: i14,
      xmax: e15,
      ymax: s14
    };
  } else "arrow" === s13 && (o9 = {
    rings: [[[-50, 50], [50, 0], [-50, -50], [-33, -20], [-33, 20], [-50, 50]]]
  }, a12 = {
    xmin: -r18,
    ymin: -r18,
    xmax: r18,
    ymax: r18
  });
  return [a12, o9];
};
var he = (e14) => "vertical" === e14 || "horizontal" === e14 || "cross" === e14 || "esriSFSCross" === e14 || "esriSFSVertical" === e14 || "esriSFSHorizontal" === e14;
function ue(e14, t15, r18) {
  if (!e14.effects || null != t15.geometryEngine) return;
  if (t15.geometryEnginePromise) return void r18.push(t15.geometryEnginePromise);
  d(e14.effects) && (t15.geometryEnginePromise = k(), r18.push(t15.geometryEnginePromise), t15.geometryEnginePromise.then((e15) => t15.geometryEngine = e15));
}
function pe(e14) {
  if (!e14) return null;
  let t15 = null;
  const {
    cap: r18,
    color: o9,
    join: a12,
    miterLimit: s13,
    style: i14,
    width: n17
  } = e14;
  return "solid" !== i14 && "none" !== i14 && "esriSLSSolid" !== i14 && "esriSLSNull" !== i14 && (t15 = [{
    type: "CIMGeometricEffectDashes",
    dashTemplate: me(i14, r18),
    lineDashEnding: "NoConstraint",
    scaleDash: true,
    offsetAlongLine: null
  }]), {
    type: "CIMSolidStroke",
    color: "esriSLSNull" !== i14 && "none" !== i14 ? ie2(o9) : [0, 0, 0, 0],
    capStyle: re(r18),
    joinStyle: oe2(a12),
    miterLimit: s13,
    width: n17,
    effects: t15
  };
}

export {
  a6 as a,
  s4 as s,
  l8 as l,
  A4 as A,
  g2 as g,
  i13 as i,
  t14 as t,
  a11 as a2,
  c4 as c,
  o7 as o,
  s10 as s2,
  i11 as i2,
  O2 as O,
  u13 as u,
  l10 as l2,
  K2 as K,
  $,
  tt,
  W3 as W,
  Q2 as Q,
  Z3 as Z,
  ee,
  re,
  me
};
//# sourceMappingURL=chunk-Q2RVB4BK.js.map
