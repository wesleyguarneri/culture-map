import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  i
} from "./chunk-DL2B6IFJ.js";
import {
  o
} from "./chunk-6EIBUVMG.js";
import {
  m
} from "./chunk-C2OXE4NQ.js";
import {
  i as i2
} from "./chunk-Y2HYKTTT.js";
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
//# sourceMappingURL=chunk-PLGJMWC5.js.map
