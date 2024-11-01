import {
  _
} from "./chunk-O7UDKFOW.js";
import {
  M,
  h,
  l
} from "./chunk-3ZXOUEQG.js";
import {
  s3 as s
} from "./chunk-JJS7PR2U.js";

// ../../../node_modules/@arcgis/core/views/3d/support/earthUtils.js
function u(t, n, o) {
  if (null == n.longitude || null == n.latitude || null == o.longitude || null == o.latitude) throw new Error("Invalid points: no lon/lat");
  return i(t, n.longitude, n.latitude, o.longitude, o.latitude);
}
function i(t, e, r, u2, i2) {
  const s3 = h(r), l3 = h(i2), a2 = s3 - l3, c2 = h(e) - h(u2), d = Math.sin(a2 / 2), h2 = Math.sin(c2 / 2), m = 2 * l(Math.sqrt(d * d + Math.cos(s3) * Math.cos(l3) * h2 * h2)) * t;
  return Math.round(1e4 * m) / 1e4;
}
function s2(t, n, o) {
  const i2 = n.spatialReference, s3 = s(i2), l3 = new _(n.x, t.y, i2), a2 = new _(o.x, t.y, i2), c2 = new _(t.x, n.y, i2), d = new _(t.x, o.y, i2);
  return {
    lon: u(s3.radius, l3, a2),
    lat: u(s3.radius, c2, d)
  };
}
function l2(e, r, u2) {
  const i2 = r / u2, s3 = h(e), l3 = Math.sin(i2 / 2), a2 = Math.cos(s3), c2 = 2 * l(Math.sqrt(l3 * l3 / (a2 * a2)));
  return M(c2);
}
function a(t, n) {
  let o = t / 15;
  return n || (o = Math.round(o)), o;
}
function c(t, n) {
  const o = t?.[0];
  if (null == o) return null;
  n || (n = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }), n.hours = a(o, true);
  const e = n.hours % 1;
  n.hours -= e, n.minutes = 60 * e;
  const r = n.minutes % 1;
  return n.minutes -= r, n.seconds = Math.round(60 * r), n;
}

export {
  s2 as s,
  l2 as l,
  a,
  c
};
//# sourceMappingURL=chunk-IVKE5IFG.js.map
