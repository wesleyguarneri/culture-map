import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  N
} from "./chunk-REOQMQ44.js";
import {
  B2 as B,
  Be,
  Ce,
  E,
  Ee,
  H,
  He,
  P,
  Te,
  Ue,
  Ve,
  a,
  ae,
  ke,
  me,
  pe,
  qe,
  r
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
import "./chunk-ABIG6PT5.js";
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

// ../../../node_modules/@arcgis/core/arcade/functions/featuresetstring.js
function T(a2, e) {
  return a2 && a2.domain ? "coded-value" === a2.domain.type || "codedValue" === a2.domain.type ? N.convertObjectToArcadeDictionary({
    type: "codedValue",
    name: a2.domain.name,
    dataType: E[a2.field.type],
    codedValues: a2.domain.codedValues.map((n) => ({
      name: n.name,
      code: n.code
    }))
  }, He(e)) : N.convertObjectToArcadeDictionary({
    type: "range",
    name: a2.domain.name,
    dataType: E[a2.field.type],
    min: a2.domain.minValue,
    max: a2.domain.maxValue
  }, He(e)) : null;
}
function b(h) {
  "async" === h.mode && (h.functions.domain = function(n, d) {
    return h.standardFunctionAsync(n, d, (u, m, f) => __async(this, null, function* () {
      if (ae(f, 2, 3, n, d), H(f[0])) {
        return T(Ee(f[0], me(f[1]), void 0 === f[2] ? void 0 : f[2]), n);
      }
      if (B(f[0])) {
        yield f[0]._ensureLoaded();
        return T(Ce(me(f[1]), f[0], null, void 0 === f[2] ? void 0 : f[2]), n);
      }
      throw new a(n, r.InvalidParameter, d);
    }));
  }, h.functions.subtypes = function(o, i) {
    return h.standardFunctionAsync(o, i, (s, m, f) => __async(this, null, function* () {
      if (ae(f, 1, 1, o, i), H(f[0])) {
        const a2 = Ve(f[0]);
        return a2 ? N.convertObjectToArcadeDictionary(a2, He(o)) : null;
      }
      if (B(f[0])) {
        yield f[0]._ensureLoaded();
        const a2 = f[0].subtypeMetaData();
        return a2 ? N.convertObjectToArcadeDictionary(a2, He(o)) : null;
      }
      throw new a(o, r.InvalidParameter, i);
    }));
  }, h.functions.domainname = function(n, o) {
    return h.standardFunctionAsync(n, o, (d, u, l) => __async(this, null, function* () {
      if (ae(l, 2, 4, n, o), H(l[0])) return qe(l[0], me(l[1]), l[2], void 0 === l[3] ? void 0 : l[3]);
      if (B(l[0])) {
        yield l[0]._ensureLoaded();
        const n2 = Ce(me(l[1]), l[0], null, void 0 === l[3] ? void 0 : l[3]);
        return Te(n2, l[2]);
      }
      throw new a(n, r.InvalidParameter, o);
    }));
  }, h.signatures.push({
    name: "domainname",
    min: 2,
    max: 4
  }), h.functions.domaincode = function(n, o) {
    return h.standardFunctionAsync(n, o, (d, u, m) => __async(this, null, function* () {
      if (ae(m, 2, 4, n, o), H(m[0])) return Ue(m[0], me(m[1]), m[2], void 0 === m[3] ? void 0 : m[3]);
      if (B(m[0])) {
        yield m[0]._ensureLoaded();
        const n2 = Ce(me(m[1]), m[0], null, void 0 === m[3] ? void 0 : m[3]);
        return ke(n2, m[2]);
      }
      throw new a(n, r.InvalidParameter, o);
    }));
  }, h.signatures.push({
    name: "domaincode",
    min: 2,
    max: 4
  }), h.functions.text = function(n, r2) {
    return h.standardFunctionAsync(n, r2, (o, i, s) => __async(this, null, function* () {
      if (ae(s, 1, 2, n, r2), B(s[0])) {
        const t = P(s[1], "");
        if ("" === t) return s[0].castToText();
        if ("schema" === t.toLowerCase()) return s[0].convertToText("schema", o.abortSignal);
        if ("featureset" === t.toLowerCase()) return s[0].convertToText("featureset", o.abortSignal);
        throw new a(n, r.InvalidParameter, r2);
      }
      return pe(s[0], s[1]);
    }));
  }, h.functions.gdbversion = function(n, o) {
    return h.standardFunctionAsync(n, o, (i, s, d) => __async(this, null, function* () {
      if (ae(d, 1, 1, n, o), H(d[0])) return d[0].gdbVersion();
      if (B(d[0])) {
        return (yield d[0].load()).gdbVersion;
      }
      throw new a(n, r.InvalidParameter, o);
    }));
  }, h.functions.schema = function(o, i) {
    return h.standardFunctionAsync(o, i, (s, d, m) => __async(this, null, function* () {
      if (ae(m, 1, 1, o, i), B(m[0])) return yield m[0].load(), N.convertObjectToArcadeDictionary(m[0].schema(), He(o));
      if (H(m[0])) {
        const a2 = Be(m[0]);
        return a2 ? N.convertObjectToArcadeDictionary(a2, He(o)) : null;
      }
      throw new a(o, r.InvalidParameter, i);
    }));
  });
}
export {
  b as registerFunctions
};
//# sourceMappingURL=featuresetstring-Y5Y7L24A.js.map
