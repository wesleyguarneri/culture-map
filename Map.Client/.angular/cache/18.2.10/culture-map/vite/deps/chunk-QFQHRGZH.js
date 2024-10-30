import {
  e
} from "./chunk-PQ4T66BG.js";
import {
  r as r2
} from "./chunk-3RRMLFFN.js";
import {
  L
} from "./chunk-JJS7PR2U.js";
import {
  r2 as r
} from "./chunk-DDYVXG4F.js";
import {
  s
} from "./chunk-HJY2YILU.js";
import {
  a,
  l2 as l
} from "./chunk-WYIDUUN2.js";
import {
  __async
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/views/interactive/snapping/featureSources/snappingCandidateElevationAlignment.js
function i(e3 = false, t2) {
  if (e3) {
    const {
      elevationInfo: e4,
      alignPointsInFeatures: s3
    } = t2;
    return new c(e4, s3);
  }
  return new a2();
}
var a2 = class {
  alignCandidates(e3, t2, s3) {
    return __async(this, null, function* () {
      return e3;
    });
  }
  notifyElevationSourceChange() {
  }
};
var r3 = 1024;
var c = class {
  constructor(t2, s3) {
    this._elevationInfo = t2, this._alignPointsInFeatures = s3, this._alignmentsCache = new e(r3), this._cacheVersion = 0;
  }
  alignCandidates(e3, t2, s3) {
    return __async(this, null, function* () {
      const n3 = this._elevationInfo;
      return null == n3 || "absolute-height" !== n3.mode || n3.featureExpressionInfo ? this._alignComputedElevationCandidates(e3, t2, s3) : (l2(e3, t2, n3), e3);
    });
  }
  notifyElevationSourceChange() {
    this._alignmentsCache.clear(), this._cacheVersion++;
  }
  _alignComputedElevationCandidates(e3, n3, o2) {
    return __async(this, null, function* () {
      const i4 = /* @__PURE__ */ new Map();
      for (const s3 of e3) r(i4, s3.objectId, d).push(s3);
      const [a5, r6, c4] = this._prepareQuery(i4, n3), h2 = yield this._alignPointsInFeatures(a5, o2);
      s(o2);
      if (c4 !== this._cacheVersion) return this._alignComputedElevationCandidates(e3, n3, o2);
      this._applyCacheAndResponse(a5, h2, r6);
      const {
        drapedObjectIds: u2,
        failedObjectIds: l3
      } = h2, p = [];
      for (const t2 of e3) {
        const {
          objectId: e4
        } = t2;
        u2.has(e4) && "edge" === t2.type && (t2.draped = true), l3.has(e4) || p.push(t2);
      }
      return p;
    });
  }
  _prepareQuery(e3, t2) {
    const s3 = [], n3 = [];
    for (const [o2, i4] of e3) {
      const e4 = [];
      for (const t3 of i4) this._addToQueriesOrCachedResult(o2, t3.target, e4, n3), "edge" === t3.type && (this._addToQueriesOrCachedResult(o2, t3.start, e4, n3), this._addToQueriesOrCachedResult(o2, t3.end, e4, n3));
      0 !== e4.length && s3.push({
        objectId: o2,
        points: e4
      });
    }
    return [{
      spatialReference: t2.toJSON(),
      pointsInFeatures: s3
    }, n3, this._cacheVersion];
  }
  _addToQueriesOrCachedResult(e3, t2, s3, n3) {
    const o2 = u(e3, t2), i4 = this._alignmentsCache.get(o2);
    null == i4 ? s3.push(t2) : n3.push(new h(t2, i4));
  }
  _applyCacheAndResponse(e3, {
    elevations: t2,
    drapedObjectIds: s3,
    failedObjectIds: n3
  }, o2) {
    for (const r6 of o2) r6.apply();
    let i4 = 0;
    const a5 = this._alignmentsCache;
    for (const {
      objectId: r6,
      points: c4
    } of e3.pointsInFeatures) {
      if (n3.has(r6)) {
        i4 += c4.length;
        continue;
      }
      const e4 = !s3.has(r6);
      for (const s4 of c4) {
        const n4 = u(r6, s4), o3 = t2[i4++];
        s4.z = o3, e4 && a5.put(n4, o3, 1);
      }
    }
  }
};
var h = class {
  constructor(e3, t2) {
    this.point = e3, this.z = t2;
  }
  apply() {
    this.point.z = this.z;
  }
};
function u(e3, {
  x: t2,
  y: s3,
  z: n3,
  spatialReference: o2
}) {
  return `${e3}-${t2}-${s3}-${n3 ?? 0}}-wkid:${o2?.wkid}`;
}
function l2(e3, t2, s3) {
  const {
    offset: i4,
    unit: a5
  } = s3;
  if (null == i4) return;
  const r6 = L(t2), c4 = i4 * (r2(a5 ?? "meters") / r6);
  for (const n3 of e3) switch (n3.type) {
    case "edge":
      n3.start.z += c4, n3.end.z += c4;
      continue;
    case "vertex":
      n3.target.z += c4;
      continue;
  }
}
function d() {
  return [];
}

// ../../../node_modules/@arcgis/core/views/interactive/snapping/featureSources/snappingCandidateElevationFilter.js
var t = class {
  filter(t2, n3) {
    return n3;
  }
  notifyElevationSourceChange() {
  }
};
var n = class {
  filter(t2, n3) {
    const {
      point: r6,
      distance: c4
    } = t2, {
      z: i4
    } = r6;
    if (!(null != i4)) return n3;
    if (0 === n3.length) return n3;
    const o2 = s2(c4), u2 = this._updateCandidatesTo3D(n3, r6, o2).filter(e2);
    return u2.sort(a3), u2;
  }
  _updateCandidatesTo3D(t2, n3, e3) {
    for (const r6 of t2) switch (r6.type) {
      case "edge":
        c2(r6, n3, e3);
        continue;
      case "vertex":
        o(r6, n3, e3);
        continue;
    }
    return t2;
  }
};
function e2(t2) {
  return t2.distance <= 1;
}
function r4(e3 = false) {
  return e3 ? new n() : new t();
}
function c2(t2, n3, {
  x: e3,
  y: r6,
  z: c4
}) {
  const {
    start: o2,
    end: s3,
    target: a5
  } = t2;
  t2.draped || i2(a5, n3, o2, s3);
  const u2 = (n3.x - a5.x) / e3, d2 = (n3.y - a5.y) / r6, f = (n3.z - a5.z) / c4;
  t2.distance = Math.sqrt(u2 * u2 + d2 * d2 + f * f);
}
function i2(t2, n3, e3, r6) {
  const c4 = r6.x - e3.x, i4 = r6.y - e3.y, o2 = r6.z - e3.z, s3 = c4 * c4 + i4 * i4 + o2 * o2, a5 = (n3.x - e3.x) * c4 + (n3.y - e3.y) * i4 + o2 * (n3.z - e3.z), u2 = Math.min(1, Math.max(0, a5 / s3)), d2 = e3.x + c4 * u2, f = e3.y + i4 * u2, x = e3.z + o2 * u2;
  t2.x = d2, t2.y = f, t2.z = x;
}
function o(t2, n3, {
  x: e3,
  y: r6,
  z: c4
}) {
  const {
    target: i4
  } = t2, o2 = (n3.x - i4.x) / e3, s3 = (n3.y - i4.y) / r6, a5 = (n3.z - i4.z) / c4, u2 = Math.sqrt(o2 * o2 + s3 * s3 + a5 * a5);
  t2.distance = u2;
}
function s2(t2) {
  return "number" == typeof t2 ? {
    x: t2,
    y: t2,
    z: t2
  } : t2;
}
function a3(t2, n3) {
  return t2.distance - n3.distance;
}

// ../../../node_modules/@arcgis/core/views/interactive/snapping/featureSources/symbologySnappingCandidates.js
function n2(t2 = false, e3) {
  return t2 ? new i3(e3) : new c3();
}
var c3 = class {
  fetch() {
    return __async(this, null, function* () {
      return [];
    });
  }
  notifySymbologyChange() {
  }
};
var r5 = 1024;
var i3 = class {
  constructor(t2) {
    this._getSymbologyCandidates = t2, this._candidatesCache = new e(r5), this._cacheVersion = 0;
  }
  fetch(e3, o2) {
    return __async(this, null, function* () {
      if (0 === e3.length) return [];
      const n3 = [], c4 = [], r6 = this._candidatesCache;
      for (const s3 of e3) {
        const e4 = a4(s3), o3 = r6.get(e4);
        if (o3) for (const s4 of o3) c4.push(a(s4));
        else n3.push(s3), r6.put(e4, [], 1);
      }
      if (0 === n3.length) return c4;
      const i4 = this._cacheVersion, {
        candidates: h2,
        sourceCandidateIndices: d2
      } = yield this._getSymbologyCandidates(n3, o2);
      s(o2);
      if (i4 !== this._cacheVersion) return this.fetch(e3, o2);
      const f = [], {
        length: g
      } = h2;
      for (let s3 = 0; s3 < g; ++s3) {
        const e4 = h2[s3], o3 = a4(n3[d2[s3]]), c5 = r6.get(o3);
        c5.push(e4), r6.put(o3, c5, c5.length), f.push(a(e4));
      }
      return c4.concat(f);
    });
  }
  notifySymbologyChange() {
    this._candidatesCache.clear(), this._cacheVersion++;
  }
};
function a4(t2) {
  switch (t2.type) {
    case "vertex": {
      const {
        objectId: e3,
        target: s3
      } = t2, n3 = `${e3}-vertex-${s3.x}-${s3.y}-${s3.z ?? 0}`;
      return l(n3).toString();
    }
    case "edge": {
      const {
        objectId: e3,
        start: s3,
        end: n3
      } = t2, c4 = `${e3}-edge-${s3.x}-${s3.y}-${s3.z ?? 0}-to-${n3.x}-${n3.y}-${n3.z ?? 0}`;
      return l(c4).toString();
    }
    default:
      return "";
  }
}

export {
  i,
  r4 as r,
  n2 as n
};
//# sourceMappingURL=chunk-QFQHRGZH.js.map
