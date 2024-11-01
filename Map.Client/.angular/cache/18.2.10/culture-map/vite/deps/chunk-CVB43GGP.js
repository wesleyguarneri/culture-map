import {
  DateTime,
  FixedOffsetZone
} from "./chunk-LLDOZWVV.js";
import {
  c,
  h
} from "./chunk-MNLT652N.js";
import {
  i
} from "./chunk-V5C6HSAM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JWIQHGQB.js";

// ../../../node_modules/@arcgis/core/time/legacyTimeZoneMap.js
var a = /* @__PURE__ */ new Map([["AUS Central Standard Time", "Australia/Darwin"], ["AUS Eastern Standard Time", "Australia/Sydney"], ["Afghanistan Standard Time", "Asia/Kabul"], ["Alaskan Standard Time", "America/Anchorage"], ["Aleutian Standard Time", "America/Adak"], ["Altai Standard Time", "Asia/Barnaul"], ["Arab Standard Time", "Asia/Riyadh"], ["Arabian Standard Time", "Asia/Dubai"], ["Arabic Standard Time", "Asia/Baghdad"], ["Argentina Standard Time", "America/Buenos_Aires"], ["Astrakhan Standard Time", "Europe/Astrakhan"], ["Atlantic Standard Time", "America/Halifax"], ["Aus Central W. Standard Time", "Australia/Eucla"], ["Azerbaijan Standard Time", "Asia/Baku"], ["Azores Standard Time", "Atlantic/Azores"], ["Bahia Standard Time", "America/Bahia"], ["Bangladesh Standard Time", "Asia/Dhaka"], ["Belarus Standard Time", "Europe/Minsk"], ["Bougainville Standard Time", "Pacific/Bougainville"], ["Canada Central Standard Time", "America/Regina"], ["Cape Verde Standard Time", "Atlantic/Cape_Verde"], ["Caucasus Standard Time", "Asia/Yerevan"], ["Cen. Australia Standard Time", "Australia/Adelaide"], ["Central America Standard Time", "America/Guatemala"], ["Central Asia Standard Time", "Asia/Bishkek"], ["Central Brazilian Standard Time", "America/Cuiaba"], ["Central Europe Standard Time", "Europe/Budapest"], ["Central European Standard Time", "Europe/Warsaw"], ["Central Pacific Standard Time", "Pacific/Guadalcanal"], ["Central Standard Time", "America/Chicago"], ["Central Standard Time (Mexico)", "America/Mexico_City"], ["Chatham Islands Standard Time", "Pacific/Chatham"], ["China Standard Time", "Asia/Shanghai"], ["Cuba Standard Time", "America/Havana"], ["Dateline Standard Time", "Etc/GMT+12"], ["E. Africa Standard Time", "Africa/Nairobi"], ["E. Australia Standard Time", "Australia/Brisbane"], ["E. Europe Standard Time", "Europe/Chisinau"], ["E. South America Standard Time", "America/Sao_Paulo"], ["Easter Island Standard Time", "Pacific/Easter"], ["Eastern Standard Time", "America/New_York"], ["Eastern Standard Time (Mexico)", "America/Cancun"], ["Egypt Standard Time", "Africa/Cairo"], ["Ekaterinburg Standard Time", "Asia/Yekaterinburg"], ["FLE Standard Time", "Europe/Kiev"], ["Fiji Standard Time", "Pacific/Fiji"], ["GMT Standard Time", "Europe/London"], ["GTB Standard Time", "Europe/Bucharest"], ["Georgian Standard Time", "Asia/Tbilisi"], ["Greenland Standard Time", "America/Godthab"], ["Greenwich Standard Time", "Atlantic/Reykjavik"], ["Haiti Standard Time", "America/Port-au-Prince"], ["Hawaiian Standard Time", "Pacific/Honolulu"], ["India Standard Time", "Asia/Calcutta"], ["Iran Standard Time", "Asia/Tehran"], ["Israel Standard Time", "Asia/Jerusalem"], ["Jordan Standard Time", "Asia/Amman"], ["Kaliningrad Standard Time", "Europe/Kaliningrad"], ["Korea Standard Time", "Asia/Seoul"], ["Libya Standard Time", "Africa/Tripoli"], ["Line Islands Standard Time", "Pacific/Kiritimati"], ["Lord Howe Standard Time", "Australia/Lord_Howe"], ["Magadan Standard Time", "Asia/Magadan"], ["Magallanes Standard Time", "America/Punta_Arenas"], ["Marquesas Standard Time", "Pacific/Marquesas"], ["Mauritius Standard Time", "Indian/Mauritius"], ["Middle East Standard Time", "Asia/Beirut"], ["Montevideo Standard Time", "America/Montevideo"], ["Morocco Standard Time", "Africa/Casablanca"], ["Mountain Standard Time", "America/Denver"], ["Mountain Standard Time (Mexico)", "America/Mazatlan"], ["Myanmar Standard Time", "Asia/Rangoon"], ["N. Central Asia Standard Time", "Asia/Novosibirsk"], ["Namibia Standard Time", "Africa/Windhoek"], ["Nepal Standard Time", "Asia/Katmandu"], ["New Zealand Standard Time", "Pacific/Auckland"], ["Newfoundland Standard Time", "America/St_Johns"], ["Norfolk Standard Time", "Pacific/Norfolk"], ["North Asia East Standard Time", "Asia/Irkutsk"], ["North Asia Standard Time", "Asia/Krasnoyarsk"], ["North Korea Standard Time", "Asia/Pyongyang"], ["Omsk Standard Time", "Asia/Omsk"], ["Pacific SA Standard Time", "America/Santiago"], ["Pacific Standard Time", "America/Los_Angeles"], ["Pacific Standard Time (Mexico)", "America/Tijuana"], ["Pakistan Standard Time", "Asia/Karachi"], ["Paraguay Standard Time", "America/Asuncion"], ["Qyzylorda Standard Time", "Asia/Qyzylorda"], ["Romance Standard Time", "Europe/Paris"], ["Russia Time Zone 10", "Asia/Srednekolymsk"], ["Russia Time Zone 11", "Asia/Kamchatka"], ["Russia Time Zone 3", "Europe/Samara"], ["Russian Standard Time", "Europe/Moscow"], ["SA Eastern Standard Time", "America/Cayenne"], ["SA Pacific Standard Time", "America/Bogota"], ["SA Western Standard Time", "America/La_Paz"], ["SE Asia Standard Time", "Asia/Bangkok"], ["Saint Pierre Standard Time", "America/Miquelon"], ["Sakhalin Standard Time", "Asia/Sakhalin"], ["Samoa Standard Time", "Pacific/Apia"], ["Sao Tome Standard Time", "Africa/Sao_Tome"], ["Saratov Standard Time", "Europe/Saratov"], ["Singapore Standard Time", "Asia/Singapore"], ["South Africa Standard Time", "Africa/Johannesburg"], ["South Sudan Standard Time", "Africa/Juba"], ["Sri Lanka Standard Time", "Asia/Colombo"], ["Sudan Standard Time", "Africa/Khartoum"], ["Syria Standard Time", "Asia/Damascus"], ["Taipei Standard Time", "Asia/Taipei"], ["Tasmania Standard Time", "Australia/Hobart"], ["Tocantins Standard Time", "America/Araguaina"], ["Tokyo Standard Time", "Asia/Tokyo"], ["Tomsk Standard Time", "Asia/Tomsk"], ["Tonga Standard Time", "Pacific/Tongatapu"], ["Transbaikal Standard Time", "Asia/Chita"], ["Turkey Standard Time", "Europe/Istanbul"], ["Turks And Caicos Standard Time", "America/Grand_Turk"], ["US Eastern Standard Time", "America/Indianapolis"], ["US Mountain Standard Time", "America/Phoenix"], ["UTC", "Etc/GMT"], ["UTC+01", "Etc/GMT-1"], ["UTC+02", "Etc/GMT-2"], ["UTC+03", "Etc/GMT-3"], ["UTC+04", "Etc/GMT-4"], ["UTC+05", "Etc/GMT-5"], ["UTC+06", "Etc/GMT-6"], ["UTC+07", "Etc/GMT-7"], ["UTC+08", "Etc/GMT-8"], ["UTC+09", "Etc/GMT-9"], ["UTC+10", "Etc/GMT-10"], ["UTC+11", "Etc/GMT-11"], ["UTC+12", "Etc/GMT-12"], ["UTC+13", "Etc/GMT-13"], ["UTC+14", "Etc/GMT-14"], ["UTC-01", "Etc/GMT+1"], ["UTC-02", "Etc/GMT+2"], ["UTC-03", "Etc/GMT+3"], ["UTC-04", "Etc/GMT+4"], ["UTC-05", "Etc/GMT+5"], ["UTC-06", "Etc/GMT+6"], ["UTC-07", "Etc/GMT+7"], ["UTC-08", "Etc/GMT+8"], ["UTC-09", "Etc/GMT+9"], ["UTC-10", "Etc/GMT+10"], ["UTC-11", "Etc/GMT+11"], ["UTC-12", "Etc/GMT+12"], ["Ulaanbaatar Standard Time", "Asia/Ulaanbaatar"], ["Venezuela Standard Time", "America/Caracas"], ["Vladivostok Standard Time", "Asia/Vladivostok"], ["Volgograd Standard Time", "Europe/Volgograd"], ["W. Australia Standard Time", "Australia/Perth"], ["W. Central Africa Standard Time", "Africa/Lagos"], ["W. Europe Standard Time", "Europe/Berlin"], ["W. Mongolia Standard Time", "Asia/Hovd"], ["West Asia Standard Time", "Asia/Tashkent"], ["West Bank Standard Time", "Asia/Hebron"], ["West Pacific Standard Time", "Pacific/Port_Moresby"], ["Yakutsk Standard Time", "Asia/Yakutsk"], ["Yukon Standard Time", "America/Whitehorse"]]);

