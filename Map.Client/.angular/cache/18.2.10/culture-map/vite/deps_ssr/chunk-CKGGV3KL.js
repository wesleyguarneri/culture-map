import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  A,
  D,
  M,
  N,
  T,
  m,
  p,
  r as r2,
  v,
  w,
  y as y2
} from "./chunk-VVKE6BJ3.js";
import {
  d
} from "./chunk-NVOJILW6.js";
import {
  k
} from "./chunk-KYPTWEOO.js";
import {
  j3 as j
} from "./chunk-ZREJ3Y2F.js";
import {
  i
} from "./chunk-DL2B6IFJ.js";
import {
  o as o2
} from "./chunk-6EIBUVMG.js";
import {
  _
} from "./chunk-TIRJMGGG.js";
import {
  o
} from "./chunk-DCXDXGAR.js";
import {
  r
} from "./chunk-BCCDYCTQ.js";
import {
  f
} from "./chunk-4AZPIP7K.js";
import {
  e
} from "./chunk-NUICEVIH.js";
import {
  y
} from "./chunk-UVNLCXWD.js";
import {
  a3 as a
} from "./chunk-UDMPWVPF.js";

// ../../../node_modules/@arcgis/core/rest/route/utils.js
function r3(r4, i3) {
  if (null == r4) return null;
  const e3 = {}, s2 = new RegExp(`^${i3}`, "i");
  for (const n2 of Object.keys(r4)) if (s2.test(n2)) {
    const s3 = n2.substring(i3.length);
    e3[w.fromJSON(s3)] = r4[n2];
  }
  return e3;
}
function i2(r4, i3, e3) {
  if (null != r4) {
    i3.attributes || (i3.attributes = {});
    for (const s2 in r4) {
      const n2 = w.toJSON(s2);
      i3.attributes[`${e3}${n2}`] = r4[s2];
    }
  }
}
function e2(r4) {
  const i3 = {};
  for (const e3 of Object.keys(r4)) {
    const s2 = e3;
    i3[w.fromJSON(s2)] = r4[e3];
  }
  return i3;
}
function s(r4) {
  const i3 = {};
  for (const e3 of Object.keys(r4)) {
    const s2 = e3;
    i3[w.toJSON(s2)] = r4[e3];
  }
  return i3;
}
function n(t, r4) {
  return null == t || null == r4 ? null : Math.round((t - r4) / 6e4);
}
function o3(t) {
  const r4 = t.toJSON(), i3 = r4;
  return i3.accumulateAttributeNames &&= r4.accumulateAttributeNames?.join(), i3.attributeParameterValues &&= JSON.stringify(r4.attributeParameterValues), i3.barriers &&= JSON.stringify(r4.barriers), i3.outSR &&= r4.outSR?.wkid, i3.overrides &&= JSON.stringify(r4.overrides), i3.polygonBarriers &&= JSON.stringify(r4.polygonBarriers), i3.polylineBarriers &&= JSON.stringify(r4.polylineBarriers), i3.restrictionAttributeNames &&= r4.restrictionAttributeNames?.join(), i3.stops &&= JSON.stringify(r4.stops), i3.travelMode &&= JSON.stringify(r4.travelMode), i3;
}

