import {
  u as u3
} from "./chunk-TCNXPK2T.js";
import "./chunk-SLCHZ6DD.js";
import {
  c
} from "./chunk-CQRPND5N.js";
import {
  l
} from "./chunk-CIW3KHOW.js";
import {
  n,
  t
} from "./chunk-6A7CWJED.js";
import {
  X
} from "./chunk-DUTZNK67.js";
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
import {
  u as u2
} from "./chunk-K226GFDN.js";
import {
  e as e2,
  o
} from "./chunk-7ZJ6P7J7.js";
import "./chunk-FPFZQCEQ.js";
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
import {
  w
} from "./chunk-NYQ5CYNR.js";
import "./chunk-O7UDKFOW.js";
import "./chunk-TKPMIAIW.js";
import "./chunk-NQOJNTB3.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
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
import {
  u2 as u
} from "./chunk-V6AMQYXE.js";
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
  N,
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

// ../../../node_modules/@arcgis/core/analysis/DimensionSimpleStyle.js
var c2 = class extends u(l) {
  constructor(o2) {
    super(o2), this.type = "simple", this.color = new u2("black"), this.lineSize = 2, this.fontSize = 10, this.textColor = new u2("black"), this.textBackgroundColor = new u2([255, 255, 255, 0.6]);
  }
};
e([y({
  type: ["simple"],
  readOnly: true,
  json: {
    write: {
      isRequired: true
    }
  }
})], c2.prototype, "type", void 0), e([y({
  type: u2,
  nonNullable: true,
  json: {
    type: [N],
    write: {
      isRequired: true
    }
  }
})], c2.prototype, "color", void 0), e([y({
  type: Number,
  cast: o,
  nonNullable: true,
  range: {
    min: e2(1)
  },
  json: {
    write: {
      isRequired: true
    }
  }
})], c2.prototype, "lineSize", void 0), e([y({
  type: Number,
  cast: o,
  nonNullable: true,
  json: {
    write: {
      isRequired: true
    }
  }
})], c2.prototype, "fontSize", void 0), e([y({
  type: u2,
  nonNullable: true,
  json: {
    type: [N],
    write: {
      isRequired: true
    }
  }
})], c2.prototype, "textColor", void 0), e([y({
  type: u2,
  nonNullable: true,
  json: {
    type: [N],
    write: {
      isRequired: true
    }
  }
})], c2.prototype, "textBackgroundColor", void 0), c2 = e([a("esri.analysis.DimensionSimpleStyle")], c2);
var a2 = c2;

// ../../../node_modules/@arcgis/core/analysis/DimensionAnalysis.js
var d2 = V.ofType(u3);
var f2 = class extends c {
  constructor(e3) {
    super(e3), this.type = "dimension", this.style = new a2(), this.extent = null;
  }
  initialize() {
    this.addHandles(d(() => this._computeExtent(), (e3) => {
      null == e3?.pending && this._set("extent", null != e3 ? e3.extent : null);
    }, A));
  }
  get dimensions() {
    return this._get("dimensions") || new d2();
  }
  set dimensions(e3) {
    this._set("dimensions", n(e3, this.dimensions, d2));
  }
  get spatialReference() {
    for (const e3 of this.dimensions) {
      if (null != e3.startPoint) return e3.startPoint.spatialReference;
      if (null != e3.endPoint) return e3.endPoint.spatialReference;
    }
    return null;
  }
  get requiredPropertiesForEditing() {
    return this.dimensions.reduce((e3, t2) => (e3.push(t2.startPoint, t2.endPoint), e3), []);
  }
  waitComputeExtent() {
    return __async(this, null, function* () {
      const e3 = this._computeExtent();
      return null != e3 ? e3.pending : Promise.resolve();
    });
  }
  _computeExtent() {
    const e3 = this.spatialReference;
    if (null == e3) return {
      pending: null,
      extent: null
    };
    const t2 = [];
    for (const s of this.dimensions) null != s.startPoint && t2.push(s.startPoint), null != s.endPoint && t2.push(s.endPoint);
    const n2 = X(t2, e3);
    if (null != n2.pending) return {
      pending: n2.pending,
      extent: null
    };
    let o2 = null;
    return null != n2.geometries && (o2 = n2.geometries.reduce((e4, t3) => null == e4 ? null != t3 ? w.fromPoint(t3) : null : null != t3 ? e4.union(w.fromPoint(t3)) : e4, null)), {
      pending: null,
      extent: o2
    };
  }
  clear() {
    this.dimensions.removeAll();
  }
};
e([y({
  type: ["dimension"]
})], f2.prototype, "type", void 0), e([y({
  cast: t,
  type: d2,
  nonNullable: true
})], f2.prototype, "dimensions", null), e([y({
  readOnly: true
})], f2.prototype, "spatialReference", null), e([y({
  types: {
    key: "type",
    base: null,
    typeMap: {
      simple: a2
    }
  },
  nonNullable: true
})], f2.prototype, "style", void 0), e([y({
  value: null,
  readOnly: true
})], f2.prototype, "extent", void 0), e([y({
  readOnly: true
})], f2.prototype, "requiredPropertiesForEditing", null), f2 = e([a("esri.analysis.DimensionAnalysis")], f2);
var y2 = f2;

