import {
  t as t2
} from "./chunk-K2S5NWH3.js";
import {
  j
} from "./chunk-YPQWCITS.js";
import {
  D,
  M,
  R,
  U as U2,
  a as a2,
  b,
  c,
  l,
  m,
  o as o3,
  q,
  r as r2,
  w
} from "./chunk-4AU62DQA.js";
import {
  f as f3,
  i as i2
} from "./chunk-YA5CTHMT.js";
import {
  d
} from "./chunk-UFVMJL32.js";
import {
  i
} from "./chunk-CIW3KHOW.js";
import {
  n as n2
} from "./chunk-GAW5JHG4.js";
import {
  y as y2
} from "./chunk-S3IO7V4Q.js";
import {
  o as o2
} from "./chunk-4ZZRP4MA.js";
import {
  f as f2
} from "./chunk-TKPMIAIW.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import {
  U,
  qt
} from "./chunk-SYATLP3H.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  V
} from "./chunk-EITGQLII.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a,
  g2 as g
} from "./chunk-DDYVXG4F.js";
import {
  n2 as n,
  s2 as s,
  t
} from "./chunk-WYIDUUN2.js";
import {
  __async,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/rest/support/NetworkAttribute.js
var m2 = class extends f {
  constructor(t3) {
    super(t3), this.dataType = null, this.name = null, this.parameterNames = null, this.restrictionUsageParameterName = null, this.timeNeutralAttributeName = null, this.trafficSupport = null, this.units = null, this.usageType = null;
  }
};
e([y({
  type: String
})], m2.prototype, "dataType", void 0), e([o2(w, {
  ignoreUnknown: false
})], m2.prototype, "name", void 0), e([y({
  type: [String]
})], m2.prototype, "parameterNames", void 0), e([y({
  type: String
})], m2.prototype, "restrictionUsageParameterName", void 0), e([o2(D, {
  ignoreUnknown: false
})], m2.prototype, "timeNeutralAttributeName", void 0), e([y({
  type: String
})], m2.prototype, "trafficSupport", void 0), e([o2(o3)], m2.prototype, "units", void 0), e([o2(q)], m2.prototype, "usageType", void 0), m2 = e([a("esri.rest.support.NetworkAttribute")], m2);
var u = m2;

// ../../../node_modules/@arcgis/core/rest/support/NetworkDataset.js
var p = class extends f {
  constructor(t3) {
    super(t3), this.buildTime = null, this.name = null, this.networkAttributes = null, this.networkSources = null, this.state = null;
  }
};
e([y({
  type: Number
})], p.prototype, "buildTime", void 0), e([y({
  type: String
})], p.prototype, "name", void 0), e([y({
  type: [u]
})], p.prototype, "networkAttributes", void 0), e([y()], p.prototype, "networkSources", void 0), e([y({
  type: String
})], p.prototype, "state", void 0), p = e([a("esri.rest.support.NetworkDataset")], p);
var i3 = p;

// ../../../node_modules/@arcgis/core/rest/support/NetworkServiceDescription.js
var c2 = class extends f {
  constructor(t3) {
    super(t3), this.accumulateAttributeNames = null, this.attributeParameterValues = null, this.currentVersion = null, this.defaultTravelMode = null, this.directionsLanguage = null, this.directionsLengthUnits = null, this.directionsSupportedLanguages = null, this.directionsTimeAttribute = null, this.hasZ = null, this.impedance = null, this.networkDataset = null, this.supportedTravelModes = null;
  }
  readAccumulateAttributes(t3) {
    return null == t3 ? null : t3.map((t4) => w.fromJSON(t4));
  }
  writeAccumulateAttributes(t3, e2, r3) {
    t3?.length && (e2[r3] = t3.map((t4) => w.toJSON(t4)));
  }
  get capabilities() {
    return {
      supportsNow: (this.currentVersion ?? 10) >= 10.81
    };
  }
  readDefaultTravelMode(t3, e2) {
    const r3 = e2.supportedTravelModes?.find(({
      id: t4
    }) => t4 === e2.defaultTravelMode) ?? e2.supportedTravelModes?.find(({
      itemId: t4
    }) => t4 === e2.defaultTravelMode);
    return r3 ? j.fromJSON(r3) : null;
  }
};
e([y()], c2.prototype, "accumulateAttributeNames", void 0), e([o("accumulateAttributeNames")], c2.prototype, "readAccumulateAttributes", null), e([r("accumulateAttributeNames")], c2.prototype, "writeAccumulateAttributes", null), e([y()], c2.prototype, "attributeParameterValues", void 0), e([y()], c2.prototype, "capabilities", null), e([y()], c2.prototype, "currentVersion", void 0), e([y()], c2.prototype, "defaultTravelMode", void 0), e([o("defaultTravelMode", ["defaultTravelMode", "supportedTravelModes"])], c2.prototype, "readDefaultTravelMode", null), e([y()], c2.prototype, "directionsLanguage", void 0), e([o2(a2)], c2.prototype, "directionsLengthUnits", void 0), e([y()], c2.prototype, "directionsSupportedLanguages", void 0), e([o2(D, {
  ignoreUnknown: false
})], c2.prototype, "directionsTimeAttribute", void 0), e([y()], c2.prototype, "hasZ", void 0), e([o2(w, {
  ignoreUnknown: false
})], c2.prototype, "impedance", void 0), e([y({
  type: i3
})], c2.prototype, "networkDataset", void 0), e([y({
  type: [j]
})], c2.prototype, "supportedTravelModes", void 0), c2 = e([a("esri.rest.support.NetworkServiceDescription")], c2);
var m3 = c2;

// ../../../node_modules/@arcgis/core/rest/networkService.js
var l2 = () => n.getLogger("esri.rest.networkService");
function u2(e2, r3, t3, o4) {
  o4[t3] = [r3.length, r3.length + e2.length], e2.forEach((e3) => {
    r3.push(e3.geometry);
  });
}
function f4(e2, r3) {
  for (let t3 = 0; t3 < r3.length; t3++) {
    const o4 = e2[r3[t3]];
    if (o4 && o4.length) for (const e3 of o4) e3.z = void 0;
  }
  l2().warnOnce("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.");
}
function c3(e2, r3) {
  for (let t3 = 0; t3 < r3.length; t3++) {
    const o4 = e2[r3[t3]];
    if (o4 && o4.length) {
      for (const e3 of o4) if (null != e3 && e3.hasZ) return true;
    }
  }
  return false;
}
function d2(t3, o4, s3) {
  return __async(this, null, function* () {
    if (!t3) throw new s("network-service:missing-url", "Url to Network service is missing");
    const n3 = i2({
      f: "json",
      token: o4
    }, s3), {
      data: l4
    } = yield U(t3, n3), u3 = l4.currentVersion >= 10.4 ? p2(t3, o4, s3) : v(t3, s3), {
      defaultTravelMode: f5,
      supportedTravelModes: c7
    } = yield u3;
    return l4.defaultTravelMode = f5, l4.supportedTravelModes = c7, m3.fromJSON(l4);
  });
}
function v(r3, t3) {
  return __async(this, null, function* () {
    const i4 = i2({
      f: "json"
    }, t3), {
      data: l4
    } = yield U(r3.replace(/\/rest\/.*$/i, "/info"), i4);
    if (!l4?.owningSystemUrl) return {
      supportedTravelModes: [],
      defaultTravelMode: null
    };
    const {
      owningSystemUrl: u3
    } = l4, f5 = qt(u3) + "/sharing/rest/portals/self", {
      data: c7
    } = yield U(f5, i4), d3 = t("helperServices.routingUtilities.url", c7);
    if (!d3) return {
      supportedTravelModes: [],
      defaultTravelMode: null
    };
    const v2 = f3(u3), p5 = /\/solve$/i.test(v2.path) ? "Route" : /\/solveclosestfacility$/i.test(v2.path) ? "ClosestFacility" : "ServiceAreas", m4 = i2({
      f: "json",
      serviceName: p5
    }, t3), h = qt(d3) + "/GetTravelModes/execute", g2 = yield U(h, m4), w2 = [];
    let T = null;
    if (g2?.data?.results?.length) {
      const e2 = g2.data.results;
      for (const r4 of e2) if ("supportedTravelModes" === r4.paramName) {
        if (r4.value?.features) {
          for (const {
            attributes: e3
          } of r4.value.features) if (e3) {
            const r5 = JSON.parse(e3.TravelMode);
            w2.push(r5);
          }
        }
      } else "defaultTravelMode" === r4.paramName && (T = r4.value);
    }
    return {
      supportedTravelModes: w2,
      defaultTravelMode: T
    };
  });
}
function p2(t3, o4, n3) {
  return __async(this, null, function* () {
    try {
      const r3 = i2({
        f: "json",
        token: o4
      }, n3), i4 = qt(t3) + "/retrieveTravelModes", {
        data: {
          supportedTravelModes: l4,
          defaultTravelMode: u3
        }
      } = yield U(i4, r3);
      return {
        supportedTravelModes: l4,
        defaultTravelMode: u3
      };
    } catch (i4) {
      throw new s("network-service:retrieveTravelModes", "Could not get to the NAServer's retrieveTravelModes.", {
        error: i4
      });
    }
  });
}

// ../../../node_modules/@arcgis/core/rest/support/DataLayer.js
var l3 = class extends i(f) {
  constructor(o4) {
    super(o4), this.doNotLocateOnRestrictedElements = null, this.geometry = null, this.geometryType = null, this.name = null, this.spatialRelationship = null, this.type = "layer", this.where = null;
  }
};
e([y({
  type: Boolean,
  json: {
    write: true
  }
})], l3.prototype, "doNotLocateOnRestrictedElements", void 0), e([y({
  types: n2,
  json: {
    read: y2,
    write: true
  }
})], l3.prototype, "geometry", void 0), e([o2(b)], l3.prototype, "geometryType", void 0), e([y({
  type: String,
  json: {
    name: "layerName",
    write: true
  }
})], l3.prototype, "name", void 0), e([o2(R, {
  name: "spatialRel"
})], l3.prototype, "spatialRelationship", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], l3.prototype, "type", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], l3.prototype, "where", void 0), l3 = e([a("esri.rest.support.DataLayer")], l3);
var c4 = l3;

