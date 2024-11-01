import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e
} from "./chunk-OR2FKGUM.js";
import {
  has
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/core/pbf.js
var e2;
!function(t) {
  t[t.varint = 0] = "varint", t[t.fixed64 = 1] = "fixed64", t[t.delimited = 2] = "delimited", t[t.fixed32 = 5] = "fixed32", t[t.unknown = 99] = "unknown";
}(e2 || (e2 = {}));
var i = 4294967296;
var s = new TextDecoder("utf-8");
var r = has("safari") || has("ios") ? 6 : has("ff") ? 12 : 32;
var n = class _n {
  constructor(t, i2, s2 = 0, r2 = t ? t.byteLength : 0) {
    this._tag = 0, this._dataType = e2.unknown, this._init(t, i2, s2, r2);
  }
  _init(t, e3, i2, s2) {
    this._data = t, this._dataView = e3, this._pos = i2, this._end = s2;
  }
  asUnsafe() {
    return this;
  }
  clone() {
    return new _n(this._data, this._dataView, this._pos, this._end);
  }
  pos() {
    return this._pos;
  }
  move(t) {
    this._pos = t;
  }
  nextTag(t) {
    for (; ; ) {
      if (this._pos === this._end) return false;
      const e3 = this._decodeVarint();
      if (this._tag = e3 >> 3, this._dataType = 7 & e3, !t || t === this._tag) break;
      this.skip();
    }
    return true;
  }
  next() {
    if (this._pos === this._end) return false;
    const t = this._decodeVarint();
    return this._tag = t >> 3, this._dataType = 7 & t, true;
  }
  empty() {
    return this._pos >= this._end;
  }
  tag() {
    return this._tag;
  }
  getInt32() {
    return this._decodeVarint();
  }
  getInt64() {
    return this._decodeVarint();
  }
  getUInt32() {
    let t = 4294967295;
    if (t = (127 & this._data[this._pos]) >>> 0, this._data[this._pos++] < 128) return t;
    if (t = (t | (127 & this._data[this._pos]) << 7) >>> 0, this._data[this._pos++] < 128) return t;
    if (t = (t | (127 & this._data[this._pos]) << 14) >>> 0, this._data[this._pos++] < 128) return t;
    if (t = (t | (127 & this._data[this._pos]) << 21) >>> 0, this._data[this._pos++] < 128) return t;
    if (t = (t | (15 & this._data[this._pos]) << 28) >>> 0, this._data[this._pos++] < 128) return t;
    throw new Error("Varint overflow");
  }
  getUInt64() {
    return this._decodeVarint();
  }
  getSInt32() {
    const t = this.getUInt32();
    return t >>> 1 ^ -(1 & t);
  }
  getSInt64() {
    return this._decodeSVarint();
  }
  getBool() {
    const t = 0 !== this._data[this._pos];
    return this._skip(1), t;
  }
  getEnum() {
    return this._decodeVarint();
  }
  getFixed64() {
    const t = this._dataView, e3 = this._pos, s2 = t.getUint32(e3, true) + t.getUint32(e3 + 4, true) * i;
    return this._skip(8), s2;
  }
  getSFixed64() {
    const t = this._dataView, e3 = this._pos, s2 = t.getUint32(e3, true) + t.getInt32(e3 + 4, true) * i;
    return this._skip(8), s2;
  }
  getDouble() {
    const t = this._dataView.getFloat64(this._pos, true);
    return this._skip(8), t;
  }
  getFixed32() {
    const t = this._dataView.getUint32(this._pos, true);
    return this._skip(4), t;
  }
  getSFixed32() {
    const t = this._dataView.getInt32(this._pos, true);
    return this._skip(4), t;
  }
  getFloat() {
    const t = this._dataView.getFloat32(this._pos, true);
    return this._skip(4), t;
  }
  getString() {
    const t = this._getLength(), e3 = this._pos, i2 = this._toString(this._data, e3, e3 + t);
    return this._skip(t), i2;
  }
  getBytes() {
    const t = this._getLength(), e3 = this._pos, i2 = this._toBytes(this._data, e3, e3 + t);
    return this._skip(t), i2;
  }
  getLength() {
    return this._getLengthUnsafe();
  }
  processMessageWithArgs(t, e3, i2, s2) {
    const r2 = this.getMessage(), n2 = t(r2, e3, i2, s2);
    return r2.release(), n2;
  }
  processMessage(t) {
    const e3 = this.getMessage(), i2 = t(e3);
    return e3.release(), i2;
  }
  getMessage() {
    const t = this._getLength(), e3 = _n.pool.acquire();
    return e3._init(this._data, this._dataView, this._pos, this._pos + t), this._skip(t), e3;
  }
  release() {
    _n.pool.release(this);
  }
  dataType() {
    return this._dataType;
  }
  skip() {
    switch (this._dataType) {
      case e2.varint:
        this._decodeVarint();
        break;
      case e2.fixed64:
        this._skip(8);
        break;
      case e2.delimited:
        this._skip(this._getLength());
        break;
      case e2.fixed32:
        this._skip(4);
        break;
      default:
        throw new Error("Invalid data type!");
    }
  }
  skipLen(t) {
    this._skip(t);
  }
  _skip(t) {
    if (this._pos + t > this._end) throw new Error("Attempt to skip past the end of buffer!");
    this._pos += t;
  }
  _decodeVarint() {
    const t = this._data;
    let e3 = this._pos, i2 = 0, s2 = 0;
    if (this._end - e3 >= 10) do {
      if (s2 = t[e3++], i2 |= 127 & s2, !(128 & s2)) break;
      if (s2 = t[e3++], i2 |= (127 & s2) << 7, !(128 & s2)) break;
      if (s2 = t[e3++], i2 |= (127 & s2) << 14, !(128 & s2)) break;
      if (s2 = t[e3++], i2 |= (127 & s2) << 21, !(128 & s2)) break;
      if (s2 = t[e3++], i2 += 268435456 * (127 & s2), !(128 & s2)) break;
      if (s2 = t[e3++], i2 += 34359738368 * (127 & s2), !(128 & s2)) break;
      if (s2 = t[e3++], i2 += 4398046511104 * (127 & s2), !(128 & s2)) break;
      if (s2 = t[e3++], i2 += 562949953421312 * (127 & s2), !(128 & s2)) break;
      if (s2 = t[e3++], i2 += 72057594037927940 * (127 & s2), !(128 & s2)) break;
      if (s2 = t[e3++], i2 += 9223372036854776e3 * (127 & s2), !(128 & s2)) break;
      throw new Error("Varint too long!");
    } while (0);
    else {
      let r2 = 1;
      for (; e3 !== this._end && (s2 = t[e3], 128 & s2); ) ++e3, i2 += (127 & s2) * r2, r2 *= 128;
      if (e3 === this._end) throw new Error("Varint overrun!");
      ++e3, i2 += s2 * r2;
    }
    return this._pos = e3, i2;
  }
  _decodeSVarint() {
    const t = this._data;
    let e3, i2 = 0, s2 = 0;
    const r2 = 1 & t[this._pos];
    if (s2 = t[this._pos++], i2 |= 127 & s2, !(128 & s2)) return r2 ? -(i2 + 1) / 2 : i2 / 2;
    if (s2 = t[this._pos++], i2 |= (127 & s2) << 7, !(128 & s2)) return r2 ? -(i2 + 1) / 2 : i2 / 2;
    if (s2 = t[this._pos++], i2 |= (127 & s2) << 14, !(128 & s2)) return r2 ? -(i2 + 1) / 2 : i2 / 2;
    if (s2 = t[this._pos++], i2 |= (127 & s2) << 21, !(128 & s2)) return r2 ? -(i2 + 1) / 2 : i2 / 2;
    if (s2 = t[this._pos++], i2 += 268435456 * (127 & s2), !(128 & s2)) return r2 ? -(i2 + 1) / 2 : i2 / 2;
    if (s2 = t[this._pos++], i2 += 34359738368 * (127 & s2), !(128 & s2)) return r2 ? -(i2 + 1) / 2 : i2 / 2;
    if (s2 = t[this._pos++], i2 += 4398046511104 * (127 & s2), !(128 & s2)) return r2 ? -(i2 + 1) / 2 : i2 / 2;
    if (e3 = BigInt(i2), s2 = t[this._pos++], e3 += 0x2000000000000n * BigInt(127 & s2), !(128 & s2)) return Number(r2 ? -(e3 + 1n) / 2n : e3 / 2n);
    if (s2 = t[this._pos++], e3 += 0x100000000000000n * BigInt(127 & s2), !(128 & s2)) return Number(r2 ? -(e3 + 1n) / 2n : e3 / 2n);
    if (s2 = t[this._pos++], e3 += 0x8000000000000000n * BigInt(127 & s2), !(128 & s2)) return Number(r2 ? -(e3 + 1n) / 2n : e3 / 2n);
    throw new Error("Varint too long!");
  }
  _getLength() {
    if (this._dataType !== e2.delimited) throw new Error("Not a delimited data type!");
    return this._decodeVarint();
  }
  _getLengthUnsafe() {
    return this.getUInt32();
  }
  _toString(t, e3, i2) {
    if ((i2 = Math.min(this._end, i2)) - e3 > r) {
      const r2 = t.subarray(e3, i2);
      return s.decode(r2);
    }
    let n2 = "", h = "";
    for (let s2 = e3; s2 < i2; ++s2) {
      const e4 = t[s2];
      128 & e4 ? h += "%" + e4.toString(16) : (n2 += decodeURIComponent(h) + String.fromCharCode(e4), h = "");
    }
    return h.length && (n2 += decodeURIComponent(h)), n2;
  }
  _toBytes(t, e3, i2) {
    return i2 = Math.min(this._end, i2), new Uint8Array(t.buffer, e3, i2 - e3);
  }
};
n.pool = new e(n, void 0, (t) => {
  t._data = null, t._dataView = null;
});

export {
  n
};
//# sourceMappingURL=chunk-4O23HCRT.js.map
