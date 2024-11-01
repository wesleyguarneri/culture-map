import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  e as e2,
  r as r2
} from "./chunk-FWGI52X4.js";
import {
  O
} from "./chunk-E5RXQH35.js";
import {
  i
} from "./chunk-EPIUUGS2.js";
import {
  n as n2
} from "./chunk-LGS63R4F.js";
import {
  l
} from "./chunk-GNCXYHNE.js";
import {
  e,
  f,
  h
} from "./chunk-2OZSYJDX.js";
import {
  r
} from "./chunk-J4GMQHGL.js";
import {
  n
} from "./chunk-PNUA7JOS.js";
import {
  a
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/screenSizePerspectiveUtils.js
function n3(e5, t) {
  return new h2(e5, v, t);
}
function i2(e5, t) {
  const {
    curvatureDependent: a2,
    scaleStart: r3,
    scaleFallOffRange: n4
  } = v;
  return new h2(e5, {
    curvatureDependent: {
      min: {
        curvature: a2.min.curvature,
        tiltAngle: a2.min.tiltAngle,
        scaleFallOffFactor: d.curvatureDependent.min.scaleFallOffFactor
      },
      max: {
        curvature: a2.max.curvature,
        tiltAngle: a2.max.tiltAngle,
        scaleFallOffFactor: d.curvatureDependent.max.scaleFallOffFactor
      }
    },
    scaleStart: r3,
    scaleFallOffRange: n4,
    minPixelSize: d.minPixelSize
  }, t);
}
function c(e5) {
  return Math.abs(e5 * e5 * e5);
}
function l2(e5, t, a2) {
  const r3 = a2.parameters;
  return F.scale = Math.min(r3.divisor / (t - r3.offset), 1), F.factor = c(e5), F;
}
function s(t, a2) {
  return f(t * Math.max(a2.scale, a2.minScaleFactor), t, a2.factor);
}
function o(e5, t, a2) {
  const r3 = l2(e5, t, a2);
  return r3.minScaleFactor = 0, s(1, r3);
}
function u(e5, t, a2, r3) {
  r3.scale = o(e5, t, a2), r3.factor = 0, r3.minScaleFactor = a2.minScaleFactor;
}
function f2(e5, t, a2 = [0, 0]) {
  const r3 = Math.min(Math.max(t.scale, t.minScaleFactor), 1);
  return a2[0] = e5[0] * r3, a2[1] = e5[1] * r3, a2;
}
function m(e5, t, a2, r3) {
  return s(e5, l2(t, a2, r3));
}
var h2 = class _h {
  get minScaleFactor() {
    return null != this._fontHeight ? Math.min(this._description.minPixelSize / this._fontHeight, 1) : 0;
  }
  constructor(e5, t, a2, n4 = p(), i5) {
    this._viewingMode = e5, this._description = t, this._ellipsoidRadius = a2, this.parameters = n4, this._fontHeight = i5, this._viewingMode === l.Local ? (this._coverageCompensation = this._surfaceCoverageCompensationLocal, this._calculateCurvatureDependentParameters = this._calculateCurvatureDependentParametersLocal) : (this._coverageCompensation = this._surfaceCoverageCompensationGlobal, this._calculateCurvatureDependentParameters = this._calculateCurvatureDependentParametersGlobal);
  }
  update(e5) {
    return (!this.parameters || this.parameters.camera.fovY !== e5.fovY || this.parameters.camera.distance !== e5.distance) && (this._calculateParameters(e5, this._ellipsoidRadius, this.parameters), true);
  }
  overrideFontHeight(e5) {
    return e5 !== this._fontHeight ? new _h(this._viewingMode, this._description, this._ellipsoidRadius, this.parameters, e5) : this;
  }
  _calculateParameters(e5, t, a2) {
    const {
      scaleStart: r3,
      scaleFallOffRange: n4
    } = this._description, {
      fovY: i5,
      distance: c4
    } = e5, l4 = this._calculateCurvatureDependentParameters(e5, t), s2 = this._coverageCompensation(e5, t, l4), {
      tiltAngle: o3,
      scaleFallOffFactor: u3
    } = l4, f3 = Math.sin(o3) * c4, m2 = 0.5 * Math.PI - o3 - i5 * (0.5 - r3 * s2), h4 = f3 / Math.cos(m2), v2 = m2 + i5 * n4 * s2, d3 = (h4 - u3 * (f3 / Math.cos(v2))) / (1 - u3);
    return a2.camera.fovY = e5.fovY, a2.camera.distance = e5.distance, a2.offset = d3, a2.divisor = h4 - d3, a2;
  }
  _calculateCurvatureDependentParametersLocal(e5, t, a2 = g) {
    return a2.tiltAngle = this._description.curvatureDependent.min.tiltAngle, a2.scaleFallOffFactor = this._description.curvatureDependent.min.scaleFallOffFactor, a2;
  }
  _calculateCurvatureDependentParametersGlobal(t, r3, n4 = g) {
    const i5 = this._description.curvatureDependent, c4 = 1 + t.distance / r3, l4 = Math.sqrt(c4 * c4 - 1), [s2, o3] = [i5.min.curvature, i5.max.curvature], u3 = e((l4 - s2) / (o3 - s2), 0, 1), [f3, m2] = [i5.min, i5.max];
    return n4.tiltAngle = f(f3.tiltAngle, m2.tiltAngle, u3), n4.scaleFallOffFactor = f(f3.scaleFallOffFactor, m2.scaleFallOffFactor, u3), n4;
  }
  _surfaceCoverageCompensationLocal(e5, t, a2) {
    return (e5.fovY - a2.tiltAngle) / e5.fovY;
  }
  _surfaceCoverageCompensationGlobal(e5, t, a2) {
    const r3 = t * t, n4 = a2.tiltAngle + 0.5 * Math.PI, {
      fovY: i5,
      distance: c4
    } = e5, l4 = c4 * c4 + r3 - 2 * Math.cos(n4) * c4 * t, s2 = Math.sqrt(l4), o3 = Math.sqrt(l4 - r3);
    return (Math.acos(o3 / s2) - Math.asin(t / (s2 / Math.sin(n4))) + 0.5 * i5) / i5;
  }
};
var v = {
  curvatureDependent: {
    min: {
      curvature: h(10),
      tiltAngle: h(12),
      scaleFallOffFactor: 0.5
    },
    max: {
      curvature: h(70),
      tiltAngle: h(40),
      scaleFallOffFactor: 0.8
    }
  },
  scaleStart: 0.3,
  scaleFallOffRange: 0.65,
  minPixelSize: 0
};
var d = {
  curvatureDependent: {
    min: {
      scaleFallOffFactor: 0.7
    },
    max: {
      scaleFallOffFactor: 0.95
    }
  },
  minPixelSize: 14
};
function p() {
  return {
    camera: {
      distance: 0,
      fovY: 0
    },
    divisor: 0,
    offset: 0
  };
}
var F = {
  scale: 0,
  factor: 0,
  minScaleFactor: 0
};
var g = {
  tiltAngle: 0,
  scaleFallOffFactor: 0
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js
function o2(t, o3, e5, i5, l4) {
  let c4 = (e5.screenLength || 0) * t.pixelRatio;
  null != l4 && (c4 = m(c4, i5, o3, l4));
  const s2 = c4 * Math.tan(0.5 * t.fovY) / (0.5 * t.fullHeight);
  return e(s2 * o3, e5.minWorldLength || 0, null != e5.maxWorldLength ? e5.maxWorldLength : 1 / 0);
}
function e3(t, n4) {
  const r3 = n4 ? e3(n4) : {};
  for (const o3 in t) {
    let n5 = t[o3];
    n5?.forEach && (n5 = l3(n5)), null == n5 && o3 in r3 || (r3[o3] = n5);
  }
  return r3;
}
function i3(n4, r3) {
  let o3 = false;
  for (const e5 in r3) {
    const i5 = r3[e5];
    void 0 !== i5 && (Array.isArray(i5) ? null === n4[e5] ? (n4[e5] = i5.slice(), o3 = true) : a(n4[e5], i5) && (o3 = true) : n4[e5] !== i5 && (o3 = true, n4[e5] = i5));
  }
  return o3;
}
function l3(t) {
  const n4 = [];
  return t.forEach((t2) => n4.push(t2)), n4;
}
var c2 = {
  multiply: 1,
  ignore: 2,
  replace: 3,
  tint: 4
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/AnimationTimer.js
var e4 = class {
  constructor() {
    this.enabled = true, this._time = n(0);
  }
  get time() {
    return this._time;
  }
  advance({
    deltaTime: e5,
    fixedTime: i5
  }) {
    return null != i5 ? this._time !== i5 && (this._time = i5, true) : (this._time = n(this._time + e5), 0 !== e5);
  }
};
var i4 = class {
  constructor(t, e5) {
    this.deltaTime = t, this.fixedTime = e5;
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js
var c3 = class extends r2 {
  constructor(t, r3) {
    super(), this.type = e2.Material, this.supportsEdges = false, this._visible = true, this._renderPriority = 0, this._vertexAttributeLocations = O, this._pp0 = r(0, 0, 1), this._pp1 = r(0, 0, 0), this._parameters = e3(t, r3), this.validateParameters(this._parameters);
  }
  get parameters() {
    return this._parameters;
  }
  update(e5) {
    return false;
  }
  setParameters(e5, t = true) {
    i3(this._parameters, e5) && (this.validateParameters(this._parameters), t && this.parametersChanged());
  }
  validateParameters(e5) {
  }
  get visible() {
    return this._visible;
  }
  set visible(e5) {
    e5 !== this._visible && (this._visible = e5, this.parametersChanged());
  }
  shouldRender(e5) {
    return this.isVisible() && this.isVisibleForOutput(e5.output) && (!this.parameters.isDecoration || e5.bindParameters.decorations === i.ON) && !!(this.parameters.renderOccluded & e5.renderOccludedMask);
  }
  isVisibleForOutput(e5) {
    return true;
  }
  get renderPriority() {
    return this._renderPriority;
  }
  set renderPriority(e5) {
    e5 !== this._renderPriority && (this._renderPriority = e5, this.parametersChanged());
  }
  get vertexAttributeLocations() {
    return this._vertexAttributeLocations;
  }
  isVisible() {
    return this._visible;
  }
  parametersChanged() {
    this.repository?.materialChanged(this);
  }
  queryRenderOccludedState(e5) {
    return this.isVisible() && this.parameters.renderOccluded === e5;
  }
  intersectDraped(e5, t, r3, s2, i5, a2) {
    return this._pp0[0] = this._pp1[0] = s2[0], this._pp0[1] = this._pp1[1] = s2[1], this.intersect(e5, t, r3, this._pp0, this._pp1, i5);
  }
};
var d2 = class extends i4 {
  constructor(e5, t, r3) {
    super(t, r3), this.camera = e5;
  }
};
var h3;
!function(e5) {
  e5[e5.None = 0] = "None", e5[e5.Occlude = 1] = "Occlude", e5[e5.Transparent = 2] = "Transparent", e5[e5.OccludeAndTransparent = 4] = "OccludeAndTransparent", e5[e5.OccludeAndTransparentStencil = 8] = "OccludeAndTransparentStencil", e5[e5.Opaque = 16] = "Opaque";
}(h3 || (h3 = {}));
var u2 = class extends n2 {
  constructor() {
    super(...arguments), this.renderOccluded = h3.Occlude, this.isDecoration = false;
  }
};

export {
  e4 as e,
  n3 as n,
  i2 as i,
  s,
  u,
  f2 as f,
  o2 as o,
  i3 as i2,
  c2 as c,
  c3 as c2,
  d2 as d,
  h3 as h,
  u2
};
//# sourceMappingURL=chunk-UE7ZYRIH.js.map
