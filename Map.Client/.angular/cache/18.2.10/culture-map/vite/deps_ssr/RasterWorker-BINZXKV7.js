import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  S,
  a as a2,
  c,
  y
} from "./chunk-ENLKSIF3.js";
import {
  M,
  T,
  ee
} from "./chunk-PLQQNSQY.js";
import {
  L2 as L,
  h2 as h,
  j,
  m3 as m
} from "./chunk-IQ72QELA.js";
import {
  D,
  E,
  R,
  U,
  W,
  f2 as f,
  g,
  s2,
  u2 as u
} from "./chunk-SU5BOQUT.js";
import "./chunk-7MWFHTLS.js";
import "./chunk-RR7OQLEK.js";
import "./chunk-NAG6YX7T.js";
import "./chunk-VZ37C3ID.js";
import "./chunk-Q5TIVVER.js";
import "./chunk-KUBMHTYA.js";
import "./chunk-VSQZQLTQ.js";
import "./chunk-K43CZ3M5.js";
import {
  o
} from "./chunk-6EIBUVMG.js";
import {
  s
} from "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-RLGDH6IY.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-66YQWHHE.js";
import "./chunk-QGBMZIP4.js";
import "./chunk-AOEBZVTA.js";
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
import {
  e
} from "./chunk-NUICEVIH.js";
import "./chunk-NXK752PZ.js";
import "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/layers/support/rasterTransforms/IdentityTransform.js
var e2;
var a3 = e2 = class extends a2 {
  constructor() {
    super(...arguments), this.type = "identity";
  }
  clone() {
    return new e2();
  }
};
e([o({
  IdentityXform: "identity"
})], a3.prototype, "type", void 0), a3 = e2 = e([a("esri.layers.support.rasterTransforms.IdentityTransform")], a3);
var p = a3;

// ../../../node_modules/@arcgis/core/layers/support/rasterTransforms/utils.js
var o2 = {
  GCSShiftXform: c,
  IdentityXform: p,
  PolynomialXform: y
};
var e3 = Object.keys(o2);
function i(r) {
  const t = r?.type;
  if (!t) return null;
  const n = o2[r?.type];
  if (n) {
    const t2 = new n();
    return t2.read(r), t2;
  }
  return null;
}

// ../../../node_modules/@arcgis/core/layers/support/RasterWorker.js
var J = class {
  convertVectorFieldData(r) {
    const t = g.fromJSON(r.pixelBlock), s3 = f(t, r.type);
    return Promise.resolve(null != s3 ? s3.toJSON() : null);
  }
  computeStatisticsHistograms(r) {
    const t = g.fromJSON(r.pixelBlock), s3 = m(t);
    return Promise.resolve(s3);
  }
  decode(r) {
    return __async(this, null, function* () {
      const e4 = yield j(r.data, r.options);
      return e4 && e4.toJSON();
    });
  }
  symbolize(r) {
    r.pixelBlock = g.fromJSON(r.pixelBlock), r.extent = r.extent ? w.fromJSON(r.extent) : null;
    const t = this.symbolizer.symbolize(r);
    return Promise.resolve(null != t ? t.toJSON() : null);
  }
  updateSymbolizer(r) {
    return __async(this, null, function* () {
      this.symbolizer = L.fromJSON(r.symbolizerJSON), r.histograms && "rasterStretch" === this.symbolizer?.rendererJSON.type && (this.symbolizer.rendererJSON.histograms = r.histograms);
    });
  }
  updateRasterFunction(r) {
    return __async(this, null, function* () {
      this.rasterFunction = S(r.rasterFunctionJSON);
    });
  }
  process(r) {
    return __async(this, null, function* () {
      const t = this.rasterFunction.process({
        extent: w.fromJSON(r.extent),
        primaryPixelBlocks: r.primaryPixelBlocks.map((r2) => null != r2 ? g.fromJSON(r2) : null),
        primaryPixelSizes: r.primaryPixelSizes?.map((r2) => null != r2 ? _.fromJSON(r2) : null),
        primaryRasterIds: r.primaryRasterIds
      });
      return null != t ? t.toJSON() : null;
    });
  }
  stretch(r) {
    const t = this.symbolizer.simpleStretch(g.fromJSON(r.srcPixelBlock), r.stretchParams);
    return Promise.resolve(t?.toJSON());
  }
  estimateStatisticsHistograms(r) {
    const t = h(g.fromJSON(r.srcPixelBlock));
    return Promise.resolve(t);
  }
  split(r) {
    const t = W(g.fromJSON(r.srcPixelBlock), r.tileSize, r.maximumPyramidLevel ?? 0, false === r.useBilinear);
    return t && t.forEach((r2, e4) => {
      t.set(e4, r2?.toJSON());
    }), Promise.resolve(t);
  }
  clipTile(r) {
    const t = g.fromJSON(r.pixelBlock), s3 = E(__spreadProps(__spreadValues({}, r), {
      pixelBlock: t
    }));
    return Promise.resolve(s3?.toJSON());
  }
  mosaicAndTransform(r) {
    return __async(this, null, function* () {
      const t = r.srcPixelBlocks.map((r2) => r2 ? new g(r2) : null), s3 = U(t, r.srcMosaicSize, {
        blockWidths: r.blockWidths,
        alignmentInfo: r.alignmentInfo,
        clipOffset: r.clipOffset,
        clipSize: r.clipSize
      });
      let o3, l = s3;
      return r.coefs && (l = D(s3, r.destDimension, r.coefs, r.sampleSpacing, r.interpolation)), r.projectDirections && r.gcsGrid && (o3 = R(r.destDimension, r.gcsGrid), l = u(l, r.isUV ? "vector-uv" : "vector-magdir", o3)), {
        pixelBlock: l?.toJSON(),
        localNorthDirections: o3
      };
    });
  }
  createFlowMesh(r, e4) {
    return __async(this, null, function* () {
      const t = {
        data: new Float32Array(r.flowData.buffer),
        mask: new Uint8Array(r.flowData.maskBuffer),
        width: r.flowData.width,
        height: r.flowData.height
      }, {
        vertexData: s3,
        indexData: o3
      } = yield s2(r.meshType, r.simulationSettings, t, e4.signal);
      return {
        result: {
          vertexBuffer: s3.buffer,
          indexBuffer: o3.buffer
        },
        transferList: [s3.buffer, o3.buffer]
      };
    });
  }
  getProjectionOffsetGrid(e4) {
    return __async(this, null, function* () {
      const t = w.fromJSON(e4.projectedExtent), s3 = w.fromJSON(e4.srcBufferExtent);
      let o3 = null;
      e4.datumTransformationSteps && (o3 = new s({
        steps: e4.datumTransformationSteps
      })), (e4.includeGCSGrid || M(t.spatialReference, s3.spatialReference, o3)) && (yield T());
      const i2 = e4.rasterTransform ? i(e4.rasterTransform) : null;
      return ee(__spreadProps(__spreadValues({}, e4), {
        projectedExtent: t,
        srcBufferExtent: s3,
        datumTransformation: o3,
        rasterTransform: i2
      }));
    });
  }
};
export {
  J as default
};
//# sourceMappingURL=RasterWorker-BINZXKV7.js.map
