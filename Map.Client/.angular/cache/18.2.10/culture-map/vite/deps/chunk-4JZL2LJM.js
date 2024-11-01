import {
  w
} from "./chunk-ZYJAXFRJ.js";
import {
  a as a2
} from "./chunk-T35SJNQV.js";
import {
  o as o2,
  u
} from "./chunk-6YVA5E7L.js";
import {
  st
} from "./chunk-O7OCS6XP.js";
import {
  h
} from "./chunk-YAGNWBGU.js";
import {
  e as e2
} from "./chunk-ZVFENZUF.js";
import {
  t
} from "./chunk-62WUYJJN.js";
import {
  e
} from "./chunk-IMVP5ADD.js";
import {
  E,
  a
} from "./chunk-H7WPOTQH.js";
import {
  o
} from "./chunk-AXVPJBVW.js";
import {
  n
} from "./chunk-OXEPWRM7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/3d/support/renderInfoUtils/point.js
function o3(o4, n2, r, s, i) {
  const l = t(3 * o4.length), p = t(l.length);
  o4.forEach((t2, e3) => {
    l[3 * e3] = t2[0], l[3 * e3 + 1] = t2[1], l[3 * e3 + 2] = t2.length > 2 ? t2[2] : 0;
  });
  const c = u(l, n2, 0, p, 0, l, 0, l.length / 3, r, s, i), m2 = null != c;
  return {
    numVertices: o4.length,
    position: l,
    mapPositions: p,
    projectionSuccess: m2,
    sampledElevation: c
  };
}

// ../../../node_modules/@arcgis/core/views/3d/interactive/visualElements/VerticesVisualElement.js
var d = class extends a2 {
  constructor(e3) {
    super(e3), this.view = null, this._renderOccluded = h.OccludeAndTransparent, this._vertices = null, this._spatialReference = null, this._color = e([1, 127 / 255, 0, 1]), this._size = 11, this._outlineColor = e([0, 0, 0, 0.5]), this._outlineSize = 1, this._elevationInfo = null, this.applyProperties(e3);
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(e3) {
    e3 !== this._renderOccluded && (this._renderOccluded = e3, this._updateMaterial(), this._updateOutlineMaterial());
  }
  get vertices() {
    return this._vertices;
  }
  set vertices(e3) {
    this._vertices = e3, this.recreateGeometry();
  }
  get spatialReference() {
    return this._spatialReference;
  }
  set spatialReference(e3) {
    this._spatialReference = e3, this.recreateGeometry();
  }
  get color() {
    return this._color;
  }
  set color(e3) {
    E(e3, this._color) || (a(this._color, e3), this._updateMaterial());
  }
  get size() {
    return this._size;
  }
  set size(e3) {
    e3 !== this._size && (this._size = e3, this._updateMaterial());
  }
  get outlineColor() {
    return this._outlineColor;
  }
  set outlineColor(e3) {
    E(e3, this._outlineColor) || (a(this._outlineColor, e3), this._updateOutlineMaterial());
  }
  get outlineSize() {
    return this._outlineSize;
  }
  set outlineSize(e3) {
    e3 !== this._outlineSize && (this._outlineSize = e3, this._updateOutlineMaterial());
  }
  get elevationInfo() {
    return this._elevationInfo;
  }
  set elevationInfo(e3) {
    this._elevationInfo = e3, this.recreateGeometry();
  }
  get _vertexMaterialParameters() {
    return {
      color: this._color,
      screenSizeScale: this.size,
      renderOccluded: this._renderOccluded,
      isDecoration: this.isDecoration
    };
  }
  get _vertexOutlineMaterialParameters() {
    return {
      color: this._outlineColor,
      screenSizeScale: this.size + 2 * this.outlineSize,
      renderOccluded: this._renderOccluded,
      isDecoration: this.isDecoration
    };
  }
  _updateMaterial() {
    this.attached && this._vertexMaterial.setParameters(this._vertexMaterialParameters);
  }
  _updateOutlineMaterial() {
    this.attached && this._vertexOutlineMaterial.setParameters(this._vertexOutlineMaterialParameters);
  }
  _createRenderGeometries() {
    const t2 = this.vertices;
    if (null == t2 || 0 === t2.length) return [];
    const r = 0.5, i = 0.5, s = o3(t2, this.spatialReference, this.view.elevationProvider, this.view.renderCoordsHelper, o2.fromElevationInfo(this.elevationInfo)), a3 = [], n2 = s.numVertices, c = s.position;
    for (let l = 0; l < n2; ++l) {
      const t3 = o(_, c[3 * l], c[3 * l + 1], c[3 * l + 2]), s2 = m(this._vertexMaterial, r, t3), o4 = m(this._vertexOutlineMaterial, i, t3);
      a3.push({
        vertexGeometry: s2,
        vertexOutlineGeometry: o4
      });
    }
    return a3;
  }
  createGeometries(e3) {
    const t2 = this._createRenderGeometries();
    for (const {
      vertexGeometry: r,
      vertexOutlineGeometry: i
    } of t2) e3.addGeometry(r), e3.addGeometry(i);
  }
  createExternalResources() {
    this._vertexMaterial = new w(__spreadProps(__spreadValues({}, this._vertexMaterialParameters), {
      writeDepth: true,
      cullFace: e2.Back,
      screenSizeEnabled: true
    })), this._vertexOutlineMaterial = new w(__spreadProps(__spreadValues({}, this._vertexOutlineMaterialParameters), {
      forceTransparentMode: true,
      writeDepth: true,
      cullFace: e2.Front,
      screenSizeEnabled: true,
      shadingEnabled: false
    }));
  }
  destroyExternalResources() {
    this._vertexMaterial = null, this._vertexOutlineMaterial = null;
  }
  forEachExternalMaterial(e3) {
    e3(this._vertexMaterial), e3(this._vertexOutlineMaterial);
  }
};
var _ = n();
function m(e3, t2, r) {
  return st(e3, t2, 16, 16, {
    offset: r
  });
}

export {
  d
};
//# sourceMappingURL=chunk-4JZL2LJM.js.map
