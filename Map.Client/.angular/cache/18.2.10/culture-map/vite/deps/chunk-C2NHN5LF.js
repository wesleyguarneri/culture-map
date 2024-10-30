import {
  c
} from "./chunk-OHXCVJMH.js";
import {
  i
} from "./chunk-CIW3KHOW.js";
import {
  u
} from "./chunk-K226GFDN.js";
import {
  h,
  m
} from "./chunk-U2ZVAEKG.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
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
  a3 as a,
  g2 as g
} from "./chunk-DDYVXG4F.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/geometry/support/MeshTexture.js
var p;
var h2 = /* @__PURE__ */ new WeakMap();
var u2 = 0;
var d = p = class extends f {
  constructor(t) {
    super(t), this.wrap = "repeat";
  }
  get url() {
    return this._get("url") || null;
  }
  set url(t) {
    this._set("url", t), t && this._set("data", null);
  }
  get data() {
    return this._get("data") || null;
  }
  set data(t) {
    this._set("data", t), t && this._set("url", null);
  }
  writeData(t, e2, a3, r2) {
    if (t instanceof HTMLImageElement) {
      const s = {
        type: "image-element",
        src: m(t.src, r2),
        crossOrigin: t.crossOrigin
      };
      e2[a3] = s;
    } else if (t instanceof HTMLCanvasElement) {
      const r3 = {
        type: "canvas-element",
        imageData: m2(t.getContext("2d").getImageData(0, 0, t.width, t.height))
      };
      e2[a3] = r3;
    } else if (t instanceof HTMLVideoElement) {
      const s = {
        type: "video-element",
        src: m(t.src, r2),
        autoplay: t.autoplay,
        loop: t.loop,
        muted: t.muted,
        crossOrigin: t.crossOrigin,
        preload: t.preload
      };
      e2[a3] = s;
    } else if (t instanceof ImageData) {
      const r3 = {
        type: "image-data",
        imageData: m2(t)
      };
      e2[a3] = r3;
    }
  }
  readData(t) {
    switch (t.type) {
      case "image-element": {
        const e2 = new Image();
        return e2.src = t.src, e2.crossOrigin = t.crossOrigin, e2;
      }
      case "canvas-element": {
        const e2 = g2(t.imageData), a3 = document.createElement("canvas");
        return a3.width = e2.width, a3.height = e2.height, a3.getContext("2d").putImageData(e2, 0, 0), a3;
      }
      case "image-data":
        return g2(t.imageData);
      case "video-element": {
        const e2 = document.createElement("video");
        return e2.src = t.src, e2.crossOrigin = t.crossOrigin, e2.autoplay = t.autoplay, e2.loop = t.loop, e2.muted = t.muted, e2.preload = t.preload, e2;
      }
      default:
        return;
    }
  }
  get transparent() {
    const t = this.data, e2 = this.url;
    if (t instanceof HTMLCanvasElement) return f2(t.getContext("2d").getImageData(0, 0, t.width, t.height));
    if (t instanceof ImageData) return f2(t);
    if (e2) {
      const t2 = e2.substr(e2.length - 4, 4).toLowerCase(), a3 = e2.substr(0, 15).toLocaleLowerCase();
      if (".png" === t2 || "data:image/png;" === a3) return true;
    }
    return false;
  }
  set transparent(t) {
    this._overrideIfSome("transparent", t);
  }
  get contentHash() {
    const t = "string" == typeof this.wrap ? this.wrap : "object" == typeof this.wrap ? `${this.wrap.horizontal}/${this.wrap.vertical}` : "", e2 = (e3 = "") => `d:${e3},t:${this.transparent},w:${t}`;
    return null != this.url ? e2(this.url) : null != this.data ? this.data instanceof HTMLImageElement || this.data instanceof HTMLVideoElement ? e2(this.data.src) : (h2.has(this.data) || h2.set(this.data, ++u2), e2(h2.get(this.data))) : e2();
  }
  get memoryUsage() {
    let t = 0;
    if (t += null != this.url ? this.url.length : 0, null != this.data) {
      const e2 = this.data;
      "data" in e2 ? t += e2.data.byteLength : e2 instanceof HTMLImageElement ? t += e2.naturalWidth * e2.naturalHeight * 3 : e2 instanceof HTMLCanvasElement && (t += e2.width * e2.height * 3);
    }
    return t;
  }
  clone() {
    const t = {
      url: this.url,
      data: this.data,
      wrap: this._cloneWrap()
    };
    return new p(t);
  }
  cloneWithDeduplication(t) {
    const e2 = t.get(this);
    if (e2) return e2;
    const a3 = this.clone();
    return t.set(this, a3), a3;
  }
  _cloneWrap() {
    return "string" == typeof this.wrap ? this.wrap : {
      horizontal: this.wrap.horizontal,
      vertical: this.wrap.vertical
    };
  }
  static from(t) {
    return "string" == typeof t ? new p({
      url: t
    }) : t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageData || t instanceof HTMLVideoElement ? new p({
      data: t
    }) : g(p, t);
  }
};
function m2(t) {
  let e2 = "";
  for (let a3 = 0; a3 < t.data.length; a3++) e2 += String.fromCharCode(t.data[a3]);
  return {
    data: btoa(e2),
    width: t.width,
    height: t.height
  };
}
function g2(t) {
  const a3 = atob(t.data), r2 = new Uint8ClampedArray(a3.length);
  for (let e2 = 0; e2 < a3.length; e2++) r2[e2] = a3.charCodeAt(e2);
  return c(r2, t.width, t.height);
}
function f2(t) {
  for (let e2 = 3; e2 < t.data.length; e2 += 4) if (255 !== t.data[e2]) return true;
  return false;
}
e([y({
  type: String,
  json: {
    write: h
  }
})], d.prototype, "url", null), e([y({
  json: {
    write: {
      overridePolicy() {
        return {
          enabled: !this.url
        };
      }
    }
  }
}), y()], d.prototype, "data", null), e([r("data")], d.prototype, "writeData", null), e([o("data")], d.prototype, "readData", null), e([y({
  type: Boolean,
  json: {
    write: {
      overridePolicy() {
        return {
          enabled: this._isOverridden("transparent")
        };
      }
    }
  }
})], d.prototype, "transparent", null), e([y({
  json: {
    write: true
  }
})], d.prototype, "wrap", void 0), e([y({
  readOnly: true
})], d.prototype, "contentHash", null), d = p = e([a("esri.geometry.support.MeshTexture")], d);
var w = d;

