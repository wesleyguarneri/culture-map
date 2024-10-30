import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  h as h4,
  i as i4,
  m as m4,
  s as s4,
  x
} from "./chunk-B2UUI3OT.js";
import {
  $,
  E as E2,
  L as L3,
  N as N3,
  U as U5,
  W as W3,
  a as a4,
  c as c3,
  c2 as c4,
  c3 as c5,
  d as d3,
  f as f7,
  h as h3,
  l as l6,
  q,
  t as t2
} from "./chunk-QXI57KH6.js";
import {
  D as D4,
  a as a5,
  d as d4,
  f as f6,
  g as g4,
  h as h2,
  i as i3,
  o as o3,
  p as p4
} from "./chunk-DSARYBLQ.js";
import {
  j as j5
} from "./chunk-KU2YMUPJ.js";
import {
  R as R3,
  S as S2,
  c as c2,
  y as y5
} from "./chunk-ENLKSIF3.js";
import {
  C,
  D as D3,
  J,
  T as T2,
  U as U4,
  V,
  Z,
  ee,
  j as j4,
  oe,
  re
} from "./chunk-PLQQNSQY.js";
import {
  B,
  D,
  F,
  L,
  L2,
  N as N2,
  P,
  R,
  U as U2,
  g as g3,
  h2 as h,
  j as j3,
  m as m2,
  m3,
  n as n4,
  n2 as n5,
  r,
  r2
} from "./chunk-IQ72QELA.js";
import {
  D as D2,
  E,
  R as R2,
  T,
  U as U3,
  W as W2,
  f2 as f5,
  g as g2,
  l3 as l4,
  s2 as s3,
  u2 as u4
} from "./chunk-SU5BOQUT.js";
import {
  l as l3,
  u as u3
} from "./chunk-7MWFHTLS.js";
import {
  _ as _2
} from "./chunk-QWE4DSVN.js";
import {
  l as l5
} from "./chunk-NOH3NLJ5.js";
import {
  p as p3
} from "./chunk-UGFQYEND.js";
import {
  e as e2
} from "./chunk-XC5RDNAY.js";
import {
  l as l2
} from "./chunk-PQUZDC3L.js";
import {
  d as d2
} from "./chunk-6XY35LS7.js";
import {
  y as y2
} from "./chunk-VZ37C3ID.js";
import {
  k as k2
} from "./chunk-KYPTWEOO.js";
import {
  i as i2
} from "./chunk-DL2B6IFJ.js";
import {
  u as u2
} from "./chunk-KUBMHTYA.js";
import {
  o as o2
} from "./chunk-6EIBUVMG.js";
import {
  A
} from "./chunk-NBJSAHZT.js";
import {
  j as j2
} from "./chunk-BD24XM4D.js";
import {
  y as y3
} from "./chunk-CXNERL22.js";
import {
  p as p2,
  z
} from "./chunk-KAHESDP5.js";
import {
  f as f4
} from "./chunk-REIMIECM.js";
import {
  l
} from "./chunk-EO2EW5KR.js";
import {
  t
} from "./chunk-UZ7IOCF3.js";
import {
  b
} from "./chunk-OS542PQQ.js";
import {
  p,
  y as y4
} from "./chunk-3B5GODXR.js";
import {
  S
} from "./chunk-7TBQUMV3.js";
import {
  f as f3
} from "./chunk-TPLUZX3A.js";
import {
  j
} from "./chunk-MRPCXIVS.js";
import {
  n as n3
} from "./chunk-2HDBQXAR.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  f as f2
} from "./chunk-ZDRQSPB6.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  a as a3
} from "./chunk-AYL3HQHD.js";
import {
  W2 as W,
  c2 as c,
  s2
} from "./chunk-6SSA7P3A.js";
import {
  I,
  U
} from "./chunk-XLEC46FY.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  d
} from "./chunk-LZSLQ24Q.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  i
} from "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  N,
  a3 as a2,
  g2 as g
} from "./chunk-UDMPWVPF.js";
import {
  a,
  k,
  m,
  u,
  v
} from "./chunk-AIZ3T7E3.js";
import {
  n as n2
} from "./chunk-6WGE3IUL.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  O,
  has
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/support/rasterDatasets/BaseRaster.js
var V2 = 8;
var U6 = 256;
var $2 = 0;
var Q = class extends n3(f) {
  constructor() {
    super(...arguments), this._tileFetchQueue = new _2({
      concurrency: 32,
      process: (e4, t5) => this._fetchRawTile(e4.pyramidLevel, e4.row, e4.col, __spreadProps(__spreadValues({}, e4.options), {
        signal: t5
      }))
    }), this.datasetName = null, this.datasetFormat = null, this.hasUniqueSourceStorageInfo = true, this.rasterInfo = null, this.ioConfig = {
      sampling: "closest"
    };
  }
  init() {
    return __async(this, null, function* () {
      const e4 = T2();
      this.addResolvingPromise(e4), yield this.when();
    });
  }
  normalizeCtorArgs(e4) {
    return e4?.ioConfig && (e4 = __spreadProps(__spreadValues({}, e4), {
      ioConfig: __spreadValues({
        resolution: null,
        bandIds: null,
        sampling: "closest",
        tileInfo: z.create()
      }, e4.ioConfig)
    })), e4;
  }
  get _isGlobalWrappableSource() {
    const {
      rasterInfo: e4
    } = this, t5 = D3(e4.spatialReference);
    return null != t5 && e4.extent.width >= t5 / 2;
  }
  get _hasNoneOrGCSShiftTransform() {
    const {
      transform: e4
    } = this.rasterInfo;
    return null == e4 || "gcs-shift" === e4.type;
  }
  set rasterJobHandler(e4) {
    this._set("rasterJobHandler", e4), "Function" === this.datasetFormat && this.primaryRasters?.rasters?.forEach((t5) => t5.rasterJobHandler = e4);
  }
  get rasterId() {
    return this.url || "rasterId-" + $2++;
  }
  set url(e4) {
    this._set("url", y3(e4, n.getLogger(this)));
  }
  open(e4) {
    return __async(this, null, function* () {
      throw new s("BaseRaster:open-not-implemented", "open() is not implemented");
    });
  }
  fetchTile(_0, _1, _22) {
    return __async(this, arguments, function* (e4, t5, i7, o7 = {}) {
      const r6 = o7.tileInfo || this.rasterInfo.storageInfo.tileInfo, n9 = this.getTileExtentFromTileInfo(e4, t5, i7, r6);
      return o7 = __spreadValues({
        noClip: true
      }, o7), this.fetchPixels(n9, r6.size[0], r6.size[1], o7);
    });
  }
  identify(_0) {
    return __async(this, arguments, function* (e4, t5 = {}) {
      e4 = g(_, e4).clone().normalize();
      const {
        multidimensionalDefinition: i7,
        timeExtent: o7
      } = t5, {
        rasterInfo: r6
      } = this, {
        hasMultidimensionalTranspose: n9,
        multidimensionalInfo: s5
      } = r6;
      let {
        transposedVariableName: l8
      } = t5;
      const c8 = null != s5 && n9 && (null != o7 || h2(i7));
      if (c8 && !l8) {
        l8 = null != i7 && i7.length > 0 ? i7[0].variableName ?? void 0 : s5.variables[0].name, t5 = __spreadProps(__spreadValues({}, t5), {
          transposedVariableName: l8
        });
      }
      t5 = this._getRequestOptionsWithSliceId(t5);
      const {
        spatialReference: m9,
        extent: f11
      } = r6, {
        datumTransformation: u10
      } = t5;
      let h9 = j4(e4, m9, u10);
      if (!f11.intersects(h9)) return {
        location: h9,
        value: null
      };
      if (null != r6.transform) {
        const e5 = r6.transform.inverseTransform(h9);
        if (!r6.nativeExtent.intersects(e5)) return {
          location: e5,
          value: null
        };
        h9 = e5;
      }
      let p8 = 0;
      const d8 = null != l8 && null != s5 && r6.hasMultidimensionalTranspose;
      if ("Function" === this.datasetFormat) {
        const e5 = this.primaryRasters.rasters[0];
        if (d8) return e5.identify(h9, t5);
        const {
          pixelSize: o8
        } = r6, n10 = 3, s6 = o8.x * n10 / 2, l9 = o8.y * n10 / 2, a7 = new w({
          xmin: h9.x - s6,
          xmax: h9.x + s6,
          ymin: h9.y - l9,
          ymax: h9.y + l9,
          spatialReference: m9
        }), c9 = {
          interpolation: "nearest",
          multidimensionalDefinition: i7,
          sliceId: t5.sliceId
        }, {
          pixelBlock: f12
        } = yield e5.fetchPixels(a7, n10, n10, c9), {
          pixelBlock: u11
        } = yield this.fetchPixels(a7, n10, n10, c9);
        if (null == f12) return {
          location: h9,
          value: null
        };
        const p9 = Math.floor(n10 * n10 * 0.5), x4 = !f12.mask || f12.mask[p9] ? f12.pixels.map((e6) => e6[p9]) : null;
        let y8;
        return null != u11 && (y8 = !u11.mask || u11.mask[p9] ? u11.pixels.map((e6) => e6[p9]) : void 0), {
          location: h9,
          value: x4,
          processedValue: y8,
          pyramidLevel: 0
        };
      }
      if (!d8) {
        if (t5.srcResolution) {
          p8 = re(t5.srcResolution, r6, this.ioConfig.sampling).pyramidLevel;
        } else if (p8 = yield this.computeBestPyramidLevelForLocation(e4, t5), null == p8) return {
          location: h9,
          value: null
        };
      }
      const y7 = this.identifyPixelLocation(h9, p8, null, d8);
      if (null === y7) return {
        location: h9,
        value: null
      };
      const {
        row: g7,
        col: I4,
        rowOffset: k4,
        colOffset: v4,
        blockWidth: T3
      } = y7, b3 = l8 ?? t5.sliceId, P3 = i4(this.rasterId, b3), B2 = `${p8}/${g7}/${I4}`;
      let M2 = m4(P3, null, B2);
      null == M2 && (M2 = this.fetchRawTile(p8, g7, I4, t5), x(P3, null, B2, M2));
      const _4 = yield M2;
      if (!_4?.pixels?.length) return {
        location: h9,
        value: null
      };
      const C3 = k4 * T3 + v4;
      return this._processIdentifyResult(_4, {
        srcLocation: h9,
        position: C3,
        pyramidLevel: p8,
        useTransposedTile: !!d8,
        requestSomeSlices: c8,
        identifyOptions: t5
      });
    });
  }
  fetchPixels(_0, _1, _22) {
    return __async(this, arguments, function* (e4, t5, i7, o7 = {}) {
      e4 = oe(e4), o7 = this._getRequestOptionsWithSliceId(o7);
      const {
        _hasNoneOrGCSShiftTransform: r6
      } = this;
      if (o7.requestRawData && r6) return this._fetchPixels(e4, t5, i7, o7);
      const n9 = D3(e4.spatialReference), s5 = V(e4);
      if (null == n9 || 0 === s5 || 1 === s5 && this._isGlobalWrappableSource && r6) return this._fetchPixels(e4, t5, i7, o7);
      if (s5 >= 3) return {
        extent: e4,
        pixelBlock: null
      };
      const l8 = [], {
        xmin: a7,
        xmax: c8
      } = e4, m9 = Math.round(n9 / (c8 - a7) * t5), f11 = m9 - Math.round((n9 / 2 - a7) / (c8 - a7) * t5);
      let u10 = 0;
      const h9 = [];
      for (let y7 = 0; y7 <= s5; y7++) {
        const r7 = new w({
          xmin: 0 === y7 ? a7 : -n9 / 2,
          xmax: y7 === s5 ? c8 - n9 * y7 : n9 / 2,
          ymin: e4.ymin,
          ymax: e4.ymax,
          spatialReference: e4.spatialReference
        }), p9 = 0 === y7 ? m9 - f11 : y7 === s5 ? t5 - u10 : m9;
        u10 += p9, h9.push(p9);
        const d9 = o7.disableWrapAround && y7 > 0 ? null : this._fetchPixels(r7, p9, i7, o7);
        l8.push(d9);
      }
      const p8 = (yield Promise.all(l8)).map((e5) => e5?.pixelBlock);
      let d8 = null;
      const x4 = {
        width: t5,
        height: i7
      };
      if (this.rasterJobHandler) {
        d8 = (yield this.rasterJobHandler.mosaicAndTransform({
          srcPixelBlocks: p8,
          srcMosaicSize: x4,
          destDimension: null,
          coefs: null,
          sampleSpacing: null,
          interpolation: "nearest",
          alignmentInfo: null,
          blockWidths: h9
        }, o7)).pixelBlock;
      } else d8 = U3(p8, x4, {
        blockWidths: h9
      });
      return {
        extent: e4,
        srcExtent: J(e4, this.rasterInfo.spatialReference, o7.datumTransformation),
        pixelBlock: d8
      };
    });
  }
  fetchRawPixels(_0, _1, _22) {
    return __async(this, arguments, function* (e4, t5, i7, o7 = {}) {
      t5 = {
        x: Math.floor(t5.x),
        y: Math.floor(t5.y)
      };
      const r6 = yield this._fetchRawTiles(e4, t5, i7, o7), {
        nativeExtent: n9,
        nativePixelSize: s5,
        storageInfo: l8
      } = this.rasterInfo, a7 = 2 ** e4, c8 = s5.x * a7, m9 = s5.y * a7, f11 = new w({
        xmin: n9.xmin + c8 * t5.x,
        xmax: n9.xmin + c8 * (t5.x + i7.width - 1),
        ymin: n9.ymax - m9 * (t5.y + i7.height - 1),
        ymax: n9.ymax - m9 * t5.y,
        spatialReference: n9.spatialReference
      });
      if (!r6) return {
        extent: f11,
        srcExtent: f11,
        pixelBlock: null
      };
      const {
        pixelBlocks: u10,
        mosaicSize: h9
      } = r6;
      if (1 === u10.length && null != u10[0] && u10[0].width === i7.width && u10[0].height === i7.height) return {
        extent: f11,
        srcExtent: f11,
        pixelBlock: r6.pixelBlocks[0]
      };
      const p8 = e4 > 0 ? l8.pyramidBlockWidth : l8.blockWidth, d8 = e4 > 0 ? l8.pyramidBlockHeight : l8.blockHeight, x4 = {
        x: t5.x % p8,
        y: t5.y % d8
      };
      let y7;
      if (this.rasterJobHandler) {
        y7 = (yield this.rasterJobHandler.mosaicAndTransform({
          srcPixelBlocks: u10,
          srcMosaicSize: h9,
          destDimension: i7,
          clipOffset: x4,
          clipSize: i7,
          coefs: null,
          sampleSpacing: null,
          interpolation: o7.interpolation,
          alignmentInfo: null,
          blockWidths: null
        }, o7)).pixelBlock;
      } else y7 = U3(u10, h9, {
        clipOffset: x4,
        clipSize: i7
      });
      return {
        extent: f11,
        srcExtent: f11,
        pixelBlock: y7
      };
    });
  }
  fetchRawTile(e4, t5, o7, r6) {
    throw new s("BaseRaster:read-not-implemented", "fetchRawTile() is not implemented");
  }
  computeExtent(e4) {
    return J(this.rasterInfo.extent, e4);
  }
  decodePixelBlock(e4, t5) {
    return !this.rasterJobHandler || t5.useCanvas ? j3(e4, t5) : this.rasterJobHandler.decode({
      data: e4,
      options: t5
    });
  }
  request(e4, i7, o7 = 0) {
    return __async(this, null, function* () {
      const {
        customFetchParameters: r6
      } = this.ioConfig, {
        range: n9,
        query: s5,
        headers: l8
      } = i7;
      o7 = o7 ?? i7.retryCount ?? this.ioConfig.retryCount;
      const a7 = n9 ? {
        Range: `bytes=${n9.from}-${n9.to}`
      } : null;
      try {
        return yield U(e4, __spreadProps(__spreadValues({}, i7), {
          query: __spreadValues(__spreadValues({}, s5), r6),
          headers: __spreadValues(__spreadValues({}, l8), a7)
        }));
      } catch (c8) {
        if (o7 > 0) return o7--, this.request(e4, i7, o7);
        throw c8;
      }
    });
  }
  getSliceIndex(e4) {
    const {
      multidimensionalInfo: t5
    } = this.rasterInfo;
    return null == t5 || null == e4 || 0 === e4.length ? null : D4(e4, t5);
  }
  getTileExtentFromTileInfo(e4, t5, i7, o7) {
    const r6 = o7.lodAt(e4);
    return this.getTileExtent({
      x: r6.resolution,
      y: r6.resolution
    }, t5, i7, o7.origin, o7.spatialReference, o7.size);
  }
  updateTileInfo() {
    const {
      storageInfo: e4,
      spatialReference: t5,
      extent: i7,
      pixelSize: o7
    } = this.rasterInfo, {
      pyramidResolutions: r6
    } = e4;
    if (!e4.tileInfo) {
      const n9 = [], s5 = e4.maximumPyramidLevel || 0;
      let l8 = (o7.x + o7.y) / 2, a7 = 1 / 0.0254 * 96 * l8;
      for (let e5 = 0; e5 <= s5 && (n9.unshift(new p2({
        level: s5 - e5,
        resolution: l8,
        scale: a7
      })), e5 !== s5); e5++) if (r6) {
        const t6 = (r6[e5].x + r6[e5].y) / 2;
        a7 *= t6 / l8, l8 = t6;
      } else l8 *= 2, a7 *= 2;
      const c8 = new _({
        x: i7.xmin,
        y: i7.ymax,
        spatialReference: t5
      });
      e4.tileInfo = new z({
        origin: c8,
        size: [e4.blockWidth, e4.blockHeight],
        spatialReference: t5,
        lods: n9
      }), e4.isVirtualTileInfo = true;
    }
  }
  createRemoteDatasetStorageInfo(e4, t5 = 512, i7 = 512, o7) {
    const {
      width: r6,
      height: n9,
      nativeExtent: s5,
      pixelSize: l8,
      spatialReference: a7
    } = e4, c8 = new _({
      x: s5.xmin,
      y: s5.ymax,
      spatialReference: a7
    });
    null == o7 && (o7 = Math.max(0, Math.round(Math.log(Math.max(r6, n9)) / Math.LN2 - 8)));
    const m9 = this.computeBlockBoundary(s5, 512, 512, {
      x: s5.xmin,
      y: s5.ymax
    }, [l8], o7);
    e4.storageInfo = new n5({
      blockWidth: t5,
      blockHeight: i7,
      pyramidBlockWidth: t5,
      pyramidBlockHeight: i7,
      origin: c8,
      firstPyramidLevel: 1,
      maximumPyramidLevel: o7,
      blockBoundary: m9
    });
  }
  computeBestPyramidLevelForLocation(_0) {
    return __async(this, arguments, function* (e4, t5 = {}) {
      return 0;
    });
  }
  computeBlockBoundary(e4, t5, i7, o7, r6, n9 = 0, s5 = 2) {
    if (1 === r6.length && n9 > 0) {
      r6 = [...r6];
      let {
        x: e5,
        y: t6
      } = r6[0];
      for (let i8 = 0; i8 < n9; i8++) e5 *= s5, t6 *= s5, r6.push({
        x: e5,
        y: t6
      });
    }
    const l8 = [], {
      x: a7,
      y: c8
    } = o7;
    for (let m9 = 0; m9 < r6.length; m9++) {
      const {
        x: o8,
        y: n10
      } = r6[m9];
      l8.push({
        minCol: Math.floor((e4.xmin - a7 + 0.1 * o8) / t5 / o8),
        maxCol: Math.floor((e4.xmax - a7 - 0.1 * o8) / t5 / o8),
        minRow: Math.floor((c8 - e4.ymax + 0.1 * n10) / i7 / n10),
        maxRow: Math.floor((c8 - e4.ymin - 0.1 * n10) / i7 / n10)
      });
    }
    return l8;
  }
  getPyramidPixelSize(e4) {
    const {
      nativePixelSize: t5
    } = this.rasterInfo, {
      pyramidResolutions: i7,
      pyramidScalingFactor: o7
    } = this.rasterInfo.storageInfo;
    if (0 === e4) return t5;
    if (null != i7 && i7.length) return i7[e4 - 1];
    const r6 = o7 ** e4;
    return {
      x: t5.x * r6,
      y: t5.y * r6
    };
  }
  identifyPixelLocation(e4, t5, i7, o7) {
    const {
      spatialReference: r6,
      nativeExtent: n9,
      storageInfo: s5
    } = this.rasterInfo, {
      maximumPyramidLevel: l8,
      origin: a7,
      transposeInfo: c8
    } = s5, m9 = o7 && null != c8 ? c8.tileSize[0] : s5.blockWidth, f11 = o7 && null != c8 ? c8.tileSize[1] : s5.blockHeight, u10 = j4(e4, r6, i7);
    if (!n9.intersects(u10)) return null;
    if (t5 < 0 || t5 > l8) return null;
    const h9 = this.getPyramidPixelSize(t5), {
      x: p8,
      y: d8
    } = h9, x4 = (a7.y - u10.y) / d8 / f11, y7 = (u10.x - a7.x) / p8 / m9, g7 = Math.min(f11 - 1, Math.floor((x4 - Math.floor(x4)) * f11)), I4 = Math.min(m9 - 1, Math.floor((y7 - Math.floor(y7)) * m9));
    return {
      pyramidLevel: t5,
      row: Math.floor(x4),
      col: Math.floor(y7),
      rowOffset: g7,
      colOffset: I4,
      blockWidth: m9,
      srcLocation: u10
    };
  }
  getTileExtent(e4, t5, i7, o7, r6, n9) {
    const [s5, l8] = n9, a7 = o7.x + i7 * s5 * e4.x, c8 = a7 + s5 * e4.x, m9 = o7.y - t5 * l8 * e4.y, f11 = m9 - l8 * e4.y;
    return new w({
      xmin: a7,
      xmax: c8,
      ymin: f11,
      ymax: m9,
      spatialReference: r6
    });
  }
  getBlockWidthHeight(e4) {
    return {
      blockWidth: e4 > 0 ? this.rasterInfo.storageInfo.pyramidBlockWidth : this.rasterInfo.storageInfo.blockWidth,
      blockHeight: e4 > 0 ? this.rasterInfo.storageInfo.pyramidBlockHeight : this.rasterInfo.storageInfo.blockHeight
    };
  }
  isBlockOutside(e4, t5, i7) {
    const o7 = this.rasterInfo.storageInfo.blockBoundary[e4];
    return !o7 || o7.maxRow < t5 || o7.maxCol < i7 || o7.minRow > t5 || o7.minCol > i7;
  }
  updateImageSpaceRasterInfo(e4) {
    const {
      extent: t5,
      pixelSize: i7
    } = e4;
    if (-0.5 === t5.xmin && 0.5 === t5.ymax && 1 === i7.x && 1 === i7.y && null == e4.transform) return;
    const {
      width: o7,
      height: r6
    } = e4, n9 = f2.WebMercator;
    e4.spatialReference = n9, e4.extent = e4.nativeExtent = new w({
      xmin: -0.5,
      ymax: 0.5,
      xmax: o7 - 0.5,
      ymin: 0.5 - r6,
      spatialReference: n9
    }), e4.isPseudoSpatialReference = true, e4.transform = null, e4.pixelSize = new _({
      x: 1,
      y: 1,
      spatialReference: n9
    });
    const {
      extent: s5,
      storageInfo: l8
    } = e4;
    if (l8) {
      l8.origin = new _({
        x: s5.xmin,
        y: s5.ymax,
        spatialReference: n9
      });
      const {
        pyramidResolutions: t6,
        tileInfo: o8
      } = l8;
      if (t6 && t6.forEach((e5) => {
        e5.x /= i7.x, e5.y /= i7.y;
      }), o8) {
        o8.origin = l8.origin;
        const t7 = (e4.nativePixelSize.x + e4.nativePixelSize.y) / 2;
        o8.lods.forEach((e5, i8) => {
          e5.resolution = t7 * 2 ** i8, e5.scale = 96 * e5.resolution / 0.0254;
        });
      }
    }
  }
  _fetchPixels(_0, _1, _22) {
    return __async(this, arguments, function* (e4, t5, i7, o7 = {}) {
      let r6 = V(e4);
      if (r6 >= 2) return {
        extent: e4,
        pixelBlock: null
      };
      const n9 = this._getSourceDataInfo(e4, t5, i7, o7), {
        pyramidLevel: s5,
        srcResolution: l8,
        srcExtent: a7,
        srcWidth: c8,
        srcHeight: m9,
        ul: f11
      } = n9;
      if (0 === c8 || 0 === m9) return {
        extent: e4,
        srcExtent: a7,
        pixelBlock: null
      };
      const {
        rasterInfo: u10
      } = this, h9 = u10.transform, p8 = "gcs-shift" === h9?.type, d8 = null != D3(e4.spatialReference);
      !p8 && d8 || (r6 = V(n9.srcExtent, p8));
      const x4 = yield this._fetchRawTiles(s5, f11, {
        width: c8,
        height: m9,
        wrapCount: r6
      }, o7);
      if (!x4) return {
        extent: e4,
        srcExtent: a7,
        pixelBlock: null
      };
      const y7 = u10.storageInfo, g7 = s5 > 0 ? y7.pyramidBlockWidth : y7.blockWidth, I4 = s5 > 0 ? y7.pyramidBlockHeight : y7.blockHeight;
      let {
        x: R4,
        y: w3
      } = u10.pixelSize;
      if (s5 > 0) {
        const {
          pyramidResolutions: e5,
          pyramidScalingFactor: t6
        } = y7;
        if (null != e5 && e5[s5 - 1]) ({
          x: R4,
          y: w3
        } = e5[s5 - 1]);
        else {
          const e6 = t6 ** s5;
          R4 *= e6, w3 *= e6;
        }
      }
      const S5 = u10.spatialReference, k4 = new _({
        x: R4,
        y: w3,
        spatialReference: S5
      }), v4 = g7 === c8 && I4 === m9 && f11.x % g7 == 0 && f11.y % I4 == 0, T3 = new _({
        x: (e4.xmax - e4.xmin) / t5,
        y: (e4.ymax - e4.ymin) / i7,
        spatialReference: e4.spatialReference
      }), b3 = !e4.spatialReference.equals(S5), W4 = S5.isGeographic ? 1e-9 : 1e-4, {
        datumTransformation: j6
      } = o7;
      if (!b3 && v4 && 1 === x4.pixelBlocks.length && g7 === t5 && I4 === i7 && X(l8, T3, W4)) return {
        extent: e4,
        srcExtent: a7,
        srcTilePixelSize: k4,
        pixelBlock: x4.pixelBlocks[0]
      };
      const z2 = d8 && null != D3(a7.spatialReference) && this._hasNoneOrGCSShiftTransform, L4 = o7.requestProjectedLocalDirections && this.rasterInfo.dataType.startsWith("vector");
      L4 && !this.rasterJobHandler && (yield T2());
      const D6 = this.rasterJobHandler ? yield this.rasterJobHandler.getProjectionOffsetGrid({
        projectedExtent: e4,
        srcBufferExtent: x4.extent,
        pixelSize: T3.toJSON(),
        datumTransformation: j6,
        rasterTransform: h9,
        hasWrapAround: r6 > 0 || z2,
        isAdaptive: false !== this.ioConfig.optimizeProjectionAccuracy,
        includeGCSGrid: L4
      }, o7) : ee({
        projectedExtent: e4,
        srcBufferExtent: x4.extent,
        pixelSize: T3,
        datumTransformation: j6,
        rasterTransform: h9,
        hasWrapAround: r6 > 0 || z2,
        isAdaptive: false,
        includeGCSGrid: L4
      });
      let F3;
      const A2 = !o7.requestRawData, G = {
        rows: D6.spacing[0],
        cols: D6.spacing[1]
      }, q2 = this._hasNoneOrGCSShiftTransform ? this._getRasterTileAlignmentInfo(s5, x4.extent.xmin) : void 0, {
        pixelBlocks: N4,
        mosaicSize: V4,
        isPartiallyFilled: U7
      } = x4;
      let $3 = null;
      if (this.rasterJobHandler) {
        const e5 = yield this.rasterJobHandler.mosaicAndTransform({
          srcPixelBlocks: N4,
          srcMosaicSize: V4,
          destDimension: A2 ? {
            width: t5,
            height: i7
          } : null,
          coefs: A2 ? D6.coefficients : null,
          sampleSpacing: A2 ? G : null,
          projectDirections: L4,
          gcsGrid: L4 ? D6.gcsGrid : null,
          isUV: "vector-uv" === this.rasterInfo.dataType,
          interpolation: o7.interpolation,
          alignmentInfo: q2,
          blockWidths: null
        }, o7);
        ({
          pixelBlock: F3,
          localNorthDirections: $3
        } = e5);
      } else {
        const e5 = U3(N4, V4, {
          alignmentInfo: q2
        });
        F3 = A2 ? D2(e5, {
          width: t5,
          height: i7
        }, D6.coefficients, G, o7.interpolation) : e5, L4 && D6.gcsGrid && ($3 = R2({
          width: t5,
          height: i7
        }, D6.gcsGrid), F3 = u4(F3, this.rasterInfo.dataType, $3));
      }
      return o7.requestRawData || L4 ? {
        extent: e4,
        srcExtent: a7,
        srcTilePixelSize: k4,
        pixelBlock: F3,
        transformGrid: D6,
        localNorthDirections: $3,
        isPartiallyFilled: U7
      } : {
        extent: e4,
        srcExtent: a7,
        srcTilePixelSize: k4,
        pixelBlock: F3
      };
    });
  }
  _fetchRawTiles(e4, t5, i7, o7) {
    return __async(this, null, function* () {
      const {
        origin: r6,
        blockBoundary: n9
      } = this.rasterInfo.storageInfo, {
        blockWidth: s5,
        blockHeight: l8
      } = this.getBlockWidthHeight(e4);
      let {
        x: a7,
        y: c8
      } = t5, {
        width: m9,
        height: f11,
        wrapCount: u10
      } = i7;
      const h9 = this._getRasterTileAlignmentInfo(e4, 0);
      o7.buffer && (a7 -= o7.buffer.cols, c8 -= o7.buffer.rows, m9 += 2 * o7.buffer.cols, f11 += 2 * o7.buffer.rows);
      let p8 = 0, d8 = 0, x4 = 0;
      if (u10 && null != h9) {
        ({
          worldColumnCountFromOrigin: d8,
          originColumnOffset: x4,
          rightPadding: p8
        } = h9);
        d8 * h9.blockWidth - p8 >= a7 + m9 && (p8 = 0);
      }
      const y7 = Math.floor(a7 / s5), g7 = Math.floor(c8 / l8), I4 = Math.floor((a7 + m9 + p8 - 1) / s5), R4 = Math.floor((c8 + f11 + p8 - 1) / l8), w3 = n9[e4];
      if (!w3) return null;
      const {
        minRow: S5,
        minCol: k4,
        maxCol: v4,
        maxRow: T3
      } = w3;
      if (0 === u10 && (R4 < S5 || I4 < k4 || g7 > T3 || y7 > v4)) return null;
      const b3 = new Array();
      let P3 = false;
      const B2 = null == this.ioConfig.allowPartialFill ? o7.allowPartialFill : this.ioConfig.allowPartialFill;
      for (let H = g7; H <= R4; H++) for (let t6 = y7; t6 <= I4; t6++) {
        let i8 = t6;
        if (!o7.disableWrapAround && u10 && null != h9 && d8 <= t6 && (i8 = t6 - d8 - x4), H >= S5 && i8 >= k4 && T3 >= H && v4 >= i8) {
          const t7 = this._tileFetchQueue.push({
            pyramidLevel: e4,
            row: H,
            col: i8,
            options: o7
          }, {
            signal: o7.signal
          });
          B2 ? b3.push(new Promise((e5) => {
            t7.then((t8) => e5(t8)).catch(() => {
              P3 = true, e5(null);
            });
          })) : b3.push(t7);
        } else b3.push(Promise.resolve(null));
      }
      if (0 === b3.length) return null;
      const M2 = yield Promise.all(b3), _4 = {
        height: (R4 - g7 + 1) * l8,
        width: (I4 - y7 + 1) * s5
      }, {
        spatialReference: C3
      } = this.rasterInfo, W4 = this.getPyramidPixelSize(e4), {
        x: j6,
        y: z2
      } = W4;
      return {
        extent: new w({
          xmin: r6.x + y7 * s5 * j6,
          xmax: r6.x + (I4 + 1) * s5 * j6,
          ymin: r6.y - (R4 + 1) * l8 * z2,
          ymax: r6.y - g7 * l8 * z2,
          spatialReference: C3
        }),
        pixelBlocks: M2,
        mosaicSize: _4,
        isPartiallyFilled: P3
      };
    });
  }
  _fetchRawTile(e4, t5, i7, o7) {
    const r6 = this.rasterInfo.storageInfo.blockBoundary[e4];
    if (!r6) return Promise.resolve(null);
    const {
      minRow: n9,
      minCol: l8,
      maxCol: a7,
      maxRow: c8
    } = r6;
    if (t5 < n9 || i7 < l8 || t5 > c8 || i7 > a7) return Promise.resolve(null);
    const m9 = i4(this.rasterId, o7.sliceId), f11 = `${e4}/${t5}/${i7}`;
    let u10 = m4(m9, o7.registryId, f11);
    if (null == u10) {
      const r7 = new AbortController();
      u10 = this.fetchRawTile(e4, t5, i7, __spreadProps(__spreadValues({}, o7), {
        signal: r7.signal
      })), x(m9, o7.registryId, f11, u10, r7), u10.catch(() => h4(m9, o7.registryId, f11));
    }
    return o7.signal && m(o7, () => {
      s4(m9, o7.registryId, f11);
    }), u10;
  }
  _computeMagDirValues(e4) {
    const {
      bandCount: t5,
      dataType: i7
    } = this.rasterInfo;
    if (!(2 === t5 && "vector-magdir" === i7 || "vector-uv" === i7) || 2 !== e4?.length || !e4[0]?.length) return null;
    const o7 = e4[0].length;
    if ("vector-magdir" === i7) {
      const t6 = e4[1].map((e5) => (e5 + 360) % 360);
      return [e4[0], t6];
    }
    const [r6, n9] = e4, s5 = [], l8 = [];
    for (let a7 = 0; a7 < o7; a7++) {
      const [e5, t6] = l4([r6[a7], n9[a7]]);
      s5.push(e5), l8.push(t6);
    }
    return [s5, l8];
  }
  _getRasterTileAlignmentInfo(e4, t5) {
    return null == this._rasterTileAlignmentInfo && (this._rasterTileAlignmentInfo = Z(this.rasterInfo)), null == this._rasterTileAlignmentInfo.pyramidsInfo ? null : __spreadValues({
      startX: t5,
      halfWorldWidth: this._rasterTileAlignmentInfo.halfWorldWidth,
      hasGCSSShiftTransform: this._rasterTileAlignmentInfo.hasGCSSShiftTransform
    }, this._rasterTileAlignmentInfo.pyramidsInfo[e4]);
  }
  _getSourceDataInfo(e4, t5, i7, o7 = {}) {
    const r6 = {
      datumTransformation: o7.datumTransformation,
      pyramidLevel: 0,
      pyramidResolution: null,
      srcExtent: null,
      srcHeight: 0,
      srcResolution: null,
      srcWidth: 0,
      ul: {
        x: 0,
        y: 0
      }
    };
    o7.srcResolution && (r6.srcResolution = o7.srcResolution, this._updateSourceDataInfo(e4, r6));
    const n9 = this.rasterInfo.storageInfo.maximumPyramidLevel || 0, {
      srcWidth: s5,
      srcHeight: l8,
      pyramidLevel: a7
    } = r6, c8 = s5 / t5, m9 = l8 / i7, f11 = a7 < n9 && c8 * m9 >= 16, u10 = a7 === n9 && this._requireTooManySrcTiles(s5, l8, t5, i7);
    if (f11 || u10 || 0 === s5 || 0 === l8) {
      const s6 = new _({
        x: (e4.xmax - e4.xmin) / t5,
        y: (e4.ymax - e4.ymin) / i7,
        spatialReference: e4.spatialReference
      });
      let l9 = C(s6, this.rasterInfo.spatialReference, e4, r6.datumTransformation);
      const u11 = !l9 || o7.srcResolution && l9.x + l9.y < o7.srcResolution.x + o7.srcResolution.y;
      if (f11 && o7.srcResolution && u11) {
        const e5 = Math.round(Math.log(Math.max(c8, m9)) / Math.LN2) - 1;
        if (n9 - a7 + 3 >= e5) {
          const t6 = 2 ** e5;
          l9 = {
            x: o7.srcResolution.x * t6,
            y: o7.srcResolution.y * t6
          };
        }
      }
      l9 && (r6.srcResolution = l9, this._updateSourceDataInfo(e4, r6));
    }
    return this._requireTooManySrcTiles(r6.srcWidth, r6.srcHeight, t5, i7) && (r6.srcWidth = 0, r6.srcHeight = 0), r6;
  }
  _requireTooManySrcTiles(e4, t5, i7, o7) {
    const {
      tileInfo: r6
    } = this.rasterInfo.storageInfo, n9 = Math.ceil(e4 / r6.size[0]) * Math.ceil(t5 / r6.size[1]), s5 = e4 / i7, l8 = t5 / o7, a7 = Math.max(1, (i7 + o7) / 1024);
    return n9 >= U6 * a7 || s5 > V2 || l8 > V2;
  }
  _updateSourceDataInfo(e4, t5) {
    t5.srcWidth = 0, t5.srcHeight = 0;
    const {
      rasterInfo: i7
    } = this, o7 = i7.spatialReference, {
      srcResolution: r6,
      datumTransformation: n9
    } = t5, {
      pyramidLevel: s5,
      pyramidResolution: l8,
      excessiveReading: a7
    } = re(r6, i7, this.ioConfig.sampling);
    if (a7) return;
    let c8 = t5.srcExtent || J(e4, o7, n9);
    if (null == c8) return;
    const m9 = i7.transform;
    m9 && (c8 = m9.inverseTransform(c8)), t5.srcExtent = c8;
    const {
      x: f11,
      y: u10
    } = i7.storageInfo.origin, h9 = Math.floor((c8.xmin - f11) / l8.x + 0.1), p8 = Math.floor((u10 - c8.ymax) / l8.y + 0.1), d8 = Math.floor((c8.xmax - f11) / l8.x - 0.1), x4 = Math.floor((u10 - c8.ymin) / l8.y - 0.1), y7 = c8.width < 0.1 * l8.x ? 0 : d8 - h9 + 1, g7 = c8.height < 0.1 * l8.y ? 0 : x4 - p8 + 1;
    t5.pyramidLevel = s5, t5.pyramidResolution = l8, t5.srcWidth = y7, t5.srcHeight = g7, t5.ul = {
      x: h9,
      y: p8
    };
  }
  _getRequestOptionsWithSliceId(e4) {
    return null != this.rasterInfo.multidimensionalInfo && null == e4.sliceId && (e4 = __spreadProps(__spreadValues({}, e4), {
      sliceId: this.getSliceIndex(e4.multidimensionalDefinition)
    })), e4;
  }
  _processIdentifyResult(e4, t5) {
    const {
      srcLocation: i7,
      position: o7,
      pyramidLevel: r6,
      useTransposedTile: n9
    } = t5, s5 = e4.pixels[0].length / e4.width / e4.height;
    if (!(!e4.mask || e4.mask[o7])) return {
      location: i7,
      value: null
    };
    const {
      multidimensionalInfo: l8
    } = this.rasterInfo;
    if (null == l8 || !n9) {
      const t6 = e4.pixels.map((e5) => e5[o7]), n10 = {
        location: i7,
        value: t6,
        pyramidLevel: r6
      }, s6 = this._computeMagDirValues(t6.map((e5) => [e5]));
      return s6?.length && (n10.magdirValue = s6.map((e5) => e5[0])), n10;
    }
    let a7 = e4.pixels.map((e5) => e5.slice(o7 * s5, o7 * s5 + s5)), c8 = this._computeMagDirValues(a7);
    const {
      requestSomeSlices: m9,
      identifyOptions: f11
    } = t5;
    let h9 = i3(l8, f11.transposedVariableName);
    if (m9) {
      const e5 = a5(h9, f11.multidimensionalDefinition, f11.timeExtent);
      a7 = a7.map((t6) => e5.map((e6) => t6[e6])), c8 = c8?.map((t6) => e5.map((e6) => t6[e6])), h9 = e5.map((e6) => h9[e6]);
    }
    const p8 = e4.noDataValues || this.rasterInfo.noDataValue, d8 = {
      pixels: a7,
      pixelType: e4.pixelType
    };
    let x4;
    null != p8 && (l3(d8, p8), x4 = d8.mask);
    return {
      location: i7,
      value: null,
      dataSeries: h9.map((e5, t6) => {
        const i8 = {
          value: 0 === x4?.[t6] ? null : a7.map((e6) => e6[t6]),
          multidimensionalDefinition: e5.multidimensionalDefinition.map((e6) => new p4(__spreadProps(__spreadValues({}, e6), {
            isSlice: true
          })))
        };
        return c8?.length && (i8.magdirValue = [c8[0][t6], c8[1][t6]]), i8;
      }),
      pyramidLevel: r6
    };
  }
};
function X(e4, t5, i7) {
  return Math.abs(e4.x - t5.x) < i7 && Math.abs(e4.y - t5.y) < i7;
}
e([y()], Q.prototype, "_rasterTileAlignmentInfo", void 0), e([y()], Q.prototype, "_tileFetchQueue", void 0), e([y({
  readOnly: true
})], Q.prototype, "_isGlobalWrappableSource", null), e([y({
  readOnly: true
})], Q.prototype, "_hasNoneOrGCSShiftTransform", null), e([y()], Q.prototype, "rasterJobHandler", null), e([y({
  readOnly: true
})], Q.prototype, "rasterId", null), e([y(p)], Q.prototype, "url", null), e([y({
  type: String,
  json: {
    write: true
  }
})], Q.prototype, "datasetName", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], Q.prototype, "datasetFormat", void 0), e([y()], Q.prototype, "hasUniqueSourceStorageInfo", void 0), e([y()], Q.prototype, "rasterInfo", void 0), e([y()], Q.prototype, "ioConfig", void 0), e([y()], Q.prototype, "sourceJSON", void 0), Q = e([a2("esri.layers.support.rasterDatasets.BaseRaster")], Q);
var K = Q;