// ../../../node_modules/@arcgis/core/rest/support/Stop.js
var C;
var S = C = class extends i(f) {
  constructor(e3) {
    super(e3), this.arriveCurbApproach = null, this.arriveTime = null, this.arriveTimeOffset = null, this.bearing = null, this.bearingTol = null, this.cumulativeCosts = null, this.cumulativeDistance = null, this.cumulativeDuration = null, this.curbApproach = null, this.departCurbApproach = null, this.departTime = null, this.departTimeOffset = null, this.distanceToNetworkInMeters = null, this.geometry = null, this.lateDuration = null, this.locationType = null, this.name = null, this.navLatency = null, this.objectId = null, this.popupTemplate = null, this.posAlong = null, this.routeName = null, this.serviceCosts = null, this.serviceDistance = null, this.serviceDuration = null, this.sequence = null, this.sideOfEdge = null, this.snapX = null, this.snapY = null, this.snapZ = null, this.sourceId = null, this.sourceOid = null, this.status = null, this.symbol = null, this.timeWindowEnd = null, this.timeWindowEndOffset = null, this.timeWindowStart = null, this.timeWindowStartOffset = null, this.type = "stop", this.violations = null, this.waitDuration = null, this.wait = null;
  }
  readArriveTimeOffset(e3, t) {
    return n(t.attributes.ArriveTime, t.attributes.ArriveTimeUTC);
  }
  readCumulativeCosts(e3, t) {
    return r3(t.attributes, "Cumul_");
  }
  readDepartTimeOffset(e3, t) {
    return n(t.attributes.DepartTime, t.attributes.DepartTimeUTC);
  }
  readServiceCosts(e3, t) {
    return r3(t.attributes, "Attr_");
  }
  writeServiceCosts(e3, t) {
    i2(e3, t, "Attr_");
  }
  writeTimeWindowEnd(e3, t) {
    null != e3 && (t.attributes || (t.attributes = {}), t.attributes.TimeWindowEnd = e3.getTime());
  }
  writeTimeWindowStart(e3, t) {
    null != e3 && (t.attributes || (t.attributes = {}), t.attributes.TimeWindowStart = e3.getTime());
  }
  readViolations(e3, t) {
    return r3(t.attributes, "Violation_");
  }
  readWait(e3, t) {
    return r3(t.attributes, "Wait_");
  }
  static fromGraphic(e3) {
    return new C({
      arriveCurbApproach: null != e3.attributes.ArrivalCurbApproach ? p.fromJSON(e3.attributes.ArrivalCurbApproach) : null,
      arriveTime: null != e3.attributes.ArrivalTime ? new Date(e3.attributes.ArrivalTime) : null,
      arriveTimeOffset: e3.attributes.ArrivalUTCOffset,
      cumulativeCosts: null != e3.attributes.CumulativeCosts ? e2(JSON.parse(e3.attributes.CumulativeCosts)) : null,
      cumulativeDistance: e3.attributes.CumulativeMeters ?? null,
      cumulativeDuration: e3.attributes.CumulativeMinutes ?? null,
      curbApproach: null != e3.attributes.CurbApproach ? p.fromJSON(e3.attributes.CurbApproach) : null,
      departCurbApproach: null != e3.attributes.DepartureCurbApproach ? p.fromJSON(e3.attributes.DepartureCurbApproach) : null,
      departTime: null != e3.attributes.DepartureTime ? new Date(e3.attributes.DepartureTime) : null,
      departTimeOffset: e3.attributes.DepartureUTCOffset ?? null,
      geometry: e3.geometry,
      lateDuration: e3.attributes.LateMinutes ?? null,
      locationType: null != e3.attributes.LocationType ? v.fromJSON(e3.attributes.LocationType) : null,
      name: e3.attributes.Name,
      objectId: e3.attributes.ObjectID ?? e3.attributes.__OBJECTID,
      popupTemplate: e3.popupTemplate,
      routeName: e3.attributes.RouteName,
      sequence: e3.attributes.Sequence ?? null,
      serviceCosts: null != e3.attributes.ServiceCosts ? e2(JSON.parse(e3.attributes.ServiceCosts)) : null,
      serviceDistance: e3.attributes.ServiceMeters ?? null,
      serviceDuration: e3.attributes.ServiceMinutes ?? null,
      status: null != e3.attributes.Status ? T.fromJSON(e3.attributes.Status) : null,
      symbol: e3.symbol,
      timeWindowEnd: null != e3.attributes.TimeWindowEnd ? new Date(e3.attributes.TimeWindowEnd) : null,
      timeWindowEndOffset: e3.attributes.TimeWindowEndUTCOffset ?? null,
      timeWindowStart: null != e3.attributes.TimeWindowStart ? new Date(e3.attributes.TimeWindowStart) : null,
      timeWindowStartOffset: e3.attributes.TimeWindowStartUTCOffset ?? null,
      waitDuration: e3.attributes.WaitMinutes ?? null
    });
  }
  toGraphic() {
    const e3 = {
      ObjectID: this.objectId,
      ArrivalCurbApproach: null != this.arriveCurbApproach ? p.toJSON(this.arriveCurbApproach) : null,
      ArrivalTime: null != this.arriveTime ? this.arriveTime.getTime() : null,
      ArrivalUTCOffset: this.arriveTimeOffset,
      CumulativeCosts: null != this.cumulativeCosts ? JSON.stringify(s(this.cumulativeCosts)) : null,
      CumulativeMeters: this.cumulativeDistance,
      CumulativeMinutes: this.cumulativeDuration,
      CurbApproach: null != this.curbApproach ? p.toJSON(this.curbApproach) : null,
      DepartureCurbApproach: null != this.departCurbApproach ? p.toJSON(this.departCurbApproach) : null,
      DepartureTime: null != this.departTime ? this.departTime.getTime() : null,
      DepartureUTCOffset: this.departTimeOffset,
      LateMinutes: this.lateDuration,
      LocationType: null != this.locationType ? v.toJSON(this.locationType) : null,
      Name: this.name,
      RouteName: this.routeName,
      Sequence: this.sequence,
      ServiceCosts: null != this.serviceCosts ? JSON.stringify(s(this.serviceCosts)) : null,
      ServiceMeters: this.serviceDistance,
      ServiceMinutes: this.serviceDuration,
      Status: null != this.status ? T.toJSON(this.status) : null,
      TimeWindowEnd: null != this.timeWindowEnd ? this.timeWindowEnd.getTime() : null,
      TimeWindowEndUTCOffset: this.timeWindowEndOffset ?? this.arriveTimeOffset,
      TimeWindowStart: null != this.timeWindowStart ? this.timeWindowStart.getTime() : null,
      TimeWindowStartUTCOffset: this.timeWindowStartOffset ?? this.arriveTimeOffset,
      WaitMinutes: this.waitDuration
    };
    return new d({
      geometry: this.geometry,
      attributes: e3,
      symbol: this.symbol,
      popupTemplate: this.popupTemplate
    });
  }
};
S.fields = [{
  name: "ObjectID",
  alias: "ObjectID",
  type: "esriFieldTypeOID"
}, {
  name: "ArrivalCurbApproach",
  alias: "Arrival Curb Approach",
  type: "esriFieldTypeInteger"
}, {
  name: "ArrivalTime",
  alias: "Arrival Time",
  type: "esriFieldTypeDate"
}, {
  name: "ArrivalUTCOffset",
  alias: "Arrival Time",
  type: "esriFieldTypeInteger"
}, {
  name: "CumulativeCosts",
  alias: "Cumulative Costs",
  type: "esriFieldTypeString"
}, {
  name: "CumulativeMeters",
  alias: "Cumulative Meters",
  type: "esriFieldTypeDouble"
}, {
  name: "CumulativeMinutes",
  alias: "Cumulative Minutes",
  type: "esriFieldTypeDouble"
}, {
  name: "CurbApproach",
  alias: "Curb Approach",
  type: "esriFieldTypeInteger"
}, {
  name: "DepartureCurbApproach",
  alias: "Departure Curb Approach",
  type: "esriFieldTypeInteger"
}, {
  name: "DepartureTime",
  alias: "Departure Time",
  type: "esriFieldTypeDate"
}, {
  name: "DepartureUTCOffset",
  alias: "Departure Time",
  type: "esriFieldTypeInteger"
}, {
  name: "LateMinutes",
  alias: "Minutes Late",
  type: "esriFieldTypeDouble"
}, {
  name: "LocationType",
  alias: "Location Type",
  type: "esriFieldTypeInteger"
}, {
  name: "Name",
  alias: "Name",
  type: "esriFieldTypeString"
}, {
  name: "RouteName",
  alias: "Route Name",
  type: "esriFieldTypeString"
}, {
  name: "Sequence",
  alias: "Sequence",
  type: "esriFieldTypeInteger"
}, {
  name: "ServiceCosts",
  alias: "Service Costs",
  type: "esriFieldTypeString"
}, {
  name: "ServiceMeters",
  alias: "Service Meters",
  type: "esriFieldTypeDouble"
}, {
  name: "ServiceMinutes",
  alias: "Service Minutes",
  type: "esriFieldTypeDouble"
}, {
  name: "Status",
  alias: "Status",
  type: "esriFieldTypeInteger"
}, {
  name: "TimeWindowEnd",
  alias: "Time Window End",
  type: "esriFieldTypeDate"
}, {
  name: "TimeWindowEndUTCOffset",
  alias: "Time Window End Offset",
  type: "esriFieldTypeInteger"
}, {
  name: "TimeWindowStart",
  alias: "Time Window Start",
  type: "esriFieldTypeDate"
}, {
  name: "TimeWindowStartUTCOffset",
  alias: "Time Window Start Offset",
  type: "esriFieldTypeInteger"
}, {
  name: "WaitMinutes",
  alias: "Minutes Wait",
  type: "esriFieldTypeDouble"
}], e([y({
  type: p.apiValues,
  json: {
    read: {
      source: "attributes.ArrivalCurbApproach",
      reader: p.read
    }
  }
})], S.prototype, "arriveCurbApproach", void 0), e([y({
  type: Date,
  json: {
    read: {
      source: "attributes.ArriveTimeUTC"
    }
  }
})], S.prototype, "arriveTime", void 0), e([y()], S.prototype, "arriveTimeOffset", void 0), e([o("arriveTimeOffset", ["attributes.ArriveTime", "attributes.ArriveTimeUTC"])], S.prototype, "readArriveTimeOffset", null), e([y({
  json: {
    name: "attributes.Bearing",
    read: false,
    write: true
  }
})], S.prototype, "bearing", void 0), e([y({
  json: {
    name: "attributes.BearingTol",
    read: false,
    write: true
  }
})], S.prototype, "bearingTol", void 0), e([y()], S.prototype, "cumulativeCosts", void 0), e([o("cumulativeCosts", ["attributes"])], S.prototype, "readCumulativeCosts", null), e([y()], S.prototype, "cumulativeDistance", void 0), e([y()], S.prototype, "cumulativeDuration", void 0), e([y({
  type: p.apiValues,
  json: {
    name: "attributes.CurbApproach",
    read: {
      reader: p.read
    },
    write: {
      writer: p.write
    }
  }
})], S.prototype, "curbApproach", void 0), e([y({
  type: p.apiValues,
  json: {
    read: {
      source: "attributes.DepartCurbApproach",
      reader: p.read
    }
  }
})], S.prototype, "departCurbApproach", void 0), e([y({
  type: Date,
  json: {
    read: {
      source: "attributes.DepartTimeUTC"
    }
  }
})], S.prototype, "departTime", void 0), e([y()], S.prototype, "departTimeOffset", void 0), e([o("departTimeOffset", ["attributes.DepartTime", "attributes.DepartTimeUTC"])], S.prototype, "readDepartTimeOffset", null), e([y({
  json: {
    read: {
      source: "attributes.DistanceToNetworkInMeters"
    }
  }
})], S.prototype, "distanceToNetworkInMeters", void 0), e([y({
  type: _,
  json: {
    write: true
  }
})], S.prototype, "geometry", void 0), e([y()], S.prototype, "lateDuration", void 0), e([y({
  type: v.apiValues,
  json: {
    name: "attributes.LocationType",
    read: {
      reader: v.read
    },
    write: {
      writer: v.write
    }
  }
})], S.prototype, "locationType", void 0), e([y({
  json: {
    name: "attributes.Name"
  }
})], S.prototype, "name", void 0), e([y({
  json: {
    name: "attributes.NavLatency",
    read: false,
    write: true
  }
})], S.prototype, "navLatency", void 0), e([y({
  json: {
    name: "attributes.ObjectID"
  }
})], S.prototype, "objectId", void 0), e([y({
  type: k
})], S.prototype, "popupTemplate", void 0), e([y({
  json: {
    read: {
      source: "attributes.PosAlong"
    }
  }
})], S.prototype, "posAlong", void 0), e([y({
  json: {
    name: "attributes.RouteName"
  }
})], S.prototype, "routeName", void 0), e([y()], S.prototype, "serviceCosts", void 0), e([o("serviceCosts", ["attributes"])], S.prototype, "readServiceCosts", null), e([r("serviceCosts")], S.prototype, "writeServiceCosts", null), e([y()], S.prototype, "serviceDistance", void 0), e([y()], S.prototype, "serviceDuration", void 0), e([y({
  json: {
    name: "attributes.Sequence"
  }
})], S.prototype, "sequence", void 0), e([y({
  type: N.apiValues,
  json: {
    read: {
      source: "attributes.SideOfEdge",
      reader: N.read
    }
  }
})], S.prototype, "sideOfEdge", void 0), e([y({
  json: {
    read: {
      source: "attributes.SnapX"
    }
  }
})], S.prototype, "snapX", void 0), e([y({
  json: {
    read: {
      source: "attributes.SnapY"
    }
  }
})], S.prototype, "snapY", void 0), e([y({
  json: {
    read: {
      source: "attributes.SnapZ"
    }
  }
})], S.prototype, "snapZ", void 0), e([y({
  json: {
    read: {
      source: "attributes.SourceID"
    }
  }
})], S.prototype, "sourceId", void 0), e([y({
  json: {
    read: {
      source: "attributes.SourceOID"
    }
  }
})], S.prototype, "sourceOid", void 0), e([y({
  type: T.apiValues,
  json: {
    read: {
      source: "attributes.Status",
      reader: T.read
    }
  }
})], S.prototype, "status", void 0), e([y({
  types: j
})], S.prototype, "symbol", void 0), e([y({
  type: Date,
  json: {
    name: "attributes.TimeWindowEnd"
  }
})], S.prototype, "timeWindowEnd", void 0), e([r("timeWindowEnd")], S.prototype, "writeTimeWindowEnd", null), e([y()], S.prototype, "timeWindowEndOffset", void 0), e([y({
  type: Date,
  json: {
    name: "attributes.TimeWindowStart"
  }
})], S.prototype, "timeWindowStart", void 0), e([r("timeWindowStart")], S.prototype, "writeTimeWindowStart", null), e([y()], S.prototype, "timeWindowStartOffset", void 0), e([y({
  readOnly: true,
  json: {
    read: false
  }
})], S.prototype, "type", void 0), e([y()], S.prototype, "violations", void 0), e([o("violations", ["attributes"])], S.prototype, "readViolations", null), e([y()], S.prototype, "waitDuration", void 0), e([y()], S.prototype, "wait", void 0), e([o("wait", ["attributes"])], S.prototype, "readWait", null), S = C = e([a("esri.rest.support.Stop")], S);
var w2 = S;