// ../../../node_modules/@arcgis/core/geometry/support/MeshTextureTransform.js
var p2 = class extends i(f) {
  constructor(o2) {
    super(o2), this.offset = [0, 0], this.rotation = 0, this.scale = [1, 1];
  }
};
e([y({
  type: [Number],
  nonNullable: true,
  json: {
    write: true
  }
})], p2.prototype, "offset", void 0), e([y({
  type: Number,
  nonNullable: true,
  json: {
    write: true
  }
})], p2.prototype, "rotation", void 0), e([y({
  type: [Number],
  nonNullable: true,
  json: {
    write: true
  }
})], p2.prototype, "scale", void 0), p2 = e([a("esri.geometry.support.MeshTextureTransform")], p2);
var c2 = p2;

// ../../../node_modules/@arcgis/core/geometry/support/MeshMaterial.js
var n;
var u3 = n = class extends f {
  constructor(o2) {
    super(o2), this.color = null, this.colorTexture = null, this.colorTextureTransform = null, this.normalTexture = void 0, this.normalTextureTransform = void 0, this.alphaMode = "auto", this.alphaCutoff = 0.5, this.doubleSided = true;
  }
  clone() {
    return this.cloneWithDeduplication(null, /* @__PURE__ */ new Map());
  }
  cloneWithDeduplication(o2, r2) {
    const e2 = null != o2 ? o2.get(this) : null;
    if (e2) return e2;
    const t = new n(this.clonePropertiesWithDeduplication(r2));
    return null != o2 && o2.set(this, t), t;
  }
  clonePropertiesWithDeduplication(o2) {
    return {
      color: null != this.color ? this.color.clone() : null,
      colorTexture: this.colorTexture?.cloneWithDeduplication(o2),
      normalTexture: this.normalTexture?.cloneWithDeduplication(o2),
      alphaMode: this.alphaMode,
      alphaCutoff: this.alphaCutoff,
      doubleSided: this.doubleSided,
      colorTextureTransform: this.colorTextureTransform?.clone(),
      normalTextureTransform: this.normalTextureTransform?.clone()
    };
  }
  get memoryUsage() {
    return this.getMemoryUsage();
  }
  getMemoryUsage() {
    let o2 = 0;
    return o2 += null != this.color ? 16 : 0, null != this.colorTexture && (o2 += this.colorTexture.memoryUsage), o2 += null != this.colorTextureTransform ? 20 : 0, null != this.normalTexture && (o2 += this.normalTexture.memoryUsage), o2 += null != this.normalTextureTransform ? 20 : 0, o2;
  }
};
e([y({
  type: u,
  json: {
    write: true
  }
})], u3.prototype, "color", void 0), e([y({
  type: w,
  json: {
    write: true
  }
})], u3.prototype, "colorTexture", void 0), e([y({
  type: c2,
  json: {
    write: true
  }
})], u3.prototype, "colorTextureTransform", void 0), e([y({
  type: w,
  json: {
    write: true
  }
})], u3.prototype, "normalTexture", void 0), e([y({
  type: c2,
  json: {
    write: true
  }
})], u3.prototype, "normalTextureTransform", void 0), e([y({
  nonNullable: true,
  json: {
    write: true
  }
})], u3.prototype, "alphaMode", void 0), e([y({
  nonNullable: true,
  json: {
    write: true
  }
})], u3.prototype, "alphaCutoff", void 0), e([y({
  nonNullable: true,
  json: {
    write: true
  }
})], u3.prototype, "doubleSided", void 0), u3 = n = e([a("esri.geometry.support.MeshMaterial")], u3);
var a2 = u3;

