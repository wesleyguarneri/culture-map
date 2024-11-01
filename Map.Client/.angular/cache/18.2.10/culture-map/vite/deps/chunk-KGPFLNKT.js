import {
  Cn,
  L,
  N,
  f,
  h as h2,
  nn
} from "./chunk-OGZAGPIO.js";
import {
  h
} from "./chunk-3ZXOUEQG.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import {
  s
} from "./chunk-L5YS4GSA.js";
import {
  S
} from "./chunk-HJY2YILU.js";
import {
  t
} from "./chunk-2MMLMOWS.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/core/material/RenderTexture.js
var s2 = class {
  constructor(s3, r) {
    this._textures = s3, this.loadPromise = null, this._disposed = false;
    const i = this._textures.acquire(r);
    S(i) ? (i.then((t2) => {
      this._disposed ? t(t2) : this._textureRef = t2;
    }), this.loadPromise = i) : this._textureRef = i;
  }
  dispose() {
    this._textureRef = t(this._textureRef), this._disposed = true;
  }
  get glTexture() {
    return null != this._textureRef ? this._textureRef.glTexture : null;
  }
};

// ../../../node_modules/@arcgis/core/geometry/projection/projectBoundingSphere.js
function a(e, r, t2, a2) {
  if (null == r || null == a2) return false;
  const E2 = nn(r, a2, p);
  if (E2.projector === f) return t2[0] = e[0], t2[1] = e[1], t2[2] = e[2], t2[3] = e[3], true;
  if (null == E2.projector) return false;
  const {
    source: m,
    dest: R
  } = E2;
  if (R.spatialReferenceId === N.WEB_MERCATOR) {
    const r2 = L[m.spatialReferenceId][N.WGS84];
    return null != r2 && (r2(e, 0, f2, 0), h2(f2, 0, t2, 0), t2[3] = u(f2[1], e[2], e[3], s.radius), true);
  }
  if (m.spatialReferenceId !== N.WGS84 && m.spatialReferenceId !== N.CGCS2000 || R.spatialReferenceId !== N.PLATE_CARREE) {
    E2.projector(e, 0, t2, 0);
    const r2 = m.metersPerUnit ?? 1, o = R.metersPerUnit ?? 1;
    t2[3] = e[3] * r2 / o;
  } else {
    const r2 = L[m.spatialReferenceId][N.SPHERICAL_ECEF], o = L[N.SPHERICAL_ECEF][N.PLATE_CARREE];
    let n2 = e[3];
    null != r2 && null != o && (n2 = u(e[1], e[2], e[3], s.radius)), E2.projector(e, 0, t2, 0), t2[3] = n2;
  }
  return true;
}
function u(e, r, t2, o) {
  const n2 = o + r;
  if (n2 < o / 2 || t2 > n2) return Number.MAX_VALUE;
  const s3 = Math.abs(E * e) + Math.asin(t2 / n2);
  return s3 >= Math.PI / 2 ? Number.MAX_VALUE : t2 / Math.cos(s3);
}
var f2 = n();
var p = Cn();
var E = h(1);

export {
  a,
  s2 as s
};
//# sourceMappingURL=chunk-KGPFLNKT.js.map
