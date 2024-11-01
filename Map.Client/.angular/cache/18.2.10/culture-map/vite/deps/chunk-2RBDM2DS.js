import {
  u
} from "./chunk-K226GFDN.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/libs/maquette/h.js
var e2 = (e3) => ({
  vnodeSelector: "",
  properties: void 0,
  children: void 0,
  text: e3.toString(),
  domNode: null
});
var r = (t2, o, n2) => {
  for (let l2 = 0, i = o.length; l2 < i; l2++) {
    let i2 = o[l2];
    Array.isArray(i2) ? r(t2, i2, n2) : null != i2 && false !== i2 && ("string" == typeof i2 && (i2 = e2(i2)), n2.push(i2));
  }
};
function t(e3, t2, o) {
  if (Array.isArray(t2)) o = t2, t2 = void 0;
  else if (t2 && ("string" == typeof t2 || t2.hasOwnProperty("vnodeSelector")) || o && ("string" == typeof o || o.hasOwnProperty("vnodeSelector"))) throw new Error("h called with invalid arguments");
  let n2, l2;
  return o && 1 === o.length && "string" == typeof o[0] ? n2 = o[0] : o && (l2 = [], r(e3, o, l2), 0 === l2.length && (l2 = void 0)), {
    vnodeSelector: e3,
    properties: t2,
    children: l2,
    text: "" === n2 ? void 0 : n2,
    domNode: null
  };
}

