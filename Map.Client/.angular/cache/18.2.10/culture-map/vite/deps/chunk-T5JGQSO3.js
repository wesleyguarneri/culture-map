import {
  n
} from "./chunk-DZALMCYL.js";
import {
  u
} from "./chunk-K226GFDN.js";
import {
  o
} from "./chunk-4ZZRP4MA.js";
import {
  o as o2
} from "./chunk-7ZJ6P7J7.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import {
  s
} from "./chunk-NKCPFCP3.js";
import {
  e as e2
} from "./chunk-3ZXOUEQG.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a as a2,
  a3
} from "./chunk-DDYVXG4F.js";
import {
  a
} from "./chunk-WYIDUUN2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/symbols/support/textUtils.js
var l = ["none", "underline", "line-through"];
var t = ["normal", "italic", "oblique"];
var r2 = ["normal", "lighter", "bold", "bolder"];
var n2 = {
  type: Number,
  cast: (l3) => {
    const t2 = a2(l3);
    return 0 === t2 ? 1 : e2(t2, 0.1, 4);
  },
  nonNullable: true
};
var i = ["left", "right", "center"];
var a4 = ["baseline", "top", "middle", "bottom"];
var m = {
  type: i,
  nonNullable: true
};
var p = {
  type: a4,
  nonNullable: true
};
var s2 = 8;

// ../../../node_modules/@arcgis/core/symbols/Font.js
var c;
var l2 = c = class extends f {
  constructor(t2) {
    super(t2), this.decoration = "none", this.family = "sans-serif", this.size = 9, this.style = "normal", this.weight = "normal";
  }
  castSize(t2) {
    return o2(t2);
  }
  clone() {
    return new c({
      decoration: this.decoration,
      family: this.family,
      size: this.size,
      style: this.style,
      weight: this.weight
    });
  }
  hash() {
    return `${this.decoration}.${this.family}.${this.size}.${this.style}.${this.weight}`;
  }
};
e([y({
  type: l,
  json: {
    default: "none",
    write: true
  }
})], l2.prototype, "decoration", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], l2.prototype, "family", void 0), e([y({
  type: Number,
  json: {
    write: {
      overridePolicy: (t2, o3, e3) => ({
        enabled: !e3 || !e3.textSymbol3D
      })
    }
  }
})], l2.prototype, "size", void 0), e([s("size")], l2.prototype, "castSize", null), e([y({
  type: t,
  json: {
    default: "normal",
    write: true
  }
})], l2.prototype, "style", void 0), e([y({
  type: r2,
  json: {
    default: "normal",
    write: true
  }
})], l2.prototype, "weight", void 0), l2 = c = e([a3("esri.symbols.Font")], l2);
var m2 = l2;

// ../../../node_modules/@arcgis/core/symbols/TextSymbol.js
var f2;
var g = f2 = class extends n {
  constructor(...t2) {
    super(...t2), this.backgroundColor = null, this.borderLineColor = null, this.borderLineSize = null, this.font = new m2(), this.horizontalAlignment = "center", this.kerning = true, this.haloColor = null, this.haloSize = null, this.rightToLeft = null, this.rotated = false, this.text = "", this.type = "text", this.verticalAlignment = "baseline", this.xoffset = 0, this.yoffset = 0, this.angle = 0, this.width = null, this.lineWidth = 192, this.lineHeight = 1;
  }
  normalizeCtorArgs(t2, o3, e3) {
    if (t2 && "string" != typeof t2) return t2;
    const i2 = {};
    return t2 && (i2.text = t2), o3 && (i2.font = o3), e3 && (i2.color = e3), i2;
  }
  writeLineWidth(t2, o3, e3, i2) {
    i2 && "string" != typeof i2 ? i2.origin : o3[e3] = t2;
  }
  castLineWidth(t2) {
    return o2(t2);
  }
  writeLineHeight(t2, o3, e3, i2) {
    i2 && "string" != typeof i2 ? i2.origin : o3[e3] = t2;
  }
  clone() {
    return new f2({
      angle: this.angle,
      backgroundColor: a(this.backgroundColor),
      borderLineColor: a(this.borderLineColor),
      borderLineSize: this.borderLineSize,
      color: a(this.color),
      font: this.font && this.font.clone(),
      haloColor: a(this.haloColor),
      haloSize: this.haloSize,
      horizontalAlignment: this.horizontalAlignment,
      kerning: this.kerning,
      lineHeight: this.lineHeight,
      lineWidth: this.lineWidth,
      rightToLeft: this.rightToLeft,
      rotated: this.rotated,
      text: this.text,
      verticalAlignment: this.verticalAlignment,
      width: this.width,
      xoffset: this.xoffset,
      yoffset: this.yoffset
    });
  }
  hash() {
    return `${this.backgroundColor?.hash()}.${this.borderLineColor}.${this.borderLineSize}.${this.color?.hash()}.${this.font && this.font.hash()}.${this.haloColor?.hash()}.${this.haloSize}.${this.horizontalAlignment}.${this.kerning}.${this.rightToLeft}.${this.rotated}.${this.text}.${this.verticalAlignment}.${this.width}.${this.xoffset}.${this.yoffset}.${this.lineHeight}.${this.lineWidth}.${this.angle}`;
  }
};
e([y({
  type: u,
  json: {
    write: true
  }
})], g.prototype, "backgroundColor", void 0), e([y({
  type: u,
  json: {
    write: true
  }
})], g.prototype, "borderLineColor", void 0), e([y({
  type: Number,
  json: {
    write: true
  },
  cast: o2
})], g.prototype, "borderLineSize", void 0), e([y({
  type: m2,
  json: {
    write: true
  }
})], g.prototype, "font", void 0), e([y(__spreadProps(__spreadValues({}, m), {
  json: {
    write: true
  }
}))], g.prototype, "horizontalAlignment", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], g.prototype, "kerning", void 0), e([y({
  type: u,
  json: {
    write: true
  }
})], g.prototype, "haloColor", void 0), e([y({
  type: Number,
  cast: o2,
  json: {
    write: true
  }
})], g.prototype, "haloSize", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], g.prototype, "rightToLeft", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], g.prototype, "rotated", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], g.prototype, "text", void 0), e([o({
  esriTS: "text"
}, {
  readOnly: true
})], g.prototype, "type", void 0), e([y(__spreadProps(__spreadValues({}, p), {
  json: {
    write: true
  }
}))], g.prototype, "verticalAlignment", void 0), e([y({
  type: Number,
  cast: o2,
  json: {
    write: true
  }
})], g.prototype, "xoffset", void 0), e([y({
  type: Number,
  cast: o2,
  json: {
    write: true
  }
})], g.prototype, "yoffset", void 0), e([y({
  type: Number,
  json: {
    read: (t2) => t2 && -1 * t2,
    write: (t2, o3) => o3.angle = t2 && -1 * t2
  }
})], g.prototype, "angle", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], g.prototype, "width", void 0), e([y({
  type: Number
})], g.prototype, "lineWidth", void 0), e([r("lineWidth")], g.prototype, "writeLineWidth", null), e([s("lineWidth")], g.prototype, "castLineWidth", null), e([y(n2)], g.prototype, "lineHeight", void 0), e([r("lineHeight")], g.prototype, "writeLineHeight", null), g = f2 = e([a3("esri.symbols.TextSymbol")], g);
var m3 = g;

export {
  n2 as n,
  m,
  p,
  s2 as s,
  m2,
  m3
};
//# sourceMappingURL=chunk-T5JGQSO3.js.map
