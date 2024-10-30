import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n as n3,
  o,
  r as r4,
  t
} from "./chunk-FEREHKJY.js";
import {
  i as i3,
  l as l2
} from "./chunk-44O4APOL.js";
import {
  C,
  D,
  E as E2,
  L as L2
} from "./chunk-KYLW5XXS.js";
import {
  A,
  B,
  E,
  F,
  L,
  O,
  V,
  c as c2,
  d,
  g as g3,
  i as i2,
  q,
  u as u2,
  w,
  x
} from "./chunk-DLWZ3HVT.js";
import {
  r as r2
} from "./chunk-JTDKNK44.js";
import {
  v
} from "./chunk-CSK4VZQ7.js";
import {
  e as e2
} from "./chunk-GSG4T2KM.js";
import {
  e,
  r as r3
} from "./chunk-YGAXDKHF.js";
import {
  n as n2
} from "./chunk-C7BQE556.js";
import {
  b as b2,
  c,
  f,
  g as g2,
  i
} from "./chunk-KOI252FF.js";
import {
  U,
  _,
  nt,
  ot,
  tt
} from "./chunk-XLEC46FY.js";
import {
  _ as _2
} from "./chunk-AUUN7RFQ.js";
import {
  r2 as r
} from "./chunk-UDMPWVPF.js";
import {
  a,
  g,
  s as s2
} from "./chunk-AIZ3T7E3.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  I2 as I,
  b,
  l,
  u2 as u,
  y2 as y
} from "./chunk-2ZJE6ZFX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/chunks/vec2.js
function o2(e5, t6) {
  n4(e5.typedBuffer, t6.typedBuffer, e5.typedBufferStride, t6.typedBufferStride);
}
function n4(o6, n8, l7 = 2, u6 = l7) {
  const i6 = n8.length / 2;
  let a3 = 0, d3 = 0;
  if (y(n8) || l(n8)) {
    for (let e5 = 0; e5 < i6; ++e5) o6[a3] = n8[d3], o6[a3 + 1] = n8[d3 + 1], a3 += l7, d3 += u6;
    return;
  }
  const c5 = I(n8);
  if (b(n8)) for (let e5 = 0; e5 < i6; ++e5) o6[a3] = Math.max(n8[d3] / c5, -1), o6[a3 + 1] = Math.max(n8[d3 + 1] / c5, -1), a3 += l7, d3 += u6;
  else for (let e5 = 0; e5 < i6; ++e5) o6[a3] = n8[d3] / c5, o6[a3 + 1] = n8[d3 + 1] / c5, a3 += l7, d3 += u6;
}
function l3(e5, t6, r7, f4) {
  const o6 = e5.typedBuffer, n8 = e5.typedBufferStride, l7 = f4?.count ?? e5.count;
  let u6 = (f4?.dstIndex ?? 0) * n8;
  for (let i6 = 0; i6 < l7; ++i6) o6[u6] = t6, o6[u6 + 1] = r7, u6 += n8;
}
var u3 = Object.freeze(Object.defineProperty({
  __proto__: null,
  fill: l3,
  normalizeIntegerBuffer: n4,
  normalizeIntegerBufferView: o2
}, Symbol.toStringTag, {
  value: "Module"
}));

// ../../../node_modules/@arcgis/core/chunks/vec43.js
function e3(e5, f4) {
  t2(e5.typedBuffer, f4, e5.typedBufferStride);
}
function t2(e5, t6, f4 = 4) {
  const o6 = t6.typedBuffer, r7 = t6.typedBufferStride, n8 = t6.count;
  let u6 = 0, c5 = 0;
  for (let d3 = 0; d3 < n8; ++d3) e5[u6] = o6[c5], e5[u6 + 1] = o6[c5 + 1], e5[u6 + 2] = o6[c5 + 2], e5[u6 + 3] = o6[c5 + 3], u6 += f4, c5 += r7;
}
function f2(e5, t6, f4, o6, r7, n8) {
  const u6 = e5.typedBuffer, c5 = e5.typedBufferStride, d3 = n8?.count ?? e5.count;
  let l7 = (n8?.dstIndex ?? 0) * c5;
  for (let p2 = 0; p2 < d3; ++p2) u6[l7] = t6, u6[l7 + 1] = f4, u6[l7 + 2] = o6, u6[l7 + 3] = r7, l7 += c5;
}
var o3 = Object.freeze(Object.defineProperty({
  __proto__: null,
  copy: t2,
  copyView: e3,
  fill: f2
}, Symbol.toStringTag, {
  value: "Module"
}));

// ../../../node_modules/@arcgis/core/views/3d/glTF/DefaultLoadingContext.js
var n5 = class {
  constructor(r7) {
    this._streamDataRequester = r7;
  }
  loadJSON(r7, e5) {
    return __async(this, null, function* () {
      return this._load("json", r7, e5);
    });
  }
  loadBinary(r7, e5) {
    return __async(this, null, function* () {
      return tt(r7) ? (s2(e5), nt(r7)) : this._load("binary", r7, e5);
    });
  }
  loadImage(r7, e5) {
    return __async(this, null, function* () {
      return this._load("image", r7, e5);
    });
  }
  _load(a3, o6, i6) {
    return __async(this, null, function* () {
      if (null == this._streamDataRequester) return (yield U(o6, {
        responseType: m[a3]
      })).data;
      const n8 = yield _2(this._streamDataRequester.request(o6, a3, i6));
      if (true === n8.ok) return n8.value;
      throw a(n8.error), new s("", `Request for resource failed: ${n8.error}`);
    });
  }
};
var m = {
  image: "image",
  binary: "array-buffer",
  json: "json",
  "image+type": void 0
};