// ../../../node_modules/@arcgis/core/views/overlay/TextOverlayItem.js
var l = {
  bottom: "esri-text-overlay-item-anchor-bottom",
  "bottom-right": "esri-text-overlay-item-anchor-bottom-right",
  "bottom-left": "esri-text-overlay-item-anchor-bottom-left",
  top: "esri-text-overlay-item-anchor-top",
  "top-right": "esri-text-overlay-item-anchor-top-right",
  "top-left": "esri-text-overlay-item-anchor-top-left",
  center: "esri-text-overlay-item-anchor-center",
  right: "esri-text-overlay-item-anchor-right",
  left: "esri-text-overlay-item-anchor-left"
};
var n = class extends S {
  get position() {
    return [this.x, this.y];
  }
  set position(t2) {
    this._set("x", t2[0]), this._set("y", t2[1]);
  }
  get _textShadowColor() {
    const {
      textColor: t2,
      backgroundColor: e3
    } = this, o = e3.clone();
    return o.a *= t2.a, o;
  }
  get _textShadow() {
    const t2 = this._textShadowColor.toCss(true);
    return `0 0 ${this._textShadowSize}px ${t2}`;
  }
  get padding() {
    return 0.5 * this.fontSize;
  }
  get _borderRadius() {
    return this.padding;
  }
  constructor(t2) {
    super(t2), this.x = 0, this.y = 0, this.text = "-", this.fontSize = 14, this.anchor = "center", this.visible = true, this.isDecoration = true, this.backgroundColor = new u([0, 0, 0, 0.6]), this.textColor = new u([255, 255, 255]), this._textShadowSize = 1;
  }
  render() {
    return t("div", {
      classes: this._cssClasses(),
      styles: {
        left: Math.floor(this.x) + "px",
        top: Math.floor(this.y) + "px",
        visibility: this.visible ? "visible" : "hidden",
        fontSize: this.fontSize + "px",
        lineHeight: this.fontSize + "px",
        backgroundColor: this.backgroundColor.toCss(true),
        color: this.textColor.toCss(true),
        padding: this.padding + "px",
        borderRadius: this._borderRadius + "px",
        textShadow: this._textShadow
      }
    }, [this.text]);
  }
  renderCanvas(t2) {
    if (!this.visible) return;
    const e3 = t2.font.replace(/^(.*?)px/, "");
    t2.font = `${this.fontSize}px ${e3}`;
    const o = this.padding, i = this._borderRadius, r2 = t2.measureText(this.text).width, s = this.fontSize, l2 = h[this.anchor];
    t2.textAlign = "center", t2.textBaseline = "middle";
    const n2 = r2 + 2 * o, a3 = s + 2 * o, x2 = this.x + l2.x * n2, p = this.y + l2.y * a3;
    this._roundedRect(t2, x2, p, n2, a3, i), t2.fillStyle = this.backgroundColor.toCss(true), t2.fill();
    const d = this.x + (l2.x + 0.5) * n2, c = this.y + (l2.y + 0.5) * a3;
    this._renderTextShadow(t2, this.text, d, c), t2.fillStyle = this.textColor.toCss(true), t2.fillText(this.text, d, c);
  }
  _renderTextShadow(t2, e3, o, i) {
    t2.lineJoin = "miter", t2.fillStyle = `rgba(${this._textShadowColor.r}, ${this._textShadowColor.g}, ${this._textShadowColor.b}, ${1 / a2.length})`;
    const r2 = this._textShadowSize;
    for (const [s, l2] of a2) t2.fillText(e3, o + r2 * s, i + r2 * l2);
  }
  _roundedRect(t2, e3, o, i, r2, s) {
    t2.beginPath(), t2.moveTo(e3, o + s), t2.arcTo(e3, o, e3 + s, o, s), t2.lineTo(e3 + i - s, o), t2.arcTo(e3 + i, o, e3 + i, o + s, s), t2.lineTo(e3 + i, o + r2 - s), t2.arcTo(e3 + i, o + r2, e3 + i - s, o + r2, s), t2.lineTo(e3 + s, o + r2), t2.arcTo(e3, o + r2, e3, o + r2 - s, s), t2.closePath();
  }
  _cssClasses() {
    const t2 = {
      "esri-text-overlay-item": true
    };
    let e3;
    for (e3 in l) t2[l[e3]] = this.anchor === e3;
    return t2;
  }
};
e([y()], n.prototype, "x", void 0), e([y()], n.prototype, "y", void 0), e([y()], n.prototype, "position", null), e([y()], n.prototype, "text", void 0), e([y()], n.prototype, "fontSize", void 0), e([y()], n.prototype, "anchor", void 0), e([y()], n.prototype, "visible", void 0), e([y()], n.prototype, "isDecoration", void 0), e([y()], n.prototype, "backgroundColor", void 0), e([y()], n.prototype, "textColor", void 0), e([y()], n.prototype, "_textShadowSize", void 0), e([y()], n.prototype, "_textShadowColor", null), e([y()], n.prototype, "_textShadow", null), e([y()], n.prototype, "padding", null), e([y()], n.prototype, "_borderRadius", null), n = e([a("esri.views.overlay.TextOverlayItem")], n);
var h = {
  bottom: {
    x: -0.5,
    y: -1,
    textAlign: "center",
    textBaseline: "bottom"
  },
  "bottom-left": {
    x: 0,
    y: -1,
    textAlign: "left",
    textBaseline: "bottom"
  },
  "bottom-right": {
    x: -1,
    y: -1,
    textAlign: "right",
    textBaseline: "bottom"
  },
  center: {
    x: -0.5,
    y: -0.5,
    textAlign: "center",
    textBaseline: "middle"
  },
  left: {
    x: 0,
    y: -0.5,
    textAlign: "left",
    textBaseline: "middle"
  },
  right: {
    x: -1,
    y: -0.5,
    textAlign: "right",
    textBaseline: "middle"
  },
  top: {
    x: -0.5,
    y: 0,
    textAlign: "center",
    textBaseline: "top"
  },
  "top-left": {
    x: 0,
    y: 0,
    textAlign: "left",
    textBaseline: "top"
  },
  "top-right": {
    x: -1,
    y: 0,
    textAlign: "right",
    textBaseline: "top"
  }
};
var a2 = [];
{
  const t2 = 16;
  for (let e3 = 0; e3 < 360; e3 += 360 / t2) a2.push([Math.cos(Math.PI * e3 / 180), Math.sin(Math.PI * e3 / 180)]);
}
var x = n;

export {
  t,
  x
};
//# sourceMappingURL=chunk-2RBDM2DS.js.map