// ../../../node_modules/@arcgis/core/time/timeZoneUtils.js
var o = "system";
var r = "unknown";
var i2 = "UTC";
var s = Intl.DateTimeFormat().resolvedOptions().timeZone;
var a2 = "shortOffset";
function m(t) {
  return "timeZoneIANA" in t;
}
function u(t) {
  return t.startsWith("UTC");
}
function c2(t, e = false) {
  return {
    json: {
      read: {
        source: t,
        reader: (e2, n) => n[t] ? f(n[t]) : null
      },
      write: !!e && {
        allowNull: true,
        writer(e2, n) {
          n[t] = e2 ? l(e2) : null;
        }
      }
    }
  };
}
function f(t, e = o) {
  return t ? m(t) ? t.timeZoneIANA : Z(t, e) : e;
}
function l(t) {
  return {
    timeZoneIANA: t
  };
}
function Z(e, n = o) {
  if (!e || !a.has(e.timeZone)) return n;
  const r2 = a.get(e.timeZone);
  return u(e.timeZone) || e.respectsDaylightSaving ? r2 : d(r2);
}
function d(t) {
  const o2 = DateTime.local().setZone(t), r2 = Math.min(o2.set({
    month: 1,
    day: 1
  }).offset, o2.set({
    month: 5
  }).offset);
  if (0 === r2) return "Etc/UTC";
  return `Etc/GMT${FixedOffsetZone.instance(-r2).formatOffset(0, "narrow")}`;
}
function g(t, e, n, o2, s3) {
  if (e && "date" === s3) return {
    timeZone: i2,
    timeZoneName: void 0
  };
  const m2 = o2.timeStyle || o2.hour, u3 = n === r;
  return {
    timeZone: u3 ? "timestamp-offset" === s3 ? void 0 : t ?? i2 : n,
    timeZoneName: u3 && m2 ? a2 : void 0
  };
}

