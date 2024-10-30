import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  s
} from "./chunk-OQI6JU2J.js";
import {
  e as e2
} from "./chunk-7PJ3GUSK.js";
import {
  t
} from "./chunk-2LHHRVKS.js";
import {
  c,
  e2 as e
} from "./chunk-QATJRB5Q.js";
import {
  D,
  G,
  P
} from "./chunk-KYLW5XXS.js";
import {
  M,
  b,
  h,
  i,
  o
} from "./chunk-A2FDYA6M.js";
import {
  L,
  f2 as f,
  w
} from "./chunk-AIZ3T7E3.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/2d/engine/ImageryBitmapSource.js
var l = class {
  constructor(l2, e3, t2) {
    this.pixelBlock = l2, this.extent = e3, this.originalPixelBlock = t2;
  }
  get width() {
    return null != this.pixelBlock ? this.pixelBlock.width : 0;
  }
  get height() {
    return null != this.pixelBlock ? this.pixelBlock.height : 0;
  }
  render(l2) {
    const e3 = this.pixelBlock;
    if (null == e3) return;
    const t2 = this.filter({
      extent: this.extent,
      pixelBlock: this.originalPixelBlock ?? e3
    });
    if (null == t2.pixelBlock) return;
    t2.pixelBlock.maskIsAlpha && (t2.pixelBlock.premultiplyAlpha = true);
    const i2 = t2.pixelBlock.getAsRGBA(), h2 = l2.createImageData(t2.pixelBlock.width, t2.pixelBlock.height);
    h2.data.set(i2), l2.putImageData(h2, 0, 0);
  }
  getRenderedRasterPixels() {
    const l2 = this.filter({
      extent: this.extent,
      pixelBlock: this.pixelBlock
    });
    return null == l2.pixelBlock ? null : (l2.pixelBlock.maskIsAlpha && (l2.pixelBlock.premultiplyAlpha = true), {
      width: l2.pixelBlock.width,
      height: l2.pixelBlock.height,
      renderedRasterPixels: new Uint8Array(l2.pixelBlock.getAsRGBA().buffer)
    });
  }
};

// ../../../node_modules/@arcgis/core/views/2d/engine/Bitmap.js
function g(t2) {
  return t2 && "render" in t2;
}
function f2(t2) {
  const e3 = document.createElement("canvas");
  return e3.width = t2.width, e3.height = t2.height, t2.render(e3.getContext("2d")), e3;
}
function w2(t2) {
  return g(t2) ? t2 instanceof l ? t2.getRenderedRasterPixels()?.renderedRasterPixels : f2(t2) : t2;
}
var b2 = class extends s {
  constructor(t2 = null, e3 = false) {
    super(), this.blendFunction = "standard", this._sourceWidth = 0, this._sourceHeight = 0, this._textureInvalidated = false, this._texture = null, this.stencilRef = 0, this.coordScale = [1, 1], this._height = void 0, this.pixelRatio = 1, this.resolution = 0, this.rotation = 0, this._source = null, this._width = void 0, this.x = 0, this.y = 0, this.immutable = e3, this.source = t2, this.requestRender = this.requestRender.bind(this);
  }
  destroy() {
    this._texture && (this._texture.dispose(), this._texture = null), null != this._uploadStatus && (this._uploadStatus.controller.abort(), this._uploadStatus = null);
  }
  get isSourceScaled() {
    return this.width !== this._sourceWidth || this.height !== this._sourceHeight;
  }
  get height() {
    return void 0 !== this._height ? this._height : this._sourceHeight;
  }
  set height(t2) {
    this._height = t2;
  }
  get source() {
    return this._source;
  }
  set source(t2) {
    null == t2 && null == this._source || (this._source = t2, this.invalidateTexture(), this.requestRender());
  }
  get width() {
    return void 0 !== this._width ? this._width : this._sourceWidth;
  }
  set width(t2) {
    this._width = t2;
  }
  beforeRender(t2) {
    super.beforeRender(t2), this.updateTexture(t2);
  }
  setSourceAsync(i2, s2) {
    return __async(this, null, function* () {
      null != this._uploadStatus && this._uploadStatus.controller.abort();
      const r = new AbortController(), h2 = L();
      return w(s2, () => r.abort()), w(r, (t2) => h2.reject(t2)), this._uploadStatus = {
        controller: r,
        resolver: h2
      }, this.source = i2, h2.promise;
    });
  }
  invalidateTexture() {
    this._textureInvalidated || (this._textureInvalidated = true, this._source instanceof HTMLImageElement ? (this._sourceHeight = this._source.naturalHeight, this._sourceWidth = this._source.naturalWidth) : this._source && (this._sourceHeight = this._source.height, this._sourceWidth = this._source.width));
  }
  updateTransitionProperties(t2, e3) {
    t2 >= 64 && (this.fadeTransitionEnabled = false, this.inFadeTransition = false), super.updateTransitionProperties(t2, e3);
  }
  setTransform(t2) {
    const e3 = o(this.transforms.displayViewScreenMat3), [i2, a] = t2.toScreenNoRotation([0, 0], [this.x, this.y]), l2 = this.resolution / this.pixelRatio / t2.resolution, d = l2 * this.width, c2 = l2 * this.height, _ = Math.PI * this.rotation / 180;
    M(e3, e3, t(i2, a)), M(e3, e3, t(d / 2, c2 / 2)), h(e3, e3, -_), M(e3, e3, t(-d / 2, -c2 / 2)), b(e3, e3, t(d, c2)), i(this.transforms.displayViewScreenMat3, t2.displayViewMat3, e3);
  }
  setSamplingProfile(t2) {
    this._texture && (t2.mips && !this._texture.descriptor.hasMipmap && this._texture.generateMipmap(), this._texture.setSamplingMode(t2.samplingMode));
  }
  bind(t2, e3) {
    this._texture && t2.bindTexture(this._texture, e3);
  }
  updateTexture(_0) {
    return __async(this, arguments, function* ({
      context: t2,
      painter: e3
    }) {
      if (!this._textureInvalidated) return;
      if (this._textureInvalidated = false, this._texture || (this._texture = this._createTexture(t2)), !this.source) return void this._texture.setData(null);
      this._texture.resize(this._sourceWidth, this._sourceHeight);
      const s2 = w2(this.source);
      try {
        if (null != this._uploadStatus) {
          const {
            controller: t3,
            resolver: i2
          } = this._uploadStatus, r = {
            signal: t3.signal
          }, {
            width: h2,
            height: o2
          } = this, u = this._texture, a = e3.textureUploadManager;
          yield a.enqueueTextureUpdate({
            data: s2,
            texture: u,
            width: h2,
            height: o2
          }, r), i2.resolve(), this._uploadStatus = null;
        } else this._texture.setData(s2);
        this.ready();
      } catch (r) {
        f(r);
      }
    });
  }
  onDetach() {
    this.destroy();
  }
  _createTransforms() {
    return {
      displayViewScreenMat3: e2()
    };
  }
  _createTexture(t2) {
    const e3 = this.immutable, i2 = new e();
    return i2.internalFormat = e3 ? P.RGBA8 : G.RGBA, i2.wrapMode = D.CLAMP_TO_EDGE, i2.isImmutable = e3, i2.width = this._sourceWidth, i2.height = this._sourceHeight, new c(t2, i2);
  }
};

export {
  l,
  g,
  f2 as f,
  b2 as b
};
//# sourceMappingURL=chunk-PTO6XZBI.js.map
