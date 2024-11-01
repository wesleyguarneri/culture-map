import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  u,
  u2
} from "./chunk-7Z4UWMRU.js";
import {
  D,
  G,
  L,
  M,
  P,
  U,
  V,
  c
} from "./chunk-KYLW5XXS.js";
import {
  s2 as s
} from "./chunk-6JFGZTLU.js";

// ../../../node_modules/@arcgis/core/views/webgl/GLObjectType.js
var e;
!function(e3) {
  e3[e3.Texture = 0] = "Texture", e3[e3.RenderBuffer = 1] = "RenderBuffer";
}(e || (e = {}));

// ../../../node_modules/@arcgis/core/views/webgl/TextureDescriptor.js
var e2 = class {
  constructor(p = 0, e3 = p) {
    this.width = p, this.height = e3, this.target = M.TEXTURE_2D, this.pixelFormat = G.RGBA, this.dataType = U.UNSIGNED_BYTE, this.samplingMode = L.LINEAR, this.wrapMode = D.REPEAT, this.maxAnisotropy = 1, this.flipped = false, this.hasMipmap = false, this.isOpaque = false, this.unpackAlignment = 4, this.preMultiplyAlpha = false, this.depth = 1, this.isImmutable = false;
  }
};
function r(t) {
  return t.width <= 0 || t.height <= 0 ? 0 : Math.round(t.width * t.height * (t.hasMipmap ? 4 / 3 : 1) * (null == t.internalFormat ? 4 : u2(t.internalFormat)));
}

// ../../../node_modules/@arcgis/core/views/webgl/ValidatedTextureDescriptor.js
var a = class _a extends e2 {
  constructor(t, a2) {
    switch (super(), this.context = t, Object.assign(this, a2), this.internalFormat) {
      case P.R16F:
      case P.R16I:
      case P.R16UI:
      case P.R32F:
      case P.R32I:
      case P.R32UI:
      case P.R8_SNORM:
      case P.R8:
      case P.R8I:
      case P.R8UI:
        this.pixelFormat = G.RED;
    }
  }
  static validate(s2, e3) {
    return new _a(s2, e3);
  }
};