// ../../../node_modules/@arcgis/core/views/3d/glTF/LoaderResult.js
function r5(e5 = {}) {
  return __spreadValues({
    color: [1, 1, 1],
    opacity: 1,
    alphaMode: "OPAQUE",
    alphaCutoff: 0.5,
    doubleSided: false,
    castShadows: true,
    receiveShadows: true,
    receiveAmbientOcclustion: true,
    textureColor: null,
    textureNormal: null,
    textureOcclusion: null,
    textureEmissive: null,
    textureMetallicRoughness: null,
    colorTextureTransform: null,
    normalTextureTransform: null,
    occlusionTextureTransform: null,
    emissiveTextureTransform: null,
    metallicRoughnessTextureTransform: null,
    emissiveFactor: [0, 0, 0],
    metallicFactor: 1,
    roughnessFactor: 1,
    colorMixMode: "multiply"
  }, e5);
}
function l4(r7, l7 = {}) {
  return {
    data: r7,
    parameters: __spreadValues({
      wrap: __spreadValues({
        s: D.REPEAT,
        t: D.REPEAT
      }, l7.wrap),
      noUnpackFlip: true,
      mipmap: false
    }, l7)
  };
}

// ../../../node_modules/@arcgis/core/chunks/scalar.js
function e4(e5, t6) {
  const o6 = e5.count;
  t6 || (t6 = new e5.TypedArrayConstructor(o6));
  for (let r7 = 0; r7 < o6; r7++) t6[r7] = e5.get(r7);
  return t6;
}
var t3 = Object.freeze(Object.defineProperty({
  __proto__: null,
  makeDense: e4
}, Symbol.toStringTag, {
  value: "Module"
}));

// ../../../node_modules/@arcgis/core/views/3d/glTF/internal/BinaryStreamReader.js
var t4 = class {
  constructor(t6) {
    this._data = t6, this._offset4 = 0, this._dataUint32 = new Uint32Array(this._data, 0, Math.floor(this._data.byteLength / 4));
  }
  readUint32() {
    const t6 = this._offset4;
    return this._offset4 += 1, this._dataUint32[t6];
  }
  readUint8Array(t6) {
    const s4 = 4 * this._offset4;
    return this._offset4 += t6 / 4, new Uint8Array(this._data, s4, t6);
  }
  remainingBytes() {
    return this._data.byteLength - 4 * this._offset4;
  }
};

