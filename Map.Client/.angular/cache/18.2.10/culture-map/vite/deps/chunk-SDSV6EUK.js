import {
  E,
  I as I2,
  N
} from "./chunk-NH2TONNG.js";
import {
  p
} from "./chunk-L6LZ5TYL.js";
import {
  o
} from "./chunk-7PCL3GUC.js";
import {
  lt,
  ot,
  rt
} from "./chunk-C7NRYPDG.js";
import {
  e
} from "./chunk-4QBFFLOC.js";
import {
  Z
} from "./chunk-Q7SRMLJZ.js";
import {
  i as i2
} from "./chunk-DWASPXVI.js";
import {
  i
} from "./chunk-CVB43GGP.js";
import {
  g as g2
} from "./chunk-O7UDKFOW.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import {
  g2 as g
} from "./chunk-JJS7PR2U.js";
import {
  Et,
  I,
  U,
  _
} from "./chunk-SYATLP3H.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/ogc/ogcFeatureUtils.js
var F = () => n.getLogger("esri.layers.ogc.ogcFeatureUtils");
var I3 = "startindex";
var T = /* @__PURE__ */ new Set([I3, "offset"]);
var k = "http://www.opengis.net/def/crs/";
var x = `${k}OGC/1.3/CRS84`;
var S;
function v(_0, _1) {
  return __async(this, arguments, function* (n2, o2, s2 = {}, a = 5) {
    const {
      links: l
    } = n2, c = L(l, "items", S.geojson) || L(l, "http://www.opengis.net/def/rel/ogc/1.0/items", S.geojson);
    if (null == c) throw new s("ogc-feature-layer:missing-items-page", "Missing items url");
    const {
      apiKey: u,
      customParameters: d,
      signal: p2
    } = s2, y = _(c.href, n2.landingPage.url), b = __spreadProps(__spreadValues({
      limit: a
    }, d), {
      token: u
    }), T2 = Et(y, b), k2 = {
      accept: S.geojson
    }, {
      data: x2
    } = yield U(T2, {
      signal: p2,
      headers: k2
    }), v2 = A(T2, a, x2.links) ?? I3;
    E(x2);
    const N3 = I2(x2, {
      geometryType: o2.geometryType
    }), O2 = o2.fields || N3.fields || [], P2 = null != o2.hasZ ? o2.hasZ : N3.hasZ, q2 = N3.geometryType, C2 = o2.objectIdField || N3.objectIdFieldName || "OBJECTID";
    let R2 = o2.timeInfo;
    const $2 = O2.find(({
      name: e2
    }) => e2 === C2);
    if ($2) $2.editable = false, $2.nullable = false;
    else {
      if (!N3.objectIdFieldType) throw new s("ogc-feature-layer:missing-feature-id", "Collection geojson require a feature id as a unique identifier");
      O2.unshift({
        name: C2,
        alias: C2,
        type: "number" === N3.objectIdFieldType ? "esriFieldTypeOID" : "esriFieldTypeString",
        editable: false,
        nullable: false
      });
    }
    if (C2 !== N3.objectIdFieldName) {
      const e2 = O2.find(({
        name: e3
      }) => e3 === N3.objectIdFieldName);
      e2 && (e2.type = "esriFieldTypeInteger");
    }
    O2 === N3.fields && N3.unknownFields.length > 0 && F().warn({
      name: "ogc-feature-layer:unknown-field-types",
      message: "Some fields types couldn't be inferred from the features and were dropped",
      details: {
        unknownFields: N3.unknownFields
      }
    });
    for (const e2 of O2) {
      if (null == e2.name && (e2.name = e2.alias), null == e2.alias && (e2.alias = e2.name), "esriFieldTypeOID" !== e2.type && "esriFieldTypeGlobalID" !== e2.type && (e2.editable = null == e2.editable || !!e2.editable, e2.nullable = null == e2.nullable || !!e2.nullable), !e2.name) throw new s("ogc-feature-layer:invalid-field-name", "field name is missing", {
        field: e2
      });
      if (!i2.jsonValues.includes(e2.type)) throw new s("ogc-feature-layer:invalid-field-type", `invalid type for field "${e2.name}"`, {
        field: e2
      });
    }
    if (R2) {
      const e2 = new Z(O2);
      if (R2.startTimeField) {
        const t = e2.get(R2.startTimeField);
        t ? (R2.startTimeField = t.name, t.type = "esriFieldTypeDate") : R2.startTimeField = null;
      }
      if (R2.endTimeField) {
        const t = e2.get(R2.endTimeField);
        t ? (R2.endTimeField = t.name, t.type = "esriFieldTypeDate") : R2.endTimeField = null;
      }
      if (R2.trackIdField) {
        const t = e2.get(R2.trackIdField);
        t ? R2.trackIdField = t.name : (R2.trackIdField = null, F().warn({
          name: "ogc-feature-layer:invalid-timeInfo-trackIdField",
          message: "trackIdField is missing",
          details: {
            timeInfo: R2
          }
        }));
      }
      R2.timeReference ||= {
        timeZoneIANA: i
      }, R2.startTimeField || R2.endTimeField || (F().warn({
        name: "ogc-feature-layer:invalid-timeInfo",
        message: "startTimeField and endTimeField are missing",
        details: {
          timeInfo: R2
        }
      }), R2 = void 0);
    }
    return {
      drawingInfo: q2 ? o(q2) : null,
      extent: K(n2),
      geometryType: q2,
      fields: O2,
      hasZ: !!P2,
      objectIdField: C2,
      paginationParameter: v2,
      timeInfo: R2
    };
  });
}
function N2(_0) {
  return __async(this, arguments, function* (n2, r = {}) {
    const {
      links: o2,
      url: s2
    } = n2, a = L(o2, "data", S.json) || L(o2, "http://www.opengis.net/def/rel/ogc/1.0/data", S.json);
    if (null == a) throw new s("ogc-feature-layer:missing-collections-page", "Missing collections url");
    const {
      apiKey: l,
      customParameters: c,
      signal: u
    } = r, d = _(a.href, s2), {
      data: f2
    } = yield U(d, {
      signal: u,
      headers: {
        accept: S.json
      },
      query: __spreadProps(__spreadValues({}, c), {
        token: l
      })
    });
    for (const e2 of f2.collections) e2.landingPage = n2;
    return f2;
  });
}
function O(_0) {
  return __async(this, arguments, function* (n2, r = {}) {
    const {
      links: o2,
      url: s2
    } = n2, a = L(o2, "conformance", S.json) || L(o2, "http://www.opengis.net/def/rel/ogc/1.0/conformance", S.json);
    if (null == a) throw new s("ogc-feature-layer:missing-conformance-page", "Missing conformance url");
    const {
      apiKey: l,
      customParameters: c,
      signal: u
    } = r, d = _(a.href, s2), {
      data: f2
    } = yield U(d, {
      signal: u,
      headers: {
        accept: S.json
      },
      query: __spreadProps(__spreadValues({}, c), {
        token: l
      })
    });
    return f2;
  });
}
function P(_0) {
  return __async(this, arguments, function* (t, n2 = {}) {
    const {
      apiKey: i3,
      customParameters: r,
      signal: o2
    } = n2, {
      data: s2
    } = yield U(t, {
      signal: o2,
      headers: {
        accept: S.json
      },
      query: __spreadProps(__spreadValues({}, r), {
        token: i3
      })
    });
    return s2.url = t, s2;
  });
}
function q(_0) {
  return __async(this, arguments, function* (t, n2 = {}) {
    const {
      links: r,
      url: o2
    } = t, s2 = L(r, "service-desc", S.openapi);
    if (null == s2) return F().warn("ogc-feature-layer:missing-openapi-page", "The OGC API-Features server does not have an OpenAPI page."), null;
    const {
      apiKey: a,
      customParameters: l,
      signal: c
    } = n2, u = _(s2.href, o2), {
      data: d
    } = yield U(u, {
      signal: c,
      headers: {
        accept: S.openapi
      },
      query: __spreadProps(__spreadValues({}, l), {
        token: a
      })
    });
    return d;
  });
}
function C(e2) {
  const t = /^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e2), n2 = t?.groups;
  if (!n2) return null;
  const {
    authority: i3,
    code: r
  } = n2;
  switch (i3.toLowerCase()) {
    case "ogc":
      switch (r.toLowerCase()) {
        case "crs27":
          return f.GCS_NAD_1927.wkid;
        case "crs83":
          return 4269;
        case "crs84":
        case "crs84h":
          return f.WGS84.wkid;
        default:
          return null;
      }
    case "esri":
    case "epsg": {
      const e3 = Number.parseInt(r, 10);
      return Number.isNaN(e3) ? null : e3;
    }
    default:
      return null;
  }
}
function R(e2, t, n2) {
  return __async(this, null, function* () {
    const i3 = yield $(e2, t, n2);
    return lt(i3);
  });
}
function $(n2, r, o2) {
  return __async(this, null, function* () {
    const {
      collection: {
        links: l,
        landingPage: {
          url: f2
        }
      },
      layerDefinition: m,
      maxRecordCount: g3,
      queryParameters: {
        apiKey: j,
        customParameters: h
      },
      spatialReference: F2,
      supportedCrs: I4
    } = n2, T2 = L(l, "items", S.geojson) || L(l, "http://www.opengis.net/def/rel/ogc/1.0/items", S.geojson);
    if (null == T2) throw new s("ogc-feature-layer:missing-items-page", "Missing items url");
    const {
      geometry: k2,
      num: x2,
      start: v2,
      timeExtent: N3,
      where: O2
    } = r;
    if (r.objectIds) throw new s("ogc-feature-layer:query-by-objectids-not-supported", "Queries with object ids are not supported");
    const P2 = f.fromJSON(F2), q2 = r.outSpatialReference ?? P2, C2 = q2.isWGS84 ? null : W(q2, I4), R2 = U2(k2, I4), $2 = M(N3), G2 = Z2(O2), D2 = x2 ?? (null == v2 ? g3 : 10), K2 = 0 === v2 ? void 0 : v2, {
      fields: A2,
      geometryType: J,
      hasZ: z,
      objectIdField: E2,
      paginationParameter: _2
    } = m, B = _(T2.href, f2), {
      data: Q
    } = yield U(B, __spreadProps(__spreadValues({}, o2), {
      query: __spreadProps(__spreadValues(__spreadValues({}, h), R2), {
        crs: C2,
        datetime: $2,
        query: G2,
        limit: D2,
        [_2]: K2,
        token: j
      }),
      headers: {
        accept: S.geojson
      }
    })), V = N(Q, {
      geometryType: J,
      hasZ: z,
      objectIdField: E2
    }), H = V.length === D2 && !!L(Q.links ?? [], "next", S.geojson), X = new Z(A2);
    for (const e2 of V) {
      const t = {};
      p(X, t, e2.attributes), t[E2] = e2.attributes[E2], e2.attributes = t;
    }
    if (!C2 && q2.isWebMercator) {
      for (const e2 of V) if (null != e2.geometry && null != J) {
        const t = rt(e2.geometry, J, z, false);
        t.spatialReference = f.WGS84, e2.geometry = ot(g2(t, q2));
      }
    }
    for (const e2 of V) e2.objectId = e2.attributes[E2];
    const Y = C2 || !C2 && q2.isWebMercator ? q2.toJSON() : g, ee = new e();
    return ee.exceededTransferLimit = H, ee.features = V, ee.fields = A2, ee.geometryType = J, ee.hasZ = z, ee.objectIdFieldName = E2, ee.spatialReference = Y, ee;
  });
}
function G(e2) {
  return null != e2 && "extent" === e2.type;
}
function W(e2, t) {
  const {
    isWebMercator: n2,
    wkid: i3
  } = e2;
  if (!i3) return null;
  const r = n2 ? t[3857] ?? t[102100] ?? t[102113] ?? t[900913] : t[e2.wkid];
  return r ? `${k}${r}` : null;
}
function D(e2) {
  if (null == e2) return "";
  const {
    xmin: t,
    ymin: n2,
    xmax: i3,
    ymax: r
  } = e2;
  return `${t},${n2},${i3},${r}`;
}
function M(e2) {
  if (null == e2) return null;
  const {
    start: t,
    end: n2
  } = e2;
  return `${null != t ? t.toISOString() : ".."}/${null != n2 ? n2.toISOString() : ".."}`;
}
function Z2(e2) {
  return null != e2 && e2 && "1=1" !== e2 ? e2 : null;
}
function U2(e2, t) {
  if (!G(e2)) return null;
  const {
    spatialReference: n2
  } = e2;
  if (!n2 || n2.isWGS84) return {
    bbox: D(e2)
  };
  const i3 = W(n2, t);
  return null != i3 ? {
    bbox: D(e2),
    "bbox-crs": i3
  } : n2.isWebMercator ? {
    bbox: D(g2(e2, f.WGS84))
  } : null;
}
function K(e2) {
  const t = e2.extent?.spatial;
  if (!t) return null;
  const n2 = t.bbox[0], i3 = 4 === n2.length, [r, o2] = n2, s2 = i3 ? void 0 : n2[2];
  return {
    xmin: r,
    ymin: o2,
    xmax: i3 ? n2[2] : n2[3],
    ymax: i3 ? n2[3] : n2[4],
    zmin: s2,
    zmax: i3 ? void 0 : n2[5],
    spatialReference: f.WGS84.toJSON()
  };
}
function L(e2, t, n2) {
  return e2.find(({
    rel: e3,
    type: i3
  }) => e3 === t && i3 === n2) ?? e2.find(({
    rel: e3,
    type: n3
  }) => e3 === t && !n3);
}
function A(e2, t, n2) {
  if (!n2) return;
  const i3 = L(n2, "next", S.geojson), r = I(i3?.href)?.query;
  if (!r) return;
  const s2 = I(e2).query, a = Object.keys(s2 ?? {}), l = Object.entries(r).filter(([e3]) => !a.includes(e3)).find(([e3, n3]) => T.has(e3.toLowerCase()) && Number.parseInt(n3, 10) === t), c = l?.[0];
  return c;
}
!function(e2) {
  e2.json = "application/json", e2.geojson = "application/geo+json", e2.openapi = "application/vnd.oai.openapi+json;version=3.0";
}(S || (S = {}));

export {
  k,
  x,
  v,
  N2 as N,
  O,
  P,
  q,
  C,
  R,
  $
};
//# sourceMappingURL=chunk-SDSV6EUK.js.map
