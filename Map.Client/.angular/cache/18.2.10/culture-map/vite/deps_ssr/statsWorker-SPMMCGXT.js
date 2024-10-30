import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  b,
  j,
  x
} from "./chunk-NU4K6CTR.js";
import "./chunk-42ZAWY2C.js";
import "./chunk-TVHVZK5G.js";
import "./chunk-P2MUOE6G.js";
import {
  $,
  C,
  E,
  P,
  U,
  d,
  f,
  k,
  p
} from "./chunk-CRYYUS4E.js";
import "./chunk-V33IUWAS.js";
import "./chunk-E5NWFBZG.js";
import "./chunk-FP37456K.js";
import "./chunk-VSQZQLTQ.js";
import "./chunk-K43CZ3M5.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-YCXNHEGB.js";
import "./chunk-CSATD3VX.js";
import "./chunk-NXXQ35YM.js";
import "./chunk-7V4JSBFA.js";
import "./chunk-ZT7V2AVD.js";
import "./chunk-C2OXE4NQ.js";
import "./chunk-KOI252FF.js";
import "./chunk-I2TVVMQ6.js";
import "./chunk-5EGQYY2H.js";
import "./chunk-JKPUNUQA.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-VYTPFEL2.js";
import "./chunk-RLGDH6IY.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-KETDH2J4.js";
import "./chunk-7QV7DHWN.js";
import "./chunk-4L4Y34YK.js";
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
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
import "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
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

// ../../../node_modules/@arcgis/core/smartMapping/statistics/support/statsWorker.js
function d2(a) {
  return __async(this, null, function* () {
    const {
      attribute: e,
      features: r
    } = a, {
      normalizationType: s,
      normalizationField: m,
      minValue: f2,
      maxValue: u,
      fieldType: d3
    } = e, p3 = yield b({
      field: e.field,
      valueExpression: e.valueExpression,
      normalizationType: s,
      normalizationField: m,
      normalizationTotal: e.normalizationTotal,
      viewInfoParams: e.viewInfoParams,
      timeZone: e.timeZone,
      fieldInfos: e.fieldInfos
    }, r), v2 = f({
      normalizationType: s,
      normalizationField: m,
      minValue: f2,
      maxValue: u
    }), c2 = {
      value: 0.5,
      fieldType: d3
    }, z2 = "esriFieldTypeString" === d3 ? d({
      values: p3,
      supportsNullCount: v2,
      percentileParams: c2
    }) : p({
      values: p3,
      minValue: f2,
      maxValue: u,
      useSampleStdDev: !s,
      supportsNullCount: v2,
      percentileParams: c2
    });
    return C(z2, "esriFieldTypeDate" === d3);
  });
}
function p2(a) {
  return __async(this, null, function* () {
    const {
      attribute: e,
      features: n
    } = a, o = yield b({
      field: e.field,
      field2: e.field2,
      field3: e.field3,
      fieldDelimiter: e.fieldDelimiter,
      valueExpression: e.valueExpression,
      viewInfoParams: e.viewInfoParams,
      timeZone: e.timeZone,
      fieldInfos: e.fieldInfos
    }, n, false), l = k(o);
    return $(l, e.domains, e.returnAllCodedValues, e.fieldDelimiter);
  });
}
function v(a) {
  return __async(this, null, function* () {
    const {
      attribute: e,
      features: n
    } = a, {
      field: o,
      normalizationType: l,
      normalizationField: t,
      normalizationTotal: r,
      classificationMethod: s
    } = e, u = yield b({
      field: o,
      valueExpression: e.valueExpression,
      normalizationType: l,
      normalizationField: t,
      normalizationTotal: r,
      viewInfoParams: e.viewInfoParams,
      timeZone: e.timeZone,
      fieldInfos: e.fieldInfos
    }, n), d3 = E(u, {
      field: o,
      normalizationType: l,
      normalizationField: t,
      normalizationTotal: r,
      classificationMethod: s,
      standardDeviationInterval: e.standardDeviationInterval,
      numClasses: e.numClasses,
      minValue: e.minValue,
      maxValue: e.maxValue
    });
    return P(d3, s);
  });
}
function c(a) {
  return __async(this, null, function* () {
    const {
      attribute: e,
      features: n
    } = a, {
      field: o,
      normalizationType: l,
      normalizationField: t,
      normalizationTotal: r,
      classificationMethod: s
    } = e, m = yield b({
      field: o,
      valueExpression: e.valueExpression,
      normalizationType: l,
      normalizationField: t,
      normalizationTotal: r,
      viewInfoParams: e.viewInfoParams,
      timeZone: e.timeZone,
      fieldInfos: e.fieldInfos
    }, n);
    return U(m, {
      field: o,
      normalizationType: l,
      normalizationField: t,
      normalizationTotal: r,
      classificationMethod: s,
      standardDeviationInterval: e.standardDeviationInterval,
      numBins: e.numBins,
      minValue: e.minValue,
      maxValue: e.maxValue
    });
  });
}
function z(i) {
  return __async(this, null, function* () {
    const {
      attribute: n,
      features: o
    } = i, {
      field: l,
      radius: t,
      transform: r,
      spatialReference: s
    } = n, m = n.size ?? [0, 0], f2 = j(o ?? [], r, s, m);
    return x(f2, t ?? void 0, l, m[0], m[1]);
  });
}
export {
  v as classBreaks,
  z as heatmapStatistics,
  c as histogram,
  d2 as summaryStatistics,
  p2 as uniqueValues
};
//# sourceMappingURL=statsWorker-SPMMCGXT.js.map
