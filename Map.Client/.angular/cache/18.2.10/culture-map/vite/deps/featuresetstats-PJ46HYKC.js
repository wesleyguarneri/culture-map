import {
  l
} from "./chunk-HMQ3JMIV.js";
import {
  B2 as B,
  G2 as G,
  He,
  P,
  Q,
  U,
  a,
  ae,
  r as r2
} from "./chunk-WD7XZJEZ.js";
import "./chunk-ADI7256P.js";
import "./chunk-UOW7A3SI.js";
import "./chunk-PFMGJTQM.js";
import "./chunk-DWASPXVI.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-4ZZRP4MA.js";
import {
  O,
  r2 as r
} from "./chunk-XWXBNAOW.js";
import {
  m
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
import "./chunk-O7UDKFOW.js";
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

// ../../../node_modules/@arcgis/core/arcade/functions/featuresetstats.js
function m2(n, t, e, a2) {
  return __async(this, null, function* () {
    if (1 === e.length) {
      if (U(e[0])) return l(n, e[0], P(e[1], -1));
      if (Q(e[0])) return l(n, e[0].toArray(), P(e[1], -1));
    } else if (2 === e.length) {
      if (U(e[0])) return l(n, e[0], P(e[1], -1));
      if (Q(e[0])) return l(n, e[0].toArray(), P(e[1], -1));
      if (B(e[0])) {
        const r3 = yield e[0].load(), i = yield y(O.create(e[1], r3.getFieldsIndex(), r3.dateFieldsTimeZoneDefaultUTC), a2, t);
        return g(t, yield e[0].calculateStatistic(n, i, P(e[2], 1e3), t.abortSignal));
      }
    } else if (3 === e.length && B(e[0])) {
      const r3 = yield e[0].load(), i = yield y(O.create(e[1], r3.getFieldsIndex(), r3.dateFieldsTimeZoneDefaultUTC), a2, t);
      return g(t, yield e[0].calculateStatistic(n, i, P(e[2], 1e3), t.abortSignal));
    }
    return l(n, e, -1);
  });
}
function g(t, e) {
  return e instanceof r ? m.fromReaderAsTimeStampOffset(e.toStorageFormat()) : e instanceof Date ? m.dateJSAndZoneToArcadeDate(e, He(t)) : e;
}
function y(n, t, e) {
  return __async(this, null, function* () {
    const a2 = n.getVariables();
    if (a2.length > 0) {
      const r3 = [];
      for (let n2 = 0; n2 < a2.length; n2++) {
        const i2 = {
          name: a2[n2]
        };
        r3.push(yield t.evaluateIdentifier(e, i2));
      }
      const i = {};
      for (let n2 = 0; n2 < a2.length; n2++) i[a2[n2]] = r3[n2];
      return n.parameters = i, n;
    }
    return n;
  });
}
function A(n) {
  "async" === n.mode && (n.functions.stdev = function(t, e) {
    return n.standardFunctionAsync(t, e, (e2, a2, r3) => m2("stdev", t, r3, n));
  }, n.functions.variance = function(t, e) {
    return n.standardFunctionAsync(t, e, (e2, a2, r3) => m2("variance", t, r3, n));
  }, n.functions.average = function(t, e) {
    return n.standardFunctionAsync(t, e, (e2, a2, r3) => m2("mean", t, r3, n));
  }, n.functions.mean = function(t, e) {
    return n.standardFunctionAsync(t, e, (e2, a2, r3) => m2("mean", t, r3, n));
  }, n.functions.sum = function(t, e) {
    return n.standardFunctionAsync(t, e, (e2, a2, r3) => m2("sum", t, r3, n));
  }, n.functions.min = function(t, e) {
    return n.standardFunctionAsync(t, e, (e2, a2, r3) => m2("min", t, r3, n));
  }, n.functions.max = function(t, e) {
    return n.standardFunctionAsync(t, e, (e2, a2, r3) => m2("max", t, r3, n));
  }, n.functions.count = function(c, u) {
    return n.standardFunctionAsync(c, u, (n2, f, d) => __async(this, null, function* () {
      if (ae(d, 1, 1, c, u), B(d[0])) return d[0].count(n2.abortSignal);
      if (U(d[0]) || G(d[0])) return d[0].length;
      if (Q(d[0])) return d[0].length();
      throw new a(c, r2.InvalidParameter, u);
    }));
  });
}
export {
  A as registerFunctions
};
//# sourceMappingURL=featuresetstats-PJ46HYKC.js.map
