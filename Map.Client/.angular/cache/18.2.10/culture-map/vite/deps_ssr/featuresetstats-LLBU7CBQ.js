import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  l
} from "./chunk-RCTGQZER.js";
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
} from "./chunk-M633ZBOT.js";
import "./chunk-GBPPBJPA.js";
import "./chunk-PDBJ6G5O.js";
import "./chunk-VZ37C3ID.js";
import "./chunk-Q5TIVVER.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import {
  O,
  r2 as r
} from "./chunk-CBOFHWPI.js";
import {
  m
} from "./chunk-ABIG6PT5.js";
import "./chunk-ZEZ3LI2L.js";
import "./chunk-N34BRXVM.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
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
//# sourceMappingURL=featuresetstats-LLBU7CBQ.js.map