// ../../../node_modules/@arcgis/core/views/3d/glTF/internal/enums.js
var A2;
var E3;
!function(A3) {
  A3.SCALAR = "SCALAR", A3.VEC2 = "VEC2", A3.VEC3 = "VEC3", A3.VEC4 = "VEC4", A3.MAT2 = "MAT2", A3.MAT3 = "MAT3", A3.MAT4 = "MAT4";
}(A2 || (A2 = {})), function(A3) {
  A3[A3.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", A3[A3.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER";
}(E3 || (E3 = {}));

// ../../../node_modules/@arcgis/core/views/3d/glTF/internal/fillDefaults.js
var t5 = {
  baseColorFactor: [1, 1, 1, 1],
  metallicFactor: 1,
  roughnessFactor: 1
};
var a2 = {
  pbrMetallicRoughness: t5,
  emissiveFactor: [0, 0, 0],
  alphaMode: "OPAQUE",
  alphaCutoff: 0.5,
  doubleSided: false
};
var l5 = {
  ESRI_externalColorMixMode: "tint",
  ESRI_receiveShadows: true,
  ESRI_receiveAmbientOcclusion: true
};
var i4 = (e5 = {}) => {
  const o6 = __spreadValues(__spreadValues({}, t5), e5.pbrMetallicRoughness), r7 = s3(__spreadValues(__spreadValues({}, l5), e5.extras));
  return __spreadProps(__spreadValues(__spreadValues({}, a2), e5), {
    pbrMetallicRoughness: o6,
    extras: r7
  });
};
function s3(o6) {
  switch (o6.ESRI_externalColorMixMode) {
    case "multiply":
    case "tint":
    case "ignore":
    case "replace":
      break;
    default:
      n2(o6.ESRI_externalColorMixMode), o6.ESRI_externalColorMixMode = "tint";
  }
  return o6;
}
var c3 = {
  magFilter: L2.LINEAR,
  minFilter: L2.LINEAR_MIPMAP_LINEAR,
  wrapS: D.REPEAT,
  wrapT: D.REPEAT
};
var n6 = (e5) => __spreadValues(__spreadValues({}, c3), e5);

// ../../../node_modules/@arcgis/core/views/3d/glTF/internal/pathUtils.js
function r6(r7) {
  let e5, t6;
  return r7.replace(/^(.*\/)?([^/]*)$/, (r8, a3, i6) => (e5 = a3 || "", t6 = i6 || "", "")), {
    dirPart: e5,
    filePart: t6
  };
}

// ../../../node_modules/@arcgis/core/views/3d/glTF/internal/Resource.js
var k = {
  MAGIC: 1179937895,
  CHUNK_TYPE_JSON: 1313821514,
  CHUNK_TYPE_BIN: 5130562,
  MIN_HEADER_LENGTH: 20
};
var Y = class _Y {
  constructor(t6, r7, o6, n8) {
    if (this._context = t6, this.uri = r7, this.json = o6, this._glbBuffer = n8, this._bufferLoaders = /* @__PURE__ */ new Map(), this._textureLoaders = /* @__PURE__ */ new Map(), this._textureCache = /* @__PURE__ */ new Map(), this._materialCache = /* @__PURE__ */ new Map(), this._nodeParentMap = /* @__PURE__ */ new Map(), this._nodeTransformCache = /* @__PURE__ */ new Map(), this._supportedExtensions = ["KHR_texture_basisu", "KHR_texture_transform"], this._baseUri = r6(this.uri).dirPart, this._checkVersionSupported(), this._checkRequiredExtensionsSupported(), null == o6.scenes) throw new s("gltf-loader-unsupported-feature", "Scenes must be defined.");
    if (null == o6.meshes) throw new s("gltf-loader-unsupported-feature", "Meshes must be defined");
    if (null == o6.nodes) throw new s("gltf-loader-unsupported-feature", "Nodes must be defined.");
    this._computeNodeParents();
  }
  static load(t6, r7, o6) {
    return __async(this, null, function* () {
      if (tt(r7)) {
        const e5 = ot(r7);
        if (e5 && "model/gltf-binary" !== e5.mediaType) try {
          const o8 = JSON.parse(e5.isBase64 ? atob(e5.data) : e5.data);
          return new _Y(t6, r7, o8);
        } catch {
        }
        const o7 = nt(r7);
        if (_Y._isGLBData(o7)) return this._fromGLBData(t6, r7, o7);
      }
      if (ee.test(r7) || "gltf" === o6?.expectedType) {
        const e5 = yield t6.loadJSON(r7, o6);
        return new _Y(t6, r7, e5);
      }
      const i6 = yield t6.loadBinary(r7, o6);
      if (_Y._isGLBData(i6)) return this._fromGLBData(t6, r7, i6);
      if (te.test(r7) || "glb" === o6?.expectedType) throw new s("gltf-loader-invalid-glb", "This is not a valid glb file.");
      const u6 = yield t6.loadJSON(r7, o6);
      return new _Y(t6, r7, u6);
    });
  }
  static _isGLBData(e5) {
    if (null == e5) return false;
    const t6 = new t4(e5);
    return t6.remainingBytes() >= 4 && t6.readUint32() === k.MAGIC;
  }
  static _fromGLBData(e5, t6, r7) {
    return __async(this, null, function* () {
      const o6 = yield _Y._parseGLBData(r7);
      return new _Y(e5, t6, o6.json, o6.binaryData);
    });
  }
  static _parseGLBData(r7) {
    return __async(this, null, function* () {
      const o6 = new t4(r7);
      if (o6.remainingBytes() < 12) throw new s("gltf-loader-error", "glb binary data is insufficiently large.");
      const n8 = o6.readUint32(), s4 = o6.readUint32(), a3 = o6.readUint32();
      if (n8 !== k.MAGIC) throw new s("gltf-loader-error", "Magic first 4 bytes do not fit to expected glb value.");
      if (r7.byteLength < a3) throw new s("gltf-loader-error", "glb binary data is smaller than header specifies.");
      if (2 !== s4) throw new s("gltf-loader-unsupported-feature", "An unsupported glb container version was detected. Only version 2 is supported.");
      let i6, u6, f4 = 0;
      for (; o6.remainingBytes() >= 8; ) {
        const r8 = o6.readUint32(), n9 = o6.readUint32();
        if (0 === f4) {
          if (n9 !== k.CHUNK_TYPE_JSON) throw new s("gltf-loader-error", "First glb chunk must be JSON.");
          if (r8 < 0) throw new s("gltf-loader-error", "No JSON data found.");
          i6 = yield n3(o6.readUint8Array(r8));
        } else if (1 === f4) {
          if (n9 !== k.CHUNK_TYPE_BIN) throw new s("gltf-loader-unsupported-feature", "Second glb chunk expected to be BIN.");
          u6 = o6.readUint8Array(r8);
        } else n.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");
        f4 += 1;
      }
      if (!i6) throw new s("gltf-loader-error", "No glb JSON chunk detected.");
      return {
        json: i6,
        binaryData: u6
      };
    });
  }
  getBuffer(t6, r7) {
    return __async(this, null, function* () {
      const o6 = this.json.buffers[t6];
      if (null == o6.uri) {
        if (null == this._glbBuffer) throw new s("gltf-loader-error", "glb buffer not present");
        return this._glbBuffer;
      }
      const n8 = yield this._getBufferLoader(t6, r7);
      if (n8.byteLength !== o6.byteLength) throw new s("gltf-loader-error", "Buffer byte lengths should match.");
      return n8;
    });
  }
  _getBufferLoader(e5, t6) {
    return __async(this, null, function* () {
      const r7 = this._bufferLoaders.get(e5);
      if (r7) return r7;
      const o6 = this.json.buffers[e5].uri, n8 = this._context.loadBinary(this._resolveUri(o6), t6).then((e6) => new Uint8Array(e6));
      return this._bufferLoaders.set(e5, n8), n8;
    });
  }
  getAccessor(t6, r7) {
    return __async(this, null, function* () {
      if (!this.json.accessors) throw new s("gltf-loader-unsupported-feature", "Accessors missing.");
      const o6 = this.json.accessors[t6];
      if (null == o6?.bufferView) throw new s("gltf-loader-unsupported-feature", "Some accessor does not specify a bufferView.");
      if (o6.type in [A2.MAT2, A2.MAT3, A2.MAT4]) throw new s("gltf-loader-unsupported-feature", `AttributeType ${o6.type} is not supported`);
      const n8 = this.json.bufferViews[o6.bufferView], s4 = yield this.getBuffer(n8.buffer, r7), a3 = X[o6.type], i6 = $[o6.componentType], u6 = a3 * i6, f4 = n8.byteStride || u6;
      return {
        raw: s4.buffer,
        byteStride: f4,
        byteOffset: s4.byteOffset + (n8.byteOffset || 0) + (o6.byteOffset || 0),
        entryCount: o6.count,
        isDenselyPacked: f4 === u6,
        componentCount: a3,
        componentByteSize: i6,
        componentType: o6.componentType,
        min: o6.min,
        max: o6.max,
        normalized: !!o6.normalized
      };
    });
  }
  getIndexData(e5, t6) {
    return __async(this, null, function* () {
      if (null == e5.indices) return;
      const r7 = yield this.getAccessor(e5.indices, t6);
      if (r7.isDenselyPacked) switch (r7.componentType) {
        case C.UNSIGNED_BYTE:
          return new Uint8Array(r7.raw, r7.byteOffset, r7.entryCount);
        case C.UNSIGNED_SHORT:
          return new Uint16Array(r7.raw, r7.byteOffset, r7.entryCount);
        case C.UNSIGNED_INT:
          return new Uint32Array(r7.raw, r7.byteOffset, r7.entryCount);
      }
      else switch (r7.componentType) {
        case C.UNSIGNED_BYTE:
          return e4(Q(d, r7));
        case C.UNSIGNED_SHORT:
          return e4(Q(g3, r7));
        case C.UNSIGNED_INT:
          return e4(Q(B, r7));
      }
    });
  }
  getPositionData(t6, r7) {
    return __async(this, null, function* () {
      if (null == t6.attributes.POSITION) throw new s("gltf-loader-unsupported-feature", "No POSITION vertex data found.");
      const o6 = yield this.getAccessor(t6.attributes.POSITION, r7);
      if (o6.componentType !== C.FLOAT) throw new s("gltf-loader-unsupported-feature", "Expected type FLOAT for POSITION vertex attribute, but found " + C[o6.componentType]);
      if (3 !== o6.componentCount) throw new s("gltf-loader-unsupported-feature", "POSITION vertex attribute must have 3 components, but found " + o6.componentCount.toFixed());
      return Q(i2, o6);
    });
  }
  getNormalData(t6, r7) {
    return __async(this, null, function* () {
      if (null == t6.attributes.NORMAL) throw new s("gltf-loader-error", "No NORMAL vertex data found.");
      const o6 = yield this.getAccessor(t6.attributes.NORMAL, r7);
      if (o6.componentType !== C.FLOAT) throw new s("gltf-loader-unsupported-feature", "Expected type FLOAT for NORMAL vertex attribute, but found " + C[o6.componentType]);
      if (3 !== o6.componentCount) throw new s("gltf-loader-unsupported-feature", "NORMAL vertex attribute must have 3 components, but found " + o6.componentCount.toFixed());
      return Q(i2, o6);
    });
  }
  getTangentData(t6, r7) {
    return __async(this, null, function* () {
      if (null == t6.attributes.TANGENT) throw new s("gltf-loader-error", "No TANGENT vertex data found.");
      const o6 = yield this.getAccessor(t6.attributes.TANGENT, r7);
      if (o6.componentType !== C.FLOAT) throw new s("gltf-loader-unsupported-feature", "Expected type FLOAT for TANGENT vertex attribute, but found " + C[o6.componentType]);
      if (4 !== o6.componentCount) throw new s("gltf-loader-unsupported-feature", "TANGENT vertex attribute must have 4 components, but found " + o6.componentCount.toFixed());
      return new c2(o6.raw, o6.byteOffset, o6.byteStride, o6.byteOffset + o6.byteStride * o6.entryCount);
    });
  }
  getTextureCoordinates(t6, r7) {
    return __async(this, null, function* () {
      if (null == t6.attributes.TEXCOORD_0) throw new s("gltf-loader-error", "No TEXCOORD_0 vertex data found.");
      const o6 = yield this.getAccessor(t6.attributes.TEXCOORD_0, r7);
      if (2 !== o6.componentCount) throw new s("gltf-loader-unsupported-feature", "TEXCOORD_0 vertex attribute must have 2 components, but found " + o6.componentCount.toFixed());
      if (o6.componentType === C.FLOAT) return Q(u2, o6);
      if (!o6.normalized) throw new s("gltf-loader-unsupported-feature", "Integer component types are only supported for a normalized accessor for TEXCOORD_0.");
      return W(o6);
    });
  }
  getVertexColors(t6, r7) {
    return __async(this, null, function* () {
      if (null == t6.attributes.COLOR_0) throw new s("gltf-loader-error", "No COLOR_0 vertex data found.");
      const o6 = yield this.getAccessor(t6.attributes.COLOR_0, r7);
      if (4 !== o6.componentCount && 3 !== o6.componentCount) throw new s("gltf-loader-unsupported-feature", "COLOR_0 attribute must have 3 or 4 components, but found " + o6.componentCount.toFixed());
      if (4 === o6.componentCount) {
        if (o6.componentType === C.FLOAT) return Q(c2, o6);
        if (o6.componentType === C.UNSIGNED_BYTE) return Q(x, o6);
        if (o6.componentType === C.UNSIGNED_SHORT) return Q(L, o6);
      } else if (3 === o6.componentCount) {
        if (o6.componentType === C.FLOAT) return Q(i2, o6);
        if (o6.componentType === C.UNSIGNED_BYTE) return Q(O, o6);
        if (o6.componentType === C.UNSIGNED_SHORT) return Q(E, o6);
      }
      throw new s("gltf-loader-unsupported-feature", "Unsupported component type for COLOR_0 attribute: " + C[o6.componentType]);
    });
  }
  hasPositions(e5) {
    return void 0 !== e5.attributes.POSITION;
  }
  hasNormals(e5) {
    return void 0 !== e5.attributes.NORMAL;
  }
  hasVertexColors(e5) {
    return void 0 !== e5.attributes.COLOR_0;
  }
  hasTextureCoordinates(e5) {
    return void 0 !== e5.attributes.TEXCOORD_0;
  }
  hasTangents(e5) {
    return void 0 !== e5.attributes.TANGENT;
  }
  getMaterial(e5, t6, r7) {
    return __async(this, null, function* () {
      let o6 = e5.material ? this._materialCache.get(e5.material) : void 0;
      if (!o6) {
        const n8 = null != e5.material ? i4(this.json.materials[e5.material]) : i4(), s4 = n8.pbrMetallicRoughness, a3 = this.hasVertexColors(e5), i6 = this.getTexture(s4.baseColorTexture, t6), u6 = this.getTexture(n8.normalTexture, t6), f4 = r7 ? this.getTexture(n8.occlusionTexture, t6) : void 0, l7 = r7 ? this.getTexture(n8.emissiveTexture, t6) : void 0, d3 = r7 ? this.getTexture(s4.metallicRoughnessTexture, t6) : void 0, c5 = null != e5.material ? e5.material : -1;
        o6 = {
          alphaMode: n8.alphaMode,
          alphaCutoff: n8.alphaCutoff,
          color: s4.baseColorFactor,
          doubleSided: !!n8.doubleSided,
          colorTexture: yield i6,
          normalTexture: yield u6,
          name: n8.name,
          id: c5,
          occlusionTexture: yield f4,
          emissiveTexture: yield l7,
          emissiveFactor: n8.emissiveFactor,
          metallicFactor: s4.metallicFactor,
          roughnessFactor: s4.roughnessFactor,
          metallicRoughnessTexture: yield d3,
          hasVertexColors: a3,
          ESRI_externalColorMixMode: n8.extras.ESRI_externalColorMixMode,
          colorTextureTransform: s4?.baseColorTexture?.extensions?.KHR_texture_transform,
          normalTextureTransform: n8.normalTexture?.extensions?.KHR_texture_transform,
          occlusionTextureTransform: n8.occlusionTexture?.extensions?.KHR_texture_transform,
          emissiveTextureTransform: n8.emissiveTexture?.extensions?.KHR_texture_transform,
          metallicRoughnessTextureTransform: s4?.metallicRoughnessTexture?.extensions?.KHR_texture_transform,
          receiveAmbientOcclusion: n8.extras.ESRI_receiveAmbientOcclusion,
          receiveShadows: n8.extras.ESRI_receiveShadows
        };
      }
      return o6;
    });
  }
  getTexture(t6, o6) {
    return __async(this, null, function* () {
      if (!t6) return;
      if (0 !== (t6.texCoord || 0)) throw new s("gltf-loader-unsupported-feature", "Only TEXCOORD with index 0 is supported.");
      const n8 = t6.index, s4 = this.json.textures[n8], a3 = n6(null != s4.sampler ? this.json.samplers[s4.sampler] : {}), i6 = Z(s4), u6 = this.json.images[i6], f4 = yield this._loadTextureImageData(n8, s4, o6);
      return r(this._textureCache, n8, () => {
        const t7 = (e5) => 33071 === e5 || 33648 === e5 || 10497 === e5, r7 = (t8) => {
          throw new s("gltf-loader-error", `Unexpected TextureSampler WrapMode: ${t8}`);
        };
        return {
          data: f4,
          wrapS: t7(a3.wrapS) ? a3.wrapS : r7(a3.wrapS),
          wrapT: t7(a3.wrapT) ? a3.wrapT : r7(a3.wrapT),
          minFilter: a3.minFilter,
          name: u6.name,
          id: n8
        };
      });
    });
  }
  getNodeTransform(e5) {
    if (void 0 === e5) return q2;
    let t6 = this._nodeTransformCache.get(e5);
    if (!t6) {
      const r7 = this.getNodeTransform(this._getNodeParent(e5)), o6 = this.json.nodes[e5];
      o6.matrix ? t6 = c(e(), r7, o6.matrix) : o6.translation || o6.rotation || o6.scale ? (t6 = r3(r7), o6.translation && i(t6, t6, o6.translation), o6.rotation && (z[3] = v(z, o6.rotation), b2(t6, t6, z[3], z)), o6.scale && f(t6, t6, o6.scale)) : t6 = r3(r7), this._nodeTransformCache.set(e5, t6);
    }
    return t6;
  }
  _resolveUri(e5) {
    return _(e5, this._baseUri);
  }
  _getNodeParent(e5) {
    return this._nodeParentMap.get(e5);
  }
  _checkVersionSupported() {
    const e5 = r2.parse(this.json.asset.version, "glTF");
    J.validate(e5);
  }
  _checkRequiredExtensionsSupported() {
    const t6 = this.json;
    if (t6.extensionsRequired) {
      if (!t6.extensionsRequired.every((e5) => this._supportedExtensions.includes(e5))) throw new s("gltf-loader-unsupported-feature", "gltf loader was not able to load unsupported feature. Required extensions: " + t6.extensionsRequired.join(", "));
    }
  }
  _computeNodeParents() {
    this.json.nodes.forEach((e5, t6) => {
      e5.children && e5.children.forEach((e6) => {
        this._nodeParentMap.set(e6, t6);
      });
    });
  }
  _loadTextureImageData(e5, t6, r7) {
    return __async(this, null, function* () {
      const o6 = this._textureLoaders.get(e5);
      if (o6) return o6;
      const n8 = this._createTextureLoader(t6, r7);
      return this._textureLoaders.set(e5, n8), n8;
    });
  }
  _createTextureLoader(t6, r7) {
    return __async(this, null, function* () {
      const o6 = Z(t6), n8 = this.json.images[o6];
      if (n8.uri) {
        if (n8.uri.endsWith(".ktx2")) {
          const e5 = yield this._context.loadBinary(this._resolveUri(n8.uri), r7);
          return new t(new Uint8Array(e5));
        }
        return this._context.loadImage(this._resolveUri(n8.uri), r7);
      }
      if (null == n8.bufferView) throw new s("gltf-loader-unsupported-feature", "Image bufferView must be defined.");
      if (null == n8.mimeType) throw new s("gltf-loader-unsupported-feature", "Image mimeType must be defined.");
      const s4 = this.json.bufferViews[n8.bufferView], a3 = yield this.getBuffer(s4.buffer, r7);
      if (null != s4.byteStride) throw new s("gltf-loader-unsupported-feature", "byteStride not supported for image buffer");
      const i6 = a3.byteOffset + (s4.byteOffset || 0);
      return o(new Uint8Array(a3.buffer, i6, s4.byteLength), n8.mimeType);
    });
  }
  getLoadedBuffersSize() {
    return __async(this, null, function* () {
      if (this._glbBuffer) return this._glbBuffer.byteLength;
      const e5 = yield g(Array.from(this._bufferLoaders.values())), t6 = yield g(Array.from(this._textureLoaders.values()));
      return e5.reduce((e6, t7) => e6 + (t7?.byteLength ?? 0), 0) + t6.reduce((e6, t7) => e6 + (t7 ? r4(t7) ? t7.data.byteLength : t7.width * t7.height * 4 : 0), 0);
    });
  }
};
var q2 = g2(e(), Math.PI / 2);
var J = new r2(2, 0, "glTF");
var z = e2();
var X = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
};
var $ = {
  [C.BYTE]: 1,
  [C.UNSIGNED_BYTE]: 1,
  [C.SHORT]: 2,
  [C.UNSIGNED_SHORT]: 2,
  [C.HALF_FLOAT]: 2,
  [C.FLOAT]: 4,
  [C.INT]: 4,
  [C.UNSIGNED_INT]: 4
};
function W(e5) {
  switch (e5.componentType) {
    case C.BYTE:
      return new V(e5.raw, e5.byteOffset, e5.byteStride, e5.byteOffset + e5.byteStride * e5.entryCount);
    case C.UNSIGNED_BYTE:
      return new A(e5.raw, e5.byteOffset, e5.byteStride, e5.byteOffset + e5.byteStride * e5.entryCount);
    case C.SHORT:
      return new q(e5.raw, e5.byteOffset, e5.byteStride, e5.byteOffset + e5.byteStride * e5.entryCount);
    case C.UNSIGNED_SHORT:
      return new w(e5.raw, e5.byteOffset, e5.byteStride, e5.byteOffset + e5.byteStride * e5.entryCount);
    case C.UNSIGNED_INT:
      return new F(e5.raw, e5.byteOffset, e5.byteStride, e5.byteOffset + e5.byteStride * e5.entryCount);
    case C.FLOAT:
      return new u2(e5.raw, e5.byteOffset, e5.byteStride, e5.byteOffset + e5.byteStride * e5.entryCount);
  }
}
function Q(e5, t6) {
  return new e5(t6.raw, t6.byteOffset, t6.byteStride, t6.byteOffset + t6.byteStride * (t6.entryCount - 1) + t6.componentByteSize * t6.componentCount);
}
function Z(t6) {
  if (null != t6.extensions?.KHR_texture_basisu) return t6.extensions.KHR_texture_basisu.source;
  if (null !== t6.source) return t6.source;
  throw new s("gltf-loader-unsupported-feature", "Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.");
}
var ee = /\.gltf$/i;
var te = /\.glb$/i;

