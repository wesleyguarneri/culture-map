import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  a,
  c,
  i,
  s as s2
} from "./chunk-RVGJHCZ2.js";
import {
  r as r3
} from "./chunk-FEREHKJY.js";
import "./chunk-EPIUUGS2.js";
import {
  m
} from "./chunk-CE7BUKSQ.js";
import "./chunk-NOVQFMBE.js";
import {
  C,
  D
} from "./chunk-KYLW5XXS.js";
import {
  M
} from "./chunk-MIIC4I55.js";
import "./chunk-B63XAMYJ.js";
import "./chunk-THUD7LGO.js";
import "./chunk-A45QR3VT.js";
import "./chunk-MYCEJRPQ.js";
import "./chunk-YSJVVDDH.js";
import "./chunk-53Z6KOJR.js";
import "./chunk-DLWZ3HVT.js";
import "./chunk-B76NC7GX.js";
import {
  N,
  T
} from "./chunk-CSK4VZQ7.js";
import {
  e as e2,
  o as o2,
  r as r2
} from "./chunk-GSG4T2KM.js";
import "./chunk-GK5M6FUR.js";
import "./chunk-MRP3FBLV.js";
import "./chunk-Y7SJWJAL.js";
import "./chunk-A2FDYA6M.js";
import "./chunk-YGAXDKHF.js";
import "./chunk-4TOSJLKR.js";
import "./chunk-DL2B6IFJ.js";
import "./chunk-KUBMHTYA.js";
import "./chunk-K43CZ3M5.js";
import "./chunk-6EIBUVMG.js";
import "./chunk-LM3JDV4W.js";
import "./chunk-34V2CLL5.js";
import "./chunk-KOI252FF.js";
import "./chunk-RLGDH6IY.js";
import "./chunk-MRPCXIVS.js";
import "./chunk-YTKVV2Y3.js";
import "./chunk-GCVQXAS4.js";
import "./chunk-UFQD6AL4.js";
import "./chunk-BXONKQKI.js";
import "./chunk-RNF7VOCU.js";
import "./chunk-TIRJMGGG.js";
import "./chunk-ZDRQSPB6.js";
import "./chunk-DCXDXGAR.js";
import "./chunk-BCCDYCTQ.js";
import "./chunk-66YQWHHE.js";
import "./chunk-QGBMZIP4.js";
import "./chunk-AOEBZVTA.js";
import {
  h
} from "./chunk-2OZSYJDX.js";
import {
  G,
  _ as _2,
  e,
  o,
  z
} from "./chunk-MZM4INJV.js";
import {
  _,
  l,
  n as n2,
  t
} from "./chunk-J4GMQHGL.js";
import "./chunk-MHPE4SZA.js";
import "./chunk-6SSA7P3A.js";
import "./chunk-FQBTLEUI.js";
import "./chunk-GS7Y3YOG.js";
import "./chunk-Y2HYKTTT.js";
import "./chunk-XLEC46FY.js";
import "./chunk-4AZPIP7K.js";
import "./chunk-PH6NPTP7.js";
import "./chunk-NUICEVIH.js";
import "./chunk-NXK752PZ.js";
import "./chunk-UVNLCXWD.js";
import "./chunk-PNUA7JOS.js";
import "./chunk-OR2FKGUM.js";
import {
  r2 as r
} from "./chunk-UDMPWVPF.js";
import "./chunk-XJNKCEWL.js";
import {
  s
} from "./chunk-AIZ3T7E3.js";
import "./chunk-6UEMNP3E.js";
import "./chunk-6WGE3IUL.js";
import "./chunk-MLYB2YW4.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  L
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/glb.js
var t2;
!function(t3) {
  t3[t3.JSON = 1313821514] = "JSON", t3[t3.BIN = 5130562] = "BIN";
}(t2 || (t2 = {}));
var e3 = class _e {
  constructor(i8, r4) {
    if (!i8) throw new Error("GLB requires a JSON gltf chunk");
    this._length = _e.HEADER_SIZE, this._length += _e.CHUNK_HEADER_SIZE;
    const s4 = n3(i8);
    if (this._length += h2(s4.byteLength, 4), r4 && (this._length += _e.CHUNK_HEADER_SIZE, this._length += r4.byteLength, r4.byteLength % 4)) throw new Error("Expected BIN chunk length to be divisible by 4 at this point");
    this.buffer = new ArrayBuffer(this._length), this._outView = new DataView(this.buffer), this._writeHeader();
    const _3 = this._writeChunk(s4, 12, t2.JSON, 32);
    r4 && this._writeChunk(r4, _3, t2.BIN);
  }
  _writeHeader() {
    this._outView.setUint32(0, _e.MAGIC, true), this._outView.setUint32(4, _e.VERSION, true), this._outView.setUint32(8, this._length, true);
  }
  _writeChunk(t3, e6, n4, r4 = 0) {
    const s4 = h2(t3.byteLength, 4);
    for (this._outView.setUint32(e6, s4, true), this._outView.setUint32(e6 += 4, n4, true), i2(this._outView.buffer, t3, e6 += 4, 0, t3.byteLength), e6 += t3.byteLength; e6 % 4; ) r4 && this._outView.setUint8(e6, r4), e6++;
    return e6;
  }
};
function i2(t3, e6, i8, n4, h3) {
  new Uint8Array(t3, i8, h3).set(new Uint8Array(e6, n4, h3), 0);
}
function n3(t3) {
  return new TextEncoder().encode(t3).buffer;
}
function h2(t3, e6) {
  return e6 * Math.ceil(t3 / e6);
}
e3.HEADER_SIZE = 12, e3.CHUNK_HEADER_SIZE = 8, e3.MAGIC = 1179937895, e3.VERSION = 2;

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/types.js
var E;
var A;
var R;
var L2;
var o3;
var I;
var N2;
!function(E2) {
  E2[E2.External = 0] = "External", E2[E2.DataURI = 1] = "DataURI", E2[E2.GLB = 2] = "GLB";
}(E || (E = {})), function(E2) {
  E2[E2.External = 0] = "External", E2[E2.DataURI = 1] = "DataURI", E2[E2.GLB = 2] = "GLB";
}(A || (A = {})), function(E2) {
  E2[E2.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", E2[E2.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER";
}(R || (R = {})), function(E2) {
  E2.SCALAR = "SCALAR", E2.VEC2 = "VEC2", E2.VEC3 = "VEC3", E2.VEC4 = "VEC4", E2.MAT2 = "MAT2", E2.MAT3 = "MAT3", E2.MAT4 = "MAT4";
}(L2 || (L2 = {})), function(E2) {
  E2[E2.POINTS = 0] = "POINTS", E2[E2.LINES = 1] = "LINES", E2[E2.LINE_LOOP = 2] = "LINE_LOOP", E2[E2.LINE_STRIP = 3] = "LINE_STRIP", E2[E2.TRIANGLES = 4] = "TRIANGLES", E2[E2.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", E2[E2.TRIANGLE_FAN = 6] = "TRIANGLE_FAN";
}(o3 || (o3 = {})), function(E2) {
  E2.OPAQUE = "OPAQUE", E2.MASK = "MASK", E2.BLEND = "BLEND";
}(I || (I = {})), function(E2) {
  E2[E2.NoColor = 0] = "NoColor", E2[E2.FaceColor = 1] = "FaceColor", E2[E2.VertexColor = 2] = "VertexColor";
}(N2 || (N2 = {}));

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/bufferview.js
var i3 = class {
  constructor(t3, s4, i8, r4, n4) {
    this._buffer = t3, this._componentType = i8, this._dataType = r4, this._data = [], this._isFinalized = false, this._accessorIndex = -1, this._accessorAttribute = null, this._accessorMin = null, this._accessorMax = null, s4.bufferViews || (s4.bufferViews = []), this.index = s4.bufferViews.length, this._bufferView = {
      buffer: t3.index,
      byteLength: -1,
      target: n4
    };
    const a3 = this._getElementSize();
    a3 >= 4 && n4 !== R.ELEMENT_ARRAY_BUFFER && (this._bufferView.byteStride = a3), s4.bufferViews.push(this._bufferView), this._numComponentsForDataType = this._calculateNumComponentsForDataType();
  }
  push(e6) {
    const t3 = this._data.length;
    if (this._data.push(e6), this._accessorIndex >= 0) {
      const s4 = t3 % this._numComponentsForDataType, i8 = this._accessorMin[s4];
      this._accessorMin[s4] = "number" != typeof i8 ? e6 : Math.min(i8, e6);
      const r4 = this._accessorMax[s4];
      this._accessorMax[s4] = "number" != typeof r4 ? e6 : Math.max(r4, e6);
    }
  }
  get dataSize() {
    return this._data.length * this._sizeComponentType();
  }
  get byteSize() {
    function e6(e7, t3) {
      return t3 * Math.ceil(e7 / t3);
    }
    return e6(this.dataSize, 4);
  }
  getByteOffset() {
    if (!this._isFinalized) throw new Error("Cannot get BufferView offset until it is finalized");
    return this._buffer.getByteOffset(this);
  }
  get byteOffset() {
    if (!this._isFinalized) throw new Error("Cannot get BufferView offset until it is finalized");
    return this._buffer.getByteOffset(this);
  }
  _createTypedArray(e6, t3) {
    switch (this._componentType) {
      case C.BYTE:
        return new Int8Array(e6, t3);
      case C.FLOAT:
        return new Float32Array(e6, t3);
      case C.SHORT:
        return new Int16Array(e6, t3);
      case C.UNSIGNED_BYTE:
        return new Uint8Array(e6, t3);
      case C.UNSIGNED_INT:
        return new Uint32Array(e6, t3);
      case C.UNSIGNED_SHORT:
        return new Uint16Array(e6, t3);
    }
  }
  writeOutToBuffer(e6, t3) {
    this._createTypedArray(e6, t3).set(this._data);
  }
  writeAsync(e6) {
    if (this._asyncWritePromise) throw new Error("Can't write multiple bufferView values asynchronously");
    return this._asyncWritePromise = e6.then((e7) => {
      const t3 = new Uint8Array(e7);
      for (let s4 = 0; s4 < t3.length; ++s4) this._data.push(t3[s4]);
      delete this._asyncWritePromise;
    }), this._asyncWritePromise;
  }
  startAccessor(e6) {
    if (this._accessorIndex >= 0) throw new Error("Accessor was started without ending the previous one");
    this._accessorIndex = this._data.length, this._accessorAttribute = e6;
    const t3 = this._numComponentsForDataType;
    this._accessorMin = new Array(t3), this._accessorMax = new Array(t3);
  }
  endAccessor() {
    if (this._accessorIndex < 0) throw new Error("An accessor was not started, but was attempted to be ended");
    const e6 = this._getElementSize(), t3 = this._numComponentsForDataType, i8 = (this._data.length - this._accessorIndex) / t3;
    if (i8 % 1) throw new Error("An accessor was ended with missing component values");
    for (let s4 = 0; s4 < this._accessorMin.length; ++s4) "number" != typeof this._accessorMin[s4] && (this._accessorMin[s4] = 0), "number" != typeof this._accessorMax[s4] && (this._accessorMax[s4] = 0);
    const r4 = {
      byteOffset: e6 * (this._accessorIndex / t3),
      componentType: this._componentType,
      count: i8,
      type: this._dataType,
      min: this._accessorMin,
      max: this._accessorMax,
      name: this._accessorAttribute
    };
    switch (this._accessorAttribute) {
      case "TEXCOORD_0":
      case "TEXCOORD_1":
      case "COLOR_0":
      case "WEIGHTS_0":
        switch (this._componentType) {
          case C.UNSIGNED_BYTE:
          case C.UNSIGNED_SHORT:
            r4.normalized = true;
        }
    }
    return this._accessorIndex = -1, this._accessorAttribute = null, this._accessorMin = null, this._accessorMax = null, r4;
  }
  get finalized() {
    return this._finalizedPromise ? this._finalizedPromise : this._isFinalized ? this._finalizedPromise = Promise.resolve() : this._finalizedPromise = new Promise((e6) => this._finalizedPromiseResolve = e6);
  }
  finalize() {
    return __async(this, null, function* () {
      const e6 = this._bufferView, t3 = this._buffer.getViewFinalizePromises(this);
      this._asyncWritePromise && t3.push(this._asyncWritePromise), yield Promise.allSettled(t3), this._isFinalized = true, e6.byteOffset = this.getByteOffset(), e6.byteLength = this.dataSize, this._finalizedPromiseResolve && this._finalizedPromiseResolve();
    });
  }
  _getElementSize() {
    return this._sizeComponentType() * this._numComponentsForDataType;
  }
  _sizeComponentType() {
    switch (this._componentType) {
      case C.BYTE:
      case C.UNSIGNED_BYTE:
        return 1;
      case C.SHORT:
      case C.UNSIGNED_SHORT:
        return 2;
      case C.UNSIGNED_INT:
      case C.FLOAT:
        return 4;
    }
  }
  _calculateNumComponentsForDataType() {
    switch (this._dataType) {
      case L2.SCALAR:
        return 1;
      case L2.VEC2:
        return 2;
      case L2.VEC3:
        return 3;
      case L2.VEC4:
      case L2.MAT2:
        return 4;
      case L2.MAT3:
        return 9;
      case L2.MAT4:
        return 16;
    }
  }
};

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/buffer.js
var i4 = class {
  constructor(e6) {
    this._gltf = e6, this._bufferViews = [], this._isFinalized = false, e6.buffers || (e6.buffers = []), this.index = e6.buffers.length;
    const i8 = {
      byteLength: -1
    };
    e6.buffers.push(i8), this._buffer = i8;
  }
  addBufferView(i8, t3, r4) {
    if (this._finalizePromise) throw new Error("Cannot add buffer view after fiinalizing buffer");
    const f3 = new i3(this, this._gltf, i8, t3, r4);
    return this._bufferViews.push(f3), f3;
  }
  getByteOffset(e6) {
    let i8 = 0;
    for (const t3 of this._bufferViews) {
      if (t3 === e6) return i8;
      i8 += t3.byteSize;
    }
    throw new Error("Given bufferView was not present in this buffer");
  }
  getViewFinalizePromises(e6) {
    const i8 = [];
    for (const t3 of this._bufferViews) {
      if (e6 && t3 === e6) return i8;
      i8.push(t3.finalized);
    }
    return i8;
  }
  getArrayBuffer() {
    if (!this._isFinalized) throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");
    const e6 = this._getTotalSize(), i8 = new ArrayBuffer(e6);
    let t3 = 0;
    for (const r4 of this._bufferViews) r4.writeOutToBuffer(i8, t3), t3 += r4.byteSize;
    return i8;
  }
  finalize() {
    if (this._finalizePromise) throw new Error(`Buffer ${this.index} was already finalized`);
    return this._finalizePromise = Promise.allSettled(this.getViewFinalizePromises()).then(() => {
      this._isFinalized = true;
      const e6 = this.getArrayBuffer();
      this._buffer.byteLength = e6.byteLength, this._buffer.uri = e6;
    }), this._gltf.extras.promises.push(this._finalizePromise), this._finalizePromise;
  }
  _getTotalSize() {
    let e6 = 0;
    for (const i8 of this._bufferViews) e6 += i8.byteSize;
    return e6;
  }
};

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/geometry.js
function c2(o4, n4) {
  if (o4.components) for (const s4 of o4.components) s4.faces && "smooth" === s4.shading && e4(s4, n4);
}
function e4(r4, c3) {
  null == c3.normal && (c3.normal = new Float32Array(c3.position.length));
  const e6 = r4.faces, {
    position: m2,
    normal: p
  } = c3, h3 = e6.length / 3;
  for (let t3 = 0; t3 < h3; ++t3) {
    const r5 = 3 * e6[3 * t3], c4 = 3 * e6[3 * t3 + 1], l4 = 3 * e6[3 * t3 + 2], h4 = o(a2, m2[r5], m2[r5 + 1], m2[r5 + 2]), g = o(f, m2[c4], m2[c4 + 1], m2[c4 + 2]), u2 = o(i5, m2[l4], m2[l4 + 1], m2[l4 + 2]), b = e(g, g, h4), j = e(u2, u2, h4), v = _2(b, b, j);
    p[r5] += v[0], p[r5 + 1] += v[1], p[r5 + 2] += v[2], p[c4] += v[0], p[c4 + 1] += v[1], p[c4 + 2] += v[2], p[l4] += v[0], p[l4 + 1] += v[1], p[l4 + 2] += v[2];
  }
  for (let n4 = 0; n4 < p.length; n4 += 3) o(l2, p[n4], p[n4 + 1], p[n4 + 2]), z(l2, l2), p[n4] = l2[0], p[n4 + 1] = l2[1], p[n4 + 2] = l2[2];
}
var a2 = n2();
var f = n2();
var i5 = n2();
var l2 = n2();

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltf.js
var M2 = () => n.getLogger("esri.geometry.support.meshUtils.exporters.gltf.gltf");
var O = class {
  constructor(e6, t3) {
    this.options = t3, this._materialMap = new Array(), this._imageMap = /* @__PURE__ */ new Map(), this._textureMap = /* @__PURE__ */ new Map(), this.gltf = {
      asset: {
        version: "2.0",
        copyright: e6.copyright,
        generator: e6.generator
      },
      extras: {
        output: t3.output,
        binChunkBuffer: null,
        promises: []
      }
    }, this._addScenes(e6);
  }
  _addScenes(e6) {
    this.gltf.scene = e6.defaultScene;
    const t3 = this.gltf.extras, s4 = t3.output.buffer === E.GLB || t3.output.image === A.GLB;
    s4 && (t3.binChunkBuffer = new i4(this.gltf)), e6.forEachScene((e7) => {
      this._addScene(e7);
    }), s4 && t3.binChunkBuffer.finalize();
  }
  _addScene(e6) {
    this.gltf.scenes || (this.gltf.scenes = []);
    const t3 = {};
    e6.name && (t3.name = e6.name), e6.forEachNode((e7) => {
      t3.nodes || (t3.nodes = []), t3.nodes.push(...this._addNodes(e7));
    }), this.gltf.scenes.push(t3);
  }
  _addNodes(e6) {
    this.gltf.nodes || (this.gltf.nodes = []);
    const t3 = {};
    e6.name && (t3.name = e6.name);
    const s4 = e6.translation;
    G(s4, l) || (t3.translation = t(s4));
    const u2 = e6.rotation;
    N(u2, o2) || (t3.rotation = r2(u2));
    const h3 = e6.scale;
    G(h3, _) || (t3.scale = t(h3));
    const f3 = this.gltf.nodes.length;
    if (this.gltf.nodes.push(t3), e6.mesh && e6.mesh.vertexAttributes.position) {
      const s5 = this._createMeshes(e6.mesh), r4 = [f3];
      if (1 === s5.length) this._addMesh(t3, s5[0]);
      else for (const e7 of s5) {
        const t4 = {};
        this._addMesh(t4, e7), r4.push(this.gltf.nodes.length), this.gltf.nodes.push(t4);
      }
      return r4;
    }
    return e6.forEachNode((e7) => {
      t3.children || (t3.children = []), t3.children.push(...this._addNodes(e7));
    }), [f3];
  }
  _addMesh(e6, t3) {
    this.gltf.meshes ??= [];
    const s4 = this.gltf.meshes.length;
    this.gltf.meshes.push(t3), e6.mesh = s4;
  }
  _createMeshes(e6) {
    const t3 = this.gltf.extras, s4 = t3.output.buffer === E.GLB;
    let r4;
    r4 = s4 ? t3.binChunkBuffer : new i4(this.gltf);
    const i8 = this.options.origin, a3 = e6.vertexSpace.clone();
    a3.origin = [i8.x, i8.y, i8.z ?? 0];
    const o4 = M({
      vertexAttributes: e6.vertexAttributes,
      vertexSpace: e6.vertexSpace,
      transform: this.options?.ignoreLocalTransform ? null : e6.transform,
      spatialReference: e6.spatialReference
    }, a3, {
      targetUnit: "meters"
    });
    if (!o4) return [];
    c2(e6, o4), w(o4);
    const {
      position: n4,
      normal: l4,
      tangent: c3
    } = o4, {
      uv: u2,
      color: d2
    } = e6.vertexAttributes, _3 = r4.addBufferView(C.FLOAT, L2.VEC3, R.ARRAY_BUFFER);
    let T2, R2, A2, E2;
    l4 && (T2 = r4.addBufferView(C.FLOAT, L2.VEC3, R.ARRAY_BUFFER)), u2 && (R2 = r4.addBufferView(C.FLOAT, L2.VEC2, R.ARRAY_BUFFER)), c3 && (A2 = r4.addBufferView(C.FLOAT, L2.VEC4, R.ARRAY_BUFFER)), d2 && (E2 = r4.addBufferView(C.UNSIGNED_BYTE, L2.VEC4, R.ARRAY_BUFFER)), _3.startAccessor("POSITION"), T2 && T2.startAccessor("NORMAL"), R2 && R2.startAccessor("TEXCOORD_0"), A2 && A2.startAccessor("TANGENT"), E2 && E2.startAccessor("COLOR_0");
    const M3 = o4.position.length / 3;
    for (let h3 = 0; h3 < M3; ++h3) _3.push(n4[3 * h3]), _3.push(n4[3 * h3 + 1]), _3.push(n4[3 * h3 + 2]), T2 && null != l4 && (T2.push(l4[3 * h3]), T2.push(l4[3 * h3 + 1]), T2.push(l4[3 * h3 + 2])), R2 && null != u2 && (R2.push(u2[2 * h3]), R2.push(u2[2 * h3 + 1])), A2 && null != c3 && (A2.push(c3[4 * h3]), A2.push(c3[4 * h3 + 1]), A2.push(c3[4 * h3 + 2]), A2.push(c3[4 * h3 + 3])), E2 && null != d2 && (E2.push(d2[4 * h3]), E2.push(d2[4 * h3 + 1]), E2.push(d2[4 * h3 + 2]), E2.push(d2[4 * h3 + 3]));
    const O2 = _3.endAccessor(), C3 = this._addAccessor(_3.index, O2);
    let I2, N3, v, S, B;
    if (T2) {
      const e7 = T2.endAccessor();
      I2 = this._addAccessor(T2.index, e7);
    }
    if (R2) {
      const e7 = R2.endAccessor();
      N3 = this._addAccessor(R2.index, e7);
    }
    if (A2) {
      const e7 = A2.endAccessor();
      v = this._addAccessor(A2.index, e7);
    }
    if (E2) {
      const e7 = E2.endAccessor();
      S = this._addAccessor(E2.index, e7);
    }
    const L3 = [];
    return e6.components && e6.components.length > 0 && e6.components[0].faces ? (B = r4.addBufferView(C.UNSIGNED_INT, L2.SCALAR, R.ELEMENT_ARRAY_BUFFER), this._addMeshVertexIndexed(B, e6.components, L3, C3, I2, N3, v, S)) : this._addMeshVertexNonIndexed(e6.components, L3, C3, I2, N3, v, S), _3.finalize(), T2 && T2.finalize(), R2 && R2.finalize(), A2 && A2.finalize(), B && B.finalize(), E2 && E2.finalize(), s4 || r4.finalize(), L3;
  }
  _addMaterial(e6) {
    if (null === e6) return;
    const t3 = this._materialMap.indexOf(e6);
    if (-1 !== t3) return t3;
    this.gltf.materials || (this.gltf.materials = []);
    const s4 = {};
    switch (e6.alphaMode) {
      case "mask":
        s4.alphaMode = I.MASK;
        break;
      case "auto":
      case "blend":
        s4.alphaMode = I.BLEND;
    }
    0.5 !== e6.alphaCutoff && (s4.alphaCutoff = e6.alphaCutoff), e6.doubleSided && (s4.doubleSided = e6.doubleSided), s4.pbrMetallicRoughness = {};
    const r4 = (e7) => e7 ** 2.1, i8 = (e7) => {
      const t4 = e7.toRgba();
      return t4[0] = r4(t4[0] / 255), t4[1] = r4(t4[1] / 255), t4[2] = r4(t4[2] / 255), t4;
    };
    if (null != e6.color && (s4.pbrMetallicRoughness.baseColorFactor = i8(e6.color)), null != e6.colorTexture && (s4.pbrMetallicRoughness.baseColorTexture = this._createTextureInfo(e6.colorTexture, e6.colorTextureTransform)), null != e6.normalTexture && (s4.normalTexture = this._createTextureInfo(e6.normalTexture, e6.normalTextureTransform)), e6 instanceof m) {
      if (null != e6.emissiveTexture && (s4.emissiveTexture = this._createTextureInfo(e6.emissiveTexture, e6.emissiveTextureTransform)), null != e6.emissiveColor) {
        const t4 = i8(e6.emissiveColor);
        s4.emissiveFactor = [t4[0], t4[1], t4[2]];
      }
      null != e6.occlusionTexture && (s4.occlusionTexture = this._createTextureInfo(e6.occlusionTexture, e6.occlusionTextureTransform)), null != e6.metallicRoughnessTexture && (s4.pbrMetallicRoughness.metallicRoughnessTexture = this._createTextureInfo(e6.metallicRoughnessTexture, e6.metallicRoughnessTextureTransform)), s4.pbrMetallicRoughness.metallicFactor = e6.metallic, s4.pbrMetallicRoughness.roughnessFactor = e6.roughness;
    } else s4.pbrMetallicRoughness.metallicFactor = 1, s4.pbrMetallicRoughness.roughnessFactor = 1, M2().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");
    const a3 = this.gltf.materials.length;
    return this.gltf.materials.push(s4), this._materialMap.push(e6), a3;
  }
  _createTextureInfo(e6, t3) {
    const r4 = {
      index: this._addTexture(e6)
    };
    return t3 ? (r4.extensions || (r4.extensions = {}), r4.extensions.KHR_texture_transform = {
      scale: t3.scale,
      offset: t3.offset,
      rotation: h(t3.rotation)
    }, r4) : r4;
  }
  _addTexture(e6) {
    const s4 = this.gltf.textures ?? [];
    return this.gltf.textures = s4, r(this._textureMap, e6, () => {
      const t3 = {
        sampler: this._addSampler(e6),
        source: this._addImage(e6)
      }, r4 = s4.length;
      return s4.push(t3), r4;
    });
  }
  _addImage(e6) {
    const t3 = this._imageMap.get(e6);
    if (null != t3) return t3;
    this.gltf.images || (this.gltf.images = []);
    const s4 = {};
    if (e6.url) s4.uri = e6.url;
    else {
      const t4 = e6.data;
      s4.extras = t4;
      for (let e7 = 0; e7 < this.gltf.images.length; ++e7) if (t4 === this.gltf.images[e7].extras) return e7;
      const r5 = this.gltf.extras;
      switch (r5.output.image) {
        case A.GLB: {
          const e7 = r5.binChunkBuffer.addBufferView(C.UNSIGNED_BYTE, L2.SCALAR);
          if (r3(t4)) null != t4.data && e7.writeOutToBuffer(t4.data, 0);
          else {
            const i8 = i(t4, this.options.signal).then(({
              data: e8,
              type: t5
            }) => (s4.mimeType = t5, e8));
            r5.promises.push(e7.writeAsync(i8).then(() => {
              e7.finalize();
            }));
          }
          s4.bufferView = e7.index;
          break;
        }
        case A.DataURI:
          if (r3(t4)) {
            M2().warnOnce("Image export for basis compressed textures not available.");
            break;
          }
          s4.uri = a(t4);
          break;
        default:
          if (r3(t4)) {
            M2().warnOnce("Image export for basis compressed textures not available.");
            break;
          }
          r5.promises.push(i(t4, this.options.signal).then(({
            data: e7,
            type: t5
          }) => {
            s4.uri = e7, s4.mimeType = t5;
          }));
      }
    }
    const r4 = this.gltf.images.length;
    return this.gltf.images.push(s4), this._imageMap.set(e6, r4), r4;
  }
  _addSampler(e6) {
    this.gltf.samplers || (this.gltf.samplers = []);
    let t3 = D.REPEAT, s4 = D.REPEAT;
    if ("string" == typeof e6.wrap) switch (e6.wrap) {
      case "clamp":
        t3 = D.CLAMP_TO_EDGE, s4 = D.CLAMP_TO_EDGE;
        break;
      case "mirror":
        t3 = D.MIRRORED_REPEAT, s4 = D.MIRRORED_REPEAT;
    }
    else {
      switch (e6.wrap.vertical) {
        case "clamp":
          s4 = D.CLAMP_TO_EDGE;
          break;
        case "mirror":
          s4 = D.MIRRORED_REPEAT;
      }
      switch (e6.wrap.horizontal) {
        case "clamp":
          t3 = D.CLAMP_TO_EDGE;
          break;
        case "mirror":
          t3 = D.MIRRORED_REPEAT;
      }
    }
    const r4 = {
      wrapS: t3,
      wrapT: s4
    };
    for (let a3 = 0; a3 < this.gltf.samplers.length; ++a3) if (JSON.stringify(r4) === JSON.stringify(this.gltf.samplers[a3])) return a3;
    const i8 = this.gltf.samplers.length;
    return this.gltf.samplers.push(r4), i8;
  }
  _addAccessor(e6, t3) {
    this.gltf.accessors || (this.gltf.accessors = []);
    const s4 = {
      bufferView: e6,
      byteOffset: t3.byteOffset,
      componentType: t3.componentType,
      count: t3.count,
      type: t3.type,
      min: t3.min,
      max: t3.max,
      name: t3.name
    };
    t3.normalized && (s4.normalized = true);
    const r4 = this.gltf.accessors.length;
    return this.gltf.accessors.push(s4), r4;
  }
  _addMeshVertexIndexed(e6, t3, s4, r4, i8, a3, o4, n4) {
    const l4 = /* @__PURE__ */ new Map();
    for (const c3 of t3) {
      e6.startAccessor("INDICES");
      for (let s5 = 0; s5 < c3.faces.length; ++s5) e6.push(c3.faces[s5]);
      const t4 = e6.endAccessor(), u2 = {
        attributes: {
          POSITION: r4
        },
        indices: this._addAccessor(e6.index, t4),
        material: this._addMaterial(c3.material)
      };
      i8 && "flat" !== c3.shading && (u2.attributes.NORMAL = i8), a3 && (u2.attributes.TEXCOORD_0 = a3), o4 && "flat" !== c3.shading && (u2.attributes.TANGENT = o4), n4 && (u2.attributes.COLOR_0 = n4);
      const h3 = l4.get(c3.name);
      if (h3) h3.primitives.push(u2);
      else {
        const e7 = {
          name: c3.name,
          primitives: [u2]
        };
        l4.set(c3.name, e7), s4.push(e7);
      }
    }
  }
  _addMeshVertexNonIndexed(e6, t3, s4, r4, i8, a3, o4) {
    const n4 = {
      primitives: []
    };
    t3.push(n4);
    const l4 = {
      attributes: {
        POSITION: s4
      }
    };
    r4 && (l4.attributes.NORMAL = r4), i8 && (l4.attributes.TEXCOORD_0 = i8), a3 && (l4.attributes.TANGENT = a3), o4 && (l4.attributes.COLOR_0 = o4), e6 && (l4.material = this._addMaterial(e6[0].material)), n4.primitives.push(l4);
  }
};
function w({
  position: e6,
  normal: t3,
  tangent: s4
}) {
  C2(e6, 3), C2(t3, 3), C2(s4, 4);
}
function C2(e6, t3) {
  if (null != e6) for (let s4 = 1, r4 = 2; s4 < e6.length; s4 += t3, r4 += t3) {
    const t4 = e6[s4], i8 = e6[r4];
    e6[s4] = i8, e6[r4] = -t4;
  }
}

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/asset.js
var s3 = class {
  constructor() {
    this.copyright = "", this.defaultScene = 0, this.generator = "", this._scenes = [];
  }
  addScene(e6) {
    if (this._scenes.includes(e6)) throw new Error("Scene already added");
    this._scenes.push(e6);
  }
  removeScene(s4) {
    L(this._scenes, s4);
  }
  forEachScene(e6) {
    this._scenes.forEach(e6);
  }
};

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/scene.js
var d = class {
  constructor() {
    this.name = "", this._nodes = [];
  }
  addNode(d2) {
    if (this._nodes.includes(d2)) throw new Error("Node already added");
    this._nodes.push(d2);
  }
  forEachNode(d2) {
    this._nodes.forEach(d2);
  }
};

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/node.js
var e5 = class {
  constructor(t3) {
    this.mesh = t3, this.name = "", this.translation = n2(), this.rotation = e2(), this.scale = t(_), this._nodes = [];
  }
  addNode(t3) {
    if (this._nodes.includes(t3)) throw new Error("Node already added");
    this._nodes.push(t3);
  }
  forEachNode(t3) {
    this._nodes.forEach(t3);
  }
  set rotationAngles(s4) {
    T(this.rotation, s4[0], s4[1], s4[2]);
  }
};

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/index.js
var f2 = "model.gltf";
var i6 = "model.glb";
function u(u2, l4) {
  return __async(this, null, function* () {
    const c3 = new O(u2, l4).gltf, p = c3.extras.promises;
    let m2 = 1, g = 1, d2 = null;
    yield Promise.allSettled(p), s(l4.signal);
    const b = l4.jsonSpacing ?? 4, j = /* @__PURE__ */ new Map(), w2 = JSON.stringify(c3, (e6, t3) => {
      if ("extras" !== e6) {
        if (t3 instanceof ArrayBuffer) {
          if (c(t3)) switch (l4.output?.image) {
            case A.DataURI:
            case A.GLB:
              break;
            case A.External:
            default: {
              const e7 = `img${g}.png`;
              return g++, j.set(e7, t3), e7;
            }
          }
          switch (l4.output?.buffer) {
            case E.DataURI:
              return s2(t3);
            case E.GLB:
              if (d2) throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");
              return void (d2 = t3);
            case E.External:
            default: {
              const e7 = `data${m2}.bin`;
              return m2++, j.set(e7, t3), e7;
            }
          }
        }
        return t3;
      }
    }, b);
    return l4.output?.buffer === E.GLB || l4.output?.image === A.GLB ? j.set(i6, new e3(w2, d2).buffer) : j.set(f2, w2), j;
  });
}
function l3(e6, t3) {
  return __async(this, null, function* () {
    const r4 = (yield u(e6, __spreadValues({
      output: {
        buffer: E.GLB,
        image: A.GLB
      },
      jsonSpacing: 0
    }, t3))).get(i6);
    if (!(r4 && r4 instanceof ArrayBuffer)) throw new Error("failed to export to glb");
    return r4;
  });
}

// ../../../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltfexport.js
function i7(i8, t3) {
  return __async(this, null, function* () {
    const s4 = new s3(), m2 = new d();
    return s4.addScene(m2), m2.addNode(new e5(i8)), yield l3(s4, __spreadValues({
      origin: i8.origin
    }, t3));
  });
}
export {
  i7 as toBinaryGLTF
};
//# sourceMappingURL=gltfexport-4RZVFS2H.js.map
