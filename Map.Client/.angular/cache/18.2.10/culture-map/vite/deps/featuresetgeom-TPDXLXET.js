import {
  f2 as f,
  u
} from "./chunk-JP4I7LNZ.js";
import "./chunk-ADMKSP6W.js";
import "./chunk-FAW72HJW.js";
import {
  B2 as B,
  Fe,
  a,
  ae,
  me,
  r
} from "./chunk-WD7XZJEZ.js";
import "./chunk-ADI7256P.js";
import {
  O,
  R,
  S,
  h,
  m,
  p,
  x
} from "./chunk-77LCO3ZZ.js";
import "./chunk-UOW7A3SI.js";
import "./chunk-C7NRYPDG.js";
import "./chunk-4QBFFLOC.js";
import "./chunk-O437BSYE.js";
import "./chunk-YZNT6QWD.js";
import "./chunk-5YIMTGEC.js";
import "./chunk-6XGV55XZ.js";
import "./chunk-HOH445RO.js";
import "./chunk-PFMGJTQM.js";
import "./chunk-Q7SRMLJZ.js";
import "./chunk-DWASPXVI.js";
import "./chunk-J55F4AC2.js";
import "./chunk-DTUSTSEJ.js";
import "./chunk-JCWFGRHQ.js";
import "./chunk-JILEJ6R2.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-4ZZRP4MA.js";
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-XWXBNAOW.js";
import {
  s
} from "./chunk-GWC3DAGP.js";
import "./chunk-EODIWR2E.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-MNLT652N.js";
import "./chunk-7RMVJCDW.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import "./chunk-NYQ5CYNR.js";
import {
  n
} from "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-3ZXOUEQG.js";
import "./chunk-AXVPJBVW.js";
import "./chunk-OXEPWRM7.js";
import "./chunk-POILQGXA.js";
import "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import "./chunk-BXQGM56A.js";
import "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/arcade/functions/featuresetgeom.js
function h2(e) {
  return e instanceof n;
}
function S2(i, a2, c, S3) {
  return S3(i, a2, (S4, R3, v) => __async(this, null, function* () {
    if (v.length < 2) throw new a(i, r.WrongNumberOfParameters, a2);
    if (null === (v = Fe(v))[0] && null === v[1]) return false;
    if (B(v[0])) {
      if (v[1] instanceof n) return new f({
        parentfeatureset: v[0],
        relation: c,
        relationGeom: v[1]
      });
      if (null === v[1]) return new u({
        parentfeatureset: v[0]
      });
      throw new a(i, r.InvalidParameter, a2);
    }
    if (h2(v[0])) {
      if (h2(v[1])) {
        switch (c) {
          case "esriSpatialRelEnvelopeIntersects":
            return h(s(v[0]), s(v[1]));
          case "esriSpatialRelIntersects":
            return h(v[0], v[1]);
          case "esriSpatialRelContains":
            return p(v[0], v[1]);
          case "esriSpatialRelOverlaps":
            return O(v[0], v[1]);
          case "esriSpatialRelWithin":
            return x(v[0], v[1]);
          case "esriSpatialRelTouches":
            return S(v[0], v[1]);
          case "esriSpatialRelCrosses":
            return m(v[0], v[1]);
        }
        throw new a(i, r.InvalidParameter, a2);
      }
      if (B(v[1])) return new f({
        parentfeatureset: v[1],
        relation: c,
        relationGeom: v[0]
      });
      if (null === v[1]) return false;
      throw new a(i, r.InvalidParameter, a2);
    }
    if (null === v[0]) {
      if (B(v[1])) return new u({
        parentfeatureset: v[1]
      });
      if (v[1] instanceof n || null === v[1]) return false;
    }
    throw new a(i, r.InvalidParameter, a2);
  }));
}
function R2(t) {
  "async" === t.mode && (t.functions.intersects = function(e, n2) {
    return S2(e, n2, "esriSpatialRelIntersects", t.standardFunctionAsync);
  }, t.functions.envelopeintersects = function(e, n2) {
    return S2(e, n2, "esriSpatialRelEnvelopeIntersects", t.standardFunctionAsync);
  }, t.signatures.push({
    name: "envelopeintersects",
    min: 2,
    max: 2
  }), t.functions.contains = function(e, n2) {
    return S2(e, n2, "esriSpatialRelContains", t.standardFunctionAsync);
  }, t.functions.overlaps = function(e, n2) {
    return S2(e, n2, "esriSpatialRelOverlaps", t.standardFunctionAsync);
  }, t.functions.within = function(e, n2) {
    return S2(e, n2, "esriSpatialRelWithin", t.standardFunctionAsync);
  }, t.functions.touches = function(e, n2) {
    return S2(e, n2, "esriSpatialRelTouches", t.standardFunctionAsync);
  }, t.functions.crosses = function(e, n2) {
    return S2(e, n2, "esriSpatialRelCrosses", t.standardFunctionAsync);
  }, t.functions.relate = function(u2, f2) {
    return t.standardFunctionAsync(u2, f2, (t2, p2, m2) => __async(this, null, function* () {
      if (m2 = Fe(m2), ae(m2, 3, 3, u2, f2), h2(m2[0]) && h2(m2[1])) return R(m2[0], m2[1], me(m2[2]));
      if (m2[0] instanceof n && null === m2[1]) return false;
      if (m2[1] instanceof n && null === m2[0]) return false;
      if (B(m2[0]) && null === m2[1]) return new u({
        parentfeatureset: m2[0]
      });
      if (B(m2[1]) && null === m2[0]) return new u({
        parentfeatureset: m2[1]
      });
      if (B(m2[0]) && m2[1] instanceof n) return m2[0].relate(m2[1], me(m2[2]));
      if (B(m2[1]) && m2[0] instanceof n) return m2[1].relate(m2[0], me(m2[2]));
      if (null === m2[0] && null === m2[1]) return false;
      throw new a(u2, r.InvalidParameter, f2);
    }));
  });
}
export {
  R2 as registerFunctions
};
//# sourceMappingURL=featuresetgeom-TPDXLXET.js.map
