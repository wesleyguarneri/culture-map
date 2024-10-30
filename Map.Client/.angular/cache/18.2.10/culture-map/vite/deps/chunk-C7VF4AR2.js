import {
  u
} from "./chunk-ZDC4PV4Y.js";
import {
  A,
  C,
  F,
  V
} from "./chunk-YLE5AYZV.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import {
  f,
  i,
  m
} from "./chunk-DXLOWWK7.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/webgl/BufferObject.js
var f2 = () => n.getLogger("esri.views.webgl.BufferObject");
var c = class _c {
  static createIndex(t, e, i2) {
    return new _c(t, A.ELEMENT_ARRAY_BUFFER, e, i2);
  }
  static createVertex(t, e, i2) {
    return new _c(t, A.ARRAY_BUFFER, e, i2);
  }
  static createUniform(t, e, i2) {
    return new _c(t, A.UNIFORM_BUFFER, e, i2);
  }
  static createPixelPack(t, e = F.STREAM_READ, i2) {
    const s = new _c(t, A.PIXEL_PACK_BUFFER, e);
    return i2 && s.setSize(i2), s;
  }
  static createPixelUnpack(t, e = F.STREAM_DRAW, i2) {
    return new _c(t, A.PIXEL_UNPACK_BUFFER, e, i2);
  }
  static createTransformFeedback(t, e = F.STATIC_DRAW, i2) {
    const s = new _c(t, A.TRANSFORM_FEEDBACK_BUFFER, e);
    return s.setSize(i2), s;
  }
  constructor(t, e, i2, s) {
    this._context = t, this.bufferType = e, this.usage = i2, this._glName = null, this._size = -1, this._indexType = void 0, t.instanceCounter.increment(V.BufferObject, this), this._glName = this._context.gl.createBuffer(), u(this._context.gl), s && this.setData(s);
  }
  get glName() {
    return this._glName;
  }
  get size() {
    return this._size;
  }
  get indexType() {
    return this._indexType;
  }
  get usedMemory() {
    return this.bufferType === A.ELEMENT_ARRAY_BUFFER ? this._indexType === C.UNSIGNED_INT ? 4 * this._size : 2 * this._size : this._size;
  }
  get _isVAOAware() {
    return this.bufferType === A.ELEMENT_ARRAY_BUFFER || this.bufferType === A.ARRAY_BUFFER;
  }
  dispose() {
    if (this._context?.gl) {
      if (this._glName) {
        this._context.gl.deleteBuffer(this._glName), this._glName = null;
      }
      this._context.instanceCounter.decrement(V.BufferObject, this), this._context = null;
    } else this._glName && f2().warn("Leaked WebGL buffer object");
  }
  setSize(t, e = null) {
    if (this.bufferType === A.ELEMENT_ARRAY_BUFFER && null != e) switch (this._indexType = e, e) {
      case C.UNSIGNED_SHORT:
        t *= 2;
        break;
      case C.UNSIGNED_INT:
        t *= 4;
    }
    this._setBufferData(t);
  }
  setData(t) {
    if (!t) return;
    let e = t.byteLength;
    this.bufferType === A.ELEMENT_ARRAY_BUFFER && (i(t) && (e /= 2, this._indexType = C.UNSIGNED_SHORT), f(t) && (e /= 4, this._indexType = C.UNSIGNED_INT)), this._setBufferData(e, t);
  }
  _setBufferData(t, e = null) {
    this._size = t;
    const i2 = this._context.getBoundVAO();
    this._isVAOAware && this._context.bindVAO(null), this._context.bindBuffer(this);
    const s = this._context.gl;
    null != e ? s.bufferData(this.bufferType, e, this.usage) : s.bufferData(this.bufferType, t, this.usage), u(s), this._isVAOAware && this._context.bindVAO(i2);
  }
  setSubData(t, e, i2, s) {
    if (!t) return;
    const n2 = this._context.getBoundVAO();
    this._isVAOAware && this._context.bindVAO(null), this._context.bindBuffer(this);
    const {
      gl: _
    } = this._context;
    _.bufferSubData(this.bufferType, e * t.BYTES_PER_ELEMENT, t, i2, s - i2), u(_), this._isVAOAware && this._context.bindVAO(n2);
  }
  getSubData(t, e = 0, i2, s) {
    if (i2 < 0 || s < 0) return;
    const r = o(t) ? t.BYTES_PER_ELEMENT : 1;
    if (r * ((i2 ?? 0) + (s ?? 0)) > t.byteLength) return;
    e + r * (s ?? 0) > this.usedMemory && f2().warn("Potential problem getting subdata: requested data exceeds buffer size!");
    const _ = this._context.gl;
    this.bufferType === A.TRANSFORM_FEEDBACK_BUFFER ? (this._context.bindBuffer(this, A.TRANSFORM_FEEDBACK_BUFFER), _.getBufferSubData(A.TRANSFORM_FEEDBACK_BUFFER, e, t, i2, s), this._context.unbindBuffer(A.TRANSFORM_FEEDBACK_BUFFER)) : (this._context.bindBuffer(this, A.COPY_READ_BUFFER), _.getBufferSubData(A.COPY_READ_BUFFER, e, t, i2, s), this._context.unbindBuffer(A.COPY_READ_BUFFER));
  }
  getSubDataAsync(t, e = 0, i2, s) {
    return __async(this, null, function* () {
      yield this._context.clientWaitAsync(), this.getSubData(t, e, i2, s);
    });
  }
};
function o(e) {
  return m(e);
}

export {
  c
};
//# sourceMappingURL=chunk-C7VF4AR2.js.map