// ../../../node_modules/@arcgis/core/layers/support/rasterFunctions/clipUtils.js
function n6(e4, i7) {
  if (e4.spatialReference.equals(i7)) return e4;
  const n9 = W(e4.spatialReference), a7 = W(i7);
  if (n9 === a7) return e4;
  const h9 = n9 / a7;
  return {
    x: e4.x * h9,
    y: e4.y * h9
  };
}
function a6(t5, e4, n9) {
  return __async(this, null, function* () {
    if ("extent" === n9.type) return o4(t5, e4, n9);
    const {
      width: a7,
      height: x4
    } = t5, l8 = new Uint8Array(a7 * x4), {
      contains: m9,
      intersects: s5
    } = yield import("./geometryEngine-QYJS33R6.js");
    return s5(e4, n9) ? "polyline" === n9.type ? r3(t5, e4, n9) : m9(n9, e4) ? t5 : h5(t5, e4, n9) : new g2({
      pixelType: t5.pixelType,
      width: a7,
      height: x4,
      mask: l8,
      maskIsAlpha: false,
      pixels: [...t5.pixels]
    });
  });
}
function h5(t5, e4, n9) {
  if (!t5) return t5;
  const {
    width: a7,
    height: h9
  } = t5, o7 = e4.width / a7, r6 = e4.height / h9, {
    xmin: x4,
    ymax: l8
  } = e4;
  let m9;
  if ("extent" === n9.type) {
    const t6 = (n9.xmin - x4) / o7, e5 = (n9.xmax - x4) / o7, i7 = (l8 - n9.ymax) / r6, a8 = (l8 - n9.ymin) / r6;
    m9 = [[[t6, i7], [t6, a8], [e5, a8], [e5, i7], [t6, i7]]];
  } else m9 = n9.rings.map((t6) => t6.map(([t7, e5]) => [(t7 - x4) / o7, (l8 - e5) / r6]));
  const s5 = document.createElement("canvas");
  s5.width = a7, s5.height = h9;
  const p8 = s5.getContext("2d");
  p8.fillStyle = "#f00", p8.beginPath(), m9.forEach((t6) => {
    p8.moveTo(t6[0][0], t6[0][1]);
    for (let e5 = 0; e5 < t6.length; e5++) p8.lineTo(t6[e5][0], t6[e5][1]);
    p8.closePath();
  }), p8.fill();
  const f11 = p8.getImageData(0, 0, a7, h9).data, y7 = t5.mask, c8 = a7 * h9, M2 = new Uint8Array(c8);
  for (let i7 = 0; i7 < c8; i7++) y7 && !y7[i7] || (M2[i7] = f11[4 * i7 + 3] > 127 ? 255 : 0);
  return new g2({
    pixelType: t5.pixelType,
    width: a7,
    height: h9,
    mask: M2,
    maskIsAlpha: false,
    pixels: [...t5.pixels]
  });
}
function o4(t5, e4, n9) {
  const {
    width: a7,
    height: h9
  } = t5, o7 = new Uint8Array(a7 * h9), r6 = e4.width / a7, x4 = e4.height / h9;
  if (n9.width / r6 < 0.5 || n9.height / x4 < 0.5) return new g2({
    pixelType: t5.pixelType,
    width: a7,
    height: h9,
    mask: o7,
    pixels: [...t5.pixels]
  });
  const {
    xmin: l8,
    xmax: m9,
    ymin: s5,
    ymax: p8
  } = e4, {
    xmin: f11,
    xmax: y7,
    ymin: c8,
    ymax: M2
  } = n9, u10 = Math.max(l8, f11), w3 = Math.min(m9, y7), d8 = Math.max(s5, c8), g7 = Math.min(p8, M2), T3 = 0.5 * r6, k4 = 0.5 * x4;
  if (w3 - u10 < T3 || g7 - d8 < k4 || w3 < l8 + T3 || u10 > m9 - T3 || d8 > p8 - k4 || g7 < s5 + k4) return new g2({
    pixelType: t5.pixelType,
    width: a7,
    height: h9,
    mask: o7,
    pixels: [...t5.pixels]
  });
  const A2 = Math.max(0, (u10 - l8) / r6), R4 = Math.min(a7, Math.max(0, (w3 - l8) / r6)), U7 = Math.max(0, (p8 - g7) / x4), j6 = Math.min(h9, Math.max(0, (p8 - d8) / x4)), E3 = Math.round(A2), I4 = Math.round(R4) - 1, P3 = Math.round(U7), v4 = Math.round(j6) - 1;
  if (E3 === I4 && A2 % 1 > 0.5 && R4 % 1 < 0.5 || P3 === v4 && U7 % 1 > 0.5 && j6 % 1 < 0.5) return new g2({
    pixelType: t5.pixelType,
    width: a7,
    height: h9,
    mask: o7,
    pixels: [...t5.pixels]
  });
  if (0 === E3 && 0 === P3 && I4 === a7 && v4 === h9) return t5;
  const b3 = t5.mask;
  for (let i7 = P3; i7 <= v4; i7++) for (let t6 = E3; t6 <= I4; t6++) {
    const e5 = i7 * a7 + t6;
    o7[e5] = b3 ? b3[e5] : 255;
  }
  return new g2({
    pixelType: t5.pixelType,
    width: a7,
    height: h9,
    mask: o7,
    pixels: [...t5.pixels]
  });
}
function r3(t5, e4, n9) {
  const {
    width: a7,
    height: h9
  } = t5, o7 = new Uint8Array(a7 * h9), r6 = e4.width / a7, x4 = e4.height / h9, {
    xmin: l8,
    ymax: m9
  } = e4, {
    paths: s5
  } = n9, p8 = t5.mask;
  for (let i7 = 0; i7 < s5.length; i7++) {
    const t6 = s5[i7];
    for (let e5 = 0; e5 < t6.length - 1; e5++) {
      const [i8, n10] = t6[e5], [s6, f11] = t6[e5 + 1];
      let y7 = Math.floor((m9 - n10) / x4), c8 = Math.floor((m9 - f11) / x4);
      if (c8 < y7) {
        const t7 = y7;
        y7 = c8, c8 = t7;
      }
      y7 = Math.max(0, y7), c8 = Math.min(h9 - 1, c8);
      const M2 = (s6 - i8) / (f11 - n10);
      for (let t7 = y7; t7 <= c8; t7++) {
        const e6 = t7 === y7 ? Math.max(n10, f11) : (h9 + 1 - t7) * x4, m10 = t7 === c8 ? Math.min(n10, f11) : e6 - x4;
        let u10 = f11 === n10 ? Math.floor((i8 - l8) / r6) : Math.floor((M2 * (e6 - n10) + i8 - l8) / r6), w3 = f11 === n10 ? Math.floor((s6 - l8) / r6) : Math.floor((M2 * (m10 - n10) + i8 - l8) / r6);
        if (w3 < u10) {
          const t8 = u10;
          u10 = w3, w3 = t8;
        }
        const d8 = t7 * a7;
        u10 = Math.max(0, u10), w3 = Math.min(a7 - 1, w3);
        for (let t8 = d8 + u10; t8 <= d8 + w3; t8++) o7[t8] = p8 ? p8[t8] : 255;
      }
    }
  }
  return new g2({
    pixelType: t5.pixelType,
    width: a7,
    height: h9,
    mask: o7,
    pixels: [...t5.pixels]
  });
}
function x2(t5, i7, a7, h9 = true) {
  const {
    spatialReference: o7
  } = t5, {
    x: r6,
    y: x4
  } = n6(a7, o7);
  let l8, m9, s5;
  const p8 = "extent" === i7.type ? i7 : i7.extent;
  let {
    xmin: f11,
    xmax: y7,
    ymax: c8,
    ymin: M2
  } = p8;
  const {
    xmin: u10,
    ymax: w3
  } = t5.extent;
  return h9 ? (f11 = u10 + (f11 > u10 ? r6 * Math.round((f11 - u10) / r6) : 0), c8 = w3 - (c8 < w3 ? x4 * Math.round((w3 - c8) / x4) : 0), y7 = u10 + (y7 > u10 ? r6 * Math.round((y7 - u10) / r6) : 0), M2 = w3 - (M2 < w3 ? x4 * Math.round((w3 - M2) / x4) : 0), l8 = new w({
    xmin: f11,
    ymax: c8,
    xmax: y7,
    ymin: M2,
    spatialReference: o7
  }), m9 = Math.round(l8.width / r6), s5 = Math.round(l8.height / x4)) : (m9 = Math.floor((y7 - f11) / r6 + 0.8), s5 = Math.floor((c8 - M2) / x4 + 0.8), f11 = u10 + (f11 > u10 ? r6 * Math.floor((f11 - u10) / r6 + 0.1) : 0), c8 = w3 - (c8 < w3 ? x4 * Math.floor((w3 - c8) / x4 + 0.1) : 0), y7 = f11 + m9 * r6, M2 = c8 - s5 * x4, l8 = new w({
    xmin: f11,
    ymax: c8,
    xmax: y7,
    ymin: M2,
    spatialReference: o7
  })), {
    extent: l8,
    width: m9,
    height: s5
  };
}

