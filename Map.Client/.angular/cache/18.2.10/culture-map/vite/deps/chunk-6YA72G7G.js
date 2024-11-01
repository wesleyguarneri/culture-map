import {
  E
} from "./chunk-ZDC4PV4Y.js";
import {
  V
} from "./chunk-YLE5AYZV.js";
import {
  r
} from "./chunk-2MMLMOWS.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";
import {
  p2 as p
} from "./chunk-DXLOWWK7.js";

// ../../../node_modules/@arcgis/core/views/webgl/VertexArrayObject.js
var n2 = () => n.getLogger("esri.views.webgl.VertexArrayObject");
var o = class {
  constructor(e, t, i, r2, s = null) {
    this._context = e, this._locations = t, this._layout = i, this._buffers = r2, this._indexBuffer = s, this._glName = null, this._initialized = false;
  }
  get glName() {
    return this._glName;
  }
  get context() {
    return this._context;
  }
  get vertexBuffers() {
    return this._buffers;
  }
  get indexBuffer() {
    return this._indexBuffer;
  }
  get byteSize() {
    return Object.keys(this._buffers).reduce((e, t) => e + this._buffers[t].usedMemory, null != this._indexBuffer ? this._indexBuffer.usedMemory : 0);
  }
  get layout() {
    return this._layout;
  }
  get locations() {
    return this._locations;
  }
  get usedMemory() {
    return this.byteSize + (Object.keys(this._buffers).length + (this._indexBuffer ? 1 : 0)) * p;
  }
  dispose() {
    if (this._context) {
      this._context.getBoundVAO() === this && this._context.bindVAO(null);
      for (const e in this._buffers) this._buffers[e]?.dispose(), delete this._buffers[e];
      this._indexBuffer = r(this._indexBuffer), this.disposeVAOOnly();
    } else (this._glName || Object.getOwnPropertyNames(this._buffers).length > 0) && n2().warn("Leaked WebGL VAO");
  }
  disposeVAOOnly() {
    this._glName && (this._context.gl.deleteVertexArray(this._glName), this._glName = null, this._context.instanceCounter.decrement(V.VertexArrayObject, this)), this._context = null;
  }
  initialize() {
    if (this._initialized) return;
    const {
      gl: e
    } = this._context, t = e.createVertexArray();
    e.bindVertexArray(t), this._bindLayout(), e.bindVertexArray(null), this._glName = t, this._context.instanceCounter.increment(V.VertexArrayObject, this), this._initialized = true;
  }
  bind() {
    this.initialize(), this._context.gl.bindVertexArray(this.glName);
  }
  _bindLayout() {
    const {
      _buffers: e,
      _layout: t,
      _indexBuffer: i
    } = this;
    e || n2().error("Vertex buffer dictionary is empty!");
    const r2 = this._context.gl;
    for (const o2 in e) {
      const i2 = e[o2];
      i2 || n2().error("Vertex buffer is uninitialized!");
      const r3 = t[o2];
      r3 || n2().error("Vertex element descriptor is empty!"), E(this._context, this._locations, i2, r3);
    }
    null != i && r2.bindBuffer(r2.ELEMENT_ARRAY_BUFFER, i.glName);
  }
  unbind() {
    this.initialize(), this._context.gl.bindVertexArray(null);
  }
};

export {
  o
};
//# sourceMappingURL=chunk-6YA72G7G.js.map
