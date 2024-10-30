import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  u
} from "./chunk-KUBMHTYA.js";
import {
  o as o2
} from "./chunk-6EIBUVMG.js";
import {
  o as o3
} from "./chunk-VYTPFEL2.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  n
} from "./chunk-Y2HYKTTT.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a2
} from "./chunk-UDMPWVPF.js";
import {
  a
} from "./chunk-6JFGZTLU.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/symbols/Symbol.js
var p = new n({
  esriSMS: "simple-marker",
  esriPMS: "picture-marker",
  esriSLS: "simple-line",
  esriSFS: "simple-fill",
  esriPFS: "picture-fill",
  esriTS: "text",
  esriSHD: "shield-label-symbol",
  PointSymbol3D: "point-3d",
  LineSymbol3D: "line-3d",
  PolygonSymbol3D: "polygon-3d",
  WebStyleSymbol: "web-style",
  MeshSymbol3D: "mesh-3d",
  LabelSymbol3D: "label-3d",
  CIMSymbolReference: "cim"
});
var m = 0;
var c = class extends f {
  constructor(o4) {
    super(o4), this.id = "sym" + m++, this.type = null, this.color = new u([0, 0, 0, 1]);
  }
  readColor(o4) {
    return null != o4?.[0] ? [o4[0], o4[1], o4[2], o4[3] / 255] : o4;
  }
  collectRequiredFields(o4, r2) {
    return __async(this, null, function* () {
    });
  }
  hash() {
    return JSON.stringify(this.toJSON());
  }
  clone() {
  }
};
e([y({
  type: p.apiValues,
  readOnly: true,
  json: {
    read: false,
    write: {
      ignoreOrigin: true,
      writer: p.write
    }
  }
})], c.prototype, "type", void 0), e([y({
  type: u,
  json: {
    write: {
      allowNull: true
    }
  }
})], c.prototype, "color", void 0), e([o("color")], c.prototype, "readColor", null), c = e([a2("esri.symbols.Symbol")], c);
var n2 = c;

// ../../../node_modules/@arcgis/core/symbols/LineSymbol.js
var p2 = class extends n2 {
  constructor(o4) {
    super(o4), this.type = "simple-line", this.width = 0.75;
  }
  hash() {
    return `${this.type}.${this.width}`;
  }
};
e([o2({
  esriSLS: "simple-line"
}, {
  readOnly: true
})], p2.prototype, "type", void 0), e([y({
  type: Number,
  cast: o3,
  json: {
    write: true
  }
})], p2.prototype, "width", void 0), p2 = e([a2("esri.symbols.LineSymbol")], p2);
var c2 = p2;

// ../../../node_modules/@arcgis/core/symbols/support/lineMarkers.js
var e2 = ["begin", "end", "begin-end"];
var n3 = ["arrow", "circle", "square", "diamond", "cross", "x"];

// ../../../node_modules/@arcgis/core/symbols/LineSymbolMarker.js
var n4;
var m2 = n4 = class extends f {
  constructor(r2) {
    super(r2), this.placement = "begin-end", this.type = "line-marker", this.style = "arrow";
  }
  writeStyle(r2, o4, e3, t) {
    o4[e3] = "web-map" === t?.origin ? "arrow" : r2;
  }
  set color(r2) {
    this._set("color", r2);
  }
  readColor(r2) {
    return null != r2?.[0] ? [r2[0], r2[1], r2[2], r2[3] / 255] : r2;
  }
  writeColor(r2, o4, e3, t) {
    "web-map" === t?.origin || (o4[e3] = r2);
  }
  clone() {
    return new n4({
      color: a(this.color),
      placement: this.placement,
      style: this.style
    });
  }
  hash() {
    return `${this.placement}.${this.color?.hash()}.${this.style}`;
  }
};
e([y({
  type: ["begin", "end", "begin-end"],
  json: {
    write: true
  }
})], m2.prototype, "placement", void 0), e([o2({
  "line-marker": "line-marker"
}, {
  readOnly: true
}), y({
  json: {
    origins: {
      "web-map": {
        write: false
      }
    }
  }
})], m2.prototype, "type", void 0), e([y({
  type: n3
})], m2.prototype, "style", void 0), e([r("style")], m2.prototype, "writeStyle", null), e([y({
  type: u,
  value: null,
  json: {
    write: {
      allowNull: true
    }
  }
})], m2.prototype, "color", null), e([o("color")], m2.prototype, "readColor", null), e([r("color")], m2.prototype, "writeColor", null), m2 = n4 = e([a2("esri.symbols.LineSymbolMarker")], m2);
var u2 = m2;

