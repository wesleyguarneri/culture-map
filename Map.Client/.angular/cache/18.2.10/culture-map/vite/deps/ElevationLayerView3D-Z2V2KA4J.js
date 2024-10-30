import {
  p
} from "./chunk-GP22YFQD.js";
import {
  M,
  l
} from "./chunk-XVR4FEAF.js";
import "./chunk-NLEBYD5G.js";
import "./chunk-MOCGEINB.js";
import "./chunk-NSSWLGUQ.js";
import {
  l as l2
} from "./chunk-CITBGG5A.js";
import "./chunk-6HTAUV5K.js";
import {
  y as y2
} from "./chunk-5JJ6GBOU.js";
import "./chunk-D3AKDIJC.js";
import {
  a as a2,
  s as s2
} from "./chunk-Q77FSDLB.js";
import "./chunk-Y37SHKPH.js";
import "./chunk-PVO5NM6Q.js";
import "./chunk-N3IR233K.js";
import "./chunk-5YIMTGEC.js";
import "./chunk-6XGV55XZ.js";
import "./chunk-HOH445RO.js";
import "./chunk-KKD7A2GN.js";
import "./chunk-CRNUMTSV.js";
import "./chunk-JM7HAEY6.js";
import "./chunk-LJEOBI2I.js";
import "./chunk-2OMCGIU4.js";
import "./chunk-HT2T6PUB.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-U2ZVAEKG.js";
import "./chunk-EDSMXTFO.js";
import "./chunk-MNLT652N.js";
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
import {
  c2 as c
} from "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import {
  t
} from "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

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
//# sourceMappingURL=ElevationLayerView3D-Z2V2KA4J.js.map
