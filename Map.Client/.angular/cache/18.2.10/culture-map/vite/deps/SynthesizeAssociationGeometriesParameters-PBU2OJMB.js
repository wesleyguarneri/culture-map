import {
  w
} from "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import {
  f as f2
} from "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import "./chunk-NKCPFCP3.js";
import "./chunk-JJS7PR2U.js";
import "./chunk-L5YS4GSA.js";
import "./chunk-PRREDSOB.js";
import "./chunk-V5C6HSAM.js";
import "./chunk-SYATLP3H.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
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
  a3 as a,
  g2 as g
} from "./chunk-DDYVXG4F.js";
import "./chunk-ANP42J2U.js";
import "./chunk-HJY2YILU.js";
import "./chunk-7DA6A5LD.js";
import "./chunk-2MMLMOWS.js";
import "./chunk-4323ZVPF.js";
import "./chunk-WYIDUUN2.js";
import "./chunk-DXLOWWK7.js";
import "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/rest/networks/support/SynthesizeAssociationGeometriesParameters.js
var c;
var p = c = class extends f {
  static from(t) {
    return g(c, t);
  }
  constructor(t) {
    super(t), this.returnAttachmentAssociations = false, this.returnConnectivityAssociations = false, this.returnContainmentAssociations = false, this.extent = null, this.maxGeometryCount = null, this.outSpatialReference = null, this.gdbVersion = null, this.moment = null;
  }
  writeOutSR(t, o, e2) {
    if (null != t) {
      const {
        wkid: r2
      } = t;
      o[e2] = JSON.stringify({
        wkid: r2
      });
    }
  }
};
e([y({
  type: Boolean,
  json: {
    read: {
      source: "attachmentAssociations"
    },
    write: {
      target: "attachmentAssociations"
    }
  }
})], p.prototype, "returnAttachmentAssociations", void 0), e([y({
  type: Boolean,
  json: {
    read: {
      source: "connectivityAssociations"
    },
    write: {
      target: "connectivityAssociations"
    }
  }
})], p.prototype, "returnConnectivityAssociations", void 0), e([y({
  type: Boolean,
  json: {
    read: {
      source: "containmentAssociations"
    },
    write: {
      target: "containmentAssociations"
    }
  }
})], p.prototype, "returnContainmentAssociations", void 0), e([y({
  type: w,
  json: {
    write: true
  }
})], p.prototype, "extent", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], p.prototype, "maxGeometryCount", void 0), e([y({
  type: f2,
  json: {
    write: {
      allowNull: true,
      target: "outSR"
    }
  }
})], p.prototype, "outSpatialReference", void 0), e([r("outSpatialReference")], p.prototype, "writeOutSR", null), e([y({
  type: String,
  json: {
    write: true
  }
})], p.prototype, "gdbVersion", void 0), e([y({
  type: Date,
  json: {
    type: Number,
    write: {
      writer: (t, o) => {
        o.moment = t?.getTime();
      }
    }
  }
})], p.prototype, "moment", void 0), p = c = e([a("esri.rest.networks.support.SynthesizeAssociationGeometriesParameters")], p);
var m = p;
export {
  m as default
};
//# sourceMappingURL=SynthesizeAssociationGeometriesParameters-PBU2OJMB.js.map
