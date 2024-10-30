import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t
} from "./chunk-ONVI4SC3.js";
import {
  H,
  I as I2,
  L,
  P,
  a2 as a,
  g,
  l,
  s,
  u,
  v
} from "./chunk-FIQ7DCCC.js";
import {
  I
} from "./chunk-47DYJR3W.js";
import {
  J,
  r
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import {
  has
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/views/3d/state/Frustum.js
var c = class {
  get planes() {
    return this.frustum;
  }
  get points() {
    return this._points;
  }
  get mutablePoints() {
    return this._points;
  }
  get direction() {
    return this._direction;
  }
  get origin() {
    return this._origin;
  }
  constructor(t2) {
    this.renderCoordsHelper = t2, this.frustum = H(), this._points = I2(), this.lines = new Array(12), this._origin = n(), this._direction = n(), this._altitude = null;
    for (let i = 0; i < 12; i++) this.lines[i] = {
      origin: null,
      direction: n(),
      endpoint: null
    };
  }
  update(i) {
    L(i.viewMatrix, i.projectionMatrix, this.frustum, this._points), r(this._origin, i.eye), r(this._direction, i.viewForward), this._altitude = this.renderCoordsHelper.getAltitude(this._origin), this._updateLines();
  }
  updatePoints(i) {
    for (let s3 = 0; s3 < this._points.length; s3++) r(this._points[s3], i[s3]);
    P(this.frustum, this._points), this._updateLines();
  }
  get altitude() {
    return this._altitude;
  }
  intersectsSphere(t2) {
    return s(this.frustum, t2);
  }
  intersectsRay(t2) {
    return u(this.frustum, t2);
  }
  intersectsLineSegment(t2, i) {
    return a(this.frustum, t2, i);
  }
  intersectsPoint(t2) {
    return l(this.frustum, t2);
  }
  _updateLines() {
    const t2 = this._points;
    for (let i = 0; i < 4; i++) {
      const s3 = i + 4;
      d(this.lines[i], t2[i], t2[s3]), d(this.lines[i + 4], t2[i], 3 === i ? t2[0] : t2[i + 1]), d(this.lines[i + 8], t2[s3], 3 === i ? t2[4] : t2[s3 + 1]);
    }
  }
};
function d(t2, s3, e) {
  t2.origin = s3, t2.endpoint = e, J(t2.direction, s3, e);
}
c.planePointIndices = v, c.nearFarLineIndices = [[g.NEAR_BOTTOM_LEFT, g.FAR_BOTTOM_LEFT], [g.NEAR_BOTTOM_RIGHT, g.FAR_BOTTOM_RIGHT], [g.NEAR_TOP_RIGHT, g.FAR_TOP_RIGHT], [g.NEAR_TOP_LEFT, g.FAR_TOP_LEFT]];

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderFeature.js
var o;
function s2(s3 = !has("disable-feature:high-quality-idle"), t2 = null) {
  const n2 = new t();
  return s3 ? (n2.set(I.IDLE, o.Antialiasing, "low" !== t2), n2.set(I.IDLE, o.HighResolutionAtmosphere, "low" !== t2), n2.set(I.IDLE, o.HighQualityTransparency, true), n2.set(I.IDLE, o.SSAO, true), n2.set(I.IDLE, o.WaterReflection, true), n2.set(I.IDLE, o.PhysicalPixelRendering, true)) : (n2.set(I.ANIMATING, o.HighResolutionShadows, true), n2.set(I.ANIMATING, o.HighResolutionViewshed, true), n2.set(I.INTERACTING, o.HighResolutionShadows, true), n2.set(I.INTERACTING, o.HighResolutionViewshed, true)), n2.set(I.IDLE, o.HighResolutionShadows, true), n2.set(I.IDLE, o.HighResolutionViewshed, true), n2.set(I.IDLE, o.HighResolutionVoxel, true), n2;
}
!function(e) {
  e[e.Antialiasing = 0] = "Antialiasing", e[e.HighQualityTransparency = 1] = "HighQualityTransparency", e[e.HighResolutionVoxel = 2] = "HighResolutionVoxel", e[e.HighResolutionAtmosphere = 3] = "HighResolutionAtmosphere", e[e.SSAO = 4] = "SSAO", e[e.WaterReflection = 5] = "WaterReflection", e[e.HighResolutionShadows = 6] = "HighResolutionShadows", e[e.HighResolutionViewshed = 7] = "HighResolutionViewshed", e[e.PhysicalPixelRendering = 8] = "PhysicalPixelRendering";
}(o || (o = {}));

export {
  c,
  o,
  s2 as s
};
//# sourceMappingURL=chunk-KX66WNDP.js.map
