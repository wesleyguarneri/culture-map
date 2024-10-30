import {
  C,
  L,
  M as M2,
  Y,
  c as c3,
  d,
  d2,
  f as f2,
  l as l2,
  o,
  p as p2,
  p2 as p3,
  p3 as p4,
  s as s2,
  u as u3,
  x as x2,
  y as y2
} from "./chunk-VIKUEFN5.js";
import "./chunk-WVEBK4ZV.js";
import {
  Z2 as Z,
  c as c4,
  m as m2,
  r as r5,
  x as x3,
  y as y3,
  y2 as y4
} from "./chunk-CXQROBXB.js";
import "./chunk-HMQ3JMIV.js";
import "./chunk-KNXGNI77.js";
import "./chunk-CLQXLLGB.js";
import {
  D
} from "./chunk-ADMKSP6W.js";
import {
  N
} from "./chunk-FAW72HJW.js";
import {
  $e,
  B2 as B,
  E2 as E,
  Fe,
  G2 as G,
  H,
  He,
  J2 as J,
  K,
  M2 as M,
  Me,
  Ne,
  O2 as O,
  Oe,
  P,
  Q,
  R,
  U as U2,
  W as W2,
  X,
  Ze,
  _ as _2,
  _e,
  a as a3,
  ae,
  c as c2,
  ce,
  e,
  ee,
  fe,
  ge,
  i,
  l,
  me,
  n as n5,
  p,
  q,
  r as r3,
  r2 as r4,
  s,
  s2 as s3,
  te,
  u as u2,
  x,
  xe,
  z
} from "./chunk-WD7XZJEZ.js";
import "./chunk-ADI7256P.js";
import "./chunk-UOW7A3SI.js";
import "./chunk-C7NRYPDG.js";
import "./chunk-4QBFFLOC.js";
import "./chunk-O437BSYE.js";
import "./chunk-YZNT6QWD.js";
import "./chunk-PFMGJTQM.js";
import "./chunk-Q7SRMLJZ.js";
import "./chunk-DWASPXVI.js";
import "./chunk-J55F4AC2.js";
import "./chunk-DTUSTSEJ.js";
import "./chunk-JCWFGRHQ.js";
import "./chunk-JILEJ6R2.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import {
  y
} from "./chunk-S3IO7V4Q.js";
import "./chunk-4ZZRP4MA.js";
import "./chunk-5I6J67HP.js";
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import {
  a as a2,
  c,
  n as n2,
  n2 as n4,
  r as r2
} from "./chunk-GWC3DAGP.js";
import "./chunk-EODIWR2E.js";
import "./chunk-LLDOZWVV.js";
import {
  C as C2
} from "./chunk-7XMEZQ34.js";
import "./chunk-BDM2D6IC.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import {
  j,
  m2 as m,
  u
} from "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  _,
  n as n3
} from "./chunk-O7UDKFOW.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import {
  W2 as W
} from "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import {
  U,
  r2 as r
} from "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import {
  S
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import {
  n
} from "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  a
} from "./chunk-WYIDUUN2.js";
import {
  has
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/arcade/functions/geomsync.js
var C3 = null;
function J2(e5) {
  return 0 === r.indexOf("4.") ? j.fromExtent(e5) : new j({
    spatialReference: e5.spatialReference,
    rings: [[[e5.xmin, e5.ymin], [e5.xmin, e5.ymax], [e5.xmax, e5.ymax], [e5.xmax, e5.ymin], [e5.xmin, e5.ymin]]]
  });
}
function U3(n7) {
  C3 = n7;
}
function W3(n7, e5) {
  if ("polygon" !== n7.type && "polyline" !== n7.type && "extent" !== n7.type) return 0;
  let t3 = 1;
  if (n7.spatialReference.vcsWkid || n7.spatialReference.latestVcsWkid) {
    t3 = c4(n7.spatialReference) / W(n7.spatialReference);
  }
  let r7 = 0;
  if ("polyline" === n7.type) for (const a5 of n7.paths) for (let n8 = 1; n8 < a5.length; n8++) r7 += r5(a5[n8], a5[n8 - 1], t3);
  else if ("polygon" === n7.type) for (const a5 of n7.rings) {
    for (let n8 = 1; n8 < a5.length; n8++) r7 += r5(a5[n8], a5[n8 - 1], t3);
    (a5[0][0] !== a5[a5.length - 1][0] || a5[0][1] !== a5[a5.length - 1][1] || void 0 !== a5[0][2] && a5[0][2] !== a5[a5.length - 1][2]) && (r7 += r5(a5[0], a5[a5.length - 1], t3));
  }
  else "extent" === n7.type && (r7 += 2 * r5([n7.xmin, n7.ymin, 0], [n7.xmax, n7.ymin, 0], t3), r7 += 2 * r5([n7.xmin, n7.ymin, 0], [n7.xmin, n7.ymax, 0], t3), r7 *= 2, r7 += 4 * Math.abs(P(n7.zmax, 0) * t3 - P(n7.zmin, 0) * t3));
  const i3 = new m({
    hasZ: false,
    hasM: false,
    spatialReference: n7.spatialReference,
    paths: [[0, 0], [0, r7]]
  });
  return C3.planarLength(i3, e5);
}
function H2(n7, b2) {
  function L5(n8, e5, i3) {
    if (ae(i3, 2, 2, n8, e5), i3[0] instanceof n3 && i3[1] instanceof n3) ;
    else if (i3[0] instanceof n3 && null === i3[1]) ;
    else if (i3[1] instanceof n3 && null === i3[0]) ;
    else if (null !== i3[0] || null !== i3[1]) throw new a3(n8, r3.InvalidParameter, e5);
  }
  n7.disjoint = function(n8, e5) {
    return b2(n8, e5, (t3, r7, i3) => (i3 = Fe(i3), L5(n8, e5, i3), null === i3[0] || null === i3[1] || C3.disjoint(i3[0], i3[1])));
  }, n7.intersects = function(n8, e5) {
    return b2(n8, e5, (t3, r7, i3) => (i3 = Fe(i3), L5(n8, e5, i3), null !== i3[0] && null !== i3[1] && C3.intersects(i3[0], i3[1])));
  }, n7.touches = function(n8, e5) {
    return b2(n8, e5, (t3, r7, i3) => (i3 = Fe(i3), L5(n8, e5, i3), null !== i3[0] && null !== i3[1] && C3.touches(i3[0], i3[1])));
  }, n7.crosses = function(n8, e5) {
    return b2(n8, e5, (t3, r7, i3) => (i3 = Fe(i3), L5(n8, e5, i3), null !== i3[0] && null !== i3[1] && C3.crosses(i3[0], i3[1])));
  }, n7.within = function(n8, e5) {
    return b2(n8, e5, (t3, r7, i3) => (i3 = Fe(i3), L5(n8, e5, i3), null !== i3[0] && null !== i3[1] && C3.within(i3[0], i3[1])));
  }, n7.contains = function(n8, e5) {
    return b2(n8, e5, (t3, r7, i3) => (i3 = Fe(i3), L5(n8, e5, i3), null !== i3[0] && null !== i3[1] && C3.contains(i3[0], i3[1])));
  }, n7.overlaps = function(n8, e5) {
    return b2(n8, e5, (t3, r7, i3) => (i3 = Fe(i3), L5(n8, e5, i3), null !== i3[0] && null !== i3[1] && C3.overlaps(i3[0], i3[1])));
  }, n7.equals = function(n8, e5) {
    return b2(n8, e5, (t3, r7, i3) => (ae(i3, 2, 2, n8, e5), i3[0] === i3[1] || (i3[0] instanceof n3 && i3[1] instanceof n3 ? C3.equals(i3[0], i3[1]) : (X(i3[0]) && X(i3[1]) || te(i3[0]) && te(i3[1]) || !(!ee(i3[0]) || !ee(i3[1]))) && i3[0].equals(i3[1]))));
  }, n7.relate = function(n8, e5) {
    return b2(n8, e5, (i3, a5, l5) => {
      if (l5 = Fe(l5), ae(l5, 3, 3, n8, e5), l5[0] instanceof n3 && l5[1] instanceof n3) return C3.relate(l5[0], l5[1], me(l5[2]));
      if (l5[0] instanceof n3 && null === l5[1]) return false;
      if (l5[1] instanceof n3 && null === l5[0]) return false;
      if (null === l5[0] && null === l5[1]) return false;
      throw new a3(n8, r3.InvalidParameter, e5);
    });
  }, n7.intersection = function(n8, e5) {
    return b2(n8, e5, (t3, r7, i3) => (i3 = Fe(i3), L5(n8, e5, i3), null === i3[0] || null === i3[1] ? null : C3.intersect(i3[0], i3[1])));
  }, n7.union = function(n8, e5) {
    return b2(n8, e5, (a5, l5, f4) => {
      const u5 = [];
      if (0 === (f4 = Fe(f4)).length) throw new a3(n8, r3.WrongNumberOfParameters, e5);
      if (1 === f4.length) {
        if (U2(f4[0])) {
          const i3 = Fe(f4[0]);
          for (let a6 = 0; a6 < i3.length; a6++) if (null !== i3[a6]) {
            if (!(i3[a6] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
            u5.push(i3[a6]);
          }
        } else {
          if (!Q(f4[0])) {
            if (f4[0] instanceof n3) return Ze(c(f4[0]), n8.spatialReference);
            if (null === f4[0]) return null;
            throw new a3(n8, r3.InvalidParameter, e5);
          }
          {
            const i3 = Fe(f4[0].toArray());
            for (let a6 = 0; a6 < i3.length; a6++) if (null !== i3[a6]) {
              if (!(i3[a6] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
              u5.push(i3[a6]);
            }
          }
        }
      } else for (let i3 = 0; i3 < f4.length; i3++) if (null !== f4[i3]) {
        if (!(f4[i3] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
        u5.push(f4[i3]);
      }
      return 0 === u5.length ? null : C3.union(u5);
    });
  }, n7.difference = function(n8, e5) {
    return b2(n8, e5, (t3, r7, a5) => (a5 = Fe(a5), L5(n8, e5, a5), null === a5[0] ? null : null === a5[1] ? c(a5[0]) : C3.difference(a5[0], a5[1])));
  }, n7.symmetricdifference = function(n8, e5) {
    return b2(n8, e5, (t3, r7, a5) => (a5 = Fe(a5), L5(n8, e5, a5), null === a5[0] && null === a5[1] ? null : null === a5[0] ? c(a5[1]) : null === a5[1] ? c(a5[0]) : C3.symmetricDifference(a5[0], a5[1])));
  }, n7.clip = function(n8, e5) {
    return b2(n8, e5, (i3, a5, l5) => {
      if (l5 = Fe(l5), ae(l5, 2, 2, n8, e5), !(l5[1] instanceof w) && null !== l5[1]) throw new a3(n8, r3.InvalidParameter, e5);
      if (null === l5[0]) return null;
      if (!(l5[0] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      return null === l5[1] ? null : C3.clip(l5[0], l5[1]);
    });
  }, n7.cut = function(n8, e5) {
    return b2(n8, e5, (a5, l5, u5) => {
      if (u5 = Fe(u5), ae(u5, 2, 2, n8, e5), !(u5[1] instanceof m) && null !== u5[1]) throw new a3(n8, r3.InvalidParameter, e5);
      if (null === u5[0]) return [];
      if (!(u5[0] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      return null === u5[1] ? [c(u5[0])] : C3.cut(u5[0], u5[1]);
    });
  }, n7.area = function(n8, e5) {
    return b2(n8, e5, (i3, l5, u5) => {
      if (ae(u5, 1, 2, n8, e5), null === (u5 = Fe(u5))[0]) return 0;
      if (U2(u5[0]) || Q(u5[0])) {
        const e6 = xe(u5[0], n8.spatialReference);
        return null === e6 ? 0 : C3.planarArea(e6, r2(P(u5[1], -1)));
      }
      if (!(u5[0] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      return C3.planarArea(u5[0], r2(P(u5[1], -1)));
    });
  }, n7.areageodetic = function(n8, e5) {
    return b2(n8, e5, (i3, l5, u5) => {
      if (ae(u5, 1, 2, n8, e5), null === (u5 = Fe(u5))[0]) return 0;
      if (U2(u5[0]) || Q(u5[0])) {
        const e6 = xe(u5[0], n8.spatialReference);
        return null === e6 ? 0 : C3.geodesicArea(e6, r2(P(u5[1], -1)));
      }
      if (!(u5[0] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      return C3.geodesicArea(u5[0], r2(P(u5[1], -1)));
    });
  }, n7.length = function(n8, e5) {
    return b2(n8, e5, (i3, a5, u5) => {
      if (ae(u5, 1, 2, n8, e5), null === (u5 = Fe(u5))[0]) return 0;
      if (U2(u5[0]) || Q(u5[0])) {
        const e6 = Me(u5[0], n8.spatialReference);
        return null === e6 ? 0 : C3.planarLength(e6, a2(P(u5[1], -1)));
      }
      if (!(u5[0] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      return C3.planarLength(u5[0], a2(P(u5[1], -1)));
    });
  }, n7.length3d = function(n8, e5) {
    return b2(n8, e5, (i3, a5, u5) => {
      if (ae(u5, 1, 2, n8, e5), null === (u5 = Fe(u5))[0]) return 0;
      if (U2(u5[0]) || Q(u5[0])) {
        const e6 = Me(u5[0], n8.spatialReference);
        return null === e6 ? 0 : true === e6.hasZ ? W3(e6, a2(P(u5[1], -1))) : C3.planarLength(e6, a2(P(u5[1], -1)));
      }
      if (!(u5[0] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      return true === u5[0].hasZ ? W3(u5[0], a2(P(u5[1], -1))) : C3.planarLength(u5[0], a2(P(u5[1], -1)));
    });
  }, n7.lengthgeodetic = function(n8, e5) {
    return b2(n8, e5, (i3, a5, u5) => {
      if (ae(u5, 1, 2, n8, e5), null === (u5 = Fe(u5))[0]) return 0;
      if (U2(u5[0]) || Q(u5[0])) {
        const e6 = Me(u5[0], n8.spatialReference);
        return null === e6 ? 0 : C3.geodesicLength(e6, a2(P(u5[1], -1)));
      }
      if (!(u5[0] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      return C3.geodesicLength(u5[0], a2(P(u5[1], -1)));
    });
  }, n7.distance = function(n8, e5) {
    return b2(n8, e5, (i3, a5, u5) => {
      u5 = Fe(u5), ae(u5, 2, 3, n8, e5);
      let s6 = u5[0];
      (U2(u5[0]) || Q(u5[0])) && (s6 = Oe(u5[0], n8.spatialReference));
      let c6 = u5[1];
      if ((U2(u5[1]) || Q(u5[1])) && (c6 = Oe(u5[1], n8.spatialReference)), !(s6 instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      if (!(c6 instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      return C3.distance(s6, c6, a2(P(u5[2], -1)));
    });
  }, n7.distancegeodetic = function(n8, e5) {
    return b2(n8, e5, (i3, a5, u5) => {
      u5 = Fe(u5), ae(u5, 2, 3, n8, e5);
      const s6 = u5[0], c6 = u5[1];
      if (!(s6 instanceof _)) throw new a3(n8, r3.InvalidParameter, e5);
      if (!(c6 instanceof _)) throw new a3(n8, r3.InvalidParameter, e5);
      const m3 = new m({
        paths: [],
        spatialReference: s6.spatialReference
      });
      return m3.addPath([s6, c6]), C3.geodesicLength(m3, a2(P(u5[2], -1)));
    });
  }, n7.densify = function(n8, e5) {
    return b2(n8, e5, (i3, a5, u5) => {
      if (u5 = Fe(u5), ae(u5, 2, 3, n8, e5), null === u5[0]) return null;
      if (!(u5[0] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      const s6 = ge(u5[1]);
      if (isNaN(s6)) throw new a3(n8, r3.InvalidParameter, e5);
      if (s6 <= 0) throw new a3(n8, r3.InvalidParameter, e5);
      return u5[0] instanceof j || u5[0] instanceof m ? C3.densify(u5[0], s6, a2(P(u5[2], -1))) : u5[0] instanceof w ? C3.densify(J2(u5[0]), s6, a2(P(u5[2], -1))) : u5[0];
    });
  }, n7.densifygeodetic = function(n8, e5) {
    return b2(n8, e5, (i3, a5, u5) => {
      if (u5 = Fe(u5), ae(u5, 2, 3, n8, e5), null === u5[0]) return null;
      if (!(u5[0] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      const s6 = ge(u5[1]);
      if (isNaN(s6)) throw new a3(n8, r3.InvalidParameter, e5);
      if (s6 <= 0) throw new a3(n8, r3.InvalidParameter, e5);
      return u5[0] instanceof j || u5[0] instanceof m ? C3.geodesicDensify(u5[0], s6, a2(P(u5[2], -1))) : u5[0] instanceof w ? C3.geodesicDensify(J2(u5[0]), s6, a2(P(u5[2], -1))) : u5[0];
    });
  }, n7.generalize = function(n8, e5) {
    return b2(n8, e5, (i3, a5, u5) => {
      if (u5 = Fe(u5), ae(u5, 2, 4, n8, e5), null === u5[0]) return null;
      if (!(u5[0] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      const s6 = ge(u5[1]);
      if (isNaN(s6)) throw new a3(n8, r3.InvalidParameter, e5);
      return C3.generalize(u5[0], s6, Ne(P(u5[2], true)), a2(P(u5[3], -1)));
    });
  }, n7.buffer = function(n8, e5) {
    return b2(n8, e5, (a5, u5, s6) => {
      if (s6 = Fe(s6), ae(s6, 2, 3, n8, e5), null === s6[0]) return null;
      if (!(s6[0] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      const c6 = ge(s6[1]);
      if (isNaN(c6)) throw new a3(n8, r3.InvalidParameter, e5);
      return 0 === c6 ? c(s6[0]) : C3.buffer(s6[0], c6, a2(P(s6[2], -1)));
    });
  }, n7.buffergeodetic = function(n8, e5) {
    return b2(n8, e5, (a5, u5, s6) => {
      if (s6 = Fe(s6), ae(s6, 2, 3, n8, e5), null === s6[0]) return null;
      if (!(s6[0] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      const c6 = ge(s6[1]);
      if (isNaN(c6)) throw new a3(n8, r3.InvalidParameter, e5);
      return 0 === c6 ? c(s6[0]) : C3.geodesicBuffer(s6[0], c6, a2(P(s6[2], -1)));
    });
  }, n7.offset = function(n8, e5) {
    return b2(n8, e5, (i3, a5, u5) => {
      if (u5 = Fe(u5), ae(u5, 2, 6, n8, e5), null === u5[0]) return null;
      if (!(u5[0] instanceof j || u5[0] instanceof m)) throw new a3(n8, r3.InvalidParameter, e5);
      const s6 = ge(u5[1]);
      if (isNaN(s6)) throw new a3(n8, r3.InvalidParameter, e5);
      const c6 = ge(P(u5[4], 10));
      if (isNaN(c6)) throw new a3(n8, r3.InvalidParameter, e5);
      const d5 = ge(P(u5[5], 0));
      if (isNaN(d5)) throw new a3(n8, r3.InvalidParameter, e5);
      return C3.offset(u5[0], s6, a2(P(u5[2], -1)), me(P(u5[3], "round")).toLowerCase(), c6, d5);
    });
  }, n7.rotate = function(n8, e5) {
    return b2(n8, e5, (i3, a5, l5) => {
      if (l5 = Fe(l5), ae(l5, 2, 3, n8, e5), null === l5[0]) return null;
      if (!(l5[0] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      const u5 = l5[0] instanceof w ? j.fromExtent(l5[0]) : l5[0], s6 = ge(l5[1]);
      if (isNaN(s6)) throw new a3(n8, r3.InvalidParameter, e5);
      const c6 = P(l5[2], null);
      if (null === c6) return C3.rotate(u5, s6);
      if (c6 instanceof _) return C3.rotate(u5, s6, c6);
      throw new a3(n8, r3.InvalidParameter, e5);
    });
  }, n7.centroid = function(n8, e5) {
    return b2(n8, e5, (a5, l5, u5) => {
      if (u5 = Fe(u5), ae(u5, 1, 1, n8, e5), null === u5[0]) return null;
      let s6 = u5[0];
      if ((U2(u5[0]) || Q(u5[0])) && (s6 = Oe(u5[0], n8.spatialReference)), null === s6) return null;
      if (!(s6 instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      return s6 instanceof _ ? Ze(c(s6), n8.spatialReference) : s6 instanceof j ? s6.centroid : s6 instanceof m ? y3(s6) : s6 instanceof u ? m2(s6) : s6 instanceof w ? s6.center : null;
    });
  }, n7.measuretocoordinate = function(n8, i3) {
    return b2(n8, i3, (a5, l5, u5) => {
      if (u5 = Fe(u5), ae(u5, 2, 2, n8, i3), null === u5[0]) return null;
      let s6 = u5[0];
      if ((U2(u5[0]) || Q(u5[0])) && (s6 = Me(u5[0], n8.spatialReference)), null === s6) return null;
      if (!(s6 instanceof n3)) throw new a3(n8, r3.InvalidParameter, i3);
      if (!(s6 instanceof m)) throw new a3(n8, r3.InvalidParameter, i3);
      if (E(false === u5[1])) throw new a3(n8, r3.InvalidParameter, i3);
      const c6 = y4(s6, u5[1]);
      return c6 ? N.convertObjectToArcadeDictionary(c6, He(n8), false, true) : null;
    });
  }, n7.pointtocoordinate = function(n8, i3) {
    return b2(n8, i3, (a5, l5, u5) => {
      if (u5 = Fe(u5), ae(u5, 2, 2, n8, i3), null === u5[0]) return null;
      let s6 = u5[0];
      if ((U2(u5[0]) || Q(u5[0])) && (s6 = Me(u5[0], n8.spatialReference)), null === s6) return null;
      if (!(s6 instanceof n3)) throw new a3(n8, r3.InvalidParameter, i3);
      if (!(s6 instanceof m)) throw new a3(n8, r3.InvalidParameter, i3);
      const c6 = u5[1];
      if (null === c6) return null;
      if (!(c6 instanceof _)) throw new a3(n8, r3.InvalidParameter, i3);
      if (E(false === u5[1])) throw new a3(n8, r3.InvalidParameter, i3);
      const m3 = x3(s6, c6);
      return m3 ? N.convertObjectToArcadeDictionary(m3, He(n8), false, true) : null;
    });
  }, n7.distancetocoordinate = function(n8, i3) {
    return b2(n8, i3, (a5, l5, u5) => {
      if (u5 = Fe(u5), ae(u5, 2, 2, n8, i3), null === u5[0]) return null;
      let s6 = u5[0];
      if ((U2(u5[0]) || Q(u5[0])) && (s6 = Me(u5[0], n8.spatialReference)), null === s6) return null;
      if (!(s6 instanceof n3)) throw new a3(n8, r3.InvalidParameter, i3);
      if (!(s6 instanceof m)) throw new a3(n8, r3.InvalidParameter, i3);
      if (E(false === u5[1])) throw new a3(n8, r3.InvalidParameter, i3);
      const c6 = Z(s6, u5[1]);
      return c6 ? N.convertObjectToArcadeDictionary(c6, He(n8), false, true) : null;
    });
  }, n7.multiparttosinglepart = function(n8, e5) {
    return b2(n8, e5, (a5, l5, u5) => {
      if (u5 = Fe(u5), ae(u5, 1, 1, n8, e5), null === u5[0]) return null;
      if (!(u5[0] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      if (u5[0] instanceof _) return [Ze(c(u5[0]), n8.spatialReference)];
      if (u5[0] instanceof w) return [Ze(c(u5[0]), n8.spatialReference)];
      const s6 = C3.simplify(u5[0]);
      if (s6 instanceof j) {
        const n9 = [], e6 = [];
        for (let t3 = 0; t3 < s6.rings.length; t3++) if (s6.isClockwise(s6.rings[t3])) {
          const e7 = y({
            rings: [s6.rings[t3]],
            hasZ: true === s6.hasZ,
            hasM: true === s6.hasM,
            spatialReference: s6.spatialReference.toJSON()
          });
          n9.push(e7);
        } else e6.push({
          ring: s6.rings[t3],
          pt: s6.getPoint(t3, 0)
        });
        for (let t3 = 0; t3 < e6.length; t3++) for (let r7 = 0; r7 < n9.length; r7++) if (n9[r7].contains(e6[t3].pt)) {
          n9[r7].addRing(e6[t3].ring);
          break;
        }
        return n9;
      }
      if (s6 instanceof m) {
        const n9 = [];
        for (let e6 = 0; e6 < s6.paths.length; e6++) {
          const t3 = y({
            paths: [s6.paths[e6]],
            hasZ: true === s6.hasZ,
            hasM: true === s6.hasM,
            spatialReference: s6.spatialReference.toJSON()
          });
          n9.push(t3);
        }
        return n9;
      }
      if (u5[0] instanceof u) {
        const e6 = [], t3 = Ze(c(u5[0]), n8.spatialReference);
        for (let n9 = 0; n9 < t3.points.length; n9++) e6.push(t3.getPoint(n9));
        return e6;
      }
      return null;
    });
  }, n7.issimple = function(n8, e5) {
    return b2(n8, e5, (i3, a5, l5) => {
      if (l5 = Fe(l5), ae(l5, 1, 1, n8, e5), null === l5[0]) return true;
      if (!(l5[0] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      return C3.isSimple(l5[0]);
    });
  }, n7.simplify = function(n8, e5) {
    return b2(n8, e5, (i3, a5, l5) => {
      if (l5 = Fe(l5), ae(l5, 1, 1, n8, e5), null === l5[0]) return null;
      if (!(l5[0] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      return C3.simplify(l5[0]);
    });
  }, n7.convexhull = function(n8, e5) {
    return b2(n8, e5, (i3, a5, l5) => {
      if (l5 = Fe(l5), ae(l5, 1, 1, n8, e5), null === l5[0]) return null;
      if (!(l5[0] instanceof n3)) throw new a3(n8, r3.InvalidParameter, e5);
      return C3.convexHull(l5[0]);
    });
  }, n7.nearestcoordinate = function(n8, i3) {
    return b2(n8, i3, (a5, l5, u5) => {
      if (u5 = Fe(u5), ae(u5, 2, 2, n8, i3), !(u5[0] instanceof n3 || null === u5[0])) throw new a3(n8, r3.InvalidParameter, i3);
      if (!(u5[1] instanceof _ || null === u5[1])) throw new a3(n8, r3.InvalidParameter, i3);
      if (null === u5[0] || null === u5[1]) return null;
      const s6 = C3.nearestCoordinate(u5[0], u5[1]);
      return null === s6 || s6.isEmpty ? null : N.convertObjectToArcadeDictionary({
        coordinate: s6.coordinate,
        distance: s6.distance,
        sideOfLine: 0 === s6.distance ? "straddle" : s6.isRightSide ? "right" : "left"
      }, He(n8), false, true);
    });
  }, n7.nearestvertex = function(n8, i3) {
    return b2(n8, i3, (a5, l5, u5) => {
      if (u5 = Fe(u5), ae(u5, 2, 2, n8, i3), !(u5[0] instanceof n3 || null === u5[0])) throw new a3(n8, r3.InvalidParameter, i3);
      if (!(u5[1] instanceof _ || null === u5[1])) throw new a3(n8, r3.InvalidParameter, i3);
      if (null === u5[0] || null === u5[1]) return null;
      const s6 = C3.nearestVertex(u5[0], u5[1]);
      return null === s6 || s6.isEmpty ? null : N.convertObjectToArcadeDictionary({
        coordinate: s6.coordinate,
        distance: s6.distance,
        sideOfLine: 0 === s6.distance ? "straddle" : s6.isRightSide ? "right" : "left"
      }, He(n8), false, true);
    });
  };
}

// ../../../node_modules/@arcgis/core/arcade/arcadeCompiler.js
var W4 = class extends r4 {
  constructor(e5, n7) {
    super(), this.paramCount = n7, this.fn = e5;
  }
  createFunction(e5) {
    return (...n7) => {
      if (n7.length !== this.paramCount) throw new a3(e5, r3.WrongNumberOfParameters, null);
      return this.fn(...n7);
    };
  }
  call(e5, n7) {
    return this.fn(...n7.arguments);
  }
  marshalledCall(e5, n7, t3, o3) {
    return o3(e5, n7, (n8, l5, r7) => {
      r7 = r7.map((n9) => !_2(n9) || n9 instanceof s3 ? n9 : n5(n9, e5, o3));
      const a5 = this.call(t3, {
        arguments: r7
      });
      return S(a5) ? a5.then((e6) => n5(e6, t3, o3)) : a5;
    });
  }
};
function z2(e5, n7, t3) {
  try {
    return t3(e5, null, n7.arguments);
  } catch (o3) {
    throw o3;
  }
}
function J3(e5, n7) {
  try {
    switch (n7.type) {
      case "EmptyStatement":
        return "lc.voidOperation";
      case "VariableDeclarator":
        return ge2(e5, n7);
      case "VariableDeclaration":
        return me2(e5, n7);
      case "BlockStatement":
      case "Program":
        return ae2(e5, n7);
      case "FunctionDeclaration":
        return pe(e5, n7);
      case "ImportDeclaration":
        return ie(e5, n7);
      case "ExportNamedDeclaration":
        return ce2(e5, n7);
      case "ReturnStatement":
        return se(e5, n7);
      case "IfStatement":
        return re(e5, n7);
      case "ExpressionStatement":
        return oe(e5, n7);
      case "AssignmentExpression":
        return te2(e5, n7);
      case "UpdateExpression":
        return ee2(e5, n7);
      case "BreakStatement":
        return "break";
      case "ContinueStatement":
        return "continue";
      case "TemplateLiteral":
        return ye(e5, n7);
      case "TemplateElement":
        return JSON.stringify(n7.value ? n7.value.cooked : "");
      case "ForStatement":
        return X2(e5, n7);
      case "ForInStatement":
        return Q2(e5, n7);
      case "WhileStatement":
        return ne(e5, n7);
      case "Identifier":
        return Se(e5, n7);
      case "MemberExpression":
        return de(e5, n7);
      case "Literal":
        return null === n7.value || void 0 === n7.value ? "null" : JSON.stringify(n7.value);
      case "CallExpression":
        return ve(e5, n7);
      case "UnaryExpression":
        return fe2(e5, n7);
      case "BinaryExpression":
        return be(e5, n7);
      case "LogicalExpression":
        return we(e5, n7);
      case "ArrayExpression":
        return he(e5, n7);
      case "ObjectExpression":
        return Y2(e5, n7);
      case "Property":
        return H3(e5, n7);
      case "Array":
        throw new c2(e5, r3.NeverReach, n7);
      default:
        throw new c2(e5, r3.Unrecognized, n7);
    }
  } catch (t3) {
    throw t3;
  }
}
function Y2(e5, n7) {
  let t3 = "lang.dictionary([";
  for (let o3 = 0; o3 < n7.properties.length; o3++) {
    const l5 = n7.properties[o3];
    ue(l5.key.name);
    o3 > 0 && (t3 += ","), t3 += "lang.strCheck(" + ("Identifier" === l5.key.type ? "'" + l5.key.name + "'" : J3(e5, l5.key)) + ",'ObjectExpression'),lang.aCheck(" + J3(e5, l5.value) + ", 'ObjectExpression')";
  }
  return t3 += "])", t3;
}
function H3(e5, n7) {
  throw new c2(e5, r3.NeverReach, n7);
}
function Q2(e5, n7) {
  const t3 = _e2(e5), o3 = _e2(e5), l5 = _e2(e5);
  let r7 = "var " + t3 + " = " + J3(e5, n7.right) + ";\n";
  "VariableDeclaration" === n7.left.type && (r7 += J3(e5, n7.left));
  let a5 = "VariableDeclaration" === n7.left.type ? n7.left.declarations[0].id.name : n7.left.name;
  a5 = a5.toLowerCase(), ue(a5);
  let s6 = "";
  null !== e5.localScope && (void 0 !== e5.localScope[a5] ? s6 = "lscope['" + a5 + "']" : void 0 !== e5.localScope._SymbolsMap[a5] && (s6 = "lscope['" + e5.localScope._SymbolsMap[a5] + "']"));
  let i3 = "";
  if ("" === s6) {
    if (void 0 !== e5.globalScope[a5]) s6 = "gscope['" + a5 + "']";
    else if (void 0 !== e5.globalScope._SymbolsMap[a5]) s6 = "gscope['" + e5.globalScope._SymbolsMap[a5] + "']";
    else if (null !== e5.localScope) if (e5.undeclaredGlobalsInFunctions.has(a5)) s6 = "gscope['" + e5.undeclaredGlobalsInFunctions.get(a5).manglename + "']", i3 = e5.undeclaredGlobalsInFunctions.get(a5).manglename;
    else {
      const t4 = {
        manglename: Ae(e5),
        node: n7.left
      };
      e5.undeclaredGlobalsInFunctions.set(a5, t4), s6 = "gscope['" + t4.manglename + "']", i3 = t4.manglename;
    }
  }
  return i3 && (r7 += "lang.chkAssig('" + i3 + "',runtimeCtx); \n"), r7 += "if (" + t3 + "===null) {  lastStatement = lc.voidOperation; }\n ", r7 += "else if (lc.isArray(" + t3 + ") || lc.isString(" + t3 + ")) {", r7 += "var " + o3 + "=" + t3 + ".length; \n", r7 += "for(var " + l5 + "=0; " + l5 + "<" + o3 + "; " + l5 + "++) {\n", r7 += s6 + "=" + l5 + ";\n", r7 += J3(e5, n7.body), r7 += "\n}\n", r7 += " lastStatement = lc.voidOperation; \n", r7 += " \n}\n", r7 += "else if (lc.isImmutableArray(" + t3 + ")) {", r7 += "var " + o3 + "=" + t3 + ".length(); \n", r7 += "for(var " + l5 + "=0; " + l5 + "<" + o3 + "; " + l5 + "++) {\n", r7 += s6 + "=" + l5 + ";\n", r7 += J3(e5, n7.body), r7 += "\n}\n", r7 += " lastStatement = lc.voidOperation; \n", r7 += " \n}\n", r7 += "else if (( " + t3 + " instanceof lang.Dictionary) || ( " + t3 + " instanceof lang.Feature)) {", r7 += "var " + o3 + "=" + t3 + ".keys(); \n", r7 += "for(var " + l5 + "=0; " + l5 + "<" + o3 + ".length; " + l5 + "++) {\n", r7 += s6 + "=" + o3 + "[" + l5 + "];\n", r7 += J3(e5, n7.body), r7 += "\n}\n", r7 += " lastStatement = lc.voidOperation; \n", r7 += " \n}\n", e5.isAsync && (r7 += "else if (lc.isFeatureSet(" + t3 + ")) {", r7 += "var " + o3 + "=" + t3 + ".iterator(runtimeCtx.abortSignal); \n", r7 += "for(var " + l5 + "=lang. graphicToFeature( yield " + o3 + ".next()," + t3 + ", runtimeCtx); " + l5 + "!=null; " + l5 + "=lang. graphicToFeature( yield " + o3 + ".next()," + t3 + ", runtimeCtx)) {\n", r7 += s6 + "=" + l5 + ";\n", r7 += J3(e5, n7.body), r7 += "\n}\n", r7 += " lastStatement = lc.voidOperation; \n", r7 += " \n}\n"), r7 += "else { lastStatement = lc.voidOperation; } \n", r7;
}
function X2(e5, n7) {
  let t3 = "lastStatement = lc.voidOperation; \n";
  null !== n7.init && (t3 += J3(e5, n7.init) + "; ");
  const o3 = _e2(e5), l5 = _e2(e5);
  return t3 += "var " + o3 + " = true; ", t3 += "\n do { ", null !== n7.update && (t3 += " if (" + o3 + "===false) {\n " + J3(e5, n7.update) + "  \n}\n " + o3 + "=false; \n"), null !== n7.test && (t3 += "var " + l5 + " = " + J3(e5, n7.test) + "; ", t3 += "if (" + l5 + "===false) { break; } else if (" + l5 + "!==true) { lang.error('" + r3.BooleanConditionRequired + "');   }\n"), t3 += J3(e5, n7.body), null !== n7.update && (t3 += "\n " + J3(e5, n7.update)), t3 += "\n" + o3 + " = true; \n} while(true);  lastStatement = lc.voidOperation; ", t3;
}
function ee2(e5, n7) {
  let t3 = null, o3 = "";
  if ("MemberExpression" === n7.argument.type) return t3 = J3(e5, n7.argument.object), true === n7.argument.computed ? o3 = J3(e5, n7.argument.property) : (o3 = "'" + n7.argument.property.name + "'", ue(n7.argument.property.name)), "lang.memberupdate(" + t3 + "," + o3 + ",'" + n7.operator + "'," + n7.prefix + ")";
  if (t3 = n7.argument.name.toLowerCase(), ue(t3), null !== e5.localScope) {
    if (void 0 !== e5.localScope[t3]) return "lang.update(lscope, '" + t3 + "','" + n7.operator + "'," + n7.prefix + ")";
    if (void 0 !== e5.localScope._SymbolsMap[t3]) return "lang.update(lscope, '" + e5.localScope._SymbolsMap[t3] + "','" + n7.operator + "'," + n7.prefix + ")";
  }
  if (void 0 !== e5.globalScope[t3]) return "lang.update(gscope, '" + t3 + "','" + n7.operator + "'," + n7.prefix + ")";
  if (void 0 !== e5.globalScope._SymbolsMap[t3]) return "lang.update(gscope, '" + e5.globalScope._SymbolsMap[t3] + "','" + n7.operator + "'," + n7.prefix + ")";
  if (null !== e5.localScope) {
    if (e5.undeclaredGlobalsInFunctions.has(t3)) return "lang.update(gscope,lang.chkAssig( '" + e5.undeclaredGlobalsInFunctions.get(t3).manglename + "',runtimeCtx),'" + n7.operator + "'," + n7.prefix + ")";
    const o4 = {
      manglename: Ae(e5),
      node: n7.argument
    };
    return e5.undeclaredGlobalsInFunctions.set(t3, o4), "lang.update(gscope, lang.chkAssig('" + o4.manglename + "',runtimeCtx),'" + n7.operator + "'," + n7.prefix + ")";
  }
  throw new a3(e5, r3.InvalidIdentifier, n7);
}
function ne(e5, n7) {
  let t3 = "lastStatement = lc.voidOperation; \n";
  const o3 = _e2(e5);
  return t3 += `
  var ${o3} = true;
    do {
      ${o3} = ${J3(e5, n7.test)};
      if (${o3}==false) {
        break;
      }
      if (${o3}!==true) {
        lang.error('${r3.BooleanConditionRequired}');
      }
      ${J3(e5, n7.body)}
    }
    while (${o3} !== false);
    lastStatement = lc.voidOperation;
  `, t3;
}
function te2(e5, n7) {
  const t3 = J3(e5, n7.right);
  let o3 = null, l5 = "";
  if ("MemberExpression" === n7.left.type) return o3 = J3(e5, n7.left.object), true === n7.left.computed ? l5 = J3(e5, n7.left.property) : (l5 = "'" + n7.left.property.name + "'", ue(n7.left.property.name)), "lang.assignmember(" + o3 + "," + l5 + ",'" + n7.operator + "'," + t3 + ")";
  if (o3 = n7.left.name.toLowerCase(), ue(o3), null !== e5.localScope) {
    if (void 0 !== e5.localScope[o3]) return "lscope['" + o3 + "']=lang.assign(" + t3 + ",'" + n7.operator + "', lscope['" + o3 + "'])";
    if (void 0 !== e5.localScope._SymbolsMap[o3]) return "lscope['" + e5.localScope._SymbolsMap[o3] + "']=lang.assign(" + t3 + ",'" + n7.operator + "', lscope['" + e5.localScope._SymbolsMap[o3] + "'])";
  }
  if (void 0 !== e5.globalScope[o3]) return "gscope['" + o3 + "']=lang.assign(" + t3 + ",'" + n7.operator + "', gscope['" + o3 + "'])";
  if (void 0 !== e5.globalScope._SymbolsMap[o3]) return "gscope['" + e5.globalScope._SymbolsMap[o3] + "']=lang.assign(" + t3 + ",'" + n7.operator + "', gscope['" + e5.globalScope._SymbolsMap[o3] + "'])";
  if (null !== e5.localScope) {
    if (e5.undeclaredGlobalsInFunctions.has(o3)) return "gscope[lang.chkAssig('" + e5.undeclaredGlobalsInFunctions.get(o3).manglename + "',runtimeCtx)]=lang.assign(" + t3 + ",'" + n7.operator + "', gscope['" + e5.undeclaredGlobalsInFunctions.get(o3).manglename + "'])";
    const l6 = {
      manglename: Ae(e5),
      node: n7.argument
    };
    return e5.undeclaredGlobalsInFunctions.set(o3, l6), "gscope[lang.chkAssig('" + l6.manglename + "',runtimeCtx)]=lang.assign(" + t3 + ",'" + n7.operator + "', gscope['" + l6.manglename + "'])";
  }
  throw new a3(e5, r3.InvalidIdentifier, n7);
}
function oe(e5, n7) {
  return "AssignmentExpression" === n7.expression.type ? "lastStatement = lc.voidOperation; " + J3(e5, n7.expression) + "; \n " : (n7.expression.type, "lastStatement = " + J3(e5, n7.expression) + "; ");
}
function le(e5, n7) {
  return "BlockStatement" === n7.type ? J3(e5, n7) : "ReturnStatement" === n7.type || "BreakStatement" === n7.type || "ContinueStatement" === n7.type ? J3(e5, n7) + "; " : "UpdateExpression" === n7.type ? "lastStatement = " + J3(e5, n7) + "; " : "ExpressionStatement" === n7.type ? J3(e5, n7) : "ObjectExpression" === n7.type ? "lastStatement = " + J3(e5, n7) + "; " : J3(e5, n7) + "; ";
}
function re(e5, n7) {
  if ("AssignmentExpression" === n7.test.type || "UpdateExpression" === n7.test.type) throw new c2(e5, r3.BooleanConditionRequired, n7);
  return `if (lang.mustBoolean(${J3(e5, n7.test)}, runtimeCtx) === true) {
    ${le(e5, n7.consequent)}
  } ` + (null !== n7.alternate ? "IfStatement" === n7.alternate.type ? " else " + re(e5, n7.alternate) : ` else {
      ${le(e5, n7.alternate)}
    }
` : " else {\n      lastStatement = lc.voidOperation;\n    }\n");
}
function ae2(e5, n7) {
  let t3 = "";
  for (let o3 = 0; o3 < n7.body.length; o3++) "EmptyStatement" !== n7.body[o3].type && ("ReturnStatement" === n7.body[o3].type || "BreakStatement" === n7.body[o3].type || "ContinueStatement" === n7.body[o3].type ? t3 += J3(e5, n7.body[o3]) + "; \n" : "UpdateExpression" === n7.body[o3].type || "ObjectExpression" === n7.body[o3].type ? t3 += "lastStatement = " + J3(e5, n7.body[o3]) + "; \n" : t3 += J3(e5, n7.body[o3]) + " \n");
  return t3;
}
function se(e5, n7) {
  if (null === n7.argument) return "return lc.voidOperation";
  return "return " + J3(e5, n7.argument);
}
function ie(e5, n7) {
  const t3 = n7.specifiers[0].local.name.toLowerCase();
  ue(t3);
  const o3 = e5.libraryResolver?.loadLibrary(t3), l5 = Ae(e5);
  void 0 === e5.moduleFactory[o3.uri] && (e5.moduleFactory[o3.uri] = Te(o3.syntax, {
    interceptor: e5.interceptor,
    services: e5.services,
    moduleFactory: e5.moduleFactory,
    lrucache: e5.lrucache,
    timeZone: e5.timeZone ?? null,
    libraryResolver: e5.libraryResolver,
    customfunctions: e5.customfunctions,
    vars: {}
  }, e5.isAsync)), e5.moduleFactoryMap[l5] = o3.uri;
  let r7 = "";
  if (r7 = e5.isAsync ? "(yield lang.loadModule('" + l5 + "', runtimeCtx) ); " : "lang.loadModule('" + l5 + "', runtimeCtx); ", void 0 !== e5.globalScope[t3]) return "gscope['" + t3 + "']=" + r7;
  if (void 0 !== e5.globalScope._SymbolsMap[t3]) return "gscope['" + e5.globalScope._SymbolsMap[t3] + "']=" + r7;
  let a5 = "";
  return e5.undeclaredGlobalsInFunctions.has(t3) ? (a5 = e5.undeclaredGlobalsInFunctions.get(t3).manglename, e5.undeclaredGlobalsInFunctions.delete(t3)) : a5 = Ae(e5), e5.globalScope._SymbolsMap[t3] = a5, e5.mangleMap[t3] = a5, "gscope[lang.setAssig('" + a5 + "', runtimeCtx)]=" + r7;
}
function ce2(e5, n7) {
  const t3 = J3(e5, n7.declaration);
  if ("FunctionDeclaration" === n7.declaration.type) e5.exports[n7.declaration.id.name.toLowerCase()] = "function";
  else if ("VariableDeclaration" === n7.declaration.type) for (const o3 of n7.declaration.declarations) e5.exports[o3.id.name.toLowerCase()] = "variable";
  return t3;
}
function ue(e5) {
  if ("iif" === e5) throw new i();
  if ("decode" === e5) throw new i();
  if ("when" === e5) throw new i();
  if ("defaultvalue" === e5) throw new i();
}
function pe(e5, n7) {
  const t3 = n7.id.name.toLowerCase();
  ue(t3);
  let o3 = "", l5 = false;
  void 0 !== e5.globalScope[t3] ? o3 = t3 : void 0 !== e5.globalScope._SymbolsMap[t3] ? o3 = e5.globalScope._SymbolsMap[t3] : e5.undeclaredGlobalsInFunctions.has(t3) ? (o3 = e5.undeclaredGlobalsInFunctions.get(t3).manglename, e5.globalScope._SymbolsMap[t3] = o3, e5.mangleMap[t3] = o3, e5.undeclaredGlobalsInFunctions.delete(t3), l5 = true) : (o3 = Ae(e5), e5.globalScope._SymbolsMap[t3] = o3, e5.mangleMap[t3] = o3);
  const r7 = {
    isAsync: e5.isAsync,
    console: e5.console,
    exports: e5.exports,
    undeclaredGlobalsInFunctions: e5.undeclaredGlobalsInFunctions,
    customfunctions: e5.customfunctions,
    moduleFactory: e5.moduleFactory,
    moduleFactoryMap: e5.moduleFactoryMap,
    libraryResolver: e5.libraryResolver,
    lrucache: e5.lrucache,
    interceptor: e5.interceptor,
    services: e5.services,
    symbols: e5.symbols,
    mangleMap: e5.mangleMap,
    localScope: {
      _SymbolsMap: {}
    },
    depthCounter: e5.depthCounter,
    globalScope: e5.globalScope
  };
  let a5 = "new lang.UserDefinedCompiledFunction( lang.functionDepthchecker(function() { var lastStatement = lc.voidOperation; \n   var lscope = runtimeCtx.localStack[runtimeCtx.localStack.length-1];\n";
  for (let s6 = 0; s6 < n7.params.length; s6++) {
    const t4 = n7.params[s6].name.toLowerCase();
    ue(t4);
    const o4 = Ae(e5);
    r7.localScope._SymbolsMap[t4] = o4, r7.mangleMap[t4] = o4, a5 += "lscope['" + o4 + "']=arguments[" + s6.toString() + "];\n";
  }
  return true === e5.isAsync ? (a5 += "return lang.__awaiter(this, void 0, void 0, function* () {\n", a5 += ae2(r7, n7.body) + "\n return lastStatement; ", a5 += "});  }", a5 += ", runtimeCtx)," + n7.params.length + ")", a5 += "\n lastStatement = lc.voidOperation; \n") : (a5 += ae2(r7, n7.body) + "\n return lastStatement; }, runtimeCtx)," + n7.params.length + ")", a5 += "\n lastStatement = lc.voidOperation; \n"), l5 ? "gscope[lang.setAssig('" + o3 + "', runtimeCtx)]=" + a5 : "gscope['" + o3 + "']=" + a5;
}
function me2(e5, n7) {
  const t3 = [];
  for (let o3 = 0; o3 < n7.declarations.length; o3++) t3.push(J3(e5, n7.declarations[o3]));
  return t3.join("\n") + " \n lastStatement=  lc.voidOperation; \n";
}
function ge2(e5, n7) {
  let t3 = null === n7.init ? null : J3(e5, n7.init);
  t3 === O && (t3 = null);
  const o3 = n7.id.name.toLowerCase();
  if (ue(o3), null !== e5.localScope) {
    if (void 0 !== e5.localScope[o3]) return "lscope['" + o3 + "']=" + t3 + "; ";
    if (void 0 !== e5.localScope._SymbolsMap[o3]) return "lscope['" + e5.localScope._SymbolsMap[o3] + "']=" + t3 + "; ";
    {
      const n8 = Ae(e5);
      return e5.localScope._SymbolsMap[o3] = n8, e5.mangleMap[o3] = n8, "lscope['" + n8 + "']=" + t3 + "; ";
    }
  }
  if (void 0 !== e5.globalScope[o3]) return "gscope['" + o3 + "']=" + t3 + "; ";
  if (void 0 !== e5.globalScope._SymbolsMap[o3]) return "gscope['" + e5.globalScope._SymbolsMap[o3] + "']=" + t3 + "; ";
  if (e5.undeclaredGlobalsInFunctions.has(o3)) {
    const n8 = e5.undeclaredGlobalsInFunctions.get(o3).manglename;
    return e5.globalScope._SymbolsMap[o3] = n8, e5.mangleMap[o3] = n8, e5.undeclaredGlobalsInFunctions.delete(o3), "gscope[lang.setAssig('" + n8 + "', runtimeCtx)]=" + t3 + "; ";
  }
  const l5 = Ae(e5);
  return e5.globalScope._SymbolsMap[o3] = l5, e5.mangleMap[o3] = l5, "gscope['" + l5 + "']=" + t3 + "; ";
}
function de(e5, n7) {
  try {
    let t3;
    return true === n7.computed ? t3 = J3(e5, n7.property) : (t3 = "'" + n7.property.name + "'", ue(n7.property.name)), "lang.member(" + J3(e5, n7.object) + "," + t3 + ")";
  } catch (t3) {
    throw t3;
  }
}
function fe2(e5, n7) {
  try {
    return "lang.unary(" + J3(e5, n7.argument) + ",'" + n7.operator + "')";
  } catch (t3) {
    throw t3;
  }
}
function he(e5, n7) {
  try {
    const t3 = [];
    for (let o3 = 0; o3 < n7.elements.length; o3++) "Literal" === n7.elements[o3].type ? t3.push(J3(e5, n7.elements[o3])) : t3.push("lang.aCheck(" + J3(e5, n7.elements[o3]) + ",'ArrayExpression')");
    return "[" + t3.join(",") + "]";
  } catch (t3) {
    throw t3;
  }
}
function ye(e5, n7) {
  try {
    const t3 = [];
    let o3 = 0;
    for (const l5 of n7.quasis) t3.push(l5.value ? JSON.stringify(l5.value.cooked) : JSON.stringify("")), false === l5.tail && (t3.push(n7.expressions[o3] ? "lang.castString(lang.aCheck(" + J3(e5, n7.expressions[o3]) + ", 'TemplateLiteral'))" : ""), o3++);
    return "([" + t3.join(",") + "]).join('')";
  } catch (t3) {
    throw t3;
  }
}
function be(e5, n7) {
  try {
    return "lang.binary(" + J3(e5, n7.left) + "," + J3(e5, n7.right) + ",'" + n7.operator + "')";
  } catch (t3) {
    throw t3;
  }
}
function we(e5, n7) {
  try {
    if ("AssignmentExpression" === n7.left.type || "UpdateExpression" === n7.left.type) throw new c2(e5, r3.LogicalExpressionOnlyBoolean, n7);
    if ("AssignmentExpression" === n7.right.type || "UpdateExpression" === n7.right.type) throw new c2(e5, r3.LogicalExpressionOnlyBoolean, n7);
    if ("&&" === n7.operator || "||" === n7.operator) return "(lang.logicalCheck(" + J3(e5, n7.left) + ") " + n7.operator + " lang.logicalCheck(" + J3(e5, n7.right) + "))";
    throw new c2(null, r3.LogicExpressionOrAnd, null);
  } catch (t3) {
    throw t3;
  }
}
function Se(e5, n7) {
  try {
    const t3 = n7.name.toLowerCase();
    if (ue(t3), null !== e5.localScope) {
      if (void 0 !== e5.localScope[t3]) return "lscope['" + t3 + "']";
      if (void 0 !== e5.localScope._SymbolsMap[t3]) return "lscope['" + e5.localScope._SymbolsMap[t3] + "']";
    }
    if (void 0 !== e5.globalScope[t3]) return "gscope['" + t3 + "']";
    if (void 0 !== e5.globalScope._SymbolsMap[t3]) return "gscope['" + e5.globalScope._SymbolsMap[t3] + "']";
    if (null !== e5.localScope) {
      if (e5.undeclaredGlobalsInFunctions.has(t3)) return "gscope[lang.chkAssig('" + e5.undeclaredGlobalsInFunctions.get(t3).manglename + "',runtimeCtx)]";
      const o3 = {
        manglename: Ae(e5),
        node: n7.argument
      };
      return e5.undeclaredGlobalsInFunctions.set(t3, o3), "gscope[lang.chkAssig('" + o3.manglename + "',runtimeCtx)]";
    }
    throw new c2(e5, r3.InvalidIdentifier, n7);
  } catch (t3) {
    throw t3;
  }
}
function ve(e5, n7) {
  try {
    if ("MemberExpression" === n7.callee.type) {
      let t4;
      true === n7.callee.computed ? t4 = J3(e5, n7.callee.property) : (t4 = "'" + n7.callee.property.name + "'", ue(n7.callee.property.name));
      let o4 = "[";
      for (let l5 = 0; l5 < n7.arguments.length; l5++) l5 > 0 && (o4 += ", "), o4 += J3(e5, n7.arguments[l5]);
      return o4 += "]", e5.isAsync ? "(yield lang.callModuleFunction(" + J3(e5, n7.callee.object) + "," + o4 + "," + t4 + ",runtimeCtx))" : "lang.callModuleFunction(" + J3(e5, n7.callee.object) + "," + o4 + "," + t4 + ",runtimeCtx)";
    }
    if ("Identifier" !== n7.callee.type) throw new c2(e5, r3.FunctionNotFound, n7);
    const t3 = n7.callee.name.toLowerCase();
    if ("iif" === t3) return xe2(e5, n7);
    if ("when" === t3) return Fe2(e5, n7);
    if ("defaultvalue" === t3) return Me2(e5, n7);
    if ("decode" === t3) return Ce(e5, n7);
    let o3 = "";
    if (null !== e5.localScope && (void 0 !== e5.localScope[t3] ? o3 = "lscope['" + t3 + "']" : void 0 !== e5.localScope._SymbolsMap[t3] && (o3 = "lscope['" + e5.localScope._SymbolsMap[t3] + "']")), "" === o3) {
      if (void 0 !== e5.globalScope[t3]) o3 = "gscope['" + t3 + "']";
      else if (void 0 !== e5.globalScope._SymbolsMap[t3]) o3 = "gscope['" + e5.globalScope._SymbolsMap[t3] + "']";
      else if (null !== e5.localScope) if (e5.undeclaredGlobalsInFunctions.has(t3)) o3 = "gscope[lang.chkAssig('" + e5.undeclaredGlobalsInFunctions.get(t3).manglename + "',runtimeCtx)]";
      else {
        const l5 = {
          manglename: Ae(e5),
          node: n7.argument
        };
        e5.undeclaredGlobalsInFunctions.set(t3, l5), o3 = "gscope[lang.chkAssig('" + l5.manglename + "',runtimeCtx)]";
      }
    }
    if ("" !== o3) {
      let t4 = "[";
      for (let o4 = 0; o4 < n7.arguments.length; o4++) o4 > 0 && (t4 += ", "), t4 += J3(e5, n7.arguments[o4]);
      return t4 += "]", e5.isAsync ? "(yield lang.callfunc(" + o3 + "," + t4 + ",runtimeCtx) )" : "lang.callfunc(" + o3 + "," + t4 + ",runtimeCtx)";
    }
    throw new c2(e5, r3.FunctionNotFound, n7);
  } catch (t3) {
    throw t3;
  }
}
function xe2(e5, n7) {
  try {
    if (3 !== n7.arguments.length) throw new c2(e5, r3.WrongNumberOfParameters, n7);
    const t3 = _e2(e5);
    return `${e5.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
        var ${t3} = ${J3(e5, n7.arguments[0])};

        if (${t3} === true) {
          return  ${J3(e5, n7.arguments[1])};
        }
        else if (${t3} === false) {
          return ${J3(e5, n7.arguments[2])};
        }
        else {
          lang.error('ExecutionErrorCodes.BooleanConditionRequired');
        }
      ${e5.isAsync ? "})}()))" : "}()"}`;
  } catch (t3) {
    throw t3;
  }
}
function Me2(e5, n7) {
  try {
    if (n7.arguments.length < 2 || n7.arguments.length > 3) throw new c2(e5, r3.WrongNumberOfParameters, n7);
    const t3 = _e2(e5), o3 = _e2(e5);
    return 3 === n7.arguments.length ? `${e5.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
      var ${t3} = ${J3(e5, n7.arguments[0])};
      var ${o3} = ${J3(e5, n7.arguments[1])};
      ${t3} = lang.getNestedOptionalValue(${t3}, ${o3});
      return ${t3} != null && ${t3} !== "" ? ${t3} : ${J3(e5, n7.arguments[2])};
      ${e5.isAsync ? "})}()))" : "}()"}` : `${e5.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
        var ${t3} = ${J3(e5, n7.arguments[0])};
        if (${t3} === null) {
          return  ${J3(e5, n7.arguments[1])};
        }
        if (${t3} === "") {
          return  ${J3(e5, n7.arguments[1])};
        }
        if (${t3} === undefined) {
          return  ${J3(e5, n7.arguments[1])};
        }
        return ${t3};
      ${e5.isAsync ? "})}()))" : "}()"}`;
  } catch (t3) {
    throw t3;
  }
}
function Fe2(e5, n7) {
  try {
    if (n7.arguments.length < 3) throw new c2(e5, r3.WrongNumberOfParameters, n7);
    if (n7.arguments.length % 2 == 0) throw new c2(e5, r3.WrongNumberOfParameters, n7);
    const t3 = _e2(e5);
    let o3 = "var ";
    for (let l5 = 0; l5 < n7.arguments.length - 1; l5 += 2) o3 += `${t3} = lang.mustBoolean(${J3(e5, n7.arguments[l5])}, runtimeCtx);
      if (${t3} === true ) {
        return ${J3(e5, n7.arguments[l5 + 1])}
      }
`;
    return `${e5.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
        ${o3}
        return ${J3(e5, n7.arguments[n7.arguments.length - 1])}
        ${e5.isAsync ? "})}()))" : "}()"}`;
  } catch (t3) {
    throw t3;
  }
}
function Ce(e5, n7) {
  try {
    if (n7.arguments.length < 2) throw new c2(e5, r3.WrongNumberOfParameters, n7);
    if (2 === n7.arguments.length) return `(${J3(e5, n7.arguments[1])})`;
    if ((n7.arguments.length - 1) % 2 == 0) throw new c2(e5, r3.WrongNumberOfParameters, n7);
    const t3 = _e2(e5), o3 = _e2(e5);
    let l5 = "var ";
    for (let r7 = 1; r7 < n7.arguments.length - 1; r7 += 2) l5 += `${o3} = ${J3(e5, n7.arguments[r7])};
      if (lang.binary(${o3}, ${t3}, "==") === true ) {
        return ${J3(e5, n7.arguments[r7 + 1])}
      }
`;
    return `${e5.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
        var ${t3} = ${J3(e5, n7.arguments[0])};
        ${l5}
        return ${J3(e5, n7.arguments[n7.arguments.length - 1])}
        ${e5.isAsync ? "})}()))" : "}()"}`;
  } catch (t3) {
    throw t3;
  }
}
var Ie = {};
function Ae(e5) {
  return e5.symbols.symbolCounter++, "_T" + e5.symbols.symbolCounter.toString();
}
function _e2(e5) {
  return e5.symbols.symbolCounter++, "_Tvar" + e5.symbols.symbolCounter.toString();
}
C(Ie, z2), Y(Ie, z2), M2(Ie, z2), L(Ie, z2), f2(Ie, z2), Ie.iif = function(e5, n7) {
  try {
    return z2(e5, n7, (t3, o3, l5) => {
      throw new a3(e5, r3.Unrecognized, n7);
    });
  } catch (t3) {
    throw t3;
  }
}, Ie.decode = function(e5, n7) {
  try {
    return z2(e5, n7, (t3, o3, l5) => {
      throw new a3(e5, r3.Unrecognized, n7);
    });
  } catch (t3) {
    throw t3;
  }
}, Ie.when = function(e5, n7) {
  try {
    return z2(e5, n7, (t3, o3, l5) => {
      throw new a3(e5, r3.Unrecognized, n7);
    });
  } catch (t3) {
    throw t3;
  }
}, Ie.defaultvalue = function(e5, n7) {
  try {
    return z2(e5, n7, (t3, o3, l5) => {
      throw new a3(e5, r3.Unrecognized, n7);
    });
  } catch (t3) {
    throw t3;
  }
};
var Oe2 = {};
for (const qe in Ie) Oe2[qe] = new e(Ie[qe]);
H2(Ie, z2);
for (const qe in Ie) Ie[qe] = new e(Ie[qe]);
var $e2 = function() {
};
$e2.prototype = Ie;
var ke = function() {
};
function Ee(e5, n7, t3) {
  const o3 = {};
  e5 || (e5 = {}), t3 || (t3 = {}), o3._SymbolsMap = {}, o3.textformatting = 1, o3.infinity = 1, o3.pi = 1;
  for (const l5 in n7) o3[l5] = 1;
  for (const l5 in t3) o3[l5] = 1;
  for (const l5 in e5) o3[l5] = 1;
  return o3;
}
function Ge(e5, n7, t3, o3) {
  const r7 = t3 ? new ke() : new $e2();
  e5 || (e5 = {}), n7 || (n7 = {});
  const a5 = new N({
    newline: "\n",
    tab: "	",
    singlequote: "'",
    doublequote: '"',
    forwardslash: "/",
    backwardslash: "\\"
  });
  a5.immutable = false, r7._SymbolsMap = {
    textformatting: 1,
    infinity: 1,
    pi: 1
  }, r7.textformatting = a5, r7.infinity = Number.POSITIVE_INFINITY, r7.pi = Math.PI;
  for (const l5 in n7) r7[l5] = n7[l5], r7._SymbolsMap[l5] = 1;
  for (const l5 in e5) r7._SymbolsMap[l5] = 1, e5[l5] && "esri.Graphic" === e5[l5].declaredClass ? r7[l5] = D.createFromGraphic(e5[l5], o3 ?? null) : r7[l5] = e5[l5];
  return r7;
}
ke.prototype = Oe2;
function je(e5, n7) {
  const t3 = {
    mode: n7,
    compiled: true,
    functions: {},
    signatures: [],
    standardFunction: z2,
    standardFunctionAsync: z2,
    evaluateIdentifier: Le
  };
  for (let o3 = 0; o3 < e5.length; o3++) e5[o3].registerFunctions(t3);
  if ("sync" === n7) {
    for (const e6 in t3.functions) Ie[e6] = new e(t3.functions[e6]), $e2.prototype[e6] = Ie[e6];
    for (let e6 = 0; e6 < t3.signatures.length; e6++) o(t3.signatures[e6], "sync");
  } else {
    for (const e6 in t3.functions) Oe2[e6] = new e(t3.functions[e6]), ke.prototype[e6] = Oe2[e6];
    for (let e6 = 0; e6 < t3.signatures.length; e6++) o(t3.signatures[e6], "async");
  }
}
function Le(e5, n7) {
  const t3 = n7.name;
  if ("_SymbolsMap" === t3) throw new a3(e5, r3.InvalidIdentifier, null);
  if (e5.localStack.length > 0) {
    if ("_t" !== t3.substr(0, 2).toLowerCase() && void 0 !== e5.localStack[e5.localStack.length - 1][t3]) return e5.localStack[e5.localStack.length - 1][t3];
    const n8 = e5.mangleMap[t3];
    if (void 0 !== n8 && void 0 !== e5.localStack[e5.localStack.length - 1][n8]) return e5.localStack[e5.localStack.length - 1][n8];
  }
  if ("_t" !== t3.substr(0, 2).toLowerCase() && void 0 !== e5.globalScope[t3]) return e5.globalScope[t3];
  if (1 === e5.globalScope._SymbolsMap[t3]) return e5.globalScope[t3];
  const o3 = e5.mangleMap[t3];
  return void 0 !== o3 ? e5.globalScope[o3] : void 0;
}
je([p4], "sync"), je([p4], "async");
var Re = 0;
var Ue = {
  isNumber: (e5) => E(e5),
  isArray: (e5) => U2(e5),
  isImmutableArray: (e5) => Q(e5),
  isFeature: (e5) => H(e5),
  isString: (e5) => G(e5),
  isDictionary: (e5) => K(e5),
  isGeometry: (e5) => q(e5),
  geometryMember: (e5, n7, o3, l5, r7 = 1) => d(e5, n7, o3, l5, r7),
  error(e5) {
    throw new a3(null, e5, null);
  },
  __awaiter: (e5, n7, t3, o3) => new Promise((t4, l5) => {
    function r7(e6) {
      try {
        s6(o3.next(e6));
      } catch (n8) {
        l5(n8);
      }
    }
    function a5(e6) {
      try {
        s6(o3.throw(e6));
      } catch (n8) {
        l5(n8);
      }
    }
    function s6(e6) {
      e6.done ? t4(e6.value) : e6.value?.then ? e6.value.then(r7, a5) : (Re++, Re % 100 == 0 ? setTimeout(() => {
        Re = 0, r7(e6.value);
      }, 0) : r7(e6.value));
    }
    s6((o3 = o3.apply(e5, n7 || [])).next());
  }),
  functionDepthchecker: (e5, n7) => function() {
    if (n7.depthCounter.depth++, n7.localStack.push([]), n7.depthCounter.depth > 64) throw new a3(null, r3.MaximumCallDepth, null);
    const t3 = e5.apply(this, arguments);
    return S(t3) ? t3.then((e6) => (n7.depthCounter.depth--, n7.localStack.length = n7.localStack.length - 1, e6)) : (n7.depthCounter.depth--, n7.localStack.length = n7.localStack.length - 1, t3);
  },
  chkAssig(e5, n7) {
    if (void 0 === n7.gdefs[e5]) throw new a3(n7, r3.InvalidIdentifier, null);
    return e5;
  },
  mustBoolean(e5, n7) {
    if (true === e5 || false === e5) return e5;
    throw new a3(n7, r3.BooleanConditionRequired, null);
  },
  setAssig: (e5, n7) => (n7.gdefs[e5] = 1, e5),
  castString: (e5) => me(e5),
  aCheck(e5, n7) {
    if (_2(e5)) {
      if ("ArrayExpression" === n7) throw new a3(null, r3.NoFunctionInArray, null);
      if ("ObjectExpression" === n7) throw new a3(null, r3.NoFunctionInDictionary, null);
      throw new a3(null, r3.NoFunctionInTemplateLiteral, null);
    }
    return e5 === O ? null : e5;
  },
  Dictionary: N,
  Feature: D,
  UserDefinedCompiledFunction: W4,
  dictionary(e5) {
    const n7 = {}, t3 = /* @__PURE__ */ new Map();
    for (let l5 = 0; l5 < e5.length; l5 += 2) {
      if (_2(e5[l5 + 1])) throw new a3(null, r3.NoFunctionInDictionary, null);
      if (false === G(e5[l5])) throw new a3(null, r3.KeyMustBeString, null);
      let o4 = e5[l5].toString();
      const s6 = o4.toLowerCase();
      t3.has(s6) ? o4 = t3.get(s6) : t3.set(s6, o4), e5[l5 + 1] === O ? n7[o4] = null : n7[o4] = e5[l5 + 1];
    }
    const o3 = new N(n7);
    return o3.immutable = false, o3;
  },
  strCheck(e5) {
    if (false === G(e5)) throw new a3(null, r3.KeyMustBeString, null);
    return e5;
  },
  unary(e5, n7) {
    if (z(e5)) {
      if ("!" === n7) return !e5;
      if ("-" === n7) return -1 * ge(e5);
      if ("+" === n7) return 1 * ge(e5);
      if ("~" === n7) return ~ge(e5);
      throw new a3(null, r3.UnsupportedUnaryOperator, null);
    }
    if ("-" === n7) return -1 * ge(e5);
    if ("+" === n7) return 1 * ge(e5);
    if ("~" === n7) return ~ge(e5);
    throw new a3(null, r3.UnsupportedUnaryOperator, null);
  },
  logicalCheck(e5) {
    if (false === z(e5)) throw new a3(null, r3.LogicExpressionOrAnd, null);
    return e5;
  },
  logical(e5, n7, t3) {
    if (z(e5) && z(n7)) switch (t3) {
      case "||":
        return e5 || n7;
      case "&&":
        return e5 && n7;
      default:
        throw new a3(null, r3.LogicExpressionOrAnd, null);
    }
    throw new a3(null, r3.LogicExpressionOrAnd, null);
  },
  binary(e5, n7, t3) {
    switch (t3) {
      case "|":
      case "<<":
      case ">>":
      case ">>>":
      case "^":
      case "&":
        return _e(ge(e5), ge(n7), t3);
      case "==":
      case "=":
        return ce(e5, n7);
      case "!=":
        return !ce(e5, n7);
      case "<":
      case ">":
      case "<=":
      case ">=":
        return fe(e5, n7, t3);
      case "+":
        return G(e5) || G(n7) ? me(e5) + me(n7) : ge(e5) + ge(n7);
      case "-":
        return ge(e5) - ge(n7);
      case "*":
        return ge(e5) * ge(n7);
      case "/":
        return ge(e5) / ge(n7);
      case "%":
        return ge(e5) % ge(n7);
      default:
        throw new a3(null, r3.UnsupportedOperator, null);
    }
  },
  assign(e5, n7, t3) {
    switch (n7) {
      case "=":
        return e5 === O ? null : e5;
      case "/=":
        return ge(t3) / ge(e5);
      case "*=":
        return ge(t3) * ge(e5);
      case "-=":
        return ge(t3) - ge(e5);
      case "+=":
        return G(t3) || G(e5) ? me(t3) + me(e5) : ge(t3) + ge(e5);
      case "%=":
        return ge(t3) % ge(e5);
      default:
        throw new a3(null, r3.UnsupportedOperator, null);
    }
  },
  update(e5, n7, t3, o3) {
    const l5 = ge(e5[n7]);
    return e5[n7] = "++" === t3 ? l5 + 1 : l5 - 1, false === o3 ? l5 : "++" === t3 ? l5 + 1 : l5 - 1;
  },
  graphicToFeature: (e5, n7, t3) => null === e5 ? null : D.createFromGraphicLikeObject(e5.geometry, e5.attributes, n7, t3.timeZone),
  memberupdate(e5, n7, t3, o3) {
    let s6;
    if (U2(e5)) {
      if (!E(n7)) throw new a3(null, r3.ArrayAccessorMustBeNumber, null);
      if (n7 < 0 && (n7 = e5.length + n7), n7 < 0 || n7 >= e5.length) throw new a3(null, r3.OutOfBounds, null);
      s6 = ge(e5[n7]), e5[n7] = "++" === t3 ? s6 + 1 : s6 - 1;
    } else if (e5 instanceof N) {
      if (false === G(n7)) throw new a3(null, r3.KeyAccessorMustBeString, null);
      if (true !== e5.hasField(n7)) throw new a3(null, r3.FieldNotFound, null, {
        key: n7
      });
      s6 = ge(e5.field(n7)), e5.setField(n7, "++" === t3 ? s6 + 1 : s6 - 1);
    } else if (H(e5)) {
      if (false === G(n7)) throw new a3(null, r3.KeyAccessorMustBeString, null);
      if (true !== e5.hasField(n7)) throw new a3(null, r3.FieldNotFound, null);
      s6 = ge(e5.field(n7)), e5.setField(n7, "++" === t3 ? s6 + 1 : s6 - 1);
    } else {
      if (Q(e5)) throw new a3(null, r3.Immutable, null);
      if (!(e5 instanceof Ke)) throw new a3(null, r3.InvalidIdentifier, null);
      if (false === G(n7)) throw new a3(null, r3.ModuleAccessorMustBeString, null);
      if (true !== e5.hasGlobal(n7)) throw new a3(null, r3.ModuleExportNotFound, null);
      s6 = ge(e5.global(n7)), e5.setGlobal(n7, "++" === t3 ? s6 + 1 : s6 - 1);
    }
    return false === o3 ? s6 : "++" === t3 ? s6 + 1 : s6 - 1;
  },
  assignmember(e5, n7, t3, o3) {
    if (U2(e5)) {
      if (!E(n7)) throw new a3(null, r3.ArrayAccessorMustBeNumber, null);
      if (n7 < 0 && (n7 = e5.length + n7), n7 < 0 || n7 > e5.length) throw new a3(null, r3.OutOfBounds, null);
      if (n7 === e5.length) {
        if ("=" !== t3) throw new a3(null, r3.OutOfBounds, null);
        e5[n7] = this.assign(o3, t3, e5[n7]);
      } else e5[n7] = this.assign(o3, t3, e5[n7]);
    } else if (e5 instanceof N) {
      if (false === G(n7)) throw new a3(null, r3.KeyAccessorMustBeString, null);
      if (true === e5.hasField(n7)) e5.setField(n7, this.assign(o3, t3, e5.field(n7)));
      else {
        if ("=" !== t3) throw new a3(null, r3.FieldNotFound, null);
        e5.setField(n7, this.assign(o3, t3, null));
      }
    } else if (H(e5)) {
      if (false === G(n7)) throw new a3(null, r3.KeyAccessorMustBeString, null);
      if (true === e5.hasField(n7)) e5.setField(n7, this.assign(o3, t3, e5.field(n7)));
      else {
        if ("=" !== t3) throw new a3(null, r3.FieldNotFound, null);
        e5.setField(n7, this.assign(o3, t3, null));
      }
    } else {
      if (Q(e5)) throw new a3(null, r3.Immutable, null);
      if (!(e5 instanceof Ke)) throw new a3(null, r3.InvalidIdentifier, null);
      if (false === G(n7)) throw new a3(null, r3.ModuleAccessorMustBeString, null);
      if (!e5.hasGlobal(n7)) throw new a3(null, r3.ModuleExportNotFound, null);
      e5.setGlobal(n7, this.assign(o3, t3, e5.global(n7)));
    }
  },
  member(e5, n7) {
    if (null === e5) throw new a3(null, r3.MemberOfNull, null);
    if (e5 instanceof N || H(e5)) {
      if (G(n7)) return e5.field(n7);
      throw new a3(null, r3.InvalidMemberAccessKey, null);
    }
    if (e5 instanceof n3) {
      if (G(n7)) return d(e5, n7, null, null);
      throw new a3(null, r3.InvalidMemberAccessKey, null);
    }
    if (U2(e5)) {
      if (E(n7) && isFinite(n7) && Math.floor(n7) === n7) {
        if (n7 < 0 && (n7 = e5.length + n7), n7 >= e5.length || n7 < 0) throw new a3(null, r3.OutOfBounds, null);
        return e5[n7];
      }
      throw new a3(null, r3.InvalidMemberAccessKey, null);
    }
    if (G(e5)) {
      if (E(n7) && isFinite(n7) && Math.floor(n7) === n7) {
        if (n7 < 0 && (n7 = e5.length + n7), n7 >= e5.length || n7 < 0) throw new a3(null, r3.OutOfBounds, null);
        return e5[n7];
      }
      throw new a3(null, r3.InvalidMemberAccessKey, null);
    }
    if (Q(e5)) {
      if (E(n7) && isFinite(n7) && Math.floor(n7) === n7) {
        if (n7 < 0 && (n7 = e5.length() + n7), n7 >= e5.length() || n7 < 0) throw new a3(null, r3.OutOfBounds, null);
        return e5.get(n7);
      }
      throw new a3(null, r3.InvalidMemberAccessKey, null);
    }
    if (e5 instanceof Ke) {
      if (G(n7)) return e5.global(n7);
      throw new a3(null, r3.InvalidMemberAccessKey, null);
    }
    throw new a3(null, r3.InvalidMemberAccessKey, null);
  },
  callfunc: (e5, n7, t3) => e5.call(t3, {
    arguments: n7,
    preparsed: true
  }),
  loadModule(e5, n7) {
    const t3 = n7.moduleFactoryMap[e5];
    if (n7.moduleSingletons[t3]) return n7.moduleSingletons[t3];
    const o3 = n7.moduleFactory[t3]({
      vars: {},
      moduleSingletons: n7.moduleSingletons,
      depthCounter: n7.depthCounter,
      console: n7.console,
      abortSignal: n7.abortSignal,
      isAsync: n7.isAsync,
      services: n7.services,
      lrucache: n7.lrucache,
      timeZone: n7.timeZone ?? null,
      interceptor: n7.interceptor
    }, n7.spatialReference);
    return n7.moduleSingletons[t3] = o3, o3;
  },
  callModuleFunction(e5, n7, t3, o3) {
    if (!(e5 instanceof Ke)) throw new a3(null, r3.FunctionNotFound, null);
    const l5 = e5.global(t3);
    if (false === _2(l5)) throw new a3(null, r3.CallNonFunction, null);
    return l5.call(o3, {
      preparsed: true,
      arguments: n7
    });
  },
  getNestedOptionalValue: (e5, n7) => p2(e5, n7)
};
function De(e5) {
  console.log(e5);
}
function Pe(e5, t3, o3 = false) {
  null === t3 && (t3 = {
    vars: {},
    customfunctions: {}
  });
  let l5 = null;
  e5.usesModules && (l5 = new s2(null, e5.loadedModules));
  const i3 = {
    isAsync: o3,
    globalScope: Ee(t3.vars, o3 ? Oe2 : Ie, t3.customfunctions),
    moduleFactory: {},
    moduleFactoryMap: {},
    undeclaredGlobalsInFunctions: /* @__PURE__ */ new Map(),
    customfunctions: t3.customfunctions,
    libraryResolver: l5,
    localScope: null,
    mangleMap: {},
    depthCounter: {
      depth: 1
    },
    exports: {},
    console: De,
    lrucache: t3.lrucache,
    timeZone: t3.timeZone ?? null,
    interceptor: t3.interceptor,
    services: t3.services,
    symbols: {
      symbolCounter: 0
    }
  };
  let c6 = J3(i3, e5);
  "" === c6 && (c6 = "lc.voidOperation; "), i3.undeclaredGlobalsInFunctions.size > 0 && i3.undeclaredGlobalsInFunctions.forEach((e6) => {
    throw new c2(t3, r3.InvalidIdentifier, e6.node);
  });
  let u5 = "";
  u5 = o3 ? "var runtimeCtx=this.prepare(context, true);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement=lc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n" + c6 + "\n return lastStatement; }); } \n return this.postProcess(yield mainBody()); }); " : "var runtimeCtx=this.prepare(context, false);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \n function mainBody() {\n var lastStatement=lc.voidOperation;\n " + c6 + "\n return lastStatement; } \n return this.postProcess(mainBody()); ";
  const p6 = i3.moduleFactory, m3 = i3.moduleFactoryMap, g3 = i3.exports, f4 = {};
  for (const n7 in g3) f4[n7] = void 0 !== i3.mangleMap[n7] ? i3.mangleMap[n7] : n7;
  const x6 = {
    lc: $e,
    lang: Ue,
    mangles: i3.mangleMap,
    postProcess(e6) {
      if (e6 instanceof M && (e6 = e6.value), e6 instanceof x && (e6 = e6.value), e6 === O && (e6 = null), e6 === R) throw new a3(null, r3.IllegalResult, null);
      if (e6 === J) throw new a3(null, r3.IllegalResult, null);
      if (_2(e6)) throw new a3(null, r3.IllegalResult, null);
      return e6;
    },
    prepare(e6, n7) {
      let t4 = e6.spatialReference;
      null == t4 && (t4 = f.WebMercator);
      const o4 = Ge(e6.vars, e6.customfunctions, n7, e6.timeZone);
      return {
        localStack: [],
        isAsync: n7,
        moduleFactory: p6,
        moduleFactoryMap: m3,
        mangleMap: this.mangles,
        moduleSingletons: {},
        exports: g3,
        gdefs: {},
        exportmangle: f4,
        spatialReference: t4,
        globalScope: o4,
        abortSignal: void 0 === e6.abortSignal || null === e6.abortSignal ? {
          aborted: false
        } : e6.abortSignal,
        localScope: null,
        services: e6.services,
        console: e6.console ?? De,
        lrucache: e6.lrucache,
        timeZone: e6.timeZone ?? null,
        interceptor: e6.interceptor,
        symbols: {
          symbolCounter: 0
        },
        depthCounter: {
          depth: 1
        }
      };
    }
  };
  return new Function("context", "spatialReference", u5).bind(x6);
}
function Ze2() {
  return __async(this, null, function* () {
    return je([yield import("./geomasync-XP2GAYM7.js")], "async"), true;
  });
}
var Ke = class extends s {
  constructor(e5) {
    super(null), this.moduleContext = e5;
  }
  hasGlobal(e5) {
    return void 0 === this.moduleContext.exports[e5] && (e5 = e5.toLowerCase()), void 0 !== this.moduleContext.exports[e5];
  }
  setGlobal(e5, n7) {
    const t3 = this.moduleContext.globalScope, o3 = e5.toLowerCase();
    if (_2(n7)) throw new a3(null, r3.AssignModuleFunction, null);
    t3[this.moduleContext.exportmangle[o3]] = n7;
  }
  global(e5) {
    const n7 = this.moduleContext.globalScope;
    e5 = e5.toLowerCase();
    const t3 = n7[this.moduleContext.exportmangle[e5]];
    if (void 0 === t3) throw new a3(null, r3.InvalidIdentifier, null);
    if (_2(t3) && !(t3 instanceof s3)) {
      const o3 = new s3();
      return o3.fn = t3, o3.parameterEvaluator = z2, o3.context = this.moduleContext, n7[this.moduleContext.exportmangle[e5]] = o3, o3;
    }
    return t3;
  }
};
function Te(e5, t3, o3 = false) {
  const l5 = {
    isAsync: o3,
    moduleFactory: t3.moduleFactory,
    moduleFactoryMap: {},
    libraryResolver: new s2(null, e5.loadedModules),
    globalScope: Ee(t3.vars, o3 ? Oe2 : Ie, t3.customfunctions),
    customfunctions: t3.customfunctions,
    localScope: null,
    mangleMap: {},
    undeclaredGlobalsInFunctions: /* @__PURE__ */ new Map(),
    depthCounter: {
      depth: 1
    },
    exports: {},
    console: De,
    lrucache: t3.lrucache,
    timeZone: t3.timeZone ?? null,
    interceptor: t3.interceptor,
    services: t3.services,
    symbols: {
      symbolCounter: 0
    }
  };
  let r7 = J3(l5, e5);
  "" === r7 && (r7 = "lc.voidOperation; ");
  let a5 = "";
  a5 = o3 ? "var runtimeCtx=this.prepare(context, true);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement=lc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n" + r7 + "\n return lastStatement; }); } \n yield mainBody(); \n return this.prepareModule(runtimeCtx); }); " : "var runtimeCtx=this.prepare(context, false);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \n function mainBody() {\n var lastStatement=lc.voidOperation;\n " + r7 + "\n return lastStatement; } \n mainBody(); \n return this.prepareModule(runtimeCtx); ";
  const s6 = l5.moduleFactory, i3 = l5.moduleFactoryMap, c6 = l5.exports, u5 = {};
  for (const n7 in c6) u5[n7] = void 0 !== l5.mangleMap[n7] ? l5.mangleMap[n7] : n7;
  const p6 = {
    lc: $e,
    lang: Ue,
    mangles: l5.mangleMap,
    prepareModule: (e6) => new Ke(e6),
    prepare(e6, n7) {
      let t4 = e6.spatialReference;
      null == t4 && (t4 = new f({
        wkid: 102100
      }));
      const o4 = Ge(e6.vars, e6.customfunctions, n7, e6.timeZone);
      return {
        localStack: [],
        isAsync: n7,
        exports: c6,
        exportmangle: u5,
        gdefs: {},
        moduleFactory: s6,
        moduleFactoryMap: i3,
        moduleSingletons: e6.moduleSingletons,
        mangleMap: this.mangles,
        spatialReference: t4,
        globalScope: o4,
        abortSignal: void 0 === e6.abortSignal || null === e6.abortSignal ? {
          aborted: false
        } : e6.abortSignal,
        localScope: null,
        services: e6.services,
        console: e6.console ?? De,
        lrucache: e6.lrucache,
        timeZone: e6.timeZone ?? null,
        interceptor: e6.interceptor,
        symbols: {
          symbolCounter: 0
        },
        depthCounter: e6.depthCounter
      };
    }
  };
  return new Function("context", "spatialReference", a5).bind(p6);
}

// ../../../node_modules/@arcgis/core/chunks/index.js
var e2 = {
  False: "false",
  Null: "null",
  True: "true"
};
var t = {
  Break: "break",
  Continue: "continue",
  Else: "else",
  For: "for",
  From: "from",
  Function: "function",
  If: "if",
  Import: "import",
  Export: "export",
  In: "in",
  Return: "return",
  Var: "var",
  While: "while"
};
var u4 = {
  AssignmentExpression: "AssignmentExpression",
  ArrayExpression: "ArrayExpression",
  BlockComment: "BlockComment",
  BlockStatement: "BlockStatement",
  BinaryExpression: "BinaryExpression",
  BreakStatement: "BreakStatement",
  CallExpression: "CallExpression",
  ContinueStatement: "ContinueStatement",
  EmptyStatement: "EmptyStatement",
  ExpressionStatement: "ExpressionStatement",
  ExportNamedDeclaration: "ExportNamedDeclaration",
  ExportSpecifier: "ExportSpecifier",
  ForStatement: "ForStatement",
  ForInStatement: "ForInStatement",
  FunctionDeclaration: "FunctionDeclaration",
  Identifier: "Identifier",
  IfStatement: "IfStatement",
  ImportDeclaration: "ImportDeclaration",
  ImportDefaultSpecifier: "ImportDefaultSpecifier",
  LineComment: "LineComment",
  Literal: "Literal",
  LogicalExpression: "LogicalExpression",
  MemberExpression: "MemberExpression",
  ObjectExpression: "ObjectExpression",
  Program: "Program",
  Property: "Property",
  ReturnStatement: "ReturnStatement",
  TemplateElement: "TemplateElement",
  TemplateLiteral: "TemplateLiteral",
  UnaryExpression: "UnaryExpression",
  UpdateExpression: "UpdateExpression",
  VariableDeclaration: "VariableDeclaration",
  VariableDeclarator: "VariableDeclarator",
  WhileStatement: "WhileStatement"
};
var i2 = ["++", "--"];
var r6 = ["-", "+", "!", "~"];
var n6 = ["=", "/=", "*=", "%=", "+=", "-="];
var s4 = ["||", "&&"];
var a4 = ["|", "&", ">>", "<<", ">>>", "^", "==", "!=", "<", "<=", ">", ">=", "+", "-", "*", "/", "%"];
var D2 = {
  "||": 1,
  "&&": 2,
  "|": 3,
  "^": 4,
  "&": 5,
  "==": 6,
  "!=": 6,
  "<": 7,
  ">": 7,
  "<=": 7,
  ">=": 7,
  "<<": 8,
  ">>": 8,
  ">>>": 8,
  "+": 9,
  "-": 9,
  "*": 10,
  "/": 10,
  "%": 10
};
var o2 = {
  Unknown: 0,
  BooleanLiteral: 1,
  EOF: 2,
  Identifier: 3,
  Keyword: 4,
  NullLiteral: 5,
  NumericLiteral: 6,
  Punctuator: 7,
  StringLiteral: 8,
  Template: 10
};
var h = ["Unknown", "Boolean", "<end>", "Identifier", "Keyword", "Null", "Numeric", "Punctuator", "String", "RegularExpression", "Template"];
var c5 = {
  InvalidModuleUri: "InvalidModuleUri",
  ForInOfLoopInitializer: "ForInOfLoopInitializer",
  IdentiferExpected: "IdentiferExpected",
  InvalidEscapedReservedWord: "InvalidEscapedReservedWord",
  InvalidExpression: "InvalidExpression",
  InvalidFunctionIdentifier: "InvalidFunctionIdentifier",
  InvalidHexEscapeSequence: "InvalidHexEscapeSequence",
  InvalidLeftHandSideInAssignment: "InvalidLeftHandSideInAssignment",
  InvalidLeftHandSideInForIn: "InvalidLeftHandSideInForIn",
  InvalidTemplateHead: "InvalidTemplateHead",
  InvalidVariableAssignment: "InvalidVariableAssignment",
  KeyMustBeString: "KeyMustBeString",
  NoFunctionInsideBlock: "NoFunctionInsideBlock",
  NoFunctionInsideFunction: "NoFunctionInsideFunction",
  ModuleExportRootOnly: "ModuleExportRootOnly",
  ModuleImportRootOnly: "ModuleImportRootOnly",
  PunctuatorExpected: "PunctuatorExpected",
  TemplateOctalLiteral: "TemplateOctalLiteral",
  UnexpectedBoolean: "UnexpectedBoolean",
  UnexpectedEndOfScript: "UnexpectedEndOfScript",
  UnexpectedIdentifier: "UnexpectedIdentifier",
  UnexpectedKeyword: "UnexpectedKeyword",
  UnexpectedNull: "UnexpectedNull",
  UnexpectedNumber: "UnexpectedNumber",
  UnexpectedPunctuator: "UnexpectedPunctuator",
  UnexpectedString: "UnexpectedString",
  UnexpectedTemplate: "UnexpectedTemplate",
  UnexpectedToken: "UnexpectedToken"
};
var l3 = {
  [c5.InvalidModuleUri]: "Module uri must be a text literal.",
  [c5.ForInOfLoopInitializer]: "for-in loop variable declaration may not have an initializer.",
  [c5.IdentiferExpected]: "'${value}' is an invalid identifier.",
  [c5.InvalidEscapedReservedWord]: "Keyword cannot contain escaped characters.",
  [c5.InvalidExpression]: "Invalid expression.",
  [c5.InvalidFunctionIdentifier]: "'${value}' is an invalid function identifier.",
  [c5.InvalidHexEscapeSequence]: "Invalid hexadecimal escape sequence.",
  [c5.InvalidLeftHandSideInAssignment]: "Invalid left-hand side in assignment.",
  [c5.InvalidLeftHandSideInForIn]: "Invalid left-hand side in for-in.",
  [c5.InvalidTemplateHead]: "Invalid template structure.",
  [c5.InvalidVariableAssignment]: "Invalid variable assignment.",
  [c5.KeyMustBeString]: "Object property keys must be a word starting with a letter.",
  [c5.NoFunctionInsideBlock]: "Functions cannot be declared inside of code blocks.",
  [c5.NoFunctionInsideFunction]: "Functions cannot be declared inside another function.",
  [c5.ModuleExportRootOnly]: "Module exports cannot be declared inside of code blocks.",
  [c5.ModuleImportRootOnly]: "Module import cannot be declared inside of code blocks.",
  [c5.PunctuatorExpected]: "'${value}' expected.",
  [c5.TemplateOctalLiteral]: "Octal literals are not allowed in template literals.",
  [c5.UnexpectedBoolean]: "Unexpected boolean literal.",
  [c5.UnexpectedEndOfScript]: "Unexpected end of Arcade expression.",
  [c5.UnexpectedIdentifier]: "Unexpected identifier.",
  [c5.UnexpectedKeyword]: "Unexpected keyword.",
  [c5.UnexpectedNull]: "Unexpected null literal.",
  [c5.UnexpectedNumber]: "Unexpected number.",
  [c5.UnexpectedPunctuator]: "Unexpected ponctuator.",
  [c5.UnexpectedString]: "Unexpected text literal.",
  [c5.UnexpectedTemplate]: "Unexpected quasi '${value}'.",
  [c5.UnexpectedToken]: "Unexpected token '${value}'."
};
var d3 = class e3 extends Error {
  constructor({
    code: t3,
    index: u5,
    line: i3,
    column: r7,
    len: n7 = 0,
    description: s6,
    data: a5
  }) {
    super(s6 ?? t3), this.declaredRootClass = "esri.arcade.lib.diagnostic", this.name = "ParsingError", this.code = t3, this.index = u5, this.line = i3, this.column = r7, this.len = n7, this.data = a5, this.description = s6, this.range = {
      start: {
        line: i3,
        column: r7 - 1
      },
      end: {
        line: i3,
        column: r7 + n7
      }
    }, Error.captureStackTrace?.(this, e3);
  }
};
function C4(e5) {
  return !!e5 && "object" == typeof e5 && "type" in e5 && e5.type === u4.Program;
}
function F(e5) {
  return !!e5 && "object" == typeof e5 && "type" in e5 && e5.type === u4.BlockStatement;
}
function p5(e5) {
  return !!e5 && "object" == typeof e5 && "type" in e5 && e5.type === u4.BlockComment;
}
function E2(e5) {
  return !!e5 && "object" == typeof e5 && "type" in e5 && e5.type === u4.EmptyStatement;
}
function x4(e5) {
  return !!e5 && "object" == typeof e5 && "type" in e5 && e5.type === u4.VariableDeclarator;
}
function B2(e5, t3) {
  return t3.loc.end.line === e5.loc.start.line && t3.loc.end.column <= e5.loc.start.column;
}
function f3(e5, t3) {
  return e5.range[0] >= t3.range[0] && e5.range[1] <= t3.range[1];
}
var k = class {
  constructor() {
    this.comments = [], this._nodeStack = [], this._newComments = [];
  }
  insertInnerComments(e5) {
    if (!F(e5) || 0 !== e5.body.length) return;
    let t3 = [];
    for (let u5 = this._newComments.length - 1; u5 >= 0; u5--) {
      let i3 = this._newComments[u5];
      e5.range[1] >= i3.range[0] && (t3.unshift(i3), this._newComments.splice(u5, 1));
    }
    t3.length && (e5.innerComments = t3);
  }
  attachTrailingComments(e5) {
    let t3 = this._nodeStack.at(-1);
    if (!t3) return;
    if (F(e5) && f3(t3, e5)) for (let i3 = this._newComments.length - 1; i3 >= 0; i3--) {
      let u6 = this._newComments[i3];
      f3(u6, e5) && (t3.trailingComments = [...t3.trailingComments ?? [], u6], this._newComments.splice(i3, 1));
    }
    let u5 = [];
    if (this._newComments.length > 0) for (let i3 = this._newComments.length - 1; i3 >= 0; i3--) {
      let r7 = this._newComments[i3];
      B2(r7, t3) ? (t3.trailingComments = [...t3.trailingComments ?? [], r7], this._newComments.splice(i3, 1)) : B2(r7, e5) && (u5.unshift(r7), this._newComments.splice(i3, 1));
    }
    if (t3.trailingComments) {
      B2(t3.trailingComments[0], e5) && (u5 = [...u5, ...t3.trailingComments], delete t3.trailingComments);
    }
    u5.length > 0 && (e5.trailingComments = u5);
  }
  attachLeadingComments(e5) {
    let t3;
    for (; this._nodeStack.length > 0; ) {
      let u6 = this._nodeStack[this._nodeStack.length - 1];
      if (!(e5.range[0] <= u6.range[0])) break;
      t3 = u6, this._nodeStack.pop();
    }
    let u5 = [], i3 = [];
    if (null != t3) {
      if (!t3.leadingComments) return;
      for (let r7 = t3.leadingComments.length - 1; r7 >= 0; r7--) {
        let n7 = t3.leadingComments[r7];
        e5.range[0] >= n7.range[1] ? (u5.unshift(n7), t3.leadingComments.splice(r7, 1)) : x4(e5) && !p5(n7) && (i3.unshift(n7), t3.leadingComments.splice(r7, 1));
      }
      return 0 === t3.leadingComments.length && delete t3.leadingComments, u5.length && (e5.leadingComments = u5), void (i3.length && (e5.trailingComments = [...i3, ...e5.trailingComments ?? []]));
    }
    for (let r7 = this._newComments.length - 1; r7 >= 0; r7--) {
      let t4 = this._newComments[r7];
      e5.range[0] >= t4.range[0] && (u5.unshift(t4), this._newComments.splice(r7, 1));
    }
    u5.length && (e5.leadingComments = u5);
  }
  attachComments(e5) {
    if (C4(e5) && e5.body.length > 0) {
      let t3 = this._nodeStack.at(-1);
      return t3 ? (t3.trailingComments = [...t3.trailingComments ?? [], ...this._newComments], this._newComments.length = 0, void this._nodeStack.pop()) : (e5.trailingComments = [...this._newComments], void (this._newComments.length = 0));
    }
    this.attachTrailingComments(e5), this.attachLeadingComments(e5), this.insertInnerComments(e5), this._nodeStack.push(e5);
  }
  collectComment(e5) {
    this.comments.push(e5), this._newComments.push(e5);
  }
};
var g = /\$\{(.*?)\}/gu;
function w2(e5, t3) {
  let u5 = l3[e5];
  return t3 ? u5.replace(g, (e6, u6) => t3[u6]?.toString() ?? "") : u5;
}
var S2 = class {
  constructor(e5 = false) {
    this.tolerant = e5, this.errors = [];
  }
  recordError(e5) {
    this.errors.push(e5);
  }
  tolerate(e5) {
    if (!this.tolerant) throw e5;
    this.recordError(e5);
  }
  throwError(e5) {
    throw e5.description ?? (e5.description = w2(e5.code, e5.data)), new d3(e5);
  }
  tolerateError(e5) {
    e5.description ?? (e5.description = w2(e5.code, e5.data));
    let t3 = new d3(e5);
    if (!this.tolerant) throw t3;
    this.recordError(t3);
  }
};
function y5(e5, t3) {
  if (!e5) throw new Error(`ASSERT: ${t3}`);
}
var I = {
  NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/u,
  NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD46\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E\uDC5F\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/u
};
var T = {
  fromCodePoint: (e5) => e5 < 65536 ? String.fromCharCode(e5) : String.fromCharCode(55296 + (e5 - 65536 >> 10)) + String.fromCharCode(56320 + (e5 - 65536 & 1023)),
  isWhiteSpace: (e5) => 32 === e5 || 9 === e5 || 11 === e5 || 12 === e5 || 160 === e5 || e5 >= 5760 && [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].includes(e5),
  isLineTerminator: (e5) => 10 === e5 || 13 === e5 || 8232 === e5 || 8233 === e5,
  isIdentifierStart: (e5) => 36 === e5 || 95 === e5 || e5 >= 65 && e5 <= 90 || e5 >= 97 && e5 <= 122 || 92 === e5 || e5 >= 128 && I.NonAsciiIdentifierStart.test(T.fromCodePoint(e5)),
  isIdentifierPart: (e5) => 36 === e5 || 95 === e5 || e5 >= 65 && e5 <= 90 || e5 >= 97 && e5 <= 122 || e5 >= 48 && e5 <= 57 || 92 === e5 || e5 >= 128 && I.NonAsciiIdentifierPart.test(T.fromCodePoint(e5)),
  isDecimalDigit: (e5) => e5 >= 48 && e5 <= 57,
  isHexDigit: (e5) => e5 >= 48 && e5 <= 57 || e5 >= 65 && e5 <= 70 || e5 >= 97 && e5 <= 102,
  isOctalDigit: (e5) => e5 >= 48 && e5 <= 55
};
function b(e5) {
  return "0123456789abcdef".indexOf(e5.toLowerCase());
}
function L2(e5) {
  return "01234567".indexOf(e5);
}
var v = [[], [], []];
i2.forEach((e5) => v[e5.length - 1]?.push(e5)), r6.forEach((e5) => v[e5.length - 1]?.push(e5)), s4.forEach((e5) => v[e5.length - 1]?.push(e5)), n6.forEach((e5) => v[e5.length - 1]?.push(e5)), a4.forEach((e5) => v[e5.length - 1]?.push(e5));
var N2 = class {
  constructor(e5, t3) {
    this.source = e5, this.errorHandler = t3, this._length = e5.length, this.index = 0, this.lineNumber = 1, this.lineStart = 0, this.curlyStack = [];
  }
  saveState() {
    return {
      index: this.index,
      lineNumber: this.lineNumber,
      lineStart: this.lineStart,
      curlyStack: this.curlyStack.slice()
    };
  }
  restoreState(e5) {
    this.index = e5.index, this.lineNumber = e5.lineNumber, this.lineStart = e5.lineStart, this.curlyStack = e5.curlyStack;
  }
  eof() {
    return this.index >= this._length;
  }
  throwUnexpectedToken(e5 = c5.UnexpectedToken) {
    this.errorHandler.throwError({
      code: e5,
      index: this.index,
      line: this.lineNumber,
      column: this.index - this.lineStart + 1,
      data: {
        value: this.source.charAt(this.index)
      }
    });
  }
  tolerateUnexpectedToken(e5 = c5.UnexpectedToken) {
    this.errorHandler.tolerateError({
      code: e5,
      index: this.index,
      line: this.lineNumber,
      column: this.index - this.lineStart + 1
    });
  }
  skipSingleLineComment(e5) {
    let t3 = [], u5 = this.index - e5, i3 = {
      start: {
        line: this.lineNumber,
        column: this.index - this.lineStart - e5
      },
      end: {
        line: 0,
        column: 0
      }
    };
    for (; !this.eof(); ) {
      let r8 = this.source.charCodeAt(this.index);
      if (this.index += 1, T.isLineTerminator(r8)) {
        i3.end = {
          line: this.lineNumber,
          column: this.index - this.lineStart - 1
        };
        let n7 = {
          multiLine: false,
          start: u5 + e5,
          end: this.index - 1,
          range: [u5, this.index - 1],
          loc: i3
        };
        return t3.push(n7), 13 === r8 && 10 === this.source.charCodeAt(this.index) && (this.index += 1), this.lineNumber += 1, this.lineStart = this.index, t3;
      }
    }
    i3.end = {
      line: this.lineNumber,
      column: this.index - this.lineStart
    };
    let r7 = {
      multiLine: false,
      start: u5 + e5,
      end: this.index,
      range: [u5, this.index],
      loc: i3
    };
    return t3.push(r7), t3;
  }
  skipMultiLineComment() {
    let e5 = [], t3 = this.index - 2, u5 = {
      start: {
        line: this.lineNumber,
        column: this.index - this.lineStart - 2
      },
      end: {
        line: 0,
        column: 0
      }
    };
    for (; !this.eof(); ) {
      let i4 = this.source.charCodeAt(this.index);
      if (T.isLineTerminator(i4)) 13 === i4 && 10 === this.source.charCodeAt(this.index + 1) && (this.index += 1), this.lineNumber += 1, this.index += 1, this.lineStart = this.index;
      else if (42 === i4) {
        if (47 === this.source.charCodeAt(this.index + 1)) {
          this.index += 2, u5.end = {
            line: this.lineNumber,
            column: this.index - this.lineStart
          };
          let i5 = {
            multiLine: true,
            start: t3 + 2,
            end: this.index - 2,
            range: [t3, this.index],
            loc: u5
          };
          return e5.push(i5), e5;
        }
        this.index += 1;
      } else this.index += 1;
    }
    u5.end = {
      line: this.lineNumber,
      column: this.index - this.lineStart
    };
    let i3 = {
      multiLine: true,
      start: t3 + 2,
      end: this.index,
      range: [t3, this.index],
      loc: u5
    };
    return e5.push(i3), this.tolerateUnexpectedToken(), e5;
  }
  scanComments() {
    let e5 = [];
    for (; !this.eof(); ) {
      let t3 = this.source.charCodeAt(this.index);
      if (T.isWhiteSpace(t3)) this.index += 1;
      else if (T.isLineTerminator(t3)) this.index += 1, 13 === t3 && 10 === this.source.charCodeAt(this.index) && (this.index += 1), this.lineNumber += 1, this.lineStart = this.index;
      else {
        if (47 !== t3) break;
        if (t3 = this.source.charCodeAt(this.index + 1), 47 === t3) {
          this.index += 2;
          let t4 = this.skipSingleLineComment(2);
          e5 = [...e5, ...t4];
        } else {
          if (42 !== t3) break;
          {
            this.index += 2;
            let t4 = this.skipMultiLineComment();
            e5 = [...e5, ...t4];
          }
        }
      }
    }
    return e5;
  }
  isKeyword(e5) {
    switch ((e5 = e5.toLowerCase()).length) {
      case 2:
        return e5 === t.If || e5 === t.In;
      case 3:
        return e5 === t.Var || e5 === t.For;
      case 4:
        return e5 === t.Else;
      case 5:
        return e5 === t.Break || e5 === t.While;
      case 6:
        return e5 === t.Return || e5 === t.Import || e5 === t.Export;
      case 8:
        return e5 === t.Function || e5 === t.Continue;
      default:
        return false;
    }
  }
  codePointAt(e5) {
    let t3 = this.source.charCodeAt(e5);
    if (t3 >= 55296 && t3 <= 56319) {
      let u5 = this.source.charCodeAt(e5 + 1);
      u5 >= 56320 && u5 <= 57343 && (t3 = 1024 * (t3 - 55296) + u5 - 56320 + 65536);
    }
    return t3;
  }
  scanHexEscape(e5) {
    let t3 = "u" === e5 ? 4 : 2, u5 = 0;
    for (let i3 = 0; i3 < t3; i3++) {
      if (this.eof() || !T.isHexDigit(this.source.charCodeAt(this.index))) return null;
      u5 = 16 * u5 + b(this.source[this.index] ?? ""), this.index += 1;
    }
    return String.fromCharCode(u5);
  }
  scanUnicodeCodePointEscape() {
    let e5 = this.source[this.index], t3 = 0;
    for ("}" === e5 && this.throwUnexpectedToken(); !this.eof() && (e5 = this.source[this.index] ?? "", this.index += 1, T.isHexDigit(e5.charCodeAt(0))); ) t3 = 16 * t3 + b(e5);
    return (t3 > 1114111 || "}" !== e5) && this.throwUnexpectedToken(), T.fromCodePoint(t3);
  }
  getIdentifier() {
    let e5 = this.index;
    for (this.index += 1; !this.eof(); ) {
      let t3 = this.source.charCodeAt(this.index);
      if (92 === t3) return this.index = e5, this.getComplexIdentifier();
      if (t3 >= 55296 && t3 < 57343) return this.index = e5, this.getComplexIdentifier();
      if (!T.isIdentifierPart(t3)) break;
      this.index += 1;
    }
    return this.source.slice(e5, this.index);
  }
  getComplexIdentifier() {
    let e5, t3 = this.codePointAt(this.index), u5 = T.fromCodePoint(t3);
    for (this.index += u5.length, 92 === t3 && (117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(), this.index += 1, "{" === this.source[this.index] ? (this.index += 1, e5 = this.scanUnicodeCodePointEscape()) : (e5 = this.scanHexEscape("u"), (null === e5 || "\\" === e5 || !T.isIdentifierStart(e5.charCodeAt(0))) && this.throwUnexpectedToken()), u5 = e5); !this.eof() && (t3 = this.codePointAt(this.index), T.isIdentifierPart(t3)); ) e5 = T.fromCodePoint(t3), u5 += e5, this.index += e5.length, 92 === t3 && (u5 = u5.substring(0, u5.length - 1), 117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(), this.index += 1, "{" === this.source[this.index] ? (this.index += 1, e5 = this.scanUnicodeCodePointEscape()) : (e5 = this.scanHexEscape("u"), (null === e5 || "\\" === e5 || !T.isIdentifierPart(e5.charCodeAt(0))) && this.throwUnexpectedToken()), u5 += e5);
    return u5;
  }
  octalToDecimal(e5) {
    let t3 = "0" !== e5, u5 = L2(e5);
    return !this.eof() && T.isOctalDigit(this.source.charCodeAt(this.index)) && (t3 = true, u5 = 8 * u5 + L2(this.source[this.index] ?? ""), this.index += 1, "0123".includes(e5) && !this.eof() && T.isOctalDigit(this.source.charCodeAt(this.index)) && (u5 = 8 * u5 + L2(this.source[this.index] ?? ""), this.index += 1)), {
      code: u5,
      octal: t3
    };
  }
  scanIdentifier() {
    let t3, u5 = this.index, i3 = 92 === this.source.charCodeAt(u5) ? this.getComplexIdentifier() : this.getIdentifier();
    if (t3 = 1 === i3.length ? o2.Identifier : this.isKeyword(i3) ? o2.Keyword : i3.toLowerCase() === e2.Null ? o2.NullLiteral : i3.toLowerCase() === e2.True || i3.toLowerCase() === e2.False ? o2.BooleanLiteral : o2.Identifier, t3 !== o2.Identifier && u5 + i3.length !== this.index) {
      let e5 = this.index;
      this.index = u5, this.tolerateUnexpectedToken(c5.InvalidEscapedReservedWord), this.index = e5;
    }
    return {
      type: t3,
      value: i3,
      lineNumber: this.lineNumber,
      lineStart: this.lineStart,
      start: u5,
      end: this.index
    };
  }
  scanPunctuator() {
    let e5 = this.index, t3 = this.source[this.index] ?? "";
    switch (t3) {
      case "(":
      case "{":
        "{" === t3 && this.curlyStack.push("{"), this.index += 1;
        break;
      case ".":
      case ")":
      case ";":
      case ",":
      case "[":
      case "]":
      case ":":
      case "?":
      case "~":
        this.index += 1;
        break;
      case "}":
        this.index += 1, this.curlyStack.pop();
        break;
      default:
        for (let e6 = v.length; e6 > 0; e6--) if (t3 = this.source.substring(this.index, this.index + e6), v[e6 - 1]?.includes(t3)) {
          this.index += e6;
          break;
        }
    }
    return this.index === e5 && this.throwUnexpectedToken(), {
      type: o2.Punctuator,
      value: t3,
      lineNumber: this.lineNumber,
      lineStart: this.lineStart,
      start: e5,
      end: this.index
    };
  }
  scanHexLiteral(e5) {
    let t3 = "";
    for (; !this.eof() && T.isHexDigit(this.source.charCodeAt(this.index)); ) t3 += this.source[this.index], this.index += 1;
    return 0 === t3.length && this.throwUnexpectedToken(), T.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), {
      type: o2.NumericLiteral,
      value: Number.parseInt(`0x${t3}`, 16),
      lineNumber: this.lineNumber,
      lineStart: this.lineStart,
      start: e5,
      end: this.index
    };
  }
  scanBinaryLiteral(e5) {
    let t3 = "";
    for (; !this.eof(); ) {
      let e6 = this.source[this.index];
      if ("0" !== e6 && "1" !== e6) break;
      t3 += this.source[this.index], this.index += 1;
    }
    if (0 === t3.length && this.throwUnexpectedToken(), !this.eof()) {
      let e6 = this.source.charCodeAt(this.index);
      (T.isIdentifierStart(e6) || T.isDecimalDigit(e6)) && this.throwUnexpectedToken();
    }
    return {
      type: o2.NumericLiteral,
      value: Number.parseInt(t3, 2),
      lineNumber: this.lineNumber,
      lineStart: this.lineStart,
      start: e5,
      end: this.index
    };
  }
  scanOctalLiteral(e5, t3) {
    let u5 = "", i3 = false;
    for (T.isOctalDigit(e5.charCodeAt(0)) && (i3 = true, u5 = `0${this.source[this.index]}`), this.index += 1; !this.eof() && T.isOctalDigit(this.source.charCodeAt(this.index)); ) u5 += this.source[this.index], this.index += 1;
    return !i3 && 0 === u5.length && this.throwUnexpectedToken(), (T.isIdentifierStart(this.source.charCodeAt(this.index)) || T.isDecimalDigit(this.source.charCodeAt(this.index))) && this.throwUnexpectedToken(), {
      type: o2.NumericLiteral,
      value: Number.parseInt(u5, 8),
      lineNumber: this.lineNumber,
      lineStart: this.lineStart,
      start: t3,
      end: this.index
    };
  }
  scanNumericLiteral() {
    let e5 = this.index, t3 = this.source[e5] ?? "";
    y5(T.isDecimalDigit(t3.charCodeAt(0)) || "." === t3, "Numeric literal must start with a decimal digit or a decimal point");
    let u5 = "";
    if ("." !== t3) {
      if (u5 = this.source[this.index] ?? "", this.index += 1, t3 = this.source[this.index] ?? "", "0" === u5) {
        if ("x" === t3 || "X" === t3) return this.index += 1, this.scanHexLiteral(e5);
        if ("b" === t3 || "B" === t3) return this.index += 1, this.scanBinaryLiteral(e5);
        if ("o" === t3 || "O" === t3) return this.scanOctalLiteral(t3, e5);
      }
      for (; T.isDecimalDigit(this.source.charCodeAt(this.index)); ) u5 += this.source[this.index], this.index += 1;
      t3 = this.source[this.index] ?? "";
    }
    if ("." === t3) {
      for (u5 += this.source[this.index], this.index += 1; T.isDecimalDigit(this.source.charCodeAt(this.index)); ) u5 += this.source[this.index], this.index += 1;
      t3 = this.source[this.index] ?? "";
    }
    if ("e" === t3 || "E" === t3) if (u5 += this.source[this.index], this.index += 1, t3 = this.source[this.index] ?? "", ("+" === t3 || "-" === t3) && (u5 += this.source[this.index], this.index += 1), T.isDecimalDigit(this.source.charCodeAt(this.index))) for (; T.isDecimalDigit(this.source.charCodeAt(this.index)); ) u5 += this.source[this.index], this.index += 1;
    else this.throwUnexpectedToken();
    return T.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), {
      type: o2.NumericLiteral,
      value: Number.parseFloat(u5),
      lineNumber: this.lineNumber,
      lineStart: this.lineStart,
      start: e5,
      end: this.index
    };
  }
  scanStringLiteral() {
    let e5 = this.index, t3 = this.source[e5];
    y5("'" === t3 || '"' === t3, "String literal must starts with a quote"), this.index += 1;
    let u5 = false, i3 = "";
    for (; !this.eof(); ) {
      let e6 = this.source[this.index] ?? "";
      if (this.index += 1, e6 === t3) {
        t3 = "";
        break;
      }
      if ("\\" === e6) {
        if (e6 = this.source[this.index] ?? "", this.index += 1, e6 && T.isLineTerminator(e6.charCodeAt(0))) this.lineNumber += 1, "\r" === e6 && "\n" === this.source[this.index] && (this.index += 1), this.lineStart = this.index;
        else switch (e6) {
          case "u":
            if ("{" === this.source[this.index]) this.index += 1, i3 += this.scanUnicodeCodePointEscape();
            else {
              let t4 = this.scanHexEscape(e6);
              null === t4 && this.throwUnexpectedToken(), i3 += t4;
            }
            break;
          case "x": {
            let t4 = this.scanHexEscape(e6);
            null === t4 && this.throwUnexpectedToken(c5.InvalidHexEscapeSequence), i3 += t4;
            break;
          }
          case "n":
            i3 += "\n";
            break;
          case "r":
            i3 += "\r";
            break;
          case "t":
            i3 += "	";
            break;
          case "b":
            i3 += "\b";
            break;
          case "f":
            i3 += "\f";
            break;
          case "v":
            i3 += "\v";
            break;
          case "8":
          case "9":
            i3 += e6, this.tolerateUnexpectedToken();
            break;
          default:
            if (e6 && T.isOctalDigit(e6.charCodeAt(0))) {
              let t4 = this.octalToDecimal(e6);
              u5 = t4.octal || u5, i3 += String.fromCharCode(t4.code);
            } else i3 += e6;
        }
      } else {
        if (T.isLineTerminator(e6.charCodeAt(0))) break;
        i3 += e6;
      }
    }
    return "" !== t3 && (this.index = e5, this.throwUnexpectedToken()), {
      type: o2.StringLiteral,
      value: i3,
      lineNumber: this.lineNumber,
      lineStart: this.lineStart,
      start: e5,
      end: this.index
    };
  }
  scanTemplate() {
    let e5 = "", t3 = false, u5 = this.index, i3 = "`" === this.source[u5], r7 = false, n7 = 2;
    for (this.index += 1; !this.eof(); ) {
      let u6 = this.source[this.index] ?? "";
      if (this.index += 1, "`" === u6) {
        n7 = 1, r7 = true, t3 = true;
        break;
      }
      if ("$" !== u6) {
        if ("\\" !== u6) T.isLineTerminator(u6.charCodeAt(0)) ? (this.lineNumber += 1, "\r" === u6 && "\n" === this.source[this.index] && (this.index += 1), this.lineStart = this.index, e5 += "\n") : e5 += u6;
        else if (u6 = this.source[this.index] ?? "", this.index += 1, T.isLineTerminator(u6.charCodeAt(0))) this.lineNumber += 1, "\r" === u6 && "\n" === this.source[this.index] && (this.index += 1), this.lineStart = this.index;
        else switch (u6) {
          case "n":
            e5 += "\n";
            break;
          case "r":
            e5 += "\r";
            break;
          case "t":
            e5 += "	";
            break;
          case "u":
            if ("{" === this.source[this.index]) this.index += 1, e5 += this.scanUnicodeCodePointEscape();
            else {
              let t4 = this.index, i4 = this.scanHexEscape(u6);
              null !== i4 ? e5 += i4 : (this.index = t4, e5 += u6);
            }
            break;
          case "x": {
            let t4 = this.scanHexEscape(u6);
            null === t4 && this.throwUnexpectedToken(c5.InvalidHexEscapeSequence), e5 += t4;
            break;
          }
          case "b":
            e5 += "\b";
            break;
          case "f":
            e5 += "\f";
            break;
          case "v":
            e5 += "\v";
            break;
          default:
            "0" === u6 ? (T.isDecimalDigit(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(c5.TemplateOctalLiteral), e5 += "\0") : T.isOctalDigit(u6.charCodeAt(0)) ? this.throwUnexpectedToken(c5.TemplateOctalLiteral) : e5 += u6;
        }
      } else {
        if ("{" === this.source[this.index]) {
          this.curlyStack.push("${"), this.index += 1, t3 = true;
          break;
        }
        e5 += u6;
      }
    }
    return t3 || this.throwUnexpectedToken(), i3 || this.curlyStack.pop(), {
      type: o2.Template,
      value: this.source.slice(u5 + 1, this.index - n7),
      cooked: e5,
      head: i3,
      tail: r7,
      lineNumber: this.lineNumber,
      lineStart: this.lineStart,
      start: u5,
      end: this.index
    };
  }
  lex() {
    if (this.eof()) return {
      type: o2.EOF,
      value: "",
      lineNumber: this.lineNumber,
      lineStart: this.lineStart,
      start: this.index,
      end: this.index
    };
    let e5 = this.source.charCodeAt(this.index);
    return T.isIdentifierStart(e5) ? this.scanIdentifier() : 40 === e5 || 41 === e5 || 59 === e5 ? this.scanPunctuator() : 39 === e5 || 34 === e5 ? this.scanStringLiteral() : 46 === e5 ? T.isDecimalDigit(this.source.charCodeAt(this.index + 1)) ? this.scanNumericLiteral() : this.scanPunctuator() : T.isDecimalDigit(e5) ? this.scanNumericLiteral() : 96 === e5 || 125 === e5 && "${" === this.curlyStack[this.curlyStack.length - 1] ? this.scanTemplate() : e5 >= 55296 && e5 < 57343 && T.isIdentifierStart(this.codePointAt(this.index)) ? this.scanIdentifier() : this.scanPunctuator();
  }
};
var U4 = {
  None: 0,
  Function: 1,
  IfClause: 2,
  ForLoop: 4,
  WhileLoop: 8
};
var P2 = {
  AsObject: 0,
  Automatic: 1
};
function M3(e5, t3 = 0) {
  let u5 = e5.start - e5.lineStart, i3 = e5.lineNumber;
  return u5 < 0 && (u5 += t3, i3 -= 1), {
    index: e5.start,
    line: i3,
    column: u5
  };
}
function O2(e5) {
  return [__spreadValues({
    index: e5.range[0]
  }, e5.loc.start), __spreadValues({
    index: e5.range[1]
  }, e5.loc.end)];
}
function R2(e5) {
  return e5 in D2 ? D2[e5] : 0;
}
var z3 = class {
  constructor(e5, t3 = {}, u5) {
    this.delegate = u5, this.hasLineTerminator = false, this.options = {
      tokens: "boolean" == typeof t3.tokens && t3.tokens,
      comments: "boolean" == typeof t3.comments && t3.comments,
      tolerant: "boolean" == typeof t3.tolerant && t3.tolerant
    }, this.options.comments && (this.commentHandler = new k()), this.errorHandler = new S2(this.options.tolerant), this.scanner = new N2(e5, this.errorHandler), this.context = {
      isAssignmentTarget: false,
      blockContext: U4.None,
      curlyParsingType: P2.AsObject
    }, this.rawToken = {
      type: o2.EOF,
      value: "",
      lineNumber: this.scanner.lineNumber,
      lineStart: 0,
      start: 0,
      end: 0
    }, this.tokens = [], this.startMarker = {
      index: 0,
      line: this.scanner.lineNumber,
      column: 0
    }, this.endMarker = {
      index: 0,
      line: this.scanner.lineNumber,
      column: 0
    }, this.readNextRawToken(), this.endMarker = {
      index: this.scanner.index,
      line: this.scanner.lineNumber,
      column: this.scanner.index - this.scanner.lineStart
    };
  }
  throwIfInvalidType(e5, t3, {
    validTypes: u5,
    invalidTypes: i3
  }) {
    u5?.some((t4) => e5.type === t4) || i3?.some((t4) => e5.type === t4) && this.throwError(c5.InvalidExpression, t3);
  }
  throwError(e5, t3, u5 = this.endMarker) {
    let {
      index: i3,
      line: r7,
      column: n7
    } = t3, s6 = u5.index - i3 - 1;
    this.errorHandler.throwError({
      code: e5,
      index: i3,
      line: r7,
      column: n7 + 1,
      len: s6
    });
  }
  tolerateError(e5, t3) {
    throw new Error("######################################### !!!");
  }
  unexpectedTokenError(e5 = {}) {
    let t3, {
      rawToken: u5
    } = e5, {
      code: i3,
      data: r7
    } = e5;
    if (u5) {
      if (!i3) switch (u5.type) {
        case o2.EOF:
          i3 = c5.UnexpectedEndOfScript;
          break;
        case o2.Identifier:
          i3 = c5.UnexpectedIdentifier;
          break;
        case o2.NumericLiteral:
          i3 = c5.UnexpectedNumber;
          break;
        case o2.StringLiteral:
          i3 = c5.UnexpectedString;
          break;
        case o2.Template:
          i3 = c5.UnexpectedTemplate;
      }
      t3 = u5.value.toString();
    } else t3 = "ILLEGAL";
    i3 ?? (i3 = c5.UnexpectedToken), r7 || (r7 = {
      value: t3
    });
    let n7 = w2(i3, r7);
    if (u5) {
      let e6 = u5.start, t4 = u5.lineNumber, s7 = u5.start - u5.lineStart + 1;
      return new d3({
        code: i3,
        index: e6,
        line: t4,
        column: s7,
        len: u5.end - u5.start - 1,
        data: r7,
        description: n7
      });
    }
    let {
      index: s6,
      line: a5
    } = this.endMarker;
    return new d3({
      code: i3,
      index: s6,
      line: a5,
      column: this.endMarker.column + 1,
      data: r7,
      description: n7
    });
  }
  throwUnexpectedToken(e5 = {}) {
    throw e5.rawToken ?? (e5.rawToken = this.rawToken), this.unexpectedTokenError(e5);
  }
  collectComments(e5) {
    let {
      commentHandler: t3
    } = this;
    !t3 || !e5.length || e5.forEach((e6) => {
      let i3 = {
        type: e6.multiLine ? u4.BlockComment : u4.LineComment,
        value: this.getSourceValue(e6),
        range: e6.range,
        loc: e6.loc
      };
      t3.collectComment(i3);
    });
  }
  peekAhead(e5) {
    let t3 = () => (this.scanner.scanComments(), this.scanner.lex()), u5 = this.scanner.saveState(), i3 = e5.call(this, t3);
    return this.scanner.restoreState(u5), i3;
  }
  getSourceValue(e5) {
    return this.scanner.source.slice(e5.start, e5.end);
  }
  convertToToken(e5) {
    return {
      type: h[e5.type],
      value: this.getSourceValue(e5),
      range: [e5.start, e5.end],
      loc: {
        start: {
          line: this.startMarker.line,
          column: this.startMarker.column
        },
        end: {
          line: this.scanner.lineNumber,
          column: this.scanner.index - this.scanner.lineStart
        }
      }
    };
  }
  readNextRawToken() {
    this.endMarker.index = this.scanner.index, this.endMarker.line = this.scanner.lineNumber, this.endMarker.column = this.scanner.index - this.scanner.lineStart;
    let e5 = this.rawToken;
    this.collectComments(this.scanner.scanComments()), this.scanner.index !== this.startMarker.index && (this.startMarker.index = this.scanner.index, this.startMarker.line = this.scanner.lineNumber, this.startMarker.column = this.scanner.index - this.scanner.lineStart), this.rawToken = this.scanner.lex(), this.hasLineTerminator = e5.lineNumber !== this.rawToken.lineNumber, this.options.tokens && this.rawToken.type !== o2.EOF && this.tokens.push(this.convertToToken(this.rawToken));
  }
  captureStartMarker() {
    return {
      index: this.startMarker.index,
      line: this.startMarker.line,
      column: this.startMarker.column
    };
  }
  getItemLocation(e5) {
    return {
      range: [e5.index, this.endMarker.index],
      loc: {
        start: {
          line: e5.line,
          column: e5.column
        },
        end: {
          line: this.endMarker.line,
          column: this.endMarker.column
        }
      }
    };
  }
  finalize(e5) {
    return (this.delegate ?? this.commentHandler) && (this.commentHandler?.attachComments(e5), this.delegate?.(e5)), e5;
  }
  expectPunctuator(e5) {
    let t3 = this.rawToken;
    this.matchPunctuator(e5) ? this.readNextRawToken() : this.throwUnexpectedToken({
      rawToken: t3,
      code: c5.PunctuatorExpected,
      data: {
        value: e5
      }
    });
  }
  expectKeyword(e5) {
    this.rawToken.type !== o2.Keyword || this.rawToken.value.toLowerCase() !== e5.toString() ? this.throwUnexpectedToken({
      rawToken: this.rawToken
    }) : this.readNextRawToken();
  }
  expectContextualKeyword(e5) {
    this.rawToken.type !== o2.Identifier || this.rawToken.value.toLowerCase() !== e5 ? this.throwUnexpectedToken({
      rawToken: this.rawToken
    }) : this.readNextRawToken();
  }
  matchKeyword(e5) {
    return this.rawToken.type === o2.Keyword && this.rawToken.value.toLowerCase() === e5;
  }
  matchContextualKeyword(e5) {
    return this.rawToken.type === o2.Identifier && this.rawToken.value === e5;
  }
  matchPunctuator(e5) {
    return this.rawToken.type === o2.Punctuator && this.rawToken.value === e5;
  }
  getMatchingPunctuator(e5) {
    if ("string" == typeof e5 && (e5 = e5.split("")), this.rawToken.type === o2.Punctuator && e5.length) return e5.find(this.matchPunctuator.bind(this));
  }
  isolateCoverGrammar(e5) {
    let t3 = this.context.isAssignmentTarget;
    this.context.isAssignmentTarget = true;
    let u5 = e5.call(this);
    return this.context.isAssignmentTarget = t3, u5;
  }
  inheritCoverGrammar(e5) {
    var t3;
    let u5 = this.context.isAssignmentTarget;
    this.context.isAssignmentTarget = true;
    let i3 = e5.call(this);
    return (t3 = this.context).isAssignmentTarget && (t3.isAssignmentTarget = u5), i3;
  }
  withBlockContext(e5, t3) {
    let u5 = this.context.blockContext;
    this.context.blockContext |= e5;
    let i3 = this.context.curlyParsingType;
    this.context.curlyParsingType = P2.Automatic;
    let r7 = t3.call(this);
    return this.context.blockContext = u5, this.context.curlyParsingType = i3, r7;
  }
  consumeSemicolon() {
    if (this.matchPunctuator(";")) this.readNextRawToken();
    else if (!this.hasLineTerminator) {
      if (this.rawToken.type === o2.EOF || this.matchPunctuator("}")) return this.endMarker.index = this.startMarker.index, this.endMarker.line = this.startMarker.line, void (this.endMarker.column = this.startMarker.column);
      this.throwUnexpectedToken({
        rawToken: this.rawToken
      });
    }
  }
  parsePrimaryExpression() {
    let t3 = this.captureStartMarker(), i3 = this.rawToken;
    switch (i3.type) {
      case o2.Identifier:
        return this.readNextRawToken(), this.finalize(__spreadValues({
          type: u4.Identifier,
          name: i3.value
        }, this.getItemLocation(t3)));
      case o2.NumericLiteral:
      case o2.StringLiteral:
        return this.context.isAssignmentTarget = false, this.readNextRawToken(), this.finalize(__spreadValues({
          type: u4.Literal,
          value: i3.value,
          raw: this.getSourceValue(i3),
          isString: "string" == typeof i3.value
        }, this.getItemLocation(t3)));
      case o2.BooleanLiteral:
        return this.context.isAssignmentTarget = false, this.readNextRawToken(), this.finalize(__spreadValues({
          type: u4.Literal,
          value: i3.value.toLowerCase() === e2.True,
          raw: this.getSourceValue(i3),
          isString: false
        }, this.getItemLocation(t3)));
      case o2.NullLiteral:
        return this.context.isAssignmentTarget = false, this.readNextRawToken(), this.finalize(__spreadValues({
          type: u4.Literal,
          value: null,
          raw: this.getSourceValue(i3),
          isString: false
        }, this.getItemLocation(t3)));
      case o2.Template:
        return this.parseTemplateLiteral();
      case o2.Punctuator:
        switch (i3.value) {
          case "(":
            return this.inheritCoverGrammar(this.parseGroupExpression.bind(this));
          case "[":
            return this.inheritCoverGrammar(this.parseArrayInitializer.bind(this));
          case "{":
            return this.inheritCoverGrammar(this.parseObjectExpression.bind(this));
          default:
            return this.throwUnexpectedToken({
              rawToken: this.rawToken
            });
        }
      case o2.Keyword:
        return this.context.isAssignmentTarget = false, this.throwUnexpectedToken({
          rawToken: this.rawToken
        });
      default:
        return this.throwUnexpectedToken({
          rawToken: this.rawToken
        });
    }
  }
  parseArrayInitializer() {
    let e5 = this.captureStartMarker();
    this.expectPunctuator("[");
    let t3 = [];
    for (; !this.matchPunctuator("]"); ) {
      let e6 = this.captureStartMarker();
      this.matchPunctuator(",") ? (this.readNextRawToken(), this.throwError(c5.InvalidExpression, e6)) : (t3.push(this.inheritCoverGrammar(this.parseAssignmentExpression.bind(this))), this.matchPunctuator("]") || this.expectPunctuator(","));
    }
    return this.expectPunctuator("]"), this.finalize(__spreadValues({
      type: u4.ArrayExpression,
      elements: t3
    }, this.getItemLocation(e5)));
  }
  parseObjectPropertyKey() {
    let e5 = this.captureStartMarker(), t3 = this.rawToken;
    switch (t3.type) {
      case o2.StringLiteral:
        return this.readNextRawToken(), this.finalize(__spreadValues({
          type: u4.Literal,
          value: t3.value,
          raw: this.getSourceValue(t3),
          isString: true
        }, this.getItemLocation(e5)));
      case o2.Identifier:
      case o2.BooleanLiteral:
      case o2.NullLiteral:
      case o2.Keyword:
        return this.readNextRawToken(), this.finalize(__spreadValues({
          type: u4.Identifier,
          name: t3.value
        }, this.getItemLocation(e5)));
      default:
        this.throwError(c5.KeyMustBeString, e5);
    }
  }
  parseObjectProperty() {
    let e5 = this.rawToken, t3 = this.captureStartMarker(), i3 = this.parseObjectPropertyKey(), r7 = false, n7 = null;
    return this.matchPunctuator(":") ? (this.readNextRawToken(), n7 = this.inheritCoverGrammar(this.parseAssignmentExpression.bind(this))) : e5.type === o2.Identifier ? (r7 = true, n7 = this.finalize(__spreadValues({
      type: u4.Identifier,
      name: e5.value
    }, this.getItemLocation(t3)))) : this.throwUnexpectedToken({
      rawToken: this.rawToken
    }), this.finalize(__spreadValues({
      type: u4.Property,
      kind: "init",
      key: i3,
      value: n7,
      shorthand: r7
    }, this.getItemLocation(t3)));
  }
  parseObjectExpression() {
    let e5 = this.captureStartMarker();
    this.expectPunctuator("{");
    let t3 = [];
    for (; !this.matchPunctuator("}"); ) t3.push(this.parseObjectProperty()), this.matchPunctuator("}") || this.expectPunctuator(",");
    return this.expectPunctuator("}"), this.finalize(__spreadValues({
      type: u4.ObjectExpression,
      properties: t3
    }, this.getItemLocation(e5)));
  }
  parseTemplateElement(e5 = false) {
    let t3 = this.rawToken;
    t3.type !== o2.Template && this.throwUnexpectedToken({
      rawToken: t3
    }), e5 && !t3.head && this.throwUnexpectedToken({
      code: c5.InvalidTemplateHead,
      rawToken: t3
    });
    let i3 = this.captureStartMarker();
    this.readNextRawToken();
    let {
      value: r7,
      cooked: n7,
      tail: s6
    } = t3, a5 = this.finalize(__spreadValues({
      type: u4.TemplateElement,
      value: {
        raw: r7,
        cooked: n7
      },
      tail: s6
    }, this.getItemLocation(i3)));
    return a5.loc.start.column += 1, a5.loc.end.column -= s6 ? 1 : 2, a5;
  }
  parseTemplateLiteral() {
    let e5 = this.captureStartMarker(), t3 = [], i3 = [], r7 = this.parseTemplateElement(true);
    for (i3.push(r7); !r7.tail; ) t3.push(this.parseExpression()), r7 = this.parseTemplateElement(), i3.push(r7);
    return this.finalize(__spreadValues({
      type: u4.TemplateLiteral,
      quasis: i3,
      expressions: t3
    }, this.getItemLocation(e5)));
  }
  parseGroupExpression() {
    this.expectPunctuator("(");
    let e5 = this.inheritCoverGrammar(this.parseAssignmentExpression.bind(this));
    return this.expectPunctuator(")"), e5;
  }
  parseArguments() {
    this.expectPunctuator("(");
    let e5 = [];
    if (!this.matchPunctuator(")")) for (; ; ) {
      let t3 = this.isolateCoverGrammar(this.parseAssignmentExpression.bind(this));
      if (e5.push(t3), this.matchPunctuator(")") || (this.expectPunctuator(","), this.matchPunctuator(")"))) break;
    }
    return this.expectPunctuator(")"), e5;
  }
  parseMemberName() {
    let e5 = this.rawToken, t3 = this.captureStartMarker();
    return this.readNextRawToken(), e5.type !== o2.NullLiteral && e5.type !== o2.Identifier && e5.type !== o2.Keyword && e5.type !== o2.BooleanLiteral && this.throwUnexpectedToken({
      rawToken: e5
    }), this.finalize(__spreadValues({
      type: u4.Identifier,
      name: e5.value
    }, this.getItemLocation(t3)));
  }
  parseLeftHandSideExpression() {
    let e5, t3 = this.captureStartMarker(), i3 = this.inheritCoverGrammar(this.parsePrimaryExpression.bind(this)), r7 = this.captureStartMarker();
    for (; e5 = this.getMatchingPunctuator("([."); ) switch (e5) {
      case "(": {
        this.context.isAssignmentTarget = false, i3.type !== u4.Identifier && i3.type !== u4.MemberExpression && this.throwError(c5.IdentiferExpected, t3, r7);
        let e6 = this.parseArguments();
        i3 = this.finalize(__spreadValues({
          type: u4.CallExpression,
          callee: i3,
          arguments: e6
        }, this.getItemLocation(t3)));
        continue;
      }
      case "[": {
        this.context.isAssignmentTarget = true, this.expectPunctuator("[");
        let e6 = this.isolateCoverGrammar(() => this.parseExpression());
        this.expectPunctuator("]"), i3 = this.finalize(__spreadValues({
          type: u4.MemberExpression,
          computed: true,
          object: i3,
          property: e6
        }, this.getItemLocation(t3)));
        continue;
      }
      case ".": {
        this.context.isAssignmentTarget = true, this.expectPunctuator(".");
        let e6 = this.parseMemberName();
        i3 = this.finalize(__spreadValues({
          type: u4.MemberExpression,
          computed: false,
          object: i3,
          property: e6
        }, this.getItemLocation(t3)));
        continue;
      }
    }
    return i3;
  }
  parseUpdateExpression() {
    let e5 = this.captureStartMarker(), t3 = this.getMatchingPunctuator(i2);
    if (t3) {
      this.readNextRawToken();
      let i3 = this.captureStartMarker(), r8 = this.inheritCoverGrammar(this.parseUnaryExpression.bind(this));
      return r8.type !== u4.Identifier && r8.type !== u4.MemberExpression && r8.type !== u4.CallExpression && this.throwError(c5.InvalidExpression, i3), this.context.isAssignmentTarget || this.tolerateError(c5.InvalidLeftHandSideInAssignment, e5), this.context.isAssignmentTarget = false, this.finalize(__spreadValues({
        type: u4.UpdateExpression,
        operator: t3,
        argument: r8,
        prefix: true
      }, this.getItemLocation(e5)));
    }
    let r7 = this.captureStartMarker(), n7 = this.inheritCoverGrammar(this.parseLeftHandSideExpression.bind(this)), s6 = this.captureStartMarker();
    return this.hasLineTerminator || (t3 = this.getMatchingPunctuator(i2), !t3) ? n7 : (n7.type !== u4.Identifier && n7.type !== u4.MemberExpression && this.throwError(c5.InvalidExpression, r7, s6), this.context.isAssignmentTarget || this.tolerateError(c5.InvalidLeftHandSideInAssignment, e5), this.readNextRawToken(), this.context.isAssignmentTarget = false, this.finalize(__spreadValues({
      type: u4.UpdateExpression,
      operator: t3,
      argument: n7,
      prefix: false
    }, this.getItemLocation(e5))));
  }
  parseUnaryExpression() {
    let e5 = this.getMatchingPunctuator(r6);
    if (e5) {
      let t3 = this.captureStartMarker();
      this.readNextRawToken();
      let i3 = this.inheritCoverGrammar(this.parseUnaryExpression.bind(this));
      return this.context.isAssignmentTarget = false, this.finalize(__spreadValues({
        type: u4.UnaryExpression,
        operator: e5,
        argument: i3,
        prefix: true
      }, this.getItemLocation(t3)));
    }
    return this.parseUpdateExpression();
  }
  parseBinaryExpression() {
    let e5 = this.rawToken, t3 = this.inheritCoverGrammar(this.parseUnaryExpression.bind(this));
    if (this.rawToken.type !== o2.Punctuator) return t3;
    let u5 = this.rawToken.value, i3 = R2(u5);
    if (0 === i3) return t3;
    this.readNextRawToken(), this.context.isAssignmentTarget = false;
    let r7 = [e5, this.rawToken], n7 = t3, s6 = this.inheritCoverGrammar(this.parseUnaryExpression.bind(this)), a5 = [n7, u5, s6], D5 = [i3];
    for (; this.rawToken.type === o2.Punctuator && (i3 = R2(this.rawToken.value)) > 0; ) {
      for (; a5.length > 2 && i3 <= D5[D5.length - 1]; ) {
        s6 = a5.pop();
        let e6 = a5.pop();
        D5.pop(), n7 = a5.pop(), r7.pop();
        let t4 = r7[r7.length - 1], u6 = M3(t4, t4.lineStart);
        a5.push(this.finalize(this.createBinaryOrLogicalExpression(u6, e6, n7, s6)));
      }
      a5.push(this.rawToken.value), D5.push(i3), r7.push(this.rawToken), this.readNextRawToken(), a5.push(this.inheritCoverGrammar(this.parseUnaryExpression.bind(this)));
    }
    let h3 = a5.length - 1;
    t3 = a5[h3];
    let c6 = r7.pop();
    for (; h3 > 1; ) {
      let e6 = r7.pop();
      if (!e6) break;
      let u6 = c6?.lineStart, i4 = M3(e6, u6), n8 = a5[h3 - 1];
      t3 = this.finalize(this.createBinaryOrLogicalExpression(i4, n8, a5[h3 - 2], t3)), h3 -= 2, c6 = e6;
    }
    return t3;
  }
  createBinaryOrLogicalExpression(e5, t3, i3, r7) {
    let n7 = s4.includes(t3) ? u4.LogicalExpression : u4.BinaryExpression;
    return n7 === u4.BinaryExpression || ((i3.type === u4.AssignmentExpression || i3.type === u4.UpdateExpression) && this.throwError(c5.InvalidExpression, ...O2(i3)), (r7.type === u4.AssignmentExpression || r7.type === u4.UpdateExpression) && this.throwError(c5.InvalidExpression, ...O2(i3))), __spreadValues({
      type: n7,
      operator: t3,
      left: i3,
      right: r7
    }, this.getItemLocation(e5));
  }
  parseAssignmentExpression() {
    let e5 = this.captureStartMarker(), t3 = this.inheritCoverGrammar(this.parseBinaryExpression.bind(this)), i3 = this.captureStartMarker(), r7 = this.getMatchingPunctuator(n6);
    if (!r7) return t3;
    t3.type !== u4.Identifier && t3.type !== u4.MemberExpression && this.throwError(c5.InvalidExpression, e5, i3), this.context.isAssignmentTarget || this.tolerateError(c5.InvalidLeftHandSideInAssignment, e5), this.matchPunctuator("=") || (this.context.isAssignmentTarget = false), this.readNextRawToken();
    let s6 = this.isolateCoverGrammar(this.parseAssignmentExpression.bind(this));
    return this.finalize(__spreadValues({
      type: u4.AssignmentExpression,
      left: t3,
      operator: r7,
      right: s6
    }, this.getItemLocation(e5)));
  }
  parseExpression() {
    return this.isolateCoverGrammar(this.parseAssignmentExpression.bind(this));
  }
  parseStatements(e5) {
    let t3 = [];
    for (; this.rawToken.type !== o2.EOF && !this.matchPunctuator(e5); ) {
      let e6 = this.parseStatementListItem();
      E2(e6) || t3.push(e6);
    }
    return t3;
  }
  parseStatementListItem() {
    return this.context.isAssignmentTarget = true, this.matchKeyword(t.Function) ? this.parseFunctionDeclaration() : this.matchKeyword(t.Export) ? this.parseExportDeclaration() : this.matchKeyword(t.Import) ? this.parseImportDeclaration() : this.parseStatement();
  }
  parseBlock() {
    let e5 = this.captureStartMarker();
    this.expectPunctuator("{");
    let t3 = this.parseStatements("}");
    return this.expectPunctuator("}"), this.finalize(__spreadValues({
      type: u4.BlockStatement,
      body: t3
    }, this.getItemLocation(e5)));
  }
  parseObjectStatement() {
    let e5 = this.captureStartMarker(), t3 = this.parseObjectExpression();
    return this.finalize(__spreadValues({
      type: u4.ExpressionStatement,
      expression: t3
    }, this.getItemLocation(e5)));
  }
  parseBlockOrObjectStatement() {
    return this.context.curlyParsingType === P2.AsObject || this.peekAhead((e5) => {
      let t3 = e5();
      return !(t3.type !== o2.Identifier && t3.type !== o2.StringLiteral || (t3 = e5(), t3.type !== o2.Punctuator || ":" !== t3.value));
    }) ? this.parseObjectStatement() : this.parseBlock();
  }
  parseIdentifier() {
    let e5 = this.rawToken;
    if (e5.type !== o2.Identifier) return null;
    let t3 = this.captureStartMarker();
    return this.readNextRawToken(), this.finalize(__spreadValues({
      type: u4.Identifier,
      name: e5.value
    }, this.getItemLocation(t3)));
  }
  parseVariableDeclarator() {
    let e5 = this.captureStartMarker(), t3 = this.parseIdentifier();
    t3 || this.throwUnexpectedToken({
      code: c5.IdentiferExpected
    });
    let i3 = null;
    if (this.matchPunctuator("=")) {
      this.readNextRawToken();
      let e6 = this.rawToken;
      try {
        i3 = this.isolateCoverGrammar(this.parseAssignmentExpression.bind(this));
      } catch {
        this.throwUnexpectedToken({
          rawToken: e6,
          code: c5.InvalidVariableAssignment
        });
      }
    }
    return this.finalize(__spreadValues({
      type: u4.VariableDeclarator,
      id: t3,
      init: i3
    }, this.getItemLocation(e5)));
  }
  parseVariableDeclarationList() {
    let e5 = [this.parseVariableDeclarator()];
    for (; this.matchPunctuator(","); ) this.readNextRawToken(), e5.push(this.parseVariableDeclarator());
    return e5;
  }
  parseVariableDeclaration() {
    let e5 = this.captureStartMarker();
    this.expectKeyword(t.Var);
    let i3 = this.parseVariableDeclarationList();
    return this.consumeSemicolon(), this.finalize(__spreadValues({
      type: u4.VariableDeclaration,
      declarations: i3,
      kind: "var"
    }, this.getItemLocation(e5)));
  }
  parseEmptyStatement() {
    let e5 = this.captureStartMarker();
    return this.expectPunctuator(";"), this.finalize(__spreadValues({
      type: u4.EmptyStatement
    }, this.getItemLocation(e5)));
  }
  parseExpressionStatement() {
    let e5 = this.captureStartMarker(), t3 = this.parseExpression();
    return this.consumeSemicolon(), this.finalize(__spreadValues({
      type: u4.ExpressionStatement,
      expression: t3
    }, this.getItemLocation(e5)));
  }
  parseIfClause() {
    return this.withBlockContext(U4.IfClause, this.parseStatement.bind(this));
  }
  parseIfStatement() {
    let e5 = this.captureStartMarker();
    this.expectKeyword(t.If), this.expectPunctuator("(");
    let i3 = this.captureStartMarker(), r7 = this.parseExpression(), n7 = this.captureStartMarker();
    this.expectPunctuator(")"), (r7.type === u4.AssignmentExpression || r7.type === u4.UpdateExpression) && this.throwError(c5.InvalidExpression, i3, n7);
    let s6 = this.parseIfClause(), a5 = null;
    return this.matchKeyword(t.Else) && (this.readNextRawToken(), a5 = this.parseIfClause()), this.finalize(__spreadValues({
      type: u4.IfStatement,
      test: r7,
      consequent: s6,
      alternate: a5
    }, this.getItemLocation(e5)));
  }
  parseWhileStatement() {
    let e5 = this.captureStartMarker();
    this.expectKeyword(t.While), this.expectPunctuator("(");
    let i3 = this.captureStartMarker(), r7 = this.parseExpression(), n7 = this.captureStartMarker();
    this.expectPunctuator(")"), (r7.type === u4.AssignmentExpression || r7.type === u4.UpdateExpression) && this.throwError(c5.InvalidExpression, i3, n7);
    let s6 = this.withBlockContext(U4.WhileLoop, this.parseStatement.bind(this));
    return this.finalize(__spreadValues({
      type: u4.WhileStatement,
      test: r7,
      body: s6
    }, this.getItemLocation(e5)));
  }
  parseForStatement() {
    let e5 = null, i3 = null, r7 = null, n7 = null, s6 = null, a5 = this.captureStartMarker();
    if (this.expectKeyword(t.For), this.expectPunctuator("("), this.matchPunctuator(";")) this.readNextRawToken();
    else if (this.matchKeyword(t.Var)) {
      let i4 = this.captureStartMarker();
      this.readNextRawToken();
      let r8 = this.parseVariableDeclarationList();
      1 === r8.length && this.matchKeyword(t.In) ? (r8[0].init && this.throwError(c5.ForInOfLoopInitializer, i4), n7 = this.finalize(__spreadValues({
        type: u4.VariableDeclaration,
        declarations: r8,
        kind: "var"
      }, this.getItemLocation(i4))), this.readNextRawToken(), s6 = this.parseExpression()) : (this.matchKeyword(t.In) && this.throwError(c5.InvalidLeftHandSideInForIn, i4), e5 = this.finalize(__spreadValues({
        type: u4.VariableDeclaration,
        declarations: r8,
        kind: "var"
      }, this.getItemLocation(i4))), this.expectPunctuator(";"));
    } else {
      let i4 = this.context.isAssignmentTarget, r8 = this.captureStartMarker();
      e5 = this.inheritCoverGrammar(this.parseAssignmentExpression.bind(this)), this.matchKeyword(t.In) ? (this.context.isAssignmentTarget || this.tolerateError(c5.InvalidLeftHandSideInForIn, r8), e5.type !== u4.Identifier && this.throwError(c5.InvalidLeftHandSideInForIn, r8), this.readNextRawToken(), n7 = e5, s6 = this.parseExpression(), e5 = null) : (this.context.isAssignmentTarget = i4, this.expectPunctuator(";"));
    }
    n7 || (this.matchPunctuator(";") || (i3 = this.isolateCoverGrammar(this.parseExpression.bind(this))), this.expectPunctuator(";"), this.matchPunctuator(")") || (r7 = this.isolateCoverGrammar(this.parseExpression.bind(this)))), this.expectPunctuator(")");
    let D5 = this.withBlockContext(U4.ForLoop, () => this.isolateCoverGrammar(this.parseStatement.bind(this)));
    return n7 && s6 ? this.finalize(__spreadValues({
      type: u4.ForInStatement,
      left: n7,
      right: s6,
      body: D5
    }, this.getItemLocation(a5))) : this.finalize(__spreadValues({
      type: u4.ForStatement,
      init: e5,
      test: i3,
      update: r7,
      body: D5
    }, this.getItemLocation(a5)));
  }
  parseContinueStatement() {
    let e5 = this.captureStartMarker();
    return this.expectKeyword(t.Continue), this.consumeSemicolon(), this.finalize(__spreadValues({
      type: u4.ContinueStatement
    }, this.getItemLocation(e5)));
  }
  parseBreakStatement() {
    let e5 = this.captureStartMarker();
    return this.expectKeyword(t.Break), this.consumeSemicolon(), this.finalize(__spreadValues({
      type: u4.BreakStatement
    }, this.getItemLocation(e5)));
  }
  parseReturnStatement() {
    let e5 = this.captureStartMarker();
    this.expectKeyword(t.Return);
    let i3 = (this.matchPunctuator(";") || this.matchPunctuator("}") || this.hasLineTerminator || this.rawToken.type === o2.EOF) && this.rawToken.type !== o2.StringLiteral && this.rawToken.type !== o2.Template ? null : this.parseExpression();
    return this.consumeSemicolon(), this.finalize(__spreadValues({
      type: u4.ReturnStatement,
      argument: i3
    }, this.getItemLocation(e5)));
  }
  parseStatement() {
    switch (this.rawToken.type) {
      case o2.BooleanLiteral:
      case o2.NullLiteral:
      case o2.NumericLiteral:
      case o2.StringLiteral:
      case o2.Template:
      case o2.Identifier:
        return this.parseExpressionStatement();
      case o2.Punctuator:
        return "{" === this.rawToken.value ? this.parseBlockOrObjectStatement() : "(" === this.rawToken.value ? this.parseExpressionStatement() : ";" === this.rawToken.value ? this.parseEmptyStatement() : this.parseExpressionStatement();
      case o2.Keyword:
        switch (this.rawToken.value.toLowerCase()) {
          case t.Break:
            return this.parseBreakStatement();
          case t.Continue:
            return this.parseContinueStatement();
          case t.For:
            return this.parseForStatement();
          case t.Function:
            return this.parseFunctionDeclaration();
          case t.If:
            return this.parseIfStatement();
          case t.Return:
            return this.parseReturnStatement();
          case t.Var:
            return this.parseVariableDeclaration();
          case t.While:
            return this.parseWhileStatement();
          default:
            return this.parseExpressionStatement();
        }
      default:
        return this.throwUnexpectedToken({
          rawToken: this.rawToken
        });
    }
  }
  parseFormalParameters() {
    let e5 = [];
    if (this.expectPunctuator("("), !this.matchPunctuator(")")) for (; this.rawToken.type !== o2.EOF; ) {
      let t3 = this.parseIdentifier();
      if (t3 || this.throwUnexpectedToken({
        rawToken: this.rawToken,
        code: c5.IdentiferExpected
      }), e5.push(t3), this.matchPunctuator(")") || (this.expectPunctuator(","), this.matchPunctuator(")"))) break;
    }
    return this.expectPunctuator(")"), e5;
  }
  parseFunctionDeclaration() {
    (this.context.blockContext & U4.Function) === U4.Function && this.throwUnexpectedToken({
      code: c5.NoFunctionInsideFunction
    }), ((this.context.blockContext & U4.WhileLoop) === U4.WhileLoop || (this.context.blockContext & U4.IfClause) === U4.IfClause) && this.throwUnexpectedToken({
      code: c5.NoFunctionInsideBlock
    });
    let e5 = this.captureStartMarker();
    this.expectKeyword(t.Function);
    let i3 = this.parseIdentifier();
    i3 || this.throwUnexpectedToken({
      code: c5.InvalidFunctionIdentifier
    });
    let r7 = this.parseFormalParameters(), n7 = this.context.blockContext;
    this.context.blockContext |= U4.Function;
    let s6 = this.parseBlock();
    return this.context.blockContext = n7, this.finalize(__spreadValues({
      type: u4.FunctionDeclaration,
      id: i3,
      params: r7,
      body: s6
    }, this.getItemLocation(e5)));
  }
  parseScript() {
    let e5 = this.captureStartMarker(), t3 = this.parseStatements(), i3 = this.finalize(__spreadValues({
      type: u4.Program,
      body: t3
    }, this.getItemLocation(e5)));
    return this.options.tokens && (i3.tokens = this.tokens), this.options.tolerant && (i3.errors = this.errorHandler.errors), i3;
  }
  parseExportDeclaration() {
    this.context.blockContext !== U4.None && this.throwUnexpectedToken({
      code: c5.ModuleExportRootOnly
    });
    let e5 = null, i3 = this.captureStartMarker();
    return this.expectKeyword(t.Export), this.matchKeyword(t.Var) ? e5 = this.parseVariableDeclaration() : this.matchKeyword("function") ? e5 = this.parseFunctionDeclaration() : this.throwUnexpectedToken({
      code: c5.InvalidExpression
    }), this.finalize(__spreadValues({
      type: u4.ExportNamedDeclaration,
      declaration: e5,
      specifiers: [],
      source: null
    }, this.getItemLocation(i3)));
  }
  parseModuleSpecifier() {
    let e5 = this.captureStartMarker(), t3 = this.rawToken;
    if (t3.type === o2.StringLiteral) return this.readNextRawToken(), this.finalize(__spreadValues({
      type: u4.Literal,
      value: t3.value,
      raw: this.getSourceValue(t3),
      isString: true
    }, this.getItemLocation(e5)));
    this.throwError(c5.InvalidModuleUri, e5);
  }
  parseDefaultSpecifier() {
    let e5 = this.captureStartMarker(), t3 = this.parseIdentifier();
    return t3 || this.throwUnexpectedToken({
      code: c5.IdentiferExpected
    }), this.finalize(__spreadValues({
      type: u4.ImportDefaultSpecifier,
      local: t3
    }, this.getItemLocation(e5)));
  }
  parseImportDeclaration() {
    this.context.blockContext !== U4.None && this.throwUnexpectedToken({
      code: c5.ModuleImportRootOnly
    });
    let e5 = this.captureStartMarker();
    this.expectKeyword(t.Import);
    let i3 = this.parseDefaultSpecifier();
    this.expectContextualKeyword(t.From);
    let r7 = this.parseModuleSpecifier();
    return this.finalize(__spreadValues({
      type: u4.ImportDeclaration,
      specifiers: [i3],
      source: r7
    }, this.getItemLocation(e5)));
  }
};
function H4(e5, t3, u5) {
  return new z3(e5, t3, u5).parseScript();
}

// ../../../node_modules/@arcgis/core/arcade/parser.js
function d4(d5, r7 = []) {
  const s6 = H4(d5);
  if (null === s6.body || void 0 === s6.body) throw new d3({
    index: 0,
    line: 0,
    column: 0,
    data: null,
    description: "",
    code: c5.InvalidExpression
  });
  return s6.loadedModules = {}, d2(s6, r7), s6;
}

// ../../../node_modules/@arcgis/core/arcade/featureset/support/RecentlyUsedCache.js
var e4 = class _e3 {
  constructor(e5) {
    const t3 = this;
    t3._keys = [], t3._values = [], t3.length = 0, e5 && e5.forEach((e6) => {
      t3.set(e6[0], e6[1]);
    });
  }
  entries() {
    return [].slice.call(this.keys().map((e5, t3) => [e5, this._values[t3]]));
  }
  keys() {
    return [].slice.call(this._keys);
  }
  values() {
    return [].slice.call(this._values);
  }
  has(e5) {
    return this._keys.includes(e5);
  }
  get(e5) {
    const t3 = this._keys.indexOf(e5);
    return t3 > -1 ? this._values[t3] : null;
  }
  deepGet(t3) {
    if (!t3?.length) return null;
    const s6 = (t4, a5) => null == t4 ? null : a5.length ? s6(t4 instanceof _e3 ? t4.get(a5[0]) : t4[a5[0]], a5.slice(1)) : t4;
    return s6(this.get(t3[0]), t3.slice(1));
  }
  set(e5, t3) {
    const s6 = this, a5 = this._keys.indexOf(e5);
    return a5 > -1 ? s6._values[a5] = t3 : (s6._keys.push(e5), s6._values.push(t3), s6.length = s6._values.length), this;
  }
  sortedSet(e5, t3, s6, a5) {
    const i3 = this, h3 = this._keys.length, r7 = s6 || 0, l5 = void 0 !== a5 ? a5 : h3 - 1;
    if (0 === h3) return i3._keys.push(e5), i3._values.push(t3), i3;
    if (e5 === this._keys[r7]) return this._values.splice(r7, 0, t3), this;
    if (e5 === this._keys[l5]) return this._values.splice(l5, 0, t3), this;
    if (e5 > this._keys[l5]) return this._keys.splice(l5 + 1, 0, e5), this._values.splice(l5 + 1, 0, t3), this;
    if (e5 < this._keys[r7]) return this._values.splice(r7, 0, t3), this._keys.splice(r7, 0, e5), this;
    if (r7 >= l5) return this;
    const n7 = r7 + Math.floor((l5 - r7) / 2);
    return e5 < this._keys[n7] ? this.sortedSet(e5, t3, r7, n7 - 1) : e5 > this._keys[n7] ? this.sortedSet(e5, t3, n7 + 1, l5) : this;
  }
  size() {
    return this.length;
  }
  clear() {
    const e5 = this;
    return e5._keys.length = e5.length = e5._values.length = 0, this;
  }
  delete(e5) {
    const t3 = this, s6 = t3._keys.indexOf(e5);
    return s6 > -1 && (t3._keys.splice(s6, 1), t3._values.splice(s6, 1), t3.length = t3._keys.length, true);
  }
  forEach(e5) {
    this._keys.forEach((t3, s6) => {
      e5(this._values[s6], t3, s6);
    });
  }
  map(e5) {
    return this.keys().map((t3, s6) => e5(this._values[s6], t3, s6));
  }
  filter(e5) {
    const t3 = this;
    return t3._keys.forEach((s6, a5) => {
      false === e5(t3._values[a5], s6, a5) && t3.delete(s6);
    }), this;
  }
  clone() {
    return new _e3(this.entries());
  }
};
var t2 = class {
  constructor(t3 = 20) {
    this._maxEntries = t3, this._values = new e4();
  }
  delete(e5) {
    this._values.has(e5) && this._values.delete(e5);
  }
  get(e5) {
    let t3 = null;
    return this._values.has(e5) && (t3 = this._values.get(e5), this._values.delete(e5), this._values.set(e5, t3)), t3;
  }
  put(e5, t3) {
    if (this._values.size() >= this._maxEntries) {
      const e6 = this._values.keys()[0];
      this._values.delete(e6);
    }
    this._values.set(e5, t3);
  }
};
var s5 = class {
  constructor(e5 = 20) {
    this._maxEntries = e5, this._cache = new t2(this._maxEntries), this._layerMetadata = new t2(this._maxEntries), this._serviceMetadata = new t2(this._maxEntries), this._portalItems = new t2(this._maxEntries);
  }
  clear() {
    this._cache = new t2(this._maxEntries), this._layerMetadata = new t2(this._maxEntries), this._serviceMetadata = new t2(this._maxEntries), this._portalItems = new t2(this._maxEntries);
  }
  addToCache(e5, t3) {
    this._cache.put(e5, t3);
  }
  removeFromCache(e5) {
    this._cache.delete(e5);
  }
  getFromCache(e5) {
    return this._cache.get(e5);
  }
  getCachedLayerMetadata(e5) {
    return this._layerMetadata.get(e5);
  }
  setCachedLayerMetadata(e5, t3) {
    this._layerMetadata.put(e5, t3);
  }
  removeCachedLayerMetadata(e5, t3) {
    this._layerMetadata.get(e5) === t3 && this._layerMetadata.delete(e5);
  }
  getCachedServiceMetadata(e5) {
    return this._serviceMetadata.get(e5);
  }
  setCachedServiceMetadata(e5, t3) {
    this._serviceMetadata.put(e5, t3);
  }
  removeCachedServiceMetadata(e5, t3) {
    this._serviceMetadata.get(e5) === t3 && this._serviceMetadata.delete(e5);
  }
  getCachedPortalItem(e5, t3) {
    return this._portalItems.get(`${t3}:${e5}`);
  }
  setCachedPortalItem(e5, t3, s6) {
    this._portalItems.put(`${t3}:${e5}`, s6);
  }
  removeCachedPortalItem(e5, t3, s6) {
    const a5 = `${t3}:${e5}`;
    this._portalItems.get(a5) === s6 && this._portalItems.delete(a5);
  }
};

// ../../../node_modules/@arcgis/core/arcade/ArcadeModuleResolver.js
var l4 = class _l {
  constructor(e5) {
    this.portalUri = e5;
  }
  normalizeModuleUri(e5) {
    const o3 = /^[a-z0-9A-Z]+(@[0-9]+\.[0-9]+\.[0-9]+)?([?|/].*)?$/gi, s6 = /(?<portalurl>.+)\/home\/item\.html\?id=(?<itemid>.+)$/gi, c6 = /(?<portalurl>.+)\/sharing\/rest\/content\/users\/[a-zA-Z0-9]+\/items\/(?<itemid>.+)$/gi, u5 = /(?<portalurl>.+)\/sharing\/rest\/content\/items\/(?<itemid>.+)$/gi, n7 = /(?<itemid>.*)@(?<versionstring>[0-9]+\.[0-9]+\.[0-9]+)([?|/].*)?$/gi;
    if (e5.startsWith("portal+")) {
      let l5 = e5.substring(7), a5 = "", m3 = l5, d5 = false;
      for (const e6 of [s6, u5, c6]) {
        const t3 = e6.exec(l5);
        if (null !== t3) {
          const e7 = t3.groups;
          m3 = e7.itemid, a5 = e7.portalurl, d5 = true;
          break;
        }
      }
      if (false === d5) {
        if (!o3.test(l5)) throw new p(l.UnsupportedUriProtocol, {
          uri: e5
        });
        m3 = l5, a5 = this.portalUri;
      }
      m3.includes("/") && (m3 = m3.split("/")[0]), m3.includes("?") && (m3 = m3.split("?")[0]);
      let h3 = "current";
      const p6 = n7.exec(m3);
      if (null !== p6) {
        const e6 = p6.groups;
        m3 = e6.itemid, h3 = e6.versionstring;
      }
      return l5 = new C2({
        url: a5
      }).restUrl + "/content/items/" + m3 + "/resources/" + h3 + ".arc", {
        url: l5,
        scheme: "portal",
        uri: "PO:" + l5
      };
    }
    if (e5.startsWith("mock")) {
      if ("mock" === e5) {
        return {
          url: "",
          scheme: "mock",
          data: '\n      export var hello = 1;\n      export function helloWorld() {\n          return "Hello World " + hello;\n      }\n  ',
          uri: "mock"
        };
      }
      const t3 = e5.replace("mock:", "");
      if (void 0 !== _l.mocks[t3]) return {
        url: "",
        scheme: "mock",
        data: _l.mocks[t3],
        uri: e5
      };
    }
    throw new p(l.UnrecognizedUri, {
      uri: e5
    });
  }
  fetchModule(e5) {
    return __async(this, null, function* () {
      const t3 = _l.cachedModules.getFromCache(e5.uri);
      if (t3) return t3;
      const r7 = this.fetchSource(e5);
      _l.cachedModules.addToCache(e5.uri, r7);
      let o3 = null;
      try {
        o3 = yield r7;
      } catch (s6) {
        throw _l.cachedModules.removeFromCache(e5.uri), s6;
      }
      return o3;
    });
  }
  fetchSource(s6) {
    return __async(this, null, function* () {
      if ("portal" === s6.scheme) {
        const t3 = yield U(s6.url, {
          responseType: "text",
          query: {}
        });
        if (t3.data) return d4(t3.data, []);
      }
      if ("mock" === s6.scheme) return d4(s6.data ?? "", []);
      throw new p(l.UnsupportedUriProtocol);
    });
  }
  static create(e5) {
    return new _l(e5);
  }
  static getDefault() {
    return this._default ?? (_l._default = _l._moduleResolverFactory());
  }
  static set moduleResolverClass(e5) {
    this._moduleResolverFactory = e5, this._default = null;
  }
};
l4.mocks = {}, l4.cachedModules = new s5(30), l4._default = null, l4._moduleResolverFactory = () => {
  const e5 = C2.getDefault();
  return new l4(e5.url);
};

// ../../../node_modules/@arcgis/core/arcade/arcadeRuntime.js
var P3 = class extends r4 {
  constructor(e5, t3) {
    super(), this.definition = null, this.context = null, this.definition = e5, this.context = t3;
  }
  createFunction(e5) {
    return (...t3) => {
      const n7 = {
        spatialReference: this.context.spatialReference,
        console: this.context.console,
        services: this.context.services,
        timeZone: this.context.timeZone ?? null,
        lrucache: this.context.lrucache,
        exports: this.context.exports,
        libraryResolver: this.context.libraryResolver,
        interceptor: this.context.interceptor,
        localScope: {},
        depthCounter: {
          depth: e5.depthCounter.depth + 1
        },
        globalScope: this.context.globalScope
      };
      if (n7.depthCounter.depth > 64) throw new a3(e5, r3.MaximumCallDepth, null);
      return Fe3(this.definition, n7, t3, null);
    };
  }
  call(e5, t3) {
    return V(e5, t3, (n7, o3, r7) => {
      const a5 = {
        spatialReference: e5.spatialReference,
        services: e5.services,
        globalScope: e5.globalScope,
        depthCounter: {
          depth: e5.depthCounter.depth + 1
        },
        libraryResolver: e5.libraryResolver,
        exports: e5.exports,
        timeZone: e5.timeZone ?? null,
        console: e5.console,
        lrucache: e5.lrucache,
        interceptor: e5.interceptor,
        localScope: {}
      };
      if (a5.depthCounter.depth > 64) throw new a3(e5, r3.MaximumCallDepth, t3);
      return Fe3(this.definition, a5, r7, t3);
    });
  }
  marshalledCall(e5, t3, n7, o3) {
    return o3(e5, t3, (r7, l5, i3) => {
      const a5 = {
        spatialReference: e5.spatialReference,
        globalScope: n7.globalScope,
        services: e5.services,
        depthCounter: {
          depth: e5.depthCounter.depth + 1
        },
        libraryResolver: e5.libraryResolver,
        exports: e5.exports,
        console: e5.console,
        timeZone: e5.timeZone ?? null,
        lrucache: e5.lrucache,
        interceptor: e5.interceptor,
        localScope: {}
      };
      return i3 = i3.map((t4) => !_2(t4) || t4 instanceof s3 ? t4 : n5(t4, e5, o3)), n5(Fe3(this.definition, a5, i3, t3), n7, o3);
    });
  }
};
var T2 = class extends s {
  constructor(e5) {
    super(e5);
  }
  global(e5) {
    const t3 = this.executingContext.globalScope[e5.toLowerCase()];
    if (t3.valueset || (t3.value = _3(this.executingContext, t3.node), t3.valueset = true), _2(t3.value) && !(t3.value instanceof s3)) {
      const e6 = new s3();
      e6.fn = t3.value, e6.parameterEvaluator = V, e6.context = this.executingContext, t3.value = e6;
    }
    return t3.value;
  }
  setGlobal(e5, t3) {
    if (_2(t3)) throw new a3(null, r3.AssignModuleFunction, null);
    this.executingContext.globalScope[e5.toLowerCase()] = {
      value: t3,
      valueset: true,
      node: null
    };
  }
  hasGlobal(e5) {
    return void 0 === this.executingContext.exports[e5] && (e5 = e5.toLowerCase()), void 0 !== this.executingContext.exports[e5];
  }
  loadModule(e5) {
    let n7 = e5.spatialReference;
    null == n7 && (n7 = new f({
      wkid: 102100
    })), this.moduleScope = Re2({}, e5.customfunctions, e5.timeZone), this.executingContext = {
      spatialReference: n7,
      globalScope: this.moduleScope,
      localScope: null,
      libraryResolver: new s2(e5.libraryResolver._moduleSingletons, this.source.syntax.loadedModules),
      exports: {},
      services: e5.services,
      console: e5.console ?? Me3,
      timeZone: e5.timeZone ?? null,
      lrucache: e5.lrucache,
      interceptor: e5.interceptor,
      depthCounter: {
        depth: 1
      }
    }, _3(this.executingContext, this.source.syntax);
  }
};
function W5(e5, t3) {
  const n7 = [];
  for (let o3 = 0; o3 < t3.arguments.length; o3++) n7.push(_3(e5, t3.arguments[o3]));
  return n7;
}
function V(e5, t3, n7) {
  try {
    return true === t3.preparsed ? n7(e5, null, t3.arguments) : n7(e5, t3, W5(e5, t3));
  } catch (o3) {
    throw o3;
  }
}
function _3(e5, t3) {
  try {
    switch (t3?.type) {
      case "EmptyStatement":
        return O;
      case "VariableDeclarator":
        return ue2(e5, t3);
      case "VariableDeclaration":
        return ce3(e5, t3);
      case "ImportDeclaration":
        return ae3(e5, t3);
      case "ExportNamedDeclaration":
        return se2(e5, t3);
      case "BlockStatement":
      case "Program":
        return re2(e5, t3);
      case "FunctionDeclaration":
        return ie2(e5, t3);
      case "ReturnStatement":
        return le2(e5, t3);
      case "IfStatement":
        return oe2(e5, t3);
      case "ExpressionStatement":
        return ne2(e5, t3);
      case "AssignmentExpression":
        return te3(e5, t3);
      case "UpdateExpression":
        return $(e5, t3);
      case "BreakStatement":
        return R;
      case "ContinueStatement":
        return J;
      case "TemplateElement":
        return me3(e5, t3);
      case "TemplateLiteral":
        return ve2(e5, t3);
      case "ForStatement":
        return J4(e5, t3);
      case "ForInStatement":
        return Y3(e5, t3);
      case "WhileStatement":
        return Q3(e5, t3);
      case "Identifier":
        return ye2(e5, t3);
      case "MemberExpression":
        return fe3(e5, t3);
      case "Literal":
        return t3.value;
      case "CallExpression":
        return be2(e5, t3);
      case "UnaryExpression":
        return pe2(e5, t3);
      case "BinaryExpression":
        return he2(e5, t3);
      case "LogicalExpression":
        return we2(e5, t3);
      case "ArrayExpression":
        return de2(e5, t3);
      case "ObjectExpression":
        return z4(e5, t3);
      case "Property":
        return H5(e5, t3);
      default:
        throw new a3(e5, r3.Unrecognized, t3);
    }
  } catch (n7) {
    throw u2(e5, t3, n7);
  }
}
function z4(e5, t3) {
  const n7 = {}, o3 = /* @__PURE__ */ new Map();
  for (let r7 = 0; r7 < t3.properties.length; r7++) {
    const a6 = _3(e5, t3.properties[r7]);
    if (_2(a6.value)) throw new a3(e5, r3.NoFunctionInDictionary, t3);
    if (false === G(a6.key)) throw new a3(e5, r3.KeyMustBeString, t3);
    let s6 = a6.key.toString();
    const c6 = s6.toLowerCase();
    o3.has(c6) ? s6 = o3.get(c6) : o3.set(c6, s6), a6.value === O ? n7[s6] = null : n7[s6] = a6.value;
  }
  const a5 = new N(n7);
  return a5.immutable = false, a5;
}
function H5(e5, t3) {
  return {
    key: "Identifier" === t3.key.type ? t3.key.name : _3(e5, t3.key),
    value: _3(e5, t3.value)
  };
}
function Y3(e5, t3) {
  const n7 = _3(e5, t3.right);
  "VariableDeclaration" === t3.left.type && _3(e5, t3.left);
  let o3 = null, a5 = "";
  if ("VariableDeclaration" === t3.left.type) {
    const e6 = t3.left.declarations[0].id;
    "Identifier" === e6.type && (a5 = e6.name);
  } else "Identifier" === t3.left.type && (a5 = t3.left.name);
  if (!a5) throw new a3(e5, r3.InvalidIdentifier, t3);
  if (a5 = a5.toLowerCase(), null != e5.localScope && void 0 !== e5.localScope[a5] && (o3 = e5.localScope[a5]), null === o3 && void 0 !== e5.globalScope[a5] && (o3 = e5.globalScope[a5]), null === o3) throw new a3(e5, r3.InvalidIdentifier, t3);
  if (U2(n7) || G(n7)) {
    const r7 = n7.length;
    for (let n8 = 0; n8 < r7; n8++) {
      o3.value = n8;
      const r8 = _3(e5, t3.body);
      if (r8 === R) break;
      if (r8 instanceof M) return r8;
    }
    return O;
  }
  if (Q(n7)) {
    for (let r7 = 0; r7 < n7.length(); r7++) {
      o3.value = r7;
      const n8 = _3(e5, t3.body);
      if (n8 === R) break;
      if (n8 instanceof M) return n8;
    }
    return O;
  }
  if (!(n7 instanceof N || H(n7))) return O;
  {
    const r7 = n7.keys();
    for (let n8 = 0; n8 < r7.length; n8++) {
      o3.value = r7[n8];
      const l5 = _3(e5, t3.body);
      if (l5 === R) break;
      if (l5 instanceof M) return l5;
    }
  }
}
function J4(e5, t3) {
  null !== t3.init && _3(e5, t3.init);
  const n7 = {
    testResult: true,
    lastAction: O
  };
  do {
    X3(e5, t3, n7);
  } while (true === n7.testResult);
  return n7.lastAction instanceof M ? n7.lastAction : O;
}
function Q3(e5, t3) {
  const n7 = {
    testResult: true,
    lastAction: O
  };
  if (n7.testResult = _3(e5, t3.test), false === n7.testResult) return O;
  if (true !== n7.testResult) throw new a3(e5, r3.BooleanConditionRequired, t3);
  for (; true === n7.testResult && (n7.lastAction = _3(e5, t3.body), n7.lastAction !== R) && !(n7.lastAction instanceof M); ) if (n7.testResult = _3(e5, t3.test), true !== n7.testResult && false !== n7.testResult) throw new a3(e5, r3.BooleanConditionRequired, t3);
  return n7.lastAction instanceof M ? n7.lastAction : O;
}
function X3(e5, t3, n7) {
  if (null !== t3.test) {
    if (n7.testResult = _3(e5, t3.test), false === n7.testResult) return;
    if (true !== n7.testResult) throw new a3(e5, r3.BooleanConditionRequired, t3);
  }
  n7.lastAction = _3(e5, t3.body), n7.lastAction !== R ? n7.lastAction instanceof M ? n7.testResult = false : null !== t3.update && _3(e5, t3.update) : n7.testResult = false;
}
function $(e5, t3) {
  let n7, o3 = null, a5 = "";
  if ("MemberExpression" === t3.argument.type) {
    if (o3 = _3(e5, t3.argument.object), true === t3.argument.computed ? a5 = _3(e5, t3.argument.property) : "Identifier" === t3.argument.property.type && (a5 = t3.argument.property.name), U2(o3)) {
      if (!E(a5)) throw new a3(e5, r3.ArrayAccessorMustBeNumber, t3);
      if (a5 < 0 && (a5 = o3.length + a5), a5 < 0 || a5 >= o3.length) throw new a3(e5, r3.OutOfBounds, t3);
      n7 = ge(o3[a5]), o3[a5] = "++" === t3.operator ? n7 + 1 : n7 - 1;
    } else if (o3 instanceof N) {
      if (false === G(a5)) throw new a3(e5, r3.KeyAccessorMustBeString, t3);
      if (true !== o3.hasField(a5)) throw new a3(e5, r3.FieldNotFound, t3);
      n7 = ge(o3.field(a5)), o3.setField(a5, "++" === t3.operator ? n7 + 1 : n7 - 1);
    } else if (H(o3)) {
      if (false === G(a5)) throw new a3(e5, r3.KeyAccessorMustBeString, t3);
      if (true !== o3.hasField(a5)) throw new a3(e5, r3.FieldNotFound, t3);
      n7 = ge(o3.field(a5)), o3.setField(a5, "++" === t3.operator ? n7 + 1 : n7 - 1);
    } else {
      if (Q(o3)) throw new a3(e5, r3.Immutable, t3);
      if (!(o3 instanceof T2)) throw new a3(e5, r3.InvalidParameter, t3);
      if (false === G(a5)) throw new a3(e5, r3.ModuleAccessorMustBeString, t3);
      if (true !== o3.hasGlobal(a5)) throw new a3(e5, r3.ModuleExportNotFound, t3);
      n7 = ge(o3.global(a5)), o3.setGlobal(a5, "++" === t3.operator ? n7 + 1 : n7 - 1);
    }
    return false === t3.prefix ? n7 : "++" === t3.operator ? n7 + 1 : n7 - 1;
  }
  if (o3 = "Identifier" === t3.argument.type ? t3.argument.name.toLowerCase() : "", !o3) throw new a3(e5, r3.InvalidIdentifier, t3);
  if (null != e5.localScope && void 0 !== e5.localScope[o3]) return n7 = ge(e5.localScope[o3].value), e5.localScope[o3] = {
    value: "++" === t3.operator ? n7 + 1 : n7 - 1,
    valueset: true,
    node: t3
  }, false === t3.prefix ? n7 : "++" === t3.operator ? n7 + 1 : n7 - 1;
  if (void 0 !== e5.globalScope[o3]) return n7 = ge(e5.globalScope[o3].value), e5.globalScope[o3] = {
    value: "++" === t3.operator ? n7 + 1 : n7 - 1,
    valueset: true,
    node: t3
  }, false === t3.prefix ? n7 : "++" === t3.operator ? n7 + 1 : n7 - 1;
  throw new a3(e5, r3.InvalidIdentifier, t3);
}
function ee3(e5, t3, n7, o3, r7) {
  switch (t3) {
    case "=":
      return e5 === O ? null : e5;
    case "/=":
      return ge(n7) / ge(e5);
    case "*=":
      return ge(n7) * ge(e5);
    case "-=":
      return ge(n7) - ge(e5);
    case "+=":
      return G(n7) || G(e5) ? me(n7) + me(e5) : ge(n7) + ge(e5);
    case "%=":
      return ge(n7) % ge(e5);
    default:
      throw new a3(r7, r3.UnsupportedOperator, o3);
  }
}
function te3(e5, t3) {
  let n7 = null, o3 = "";
  if ("MemberExpression" === t3.left.type) {
    if (n7 = _3(e5, t3.left.object), true === t3.left.computed) o3 = _3(e5, t3.left.property);
    else {
      if ("Identifier" !== t3.left.property.type) throw new a3(e5, r3.InvalidIdentifier, t3);
      o3 = t3.left.property.name;
    }
    const a6 = _3(e5, t3.right);
    if (U2(n7)) {
      if (!E(o3)) throw new a3(e5, r3.ArrayAccessorMustBeNumber, t3);
      if (o3 < 0 && (o3 = n7.length + o3), o3 < 0 || o3 > n7.length) throw new a3(e5, r3.OutOfBounds, t3);
      if (o3 === n7.length) {
        if ("=" !== t3.operator) throw new a3(e5, r3.OutOfBounds, t3);
        n7[o3] = ee3(a6, t3.operator, n7[o3], t3, e5);
      } else n7[o3] = ee3(a6, t3.operator, n7[o3], t3, e5);
    } else if (n7 instanceof N) {
      if (false === G(o3)) throw new a3(e5, r3.KeyAccessorMustBeString, t3);
      if (true === n7.hasField(o3)) n7.setField(o3, ee3(a6, t3.operator, n7.field(o3), t3, e5));
      else {
        if ("=" !== t3.operator) throw new a3(e5, r3.FieldNotFound, t3, {
          key: o3
        });
        n7.setField(o3, ee3(a6, t3.operator, null, t3, e5));
      }
    } else if (H(n7)) {
      if (false === G(o3)) throw new a3(e5, r3.KeyAccessorMustBeString, t3);
      if (true === n7.hasField(o3)) n7.setField(o3, ee3(a6, t3.operator, n7.field(o3), t3, e5));
      else {
        if ("=" !== t3.operator) throw new a3(e5, r3.FieldNotFound, t3, {
          key: o3
        });
        n7.setField(o3, ee3(a6, t3.operator, null, t3, e5));
      }
    } else {
      if (Q(n7)) throw new a3(e5, r3.Immutable, t3);
      if (!(n7 instanceof T2)) throw new a3(e5, r3.InvalidIdentifier, t3);
      if (false === G(o3)) throw new a3(e5, r3.ModuleAccessorMustBeString, t3);
      if (true !== n7.hasGlobal(o3)) throw new a3(e5, r3.ModuleExportNotFound, t3);
      n7.setGlobal(o3, ee3(a6, t3.operator, n7.global(o3), t3, e5));
    }
    return O;
  }
  n7 = t3.left.name.toLowerCase();
  const a5 = _3(e5, t3.right);
  if (null != e5.localScope && void 0 !== e5.localScope[n7]) return e5.localScope[n7] = {
    value: ee3(a5, t3.operator, e5.localScope[n7].value, t3, e5),
    valueset: true,
    node: t3.right
  }, O;
  if (void 0 !== e5.globalScope[n7]) return e5.globalScope[n7] = {
    value: ee3(a5, t3.operator, e5.globalScope[n7].value, t3, e5),
    valueset: true,
    node: t3.right
  }, O;
  throw new a3(e5, r3.InvalidIdentifier, t3);
}
function ne2(e5, t3) {
  if ("AssignmentExpression" === t3.expression.type || "UpdateExpression" === t3.expression.type) return _3(e5, t3.expression);
  if ("CallExpression" === t3.expression.type) {
    const n7 = _3(e5, t3.expression);
    return n7 === O ? O : new x(n7);
  }
  {
    const n7 = _3(e5, t3.expression);
    return n7 === O ? O : new x(n7);
  }
}
function oe2(e5, t3) {
  const n7 = _3(e5, t3.test);
  if (true === n7) return _3(e5, t3.consequent);
  if (false === n7) return null !== t3.alternate ? _3(e5, t3.alternate) : O;
  throw new a3(e5, r3.BooleanConditionRequired, t3);
}
function re2(e5, t3) {
  let n7 = O;
  for (let o3 = 0; o3 < t3.body.length; o3++) if (n7 = _3(e5, t3.body[o3]), n7 instanceof M || n7 === R || n7 === J) return n7;
  return n7;
}
function le2(e5, t3) {
  if (null === t3.argument) return new M(O);
  const n7 = _3(e5, t3.argument);
  return new M(n7);
}
function ie2(e5, t3) {
  const n7 = t3.id.name.toLowerCase();
  return e5.globalScope[n7] = {
    valueset: true,
    node: null,
    value: new P3(t3, e5)
  }, O;
}
function ae3(e5, t3) {
  const n7 = t3.specifiers[0].local.name.toLowerCase(), o3 = e5.libraryResolver.loadLibrary(n7);
  let r7 = null;
  return e5.libraryResolver._moduleSingletons?.has(o3.uri) ? r7 = e5.libraryResolver._moduleSingletons.get(o3.uri) : (r7 = new T2(o3), r7.loadModule(e5), e5.libraryResolver._moduleSingletons?.set(o3.uri, r7)), e5.globalScope[n7] = {
    value: r7,
    valueset: true,
    node: t3
  }, O;
}
function se2(e5, t3) {
  if (_3(e5, t3.declaration), "FunctionDeclaration" === t3.declaration.type) e5.exports[t3.declaration.id.name.toLowerCase()] = "function";
  else if ("VariableDeclaration" === t3.declaration.type) for (const n7 of t3.declaration.declarations) e5.exports[n7.id.name.toLowerCase()] = "variable";
  return O;
}
function ce3(e5, t3) {
  for (let n7 = 0; n7 < t3.declarations.length; n7++) _3(e5, t3.declarations[n7]);
  return O;
}
function ue2(e5, t3) {
  let n7 = null === t3.init ? null : _3(e5, t3.init);
  if (n7 === O && (n7 = null), "Identifier" !== t3.id.type) throw new a3(e5, r3.InvalidIdentifier, t3);
  const o3 = t3.id.name.toLowerCase();
  return null != e5.localScope ? e5.localScope[o3] = {
    value: n7,
    valueset: true,
    node: t3.init
  } : e5.globalScope[o3] = {
    value: n7,
    valueset: true,
    node: t3.init
  }, O;
}
function fe3(e5, t3) {
  try {
    const n7 = _3(e5, t3.object);
    if (null === n7) throw new a3(e5, r3.MemberOfNull, t3);
    if (false === t3.computed) {
      if ("Identifier" === t3.property.type) {
        if (n7 instanceof N || H(n7)) return n7.field(t3.property.name);
        if (n7 instanceof n3) return d(n7, t3.property.name, e5, t3);
        if (n7 instanceof T2) {
          if (!n7.hasGlobal(t3.property.name)) throw new a3(e5, r3.InvalidIdentifier, t3);
          return n7.global(t3.property.name);
        }
      }
      throw new a3(e5, r3.InvalidMemberAccessKey, t3);
    }
    {
      let a5 = _3(e5, t3.property);
      if (n7 instanceof N || H(n7)) {
        if (G(a5)) return n7.field(a5);
        throw new a3(e5, r3.InvalidMemberAccessKey, t3);
      }
      if (n7 instanceof T2) {
        if (G(a5)) return n7.global(a5);
        throw new a3(e5, r3.InvalidMemberAccessKey, t3);
      }
      if (n7 instanceof n3) {
        if (G(a5)) return d(n7, a5, e5, t3);
        throw new a3(e5, r3.InvalidMemberAccessKey, t3);
      }
      if (U2(n7)) {
        if (E(a5) && isFinite(a5) && Math.floor(a5) === a5) {
          if (a5 < 0 && (a5 = n7.length + a5), a5 >= n7.length || a5 < 0) throw new a3(e5, r3.OutOfBounds, t3);
          return n7[a5];
        }
        throw new a3(e5, r3.InvalidMemberAccessKey, t3);
      }
      if (G(n7)) {
        if (E(a5) && isFinite(a5) && Math.floor(a5) === a5) {
          if (a5 < 0 && (a5 = n7.length + a5), a5 >= n7.length || a5 < 0) throw new a3(e5, r3.OutOfBounds, t3);
          return n7[a5];
        }
        throw new a3(e5, r3.InvalidMemberAccessKey, t3);
      }
      if (Q(n7)) {
        if (E(a5) && isFinite(a5) && Math.floor(a5) === a5) {
          if (a5 < 0 && (a5 = n7.length() + a5), a5 >= n7.length() || a5 < 0) throw new a3(e5, r3.OutOfBounds, t3);
          return n7.get(a5);
        }
        throw new a3(e5, r3.InvalidMemberAccessKey, t3);
      }
      throw new a3(e5, r3.InvalidMemberAccessKey, t3);
    }
  } catch (n7) {
    throw n7;
  }
}
function pe2(e5, t3) {
  try {
    const n7 = _3(e5, t3.argument);
    if (z(n7)) {
      if ("!" === t3.operator) return !n7;
      if ("-" === t3.operator) return -1 * ge(n7);
      if ("+" === t3.operator) return 1 * ge(n7);
      if ("~" === t3.operator) return ~ge(n7);
      throw new a3(e5, r3.UnsupportedUnaryOperator, t3);
    }
    if ("~" === t3.operator) return ~ge(n7);
    if ("-" === t3.operator) return -1 * ge(n7);
    if ("+" === t3.operator) return 1 * ge(n7);
    throw new a3(e5, r3.UnsupportedUnaryOperator, t3);
  } catch (n7) {
    throw n7;
  }
}
function de2(e5, t3) {
  try {
    const n7 = [];
    for (let o3 = 0; o3 < t3.elements.length; o3++) {
      const r7 = _3(e5, t3.elements[o3]);
      if (_2(r7)) throw new a3(e5, r3.NoFunctionInArray, t3);
      r7 === O ? n7.push(null) : n7.push(r7);
    }
    return n7;
  } catch (n7) {
    throw n7;
  }
}
function he2(e5, t3) {
  try {
    const n7 = [_3(e5, t3.left), _3(e5, t3.right)], o3 = n7[0], r7 = n7[1];
    switch (t3.operator) {
      case "|":
      case "<<":
      case ">>":
      case ">>>":
      case "^":
      case "&":
        return _e(ge(o3), ge(r7), t3.operator);
      case "==":
        return ce(o3, r7);
      case "!=":
        return !ce(o3, r7);
      case "<":
      case ">":
      case "<=":
      case ">=":
        return fe(o3, r7, t3.operator);
      case "+":
        return G(o3) || G(r7) ? me(o3) + me(r7) : ge(o3) + ge(r7);
      case "-":
        return ge(o3) - ge(r7);
      case "*":
        return ge(o3) * ge(r7);
      case "/":
        return ge(o3) / ge(r7);
      case "%":
        return ge(o3) % ge(r7);
      default:
        throw new a3(e5, r3.UnsupportedOperator, t3);
    }
  } catch (n7) {
    throw n7;
  }
}
function we2(e5, t3) {
  try {
    const n7 = _3(e5, t3.left);
    if (z(n7)) switch (t3.operator) {
      case "||":
        if (true === n7) return n7;
        {
          const n8 = _3(e5, t3.right);
          if (z(n8)) return n8;
          throw new a3(e5, r3.LogicExpressionOrAnd, t3);
        }
      case "&&":
        if (false === n7) return n7;
        {
          const n8 = _3(e5, t3.right);
          if (z(n8)) return n8;
          throw new a3(e5, r3.LogicExpressionOrAnd, t3);
        }
      default:
        throw new a3(e5, r3.LogicExpressionOrAnd, t3);
    }
    throw new a3(e5, r3.LogicalExpressionOnlyBoolean, t3);
  } catch (n7) {
    throw n7;
  }
}
function me3(e5, t3) {
  return t3.value ? t3.value.cooked : "";
}
function ge3(e5, t3, n7) {
  if (_2(e5)) throw new a3(t3, r3.NoFunctionInTemplateLiteral, n7);
  return e5;
}
function ve2(e5, t3) {
  let n7 = "", o3 = 0;
  for (const r7 of t3.quasis) if (n7 += r7.value ? r7.value.cooked : "", false === r7.tail) {
    n7 += t3.expressions[o3] ? me(ge3(_3(e5, t3.expressions[o3]), e5, t3)) : "", o3++;
  }
  return n7;
}
function ye2(e5, t3) {
  let n7;
  try {
    const o3 = t3.name.toLowerCase();
    if (null != e5.localScope && void 0 !== e5.localScope[o3]) return n7 = e5.localScope[o3], true === n7.valueset || (n7.value = _3(e5, n7.node), n7.valueset = true), n7.value;
    if (void 0 !== e5.globalScope[o3]) return n7 = e5.globalScope[o3], true === n7.valueset || (n7.value = _3(e5, n7.node), n7.valueset = true), n7.value;
    throw new a3(e5, r3.InvalidIdentifier, t3);
  } catch (o3) {
    throw o3;
  }
}
function be2(e5, t3) {
  try {
    if ("MemberExpression" === t3.callee.type) {
      const n7 = _3(e5, t3.callee.object);
      if (!(n7 instanceof T2)) throw new a3(e5, r3.FunctionNotFound, t3);
      const o3 = false === t3.callee.computed ? t3.callee.property.name : _3(e5, t3.callee.property);
      if (!n7.hasGlobal(o3)) throw new a3(e5, r3.FunctionNotFound, t3);
      const r7 = n7.global(o3);
      if (!_2(r7)) throw new a3(e5, r3.CallNonFunction, t3);
      return r7.call(e5, t3);
    }
    if ("Identifier" !== t3.callee.type) throw new a3(e5, r3.FunctionNotFound, t3);
    if (null != e5.localScope && void 0 !== e5.localScope[t3.callee.name.toLowerCase()]) {
      const n7 = e5.localScope[t3.callee.name.toLowerCase()];
      if (_2(n7.value)) return n7.value.call(e5, t3);
      throw new a3(e5, r3.CallNonFunction, t3);
    }
    if (void 0 !== e5.globalScope[t3.callee.name.toLowerCase()]) {
      const n7 = e5.globalScope[t3.callee.name.toLowerCase()];
      if (_2(n7.value)) return n7.value.call(e5, t3);
      throw new a3(e5, r3.CallNonFunction, t3);
    }
    throw new a3(e5, r3.FunctionNotFound, t3);
  } catch (n7) {
    throw n7;
  }
}
var xe3 = {};
function Se2(e5, t3, n7, o3) {
  try {
    const r7 = t3.arguments, l5 = _3(e5, r7[n7]);
    if (ce(l5, o3)) return _3(e5, r7[n7 + 1]);
    {
      const l6 = r7.length - n7;
      return 1 === l6 ? _3(e5, r7[n7]) : 2 === l6 ? null : 3 === l6 ? _3(e5, r7[n7 + 2]) : Se2(e5, t3, n7 + 2, o3);
    }
  } catch (r7) {
    throw r7;
  }
}
function Ie2(e5, t3, n7, o3) {
  try {
    const r7 = t3.arguments;
    if (true === o3) return _3(e5, r7[n7 + 1]);
    if (3 === r7.length - n7) return _3(e5, r7[n7 + 2]);
    {
      const o4 = _3(e5, r7[n7 + 2]);
      if (false === z(o4)) throw new a3(e5, r3.BooleanConditionRequired, r7[n7 + 2]);
      return Ie2(e5, t3, n7 + 2, o4);
    }
  } catch (r7) {
    throw r7;
  }
}
function Fe3(e5, t3, n7, o3) {
  try {
    const r7 = e5.body;
    if (n7.length !== e5.params.length) throw new a3(t3, r3.WrongNumberOfParameters, o3);
    if (null != t3.localScope) for (let o4 = 0; o4 < n7.length; o4++) t3.localScope[e5.params[o4].name.toLowerCase()] = {
      value: n7[o4],
      valueset: true,
      node: null
    };
    const a5 = _3(t3, r7);
    if (a5 instanceof M) return a5.value;
    if (a5 === R) throw new a3(t3, r3.UnexpectedToken, o3);
    if (a5 === J) throw new a3(t3, r3.UnexpectedToken, o3);
    return a5 instanceof x ? a5.value : a5;
  } catch (r7) {
    throw r7;
  }
}
C(xe3, V), Y(xe3, V), M2(xe3, V), L(xe3, V), f2(xe3, V), H2(xe3, V), xe3.iif = function(e5, t3) {
  try {
    const n7 = t3.arguments;
    ae(null === n7 ? [] : n7, 3, 3, e5, t3);
    const o3 = _3(e5, n7[0]);
    if (false === z(o3)) throw new a3(e5, r3.BooleanConditionRequired, t3);
    return _3(e5, true === o3 ? n7[1] : n7[2]);
  } catch (n7) {
    throw n7;
  }
}, xe3.defaultvalue = function(e5, t3) {
  try {
    const o3 = t3.arguments;
    ae(null === o3 ? [] : o3, 2, 3, e5, t3);
    const r7 = _3(e5, o3[0]);
    if (3 === o3.length) {
      const t4 = _3(e5, o3[1]), l5 = p2(r7, t4);
      return null != l5 && "" !== l5 ? l5 : _3(e5, o3[2]);
    }
    return null === r7 || "" === r7 || void 0 === r7 ? _3(e5, o3[1]) : r7;
  } catch (o3) {
    throw o3;
  }
}, xe3.decode = function(e5, t3) {
  try {
    const n7 = t3.arguments;
    if (n7.length < 2) throw new a3(e5, r3.WrongNumberOfParameters, t3);
    if (2 === n7.length) return _3(e5, n7[1]);
    {
      if ((n7.length - 1) % 2 == 0) throw new a3(e5, r3.WrongNumberOfParameters, t3);
      const o3 = _3(e5, n7[0]);
      return Se2(e5, t3, 1, o3);
    }
  } catch (n7) {
    throw n7;
  }
}, xe3.when = function(e5, t3) {
  try {
    const n7 = t3.arguments;
    if (n7.length < 3) throw new a3(e5, r3.WrongNumberOfParameters, t3);
    if (n7.length % 2 == 0) throw new a3(e5, r3.WrongNumberOfParameters, t3);
    const o3 = _3(e5, n7[0]);
    if (false === z(o3)) throw new a3(e5, r3.BooleanConditionRequired, n7[0]);
    return Ie2(e5, t3, 0, o3);
  } catch (n7) {
    throw n7;
  }
};
for (const Ne2 in xe3) xe3[Ne2] = {
  value: new e(xe3[Ne2]),
  valueset: true,
  node: null
};
var Ce2 = function() {
};
function Re2(e5, t3, n7) {
  const o3 = new Ce2();
  e5 || (e5 = {}), t3 || (t3 = {});
  const l5 = new N({
    newline: "\n",
    tab: "	",
    singlequote: "'",
    doublequote: '"',
    forwardslash: "/",
    backwardslash: "\\"
  });
  l5.immutable = false, o3.textformatting = {
    value: l5,
    valueset: true,
    node: null
  };
  for (const r7 in t3) o3[r7] = {
    value: new e(t3[r7]),
    native: true,
    valueset: true,
    node: null
  };
  for (const r7 in e5) e5[r7] && "esri.Graphic" === e5[r7].declaredClass ? o3[r7] = {
    value: D.createFromGraphic(e5[r7], n7),
    valueset: true,
    node: null
  } : o3[r7] = {
    value: e5[r7],
    valueset: true,
    node: null
  };
  return o3;
}
Ce2.prototype = xe3, Ce2.prototype.infinity = {
  value: Number.POSITIVE_INFINITY,
  valueset: true,
  node: null
}, Ce2.prototype.pi = {
  value: Math.PI,
  valueset: true,
  node: null
};
function Me3(e5) {
  console.log(e5);
}
function Ee2(e5) {
  const t3 = {
    mode: "sync",
    compiled: false,
    functions: {},
    signatures: [],
    standardFunction: V,
    evaluateIdentifier: ye2
  };
  for (let n7 = 0; n7 < e5.length; n7++) e5[n7].registerFunctions(t3);
  for (const n7 in t3.functions) xe3[n7] = {
    value: new e(t3.functions[n7]),
    valueset: true,
    node: null
  }, Ce2.prototype[n7] = xe3[n7];
  for (let n7 = 0; n7 < t3.signatures.length; n7++) o(t3.signatures[n7], "sync");
}
function Le2(e5, n7) {
  let o3 = n7.spatialReference;
  null == o3 && (o3 = new f({
    wkid: 102100
  }));
  let r7 = null;
  e5.usesModules && (r7 = new s2(/* @__PURE__ */ new Map(), e5.loadedModules));
  const a5 = {
    spatialReference: o3,
    globalScope: Re2(n7.vars, n7.customfunctions, n7.timeZone),
    localScope: null,
    services: n7.services ?? null,
    exports: {},
    libraryResolver: r7,
    console: n7.console ?? Me3,
    timeZone: n7.timeZone ?? null,
    lrucache: n7.lrucache,
    interceptor: n7.interceptor,
    depthCounter: {
      depth: 1
    }
  };
  let s6 = _3(a5, e5);
  if (s6 instanceof M && (s6 = s6.value), s6 instanceof x && (s6 = s6.value), s6 === O && (s6 = null), s6 === R) throw new a3(a5, r3.IllegalResult, null);
  if (s6 === J) throw new a3(a5, r3.IllegalResult, null);
  if (_2(s6)) throw new a3(a5, r3.IllegalResult, null);
  return s6;
}
Ee2([p4]);

// ../../../node_modules/@arcgis/core/chunks/arcade.js
var g2 = /* @__PURE__ */ new Set(["feature", "angle", "bearing", "centroid", "envelopeintersects", "extent", "geometry", "isselfintersecting", "ringisclockwise"]);
var w3 = false;
var h2 = false;
var A = null;
var j2 = [];
function x5(t3, r7) {
  if (true === r7.useAsync || true === t3.isAsync) return M4(t3, r7);
  if (has("esri-csp-restrictions")) {
    return function(e5) {
      return Le2(t3, e5);
    };
  }
  try {
    return Pe(t3, r7);
  } catch (n7) {
    if ("esri.arcade.arcadeuncompilableerror" === n7.declaredRootClass) return function(e5) {
      return Le2(t3, e5);
    };
    throw n7;
  }
}
function M4(t3, r7) {
  if (null === A) throw new a3(null, r3.AsyncNotEnabled, null);
  if (has("esri-csp-restrictions")) {
    return function(e5) {
      return A.executeScript(t3, e5);
    };
  }
  try {
    return Pe(t3, r7, true);
  } catch (n7) {
    if ("esri.arcade.arcadeuncompilableerror" === n7.declaredRootClass) return function(e5) {
      return A.executeScript(t3, e5);
    };
    throw n7;
  }
}
function F2(e5) {
  Ee2(e5), je(e5, "sync"), null === A ? j2.push(e5) : (je(e5, "async"), A.extend(e5));
}
function E3(e5, t3 = []) {
  return d4(e5, t3);
}
function v2(e5, t3, r7 = []) {
  return G2(d4(e5, r7), t3);
}
function G2(e5, t3) {
  if (true === t3.useAsync || true === e5.isAsync) {
    if (null === A) throw new a3(null, r3.AsyncNotEnabled, null);
    return A.executeScript(e5, t3);
  }
  return Le2(e5, t3);
}
function U5(e5, t3) {
  return c3(e5, t3);
}
function _4(e5, t3) {
  return p3(e5, t3);
}
function I2(e5, t3 = false) {
  return void 0 === t3 && (t3 = false), l2(e5);
}
function R3(e5) {
  return u3(e5);
}
function k2(e5, t3 = []) {
  return void 0 === e5.usesGeometry && d2(e5, t3), true === e5.usesGeometry;
}
var C5 = null;
function D3() {
  return C5 || (C5 = z5(), C5);
}
function z5() {
  return __async(this, null, function* () {
    const e5 = yield import("./geometryEngine-EGTOXQKL.js");
    return h2 = true, U3(e5), true;
  });
}
var P4 = null;
function L3() {
  return null !== P4 || (P4 = N3()), P4;
}
function N3() {
  return __async(this, null, function* () {
    yield Ze2(), A = yield import("./arcadeAsyncRuntime-PUZ3V3E6.js");
    for (const e5 of j2) A.extend(e5), je(e5, "async");
    return j2 = null, true;
  });
}
function O3() {
  return w3;
}
function T3() {
  return !!A;
}
function q2() {
  return h2;
}
var B3 = null;
function H6() {
  return B3 || (B3 = J5(), B3);
}
function J5() {
  return __async(this, null, function* () {
    yield L3();
    const [e5, r7, n7, s6, a5, u5] = yield Promise.all([import("./featureSetUtils-XDKSMBMC.js"), import("./featuresetbase-AM5XYTMT.js"), import("./featuresetgeom-TPDXLXET.js"), import("./featuresetstats-PJ46HYKC.js"), import("./featuresetstring-Q5UBCBJ7.js"), import("./knowledgegraph-XAR5AKE6.js")]);
    return ee4 = e5, A.extend([r7, n7, s6, a5, u5]), je([r7, n7, s6, a5, u5], "async"), w3 = true, true;
  });
}
function K2(e5, t3 = []) {
  return void 0 === e5.usesFeatureSet && d2(e5, t3), true === e5.usesFeatureSet;
}
function Q4(e5, t3 = []) {
  return void 0 === e5.isAsync && d2(e5, t3), true === e5.isAsync;
}
function V2(e5, t3) {
  if (t3) {
    for (const r7 of t3) if (U5(e5, r7)) return true;
    return false;
  }
  return false;
}
function W6(_0, _1) {
  return __async(this, arguments, function* (e5, t3, r7 = [], n7 = false, s6 = null) {
    return X4(/* @__PURE__ */ new Set(), e5, t3, r7, n7, s6);
  });
}
function X4(_0, _1, _22) {
  return __async(this, arguments, function* (e5, t3, r7, n7 = [], s6 = false, a5 = null) {
    const u5 = "string" == typeof t3 ? E3(t3) : t3, o3 = [];
    return u5 && (false === q2() && (k2(u5) || s6) && o3.push(D3()), false === T3() && (true === u5.isAsync || r7) && o3.push(L3()), false === O3() && (K2(u5) || V2(u5, n7)) && o3.push(H6())), o3.length && (yield Promise.all(o3)), yield Z2(e5, u5, a5, r7, s6), true;
  });
}
function Y4(e5, t3 = []) {
  return void 0 === e5.usesModules && d2(e5, t3), true === e5.usesModules;
}
function Z2(e5, t3, r7 = null, s6 = false, a5 = false) {
  return __async(this, null, function* () {
    const c6 = x2(t3);
    null === r7 && c6.length > 0 && (r7 = l4.getDefault()), t3.loadedModules = {};
    for (const n7 of c6) {
      n(r7);
      const c7 = r7.normalizeModuleUri(n7.source);
      if (e5.has(c7.uri)) throw new a3(null, r3.CircularModules, null);
      e5.add(c7.uri);
      const i3 = yield r7.fetchModule(c7);
      yield X4(e5, i3, s6, [], a5, r7), e5.delete(c7.uri), i3.isAsync && (t3.isAsync = true), i3.usesFeatureSet && (t3.usesFeatureSet = true), i3.usesGeometry && (t3.usesGeometry = true), t3.loadedModules[n7.libname] = {
        uri: c7.uri,
        script: i3
      };
    }
  });
}
function $2(e5) {
  if (k2(e5)) return true;
  const t3 = y2(e5);
  let r7 = false;
  for (let n7 = 0; n7 < t3.length; n7++) if (g2.has(t3[n7])) {
    r7 = true;
    break;
  }
  return r7;
}
var ee4 = null;
function te4() {
  return ee4;
}
var re3 = Object.freeze(Object.defineProperty({
  __proto__: null,
  _loadScriptDependenciesImpl: X4,
  compileScript: x5,
  enableAsyncSupport: L3,
  enableAsyncSupportImpl: N3,
  enableFeatureSetSupport: H6,
  enableFeatureSetSupportImpl: J5,
  enableGeometrySupport: D3,
  enableGeometrySupportImpl: z5,
  executeScript: G2,
  extend: F2,
  extractExpectedFieldLiterals: R3,
  extractFieldLiterals: I2,
  featureSetUtils: te4,
  isAsyncEnabled: T3,
  isFeatureSetSupportEnabled: O3,
  isGeometryEnabled: q2,
  loadDependentModules: Z2,
  loadScriptDependencies: W6,
  parseAndExecuteScript: v2,
  parseScript: E3,
  referencesFunction: _4,
  referencesMember: U5,
  scriptIsAsync: Q4,
  scriptTouchesGeometry: $2,
  scriptUsesFeatureSet: K2,
  scriptUsesGeometryEngine: k2,
  scriptUsesModules: Y4
}, Symbol.toStringTag, {
  value: "Module"
}));

// ../../../node_modules/@arcgis/core/support/arcadeUtils.js
var M5 = /^\$(feature|aggregatedFeatures)\./i;
var P5 = {
  vars: {
    $feature: "any",
    $view: "any"
  },
  spatialReference: null
};
function A2(e5) {
  return e5.replaceAll(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
function q3(e5) {
  return null == e5 ? null : U2(e5) || Q(e5) ? "array" : X(e5) ? "date" : G(e5) ? "text" : z(e5) ? "boolean" : E(e5) ? "number" : e5 instanceof N ? "dictionary" : H(e5) ? "feature" : e5 instanceof _ ? "point" : e5 instanceof j ? "polygon" : e5 instanceof m ? "polyline" : e5 instanceof u ? "multipoint" : e5 instanceof w ? "extent" : e5 instanceof n2 ? "dateOnly" : e5 instanceof n4 ? "time" : B(e5) ? "featureSet" : W2(e5) ? "featureSetCollection" : null;
}
function I3(n7) {
  if (!n7) return null;
  try {
    return E3(n7);
  } catch (r7) {
  }
  return null;
}
function O4(e5, r7) {
  const t3 = "string" == typeof e5 ? I3(e5) : e5;
  if (!t3) return null;
  try {
    return r7 = r7 || a(P5), x5(t3, r7);
  } catch (o3) {
  }
  return null;
}
function G3(e5, n7, r7) {
  return {
    vars: {
      $feature: null == e5 ? new D() : D.createFromGraphic(e5, r7),
      $view: n7?.view
    },
    spatialReference: n7?.sr,
    timeZone: r7 ?? null
  };
}
function T4(e5, n7, r7) {
  return D.createFromGraphicLikeObject(n7, e5, r7, null);
}
function V3(e5, n7) {
  null != e5.vars && (e5.vars.$feature = n7);
}
function D4(e5, n7) {
  let t3;
  try {
    t3 = G2(e5, n7);
  } catch (o3) {
    t3 = null;
  }
  return t3;
}
function L4(e5, n7) {
  let r7;
  try {
    r7 = e5 ? e5(n7) : null;
  } catch (t3) {
    r7 = null;
  }
  return r7;
}
function J6(e5, n7) {
  try {
    return e5 ? e5(n7) : Promise.resolve(null);
  } catch (r7) {
    return Promise.resolve(null);
  }
}
function U6(e5, n7) {
  if (!e5) return [];
  const r7 = "string" == typeof e5 ? I3(e5) : e5;
  if (!r7) return [];
  const o3 = R3(r7);
  let i3 = new Array();
  o3.forEach((e6) => {
    M5.test(e6) && (e6 = e6.replace(M5, ""), i3.push(e6));
  });
  const s6 = i3.filter((e6) => e6.includes("*"));
  return i3 = i3.filter((e6) => !s6.includes(e6)), n7 && s6.forEach((e6) => {
    const r8 = new RegExp(`^${e6.split(/\*+/).map(A2).join(".*")}$`, "i");
    n7.forEach((e7) => r8.test(e7) ? i3.push(e7) : null);
  }), [...new Set(i3.sort())];
}
function Z3(e5) {
  return U5(e5, "$view");
}
function B4(e5, n7) {
  return !!e5 && U5(e5, n7);
}
function H7(e5) {
  if (!e5 || null == e5.spatialReference && (null == e5.scale || null == e5.viewingMode)) return;
  return {
    view: e5.viewingMode && null != e5.scale ? new N({
      viewingMode: e5.viewingMode,
      scale: e5.scale
    }) : null,
    sr: e5.spatialReference
  };
}
function K3({
  url: e5,
  spatialReference: n7,
  lrucache: r7,
  interceptor: t3
}) {
  const o3 = te4();
  return o3 ? o3.createFeatureSetCollectionFromService(e5, n7, r7, t3) : null;
}
function N4({
  layer: e5,
  spatialReference: n7,
  outFields: r7,
  returnGeometry: t3,
  lrucache: o3,
  interceptor: i3
}) {
  if (null === e5) return null;
  const s6 = te4();
  return s6 ? s6.constructFeatureSet(e5, n7, r7, t3 ?? true, o3, i3) : null;
}
function Q5(e5) {
  if (null === e5?.map) return null;
  const n7 = te4();
  return n7 ? n7.createFeatureSetCollectionFromMap(e5.map, e5.spatialReference, e5.lrucache, e5.interceptor) : null;
}
function W7(e5, n7) {
  return N.convertJsonToArcade(e5, n7);
}
function X5(e5, n7, r7 = []) {
  return W6(e5, n7, r7);
}
function Y5() {
  return D3();
}
function _5() {
  return H6();
}
function ee5(e5) {
  return "simple" === e5.type || "class-breaks" === e5.type || "unique-value" === e5.type || "dot-density" === e5.type || "dictionary" === e5.type || "pie-chart" === e5.type;
}
function ne3(e5) {
  return "esri.layers.support.LabelClass" === e5.declaredClass;
}
function re4(e5) {
  return "esri.PopupTemplate" === e5.declaredClass;
}
function te5(e5, n7) {
  if (!e5) return false;
  if ("string" == typeof e5) return n7(e5);
  const r7 = e5;
  if (ee5(r7)) {
    if ("dot-density" === r7.type) {
      const e7 = r7.attributes?.some((e8) => n7(e8.valueExpression));
      if (e7) return e7;
    }
    const e6 = r7.visualVariables, t3 = !!e6 && e6.some((e7) => {
      let r8 = n7(e7.valueExpression);
      return "size" === e7.type && (ue3(e7.minSize) && (r8 = r8 || n7(e7.minSize.valueExpression)), ue3(e7.maxSize) && (r8 = r8 || n7(e7.maxSize.valueExpression))), r8;
    });
    return !(!("valueExpression" in r7) || !n7(r7.valueExpression)) || t3;
  }
  if (ne3(r7)) {
    const e6 = r7.labelExpressionInfo?.expression;
    return !(!e6 || !n7(e6)) || false;
  }
  return !!re4(r7) && (!!r7.expressionInfos && r7.expressionInfos.some((e6) => n7(e6.expression)) || Array.isArray(r7.content) && r7.content.some((e6) => "expression" === e6.type && n7(e6.expressionInfo?.expression)));
}
function oe3(e5) {
  const n7 = I3(e5);
  return !!n7 && $2(n7);
}
function ie3(e5) {
  return te5(e5, oe3);
}
function se3(e5) {
  const n7 = I3(e5);
  return !!n7 && k2(n7);
}
function ae4(e5) {
  return te5(e5, se3);
}
function ue3(e5) {
  return e5 && "esri.renderers.visualVariables.SizeVariable" === e5.declaredClass;
}
export {
  N as Dictionary,
  re3 as arcade,
  D as arcadeFeature,
  N4 as convertFeatureLayerToFeatureSet,
  W7 as convertJsonToArcade,
  Q5 as convertMapToFeatureSetCollection,
  K3 as convertServiceUrlToWorkspace,
  G3 as createExecContext,
  T4 as createFeature,
  O4 as createFunction,
  I3 as createSyntaxTree,
  Z3 as dependsOnView,
  _5 as enableFeatureSetOperations,
  Y5 as enableGeometryOperations,
  D4 as evalSyntaxTree,
  J6 as executeAsyncFunction,
  L4 as executeFunction,
  U6 as extractFieldNames,
  q3 as getArcadeType,
  H7 as getViewInfo,
  ie3 as hasGeometryFunctions,
  ae4 as hasGeometryOperations,
  B4 as hasVariable,
  X5 as loadScriptDependencies,
  V3 as updateExecContext
};
//# sourceMappingURL=arcadeUtils-SDWTH5IH.js.map
