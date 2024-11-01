import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  us
} from "./chunk-377KSYNB.js";
import {
  d,
  v
} from "./chunk-N4FQBAT2.js";
import {
  b,
  k,
  m
} from "./chunk-6ZLH7XBS.js";
import {
  l
} from "./chunk-GNCXYHNE.js";
import {
  e,
  o
} from "./chunk-YGAXDKHF.js";
import {
  n as n3
} from "./chunk-VSQZQLTQ.js";
import {
  z as z2
} from "./chunk-K43CZ3M5.js";
import {
  n as n2
} from "./chunk-KOI252FF.js";
import {
  A,
  O,
  g,
  r,
  s,
  u,
  z
} from "./chunk-MZM4INJV.js";
import {
  n,
  t,
  y
} from "./chunk-J4GMQHGL.js";

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorInterfaces.js
var i;
var e2;
!function(i3) {
  i3[i3.OBJECT = 0] = "OBJECT", i3[i3.HUD = 1] = "HUD", i3[i3.TERRAIN = 2] = "TERRAIN", i3[i3.OVERLAY = 3] = "OVERLAY", i3[i3.I3S = 4] = "I3S", i3[i3.PCL = 5] = "PCL", i3[i3.LOD = 6] = "LOD", i3[i3.VOXEL = 7] = "VOXEL", i3[i3.TILES3D = 8] = "TILES3D";
}(i || (i = {}));
var t2 = class {
  constructor() {
    this.verticalOffset = 0, this.selectionMode = false, this.hud = true, this.selectOpaqueTerrainOnly = true, this.invisibleTerrain = false, this.backfacesTerrain = true, this.isFiltered = false, this.filteredLayerUids = [], this.store = e2.ALL, this.normalRequired = true;
  }
};
!function(i3) {
  i3[i3.MIN = 0] = "MIN", i3[i3.MINMAX = 1] = "MINMAX", i3[i3.ALL = 2] = "ALL";
}(e2 || (e2 = {}));

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorTarget.js
var t3 = class {
  constructor(s3, t4, r3) {
    this.object = s3, this.geometryId = t4, this.triangleNr = r3;
  }
};
var r2 = class extends t3 {
  constructor(t4, r3, c2, e4) {
    super(t4, r3, c2), this.center = null != e4 ? t(e4) : null;
  }
};
var e3 = class {
  constructor(s3) {
    this.layerUid = s3;
  }
};
var o2 = class extends e3 {
  constructor(s3, t4) {
    super(s3), this.graphicUid = t4;
  }
};

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtils.js
function o3(t4) {
  return null != t4?.dist;
}
function c(r3) {
  return (n4, o4, c2) => (A(u2, n4, o4, c2), !us(r3, u2));
}
function s2(t4) {
  return o3(t4) && t4.intersector === i.OBJECT && !!t4.target;
}
function i2(t4) {
  return o3(t4) && t4.intersector === i.HUD && !!t4.target && "center" in t4.target && null != t4.target.center;
}
var u2 = n();