// ../../../node_modules/@arcgis/core/layers/support/rasterDatasets/FunctionRaster.js
var p5 = 40;
var m5 = class extends K {
  constructor() {
    super(...arguments), this.datasetFormat = "Function", this.tileType = "Raster", this.rasterFunction = null, this._clippingGeometry = /* @__PURE__ */ new Map();
  }
  open(t5) {
    return __async(this, null, function* () {
      yield this.init();
      const {
        rasterFunction: r6
      } = this;
      this.primaryRasters?.rasters?.length ? r6.sourceRasters = this.primaryRasters.rasters : (this.primaryRasters = r6.getPrimaryRasters(), this.rasterJobHandler && this.primaryRasters.rasters?.forEach((t6) => t6.rasterJobHandler = this.rasterJobHandler));
      const {
        rasters: s5,
        rasterIds: i7
      } = this.primaryRasters, o7 = s5.map((e4) => e4.rasterInfo ? void 0 : e4.open(t5));
      yield Promise.all(o7);
      const n9 = s5.map(({
        rasterInfo: t6
      }) => t6), a7 = r6.bind({
        rasterInfos: n9,
        rasterIds: i7
      });
      if (r6.rawSourceRasterInfos = n9, !a7.success || 0 === n9.length) throw new s("raster-function:open", `cannot bind the function: ${a7.error ?? ""}`);
      const l8 = "Table" === r6.functionName ? r6 : r6.functionArguments?.raster;
      "Table" === l8?.functionName && (r6.rasterInfo.attributeTable = d2.fromJSON(l8.functionArguments.attributeTableAsRecordSet)), yield this.syncJobHandler();
      const p8 = n9[0];
      this.hasUniqueSourceStorageInfo = 1 === n9.length || n9.slice(1).every((t6) => h6(t6, p8)), this.set("sourceJSON", s5[0].sourceJSON), this.set("rasterInfo", r6.rasterInfo), yield this._updateClipGeometry();
    });
  }
  syncJobHandler() {
    return __async(this, null, function* () {
      return this.rasterJobHandler?.updateRasterFunction(this.rasterFunction);
    });
  }
  fetchPixels(_0, _1, _22) {
    return __async(this, arguments, function* (t5, e4, r6, s5 = {}) {
      const {
        rasters: i7,
        rasterIds: o7
      } = this.primaryRasters;
      let l8 = false;
      const {
        interpolation: c8
      } = s5, p8 = this.rasterFunction.flatWebGLFunctionChain?.hasFocalFunction;
      !s5.requestRawData && p8 && (l8 = 1 === i7.length && !s5.skipRasterFunction, s5 = __spreadProps(__spreadValues({}, s5), {
        interpolation: "bilinear",
        requestRawData: l8
      }));
      const m9 = i7.map((i8) => i8.fetchPixels(t5, e4, r6, s5)), u10 = yield Promise.all(m9), h9 = u10.map((t6) => t6.pixelBlock), f11 = l8 || s5.requestRawData ? u10.map((t6) => t6.srcTilePixelSize) : null;
      if (s5.skipRasterFunction || h9.every((t6) => null == t6)) return u10[0];
      const d8 = u10.find((t6) => null != t6.pixelBlock)?.extent ?? t5;
      let y7 = this.rasterJobHandler ? yield this.rasterJobHandler.process({
        extent: d8,
        primaryPixelBlocks: h9,
        primaryPixelSizes: f11,
        primaryRasterIds: o7
      }) : this.rasterFunction.process({
        extent: d8,
        primaryPixelBlocks: h9,
        primaryPixelSizes: f11,
        primaryRasterIds: o7
      });
      const {
        transformGrid: g7
      } = u10[0];
      if (!l8 || null == y7 || null == g7) {
        const t6 = s5.noClip ? null : this.getClippingGeometry(d8.spatialReference);
        return s5.noClip || s5.requestRawData || null == y7 || !t6 || (y7 = yield a6(y7, d8, t6)), __spreadProps(__spreadValues({}, u10[0]), {
          pixelBlock: y7
        });
      }
      const x4 = {
        rows: g7.spacing[0],
        cols: g7.spacing[1]
      };
      let R4;
      if (this.rasterJobHandler) {
        R4 = (yield this.rasterJobHandler.mosaicAndTransform({
          srcPixelBlocks: [y7],
          srcMosaicSize: {
            width: y7.width,
            height: y7.height
          },
          destDimension: {
            width: e4,
            height: r6
          },
          coefs: g7.coefficients,
          sampleSpacing: x4,
          projectDirections: false,
          gcsGrid: null,
          isUV: false,
          interpolation: c8,
          alignmentInfo: void 0,
          blockWidths: null
        }, s5)).pixelBlock;
      } else R4 = D2(y7, {
        width: e4,
        height: r6
      }, g7.coefficients, x4, c8);
      const w3 = s5.noClip ? null : this.getClippingGeometry(t5.spatialReference);
      return s5.noClip || s5.requestRawData || null == R4 || null == w3 || (R4 = yield a6(R4, t5, w3)), {
        extent: t5,
        srcExtent: u10[0].srcExtent,
        pixelBlock: R4
      };
    });
  }
  getClippingGeometry(t5) {
    const e4 = this._clippingGeometry.get("0");
    if (!t5 || !e4) return e4;
    const r6 = f8(t5);
    let s5 = this._clippingGeometry.get(r6);
    return null != s5 || (s5 = t5.equals(e4.spatialReference) ? e4 : U4(e4, t5), this._clippingGeometry.set(r6, s5)), s5;
  }
  _updateClipGeometry() {
    return __async(this, null, function* () {
      const t5 = this.rasterFunction.getClippingGeometries()[0];
      let e4 = t5?.clippingGeometry;
      if (e4 && "inside" === t5.clippingType) {
        const {
          extent: t6
        } = this.rasterInfo, {
          difference: r6,
          densify: s5
        } = yield import("./geometryEngine-QYJS33R6.js");
        let o7 = s5(j.fromExtent(t6), 2 * (t6.width + t6.height) / p5);
        o7 = U4(o7, e4.spatialReference), e4 = r6(o7, e4);
      }
      this._clippingGeometry.clear(), e4 && this._clippingGeometry.set("0", e4);
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], m5.prototype, "datasetFormat", void 0), e([y()], m5.prototype, "tileType", void 0), e([y()], m5.prototype, "rasterFunction", void 0), e([y()], m5.prototype, "primaryRasters", void 0), m5 = e([a2("esri.layers.support.rasterDatasets.FunctionRaster")], m5);
var u5 = m5;
function h6(t5, e4) {
  const {
    storageInfo: r6,
    pixelSize: s5,
    spatialReference: i7,
    extent: o7
  } = t5, {
    storageInfo: n9,
    pixelSize: a7,
    spatialReference: l8,
    extent: c8
  } = e4;
  return s5.x === a7.x && s5.y === a7.y && i7.equals(l8) && o7.equals(c8) && r6.blockHeight === n9.blockHeight && r6.blockWidth === n9.blockWidth && r6.maximumPyramidLevel === n9.maximumPyramidLevel;
}
function f8(t5) {
  return String(t5.wkid ?? t5.wkt ?? t5.wkt2);
}

// ../../../node_modules/@arcgis/core/layers/mixins/ImageryTileMixin.js
var V3 = (V4) => {
  let $3 = class extends V4 {
    constructor(...e4) {
      super(...e4), this._isConstructedFromFunctionRaster = false, this._rasterJobHandler = {
        instance: null,
        refCount: 0,
        connectionPromise: null
      }, this.bandIds = null, this.copyright = null, this.interpolation = "nearest", this.multidimensionalSubset = null, this.raster = null, this.serviceRasterInfo = null, this.sourceJSON = null, this.spatialReference = null, this.symbolizer = null, this._isConstructedFromFunctionRaster = "Function" === e4[0]?.raster?.datasetFormat;
    }
    get fullExtent() {
      return this.serviceRasterInfo?.extent;
    }
    set multidimensionalDefinition(e4) {
      this._set("multidimensionalDefinition", e4), this.updateRenderer();
    }
    set rasterFunction(e4) {
      "none" === e4?.functionName?.toLowerCase() && (e4 = void 0), this._set("rasterFunction", e4), this.updateRasterFunction();
    }
    get rasterInfo() {
      return i(n.getLogger(this), "rasterInfo", {
        replacement: "serviceRasterInfo",
        version: "4.29",
        warnOnce: true
      }), this._get("serviceRasterInfo");
    }
    set url(e4) {
      this._set("url", y3(e4, n.getLogger(this)));
    }
    set renderer(e4) {
      null == e4 && null == this.rasterFunction ? this._configDefaultRenderer("override") : (this._set("renderer", e4), this.updateRenderer());
    }
    readRenderer(e4, t5, r6) {
      const s5 = t5?.layerDefinition?.drawingInfo?.renderer;
      return c3(s5, r6) || void 0;
    }
    convertVectorFieldData(e4, t5) {
      return __async(this, null, function* () {
        const {
          serviceRasterInfo: r6
        } = this;
        if (null == e4 || !r6) return null;
        const i7 = this._rasterJobHandler.instance, s5 = r6.dataType;
        return i7 ? i7.convertVectorFieldData({
          pixelBlock: e4,
          dataType: s5
        }, t5) : f5(e4, s5);
      });
    }
    computeStatisticsHistograms(e4, t5) {
      return __async(this, null, function* () {
        yield this.load(t5), e4 = g(h3, e4).clone();
        const {
          serviceRasterInfo: r6
        } = this;
        if (null == r6) throw new s("imagery-tile-mixin:compute-statistics-histograms", "serviceRasterInfo must be specified");
        const {
          geometry: i7
        } = e4;
        if (null == i7) throw new s("imagery-tile-mixin:compute-statistics-histograms", "geometry must be specified");
        let s5 = i7;
        const {
          spatialReference: n9
        } = r6;
        i7.spatialReference.equals(n9) || (yield T2(), s5 = "extent" === i7.type ? J(i7, n9) : U4(i7, n9));
        const a7 = e4.pixelSize ?? new _({
          x: r6.pixelSize.x,
          y: r6.pixelSize.y,
          spatialReference: n9
        }), {
          extent: l8,
          width: c8,
          height: m9
        } = x2(r6, s5, a7), d8 = yield this.fetchPixels(l8, c8, m9, __spreadProps(__spreadValues({}, t5), {
          interpolation: "nearest"
        }));
        if (null == d8.pixelBlock) throw new s("imagery-tile-mixin:compute-statistics-histograms", "failed to fetch pixels");
        const h9 = yield a6(d8.pixelBlock, l8, s5), p8 = this._rasterJobHandler.instance;
        return p8 ? p8.computeStatisticsHistograms({
          pixelBlock: h9
        }, t5) : m3(h9);
      });
    }
    createFlowMesh(e4, t5) {
      return __async(this, null, function* () {
        const r6 = this._rasterJobHandler.instance;
        return r6 ? r6.createFlowMesh(e4, t5) : s3(e4.meshType, e4.simulationSettings, e4.flowData, null != t5.signal ? t5.signal : new AbortController().signal);
      });
    }
    normalizeRasterFetchOptions(e4) {
      const {
        multidimensionalInfo: t5
      } = this.serviceRasterInfo ?? {};
      if (null == t5) return e4;
      let r6 = e4.multidimensionalDefinition || this.multidimensionalDefinition;
      r6?.length || (r6 = d4(this.raster.rasterInfo, {
        multidimensionalSubset: this.multidimensionalSubset
      }));
      const i7 = e4.timeExtent || this.timeExtent;
      if (null != r6 && null != i7 && (null != i7.start || null != i7.end)) {
        r6 = r6.map((e5) => e5.clone());
        const s5 = t5.variables.find(({
          name: e5
        }) => e5 === r6[0].variableName)?.dimensions?.find(({
          name: e5
        }) => "StdTime" === e5), n9 = r6.find(({
          dimensionName: e5
        }) => "StdTime" === e5);
        if (!s5 || !n9) return __spreadProps(__spreadValues({}, e4), {
          multidimensionalDefinition: null
        });
        const {
          start: o7,
          end: a7
        } = i7, l8 = null == o7 ? null : o7.getTime(), u10 = null == a7 ? null : a7.getTime(), c8 = l8 ?? u10, m9 = u10 ?? l8;
        if (null != s5.values) {
          const e5 = s5.values.filter((e6) => {
            if (Array.isArray(e6)) {
              if (c8 === m9) return e6[0] <= c8 && e6[1] >= c8;
              const t6 = e6[0] <= c8 && e6[1] > c8 || e6[0] < m9 && e6[1] >= m9, r7 = e6[0] >= c8 && e6[1] <= m9 || e6[0] < c8 && e6[1] > m9;
              return t6 || r7;
            }
            return c8 === m9 ? e6 === c8 : e6 >= c8 && e6 <= m9;
          });
          if (e5.length) {
            const t6 = e5.sort((e6, t7) => {
              const r7 = Array.isArray(e6) ? e6[0] : e6, i8 = Array.isArray(e6) ? e6[1] : e6, s6 = Array.isArray(t7) ? t7[0] : t7, n10 = Array.isArray(t7) ? t7[1] : t7;
              if (c8 === m9) return r7 - s6;
              return Math.abs(i8 - m9) - Math.abs(n10 - m9);
            })[0];
            n9.values = [t6];
          } else r6 = null;
        } else if (s5.hasRegularIntervals && s5.extent) {
          const [e5, t6] = s5.extent;
          c8 > t6 || m9 < e5 ? r6 = null : n9.values = c8 === m9 ? [c8] : [Math.max(e5, c8), Math.min(t6, m9)];
        }
      }
      return null != r6 && o3(r6, this.multidimensionalSubset) ? __spreadProps(__spreadValues({}, e4), {
        multidimensionalDefinition: null
      }) : __spreadProps(__spreadValues({}, e4), {
        multidimensionalDefinition: r6
      });
    }
    updateRasterFunction() {
      return __async(this, null, function* () {
        if (!this.loaded || "imagery-tile" !== this.type || !this.rasterFunction && !this._cachedRasterFunctionJson || JSON.stringify(this.rasterFunction) === JSON.stringify(this._cachedRasterFunctionJson)) return;
        if (this._isConstructedFromFunctionRaster && "Function" === this.raster.datasetFormat) {
          const e5 = this.raster.rasterFunction.toJSON();
          return !this.rasterFunction && e5 && this._set("rasterFunction", N3.fromJSON(e5)), void (this._cachedRasterFunctionJson = this.rasterFunction?.toJSON());
        }
        let e4, t5 = this.raster, r6 = false;
        "Function" === t5.datasetFormat ? (e4 = t5.primaryRasters.rasters, t5 = e4[0], r6 = true) : e4 = [t5];
        const {
          rasterFunction: i7
        } = this;
        if (i7) {
          const r7 = {
            raster: t5
          };
          e4.length > 1 && e4.forEach((e5) => r7[e5.url] = e5);
          const s6 = S2(i7.functionDefinition?.toJSON() ?? i7.toJSON(), r7), n10 = new u5({
            rasterFunction: s6
          });
          n10.rasterJobHandler = this._rasterJobHandler.instance, yield n10.open(), this._cachedRasterFunctionJson = this.rasterFunction?.toJSON(), this.raster = n10;
        } else this.raster = t5, this._cachedRasterFunctionJson = null, yield t5.when();
        if (this._cachedRendererJson = null, !r6 && !i7) return;
        const {
          bandIds: s5
        } = this, {
          bandCount: n9
        } = this.raster.rasterInfo, o7 = s5?.length ? s5.some((e5) => e5 >= n9) : n9 >= 3;
        s5 && (o7 || this.renderer && "raster-stretch" !== this.renderer.type) && this._set("bandIds", null), this._configDefaultRenderer("auto");
      });
    }
    updateRenderer() {
      return __async(this, null, function* () {
        const {
          loaded: e4,
          symbolizer: t5
        } = this;
        if (!e4 || !t5 || !this.renderer) return;
        const {
          rasterInfo: r6
        } = this.raster, i7 = f6(r6, {
          multidimensionalDefinition: this.multidimensionalDefinition,
          multidimensionalSubset: this.multidimensionalSubset
        }), s5 = i7?.name, n9 = $(__spreadProps(__spreadValues({}, this.renderer.toJSON()), {
          variableName: s5
        }));
        if (JSON.stringify(this._cachedRendererJson) === JSON.stringify(n9)) return;
        const o7 = this._rasterJobHandler.instance;
        o7 && (t5.rasterInfo = W3(r6, s5), t5.rendererJSON = n9, t5.bind(), yield o7.updateSymbolizer(t5), this._cachedRendererJson = n9);
      });
    }
    applyRenderer(e4, t5) {
      return __async(this, null, function* () {
        const r6 = e4?.pixelBlock;
        if (!(null != r6 && r6.pixels && r6.pixels.length > 0)) return null;
        let i7;
        yield this.updateRenderer();
        const s5 = this._rasterJobHandler.instance, n9 = this.bandIds ?? [];
        return i7 = s5 ? yield s5.symbolize(__spreadProps(__spreadValues({}, e4), {
          simpleStretchParams: t5,
          bandIds: n9
        })) : this.symbolizer.symbolize(__spreadProps(__spreadValues({}, e4), {
          simpleStretchParams: t5,
          bandIds: n9
        })), i7;
      });
    }
    getTileUrl(e4, t5, r6) {
      return "RasterTileServer" === this.raster.datasetFormat ? `${this.url}/tile/${e4}/${t5}/${r6}` : "";
    }
    getCompatibleTileInfo(e4, t5, r6 = false) {
      if (!this.loaded || null == t5) return null;
      if (r6 && e4.equals(this.spatialReference)) return this.tileInfo;
      const i7 = s2(e4);
      return z.create({
        size: 256,
        spatialReference: e4,
        origin: i7 ? {
          x: i7.origin[0],
          y: i7.origin[1]
        } : {
          x: t5.xmin,
          y: t5.ymax
        }
      });
    }
    getCompatibleFullExtent(e4) {
      return this.loaded ? (this._compatibleFullExtent?.spatialReference.equals(e4) || (this._compatibleFullExtent = this.raster.computeExtent(e4)), this._compatibleFullExtent) : null;
    }
    fetchTile(_0, _1, _22) {
      return __async(this, arguments, function* (e4, t5, r6, i7 = {}) {
        if (G(this), i7.requestAsImageElement) {
          const n10 = this.getTileUrl(e4, t5, r6);
          return U(n10, {
            responseType: "image",
            query: __spreadValues(__spreadValues({}, this.refreshParameters), this.raster.ioConfig.customFetchParameters),
            signal: i7.signal
          }).then((e5) => e5.data);
        }
        const {
          serviceRasterInfo: n9
        } = this;
        if (null != n9.multidimensionalInfo && null == (i7 = this.normalizeRasterFetchOptions(i7)).multidimensionalDefinition) {
          const s5 = i7.tileInfo || n9.storageInfo.tileInfo;
          return {
            extent: this.raster.getTileExtentFromTileInfo(e4, t5, r6, s5),
            pixelBlock: null
          };
        }
        return yield this._initJobHandler(), yield this.updateRasterFunction(), "raster-shaded-relief" === this.renderer?.type && (i7 = __spreadProps(__spreadValues({}, i7), {
          buffer: {
            cols: 1,
            rows: 1
          }
        })), this.raster.fetchTile(e4, t5, r6, i7);
      });
    }
    fetchPixels(_0, _1, _22) {
      return __async(this, arguments, function* (e4, t5, r6, i7 = {}) {
        return null != this.serviceRasterInfo.multidimensionalInfo && null == (i7 = this.normalizeRasterFetchOptions(i7)).multidimensionalDefinition ? {
          extent: e4,
          pixelBlock: null
        } : (yield this._initJobHandler(), yield this.updateRasterFunction(), t5 = Math.round(t5), r6 = Math.round(r6), this.raster.fetchPixels(e4, t5, r6, i7));
      });
    }
    identify(_0) {
      return __async(this, arguments, function* (e4, t5 = {}) {
        yield this.load();
        const {
          raster: r6,
          serviceRasterInfo: i7
        } = this;
        if (null != i7?.multidimensionalInfo) {
          if (!(i7.hasMultidimensionalTranspose && !!(h2(t5.multidimensionalDefinition) || t5.transposedVariableName || t5.timeExtent)) && null == (t5 = this.normalizeRasterFetchOptions(t5)).multidimensionalDefinition) return {
            location: e4,
            value: null
          };
        }
        const s5 = this.multidimensionalSubset?.areaOfInterest;
        if (s5 && !s5.contains(e4)) throw new s("imagery-tile-mixin:identify", "the request cannot be fulfilled when falling outside of the multidimensional subset");
        return r6.identify(e4, t5);
      });
    }
    increaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount++;
    }
    decreaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount--, this._rasterJobHandler.refCount <= 0 && this._shutdownJobHandler();
    }
    hasStandardTime() {
      const e4 = this.serviceRasterInfo?.multidimensionalInfo;
      if (null == e4 || "standard-time" !== this.serviceRasterInfo?.dataType) return false;
      const t5 = this.multidimensionalDefinition, r6 = t5?.[0]?.variableName;
      return e4.variables.some((e5) => e5.name === r6 && (!t5?.[0].dimensionName || e5.dimensions.some((e6) => "StdTime" === e6.name)));
    }
    getStandardTimeValue(e4) {
      return new Date(24 * (e4 - 25569) * 3600 * 1e3).toString();
    }
    getMultidimensionalSubsetVariables(e4) {
      const t5 = e4 ?? this.serviceRasterInfo?.multidimensionalInfo;
      return g4(this.multidimensionalSubset, t5);
    }
    _configDefaultSettings() {
      this._configDefaultInterpolation(), this.multidimensionalDefinition || (this.multidimensionalDefinition = d4(this.raster.rasterInfo, {
        multidimensionalSubset: this.multidimensionalSubset
      })), this.rasterFunction && "Function" === this.raster.datasetFormat && (this._cachedRasterFunctionJson = this.rasterFunction.toJSON()), this._configDefaultRenderer();
    }
    _initJobHandler() {
      if (null != this._rasterJobHandler.connectionPromise) return this._rasterJobHandler.connectionPromise;
      const e4 = new t2();
      return this._rasterJobHandler.connectionPromise = e4.initialize().then(() => __async(this, null, function* () {
        G(this), this._rasterJobHandler.instance = e4, this.raster.rasterJobHandler = e4, "Function" === this.raster.datasetFormat && this.raster.syncJobHandler(), this.rasterFunction && (yield this.updateRasterFunction().catch(() => {
        })), this.renderer && this.updateRenderer();
      })).catch(() => {
      }), this._rasterJobHandler.connectionPromise;
    }
    _shutdownJobHandler() {
      this._rasterJobHandler.instance && this._rasterJobHandler.instance.destroy(), this._rasterJobHandler.instance = null, this._rasterJobHandler.connectionPromise = null, this._rasterJobHandler.refCount = 0, this._cachedRendererJson = null, this.raster && (this.raster.rasterJobHandler = null);
    }
    _configDefaultInterpolation() {
      if (null == this.interpolation) {
        G(this);
        const {
          raster: e4
        } = this, t5 = q(e4.rasterInfo, e4.tileType, this.sourceJSON?.defaultResamplingMethod);
        this._set("interpolation", t5);
      }
    }
    _configDefaultRenderer(e4 = "no") {
      G(this);
      const {
        rasterInfo: t5
      } = this.raster;
      !this.bandIds && t5.bandCount > 1 && (this.bandIds = U5(t5));
      const r6 = f6(t5, {
        multidimensionalDefinition: this.multidimensionalDefinition,
        multidimensionalSubset: this.multidimensionalSubset
      }), i7 = r6?.name, s5 = E2(this.raster);
      if (!this.renderer || "override" === e4) {
        const e5 = L3(t5, {
          bandIds: this.bandIds,
          variableName: i7,
          rasterFunctionColorRamp: s5
        }), r7 = t5.statistics, n10 = r7 && r7.length > 0 ? r7[0] : null, o8 = n10?.max ?? 0, a7 = n10?.min ?? 0;
        "WCSServer" === this.raster.datasetFormat && "raster-stretch" === e5.type && (o8 > 1e24 || a7 < -1e24) && (e5.dynamicRangeAdjustment = true, e5.statistics = null, "none" === e5.stretchType && (e5.stretchType = "min-max")), this.renderer = e5;
      }
      const n9 = $(__spreadProps(__spreadValues({}, this.renderer.toJSON()), {
        variableName: i7
      })), o7 = W3(t5, i7);
      this.symbolizer ? (this.symbolizer.rendererJSON = n9, this.symbolizer.rasterInfo = o7) : this.symbolizer = new L2({
        rendererJSON: n9,
        rasterInfo: o7
      });
      const l8 = this.symbolizer.bind();
      if (l8.success) {
        if ("auto" === e4) {
          const {
            colormap: e5
          } = this.raster.rasterInfo, t6 = this.renderer;
          if (null != e5 && "raster-colormap" === t6.type) {
            const e6 = L3(this.raster.rasterInfo);
            JSON.stringify(e6) !== JSON.stringify(t6) && this._configDefaultRenderer("override");
          } else if ("raster-stretch" === t6.type) {
            const e6 = this.bandIds?.length, r7 = t6.statistics?.length;
            !t6.dynamicRangeAdjustment && r7 && e6 && r7 !== e6 && this._configDefaultRenderer("override");
          }
        }
      } else n.getLogger(this).warn("imagery-tile-mixin", l8.error || "The given renderer is not supported by the layer."), "auto" === e4 && this._configDefaultRenderer("override");
    }
  };
  function G(e4) {
    if (!e4.raster || !e4.serviceRasterInfo) throw new s("imagery-tile", "no raster");
  }
  return e([y({
    clonable: false
  })], $3.prototype, "_cachedRendererJson", void 0), e([y({
    clonable: false
  })], $3.prototype, "_cachedRasterFunctionJson", void 0), e([y({
    clonable: false
  })], $3.prototype, "_compatibleFullExtent", void 0), e([y({
    clonable: false
  })], $3.prototype, "_isConstructedFromFunctionRaster", void 0), e([y({
    clonable: false
  })], $3.prototype, "_rasterJobHandler", void 0), e([y()], $3.prototype, "bandIds", void 0), e([y({
    json: {
      origins: {
        service: {
          read: {
            source: "copyrightText"
          }
        }
      }
    }
  })], $3.prototype, "copyright", void 0), e([y({
    json: {
      read: false
    }
  })], $3.prototype, "fullExtent", null), e([y()], $3.prototype, "interpolation", void 0), e([y()], $3.prototype, "ioConfig", void 0), e([y({
    type: [p4],
    json: {
      write: true
    }
  })], $3.prototype, "multidimensionalDefinition", null), e([y({
    type: c4,
    json: {
      write: true
    }
  })], $3.prototype, "multidimensionalSubset", void 0), e([y()], $3.prototype, "raster", void 0), e([y({
    type: N3,
    json: {
      name: "renderingRule",
      write: true
    }
  })], $3.prototype, "rasterFunction", null), e([y({
    readOnly: true
  })], $3.prototype, "rasterInfo", null), e([y()], $3.prototype, "serviceRasterInfo", void 0), e([y()], $3.prototype, "sourceJSON", void 0), e([y({
    readOnly: true,
    type: f2,
    json: {
      read: false
    }
  })], $3.prototype, "spatialReference", void 0), e([y({
    type: z
  })], $3.prototype, "tileInfo", void 0), e([y(p)], $3.prototype, "url", null), e([y({
    types: l6,
    json: {
      name: "layerDefinition.drawingInfo.renderer",
      write: {
        overridePolicy() {
          const e4 = "raster-stretch" === this.renderer?.type && "none" === this.renderer.stretchType && !this.renderer.useGamma;
          return {
            enabled: !this.loaded || "Raster" === this.raster.tileType || !e4
          };
        }
      },
      origins: {
        "web-scene": {
          types: d3,
          name: "layerDefinition.drawingInfo.renderer",
          write: {
            overridePolicy: (e4) => ({
              enabled: e4 && "vector-field" !== e4.type && "flow" !== e4.type
            })
          }
        }
      }
    }
  })], $3.prototype, "renderer", null), e([o("renderer")], $3.prototype, "readRenderer", null), e([y({
    clonable: false
  })], $3.prototype, "symbolizer", void 0), $3 = e([a2("esri.layers.mixins.ImageryTileMixin")], $3), $3;
};

