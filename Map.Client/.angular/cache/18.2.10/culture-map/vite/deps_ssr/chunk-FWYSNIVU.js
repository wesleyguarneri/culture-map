import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  c
} from "./chunk-MDEPINSI.js";
import {
  c as c2,
  e
} from "./chunk-QATJRB5Q.js";
import {
  a,
  u2 as u
} from "./chunk-7Z4UWMRU.js";
import {
  A,
  B,
  F,
  G,
  M,
  U,
  V,
  X,
  n as n2,
  t
} from "./chunk-KYLW5XXS.js";
import {
  r
} from "./chunk-6WGE3IUL.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/webgl/RenderbufferDescriptor.js
var i = class {
  constructor(t2, i2, h2 = i2) {
    this.internalFormat = t2, this.width = i2, this.height = h2, this.multisampled = false, this.samples = 1;
  }
};
function h(i2) {
  return i2.width <= 0 || i2.height <= 0 || null == i2.internalFormat ? 0 : i2.width * i2.height * u(i2.internalFormat);
}

// ../../../node_modules/@arcgis/core/views/webgl/Renderbuffer.js
var s = class {
  constructor(r2, s2) {
    this._context = r2, this._descriptor = s2, this.type = e.RenderBuffer, this._context.instanceCounter.increment(V.Renderbuffer, this);
    const i2 = this._context.gl;
    this.glName = i2.createRenderbuffer(), this._context.bindRenderbuffer(this);
    const {
      width: n3,
      height: o,
      internalFormat: h2,
      multisampled: d
    } = s2;
    d ? i2.renderbufferStorageMultisample(i2.RENDERBUFFER, this.samples, h2, n3, o) : i2.renderbufferStorage(i2.RENDERBUFFER, h2, n3, o), this._context.bindRenderbuffer(null);
  }
  get descriptor() {
    return this._descriptor;
  }
  get samples() {
    const e2 = this._descriptor.samples, t2 = this._context.parameters.maxSamples;
    return e2 ? Math.min(e2, t2) : t2;
  }
  get usedMemory() {
    return h(this._descriptor);
  }
  resize(e2, t2) {
    const r2 = this._descriptor;
    if (r2.width === e2 && r2.height === t2) return;
    r2.width = e2, r2.height = t2;
    const s2 = this._context.gl;
    this._context.bindRenderbuffer(this), r2.multisampled ? s2.renderbufferStorageMultisample(s2.RENDERBUFFER, this.samples, r2.internalFormat, r2.width, r2.height) : s2.renderbufferStorage(s2.RENDERBUFFER, r2.internalFormat, r2.width, r2.height), this._context.bindRenderbuffer(null);
  }
  dispose() {
    this._context && (this._context.gl.deleteRenderbuffer(this.glName), this._context.instanceCounter.decrement(V.Renderbuffer, this), this._context = null);
  }
};

