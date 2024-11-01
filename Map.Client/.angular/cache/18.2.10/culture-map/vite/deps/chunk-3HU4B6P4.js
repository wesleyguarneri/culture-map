import {
  s as s5
} from "./chunk-5AUX2A3J.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  s as s3
} from "./chunk-NKCPFCP3.js";
import {
  h
} from "./chunk-3ZXOUEQG.js";
import {
  s2 as s4
} from "./chunk-JJS7PR2U.js";
import {
  n as n2
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
  s as s2
} from "./chunk-HJY2YILU.js";
import {
  a,
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  has,
  t
} from "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/support/SimpleBandStatistics.js
var l = class {
  constructor(l4 = null, a6 = null, t2 = null) {
    this.minValue = l4, this.maxValue = a6, this.noDataValue = t2;
  }
};

// ../../../node_modules/@arcgis/core/layers/support/PixelBlock.js
var p;
var c = p = class extends f {
  static createEmptyBand(t2, e2) {
    return new (p.getPixelArrayConstructor(t2))(e2);
  }
  static combineBandMasks(t2) {
    if (t2.length < 2) return t2[0];
    const e2 = t2[0].length, s8 = new Uint8Array(e2).fill(255);
    for (let i4 = 0; i4 < t2.length; i4++) {
      const l4 = t2[i4];
      for (let t3 = 0; t3 < e2; t3++) l4[t3] || (s8[t3] = 0);
    }
    return s8;
  }
  static getPixelArrayConstructor(t2) {
    let e2;
    switch (t2) {
      case "u1":
      case "u2":
      case "u4":
      case "u8":
        e2 = Uint8Array;
        break;
      case "u16":
        e2 = Uint16Array;
        break;
      case "u32":
        e2 = Uint32Array;
        break;
      case "s8":
        e2 = Int8Array;
        break;
      case "s16":
        e2 = Int16Array;
        break;
      case "s32":
        e2 = Int32Array;
        break;
      case "f32":
      case "c64":
      case "c128":
      case "unknown":
        e2 = Float32Array;
        break;
      case "f64":
        e2 = Float64Array;
    }
    return e2;
  }
  constructor(t2) {
    super(t2), this.width = null, this.height = null, this.pixelType = "f32", this.validPixelCount = null, this.mask = null, this.maskIsAlpha = false, this.premultiplyAlpha = false, this.statistics = null, this.depthCount = 1;
  }
  castPixelType(t2) {
    if (!t2) return "f32";
    let e2 = t2.toLowerCase();
    return ["u1", "u2", "u4"].includes(e2) ? e2 = "u8" : ["unknown", "u8", "s8", "u16", "s16", "u32", "s32", "f32", "f64"].includes(e2) || (e2 = "f32"), e2;
  }
  getPlaneCount() {
    return this.pixels?.length;
  }
  addData(t2) {
    if (!t2.pixels || t2.pixels.length !== this.width * this.height) throw new s("pixelblock:invalid-or-missing-pixels", "add data requires valid pixels array that has same length defined by pixel block width * height");
    this.pixels || (this.pixels = []), this.statistics || (this.statistics = []), this.pixels.push(t2.pixels), this.statistics.push(t2.statistics ?? new l());
  }
  getAsRGBA() {
    const t2 = new ArrayBuffer(this.width * this.height * 4);
    switch (this.pixelType) {
      case "s8":
      case "s16":
      case "u16":
      case "s32":
      case "u32":
      case "f32":
      case "f64":
        this._fillFromNon8Bit(t2);
        break;
      default:
        this._fillFrom8Bit(t2);
    }
    return new Uint8ClampedArray(t2);
  }
  getAsRGBAFloat() {
    const t2 = new Float32Array(this.width * this.height * 4);
    return this._fillFrom32Bit(t2), t2;
  }
  updateStatistics() {
    if (!this.pixels) return;
    this.statistics = this.pixels.map((t3) => u(t3, this.mask));
    const t2 = this.mask;
    let e2 = 0;
    if (null != t2) for (let s8 = 0; s8 < t2.length; s8++) t2[s8] && e2++;
    else e2 = this.width * this.height;
    this.validPixelCount = e2;
  }
  clamp(t2) {
    if (!t2 || "f64" === t2 || "f32" === t2 || !this.pixels) return;
    const [e2, s8] = s5(t2), i4 = this.pixels, l4 = this.width * this.height, r3 = i4.length;
    let o3, n4, a6;
    const c5 = [];
    for (let h5 = 0; h5 < r3; h5++) {
      a6 = p.createEmptyBand(t2, l4), o3 = i4[h5];
      for (let t3 = 0; t3 < l4; t3++) n4 = o3[t3], a6[t3] = n4 > s8 ? s8 : n4 < e2 ? e2 : n4;
      c5.push(a6);
    }
    this.pixels = c5, this.pixelType = t2;
  }
  extractBands(t2) {
    const {
      pixels: e2,
      statistics: s8
    } = this;
    if (null == t2 || 0 === t2.length || !e2 || 0 === e2.length) return this;
    const i4 = e2.length, l4 = t2.some((t3) => t3 >= e2.length), r3 = i4 === t2.length && !t2.some((t3, e3) => t3 !== e3);
    if (l4 || r3) return this;
    const o3 = this.bandMasks?.length === i4 ? t2.map((t3) => this.bandMasks[t3]) : void 0;
    let {
      mask: n4,
      validPixelCount: a6
    } = this;
    const {
      width: h5,
      height: c5
    } = this;
    return o3?.length && (n4 = p.combineBandMasks(o3), a6 = n4.filter((t3) => !!t3).length), new p({
      pixelType: this.pixelType,
      width: h5,
      height: c5,
      mask: n4,
      bandMasks: o3,
      validPixelCount: a6,
      maskIsAlpha: this.maskIsAlpha,
      pixels: t2.map((t3) => e2[t3]),
      statistics: s8 && t2.map((t3) => s8[t3])
    });
  }
  clone() {
    const t2 = new p({
      width: this.width,
      height: this.height,
      pixelType: this.pixelType,
      maskIsAlpha: this.maskIsAlpha,
      validPixelCount: this.validPixelCount
    });
    let e2;
    null != this.mask && (t2.mask = new Uint8Array(this.mask)), this.bandMasks && (t2.bandMasks = this.bandMasks.map((t3) => new Uint8Array(t3)));
    const s8 = p.getPixelArrayConstructor(this.pixelType);
    if (this.pixels && this.pixels.length > 0) {
      t2.pixels = [];
      const i4 = !!this.pixels[0].slice;
      for (e2 = 0; e2 < this.pixels.length; e2++) t2.pixels[e2] = i4 ? this.pixels[e2].slice(0, this.pixels[e2].length) : new s8(this.pixels[e2]);
    }
    if (this.statistics) for (t2.statistics = [], e2 = 0; e2 < this.statistics.length; e2++) t2.statistics[e2] = a(this.statistics[e2]);
    return t2.premultiplyAlpha = this.premultiplyAlpha, t2;
  }
  _fillFrom8Bit(t2) {
    const {
      mask: e2,
      maskIsAlpha: s8,
      premultiplyAlpha: i4,
      pixels: r3
    } = this;
    if (!t2 || !r3?.length) return void n.getLogger(this).error("getAsRGBA()", "Unable to convert to RGBA. The input pixel block is empty.");
    let o3, n4, a6, h5;
    o3 = n4 = a6 = r3[0], r3.length >= 3 ? (n4 = r3[1], a6 = r3[2]) : 2 === r3.length && (n4 = r3[1]);
    const p5 = new Uint32Array(t2), c5 = this.width * this.height;
    if (o3.length === c5) {
      if (null != e2 && e2.length === c5) {
        if (s8) for (h5 = 0; h5 < c5; h5++) {
          const t3 = e2[h5];
          if (t3) {
            const e3 = t3 / 255;
            p5[h5] = i4 ? t3 << 24 | a6[h5] * e3 << 16 | n4[h5] * e3 << 8 | o3[h5] * e3 : t3 << 24 | a6[h5] << 16 | n4[h5] << 8 | o3[h5];
          }
        }
        else for (h5 = 0; h5 < c5; h5++) e2[h5] && (p5[h5] = 255 << 24 | a6[h5] << 16 | n4[h5] << 8 | o3[h5]);
      } else for (h5 = 0; h5 < c5; h5++) p5[h5] = 255 << 24 | a6[h5] << 16 | n4[h5] << 8 | o3[h5];
    } else n.getLogger(this).error("getAsRGBA()", "Unable to convert to RGBA. The pixelblock is invalid.");
  }
  _fillFromNon8Bit(t2) {
    const {
      pixels: e2,
      mask: s8,
      statistics: i4
    } = this;
    if (!t2 || !e2?.length) return void n.getLogger(this).error("getAsRGBA()", "Unable to convert to RGBA. The input pixel block is empty.");
    const r3 = this.pixelType;
    let o3 = 1, n4 = 0, a6 = 1;
    if (i4 && i4.length > 0) {
      for (const t3 of i4) if (null != t3.minValue && (n4 = Math.min(n4, t3.minValue)), null != t3.maxValue && null != t3.minValue) {
        const e3 = t3.maxValue - t3.minValue;
        a6 = Math.max(a6, e3);
      }
      o3 = 255 / a6;
    } else {
      let t3 = 255;
      "s8" === r3 ? (n4 = -128, t3 = 127) : "u16" === r3 ? t3 = 65535 : "s16" === r3 ? (n4 = -32768, t3 = 32767) : "u32" === r3 ? t3 = 4294967295 : "s32" === r3 ? (n4 = -2147483648, t3 = 2147483647) : "f32" === r3 ? (n4 = -34e38, t3 = 34e38) : "f64" === r3 && (n4 = -Number.MAX_VALUE, t3 = Number.MAX_VALUE), o3 = 255 / (t3 - n4);
    }
    const h5 = new Uint32Array(t2), p5 = this.width * this.height;
    let c5, u5, g5, f5, m4;
    if (c5 = u5 = g5 = e2[0], c5.length !== p5) return n.getLogger(this).error("getAsRGBA()", "Unable to convert to RGBA. The pixelblock is invalid.");
    if (e2.length >= 2) {
      if (u5 = e2[1], e2.length >= 3 && (g5 = e2[2]), null != s8 && s8.length === p5) for (f5 = 0; f5 < p5; f5++) s8[f5] && (h5[f5] = 255 << 24 | (g5[f5] - n4) * o3 << 16 | (u5[f5] - n4) * o3 << 8 | (c5[f5] - n4) * o3);
      else for (f5 = 0; f5 < p5; f5++) h5[f5] = 255 << 24 | (g5[f5] - n4) * o3 << 16 | (u5[f5] - n4) * o3 << 8 | (c5[f5] - n4) * o3;
    } else if (null != s8 && s8.length === p5) for (f5 = 0; f5 < p5; f5++) m4 = (c5[f5] - n4) * o3, s8[f5] && (h5[f5] = 255 << 24 | m4 << 16 | m4 << 8 | m4);
    else for (f5 = 0; f5 < p5; f5++) m4 = (c5[f5] - n4) * o3, h5[f5] = 255 << 24 | m4 << 16 | m4 << 8 | m4;
  }
  _fillFrom32Bit(t2) {
    const {
      pixels: e2,
      mask: s8
    } = this;
    if (!t2 || !e2?.length) return n.getLogger(this).error("getAsRGBAFloat()", "Unable to convert to RGBA. The input pixel block is empty.");
    let i4, r3, o3, n4;
    i4 = r3 = o3 = e2[0], e2.length >= 3 ? (r3 = e2[1], o3 = e2[2]) : 2 === e2.length && (r3 = e2[1]);
    const a6 = this.width * this.height;
    if (i4.length !== a6) return n.getLogger(this).error("getAsRGBAFloat()", "Unable to convert to RGBA. The pixelblock is invalid.");
    let h5 = 0;
    if (null != s8 && s8.length === a6) for (n4 = 0; n4 < a6; n4++) t2[h5++] = i4[n4], t2[h5++] = r3[n4], t2[h5++] = o3[n4], t2[h5++] = 1 & s8[n4];
    else for (n4 = 0; n4 < a6; n4++) t2[h5++] = i4[n4], t2[h5++] = r3[n4], t2[h5++] = o3[n4], t2[h5++] = 1;
  }
};
function u(t2, e2) {
  let s8 = 1 / 0, i4 = -1 / 0;
  const l4 = t2.length;
  let r3, o3 = 0;
  if (null != e2) for (r3 = 0; r3 < l4; r3++) e2[r3] && (o3 = t2[r3], s8 = o3 < s8 ? o3 : s8, i4 = o3 > i4 ? o3 : i4);
  else for (r3 = 0; r3 < l4; r3++) o3 = t2[r3], s8 = o3 < s8 ? o3 : s8, i4 = o3 > i4 ? o3 : i4;
  return new l(s8, i4);
}
e([y({
  json: {
    write: true
  }
})], c.prototype, "width", void 0), e([y({
  json: {
    write: true
  }
})], c.prototype, "height", void 0), e([y({
  json: {
    write: true
  }
})], c.prototype, "pixelType", void 0), e([s3("pixelType")], c.prototype, "castPixelType", null), e([y({
  json: {
    write: true
  }
})], c.prototype, "validPixelCount", void 0), e([y({
  json: {
    write: true
  }
})], c.prototype, "mask", void 0), e([y({
  json: {
    write: true
  }
})], c.prototype, "maskIsAlpha", void 0), e([y({
  json: {
    write: true
  }
})], c.prototype, "pixels", void 0), e([y()], c.prototype, "premultiplyAlpha", void 0), e([y({
  json: {
    write: true
  }
})], c.prototype, "statistics", void 0), e([y({
  json: {
    write: true
  }
})], c.prototype, "depthCount", void 0), e([y({
  json: {
    write: true
  }
})], c.prototype, "noDataValues", void 0), e([y({
  json: {
    write: true
  }
})], c.prototype, "bandMasks", void 0), c = p = e([a2("esri.layers.support.PixelBlock")], c);
var g = c;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/pixelUtils.js
var n3;
var l2;
!function(t2) {
  t2[t2.matchAny = 0] = "matchAny", t2[t2.matchAll = 1] = "matchAll";
}(n3 || (n3 = {})), function(t2) {
  t2[t2.bestMatch = 0] = "bestMatch", t2[t2.fail = 1] = "fail";
}(l2 || (l2 = {}));
var i = 6;
function o(t2) {
  return null != t2 && "esri.layers.support.PixelBlock" === t2.declaredClass && t2.pixels && t2.pixels.length > 0;
}
function r(e2) {
  if (!e2?.length || e2.some((t2) => !o(t2))) return null;
  if (1 === e2.length) return e2[0]?.clone() ?? null;
  const n4 = e2, {
    width: l4,
    height: i4,
    pixelType: s8
  } = n4[0];
  if (n4.some((t2) => t2.width !== l4 || t2.height !== i4)) return null;
  const r3 = n4.map(({
    mask: t2
  }) => t2).filter((t2) => null != t2);
  let a6 = null;
  r3.length && (a6 = new Uint8Array(l4 * i4), a6.set(r3[0]), r3.length > 1 && m(r3.slice(1), a6));
  const h5 = [];
  n4.forEach(({
    pixels: t2
  }) => h5.push(...t2));
  const f5 = n4.map(({
    statistics: t2
  }) => t2).filter((t2) => t2?.length), c5 = [];
  return f5.forEach((t2) => c5.push(...t2)), new g({
    pixelType: s8,
    width: l4,
    height: i4,
    mask: a6,
    pixels: h5,
    statistics: c5.length ? c5 : null
  });
}
function a3(t2) {
  if (!t2) return;
  const e2 = t2.colormap;
  if (!e2 || 0 === e2.length) return;
  const n4 = e2.sort((t3, e3) => t3[0] - e3[0]);
  let l4 = 0;
  n4[0][0] < 0 && (l4 = n4[0][0]);
  const i4 = Math.max(256, n4[n4.length - 1][0] - l4 + 1), o3 = new Uint8Array(4 * i4), s8 = [];
  let r3, a6 = 0, h5 = 0;
  const f5 = 5 === n4[0].length;
  if (i4 > 65536) return n4.forEach((t3) => {
    s8[t3[0] - l4] = f5 ? t3.slice(1) : t3.slice(1).concat([255]);
  }), {
    indexed2DColormap: s8,
    offset: l4,
    alphaSpecified: f5
  };
  if (t2.fillUnspecified) for (r3 = n4[h5], a6 = r3[0] - l4; a6 < i4; a6++) o3[4 * a6] = r3[1], o3[4 * a6 + 1] = r3[2], o3[4 * a6 + 2] = r3[3], o3[4 * a6 + 3] = f5 ? r3[4] : 255, a6 === r3[0] - l4 && (r3 = h5 === n4.length - 1 ? r3 : n4[++h5]);
  else for (a6 = 0; a6 < n4.length; a6++) r3 = n4[a6], h5 = 4 * (r3[0] - l4), o3[h5] = r3[1], o3[h5 + 1] = r3[2], o3[h5 + 2] = r3[3], o3[h5 + 3] = f5 ? r3[4] : 255;
  return {
    indexedColormap: o3,
    offset: l4,
    alphaSpecified: f5
  };
}
function h2(t2, e2) {
  if (!o(t2)) return t2;
  if (!e2 || !e2.indexedColormap && !e2.indexed2DColormap) return t2;
  const n4 = t2.clone(), l4 = n4.pixels;
  let i4 = n4.mask;
  const s8 = n4.width * n4.height;
  if (1 !== l4.length) return t2;
  const {
    indexedColormap: r3,
    indexed2DColormap: a6,
    offset: h5,
    alphaSpecified: f5
  } = e2;
  let c5 = 0;
  const u5 = l4[0], p5 = new Uint8Array(u5.length), x3 = new Uint8Array(u5.length), d4 = new Uint8Array(u5.length);
  let m4, g5 = 0;
  if (r3) {
    const t3 = r3.length - 1;
    if (null != i4) for (c5 = 0; c5 < s8; c5++) i4[c5] && (g5 = 4 * (u5[c5] - h5), g5 < h5 || g5 > t3 ? i4[c5] = 0 : (p5[c5] = r3[g5], x3[c5] = r3[g5 + 1], d4[c5] = r3[g5 + 2], i4[c5] = r3[g5 + 3]));
    else {
      for (i4 = new Uint8Array(s8), c5 = 0; c5 < s8; c5++) g5 = 4 * (u5[c5] - h5), g5 < h5 || g5 > t3 ? i4[c5] = 0 : (p5[c5] = r3[g5], x3[c5] = r3[g5 + 1], d4[c5] = r3[g5 + 2], i4[c5] = r3[g5 + 3]);
      n4.mask = i4;
    }
  } else if (a6) if (null != i4) for (c5 = 0; c5 < s8; c5++) i4[c5] && (m4 = a6[u5[c5]], p5[c5] = m4[0], x3[c5] = m4[1], d4[c5] = m4[2], i4[c5] = m4[3]);
  else {
    for (i4 = new Uint8Array(s8), c5 = 0; c5 < s8; c5++) m4 = a6[u5[c5]], p5[c5] = m4[0], x3[c5] = m4[1], d4[c5] = m4[2], i4[c5] = m4[3];
    n4.mask = i4;
  }
  return n4.pixels = [p5, x3, d4], n4.statistics = null, n4.pixelType = "u8", n4.maskIsAlpha = f5, n4;
}
function f2(e2, n4) {
  if (!o(e2)) return null;
  const {
    pixels: l4,
    mask: i4
  } = e2, s8 = l4.length;
  let r3 = n4.lut;
  const {
    offset: a6
  } = n4;
  r3 && 1 === r3[0].length && (r3 = l4.map(() => r3));
  const h5 = [], f5 = n4.outputPixelType || "u8";
  for (let t2 = 0; t2 < s8; t2++) {
    const e3 = c2(l4[t2], i4, r3[t2], a6 || 0, f5);
    h5.push(e3);
  }
  const u5 = new g({
    width: e2.width,
    height: e2.height,
    pixels: h5,
    mask: i4,
    pixelType: f5
  });
  return u5.updateStatistics(), u5;
}
function c2(e2, n4, l4, i4, o3) {
  const s8 = e2.length, r3 = g.createEmptyBand(o3, s8);
  if (n4) for (let t2 = 0; t2 < s8; t2++) n4[t2] && (r3[t2] = l4[e2[t2] - i4]);
  else for (let t2 = 0; t2 < s8; t2++) r3[t2] = l4[e2[t2] - i4];
  return r3;
}
function u2(t2, e2) {
  if (!o(t2)) return null;
  const n4 = t2.clone(), {
    pixels: l4
  } = n4, i4 = n4.width * n4.height, s8 = e2.length, r3 = Math.floor(s8 / 2), a6 = e2[Math.floor(r3)], h5 = l4[0];
  let f5, c5, u5, p5, x3, d4, m4 = false;
  const g5 = new Uint8Array(i4), y5 = new Uint8Array(i4), w5 = new Uint8Array(i4);
  let k3 = n4.mask;
  const M3 = 4 === e2[0].mappedColor.length;
  for (k3 || (k3 = new Uint8Array(i4), k3.fill(M3 ? 255 : 1), n4.mask = k3), x3 = 0; x3 < i4; x3++) if (k3[x3]) {
    for (f5 = h5[x3], m4 = false, d4 = r3, c5 = a6, u5 = 0, p5 = s8 - 1; p5 - u5 > 1; ) {
      if (f5 === c5.value) {
        m4 = true;
        break;
      }
      f5 > c5.value ? u5 = d4 : p5 = d4, d4 = Math.floor((u5 + p5) / 2), c5 = e2[Math.floor(d4)];
    }
    m4 || (f5 === e2[u5].value ? (c5 = e2[u5], m4 = true) : f5 === e2[p5].value ? (c5 = e2[p5], m4 = true) : f5 < e2[u5].value ? (m4 = false, c5 = null) : f5 > e2[u5].value && (f5 < e2[p5].value ? (c5 = e2[u5], m4 = true) : p5 === s8 - 1 ? (m4 = false, c5 = null) : (c5 = e2[p5], m4 = true))), m4 ? (g5[x3] = c5.mappedColor[0], y5[x3] = c5.mappedColor[1], w5[x3] = c5.mappedColor[2], k3[x3] = c5.mappedColor[3]) : g5[x3] = y5[x3] = w5[x3] = k3[x3] = 0;
  }
  return n4.pixels = [g5, y5, w5], n4.mask = k3, n4.pixelType = "u8", n4.maskIsAlpha = M3, n4;
}
function p2(n4, l4) {
  if (!o(n4)) return null;
  const {
    width: i4,
    height: s8
  } = n4, {
    inputRanges: r3,
    outputValues: a6,
    outputPixelType: h5,
    noDataRanges: f5,
    allowUnmatched: c5,
    isLastInputRangeInclusive: u5
  } = l4, p5 = n4.pixels[0], x3 = g.createEmptyBand(h5, p5.length), d4 = n4.mask, m4 = new Uint8Array(i4 * s8);
  d4 ? m4.set(d4) : m4.fill(255);
  const g5 = n4.pixelType.startsWith("f") ? 1e-6 : 0, y5 = r3.map((t2) => t2 - g5);
  y5[0] = r3[0], y5[y5.length - 1] = r3[r3.length - 1] + (u5 ? 1e-6 : 0);
  const w5 = r3.length / 2, [k3, M3] = s5(h5);
  for (let t2 = 0; t2 < s8; t2++) for (let e2 = 0; e2 < i4; e2++) {
    const n5 = t2 * i4 + e2;
    if (m4[n5]) {
      const t3 = p5[n5];
      let e3 = false;
      for (let l5 = w5 - 1; l5 >= 0; l5--) if (t3 === y5[2 * l5] || t3 > y5[2 * l5] && t3 < y5[2 * l5 + 1]) {
        x3[n5] = a6[l5], e3 = true;
        break;
      }
      e3 || (c5 ? x3[n5] = t3 > M3 ? M3 : t3 < k3 ? k3 : t3 : m4[n5] = 0);
    }
  }
  const A3 = f5?.length;
  if (A3) for (let t2 = 0; t2 < s8; t2++) for (let e2 = 0; e2 < i4; e2++) {
    const n5 = t2 * i4 + e2;
    if (!d4 || d4[n5]) {
      const t3 = p5[n5];
      for (let e3 = 0; e3 < A3; e3 += 2) if (t3 >= f5[e3] && t3 <= f5[e3 + 1]) {
        x3[n5] = 0, m4[n5] = 0;
        break;
      }
    }
  }
  return new g({
    width: i4,
    height: s8,
    pixelType: h5,
    pixels: [x3],
    mask: m4
  });
}
function x(t2, e2, n4, l4) {
  const i4 = null != n4 && n4.length >= 2 ? new Set(n4) : null, o3 = 1 === n4?.length ? n4[0] : null, s8 = !!e2?.length;
  for (let r3 = 0; r3 < t2.length; r3++) if (l4[r3]) {
    const n5 = t2[r3];
    if (s8) {
      let t3 = false;
      for (let l5 = 0; l5 < e2.length; l5 += 2) if (n5 >= e2[l5] && n5 <= e2[l5 + 1]) {
        t3 = true;
        break;
      }
      t3 || (l4[r3] = 0);
    }
    l4[r3] && (n5 === o3 || i4?.has(n5)) && (l4[r3] = 0);
  }
}
function d(t2, e2) {
  const n4 = t2[0].length;
  for (let l4 = 0; l4 < n4; l4++) if (e2[l4]) {
    let n5 = false;
    for (let e3 = 0; e3 < t2.length; e3++) if (t2[e3][l4]) {
      n5 = true;
      break;
    }
    n5 || (e2[l4] = 0);
  }
}
function m(t2, e2) {
  const n4 = t2[0].length;
  for (let l4 = 0; l4 < n4; l4++) if (e2[l4]) {
    let n5 = false;
    for (let e3 = 0; e3 < t2.length; e3++) if (0 === t2[e3][l4]) {
      n5 = true;
      break;
    }
    n5 && (e2[l4] = 0);
  }
}
function g2(e2, n4) {
  if (!o(e2)) return null;
  const {
    width: l4,
    height: i4,
    pixels: s8
  } = e2, r3 = l4 * i4, a6 = new Uint8Array(r3);
  e2.mask ? a6.set(e2.mask) : a6.fill(255);
  const h5 = s8.length, {
    includedRanges: f5,
    noDataValues: u5,
    outputPixelType: p5,
    matchAll: g5,
    lookups: y5
  } = n4;
  if (y5) {
    const t2 = [];
    for (let e3 = 0; e3 < h5; e3++) {
      const n5 = y5[e3], l5 = c2(s8[e3], a6, n5.lut, n5.offset || 0, "u8");
      t2.push(l5);
    }
    1 === t2.length ? a6.set(t2[0]) : g5 ? d(t2, a6) : m(t2, a6);
  } else if (g5) {
    const t2 = [];
    for (let e3 = 0; e3 < h5; e3++) {
      const n5 = new Uint8Array(r3);
      n5.set(a6), x(s8[e3], f5?.slice(2 * e3, 2 * e3 + 2), u5?.[e3], n5), t2.push(n5);
    }
    1 === t2.length ? a6.set(t2[0]) : d(t2, a6);
  } else for (let t2 = 0; t2 < h5; t2++) x(s8[t2], f5?.slice(2 * t2, 2 * t2 + 2), u5?.[t2], a6);
  return new g({
    width: l4,
    height: i4,
    pixelType: p5,
    pixels: s8,
    mask: a6
  });
}
function y2(n4) {
  const {
    srcPixelType: l4,
    inputRanges: i4,
    outputValues: o3,
    allowUnmatched: s8,
    noDataRanges: r3,
    isLastInputRangeInclusive: a6,
    outputPixelType: h5
  } = n4;
  if ("u8" !== l4 && "s8" !== l4 && "u16" !== l4 && "s16" !== l4) return null;
  const f5 = l4.includes("16") ? 65536 : 256, c5 = l4.includes("s") ? -f5 / 2 : 0, u5 = g.createEmptyBand(h5, f5), p5 = new Uint8Array(f5);
  s8 && p5.fill(255);
  const [x3, d4] = s5(h5);
  if (i4?.length && o3?.length) {
    const t2 = 1e-6, e2 = i4.map((e3) => e3 - t2);
    e2[0] = i4[0], a6 && (e2[e2.length - 1] = i4[i4.length - 1]);
    for (let n5 = 0; n5 < e2.length; n5++) {
      const t3 = o3[n5] > d4 ? d4 : o3[n5] < x3 ? x3 : o3[n5], l5 = Math.ceil(e2[2 * n5] - c5), i5 = Math.floor(e2[2 * n5 + 1] - c5);
      for (let e3 = l5; e3 <= i5; e3++) u5[e3] = t3, p5[e3] = 255;
    }
  }
  if (r3?.length) for (let t2 = 0; t2 < r3.length; t2++) {
    const e2 = Math.ceil(r3[2 * t2] - c5), n5 = Math.floor(r3[2 * t2 + 1] - c5);
    for (let t3 = e2; t3 <= n5; t3++) p5[t3] = 0;
  }
  return {
    lut: u5,
    offset: c5,
    mask: p5
  };
}
function w2(t2, e2, n4) {
  if ("u8" !== t2 && "s8" !== t2 && "u16" !== t2 && "s16" !== t2) return null;
  const l4 = t2.includes("16") ? 65536 : 256, i4 = t2.includes("s") ? -l4 / 2 : 0, o3 = new Uint8Array(l4);
  if (e2) for (let s8 = 0; s8 < e2.length; s8++) {
    const t3 = Math.ceil(e2[2 * s8] - i4), n5 = Math.floor(e2[2 * s8 + 1] - i4);
    for (let e3 = t3; e3 <= n5; e3++) o3[e3] = 255;
  }
  else o3.fill(255);
  if (n4) for (let s8 = 0; s8 < n4.length; s8++) o3[n4[s8] - i4] = 0;
  return {
    lut: o3,
    offset: i4
  };
}
function k(t2, e2, n4, l4, i4, o3, s8, r3) {
  return {
    xmin: i4 <= n4 * t2 ? 0 : i4 < n4 * t2 + t2 ? i4 - n4 * t2 : t2,
    ymin: o3 <= l4 * e2 ? 0 : o3 < l4 * e2 + e2 ? o3 - l4 * e2 : e2,
    xmax: i4 + s8 <= n4 * t2 ? 0 : i4 + s8 < n4 * t2 + t2 ? i4 + s8 - n4 * t2 : t2,
    ymax: o3 + r3 <= l4 * e2 ? 0 : o3 + r3 < l4 * e2 + e2 ? o3 + r3 - l4 * e2 : e2
  };
}
function M(t2, e2) {
  if (!t2 || 0 === t2.length) return null;
  const n4 = t2.find((t3) => t3.pixelBlock);
  if (null == n4?.pixelBlock) return null;
  const l4 = (n4.extent.xmax - n4.extent.xmin) / n4.pixelBlock.width, i4 = (n4.extent.ymax - n4.extent.ymin) / n4.pixelBlock.height, o3 = 0.01 * Math.min(l4, i4), s8 = t2.sort((t3, e3) => Math.abs(t3.extent.ymax - e3.extent.ymax) > o3 ? e3.extent.ymax - t3.extent.ymax : Math.abs(t3.extent.xmin - e3.extent.xmin) > o3 ? t3.extent.xmin - e3.extent.xmin : 0), r3 = Math.min.apply(null, s8.map((t3) => t3.extent.xmin)), a6 = Math.min.apply(null, s8.map((t3) => t3.extent.ymin)), h5 = Math.max.apply(null, s8.map((t3) => t3.extent.xmax)), f5 = Math.max.apply(null, s8.map((t3) => t3.extent.ymax)), c5 = {
    x: Math.round((e2.xmin - r3) / l4),
    y: Math.round((f5 - e2.ymax) / i4)
  }, u5 = {
    width: Math.round((h5 - r3) / l4),
    height: Math.round((f5 - a6) / i4)
  }, p5 = {
    width: Math.round((e2.xmax - e2.xmin) / l4),
    height: Math.round((e2.ymax - e2.ymin) / i4)
  };
  if (Math.round(u5.width / n4.pixelBlock.width) * Math.round(u5.height / n4.pixelBlock.height) !== s8.length || c5.x < 0 || c5.y < 0 || u5.width < p5.width || u5.height < p5.height) return null;
  return {
    extent: e2,
    pixelBlock: U(s8.map((t3) => t3.pixelBlock), u5, {
      clipOffset: c5,
      clipSize: p5
    })
  };
}
function A(t2, e2, n4, l4, i4, o3) {
  const {
    width: s8,
    height: r3
  } = n4.block, {
    x: a6,
    y: h5
  } = n4.offset, {
    width: f5,
    height: c5
  } = n4.mosaic, u5 = k(s8, r3, l4, i4, a6, h5, f5, c5);
  let p5 = 0, x3 = 0;
  if (o3) {
    const t3 = o3.hasGCSSShiftTransform ? 360 : o3.halfWorldWidth ?? 0, e3 = s8 * o3.resolutionX, n5 = o3.startX + l4 * e3;
    n5 < t3 && n5 + e3 > t3 ? x3 = o3.rightPadding : n5 >= t3 && (p5 = o3.leftMargin - o3.rightPadding, x3 = 0);
  }
  if (u5.xmax -= x3, "number" != typeof e2) for (let d4 = u5.ymin; d4 < u5.ymax; d4++) {
    const n5 = (i4 * r3 + d4 - h5) * f5 + (l4 * s8 - a6) + p5, o4 = d4 * s8;
    for (let l5 = u5.xmin; l5 < u5.xmax; l5++) t2[n5 + l5] = e2[o4 + l5];
  }
  else for (let d4 = u5.ymin; d4 < u5.ymax; d4++) {
    const n5 = (i4 * r3 + d4 - h5) * f5 + (l4 * s8 - a6) + p5;
    for (let l5 = u5.xmin; l5 < u5.xmax; l5++) t2[n5 + l5] = e2;
  }
}
function U(e2, n4, l4 = {}) {
  const {
    clipOffset: i4,
    clipSize: s8,
    alignmentInfo: r3,
    blockWidths: a6
  } = l4;
  if (a6) return b(e2, n4, {
    blockWidths: a6
  });
  const h5 = e2.find((t2) => o(t2));
  if (null == h5) return null;
  const f5 = s8 ? s8.width : n4.width, c5 = s8 ? s8.height : n4.height, u5 = h5.width, p5 = h5.height, x3 = n4.width / u5, d4 = n4.height / p5, m4 = {
    offset: i4 || {
      x: 0,
      y: 0
    },
    mosaic: s8 || n4,
    block: {
      width: u5,
      height: p5
    }
  }, g5 = h5.pixelType, y5 = g.getPixelArrayConstructor(g5), w5 = h5.pixels.length, k3 = [];
  let M3, U3;
  for (let t2 = 0; t2 < w5; t2++) {
    U3 = new y5(f5 * c5);
    for (let n5 = 0; n5 < d4; n5++) for (let l5 = 0; l5 < x3; l5++) {
      const i5 = e2[n5 * x3 + l5];
      o(i5) && (M3 = i5.pixels[t2], A(U3, M3, m4, l5, n5, r3));
    }
    k3.push(U3);
  }
  const T2 = e2.some((t2) => null == t2 || null != t2.mask && t2.mask.length > 0), v3 = e2.some((t2) => t2?.bandMasks && t2.bandMasks.length > 1), B2 = T2 ? new Uint8Array(f5 * c5) : void 0, C2 = v3 ? [] : void 0;
  if (B2) {
    for (let t2 = 0; t2 < d4; t2++) for (let n5 = 0; n5 < x3; n5++) {
      const l5 = e2[t2 * x3 + n5], i5 = null != l5 ? l5.mask : null;
      A(B2, null != i5 ? i5 : l5 ? 255 : 0, m4, n5, t2, r3);
    }
    if (C2) for (let t2 = 0; t2 < w5; t2++) {
      const n5 = new Uint8Array(f5 * c5);
      for (let l5 = 0; l5 < d4; l5++) for (let i5 = 0; i5 < x3; i5++) {
        const o3 = e2[l5 * x3 + i5], s9 = o3?.bandMasks?.[t2] ?? o3?.mask;
        A(n5, null != s9 ? s9 : o3 ? 255 : 0, m4, i5, l5, r3);
      }
      C2.push(n5);
    }
  }
  const S3 = new g({
    width: f5,
    height: c5,
    pixels: k3,
    pixelType: g5,
    bandMasks: C2,
    mask: B2
  });
  return S3.updateStatistics(), S3;
}
function b(e2, n4, l4) {
  const i4 = e2.find((t2) => null != t2);
  if (null == i4) return null;
  const s8 = e2.some((t2) => null == t2 || !!t2.mask), {
    width: r3,
    height: a6
  } = n4, h5 = s8 ? new Uint8Array(r3 * a6) : null, {
    blockWidths: f5
  } = l4, c5 = [], u5 = i4.getPlaneCount(), p5 = g.getPixelArrayConstructor(i4.pixelType);
  if (s8) for (let t2 = 0, y5 = 0; t2 < e2.length; y5 += f5[t2], t2++) {
    const n5 = e2[t2];
    if (!o(n5)) continue;
    const l5 = n5.mask;
    for (let e3 = 0; e3 < a6; e3++) for (let i5 = 0; i5 < f5[t2]; i5++) h5[e3 * r3 + i5 + y5] = null == l5 ? 255 : l5[e3 * n5.width + i5];
  }
  const x3 = e2.some((t2) => t2?.bandMasks && t2.bandMasks.length > 1), d4 = x3 ? [] : void 0, m4 = r3 * a6;
  for (let t2 = 0; t2 < u5; t2++) {
    const n5 = new p5(m4), l5 = x3 ? new Uint8Array(m4) : void 0;
    for (let i5 = 0, s9 = 0; i5 < e2.length; s9 += f5[i5], i5++) {
      const h6 = e2[i5];
      if (!o(h6)) continue;
      const c6 = h6.pixels[t2];
      if (null != c6) {
        for (let t3 = 0; t3 < a6; t3++) for (let e3 = 0; e3 < f5[i5]; e3++) n5[t3 * r3 + e3 + s9] = c6[t3 * h6.width + e3];
        if (l5) {
          const e3 = h6.bandMasks?.[t2] ?? h6.mask;
          for (let t3 = 0; t3 < a6; t3++) for (let n6 = 0; n6 < f5[i5]; n6++) l5[t3 * r3 + n6 + s9] = e3 ? e3[t3 * h6.width + n6] : 255;
        }
      }
    }
    c5.push(n5), d4 && l5 && d4.push(l5);
  }
  const g5 = new g({
    width: r3,
    height: a6,
    mask: h5,
    bandMasks: d4,
    pixels: c5,
    pixelType: i4.pixelType
  });
  return g5.updateStatistics(), g5;
}
function T(t2, e2, n4) {
  if (!o(t2)) return null;
  const {
    width: l4,
    height: i4
  } = t2, s8 = e2.x, r3 = e2.y, a6 = n4.width + s8, h5 = n4.height + r3;
  if (s8 < 0 || r3 < 0 || a6 > l4 || h5 > i4) return t2;
  if (0 === s8 && 0 === r3 && a6 === l4 && h5 === i4) return t2;
  t2.mask || (t2.mask = new Uint8Array(l4 * i4));
  const f5 = t2.mask;
  for (let o3 = 0; o3 < i4; o3++) {
    const t3 = o3 * l4;
    for (let e3 = 0; e3 < l4; e3++) f5[t3 + e3] = o3 < r3 || o3 >= h5 || e3 < s8 || e3 >= a6 ? 0 : 1;
  }
  return t2.updateStatistics(), t2;
}
function v(t2) {
  if (!o(t2)) return null;
  const e2 = t2.clone(), {
    width: n4,
    height: l4,
    pixels: i4
  } = t2, s8 = i4[0], r3 = e2.pixels[0], a6 = t2.mask;
  for (let o3 = 2; o3 < l4 - 1; o3++) {
    const t3 = /* @__PURE__ */ new Map();
    for (let l5 = o3 - 2; l5 < o3 + 2; l5++) for (let e4 = 0; e4 < 4; e4++) {
      const i5 = l5 * n4 + e4;
      S(t3, s8[i5], a6 ? a6[i5] : 1);
    }
    r3[o3 * n4] = B(t3), r3[o3 * n4 + 1] = r3[o3 * n4 + 2] = r3[o3 * n4];
    let e3 = 3;
    for (; e3 < n4 - 1; e3++) {
      let l5 = (o3 - 2) * n4 + e3 + 1;
      S(t3, s8[l5], a6 ? a6[l5] : 1), l5 = (o3 - 1) * n4 + e3 + 1, S(t3, s8[l5], a6 ? a6[l5] : 1), l5 = o3 * n4 + e3 + 1, S(t3, s8[l5], a6 ? a6[l5] : 1), l5 = (o3 + 1) * n4 + e3 + 1, S(t3, s8[l5], a6 ? a6[l5] : 1), l5 = (o3 - 2) * n4 + e3 - 3, C(t3, s8[l5], a6 ? a6[l5] : 1), l5 = (o3 - 1) * n4 + e3 - 3, C(t3, s8[l5], a6 ? a6[l5] : 1), l5 = o3 * n4 + e3 - 3, C(t3, s8[l5], a6 ? a6[l5] : 1), l5 = (o3 + 1) * n4 + e3 - 3, C(t3, s8[l5], a6 ? a6[l5] : 1), r3[o3 * n4 + e3] = B(t3);
    }
    r3[o3 * n4 + e3 + 1] = r3[o3 * n4 + e3];
  }
  for (let o3 = 0; o3 < n4; o3++) r3[o3] = r3[n4 + o3] = r3[2 * n4 + o3], r3[(l4 - 1) * n4 + o3] = r3[(l4 - 2) * n4 + o3];
  return e2.updateStatistics(), e2;
}
function B(t2) {
  if (0 === t2.size) return 0;
  let e2 = 0, n4 = -1, l4 = 0;
  const i4 = t2.keys();
  let o3 = i4.next();
  for (; !o3.done; ) l4 = t2.get(o3.value), l4 > e2 && (n4 = o3.value, e2 = l4), o3 = i4.next();
  return n4;
}
function C(t2, e2, n4) {
  if (0 === n4) return;
  const l4 = t2.get(e2);
  1 === l4 ? t2.delete(e2) : t2.set(e2, l4 - 1);
}
function S(t2, e2, n4) {
  0 !== n4 && t2.set(e2, t2.has(e2) ? t2.get(e2) + 1 : 1);
}
function P(e2, n4, l4) {
  let {
    x: i4,
    y: s8
  } = n4;
  const {
    width: r3,
    height: a6
  } = l4;
  if (0 === i4 && 0 === s8 && a6 === e2.height && r3 === e2.width) return e2;
  const {
    width: h5,
    height: f5
  } = e2, c5 = Math.max(0, s8), u5 = Math.max(0, i4), p5 = Math.min(i4 + r3, h5), x3 = Math.min(s8 + a6, f5);
  if (p5 < 0 || x3 < 0 || !o(e2)) return null;
  i4 = Math.max(0, -i4), s8 = Math.max(0, -s8);
  const {
    pixels: d4
  } = e2, m4 = r3 * a6, g5 = d4.length, y5 = [];
  for (let o3 = 0; o3 < g5; o3++) {
    const n5 = d4[o3], l5 = g.createEmptyBand(e2.pixelType, m4);
    for (let t2 = c5; t2 < x3; t2++) {
      const e3 = t2 * h5;
      let o4 = (t2 + s8 - c5) * r3 + i4;
      for (let t3 = u5; t3 < p5; t3++) l5[o4++] = n5[e3 + t3];
    }
    y5.push(l5);
  }
  const w5 = new Uint8Array(m4), k3 = e2.mask;
  for (let t2 = c5; t2 < x3; t2++) {
    const e3 = t2 * h5;
    let n5 = (t2 + s8 - c5) * r3 + i4;
    for (let t3 = u5; t3 < p5; t3++) w5[n5++] = k3 ? k3[e3 + t3] : 1;
  }
  const M3 = new g({
    width: l4.width,
    height: l4.height,
    pixelType: e2.pixelType,
    pixels: y5,
    mask: w5
  });
  return M3.updateStatistics(), M3;
}
function _(e2, n4 = true) {
  if (!o(e2)) return null;
  const {
    pixels: l4,
    width: i4,
    height: s8,
    mask: r3,
    pixelType: a6
  } = e2, h5 = [], f5 = Math.round(i4 / 2), c5 = Math.round(s8 / 2), u5 = s8 - 1, p5 = i4 - 1;
  for (let o3 = 0; o3 < l4.length; o3++) {
    const e3 = l4[o3], r4 = g.createEmptyBand(a6, f5 * c5);
    let x4 = 0;
    for (let t2 = 0; t2 < s8; t2 += 2) for (let l5 = 0; l5 < i4; l5 += 2) {
      const o4 = e3[t2 * i4 + l5];
      if (n4) {
        const n5 = l5 === p5 ? o4 : e3[t2 * i4 + l5 + 1], s9 = t2 === u5 ? o4 : e3[t2 * i4 + l5 + i4], a7 = l5 === p5 ? s9 : t2 === u5 ? n5 : e3[t2 * i4 + l5 + i4 + 1];
        r4[x4++] = (o4 + n5 + s9 + a7) / 4;
      } else r4[x4++] = o4;
    }
    h5.push(r4);
  }
  let x3 = null;
  if (null != r3) {
    x3 = new Uint8Array(f5 * c5);
    let t2 = 0;
    for (let e3 = 0; e3 < s8; e3 += 2) for (let l5 = 0; l5 < i4; l5 += 2) {
      const o3 = r3[e3 * i4 + l5];
      if (n4) {
        const n5 = l5 === p5 ? o3 : r3[e3 * i4 + l5 + 1], s9 = e3 === u5 ? o3 : r3[e3 * i4 + l5 + i4], a7 = l5 === p5 ? s9 : e3 === u5 ? n5 : r3[e3 * i4 + l5 + i4 + 1];
        x3[t2++] = o3 * n5 * s9 * a7 ? 1 : 0;
      } else x3[t2++] = o3;
    }
  }
  return new g({
    width: f5,
    height: c5,
    pixelType: a6,
    pixels: h5,
    mask: x3
  });
}
function W(t2, e2, n4 = 0, l4 = true) {
  if (!o(t2)) return null;
  const {
    width: i4,
    height: s8
  } = e2;
  let {
    width: r3,
    height: a6
  } = t2;
  const h5 = /* @__PURE__ */ new Map(), f5 = {
    x: 0,
    y: 0
  }, c5 = 1 + n4;
  let u5 = t2;
  for (let o3 = 0; o3 < c5; o3++) {
    const t3 = Math.ceil(r3 / i4), n5 = Math.ceil(a6 / s8);
    for (let l5 = 0; l5 < n5; l5++) {
      f5.y = l5 * s8;
      for (let n6 = 0; n6 < t3; n6++) {
        f5.x = n6 * i4;
        const t4 = P(u5, f5, e2);
        h5.set(`${o3}/${l5}/${n6}`, t4);
      }
    }
    o3 < c5 - 1 && (u5 = _(u5, l4)), r3 = Math.round(r3 / 2), a6 = Math.round(a6 / 2);
  }
  return h5;
}
function E(t2) {
  const {
    pixelBlock: e2,
    tileSize: n4,
    level: l4,
    row: i4,
    col: s8,
    useBilinear: r3
  } = t2;
  if (!o(e2)) return null;
  const {
    width: a6,
    height: h5
  } = n4, f5 = 2 ** l4, c5 = f5 * a6, u5 = f5 * h5;
  let p5 = P(e2, {
    y: i4 * u5,
    x: s8 * c5
  }, {
    width: c5,
    height: u5
  });
  if (!p5) return null;
  for (let o3 = l4; o3 > 0; o3--) p5 = _(p5, r3);
  return p5;
}
function I(t2, e2, n4, l4, i4 = 0) {
  const {
    width: o3,
    height: s8
  } = t2, {
    width: r3,
    height: a6
  } = e2, h5 = l4.cols, f5 = l4.rows, c5 = Math.ceil(r3 / h5 - 0.1 / h5), u5 = Math.ceil(a6 / f5 - 0.1 / f5);
  let p5, x3, d4, m4, g5, y5, w5;
  const k3 = c5 * h5, M3 = k3 * u5 * f5, A3 = new Float32Array(M3), U3 = new Float32Array(M3), b3 = new Uint32Array(M3), T2 = new Uint32Array(M3);
  let v3, B2, C2 = 0;
  for (let S3 = 0; S3 < u5; S3++) for (let t3 = 0; t3 < c5; t3++) {
    p5 = 12 * (S3 * c5 + t3), x3 = n4[p5], d4 = n4[p5 + 1], m4 = n4[p5 + 2], g5 = n4[p5 + 3], y5 = n4[p5 + 4], w5 = n4[p5 + 5];
    for (let e3 = 0; e3 < f5; e3++) {
      C2 = (S3 * f5 + e3) * k3 + t3 * h5, B2 = (e3 + 0.5) / f5;
      for (let t4 = 0; t4 < e3; t4++) v3 = (t4 + 0.5) / h5, A3[C2 + t4] = (x3 * v3 + d4 * B2 + m4) * o3 + i4, U3[C2 + t4] = (g5 * v3 + y5 * B2 + w5) * s8 + i4, b3[C2 + t4] = Math.floor(A3[C2 + t4]), T2[C2 + t4] = Math.floor(U3[C2 + t4]);
    }
    p5 += 6, x3 = n4[p5], d4 = n4[p5 + 1], m4 = n4[p5 + 2], g5 = n4[p5 + 3], y5 = n4[p5 + 4], w5 = n4[p5 + 5];
    for (let e3 = 0; e3 < f5; e3++) {
      C2 = (S3 * f5 + e3) * k3 + t3 * h5, B2 = (e3 + 0.5) / f5;
      for (let t4 = e3; t4 < h5; t4++) v3 = (t4 + 0.5) / h5, A3[C2 + t4] = (x3 * v3 + d4 * B2 + m4) * o3 + i4, U3[C2 + t4] = (g5 * v3 + y5 * B2 + w5) * s8 + i4, b3[C2 + t4] = Math.floor(A3[C2 + t4]), T2[C2 + t4] = Math.floor(U3[C2 + t4]);
    }
  }
  return {
    offsets_x: A3,
    offsets_y: U3,
    offsets_xi: b3,
    offsets_yi: T2,
    gridWidth: k3
  };
}
function R(t2, e2) {
  const {
    coefficients: n4,
    spacing: l4
  } = e2, {
    offsets_x: i4,
    offsets_y: o3,
    gridWidth: s8
  } = I(t2, t2, n4, {
    rows: l4[0],
    cols: l4[1]
  }), {
    width: r3,
    height: a6
  } = t2, h5 = new Float32Array(r3 * a6), f5 = 180 / Math.PI;
  for (let c5 = 0; c5 < a6; c5++) for (let t3 = 0; t3 < r3; t3++) {
    const e3 = c5 * s8 + t3, n5 = 0 === c5 ? e3 : e3 - s8, l5 = c5 === a6 - 1 ? e3 : e3 + s8, u5 = i4[n5] - i4[l5], p5 = o3[l5] - o3[n5];
    if (isNaN(u5) || isNaN(p5)) h5[c5 * r3 + t3] = 90;
    else {
      let e4 = Math.atan2(p5, u5) * f5;
      e4 = (360 + e4) % 360, h5[c5 * r3 + t3] = e4;
    }
  }
  return h5;
}
function D(e2, n4, l4, i4, s8 = "nearest") {
  if (!o(e2)) return null;
  "majority" === s8 && (e2 = v(e2));
  const {
    pixels: r3,
    mask: a6,
    bandMasks: h5,
    pixelType: f5
  } = e2, c5 = e2.width, u5 = e2.height, p5 = g.getPixelArrayConstructor(f5), x3 = r3.length, {
    width: d4,
    height: m4
  } = n4;
  let g5 = false;
  for (let t2 = 0; t2 < l4.length; t2 += 3) -1 === l4[t2] && -1 === l4[t2 + 1] && -1 === l4[t2 + 2] && (g5 = true);
  const {
    offsets_x: y5,
    offsets_y: w5,
    offsets_xi: k3,
    offsets_yi: M3,
    gridWidth: A3
  } = I({
    width: c5,
    height: u5
  }, n4, l4, i4, "majority" === s8 ? 0.5 : 0);
  let U3;
  const b3 = (t2, e3, n5, l5) => {
    const i5 = t2 instanceof Float32Array || t2 instanceof Float64Array ? 0 : 0.5;
    for (let o3 = 0; o3 < m4; o3++) {
      U3 = o3 * A3;
      for (let s9 = 0; s9 < d4; s9++) {
        if (y5[U3] < 0 || w5[U3] < 0) t2[o3 * d4 + s9] = 0;
        else if (l5) t2[o3 * d4 + s9] = e3[k3[U3] + M3[U3] * c5];
        else {
          const l6 = Math.floor(y5[U3]), r4 = Math.floor(w5[U3]), a7 = Math.ceil(y5[U3]), h6 = Math.ceil(w5[U3]), f6 = y5[U3] - l6, u6 = w5[U3] - r4;
          if (!n5 || n5[l6 + r4 * c5] && n5[a7 + r4 * c5] && n5[l6 + h6 * c5] && n5[a7 + h6 * c5]) {
            const n6 = (1 - f6) * e3[l6 + r4 * c5] + f6 * e3[a7 + r4 * c5], p6 = (1 - f6) * e3[l6 + h6 * c5] + f6 * e3[a7 + h6 * c5];
            t2[o3 * d4 + s9] = (1 - u6) * n6 + u6 * p6 + i5;
          } else t2[o3 * d4 + s9] = e3[k3[U3] + M3[U3] * c5];
        }
        U3++;
      }
    }
  }, T2 = [];
  let B2;
  const C2 = h5?.length === x3, S3 = [];
  for (let t2 = 0; t2 < x3; t2++) {
    if (C2) {
      const e3 = new Uint8Array(d4 * m4);
      b3(e3, h5[t2], h5[t2], true), S3.push(e3);
    }
    B2 = new p5(d4 * m4), b3(B2, r3[t2], C2 ? h5[t2] : a6, "nearest" === s8 || "majority" === s8), T2.push(B2);
  }
  const P3 = new g({
    width: d4,
    height: m4,
    pixelType: f5,
    pixels: T2,
    bandMasks: C2 ? S3 : void 0
  });
  if (null != a6) P3.mask = new Uint8Array(d4 * m4), b3(P3.mask, a6, a6, true);
  else if (g5) {
    P3.mask = new Uint8Array(d4 * m4);
    for (let t2 = 0; t2 < d4 * m4; t2++) P3.mask[t2] = y5[t2] < 0 || w5[t2] < 0 ? 0 : 1;
  }
  return P3.updateStatistics(), P3;
}

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/vectorFieldUtils.js
var r2 = /* @__PURE__ */ new Map();
r2.set("meter-per-second", 1), r2.set("kilometer-per-hour", 0.277778), r2.set("knots", 0.514444), r2.set("feet-per-second", 0.3048), r2.set("mile-per-hour", 0.44704);
var o2 = 180 / Math.PI;
var i2 = 5;
var s6 = new n2({
  esriMetersPerSecond: "meter-per-second",
  esriKilometersPerHour: "kilometer-per-hour",
  esriKnots: "knots",
  esriFeetPerSecond: "feet-per-second",
  esriMilesPerHour: "mile-per-hour"
});
function a4(t2, e2) {
  return r2.get(t2) / r2.get(e2) || 1;
}
function h3(t2) {
  return (450 - t2) % 360;
}
function l3(t2, e2 = "geographic") {
  const [n4, r3] = t2, i4 = Math.sqrt(n4 * n4 + r3 * r3);
  let s8 = Math.atan2(r3, n4) * o2;
  return s8 = (360 + s8) % 360, "geographic" === e2 && (s8 = h3(s8)), [i4, s8];
}
function c3(t2, e2 = "geographic") {
  let n4 = t2[1];
  "geographic" === e2 && (n4 = h3(n4)), n4 %= 360;
  const r3 = t2[0];
  return [r3 * Math.cos(n4 / o2), r3 * Math.sin(n4 / o2)];
}
function u3(t2, e2, r3, o3 = "geographic") {
  if (!o(t2) || null == r3) return t2;
  const i4 = "vector-magdir" === e2 ? t2.clone() : f3(t2, e2), s8 = i4.pixels[1];
  for (let n4 = 0; n4 < s8.length; n4++) s8[n4] = "geographic" === o3 ? (s8[n4] + r3[n4] + 270) % 360 : (s8[n4] + 360 - r3[n4]) % 360;
  return "vector-magdir" === e2 ? i4 : f3(i4, "vector-magdir");
}
function f3(t2, r3, o3 = "geographic", i4 = 1) {
  if (!o(t2)) return t2;
  const {
    pixels: s8,
    width: a6,
    height: h5
  } = t2, u5 = a6 * h5, f5 = s8[0], p5 = s8[1], m4 = t2.pixelType.startsWith("f") ? t2.pixelType : "f32", d4 = g.createEmptyBand(m4, u5), g5 = g.createEmptyBand(m4, u5);
  let x3 = 0;
  for (let e2 = 0; e2 < h5; e2++) for (let t3 = 0; t3 < a6; t3++) "vector-uv" === r3 ? ([d4[x3], g5[x3]] = l3([f5[x3], p5[x3]], o3), d4[x3] *= i4) : ([d4[x3], g5[x3]] = c3([f5[x3], p5[x3]], o3), d4[x3] *= i4, g5[x3] *= i4), x3++;
  const M3 = new g({
    pixelType: m4,
    width: t2.width,
    height: t2.height,
    mask: t2.mask,
    validPixelCount: t2.validPixelCount,
    maskIsAlpha: t2.maskIsAlpha,
    pixels: [d4, g5]
  });
  return M3.updateStatistics(), M3;
}
function p3(t2, e2, r3 = 1) {
  if (1 === r3 || !o(t2)) return t2;
  const o3 = t2.clone(), {
    pixels: i4,
    width: s8,
    height: a6
  } = o3, h5 = i4[0], l4 = i4[1];
  let c5 = 0;
  for (let n4 = 0; n4 < a6; n4++) for (let t3 = 0; t3 < s8; t3++) "vector-uv" === e2 ? (h5[c5] *= r3, l4[c5] *= r3) : h5[c5] *= r3, c5++;
  return o3.updateStatistics(), o3;
}
function m2(t2, e2, n4, r3, o3) {
  if (null == o3 || !o3.spatialReference.equals(t2.spatialReference)) return {
    extent: t2,
    width: Math.round(e2 / r3),
    height: Math.round(n4 / r3),
    resolution: t2.width / e2
  };
  const i4 = o3.xmin, s8 = o3.ymax, a6 = (t2.xmax - t2.xmin) / e2 * r3, h5 = (t2.ymax - t2.ymin) / n4 * r3, l4 = (a6 + h5) / 2;
  return t2.xmin = i4 + Math.floor((t2.xmin - i4) / a6) * a6, t2.xmax = i4 + Math.ceil((t2.xmax - i4) / a6) * a6, t2.ymin = s8 + Math.floor((t2.ymin - s8) / h5) * h5, t2.ymax = s8 + Math.ceil((t2.ymax - s8) / h5) * h5, {
    extent: t2,
    width: Math.round(t2.width / a6),
    height: Math.round(t2.height / h5),
    resolution: l4
  };
}
var d2 = g3(0, 0, 0);
function g3(t2 = 0, e2 = 0, n4 = Math.PI, r3 = true) {
  r3 && (n4 = (2 * Math.PI - n4) % (2 * Math.PI));
  const o3 = r3 ? -1 : 1, i4 = 13 * o3, s8 = -7 * o3, a6 = -2 * o3, h5 = -16 * o3, l4 = 21.75, [c5, u5] = M2(0, e2 + i4, n4, l4), [f5, p5] = M2(t2 - 5.5, e2 + s8, n4, l4), [m4, d4] = M2(t2 + 5.5, e2 + s8, n4, l4), [g5, x3] = M2(t2 - 1.5, e2 + a6, n4, l4), [k3, w5] = M2(t2 + 1.5, e2 + a6, n4, l4), [y5, P3] = M2(t2 - 1.5, e2 + h5, n4, l4), [b3, v3] = M2(t2 + 1.5, e2 + h5, n4, l4);
  return [c5, u5, f5, p5, g5, x3, k3, w5, m4, d4, y5, P3, b3, v3];
}
function x2(t2 = 0, e2 = Math.PI, n4 = true) {
  n4 && (e2 = (2 * Math.PI - e2) % (2 * Math.PI));
  const r3 = 10, o3 = n4 ? -1 : 1, s8 = 5 * o3, a6 = 20 * o3, h5 = 25 * o3, l4 = 45, c5 = 0, u5 = 0, f5 = 2, p5 = 0, m4 = f5 * o3, d4 = n4 ? 1 : -1, g5 = r3 / 2 * d4;
  let [x3, k3] = [c5 + g5, u5 - a6], [w5, y5] = [x3 + f5 * d4, k3], [P3, b3] = [w5 - p5 * d4, y5 + m4], [v3, I3] = [c5 - g5, u5 - h5], [A3, _3] = [v3 + p5 * d4, I3 - m4], U3 = Math.ceil(t2 / i2), S3 = Math.floor(U3 / 10);
  U3 -= 8 * S3;
  const D2 = [], F = [];
  for (let i4 = 0; i4 < U3 / 2; i4++, S3--) {
    S3 <= 0 && U3 % 2 == 1 && i4 === (U3 - 1) / 2 && (v3 = c5, A3 = v3 + p5 * d4, I3 = (I3 + k3) / 2, _3 = I3 - m4);
    const [t3, n5] = M2(v3, I3, e2, l4);
    if (S3 > 0) {
      const [r4, o4] = M2(w5, I3, e2, l4), [i5, s9] = M2(x3, k3, e2, l4);
      D2.push(r4), D2.push(o4), D2.push(t3), D2.push(n5), D2.push(i5), D2.push(s9);
    } else {
      const [r4, o4] = M2(w5, y5, e2, l4), [i5, s9] = M2(P3, b3, e2, l4), [a7, h6] = M2(A3, _3, e2, l4);
      F.push(t3), F.push(n5), F.push(a7), F.push(h6), F.push(i5), F.push(s9), F.push(r4), F.push(o4);
    }
    I3 += s8, k3 += s8, y5 += s8, b3 += s8, _3 += s8;
  }
  const [N, j] = M2(c5 + g5, u5 + a6, e2, l4), J = (r3 / 2 + f5) * d4, [O, q] = M2(c5 + J, u5 + a6, e2, l4), [B2, E2] = M2(c5 + g5, u5 - h5, e2, l4), [T2, C2] = M2(c5 + J, u5 - h5, e2, l4);
  return {
    pennants: D2,
    barbs: F,
    shaft: [N, j, O, q, B2, E2, T2, C2]
  };
}
function M2(t2, e2, n4, r3 = 1) {
  const o3 = Math.sqrt(t2 * t2 + e2 * e2) / r3, i4 = (2 * Math.PI + Math.atan2(e2, t2)) % (2 * Math.PI);
  return [o3, (2 * Math.PI + i4 - n4) % (2 * Math.PI)];
}
var k2 = [0, 1, 3, 6, 10, 16, 21, 27, 33, 40, 47, 55, 63];
var w3 = [0, 0.5, 1, 1.5, 2];
var y3 = [0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4];
function P2(t2, e2, n4, r3) {
  const o3 = a4(r3 || "knots", n4);
  let i4;
  for (i4 = 1; i4 < e2.length; i4++) if (i4 === e2.length - 1) {
    if (t2 < e2[i4] * o3) break;
  } else if (t2 <= e2[i4] * o3) break;
  return Math.min(i4 - 1, e2.length - 2);
}
function b2(t2, e2, n4, r3, o3) {
  let i4 = 0;
  switch (e2) {
    case "beaufort_kn":
      i4 = P2(t2, k2, "knots", n4);
      break;
    case "beaufort_km":
      i4 = P2(t2, k2, "kilometer-per-hour", n4);
      break;
    case "beaufort_ft":
      i4 = P2(t2, k2, "feet-per-second", n4);
      break;
    case "beaufort_m":
      i4 = P2(t2, k2, "meter-per-second", n4);
      break;
    case "classified_arrow":
      i4 = P2(t2, o3 ?? [], r3, n4);
      break;
    case "ocean_current_m":
      i4 = P2(t2, w3, "meter-per-second", n4);
      break;
    case "ocean_current_kn":
      i4 = P2(t2, y3, "knots", n4);
  }
  return i4;
}
function v2(t2, e2) {
  const {
    style: n4,
    inputUnit: r3,
    outputUnit: o3,
    breakValues: i4
  } = e2, a6 = s6.fromJSON(r3), h5 = s6.fromJSON(o3), l4 = 7 * 6, c5 = 15;
  let u5 = 0, f5 = 0;
  const {
    width: p5,
    height: m4,
    mask: x3
  } = t2, M3 = t2.pixels[0], k3 = t2.pixels[1], w5 = null != x3 ? x3.filter((t3) => t3 > 0).length : p5 * m4, y5 = new Float32Array(w5 * l4), P3 = new Uint32Array(c5 * w5), v3 = e2.invertDirection ? g3(0, 0, 0, false) : d2;
  for (let s8 = 0; s8 < m4; s8++) for (let t3 = 0; t3 < p5; t3++) {
    const e3 = s8 * p5 + t3;
    if (!x3 || x3[s8 * p5 + t3]) {
      const r4 = (k3[e3] + 360) % 360 / 180 * Math.PI, o4 = b2(M3[e3], n4, a6, h5, i4);
      for (let n5 = 0; n5 < v3.length; n5 += 2) y5[u5++] = (t3 + 0.5) / p5, y5[u5++] = (s8 + 0.5) / m4, y5[u5++] = v3[n5], y5[u5++] = v3[n5 + 1] + r4, y5[u5++] = o4, y5[u5++] = M3[e3];
      const c6 = 7 * (u5 / l4 - 1);
      P3[f5++] = c6, P3[f5++] = c6 + 1, P3[f5++] = c6 + 2, P3[f5++] = c6 + 0, P3[f5++] = c6 + 4, P3[f5++] = c6 + 3, P3[f5++] = c6 + 0, P3[f5++] = c6 + 2, P3[f5++] = c6 + 3, P3[f5++] = c6 + 2, P3[f5++] = c6 + 5, P3[f5++] = c6 + 3, P3[f5++] = c6 + 5, P3[f5++] = c6 + 6, P3[f5++] = c6 + 3;
    }
  }
  return {
    vertexData: y5,
    indexData: P3
  };
}
var I2 = [];
function A2(t2, e2) {
  if (0 === I2.length) for (let i4 = 0; i4 < 30; i4++) I2.push(x2(5 * i4, 0, !e2.invertDirection));
  const n4 = a4(s6.fromJSON(e2.inputUnit), "knots"), {
    width: r3,
    height: o3,
    mask: h5
  } = t2, l4 = t2.pixels[0], c5 = t2.pixels[1], u5 = 6, f5 = [], p5 = [];
  let m4 = 0, d4 = 0;
  for (let s8 = 0; s8 < o3; s8++) for (let t3 = 0; t3 < r3; t3++) {
    const e3 = s8 * r3 + t3, a6 = l4[e3] * n4;
    if ((!h5 || h5[s8 * r3 + t3]) && a6 >= i2) {
      const n5 = (c5[e3] + 360) % 360 / 180 * Math.PI, {
        pennants: i4,
        barbs: h6,
        shaft: l5
      } = I2[Math.min(Math.floor(a6 / 5), 29)];
      if (i4.length + h6.length === 0) continue;
      let g5 = f5.length / u5;
      const x3 = (t3 + 0.5) / r3, M3 = (s8 + 0.5) / o3;
      for (let t4 = 0; t4 < i4.length; t4 += 2) f5[m4++] = x3, f5[m4++] = M3, f5[m4++] = i4[t4], f5[m4++] = i4[t4 + 1] + n5, f5[m4++] = 0, f5[m4++] = a6;
      for (let t4 = 0; t4 < h6.length; t4 += 2) f5[m4++] = x3, f5[m4++] = M3, f5[m4++] = h6[t4], f5[m4++] = h6[t4 + 1] + n5, f5[m4++] = 0, f5[m4++] = a6;
      for (let t4 = 0; t4 < l5.length; t4 += 2) f5[m4++] = x3, f5[m4++] = M3, f5[m4++] = l5[t4], f5[m4++] = l5[t4 + 1] + n5, f5[m4++] = 0, f5[m4++] = a6;
      for (let t4 = 0; t4 < i4.length / 6; t4++) p5[d4++] = g5, p5[d4++] = g5 + 1, p5[d4++] = g5 + 2, g5 += 3;
      for (let t4 = 0; t4 < h6.length / 8; t4++) p5[d4++] = g5, p5[d4++] = g5 + 1, p5[d4++] = g5 + 2, p5[d4++] = g5 + 1, p5[d4++] = g5 + 2, p5[d4++] = g5 + 3, g5 += 4;
      p5[d4++] = g5 + 0, p5[d4++] = g5 + 1, p5[d4++] = g5 + 2, p5[d4++] = g5 + 1, p5[d4++] = g5 + 3, p5[d4++] = g5 + 2, g5 += 4;
    }
  }
  return {
    vertexData: new Float32Array(f5),
    indexData: new Uint32Array(p5)
  };
}
function _2(t2, e2) {
  const n4 = 4 * 6;
  let r3 = 0, o3 = 0;
  const {
    width: h5,
    height: l4,
    mask: c5
  } = t2, u5 = t2.pixels[0], f5 = [], p5 = [], m4 = a4(s6.fromJSON(e2.inputUnit), "knots"), d4 = "wind_speed" === e2.style ? i2 : Number.MAX_VALUE;
  for (let i4 = 0; i4 < l4; i4++) for (let t3 = 0; t3 < h5; t3++) {
    const e3 = u5[i4 * h5 + t3] * m4;
    if ((!c5 || c5[i4 * h5 + t3]) && e3 < d4) {
      for (let n5 = 0; n5 < 4; n5++) f5[r3++] = (t3 + 0.5) / h5, f5[r3++] = (i4 + 0.5) / l4, f5[r3++] = n5 < 2 ? -0.5 : 0.5, f5[r3++] = n5 % 2 == 0 ? -0.5 : 0.5, f5[r3++] = 0, f5[r3++] = e3;
      const s8 = 4 * (r3 / n4 - 1);
      p5[o3++] = s8, p5[o3++] = s8 + 1, p5[o3++] = s8 + 2, p5[o3++] = s8 + 1, p5[o3++] = s8 + 2, p5[o3++] = s8 + 3;
    }
  }
  return {
    vertexData: new Float32Array(f5),
    indexData: new Uint32Array(p5)
  };
}
function U2(t2, e2) {
  return "simple_scalar" === e2.style ? _2(t2, e2) : "wind_speed" === e2.style ? A2(t2, e2) : v2(t2, e2);
}
function S2(t2, n4, r3, o3 = [0, 0], i4 = 0.5) {
  const {
    width: s8,
    height: a6,
    mask: h5
  } = t2, [u5, f5] = t2.pixels, [p5, m4] = o3, d4 = Math.round((s8 - p5) / r3), g5 = Math.round((a6 - m4) / r3), x3 = d4 * g5, M3 = new Float32Array(x3), k3 = new Float32Array(x3), w5 = new Uint8Array(x3), y5 = "vector-uv" === n4;
  for (let e2 = 0; e2 < g5; e2++) for (let t3 = 0; t3 < d4; t3++) {
    let n5 = 0;
    const o4 = e2 * d4 + t3, g6 = Math.max(0, e2 * r3 + m4), x4 = Math.max(0, t3 * r3 + p5), P4 = Math.min(a6, g6 + r3), b3 = Math.min(s8, x4 + r3);
    for (let t4 = g6; t4 < P4; t4++) for (let e3 = x4; e3 < b3; e3++) {
      const r4 = t4 * s8 + e3;
      if (!h5 || h5[r4]) {
        n5++;
        const t5 = y5 ? [u5[r4], f5[r4]] : [u5[r4], (360 + f5[r4]) % 360], [e4, i5] = y5 ? t5 : c3(t5);
        M3[o4] += e4, k3[o4] += i5;
      }
    }
    if (n5 >= (P4 - g6) * (b3 - x4) * (1 - i4)) {
      w5[o4] = 1;
      const [t4, e3] = l3([M3[o4] / n5, k3[o4] / n5]);
      M3[o4] = t4, k3[o4] = e3;
    } else w5[o4] = 0, M3[o4] = 0, k3[o4] = 0;
  }
  const P3 = new g({
    width: d4,
    height: g5,
    pixels: [M3, k3],
    mask: w5
  });
  return P3.updateStatistics(), P3;
}

