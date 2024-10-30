import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  R,
  a,
  c,
  d2 as d,
  o
} from "./chunk-6SSO6SUU.js";
import {
  s as s2
} from "./chunk-ZSJNH2BT.js";
import {
  e
} from "./chunk-XP2AJZUL.js";
import {
  i
} from "./chunk-GK5M6FUR.js";
import {
  i as i2
} from "./chunk-JKPUNUQA.js";
import {
  f
} from "./chunk-ZDRQSPB6.js";
import {
  n
} from "./chunk-J4GMQHGL.js";
import {
  s
} from "./chunk-AIZ3T7E3.js";
import {
  __async
} from "./chunk-XBPEBUD5.js";

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/elevationAlignPointsInFeatures.js
function m(m2, l, d2, j, u) {
  return __async(this, null, function* () {
    const {
      elevationProvider: v,
      renderCoordsHelper: g
    } = m2, {
      elevationInfo: y
    } = l, {
      pointsInFeatures: I,
      spatialReference: x
    } = j, h = f.fromJSON(x), w = d(y, true), R2 = yield a(w, h, u);
    s(u);
    const S = [], b = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set(), E = new o(), P = e(0, 0, 0, f.WGS84), U = new R(), C = n();
    P.spatialReference = h;
    const F = m2.elevationProvider.spatialReference ?? m2.spatialReference;
    for (const {
      objectId: e2,
      points: o2
    } of I) {
      const r2 = d2(e2);
      if (null == r2) {
        for (const e3 of o2) S.push(e3.z ?? 0);
        b.add(e2);
        continue;
      }
      r2.isDraped && z.add(e2);
      const s3 = r2.graphic.geometry;
      E.setFromElevationInfo(s2(s3, y)), E.updateFeatureExpressionInfoContext(R2, r2.graphic, l);
      for (const {
        x: e3,
        y: i3,
        z: a2
      } of o2) P.x = e3, P.y = i3, P.z = a2 ?? 0, yield i(P, C, F, 0, {
        signal: u
      }), c(C, v, E, g, U), S.push(U.z);
    }
    return {
      elevations: S,
      drapedObjectIds: z,
      failedObjectIds: b
    };
  });
}

// ../../../node_modules/@arcgis/core/views/3d/layers/graphics/queryForSymbologySnapping.js
function r(r2, a2, s3) {
  return __async(this, null, function* () {
    if (null == r2 || 0 === a2.candidates.length) return t;
    const i3 = r2.graphics3DGraphicsByObjectID ?? r2.graphics3DGraphics, c2 = [], o2 = [], {
      renderer: d2
    } = r2, p = null != d2 && "arcadeRequired" in d2 && d2.arcadeRequired ? i2() : null, l = (_0, _1) => __async(this, [_0, _1], function* (n2, {
      graphic: e2,
      graphics3DSymbol: t2
    }) {
      const a3 = yield p, i4 = yield r2.getRenderingInfoAsync(e2, d2, a3, {
        signal: s3
      });
      return null == i4 ? [] : t2.queryForSnapping(n2, g, i4, s3);
    }), {
      candidates: u,
      spatialReference: g
    } = a2;
    for (let n2 = 0; n2 < u.length; ++n2) {
      const e2 = u[n2], {
        objectId: r3
      } = e2, t2 = "number" == typeof r3 ? i3?.get(r3) : void 0;
      if (null == t2) continue;
      const {
        graphics3DSymbol: a3
      } = t2;
      a3.symbologySnappingSupported && (c2.push(l(e2, t2)), o2.push(n2));
    }
    if (0 === c2.length) return t;
    const h = yield Promise.all(c2);
    s(s3);
    const f2 = [], m2 = [];
    for (let n2 = 0; n2 < h.length; ++n2) {
      const e2 = h[n2], r3 = o2[n2];
      for (const n3 of e2) f2.push(n3), m2.push(r3);
    }
    return {
      candidates: f2,
      sourceCandidateIndices: m2
    };
  });
}
var t = {
  candidates: [],
  sourceCandidateIndices: []
};

export {
  m,
  r
};
//# sourceMappingURL=chunk-UGYP7KWT.js.map
