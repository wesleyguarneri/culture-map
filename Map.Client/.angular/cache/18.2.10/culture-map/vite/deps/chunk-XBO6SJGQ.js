import {
  i
} from "./chunk-CDFFTJSF.js";
import {
  h
} from "./chunk-ON42KCSZ.js";
import {
  e as e2
} from "./chunk-3NGDRCQI.js";
import {
  c,
  e2 as e3
} from "./chunk-P7OSFLIX.js";
import {
  t
} from "./chunk-YSIUOTSV.js";
import {
  D,
  G
} from "./chunk-YLE5AYZV.js";
import {
  n
} from "./chunk-E2WAKNLZ.js";
import {
  p
} from "./chunk-5YIMTGEC.js";
import {
  z
} from "./chunk-LJEOBI2I.js";
import {
  Et,
  U
} from "./chunk-SYATLP3H.js";
import {
  a,
  b,
  f2 as f,
  v
} from "./chunk-HJY2YILU.js";
import {
  e
} from "./chunk-2MMLMOWS.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/RectangleBinPack.js
var e4 = class {
  constructor(e5, t3) {
    this._width = 0, this._height = 0, this._free = [], this._width = e5, this._height = t3, this._free.push(new t(0, 0, e5, t3));
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  allocate(e5, t3) {
    if (e5 > this._width || t3 > this._height) return new t();
    let i2 = null, s2 = -1;
    for (let h3 = 0; h3 < this._free.length; ++h3) {
      const w = this._free[h3];
      e5 <= w.width && t3 <= w.height && (null === i2 || w.y <= i2.y && w.x <= i2.x) && (i2 = w, s2 = h3);
    }
    return null === i2 ? new t() : (this._free.splice(s2, 1), i2.width < i2.height ? (i2.width > e5 && this._free.push(new t(i2.x + e5, i2.y, i2.width - e5, t3)), i2.height > t3 && this._free.push(new t(i2.x, i2.y + t3, i2.width, i2.height - t3))) : (i2.width > e5 && this._free.push(new t(i2.x + e5, i2.y, i2.width - e5, i2.height)), i2.height > t3 && this._free.push(new t(i2.x, i2.y + t3, e5, i2.height - t3))), new t(i2.x, i2.y, e5, t3));
  }
  release(h3) {
    for (let e5 = 0; e5 < this._free.length; ++e5) {
      const t3 = this._free[e5];
      if (t3.y === h3.y && t3.height === h3.height && t3.x + t3.width === h3.x) t3.width += h3.width;
      else if (t3.x === h3.x && t3.width === h3.width && t3.y + t3.height === h3.y) t3.height += h3.height;
      else if (h3.y === t3.y && h3.height === t3.height && h3.x + h3.width === t3.x) t3.x = h3.x, t3.width += h3.width;
      else {
        if (h3.x !== t3.x || h3.width !== t3.width || h3.y + h3.height !== t3.y) continue;
        t3.y = h3.y, t3.height += h3.height;
      }
      this._free.splice(e5, 1), this.release(h3);
    }
    this._free.push(h3);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/GlyphMosaic.js
var n2 = class {
  constructor(e5, s2, i2) {
    this.width = 0, this.height = 0, this._dirties = [], this._glyphData = [], this._currentPage = 0, this._glyphIndex = {}, this._textures = [], this._rangePromises = /* @__PURE__ */ new Map(), this.width = e5, this.height = s2, this._glyphSource = i2, this._binPack = new e4(e5 - 4, s2 - 4), this._glyphData.push(new Uint8Array(e5 * s2)), this._dirties.push(true), this._textures.push(void 0);
  }
  getGlyphItems(s2, i2) {
    const h3 = [], r3 = this._glyphSource, n4 = /* @__PURE__ */ new Set(), o2 = 1 / 256;
    for (const t3 of i2) {
      const e5 = Math.floor(t3 * o2);
      n4.add(e5);
    }
    const a3 = [];
    return n4.forEach((t3) => {
      const e5 = s2 + t3;
      if (this._rangePromises.has(e5)) a3.push(this._rangePromises.get(e5));
      else {
        const i3 = r3.getRange(s2, t3).then(() => {
          this._rangePromises.delete(e5);
        }, () => {
          this._rangePromises.delete(e5);
        });
        this._rangePromises.set(e5, i3), a3.push(i3);
      }
    }), Promise.all(a3).then(() => {
      let n5 = this._glyphIndex[s2];
      n5 || (n5 = {}, this._glyphIndex[s2] = n5);
      for (const o3 of i2) {
        const i3 = n5[o3];
        if (i3) {
          h3[o3] = {
            sdf: true,
            rect: i3.rect,
            metrics: i3.metrics,
            page: i3.page,
            code: o3
          };
          continue;
        }
        const a4 = r3.getGlyph(s2, o3);
        if (!a4?.metrics) continue;
        const l = a4.metrics;
        let c2;
        if (0 === l.width) c2 = new t(0, 0, 0, 0);
        else {
          const e5 = 3, s3 = l.width + 2 * e5, i4 = l.height + 2 * e5;
          let h4 = s3 % 4 ? 4 - s3 % 4 : 4, r4 = i4 % 4 ? 4 - i4 % 4 : 4;
          1 === h4 && (h4 = 5), 1 === r4 && (r4 = 5), c2 = this._binPack.allocate(s3 + h4, i4 + r4), c2.isEmpty && (this._dirties[this._currentPage] || (this._glyphData[this._currentPage] = null), this._currentPage = this._glyphData.length, this._glyphData.push(new Uint8Array(this.width * this.height)), this._dirties.push(true), this._textures.push(void 0), this._binPack = new e4(this.width - 4, this.height - 4), c2 = this._binPack.allocate(s3 + h4, i4 + r4));
          const n6 = this._glyphData[this._currentPage], o4 = a4.bitmap;
          let g, _;
          if (o4) for (let t3 = 0; t3 < i4; t3++) {
            g = s3 * t3, _ = this.width * (c2.y + t3 + 1) + c2.x;
            for (let t4 = 0; t4 < s3; t4++) n6[_ + t4 + 1] = o4.at(g + t4);
          }
        }
        n5[o3] = {
          rect: c2,
          metrics: l,
          tileIDs: null,
          page: this._currentPage
        }, h3[o3] = {
          sdf: true,
          rect: c2,
          metrics: l,
          page: this._currentPage,
          code: o3
        }, this._dirties[this._currentPage] = true;
      }
      return h3;
    });
  }
  removeGlyphs(t3) {
    for (const e5 in this._glyphIndex) {
      const s2 = this._glyphIndex[e5];
      if (!s2) continue;
      let i2;
      for (const e6 in s2) if (i2 = s2[e6], i2.tileIDs.delete(t3), 0 === i2.tileIDs.size) {
        const t4 = this._glyphData[i2.page], h3 = i2.rect;
        let r3, n4;
        for (let e7 = 0; e7 < h3.height; e7++) for (r3 = this.width * (h3.y + e7) + h3.x, n4 = 0; n4 < h3.width; n4++) t4[r3 + n4] = 0;
        delete s2[e6], this._dirties[i2.page] = true;
      }
    }
  }
  bind(t3, e5, n4, o2 = 0) {
    if (!this._textures[n4]) {
      const e6 = new e3();
      e6.pixelFormat = G.ALPHA, e6.wrapMode = D.CLAMP_TO_EDGE, e6.width = this.width, e6.height = this.height, this._textures[n4] = new c(t3, e6, new Uint8Array(this.width * this.height));
    }
    const a3 = this._textures[n4];
    a3.setSamplingMode(e5), this._dirties[n4] && a3.setData(this._glyphData[n4]), t3.bindTexture(a3, o2), this._dirties[n4] = false;
  }
  destroy() {
    this.dispose();
  }
  dispose() {
    this._glyphData.length = 0, this._binPack = null;
    for (const t3 of this._textures) t3 && t3.dispose();
    this._textures.length = 0;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/GlyphSource.js
var s = class {
  constructor(t3) {
    if (this._metrics = [], !t3) return void (this._allBitmaps = null);
    const e5 = /* @__PURE__ */ new Map();
    let s2 = 0;
    for (; t3.next(); ) switch (t3.tag()) {
      case 1: {
        const a4 = t3.getMessage();
        for (; a4.next(); ) switch (a4.tag()) {
          case 3: {
            const t4 = a4.getMessage();
            let r4, n4, i2, c2, o2, g, h3;
            for (; t4.next(); ) switch (t4.tag()) {
              case 1:
                r4 = t4.getUInt32();
                break;
              case 2:
                n4 = t4.getBytes();
                break;
              case 3:
                i2 = t4.getUInt32();
                break;
              case 4:
                c2 = t4.getUInt32();
                break;
              case 5:
                o2 = t4.getSInt32();
                break;
              case 6:
                g = t4.getSInt32();
                break;
              case 7:
                h3 = t4.getUInt32();
                break;
              default:
                t4.skip();
            }
            if (t4.release(), r4) {
              const t5 = n4?.length ?? 0;
              this._metrics[r4] = {
                width: i2,
                height: c2,
                left: o2,
                top: g,
                advance: h3,
                startOffset: s2,
                length: t5
              }, e5.set(r4, n4), s2 += t5;
            }
            break;
          }
          default:
            a4.skip();
        }
        a4.release();
        break;
      }
      default:
        t3.skip();
    }
    const a3 = new Uint8Array(s2), r3 = this._metrics;
    for (const [n4, i2] of e5) {
      const {
        startOffset: t4,
        length: e6
      } = r3[n4];
      if (i2) for (let s3 = 0; s3 < e6; ++s3) a3[t4 + s3] = i2[s3];
    }
    this._allBitmaps = a3;
  }
  getMetrics(t3) {
    return this._metrics[t3];
  }
  getBitmap(t3) {
    if (!this._allBitmaps) return;
    const e5 = this._metrics[t3];
    if (void 0 === e5) return;
    const {
      startOffset: s2,
      length: a3
    } = e5;
    return 0 !== a3 ? new n3(this._allBitmaps, s2, a3) : void 0;
  }
};
var a2 = class {
  constructor() {
    this._ranges = [];
  }
  get ranges() {
    return this._ranges;
  }
  getRange(t3) {
    return this._ranges[t3];
  }
  addRange(t3, e5) {
    this._ranges[t3] = e5;
  }
};
var r = class {
  constructor(t3) {
    this._glyphInfo = {}, this._baseURL = t3;
  }
  getRange(a3, r3) {
    const n4 = this._getFontStack(a3);
    if (n4.getRange(r3)) return Promise.resolve();
    const i2 = 256 * r3, c2 = i2 + 255;
    if (this._baseURL) {
      const o2 = this._baseURL.replace("{fontstack}", a3).replace("{range}", i2 + "-" + c2);
      return U(o2, {
        responseType: "array-buffer"
      }).then((t3) => {
        n4.addRange(r3, new s(new n(new Uint8Array(t3.data), new DataView(t3.data))));
      }).catch(() => {
        n4.addRange(r3, new s());
      });
    }
    return n4.addRange(r3, new s()), Promise.resolve();
  }
  getGlyph(t3, e5) {
    const s2 = this._getFontStack(t3);
    if (!s2) return;
    const a3 = Math.floor(e5 / 256), r3 = s2.getRange(a3);
    return r3 ? {
      metrics: r3.getMetrics(e5),
      bitmap: r3.getBitmap(e5)
    } : void 0;
  }
  _getFontStack(t3) {
    let e5 = this._glyphInfo[t3];
    return e5 || (e5 = this._glyphInfo[t3] = new a2()), e5;
  }
};
var n3 = class {
  constructor(t3, e5, s2) {
    this._array = t3, this._start = e5, this.length = s2;
  }
  at(t3) {
    return 0 <= t3 && t3 < this.length ? this._array[this._start + t3] : void 0;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/SpriteMosaic.js
var r2 = "dasharray-";
var o = class _o {
  constructor(t3, s2, e5 = 0) {
    this._size = [], this._mosaicsData = [], this._textures = [], this._dirties = [], this._maxItemSize = 0, this._currentPage = 0, this._pageWidth = 0, this._pageHeight = 0, this._mosaicRects = {}, this.pixelRatio = 1, s2 <= 0 && console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"), this._pageWidth = t3, this._pageHeight = s2, e5 > 0 && (this._maxItemSize = e5), this._binPack = new e4(t3 - 4, s2 - 4);
  }
  destroy() {
    this.dispose();
  }
  dispose() {
    this._binPack = null, this._mosaicsData.length = 0, this._mosaicRects = {};
    for (const t3 of this._textures) t3 && t3.dispose();
    this._textures.length = 0;
  }
  getWidth(t3) {
    return t3 >= this._size.length ? -1 : this._size[t3][0];
  }
  getHeight(t3) {
    return t3 >= this._size.length ? -1 : this._size[t3][1];
  }
  getPageSize(t3) {
    return t3 >= this._size.length ? null : this._size[t3];
  }
  setSpriteSource(t3) {
    if (this.dispose(), this.pixelRatio = t3.devicePixelRatio, 0 === this._mosaicsData.length) {
      this._binPack = new e4(this._pageWidth - 4, this._pageHeight - 4);
      const t4 = Math.floor(this._pageWidth), s2 = Math.floor(this._pageHeight), e5 = new Uint32Array(t4 * s2);
      this._mosaicsData[0] = e5, this._dirties.push(true), this._size.push([this._pageWidth, this._pageHeight]), this._textures.push(void 0);
    }
    this._sprites = t3;
  }
  getSpriteItem(t3, i2 = false) {
    let s2, e5, h3 = this._mosaicRects[t3];
    if (h3) return h3;
    if (!this._sprites || "loaded" !== this._sprites.loadStatus) return null;
    if (t3 && t3.startsWith(r2) ? ([s2, e5] = this._rasterizeDash(t3), i2 = true) : s2 = this._sprites.getSpriteInfo(t3), !s2?.width || !s2.height || s2.width < 0 || s2.height < 0) return null;
    const a3 = s2.width, o2 = s2.height, [n4, _, g] = this._allocateImage(a3, o2);
    return n4.width <= 0 ? null : (this._copy(n4, s2, _, g, i2, e5), h3 = {
      type: "sprite",
      rect: n4,
      width: a3,
      height: o2,
      sdf: s2.sdf,
      simplePattern: false,
      rasterizationScale: s2.pixelRatio,
      page: _
    }, this._mosaicRects[t3] = h3, h3);
  }
  getSpriteItems(t3) {
    const i2 = {};
    for (const s2 of t3) i2[s2.name] = this.getSpriteItem(s2.name, s2.repeat);
    return i2;
  }
  getMosaicItemPosition(t3, i2) {
    const s2 = this.getSpriteItem(t3, i2), e5 = s2?.rect;
    if (!e5) return null;
    e5.width = s2.width, e5.height = s2.height;
    const h3 = s2.width, a3 = s2.height, r3 = 2;
    return {
      tl: [e5.x + r3, e5.y + r3],
      br: [e5.x + r3 + h3, e5.y + r3 + a3],
      page: s2.page
    };
  }
  bind(t3, i2, s2 = 0, r3 = 0) {
    if (s2 >= this._size.length || s2 >= this._mosaicsData.length) return;
    if (!this._textures[s2]) {
      const i3 = new e3();
      i3.wrapMode = D.CLAMP_TO_EDGE, i3.width = this._size[s2][0], i3.height = this._size[s2][1], this._textures[s2] = new c(t3, i3, new Uint8Array(this._mosaicsData[s2].buffer));
    }
    const o2 = this._textures[s2];
    o2.setSamplingMode(i2), this._dirties[s2] && o2.setData(new Uint8Array(this._mosaicsData[s2].buffer)), t3.bindTexture(o2, r3), this._dirties[s2] = false;
  }
  static _copyBits(t3, i2, s2, e5, h3, a3, r3, o2, n4, _, g) {
    let c2 = e5 * i2 + s2, p3 = o2 * a3 + r3;
    if (g) {
      p3 -= a3;
      for (let r4 = -1; r4 <= _; r4++, c2 = ((r4 + _) % _ + e5) * i2 + s2, p3 += a3) for (let i3 = -1; i3 <= n4; i3++) h3[p3 + i3] = t3[c2 + (i3 + n4) % n4];
    } else for (let l = 0; l < _; l++) {
      for (let i3 = 0; i3 < n4; i3++) h3[p3 + i3] = t3[c2 + i3];
      c2 += i2, p3 += a3;
    }
  }
  _copy(t3, i2, s2, e5, h3, a3) {
    if (!this._sprites || "loaded" !== this._sprites.loadStatus || s2 >= this._mosaicsData.length) return;
    const r3 = new Uint32Array(a3 ? a3.buffer : this._sprites.image.buffer), n4 = this._mosaicsData[s2], _ = 2, g = a3 ? i2.width : this._sprites.width;
    _o._copyBits(r3, g, i2.x, i2.y, n4, e5[0], t3.x + _, t3.y + _, i2.width, i2.height, h3), this._dirties[s2] = true;
  }
  _allocateImage(t3, e5) {
    t3 += 2, e5 += 2;
    const h3 = Math.max(t3, e5);
    if (this._maxItemSize && this._maxItemSize < h3) {
      const i2 = new t(0, 0, t3, e5);
      return this._mosaicsData.push(new Uint32Array(t3 * e5)), this._dirties.push(true), this._size.push([t3, e5]), this._textures.push(void 0), [i2, this._mosaicsData.length - 1, [t3, e5]];
    }
    let a3 = t3 % 4 ? 4 - t3 % 4 : 4, r3 = e5 % 4 ? 4 - e5 % 4 : 4;
    1 === a3 && (a3 = 5), 1 === r3 && (r3 = 5);
    const o2 = this._binPack.allocate(t3 + a3, e5 + r3);
    return o2.width <= 0 ? (this._dirties[this._currentPage] || (this._mosaicsData[this._currentPage] = null), this._currentPage = this._mosaicsData.length, this._mosaicsData.push(new Uint32Array(this._pageWidth * this._pageHeight)), this._dirties.push(true), this._size.push([this._pageWidth, this._pageHeight]), this._textures.push(void 0), this._binPack = new e4(this._pageWidth - 4, this._pageHeight - 4), this._allocateImage(t3, e5)) : [o2, this._currentPage, [this._pageWidth, this._pageHeight]];
  }
  _rasterizeDash(i2) {
    const s2 = /\[(.*?)\]/, e5 = i2.match(s2);
    if (!e5) return null;
    const h3 = e5[1].split(",").map(Number), a3 = i2.slice(i2.lastIndexOf("-") + 1), [r3, o2, n4] = i(h3, a3);
    return [{
      x: 0,
      y: 0,
      width: o2,
      height: n4,
      sdf: true,
      pixelRatio: 1
    }, new Uint8Array(r3.buffer)];
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/TileHandler.js
var h2 = class {
  constructor(t3, e5, s2, r3) {
    this._layer = t3, this._styleRepository = e5, this.devicePixelRatio = s2, this._sourceDataMaxLOD = r3, this._spriteMosaic = null, this._glyphMosaic = null, this._connection = null, this._spriteSourceAbortController = null, this._startOptionsInputSignal = null, this._inputSignalEventListener = null;
  }
  destroy() {
    this._connection?.close(), this._connection = null, this._styleRepository = null, this._layer = null, this._spriteMosaic?.destroy(), this._spriteMosaic = null, this._glyphMosaic = null, this._spriteSourceAbortController = e(this._spriteSourceAbortController), this._spriteSourcePromise = null, this._inputSignalEventListener && this._startOptionsInputSignal?.removeEventListener("abort", this._inputSignalEventListener), this._startOptionsInputSignal = null, this._inputSignalEventListener = null;
  }
  get spriteMosaic() {
    return this._spriteSourcePromise.then(() => this._spriteMosaic);
  }
  get glyphMosaic() {
    return this._glyphMosaic;
  }
  start(t3) {
    return __async(this, null, function* () {
      this._requestSprite(t3);
      const s2 = this._layer.currentStyleInfo.glyphsUrl, r3 = new r(s2 ? Et(s2, __spreadProps(__spreadValues({}, this._layer.customParameters), {
        token: this._layer.apiKey
      })) : null);
      this._glyphMosaic = new n2(1024, 1024, r3), this._broadcastPromise = p("WorkerTileHandler", {
        client: this,
        schedule: t3.schedule,
        signal: t3.signal
      }).then((s3) => {
        if (this._layer && (this._connection?.close(), this._connection = s3, this._layer && !this._connection.closed)) {
          const r4 = s3.broadcast("setStyle", {
            style: this._layer.currentStyleInfo.style,
            sourceDataMaxLOD: this._sourceDataMaxLOD
          }, t3);
          Promise.all(r4).catch((t4) => f(t4));
        }
      });
    });
  }
  _requestSprite(t3) {
    this._spriteSourceAbortController?.abort();
    const e5 = new AbortController();
    this._spriteSourceAbortController = e5;
    const r3 = t3?.signal;
    this._inputSignalEventListener && this._startOptionsInputSignal?.removeEventListener("abort", this._inputSignalEventListener), this._startOptionsInputSignal = null, r3 && (this._inputSignalEventListener = p2(e5), r3.addEventListener("abort", this._inputSignalEventListener, {
      once: true
    }));
    const {
      signal: i2
    } = e5, o2 = __spreadProps(__spreadValues({}, t3), {
      signal: i2
    });
    this._spriteSourcePromise = this._layer.loadSpriteSource(this.devicePixelRatio, o2), this._spriteSourcePromise.then((t4) => {
      a(i2), this._spriteMosaic = new o(1024, 1024, 250), this._spriteMosaic.setSpriteSource(t4);
    });
  }
  updateStyle(t3) {
    return __async(this, null, function* () {
      return yield this._broadcastPromise, this._broadcastPromise = Promise.all(this._connection.broadcast("updateStyle", t3)), this._broadcastPromise;
    });
  }
  setSpriteSource(t3) {
    const e5 = new o(1024, 1024, 250);
    return e5.setSpriteSource(t3), this._spriteMosaic = e5, this._spriteSourcePromise = Promise.resolve(t3), this._spriteSourceAbortController = null, e5;
  }
  setStyle(t3, e5, s2) {
    return __async(this, null, function* () {
      yield this._broadcastPromise, this._styleRepository = t3, this._sourceDataMaxLOD = s2, this._requestSprite();
      const r3 = new r(this._layer.currentStyleInfo.glyphsUrl ? Et(this._layer.currentStyleInfo.glyphsUrl, __spreadProps(__spreadValues({}, this._layer.customParameters), {
        token: this._layer.apiKey
      })) : null);
      return this._glyphMosaic = new n2(1024, 1024, r3), this._broadcastPromise = Promise.all(this._connection.broadcast("setStyle", {
        style: e5,
        sourceDataMaxLOD: this._sourceDataMaxLOD
      })), this._broadcastPromise;
    });
  }
  fetchTileData(t3, e5) {
    return __async(this, null, function* () {
      const s2 = yield this._getRefKeys(t3, e5);
      return this._getSourcesData(Object.keys(this._layer.sourceNameToSource), s2, e5);
    });
  }
  fetchTilePBFs(t3) {
    return __async(this, null, function* () {
      const e5 = Object.keys(this._layer.sourceNameToSource), s2 = {}, r3 = yield this._getRefKeys(t3, s2), i2 = [], o2 = [];
      for (let n4 = 0; n4 < r3.length; n4++) if (null == r3[n4].value || null == e5[n4]) o2.push(null);
      else {
        const t4 = r3[n4].value, a3 = this._getTilePayload(t4, e5[n4], s2);
        a3.then((e6) => {
          i2.push(__spreadProps(__spreadValues({}, e6), {
            key: t4
          }));
        }), o2.push(a3);
      }
      return Promise.all(o2).then(() => i2);
    });
  }
  parseTileData(t3, e5) {
    return __async(this, null, function* () {
      const s2 = t3 && t3.data;
      if (!s2) return null;
      const {
        sourceName2DataAndRefKey: r3,
        transferList: i2
      } = s2;
      return 0 === Object.keys(r3).length ? null : this._broadcastPromise.then(() => this._connection.invoke("createTileAndParse", {
        key: t3.key.id,
        sourceName2DataAndRefKey: r3,
        styleLayerUIDs: t3.styleLayerUIDs
      }, __spreadProps(__spreadValues({}, e5), {
        transferList: i2
      })));
    });
  }
  getSprites(t3) {
    return __async(this, null, function* () {
      return yield this._spriteSourcePromise, this._spriteMosaic.getSpriteItems(t3);
    });
  }
  getGlyphs(t3) {
    return this._glyphMosaic.getGlyphItems(t3.font, t3.codePoints);
  }
  _getTilePayload(t3, e5, s2) {
    return __async(this, null, function* () {
      const i2 = e2.pool.acquire(t3.id), o2 = this._layer.sourceNameToSource[e5], {
        level: n4,
        row: a3,
        col: l
      } = i2;
      e2.pool.release(i2);
      try {
        return {
          protobuff: yield o2.requestTile(n4, a3, l, s2),
          sourceName: e5
        };
      } catch (c2) {
        if (b(c2)) throw c2;
        return {
          protobuff: null,
          sourceName: e5
        };
      }
    });
  }
  _getRefKeys(t3, e5) {
    return __async(this, null, function* () {
      const s2 = this._layer.sourceNameToSource, r3 = new Array();
      for (const i2 in s2) {
        const o2 = s2[i2].getRefKey(t3, e5);
        r3.push(o2);
      }
      return v(r3);
    });
  }
  _getSourcesData(t3, e5, s2) {
    const r3 = [];
    for (let i2 = 0; i2 < e5.length; i2++) if (null == e5[i2].value || null == t3[i2]) r3.push(null);
    else {
      const o2 = e5[i2].value, n4 = this._getTilePayload(o2, t3[i2], s2);
      r3.push(n4);
    }
    return v(r3).then((t4) => {
      const s3 = {}, r4 = [];
      for (let i2 = 0; i2 < t4.length; i2++) {
        const o2 = t4[i2].value;
        if (o2 && o2.protobuff && o2.protobuff.byteLength > 0) {
          const t5 = e5[i2].value.id;
          s3[o2.sourceName] = {
            refKey: t5,
            protobuff: o2.protobuff
          }, r4.push(o2.protobuff);
        }
      }
      return {
        sourceName2DataAndRefKey: s3,
        transferList: r4
      };
    });
  }
};
function p2(t3) {
  return () => t3.abort();
}

// ../../../node_modules/@arcgis/core/views/2d/tiling/TileInfoViewPOT.js
var t2 = class extends h {
  constructor() {
    super(...arguments), this._fullCacheLodInfos = null, this._levelByScale = {};
  }
  getTileParentId(e5) {
    const l = e2.pool.acquire(e5), t3 = 0 === l.level ? null : e2.getId(l.level - 1, l.row >> 1, l.col >> 1, l.world);
    return e2.pool.release(l), t3;
  }
  getTileCoverage(e5, l, s2 = true, t3) {
    const o2 = super.getTileCoverage(e5, l, s2, t3);
    if (!o2) return o2;
    const i2 = 1 << o2.lodInfo.level;
    return o2.spans = o2.spans.filter((e6) => e6.row >= 0 && e6.row < i2), o2;
  }
  scaleToLevel(e5) {
    if (this._fullCacheLodInfos || this._initializeFullCacheLODs(this._lodInfos), this._levelByScale[e5]) return this._levelByScale[e5];
    {
      const l = this._fullCacheLodInfos;
      if (e5 > l[0].scale) return l[0].level;
      let s2, t3;
      for (let o2 = 0; o2 < l.length - 1; o2++) if (t3 = l[o2 + 1], e5 > t3.scale) return s2 = l[o2], s2.level + (s2.scale - e5) / (s2.scale - t3.scale);
      return l[l.length - 1].level;
    }
  }
  _initializeFullCacheLODs(l) {
    let s2;
    if (0 === l[0].level) s2 = l.map((e5) => ({
      level: e5.level,
      resolution: e5.resolution,
      scale: e5.scale
    }));
    else {
      const l2 = this.tileInfo.size[0], t3 = this.tileInfo.spatialReference;
      s2 = z.create({
        size: l2,
        spatialReference: t3
      }).lods.map((e5) => ({
        level: e5.level,
        resolution: e5.resolution,
        scale: e5.scale
      }));
    }
    for (let e5 = 0; e5 < s2.length; e5++) this._levelByScale[s2[e5].scale] = s2[e5].level;
    this._fullCacheLodInfos = s2;
  }
};

export {
  h2 as h,
  t2 as t
};
//# sourceMappingURL=chunk-XBO6SJGQ.js.map
