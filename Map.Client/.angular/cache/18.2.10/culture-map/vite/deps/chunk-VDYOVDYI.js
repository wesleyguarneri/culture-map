import {
  r as r2
} from "./chunk-R3AQ3TGL.js";
import {
  e as e3
} from "./chunk-T3454WZK.js";
import {
  o as o2
} from "./chunk-6YA72G7G.js";
import {
  e as e2
} from "./chunk-3PCYF7PE.js";
import {
  E
} from "./chunk-NJSYD5KZ.js";
import {
  c
} from "./chunk-C7VF4AR2.js";
import {
  e
} from "./chunk-3NGDRCQI.js";
import {
  w
} from "./chunk-NQEXQAS7.js";
import {
  F
} from "./chunk-YLE5AYZV.js";
import {
  M,
  f,
  h,
  o
} from "./chunk-JYODC3YQ.js";
import {
  r
} from "./chunk-2MMLMOWS.js";
import {
  A2 as A
} from "./chunk-DXLOWWK7.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/core.js
var t = class {
  constructor(t2, s2) {
    this.sourceTile = s2, this.xTile = 0, this.yTile = 0, this.hash = 0, this.priority = 1, this.featureIndex = 0, this.colliders = [], this.textVertexRanges = [], this.iconVertexRanges = [], this.tile = t2;
  }
};
var s = class {
  constructor() {
    this.tileSymbols = [], this.parts = [{
      startTime: 0,
      startOpacity: 0,
      targetOpacity: 0,
      show: false
    }, {
      startTime: 0,
      startOpacity: 0,
      targetOpacity: 0,
      show: false
    }], this.show = false;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/util.js
function o3(t2, e4, s2, o4, i2, l3) {
  const r4 = s2 - i2;
  if (r4 >= 0) return (e4 >> r4) + (o4 - (l3 << r4)) * (t2 >> r4);
  const n2 = -r4;
  return e4 - (l3 - (o4 << n2)) * (t2 >> n2) << n2;
}
var i = class {
  constructor(t2, e4, s2) {
    this._rows = Math.ceil(e4 / s2), this._columns = Math.ceil(t2 / s2), this._cellSize = s2, this.cells = new Array(this._rows);
    for (let o4 = 0; o4 < this._rows; o4++) {
      this.cells[o4] = new Array(this._columns);
      for (let t3 = 0; t3 < this._columns; t3++) this.cells[o4][t3] = [];
    }
  }
  getCell(t2, e4) {
    const s2 = Math.min(Math.max(Math.floor(e4 / this._cellSize), 0), this._rows - 1), o4 = Math.min(Math.max(Math.floor(t2 / this._cellSize), 0), this._columns - 1);
    return this.cells[s2] && this.cells[s2][o4] || null;
  }
  getCellSpan(t2, e4, s2, o4) {
    return [Math.min(Math.max(Math.floor(t2 / this._cellSize), 0), this.columns - 1), Math.min(Math.max(Math.floor(e4 / this._cellSize), 0), this.rows - 1), Math.min(Math.max(Math.floor(s2 / this._cellSize), 0), this.columns - 1), Math.min(Math.max(Math.floor(o4 / this._cellSize), 0), this.rows - 1)];
  }
  get cellSize() {
    return this._cellSize;
  }
  get columns() {
    return this._columns;
  }
  get rows() {
    return this._rows;
  }
};
function l(t2, e4, o4, i2, l3, r4, n2) {
  const c4 = e4[i2++];
  for (let a = 0; a < c4; a++) {
    const c5 = new t(r4, n2);
    c5.xTile = e4[i2++], c5.yTile = e4[i2++], c5.hash = e4[i2++], c5.priority = e4[i2++], c5.featureIndex = e4[i2++];
    const a2 = e4[i2++];
    for (let t3 = 0; t3 < a2; t3++) {
      const t4 = e4[i2++], s2 = e4[i2++], l4 = e4[i2++], r5 = e4[i2++], n3 = !!e4[i2++], a3 = e4[i2++], h4 = o4[i2++], u4 = o4[i2++], f3 = e4[i2++], m2 = e4[i2++];
      c5.colliders.push({
        xTile: t4,
        yTile: s2,
        dxPixels: l4,
        dyPixels: r5,
        hard: n3,
        partIndex: a3,
        width: f3,
        height: m2,
        minLod: h4,
        maxLod: u4
      });
    }
    const h3 = t2[i2++];
    for (let e5 = 0; e5 < h3; e5++) c5.textVertexRanges.push([t2[i2++], t2[i2++]]);
    const u3 = t2[i2++];
    for (let e5 = 0; e5 < u3; e5++) c5.iconVertexRanges.push([t2[i2++], t2[i2++]]);
    l3.push(c5);
  }
  return i2;
}
function r3(t2, e4, s2) {
  for (const [o4, i2] of t2.symbols) n(t2, e4, s2, i2, o4);
}
function n(e4, s2, o4, i2, l3) {
  const r4 = e4.layerData.get(l3);
  if (r4.type === E.SYMBOL) {
    for (const t2 of i2) {
      const s3 = t2.unique;
      let i3;
      if (t2.selectedForRendering) {
        const t3 = s3.parts[0], l4 = t3.startOpacity, r5 = t3.targetOpacity;
        e4.allSymbolsFadingOut = e4.allSymbolsFadingOut && 0 === r5;
        const n2 = o4 ? Math.floor(127 * l4) | r5 << 7 : r5 ? 255 : 0;
        i3 = n2 << 24 | n2 << 16 | n2 << 8 | n2;
      } else i3 = 0;
      for (const [e5, o5] of t2.iconVertexRanges) for (let t3 = e5; t3 < e5 + o5; t3 += 4) r4.iconOpacity[t3 / 4] = i3;
      if (t2.selectedForRendering) {
        const t3 = s3.parts[1], l4 = t3.startOpacity, r5 = t3.targetOpacity;
        e4.allSymbolsFadingOut = e4.allSymbolsFadingOut && 0 === r5;
        const n2 = o4 ? Math.floor(127 * l4) | r5 << 7 : r5 ? 255 : 0;
        i3 = n2 << 24 | n2 << 16 | n2 << 8 | n2;
      } else i3 = 0;
      for (const [e5, o5] of t2.textVertexRanges) for (let t3 = e5; t3 < e5 + o5; t3 += 4) r4.textOpacity[t3 / 4] = i3;
    }
    r4.lastOpacityUpdate = s2, r4.opacityChanged = true;
  }
}
function c2(t2, s2, o4, i2) {
  const l3 = t2.colliders;
  let r4, n2, c4, a;
  for (const h3 of l3) {
    if (t2.unique.show && t2.unique.parts[h3.partIndex].show && (r4 = h3.xScreen - i2[0] + h3.dxScreen, n2 = h3.yScreen - i2[1] + h3.dyScreen, c4 = r4 + h3.width, a = n2 + h3.height, w(o4, s2.x, s2.y, r4, n2, c4, a))) return true;
  }
  return false;
}

// ../../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/RenderBucket.js
var h2 = class {
  constructor(t2, e4) {
    this.layerUIDs = [], this.isDestroyed = false, this._data = t2;
    let r4 = 1;
    const n2 = new Uint32Array(t2);
    this.layerUIDs = [];
    const s2 = n2[r4++];
    for (let i2 = 0; i2 < s2; i2++) this.layerUIDs[i2] = n2[r4++];
    this.bufferDataOffset = r4, e4 && (this.layer = e4.getStyleLayerByUID(this.layerUIDs[0]));
  }
  get isPreparedForRendering() {
    return null == this._data;
  }
  get offset() {
    return this.bufferDataOffset;
  }
  get data() {
    return this._data;
  }
  destroy() {
    this.isDestroyed || (this.doDestroy(), this._data = null, this.isDestroyed = true);
  }
  prepareForRendering(t2) {
    null != this._data && (this.doPrepareForRendering(t2, this._data, this.bufferDataOffset), this._data = null);
  }
};
var f2 = class extends h2 {
  constructor(t2, e4) {
    super(t2, e4), this.type = E.LINE, this.lineIndexStart = 0, this.lineIndexCount = 0;
    const r4 = new Uint32Array(t2);
    let s2 = this.bufferDataOffset;
    this.lineIndexStart = r4[s2++], this.lineIndexCount = r4[s2++];
    const i2 = r4[s2++];
    if (i2 > 0) {
      this.patternMap = /* @__PURE__ */ new Map();
      for (let t3 = 0; t3 < i2; t3++) {
        const t4 = r4[s2++], e5 = r4[s2++], n2 = r4[s2++];
        this.patternMap.set(t4, [e5, n2]);
      }
    }
    this.bufferDataOffset = s2;
  }
  get memoryUsed() {
    return (this.data?.byteLength ?? 0) + (this.vao?.usedMemory ?? 0);
  }
  hasData() {
    return this.lineIndexCount > 0;
  }
  triangleCount() {
    return this.lineIndexCount / 3;
  }
  doDestroy() {
    this.vao = r(this.vao);
  }
  doPrepareForRendering(t2, e4, r4) {
    const n2 = new Uint32Array(e4), s2 = new Int32Array(n2.buffer), h3 = n2[r4++], f3 = c.createVertex(t2, F.STATIC_DRAW, new Int32Array(s2.buffer, 4 * r4, h3));
    r4 += h3;
    const l3 = n2[r4++], c4 = c.createIndex(t2, F.STATIC_DRAW, new Uint32Array(n2.buffer, 4 * r4, l3));
    r4 += l3;
    const u3 = this.layer.lineMaterial;
    this.vao = new o2(t2, u3.getAttributeLocations(), u3.getLayoutInfo(), {
      geometry: f3
    }, c4);
  }
};
var l2 = class extends h2 {
  constructor(t2, e4) {
    super(t2, e4), this.type = E.FILL, this.fillIndexStart = 0, this.fillIndexCount = 0, this.outlineIndexStart = 0, this.outlineIndexCount = 0;
    const r4 = new Uint32Array(t2);
    let s2 = this.bufferDataOffset;
    this.fillIndexStart = r4[s2++], this.fillIndexCount = r4[s2++], this.outlineIndexStart = r4[s2++], this.outlineIndexCount = r4[s2++];
    const i2 = r4[s2++];
    if (i2 > 0) {
      this.patternMap = /* @__PURE__ */ new Map();
      for (let t3 = 0; t3 < i2; t3++) {
        const t4 = r4[s2++], e5 = r4[s2++], n2 = r4[s2++];
        this.patternMap.set(t4, [e5, n2]);
      }
    }
    this.bufferDataOffset = s2;
  }
  get memoryUsed() {
    return (this.data?.byteLength ?? 0) + (this.fillVAO?.usedMemory ?? 0) + (this.outlineVAO?.usedMemory ?? 0);
  }
  hasData() {
    return this.fillIndexCount > 0 || this.outlineIndexCount > 0;
  }
  triangleCount() {
    return (this.fillIndexCount + this.outlineIndexCount) / 3;
  }
  doDestroy() {
    this.fillVAO = r(this.fillVAO), this.outlineVAO = r(this.outlineVAO);
  }
  doPrepareForRendering(t2, e4, r4) {
    const n2 = new Uint32Array(e4), s2 = new Int32Array(n2.buffer), h3 = n2[r4++], f3 = c.createVertex(t2, F.STATIC_DRAW, new Int32Array(s2.buffer, 4 * r4, h3));
    r4 += h3;
    const l3 = n2[r4++], c4 = c.createIndex(t2, F.STATIC_DRAW, new Uint32Array(n2.buffer, 4 * r4, l3));
    r4 += l3;
    const u3 = n2[r4++], y = c.createVertex(t2, F.STATIC_DRAW, new Int32Array(s2.buffer, 4 * r4, u3));
    r4 += u3;
    const d2 = n2[r4++], A2 = c.createIndex(t2, F.STATIC_DRAW, new Uint32Array(n2.buffer, 4 * r4, d2));
    r4 += d2;
    const I = this.layer, p = I.fillMaterial, g = I.outlineMaterial;
    this.fillVAO = new o2(t2, p.getAttributeLocations(), p.getLayoutInfo(), {
      geometry: f3
    }, c4), this.outlineVAO = new o2(t2, g.getAttributeLocations(), g.getLayoutInfo(), {
      geometry: y
    }, A2);
  }
};
var c3 = class extends h2 {
  constructor(t2, e4, i2) {
    super(t2, e4), this.type = E.SYMBOL, this.iconPerPageElementsMap = /* @__PURE__ */ new Map(), this.glyphPerPageElementsMap = /* @__PURE__ */ new Map(), this.symbolInstances = [], this.isIconSDF = false, this.opacityChanged = false, this.lastOpacityUpdate = 0, this.symbols = [];
    const a = new Uint32Array(t2), o4 = new Int32Array(t2), h3 = new Float32Array(t2);
    let f3 = this.bufferDataOffset;
    this.isIconSDF = !!a[f3++];
    const l3 = a[f3++], c4 = a[f3++], u3 = a[f3++], y = new e(l3, c4, u3, 0), d2 = a[f3++];
    for (let r4 = 0; r4 < d2; r4++) {
      const t3 = a[f3++], e5 = a[f3++], r5 = a[f3++];
      this.iconPerPageElementsMap.set(t3, [e5, r5]);
    }
    const A2 = a[f3++];
    for (let r4 = 0; r4 < A2; r4++) {
      const t3 = a[f3++], e5 = a[f3++], r5 = a[f3++];
      this.glyphPerPageElementsMap.set(t3, [e5, r5]);
    }
    const I = a[f3++], p = a[f3++];
    this.iconOpacity = new Int32Array(I), this.textOpacity = new Int32Array(p), f3 = l(a, o4, h3, f3, this.symbols, i2, y), this.bufferDataOffset = f3;
  }
  get memoryUsed() {
    return (this.data?.byteLength ?? 0) + (this.iconVAO?.usedMemory ?? 0) + (this.textVAO?.usedMemory ?? 0) + A(this.iconOpacity) + A(this.textOpacity);
  }
  hasData() {
    return this.iconPerPageElementsMap.size > 0 || this.glyphPerPageElementsMap.size > 0;
  }
  triangleCount() {
    let t2 = 0;
    for (const [e4, r4] of this.iconPerPageElementsMap) t2 += r4[1];
    for (const [e4, r4] of this.glyphPerPageElementsMap) t2 += r4[1];
    return t2 / 3;
  }
  doDestroy() {
    this.iconVAO = r(this.iconVAO), this.textVAO = r(this.textVAO);
  }
  updateOpacityInfo() {
    if (!this.opacityChanged) return;
    this.opacityChanged = false;
    const t2 = this.iconOpacity, e4 = this.iconVAO.vertexBuffers.opacity;
    t2.length > 0 && t2.byteLength === e4.usedMemory && e4.setSubData(t2, 0, 0, t2.length);
    const r4 = this.textOpacity, n2 = this.textVAO.vertexBuffers.opacity;
    r4.length > 0 && r4.byteLength === n2.usedMemory && n2.setSubData(r4, 0, 0, r4.length);
  }
  doPrepareForRendering(t2, e4, r4) {
    const n2 = new Uint32Array(e4), s2 = new Int32Array(n2.buffer), h3 = n2[r4++], f3 = c.createVertex(t2, F.STATIC_DRAW, new Int32Array(s2.buffer, 4 * r4, h3));
    r4 += h3;
    const l3 = n2[r4++], c4 = c.createIndex(t2, F.STATIC_DRAW, new Uint32Array(n2.buffer, 4 * r4, l3));
    r4 += l3;
    const u3 = n2[r4++], y = c.createVertex(t2, F.STATIC_DRAW, new Int32Array(s2.buffer, 4 * r4, u3));
    r4 += u3;
    const d2 = n2[r4++], A2 = c.createIndex(t2, F.STATIC_DRAW, new Uint32Array(n2.buffer, 4 * r4, d2));
    r4 += d2;
    const I = c.createVertex(t2, F.STATIC_DRAW, this.iconOpacity.buffer), p = c.createVertex(t2, F.STATIC_DRAW, this.textOpacity.buffer), g = this.layer, x = g.iconMaterial, m2 = g.textMaterial;
    this.iconVAO = new o2(t2, x.getAttributeLocations(), x.getLayoutInfo(), {
      geometry: f3,
      opacity: I
    }, c4), this.textVAO = new o2(t2, m2.getAttributeLocations(), m2.getLayoutInfo(), {
      geometry: y,
      opacity: p
    }, A2);
  }
};
var u = class extends h2 {
  constructor(t2, e4) {
    super(t2, e4), this.type = E.CIRCLE, this.circleIndexStart = 0, this.circleIndexCount = 0;
    const r4 = new Uint32Array(t2);
    let s2 = this.bufferDataOffset;
    this.circleIndexStart = r4[s2++], this.circleIndexCount = r4[s2++], this.bufferDataOffset = s2;
  }
  get memoryUsed() {
    return (this.data?.byteLength ?? 0) + (this.vao?.usedMemory ?? 0);
  }
  hasData() {
    return this.circleIndexCount > 0;
  }
  triangleCount() {
    return this.circleIndexCount / 3;
  }
  doDestroy() {
    this.vao = r(this.vao);
  }
  doPrepareForRendering(t2, e4, r4) {
    const n2 = new Uint32Array(e4), s2 = new Int32Array(n2.buffer), h3 = n2[r4++], f3 = c.createVertex(t2, F.STATIC_DRAW, new Int32Array(s2.buffer, 4 * r4, h3));
    r4 += h3;
    const l3 = n2[r4++], c4 = c.createIndex(t2, F.STATIC_DRAW, new Uint32Array(n2.buffer, 4 * r4, l3));
    r4 += l3;
    const u3 = this.layer.circleMaterial;
    this.vao = new o2(t2, u3.getAttributeLocations(), u3.getLayoutInfo(), {
      geometry: f3
    }, c4);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/vectorTiles/VectorTile.js
var d = class _d extends r2 {
  constructor(e4, t2, s2, a, r4, i2, o4, h3 = null) {
    super(e4, t2, s2, a, r4, i2, 4096, 4096), this.styleRepository = o4, this._memCache = h3, this.type = "vector-tile", this._referenced = 0, this._hasSymbolBuckets = false, this._memoryUsedByLayerData = 0, this.layerData = /* @__PURE__ */ new Map(), this.status = "loading", this.allSymbolsFadingOut = false, this.lastOpacityUpdate = 0, this.symbols = /* @__PURE__ */ new Map(), this.isCoverage = false, this.neededForCoverage = false, this.decluttered = false, this.parentTile = null, this.childrenTiles = /* @__PURE__ */ new Set(), this.featureIndex = null, this.triangleCount = 0, this._processed = false, this._referenced = 1, this.id = e4.id;
  }
  get hasSymbolBuckets() {
    return this._hasSymbolBuckets;
  }
  get isFading() {
    return this._hasSymbolBuckets && performance.now() - this.lastOpacityUpdate < e2;
  }
  get isHoldingForFade() {
    return this._hasSymbolBuckets && (!this.allSymbolsFadingOut || performance.now() - this.lastOpacityUpdate < e2);
  }
  get wasRequested() {
    return "errored" === this.status || "loaded" === this.status || "reloading" === this.status;
  }
  setData(e4) {
    this.changeDataImpl(e4), this.requestRender(), this.ready(), this._processed = true;
  }
  deleteLayerData(e4) {
    let t2 = false;
    for (const s2 of e4) {
      const e5 = this.layerData.get(s2);
      e5 && (this._memoryUsedByLayerData -= e5.memoryUsed, e5.type === E.SYMBOL && this.symbols.delete(s2) && (t2 = true), e5.destroy(), this.layerData.delete(s2));
    }
    this._memCache?.updateSize(this.key.id, this, this._memoryUsedByLayerData), t2 && (this.featureIndex?.clear(), this.emit("symbols-changed")), this.requestRender();
  }
  processed() {
    return this._processed;
  }
  hasData() {
    return this.layerData.size > 0;
  }
  dispose() {
    "unloaded" !== this.status && (this.featureIndex = null, m.delete(this), _d._destroyRenderBuckets(this.layerData), this.layerData.clear(), this._memoryUsedByLayerData = 0, this.destroy(), this.status = "unloaded");
  }
  release() {
    return 0 == --this._referenced && (this.dispose(), this.stage = null, true);
  }
  retain() {
    ++this._referenced;
  }
  get referenced() {
    return this._referenced;
  }
  get usedMemory() {
    return this._memoryUsedByLayerData + 256;
  }
  changeDataImpl(e4) {
    this.featureIndex?.clear();
    let t2 = false;
    if (e4) {
      const {
        bucketsWithData: s2,
        emptyBuckets: a
      } = e4, r4 = this._createRenderBuckets(s2);
      if (a && a.byteLength > 0) {
        const e5 = new Uint32Array(a);
        for (const t3 of e5) this._deleteLayerData(t3);
      }
      for (const [e5, o4] of r4) this._deleteLayerData(e5), o4.type === E.SYMBOL && (this.symbols.set(e5, o4.symbols), t2 = true), this._memoryUsedByLayerData += o4.memoryUsed, this.layerData.set(e5, o4);
      this._memCache?.updateSize(this.key.id, this, this.usedMemory);
    }
    this._hasSymbolBuckets = false;
    for (const [s2, a] of this.layerData) a.type === E.SYMBOL && (this._hasSymbolBuckets = true);
    t2 && this.emit("symbols-changed");
  }
  attachWithContext(e4) {
    this.stage = {
      context: e4,
      trashDisplayObject(e5) {
        e5.processDetach();
      },
      untrashDisplayObject: () => false
    };
  }
  setTransform(r4) {
    super.setTransform(r4);
    const i2 = this.resolution / (r4.resolution * r4.pixelRatio), o4 = this.width / this.rangeX * i2, h3 = this.height / this.rangeY * i2, n2 = [0, 0];
    r4.toScreen(n2, [this.x, this.y]);
    const l3 = this.transforms.tileUnitsToPixels;
    o(l3), M(l3, l3, n2), h(l3, l3, Math.PI * r4.rotation / 180), f(l3, l3, [o4, h3, 1]);
  }
  _createTransforms() {
    return {
      displayViewScreenMat3: e3(),
      tileMat3: e3(),
      tileUnitsToPixels: e3()
    };
  }
  static _destroyRenderBuckets(e4) {
    if (!e4) return;
    const t2 = /* @__PURE__ */ new Set();
    for (const s2 of e4.values()) t2.has(s2) || (s2.destroy(), t2.add(s2));
    e4.clear();
  }
  _createRenderBuckets(e4) {
    const t2 = /* @__PURE__ */ new Map(), s2 = /* @__PURE__ */ new Map();
    for (const a of e4) {
      const e5 = this._deserializeBucket(a, s2);
      for (const s3 of e5.layerUIDs) t2.set(s3, e5);
    }
    return t2;
  }
  _deserializeBucket(e4, t2) {
    let s2 = t2.get(e4);
    if (s2) return s2;
    switch (new Uint32Array(e4)[0]) {
      case E.FILL:
        s2 = new l2(e4, this.styleRepository);
        break;
      case E.LINE:
        s2 = new f2(e4, this.styleRepository);
        break;
      case E.SYMBOL:
        s2 = new c3(e4, this.styleRepository, this);
        break;
      case E.CIRCLE:
        s2 = new u(e4, this.styleRepository);
    }
    return t2.set(e4, s2), s2;
  }
  _deleteLayerData(e4) {
    if (!this.layerData.has(e4)) return;
    const t2 = this.layerData.get(e4);
    this._memoryUsedByLayerData -= t2.memoryUsed, t2.destroy(), this.layerData.delete(e4);
  }
};
var m = /* @__PURE__ */ new Map();
function u2() {
  m.forEach((e4, t2) => {
    console.log(`
${t2.key}:`), e4[0].forEach((e5) => console.log(e5)), console.log("========"), e4[1].forEach((e5) => console.log(e5));
  });
}

export {
  s,
  o3 as o,
  i,
  r3 as r,
  c2 as c,
  d,
  u2 as u
};
//# sourceMappingURL=chunk-VDYOVDYI.js.map