// ../../../node_modules/@arcgis/core/views/2d/engine/flow/dataUtils.js
var i3 = () => n.getLogger("esri.views.2d.engine.flow.dataUtils");
var a5 = 10;
function s7(t2, e2, r3, o3) {
  return __async(this, null, function* () {
    const l4 = performance.now(), s8 = c4(e2, r3), f5 = performance.now(), h5 = u4(e2, s8, r3.width, r3.height), p5 = performance.now(), g5 = m3(h5, true), y5 = performance.now(), x3 = "Streamlines" === t2 ? d3(g5, a5) : w4(g5), M3 = performance.now();
    return has("esri-2d-profiler") && (i3().info("I.1", "_createFlowFieldFromData (ms)", Math.round(f5 - l4)), i3().info("I.2", "_getStreamlines (ms)", Math.round(p5 - f5)), i3().info("I.3", "createAnimatedLinesData (ms)", Math.round(y5 - p5)), i3().info("I.4", "create{Streamlines|Particles}Mesh (ms)", Math.round(M3 - y5)), i3().info("I.5", "createFlowMesh (ms)", Math.round(M3 - l4)), i3().info("I.6", "Mesh size (bytes)", x3.vertexData.buffer.byteLength + x3.indexData.buffer.byteLength)), yield Promise.resolve(), s2(o3), x3;
  });
}
function c4(t2, e2) {
  const n4 = h4(e2.data, e2.width, e2.height, t2.smoothing);
  if (t2.interpolate) {
    return (t3, r3) => {
      const o3 = Math.floor(t3), l4 = Math.floor(r3);
      if (o3 < 0 || o3 >= e2.width) return [0, 0];
      if (l4 < 0 || l4 >= e2.height) return [0, 0];
      const i4 = t3 - o3, a6 = r3 - l4, s8 = o3, c5 = l4, f5 = o3 < e2.width - 1 ? o3 + 1 : o3, u5 = l4 < e2.height - 1 ? l4 + 1 : l4, h5 = n4[2 * (c5 * e2.width + s8)], m4 = n4[2 * (c5 * e2.width + f5)], d4 = n4[2 * (u5 * e2.width + s8)], w5 = n4[2 * (u5 * e2.width + f5)], p5 = n4[2 * (c5 * e2.width + s8) + 1], g5 = n4[2 * (c5 * e2.width + f5) + 1];
      return [(h5 * (1 - a6) + d4 * a6) * (1 - i4) + (m4 * (1 - a6) + w5 * a6) * i4, (p5 * (1 - a6) + n4[2 * (u5 * e2.width + s8) + 1] * a6) * (1 - i4) + (g5 * (1 - a6) + n4[2 * (u5 * e2.width + f5) + 1] * a6) * i4];
    };
  }
  return (t3, r3) => {
    const o3 = Math.round(t3), l4 = Math.round(r3);
    return o3 < 0 || o3 >= e2.width || l4 < 0 || l4 >= e2.height ? [0, 0] : [n4[2 * (l4 * e2.width + o3)], n4[2 * (l4 * e2.width + o3) + 1]];
  };
}
function f4(t2, e2, n4, r3, o3, l4, i4, a6, s8) {
  const c5 = [];
  let f5 = n4, u5 = r3, h5 = 0, [m4, d4] = e2(f5, u5);
  m4 *= t2.velocityScale, d4 *= t2.velocityScale;
  const w5 = Math.sqrt(m4 * m4 + d4 * d4);
  let p5, g5;
  c5.push({
    x: f5,
    y: u5,
    t: h5,
    speed: w5
  });
  for (let y5 = 0; y5 < t2.verticesPerLine; y5++) {
    let [n5, r4] = e2(f5, u5);
    n5 *= t2.velocityScale, r4 *= t2.velocityScale;
    const m5 = Math.sqrt(n5 * n5 + r4 * r4);
    if (m5 < t2.minSpeedThreshold) return c5;
    const d5 = n5 / m5, w6 = r4 / m5;
    f5 += d5 * t2.segmentLength, u5 += w6 * t2.segmentLength;
    if (h5 += t2.segmentLength / m5, Math.acos(d5 * p5 + w6 * g5) > t2.maxTurnAngle) return c5;
    if (t2.collisions) {
      const t3 = Math.round(f5 * s8), e3 = Math.round(u5 * s8);
      if (t3 < 0 || t3 > i4 - 1 || e3 < 0 || e3 > a6 - 1) return c5;
      const n6 = l4[e3 * i4 + t3];
      if (-1 !== n6 && n6 !== o3) return c5;
      l4[e3 * i4 + t3] = o3;
    }
    c5.push({
      x: f5,
      y: u5,
      t: h5,
      speed: m5
    }), p5 = d5, g5 = w6;
  }
  return c5;
}
function u4(t2, e2, n4, o3) {
  const l4 = [], i4 = new t(), a6 = 1 / Math.max(t2.lineCollisionWidth, 1), s8 = Math.round(n4 * a6), c5 = Math.round(o3 * a6), u5 = new Int32Array(s8 * c5);
  for (let r3 = 0; r3 < u5.length; r3++) u5[r3] = -1;
  const h5 = [];
  for (let r3 = 0; r3 < o3; r3 += t2.lineSpacing) for (let e3 = 0; e3 < n4; e3 += t2.lineSpacing) h5.push({
    x: e3,
    y: r3,
    sort: i4.getFloat()
  });
  h5.sort((t3, e3) => t3.sort - e3.sort);
  for (const {
    x: r3,
    y: m4
  } of h5) if (i4.getFloat() < t2.density) {
    const n5 = f4(t2, e2, r3, m4, l4.length, u5, s8, c5, a6);
    if (n5.length < 2) continue;
    l4.push(n5);
  }
  return l4;
}
function h4(t2, e2, n4, r3) {
  if (0 === r3) return t2;
  const o3 = Math.round(3 * r3), l4 = new Array(2 * o3 + 1);
  let i4 = 0;
  for (let c5 = -o3; c5 <= o3; c5++) {
    const t3 = Math.exp(-c5 * c5 / (r3 * r3));
    l4[c5 + o3] = t3, i4 += t3;
  }
  for (let c5 = -o3; c5 <= o3; c5++) l4[c5 + o3] /= i4;
  const a6 = new Float32Array(t2.length);
  for (let c5 = 0; c5 < n4; c5++) for (let n5 = 0; n5 < e2; n5++) {
    let r4 = 0, i5 = 0;
    for (let a7 = -o3; a7 <= o3; a7++) {
      if (n5 + a7 < 0 || n5 + a7 >= e2) continue;
      const s9 = l4[a7 + o3];
      r4 += s9 * t2[2 * (c5 * e2 + (n5 + a7))], i5 += s9 * t2[2 * (c5 * e2 + (n5 + a7)) + 1];
    }
    a6[2 * (c5 * e2 + n5)] = r4, a6[2 * (c5 * e2 + n5) + 1] = i5;
  }
  const s8 = new Float32Array(t2.length);
  for (let c5 = 0; c5 < e2; c5++) for (let t3 = 0; t3 < n4; t3++) {
    let r4 = 0, i5 = 0;
    for (let s9 = -o3; s9 <= o3; s9++) {
      if (t3 + s9 < 0 || t3 + s9 >= n4) continue;
      const f5 = l4[s9 + o3];
      r4 += f5 * a6[2 * ((t3 + s9) * e2 + c5)], i5 += f5 * a6[2 * ((t3 + s9) * e2 + c5) + 1];
    }
    s8[2 * (t3 * e2 + c5)] = r4, s8[2 * (t3 * e2 + c5) + 1] = i5;
  }
  return s8;
}
function m3(t2, e2) {
  const n4 = new t(), o3 = t2.reduce((t3, e3) => t3 + e3.length, 0), l4 = new Float32Array(4 * o3), i4 = new Array(t2.length);
  let a6 = 0, s8 = 0;
  for (const r3 of t2) {
    const t3 = a6;
    for (const e3 of r3) l4[4 * a6] = e3.x, l4[4 * a6 + 1] = e3.y, l4[4 * a6 + 2] = e3.t, l4[4 * a6 + 3] = e3.speed, a6++;
    i4[s8++] = {
      startVertex: t3,
      numberOfVertices: r3.length,
      totalTime: r3[r3.length - 1].t,
      timeSeed: e2 ? n4.getFloat() : 0
    };
  }
  return {
    lineVertices: l4,
    lineDescriptors: i4
  };
}
function d3(t2, e2) {
  const n4 = 9, {
    lineVertices: r3,
    lineDescriptors: o3
  } = t2;
  let l4 = 0, i4 = 0;
  for (const m4 of o3) {
    l4 += 2 * m4.numberOfVertices;
    i4 += 6 * (m4.numberOfVertices - 1);
  }
  const a6 = new Float32Array(l4 * n4), s8 = new Uint32Array(i4);
  let c5 = 0, f5 = 0;
  function u5() {
    s8[f5++] = c5 - 2, s8[f5++] = c5, s8[f5++] = c5 - 1, s8[f5++] = c5, s8[f5++] = c5 + 1, s8[f5++] = c5 - 1;
  }
  function h5(t3, e3, r4, o4, l5, i5, s9, f6) {
    const u6 = c5 * n4;
    let h6 = 0;
    a6[u6 + h6++] = t3, a6[u6 + h6++] = e3, a6[u6 + h6++] = 1, a6[u6 + h6++] = r4, a6[u6 + h6++] = i5, a6[u6 + h6++] = s9, a6[u6 + h6++] = o4 / 2, a6[u6 + h6++] = l5 / 2, a6[u6 + h6++] = f6, c5++, a6[u6 + h6++] = t3, a6[u6 + h6++] = e3, a6[u6 + h6++] = -1, a6[u6 + h6++] = r4, a6[u6 + h6++] = i5, a6[u6 + h6++] = s9, a6[u6 + h6++] = -o4 / 2, a6[u6 + h6++] = -l5 / 2, a6[u6 + h6++] = f6, c5++;
  }
  for (const m4 of o3) {
    const {
      totalTime: t3,
      timeSeed: n5
    } = m4;
    let o4 = null, l5 = null, i5 = null, a7 = null, s9 = null, c6 = null;
    for (let f6 = 0; f6 < m4.numberOfVertices; f6++) {
      const d4 = r3[4 * (m4.startVertex + f6)], w5 = r3[4 * (m4.startVertex + f6) + 1], p5 = r3[4 * (m4.startVertex + f6) + 2], g5 = r3[4 * (m4.startVertex + f6) + 3];
      let y5 = null, x3 = null, M3 = null, A3 = null;
      if (f6 > 0) {
        y5 = d4 - o4, x3 = w5 - l5;
        const r4 = Math.sqrt(y5 * y5 + x3 * x3);
        if (y5 /= r4, x3 /= r4, f6 > 1) {
          let t4 = y5 + s9, n6 = x3 + c6;
          const r5 = Math.sqrt(t4 * t4 + n6 * n6);
          t4 /= r5, n6 /= r5;
          const o5 = Math.min(1 / (t4 * y5 + n6 * x3), e2);
          t4 *= o5, n6 *= o5, M3 = -n6, A3 = t4;
        } else M3 = -x3, A3 = y5;
        null !== M3 && null !== A3 && (h5(o4, l5, i5, M3, A3, t3, n5, g5), u5());
      }
      o4 = d4, l5 = w5, i5 = p5, s9 = y5, c6 = x3, a7 = g5;
    }
    h5(o4, l5, i5, -c6, s9, t3, n5, a7);
  }
  return {
    vertexData: a6,
    indexData: s8
  };
}
function w4(t2) {
  const e2 = 16, n4 = 1, r3 = 2, {
    lineVertices: o3,
    lineDescriptors: l4
  } = t2;
  let i4 = 0, a6 = 0;
  for (const U3 of l4) {
    const t3 = U3.numberOfVertices - 1;
    i4 += 4 * t3 * 2, a6 += 6 * t3 * 2;
  }
  const s8 = new Float32Array(i4 * e2), c5 = new Uint32Array(a6);
  let f5, u5, h5, m4, d4, w5, p5, g5, y5, x3, M3, A3, I3, V, F = 0, v3 = 0;
  function D2() {
    c5[v3++] = F - 8, c5[v3++] = F - 7, c5[v3++] = F - 6, c5[v3++] = F - 7, c5[v3++] = F - 5, c5[v3++] = F - 6, c5[v3++] = F - 4, c5[v3++] = F - 3, c5[v3++] = F - 2, c5[v3++] = F - 3, c5[v3++] = F - 1, c5[v3++] = F - 2;
  }
  function b3(t3, o4, l5, i5, a7, c6, f6, u6, h6, m5, d5, w6, p6, g6) {
    const y6 = F * e2;
    let x4 = 0;
    for (const e3 of [n4, r3]) for (const n5 of [1, 2, 3, 4]) s8[y6 + x4++] = t3, s8[y6 + x4++] = o4, s8[y6 + x4++] = l5, s8[y6 + x4++] = i5, s8[y6 + x4++] = f6, s8[y6 + x4++] = u6, s8[y6 + x4++] = h6, s8[y6 + x4++] = m5, s8[y6 + x4++] = e3, s8[y6 + x4++] = n5, s8[y6 + x4++] = p6, s8[y6 + x4++] = g6, s8[y6 + x4++] = a7 / 2, s8[y6 + x4++] = c6 / 2, s8[y6 + x4++] = d5 / 2, s8[y6 + x4++] = w6 / 2, F++;
  }
  function S3(t3, e3) {
    let n5 = y5 + M3, r4 = x3 + A3;
    const o4 = Math.sqrt(n5 * n5 + r4 * r4);
    n5 /= o4, r4 /= o4;
    const l5 = y5 * n5 + x3 * r4;
    n5 /= l5, r4 /= l5;
    let i5 = M3 + I3, a7 = A3 + V;
    const s9 = Math.sqrt(i5 * i5 + a7 * a7);
    i5 /= s9, a7 /= s9;
    const c6 = M3 * i5 + A3 * a7;
    i5 /= c6, a7 /= c6, b3(f5, u5, h5, m4, -r4, n5, d4, w5, p5, g5, -a7, i5, t3, e3), D2();
  }
  function k3(t3, e3, n5, r4, o4, l5) {
    if (y5 = M3, x3 = A3, M3 = I3, A3 = V, null == y5 && null == x3 && (y5 = M3, x3 = A3), null != d4 && null != w5) {
      I3 = t3 - d4, V = e3 - w5;
      const n6 = Math.sqrt(I3 * I3 + V * V);
      I3 /= n6, V /= n6;
    }
    null != y5 && null != x3 && S3(o4, l5), f5 = d4, u5 = w5, h5 = p5, m4 = g5, d4 = t3, w5 = e3, p5 = n5, g5 = r4;
  }
  function L(t3, e3) {
    y5 = M3, x3 = A3, M3 = I3, A3 = V, null == y5 && null == x3 && (y5 = M3, x3 = A3), null != y5 && null != x3 && S3(t3, e3);
  }
  for (const U3 of l4) {
    f5 = null, u5 = null, h5 = null, m4 = null, d4 = null, w5 = null, p5 = null, g5 = null, y5 = null, x3 = null, M3 = null, A3 = null, I3 = null, V = null;
    const {
      totalTime: t3,
      timeSeed: e3
    } = U3;
    for (let n5 = 0; n5 < U3.numberOfVertices; n5++) {
      k3(o3[4 * (U3.startVertex + n5)], o3[4 * (U3.startVertex + n5) + 1], o3[4 * (U3.startVertex + n5) + 2], o3[4 * (U3.startVertex + n5) + 3], t3, e3);
    }
    L(t3, e3);
  }
  return {
    vertexData: s8,
    indexData: c5
  };
}
function p4(t2, n4) {
  const r3 = n4.pixels, {
    width: o3,
    height: l4
  } = n4, i4 = new Float32Array(o3 * l4 * 2), a6 = n4.mask || new Uint8Array(o3 * l4 * 2);
  if (n4.mask || a6.fill(255), "vector-uv" === t2) for (let e2 = 0; e2 < o3 * l4; e2++) i4[2 * e2] = r3[0][e2], i4[2 * e2 + 1] = -r3[1][e2];
  else if ("vector-magdir" === t2) for (let s8 = 0; s8 < o3 * l4; s8++) {
    const t3 = r3[0][s8], n5 = h(r3[1][s8]), o4 = Math.cos(n5 - Math.PI / 2), l5 = Math.sin(n5 - Math.PI / 2);
    i4[2 * s8] = o4 * t3, i4[2 * s8 + 1] = l5 * t3;
  }
  return {
    data: i4,
    mask: a6,
    width: o3,
    height: l4
  };
}
function g4(t2, e2, n4, r3, a6, s8) {
  return __async(this, null, function* () {
    const c5 = performance.now(), f5 = s4(e2.spatialReference);
    if (!f5) {
      const o3 = yield y4(t2, e2, n4, r3, a6, s8);
      return has("esri-2d-profiler") && i3().info("I.7", "loadImagery, early exit (ms)", Math.round(performance.now() - c5)), has("esri-2d-profiler") && i3().info("I.9", "Number of parts", 1), o3;
    }
    const [u5, h5] = f5.valid, m4 = h5 - u5, d4 = Math.ceil(e2.width / m4), w5 = e2.width / d4, p5 = Math.round(n4 / d4);
    let g5 = e2.xmin;
    const x3 = [], M3 = performance.now();
    for (let o3 = 0; o3 < d4; o3++) {
      const n5 = new w({
        xmin: g5,
        xmax: g5 + w5,
        ymin: e2.ymin,
        ymax: e2.ymax,
        spatialReference: e2.spatialReference
      });
      x3.push(y4(t2, n5, p5, r3, a6, s8)), g5 += w5;
    }
    const A3 = yield Promise.all(x3);
    has("esri-2d-profiler") && i3().info("I.8", "All calls to _fetchPart (ms)", Math.round(performance.now() - M3)), has("esri-2d-profiler") && i3().info("I.9", "Number of parts", A3.length);
    const I3 = {
      data: new Float32Array(n4 * r3 * 2),
      mask: new Uint8Array(n4 * r3),
      width: n4,
      height: r3
    };
    let V = 0;
    for (const o3 of A3) {
      for (let t3 = 0; t3 < o3.height; t3++) for (let e3 = 0; e3 < o3.width; e3++) V + e3 >= n4 || (I3.data[2 * (t3 * n4 + V + e3)] = o3.data[2 * (t3 * o3.width + e3)], I3.data[2 * (t3 * n4 + V + e3) + 1] = o3.data[2 * (t3 * o3.width + e3) + 1], I3.mask[t3 * n4 + V + e3] = o3.mask[t3 * o3.width + e3]);
      V += o3.width;
    }
    return has("esri-2d-profiler") && i3().info("I.10", "loadImagery, general exit (ms)", Math.round(performance.now() - c5)), I3;
  });
}
function y4(t2, e2, n4, r3, o3, l4) {
  return __async(this, null, function* () {
    const i4 = {
      requestProjectedLocalDirections: true,
      signal: l4
    };
    if (null != o3 && (i4.timeExtent = o3), "imagery" === t2.type) {
      yield t2.load({
        signal: l4
      });
      const o4 = t2.rasterInfo.dataType, a7 = yield t2.fetchImage(e2, n4, r3, i4);
      return null == a7?.pixelData?.pixelBlock ? {
        data: new Float32Array(n4 * r3 * 2),
        mask: new Uint8Array(n4 * r3),
        width: n4,
        height: r3
      } : p4(o4, a7.pixelData.pixelBlock);
    }
    yield t2.load({
      signal: l4
    });
    const a6 = t2.serviceRasterInfo.dataType, s8 = yield t2.fetchPixels(e2, n4, r3, i4);
    return null == s8?.pixelBlock ? {
      data: new Float32Array(n4 * r3 * 2),
      mask: new Uint8Array(n4 * r3),
      width: n4,
      height: r3
    } : p4(a6, s8.pixelBlock);
  });
}

export {
  l,
  g,
  n3 as n,
  l2,
  i,
  o,
  r,
  a3 as a,
  h2 as h,
  f2 as f,
  c2 as c,
  u2 as u,
  p2 as p,
  g2,
  y2 as y,
  w2 as w,
  M,
  U,
  T,
  W,
  E,
  R,
  D,
  s6 as s,
  a4 as a2,
  l3,
  u3 as u2,
  f3 as f2,
  p3 as p2,
  m2 as m,
  _2 as _,
  U2,
  S2 as S,
  s7 as s2,
  g4 as g3
};
//# sourceMappingURL=chunk-3HU4B6P4.js.map
