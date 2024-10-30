import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i as i2
} from "./chunk-K5IZTR4L.js";
import {
  p
} from "./chunk-IOZX2TXW.js";
import "./chunk-QJ4KFDZU.js";
import "./chunk-C22SF7N4.js";
import "./chunk-J53R4G62.js";
import "./chunk-R7WTJU3N.js";
import {
  l
} from "./chunk-ECUSUVZM.js";
import "./chunk-CQIKG7VH.js";
import {
  i
} from "./chunk-AEJ7YVFP.js";
import {
  y as y2
} from "./chunk-CXYUBZAK.js";
import "./chunk-LUORW76W.js";
import "./chunk-HFXXFWYN.js";
import "./chunk-VFYCIIDC.js";
import "./chunk-GNCXYHNE.js";
import "./chunk-CXNERL22.js";
import {
  M
} from "./chunk-7V4JSBFA.js";
import "./chunk-KAHESDP5.js";
import "./chunk-ONRZ4VTT.js";
import "./chunk-REIMIECM.js";
import "./chunk-NKXXHQDD.js";
import "./chunk-ASCK5HJ5.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-BXONKQKI.js";
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
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import {
  w
} from "./chunk-LZSLQ24Q.js";
import {
  V
} from "./chunk-U3RHUXYK.js";
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
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=WMTSLayerView3D-4B6BLF6R.js.map
