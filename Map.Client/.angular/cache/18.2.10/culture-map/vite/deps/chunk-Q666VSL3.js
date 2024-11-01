import {
  b,
  j as j6
} from "./chunk-67V5AGVJ.js";
import {
  I,
  T,
  _ as _4,
  e as e5,
  j as j5,
  k,
  m as m2,
  r as r5,
  v
} from "./chunk-VS26W5Y5.js";
import {
  l
} from "./chunk-KKD7A2GN.js";
import {
  A as A2,
  D,
  E,
  F,
  V,
  a as a2,
  f2 as f,
  j as j4,
  w
} from "./chunk-N4KQPPPI.js";
import {
  e as e4,
  n as n4,
  r as r4
} from "./chunk-DY7FJHTG.js";
import {
  n as n2
} from "./chunk-N6TJI25E.js";
import {
  e as e3,
  n as n3,
  r as r3
} from "./chunk-IMVP5ADD.js";
import {
  L as L2,
  _ as _3,
  a
} from "./chunk-H7WPOTQH.js";
import {
  j as j3,
  m2 as m
} from "./chunk-T6GCUITX.js";
import {
  j as j2
} from "./chunk-TUIGM7TV.js";
import {
  _
} from "./chunk-O7UDKFOW.js";
import {
  h as h2
} from "./chunk-3ZXOUEQG.js";
import {
  A,
  H,
  J,
  P,
  _ as _2,
  g,
  j,
  o as o2,
  r as r2,
  u,
  x,
  z
} from "./chunk-AXVPJBVW.js";
import {
  e as e2,
  n,
  r,
  t
} from "./chunk-OXEPWRM7.js";
import {
  s2 as s
} from "./chunk-JJS7PR2U.js";
import {
  o
} from "./chunk-WGAPNV7F.js";
import {
  e
} from "./chunk-7DA6A5LD.js";
import {
  L,
  h
} from "./chunk-DXLOWWK7.js";

// ../../../node_modules/@arcgis/core/views/interactive/coordinateHelper.js
var x2;
!function(e9) {
  e9[e9.Z = 0] = "Z", e9[e9.M = 1] = "M";
}(x2 || (x2 = {}));
var R = class {
  constructor(e9) {
    this.spatialReference = e9;
  }
  createVector() {
    return this._tag(n4());
  }
  pointToVector(e9) {
    return this._tag(r4(e9.x, e9.y));
  }
  arrayToVector(e9) {
    return this._tag(r4(e9[0], e9[1]));
  }
  vectorToArray(e9) {
    return [e9[0], e9[1]];
  }
  pointToArray(e9) {
    return [e9.x, e9.y];
  }
  vectorToPoint(e9, r7 = new _()) {
    return r7.x = e9[0], r7.y = e9[1], r7.z = void 0, r7.m = void 0, r7.spatialReference = this.spatialReference, r7;
  }
  arrayToPoint(e9, r7 = new _()) {
    return r7.x = e9[0], r7.y = e9[1], r7.z = void 0, r7.m = void 0, r7.spatialReference = this.spatialReference, r7;
  }
  vectorToDehydratedPoint(e9, r7) {
    if (e9) return r7 ??= {
      x: void 0,
      y: void 0,
      z: void 0,
      m: void 0,
      hasZ: void 0,
      hasM: void 0,
      spatialReference: void 0,
      type: "point"
    }, r7.x = e9[0], r7.y = e9[1], r7.z = void 0, r7.m = void 0, r7.hasZ = false, r7.hasM = false, r7.spatialReference = this.spatialReference, r7;
  }
  lerp(r7, t8, a4, i4) {
    return _4(i4, r7, t8, a4);
  }
  addDelta(e9, r7, t8) {
    e9[0] += r7, e9[1] += t8;
  }
  distance(e9, t8) {
    return m2(e9, t8);
  }
  getZ(e9, r7 = void 0) {
    return r7;
  }
  hasZ() {
    return false;
  }
  getM(e9, r7 = void 0) {
    return r7;
  }
  hasM() {
    return false;
  }
  clone(e9) {
    return this._tag(e4(e9));
  }
  copy(e9, r7) {
    return r5(r7, e9);
  }
  fromXYZ(e9) {
    return this._tag(r4(e9[0], e9[1]));
  }
  toXYZ(e9, r7 = n()) {
    return o2(r7, e9[0], e9[1], 0);
  }
  pointToXYZ(e9, r7 = n()) {
    return o2(r7, e9.x, e9.y, 0);
  }
  equals(e9, r7) {
    return T(e9, r7);
  }
  _tag(e9) {
    return e9;
  }
};
var M = class {
  constructor(e9, r7) {
    this._valueType = e9, this.spatialReference = r7;
  }
  createVector() {
    return this._tag(n());
  }
  pointToVector(e9) {
    return this._tag(r(e9.x, e9.y, this._valueType === x2.Z ? e9.z : e9.m));
  }
  arrayToVector(e9) {
    return this._tag(r(e9[0], e9[1], e9[2] || 0));
  }
  vectorToArray(e9) {
    return [e9[0], e9[1], e9[2]];
  }
  pointToArray(e9) {
    return this._valueType === x2.Z ? [e9.x, e9.y, e9.z] : [e9.x, e9.y, e9.m];
  }
  vectorToPoint(e9, r7 = new _()) {
    return r7.x = e9[0], r7.y = e9[1], r7.z = this._valueType === x2.Z ? e9[2] : void 0, r7.m = this._valueType === x2.M ? e9[2] : void 0, r7.spatialReference = this.spatialReference, r7;
  }
  arrayToPoint(e9, r7 = new _()) {
    return r7.x = e9[0], r7.y = e9[1], r7.z = this._valueType === x2.Z ? e9[2] : void 0, r7.m = this._valueType === x2.M ? e9[2] : void 0, r7.spatialReference = this.spatialReference, r7;
  }
  vectorToDehydratedPoint(e9, r7) {
    if (!e9) return;
    r7 ??= {
      x: void 0,
      y: void 0,
      z: void 0,
      m: void 0,
      hasZ: void 0,
      hasM: void 0,
      spatialReference: void 0,
      type: "point"
    };
    const t8 = this._valueType === x2.Z, a4 = this._valueType === x2.M;
    return r7.x = e9[0], r7.y = e9[1], r7.z = t8 ? e9[2] : void 0, r7.m = a4 ? e9[2] : void 0, r7.hasZ = t8, r7.hasM = a4, r7.spatialReference = this.spatialReference, r7;
  }
  lerp(e9, r7, t8, a4) {
    return A(a4, e9, r7, t8);
  }
  addDelta(e9, r7, t8, a4) {
    e9[0] += r7, e9[1] += t8, this._valueType === x2.Z && (e9[2] += a4);
  }
  distance(e9, t8) {
    return this._valueType === x2.Z ? x(e9, t8) : m2(w2(e9), w2(t8));
  }
  getZ(e9, r7 = void 0) {
    return this._valueType === x2.Z ? e9[2] : r7;
  }
  hasZ() {
    return this._valueType === x2.Z;
  }
  getM(e9, r7 = void 0) {
    return this._valueType === x2.M ? e9[2] : r7;
  }
  hasM() {
    return this._valueType === x2.M;
  }
  clone(e9) {
    return this._tag(e2(e9));
  }
  copy(e9, r7) {
    return r2(r7, e9);
  }
  fromXYZ(e9, r7 = 0, t8 = 0) {
    return this._tag(r(e9[0], e9[1], this._valueType === x2.Z ? e9.length > 2 ? e9[2] : r7 : t8));
  }
  toXYZ(e9, r7 = n()) {
    return o2(r7, e9[0], e9[1], this._valueType === x2.Z ? e9[2] : 0);
  }
  pointToXYZ(e9, r7 = n()) {
    return o2(r7, e9.x, e9.y, this._valueType === x2.Z ? e9.z ?? 0 : 0);
  }
  equals(e9, r7) {
    return H(e9, r7);
  }
  _tag(e9) {
    return e9;
  }
};
var z2 = class {
  constructor(e9) {
    this.spatialReference = e9;
  }
  createVector() {
    return this._tag(n3());
  }
  pointToVector(e9) {
    return this._tag(r3(e9.x, e9.y, e9.z, e9.m));
  }
  arrayToVector(e9) {
    return this._tag(r3(e9[0], e9[1], e9[2] || 0, e9[3] || 0));
  }
  vectorToArray(e9) {
    return [e9[0], e9[1], e9[2], e9[3]];
  }
  pointToArray(e9) {
    return [e9.x, e9.y, e9.z, e9.m];
  }
  vectorToPoint(e9, r7 = new _()) {
    return r7.x = e9[0], r7.y = e9[1], r7.z = e9[2], r7.m = e9[3], r7.spatialReference = this.spatialReference, r7;
  }
  arrayToPoint(e9, r7 = new _()) {
    return r7.x = e9[0], r7.y = e9[1], r7.z = e9[2], r7.m = e9[3], r7.spatialReference = this.spatialReference, r7;
  }
  vectorToDehydratedPoint(e9, r7) {
    if (e9) return r7 ??= {
      x: void 0,
      y: void 0,
      z: void 0,
      m: void 0,
      hasZ: void 0,
      hasM: void 0,
      spatialReference: void 0,
      type: "point"
    }, r7.x = e9[0], r7.y = e9[1], r7.z = e9[2], r7.m = e9[3], r7.hasZ = true, r7.hasM = true, r7.spatialReference = this.spatialReference, r7;
  }
  lerp(e9, r7, t8, a4) {
    return _3(a4, e9, r7, t8);
  }
  addDelta(e9, r7, t8, a4) {
    e9[0] += r7, e9[1] += t8, e9[2] += a4;
  }
  distance(e9, r7) {
    return x(V2(e9), V2(r7));
  }
  getZ(e9) {
    return e9[2];
  }
  hasZ() {
    return true;
  }
  getM(e9) {
    return e9[3];
  }
  hasM() {
    return true;
  }
  clone(e9) {
    return this._tag(e3(e9));
  }
  copy(e9, r7) {
    return a(r7, e9);
  }
  fromXYZ(e9, r7 = 0, t8 = 0) {
    return this._tag(r3(e9[0], e9[1], e9.length > 2 ? e9[2] : r7, t8));
  }
  toXYZ(e9, r7 = n()) {
    return o2(r7, e9[0], e9[1], e9[2]);
  }
  pointToXYZ(e9, r7 = n()) {
    return o2(r7, e9.x, e9.y, e9.z ?? 0);
  }
  equals(e9, r7) {
    return L2(e9, r7);
  }
  _tag(e9) {
    return e9;
  }
};
function V2(e9) {
  return e9;
}
function w2(e9) {
  return e9;
}
function P2(e9, r7, t8) {
  return e9 && r7 ? new z2(t8) : r7 ? new M(x2.M, t8) : e9 ? new M(x2.Z, t8) : new R(t8);
}

