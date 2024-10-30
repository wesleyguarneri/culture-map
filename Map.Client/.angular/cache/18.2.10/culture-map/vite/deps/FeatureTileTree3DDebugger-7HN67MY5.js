import {
  d
} from "./chunk-DFCSCNHQ.js";
import {
  h
} from "./chunk-PVO5NM6Q.js";
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
import "./chunk-HT2T6PUB.js";
import "./chunk-6EUVKE22.js";
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
import {
  j
} from "./chunk-T6GCUITX.js";
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
  P
} from "./chunk-6WHTZNUH.js";
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
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/support/FeatureTileTree3DDebugger.js
var p = class extends d {
  get updating() {
    return this._watchUpdatingTracking?.updating ?? false;
  }
  constructor(t) {
    super(t), this._watchUpdatingTracking = new h();
  }
  initialize() {
    const {
      featureTiles: t
    } = this.view;
    this.addHandles(t.addClient()), this._watchUpdatingTracking.addOnCollectionChange(() => t?.tiles, () => this.update(), P);
  }
  destroy() {
    this._watchUpdatingTracking.destroy();
  }
  getTiles() {
    const t = (t2) => {
      const [e2, r, o] = t2.lij;
      return j.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(e2, r, o));
    };
    return this.view.featureTiles.tiles.toArray().sort((t2, e2) => t2.loadPriority - e2.loadPriority).map((e2) => __spreadProps(__spreadValues({}, e2), {
      geometry: t(e2)
    }));
  }
};
e([y()], p.prototype, "_watchUpdatingTracking", void 0), e([y()], p.prototype, "updating", null), e([y()], p.prototype, "view", void 0), p = e([a("esri.views.3d.layers.support.FeatureTileTree3DDebugger")], p);
export {
  p as FeatureTileTree3DDebugger
};
//# sourceMappingURL=FeatureTileTree3DDebugger-7HN67MY5.js.map