// ../../../node_modules/@arcgis/core/layers/support/rasterDatasets/covJSONParser.js
function i5(e4) {
  return ["x", "e", "east", "long", "longitude"].includes(e4.toLowerCase());
}
function r4(e4) {
  return ["y", "n", "west", "lat", "latitude"].includes(e4.toLowerCase());
}
function o5(e4) {
  const {
    axes: n9
  } = e4.domain, l8 = Object.keys(n9), s5 = [], o7 = [];
  let u10 = -1, m9 = -1, c8 = [];
  for (let t5 = 0; t5 < l8.length; t5++) {
    const e5 = l8[t5];
    i5(e5) ? u10 = t5 : r4(e5) && (m9 = t5);
    const a7 = n9[e5], d9 = [];
    if ("values" in a7) {
      a7.values.forEach((e7) => d9.push("string" == typeof e7 ? new Date(e7).getTime() : e7));
      const e6 = d9[1] - d9[0];
      s5.push([d9[0] - 0.5 * e6, d9[d9.length - 1] + 0.5 * e6]), o7.push(e6);
    } else {
      const {
        start: e6,
        stop: t6,
        num: n10
      } = a7, l9 = (t6 - e6) / (n10 - 1);
      s5.push([e6 - 0.5 * l9, t6 + 0.5 * l9]), o7.push(l9);
      for (let s6 = 0; s6 < n10; s6++) d9.push(e6 + l9 * s6);
    }
    c8.push({
      name: e5,
      values: d9,
      extent: [d9[0], d9[d9.length - 1]]
    });
  }
  u10 > -1 && -1 === m9 ? m9 = 0 === u10 ? 1 : 0 : m9 > -1 && -1 === u10 ? u10 = 0 === m9 ? 1 : 0 : -1 === m9 && -1 === u10 && (u10 = 0, m9 = 1), c8 = c8.filter((e5, t5) => !(t5 === u10 || t5 === m9));
  const {
    referencing: d8
  } = e4.domain, f11 = d8.find((e5) => e5.coordinates.includes(l8[u10])).system.id, p8 = f11?.slice(f11.lastIndexOf("/") + 1), h9 = null == p8 || "CRS84" === p8 ? 4326 : Number(p8), g7 = new f2({
    wkid: h9
  }), [b3, y7] = s5[u10], [x4, j6] = s5[m9], v4 = new w({
    xmin: b3,
    xmax: y7,
    ymin: x4,
    ymax: j6,
    spatialReference: g7
  });
  return {
    width: Math.round(v4.width / o7[u10]),
    height: Math.round(v4.height / o7[m9]),
    extent: v4,
    dimensions: c8
  };
}
function u6(e4) {
  const t5 = a3();
  return t5 ? e4[t5] ?? Object.values(e4)[0] : Object.values(e4)[0];
}
function m6() {
  return Math.round(255 * Math.random());
}
function c6(t5) {
  const n9 = {}, {
    parameters: l8
  } = t5;
  if (!l8) return n9;
  for (const [s5, a7] of Object.entries(l8)) {
    const {
      type: t6,
      description: l9,
      unit: i7,
      categoryEncoding: r6,
      observedProperty: o7
    } = a7;
    if ("Parameter" === t6 && (n9[s5] = {}, l9 && (n9[s5].description = u6(l9)), i7 && (n9[s5].unit = i7.label ? u6(i7.label) : null, n9[s5].symbol = i7.symbol?.value), r6)) {
      const t7 = Object.entries(r6).map((e4, t8) => ({
        OID: t8,
        Value: Number(e4[1]),
        ClassName: e4[0].slice(e4[0].lastIndexOf("/") + 1),
        Count: 1
      }));
      let l10 = false;
      o7?.categories?.length && (o7.categories.forEach((n10) => {
        if (!n10.id) return;
        const s6 = n10.id.slice(n10.id.lastIndexOf("/") + 1), a9 = t7.find((e4) => e4.ClassName === s6);
        if (!a9) return;
        const i8 = n10.label ? u6(n10.label) : null;
        if (a9.Label = i8, n10.preferredColor) {
          const t8 = u2.fromHex(n10.preferredColor);
          t8 && (l10 = true, a9.Red = t8.r, a9.Green = t8.g, a9.Blue = t8.b);
        }
      }), l10 && t7.forEach((e4) => {
        null == e4.Red && (e4.Red = m6(), e4.Green = m6(), e4.Blue = m6());
      }));
      const a8 = {
        objectIdFieldName: "",
        fields: [{
          name: "OID",
          type: "esriFieldTypeOID",
          alias: "OID",
          domain: null
        }, {
          name: "Value",
          type: "esriFieldTypeInteger",
          alias: "Value",
          domain: null
        }, {
          name: "Count",
          type: "esriFieldTypeDouble",
          alias: "Count",
          domain: null
        }, {
          name: "ClassName",
          type: "esriFieldTypeString",
          alias: "ClassName",
          domain: null,
          length: 50
        }, {
          name: "Label",
          type: "esriFieldTypeString",
          alias: "Label",
          domain: null,
          length: 50
        }],
        features: t7.map((e4) => ({
          attributes: e4
        }))
      };
      l10 && a8.fields.push({
        name: "Red",
        type: "esriFieldTypeInteger",
        alias: "Red",
        domain: null
      }, {
        name: "Green",
        type: "esriFieldTypeInteger",
        alias: "Green",
        domain: null
      }, {
        name: "Blue",
        type: "esriFieldTypeInteger",
        alias: "Blue",
        domain: null
      }), n9[s5].attributeTable = a8;
    }
  }
  return n9;
}
function d5(e4) {
  let t5 = Number.MAX_VALUE, n9 = -Number.MAX_VALUE;
  for (let l8 = 0; l8 < e4.length; l8++) {
    const s5 = e4[l8];
    null != s5 && (s5 < t5 && (t5 = s5), s5 > n9 && (n9 = s5));
  }
  return u3(t5, n9);
}
function f9(e4, t5, n9) {
  const l8 = e4.map((e5, n10) => ({
    name: e5,
    count: t5[n10]
  })).sort((e5, t6) => e5.name > t6.name ? -1 : 1), s5 = (a7 = 1, (e5) => a7 *= e5.count);
  var a7;
  const i7 = [...l8.slice(1), {
    name: "",
    count: 1
  }].reverse().map(s5).reverse();
  let r6 = 0;
  for (let o7 = e4.length - 1; o7 >= 0; o7--) {
    r6 += i7[l8.findIndex(({
      name: t6
    }) => t6 === e4[o7])] * (n9 % t5[o7]), n9 = Math.floor(n9 / t5[o7]);
  }
  return r6;
}
function p6(e4) {
  const {
    width: t5,
    height: n9,
    extent: s5,
    dimensions: a7
  } = o5(e4), {
    ranges: i7
  } = e4, r6 = Object.keys(i7).sort((e5, t6) => e5 < t6 ? -1 : 1), u10 = [];
  for (let l8 = 0; l8 < r6.length; l8++) {
    const e5 = r6[l8];
    a7?.length && u10.push({
      name: e5,
      dimensions: a7
    });
  }
  const m9 = c6(e4);
  u10.forEach((e5) => m9[e5.name] && Object.assign(e5, m9[e5.name]));
  const p8 = u10.length ? {
    variables: u10
  } : void 0, h9 = [];
  for (let o7 = 0; o7 < r6.length; o7++) {
    const e5 = r6[o7], {
      values: s6,
      dataType: u11,
      axisNames: m10,
      shape: c8
    } = i7[e5], p9 = c8.length > 2 ? o7 * c8.slice(0, -2).reduce((e6, t6) => e6 * t6) : 0, g8 = m10.slice(0, -2), b3 = c8.slice(0, -2), y7 = "float" === u11 ? "f32" : d5(s6), x4 = t5 * n9, j6 = s6.length / x4;
    for (let i8 = 0; i8 < j6; i8++) {
      const e6 = g2.createEmptyBand(y7, x4), r7 = new Uint8Array(x4).fill(255);
      let u12 = false;
      const m11 = i8 * x4;
      for (let t6 = 0; t6 < x4; t6++) {
        const n10 = s6[m11 + t6];
        null == n10 ? (r7[t6] = 0, u12 = true) : e6[t6] = n10;
      }
      if (0 === o7 || a7?.length) {
        const s7 = new g2({
          width: t5,
          height: n9,
          mask: u12 ? r7 : null,
          pixels: [e6],
          pixelType: y7
        });
        if (s7.updateStatistics(), a7?.length) {
          h9[f9(g8, b3, i8) + p9] = s7;
        } else h9.push(s7);
      } else {
        const t6 = h9[i8];
        t6.pixels.push(e6), u12 ? t6.mask && (t6.mask = g2.combineBandMasks([t6.mask, r7])) : t6.mask = u12 ? r7 : null;
      }
    }
  }
  const g7 = Object.values(m9).find((e5) => e5.attributeTable)?.attributeTable;
  return {
    extent: s5,
    pixelBlocks: h9,
    multidimensionalInfo: p8,
    attributeTable: g7,
    bandNames: p8 ? void 0 : r6
  };
}

