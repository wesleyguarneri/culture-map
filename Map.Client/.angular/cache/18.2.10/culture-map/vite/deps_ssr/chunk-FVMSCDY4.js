import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t as t2
} from "./chunk-PPORR5ZR.js";
import {
  te
} from "./chunk-BV256A2V.js";
import {
  d as d2
} from "./chunk-N7TLJ6LV.js";
import {
  z as z2
} from "./chunk-JP4VYCP3.js";
import {
  m
} from "./chunk-4B3LNBOC.js";
import {
  gt
} from "./chunk-LEBOC3ZD.js";
import {
  I
} from "./chunk-WQMUOLHB.js";
import {
  h
} from "./chunk-UE7ZYRIH.js";
import {
  e as e3
} from "./chunk-XP2AJZUL.js";
import {
  t
} from "./chunk-MNBTLVRM.js";
import {
  c
} from "./chunk-2TNGEJGS.js";
import {
  e as e4
} from "./chunk-D7C26LZP.js";
import {
  e as e2
} from "./chunk-YGAXDKHF.js";
import {
  r as r2
} from "./chunk-VSQZQLTQ.js";
import {
  a
} from "./chunk-K43CZ3M5.js";
import {
  f,
  q
} from "./chunk-KOI252FF.js";
import {
  G,
  e,
  r,
  u,
  x,
  z
} from "./chunk-MZM4INJV.js";
import {
  l,
  n
} from "./chunk-J4GMQHGL.js";
import {
  d
} from "./chunk-LZSLQ24Q.js";

