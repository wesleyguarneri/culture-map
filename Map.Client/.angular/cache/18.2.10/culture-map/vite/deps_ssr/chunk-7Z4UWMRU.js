import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  A,
  B,
  C,
  G,
  P,
  c
} from "./chunk-KYLW5XXS.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  has
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/views/webgl/checkWebGLError.js
var o = () => n.getLogger("esri.views.webgl.checkWebGLError");
function t(e, r) {
  switch (r) {
    case e.INVALID_ENUM:
      return "Invalid Enum. An unacceptable value has been specified for an enumerated argument.";
    case e.INVALID_VALUE:
      return "Invalid Value. A numeric argument is out of range.";
    case e.INVALID_OPERATION:
      return "Invalid Operation. The specified command is not allowed for the current state.";
    case e.INVALID_FRAMEBUFFER_OPERATION:
      return "Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";
    case e.OUT_OF_MEMORY:
      return "Out of memory. Not enough memory is left to execute the command.";
    case e.CONTEXT_LOST_WEBGL:
      return "WebGL context has been lost";
    default:
      return "Unknown error";
  }
}
var n2 = !!has("enable-feature:webgl-debug");
function a() {
  return n2;
}
function c2() {
  return n2;
}
function u(r) {
  if (a()) {
    const n3 = r.getError();
    if (n3) {
      const a2 = t(r, n3), c3 = new Error().stack;
      o().error(new s("webgl-error", "WebGL error occurred", {
        message: a2,
        stack: c3
      }));
    }
  }
}

// ../../../node_modules/@arcgis/core/views/webgl/getDataTypeBytes.js
function s2(s3) {
  switch (s3) {
    case C.BYTE:
    case C.UNSIGNED_BYTE:
      return 1;
    case C.SHORT:
    case C.UNSIGNED_SHORT:
    case C.HALF_FLOAT:
      return 2;
    case C.FLOAT:
    case C.INT:
    case C.UNSIGNED_INT:
      return 4;
  }
}

