import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t as t2
} from "./chunk-PPORR5ZR.js";
import {
  c
} from "./chunk-6AG7CVLS.js";
import {
  te
} from "./chunk-BV256A2V.js";
import {
  z
} from "./chunk-JP4VYCP3.js";
import {
  m as m3
} from "./chunk-4B3LNBOC.js";
import {
  gt
} from "./chunk-LEBOC3ZD.js";
import {
  r as r3,
  t
} from "./chunk-PAFRRTJD.js";
import {
  h as h2
} from "./chunk-UE7ZYRIH.js";
import {
  a as a2,
  j as j2,
  m as m2,
  p,
  y
} from "./chunk-FIQ7DCCC.js";
import {
  h,
  l,
  v
} from "./chunk-SNHVHW2N.js";
import {
  k,
  m
} from "./chunk-6ZLH7XBS.js";
import {
  e as e2
} from "./chunk-D7C26LZP.js";
import {
  E,
  a
} from "./chunk-K43CZ3M5.js";
import {
  G,
  e,
  j,
  r as r2
} from "./chunk-MZM4INJV.js";
import {
  n,
  r
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/views/3d/interactive/visualElements/ExtendedLineVisualElement.js
var G2 = class extends t2 {
  constructor(e3) {
    super(e3), this._ray = m(), this._isWorldDown = false, this._start = n(), this._end = r(1, 0, 0), this._width = 1, this._color = r3(1, 0, 1, 1), this._polygonOffset = false, this._writeDepthEnabled = true, this._innerWidth = 0, this._innerColor = r3(1, 1, 1, 1), this._stipplePattern = null, this._stippleOffColor = null, this._stipplePreferContinuous = true, this._falloff = 0, this._extensionType = M.LINE, this._laserlineStyle = null, this._laserlineEnabled = false, this._renderOccluded = h2.OccludeAndTransparent, this._fadedExtensions = L, this._laserline = new c({
      view: this.view,
      isDecoration: e3.isDecoration
    }), this.applyProperties(e3);
  }
  destroy() {
    this._laserline.destroy(), super.destroy();
  }
  createObject3DResourceFactory(e3) {
    return {
      view: e3,
      createResources: (e4) => this._createObject3DResources(e4),
      destroyResources: P,
      recreateGeometry: (e4, t3) => this._recreateObject3DGeometry(e4, t3),
      cameraChanged: () => this._updateGeometry()
    };
  }
  createDrapedResourceFactory(e3) {
    return {
      view: e3,
      createResources: () => this._createDrapedResources(),
      destroyResources: P,
      recreateGeometry: (e4) => this._recreateDrapedGeometry(e4)
    };
  }
  updateVisibility(e3) {
    super.updateVisibility(e3), this._laserline.visible = e3;
  }
  onAttachedChange() {
    this._laserline.attached = this._laserlineAttached;
  }
  setStartEndFromWorldDownAtLocation(r4) {
    this._isWorldDown = true, r2(this._start, r4), this.view.renderCoordsHelper.worldUpAtPosition(r4, this._end), e(this._end, r4, this._end), k(this._start, this._end, this._ray), this._updateGeometry();
  }
  get start() {
    return this._start;
  }
  set start(t3) {
    this._isWorldDown = false, G(this._start, t3) || (r2(this._start, t3), k(this._start, this._end, this._ray), this._updateGeometry());
  }
  get end() {
    return this._end;
  }
  set end(t3) {
    this._isWorldDown = false, G(this._end, t3) || (r2(this._end, t3), k(this._start, this._end, this._ray), this._updateGeometry());
  }
  get width() {
    return this._width;
  }
  set width(e3) {
    e3 !== this._width && (this._width = e3, this._updateMaterial());
  }
  get color() {
    return this._color;
  }
  set color(e3) {
    E(e3, this._color) || (a(this._color, e3), this._updateMaterial());
  }
  get polygonOffset() {
    return this._polygonOffset;
  }
  set polygonOffset(e3) {
    e3 !== this._polygonOffset && (this._polygonOffset = e3, this._updateMaterial());
  }
  get writeDepthEnabled() {
    return this._writeDepthEnabled;
  }
  set writeDepthEnabled(e3) {
    this._writeDepthEnabled !== e3 && (this._writeDepthEnabled = e3, this._updateMaterial());
  }
  get innerWidth() {
    return this._innerWidth;
  }
  set innerWidth(e3) {
    e3 !== this._innerWidth && (this._innerWidth = e3, this._updateMaterial());
  }
  get innerColor() {
    return this._innerColor;
  }
  set innerColor(e3) {
    E(e3, this._innerColor) || (a(this._innerColor, e3), this._updateMaterial());
  }
  get stipplePattern() {
    return this._stipplePattern;
  }
  set stipplePattern(e3) {
    const t3 = null != e3 != (null != this._stipplePattern);
    this._stipplePattern = e3, t3 ? this.recreate() : this._updateMaterial();
  }
  get stippleOffColor() {
    return this._stippleOffColor;
  }
  set stippleOffColor(e3) {
    null != e3 && null != this._stippleOffColor && E(e3, this._stippleOffColor) || (this._stippleOffColor = null != e3 ? t(e3) : null, this._updateMaterial());
  }
  get stipplePreferContinuous() {
    return this._stipplePreferContinuous;
  }
  set stipplePreferContinuous(e3) {
    e3 !== this._stipplePreferContinuous && (this._stipplePreferContinuous = e3, this._updateMaterial());
  }
  get falloff() {
    return this._falloff;
  }
  set falloff(e3) {
    e3 !== this._falloff && (this._falloff = e3, this._updateMaterial());
  }
  get extensionType() {
    return this._extensionType;
  }
  set extensionType(e3) {
    e3 !== this._extensionType && (this._extensionType = e3, this.recreateGeometry());
  }
  get _laserlineAttached() {
    return this._laserlineEnabled && null != this._laserlineStyle && this.attached && !this.isDraped;
  }
  get laserlineStyle() {
    return this._laserlineStyle;
  }
  set laserlineStyle(e3) {
    this._laserlineStyle = e3, this._laserline.attached = this._laserlineAttached, null != e3 && (this._laserline.style = e3);
  }
  get laserlineEnabled() {
    return this._laserlineEnabled;
  }
  set laserlineEnabled(e3) {
    this._laserlineEnabled !== e3 && (this._laserlineEnabled = e3, this._laserline.attached = this._laserlineAttached);
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(e3) {
    e3 !== this._renderOccluded && (this._renderOccluded = e3, this._updateMaterial());
  }
  get _normalizedRenderOccluded() {
    return this.isDraped && this._renderOccluded === h2.OccludeAndTransparentStencil ? h2.OccludeAndTransparent : this._renderOccluded;
  }
  get fadedExtensions() {
    return this._fadedExtensions;
  }
  set fadedExtensions(e3) {
    this._fadedExtensions = e3 ?? L, this.recreateGeometry();
  }
  _updateMaterial() {
    const {
      materialParameters: e3
    } = this;
    this.object3dResources.resources?.material.setParameters(e3), this.drapedResources.resources?.material.setParameters(e3);
  }
  get materialParameters() {
    return {
      width: this._width,
      color: this._color,
      stippleOffColor: this._stippleOffColor,
      stipplePattern: this._stipplePattern,
      stipplePreferContinuous: this._stipplePreferContinuous,
      innerWidth: this._innerWidth,
      innerColor: this._innerColor,
      falloff: this._falloff,
      hasPolygonOffset: this._polygonOffset,
      renderOccluded: this._normalizedRenderOccluded,
      isDecoration: this.isDecoration,
      writeDepth: this._writeDepthEnabled
    };
  }
  _createObject3DResources(e3) {
    const t3 = new z(this.materialParameters), r4 = new Array();
    return this._createObject3DGeometry(t3, e3, r4), {
      material: t3,
      geometries: r4,
      forEach: (e4) => {
        e4(t3), r4.forEach(e4);
      }
    };
  }
  _recreateObject3DGeometry(e3, t3) {
    e3.geometries.length = 0, this._createObject3DGeometry(e3.material, t3, e3.geometries);
  }
  _createObject3DGeometry(e3, t3, r4) {
    const i = this._createGeometry(e3);
    r4.push(i), t3.addGeometry(i), this._updateVerticesObject3D(t3);
  }
  _createDrapedResources() {
    const e3 = new z(this.materialParameters);
    return {
      material: e3,
      geometries: [this._createDrapedGeometry(e3)]
    };
  }
  _recreateDrapedGeometry(e3) {
    e3.geometries = [this._createDrapedGeometry(e3.material)];
  }
  _createDrapedGeometry(e3) {
    const t3 = this._createGeometry(e3);
    return this._updateVerticesDraped(t3), new m3(t3);
  }
  _createGeometry(e3) {
    const t3 = this.extensionType === M.FADED, r4 = t3 ? [n(), n(), n(), n()] : [n(), n()];
    return gt(e3, r4, null, t3 ? [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0] : null);
  }
  _updateGeometry() {
    if (this.isDraped) this.drapedResources.recreateGeometry();
    else {
      const e3 = this.object3dResources.object;
      e3 && this._updateVerticesObject3D(e3);
    }
  }
  _updateVerticesObject3D(e3) {
    const t3 = this._lineSegment;
    this._updateVertexAttributesObject3D(e3, t3), this._laserline.intersectsLine = t3;
  }
  _updateVerticesDraped(e3) {
    this._updateVertexAttributesDraped(e3, this._lineSegment);
  }
  get _lineSegment() {
    return this._extensionType === M.FADED ? this._updateLineSegmentFinite(V) : this._updateLineSegmentInfinite(this._extensionType, V);
  }
  _updateLineSegmentFinite(e3) {
    return h(this._start, this._end, e3);
  }
  _updateLineSegmentInfinite(e3, t3) {
    const r4 = this.view.state.camera;
    switch (y(this._ray, x), e3) {
      case M.LINE:
        x.c0 = -Number.MAX_VALUE;
        break;
      case M.RAY:
      case M.GROUND_RAY: {
        const e4 = this._ray.origin, t4 = this.view.elevationProvider.getElevation(e4[0], e4[1], e4[2], this.view.renderCoordsHelper.spatialReference, "ground") ?? 0, r5 = this.view.renderCoordsHelper.getAltitude(e4);
        this._isWorldDown && r5 < t4 && j(x.ray.direction, x.ray.direction), this._extensionType === M.GROUND_RAY && null != t4 && (x.c1 = Math.abs(r5 - t4));
        break;
      }
    }
    if (!m2(r4.frustum, x)) return this._updateLineSegmentFinite(t3);
    const s = j2(x, v2), n2 = p(x, S);
    return h(s, n2, t3);
  }
  _updateVertexAttributesObject3D(e3, t3) {
    const r4 = e3.geometries[0].getMutableAttribute(e2.POSITION)?.data;
    if (!r4) return;
    let i = 0;
    for (const s of this._lineVertices(t3)) r4[i++] = s[0], r4[i++] = s[1], r4[i++] = s[2];
    e3.geometryVertexAttributeUpdated(e3.geometries[0], e2.POSITION);
  }
  _updateVertexAttributesDraped(e3, t3) {
    const r4 = e3.getMutableAttribute(e2.POSITION)?.data;
    if (!r4) return;
    let i = 0;
    for (const s of this._lineVertices(t3)) r4[i++] = s[0], r4[i++] = s[1], r4[i++] = te;
    e3.invalidateBoundingInfo();
  }
  *_lineVertices(e3) {
    this.extensionType === M.FADED ? (yield l(e3, -this.fadedExtensions.start, v2), yield l(e3, 0, v2), yield l(e3, 1, v2), yield l(e3, 1 + this.fadedExtensions.end, v2)) : (yield l(e3, 0, v2), yield l(e3, 1, v2));
  }
};
function P(e3) {
  e3.geometries = [];
}
var x = a2();
var v2 = n();
var S = n();
var V = v();
var M;
!function(e3) {
  e3[e3.LINE = 0] = "LINE", e3[e3.RAY = 1] = "RAY", e3[e3.GROUND_RAY = 2] = "GROUND_RAY", e3[e3.FADED = 3] = "FADED";
}(M || (M = {}));
var T = 1 / 3;
var L = {
  start: T,
  end: T
};

export {
  G2 as G,
  M
};
//# sourceMappingURL=chunk-ZUFYTMSS.js.map