// ../../../node_modules/@arcgis/core/views/3d/interactive/visualElements/RightAngleQuadVisualElement.js
var D = class extends t2 {
  constructor(e5) {
    super(e5), this._maxSize = 0, this._position = n(), this._up = n(), this._right = n(), this._renderOccluded = h.OccludeAndTransparent, this._color = r2(1, 0, 0, 1), this._outlineColor = r2(0, 0, 0, 1), this._outlineSize = 0, this._size = 32, this._outlineRenderOccluded = h.Opaque, this.applyProperties(e5);
  }
  createObject3DResourceFactory(e5) {
    return {
      view: e5,
      createResources: (e6) => this._createObject3DResources(e6),
      destroyResources: () => {
      },
      cameraChanged: () => this._updateTransformObject3D()
    };
  }
  createDrapedResourceFactory(e5) {
    return {
      view: e5,
      createResources: () => this._createDrapedResources(),
      destroyResources: P
    };
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(e5) {
    e5 !== this._renderOccluded && (this._renderOccluded = e5, this._updateQuadMaterial());
  }
  get color() {
    return this._color;
  }
  set color(e5) {
    a(this._color, e5), this._updateQuadMaterial();
  }
  get outlineColor() {
    return this._outlineColor;
  }
  set outlineColor(e5) {
    a(this._outlineColor, e5), this._updateOutlineMaterial();
  }
  get outlineSize() {
    return this._outlineSize;
  }
  set outlineSize(e5) {
    const t3 = 0 === this._outlineSize != (0 === e5);
    this._outlineSize = e5, t3 ? this.recreateGeometry() : this._updateOutlineMaterial();
  }
  get size() {
    return this._size;
  }
  set size(e5) {
    e5 !== this._size && (this._size = e5, this._updateTransform());
  }
  get outlineRenderOccluded() {
    return this._outlineRenderOccluded;
  }
  set outlineRenderOccluded(e5) {
    this._outlineRenderOccluded = e5, this._updateOutlineMaterial();
  }
  set geometry({
    previous: e5,
    center: t3,
    next: r3
  }) {
    this._maxSize = Math.min(x(t3, e5), x(t3, r3)) / 3, z(this._up, e(this._up, e5, t3)), z(this._right, e(this._right, r3, t3)), r(this._position, t3), this.recreateGeometry();
  }
  _createObject3DResources(e5) {
    const t3 = new d2(this._quadMaterialParameters), r3 = 0 === this._outlineSize ? void 0 : new z2(this._outlineMaterialParameters);
    return this._createObject3DGeometries(e5, t3, r3), {
      quadMaterial: t3,
      outlineMaterial: r3,
      forEach: (e6) => {
        e6(t3), r3 && e6(r3);
      }
    };
  }
  _createObject3DGeometries(e5, t3, r3) {
    if (G(this._up, l) && G(this._right, l)) return;
    const i = this._createGeometries(t3, r3);
    for (const s of i) e5.addGeometry(s);
    this._updateTransformObject3D(e5);
  }
  _createDrapedResources() {
    const t3 = new d2(this._quadMaterialParameters), r3 = 0 === this._outlineSize ? void 0 : new z2(this._outlineMaterialParameters), i = this._createGeometries(t3, r3).map((e5) => new m(e5));
    this._setTransformDraped(i);
    return {
      quadMaterial: t3,
      outlineMaterial: r3,
      geometries: i,
      pixelRatioHandle: d(() => this.view.state.contentPixelRatio, () => {
        this.drapedResources.recreateGeometry();
      })
    };
  }
  _createGeometries(e5, t3) {
    const {
      up: r3,
      right: i,
      corner: s
    } = this._getVertices(), o = v(r3, i, s, e5);
    if (!t3) return [o];
    return [o, gt(t3, [r3, s, i])];
  }
  _getVertices() {
    let e5 = this._up, t3 = this._right;
    const r3 = u(c.get(), e5, t3);
    return this.isDraped && (e5 = r(c.get(), e5), t3 = r(c.get(), t3), e5[2] = 0, t3[2] = 0, r3[2] = 0), {
      up: e5,
      right: t3,
      corner: r3
    };
  }
  _updateTransform() {
    this.isDraped ? this.drapedResources.recreateGeometry() : this._updateTransformObject3D();
  }
  _updateTransformObject3D(e5 = this.object3dResources.object) {
    if (!e5) return;
    const i = this.view.state.camera, s = this._size * i.computeScreenPixelSizeAt(this._position), o = Math.min(this._maxSize, s);
    q(x2, this._position), f(x2, x2, [o, o, o]), e5.transformation = x2;
  }
  _setTransformDraped(e5) {
    if (0 === e5.length) return;
    const {
      view: {
        basemapTerrain: {
          overlayManager: i
        },
        state: {
          contentPixelRatio: s
        }
      }
    } = this, {
      _position: o,
      _size: a2
    } = this, c2 = r(c.get(), o);
    c2[2] = te;
    const l2 = S;
    l2.spatialReference = i.renderer.spatialReference, l2.x = c2[0], l2.y = c2[1];
    const u2 = a2 * (this.view.overlayPixelSizeInMapUnits(l2) * s), h2 = Math.min(this._maxSize, u2);
    q(x2, c2), f(x2, x2, [h2, h2, 1]);
    for (const t3 of e5) t3.transformation = x2;
  }
  get _quadMaterialParameters() {
    return {
      color: this._color,
      forceTransparentMode: true,
      writeDepth: false,
      polygonOffset: true,
      renderOccluded: this._renderOccluded,
      isDecoration: this.isDecoration
    };
  }
  _updateQuadMaterial() {
    this.object3dResources.resources?.quadMaterial.setParameters(this._quadMaterialParameters), this.drapedResources.resources?.quadMaterial.setParameters(this._quadMaterialParameters);
  }
  get _outlineMaterialParameters() {
    return {
      color: this._outlineColor,
      width: this._outlineSize,
      renderOccluded: this._outlineRenderOccluded,
      isDecoration: this.isDecoration
    };
  }
  _updateOutlineMaterial() {
    this.object3dResources.resources?.outlineMaterial?.setParameters(this._outlineMaterialParameters), this.drapedResources.resources?.outlineMaterial?.setParameters(this._outlineMaterialParameters);
  }
};
function P(e5) {
  e5.pixelRatioHandle.remove(), e5.geometries = [];
}
function v(e5, t3, r3, i) {
  return new I(i, [[e4.POSITION, new t([0, 0, 0, ...t3, ...e5, ...r3], [0, 1, 2, 1, 2, 3], 3, true)]]);
}
var x2 = e2();
var S = e3(0, 0, void 0, null);

export {
  D
};
//# sourceMappingURL=chunk-FVMSCDY4.js.map
