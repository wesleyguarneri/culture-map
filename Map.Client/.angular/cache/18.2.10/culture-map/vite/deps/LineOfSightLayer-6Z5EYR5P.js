import {
  v
} from "./chunk-EVI3CYZC.js";
import {
  f as f2,
  u
} from "./chunk-JDVPMYNU.js";
import "./chunk-6PFH6TN3.js";
import "./chunk-Q7ENCKPJ.js";
import "./chunk-CQRPND5N.js";
import "./chunk-6MR4UDDL.js";
import "./chunk-KQDYTHCF.js";
import "./chunk-CIW3KHOW.js";
import "./chunk-J55F4AC2.js";
import "./chunk-HEWCRCJC.js";
import {
  n
} from "./chunk-6A7CWJED.js";
import "./chunk-DUTZNK67.js";
import "./chunk-IN6BQCWS.js";
import {
  b
} from "./chunk-ZUSCOMQM.js";
import "./chunk-DSEUCBVP.js";
import "./chunk-UPDWQH75.js";
import {
  S
} from "./chunk-RXWBJSJ5.js";
import {
  f
} from "./chunk-M2NS3MSU.js";
import "./chunk-HMNBB7ED.js";
import "./chunk-3RRMLFFN.js";
import "./chunk-DR5TVNEL.js";
import "./chunk-HT2T6PUB.js";
import "./chunk-K64AAM77.js";
import "./chunk-6EUVKE22.js";
import "./chunk-OKJHJ3CY.js";
import "./chunk-DTUSTSEJ.js";
import "./chunk-JCWFGRHQ.js";
import "./chunk-JILEJ6R2.js";
import "./chunk-GAW5JHG4.js";
import "./chunk-OEKKQXBD.js";
import "./chunk-S3IO7V4Q.js";
import "./chunk-5I6J67HP.js";
import "./chunk-YVULORT6.js";
import "./chunk-PB33BAI3.js";
import "./chunk-CVB43GGP.js";
import "./chunk-LLDOZWVV.js";
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
import {
  A,
  d
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
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/LineOfSightLayer.js
var m = V.ofType(f2);
var u2 = class extends b(S(f)) {
  constructor(e2) {
    super(e2), this.type = "line-of-sight", this.operationalLayerType = "LineOfSightLayer", this.analysis = new v(), this.opacity = 1;
  }
  initialize() {
    this.addHandles(d(() => this.analysis, (e2, t) => {
      null != t && t.parent === this && (t.parent = null), null != e2 && (e2.parent = this);
    }, A));
  }
  load() {
    return __async(this, null, function* () {
      return null != this.analysis && this.addResolvingPromise(this.analysis.waitComputeExtent()), this;
    });
  }
  get observer() {
    return this.analysis?.observer;
  }
  set observer(e2) {
    const {
      analysis: t
    } = this;
    t && (t.observer = e2);
  }
  get targets() {
    return null != this.analysis ? this.analysis.targets : new V();
  }
  set targets(e2) {
    n(e2, this.analysis?.targets);
  }
  get fullExtent() {
    return null != this.analysis ? this.analysis.extent : null;
  }
  get spatialReference() {
    return null != this.analysis ? this.analysis.spatialReference : null;
  }
  releaseAnalysis(e2) {
    this.analysis === e2 && (this.analysis = new v());
  }
};
e([y({
  json: {
    read: false
  },
  readOnly: true
})], u2.prototype, "type", void 0), e([y({
  type: ["LineOfSightLayer"]
})], u2.prototype, "operationalLayerType", void 0), e([y({
  type: u,
  json: {
    read: true,
    write: {
      isRequired: true,
      ignoreOrigin: true
    }
  }
})], u2.prototype, "observer", null), e([y({
  type: m,
  json: {
    read: true,
    write: {
      ignoreOrigin: true
    }
  }
})], u2.prototype, "targets", null), e([y({
  nonNullable: true,
  json: {
    read: false,
    write: false
  }
})], u2.prototype, "analysis", void 0), e([y({
  readOnly: true
})], u2.prototype, "fullExtent", null), e([y({
  readOnly: true
})], u2.prototype, "spatialReference", null), e([y({
  readOnly: true,
  json: {
    read: false,
    write: false,
    origins: {
      service: {
        read: false,
        write: false
      },
      "portal-item": {
        read: false,
        write: false
      },
      "web-document": {
        read: false,
        write: false
      }
    }
  }
})], u2.prototype, "opacity", void 0), e([y({
  type: ["show", "hide"]
})], u2.prototype, "listMode", void 0), u2 = e([a("esri.layers.LineOfSightLayer")], u2);
var d2 = u2;
export {
  d2 as default
};
//# sourceMappingURL=LineOfSightLayer-6Z5EYR5P.js.map