// ../../../node_modules/@arcgis/core/symbols/SimpleLineSymbol.js
var h;
var p3 = new n({
  esriSLSSolid: "solid",
  esriSLSDash: "dash",
  esriSLSDot: "dot",
  esriSLSDashDot: "dash-dot",
  esriSLSDashDotDot: "long-dash-dot-dot",
  esriSLSNull: "none",
  esriSLSShortDash: "short-dash",
  esriSLSShortDot: "short-dot",
  esriSLSShortDashDot: "short-dash-dot",
  esriSLSShortDashDotDot: "short-dash-dot-dot",
  esriSLSLongDash: "long-dash",
  esriSLSLongDashDot: "long-dash-dot"
});
var m3 = h = class extends c2 {
  constructor(...o4) {
    super(...o4), this.type = "simple-line", this.style = "solid", this.cap = "round", this.join = "round", this.marker = null, this.miterLimit = 2;
  }
  normalizeCtorArgs(o4, r2, t, s, i, n5) {
    if (o4 && "string" != typeof o4) return o4;
    const l = {};
    return null != o4 && (l.style = o4), null != r2 && (l.color = r2), null != t && (l.width = o3(t)), null != s && (l.cap = s), null != i && (l.join = i), null != n5 && (l.miterLimit = o3(n5)), l;
  }
  clone() {
    return new h({
      color: a(this.color),
      style: this.style,
      width: this.width,
      cap: this.cap,
      join: this.join,
      miterLimit: this.miterLimit,
      marker: this.marker?.clone()
    });
  }
  hash() {
    return `${super.hash()}.${this.color?.hash()}.${this.style}.${this.cap}.${this.join}.${this.miterLimit}.${this.marker?.hash()}`;
  }
};
e([o2({
  esriSLS: "simple-line"
}, {
  readOnly: true
})], m3.prototype, "type", void 0), e([y({
  type: p3.apiValues,
  json: {
    read: p3.read,
    write: p3.write
  }
})], m3.prototype, "style", void 0), e([y({
  type: ["butt", "round", "square"],
  json: {
    write: {
      overridePolicy: (o4, r2, t) => ({
        enabled: "round" !== o4 && null == t?.origin
      })
    }
  }
})], m3.prototype, "cap", void 0), e([y({
  type: ["miter", "round", "bevel"],
  json: {
    write: {
      overridePolicy: (o4, r2, t) => ({
        enabled: "round" !== o4 && null == t?.origin
      })
    }
  }
})], m3.prototype, "join", void 0), e([y({
  types: {
    key: "type",
    base: null,
    defaultKeyValue: "line-marker",
    typeMap: {
      "line-marker": u2
    }
  },
  json: {
    write: true,
    origins: {
      "web-scene": {
        write: false
      }
    }
  }
})], m3.prototype, "marker", void 0), e([y({
  type: Number,
  json: {
    read: false,
    write: false
  }
})], m3.prototype, "miterLimit", void 0), m3 = h = e([a2("esri.symbols.SimpleLineSymbol")], m3);
var d = m3;

export {
  n2 as n,
  e2 as e,
  n3 as n2,
  u2 as u,
  d
};
//# sourceMappingURL=chunk-OYIDHTXG.js.map
