import {
  o
} from "./chunk-IN6BQCWS.js";
import {
  En,
  G as G2,
  n as n2
} from "./chunk-OGZAGPIO.js";
import {
  j,
  m2 as m,
  u
} from "./chunk-T6GCUITX.js";
import {
  w as w2
} from "./chunk-NYQ5CYNR.js";
import {
  _ as _2
} from "./chunk-O7UDKFOW.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import {
  A2 as A,
  C,
  G,
  N,
  O2 as O,
  _,
  d,
  k,
  r,
  w
} from "./chunk-JJS7PR2U.js";
import {
  s as s4
} from "./chunk-BXQGM56A.js";
import {
  s
} from "./chunk-DDYVXG4F.js";
import {
  D,
  s as s3
} from "./chunk-HJY2YILU.js";
import {
  s2
} from "./chunk-WYIDUUN2.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/geometry/projection/projectXYZToVector.js
function t(r2, t3, f2, c, i, m2) {
  return e[0] = r2, e[1] = t3, e[2] = f2, n2(e, c, 0, i, m2, 0, 1);
}
var e = n();

// ../../../node_modules/@arcgis/core/geometry/support/GeographicTransformationStep.js
var s5 = 0;
var t2 = class _t {
  static fromGE(s7) {
    const i = new _t();
    return i._wkt = s7.wkt, i._wkid = s7.wkid, i._isInverse = s7.isInverse, i;
  }
  constructor(t3) {
    this.uid = s5++, t3 ? (this._wkt = null != t3.wkt ? t3.wkt : null, this._wkid = null != t3.wkid ? t3.wkid : -1, this._isInverse = null != t3.isInverse && true === t3.isInverse) : (this._wkt = null, this._wkid = -1, this._isInverse = false);
  }
  get wkt() {
    return this._wkt;
  }
  set wkt(t3) {
    this._wkt = t3, this.uid = s5++;
  }
  get wkid() {
    return this._wkid;
  }
  set wkid(t3) {
    this._wkid = t3, this.uid = s5++;
  }
  get isInverse() {
    return this._isInverse;
  }
  set isInverse(t3) {
    this._isInverse = t3, this.uid = s5++;
  }
  getInverse() {
    const s7 = new _t();
    return s7._wkt = this.wkt, s7._wkid = this._wkid, s7._isInverse = !this.isInverse, s7;
  }
};

// ../../../node_modules/@arcgis/core/geometry/support/GeographicTransformation.js
var s6 = class _s {
  static cacheKey(t3, s7) {
    return [t3.wkid?.toString() ?? "-1", t3.wkt?.toString() ?? "", t3.wkt2?.toString() ?? "", s7.wkid?.toString() ?? "-1", s7.wkt?.toString() ?? "", s7.wkt2?.toString() ?? ""].join();
  }
  static fromGE(e2) {
    const i = new _s();
    let n3 = "";
    for (const s7 of e2.steps) {
      const e3 = t2.fromGE(s7);
      i.steps.push(e3), n3 += e3.uid.toString() + ",";
    }
    return i._cachedProjection = {}, i._gtlistentry = null, i._chain = n3, i;
  }
  constructor(s7) {
    if (this.steps = [], this._cachedProjection = {}, this._chain = "", this._gtlistentry = null, s7?.steps) for (const e2 of s7.steps) e2 instanceof t2 ? this.steps.push(e2) : this.steps.push(new t2({
      wkid: e2.wkid,
      wkt: e2.wkt,
      isInverse: e2.isInverse
    }));
  }
  getInverse() {
    const t3 = new _s();
    t3.steps = [];
    for (let s7 = this.steps.length - 1; s7 >= 0; s7--) {
      const e2 = this.steps[s7];
      t3.steps.push(e2.getInverse());
    }
    return t3;
  }
  getGTListEntry() {
    let t3 = "";
    for (const s7 of this.steps) t3 += s7.uid.toString() + ",";
    return t3 !== this._chain && (this._gtlistentry = null, this._cachedProjection = {}, this._chain = t3), this._gtlistentry;
  }
  assignCachedGe(t3, e2, i) {
    this._cachedProjection[_s.cacheKey(t3, e2)] = i;
  }
  getCachedGeTransformation(t3, e2) {
    let i = "";
    for (const s7 of this.steps) i += s7.uid.toString() + ",";
    i !== this._chain && (this._gtlistentry = null, this._cachedProjection = {}, this._chain = i);
    const n3 = this._cachedProjection[_s.cacheKey(t3, e2)];
    return void 0 === n3 ? null : n3;
  }
};

