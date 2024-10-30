import {
  t as t3
} from "./chunk-QXRVL2BR.js";
import {
  c as c2
} from "./chunk-DC55WDRO.js";
import {
  l,
  p
} from "./chunk-7RD4KVUX.js";
import {
  o as o3
} from "./chunk-6YVA5E7L.js";
import {
  b
} from "./chunk-MQUE5HQL.js";
import {
  z
} from "./chunk-R6CAUNOR.js";
import {
  m
} from "./chunk-GW7WMRYJ.js";
import {
  r,
  t as t2
} from "./chunk-B6VSQC7C.js";
import {
  h as h2
} from "./chunk-YAGNWBGU.js";
import {
  t
} from "./chunk-62WUYJJN.js";
import {
  i
} from "./chunk-6MR4UDDL.js";
import {
  e
} from "./chunk-O2DTA3XK.js";
import {
  e as e2
} from "./chunk-4MMTPKY4.js";
import {
  c
} from "./chunk-J55F4AC2.js";
import {
  E,
  a
} from "./chunk-H7WPOTQH.js";
import {
  h
} from "./chunk-HMNBB7ED.js";
import {
  n as n2
} from "./chunk-OGZAGPIO.js";
import {
  g,
  o as o2,
  u
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import {
  o
} from "./chunk-WGAPNV7F.js";

// ../../../node_modules/@arcgis/core/views/3d/interactive/visualElements/OutlineVisualElement.js
var w = class extends t3 {
  constructor(t4) {
    super(t4), this._attachmentOrigin = e(0, 0, 0, null), this._attachmentOriginDirty = true, this.events = new o(), this._geometry = null, this._width = 1, this._color = r(1, 0, 1, 1), this._innerWidth = 0, this._innerColor = r(1, 1, 1, 1), this._stipplePattern = null, this._stippleOffColor = null, this._falloff = 0, this._elevationInfo = null, this._laserlineStyle = null, this._laserlineEnabled = false, this._renderOccluded = h2.OccludeAndTransparentStencil, this._attachmentOrigin.spatialReference = t4.view.spatialReference, this._laserline = new c2({
      view: t4.view,
      isDecoration: t4.isDecoration
    }), this.applyProperties(t4), this.attached = t4.attached ?? true;
  }
  destroy() {
    this._laserline.destroy(), super.destroy();
  }
  createObject3DResourceFactory(e3) {
    return {
      view: e3,
      createResources: (e4) => this._createObject3DResources(e4),
      destroyResources: D,
      recreateGeometry: (e4, t4) => {
        e4.geometries.length = 0, this._recreateGeometry(t4, e4.material, e4.geometries);
      }
    };
  }
  createDrapedResourceFactory(e3) {
    return {
      view: e3,
      createResources: () => this._createDrapedResources(),
      destroyResources: D,
      recreateGeometry: (e4) => {
        e4.geometries = this._createRenderGeometriesDraped(e4.material), this._attachmentOriginChanged();
      }
    };
  }
  get _laserlineAttached() {
    return this.attached && this.visible && null != this._laserlineStyle && !this.isDraped && this.laserlineEnabled;
  }
  onAttachedChange(e3) {
    this._laserline.attached = this._laserlineAttached, e3 && this._attachmentOriginChanged();
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(e3) {
    this._geometry = e3, this.recreateGeometry();
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
    const t4 = null != e3 != (null != this._stipplePattern);
    this._stipplePattern = e3, t4 ? this.recreate() : this._updateMaterial();
  }
  get stippleOffColor() {
    return this._stippleOffColor;
  }
  set stippleOffColor(e3) {
    e3 && this._stippleOffColor && E(e3, this._stippleOffColor) || (this._stippleOffColor = e3 ? t2(e3) : null, this._updateMaterial());
  }
  get falloff() {
    return this._falloff;
  }
  set falloff(e3) {
    e3 !== this._falloff && (this._falloff = e3, this._updateMaterial());
  }
  get elevationInfo() {
    return this._elevationInfo;
  }
  set elevationInfo(e3) {
    this._elevationInfo = e3, this.recreateGeometry();
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
  get attachmentOrigin() {
    if (!this._attachmentOriginDirty) return this._attachmentOrigin;
    const e3 = this.object3dResources.resources?.geometries;
    if (!e3 || 0 === e3.length) return null;
    o2(E2, 0, 0, 0);
    let s = 0;
    for (const t4 of e3) t4.computeAttachmentOrigin(P) && (u(E2, E2, P), s++);
    return 0 === s ? null : (g(E2, E2, 1 / s), this.view.renderCoordsHelper.fromRenderCoords(E2, this._attachmentOrigin), this._attachmentOriginDirty = false, this._attachmentOrigin);
  }
  _updateMaterial() {
    null != this.object3dResources.resources && this.object3dResources.resources.material.setParameters(this._materialParameters), null != this.drapedResources.resources && this.drapedResources.resources.material.setParameters(this._materialParameters);
  }
  get _isClosed() {
    return null != this.geometry && "polygon" === this.geometry.type;
  }
  get _materialParameters() {
    return {
      width: this._width,
      color: this._color,
      stippleOffColor: this._stippleOffColor,
      stipplePattern: this._stipplePattern,
      stipplePreferContinuous: false,
      isClosed: this._isClosed,
      falloff: this._falloff,
      innerColor: this._innerColor,
      innerWidth: this._innerWidth,
      join: "round",
      hasPolygonOffset: true,
      renderOccluded: this._normalizedRenderOccluded,
      isDecoration: this.isDecoration
    };
  }
  get _normalizedRenderOccluded() {
    return this.isDraped && this._renderOccluded === h2.OccludeAndTransparentStencil ? h2.OccludeAndTransparent : this._renderOccluded;
  }
  _recreateGeometry(e3, t4, r2) {
    this._createRenderGeometries(t4, r2);
    for (const i2 of r2) e3.addGeometry(i2);
    this._attachmentOriginChanged();
  }
  _attachmentOriginChanged() {
    this._attachmentOriginDirty = true, this.events.emit("attachment-origin-changed");
  }
  _createObject3DResources(e3) {
    const t4 = new z(this._materialParameters), r2 = new Array();
    return this._recreateGeometry(e3, t4, r2), {
      material: t4,
      geometries: r2,
      forEach: (e4) => {
        e4(t4), r2.forEach(e4);
      }
    };
  }
  _createDrapedResources() {
    const e3 = new z(this._materialParameters);
    return {
      material: e3,
      geometries: this._createRenderGeometriesDraped(e3)
    };
  }
  _createRenderGeometriesDraped(e3) {
    const {
      geometry: t4,
      view: r2
    } = this, i2 = r2.basemapTerrain.spatialReference;
    if (null == t4 || null == i2) return [];
    return l(t4, i2).lines.map(({
      position: t5
    }) => {
      const s = {
        overlayInfo: {
          spatialReference: i2,
          renderCoordsHelper: r2.renderCoordsHelper
        },
        attributeData: {
          position: t5
        },
        removeDuplicateStartEnd: this._isClosed
      };
      return new m(b(e3, s));
    });
  }
  calculateMapBounds(e3) {
    if (null == this.object3dResources.resources) return false;
    const t4 = this.view.renderCoordsHelper;
    for (const r2 of this.object3dResources.resources.geometries) {
      const i2 = r2.attributes.get(e2.POSITION), s = t(i2.data.length);
      n2(i2.data, t4.spatialReference, 0, s, this.view.spatialReference, 0, i2.data.length / 3), c(e3, s);
    }
    return true;
  }
  _createRenderGeometries(e3, t4) {
    const r2 = this.geometry;
    if (null == r2) return;
    const i2 = p(r2, this.view.elevationProvider, this.view.renderCoordsHelper, o3.fromElevationInfo(this.elevationInfo ?? new h({
      mode: i(r2, null)
    }))), s = new Array();
    for (const {
      position: n3,
      mapPositions: o4
    } of i2.lines) {
      const r3 = {
        mapPositions: o4,
        attributeData: {
          position: n3
        },
        removeDuplicateStartEnd: this._isClosed
      };
      t4.push(b(e3, r3)), s.push(n3);
    }
    this._laserline.pathVerticalPlane = s;
  }
};
function D(e3) {
  e3.geometries = [];
}
var P = n();
var E2 = n();

export {
  w
};
//# sourceMappingURL=chunk-ILXHSVN4.js.map
