import {
  a as a3
} from "./chunk-T35SJNQV.js";
import {
  Q
} from "./chunk-7YXVUZL6.js";
import {
  f,
  o as o2
} from "./chunk-6YVA5E7L.js";
import {
  ht
} from "./chunk-O7OCS6XP.js";
import {
  a2,
  o as o3,
  u
} from "./chunk-2ONAF54K.js";
import {
  n as n2
} from "./chunk-L7ZKWTWL.js";
import {
  c as c2
} from "./chunk-N4KQPPPI.js";
import {
  e as e2
} from "./chunk-4MMTPKY4.js";
import {
  c
} from "./chunk-J55F4AC2.js";
import {
  r
} from "./chunk-IMVP5ADD.js";
import {
  E,
  a
} from "./chunk-H7WPOTQH.js";
import {
  e
} from "./chunk-3ZXOUEQG.js";
import {
  o
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";

// ../../../node_modules/@arcgis/core/views/3d/interactive/visualElements/PointVisualElement.js
var x = class extends a3 {
  constructor(e3) {
    super(e3), this._material = null, this._texture = null, this._geometry = null, this._size = 3, this._color = r(1, 0, 1, 1), this._pixelSnappingEnabled = true, this._primitive = "square", this._outlineSize = 1, this._outlineColor = r(1, 1, 1, 1), this._elevationInfo = null, this.applyProperties(e3);
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(e3) {
    this._geometry = e3, this.recreateGeometry();
  }
  get size() {
    return this._size;
  }
  set size(e3) {
    if (e3 !== this._size) {
      const t = this._preferredTextureSize;
      this._size = e3, t < this._preferredTextureSize ? this.recreate() : this._updateSizeAttribute();
    }
  }
  get color() {
    return this._color;
  }
  set color(e3) {
    E(e3, this._color) || (a(this._color, e3), this._updateMaterial());
  }
  get pixelSnappingEnabled() {
    return this._pixelSnappingEnabled;
  }
  set pixelSnappingEnabled(e3) {
    this._pixelSnappingEnabled !== e3 && (this._pixelSnappingEnabled = e3, this._updateMaterial());
  }
  get primitive() {
    return this._primitive;
  }
  set primitive(e3) {
    this._primitive !== e3 && (this._primitive = e3, this.recreate());
  }
  get outlineSize() {
    return this._outlineSize;
  }
  set outlineSize(e3) {
    e3 !== this._outlineSize && (this._outlineSize = e3, this._updateMaterial());
  }
  get outlineColor() {
    return this._outlineColor;
  }
  set outlineColor(e3) {
    E(e3, this._outlineColor) || (a(this._outlineColor, e3), this._updateMaterial());
  }
  get elevationInfo() {
    return this._elevationInfo;
  }
  set elevationInfo(e3) {
    this._elevationInfo = e3, this.recreateGeometry();
  }
  _updateMaterial() {
    this._material && this._material.setParameters(this._materialParameters);
  }
  _updateSizeAttribute() {
    const e3 = this.object;
    if (null == e3) return;
    const t = e3.geometries[0];
    if (null == t) return;
    const i = t.getMutableAttribute(e2.SIZE).data, r2 = this._geometrySize;
    i[0] = r2, i[1] = r2, e3.geometryVertexAttributeUpdated(e3.geometries[0], e2.SIZE);
  }
  get _materialParameters() {
    return {
      color: this._color,
      textureIsSignedDistanceField: true,
      sampleSignedDistanceFieldTexelCenter: a2(this._primitive),
      distanceFieldBoundingBox: v,
      occlusionTest: false,
      outlineColor: this._outlineColor,
      outlineSize: this._outlineSize,
      textureId: this._texture?.id,
      polygonOffset: false,
      shaderPolygonOffset: 0,
      drawInSecondSlot: true,
      depthEnabled: false,
      pixelSnappingEnabled: this.pixelSnappingEnabled,
      isDecoration: this.isDecoration
    };
  }
  get _geometrySize() {
    return this._size / S;
  }
  createExternalResources() {
    this._texture = u(this._primitive, this._preferredTextureSize), this._material = new Q(this._materialParameters);
    const e3 = this.view._stage;
    this._texture.load(e3.renderView.renderingContext), e3.add(this._texture);
  }
  destroyExternalResources() {
    if (this._texture) {
      this.view._stage.remove(this._texture), this._texture.dispose(), this._texture = null;
    }
    this._material = null;
  }
  createGeometries(e3) {
    const t = this._createRenderGeometry();
    null != t && e3.addGeometry(t);
  }
  forEachExternalMaterial(e3) {
    this._material && e3(this._material);
  }
  get _preferredTextureSize() {
    return e(2 * this._geometrySize, 16, 128);
  }
  calculateMapBounds(e3) {
    const t = this.object?.geometries[0];
    if (!t) return false;
    const i = t.attributes.get(e2.POSITION).data;
    return n2(i, this.view.renderCoordsHelper.spatialReference, y, this.view.spatialReference), c(e3, y), true;
  }
  _createRenderGeometry() {
    const {
      geometry: e3,
      _material: i
    } = this;
    if (null == e3 || null == i) return null;
    const {
      renderCoordsHelper: r2,
      elevationProvider: s
    } = this.view, o4 = f(e3, s, o2.fromElevationInfo(this.elevationInfo), r2), l = o(c2.get(), e3.x, e3.y, o4), u2 = c2.get();
    n2(l, e3.spatialReference, u2, r2.spatialReference);
    const p = this._geometrySize;
    return ht(i, null, u2, null, [p, p], [0, 0, 0, 1]);
  }
};
var S = o3;
var v = [S / 2, S / 2, 1 - S / 2, 1 - S / 2];
var y = n();

export {
  x
};
//# sourceMappingURL=chunk-HKVPB4XN.js.map
