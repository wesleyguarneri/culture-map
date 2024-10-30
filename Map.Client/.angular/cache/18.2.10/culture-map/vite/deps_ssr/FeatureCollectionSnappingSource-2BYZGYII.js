import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i as i2,
  o
} from "./chunk-LRC2VZON.js";
import "./chunk-2KWC6XPV.js";
import {
  t
} from "./chunk-6NBMJUQX.js";
import "./chunk-WXECQAUG.js";
import "./chunk-RFURERTV.js";
import "./chunk-CATQ6UZ5.js";
import {
  j,
  y as y3
} from "./chunk-MIWJLMUG.js";
import "./chunk-MDOKECP3.js";
import "./chunk-IVVINOEJ.js";
import "./chunk-DUSY4H5O.js";
import "./chunk-XUM2DDAI.js";
import "./chunk-JRL65HQ7.js";
import "./chunk-62PN4TEW.js";
import "./chunk-OPXEKSUB.js";
import "./chunk-B76NC7GX.js";
import {
  i,
  n,
  r
} from "./chunk-FK5JVO4B.js";
import "./chunk-QRWQ6QBB.js";
import {
  y as y2
} from "./chunk-ZSJNH2BT.js";
import "./chunk-XP2AJZUL.js";
import "./chunk-L6FG3WIC.js";
import "./chunk-6ZLH7XBS.js";
import "./chunk-44ZUWZXU.js";
import "./chunk-NHYYZMJR.js";
import "./chunk-2TNGEJGS.js";
import "./chunk-OYGNGIHQ.js";
import "./chunk-GSG4T2KM.js";
import "./chunk-BZHHBBFX.js";
import "./chunk-YGAXDKHF.js";
import "./chunk-4TOSJLKR.js";
import "./chunk-ORYC4PVJ.js";
import "./chunk-DXIKKLD7.js";
import "./chunk-VQNXE43R.js";
import "./chunk-VZ37C3ID.js";
import "./chunk-BKSTWG4S.js";
import "./chunk-FSG7HOZQ.js";
import "./chunk-Q5TIVVER.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-VSQZQLTQ.js";
import "./chunk-K43CZ3M5.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-2EJFYNM7.js";
import "./chunk-DC5LRNPY.js";
import "./chunk-5X5U7R6O.js";
import "./chunk-C2OXE4NQ.js";
import "./chunk-KOI252FF.js";
import "./chunk-5EGQYY2H.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
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
import {
  P,
  d,
  v
} from "./chunk-LZSLQ24Q.js";
import "./chunk-U3RHUXYK.js";
import "./chunk-7DBI6LQG.js";
import "./chunk-AUUN7RFQ.js";
import "./chunk-JAMSDYD6.js";
import "./chunk-PH6NPTP7.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  S
} from "./chunk-NXK752PZ.js";
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
  h,
  s
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/interactive/snapping/featureSources/FeatureCollectionSnappingSource.js
var S2 = class extends S {
  get availability() {
    return 1;
  }
  get updating() {
    return this.layerSource.updating;
  }
  get _snappingElevationAligner() {
    const {
      view: e2
    } = this, {
      layer: t2
    } = this.layerSource, i3 = null != e2 && "3d" === e2.type;
    if (!i3 || "subtype-group" === t2.type) return i();
    const n2 = (i4, n3) => __async(this, null, function* () {
      return (yield h(e2.whenLayerView(t2), n3)).elevationAlignPointsInFeatures(i4, n3);
    });
    return i(i3, {
      elevationInfo: t2.elevationInfo,
      alignPointsInFeatures: n2
    });
  }
  get _snappingElevationFilter() {
    const {
      view: e2
    } = this, t2 = null != e2 && "3d" === e2.type && "subtype-group" !== this.layerSource.layer.type;
    return r(t2);
  }
  get _symbologySnappingFetcher() {
    const {
      view: e2
    } = this, {
      layer: t2
    } = this.layerSource;
    return null != e2 && "3d" === e2.type && "subtype-group" !== t2.type ? n(this._symbologySnappingSupported, (i3, o2) => __async(this, null, function* () {
      const r2 = yield e2.whenLayerView(t2);
      return s(o2), r2.queryForSymbologySnapping({
        candidates: i3,
        spatialReference: e2.spatialReference
      }, o2);
    })) : n();
  }
  get _symbologySnappingSupported() {
    return null != this._layerView3D && this._layerView3D.symbologySnappingSupported;
  }
  initialize() {
    const {
      view: e2
    } = this, {
      layer: t2
    } = this.layerSource;
    null != e2 && "3d" === e2.type && "subtype-group" !== t2.type && (e2.whenLayerView(t2).then((e3) => this._layerView3D = e3), this.addHandles([e2.elevationProvider.on("elevation-change", ({
      context: e3
    }) => {
      const {
        elevationInfo: i3
      } = t2;
      y2(e3, i3) && this._snappingElevationAligner.notifyElevationSourceChange();
    }), d(() => t2.elevationInfo, () => this._snappingElevationAligner.notifyElevationSourceChange(), P), d(() => null != this._layerView3D ? this._layerView3D.layer?.renderer : null, () => this._symbologySnappingFetcher.notifySymbologyChange(), P), v(() => this._layerView3D?.layer, ["edits", "apply-edits", "graphic-update"], () => this._symbologySnappingFetcher.notifySymbologyChange())]));
  }
  constructor(e2) {
    super(e2), this.view = null, this._layerView3D = null, this._memoizedMakeGetGroundElevation = t(i2);
  }
  refresh() {
  }
  fetchCandidates(e2, t2) {
    return __async(this, null, function* () {
      const {
        layer: i3
      } = this.layerSource, o2 = i3.source;
      if (!o2?.querySnapping) return [];
      const r2 = j(i3), a2 = y3(e2, this.view?.type ?? "2d", r2), s2 = yield o2.querySnapping(a2, {
        signal: t2
      });
      s(t2);
      const p = e2.coordinateHelper.spatialReference, l = yield this._snappingElevationAligner.alignCandidates(s2.candidates, p, t2);
      s(t2);
      const y4 = yield this._symbologySnappingFetcher.fetch(l, t2);
      s(t2);
      const h2 = 0 === y4.length ? l : [...l, ...y4], m = this._snappingElevationFilter.filter(a2, h2), d2 = this._memoizedMakeGetGroundElevation(this.view, p);
      return m.map((e3) => o(e3, d2));
    });
  }
};
e([y({
  constructOnly: true
})], S2.prototype, "layerSource", void 0), e([y({
  constructOnly: true
})], S2.prototype, "view", void 0), e([y()], S2.prototype, "_snappingElevationAligner", null), e([y()], S2.prototype, "_snappingElevationFilter", null), e([y()], S2.prototype, "_symbologySnappingFetcher", null), e([y()], S2.prototype, "_layerView3D", void 0), e([y()], S2.prototype, "_symbologySnappingSupported", null), S2 = e([a("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")], S2);
export {
  S2 as FeatureCollectionSnappingSource
};
//# sourceMappingURL=FeatureCollectionSnappingSource-2BYZGYII.js.map