// ../../../node_modules/@arcgis/core/layers/support/rasterDatasets/InMemoryRaster.js
var f10 = class extends K {
  constructor() {
    super(...arguments), this.datasetFormat = "MEMORY", this.source = null;
  }
  get url() {
    return "";
  }
  open(t5) {
    return __async(this, null, function* () {
      yield this.init();
      const e4 = this.source, {
        pixelBlocks: s5,
        attributeTable: i7,
        statistics: r6,
        histograms: o7,
        name: l8,
        nativeExtent: n9,
        transform: m9
      } = e4, c8 = s5[0], {
        width: p8,
        height: u10,
        pixelType: f11
      } = c8, g7 = e4.extent ?? new w({
        xmin: -0.5,
        ymin: 0.5,
        xmax: p8 - 0.5,
        ymax: u10 - 0.5,
        spatialReference: new f2({
          wkid: 3857
        })
      }), x4 = e4.isPseudoSpatialReference ?? !e4.extent, y7 = {
        x: g7.width / p8,
        y: g7.height / u10
      }, b3 = __spreadValues({}, e4.keyProperties);
      i7 && (b3.DataType = "Thematic");
      const v4 = new m2({
        width: p8,
        height: u10,
        pixelType: f11,
        extent: g7,
        nativeExtent: n9,
        attributeTable: i7,
        transform: m9,
        pixelSize: y7,
        spatialReference: g7.spatialReference,
        bandCount: c8.pixels.length,
        keyProperties: b3,
        multidimensionalInfo: e4.multidimensionalInfo,
        statistics: r6,
        isPseudoSpatialReference: x4,
        histograms: o7
      });
      this.ioConfig.skipMapInfo && this.updateImageSpaceRasterInfo(v4), this.createRemoteDatasetStorageInfo(v4, 512, 512), this._set("rasterInfo", v4), this.updateTileInfo(), v4.multidimensionalInfo ? yield this._buildMDimStats(e4.pixelBlocks, v4.multidimensionalInfo) : yield this._buildInMemoryRaster(c8, {
        width: 512,
        height: 512
      }, t5), v4.multidimensionalInfo || (this.source = null), this.datasetName = l8;
    });
  }
  fetchRawTile(t5, e4, s5, i7 = {}) {
    if (!this._pixelBlockTiles) {
      const {
        rasterInfo: r7
      } = this, [o7, a7] = r7.storageInfo.tileInfo.size, {
        sliceId: l8
      } = i7, {
        pixelBlocks: n9
      } = this.source, c8 = {
        pixelBlock: null == l8 ? n9[0] : n9[l8],
        useBilinear: "thematic" !== r7.dataType,
        tileSize: {
          width: o7,
          height: a7
        },
        level: t5,
        row: e4,
        col: s5
      }, p8 = this.rasterJobHandler ? this.rasterJobHandler.clipTile(c8, i7) : E(c8);
      return Promise.resolve(p8);
    }
    const r6 = this._pixelBlockTiles.get(`${t5}/${e4}/${s5}`);
    return Promise.resolve(r6);
  }
  _buildInMemoryRaster(t5, i7, r6) {
    return __async(this, null, function* () {
      const {
        rasterInfo: o7
      } = this, a7 = o7.storageInfo.maximumPyramidLevel ?? 0, l8 = "thematic" !== o7.dataType, n9 = this.rasterJobHandler ? this.rasterJobHandler.split({
        pixelBlock: t5,
        tileSize: i7,
        maximumPyramidLevel: a7,
        useBilinear: l8
      }, r6) : Promise.resolve(W2(t5, i7, a7, l8)), m9 = null != o7.statistics, u10 = null != o7.histograms, h9 = this.ioConfig.skipStatistics || m9 ? Promise.resolve({
        statistics: null,
        histograms: null
      }) : this.rasterJobHandler ? this.rasterJobHandler.estimateStatisticsHistograms({
        pixelBlock: t5
      }, r6) : Promise.resolve(h(t5)), d8 = yield v([n9, h9]);
      if (!d8[0].value && d8[1].value) throw new s("inmemory-raster:open", "failed to build in memory raster");
      this._pixelBlockTiles = d8[0].value, m9 || (o7.statistics = d8[1].value?.statistics), u10 || (o7.histograms = d8[1].value?.histograms);
    });
  }
  _buildMDimStats(t5, e4, s5) {
    return __async(this, null, function* () {
      for (let i7 = 0; i7 < e4.variables.length; i7++) {
        const r6 = e4.variables[i7];
        if (r6.statistics) continue;
        const a7 = r6.dimensions.map((t6) => new p4({
          variableName: r6.name,
          dimensionName: t6.name,
          values: [t6.values?.[0] ?? t6.extent?.[0]],
          isSlice: true
        })), l8 = D4(a7, e4), m9 = null == l8 ? null : t5[l8];
        if (null == m9) continue;
        const c8 = this.rasterJobHandler ? yield this.rasterJobHandler.computeStatisticsHistograms({
          pixelBlock: m9
        }, s5) : m3(m9);
        r6.statistics = c8.statistics, r6.histograms || (r6.histograms = c8.histograms);
      }
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], f10.prototype, "datasetFormat", void 0), e([y()], f10.prototype, "source", void 0), e([y()], f10.prototype, "url", null), f10 = e([a2("esri.layers.support.rasterDatasets.InMemoryRaster")], f10);
var g5 = f10;

// ../../../node_modules/@arcgis/core/layers/support/rasterDatasets/CovJSONRaster.js
var m7 = class extends K {
  constructor() {
    super(...arguments), this.datasetFormat = "CovJSON";
  }
  open(e4) {
    return __async(this, null, function* () {
      yield this.init();
      const {
        extent: t5,
        pixelBlocks: r6,
        multidimensionalInfo: s5,
        attributeTable: a7,
        bandNames: o7
      } = yield this._fetchData(e4), {
        statistics: i7,
        histograms: n9
      } = m3(r6[0]), m9 = o7?.map((e5) => ({
        BandName: e5
      })), h9 = {
        DataType: a7 ? "Thematic" : s5 ? "Scientific" : "Generic",
        BandProperties: m9
      }, d8 = new g5({
        source: {
          extent: t5,
          pixelBlocks: r6,
          attributeTable: a7 ? d2.fromJSON(a7) : null,
          multidimensionalInfo: s5,
          statistics: i7,
          histograms: n9,
          keyProperties: h9,
          isPseudoSpatialReference: false
        }
      });
      yield d8.open(), this._inMemoryRaster = d8;
      const u10 = this.source ? "" : this.url.slice(this.url.lastIndexOf("/") + 1);
      this._set("datasetName", u10.slice(0, u10.indexOf("."))), this._set("rasterInfo", d8.rasterInfo);
    });
  }
  fetchRawTile(e4, t5, r6, s5 = {}) {
    return this._inMemoryRaster.fetchRawTile(e4, t5, r6, s5);
  }
  _fetchData(e4) {
    return __async(this, null, function* () {
      const r6 = this.source ?? (yield this.request(this.url, {
        signal: e4?.signal
      })).data, s5 = "imagery-tile-layer:open-coverage-json";
      if ("coverage" !== r6.type?.toLowerCase() || "grid" !== r6.domain?.domainType?.toLowerCase()) throw new s(s5, "Only coverage with Grid domain type is supported");
      if (!r6.ranges) throw new s(s5, "Missing ranges in the grid coverage data");
      if (!r6.domain.referencing?.length) throw new s(s5, "Missing domain referencing in the grid coverage data");
      const a7 = Object.values(r6.ranges);
      for (let n9 = 0; n9 < a7.length; n9++) {
        const {
          axisNames: e5,
          shape: r7,
          type: c8,
          values: l8
        } = a7[n9];
        if (!("ndarray" === c8.toLowerCase() && l8?.length && e5?.length && r7?.length)) throw new s(s5, "Only ranges with valid NdArray, axisNames, shape, and inline values are supported");
        if (!(i5(e5[e5.length - 1]) && r4(e5[e5.length - 2]))) throw new s(s5, "Only row-major ordered pixel values are supported. X axis must be the last axis.");
      }
      return p6(r6);
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], m7.prototype, "datasetFormat", void 0), e([y({
  constructOnly: true
})], m7.prototype, "source", void 0), m7 = e([a2("esri.layers.support.rasterDatasets.CovJSONRaster")], m7);
var h7 = m7;

// ../../../node_modules/@arcgis/core/layers/support/rasterDatasets/xmlUtilities.js
function n7(e4, t5) {
  if (!e4 || !t5) return [];
  let l8 = t5;
  t5.includes("/") ? (l8 = t5.slice(0, t5.indexOf("/")), t5 = t5.slice(t5.indexOf("/") + 1)) : t5 = "";
  const r6 = [];
  if (t5) {
    const u11 = n7(e4, l8);
    for (let e5 = 0; e5 < u11.length; e5++) {
      n7(u11[e5], t5).forEach((n9) => r6.push(n9));
    }
    return r6;
  }
  const u10 = e4.getElementsByTagNameNS("*", l8);
  if (!u10 || 0 === u10.length) return [];
  for (let n9 = 0; n9 < u10.length; n9++) r6.push(u10[n9] || u10.item(n9));
  return r6;
}
function e3(t5, l8) {
  if (!t5 || !l8) return null;
  let r6 = l8;
  l8.includes("/") ? (r6 = l8.slice(0, l8.indexOf("/")), l8 = l8.slice(l8.indexOf("/") + 1)) : l8 = "";
  const u10 = n7(t5, r6);
  return u10.length > 0 ? l8 ? e3(u10[0], l8) : u10[0] : null;
}
function t3(n9, t5 = null) {
  const l8 = t5 ? e3(n9, t5) : n9;
  let r6;
  return l8 ? (r6 = l8.textContent || l8.nodeValue, r6 ? r6.trim() : null) : null;
}
function l7(e4, t5) {
  const l8 = n7(e4, t5), r6 = [];
  let u10;
  for (let n9 = 0; n9 < l8.length; n9++) u10 = l8[n9].textContent || l8[n9].nodeValue, u10 && (u10 = u10.trim(), "" !== u10 && r6.push(u10));
  return r6;
}
function u7(n9, e4) {
  return l7(n9, e4).map((n10) => Number(n10));
}
function o6(n9, e4) {
  const l8 = t3(n9, e4);
  return Number(l8);
}
function i6(n9, e4) {
  const t5 = n9?.nodeName?.toLowerCase(), l8 = e4.toLowerCase();
  return t5.slice(t5.lastIndexOf(":") + 1) === l8;
}

// ../../../node_modules/@arcgis/core/layers/support/rasterDatasets/pamParser.js
function u8(e4, t5) {
  if (!e4 || !t5) return null;
  const n9 = [];
  for (let r6 = 0; r6 < e4.length; r6++) n9.push(e4[r6]), n9.push(t5[r6]);
  return n9;
}
function c7(e4) {
  const t5 = e3(e4, "GeodataXform"), n9 = d6(o6(t5, "SpatialReference/WKID") || t3(t5, "SpatialReference/WKT"));
  if ("typens:PolynomialXform" !== t5.getAttribute("xsi:type")) return {
    spatialReference: n9,
    transform: null
  };
  const s5 = o6(t5, "PolynomialOrder") ?? 1, f11 = u7(t5, "CoeffX/Double"), c8 = u7(t5, "CoeffY/Double"), m9 = u7(t5, "InverseCoeffX/Double"), p8 = u7(t5, "InverseCoeffY/Double"), S5 = u8(f11, c8), C3 = u8(m9, p8);
  return {
    spatialReference: n9,
    transform: S5 && C3 && S5.length && C3.length ? new y5({
      spatialReference: n9,
      polynomialOrder: s5,
      forwardCoefficients: S5,
      inverseCoefficients: C3
    }) : null
  };
}
function m8(e4) {
  const t5 = o6(e4, "NoDataValue"), n9 = e3(e4, "Histograms/HistItem"), l8 = o6(n9, "HistMin"), o7 = o6(n9, "HistMax"), f11 = o6(n9, "BucketCount"), u10 = t3(n9, "HistCounts")?.split("|").map((e5) => Number(e5));
  let c8, m9, d8, p8;
  n7(e4, "Metadata/MDI").forEach((e5) => {
    const t6 = Number(e5.textContent ?? e5.nodeValue);
    switch (e5.getAttribute("key").toUpperCase()) {
      case "STATISTICS_MINIMUM":
        c8 = t6;
        break;
      case "STATISTICS_MAXIMUM":
        m9 = t6;
        break;
      case "STATISTICS_MEAN":
        d8 = t6;
        break;
      case "STATISTICS_STDDEV":
        p8 = t6;
    }
  });
  const S5 = o6(e4, "Metadata/SourceBandIndex");
  return {
    noDataValue: t5,
    histogram: u10?.length && null != l8 && null != o7 ? {
      min: l8,
      max: o7,
      size: f11 || u10.length,
      counts: u10
    } : null,
    sourceBandIndex: S5,
    statistics: null != c8 && null != m9 ? {
      min: c8,
      max: m9,
      avg: d8,
      stddev: p8
    } : null
  };
}
function d6(e4) {
  if (!e4) return null;
  let n9 = Number(e4);
  if (!isNaN(n9) && 0 !== n9) return new f2({
    wkid: n9
  });
  if (e4 = String(e4).trim(), c(e4)) return new f2({
    wkt2: e4
  });
  const r6 = e4.toUpperCase();
  if (r6.startsWith("COMPD_CS")) {
    if (!r6.includes("VERTCS") || !r6.includes("GEOGCS") && !r6.startsWith("PROJCS")) return null;
    const t5 = r6.indexOf("VERTCS"), s5 = r6.indexOf("PROJCS"), a7 = s5 > -1 ? s5 : r6.indexOf("GEOGCS");
    if (-1 === a7) return null;
    const i7 = e4.slice(a7, e4.lastIndexOf("]", t5) + 1).trim(), l8 = e4.slice(t5, e4.lastIndexOf("]")).trim();
    n9 = p7(i7);
    const o7 = new f2(n9 ? {
      wkid: n9
    } : {
      wkt: i7
    }), u10 = p7(l8);
    return u10 && (o7.vcsWkid = u10), o7;
  }
  return r6.startsWith("GEOGCS") || r6.startsWith("PROJCS") ? (n9 = p7(e4), new f2(0 !== n9 ? {
    wkid: n9
  } : {
    wkt: e4
  })) : null;
}
function p7(e4) {
  const t5 = e4.replaceAll("]", "[").replaceAll('"', "").split("[").map((e5) => e5.trim()).filter((e5) => "" !== e5), n9 = t5[t5.length - 1].split(","), r6 = n9[0]?.toLowerCase();
  if (("epsg" === r6 || "esri" === r6) && e4.endsWith('"]]')) {
    const e5 = Number(n9[1]);
    if (!isNaN(e5) && 0 !== e5) return e5;
  }
  return 0;
}
function S3(t5) {
  if ("pamdataset" !== t5?.documentElement.tagName?.toLowerCase()) return {};
  const a7 = {
    spatialReference: null,
    transform: null,
    metadata: {},
    rasterBands: [],
    statistics: null,
    histograms: null
  };
  t5.documentElement.childNodes.forEach((e4) => {
    if (1 === e4.nodeType) {
      if (i6(e4, "SRS")) {
        if (!a7.spatialReference) {
          const t6 = t3(e4);
          a7.spatialReference = d6(t6);
        }
      } else if (i6(e4, "Metadata")) {
        if ("xml:ESRI" === e4.getAttribute("domain")) {
          const {
            spatialReference: t6,
            transform: n9
          } = c7(e4);
          a7.transform = n9, a7.spatialReference || (a7.spatialReference = t6);
        } else {
          n7(e4, "MDI").forEach((e5) => a7.metadata[e5.getAttribute("key")] = t3(e5));
        }
      } else if (i6(e4, "PAMRasterBand")) {
        const t6 = m8(e4);
        null != t6.sourceBandIndex && null == a7.rasterBands[t6.sourceBandIndex] ? a7.rasterBands[t6.sourceBandIndex] = t6 : a7.rasterBands.push(t6);
      }
    }
  });
  const i7 = a7.rasterBands;
  if (i7.length) {
    const t6 = !!i7[0].statistics;
    a7.statistics = t6 ? i7.map((e4) => e4.statistics).filter(O) : null;
    const n9 = !!i7[0].histogram;
    a7.histograms = n9 ? i7.map((e4) => e4.histogram).filter(O) : null;
  }
  return a7;
}

// ../../../node_modules/@arcgis/core/layers/support/rasterDatasets/ImageAuxRaster.js
var h8 = class extends K {
  open(t5) {
    return __async(this, null, function* () {
      yield this.init();
      const s5 = yield this._fetchData(t5);
      let {
        spatialReference: e4,
        statistics: r6,
        histograms: a7,
        transform: o7
      } = yield this._fetchAuxiliaryData(t5);
      const i7 = !e4;
      i7 && (e4 = new f2({
        wkid: 3857
      })), a7?.length && null == r6 && (r6 = g3(a7));
      const {
        width: m9,
        height: l8
      } = s5;
      let c8 = new w({
        xmin: -0.5,
        ymin: 0.5 - l8,
        xmax: m9 - 0.5,
        ymax: 0.5,
        spatialReference: e4
      });
      const h9 = o7 ? o7.forwardTransform(c8) : c8;
      let d8 = true;
      if (o7) {
        const t6 = o7.forwardCoefficients;
        d8 = t6 && 0 === t6[1] && 0 === t6[2], d8 && (o7 = null, c8 = h9);
      }
      const w3 = new g5({
        source: {
          extent: h9,
          nativeExtent: c8,
          transform: o7,
          pixelBlocks: [s5],
          statistics: r6,
          histograms: a7,
          keyProperties: {
            DateType: "Processed"
          },
          isPseudoSpatialReference: i7
        },
        ioConfig: {
          sampling: "closest",
          skipStatistics: true
        }
      });
      this.ioConfig.skipMapInfo && (w3.ioConfig.skipMapInfo = true), yield w3.open(), w3.source = null, this._set("rasterInfo", w3.rasterInfo), this._inMemoryRaster = w3;
    });
  }
  fetchRawTile(t5, s5, e4, r6 = {}) {
    return this._inMemoryRaster.fetchRawTile(t5, s5, e4, r6);
  }
  _fetchData(t5) {
    return __async(this, null, function* () {
      const {
        data: e4
      } = yield this.request(this.url, {
        responseType: "array-buffer",
        signal: t5?.signal
      }), r6 = P(e4).toUpperCase();
      if ("JPG" !== r6 && "PNG" !== r6 && "GIF" !== r6 && "BMP" !== r6) throw new s("image-aux-raster:open", "the data is not a supported format");
      this._set("datasetFormat", r6);
      const a7 = r6.toLowerCase(), o7 = "gif" === a7 || "bmp" === a7 || !has("ios"), i7 = yield this.decodePixelBlock(e4, {
        format: a7,
        useCanvas: o7,
        hasNoZlibMask: true
      });
      if (null == i7) throw new s("image-aux-raster:open", "the data cannot be decoded");
      return i7;
    });
  }
  _fetchAuxiliaryData(t5) {
    return __async(this, null, function* () {
      const s5 = t5?.signal, {
        skipExtensions: a7 = [],
        skipMapInfo: o7
      } = this.ioConfig, i7 = o7 || a7.includes("aux.xml") ? null : this.request(this.url + ".aux.xml", {
        responseType: "xml",
        signal: s5
      }), n9 = this.datasetFormat, l8 = "JPG" === n9 ? "jgw" : "PNG" === n9 ? "pgw" : "BMP" === n9 ? "bpw" : null, p8 = l8 && a7.includes(l8) ? null : this.request(this.url.slice(0, this.url.lastIndexOf(".")) + "." + l8, {
        responseType: "text",
        signal: s5
      }), f11 = yield v([i7, p8]);
      if (s5?.aborted) throw u();
      const u10 = S3(f11[0].value?.data);
      if (!u10.transform) {
        const t6 = f11[1].value ? f11[1].value.data.split("\n").slice(0, 6).map((t7) => Number(t7)) : null;
        u10.transform = 6 === t6?.length ? new y5({
          forwardCoefficients: [t6[4], t6[5], t6[0], -t6[1], t6[2], -t6[3]]
        }) : null;
      }
      return u10;
    });
  }
};
e([y({
  type: String,
  json: {
    write: true
  }
})], h8.prototype, "datasetFormat", void 0), h8 = e([a2("esri.layers.support.rasterDatasets.ImageAuxRaster")], h8);
var d7 = h8;

// ../../../node_modules/@arcgis/core/layers/support/rasterDatasets/ImageServerRaster.js
var g6 = class extends K {
  constructor() {
    super(...arguments), this._levelOffset = 0, this._tilemapCache = null, this._slices = null, this.datasetFormat = "RasterTileServer", this.tileType = null;
  }
  open(e4) {
    return __async(this, null, function* () {
      yield this.init();
      const r6 = e4?.signal, a7 = this.sourceJSON ? {
        data: this.sourceJSON
      } : yield this.request(this.url, {
        query: {
          f: "json"
        },
        signal: r6
      });
      a7.ssl && (this.url = this.url.replace(/^http:/i, "https:"));
      const l8 = a7.data;
      if (this.sourceJSON = l8, !l8) throw new s("imageserverraster:open", "cannot initialize tiled image service, missing service info");
      if (!l8.tileInfo) throw new s("imageserverraster:open", "use ImageryLayer to open non-tiled image services");
      this._fixScaleInServiceInfo();
      const m9 = ["jpg", "jpeg", "png", "png8", "png24", "png32", "mixed"];
      this.tileType = l8.cacheType, null == this.tileType && (m9.includes(l8.tileInfo.format.toLowerCase()) ? this.tileType = "Map" : "lerc" === l8.tileInfo.format.toLowerCase() ? this.tileType = "Elevation" : this.tileType = "Raster"), this.datasetName = l8.name?.slice(l8.name.indexOf("/") + 1) ?? "";
      const u10 = yield this._fetchRasterInfo({
        signal: r6
      });
      if (null == u10) throw new s("image-server-raster:open", "cannot initialize image service");
      c5(u10, l8);
      const h9 = "Map" === this.tileType ? v2(l8.tileInfo, l8) : z.fromJSON(l8.tileInfo);
      n2(h9);
      const [p8, d8] = this._computeMinMaxLOD(u10, h9), {
        extent: y7,
        pixelSize: x4
      } = u10, g7 = 0.5 / u10.width * x4.x, I4 = Math.max(x4.x, x4.y), {
        lods: w3
      } = h9;
      ("Map" !== this.tileType && 0 !== l8.maxScale || Math.abs(x4.x - x4.y) > g7 || !w3.some((e5) => Math.abs(e5.resolution - I4) < g7)) && (x4.x = x4.y = p8.resolution, u10.width = Math.ceil((y7.xmax - y7.xmin) / x4.x - 0.1), u10.height = Math.ceil((y7.ymax - y7.ymin) / x4.y - 0.1));
      const j6 = p8.level - d8.level, [M2, b3] = h9.size, T3 = [], _4 = [];
      w3.forEach((e5, t5) => {
        e5.level >= d8.level && e5.level <= p8.level && T3.push({
          x: e5.resolution,
          y: e5.resolution
        }), t5 < w3.length - 1 && _4.push(Math.round(10 * e5.resolution / w3[t5 + 1].resolution) / 10);
      }), T3.sort((e5, t5) => e5.x - t5.x);
      const O2 = this.computeBlockBoundary(y7, M2, b3, h9.origin, T3, j6), R4 = T3.length > 1 ? T3.slice(1) : null;
      let z2;
      l8.transposeInfo && (z2 = {
        tileSize: [l8.transposeInfo.rows, l8.transposeInfo.cols],
        packetSize: u10.keyProperties?._yxs.PacketSize ?? 0
      });
      const N4 = _4.length <= 1 || _4.length >= 3 && _4.slice(0, -1).every((e5) => e5 === _4[0]) ? _4[0] ?? 2 : Math.round(10 / (d8.resolution / p8.resolution) ** (-1 / j6)) / 10;
      if (u10.storageInfo = new n5({
        blockWidth: h9.size[0],
        blockHeight: h9.size[1],
        pyramidBlockWidth: h9.size[0],
        pyramidBlockHeight: h9.size[1],
        pyramidResolutions: R4,
        pyramidScalingFactor: N4,
        compression: h9.format,
        origin: h9.origin,
        firstPyramidLevel: 1,
        maximumPyramidLevel: j6,
        tileInfo: h9,
        transposeInfo: z2,
        blockBoundary: O2
      }), S4(u10), this._set("rasterInfo", u10), l8.capabilities.toLowerCase().includes("tilemap")) {
        const e5 = {
          tileInfo: u10.storageInfo.tileInfo,
          parsedUrl: I(this.url),
          url: this.url,
          tileServers: []
        };
        this._tilemapCache = new j5({
          layer: e5
        });
      }
    });
  }
  fetchRawTile(_0, _1, _22) {
    return __async(this, arguments, function* (e4, t5, i7, s5 = {}) {
      const {
        storageInfo: r6,
        extent: a7
      } = this.rasterInfo, {
        transposeInfo: l8
      } = r6, o7 = null != l8 && !!s5.transposedVariableName;
      if (this._slices && !o7 && null == s5.sliceId) return null;
      const n9 = o7 ? 0 : r6.maximumPyramidLevel - e4 + this._levelOffset, c8 = `${this.url}/tile/${n9}/${t5}/${i7}`, m9 = this._slices ? o7 ? {
        variable: s5.transposedVariableName
      } : {
        sliceId: s5.sliceId || 0
      } : null, {
        data: h9
      } = yield this.request(c8, {
        query: m9,
        responseType: "array-buffer",
        signal: s5.signal
      });
      if (!h9) return null;
      const f11 = o7 ? l8.tileSize : r6.tileInfo.size, p8 = yield this.decodePixelBlock(h9, {
        width: f11[0],
        height: f11[1],
        planes: null,
        pixelType: null,
        isPoint: "Elevation" === this.tileType,
        returnInterleaved: o7,
        noDataValue: this.rasterInfo.noDataValue
      });
      if (null == p8) return null;
      const d8 = r6.blockBoundary[e4];
      if ("jpg" !== r6.compression || i7 > d8.minCol && i7 < d8.maxCol && t5 > d8.minRow && t5 < d8.maxRow) return p8;
      const {
        origin: y7,
        blockWidth: x4,
        blockHeight: g7
      } = r6, {
        x: v4,
        y: S5
      } = this.getPyramidPixelSize(e4), I4 = Math.round((a7.xmin - y7.x) / v4) % x4, w3 = Math.round((a7.xmax - y7.x) / v4) % x4 || x4, j6 = Math.round((y7.y - a7.ymax) / S5) % g7, M2 = Math.round((y7.y - a7.ymin) / S5) % g7 || g7, b3 = i7 === d8.minCol ? I4 : 0, T3 = t5 === d8.minRow ? j6 : 0, _4 = i7 === d8.maxCol ? w3 : x4, O2 = t5 === d8.maxRow ? M2 : g7;
      return T(p8, {
        x: b3,
        y: T3
      }, {
        width: _4 - b3,
        height: O2 - T3
      }), p8;
    });
  }
  getSliceIndex(e4) {
    if (!this._slices || null == e4 || 0 === e4.length) return null;
    const t5 = e4;
    for (let i7 = 0; i7 < this._slices.length; i7++) {
      const e5 = this._slices[i7].multidimensionalDefinition;
      if (e5.length === t5.length && !e5.some((e6) => {
        const i8 = t5.find((t6) => e6.variableName === t6.variableName && t6.dimensionName === e6.dimensionName);
        if (!i8) return true;
        return (Array.isArray(e6.values[0]) ? `${e6.values[0][0]}-${e6.values[0][1]}` : e6.values[0]) !== (Array.isArray(i8.values[0]) ? `${i8.values[0][0]}-${i8.values[0][1]}` : i8.values[0]);
      })) return i7;
    }
    return null;
  }
  fetchVariableStatisticsHistograms(e4, t5) {
    return __async(this, null, function* () {
      const i7 = this.request(this.url + "/statistics", {
        query: {
          variable: e4,
          f: "json"
        },
        signal: t5
      }).then((e5) => e5.data?.statistics), s5 = this.request(this.url + "/histograms", {
        query: {
          variable: e4,
          f: "json"
        },
        signal: t5
      }).then((e5) => e5.data?.histograms), r6 = yield Promise.all([i7, s5]);
      return r6[0] && r6[0].forEach((e5) => {
        e5.avg = e5.mean, e5.stddev = e5.standardDeviation;
      }), r6[1]?.[0]?.counts?.length || (r6[1] = null), {
        statistics: r6[0] || null,
        histograms: r6[1] || null
      };
    });
  }
  computeBestPyramidLevelForLocation(_0) {
    return __async(this, arguments, function* (e4, t5 = {}) {
      if (!this._tilemapCache) return 0;
      let i7 = this.identifyPixelLocation(e4, 0, t5.datumTransformation);
      if (null === i7) return null;
      let s5 = 0;
      const {
        maximumPyramidLevel: r6
      } = this.rasterInfo.storageInfo;
      let a7 = r6 - s5 + this._levelOffset;
      const l8 = i7.srcLocation;
      for (; a7 >= 0; ) {
        try {
          if ("available" === (yield this._tilemapCache.fetchAvailability(a7, i7.row, i7.col, t5))) break;
        } catch {
        }
        if (a7--, s5++, i7 = this.identifyPixelLocation(l8, s5, t5.datumTransformation), null === i7) return null;
      }
      return -1 === a7 || null == i7 ? null : s5;
    });
  }
  _fetchRasterInfo(e4) {
    return __async(this, null, function* () {
      const t5 = this.sourceJSON;
      if ("Map" === this.tileType) {
        const e5 = t5.fullExtent || t5.extent, i8 = Math.ceil((e5.xmax - e5.xmin) / t5.pixelSizeX - 0.1), s6 = Math.ceil((e5.ymax - e5.ymin) / t5.pixelSizeY - 0.1), r7 = f2.fromJSON(t5.spatialReference || e5.spatialReference), a8 = new _({
          x: t5.pixelSizeX,
          y: t5.pixelSizeY,
          spatialReference: r7
        });
        return new m2({
          width: i8,
          height: s6,
          bandCount: 3,
          extent: w.fromJSON(e5),
          spatialReference: r7,
          pixelSize: a8,
          pixelType: "u8",
          statistics: null,
          keyProperties: {
            DataType: "processed"
          }
        });
      }
      const {
        signal: i7
      } = e4, s5 = f7(this.url, this.sourceJSON, {
        signal: i7,
        query: this.ioConfig.customFetchParameters
      }), r6 = t5.hasMultidimensions ? this.request(`${this.url}/slices`, {
        query: {
          f: "json"
        },
        signal: i7
      }).then((e5) => e5.data?.slices).catch(() => null) : null, a7 = yield Promise.all([s5, r6]);
      return this._slices = a7[1], a7[0];
    });
  }
  _fixScaleInServiceInfo() {
    const {
      sourceJSON: e4
    } = this;
    e4.minScale && e4.minScale < 0 && (e4.minScale = 0), e4.maxScale && e4.maxScale < 0 && (e4.maxScale = 0);
  }
  _computeMinMaxLOD(e4, t5) {
    const {
      pixelSize: i7
    } = e4, s5 = 0.5 / e4.width * i7.x, {
      lods: r6
    } = t5, a7 = t5.lodAt(Math.max.apply(null, r6.map((e5) => e5.level))), l8 = t5.lodAt(Math.min.apply(null, r6.map((e5) => e5.level))), {
      tileType: o7
    } = this;
    if ("Map" === o7) return this._levelOffset = r6[0].level, [a7, l8];
    if ("Raster" === o7) {
      return [r6.find((e5) => e5.resolution === i7.x) ?? a7, l8];
    }
    const {
      minScale: n9,
      maxScale: c8
    } = this.sourceJSON;
    let m9 = a7;
    c8 > 0 && (m9 = r6.find((e5) => Math.abs(e5.scale - c8) < s5), m9 || (m9 = r6.filter((e5) => e5.scale > c8).sort((e5, t6) => e5.scale > t6.scale ? 1 : -1)[0] ?? a7));
    let u10 = l8;
    return n9 > 0 && (u10 = r6.find((e5) => Math.abs(e5.scale - n9) < s5) ?? l8, this._levelOffset = u10.level - l8.level), [m9, u10];
  }
};
function v2(e4, t5) {
  if (!e4) return null;
  const {
    minScale: i7,
    maxScale: s5,
    minLOD: r6,
    maxLOD: a7
  } = t5;
  if (null != r6 && null != a7) return z.fromJSON(__spreadProps(__spreadValues({}, e4), {
    lods: e4.lods.filter(({
      level: e5
    }) => null != e5 && e5 >= r6 && e5 <= a7)
  }));
  if (0 !== i7 && 0 !== s5) {
    const t6 = (e5) => Math.round(1e4 * e5) / 1e4, r7 = i7 ? t6(i7) : 1 / 0, a8 = s5 ? t6(s5) : -1 / 0;
    return z.fromJSON(__spreadProps(__spreadValues({}, e4), {
      lods: e4.lods.filter((e5) => {
        const i8 = t6(e5.scale);
        return i8 <= r7 && i8 >= a8;
      })
    }));
  }
  return z.fromJSON(e4);
}
function S4(e4) {
  const {
    extent: t5,
    spatialReference: i7
  } = e4;
  t5.xmin > -1 && t5.xmax > 181 && i7?.wkid && i7.isGeographic && (e4.nativeExtent = e4.extent, e4.transform = new c2(), e4.extent = e4.transform.forwardTransform(t5));
}
e([y({
  type: String,
  json: {
    write: true
  }
})], g6.prototype, "datasetFormat", void 0), e([y()], g6.prototype, "tileType", void 0), g6 = e([a2("esri.layers.support.rasterDatasets.ImageServerRaster")], g6);
var I2 = g6;

// ../../../node_modules/@arcgis/core/layers/support/rasterDatasets/MRFRaster.js
var y6 = /* @__PURE__ */ new Map();
y6.set("Int8", "s8"), y6.set("UInt8", "u8"), y6.set("Int16", "s16"), y6.set("UInt16", "u16"), y6.set("Int32", "s32"), y6.set("UInt32", "u32"), y6.set("Float32", "f32"), y6.set("Float64", "f32"), y6.set("Double64", "f32");
var x3 = /* @__PURE__ */ new Map();
x3.set("none", {
  blobExtension: ".til",
  isOneSegment: true,
  decoderFormat: "bip"
}), x3.set("lerc", {
  blobExtension: ".lrc",
  isOneSegment: false,
  decoderFormat: "lerc"
}), x3.set("deflate", {
  blobExtension: ".pzp",
  isOneSegment: true,
  decoderFormat: "deflate"
}), x3.set("jpeg", {
  blobExtension: ".pjg",
  isOneSegment: true,
  decoderFormat: "jpg"
});
var w2 = class extends K {
  constructor() {
    super(...arguments), this._files = null, this._storageIndex = null, this.datasetFormat = "MRF";
  }
  open(t5) {
    return __async(this, null, function* () {
      yield this.init(), this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
      const e4 = t5 ? t5.signal : null, r6 = yield this.request(this.url, {
        responseType: "xml",
        signal: e4
      }), {
        rasterInfo: s5,
        files: o7
      } = this._parseHeader(r6.data), {
        skipMapInfo: i7,
        skipExtensions: a7 = []
      } = this.ioConfig;
      if (!a7.includes("aux.xml") && !i7) {
        const e5 = yield this._fetchAuxiliaryData(t5);
        null != e5 && (s5.statistics = e5.statistics ?? s5.statistics, s5.histograms = e5.histograms, e5.histograms && null == s5.statistics && (s5.statistics = g3(e5.histograms)));
      }
      i7 && this.updateImageSpaceRasterInfo(s5), this._set("rasterInfo", s5), this._files = o7;
      const n9 = yield this.request(o7.index, {
        responseType: "array-buffer",
        signal: e4
      });
      this._storageIndex = I3(n9.data);
      const {
        blockWidth: l8,
        blockHeight: f11
      } = this.rasterInfo.storageInfo, c8 = this.rasterInfo.storageInfo.pyramidScalingFactor, {
        width: m9,
        height: p8
      } = this.rasterInfo, u10 = [], g7 = this._getBandSegmentCount();
      let d8 = 0, y7 = -1;
      for (; d8 < this._storageIndex.length; ) {
        y7++;
        const t6 = Math.ceil(m9 / l8 / c8 ** y7) - 1, e5 = Math.ceil(p8 / f11 / c8 ** y7) - 1;
        d8 += (t6 + 1) * (e5 + 1) * g7 * 4, u10.push({
          maxRow: e5,
          maxCol: t6,
          minCol: 0,
          minRow: 0
        });
      }
      this.rasterInfo.storageInfo.blockBoundary = u10, y7 > 0 && (this.rasterInfo.storageInfo.firstPyramidLevel = 1, this.rasterInfo.storageInfo.maximumPyramidLevel = y7), this.updateTileInfo();
    });
  }
  fetchRawTile(_0, _1, _22) {
    return __async(this, arguments, function* (t5, e4, r6, s5 = {}) {
      const {
        blockWidth: i7,
        blockHeight: a7,
        blockBoundary: n9
      } = this.rasterInfo.storageInfo, l8 = n9[t5];
      if (!l8 || l8.maxRow < e4 || l8.maxCol < r6 || l8.minRow > e4 || l8.minCol > r6) return null;
      const {
        bandCount: f11,
        pixelType: c8
      } = this.rasterInfo, {
        ranges: m9,
        actualTileWidth: p8,
        actualTileHeight: h9
      } = this._getTileLocation(t5, e4, r6);
      if (!m9 || 0 === m9.length) return null;
      if (0 === m9[0].from && 0 === m9[0].to) {
        const t6 = new Uint8Array(i7 * a7);
        return new g2({
          width: i7,
          height: a7,
          pixels: void 0,
          mask: t6,
          validPixelCount: 0
        });
      }
      const {
        bandIds: u10
      } = this.ioConfig, g7 = this._getBandSegmentCount(), d8 = [];
      let y7 = 0;
      for (y7 = 0; y7 < g7; y7++) u10 && !u10.includes(y7) || d8.push(this.request(this._files.data, {
        range: {
          from: m9[y7].from,
          to: m9[y7].to
        },
        responseType: "array-buffer",
        signal: s5.signal
      }));
      const w3 = yield Promise.all(d8), I4 = w3.map((t6) => t6.data.byteLength).reduce((t6, e5) => t6 + e5), b3 = new Uint8Array(I4), R4 = [];
      let A2 = 0;
      for (y7 = 0; y7 < g7; y7++) R4.push(A2), b3.set(new Uint8Array(w3[y7].data), A2), A2 += w3[y7].data.byteLength;
      const F3 = x3.get(this.rasterInfo.storageInfo.compression).decoderFormat, S5 = yield this.decodePixelBlock(b3.buffer, {
        width: i7,
        height: a7,
        format: F3,
        planes: u10?.length || f11,
        offsets: R4,
        pixelType: c8
      });
      if (null == S5) return null;
      let {
        noDataValue: _4
      } = this.rasterInfo;
      if (null != _4 && "lerc" !== F3 && !S5.mask && (_4 = _4[0], null != _4)) {
        const t6 = S5.width * S5.height, e5 = new Uint8Array(t6);
        if (Math.abs(_4) > 1e24) for (y7 = 0; y7 < t6; y7++) Math.abs((S5.pixels[0][y7] - _4) / _4) > 1e-6 && (e5[y7] = 1);
        else for (y7 = 0; y7 < t6; y7++) S5.pixels[0][y7] !== _4 && (e5[y7] = 1);
        S5.mask = e5;
      }
      let k4 = 0, M2 = 0;
      if (p8 !== i7 || h9 !== a7) {
        let t6 = S5.mask;
        if (t6) {
          for (y7 = 0; y7 < a7; y7++) if (M2 = y7 * i7, y7 < h9) for (k4 = p8; k4 < i7; k4++) t6[M2 + k4] = 0;
          else for (k4 = 0; k4 < i7; k4++) t6[M2 + k4] = 0;
        } else for (t6 = new Uint8Array(i7 * a7), S5.mask = t6, y7 = 0; y7 < h9; y7++) for (M2 = y7 * i7, k4 = 0; k4 < p8; k4++) t6[M2 + k4] = 1;
      }
      return S5;
    });
  }
  _getBandSegmentCount() {
    return x3.get(this.rasterInfo.storageInfo.compression).isOneSegment ? 1 : this.rasterInfo.bandCount;
  }
  _getTileLocation(t5, e4, r6) {
    const {
      blockWidth: s5,
      blockHeight: o7,
      pyramidScalingFactor: i7
    } = this.rasterInfo.storageInfo, {
      width: a7,
      height: n9
    } = this.rasterInfo, l8 = this._getBandSegmentCount();
    let f11, c8, m9, p8 = 0, h9 = 0;
    for (m9 = 0; m9 < t5; m9++) h9 = i7 ** m9, f11 = Math.ceil(a7 / s5 / h9), c8 = Math.ceil(n9 / o7 / h9), p8 += f11 * c8;
    h9 = i7 ** t5, f11 = Math.ceil(a7 / s5 / h9), c8 = Math.ceil(n9 / o7 / h9), p8 += e4 * f11 + r6, p8 *= 4 * l8;
    const u10 = this._storageIndex.subarray(p8, p8 + 4 * l8);
    let g7 = 0, d8 = 0;
    const y7 = [];
    for (let x4 = 0; x4 < l8; x4++) g7 = u10[4 * x4] * 2 ** 32 + u10[4 * x4 + 1], d8 = g7 + u10[4 * x4 + 2] * 2 ** 32 + u10[4 * x4 + 3], y7.push({
      from: g7,
      to: d8
    });
    return {
      ranges: y7,
      actualTileWidth: r6 < f11 - 1 ? s5 : Math.ceil(a7 / h9) - s5 * (f11 - 1),
      actualTileHeight: e4 < c8 - 1 ? o7 : Math.ceil(n9 / h9) - o7 * (c8 - 1)
    };
  }
  _parseHeader(t5) {
    const r6 = e3(t5, "MRF_META/Raster");
    if (!r6) throw new s("mrf:open", "not a valid MRF format");
    const s5 = e3(r6, "Size"), o7 = parseInt(s5.getAttribute("x"), 10), n9 = parseInt(s5.getAttribute("y"), 10), f11 = parseInt(s5.getAttribute("c"), 10), p8 = (t3(r6, "Compression") || "none").toLowerCase();
    if (!x3.has(p8)) throw new s("mrf:open", "currently does not support compression " + p8);
    const h9 = t3(r6, "DataType") || "UInt8", w3 = y6.get(h9);
    if (null == w3) throw new s("mrf:open", "currently does not support pixel type " + h9);
    const I4 = e3(r6, "PageSize"), b3 = parseInt(I4.getAttribute("x"), 10), R4 = parseInt(I4.getAttribute("y"), 10), A2 = e3(r6, "DataValues");
    let F3, S5;
    A2 && (S5 = A2.getAttribute("NoData"), null != S5 && (F3 = S5.trim().split(" ").map((t6) => parseFloat(t6))));
    if (e3(t5, "MRF_META/CachedSource")) throw new s("mrf:open", "currently does not support MRF referencing other data files");
    const _4 = e3(t5, "MRF_META/GeoTags"), k4 = e3(_4, "BoundingBox");
    let M2, j6 = false;
    if (null != k4) {
      const t6 = parseFloat(k4.getAttribute("minx")), e4 = parseFloat(k4.getAttribute("miny")), r7 = parseFloat(k4.getAttribute("maxx")), s6 = parseFloat(k4.getAttribute("maxy")), o8 = t3(_4, "Projection") || "";
      let i7 = f2.WGS84;
      if ("LOCAL_CS[]" !== o8) {
        if (o8.toLowerCase().startsWith("epsg:")) {
          const t7 = Number(o8.slice(5));
          isNaN(t7) || 0 === t7 || (i7 = new f2({
            wkid: t7
          }));
        } else i7 = d6(o8) ?? f2.WGS84;
      } else j6 = true, i7 = new f2({
        wkid: 3857
      });
      M2 = new w(t6, e4, r7, s6), M2.spatialReference = i7;
    } else j6 = true, M2 = new w({
      xmin: -0.5,
      ymin: 0.5 - n9,
      xmax: o7 - 0.5,
      ymax: 0.5,
      spatialReference: new f2({
        wkid: 3857
      })
    });
    const C3 = e3(t5, "MRF_META/Rsets"), T3 = parseInt(C3?.getAttribute("scale") || "2", 10), L4 = M2.spatialReference, U7 = new n5({
      origin: new _({
        x: M2.xmin,
        y: M2.ymax,
        spatialReference: L4
      }),
      blockWidth: b3,
      blockHeight: R4,
      pyramidBlockWidth: b3,
      pyramidBlockHeight: R4,
      compression: p8,
      pyramidScalingFactor: T3
    }), B2 = new _({
      x: M2.width / o7,
      y: M2.height / n9,
      spatialReference: L4
    }), E3 = new m2({
      width: o7,
      height: n9,
      extent: M2,
      isPseudoSpatialReference: j6,
      spatialReference: L4,
      bandCount: f11,
      pixelType: w3,
      pixelSize: B2,
      noDataValue: F3,
      storageInfo: U7
    }), P3 = t3(t5, "datafile"), W4 = t3(t5, "IndexFile");
    return {
      rasterInfo: E3,
      files: {
        mrf: this.url,
        index: W4 || this.url.replace(".mrf", ".idx"),
        data: P3 || this.url.replace(".mrf", x3.get(p8).blobExtension)
      }
    };
  }
  _fetchAuxiliaryData(t5) {
    return __async(this, null, function* () {
      try {
        const {
          data: e4
        } = yield this.request(this.url + ".aux.xml", {
          responseType: "xml",
          signal: t5?.signal
        });
        return S3(e4);
      } catch {
        return null;
      }
    });
  }
};
function I3(t5) {
  if (t5.byteLength % 16 > 0) throw new Error("invalid array buffer must be multiples of 16");
  let e4, r6, s5, o7, i7, a7;
  if (r2) {
    for (r6 = new Uint8Array(t5), o7 = new ArrayBuffer(t5.byteLength), s5 = new Uint8Array(o7), i7 = 0; i7 < t5.byteLength / 4; i7++) for (a7 = 0; a7 < 4; a7++) s5[4 * i7 + a7] = r6[4 * i7 + 3 - a7];
    e4 = new Uint32Array(o7);
  } else e4 = new Uint32Array(t5);
  return e4;
}
e([y()], w2.prototype, "_files", void 0), e([y()], w2.prototype, "_storageIndex", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], w2.prototype, "datasetFormat", void 0), w2 = e([a2("esri.layers.support.rasterDatasets.MRFRaster")], w2);
var b2 = w2;

// ../../../node_modules/@arcgis/core/layers/support/rasterDatasets/DBFParser.js
function t4(e4) {
  const t5 = e4.fields, r6 = e4.records, n9 = t5.some((e5) => "oid" === e5.name.toLowerCase()) ? "OBJECTID" : "OID", i7 = [{
    name: n9,
    type: "esriFieldTypeOID",
    alias: "OID"
  }].concat(t5.map((e5) => ({
    name: e5.name,
    type: "esriFieldType" + e5.typeName,
    alias: e5.name
  }))), s5 = i7.map((e5) => e5.name), a7 = [];
  let o7 = 0, l8 = 0;
  return r6.forEach((e5) => {
    const t6 = {};
    for (t6[n9] = o7++, l8 = 1; l8 < s5.length; l8++) t6[s5[l8]] = e5[l8 - 1];
    a7.push({
      attributes: t6
    });
  }), {
    displayFieldName: "",
    fields: i7,
    features: a7
  };
}
var r5 = class {
  static get supportedVersions() {
    return [5];
  }
  static parse(r6) {
    const n9 = new DataView(r6), i7 = 3 & n9.getUint8(0);
    if (3 !== i7) return {
      header: {
        version: i7
      },
      recordSet: null
    };
    const s5 = n9.getUint32(4, true), a7 = n9.getUint16(8, true), o7 = n9.getUint16(10, true), l8 = {
      version: i7,
      recordCount: s5,
      headerByteCount: a7,
      recordByteCount: o7
    };
    let p8 = 32;
    const g7 = [], u10 = [];
    let d8;
    if (3 === i7) {
      for (; 13 !== n9.getUint8(p8); ) d8 = String.fromCharCode(n9.getUint8(p8 + 11)).trim(), g7.push({
        name: r(new Uint8Array(r6, p8, 11)),
        type: d8,
        typeName: ["String", "Date", "Double", "Boolean", "String", "Integer"][["C", "D", "F", "L", "M", "N"].indexOf(d8)],
        length: n9.getUint8(p8 + 16)
      }), p8 += 32;
      if (p8 += 1, g7.length > 0) for (; u10.length < s5 && r6.byteLength - p8 > o7; ) {
        const t5 = [];
        32 === n9.getUint8(p8) ? (p8 += 1, g7.forEach((n10) => {
          if ("C" === n10.type) t5.push(r(new Uint8Array(r6, p8, n10.length)).trim());
          else if ("N" === n10.type) t5.push(parseInt(String.fromCharCode.apply(null, new Uint8Array(r6, p8, n10.length)).trim(), 10));
          else if ("F" === n10.type) t5.push(parseFloat(String.fromCharCode.apply(null, new Uint8Array(r6, p8, n10.length)).trim()));
          else if ("D" === n10.type) {
            const e4 = String.fromCharCode.apply(null, new Uint8Array(r6, p8, n10.length)).trim();
            t5.push(new Date(parseInt(e4.substring(0, 4), 10), parseInt(e4.substring(4, 6), 10) - 1, parseInt(e4.substring(6, 8), 10)));
          }
          p8 += n10.length;
        }), u10.push(t5)) : p8 += o7;
      }
    }
    return {
      header: l8,
      fields: g7,
      records: u10,
      recordSet: t4({
        fields: g7,
        records: u10
      })
    };
  }
};

// ../../../node_modules/@arcgis/core/layers/support/rasterDatasets/TIFFRaster.js
var _3 = (e4, t5) => e4.get(t5)?.values;
var F2 = (e4, t5) => e4.get(t5)?.values?.[0];
var v3 = class extends K {
  constructor() {
    super(...arguments), this._files = null, this._headerInfo = null, this._bufferSize = 1048576, this.datasetFormat = "TIFF";
  }
  open(e4) {
    return __async(this, null, function* () {
      yield this.init();
      const t5 = e4 ? e4.signal : null, {
        data: s5
      } = yield this.request(this.url, {
        range: {
          from: 0,
          to: this._bufferSize
        },
        responseType: "array-buffer",
        signal: t5
      });
      if (!s5) throw new s("tiffraster:open", "failed to open url " + this.url);
      this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1, this.url.lastIndexOf("."));
      const {
        littleEndian: a7,
        firstIFDPos: n9,
        isBigTiff: o7
      } = F(s5), f11 = [];
      yield this._readIFDs(f11, s5, a7, n9, 0, o7 ? 8 : 4, t5);
      const {
        imageInfo: l8,
        rasterInfo: u10
      } = k3(f11), p8 = U2(f11), d8 = N2(f11);
      if (this._headerInfo = __spreadValues({
        littleEndian: a7,
        isBigTiff: o7,
        ifds: f11,
        pyramidIFDs: p8,
        maskIFDs: d8
      }, l8), this._set("rasterInfo", u10), !l8.isSupported) throw new s("tiffraster:open", "this tiff is not supported: " + l8.message);
      if (!l8.tileWidth) throw new s("tiffraster:open", "none-tiled tiff is not optimized for access, convert to COG and retry.");
      u10.isPseudoSpatialReference && n.getLogger(this).warn("The spatial reference for this tiff is unsupported. Only EPSG spatial reference codes and Esri WKTs are supported.");
      const y7 = f11[0].get("PREDICTOR")?.values?.[0], g7 = f11[0].get("SAMPLEFORMAT")?.values?.[0];
      if (3 === g7 && 2 === y7) throw new s("tiffraster:open", "unsupported horizontal difference encoding. Predictor=3 is supported for floating point data");
      const {
        skipMapInfo: x4,
        skipExtensions: T3 = []
      } = this.ioConfig;
      if (!T3.includes("aux.xml") && !x4) {
        const t6 = yield this._fetchAuxiliaryMetaData(e4);
        null != t6 && P2(t6, u10);
      }
      T3.includes("vat.dbf") || 1 !== u10.bandCount || "u8" !== u10.pixelType || x4 || (u10.attributeTable = yield this._fetchAuxiliaryTable(e4), null != u10.attributeTable && (u10.keyProperties.DataType = "thematic")), x4 && this.updateImageSpaceRasterInfo(u10), this.updateTileInfo();
    });
  }
  fetchRawTile(_0, _1, _22) {
    return __async(this, arguments, function* (e4, t5, r6, i7 = {}) {
      if (!this._headerInfo?.isSupported || this.isBlockOutside(e4, t5, r6)) return null;
      const s5 = yield this._fetchRawTiffTile(e4, t5, r6, false, i7);
      if (null != s5 && this._headerInfo.hasMaskBand) {
        const a7 = yield this._fetchRawTiffTile(e4, t5, r6, true, i7);
        null != a7 && a7.pixels[0] instanceof Uint8Array && (s5.mask = a7.pixels[0]);
      }
      return s5;
    });
  }
  _readIFDs(e4, t5, r6, i7, s5, a7 = 4, n9) {
    return __async(this, null, function* () {
      if (!i7) return null;
      if (i7 >= t5.byteLength || i7 < 0) {
        t5 = (yield this.request(this.url, {
          range: {
            from: i7 + s5,
            to: i7 + s5 + this._bufferSize
          },
          responseType: "array-buffer",
          signal: n9
        })).data, s5 = i7 + s5, i7 = 0;
      }
      const o7 = yield this._readIFD(t5, r6, i7, s5, n4.tiffTags, a7, n9);
      if (e4.push(o7.ifd), !o7.nextIFD) return null;
      yield this._readIFDs(e4, t5, r6, o7.nextIFD - s5, s5, a7, n9);
    });
  }
  _readIFD(_0, _1, _22, _32) {
    return __async(this, arguments, function* (e4, r6, i7, s5, a7 = n4.tiffTags, n9 = 4, o7) {
      if (!e4) return null;
      const f11 = B(e4, r6, i7, s5, a7, n9);
      if (f11.success) {
        const i8 = [];
        if (f11.ifd?.forEach((e5) => {
          e5.values || i8.push(e5);
        }), i8.length > 0) {
          const a8 = i8.map((e5) => e5.offlineOffsetSize).filter(O), n10 = Math.min.apply(null, a8.map((e5) => e5[0]));
          if (Math.min.apply(null, a8.map((e5) => e5[0] + e5[1])) - n10 <= this._bufferSize) {
            const {
              data: t5
            } = yield this.request(this.url, {
              range: {
                from: n10,
                to: n10 + this._bufferSize
              },
              responseType: "array-buffer",
              signal: o7
            });
            e4 = t5, s5 = n10, i8.forEach((t6) => L(e4, r6, t6, s5));
          }
        }
        if (f11.ifd?.has("GEOKEYDIRECTORY")) {
          const t5 = f11.ifd.get("GEOKEYDIRECTORY"), i9 = t5?.values;
          if (i9 && i9.length > 4) {
            const a8 = i9[0] + "." + i9[1] + "." + i9[2], n10 = yield this._readIFD(e4, r6, t5.valueOffset + 6 - s5, s5, n4.geoKeys, 2, o7);
            t5.data = n10.ifd, t5.data && t5.data.set("GEOTIFFVersion", {
              id: 0,
              type: 2,
              valueCount: 1,
              valueOffset: null,
              values: [a8]
            });
          }
        }
        return f11;
      }
      if (f11.requiredBufferSize && f11.requiredBufferSize !== e4.byteLength) {
        const t5 = yield this.request(this.url, {
          range: {
            from: s5,
            to: s5 + f11.requiredBufferSize + 4
          },
          responseType: "array-buffer",
          signal: o7
        });
        return (e4 = t5.data).byteLength < f11.requiredBufferSize ? null : this._readIFD(e4, r6, 0, s5, n4.tiffTags, 4, o7);
      }
    });
  }
  _fetchRawTiffTile(_0, _1, _22, _32) {
    return __async(this, arguments, function* (e4, t5, r6, i7, s5 = {}) {
      const a7 = this._getTileLocation(e4, t5, r6, i7);
      if (!a7) return null;
      const {
        ranges: n9,
        actualTileWidth: o7,
        actualTileHeight: f11,
        ifd: l8
      } = a7, u10 = n9.map((e5) => this.request(this.url, {
        range: e5,
        responseType: "array-buffer",
        signal: s5.signal
      })), p8 = yield Promise.all(u10), c8 = p8.map((e5) => e5.data.byteLength).reduce((e5, t6) => e5 + t6), h9 = 1 === p8.length ? p8[0].data : new ArrayBuffer(c8), m9 = [0], d8 = [0];
      if (p8.length > 1) {
        const e5 = new Uint8Array(h9);
        for (let t6 = 0, r7 = 0; t6 < p8.length; t6++) {
          const i8 = p8[t6].data;
          e5.set(new Uint8Array(i8), r7), m9[t6] = r7, r7 += i8.byteLength, d8[t6] = i8.byteLength;
        }
      }
      const {
        blockWidth: y7,
        blockHeight: g7
      } = this.getBlockWidthHeight(e4), x4 = yield this.decodePixelBlock(h9, {
        format: "tiff",
        customOptions: {
          headerInfo: this._headerInfo,
          ifd: l8,
          offsets: m9,
          sizes: d8
        },
        width: y7,
        height: g7,
        planes: null,
        pixelType: null
      });
      if (null == x4) return null;
      let T3, w3, I4;
      if (o7 !== y7 || f11 !== g7) {
        let e5 = x4.mask;
        if (e5) {
          for (T3 = 0; T3 < g7; T3++) if (I4 = T3 * y7, T3 < f11) for (w3 = o7; w3 < y7; w3++) e5[I4 + w3] = 0;
          else for (w3 = 0; w3 < y7; w3++) e5[I4 + w3] = 0;
        } else for (e5 = new Uint8Array(y7 * g7), x4.mask = e5, T3 = 0; T3 < f11; T3++) for (I4 = T3 * y7, w3 = 0; w3 < o7; w3++) e5[I4 + w3] = 1;
      }
      return x4;
    });
  }
  _getTileLocation(e4, t5, r6, i7 = false) {
    const {
      firstPyramidLevel: s5,
      blockBoundary: a7
    } = this.rasterInfo.storageInfo, n9 = 0 === e4 ? 0 : e4 - (s5 - 1), {
      _headerInfo: o7
    } = this;
    if (!o7) return null;
    const f11 = i7 ? o7.maskIFDs[n9] : 0 === n9 ? o7?.ifds[0] : o7?.pyramidIFDs[n9 - 1];
    if (!f11) return null;
    const l8 = D(f11, o7), u10 = _3(f11, "TILEOFFSETS");
    if (void 0 === u10) return null;
    const p8 = _3(f11, "TILEBYTECOUNTS"), {
      minRow: c8,
      minCol: h9,
      maxRow: m9,
      maxCol: d8
    } = a7[n9];
    if (t5 > m9 || r6 > d8 || t5 < c8 || r6 < h9) return null;
    const y7 = F2(f11, "IMAGEWIDTH"), x4 = F2(f11, "IMAGELENGTH"), T3 = F2(f11, "TILEWIDTH"), w3 = F2(f11, "TILELENGTH"), I4 = [];
    if (l8) {
      const {
        bandCount: e5
      } = this.rasterInfo;
      for (let i8 = 0; i8 < e5; i8++) {
        const e6 = i8 * (m9 + 1) * (d8 + 1) + t5 * (d8 + 1) + r6;
        I4[i8] = {
          from: u10[e6],
          to: u10[e6] + p8[e6] - 1
        };
      }
    } else {
      const e5 = t5 * (d8 + 1) + r6;
      I4.push({
        from: u10[e5],
        to: u10[e5] + p8[e5] - 1
      });
    }
    for (let g7 = 0; g7 < I4.length; g7++) if (null == I4[g7].from || !I4[g7].to || I4[g7].to < 0) return null;
    return {
      ranges: I4,
      ifd: f11,
      actualTileWidth: r6 === d8 && y7 % T3 || T3,
      actualTileHeight: t5 === m9 && x4 % w3 || w3
    };
  }
  _fetchAuxiliaryMetaData(e4) {
    return __async(this, null, function* () {
      try {
        const {
          data: t5
        } = yield this.request(this.url + ".aux.xml", {
          responseType: "xml",
          signal: e4?.signal
        });
        return S3(t5);
      } catch {
        return null;
      }
    });
  }
  _fetchAuxiliaryTable(e4) {
    return __async(this, null, function* () {
      try {
        const {
          data: t5
        } = yield this.request(this.url + ".vat.dbf", {
          responseType: "array-buffer",
          signal: e4?.signal
        }), r6 = r5.parse(t5);
        return r6?.recordSet ? d2.fromJSON(r6.recordSet) : null;
      } catch {
        return null;
      }
    });
  }
};
function k3(e4) {
  const t5 = R(e4), {
    width: r6,
    height: i7,
    tileWidth: s5,
    tileHeight: a7,
    planes: f11,
    pixelType: l8,
    compression: u10,
    firstPyramidLevel: c8,
    maximumPyramidLevel: h9,
    pyramidBlockWidth: m9,
    pyramidBlockHeight: d8,
    pyramidResolutions: y7,
    tileBoundary: g7,
    affine: T3,
    metadata: w3
  } = t5, R4 = t5.extent.spatialReference?.wkt || t5.extent.spatialReference?.wkid;
  let v4 = d6(R4), k4 = !!t5.isPseudoGeographic;
  null == v4 && (k4 = true, v4 = new f2({
    wkid: 3857
  }));
  const P3 = new w(__spreadProps(__spreadValues({}, t5.extent), {
    spatialReference: v4
  })), D6 = new _(P3 ? {
    x: P3.xmin,
    y: P3.ymax,
    spatialReference: v4
  } : {
    x: 0,
    y: 0
  }), O2 = new n5({
    blockWidth: s5,
    blockHeight: a7,
    pyramidBlockWidth: m9,
    pyramidBlockHeight: d8,
    compression: u10,
    origin: D6,
    firstPyramidLevel: c8,
    maximumPyramidLevel: h9,
    pyramidResolutions: y7,
    blockBoundary: g7
  }), L4 = new _({
    x: (P3.xmax - P3.xmin) / r6,
    y: (P3.ymax - P3.ymin) / i7,
    spatialReference: v4
  }), j6 = w3 ? {
    BandProperties: w3.bandProperties,
    DataType: w3.dataType
  } : {};
  let B2 = null;
  const z2 = F2(e4[0], "PHOTOMETRICINTERPRETATION"), A2 = _3(e4[0], "COLORMAP");
  if (z2 <= 3 && A2?.length > 3 && A2.length % 3 == 0) {
    B2 = [];
    const e5 = A2.length / 3;
    for (let t6 = 0; t6 < e5; t6++) B2.push([t6, A2[t6] >>> 8, A2[t6 + e5] >>> 8, A2[t6 + 2 * e5] >>> 8]);
  }
  const C3 = new m2({
    width: r6,
    height: i7,
    bandCount: f11,
    pixelType: l8,
    pixelSize: L4,
    storageInfo: O2,
    spatialReference: v4,
    isPseudoSpatialReference: k4,
    keyProperties: j6,
    extent: P3,
    colormap: B2,
    statistics: w3 ? w3.statistics : null
  });
  if (T3?.length && (C3.nativeExtent = new w({
    xmin: -0.5,
    ymin: 0.5 - i7,
    xmax: r6 - 0.5,
    ymax: 0.5,
    spatialReference: v4
  }), C3.transform = new y5({
    polynomialOrder: 1,
    forwardCoefficients: [T3[2] + T3[0] / 2, T3[5] - T3[3] / 2, T3[0], T3[3], -T3[1], -T3[4]]
  }), C3.extent = C3.transform.forwardTransform(C3.nativeExtent), C3.pixelSize = new _({
    x: (P3.xmax - P3.xmin) / r6,
    y: (P3.ymax - P3.ymin) / i7,
    spatialReference: v4
  }), O2.origin.x = -0.5, O2.origin.y = 0.5), y7) {
    const {
      x: e5,
      y: t6
    } = C3.pixelSize;
    y7.forEach((r7) => {
      r7.x *= e5, r7.y *= t6;
    });
  }
  return {
    imageInfo: t5,
    rasterInfo: C3
  };
}
function P2(e4, t5) {
  if (t5.statistics = e4.statistics ?? t5.statistics, t5.histograms = e4.histograms, e4.histograms && null == t5.statistics && (t5.statistics = g3(e4.histograms)), e4.transform && null == t5.transform) {
    t5.transform = e4.transform, t5.nativeExtent = t5.extent;
    const r6 = t5.transform.forwardTransform(t5.nativeExtent);
    t5.pixelSize = new _({
      x: (r6.xmax - r6.xmin) / t5.width,
      y: (r6.ymax - r6.ymin) / t5.height,
      spatialReference: t5.spatialReference
    }), t5.extent = r6;
  }
  t5.isPseudoSpatialReference && e4.spatialReference && (t5.spatialReference = e4.spatialReference, t5.extent.spatialReference = t5.nativeExtent.spatialReference = t5.storageInfo.origin.spatialReference = t5.spatialReference);
}
e([y()], v3.prototype, "_files", void 0), e([y()], v3.prototype, "_headerInfo", void 0), e([y()], v3.prototype, "_bufferSize", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], v3.prototype, "datasetFormat", void 0), v3 = e([a2("esri.layers.support.rasterDatasets.TIFFRaster")], v3);
var D5 = v3;

// ../../../node_modules/@arcgis/core/layers/support/rasterDatasets/RasterFactory.js
var n8 = /* @__PURE__ */ new Map();
n8.set("MRF", {
  desc: "Meta Raster Format",
  constructor: b2
}), n8.set("TIFF", {
  desc: "GeoTIFF",
  constructor: D5
}), n8.set("RasterTileServer", {
  desc: "Raster Tile Server",
  constructor: I2
}), n8.set("JPG", {
  desc: "JPG Raster Format",
  constructor: d7
}), n8.set("PNG", {
  desc: "PNG Raster Format",
  constructor: d7
}), n8.set("GIF", {
  desc: "GIF Raster Format",
  constructor: d7
}), n8.set("BMP", {
  desc: "BMP Raster Format",
  constructor: d7
}), n8.set("CovJSON", {
  desc: "COVJSON Raster Format",
  constructor: h7
}), n8.set("MEMORY", {
  desc: "In Memory Raster Format",
  constructor: g5
});
var u9 = class {
  static get supportedFormats() {
    const t5 = /* @__PURE__ */ new Set();
    return n8.forEach((r6, e4) => t5.add(e4)), t5;
  }
  static open(r6) {
    return __async(this, null, function* () {
      const {
        url: e4,
        ioConfig: s5,
        source: o7,
        sourceJSON: a7
      } = r6;
      let c8 = r6.datasetFormat ?? s5?.datasetFormat;
      null == c8 && (e4.includes(".") ? c8 = e4.slice(e4.lastIndexOf(".") + 1).toUpperCase() : "coverage" === o7?.type?.toLowerCase() ? c8 = "CovJSON" : o7?.extent && o7.pixelblocks && (c8 = "MEMORY")), "OVR" === c8 || "TIF" === c8 ? c8 = "TIFF" : "JPG" === c8 || "JPEG" === c8 || "JFIF" === c8 ? c8 = "JPG" : "COVJSON" === c8 && (c8 = "CovJSON"), e4.toLowerCase().includes("/imageserver") && !e4.toLowerCase().includes("/wcsserver") && (c8 = "RasterTileServer");
      const u10 = {
        url: e4,
        source: o7,
        sourceJSON: a7,
        datasetFormat: c8,
        ioConfig: s5 ?? {
          bandIds: null,
          sampling: null
        }
      };
      if (Object.keys(u10).forEach((t5) => {
        null == u10[t5] && delete u10[t5];
      }), c8) {
        if (!this.supportedFormats.has(c8)) throw new s("rasterfactory:open", "not a supported format " + c8);
        if ("CRF" === c8) throw new s("rasterfactory:open", `cannot open raster: ${e4}`);
        const s6 = new (0, n8.get(c8).constructor)(u10);
        return yield s6.open({
          signal: r6.signal
        }), s6;
      }
      const i7 = Array.from(n8.keys()).filter((t5) => "CovJSON" !== t5 && "Memory" !== t5);
      let l8 = 0;
      const m9 = () => {
        if (c8 = i7[l8++], !c8) return null;
        if ("CRF" === c8) return null;
        const t5 = new (0, n8.get(c8).constructor)(u10);
        return t5.open({
          signal: r6.signal
        }).then(() => t5).catch(() => m9());
      };
      return m9();
    });
  }
  static register(t5, r6, e4) {
    n8.has(t5.toUpperCase()) || n8.set(t5.toUpperCase(), {
      desc: r6,
      constructor: e4
    });
  }
};

// ../../../node_modules/@arcgis/core/layers/ImageryTileLayer.js
var C2 = class extends l(t(b(j2(e2(V3(l5(l2(f4(S(i2(f3))))))))))) {
  constructor(...e4) {
    super(...e4), this._primaryRasters = [], this.bandIds = null, this.interpolation = null, this.legendEnabled = true, this.isReference = null, this.listMode = "show", this.sourceJSON = null, this.version = null, this.type = "imagery-tile", this.operationalLayerType = "ArcGISTiledImageServiceLayer", this.popupEnabled = true, this.popupTemplate = null, this.fields = null, this.source = void 0, this._debouncedSaveOperations = k((e5, t5, r6) => __async(this, null, function* () {
      const {
        save: s5,
        saveAs: i7
      } = yield import("./imageryUtils-XRKQ2DF3.js");
      switch (e5) {
        case A.SAVE:
          return s5(this, t5);
        case A.SAVE_AS:
          return i7(this, r6, t5);
      }
    }));
  }
  normalizeCtorArgs(e4, t5) {
    return "string" == typeof e4 ? __spreadValues({
      url: e4
    }, t5) : e4;
  }
  load(e4) {
    const t5 = null != e4 ? e4.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({
      supportedTypes: ["Image Service"]
    }, e4).catch(a).then(() => this._openRaster(t5))), Promise.resolve(this);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get rasterFields() {
    const e4 = [new y2({
      name: "Raster.ServicePixelValue",
      alias: "Pixel Value",
      domain: null,
      editable: false,
      length: 50,
      type: "string"
    }), new y2({
      name: "Raster.ServicePixelValue.Raw",
      alias: "Raw Pixel Value",
      domain: null,
      editable: false,
      length: 50,
      type: "string"
    })], t5 = this.raster?.rasterInfo ?? this.serviceRasterInfo, r6 = t5?.attributeTable, s5 = null != r6 ? r6.fields : null, i7 = "Raster.";
    if (s5) {
      const t6 = s5.filter((e5) => "oid" !== e5.type && "value" !== e5.name.toLowerCase()).map((e5) => {
        const t7 = e5.clone();
        return t7.name = i7 + e5.name, t7;
      });
      e4.push(...t6);
    }
    const o7 = t5?.dataType, a7 = t5?.multidimensionalInfo;
    if (("vector-magdir" === o7 || "vector-uv" === o7) && null != a7) {
      const t6 = a7.variables[0].unit?.trim(), r7 = "Magnitude" + (t6 ? ` (${t6})` : "");
      e4.push(new y2({
        name: "Raster.Magnitude",
        alias: r7,
        domain: null,
        editable: false,
        type: "double"
      })), e4.push(new y2({
        name: "Raster.Direction",
        alias: "Direction (°)",
        domain: null,
        editable: false,
        type: "double"
      }));
    }
    return e4;
  }
  createPopupTemplate(e4) {
    const {
      rasterFields: t5
    } = this, r6 = new Set(t5.map(({
      name: e5
    }) => e5).filter((e5) => "raster.servicepixelvalue.raw" !== e5.toLowerCase()));
    return p3({
      fields: t5,
      title: this.title
    }, __spreadProps(__spreadValues({}, e4), {
      visibleFieldNames: r6
    }));
  }
  generateRasterInfo(e4, t5) {
    return __async(this, null, function* () {
      if (e4 = g(N3, e4), yield this.load(), !e4 || "none" === e4.functionName?.toLowerCase()) return this.serviceRasterInfo;
      try {
        const {
          rasterInfo: r6
        } = yield this._openFunctionRaster(e4, t5);
        return r6;
      } catch (r6) {
        if (r6 instanceof s) throw r6;
        throw new s("imagery-tile-layer", "the given raster function is not supported");
      }
    });
  }
  save(e4) {
    return __async(this, null, function* () {
      return this._debouncedSaveOperations(A.SAVE, e4);
    });
  }
  saveAs(e4, t5) {
    return __async(this, null, function* () {
      return this._debouncedSaveOperations(A.SAVE_AS, t5, e4);
    });
  }
  write(e4, t5) {
    const r6 = this._primaryRasters[0] ?? this.raster;
    if (this.loaded ? "RasterTileServer" === r6.datasetFormat && ("Raster" === r6.tileType || "Map" === r6.tileType) : this.url && /\/ImageServer(\/|\/?$)/i.test(this.url)) return super.write(e4, t5);
    if (t5?.messages) {
      const e5 = `${t5.origin}/${t5.layerContainerType || "operational-layers"}`;
      t5.messages.push(new s("layer:unsupported", `Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e5}'`, {
        layer: this
      }));
    }
    return null;
  }
  _openRaster(e4) {
    return __async(this, null, function* () {
      let t5 = false;
      if (this.raster) yield this._openFromRaster(this.raster, e4), t5 = "Function" === this.raster.datasetFormat;
      else {
        const {
          url: t6,
          rasterFunction: r7,
          source: i7
        } = this;
        if (!t6 && !i7) throw new s("imagery-tile-layer:open", "missing url or source parameter");
        i7 ? yield this._openFromSource(i7, e4) : r7 ? yield this._openFromUrlWithRasterFunction(t6, r7, e4) : yield this._openFromUrl(t6, e4);
      }
      const r6 = this.raster.rasterInfo;
      if (!r6) throw new s("imagery-tile-layer:load", "cannot load resources on " + this.url);
      if (this._set("serviceRasterInfo", t5 ? r6 : this._primaryRasters[0].rasterInfo), this._set("spatialReference", r6.spatialReference), this.sourceJSON = this.sourceJSON || this.raster.sourceJSON, null != this.sourceJSON) {
        const e5 = "Map" === this.raster.tileType && null != this.sourceJSON.minLOD && null != this.sourceJSON.maxLOD ? this.sourceJSON : __spreadProps(__spreadValues({}, this.sourceJSON), {
          minScale: 0,
          maxScale: 0
        });
        this.read(e5, {
          origin: "service"
        });
      } else this.read({
        tileInfo: this.serviceRasterInfo?.storageInfo.tileInfo.toJSON()
      }, {
        origin: "service"
      });
      this.title || (this.title = this.raster.datasetName), "Map" === this.raster.tileType && (this.popupEnabled = false), this._configDefaultSettings(), this.addHandles(d(() => this.customParameters, (e5) => {
        this.raster && (this.raster.ioConfig.customFetchParameters = e5);
      }));
    });
  }
  _openFromRaster(e4, t5) {
    return __async(this, null, function* () {
      e4.rasterInfo || (yield e4.open({
        signal: t5
      })), this._primaryRasters = "Function" === e4.datasetFormat ? e4.primaryRasters.rasters : [e4], this.url || (this.url = this._primaryRasters[0].url);
    });
  }
  _openFromUrlWithRasterFunction(e4, t5, r6) {
    return __async(this, null, function* () {
      const i7 = [e4];
      t5 && R3(t5.toJSON(), i7);
      const o7 = yield Promise.all(i7.map((e5) => u9.open({
        url: e5,
        sourceJSON: this.sourceJSON,
        ioConfig: __spreadProps(__spreadValues({
          sampling: "closest"
        }, this.ioConfig), {
          customFetchParameters: this.customParameters
        }),
        signal: r6
      }))), a7 = o7.findIndex((e5) => null == e5);
      if (a7 > -1) throw new s("imagery-tile-layer:open", `cannot open raster: ${i7[a7]}`);
      return this._primaryRasters = o7, this._initializeWithFunctionRaster(t5);
    });
  }
  _openFromUrl(e4, t5) {
    return __async(this, null, function* () {
      const r6 = yield u9.open({
        url: e4,
        sourceJSON: this.sourceJSON,
        ioConfig: __spreadProps(__spreadValues({
          sampling: "closest"
        }, this.ioConfig), {
          customFetchParameters: this.customParameters
        }),
        signal: t5
      });
      if (null == r6) throw new s("imagery-tile-layer:open", `cannot open raster: ${e4}`);
      this._primaryRasters = [r6], this.raster = r6;
    });
  }
  _openFromSource(e4, t5) {
    return __async(this, null, function* () {
      const r6 = "the tiled imagery data source is not supported", i7 = "coverage" === e4.type?.toLowerCase() ? "CovJSON" : e4.extent && e4.pixelBlock ? "MEMORY" : null;
      if (!i7) throw new s("imagery-tile-layer:open", r6);
      "MEMORY" === i7 && (e4 = {
        extent: e4.extent,
        pixelBlocks: [e4.pixelBlock]
      });
      const o7 = yield u9.open({
        url: "",
        source: e4,
        datasetFormat: i7,
        ioConfig: __spreadProps(__spreadValues({
          sampling: "closest"
        }, this.ioConfig), {
          customFetchParameters: this.customParameters
        }),
        signal: t5
      });
      if (null == o7) throw new s("imagery-tile-layer:open", r6);
      this._primaryRasters = [o7], this.rasterFunction ? yield this._initializeWithFunctionRaster(this.rasterFunction) : this.raster = o7;
    });
  }
  _openFunctionRaster(e4, t5) {
    return __async(this, null, function* () {
      const r6 = {
        raster: this._primaryRasters[0]
      };
      this._primaryRasters.length > 1 && this._primaryRasters.forEach((e5) => r6[e5.url] = e5);
      const s5 = S2(e4.functionDefinition?.toJSON() ?? e4.toJSON(), r6), i7 = new u5({
        rasterFunction: s5
      });
      return yield i7.open(t5), i7;
    });
  }
  _initializeWithFunctionRaster(e4, t5) {
    return __async(this, null, function* () {
      try {
        this.raster = yield this._openFunctionRaster(e4, t5);
      } catch (r6) {
        r6 instanceof s && n.getLogger(this).error("imagery-tile-layer:open", r6.message), n.getLogger(this).warn("imagery-tile-layer:open", "the raster function cannot be applied and is removed"), this._set("rasterFunction", null), this.raster = this._primaryRasters[0];
      }
    });
  }
};
e([y({
  clonable: false
})], C2.prototype, "_primaryRasters", void 0), e([y({
  type: [N],
  json: {
    write: {
      overridePolicy() {
        return {
          enabled: !this.loaded || "Raster" === this.raster.tileType || "0,1,2" !== this.bandIds?.join(",")
        };
      }
    }
  }
})], C2.prototype, "bandIds", void 0), e([y({
  json: {
    write: {
      overridePolicy() {
        return {
          enabled: !this.loaded || "Raster" === this.raster.tileType || "bilinear" !== this.interpolation
        };
      }
    }
  }
}), o2(a4)], C2.prototype, "interpolation", void 0), e([y(y4)], C2.prototype, "legendEnabled", void 0), e([y({
  type: Boolean,
  json: {
    read: false,
    write: {
      enabled: true,
      overridePolicy: () => ({
        enabled: false
      })
    }
  }
})], C2.prototype, "isReference", void 0), e([y({
  type: ["show", "hide"]
})], C2.prototype, "listMode", void 0), e([y({
  json: {
    read: true,
    write: true
  }
})], C2.prototype, "blendMode", void 0), e([y()], C2.prototype, "sourceJSON", void 0), e([y({
  readOnly: true,
  json: {
    origins: {
      service: {
        read: {
          source: "currentVersion"
        }
      }
    }
  }
})], C2.prototype, "version", void 0), e([y({
  readOnly: true,
  json: {
    read: false
  }
})], C2.prototype, "type", void 0), e([y({
  type: ["ArcGISTiledImageServiceLayer"]
})], C2.prototype, "operationalLayerType", void 0), e([y({
  type: Boolean,
  value: true,
  json: {
    read: {
      source: "disablePopup",
      reader: (e4, t5) => !t5.disablePopup
    },
    write: {
      target: "disablePopup",
      overridePolicy() {
        return {
          enabled: !this.loaded || "Raster" === this.raster.tileType
        };
      },
      writer(e4, t5, r6) {
        t5[r6] = !e4;
      }
    }
  }
})], C2.prototype, "popupEnabled", void 0), e([y({
  type: k2,
  json: {
    read: {
      source: "popupInfo"
    },
    write: {
      target: "popupInfo",
      overridePolicy() {
        return {
          enabled: !this.loaded || "Raster" === this.raster.tileType
        };
      }
    }
  }
})], C2.prototype, "popupTemplate", void 0), e([y({
  readOnly: true
})], C2.prototype, "defaultPopupTemplate", null), e([y({
  readOnly: true,
  type: [y2]
})], C2.prototype, "fields", void 0), e([y({
  readOnly: true,
  type: [y2]
})], C2.prototype, "rasterFields", null), e([y({
  constructOnly: true
})], C2.prototype, "source", void 0), C2 = e([a2("esri.layers.ImageryTileLayer")], C2);
var M = C2;

export {
  u9 as u,
  M
};
//# sourceMappingURL=chunk-HEHYRC6J.js.map
