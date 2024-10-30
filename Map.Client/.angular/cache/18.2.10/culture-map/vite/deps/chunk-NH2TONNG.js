import {
  t
} from "./chunk-BO5GTO4F.js";
import {
  e as e2
} from "./chunk-O437BSYE.js";
import {
  e
} from "./chunk-YZNT6QWD.js";
import {
  c,
  pe
} from "./chunk-DTUSTSEJ.js";
import {
  C
} from "./chunk-JJS7PR2U.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __yieldStar
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/graphics/sources/geojson/geojson.js
var c2 = {
  LineString: "esriGeometryPolyline",
  MultiLineString: "esriGeometryPolyline",
  MultiPoint: "esriGeometryMultipoint",
  Point: "esriGeometryPoint",
  Polygon: "esriGeometryPolygon",
  MultiPolygon: "esriGeometryPolygon"
};
function u(e3) {
  return c2[e3];
}
function* l(e3) {
  switch (e3.type) {
    case "Feature":
      yield e3;
      break;
    case "FeatureCollection":
      for (const t2 of e3.features) t2 && (yield t2);
  }
}
function* f(e3) {
  if (e3) switch (e3.type) {
    case "Point":
      yield e3.coordinates;
      break;
    case "LineString":
    case "MultiPoint":
      yield* __yieldStar(e3.coordinates);
      break;
    case "MultiLineString":
    case "Polygon":
      for (const t2 of e3.coordinates) yield* __yieldStar(t2);
      break;
    case "MultiPolygon":
      for (const t2 of e3.coordinates) for (const e4 of t2) yield* __yieldStar(e4);
  }
}
function* p(e3, t2 = {}) {
  const {
    geometryType: n,
    objectIdField: i
  } = t2;
  for (const s2 of e3) {
    const {
      geometry: e4,
      properties: c3,
      id: l2
    } = s2;
    if (e4 && u(e4.type) !== n) continue;
    const f2 = c3 || {};
    let p2;
    i && (p2 = f2[i], null == l2 || p2 || (f2[i] = p2 = l2));
    const a2 = new e2(e4 ? h(new e(), e4, t2) : null, f2, null, p2 ?? void 0);
    yield a2;
  }
}
function a(e3) {
  for (const t2 of e3) if (t2.length > 2) return true;
  return false;
}
function y(e3) {
  return !g(e3);
}
function d(e3) {
  return g(e3);
}
function g(e3) {
  let t2 = 0;
  for (let n = 0; n < e3.length; n++) {
    const o = e3[n], r = e3[(n + 1) % e3.length];
    t2 += o[0] * r[1] - r[0] * o[1];
  }
  return t2 <= 0;
}
function m(e3) {
  const t2 = e3[0], n = e3[e3.length - 1];
  return t2[0] === n[0] && t2[1] === n[1] && t2[2] === n[2] || e3.push(t2), e3;
}
function h(e3, t2, n) {
  switch (t2.type) {
    case "LineString":
      return w(e3, t2, n);
    case "MultiLineString":
      return P(e3, t2, n);
    case "MultiPoint":
      return j(e3, t2, n);
    case "MultiPolygon":
      return b(e3, t2, n);
    case "Point":
      return S(e3, t2, n);
    case "Polygon":
      return F(e3, t2, n);
  }
}
function w(e3, t2, n) {
  return M(e3, t2.coordinates, n), e3;
}
function P(e3, t2, n) {
  for (const o of t2.coordinates) M(e3, o, n);
  return e3;
}
function j(e3, t2, n) {
  return M(e3, t2.coordinates, n), e3;
}
function b(e3, t2, n) {
  for (const o of t2.coordinates) {
    G(e3, o[0], n);
    for (let t3 = 1; t3 < o.length; t3++) k(e3, o[t3], n);
  }
  return e3;
}
function S(e3, t2, n) {
  return O(e3, t2.coordinates, n), e3;
}
function F(e3, t2, n) {
  const o = t2.coordinates;
  G(e3, o[0], n);
  for (let r = 1; r < o.length; r++) k(e3, o[r], n);
  return e3;
}
function G(e3, t2, n) {
  const o = m(t2);
  y(o) ? T(e3, o, n) : M(e3, o, n);
}
function k(e3, t2, n) {
  const o = m(t2);
  d(o) ? T(e3, o, n) : M(e3, o, n);
}
function M(e3, t2, n) {
  for (const o of t2) O(e3, o, n);
  e3.lengths.push(t2.length);
}
function T(e3, t2, n) {
  for (let o = t2.length - 1; o >= 0; o--) O(e3, t2[o], n);
  e3.lengths.push(t2.length);
}
function O(e3, t2, n) {
  const [o, r, i] = t2;
  e3.coords.push(o, r), n.hasZ && e3.coords.push(i || 0);
}
function L(t2) {
  switch (typeof t2) {
    case "string":
      return t(t2) ? "esriFieldTypeDate" : "esriFieldTypeString";
    case "number":
      return "esriFieldTypeDouble";
    default:
      return "unknown";
  }
}
function E(e3, o = 4326) {
  if (!e3) throw new s("geojson-layer:empty", "GeoJSON data is empty");
  if ("Feature" !== e3.type && "FeatureCollection" !== e3.type) throw new s("geojson-layer:unsupported-geojson-object", "missing or not supported GeoJSON object type", {
    data: e3
  });
  const {
    crs: r
  } = e3;
  if (!r) return;
  const i = "string" == typeof r ? r : "name" === r.type ? r.properties.name : "EPSG" === r.type ? r.properties.code : null, s2 = C({
    wkid: o
  }) ? new RegExp(".*(CRS84H?|4326)$", "i") : new RegExp(`.*(${o})$`, "i");
  if (!i || !s2.test(i)) throw new s("geojson:unsupported-crs", "unsupported GeoJSON 'crs' member", {
    crs: r
  });
}
function I(e3, t2 = {}) {
  const n = [], o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
  let c3, p2 = false, y2 = null, d2 = false, {
    geometryType: g2 = null
  } = t2, m2 = false;
  for (const s2 of l(e3)) {
    const {
      geometry: e4,
      properties: t3,
      id: l2
    } = s2;
    if (!e4 || (g2 || (g2 = u(e4.type)), u(e4.type) === g2)) {
      if (!p2) {
        p2 = a(f(e4));
      }
      if (d2 || (d2 = null != l2, d2 && (c3 = typeof l2, t3 && (y2 = Object.keys(t3).filter((e5) => t3[e5] === l2)))), t3 && y2 && d2 && null != l2 && (y2.length > 1 ? y2 = y2.filter((e5) => t3[e5] === l2) : 1 === y2.length && (y2 = t3[y2[0]] === l2 ? y2 : [])), !m2 && t3) {
        let e5 = true;
        for (const s3 in t3) {
          if (o.has(s3)) continue;
          const c4 = t3[s3];
          if (null == c4) {
            e5 = false, r.add(s3);
            continue;
          }
          const u2 = L(c4);
          if ("unknown" === u2) {
            r.add(s3);
            continue;
          }
          r.delete(s3), o.add(s3);
          const l3 = c(s3);
          l3 && n.push({
            name: l3,
            alias: s3,
            type: u2
          });
        }
        m2 = e5;
      }
    }
  }
  const h2 = c(1 === y2?.length && y2[0] || null) ?? void 0;
  if (h2) {
    for (const i of n) if (i.name === h2 && pe(i)) {
      i.type = "esriFieldTypeOID";
      break;
    }
  }
  return {
    fields: n,
    geometryType: g2,
    hasZ: p2,
    objectIdFieldName: h2,
    objectIdFieldType: c3,
    unknownFields: Array.from(r)
  };
}
function N(e3, t2) {
  return Array.from(p(l(e3), t2));
}

export {
  u,
  E,
  I,
  N
};
//# sourceMappingURL=chunk-NH2TONNG.js.map