// ../../../node_modules/@arcgis/core/geometry/projection.js
var G3 = null;
var P = null;
var b = null;
var E = {};
var T = new s4();
function _3() {
  return !!G3 && r();
}
function k2() {
  return !!_3() || (s(T), W(), false);
}
function B(n3, e2) {
  return !n3 || !e2 || J(n3, e2) || k2();
}
function U(n3, e2) {
  return !J(n3, e2) && !_3();
}
function W(n3) {
  return null == b && (b = Promise.all([_(), import("./geometryEngineBase-7VB4RZUB.js").then((n4) => n4.g), import("./hydrated-JJZ7EL25.js")])), b.then(([, r2, {
    hydratedAdapter: t3
  }]) => {
    s3(n3), P = t3, G3 = r2.default, G3._enableProjection(d), T.notify();
  });
}
function K(n3, e2, r2 = null, t3 = null) {
  return Array.isArray(n3) ? 0 === n3.length ? [] : O2(P, n3, n3[0].spatialReference, e2, r2, t3) : O2(P, [n3], n3.spatialReference, e2, r2, t3)[0];
}
function O2(n3, e2, r2, t3, l = null, o2 = null) {
  if (null == r2 || null == t3) return e2;
  if (J(r2, t3, l)) return e2.map((n4) => Q(n4, r2, t3));
  if (null == l && A(r2)) {
    return e2.map((n4) => Q(n4, r2, f.WGS84)).map((n4) => H(n4, t3));
  }
  if (null == l && A(t3)) {
    return e2.map((n4) => H(n4, f.WGS84)).map((n4) => Q(n4, f.WGS84, t3));
  }
  if (null == l) {
    const n4 = s6.cacheKey(r2, t3);
    void 0 !== E[n4] ? l = E[n4] : (null == (l = Y(r2, t3, void 0)) && (l = new s6()), E[n4] = l);
  }
  if (null == G3 || null == n3) throw new C2();
  return null != o2 ? G3._project(n3, e2, r2, t3, l, o2) : G3._project(n3, e2, r2, t3, l);
}
function V(n3, e2) {
  const r2 = X([n3], e2);
  return null != r2.pending ? {
    pending: r2.pending,
    geometry: null
  } : null != r2.geometries ? {
    pending: null,
    geometry: r2.geometries[0]
  } : {
    pending: null,
    geometry: null
  };
}
function X(n3, e2) {
  if (!_3()) {
    for (const r2 of n3) if (null != r2 && !G(r2.spatialReference, e2) && N(r2.spatialReference) && N(e2) && !J(r2.spatialReference, e2)) return s(T), {
      pending: W(),
      geometries: null
    };
  }
  return {
    pending: null,
    geometries: n3.map((n4) => null == n4 ? null : G(n4.spatialReference, e2) ? n4 : N(n4.spatialReference) && N(e2) ? H(n4, e2) : null)
  };
}
function Y(n3, e2, r2 = null) {
  if (null == n3 || null == e2) return null;
  if (null == G3 || null == P) throw new C2();
  const t3 = G3._getTransformation(P, n3, e2, r2, r2?.spatialReference);
  return null !== t3 ? s6.fromGE(t3) : null;
}
function q(n3, e2, r2 = null) {
  if (null == G3 || null == P) throw new C2();
  const t3 = G3._getTransformationBySuitability(P, n3, e2, r2, r2?.spatialReference);
  if (null !== t3) {
    const n4 = [];
    for (const e3 of t3) n4.push(s6.fromGE(e3));
    return n4;
  }
  return [];
}
var C2 = class extends s2 {
  constructor() {
    super("projection:not-loaded", "projection engine not fully loaded yet, please call load()");
  }
};
function D2() {
  G3 = null, P = null, b = null, E = {};
}
var F = {
  get loadPromise() {
    return b;
  }
};
function H(n3, e2) {
  try {
    const r2 = K(n3, e2);
    if (null == r2) return null;
    "xmin" in n3 && "xmin" in r2 && (r2.zmin = n3.zmin, r2.zmax = n3.zmax);
    const t3 = o(r2.type, n3.spatialReference, e2);
    return null != t3 && t3(r2), r2;
  } catch (r2) {
    if (!(r2 instanceof C2)) throw r2;
    return null;
  }
}
function I(n3, e2, r2) {
  return __async(this, null, function* () {
    const t3 = n3.spatialReference;
    return null != t3 && null != e2 && (yield N2(t3, e2, null, r2)), H(n3, e2);
  });
}
function J(n3, e2, r2) {
  return !r2 && (!!G(n3, e2) || N(n3) && N(e2) && !!G2(n3, e2, En));
}
function L(n3, e2) {
  if (G(n3, e2)) return true;
  if (!N(n3) || !N(e2)) return false;
  const r2 = C(n3) || w(n3) || k(n3), t3 = C(e2) || w(e2) || k(e2);
  return r2 && t3;
}
function N2(n3, e2, t3, l) {
  return __async(this, null, function* () {
    if (_3()) return D(l);
    if (Array.isArray(n3)) {
      for (const {
        source: r2,
        dest: o2,
        geographicTransformation: i
      } of n3) if (r2 && o2 && !J(r2, o2, i)) return W(l);
    } else if (n3 && e2 && !J(n3, e2, t3)) return W(l);
    return D(l);
  });
}
function Q(n3, e2, r2) {
  return n3 ? "x" in n3 ? nn(n3, e2, new _2(), r2, 0) : "xmin" in n3 ? an(n3, e2, new w2(), r2, 0) : "rings" in n3 ? un(n3, e2, new j(), r2, 0) : "paths" in n3 ? ln(n3, e2, new m(), r2, 0) : "points" in n3 ? rn(n3, e2, new u(), r2, 0) : null : null;
}
function $(n3, e2, r2 = e2.spatialReference, t3 = 0) {
  return null != r2 && null != n3.spatialReference && null != nn(n3, n3.spatialReference, e2, r2, t3);
}
function nn(n3, e2, r2, t3, l) {
  fn[0] = n3.x, fn[1] = n3.y;
  const o2 = n3.z;
  return fn[2] = void 0 !== o2 ? o2 : l, n2(fn, e2, 0, fn, t3, 0, 1) ? (r2.x = fn[0], r2.y = fn[1], r2.spatialReference = t3, void 0 !== o2 || O(t3) ? (r2.z = fn[2], r2.hasZ = true) : (r2.z = void 0, r2.hasZ = false), void 0 === n3.m ? (r2.m = void 0, r2.hasM = false) : (r2.m = n3.m, r2.hasM = true), r2) : null;
}
function en(n3, e2, r2 = e2.spatialReference, t3 = 0) {
  return null != n3.spatialReference && null != r2 && null != rn(n3, n3.spatialReference, e2, r2, t3);
}
function rn(n3, e2, r2, t3, l) {
  const {
    points: o2,
    hasZ: i,
    hasM: s7
  } = n3, a = [], c = o2.length, f2 = [];
  for (const u2 of o2) f2.push(u2[0], u2[1], i ? u2[2] : l);
  if (!n2(f2, e2, 0, f2, t3, 0, c)) return null;
  const p = i || O(t3);
  for (let u2 = 0; u2 < c; ++u2) {
    const n4 = 3 * u2, e3 = f2[n4], r3 = f2[n4 + 1];
    p && s7 ? a.push([e3, r3, f2[n4 + 2], o2[u2][3]]) : p ? a.push([e3, r3, f2[n4 + 2]]) : s7 ? a.push([e3, r3, o2[u2][2]]) : a.push([e3, r3]);
  }
  return r2.points = a, r2.spatialReference = t3, r2.hasZ = i, r2.hasM = s7, r2;
}
function tn(n3, e2, r2 = e2.spatialReference, t3 = 0) {
  return null != n3.spatialReference && null != r2 && null != ln(n3, n3.spatialReference, e2, r2, t3);
}
function ln(n3, e2, r2, t3, l) {
  const {
    paths: o2,
    hasZ: i,
    hasM: s7
  } = n3, a = [];
  if (!cn(o2, i ?? false, s7 ?? false, e2, a, t3, l)) return null;
  const c = i || O(t3);
  return r2.paths = a, r2.spatialReference = t3, r2.hasZ = c, r2.hasM = s7, r2;
}
function on(n3, e2, r2 = e2.spatialReference, t3 = 0) {
  return null != n3.spatialReference && null != r2 && null != un(n3, n3.spatialReference, e2, r2, t3);
}
function un(n3, e2, r2, t3, l) {
  const {
    rings: o2,
    hasZ: i,
    hasM: s7
  } = n3, a = [];
  if (!cn(o2, i ?? false, s7 ?? false, e2, a, t3, l)) return null;
  const c = i || O(t3);
  return r2.rings = a, r2.spatialReference = t3, r2.hasZ = c, r2.hasM = s7, r2;
}
function sn(n3, e2, r2 = e2.spatialReference, t3 = 0) {
  return null != n3.spatialReference && null != r2 && null != an(n3, n3.spatialReference, e2, r2, t3);
}
function an(n3, e2, r2, t3, l) {
  const {
    xmin: o2,
    ymin: i,
    xmax: s7,
    ymax: a,
    hasZ: c,
    hasM: f2
  } = n3, p = c ? n3.zmin : l;
  if (!t(o2, i, p, e2, fn, t3)) return null;
  const m2 = c || O(t3);
  r2.xmin = fn[0], r2.ymin = fn[1], m2 && (r2.zmin = fn[2]);
  const h = c ? n3.zmax : l;
  return t(s7, a, h, e2, fn, t3) ? (r2.xmax = fn[0], r2.ymax = fn[1], m2 && (r2.zmax = fn[2]), f2 && (r2.mmin = n3.mmin, r2.mmax = n3.mmax), r2.spatialReference = t3, r2) : null;
}
function cn(n3, e2, r2, t3, l, o2, i = 0) {
  const s7 = new Array();
  for (const u2 of n3) for (const n4 of u2) s7.push(n4[0], n4[1], e2 ? n4[2] : i);
  if (!n2(s7, t3, 0, s7, o2, 0, s7.length / 3)) return false;
  let a = 0;
  l.length = 0;
  const c = e2 || O(o2);
  for (const u2 of n3) {
    const n4 = new Array();
    for (const e3 of u2) c && r2 ? n4.push([s7[a++], s7[a++], s7[a++], e3[3]]) : c ? n4.push([s7[a++], s7[a++], s7[a++]]) : r2 ? (n4.push([s7[a++], s7[a++], e3[2]]), a++) : (n4.push([s7[a++], s7[a++]]), a++);
    l.push(n4);
  }
  return true;
}
var fn = n();

export {
  t,
  s6 as s,
  _3 as _,
  k2 as k,
  B,
  U,
  W,
  K,
  O2 as O,
  V,
  X,
  Y,
  q,
  D2 as D,
  F,
  H,
  I,
  J,
  L,
  N2 as N,
  Q,
  $,
  en,
  tn,
  on,
  sn
};
//# sourceMappingURL=chunk-DUTZNK67.js.map
