import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  u as u3
} from "./chunk-EWVUPAG7.js";
import "./chunk-HKAONIBH.js";
import {
  c
} from "./chunk-RHVUMKCC.js";
import {
  l
} from "./chunk-DL2B6IFJ.js";
import {
  u as u2
} from "./chunk-KUBMHTYA.js";
import {
  n,
  t
} from "./chunk-NXXQ35YM.js";
import {
  X
} from "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import {
  b
} from "./chunk-OS542PQQ.js";
import "./chunk-3B5GODXR.js";
import "./chunk-NKXXHQDD.js";
import {
  S
} from "./chunk-7TBQUMV3.js";
import {
  f
} from "./chunk-TPLUZX3A.js";
import "./chunk-BGLJ2FAH.js";
import "./chunk-2EJFYNM7.js";
import "./chunk-DC5LRNPY.js";
import "./chunk-ASCK5HJ5.js";
import "./chunk-5X5U7R6O.js";
import "./chunk-XNLAOXPY.js";
import "./chunk-C2OXE4NQ.js";
import "./chunk-I2TVVMQ6.js";
import "./chunk-5EGQYY2H.js";
import "./chunk-JKPUNUQA.js";
import "./chunk-SR7PRON4.js";
import "./chunk-HGHPYGKP.js";
import "./chunk-4DSGTDZJ.js";
import {
  e as e2,
  o
} from "./chunk-VYTPFEL2.js";
import "./chunk-RLGDH6IY.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-THZPD5CT.js";
import "./chunk-OBCA6CWH.js";
import "./chunk-2JI245BP.js";
import "./chunk-N34BRXVM.js";
import "./chunk-4L4Y34YK.js";
import "./chunk-BXONKQKI.js";
import "./chunk-2HDBQXAR.js";
import {
  w
} from "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import "./chunk-AYL3HQHD.js";
import "./chunk-66YQWHHE.js";
import "./chunk-QGBMZIP4.js";
import "./chunk-AOEBZVTA.js";
import "./chunk-2OZSYJDX.js";
import "./chunk-MZM4INJV.js";
import "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import {
  u2 as u
} from "./chunk-4AZPIP7K.js";
import {
  A,
  d
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
  N,
  a3 as a
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import "./chunk-6JFGZTLU.js";
import "./chunk-2ZJE6ZFX.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

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
//# sourceMappingURL=DimensionLayer-GM6NMC4S.js.map
