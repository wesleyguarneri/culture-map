import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  w
} from "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import {
  f as f2
} from "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import "./chunk-66YQWHHE.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
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
  a3 as a,
  g2 as g
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=SynthesizeAssociationGeometriesParameters-FHCVJQP6.js.map
