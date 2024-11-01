import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e
} from "./chunk-UC4DX4SE.js";
import {
  s
} from "./chunk-LCPLUSDH.js";
import {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  L,
  M,
  O,
  S,
  T,
  U,
  V,
  a,
  b,
  c,
  d,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  o,
  p,
  q,
  u,
  v,
  w,
  x,
  y,
  z
} from "./chunk-DLWZ3HVT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js
var D2 = class _D {
  constructor(e2, t) {
    this.layout = e2, this.buffer = "number" == typeof t ? new ArrayBuffer(t * e2.stride) : t;
    for (const s2 of e2.fields.keys()) {
      const t2 = e2.fields.get(s2);
      this[s2] = new t2.constructor(this.buffer, t2.offset, this.stride);
    }
  }
  get stride() {
    return this.layout.stride;
  }
  get count() {
    return this.buffer.byteLength / this.stride;
  }
  get byteLength() {
    return this.buffer.byteLength;
  }
  getField(e2, t) {
    const s2 = this[e2];
    return s2 && s2.elementCount === t.ElementCount && s2.elementType === t.ElementType ? s2 : null;
  }
  slice(e2, t) {
    return new _D(this.layout, this.buffer.slice(e2 * this.stride, t * this.stride));
  }
  copyFrom(e2, t = 0, s2 = 0, i2 = e2.count) {
    const r = this.stride;
    if (r % 4 == 0) {
      const n = new Uint32Array(e2.buffer, t * r, i2 * r / 4);
      new Uint32Array(this.buffer, s2 * r, i2 * r / 4).set(n);
    } else {
      const n = new Uint8Array(e2.buffer, t * r, i2 * r);
      new Uint8Array(this.buffer, s2 * r, i2 * r).set(n);
    }
    return this;
  }
  get usedMemory() {
    return this.byteLength;
  }
  dispose() {
  }
};
var G2 = class _G {
  constructor(e2 = null) {
    this._stride = 0, this._lastAligned = 0, this._fields = /* @__PURE__ */ new Map(), e2 && (this._stride = e2.stride, e2.fields.forEach((e3) => this._fields.set(e3[0], __spreadProps(__spreadValues({}, e3[1]), {
      constructor: N(e3[1].constructor)
    }))));
  }
  freeze() {
    return this;
  }
  vec2f(t, s2) {
    return this._appendField(t, u, s2), this;
  }
  vec2f64(e2, s2) {
    return this._appendField(e2, m, s2), this;
  }
  vec3f(e2, t) {
    return this._appendField(e2, i, t), this;
  }
  vec3f64(e2, t) {
    return this._appendField(e2, T, t), this;
  }
  vec4f(e2, t) {
    return this._appendField(e2, c, t), this;
  }
  vec4f64(e2, t) {
    return this._appendField(e2, h, t), this;
  }
  mat3f(e2, t) {
    return this._appendField(e2, l, t), this;
  }
  mat3f64(e2, t) {
    return this._appendField(e2, a, t), this;
  }
  mat4f(e2, t) {
    return this._appendField(e2, p, t), this;
  }
  mat4f64(e2, t) {
    return this._appendField(e2, b, t), this;
  }
  vec4u8(e2, t) {
    return this._appendField(e2, x, t), this;
  }
  f32(e2, t) {
    return this._appendField(e2, y, t), this;
  }
  f64(e2, t) {
    return this._appendField(e2, o, t), this;
  }
  u8(e2, t) {
    return this._appendField(e2, d, t), this;
  }
  u16(e2, t) {
    return this._appendField(e2, g, t), this;
  }
  i8(e2, t) {
    return this._appendField(e2, j, t), this;
  }
  vec2i8(e2, t) {
    return this._appendField(e2, V, t), this;
  }
  vec2i16(e2, t) {
    return this._appendField(e2, q, t), this;
  }
  vec2u8(e2, t) {
    return this._appendField(e2, A, t), this;
  }
  vec4u16(e2, t) {
    return this._appendField(e2, L, t), this;
  }
  u32(e2, t) {
    return this._appendField(e2, B, t), this;
  }
  _appendField(e2, t, s2) {
    if (this._fields.has(e2)) return void s(false, `${e2} already added to vertex buffer layout`);
    const i2 = t.ElementCount * e(t.ElementType), r = this._stride;
    this._stride += i2, this._fields.set(e2, {
      size: i2,
      constructor: t,
      offset: r,
      optional: s2
    });
  }
  createBuffer(e2) {
    return new D2(this, e2);
  }
  createView(e2) {
    return new D2(this, e2);
  }
  clone() {
    const e2 = new _G();
    return e2._stride = this._stride, e2._fields = /* @__PURE__ */ new Map(), this._fields.forEach((t, s2) => e2._fields.set(s2, t)), e2.BufferType = this.BufferType, e2;
  }
  get stride() {
    if (this._lastAligned !== this._fields.size) {
      let e2 = 1;
      this._fields.forEach((t) => e2 = Math.max(e2, e(t.constructor.ElementType))), this._stride = Math.floor((this._stride + e2 - 1) / e2) * e2, this._lastAligned = this._fields.size;
    }
    return this._stride;
  }
  get fields() {
    return this._fields;
  }
};
function H2() {
  return new G2();
}
var I2 = class {
  constructor(e2) {
    this.fields = new Array(), e2.fields.forEach((e3, t) => {
      const s2 = __spreadProps(__spreadValues({}, e3), {
        constructor: K(e3.constructor)
      });
      this.fields.push([t, s2]);
    }), this.stride = e2.stride;
  }
};
var J = [y, u, i, c, l, p, o, m, T, h, a, b, d, A, O, x, g, w, E, L, B, F, I, U, j, V, M, S, k, q, v, z, C, D, G, H];
function K(e2) {
  return `${e2.ElementType}_${e2.ElementCount}`;
}
function N(e2) {
  return O2.get(e2);
}
var O2 = /* @__PURE__ */ new Map();
J.forEach((e2) => O2.set(K(e2), e2));

export {
  G2 as G,
  H2 as H,
  I2 as I
};
//# sourceMappingURL=chunk-GHPF24X4.js.map
