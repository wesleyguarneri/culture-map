import {
  l
} from "./chunk-AJS4B62I.js";
import {
  i
} from "./chunk-CIW3KHOW.js";
import {
  c as c2
} from "./chunk-DR5TVNEL.js";
import {
  c
} from "./chunk-CVB43GGP.js";
import {
  o
} from "./chunk-NQOJNTB3.js";
import {
  r
} from "./chunk-MFOQYQFG.js";
import {
  f
} from "./chunk-V6AMQYXE.js";
import {
  e
} from "./chunk-4Z5SGKRM.js";
import {
  y
} from "./chunk-7CJXZOFG.js";
import {
  a3 as a
} from "./chunk-DDYVXG4F.js";

// ../../../node_modules/@arcgis/core/layers/support/TimeInfo.js
function p(t, e2) {
  return l.fromJSON({
    value: t,
    unit: e2
  });
}
var u = class extends i(f) {
  constructor(t) {
    super(t), this.cumulative = false, this.endField = null, this.fullTimeExtent = null, this.hasLiveData = false, this.interval = null, this.startField = null, this.timeZone = null, this.trackIdField = null, this.useTime = true, this.stops = null;
  }
  readFullTimeExtent(t, r2) {
    return r2.timeExtent && Array.isArray(r2.timeExtent) && 2 === r2.timeExtent.length ? c2.fromArray(r2.timeExtent) : null;
  }
  writeFullTimeExtent(t, e2) {
    null != t?.start && null != t.end ? e2.timeExtent = t.toArray() : e2.timeExtent = null;
  }
  readInterval(t, e2) {
    return e2.timeInterval && e2.timeIntervalUnits ? p(e2.timeInterval, e2.timeIntervalUnits) : e2.defaultTimeInterval && e2.defaultTimeIntervalUnits ? p(e2.defaultTimeInterval, e2.defaultTimeIntervalUnits) : null;
  }
  writeInterval(t, e2) {
    e2.timeInterval = t?.toJSON().value ?? null, e2.timeIntervalUnits = t?.toJSON().unit ?? null;
  }
};
e([y({
  type: Boolean,
  json: {
    name: "exportOptions.timeDataCumulative",
    write: true
  }
})], u.prototype, "cumulative", void 0), e([y({
  type: String,
  json: {
    name: "endTimeField",
    write: {
      enabled: true,
      allowNull: true
    }
  }
})], u.prototype, "endField", void 0), e([y({
  type: c2,
  json: {
    write: {
      enabled: true,
      allowNull: true
    }
  }
})], u.prototype, "fullTimeExtent", void 0), e([o("fullTimeExtent", ["timeExtent"])], u.prototype, "readFullTimeExtent", null), e([r("fullTimeExtent")], u.prototype, "writeFullTimeExtent", null), e([y({
  type: Boolean,
  json: {
    write: true
  }
})], u.prototype, "hasLiveData", void 0), e([y({
  type: l,
  json: {
    write: {
      enabled: true,
      allowNull: true
    }
  }
})], u.prototype, "interval", void 0), e([o("interval", ["timeInterval", "timeIntervalUnits", "defaultTimeInterval", "defaultTimeIntervalUnits"])], u.prototype, "readInterval", null), e([r("interval")], u.prototype, "writeInterval", null), e([y({
  type: String,
  json: {
    name: "startTimeField",
    write: {
      enabled: true,
      allowNull: true
    }
  }
})], u.prototype, "startField", void 0), e([y(c("timeReference", true))], u.prototype, "timeZone", void 0), e([y({
  type: String,
  json: {
    write: {
      enabled: true,
      allowNull: true
    }
  }
})], u.prototype, "trackIdField", void 0), e([y({
  type: Boolean,
  json: {
    name: "exportOptions.useTime",
    write: true
  }
})], u.prototype, "useTime", void 0), e([y({
  type: [Date],
  json: {
    read: false
  }
})], u.prototype, "stops", void 0), u = e([a("esri.layers.support.TimeInfo")], u);
var d = u;

export {
  d
};
//# sourceMappingURL=chunk-K2XCQKCC.js.map
