import {
  i as i2,
  o
} from "./chunk-HS4TEGJW.js";
import "./chunk-GHN4GWVN.js";
import {
  t
} from "./chunk-P3B4Y6UN.js";
import "./chunk-5QM72RFD.js";
import "./chunk-TJIA4U42.js";
import "./chunk-WQXGIEVZ.js";
import {
  j,
  y as y3
} from "./chunk-T3EGKTN6.js";
import "./chunk-ZFPMGEAK.js";
import "./chunk-4SCJM64G.js";
import "./chunk-DABQKFI5.js";
import "./chunk-67V5AGVJ.js";
import "./chunk-2ERGO64O.js";
import "./chunk-RP2GKJCD.js";
import "./chunk-QL5HR3YL.js";
import "./chunk-VS26W5Y5.js";
import {
  i,
  n,
  r
} from "./chunk-QFQHRGZH.js";
import "./chunk-DM4WHMQY.js";
import {
  y as y2
} from "./chunk-6MR4UDDL.js";
import "./chunk-O2DTA3XK.js";
import "./chunk-ZE47C44H.js";
import "./chunk-5GIS2C3K.js";
import "./chunk-XCOHDMBF.js";
import "./chunk-HOH445RO.js";
import "./chunk-N4KQPPPI.js";
import "./chunk-4OGGMTIH.js";
import "./chunk-NQVBBKAN.js";
import "./chunk-DY7FJHTG.js";
import "./chunk-BQZBOYBD.js";
import "./chunk-TYQXPPSP.js";
import "./chunk-TRSGUVSM.js";
import "./chunk-U3MA63JX.js";
import "./chunk-WYKKCLBI.js";
import "./chunk-PFMGJTQM.js";
import "./chunk-PQ4T66BG.js";
import "./chunk-SWPHGZYB.js";
import "./chunk-DWASPXVI.js";
import "./chunk-CIW3KHOW.js";
import "./chunk-IMVP5ADD.js";
import "./chunk-H7WPOTQH.js";
import "./chunk-3RRMLFFN.js";
import "./chunk-DR5TVNEL.js";
import "./chunk-K64AAM77.js";
import "./chunk-OKJHJ3CY.js";
import "./chunk-XTVPEVHA.js";
import "./chunk-JCWFGRHQ.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-4ZZRP4MA.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-MNLT652N.js";
import "./chunk-HJJIIYFF.js";
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
import {
  P,
  d,
  v
} from "./chunk-6WHTZNUH.js";
import "./chunk-EITGQLII.js";
import "./chunk-TIVJXVMN.js";
import "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
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
  h,
  s
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=FeatureCollectionSnappingSource-A7WUBXXF.js.map
