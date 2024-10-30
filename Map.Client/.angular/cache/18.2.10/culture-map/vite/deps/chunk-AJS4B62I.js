import {
  i
} from "./chunk-CIW3KHOW.js";
import {
  m
} from "./chunk-OKJHJ3CY.js";
import {
  o
} from "./chunk-4ZZRP4MA.js";
import {
  i as i2
} from "./chunk-V5C6HSAM.js";
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

// ../../../node_modules/@arcgis/core/portal/timeUnitKebabDictionary.js
var e2 = i2()({
  esriTimeUnitsMilliseconds: "milliseconds",
  esriTimeUnitsSeconds: "seconds",
  esriTimeUnitsMinutes: "minutes",
  esriTimeUnitsHours: "hours",
  esriTimeUnitsDays: "days",
  esriTimeUnitsWeeks: "weeks",
  esriTimeUnitsMonths: "months",
  esriTimeUnitsYears: "years",
  esriTimeUnitsDecades: "decades",
  esriTimeUnitsCenturies: "centuries",
  esriTimeUnitsUnknown: void 0
});

// ../../../node_modules/@arcgis/core/TimeInterval.js
var m2 = class extends i(f) {
  constructor(o2) {
    super(o2), this.unit = "milliseconds", this.value = 0;
  }
  toMilliseconds() {
    return m(this.value, this.unit, "milliseconds");
  }
};
e([o(e2, {
  nonNullable: true
})], m2.prototype, "unit", void 0), e([y({
  type: Number,
  json: {
    write: true
  },
  nonNullable: true
})], m2.prototype, "value", void 0), m2 = e([a("esri.TimeInterval")], m2);
var l = m2;

export {
  e2 as e,
  l
};
//# sourceMappingURL=chunk-AJS4B62I.js.map
