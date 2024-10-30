import {
  i as i2
} from "./chunk-PJJV2PW7.js";
import {
  p
} from "./chunk-GP22YFQD.js";
import "./chunk-XVR4FEAF.js";
import "./chunk-NLEBYD5G.js";
import "./chunk-MOCGEINB.js";
import "./chunk-NSSWLGUQ.js";
import {
  l
} from "./chunk-CITBGG5A.js";
import "./chunk-6HTAUV5K.js";
import {
  U,
  _
} from "./chunk-HVCRHT2K.js";
import {
  r
} from "./chunk-WTF7K3GK.js";
import {
  i
} from "./chunk-UQMQLPLV.js";
import {
  y as y2
} from "./chunk-5JJ6GBOU.js";
import "./chunk-D3AKDIJC.js";
import "./chunk-5NCKEQLF.js";
import "./chunk-ATQ5GYTB.js";
import "./chunk-TF6BJDRY.js";
import "./chunk-PVO5NM6Q.js";
import "./chunk-Z3GMSC63.js";
import "./chunk-F35MWZH7.js";
import "./chunk-ED7UGR2X.js";
import "./chunk-YA5CTHMT.js";
import "./chunk-2N3BR7QT.js";
import "./chunk-N3IR233K.js";
import "./chunk-KKD7A2GN.js";
import "./chunk-HD65DNIO.js";
import "./chunk-4KWLMXIA.js";
import "./chunk-BIUXKPKA.js";
import "./chunk-634JLXD4.js";
import "./chunk-Y3EDGYWG.js";
import "./chunk-UF6JOUSJ.js";
import "./chunk-T5JGQSO3.js";
import "./chunk-CIW3KHOW.js";
import "./chunk-J55F4AC2.js";
import "./chunk-IQLBZKUD.js";
import "./chunk-7MZZCQ64.js";
import "./chunk-6A7CWJED.js";
import {
  J
} from "./chunk-DUTZNK67.js";
import "./chunk-IN6BQCWS.js";
import "./chunk-CRNUMTSV.js";
import "./chunk-JM7HAEY6.js";
import "./chunk-LJEOBI2I.js";
import "./chunk-2OMCGIU4.js";
import "./chunk-DOK4SACJ.js";
import "./chunk-UPDWQH75.js";
import "./chunk-DR5TVNEL.js";
import "./chunk-HT2T6PUB.js";
import "./chunk-6EUVKE22.js";
import "./chunk-OKJHJ3CY.js";
import "./chunk-DTUSTSEJ.js";
import "./chunk-JCWFGRHQ.js";
import "./chunk-JILEJ6R2.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-DZALMCYL.js";
import "./chunk-K226GFDN.js";
import "./chunk-4ZZRP4MA.js";
import "./chunk-7ZJ6P7J7.js";
import "./chunk-FPFZQCEQ.js";
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-7XMEZQ34.js";
import "./chunk-BDM2D6IC.js";
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
import "./chunk-OGZAGPIO.js";
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
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/TileLayerView3D.js
var c = class extends i(p(l(y2))) {
  constructor() {
    super(...arguments), this.type = "tile-3d", this._popupHighlightHelper = null;
  }
  get imageFormatIsOpaque() {
    return "jpg" === this.layer.tileInfo.format;
  }
  get hasMixedImageFormats() {
    return "mixed" === this.layer.tileInfo.format;
  }
  get tileInfo() {
    return this.layer.tileInfo;
  }
  initialize() {
    if ("web-tile" === this.layer.type) {
      const e2 = this.layer.fullExtent?.spatialReference, r2 = this.layer.tileInfo?.spatialReference;
      if (null == e2 || null == r2 || !J(e2, r2)) {
        const e3 = "defaults" === this.layer.originOf("fullExtent") || null == this.layer.fullExtent ? "SceneView requires fullExtent to be specified by the user on WebTileLayer" : "SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";
        this.addResolvingPromise(Promise.reject(new s("layerview:incompatible-fullextent", e3)));
      }
    }
    U(this, this.layer) && (this._popupHighlightHelper = new _({
      createFetchPopupFeaturesQueryGeometry: (e2, t) => r(e2, t, this.view),
      layerView: this,
      updatingHandles: this._updatingHandles
    })), this._addTilingSchemeMatchPromise();
  }
  destroy() {
    this._popupHighlightHelper?.destroy();
  }
  fetchTile(e2, t) {
    return __async(this, null, function* () {
      return i2(this, e2, t);
    });
  }
  fetchPopupFeaturesAtLocation(e2, t) {
    return __async(this, null, function* () {
      return this._popupHighlightHelper?.fetchPopupFeaturesAtLocation(e2, t) ?? [];
    });
  }
  doRefresh() {
    return __async(this, null, function* () {
      this.suspended || this.emit("data-changed");
    });
  }
};
e([y()], c.prototype, "imageFormatIsOpaque", null), e([y()], c.prototype, "hasMixedImageFormats", null), e([y()], c.prototype, "layer", void 0), e([y()], c.prototype, "tileInfo", null), c = e([a("esri.views.3d.layers.TileLayerView3D")], c);
var f = c;
export {
  f as default
};
//# sourceMappingURL=TileLayerView3D-O27TWJAR.js.map