// ../../../node_modules/@arcgis/core/layers/DimensionLayer.js
var u4 = class extends b(S(f)) {
  constructor(e3) {
    if (super(e3), this.type = "dimension", this.operationalLayerType = "ArcGISDimensionLayer", this.source = new y2(), this.opacity = 1, e3) {
      const {
        source: s,
        style: t2
      } = e3;
      s && t2 && (s.style = t2);
    }
  }
  initialize() {
    this.addHandles([d(() => this.source, (e3, s) => {
      null != s && s.parent === this && (s.parent = null), null != e3 && (e3.parent = this);
    }, A)]);
  }
  load() {
    return __async(this, null, function* () {
      return this.addResolvingPromise(this.source.waitComputeExtent()), this;
    });
  }
  get spatialReference() {
    return this.source.spatialReference;
  }
  get style() {
    return this.source.style;
  }
  set style(e3) {
    this.source.style = e3;
  }
  get fullExtent() {
    return this.source.extent;
  }
  releaseAnalysis(e3) {
    this.source === e3 && (this.source = new y2());
  }
  get analysis() {
    return this.source;
  }
  set analysis(e3) {
    this.source = e3;
  }
  get dimensions() {
    return this.source.dimensions;
  }
  set dimensions(e3) {
    this.source.dimensions = e3;
  }
  writeDimensions(e3, s, t2, r2) {
    s.dimensions = e3.filter(({
      startPoint: e4,
      endPoint: s2
    }) => null != e4 && null != s2).map((e4) => e4.toJSON(r2)).toJSON();
  }
};
e([y({
  json: {
    read: false
  },
  readOnly: true
})], u4.prototype, "type", void 0), e([y({
  type: ["ArcGISDimensionLayer"]
})], u4.prototype, "operationalLayerType", void 0), e([y({
  nonNullable: true
})], u4.prototype, "source", void 0), e([y({
  readOnly: true
})], u4.prototype, "spatialReference", null), e([y({
  types: {
    key: "type",
    base: null,
    typeMap: {
      simple: a2
    }
  },
  json: {
    write: {
      ignoreOrigin: true
    }
  }
})], u4.prototype, "style", null), e([y({
  readOnly: true
})], u4.prototype, "fullExtent", null), e([y({
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
})], u4.prototype, "opacity", void 0), e([y({
  type: ["show", "hide"]
})], u4.prototype, "listMode", void 0), e([y({
  type: V.ofType(u3),
  json: {
    write: {
      ignoreOrigin: true
    },
    origins: {
      "web-scene": {
        write: {
          ignoreOrigin: true
        }
      }
    }
  }
})], u4.prototype, "dimensions", null), e([r("web-scene", "dimensions")], u4.prototype, "writeDimensions", null), u4 = e([a("esri.layers.DimensionLayer")], u4);
var d3 = u4;
export {
  d3 as default
};
//# sourceMappingURL=DimensionLayer-TYIZCIZ4.js.map
