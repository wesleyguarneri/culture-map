import {
  r as r4
} from "./chunk-B4LRUYYJ.js";
import {
  D
} from "./chunk-UOKMPU6Y.js";
import {
  G as G2,
  M
} from "./chunk-RK23OHNG.js";
import {
  t
} from "./chunk-QXRVL2BR.js";
import {
  p
} from "./chunk-QRVAQWLH.js";
import {
  l as l4
} from "./chunk-EU7GCI2A.js";
import {
  x
} from "./chunk-HKVPB4XN.js";
import {
  E as E3
} from "./chunk-T3EGKTN6.js";
import {
  E2,
  T,
  m as m2,
  n as n4,
  y
} from "./chunk-ZFPMGEAK.js";
import {
  te
} from "./chunk-NEPAFG4J.js";
import {
  z as z3
} from "./chunk-R6CAUNOR.js";
import {
  m
} from "./chunk-GW7WMRYJ.js";
import {
  a as a2
} from "./chunk-Z52R7W33.js";
import {
  gt
} from "./chunk-O7OCS6XP.js";
import {
  r as r3
} from "./chunk-B6VSQC7C.js";
import {
  h
} from "./chunk-YAGNWBGU.js";
import {
  e as e4,
  l as l3,
  o,
  u as u3,
  v
} from "./chunk-VS26W5Y5.js";
import {
  j,
  z as z2
} from "./chunk-6MR4UDDL.js";
import {
  n as n2
} from "./chunk-L7ZKWTWL.js";
import {
  e as e2
} from "./chunk-O2DTA3XK.js";
import {
  R
} from "./chunk-TCPN7AEH.js";
import {
  e as e3
} from "./chunk-4MMTPKY4.js";
import {
  n as n3
} from "./chunk-DY7FJHTG.js";
import {
  E,
  a
} from "./chunk-H7WPOTQH.js";
import {
  u as u2
} from "./chunk-K226GFDN.js";
import {
  i,
  l as l2
} from "./chunk-7ZJ6P7J7.js";
import {
  A,
  G,
  e,
  r as r2,
  u,
  z
} from "./chunk-AXVPJBVW.js";
import {
  n,
  r
} from "./chunk-OXEPWRM7.js";
import {
  d
} from "./chunk-6WHTZNUH.js";
import {
  l
} from "./chunk-7DA6A5LD.js";

