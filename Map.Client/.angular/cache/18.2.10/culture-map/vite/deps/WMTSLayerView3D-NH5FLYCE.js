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
  i
} from "./chunk-UQMQLPLV.js";
import {
  y as y2
} from "./chunk-5JJ6GBOU.js";
import "./chunk-D3AKDIJC.js";
import "./chunk-PVO5NM6Q.js";
import "./chunk-N3IR233K.js";
import "./chunk-KKD7A2GN.js";
import "./chunk-CRNUMTSV.js";
import {
  M
} from "./chunk-JM7HAEY6.js";
import "./chunk-LJEOBI2I.js";
import "./chunk-2OMCGIU4.js";
import "./chunk-DOK4SACJ.js";
import "./chunk-UPDWQH75.js";
import "./chunk-HT2T6PUB.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
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
  w
} from "./chunk-6WHTZNUH.js";
import {
  V
} from "./chunk-EITGQLII.js";
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
  n2 as n
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/WMTSLayerView3D.js
var d = class extends i(p(l(y2))) {
  constructor() {
    super(...arguments), this.type = "wmts-3d";
  }
  initialize() {
    this._getCompatibleTileInfoMatrixSet((e3) => this._getTileInfoSupportError(e3.tileInfo, e3.fullExtent));
    const e2 = w(() => this.view?.basemapTerrain?.tilingSchemeLocked).then(() => {
      const e3 = this._getCompatibleTileInfoMatrixSet((e4) => this._getTileInfoError(e4.tileInfo, e4.fullExtent));
      null != e3 && (null !== e3.id && this.layer.activeLayer.tileMatrixSetId !== e3.id && (this.layer.activeLayer.tileMatrixSetId = e3.id), e3.tileInfo && (this.tileInfo = e3.tileInfo), this.layer.fullExtent = e3.fullExtent);
    });
    this.addResolvingPromise(e2), this.when(() => this._postInitialize());
  }
  refresh() {
    this.emit("data-changed");
  }
  canResume() {
    if (!super.canResume()) return false;
    const e2 = this.layer.activeLayer.tileMatrixSet;
    return null != e2 && !this._getTileInfoError(e2.tileInfo, e2.fullExtent);
  }
  fetchTile(e2, t) {
    return __async(this, null, function* () {
      return i2(this, e2, t);
    });
  }
  doRefresh() {
    return __async(this, null, function* () {
      this.suspended || this.emit("data-changed");
    });
  }
  _postInitialize() {
    this._updatingHandles.add(() => this.layer?.activeLayer?.styleId, () => this.refresh()), this._updatingHandles.add(() => this.layer?.activeLayer, (e2) => {
      const t = this._getCompatibleTileInfoMatrixSet((e3) => this._getTileInfoError(e3.tileInfo, e3.fullExtent), true);
      t && null != t.id && e2.tileMatrixSetId !== t.id && (this.layer.activeLayer.tileMatrixSetId = t.id), this.notifyChange("suspended"), this.canResume() && this.refresh();
    });
  }
  _getCompatibleTileInfoMatrixSet(e2, r = false) {
    const s = M(this.layer);
    if (null != s) {
      if (V.isCollection(s)) {
        const t = s.find((t2) => {
          const s2 = e2(t2);
          return null != s2 && (r ? n.getLogger(this).error("The selected tile matrix set is not compatible with the view", s2) : this.addResolvingPromise(Promise.reject(s2))), null == s2;
        });
        return t;
      }
      const o = e2(s);
      return null != o && (r ? n.getLogger(this).error("The selected tile matrix set is not compatible with the view", o) : this.addResolvingPromise(Promise.reject(o))), s;
    }
    return null;
  }
  _getTileInfoError(e2, t) {
    return this._getTileInfoSupportError(e2, t) || this._getTileInfoCompatibilityError(e2, this.view.basemapTerrain.tilingScheme);
  }
};
e([y()], d.prototype, "layer", void 0), e([y()], d.prototype, "suspended", void 0), e([y()], d.prototype, "tileInfo", void 0), d = e([a("esri.views.3d.layers.WMTSLayerView3D")], d);
var m = d;
export {
  m as default
};
//# sourceMappingURL=WMTSLayerView3D-NH5FLYCE.js.map