// ../../../node_modules/@arcgis/core/geometry/support/MeshMaterialMetallicRoughness.js
var n2;
var u4 = n2 = class extends a2 {
  constructor(e2) {
    super(e2), this.emissiveColor = null, this.emissiveTexture = null, this.emissiveTextureTransform = void 0, this.occlusionTexture = null, this.occlusionTextureTransform = void 0, this.metallic = 1, this.roughness = 1, this.metallicRoughnessTexture = null, this.metallicRoughnessTextureTransform = void 0;
  }
  clone() {
    return this.cloneWithDeduplication(null, /* @__PURE__ */ new Map());
  }
  cloneWithDeduplication(e2, s) {
    const o2 = null != e2 ? e2.get(this) : null;
    if (o2) return o2;
    const t = new n2(this.clonePropertiesWithDeduplication(s));
    return null != e2 && e2.set(this, t), t;
  }
  getMemoryUsage() {
    let e2 = super.getMemoryUsage();
    return e2 += null != this.emissiveColor ? 16 : 0, null != this.emissiveTexture && (e2 += this.emissiveTexture.memoryUsage), e2 += null != this.emissiveTextureTransform ? 20 : 0, null != this.occlusionTexture && (e2 += this.occlusionTexture.memoryUsage), e2 += null != this.occlusionTextureTransform ? 20 : 0, null != this.metallicRoughnessTexture && (e2 += this.metallicRoughnessTexture.memoryUsage), e2 += null != this.metallicRoughnessTextureTransform ? 20 : 0, e2;
  }
  clonePropertiesWithDeduplication(e2) {
    return __spreadProps(__spreadValues({}, super.clonePropertiesWithDeduplication(e2)), {
      emissiveColor: this.emissiveColor?.clone(),
      emissiveTexture: this.emissiveTexture?.cloneWithDeduplication(e2),
      emissiveTextureTransform: this.emissiveTextureTransform?.clone(),
      occlusionTexture: this.occlusionTexture?.cloneWithDeduplication(e2),
      occlusionTextureTransform: this.occlusionTextureTransform?.clone(),
      metallic: this.metallic,
      roughness: this.roughness,
      metallicRoughnessTexture: this.metallicRoughnessTexture?.cloneWithDeduplication(e2),
      metallicRoughnessTextureTransform: this.metallicRoughnessTextureTransform?.clone()
    });
  }
};
e([y({
  type: u,
  json: {
    write: true
  }
})], u4.prototype, "emissiveColor", void 0), e([y({
  type: w,
  json: {
    write: true
  }
})], u4.prototype, "emissiveTexture", void 0), e([y({
  type: c2,
  json: {
    write: true
  }
})], u4.prototype, "emissiveTextureTransform", void 0), e([y({
  type: w,
  json: {
    write: true
  }
})], u4.prototype, "occlusionTexture", void 0), e([y({
  type: c2,
  json: {
    write: true
  }
})], u4.prototype, "occlusionTextureTransform", void 0), e([y({
  type: Number,
  nonNullable: true,
  json: {
    write: true
  },
  range: {
    min: 0,
    max: 1
  }
})], u4.prototype, "metallic", void 0), e([y({
  type: Number,
  nonNullable: true,
  json: {
    write: true
  },
  range: {
    min: 0,
    max: 1
  }
})], u4.prototype, "roughness", void 0), e([y({
  type: w,
  json: {
    write: true
  }
})], u4.prototype, "metallicRoughnessTexture", void 0), e([y({
  type: c2,
  json: {
    write: true
  }
})], u4.prototype, "metallicRoughnessTextureTransform", void 0), u4 = n2 = e([a("esri.geometry.support.MeshMaterialMetallicRoughness")], u4);
var m3 = u4;

export {
  w,
  c2 as c,
  a2 as a,
  m3 as m
};
//# sourceMappingURL=chunk-C2NHN5LF.js.map