// ../../../node_modules/@arcgis/core/intl/date.js
var s2 = {
  year: void 0,
  month: void 0,
  day: void 0,
  weekday: void 0
};
var l2 = {
  hour: void 0,
  minute: void 0,
  second: void 0
};
var y = {
  timeZone: i2
};
var d2 = {
  year: "numeric",
  month: "numeric",
  day: "numeric"
};
var g2 = {
  year: "numeric",
  month: "long",
  day: "numeric"
};
var u2 = {
  year: "numeric",
  month: "short",
  day: "numeric"
};
var c3 = {
  year: "numeric",
  month: "long",
  weekday: "long",
  day: "numeric"
};
var D = {
  hour: "numeric",
  minute: "numeric"
};
var T = __spreadProps(__spreadValues({}, D), {
  second: "numeric"
});
var f2 = {
  hourCycle: "h23"
};
var S = __spreadValues(__spreadValues({}, D), f2);
var L = __spreadValues(__spreadValues({}, T), f2);
var M = {
  "short-date": d2,
  "short-date-short-time": __spreadValues(__spreadValues({}, d2), D),
  "short-date-short-time-24": __spreadValues(__spreadValues({}, d2), S),
  "short-date-long-time": __spreadValues(__spreadValues({}, d2), T),
  "short-date-long-time-24": __spreadValues(__spreadValues({}, d2), L),
  "short-date-le": d2,
  "short-date-le-short-time": __spreadValues(__spreadValues({}, d2), D),
  "short-date-le-short-time-24": __spreadValues(__spreadValues({}, d2), S),
  "short-date-le-long-time": __spreadValues(__spreadValues({}, d2), T),
  "short-date-le-long-time-24": __spreadValues(__spreadValues({}, d2), L),
  "long-month-day-year": g2,
  "long-month-day-year-short-time": __spreadValues(__spreadValues({}, g2), D),
  "long-month-day-year-short-time-24": __spreadValues(__spreadValues({}, g2), S),
  "long-month-day-year-long-time": __spreadValues(__spreadValues({}, g2), T),
  "long-month-day-year-long-time-24": __spreadValues(__spreadValues({}, g2), L),
  "day-short-month-year": u2,
  "day-short-month-year-short-time": __spreadValues(__spreadValues({}, u2), D),
  "day-short-month-year-short-time-24": __spreadValues(__spreadValues({}, u2), S),
  "day-short-month-year-long-time": __spreadValues(__spreadValues({}, u2), T),
  "day-short-month-year-long-time-24": __spreadValues(__spreadValues({}, u2), L),
  "long-date": c3,
  "long-date-short-time": __spreadValues(__spreadValues({}, c3), D),
  "long-date-short-time-24": __spreadValues(__spreadValues({}, c3), S),
  "long-date-long-time": __spreadValues(__spreadValues({}, c3), T),
  "long-date-long-time-24": __spreadValues(__spreadValues({}, c3), L),
  "long-month-year": {
    month: "long",
    year: "numeric"
  },
  "short-month-year": {
    month: "short",
    year: "numeric"
  },
  year: {
    year: "numeric"
  },
  "short-time": D,
  "long-time": T
};
var Y = i()({
  shortDate: "short-date",
  shortDateShortTime: "short-date-short-time",
  shortDateShortTime24: "short-date-short-time-24",
  shortDateLongTime: "short-date-long-time",
  shortDateLongTime24: "short-date-long-time-24",
  shortDateLE: "short-date-le",
  shortDateLEShortTime: "short-date-le-short-time",
  shortDateLEShortTime24: "short-date-le-short-time-24",
  shortDateLELongTime: "short-date-le-long-time",
  shortDateLELongTime24: "short-date-le-long-time-24",
  longMonthDayYear: "long-month-day-year",
  longMonthDayYearShortTime: "long-month-day-year-short-time",
  longMonthDayYearShortTime24: "long-month-day-year-short-time-24",
  longMonthDayYearLongTime: "long-month-day-year-long-time",
  longMonthDayYearLongTime24: "long-month-day-year-long-time-24",
  dayShortMonthYear: "day-short-month-year",
  dayShortMonthYearShortTime: "day-short-month-year-short-time",
  dayShortMonthYearShortTime24: "day-short-month-year-short-time-24",
  dayShortMonthYearLongTime: "day-short-month-year-long-time",
  dayShortMonthYearLongTime24: "day-short-month-year-long-time-24",
  longDate: "long-date",
  longDateShortTime: "long-date-short-time",
  longDateShortTime24: "long-date-short-time-24",
  longDateLongTime: "long-date-long-time",
  longDateLongTime24: "long-date-long-time-24",
  longMonthYear: "long-month-year",
  shortMonthYear: "short-month-year",
  year: "year"
});
var Z2 = {
  ar: "ar-u-nu-latn-ca-gregory"
};
var w = /* @__PURE__ */ new WeakMap();
var p = M["short-date-short-time"];
function v(t) {
  let e = w.get(t);
  if (!e) {
    const n = c(), a3 = Z2[n] || n, m2 = F(t.timeZone ?? o), h2 = __spreadProps(__spreadValues({}, t), {
      timeZone: m2
    });
    e = new Intl.DateTimeFormat(a3, h2), w.set(t, e);
  }
  return e;
}
function E(t) {
  return M[t];
}
function j(t, e = p) {
  return v(e).format(t);
}
function k(t, e = p) {
  return j(new Date(t), __spreadValues(__spreadValues(__spreadValues({}, e), y), l2));
}
function I(t, e = p) {
  return j(/* @__PURE__ */ new Date(`1970-01-01T${t}Z`), __spreadValues(__spreadValues(__spreadValues({}, e), y), s2));
}
function x(t, e = p) {
  if (e.timeZone) return j(new Date(t), e);
  const r2 = DateTime.fromISO(t, {
    setZone: true
  }), a3 = c(), m2 = Z2[a3] ?? a3, h2 = 0 === r2.offset ? i2 : e.timeZone, s3 = __spreadProps(__spreadValues({}, e), {
    timeZone: h2
  });
  return r2.toLocaleString(s3, {
    locale: m2
  });
}
function F(t) {
  switch (t) {
    case o:
      return s;
    case r:
      return i2;
    default:
      return t;
  }
}
h(() => {
  w = /* @__PURE__ */ new WeakMap();
});

export {
  o,
  r,
  i2 as i,
  a2 as a,
  c2 as c,
  f,
  g,
  Y,
  v,
  E,
  j,
  k,
  I,
  x,
  F
};
//# sourceMappingURL=chunk-CVB43GGP.js.map
