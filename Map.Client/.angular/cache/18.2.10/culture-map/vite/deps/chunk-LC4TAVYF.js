import {
  a as a2
} from "./chunk-KGPFLNKT.js";
import {
  e as e5
} from "./chunk-UAMCUBIO.js";
import {
  T,
  e as e4
} from "./chunk-ZIDRXKSJ.js";
import {
  e as e3
} from "./chunk-VHERB2HE.js";
import {
  Z
} from "./chunk-ZE47C44H.js";
import {
  e as e2
} from "./chunk-BQZBOYBD.js";
import {
  _
} from "./chunk-XTVPEVHA.js";
import {
  An,
  F,
  N,
  en,
  ln
} from "./chunk-OGZAGPIO.js";
import {
  D,
  m
} from "./chunk-IHVSZYZS.js";
import {
  O,
  o as o2,
  s as s2
} from "./chunk-AXVPJBVW.js";
import {
  n as n2
} from "./chunk-OXEPWRM7.js";
import {
  G
} from "./chunk-JJS7PR2U.js";
import {
  s
} from "./chunk-L5YS4GSA.js";
import {
  o
} from "./chunk-WGAPNV7F.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  S
} from "./chunk-ANKOCGE2.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";
import {
  n2 as n
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/geometry/projection/localLinearScaleFactors.js
function f(f2, p, E, c) {
  if (null == p || null == c) return false;
  const l = F(p, ln), C = F(c, en);
  if (l === C && l !== N.UNKNOWN || G(p, c)) return E[0] = 1, E[1] = 1, E[2] = 1, true;
  if (l === N.SPHERICAL_ECEF) {
    const t2 = s2(f2), s3 = t2 / Math.sqrt(f2[0] * f2[0] + f2[1] * f2[1]), o3 = t2 / s.radius;
    if (C === N.WEB_MERCATOR) return E[0] = s3 * o3, E[1] = s3 * o3, E[2] = 1, true;
    if (C === N.WGS84 || C === N.CGCS2000) {
      const r = An;
      return E[0] = r * s3 * o3, E[1] = r * o3, E[2] = 1, true;
    }
  } else if (l === N.PLATE_CARREE) {
    if (C === N.WGS84 || C === N.CGCS2000) return E[0] = An, E[1] = An, E[2] = 1, true;
    if (C === N.WEB_MERCATOR) {
      const r = f2[1] / s.radius;
      return E[0] = 1, E[1] = 1 / Math.cos(r), E[2] = 1, true;
    }
  }
  return false;
}

// ../../../node_modules/@arcgis/core/views/3d/layers/i3s/LayerElevationProvider.js
var x = class extends o.EventedMixin(S) {
  constructor(e6) {
    super(e6), this._tmpEvent = new e5(), this._renderCoordsHelper = e6.view.renderCoordsHelper, this._renderSR = this._renderCoordsHelper.spatialReference, this._layerElevationSource = e6.layerElevationSource;
  }
  initialize() {
    this._intersector = T(this.view.state.viewingMode), this._intersector.options.store = e4.MIN, this._intersector.options.normalRequired = false, this._tmpEvent.context = this.intersectionHandler.isGround ? "ground" : "scene";
  }
  get spatialReference() {
    return this.view?.elevationProvider?.spatialReference;
  }
  getElevation(e6, t2, r, n3) {
    const i2 = this._renderCoordsHelper, s3 = o2(R, e6, t2, r);
    if (!i2.toRenderCoords(s3, n3, s3)) return n.getLogger(this).error("could not project point to compute elevation"), null;
    const {
      layerElevationSource: a3,
      _intersector: c,
      intersectionHandler: p
    } = this, m2 = a3.fullExtent, u = null != m2 && Number.isFinite(m2.xmin) && Number.isFinite(m2.xmax) && Number.isFinite(m2.ymin) && Number.isFinite(m2.ymax) && Number.isFinite(m2.zmin) && Number.isFinite(m2.zmax) ? new e3(m2.zmin, m2.zmax) : a3.elevationRange;
    if (null == u) return null;
    const h = a3.elevationOffset, d = u.elevationRangeMin + h, v = u.elevationRangeMax + h, g = i2.setAltitude(y2, v, s3), E = i2.setAltitude(b, d, s3);
    return c.reset(g, E, null), p.intersect(c, null, g, E, null, true), c.results.min.getIntersectionPoint(s3) ? i2.getAltitude(s3) : null;
  }
  getSphereElevationBounds(e6, t2) {
    return a2(e6, t2, j, this._renderSR), this._layerElevationSource.getElevationRange(j);
  }
  getRootElevationBounds() {
    const e6 = this.layerElevationSource.fullExtent;
    return e6?.hasZ ? new e3(e6.zmin, e6.zmax) : null;
  }
  objectsChanged(e6) {
    this.spatialReference && (this._computeLayerExtent(e6, this._tmpEvent.extent), this._tmpEvent.spatialReference = this.spatialReference, this.emit("elevation-change", this._tmpEvent));
  }
  objectChanged(e6) {
    this.spatialReference && (this._computeObjectExtent(e6, this._tmpEvent.extent), this._tmpEvent.spatialReference = this.spatialReference, this.emit("elevation-change", this._tmpEvent));
  }
  _computeObjectExtent(e6, t2) {
    D(t2), this._expandExtent(e6, t2);
  }
  _computeLayerExtent(e6, t2) {
    D(t2);
    for (const r of e6) this._expandExtent(r, t2);
  }
  _expandExtent(e6, t2) {
    const r = this.spatialReference;
    if (null == r) return;
    if (null == e6) return;
    _(_2, e6.quaternion), _2[12] = e6.center[0], _2[13] = e6.center[1], _2[14] = e6.center[2];
    const o3 = e6.halfSize;
    for (let n3 = 0; n3 < 8; ++n3) R[0] = 1 & n3 ? o3[0] : -o3[0], R[1] = 2 & n3 ? o3[1] : -o3[1], R[2] = 4 & n3 ? o3[2] : -o3[2], O(R, R, _2), this._renderCoordsHelper.fromRenderCoords(R, R, r), m(t2, R, t2);
  }
};
e([y({
  constructOnly: true
})], x.prototype, "layerElevationSource", void 0), e([y({
  constructOnly: true
})], x.prototype, "intersectionHandler", void 0), e([y({
  constructOnly: true
})], x.prototype, "view", void 0), e([y()], x.prototype, "spatialReference", null), x = e([a("esri.views.3d.layers.i3s.LayerElevationProvider")], x);
var _2 = e2();
var j = Z(0, 0, 0, 0);
var R = n2();
var y2 = n2();
var b = n2();

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/ObjectParameters.js
var t = class {
  constructor(t2, s3, o3, r) {
    this.toMapSpace = t2, this.transform = s3, this.obb = o3, this.geometry = r;
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Transform.js
var i = class {
  constructor(i2, o3) {
    this.position = i2, this.rotationScale = o3, this.origin = void 0;
  }
};

export {
  f,
  x,
  t,
  i
};
//# sourceMappingURL=chunk-LC4TAVYF.js.map
