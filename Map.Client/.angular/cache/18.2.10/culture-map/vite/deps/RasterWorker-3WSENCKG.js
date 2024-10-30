import {
  S,
  a as a2,
  c,
  y
} from "./chunk-GOKHH3SD.js";
import {
  M,
  T,
  ee
} from "./chunk-6E7LFKP2.js";
import {
  L2 as L,
  h2 as h,
  j,
  m3 as m
} from "./chunk-2AV27Q4X.js";
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
} from "./chunk-3HU4B6P4.js";
import "./chunk-5AUX2A3J.js";
import "./chunk-U74WRHVJ.js";
import "./chunk-TCPN7AEH.js";
import "./chunk-PFMGJTQM.js";
import "./chunk-DWASPXVI.js";
import "./chunk-IMVP5ADD.js";
import "./chunk-H7WPOTQH.js";
import {
  s
} from "./chunk-DUTZNK67.js";
import "./chunk-IN6BQCWS.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-K226GFDN.js";
import {
  o
} from "./chunk-4ZZRP4MA.js";
import "./chunk-FPFZQCEQ.js";
import "./chunk-OGZAGPIO.js";
import "./chunk-HJJIIYFF.js";
import "./chunk-7RMVJCDW.js";
import "./chunk-T6GCUITX.js";
import "./chunk-TUIGM7TV.js";
import "./chunk-IHVSZYZS.js";
import "./chunk-6CA6K3O7.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  _
} from "./chunk-O7UDKFOW.js";
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
import "./chunk-BXQGM56A.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=RasterWorker-3WSENCKG.js.map
