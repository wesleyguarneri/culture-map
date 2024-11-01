import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  V,
  _
} from "./chunk-L6FG3WIC.js";
import {
  I,
  L
} from "./chunk-AVCKPV77.js";
import {
  l
} from "./chunk-GNCXYHNE.js";
import {
  y
} from "./chunk-A2FDYA6M.js";
import {
  e
} from "./chunk-YGAXDKHF.js";
import {
  e as e2
} from "./chunk-4TOSJLKR.js";
import {
  c,
  h,
  n as n2,
  s as s2
} from "./chunk-KOI252FF.js";
import {
  O,
  o,
  q,
  s,
  u
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/verticalOffsetUtils.js
var v = class {
  constructor() {
    this._transform = e(), this._transformInverse = new b({
      value: this._transform
    }, h, e), this._transformInverseTranspose = new b(this._transformInverse, s2, e), this._transformTranspose = new b({
      value: this._transform
    }, s2, e), this._transformInverseRotation = new b({
      value: this._transform
    }, y, e2);
  }
  _invalidateLazyTransforms() {
    this._transformInverse.invalidate(), this._transformInverseTranspose.invalidate(), this._transformTranspose.invalidate(), this._transformInverseRotation.invalidate();
  }
  get transform() {
    return this._transform;
  }
  get inverse() {
    return this._transformInverse.value;
  }
  get inverseTranspose() {
    return this._transformInverseTranspose.value;
  }
  get inverseRotation() {
    return this._transformInverseRotation.value;
  }
  get transpose() {
    return this._transformTranspose.value;
  }
  setTransformMatrix(t) {
    n2(this._transform, t);
  }
  multiplyTransform(t) {
    c(this._transform, this._transform, t);
  }
  set(t) {
    n2(this._transform, t), this._invalidateLazyTransforms();
  }
  setAndInvalidateLazyTransforms(t, s3) {
    this.setTransformMatrix(t), this.multiplyTransform(s3), this._invalidateLazyTransforms();
  }
};
var b = class {
  constructor(t, s3, r) {
    this._original = t, this._update = s3, this._dirty = true, this._transform = r();
  }
  invalidate() {
    this._dirty = true;
  }
  get value() {
    return this._dirty && (this._update(this._transform, this._original.value), this._dirty = false), this._transform;
  }
};
var T = class {
  constructor(t = 0) {
    this.offset = t, this.tmpVertex = n();
  }
  applyToVertex(t, s3, r) {
    const e3 = o(q2, t, s3, r), i = u(z, e3, this.localOrigin), o2 = this.offset / s(i);
    return q(this.tmpVertex, e3, i, o2), this.tmpVertex;
  }
  applyToAabb(t) {
    const s3 = A, r = R, e3 = B;
    for (let n3 = 0; n3 < 3; ++n3) s3[n3] = t[0 + n3] + this.localOrigin[n3], r[n3] = t[3 + n3] + this.localOrigin[n3], e3[n3] = s3[n3];
    const i = this.applyToVertex(s3[0], s3[1], s3[2]);
    for (let n3 = 0; n3 < 3; ++n3) t[n3] = i[n3], t[n3 + 3] = i[n3];
    const o2 = (s4) => {
      const r2 = this.applyToVertex(s4[0], s4[1], s4[2]);
      for (let e4 = 0; e4 < 3; ++e4) t[e4] = Math.min(t[e4], r2[e4]), t[e4 + 3] = Math.max(t[e4 + 3], r2[e4]);
    };
    for (let n3 = 1; n3 < 8; ++n3) {
      for (let t2 = 0; t2 < 3; ++t2) e3[t2] = n3 & 1 << t2 ? r[t2] : s3[t2];
      o2(e3);
    }
    let a = 0;
    for (let n3 = 0; n3 < 3; ++n3) {
      s3[n3] * r[n3] < 0 && (a |= 1 << n3);
    }
    if (0 !== a && 7 !== a) {
      for (let n3 = 0; n3 < 8; ++n3) if (!(a & n3)) {
        for (let t2 = 0; t2 < 3; ++t2) e3[t2] = a & 1 << t2 ? 0 : n3 & 1 << t2 ? s3[t2] : r[t2];
        o2(e3);
      }
    }
    for (let n3 = 0; n3 < 3; ++n3) t[n3] -= this.localOrigin[n3], t[n3 + 3] -= this.localOrigin[n3];
    return t;
  }
};
var x = class {
  constructor(t = 0) {
    this.componentLocalOriginLength = 0, this._totalOffset = 0, this._offset = 0, this._tmpVertex = n(), this._tmpMbs = _(), this._tmpObb = new I(), this._resetOffset(t);
  }
  _resetOffset(t) {
    this._offset = t, this._totalOffset = t;
  }
  set offset(t) {
    this._resetOffset(t);
  }
  get offset() {
    return this._offset;
  }
  set componentOffset(t) {
    this._totalOffset = this._offset + t;
  }
  set localOrigin(t) {
    this.componentLocalOriginLength = s(t);
  }
  applyToVertex(t, s3, r) {
    const e3 = o(q2, t, s3, r), i = o(z, t, s3, r + this.componentLocalOriginLength), o2 = this._totalOffset / s(i);
    return q(this._tmpVertex, e3, i, o2), this._tmpVertex;
  }
  applyToAabb(t) {
    const s3 = this.componentLocalOriginLength, r = t[0], e3 = t[1], i = t[2] + s3, o2 = t[3], a = t[4], n3 = t[5] + s3, h2 = Math.abs(r), f = Math.abs(e3), l2 = Math.abs(i), m = Math.abs(o2), p = Math.abs(a), c2 = Math.abs(n3), _2 = 0.5 * (1 + Math.sign(r * o2)) * Math.min(h2, m), u2 = 0.5 * (1 + Math.sign(e3 * a)) * Math.min(f, p), g = 0.5 * (1 + Math.sign(i * n3)) * Math.min(l2, c2), M = Math.max(h2, m), v2 = Math.max(f, p), b2 = Math.max(l2, c2), T2 = Math.sqrt(_2 * _2 + u2 * u2 + g * g), x2 = Math.sign(h2 + r), O3 = Math.sign(f + e3), y3 = Math.sign(l2 + i), d2 = Math.sign(m + o2), V3 = Math.sign(p + a), L3 = Math.sign(c2 + n3), j2 = this._totalOffset;
    if (T2 < j2) return t[0] -= (1 - x2) * j2, t[1] -= (1 - O3) * j2, t[2] -= (1 - y3) * j2, t[3] += d2 * j2, t[4] += V3 * j2, t[5] += L3 * j2, t;
    const I3 = j2 / Math.sqrt(M * M + v2 * v2 + b2 * b2), w2 = j2 / T2, q3 = w2 - I3, z2 = -q3;
    return t[0] += r * (x2 * z2 + w2), t[1] += e3 * (O3 * z2 + w2), t[2] += i * (y3 * z2 + w2), t[3] += o2 * (d2 * q3 + I3), t[4] += a * (V3 * q3 + I3), t[5] += n3 * (L3 * q3 + I3), t;
  }
  applyToMbs(t) {
    const s3 = s(V(t)), r = this._totalOffset / s3;
    return q(V(this._tmpMbs), V(t), V(t), r), this._tmpMbs[3] = t[3] + t[3] * this._totalOffset / s3, this._tmpMbs;
  }
  applyToObb(t) {
    return L(t, this._totalOffset, this._totalOffset, l.Global, this._tmpObb), this._tmpObb;
  }
};
var O2 = class {
  constructor(t = 0) {
    this.offset = t, this.sphere = _(), this.tmpVertex = n();
  }
  applyToVertex(t, s3, r) {
    const e3 = this.objectTransform.transform, i = o(q2, t, s3, r), o2 = O(i, i, e3), a = this.offset / s(o2);
    q(o2, o2, o2, a);
    const h2 = this.objectTransform.inverse;
    return O(this.tmpVertex, o2, h2), this.tmpVertex;
  }
  applyToMinMax(t, s3) {
    const r = this.offset / s(t);
    q(t, t, t, r);
    const e3 = this.offset / s(s3);
    q(s3, s3, s3, e3);
  }
  applyToAabb(t) {
    const s3 = this.offset / Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
    t[0] += t[0] * s3, t[1] += t[1] * s3, t[2] += t[2] * s3;
    const r = this.offset / Math.sqrt(t[3] * t[3] + t[4] * t[4] + t[5] * t[5]);
    return t[3] += t[3] * r, t[4] += t[4] * r, t[5] += t[5] * r, t;
  }
  applyToBoundingSphere(t) {
    const s3 = s(V(t)), r = this.offset / s3;
    return q(V(this.sphere), V(t), V(t), r), this.sphere[3] = t[3] + t[3] * this.offset / s3, this.sphere;
  }
};
var y2 = new O2();
function d(t) {
  return null != t ? (y2.offset = t, y2) : null;
}
var V2 = new x();
function L2(t) {
  return null != t ? (V2.offset = t, V2) : null;
}
var j = new T();
function I2(t) {
  return null != t ? (j.offset = t, j) : null;
}
var w = "terrain";
var q2 = n();
var z = n();
var A = n();
var R = n();
var B = n();

export {
  v,
  d,
  L2 as L,
  I2 as I,
  w
};
//# sourceMappingURL=chunk-N4FQBAT2.js.map