// ../../../node_modules/@arcgis/core/views/webgl/Texture.js
var _ = 4;
var c2 = class l {
  constructor(e3, r2 = null, s2 = null) {
    if (this.type = e.Texture, this._glName = null, this._samplingModeDirty = false, this._wrapModeDirty = false, this._wasImmutablyAllocated = false, "context" in e3) this._descriptor = e3, s2 = r2;
    else {
      const i = a.validate(e3, r2);
      if (!i) throw new s("Texture descriptor invalid");
      this._descriptor = i;
    }
    this._descriptor.target === M.TEXTURE_CUBE_MAP ? this._setDataCubeMap(s2) : this.setData(s2);
  }
  get glName() {
    return this._glName;
  }
  get descriptor() {
    return this._descriptor;
  }
  get usedMemory() {
    return r(this._descriptor);
  }
  get isDirty() {
    return this._samplingModeDirty || this._wrapModeDirty;
  }
  dispose() {
    this._glName && this._descriptor.context.instanceCounter.decrement(V.Texture, this), this._descriptor.context.gl && this._glName && (this._descriptor.context.unbindTexture(this), this._descriptor.context.gl.deleteTexture(this._glName), this._glName = null);
  }
  release() {
    this.dispose();
  }
  resize(e3, r2) {
    const s2 = this._descriptor;
    if (s2.width !== e3 || s2.height !== r2) {
      if (this._wasImmutablyAllocated) throw new s("Immutable textures can't be resized!");
      s2.width = e3, s2.height = r2, this._descriptor.target === M.TEXTURE_CUBE_MAP ? this._setDataCubeMap(null) : this.setData(null);
    }
  }
  _setDataCubeMap(t = null) {
    for (let e3 = M.TEXTURE_CUBE_MAP_POSITIVE_X; e3 <= M.TEXTURE_CUBE_MAP_NEGATIVE_Z; e3++) this._setData(t, e3);
  }
  setData(t) {
    this._setData(t);
  }
  _setData(i, s2) {
    if (!this._descriptor.context?.gl) return;
    const o = this._descriptor.context.gl;
    u(o), this._glName || (this._glName = o.createTexture(), this._glName && this._descriptor.context.instanceCounter.increment(V.Texture, this)), void 0 === i && (i = null);
    const a2 = this._descriptor, n = s2 ?? a2.target, h = R(n);
    null === i && (a2.width = a2.width || _, a2.height = a2.height || _, h && (a2.depth = a2.depth ?? 1));
    const p = this._descriptor.context.bindTexture(this, l.TEXTURE_UNIT_FOR_UPDATES);
    this._descriptor.context.setActiveTexture(l.TEXTURE_UNIT_FOR_UPDATES), u3(a2), this._configurePixelStorage(), u(o);
    const d = this._deriveInternalFormat();
    if (f(i)) {
      let t = "width" in i ? i.width : i.codedWidth, r2 = "height" in i ? i.height : i.codedHeight;
      const s3 = 1;
      i instanceof HTMLVideoElement && (t = i.videoWidth, r2 = i.videoHeight), a2.width && a2.height, h && a2.depth, a2.isImmutable && !this._wasImmutablyAllocated && this._texStorage(n, d, a2.hasMipmap, t, r2, s3), this._texImage(n, 0, d, t, r2, s3, i), u(o), a2.hasMipmap && this.generateMipmap(), a2.width || (a2.width = t), a2.height || (a2.height = r2), h && !a2.depth && (a2.depth = s3);
    } else {
      const {
        width: r2,
        height: s3,
        depth: l2
      } = a2;
      if (null == r2 || null == s3) throw new s("Width and height must be specified!");
      if (h && null == l2) throw new s("Depth must be specified!");
      if (a2.isImmutable && !this._wasImmutablyAllocated && this._texStorage(n, d, a2.hasMipmap, r2, s3, l2), A(i)) {
        const e3 = i.levels, h2 = w(n, r2, s3, l2), p2 = Math.min(h2 - 1, e3.length - 1);
        o.texParameteri(a2.target, this._descriptor.context.gl.TEXTURE_MAX_LEVEL, p2);
        const _2 = d;
        if (!M2(_2)) throw new s("Attempting to use compressed data with an uncompressed format!");
        this._forEachMipmapLevel((t, i2, r3, s4) => {
          const o2 = e3[Math.min(t, e3.length - 1)];
          this._compressedTexImage(n, t, _2, i2, r3, s4, o2);
        }, p2);
      } else this._texImage(n, 0, d, r2, s3, l2, i), u(o), a2.hasMipmap && this.generateMipmap();
    }
    T(o, this._descriptor), g(o, this._descriptor), E(this._descriptor.context, this._descriptor), u(o), this._descriptor.context.bindTexture(p, l.TEXTURE_UNIT_FOR_UPDATES);
  }
  updateData(e3, i, r2, s2, o, a2, n = 0) {
    a2 || console.error("An attempt to use uninitialized data!"), this._glName || console.error("An attempt to update uninitialized texture!");
    const h = this._descriptor, p = this._deriveInternalFormat(), {
      context: d,
      pixelFormat: _2,
      dataType: m,
      target: c3,
      isImmutable: u4
    } = h;
    if (u4 && !this._wasImmutablyAllocated) throw new s("Cannot update immutable texture before allocation!");
    const T2 = d.bindTexture(this, l.TEXTURE_UNIT_FOR_UPDATES, true);
    (i < 0 || r2 < 0 || i + s2 > h.width || r2 + o > h.height) && console.error("An attempt to update out of bounds of the texture!"), this._configurePixelStorage();
    const {
      gl: g2
    } = d;
    n && g2.pixelStorei(g2.UNPACK_SKIP_ROWS, n), f(a2) ? g2.texSubImage2D(c3, e3, i, r2, s2, o, _2, m, a2) : A(a2) ? g2.compressedTexSubImage2D(c3, e3, i, r2, s2, o, p, a2.levels[e3]) : g2.texSubImage2D(c3, e3, i, r2, s2, o, _2, m, a2), n && g2.pixelStorei(g2.UNPACK_SKIP_ROWS, 0), d.bindTexture(T2, l.TEXTURE_UNIT_FOR_UPDATES);
  }
  updateData3D(e3, i, r2, s2, o, a2, n, h) {
    h || console.error("An attempt to use uninitialized data!"), this._glName || console.error("An attempt to update uninitialized texture!");
    const p = this._descriptor, d = this._deriveInternalFormat(), {
      context: _2,
      pixelFormat: m,
      dataType: c3,
      isImmutable: u4,
      target: T2
    } = p;
    if (u4 && !this._wasImmutablyAllocated) throw new s("Cannot update immutable texture before allocation!");
    R(T2) || console.warn("Attempting to set 3D texture data on a non-3D texture");
    const g2 = _2.bindTexture(this, l.TEXTURE_UNIT_FOR_UPDATES);
    _2.setActiveTexture(l.TEXTURE_UNIT_FOR_UPDATES), (i < 0 || r2 < 0 || s2 < 0 || i + o > p.width || r2 + a2 > p.height || s2 + n > p.depth) && console.error("An attempt to update out of bounds of the texture!"), this._configurePixelStorage();
    const {
      gl: E2
    } = _2;
    if (A(h)) h = h.levels[e3], E2.compressedTexSubImage3D(T2, e3, i, r2, s2, o, a2, n, d, h);
    else {
      const t = h;
      E2.texSubImage3D(T2, e3, i, r2, s2, o, a2, n, m, c3, t);
    }
    _2.bindTexture(g2, l.TEXTURE_UNIT_FOR_UPDATES);
  }
  generateMipmap() {
    const e3 = this._descriptor;
    if (!e3.hasMipmap) {
      if (this._wasImmutablyAllocated) throw new s("Cannot add mipmaps to immutable texture after allocation");
      e3.hasMipmap = true, this._samplingModeDirty = true, u3(e3);
    }
    e3.samplingMode === L.LINEAR ? (this._samplingModeDirty = true, e3.samplingMode = L.LINEAR_MIPMAP_NEAREST) : e3.samplingMode === L.NEAREST && (this._samplingModeDirty = true, e3.samplingMode = L.NEAREST_MIPMAP_NEAREST);
    const i = this._descriptor.context.bindTexture(this, l.TEXTURE_UNIT_FOR_UPDATES);
    this._descriptor.context.setActiveTexture(l.TEXTURE_UNIT_FOR_UPDATES), this._descriptor.context.gl.generateMipmap(e3.target), this._descriptor.context.bindTexture(i, l.TEXTURE_UNIT_FOR_UPDATES);
  }
  clearMipmap() {
    const e3 = this._descriptor;
    if (e3.hasMipmap) {
      if (this._wasImmutablyAllocated) throw new s("Cannot delete mipmaps to immutable texture after allocation");
      e3.hasMipmap = false, this._samplingModeDirty = true, u3(e3);
    }
    e3.samplingMode === L.LINEAR_MIPMAP_NEAREST ? (this._samplingModeDirty = true, e3.samplingMode = L.LINEAR) : e3.samplingMode === L.NEAREST_MIPMAP_NEAREST && (this._samplingModeDirty = true, e3.samplingMode = L.NEAREST);
  }
  setSamplingMode(t) {
    t !== this._descriptor.samplingMode && (this._descriptor.samplingMode = t, this._samplingModeDirty = true);
  }
  setWrapMode(t) {
    t !== this._descriptor.wrapMode && (this._descriptor.wrapMode = t, u3(this._descriptor), this._wrapModeDirty = true);
  }
  applyChanges() {
    const t = this._descriptor, e3 = t.context.gl;
    this._samplingModeDirty && (T(e3, t), this._samplingModeDirty = false), this._wrapModeDirty && (g(e3, t), this._wrapModeDirty = false);
  }
  _deriveInternalFormat() {
    if (null != this._descriptor.internalFormat) return this._descriptor.internalFormat === G.DEPTH_STENCIL && (this._descriptor.internalFormat = G.DEPTH24_STENCIL8), this._descriptor.internalFormat;
    switch (this._descriptor.dataType) {
      case U.FLOAT:
        switch (this._descriptor.pixelFormat) {
          case G.RGBA:
            return this._descriptor.internalFormat = P.RGBA32F;
          case G.RGB:
            return this._descriptor.internalFormat = P.RGB32F;
          default:
            throw new s("Unable to derive format");
        }
      case U.UNSIGNED_BYTE:
        switch (this._descriptor.pixelFormat) {
          case G.RGBA:
            return this._descriptor.internalFormat = P.RGBA8;
          case G.RGB:
            return this._descriptor.internalFormat = P.RGB8;
        }
    }
    return this._descriptor.internalFormat = this._descriptor.pixelFormat === G.DEPTH_STENCIL ? G.DEPTH24_STENCIL8 : this._descriptor.pixelFormat;
  }
  _configurePixelStorage() {
    const t = this._descriptor.context.gl, {
      unpackAlignment: e3,
      flipped: i,
      preMultiplyAlpha: r2
    } = this._descriptor;
    t.pixelStorei(t.UNPACK_ALIGNMENT, e3), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, i ? 1 : 0), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r2 ? 1 : 0);
  }
  _texStorage(e3, i, r2, s2, o, a2) {
    const {
      gl: n
    } = this._descriptor.context;
    if (!x(i)) throw new s("Immutable textures must have a sized internal format");
    if (!this._descriptor.isImmutable) return;
    const l2 = r2 ? w(e3, s2, o, a2) : 1;
    if (R(e3)) {
      if (null == a2) throw new s("Missing depth dimension for 3D texture upload");
      n.texStorage3D(e3, l2, i, s2, o, a2);
    } else n.texStorage2D(e3, l2, i, s2, o);
    this._wasImmutablyAllocated = true;
  }
  _texImage(e3, i, r2, s2, o, a2, n) {
    const l2 = this._descriptor.context.gl, h = R(e3), {
      isImmutable: p,
      pixelFormat: d,
      dataType: _2
    } = this._descriptor;
    if (p) {
      if (null != n) {
        const r3 = n;
        if (h) {
          if (null == a2) throw new s("Missing depth dimension for 3D texture upload");
          l2.texSubImage3D(e3, i, 0, 0, 0, s2, o, a2, d, _2, r3);
        } else l2.texSubImage2D(e3, i, 0, 0, s2, o, d, _2, r3);
      }
    } else {
      const p2 = n;
      if (h) {
        if (null == a2) throw new s("Missing depth dimension for 3D texture upload");
        l2.texImage3D(e3, i, r2, s2, o, a2, 0, d, _2, p2);
      } else l2.texImage2D(e3, i, r2, s2, o, 0, d, _2, p2);
    }
  }
  _compressedTexImage(e3, i, r2, s2, o, a2, n) {
    const l2 = this._descriptor.context.gl, h = R(e3);
    if (this._descriptor.isImmutable) {
      if (null != n) if (h) {
        if (null == a2) throw new s("Missing depth dimension for 3D texture upload");
        l2.compressedTexSubImage3D(e3, i, 0, 0, 0, s2, o, a2, r2, n);
      } else l2.compressedTexSubImage2D(e3, i, 0, 0, s2, o, r2, n);
    } else if (h) {
      if (null == a2) throw new s("Missing depth dimension for 3D texture upload");
      l2.compressedTexImage3D(e3, i, r2, s2, o, a2, 0, n);
    } else l2.compressedTexImage2D(e3, i, r2, s2, o, 0, n);
  }
  _forEachMipmapLevel(e3, r2 = 1 / 0) {
    let {
      width: s2,
      height: o,
      depth: a2,
      hasMipmap: n,
      target: l2
    } = this._descriptor;
    const h = l2 === M.TEXTURE_3D;
    if (null == s2 || null == o || h && null == a2) throw new s("Missing texture dimensions for mipmap calculation");
    for (let t = 0; e3(t, s2, o, a2), n && (1 !== s2 || 1 !== o || h && 1 !== a2) && !(t >= r2); ++t) s2 = Math.max(1, s2 >> 1), o = Math.max(1, o >> 1), h && (a2 = Math.max(1, a2 >> 1));
  }
};
function u3(t) {
  (null != t.width && t.width < 0 || null != t.height && t.height < 0 || null != t.depth && t.depth < 0) && console.error("Negative dimension parameters are not allowed!");
}
function T(t, e3) {
  let i = e3.samplingMode, r2 = e3.samplingMode;
  i === L.LINEAR_MIPMAP_NEAREST || i === L.LINEAR_MIPMAP_LINEAR ? (i = L.LINEAR, e3.hasMipmap || (r2 = L.LINEAR)) : i !== L.NEAREST_MIPMAP_NEAREST && i !== L.NEAREST_MIPMAP_LINEAR || (i = L.NEAREST, e3.hasMipmap || (r2 = L.NEAREST)), t.texParameteri(e3.target, t.TEXTURE_MAG_FILTER, i), t.texParameteri(e3.target, t.TEXTURE_MIN_FILTER, r2);
}
function g(t, e3) {
  "number" == typeof e3.wrapMode ? (t.texParameteri(e3.target, t.TEXTURE_WRAP_S, e3.wrapMode), t.texParameteri(e3.target, t.TEXTURE_WRAP_T, e3.wrapMode)) : (t.texParameteri(e3.target, t.TEXTURE_WRAP_S, e3.wrapMode.s), t.texParameteri(e3.target, t.TEXTURE_WRAP_T, e3.wrapMode.t));
}
function E(t, e3) {
  const i = t.capabilities.textureFilterAnisotropic;
  if (!i) return;
  t.gl.texParameterf(e3.target, i.TEXTURE_MAX_ANISOTROPY, e3.maxAnisotropy ?? 1);
}
function x(t) {
  return t in P;
}
function M2(t) {
  return t in c;
}
function A(t) {
  return null != t && "type" in t && "compressed" === t.type;
}
function I(t) {
  return null != t && "byteLength" in t;
}
function f(t) {
  return null != t && !A(t) && !I(t);
}
function R(t) {
  return t === M.TEXTURE_3D || t === M.TEXTURE_2D_ARRAY;
}
function w(t, e3, r2, s2 = 1) {
  let o = Math.max(e3, r2);
  return t === M.TEXTURE_3D && (o = Math.max(o, s2)), Math.round(Math.log(o) / Math.LN2) + 1;
}
c2.TEXTURE_UNIT_FOR_UPDATES = 0;

export {
  e,
  e2,
  c2 as c
};
//# sourceMappingURL=chunk-QATJRB5Q.js.map