// ../../../node_modules/@arcgis/core/views/webgl/Util.js
function o2(e) {
  const r = e.gl;
  switch (r.getError()) {
    case r.NO_ERROR:
      return null;
    case r.INVALID_ENUM:
      return "An unacceptable value has been specified for an enumerated argument";
    case r.INVALID_VALUE:
      return "An unacceptable value has been specified for an argument";
    case r.INVALID_OPERATION:
      return "The specified command is not allowed for the current state";
    case r.INVALID_FRAMEBUFFER_OPERATION:
      return "The currently bound framebuffer is not framebuffer complete";
    case r.OUT_OF_MEMORY:
      return "Not enough memory is left to execute the command";
    case r.CONTEXT_LOST_WEBGL:
      return "WebGL context is lost";
  }
  return "Unknown error";
}
function i(e, r) {
  return e.vertexBuffers[r].usedMemory / R(e.layout[r]);
}
function R(e) {
  return e[0].stride;
}
function E(r, t2, s3, a2, c3 = 0) {
  const i2 = r.gl;
  r.bindBuffer(s3);
  for (const R2 of a2) {
    const s4 = t2.get(R2.name);
    if (void 0 === s4) {
      console.warn(`There is no location for vertex attribute '${R2.name}' defined.`);
      continue;
    }
    const a3 = c3 * R2.stride;
    if (R2.count <= 4) i2.vertexAttribPointer(s4, R2.count, R2.type, R2.normalized, R2.stride, R2.offset + a3), i2.enableVertexAttribArray(s4), R2.divisor > 0 && r.gl.vertexAttribDivisor(s4, R2.divisor);
    else if (9 === R2.count) for (let e = 0; e < 3; e++) i2.vertexAttribPointer(s4 + e, 3, R2.type, R2.normalized, R2.stride, R2.offset + 12 * e + a3), i2.enableVertexAttribArray(s4 + e), R2.divisor > 0 && r.gl.vertexAttribDivisor(s4 + e, R2.divisor);
    else if (16 === R2.count) for (let e = 0; e < 4; e++) i2.vertexAttribPointer(s4 + e, 4, R2.type, R2.normalized, R2.stride, R2.offset + 16 * e + a3), i2.enableVertexAttribArray(s4 + e), R2.divisor > 0 && r.gl?.vertexAttribDivisor(s4 + e, R2.divisor);
    else console.error("Unsupported vertex attribute element count: " + R2.count);
    if (a()) {
      const e = o2(r), t3 = s2(R2.type), s5 = R2.offset, c4 = Math.round(t3 / s5) !== t3 / s5 ? `. Offset not a multiple of stride. DataType requires ${t3} bytes, but descriptor has an offset of ${s5}` : "";
      e && console.error(`Unable to bind vertex attribute "${R2.name}" with baseInstanceOffset ${a3}${c4}:`, e, R2);
    }
  }
}
function _(e, t2, s3, a2) {
  const c3 = e.gl;
  e.bindBuffer(s3);
  for (const r of a2) {
    const s4 = t2.get(r.name);
    if (r.count <= 4) c3.disableVertexAttribArray(s4), r.divisor && r.divisor > 0 && e.gl?.vertexAttribDivisor(s4, 0);
    else if (9 === r.count) for (let t3 = 0; t3 < 3; t3++) c3.disableVertexAttribArray(s4 + t3), r.divisor && r.divisor > 0 && e.gl?.vertexAttribDivisor(s4 + t3, 0);
    else if (16 === r.count) for (let t3 = 0; t3 < 4; t3++) c3.disableVertexAttribArray(s4 + t3), r.divisor && r.divisor > 0 && e.gl?.vertexAttribDivisor(s4 + t3, 0);
    else console.error("Unsupported vertex attribute element count: " + r.count);
  }
  e.unbindBuffer(A.ARRAY_BUFFER);
}
function u2(e) {
  switch (e) {
    case G.ALPHA:
    case G.LUMINANCE:
    case G.RED:
    case G.RED_INTEGER:
    case P.R8:
    case P.R8I:
    case P.R8UI:
    case P.R8_SNORM:
    case B.STENCIL_INDEX8:
      return 1;
    case G.LUMINANCE_ALPHA:
    case G.RG:
    case G.RG_INTEGER:
    case P.RGBA4:
    case P.R16F:
    case P.R16I:
    case P.R16UI:
    case P.RG8:
    case P.RG8I:
    case P.RG8UI:
    case P.RG8_SNORM:
    case P.RGB565:
    case P.RGB5_A1:
    case B.DEPTH_COMPONENT16:
      return 2;
    case G.DEPTH_COMPONENT:
    case G.RGB:
    case G.RGB_INTEGER:
    case P.RGB8:
    case P.RGB8I:
    case P.RGB8UI:
    case P.RGB8_SNORM:
    case P.SRGB8:
    case B.DEPTH_COMPONENT24:
      return 3;
    case G.DEPTH_STENCIL:
    case G.DEPTH24_STENCIL8:
    case G.RGBA:
    case G.RGBA_INTEGER:
    case P.RGBA8:
    case P.R32F:
    case P.R11F_G11F_B10F:
    case P.RG16F:
    case P.R32I:
    case P.R32UI:
    case P.RG16I:
    case P.RG16UI:
    case P.RGBA8I:
    case P.RGBA8UI:
    case P.RGBA8_SNORM:
    case P.SRGB8_ALPHA8:
    case P.RGB9_E5:
    case P.RGB10_A2UI:
    case P.RGB10_A2:
    case B.DEPTH_STENCIL:
    case B.DEPTH_COMPONENT32F:
    case B.DEPTH24_STENCIL8:
      return 4;
    case B.DEPTH32F_STENCIL8:
      return 5;
    case P.RGB16F:
    case P.RGB16I:
    case P.RGB16UI:
      return 6;
    case P.RG32F:
    case P.RG32I:
    case P.RG32UI:
    case P.RGBA16F:
    case P.RGBA16I:
    case P.RGBA16UI:
      return 8;
    case P.RGB32F:
    case P.RGB32I:
    case P.RGB32UI:
      return 12;
    case P.RGBA32F:
    case P.RGBA32I:
    case P.RGBA32UI:
      return 16;
    case c.COMPRESSED_RGB_S3TC_DXT1_EXT:
    case c.COMPRESSED_RGBA_S3TC_DXT1_EXT:
      return 0.5;
    case c.COMPRESSED_RGBA_S3TC_DXT3_EXT:
    case c.COMPRESSED_RGBA_S3TC_DXT5_EXT:
      return 1;
    case c.COMPRESSED_R11_EAC:
    case c.COMPRESSED_SIGNED_R11_EAC:
    case c.COMPRESSED_RGB8_ETC2:
    case c.COMPRESSED_SRGB8_ETC2:
    case c.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:
    case c.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:
      return 0.5;
    case c.COMPRESSED_RG11_EAC:
    case c.COMPRESSED_SIGNED_RG11_EAC:
    case c.COMPRESSED_RGBA8_ETC2_EAC:
    case c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:
      return 1;
  }
  return 0;
}

export {
  n2 as n,
  a,
  c2 as c,
  u,
  s2 as s,
  o2 as o,
  i,
  E,
  _,
  u2
};
//# sourceMappingURL=chunk-7Z4UWMRU.js.map