// ../../../node_modules/@arcgis/core/rest/support/NetworkFeatureSet.js
var s2;
var c5 = s2 = class extends d {
  constructor(e2) {
    super(e2), this.doNotLocateOnRestrictedElements = null;
  }
  clone() {
    return new s2(__spreadValues({
      doNotLocateOnRestrictedElements: this.doNotLocateOnRestrictedElements
    }, this.cloneProperties()));
  }
};
e([y({
  type: Boolean,
  json: {
    write: true
  }
})], c5.prototype, "doNotLocateOnRestrictedElements", void 0), c5 = s2 = e([a("esri.rest.support.NetworkFeatureSet")], c5);
var p3 = c5;

// ../../../node_modules/@arcgis/core/rest/support/NetworkUrl.js
var p4 = class extends i(f) {
  constructor(o4) {
    super(o4), this.doNotLocateOnRestrictedElements = null, this.url = null;
  }
};
e([y({
  type: Boolean,
  json: {
    write: true
  }
})], p4.prototype, "doNotLocateOnRestrictedElements", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], p4.prototype, "url", void 0), p4 = e([a("esri.rest.support.NetworkUrl")], p4);
var c6 = p4;

// ../../../node_modules/@arcgis/core/rest/support/RouteParameters.js
var N;
var P = N = class extends i(f) {
  constructor(t3) {
    super(t3), this.accumulateAttributes = null, this.apiKey = null, this.attributeParameterValues = null, this.directionsLanguage = null, this.directionsLengthUnits = null, this.directionsOutputType = null, this.directionsStyleName = null, this.directionsTimeAttribute = null, this.findBestSequence = null, this.geometryPrecision = null, this.geometryPrecisionM = null, this.geometryPrecisionZ = null, this.ignoreInvalidLocations = null, this.impedanceAttribute = null, this.outputGeometryPrecision = null, this.outputGeometryPrecisionUnits = null, this.outputLines = "true-shape", this.outSpatialReference = null, this.overrides = null, this.pointBarriers = null, this.polygonBarriers = null, this.polylineBarriers = null, this.preserveFirstStop = null, this.preserveLastStop = null, this.preserveObjectID = null, this.restrictionAttributes = null, this.restrictUTurns = null, this.returnBarriers = false, this.returnDirections = false, this.returnPolygonBarriers = false, this.returnPolylineBarriers = false, this.returnRoutes = true, this.returnStops = false, this.returnTraversedEdges = null, this.returnTraversedJunctions = null, this.returnTraversedTurns = null, this.returnZ = true, this.startTime = null, this.startTimeIsUTC = true, this.stops = null, this.timeWindowsAreUTC = null, this.travelMode = null, this.useHierarchy = null, this.useTimeWindows = null;
  }
  static from(t3) {
    return g(N, t3);
  }
  readAccumulateAttributes(t3) {
    return null == t3 ? null : t3.map((t4) => w.fromJSON(t4));
  }
  writeAccumulateAttributes(t3, e2, r3) {
    t3?.length && (e2[r3] = t3.map((t4) => w.toJSON(t4)));
  }
  writePointBarriers(t3, e2, r3) {
    k(t3, e2, r3);
  }
  writePolygonBarrier(t3, e2, r3) {
    k(t3, e2, r3);
  }
  writePolylineBarrier(t3, e2, r3) {
    k(t3, e2, r3);
  }
  readRestrictionAttributes(t3) {
    return null == t3 ? null : t3.map((t4) => M.fromJSON(t4));
  }
  writeRestrictionAttributes(t3, e2, r3) {
    t3?.length && (e2[r3] = t3.map((t4) => M.toJSON(t4)));
  }
  readStartTime(t3, e2) {
    const {
      startTime: r3
    } = e2;
    return null == r3 ? null : "now" === r3 ? "now" : new Date(r3);
  }
  writeStartTime(t3, e2) {
    null != t3 && (e2.startTime = "now" === t3 ? "now" : t3.getTime());
  }
  readStops(t3, e2) {
    return C(e2.stops);
  }
  writeStops(t3, e2, r3) {
    k(t3, e2, r3);
  }
};
e([y({
  type: [String],
  json: {
    name: "accumulateAttributeNames",
    write: true
  }
})], P.prototype, "accumulateAttributes", void 0), e([o("accumulateAttributes")], P.prototype, "readAccumulateAttributes", null), e([r("accumulateAttributes")], P.prototype, "writeAccumulateAttributes", null), e([y(t2)], P.prototype, "apiKey", void 0), e([y({
  json: {
    write: true
  }
})], P.prototype, "attributeParameterValues", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], P.prototype, "directionsLanguage", void 0), e([o2(a2)], P.prototype, "directionsLengthUnits", void 0), e([o2(l)], P.prototype, "directionsOutputType", void 0), e([o2(U2)], P.prototype, "directionsStyleName", void 0), e([o2(D, {
  name: "directionsTimeAttributeName",
  ignoreUnknown: false
})], P.prototype, "directionsTimeAttribute", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "findBestSequence", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], P.prototype, "geometryPrecision", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], P.prototype, "geometryPrecisionM", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], P.prototype, "geometryPrecisionZ", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "ignoreInvalidLocations", void 0), e([o2(w, {
  name: "impedanceAttributeName",
  ignoreUnknown: false
})], P.prototype, "impedanceAttribute", void 0), e([y({
  type: Number,
  json: {
    write: true
  }
})], P.prototype, "outputGeometryPrecision", void 0), e([o2(r2)], P.prototype, "outputGeometryPrecisionUnits", void 0), e([o2(c)], P.prototype, "outputLines", void 0), e([y({
  type: f2,
  json: {
    name: "outSR",
    write: true
  }
})], P.prototype, "outSpatialReference", void 0), e([y({
  json: {
    write: true
  }
})], P.prototype, "overrides", void 0), e([y({
  json: {
    name: "barriers",
    write: true
  }
})], P.prototype, "pointBarriers", void 0), e([r("pointBarriers")], P.prototype, "writePointBarriers", null), e([y({
  json: {
    write: true
  }
})], P.prototype, "polygonBarriers", void 0), e([r("polygonBarriers")], P.prototype, "writePolygonBarrier", null), e([y({
  json: {
    write: true
  }
})], P.prototype, "polylineBarriers", void 0), e([r("polylineBarriers")], P.prototype, "writePolylineBarrier", null), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "preserveFirstStop", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "preserveLastStop", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "preserveObjectID", void 0), e([y({
  type: [String],
  json: {
    name: "restrictionAttributeNames",
    write: true
  }
})], P.prototype, "restrictionAttributes", void 0), e([o("restrictionAttributes")], P.prototype, "readRestrictionAttributes", null), e([r("restrictionAttributes")], P.prototype, "writeRestrictionAttributes", null), e([o2(m)], P.prototype, "restrictUTurns", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "returnBarriers", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "returnDirections", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "returnPolygonBarriers", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "returnPolylineBarriers", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "returnRoutes", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "returnStops", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "returnTraversedEdges", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "returnTraversedJunctions", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "returnTraversedTurns", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "returnZ", void 0), e([y({
  json: {
    write: true
  }
})], P.prototype, "startTime", void 0), e([o("startTime")], P.prototype, "readStartTime", null), e([r("startTime")], P.prototype, "writeStartTime", null), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "startTimeIsUTC", void 0), e([y({
  json: {
    write: true
  }
})], P.prototype, "stops", void 0), e([o("stops")], P.prototype, "readStops", null), e([r("stops")], P.prototype, "writeStops", null), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "timeWindowsAreUTC", void 0), e([y({
  type: j,
  json: {
    write: true
  }
})], P.prototype, "travelMode", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "useHierarchy", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], P.prototype, "useTimeWindows", void 0), P = N = e([a("esri.rest.support.RouteParameters")], P);
var O = P;
function J(t3) {
  return t3 && "type" in t3;
}
function L(t3) {
  return t3 && "features" in t3 && "doNotLocateOnRestrictedElements" in t3;
}
function R2(t3) {
  return t3 && "url" in t3;
}
function U3(t3) {
  return t3 && "features" in t3;
}
function C(t3) {
  return J(t3) ? c4.fromJSON(t3) : R2(t3) ? c6.fromJSON(t3) : L(t3) ? p3.fromJSON(t3) : U3(t3) ? d.fromJSON(t3) : null;
}
function k(t3, e2, o4) {
  null != t3 && (e2[o4] = V.isCollection(t3) ? {
    features: t3.toArray().map((t4) => t4.toJSON())
  } : t3.toJSON());
}

export {
  u2 as u,
  f4 as f,
  c3 as c,
  d2 as d,
  O
};
//# sourceMappingURL=chunk-TWSPJWO4.js.map
