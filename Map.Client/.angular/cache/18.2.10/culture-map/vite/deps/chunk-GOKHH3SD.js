import {
  B2 as B,
  C,
  M,
  a as a3,
  a3 as a4,
  c as c2,
  f as f3,
  h,
  l as l2,
  m as m2,
  n3 as n4,
  p as p3,
  u as u2,
  w as w3,
  x
} from "./chunk-2AV27Q4X.js";
import {
  c,
  f as f2,
  g,
  g2,
  i as i2,
  l2 as l,
  n as n3,
  o as o3,
  p as p2,
  r as r2,
  w as w2,
  y as y5
} from "./chunk-3HU4B6P4.js";
import {
  i,
  s as s3,
  u
} from "./chunk-5AUX2A3J.js";
import {
  m,
  p
} from "./chunk-U74WRHVJ.js";
import {
  y as y4
} from "./chunk-TCPN7AEH.js";
import {
  y as y3
} from "./chunk-PFMGJTQM.js";
import {
  n as n2
} from "./chunk-GAW5JHG4.js";
import {
  y as y2
} from "./chunk-S3IO7V4Q.js";
import {
  o as o2
} from "./chunk-4ZZRP4MA.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  _
} from "./chunk-O7UDKFOW.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import {
  s as s2
} from "./chunk-NKCPFCP3.js";
import {
  j
} from "./chunk-3ZXOUEQG.js";
import {
  n
} from "./chunk-V5C6HSAM.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a2
} from "./chunk-DDYVXG4F.js";
import {
  a,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/BaseFunctionArguments.js
var e2 = class extends f {
  constructor() {
    super(...arguments), this.raster = void 0;
  }
};
e([y({
  json: {
    write: true
  }
})], e2.prototype, "raster", void 0), e2 = e([a2("esri.layers.support.rasterFunctions.BaseFunctionArguments")], e2);
var p4 = e2;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/ArithmeticFunctionArguments.js
var e3;
var a5 = e3 = class extends p4 {
  constructor() {
    super(...arguments), this.raster2 = void 0;
  }
  get rasters() {
    return [this.raster, this.raster2];
  }
  clone() {
    return new e3({
      raster: this.raster,
      raster2: this.raster2,
      operation: this.operation
    });
  }
};
e([y({
  json: {
    write: true
  }
})], a5.prototype, "operation", void 0), e([y({
  json: {
    write: true
  }
})], a5.prototype, "raster2", void 0), e([y({
  readOnly: true
})], a5.prototype, "rasters", null), a5 = e3 = e([a2("esri.layers.support.rasterFunctions.ArithmeticFunctionArguments")], a5);
var i3 = a5;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/BaseRasterFunction.js
var a6 = /* @__PURE__ */ new Set(["slope", "aspect", "curvature", "hillshade", "shadedrelief", "statistics"]);
var u3 = class extends f {
  constructor() {
    super(...arguments), this.functionArguments = null, this.readingBufferSize = 0, this.id = -1, this.isNoopProcess = false, this.rawInputBandIds = [], this.rawSourceRasterInfos = null, this.isInputBandIdsSwizzled = false, this.swizzledBandSelection = [], this.isBranch = false, this._bindingResult = null;
  }
  get supportsGPU() {
    return this._bindingResult.supportsGPU;
  }
  get flatWebGLFunctionChain() {
    const t6 = this.getWebGLProcessorDefinition();
    if (!t6) return null;
    const s12 = [t6], {
      parameters: e9
    } = t6;
    let r8 = e9.rasters || e9.raster && [e9.raster];
    for (; r8?.length; ) {
      s12.unshift(...r8);
      const t7 = [];
      for (let s13 = 0; s13 < r8.length; s13++) {
        const {
          parameters: e10
        } = r8[s13], n22 = e10.rasters || e10.raster && [e10.raster];
        n22?.length && t7.push(...n22);
      }
      r8 = t7;
    }
    for (let a28 = s12.length - 1; a28 >= 0; a28--) s12[a28].isNoopProcess && s12.splice(a28, 1);
    let n21 = false;
    for (let a28 = 0; a28 < s12.length; a28++) {
      const t7 = s12[a28];
      t7.id = s12.length - a28 - 1;
      const {
        rasters: e10
      } = t7.parameters;
      n21 = n21 || null != e10 && e10.length > 1;
    }
    const i29 = s12.some(({
      name: t7
    }) => a6.has(t7.toLowerCase())), {
      rawSourceRasterInfos: o11
    } = this;
    return {
      functions: s12,
      hasBranches: n21,
      hasFocalFunction: i29,
      isSourceSingleBand: 1 === o11?.[0]?.bandCount
    };
  }
  bind(t6, s12 = false, e9 = -1) {
    this.id = e9 + 1;
    const r8 = this._getRasterValues();
    let n21 = true;
    for (let i29 = 0; i29 < r8.length; i29++) {
      const e10 = r8[i29];
      if (null != e10 && this._isRasterFunctionValue(e10)) {
        const r9 = e10.bind(t6, s12, this.id + i29);
        if (!r9.success) return this._bindingResult = r9, r9;
        n21 = n21 && r9.supportsGPU;
      }
    }
    return !this.rasterInfo || s12 ? (this.sourceRasterInfos = this._getSourceRasterInfos(t6), this._bindingResult = this._bindSourceRasters(), this._bindingResult.success && this._patchRasterInfo(), this._bindingResult.supportsGPU = n21 && this._bindingResult.supportsGPU, this.processInputBandIds(), this._bindingResult) : (this._bindingResult = {
      success: true,
      supportsGPU: true
    }, this.processInputBandIds(), this._bindingResult);
  }
  process(t6) {
    const s12 = this._getRasterValues(), e9 = 0 === s12.length ? t6.pixelBlocks ?? t6.primaryPixelBlocks : s12.map((s13) => this._readRasterValue(s13, t6));
    return this._processPixels(__spreadProps(__spreadValues({}, t6), {
      pixelBlocks: e9
    }));
  }
  processInputBandIds() {
    const t6 = this._getRasterValues().filter(this._isRasterFunctionValue);
    let s12;
    if (t6.length > 1) {
      const s13 = t6.map((t7) => t7.processInputBandIds()[0]);
      this.rawInputBandIds = s13, this.isInputBandIdsSwizzled = this.rawInputBandIds.some((t7, s14) => t7 !== s14);
      const e10 = t6.filter((t7) => "ExtractBand" === t7.functionName);
      return e10.length && e10.forEach((t7, s14) => {
        t7.isInputBandIdsSwizzled = true, t7.swizzledBandSelection = [s14, s14, s14];
      }), this.rawInputBandIds;
    }
    const e9 = t6[0];
    if (e9) {
      if (s12 = e9.processInputBandIds(), e9.isInputBandIdsSwizzled) return this.rawInputBandIds = s12, s12;
    } else {
      s12 = [];
      const {
        bandCount: t7
      } = this.sourceRasterInfos[0];
      for (let e10 = 0; e10 < t7; e10++) s12.push(e10);
    }
    const r8 = this._getInputBandIds(s12);
    return this.isInputBandIdsSwizzled = r8.some((t7, s13) => t7 !== s13), this.rawInputBandIds = r8, this.rawInputBandIds;
  }
  getPrimaryRasters() {
    const t6 = [], s12 = [];
    return this._getPrimaryRasters(this, t6, s12), {
      rasters: t6,
      rasterIds: s12
    };
  }
  getWebGLProcessorDefinition() {
    const t6 = this._getWebGLParameters(), {
      raster: s12,
      rasters: e9
    } = this.functionArguments;
    return e9 && Array.isArray(e9) && e9.length ? (t6.rasters = e9.map((t7) => this._isRasterFunctionValue(t7) ? t7.getWebGLProcessorDefinition() : "number" == typeof t7 ? {
      name: "Constant",
      parameters: {
        value: t7
      },
      pixelType: "f32",
      id: -1,
      isNoopProcess: false
    } : {
      name: "Identity",
      parameters: {
        value: t7
      },
      pixelType: "f32",
      id: -1,
      isNoopProcess: false
    }), t6.rasters.some((t7) => null != t7) || (t6.rasters = null)) : this._isRasterFunctionValue(s12) && (t6.raster = s12.getWebGLProcessorDefinition()), {
      name: this.functionName,
      parameters: t6,
      pixelType: this.outputPixelType,
      id: this.id,
      isNoopProcess: this.isNoopProcess
    };
  }
  getClippingGeometries() {
    const t6 = [];
    "Clip" === this.functionName && t6.push(this.functionArguments);
    const {
      raster: s12,
      rasters: e9
    } = this.functionArguments;
    if (e9 && Array.isArray(e9) && e9.length) e9.forEach((s13) => {
      if (this._isRasterFunctionValue(s13)) {
        const e10 = s13.getClippingGeometries();
        t6.push(...e10);
      }
    });
    else if (this._isRasterFunctionValue(s12)) {
      const e10 = s12.getClippingGeometries();
      t6.push(...e10);
    }
    return t6;
  }
  _getOutputPixelType(t6) {
    return "unknown" === this.outputPixelType ? t6 : this.outputPixelType ?? t6;
  }
  _getWebGLParameters() {
    return {};
  }
  _getInputBandIds(t6) {
    return t6;
  }
  _removeStatsHistColormapVAT(t6) {
    t6.statistics = null, t6.histograms = null, t6.colormap = null, t6.attributeTable = null;
  }
  _getRasterValues() {
    const {
      rasterArgumentNames: t6
    } = this;
    return "rasters" === t6[0] ? this.functionArguments.rasters ?? [] : t6.flatMap((t7) => this.functionArguments[t7]);
  }
  _getSourceRasterInfos(t6) {
    const s12 = this._getRasterValues(), {
      rasterInfos: e9,
      rasterIds: r8
    } = t6;
    if (0 === s12.length) return e9;
    const n21 = s12.map((t7) => t7 && "object" == typeof t7 && "bind" in t7 && t7.rasterInfo ? t7.rasterInfo : "string" == typeof t7 && r8.includes(t7) ? e9[r8.indexOf(t7)] : "number" != typeof t7 ? e9[0] : void 0), i29 = n21.find((t7) => t7) ?? e9[0];
    return n21.forEach((t7, s13) => {
      void 0 === t7 && (n21[s13] = i29);
    }), n21;
  }
  _getPrimaryRasterId(t6) {
    return t6?.rasterId;
  }
  _getPrimaryRasters(t6, s12 = [], e9 = []) {
    for (let r8 = 0; r8 < t6.sourceRasters.length; r8++) {
      const n21 = t6.sourceRasters[r8];
      if ("number" != typeof n21) if ("bind" in n21) this._getPrimaryRasters(n21, s12, e9);
      else {
        const t7 = n21, r9 = this._getPrimaryRasterId(t7);
        if (null == r9) continue;
        e9.includes(r9) || (this.mainPrimaryRasterId === r9 ? (s12.unshift(t7), e9.unshift(r9)) : (s12.push(t7), e9.push(r9)));
      }
    }
  }
  _isRasterFunctionValue(t6) {
    return null != t6 && "object" == typeof t6 && "getWebGLProcessorDefinition" in t6;
  }
  _readRasterValue(t6, s12) {
    const {
      primaryPixelBlocks: e9
    } = s12;
    if (null == t6 || "$$" === t6) {
      const t7 = e9[0];
      return null == t7 ? null : t7.clone();
    }
    if ("string" == typeof t6) {
      const r8 = s12.primaryRasterIds.indexOf(t6);
      return -1 === r8 ? null : e9[r8];
    }
    if ("number" == typeof t6) {
      const s13 = e9[0];
      if (null == s13) return null;
      const {
        width: r8,
        height: n21,
        pixelType: o11
      } = s13, a28 = new Float32Array(r8 * n21);
      a28.fill(t6);
      const u18 = this.sourceRasterInfos[0].bandCount, p22 = new Array(u18).fill(a28);
      return new g({
        width: r8,
        height: n21,
        pixelType: o11,
        pixels: p22
      });
    }
    return t6.process(s12);
  }
  _patchRasterInfo() {
    const {
      rasterInfo: t6
    } = this;
    if (!t6?.keyProperties) return;
    const {
      bandCount: s12,
      keyProperties: e9,
      statistics: r8,
      histograms: n21
    } = t6, i29 = e9.BandProperties;
    i29 && i29.length !== s12 && (t6.keyProperties = __spreadProps(__spreadValues({}, e9), {
      BandProperties: void 0
    })), r8 && r8.length !== s12 && (t6.statistics = r8.length > s12 ? r8.slice(0, s12) : null), n21 && n21.length !== s12 && (t6.histograms = n21.length > s12 ? n21.slice(0, s12) : null), e9.BAND_COUNT && Number(e9.BAND_COUNT) !== s12 && (t6.keyProperties = __spreadProps(__spreadValues({}, e9), {
      BAND_COUNT: "string" == typeof e9.BAND_COUNT ? String(s12) : s12
    }));
  }
};
e([y({
  json: {
    write: true
  }
})], u3.prototype, "functionName", void 0), e([y({
  json: {
    write: true
  }
})], u3.prototype, "functionArguments", void 0), e([y()], u3.prototype, "rasterArgumentNames", void 0), e([y({
  json: {
    write: true
  }
}), s2((t6) => t6?.toLowerCase())], u3.prototype, "outputPixelType", void 0), e([y({
  json: {
    write: true
  }
})], u3.prototype, "mainPrimaryRasterId", void 0), e([y()], u3.prototype, "sourceRasters", void 0), e([y({
  type: [m2],
  json: {
    write: true
  }
})], u3.prototype, "sourceRasterInfos", void 0), e([y({
  json: {
    write: true
  }
})], u3.prototype, "rasterInfo", void 0), e([y({
  json: {
    write: true
  }
})], u3.prototype, "readingBufferSize", void 0), e([y({
  json: {
    write: true
  }
})], u3.prototype, "id", void 0), e([y()], u3.prototype, "isNoopProcess", void 0), e([y()], u3.prototype, "supportsGPU", null), e([y()], u3.prototype, "rawInputBandIds", void 0), e([y()], u3.prototype, "rawSourceRasterInfos", void 0), e([y()], u3.prototype, "isInputBandIdsSwizzled", void 0), e([y()], u3.prototype, "swizzledBandSelection", void 0), e([y()], u3.prototype, "isBranch", void 0), e([y({
  readOnly: true
})], u3.prototype, "flatWebGLFunctionChain", null), e([y()], u3.prototype, "_bindingResult", void 0), u3 = e([a2("esri.layers.support.rasterFunctions.BaseRasterFunction")], u3);
var p5 = u3;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctionConstants.js
var l3 = {
  userDefined: -1,
  lineDetectionHorizontal: 0,
  lineDetectionVertical: 1,
  lineDetectionLeftDiagonal: 2,
  lineDetectionRightDiagonal: 3,
  gradientNorth: 4,
  gradientWest: 5,
  gradientEast: 6,
  gradientSouth: 7,
  gradientNorthEast: 8,
  gradientNorthWest: 9,
  smoothArithmeticMean: 10,
  smoothing3x3: 11,
  smoothing5x5: 12,
  sharpening3x3: 13,
  sharpening5x5: 14,
  laplacian3x3: 15,
  laplacian5x5: 16,
  sobelHorizontal: 17,
  sobelVertical: 18,
  sharpen: 19,
  sharpen2: 20,
  pointSpread: 21,
  none: 255
};
var h2 = {
  plus: 1,
  minus: 2,
  times: 3,
  sqrt: 4,
  power: 5,
  abs: 10,
  divide: 23,
  exp: 25,
  exp10: 26,
  exp2: 27,
  int: 30,
  float: 32,
  ln: 35,
  log10: 36,
  log2: 37,
  mod: 44,
  negate: 45,
  roundDown: 48,
  roundUp: 49,
  square: 53,
  floatDivide: 64,
  floorDivide: 65
};
var u4 = {
  bitwiseAnd: 11,
  bitwiseLeftShift: 12,
  bitwiseNot: 13,
  bitwiseOr: 14,
  bitwiseRightShift: 15,
  bitwiseXOr: 16,
  booleanAnd: 17,
  booleanNot: 18,
  booleanOr: 19,
  booleanXOr: 20,
  equalTo: 24,
  greaterThan: 28,
  greaterThanEqual: 29,
  lessThan: 33,
  lessThanEqual: 34,
  isNull: 31,
  notEqual: 46
};
var s4 = {
  acos: 6,
  asin: 7,
  atan: 8,
  atanh: 9,
  cos: 21,
  cosh: 22,
  sin: 51,
  sinh: 52,
  tan: 56,
  tanh: 57,
  acosh: 59,
  asinh: 60,
  atan2: 61
};
var d = {
  majority: 38,
  max: 39,
  mean: 40,
  med: 41,
  min: 42,
  minority: 43,
  range: 47,
  stddev: 54,
  sum: 55,
  variety: 58,
  majorityIgnoreNoData: 66,
  maxIgnoreNoData: 67,
  meanIgnoreNoData: 68,
  medIgnoreNoData: 69,
  minIgnoreNoData: 70,
  minorityIgnoreNoData: 71,
  rangeIgnoreNoData: 72,
  stddevIgnoreNoData: 73,
  sumIgnoreNoData: 74,
  varietyIgnoreNoData: 75
};
var p6 = {
  setNull: 50,
  conditional: 78
};
var c3 = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, h2), u4), s4), d), p6);

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/localUtils.js
var a7 = /* @__PURE__ */ new Map([[s4.acos, {
  domain: [0, Math.PI],
  isInteger: false
}], [s4.asin, {
  domain: [-Math.PI / 2, Math.PI / 2],
  isInteger: false
}], [s4.atan, {
  domain: [-Math.PI / 2, Math.PI / 2],
  isInteger: false
}], [s4.cos, {
  domain: [-1, 1],
  isInteger: false
}], [s4.sin, {
  domain: [-1, 1],
  isInteger: false
}], [u4.booleanAnd, {
  domain: [0, 1],
  isInteger: true
}], [u4.booleanNot, {
  domain: [0, 1],
  isInteger: true
}], [u4.booleanOr, {
  domain: [0, 1],
  isInteger: true
}], [u4.booleanXOr, {
  domain: [0, 1],
  isInteger: true
}], [u4.equalTo, {
  domain: [0, 1],
  isInteger: true
}], [u4.notEqual, {
  domain: [0, 1],
  isInteger: true
}], [u4.greaterThan, {
  domain: [0, 1],
  isInteger: true
}], [u4.greaterThanEqual, {
  domain: [0, 1],
  isInteger: true
}], [u4.lessThan, {
  domain: [0, 1],
  isInteger: true
}], [u4.lessThanEqual, {
  domain: [0, 1],
  isInteger: true
}], [u4.isNull, {
  domain: [0, 1],
  isInteger: true
}]]);
function l4(t6) {
  return a7.get(t6);
}
var c4 = [0, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 999, 999, 999, 999, 999, 999, 2, 1, 2, 999, 1, 1, 2, 1, 1, 1, 999, 999, 1, 1, 999, 1, 1, 2, 999, 999, 2, 2, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 3, 999, 3];
function f4(t6, e9 = false) {
  const n21 = t6.map((t7) => t7.mask), r8 = n21.filter((t7) => null != t7), o11 = t6[0].pixels[0].length;
  if (0 === r8.length || e9 && r8.length !== n21.length) return new Uint8Array(o11).fill(255);
  const s12 = r8[0], a28 = new Uint8Array(s12);
  if (1 === r8.length) return a28;
  if (!e9) {
    for (let t7 = 1; t7 < r8.length; t7++) {
      const e10 = r8[t7];
      for (let t8 = 0; t8 < a28.length; t8++) a28[t8] && (a28[t8] = e10[t8] ? 255 : 0);
    }
    return a28;
  }
  for (let l18 = 1; l18 < r8.length; l18++) {
    const t7 = r8[l18];
    for (let e10 = 0; e10 < a28.length; e10++) 0 === a28[e10] && (a28[e10] = t7[e10] ? 255 : 0);
  }
  return a28;
}
function i4(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11[t6] + s12[t6]);
  return l18;
}
function u5(e9, n21, r8) {
  const [o11] = e9, s12 = o11.length, a28 = g.createEmptyBand("f32", s12);
  return a28.set(o11), a28;
}
function h3(e9, n21, r8) {
  const [o11] = e9, s12 = o11.length, a28 = g.createEmptyBand(r8, s12);
  for (let t6 = 0; t6 < s12; t6++) n21 && !n21[t6] || (a28[t6] = o11[t6] * o11[t6]);
  return a28;
}
function g3(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11[t6] - s12[t6]);
  return l18;
}
function p7(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11[t6] * s12[t6]);
  return l18;
}
function m3(e9, n21, r8) {
  const [o11] = e9, s12 = o11.length, a28 = g.createEmptyBand(r8, s12);
  for (let t6 = 0; t6 < s12; t6++) n21 && !n21[t6] || (a28[t6] = Math.sign(o11[t6]) * Math.floor(Math.abs(o11[t6])));
  return a28;
}
function d2(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11[t6] / s12[t6]);
  return l18;
}
function y6(t6, e9, n21) {
  return d2(t6, e9, "f32");
}
function E(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = Math.floor(o11[t6] / s12[t6]));
  return l18;
}
function M2(n21, r8, o11, s12) {
  const a28 = n21[0], l18 = a28.length, c32 = g.createEmptyBand(o11, l18);
  if (s12 === s4.atanh) {
    for (let t6 = 0; t6 < l18; t6++) if (r8[t6]) {
      const e9 = a28[t6];
      Math.abs(e9) >= 1 ? r8[t6] = 0 : c32[t6] = Math.atanh(e9);
    }
    return c32;
  }
  const f6 = s12 === s4.asin ? Math.asin : Math.acos;
  for (let t6 = 0; t6 < l18; t6++) if (r8[t6]) {
    const e9 = a28[t6];
    Math.abs(e9) > 1 ? r8[t6] = 0 : c32[t6] = f6(e9);
  }
  return c32;
}
function B2(e9, n21, r8, o11) {
  const [s12] = e9, a28 = s12.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11(s12[t6]));
  return l18;
}
function I(e9, n21, r8, o11) {
  const [s12, a28] = e9, l18 = s12.length, c32 = g.createEmptyBand(r8, l18);
  for (let t6 = 0; t6 < l18; t6++) n21 && !n21[t6] || (c32[t6] = o11(s12[t6], a28[t6]));
  return c32;
}
function w4(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11[t6] & s12[t6]);
  return l18;
}
function x2(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11[t6] << s12[t6]);
  return l18;
}
function b(e9, n21, r8) {
  const [o11] = e9, s12 = o11.length, a28 = g.createEmptyBand(r8, s12);
  for (let t6 = 0; t6 < s12; t6++) n21 && !n21[t6] || (a28[t6] = ~o11[t6]);
  return a28;
}
function A(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11[t6] | s12[t6]);
  return l18;
}
function P(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11[t6] >> s12[t6]);
  return l18;
}
function T(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11[t6] ^ s12[t6]);
  return l18;
}
function k(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11[t6] && s12[t6] ? 1 : 0);
  return l18;
}
function N(e9, n21, r8) {
  const [o11] = e9, s12 = o11.length, a28 = g.createEmptyBand(r8, s12);
  for (let t6 = 0; t6 < s12; t6++) n21 && !n21[t6] || (a28[t6] = o11[t6] ? 0 : 1);
  return a28;
}
function q(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11[t6] || s12[t6] ? 1 : 0);
  return l18;
}
function U(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = (o11[t6] ? 1 : 0) ^ (s12[t6] ? 1 : 0));
  return l18;
}
function F(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11[t6] === s12[t6] ? 1 : 0);
  return l18;
}
function j2(e9, n21, r8, o11) {
  const [s12] = e9, a28 = s12.length, l18 = g.createEmptyBand(r8, a28), c32 = o11 === Math.E;
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = c32 ? Math.exp(s12[t6]) : o11 ** s12[t6]);
  return l18;
}
function z(t6, e9, n21) {
  return j2(t6, e9, n21, 10);
}
function O(t6, e9, n21) {
  return j2(t6, e9, n21, 2);
}
function C2(t6, e9, n21) {
  return j2(t6, e9, n21, Math.E);
}
function R(e9, n21, r8, o11) {
  const [s12] = e9, a28 = s12.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (s12[t6] <= 0 ? n21[t6] = 0 : l18[t6] = o11(s12[t6]));
  return l18;
}
function S(t6, e9, n21) {
  return R(t6, e9, n21, Math.log10);
}
function X(t6, e9, n21) {
  return R(t6, e9, n21, Math.log2);
}
function v(t6, e9, n21) {
  return R(t6, e9, n21, Math.log);
}
function D(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11[t6] > s12[t6] ? 1 : 0);
  return l18;
}
function G(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11[t6] >= s12[t6] ? 1 : 0);
  return l18;
}
function H(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11[t6] < s12[t6] ? 1 : 0);
  return l18;
}
function J(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11[t6] <= s12[t6] ? 1 : 0);
  return l18;
}
function K(e9, n21, r8) {
  const [o11] = e9, s12 = o11.length, a28 = g.createEmptyBand(r8, s12);
  if (!n21) return a28;
  for (let t6 = 0; t6 < s12; t6++) a28[t6] = n21[t6] ? 0 : 1;
  return a28;
}
function L(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11[t6] % s12[t6]);
  return l18;
}
function Q(e9, n21, r8) {
  const [o11] = e9, s12 = o11.length, a28 = g.createEmptyBand(r8, s12);
  for (let t6 = 0; t6 < s12; t6++) n21 && !n21[t6] || (a28[t6] = -o11[t6]);
  return a28;
}
function V(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21 && !n21[t6] || (l18[t6] = o11[t6] === s12[t6] ? 0 : 1);
  return l18;
}
function W(e9, n21, r8) {
  const [o11, s12] = e9, a28 = o11.length, l18 = g.createEmptyBand(r8, a28), c32 = new Uint8Array(a28);
  for (let t6 = 0; t6 < a28; t6++) null != n21 && !n21[t6] || 0 !== o11[t6] || (l18[t6] = s12[t6], c32[t6] = 255);
  return {
    band: l18,
    mask: c32
  };
}
function Y(e9, n21, r8) {
  const [o11, s12, a28] = e9, l18 = o11.length, c32 = g.createEmptyBand(r8, l18);
  for (let t6 = 0; t6 < l18; t6++) n21 && !n21[t6] || (c32[t6] = o11[t6] ? s12[t6] : a28[t6]);
  return c32;
}
function Z(e9, n21, r8) {
  const o11 = e9.length;
  if (o11 < 2) return e9[0];
  const [s12] = e9, a28 = s12.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) if (!n21 || n21[t6]) {
    let n22 = s12[t6];
    for (let r9 = 1; r9 < o11; r9++) {
      const o12 = e9[r9][t6];
      n22 < o12 && (n22 = o12);
    }
    l18[t6] = n22;
  }
  return l18;
}
function $(e9, n21, r8) {
  const o11 = e9.length;
  if (o11 < 2) return e9[0];
  const [s12] = e9, a28 = s12.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) if (!n21 || n21[t6]) {
    let n22 = s12[t6];
    for (let r9 = 1; r9 < o11; r9++) {
      const o12 = e9[r9][t6];
      n22 > o12 && (n22 = o12);
    }
    l18[t6] = n22;
  }
  return l18;
}
function _2(e9, n21, r8) {
  const o11 = e9.length;
  if (o11 < 2) return e9[0];
  const [s12] = e9, a28 = s12.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) if (!n21 || n21[t6]) {
    let n22 = s12[t6], r9 = n22;
    for (let s13 = 1; s13 < o11; s13++) {
      const o12 = e9[s13][t6];
      r9 < o12 ? r9 = o12 : n22 > o12 && (n22 = o12);
    }
    l18[t6] = r9 - n22;
  }
  return l18;
}
function tt(e9, n21, r8) {
  const o11 = e9.length;
  if (o11 < 2) return e9[0];
  const [s12] = e9, a28 = s12.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) if (!n21 || n21[t6]) {
    let n22 = 0;
    for (let r9 = 0; r9 < o11; r9++) n22 += e9[r9][t6];
    l18[t6] = n22 / o11;
  }
  return l18;
}
function et(e9, n21, r8) {
  const o11 = e9.length;
  if (o11 < 2) return e9[0];
  const [s12] = e9, a28 = s12.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) if (!n21 || n21[t6]) for (let n22 = 0; n22 < o11; n22++) {
    const r9 = e9[n22];
    l18[t6] += r9[t6];
  }
  return l18;
}
function nt(e9, n21, r8) {
  const o11 = e9.length;
  if (o11 < 2) return e9[0];
  const [s12] = e9, a28 = s12.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) if (!n21 || n21[t6]) {
    const n22 = new Float32Array(o11);
    let r9 = 0;
    for (let a29 = 0; a29 < o11; a29++) {
      const o12 = e9[a29];
      r9 += o12[t6], n22[a29] = o12[t6];
    }
    r9 /= o11;
    let s13 = 0;
    for (let t7 = 0; t7 < o11; t7++) s13 += (n22[t7] - r9) ** 2;
    l18[t6] = Math.sqrt(s13 / o11);
  }
  return l18;
}
function rt(e9, n21, r8) {
  const o11 = e9.length;
  if (o11 < 2) return e9[0];
  const s12 = Math.floor(o11 / 2), [a28] = e9, l18 = a28.length, c32 = g.createEmptyBand(r8, l18), f6 = new Float32Array(o11), i29 = o11 % 2 == 1;
  for (let t6 = 0; t6 < l18; t6++) if (!n21 || n21[t6]) {
    for (let n22 = 0; n22 < o11; n22++) f6[n22] = e9[n22][t6];
    f6.sort(), c32[t6] = i29 ? f6[s12] : (f6[s12] + f6[s12 - 1]) / 2;
  }
  return c32;
}
function ot(e9, n21, r8) {
  const [o11, s12] = e9;
  if (null == s12) return o11;
  const a28 = o11.length, l18 = g.createEmptyBand(r8, a28);
  for (let t6 = 0; t6 < a28; t6++) n21[t6] && (o11[t6] === s12[t6] ? l18[t6] = o11[t6] : n21[t6] = 0);
  return l18;
}
function st(e9, n21, r8) {
  const o11 = e9.length;
  if (o11 <= 2) return ot(e9, n21, r8);
  const s12 = e9[0].length, a28 = g.createEmptyBand(r8, s12), l18 = /* @__PURE__ */ new Map();
  for (let t6 = 0; t6 < s12; t6++) if (!n21 || n21[t6]) {
    let n22;
    l18.clear();
    for (let a29 = 0; a29 < o11; a29++) n22 = e9[a29][t6], l18.set(n22, l18.has(n22) ? l18.get(n22) + 1 : 1);
    let r9 = 0, s13 = 0;
    for (const t7 of l18.keys()) r9 = l18.get(t7), r9 > s13 && (s13 = r9, n22 = t7);
    a28[t6] = n22;
  }
  return a28;
}
function at(e9, n21, r8) {
  const o11 = e9.length;
  if (o11 <= 2) return ot(e9, n21, r8);
  const s12 = e9[0].length, a28 = g.createEmptyBand(r8, s12), l18 = /* @__PURE__ */ new Map();
  for (let t6 = 0; t6 < s12; t6++) if (!n21 || n21[t6]) {
    let n22;
    l18.clear();
    for (let a29 = 0; a29 < o11; a29++) n22 = e9[a29][t6], l18.set(n22, l18.has(n22) ? l18.get(n22) + 1 : 1);
    let r9 = 0, s13 = e9.length;
    for (const t7 of l18.keys()) r9 = l18.get(t7), r9 < s13 && (s13 = r9, n22 = t7);
    a28[t6] = n22;
  }
  return a28;
}
function lt(e9, n21, r8) {
  const o11 = e9.length;
  if (o11 < 2) return e9[0];
  const [s12] = e9, a28 = s12.length, l18 = g.createEmptyBand(r8, a28), c32 = /* @__PURE__ */ new Set();
  for (let t6 = 0; t6 < a28; t6++) if (!n21 || n21[t6]) {
    let n22;
    c32.clear();
    for (let r9 = 0; r9 < o11; r9++) n22 = e9[r9][t6], c32.add(n22);
    l18[t6] = c32.size;
  }
  return l18;
}
var ct = /* @__PURE__ */ new Map();
var ft = /* @__PURE__ */ new Map();
var it = /* @__PURE__ */ new Map();
var ut = /* @__PURE__ */ new Map();
function ht() {
  ct.size || (ct.set(4, Math.sqrt), ct.set(6, Math.acos), ct.set(7, Math.asin), ct.set(8, Math.atan), ct.set(9, Math.atanh), ct.set(10, Math.abs), ct.set(21, Math.cos), ct.set(22, Math.cosh), ct.set(48, Math.floor), ct.set(49, Math.ceil), ct.set(51, Math.sin), ct.set(52, Math.sinh), ct.set(56, Math.tan), ct.set(57, Math.tanh), ct.set(59, Math.acosh), ct.set(60, Math.asinh), ct.set(65, Math.floor), ft.set(5, Math.pow), ft.set(61, Math.atan2), it.set(1, i4), it.set(2, g3), it.set(3, p7), it.set(11, w4), it.set(12, x2), it.set(13, b), it.set(14, A), it.set(15, P), it.set(16, T), it.set(17, k), it.set(18, N), it.set(19, q), it.set(20, U), it.set(23, d2), it.set(24, F), it.set(25, C2), it.set(26, z), it.set(27, O), it.set(28, D), it.set(29, G), it.set(30, m3), it.set(31, K), it.set(32, u5), it.set(33, H), it.set(34, J), it.set(35, v), it.set(36, S), it.set(37, X), it.set(44, L), it.set(45, Q), it.set(46, V), it.set(53, h3), it.set(64, y6), it.set(65, E), it.set(76, Y), it.set(78, Y), ut.set(38, st), ut.set(39, Z), ut.set(40, tt), ut.set(41, rt), ut.set(42, $), ut.set(43, at), ut.set(47, _2), ut.set(54, nt), ut.set(55, et), ut.set(58, lt), ut.set(66, st), ut.set(67, Z), ut.set(68, tt), ut.set(69, rt), ut.set(70, $), ut.set(71, at), ut.set(72, _2), ut.set(73, nt), ut.set(74, et), ut.set(75, lt));
}
function gt(t6, e9, n21, r8) {
  let [a28, l18] = s3(n21);
  const c32 = i(n21);
  c32 && (a28 -= 1e-5, l18 += 1e-5);
  for (let o11 = 0; o11 < e9.length; o11++) if (e9[o11]) {
    const n22 = t6[o11];
    isNaN(n22) || n22 < a28 || n22 > l18 ? e9[o11] = 0 : r8[o11] = c32 ? Math.round(n22) : n22;
  }
}
function pt(o11, s12, l18 = {}) {
  ht();
  let c32 = f4(o11, s12 >= 66 && s12 <= 75);
  const {
    outputPixelType: i29 = "f32"
  } = l18, u18 = !ut.has(s12) || l18.processAsMultiband, h6 = u18 ? o11[0].pixels.length : 1, g6 = [];
  for (let f6 = 0; f6 < h6; f6++) {
    const l19 = ut.has(s12) && !u18 ? o11.flatMap((t6) => t6.pixels) : o11.map((t6) => t6.pixels[f6]);
    let h7, p23 = true;
    if (s12 === p6.setNull) {
      const t6 = W(l19, c32, i29);
      h7 = t6.band, c32 = t6.mask, p23 = false;
    } else if (it.has(s12)) {
      h7 = it.get(s12)(l19, c32, "f64");
    } else if (ct.has(s12)) h7 = s12 === s4.asin || s12 === s4.acos || s12 === s4.atanh ? M2(l19, c32, "f64", s12) : B2(l19, c32, "f64", ct.get(s12));
    else if (ft.has(s12)) h7 = I(l19, c32, "f64", ft.get(s12));
    else if (ut.has(s12)) {
      h7 = ut.get(s12)(l19, c32, "f64");
    } else h7 = l19[0], p23 = false;
    if (p23 && s12 !== u4.isNull && !a7.has(s12)) {
      const e9 = g.createEmptyBand(i29, h7.length);
      c32 || (c32 = new Uint8Array(h7.length).fill(255)), gt(h7, c32, i29, e9), h7 = e9;
    }
    g6.push(h7);
  }
  const p22 = o11[0];
  return new g({
    width: p22.width,
    height: p22.height,
    pixelType: i29,
    mask: s12 === u4.isNull ? null : c32,
    pixels: g6
  });
}
function mt(t6, e9, n21) {
  return pt(t6, e9 = [null, 1, 2, 3, 23, 5, 44][e9] ?? 1, {
    outputPixelType: n21
  });
}

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/ArithmeticFunction.js
var p8 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "Arithmetic", this.functionArguments = null, this.rasterArgumentNames = ["raster", "raster2"];
  }
  _bindSourceRasters() {
    const {
      operation: t6
    } = this.functionArguments;
    if (t6 < 1 || t6 > 6) return {
      success: false,
      supportsGPU: false,
      error: "unsupported operation"
    };
    const e9 = this.sourceRasterInfos[0].clone();
    this.outputPixelType = this._getOutputPixelType(e9.pixelType), e9.pixelType = this.outputPixelType, this._removeStatsHistColormapVAT(e9), this.rasterInfo = e9;
    return {
      success: true,
      supportsGPU: e9.bandCount <= 3
    };
  }
  _processPixels(t6) {
    const {
      pixelBlocks: e9
    } = t6;
    return null == e9?.[0] || null == e9?.[1] ? null : mt(e9, this.functionArguments.operation, this.outputPixelType);
  }
  _getWebGLParameters() {
    const {
      operation: t6
    } = this.functionArguments, e9 = ["", "plus", "minus", "times", "divide", "power", "mod"][t6], r8 = this.outputPixelType ?? "f32";
    let [i29, n21] = s3(r8);
    const u18 = i(r8);
    return u18 && (i29 -= 1e-4, n21 += 1e-4), {
      imageCount: 2,
      operationName: e9,
      domainRange: [i29, n21],
      isOutputRounded: u18
    };
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], p8.prototype, "functionName", void 0), e([y({
  type: i3,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], p8.prototype, "functionArguments", void 0), e([y()], p8.prototype, "rasterArgumentNames", void 0), p8 = e([a2("esri.layers.support.rasterFunctions.ArithmeticFunction")], p8);
var a8 = p8;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/AspectFunctionArguments.js
var t;
var e4 = t = class extends p4 {
  clone() {
    return new t({
      raster: this.raster
    });
  }
};
e4 = t = e([a2("esri.layers.support.rasterFunctions.AspectFunctionArguments")], e4);
var c5 = e4;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/AspectFunction.js
var n5 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "Aspect", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = false;
  }
  _bindSourceRasters() {
    const t6 = this.sourceRasterInfos[0];
    this.isGCS = t6.spatialReference?.isGeographic ?? false, this.outputPixelType = this._getOutputPixelType("f32");
    const s12 = t6.clone();
    return s12.pixelType = this.outputPixelType, s12.statistics = [{
      min: -1,
      max: 360,
      avg: 180,
      stddev: 30
    }], s12.histograms = null, s12.colormap = null, s12.attributeTable = null, s12.bandCount = 1, this.rasterInfo = s12, {
      success: true,
      supportsGPU: true
    };
  }
  _processPixels(t6) {
    const s12 = t6.pixelBlocks?.[0];
    if (null == s12) return null;
    const {
      extent: e9,
      primaryPixelSizes: r8
    } = t6, o11 = r8?.[0], n21 = o11 ?? (e9 ? {
      x: e9.width / s12.width,
      y: e9.height / s12.height
    } : {
      x: 1,
      y: 1
    });
    return u2(s12, {
      resolution: n21
    });
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], n5.prototype, "functionName", void 0), e([y({
  type: c5,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], n5.prototype, "functionArguments", void 0), e([y()], n5.prototype, "rasterArgumentNames", void 0), e([y({
  json: {
    write: true
  }
})], n5.prototype, "isGCS", void 0), n5 = e([a2("esri.layers.support.rasterFunctions.AspectFunction")], n5);
var p9 = n5;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/customBandIndexUtils.js
var e5 = /* @__PURE__ */ new Set(["+", "-", "*", "/", "(", ")"]);
function t2(t6, r8) {
  (t6 = t6.replaceAll(" ", "")).startsWith("-") && (t6 = "0" + t6), t6.startsWith("+") && (t6 = t6.slice(1, t6.length));
  const l18 = t6.split(""), o11 = [], s12 = [];
  let a28 = "";
  for (let i29 = 0; i29 < l18.length; i29++) {
    const t7 = l18[i29];
    e5.has(t7) ? (a28.length && s12.push(n6(a28, r8)), o11.push(t7), a28 = "") : a28 = a28.concat(t7);
  }
  return a28.length && s12.push(n6(a28, r8)), {
    ops: o11,
    nums: s12
  };
}
function n6(e9, t6) {
  return e9.toLowerCase().startsWith("b") ? t6[parseInt(e9.slice(1), 10) - 1] : parseFloat(e9);
}
function r3(e9, t6, n21, r8) {
  if ("number" == typeof n21 && "number" == typeof r8) return n21 + r8;
  let l18, o11, s12;
  "number" == typeof n21 ? (s12 = r8, l18 = s12.length, o11 = new Float32Array(l18), o11.fill(n21)) : (l18 = n21.length, o11 = n21, r8.constructor === Number ? (s12 = new Float32Array(l18), s12.fill(r8)) : s12 = r8);
  const a28 = new Float32Array(l18);
  switch (t6) {
    case "+":
      for (let t7 = 0; t7 < l18; t7++) (null == e9 || e9[t7]) && (a28[t7] = o11[t7] + s12[t7]);
      break;
    case "-":
      for (let t7 = 0; t7 < l18; t7++) (null == e9 || e9[t7]) && (a28[t7] = o11[t7] - s12[t7]);
      break;
    case "*":
      for (let t7 = 0; t7 < l18; t7++) (null == e9 || e9[t7]) && (a28[t7] = o11[t7] * s12[t7]);
      break;
    case "/":
      for (let t7 = 0; t7 < l18; t7++) (null == e9 || e9[t7]) && s12[t7] && (a28[t7] = o11[t7] / s12[t7]);
      break;
    case "(":
    case ")":
      throw new Error("encountered error with custom band index equation");
  }
  return a28;
}
function l5(e9, t6) {
  e9.splice(t6, 1);
  let n21 = 0, r8 = 0;
  do {
    n21 = 0, r8 = 0;
    for (let t7 = 0; t7 < e9.length; t7++) if ("(" === e9[t7]) n21 = t7;
    else if (")" === e9[t7]) {
      r8 = t7;
      break;
    }
    r8 === n21 + 1 && e9.splice(n21, 2);
  } while (r8 === n21 + 1);
  return e9;
}
function o4(e9) {
  if (1 === e9.length) return {
    opIndex: 0,
    numIndex: 0
  };
  let t6 = 0, n21 = 0;
  for (let s12 = 0; s12 < e9.length; s12++) if ("(" === e9[s12]) t6 = s12;
  else if (")" === e9[s12]) {
    n21 = s12;
    break;
  }
  const r8 = 0 === n21 ? e9 : e9.slice(t6 + 1, n21);
  let l18 = -1;
  for (let s12 = 0; s12 < r8.length; s12++) if ("*" === r8[s12] || "/" === r8[s12]) {
    l18 = s12;
    break;
  }
  if (l18 > -1) n21 > 0 && (l18 += t6 + 1);
  else {
    for (let e10 = 0; e10 < r8.length; e10++) if ("+" === r8[e10] || "-" === r8[e10]) {
      l18 = e10;
      break;
    }
    n21 > 0 && (l18 += t6 + 1);
  }
  let o11 = 0;
  for (let s12 = 0; s12 < l18; s12++) "(" === e9[s12] && o11++;
  return {
    opIndex: l18,
    numIndex: l18 - o11
  };
}
function s5(e9, n21, s12) {
  let a28, {
    ops: i29,
    nums: f6
  } = t2(s12, n21);
  if (0 === i29.length) {
    const e10 = 1 === f6.length ? f6[0] : n21[0];
    if (e10 instanceof Float32Array) return [e10];
    const t6 = new Float32Array(n21[0].length);
    return "number" == typeof e10 ? t6.fill(e10) : t6.set(e10), [t6];
  }
  for (; i29.length > 0; ) {
    const {
      numIndex: t6,
      opIndex: n22
    } = o4(i29);
    if (a28 = r3(e9, i29[n22], f6[t6], f6[t6 + 1]), 1 === i29.length) break;
    i29 = l5(i29, n22), f6.splice(t6, 2, a28);
  }
  return [a28];
}

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/bandIndexUtils.js
var o5 = new n({
  0: "custom",
  1: "ndvi",
  2: "savi",
  3: "tsavi",
  4: "msavi",
  5: "gemi",
  6: "pvi",
  7: "gvitm",
  8: "sultan",
  9: "vari",
  10: "gndvi",
  11: "sr",
  12: "ndvi-re",
  13: "sr-re",
  14: "mtvi2",
  15: "rtvi-core",
  16: "ci-re",
  17: "ci-g",
  18: "ndwi",
  19: "evi",
  20: "iron-oxide",
  21: "ferrous-minerals",
  22: "clay-minerals",
  23: "wndwi",
  24: "bai",
  25: "nbr",
  26: "ndbi",
  27: "ndmi",
  28: "ndsi",
  29: "mndwi"
}, {
  useNumericKeys: true
});
function a9(n21, o11) {
  if (!o3(n21)) return n21;
  const {
    equation: a28,
    method: s12
  } = o11, i29 = o11.bandIndexes.map((n22) => n22 - 1), {
    pixels: x4,
    mask: j3
  } = n21;
  let q2;
  switch (s12) {
    case "gndvi":
    case "nbr":
    case "ndbi":
    case "ndvi":
    case "ndvi-re":
    case "ndsi":
    case "ndmi":
    case "mndwi":
      q2 = l6(j3, x4[i29[0]], x4[i29[1]]);
      break;
    case "ndwi":
      q2 = l6(j3, x4[i29[1]], x4[i29[0]]);
      break;
    case "sr":
    case "sr-re":
    case "iron-oxide":
    case "ferrous-minerals":
    case "clay-minerals":
      q2 = c6(j3, x4[i29[0]], x4[i29[1]]);
      break;
    case "ci-g":
    case "ci-re":
      q2 = u6(j3, x4[i29[0]], x4[i29[1]]);
      break;
    case "savi":
      q2 = f5(j3, x4[i29[0]], x4[i29[1]], i29[2] + 1);
      break;
    case "tsavi":
      q2 = w5(j3, x4[i29[0]], x4[i29[1]], i29[2] + 1, i29[3] + 1, i29[4] + 1);
      break;
    case "msavi":
      q2 = h4(j3, x4[i29[0]], x4[i29[1]]);
      break;
    case "gemi":
      q2 = m4(j3, x4[i29[0]], x4[i29[1]]);
      break;
    case "pvi":
      q2 = d3(j3, x4[i29[0]], x4[i29[1]], i29[2] + 1, i29[3] + 1);
      break;
    case "gvitm":
      q2 = g4(j3, [x4[i29[0]], x4[i29[1]], x4[i29[2]], x4[i29[3]], x4[i29[4]], x4[i29[5]]]);
      break;
    case "sultan":
      q2 = y7(j3, [x4[i29[0]], x4[i29[1]], x4[i29[2]], x4[i29[3]], x4[i29[4]]]);
      break;
    case "vari":
      q2 = b2(j3, [x4[i29[0]], x4[i29[1]], x4[i29[2]]]);
      break;
    case "mtvi2":
      q2 = v2(j3, [x4[i29[0]], x4[i29[1]], x4[i29[2]]]);
      break;
    case "rtvi-core":
      q2 = k2(j3, [x4[i29[0]], x4[i29[1]], x4[i29[2]]]);
      break;
    case "evi":
      q2 = A2(j3, [x4[i29[0]], x4[i29[1]], x4[i29[2]]]);
      break;
    case "wndwi":
      q2 = p10(j3, [x4[i29[0]], x4[i29[1]], x4[i29[2]]], i29[3] ? i29[3] + 1 : 0.5);
      break;
    case "bai":
      q2 = F2(j3, x4[i29[0]], x4[i29[1]]);
      break;
    case "custom":
      q2 = s5(j3, x4, a28);
      break;
    default:
      return n21;
  }
  const M4 = null != j3 ? new Uint8Array(j3.length) : null;
  null != j3 && null != M4 && M4.set(j3);
  const U2 = new g({
    width: n21.width,
    height: n21.height,
    pixelType: "f32",
    pixels: q2,
    mask: M4
  });
  return U2.updateStatistics(), U2;
}
function s6(n21, e9, r8, o11) {
  const {
    mask: a28,
    pixels: s12,
    width: i29,
    height: l18
  } = n21, c32 = s12[r8], u18 = s12[e9], f6 = u18.length, w7 = o11 ? new Uint8Array(f6) : new Float32Array(f6), h6 = o11 ? 100 : 1, m12 = o11 ? 100.5 : 0;
  for (let t6 = 0; t6 < f6; t6++) if (null == a28 || a28[t6]) {
    const n22 = c32[t6], e10 = u18[t6], r9 = n22 + e10;
    r9 && (w7[t6] = (n22 - e10) / r9 * h6 + m12);
  }
  const d8 = new g({
    width: i29,
    height: l18,
    mask: a28,
    pixelType: o11 ? "u8" : "f32",
    pixels: [w7]
  });
  return d8.updateStatistics(), d8;
}
function i5(n21) {
  const t6 = new Float32Array(9);
  return t6[3 * n21[0]] = 1, t6[3 * n21[1] + 1] = 1, t6[3 * n21[2] + 2] = 1, t6;
}
function l6(n21, t6, e9) {
  const r8 = e9.length, o11 = new Float32Array(r8);
  for (let a28 = 0; a28 < r8; a28++) if (null == n21 || n21[a28]) {
    const n22 = t6[a28], r9 = e9[a28], s12 = n22 + r9;
    s12 && (o11[a28] = (n22 - r9) / s12);
  }
  return [o11];
}
function c6(n21, t6, e9) {
  const r8 = e9.length, o11 = new Float32Array(r8);
  for (let a28 = 0; a28 < r8; a28++) if (null == n21 || n21[a28]) {
    const n22 = t6[a28], r9 = e9[a28];
    r9 && (o11[a28] = n22 / r9);
  }
  return [o11];
}
function u6(n21, t6, e9) {
  const r8 = t6.length, o11 = new Float32Array(r8);
  for (let a28 = 0; a28 < r8; a28++) if (null == n21 || n21[a28]) {
    const n22 = t6[a28], r9 = e9[a28];
    r9 && (o11[a28] = n22 / r9 - 1);
  }
  return [o11];
}
function f5(n21, t6, e9, r8) {
  const o11 = e9.length, a28 = new Float32Array(o11);
  for (let s12 = 0; s12 < o11; s12++) if (null == n21 || n21[s12]) {
    const n22 = e9[s12], o12 = t6[s12], i29 = o12 + n22 + r8;
    i29 && (a28[s12] = (o12 - n22) / i29 * (1 + r8));
  }
  return [a28];
}
function w5(n21, t6, e9, r8, o11, a28) {
  const s12 = e9.length, i29 = new Float32Array(s12), l18 = -o11 * r8 + a28 * (1 + r8 * r8);
  for (let c32 = 0; c32 < s12; c32++) if (null == n21 || n21[c32]) {
    const n22 = e9[c32], a29 = t6[c32], s13 = o11 * a29 + n22 + l18;
    s13 && (i29[c32] = r8 * (a29 - r8 * n22 - o11) / s13);
  }
  return [i29];
}
function h4(n21, t6, e9) {
  const r8 = e9.length, o11 = new Float32Array(r8);
  for (let a28 = 0; a28 < r8; a28++) if (null == n21 || n21[a28]) {
    const n22 = e9[a28], r9 = t6[a28], s12 = 2 * r9 + 1;
    o11[a28] = 0.5 * (s12 - Math.sqrt(s12 * s12 - 8 * (r9 - n22)));
  }
  return [o11];
}
function m4(n21, t6, e9) {
  const r8 = e9.length, o11 = new Float32Array(r8);
  for (let a28 = 0; a28 < r8; a28++) if (null == n21 || n21[a28]) {
    const n22 = e9[a28], r9 = t6[a28];
    if (1 !== n22 && r9 + n22 + 0.5 !== 0) {
      const t7 = (2 * (r9 * r9 - n22 * n22) + 1.5 * r9 + 0.5 * n22) / (r9 + n22 + 0.5);
      o11[a28] = t7 * (1 - 0.25 * t7) - (n22 - 0.125) / (1 - n22);
    }
  }
  return [o11];
}
function d3(n21, t6, e9, r8, o11) {
  const a28 = e9.length, s12 = new Float32Array(a28), i29 = 1 / Math.sqrt(1 + r8 * r8);
  for (let l18 = 0; l18 < a28; l18++) if (null == n21 || n21[l18]) {
    const n22 = e9[l18], a29 = t6[l18];
    s12[l18] = (a29 - r8 * n22 - o11) * i29;
  }
  return [s12];
}
function g4(n21, t6) {
  const [e9, r8, o11, a28, s12, i29] = t6, l18 = e9.length, c32 = new Float32Array(l18);
  for (let u18 = 0; u18 < l18; u18++) (null == n21 || n21[u18]) && (c32[u18] = -0.2848 * e9[u18] - 0.2435 * r8[u18] - 0.5436 * o11[u18] + 0.7243 * a28[u18] + 0.084 * s12[u18] - 0.18 * i29[u18]);
  return [c32];
}
function y7(n21, t6) {
  const [e9, r8, o11, a28, s12] = t6, i29 = e9.length, l18 = new Float32Array(i29), c32 = new Float32Array(i29), u18 = new Float32Array(i29);
  for (let f6 = 0; f6 < i29; f6++) (null == n21 || n21[f6]) && (l18[f6] = s12[f6] ? a28[f6] / s12[f6] * 100 : 0, c32[f6] = e9[f6] ? a28[f6] / e9[f6] * 100 : 0, u18[f6] = o11[f6] ? r8[f6] / o11[f6] * (a28[f6] / o11[f6]) * 100 : 0);
  return [l18, c32, u18];
}
function b2(n21, t6) {
  const [e9, r8, o11] = t6, a28 = e9.length, s12 = new Float32Array(a28);
  for (let i29 = 0; i29 < a28; i29++) if (null == n21 || n21[i29]) for (i29 = 0; i29 < a28; i29++) {
    const n22 = e9[i29], t7 = r8[i29], a29 = t7 + n22 - o11[i29];
    a29 && (s12[i29] = (t7 - n22) / a29);
  }
  return [s12];
}
function v2(n21, t6) {
  const [e9, r8, o11] = t6, a28 = e9.length, s12 = new Float32Array(a28);
  for (let i29 = 0; i29 < a28; i29++) if (null == n21 || n21[i29]) for (i29 = 0; i29 < a28; i29++) {
    const n22 = e9[i29], t7 = r8[i29], a29 = o11[i29], l18 = Math.sqrt((2 * n22 + 1) ** 2 - (6 * n22 - 5 * Math.sqrt(t7)) - 0.5);
    if (l18) {
      const e10 = 1.5 * (1.2 * (n22 - a29) - 2.5 * (t7 - a29));
      s12[i29] = e10 / l18;
    }
  }
  return [s12];
}
function k2(n21, t6) {
  const [e9, r8, o11] = t6, a28 = e9.length, s12 = new Float32Array(a28);
  for (let i29 = 0; i29 < a28; i29++) if (null == n21 || n21[i29]) for (i29 = 0; i29 < a28; i29++) {
    const n22 = e9[i29], t7 = r8[i29], a29 = o11[i29];
    s12[i29] = 100 * (n22 - t7) - 10 * (n22 - a29);
  }
  return [s12];
}
function A2(n21, t6) {
  const [e9, r8, o11] = t6, a28 = e9.length, s12 = new Float32Array(a28);
  for (let i29 = 0; i29 < a28; i29++) if (null == n21 || n21[i29]) for (i29 = 0; i29 < a28; i29++) {
    const n22 = e9[i29], t7 = r8[i29], a29 = n22 + 6 * t7 - 7.5 * o11[i29] + 1;
    a29 && (s12[i29] = 2.5 * (n22 - t7) / a29);
  }
  return [s12];
}
function p10(n21, t6, e9 = 0.5) {
  const [r8, o11, a28] = t6, s12 = o11.length, i29 = new Float32Array(s12);
  for (let l18 = 0; l18 < s12; l18++) if (null == n21 || n21[l18]) for (l18 = 0; l18 < s12; l18++) {
    const n22 = r8[l18], t7 = o11[l18], s13 = a28[l18], c32 = n22 + e9 * t7 + (1 - e9) * s13;
    c32 && (i29[l18] = (n22 - e9 * t7 - (1 - e9) * s13) / c32);
  }
  return [i29];
}
function F2(n21, t6, e9) {
  const r8 = e9.length, o11 = new Float32Array(r8);
  for (let a28 = 0; a28 < r8; a28++) if (null == n21 || n21[a28]) for (a28 = 0; a28 < r8; a28++) {
    const n22 = (0.1 - t6[a28]) ** 2 + (0.06 - e9[a28]) ** 2;
    n22 && (o11[a28] = 1 / n22);
  }
  return [o11];
}

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/BandArithmeticFunctionArguments.js
var i6;
var p11 = i6 = class extends p4 {
  constructor() {
    super(...arguments), this.method = "custom";
  }
  clone() {
    return new i6({
      method: this.method,
      bandIndexes: this.bandIndexes,
      raster: a(this.raster)
    });
  }
};
e([y({
  json: {
    type: String,
    write: true
  }
})], p11.prototype, "bandIndexes", void 0), e([o2(o5)], p11.prototype, "method", void 0), p11 = i6 = e([a2("esri.layers.support.rasterFunctions.BandArithmeticFunctionArguments")], p11);
var a10 = p11;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/BandArithmeticFunction.js
var o6 = /* @__PURE__ */ new Set(["vari", "mtvi2", "rtvi-core", "evi"]);
var c7 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "BandArithmetic", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    this.outputPixelType = this._getOutputPixelType("f32");
    const e9 = this.sourceRasterInfos[0];
    if (e9.bandCount < 2) return {
      success: false,
      supportsGPU: false,
      error: "band-arithmetic-function: source raster has insufficient amount of raster bands"
    };
    const s12 = e9.clone();
    s12.pixelType = this.outputPixelType, s12.bandCount = "sultan" === this.functionArguments.method ? 3 : 1, this._removeStatsHistColormapVAT(s12), s12.keyProperties = __spreadProps(__spreadValues({}, s12.keyProperties), {
      BandProperties: void 0
    }), this.rasterInfo = s12;
    return {
      success: true,
      supportsGPU: !["custom", "gvitm", "sultan"].includes(this.functionArguments.method)
    };
  }
  _processPixels(e9) {
    const s12 = e9.pixelBlocks?.[0];
    if (null == s12) return s12;
    const {
      method: t6,
      bandIndexes: r8
    } = this.functionArguments, i29 = r8.split(" ").map((e10) => parseFloat(e10));
    return a9(s12, {
      method: t6,
      bandIndexes: i29,
      equation: r8
    });
  }
  _getWebGLParameters() {
    const e9 = this.functionArguments.bandIndexes.split(" ").map((e10) => parseFloat(e10) - 1);
    2 === e9.length && e9.push(0);
    const s12 = this.isInputBandIdsSwizzled ? [0, 1, 2] : e9;
    let t6, r8;
    const n21 = new Float32Array(3), {
      method: a28
    } = this.functionArguments;
    switch (a28) {
      case "gndvi":
      case "nbr":
      case "ndbi":
      case "ndvi":
      case "ndvi-re":
      case "ndsi":
      case "ndmi":
      case "mndwi":
        t6 = i5([s12[0], s12[1], 0]), r8 = "ndxi";
        break;
      case "ndwi":
        t6 = i5([s12[1], s12[0], 0]), r8 = "ndxi";
        break;
      case "sr":
      case "sr-re":
      case "iron-oxide":
      case "ferrous-minerals":
      case "clay-minerals":
        t6 = i5([s12[0], s12[1], 0]), r8 = "sr";
        break;
      case "ci-g":
      case "ci-re":
        t6 = i5([s12[0], s12[1], 0]), r8 = "ci";
        break;
      case "savi":
        t6 = i5([s12[0], s12[1], 0]), r8 = "savi", n21[0] = e9[2] + 1;
        break;
      case "tsavi":
        t6 = i5([s12[0], s12[1], 0]), r8 = "tsavi", n21[0] = e9[2] + 1, n21[1] = e9[3] + 1, n21[2] = e9[4] + 1;
        break;
      case "msavi":
        t6 = i5([s12[0], s12[1], 0]), r8 = "msavi";
        break;
      case "gemi":
        t6 = i5([s12[0], s12[1], 0]), r8 = "gemi";
        break;
      case "pvi":
        t6 = i5([s12[0], s12[1], 0]), r8 = "tsavi", n21[0] = e9[2] + 1, n21[1] = e9[3] + 1;
        break;
      case "vari":
        t6 = i5([s12[0], s12[1], s12[2]]), r8 = "vari";
        break;
      case "mtvi2":
        t6 = i5([s12[0], s12[1], s12[2]]), r8 = "mtvi";
        break;
      case "rtvi-core":
        t6 = i5([s12[0], s12[1], s12[2]]), r8 = "rtvicore";
        break;
      case "evi":
        t6 = i5([s12[0], s12[1], s12[2]]), r8 = "evi";
        break;
      case "wndwi":
        t6 = i5([s12[0], s12[1], 0]), r8 = "wndwi", n21[0] = e9[3] ? e9[3] + 1 : 0.5;
        break;
      case "bai":
        t6 = i5([s12[1], s12[0], 0]), r8 = "bai";
        break;
      default:
        t6 = i5([0, 1, 2]), r8 = "custom";
    }
    return {
      bandIndexMat3: t6,
      indexType: r8,
      adjustments: n21
    };
  }
  _getInputBandIds(e9) {
    if ("custom" === this.functionArguments.method) return e9;
    const s12 = this.functionArguments.bandIndexes.split(" ").map((e10) => parseFloat(e10) - 1), t6 = e9.length, r8 = s12.map((e10) => e10 >= t6 ? t6 - 1 : e10), n21 = o6.has(this.functionArguments.method) ? 3 : 2, i29 = r8.slice(0, n21).map((s13) => e9[s13]);
    return 2 === i29.length && i29.push(0), i29;
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], c7.prototype, "functionName", void 0), e([y({
  type: a10,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], c7.prototype, "functionArguments", void 0), e([y()], c7.prototype, "rasterArgumentNames", void 0), c7 = e([a2("esri.layers.support.rasterFunctions.BandArithmeticFunction")], c7);
var u7 = c7;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/ClipFunctionArguments.js
var c8;
var n7 = new n({
  1: "outside",
  2: "inside"
}, {
  useNumericKeys: true
});
var m5 = c8 = class extends p4 {
  constructor() {
    super(...arguments), this.clippingType = "outside";
  }
  clone() {
    return new c8({
      clippingGeometry: this.clippingGeometry.clone(),
      clippingType: this.clippingType
    });
  }
};
e([y({
  types: n2,
  json: {
    read: y2,
    write: true
  }
})], m5.prototype, "clippingGeometry", void 0), e([y({
  json: {
    read: n7.read,
    write: n7.write
  }
})], m5.prototype, "clippingType", void 0), m5 = c8 = e([a2("esri.layers.support.rasterFunctions.ClipFunctionArguments")], m5);
var a11 = m5;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/ClipFunction.js
var i7 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "Clip", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = true;
  }
  _bindSourceRasters() {
    const t6 = this.sourceRasterInfos[0].clone();
    return this.outputPixelType = this._getOutputPixelType(t6.pixelType), t6.pixelType = this.outputPixelType, this.rasterInfo = t6, {
      success: true,
      supportsGPU: true
    };
  }
  _processPixels(t6) {
    return t6.pixelBlocks?.[0];
  }
  _getWebGLParameters() {
    const {
      clippingGeometry: t6,
      clippingType: e9
    } = this.functionArguments;
    return {
      clippingGeometry: t6.toJSON(),
      clippingType: e9
    };
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], i7.prototype, "functionName", void 0), e([y({
  type: a11,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], i7.prototype, "functionArguments", void 0), e([y()], i7.prototype, "rasterArgumentNames", void 0), e([y()], i7.prototype, "isNoopProcess", void 0), i7 = e([a2("esri.layers.support.rasterFunctions.ClipFunction")], i7);
var p12 = i7;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/ColormapFunctionArguments.js
var i8;
var u8 = i8 = class extends p4 {
  castColormapName(o11) {
    if (!o11) return null;
    const r8 = o11.toLowerCase();
    return C.includes(r8) ? r8 : null;
  }
  readColorRamp(o11) {
    return p(o11);
  }
  readColorRampName(o11, r8) {
    if (!o11) return null;
    const e9 = a3.jsonValues.find((r9) => r9.toLowerCase() === o11.toLowerCase());
    return e9 ? a3.fromJSON(e9) : null;
  }
  clone() {
    return new i8({
      colormap: a(this.colormap),
      colormapName: this.colormapName,
      colorRamp: this.colorRamp?.clone(),
      colorRampName: this.colorRampName
    });
  }
};
e([y({
  type: [[Number]],
  json: {
    write: true
  }
})], u8.prototype, "colormap", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], u8.prototype, "colormapName", void 0), e([s2("colormapName")], u8.prototype, "castColormapName", null), e([y({
  types: m,
  json: {
    write: true
  }
})], u8.prototype, "colorRamp", void 0), e([o("colorRamp")], u8.prototype, "readColorRamp", null), e([y({
  type: a3.apiValues,
  json: {
    type: a3.jsonValues,
    write: a3.write
  }
})], u8.prototype, "colorRampName", void 0), e([o("colorRampName")], u8.prototype, "readColorRampName", null), u8 = i8 = e([a2("esri.layers.support.rasterFunctions.ColormapFunctionArguments")], u8);
var d4 = u8;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/colormaps.js
var t3 = [[36, 0, 255], [36, 0, 255], [36, 0, 255], [36, 0, 255], [112, 75, 3], [113, 76, 3], [114, 77, 3], [115, 77, 3], [116, 78, 3], [117, 79, 3], [118, 79, 3], [119, 80, 3], [121, 81, 4], [122, 82, 4], [123, 82, 4], [124, 83, 4], [125, 84, 4], [126, 84, 4], [127, 85, 4], [128, 86, 4], [129, 86, 4], [130, 87, 4], [131, 88, 4], [132, 89, 4], [133, 89, 4], [134, 90, 4], [135, 91, 4], [136, 91, 4], [137, 92, 4], [138, 93, 4], [139, 94, 4], [140, 94, 4], [142, 95, 5], [143, 96, 5], [144, 96, 5], [145, 97, 5], [146, 98, 5], [147, 99, 5], [148, 99, 5], [149, 100, 5], [150, 101, 5], [151, 101, 5], [152, 102, 5], [153, 103, 5], [154, 104, 5], [155, 104, 5], [156, 105, 5], [157, 106, 5], [158, 106, 5], [159, 107, 5], [160, 108, 5], [161, 108, 5], [162, 109, 5], [164, 110, 6], [165, 111, 6], [166, 111, 6], [167, 112, 6], [168, 113, 6], [169, 113, 6], [170, 114, 6], [171, 115, 6], [172, 116, 6], [173, 116, 6], [174, 117, 6], [245, 0, 0], [245, 5, 0], [245, 10, 0], [246, 15, 0], [246, 20, 0], [246, 25, 0], [246, 30, 0], [247, 35, 0], [247, 40, 0], [247, 45, 0], [247, 50, 0], [247, 55, 0], [248, 60, 0], [248, 65, 0], [248, 70, 0], [248, 75, 0], [249, 81, 0], [249, 86, 0], [249, 91, 0], [249, 96, 0], [250, 101, 0], [250, 106, 0], [250, 111, 0], [250, 116, 0], [250, 121, 0], [251, 126, 0], [251, 131, 0], [251, 136, 0], [251, 141, 0], [252, 146, 0], [252, 151, 0], [252, 156, 0], [252, 156, 0], [251, 159, 0], [250, 162, 0], [249, 165, 0], [248, 168, 0], [247, 171, 0], [246, 174, 0], [245, 177, 0], [245, 179, 0], [244, 182, 0], [243, 185, 0], [242, 188, 0], [241, 191, 0], [240, 194, 0], [239, 197, 0], [238, 200, 0], [237, 203, 0], [236, 206, 0], [235, 209, 0], [234, 212, 0], [233, 215, 0], [232, 218, 0], [231, 221, 0], [230, 224, 0], [230, 226, 0], [229, 229, 0], [228, 232, 0], [227, 235, 0], [226, 238, 0], [225, 241, 0], [224, 244, 0], [223, 247, 0], [165, 247, 0], [163, 244, 0], [161, 240, 0], [158, 237, 0], [156, 233, 1], [154, 230, 1], [152, 227, 1], [149, 223, 1], [147, 220, 1], [145, 216, 1], [143, 213, 1], [140, 210, 2], [138, 206, 2], [136, 203, 2], [134, 200, 2], [132, 196, 2], [129, 193, 2], [127, 189, 2], [125, 186, 3], [123, 183, 3], [120, 179, 3], [118, 176, 3], [116, 172, 3], [114, 169, 3], [111, 166, 3], [109, 162, 4], [107, 159, 4], [105, 155, 4], [103, 152, 4], [100, 149, 4], [98, 145, 4], [96, 142, 4], [94, 138, 5], [91, 135, 5], [89, 132, 5], [87, 128, 5], [85, 125, 5], [82, 121, 5], [80, 118, 5], [78, 115, 6], [76, 111, 6], [73, 108, 6], [71, 105, 6], [69, 101, 6], [67, 98, 6], [65, 94, 6], [62, 91, 7], [60, 88, 7], [58, 84, 7], [56, 81, 7], [53, 77, 7], [51, 74, 7], [49, 71, 7], [47, 67, 8], [44, 64, 8], [42, 60, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8]];
var o7 = [[36, 0, 255], [36, 0, 255], [36, 0, 255], [36, 0, 255], [245, 20, 0], [245, 24, 0], [245, 29, 0], [245, 31, 0], [247, 33, 0], [247, 33, 0], [247, 37, 0], [247, 41, 0], [247, 41, 0], [247, 41, 0], [247, 45, 0], [247, 45, 0], [247, 47, 0], [247, 49, 0], [247, 49, 0], [247, 54, 0], [247, 54, 0], [247, 56, 0], [247, 58, 0], [247, 58, 0], [250, 62, 0], [250, 62, 0], [250, 62, 0], [250, 67, 0], [250, 67, 0], [250, 67, 0], [250, 69, 0], [250, 71, 0], [250, 71, 0], [250, 75, 0], [250, 75, 0], [250, 78, 0], [250, 79, 0], [250, 79, 0], [250, 79, 0], [250, 81, 0], [250, 83, 0], [250, 83, 0], [250, 87, 0], [250, 87, 0], [250, 90, 0], [250, 92, 0], [252, 93, 0], [252, 93, 0], [252, 97, 0], [252, 97, 0], [252, 97, 0], [252, 97, 0], [252, 101, 0], [252, 101, 0], [252, 101, 0], [252, 101, 0], [252, 105, 0], [252, 105, 0], [252, 107, 0], [252, 109, 0], [252, 109, 0], [252, 113, 13], [255, 118, 20], [255, 119, 23], [255, 121, 25], [255, 126, 33], [255, 132, 38], [255, 133, 40], [255, 135, 43], [255, 141, 48], [255, 144, 54], [255, 150, 59], [255, 152, 61], [255, 153, 64], [255, 159, 69], [255, 163, 77], [255, 165, 79], [255, 168, 82], [255, 174, 87], [255, 176, 92], [255, 181, 97], [255, 183, 99], [255, 186, 102], [255, 191, 107], [255, 197, 115], [255, 201, 120], [255, 203, 123], [255, 205, 125], [255, 209, 130], [255, 214, 138], [255, 216, 141], [255, 218, 143], [255, 224, 150], [255, 228, 156], [255, 234, 163], [255, 236, 165], [255, 238, 168], [255, 243, 173], [255, 248, 181], [255, 252, 186], [253, 252, 186], [250, 252, 187], [244, 250, 180], [238, 247, 176], [234, 246, 173], [231, 245, 169], [223, 240, 163], [217, 237, 157], [211, 235, 150], [205, 233, 146], [200, 230, 142], [195, 227, 136], [189, 224, 132], [184, 222, 126], [180, 220, 123], [174, 217, 119], [169, 214, 114], [163, 212, 108], [160, 210, 105], [154, 207, 101], [148, 204, 96], [143, 201, 93], [138, 199, 88], [134, 197, 84], [130, 194, 81], [126, 191, 77], [117, 189, 70], [115, 186, 68], [112, 184, 64], [106, 181, 60], [100, 179, 55], [94, 176, 49], [92, 174, 47], [90, 173, 45], [81, 168, 37], [75, 166, 33], [71, 163, 28], [66, 160, 24], [62, 158, 21], [56, 156, 14], [51, 153, 0], [51, 153, 0], [51, 153, 0], [50, 150, 0], [50, 150, 0], [50, 150, 0], [50, 150, 0], [49, 148, 0], [49, 148, 0], [49, 148, 0], [48, 145, 0], [48, 145, 0], [48, 145, 0], [48, 145, 0], [48, 143, 0], [48, 143, 0], [48, 143, 0], [48, 143, 0], [47, 140, 0], [47, 140, 0], [47, 140, 0], [47, 140, 0], [46, 138, 0], [46, 138, 0], [46, 138, 0], [46, 138, 0], [45, 135, 0], [45, 135, 0], [45, 135, 0], [45, 135, 0], [44, 133, 0], [44, 133, 0], [44, 133, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [42, 128, 0], [42, 128, 0], [42, 128, 0], [42, 125, 0], [42, 125, 0], [42, 125, 0], [42, 125, 0], [41, 122, 0], [41, 122, 0], [41, 122, 0], [41, 122, 0], [40, 120, 0], [40, 120, 0], [40, 120, 0], [40, 120, 0], [40, 120, 0], [39, 117, 0], [39, 117, 0], [39, 117, 0], [39, 117, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0]];
function e6(t6, o11) {
  const e9 = [], n21 = [];
  for (let r8 = 0; r8 < t6.length - 1; r8++) e9.push({
    type: "algorithmic",
    algorithm: "esriHSVAlgorithm",
    fromColor: t6[r8].slice(1),
    toColor: t6[r8 + 1].slice(1)
  }), n21.push(t6[r8 + 1][0] - t6[r8][0]);
  const s12 = t6[t6.length - 1][0];
  return w3({
    type: "multipart",
    colorRamps: e9
  }, {
    numColors: s12,
    weights: o11 = o11 ?? n21
  });
}
function n8() {
  return e6([[0, 0, 191, 191], [51, 0, 0, 255], [102, 255, 0, 255], [153, 255, 0, 127], [204, 191, 63, 127], [256, 20, 20, 20]]);
}
function s7() {
  const r8 = e6([[0, 255, 255, 255], [70, 0, 255, 0], [80, 205, 173, 193], [100, 150, 150, 150], [110, 120, 51, 100], [130, 120, 100, 200], [140, 28, 3, 144], [160, 6, 0, 55], [180, 10, 25, 30], [201, 6, 7, 27]]);
  for (let t6 = r8.length; t6 < 256; t6++) r8.push([6, 27, 7]);
  return r8;
}
function l7() {
  return w3({
    type: "algorithmic",
    algorithm: "esriHSVAlgorithm",
    fromColor: [0, 0, 0],
    toColor: [255, 255, 255]
  });
}
function i9() {
  const r8 = [];
  for (let t6 = 0; t6 < 256; t6++) {
    const t7 = [];
    for (let r9 = 0; r9 < 3; r9++) t7.push(Math.round(255 * Math.random()));
    r8.push(t7);
  }
  return r8;
}
function a12() {
  return e6([[0, 38, 41, 54], [69, 79, 82, 90], [131, 156, 156, 156], [256, 253, 253, 241]], [0.268, 0.238, 0.495]);
}
function c9(r8) {
  let e9;
  switch (r8) {
    case "elevation":
      e9 = n8();
      break;
    case "gray":
      e9 = l7();
      break;
    case "hillshade":
      e9 = a12();
      break;
    case "ndvi":
      e9 = t3;
      break;
    case "ndvi2":
      e9 = s7();
      break;
    case "ndvi3":
      e9 = o7;
      break;
    case "random":
      e9 = i9();
  }
  return e9 ? (e9 = e9.map((r9, t6) => [t6, ...r9]), e9) : null;
}

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/ColormapFunction.js
var m6 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "Colormap", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = true;
  }
  _bindSourceRasters() {
    const o11 = this.sourceRasterInfos[0];
    if (o11.bandCount > 1) return {
      success: false,
      supportsGPU: false,
      error: "colormap-function: source data must be single band"
    };
    let {
      colormap: r8,
      colormapName: t6,
      colorRamp: s12,
      colorRampName: e9
    } = this.functionArguments;
    if (!r8?.length) if (s12) this.colorRamp = s12, r8 = B(s12, {
      interpolateAlpha: true
    });
    else if (e9) {
      const o12 = c2(e9);
      o12 && (r8 = B(o12), this.colorRamp = p(o12));
    } else t6 && (r8 = c9(t6));
    if (!r8?.length) return {
      success: false,
      supportsGPU: false,
      error: "colormap-function: missing colormap argument"
    };
    const p22 = this._getOutputPixelType(o11.pixelType);
    this.outputPixelType = p22.startsWith("f") ? "s32" : p22;
    const m12 = o11.clone();
    return m12.pixelType = this.outputPixelType, m12.colormap = r8, m12.bandCount = 1, this.rasterInfo = m12, {
      success: true,
      supportsGPU: true
    };
  }
  _processPixels(o11) {
    let r8 = o11.pixelBlocks?.[0];
    return !r8 || i(r8.pixelType) || (r8 = r8.clone(), r8.clamp(this.outputPixelType)), r8;
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], m6.prototype, "functionName", void 0), e([y({
  type: d4,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], m6.prototype, "functionArguments", void 0), e([y()], m6.prototype, "rasterArgumentNames", void 0), e([y()], m6.prototype, "isNoopProcess", void 0), e([y({
  json: {
    write: true
  }
})], m6.prototype, "indexedColormap", void 0), e([y()], m6.prototype, "colorRamp", void 0), m6 = e([a2("esri.layers.support.rasterFunctions.ColormapFunction")], m6);
var u9 = m6;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/CompositeBandFunctionArguments.js
var a13;
var c10 = a13 = class extends p4 {
  constructor() {
    super(...arguments), this.rasters = [];
  }
  writeRasters(r8, s12) {
    s12.rasters = r8.map((r9) => "number" == typeof r9 || "string" == typeof r9 ? r9 : r9.toJSON());
  }
  clone() {
    return new a13({
      rasters: a(this.rasters)
    });
  }
};
e([y({
  json: {
    write: true
  }
})], c10.prototype, "rasters", void 0), e([r("rasters")], c10.prototype, "writeRasters", null), c10 = a13 = e([a2("esri.layers.support.rasterFunctions.CompositeBandFunctionArguments")], c10);
var i10 = c10;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/CompositeBandFunction.js
var i11 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "CompositeBand", this.functionArguments = null, this.rasterArgumentNames = ["rasters"];
  }
  _bindSourceRasters() {
    const {
      sourceRasterInfos: t6
    } = this, e9 = t6[0];
    this.outputPixelType = this._getOutputPixelType(e9.pixelType);
    const s12 = e9.clone();
    if (s12.attributeTable = null, s12.colormap = null, s12.pixelType = this.outputPixelType, s12.bandCount = t6.map(({
      bandCount: t7
    }) => t7).reduce((t7, e10) => t7 + e10), t6.every(({
      statistics: t7
    }) => null != t7 && t7.length)) {
      const e10 = [];
      t6.forEach(({
        statistics: t7
      }) => null != t7 && e10.push(...t7)), s12.statistics = e10;
    }
    if (t6.every(({
      histograms: t7
    }) => null != t7 && t7.length)) {
      const e10 = [];
      t6.forEach(({
        histograms: t7
      }) => null != t7 && e10.push(...t7)), s12.histograms = e10;
    }
    s12.bandCount > 1 && (s12.colormap = null, s12.attributeTable = null);
    const r8 = t6.every((t7) => t7.keyProperties.BandProperties?.length) ? t6.flatMap((t7) => t7.keyProperties.BandProperties) : void 0;
    s12.keyProperties = __spreadProps(__spreadValues({}, s12.keyProperties), {
      BandProperties: r8
    }), this.rasterInfo = s12;
    return {
      success: true,
      supportsGPU: s12.bandCount <= 3
    };
  }
  _processPixels(t6) {
    const {
      pixelBlocks: e9
    } = t6;
    if (!e9) return null;
    const s12 = e9?.[0];
    return null == s12 ? null : r2(e9);
  }
  _getWebGLParameters() {
    return {
      bandCount: this.rasterInfo.bandCount
    };
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], i11.prototype, "functionName", void 0), e([y({
  type: i10,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], i11.prototype, "functionArguments", void 0), e([y()], i11.prototype, "rasterArgumentNames", void 0), i11 = e([a2("esri.layers.support.rasterFunctions.CompositeBandFunction")], i11);
var a14 = i11;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/changeDetectionUtils.js
var n9 = new n({
  0: "difference",
  1: "relative-difference",
  2: "categorical",
  3: "euclidean-distance",
  4: "angle-difference",
  5: "band-with-most-change"
}, {
  useNumericKeys: true
});
var s8 = new n({
  0: "all",
  1: "changed",
  2: "unchanged"
}, {
  useNumericKeys: true
});
function i12(e9, n21, s12, i29) {
  const [f6, h6] = e9, m12 = i(s12) && !i(f6.pixelType) && !i(h6.pixelType), p22 = [f6.mask, h6.mask].filter((e10) => e10), u18 = g.combineBandMasks(p22), g6 = e9.map((e10) => e10.pixels[0]), {
    width: k4,
    height: x4
  } = f6, b3 = g.createEmptyBand(s12, k4 * x4);
  switch (n21) {
    case "difference":
    case "relative-difference":
      o8({
        bands: g6,
        mask: u18,
        outBand: b3,
        isRoundingNeeded: m12,
        isRelative: "relative-difference" === n21
      });
      break;
    case "categorical":
      c11(__spreadValues({
        bands: g6,
        mask: u18,
        outBand: b3
      }, i29));
      break;
    case "euclidean-distance":
      l8({
        pixels: e9.map((e10) => e10.pixels),
        mask: u18,
        outBand: b3
      });
      break;
    case "angle-difference":
      r4({
        pixels: e9.map((e10) => e10.pixels),
        mask: u18,
        outBand: b3
      });
      break;
    case "band-with-most-change":
      d5({
        pixels: e9.map((e10) => e10.pixels),
        mask: u18,
        outBand: b3
      });
  }
  const B4 = new g({
    width: k4,
    height: x4,
    pixels: [b3],
    pixelType: s12,
    mask: u18
  });
  return B4.updateStatistics(), B4;
}
function o8(e9) {
  const {
    bands: [t6, a28],
    mask: n21,
    isRelative: s12,
    isRoundingNeeded: i29,
    outBand: o11
  } = e9, c32 = t6.length;
  for (let l18 = 0; l18 < c32; l18++) if (!n21 || n21[l18]) {
    let e10 = t6[l18] - a28[l18];
    if (s12) {
      const n22 = Math.max(Math.abs(t6[l18]) - Math.abs(a28[l18]));
      e10 = n22 > 0 ? e10 / n22 : 0;
    }
    o11[l18] = i29 ? Math.round(e10) : e10;
  }
}
function c11(e9) {
  const {
    bands: [t6, a28],
    categoryIndexLookups: [n21, s12],
    classNames: [i29, o11],
    mask: c32,
    keepMethod: l18,
    outBand: r8
  } = e9, d8 = t6.length, f6 = i29.length, h6 = o11.length, m12 = f6 * h6, p22 = m12 + 1, u18 = m12 + 2;
  for (let g6 = 0; g6 < d8; g6++) if (!c32 || c32[g6]) {
    const e10 = t6[g6], c33 = a28[g6], d9 = n21[e10], f7 = s12[c33], k4 = i29[d9], x4 = o11[f7];
    r8[g6] = null == d9 || null == f7 ? m12 : "changed" === l18 && k4 === x4 ? p22 : "unchanged" === l18 && k4 !== x4 ? u18 : d9 * h6 + f7;
  }
}
function l8(e9) {
  const {
    pixels: [t6, a28],
    mask: n21,
    outBand: s12
  } = e9, i29 = t6[0].length, o11 = t6.length;
  for (let c32 = 0; c32 < i29; c32++) if (!n21 || n21[c32]) {
    let e10 = 0;
    for (let n22 = 0; n22 < o11; n22++) {
      const s13 = t6[n22][c32] - a28[n22][c32];
      e10 += s13 * s13;
    }
    s12[c32] = Math.sqrt(e10);
  }
}
function r4(e9) {
  const {
    pixels: [t6, a28],
    mask: n21,
    outBand: s12
  } = e9, i29 = t6[0].length, o11 = t6.length;
  for (let c32 = 0; c32 < i29; c32++) if (!n21 || n21[c32]) {
    let e10 = 0, n22 = 0, i30 = 0;
    for (let s13 = 0; s13 < o11; s13++) {
      const o12 = t6[s13][c32], l19 = a28[s13][c32];
      e10 += o12 * l19, n22 += o12 * o12, i30 += l19 * l19;
    }
    const l18 = Math.sqrt(n22 * i30);
    s12[c32] = l18 ? Math.acos(e10 / l18) : 1.5707963267948966;
  }
}
function d5(e9) {
  const {
    pixels: [t6, a28],
    mask: n21,
    outBand: s12
  } = e9, i29 = t6[0].length, o11 = t6.length;
  for (let c32 = 0; c32 < i29; c32++) if (!n21 || n21[c32]) {
    let e10 = 0, n22 = 0;
    for (let s13 = 0; s13 < o11; s13++) {
      const i30 = Math.abs(t6[s13][c32] - a28[s13][c32]);
      i30 > e10 && (e10 = i30, n22 = s13);
    }
    s12[c32] = n22;
  }
}

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/ComputeChangeFunctionArguments.js
var i13;
var c12 = i13 = class extends p4 {
  constructor() {
    super(...arguments), this.method = "difference", this.keepMethod = "all", this.raster2 = void 0;
  }
  get rasters() {
    return [this.raster, this.raster2];
  }
  clone() {
    return new i13({
      raster: this.raster,
      raster2: this.raster2,
      method: this.method,
      keepMethod: this.keepMethod
    });
  }
};
e([o2(n9)], c12.prototype, "method", void 0), e([o2(s8)], c12.prototype, "keepMethod", void 0), e([y({
  json: {
    write: true
  }
})], c12.prototype, "raster2", void 0), e([y({
  readOnly: true
})], c12.prototype, "rasters", null), c12 = i13 = e([a2("esri.layers.support.rasterFunctions.ComputeChangeFunctionArguments")], c12);
var n10 = c12;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/ComputeChangeFunction.js
var l9 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "ComputeChange", this.functionArguments = null, this.rasterArgumentNames = ["raster", "raster2"];
  }
  _bindSourceRasters() {
    const {
      method: e9
    } = this.functionArguments, t6 = this.sourceRasterInfos[0].clone();
    if (this.outputPixelType = this._getOutputPixelType(t6.pixelType), t6.pixelType = this.outputPixelType, this._removeStatsHistColormapVAT(t6), "categorical" === e9) {
      const e10 = this.sourceRasterInfos.map((e11) => e11.attributeTable), s12 = this._getFieldNames(e10, "value"), r8 = e10.map((e11) => this._getClassFieldName(e11));
      if (null == s12[0] || null == s12[1] || null == r8[0] || null == r8[1]) return {
        success: false,
        supportsGPU: false,
        error: "both inputs must have proper attribute table with value and class fields"
      };
      this._updateAttributeTable(t6, s12, r8);
    }
    t6.bandCount = 1, this.rasterInfo = t6;
    return {
      success: true,
      supportsGPU: "difference" === e9 || "relative-difference" === e9
    };
  }
  _processPixels(e9) {
    const {
      pixelBlocks: t6
    } = e9;
    if (null == t6?.[0] || null == t6?.[1]) return null;
    const {
      method: s12
    } = this.functionArguments;
    return i12(t6, s12, this.outputPixelType, this._categoryConfig);
  }
  _getWebGLParameters() {
    const e9 = this.outputPixelType ?? "f32";
    let [t6, s12] = s3(e9);
    const r8 = i(e9);
    return r8 && (t6 -= 1e-4, s12 += 1e-4), {
      method: this.functionArguments.method,
      domainRange: [t6, s12],
      isOutputRounded: r8
    };
  }
  _updateAttributeTable(e9, t6, s12) {
    const n21 = this.sourceRasterInfos.map((e10) => e10.attributeTable), o11 = n21.map((e10, s13) => e10.features.map((e11) => e11.attributes[t6[s13]])), a28 = n21.map((e10, t7) => e10.features.map((e11) => e11.attributes[s12[t7]])), i29 = o11.map((e10) => {
      const t7 = [];
      return e10.forEach((e11, s13) => t7[e11] = s13), t7;
    }), {
      keepMethod: u18
    } = this.functionArguments;
    this._categoryConfig = {
      categoryIndexLookups: i29,
      classNames: a28,
      keepMethod: u18
    };
    const l18 = n21[0].clone();
    l18.fields = [new y3({
      name: "OID",
      type: "oid"
    }), new y3({
      name: "Value",
      type: "integer"
    }), new y3({
      name: "ClassName",
      type: "string"
    }), new y3({
      name: "Class_From",
      type: "string"
    }), new y3({
      name: "Class_To",
      type: "string"
    })];
    const m12 = this._getFieldNames(n21, "red"), p22 = this._getFieldNames(n21, "green"), c32 = this._getFieldNames(n21, "blue"), d8 = [], g6 = 2 === m12.length && 2 === p22.length && 2 === c32.length;
    g6 && (d8.push(...n21.map((e10, t7) => e10.features.map((e11) => [e11.attributes[m12[t7]], e11.attributes[p22[t7]], e11.attributes[c32[t7]]]))), l18.fields.push(new y3({
      name: "Red",
      type: "integer"
    }), new y3({
      name: "Green",
      type: "integer"
    }), new y3({
      name: "Blue",
      type: "integer"
    })));
    const h6 = l18.features[0].clone();
    h6.geometry = null;
    const f6 = [], [y9, C3] = o11.map((e10) => e10.length);
    let b3 = 1;
    for (let r8 = 0; r8 < y9; r8++) {
      const e10 = a28[0][r8];
      for (let t7 = 0; t7 < C3; t7++) {
        const s13 = a28[1][t7];
        if ("changed" === u18 && e10 === s13 || "unchanged" === u18 && e10 !== s13) continue;
        const n22 = h6.clone();
        n22.attributes = {
          OID: b3++,
          Value: r8 * C3 + t7,
          ClassName: e10 === s13 ? e10 : `${e10} -> ${s13}`,
          Class_From: e10,
          Class_To: s13
        }, g6 && (n22.attributes.Red = d8[0][r8][0] + d8[1][t7][0] >> 1, n22.attributes.Green = d8[0][r8][1] + d8[1][t7][1] >> 1, n22.attributes.Blue = d8[0][r8][2] + d8[1][t7][2] >> 1), f6.push(n22);
      }
    }
    if ("changed" === u18) {
      const e10 = h6.clone();
      e10.attributes = {
        OID: b3++,
        Value: y9 * C3 + 1,
        ClassName: "No Change",
        Class_From: "Same",
        Class_To: "Same"
      }, f6.push(e10);
    } else if ("unchanged" === u18) {
      const e10 = h6.clone();
      e10.attributes = {
        OID: b3++,
        Value: y9 * C3 + 2,
        ClassName: "Changed",
        Class_From: "Any",
        Class_To: "Any"
      }, f6.push(e10);
    }
    l18.features = f6, e9.attributeTable = l18;
  }
  _getFieldNames(e9, t6) {
    return e9.map(({
      fields: e10
    }) => e10.find((e11) => e11.name.toLowerCase() === t6)?.name).filter((e10) => e10);
  }
  _getClassFieldName(e9) {
    const t6 = e9.fields.find((e10) => "string" === e10.type && e10.name.toLowerCase().startsWith("class")) ?? e9.fields.find((e10) => "string" === e10.type && e10.name.toLowerCase().includes("class") || e10.name.toLowerCase().includes("type") || e10.name.toLowerCase().includes("name")) ?? e9.fields.find((e10) => "string" === e10.type);
    return t6?.name;
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], l9.prototype, "functionName", void 0), e([y({
  type: n10,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], l9.prototype, "functionArguments", void 0), e([y()], l9.prototype, "rasterArgumentNames", void 0), e([y({
  json: {
    write: true
  }
})], l9.prototype, "_categoryConfig", void 0), l9 = e([a2("esri.layers.support.rasterFunctions.ComputeChangeFunction")], l9);
var m7 = l9;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/ContrastBrightnessFunctionArguments.js
var e7;
var n11 = e7 = class extends p4 {
  constructor() {
    super(...arguments), this.contrastOffset = 0, this.brightnessOffset = 0;
  }
  clone() {
    return new e7({
      contrastOffset: this.contrastOffset,
      brightnessOffset: this.brightnessOffset,
      raster: this.raster
    });
  }
};
e([y({
  json: {
    write: true
  }
})], n11.prototype, "contrastOffset", void 0), e([y({
  json: {
    write: true
  }
})], n11.prototype, "brightnessOffset", void 0), n11 = e7 = e([a2("esri.layers.support.rasterFunctions.ContrastBrightnessFunctionArguments")], n11);
var i14 = n11;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/ContrastBrightnessFunction.js
var u10 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "ContrastBrightness", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.lookup = null;
  }
  _bindSourceRasters() {
    const {
      sourceRasterInfos: t6
    } = this, s12 = t6[0];
    if ("u8" !== s12.pixelType) return {
      success: false,
      supportsGPU: false,
      error: "Only unsigned 8 bit raster is supported by ContrastBrightness function."
    };
    this.outputPixelType = this._getOutputPixelType("u8");
    const r8 = s12.clone();
    this._removeStatsHistColormapVAT(r8), this.rasterInfo = r8;
    const {
      contrastOffset: o11,
      brightnessOffset: e9
    } = this.functionArguments;
    return this.lookup = l2(o11, e9), {
      success: true,
      supportsGPU: true
    };
  }
  _processPixels(t6) {
    const s12 = t6.pixelBlocks?.[0];
    return null == s12 ? null : f2(s12, {
      lut: s12.pixels.map(() => this.lookup),
      offset: 0,
      outputPixelType: "u8"
    });
  }
  _getWebGLParameters() {
    const {
      contrastOffset: t6,
      brightnessOffset: s12
    } = this.functionArguments;
    return {
      contrastOffset: t6,
      brightnessOffset: s12
    };
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], u10.prototype, "functionName", void 0), e([y({
  type: i14,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], u10.prototype, "functionArguments", void 0), e([y()], u10.prototype, "rasterArgumentNames", void 0), e([y({
  json: {
    write: true
  }
})], u10.prototype, "lookup", void 0), u10 = e([a2("esri.layers.support.rasterFunctions.ContrastBrightnessFunction")], u10);
var p13 = u10;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/mirror.js
function o9(o11, t6, f6, r8, l18) {
  const e9 = Math.floor(r8 / 2);
  for (let c32 = 0; c32 < e9; c32++) for (let r9 = 0; r9 < t6; r9++) o11[c32 * t6 + r9] = o11[(l18 - 1 - c32) * t6 + r9], o11[(f6 - 1 - c32) * t6 + r9] = o11[(f6 - l18 + c32) * t6 + r9];
  const n21 = Math.floor(l18 / 2);
  for (let c32 = 0; c32 < f6; c32++) {
    const f7 = c32 * t6;
    for (let r9 = 0; r9 < n21; r9++) o11[f7 + r9] = o11[f7 + l18 - 1 - r9], o11[f7 + t6 - r9 - 1] = o11[f7 + t6 + r9 - l18];
  }
}

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/convolutionUtils.js
var l10 = /* @__PURE__ */ new Map();
function o10(e9) {
  const t6 = Math.sqrt(e9.length), n21 = e9.slice(0, t6), l18 = [1];
  for (let o11 = 1; o11 < t6; o11++) {
    let n22 = null;
    for (let l19 = 0; l19 < t6; l19++) {
      const r8 = e9[l19 + o11 * t6], s12 = e9[l19];
      if (null == n22) {
        if (0 === s12) {
          if (r8) return {
            separable: false,
            row: null,
            col: null
          };
        } else n22 = r8 / s12;
      } else if (r8 / s12 !== n22) return {
        separable: false,
        row: null,
        col: null
      };
    }
    if (null == n22) return {
      separable: false,
      row: null,
      col: null
    };
    l18.push(n22);
  }
  return {
    separable: true,
    row: n21,
    col: l18
  };
}
function r5(e9, t6, n21, l18, o11, r8, s12) {
  const i29 = new Float32Array(t6 * n21), a28 = r8.length, h6 = s12 ? 0 : l18, c32 = s12 ? l18 : 0, p22 = s12 ? 1 : t6;
  for (let u18 = h6; u18 < n21 - h6; u18++) {
    const n22 = u18 * t6;
    for (let s13 = c32; s13 < t6 - c32; s13++) {
      if (o11 && !o11[n22 + s13]) continue;
      let t7 = 0;
      for (let o12 = 0; o12 < a28; o12++) t7 += e9[n22 + s13 + (o12 - l18) * p22] * r8[o12];
      i29[n22 + s13] = t7;
    }
  }
  return i29;
}
function s9(e9, t6, n21, l18, o11, r8, s12) {
  const i29 = new Float32Array(t6 * n21), a28 = Math.floor(l18 / 2), h6 = Math.floor(o11 / 2);
  for (let c32 = a28; c32 < n21 - a28; c32++) {
    const n22 = c32 * t6;
    for (let c33 = h6; c33 < t6 - h6; c33++) {
      if (r8 && !r8[n22 + c33]) continue;
      let p22 = 0;
      for (let r9 = 0; r9 < l18; r9++) for (let l19 = 0; l19 < o11; l19++) p22 += e9[n22 + c33 + (r9 - a28) * t6 + l19 - h6] * s12[r9 * o11 + l19];
      i29[n22 + c33] = p22;
    }
  }
  return i29;
}
function i15(t6, l18, o11 = true) {
  const {
    pixels: r8,
    width: i29,
    height: a28,
    pixelType: h6,
    mask: c32
  } = t6, p22 = r8.length, u18 = [], {
    kernel: f6,
    rows: g6,
    cols: m12
  } = l18;
  for (let e9 = 0; e9 < p22; e9++) {
    const t7 = s9(r8[e9], i29, a28, g6, m12, c32, f6);
    o11 && o9(t7, i29, a28, g6, m12), u18.push(t7);
  }
  return new g({
    width: i29,
    height: a28,
    pixelType: h6,
    pixels: u18,
    mask: c32
  });
}
function a15(t6, l18, o11, s12 = true) {
  const {
    pixels: i29,
    width: a28,
    height: h6,
    pixelType: c32,
    mask: p22
  } = t6, u18 = i29.length, f6 = [], g6 = l18.length, m12 = o11.length, x4 = Math.floor(g6 / 2), w7 = Math.floor(m12 / 2);
  for (let e9 = 0; e9 < u18; e9++) {
    let t7 = r5(i29[e9], a28, h6, x4, p22, l18, true);
    t7 = r5(t7, a28, h6, w7, p22, o11, false), s12 && o9(t7, a28, h6, g6, m12), f6.push(t7);
  }
  return new g({
    width: a28,
    height: h6,
    pixelType: c32,
    pixels: f6,
    mask: p22
  });
}
function h5(e9, t6) {
  const n21 = o10(t6.kernel), l18 = false !== t6.mirrorEdges, r8 = n21.separable ? a15(e9, n21.row, n21.col, l18) : i15(e9, t6, l18), {
    outputPixelType: s12
  } = t6;
  return s12 && r8.clamp(s12), r8;
}
l10.set(l3.none, [0, 0, 0, 0, 1, 0, 0, 0, 0]), l10.set(l3.lineDetectionHorizontal, [-1, -1, -1, 2, 2, 2, -1, -1, -1]), l10.set(l3.lineDetectionVertical, [-1, 2, -1, -1, 2, -1, -1, 2, -1]), l10.set(l3.lineDetectionLeftDiagonal, [2, -1, -1, -1, 2, -1, -1, -1, 2]), l10.set(l3.lineDetectionRightDiagonal, [-1, -1, 2, -1, 2, -1, 2, -1, -1]), l10.set(l3.gradientNorth, [-1, -2, -1, 0, 0, 0, 1, 2, 1]), l10.set(l3.gradientWest, [-1, 0, 1, -2, 0, 2, -1, 0, 1]), l10.set(l3.gradientEast, [1, 0, -1, 2, 0, -2, 1, 0, -1]), l10.set(l3.gradientSouth, [1, 2, 1, 0, 0, 0, -1, -2, -1]), l10.set(l3.gradientNorthEast, [0, -1, -2, 1, 0, -1, 2, 1, 0]), l10.set(l3.gradientNorthWest, [-2, -1, 0, -1, 0, 1, 0, 1, 2]), l10.set(l3.smoothArithmeticMean, [0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111]), l10.set(l3.smoothing3x3, [0.0625, 0.125, 0.0625, 0.125, 0.25, 0.125, 0.0625, 0.125, 0.0625]), l10.set(l3.smoothing5x5, [1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 4, 12, 4, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1]), l10.set(l3.sharpening3x3, [-1, -1, -1, -1, 9, -1, -1, -1, -1]), l10.set(l3.sharpening5x5, [-1, -3, -4, -3, -1, -3, 0, 6, 0, -3, -4, 6, 21, 6, -4, -3, 0, 6, 0, -3, -1, -3, -4, -3, -1]), l10.set(l3.laplacian3x3, [0, -1, 0, -1, 4, -1, 0, -1, 0]), l10.set(l3.laplacian5x5, [0, 0, -1, 0, 0, 0, -1, -2, -1, 0, -1, -2, 17, -2, -1, 0, -1, -2, -1, 0, 0, 0, -1, 0, 0]), l10.set(l3.sobelHorizontal, [-1, -2, -1, 0, 0, 0, 1, 2, 1]), l10.set(l3.sobelVertical, [-1, 0, 1, -2, 0, 2, -1, 0, 1]), l10.set(l3.sharpen, [0, -0.25, 0, -0.25, 2, -0.25, 0, -0.25, 0]), l10.set(l3.sharpen2, [-0.25, -0.25, -0.25, -0.25, 3, -0.25, -0.25, -0.25, -0.25]), l10.set(l3.pointSpread, [-0.627, 0.352, -0.627, 0.352, 2.923, 0.352, -0.627, 0.352, -0.627]);

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/ConvolutionFunctionArguments.js
var p14;
var c13 = p14 = class extends p4 {
  constructor() {
    super(...arguments), this.rows = 3, this.cols = 3, this.kernel = [0, 0, 0, 0, 1, 0, 0, 0, 0];
  }
  set convolutionType(o11) {
    this._set("convolutionType", o11);
    const t6 = l10.get(o11);
    if (!t6 || o11 === l3.userDefined || o11 === l3.none) return;
    const s12 = Math.sqrt(t6.length);
    this._set("kernel", t6), this._set("cols", s12), this._set("rows", s12);
  }
  clone() {
    return new p14({
      cols: this.cols,
      rows: this.rows,
      kernel: [...this.kernel],
      convolutionType: this.convolutionType,
      raster: a(this.raster)
    });
  }
};
e([y({
  json: {
    type: Number,
    write: true
  }
})], c13.prototype, "rows", void 0), e([y({
  json: {
    type: Number,
    write: true
  }
})], c13.prototype, "cols", void 0), e([y({
  json: {
    name: "type",
    type: Number,
    write: true
  }
})], c13.prototype, "convolutionType", null), e([y({
  json: {
    type: [Number],
    write: true
  }
})], c13.prototype, "kernel", void 0), c13 = p14 = e([a2("esri.layers.support.rasterFunctions.ConvolutionFunctionArguments")], c13);
var l11 = c13;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/ConvolutionFunction.js
var c14 = 25;
var l12 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "Convolution", this.rasterArgumentNames = ["raster"];
  }
  get _normalizedKernel() {
    const {
      kernel: t6,
      convolutionType: e9
    } = this.functionArguments, o11 = t6.reduce((t7, e10) => t7 + e10);
    return -1 === e9 || 0 === o11 || 1 === o11 ? t6 : t6.map((t7) => t7 / o11);
  }
  _bindSourceRasters() {
    const {
      convolutionType: t6,
      rows: e9,
      cols: o11,
      kernel: n21
    } = this.functionArguments;
    if (!Object.values(l3).includes(t6)) return {
      success: false,
      supportsGPU: false,
      error: `convolution-function: the specified kernel type is not supported ${t6}`
    };
    if (t6 !== l3.none && e9 * o11 !== n21.length) return {
      success: false,
      supportsGPU: false,
      error: "convolution-function: the specified rows and cols do not match the length of the kernel"
    };
    const r8 = this.sourceRasterInfos[0];
    this.outputPixelType = this._getOutputPixelType(r8.pixelType);
    const i29 = r8.clone();
    i29.pixelType = this.outputPixelType;
    const u18 = [l3.none, l3.sharpen, l3.sharpen2, l3.sharpening3x3, l3.sharpening5x5];
    (-1 === t6 || "u8" !== this.outputPixelType && !u18.includes(t6)) && (i29.statistics = null, i29.histograms = null), i29.colormap = null, i29.attributeTable = null, this.rasterInfo = i29;
    return {
      success: true,
      supportsGPU: n21.length <= c14
    };
  }
  _processPixels(t6) {
    const e9 = t6.pixelBlocks?.[0];
    if (null == e9 || this.functionArguments.convolutionType === l3.none) return e9;
    const {
      rows: o11,
      cols: n21
    } = this.functionArguments, {
      _normalizedKernel: r8
    } = this;
    return h5(e9, {
      kernel: r8,
      rows: o11,
      cols: n21,
      outputPixelType: this.outputPixelType
    });
  }
  _getWebGLParameters() {
    const t6 = new Float32Array(c14);
    return t6.set(this._normalizedKernel), {
      kernelRows: this.functionArguments.rows,
      kernelCols: this.functionArguments.cols,
      kernel: t6,
      clampRange: s3(this.outputPixelType)
    };
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], l12.prototype, "functionName", void 0), e([y({
  type: l11,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], l12.prototype, "functionArguments", void 0), e([y()], l12.prototype, "rasterArgumentNames", void 0), e([y()], l12.prototype, "_normalizedKernel", null), l12 = e([a2("esri.layers.support.rasterFunctions.ConvolutionFunction")], l12);
var p15 = l12;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/CurvatureFunctionArguments.js
var c15;
var u11 = new n({
  0: "standard",
  1: "platform",
  2: "profile"
}, {
  useNumericKeys: true
});
var i16 = c15 = class extends p4 {
  constructor() {
    super(...arguments), this.curvatureType = "standard", this.zFactor = 1;
  }
  readCurvatureType(r8, e9) {
    return u11.fromJSON(e9.type ?? e9.curvatureType ?? 0);
  }
  clone() {
    return new c15({
      curvatureType: this.curvatureType,
      zFactor: this.zFactor,
      raster: this.raster
    });
  }
};
e([y({
  json: {
    write: {
      target: "type"
    }
  }
}), o2(u11)], i16.prototype, "curvatureType", void 0), e([o("curvatureType", ["type", "curvatureType"])], i16.prototype, "readCurvatureType", null), e([y({
  type: Number,
  json: {
    write: true
  }
})], i16.prototype, "zFactor", void 0), i16 = c15 = e([a2("esri.layers.support.rasterFunctions.CurvatureFunctionArguments")], i16);
var n12 = i16;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/CurvatureFunction.js
var u12 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "Curvature", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = false;
  }
  _bindSourceRasters() {
    this.outputPixelType = this._getOutputPixelType("f32");
    const t6 = this.sourceRasterInfos[0].clone();
    return t6.pixelType = this.outputPixelType, t6.bandCount = 1, this._removeStatsHistColormapVAT(t6), this.rasterInfo = t6, this.isGCS = t6.spatialReference?.isGeographic ?? false, {
      success: true,
      supportsGPU: true
    };
  }
  _processPixels(t6) {
    const r8 = t6.pixelBlocks?.[0];
    if (null == r8) return null;
    const {
      zFactor: e9,
      curvatureType: s12
    } = this.functionArguments, {
      extent: o11,
      primaryPixelSizes: u18
    } = t6, c32 = u18?.[0], a28 = c32 ?? (o11 ? {
      x: o11.width / r8.width,
      y: o11.height / r8.height
    } : {
      x: 1,
      y: 1
    }), p22 = this.isGCS && e9 >= 1 ? e9 * n4 : e9;
    return f3(r8, {
      zFactor: p22,
      curvatureType: s12,
      resolution: a28
    });
  }
  _getWebGLParameters() {
    const {
      zFactor: t6,
      curvatureType: r8
    } = this.functionArguments;
    return {
      curvatureType: r8,
      zFactor: this.isGCS && t6 >= 1 ? t6 * n4 : t6
    };
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], u12.prototype, "functionName", void 0), e([y({
  type: n12,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], u12.prototype, "functionArguments", void 0), e([y()], u12.prototype, "rasterArgumentNames", void 0), e([y({
  json: {
    write: true
  }
})], u12.prototype, "isGCS", void 0), u12 = e([a2("esri.layers.support.rasterFunctions.CurvatureFunction")], u12);
var c16 = u12;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/ExtractBandFunctionArguments.js
var a16;
var i17 = a16 = class extends p4 {
  constructor() {
    super(...arguments), this.bandIds = [], this.bandNames = [], this.bandWavelengths = [], this.missingBandAction = l.bestMatch;
  }
  clone() {
    return new a16({
      bandIds: this.bandIds?.slice(),
      bandNames: this.bandNames?.slice(),
      bandWavelengths: this.bandWavelengths?.slice(),
      missingBandAction: this.missingBandAction,
      method: this.method,
      wavelengthMatchTolerance: this.wavelengthMatchTolerance
    });
  }
};
e([y({
  json: {
    write: true
  }
})], i17.prototype, "bandIds", void 0), e([y({
  json: {
    write: true
  }
})], i17.prototype, "bandNames", void 0), e([y({
  json: {
    write: true
  }
})], i17.prototype, "bandWavelengths", void 0), e([o2({
  0: "name",
  1: "wavelength",
  2: "id"
})], i17.prototype, "method", void 0), e([y({
  json: {
    write: true
  }
})], i17.prototype, "missingBandAction", void 0), e([y({
  json: {
    write: true
  }
})], i17.prototype, "wavelengthMatchTolerance", void 0), i17 = a16 = e([a2("esri.layers.support.rasterFunctions.ExtractBandFunctionArguments")], i17);
var c17 = i17;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/ExtractBandFunction.js
var i18 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "ExtractBand", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const {
      functionArguments: t6,
      sourceRasterInfos: n21
    } = this, e9 = n21[0], {
      method: s12,
      bandNames: r8,
      bandWavelengths: o11,
      bandIds: i29,
      missingBandAction: l18
    } = t6, h6 = r8?.length && ("name" === s12 || "id" !== s12 && !i29?.length), m12 = o11?.length && ("wavelength" === s12 || "id" !== s12 && !i29?.length), p22 = l18 === l.fail, g6 = h6 ? u13(e9, r8) : m12 ? d6(e9, o11, this.functionArguments, p22) : c18(e9, i29, p22);
    if (null == g6) {
      return {
        success: false,
        supportsGPU: false,
        error: `extract-band-function: Invalid ${h6 ? "band names" : m12 ? "band wavelengths" : "band ids"} for the imagery data source`
      };
    }
    this.functionArguments.bandIds = g6, this.functionArguments.method = "id", this.outputPixelType = this._getOutputPixelType("f32");
    const f6 = e9.clone();
    f6.pixelType = this.outputPixelType, f6.bandCount = g6.length;
    const {
      statistics: b3,
      histograms: x4
    } = f6;
    null != b3 && b3.length && (f6.statistics = g6.map((t7) => b3[t7] || b3[b3.length - 1])), null != x4 && x4.length && (f6.histograms = g6.map((t7) => x4[t7] || x4[x4.length - 1]));
    let I2 = f6.keyProperties?.BandProperties;
    I2?.length && (I2 = g6.map((t7) => t7 >= I2.length ? I2[I2.length - 1] : I2[t7]), f6.keyProperties = __spreadProps(__spreadValues({}, f6.keyProperties), {
      BandProperties: I2
    })), this.rasterInfo = f6;
    return {
      success: true,
      supportsGPU: f6.bandCount <= 3
    };
  }
  _processPixels(t6) {
    const n21 = t6.pixelBlocks?.[0];
    if (null == n21) return null;
    const e9 = n21.pixels.length, s12 = this.functionArguments.bandIds.map((t7) => t7 >= e9 ? e9 - 1 : t7);
    return n21.extractBands(s12);
  }
  _getWebGLParameters() {
    let t6;
    if (this.isInputBandIdsSwizzled) t6 = this.swizzledBandSelection.length ? this.swizzledBandSelection : [0, 1, 2];
    else {
      t6 = [...this.functionArguments.bandIds], 0 === t6.length ? t6 = [0, 1, 2] : t6.length < 3 && (t6[1] = t6[1] ?? t6[0], t6[2] = t6[2] ?? t6[1]);
      for (let n21 = 0; n21 < 3; n21++) t6[n21] = Math.min(t6[n21], 2);
    }
    return {
      bandIndexMat3: i5(t6)
    };
  }
  _getInputBandIds(t6) {
    const n21 = t6.length;
    return this.functionArguments.bandIds.map((t7) => t7 >= n21 ? n21 - 1 : t7).map((n22) => t6[n22]);
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], i18.prototype, "functionName", void 0), e([y({
  type: c17,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], i18.prototype, "functionArguments", void 0), e([y()], i18.prototype, "rasterArgumentNames", void 0), i18 = e([a2("esri.layers.support.rasterFunctions.ExtractBandFunction")], i18);
var l13 = i18;
function u13(t6, n21) {
  const e9 = t6.bandInfos.map(({
    name: t7
  }) => t7.toLowerCase()), s12 = [];
  for (let r8 = 0; r8 < n21.length; r8++) {
    const t7 = n21[r8].toLowerCase();
    let o11 = e9.indexOf(t7);
    if (-1 === o11 && "nearinfrared" === t7 && (o11 = e9.findIndex((t8) => t8.startsWith("nearinfrared_1")), -1 === o11 && (o11 = e9.findIndex((t8) => t8.startsWith("nearinfrared")))), -1 === o11) return null;
    s12.push(o11);
  }
  return s12;
}
function c18(t6, n21, e9) {
  const {
    bandCount: s12
  } = t6;
  return !n21?.length || e9 && n21.some((t7) => t7 < 0 || t7 >= s12) ? null : n21;
}
function d6(t6, n21, {
  wavelengthMatchTolerance: e9
}, s12) {
  const {
    bandInfos: r8
  } = t6, o11 = [];
  for (let i29 = 0; i29 < r8.length; i29++) {
    const {
      minWavelength: t7,
      maxWavelength: n22
    } = r8[i29];
    if (!t7 || !n22) return null;
    o11.push({
      minWavelength: t7,
      maxWavelength: n22
    });
  }
  const a28 = [];
  for (let i29 = 0; i29 < n21.length; i29++) {
    const t7 = n21[i29];
    let r9 = false, l18 = -1, u18 = Number.MAX_VALUE;
    for (let n22 = 0; n22 < o11.length; n22++) {
      const e10 = o11[n22], s13 = t7 >= e10.minWavelength && t7 <= e10.maxWavelength, a29 = Math.abs(t7 - (e10.minWavelength + e10.maxWavelength) / 2);
      s13 ? a29 < u18 && (r9 = true, l18 = n22, u18 = a29) : !r9 && a29 < u18 && (l18 = n22, u18 = a29);
    }
    if (!r9 && e9 && u18 < e9 && (r9 = true), !r9 && s12) return null;
    a28.push(l18);
  }
  return a28;
}

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/conversionUtils.js
function i19(i29, s12, a28) {
  const {
    pixels: l18,
    width: n21,
    height: r8,
    mask: o11,
    bandMasks: h6
  } = i29, p22 = n21 * r8, m12 = h6?.length ? g.combineBandMasks(h6) : o11, f6 = Math.min(s12.length, l18.length), c32 = a28.startsWith("f"), d8 = !c32 && a28 !== i29.pixelType, [x4, g6] = s3(a28), k4 = g.createEmptyBand(a28, p22);
  for (let t6 = 0; t6 < r8; t6++) {
    let e9 = t6 * n21;
    for (let t7 = 0; t7 < n21; t7++, e9++) if (!m12 || m12[e9]) {
      let t8 = 0;
      for (let i30 = 0; i30 < f6; i30++) t8 += s12[i30] * l18[i30][e9];
      c32 || (t8 = Math.round(t8), d8 && (t8 = t8 > g6 ? g6 : t8 < x4 ? x4 : t8)), k4[e9] = t8;
    }
  }
  const u18 = new g({
    width: n21,
    height: r8,
    pixels: [k4],
    pixelType: a28,
    mask: m12
  });
  return u18.updateStatistics(), u18;
}

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/GrayscaleFunctionArguments.js
var t4;
var a17 = t4 = class extends p4 {
  clone() {
    return new t4({
      conversionParameters: [...this.conversionParameters],
      raster: this.raster
    });
  }
};
e([y({
  type: [Number],
  json: {
    write: true
  }
})], a17.prototype, "conversionParameters", void 0), a17 = t4 = e([a2("esri.layers.support.rasterFunctions.GrayscaleFunctionArguments")], a17);
var c19 = a17;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/GrayscaleFunction.js
var i20 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "Grayscale", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  get _normalizedWeights() {
    const {
      conversionParameters: t6
    } = this.functionArguments, e9 = t6.reduce((t7, e10) => t7 + e10);
    return t6.map((t7) => t7 / e9);
  }
  _bindSourceRasters() {
    const {
      conversionParameters: t6
    } = this.functionArguments;
    if (!t6?.length) return {
      success: false,
      supportsGPU: false,
      error: "missing valid conversion parameters."
    };
    const e9 = this.sourceRasterInfos[0].clone();
    this.outputPixelType = this._getOutputPixelType(e9.pixelType), e9.pixelType = this.outputPixelType;
    const s12 = 3 === t6.length || 3 === e9.bandCount && t6.length > 3;
    return e9.bandCount = 1, this._removeStatsHistColormapVAT(e9), this.rasterInfo = e9, {
      success: true,
      supportsGPU: s12
    };
  }
  _processPixels(t6) {
    const e9 = t6.pixelBlocks?.[0];
    return null == e9 ? null : i19(e9, this._normalizedWeights, this.outputPixelType);
  }
  _getWebGLParameters() {
    return {
      weights: this._normalizedWeights
    };
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], i20.prototype, "functionName", void 0), e([y({
  type: c19,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], i20.prototype, "functionArguments", void 0), e([y()], i20.prototype, "rasterArgumentNames", void 0), e([y()], i20.prototype, "_normalizedWeights", null), i20 = e([a2("esri.layers.support.rasterFunctions.GrayscaleFunction")], i20);
var u14 = i20;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/LocalFunctionArguments.js
var i21;
var a18 = i21 = class extends p4 {
  constructor() {
    super(...arguments), this.rasters = [], this.processAsMultiband = true;
  }
  writeRasters(r8, s12) {
    s12.rasters = r8.map((r9) => "number" == typeof r9 || "string" == typeof r9 ? r9 : r9.toJSON());
  }
  clone() {
    return new i21({
      operation: this.operation,
      processAsMultiband: this.processAsMultiband,
      rasters: a(this.rasters)
    });
  }
};
e([y({
  json: {
    write: true
  }
})], a18.prototype, "operation", void 0), e([y({
  json: {
    write: true
  }
})], a18.prototype, "rasters", void 0), e([r("rasters")], a18.prototype, "writeRasters", null), e([y({
  json: {
    write: true
  }
})], a18.prototype, "processAsMultiband", void 0), a18 = i21 = e([a2("esri.layers.support.rasterFunctions.LocalFunctionArguments")], a18);
var c20 = a18;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/LocalFunction.js
var m8 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "Local", this.functionArguments = null, this.rasterArgumentNames = ["rasters"];
  }
  _bindSourceRasters() {
    const {
      sourceRasterInfos: t6
    } = this, s12 = t6[0], {
      bandCount: e9
    } = s12, {
      processAsMultiband: o11
    } = this.functionArguments;
    if (t6.some((t7) => t7.bandCount !== e9)) return {
      success: false,
      supportsGPU: false,
      error: "local-function: input rasters do not have same band count"
    };
    const {
      operation: n21,
      rasters: r8
    } = this.functionArguments, i29 = c4[n21];
    if (!(999 === i29 || r8.length === i29 || r8.length <= 1 && 1 === i29)) return {
      success: false,
      supportsGPU: false,
      error: `local-function: the length of functionArguments.rasters does not match operation's requirement: ${i29}`
    };
    const a28 = s12.clone();
    a28.bandCount = 999 !== i29 || o11 ? e9 : 1, this._removeStatsHistColormapVAT(a28), this._updateStatistics(a28), this._updatePixelType(a28), this.rasterInfo = a28;
    return {
      success: true,
      supportsGPU: 1 === a28.bandCount && i29 <= 3 && (n21 < 11 || n21 > 16)
    };
  }
  _processPixels(t6) {
    const {
      pixelBlocks: s12
    } = t6;
    return null == s12 || s12.some((t7) => null == t7) ? null : pt(s12, this.functionArguments.operation, {
      processAsMultiband: this.functionArguments.processAsMultiband,
      outputPixelType: this.outputPixelType ?? void 0
    });
  }
  _getWebGLParameters() {
    const {
      operation: t6
    } = this.functionArguments, s12 = c4[t6], e9 = Object.keys(c3).find((s13) => c3[s13] === t6)?.toLowerCase() ?? "undefined", i29 = this.outputPixelType ?? "f32";
    let [a28, u18] = s3(i29);
    const p22 = i(i29);
    return p22 && (a28 -= 1e-4, u18 += 1e-4), {
      imageCount: s12,
      operationName: e9,
      domainRange: [a28, u18],
      isOutputRounded: p22
    };
  }
  _updateStatistics(t6) {
    const s12 = this.sourceRasterInfos[0], {
      operation: e9
    } = this.functionArguments, o11 = l4(e9)?.domain;
    if (o11) {
      t6.statistics = [];
      for (let s13 = 0; s13 < t6.bandCount; s13++) t6.statistics[s13] = {
        min: o11[0],
        max: o11[1],
        avg: (o11[0] + o11[1]) / 2,
        stddev: (o11[0] + o11[1]) / 10
      };
    } else 45 === e9 && s12.statistics?.length && (t6.statistics = s12.statistics.map((t7) => ({
      min: -t7.max,
      max: -t7.min,
      avg: null != t7.avg ? -t7.avg : void 0,
      stddev: null != t7.stddev ? -t7.stddev : void 0
    })));
  }
  _updatePixelType(t6) {
    const {
      statistics: s12,
      pixelType: e9
    } = this.sourceRasterInfos[0], {
      operation: o11
    } = this.functionArguments, {
      domain: n21,
      isInteger: a28
    } = l4(o11) ?? {
      domain: null,
      isInteger: false
    };
    let u18 = "f32";
    if (n21 && a28) u18 = u(n21[0], n21[1]);
    else if (30 === o11) {
      const t7 = s12?.[0];
      u18 = t7 ? u(t7.min, t7.max) : i(e9) ? e9 : "s32";
    } else if (45 === o11 && i(e9)) {
      const t7 = s12?.map(({
        max: t8
      }) => -t8), o12 = s12?.map(({
        min: t8
      }) => -t8), n22 = t7?.length ? Math.min(...t7) : null, r8 = o12?.length ? Math.min(...o12) : null;
      u18 = null != n22 && null != r8 ? u(n22, r8) : e9.startsWith("s") ? e9.replace("s", "u") : "u1" === e9 || "u2" === e9 || "u4" === e9 ? "s8" : "u8" === e9 ? "s16" : "s32";
    }
    t6.pixelType = this.outputPixelType = this._getOutputPixelType(u18);
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], m8.prototype, "functionName", void 0), e([y({
  type: c20,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], m8.prototype, "functionArguments", void 0), e([y()], m8.prototype, "rasterArgumentNames", void 0), m8 = e([a2("esri.layers.support.rasterFunctions.LocalFunction")], m8);
var d7 = m8;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/MaskFunctionArguments.js
var s10;
var a19 = s10 = class extends p4 {
  constructor() {
    super(...arguments), this.includedRanges = null, this.noDataValues = null, this.noDataInterpretation = n3.matchAny;
  }
  get normalizedNoDataValues() {
    const {
      noDataValues: t6
    } = this;
    if (!t6?.length) return null;
    let e9 = false;
    const r8 = t6.map((t7) => {
      if ("number" == typeof t7) return e9 = true, [t7];
      if ("string" == typeof t7) {
        const r9 = t7.trim().split(" ").filter((t8) => "" !== t8.trim()).map((t8) => Number(t8));
        return e9 = e9 || r9.length > 0, 0 === r9.length ? null : r9;
      }
      return null;
    });
    return e9 ? r8 : null;
  }
  clone() {
    return new s10({
      includedRanges: this.includedRanges?.slice() ?? [],
      noDataValues: this.noDataValues?.slice() ?? [],
      noDataInterpretation: this.noDataInterpretation
    });
  }
};
e([y({
  json: {
    write: true
  }
})], a19.prototype, "includedRanges", void 0), e([y({
  json: {
    write: true
  }
})], a19.prototype, "noDataValues", void 0), e([y()], a19.prototype, "normalizedNoDataValues", null), e([y({
  json: {
    write: true
  }
})], a19.prototype, "noDataInterpretation", void 0), a19 = s10 = e([a2("esri.layers.support.rasterFunctions.MaskFunctionArguments")], a19);
var i22 = a19;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/MaskFunction.js
var c21 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "Mask", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const t6 = this.sourceRasterInfos[0].clone(), {
      pixelType: e9
    } = t6;
    this.outputPixelType = this._getOutputPixelType(e9), t6.pixelType = this.outputPixelType, this.rasterInfo = t6;
    const {
      includedRanges: s12,
      normalizedNoDataValues: o11
    } = this.functionArguments;
    if (!s12?.length && !o11?.length) return {
      success: false,
      supportsGPU: false,
      error: "missing includedRanges or noDataValues argument"
    };
    let r8 = [];
    for (let a28 = 0; a28 < t6.bandCount; a28++) {
      const t7 = w2(e9, s12?.slice(2 * a28, 2 * a28 + 2), o11?.[a28]);
      if (null == t7) {
        r8 = null;
        break;
      }
      r8.push(t7);
    }
    this.lookups = r8;
    const n21 = null != o11 && o11.every((t7) => t7?.length === o11[0]?.length);
    return {
      success: true,
      supportsGPU: (!s12 || s12.length <= 2 * i2) && (!o11 || n21 && o11[0].length <= i2)
    };
  }
  _processPixels(t6) {
    const e9 = t6.pixelBlocks?.[0];
    if (null == e9) return null;
    const {
      outputPixelType: s12,
      lookups: o11
    } = this, {
      includedRanges: r8,
      noDataInterpretation: n21,
      normalizedNoDataValues: u18
    } = this.functionArguments, a28 = n21 === n3.matchAll;
    return g2(e9, {
      includedRanges: r8,
      noDataValues: u18,
      outputPixelType: s12,
      matchAll: a28,
      lookups: o11
    });
  }
  _getWebGLParameters() {
    const {
      includedRanges: t6,
      normalizedNoDataValues: s12
    } = this.functionArguments, o11 = new Float32Array(i2);
    o11.fill(j), s12?.[0]?.length && o11.set(s12[0]);
    const r8 = new Float32Array(i2);
    for (let n21 = 0; n21 < r8.length; n21 += 2) r8[n21] = t6?.[n21] ?? -j, r8[n21 + 1] = t6?.[n21 + 1] ?? j;
    return t6?.length && r8.set(t6), {
      bandCount: this.sourceRasterInfos[0].bandCount,
      noDataValues: o11,
      includedRanges: r8
    };
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], c21.prototype, "functionName", void 0), e([y({
  type: i22,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], c21.prototype, "functionArguments", void 0), e([y()], c21.prototype, "rasterArgumentNames", void 0), e([y({
  json: {
    write: true
  }
})], c21.prototype, "lookups", void 0), c21 = e([a2("esri.layers.support.rasterFunctions.MaskFunction")], c21);
var p16 = c21;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/NDVIFunctionArguments.js
var i23;
var e8 = i23 = class extends p4 {
  constructor() {
    super(...arguments), this.visibleBandID = 0, this.infraredBandID = 1, this.scientificOutput = false;
  }
  clone() {
    const {
      visibleBandID: r8,
      infraredBandID: t6,
      scientificOutput: s12
    } = this;
    return new i23({
      visibleBandID: r8,
      infraredBandID: t6,
      scientificOutput: s12
    });
  }
};
e([y({
  json: {
    write: true
  }
})], e8.prototype, "visibleBandID", void 0), e([y({
  json: {
    write: true
  }
})], e8.prototype, "infraredBandID", void 0), e([y({
  json: {
    write: true
  }
})], e8.prototype, "scientificOutput", void 0), e8 = i23 = e([a2("esri.layers.support.rasterFunctions.NDVIFunctionArguments")], e8);
var n13 = e8;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/NDVIFunction.js
var u15 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "NDVI", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const {
      scientificOutput: t6,
      visibleBandID: s12,
      infraredBandID: r8
    } = this.functionArguments;
    this.outputPixelType = this._getOutputPixelType(t6 ? "f32" : "u8");
    const e9 = this.sourceRasterInfos[0], n21 = Math.max(s12, r8);
    if (e9.bandCount < 2 || n21 >= e9.bandCount) return {
      success: false,
      supportsGPU: false,
      error: "ndvi-function: source raster has insufficient amount of raster bands"
    };
    const o11 = e9.clone();
    o11.pixelType = this.outputPixelType, o11.colormap = null, o11.histograms = null, o11.bandCount = 1, o11.keyProperties = __spreadProps(__spreadValues({}, o11.keyProperties), {
      BandProperties: void 0
    });
    const [i29, u18, a28, c32] = t6 ? [-1, 1, 0, 0.1] : [0, 200, 100, 10];
    return o11.statistics = [{
      min: i29,
      max: u18,
      avg: a28,
      stddev: c32
    }], this.rasterInfo = o11, {
      success: true,
      supportsGPU: true
    };
  }
  _processPixels(t6) {
    const s12 = t6.pixelBlocks?.[0];
    if (null == s12) return null;
    const {
      visibleBandID: r8,
      infraredBandID: n21,
      scientificOutput: o11
    } = this.functionArguments;
    return s6(s12, r8, n21, !o11);
  }
  _getWebGLParameters() {
    const {
      visibleBandID: t6,
      infraredBandID: s12,
      scientificOutput: r8
    } = this.functionArguments, e9 = this.isInputBandIdsSwizzled ? [0, 1, 2] : [s12, t6, 0];
    return {
      bandIndexMat3: i5(e9),
      scaled: !r8
    };
  }
  _getInputBandIds(t6) {
    const {
      visibleBandID: s12,
      infraredBandID: r8
    } = this.functionArguments;
    return [r8, s12, 0].map((s13) => t6[s13]);
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], u15.prototype, "functionName", void 0), e([y({
  type: n13,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], u15.prototype, "functionArguments", void 0), e([y()], u15.prototype, "rasterArgumentNames", void 0), u15 = e([a2("esri.layers.support.rasterFunctions.NDVIFunction")], u15);
var a20 = u15;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/RemapFunctionArguments.js
var n14;
var a21 = n14 = class extends p4 {
  constructor() {
    super(...arguments), this.inputRanges = null, this.outputValues = null, this.noDataRanges = null, this.allowUnmatched = false, this.isLastInputRangeInclusive = false;
  }
  clone() {
    return new n14({
      inputRanges: [...this.inputRanges],
      outputValues: [...this.outputValues],
      noDataRanges: [...this.noDataRanges],
      allowUnmatched: this.allowUnmatched,
      isLastInputRangeInclusive: this.isLastInputRangeInclusive
    });
  }
};
e([y({
  json: {
    write: true
  }
})], a21.prototype, "inputRanges", void 0), e([y({
  json: {
    write: true
  }
})], a21.prototype, "outputValues", void 0), e([y({
  json: {
    write: true
  }
})], a21.prototype, "noDataRanges", void 0), e([y({
  json: {
    write: true
  }
})], a21.prototype, "allowUnmatched", void 0), e([y({
  json: {
    write: true
  }
})], a21.prototype, "isLastInputRangeInclusive", void 0), a21 = n14 = e([a2("esri.layers.support.rasterFunctions.RemapFunctionArguments")], a21);
var r6 = a21;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/RemapFunction.js
var m9 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "Remap", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.lookup = null;
  }
  _bindSourceRasters() {
    const t6 = this.sourceRasterInfos[0].clone(), {
      pixelType: e9
    } = t6;
    this.outputPixelType = this._getOutputPixelType(e9), t6.pixelType = this.outputPixelType, t6.colormap = null, t6.histograms = null, t6.bandCount = 1, t6.attributeTable = null;
    const {
      statistics: s12
    } = t6, {
      allowUnmatched: n21,
      outputValues: o11,
      inputRanges: a28,
      noDataRanges: i29,
      isLastInputRangeInclusive: l18
    } = this.functionArguments;
    if (null != s12 && s12.length && o11?.length) if (n21) {
      const e10 = Math.min.apply(null, [...o11, s12[0].min]), n22 = Math.max.apply(null, [...o11, s12[0].max]);
      t6.statistics = [__spreadProps(__spreadValues({}, s12[0]), {
        min: e10,
        max: n22
      })];
    } else {
      let e10 = o11[0], n22 = e10;
      for (let t7 = 0; t7 < o11.length; t7++) e10 = e10 > o11[t7] ? o11[t7] : e10, n22 = n22 > o11[t7] ? n22 : o11[t7];
      t6.statistics = [__spreadProps(__spreadValues({}, s12[0]), {
        min: e10,
        max: n22
      })];
    }
    this.rasterInfo = t6, this.lookup = n21 ? null : y5({
      srcPixelType: e9,
      inputRanges: a28,
      outputValues: o11,
      noDataRanges: i29,
      allowUnmatched: n21,
      isLastInputRangeInclusive: l18,
      outputPixelType: this.outputPixelType
    });
    return {
      success: true,
      supportsGPU: (!o11 || o11.length <= i2) && (!i29 || i29.length <= i2)
    };
  }
  _processPixels(t6) {
    const e9 = t6.pixelBlocks?.[0];
    if (null == e9) return null;
    const {
      lookup: s12,
      outputPixelType: n21
    } = this;
    if (s12) {
      const t7 = f2(e9, {
        lut: [s12.lut],
        offset: s12.offset,
        outputPixelType: n21
      });
      return null != t7 && s12.mask && (t7.mask = c(e9.pixels[0], e9.mask, s12.mask, s12.offset, "u8")), t7;
    }
    const {
      inputRanges: o11,
      outputValues: a28,
      noDataRanges: u18,
      allowUnmatched: r8,
      isLastInputRangeInclusive: c32
    } = this.functionArguments;
    return p2(e9, {
      inputRanges: o11,
      outputValues: a28,
      noDataRanges: u18,
      outputPixelType: n21,
      allowUnmatched: r8,
      isLastInputRangeInclusive: c32
    });
  }
  _getWebGLParameters() {
    const {
      allowUnmatched: t6,
      noDataRanges: s12,
      isLastInputRangeInclusive: n21
    } = this.functionArguments, a28 = new Float32Array(3 * i2), u18 = 1e-5, i29 = this.functionArguments.inputRanges ?? [], l18 = this.functionArguments.outputValues ?? [], p22 = l18.length;
    for (let o11 = 0; o11 < i2; o11++) a28[3 * o11] = i29[2 * o11] ?? j - 1, a28[3 * o11 + 1] = i29[2 * o11 + 1] ?? j, a28[3 * o11 + 2] = l18[o11] ?? 0, o11 < p22 && (o11 > 0 && (a28[3 * o11] -= u18), (o11 < p22 - 1 || !n21) && (a28[3 * o11 + 1] -= u18));
    const c32 = new Float32Array(2 * i2);
    c32.fill(j), s12?.length && c32.set(s12);
    return {
      allowUnmatched: t6,
      rangeMaps: a28,
      noDataRanges: c32,
      clampRange: s3(this.outputPixelType)
    };
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], m9.prototype, "functionName", void 0), e([y({
  type: r6,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], m9.prototype, "functionArguments", void 0), e([y()], m9.prototype, "rasterArgumentNames", void 0), e([y({
  json: {
    write: true
  }
})], m9.prototype, "lookup", void 0), m9 = e([a2("esri.layers.support.rasterFunctions.RemapFunction")], m9);
var g5 = m9;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/SlopeFunctionArguments.js
var i24;
var c22 = new n({
  1: "degree",
  2: "percent-rise",
  3: "adjusted"
}, {
  useNumericKeys: true
});
var a22 = i24 = class extends p4 {
  constructor() {
    super(...arguments), this.slopeType = "degree", this.zFactor = 1, this.pixelSizePower = 0.664, this.pixelSizeFactor = 0.024, this.removeEdgeEffect = false;
  }
  clone() {
    return new i24({
      slopeType: this.slopeType,
      zFactor: this.zFactor,
      pixelSizePower: this.pixelSizePower,
      pixelSizeFactor: this.pixelSizeFactor,
      removeEdgeEffect: this.removeEdgeEffect,
      raster: this.raster
    });
  }
};
e([o2(c22)], a22.prototype, "slopeType", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], a22.prototype, "zFactor", void 0), e([y({
  type: Number,
  json: {
    name: "psPower",
    write: true
  }
})], a22.prototype, "pixelSizePower", void 0), e([y({
  type: Number,
  json: {
    name: "psZFactor",
    write: true
  }
})], a22.prototype, "pixelSizeFactor", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], a22.prototype, "removeEdgeEffect", void 0), a22 = i24 = e([a2("esri.layers.support.rasterFunctions.SlopeFunctionArguments")], a22);
var m10 = a22;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/SlopeFunction.js
var p17 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "Slope", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = false;
  }
  _bindSourceRasters() {
    this.outputPixelType = this._getOutputPixelType("f32");
    const e9 = this.sourceRasterInfos[0].clone();
    return e9.pixelType = this.outputPixelType, e9.statistics = "percent-rise" !== this.functionArguments.slopeType ? [{
      min: 0,
      max: 90,
      avg: 1,
      stddev: 1
    }] : null, e9.histograms = null, e9.colormap = null, e9.attributeTable = null, e9.bandCount = 1, this.rasterInfo = e9, this.isGCS = e9.spatialReference?.isGeographic ?? false, {
      success: true,
      supportsGPU: true
    };
  }
  _processPixels(e9) {
    const t6 = e9.pixelBlocks?.[0];
    if (null == t6) return null;
    const {
      zFactor: s12,
      slopeType: r8,
      pixelSizePower: o11,
      pixelSizeFactor: n21
    } = this.functionArguments, {
      isGCS: p22
    } = this, {
      extent: c32,
      primaryPixelSizes: u18
    } = e9, a28 = u18?.[0], l18 = a28 ?? (c32 ? {
      x: c32.width / t6.width,
      y: c32.height / t6.height
    } : {
      x: 1,
      y: 1
    });
    return h(t6, {
      zFactor: s12,
      slopeType: r8,
      pixelSizePower: o11,
      pixelSizeFactor: n21,
      isGCS: p22,
      resolution: l18
    });
  }
  _getWebGLParameters() {
    const {
      zFactor: e9,
      slopeType: t6,
      pixelSizeFactor: s12,
      pixelSizePower: r8
    } = this.functionArguments;
    return {
      zFactor: this.isGCS && e9 >= 1 ? e9 * n4 : e9,
      slopeType: t6,
      pixelSizeFactor: s12 ?? 0,
      pixelSizePower: r8 ?? 0
    };
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], p17.prototype, "functionName", void 0), e([y({
  type: m10,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], p17.prototype, "functionArguments", void 0), e([y()], p17.prototype, "rasterArgumentNames", void 0), e([y({
  json: {
    write: true
  }
})], p17.prototype, "isGCS", void 0), p17 = e([a2("esri.layers.support.rasterFunctions.SlopeFunction")], p17);
var c23 = p17;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/focalStatUtils.js
var n15 = new n({
  1: "min",
  2: "max",
  3: "mean",
  4: "stddev",
  5: "median",
  6: "majority",
  7: "minority"
}, {
  useNumericKeys: true
});
function s11(t6, e9) {
  const {
    fillNoDataOnly: o11
  } = e9, {
    band: n21,
    width: s12,
    height: r8,
    mask: i29,
    outBand: l18
  } = t6;
  if (o11 && !i29) return void l18.set(n21);
  const {
    statisticsType: a28,
    kernelRows: c32,
    kernelCols: f6
  } = e9, h6 = "stddev" === a28, m12 = s12 * r8, u18 = new Float64Array(m12), d8 = new Float64Array(m12), y9 = new Uint32Array(m12);
  for (let A3 = 0; A3 < r8; A3++) {
    const t7 = A3 * s12;
    let e10 = 0, o12 = 0, r9 = 0;
    for (let s13 = 0; s13 < f6; s13++) i29 && !i29[t7 + s13] || (e10 += n21[t7 + s13], h6 && (o12 += n21[t7 + s13] ** 2), r9++);
    u18[t7] = e10, d8[t7] = o12, y9[t7] = r9;
    for (let l19 = 1; l19 <= s12 - f6; l19++) {
      const s13 = t7 + l19 - 1, a29 = s13 + f6;
      i29 ? (i29[s13] && (r9--, e10 -= n21[s13], h6 && (o12 -= n21[s13] ** 2)), i29[a29] && (r9++, e10 += n21[a29], h6 && (o12 += n21[a29] ** 2))) : (e10 -= n21[s13], e10 += n21[a29], h6 && (o12 -= n21[s13] ** 2, o12 += n21[a29] ** 2)), u18[t7 + l19] = e10, y9[t7 + l19] = r9, h6 && (d8[t7 + l19] = o12);
    }
  }
  const k4 = new Float64Array(m12), w7 = new Float64Array(m12), p22 = new Uint32Array(m12), M4 = c32 * s12;
  for (let A3 = 0; A3 <= s12 - f6; A3++) {
    let t7 = 0, e10 = 0, o12 = 0;
    for (let n22 = 0; n22 < c32; n22++) {
      const r9 = n22 * s12 + A3;
      t7 += u18[r9], o12 += y9[r9], h6 && (e10 += d8[r9]);
    }
    k4[A3] = t7, w7[A3] = e10, p22[A3] = o12;
    for (let n22 = 1; n22 <= r8 - c32; n22++) {
      const r9 = (n22 - 1) * s12 + A3, i30 = r9 + M4;
      t7 -= u18[r9], t7 += u18[i30], o12 -= y9[r9], o12 += y9[i30], h6 && (e10 -= d8[r9], e10 += d8[i30]), k4[n22 * s12 + A3] = t7, w7[n22 * s12 + A3] = e10, p22[n22 * s12 + A3] = o12;
    }
  }
  const g6 = Math.floor(c32 / 2), b3 = Math.floor(f6 / 2);
  for (let A3 = g6; A3 < r8 - g6; A3++) {
    const t7 = A3 * s12;
    for (let e10 = b3; e10 < s12 - b3; e10++) {
      const n22 = (A3 - g6) * s12 + e10 - b3, r9 = p22[n22];
      if (0 === r9 || o11 && (!i29 || i29[t7 + e10])) continue;
      const a29 = k4[n22] / r9, c33 = h6 ? Math.sqrt((w7[n22] - k4[n22] * a29) / r9) : a29;
      l18[t7 + e10] = c33, i29 && (i29[t7 + e10] = 255);
    }
  }
}
function r7(t6, e9) {
  const {
    fillNoDataOnly: o11
  } = e9, {
    band: n21,
    width: s12,
    height: r8,
    mask: i29,
    outBand: l18
  } = t6;
  if (o11 && !i29) return void l18.set(n21);
  const {
    kernelRows: a28,
    kernelCols: c32,
    statisticsType: f6
  } = e9, h6 = Math.floor(a28 / 2), m12 = Math.floor(c32 / 2), u18 = "min" === f6, d8 = l18.slice(), y9 = new Uint32Array(s12 * r8);
  for (let k4 = h6; k4 < r8 - h6; k4++) {
    const t7 = k4 * s12;
    for (let e10 = m12; e10 < s12 - m12; e10++) {
      let o12 = u18 ? Number.MAX_VALUE : -Number.MAX_VALUE, r9 = 0;
      for (let l19 = 0; l19 < a28; l19++) for (let a29 = 0; a29 < c32; a29++) {
        const c33 = t7 + e10 + (l19 - h6) * s12 + a29 - m12;
        i29 && !i29[c33] || (o12 = u18 ? Math.min(o12, n21[c33]) : Math.max(o12, n21[c33]), r9++);
      }
      i29 ? (d8[t7 + e10] = 0 === r9 ? 0 : o12, y9[t7 + e10] = r9) : l18[t7 + e10] = 0 === r9 ? 0 : o12;
    }
  }
  if (i29) for (let k4 = h6; k4 < r8 - h6; k4++) {
    const t7 = k4 * s12;
    for (let e10 = m12; e10 < s12 - m12; e10++) if (y9[t7 + e10]) {
      if (o11 && i29[t7 + e10]) continue;
      l18[t7 + e10] = d8[t7 + e10], i29[t7 + e10] = 255;
    }
  }
}
function i25(t6, e9) {
  const {
    fillNoDataOnly: o11
  } = e9, {
    band: n21,
    width: s12,
    height: r8,
    mask: i29,
    outBand: l18
  } = t6;
  if (o11 && !i29) return void l18.set(n21);
  const {
    kernelRows: a28,
    kernelCols: c32
  } = e9, f6 = Math.floor(a28 / 2), h6 = Math.floor(c32 / 2), m12 = l18.slice(), u18 = new Uint32Array(s12 * r8);
  for (let d8 = f6; d8 < r8 - f6; d8++) {
    const t7 = d8 * s12;
    for (let e10 = h6; e10 < s12 - h6; e10++) {
      if (o11 && i29?.[t7 + e10]) continue;
      const r9 = [];
      for (let o12 = 0; o12 < a28; o12++) for (let l19 = 0; l19 < c32; l19++) {
        const a29 = t7 + e10 + (o12 - f6) * s12 + l19 - h6;
        i29 && !i29[a29] || r9.push(n21[a29]);
      }
      r9.length && (r9.sort((t8, e11) => t8 - e11), i29 ? (m12[t7 + e10] = r9[Math.floor((r9.length - 1) / 2)], u18[t7 + e10] = r9.length) : l18[t7 + e10] = r9[Math.floor((r9.length - 1) / 2)]);
    }
  }
  if (i29) for (let d8 = f6; d8 < r8 - f6; d8++) {
    const t7 = d8 * s12;
    for (let e10 = h6; e10 < s12 - h6; e10++) if (u18[t7 + e10]) {
      if (o11 && i29[t7 + e10]) continue;
      l18[t7 + e10] = m12[t7 + e10], i29[t7 + e10] = 255;
    }
  }
}
function l14(t6, e9) {
  const {
    fillNoDataOnly: o11
  } = e9, {
    band: n21,
    width: s12,
    height: r8,
    mask: i29,
    outBand: l18
  } = t6;
  if (o11 && !i29) return void l18.set(n21);
  const {
    kernelRows: a28,
    kernelCols: c32
  } = e9, f6 = Math.floor(a28 / 2), h6 = Math.floor(c32 / 2), m12 = "majority" === e9.statisticsType, u18 = a28 * c32, d8 = l18.slice(), y9 = new Uint32Array(s12 * r8);
  for (let k4 = f6; k4 < r8 - f6; k4++) {
    const t7 = k4 * s12;
    for (let e10 = h6; e10 < s12 - h6; e10++) {
      if (o11 && i29?.[t7 + e10]) continue;
      const r9 = /* @__PURE__ */ new Map();
      for (let o12 = 0; o12 < a28; o12++) for (let l19 = 0; l19 < c32; l19++) {
        const a29 = t7 + e10 + (o12 - f6) * s12 + l19 - h6;
        if (i29 && !i29[a29]) continue;
        const c33 = n21[a29];
        r9.set(c33, r9.has(c33) ? r9.get(c33) + 1 : 1);
      }
      if (0 === r9.size) continue;
      let k5 = 0, w7 = 0, p22 = m12 ? 0 : u18 + 1;
      for (const t8 of r9.keys()) w7 = r9.get(t8), m12 === w7 > p22 && (p22 = w7, k5 = t8);
      i29 ? (d8[t7 + e10] = k5, y9[t7 + e10] = r9.size) : l18[t7 + e10] = k5;
    }
  }
  if (i29) for (let k4 = f6; k4 < r8 - f6; k4++) {
    const t7 = k4 * s12;
    for (let e10 = h6; e10 < s12 - h6; e10++) if (y9[t7 + e10]) {
      if (o11 && i29[t7 + e10]) continue;
      l18[t7 + e10] = d8[t7 + e10], i29[t7 + e10] = 255;
    }
  }
}
function a23(t6, n21) {
  const {
    mask: a28
  } = t6, {
    fillNoDataOnly: c32
  } = n21;
  if (c32 && !a28) return t6;
  const {
    pixels: f6,
    width: h6,
    height: m12,
    bandMasks: u18,
    pixelType: d8
  } = t6, y9 = f6.length, k4 = h6 * m12, w7 = [], {
    kernelRows: p22,
    kernelCols: M4,
    statisticsType: g6,
    mirrorEdges: b3
  } = n21;
  if (c32 && !a28) return t6;
  const A3 = n21.outputPixelType ?? d8, x4 = [];
  for (let N3 = 0; N3 < y9; N3++) {
    const t7 = f6[N3], d9 = g.createEmptyBand(A3, k4);
    c32 && d9.set(t7);
    const y10 = u18?.[N3] ?? a28, j4 = y10?.slice() ?? null, B5 = {
      band: t7,
      width: h6,
      height: m12,
      mask: j4,
      outBand: d9
    };
    switch (g6) {
      case "min":
      case "max":
        r7(B5, n21);
        break;
      case "mean":
      case "stddev":
        s11(B5, n21);
        break;
      case "median":
        i25(B5, n21);
        break;
      case "majority":
      case "minority":
        l14(B5, n21);
    }
    b3 && !c32 && o9(d9, h6, m12, p22, M4), w7.push(d9), j4 && x4.push(j4);
  }
  let j3 = x4[0] ?? a28;
  x4.length !== y9 && (x4.length = 0), y9 > 1 && u18?.length && (j3 = g.combineBandMasks(u18));
  const B4 = new g({
    pixelType: A3,
    width: h6,
    height: m12,
    pixels: w7,
    bandMasks: u18 && x4.length ? x4 : null,
    mask: j3
  });
  return B4.updateStatistics(), B4;
}

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/StatisticsFunctionArguments.js
var c24;
var p18 = c24 = class extends p4 {
  constructor() {
    super(...arguments), this.rows = 3, this.cols = 3, this.fillNoDataOnly = false, this.statisticsType = "min";
  }
  clone() {
    return new c24({
      rows: this.rows,
      cols: this.cols,
      fillNoDataOnly: this.fillNoDataOnly,
      statisticsType: this.statisticsType,
      raster: a(this.raster)
    });
  }
};
e([y({
  json: {
    write: true,
    read: {
      source: ["kernelRows", "rows"],
      reader: (s12, r8) => Number(s12 ?? r8?.kernelRows ?? 3)
    }
  }
})], p18.prototype, "rows", void 0), e([y({
  json: {
    write: true,
    read: {
      source: ["kernelCols", "cols"],
      reader: (s12, r8) => Number(s12 ?? r8?.kernelCols ?? 3)
    }
  }
})], p18.prototype, "cols", void 0), e([y({
  json: {
    write: true
  }
})], p18.prototype, "fillNoDataOnly", void 0), e([y({
  json: {
    read: {
      source: ["statisticsType", "type"],
      reader: (s12, r8) => n15.fromJSON(r8?.statisticsType ?? r8?.type) ?? "min"
    },
    write: {
      target: "type"
    }
  }
}), o2(n15)], p18.prototype, "statisticsType", void 0), p18 = c24 = e([a2("esri.layers.support.rasterFunctions.StatisticsFunctionArguments")], p18);
var l15 = p18;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/StatisticsFunction.js
var c25 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "Statistics", this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const {
      type: t6
    } = this.functionArguments.toJSON();
    if (t6 < 1 || t6 > 7) return {
      success: false,
      supportsGPU: false,
      error: `statistics-function: the given statistics type is not supported ${t6}`
    };
    const s12 = this.sourceRasterInfos[0];
    this.outputPixelType = this._getOutputPixelType(s12.pixelType);
    const e9 = s12.clone();
    e9.pixelType = this.outputPixelType;
    const {
      statisticsType: o11
    } = this.functionArguments;
    "stddev" === o11 && this._removeStatsHistColormapVAT(e9), this.rasterInfo = e9;
    return {
      success: true,
      supportsGPU: e9.bandCount <= 3 && t6 < 5
    };
  }
  _processPixels(t6) {
    const s12 = t6.pixelBlocks?.[0];
    if (null == s12) return s12;
    const {
      statisticsType: e9,
      rows: o11,
      cols: r8,
      fillNoDataOnly: n21
    } = this.functionArguments;
    return a23(s12, {
      kernelRows: o11,
      kernelCols: r8,
      fillNoDataOnly: n21,
      outputPixelType: this.outputPixelType,
      statisticsType: e9,
      mirrorEdges: true
    });
  }
  _getWebGLParameters() {
    const {
      rows: t6,
      cols: s12,
      statisticsType: e9,
      fillNoDataOnly: r8
    } = this.functionArguments;
    return {
      fillNoDataOnly: r8,
      kernelRows: t6,
      kernelCols: s12,
      statisticsType: e9,
      clampRange: s3(this.outputPixelType)
    };
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], c25.prototype, "functionName", void 0), e([y({
  type: l15,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], c25.prototype, "functionArguments", void 0), e([y()], c25.prototype, "rasterArgumentNames", void 0), c25 = e([a2("esri.layers.support.rasterFunctions.StatisticsFunction")], c25);
var p19 = c25;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/StatisticsHistogramFunctionArguments.js
var c26;
var n16 = c26 = class extends p4 {
  constructor() {
    super(...arguments), this.statistics = null, this.histograms = null;
  }
  readStatistics(t6, s12) {
    if (!t6?.length) return null;
    const r8 = [];
    return t6.forEach((t7) => {
      const s13 = {
        min: t7.min,
        max: t7.max,
        avg: t7.avg ?? t7.mean,
        stddev: t7.stddev ?? t7.standardDeviation
      };
      r8.push(s13);
    }), r8;
  }
  writeStatistics(t6, s12, r8) {
    if (!t6?.length) return;
    const o11 = [];
    t6.forEach((t7) => {
      const s13 = __spreadProps(__spreadValues({}, t7), {
        mean: t7.avg,
        standardDeviation: t7.stddev
      });
      delete s13.avg, delete s13.stddev, o11.push(s13);
    }), s12[r8] = o11;
  }
  clone() {
    return new c26({
      statistics: a(this.statistics),
      histograms: a(this.histograms)
    });
  }
};
e([y({
  json: {
    write: true
  }
})], n16.prototype, "statistics", void 0), e([o("statistics")], n16.prototype, "readStatistics", null), e([r("statistics")], n16.prototype, "writeStatistics", null), e([y({
  json: {
    write: true
  }
})], n16.prototype, "histograms", void 0), n16 = c26 = e([a2("esri.layers.support.rasterFunctions.StatisticsHistogramFunctionArguments")], n16);
var p20 = n16;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/StatisticsHistogramFunction.js
var i26 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "StatisticsHistogram", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = true;
  }
  _bindSourceRasters() {
    const t6 = this.sourceRasterInfos[0];
    this.outputPixelType = this._getOutputPixelType("u8");
    const s12 = t6.clone(), {
      statistics: o11,
      histograms: r8
    } = this.functionArguments;
    return r8 && (s12.histograms = r8), o11 && (s12.statistics = o11), this.rasterInfo = s12, {
      success: true,
      supportsGPU: true
    };
  }
  _processPixels(t6) {
    return t6.pixelBlocks?.[0];
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], i26.prototype, "functionName", void 0), e([y({
  type: p20,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], i26.prototype, "functionArguments", void 0), e([y()], i26.prototype, "rasterArgumentNames", void 0), e([y({
  json: {
    write: true
  }
})], i26.prototype, "indexedColormap", void 0), e([y()], i26.prototype, "isNoopProcess", void 0), i26 = e([a2("esri.layers.support.rasterFunctions.StatisticsHistogramFunction")], i26);
var n17 = i26;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/StretchFunctionArguments.js
var n18;
var p21 = new n({
  0: "none",
  3: "standard-deviation",
  4: "histogram-equalization",
  5: "min-max",
  6: "percent-clip",
  9: "sigmoid"
}, {
  useNumericKeys: true
});
var c27 = n18 = class extends p4 {
  constructor() {
    super(...arguments), this.computeGamma = false, this.dynamicRangeAdjustment = false, this.gamma = [], this.histograms = null, this.statistics = null, this.stretchType = "none", this.useGamma = false;
  }
  writeStatistics(t6, e9, o11) {
    t6?.length && (Array.isArray(t6[0]) || (t6 = t6.map((t7) => [t7.min, t7.max, t7.avg, t7.stddev])), e9[o11] = t6);
  }
  clone() {
    return new n18({
      stretchType: this.stretchType,
      outputMin: this.outputMin,
      outputMax: this.outputMax,
      useGamma: this.useGamma,
      computeGamma: this.computeGamma,
      statistics: a(this.statistics),
      gamma: a(this.gamma),
      sigmoidStrengthLevel: this.sigmoidStrengthLevel,
      numberOfStandardDeviations: this.numberOfStandardDeviations,
      minPercent: this.minPercent,
      maxPercent: this.maxPercent,
      histograms: a(this.histograms),
      dynamicRangeAdjustment: this.dynamicRangeAdjustment,
      raster: this.raster
    });
  }
};
e([y({
  type: Boolean,
  json: {
    write: true
  }
})], c27.prototype, "computeGamma", void 0), e([y({
  type: Boolean,
  json: {
    name: "dra",
    write: true
  }
})], c27.prototype, "dynamicRangeAdjustment", void 0), e([y({
  type: [Number],
  json: {
    write: true
  }
})], c27.prototype, "gamma", void 0), e([y()], c27.prototype, "histograms", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], c27.prototype, "maxPercent", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], c27.prototype, "minPercent", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], c27.prototype, "numberOfStandardDeviations", void 0), e([y({
  type: Number,
  json: {
    name: "max",
    write: true
  }
})], c27.prototype, "outputMax", void 0), e([y({
  type: Number,
  json: {
    name: "min",
    write: true
  }
})], c27.prototype, "outputMin", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], c27.prototype, "sigmoidStrengthLevel", void 0), e([y({
  json: {
    type: [[Number]],
    write: true
  }
})], c27.prototype, "statistics", void 0), e([r("statistics")], c27.prototype, "writeStatistics", null), e([o2(p21)], c27.prototype, "stretchType", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], c27.prototype, "useGamma", void 0), c27 = n18 = e([a2("esri.layers.support.rasterFunctions.StretchFunctionArguments")], c27);
var u16 = c27;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/StretchFunction.js
var c28 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "Stretch", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.lookup = null, this.cutOffs = null;
  }
  _bindSourceRasters() {
    this.lookup = null, this.cutOffs = null;
    const t6 = this.sourceRasterInfos[0], {
      pixelType: s12
    } = t6, {
      functionArguments: e9
    } = this, {
      dynamicRangeAdjustment: r8,
      gamma: u18,
      useGamma: i29
    } = e9;
    if (!r8 && ["u8", "u16", "s8", "s16"].includes(s12)) {
      const r9 = p3(e9.toJSON(), {
        rasterInfo: t6
      }), p23 = i(this.outputPixelType) ? "round" : "float";
      this.lookup = a4(__spreadProps(__spreadValues({
        pixelType: s12
      }, r9), {
        gamma: i29 ? u18 : null,
        rounding: p23
      })), this.cutOffs = r9;
    } else r8 || (this.cutOffs = p3(e9.toJSON(), {
      rasterInfo: t6
    }));
    this.outputPixelType = this._getOutputPixelType(s12);
    const p22 = t6.clone();
    p22.pixelType = this.outputPixelType, this._removeStatsHistColormapVAT(p22), "u8" === this.outputPixelType && (p22.keyProperties.DataType = "processed");
    const {
      outputMin: m12 = 0,
      outputMax: c32 = 255
    } = this.functionArguments;
    p22.statistics = [];
    for (let o11 = 0; o11 < p22.bandCount; o11++) p22.statistics[o11] = {
      min: m12,
      max: c32
    };
    this.rasterInfo = p22;
    return {
      success: true,
      supportsGPU: !r8
    };
  }
  _processPixels(t6) {
    const s12 = t6.pixelBlocks?.[0];
    if (null == s12) return s12;
    const {
      lookup: e9
    } = this;
    if (e9) return f2(s12, __spreadProps(__spreadValues({}, e9), {
      outputPixelType: this.rasterInfo.pixelType
    }));
    const {
      functionArguments: o11
    } = this, r8 = this.cutOffs || p3(o11.toJSON(), {
      rasterInfo: this.sourceRasterInfos[0],
      pixelBlock: s12
    }), i29 = o11.useGamma ? o11.gamma : null;
    return M(s12, __spreadProps(__spreadValues({}, r8), {
      gamma: i29,
      outputPixelType: this.outputPixelType
    }));
  }
  _getWebGLParameters() {
    const {
      outputMin: t6 = 0,
      outputMax: s12 = 255,
      gamma: e9,
      useGamma: r8
    } = this.functionArguments, u18 = this.rasterInfo.bandCount >= 2 ? 3 : 1, i29 = r8 && e9?.length ? x(u18, e9) : [1, 1, 1], {
      minCutOff: n21,
      maxCutOff: a28
    } = this.cutOffs ?? {
      minCutOff: [0, 0, 0],
      maxCutOff: [255, 255, 255]
    };
    1 === n21.length && (n21[1] = n21[2] = n21[0], a28[1] = a28[2] = a28[0]);
    const p22 = new Float32Array(u18);
    let c32;
    for (c32 = 0; c32 < u18; c32++) p22[c32] = (s12 - t6) / (a28[c32] - n21[c32]);
    const l18 = i(this.outputPixelType);
    return {
      bandCount: u18,
      outMin: t6,
      outMax: s12,
      minCutOff: n21,
      maxCutOff: a28,
      factor: p22,
      useGamma: r8,
      gamma: r8 && e9 ? e9 : [1, 1, 1],
      gammaCorrection: r8 && i29 ? i29 : [1, 1, 1],
      stretchType: this.functionArguments.stretchType,
      isOutputRounded: l18,
      type: "stretch"
    };
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], c28.prototype, "functionName", void 0), e([y({
  type: u16,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], c28.prototype, "functionArguments", void 0), e([y()], c28.prototype, "rasterArgumentNames", void 0), e([y({
  json: {
    write: true
  }
})], c28.prototype, "lookup", void 0), e([y({
  json: {
    write: true
  }
})], c28.prototype, "cutOffs", void 0), c28 = e([a2("esri.layers.support.rasterFunctions.StretchFunction")], c28);
var l16 = c28;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/TableFunctionArguments.js
var c29;
var a24 = c29 = class extends p4 {
  constructor() {
    super(...arguments), this.attributeTableAsRecordSet = null;
  }
  clone() {
    return new c29({
      attributeTableAsRecordSet: a(this.attributeTableAsRecordSet)
    });
  }
};
e([y({
  json: {
    write: true
  }
})], a24.prototype, "attributeTableAsRecordSet", void 0), a24 = c29 = e([a2("esri.layers.support.rasterFunctions.TableFunctionArguments")], a24);
var i27 = a24;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/TableFunction.js
var i28 = class extends p5 {
  constructor() {
    super(...arguments), this.functionName = "Table", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = true;
  }
  _bindSourceRasters() {
    const t6 = this.sourceRasterInfos[0];
    if (t6.bandCount > 1 || t6.pixelType.startsWith("f")) return {
      success: false,
      supportsGPU: false,
      error: "table-function: Source data must be single band and integer pixel type."
    };
    const {
      attributeTableAsRecordSet: e9
    } = this.functionArguments;
    if (!e9) return {
      success: false,
      supportsGPU: false,
      error: "table-function: Missing attributeTableAsRecordSet argument."
    };
    this.outputPixelType = this._getOutputPixelType(t6.pixelType);
    const s12 = t6.clone();
    return s12.pixelType = this.outputPixelType, s12.bandCount = 1, "thematic" !== s12.dataType && (s12.keyProperties = s12.keyProperties ? __spreadProps(__spreadValues({}, s12.keyProperties), {
      DataType: "thematic"
    }) : {
      DataType: "thematic"
    }), this.rasterInfo = s12, {
      success: true,
      supportsGPU: true
    };
  }
  _processPixels(t6) {
    return t6.pixelBlocks?.[0];
  }
};
e([y({
  json: {
    write: true,
    name: "rasterFunction"
  }
})], i28.prototype, "functionName", void 0), e([y({
  type: i27,
  json: {
    write: true,
    name: "rasterFunctionArguments"
  }
})], i28.prototype, "functionArguments", void 0), e([y()], i28.prototype, "rasterArgumentNames", void 0), e([y()], i28.prototype, "isNoopProcess", void 0), i28 = e([a2("esri.layers.support.rasterFunctions.TableFunction")], i28);
var n19 = i28;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/rasterFunctionHelper.js
var N2 = /* @__PURE__ */ new Map();
function R2(t6, e9) {
  const {
    rasterFunctionArguments: r8
  } = t6;
  if (!r8) return;
  (r8.rasters || [r8.raster, r8.raster2]).forEach((t7) => {
    t7 && "number" != typeof t7 && ("string" == typeof t7 ? t7.startsWith("http") && (e9.includes(t7) || e9.push(t7)) : "rasterFunctionArguments" in t7 && R2(t7, e9));
  });
}
function S2(t6, n21) {
  if (n21 = n21 ?? {}, "function" in (t6 = a(t6)) && "arguments" in t6 && t6.arguments) {
    const r8 = x3(t6, /* @__PURE__ */ new Map(), n21);
    if (M3(r8), !r8.renderingRule) throw new s("raster-function-helper", "Unsupported raster function json.");
    t6 = r8.renderingRule;
  }
  if ("rasterFunction" in t6) return V2(t6 = D2(t6), n21);
  throw new s("raster-function-helper", "unsupported raster function json.");
}
function v3(t6, e9) {
  return "rasters" === e9[0] && Array.isArray(t6.rasters) ? t6.rasters : e9.map((e10) => t6[e10]);
}
function w6(t6) {
  return !!(t6 && "object" == typeof t6 && t6.rasterFunction && t6.rasterFunctionArguments);
}
function D2(t6) {
  const {
    rasterFunction: e9,
    rasterFunctionArguments: r8
  } = t6, n21 = {};
  for (const o11 in r8) {
    let t7 = r8[o11];
    const e10 = o11.toLowerCase();
    if ("rasters" === e10 && Array.isArray(t7)) n21.rasters = t7.map((t8) => w6(t8) ? D2(t8) : t8);
    else switch (w6(t7) && (t7 = D2(t7)), e10) {
      case "dra":
        n21.dra = t7;
        break;
      case "pspower":
        n21.psPower = t7;
        break;
      case "pszfactor":
        n21.psZFactor = t7;
        break;
      case "bandids":
        n21.bandIds = t7;
        break;
      default:
        n21[o11[0].toLowerCase() + o11.slice(1)] = t7;
    }
  }
  return "Local" !== e9 || n21.rasters?.length || (n21.rasters = ["$$"]), __spreadProps(__spreadValues({}, t6), {
    rasterFunctionArguments: n21
  });
}
function V2(t6, r8) {
  const {
    rasterFunction: n21,
    rasterFunctionArguments: o11
  } = t6, s12 = t6.outputPixelType?.toLowerCase();
  if (null == n21 || !N2.has(n21)) throw new s("raster-function-helper", `unsupported raster function: ${n21}`);
  const a28 = N2.get(n21), i29 = ("function" == typeof a28.ctor ? a28.ctor : a28.ctor.default).fromJSON(__spreadProps(__spreadValues({}, t6), {
    outputPixelType: s12
  })), {
    rasterArgumentNames: c32
  } = i29, u18 = [], m12 = v3(o11, c32), l18 = "rasters" === c32[0] || c32.length > 1, p22 = [];
  for (let e9 = 0; e9 < m12.length; e9++) {
    const t7 = m12[e9];
    let n22;
    null == t7 || "string" == typeof t7 && t7.startsWith("$") ? u18.push(r8?.raster) : "string" == typeof t7 ? r8[t7] && u18.push(r8[t7]) : "number" != typeof t7 && "rasterFunction" in t7 && (n22 = V2(t7, r8), l18 || (i29.functionArguments[c32[e9]] = n22), u18.push(n22)), l18 && p22.push(n22 ?? t7);
  }
  if (l18 && ("rasters" === c32[0] ? i29.functionArguments.rasters = p22 : c32.forEach((t7, e9) => {
    i29.functionArguments[t7] = p22[e9];
  })), r8) {
    i29.sourceRasters = u18;
    const t7 = r8.raster?.url;
    t7 && (i29.mainPrimaryRasterId = t7);
  }
  return i29;
}
function T2(t6, e9) {
  if (t6 && e9) for (const r8 in t6) {
    const n21 = t6[r8];
    n21 && "object" == typeof n21 && "type" in n21 && ("RasterFunctionTemplate" === n21.type ? T2(n21.arguments, e9) : "RasterFunctionVariable" === n21.type && null != e9[n21.name] && (n21.value = e9[n21.name]));
  }
}
function k3(t6, r8) {
  if (!t6 || "object" != typeof t6) return t6;
  const {
    value: n21
  } = t6;
  if (!n21 || "object" != typeof n21) return t6.isDataset ? "$$" : n21;
  if (Array.isArray(n21)) return 0 === n21.length ? [] : n21.map((t7) => "object" == typeof t7 && "RasterFunctionVariable" === t7.type ? k3(t7, r8) : t7);
  if ("value" in n21 && ["number", "string", "boolean"].includes(typeof n21.value)) return n21.value;
  if (t6.isDataset && "Scalar" !== n21.type) return "$$";
  if (!("type" in n21)) return n21;
  let o11 = n21;
  switch (n21.type) {
    case "Scalar":
      o11 = n21.value;
      break;
    case "AlgorithmicColorRamp":
      o11 = B3(n21);
      break;
    case "MultiPartColorRamp":
      o11 = {
        type: "multipart",
        colorRamps: n21.ArrayOfColorRamp.map(B3)
      };
      break;
    case "ArgumentArray":
      if (n21.elements?.length && "RasterStatistics" !== n21.elements[0].type) {
        const t7 = [];
        for (let o12 = 0; o12 < n21.elements.length; o12++) {
          const s12 = n21.elements[o12], {
            type: a28
          } = s12;
          if (a28) {
            if ("RasterFunctionTemplate" === a28) {
              const {
                renderingRule: e9
              } = x3(s12, r8);
              t7.push(e9), null != s12._object_id && r8.set(s12._object_id, e9);
            } else {
              if ("RasterFunctionVariable" !== a28) throw new s("raster-function-helper", "unsupported raster function json.");
              {
                const e9 = k3(s12, r8);
                t7.push(e9), null != s12._object_id && r8.set(s12._object_id, e9);
              }
            }
          } else t7.push(s12);
        }
        o11 = t7;
      } else o11 = n21.elements;
  }
  return null != n21._object_id && r8.set(n21._object_id, o11), o11;
}
function B3(e9) {
  const r8 = e9.algorithm ?? "esriHSVAlgorithm";
  let {
    FromColor: n21,
    ToColor: o11
  } = e9;
  if (!Array.isArray(n21)) {
    const {
      r: e10,
      g: r9,
      b: o12
    } = y4({
      h: n21.Hue,
      s: n21.Saturation,
      v: n21.Value
    });
    n21 = [e10, r9, o12, n21.AlphaValue];
  }
  if (!Array.isArray(o11)) {
    const {
      r: e10,
      g: r9,
      b: n22
    } = y4({
      h: o11.Hue,
      s: o11.Saturation,
      v: o11.Value
    });
    o11 = [e10, r9, n22, o11.AlphaValue];
  }
  return {
    type: "algorithmic",
    algorithm: r8,
    fromColor: n21,
    toColor: o11
  };
}
function x3(t6, e9, r8) {
  r8 && T2(t6, r8);
  const n21 = {
    renderingRule: {},
    templates: e9
  };
  return E2(t6, n21), n21;
}
function E2(t6, e9) {
  if (!t6 || !e9.renderingRule) return;
  const {
    renderingRule: r8,
    templates: n21
  } = e9, {
    function: o11,
    arguments: s12,
    _object_id: a28
  } = t6;
  if (!o11 || !s12) return;
  null != a28 && n21.set(a28, r8), r8.rasterFunction = o11.type.replace("Function", ""), r8.outputPixelType = o11.pixelType;
  const i29 = {};
  r8.rasterFunctionArguments = i29;
  for (const c32 in s12) {
    if ("type" === c32 || "object_id" === c32 || "_object_ref_id" === c32) continue;
    const t7 = s12[c32];
    t7 && "object" == typeof t7 && "type" in t7 && ("RasterFunctionTemplate" === t7.type || "RasterFunctionVariable" === t7.type) ? ("RasterFunctionVariable" === t7.type ? i29[c32] = k3(t7, n21) : (r8.rasterFunctionArguments[c32] = {}, E2(t7, {
      renderingRule: r8.rasterFunctionArguments[c32],
      templates: n21
    })), null != t7._object_id && n21.set(t7._object_id, i29[c32])) : i29[c32] = t7;
  }
  switch (i29.DEM && !i29.Raster && (i29.Raster = i29.DEM, delete i29.DEM), r8.rasterFunction) {
    case "Stretch":
      $2(i29);
      break;
    case "Colormap":
      L2(i29);
      break;
    case "Convolution":
      O2(i29);
      break;
    case "Mask":
      H2(i29);
  }
}
function M3(t6) {
  const {
    renderingRule: r8,
    templates: n21
  } = t6;
  if ("object" != typeof r8 || !r8?.rasterFunctionArguments || !n21.size) return;
  const {
    rasterFunctionArguments: o11
  } = r8;
  for (const s12 in o11) {
    const t7 = o11[s12], r9 = "_object_ref_id" === s12 ? t7 : t7 && "object" == typeof t7 && "_object_ref_id" in t7 ? t7._object_ref_id : null;
    if (null == r9) t7 && "object" == typeof t7 && (t7.rasterFunctionArguments && M3({
      renderingRule: t7,
      templates: n21
    }), Array.isArray(t7) && t7.forEach((o12, s13) => {
      if ("object" == typeof o12) if (null != o12._object_ref_id) {
        if (!n21.has(o12._object_ref_id)) throw new s("raster-function-helper", `unsupported raster function json. _object_ref_id: ${t7} does not exist`);
        const a28 = n21.get(r9);
        a28 && "object" == typeof a28 ? Object.assign(o12, a28) : t7[s13] = a28;
      } else M3({
        renderingRule: o12,
        templates: n21
      });
    }));
    else {
      if (!n21.has(r9)) throw new s("raster-function-helper", `unsupported raster function json. _object_ref_id: ${r9} does not exist`);
      const t8 = n21.get(r9);
      "_object_ref_id" !== s12 ? o11[s12] = t8 : t8 && "object" == typeof t8 && Object.assign(o11, t8);
    }
  }
}
function $2(t6) {
  t6.Statistics?.length && "object" == typeof t6.Statistics && (t6.Statistics = t6.Statistics.map((t7) => [t7.min, t7.max, t7.mean, t7.standardDeviation])), null != t6.NumberOfStandardDeviation && (t6.NumberOfStandardDeviations = t6.NumberOfStandardDeviation, delete t6.NumberOfStandardDeviation);
}
function L2(t6) {
  "randomcolorramp" === t6.ColorRamp?.type?.toLowerCase() && (delete t6.ColorRamp, t6.ColormapName = "Random"), 0 === t6.ColorSchemeType && delete t6.ColorRamp;
}
function O2(t6) {
  null != t6.ConvolutionType && (t6.Type = t6.ConvolutionType, delete t6.ConvolutionType);
}
function H2(t6) {
  t6.NoDataValues?.length && "string" == typeof t6.NoDataValues[0] && (t6.NoDataValues = t6.NoDataValues.filter((t7) => "" !== t7).map((t7) => Number(t7)));
}
N2.set("Arithmetic", {
  desc: "Arithmetic Function",
  ctor: a8,
  rasterArgumentNames: ["rasters"]
}), N2.set("Aspect", {
  desc: "Aspect Function",
  ctor: p9,
  rasterArgumentNames: ["raster"]
}), N2.set("BandArithmetic", {
  desc: "Band Arithmetic Function",
  ctor: u7,
  rasterArgumentNames: ["raster"]
}), N2.set("Colormap", {
  desc: "Colormap Function",
  ctor: u9,
  rasterArgumentNames: ["raster"]
}), N2.set("CompositeBand", {
  desc: "CompositeBand Function",
  ctor: a14,
  rasterArgumentNames: ["rasters"]
}), N2.set("ComputeChange", {
  desc: "ComputeChange Function",
  ctor: m7,
  rasterArgumentNames: ["rasters"]
}), N2.set("Convolution", {
  desc: "Convolution Function",
  ctor: p15,
  rasterArgumentNames: ["raster"]
}), N2.set("ContrastBrightness", {
  desc: "Contrast Brightness Function",
  ctor: p13,
  rasterArgumentNames: ["raster"]
}), N2.set("ExtractBand", {
  desc: "ExtractBand Function",
  ctor: l13,
  rasterArgumentNames: ["raster"]
}), N2.set("Curvature", {
  desc: "Curvature Function",
  ctor: c16,
  rasterArgumentNames: ["raster"]
}), N2.set("Grayscale", {
  desc: "Grayscale Function",
  ctor: u14,
  rasterArgumentNames: ["raster"]
}), N2.set("Clip", {
  desc: "Clip Function",
  ctor: p12,
  rasterArgumentNames: ["raster"]
}), N2.set("Local", {
  desc: "Local Function",
  ctor: d7,
  rasterArgumentNames: ["rasters"]
}), N2.set("Mask", {
  desc: "Mask Function",
  ctor: p16,
  rasterArgumentNames: ["raster"]
}), N2.set("NDVI", {
  desc: "NDVI Function",
  ctor: a20,
  rasterArgumentNames: ["raster"]
}), N2.set("Remap", {
  desc: "Remap Function",
  ctor: g5,
  rasterArgumentNames: ["raster"]
}), N2.set("Slope", {
  desc: "Slope Function",
  ctor: c23,
  rasterArgumentNames: ["raster"]
}), N2.set("Statistics", {
  desc: "Focal Statistics Function",
  ctor: p19,
  rasterArgumentNames: ["raster"]
}), N2.set("StatisticsHistogram", {
  desc: "Statistics Histogram Function",
  ctor: n17,
  rasterArgumentNames: ["raster"]
}), N2.set("Stretch", {
  desc: "Stretch Function",
  ctor: l16,
  rasterArgumentNames: ["raster"]
}), N2.set("Table", {
  desc: "Attribute Table Function",
  ctor: n19,
  rasterArgumentNames: ["raster"]
});

// ../../../node_modules/@arcgis/core/layers/support/rasterTransforms/BaseRasterTransform.js
var t5 = class extends f {
  get affectsPixelSize() {
    return false;
  }
  forwardTransform(r8) {
    return r8;
  }
  inverseTransform(r8) {
    return r8;
  }
};
e([y()], t5.prototype, "affectsPixelSize", null), e([y({
  json: {
    write: true
  }
})], t5.prototype, "spatialReference", void 0), t5 = e([a2("esri.layers.support.rasterTransforms.BaseRasterTransform")], t5);
var a25 = t5;

// ../../../node_modules/@arcgis/core/layers/support/rasterTransforms/GCSShiftTransform.js
var a26;
var n20 = a26 = class extends a25 {
  constructor() {
    super(...arguments), this.type = "gcs-shift", this.tolerance = 1e-8;
  }
  forwardTransform(r8) {
    return "point" === (r8 = r8.clone()).type ? (r8.x > 180 + this.tolerance && (r8.x -= 360), r8) : (r8.xmin >= 180 - this.tolerance ? (r8.xmax -= 360, r8.xmin -= 360) : r8.xmax > 180 + this.tolerance && (r8.xmin = -180, r8.xmax = 180), r8);
  }
  inverseTransform(r8) {
    return "point" === (r8 = r8.clone()).type ? (r8.x < -this.tolerance && (r8.x += 360), r8) : (r8.xmin < -this.tolerance && (r8.xmin += 360, r8.xmax += 360), r8);
  }
  clone() {
    return new a26({
      tolerance: this.tolerance
    });
  }
};
e([o2({
  GCSShiftXform: "gcs-shift"
})], n20.prototype, "type", void 0), e([y()], n20.prototype, "tolerance", void 0), n20 = a26 = e([a2("esri.layers.support.rasterTransforms.GCSShiftTransform")], n20);
var c30 = n20;

// ../../../node_modules/@arcgis/core/layers/support/rasterTransforms/PolynomialTransform.js
var l17;
function a27(e9, r8, o11) {
  const {
    x: t6,
    y: s12
  } = r8;
  if (o11 < 2) {
    return {
      x: e9[0] + t6 * e9[2] + s12 * e9[4],
      y: e9[1] + t6 * e9[3] + s12 * e9[5]
    };
  }
  if (2 === o11) {
    const r9 = t6 * t6, o12 = s12 * s12, i30 = t6 * s12;
    return {
      x: e9[0] + t6 * e9[2] + s12 * e9[4] + r9 * e9[6] + i30 * e9[8] + o12 * e9[10],
      y: e9[1] + t6 * e9[3] + s12 * e9[5] + r9 * e9[7] + i30 * e9[9] + o12 * e9[11]
    };
  }
  const i29 = t6 * t6, n21 = s12 * s12, f6 = t6 * s12, p22 = i29 * t6, l18 = i29 * s12, a28 = t6 * n21, c32 = s12 * n21;
  return {
    x: e9[0] + t6 * e9[2] + s12 * e9[4] + i29 * e9[6] + f6 * e9[8] + n21 * e9[10] + p22 * e9[12] + l18 * e9[14] + a28 * e9[16] + c32 * e9[18],
    y: e9[1] + t6 * e9[3] + s12 * e9[5] + i29 * e9[7] + f6 * e9[9] + n21 * e9[11] + p22 * e9[13] + l18 * e9[15] + a28 * e9[17] + c32 * e9[19]
  };
}
function c31(e9, r8, o11) {
  const {
    xmin: t6,
    ymin: s12,
    xmax: i29,
    ymax: n21,
    spatialReference: f6
  } = r8;
  let l18 = [];
  if (o11 < 2) l18.push({
    x: t6,
    y: n21
  }), l18.push({
    x: i29,
    y: n21
  }), l18.push({
    x: t6,
    y: s12
  }), l18.push({
    x: i29,
    y: s12
  });
  else {
    let e10 = 10;
    for (let r9 = 0; r9 < e10; r9++) l18.push({
      x: t6,
      y: s12 + (n21 - s12) * r9 / (e10 - 1)
    }), l18.push({
      x: i29,
      y: s12 + (n21 - s12) * r9 / (e10 - 1)
    });
    e10 = 8;
    for (let r9 = 1; r9 <= e10; r9++) l18.push({
      x: t6 + (i29 - t6) * r9 / e10,
      y: s12
    }), l18.push({
      x: t6 + (i29 - t6) * r9 / e10,
      y: n21
    });
  }
  l18 = l18.map((r9) => a27(e9, r9, o11));
  const c32 = l18.map((e10) => e10.x), m12 = l18.map((e10) => e10.y);
  return new w({
    xmin: Math.min.apply(null, c32),
    xmax: Math.max.apply(null, c32),
    ymin: Math.min.apply(null, m12),
    ymax: Math.max.apply(null, m12),
    spatialReference: f6
  });
}
function m11(e9) {
  const [r8, o11, t6, s12, i29, n21] = e9, f6 = t6 * n21 - i29 * s12, p22 = i29 * s12 - t6 * n21;
  return [(i29 * o11 - r8 * n21) / f6, (t6 * o11 - r8 * s12) / p22, n21 / f6, s12 / p22, -i29 / f6, -t6 / p22];
}
var u17 = l17 = class extends a25 {
  constructor() {
    super(...arguments), this.polynomialOrder = 1, this.type = "polynomial";
  }
  readForwardCoefficients(e9, r8) {
    const {
      coeffX: o11,
      coeffY: t6
    } = r8;
    if (!o11?.length || !t6?.length || o11.length !== t6.length) return null;
    const s12 = [];
    for (let i29 = 0; i29 < o11.length; i29++) s12.push(o11[i29]), s12.push(t6[i29]);
    return s12;
  }
  writeForwardCoefficients(e9, r8, o11) {
    const t6 = [], s12 = [];
    for (let i29 = 0; i29 < e9?.length; i29++) i29 % 2 == 0 ? t6.push(e9[i29]) : s12.push(e9[i29]);
    r8.coeffX = t6, r8.coeffY = s12;
  }
  get inverseCoefficients() {
    let e9 = this._get("inverseCoefficients");
    const r8 = this._get("forwardCoefficients");
    return !e9 && r8 && this.polynomialOrder < 2 && (e9 = m11(r8)), e9;
  }
  set inverseCoefficients(e9) {
    this._set("inverseCoefficients", e9);
  }
  readInverseCoefficients(e9, r8) {
    const {
      inverseCoeffX: o11,
      inverseCoeffY: t6
    } = r8;
    if (!o11?.length || !t6?.length || o11.length !== t6.length) return null;
    const s12 = [];
    for (let i29 = 0; i29 < o11.length; i29++) s12.push(o11[i29]), s12.push(t6[i29]);
    return s12;
  }
  writeInverseCoefficients(e9, r8, o11) {
    const t6 = [], s12 = [];
    for (let i29 = 0; i29 < e9?.length; i29++) i29 % 2 == 0 ? t6.push(e9[i29]) : s12.push(e9[i29]);
    r8.inverseCoeffX = t6, r8.inverseCoeffY = s12;
  }
  get affectsPixelSize() {
    return this.polynomialOrder > 0;
  }
  forwardTransform(e9) {
    if ("point" === e9.type) {
      const r8 = a27(this.forwardCoefficients, e9, this.polynomialOrder);
      return new _({
        x: r8.x,
        y: r8.y,
        spatialReference: e9.spatialReference
      });
    }
    return c31(this.forwardCoefficients, e9, this.polynomialOrder);
  }
  inverseTransform(e9) {
    if ("point" === e9.type) {
      const r8 = a27(this.inverseCoefficients, e9, this.polynomialOrder);
      return new _({
        x: r8.x,
        y: r8.y,
        spatialReference: e9.spatialReference
      });
    }
    return c31(this.inverseCoefficients, e9, this.polynomialOrder);
  }
  clone() {
    return new l17({
      polynomialOrder: this.polynomialOrder,
      forwardCoefficients: this.forwardCoefficients ? [...this.forwardCoefficients] : null,
      inverseCoefficients: this.inverseCoefficients ? [...this.inverseCoefficients] : null
    });
  }
};
e([y({
  json: {
    write: true
  }
})], u17.prototype, "polynomialOrder", void 0), e([y()], u17.prototype, "forwardCoefficients", void 0), e([o("forwardCoefficients", ["coeffX", "coeffY"])], u17.prototype, "readForwardCoefficients", null), e([r("forwardCoefficients")], u17.prototype, "writeForwardCoefficients", null), e([y({
  json: {
    write: true
  }
})], u17.prototype, "inverseCoefficients", null), e([o("inverseCoefficients", ["inverseCoeffX", "inverseCoeffY"])], u17.prototype, "readInverseCoefficients", null), e([r("inverseCoefficients")], u17.prototype, "writeInverseCoefficients", null), e([y()], u17.prototype, "affectsPixelSize", null), e([o2({
  PolynomialXform: "polynomial"
})], u17.prototype, "type", void 0), u17 = l17 = e([a2("esri.layers.support.rasterTransforms.PolynomialTransform")], u17);
var y8 = u17;

export {
  l3 as l,
  R2 as R,
  S2 as S,
  a25 as a,
  c30 as c,
  y8 as y
};
//# sourceMappingURL=chunk-GOKHH3SD.js.map
