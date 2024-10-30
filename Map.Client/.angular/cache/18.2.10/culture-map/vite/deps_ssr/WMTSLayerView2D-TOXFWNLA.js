import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n as n2,
  r as r2
} from "./chunk-ZKG2FGOF.js";
import "./chunk-PTO6XZBI.js";
import {
  i
} from "./chunk-AEJ7YVFP.js";
import {
  f
} from "./chunk-XK5LKXMQ.js";
import "./chunk-74SVQPE6.js";
import {
  y as y2
} from "./chunk-CXYUBZAK.js";
import "./chunk-LUORW76W.js";
import "./chunk-YQ4BFXXY.js";
import "./chunk-BUAHJQUY.js";
import "./chunk-MWR6F5NE.js";
import "./chunk-NLU6ZPOA.js";
import "./chunk-YQDGVKY6.js";
import "./chunk-PAFRRTJD.js";
import "./chunk-A47NS37R.js";
import "./chunk-VOJZD4TW.js";
import "./chunk-6JRLR4LF.js";
import "./chunk-OQI6JU2J.js";
import "./chunk-7PJ3GUSK.js";
import "./chunk-BNFI45VE.js";
import "./chunk-CSA6OEKA.js";
import "./chunk-ZCCDVQ3H.js";
import "./chunk-DDV74AXO.js";
import "./chunk-37RAJ54N.js";
import {
  m,
  r
} from "./chunk-RVAIZQSS.js";
import {
  h
} from "./chunk-I6EZE7ZH.js";
import "./chunk-VM4DYPO2.js";
import "./chunk-PXFPCKFW.js";
import "./chunk-RAYFUCRQ.js";
import "./chunk-ONQZSDXQ.js";
import "./chunk-FWYSNIVU.js";
import "./chunk-MDEPINSI.js";
import "./chunk-SKOGSS6Z.js";
import "./chunk-WS7U2AGS.js";
import "./chunk-U4NXHH3L.js";
import {
  e as e2
} from "./chunk-J7FRIDYV.js";
import "./chunk-QWE4DSVN.js";
import "./chunk-2LHHRVKS.js";
import "./chunk-QATJRB5Q.js";
import "./chunk-7Z4UWMRU.js";
import "./chunk-IQEF4U4C.js";
import "./chunk-NOBDTR4N.js";
import "./chunk-5RF6XDV4.js";
import "./chunk-Q47GASPN.js";
import "./chunk-YEB36ZCF.js";
import "./chunk-KINQ7OJ3.js";
import "./chunk-KYLW5XXS.js";
import "./chunk-B76NC7GX.js";
import "./chunk-HFXXFWYN.js";
import "./chunk-QRWQ6QBB.js";
import "./chunk-X5QZGB37.js";
import "./chunk-3XHDZQO5.js";
import "./chunk-2BLQXT54.js";
import "./chunk-JSWVKNBA.js";
import "./chunk-NHYYZMJR.js";
import "./chunk-BZHHBBFX.js";
import "./chunk-A2FDYA6M.js";
import "./chunk-VOOO6FU5.js";
import "./chunk-KUBMHTYA.js";
import "./chunk-NXXQ35YM.js";
import "./chunk-MVS2BECH.js";
import "./chunk-ASCK5HJ5.js";
import "./chunk-ZT7V2AVD.js";
import "./chunk-KOI252FF.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-VYTPFEL2.js";
import "./chunk-RLGDH6IY.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-66YQWHHE.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import {
  G
} from "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import "./chunk-G73HQZEL.js";
import "./chunk-LZSLQ24Q.js";
import "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import "./chunk-NXK752PZ.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import {
  b
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=WMTSLayerView2D-TOXFWNLA.js.map