// ../../../node_modules/@arcgis/core/views/3d/interactive/visualElements/ParallelLineVisualElement.js
var v2 = class extends t {
  constructor(e5) {
    super(e5), this._location = n(), this._direction = r(1, 0, 0), this._width = 1, this._offset = 1, this._length = 18, this._color = r3(1, 0, 1, 1), this._renderOccluded = h.OccludeAndTransparent, this.applyProperties(e5);
  }
  createObject3DResourceFactory(e5) {
    return {
      view: e5,
      createResources: (e6) => this._createObject3DResources(e6),
      destroyResources: A2,
      recreateGeometry: (e6, t2) => this._recreateObject3DGeometry(e6, t2),
      cameraChanged: () => this._updateGeometry()
    };
  }
  createDrapedResourceFactory(e5) {
    return {
      view: e5,
      createResources: () => this._createDrapedResources(),
      destroyResources: M2,
      recreateGeometry: (e6) => this._recreateDrapedGeometry(e6)
    };
  }
  get location() {
    return this._location;
  }
  set location(e5) {
    G(this._location, e5) || (r2(this._location, e5), this._updateGeometry());
  }
  get direction() {
    return this._direction;
  }
  set direction(e5) {
    G(this._direction, e5) || (r2(this._direction, e5), this._updateGeometry());
  }
  setDirectionFromPoints(e5, t2) {
    z(this._direction, e(this._direction, t2, e5)), this._updateGeometry();
  }
  get width() {
    return this._width;
  }
  set width(e5) {
    e5 !== this._width && (this._width = e5, this._updateMaterial());
  }
  get offset() {
    return this._offset;
  }
  set offset(e5) {
    e5 !== this._offset && (this._offset = e5, this._updateGeometry());
  }
  get length() {
    return this._length;
  }
  set length(e5) {
    e5 !== this._length && (this._length = e5, this._updateGeometry());
  }
  get color() {
    return this._color;
  }
  set color(e5) {
    E(e5, this._color) || (a(this._color, e5), this._updateMaterial());
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(e5) {
    e5 !== this._renderOccluded && (this._renderOccluded = e5, this._updateMaterial());
  }
  _createObject3DResources(e5) {
    const t2 = new z3(this.materialParameters), r5 = new Array();
    return this._createObject3DGeometry(t2, e5, r5), {
      material: t2,
      geometries: r5,
      forEach: (e6) => {
        e6(t2), r5.forEach(e6);
      }
    };
  }
  _recreateObject3DGeometry(e5, t2) {
    e5.geometries.length = 0, this._createObject3DGeometry(e5.material, t2, e5.geometries);
  }
  _createObject3DGeometry(e5, t2, r5) {
    const [i2, s] = P(e5);
    t2.addGeometry(i2), t2.addGeometry(s), r5.push(i2), r5.push(s), this._updateVerticesObject3D(t2);
  }
  _createDrapedResources() {
    const t2 = new z3(this.materialParameters), r5 = d(() => this.view.state.contentPixelRatio, () => {
      this.drapedResources.recreateGeometry();
    });
    return {
      material: t2,
      geometries: this._createDrapedGeometry(t2),
      pixelRatioHandle: r5
    };
  }
  _recreateDrapedGeometry(e5) {
    e5.geometries = this._createDrapedGeometry(e5.material);
  }
  _createDrapedGeometry(e5) {
    const t2 = P(e5);
    return this._updateVerticesDraped(t2), t2.map((e6) => new m(e6));
  }
  _updateMaterial() {
    const {
      materialParameters: e5
    } = this;
    this.object3dResources.resources?.material.setParameters(e5), this.drapedResources.resources?.material.setParameters(e5);
  }
  get materialParameters() {
    return {
      width: this._width,
      color: this._color,
      renderOccluded: this._renderOccluded,
      isDecoration: this.isDecoration
    };
  }
  _updateGeometry() {
    if (this.isDraped) this.drapedResources.recreateGeometry();
    else {
      const e5 = this.object3dResources.object;
      e5 && this._updateVerticesObject3D(e5);
    }
  }
  _updateVerticesObject3D(e5) {
    const t2 = this.view.state.camera;
    t2.projectToScreen(this.location, U), u(I, this.location, this.direction), t2.projectToScreen(I, E4), v(E4, e4(E4, E4, U)), this._updateVertexAttributesObject3D(t2, e5, 0, U, E4, 1), this._updateVertexAttributesObject3D(t2, e5, 1, U, E4, -1);
  }
  _updateVertexAttributesObject3D(e5, r5, i2, s, o2, a3) {
    const c = r5.geometries[i2], n5 = c.getMutableAttribute(e3.POSITION)?.data;
    if (!n5) return;
    const {
      start: d2,
      end: h2
    } = V(o2, s, a3, this.offset, this.width, this.length);
    e5.unprojectFromScreen(l2(d2), I), n5[0] = I[0], n5[1] = I[1], n5[2] = I[2], e5.unprojectFromScreen(l2(h2), I), n5[3] = I[0], n5[4] = I[1], n5[5] = I[2], r5.geometryVertexAttributeUpdated(c, e3.POSITION);
  }
  _updateVerticesDraped(e5) {
    const {
      view: {
        basemapTerrain: {
          overlayManager: t2
        },
        state: {
          contentPixelRatio: r5
        }
      }
    } = this, {
      location: i2,
      width: s,
      length: o2,
      offset: a3
    } = this, c = N;
    c.spatialReference = t2.renderer.spatialReference, c.x = i2[0], c.y = i2[1];
    const n5 = this.view.overlayPixelSizeInMapUnits(c) * r5, d2 = s * n5, h2 = o2 * n5, l5 = a3 * n5;
    this._updateVertexAttributesDraped(e5[0], d2, h2, l5, -1), this._updateVertexAttributesDraped(e5[1], d2, h2, l5, 1);
  }
  _updateVertexAttributesDraped(e5, t2, r5, i2, s) {
    const o2 = e5.getMutableAttribute(e3.POSITION)?.data;
    if (!o2) return;
    const {
      location: a3,
      direction: c
    } = this, {
      start: n5,
      end: d2
    } = V(c, a3, s, i2, t2, r5);
    o2[0] = n5[0], o2[1] = n5[1], o2[2] = te, o2[3] = d2[0], o2[4] = d2[1], o2[5] = te, e5.invalidateBoundingInfo();
  }
};
function P(e5) {
  return [gt(e5, [n(), n()]), gt(e5, [n(), n()])];
}
function V(e5, t2, r5, i2, s, n5) {
  const d2 = l3(S, o(S, e5[1] * r5, e5[0] * -r5), i2 + s / 2), h2 = u3(T2, u3(T2, u3(T2, t2, l3(T2, e5, n5 / 2)), d2), d2);
  return {
    start: h2,
    end: u3(F, h2, l3(F, e5, -n5))
  };
}
function A2(e5) {
  e5.geometries.length = 0;
}
function M2(e5) {
  e5.pixelRatioHandle.remove(), e5.geometries = [];
}
var I = n();
var S = n3();
var T2 = n3();
var F = n3();
var U = i();
var E4 = i();
var N = e2(0, 0, void 0, null);

// ../../../node_modules/@arcgis/core/views/3d/interactive/SnappingVisualizer3D.js
var R2 = class extends r4 {
  sortUniqueHints(e5) {
    return e5.sort((e6, i2) => (i2 instanceof n4 ? i2.length : 0) - (e6 instanceof n4 ? e6.length : 0));
  }
  visualizeIntersectionPoint(e5, i2) {
    const {
      spatialReference: t2,
      view: r5
    } = i2, o2 = D2(i2);
    return l(new x({
      view: r5,
      primitive: "circle",
      geometry: T(e5.intersectionPoint, t2),
      elevationInfo: e5.isDraped ? z2 : j,
      size: 20,
      outlineSize: 2,
      color: o2.intersectionPointColor,
      outlineColor: o2.intersectionPointOutlineColor,
      pixelSnappingEnabled: false,
      isDecoration: true,
      attached: true
    }));
  }
  visualizePoint(e5, i2) {
    const {
      view: t2,
      spatialReference: r5
    } = i2, o2 = D2(i2), a3 = x2(e5.point, e5.domain, i2);
    return l(new x({
      view: t2,
      primitive: "circle",
      geometry: T(a3, r5),
      elevationInfo: A3(e5),
      size: 20,
      outlineSize: 2,
      color: o2.pointColor,
      outlineColor: o2.pointOutlineColor,
      pixelSnappingEnabled: false,
      isDecoration: true,
      attached: true
    }));
  }
  visualizeLine(e5, i2) {
    const {
      view: t2,
      spatialReference: r5
    } = i2, o2 = D2(i2), a3 = x2(e5.lineStart, e5.domain, i2), l5 = x2(e5.lineEnd, e5.domain, i2);
    return l(H(e5.type, a3, l5, r5, A3(e5), t2, o2, e5.isDraped, e5.fadeLeft, e5.fadeRight));
  }
  visualizeParallelSign(e5, i2) {
    const {
      view: r5,
      spatialReference: o2
    } = i2, a3 = D2(i2), {
      isDraped: l5
    } = e5, s = A3(e5), p2 = x2(e5.lineStart, e5.domain, i2), d2 = x2(e5.lineEnd, e5.domain, i2), m3 = z4(p2, o2, s, r5, l5), g = z4(d2, o2, s, r5, l5), v3 = A(g, m3, g, 0.5), h2 = new v2({
      view: r5,
      attached: false,
      offset: p.parallelLineHintOffset,
      length: p.parallelLineHintLength,
      width: p.parallelLineHintWidth,
      color: a3.parallelSignColor,
      location: v3,
      renderOccluded: l5 ? h.OccludeAndTransparent : h.Opaque,
      isDraped: l5,
      renderGroup: a2.SnappingHint,
      isDecoration: true
    });
    return h2.setDirectionFromPoints(m3, v3), h2.attached = true, l(h2);
  }
  visualizeRightAngleQuad(e5, i2) {
    const {
      view: t2,
      spatialReference: r5
    } = i2, o2 = D2(i2), a3 = A3(e5), {
      isDraped: l5
    } = e5, s = x2(e5.previousVertex, e5.domain, i2), p2 = x2(e5.centerVertex, e5.domain, i2), c = x2(e5.nextVertex, e5.domain, i2), d2 = z4(s, r5, a3, t2, l5), g = z4(p2, r5, a3, t2, l5), v3 = z4(c, r5, a3, t2, l5);
    return l(new D({
      view: t2,
      attached: true,
      color: l5 ? o2.rightAngleColorDraped : o2.rightAngleColor,
      renderOccluded: l5 ? h.OccludeAndTransparent : h.Transparent,
      outlineRenderOccluded: l5 ? h.OccludeAndTransparent : h.Opaque,
      outlineColor: o2.rightAngleOutlineColor,
      outlineSize: p.rightAngleHintOutlineSize,
      size: p.rightAngleHintSize,
      isDraped: l5,
      geometry: {
        previous: d2,
        center: g,
        next: v3
      },
      renderGroup: a2.SnappingHint,
      isDecoration: true
    }));
  }
};
function D2(n5) {
  const {
    effectiveTheme: t2
  } = n5.view, r5 = u2.toUnitRGBA(t2.accentColor), o2 = [0, 0, 0, 0];
  return {
    intersectionPointColor: o2,
    intersectionPointOutlineColor: r5,
    pointColor: o2,
    pointOutlineColor: r5,
    lineColor: r5,
    lineOutlineColor: void 0,
    parallelSignColor: r5,
    rightAngleColor: r5,
    rightAngleColorDraped: u2.toUnitRGBA(R(t2.accentColor, 0.5)),
    rightAngleOutlineColor: r5
  };
}
function x2(e5, i2, {
  selfSnappingZ: n5,
  view: t2,
  spatialReference: r5
}) {
  return i2 & E2.SELF && m2(e5) && null != n5 ? y(e5, n5, t2, r5) : e5;
}
function A3(e5) {
  return e5.isDraped ? z2 : j;
}
function H(e5, i2, n5, t2, r5, o2, a3, l5 = false, c = true, d2 = true) {
  const m3 = z4(i2, t2, r5, o2, l5), g = z4(n5, t2, r5, o2, l5), v3 = new G2({
    view: o2,
    extensionType: M.FADED,
    start: m3,
    end: g,
    isDraped: l5,
    color: a3.lineColor,
    renderOccluded: l5 ? h.OccludeAndTransparent : h.Opaque,
    renderGroup: a2.SnappingHint,
    isDecoration: true
  });
  switch (e5) {
    case E3.TARGET:
      v3.width = p.lineHintWidthTarget, v3.fadedExtensions = {
        start: 0,
        end: p.lineHintFadedExtensions
      };
      break;
    case E3.REFERENCE_EXTENSION:
      v3.width = p.lineHintWidthReference, v3.fadedExtensions = {
        start: 0,
        end: 0
      };
      break;
    case E3.REFERENCE:
      v3.width = p.lineHintWidthReference, v3.fadedExtensions = {
        start: c ? p.lineHintFadedExtensions : 0,
        end: d2 ? p.lineHintFadedExtensions : 0
      };
  }
  return v3.attached = true, v3;
}
function z4(e5, i2, n5, t2, a3) {
  const l5 = n();
  if (a3) {
    const n6 = t2.basemapTerrain.overlayManager.renderer.spatialReference;
    n2(e5, i2, l5, n6);
  } else l4(e5, i2, n5, t2, l5);
  return l5;
}

export {
  R2 as R
};
//# sourceMappingURL=chunk-UNG626D3.js.map
