import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c,
  e2 as e
} from "./chunk-QATJRB5Q.js";
import {
  D,
  L
} from "./chunk-KYLW5XXS.js";
import {
  x
} from "./chunk-DLWZ3HVT.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextureBackedBuffer/SimpleIndexManager.js
var e2 = class {
  constructor(e3) {
    this._maxCount = e3, this._nextIndex = 0, this._recycledIndices = [];
  }
  get activeCount() {
    return this._nextIndex - this._recycledIndices.length;
  }
  get availableCount() {
    return this._recycledIndices.length + this._maxCount - this._nextIndex;
  }
  acquire() {
    return this._recycledIndices.length > 0 ? this._recycledIndices.pop() : this.availableCount ? this._nextIndex++ : void 0;
  }
  release(e3) {
    this._recycledIndices.push(e3);
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextureBackedBuffer/TextureBackedBuffer.js
var h = class {
  constructor(h2, a = 1) {
    this._rctx = h2, this._fieldCount = a, this.textureWidth = 4096, this._dirty = true;
    const d = new e(this.textureWidth, 1);
    d.samplingMode = L.NEAREST, d.wrapMode = D.CLAMP_TO_EDGE, this._texture = new c(this._rctx, d), this._data = new x(new ArrayBuffer(4 * this.textureWidth));
  }
  dispose() {
    this._texture.dispose(), this._texture = void 0, this._data = void 0;
  }
  setData(t, e3, i2, s, r3, h2) {
    const a = t * this._fieldCount + e3;
    this._dirty = true, this._data.set(a, 0, i2), this._data.set(a, 1, s), this._data.set(a, 2, r3), this._data.set(a, 3, h2);
  }
  setDataElement(t, e3, i2, s) {
    const r3 = t * this._fieldCount + e3;
    this._dirty = true, this._data.set(r3, i2, s);
  }
  getDataElement(t, e3, i2) {
    const s = t * this._fieldCount + e3;
    return this._dirty = true, this._data.get(s, i2);
  }
  resizeToFit(e3) {
    const i2 = (e3 + 1) * this._fieldCount;
    if (i2 > this._data.count) {
      const e4 = Math.ceil(i2 / this.textureWidth) * this.textureWidth, s = new x(new ArrayBuffer(4 * e4));
      s.typedBuffer.set(this._data.typedBuffer), this._data = s;
    }
  }
  updateTexture() {
    if (!this._dirty) return;
    const t = this._texture.descriptor.width, e3 = this._texture.descriptor.height;
    this._data.count > t * e3 && this._texture.resize(t, this._data.count / t), this._texture.setData(this._data.typedBuffer), this._dirty = false;
  }
  get texture() {
    return this._texture;
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextureBackedBuffer/ManagedTextureBackedBuffer.js
var r = 65536;
var i = class {
  constructor(i2, a = 1) {
    this.textureBuffer = new h(i2, a), this._indexManager = new e2(r);
  }
  dispose() {
    this.textureBuffer.dispose(), this.textureBuffer = void 0;
  }
  get availableCount() {
    return this._indexManager.availableCount;
  }
  get activeCount() {
    return this._indexManager.activeCount;
  }
  acquireIndex() {
    const e3 = this._indexManager.acquire();
    return this.textureBuffer.resizeToFit(e3), e3;
  }
  releaseIndex(e3) {
    this._indexManager.release(e3);
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextureBackedBuffer/BufferManager.js
var r2 = class {
  constructor(t, e3 = 1) {
    this._rctx = t, this._fieldCount = e3, this._buffers = [];
  }
  garbageCollect() {
    this._buffers = this._buffers.filter((t) => 0 !== t.activeCount || (t.dispose(), false));
  }
  destroy() {
    this._buffers.forEach((t) => t.dispose()), this._buffers = [];
  }
  getBuffer(r3) {
    for (const t of this._buffers) if (t.availableCount >= r3) return t;
    if (r3 > r) return null;
    const s = new i(this._rctx, this._fieldCount);
    return this._buffers.push(s), s;
  }
  updateTextures() {
    for (const t of this._buffers) t.textureBuffer.updateTexture();
  }
};

export {
  r2 as r
};
//# sourceMappingURL=chunk-V26NLM35.js.map