// ../../../node_modules/@arcgis/core/views/interactive/editGeometry/unnormalizationHelper.js
function e6(o4, r7) {
  if (!r7.supported) return;
  let e9 = 1 / 0, p3 = -1 / 0;
  const n5 = r7.upperBoundX - r7.lowerBoundX;
  o4.forEach((o5) => {
    let u4 = o5.pos[0];
    for (; u4 < r7.lowerBoundX; ) u4 += n5;
    for (; u4 > r7.upperBoundX; ) u4 -= n5;
    e9 = Math.min(e9, u4), p3 = Math.max(p3, u4), o5.pos[0] = u4;
  });
  const u3 = p3 - e9;
  n5 - u3 < u3 && o4.forEach((o5) => {
    o5.pos[0] < 0 && (o5.pos[0] += n5);
  });
}
function p(e9, p3) {
  const n5 = s(e9);
  return p3 === l.Global && n5 ? {
    supported: true,
    lowerBoundX: n5.valid[0],
    upperBoundX: n5.valid[1]
  } : {
    supported: false,
    lowerBoundX: null,
    upperBoundX: null
  };
}

// ../../../node_modules/@arcgis/core/views/interactive/editGeometry/EditGeometry.js
var h3 = class {
  constructor(e9) {
    this.component = e9, this.leftEdge = null, this.rightEdge = null, this.type = "vertex", this.index = null;
  }
  get pos() {
    return this._pos;
  }
  set pos(e9) {
    this._pos = e9, this.component.unnormalizeVertexPositions();
  }
};
var l2 = class {
  constructor(e9, t8, s3) {
    this.component = e9, this.leftVertex = t8, this.rightVertex = s3, this.type = "edge", t8.rightEdge = this, s3.leftEdge = this;
  }
};
var a3 = class {
  constructor(e9, t8) {
    this._spatialReference = e9, this._viewingMode = t8, this.vertices = [], this.edges = [], this.index = null;
  }
  unnormalizeVertexPositions() {
    this.vertices.length <= 1 || e6(this.vertices, p(this._spatialReference, this._viewingMode));
  }
  updateVertexIndex(e9, t8) {
    if (0 === this.vertices.length) return;
    const s3 = this.vertices[0];
    let i4 = null, r7 = e9, o4 = t8;
    do {
      i4 = r7, i4.index = o4++, r7 = i4.rightEdge ? i4.rightEdge.rightVertex : null;
    } while (null != r7 && r7 !== s3);
    i4.leftEdge && i4 !== this.vertices[this.vertices.length - 1] && this.swapVertices(this.vertices.indexOf(i4), this.vertices.length - 1);
  }
  getFirstVertex() {
    return this.vertices.at(0);
  }
  getLastVertex() {
    return this.vertices.at(-1);
  }
  isClosed() {
    return this.vertices.length > 2 && null !== this.vertices[0].leftEdge;
  }
  swapVertices(e9, t8) {
    const s3 = this.vertices[e9];
    this.vertices[e9] = this.vertices[t8], this.vertices[t8] = s3;
  }
  iterateVertices(e9) {
    if (0 === this.vertices.length) return;
    const t8 = this.vertices[0];
    let s3 = t8;
    do {
      e9(s3, s3.index), s3 = null != s3.rightEdge ? s3.rightEdge.rightVertex : null;
    } while (s3 !== t8 && null != s3);
  }
};
var p2 = class _p extends o {
  constructor(e9, t8) {
    super(), this.type = e9, this.coordinateHelper = t8, this._geometry = null, this._dirty = true, this.components = [];
  }
  get geometry() {
    if (this._dirty) {
      switch (this.type) {
        case "point":
          this._geometry = this._toPoint();
          break;
        case "polyline":
          this._geometry = this._toPolyline();
          break;
        case "polygon":
          this._geometry = this._toPolygon();
          break;
        case "mesh":
          break;
        default:
          n2(this.type);
      }
      this._dirty = false;
    }
    return this._geometry;
  }
  get spatialReference() {
    return this.coordinateHelper.spatialReference;
  }
  get allVertices() {
    return Array.from(this.iterateVertices());
  }
  *iterateVertices() {
    for (const e9 of this.components) for (const t8 of e9.vertices) yield t8;
  }
  notifyChanges(e9) {
    this._dirty = true, this.emit("change", e9);
  }
  _toPoint() {
    return 0 === this.components.length || 0 === this.components[0].vertices.length ? null : this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos);
  }
  _toPolyline() {
    const e9 = [], t8 = this.coordinateHelper.vectorToArray;
    for (const s3 of this.components) {
      if (s3.vertices.length < 1) continue;
      const i4 = [];
      let r7 = s3.vertices.find((e10) => null == e10.leftEdge);
      const o4 = r7;
      do {
        i4.push(t8(r7.pos)), r7 = r7.rightEdge ? r7.rightEdge.rightVertex : null;
      } while (r7 && r7 !== o4);
      e9.push(i4);
    }
    return new m({
      paths: e9,
      spatialReference: this.spatialReference,
      hasZ: this.coordinateHelper.hasZ(),
      hasM: this.coordinateHelper.hasM()
    });
  }
  _toPolygon() {
    const e9 = [], t8 = this.coordinateHelper.vectorToArray;
    for (const s3 of this.components) {
      if (s3.vertices.length < 1) continue;
      const i4 = [], r7 = s3.vertices[0];
      let o4 = r7;
      const n5 = o4;
      do {
        i4.push(t8(o4.pos)), o4 = null != o4.rightEdge ? o4.rightEdge.rightVertex : null;
      } while (o4 && o4 !== n5);
      s3.isClosed() && i4.push(t8(r7.pos)), e9.push(i4);
    }
    return new j3({
      rings: e9,
      spatialReference: this.spatialReference,
      hasZ: this.coordinateHelper.hasZ(),
      hasM: this.coordinateHelper.hasM()
    });
  }
  static fromGeometry(e9, t8) {
    const s3 = e9.spatialReference, i4 = P2(e9.hasZ, e9.hasM, s3), r7 = new _p(e9.type, i4);
    switch (e9.type) {
      case "polygon":
        g2(r7, e9, t8);
        break;
      case "polyline":
        d(r7, e9, t8);
        break;
      case "point":
        u2(r7, e9, t8);
        break;
      case "mesh":
        u2(r7, e9.anchor, t8), r7._geometry = e9, r7._dirty = false;
    }
    return r7;
  }
};
function g2(t8, s3, i4) {
  const r7 = s3.spatialReference, o4 = t8.coordinateHelper, n5 = s3.rings;
  for (let c2 = 0; c2 < n5.length; ++c2) {
    const s4 = n5[c2], p3 = new a3(r7, i4);
    p3.index = c2;
    const g3 = s4.length > 2 && h(s4[0], s4[s4.length - 1]), d2 = g3 ? s4.length - 1 : s4.length;
    for (let e9 = 0; e9 < d2; ++e9) {
      const t9 = o4.arrayToVector(s4[e9]), i5 = new h3(p3);
      p3.vertices.push(i5), i5.pos = t9, i5.index = e9;
    }
    const u3 = p3.vertices.length - 1;
    for (let e9 = 0; e9 < u3; ++e9) {
      const t9 = p3.vertices[e9], s5 = p3.vertices[e9 + 1], i5 = new l2(p3, t9, s5);
      p3.edges.push(i5);
    }
    if (g3) {
      const e9 = new l2(p3, p3.vertices[p3.vertices.length - 1], p3.vertices[0]);
      p3.edges.push(e9);
    }
    t8.components.push(p3);
  }
}
function d(e9, t8, s3) {
  const i4 = t8.spatialReference, r7 = e9.coordinateHelper, o4 = t8.paths;
  for (let n5 = 0; n5 < o4.length; ++n5) {
    const t9 = o4[n5], c2 = new a3(i4, s3);
    c2.index = n5;
    const p3 = t9.length;
    for (let e10 = 0; e10 < p3; ++e10) {
      const s4 = r7.arrayToVector(t9[e10]), i5 = new h3(c2);
      c2.vertices.push(i5), i5.pos = s4, i5.index = e10;
    }
    const g3 = c2.vertices.length - 1;
    for (let e10 = 0; e10 < g3; ++e10) {
      const t10 = c2.vertices[e10], s4 = c2.vertices[e10 + 1], i5 = new l2(c2, t10, s4);
      c2.edges.push(i5);
    }
    e9.components.push(c2);
  }
}
function u2(e9, t8, s3) {
  const i4 = t8.spatialReference, r7 = e9.coordinateHelper, o4 = new a3(i4, s3);
  o4.index = 0;
  const n5 = new h3(o4);
  n5.index = 0, n5.pos = r7.pointToVector(t8), o4.vertices.push(n5), e9.components.push(o4);
}
function f2(e9) {
  return "mesh" === e9.type;
}

