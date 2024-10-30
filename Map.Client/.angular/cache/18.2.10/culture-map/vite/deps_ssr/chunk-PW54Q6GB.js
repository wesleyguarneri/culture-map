import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  n as n2,
  p
} from "./chunk-GJ3FZNZ2.js";
import {
  C
} from "./chunk-7QV7DHWN.js";
import {
  _,
  d
} from "./chunk-TIRJMGGG.js";
import {
  n2 as n,
  s,
  s2
} from "./chunk-6JFGZTLU.js";
import {
  has
} from "./chunk-2ZJE6ZFX.js";

// ../../../node_modules/@arcgis/core/widgets/support/geolocationUtils.js
var u = () => n.getLogger("esri.widgets.support.geolocationUtils");
var a = {
  maximumAge: 0,
  timeout: 15e3,
  enableHighAccuracy: true
};
function m() {
  const e = has("esri-geolocation");
  return e || u().warn("geolocation-unsupported", "Geolocation unsupported."), e;
}
function l() {
  const e = window.isSecureContext;
  return e || u().warn("insecure-context", "Geolocation requires a secure origin."), e;
}
function g() {
  return m() && l();
}
function p2(e) {
  const o = 15e3;
  return e || (e = a), new Promise((r, i) => {
    setTimeout(() => i(new s2("geolocation:timeout", "getting the current geolocation position timed out")), o), navigator.geolocation.getCurrentPosition(r, i, e ?? void 0);
  });
}
var d2;
function f(e, o) {
  if (d2) return d2(e, o);
  const {
    position: r,
    view: i
  } = e, n3 = v(r), c = n3?.coords;
  if (!c) throw new s2("geometry-service:no-coords", "Geolocation has no coordinates");
  return h(y(c), i, o);
}
function v(e) {
  const t = e && e.coords || {}, o = {
    accuracy: t.accuracy,
    altitude: t.altitude,
    altitudeAccuracy: t.altitudeAccuracy,
    heading: t.heading,
    latitude: t.latitude,
    longitude: t.longitude,
    speed: t.speed
  };
  return e ? {
    coords: o,
    timestamp: e.timestamp
  } : e;
}
function y({
  longitude: e,
  latitude: t,
  altitude: o
}) {
  return new _({
    longitude: e,
    latitude: t,
    z: o || void 0,
    spatialReference: {
      wkid: 4326
    }
  });
}
function h(e, o, r) {
  if (!o) return Promise.resolve(e);
  const n3 = o.spatialReference;
  return n3.isWGS84 ? Promise.resolve(e) : n3.isWebMercator ? Promise.resolve(d(e)) : j(r).then((o2) => {
    if (!o2) throw new s2("geometry-service:missing-url", "Geometry service URL is missing");
    const i = new p({
      geometries: [e],
      outSpatialReference: n3
    });
    return n2(o2, i, r).then((e2) => e2[0]);
  });
}
function j(t) {
  if (s.geometryServiceUrl) return Promise.resolve(s.geometryServiceUrl);
  const o = C.getDefault();
  return o.load(t).catch(() => {
  }).then(() => o.helperServices?.geometry?.url);
}

export {
  g,
  p2 as p,
  f
};
//# sourceMappingURL=chunk-PW54Q6GB.js.map