// ../../../node_modules/@arcgis/core/views/webgl/FramebufferObject.js
var p = () => n.getLogger("esri.views.webgl.FramebufferObject");
var E = class _E {
  constructor(t2, e2, i2 = null) {
    this._context = t2, this._glName = null, this._colorAttachments = /* @__PURE__ */ new Map(), this._depthStencilBuffer = null, this._depthStencilTexture = null, this._initialized = false, t2.instanceCounter.increment(V.FramebufferObject, this);
    const r2 = x(e2) ? e2 : new c2(this._context, e2);
    if (this._colorAttachments.set(X.COLOR_ATTACHMENT0, r2), this._validateTextureDescriptor(r2.descriptor), this._validateColorAttachmentPoint(X.COLOR_ATTACHMENT0), null != i2) if (b(i2)) this._depthStencilTexture = x(i2) ? i2 : new c2(this._context, i2), this._validateTextureDescriptor(this._depthStencilTexture.descriptor);
    else {
      const t3 = g(i2) ? i2 : new s(this._context, i2);
      this._depthStencilBuffer = t3, this._validateRenderBufferDescriptor(t3.descriptor);
    }
  }
  dispose() {
    if (0 === this._colorAttachments.size && !this._glName) return;
    const t2 = this._context.getBoundFramebufferObject();
    if (this._colorAttachments.forEach((t3, e2) => this.detachColorTexture(e2)?.dispose()), this.detachDepthStencilBuffer()?.dispose(), this.detachDepthStencilTexture()?.dispose(), this._glName) {
      this._context.gl.deleteFramebuffer(this._glName), this._glName = null;
    }
    this._context.bindFramebuffer(t2), this._context.instanceCounter.decrement(V.FramebufferObject, this);
  }
  get glName() {
    return this._glName;
  }
  get colorTexture() {
    return this._colorAttachments.get(X.COLOR_ATTACHMENT0);
  }
  get depthStencil() {
    return this._depthStencilTexture || this._depthStencilBuffer;
  }
  get depthStencilTexture() {
    return this._depthStencilTexture;
  }
  get width() {
    const t2 = this._colorAttachments.get(X.COLOR_ATTACHMENT0);
    return t2?.descriptor?.width ?? 0;
  }
  get height() {
    const t2 = this._colorAttachments.get(X.COLOR_ATTACHMENT0);
    return t2?.descriptor?.height ?? 0;
  }
  get usedMemory() {
    return [...this._colorAttachments].reduce((t2, [e2, i2]) => t2 + i2.usedMemory, this.depthStencil?.usedMemory ?? 0);
  }
  getColorTexture(t2) {
    const e2 = this._colorAttachments.get(t2);
    return e2 && x(e2) ? e2 : null;
  }
  get colorAttachments() {
    return [...this._colorAttachments.keys()];
  }
  attachColorTexture(t2, e2 = X.COLOR_ATTACHMENT0) {
    if (!t2) return;
    this._validateColorAttachmentPoint(e2);
    const i2 = t2.descriptor;
    this._validateTextureDescriptor(i2), this.detachColorTexture(e2)?.dispose(), this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(t2.glName, e2)), this._colorAttachments.set(e2, t2);
  }
  detachColorTexture(t2 = X.COLOR_ATTACHMENT0) {
    const e2 = this._colorAttachments.get(t2);
    if (e2) {
      if (this._initialized) {
        const e3 = this._context.getBoundFramebufferObject();
        this._context.bindFramebuffer(this), this._framebufferTexture2D(null, t2), this._context.bindFramebuffer(e3);
      }
      return this._colorAttachments.delete(t2), e2;
    }
  }
  setColorTextureTarget(t2, e2 = X.COLOR_ATTACHMENT0) {
    const i2 = this._colorAttachments.get(e2);
    i2 && this._framebufferTexture2D(i2.glName, e2, t2);
  }
  attachDepthStencil(t2) {
    if (t2) switch (t2.type) {
      case e.Texture:
        return this._attachDepthStencilTexture(t2);
      case e.RenderBuffer:
        return this._attachDepthStencilBuffer(t2);
    }
  }
  _attachDepthStencilTexture(t2) {
    if (null == t2) return;
    const e2 = t2.descriptor;
    e2.pixelFormat !== G.DEPTH_STENCIL && e2.pixelFormat !== G.DEPTH24_STENCIL8 && console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"), e2.dataType !== U.UNSIGNED_INT_24_8 && console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"), this._validateTextureDescriptor(e2), this._disposeDepthStencilAttachments(), this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(t2.glName, t)), this._depthStencilTexture?.dispose(), this._depthStencilTexture = t2;
  }
  detachDepthStencilTexture() {
    const t2 = this._depthStencilTexture;
    if (t2 && this._initialized) {
      const t3 = this._context.getBoundFramebufferObject();
      this._context.bindFramebuffer(this), this._framebufferTexture2D(null, t), this._context.bindFramebuffer(t3);
    }
    return this._depthStencilTexture = null, t2;
  }
  _attachDepthStencilBuffer(t2) {
    if (null == t2) return;
    const e2 = t2.descriptor;
    if (this._validateRenderBufferDescriptor(e2), this._disposeDepthStencilAttachments(), this._initialized) {
      this._context.bindFramebuffer(this);
      const i2 = this._context.gl, r2 = this._getGLAttachmentPoint(e2);
      i2.framebufferRenderbuffer(n2.FRAMEBUFFER, r2, i2.RENDERBUFFER, t2.glName);
    }
    this._depthStencilBuffer = t2;
  }
  detachDepthStencilBuffer() {
    const t2 = this._depthStencilBuffer;
    if (t2 && this._initialized) {
      const e2 = this._context.getBoundFramebufferObject();
      this._context.bindFramebuffer(this);
      const i2 = this._context.gl, r2 = this._getGLAttachmentPoint(t2.descriptor);
      i2.framebufferRenderbuffer(n2.FRAMEBUFFER, r2, i2.RENDERBUFFER, null), this._context.bindFramebuffer(e2);
    }
    return this._depthStencilBuffer = null, t2;
  }
  copyToTexture(t2, e2, i2, r2, s2, h2, n3) {
    (t2 < 0 || e2 < 0 || s2 < 0 || h2 < 0) && console.error("Offsets cannot be negative!"), (i2 <= 0 || r2 <= 0) && console.error("Copy width and height must be greater than zero!");
    const o = n3.descriptor;
    n3.descriptor.target !== M.TEXTURE_2D && console.error("Texture target must be TEXTURE_2D!"), (null == o?.width || null == o?.height || t2 + i2 > this.width || e2 + r2 > this.height || s2 + i2 > o.width || h2 + r2 > o.height) && console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");
    const c3 = this._context, a2 = c3.bindTexture(n3, c2.TEXTURE_UNIT_FOR_UPDATES);
    c3.setActiveTexture(c2.TEXTURE_UNIT_FOR_UPDATES), c3.bindFramebuffer(this), c3.gl.copyTexSubImage2D(M.TEXTURE_2D, 0, s2, h2, t2, e2, i2, r2), c3.bindTexture(a2, c2.TEXTURE_UNIT_FOR_UPDATES);
  }
  readPixels(t2, e2, i2, r2, s2, h2, n3) {
    (i2 <= 0 || r2 <= 0) && console.error("Copy width and height must be greater than zero!"), n3 || console.error("Target memory is not initialized!"), this._context.bindFramebuffer(this), this._context.gl.readPixels(t2, e2, i2, r2, s2, h2, n3);
  }
  readPixelsAsync(t2, e2, r2, s2, h2, n3, o) {
    return __async(this, null, function* () {
      const {
        gl: c3
      } = this._context, a2 = c.createPixelPack(this._context, F.STREAM_READ, o.byteLength);
      this._context.bindBuffer(a2), this._context.bindFramebuffer(this), c3.readPixels(t2, e2, r2, s2, h2, n3, 0), this._context.unbindBuffer(A.PIXEL_PACK_BUFFER), yield a2.getSubDataAsync(o), a2.dispose();
    });
  }
  resize(t2, e2) {
    if (this.width === t2 && this.height === e2) return;
    const i2 = {
      width: t2,
      height: e2
    };
    A2(i2, this._context.parameters.maxTextureSize), this._colorAttachments.forEach((t3) => t3.resize(i2.width, i2.height)), this._depthStencilTexture?.resize(i2.width, i2.height), this._initialized && (A2(i2, this._context.parameters.maxRenderbufferSize), this._depthStencilBuffer?.resize(i2.width, i2.height), this._context.getBoundFramebufferObject() === this && this._context.bindFramebuffer(null), this._initialized = false);
  }
  initializeAndBind(t2 = n2.FRAMEBUFFER) {
    const e2 = this._context.gl;
    if (this._initialized) return void e2.bindFramebuffer(t2, this.glName);
    this._glName && e2.deleteFramebuffer(this._glName);
    const i2 = e2.createFramebuffer();
    if (e2.bindFramebuffer(t2, i2), this._colorAttachments.forEach((e3, i3) => this._framebufferTexture2D(e3.glName, i3, S(e3), t2)), this._depthStencilBuffer) {
      const i3 = this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);
      e2.framebufferRenderbuffer(t2, i3, e2.RENDERBUFFER, this._depthStencilBuffer.glName);
    } else this._depthStencilTexture && this._framebufferTexture2D(this._depthStencilTexture.glName, e2.DEPTH_STENCIL_ATTACHMENT, S(this._depthStencilTexture), t2);
    if (a()) {
      e2.checkFramebufferStatus(t2) !== e2.FRAMEBUFFER_COMPLETE && console.error("Framebuffer is incomplete!");
    }
    this._glName = i2, this._initialized = true;
  }
  _framebufferTexture2D(t2, e2 = X.COLOR_ATTACHMENT0, i2 = M.TEXTURE_2D, r2 = n2.FRAMEBUFFER, s2 = 0) {
    this._context.gl.framebufferTexture2D(r2, e2, i2, t2, s2);
  }
  _disposeDepthStencilAttachments() {
    const t2 = this._context.gl;
    if (this._depthStencilBuffer) {
      if (this._initialized) {
        this._context.bindFramebuffer(this);
        const e2 = this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);
        t2.framebufferRenderbuffer(n2.FRAMEBUFFER, e2, t2.RENDERBUFFER, null);
      }
      this._depthStencilBuffer = r(this._depthStencilBuffer);
    }
    this._depthStencilTexture && (this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(null, t2.DEPTH_STENCIL_ATTACHMENT)), this._depthStencilTexture = r(this._depthStencilTexture));
  }
  _validateTextureDescriptor(t2) {
    t2.target !== M.TEXTURE_2D && t2.target !== M.TEXTURE_CUBE_MAP && console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"), A2(t2, this._context.parameters.maxTextureSize), this._validateBufferDimensions(t2);
  }
  _validateRenderBufferDescriptor(t2) {
    A2(t2, this._context.parameters.maxRenderbufferSize), this._validateBufferDimensions(t2);
  }
  _validateBufferDimensions(t2) {
    t2.width <= 0 && (t2.width = this.width), t2.height <= 0 && (t2.height = this.height), this.width > 0 && this.height > 0 && (this.width === t2.width && this.height === t2.height || console.error("Attachment size must match framebuffer size!"));
  }
  _getGLAttachmentPoint(t2) {
    switch (t2.internalFormat) {
      case B.DEPTH_COMPONENT16:
      case B.DEPTH_COMPONENT24:
      case B.DEPTH_COMPONENT32F:
        return this._context.gl.DEPTH_ATTACHMENT;
      case B.DEPTH24_STENCIL8:
      case B.DEPTH32F_STENCIL8:
      case B.DEPTH_STENCIL:
        return this._context.gl.DEPTH_STENCIL_ATTACHMENT;
      case B.STENCIL_INDEX8:
        return this._context.gl.STENCIL_ATTACHMENT;
    }
  }
  _validateColorAttachmentPoint(e2) {
    if (-1 === _E._MAX_COLOR_ATTACHMENTS) {
      const {
        gl: t2
      } = this._context;
      _E._MAX_COLOR_ATTACHMENTS = t2.getParameter(t2.MAX_COLOR_ATTACHMENTS);
    }
    const i2 = e2 - X.COLOR_ATTACHMENT0;
    i2 + 1 > _E._MAX_COLOR_ATTACHMENTS && n.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject", `illegal attachment point for color attachment: ${i2 + 1}. Implementation supports up to ${_E._MAX_COLOR_ATTACHMENTS} color attachments`);
  }
};
function x(t2) {
  return null != t2 && "type" in t2 && t2.type === e.Texture;
}
function g(t2) {
  return null != t2 && "type" in t2 && t2.type === e.RenderBuffer;
}
function b(t2) {
  return x(t2) || null != t2 && "pixelFormat" in t2;
}
function A2(t2, e2) {
  const i2 = Math.max(t2.width, t2.height);
  if (i2 > e2) {
    p().warn(`Resizing FBO attachment size ${t2.width}x${t2.height} to device limit ${e2}`);
    const r2 = e2 / i2;
    return t2.width = Math.round(t2.width * r2), t2.height = Math.round(t2.height * r2), false;
  }
  return true;
}
function S(t2) {
  return t2.descriptor.target === M.TEXTURE_CUBE_MAP ? M.TEXTURE_CUBE_MAP_POSITIVE_X : M.TEXTURE_2D;
}
E._MAX_COLOR_ATTACHMENTS = -1;

export {
  i,
  s,
  E,
  A2 as A
};
//# sourceMappingURL=chunk-FWYSNIVU.js.map
