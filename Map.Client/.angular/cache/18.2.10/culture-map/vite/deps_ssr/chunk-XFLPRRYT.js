import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t as t2
} from "./chunk-Z5ZLX3BE.js";
import {
  a
} from "./chunk-EPIUUGS2.js";
import {
  n
} from "./chunk-LGS63R4F.js";
import {
  S
} from "./chunk-AIZ3T7E3.js";
import {
  t
} from "./chunk-6WGE3IUL.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLTextureMaterial.js
var u = class extends t2 {
  constructor(t3) {
    super(t3), this._numLoading = 0, this._disposed = false, this._textures = t3.textures, this._textureId = t3.textureId, this._acquire(t3.textureId, (t4) => this._texture = t4), this._acquire(t3.normalTextureId, (t4) => this._textureNormal = t4), this._acquire(t3.emissiveTextureId, (t4) => this._textureEmissive = t4), this._acquire(t3.occlusionTextureId, (t4) => this._textureOcclusion = t4), this._acquire(t3.metallicRoughnessTextureId, (t4) => this._textureMetallicRoughness = t4);
  }
  dispose() {
    this._texture = t(this._texture), this._textureNormal = t(this._textureNormal), this._textureEmissive = t(this._textureEmissive), this._textureOcclusion = t(this._textureOcclusion), this._textureMetallicRoughness = t(this._textureMetallicRoughness), this._disposed = true;
  }
  ensureResources(t3) {
    return 0 === this._numLoading ? a.LOADED : a.LOADING;
  }
  get textureBindParameters() {
    return new l(null != this._texture ? this._texture.glTexture : null, null != this._textureNormal ? this._textureNormal.glTexture : null, null != this._textureEmissive ? this._textureEmissive.glTexture : null, null != this._textureOcclusion ? this._textureOcclusion.glTexture : null, null != this._textureMetallicRoughness ? this._textureMetallicRoughness.glTexture : null);
  }
  updateTexture(e) {
    null != this._texture && e === this._texture.id || (this._texture = t(this._texture), this._textureId = e, this._acquire(this._textureId, (t3) => this._texture = t3));
  }
  _acquire(s, i) {
    if (null == s) return void i(null);
    const r = this._textures.acquire(s);
    if (S(r)) return ++this._numLoading, void r.then((e) => {
      if (this._disposed) return t(e), void i(null);
      i(e);
    }).finally(() => --this._numLoading);
    i(r);
  }
};
var l = class extends n {
  constructor(t3 = null, e = null, s = null, i = null, r = null, u2, l2) {
    super(), this.texture = t3, this.textureNormal = e, this.textureEmissive = s, this.textureOcclusion = i, this.textureMetallicRoughness = r, this.scale = u2, this.normalTextureTransformMatrix = l2;
  }
};

export {
  u,
  l
};
//# sourceMappingURL=chunk-XFLPRRYT.js.map
