import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  l,
  o,
  r
} from "./chunk-RLGDH6IY.js";
import {
  e
} from "./chunk-2OZSYJDX.js";
import {
  s2 as s
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/Color.js
function a(t) {
  return e(s(t), 0, 255);
}
function e2(t, r2, s2) {
  return t = Number(t), isNaN(t) ? s2 : t < r2 ? r2 : t > s2 ? s2 : t;
}
function o2(t, r2) {
  const s2 = t.toString(16).padStart(2, "0");
  return r2 ? s2.substring(0, 1) : s2;
}
var h = class _h {
  static blendColors(t, r2, s2, i = new _h()) {
    return i.r = Math.round(t.r + (r2.r - t.r) * s2), i.g = Math.round(t.g + (r2.g - t.g) * s2), i.b = Math.round(t.b + (r2.b - t.b) * s2), i.a = t.a + (r2.a - t.a) * s2, i._sanitize();
  }
  static fromRgb(r2, s2) {
    const i = r2.toLowerCase().match(/^(rgba?|hsla?)\(([\s.\-,%0-9]+)\)/);
    if (i) {
      const r3 = i[2].split(/\s*,\s*/), n = i[1];
      if ("rgb" === n && 3 === r3.length || "rgba" === n && 4 === r3.length) {
        const t = r3[0];
        if ("%" === t.charAt(t.length - 1)) {
          const t2 = r3.map((t3) => 2.56 * parseFloat(t3));
          return 4 === r3.length && (t2[3] = parseFloat(r3[3])), _h.fromArray(t2, s2);
        }
        return _h.fromArray(r3.map((t2) => parseFloat(t2)), s2);
      }
      if ("hsl" === n && 3 === r3.length || "hsla" === n && 4 === r3.length) return _h.fromArray(o(parseFloat(r3[0]), parseFloat(r3[1]) / 100, parseFloat(r3[2]) / 100, parseFloat(r3[3])), s2);
    }
    return null;
  }
  static fromHex(t, r2 = new _h()) {
    if ("#" !== t[0] || isNaN(Number(`0x${t.substring(1)}`))) return null;
    switch (t.length) {
      case 4:
      case 5: {
        const s2 = parseInt(t.substring(1, 2), 16), i = parseInt(t.substring(2, 3), 16), n = parseInt(t.substring(3, 4), 16), a2 = 5 === t.length ? 15 : parseInt(t.substring(4), 16);
        return _h.fromArray([s2 + 16 * s2, i + 16 * i, n + 16 * n, (a2 + 16 * a2) / 255], r2);
      }
      case 7:
      case 9: {
        const s2 = parseInt(t.substring(1, 3), 16), i = parseInt(t.substring(3, 5), 16), n = parseInt(t.substring(5, 7), 16), a2 = 7 === t.length ? 255 : parseInt(t.substring(7), 16);
        return _h.fromArray([s2, i, n, a2 / 255], r2);
      }
      default:
        return null;
    }
  }
  static fromArray(t, r2 = new _h()) {
    return r2._set(Number(t[0]), Number(t[1]), Number(t[2]), Number(t[3])), isNaN(r2.a) && (r2.a = 1), r2._sanitize();
  }
  static fromString(t, i) {
    const n = r(t) ? l(t) : null;
    return n && _h.fromArray(n, i) || _h.fromRgb(t, i) || _h.fromHex(t, i);
  }
  static fromJSON(t) {
    return null != t ? new _h([t[0], t[1], t[2], (t[3] ?? 255) / 255]) : void 0;
  }
  static toUnitRGB(t) {
    return null != t ? [t.r / 255, t.g / 255, t.b / 255] : null;
  }
  static toUnitRGBA(t) {
    return null != t ? [t.r / 255, t.g / 255, t.b / 255, null != t.a ? t.a : 1] : null;
  }
  constructor(t) {
    this.r = 255, this.g = 255, this.b = 255, this.a = 1, t && this.setColor(t);
  }
  get isBright() {
    return 0.299 * this.r + 0.587 * this.g + 0.114 * this.b >= 127;
  }
  setColor(t) {
    return "string" == typeof t ? _h.fromString(t, this) : Array.isArray(t) ? _h.fromArray(t, this) : (this._set(t.r ?? 0, t.g ?? 0, t.b ?? 0, t.a ?? 1), t instanceof _h || this._sanitize()), this;
  }
  toRgb() {
    return [this.r, this.g, this.b];
  }
  toRgba() {
    return [this.r, this.g, this.b, this.a];
  }
  toHex(t) {
    const r2 = t?.capitalize ?? false, s2 = t?.digits ?? 6, i = 3 === s2 || 4 === s2, n = 4 === s2 || 8 === s2, a2 = `#${o2(this.r, i)}${o2(this.g, i)}${o2(this.b, i)}${n ? o2(Math.round(255 * this.a), i) : ""}`;
    return r2 ? a2.toUpperCase() : a2;
  }
  toCss(t = false) {
    const r2 = this.r + ", " + this.g + ", " + this.b;
    return t ? `rgba(${r2}, ${this.a})` : `rgb(${r2})`;
  }
  toString() {
    return this.toCss(true);
  }
  toJSON() {
    return this.toArray();
  }
  toArray(t = _h.AlphaMode.ALWAYS) {
    const r2 = a(this.r), s2 = a(this.g), i = a(this.b);
    return t === _h.AlphaMode.ALWAYS || 1 !== this.a ? [r2, s2, i, a(255 * this.a)] : [r2, s2, i];
  }
  clone() {
    return new _h(this.toRgba());
  }
  hash() {
    return this.r << 24 | this.g << 16 | this.b << 8 | 255 * this.a;
  }
  equals(t) {
    return null != t && t.r === this.r && t.g === this.g && t.b === this.b && t.a === this.a;
  }
  _sanitize() {
    return this.r = Math.round(e2(this.r, 0, 255)), this.g = Math.round(e2(this.g, 0, 255)), this.b = Math.round(e2(this.b, 0, 255)), this.a = e2(this.a, 0, 1), this;
  }
  _set(t, r2, s2, i) {
    this.r = t, this.g = r2, this.b = s2, this.a = i;
  }
};
h.prototype.declaredClass = "esri.Color", function(t) {
  var r2;
  (r2 = t.AlphaMode || (t.AlphaMode = {}))[r2.ALWAYS = 0] = "ALWAYS", r2[r2.UNLESS_OPAQUE = 1] = "UNLESS_OPAQUE";
}(h || (h = {}));
var u = h;

export {
  u
};
//# sourceMappingURL=chunk-KUBMHTYA.js.map
