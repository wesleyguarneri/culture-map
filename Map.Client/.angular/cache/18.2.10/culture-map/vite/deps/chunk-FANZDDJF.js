import {
  n as n2,
  o as o3
} from "./chunk-5I2NNRUD.js";
import {
  u
} from "./chunk-NH2TONNG.js";
import {
  y
} from "./chunk-PFMGJTQM.js";
import {
  K,
  N
} from "./chunk-DUTZNK67.js";
import {
  p
} from "./chunk-CRNUMTSV.js";
import {
  K as K2
} from "./chunk-DTUSTSEJ.js";
import {
  o as o2
} from "./chunk-OEKKQXBD.js";
import {
  w
} from "./chunk-NYQ5CYNR.js";
import {
  f
} from "./chunk-TKPMIAIW.js";
import {
  G,
  g2 as g
} from "./chunk-JJS7PR2U.js";
import {
  $t,
  F,
  U,
  dt
} from "./chunk-SYATLP3H.js";
import {
  n,
  o2 as o
} from "./chunk-ANKOCGE2.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/layers/ogc/wfsUtils.js
var T = "xlink:href";
var F2 = "2.0.0";
var S = "__esri_wfs_id__";
var x = "wfs-layer:getWFSLayerTypeInfo-error";
var E = "wfs-layer:empty-service";
var C = "wfs-layer:feature-type-not-found";
var R = "wfs-layer:geojson-not-supported";
var k = "wfs-layer:kvp-encoding-not-supported";
var P = "wfs-layer:malformed-json";
var j = "wfs-layer:unknown-geometry-type";
var A = "wfs-layer:unknown-field-type";
var N2 = "wfs-layer:unsupported-spatial-reference";
var G2 = "wfs-layer:unsupported-wfs-version";
function v(t, r) {
  return __async(this, null, function* () {
    const n3 = U2((yield U(t, {
      responseType: "text",
      query: __spreadValues({
        SERVICE: "WFS",
        REQUEST: "GetCapabilities",
        VERSION: F2
      }, r?.customParameters),
      signal: r?.signal
    })).data);
    return L(t, n3), n3;
  });
}
function U2(e) {
  const t = te(e);
  ne(t), ae(t);
  const n3 = t.firstElementChild, a = n(O(n3));
  return {
    operations: D(n3),
    get featureTypes() {
      return Array.from(a());
    },
    readFeatureTypes: a
  };
}
var I = ["json", "application/json", "geojson", "application/json; subtype=geojson", "application/geo+json"];
function M(e) {
  for (const t of I) {
    const r = e.findIndex((e2) => e2.toLowerCase() === t);
    if (r >= 0) return e[r];
  }
  return null;
}
function D(e) {
  let r = false;
  const n3 = {
    GetCapabilities: {
      url: ""
    },
    DescribeFeatureType: {
      url: ""
    },
    GetFeature: {
      url: "",
      outputFormat: null,
      supportsPagination: false
    }
  }, a = [], o4 = [];
  if (o3(e, {
    OperationsMetadata: {
      Parameter: (e2) => {
        if ("outputFormat" === e2.getAttribute("name")) return {
          AllowedValues: {
            Value: ({
              textContent: e3
            }) => {
              e3 && a.push(e3);
            }
          }
        };
      },
      Operation: (e2) => {
        switch (e2.getAttribute("name")) {
          case "GetCapabilities":
            return {
              DCP: {
                HTTP: {
                  Get: (e3) => {
                    n3.GetCapabilities.url = e3.getAttribute(T);
                  }
                }
              }
            };
          case "DescribeFeatureType":
            return {
              DCP: {
                HTTP: {
                  Get: (e3) => {
                    n3.DescribeFeatureType.url = e3.getAttribute(T);
                  }
                }
              }
            };
          case "GetFeature":
            return {
              DCP: {
                HTTP: {
                  Get: (e3) => {
                    n3.GetFeature.url = e3.getAttribute(T);
                  }
                }
              },
              Parameter: (e3) => {
                if ("outputFormat" === e3.getAttribute("name")) return {
                  AllowedValues: {
                    Value: ({
                      textContent: e4
                    }) => {
                      e4 && o4.push(e4);
                    }
                  }
                };
              }
            };
        }
      },
      Constraint: (e2) => {
        switch (e2.getAttribute("name")) {
          case "KVPEncoding":
            return {
              DefaultValue: (e3) => {
                r = "true" === e3.textContent.toLowerCase();
              }
            };
          case "ImplementsResultPaging":
            return {
              DefaultValue: (e3) => {
                n3.GetFeature.supportsPagination = "true" === e3.textContent.toLowerCase();
              }
            };
        }
      }
    }
  }), n3.GetFeature.outputFormat = M(o4) ?? M(a), !r) throw new s(k, "WFS service doesn't support key/value pair (KVP) encoding");
  if (null == n3.GetFeature.outputFormat) throw new s(R, "WFS service doesn't support GeoJSON output format");
  return n3;
}
function L(e, t) {
  dt(e) && (F(e, t.operations.DescribeFeatureType.url, true) && (t.operations.DescribeFeatureType.url = $t(t.operations.DescribeFeatureType.url)), F(e, t.operations.GetFeature.url, true) && (t.operations.GetFeature.url = $t(t.operations.GetFeature.url)));
}
function V(e) {
  const t = parseInt(e.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid ?? "", 10);
  if (!Number.isNaN(t)) return t;
}
function O(e) {
  return n2(e, {
    FeatureTypeList: {
      FeatureType: (e2) => {
        const t = {
          typeName: "undefined:undefined",
          name: "",
          title: "",
          description: "",
          extent: null,
          namespacePrefix: "",
          namespaceUri: "",
          defaultSpatialReference: 4326,
          supportedSpatialReferences: []
        }, r = /* @__PURE__ */ new Set();
        return o3(e2, {
          Name: (e3) => {
            const {
              name: r2,
              prefix: n3
            } = re(e3.textContent);
            t.typeName = `${n3}:${r2}`, t.name = r2, t.namespacePrefix = n3, t.namespaceUri = e3.lookupNamespaceURI(n3);
          },
          Abstract: (e3) => {
            t.description = e3.textContent;
          },
          Title: (e3) => {
            t.title = e3.textContent;
          },
          WGS84BoundingBox: (e3) => {
            t.extent = w.fromJSON($(e3));
          },
          DefaultCRS: (e3) => {
            const n3 = V(e3);
            n3 && (t.defaultSpatialReference = n3, r.add(n3));
          },
          OtherCRS: (e3) => {
            const t2 = V(e3);
            t2 && r.add(t2);
          }
        }), t.title || (t.title = t.name), r.add(4326), t.supportedSpatialReferences.push(...r), t;
      }
    }
  });
}
function $(e) {
  let t, r, n3, a;
  for (const o4 of e.children) switch (o4.localName) {
    case "LowerCorner":
      [t, r] = o4.textContent.split(" ").map((e2) => Number.parseFloat(e2));
      break;
    case "UpperCorner":
      [n3, a] = o4.textContent.split(" ").map((e2) => Number.parseFloat(e2));
  }
  return {
    xmin: t,
    ymin: r,
    xmax: n3,
    ymax: a,
    spatialReference: g
  };
}
function Y(e, t, r) {
  return o(e, (e2) => r ? e2.name === t && e2.namespaceUri === r : e2.typeName === t || e2.name === t);
}
function W(_0, _1, _2) {
  return __async(this, arguments, function* (e, t, r, n3 = {}) {
    const {
      featureType: a,
      extent: o4
    } = yield X(e, t, r, n3), {
      spatialReference: i
    } = oe(e.operations.GetFeature.url, a, n3.spatialReference), {
      fields: s2,
      geometryType: p2,
      swapXY: u2,
      objectIdField: l,
      geometryField: c
    } = yield q(e, a, i, n3);
    return {
      url: e.operations.GetCapabilities.url,
      name: a.name,
      namespaceUri: a.namespaceUri,
      fields: s2,
      geometryField: c,
      geometryType: p2,
      objectIdField: l,
      spatialReference: n3.spatialReference ?? new f({
        wkid: a.defaultSpatialReference
      }),
      extent: o4,
      swapXY: u2,
      wfsCapabilities: e,
      customParameters: n3.customParameters
    };
  });
}
function X(_0, _1, _2) {
  return __async(this, arguments, function* (e, r, n3, a = {}) {
    const o4 = e.readFeatureTypes(), i = r ? Y(o4, r, n3) : o4.next().value, {
      spatialReference: u2 = new f({
        wkid: i?.defaultSpatialReference
      })
    } = a;
    if (null == i) throw r ? new s(C, `The type '${r}' could not be found in the service`) : new s(E, "The service is empty");
    let c = i.extent;
    if (c && !G(c.spatialReference, u2)) try {
      yield N(c.spatialReference, u2, void 0, a), c = K(c, u2);
    } catch {
      throw new s(N2, "Projection not supported");
    }
    return {
      extent: c,
      spatialReference: u2,
      featureType: i
    };
  });
}
function q(_0, _1, _2) {
  return __async(this, arguments, function* (e, r, n3, a = {}) {
    const {
      typeName: o4
    } = r, [i, s2] = yield Promise.allSettled([J(e.operations.DescribeFeatureType.url, o4, a), _(e, o4, n3, a)]), p2 = (e2) => new s(x, `An error occurred while getting info about the feature type '${o4}'`, {
      error: e2
    });
    if ("rejected" === i.status) throw p2(i.reason);
    if ("rejected" === s2.status) throw p2(s2.reason);
    const {
      fields: u2,
      errors: l
    } = i.value ?? {}, c = i.value?.geometryType || s2.value?.geometryType, m = s2.value?.swapXY ?? false;
    if (null == c) throw new s(j, `The geometry type could not be determined for type '${o4}`, {
      typeName: o4,
      geometryType: c,
      fields: u2,
      errors: l
    });
    return __spreadProps(__spreadValues({}, z(u2 ?? [])), {
      geometryType: c,
      swapXY: m
    });
  });
}
function z(e) {
  const t = e.find((e2) => "geometry" === e2.type);
  let r = e.find((e2) => "oid" === e2.type);
  return e = e.filter((e2) => "geometry" !== e2.type), r || (r = new y({
    name: S,
    type: "oid",
    alias: S
  }), e.unshift(r)), {
    geometryField: t?.name ?? null,
    objectIdField: r.name,
    fields: e
  };
}
function _(_0, _1, _2) {
  return __async(this, arguments, function* (t, r, n3, a = {}) {
    let o4, i = false;
    const [s2, p2] = yield Promise.all([K3(t.operations.GetFeature.url, r, n3, t.operations.GetFeature.outputFormat, __spreadProps(__spreadValues({}, a), {
      count: 1
    })), U(t.operations.GetFeature.url, {
      responseType: "text",
      query: Z(r, n3, void 0, __spreadProps(__spreadValues({}, a), {
        count: 1
      })),
      signal: a?.signal
    })]), u2 = "FeatureCollection" === s2.type && s2.features[0]?.geometry;
    if (u2) {
      let e;
      switch (o4 = o2.fromJSON(u(u2.type)), u2.type) {
        case "Point":
          e = u2.coordinates;
          break;
        case "LineString":
        case "MultiPoint":
          e = u2.coordinates[0];
          break;
        case "MultiLineString":
        case "Polygon":
          e = u2.coordinates[0][0];
          break;
        case "MultiPolygon":
          e = u2.coordinates[0][0][0];
      }
      const t2 = /<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(p2.data);
      if (t2) {
        const r2 = e[0].toFixed(3), n4 = e[1].toFixed(3), a2 = parseFloat(t2[1]).toFixed(3);
        r2 === parseFloat(t2[2]).toFixed(3) && n4 === a2 && (i = true);
      }
    }
    return {
      geometryType: o4,
      swapXY: i
    };
  });
}
function J(t, r, n3) {
  return __async(this, null, function* () {
    return Q(r, (yield U(t, {
      responseType: "text",
      query: __spreadValues({
        SERVICE: "WFS",
        REQUEST: "DescribeFeatureType",
        VERSION: F2,
        TYPENAME: r,
        TYPENAMES: r
      }, n3?.customParameters),
      signal: n3?.signal
    })).data);
  });
}
function Q(e, r) {
  const {
    name: a
  } = re(e), o4 = te(r);
  ae(o4);
  const i = o(n2(o4.firstElementChild, {
    element: (e2) => e2
  }), (e2) => e2.getAttribute("name") === a);
  if (null != i) {
    const e2 = i.getAttribute("type"), t = e2 ? o(n2(o4.firstElementChild, {
      complexType: (e3) => e3
    }), (t2) => t2.getAttribute("name") === re(e2).name) : o(n2(i, {
      complexType: (e3) => e3
    }), () => true);
    if (t) return B(t);
  }
  throw new s(C, `Type '${e}' not found in document`, {
    document: new XMLSerializer().serializeToString(o4)
  });
}
var H = /* @__PURE__ */ new Set(["objectid", "fid"]);
function B(e) {
  const r = [], n3 = [];
  let a;
  const o4 = n2(e, {
    complexContent: {
      extension: {
        sequence: {
          element: (e2) => e2
        }
      }
    }
  });
  for (const i of o4) {
    const o5 = i.getAttribute("name");
    if (!o5) continue;
    let s2, p2;
    if (i.hasAttribute("type") ? s2 = re(i.getAttribute("type")).name : o3(i, {
      simpleType: {
        restriction: (e2) => (s2 = re(e2.getAttribute("base")).name, {
          maxLength: (e3) => {
            p2 = +e3.getAttribute("value");
          }
        })
      }
    }), !s2) continue;
    const u2 = "true" === i.getAttribute("nillable");
    let l = false;
    switch (s2.toLowerCase()) {
      case "integer":
      case "nonpositiveinteger":
      case "negativeinteger":
      case "long":
      case "int":
      case "short":
      case "byte":
      case "nonnegativeinteger":
      case "unsignedlong":
      case "unsignedint":
      case "unsignedshort":
      case "unsignedbyte":
      case "positiveinteger":
        n3.push(new y({
          name: o5,
          alias: o5,
          type: "integer",
          nullable: u2,
          length: K2("integer")
        }));
        break;
      case "float":
      case "double":
      case "decimal":
        n3.push(new y({
          name: o5,
          alias: o5,
          type: "double",
          nullable: u2,
          length: K2("double")
        }));
        break;
      case "boolean":
      case "string":
      case "gyearmonth":
      case "gyear":
      case "gmonthday":
      case "gday":
      case "gmonth":
      case "anyuri":
      case "qname":
      case "notation":
      case "normalizedstring":
      case "token":
      case "language":
      case "idrefs":
      case "entities":
      case "nmtoken":
      case "nmtokens":
      case "name":
      case "ncname":
      case "id":
      case "idref":
      case "entity":
      case "duration":
      case "time":
        n3.push(new y({
          name: o5,
          alias: o5,
          type: "string",
          nullable: u2,
          length: p2 ?? K2("string")
        }));
        break;
      case "datetime":
      case "date":
        n3.push(new y({
          name: o5,
          alias: o5,
          type: "date",
          nullable: u2,
          length: p2 ?? K2("date")
        }));
        break;
      case "pointpropertytype":
        a = "point", l = true;
        break;
      case "multipointpropertytype":
        a = "multipoint", l = true;
        break;
      case "curvepropertytype":
      case "multicurvepropertytype":
      case "multilinestringpropertytype":
        a = "polyline", l = true;
        break;
      case "surfacepropertytype":
      case "multisurfacepropertytype":
      case "multipolygonpropertytype":
        a = "polygon", l = true;
        break;
      case "geometrypropertytype":
      case "multigeometrypropertytype":
        l = true, r.push(new s(j, `geometry type '${s2}' is not supported`, {
          type: new XMLSerializer().serializeToString(e)
        }));
        break;
      default:
        r.push(new s(A, `Unknown field type '${s2}'`, {
          type: new XMLSerializer().serializeToString(e)
        }));
    }
    l && n3.push(new y({
      name: o5,
      alias: o5,
      type: "geometry",
      nullable: u2
    }));
  }
  for (const t of n3) if ("integer" === t.type && !t.nullable && H.has(t.name.toLowerCase())) {
    t.type = "oid";
    break;
  }
  return {
    geometryType: a,
    fields: n3,
    errors: r
  };
}
function K3(r, n3, a, o4, i) {
  return __async(this, null, function* () {
    let {
      data: s2
    } = yield U(r, {
      responseType: "text",
      query: Z(n3, a, o4, i),
      signal: i?.signal
    });
    s2 = s2.replaceAll(/": +(-?\d+),(\d+)(,)?/g, '": $1.$2$3');
    try {
      return JSON.parse(s2);
    } catch (p2) {
      throw new s(P, "Error while parsing the response", {
        response: s2,
        error: p2
      });
    }
  });
}
function Z(e, t, r, n3) {
  const a = "number" == typeof t ? t : t.wkid;
  return __spreadValues({
    SERVICE: "WFS",
    REQUEST: "GetFeature",
    VERSION: F2,
    TYPENAMES: e,
    OUTPUTFORMAT: r,
    SRSNAME: "EPSG:" + a,
    STARTINDEX: n3?.startIndex,
    COUNT: n3?.count
  }, n3?.customParameters);
}
function ee(t, r, n3) {
  return __async(this, null, function* () {
    const a = yield U(t, {
      responseType: "text",
      query: __spreadValues({
        SERVICE: "WFS",
        REQUEST: "GetFeature",
        VERSION: F2,
        TYPENAMES: r,
        RESULTTYPE: "hits"
      }, n3?.customParameters),
      signal: n3?.signal
    }), o4 = /numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(a.data);
    if (o4?.groups) return +o4.groups.numberMatched;
  });
}
function te(e) {
  return new DOMParser().parseFromString(e.trim(), "text/xml");
}
function re(e) {
  const [t, r] = e.split(":");
  return {
    prefix: r ? t : "",
    name: r ?? t
  };
}
function ne(e) {
  const r = e.firstElementChild?.getAttribute("version");
  if (r && r !== F2) throw new s(G2, `Unsupported WFS version ${r}. Supported version: ${F2}`);
}
function ae(e) {
  let r = "", n3 = "";
  if (o3(e.firstElementChild, {
    Exception: (e2) => (r = e2.getAttribute("exceptionCode"), {
      ExceptionText: (e3) => {
        n3 = e3.textContent;
      }
    })
  }), r) throw new s(`wfs-layer:${r}`, n3);
}
function oe(e, t, r) {
  const n3 = {
    wkid: t.defaultSpatialReference
  }, a = null != r?.wkid ? {
    wkid: r.wkid
  } : n3;
  return {
    spatialReference: a,
    getFeatureSpatialReference: p(e) || a.wkid && t.supportedSpatialReferences.includes(a.wkid) ? {
      wkid: a.wkid
    } : {
      wkid: t.defaultSpatialReference
    }
  };
}

export {
  S,
  v,
  Y,
  W,
  z,
  K3 as K,
  ee,
  oe
};
//# sourceMappingURL=chunk-FANZDDJF.js.map