// ../../../node_modules/@arcgis/core/rest/support/TravelMode.js
var b = class extends i(f) {
  constructor(t) {
    super(t), this.attributeParameterValues = null, this.description = null, this.distanceAttributeName = null, this.id = null, this.impedanceAttributeName = null, this.name = null, this.restrictionAttributeNames = null, this.simplificationTolerance = null, this.simplificationToleranceUnits = null, this.timeAttributeName = null, this.type = null, this.useHierarchy = null, this.uturnAtJunctions = null;
  }
  readId(t, r4) {
    return r4.id ?? r4.itemId ?? null;
  }
  readRestrictionAttributes(t, r4) {
    const {
      restrictionAttributeNames: e3
    } = r4;
    return null == e3 ? null : e3.map((t2) => M.fromJSON(t2));
  }
  writeRestrictionAttributes(t, r4, e3) {
    null != t && (r4[e3] = t.map((t2) => M.toJSON(t2)));
  }
};
e([y({
  type: [Object],
  json: {
    write: true
  }
})], b.prototype, "attributeParameterValues", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], b.prototype, "description", void 0), e([o2(y2, {
  ignoreUnknown: false
})], b.prototype, "distanceAttributeName", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], b.prototype, "id", void 0), e([o("id", ["id", "itemId"])], b.prototype, "readId", null), e([o2(w, {
  ignoreUnknown: false
})], b.prototype, "impedanceAttributeName", void 0), e([y({
  type: String,
  json: {
    write: true
  }
})], b.prototype, "name", void 0), e([y({
  type: [String],
  json: {
    write: true
  }
})], b.prototype, "restrictionAttributeNames", void 0), e([o("restrictionAttributeNames")], b.prototype, "readRestrictionAttributes", null), e([r("restrictionAttributeNames")], b.prototype, "writeRestrictionAttributes", null), e([y({
  type: Number,
  json: {
    write: {
      allowNull: true
    }
  }
})], b.prototype, "simplificationTolerance", void 0), e([o2(r2)], b.prototype, "simplificationToleranceUnits", void 0), e([o2(D, {
  ignoreUnknown: false
})], b.prototype, "timeAttributeName", void 0), e([o2(A)], b.prototype, "type", void 0), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], b.prototype, "useHierarchy", void 0), e([o2(m)], b.prototype, "uturnAtJunctions", void 0), b = e([a("esri.rest.support.TravelMode")], b);
var j2 = b;

export {
  j2 as j,
  r3 as r,
  i2 as i,
  e2 as e,
  s,
  n,
  o3 as o,
  w2 as w
};
//# sourceMappingURL=chunk-CKGGV3KL.js.map
