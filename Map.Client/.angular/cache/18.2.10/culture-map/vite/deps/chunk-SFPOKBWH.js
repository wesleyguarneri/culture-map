import {
  g
} from "./chunk-O6UMOA7Q.js";
import {
  f3 as f2,
  k,
  n2 as n6,
  s as s3
} from "./chunk-4JFSB6JC.js";
import {
  M,
  d as d3,
  s as s2,
  t as t2
} from "./chunk-EMZQT2MP.js";
import {
  l as l3
} from "./chunk-PUH7YYDT.js";
import {
  a as a2,
  l as l2
} from "./chunk-EU7HJNZD.js";
import {
  L,
  yt
} from "./chunk-R4DKV4UN.js";
import {
  U
} from "./chunk-YLE5AYZV.js";
import {
  j2 as j,
  t,
  v
} from "./chunk-LPEFONL3.js";
import {
  n as n5
} from "./chunk-SSMSHZ2C.js";
import {
  pt,
  rt
} from "./chunk-C7NRYPDG.js";
import {
  e as e3
} from "./chunk-O437BSYE.js";
import {
  e as e2
} from "./chunk-YZNT6QWD.js";
import {
  p
} from "./chunk-2GMKFOCL.js";
import {
  d as d2
} from "./chunk-QCBC3RJX.js";
import {
  b
} from "./chunk-TRSGUVSM.js";
import {
  Z
} from "./chunk-Q7SRMLJZ.js";
import {
  d
} from "./chunk-J55F4AC2.js";
import {
  e
} from "./chunk-JCWFGRHQ.js";
import {
  o as o2
} from "./chunk-JILEJ6R2.js";
import {
  y
} from "./chunk-S3IO7V4Q.js";
import {
  o,
  r
} from "./chunk-CVB43GGP.js";
import {
  m,
  n as n3,
  n2 as n4
} from "./chunk-GWC3DAGP.js";
import {
  a
} from "./chunk-T6GCUITX.js";
import {
  u
} from "./chunk-IHVSZYZS.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import {
  n as n2
} from "./chunk-2MMLMOWS.js";
import {
  l2 as l,
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  has
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/util/Writer.js
var t3 = 1.25;
var r2 = class {
  get length() {
    return this._pos;
  }
  constructor(t8, r7) {
    this._pos = 0;
    const e5 = r7 ? this._roundToNearest(r7, t8.BYTES_PER_ELEMENT) : 40;
    this._array = new ArrayBuffer(e5), this._buffer = new t8(this._array), this._ctor = t8, this._i16View = new Int16Array(this._array);
  }
  _roundToNearest(t8, r7) {
    const e5 = Math.round(t8);
    return 1 === r7 ? e5 : e5 + (r7 - e5 % r7);
  }
  _ensureSize(r7) {
    if (this._pos + r7 >= this._buffer.length) {
      const e5 = this._roundToNearest((this._array.byteLength + r7 * this._buffer.BYTES_PER_ELEMENT) * t3, this._buffer.BYTES_PER_ELEMENT), s8 = new ArrayBuffer(e5), i3 = new this._ctor(s8);
      i3.set(this._buffer, 0), this._array = s8, this._buffer = i3, this._i16View = new Int16Array(this._array);
    }
  }
  ensureSize(t8) {
    this._ensureSize(t8);
  }
  writeF32(t8) {
    this._ensureSize(1);
    const r7 = this._pos;
    return new Float32Array(this._array, 4 * this._pos, 1)[0] = t8, this._pos++, r7;
  }
  push(t8) {
    this._ensureSize(1);
    const r7 = this._pos;
    return this._buffer[this._pos++] = t8, r7;
  }
  writeFixed(t8) {
    this._buffer[this._pos++] = t8;
  }
  setValue(t8, r7) {
    this._buffer[t8] = r7;
  }
  i1616Add(t8, r7, e5) {
    this._i16View[2 * t8] += r7, this._i16View[2 * t8 + 1] += e5;
  }
  getValue(t8) {
    return this._buffer[t8];
  }
  getValueF32(t8) {
    return new Float32Array(this._array, 4 * t8, 1)[0];
  }
  incr(t8) {
    if (this._buffer.length < t8) throw new Error("Increment index overflows the target buffer");
    this._buffer[t8]++;
  }
  decr(t8) {
    this._buffer[t8]--;
  }
  writeRegion(t8) {
    this._ensureSize(t8.length);
    const r7 = this._pos;
    return this._buffer.set(t8, this._pos), this._pos += t8.length, r7;
  }
  writeManyFrom(t8, r7, e5) {
    this._ensureSize(e5 - r7);
    for (let s8 = r7; s8 !== e5; s8++) this.writeFixed(t8._buffer[s8]);
  }
  buffer() {
    const t8 = this._array.slice(0, 4 * this._pos);
    return this.destroy(), t8;
  }
  toArray() {
    return [...this._buffer];
  }
  seek(t8) {
    this._pos = t8;
  }
  destroy() {
    this._array = null, this._buffer = null;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/mesh/VertexDataWriter.js
var e4 = 6;
var i = 4;
var r3 = class {
  constructor(r7, s8, n11 = 0) {
    const c3 = e4 * n11 * Uint32Array.BYTES_PER_ELEMENT, h = i * n11 * s8.stride, u2 = s8.stride / 4, _3 = s8.attributes.find((t8) => "pos" === t8.name || "position" === t8.name);
    if (!_3) throw new Error("InternalError: Unable to find position attribute");
    this.layout = __spreadProps(__spreadValues({}, s8), {
      position: _3
    }), this._indices = new r2(Uint32Array, c3), this._vertices = new r2(Uint32Array, h), this._metrics = new r2(Uint32Array, 0), this._metricCountOffset = this._metrics.push(0), this._strideInt = u2, this._instanceId = r7;
  }
  serialize(t8) {
    const e5 = this._indices.buffer(), i3 = this._vertices.buffer(), r7 = this._metrics.length ? this._metrics.buffer() : null;
    return t8.push(e5, i3), {
      instanceId: this._instanceId,
      layout: this.layout,
      indices: e5,
      vertices: i3,
      metrics: r7
    };
  }
  get strideInt() {
    return this._strideInt;
  }
  get vertexCount() {
    return this._vertices.length / this._strideInt;
  }
  get indexCount() {
    return this._indices.length;
  }
  get indexWriter() {
    return this._indices;
  }
  get vertexWriter() {
    return this._vertices;
  }
  get metricWriter() {
    return this._metrics;
  }
  vertexEnsureSize(t8) {
    this._vertices.ensureSize(t8);
  }
  indexEnsureSize(t8) {
    this._indices.ensureSize(t8);
  }
  writeIndex(t8) {
    this._indices.push(t8);
  }
  writeVertex(t8) {
    this._vertices.push(t8);
  }
  writeVertexRegion(t8) {
    this._vertices.writeRegion(t8);
  }
  writeVertexF32(t8) {
    this._vertices.writeF32(t8);
  }
  writeMetric(t8) {
    this._metrics.incr(this._metricCountOffset), t8.serialize(this._metrics);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/mesh/MeshData.js
var n7 = class {
  constructor(e5, r7 = 0) {
    this._id = e5, this._sizeHint = r7, this._entityRecordCountOffset = 0, this._entityCountOffset = 0, this._entityIdIndex = 0, this._entitySortKeyIndex = 0, this._didEntityStart = false, this._instanceIdToVertexData = /* @__PURE__ */ new Map(), this._recordIndexStart = 0, this._recordIndexCount = 0, this._recordVertexStart = 0, this._recordVertexCount = 0, this._current = {
      metric: null,
      writer: null,
      start: 0,
      sortKey: 0,
      instanceId: 0,
      layoutHash: 0,
      indexStart: 0,
      vertexStart: 0,
      textureKey: 0,
      metricBoxLenPointer: 0
    }, this._entities = new r2(Uint32Array, this._sizeHint * s2.byteSizeHint), this._entityCountOffset = this._entities.push(0);
  }
  get id() {
    return this._id;
  }
  serialize() {
    const t8 = new Array(), e5 = [], r7 = this._entities.buffer();
    for (const i3 of this._instanceIdToVertexData.values()) e5.push(i3.serialize(t8));
    return {
      message: {
        data: e5,
        entities: r7
      },
      transferList: t8
    };
  }
  vertexCount() {
    return this._current.writer?.vertexCount ?? 0;
  }
  indexCount() {
    return this._current.writer?.indexCount ?? 0;
  }
  vertexEnsureSize(t8) {
    this._current.writer.vertexEnsureSize(t8);
  }
  indexEnsureSize(t8) {
    this._current.writer.indexEnsureSize(t8);
  }
  vertexWrite(t8) {
    this._current.writer.writeVertex(t8);
  }
  vertexWriteRegion(t8) {
    this._current.writer.writeVertexRegion(t8);
  }
  vertexWriteF32(t8) {
    this._current.writer.writeVertexF32(t8);
  }
  recordBounds(t8, e5, r7, i3) {
  }
  indexWrite(t8) {
    this._current.writer.writeIndex(t8);
  }
  metricStart(t8) {
    this._current.metric = t8;
  }
  metricEnd() {
    const t8 = this._current.writer;
    this._current.metric.bounds.length && t8.writeMetric(this._current.metric);
  }
  metricBoxWrite(t8) {
    this._current.metric.bounds.push(t8);
  }
  entityStart(t8, e5 = t8) {
    this._entityIdIndex = this._entities.push(t8), this._entitySortKeyIndex = this._entities.writeF32(e5), this._entityRecordCountOffset = this._entities.push(0), this._didEntityStart = true;
  }
  entityRecordCount() {
    return this._entities.getValue(this._entityRecordCountOffset);
  }
  entityEnd() {
    if (!this._didEntityStart) return;
    0 === this.entityRecordCount() ? this._entities.seek(this._entityIdIndex) : this._entities.incr(this._entityCountOffset), this._didEntityStart = false;
  }
  recordCount() {
    return this._entities.getValue(this._entityRecordCountOffset);
  }
  recordStart(t8, e5, r7 = 0) {
    this._current.writer = this._getVertexWriter(t8, e5), this._current.indexStart = this._current.writer.indexCount, this._current.vertexStart = this._current.writer.vertexCount, this._current.instanceId = t8, this._current.layoutHash = e5.hash, this._current.textureKey = r7;
  }
  recordEnd(t8 = 0) {
    const r7 = this._current.vertexStart, i3 = this._current.writer.vertexCount - r7;
    if (!i3) return false;
    const n11 = this._current.indexStart, s8 = this._current.writer.indexCount - n11;
    return this._recordIndexStart = n11, this._recordIndexCount = s8, this._recordVertexStart = r7, this._recordVertexCount = i3, this._entities.incr(this._entityRecordCountOffset), t2.write(this._entities, this._current.instanceId, this._current.textureKey, n11, s8, r7, i3, t8), true;
  }
  copyLast(t8, r7) {
    const i3 = this._recordVertexStart + this._recordVertexCount;
    this._entities.incr(this._entityRecordCountOffset), t2.write(this._entities, this._current.instanceId, this._current.textureKey, this._recordIndexStart + this._recordIndexCount, this._recordIndexCount, i3, this._recordVertexCount, 0);
    const n11 = this._current.writer.indexWriter, s8 = this._current.writer.vertexWriter, o4 = this._recordIndexStart + this._recordIndexCount, c3 = this._recordVertexCount;
    for (let e5 = this._recordIndexStart; e5 !== o4; e5++) {
      const t9 = n11.getValue(e5);
      n11.push(t9 + c3);
    }
    const u2 = this._current.writer.layout.stride / Uint32Array.BYTES_PER_ELEMENT, h = this._recordVertexStart * u2, _3 = (this._recordVertexStart + this._recordVertexCount) * u2;
    for (let e5 = h; e5 !== _3; e5++) {
      const t9 = s8.getValue(e5);
      s8.push(t9);
    }
    const d5 = this._current.writer.layout.position, a7 = d5.packPrecisionFactor ?? 1, x2 = d5.offset / Uint32Array.BYTES_PER_ELEMENT, y3 = t8 * a7, S2 = r7 * a7;
    for (let e5 = i3 * u2; e5 <= s8.length; e5 += u2) s8.i1616Add(e5 + x2, y3, S2);
  }
  copyLastFrom(t8, e5, r7) {
    const i3 = t8._entities.getValue(t8._entityIdIndex);
    if (i3 !== this._entities.getValue(this._entityIdIndex)) {
      const e6 = t8._entities.getValueF32(t8._entitySortKeyIndex);
      this.entityStart(i3, e6);
    }
    this.recordStart(t8._current.instanceId, t8._current.writer.layout, t8._current.textureKey);
    const n11 = this._current.writer.layout.stride / Uint32Array.BYTES_PER_ELEMENT, s8 = this._current.vertexStart, o4 = t8._current.vertexStart - s8, c3 = this._current.writer.indexWriter, u2 = this._current.writer.vertexWriter, h = t8._current.writer.indexWriter, _3 = t8._current.writer.vertexWriter;
    for (let f4 = t8._current.indexStart; f4 !== h.length; f4++) {
      const t9 = h.getValue(f4);
      c3.push(t9 - o4);
    }
    for (let f4 = t8._current.vertexStart * n11; f4 !== _3.length; f4++) {
      const t9 = _3.getValue(f4);
      u2.push(t9);
    }
    const d5 = this._current.writer.layout.position, a7 = d5.packPrecisionFactor ?? 1, x2 = d5.offset / Uint32Array.BYTES_PER_ELEMENT, y3 = e5 * a7, S2 = r7 * a7;
    for (let f4 = s8 * n11; f4 <= u2.length; f4 += n11) u2.i1616Add(f4 + x2, y3, S2);
    this.recordEnd();
  }
  _getVertexWriter(t8, e5) {
    const i3 = this._instanceIdToVertexData;
    return i3.has(t8) || i3.set(t8, new r3(t8, e5, this._sizeHint)), i3.get(t8);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/AResourceProxy.js
var s4 = class {
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/mesh/factories/ResourceProxy.js
var s5 = class extends s4 {
  constructor(e5) {
    super(), this._fetcher = e5, this._controller = new AbortController(), this._pendingIds = /* @__PURE__ */ new Set(), this._pendingRequests = [], this._resourceIdToResource = /* @__PURE__ */ new Map();
  }
  destroy() {
    this._controller.abort();
  }
  get _abortOptions() {
    return {
      signal: this._controller.signal
    };
  }
  enqueueRequest(r7) {
    const s8 = M(r7.resource), o4 = l(JSON.stringify(s8));
    return this._pendingIds.has(o4) || (this._pendingIds.add(o4), this._pendingRequests.push(__spreadProps(__spreadValues({}, r7), {
      resourceId: o4
    }))), o4;
  }
  fetchEnqueuedResources() {
    return __async(this, null, function* () {
      const e5 = this._pendingRequests;
      this._pendingIds.clear(), this._pendingRequests = [];
      const t8 = yield this._fetcher.fetch(e5, this._abortOptions);
      for (let r7 = 0; r7 < t8.length; r7++) {
        const s8 = e5[r7].resourceId;
        this._resourceIdToResource.set(s8, t8[r7]);
      }
    });
  }
  fetchResourceImmediate(e5) {
    return __async(this, null, function* () {
      const t8 = yield this._fetcher.fetch([e5], this._abortOptions);
      if (1 !== t8.length) throw new Error("FeaturePipelineResourceProxy: failed to fetch resources");
      return t8[0];
    });
  }
  fetchDictionaryResourceImmediate(e5) {
    return __async(this, null, function* () {
      const t8 = yield this._fetcher.fetchDictionary([e5], this._abortOptions);
      if (1 !== t8.length) throw new Error("FeaturePipelineResourceProxy: failed to fetch dictionary resources");
      return t8[0];
    });
  }
  getResource(e5) {
    return this._resourceIdToResource.get(e5);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/support/AComputedField.js
var s6 = class {
  destroy() {
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/support/CachedField.js
var r4 = class extends s6 {
  constructor(e5) {
    super(), this._field = e5;
  }
  resize(e5) {
    throw new Error("Method not implemented.");
  }
  read(e5, r7) {
    return e5.readAttribute(this._field);
  }
  readWithDefault(e5, r7) {
    return e5.readAttribute(this._field);
  }
  referencesScale() {
    return false;
  }
  referencesGeometry() {
    return false;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/arcade/callExpressionWithCursor.js
function r5(r7, n11, t8) {
  if (null == r7) return null;
  const u2 = n11.readArcadeFeature();
  n11.contextTimeZone = t8.$view?.timeZone;
  try {
    return r7.evaluate(__spreadProps(__spreadValues({}, t8), {
      $feature: u2
    }), r7.services);
  } catch (a7) {
    return n.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", a7), null;
  }
}
function n8(e5) {
  return null == e5 || e5 === 1 / 0 || e5 === -1 / 0 || "number" == typeof e5 && isNaN(e5);
}
function t4(e5, r7, t8, u2) {
  if (null == e5) return null != u2 ? u2 : null;
  const a7 = r7.readArcadeFeature();
  r7.contextTimeZone = t8.$view?.timeZone;
  const o4 = e5.evaluate(__spreadProps(__spreadValues({}, t8), {
    $feature: a7
  }), e5.services);
  return n8(o4) ? null != u2 ? u2 : null : o4;
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/support/ComputedExpression.js
var c = class _c extends s6 {
  static create(t8, s8) {
    return __async(this, null, function* () {
      const a7 = yield o2(t8, s8.spatialReference, s8.fields), i3 = l(t8);
      return new _c(a7, i3);
    });
  }
  constructor(e5, r7) {
    super(), this._compiled = e5, this._cacheKey = r7;
  }
  resize(e5) {
  }
  read(e5, r7) {
    return this.referencesScale() || "system" !== r7.$view.timeZone ? r5(this._compiled, e5, r7) : this._readCached(e5, r7);
  }
  readWithDefault(e5, r7, t8) {
    return this.referencesScale() || "system" !== r7.$view.timeZone ? t4(this._compiled, e5, r7, t8) : this._readWithDefaultCached(e5, r7, t8);
  }
  referencesScale() {
    return this._compiled?.referencesScale() ?? false;
  }
  referencesGeometry() {
    return this._compiled?.referencesGeometry() ?? false;
  }
  _readCached(e5, r7) {
    if (e5.setCache(this._cacheKey), e5.hasCachedValue()) return e5.getCachedValue();
    const s8 = r5(this._compiled, e5, r7);
    return e5.setCachedValue(s8), s8;
  }
  _readWithDefaultCached(e5, r7, t8) {
    if (e5.setCache(this._cacheKey), e5.hasCachedValue()) return e5.getCachedValue();
    const a7 = t4(this._compiled, e5, r7, t8);
    return e5.setCachedValue(a7), a7;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/support/ComputedLegacyLabelExpression.js
var a3 = class _a extends s6 {
  static create(t8, s8) {
    return __async(this, null, function* () {
      const l6 = p(t8);
      return new _a((r7) => l6.replaceAll(/{[^}]*}/g, (t9) => {
        const s9 = t9.slice(1, -1), a7 = r7.metadata.fieldsIndex.get(s9);
        if (null == a7) return t9;
        const l7 = r7.readAttribute(s9);
        return null == l7 ? "" : g(l7, a7);
      }));
    });
  }
  constructor(e5) {
    super(), this._evaluator = e5;
  }
  resize(e5) {
  }
  read(e5, r7) {
    return this._evaluator(e5);
  }
  readWithDefault(e5, r7, s8) {
    const a7 = this._evaluator(e5);
    return n8(a7) ? s8 : a7;
  }
  referencesScale() {
    return false;
  }
  referencesGeometry() {
    return false;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/support/NormalizedField.js
var r6 = class extends s6 {
  constructor(e5, r7) {
    super(), this._field = e5, this._normalizationInfo = r7;
  }
  resize(e5) {
    throw new Error("Method not implemented.");
  }
  read(e5, r7) {
    return this._readNormalized(e5);
  }
  readWithDefault(e5, r7) {
    return this._readNormalized(e5);
  }
  referencesScale() {
    return false;
  }
  referencesGeometry() {
    return false;
  }
  _readNormalized(e5) {
    const r7 = e5.readAttribute(this._field);
    if (null == r7) return null;
    const {
      normalizationField: t8,
      normalizationTotal: i3,
      normalizationType: o4
    } = this._normalizationInfo, a7 = e5.readAttribute(t8);
    switch (o4 ?? "esriNormalizeByField") {
      case "esriNormalizeByField":
        return a7 ? a7 ? r7 / a7 : void 0 : null;
      case "esriNormalizeByLog":
        return Math.log(r7) * Math.LOG10E;
      case "esriNormalizeByPercentOfTotal":
        return i3 ? r7 / i3 * 100 : null;
    }
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/support/StaticBitSet.js
var t5 = class _t {
  static fromBuffer(e5, s8) {
    return new _t(e5, s8);
  }
  static create(e5, s8 = 4294967295) {
    const r7 = new Uint32Array(Math.ceil(e5 / 32));
    return new _t(r7, s8);
  }
  constructor(t8, e5) {
    this._mask = 0, this._buf = t8, this._mask = e5;
  }
  _getIndex(t8) {
    return Math.floor(t8 / 32);
  }
  has(t8) {
    const e5 = this._mask & t8;
    return !!(this._buf[this._getIndex(e5)] & 1 << e5 % 32);
  }
  hasRange(t8, e5) {
    let s8 = t8, r7 = e5;
    for (; s8 % 32 && s8 !== r7; ) {
      if (this.has(s8)) return true;
      s8++;
    }
    for (; r7 % 32 && s8 !== r7; ) {
      if (this.has(s8)) return true;
      r7--;
    }
    if (s8 === r7) return false;
    for (let h = s8 / 32; h !== r7 / 32; h++) {
      if (this._buf[h]) return true;
    }
    return false;
  }
  set(t8) {
    const e5 = this._mask & t8, s8 = this._getIndex(e5), r7 = 1 << e5 % 32;
    this._buf[s8] |= r7;
  }
  setRange(t8, e5) {
    let s8 = t8, r7 = e5;
    for (; s8 % 32 && s8 !== r7; ) this.set(s8++);
    for (; r7 % 32 && s8 !== r7; ) this.set(r7--);
    if (s8 !== r7) for (let h = s8 / 32; h !== r7 / 32; h++) this._buf[h] = 4294967295;
  }
  unset(t8) {
    const e5 = this._mask & t8, s8 = this._getIndex(e5), r7 = 1 << e5 % 32;
    this._buf[s8] &= 4294967295 ^ r7;
  }
  resize(t8) {
    const e5 = this._buf, s8 = new Uint32Array(Math.ceil(t8 / 32));
    s8.set(e5), this._buf = s8;
  }
  or(t8) {
    for (let e5 = 0; e5 < this._buf.length; e5++) this._buf[e5] |= t8._buf[e5];
    return this;
  }
  and(t8) {
    for (let e5 = 0; e5 < this._buf.length; e5++) this._buf[e5] &= t8._buf[e5];
    return this;
  }
  xor(t8) {
    for (let e5 = 0; e5 < this._buf.length; e5++) this._buf[e5] ^= t8._buf[e5];
    return this;
  }
  ior(t8) {
    for (let e5 = 0; e5 < this._buf.length; e5++) this._buf[e5] |= ~t8._buf[e5];
    return this;
  }
  iand(t8) {
    for (let e5 = 0; e5 < this._buf.length; e5++) this._buf[e5] &= ~t8._buf[e5];
    return this;
  }
  ixor(t8) {
    for (let e5 = 0; e5 < this._buf.length; e5++) this._buf[e5] ^= ~t8._buf[e5];
    return this;
  }
  any() {
    for (let t8 = 0; t8 < this._buf.length; t8++) if (this._buf[t8]) return true;
    return false;
  }
  copy(t8) {
    for (let e5 = 0; e5 < this._buf.length; e5++) this._buf[e5] = t8._buf[e5];
    return this;
  }
  clone() {
    return new _t(this._buf.slice(), this._mask);
  }
  clear() {
    for (let t8 = 0; t8 < this._buf.length; t8++) this._buf[t8] = 0;
    return this;
  }
  forEachSet(t8) {
    for (let e5 = 0; e5 < this._buf.length; e5++) {
      let s8 = this._buf[e5], r7 = 32 * e5;
      if (s8) for (; s8; ) {
        1 & s8 && t8(r7), s8 >>>= 1, r7++;
      }
    }
  }
  countSet() {
    let t8 = 0;
    return this.forEachSet((e5) => {
      t8++;
    }), t8;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/support/whereUtils.js
var a4 = () => n.getLogger("esri.views.2d.layers.features.support.whereUtils");
var n9 = {
  getAttribute: (e5, r7) => e5.readAttribute(r7)
};
function o3(r7, o4) {
  return __async(this, null, function* () {
    try {
      const s8 = yield e(r7, o4);
      if (!s8.isStandardized) {
        const r8 = new s("mapview - bad input", "Unable to apply filter's definition expression, as expression is not standardized.", s8);
        a4().error(r8);
      }
      return (e5) => {
        const t8 = e5.readArcadeFeature();
        try {
          return s8.testFeature(t8, n9);
        } catch (o5) {
          return a4().warn("mapview-bad-where-clause", "Encountered an error when evaluating where clause", r7), true;
        }
      };
    } catch (s8) {
      return a4().warn("mapview-bad-where-clause", "Encountered an error when evaluating where clause", r7), (e5) => true;
    }
  });
}

// ../../../node_modules/@arcgis/core/views/2d/layers/features/support/ComputedAttributeStorage.js
var a5 = () => n.getLogger("esri.views.2d.layers.features.support.ComputedAttributeStorage");
var c2 = 4294967295;
function m2(t8, e5, s8) {
  if (!(t8.length > e5)) for (; t8.length <= e5; ) t8.push(s8);
}
var p2 = class {
  constructor(t8) {
    this._numerics = [], this._strings = [], this._allocatedSize = 256, this._bitsets = [], this._instanceIds = [], this._bounds = [], this._dirtyBitset = this.getBitset(this.createBitset()), this.compilationOptions = t8;
  }
  createBitset() {
    const t8 = this._bitsets.length;
    return this._bitsets.push(t5.create(this._allocatedSize, n6)), t8 + 1;
  }
  createComputedField(e5, s8 = false) {
    return __async(this, null, function* () {
      if (e5.expression) try {
        if (!this.compilationOptions) throw new Error("InternalError: Compilation options not defined");
        if (s8) return a3.create(e5.expression, this.compilationOptions);
        return yield c.create(e5.expression, this.compilationOptions);
      } catch (d5) {
        const s9 = new s("featurelayer", "Failed to compile arcade expression", {
          error: d5,
          expression: e5.expression
        });
        return a5().error(s9), null;
      }
      if (e5.normalizationType || e5.normalizationField) return new r6(e5.field, e5);
      if (e5.field) return new r4(e5.field);
      const i3 = new s("featurelayer", "Unable to create computed field. No expression or field found", {
        info: e5
      });
      return a5().error(i3), null;
    });
  }
  createWhereClause(t8) {
    return __async(this, null, function* () {
      return t8 ? o3(t8, this.compilationOptions.fields) : null;
    });
  }
  getBitset(t8) {
    return this._bitsets[t8 - 1];
  }
  getComputedNumeric(t8, e5) {
    return this.getComputedNumericAtIndex(t8 & n6, 0);
  }
  setComputedNumeric(t8, e5, s8) {
    return this.setComputedNumericAtIndex(t8 & n6, s8, 0);
  }
  getComputedString(t8, e5) {
    return this.getComputedStringAtIndex(t8 & n6, 0);
  }
  setComputedString(t8, e5, s8) {
    return this.setComputedStringAtIndex(t8 & n6, 0, s8);
  }
  getComputedNumericAtIndex(t8, e5) {
    const s8 = t8 & n6;
    return this._ensureNumeric(e5, s8), this._numerics[e5][s8];
  }
  setComputedNumericAtIndex(t8, e5, s8) {
    const r7 = t8 & n6;
    this._ensureNumeric(e5, r7), this._numerics[e5][r7] = s8;
  }
  getPackedChunkId(t8) {
    const e5 = t8 & n6;
    return this._ensureInstanceId(e5), this._instanceIds[e5];
  }
  setPackedChunkId(t8, e5) {
    const s8 = t8 & n6;
    this._ensureInstanceId(s8), this._instanceIds[s8] = e5;
  }
  getComputedStringAtIndex(t8, e5) {
    const s8 = t8 & n6;
    return this._ensureString(e5, s8), this._strings[e5][s8];
  }
  setComputedStringAtIndex(t8, e5, s8) {
    const r7 = t8 & n6;
    this._ensureString(e5, r7), this._strings[e5][r7] = s8;
  }
  getXMin(t8) {
    return this._bounds[4 * (t8 & n6)];
  }
  getYMin(t8) {
    return this._bounds[4 * (t8 & n6) + 1];
  }
  getXMax(t8) {
    return this._bounds[4 * (t8 & n6) + 2];
  }
  getYMax(t8) {
    return this._bounds[4 * (t8 & n6) + 3];
  }
  setBounds(t8, e5, s8 = false) {
    const r7 = t8 & n6;
    if (!s8 && !this._dirtyBitset.has(t8)) return this._bounds[4 * r7] !== c2;
    this._dirtyBitset.unset(t8);
    const n11 = e5.readGeometryWorldSpace();
    if (m2(this._bounds, 4 * r7 + 4, 0), !n11 || !n11.coords.length) return this._bounds[4 * r7] = c2, this._bounds[4 * r7 + 1] = c2, this._bounds[4 * r7 + 2] = c2, this._bounds[4 * r7 + 3] = c2, false;
    let o4 = 1 / 0, u2 = 1 / 0, d5 = -1 / 0, h = -1 / 0;
    return n11.forEachVertex((t9, e6) => {
      o4 = Math.min(o4, t9), u2 = Math.min(u2, e6), d5 = Math.max(d5, t9), h = Math.max(h, e6);
    }), this._bounds[4 * r7] = o4, this._bounds[4 * r7 + 1] = u2, this._bounds[4 * r7 + 2] = d5, this._bounds[4 * r7 + 3] = h, true;
  }
  getBounds(t8, e5) {
    const i3 = this.getXMin(e5), r7 = this.getYMin(e5), n11 = this.getXMax(e5), o4 = this.getYMax(e5);
    return d(t8, i3, r7, n11, o4), i3 !== c2;
  }
  _ensureNumeric(t8, e5) {
    this._numerics[t8] || (this._numerics[t8] = []);
    m2(this._numerics[t8], e5, 0);
  }
  _ensureInstanceId(t8) {
    m2(this._instanceIds, t8, 0);
  }
  _ensureString(t8, e5) {
    this._strings[t8] || (this._strings[t8] = []);
    m2(this._strings[t8], e5, null);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/support/FeatureMetadata.js
var i2 = class _i {
  static minimal(e5, t8, l6 = []) {
    return new _i({
      geometryType: e5,
      fields: l6,
      objectIdField: t8,
      subtypes: null,
      subtypeField: null,
      types: null,
      globalIdField: null,
      spatialReference: null,
      timeInfo: null,
      timeReferenceUnknownClient: null,
      typeIdField: null
    });
  }
  constructor(i3) {
    this._options = i3, this._fieldsIndex = "fieldsIndex" in i3 ? Z.fromJSON(i3.fieldsIndex) : new Z(i3.fields), i3.spatialReference && (this._spatialReference = f.fromJSON(i3.spatialReference)), this._arcadeSchema = {
      fields: this.fieldsIndex.fields,
      fieldsIndex: this.fieldsIndex,
      geometryType: this.geometryType,
      objectIdField: this.objectIdField,
      globalIdField: this._options.globalIdField,
      spatialReference: this._spatialReference,
      timeInfo: this._options.timeInfo,
      typeIdField: this._options.typeIdField ?? void 0,
      types: this._options.types ?? void 0,
      subtypeField: this._options.subtypeField,
      subtypes: this._options.subtypes ?? void 0
    };
  }
  get fieldsIndex() {
    return this._fieldsIndex;
  }
  get geometryType() {
    return this._options.geometryType;
  }
  get subtypeField() {
    return this._options.subtypeField;
  }
  get timeInfo() {
    return this._options.timeInfo;
  }
  get objectIdField() {
    return this._options.objectIdField;
  }
  get globalIdField() {
    return this._options.globalIdField;
  }
  get arcadeSchema() {
    return this._arcadeSchema;
  }
  get spatialReference() {
    return this._spatialReference;
  }
  get timeReferenceUnknownClient() {
    return this._options.timeReferenceUnknownClient;
  }
};
var l4 = class _l extends i2 {
  static create(e5) {
    return new _l({
      fields: [],
      objectIdField: "uid",
      geometryType: null,
      spatialReference: e5,
      globalIdField: null,
      subtypeField: null,
      subtypes: null,
      timeInfo: null,
      typeIdField: null,
      types: null,
      timeReferenceUnknownClient: null
    });
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/util/debug.js
var n10 = (n11, l6) => n11 && ((...n12) => l6.warn("DEBUG:", ...n12)) || (() => null);
var l5 = false;

// ../../../node_modules/@arcgis/core/views/2d/layers/features/support/DisplayIdGenerator.js
var t6 = class {
  constructor(e5) {
    this.data = e5, this._referenceCount = 0;
  }
  increment() {
    this._referenceCount += 1;
  }
  decrement() {
    this._referenceCount -= 1;
  }
  empty() {
    return 0 === this._referenceCount;
  }
};
var s7 = class {
  constructor() {
    this._freeIdsGenerationA = [], this._freeIdsGenerationB = [], this._idCounter = 1, this._freeIds = this._freeIdsGenerationA, this._objectIdToDisplayId = /* @__PURE__ */ new Map();
  }
  createIdForObjectId(s8) {
    let r7 = this._objectIdToDisplayId.get(s8);
    return r7 ? r7.increment() : (r7 = new t6(s3(this._getFreeId(), false)), r7.increment(), this._objectIdToDisplayId.set(s8, r7)), r7.data;
  }
  releaseIdForObjectId(e5) {
    const t8 = this._objectIdToDisplayId.get(e5);
    t8 && (t8.decrement(), t8.empty() && (this._objectIdToDisplayId.delete(e5), this._freeIds.push(t8.data)));
  }
  releaseAll() {
    for (const e5 of this._objectIdToDisplayId.values()) this._freeIds.push(e5.data);
    this._objectIdToDisplayId.clear();
  }
  incrementGeneration() {
    this._freeIds = this._freeIds === this._freeIdsGenerationA ? this._freeIdsGenerationB : this._freeIdsGenerationA;
  }
  _getFreeId() {
    return this._freeIds.length ? this._freeIds.pop() : this._idCounter++;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/FeatureStoreQueryAdapter.js
var t7 = class {
  getObjectId(t8) {
    return t8.getObjectId();
  }
  getAttributes(t8) {
    return t8.readAttributes();
  }
  getAttribute(t8, e5) {
    return t8.readAttribute(e5);
  }
  getAttributeAsTimestamp(t8, e5) {
    return t8.readAttributeAsTimestamp(e5);
  }
  cloneWithGeometry(t8, e5) {
    return t8;
  }
  getGeometry(t8) {
    return t8.readGeometryWorldSpace();
  }
  getCentroid(t8, e5) {
    return t8.readCentroidForDisplay();
  }
};
t7.Shared = new t7();

// ../../../node_modules/@arcgis/core/views/2d/layers/features/support/FeatureFilter.js
var d4 = 1;
var m3 = 2;
var p3 = class _p {
  constructor(t8) {
    this._geometryBounds = u(), this._idToVisibility = /* @__PURE__ */ new Map(), this._serviceInfo = t8;
  }
  static create(t8) {
    return __async(this, null, function* () {
      const e5 = new _p(t8);
      return yield e5.update(t8.filterJSON, t8.spatialReference), e5;
    });
  }
  get hash() {
    return this._hash;
  }
  check(t8) {
    return this._applyFilter(t8);
  }
  clear() {
    const t8 = this._resetAllHiddenIds();
    return this.update(), {
      show: t8,
      hide: []
    };
  }
  invalidate() {
    this._idToVisibility.forEach((t8, e5) => {
      this._idToVisibility.set(e5, 0);
    });
  }
  setKnownIds(t8) {
    for (const e5 of t8) this._idToVisibility.set(e5, d4);
  }
  setTrue(t8) {
    const e5 = [], i3 = [], s8 = new Set(t8);
    return this._idToVisibility.forEach((t9, r7) => {
      const o4 = !!(this._idToVisibility.get(r7) & d4), a7 = s8.has(r7);
      !o4 && a7 ? e5.push(r7) : o4 && !a7 && i3.push(r7), this._idToVisibility.set(r7, a7 ? d4 | m3 : 0);
    }), {
      show: e5,
      hide: i3
    };
  }
  createQuery() {
    const {
      geometry: t8,
      spatialRel: e5,
      where: i3,
      timeExtent: s8,
      objectIds: r7
    } = this;
    return b.fromJSON({
      geometry: t8,
      spatialRel: e5,
      where: i3,
      timeExtent: s8,
      objectIds: r7
    });
  }
  update(t8, e5) {
    return __async(this, null, function* () {
      this._hash = JSON.stringify(t8);
      const i3 = yield j(t8, null, e5);
      yield Promise.all([this._setGeometryFilter(i3), this._setIdFilter(i3), this._setAttributeFilter(i3), this._setTimeFilter(i3)]);
    });
  }
  _setAttributeFilter(t8) {
    return __async(this, null, function* () {
      if (!t8?.where) return this._clause = null, void (this.where = null);
      this._clause = yield o3(t8.where, this._serviceInfo.fieldsIndex), this.where = t8.where;
    });
  }
  _setIdFilter(t8) {
    this._idsToShow = t8?.objectIds && new Set(t8.objectIds), this._idsToHide = t8?.hiddenIds && new Set(t8.hiddenIds), this.objectIds = t8?.objectIds;
  }
  _setGeometryFilter(t8) {
    return __async(this, null, function* () {
      if (!t8?.geometry) return this._spatialQueryOperator = null, this.geometry = null, void (this.spatialRel = null);
      const e5 = t8.geometry, i3 = t8.spatialRel || "esriSpatialRelIntersects", r7 = yield v(i3, e5, this._serviceInfo.geometryType, this._serviceInfo.hasZ, this._serviceInfo.hasM);
      a(this._geometryBounds, e5), this._spatialQueryOperator = r7, this.geometry = e5, this.spatialRel = i3;
    });
  }
  _setTimeFilter(i3) {
    if (this.timeExtent = this._timeOperator = null, i3?.timeExtent) if (this._serviceInfo.timeInfo) this.timeExtent = i3.timeExtent, this._timeOperator = t(this._serviceInfo.timeInfo, i3.timeExtent, t7.Shared);
    else {
      const s8 = new s("feature-layer-view:time-filter-not-available", "Unable to apply time filter, as layer doesn't have time metadata.", i3.timeExtent);
      n.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(s8);
    }
  }
  _applyFilter(t8) {
    return this._filterByGeometry(t8) && this._filterById(t8) && this._filterByTime(t8) && this._filterByExpression(t8);
  }
  _filterByExpression(t8) {
    return !this.where || this._clause(t8);
  }
  _filterById(t8) {
    return (!this._idsToHide?.size || !this._idsToHide.has(t8.getObjectId())) && (!this._idsToShow?.size || this._idsToShow.has(t8.getObjectId()));
  }
  _filterByGeometry(t8) {
    if (!this.geometry) return true;
    const e5 = t8.readGeometryWorldSpace();
    return !!e5 && this._spatialQueryOperator(e5);
  }
  _filterByTime(t8) {
    return null == this._timeOperator || this._timeOperator(t8);
  }
  _resetAllHiddenIds() {
    const t8 = [];
    return this._idToVisibility.forEach((e5, i3) => {
      e5 & d4 || (this._idToVisibility.set(i3, d4), t8.push(i3));
    }), t8;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/support/AttributeStore.js
function g2(t8, e5) {
  if (!t8 || !e5) return t8;
  switch (e5) {
    case "radius":
    case "distance":
      return 2 * t8;
    case "diameter":
    case "width":
      return t8;
    case "area":
      return Math.sqrt(t8);
  }
  return t8;
}
var f3 = () => n.getLogger("esri.views.layers.2d.features.support.AttributeStore");
var _ = n10(l5, f3());
var y2 = {
  sharedArrayBuffer: has("esri-shared-array-buffer"),
  atomics: has("esri-atomics")
};
var m4 = class {
  constructor(t8, e5, i3) {
    this.size = 0, this.texelSize = 4, this.dirtyStart = 0, this.dirtyEnd = 0;
    const {
      pixelType: s8,
      layout: r7,
      textureOnly: n11
    } = e5;
    this.textureOnly = n11 || false, this.pixelType = s8, this.layout = r7, this._resetRange(), this.size = t8, this.isLocal = i3, n11 || (this.data = this._initData(s8, t8));
  }
  get buffer() {
    return this.data?.buffer;
  }
  unsetComponentAllTexels(t8, e5) {
    const i3 = this.data;
    for (let s8 = 0; s8 < this.size * this.size; s8++) i3[s8 * this.texelSize + t8] &= ~e5;
    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }
  setComponentAllTexels(t8, e5) {
    const i3 = this.data;
    for (let s8 = 0; s8 < this.size * this.size; s8++) i3[s8 * this.texelSize + t8] |= 255 & e5;
    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }
  setComponent(t8, e5, i3) {
    const s8 = this.data;
    for (const r7 of i3) s8[r7 * this.texelSize + t8] |= e5, this.dirtyStart = Math.min(this.dirtyStart, r7), this.dirtyEnd = Math.max(this.dirtyEnd, r7);
  }
  setComponentTexel(t8, e5, i3) {
    this.data[i3 * this.texelSize + t8] |= e5, this.dirtyStart = Math.min(this.dirtyStart, i3), this.dirtyEnd = Math.max(this.dirtyEnd, i3);
  }
  unsetComponentTexel(t8, e5, i3) {
    this.data[i3 * this.texelSize + t8] &= ~e5, this.dirtyStart = Math.min(this.dirtyStart, i3), this.dirtyEnd = Math.max(this.dirtyEnd, i3);
  }
  getData(t8, e5) {
    const i3 = f2(t8);
    return this.data[i3 * this.texelSize + e5];
  }
  setData(t8, e5, i3) {
    const s8 = f2(t8), r7 = 1 << e5;
    this.layout & r7 ? null != this.data && (this.data[s8 * this.texelSize + e5] = i3, this.dirtyStart = Math.min(this.dirtyStart, s8), this.dirtyEnd = Math.max(this.dirtyEnd, s8)) : f3().error("mapview-attributes-store", "Tried to set a value for a texel's readonly component");
  }
  expand(t8) {
    if (this.size = t8, !this.textureOnly) {
      const e5 = this._initData(this.pixelType, t8), i3 = this.data;
      e5.set(i3), this.data = e5;
    }
  }
  toMessage() {
    const t8 = this.dirtyStart, e5 = this.dirtyEnd, i3 = this.texelSize;
    if (t8 > e5) return null;
    this._resetRange();
    const s8 = !this.isLocal, r7 = this.pixelType, n11 = this.layout, a7 = this.data;
    return {
      start: t8,
      end: e5,
      data: s8 && a7.slice(t8 * i3, (e5 + 1) * i3) || null,
      pixelType: r7,
      layout: n11
    };
  }
  _initData(t8, e5) {
    const i3 = ArrayBuffer, s8 = d3(t8), r7 = new s8(new i3(e5 * e5 * 4 * s8.BYTES_PER_ELEMENT));
    for (let n11 = 0; n11 < r7.length; n11 += 4) r7[n11 + 1] = 255;
    return r7;
  }
  _resetRange() {
    this.dirtyStart = 2147483647, this.dirtyEnd = 0;
  }
};
var b2 = class {
  constructor(t8) {
    this._client = t8, this._filters = [], this._blocks = new Array(), this._attributeComputeInfo = null, this._abortController = new AbortController(), this._size = yt, this._idsToHighlight = /* @__PURE__ */ new Map(), this._referencesScale = false, this._referencesGeometry = false, this._initialized = false, this.version = 0, this._idGenerator = new s7(), this._epoch = 1;
  }
  destroy() {
    this._abortController.abort();
  }
  _initialize() {
    if (null != this._blockDescriptors) return;
    const t8 = U.FLOAT;
    _(`Creating AttributeStore ${y2.sharedArrayBuffer ? "with" : "without"} shared memory`), this._blockDescriptors = [{
      pixelType: U.UNSIGNED_BYTE,
      layout: 1
    }, {
      pixelType: U.UNSIGNED_BYTE,
      layout: 15,
      textureOnly: true
    }, {
      pixelType: U.UNSIGNED_BYTE,
      layout: 15,
      textureOnly: true
    }, {
      pixelType: t8,
      layout: 15
    }, {
      pixelType: t8,
      layout: 15
    }, {
      pixelType: t8,
      layout: 15
    }, {
      pixelType: t8,
      layout: 15
    }], this._blocks = this._blockDescriptors.map(() => null);
  }
  get referencesScale() {
    return this._referencesScale;
  }
  get referencesGeometry() {
    return this._referencesGeometry;
  }
  get hasHighlight() {
    return this._idsToHighlight.size > 0;
  }
  createDisplayIdForObjectId(t8) {
    return this._idGenerator.createIdForObjectId(t8);
  }
  releaseDisplayIdForObjectId(t8) {
    return this._idGenerator.releaseIdForObjectId(t8);
  }
  incrementDisplayIdGeneration() {
    this._idGenerator.incrementGeneration();
  }
  releaseAllIds() {
    this._idGenerator.releaseAll();
  }
  update(t8, e5, s8, r7, n11 = 0) {
    return __async(this, null, function* () {
      const a7 = d2(this._schema, t8);
      if (this.version = n11, a7 && (has("esri-2d-update-debug") && console.debug(`Version[${n11}] AttributeStore.update`, {
        changed: a7
      }), this._schema = t8, this._attributeComputeInfo = null, this._initialize(), null != t8)) if (s8 && (this._filters = yield Promise.all(t8.filters.map((t9) => t9 ? p3.create({
        geometryType: s8.geometryType,
        hasM: false,
        hasZ: false,
        timeInfo: s8.timeInfo,
        fieldsIndex: s8.fieldsIndex,
        spatialReference: r7 ?? s8.spatialReference,
        filterJSON: t9
      }) : null))), "subtype" !== t8.type) this._attributeComputeInfo = {
        isSubtype: false,
        map: /* @__PURE__ */ new Map()
      }, yield Promise.all(t8.bindings.map((t9) => __async(this, null, function* () {
        const i3 = yield this._bind(e5, t9);
        this._referencesGeometry = this._referencesGeometry || (i3?.referencesGeometry() ?? false), this._referencesScale = this._referencesScale || (i3?.referencesScale() ?? false);
      })));
      else {
        this._attributeComputeInfo = {
          isSubtype: true,
          subtypeField: t8.subtypeField,
          map: /* @__PURE__ */ new Map()
        }, this._referencesScale = false, this._referencesGeometry = false;
        for (const i3 in t8.bindings) {
          const s9 = t8.bindings[i3];
          yield Promise.all(s9.map((t9) => __async(this, null, function* () {
            const s10 = yield this._bind(e5, t9, parseInt(i3, 10));
            this._referencesGeometry = this._referencesGeometry || (s10?.referencesGeometry() ?? false), this._referencesScale = this._referencesScale || (s10?.referencesScale() ?? false);
          })));
        }
      }
    });
  }
  setHighlight(t8, e5) {
    const i3 = this._getBlock(0);
    i3.unsetComponentAllTexels(0, (1 << l3.length) - 1);
    for (const {
      displayId: s8,
      highlightFlags: r7
    } of t8) {
      if (null == s8) continue;
      const t9 = f2(s8);
      i3.setComponent(0, r7, [t9]);
    }
    this._idsToHighlight.clear();
    for (const {
      objectId: s8,
      highlightFlags: r7
    } of t8) this._idsToHighlight.set(s8, r7);
    for (const {
      objectId: s8,
      highlightFlags: r7
    } of e5) this._idsToHighlight.set(s8, r7);
  }
  setData(t8, e5, i3, s8) {
    const r7 = f2(t8);
    this._ensureSizeForTexel(r7), this._getBlock(e5).setData(t8, i3, s8);
  }
  getData(t8, e5, i3) {
    return this._getBlock(e5).getData(t8, i3);
  }
  getHighlightFlags(t8) {
    return this._idsToHighlight.get(t8) || 0;
  }
  unsetAttributeData(t8) {
    const e5 = f2(t8);
    this._getBlock(0).setData(e5, 0, 0);
  }
  setAttributeData(t8, e5, i3) {
    const s8 = f2(t8);
    this._ensureSizeForTexel(s8), this._getBlock(0).setData(s8, 0, this.getFilterFlags(e5));
    const r7 = this._attributeComputeInfo, o4 = 1, h = 4;
    let c3 = null;
    r7 && (c3 = r7.isSubtype ? r7.map.get(e5.readAttribute(r7.subtypeField)) : r7.map, c3?.size && c3.forEach((t9, r8) => {
      const a7 = r8 * o4 % h, c4 = Math.floor(r8 * o4 / h), d5 = this._getBlock(c4 + L.VV);
      let u2 = t9.field?.read(e5, i3);
      t9.valueRepresentation && (u2 = g2(u2, t9.valueRepresentation));
      (null === u2 || isNaN(u2) || u2 === 1 / 0 || u2 === -1 / 0) && (u2 = k), d5.setData(s8, a7, u2);
    }));
  }
  get epoch() {
    return this._epoch;
  }
  sendUpdates() {
    const t8 = this._blocks.map((t9) => null != t9 ? t9.toMessage() : null), e5 = this._getInitArgs();
    has("esri-2d-log-updating") && console.log("AttributeStore: _doSendUpdate.start"), this._client.update({
      initArgs: e5,
      blockData: t8,
      version: this.version,
      sendUpdateEpoch: this._epoch
    }), this._epoch += 1, has("esri-2d-log-updating") && console.log("AttributeStore: _doSendUpdate.end");
  }
  _ensureSizeForTexel(t8) {
    for (; t8 >= this._size * this._size; ) if (this._expand()) return;
  }
  _bind(t8, e5, i3) {
    return __async(this, null, function* () {
      const s8 = yield t8.createComputedField(e5), {
        valueRepresentation: r7
      } = e5, n11 = this._attributeComputeInfo;
      if (n11.isSubtype) {
        const t9 = n11.map.get(i3) ?? /* @__PURE__ */ new Map();
        t9.set(e5.binding, {
          field: s8,
          valueRepresentation: r7
        }), n11.map.set(i3, t9);
      } else n11.map.set(e5.binding, {
        field: s8,
        valueRepresentation: r7
      });
      return s8;
    });
  }
  _getInitArgs() {
    return this._initialized ? null : (this._initialized = true, this._getBlock(L.Animation), this._getBlock(L.GPGPU), {
      blockSize: this._size,
      blockDescriptors: this._blocks.map((t8) => null != t8 ? {
        textureOnly: t8.textureOnly,
        buffer: t8.buffer,
        pixelType: t8.pixelType
      } : null)
    });
  }
  _getBlock(t8) {
    const e5 = this._blocks[t8];
    if (null != e5) return e5;
    _(`Initializing AttributeBlock at index ${t8}`);
    const i3 = new m4(this._size, this._blockDescriptors[t8], this._client.isLocal);
    return this._blocks[t8] = i3, this._initialized = false, i3;
  }
  _expand() {
    if (this._size < this._schema.capabilities.maxTextureSize) {
      const t8 = this._size <<= 1;
      _("Expanding block size to", t8, this._blocks);
      for (const e5 of this._blocks) e5?.expand(t8);
      return this._initialized = false, this._size = t8, 0;
    }
    return f3().error(new s("mapview-limitations", "Maximum number of onscreen features exceeded.")), -1;
  }
  isVisible(t8) {
    return !!(this._getBlock(0).getData(t8, 0) & 1 << l3.length);
  }
  getFilterFlags(t8) {
    let e5 = 0;
    for (let s8 = 0; s8 < this._filters.length; s8++) {
      const i4 = !!(1 << s8), r7 = this._filters[s8];
      e5 |= (!i4 || null == r7 || r7.check(t8) ? 1 : 0) << s8;
    }
    let i3 = 0;
    if (this._idsToHighlight.size) {
      const e6 = t8.getObjectId();
      i3 = this.getHighlightFlags(e6);
    }
    return e5 << l3.length | i3;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetCache.js
var a6 = class {
  constructor(a7) {
    this._valid = t5.create(a7), this._data = new Array(a7);
  }
  has(t8) {
    return this._valid.has(t8);
  }
  set(t8, a7) {
    this._valid.set(t8), this._data[t8] = a7;
  }
  get(t8) {
    return this._data[t8];
  }
};

// ../../../node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetReader.js
var g3 = has("featurelayer-simplify-thresholds") ?? [0.5, 0.5, 0.5, 0.5];
var _2 = g3[0];
var x = g3[1];
var b3 = g3[2];
var T = g3[3];
var I = has("featurelayer-simplify-payload-size-factors") ?? [1, 2, 4];
var A = I[0];
var D = I[1];
var F = I[2];
var S = has("featurelayer-simplify-mobile-factor") ?? 2;
var j2 = has("esri-mobile");
var B = 4294967295;
function C(e5, t8, r7) {
  if (!(e5.length > t8)) for (; e5.length <= t8; ) e5.push(r7);
}
var M2 = class {
  constructor(e5) {
    this.metadata = e5, this.type = "FeatureSetReader", this._deleted = null, this._joined = [], this._objectIdToIndex = null, this._boundsBuffer = [], this._caches = /* @__PURE__ */ new Map(), this.arcadeDeclaredClass = "esri.arcade.Feature", this._contextTimeZone = null;
  }
  get isEmpty() {
    return null != this._deleted && this._deleted.countSet() === this.getSize();
  }
  getAreaSimplificationThreshold(e5, t8) {
    let r7 = 1;
    const s8 = j2 ? S : 1;
    t8 > 4e6 ? r7 = F * s8 : t8 > 1e6 ? r7 = D * s8 : t8 > 5e5 ? r7 = A * s8 : t8 > 1e5 && (r7 = s8);
    let i3 = 0;
    return e5 > 4e3 ? i3 = T * r7 : e5 > 2e3 ? i3 = b3 * r7 : e5 > 100 ? i3 = x : e5 > 15 && (i3 = _2), i3;
  }
  parseTimestampOffset(e5) {
    return e5;
  }
  getBounds(e5) {
    if (C(this._boundsBuffer, 4 * this.getIndex() + 4, 0), this.getBoundsXMin() === B) return false;
    if (0 === this.getBoundsXMin()) {
      const t9 = this.readGeometryWorldSpace();
      if (!t9) return this.setBoundsXMin(B), false;
      let r8 = 1 / 0, s9 = 1 / 0, i4 = -1 / 0, a7 = -1 / 0;
      return t9.forEachVertex((e6, t10) => {
        r8 = Math.min(r8, e6), s9 = Math.min(s9, t10), i4 = Math.max(i4, e6), a7 = Math.max(a7, t10);
      }), this.setBoundsXMin(r8), this.setBoundsYMin(s9), this.setBoundsXMax(i4), this.setBoundsYMax(a7), d(e5, r8, s9, i4, a7), true;
    }
    const t8 = this.getBoundsXMin(), r7 = this.getBoundsYMin(), s8 = this.getBoundsXMax(), i3 = this.getBoundsYMax();
    return d(e5, t8, r7, s8, i3), true;
  }
  getBoundsXMin() {
    return this._boundsBuffer[4 * this.getIndex()];
  }
  setBoundsXMin(e5) {
    this._boundsBuffer[4 * this.getIndex()] = e5;
  }
  getBoundsYMin() {
    return this._boundsBuffer[4 * this.getIndex() + 1];
  }
  setBoundsYMin(e5) {
    this._boundsBuffer[4 * this.getIndex() + 1] = e5;
  }
  getBoundsXMax() {
    return this._boundsBuffer[4 * this.getIndex() + 2];
  }
  setBoundsXMax(e5) {
    this._boundsBuffer[4 * this.getIndex() + 2] = e5;
  }
  getBoundsYMax() {
    return this._boundsBuffer[4 * this.getIndex() + 3];
  }
  setBoundsYMax(e5) {
    this._boundsBuffer[4 * this.getIndex() + 3] = e5;
  }
  readAttributeAsTimestamp(e5) {
    const t8 = this.readAttribute(e5);
    return "string" == typeof t8 ? new Date(t8).getTime() : "number" == typeof t8 || null == t8 ? t8 : null;
  }
  readAttribute(e5, t8 = false) {
    const r7 = this._readAttribute(e5, t8);
    if (void 0 !== r7) return r7;
    for (const s8 of this._joined) {
      s8.setIndex(this.getIndex());
      const r8 = s8._readAttribute(e5, t8);
      if (void 0 !== r8) return r8;
    }
  }
  readAttributes() {
    const e5 = this._readAttributes();
    for (const t8 of this._joined) {
      t8.setIndex(this.getIndex());
      const r7 = t8._readAttributes();
      for (const t9 of Object.keys(r7)) e5[t9] = r7[t9];
    }
    return e5;
  }
  joinAttributes(e5) {
    this._joined.push(e5);
  }
  removeIds(e5) {
    if (null == this._objectIdToIndex) {
      const e6 = /* @__PURE__ */ new Map(), r8 = this.getCursor();
      for (; r8.next(); ) {
        const s8 = r8.getObjectId();
        n2(s8), e6.set(s8, r8.getIndex());
      }
      this._objectIdToIndex = e6;
    }
    const r7 = this._objectIdToIndex;
    for (const t8 of e5.values()) r7.has(t8) && this._removeAtIndex(r7.get(t8));
  }
  readOptimizedFeatureWorldSpace() {
    const e5 = this.readGeometryWorldSpace(), t8 = this.readAttributes(), r7 = this.readCentroidWorldSpace(), s8 = new e3(e5, t8, r7);
    return s8.objectId = this.getObjectId(), s8.displayId = this.getDisplayId(), s8;
  }
  readLegacyFeatureForDisplay() {
    const e5 = this.readCentroidForDisplay();
    return {
      attributes: this.readAttributes(),
      geometry: this.readLegacyGeometryForDisplay(),
      centroid: (e5 && {
        x: e5.coords[0],
        y: e5.coords[1]
      }) ?? null
    };
  }
  readLegacyFeatureWorldSpace() {
    const e5 = this.readCentroidWorldSpace();
    return {
      attributes: this.readAttributes(),
      geometry: this._readLegacyGeometryWorldSpace(),
      centroid: (e5 && {
        x: e5.coords[0],
        y: e5.coords[1]
      }) ?? null
    };
  }
  readLegacyGeometryForDisplay() {
    const e5 = this.readGeometryForDisplay();
    return rt(e5, this.geometryType, false, false);
  }
  readXForDisplay() {
    return this._readX();
  }
  readYForDisplay() {
    return this._readY();
  }
  readXWorldSpace() {
    const e5 = this._readX(), t8 = this.getInTransform();
    return null == t8 ? e5 : e5 * t8.scale[0] + t8.translate[0];
  }
  readYWorldSpace() {
    const e5 = this._readY(), t8 = this.getInTransform();
    return null == t8 ? e5 : t8.translate[1] - e5 * t8.scale[1];
  }
  readGeometryForDisplay() {
    const e5 = this._readGeometryDeltaDecoded(true);
    if (!e5) {
      const e6 = this._createGeometryFromServerCentroid();
      return e6 ? e6.deltaDecode() : null;
    }
    return e5;
  }
  readGeometryWorldSpace() {
    let e5 = this._readGeometry();
    if (e5 || (e5 = this._createGeometryFromServerCentroid()), !e5) return null;
    const t8 = e5.clone(), r7 = this.getInTransform();
    return null != r7 && pt(t8, t8, this.hasZ, this.hasM, r7), t8;
  }
  readCentroidForDisplay() {
    const e5 = this.readGeometryForDisplay();
    return e5 ? this._computeDisplayCentroid(e5) : this._readServerCentroid();
  }
  readCentroidWorldSpace() {
    const e5 = this.readGeometryForDisplay(), t8 = e5 ? this._computeDisplayCentroid(e5) : this._readServerCentroid();
    if (!t8) return null;
    const r7 = t8.clone(), s8 = this.getInTransform();
    return null != s8 && pt(r7, r7, this.hasZ, this.hasM, s8), r7;
  }
  setCache(e5) {
    let t8 = this._caches.get(e5);
    null == t8 && (t8 = new a6(this.getSize()), this._caches.set(e5, t8)), this._activeCache = t8;
  }
  setCachedValue(e5) {
    this._activeCache.set(this.getIndex(), e5);
  }
  hasCachedValue() {
    return this._activeCache.has(this.getIndex());
  }
  getCachedValue() {
    return this._activeCache.get(this.getIndex());
  }
  _readGeometryDeltaDecoded(e5) {
    const t8 = this._readGeometry(e5);
    return "esriGeometryPoint" !== this.geometryType && t8 && this.getInTransform() ? t8.deltaDecode() : t8;
  }
  get contextTimeZone() {
    return this._contextTimeZone;
  }
  set contextTimeZone(e5) {
    this._contextTimeZone = e5;
  }
  readArcadeFeature() {
    return this;
  }
  hasField(e5) {
    return this.fields.has(e5) || this._joined.some((t8) => t8.hasField(e5));
  }
  geometry() {
    const e5 = this.readGeometryWorldSpace(), t8 = rt(e5, this.geometryType, this.hasZ, this.hasM), r7 = y(t8);
    if (r7) {
      if (!this.metadata.spatialReference) throw new Error("InternalError: Expected spatial reference to be defined");
      r7.spatialReference = this.metadata.spatialReference;
    }
    return r7;
  }
  autocastArcadeDate(t8, r7) {
    return r7 && r7 instanceof Date ? this.isUnknownDateTimeField(t8) ? m.unknownDateJSToArcadeDate(r7) : m.dateJSAndZoneToArcadeDate(r7, this.contextTimeZone ?? o) : r7;
  }
  isUnknownDateTimeField(e5) {
    return this.metadata.fieldsIndex.getTimeZone(e5) === r;
  }
  field(t8) {
    let i3 = this.fields.get(t8);
    if (i3) switch (i3.type) {
      case "date-only":
      case "esriFieldTypeDateOnly":
        return n3.fromReader(this.readAttribute(t8, false));
      case "time-only":
      case "esriFieldTypeTimeOnly":
        return n4.fromReader(this.readAttribute(t8, false));
      case "esriFieldTypeTimestampOffset":
      case "timestamp-offset":
        return m.fromReaderAsTimeStampOffset(this.readAttribute(t8, false));
      case "date":
      case "esriFieldTypeDate":
        return this.autocastArcadeDate(t8, this.readAttribute(t8, true));
      default:
        return this.readAttribute(t8, false);
    }
    for (const o4 of this._joined) if (o4.setIndex(this.getIndex()), i3 = o4.fields.get(t8), i3) switch (i3.type) {
      case "date-only":
      case "esriFieldTypeDateOnly":
        return n3.fromReader(o4._readAttribute(t8, false));
      case "time-only":
      case "esriFieldTypeTimeOnly":
        return n4.fromReader(o4._readAttribute(t8, false));
      case "esriFieldTypeTimestampOffset":
      case "timestamp-offset":
        return m.fromReaderAsTimeStampOffset(o4._readAttribute(t8, false));
      case "date":
      case "esriFieldTypeDate":
        return this.autocastArcadeDate(t8, o4._readAttribute(t8, true));
      default:
        return this.readAttribute(t8, false);
    }
    throw new Error(`Field ${t8} does not exist`);
  }
  setField(e5, t8) {
    throw new Error("Unable to update feature attribute values, feature is readonly");
  }
  keys() {
    return this.fields.fields.map((e5) => e5.name);
  }
  castToText(e5 = false) {
    if (!e5) return JSON.stringify(this.readLegacyFeatureForDisplay());
    const t8 = this.readLegacyFeatureForDisplay();
    if (!t8) return JSON.stringify(null);
    const r7 = {
      geometry: t8.geometry,
      attributes: __spreadValues({}, t8.attributes ?? {})
    };
    for (const s8 in r7.attributes) {
      const e6 = r7.attributes[s8];
      e6 instanceof Date && (r7.attributes[s8] = e6.getTime());
    }
    return JSON.stringify(r7);
  }
  gdbVersion() {
    return null;
  }
  fullSchema() {
    return this.metadata.arcadeSchema;
  }
  castAsJson(e5 = null) {
    return {
      attributes: this._readAttributes(),
      geometry: true === e5?.keepGeometryType ? this.geometry() : this.geometry()?.toJSON() ?? null
    };
  }
  castAsJsonAsync(e5 = null, t8 = null) {
    return Promise.resolve(this.castAsJson(t8));
  }
  _getExists() {
    return null == this._deleted || !this._deleted.has(this.getIndex());
  }
  _computeDisplayCentroid(e5) {
    if (null == this.getInTransform()) return n5(new e2(), e5, this.hasM, this.hasZ);
    const t8 = a2.fromOptimized(e5, this.geometryType);
    t8.yFactor *= -1;
    const r7 = l2(t8);
    return r7 ? (r7[1] *= -1, new e2([], r7)) : null;
  }
  copyInto(e5) {
    e5._joined = this._joined, e5._deleted = this._deleted, e5._objectIdToIndex = this._objectIdToIndex, e5._boundsBuffer = this._boundsBuffer, e5._activeCache = this._activeCache, e5._caches = this._caches, e5._contextTimeZone = this._contextTimeZone;
  }
  _readLegacyGeometryWorldSpace() {
    const e5 = this.readGeometryWorldSpace();
    return rt(e5, this.geometryType, false, false);
  }
  _createGeometryFromServerCentroid() {
    const e5 = this._readServerCentroid();
    if (!e5) return null;
    const [t8, r7] = e5.coords;
    return this._createQuantizedExtrudedGeometry(t8, r7);
  }
  _createQuantizedExtrudedGeometry(e5, t8) {
    return "esriGeometryPolyline" === this.geometryType ? this._createQuantizedExtrudedLine(e5, t8) : this._createQuantizedExtrudedQuad(e5, t8);
  }
  _createQuantizedExtrudedQuad(e5, t8) {
    return new e2([5], [e5 - 1, t8, 1, -1, 1, 1, -1, 1, -1, -1]);
  }
  _createQuantizedExtrudedLine(e5, t8) {
    return new e2([2], [e5 - 1, t8 + 1, 1, -1]);
  }
  _removeAtIndex(e5) {
    null == this._deleted && (this._deleted = t5.create(this.getSize())), this._deleted.set(e5);
  }
};

export {
  n7 as n,
  s5 as s,
  s6 as s2,
  n8 as n2,
  t5 as t,
  p2 as p,
  t7 as t2,
  p3 as p2,
  i2 as i,
  l4 as l,
  a6 as a,
  M2 as M,
  b2 as b
};
//# sourceMappingURL=chunk-SFPOKBWH.js.map