// ../../../node_modules/@arcgis/core/views/interactive/editGeometry/interfaces.js
var E2;
!function(E4) {
  E4[E4.NEW_STEP = 0] = "NEW_STEP", E4[E4.ACCUMULATE_STEPS = 1] = "ACCUMULATE_STEPS";
}(E2 || (E2 = {}));

// ../../../node_modules/@arcgis/core/views/interactive/editGeometry/operations/AppendVertex.js
var i = class {
  constructor(e9, t8, i4) {
    this._editGeometry = e9, this._component = t8, this._pos = i4, this._addedVertex = null, this._originalEdge = null, this._left = null, this._right = null;
  }
  apply() {
    let i4 = "redo";
    null == this._addedVertex && (i4 = "apply", this._addedVertex = new h3(this._component));
    const s3 = this._component.getLastVertex();
    if (null == s3) this._component.vertices.push(this._addedVertex), this._addedVertex.pos = this._pos, this._addedVertex.index = 0;
    else {
      let e9 = null;
      s3.rightEdge && (this._originalEdge = s3.rightEdge, e9 = this._originalEdge.rightVertex, this._component.edges.splice(this._component.edges.indexOf(this._originalEdge), 1)), this._component.vertices.push(this._addedVertex), this._addedVertex.pos = this._pos, null == this._left && (this._left = new l2(this._component, s3, this._addedVertex)), this._component.edges.push(this._left), s3.rightEdge = this._left, null != this._originalEdge && null != e9 && (null == this._right && (this._right = new l2(this._component, this._addedVertex, e9)), this._component.edges.push(this._right), e9.leftEdge = this._right), this._component.updateVertexIndex(this._addedVertex, s3.index + 1);
    }
    this._editGeometry.notifyChanges({
      operation: i4,
      addedVertices: [this._addedVertex]
    });
  }
  undo() {
    null != this._addedVertex && (this._component.vertices.splice(this._component.vertices.indexOf(this._addedVertex), 1), null != this._left && (this._component.edges.splice(this._component.edges.indexOf(this._left), 1), this._left.leftVertex.rightEdge = null), null != this._right && (this._component.edges.splice(this._component.edges.indexOf(this._right), 1), this._right.rightVertex.leftEdge = null), null != this._originalEdge && (this._component.edges.push(this._originalEdge), this._originalEdge.leftVertex.rightEdge = this._originalEdge, this._originalEdge.rightVertex.leftEdge = this._originalEdge), null != this._left ? this._component.updateVertexIndex(this._left.leftVertex, this._left.leftVertex.index) : this._component.updateVertexIndex(this._addedVertex, 0), this._editGeometry.notifyChanges({
      operation: "undo",
      removedVertices: [this._addedVertex]
    }));
  }
  accumulate() {
    return false;
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/editGeometry/operations/UpdateVertices.js
var t2 = class _t {
  constructor(t8, e9, i4) {
    this._editGeometry = t8, this._vertices = e9, this.operation = i4, this._undone = false;
  }
  apply() {
    this._vertices.forEach((t8) => this.operation.apply(t8)), this._editGeometry.components.forEach((t8) => t8.unnormalizeVertexPositions()), this._editGeometry.notifyChanges({
      operation: this._undone ? "redo" : "apply",
      updatedVertices: this._vertices
    });
  }
  undo() {
    this._vertices.forEach((t8) => this.operation.undo(t8)), this._editGeometry.notifyChanges({
      operation: "undo",
      updatedVertices: this._vertices
    }), this._undone = true;
  }
  canAccumulate(t8) {
    if (this._undone || t8._vertices.length !== this._vertices.length) return false;
    for (let e9 = 0; e9 < t8._vertices.length; ++e9) if (t8._vertices[e9] !== this._vertices[e9]) return false;
    return this.operation.canAccumulate(t8.operation);
  }
  accumulate(e9) {
    return !!(e9 instanceof _t && this.canAccumulate(e9)) && (this._vertices.forEach((t8) => this.operation.accumulate(t8, e9.operation)), this.operation.accumulateParams(e9.operation), this._editGeometry.components.forEach((t8) => t8.unnormalizeVertexPositions()), this._editGeometry.notifyChanges({
      operation: "apply",
      updatedVertices: this._vertices
    }), true);
  }
};
var e7;
!function(t8) {
  t8[t8.CUMULATIVE = 0] = "CUMULATIVE", t8[t8.REPLACE = 1] = "REPLACE";
}(e7 || (e7 = {}));

// ../../../node_modules/@arcgis/core/views/interactive/editGeometry/operations/RemoveVertices.js
var t3 = class {
  constructor(e9, t8, r7 = 0) {
    this._editGeometry = e9, this._vertices = t8, this._minNumberOfVertices = r7, this.removedVertices = null;
  }
  apply() {
    let e9 = "redo";
    if (null == this.removedVertices) {
      const t8 = this.removedVertices = [];
      this._vertices.forEach((e10) => {
        const r7 = this._removeVertex(e10);
        null != r7 && t8.push(r7);
      }), e9 = "apply";
    } else this.removedVertices.forEach((e10) => {
      this._removeVertex(e10.removedVertex);
    });
    this._editGeometry.notifyChanges({
      operation: e9,
      removedVertices: this._vertices
    });
  }
  undo() {
    this.removedVertices?.forEach((e9) => {
      this._undoRemoveVertex(e9);
    }), this._editGeometry.notifyChanges({
      operation: "undo",
      addedVertices: this._vertices
    });
  }
  accumulate() {
    return false;
  }
  _removeVertex(t8) {
    const r7 = t8.component;
    if (r7.vertices.length <= this._minNumberOfVertices) return null;
    const i4 = {
      removedVertex: t8,
      createdEdge: null
    }, s3 = t8.leftEdge, d2 = t8.rightEdge;
    return r7.vertices.splice(r7.vertices.indexOf(t8), 1), s3 && (r7.edges.splice(r7.edges.indexOf(s3), 1), s3.leftVertex.rightEdge = null), d2 && (r7.edges.splice(r7.edges.indexOf(d2), 1), d2.rightVertex.leftEdge = null), 0 === t8.index && d2 && this._vertices.length > 0 && r7.swapVertices(r7.vertices.indexOf(d2.rightVertex), 0), s3 && d2 && (i4.createdEdge = new l2(r7, s3.leftVertex, d2.rightVertex), r7.edges.push(i4.createdEdge)), d2 && r7.updateVertexIndex(d2.rightVertex, d2.rightVertex.index - 1), i4;
  }
  _undoRemoveVertex(e9) {
    const t8 = e9.removedVertex, r7 = e9.removedVertex.component, i4 = t8.leftEdge, s3 = t8.rightEdge;
    e9.createdEdge && r7.edges.splice(r7.edges.indexOf(e9.createdEdge), 1), r7.vertices.push(t8), i4 && (r7.edges.push(i4), i4.leftVertex.rightEdge = i4), s3 && (r7.edges.push(s3), s3.rightVertex.leftEdge = s3), r7.updateVertexIndex(t8, t8.index);
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/editGeometry/operations/SplitEdge.js
var i2 = class {
  constructor(e9, t8, i4) {
    this._editGeometry = e9, this._edge = t8, this._t = i4, this.createdVertex = null, this._left = null, this._right = null;
  }
  apply() {
    let i4 = "redo";
    const r7 = this._edge, s3 = r7.component, d2 = r7.leftVertex, h4 = r7.rightVertex;
    s3.edges.splice(s3.edges.indexOf(r7), 1), null == this.createdVertex && (i4 = "apply", this.createdVertex = new h3(r7.component)), s3.vertices.push(this.createdVertex), this.createdVertex.pos = this._editGeometry.coordinateHelper.lerp(r7.leftVertex.pos, r7.rightVertex.pos, this._t, this._editGeometry.coordinateHelper.createVector()), null == this._left && (this._left = new l2(s3, d2, this.createdVertex)), this._left.leftVertex.leftEdge ? s3.edges.push(this._left) : s3.edges.unshift(this._left), d2.rightEdge = this._left, null == this._right && (this._right = new l2(s3, this.createdVertex, h4)), s3.edges.push(this._right), h4.leftEdge = this._right, s3.updateVertexIndex(this.createdVertex, d2.index + 1), this._editGeometry.notifyChanges({
      operation: i4,
      addedVertices: [this.createdVertex]
    });
  }
  undo() {
    if (null == this.createdVertex || null == this._left || null == this._right) return null;
    const e9 = this._edge, t8 = e9.component, i4 = this.createdVertex.leftEdge, r7 = this.createdVertex.rightEdge, s3 = i4?.leftVertex, d2 = r7?.rightVertex;
    t8.vertices.splice(t8.vertices.indexOf(this.createdVertex), 1), t8.edges.splice(t8.edges.indexOf(this._left), 1), t8.edges.splice(t8.edges.indexOf(this._right), 1), this._edge.leftVertex.leftEdge ? t8.edges.push(this._edge) : t8.edges.unshift(this._edge), s3 && (s3.rightEdge = e9), d2 && (d2.leftEdge = e9), s3 && t8.updateVertexIndex(s3, s3.index), this._editGeometry.notifyChanges({
      operation: "undo",
      removedVertices: [this.createdVertex]
    });
  }
  accumulate() {
    return false;
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/editGeometry/operations/SetVertexPosition.js
var t4 = class _t {
  constructor(t8, e9, i4) {
    this._editGeometry = t8, this._vertex = e9, this._pos = i4;
  }
  apply() {
    const t8 = null == this._originalPosition;
    t8 && (this._originalPosition = this._vertex.pos), this._apply(t8 ? "apply" : "redo");
  }
  undo() {
    this._vertex.pos = this._originalPosition, this._editGeometry.notifyChanges({
      operation: "undo",
      updatedVertices: [this._vertex]
    });
  }
  accumulate(e9) {
    return e9 instanceof _t && e9._vertex === this._vertex && (this._pos = e9._pos, this._apply("apply"), true);
  }
  _apply(t8) {
    this._vertex.pos = this._pos, this._editGeometry.components.forEach((t9) => t9.unnormalizeVertexPositions()), this._editGeometry.notifyChanges({
      operation: t8,
      updatedVertices: [this._vertex]
    });
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/editGeometry/operations/CloseComponent.js
var r6 = class {
  constructor(e9, t8) {
    this._editGeometry = e9, this._component = t8, this._createdEdge = null;
  }
  apply() {
    let e9 = "redo";
    if (null == this._createdEdge) {
      e9 = "apply";
      const r7 = this._component.getFirstVertex(), i4 = this._component.getLastVertex();
      if (this._component.isClosed() || this._component.vertices.length < 3 || null == r7 || null == i4) return;
      this._createdEdge = new l2(this._component, i4, r7);
    }
    this._createdEdge.leftVertex.rightEdge = this._createdEdge, this._createdEdge.rightVertex.leftEdge = this._createdEdge, this._component.edges.push(this._createdEdge), this._editGeometry.notifyChanges({
      operation: e9
    });
  }
  undo() {
    null != this._createdEdge && (L(this._component.edges, this._createdEdge), this._createdEdge.leftVertex.rightEdge = null, this._createdEdge.rightVertex.leftEdge = null, this._editGeometry.notifyChanges({
      operation: "undo"
    }));
  }
  accumulate() {
    return false;
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/editGeometry/operations/MoveMesh.js
var t5 = class _t {
  constructor(t8, e9, i4, s3) {
    this._editGeometry = t8, this.dx = e9, this.dy = i4, this.dz = s3, this._firstTime = true;
  }
  apply() {
    const t8 = this._firstTime ? "apply" : "redo";
    this._firstTime = false, this._apply(t8, this.dx, this.dy, this.dz);
  }
  undo() {
    this._apply("undo", -this.dx, -this.dy, -this.dz);
  }
  accumulate(e9) {
    const i4 = this._editGeometry.geometry;
    return e9 instanceof _t && e9._editGeometry.geometry === i4 && (this._apply("apply", e9.dx, e9.dy, e9.dz), this.dx += e9.dx, this.dy += e9.dy, this.dz += e9.dz, true);
  }
  _apply(t8, e9, i4, s3) {
    const o4 = this._editGeometry.geometry;
    o4.offset(e9, i4, s3);
    const d2 = this._editGeometry.components[0].getFirstVertex();
    if (!d2) return;
    const r7 = this._editGeometry.coordinateHelper;
    d2.pos = r7.pointToVector(o4.anchor), this._editGeometry.notifyChanges({
      operation: t8,
      updatedVertices: [d2]
    });
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/editGeometry/operations/MoveVertex.js
var t6 = class _t {
  constructor(t8, s3, d2, h4) {
    this._helper = t8, this.dx = s3, this.dy = d2, this.dz = h4;
  }
  _move(t8, s3, d2, h4) {
    this._helper.addDelta(t8.pos, s3, d2, h4);
  }
  apply(t8) {
    this._move(t8, this.dx, this.dy, this.dz);
  }
  undo(t8) {
    this._move(t8, -this.dx, -this.dy, -this.dz);
  }
  canAccumulate(s3) {
    return s3 instanceof _t;
  }
  accumulate(t8, s3) {
    this._move(t8, s3.dx, s3.dy, s3.dz);
  }
  accumulateParams(t8) {
    this.dx += t8.dx, this.dy += t8.dy, this.dz += t8.dz;
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/editGeometry/operations/OffsetEdgeVertex.js
var Y = class _Y {
  get plane() {
    return this._plane;
  }
  get requiresSplitEdgeLeft() {
    return !this._left.isOriginalDirection;
  }
  get requiresSplitEdgeRight() {
    return !this._right.isOriginalDirection;
  }
  get edgeDirection() {
    return this._edgeDirection;
  }
  constructor(t8, i4, e9, s3 = 0, n5 = y.IMMEDIATE) {
    this._helper = t8, this._planeType = i4, this._edge = e9, this.distance = s3, this._plane = E(), this._offsetPlane = E(), this._minDistance = -1 / 0, this._maxDistance = 1 / 0, this._selectedArrow = 1, n5 === y.IMMEDIATE && this._initialize();
  }
  _initialize() {
    this._initializeNeighbors(), this._initializePlane(), this._initializeDistanceConstraints();
  }
  _initializeNeighbors() {
    const t8 = this._toXYZ(this._edge.leftVertex.pos), i4 = this._toXYZ(this._edge.leftVertex.leftEdge?.leftVertex?.pos), e9 = this._toXYZ(this._edge.rightVertex.pos), s3 = this._toXYZ(this._edge.rightVertex.rightEdge?.rightVertex?.pos);
    this._edgeDirection = J(n(), t8, e9), i4 ? (this._left = this._computeNeighbor(t8, i4, this._edgeDirection), this._right = this._computeNeighbor(e9, s3, this._edgeDirection, this._left)) : (this._right = this._computeNeighbor(e9, s3, this._edgeDirection), this._left = this._computeNeighbor(t8, i4, this._edgeDirection, this._right));
  }
  _toXYZ(t8) {
    return null != t8 ? this._helper.toXYZ(t8) : null;
  }
  _pointToXYZ(t8) {
    return this._toXYZ(this._helper.pointToVector(t8));
  }
  _computeNeighbor(t8, i4, e9, s3) {
    const n5 = n();
    if (i4) {
      J(n5, t8, i4);
      const s4 = !this._passesBisectingAngleThreshold(n5, e9);
      return {
        start: t8,
        end: i4,
        direction: s4 ? this._bisectVectorsPerpendicular(e9, n5) : n5,
        isOriginalDirection: !s4
      };
    }
    return this._helper.hasZ() ? s3 && (_2(n5, e9, s3.direction), _2(n5, n5, e9), z(n5, n5), Math.sign(n5[1]) !== Math.sign(e9[0]) && g(n5, n5, -1)) : o2(n5, -e9[1], e9[0], 0), {
      start: t8,
      end: i4,
      direction: n5,
      isOriginalDirection: true
    };
  }
  _passesBisectingAngleThreshold(t8, i4) {
    const e9 = Math.abs(f(i4, t8));
    return e9 >= P3 && e9 <= Math.PI - P3;
  }
  _bisectVectorsPerpendicular(t8, i4) {
    const e9 = P(t8, i4) < 0 ? t8 : j(n(), t8), s3 = Math.abs(P(e9, i4));
    if (!(s3 < T2 || s3 > 1 - T2)) return this._bisectDirection(e9, i4);
    const n5 = _2(n(), e9, [0, 0, 1]);
    return z(n5, n5);
  }
  _bisectDirection(t8, i4) {
    const e9 = u(n(), t8, i4);
    return z(e9, e9);
  }
  _initializePlane() {
    const t8 = this._computeNormalDirection(this._left), i4 = this._computeNormalDirection(this._right);
    P(t8, i4) < 0 && j(i4, i4), j4(this._left.start, this._bisectDirection(t8, i4), this._plane);
  }
  _computeNormalDirection(t8) {
    const i4 = _2(n(), t8.direction, this._edgeDirection);
    z(i4, i4);
    const e9 = _2(n(), this._edgeDirection, i4);
    return this._planeType === Z.XY && (e9[2] = 0), z(e9, e9);
  }
  _initializeDistanceConstraints() {
    null == this._left.end || this.requiresSplitEdgeLeft || this._updateDistanceConstraint(V(this._plane, this._left.end)), null == this._right.end || this.requiresSplitEdgeRight || this._updateDistanceConstraint(V(this._plane, this._right.end)), this._updateIntersectDistanceConstraint(this._plane);
  }
  _updateDistanceConstraint(t8) {
    t8 <= 0 && (this._minDistance = Math.max(this._minDistance, t8)), t8 >= 0 && (this._maxDistance = Math.min(this._maxDistance, t8));
  }
  _updateIntersectDistanceConstraint(t8) {
    const r7 = F(t8), h4 = this._edgeDirection, o4 = u(n(), this._left.start, this._left.direction), a4 = u(n(), this._right.start, this._right.direction), c2 = this._pointInBasis2D(n4(), r7, h4, this._left.start), l3 = this._pointInBasis2D(n4(), r7, h4, o4), g3 = this._pointInBasis2D(n4(), r7, h4, this._right.start), d2 = this._pointInBasis2D(n4(), r7, h4, a4), [m3] = b({
      start: l3,
      end: c2,
      type: j6.LINE
    }, {
      start: d2,
      end: g3,
      type: j6.LINE
    });
    if (!m3) return;
    const f3 = e5(n4(), c2, l3);
    v(f3, f3);
    const E4 = e5(n4(), m3, l3), x3 = j5(f3, E4), I2 = u(n(), o4, g(n(), this._left.direction, -x3)), M2 = V(t8, I2);
    this._updateDistanceConstraint(M2);
  }
  _pointInBasis2D(t8, i4, e9, s3) {
    return t8[0] = a2(i4, s3), t8[1] = a2(e9, s3), t8;
  }
  _offset(t8, i4) {
    Number.isFinite(this._minDistance) && (i4 = Math.max(this._minDistance, i4)), Number.isFinite(this._maxDistance) && (i4 = Math.min(this._maxDistance, i4)), A2(this._offsetPlane, this._plane), this._offsetPlane[3] -= i4;
    const e9 = (t9, i5, e10) => null != i5 && w(this._offsetPlane, t9, u(n(), t9, i5), e10), s3 = n();
    (t8 === this._edge.leftVertex ? e9(this._left.start, this._left.direction, s3) : e9(this._right.start, this._right.direction, s3)) && this._helper.copy(this._helper.fromXYZ(s3, void 0, this._helper.getM(t8.pos)), t8.pos);
  }
  selectArrowFromStartPoint(t8) {
    this._selectedArrow = D(this.plane, this._pointToXYZ(t8)) ? 1 : -1;
  }
  get selectedArrow() {
    return this._selectedArrow;
  }
  signedDistanceToPoint(t8) {
    return V(this.plane, this._pointToXYZ(t8));
  }
  apply(t8) {
    this._offset(t8, this.distance);
  }
  undo(t8) {
    this._offset(t8, 0);
  }
  canAccumulate(t8) {
    return t8 instanceof _Y && this._edge.leftVertex.index === t8._edge.leftVertex.index && this._edge.rightVertex.index === t8._edge.rightVertex.index && this._edge.component === t8._edge.component && this._maybeEqualsVec3(this._left.direction, t8._left.direction) && this._maybeEqualsVec3(this._right.direction, t8._right.direction) && H(F(this._plane), F(t8._plane));
  }
  accumulate(t8, i4) {
    const e9 = this._plane[3] - i4._plane[3] + i4.distance;
    this._offset(t8, e9);
  }
  accumulateParams(t8) {
    const i4 = t8.distance - t8._plane[3];
    this.distance = i4 + this._plane[3];
  }
  clone() {
    const t8 = new _Y(this._helper, this._planeType, this._edge, this.distance, y.DEFERRED);
    return A2(t8._plane, this._plane), A2(t8._offsetPlane, this._offsetPlane), t8._maxDistance = this._maxDistance, t8._minDistance = this._minDistance, t8._left = this._cloneNeighbor(this._left), t8._right = this._cloneNeighbor(this._right), t8._edgeDirection = r2(n(), this._edgeDirection), t8;
  }
  _maybeEqualsVec3(t8, i4) {
    return null == t8 && null == i4 || null != t8 && null != i4 && H(t8, i4);
  }
  _cloneNeighbor({
    start: t8,
    end: i4,
    direction: e9,
    isOriginalDirection: s3
  }) {
    return {
      start: r2(n(), t8),
      end: null != i4 ? r2(n(), i4) : null,
      direction: r2(n(), e9),
      isOriginalDirection: s3
    };
  }
};
var P3 = h2(15);
var T2 = 1e-3;
var Z;
var y;
!function(t8) {
  t8[t8.XYZ = 0] = "XYZ", t8[t8.XY = 1] = "XY";
}(Z || (Z = {})), function(t8) {
  t8[t8.IMMEDIATE = 0] = "IMMEDIATE", t8[t8.DEFERRED = 1] = "DEFERRED";
}(y || (y = {}));

// ../../../node_modules/@arcgis/core/views/interactive/editGeometry/operations/RotateVertex.js
var e8 = class _e {
  constructor(t8, a4, e9 = e7.CUMULATIVE) {
    this.origin = t8, this.angle = a4, this._accumulationType = e9;
  }
  _rotate(t8, i4) {
    I(t8.pos, t8.pos, this.origin, i4);
  }
  apply(t8) {
    this._rotate(t8, this.angle);
  }
  undo(t8) {
    this._rotate(t8, -this.angle);
  }
  canAccumulate(a4) {
    return a4 instanceof _e && h(this.origin, a4.origin);
  }
  accumulate(t8, a4) {
    const e9 = a4._accumulationType === e7.REPLACE;
    this._rotate(t8, e9 ? a4.angle - this.angle : a4.angle);
  }
  accumulateParams(t8) {
    const a4 = t8._accumulationType === e7.REPLACE;
    this.angle = a4 ? t8.angle : this.angle + t8.angle;
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/editGeometry/operations/ScaleVertex.js
var c = class _c {
  constructor(t8, s3, c2, o4, r7 = e7.CUMULATIVE) {
    this.origin = t8, this.axis1 = s3, this.factor1 = c2, this.factor2 = o4, this._accumulationType = r7, this.axis2 = r4(s3[1], -s3[0]);
  }
  _scale(t8, i4, a4) {
    k(t8.pos, t8.pos, this.origin, this.axis1, i4), k(t8.pos, t8.pos, this.origin, this.axis2, a4);
  }
  apply(t8) {
    this._scale(t8, this.factor1, this.factor2);
  }
  undo(t8) {
    this._scale(t8, 1 / this.factor1, 1 / this.factor2);
  }
  canAccumulate(i4) {
    return i4 instanceof _c && h(this.origin, i4.origin) && h(this.axis1, i4.axis1);
  }
  accumulate(t8, i4) {
    i4._accumulationType === e7.REPLACE ? this._scale(t8, i4.factor1 / this.factor1, i4.factor2 / this.factor2) : this._scale(t8, i4.factor1, i4.factor2);
  }
  accumulateParams(t8) {
    const i4 = t8._accumulationType === e7.REPLACE;
    this.factor1 = i4 ? t8.factor1 : this.factor1 * t8.factor1, this.factor2 = i4 ? t8.factor2 : this.factor2 * t8.factor2;
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/editGeometry/operations/SetAllVertexPositions.js
var i3 = class _i {
  constructor(i4, t8) {
    this._editGeometry = i4, this._newPositions = t8;
  }
  apply() {
    const i4 = null == this._originalPositions ? "apply" : "redo";
    if (!this._originalPositions) {
      const i5 = this._editGeometry.coordinateHelper;
      this._originalPositions = this._editGeometry.allVertices.map((t8) => i5.clone(t8.pos));
    }
    this._apply(i4, this._newPositions);
  }
  undo() {
    this._originalPositions && this._apply("undo", this._originalPositions);
  }
  accumulate(t8) {
    return t8 instanceof _i && (this._newPositions = t8._newPositions, this._apply("apply", this._newPositions), true);
  }
  _apply(i4, t8) {
    const o4 = this._editGeometry.coordinateHelper, s3 = this._editGeometry.allVertices;
    for (let e9 = 0; e9 < s3.length; e9++) o4.copy(t8[e9], s3[e9].pos);
    this._editGeometry.components.forEach((i5) => i5.unnormalizeVertexPositions()), this._editGeometry.notifyChanges({
      operation: i4,
      updatedVertices: s3
    });
  }
};

// ../../../node_modules/@arcgis/core/views/interactive/editGeometry/operations/UndoGroup.js
var t7;
var o3 = Symbol();
var s2 = class {
  constructor(o4) {
    this._operations = [], this._closed = false, this[t7] = true, o4 && (this._operations = o4, this._closed = true);
  }
  close() {
    this._closed = true;
  }
  apply() {
    for (const t8 of this._operations) t8.apply();
  }
  undo() {
    for (let t8 = this._operations.length - 1; t8 >= 0; t8--) this._operations[t8].undo();
  }
  accumulate(t8) {
    if (this._closed) return false;
    const o4 = this._operations.length ? this._operations[this._operations.length - 1] : null;
    return o4 && o4.accumulate(t8) || (this._operations.push(t8), t8.apply()), true;
  }
};
t7 = o3;

// ../../../node_modules/@arcgis/core/views/interactive/editGeometry/EditGeometryOperations.js
var E3 = class _E extends o {
  constructor(t8, e9) {
    super(), this.data = t8, this.viewingMode = e9, this._undoStack = [], this._redoStack = [], this._listener = this.data.on("change", (t9) => {
      t9.addedVertices && this.emit("vertex-add", {
        type: "vertex-add",
        vertices: t9.addedVertices,
        operation: t9.operation
      }), t9.removedVertices && this.emit("vertex-remove", {
        type: "vertex-remove",
        vertices: t9.removedVertices,
        operation: t9.operation
      }), t9.updatedVertices && this.emit("vertex-update", {
        type: "vertex-update",
        vertices: t9.updatedVertices,
        operation: t9.operation
      });
    });
  }
  destroy() {
    this._listener.remove();
  }
  splitEdge(t8, e9) {
    return this._apply(new i2(this.data, t8, e9));
  }
  updateVertices(t8, e9, r7 = E2.ACCUMULATE_STEPS) {
    return this._apply(new t2(this.data, t8, e9), r7);
  }
  move(t8, e9, r7, s3 = E2.ACCUMULATE_STEPS) {
    return f2(this.data) ? this._apply(new t5(this.data, t8, e9, r7), s3) : this.moveVertices(this.data.allVertices, t8, e9, r7, s3);
  }
  moveVertices(t8, e9, r7, s3, o4 = E2.ACCUMULATE_STEPS) {
    return f2(this.data) ? this._apply(new t5(this.data, e9, r7, s3), o4) : this.updateVertices(t8, new t6(this.data.coordinateHelper, e9, r7, s3), o4);
  }
  scale(t8, e9, r7, s3, i4 = E2.ACCUMULATE_STEPS, o4 = e7.CUMULATIVE) {
    return this.scaleVertices(this.data.allVertices, t8, e9, r7, s3, i4, o4);
  }
  scaleVertices(t8, e9, r7, s3, i4, o4 = E2.ACCUMULATE_STEPS, n5 = e7.CUMULATIVE) {
    return this.updateVertices(t8, new c(e9, r7, s3, i4, n5), o4);
  }
  rotate(t8, e9, r7 = E2.ACCUMULATE_STEPS, s3 = e7.CUMULATIVE) {
    return this.rotateVertices(this.data.allVertices, t8, e9, r7, s3);
  }
  rotateVertices(t8, e9, r7, s3 = E2.ACCUMULATE_STEPS, i4 = e7.CUMULATIVE) {
    return this.updateVertices(t8, new e8(e9, r7, i4), s3);
  }
  removeVertices(t8) {
    return this._apply(new t3(this.data, t8, this._minNumVerticesPerType));
  }
  appendVertex(t8) {
    return 0 === this.data.components.length ? null : this._apply(new i(this.data, this.data.components[0], t8));
  }
  setVertexPosition(t8, e9) {
    return this._apply(new t4(this.data, t8, e9));
  }
  offsetEdge(t8, e9, r7, s3 = E2.ACCUMULATE_STEPS) {
    return this.updateVertices([e9.leftVertex, e9.rightVertex], new Y(this.data.coordinateHelper, t8, e9, r7), s3);
  }
  trySetGeometry(t8, e9 = E2.ACCUMULATE_STEPS) {
    const {
      data: r7
    } = this, {
      coordinateHelper: n5
    } = r7;
    if (r7.type !== t8.type || !r7.spatialReference.equals(t8.spatialReference) || n5.hasZ() !== t8.hasZ || n5.hasM() !== t8.hasM || !j2(r7.geometry, t8) || f2(r7)) return;
    const p3 = Array.from(p2.fromGeometry(t8, this.viewingMode).iterateVertices(), (t9) => t9.pos);
    return this.setVertexPositions(p3, e9);
  }
  setVertexPositions(t8, e9 = E2.ACCUMULATE_STEPS) {
    return this._apply(new i3(this.data, t8), e9);
  }
  createResetState() {
    if (f2(this.data)) return this._createResetStateMesh();
    const t8 = this.data.geometry.clone();
    return e(() => this.trySetGeometry(t8));
  }
  closeComponent(t8) {
    return this.data.components.includes(t8) ? this._apply(new r6(this.data, t8)) : null;
  }
  canRemoveVertex(t8) {
    return t8.vertices.length > this._minNumVerticesPerType;
  }
  createUndoGroup() {
    const t8 = new s2();
    return this._apply(t8), e(() => t8.close());
  }
  undo() {
    if (this._undoStack.length > 0) {
      const t8 = this._undoStack.pop();
      return t8.undo(), this._redoStack.push(t8), t8;
    }
    return null;
  }
  redo() {
    if (this._redoStack.length > 0) {
      const t8 = this._redoStack.pop();
      return t8.apply(), this._undoStack.push(t8), t8;
    }
    return null;
  }
  get canUndo() {
    return this._undoStack.length > 0;
  }
  get canRedo() {
    return this._redoStack.length > 0;
  }
  get lastOperation() {
    return this._undoStack.length > 0 ? this._undoStack[this._undoStack.length - 1] : null;
  }
  get _minNumVerticesPerType() {
    switch (this.data.type) {
      case "point":
        return 1;
      case "polyline":
        return 2;
      case "polygon":
        return 3;
      default:
        return 0;
    }
  }
  _apply(t8, e9 = E2.ACCUMULATE_STEPS) {
    return e9 !== E2.NEW_STEP && null != this.lastOperation && this.lastOperation.accumulate(t8) || (t8.apply(), this._undoStack.push(t8), this._redoStack = []), t8;
  }
  _createResetStateMesh() {
    if (!f2(this.data)) return e();
    const t8 = this.data.geometry, {
      vertexSpace: s3
    } = t8;
    if (s3.origin) {
      const i4 = t(s3.origin);
      return e(() => {
        t8.vertexSpace.origin = i4;
      });
    }
    const o4 = t8.vertexAttributes.clonePositional();
    return e(() => {
      t8.vertexAttributes = o4, t8.vertexAttributesChanged();
    });
  }
  static fromGeometry(t8, e9) {
    return new _E(p2.fromGeometry(t8, e9), e9);
  }
};

export {
  P2 as P,
  a3 as a,
  p2 as p,
  E2 as E,
  t2 as t,
  e7 as e,
  t6 as t2,
  Y,
  Z,
  e8 as e2,
  c,
  E3 as E2
};
//# sourceMappingURL=chunk-Q666VSL3.js.map
