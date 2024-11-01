import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  F,
  o
} from "./chunk-2JI245BP.js";
import {
  DateTime,
  IANAZone
} from "./chunk-N34BRXVM.js";

// ../../../node_modules/@arcgis/core/core/timeUtils.js
var r = {
  milliseconds: 1,
  seconds: 1e3,
  minutes: 6e4,
  hours: 36e5,
  days: 864e5,
  weeks: 6048e5,
  months: 26784e5,
  years: 31536e6,
  decades: 31536e7,
  centuries: 31536e8
};
function o2(r2, o3, i2, c2 = o) {
  const u2 = new IANAZone(F(c2)), a2 = DateTime.fromJSDate(r2, {
    zone: u2
  }), l2 = "decades" === i2 || "centuries" === i2 ? "year" : T(i2);
  return "decades" === i2 && (o3 *= 10), "centuries" === i2 && (o3 *= 100), a2.plus({
    [l2]: o3
  }).toJSDate();
}
function i(e, t, n = "milliseconds") {
  const s = e.getTime(), r2 = m(t, n, "milliseconds");
  return new Date(s + r2);
}
function c(r2, o3, i2 = o) {
  const c2 = new IANAZone(F(i2)), u2 = DateTime.fromJSDate(r2, {
    zone: c2
  });
  if ("decades" === o3 || "centuries" === o3) {
    const e = u2.startOf("year"), {
      year: t
    } = e, n = t - t % ("decades" === o3 ? 10 : 100);
    return e.set({
      year: n
    }).toJSDate();
  }
  const a2 = T(o3);
  return u2.startOf(a2).toJSDate();
}
function u(e, t, n = "milliseconds") {
  const s = new Date(m(t, n, "milliseconds"));
  return s.setUTCFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()), s;
}
function a(e, t = "milliseconds") {
  const n = m(e.getUTCHours(), "hours", "milliseconds"), s = m(e.getUTCMinutes(), "minutes", "milliseconds"), r2 = m(e.getUTCSeconds(), "seconds", "milliseconds");
  return m(n + s + r2 + e.getUTCMilliseconds(), "milliseconds", t);
}
function l(e, t) {
  const n = new Date(e.getTime());
  return n.setUTCFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n;
}
function d(e) {
  const t = /* @__PURE__ */ new Date(0);
  return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), t.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()), t;
}
function m(e, t, n) {
  if (0 === e) return 0;
  return e * r[t] / r[n];
}
function f(e) {
  return e instanceof Date && !isNaN(e.getTime());
}
function g(e, t) {
  return e && t ? e.intersection(t) : e || t;
}
function T(e) {
  switch (e) {
    case "milliseconds":
      return "millisecond";
    case "seconds":
      return "second";
    case "minutes":
      return "minute";
    case "hours":
      return "hour";
    case "days":
      return "day";
    case "weeks":
      return "week";
    case "months":
      return "month";
    case "years":
      return "year";
  }
}

export {
  r,
  o2 as o,
  i,
  c,
  u,
  a,
  l,
  d,
  m,
  f,
  g
};
//# sourceMappingURL=chunk-C2OXE4NQ.js.map
