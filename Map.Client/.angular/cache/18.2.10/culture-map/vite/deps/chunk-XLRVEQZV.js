import {
  a
} from "./chunk-T35SJNQV.js";
import {
  R,
  b
} from "./chunk-MQUE5HQL.js";
import {
  z
} from "./chunk-R6CAUNOR.js";
import {
  h
} from "./chunk-YAGNWBGU.js";
import {
  e
} from "./chunk-BQZBOYBD.js";
import {
  r,
  t
} from "./chunk-IMVP5ADD.js";
import {
  q
} from "./chunk-XTVPEVHA.js";
import {
  O,
  o
} from "./chunk-AXVPJBVW.js";
import {
  l,
  n
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/views/3d/interactive/visualElements/LineVisualElement.js
var f = class extends a {
  constructor(e2, t2) {
    super(e2), this._hasExternalMaterial = false, this._hasExternalMaterial = null != t2, this._material = null != t2 ? t2 : new z({
      width: 1,
      color: r(1, 0, 1, 1),
      stippleOffColor: null,
      stipplePattern: null,
      stipplePreferContinuous: true,
      isClosed: false,
      falloff: 0,
      innerColor: null,
      innerWidth: 1,
      hasPolygonOffset: false,
      renderOccluded: h.OccludeAndTransparent,
      isDecoration: !!e2.isDecoration,
      writeDepth: true
    }), this.applyProperties(e2);
  }
  setGeometryFromRenderSpacePoint(e2, t2 = 1e3) {
    this.geometry = [[[e2[0] - t2, e2[1], e2[2]], [e2[0] + t2, e2[1], e2[2]]], [[e2[0], e2[1] - t2, e2[2]], [e2[0], e2[1] + t2, e2[2]]], [[e2[0], e2[1], e2[2] - t2], [e2[0], e2[1], e2[2] + t2]]];
  }
  setGeometryFromExtent(e2) {
    const t2 = this.view.spatialReference, s = n(), o2 = n(), a2 = 100, n2 = [];
    o(s, e2[0], e2[1], a2), this.view.renderCoordsHelper.toRenderCoords(s, t2, o2), n2.push([o2[0], o2[1], o2[2]]), o(s, e2[2], e2[1], a2), this.view.renderCoordsHelper.toRenderCoords(s, t2, o2), n2.push([o2[0], o2[1], o2[2]]), o(s, e2[2], e2[3], a2), this.view.renderCoordsHelper.toRenderCoords(s, t2, o2), n2.push([o2[0], o2[1], o2[2]]), o(s, e2[0], e2[3], a2), this.view.renderCoordsHelper.toRenderCoords(s, t2, o2), n2.push([o2[0], o2[1], o2[2]]), o(s, e2[0], e2[1], a2), this.view.renderCoordsHelper.toRenderCoords(s, t2, o2), n2.push([o2[0], o2[1], o2[2]]), o(s, e2[0], e2[1], a2), this.view.renderCoordsHelper.toRenderCoords(s, t2, o2), n2.push([o2[0], o2[1], o2[2]]), this.geometry = [n2];
  }
  setGeometryFromFrustum(e2) {
    const t2 = [];
    e2.lines.forEach((e3) => {
      t2.push([e3.origin[0], e3.origin[1], e3.origin[2]]), t2.push([e3.endpoint[0], e3.endpoint[1], e3.endpoint[2]]);
    }), this.geometry = [t2];
  }
  setGeometryFromBoundedPlane(e2) {
    const t2 = [], r2 = e2.origin, s = e2.basis1, o2 = e2.basis2, a2 = 0.5, n2 = n(), l2 = n(), m = n(), p = n();
    n2[0] = r2[0] - s[0] * a2 - o2[0] * a2, n2[1] = r2[1] - s[1] * a2 - o2[1] * a2, n2[2] = r2[2] - s[2] * a2 - o2[2] * a2, l2[0] = r2[0] - s[0] * a2 + o2[0] * a2, l2[1] = r2[1] - s[1] * a2 + o2[1] * a2, l2[2] = r2[2] - s[2] * a2 + o2[2] * a2, m[0] = r2[0] + s[0] * a2 + o2[0] * a2, m[1] = r2[1] + s[1] * a2 + o2[1] * a2, m[2] = r2[2] + s[2] * a2 + o2[2] * a2, p[0] = r2[0] + s[0] * a2 - o2[0] * a2, p[1] = r2[1] + s[1] * a2 - o2[1] * a2, p[2] = r2[2] + s[2] * a2 - o2[2] * a2, t2.push([n2[0], n2[1], n2[2]]), t2.push([l2[0], l2[1], l2[2]]), t2.push([m[0], m[1], m[2]]), t2.push([p[0], p[1], p[2]]), t2.push([n2[0], n2[1], n2[2]]), this.geometry = [t2];
  }
  setGeometryFromSegment(t2) {
    const r2 = t2.endRenderSpace;
    this.transform = q(u, r2);
    const {
      points: s
    } = t2.createRenderGeometry(r2, this.view.renderCoordsHelper);
    this.geometry = [s];
  }
  setGeometryFromSegments(t2, r2 = l) {
    this.transform = q(u, r2), this.geometry = t2.map((e2) => e2.createRenderGeometry(r2, this.view.renderCoordsHelper).points);
  }
  getTransformedGeometry() {
    return null == this._geometry ? null : this._geometry.map((e2) => e2.map((e3) => O(n(), e3, this.transform)));
  }
  get renderOccluded() {
    return this._material.parameters.renderOccluded;
  }
  set renderOccluded(e2) {
    this._material.setParameters({
      renderOccluded: e2
    });
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(e2) {
    this._geometry = e2, this.recreateGeometry();
  }
  get width() {
    return this._material.parameters.width;
  }
  set width(e2) {
    this._material.setParameters({
      width: e2
    });
  }
  get color() {
    return this._material.parameters.color;
  }
  set color(e2) {
    const t2 = 1 === e2[3];
    this._material.setParameters({
      color: t(e2),
      writeDepth: t2
    });
  }
  get innerWidth() {
    return this._material.parameters.innerWidth;
  }
  set innerWidth(e2) {
    this._material.setParameters({
      innerWidth: e2
    });
  }
  get innerColor() {
    return this._material.parameters.innerColor;
  }
  set innerColor(e2) {
    this._material.setParameters({
      innerColor: null != e2 ? t(e2) : null
    });
  }
  get stipplePattern() {
    return this._material.parameters.stipplePattern;
  }
  set stipplePattern(e2) {
    null != this._material && this._material.setParameters({
      stipplePattern: e2
    });
  }
  get stippleOffColor() {
    return this._material.parameters.stippleOffColor;
  }
  set stippleOffColor(e2) {
    this._material.setParameters({
      stippleOffColor: null != e2 ? t(e2) : null
    });
  }
  get stipplePreferContinuous() {
    return this._material.parameters.stipplePreferContinuous;
  }
  set stipplePreferContinuous(e2) {
    this._material.setParameters({
      stipplePreferContinuous: e2
    });
  }
  get falloff() {
    return this._material.parameters.falloff;
  }
  set falloff(e2) {
    this._material.setParameters({
      falloff: e2
    });
  }
  get polygonOffset() {
    return this._material.parameters.hasPolygonOffset;
  }
  set polygonOffset(e2) {
    this._material.setParameters({
      hasPolygonOffset: e2
    });
  }
  createExternalResources() {
  }
  destroyExternalResources() {
  }
  createGeometries(e2) {
    for (const t2 of R(this.geometry)) {
      const r2 = b(this._material, t2);
      e2.addGeometry(r2);
    }
  }
  forEachExternalMaterial(e2) {
    this._hasExternalMaterial || e2(this._material);
  }
};
var u = e();

export {
  f
};
//# sourceMappingURL=chunk-XLRVEQZV.js.map
