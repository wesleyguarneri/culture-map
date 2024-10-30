import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  r as r5
} from "./chunk-MWR6F5NE.js";
import {
  d as d2,
  f,
  n as n7,
  s as s7,
  t as t3,
  u as u2
} from "./chunk-NLU6ZPOA.js";
import {
  r as r6
} from "./chunk-YQDGVKY6.js";
import {
  r as r4
} from "./chunk-PAFRRTJD.js";
import {
  n as n8
} from "./chunk-A47NS37R.js";
import {
  E as E2,
  N as N2,
  S as S2,
  h2 as h,
  p
} from "./chunk-VOJZD4TW.js";
import {
  s as s6
} from "./chunk-OQI6JU2J.js";
import {
  e as e4
} from "./chunk-7PJ3GUSK.js";
import {
  e as e6
} from "./chunk-BNFI45VE.js";
import {
  e as e5
} from "./chunk-CSA6OEKA.js";
import {
  o as o3
} from "./chunk-ZCCDVQ3H.js";
import {
  b,
  n as n4,
  r as r3,
  s as s3,
  s2 as s4,
  s3 as s5,
  t2
} from "./chunk-VM4DYPO2.js";
import {
  c
} from "./chunk-MDEPINSI.js";
import {
  n as n5
} from "./chunk-WS7U2AGS.js";
import {
  e as e3,
  r as r2
} from "./chunk-U4NXHH3L.js";
import {
  c as c2,
  e2
} from "./chunk-QATJRB5Q.js";
import {
  a,
  bt,
  j,
  jt,
  kt,
  xt
} from "./chunk-NOBDTR4N.js";
import {
  i as i2
} from "./chunk-Q47GASPN.js";
import {
  n as n6
} from "./chunk-YEB36ZCF.js";
import {
  t
} from "./chunk-KINQ7OJ3.js";
import {
  C,
  D,
  E,
  F,
  I,
  L,
  N,
  O,
  R
} from "./chunk-KYLW5XXS.js";
import {
  o as o2
} from "./chunk-B76NC7GX.js";
import {
  K,
  Q
} from "./chunk-X5QZGB37.js";
import {
  e
} from "./chunk-JSWVKNBA.js";
import {
  n as n3
} from "./chunk-BZHHBBFX.js";
import {
  i,
  r,
  s as s2
} from "./chunk-A2FDYA6M.js";
import {
  S,
  o
} from "./chunk-MZM4INJV.js";
import {
  d
} from "./chunk-LZSLQ24Q.js";
import {
  n as n2,
  u
} from "./chunk-6WGE3IUL.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-6JFGZTLU.js";
import {
  has
} from "./chunk-2ZJE6ZFX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/VertexStream.js
var h2 = class {
  constructor(i5, h6) {
    this._rctx = i5, this._attributes = [{
      name: "position",
      offset: 0,
      type: C.SHORT,
      count: 2
    }], this.layout = {
      hash: t2(this._attributes),
      attributes: this._attributes,
      stride: 4
    }, this._vertexBuffer = c.createVertex(i5, F.STATIC_DRAW, new Uint16Array(h6)), this._vao = new o3(i5, /* @__PURE__ */ new Map([["a_position", 0]]), {
      geometry: [new t("a_position", 2, C.SHORT, 0, 4)]
    }, {
      geometry: this._vertexBuffer
    }), this._count = h6.length / 2;
  }
  bind() {
    this._rctx.bindVAO(this._vao);
  }
  unbind() {
    this._rctx.bindVAO(null);
  }
  dispose() {
    this._vao.dispose();
  }
  draw() {
    this._rctx.bindVAO(this._vao), this._rctx.drawArrays(E.TRIANGLE_STRIP, 0, this._count);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/brushes/BrushBitmap.js
var r7 = {
  nearest: {
    defines: [],
    samplingMode: L.NEAREST,
    mips: false
  },
  bilinear: {
    defines: [],
    samplingMode: L.LINEAR,
    mips: false
  },
  bicubic: {
    defines: ["bicubic"],
    samplingMode: L.LINEAR,
    mips: false
  },
  trilinear: {
    defines: [],
    samplingMode: L.LINEAR_MIPMAP_LINEAR,
    mips: true
  }
};
var o4 = (e9, t8, i5) => {
  if ("dynamic" === i5.samplingMode) {
    const {
      state: i6
    } = e9, s9 = t8.resolution / t8.pixelRatio / i6.resolution, n13 = Math.round(e9.pixelRatio) !== e9.pixelRatio, a8 = s9 > 1.05 || s9 < 0.95;
    return i6.rotation || a8 || n13 || t8.isSourceScaled || t8.rotation ? r7.bilinear : r7.nearest;
  }
  return r7[i5.samplingMode];
};
var d3 = class extends t3 {
  constructor() {
    super(...arguments), this._desc = {
      vsPath: "raster/bitmap",
      fsPath: "raster/bitmap",
      attributes: /* @__PURE__ */ new Map([["a_pos", 0]])
    };
  }
  dispose() {
    this._quad && this._quad.dispose();
  }
  prepareState({
    context: e9
  }) {
    e9.setBlendingEnabled(true), e9.setColorMask(true, true, true, true), e9.setStencilWriteMask(0), e9.setStencilTestEnabled(true);
  }
  draw(i5, s9) {
    const {
      context: r11,
      renderingOptions: d7,
      painter: l3,
      requestRender: c4,
      allowDelayedRender: m2
    } = i5;
    if (!s9.source || !s9.isReady) return;
    const p5 = o4(i5, s9, d7), u4 = l3.materialManager.getProgram(this._desc, p5.defines);
    if (m2 && null != c4 && !u4.compiled) return void c4();
    i5.timeline.begin(this.name), "additive" === s9.blendFunction ? r11.setBlendFunctionSeparate(R.ONE, R.ONE, R.ONE, R.ONE) : r11.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), r11.setStencilFunction(O.EQUAL, s9.stencilRef, 255), this._quad || (this._quad = new h2(r11, [0, 0, 1, 0, 0, 1, 1, 1]));
    const {
      coordScale: f3,
      computedOpacity: _3,
      transforms: M
    } = s9;
    s9.setSamplingProfile(p5), s9.bind(i5.context, j), r11.useProgram(u4), u4.setUniformMatrix3fv("u_dvsMat3", M.displayViewScreenMat3), u4.setUniform1i("u_texture", j), u4.setUniform2fv("u_coordScale", f3), u4.setUniform1f("u_opacity", _3), this._quad.draw(), i5.timeline.end(this.name);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/sources/shaderRepository.js
var e7 = {
  background: {
    "background.frag": "uniform lowp vec4 u_color;\nvoid main() {\ngl_FragColor = u_color;\n}",
    "background.vert": "attribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform mediump vec2 u_coord_range;\nuniform mediump float u_depth;\nvoid main() {\nvec3 v_pos = u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0);\ngl_Position = vec4(v_pos.xy, 0.0, 1.0);\n}"
  },
  bitBlit: {
    "bitBlit.frag": "uniform lowp sampler2D u_tex;\nuniform lowp float u_opacity;\nvarying mediump vec2 v_uv;\nvoid main() {\nlowp vec4 color = texture2D(u_tex, v_uv);\ngl_FragColor = color * u_opacity;\n}",
    "bitBlit.vert": "attribute vec2 a_pos;\nattribute vec2 a_tex;\nvarying mediump vec2 v_uv;\nvoid main(void) {\ngl_Position = vec4(a_pos , 0.0, 1.0);\nv_uv = a_tex;\n}"
  },
  blend: {
    "blend.frag": "precision mediump float;\nuniform sampler2D u_layerTexture;\nuniform lowp float u_opacity;\nuniform lowp float u_inFadeOpacity;\n#ifndef NORMAL\nuniform sampler2D u_backbufferTexture;\n#endif\nvarying mediump vec2 v_uv;\nfloat rgb2v(in vec3 c) {\nreturn max(c.x, max(c.y, c.z));\n}\nvec3 rgb2hsv(in vec3 c) {\nvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\nvec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\nvec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\nfloat d = q.x - min(q.w, q.y);\nfloat e = 1.0e-10;\nreturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);\n}\nvec3 hsv2rgb(in vec3 c) {\nvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\nvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\nreturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\nvec3 tint(in vec3 Cb, in vec3 Cs) {\nfloat vIn = rgb2v(Cb);\nvec3 hsvTint = rgb2hsv(Cs);\nvec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);\nreturn hsv2rgb(hsvOut);\n}\nfloat overlay(in float Cb, in float Cs) {\nreturn (1.0 - step(0.5, Cs)) * (1.0 - 2.0 * (1.0 - Cs ) * (1.0 - Cb)) + step(0.5, Cs) * (2.0 * Cs * Cb);\n}\nfloat colorDodge(in float Cb, in float Cs) {\nreturn (Cb == 0.0) ? 0.0 : (Cs == 1.0) ? 1.0 : min(1.0, Cb / (1.0 - Cs));\n}\nfloat colorBurn(in float Cb, in float Cs) {\nreturn (Cb == 1.0) ? 1.0 : (Cs == 0.0) ? 0.0 : 1.0 - min(1.0, (1.0 - Cb) / Cs);\n}\nfloat hardLight(in float Cb, in float Cs) {\nreturn (1.0 - step(0.5, Cs)) * (2.0 * Cs * Cb) + step(0.5, Cs) * (1.0 - 2.0 * (1.0 - Cs) * (1.0 - Cb));\n}\nfloat reflectBlend(in float Cb, in float Cs) {\nreturn (Cs == 1.0) ? Cs : min(Cb * Cb / (1.0 - Cs), 1.0);\n}\nfloat softLight(in float Cb, in float Cs) {\nif (Cs <= 0.5) {\nreturn Cb - (1.0 - 2.0 * Cs) * Cb * (1.0 - Cb);\n}\nif (Cb <= 0.25) {\nreturn Cb + (2.0 * Cs - 1.0) * Cb * ((16.0 * Cb - 12.0) * Cb + 3.0);\n}\nreturn Cb + (2.0 * Cs - 1.0) * (sqrt(Cb) - Cb);\n}\nfloat vividLight(in float Cb, in float Cs) {\nreturn (1.0 - step(0.5, Cs)) * colorBurn(Cb, 2.0 * Cs) + step(0.5, Cs) * colorDodge(Cb, (2.0 * (Cs - 0.5)));\n}\nfloat minv3(in vec3 c) {\nreturn min(min(c.r, c.g), c.b);\n}\nfloat maxv3(in vec3 c) {\nreturn max(max(c.r, c.g), c.b);\n}\nfloat lumv3(in vec3 c) {\nreturn dot(c, vec3(0.3, 0.59, 0.11));\n}\nfloat satv3(vec3 c) {\nreturn maxv3(c) - minv3(c);\n}\nvec3 clipColor(vec3 color) {\nfloat lum = lumv3(color);\nfloat mincol = minv3(color);\nfloat maxcol = maxv3(color);\nif (mincol < 0.0) {\ncolor = lum + ((color - lum) * lum) / (lum - mincol);\n}\nif (maxcol > 1.0) {\ncolor = lum + ((color - lum) * (1.0 - lum)) / (maxcol - lum);\n}\nreturn color;\n}\nvec3 setLum(vec3 cbase, vec3 clum) {\nfloat lbase = lumv3(cbase);\nfloat llum = lumv3(clum);\nfloat ldiff = llum - lbase;\nvec3 color = cbase + vec3(ldiff);\nreturn clipColor(color);\n}\nvec3 setLumSat(vec3 cbase, vec3 csat, vec3 clum)\n{\nfloat minbase = minv3(cbase);\nfloat sbase = satv3(cbase);\nfloat ssat = satv3(csat);\nvec3 color;\nif (sbase > 0.0) {\ncolor = (cbase - minbase) * ssat / sbase;\n} else {\ncolor = vec3(0.0);\n}\nreturn setLum(color, clum);\n}\nvoid main() {\nvec4 src = texture2D(u_layerTexture, v_uv);\n#ifdef NORMAL\ngl_FragColor = src *  u_opacity;\n#else\nvec4 dst = texture2D(u_backbufferTexture, v_uv);\nvec3 Cs = src.a == 0.0 ? src.rgb : vec3(src.rgb / src.a);\nvec3 Cb = dst.a == 0.0 ? dst.rgb : vec3(dst.rgb / dst.a);\nfloat as = u_opacity * src.a;\nfloat ab = dst.a;\n#ifdef DESTINATION_OVER\ngl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb, as + ab - as * ab);\n#endif\n#ifdef SOURCE_IN\nvec4 color = vec4(as * Cs * ab, as * ab);\nvec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);\ngl_FragColor = color + fadeColor;\n#endif\n#ifdef DESTINATION_IN\nvec4 color = vec4(ab * Cb * as, ab * as);\nvec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);\ngl_FragColor = color + fadeColor;\n#endif\n#ifdef SOURCE_OUT\ngl_FragColor = vec4(as * Cs * (1.0 - ab), as * (1.0 - ab));\n#endif\n#ifdef DESTINATION_OUT\ngl_FragColor = vec4(ab * Cb * (1.0 - as), ab * (1.0 - as));\n#endif\n#ifdef SOURCE_ATOP\ngl_FragColor = vec4(as * Cs * ab + ab * Cb * (1.0 - as), ab);\n#endif\n#ifdef DESTINATION_ATOP\ngl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * as, as);\n#endif\n#ifdef XOR\ngl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * (1.0 - as),\nas * (1.0 - ab) + ab * (1.0 - as));\n#endif\n#ifdef MULTIPLY\ngl_FragColor = vec4(as * Cs * ab * Cb + (1.0 - ab) * as * Cs + (1.0 - as) * ab * Cb,\nas + ab * (1.0 - as));\n#endif\n#ifdef SCREEN\ngl_FragColor = vec4((Cs + Cb - Cs * Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef OVERLAY\nvec3 f = vec3(overlay(Cb.r, Cs.r), overlay(Cb.g, Cs.g), overlay(Cb.b, Cs.b));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef DARKEN\ngl_FragColor = vec4(min(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef LIGHTER\ngl_FragColor = vec4(as * Cs + ab * Cb, as + ab);\n#endif\n#ifdef LIGHTEN\ngl_FragColor = vec4(max(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef COLOR_DODGE\nvec3 f = clamp(vec3(colorDodge(Cb.r, Cs.r), colorDodge(Cb.g, Cs.g), colorDodge(Cb.b, Cs.b)), vec3(0.0), vec3(1.0));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef COLOR_BURN\nvec3 f = vec3(colorBurn(Cb.r, Cs.r), colorBurn(Cb.g, Cs.g), colorBurn(Cb.b, Cs.b));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef HARD_LIGHT\nvec3 f = vec3(hardLight(Cb.r, Cs.r), hardLight(Cb.g, Cs.g), hardLight(Cb.b, Cs.b));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef SOFT_LIGHT\nvec3 f = vec3(softLight(Cb.r, Cs.r), softLight(Cb.g, Cs.g), softLight(Cb.b, Cs.b));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef DIFFERENCE\ngl_FragColor = vec4(abs(Cb - Cs) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef EXCLUSION\nvec3 f = Cs + Cb - 2.0 * Cs * Cb;\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef INVERT\ngl_FragColor = vec4((1.0 - Cb) * as * ab + Cb * ab * (1.0 - as), ab);\n#endif\n#ifdef VIVID_LIGHT\nvec3 f = vec3(clamp(vividLight(Cb.r, Cs.r), 0.0, 1.0),\nclamp(vividLight(Cb.g, Cs.g), 0.0, 1.0),\nclamp(vividLight(Cb.b, Cs.b), 0.0, 1.0));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef HUE\nvec3 f = setLumSat(Cs,Cb,Cb);\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef SATURATION\nvec3 f = setLumSat(Cb,Cs,Cb);\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef COLOR\nvec3 f = setLum(Cs,Cb);\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef LUMINOSITY\nvec3 f = setLum(Cb,Cs);\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef PLUS\ngl_FragColor = clamp(vec4(src.r + Cb.r, src.g + Cb.g, src.b + Cb.b, as + ab), 0.0, 1.0);\n#endif\n#ifdef MINUS\ngl_FragColor = vec4(clamp(vec3(Cb.r - src.r, Cb.g - src.g, Cb.b - src.b), 0.0, 1.0), ab * as);\n#endif\n#ifdef AVERAGE\nvec3 f = (Cb + Cs) / 2.0;\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#ifdef REFLECT\nvec3 f = clamp(vec3(reflectBlend(Cb.r, Cs.r),\nreflectBlend(Cb.g, Cs.g),\nreflectBlend(Cb.b, Cs.b)), vec3(0.0), vec3(1.0));\ngl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\nas + ab * (1.0 - as));\n#endif\n#endif\n}",
    "blend.vert": "attribute vec2 a_position;\nvarying mediump vec2 v_uv;\nvoid main(void) {\ngl_Position = vec4(a_position , 0.0, 1.0);\nv_uv = (a_position + 1.0) / 2.0;\n}"
  },
  debug: {
    overlay: {
      "overlay.frag": "precision mediump float;\nvarying vec4 v_color;\nvoid main(void) {\ngl_FragColor = v_color;\n}",
      "overlay.vert": "attribute vec3 a_PositionAndFlags;\nuniform mat3 u_dvsMat3;\nuniform vec4 u_colors[4];\nuniform float u_opacities[4];\nvarying vec4 v_color;\nvoid main(void) {\nvec2 position = a_PositionAndFlags.xy;\nfloat flags = a_PositionAndFlags.z;\nint colorIndex = int(mod(flags, 4.0));\nvec4 color;\nfor (int i = 0; i < 4; i++) {\ncolor = u_colors[i];\nif (i == colorIndex) {\nbreak;\n}\n}\nint opacityIndex = int(mod(floor(flags / 4.0), 4.0));\nfloat opacity;\nfor (int i = 0; i < 4; i++) {\nopacity = u_opacities[i];\nif (i == opacityIndex) {\nbreak;\n}\n}\nv_color = color * opacity;\ngl_Position = vec4((u_dvsMat3 * vec3(position, 1.0)).xy, 0.0, 1.0);\n}"
    }
  },
  dot: {
    dot: {
      "dot.frag": "precision mediump float;\nvarying vec4 v_color;\nvarying float v_dotRatio;\nvarying float v_invEdgeRatio;\nuniform highp float u_tileZoomFactor;\nvoid main()\n{\nfloat dist = length(gl_PointCoord - vec2(.5, .5)) * 2.;\nfloat alpha = smoothstep(0., 1., v_invEdgeRatio * (dist - v_dotRatio) + 1.);\ngl_FragColor = v_color * alpha;\n}",
      "dot.vert": "precision highp float;\nattribute vec2 a_pos;\nuniform sampler2D u_texture;\nuniform highp mat3 u_dvsMat3;\nuniform highp float u_tileZoomFactor;\nuniform highp float u_dotSize;\nuniform highp float u_pixelRatio;\nvarying vec2 v_pos;\nvarying vec4 v_color;\nvarying float v_dotRatio;\nvarying float v_invEdgeRatio;\nconst float EPSILON = 0.000001;\nvoid main()\n{\nmat3 tileToTileTexture = mat3(  1., 0., 0.,\n0., -1., 0.,\n0., 1., 1.  );\nvec3 texCoords = tileToTileTexture * vec3(a_pos.xy / 512., 1.);\nv_color = texture2D(u_texture, texCoords.xy);\nfloat smoothEdgeWidth = max(u_dotSize / 2., 1.) ;\nfloat z = 0.;\nz += 2.0 * step(v_color.a, EPSILON);\ngl_PointSize = (smoothEdgeWidth + u_dotSize);\ngl_Position = vec4((u_dvsMat3 * vec3(a_pos + .5, 1.)).xy, z, 1.);\nv_dotRatio = u_dotSize / gl_PointSize;\nv_invEdgeRatio = -1. / ( smoothEdgeWidth / gl_PointSize );\ngl_PointSize  *= (u_pixelRatio * u_tileZoomFactor);\n}"
    }
  },
  filtering: {
    "bicubic.glsl": "vec4 computeWeights(float v) {\nfloat b = 1.0 / 6.0;\nfloat v2 = v * v;\nfloat v3 = v2 * v;\nfloat w0 = b * (-v3 + 3.0 * v2 - 3.0 * v + 1.0);\nfloat w1 = b * (3.0 * v3  - 6.0 * v2 + 4.0);\nfloat w2 = b * (-3.0 * v3 + 3.0 * v2 + 3.0 * v + 1.0);\nfloat w3 = b * v3;\nreturn vec4(w0, w1, w2, w3);\n}\nvec4 bicubicOffsetsAndWeights(float v) {\nvec4 w = computeWeights(v);\nfloat g0 = w.x + w.y;\nfloat g1 = w.z + w.w;\nfloat h0 = 1.0 - (w.y / g0) + v;\nfloat h1 = 1.0 + (w.w / g1) - v;\nreturn vec4(h0, h1, g0, g1);\n}\nvec4 sampleBicubicBSpline(sampler2D sampler, vec2 coords, vec2 texSize) {\nvec2 eX = vec2(1.0 / texSize.x, 0.0);\nvec2 eY = vec2(0.0, 1.0 / texSize.y);\nvec2 texel = coords * texSize - 0.5;\nvec3 hgX = bicubicOffsetsAndWeights(fract(texel).x).xyz;\nvec3 hgY = bicubicOffsetsAndWeights(fract(texel).y).xyz;\nvec2 coords10 = coords + hgX.x * eX;\nvec2 coords00 = coords - hgX.y * eX;\nvec2 coords11 = coords10 + hgY.x * eY;\nvec2 coords01 = coords00 + hgY.x * eY;\ncoords10 = coords10 - hgY.y * eY;\ncoords00 = coords00 - hgY.y * eY;\nvec4 color00 = texture2D(sampler, coords00);\nvec4 color10 = texture2D(sampler, coords10);\nvec4 color01 = texture2D(sampler, coords01);\nvec4 color11 = texture2D(sampler, coords11);\ncolor00 = mix(color00, color01, hgY.z);\ncolor10 = mix(color10, color11, hgY.z);\ncolor00 = mix(color00, color10, hgX.z);\nreturn color00;\n}",
    "bilinear.glsl": "vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {\nvec2 texelStart = floor(coords * texSize);\nvec2 coord0 = texelStart / texSize;\nvec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;\nvec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;\nvec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;\nvec4 color0 = texture2D(sampler, coord0);\nvec4 color1 = texture2D(sampler, coord1);\nvec4 color2 = texture2D(sampler, coord2);\nvec4 color3 = texture2D(sampler, coord3);\nvec2 blend = fract(coords * texSize);\nvec4 color01 = mix(color0, color1, blend.x);\nvec4 color23 = mix(color2, color3, blend.x);\nvec4 color = mix(color01, color23, blend.y);\n#ifdef NNEDGE\nfloat alpha = floor(color0.a * color1.a * color2.a * color3.a + 0.5);\ncolor = color * alpha + (1.0 - alpha) * texture2D(sampler, coords);\n#endif\nreturn color;\n}",
    "epx.glsl": "vec4 sampleEPX(sampler2D sampler, float size, vec2 coords, vec2 texSize) {\nvec2 invSize = 1.0 / texSize;\nvec2 texel = coords * texSize;\nvec2 texel_i = floor(texel);\nvec2 texel_frac = fract(texel);\nvec4 colorP = texture2D(sampler, texel_i * invSize);\nvec4 colorP1 = vec4(colorP);\nvec4 colorP2 = vec4(colorP);\nvec4 colorP3 = vec4(colorP);\nvec4 colorP4 = vec4(colorP);\nvec4 colorA = texture2D(sampler, (texel_i - vec2(0.0, 1.0)) * invSize);\nvec4 colorB = texture2D(sampler, (texel_i + vec2(1.0, 0.0)) * invSize);\nvec4 colorC = texture2D(sampler, (texel_i - vec2(1.0, 0.0)) * invSize);\nvec4 colorD = texture2D(sampler, (texel_i + vec2(0.0, 1.0)) * invSize);\nif (colorC == colorA && colorC != colorD && colorA != colorB) {\ncolorP1 = colorA;\n}\nif (colorA == colorB && colorA != colorC && colorB != colorD) {\ncolorP2 = colorB;\n}\nif (colorD == colorC && colorD != colorB && colorC != colorA) {\ncolorP3 = colorC;\n}\nif (colorB == colorD && colorB != colorA && colorD != colorC) {\ncolorP4 = colorD;\n}\nvec4 colorP12 = mix(colorP1, colorP2, texel_frac.x);\nvec4 colorP34 = mix(colorP1, colorP2, texel_frac.x);\nreturn mix(colorP12, colorP34, texel_frac.y);\n}"
  },
  fx: {
    integrate: {
      "integrate.frag": "precision mediump float;\nuniform lowp sampler2D u_sourceTexture;\nuniform lowp sampler2D u_maskTexture;\nuniform mediump float u_zoomLevel;\nuniform highp float u_timeDelta;\nuniform highp float u_animationTime;\nvarying highp vec2 v_texcoord;\n#include <materials/utils.glsl>\nvoid main()\n{\n#ifdef DELTA\nvec4 texel = texture2D(u_sourceTexture, v_texcoord);\nvec4 data0 = texture2D(u_maskTexture, v_texcoord);\nfloat flags = data0.r * 255.0;\nfloat groupMinZoom = data0.g * 255.0;\nfloat epsilon = 5.;\nfloat wouldClip = float(groupMinZoom < epsilon);\nfloat direction = wouldClip * 1.0 + (1.0 - wouldClip) * -1.0;\nfloat dt = u_timeDelta / max(u_animationTime, 0.0001);\nvec4 nextState = vec4(texel + direction * dt);\ngl_FragColor =  vec4(nextState);\n#elif defined(UPDATE)\nvec4 texel = texture2D(u_sourceTexture, v_texcoord);\ngl_FragColor = texel;\n#endif\n}",
      "integrate.vert": "precision mediump float;\nattribute vec2 a_pos;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos;\ngl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n}"
    }
  },
  heatmap: {
    heatmapResolve: {
      "heatmapResolve.frag": "precision highp float;\n#ifdef HEATMAP_PRECISION_HALF_FLOAT\n#define COMPRESSION_FACTOR 4.0\n#else\n#define COMPRESSION_FACTOR 1.0\n#endif\nuniform sampler2D u_texture;\nuniform sampler2D u_gradient;\nuniform vec2 u_densityMinAndInvRange;\nuniform float u_densityNormalization;\nvarying vec2 v_uv;\nvoid main() {\nvec4 data = texture2D(u_texture, v_uv);\nfloat density = data.r * COMPRESSION_FACTOR;\ndensity *= u_densityNormalization;\ndensity = (density - u_densityMinAndInvRange.x) * u_densityMinAndInvRange.y;\nvec4 color = texture2D(u_gradient, vec2(density, 0.5));\ngl_FragColor = vec4(color.rgb * color.a, color.a);\n}",
      "heatmapResolve.vert": "precision highp float;\nattribute vec2 a_pos;\nvarying vec2 v_uv;\nvoid main() {\nv_uv = a_pos;\ngl_Position = vec4(a_pos * 2.0 - 1.0, 1., 1.);\n}"
    }
  },
  highlight: {
    "blur.frag": "varying mediump vec2 v_texcoord;\nuniform mediump vec4 u_direction;\nuniform mediump mat4 u_channelSelector;\nuniform mediump float u_sigma;\nuniform sampler2D u_texture;\nmediump float gauss1(mediump vec2 dir) {\nreturn exp(-dot(dir, dir) / (2.0 * u_sigma * u_sigma));\n}\nmediump vec4 selectChannel(mediump vec4 sample) {\nreturn u_channelSelector * sample;\n}\nvoid accumGauss1(mediump float i, inout mediump float tot, inout mediump float weight) {\nmediump float w = gauss1(i * u_direction.xy);\ntot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw))[3] * w;\nweight += w;\n}\nvoid main(void) {\nmediump float tot = 0.0;\nmediump float weight = 0.0;\naccumGauss1(-5.0, tot, weight);\naccumGauss1(-4.0, tot, weight);\naccumGauss1(-3.0, tot, weight);\naccumGauss1(-2.0, tot, weight);\naccumGauss1(-1.0, tot, weight);\naccumGauss1(0.0, tot, weight);\naccumGauss1(1.0, tot, weight);\naccumGauss1(2.0, tot, weight);\naccumGauss1(3.0, tot, weight);\naccumGauss1(4.0, tot, weight);\naccumGauss1(5.0, tot, weight);\ngl_FragColor = vec4(0.0, 0.0, 0.0, tot / weight);\n}",
    "highlight.frag": "varying mediump vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform mediump float u_sigma;\nuniform sampler2D u_shade;\nuniform mediump vec2 u_minMaxDistance;\nmediump float estimateDistance() {\nmediump float y = texture2D(u_texture, v_texcoord)[3];\nconst mediump float y0 = 0.5;\nmediump float m0 = 1.0 / (sqrt(2.0 * 3.1415) * u_sigma);\nmediump float d = (y - y0) / m0;\nreturn d;\n}\nmediump vec4 shade(mediump float d) {\nmediump float mappedDistance = (d - u_minMaxDistance.x) / (u_minMaxDistance.y - u_minMaxDistance.x);\nmappedDistance = clamp(mappedDistance, 0.0, 1.0);\nreturn texture2D(u_shade, vec2(mappedDistance, 0.5));\n}\nvoid main(void) {\nmediump float d = estimateDistance();\ngl_FragColor = shade(d);\n}",
    "textured.vert": "attribute mediump vec2 a_position;\nattribute mediump vec2 a_texcoord;\nvarying mediump vec2 v_texcoord;\nvoid main(void) {\ngl_Position = vec4(a_position, 0.0, 1.0);\nv_texcoord = a_texcoord;\n}"
  },
  magnifier: {
    "magnifier.frag": "uniform lowp vec4 u_background;\nuniform mediump sampler2D u_readbackTexture;\nuniform mediump sampler2D u_maskTexture;\nuniform mediump sampler2D u_overlayTexture;\nuniform bool u_maskEnabled;\nuniform bool u_overlayEnabled;\nvarying mediump vec2 v_texCoord;\nconst lowp float barrelFactor = 1.1;\nlowp vec2 barrel(lowp vec2 uv) {\nlowp vec2 uvn = uv * 2.0 - 1.0;\nif (uvn.x == 0.0 && uvn.y == 0.0) {\nreturn vec2(0.5, 0.5);\n}\nlowp float theta = atan(uvn.y, uvn.x);\nlowp float r = pow(length(uvn), barrelFactor);\nreturn r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;\n}\nvoid main(void)\n{\nlowp vec4 color = texture2D(u_readbackTexture, barrel(v_texCoord));\ncolor = (color + (1.0 - color.a) * u_background);\nlowp float mask = u_maskEnabled ? texture2D(u_maskTexture, v_texCoord).a : 1.0;\ncolor *= mask;\nlowp vec4 overlayColor = u_overlayEnabled ? texture2D(u_overlayTexture, v_texCoord) : vec4(0);\ngl_FragColor = overlayColor + (1.0 - overlayColor.a) * color;\n}",
    "magnifier.vert": "precision mediump float;\nattribute mediump vec2 a_pos;\nuniform mediump vec4 u_drawPos;\nvarying mediump vec2 v_texCoord;\nvoid main(void)\n{\nv_texCoord = a_pos;\ngl_Position = vec4(u_drawPos.xy + vec2(a_pos - 0.5) * u_drawPos.zw, 0.0, 1.0);\n}"
  },
  materials: {
    "attributeData.glsl": "uniform highp sampler2D filterFlags;\nuniform highp sampler2D animation;\nuniform highp sampler2D gpgpu;\nuniform highp sampler2D visualVariableData;\nuniform highp sampler2D dataDriven0;\nuniform highp sampler2D dataDriven1;\nuniform highp sampler2D dataDriven2;\nuniform float size;\nhighp vec2 getAttributeDataCoords(in highp vec3 id) {\nhighp vec3  texel = unpackDisplayIdTexel(id);\nhighp float u32 = float(int(texel.r) + int(texel.g) * 256 + int(texel.b) * 256 * 256);\nhighp float col = mod(u32, size);\nhighp float row = (u32 - col) / size;\nhighp float u = col / size;\nhighp float v = row / size;\nreturn vec2(u, v);\n}\nhighp vec2 getAttributeDataTextureCoords(in highp vec3 id) {\nreturn (getAttributeDataCoords(id) * 2.0) - 1.0 + (.5 / vec2(size));\n}\nhighp vec4 getFilterData(in highp vec3 id) {\nvec2 coords = getAttributeDataCoords(id);\nreturn texture2D(filterFlags, coords);\n}\nhighp vec4 getAnimation(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(animation, coords);\n}\nhighp vec4 getVisualVariableData(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(visualVariableData, coords);\n}\nhighp vec4 getDataDriven0(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(dataDriven0, coords);\n}\nhighp vec4 getDataDriven1(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(dataDriven1, coords);\n}\nhighp vec4 getGPGPU(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(gpgpu, coords);\n}\nhighp vec4 getDataDriven2(in highp vec3 id) {\nhighp vec2 coords = getAttributeDataCoords(id);\nreturn texture2D(dataDriven2, coords);\n}\nfloat u88VVToFloat(in vec2 v) {\nbool isMagic = v.x == 255.0 && v.y == 255.0;\nif (isMagic) {\nreturn NAN_MAGIC_NUMBER;\n}\nreturn (v.x + v.y * float(0x100)) - 32768.0;\n}",
    "barycentric.glsl": "float inTriangle(vec3 bary) {\nvec3 absBary = abs(bary);\nreturn step((absBary.x + absBary.y + absBary.z), 1.05);\n}\nvec3 xyToBarycentric(in vec2 pos, in vec2 v0,  in vec2 v1, in vec2 v2) {\nmat3 xyToBarycentricMat3 = mat3(\nv1.x * v2.y - v2.x * v1.y, v2.x * v0.y - v0.x * v2.y, v0.x * v1.y - v1.x * v0.y,\nv1.y - v2.y, v2.y - v0.y, v0.y - v1.y,\nv2.x - v1.x, v0.x - v2.x, v1.x - v0.x\n);\nfloat A2 = v0.x * (v1.y - v2.y) + v1.x * (v2.y - v0.y) + v2.x * (v0.y - v1.y);\nreturn (1. / A2) * xyToBarycentricMat3 * vec3(1., pos);\n}",
    "constants.glsl": "const float C_DEG_TO_RAD = 3.14159265359 / 180.0;\nconst float C_256_TO_RAD = 3.14159265359 / 128.0;\nconst float C_RAD_TO_DEG = 180.0 / 3.141592654;\nconst float POSITION_PRECISION = 1.0 / 8.0;\nconst float FILL_POSITION_PRECISION = 1.0 / 1.0;\nconst float SOFT_EDGE_RATIO = 1.0;\nconst float THIN_LINE_WIDTH_FACTOR = 1.1;\nconst float THIN_LINE_HALF_WIDTH = 1.0;\nconst float EXTRUDE_SCALE_PLACEMENT_PADDING = 1.0 / 4.0;\nconst float OFFSET_PRECISION = 1.0 / 8.0;\nconst float OUTLINE_SCALE = 1.0 / 5.0;\nconst float SDF_FONT_SIZE = 24.0;\nconst float MAX_SDF_DISTANCE = 8.0;\nconst float PLACEMENT_PADDING = 8.0;\nconst float EPSILON = 0.00001;\nconst float EPSILON_HITTEST = 0.05;\nconst int MAX_FILTER_COUNT = 2;\nconst int ATTR_VV_SIZE = 0;\nconst int ATTR_VV_COLOR = 1;\nconst int ATTR_VV_OPACITY = 2;\nconst int ATTR_VV_ROTATION = 3;\nconst highp float NAN_MAGIC_NUMBER = 1e-30;\nconst int BITSET_GENERIC_LOCK_COLOR = 1;\nconst int BITSET_GENERIC_CONSIDER_ALPHA_ONLY = 4;\nconst int BITSET_MARKER_ALIGNMENT_MAP = 0;\nconst int BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE = 2;\nconst int BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY = 3;\nconst int BITSET_TYPE_FILL_OUTLINE = 0;\nconst int BITSET_FILL_RANDOM_PATTERN_OFFSET = 2;\nconst int BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR = 3;\nconst int BITSET_FILL_HAS_PATTERN_HEIGHT_PRECISION_FACTOR = 5;\nconst int BITSET_FILL_HAS_PATTERN_WIDTH_PRECISION_FACTOR = 6;\nconst int BITSET_LINE_SCALE_DASH = 2;",
    fill: {
      "common.glsl": "#include <materials/symbologyTypeUtils.glsl>\n#ifdef PATTERN\nuniform mediump vec2 u_mosaicSize;\nvarying mediump float v_sampleAlphaOnly;\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nuniform lowp vec4 u_isActive[ 2 ];\nuniform highp float u_dotValue;\nuniform highp float u_tileDotsOverArea;\nuniform highp float u_dotTextureDotCount;\nuniform mediump float u_tileZoomFactor;\n#endif\nvarying highp vec3 v_id;\nvarying lowp vec4 v_color;\nvarying lowp float v_opacity;\nvarying mediump vec4 v_aux1;\n#ifdef PATTERN\nvarying mediump vec2 v_tileTextureCoord;\n#endif\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nvarying lowp float v_isOutline;\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nvarying highp vec2 v_dotTextureCoords;\nvarying highp vec4 v_dotThresholds[ 2 ];\n#endif",
      "fill.frag": "precision highp float;\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/fill/common.glsl>\n#ifdef PATTERN\nuniform lowp sampler2D u_texture;\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nuniform mediump mat4 u_dotColors[ 2 ];\nuniform sampler2D u_dotTextures[ 2 ];\nuniform vec4 u_dotBackgroundColor;\n#endif\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.frag>\nlowp vec4 drawLine() {\nfloat v_lineWidth = v_aux1.x;\nvec2  v_normal    = v_aux1.yz;\nLineData inputs = LineData(\nv_color,\nv_normal,\nv_lineWidth,\nv_opacity,\nv_id\n);\nreturn shadeLine(inputs);\n}\n#endif\nlowp vec4 drawFill() {\nlowp vec4 out_color = vec4(0.);\n#ifdef HITTEST\nout_color = v_color;\n#elif defined(PATTERN)\nmediump vec4 v_tlbr = v_aux1;\nmediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\nmediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\nlowp vec4 color = texture2D(u_texture, samplePos);\nif (v_sampleAlphaOnly > 0.5) {\ncolor.rgb = vec3(color.a);\n}\nout_color = v_opacity * v_color * color;\n#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY && !defined(HIGHLIGHT)\nvec4 textureThresholds0 = texture2D(u_dotTextures[0], v_dotTextureCoords);\nvec4 textureThresholds1 = texture2D(u_dotTextures[1], v_dotTextureCoords);\nvec4 difference0 = v_dotThresholds[0] - textureThresholds0;\nvec4 difference1 = v_dotThresholds[1] - textureThresholds1;\n#ifdef DD_DOT_BLENDING\nvec4 isPositive0 = step(0.0, difference0);\nvec4 isPositive1 = step(0.0, difference1);\nfloat weightSum = dot(isPositive0, difference0) + dot(isPositive1, difference1);\nfloat lessThanEqZero = step(weightSum, 0.0);\nfloat greaterThanZero = 1.0 - lessThanEqZero ;\nfloat divisor = (weightSum + lessThanEqZero);\nvec4 weights0 = difference0 * isPositive0 / divisor;\nvec4 weights1 = difference1 * isPositive1 / divisor;\nvec4 dotColor = u_dotColors[0] * weights0 + u_dotColors[1] * weights1;\nvec4 preEffectColor = greaterThanZero * dotColor + lessThanEqZero * u_dotBackgroundColor;\n#else\nfloat diffMax = max(max4(difference0), max4(difference1));\nfloat lessThanZero = step(diffMax, 0.0);\nfloat greaterOrEqZero = 1.0 - lessThanZero;\nvec4 isMax0 = step(diffMax, difference0);\nvec4 isMax1 = step(diffMax, difference1);\nvec4 dotColor = u_dotColors[0] * isMax0 + u_dotColors[1] * isMax1;\nvec4 preEffectColor = greaterOrEqZero * dotColor + lessThanZero * u_dotBackgroundColor;\n#endif\nout_color = preEffectColor;\n#else\nout_color = v_opacity * v_color;\n#endif\n#ifdef HIGHLIGHT\nout_color.a = 1.0;\n#endif\nreturn out_color;\n}\nvoid main() {\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nif (v_isOutline > 0.5) {\ngl_FragColor = drawLine();\n} else {\ngl_FragColor = drawFill();\n}\n#else\ngl_FragColor = drawFill();\n#endif\n}",
      "fill.vert": "#include <materials/symbologyTypeUtils.glsl>\n#define PACKED_LINE\nprecision highp float;\nattribute float a_bitset;\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nattribute float a_inverseArea;\nvec4 a_color = vec4(0.0, 0.0, 0.0, 1.0);\nvec2 a_zoomRange = vec2(0.0, 10000.0);\n#else\nattribute vec4 a_color;\nattribute vec4 a_aux2;\nattribute vec4 a_aux3;\n#ifndef SYMBOLOGY_TYPE_IS_SIMPLE_LIKE\nattribute vec4 a_aux1;\nattribute vec2 a_zoomRange;\n#else\nvec2 a_zoomRange = vec2(0.0, 10000.0);\n#endif\n#endif\nuniform vec2 u_tileOffset;\nuniform vec2 u_maxIntNumOfCrossing;\n#include <util/encoding.glsl>\n#include <materials/vcommon.glsl>\n#include <materials/fill/common.glsl>\n#include <materials/fill/hittest.glsl>\nconst float INV_SCALE_COMPRESSION_FACTOR = 1.0 / 128.0;\nconst float MAX_REPRESENTABLE_INT = 16777216.0;\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nvec4 dotThreshold(vec4 featureAttrOverFeatureArea, float dotValue, float tileDotsOverArea) {\nreturn featureAttrOverFeatureArea * (1.0 / dotValue)  * (1.0 / tileDotsOverArea);\n}\n#endif\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.vert>\nvoid drawLine(out lowp vec4 out_color, out highp vec3 out_pos) {\nLineData outputs = buildLine(\nout_pos,\na_id,\na_pos,\na_color,\n(a_aux3.xy - 128.) / 16.,\n(a_aux3.zw - 128.) / 16.,\n0.,\na_aux2.z / 16.,\na_bitset,\nvec4(0.),\nvec2(0.),\na_aux2.w / 16.\n);\nv_id      = outputs.id;\nv_opacity = outputs.opacity;\nv_aux1    = vec4(outputs.lineHalfWidth, outputs.normal, 0.);\nout_color = outputs.color;\n}\n#endif\nvoid drawFill(out lowp vec4 out_color, out highp vec3 out_pos) {\nfloat a_bitSet = a_bitset;\nout_color = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);\nv_opacity = getOpacity();\nv_id      = norm(a_id);\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nmat3 tileToTileNormalized = mat3(  2. / 512.,  0.,  0.,\n0., -2. / 512.,  0.,\n-1.,  1.,  1.  );\nout_pos   = tileToTileNormalized * vec3((a_pos * FILL_POSITION_PRECISION), 1.);\n#else\nout_pos   = u_dvsMat3 * vec3(a_pos * FILL_POSITION_PRECISION, 1.);\n#endif\n#ifdef PATTERN\nvec4  a_tlbr   = a_aux1;\nfloat a_width  = a_aux2.x;\nfloat a_height = a_aux2.y;\nvec2  a_offset = a_aux2.zw;\nvec2  a_scale  = a_aux3.xy;\nfloat a_angle  = a_aux3.z;\nif (getBit(a_bitset, BITSET_FILL_HAS_PATTERN_WIDTH_PRECISION_FACTOR) > 0.5) {\na_width *= INV_SCALE_COMPRESSION_FACTOR;\n}\nif (getBit(a_bitset, BITSET_FILL_HAS_PATTERN_HEIGHT_PRECISION_FACTOR) > 0.5) {\na_height *= INV_SCALE_COMPRESSION_FACTOR;\n}\nvec2 scale = INV_SCALE_COMPRESSION_FACTOR * a_scale;\nfloat width = u_zoomFactor * a_width * scale.x;\nfloat height = u_zoomFactor * a_height * scale.y;\nfloat angle = C_256_TO_RAD * a_angle;\nfloat sinA = sin(angle);\nfloat cosA = cos(angle);\nfloat dx = 0.0;\nfloat dy = 0.0;\nif (getBit(a_bitset, BITSET_FILL_RANDOM_PATTERN_OFFSET) > 0.5) {\nfloat id = rgba2float(vec4(a_id, 0.0));\ndx = rand(vec2(id, 0.0));\ndy = rand(vec2(0.0, id));\n}\nmat3 patternMatrix = mat3(cosA / width, sinA / height, 0,\n-sinA / width, cosA / height, 0,\ndx,            dy,           1);\nvec2 patternSize = vec2(a_width, a_height);\nvec2 numPatternsPerMaxInt = vec2(MAX_REPRESENTABLE_INT) / patternSize;\nvec2 maxIntCrossingOffsetCorrection = patternSize * fract(u_maxIntNumOfCrossing * numPatternsPerMaxInt);\nvec2 tileOffset = u_tileOffset + maxIntCrossingOffsetCorrection - 0.5 * patternSize;\ntileOffset = vec2(tileOffset.x * cosA - tileOffset.y * sinA, tileOffset.x * sinA + tileOffset.y * cosA);\ntileOffset = mod(tileOffset, patternSize);\nvec2 symbolOffset = u_zoomFactor * scale * vec2(a_offset - tileOffset) / vec2(width, height);\nv_tileTextureCoord = (patternMatrix * vec3(a_pos * FILL_POSITION_PRECISION, 1.0)).xy - symbolOffset;\nv_aux1 = a_tlbr / u_mosaicSize.xyxy;\nv_sampleAlphaOnly = getBit(a_bitset, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);\nif (getBit(a_bitSet, BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR) > 0.5) {\n#ifdef VV_COLOR\nv_sampleAlphaOnly *= (1.0 - float(isNan(VV_ADATA[ATTR_VV_COLOR]))) * (1.0 - getBit(a_bitSet, BITSET_GENERIC_LOCK_COLOR));\n#else\nv_sampleAlphaOnly = 0.0;\n#endif\n}\n#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY\nvec4 ddAttributeData0 = getAttributeData2(a_id) * u_isActive[0] * a_inverseArea;\nvec4 ddAttributeData1 = getAttributeData3(a_id) * u_isActive[1] * a_inverseArea;\nfloat size = u_tileZoomFactor * 512.0 * 1.0 / u_pixelRatio;\nv_dotThresholds[0] = dotThreshold(ddAttributeData0, u_dotValue, u_tileDotsOverArea);\nv_dotThresholds[1] = dotThreshold(ddAttributeData1, u_dotValue, u_tileDotsOverArea);\nv_dotTextureCoords = (a_pos * FILL_POSITION_PRECISION + 0.5) / size;\n#endif\n}\n#ifdef HITTEST\nvoid draw(out lowp vec4 out_color, out highp vec3 out_pos) {\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nif (getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE) > 0.5) {\nout_pos = vec3(0., 0., 2.);\nreturn;\n}\n#endif\nhittestFill(out_color, out_pos);\ngl_PointSize = 1.0;\n}\n#elif defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)\nvoid draw(out lowp vec4 out_color, out highp vec3 out_pos) {\nv_isOutline = getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE);\nif (v_isOutline > 0.5) {\ndrawLine(out_color, out_pos);\n} else {\ndrawFill(out_color, out_pos);\n}\n}\n#else\n#define draw drawFill\n#endif\nvoid main()\n{\nINIT;\nhighp vec3 pos  = vec3(0.);\nhighp vec4 color  = vec4(0.);\ndraw(color, pos);\nv_color = color;\ngl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);\n}",
      "hittest.glsl": "#ifdef HITTEST\n#include <materials/hittest/common.glsl>\nattribute vec2 a_pos1;\nattribute vec2 a_pos2;\nvoid hittestFill(\nout lowp vec4 out_color,\nout highp vec3 out_pos\n) {\nvec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * FILL_POSITION_PRECISION, 1.);\nvec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * FILL_POSITION_PRECISION, 1.);\nvec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * FILL_POSITION_PRECISION, 1.);\nfloat hittestDist = u_hittestDist;\nfloat dist = distPointTriangle(u_hittestPos, pos.xy, pos1.xy, pos2.xy);\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nif (dist < 0. || dist >= hittestDist) {\nout_pos.z += 2.0;\n}\nout_color = vec4(1. / 255., 0, 0, dist == 0. ? (1. / 255.) : 0.);\n}\n#endif"
    },
    hittest: {
      "common.glsl": "#ifdef HITTEST\nuniform float hittestDist;\nuniform highp vec2 hittestPos;\nfloat projectScalar(vec2 a, vec2 b) {\nreturn dot(a, normalize(b));\n}\nfloat distPointSegment(vec2 p0, vec2 p1, vec2 p2) {\nvec2 L = p2 - p1;\nvec2 A = p0 - p1;\nfloat projAL = projectScalar(A, L);\nfloat t = clamp(projAL / length(L), 0., 1.);\nreturn distance(p0, p1 + t * (p2 - p1));\n}\nvoid hittestMarker(out lowp vec4 out_color, out highp vec3 out_pos, in highp vec3 pos, float size) {\nfloat dist = distance(pos, vec3(hittestPos, 1.));\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nif ((dist - size) > hittestDist) {\nout_pos.z += 2.0;\n}\nout_color = vec4(1. / 255., 0, 0, (dist - size) < 0. ? (1. / 255.) : 0.);\n}\nfloat intersectPointTriangleBary(vec2 p, vec2 a, vec2 b, vec2 c) {\nreturn inTriangle(xyToBarycentric(p, a, b, c));\n}\nfloat distPointTriangle(vec2 p, vec2 a, vec2 b, vec2 c) {\nvec2 ba = b - a;\nvec2 ca = c - a;\nfloat crossProduct = ba.x * ca.y - ca.x * ba.y;\nbool isParallel = crossProduct < EPSILON_HITTEST && crossProduct > -EPSILON_HITTEST;\nif (isParallel) {\nreturn -1.;\n}\nif (intersectPointTriangleBary(p.xy, a, b, c) == 1.) {\nreturn 0.;\n}\nfloat distAB = distPointSegment(p, a, b);\nfloat distBC = distPointSegment(p, b, c);\nfloat distCA = distPointSegment(p, c, a);\nreturn min(min(distAB, distBC), distCA);\n}\n#endif"
    },
    icon: {
      "common.glsl": "#include <util/encoding.glsl>\nuniform lowp vec2 u_mosaicSize;\nvarying lowp vec4 v_color;\nvarying highp vec3 v_id;\nvarying highp vec4 v_sizeTex;\nvarying mediump vec3 v_pos;\nvarying lowp float v_opacity;\nuniform lowp sampler2D u_texture;\n#ifdef SDF\nvarying lowp vec4 v_outlineColor;\nvarying mediump float v_outlineWidth;\nvarying mediump float v_distRatio;\nvarying mediump float v_overridingOutlineColor;\nvarying mediump float v_isThin;\n#endif\n#ifdef SDF\nvec4 getColor(vec2 v_size, vec2 v_tex) {\n#ifdef HITTEST\nlowp vec4 fillPixelColor = vec4(1.0);\n#else\nlowp vec4 fillPixelColor = v_color;\n#endif\nfloat d = 0.5 - rgba2float(texture2D(u_texture, v_tex));\nfloat size = max(v_size.x, v_size.y);\nfloat dist = d * size * SOFT_EDGE_RATIO * v_distRatio;\nfillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\nfloat outlineWidth = v_outlineWidth;\n#ifdef HIGHLIGHT\noutlineWidth = max(outlineWidth, 4.0 * v_isThin);\n#endif\nif (outlineWidth > 0.25) {\nlowp vec4 outlinePixelColor = v_overridingOutlineColor * v_color + (1.0 - v_overridingOutlineColor) * v_outlineColor;\nfloat clampedOutlineSize = min(outlineWidth, size);\noutlinePixelColor *= clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);\nreturn v_opacity * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);\n}\nreturn v_opacity * fillPixelColor;\n}\n#else\nvec4 getColor(vec2 _v_size, vec2 v_tex) {\nlowp vec4 texColor = texture2D(u_texture, v_tex);\nreturn v_opacity * texColor * v_color;\n}\n#endif",
      heatmapAccumulate: {
        "common.glsl": "varying lowp vec4 v_hittestResult;\nvarying mediump vec2 v_offsetFromCenter;\nvarying highp float v_fieldValue;",
        "heatmapAccumulate.frag": "precision mediump float;\n#include <materials/icon/heatmapAccumulate/common.glsl>\n#ifdef HEATMAP_PRECISION_HALF_FLOAT\n#define COMPRESSION_FACTOR 0.25\n#else\n#define COMPRESSION_FACTOR 1.0\n#endif\nuniform lowp sampler2D u_texture;\nvoid main() {\n#ifdef HITTEST\ngl_FragColor = v_hittestResult;\n#else\nfloat radius = length(v_offsetFromCenter);\nfloat shapeWeight = step(radius, 1.0);\nfloat oneMinusRadiusSquared = 1.0 - radius * radius;\nfloat kernelWeight = oneMinusRadiusSquared * oneMinusRadiusSquared;\ngl_FragColor = vec4(shapeWeight * kernelWeight * v_fieldValue * COMPRESSION_FACTOR);\n#endif\n}",
        "heatmapAccumulate.vert": "precision highp float;\nattribute vec2 a_vertexOffset;\nvec4 a_color = vec4(0.0);\nvec2 a_zoomRange = vec2(0.0, 10000.0);\nuniform float u_radius;\nuniform float u_isFieldActive;\n#include <materials/vcommon.glsl>\n#include <materials/hittest/common.glsl>\n#include <materials/icon/heatmapAccumulate/common.glsl>\nvoid main() {\nfloat filterFlags = getFilterFlags();\n#ifdef HITTEST\nhighp vec4 out_hittestResult = vec4(0.);\nhighp vec3 out_pos = vec3(0.);\nvec3 pos = u_viewMat3 * u_tileMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);\nhittestMarker(out_hittestResult, out_pos, pos, u_radius);\nv_hittestResult = out_hittestResult;\ngl_PointSize = 1.;\ngl_Position = vec4(clip(a_color, out_pos, filterFlags, a_zoomRange), 1.0);\n#else\nv_offsetFromCenter = sign(a_vertexOffset);\nv_fieldValue = getAttributeData2(a_id).x * u_isFieldActive + 1.0 - u_isFieldActive;\nvec3 centerPos = u_dvsMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);\nvec3 vertexPos = centerPos + u_displayViewMat3 * vec3(v_offsetFromCenter, 0.0) * u_radius;\ngl_Position = vec4(clip(a_color, vertexPos, filterFlags, a_zoomRange), 1.0);\n#endif\n}"
      },
      "hittest.glsl": "#ifdef HITTEST\n#include <materials/hittest/common.glsl>\nattribute vec2 a_vertexOffset1;\nattribute vec2 a_vertexOffset2;\nattribute vec2 a_texCoords1;\nattribute vec2 a_texCoords2;\nvec2 getTextureCoords(in vec3 bary, in vec2 texCoords0, in vec2 texCoords1, in vec2 texCoords2) {\nreturn texCoords0 * bary.x + texCoords1 * bary.y + texCoords2 * bary.z;\n}\nvoid hittestIcon(\ninout lowp vec4 out_color,\nout highp vec3 out_pos,\nin vec3 pos,\nin vec3 offset,\nin vec2 size,\nin float scaleFactor,\nin float isMapAligned\n) {\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nvec3 posBase = u_viewMat3 * u_tileMat3  * pos;\nvec3 offset1 = scaleFactor * vec3(a_vertexOffset1 / 16.0, 0.);\nvec3 offset2 = scaleFactor * vec3(a_vertexOffset2 / 16.0, 0.);\nvec2 pos0    = (posBase + getMatrixNoDisplay(isMapAligned) * offset).xy;\nvec2 pos1    = (posBase + getMatrixNoDisplay(isMapAligned) * offset1).xy;\nvec2 pos2    = (posBase + getMatrixNoDisplay(isMapAligned) * offset2).xy;\nvec3 bary0 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, -u_hittestDist), pos0, pos1, pos2);\nvec3 bary1 = xyToBarycentric(u_hittestPos + vec2(0., -u_hittestDist), pos0, pos1, pos2);\nvec3 bary2 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, -u_hittestDist), pos0, pos1, pos2);\nvec3 bary3 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, 0.), pos0, pos1, pos2);\nvec3 bary4 = xyToBarycentric(u_hittestPos, pos0, pos1, pos2);\nvec3 bary5 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, 0.), pos0, pos1, pos2);\nvec3 bary6 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, u_hittestDist), pos0, pos1, pos2);\nvec3 bary7 = xyToBarycentric(u_hittestPos + vec2(0., u_hittestDist), pos0, pos1, pos2);\nvec3 bary8 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, u_hittestDist), pos0, pos1, pos2);\nvec2 tex0 = a_texCoords  / u_mosaicSize;\nvec2 tex1 = a_texCoords1 / u_mosaicSize;\nvec2 tex2 = a_texCoords2 / u_mosaicSize;\nfloat alphaSum = 0.;\nalphaSum += inTriangle(bary0) * getColor(size, getTextureCoords(bary0, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary1) * getColor(size, getTextureCoords(bary1, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary2) * getColor(size, getTextureCoords(bary2, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary3) * getColor(size, getTextureCoords(bary3, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary4) * getColor(size, getTextureCoords(bary4, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary5) * getColor(size, getTextureCoords(bary5, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary6) * getColor(size, getTextureCoords(bary6, tex0, tex1, tex2)).a;\nalphaSum += inTriangle(bary7) * getColor(size, getTextureCoords(bary7, tex0, tex1, tex2)).a;\nout_pos.z += step(alphaSum, .05) * 2.0;\nout_color = vec4(1. / 255., 0., 0., alphaSum / 255.);\n}\n#endif",
      "icon.frag": "precision mediump float;\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/icon/common.glsl>\nvoid main()\n{\n#ifdef HITTEST\nvec4 color = v_color;\n#else\nvec4 color = getColor(v_sizeTex.xy, v_sizeTex.zw);\n#endif\n#ifdef HIGHLIGHT\ncolor.a = step(1.0 / 255.0, color.a);\n#endif\ngl_FragColor = color;\n}",
      "icon.vert": "precision highp float;\nattribute vec4 a_color;\nattribute vec4 a_outlineColor;\nattribute vec4 a_sizeAndOutlineWidth;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nattribute vec2 a_bitSetAndDistRatio;\nattribute vec2 a_zoomRange;\n#include <materials/vcommon.glsl>\n#include <materials/icon/common.glsl>\n#include <materials/icon/hittest.glsl>\nfloat getMarkerScaleFactor(inout vec2 size, in float referenceSize) {\n#ifdef VV_SIZE\nfloat f = getSize(size.y) / size.y;\nfloat sizeFactor = size.y / referenceSize;\nreturn getSize(referenceSize) / referenceSize;\n#else\nreturn 1.;\n#endif\n}\nvoid main()\n{\nINIT;\nfloat a_bitSet = a_bitSetAndDistRatio.x;\nvec3  pos           = vec3(a_pos * POSITION_PRECISION, 1.0);\nvec2  size          = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;\nvec3  offset        = vec3(a_vertexOffset / 16.0, 0.);\nfloat outlineSize   = a_sizeAndOutlineWidth.z * a_sizeAndOutlineWidth.z / 128.0;\nfloat isMapAligned  = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);\nfloat referenceSize = a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0;\nfloat scaleSymbolProportionally = getBit(a_bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);\nfloat scaleFactor               = getMarkerScaleFactor(size, referenceSize);\nsize.xy     *= scaleFactor;\noffset.xy   *= scaleFactor;\noutlineSize *= scaleSymbolProportionally * (scaleFactor - 1.0) + 1.0;\nvec2 v_tex   = a_texCoords / u_mosaicSize;\nfloat filterFlags = getFilterFlags();\nv_color    = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);\nv_opacity  = getOpacity();\nv_id       = norm(a_id);\nv_pos      = u_dvsMat3 * pos + getMatrix(isMapAligned) * getRotation()  * offset;\nv_sizeTex  = vec4(size.xy, v_tex.xy);\n#ifdef SDF\nv_isThin   = getBit(a_bitSet, BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE);\n#ifdef VV_COLOR\nv_overridingOutlineColor = v_isThin;\n#else\nv_overridingOutlineColor = 0.0;\n#endif\nv_outlineWidth = min(outlineSize, max(max(size.x, size.y) - 0.99, 0.0));\nv_outlineColor = a_outlineColor;\nv_distRatio = a_bitSetAndDistRatio.y / 128.0;\n#endif\n#ifdef HITTEST\nhighp vec4 out_color = vec4(0.);\nhighp vec3 out_pos   = vec3(0.);\nhittestIcon(out_color, out_pos, pos, offset, size, scaleFactor, isMapAligned);\nv_color = out_color;\ngl_PointSize = 1.;\ngl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);\n#else\ngl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);\n#endif\n}"
    },
    label: {
      "common.glsl": "uniform mediump float u_zoomLevel;\nuniform mediump float u_mapRotation;\nuniform mediump float u_mapAligned;\nuniform mediump vec2 u_mosaicSize;\nvarying mediump float v_antialiasingWidth;\nvarying mediump float v_edgeDistanceOffset;\nvarying mediump vec2 v_tex;\nvarying mediump vec4 v_color;\nvarying lowp vec4 v_animation;",
      "label.frag": "#include <materials/text/text.frag>",
      "label.vert": "precision highp float;\n#include <materials/vcommon.glsl>\n#include <materials/text/common.glsl>\nattribute vec4 a_color;\nattribute vec4 a_haloColor;\nattribute vec4 a_texAndSize;\nattribute vec4 a_refSymbolAndPlacementOffset;\nattribute vec4 a_glyphData;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nuniform float u_isHaloPass;\nuniform float u_isBackgroundPass;\nuniform float u_mapRotation;\nuniform float u_mapAligned;\nfloat getZ(in float minZoom, in float maxZoom, in float angle) {\nfloat glyphAngle = angle * 360.0 / 254.0;\nfloat mapAngle = u_mapRotation * 360.0 / 254.0;\nfloat diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));\nfloat z = 0.0;\nz += u_mapAligned * (2.0 * (1.0 - step(minZoom, u_currentZoom)));\nz += u_mapAligned * 2.0 * step(90.0, diffAngle);\nz += 2.0 * (1.0 - step(u_currentZoom, maxZoom));\nreturn z;\n}\nvoid main()\n{\nINIT;\nfloat groupMinZoom    = getMinZoom();\nfloat glyphMinZoom    = a_glyphData.x;\nfloat glyphMaxZoom    = a_glyphData.y;\nfloat glyphAngle      = a_glyphData.z;\nfloat a_isBackground  = a_glyphData.w;\nfloat a_minZoom          = max(groupMinZoom, glyphMinZoom);\nfloat a_placementPadding = a_refSymbolAndPlacementOffset.x * EXTRUDE_SCALE_PLACEMENT_PADDING;\nvec2  a_placementDir     = unpack_u8_nf32(a_refSymbolAndPlacementOffset.zw);\nfloat a_refSymbolSize    = a_refSymbolAndPlacementOffset.y;\nfloat fontSize           = a_texAndSize.z;\nfloat haloSize           = a_texAndSize.w * OUTLINE_SCALE;\nvec2  vertexOffset = a_vertexOffset * OFFSET_PRECISION;\nvec3  pos          = vec3(a_pos * POSITION_PRECISION, 1.0);\nfloat z            = getZ(a_minZoom, glyphMaxZoom, glyphAngle);\nfloat fontScale    = fontSize / SDF_FONT_SIZE;\nfloat halfSize     = getSize(a_refSymbolSize) / 2.0;\nfloat animation    = pow(getAnimationState(), vec4(2.0)).r;\nfloat isText = 1.0 - a_isBackground;\nfloat isBackground = u_isBackgroundPass * a_isBackground;\nvec4  nonHaloColor = (isBackground + isText) * a_color;\nv_color     = animation * ((1.0 - u_isHaloPass) * nonHaloColor + (u_isHaloPass * a_haloColor));\nv_opacity   = 1.0;\nv_tex       = a_texCoords / u_mosaicSize;\nv_edgeDistanceOffset = u_isHaloPass * haloSize / fontScale / MAX_SDF_DISTANCE;\nv_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;\nvec2 placementOffset = a_placementDir * (halfSize + a_placementPadding);\nvec3 glyphOffset     = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);\nvec3 v_pos           = vec3((u_dvsMat3 * pos + glyphOffset).xy, z);\nfloat isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;\nv_pos.z += 2.0 * isHidden;\ngl_Position = vec4(v_pos, 1.0);\n#ifdef DEBUG\nv_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);\n#endif\n}"
    },
    line: {
      "common.glsl": "varying lowp vec4 v_color;\nvarying highp vec3 v_id;\nvarying mediump vec2 v_normal;\nvarying mediump float v_lineHalfWidth;\nvarying lowp float v_opacity;\n#ifdef PATTERN\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\n#endif\n#if defined(PATTERN) || defined(SDF)\nvarying highp float v_accumulatedDistance;\n#endif\n#ifdef SDF\nvarying mediump float v_lineWidthRatio;\n#endif",
      "hittest.glsl": "#include <materials/hittest/common.glsl>\n#ifdef HITTEST\nattribute vec2 a_pos1;\nattribute vec2 a_pos2;\nvoid hittestLine(out lowp vec4 out_color, out highp vec3 out_pos, float halfWidth) {\nvec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * POSITION_PRECISION, 1.);\nvec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * POSITION_PRECISION, 1.);\nvec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * POSITION_PRECISION, 1.);\nvec3 outTextureCoords = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nfloat dist = min(distPointSegment(u_hittestPos, pos.xy, pos1.xy),\ndistPointSegment(u_hittestPos, pos.xy, pos2.xy)) - halfWidth;\nout_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);\nif (dist >= u_hittestDist) {\nout_pos.z += 2.0;\n}\nout_color = vec4(1. / 255., 0, 0, dist <= 0. ? (1. / 255.) : 0.);\n}\n#endif",
      "line.frag": "precision lowp float;\n#include <util/encoding.glsl>\n#include <materials/constants.glsl>\n#include <materials/symbologyTypeUtils.glsl>\n#include <materials/line/common.glsl>\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.frag>\n#ifdef HITTEST\nvoid main() {\ngl_FragColor = v_color;\n}\n#else\nvoid main() {\nLineData inputs = LineData(\nv_color,\nv_normal,\nv_lineHalfWidth,\nv_opacity,\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nv_tlbr,\nv_patternSize,\n#endif\n#ifdef SDF\nv_lineWidthRatio,\n#endif\n#if defined(PATTERN) || defined(SDF)\nv_accumulatedDistance,\n#endif\n#endif\nv_id\n);\ngl_FragColor = shadeLine(inputs);\n}\n#endif",
      "line.vert": "precision highp float;\nattribute vec4 a_color;\nattribute vec4 a_offsetAndNormal;\nattribute vec2 a_accumulatedDistanceAndHalfWidth;\nattribute vec4 a_tlbr;\nattribute vec4 a_segmentDirection;\nattribute vec2 a_aux;\nattribute vec2 a_zoomRange;\n#include <materials/vcommon.glsl>\n#include <materials/symbologyTypeUtils.glsl>\n#include <materials/line/common.glsl>\n#include <materials/line/hittest.glsl>\n#include <materials/shared/line/common.glsl>\n#include <materials/shared/line/line.vert>\n#ifdef HITTEST\nvoid draw() {\nfloat aa        = 0.5 * u_antialiasing;\nfloat a_halfWidth = a_accumulatedDistanceAndHalfWidth.y / 16.;\nfloat a_cimHalfWidth = a_aux.x / 16. ;\nvec2  a_offset = a_offsetAndNormal.xy / 16.;\nfloat baseWidth = getBaseLineHalfWidth(a_halfWidth, a_cimHalfWidth);\nfloat halfWidth = getLineHalfWidth(baseWidth, aa);\nhighp vec3 pos  = vec3(0.);\nv_color = vec4(0.);\nhittestLine(v_color, pos, halfWidth);\ngl_PointSize = 1.;\ngl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);\n}\n#else\nvoid draw()\n{\nhighp vec3 pos = vec3(0.);\nLineData outputs = buildLine(\npos,\na_id,\na_pos,\na_color,\na_offsetAndNormal.xy / 16.,\na_offsetAndNormal.zw / 16.,\na_accumulatedDistanceAndHalfWidth.x,\na_accumulatedDistanceAndHalfWidth.y / 16.,\na_segmentDirection.w,\na_tlbr,\na_segmentDirection.xy / 16.,\na_aux.x / 16.\n);\nv_id              = outputs.id;\nv_color           = outputs.color;\nv_normal          = outputs.normal;\nv_lineHalfWidth   = outputs.lineHalfWidth;\nv_opacity         = outputs.opacity;\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nv_tlbr          = outputs.tlbr;\nv_patternSize   = outputs.patternSize;\n#endif\n#ifdef SDF\nv_lineWidthRatio = outputs.lineWidthRatio;\n#endif\n#if defined(PATTERN) || defined(SDF)\nv_accumulatedDistance = outputs.accumulatedDistance;\n#endif\n#endif\ngl_Position = vec4(clip(outputs.color, pos, getFilterFlags(), a_zoomRange), 1.0);\n}\n#endif\nvoid main() {\nINIT;\ndraw();\n}"
    },
    pie: {
      "pie.common.glsl": "uniform float outlineWidth;\nuniform mediump float sectorThreshold;\nvarying vec3  v_id;\nvarying vec3  v_pos;\nvarying vec2  v_offset;\nvarying vec4  v_color;\nvarying float v_size;\nvarying float v_numOfEntries;\nvarying float v_maxSectorAngle;\nvarying vec2  v_filteredSectorToColorId[numberOfFields];\nvarying vec2  v_texCoords;\nvarying float v_outlineWidth;\nvarying float v_opacity;\nstruct FilteredChartInfo {\nfloat endSectorAngle;\nint colorId;\n};",
      "pie.frag": "precision highp float;\n#include <util/atan2.glsl>\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/pie/pie.common.glsl>\nuniform lowp vec4 colors[numberOfFields];\nuniform lowp vec4 defaultColor;\nuniform lowp vec4 othersColor;\nuniform lowp vec4 outlineColor;\nuniform float donutRatio;\nlowp vec4 getSectorColor(in int index, in vec2 filteredSectorToColorId[numberOfFields]) {\nmediump int colorIndex = int(filteredSectorToColorId[index].y);\nreturn colors[colorIndex];\n}\nconst int OTHER_SECTOR_ID = 255;\n#ifdef HITTEST\nvec4 getColor() {\nfloat distanceSize = length(v_offset) * v_size;\nfloat donutSize = donutRatio * v_size;\nfloat alpha = step(donutSize, distanceSize) * (1.0 - step(v_size, distanceSize));\nreturn v_color;\n}\n#else\nvec4 getColor() {\nfloat angle = 90.0 - C_RAD_TO_DEG * atan2(v_offset.y, v_offset.x);\nif (angle < 0.0) {\nangle += 360.0;\n} else if (angle > 360.0) {\nangle = mod(angle, 360.0);\n}\nint numOfEntries = int(v_numOfEntries);\nfloat maxSectorAngle = v_maxSectorAngle;\nlowp vec4 fillColor = (maxSectorAngle > 0.0 || sectorThreshold > 0.0) ? othersColor : defaultColor;\nlowp vec4 prevColor = vec4(0.0);\nlowp vec4 nextColor = vec4(0.0);\nfloat startSectorAngle = 0.0;\nfloat endSectorAngle = 0.0;\nif (angle < maxSectorAngle) {\nfor (int index = 0; index < numberOfFields; ++index) {\nstartSectorAngle = endSectorAngle;\nendSectorAngle = v_filteredSectorToColorId[index].x;\nif (endSectorAngle > angle) {\nfillColor = getSectorColor(index, v_filteredSectorToColorId);\nprevColor = sectorThreshold != 0.0 && index == 0 && abs(360.0 - maxSectorAngle) < EPSILON ? othersColor :\ngetSectorColor(index > 0 ? index - 1 : numOfEntries - 1, v_filteredSectorToColorId);\nnextColor = sectorThreshold != 0.0 && abs(endSectorAngle - maxSectorAngle) < EPSILON ? othersColor :\ngetSectorColor(index < numOfEntries - 1 ? index + 1 : 0, v_filteredSectorToColorId);\nbreak;\n}\nif (index == numOfEntries - 1) {\nbreak;\n}\n}\n} else {\nprevColor = getSectorColor(numOfEntries - 1, v_filteredSectorToColorId);\nnextColor = getSectorColor(0, v_filteredSectorToColorId);\nstartSectorAngle = maxSectorAngle;\nendSectorAngle = 360.0;\n}\nlowp vec4 outlineColor = outlineColor;\nfloat offset = length(v_offset);\nfloat distanceSize = offset * v_size;\nif (startSectorAngle != 0.0 || endSectorAngle != 360.0) {\nfloat distanceToStartSector = (angle - startSectorAngle);\nfloat distanceToEndSector = (endSectorAngle - angle);\nfloat sectorThreshold = 0.6;\nfloat beginSectorAlpha = smoothstep(0.0, sectorThreshold, distanceToStartSector * offset);\nfloat endSectorAlpha = smoothstep(0.0, sectorThreshold, distanceToEndSector * offset);\nif (endSectorAlpha > 0.0) {\nfillColor = mix(nextColor, fillColor, endSectorAlpha);\n} else if (beginSectorAlpha > 0.0) {\nfillColor = mix(prevColor, fillColor, beginSectorAlpha);\n}\n}\nfloat donutSize = donutRatio * (v_size - v_outlineWidth);\nfloat endOfDonut = donutSize - v_outlineWidth;\nfloat aaThreshold = 0.75;\nfloat innerCircleAlpha = endOfDonut - aaThreshold > 0.0 ? smoothstep(endOfDonut - aaThreshold, endOfDonut + aaThreshold, distanceSize) : 1.0;\nfloat outerCircleAlpha = 1.0 - smoothstep(v_size - aaThreshold, v_size + aaThreshold , distanceSize);\nfloat circleAlpha = innerCircleAlpha * outerCircleAlpha;\nfloat startOfOutline = v_size - v_outlineWidth;\nif (startOfOutline > 0.0 && v_outlineWidth > 0.25) {\nfloat outlineFactor = smoothstep(startOfOutline - aaThreshold, startOfOutline + aaThreshold, distanceSize);\nfloat innerLineFactor = donutSize - aaThreshold > 0.0 ? 1.0 - smoothstep(donutSize - aaThreshold, donutSize + aaThreshold , distanceSize) : 0.0;\nfillColor = mix(fillColor, outlineColor, innerLineFactor + outlineFactor);\n}\nreturn v_opacity * circleAlpha * fillColor;\n}\n#endif\nvoid main()\n{\nvec4 color = getColor();\n#ifdef highlight\ncolor.a = step(1.0 / 255.0, color.a);\n#endif\ngl_FragColor = color;\n}",
      "pie.vert": "#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/barycentric.glsl>\n#include <materials/vcommon.glsl>\n#include <materials/vv.glsl>\n#include <materials/attributeData.glsl>\n#include <materials/pie/pie.common.glsl>\n#include <materials/hittest/common.glsl>\nattribute float a_bitSet;\nattribute vec2  a_offset;\nattribute vec2  a_texCoords;\nattribute vec2  a_size;\nattribute float a_referenceSize;\nattribute vec2  a_zoomRange;\nint filterValue(in float sectorAngle,\nin int currentIndex,\ninout FilteredChartInfo filteredInfo,\ninout vec2 filteredSectorToColorId[numberOfFields]) {\nif (sectorAngle > sectorThreshold * 360.0) {\nfilteredInfo.endSectorAngle += sectorAngle;\nfilteredSectorToColorId[filteredInfo.colorId] = vec2(filteredInfo.endSectorAngle, currentIndex);\n++filteredInfo.colorId;\n}\nreturn 0;\n}\nint filterValues(inout vec2 filteredSectorToColorId[numberOfFields],\ninout FilteredChartInfo filteredInfo,\nin float sectorAngles[numberOfFields]) {\nfor (int index = 0; index < numberOfFields; ++index) {\nfloat sectorValue = sectorAngles[index];\nfilterValue(sectorValue, index, filteredInfo, filteredSectorToColorId);\n}\nreturn filteredInfo.colorId;\n}\nvec2 getMarkerSize(inout vec2 offset, inout vec2 baseSize, inout float outlineSize, in float a_referenceSize, in float bitSet) {\nvec2 outSize = baseSize;\n#ifdef VV_SIZE\nfloat r = getSize(a_referenceSize, currentScale) / a_referenceSize;\noutSize.xy *= r;\noffset.xy *= r;\nfloat scaleSymbolProportionally = getBit(bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);\noutlineSize *= scaleSymbolProportionally * (r - 1.0) + 1.0;\n#endif\nreturn outSize;\n}\nvec3 getOffset(in vec2 in_offset, float a_bitSet) {\nfloat isMapAligned = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);\nvec3  offset       = vec3(in_offset, 0.0);\nreturn getMatrix(isMapAligned) * offset;\n}\nfloat filterNaNValues(in float value) {\nreturn value != NAN_MAGIC_NUMBER && value > 0.0 ? value : 0.0;\n}\nvoid main()\n{\nINIT;\nvec2  a_size   = a_size;\nvec2  a_offset = a_offset / 16.0;\nfloat outlineSize = outlineWidth;\nfloat a_bitSet = a_bitSet;\nfloat a_referenceSize = a_referenceSize;\nvec2 a_texCoords = a_texCoords / 4.0;\nvec2 markerSize = getMarkerSize(a_offset, a_size, outlineSize, a_referenceSize, a_bitSet);\nfloat filterFlags = getFilterFlags();\nvec3  pos         = vec3(a_pos / 10.0, 1.0);\nv_opacity      = getOpacity();\nv_id           = norm(a_id);\nv_pos          = displayViewScreenMat3 * pos + getOffset(a_offset, a_bitSet);\nv_offset       = sign(a_texCoords - 0.5);\nv_size         = max(markerSize.x, markerSize.y);\nv_outlineWidth = outlineSize;\nfloat attributeData[10];\nvec4 attributeData3 = getDataDriven0(a_id);\nattributeData[0] = filterNaNValues(attributeData3.x);\nattributeData[1] = filterNaNValues(attributeData3.y);\nattributeData[2] = filterNaNValues(attributeData3.z);\nattributeData[3] = filterNaNValues(attributeData3.w);\n#if (numberOfFields > 4)\nvec4 attributeData4 = getDataDriven1(a_id);\nattributeData[4] = filterNaNValues(attributeData4.x);\nattributeData[5] = filterNaNValues(attributeData4.y);\nattributeData[6] = filterNaNValues(attributeData4.z);\nattributeData[7] = filterNaNValues(attributeData4.w);\n#endif\n#if (numberOfFields > 8)\nvec4 attributeData5 = getDataDriven2(a_id);\nattributeData[8] = filterNaNValues(attributeData5.x);\nattributeData[9] = filterNaNValues(attributeData5.y);\n#endif\nfloat sum = 0.0;\nfor (int i = 0; i < numberOfFields; ++i) {\nsum += attributeData[i];\n}\nfloat sectorAngles[numberOfFields];\nfor (int i = 0; i < numberOfFields; ++i) {\nsectorAngles[i] = 360.0 * attributeData[i] / sum;\n}\nvec2 filteredSectorToColorId[numberOfFields];\nFilteredChartInfo filteredInfo = FilteredChartInfo(0.0, 0);\nint numOfEntries = filterValues(filteredSectorToColorId, filteredInfo, sectorAngles);\nv_numOfEntries = float(numOfEntries);\nv_maxSectorAngle = filteredInfo.endSectorAngle;\nv_filteredSectorToColorId = filteredSectorToColorId;\n#ifdef HITTEST\nhighp vec3 out_pos = vec3(0.0);\nv_color            = vec4(0.0);\nhittestMarker(v_color, out_pos, viewMat3 * tileMat3 *  pos, v_size);\ngl_PointSize = 1.0;\ngl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);\n#else\ngl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);\n#endif\n}"
    },
    shared: {
      line: {
        "common.glsl": "#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)\nuniform mediump vec2 u_mosaicSize;\nvarying mediump float v_sampleAlphaOnly;\n#endif\nstruct LineData {\nlowp vec4 color;\nmediump vec2 normal;\nmediump float lineHalfWidth;\nlowp float opacity;\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nmediump vec4 tlbr;\nmediump vec2 patternSize;\n#endif\n#ifdef SDF\nmediump float lineWidthRatio;\n#endif\n#if defined(PATTERN) || defined(SDF)\nhighp float accumulatedDistance;\n#endif\n#endif\nhighp vec3 id;\n};",
        "line.frag": "uniform lowp float u_blur;\n#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && !defined(HIGHLIGHT)\n#if defined(PATTERN) || defined(SDF)\nuniform sampler2D u_texture;\nuniform highp float u_pixelRatio;\n#endif\n#endif\n#if defined(SDF) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)\nlowp vec4 getLineColor(LineData line) {\nmediump float adjustedPatternWidth = line.patternSize.x * 2.0 * line.lineWidthRatio;\nmediump float relativeTexX = fract(line.accumulatedDistance / adjustedPatternWidth);\nmediump float relativeTexY = 0.5 + 0.25 * line.normal.y;\nmediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));\nmediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;\nfloat dist = d * line.lineHalfWidth;\nreturn line.opacity * clamp(0.5 - dist, 0.0, 1.0) * line.color;\n}\n#elif defined(PATTERN) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)\nlowp vec4 getLineColor(LineData line) {\nmediump float lineHalfWidth = line.lineHalfWidth;\nmediump float adjustedPatternHeight = line.patternSize.y * 2.0 * lineHalfWidth / line.patternSize.x;\nmediump float relativeTexY = fract(line.accumulatedDistance / adjustedPatternHeight);\nmediump float relativeTexX = 0.5 + 0.5 * line.normal.y;\nmediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));\nlowp vec4 color = texture2D(u_texture, texCoord);\n#ifdef VV_COLOR\nif (v_sampleAlphaOnly > 0.5) {\ncolor.rgb = vec3(color.a);\n}\n#endif\nreturn line.opacity * line.color * color;\n}\n#else\nlowp vec4 getLineColor(LineData line) {\nreturn line.opacity * line.color;\n}\n#endif\nvec4 shadeLine(LineData line)\n{\nmediump float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(line.lineHalfWidth, THIN_LINE_HALF_WIDTH), 1.0);\nmediump float fragDist = length(line.normal) * line.lineHalfWidth;\nlowp float alpha = clamp(thinLineFactor * (line.lineHalfWidth - fragDist) / (u_blur + thinLineFactor - 1.0), 0.0, 1.0);\nlowp vec4 out_color = getLineColor(line) * alpha;\n#ifdef HIGHLIGHT\nout_color.a = step(1.0 / 255.0, out_color.a);\n#endif\n#ifdef ID\nif (out_color.a < 1.0 / 255.0) {\ndiscard;\n}\nout_color = vec4(line.id, 0.0);\n#endif\nreturn out_color;\n}",
        "line.vert": "float getBaseLineHalfWidth(in float lineHalfWidth, in float referenceHalfWidth) {\n#ifdef VV_SIZE\nfloat refLineWidth = 2.0 * referenceHalfWidth;\nreturn 0.5 * (lineHalfWidth / max(referenceHalfWidth, EPSILON)) * getSize(refLineWidth);\n#else\nreturn lineHalfWidth;\n#endif\n}\nfloat getLineHalfWidth(in float baseWidth, in float aa) {\nfloat halfWidth = max(baseWidth + aa, 0.45) + 0.1 * aa;\n#ifdef HIGHLIGHT\nhalfWidth = max(halfWidth, 2.0);\n#endif\nreturn halfWidth;\n}\nvec2 getDist(in vec2 offset, in float halfWidth) {\nfloat thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(halfWidth, THIN_LINE_HALF_WIDTH), 1.0);\nreturn thinLineFactor * halfWidth * offset;\n}\nLineData buildLine(\nout vec3 out_pos,\nin vec3 in_id,\nin vec2 in_pos,\nin vec4 in_color,\nin vec2 in_offset,\nin vec2 in_normal,\nin float in_accumulatedDist,\nin float in_lineHalfWidth,\nin float in_bitSet,\nin vec4 in_tlbr,\nin vec2 in_segmentDirection,\nin float in_referenceHalfWidth\n)\n{\nfloat aa        = 0.5 * u_antialiasing;\nfloat baseWidth = getBaseLineHalfWidth(in_lineHalfWidth, in_referenceHalfWidth);\nfloat halfWidth = getLineHalfWidth(baseWidth, aa);\nfloat z         = 2.0 * step(baseWidth, 0.0);\nvec2  dist      = getDist(in_offset, halfWidth);\nvec3  offset    = u_displayViewMat3 * vec3(dist, 0.0);\nvec3  pos       = u_dvsMat3 * vec3(in_pos * POSITION_PRECISION, 1.0) + offset;\n#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\nvec4  color     = in_color;\nfloat opacity   = 1.0;\n#else\nvec4  color     = getColor(in_color, in_bitSet, BITSET_GENERIC_LOCK_COLOR);\nfloat opacity   = getOpacity();\n#ifdef SDF\nconst float SDF_PATTERN_HALF_WIDTH = 15.5;\nfloat scaleDash = getBit(in_bitSet, BITSET_LINE_SCALE_DASH);\nfloat lineWidthRatio = (scaleDash * max(halfWidth - 0.55 * u_antialiasing, 0.25) + (1.0 - scaleDash)) / SDF_PATTERN_HALF_WIDTH;\n#endif\n#endif\n#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)\nv_sampleAlphaOnly = getBit(in_bitSet, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);\n#endif\nout_pos = vec3(pos.xy, z);\nreturn LineData(\ncolor,\nin_normal,\nhalfWidth,\nopacity,\n#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#ifdef PATTERN\nin_tlbr / u_mosaicSize.xyxy,\nvec2(in_tlbr.z - in_tlbr.x, in_tlbr.w - in_tlbr.y),\n#endif\n#ifdef SDF\nlineWidthRatio,\n#endif\n#if defined(PATTERN) || defined(SDF)\nin_accumulatedDist * u_zoomFactor + dot(in_segmentDirection, dist),\n#endif\n#endif\nnorm(in_id)\n);\n}"
      }
    },
    "symbologyTypeUtils.glsl": "#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE\n#define SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE\n#endif\n#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_SIMPLE || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE\n#define SYMBOLOGY_TYPE_IS_SIMPLE_LIKE\n#endif",
    text: {
      "common.glsl": "uniform highp vec2 u_mosaicSize;\nvarying highp vec3 v_id;\nvarying mediump vec3 v_pos;\nvarying lowp float v_opacity;\nvarying lowp vec4 v_color;\nvarying highp vec2 v_tex;\nvarying mediump float v_antialiasingWidth;\nvarying mediump float v_edgeDistanceOffset;\nvarying lowp float v_transparency;",
      "hittest.glsl": "#include <materials/hittest/common.glsl>",
      "text.frag": "precision mediump float;\n#include <materials/text/common.glsl>\nuniform lowp sampler2D u_texture;\n#ifdef HITTEST\nvec4 getColor() {\nreturn v_color;\n}\n#else\nvec4 getColor()\n{\nfloat SDF_CUTOFF = (2.0 / 8.0);\nfloat SDF_BASE_EDGE_DIST = 1.0 - SDF_CUTOFF;\nlowp float dist = texture2D(u_texture, v_tex).a;\nmediump float edge = SDF_BASE_EDGE_DIST - v_edgeDistanceOffset;\n#ifdef HIGHLIGHT\nedge /= 2.0;\n#endif\nlowp float aa = v_antialiasingWidth;\nlowp float alpha = smoothstep(edge - aa, edge + aa, dist);\nreturn alpha * v_color * v_opacity;\n}\n#endif\nvoid main()\n{\ngl_FragColor = getColor();\n}",
      "text.vert": "precision highp float;\n#include <materials/utils.glsl>\n#include <materials/vcommon.glsl>\n#include <materials/text/common.glsl>\n#include <materials/text/hittest.glsl>\nattribute vec4 a_color;\nattribute vec4 a_haloColor;\nattribute vec4 a_texFontSize;\nattribute vec4 a_aux;\nattribute vec2 a_zoomRange;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nuniform float u_isHaloPass;\nuniform float u_isBackgroundPass;\nfloat getTextSize(inout vec2 offset, inout float baseSize, in float referenceSize) {\n#ifdef VV_SIZE\nfloat r = getSize(referenceSize) / referenceSize;\nbaseSize *= r;\noffset.xy *= r;\nreturn baseSize;\n#endif\nreturn baseSize;\n}\nvoid main()\n{\nINIT;\nfloat a_isBackground  = a_aux.y;\nfloat a_referenceSize = a_aux.z * a_aux.z / 256.0;\nfloat a_bitSet        = a_aux.w;\nfloat a_fontSize      = a_texFontSize.z;\nvec2  a_offset        = a_vertexOffset * OFFSET_PRECISION;\nvec3  in_pos        = vec3(a_pos * POSITION_PRECISION, 1.0);\nfloat fontSize      = getTextSize(a_offset, a_fontSize, a_referenceSize);\nfloat fontScale     = fontSize / SDF_FONT_SIZE;\nvec3  offset        = getRotation() * vec3(a_offset, 0.0);\nmat3  extrudeMatrix = getBit(a_bitSet, 0) == 1.0 ? u_displayViewMat3 : u_displayMat3;\nfloat isText = 1.0 - a_isBackground;\nfloat isBackground = u_isBackgroundPass * a_isBackground;\nvec4  nonHaloColor  = (isBackground * a_color) + (isText * getColor(a_color, a_bitSet, 1));\nv_color   = u_isHaloPass * a_haloColor + (1.0 - u_isHaloPass) * nonHaloColor;\nv_opacity = getOpacity();\nv_id      = norm(a_id);\nv_tex     = a_texCoords / u_mosaicSize;\nv_pos     = u_dvsMat3 * in_pos + extrudeMatrix * offset;\nfloat isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;\nv_pos.z += 2.0 * isHidden;\nv_edgeDistanceOffset = u_isHaloPass * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;\nv_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;\n#ifdef HITTEST\nhighp vec3 out_pos  = vec3(0.);\nv_color = vec4(0.);\nhittestMarker(v_color, out_pos, u_viewMat3 * u_tileMat3 *  vec3(a_pos * POSITION_PRECISION, 1.0)\n+ u_tileMat3 * offset, fontSize / 2.);\ngl_PointSize = 1.;\ngl_Position = vec4(clip(v_color, out_pos, getFilterFlags(), a_zoomRange), 1.0);\n#else\ngl_Position =  vec4(clip(v_color, v_pos, getFilterFlags(), a_zoomRange), 1.0);\n#endif\n}"
    },
    "utils.glsl": "float rshift(in float u32, in int amount) {\nreturn floor(u32 / pow(2.0, float(amount)));\n}\nfloat getBit(in float bitset, in int bitIndex) {\nfloat offset = pow(2.0, float(bitIndex));\nreturn mod(floor(bitset / offset), 2.0);\n}\nconst int highlightReasonsLength = 3;\nfloat getFilterBit(in float bitset, in int bitIndex) {\nreturn getBit(bitset, bitIndex + highlightReasonsLength);\n}\nfloat getHighlightBit(in float bitset, in int bitIndex) {\nreturn getBit(bitset, bitIndex);\n}\nhighp vec3 unpackDisplayIdTexel(in highp vec3 bitset) {\nfloat isAggregate = getBit(bitset.b, 7);\nreturn (1.0 - isAggregate) * bitset + isAggregate * (vec3(bitset.rgb) - vec3(0.0, 0.0, float(0x80)));\n}\nvec4 unpack(in float u32) {\nfloat r = mod(rshift(u32, 0), 255.0);\nfloat g = mod(rshift(u32, 8), 255.0);\nfloat b = mod(rshift(u32, 16), 255.0);\nfloat a = mod(rshift(u32, 24), 255.0);\nreturn vec4(r, g, b, a);\n}\nvec3 norm(in vec3 v) {\nreturn v /= 255.0;\n}\nvec4 norm(in vec4 v) {\nreturn v /= 255.0;\n}\nfloat max4(vec4 target) {\nreturn max(max(max(target.x, target.y), target.z), target.w);\n}\nvec2 unpack_u8_nf32(vec2 bytes) {\nreturn (bytes - 127.0) / 127.0;\n}\nhighp float rand(in vec2 co) {\nhighp float a = 12.9898;\nhighp float b = 78.233;\nhighp float c = 43758.5453;\nhighp float dt = dot(co, vec2(a,b));\nhighp float sn = mod(dt, 3.14);\nreturn fract(sin(sn) * c);\n}",
    "vcommon.glsl": "#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/attributeData.glsl>\n#include <materials/vv.glsl>\n#include <materials/barycentric.glsl>\nattribute vec2 a_pos;\nattribute highp vec3 a_id;\nuniform highp mat3 displayViewScreenMat3;\nuniform highp mat3 displayViewMat3;\nuniform highp mat3 displayMat3;\nuniform highp mat3 tileMat3;\nuniform highp mat3 viewMat3;\nuniform highp float pixelRatio;\nuniform mediump float zoomFactor;\nuniform mediump float antialiasing;\nuniform mediump float currentScale;\nuniform mediump float currentZoom;\nuniform mediump float metersPerSRUnit;\nvec4 VV_ADATA = vec4(0.0);\nvoid loadVisualVariableData(inout vec4 target) {\ntarget.rgba = getVisualVariableData(a_id);\n}\n#ifdef VV\n#define INIT loadVisualVariableData(VV_ADATA)\n#else\n#define INIT\n#endif\nvec4 getColor(in vec4 a_color, in float a_bitSet, int index) {\n#ifdef VV_COLOR\nfloat isColorLocked   = getBit(a_bitSet, index);\nreturn getVVColor(VV_ADATA[ATTR_VV_COLOR], a_color, isColorLocked);\n#else\nreturn a_color;\n#endif\n}\nfloat getOpacity() {\n#ifdef VV_OPACITY\nreturn getVVOpacity(VV_ADATA[ATTR_VV_OPACITY]);\n#else\nreturn 1.0;\n#endif\n}\nfloat getSize(in float in_size, in float currentScale) {\n#ifdef VV_SIZE\nreturn getVVSize(in_size, VV_ADATA[ATTR_VV_SIZE], currentScale);\n#else\nreturn in_size;\n#endif\n}\nmat3 getRotation() {\n#ifdef VV_ROTATION\nreturn getVVRotationMat3(mod(VV_ADATA[ATTR_VV_ROTATION], 360.0));\n#else\nreturn mat3(1.0);\n#endif\n}\nfloat getFilterFlags() {\n#ifdef IGNORES_SAMPLER_PRECISION\nreturn ceil(getFilterData(a_id).x * 255.0);\n#else\nreturn getFilterData(a_id).x * 255.0;\n#endif\n}\nvec4 getAnimationState() {\nreturn getAnimation(a_id);\n}\nfloat getMinZoom() {\nvec4 data0 = getFilterData(a_id) * 255.0;\nreturn data0.g;\n}\nmat3 getMatrixNoDisplay(float isMapAligned) {\nreturn isMapAligned * viewMat3 * tileMat3 + (1.0 - isMapAligned) * tileMat3;\n}\nmat3 getMatrix(float isMapAligned) {\nreturn isMapAligned * displayViewMat3 + (1.0 - isMapAligned) * displayMat3;\n}\nfloat checkHighlightBit(float filterFlags, int index) {\nreturn getHighlightBit(filterFlags, index);\n}\nfloat checkHighlight(float filterFlags) {\nfloat result = checkHighlightBit(filterFlags, 0);\nfor (int i = 1; i < highlightReasonsLength; i++) {\nresult = result + checkHighlightBit(filterFlags, i);\n}\nreturn step(0.1, result);\n}\nvec3 clip(inout vec4 color, inout vec3 pos, in float filterFlags, in vec2 minMaxZoom) {\npos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));\n#ifdef inside\npos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));\n#elif defined(outside)\npos.z += 2.0 * getFilterBit(filterFlags, 1);\n#elif defined(highlight)\n#if !defined(highlight_all)\npos.z += 2.0 * (1.0 - checkHighlight(filterFlags));\n#endif\n#endif\npos.z += 2.0 * (step(minMaxZoom.y, currentZoom) + (1.0 - step(minMaxZoom.x, currentZoom)));\nreturn pos;\n}",
    "vv.glsl": "#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)\n#define VV_SIZE\n#endif\n#if defined(VV_COLOR) || defined(VV_SIZE) || defined(VV_OPACITY) || defined(VV_ROTATION)\n#define VV\n#endif\n#ifdef VV_COLOR\nuniform highp float colorValues[8];\nuniform vec4 colors[8];\n#endif\n#ifdef VV_SIZE_MIN_MAX_VALUE\nuniform highp vec4 minMaxValueAndSize;\n#endif\n#ifdef VV_SIZE_SCALE_STOPS\nuniform highp float values[8];\nuniform float sizes[8];\n#endif\n#ifdef VV_SIZE_FIELD_STOPS\nuniform highp float values[8];\nuniform float sizes[8];\n#endif\n#ifdef VV_SIZE_UNIT_VALUE\nuniform highp float unitMeterRatio;\n#endif\n#ifdef VV_OPACITY\nuniform highp float opacityValues[8];\nuniform float opacities[8];\n#endif\n#ifdef VV_ROTATION\nuniform lowp float rotationType;\n#endif\nbool isNan(float val) {\nreturn (val == NAN_MAGIC_NUMBER);\n}\n#ifdef VV_SIZE_MIN_MAX_VALUE\nfloat getVVMinMaxSize(float sizeValue, float fallback) {\nif (isNan(sizeValue)) {\nreturn fallback;\n}\nfloat interpolationRatio = (sizeValue  - minMaxValueAndSize.x) / (minMaxValueAndSize.y - minMaxValueAndSize.x);\ninterpolationRatio = clamp(interpolationRatio, 0.0, 1.0);\nreturn minMaxValueAndSize.z + interpolationRatio * (minMaxValueAndSize.w - minMaxValueAndSize.z);\n}\n#endif\n#ifdef VV_SIZE_SCALE_STOPS\nfloat getVVScaleStopsSize(float currentScale) {\nfloat outSize;\nif (currentScale <= values[0]) {\noutSize = sizes[0];\n} else {\nif (currentScale >= values[7]) {\noutSize = sizes[7];\n} else {\nint index;\nindex = -1;\nfor (int i = 0; i < 8; i++) {\nif (values[i] > currentScale) {\nindex = i;\nbreak;\n}\n}\nint prevIndex = index - 1;\nfloat a = currentScale - values[prevIndex];\nfloat b = values[index] - values[prevIndex];\noutSize = mix(sizes[prevIndex], sizes[index], a / b);\n}\n}\nreturn outSize;\n}\n#endif\n#ifdef VV_SIZE_FIELD_STOPS\nconst int VV_SIZE_N = 8;\nfloat getVVStopsSize(float sizeValue, float fallback) {\nif (isNan(sizeValue)) {\nreturn fallback;\n}\nif (sizeValue <= values[0]) {\nreturn sizes[0];\n}\nfor (int i = 1; i < VV_SIZE_N; ++i) {\nif (values[i] >= sizeValue) {\nfloat f = (sizeValue - values[i-1]) / (values[i] - values[i-1]);\nreturn mix(sizes[i-1], sizes[i], f);\n}\n}\nreturn sizes[VV_SIZE_N - 1];\n}\n#endif\n#ifdef VV_SIZE_UNIT_VALUE\nfloat getVVUnitValue(float sizeValue, float fallback) {\nif (isNan(sizeValue)) {\nreturn fallback;\n}\nreturn sizeValue * (metersPerSRUnit / unitMeterRatio);\n}\n#endif\n#ifdef VV_OPACITY\nconst int VV_OPACITY_N = 8;\nfloat getVVOpacity(float opacityValue) {\nif (isNan(opacityValue)) {\nreturn 1.0;\n}\nif (opacityValue <= opacityValues[0]) {\nreturn opacities[0];\n}\nfor (int i = 1; i < VV_OPACITY_N; ++i) {\nif (opacityValues[i] >= opacityValue) {\nfloat f = (opacityValue - opacityValues[i-1]) / (opacityValues[i] - opacityValues[i-1]);\nreturn mix(opacities[i-1], opacities[i], f);\n}\n}\nreturn opacities[VV_OPACITY_N - 1];\n}\n#endif\n#ifdef VV_ROTATION\nmat4 getVVRotation(float rotationValue) {\nif (isNan(rotationValue)) {\nreturn mat4(1, 0, 0, 0,\n0, 1, 0, 0,\n0, 0, 1, 0,\n0, 0, 0, 1);\n}\nfloat rotation = rotationValue;\nif (rotationType == 1.0) {\nrotation = 90.0 - rotation;\n}\nfloat angle = C_DEG_TO_RAD * rotation;\nfloat sinA = sin(angle);\nfloat cosA = cos(angle);\nreturn mat4(cosA, sinA, 0, 0,\n-sinA,  cosA, 0, 0,\n0,     0, 1, 0,\n0,     0, 0, 1);\n}\nmat3 getVVRotationMat3(float rotationValue) {\nif (isNan(rotationValue)) {\nreturn mat3(1, 0, 0,\n0, 1, 0,\n0, 0, 1);\n}\nfloat rotation = rotationValue;\nif (rotationType == 1.0) {\nrotation = 90.0 - rotation;\n}\nfloat angle = C_DEG_TO_RAD * -rotation;\nfloat sinA = sin(angle);\nfloat cosA = cos(angle);\nreturn mat3(cosA, -sinA, 0,\nsinA, cosA, 0,\n0,    0,    1);\n}\n#endif\n#ifdef VV_COLOR\nconst int VV_COLOR_N = 8;\nvec4 getVVColor(float colorValue, vec4 fallback, float isColorLocked) {\nif (isNan(colorValue) || isColorLocked == 1.0) {\nreturn fallback;\n}\nif (colorValue <= colorValues[0]) {\nreturn colors[0];\n}\nfor (int i = 1; i < VV_COLOR_N; ++i) {\nif (colorValues[i] >= colorValue) {\nfloat f = (colorValue - colorValues[i-1]) / (colorValues[i] - colorValues[i-1]);\nreturn mix(colors[i-1], colors[i], f);\n}\n}\nreturn colors[VV_COLOR_N - 1];\n}\n#endif\nfloat getVVSize(in float size, in float vvSize, in float currentScale)  {\n#ifdef VV_SIZE_MIN_MAX_VALUE\nreturn getVVMinMaxSize(vvSize, size);\n#elif defined(VV_SIZE_SCALE_STOPS)\nfloat outSize = getVVScaleStopsSize(currentScale);\nreturn isNan(outSize) ? size : outSize;\n#elif defined(VV_SIZE_FIELD_STOPS)\nfloat outSize = getVVStopsSize(vvSize, size);\nreturn isNan(outSize) ? size : outSize;\n#elif defined(VV_SIZE_UNIT_VALUE)\nreturn getVVUnitValue(vvSize, size);\n#else\nreturn size;\n#endif\n}"
  },
  overlay: {
    overlay: {
      "overlay.frag": "precision lowp float;\nuniform lowp sampler2D u_texture;\nuniform lowp float u_opacity;\nvarying mediump vec2 v_uv;\nvoid main() {\nvec4 color = texture2D(u_texture, v_uv);\ngl_FragColor = color *  u_opacity;\n}",
      "overlay.vert": "precision mediump float;\nattribute vec2 a_pos;\nattribute vec2 a_uv;\nuniform highp mat3 u_dvsMat3;\nuniform mediump vec2 u_perspective;\nuniform highp float u_wrapAroundShift;\nuniform mediump vec2 u_texSize;\nvarying mediump vec2 v_uv;\nvoid main(void) {\nv_uv = a_uv / u_texSize;\nfloat w = 1.0 + dot(a_uv, u_perspective);\nvec3 pos = u_dvsMat3 * vec3(a_pos + vec2(u_wrapAroundShift, 0.0), 1.0);\ngl_Position = vec4(w * pos.xy, 0.0, w);\n}"
    }
  },
  "post-processing": {
    blit: {
      "blit.frag": "precision mediump float;\nuniform sampler2D u_texture;\nvarying vec2 v_uv;\nvoid main() {\ngl_FragColor = texture2D(u_texture, v_uv);\n}"
    },
    bloom: {
      composite: {
        "composite.frag": "precision mediump float;\nvarying vec2 v_uv;\nuniform sampler2D u_blurTexture1;\nuniform sampler2D u_blurTexture2;\nuniform sampler2D u_blurTexture3;\nuniform sampler2D u_blurTexture4;\nuniform sampler2D u_blurTexture5;\nuniform float u_bloomStrength;\nuniform float u_bloomRadius;\nuniform float u_bloomFactors[NUMMIPS];\nuniform vec3 u_bloomTintColors[NUMMIPS];\nfloat lerpBloomFactor(const in float factor) {\nfloat mirrorFactor = 1.2 - factor;\nreturn mix(factor, mirrorFactor, u_bloomRadius);\n}\nvoid main() {\nvec4 color = u_bloomStrength * (\nlerpBloomFactor(u_bloomFactors[0]) * vec4(u_bloomTintColors[0], 1.0) * texture2D(u_blurTexture1, v_uv) +\nlerpBloomFactor(u_bloomFactors[1]) * vec4(u_bloomTintColors[1], 1.0) * texture2D(u_blurTexture2, v_uv) +\nlerpBloomFactor(u_bloomFactors[2]) * vec4(u_bloomTintColors[2], 1.0) * texture2D(u_blurTexture3, v_uv) +\nlerpBloomFactor(u_bloomFactors[3]) * vec4(u_bloomTintColors[3], 1.0) * texture2D(u_blurTexture4, v_uv) +\nlerpBloomFactor(u_bloomFactors[4]) * vec4(u_bloomTintColors[4], 1.0) * texture2D(u_blurTexture5, v_uv)\n);\ngl_FragColor = clamp(color, 0.0, 1.0);\n}"
      },
      gaussianBlur: {
        "gaussianBlur.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nuniform vec2 u_direction;\nvarying vec2 v_uv;\n#define KERNEL_RADIUS RADIUS\n#define SIGMA RADIUS\nfloat gaussianPdf(in float x, in float sigma) {\nreturn 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;\n}\nvoid main() {\nvec2 invSize = 1.0 / u_texSize;\nfloat fSigma = float(SIGMA);\nfloat weightSum = gaussianPdf(0.0, fSigma);\nvec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;\nfor (int i = 1; i < KERNEL_RADIUS; i ++) {\nfloat x = float(i);\nfloat w = gaussianPdf(x, fSigma);\nvec2 uvOffset = u_direction * invSize * x;\nvec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);\nvec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);\npixelColorSum += (sample1 + sample2) * w;\nweightSum += 2.0 * w;\n}\ngl_FragColor = pixelColorSum /weightSum;\n}"
      },
      luminosityHighPass: {
        "luminosityHighPass.frag": "precision mediump float;\nuniform sampler2D u_texture;\nuniform vec3 u_defaultColor;\nuniform float u_defaultOpacity;\nuniform float u_luminosityThreshold;\nuniform float u_smoothWidth;\nvarying vec2 v_uv;\nvoid main() {\nvec4 texel = texture2D(u_texture, v_uv);\nvec3 luma = vec3(0.299, 0.587, 0.114);\nfloat v = dot(texel.xyz, luma);\nvec4 outputColor = vec4(u_defaultColor.rgb, u_defaultOpacity);\nfloat alpha = smoothstep(u_luminosityThreshold, u_luminosityThreshold + u_smoothWidth, v);\ngl_FragColor = mix(outputColor, texel, alpha);\n}"
      }
    },
    blur: {
      gaussianBlur: {
        "gaussianBlur.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nuniform vec2 u_direction;\nuniform float u_sigma;\nvarying vec2 v_uv;\n#define KERNEL_RADIUS RADIUS\nfloat gaussianPdf(in float x, in float sigma) {\nreturn 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;\n}\nvoid main() {\nvec2 invSize = 1.0 / u_texSize;\nfloat fSigma = u_sigma;\nfloat weightSum = gaussianPdf(0.0, fSigma);\nvec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;\nfor (int i = 1; i < KERNEL_RADIUS; i ++) {\nfloat x = float(i);\nfloat w = gaussianPdf(x, fSigma);\nvec2 uvOffset = u_direction * invSize * x;\nvec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);\nvec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);\npixelColorSum += (sample1 + sample2) * w;\nweightSum += 2.0 * w;\n}\ngl_FragColor = pixelColorSum /weightSum;\n}"
      },
      "radial-blur": {
        "radial-blur.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nconst float sampleDist = 1.0;\nconst float sampleStrength = 2.2;\nvoid main(void) {\nfloat samples[10];\nsamples[0] = -0.08;\nsamples[1] = -0.05;\nsamples[2] = -0.03;\nsamples[3] = -0.02;\nsamples[4] = -0.01;\nsamples[5] =  0.01;\nsamples[6] =  0.02;\nsamples[7] =  0.03;\nsamples[8] =  0.05;\nsamples[9] =  0.08;\nvec2 dir = 0.5 - v_uv;\nfloat dist = sqrt(dir.x * dir.x + dir.y * dir.y);\ndir = dir / dist;\nvec4 color = texture2D(u_colorTexture,v_uv);\nvec4 sum = color;\nfor (int i = 0; i < 10; i++) {\nsum += texture2D(u_colorTexture, v_uv + dir * samples[i] * sampleDist);\n}\nsum *= 1.0 / 11.0;\nfloat t = dist * sampleStrength;\nt = clamp(t, 0.0, 1.0);\ngl_FragColor = mix(color, sum, t);\n}"
      }
    },
    dra: {
      "dra.frag": "precision mediump float;\nuniform sampler2D u_minColor;\nuniform sampler2D u_maxColor;\nuniform sampler2D u_texture;\nvarying vec2 v_uv;\nvoid main() {\nvec4 minColor = texture2D(u_minColor, vec2(0.5));\nvec4 maxColor = texture2D(u_maxColor, vec2(0.5));\nvec4 color = texture2D(u_texture, v_uv);\nvec3 minColorUnpremultiply = minColor.rgb / minColor.a;\nvec3 maxColorUnpremultiply = maxColor.rgb / maxColor.a;\nvec3 colorUnpremultiply = color.rgb / color.a;\nvec3 range = maxColorUnpremultiply - minColorUnpremultiply;\ngl_FragColor = vec4(color.a * (colorUnpremultiply - minColorUnpremultiply) / range, color.a);\n}",
      "min-max": {
        "min-max.frag": "#extension GL_EXT_draw_buffers : require\nprecision mediump float;\n#define CELL_SIZE 2\nuniform sampler2D u_minTexture;\nuniform sampler2D u_maxTexture;\nuniform vec2 u_srcResolution;\nuniform vec2 u_dstResolution;\nvarying vec2 v_uv;\nvoid main() {\nvec2 srcPixel = floor(gl_FragCoord.xy) * float(CELL_SIZE);\nvec2 onePixel = vec2(1.0) / u_srcResolution;\nvec2 uv = (srcPixel + 0.5) / u_srcResolution;\nvec4 minColor = vec4(1.0);\nvec4 maxColor = vec4(0.0);\nfor (int y = 0; y < CELL_SIZE; ++y) {\nfor (int x = 0; x < CELL_SIZE; ++x) {\nvec2 offset = uv + vec2(x, y) * onePixel;\nminColor = min(minColor, texture2D(u_minTexture, offset));\nmaxColor = max(maxColor, texture2D(u_maxTexture, offset));\n}\n}\ngl_FragData[0] = minColor;\ngl_FragData[1] = maxColor;\n}"
      }
    },
    "drop-shadow": {
      composite: {
        "composite.frag": "precision mediump float;\nuniform sampler2D u_layerFBOTexture;\nuniform sampler2D u_blurTexture;\nuniform vec4 u_shadowColor;\nuniform vec2 u_shadowOffset;\nuniform highp mat3 u_displayViewMat3;\nvarying vec2 v_uv;\nvoid main() {\nvec3 offset = u_displayViewMat3 * vec3(u_shadowOffset, 0.0);\nvec4 layerColor = texture2D(u_layerFBOTexture, v_uv);\nvec4 blurColor = texture2D(u_blurTexture, v_uv - offset.xy / 2.0);\ngl_FragColor = ((1.0 - layerColor.a) * blurColor.a * u_shadowColor + layerColor);\n}"
      }
    },
    "edge-detect": {
      "frei-chen": {
        "frei-chen.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nvarying vec2 v_uv;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[9];\nconst mat3 g0 = mat3( 0.3535533845424652, 0, -0.3535533845424652, 0.5, 0, -0.5, 0.3535533845424652, 0, -0.3535533845424652 );\nconst mat3 g1 = mat3( 0.3535533845424652, 0.5, 0.3535533845424652, 0, 0, 0, -0.3535533845424652, -0.5, -0.3535533845424652 );\nconst mat3 g2 = mat3( 0, 0.3535533845424652, -0.5, -0.3535533845424652, 0, 0.3535533845424652, 0.5, -0.3535533845424652, 0 );\nconst mat3 g3 = mat3( 0.5, -0.3535533845424652, 0, -0.3535533845424652, 0, 0.3535533845424652, 0, 0.3535533845424652, -0.5 );\nconst mat3 g4 = mat3( 0, -0.5, 0, 0.5, 0, 0.5, 0, -0.5, 0 );\nconst mat3 g5 = mat3( -0.5, 0, 0.5, 0, 0, 0, 0.5, 0, -0.5 );\nconst mat3 g6 = mat3( 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.6666666865348816, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204 );\nconst mat3 g7 = mat3( -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, 0.6666666865348816, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408 );\nconst mat3 g8 = mat3( 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408 );\nvoid main() {\nG[0] = g0,\nG[1] = g1,\nG[2] = g2,\nG[3] = g3,\nG[4] = g4,\nG[5] = g5,\nG[6] = g6,\nG[7] = g7,\nG[8] = g8;\nmat3 I;\nfloat cnv[9];\nvec3 sample;\nfor (float i = 0.0; i < 3.0; i++) {\nfor (float j = 0.0; j < 3.0; j++) {\nsample = texture2D(u_colorTexture, v_uv + texel * vec2(i - 1.0,j - 1.0)).rgb;\nI[int(i)][int(j)] = length(sample);\n}\n}\nfor (int i = 0; i < 9; i++) {\nfloat dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\ncnv[i] = dp3 * dp3;\n}\nfloat M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]);\nfloat S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);\ngl_FragColor = vec4(vec3(sqrt(M / S)), texture2D(u_colorTexture, v_uv).a);\n}"
      },
      sobel: {
        "sobel.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nuniform vec2 u_texSize;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[2];\nconst mat3 g0 = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );\nconst mat3 g1 = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );\nvoid main() {\nmat3 I;\nfloat cnv[2];\nvec3 sample;\nG[0] = g0;\nG[1] = g1;\nfor (float i = 0.0; i < 3.0; i++) {\nfor (float j = 0.0; j < 3.0; j++) {\nsample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;\nI[int(i)][int(j)] = length(sample);\n}\n}\nfor (int i = 0; i < 2; i++) {\nfloat dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\ncnv[i] = dp3 * dp3;\n}\ngl_FragColor = vec4(vec3(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1])), texture2D(u_colorTexture, v_uv).a);\n}"
      }
    },
    "edge-enhance": {
      "edge-enhance.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nuniform vec2 u_texSize;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[2];\nconst mat3 g0 = mat3( 1.0, 0.0, -1.0, 1.0, 0.0, -1.0, 1.0, 0.0, -1.0 );\nconst mat3 g1 = mat3( 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, -1.0, -1.0, -1.0 );\nvoid main() {\nmat3 I;\nfloat cnv[2];\nvec3 sample;\nG[0] = g0;\nG[1] = g1;\nfor (float i = 0.0; i < 3.0; i++) {\nfor (float j = 0.0; j < 3.0; j++) {\nsample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;\nI[int(i)][int(j)] = length(sample);\n}\n}\nfor (int i = 0; i < 2; i++) {\nfloat dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\ncnv[i] = dp3 * dp3;\n}\nvec4 color = texture2D(u_colorTexture, v_uv);\ngl_FragColor = vec4(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1]) * color);\n}"
    },
    filterEffect: {
      "filterEffect.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform mat4 u_coefficients;\nvarying vec2 v_uv;\nvoid main() {\nvec4 color = texture2D(u_colorTexture, v_uv);\nvec4 rgbw = u_coefficients * vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);\nfloat a = color.a;\ngl_FragColor = vec4(a * rgbw.rgb, a);\n}"
    },
    pp: {
      "pp.vert": "precision mediump float;\nattribute vec2 a_position;\nvarying vec2 v_uv;\nvoid main() {\ngl_Position = vec4(a_position, 0.0, 1.0);\nv_uv = (a_position + 1.0) / 2.0;\n}"
    }
  },
  raster: {
    bitmap: {
      "bitmap.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform highp vec2 u_coordScale;\nuniform lowp float u_opacity;\n#include <filtering/bicubic.glsl>\nvoid main() {\n#ifdef BICUBIC\nvec4 color = sampleBicubicBSpline(u_texture, v_texcoord, u_coordScale);\n#else\nvec4 color = texture2D(u_texture, v_texcoord);\n#endif\ngl_FragColor = vec4(color.rgb * u_opacity, color.a * u_opacity);\n}",
      "bitmap.vert": "precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos;\ngl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}"
    },
    common: {
      "common.glsl": "uniform sampler2D u_image;\nuniform int u_bandCount;\nuniform bool u_flipY;\nuniform float u_opacity;\nuniform int u_resampling;\nuniform vec2 u_srcImageSize;\n#ifdef APPLY_PROJECTION\n#include <raster/common/projection.glsl>\n#endif\n#ifdef BICUBIC\n#include <filtering/bicubic.glsl>\n#endif\n#ifdef BILINEAR\n#include <filtering/bilinear.glsl>\n#endif\nvec2 getPixelLocation(vec2 coords) {\nvec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;\n#ifdef APPLY_PROJECTION\ntargetLocation = projectPixelLocation(targetLocation);\n#endif\nreturn targetLocation;\n}\nbool isOutside(vec2 coords){\nif (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {\nreturn true;\n} else {\nreturn false;\n}\n}\nvec4 getPixel(vec2 pixelLocation) {\n#ifdef BICUBIC\nvec4 color = sampleBicubicBSpline(u_image, pixelLocation, u_srcImageSize);\n#elif defined(BILINEAR)\nvec4 color = sampleBilinear(u_image, pixelLocation, u_srcImageSize);\n#else\nvec4 color = texture2D(u_image, pixelLocation);\n#endif\nreturn color;\n}",
      "common.vert": "precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform highp float u_scale;\nuniform highp vec2 u_offset;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos * u_scale + u_offset;\ngl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}",
      "contrastBrightness.glsl": "uniform float u_contrastOffset;\nuniform float u_brightnessOffset;\nvec4 adjustContrastBrightness(vec4 currentPixel, bool isFloat) {\nvec4 pixelValue = isFloat ? currentPixel * 255.0 : currentPixel;\nfloat maxI = 255.0;\nfloat mid = 128.0;\nfloat c = u_contrastOffset;\nfloat b = u_brightnessOffset;\nvec4 v;\nif (c > 0.0 && c < 100.0) {\nv = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) / (2.0 * (100.0 - c)) + mid;\n} else if (c <= 0.0 && c > -100.0) {\nv = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) * (100.0 + c) / 20000.0 + mid;\n} else if (c == 100.0) {\nv = (200.0 * pixelValue - 100.0 * maxI + (maxI + 1.0) * (100.0 - c) + 2.0 * maxI * b);\nv = (sign(v) + 1.0) / 2.0;\n} else if (c == -100.0) {\nv = vec4(mid, mid, mid, currentPixel.a);\n}\nvec3 rgb = clamp(v.rgb / 255.0, 0.0, 1.0);\nreturn vec4(rgb, currentPixel.a);\n}",
      "getSurfaceValues.glsl": "#include <raster/common/mirror.glsl>\nvoid getSurfaceValues(sampler2D imageTexture, vec2 texCoord, vec2 srcImageSize, inout float values[10]) {\nvec2 onePixel = 1.0 / srcImageSize;\nvec4 va = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(-1.0, -1.0)));\nvec4 vb = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(0.0, -1.0)));\nvec4 vc = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(1.0, -1.0)));\nvec4 vd = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(-1.0, 0.0)));\nvec4 ve = texture2D(imageTexture, mirror(texCoord));\nvec4 vf = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(1.0, 0.0)));\nvec4 vg = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(-1.0, 1.0)));\nvec4 vh = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(0.0, 1.0)));\nvec4 vi = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(1.0, 1.0)));\nfloat alpha = va.a * vb.a * vc.a * vd.a * ve.a * vf.a * vg.a * vh.a * vi.a;\nvalues[0] = va.r;\nvalues[1] = vb.r;\nvalues[2] = vc.r;\nvalues[3] = vd.r;\nvalues[4] = ve.r;\nvalues[5] = vf.r;\nvalues[6] = vg.r;\nvalues[7] = vh.r;\nvalues[8] = vi.r;\nvalues[9] = alpha;\n}",
      "inverse.glsl": "float invertValue(float value) {\nfloat s = sign(value);\nreturn (s * s) / (value + abs(s) - 1.0);\n}",
      "mirror.glsl": "vec2 mirror(vec2 pos) {\nvec2 pos1 = abs(pos);\nreturn step(pos1, vec2(1.0, 1.0)) * pos1 + step(1.0, pos1) * (2.0 - pos1);\n}",
      "projection.glsl": "uniform sampler2D u_transformGrid;\nuniform vec2 u_transformSpacing;\nuniform vec2 u_transformGridSize;\nuniform vec2 u_targetImageSize;\nvec2 projectPixelLocation(vec2 coords) {\n#ifdef LOOKUP_PROJECTION\nvec4 pv = texture2D(u_transformGrid, coords);\nreturn vec2(pv.r, pv.g);\n#endif\nvec2 index_image = floor(coords * u_targetImageSize);\nvec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);\nvec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;\nvec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);\nvec2 srcLocation;\nvec2 transform_location = index_transform + oneTransformPixel * 0.5;\nif (pos.s <= pos.t) {\nvec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));\nvec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));\nsrcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));\nsrcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));\n} else {\nvec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));\nvec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));\nsrcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));\nsrcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));\n}\nreturn srcLocation;\n}"
    },
    flow: {
      "getFadeOpacity.glsl": "uniform float u_decayRate;\nuniform float u_fadeToZero;\nfloat getFadeOpacity(float x) {\nfloat cutOff = mix(0.0, exp(-u_decayRate), u_fadeToZero);\nreturn (exp(-u_decayRate * x) - cutOff) / (1.0 - cutOff);\n}",
      "getFragmentColor.glsl": "vec4 getFragmentColor(vec4 color, float dist, float size, float featheringSize) {\nfloat featheringStart = clamp(0.5 - featheringSize / size, 0.0, 0.5);\nif (dist > featheringStart) {\ncolor *= 1.0 - (dist - featheringStart) / (0.5 - featheringStart);\n}\nreturn color;\n}",
      imagery: {
        "imagery.frag": "precision highp float;\nvarying vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform float u_Min;\nuniform float u_Max;\nuniform float u_featheringSize;\n#include <raster/flow/vv.glsl>\nfloat getIntensity(float v) {\nreturn u_Min + v * (u_Max - u_Min);\n}\nvoid main(void) {\nvec4 sampled = texture2D(u_texture, v_texcoord);\nfloat intensity = getIntensity(sampled.r);\ngl_FragColor = getColor(intensity);\ngl_FragColor.a *= getOpacity(sampled.r);\ngl_FragColor.a *= sampled.a;\ngl_FragColor.rgb *= gl_FragColor.a;\n}",
        "imagery.vert": "attribute vec2 a_position;\nattribute vec2 a_texcoord;\nuniform mat3 u_dvsMat3;\nvarying vec2 v_texcoord;\nvoid main(void) {\nvec2 xy = (u_dvsMat3 * vec3(a_position, 1.0)).xy;\ngl_Position = vec4(xy, 0.0, 1.0);\nv_texcoord = a_texcoord;\n}"
      },
      particles: {
        "particles.frag": "precision highp float;\nvarying vec4 v_color;\nvarying vec2 v_texcoord;\nvarying float v_size;\nuniform float u_featheringSize;\n#include <raster/flow/getFragmentColor.glsl>\nvoid main(void) {\ngl_FragColor = getFragmentColor(v_color, length(v_texcoord - 0.5), v_size, u_featheringSize);\n}",
        "particles.vert": "attribute vec4 a_xyts0;\nattribute vec4 a_xyts1;\nattribute vec4 a_typeIdDurationSeed;\nattribute vec4 a_extrudeInfo;\nuniform mat3 u_dvsMat3;\nuniform mat3 u_displayViewMat3;\nuniform float u_time;\nuniform float u_trailLength;\nuniform float u_flowSpeed;\nvarying vec4 v_color;\nvarying vec2 v_texcoord;\nvarying float v_size;\nuniform float u_featheringSize;\nuniform float u_introFade;\n#include <raster/flow/vv.glsl>\n#include <raster/flow/getFadeOpacity.glsl>\nvoid main(void) {\nvec2 position0 = a_xyts0.xy;\nfloat t0 = a_xyts0.z;\nfloat speed0 = a_xyts0.w;\nvec2 position1 = a_xyts1.xy;\nfloat t1 = a_xyts1.z;\nfloat speed1 = a_xyts1.w;\nfloat type = a_typeIdDurationSeed.x;\nfloat id = a_typeIdDurationSeed.y;\nfloat duration = a_typeIdDurationSeed.z;\nfloat seed = a_typeIdDurationSeed.w;\nvec2 e0 = a_extrudeInfo.xy;\nvec2 e1 = a_extrudeInfo.zw;\nfloat animationPeriod = duration + u_trailLength;\nfloat scaledTime = u_time * u_flowSpeed;\nfloat randomizedTime = scaledTime + seed * animationPeriod;\nfloat t = mod(randomizedTime, animationPeriod);\nfloat fUnclamped = (t - t0) / (t1 - t0);\nfloat f = clamp(fUnclamped, 0.0, 1.0);\nfloat clampedTime = mix(t0, t1, f);\nfloat speed = mix(speed0, speed1, f);\nvec2 extrude;\nvec2 position;\nfloat fadeOpacity;\nfloat introOpacity;\nif (type == 2.0) {\nif (fUnclamped < 0.0 || (fUnclamped > 1.0 && t1 != duration)) {\ngl_Position = vec4(0.0, 0.0, -2.0, 1.0);\nreturn;\n}\nvec2 ortho = mix(e0, e1, f);\nvec2 parallel;\nparallel = normalize(position1 - position0) * 0.5;\nif (id == 1.0) {\nextrude = ortho;\nv_texcoord = vec2(0.5, 0.0);\n} else if (id == 2.0) {\nextrude = -ortho;\nv_texcoord = vec2(0.5, 1.0);\n} else if (id == 3.0) {\nextrude = ortho + parallel;\nv_texcoord = vec2(1.0, 0.0);\n} else if (id == 4.0) {\nextrude = -ortho + parallel;\nv_texcoord = vec2(1.0, 1.0);\n}\nfadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);\nintroOpacity = 1.0 - exp(-clampedTime);\nv_size = getSize(speed);\nv_color = getColor(speed);\nv_color.a *= getOpacity(speed);\nposition = mix(position0, position1, f);\n} else {\nif (fUnclamped < 0.0) {\ngl_Position = vec4(0.0, 0.0, -2.0, 1.0);\nreturn;\n}\nif (id == 1.0) {\nextrude = e0;\nv_texcoord = vec2(0.5, 0.0);\nfadeOpacity = getFadeOpacity((t - t0) / u_trailLength);\nintroOpacity = 1.0 - exp(-t0);\nv_size = getSize(speed0);\nv_color = getColor(speed0);\nv_color.a *= getOpacity(speed0);\nposition = position0;\n} else if (id == 2.0) {\nextrude = -e0;\nv_texcoord = vec2(0.5, 1.0);\nfadeOpacity = getFadeOpacity((t - t0) / u_trailLength);\nintroOpacity = 1.0 - exp(-t0);\nv_size = getSize(speed0);\nv_color = getColor(speed0);\nv_color.a *= getOpacity(speed0);\nposition = position0;\n} else if (id == 3.0) {\nextrude = mix(e0, e1, f);\nv_texcoord = vec2(0.5, 0.0);\nfadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);\nintroOpacity = 1.0 - exp(-clampedTime);\nv_size = getSize(speed);\nv_color = getColor(speed);\nv_color.a *= getOpacity(speed);\nposition = mix(position0, position1, f);\n} else if (id == 4.0) {\nextrude = -mix(e0, e1, f);\nv_texcoord = vec2(0.5, 1.0);\nfadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);\nintroOpacity = 1.0 - exp(-clampedTime);\nv_size = getSize(speed);\nv_color = getColor(speed);\nv_color.a *= getOpacity(speed);\nposition = mix(position0, position1, f);\n}\n}\nvec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(extrude * v_size, 0.0)).xy;\ngl_Position = vec4(xy, 0.0, 1.0);\nv_color.a *= fadeOpacity;\nv_color.a *= mix(1.0, introOpacity, u_introFade);\nv_color.rgb *= v_color.a;\n}"
      },
      streamlines: {
        "streamlines.frag": "precision highp float;\nvarying float v_side;\nvarying float v_time;\nvarying float v_totalTime;\nvarying float v_timeSeed;\nvarying vec4 v_color;\nvarying float v_size;\nuniform float u_time;\nuniform float u_trailLength;\nuniform float u_flowSpeed;\nuniform float u_featheringSize;\nuniform float u_introFade;\n#include <raster/flow/getFragmentColor.glsl>\n#include <raster/flow/getFadeOpacity.glsl>\nvoid main(void) {\nfloat t = mod(v_timeSeed * (v_totalTime + u_trailLength) + u_time * u_flowSpeed, v_totalTime + u_trailLength) - v_time;\nvec4 color = v_color * step(0.0, t) * getFadeOpacity(t / u_trailLength);\ncolor *= mix(1.0, 1.0 - exp(-v_time), u_introFade);\ngl_FragColor = getFragmentColor(color, length((v_side + 1.0) / 2.0 - 0.5), v_size, u_featheringSize);\n}",
        "streamlines.vert": "attribute vec3 a_positionAndSide;\nattribute vec3 a_timeInfo;\nattribute vec2 a_extrude;\nattribute float a_speed;\nuniform mat3 u_dvsMat3;\nuniform mat3 u_displayViewMat3;\nvarying float v_time;\nvarying float v_totalTime;\nvarying float v_timeSeed;\nvarying vec4 v_color;\nvarying float v_side;\nvarying float v_size;\nuniform float u_featheringSize;\n#include <raster/flow/vv.glsl>\nvoid main(void) {\nvec4 lineColor = getColor(a_speed);\nfloat lineOpacity = getOpacity(a_speed);\nfloat lineSize = getSize(a_speed);\nvec2 position = a_positionAndSide.xy;\nv_side = a_positionAndSide.z;\nvec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(a_extrude * lineSize, 0.0)).xy;\ngl_Position = vec4(xy, 0.0, 1.0);\nv_time = a_timeInfo.x;\nv_totalTime = a_timeInfo.y;\nv_timeSeed = a_timeInfo.z;\nv_color = lineColor;\nv_color.a *= lineOpacity;\nv_color.rgb *= v_color.a;\nv_size = lineSize;\n}"
      },
      "vv.glsl": "#define MAX_STOPS 8\n#ifdef VV_COLOR\nuniform float u_color_stops[MAX_STOPS];\nuniform vec4 u_color_values[MAX_STOPS];\nuniform int u_color_count;\n#else\nuniform vec4 u_color;\n#endif\n#ifdef VV_OPACITY\nuniform float u_opacity_stops[MAX_STOPS];\nuniform float u_opacity_values[MAX_STOPS];\nuniform int u_opacity_count;\n#else\nuniform float u_opacity;\n#endif\n#ifdef VV_SIZE\nuniform float u_size_stops[MAX_STOPS];\nuniform float u_size_values[MAX_STOPS];\nuniform int u_size_count;\n#else\nuniform float u_size;\n#endif\nuniform float u_featheringOffset;\nvec4 getColor(float x) {\n#ifdef VV_COLOR\nvec4 color = u_color_values[0];\n{\nfor (int i = 1; i < MAX_STOPS; i++) {\nif (i >= u_color_count) {\nbreak;\n}\nfloat x1 = u_color_stops[i - 1];\nif (x < x1) {\nbreak;\n}\nfloat x2 = u_color_stops[i];\nvec4 y2 = u_color_values[i];\nif (x < x2) {\nvec4 y1 = u_color_values[i - 1];\ncolor = y1 + (y2 - y1) * (x - x1) / (x2 - x1);\n} else {\ncolor = y2;\n}\n}\n}\n#else\nvec4 color = u_color;\n#endif\nreturn color;\n}\nfloat getOpacity(float x) {\n#ifdef VV_OPACITY\nfloat opacity = u_opacity_values[0];\n{\nfor (int i = 1; i < MAX_STOPS; i++) {\nif (i >= u_opacity_count) {\nbreak;\n}\nfloat x1 = u_opacity_stops[i - 1];\nif (x < x1) {\nbreak;\n}\nfloat x2 = u_opacity_stops[i];\nfloat y2 = u_opacity_values[i];\nif (x < x2) {\nfloat y1 = u_opacity_values[i - 1];\nopacity = y1 + (y2 - y1) * (x - x1) / (x2 - x1);\n} else {\nopacity = y2;\n}\n}\n}\n#else\nfloat opacity = u_opacity;\n#endif\nreturn opacity;\n}\nfloat getSize(float x) {\n#ifdef VV_SIZE\nfloat size = u_size_values[0];\n{\nfor (int i = 1; i < MAX_STOPS; i++) {\nif (i >= u_size_count) {\nbreak;\n}\nfloat x1 = u_size_stops[i - 1];\nif (x < x1) {\nbreak;\n}\nfloat x2 = u_size_stops[i];\nfloat y2 = u_size_values[i];\nif (x < x2) {\nfloat y1 = u_size_values[i - 1];\nsize = y1 + (y2 - y1) * (x - x1) / (x2 - x1);\n} else {\nsize = y2;\n}\n}\n}\n#else\nfloat size = u_size;\n#endif\nreturn size + 2.0 * u_featheringSize * u_featheringOffset;\n}"
    },
    hillshade: {
      "hillshade.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\nuniform int u_hillshadeType;\nuniform float u_sinZcosAs[6];\nuniform float u_sinZsinAs[6];\nuniform float u_cosZs[6];\nuniform float u_weights[6];\nuniform vec2 u_factor;\nuniform float u_minValue;\nuniform float u_maxValue;\n#include <raster/lut/colorize.glsl>\n#include <raster/common/getSurfaceValues.glsl>\nvec3 rgb2hsv(vec3 c) {\nvec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\nvec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\nvec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\nfloat d = q.x - min(q.w, q.y);\nfloat e = 1.0e-10;\nreturn vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);\n}\nvec3 hsv2rgb(vec3 c) {\nvec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\nvec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\nreturn c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\nvec4 overlay(float val, float minValue, float maxValue, float hillshade) {\nval = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);\nvec4 rgb = colorize(vec4(val, val, val, 1.0), 255.0);\nvec3 hsv = rgb2hsv(rgb.xyz);\nhsv.z = hillshade;\nreturn vec4(hsv2rgb(hsv), 1.0) * rgb.a;\n}\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\nif (currentPixel.a == 0.0) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nfloat pv[10];\ngetSurfaceValues(u_image, pixelLocation, u_srcImageSize, pv);\nfloat alpha = pv[9];\nfloat dzx = (pv[2] + 2.0 * pv[5] + pv[8] - pv[0] - 2.0 * pv[3] - pv[6]) * u_factor.s;\nfloat dzy = (pv[6] + 2.0 * pv[7] + pv[8] - pv[0] - 2.0 * pv[1] - pv[2]) * u_factor.t;\nfloat dzd = sqrt(1.0 + dzx * dzx + dzy * dzy);\nfloat hillshade = 0.0;\nif (u_hillshadeType == 0){\nfloat cosDelta = u_sinZsinAs[0] * dzy - u_sinZcosAs[0] * dzx;\nfloat z = (u_cosZs[0] + cosDelta) / dzd;\nif (z < 0.0)  z = 0.0;\nhillshade = z;\n} else {\nfor (int k = 0; k < 6; k++) {\nfloat cosDelta = u_sinZsinAs[k] * dzy - u_sinZcosAs[k] * dzx;\nfloat z = (u_cosZs[k] + cosDelta) / dzd;\nif (z < 0.0) z = 0.0;\nhillshade = hillshade + z * u_weights[k];\nif (k == 5) break;\n}\n}\n#ifdef APPLY_COLORMAP\ngl_FragColor = overlay(pv[4], u_minValue, u_maxValue, hillshade) * alpha * u_opacity;\n#else\ngl_FragColor = vec4(hillshade, hillshade, hillshade, 1.0) * alpha * u_opacity;\n#endif\n}"
    },
    lut: {
      "colorize.glsl": "uniform sampler2D u_colormap;\nuniform float u_colormapOffset;\nuniform float u_colormapMaxIndex;\nvec4 colorize(vec4 currentPixel, float scaleFactor) {\nfloat clrIndex = clamp(currentPixel.r * scaleFactor - u_colormapOffset, 0.0, u_colormapMaxIndex);\nvec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);\nvec4 color = texture2D(u_colormap, clrPosition);\nvec4 result = vec4(color.rgb, color.a * currentPixel.a);\nreturn result;\n}",
      "lut.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\n#include <raster/lut/colorize.glsl>\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\nvec4 result = colorize(currentPixel, 1.0);\ngl_FragColor = vec4(result.xyz, 1.0) * result.a * u_opacity;\n}"
    },
    magdir: {
      "magdir.frag": "precision mediump float;\nvarying vec4 v_color;\nuniform lowp float u_opacity;\nvoid main() {\ngl_FragColor = v_color * u_opacity;\n}",
      "magdir.vert": "precision mediump float;\nattribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_vv;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform vec2 u_symbolSize;\nuniform vec2 u_symbolPercentRange;\nuniform vec2 u_dataRange;\nuniform float u_rotation;\nuniform vec4 u_colors[12];\nvarying vec4 v_color;\nvoid main()\n{\nfloat angle = a_offset.y + u_rotation;\n#ifndef ROTATION_GEOGRAPHIC\nangle = 3.14159265359 * 2.0 - angle - 3.14159265359 / 2.0;\n#endif\nvec2 offset = vec2(cos(angle), sin(angle)) * a_offset.x;\n#ifdef DATA_RANGE\nfloat valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);\nfloat sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);\nfloat sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);\n#else\nfloat sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;\n#endif\nvec2 pos = a_pos + offset * sizePercentage * u_symbolSize;\nv_color = u_colors[int(a_vv.x)];\ngl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);\n}"
    },
    reproject: {
      "reproject.frag": "precision mediump float;\nvarying vec2 v_texcoord;\n#include <raster/common/common.glsl>\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\ngl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;\n}",
      "reproject.vert": "precision mediump float;\nattribute vec2 a_position;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_position;\ngl_Position = vec4(2.0 * (a_position - 0.5), 0.0, 1.0);\n}"
    },
    rfx: {
      aspect: {
        "aspect.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform vec2 u_cellSize;\nuniform vec2 u_srcImageSize;\n#include <raster/common/getSurfaceValues.glsl>\nconst float pi = 3.14159265359;\nvoid main() {\nfloat pv[10];\ngetSurfaceValues(u_image, v_texcoord, u_srcImageSize, pv);\nfloat alpha = pv[9];\nfloat dzx = (pv[2] + 2.0 * pv[5] + pv[8] - pv[0] - 2.0 * pv[3] - pv[6]) / (8.0 * u_cellSize[0]);\nfloat dzy = -(pv[6] + 2.0 * pv[7] + pv[8] - pv[0] - 2.0 * pv[1] - pv[2]) / (8.0 * u_cellSize[1]);\nalpha *= sign(abs(dzx) + abs(dzy));\nfloat aspect_rad = (dzx == 0.0) ? (step(0.0, dzy) * 0.5 * pi + step(dzy, 0.0) * 1.5 * pi) : mod((2.5 * pi + atan(dzy, -dzx)), 2.0 * pi);\nfloat aspect = aspect_rad * 180.0 / pi;\ngl_FragColor = vec4(aspect, aspect, aspect, 1.0) * alpha;\n}"
      },
      bandarithmetic: {
        "bandarithmetic.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform mediump mat3 u_bandIndexMat3;\nuniform float u_adjustments[3];\n#include <raster/common/inverse.glsl>\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nvec3 pv2 = u_bandIndexMat3 * pv.rgb;\nfloat nir = pv2.r;\nfloat red = pv2.g;\nfloat index;\n#ifdef NDXI\nindex = (nir - red) * invertValue(nir + red);\n#elif defined(SR)\nindex = nir * invertValue(red);\n#elif defined(CI)\nindex = nir * invertValue(red) - 1.0;\n#elif defined(SAVI)\nindex = (nir - red) * invertValue(nir + red + u_adjustments[0]) * (1.0 + u_adjustments[0]);\n#elif defined(TSAVI)\nfloat s = u_adjustments[0];\nfloat a = u_adjustments[1];\nfloat x = u_adjustments[2];\nfloat y = -a * s + x * (1.0 + s * s);\nindex = (s * (nir - s * red - a)) * invertValue(a * nir + red + y);\n#elif defined(MSAVI)\nfloat nir2 = 2.0 * nir + 1.0;\nindex = 0.5 * (nir2 - sqrt(nir2 * nir2 - 8.0 * (nir - red)));\n#elif defined(GEMI)\nfloat eta = (2.0 * (nir * nir - red * red) + 1.5 * nir + 0.5 * red) * invertValue(nir + red + 0.5);\nindex = eta * (1.0 - 0.25 * eta) - (red - 0.125) * invertValue(1.0 - red);\n#elif defined(PVI)\nfloat a = u_adjustments[0];\nfloat b = u_adjustments[1];\nfloat y = sqrt(1.0 + a * a);\nindex = (nir - a * red - b) * invertValue(y);\n#elif defined(VARI)\nindex = (pv2.g - pv2.r) * invertValue(pv2.g + pv2.r - pv2.b);\n#elif defined(MTVI)\nfloat green = pv2.b;\nfloat v = sqrt(pow((2.0 * nir + 1.0), 2.0) - (6.0 * nir - 5.0 * sqrt(red)) - 0.5);\nindex = 1.5 * (1.2 * (nir - green) - 2.5 * (red - green)) * invertValue(v);\n#elif defined(RTVICORE)\nfloat green = pv2.b;\nindex = 100.0 * (nir - red) - 10.0 * (nir - green);\n#elif defined(EVI)\nfloat blue = pv2.b;\nfloat denom = nir + 6.0 * red - 7.5 * blue + 1.0;\nindex =  (2.5 * (nir - red)) * invertValue(denom);\n#elif defined(WNDWI)\nfloat g = pv2.r;\nfloat n = pv2.g;\nfloat s = pv2.s;\nfloat a = u_adjustments[0];\nfloat denom = g + a * n + (1.0 - a) * s;\nindex = (g - a * n - (1 - a) * s) * invertValue(denom);\n#elif defined(BAI)\nindex = invertValue(pow((0.1 - red), 2.0) + pow((0.06 - nir), 2.0));\n#else\ngl_FragColor = pv;\nreturn;\n#endif\ngl_FragColor = vec4(index, index, index, pv.a);\n}"
      },
      compositeband: {
        "compositeband.frag": "precision mediump float;\nuniform sampler2D u_image;\nuniform sampler2D u_image1;\nuniform sampler2D u_image2;\n#ifdef ONE_CONSTANT\nuniform float u_image1Const;\n#ifdef TWO_CONSTANT\nuniform float u_image2Const;\n#endif\nuniform mat3 u_imageSwap;\n#endif\nvarying vec2 v_texcoord;\nvoid main() {\nvec4 pv0 = texture2D(u_image, v_texcoord);\nfloat a = pv0.r;\nfloat alpha = pv0.a;\n#ifdef TWO_CONSTANT\nfloat b = u_image1Const;\nfloat c = u_image2Const;\nvec3 abc = u_imageSwap * vec3(a, b, c);\na = abc.s;\nb = abc.t;\nc = abc.p;\n#elif defined(ONE_CONSTANT)\nvec4 pv1 = texture2D(u_image1, v_texcoord);\nfloat b = pv1.r;\nfloat c = u_image1Const;\nvec3 abc = u_imageSwap * vec3(a, b, c);\na = abc.s;\nb = abc.t;\nc = abc.p;\nalpha *= pv1.a;\n#else\nvec4 pv1 = texture2D(u_image1, v_texcoord);\nvec4 pv2 = texture2D(u_image2, v_texcoord);\nfloat b = pv1.r;\nfloat c = pv2.r;\nalpha = alpha * pv1.a * pv2.a;\n#endif\ngl_FragColor = vec4(a, b, c, alpha);\n}"
      },
      computechange: {
        "computechange.frag": "precision mediump float;\nuniform sampler2D u_image;\nuniform sampler2D u_image1;\n#ifdef ONE_CONSTANT\nuniform float u_image1Const;\nuniform mat3 u_imageSwap;\n#endif\nvarying vec2 v_texcoord;\nuniform vec2 u_domainRange;\n#include <raster/common/inverse.glsl>\nvoid main() {\nvec4 pv0 = texture2D(u_image, v_texcoord);\nfloat a = pv0.r;\n#ifdef ONE_CONSTANT\nfloat b = u_image1Const;\nvec3 abc = u_imageSwap * vec3(a, b, 0);\na = abc.s;\nb = abc.t;\n#else\nvec4 pv1 = texture2D(u_image1, v_texcoord);\nfloat b = pv1.r;\n#endif\nfloat result = a;\nfloat alpha = pv0.a;\n#ifdef DIFFERENCE\nresult = a - b;\n#elif defined(RELATIVE)\nresult = (a - b) * invertValue(max(abs(a), abs(b)));\n#endif\nbool isInvalid = result < u_domainRange.s || result > u_domainRange.t;\nresult = isInvalid ? 0.0 : result;\nalpha *= float(!isInvalid);\n#ifdef ROUND_OUTPUT\nresult = floor(result + 0.5);\n#endif\ngl_FragColor = vec4(result, result, result, alpha);\n}"
      },
      contrast: {
        "contrast.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\n#include <raster/common/contrastBrightness.glsl>\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nvec4 result = adjustContrastBrightness(pv, false) ;\ngl_FragColor = vec4(result.rgb * 255.0, result.a);\n}"
      },
      convolution: {
        "convolution.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform vec2 u_srcImageSize;\n#define KERNEL_SIZE_ROWS ROWS\n#define KERNEL_SIZE_COLS COLS\nuniform vec2 u_clampRange;\nuniform float u_kernel[25];\n#include <raster/common/mirror.glsl>\nvoid main() {\nvec3 rgb = vec3(0.0, 0.0, 0.0);\nvec2 resolution = 1.0 / u_srcImageSize;\nfloat rowOffset = -float(floor(float(KERNEL_SIZE_ROWS) / 2.0));\nfloat colOffset = -float(floor(float(KERNEL_SIZE_COLS) / 2.0));\nfloat alpha = 1.0;\nfor (int row = 0; row < KERNEL_SIZE_ROWS; row++) {\nfloat pos_row = rowOffset + float(row);\nfor (int col = 0; col < KERNEL_SIZE_COLS; col++) {\nvec2 pos = v_texcoord + vec2(colOffset + float(col), pos_row) * resolution;\nvec4 pv = texture2D(u_image, mirror(pos));\nrgb += pv.rgb * u_kernel[row * KERNEL_SIZE_COLS + col];\nalpha *= pv.a;\n}\n}\nrgb = clamp(rgb, u_clampRange.s, u_clampRange.t);\ngl_FragColor = vec4(rgb * alpha, alpha);\n}"
      },
      curvature: {
        "curvature.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform float u_zlFactor;\nuniform vec2 u_srcImageSize;\n#include <raster/common/getSurfaceValues.glsl>\nvoid main() {\nfloat pv[10];\ngetSurfaceValues(u_image, v_texcoord, u_srcImageSize, pv);\nfloat alpha = pv[9];\nfloat d = ((pv[3] + pv[5]) * 0.5 - pv[4]);\nfloat e = ((pv[1] + pv[7]) * 0.5 - pv[4]);\nfloat curvature = 0.0;\n#ifdef STANDARD\ncurvature = -u_zlFactor * (d + e);\ngl_FragColor = vec4(curvature, curvature, curvature, alpha);\n#else\nfloat f = (-pv[0] + pv[2] + pv[6] - pv[8]) / 4.0;\nfloat g = (-pv[3] + pv[5]) / 2.0;\nfloat h = (pv[1] - pv[7]) / 2.0;\nfloat g2 = g * g;\nfloat h2 = h * h;\n#ifdef PROFILE\ncurvature = (u_zlFactor * (d * g2 + e * h2 + f * g * h)) / (g2 + h2);\n#else\ncurvature = (-u_zlFactor * (d * h2 + e * g2 - f * g * h)) / (g2 + h2);\n#endif\n#endif\ngl_FragColor = vec4(curvature, curvature, curvature, alpha);\n}"
      },
      extractband: {
        "extractband.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform mediump mat3 u_bandIndexMat3;\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nvec3 pv2 = u_bandIndexMat3 * pv.rgb;\ngl_FragColor = vec4(pv2, pv.a);\n}"
      },
      focalstatistics: {
        "focalstatistics.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform vec2 u_srcImageSize;\n#define KERNEL_SIZE_ROWS ROWS\n#define KERNEL_SIZE_COLS COLS\nuniform vec2 u_clampRange;\n#include <raster/common/mirror.glsl>\n#include <raster/common/inverse.glsl>\nvoid main() {\nvec2 resolution = 1.0 / u_srcImageSize;\nfloat rowOffset = -float(floor(float(KERNEL_SIZE_ROWS) / 2.0));\nfloat colOffset = -float(floor(float(KERNEL_SIZE_COLS) / 2.0));\nfloat count = 0.0;\n#ifdef STDDEV\nvec3 sum = vec3(0.0, 0.0, 0.0);\nvec3 sum2 = vec3(0.0, 0.0, 0.0);\n#endif\nvec4 currentPixel = texture2D(u_image, v_texcoord);\nvec3 rgb = currentPixel.rgb;\nfor (int row = 0; row < KERNEL_SIZE_ROWS; row++) {\nfloat pos_row = rowOffset + float(row);\nfor (int col = 0; col < KERNEL_SIZE_COLS; col++) {\nvec2 pos = v_texcoord + vec2(colOffset + float(col), pos_row) * resolution;\nvec4 pv = texture2D(u_image, mirror(pos));\ncount += pv.a;\n#ifdef MIN\nrgb = min(rgb, pv.rgb);\n#elif defined(MAX)\nrgb = max(rgb, pv.rgb);\n#elif defined(MEAN)\nrgb += pv.rgb;\n#elif defined(STDDEV)\nsum += pv.rgb;\nsum2 += (pv.rgb * pv.rgb);\n#endif\n}\n}\n#ifdef MEAN\nrgb *= invertValue(count);\n#elif defined(STDDEV)\nrgb = sqrt((sum2 - sum * sum * invertValue(count)) * invertValue(count));\n#endif\nfloat alpha = step(0.9999, count);\nrgb = clamp(rgb, u_clampRange.s, u_clampRange.t);\n#ifdef FILL\nrgb = (1.0 - currentPixel.a) * rgb + currentPixel.a * currentPixel.rgb;\n#endif\ngl_FragColor = vec4(rgb * alpha, alpha);\n}"
      },
      grayscale: {
        "grayscale.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform vec3 u_weights;\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nfloat value = dot(u_weights, pv.rgb);\ngl_FragColor = vec4(value, value, value, pv.a);\n}"
      },
      local: {
        "local.frag": "precision mediump float;\nuniform sampler2D u_image;\nuniform sampler2D u_image1;\n#ifdef ONE_CONSTANT\nuniform float u_image1Const;\n#ifdef TWO_CONSTANT\nuniform float u_image2Const;\n#endif\nuniform mat3 u_imageSwap;\n#endif\nvarying vec2 v_texcoord;\nuniform vec2 u_domainRange;\n#include <raster/common/inverse.glsl>\nvoid main() {\nvec4 pv0 = texture2D(u_image, v_texcoord);\nfloat a = pv0.r;\n#ifdef TWO_IMAGES\n#ifdef ONE_CONSTANT\nfloat b = u_image1Const;\nvec3 abc = u_imageSwap * vec3(a, b, 0);\na = abc.s;\nb = abc.t;\n#else\nvec4 pv1 = texture2D(u_image1, v_texcoord);\nfloat b = pv1.r;\n#endif\n#elif defined(CONDITIONAL)\n#ifdef TWO_CONSTANT\nfloat b = u_image1Const;\nfloat c = u_image2Const;\nvec3 abc = u_imageSwap * vec3(a, b, c);\na = abc.s;\nb = abc.t;\nc = abc.p;\n#elif defined(ONE_CONSTANT)\nvec4 pv1 = texture2D(u_image1, v_texcoord);\nfloat b = pv1.r;\nfloat c = u_image1Const;\nvec3 abc = u_imageSwap * vec3(a, b, c);\na = abc.s;\nb = abc.t;\nc = abc.p;\n#else\nvec4 pv1 = texture2D(u_image1, v_texcoord);\nvec4 pv2 = texture2D(u_image2, v_texcoord);\nfloat b = pv1.r;\nfloat c = pv2.r;\n#endif\n#endif\nfloat result = a;\nfloat alpha = pv0.a;\n#ifdef PLUS\nresult = a + b;\n#elif defined(MINUS)\nresult = a - b;\n#elif defined(TIMES)\nresult = a * b;\n#elif defined(DIVIDE)\nresult = a * invertValue(b);\nalpha *= float(abs(sign(b)));\n#elif defined(FLOATDIVIDE)\nresult = a * invertValue(b);\nalpha *= float(abs(sign(b)));\n#elif defined(FLOORDIVIDE)\nresult = floor(a * invertValue(b));\nalpha *= float(abs(sign(b)));\n#elif defined(SQUARE)\nresult = a * a;\n#elif defined(SQRT)\nresult = sqrt(a);\n#elif defined(POWER)\nresult = pow(a, b);\n#elif defined(LN)\nresult = a <= 0.0 ? 0.0: log(a);\nalpha *= float(a > 0.0);\n#elif defined(LOG_1_0)\nresult = a <= 0.0 ? 0.0: log2(a) * invertValue(log2(10.0));\nalpha *= float(a > 0.0);\n#elif defined(LOG_2)\nresult = a <= 0.0 ? 0.0: log2(a);\nalpha *= float(a > 0.0);\n#elif defined(EXP)\nresult = exp(a);\n#elif defined(EXP_1_0)\nresult = pow(10.0, a);\n#elif defined(EXP_2)\nresult = pow(2.0, a);\n#elif defined(ROUNDDOWN)\nresult = floor(a);\n#elif defined(ROUNDUP)\nresult = ceil(a);\n#elif defined(INT)\nresult = float(sign(a)) * floor(abs(a));\n#elif defined(MOD)\nresult = mod(a, b);\n#elif defined(NEGATE)\nresult = -a;\n#elif defined(ABS)\nresult = abs(a);\n#elif defined(ACOS)\nresult = abs(a) > 1.0 ? 0.0: acos(a);\nalpha *= step(abs(a), 1.00001);\n#elif defined(ACOSH)\nresult = acosh(a);\n#elif defined(ASIN)\nresult = abs(a) > 1.0 ? 0.0: asin(a);\nalpha *= step(abs(a), 1.00001);\n#elif defined(ASINH)\nresult = asinh(a);\n#elif defined(ATAN)\nresult = atan(a);\n#elif defined(ATANH)\nresult = abs(a) > 1.0 ? 0.0: atanh(a);\nalpha *= step(abs(a), 1.0);\n#elif defined(ATAN_2)\nresult = atan(a, b);\n#elif defined(COS)\nresult = cos(a);\n#elif defined(COSH)\nresult = cosh(a);\n#elif defined(SIN)\nresult = sin(a);\n#elif defined(SINH)\nresult = sinh(a);\n#elif defined(TAN)\nresult = tan(a);\n#elif defined(TANH)\nresult = tanh(a);\n#elif defined(BITWISEAND)\nresult = a & b;\n#elif defined(BITWISEOR)\nresult = a | b;\n#elif defined(BITWISELEFTSHIFT)\nresult = a << b;\n#elif defined(BITWISERIGHTSHIFT)\nresult = a >> b;\n#elif defined(BITWISENOT)\nresult = ~a;\n#elif defined(BITWISEXOR)\nresult = a ^ b;\n#elif defined(BOOLEANAND)\nresult = float((a != 0.0) && (b != 0.0));\n#elif defined(BOOLEANNOT)\nresult = float(a == 0.0);\n#elif defined(BOOLEANOR)\nresult = float((a != 0.0) || (b != 0.0));\n#elif defined(BOOLEANXOR)\nresult = float((a != 0.0) ^^ (b != 0.0));\n#elif defined(GREATERTHAN)\nresult = float(a > b);\n#elif defined(GREATERTHANEQUAL)\nresult = float(a >= b);\n#elif defined(LESSTHAN)\nresult = float(a < b);\n#elif defined(LESSTHANEQUAL)\nresult = float(a <= b);\n#elif defined(EQUALTO)\nresult = float(a == b);\n#elif defined(NOTEQUAL)\nresult = float(a != b);\n#elif defined(ISNULL)\nresult = float(alpha == 0.0);\nalpha = 1.0;\n#elif defined(SETNULL)\nfloat maskValue = float(a == 0.0);\nresult = maskValue * b;\nalpha *= maskValue;\n#elif defined(CONDITIONAL)\nfloat weight = float(abs(sign(a)));\nresult = weight * b + (1.0 - weight) * c;\n#endif\nbool isInvalid = result < u_domainRange.s || result > u_domainRange.t;\nresult = isInvalid ? 0.0 : result;\nalpha *= float(!isInvalid);\n#ifdef ROUND_OUTPUT\nresult = floor(result + 0.5);\n#endif\ngl_FragColor = vec4(result, result, result, alpha);\n}"
      },
      mask: {
        "mask.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\n#define LEN_INCLUDED_RANGES 6\n#define LEN_NODATA_VALUES 6\nuniform highp float u_includedRanges[6];\nuniform highp float u_noDataValues[6];\nfloat maskFactor(float bandValue, float fromValue, float to) {\nfloat factor = 1.0;\nfor (int i = 0; i < LEN_NODATA_VALUES; i++) {\nfactor *= float(u_noDataValues[i] != bandValue);\n}\nfactor *= step(fromValue, bandValue) * step(bandValue, to);\nreturn factor;\n}\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nfloat redFactor = maskFactor(pv.r, u_includedRanges[0], u_includedRanges[1]);\n#ifdef MULTI_BAND\nfloat greenFactor = maskFactor(pv.g, u_includedRanges[2], u_includedRanges[3]);\nfloat blueFactor = maskFactor(pv.b, u_includedRanges[4], u_includedRanges[5]);\nfloat maskFactor = redFactor * greenFactor * blueFactor;\ngl_FragColor = pv * maskFactor;\n#else\ngl_FragColor = pv * redFactor;\n#endif\n}"
      },
      ndvi: {
        "ndvi.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform mediump mat3 u_bandIndexMat3;\n#include <raster/common/inverse.glsl>\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nvec3 pv2 = u_bandIndexMat3 * pv.rgb;\nfloat nir = pv2.r;\nfloat red = pv2.g;\nfloat index = (nir - red) * invertValue(nir + red);\n#ifdef SCALED\nindex = floor((index + 1.0) * 100.0 + 0.5);\n#endif\ngl_FragColor = vec4(index, index, index, pv.a);\n}"
      },
      remap: {
        "remap.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\n#define LEN_REMAP_RANGES 18\n#define LEN_NODATA_RANGES 12\nuniform highp float u_rangeMaps[18];\nuniform highp float u_noDataRanges[12];\nuniform highp float u_unmatchMask;\nuniform vec2 u_clampRange;\nvoid main() {\nvec4 pv = texture2D(u_image, v_texcoord);\nfloat factor = 1.0;\nfloat bandValue = pv.r;\nfor (int i = 0; i < LEN_NODATA_RANGES; i+=2) {\nfloat inside = 1.0 - step(u_noDataRanges[i], bandValue) * step(bandValue, u_noDataRanges[i+1]);\nfactor *= inside;\n}\nfloat mapValue = 0.0;\nfloat includeMask = 0.0;\nfor (int i = 0; i < LEN_REMAP_RANGES; i+=3) {\nfloat stepMask = step(u_rangeMaps[i], bandValue) * step(bandValue, u_rangeMaps[i+1]);\nincludeMask = (1.0 - stepMask) * includeMask + stepMask;\nmapValue = (1.0 - stepMask) * mapValue + stepMask * u_rangeMaps[i+2];\n}\nbandValue = factor * (mapValue + (1.0 - includeMask) * u_unmatchMask * pv.r);\nfloat bandMask = factor * max(u_unmatchMask, includeMask);\nbandValue = clamp(bandValue, u_clampRange.s, u_clampRange.t);\ngl_FragColor = vec4(bandValue, bandValue, bandValue, bandMask * pv.a);\n}"
      },
      slope: {
        "slope.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texcoord;\nuniform vec2 u_cellSize;\nuniform float u_zFactor;\nuniform vec2 u_srcImageSize;\nuniform float u_pixelSizePower;\nuniform float u_pixelSizeFactor;\n#include <raster/common/getSurfaceValues.glsl>\nvoid main() {\nfloat pv[10];\ngetSurfaceValues(u_image, v_texcoord, u_srcImageSize, pv);\nfloat alpha = pv[9];\nfloat xf = (u_zFactor + pow(u_cellSize[0], u_pixelSizePower) * u_pixelSizeFactor) / (8.0 * u_cellSize[0]);\nfloat yf = (u_zFactor + pow(u_cellSize[1], u_pixelSizePower) * u_pixelSizeFactor) / (8.0 * u_cellSize[1]);\nfloat dzx = (pv[2] + 2.0 * pv[5] + pv[8] - pv[0] - 2.0 * pv[3] - pv[6]) * xf;\nfloat dzy = -(pv[6] + 2.0 * pv[7] + pv[8] - pv[0] - 2.0 * pv[1] - pv[2]) * yf;\nfloat rise2run = sqrt(dzx * dzx + dzy * dzy);\n#ifdef PERCENT_RISE\nfloat percentRise = rise2run * 100.0;\ngl_FragColor = vec4(percentRise, percentRise, percentRise, alpha);\n#else\nfloat degree = atan(rise2run) * 57.2957795;\ngl_FragColor = vec4(degree, degree, degree, alpha);\n#endif\n}"
      },
      stretch: {
        "stretch.frag": "precision mediump float;\nuniform sampler2D u_image;\nvarying highp vec2 v_texcoord;\nuniform float u_minCutOff[3];\nuniform float u_maxCutOff[3];\nuniform float u_minOutput;\nuniform float u_maxOutput;\nuniform float u_factor[3];\nuniform float u_gamma[3];\nuniform float u_gammaCorrection[3];\nfloat stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, float gamma, float gammaCorrection) {\nval = clamp(val, minCutOff, maxCutOff);\nfloat stretchedVal;\n#ifdef USE_GAMMA\nfloat tempf = 1.0;\nfloat outRange = maxOutput - minOutput;\nfloat relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);\ntempf -= step(1.0, gamma) * sign(gamma - 1.0) * pow(1.0 / outRange, relativeVal * gammaCorrection);\nstretchedVal = tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput;\nstretchedVal = clamp(stretchedVal, minOutput, maxOutput);\n#else\nstretchedVal = minOutput + (val - minCutOff) * factor;\n#endif\n#ifdef ROUND_OUTPUT\nstretchedVal = floor(stretchedVal + 0.5);\n#endif\nreturn stretchedVal;\n}\nvoid main() {\nvec4 currentPixel = texture2D(u_image, v_texcoord);\nfloat redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_gamma[0], u_gammaCorrection[0]);\n#ifdef MULTI_BAND\nfloat greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_gamma[1], u_gammaCorrection[1]);\nfloat blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_gamma[2], u_gammaCorrection[2]);\ngl_FragColor = vec4(redVal, greenVal, blueVal, currentPixel.a);\n#else\ngl_FragColor = vec4(redVal, redVal, redVal, currentPixel.a);\n#endif\n}"
      },
      vs: {
        "vs.vert": "precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\nv_texcoord = a_pos;\ngl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}"
      }
    },
    scalar: {
      "scalar.frag": "precision mediump float;\nuniform lowp float u_opacity;\nvarying vec2 v_pos;\nconst vec4 outlineColor = vec4(0.2, 0.2, 0.2, 1.0);\nconst float outlineSize = 0.02;\nconst float innerRadius = 0.25;\nconst float outerRadius = 0.42;\nconst float innerSquareLength = 0.15;\nvoid main() {\nmediump float dist = length(v_pos);\nmediump float fillalpha1 = smoothstep(outerRadius, outerRadius + outlineSize, dist);\nfillalpha1 *= (1.0-smoothstep(outerRadius + outlineSize, outerRadius + 0.1 + outlineSize, dist));\n#ifdef INNER_CIRCLE\nmediump float fillalpha2 = smoothstep(innerRadius, innerRadius + outlineSize, dist);\nfillalpha2 *= (1.0-smoothstep(innerRadius + outlineSize, innerRadius + 0.1 + outlineSize, dist));\n#else\nmediump float fillalpha2 = (abs(v_pos.x) < innerSquareLength ? 1.0 : 0.0) * (abs(v_pos.y) < innerSquareLength ? 1.0 : 0.0);\n#endif\ngl_FragColor = (fillalpha2 + fillalpha1) * outlineColor * u_opacity;\n}",
      "scalar.vert": "precision mediump float;\nattribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_vv;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform vec2 u_symbolSize;\nuniform vec2 u_symbolPercentRange;\nuniform vec2 u_dataRange;\nvarying vec2 v_pos;\nvoid main()\n{\n#ifdef DATA_RANGE\nfloat valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);\nfloat sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);\nfloat sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);\n#else\nfloat sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;\n#endif\nvec2 size = u_symbolSize * sizePercentage;\nvec2 pos = a_pos + a_offset * size;\nv_pos = a_offset;\ngl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);\n}"
    },
    stretch: {
      "stretch.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\nuniform float u_minCutOff[3];\nuniform float u_maxCutOff[3];\nuniform float u_minOutput;\nuniform float u_maxOutput;\nuniform float u_factor[3];\nuniform bool u_useGamma;\nuniform float u_gamma[3];\nuniform float u_gammaCorrection[3];\n#include <raster/lut/colorize.glsl>\nfloat stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {\nif (val >= maxCutOff) {\nreturn maxOutput;\n} else if (val <= minCutOff) {\nreturn minOutput;\n}\nfloat stretchedVal;\nif (useGamma) {\nfloat tempf = 1.0;\nfloat outRange = maxOutput - minOutput;\nfloat relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);\nif (gamma > 1.0) {\ntempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);\n}\nstretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;\n} else {\nstretchedVal = minOutput + (val - minCutOff) * factor;\n}\nreturn stretchedVal;\n}\nvoid main() {\nvec2 pixelLocation = getPixelLocation(v_texcoord);\nif (isOutside(pixelLocation)) {\ngl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\nreturn;\n}\nvec4 currentPixel = getPixel(pixelLocation);\n#ifdef NOOP\ngl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;\nreturn;\n#endif\nif (u_bandCount == 1) {\nfloat grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);\n#ifdef APPLY_COLORMAP\nvec4 result = colorize(vec4(grayVal, grayVal, grayVal, 1.0), u_useGamma ? 255.0 : 1.0);\ngl_FragColor = vec4(result.xyz, 1.0) * result.a * currentPixel.a * u_opacity;\n#else\ngl_FragColor = vec4(grayVal, grayVal, grayVal, 1.0) * currentPixel.a * u_opacity;\n#endif\n} else {\nfloat redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);\nfloat greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);\nfloat blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);\ngl_FragColor = vec4(redVal, greenVal, blueVal, 1.0) * currentPixel.a * u_opacity;\n}\n}"
    }
  },
  stencil: {
    "stencil.frag": "void main() {\ngl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n}",
    "stencil.vert": "attribute vec2 a_pos;\nuniform mat3 u_worldExtent;\nvoid main() {\ngl_Position = vec4(u_worldExtent * vec3(a_pos, 1.0), 1.0);\n}"
  },
  test: {
    "TestShader.common.glsl": "#ifndef RETURN_RED\nvarying    vec4      v_color;\n#endif\nvarying    vec2      v_offset;",
    "TestShader.frag": "precision highp float;\n#include <test/TestShader.common.glsl>\nvoid main() {\nif (v_offset.x > -.5 && v_offset.y > -.5 && v_offset.x < .5 && v_offset.y < .5) {\ndiscard;\n}\n#ifdef RETURN_RED\ngl_FragColor = vec4(1., 0., 0., 1.);\n#else\ngl_FragColor = v_color;\n#endif\n}",
    "TestShader.vert": "const float POS_PRECISION_FACTOR = 10.;\nconst float OFFSET_PRECISION_FACTOR = 10.;\nconst float SIZE_PRECISION_FACTOR = 10.;\nattribute  vec2      a_pos_packed;\nattribute  vec2      a_offset_packed;\nattribute  float     a_size_packed;\n#ifdef DATA_DRIVEN_COLOR\nconst float u_dataDrivenColor_validValues[4] = float[4](0., 0., 1., 0.);\nuniform    vec4      u_dataDrivenColor_colorFallback;\nuniform    vec4      u_dataDrivenColor_color;\n#endif\nuniform    float     u_view_zoomLevel;\n#include <test/TestShader.common.glsl>\n#ifdef DATA_DRIVEN_COLOR\nvec4 getColor(float value) {\nint index = -1;\nfor (int i = 0; i < 4; i++) {\nif (u_dataDrivenColor_validValues[i] == value) {\nindex = i;\nbreak;\n}\n}\nif (index == -1) {\nreturn u_dataDrivenColor_colorFallback;\n}\nreturn u_dataDrivenColor_color;\n}\n#endif\nvoid main() {\nvec2  a_pos = a_pos_packed / POS_PRECISION_FACTOR;\nvec2  a_offset = a_offset_packed / OFFSET_PRECISION_FACTOR;\nfloat a_size = a_size_packed / SIZE_PRECISION_FACTOR;\nvec4 color = vec4(1., 0., 0., 1.);\n#ifdef DATA_DRIVEN_COLOR\ncolor = getColor(1.);\n#endif\nvec2 offsetScaled = a_offset * a_size;\nvec4 pos = vec4(a_pos.xy + offsetScaled, 0., 1.);\ngl_Position = pos;\n#ifndef RETURN_RED\nv_color = color;\n#endif\nv_offset = a_offset;\n}"
  },
  tileInfo: {
    "tileInfo.frag": "uniform mediump sampler2D u_texture;\nvarying mediump vec2 v_tex;\nvoid main(void) {\nlowp vec4 color = texture2D(u_texture, v_tex);\ncolor.rgb *= color.a;\ngl_FragColor = color;\n}",
    "tileInfo.vert": "attribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform mediump float u_depth;\nuniform mediump vec2 u_coord_ratio;\nuniform mediump vec2 u_delta;\nuniform mediump vec2 u_dimensions;\nvarying mediump vec2 v_tex;\nvoid main() {\nmediump vec2 offset = u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);\nvec3 v_pos = u_dvsMat3 * vec3(offset, 1.0);\ngl_Position = vec4(v_pos.xy, 0.0, 1.0);\nv_tex = a_pos;\n}"
  },
  util: {
    "atan2.glsl": "float atan2(in float y, in float x) {\nfloat t0, t1, t2, t3, t4;\nt3 = abs(x);\nt1 = abs(y);\nt0 = max(t3, t1);\nt1 = min(t3, t1);\nt3 = 1.0 / t0;\nt3 = t1 * t3;\nt4 = t3 * t3;\nt0 =         - 0.013480470;\nt0 = t0 * t4 + 0.057477314;\nt0 = t0 * t4 - 0.121239071;\nt0 = t0 * t4 + 0.195635925;\nt0 = t0 * t4 - 0.332994597;\nt0 = t0 * t4 + 0.999995630;\nt3 = t0 * t3;\nt3 = (abs(y) > abs(x)) ? 1.570796327 - t3 : t3;\nt3 = x < 0.0 ?  3.141592654 - t3 : t3;\nt3 = y < 0.0 ? -t3 : t3;\nreturn t3;\n}",
    "encoding.glsl": "const vec4 rgba2float_factors = vec4(\n255.0 / (256.0),\n255.0 / (256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0),\n255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n);\nfloat rgba2float(vec4 rgba) {\nreturn dot(rgba, rgba2float_factors);\n}"
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/sources/resolver.js
function o5(r11) {
  return function(e9) {
    let o8 = r11;
    return e9.split("/").forEach((r12) => {
      o8 && (o8 = o8[r12]);
    }), o8;
  };
}
var t4 = new e5(o5(e7));
function n9(r11) {
  return t4.resolveIncludes(r11);
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BackgroundPrograms.js
var e8 = {
  shaders: {
    vertexShader: n9("background/background.vert"),
    fragmentShader: n9("background/background.frag")
  },
  attributes: /* @__PURE__ */ new Map([["a_pos", 0]])
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/AFeatureTile.js
var f2 = e4();
var d4 = n6();
var p2 = class extends r6 {
  constructor(t8, s9, i5, r11) {
    super(t8, s9, i5, r11, a, a);
  }
  destroy() {
    super.destroy();
  }
  setTransform(o8) {
    const a8 = this.resolution / o8.resolution, n13 = this.transforms.tileMat3, [m2, l3] = o8.toScreenNoRotation([0, 0], [this.x, this.y]), c4 = this.width / this.rangeX * a8, h6 = this.height / this.rangeY * a8;
    r(n13, c4, 0, 0, 0, h6, 0, m2, l3, 1), i(this.transforms.displayViewScreenMat3, o8.displayViewMat3, n13);
    const f3 = this.transforms.labelMat2d, d7 = window.devicePixelRatio, p5 = r2(n5(), c4 * d7, 0, 0, h6 * d7, m2 * d7, l3 * d7);
    e3(f3, o8.viewMat2d, p5);
  }
  _createTransforms() {
    return {
      labelMat2d: n5(),
      tileMat3: e4(),
      displayViewScreenMat3: e4()
    };
  }
  containsScreenPoint(t8, s9, i5) {
    const r11 = i(f2, t8.viewMat3, this.transforms.tileMat3), a8 = s2(f2, r11);
    if (null == a8) return true;
    o(d4, ...s9, 1);
    const l3 = S(d4, d4, a8), c4 = i5 * (this.resolution / t8.resolution);
    return l3[0] >= -c4 && l3[0] < this.width + c4 && l3[1] >= -c4 && l3[1] < this.height + c4;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/FreeList.js
var t5 = class _t {
  constructor(a8) {
    if (this.next = null, !Array.isArray(a8)) return void (this.data = a8);
    this.data = a8[0];
    let e9 = this;
    for (let n13 = 1; n13 < a8.length; n13++) e9.next = new _t([a8[n13]]), e9 = e9.next;
  }
  *values() {
    let t8 = this;
    for (; t8; ) yield t8.data, t8 = t8.next;
  }
  forEach(t8) {
    let a8 = this;
    for (; a8; ) t8(a8.data), a8 = a8.next;
  }
  get last() {
    return this.next ? this.next.last : this;
  }
};
var a2 = class {
  constructor(a8) {
    this._head = null, null != a8 && (this._head = new t5(a8));
  }
  get head() {
    return this._head;
  }
  maxAvailableSpace() {
    if (null == this._head) return 0;
    let t8 = 0;
    return this._head.forEach((a8) => {
      const e9 = a8.end - a8.start;
      t8 = Math.max(t8, e9);
    }), t8;
  }
  firstFit(t8) {
    if (null == this._head) return null;
    let a8 = null, e9 = this._head;
    for (; e9; ) {
      const n13 = e9.data.end - e9.data.start;
      if (n13 === t8) return a8 ? a8.next = e9.next : this._head = e9.next, e9.data.start;
      if (n13 > t8) {
        const a9 = e9.data.start;
        return e9.data.start += t8, a9;
      }
      a8 = e9, e9 = e9.next;
    }
    return null;
  }
  free(a8, e9) {
    const n13 = a8 + e9;
    if (null == this._head) {
      const e10 = new t5({
        start: a8,
        end: n13
      });
      return void (this._head = e10);
    }
    if (n13 <= this._head.data.start) {
      if (n13 === this._head.data.start) return void (this._head.data.start -= e9);
      const r12 = new t5({
        start: a8,
        end: n13
      });
      return r12.next = this._head, void (this._head = r12);
    }
    let r11 = this._head, d7 = r11.next;
    for (; d7; ) {
      if (d7.data.start >= n13) {
        if (r11.data.end === a8) {
          if (r11.data.end += e9, r11.data.end === d7.data.start) {
            const t8 = d7.data.end - d7.data.start;
            return r11.data.end += t8, void (r11.next = d7.next);
          }
          return;
        }
        if (d7.data.start === n13) return void (d7.data.start -= e9);
        const s10 = new t5({
          start: a8,
          end: n13
        });
        return s10.next = r11.next, void (r11.next = s10);
      }
      r11 = d7, d7 = d7.next;
    }
    if (a8 === r11.data.end) return void (r11.data.end += e9);
    const s9 = new t5({
      start: a8,
      end: n13
    });
    r11.next = s9;
  }
  clear() {
    this._head = null;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/PooledUint32Array.js
var r8 = has("esri-2d-log-allocations");
var s8 = class _s {
  static create(t8, e9) {
    const r11 = e9.acquireUint32Array(t8);
    return new _s(r11, e9);
  }
  constructor(t8, e9) {
    this._array = t8, this._pool = e9;
  }
  get array() {
    return this._array;
  }
  get length() {
    return this._array.length;
  }
  getUint32View(t8, e9) {
    return new Uint32Array(this._array.buffer, t8 + this._array.byteOffset, e9);
  }
  expand(t8) {
    if (t8 <= this._array.byteLength) return;
    const e9 = this._pool.acquireUint32Array(t8);
    e9.set(this._array), this._pool.releaseUint32Array(this._array), this._array = e9;
  }
  destroy() {
    this._pool.releaseUint32Array(this._array);
  }
};
var a3 = class _a {
  constructor() {
    this._data = new ArrayBuffer(_a.BYTE_LENGTH), this._freeList = new a2({
      start: 0,
      end: this._data.byteLength
    });
  }
  static get BYTE_LENGTH() {
    return 16e6;
  }
  get buffer() {
    return this._data;
  }
  acquireUint32Array(t8) {
    const e9 = this._freeList.firstFit(t8);
    return null == e9 ? null : new Uint32Array(this._data, e9, t8 / Uint32Array.BYTES_PER_ELEMENT);
  }
  releaseUint32Array(t8) {
    this._freeList.free(t8.byteOffset, t8.byteLength);
  }
};
var i3 = class {
  constructor() {
    this._pages = [], this._pagesByBuffer = /* @__PURE__ */ new Map(), this._bytesAllocated = 0;
  }
  destroy() {
    this._pages = [], this._pagesByBuffer = null;
  }
  get _bytesTotal() {
    return this._pages.length * a3.BYTE_LENGTH;
  }
  acquireUint32Array(e9) {
    if (this._bytesAllocated += e9, r8 && console.log(`Allocating ${e9}, (${this._bytesAllocated} / ${this._bytesTotal})`), e9 >= a3.BYTE_LENGTH) return new Uint32Array(e9 / Uint32Array.BYTES_PER_ELEMENT);
    for (const t8 of this._pages) {
      const r11 = t8.acquireUint32Array(e9);
      if (null != r11) return r11;
    }
    const s9 = this._addPage().acquireUint32Array(e9);
    return n2(s9, "Expected to allocate page"), s9;
  }
  releaseUint32Array(t8) {
    this._bytesAllocated -= t8.byteLength, r8 && console.log(`Freeing ${t8.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);
    const e9 = this._pagesByBuffer.get(t8.buffer);
    e9 && e9.releaseUint32Array(t8);
  }
  _addPage() {
    const t8 = new a3();
    return this._pages.push(t8), this._pagesByBuffer.set(t8.buffer, t8), t8;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/shaders/TileInfoPrograms.js
var r9 = {
  shaders: {
    vertexShader: n9("tileInfo/tileInfo.vert"),
    fragmentShader: n9("tileInfo/tileInfo.frag")
  },
  attributes: /* @__PURE__ */ new Map([["a_pos", 0]])
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/FeatureDisplayList.js
function r10(t8, e9) {
  return t8 << 16 | 255 & e9;
}
function d5(t8) {
  return 255 & t8;
}
var h3 = class {
  constructor(t8, e9, n13, i5, a8) {
    this.instance = t8, this.materialKey = e9, this.target = n13, this.start = i5, this.count = a8;
  }
  get textureKey() {
    return d5(this.materialKey);
  }
  get indexEnd() {
    return this.start + this.count;
  }
  extend(t8) {
    this.count += t8;
  }
  render(t8) {
    this.instance.techniqueRef.render(t8, this);
  }
  getStencilReference() {
    return this.target.stencilRef;
  }
  getAttributePrecisionPackFactors() {
    const t8 = this.instance.instanceId;
    return this.target.getMesh(t8).getAttributePrecisionPackFactors();
  }
  draw(t8, e9) {
    p(t8) ? this.drawCompute(t8.context, e9) : this.drawGeometry(t8.context, e9);
  }
  drawCompute(t8, e9) {
    const n13 = this.instance.instanceId, i5 = this.target.getMesh(n13).getComputeVAO(t8, e9), r11 = this.start * Uint32Array.BYTES_PER_ELEMENT / 3;
    t8.bindVAO(i5), t8.drawElements(E.POINTS, this.count / 3, C.UNSIGNED_INT, r11), t8.bindVAO(null);
  }
  drawGeometry(t8, e9) {
    const n13 = this.instance.instanceId, i5 = this.target.getMesh(n13).getGeometryVAO(t8, e9), r11 = this.start * Uint32Array.BYTES_PER_ELEMENT;
    t8.bindVAO(i5), t8.drawElements(E.TRIANGLES, this.count, C.UNSIGNED_INT, r11), t8.bindVAO(null);
  }
};
var l = class _l {
  constructor() {
    this._length = 0, this._minOrderedLength = 0, this._materialKeys = /* @__PURE__ */ new Set();
  }
  static fromDisplayEntities(t8, e9, n13, i5) {
    const a8 = new _l();
    for (const s9 of t8.values()) for (const t9 of s9.records) {
      const s10 = n13.getInstance(t9.instanceId), d7 = r10(s10.instanceId, t9.textureKey);
      a8.addRecord(s10, d7, t9.indexStart, t9.indexCount, t9.vertexStart, t9.vertexCount, e9, i5);
    }
    return a8;
  }
  get length() {
    return this._length;
  }
  get minOrderedLength() {
    return this._minOrderedLength;
  }
  get minUnorderedLength() {
    return this._materialKeys.size;
  }
  render(t8) {
    const {
      drawPhase: e9
    } = t8;
    for (const n13 of this.infos()) n13.instance.techniqueRef.drawPhase & e9 && n13.render(t8);
  }
  addRecord(i5, a8, s9, r11, d7, l3, o8, c4) {
    let u4 = s9, _3 = r11;
    if (_3 || (u4 = d7, _3 = l3), !_3) return;
    if (null == this._head) {
      const t8 = new h3(i5, a8, o8, u4, _3);
      return this._head = new t5(t8), this._tail = this._head, this._length++, void this._minOrderedLength++;
    }
    if (c4 === N2.STRICT_ORDER) return this._insert(i5, a8, o8, u4, _3, this._tail, null);
    let g3 = null, m2 = this._head;
    const f3 = i5.instanceId, E3 = i5.techniqueRef.symbologyPlane;
    if (c4 === N2.STRICT_MARKERS_AND_TEXT && (E3 === S2.MARKER || E3 === S2.TEXT)) return this._insert(i5, a8, o8, u4, _3, this._tail, null);
    for (; m2; ) {
      const t8 = m2.data.instance, e9 = t8.instanceId, n13 = t8.techniqueRef.symbologyPlane, s10 = g3?.data.instance.instanceId;
      if (E3 < n13 || f3 === s10 && f3 !== e9) return this._insert(i5, a8, o8, u4, _3, g3, m2);
      g3 = m2, m2 = m2.next;
    }
    this._insert(i5, a8, o8, u4, _3, g3, null);
  }
  *infos() {
    if (null != this._head) for (const t8 of this._head.values()) yield t8;
  }
  _insert(t8, e9, i5, a8, s9, r11, d7) {
    if (null == r11 && null == d7) {
      const r12 = new h3(t8, e9, i5, a8, s9);
      return this._head = new t5(r12), this._tail = this._head, this._length++, void this._minOrderedLength++;
    }
    return e9 !== this._tail.data.materialKey && this._minOrderedLength++, this._materialKeys.add(e9), null == r11 && null != d7 ? this._insertAtHead(t8, e9, i5, a8, s9, d7) : null != r11 && null == d7 ? this._insertAtEnd(t8, e9, i5, a8, s9, r11) : null != r11 && null != d7 ? this._insertAtMiddle(t8, e9, i5, a8, s9, r11, d7) : void 0;
  }
  _insertAtHead(t8, e9, i5, a8, s9, r11) {
    const d7 = a8 + s9;
    if (e9 === r11.data.materialKey && i5 === r11.data.target && d7 === r11.data.start) r11.data.start = a8, r11.data.count += s9;
    else {
      const d8 = new h3(t8, e9, i5, a8, s9);
      this._head = new t5(d8), this._head.next = r11, this._length++;
    }
  }
  _insertAtEnd(t8, e9, i5, a8, s9, r11) {
    if (r11.data.materialKey === e9 && r11.data.indexEnd === a8) r11.data.count += s9;
    else {
      const d7 = new h3(t8, e9, i5, a8, s9);
      this._tail = new t5(d7), r11.next = this._tail, this._length++;
    }
  }
  _insertAtMiddle(t8, e9, i5, a8, s9, r11, d7) {
    const l3 = a8 + s9;
    if (r11.data.materialKey === e9 && r11.data.target === i5 && r11.data.indexEnd === a8) r11.data.count += s9, r11.data.materialKey === d7.data.materialKey && r11.data.target === d7.data.target && r11.data.indexEnd === d7.data.start && (r11.data.count += d7.data.count, r11.next = d7.next, this._length--);
    else if (e9 === d7.data.materialKey && i5 === d7.data.target && l3 === d7.data.start) d7.data.start = a8, d7.data.count += s9;
    else {
      const l4 = new h3(t8, e9, i5, a8, s9), o8 = new t5(l4);
      r11.next = o8, o8.next = d7, this._length++;
    }
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/ReshufflePlan.js
var t6 = class {
  constructor(t8) {
    this._indexOnly = t8, this.vertex = {
      count: 0,
      operations: []
    }, this.index = {
      count: 0,
      operations: []
    };
  }
  copyRecord(t8) {
    let e9 = 0;
    this._indexOnly || (e9 = this.vertex.count - t8.vertexStart, this.vertex.operations.push({
      srcFrom: t8.vertexStart,
      dstFrom: this.vertex.count,
      count: t8.vertexCount,
      mutate: 0
    }), t8.vertexStart = this.vertex.count, this.vertex.count += t8.vertexCount);
    let n13 = false;
    if (this._indexOnly && this.index.operations.length >= 1) {
      const e10 = this.index.operations[this.index.operations.length - 1];
      e10.srcFrom + e10.count === t8.indexStart && (e10.count += t8.indexCount, n13 = true);
    }
    n13 || this.index.operations.push({
      srcFrom: t8.indexStart,
      dstFrom: this.index.count,
      count: t8.indexCount,
      mutate: e9
    }), t8.indexStart = this.index.count, this.index.count += t8.indexCount;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/Buffer.js
var n10 = 1.25;
var h4 = 32767;
var a4 = h4 << 16 | h4;
var d6 = class {
  constructor(t8, e9, r11, s9) {
    this._pool = s9;
    const n13 = s8.create(e9 * r11 * Uint32Array.BYTES_PER_ELEMENT, this._pool);
    this.size = e9, this.strideInt = r11, this.bufferType = t8, this.dirty = {
      start: 1 / 0,
      end: 0
    }, this.memoryStats = {
      bytesUsed: 0,
      bytesReserved: e9 * r11 * Uint32Array.BYTES_PER_ELEMENT
    }, this._gpu = null, this._cpu = n13, this.clear();
  }
  get elementSize() {
    return this._cpu.length / this.strideInt;
  }
  get intSize() {
    return this.fillPointer * this.strideInt;
  }
  get byteSize() {
    return this.intSize * Uint32Array.BYTES_PER_ELEMENT;
  }
  get invalidated() {
    return this.bufferSize > 0 && !this._gpu;
  }
  get invalidatedComputeBuffer() {
    return this.bufferSize > 0 && !this._gpuComputeTriangles;
  }
  invalidate() {
    this._invalidateTriangleBuffer(), this._gpu?.dispose(), this._gpu = null;
  }
  _invalidateTriangleBuffer() {
    this._gpuComputeTriangles?.dispose(), this._gpuComputeTriangles = null;
  }
  destroy() {
    this._gpu?.dispose(), this._gpuComputeTriangles?.dispose(), this._cpu?.destroy();
  }
  clear() {
    this.dirty.start = 1 / 0, this.dirty.end = 0, this.freeList = new a2({
      start: 0,
      end: this._cpu.length / this.strideInt
    }), this.fillPointer = 0;
  }
  ensure(t8) {
    if (this.maxAvailableSpace() >= t8) return;
    if (t8 * this.strideInt > this._cpu.length - this.fillPointer) {
      this.invalidate();
      const i5 = this._cpu.length / this.strideInt, e9 = Math.round((i5 + t8) * n10), r11 = e9 * this.strideInt;
      this._cpu.expand(r11 * Uint32Array.BYTES_PER_ELEMENT), this.freeList.free(i5, e9 - i5), this.memoryStats.bytesReserved += (e9 - i5) * this.strideInt * Uint32Array.BYTES_PER_ELEMENT;
    }
  }
  set(t8, i5) {
    this._cpu.array[t8] !== i5 && (this._cpu.array[t8] = i5, this.dirty.start = Math.min(t8, this.dirty.start), this.dirty.end = Math.max(t8 + 1, this.dirty.end));
  }
  getGPUBuffer(t8, i5 = false) {
    if (!this.bufferSize) return null;
    if (i5) {
      if ("index" !== this.bufferType) throw new Error("Tired to get triangle buffer, but target is not an index buffer");
      return null == this._gpuComputeTriangles && (this._gpuComputeTriangles = this._createComputeBuffer(t8)), this._gpuComputeTriangles;
    }
    return null == this._gpu && (this._gpu = this._createBuffer(t8)), this._gpu;
  }
  getView(t8, i5) {
    return this._cpu.getUint32View(t8, i5 / Uint32Array.BYTES_PER_ELEMENT);
  }
  get bufferSize() {
    return this._cpu.length / this.strideInt;
  }
  maxAvailableSpace() {
    return this.freeList.maxAvailableSpace();
  }
  insert(i5, e9, r11, s9) {
    const n13 = r11 * this.strideInt;
    if (!n13) return 0;
    const h6 = e9 * this.strideInt * Uint32Array.BYTES_PER_ELEMENT, a8 = new Uint32Array(i5, h6, n13), d7 = this.freeList.firstFit(r11);
    n2(d7, "First fit region must be defined");
    const u4 = d7 * this.strideInt, o8 = n13;
    if (this._cpu.array.set(a8, u4), 0 !== s9) for (let t8 = 0; t8 < a8.length; t8++) this._cpu.array[t8 + u4] += s9;
    return this.dirty.start = Math.min(this.dirty.start, u4), this.dirty.end = Math.max(this.dirty.end, u4 + o8), this.fillPointer = Math.max(this.fillPointer, u4 + o8), this.memoryStats.bytesUsed += r11 * this.strideInt * Uint32Array.BYTES_PER_ELEMENT, d7;
  }
  copyFrom(i5, e9, r11, s9, n13) {
    const h6 = r11 * this.strideInt;
    if (!h6) return 0;
    const a8 = e9 * this.strideInt * Uint32Array.BYTES_PER_ELEMENT, d7 = i5._cpu.getUint32View(a8, h6), u4 = this.freeList.firstFit(r11);
    n2(u4, "First fit region must be defined");
    const o8 = u4 * this.strideInt, f3 = h6;
    if (this._cpu.array.set(d7, o8), 0 !== s9) for (let t8 = 0; t8 < h6; t8++) this._cpu.array[o8 + t8 * this.strideInt + n13] += s9;
    return this.dirty.start = Math.min(this.dirty.start, o8), this.dirty.end = Math.max(this.dirty.end, o8 + f3), this.fillPointer = Math.max(this.fillPointer, o8 + f3), this.memoryStats.bytesUsed += r11 * this.strideInt * Uint32Array.BYTES_PER_ELEMENT, u4;
  }
  free(t8, i5, e9) {
    const r11 = t8 * this.strideInt, s9 = (t8 + i5) * this.strideInt;
    if (true === e9) for (let n13 = t8; n13 !== t8 + i5; n13++) this._cpu.array[n13 * this.strideInt] = a4;
    this.dirty.start = Math.min(this.dirty.start, r11), this.dirty.end = Math.max(this.dirty.end, s9), this.freeList.free(t8, i5), this.memoryStats.bytesUsed -= i5 * this.strideInt * Uint32Array.BYTES_PER_ELEMENT;
  }
  upload() {
    if (this.dirty.end) {
      if (this._invalidateTriangleBuffer(), null == this._gpu) return this.dirty.start = 1 / 0, void (this.dirty.end = 0);
      this._gpu.setSubData(this._cpu.array, this.dirty.start, this.dirty.start, this.dirty.end), this.dirty.start = 1 / 0, this.dirty.end = 0;
    }
  }
  reshuffle(t8, e9) {
    if (0 === e9.length) return;
    const r11 = this.byteSize, s9 = t8 * this.strideInt * Uint32Array.BYTES_PER_ELEMENT, n13 = r11 > s9, h6 = this._cpu, a8 = s8.create(s9, this._pool);
    n13 || a8.array.set(this._cpu.getUint32View(0, this.intSize));
    for (const i5 of e9) if (n13 || i5.srcFrom !== i5.dstFrom || 0 !== i5.mutate) {
      this.dirty.start = Math.min(this.dirty.start, i5.dstFrom * this.strideInt), this.dirty.end = Math.max(this.dirty.end, (i5.dstFrom + i5.count) * this.strideInt);
      for (let t9 = 0; t9 < i5.count; t9++) {
        const e10 = (i5.dstFrom + t9) * this.strideInt, r12 = (i5.srcFrom + t9) * this.strideInt;
        for (let t10 = 0; t10 < this.strideInt; t10++) a8.array[e10 + t10] = h6.array[r12 + t10] + i5.mutate;
      }
    }
    this._cpu.destroy(), this._cpu = a8, n13 && this.invalidate(), this.freeList.clear(), this.memoryStats.bytesUsed = this.memoryStats.bytesReserved = s9;
  }
  _createBuffer(t8) {
    const i5 = F.DYNAMIC_DRAW;
    return "index" === this.bufferType ? c.createIndex(t8, i5, this._cpu.array) : c.createVertex(t8, i5, this._cpu.array);
  }
  _createComputeBuffer(t8) {
    const i5 = F.DYNAMIC_DRAW, e9 = new Uint32Array(this.fillPointer / 3);
    for (let r11 = 0; r11 < this.fillPointer; r11 += 3) e9[r11 / 3] = this._cpu.array[r11];
    return c.createIndex(t8, i5, e9);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/cpuMapped/MappedMesh.js
var o6 = 1e3;
function n11(e9, t8) {
  const r11 = [], i5 = e9.attributes.filter((e10) => t8.locations.has(e10.name));
  for (const s9 of i5) r11.push({
    name: s9.name,
    type: s9.type,
    count: s9.count,
    divisor: 0,
    normalized: s9.normalized ?? false,
    offset: s9.offset,
    stride: e9.stride
  });
  return {
    geometry: r11
  };
}
function u3(e9, t8) {
  const r11 = [], i5 = e9.attributes.filter((e10) => t8.locations.has(e10.name));
  for (const s9 of i5) {
    r11.push({
      name: s9.name,
      type: s9.type,
      count: s9.count,
      divisor: 0,
      normalized: s9.normalized ?? false,
      offset: s9.offset,
      stride: e9.stride
    });
    const i6 = t8.computeAttributeMap[s9.name];
    null != i6 && 2 === i6.length && (r11.push({
      name: i6[0],
      count: s9.count,
      divisor: 0,
      type: s9.type,
      normalized: s9.normalized ?? false,
      offset: s9.offset + e9.stride,
      stride: e9.stride
    }), r11.push({
      name: i6[1],
      count: s9.count,
      divisor: 0,
      type: s9.type,
      normalized: s9.normalized ?? false,
      offset: s9.offset + 2 * e9.stride,
      stride: e9.stride
    }));
  }
  return {
    geometry: r11
  };
}
var a5 = class {
  constructor(e9, t8) {
    if (this._bufferPool = e9, this._layout = t8, this._invalidated = false, this._position = this._layout.attributes.find((e10) => "pos" === e10.name || "position" === e10.name), !this._position) throw new Error("InternalError: Unable to find position attribute");
  }
  destroy() {
    this._indexBuffer = u(this._indexBuffer), this._vertexBuffer = u(this._vertexBuffer), this._computeVAO?.disposeVAOOnly(), this._geometryVAO?.disposeVAOOnly();
  }
  get layout() {
    return this._layout;
  }
  getDrawArgs(e9, t8, r11, i5) {
    return i5 ? {
      primitive: E.POINTS,
      count: t8 / 3,
      offset: r11 / 3
    } : {
      primitive: e9,
      count: t8,
      offset: r11
    };
  }
  getAttributePrecisionPackFactors() {
    const e9 = {};
    for (const t8 of this.layout.attributes) t8.packPrecisionFactor && (e9[t8.name] = t8.packPrecisionFactor);
    return e9;
  }
  getDebugVertexInfo(e9 = false) {
    if (!this._vertexBuffer) return null;
    const t8 = this._layout, r11 = t8.stride, s9 = this._vertexBuffer.getView(0, this._vertexBuffer.byteSize), f3 = new DataView(s9.slice().buffer);
    let o8 = s9.byteLength / r11;
    e9 && (o8 = this._indexBuffer.fillPointer / 3);
    const n13 = this._indexBuffer.getView(0, this._indexBuffer.byteSize);
    let u4 = 0;
    const a8 = [];
    for (let h6 = 0; h6 < o8; h6++) {
      if (e9) {
        u4 = n13[3 * h6] * r11;
      }
      const s10 = {};
      for (const e10 of t8.attributes) {
        let t9 = `${e10.offset} ${e10.name}`, r12 = s5(f3, e10, u4);
        if (e10.packPrecisionFactor) if (t9 += ` (precision: ${e10.packPrecisionFactor})`, "number" == typeof r12) r12 /= e10.packPrecisionFactor;
        else for (let i5 = 0; i5 < r12.length; i5++) r12[i5] /= e10.packPrecisionFactor;
        s10[t9] = r12;
      }
      u4 += r11, a8.push(s10);
    }
    return {
      vertices: a8,
      layout: t8
    };
  }
  _ensure(e9, t8) {
    if (this._vertexBuffer && this._indexBuffer) this._indexBuffer.ensure(Math.max(e9, 1e3)), this._vertexBuffer.ensure(Math.max(t8, 1e3));
    else {
      const i5 = this._layout.stride / Uint32Array.BYTES_PER_ELEMENT;
      this._indexBuffer = new d6("index", Math.max(e9, o6), 1, this._bufferPool), this._vertexBuffer = new d6("vertex", Math.max(t8, o6), i5, this._bufferPool);
    }
  }
  append(e9) {
    const t8 = e9.layout.stride, r11 = e9.indices.byteLength / Uint32Array.BYTES_PER_ELEMENT, i5 = e9.vertices.byteLength / t8;
    this._ensure(r11, i5);
    const {
      vertices: s9,
      indices: f3
    } = e9, o8 = this._vertexBuffer.insert(s9, 0, s9.byteLength / t8, 0);
    return {
      vertexFrom: o8,
      indexFrom: this._indexBuffer.insert(f3, 0, f3.byteLength / 4, o8)
    };
  }
  copyRecordFrom(e9, r11, i5, s9) {
    const {
      indexStart: f3,
      indexCount: o8,
      vertexStart: n13,
      vertexCount: u4
    } = r11;
    this._ensure(o8, u4);
    const a8 = e9._position, h6 = i5 * (a8.packPrecisionFactor ?? 1), d7 = s9 * (a8.packPrecisionFactor ?? 1), c4 = a8.offset, _3 = s4(h6, d7), l3 = this._vertexBuffer.copyFrom(e9._vertexBuffer, n13, u4, _3, c4), m2 = this._indexBuffer.copyFrom(e9._indexBuffer, f3, o8, l3 - n13, 0), x3 = r11.clone();
    return x3.vertexStart = l3, x3.indexStart = m2, x3.overlaps = 0, x3;
  }
  remove(e9, t8, r11, i5) {
    this._indexBuffer.free(e9, t8), this._vertexBuffer.free(r11, i5);
  }
  upload() {
    this._invalidated = true;
  }
  getGeometryVAO(e9, t8) {
    if (!this._vertexBuffer || !this._indexBuffer || !this._vertexBuffer.bufferSize) return null;
    if (this._invalidated) {
      (this._vertexBuffer.invalidated || this._indexBuffer.invalidated) && (this._vertexBuffer.invalidate(), this._indexBuffer.invalidate(), this._geometryVAO?.disposeVAOOnly(), this._geometryVAO = null), this._vertexBuffer.upload(), this._indexBuffer.upload();
      const r11 = this._indexBuffer.getGPUBuffer(e9, false), i5 = this._vertexBuffer.getGPUBuffer(e9);
      this._geometryVAO || (this._geometryVAO = new o3(e9, t8.locations, n11(this.layout, t8), {
        geometry: i5
      }, r11)), this._invalidated = false;
    }
    return this._geometryVAO;
  }
  getComputeVAO(e9, t8) {
    if (!this._vertexBuffer || !this._indexBuffer || !this._vertexBuffer.bufferSize) return null;
    (this._vertexBuffer.invalidated || this._indexBuffer.invalidatedComputeBuffer) && (this._vertexBuffer.invalidate(), this._indexBuffer.invalidate(), this._computeVAO?.disposeVAOOnly(), this._computeVAO = null), this._vertexBuffer.upload(), this._indexBuffer.upload();
    const r11 = this._indexBuffer.getGPUBuffer(e9, true), i5 = this._vertexBuffer.getGPUBuffer(e9);
    return this._computeVAO || (this._computeVAO = new o3(e9, t8.locations, u3(this.layout, t8), {
      geometry: i5
    }, r11), this._invalidated = false), this._computeVAO;
  }
  get memoryStats() {
    return {
      bytesUsed: this._vertexBuffer.memoryStats.bytesUsed + this._indexBuffer.memoryStats.bytesUsed,
      bytesReserved: this._vertexBuffer.memoryStats.bytesReserved + this._indexBuffer.memoryStats.bytesReserved,
      vertex: this._vertexBuffer.memoryStats,
      index: this._indexBuffer.memoryStats
    };
  }
  reshuffle(e9) {
    this._vertexBuffer && this._vertexBuffer.reshuffle(e9.vertex.count, e9.vertex.operations), this._indexBuffer && this._indexBuffer.reshuffle(e9.index.count, e9.index.operations);
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/util/Reader.js
var t7 = class {
  constructor(t8) {
    this._pos = 0, this._buffer = t8, this._i32View = new Int32Array(this._buffer), this._f32View = new Float32Array(this._buffer);
  }
  readInt32() {
    return this._i32View[this._pos++];
  }
  readF32() {
    return this._f32View[this._pos++];
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/mesh/meshDebugUtils.js
function o7(e9) {
  if (!e9) return null;
  return {
    entities: n4(new t7(e9.entities), s3),
    vertexData: e9.data.map(a6)
  };
}
function a6(t8) {
  const i5 = t8.layout.stride, r11 = new DataView(t8.vertices), o8 = [], a8 = t8.vertices.byteLength / i5;
  let s9 = 0;
  for (let n13 = 0; n13 < a8; n13++) {
    const a9 = {};
    for (const i6 of t8.layout.attributes) {
      let t9 = `${i6.offset} ${i6.name}`, o9 = s5(r11, i6, s9);
      if (i6.packPrecisionFactor) if (t9 += ` (precision: ${i6.packPrecisionFactor})`, "number" == typeof o9) o9 /= i6.packPrecisionFactor;
      else for (let e9 = 0; e9 < o9.length; e9++) o9[e9] /= i6.packPrecisionFactor;
      a9[t9] = o9;
    }
    s9 += i5, o8.push(a9);
  }
  return {
    vertices: o8,
    layout: t8.layout
  };
}

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/FeatureTile.js
var y = () => n.getLogger("esri.views.2d.engine.webgl.FeatureTile");
var g = 0;
var b2 = class extends p2 {
  constructor(e9, s9, i5, r11, o8 = false) {
    super(e9, s9, i5, r11), this._meshes = /* @__PURE__ */ new Map(), this._entities = [], this._invalidated = false, this._nextUploadAllowed = false, this.tileAge = g++, this._metrics = [], this._entityIds = /* @__PURE__ */ new Set(), this._entityIdsFromBuffer = /* @__PURE__ */ new Set(), this._attributeEpoch = 0, this._encounteredEnd = false, this.visible = true, this.transforms.labelMat2d = n5(), this.enableDeferredUploads = o8;
  }
  destroy() {
    super.destroy(), this.clear();
  }
  clear() {
    for (const e9 of this._meshes.values()) e9.destroy();
    this._meshes.clear(), this._entities = [], this._metrics = [], this._displayList = null, this._invalidated = true, this._entityIds.clear(), this._nextUploadAllowed = true;
  }
  beforeRender(e9) {
    super.beforeRender(e9), this._needsReshuffle && e9.reshuffleManager.schedule(this);
  }
  tryReady(e9) {
    const t8 = this._invalidated && !this._uploadAllowed;
    return !(this._isReady || t8 || !this._encounteredEnd || !(e9 >= this._attributeEpoch)) && (has("esri-2d-update-debug") && console.debug(`Tile[${this.key.id}] FeatureTile.ready [epoch=${e9}]`), this.ready(), this.requestRender(), true);
  }
  get labelMetrics() {
    return this._metrics;
  }
  get hasData() {
    return !!this._meshes.size;
  }
  get needsUpload() {
    return this._invalidated;
  }
  get _uploadAllowed() {
    return !this.enableDeferredUploads || this._nextUploadAllowed;
  }
  upload() {
    this._nextUploadAllowed = true;
  }
  getDisplayList(e9, t8) {
    if (this._uploadAllowed && this._invalidated) {
      this._entities.sort((e10, t9) => {
        const s9 = t9.sortKey, i5 = e10.sortKey;
        return i5 === s9 ? e10.id - t9.id : i5 - s9;
      }), t8 === N2.BATCHING && this.reshuffle(true), this._displayList = l.fromDisplayEntities(this._entities, this, e9, t8);
      for (const e10 of this._meshes.values()) e10.upload();
      this.debugInfo.display.length = this._displayList.length, this.debugInfo.display.minOrderedLength = this._displayList.minOrderedLength, this.debugInfo.display.minUnorderedLength = this._displayList.minUnorderedLength, this.requestRender(), this._invalidated = false, this._nextUploadAllowed = false;
    }
    return this._displayList;
  }
  getMesh(e9) {
    if (!this._meshes.has(e9)) throw new Error(`InternalError: Unable to find VAO for instance: ${e9}`);
    return this._meshes.get(e9);
  }
  getSortKeys(e9) {
    const t8 = /* @__PURE__ */ new Map();
    for (const {
      id: s9,
      sortKey: i5
    } of this._entities) if (e9.has(s9) && t8.set(s9, i5), t8.size === e9.size) break;
    return t8;
  }
  onMessage(e9) {
    switch (e9.type) {
      case "append":
        this._onAppendMessage(e9);
        break;
      case "update":
        this._onUpdateMessage(e9);
    }
    if (this._aggregateMemoryStats(), this.requestRender(), e9.end) {
      if (has("esri-2d-update-debug") && console.debug(`Tile[${this.key.id}] FeatureTile.end [epoch=${e9.attributeEpoch}]`), !e9.attributeEpoch) throw new Error("InternalError: Attribute epoch not defined.");
      this._attributeEpoch = e9.attributeEpoch, this._encounteredEnd = true;
    }
  }
  _onAppendMessage(e9) {
    if (has("esri-2d-update-debug") && console.debug(`Tile[${this.key.id}] FeatureTile.append`, {
      append: o7(e9?.append)
    }), e9.clear && this.clear(), !e9.append) return;
    const t8 = n4(new t7(e9.append.entities), s3);
    this._insert(t8, e9.append.data, false);
  }
  _onUpdateMessage(e9) {
    has("esri-2d-update-debug") && console.debug(`Tile[${this.key.id}] FeatureTile.update`, {
      isPixelBuffer: e9.isPixelBuffer,
      modify: o7(e9.modify),
      remove: e9.remove
    });
    const t8 = n4(new t7(e9.modify.entities), s3), s9 = t8.map((e10) => e10.id), i5 = e9.isPixelBuffer ?? false, r11 = [...e9.remove, ...s9];
    i5 ? this._removeByIdsFromBuffer(r11) : this._removeByIds(r11), this._insert(t8, e9.modify.data, i5);
  }
  reshuffle(e9 = false) {
    if (this.destroyed) return;
    const t8 = /* @__PURE__ */ new Map();
    for (const s9 of this._entities) for (const i5 of s9.records) {
      const s10 = this._meshes.get(i5.instanceId);
      let r11 = t8.get(s10);
      r11 || (r11 = new t6(e9), t8.set(s10, r11)), r11.copyRecord(i5);
    }
    for (const [s9, i5] of t8) s9.reshuffle(i5);
    this._invalidated = true, this._aggregateMemoryStats(), has("esri-2d-update-debug") && y().info(`Tile ${this.key.id} was reshuffled.`);
  }
  copyPixelBufferedEntitesFrom(e9, t8, s9, i5) {
    const r11 = s9 * a, o8 = i5 * a;
    for (const d7 of e9._entities) {
      let s10 = null;
      for (const i6 of d7.records) if (i6.overlaps & t8) {
        const t9 = e9.getMesh(i6.instanceId), n13 = this._ensureMesh(i6.instanceId, t9.layout).copyRecordFrom(t9, i6, r11, o8);
        s10 || (s10 = new s3(d7.id, d7.sortKey), this._entityIdsFromBuffer.add(d7.id), this._entities.push(s10)), s10.records.push(n13);
      }
    }
    this._invalidated = true;
  }
  _ensureMesh(e9, t8) {
    return this._meshes.has(e9) || this._meshes.set(e9, new a5(this._stage.bufferPool, t8)), this._meshes.get(e9);
  }
  _insert(e9, t8, s9) {
    if (!e9.length) return;
    this._removeDuplicatedBufferedEntites(e9);
    const i5 = this._insertVertexData(t8);
    for (const r11 of e9) {
      for (const e10 of r11.records) e10.updateBaseOffsets(i5.get(e10.instanceId));
      s9 ? this._tryInsertBufferedEntity(r11) : this._insertEntity(r11);
    }
    this._invalidated = true;
  }
  _insertVertexData(e9) {
    const t8 = /* @__PURE__ */ new Map();
    for (const s9 of e9) {
      const {
        instanceId: e10,
        layout: i5
      } = s9, r11 = this._ensureMesh(e10, i5).append(s9);
      if (s9.metrics) {
        const e11 = n4(new t7(s9.metrics), r3) ?? [];
        this._metrics.push(...e11);
      }
      t8.set(e10, r11);
    }
    return t8;
  }
  _insertEntity(e9) {
    has("esri-2d-update-debug") && this._entityIds.has(e9.id) && console.error(`Tile ${this.key.id} insertEnitty: Already have entityId ${e9.id}`), this._entityIds.add(e9.id), this._entities.push(e9);
  }
  _tryInsertBufferedEntity(e9) {
    this._entityIds.has(e9.id) ? this._removeRecordsFromMesh(e9.records) : (this._entityIdsFromBuffer.add(e9.id), this._entities.push(e9));
  }
  _removeDuplicatedBufferedEntites(e9) {
    if (!this._entityIdsFromBuffer.size) return;
    const t8 = [];
    for (const s9 of e9) this._entityIdsFromBuffer.has(s9.id) && t8.push(s9.id);
    this._removeByIds(t8);
  }
  _removeByIdsFromBuffer(e9) {
    this._removeByIds(e9.filter((e10) => this._entityIdsFromBuffer.has(e10)));
  }
  _removeByIds(e9) {
    if (0 === e9.length) return;
    const t8 = new Set(e9), s9 = [];
    for (const i5 of this._entities) t8.has(i5.id) ? this._remove(i5) : s9.push(i5);
    this._entities = s9, this._invalidated = true;
  }
  _remove(e9) {
    this._removeRecordsFromMesh(e9.records), this._entityIds.delete(e9.id), this._entityIdsFromBuffer.delete(e9.id);
  }
  _removeRecordsFromMesh(e9) {
    for (const t8 of e9) {
      const {
        instanceId: e10,
        indexStart: s9,
        indexCount: i5,
        vertexStart: r11,
        vertexCount: o8
      } = t8;
      this._meshes.get(e10)?.remove(s9, i5, r11, o8);
    }
  }
  _aggregateMemoryStats() {
    this.debugInfo.memory.bytesUsed = 0, this.debugInfo.memory.bytesReserved = 0;
    for (const [e9, t8] of this._meshes) this.debugInfo.memory.bytesUsed += t8.memoryStats.bytesUsed, this.debugInfo.memory.bytesReserved += t8.memoryStats.bytesReserved;
  }
  get _needsReshuffle() {
    if (this.destroyed) return false;
    const {
      bytesUsed: e9,
      bytesReserved: t8
    } = this.debugInfo.memory, s9 = e9 / t8, {
      minOrderedLength: n13,
      length: h6
    } = this.debugInfo.display;
    return t8 > xt && s9 < bt || h6 > jt && n13 / h6 < kt;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/brushes/BrushClip.js
var m = () => b("clip", {
  geometry: [{
    location: 0,
    name: "a_pos",
    count: 2,
    type: C.SHORT
  }]
});
var p3 = class extends t3 {
  constructor() {
    super(...arguments), this._color = r4(0, 1, 0, 1);
  }
  dispose() {
    this._program && this._program.dispose();
  }
  prepareState({
    context: r11
  }) {
    r11.setStencilTestEnabled(true), r11.setBlendingEnabled(false), r11.setFaceCullingEnabled(false), r11.setColorMask(false, false, false, false), r11.setStencilOp(I.KEEP, I.KEEP, I.REPLACE), r11.setStencilWriteMask(255), r11.setStencilFunction(O.ALWAYS, 0, 255);
  }
  draw(r11, e9) {
    const {
      context: t8,
      state: o8,
      requestRender: i5,
      allowDelayedRender: p5
    } = r11, c4 = m(), d7 = e9.getVAO(t8, o8, c4.attributes, c4.bufferLayouts);
    null != d7.indexBuffer && (this._program || (this._program = e6(t8, e8)), !p5 || null == i5 || this._program.compiled ? (t8.useProgram(this._program), this._program.setUniform2fv("u_coord_range", [1, 1]), this._program.setUniform4fv("u_color", this._color), this._program.setUniformMatrix3fv("u_dvsMat3", o8.displayMat3), t8.bindVAO(d7), t8.drawElements(E.TRIANGLES, d7.indexBuffer.size, C.UNSIGNED_INT, 0), t8.bindVAO()) : i5());
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/brushes/BrushOverlay.js
var i4 = () => b("overlay", {
  geometry: [{
    location: 0,
    name: "a_pos",
    count: 2,
    type: C.FLOAT
  }],
  tex: [{
    location: 1,
    name: "a_uv",
    count: 2,
    type: C.UNSIGNED_SHORT
  }]
});
var a7 = class extends t3 {
  constructor() {
    super(...arguments), this._desc = {
      vsPath: "overlay/overlay",
      fsPath: "overlay/overlay",
      attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_uv", 1]])
    };
  }
  dispose() {
  }
  prepareState({
    context: e9
  }) {
    e9.setBlendingEnabled(true), e9.setColorMask(true, true, true, true), e9.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), e9.setStencilWriteMask(0), e9.setStencilTestEnabled(true), e9.setStencilFunction(O.GREATER, 255, 255);
  }
  draw(t8, r11) {
    const {
      context: n13,
      painter: o8,
      requestRender: s9,
      allowDelayedRender: a8
    } = t8;
    if (!r11.isReady) return;
    const {
      computedOpacity: u4,
      dvsMat3: d7,
      isWrapAround: c4,
      perspectiveTransform: m2,
      texture: f3,
      wrapAroundShift: l3
    } = r11;
    t8.timeline.begin(this.name);
    const p5 = o8.materialManager.getProgram(this._desc);
    if (a8 && null != s9 && !p5.compiled) return void s9();
    const _3 = i4(), v = r11.getVAO(n13, _3.bufferLayouts, _3.attributes);
    v && (n13.bindVAO(v), n13.useProgram(p5), n13.bindTexture(f3, j), p5.setUniformMatrix3fv("u_dvsMat3", d7), p5.setUniform1i("u_texture", j), p5.setUniform1f("u_opacity", u4), p5.setUniform2fv("u_perspective", m2), p5.setUniform2fv("u_texSize", r11.textureSize), p5.setUniform1f("u_wrapAroundShift", 0), r11.draw(t8.context), c4 && (p5.setUniform1f("u_wrapAroundShift", l3), r11.draw(t8.context)), n13.bindVAO(), t8.timeline.end(this.name));
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushStencil.js
var _ = class extends t3 {
  constructor() {
    super(...arguments), this._color = r4(1, 0, 0, 1), this._initialized = false;
  }
  dispose() {
    this._solidProgram && (this._solidProgram.dispose(), this._solidProgram = null), this._solidVertexArrayObject && (this._solidVertexArrayObject.dispose(), this._solidVertexArrayObject = null);
  }
  prepareState({
    context: e9
  }) {
    e9.setDepthWriteEnabled(false), e9.setDepthTestEnabled(false), e9.setStencilTestEnabled(true), e9.setBlendingEnabled(false), e9.setColorMask(false, false, false, false), e9.setStencilOp(I.KEEP, I.KEEP, I.REPLACE), e9.setStencilWriteMask(255);
  }
  draw(e9, r11) {
    const {
      context: t8,
      requestRender: i5,
      allowDelayedRender: s9
    } = e9;
    this._initialized || this._initialize(t8), !s9 || null == i5 || this._solidProgram.compiled ? (t8.setStencilFunctionSeparate(N.FRONT_AND_BACK, O.GREATER, r11.stencilRef, 255), t8.bindVAO(this._solidVertexArrayObject), t8.useProgram(this._solidProgram), this._solidProgram.setUniformMatrix3fv("u_dvsMat3", r11.transforms.displayViewScreenMat3), this._solidProgram.setUniform2fv("u_coord_range", [r11.rangeX, r11.rangeY]), this._solidProgram.setUniform1f("u_depth", 0), this._solidProgram.setUniform4fv("u_color", this._color), t8.drawArrays(E.TRIANGLE_STRIP, 0, 4), t8.bindVAO()) : i5();
  }
  _initialize(e9) {
    if (this._initialized) return true;
    const t8 = e6(e9, e8);
    if (!t8) return false;
    const o8 = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]), a8 = c.createVertex(e9, F.STATIC_DRAW, o8), l3 = new o3(e9, e8.attributes, r5, {
      geometry: a8
    });
    return this._solidProgram = t8, this._solidVertexArrayObject = l3, this._initialized = true, true;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushTileDebugInfo.js
var _2 = 512;
var x = 512;
var b3 = 16;
var p4 = 8;
var T = (x - 2 * p4) / 5;
var y2 = class extends t3 {
  constructor() {
    super(...arguments), this._color = r4(1, 0, 0, 1);
  }
  dispose() {
    this._outlineProgram?.dispose(), this._outlineProgram = null, this._tileInfoProgram?.dispose(), this._tileInfoProgram = null, this._outlineVertexArrayObject?.dispose(), this._outlineVertexArrayObject = null, this._tileInfoVertexArrayObject?.dispose(), this._tileInfoVertexArrayObject = null, this._ctx = null;
  }
  prepareState({
    context: e9
  }) {
    e9.setBlendingEnabled(true), e9.setBlendFunctionSeparate(R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE, R.ONE_MINUS_SRC_ALPHA), e9.setColorMask(true, true, true, true), e9.setStencilWriteMask(0), e9.setStencilTestEnabled(false);
  }
  draw(e9, t8) {
    const {
      context: o8,
      requestRender: i5,
      allowDelayedRender: s9
    } = e9;
    if (!t8.isReady && t8 instanceof b2 && t8.hasData) return;
    if (this._loadWGLResources(o8), s9 && null != i5 && (!this._outlineProgram.compiled || !this._tileInfoProgram.compiled)) return void i5();
    o8.bindVAO(this._outlineVertexArrayObject), o8.useProgram(this._outlineProgram), this._outlineProgram.setUniformMatrix3fv("u_dvsMat3", t8.transforms.displayViewScreenMat3), this._outlineProgram.setUniform2f("u_coord_range", t8.rangeX, t8.rangeY), this._outlineProgram.setUniform1f("u_depth", 0), this._outlineProgram.setUniform4fv("u_color", this._color), o8.drawArrays(E.LINE_STRIP, 0, 4);
    const n13 = this._getTexture(o8, t8);
    n13 ? (o8.bindVAO(this._tileInfoVertexArrayObject), o8.useProgram(this._tileInfoProgram), o8.bindTexture(n13, 0), this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3", t8.transforms.displayViewScreenMat3), this._tileInfoProgram.setUniform1f("u_depth", 0), this._tileInfoProgram.setUniform2f("u_coord_ratio", t8.rangeX / t8.width, t8.rangeY / t8.height), this._tileInfoProgram.setUniform2f("u_delta", 0, 0), this._tileInfoProgram.setUniform2f("u_dimensions", n13.descriptor.width, n13.descriptor.height), o8.drawArrays(E.TRIANGLE_STRIP, 0, 4), o8.bindVAO()) : o8.bindVAO();
  }
  _loadWGLResources(e9) {
    if (this._outlineProgram && this._tileInfoProgram) return;
    const r11 = e6(e9, e8), o8 = e6(e9, r9), l3 = new Int8Array([0, 0, 1, 0, 1, 1, 0, 1]), a8 = c.createVertex(e9, F.STATIC_DRAW, l3), m2 = new o3(e9, e8.attributes, r5, {
      geometry: a8
    }), u4 = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]), d7 = c.createVertex(e9, F.STATIC_DRAW, u4), h6 = new o3(e9, r9.attributes, r5, {
      geometry: d7
    });
    this._outlineProgram = r11, this._tileInfoProgram = o8, this._outlineVertexArrayObject = m2, this._tileInfoVertexArrayObject = h6;
  }
  _getTexture(e9, t8) {
    if (!this._ctx) {
      const e10 = document.createElement("canvas");
      e10.width = _2, e10.height = x, this._ctx = e10.getContext("2d");
    }
    if (!t8.tileDebugInfoTexture) {
      const r12 = new e2();
      r12.wrapMode = D.CLAMP_TO_EDGE, r12.samplingMode = L.LINEAR, r12.isImmutable = true, r12.width = _2, r12.height = x, t8.tileDebugInfoTexture = new c2(e9, r12);
    }
    const r11 = this._ctx;
    r11.clearRect(0, 0, r11.canvas.width, r11.canvas.height), r11.textAlign = "left", r11.textBaseline = "top", r11.font = b3 - 2 + "px sans-serif", r11.lineWidth = 2, r11.fillStyle = "white", r11.strokeStyle = "black";
    const {
      debugSlot: o8
    } = t8;
    let i5 = p4 + T * o8;
    const s9 = `${o8}) ${t8.key.id} (${t8.constructor.name})`;
    r11.strokeText(s9, p4, i5), r11.fillText(s9, p4, i5), i5 += b3;
    const {
      debugInfo: n13
    } = t8;
    if (n13) {
      const {
        length: e10,
        minOrderedLength: t9,
        minUnorderedLength: o9,
        triangleCount: s10
      } = n13.display;
      if (e10 > 0) {
        const t10 = `Length: ${e10}`;
        r11.strokeText(t10, p4, i5), r11.fillText(t10, p4, i5), i5 += b3;
      }
      if (t9) {
        const e11 = `Min ordered length: ${t9}`;
        r11.strokeText(e11, p4, i5), r11.fillText(e11, p4, i5), i5 += b3;
      }
      if (o9) {
        const e11 = `Min unordered length: ${o9}`;
        r11.strokeText(e11, p4, i5), r11.fillText(e11, p4, i5), i5 += b3;
      }
      if (s10 > 0) {
        s10 > 1e5 && (r11.fillStyle = "red", r11.strokeStyle = "white");
        const e11 = `Triangle count: ${s10}`;
        r11.strokeText(e11, p4, i5), r11.fillText(e11, p4, i5), i5 += b3;
      }
      const {
        bytesUsed: l3,
        bytesReserved: a8
      } = n13.memory;
      if (r11.fillStyle = "white", r11.strokeStyle = "black", l3 > 0 || a8 > 0) {
        const e11 = `Memory usage: ${l3} of ${a8} bytes`;
        r11.strokeText(e11, p4, i5), r11.fillText(e11, p4, i5), i5 += b3;
      }
    }
    return t8.tileDebugInfoTexture.setData(r11.canvas), t8.tileDebugInfoTexture;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/brushes.js
var h5 = {
  clip: p3,
  stencil: _,
  bitmap: d3,
  overlay: a7,
  tileDebugInfo: y2,
  vtlBackground: u2,
  vtlFill: f,
  vtlLine: s7,
  vtlCircle: n7,
  vtlSymbol: d2
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/Mesh2D.js
var l2 = (r11) => {
  switch (r11.BYTES_PER_ELEMENT) {
    case 1:
      return C.UNSIGNED_BYTE;
    case 2:
      return C.UNSIGNED_SHORT;
    case 4:
      return C.UNSIGNED_INT;
    default:
      throw new s("Cannot get DataType of array");
  }
};
var y3 = (e9, r11, t8, n13) => {
  let o8 = 0;
  for (let s9 = 1; s9 < t8; s9++) {
    const t9 = e9[2 * (r11 + s9 - 1)], n14 = e9[2 * (r11 + s9 - 1) + 1];
    o8 += (e9[2 * (r11 + s9)] - t9) * (e9[2 * (r11 + s9) + 1] + n14);
  }
  return n13 ? o8 > 0 : o8 < 0;
};
var x2 = ({
  coords: e9,
  lengths: r11
}, n13) => {
  const o8 = [];
  for (let s9 = 0, i5 = 0; s9 < r11.length; i5 += r11[s9], s9 += 1) {
    const c4 = i5, a8 = [];
    for (; s9 < r11.length - 1 && y3(e9, i5 + r11[s9], r11[s9 + 1], n13); s9 += 1, i5 += r11[s9]) a8.push(i5 + r11[s9] - c4);
    const f3 = e9.slice(2 * c4, 2 * (i5 + r11[s9])), m2 = i2(f3, a8, 2);
    for (const e10 of m2) o8.push(e10 + c4);
  }
  return o8;
};
var g2 = class _g {
  constructor(e9, r11, t8, n13 = false) {
    this._cache = {}, this.vertices = e9, this.indices = r11, this.primitiveType = t8, this.isMapSpace = n13;
  }
  static fromPath(e9) {
    const r11 = Q(new e(), e9.path, false, false), t8 = r11.coords, n13 = new Uint32Array(x2(r11, true)), o8 = new Uint32Array(t8.length / 2);
    for (let s9 = 0; s9 < o8.length; s9++) o8[s9] = s4(Math.floor(t8[2 * s9]), Math.floor(t8[2 * s9 + 1]));
    return new _g({
      geometry: o8
    }, n13, E.TRIANGLES);
  }
  static fromGeometry(t8, n13) {
    const o8 = n13.geometry?.type;
    switch (o8) {
      case "polygon":
        return _g.fromPolygon(t8, n13.geometry);
      case "extent":
        return _g.fromMapExtent(t8, n13.geometry);
      default:
        return n.getLogger("esri.views.2d.engine.webgl.Mesh2D").error(new s("mapview-bad-type", `Unable to create a mesh from type ${o8}`, n13)), _g.fromScreenExtent({
          xmin: 0,
          ymin: 0,
          xmax: 1,
          ymax: 1
        });
    }
  }
  static fromPolygon(e9, r11) {
    const t8 = K(new e(), r11, false, false), s9 = t8.coords, f3 = new Uint32Array(x2(t8, false)), h6 = new Uint32Array(s9.length / 2), u4 = n3(), l3 = n3();
    for (let o8 = 0; o8 < h6.length; o8++) o2(u4, s9[2 * o8], s9[2 * o8 + 1]), e9.toScreen(l3, u4), h6[o8] = s4(Math.floor(l3[0]), Math.floor(l3[1]));
    return new _g({
      geometry: h6
    }, f3, E.TRIANGLES, true);
  }
  static fromScreenExtent({
    xmin: e9,
    xmax: r11,
    ymin: t8,
    ymax: n13
  }) {
    const o8 = {
      geometry: new Uint32Array([s4(e9, t8), s4(r11, t8), s4(e9, n13), s4(e9, n13), s4(r11, t8), s4(r11, n13)])
    }, s9 = new Uint32Array([0, 1, 2, 3, 4, 5]);
    return new _g(o8, s9, E.TRIANGLES);
  }
  static fromMapExtent(e9, r11) {
    const [t8, n13] = e9.toScreen([0, 0], [r11.xmin, r11.ymin]), [o8, s9] = e9.toScreen([0, 0], [r11.xmax, r11.ymax]), i5 = {
      geometry: new Uint32Array([s4(t8, n13), s4(o8, n13), s4(t8, s9), s4(t8, s9), s4(o8, n13), s4(o8, s9)])
    }, c4 = new Uint32Array([0, 1, 2, 3, 4, 5]);
    return new _g(i5, c4, E.TRIANGLES);
  }
  destroy() {
    null != this._cache.indexBuffer && this._cache.indexBuffer.dispose();
    for (const e9 in this._cache.vertexBuffers) null != this._cache.vertexBuffers[e9] && this._cache.vertexBuffers[e9].dispose();
  }
  get elementType() {
    return l2(this.indices);
  }
  getIndexBuffer(e9, r11 = F.STATIC_DRAW) {
    return this._cache.indexBuffer || (this._cache.indexBuffer = c.createIndex(e9, r11, this.indices)), this._cache.indexBuffer;
  }
  getVertexBuffers(e9, r11 = F.STATIC_DRAW) {
    return this._cache.vertexBuffers || (this._cache.vertexBuffers = Object.keys(this.vertices).reduce((t8, n13) => __spreadProps(__spreadValues({}, t8), {
      [n13]: c.createVertex(e9, r11, this.vertices[n13])
    }), {})), this._cache.vertexBuffers;
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/ClippingInfo.js
var c3 = class _c extends s6 {
  constructor(e9, t8) {
    super(), this._clip = t8, this._cache = {}, this.stage = e9, this._handle = d(() => t8.version, () => this._invalidate()), this.ready();
  }
  static fromClipArea(e9, t8) {
    return new _c(e9, t8);
  }
  _destroyGL() {
    null != this._cache.mesh && (this._cache.mesh.destroy(), this._cache.mesh = null), null != this._cache.vao && (this._cache.vao.dispose(), this._cache.vao = null);
  }
  destroy() {
    this._destroyGL(), this._handle.remove();
  }
  getVAO(e9, t8, r11, s9) {
    const [i5, a8] = t8.size;
    if ("geometry" !== this._clip.type && this._lastWidth === i5 && this._lastHeight === a8 || (this._lastWidth = i5, this._lastHeight = a8, this._destroyGL()), null == this._cache.vao) {
      const i6 = this._createMesh(t8, this._clip), a9 = i6.getIndexBuffer(e9), o8 = i6.getVertexBuffers(e9);
      this._cache.mesh = i6, this._cache.vao = new o3(e9, r11, s9, o8, a9);
    }
    return this._cache.vao;
  }
  _createTransforms() {
    return {
      displayViewScreenMat3: e4()
    };
  }
  _invalidate() {
    this._destroyGL(), this.requestRender();
  }
  _createMesh(r11, s9) {
    switch (s9.type) {
      case "rect":
        return g2.fromScreenExtent(n8(s9, r11.size[0], r11.size[1]));
      case "path":
        return g2.fromPath(s9);
      case "geometry":
        return g2.fromGeometry(r11, s9);
      default:
        return n.getLogger("esri.views.2d.engine.webgl.ClippingInfo").error(new s("mapview-bad-type", "Unable to create ClippingInfo mesh from clip of type: ${clip.type}")), g2.fromScreenExtent({
          xmin: 0,
          ymin: 0,
          xmax: 1,
          ymax: 1
        });
    }
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/webgl/WGLContainer.js
var n12 = class extends h {
  set clips(s9) {
    super.clips = s9, this._updateClippingInfo(s9);
  }
  renderChildren(s9) {
    s9.painter.setPipelineState(null), null == this._renderPasses && (this._renderPasses = this.prepareRenderPasses(s9.painter));
    for (const r11 of this._renderPasses) try {
      r11.render(s9);
    } catch (e9) {
    }
  }
  prepareRenderPasses(e9) {
    return [e9.registerRenderPass({
      name: "clip",
      brushes: [h5.clip],
      target: () => this._clippingInfos,
      drawPhase: E2.MAP | E2.LABEL | E2.LABEL_ALPHA | E2.DEBUG | E2.HIGHLIGHT
    })];
  }
  _updateClippingInfo(s9) {
    null != this._clippingInfos && (this._clippingInfos.forEach((s10) => s10.destroy()), this._clippingInfos = null), null != s9 && s9.length && (this._clippingInfos = s9.items.map((s10) => c3.fromClipArea(this.stage, s10))), this.requestRender();
  }
};

export {
  h2 as h,
  n9 as n,
  _,
  i3 as i,
  b2 as b,
  y2 as y,
  h5 as h2,
  n12 as n2
};
//# sourceMappingURL=chunk-BUAHJQUY.js.map
