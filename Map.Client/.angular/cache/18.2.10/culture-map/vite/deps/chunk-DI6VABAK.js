import {
  Fe,
  Ie,
  ge
} from "./chunk-DTUSTSEJ.js";
import {
  E,
  I,
  g,
  i,
  j,
  k,
  x
} from "./chunk-CVB43GGP.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/smartMapping/support/utils.js
var y = {
  years: 365,
  months: 30,
  days: 1,
  hours: 1 / 24,
  minutes: 1 / 1440,
  seconds: 1 / 86400,
  milliseconds: 1 / 864e5
};
function Z(t) {
  return ge(t) || Fe(t) || Ie(t);
}
function N(s, o) {
  const {
    format: a,
    timeZoneOptions: c,
    fieldType: l
  } = o ?? {};
  let m, u;
  if (c && ({
    timeZone: m,
    timeZoneName: u
  } = g(c.layerTimeZone, c.datesInUnknownTimezone, c.viewTimeZone, E(a || "short-date-short-time"), l)), "string" == typeof s && isNaN(Date.parse("time-only" === l ? `1970-01-01T${s}Z` : s))) return s;
  switch (l) {
    case "date-only": {
      const r = E(a || "short-date");
      return "string" == typeof s ? k(s, __spreadValues({}, r)) : j(s, __spreadProps(__spreadValues({}, r), {
        timeZone: i
      }));
    }
    case "time-only": {
      const r = E(a || "short-time");
      return "string" == typeof s ? I(s, r) : j(s, __spreadProps(__spreadValues({}, r), {
        timeZone: i
      }));
    }
    case "timestamp-offset": {
      if (!m && "string" == typeof s && new Date(s).toISOString() !== s) return s;
      const i3 = a || c ? E(a || "short-date-short-time") : void 0, n = i3 ? __spreadProps(__spreadValues({}, i3), {
        timeZone: m,
        timeZoneName: u
      }) : void 0;
      return "string" == typeof s ? x(s, n) : j(s, n);
    }
    default: {
      const r = a || c ? E(a || "short-date-short-time") : void 0;
      return j("string" == typeof s ? new Date(s) : s, r ? __spreadProps(__spreadValues({}, r), {
        timeZone: m,
        timeZoneName: u
      }) : void 0);
    }
  }
}

export {
  Z,
  N
};
//# sourceMappingURL=chunk-DI6VABAK.js.map
