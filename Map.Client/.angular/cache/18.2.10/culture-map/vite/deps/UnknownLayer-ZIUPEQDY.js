import {
  j
} from "./chunk-SJX5DIA7.js";
import "./chunk-LFKEQKEA.js";
import "./chunk-DUTZNK67.js";
import "./chunk-IN6BQCWS.js";
import "./chunk-JM7HAEY6.js";
import {
  S
} from "./chunk-RXWBJSJ5.js";
import {
  f
} from "./chunk-M2NS3MSU.js";
import "./chunk-DR5TVNEL.js";
import "./chunk-HT2T6PUB.js";
import "./chunk-OKJHJ3CY.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
import "./chunk-FYAEQPUY.js";
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
import "./chunk-XNUH25NY.js";
import "./chunk-WGAPNV7F.js";
import "./chunk-BXQGM56A.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  v
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
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/UnknownLayer.js
var a2 = class extends j(S(f)) {
  constructor(r) {
    super(r), this.resourceInfo = null, this.type = "unknown";
  }
  initialize() {
    this.addResolvingPromise(new Promise((r, e2) => {
      v(() => {
        const r2 = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let s2 = "Unknown layer type";
        r2 && (s2 += " " + r2), e2(new s("layer:unknown-layer-type", s2, {
          layerType: r2
        }));
      });
    }));
  }
  read(r, o) {
    super.read({
      resourceInfo: r
    }, o);
  }
  write(r, o) {
    return null;
  }
};
e([y({
  readOnly: true
})], a2.prototype, "resourceInfo", void 0), e([y({
  type: ["show", "hide"]
})], a2.prototype, "listMode", void 0), e([y({
  json: {
    read: false
  },
  readOnly: true,
  value: "unknown"
})], a2.prototype, "type", void 0), a2 = e([a("esri.layers.UnknownLayer")], a2);
var c = a2;
export {
  c as default
};
//# sourceMappingURL=UnknownLayer-ZIUPEQDY.js.map