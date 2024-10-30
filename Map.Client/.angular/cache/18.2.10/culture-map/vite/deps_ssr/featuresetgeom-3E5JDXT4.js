import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  f2 as f,
  u
} from "./chunk-BKDLCDYW.js";
import "./chunk-233INU7Q.js";
import "./chunk-REOQMQ44.js";
import {
  B2 as B,
  Fe,
  a,
  ae,
  me,
  r
} from "./chunk-M633ZBOT.js";
import "./chunk-GBPPBJPA.js";
import {
  O,
  R,
  S,
  h,
  m,
  p,
  x
} from "./chunk-IS3LAXOO.js";
import "./chunk-PDBJ6G5O.js";
import "./chunk-X5QZGB37.js";
import "./chunk-3XHDZQO5.js";
import "./chunk-2BLQXT54.js";
import "./chunk-JSWVKNBA.js";
import "./chunk-OOK3QTWF.js";
import "./chunk-7QOUHKW5.js";
import "./chunk-NHYYZMJR.js";
import "./chunk-VZ37C3ID.js";
import "./chunk-5R3HARKC.js";
import "./chunk-Q5TIVVER.js";
import "./chunk-VOOO6FU5.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-I2TVVMQ6.js";
import "./chunk-5EGQYY2H.js";
import "./chunk-JKPUNUQA.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-CBOFHWPI.js";
import {
  s
} from "./chunk-ABIG6PT5.js";
import "./chunk-ZEZ3LI2L.js";
import "./chunk-N34BRXVM.js";
import "./chunk-RNF7VOCU.js";
import {
  n
} from "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import "./chunk-G73HQZEL.js";
import "./chunk-PH6NPTP7.js";
import "./chunk-NUICEVIH.js";
import "./chunk-NXK752PZ.js";
import "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=featuresetgeom-3E5JDXT4.js.map
