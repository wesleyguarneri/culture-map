import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  u as u2
} from "./chunk-IPGNBAEV.js";
import {
  a,
  t as t2
} from "./chunk-INUNNFZT.js";
import {
  t
} from "./chunk-NF2MOJH5.js";
import {
  e as e2
} from "./chunk-D7C26LZP.js";
import {
  u
} from "./chunk-MRP3FBLV.js";
import {
  e
} from "./chunk-YGAXDKHF.js";
import {
  n as n5,
  r
} from "./chunk-2EJFYNM7.js";
import {
  n as n4
} from "./chunk-KOI252FF.js";
import {
  i
} from "./chunk-JKPUNUQA.js";
import {
  n as n3
} from "./chunk-QGBMZIP4.js";
import {
  n as n2
} from "./chunk-J4GMQHGL.js";
import {
  s
} from "./chunk-AIZ3T7E3.js";
import {
  n2 as n
} from "./chunk-6JFGZTLU.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/elevationAlignmentUtils.js
function u3(e3, t3, n6, o3, i3, a3, s3, l2, u5, c3, f3) {
  const m3 = x[f3.mode];
  let d3, g2, p3 = 0;
  if (n3(e3, t3, n6, o3, u5.spatialReference, i3, l2)) return m3.requiresAlignment(f3) ? (p3 = m3.applyElevationAlignmentBuffer(o3, i3, a3, s3, l2, u5, c3, f3), d3 = a3, g2 = s3) : (d3 = o3, g2 = i3), n3(d3, u5.spatialReference, g2, a3, c3.spatialReference, s3, l2) ? p3 : void 0;
}
function c(e3, t3, n6, o3, r2) {
  const l2 = (t(e3) ? e3.z : t2(e3) ? e3.array[e3.offset + 2] : e3[2]) || 0;
  switch (n6.mode) {
    case "on-the-ground": {
      const n7 = a(t3, e3, "ground") ?? 0;
      return r2.verticalDistanceToGround = 0, r2.sampledElevation = n7, void (r2.z = n7);
    }
    case "relative-to-ground": {
      const i3 = a(t3, e3, "ground") ?? 0, a3 = n6.geometryZWithOffset(l2, o3);
      return r2.verticalDistanceToGround = a3, r2.sampledElevation = i3, void (r2.z = a3 + i3);
    }
    case "relative-to-scene": {
      const i3 = a(t3, e3, "scene") ?? 0, a3 = n6.geometryZWithOffset(l2, o3);
      return r2.verticalDistanceToGround = a3, r2.sampledElevation = i3, void (r2.z = a3 + i3);
    }
    case "absolute-height": {
      const i3 = n6.geometryZWithOffset(l2, o3), a3 = a(t3, e3, "ground") ?? 0;
      return r2.verticalDistanceToGround = i3 - a3, r2.sampledElevation = a3, void (r2.z = i3);
    }
    default:
      return void (r2.z = 0);
  }
}
function f(e3, t3, n6, o3) {
  return c(e3, t3, n6, o3, D), D.z;
}
function m(e3, t3, n6) {
  return "on-the-ground" === t3 && "on-the-ground" === n6 ? e3.staysOnTheGround : t3 === n6 || "on-the-ground" !== t3 && "on-the-ground" !== n6 ? null == t3 || null == n6 ? e3.definedChanged : b.UPDATE : e3.onTheGroundChanged;
}
function d(e3) {
  return "relative-to-ground" === e3 || "relative-to-scene" === e3;
}
function g(e3) {
  return "absolute-height" !== e3;
}
function p(t3, n6, r2, i3, a3) {
  c(n6, r2, a3, i3, D), E(t3, D.verticalDistanceToGround);
  const s3 = D.sampledElevation, l2 = n4(C, t3.transformation);
  O[0] = n6.x, O[1] = n6.y, O[2] = D.z;
  return u(n6.spatialReference, O, l2, i3.spatialReference) ? t3.transformation = l2 : console.warn("Could not locate symbol object properly, it might be misplaced"), s3;
}
function E(e3, t3) {
  for (let n6 = 0; n6 < e3.geometries.length; ++n6) {
    const o3 = e3.geometries[n6].getMutableAttribute(e2.CENTEROFFSETANDDISTANCE);
    o3 && o3.data[3] !== t3 && (o3.data[3] = t3, e3.geometryVertexAttributeUpdated(e3.geometries[n6], e2.CENTEROFFSETANDDISTANCE));
  }
}
function v(e3, t3, n6, o3, r2, i3) {
  let a3 = 0;
  const s3 = i3.spatialReference;
  t3 *= 3, o3 *= 3;
  for (let l2 = 0; l2 < r2; ++l2) {
    const r3 = e3[t3], l3 = e3[t3 + 1], u5 = e3[t3 + 2], c3 = i3.getElevation(r3, l3, u5, s3, "ground") ?? 0;
    a3 += c3, n6[o3] = r3, n6[o3 + 1] = l3, n6[o3 + 2] = c3, t3 += 3, o3 += 3;
  }
  return a3 / r2;
}
function h(e3, t3, n6, o3, r2, i3, a3, s3) {
  let l2 = 0;
  const u5 = s3.calculateOffsetRenderUnits(a3), c3 = s3.featureExpressionInfoContext, f3 = i3.spatialReference;
  t3 *= 3, o3 *= 3;
  for (let m3 = 0; m3 < r2; ++m3) {
    const r3 = e3[t3], a4 = e3[t3 + 1], s4 = e3[t3 + 2], m4 = i3.getElevation(r3, a4, s4, f3, "ground") ?? 0;
    l2 += m4, n6[o3] = r3, n6[o3 + 1] = a4, n6[o3 + 2] = null == c3 ? s4 + m4 + u5 : m4 + u5, t3 += 3, o3 += 3;
  }
  return l2 / r2;
}
function A(e3, t3, n6, o3, r2, i3, a3, s3) {
  let l2 = 0;
  const u5 = s3.calculateOffsetRenderUnits(a3), c3 = s3.featureExpressionInfoContext, f3 = i3.spatialReference;
  t3 *= 3, o3 *= 3;
  for (let m3 = 0; m3 < r2; ++m3) {
    const r3 = e3[t3], a4 = e3[t3 + 1], s4 = e3[t3 + 2], m4 = i3.getElevation(r3, a4, s4, f3, "scene") ?? 0;
    l2 += m4, n6[o3] = r3, n6[o3 + 1] = a4, n6[o3 + 2] = null == c3 ? s4 + m4 + u5 : m4 + u5, t3 += 3, o3 += 3;
  }
  return l2 / r2;
}
function T(e3) {
  const t3 = e3.meterUnitOffset, n6 = e3.featureExpressionInfoContext;
  return 0 !== t3 || null != n6;
}
function y(e3, t3, n6, o3, r2, i3, a3, s3) {
  const l2 = s3.calculateOffsetRenderUnits(a3), u5 = s3.featureExpressionInfoContext;
  t3 *= 3, o3 *= 3;
  for (let c3 = 0; c3 < r2; ++c3) {
    const r3 = e3[t3], i4 = e3[t3 + 1], a4 = e3[t3 + 2];
    n6[o3] = r3, n6[o3 + 1] = i4, n6[o3 + 2] = null == u5 ? a4 + l2 : l2, t3 += 3, o3 += 3;
  }
  return 0;
}
var R = class {
  constructor() {
    this.verticalDistanceToGround = 0, this.sampledElevation = 0, this.z = 0;
  }
};
var b;
!function(e3) {
  e3[e3.NONE = 0] = "NONE", e3[e3.UPDATE = 1] = "UPDATE", e3[e3.RECREATE = 2] = "RECREATE";
}(b || (b = {}));
var x = {
  "absolute-height": {
    applyElevationAlignmentBuffer: y,
    requiresAlignment: T
  },
  "on-the-ground": {
    applyElevationAlignmentBuffer: v,
    requiresAlignment: () => true
  },
  "relative-to-ground": {
    applyElevationAlignmentBuffer: h,
    requiresAlignment: () => true
  },
  "relative-to-scene": {
    applyElevationAlignmentBuffer: A,
    requiresAlignment: () => true
  }
};
var C = e();
var D = new R();
var O = n2();

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/featureExpressionInfoUtils.js
var c2 = () => n.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");
function o(e3) {
  return {
    cachedResult: e3.cachedResult,
    arcade: e3.arcade ? {
      func: e3.arcade.func,
      context: e3.arcade.modules.arcadeUtils.createExecContext(null, {
        sr: e3.arcade.context.spatialReference
      }),
      modules: e3.arcade.modules
    } : null
  };
}
function u4(e3) {
  const t3 = e3?.expression;
  if ("string" == typeof t3) {
    const e4 = m2(t3);
    if (null != e4) return {
      cachedResult: e4
    };
  }
  return null;
}
function a2(e3, r2, c3, o3) {
  return __async(this, null, function* () {
    const u5 = e3?.expression;
    if ("string" != typeof u5) return null;
    const a3 = m2(u5);
    if (null != a3) return {
      cachedResult: a3
    };
    const s3 = yield i();
    s(c3);
    const l2 = s3.arcadeUtils, i3 = l2.createSyntaxTree(u5);
    return l2.dependsOnView(i3) ? (null != o3 && o3.error("Expressions containing '$view' are not supported on ElevationInfo"), {
      cachedResult: 0
    }) : {
      arcade: {
        func: l2.createFunction(i3),
        context: l2.createExecContext(null, {
          sr: r2
        }),
        modules: s3
      }
    };
  });
}
function s2(e3, t3, r2) {
  return e3.arcadeUtils.createFeature(t3.attributes, t3.geometry, r2);
}
function l(e3, t3) {
  if (null != e3 && !p2(e3)) {
    if (!t3 || !e3.arcade) return void c2().errorOncePerTick("Arcade support required but not provided");
    const n6 = t3;
    n6._geometry && (n6._geometry = u2(n6._geometry)), e3.arcade.modules.arcadeUtils.updateExecContext(e3.arcade.context, t3);
  }
}
function i2(e3) {
  if (null != e3) {
    if (p2(e3)) return e3.cachedResult;
    const t3 = e3.arcade;
    let r2 = t3?.modules.arcadeUtils.executeFunction(t3.func, t3.context);
    return "number" != typeof r2 && (e3.cachedResult = 0, r2 = 0), r2;
  }
  return 0;
}
function d2(e3, t3 = false) {
  let r2 = e3?.featureExpressionInfo;
  const n6 = r2?.expression;
  return t3 || "0" === n6 || (r2 = null), r2 ?? null;
}
var f2 = {
  cachedResult: 0
};
function p2(e3) {
  return null != e3.cachedResult;
}
function m2(e3) {
  return "0" === e3 ? 0 : null;
}

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/ElevationContext.js
var o2 = class _o {
  constructor() {
    this._meterUnitOffset = 0, this._renderUnitOffset = 0, this._unit = "meters", this._metersPerElevationInfoUnit = 1, this._featureExpressionInfoContext = null, this.centerPointInElevationSR = null, this.mode = null;
  }
  get featureExpressionInfoContext() {
    return this._featureExpressionInfoContext;
  }
  get meterUnitOffset() {
    return this._meterUnitOffset;
  }
  get unit() {
    return this._unit;
  }
  set unit(e3) {
    this._unit = e3, this._metersPerElevationInfoUnit = r(e3);
  }
  get requiresSampledElevationInfo() {
    return "absolute-height" !== this.mode;
  }
  reset() {
    this.mode = null, this._meterUnitOffset = 0, this._renderUnitOffset = 0, this._featureExpressionInfoContext = null, this.unit = "meters";
  }
  set offsetMeters(t3) {
    this._meterUnitOffset = t3, this._renderUnitOffset = 0;
  }
  set offsetElevationInfoUnits(t3) {
    this._meterUnitOffset = t3 * this._metersPerElevationInfoUnit, this._renderUnitOffset = 0;
  }
  addOffsetRenderUnits(t3) {
    this._renderUnitOffset += t3;
  }
  geometryZWithOffset(t3, e3) {
    const n6 = this.calculateOffsetRenderUnits(e3);
    return null != this.featureExpressionInfoContext ? n6 : t3 + n6;
  }
  calculateOffsetRenderUnits(t3) {
    let e3 = this._meterUnitOffset;
    const s3 = this.featureExpressionInfoContext;
    return null != s3 && (e3 += i2(s3) * this._metersPerElevationInfoUnit), e3 / t3.unitInMeters + this._renderUnitOffset;
  }
  setFromElevationInfo(t3) {
    this.mode = t3.mode, this.unit = n5(t3.unit) ? t3.unit : "meters", this.offsetElevationInfoUnits = t3.offset ?? 0;
  }
  updateFeatureExpressionInfoContext(t3, e3, n6) {
    if (null == t3) return void (this._featureExpressionInfoContext = null);
    const o3 = t3?.arcade;
    o3 && null != e3 && null != n6 ? (this._featureExpressionInfoContext = o(t3), l(this._featureExpressionInfoContext, s2(o3.modules, e3, n6))) : this._featureExpressionInfoContext = t3;
  }
  static fromElevationInfo(t3) {
    const e3 = new _o();
    return null != t3 && e3.setFromElevationInfo(t3), e3;
  }
};

export {
  u3 as u,
  c,
  f,
  m,
  d,
  g,
  p,
  E,
  R,
  b,
  u4 as u2,
  a2 as a,
  s2 as s,
  l,
  d2,
  f2,
  o2 as o
};
//# sourceMappingURL=chunk-6SSO6SUU.js.map
