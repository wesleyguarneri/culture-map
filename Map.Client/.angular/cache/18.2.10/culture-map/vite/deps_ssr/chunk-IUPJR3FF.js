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

// ../../../node_modules/@arcgis/core/symbols/FillSymbol.js
var l = class extends n2 {
  constructor(e2) {
    super(e2), this.outline = null, this.type = null;
  }
  hash() {
    return `${this.type}.${this.outline?.hash()}`;
  }
};
e([y({
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
})], l.prototype, "outline", void 0), e([y({
  type: ["simple-fill", "picture-fill"],
  readOnly: true
})], l.prototype, "type", void 0), l = e([a2("esri.symbols.FillSymbol")], l);
var p = l;

// ../../../node_modules/@arcgis/core/symbols/SimpleFillSymbol.js
var p2;
var c = new n({
  esriSFSSolid: "solid",
  esriSFSNull: "none",
  esriSFSHorizontal: "horizontal",
  esriSFSVertical: "vertical",
  esriSFSForwardDiagonal: "forward-diagonal",
  esriSFSBackwardDiagonal: "backward-diagonal",
  esriSFSCross: "cross",
  esriSFSDiagonalCross: "diagonal-cross"
});
var m = p2 = class extends p {
  constructor(...o2) {
    super(...o2), this.color = new u([0, 0, 0, 0.25]), this.outline = new d(), this.type = "simple-fill", this.style = "solid";
  }
  normalizeCtorArgs(o2, r, s) {
    if (o2 && "string" != typeof o2) return o2;
    const e2 = {};
    return o2 && (e2.style = o2), r && (e2.outline = r), s && (e2.color = s), e2;
  }
  clone() {
    return new p2({
      color: a(this.color),
      outline: this.outline && this.outline.clone(),
      style: this.style
    });
  }
  hash() {
    return `${super.hash()}${this.style}.${this.color && this.color.hash()}`;
  }
};
e([y()], m.prototype, "color", void 0), e([y()], m.prototype, "outline", void 0), e([o({
  esriSFS: "simple-fill"
}, {
  readOnly: true
})], m.prototype, "type", void 0), e([y({
  type: c.apiValues,
  json: {
    read: c.read,
    write: c.write
  }
})], m.prototype, "style", void 0), m = p2 = e([a2("esri.symbols.SimpleFillSymbol")], m);
var S = m;

export {
  p,
  S
};
//# sourceMappingURL=chunk-IUPJR3FF.js.map