// ../../../node_modules/@arcgis/core/views/3d/glTF/loader.js
var n7 = 0;
function l6(_0, _1) {
  return __async(this, arguments, function* (o6, r7, a3 = {}, l7 = true) {
    const m3 = yield Y.load(o6, r7, a3), p2 = "gltf_" + n7++, T = {
      lods: [],
      materials: /* @__PURE__ */ new Map(),
      textures: /* @__PURE__ */ new Map(),
      meta: u4(m3)
    }, f4 = !(!m3.json.asset.extras || "symbolResource" !== m3.json.asset.extras.ESRI_type), x2 = m3.json.asset.extras?.ESRI_webstyleSymbol?.webstyle, g4 = /* @__PURE__ */ new Map();
    yield c4(m3, (o7, r8, s4, n8) => __async(this, null, function* () {
      const u6 = g4.get(s4) ?? 0;
      g4.set(s4, u6 + 1);
      const c5 = void 0 !== o7.mode ? o7.mode : E2.TRIANGLES, f5 = c5 === E2.TRIANGLES || c5 === E2.TRIANGLE_STRIP || c5 === E2.TRIANGLE_FAN ? c5 : null;
      if (null == f5) return void n.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode (" + E2[c5] + "). Skipping primitive.");
      if (!m3.hasPositions(o7)) return void n.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");
      const x3 = m3.getPositionData(o7, a3), h2 = m3.getMaterial(o7, a3, l7), w2 = m3.hasNormals(o7) ? m3.getNormalData(o7, a3) : null, v2 = m3.hasTangents(o7) ? m3.getTangentData(o7, a3) : null, S = m3.hasTextureCoordinates(o7) ? m3.getTextureCoordinates(o7, a3) : null, R = m3.hasVertexColors(o7) ? m3.getVertexColors(o7, a3) : null, _3 = m3.getIndexData(o7, a3), E4 = {
        name: n8,
        transform: r3(r8),
        attributes: {
          position: yield x3,
          normal: w2 ? yield w2 : null,
          texCoord0: S ? yield S : null,
          color: R ? yield R : null,
          tangent: v2 ? yield v2 : null
        },
        indices: yield _3,
        primitiveType: f5,
        material: d2(T, yield h2, p2)
      };
      let I2 = null;
      null != T.meta?.ESRI_lod && "screenSpaceRadius" === T.meta.ESRI_lod.metric && (I2 = T.meta.ESRI_lod.thresholds[s4]), T.lods[s4] = T.lods[s4] || {
        parts: [],
        name: n8,
        lodThreshold: I2
      }, T.lods[s4].parts[u6] = E4;
    }));
    for (const e5 of T.lods) e5.parts = e5.parts.filter((e6) => !!e6);
    const h = yield m3.getLoadedBuffersSize();
    return {
      model: T,
      meta: {
        isEsriSymbolResource: f4,
        uri: m3.uri,
        ESRI_webstyle: x2
      },
      customMeta: {},
      size: h
    };
  });
}
function u4(e5) {
  const t6 = e5.json;
  let o6 = null;
  return t6.nodes.forEach((e6) => {
    const t7 = e6.extras;
    null != t7 && (t7.ESRI_proxyEllipsoid || t7.ESRI_lod) && (o6 = t7);
  }), o6;
}
function c4(t6, o6) {
  return __async(this, null, function* () {
    const r7 = t6.json, s4 = r7.scenes[r7.scene || 0].nodes, a3 = s4.length > 1, i6 = [];
    for (const e5 of s4) {
      const t7 = r7.nodes[e5];
      if (i6.push(n8(e5, 0)), m2(t7) && !a3) {
        t7.extensions.MSFT_lod.ids.forEach((e6, t8) => n8(e6, t8 + 1));
      }
    }
    function n8(s5, a4) {
      return __async(this, null, function* () {
        const l7 = r7.nodes[s5], u6 = t6.getNodeTransform(s5);
        if (null != l7.weights && n.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."), null != l7.mesh) {
          const e5 = r7.meshes[l7.mesh];
          for (const t7 of e5.primitives) i6.push(o6(t7, u6, a4, e5.name));
        }
        for (const e5 of l7.children || []) i6.push(n8(e5, a4));
      });
    }
    yield Promise.all(i6);
  });
}
function m2(e5) {
  return e5.extensions?.MSFT_lod && Array.isArray(e5.extensions.MSFT_lod.ids);
}
function d2(e5, t6, s4) {
  const a3 = (t7) => {
    const o6 = `${s4}_tex_${t7 && t7.id}${t7?.name ? "_" + t7.name : ""}`;
    if (t7 && !e5.textures.has(o6)) {
      const s5 = l4(t7.data, {
        wrap: {
          s: t7.wrapS,
          t: t7.wrapT
        },
        mipmap: p.has(t7.minFilter),
        noUnpackFlip: true
      });
      e5.textures.set(o6, s5);
    }
    return o6;
  }, i6 = `${s4}_mat_${t6.id}_${t6.name}`;
  if (!e5.materials.has(i6)) {
    const r7 = r5({
      color: [t6.color[0], t6.color[1], t6.color[2]],
      opacity: t6.color[3],
      alphaMode: t6.alphaMode,
      alphaCutoff: t6.alphaCutoff,
      doubleSided: t6.doubleSided,
      colorMixMode: t6.ESRI_externalColorMixMode,
      textureColor: t6.colorTexture ? a3(t6.colorTexture) : void 0,
      textureNormal: t6.normalTexture ? a3(t6.normalTexture) : void 0,
      textureOcclusion: t6.occlusionTexture ? a3(t6.occlusionTexture) : void 0,
      textureEmissive: t6.emissiveTexture ? a3(t6.emissiveTexture) : void 0,
      textureMetallicRoughness: t6.metallicRoughnessTexture ? a3(t6.metallicRoughnessTexture) : void 0,
      emissiveFactor: [t6.emissiveFactor[0], t6.emissiveFactor[1], t6.emissiveFactor[2]],
      colorTextureTransform: t6.colorTextureTransform,
      normalTextureTransform: t6.normalTextureTransform,
      occlusionTextureTransform: t6.occlusionTextureTransform,
      emissiveTextureTransform: t6.emissiveTextureTransform,
      metallicRoughnessTextureTransform: t6.metallicRoughnessTextureTransform,
      metallicFactor: t6.metallicFactor,
      roughnessFactor: t6.roughnessFactor,
      receiveShadows: t6.receiveShadows,
      receiveAmbientOcclustion: t6.receiveAmbientOcclusion
    });
    e5.materials.set(i6, r7);
  }
  return i6;
}
var p = /* @__PURE__ */ new Set([L2.LINEAR_MIPMAP_LINEAR, L2.LINEAR_MIPMAP_NEAREST]);

