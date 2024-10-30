import {
  b,
  j,
  x
} from "./chunk-LNRZHZOQ.js";
import "./chunk-DI6VABAK.js";
import "./chunk-5EBAJR7X.js";
import "./chunk-5JA2JHV3.js";
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
} from "./chunk-FUKSTKFU.js";
import "./chunk-MIQZ6UDY.js";
import "./chunk-JOJZ6YC5.js";
import "./chunk-L4TOCXR5.js";
import "./chunk-IMVP5ADD.js";
import "./chunk-H7WPOTQH.js";
import "./chunk-SGSUM5YO.js";
import "./chunk-SG5TCCCK.js";
import "./chunk-6A7CWJED.js";
import "./chunk-JM7HAEY6.js";
import "./chunk-A3NNJ7XA.js";
import "./chunk-OKJHJ3CY.js";
import "./chunk-XTVPEVHA.js";
import "./chunk-DTUSTSEJ.js";
import "./chunk-JCWFGRHQ.js";
import "./chunk-JILEJ6R2.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-4ZZRP4MA.js";
import "./chunk-7ZJ6P7J7.js";
import "./chunk-FPFZQCEQ.js";
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-FYAEQPUY.js";
import "./chunk-7XMEZQ34.js";
import "./chunk-BDM2D6IC.js";
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
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
import "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
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
//# sourceMappingURL=statsWorker-PK3OBYE4.js.map
