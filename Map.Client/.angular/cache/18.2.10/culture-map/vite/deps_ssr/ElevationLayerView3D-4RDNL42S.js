import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  p
} from "./chunk-IOZX2TXW.js";
import {
  M,
  l
} from "./chunk-QJ4KFDZU.js";
import "./chunk-C22SF7N4.js";
import "./chunk-J53R4G62.js";
import "./chunk-R7WTJU3N.js";
import {
  l as l2
} from "./chunk-ECUSUVZM.js";
import "./chunk-CQIKG7VH.js";
import {
  y as y2
} from "./chunk-CXYUBZAK.js";
import "./chunk-LUORW76W.js";
import {
  a as a2,
  s as s2
} from "./chunk-RIA56QWL.js";
import "./chunk-C7GHK6X7.js";
import "./chunk-HFXXFWYN.js";
import "./chunk-OOK3QTWF.js";
import "./chunk-VFYCIIDC.js";
import "./chunk-7QOUHKW5.js";
import "./chunk-NHYYZMJR.js";
import "./chunk-GNCXYHNE.js";
import "./chunk-CXNERL22.js";
import "./chunk-7V4JSBFA.js";
import "./chunk-KAHESDP5.js";
import "./chunk-ONRZ4VTT.js";
import "./chunk-ASCK5HJ5.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
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
  c2 as c
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import {
  t
} from "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/ElevationLayerView3D.js
var h = class extends p(l2(y2)) {
  constructor() {
    super(...arguments), this.type = "elevation-3d";
  }
  get tileInfo() {
    return this.layer.tileInfo;
  }
  initialize() {
    const e2 = this.view, o = e2.map?.allLayers, t2 = o && o.includes(this.layer), i = e2.map?.ground?.layers, s3 = i && i.includes(this.layer);
    if (t2 && !s3) {
      const e3 = new s("layerview:elevation-layer-only", `3D elevation layer '${this.layer.id}' can only be added to layers in map.ground`);
      this.addResolvingPromise(Promise.reject(e3));
    }
    this._lercDecoder = s2(e2.resourceController), this._addTilingSchemeMatchPromise();
  }
  destroy() {
    this._lercDecoder = t(this._lercDecoder);
  }
  fetchTile(e2, r) {
    return __async(this, null, function* () {
      const t2 = this.layer;
      if (M(t2)) {
        const s4 = yield t2.fetchTile(e2[0], e2[1], e2[2], {
          noDataValue: l,
          signal: r.signal
        });
        return c(r) ? void n.getLogger(this).warnOnce("A call to fetchTile resolved even though the request was aborted. fetchTile should not resolve if options.signal.aborted is true.") : s4;
      }
      const s3 = this.getTileUrl(e2), a3 = yield r.requester.request(s3, "binary", r), n2 = yield this._lercDecoder.decode(a3, {
        noDataValue: l
      }, r.signal);
      if (n2) return new a2(n2);
      throw new Error("LERC decoding failed");
    });
  }
};
e([y()], h.prototype, "layer", void 0), e([y()], h.prototype, "tileInfo", null), h = e([a("esri.views.3d.layers.ElevationLayerView3D")], h);
var f = h;
export {
  f as default
};
//# sourceMappingURL=ElevationLayerView3D-4RDNL42S.js.map