// ../../../node_modules/@arcgis/core/views/3d/glTF/internal/indexUtils.js
function o4(r7, t6) {
  switch (t6) {
    case E2.TRIANGLES:
      return f3(r7);
    case E2.TRIANGLE_STRIP:
      return u5(r7);
    case E2.TRIANGLE_FAN:
      return i5(r7);
  }
}
function f3(e5) {
  return "number" == typeof e5 ? l2(e5) : u(e5) ? new Uint16Array(e5) : e5;
}
function u5(r7) {
  const t6 = "number" == typeof r7 ? r7 : r7.length;
  if (t6 < 3) return [];
  const n8 = t6 - 2, o6 = i3(3 * n8);
  if ("number" == typeof r7) {
    let r8 = 0;
    for (let t7 = 0; t7 < n8; t7 += 1) t7 % 2 == 0 ? (o6[r8++] = t7, o6[r8++] = t7 + 1, o6[r8++] = t7 + 2) : (o6[r8++] = t7 + 1, o6[r8++] = t7, o6[r8++] = t7 + 2);
  } else {
    let t7 = 0;
    for (let e5 = 0; e5 < n8; e5 += 1) e5 % 2 == 0 ? (o6[t7++] = r7[e5], o6[t7++] = r7[e5 + 1], o6[t7++] = r7[e5 + 2]) : (o6[t7++] = r7[e5 + 1], o6[t7++] = r7[e5], o6[t7++] = r7[e5 + 2]);
  }
  return o6;
}
function i5(r7) {
  const t6 = "number" == typeof r7 ? r7 : r7.length;
  if (t6 < 3) return new Uint16Array(0);
  const e5 = t6 - 2, n8 = e5 <= 65536 ? new Uint16Array(3 * e5) : new Uint32Array(3 * e5);
  if ("number" == typeof r7) {
    let r8 = 0;
    for (let t7 = 0; t7 < e5; ++t7) n8[r8++] = 0, n8[r8++] = t7 + 1, n8[r8++] = t7 + 2;
    return n8;
  }
  const o6 = r7[0];
  let f4 = r7[1], u6 = 0;
  for (let i6 = 0; i6 < e5; ++i6) {
    const t7 = r7[i6 + 2];
    n8[u6++] = o6, n8[u6++] = f4, n8[u6++] = t7, f4 = t7;
  }
  return n8;
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js
var o5 = 2.1;

export {
  o2 as o,
  n4 as n,
  l3 as l,
  e3 as e,
  t2 as t,
  f2 as f,
  n5 as n2,
  l6 as l2,
  o4 as o2,
  o5 as o3
};
//# sourceMappingURL=chunk-AD33ZJKF.js.map
