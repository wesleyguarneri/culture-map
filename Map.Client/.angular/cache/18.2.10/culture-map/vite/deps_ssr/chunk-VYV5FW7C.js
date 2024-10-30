import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  t
} from "./chunk-OPYMVWCV.js";
import {
  t as t2
} from "./chunk-NF2MOJH5.js";
import {
  H,
  _s
} from "./chunk-377KSYNB.js";
import {
  n as n4
} from "./chunk-ZFES27RA.js";
import {
  Z,
  ct
} from "./chunk-L6FG3WIC.js";
import {
  l
} from "./chunk-GNCXYHNE.js";
import {
  S,
  c as c2,
  m
} from "./chunk-2TNGEJGS.js";
import {
  c
} from "./chunk-GK5M6FUR.js";
import {
  a
} from "./chunk-Y7SJWJAL.js";
import {
  n as n3,
  r as r2
} from "./chunk-KOI252FF.js";
import {
  n as n2
} from "./chunk-UFQD6AL4.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  M
} from "./chunk-2OZSYJDX.js";
import {
  P,
  _,
  o,
  r,
  z as z2
} from "./chunk-MZM4INJV.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import {
  W2 as W,
  s3 as s,
  z
} from "./chunk-6SSA7P3A.js";

// ../../../node_modules/@arcgis/core/geometry/support/coordinateSystem.js
function h(t3) {
  const {
    value: e,
    operations: n5
  } = t3;
  return {
    operations: n5,
    value: n5.create(e)
  };
}
function j(t3, e, n5) {
  return t3.operations.setExtent(t3.value, e, n5.value), n5;
}
function d(t3) {
  return {
    operations: t3,
    value: t3.create()
  };
}
function x(t3, e, n5 = d(t3)) {
  return n5.operations = t3, t3.copy(e, n5.value), n5;
}
function A(t3) {
  return x(ct, Z(0, 0, 0, s(t3).radius));
}
var b = 2 ** 50;
function P2() {
  return x(_s, H([0, 0, 0], [b, 0, 0], [0, b, 0]));
}
function R(t3, e, n5) {
  return t3.operations.axisAt(t3.value, e, n2.Z, n5);
}
function S2(t3, e, n5, o2) {
  return t3.operations.axisAt(t3.value, e, n5, o2);
}
function g(t3, e, n5) {
  return t3.operations.intersectRay(t3.value, e, n5);
}
function y(t3, e, n5) {
  return t3.operations.intersectRayClosestSilhouette(t3.value, e, n5);
}
function U(t3, e) {
  return t3.operations.altitudeAt(t3.value, e);
}
function G(t3, e, n5, o2) {
  return t3.operations.setAltitudeAt(t3.value, e, n5, o2);
}
function O(n5, o2, r3, i) {
  return o2 !== i && n3(i, o2), o(Z2, i[12], i[13], i[14]), G(n5, Z2, r3, Z2), i[12] = Z2[0], i[13] = Z2[1], i[14] = Z2[2], i;
}
function T(t3, e, n5) {
  return t3.operations.elevate(t3.value, e, n5.value);
}
var Z2 = n();
function q(t3, e, o2, r3, i) {
  return i[0] = P(t3, e), i[1] = P(t3, o2), i[2] = P(t3, r3), i;
}
function w(t3, e, n5, s2, a2) {
  r(n5, t3), r(B, e), z2(B, B), _(s2, B, n5), _(a2, s2, n5);
}
function z3(t3, e) {
  return t3 ? a(e) : e.isGeographic ? f.PlateCarree : e;
}
var B = n();

// ../../../node_modules/@arcgis/core/views/3d/support/RenderCoordsHelper.js
var v = class _v {
  constructor(t3, e, o2, r3) {
    this.viewingMode = t3, this.spatialReference = e, this.unitInMeters = o2, this._coordinateSystem = r3, this._tmpCoordinateSystem = h(r3), this.referenceEllipsoid = s(e), this.sphericalPCPF = a(e);
  }
  set extent(t3) {
    t3 && j(this._coordinateSystem, t3, this._coordinateSystem);
  }
  getAltitude(t3) {
    return U(this._coordinateSystem, t3);
  }
  setAltitude(t3, e, o2 = t3) {
    return G(this._coordinateSystem, o2, e, t3);
  }
  setAltitudeOfTransformation(t3, e) {
    O(this._coordinateSystem, e, t3, e);
  }
  worldUpAtPosition(t3, e) {
    return R(this._coordinateSystem, t3, e);
  }
  worldBasisAtPosition(t3, e, o2) {
    return S2(this._coordinateSystem, t3, e, o2);
  }
  basisMatrixAtPosition(t3, e) {
    const o2 = this.worldBasisAtPosition(t3, n2.X, c2.get()), i = this.worldBasisAtPosition(t3, n2.Y, c2.get()), s2 = this.worldBasisAtPosition(t3, n2.Z, c2.get());
    return r2(e, o2[0], o2[1], o2[2], 0, i[0], i[1], i[2], 0, s2[0], s2[1], s2[2], 0, 0, 0, 0, 1), e;
  }
  headingAtPosition(e, o2) {
    const r3 = this.worldUpAtPosition(e, c2.get()), i = this.worldBasisAtPosition(e, n2.Y, c2.get()), s2 = m(o2, i, r3);
    return M(s2);
  }
  intersectManifoldClosestSilhouette(t3, e, o2) {
    return T(this._coordinateSystem, e, this._tmpCoordinateSystem), y(this._tmpCoordinateSystem, t3, o2), o2;
  }
  intersectManifold(t3, e, o2) {
    T(this._coordinateSystem, e, this._tmpCoordinateSystem);
    const r3 = c2.get();
    return g(this._tmpCoordinateSystem, t3, r3) ? r(o2, r3) : null;
  }
  intersectInfiniteManifold(t3, e, o2) {
    if (this.viewingMode === l.Global) return this.intersectManifold(t3, e, o2);
    T(this._coordinateSystem, e, this._tmpCoordinateSystem);
    const r3 = this._tmpCoordinateSystem.value, s2 = c2.get();
    return S(r3.plane, t3, s2) ? r(o2, s2) : null;
  }
  toRenderCoords(t3, e, o2) {
    return t2(t3) ? c(t3, e, this.spatialReference) : n4(t3, e, o2, this.spatialReference);
  }
  fromRenderCoords(t3, e, o2 = null) {
    return t2(e) ? (null != o2 && (e.spatialReference = o2), t(t3, this.spatialReference, e) ? e : null) : n4(t3, this.spatialReference, e, o2) ? e : null;
  }
  static create(t3, o2) {
    switch (t3) {
      case l.Local:
        return new _v(l.Local, o2, W(o2), P2());
      case l.Global:
        return new _v(l.Global, o2, 1, A(o2));
    }
  }
  static renderUnitScaleFactor(t3, e) {
    return z(t3) / z(e);
  }
};

export {
  q,
  w,
  z3 as z,
  v
};
//# sourceMappingURL=chunk-VYV5FW7C.js.map