// ../../../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Intersector.js
var E = 1e-5;
var b2 = class {
  constructor(t4) {
    this.options = new t2(), this._results = new A2(), this.transform = new v(), this.tolerance = E, this.verticalOffset = null, this._ray = m(), this._rayEnd = n(), this._rayBeginTransformed = n(), this._rayEndTransformed = n(), this.viewingMode = t4 ?? l.Global;
  }
  get results() {
    return this._results;
  }
  get ray() {
    return this._ray;
  }
  get rayBegin() {
    return this._ray.origin;
  }
  get rayEnd() {
    return this._rayEnd;
  }
  reset(t4, r3, s3) {
    this.resetWithRay(k(t4, r3, this._ray), s3);
  }
  resetWithRay(t4, r3) {
    this.camera = r3, t4 !== this._ray && b(t4, this._ray), 0 !== this.options.verticalOffset ? this.viewingMode === l.Local ? this._ray.origin[2] -= this.options.verticalOffset : this.verticalOffset = this.options.verticalOffset : this.verticalOffset = null, u(this._rayEnd, this._ray.origin, this._ray.direction), this._results.init(this._ray);
  }
  intersect(t4 = null, r3, s3, i3, e4) {
    this.point = r3, this.filterPredicate = i3, this.tolerance = s3 ?? E;
    const a = d(this.verticalOffset);
    if (t4 && t4.length > 0) {
      const r4 = e4 ? (t5) => {
        e4(t5) && this.intersectObject(t5);
      } : (t5) => {
        this.intersectObject(t5);
      };
      for (const s4 of t4) {
        const t5 = s4.getSpatialQueryAccelerator?.();
        null != t5 ? (null != a ? t5.forEachAlongRayWithVerticalOffset(this._ray.origin, this._ray.direction, r4, a) : t5.forEachAlongRay(this._ray.origin, this._ray.direction, r4), this.options.selectionMode && this.options.hud && t5.forEachDegenerateObject(r4)) : s4.objects.forAll((t6) => r4(t6));
      }
    }
    this.sortResults();
  }
  intersectObject(t4) {
    const r3 = t4.geometries;
    if (!r3) return;
    const i3 = t4.effectiveTransformation, a = d(this.verticalOffset);
    for (const n4 of r3) {
      if (!n4.visible) continue;
      const {
        material: r4,
        id: o4
      } = n4;
      this.transform.setAndInvalidateLazyTransforms(i3, n4.transformation), O(this._rayBeginTransformed, this.rayBegin, this.transform.inverse), O(this._rayEndTransformed, this.rayEnd, this.transform.inverse);
      const h = this.transform.transform;
      null != a && (a.objectTransform = this.transform), r4.intersect(n4, this.transform.transform, this, this._rayBeginTransformed, this._rayEndTransformed, (r5, i4, e4, a2, n5, d2) => {
        if (r5 >= 0) {
          if (null != this.filterPredicate && !this.filterPredicate(this._ray.origin, this._rayEnd, r5)) return;
          const l2 = a2 ? this._results.hud : this._results, c2 = a2 ? (a3) => {
            const h2 = new r2(t4, o4, e4, d2);
            a3.set(i.HUD, h2, r5, i4, o, n5);
          } : (s3) => s3.set(i.OBJECT, {
            object: t4,
            geometryId: o4,
            triangleNr: e4
          }, r5, i4, h, n5);
          if ((null == l2.min.drapedLayerOrder || n5 >= l2.min.drapedLayerOrder) && (null == l2.min.dist || r5 < l2.min.dist) && c2(l2.min), this.options.store !== e2.MIN && (null == l2.max.drapedLayerOrder || n5 < l2.max.drapedLayerOrder) && (null == l2.max.dist || r5 > l2.max.dist) && c2(l2.max), this.options.store === e2.ALL) if (a2) {
            const t5 = new I(this._ray);
            c2(t5), this._results.hud.all.push(t5);
          } else {
            const t5 = new B(this._ray);
            c2(t5), this._results.all.push(t5);
          }
        }
      });
    }
  }
  sortResults(t4 = this._results.all) {
    t4.sort((t5, r3) => t5.dist !== r3.dist ? (t5.dist ?? 0) - (r3.dist ?? 0) : t5.drapedLayerOrder !== r3.drapedLayerOrder ? x(t5.drapedLayerOrder, r3.drapedLayerOrder) : x(t5.drapedLayerGraphicOrder, r3.drapedLayerGraphicOrder));
  }
};
function x(t4, r3) {
  return (r3 ?? -Number.MAX_VALUE) - (t4 ?? -Number.MAX_VALUE);
}
function T(t4) {
  return new b2(t4);
}
var A2 = class {
  constructor() {
    this.min = new B(m()), this.max = new B(m()), this.hud = {
      min: new I(m()),
      max: new I(m()),
      all: new Array()
    }, this.ground = new B(m()), this.all = [];
  }
  init(t4) {
    this.min.init(t4), this.max.init(t4), this.ground.init(t4), this.all.length = 0, this.hud.min.init(t4), this.hud.max.init(t4), this.hud.all.length = 0;
  }
};
var B = class {
  get ray() {
    return this._ray;
  }
  get distanceInRenderSpace() {
    return null != this.dist ? (g(M, this.ray.direction, this.dist), s(M)) : null;
  }
  getIntersectionPoint(t4) {
    return !!o3(this) && (g(M, this.ray.direction, this.dist), u(t4, this.ray.origin, M), true);
  }
  getTransformedNormal(t4) {
    return r(R, this.normal), R[3] = 0, z2(R, R, this.transformation), r(t4, R), z(t4, t4);
  }
  constructor(t4) {
    this.intersector = i.OBJECT, this.normal = n(), this.transformation = e(), this._ray = m(), this.init(t4);
  }
  init(t4) {
    this.dist = null, this.target = null, this.drapedLayerOrder = null, this.drapedLayerGraphicOrder = null, this.intersector = i.OBJECT, b(t4, this._ray);
  }
  set(r3, i3, e4, a, n4, h, d2) {
    this.intersector = r3, this.dist = e4, r(this.normal, a ?? y), n2(this.transformation, n4 ?? o), this.target = i3, this.drapedLayerOrder = h, this.drapedLayerGraphicOrder = d2;
  }
  copy(r3) {
    b(r3.ray, this._ray), this.intersector = r3.intersector, this.dist = r3.dist, this.target = r3.target, this.drapedLayerOrder = r3.drapedLayerOrder, this.drapedLayerGraphicOrder = r3.drapedLayerGraphicOrder, r(this.normal, r3.normal), n2(this.transformation, r3.transformation);
  }
};
var I = class extends B {
  constructor() {
    super(...arguments), this.intersector = i.HUD;
  }
};
function G(t4) {
  return new B(t4);
}
var M = n();
var R = n3();

export {
  i,
  e2 as e,
  e3 as e2,
  o2 as o,
  o3 as o2,
  c,
  s2 as s,
  i2,
  E,
  T,
  G
};
//# sourceMappingURL=chunk-K6JW77RY.js.map
