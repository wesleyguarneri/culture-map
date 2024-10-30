import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  d,
  n as n2
} from "./chunk-OYIDHTXG.js";
import {
  u
} from "./chunk-KUBMHTYA.js";
import {
  o
} from "./chunk-6EIBUVMG.js";
import {
  o as o2
} from "./chunk-VYTPFEL2.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  n
} from "./chunk-Y2HYKTTT.js";
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

// ../../../node_modules/@arcgis/core/symbols/MarkerSymbol.js
var p = class extends n2 {
  constructor(t) {
    super(t), this.angle = 0, this.type = null, this.xoffset = 0, this.yoffset = 0, this.size = 9;
  }
  hash() {
    return `${this.type}.${this.angle}.${this.size}.${this.xoffset}.${this.yoffset}`;
  }
};
e([y({
  type: Number,
  json: {
    read: (t) => t && -1 * t,
    write: (t, e2) => e2.angle = t && -1 * t
  }
})], p.prototype, "angle", void 0), e([y({
  type: ["simple-marker", "picture-marker"],
  readOnly: true
})], p.prototype, "type", void 0), e([y({
  type: Number,
  cast: o2,
  json: {
    write: true
  }
})], p.prototype, "xoffset", void 0), e([y({
  type: Number,
  cast: o2,
  json: {
    write: true
  }
})], p.prototype, "yoffset", void 0), e([y({
  type: Number,
  cast: (t) => "auto" === t ? t : o2(t),
  json: {
    write: true
  }
})], p.prototype, "size", void 0), p = e([a2("esri.symbols.MarkerSymbol")], p);
var i = p;

// ../../../node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js
var h;
var m = new n({
  esriSMSCircle: "circle",
  esriSMSSquare: "square",
  esriSMSCross: "cross",
  esriSMSX: "x",
  esriSMSDiamond: "diamond",
  esriSMSTriangle: "triangle",
  esriSMSPath: "path"
});
var u2 = h = class extends i {
  constructor(...o3) {
    super(...o3), this.color = new u([255, 255, 255, 0.25]), this.type = "simple-marker", this.size = 12, this.style = "circle", this.outline = new d();
  }
  normalizeCtorArgs(o3, e2, r2, t) {
    if (o3 && "string" != typeof o3) return o3;
    const i2 = {};
    return o3 && (i2.style = o3), null != e2 && (i2.size = o2(e2)), r2 && (i2.outline = r2), t && (i2.color = t), i2;
  }
  writeColor(o3, e2) {
    o3 && "x" !== this.style && "cross" !== this.style && (e2.color = o3.toJSON()), null === o3 && (e2.color = null);
  }
  set path(o3) {
    this.style = "path", this._set("path", o3);
  }
  clone() {
    return new h({
      angle: this.angle,
      color: a(this.color),
      outline: this.outline && this.outline.clone(),
      path: this.path,
      size: this.size,
      style: this.style,
      xoffset: this.xoffset,
      yoffset: this.yoffset
    });
  }
  hash() {
    return `${super.hash()}.${this.color && this.color.hash()}.${this.path}.${this.style}.${this.outline?.hash()}`;
  }
};
e([y()], u2.prototype, "color", void 0), e([r("color")], u2.prototype, "writeColor", null), e([o({
  esriSMS: "simple-marker"
}, {
  readOnly: true
})], u2.prototype, "type", void 0), e([y()], u2.prototype, "size", void 0), e([y({
  type: m.apiValues,
  json: {
    read: m.read,
    write: m.write
  }
})], u2.prototype, "style", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], u2.prototype, "path", null), e([y({
  types: {
    key: "type",
    base: null,
    defaultKeyValue: "simple-line",
    typeMap: {
      "simple-line": d
    }
  },
  json: {
    default: null,
    write: true
  }
})], u2.prototype, "outline", void 0), u2 = h = e([a2("esri.symbols.SimpleMarkerSymbol")], u2);
var y2 = u2;

export {
  i,
  y2 as y
};
//# sourceMappingURL=chunk-TGZW6QWO.js.map
