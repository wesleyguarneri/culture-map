import {
  h,
  r as r3
} from "./chunk-E3P3LIVT.js";
import {
  t as t2
} from "./chunk-HUX6Y26H.js";
import {
  e as e2,
  r as r2
} from "./chunk-LQTSBE7P.js";
import {
  u as u4
} from "./chunk-ZVFENZUF.js";
import {
  c as c2,
  e2 as e
} from "./chunk-P7OSFLIX.js";
import {
  u2 as u3
} from "./chunk-ZDC4PV4Y.js";
import {
  s as s3
} from "./chunk-SYYDVGKY.js";
import {
  D,
  G,
  L,
  c
} from "./chunk-YLE5AYZV.js";
import {
  n as n2
} from "./chunk-PRREDSOB.js";
import {
  Z,
  i2 as i,
  tt
} from "./chunk-SYATLP3H.js";
import {
  o
} from "./chunk-WGAPNV7F.js";
import {
  m,
  s as s2,
  u as u2
} from "./chunk-HJY2YILU.js";
import {
  l,
  r
} from "./chunk-2MMLMOWS.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  t4 as t,
  u2 as u
} from "./chunk-DXLOWWK7.js";
import {
  __async,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/libs/basisu/BasisU.js
function i2() {
  return t3 ??= (() => __async(this, null, function* () {
    const i4 = yield import("./basis_transcoder-TPOR6Q5Q.js"), t4 = yield i4.default({
      locateFile: (i5) => n2(`esri/libs/basisu/${i5}`)
    });
    return t4.initializeBasis(), t4;
  }))(), t3;
}
var t3;

// ../../../node_modules/@arcgis/core/libs/basisu/TextureFormat.js
var _;
!function(_4) {
  _4[_4.ETC1_RGB = 0] = "ETC1_RGB", _4[_4.ETC2_RGBA = 1] = "ETC2_RGBA", _4[_4.BC1_RGB = 2] = "BC1_RGB", _4[_4.BC3_RGBA = 3] = "BC3_RGBA", _4[_4.BC4_R = 4] = "BC4_R", _4[_4.BC5_RG = 5] = "BC5_RG", _4[_4.BC7_M6_RGB = 6] = "BC7_M6_RGB", _4[_4.BC7_M5_RGBA = 7] = "BC7_M5_RGBA", _4[_4.PVRTC1_4_RGB = 8] = "PVRTC1_4_RGB", _4[_4.PVRTC1_4_RGBA = 9] = "PVRTC1_4_RGBA", _4[_4.ASTC_4x4_RGBA = 10] = "ASTC_4x4_RGBA", _4[_4.ATC_RGB = 11] = "ATC_RGB", _4[_4.ATC_RGBA = 12] = "ATC_RGBA", _4[_4.FXT1_RGB = 17] = "FXT1_RGB", _4[_4.PVRTC2_4_RGB = 18] = "PVRTC2_4_RGB", _4[_4.PVRTC2_4_RGBA = 19] = "PVRTC2_4_RGBA", _4[_4.ETC2_EAC_R11 = 20] = "ETC2_EAC_R11", _4[_4.ETC2_EAC_RG11 = 21] = "ETC2_EAC_RG11", _4[_4.RGBA32 = 13] = "RGBA32", _4[_4.RGB565 = 14] = "RGB565", _4[_4.BGR565 = 15] = "BGR565", _4[_4.RGBA4444 = 16] = "RGBA4444";
}(_ || (_ = {}));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/BasisUtil.js
var l2 = null;
var o2 = null;
function g() {
  return __async(this, null, function* () {
    return null == o2 && (o2 = i2(), l2 = yield o2), o2;
  });
}
function u5(e3, t4) {
  if (null == l2) return e3.byteLength;
  const n3 = new l2.BasisFile(new Uint8Array(e3)), s5 = E(n3) ? m2(n3.getNumLevels(0), n3.getHasAlpha(), n3.getImageWidth(0, 0), n3.getImageHeight(0, 0), t4) : 0;
  return n3.close(), n3.delete(), s5;
}
function c3(e3, t4) {
  if (null == l2) return e3.byteLength;
  const n3 = new l2.KTX2File(new Uint8Array(e3)), s5 = T(n3) ? m2(n3.getLevels(), n3.getHasAlpha(), n3.getWidth(), n3.getHeight(), t4) : 0;
  return n3.close(), n3.delete(), s5;
}
function m2(e3, t4, s5, r4, i4) {
  const l4 = u3(t4 ? c.COMPRESSED_RGBA8_ETC2_EAC : c.COMPRESSED_RGB8_ETC2), o4 = i4 && e3 > 1 ? (4 ** e3 - 1) / (3 * 4 ** (e3 - 1)) : 1;
  return Math.ceil(s5 * r4 * l4 * o4);
}
function E(e3) {
  return e3.getNumImages() >= 1 && !e3.isUASTC();
}
function T(e3) {
  return e3.getFaces() >= 1 && e3.isETC1S();
}
function h2(e3, t4, n3) {
  return __async(this, null, function* () {
    null == l2 && (l2 = yield g());
    const s5 = new l2.BasisFile(new Uint8Array(n3));
    if (!E(s5)) return null;
    s5.startTranscoding();
    const r4 = p(e3, t4, s5.getNumLevels(0), s5.getHasAlpha(), s5.getImageWidth(0, 0), s5.getImageHeight(0, 0), (e4, t5) => s5.getImageTranscodedSizeInBytes(0, e4, t5), (e4, t5, n4) => s5.transcodeImage(n4, 0, e4, t5, 0, 0));
    return s5.close(), s5.delete(), r4;
  });
}
function _2(e3, t4, n3) {
  return __async(this, null, function* () {
    null == l2 && (l2 = yield g());
    const s5 = new l2.KTX2File(new Uint8Array(n3));
    if (!T(s5)) return null;
    s5.startTranscoding();
    const r4 = p(e3, t4, s5.getLevels(), s5.getHasAlpha(), s5.getWidth(), s5.getHeight(), (e4, t5) => s5.getImageTranscodedSizeInBytes(e4, 0, 0, t5), (e4, t5, n4) => s5.transcodeImage(n4, e4, 0, 0, t5, 0, -1, -1));
    return s5.close(), s5.delete(), r4;
  });
}
function p(e3, a2, l4, o4, g3, u7, c5, m4) {
  const {
    compressedTextureETC: E3,
    compressedTextureS3TC: T3
  } = e3.capabilities, [h4, _4] = E3 ? o4 ? [_.ETC2_RGBA, c.COMPRESSED_RGBA8_ETC2_EAC] : [_.ETC1_RGB, c.COMPRESSED_RGB8_ETC2] : T3 ? o4 ? [_.BC3_RGBA, c.COMPRESSED_RGBA_S3TC_DXT5_EXT] : [_.BC1_RGB, c.COMPRESSED_RGB_S3TC_DXT1_EXT] : [_.RGBA32, G.RGBA], p3 = a2.hasMipmap ? l4 : Math.min(1, l4), A = [];
  for (let t4 = 0; t4 < p3; t4++) A.push(new Uint8Array(c5(t4, h4))), m4(t4, h4, A[t4]);
  return a2.internalFormat = _4, a2.hasMipmap = A.length > 1, a2.samplingMode = a2.hasMipmap ? L.LINEAR_MIPMAP_LINEAR : L.LINEAR, a2.width = g3, a2.height = u7, new c2(e3, a2, {
    type: "compressed",
    levels: A
  });
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/DDSUtil.js
var o3 = () => n.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");
var a = 542327876;
var i3 = 131072;
var l3 = 4;
function s4(e3) {
  return e3.charCodeAt(0) + (e3.charCodeAt(1) << 8) + (e3.charCodeAt(2) << 16) + (e3.charCodeAt(3) << 24);
}
function u6(e3) {
  return String.fromCharCode(255 & e3, e3 >> 8 & 255, e3 >> 16 & 255, e3 >> 24 & 255);
}
var c4 = s4("DXT1");
var h3 = s4("DXT3");
var m3 = s4("DXT5");
var d = 31;
var p2 = 0;
var g2 = 1;
var D2 = 2;
var C = 3;
var f = 4;
var w = 7;
var T2 = 20;
var _3 = 21;
function E2(e3, r4, o4) {
  const a2 = S(o4, r4.hasMipmap ?? false);
  if (null == a2) throw new Error("DDS texture data is null");
  const {
    textureData: i4,
    internalFormat: l4,
    width: s5,
    height: u7
  } = a2;
  return r4.samplingMode = i4.levels.length > 1 ? L.LINEAR_MIPMAP_LINEAR : L.LINEAR, r4.hasMipmap = i4.levels.length > 1, r4.internalFormat = l4, r4.width = s5, r4.height = u7, new c2(e3, r4, i4);
}
function S(e3, t4) {
  const n3 = new Int32Array(e3, 0, d);
  if (n3[p2] !== a) return o3().error("Invalid magic number in DDS header"), null;
  if (!(n3[T2] & l3)) return o3().error("Unsupported format, must contain a FourCC code"), null;
  const s5 = n3[_3];
  let E3, S2;
  switch (s5) {
    case c4:
      E3 = 8, S2 = c.COMPRESSED_RGB_S3TC_DXT1_EXT;
      break;
    case h3:
      E3 = 16, S2 = c.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      break;
    case m3:
      E3 = 16, S2 = c.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      break;
    default:
      return o3().error("Unsupported FourCC code:", u6(s5)), null;
  }
  let A = 1, M2 = n3[f], x = n3[C];
  (3 & M2 || 3 & x) && (o3().warn("Rounding up compressed texture size to nearest multiple of 4."), M2 = M2 + 3 & -4, x = x + 3 & -4);
  const R2 = M2, X = x;
  let b, I;
  n3[D2] & i3 && false !== t4 && (A = Math.max(1, n3[w]));
  let v = n3[g2] + 4;
  const F = [];
  for (let r4 = 0; r4 < A; ++r4) I = (M2 + 3 >> 2) * (x + 3 >> 2) * E3, b = new Uint8Array(e3, v, I), F.push(b), v += I, M2 = Math.max(1, M2 >> 1), x = Math.max(1, x >> 1);
  return {
    textureData: {
      type: "compressed",
      levels: F
    },
    internalFormat: S2,
    width: R2,
    height: X
  };
}

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js
var N = class extends r2 {
  get parameters() {
    return this._parameters;
  }
  constructor(e3, r4) {
    super(), this._data = e3, this.type = e2.Texture, this._glTexture = null, this._loadingPromise = null, this._loadingController = null, this.events = new o(), this._parameters = __spreadValues(__spreadValues({}, M), r4), this._startPreload(e3);
  }
  dispose() {
    this.unload(), this._data = this.frameUpdate = void 0;
  }
  _startPreload(e3) {
    null != e3 && (e3 instanceof HTMLVideoElement ? (this.frameUpdate = (t4) => this._frameUpdate(e3, t4), this._startPreloadVideoElement(e3)) : e3 instanceof HTMLImageElement && this._startPreloadImageElement(e3));
  }
  _startPreloadVideoElement(e3) {
    if (!(Z(e3.src) || "auto" === e3.preload && e3.crossOrigin)) {
      e3.preload = "auto", e3.crossOrigin = "anonymous";
      const t4 = !e3.paused;
      if (e3.src = e3.src, t4 && e3.autoplay) {
        const t5 = () => {
          e3.removeEventListener("canplay", t5), e3.play();
        };
        e3.addEventListener("canplay", t5);
      }
    }
  }
  _startPreloadImageElement(e3) {
    tt(e3.src) || Z(e3.src) || e3.crossOrigin || (e3.crossOrigin = "anonymous", e3.src = e3.src);
  }
  _createDescriptor(e3) {
    const t4 = new e();
    return t4.wrapMode = this._parameters.wrap ?? D.REPEAT, t4.flipped = !this._parameters.noUnpackFlip, t4.samplingMode = this._parameters.mipmap ? L.LINEAR_MIPMAP_LINEAR : L.LINEAR, t4.hasMipmap = !!this._parameters.mipmap, t4.preMultiplyAlpha = !!this._parameters.preMultiplyAlpha, t4.maxAnisotropy = this._parameters.maxAnisotropy ?? (this._parameters.mipmap ? e3.parameters.maxMaxAnisotropy : 1), t4;
  }
  get glTexture() {
    return this._glTexture;
  }
  get memoryEstimate() {
    return this._glTexture?.usedMemory || C2(this._data, this._parameters);
  }
  load(e3) {
    if (this._glTexture) return this._glTexture;
    if (this._loadingPromise) return this._loadingPromise;
    const t4 = this._data;
    return null == t4 ? (this._glTexture = new c2(e3, this._createDescriptor(e3), null), this._glTexture) : (this._parameters.reloadable || (this._data = void 0), "string" == typeof t4 ? this._loadFromURL(e3, t4) : t4 instanceof Image ? this._loadFromImageElement(e3, t4) : t4 instanceof HTMLVideoElement ? this._loadFromVideoElement(e3, t4) : t4 instanceof ImageData || t4 instanceof HTMLCanvasElement ? this._loadFromImage(e3, t4) : (t(t4) || u(t4)) && this._parameters.encoding === u4.DDS_ENCODING ? this._loadFromDDSData(e3, t4) : (t(t4) || u(t4)) && this._parameters.encoding === u4.KTX2_ENCODING ? this._loadFromKTX2(e3, t4) : (t(t4) || u(t4)) && this._parameters.encoding === u4.BASIS_ENCODING ? this._loadFromBasis(e3, t4) : u(t4) ? this._loadFromPixelData(e3, t4) : t(t4) ? this._loadFromPixelData(e3, new Uint8Array(t4)) : null);
  }
  _frameUpdate(e3, t4) {
    return null == this._glTexture || e3.readyState < V.HAVE_CURRENT_DATA || t4 === e3.currentTime ? t4 : (this._glTexture.setData(e3), this._glTexture.descriptor.hasMipmap && this._glTexture.generateMipmap(), this._parameters.updateCallback && this._parameters.updateCallback(), e3.currentTime);
  }
  _loadFromDDSData(e3, t4) {
    return this._glTexture = E2(e3, this._createDescriptor(e3), t4), this._glTexture;
  }
  _loadFromKTX2(e3, t4) {
    return this._loadAsync(() => _2(e3, this._createDescriptor(e3), t4).then((e4) => (this._glTexture = e4, e4)));
  }
  _loadFromBasis(e3, t4) {
    return this._loadAsync(() => h2(e3, this._createDescriptor(e3), t4).then((e4) => (this._glTexture = e4, e4)));
  }
  _loadFromPixelData(e3, t4) {
    s3(this._parameters.width > 0 && this._parameters.height > 0);
    const r4 = this._createDescriptor(e3);
    return r4.pixelFormat = 1 === this._parameters.components ? G.LUMINANCE : 3 === this._parameters.components ? G.RGB : G.RGBA, r4.width = this._parameters.width ?? 0, r4.height = this._parameters.height ?? 0, this._glTexture = new c2(e3, r4, t4), this._glTexture;
  }
  _loadFromURL(e3, t4) {
    return this._loadAsync((r4) => __async(this, null, function* () {
      const s5 = yield t2(t4, {
        signal: r4
      });
      return s2(r4), this._loadFromImage(e3, s5);
    }));
  }
  _loadFromImageElement(e3, t4) {
    return t4.complete ? this._loadFromImage(e3, t4) : this._loadAsync((r4) => __async(this, null, function* () {
      const s5 = yield i(t4, t4.src, false, r4);
      return s2(r4), this._loadFromImage(e3, s5);
    }));
  }
  _loadFromVideoElement(e3, t4) {
    return t4.readyState >= V.HAVE_CURRENT_DATA ? this._loadFromImage(e3, t4) : this._loadFromVideoElementAsync(e3, t4);
  }
  _loadFromVideoElementAsync(t4, r4) {
    return this._loadAsync((a2) => new Promise((n3, l4) => {
      const m4 = () => {
        r4.removeEventListener("loadeddata", h4), r4.removeEventListener("error", _4), l(p3);
      }, h4 = () => {
        r4.readyState >= V.HAVE_CURRENT_DATA && (m4(), n3(this._loadFromImage(t4, r4)));
      }, _4 = (t5) => {
        m4(), l4(t5 || new s("Failed to load video"));
      };
      r4.addEventListener("loadeddata", h4), r4.addEventListener("error", _4);
      const p3 = m(a2, () => _4(u2()));
    }));
  }
  _loadFromImage(e3, t4) {
    let r4 = t4;
    if (!(r4 instanceof HTMLVideoElement)) {
      const {
        maxTextureSize: t5
      } = e3.parameters;
      r4 = this._parameters.downsampleUncompressed ? r3(r4, t5) : h(r4, t5);
    }
    const s5 = R(r4);
    this._parameters.width = s5.width, this._parameters.height = s5.height;
    const a2 = this._createDescriptor(e3);
    return a2.pixelFormat = 3 === this._parameters.components ? G.RGB : G.RGBA, a2.width = s5.width, a2.height = s5.height, this._glTexture = new c2(e3, a2, r4), this._glTexture;
  }
  _loadAsync(e3) {
    const t4 = new AbortController();
    this._loadingController = t4;
    const r4 = e3(t4.signal);
    this._loadingPromise = r4;
    const s5 = () => {
      this._loadingController === t4 && (this._loadingController = null), this._loadingPromise === r4 && (this._loadingPromise = null);
    };
    return r4.then(s5, s5), r4;
  }
  unload() {
    if (this._glTexture = r(this._glTexture), null != this._loadingController) {
      const e3 = this._loadingController;
      this._loadingController = null, this._loadingPromise = null, e3.abort();
    }
    this.events.emit("unloaded");
  }
};
function C2(e3, t4) {
  if (null == e3) return 0;
  if (t(e3) || u(e3)) return t4.encoding === u4.KTX2_ENCODING ? c3(e3, !!t4.mipmap) : t4.encoding === u4.BASIS_ENCODING ? u5(e3, !!t4.mipmap) : e3.byteLength;
  const {
    width: r4,
    height: s5
  } = e3 instanceof Image || e3 instanceof ImageData || e3 instanceof HTMLCanvasElement || e3 instanceof HTMLVideoElement ? R(e3) : t4;
  return (t4.mipmap ? 4 / 3 : 1) * r4 * s5 * (t4.components || 4) || 0;
}
function R(e3) {
  return e3 instanceof HTMLVideoElement ? {
    width: e3.videoWidth,
    height: e3.videoHeight
  } : e3;
}
var V;
!function(e3) {
  e3[e3.HAVE_NOTHING = 0] = "HAVE_NOTHING", e3[e3.HAVE_METADATA = 1] = "HAVE_METADATA", e3[e3.HAVE_CURRENT_DATA = 2] = "HAVE_CURRENT_DATA", e3[e3.HAVE_FUTURE_DATA = 3] = "HAVE_FUTURE_DATA", e3[e3.HAVE_ENOUGH_DATA = 4] = "HAVE_ENOUGH_DATA";
}(V || (V = {}));
var M = {
  wrap: {
    s: D.REPEAT,
    t: D.REPEAT
  },
  mipmap: true,
  noUnpackFlip: false,
  preMultiplyAlpha: false,
  downsampleUncompressed: false
};

export {
  g,
  N
};
//# sourceMappingURL=chunk-GOKBAMCG.js.map
