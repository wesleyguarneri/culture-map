import {
  n as n2,
  r as r2
} from "./chunk-ZH66HGKS.js";
import "./chunk-MFKZR4D2.js";
import {
  i
} from "./chunk-UQMQLPLV.js";
import {
  f
} from "./chunk-4HCKDN6K.js";
import "./chunk-ONOVFOVG.js";
import {
  y as y2
} from "./chunk-5JJ6GBOU.js";
import "./chunk-EYUDXMUG.js";
import "./chunk-GQOLRPFL.js";
import "./chunk-OICO7AS6.js";
import "./chunk-WSWHLWMU.js";
import "./chunk-R3AQ3TGL.js";
import "./chunk-B6VSQC7C.js";
import "./chunk-BLE2CCDD.js";
import "./chunk-PAFFV5BJ.js";
import "./chunk-Q645EYZX.js";
import "./chunk-6QDMUFEM.js";
import "./chunk-T3454WZK.js";
import "./chunk-LZ6MXOBD.js";
import "./chunk-HSB7FBE7.js";
import "./chunk-6YA72G7G.js";
import "./chunk-D3AKDIJC.js";
import "./chunk-3PCYF7PE.js";
import "./chunk-MPUFKSB2.js";
import {
  m,
  r
} from "./chunk-FICJP6TJ.js";
import {
  h
} from "./chunk-ON42KCSZ.js";
import "./chunk-EMZQT2MP.js";
import "./chunk-PUH7YYDT.js";
import "./chunk-5JFTHL5W.js";
import "./chunk-KUYTX4V6.js";
import "./chunk-EXODD7PD.js";
import "./chunk-C7VF4AR2.js";
import "./chunk-4HODTCAO.js";
import "./chunk-EK3IKAMF.js";
import "./chunk-IJVN5N2Q.js";
import {
  e as e2
} from "./chunk-3NGDRCQI.js";
import "./chunk-TVUZAYCE.js";
import "./chunk-JCWQ2LOQ.js";
import "./chunk-P7OSFLIX.js";
import "./chunk-ZDC4PV4Y.js";
import "./chunk-O7ZVERIH.js";
import "./chunk-R4DKV4UN.js";
import "./chunk-SNHPS7NU.js";
import "./chunk-L3F4XA4B.js";
import "./chunk-DLRYNII2.js";
import "./chunk-6HBAAUBO.js";
import "./chunk-YLE5AYZV.js";
import "./chunk-VS26W5Y5.js";
import "./chunk-PVO5NM6Q.js";
import "./chunk-DM4WHMQY.js";
import "./chunk-C7NRYPDG.js";
import "./chunk-4QBFFLOC.js";
import "./chunk-O437BSYE.js";
import "./chunk-YZNT6QWD.js";
import "./chunk-HOH445RO.js";
import "./chunk-DY7FJHTG.js";
import "./chunk-JYODC3YQ.js";
import "./chunk-J55F4AC2.js";
import "./chunk-6A7CWJED.js";
import "./chunk-D2NB6D6N.js";
import "./chunk-HT2T6PUB.js";
import "./chunk-A3NNJ7XA.js";
import "./chunk-XTVPEVHA.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-K226GFDN.js";
import "./chunk-7ZJ6P7J7.js";
import "./chunk-FPFZQCEQ.js";
import "./chunk-EDSMXTFO.js";
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
import {
  G
} from "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import "./chunk-V6AMQYXE.js";
import "./chunk-6WHTZNUH.js";
import "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import "./chunk-IRGZKO7V.js";
import "./chunk-5SELS7VU.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import {
  b
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/2d/layers/WMTSLayerView2D.js
var m2 = /* @__PURE__ */ new Set([102113, 102100, 3857, 3785, 900913]);
var y3 = [0, 0];
var _ = class extends i(r2(f(y2))) {
  constructor() {
    super(...arguments), this._tileStrategy = null, this._fetchQueue = null, this.layer = null;
  }
  get tileMatrixSet() {
    const e3 = this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);
    return e3 ? (e3.id !== this.layer.activeLayer.tileMatrixSetId && (this.layer.activeLayer.tileMatrixSetId = e3.id), e3) : null;
  }
  update(e3) {
    this._fetchQueue.pause(), this._fetchQueue.state = e3.state, this._tileStrategy.update(e3), this._fetchQueue.resume();
  }
  attach() {
    const e3 = this.tileMatrixSet?.tileInfo;
    e3 && (this._tileInfoView = new h(e3), this._fetchQueue = new m({
      tileInfoView: this._tileInfoView,
      concurrency: 16,
      process: (e4, t) => this.fetchTile(e4, t)
    }), this._tileStrategy = new r({
      cachePolicy: "keep",
      resampling: true,
      acquireTile: (e4) => this.acquireTile(e4),
      releaseTile: (e4) => this.releaseTile(e4),
      tileInfoView: this._tileInfoView
    }), this.addAttachHandles(this._updatingHandles.add(() => [this.layer?.activeLayer?.styleId, this.tileMatrixSet], () => this.doRefresh())), super.attach());
  }
  detach() {
    super.detach(), this._tileStrategy?.destroy(), this._fetchQueue?.destroy(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(e3) {
    return this.layer.activeLayer.tileMatrixSets?.some((t) => G(t.tileInfo?.spatialReference, e3)) ?? false;
  }
  doRefresh() {
    return __async(this, null, function* () {
      if (this.attached) {
        if (this.suspended) return this._tileStrategy.clear(), void this.requestUpdate();
        this._fetchQueue.reset(), this._tileStrategy.refresh((e3) => this._updatingHandles.addPromise(this._enqueueTileFetch(e3)));
      }
    });
  }
  acquireTile(e3) {
    const t = this._bitmapView.createTile(e3), i2 = t.bitmap;
    return [i2.x, i2.y] = this._tileInfoView.getTileCoords(y3, t.key), i2.resolution = this._tileInfoView.getTileResolution(t.key), [i2.width, i2.height] = this._tileInfoView.tileInfo.size, this._updatingHandles.addPromise(this._enqueueTileFetch(t)), this._bitmapView.addChild(t), this.requestUpdate(), t;
  }
  releaseTile(e3) {
    this._fetchQueue.abort(e3.key.id), this._bitmapView.removeChild(e3), e3.once("detach", () => e3.destroy()), this.requestUpdate();
  }
  fetchTile(_0) {
    return __async(this, arguments, function* (e3, t = {}) {
      const s = "tilemapCache" in this.layer ? this.layer.tilemapCache : null, {
        signal: r3,
        resamplingLevel: a2 = 0
      } = t;
      if (!s) return this._fetchImage(e3, r3);
      const l = new e2(0, 0, 0, 0);
      let o;
      try {
        yield s.fetchAvailabilityUpsample(e3.level, e3.row, e3.col, l, {
          signal: r3
        }), o = yield this._fetchImage(l, r3);
      } catch (n3) {
        if (b(n3)) throw n3;
        if (a2 < 3) {
          const i2 = this._tileInfoView.getTileParentId(e3.id);
          if (i2) {
            const s2 = new e2(i2), r4 = yield this.fetchTile(s2, __spreadProps(__spreadValues({}, t), {
              resamplingLevel: a2 + 1
            }));
            return n2(this._tileInfoView, r4, s2, e3);
          }
        }
        throw n3;
      }
      return n2(this._tileInfoView, o, l, e3);
    });
  }
  canResume() {
    const e3 = super.canResume();
    return e3 ? null !== this.tileMatrixSet : e3;
  }
  _enqueueTileFetch(e3) {
    return __async(this, null, function* () {
      if (!this._fetchQueue.has(e3.key.id)) {
        try {
          const t = yield this._fetchQueue.push(e3.key);
          e3.bitmap.source = t, e3.bitmap.width = this._tileInfoView.tileInfo.size[0], e3.bitmap.height = this._tileInfoView.tileInfo.size[1], e3.once("attach", () => this.requestUpdate());
        } catch (s) {
          b(s) || n.getLogger(this).error(s);
        }
        this.requestUpdate();
      }
    });
  }
  _fetchImage(e3, t) {
    return __async(this, null, function* () {
      return this.layer.fetchImageBitmapTile(e3.level, e3.row, e3.col, {
        signal: t
      });
    });
  }
  _getTileMatrixSetBySpatialReference(e3) {
    const t = this.view.spatialReference;
    if (!e3.tileMatrixSets) return null;
    let i2 = e3.tileMatrixSets.find((e4) => G(e4.tileInfo?.spatialReference, t));
    return !i2 && t.isWebMercator && (i2 = e3.tileMatrixSets.find((e4) => m2.has(e4.tileInfo?.spatialReference.wkid ?? -1))), i2;
  }
};
e([y({
  readOnly: true
})], _.prototype, "tileMatrixSet", null), _ = e([a("esri.views.2d.layers.WMTSLayerView2D")], _);
var w = _;
export {
  w as default
};
//# sourceMappingURL=WMTSLayerView2D-YETCZDA5.js.map
