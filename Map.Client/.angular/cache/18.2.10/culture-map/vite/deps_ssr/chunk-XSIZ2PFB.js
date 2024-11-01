import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n as n2
} from "./chunk-QUICBKHP.js";
import {
  Z2 as Z,
  c as c2,
  m as m2,
  r as r4,
  x,
  y as y2,
  y2 as y3
} from "./chunk-6TDXQOP5.js";
import {
  l
} from "./chunk-DMKOSZH7.js";
import {
  t
} from "./chunk-A2K6JP2G.js";
import {
  N
} from "./chunk-REOQMQ44.js";
import {
  B2 as B,
  E2 as E,
  Fe,
  He,
  Me,
  Ne,
  Oe,
  P,
  Q,
  U,
  X,
  Ze,
  a as a2,
  ae,
  ee,
  ge,
  me,
  r as r3,
  te,
  xe
} from "./chunk-M633ZBOT.js";
import {
  A,
  B as B2,
  C as C2,
  D,
  E as E2,
  F,
  H,
  J,
  K,
  L,
  M,
  N as N2,
  O,
  P as P2,
  R,
  S,
  T,
  U as U2,
  V,
  W as W2,
  b,
  d,
  g,
  h,
  j as j2,
  k,
  m as m3,
  p,
  v,
  w as w2,
  x as x2,
  y as y4
} from "./chunk-IS3LAXOO.js";
import {
  y
} from "./chunk-4DSGTDZJ.js";
import {
  j,
  m2 as m,
  u
} from "./chunk-MRPCXIVS.js";
import {
  a,
  c,
  r as r2
} from "./chunk-ABIG6PT5.js";
import {
  C
} from "./chunk-7QV7DHWN.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import {
  _,
  n
} from "./chunk-TIRJMGGG.js";
import {
  W2 as W
} from "./chunk-6SSA7P3A.js";
import {
  r2 as r
} from "./chunk-XLEC46FY.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/arcade/functions/geomasync.js
function Fn(t2) {
  return 0 === r.indexOf("4.") ? j.fromExtent(t2) : new j({
    spatialReference: t2.spatialReference,
    rings: [[[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]]
  });
}
function Rn(n3, t2, e) {
  if (ae(n3, 2, 2, t2, e), n3[0] instanceof n && n3[1] instanceof n) ;
  else if (n3[0] instanceof n && null === n3[1]) ;
  else if (n3[1] instanceof n && null === n3[0]) ;
  else if (null !== n3[0] || null !== n3[1]) throw new a2(t2, r3.InvalidParameter, e);
}
function jn(n3, t2) {
  return __async(this, null, function* () {
    if ("polygon" !== n3.type && "polyline" !== n3.type && "extent" !== n3.type) return 0;
    let e = 1;
    if (n3.spatialReference.vcsWkid || n3.spatialReference.latestVcsWkid) {
      e = c2(n3.spatialReference) / W(n3.spatialReference);
    }
    let r5 = 0;
    if ("polyline" === n3.type) for (const a3 of n3.paths) for (let n4 = 1; n4 < a3.length; n4++) r5 += r4(a3[n4], a3[n4 - 1], e);
    else if ("polygon" === n3.type) for (const a3 of n3.rings) {
      for (let n4 = 1; n4 < a3.length; n4++) r5 += r4(a3[n4], a3[n4 - 1], e);
      (a3[0][0] !== a3[a3.length - 1][0] || a3[0][1] !== a3[a3.length - 1][1] || void 0 !== a3[0][2] && a3[0][2] !== a3[a3.length - 1][2]) && (r5 += r4(a3[0], a3[a3.length - 1], e));
    }
    else "extent" === n3.type && (r5 += 2 * r4([n3.xmin, n3.ymin, 0], [n3.xmax, n3.ymin, 0], e), r5 += 2 * r4([n3.xmin, n3.ymin, 0], [n3.xmin, n3.ymax, 0], e), r5 *= 2, r5 += 4 * Math.abs(P(n3.zmax, 0) * e - P(n3.zmin, 0) * e));
    const i = new m({
      hasZ: false,
      hasM: false,
      spatialReference: n3.spatialReference,
      paths: [[0, 0], [0, r5]]
    });
    return F(i, t2);
  });
}
function xn(n3) {
  "async" === n3.mode && (n3.functions.disjoint = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, r5, i) => (Rn(i = Fe(i), t2, e), null === i[0] || null === i[1] || A(i[0], i[1])));
  }, n3.functions.intersects = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, r5, i) => (Rn(i = Fe(i), t2, e), null !== i[0] && null !== i[1] && h(i[0], i[1])));
  }, n3.functions.touches = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, r5, i) => (Rn(i = Fe(i), t2, e), null !== i[0] && null !== i[1] && S(i[0], i[1])));
  }, n3.functions.crosses = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, r5, i) => (Rn(i = Fe(i), t2, e), null !== i[0] && null !== i[1] && m3(i[0], i[1])));
  }, n3.functions.within = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, r5, i) => (Rn(i = Fe(i), t2, e), null !== i[0] && null !== i[1] && x2(i[0], i[1])));
  }, n3.functions.contains = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, r5, i) => (Rn(i = Fe(i), t2, e), null !== i[0] && null !== i[1] && p(i[0], i[1])));
  }, n3.functions.overlaps = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, r5, i) => (Rn(i = Fe(i), t2, e), null !== i[0] && null !== i[1] && O(i[0], i[1])));
  }, n3.functions.equals = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, r5, i) => (ae(i, 2, 2, t2, e), i[0] === i[1] || (i[0] instanceof n && i[1] instanceof n ? g(i[0], i[1]) : (X(i[0]) && X(i[1]) || !!(te(i[0]) && te(i[1]) || ee(i[0]) && ee(i[1]))) && i[0].equals(i[1]))));
  }, n3.functions.relate = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, a3, o) => {
      if (o = Fe(o), ae(o, 3, 3, t2, e), o[0] instanceof n && o[1] instanceof n) return R(o[0], o[1], me(o[2]));
      if (o[0] instanceof n && null === o[1]) return false;
      if (o[1] instanceof n && null === o[0]) return false;
      if (null === o[0] && null === o[1]) return false;
      throw new a2(t2, r3.InvalidParameter, e);
    });
  }, n3.functions.intersection = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, r5, i) => (Rn(i = Fe(i), t2, e), null === i[0] || null === i[1] ? null : D(i[0], i[1])));
  }, n3.functions.union = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, o, l2) => {
      const u2 = [];
      if (0 === (l2 = Fe(l2)).length) throw new a2(t2, r3.WrongNumberOfParameters, e);
      if (1 === l2.length) {
        if (U(l2[0])) {
          const n5 = Fe(l2[0]);
          for (let a3 = 0; a3 < n5.length; a3++) if (null !== n5[a3]) {
            if (!(n5[a3] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
            u2.push(n5[a3]);
          }
        } else {
          if (!Q(l2[0])) {
            if (l2[0] instanceof n) return Ze(c(l2[0]), t2.spatialReference);
            if (null === l2[0]) return null;
            throw new a2(t2, r3.InvalidParameter, e);
          }
          {
            const n5 = Fe(l2[0].toArray());
            for (let a3 = 0; a3 < n5.length; a3++) if (null !== n5[a3]) {
              if (!(n5[a3] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
              u2.push(n5[a3]);
            }
          }
        }
      } else for (let a3 = 0; a3 < l2.length; a3++) if (null !== l2[a3]) {
        if (!(l2[a3] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
        u2.push(l2[a3]);
      }
      return 0 === u2.length ? null : b(u2);
    });
  }, n3.functions.difference = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, r5, i) => (Rn(i = Fe(i), t2, e), null === i[0] ? null : null === i[1] ? c(i[0]) : E2(i[0], i[1])));
  }, n3.functions.symmetricdifference = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, r5, i) => (Rn(i = Fe(i), t2, e), null === i[0] && null === i[1] ? null : null === i[0] ? c(i[1]) : null === i[1] ? c(i[0]) : k(i[0], i[1])));
  }, n3.functions.clip = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, a3, o) => {
      if (o = Fe(o), ae(o, 2, 2, t2, e), !(o[1] instanceof w) && null !== o[1]) throw new a2(t2, r3.InvalidParameter, e);
      if (null === o[0]) return null;
      if (!(o[0] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      return null === o[1] ? null : y4(o[0], o[1]);
    });
  }, n3.functions.cut = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, o, l2) => {
      if (l2 = Fe(l2), ae(l2, 2, 2, t2, e), !(l2[1] instanceof m) && null !== l2[1]) throw new a2(t2, r3.InvalidParameter, e);
      if (null === l2[0]) return [];
      if (!(l2[0] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      return null === l2[1] ? [c(l2[0])] : w2(l2[0], l2[1]);
    });
  }, n3.functions.area = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, a3, l2) => __async(this, null, function* () {
      if (ae(l2, 1, 2, t2, e), null === (l2 = Fe(l2))[0]) return 0;
      if (B(l2[0])) {
        const n5 = yield l2[0].sumArea(r2(P(l2[1], -1)), false, t2.abortSignal);
        if (t2.abortSignal.aborted) throw new a2(t2, r3.Cancelled, e);
        return n5;
      }
      if (U(l2[0]) || Q(l2[0])) {
        const n5 = xe(l2[0], t2.spatialReference);
        return null === n5 ? 0 : W2(n5, r2(P(l2[1], -1)));
      }
      if (!(l2[0] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      return W2(l2[0], r2(P(l2[1], -1)));
    }));
  }, n3.functions.areageodetic = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, a3, l2) => __async(this, null, function* () {
      if (ae(l2, 1, 2, t2, e), null === (l2 = Fe(l2))[0]) return 0;
      if (B(l2[0])) {
        const n5 = yield l2[0].sumArea(r2(P(l2[1], -1)), true, t2.abortSignal);
        if (t2.abortSignal.aborted) throw new a2(t2, r3.Cancelled, e);
        return n5;
      }
      if (U(l2[0]) || Q(l2[0])) {
        const n5 = xe(l2[0], t2.spatialReference);
        return null === n5 ? 0 : K(n5, r2(P(l2[1], -1)));
      }
      if (!(l2[0] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      return K(l2[0], r2(P(l2[1], -1)));
    }));
  }, n3.functions.length = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, a3, o) => __async(this, null, function* () {
      if (ae(o, 1, 2, t2, e), null === (o = Fe(o))[0]) return 0;
      if (B(o[0])) {
        const n5 = yield o[0].sumLength(a(P(o[1], -1)), false, t2.abortSignal);
        if (t2.abortSignal.aborted) throw new a2(t2, r3.Cancelled, e);
        return n5;
      }
      if (U(o[0]) || Q(o[0])) {
        const n5 = Me(o[0], t2.spatialReference);
        return null === n5 ? 0 : F(n5, a(P(o[1], -1)));
      }
      if (!(o[0] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      return F(o[0], a(P(o[1], -1)));
    }));
  }, n3.functions.length3d = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, a3, o) => {
      if (ae(o, 1, 2, t2, e), null === (o = Fe(o))[0]) return 0;
      if (U(o[0]) || Q(o[0])) {
        const n5 = Me(o[0], t2.spatialReference);
        return null === n5 ? 0 : true === n5.hasZ ? jn(n5, a(P(o[1], -1))) : F(n5, a(P(o[1], -1)));
      }
      if (!(o[0] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      return true === o[0].hasZ ? jn(o[0], a(P(o[1], -1))) : F(o[0], a(P(o[1], -1)));
    });
  }, n3.functions.lengthgeodetic = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, a3, o) => __async(this, null, function* () {
      if (ae(o, 1, 2, t2, e), null === (o = Fe(o))[0]) return 0;
      if (B(o[0])) {
        const n5 = yield o[0].sumLength(a(P(o[1], -1)), true, t2.abortSignal);
        if (t2.abortSignal.aborted) throw new a2(t2, r3.Cancelled, e);
        return n5;
      }
      if (U(o[0]) || Q(o[0])) {
        const n5 = Me(o[0], t2.spatialReference);
        return null === n5 ? 0 : M(n5, a(P(o[1], -1)));
      }
      if (!(o[0] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      return M(o[0], a(P(o[1], -1)));
    }));
  }, n3.functions.distance = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, a3, o) => {
      o = Fe(o), ae(o, 2, 3, t2, e);
      let c3 = o[0];
      (U(o[0]) || Q(o[0])) && (c3 = Oe(o[0], t2.spatialReference));
      let f = o[1];
      if ((U(o[1]) || Q(o[1])) && (f = Oe(o[1], t2.spatialReference)), !(c3 instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      if (!(f instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      return d(c3, f, a(P(o[2], -1)));
    });
  }, n3.functions.distancegeodetic = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, a3, o) => {
      o = Fe(o), ae(o, 2, 3, t2, e);
      const c3 = o[0], f = o[1];
      if (!(c3 instanceof _)) throw new a2(t2, r3.InvalidParameter, e);
      if (!(f instanceof _)) throw new a2(t2, r3.InvalidParameter, e);
      const d2 = new m({
        paths: [],
        spatialReference: c3.spatialReference
      });
      return d2.addPath([c3, f]), M(d2, a(P(o[2], -1)));
    });
  }, n3.functions.densify = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, a3, o) => {
      if (o = Fe(o), ae(o, 2, 3, t2, e), null === o[0]) return null;
      if (!(o[0] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      const c3 = ge(o[1]);
      if (isNaN(c3)) throw new a2(t2, r3.InvalidParameter, e);
      if (c3 <= 0) throw new a2(t2, r3.InvalidParameter, e);
      return o[0] instanceof j || o[0] instanceof m ? C2(o[0], c3, a(P(o[2], -1))) : o[0] instanceof w ? C2(Fn(o[0]), c3, a(P(o[2], -1))) : o[0];
    });
  }, n3.functions.densifygeodetic = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, a3, o) => {
      if (o = Fe(o), ae(o, 2, 3, t2, e), null === o[0]) return null;
      if (!(o[0] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      const c3 = ge(o[1]);
      if (isNaN(c3)) throw new a2(t2, r3.InvalidParameter, e);
      if (c3 <= 0) throw new a2(t2, r3.InvalidParameter, e);
      return o[0] instanceof j || o[0] instanceof m ? U2(o[0], c3, a(P(o[2], -1))) : o[0] instanceof w ? U2(Fn(o[0]), c3, a(P(o[2], -1))) : o[0];
    });
  }, n3.functions.generalize = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, a3, o) => {
      if (o = Fe(o), ae(o, 2, 4, t2, e), null === o[0]) return null;
      if (!(o[0] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      const c3 = ge(o[1]);
      if (isNaN(c3)) throw new a2(t2, r3.InvalidParameter, e);
      return B2(o[0], c3, Ne(P(o[2], true)), a(P(o[3], -1)));
    });
  }, n3.functions.buffer = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, o, c3) => {
      if (c3 = Fe(c3), ae(c3, 2, 3, t2, e), null === c3[0]) return null;
      if (!(c3[0] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      const f = ge(c3[1]);
      if (isNaN(f)) throw new a2(t2, r3.InvalidParameter, e);
      return 0 === f ? c(c3[0]) : L(c3[0], f, a(P(c3[2], -1)));
    });
  }, n3.functions.buffergeodetic = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, o, c3) => {
      if (c3 = Fe(c3), ae(c3, 2, 3, t2, e), null === c3[0]) return null;
      if (!(c3[0] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      const f = ge(c3[1]);
      if (isNaN(f)) throw new a2(t2, r3.InvalidParameter, e);
      return 0 === f ? c(c3[0]) : P2(c3[0], f, a(P(c3[2], -1)));
    });
  }, n3.functions.offset = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, a3, o) => {
      if (o = Fe(o), ae(o, 2, 6, t2, e), null === o[0]) return null;
      if (!(o[0] instanceof j || o[0] instanceof m)) throw new a2(t2, r3.InvalidParameter, e);
      const c3 = ge(o[1]);
      if (isNaN(c3)) throw new a2(t2, r3.InvalidParameter, e);
      const f = ge(P(o[4], 10));
      if (isNaN(f)) throw new a2(t2, r3.InvalidParameter, e);
      const d2 = ge(P(o[5], 0));
      if (isNaN(d2)) throw new a2(t2, r3.InvalidParameter, e);
      return v(o[0], c3, a(P(o[2], -1)), me(P(o[3], "round")).toLowerCase(), f, d2);
    });
  }, n3.functions.rotate = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, a3, o) => {
      if (o = Fe(o), ae(o, 2, 3, t2, e), null === o[0]) return null;
      if (!(o[0] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      const l2 = o[0] instanceof w ? j.fromExtent(o[0]) : o[0], c3 = ge(o[1]);
      if (isNaN(c3)) throw new a2(t2, r3.InvalidParameter, e);
      const f = P(o[2], null);
      if (null === f) return H(l2, c3);
      if (f instanceof _) return H(l2, c3, f);
      throw new a2(t2, r3.InvalidParameter, e);
    });
  }, n3.functions.centroid = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, o, l2) => {
      if (l2 = Fe(l2), ae(l2, 1, 1, t2, e), null === l2[0]) return null;
      let c3 = l2[0];
      if ((U(l2[0]) || Q(l2[0])) && (c3 = Oe(l2[0], t2.spatialReference)), null === c3) return null;
      if (!(c3 instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      return c3 instanceof _ ? Ze(c(c3), t2.spatialReference) : c3 instanceof j ? c3.centroid : c3 instanceof m ? y2(c3) : c3 instanceof u ? m2(c3) : c3 instanceof w ? c3.center : null;
    });
  }, n3.functions.measuretocoordinate = function(t2, a3) {
    return n3.standardFunctionAsync(t2, a3, (n4, o, l2) => {
      if (l2 = Fe(l2), ae(l2, 2, 2, t2, a3), null === l2[0]) return null;
      let c3 = l2[0];
      if ((U(l2[0]) || Q(l2[0])) && (c3 = Me(l2[0], t2.spatialReference)), null === c3) return null;
      if (!(c3 instanceof n)) throw new a2(t2, r3.InvalidParameter, a3);
      if (!(c3 instanceof m)) throw new a2(t2, r3.InvalidParameter, a3);
      if (E(false === l2[1])) throw new a2(t2, r3.InvalidParameter, a3);
      const f = y3(c3, l2[1]);
      return f ? N.convertObjectToArcadeDictionary(f, He(t2), false, true) : null;
    });
  }, n3.functions.pointtocoordinate = function(t2, a3) {
    return n3.standardFunctionAsync(t2, a3, (n4, o, l2) => {
      if (l2 = Fe(l2), ae(l2, 2, 2, t2, a3), null === l2[0]) return null;
      let c3 = l2[0];
      if ((U(l2[0]) || Q(l2[0])) && (c3 = Me(l2[0], t2.spatialReference)), null === c3) return null;
      if (!(c3 instanceof n)) throw new a2(t2, r3.InvalidParameter, a3);
      if (!(c3 instanceof m)) throw new a2(t2, r3.InvalidParameter, a3);
      const f = l2[1];
      if (null === f) return null;
      if (!(f instanceof _)) throw new a2(t2, r3.InvalidParameter, a3);
      if (E(false === l2[1])) throw new a2(t2, r3.InvalidParameter, a3);
      const d2 = x(c3, f);
      return d2 ? N.convertObjectToArcadeDictionary(d2, He(t2), false, true) : null;
    });
  }, n3.functions.distancetocoordinate = function(t2, a3) {
    return n3.standardFunctionAsync(t2, a3, (n4, o, l2) => {
      if (l2 = Fe(l2), ae(l2, 2, 2, t2, a3), null === l2[0]) return null;
      let c3 = l2[0];
      if ((U(l2[0]) || Q(l2[0])) && (c3 = Me(l2[0], t2.spatialReference)), null === c3) return null;
      if (!(c3 instanceof n)) throw new a2(t2, r3.InvalidParameter, a3);
      if (!(c3 instanceof m)) throw new a2(t2, r3.InvalidParameter, a3);
      if (E(false === l2[1])) throw new a2(t2, r3.InvalidParameter, a3);
      const f = Z(c3, l2[1]);
      return f ? N.convertObjectToArcadeDictionary(f, He(t2), false, true) : null;
    });
  }, n3.functions.multiparttosinglepart = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, o, l2) => __async(this, null, function* () {
      if (l2 = Fe(l2), ae(l2, 1, 1, t2, e), null === l2[0]) return null;
      if (!(l2[0] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      if (l2[0] instanceof _) return [Ze(c(l2[0]), t2.spatialReference)];
      if (l2[0] instanceof w) return [Ze(c(l2[0]), t2.spatialReference)];
      const c3 = yield N2(l2[0]);
      if (c3 instanceof j) {
        const n5 = [], t3 = [];
        for (let e2 = 0; e2 < c3.rings.length; e2++) if (c3.isClockwise(c3.rings[e2])) {
          const t4 = y({
            rings: [c3.rings[e2]],
            hasZ: true === c3.hasZ,
            hasM: true === c3.hasM,
            spatialReference: c3.spatialReference.toJSON()
          });
          n5.push(t4);
        } else t3.push({
          ring: c3.rings[e2],
          pt: c3.getPoint(e2, 0)
        });
        for (let e2 = 0; e2 < t3.length; e2++) for (let r5 = 0; r5 < n5.length; r5++) if (n5[r5].contains(t3[e2].pt)) {
          n5[r5].addRing(t3[e2].ring);
          break;
        }
        return n5;
      }
      if (c3 instanceof m) {
        const n5 = [];
        for (let t3 = 0; t3 < c3.paths.length; t3++) {
          const e2 = y({
            paths: [c3.paths[t3]],
            hasZ: true === c3.hasZ,
            hasM: true === c3.hasM,
            spatialReference: c3.spatialReference.toJSON()
          });
          n5.push(e2);
        }
        return n5;
      }
      if (l2[0] instanceof u) {
        const n5 = [], e2 = Ze(c(l2[0]), t2.spatialReference);
        for (let t3 = 0; t3 < e2.points.length; t3++) n5.push(e2.getPoint(t3));
        return n5;
      }
      return null;
    }));
  }, n3.functions.issimple = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, a3, o) => {
      if (o = Fe(o), ae(o, 1, 1, t2, e), null === o[0]) return true;
      if (!(o[0] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      return J(o[0]);
    });
  }, n3.functions.simplify = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, a3, o) => {
      if (o = Fe(o), ae(o, 1, 1, t2, e), null === o[0]) return null;
      if (!(o[0] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      return N2(o[0]);
    });
  }, n3.functions.convexhull = function(t2, e) {
    return n3.standardFunctionAsync(t2, e, (n4, a3, o) => {
      if (o = Fe(o), ae(o, 1, 1, t2, e), null === o[0]) return null;
      if (!(o[0] instanceof n)) throw new a2(t2, r3.InvalidParameter, e);
      return j2(o[0]);
    });
  }, n3.functions.getuser = function(a3, o) {
    return n3.standardFunctionAsync(a3, o, (n4, l2, s) => __async(this, null, function* () {
      ae(s, 0, 2, a3, o);
      let c3 = P(s[1], ""), f = true === c3;
      if (c3 = true === c3 || false === c3 ? "" : me(c3), 0 === s.length || s[0] instanceof t) {
        let n5;
        n5 = a3.services?.portal ? a3.services.portal : C.getDefault(), s.length > 0 && (n5 = l(s[0], n5));
        const t2 = yield n2(n5, c3, f);
        if (t2) {
          const n6 = JSON.parse(JSON.stringify(t2));
          for (const t3 of ["lastLogin", "created", "modified"]) void 0 !== n6[t3] && null !== n6[t3] && (n6[t3] = new Date(n6[t3]));
          return N.convertObjectToArcadeDictionary(n6, He(a3));
        }
        return null;
      }
      let d2 = null;
      if (B(s[0]) && (d2 = s[0]), d2) {
        if (f = false, c3) return null;
        yield d2.load();
        const n5 = yield d2.getOwningSystemUrl();
        if (!n5) {
          if (!c3) {
            const n6 = yield d2.getIdentityUser();
            return n6 ? N.convertObjectToArcadeDictionary({
              username: n6
            }, He(a3)) : null;
          }
          return null;
        }
        let r5;
        r5 = a3.services?.portal ? a3.services.portal : C.getDefault(), r5 = l(new t(n5), r5);
        const i = yield n2(r5, c3, f);
        if (i) {
          const n6 = JSON.parse(JSON.stringify(i));
          for (const t2 of ["lastLogin", "created", "modified"]) void 0 !== n6[t2] && null !== n6[t2] && (n6[t2] = new Date(n6[t2]));
          return N.convertObjectToArcadeDictionary(n6, He(a3));
        }
        return null;
      }
      throw new a2(a3, r3.InvalidParameter, o);
    }));
  }, n3.functions.nearestcoordinate = function(t2, a3) {
    return n3.standardFunctionAsync(t2, a3, (n4, o, l2) => __async(this, null, function* () {
      if (l2 = Fe(l2), ae(l2, 2, 2, t2, a3), !(l2[0] instanceof n || null === l2[0])) throw new a2(t2, r3.InvalidParameter, a3);
      if (!(l2[1] instanceof _ || null === l2[1])) throw new a2(t2, r3.InvalidParameter, a3);
      if (null === l2[0] || null === l2[1]) return null;
      const c3 = yield T(l2[0], l2[1]);
      return null === c3 ? null : N.convertObjectToArcadeDictionary({
        coordinate: c3.coordinate,
        distance: c3.distance,
        sideOfLine: 0 === c3.distance ? "straddle" : c3.isRightSide ? "right" : "left"
      }, He(t2), false, true);
    }));
  }, n3.functions.nearestvertex = function(t2, a3) {
    return n3.standardFunctionAsync(t2, a3, (n4, o, l2) => __async(this, null, function* () {
      if (l2 = Fe(l2), ae(l2, 2, 2, t2, a3), !(l2[0] instanceof n || null === l2[0])) throw new a2(t2, r3.InvalidParameter, a3);
      if (!(l2[1] instanceof _ || null === l2[1])) throw new a2(t2, r3.InvalidParameter, a3);
      if (null === l2[0] || null === l2[1]) return null;
      const c3 = yield V(l2[0], l2[1]);
      return null === c3 ? null : N.convertObjectToArcadeDictionary({
        coordinate: c3.coordinate,
        distance: c3.distance,
        sideOfLine: 0 === c3.distance ? "straddle" : c3.isRightSide ? "right" : "left"
      }, He(t2), false, true);
    }));
  });
}

export {
  xn
};
//# sourceMappingURL=chunk-XSIZ2PFB.js.map
