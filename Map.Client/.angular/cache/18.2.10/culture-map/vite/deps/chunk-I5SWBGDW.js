import {
  o
} from "./chunk-YVULORT6.js";
import {
  _ as _2
} from "./chunk-O7UDKFOW.js";
import {
  f as f2
} from "./chunk-TKPMIAIW.js";
import {
  E,
  T,
  _,
  c,
  f,
  g,
  r,
  s as s2
} from "./chunk-JJS7PR2U.js";
import {
  s2 as s
} from "./chunk-WYIDUUN2.js";

// ../../../node_modules/@arcgis/core/geometry/coordinateFormatter.js
function _3() {
  return r();
}
function w() {
  return _();
}
function E2(n2, e) {
  const t = [];
  n2 = (n2 = (n2 = n2.replaceAll(/[\u00B0\u00BA]/g, "^")).replaceAll("′", "'")).replaceAll("″", '"');
  const o2 = R(e);
  return c.dmsToGeog(o2, 1, [n2], t) ? new _2(t[0][0], t[0][1], e || f2.WGS84) : null;
}
function g2(n2) {
  return n2 && _3() ? o(n2) ?? E2(`0° 0' 0" N | ${n2}`)?.longitude ?? null : null;
}
function m(n2) {
  return n2 && _3() ? o(n2) ?? E2(`${n2} | 00° 00' 00" E`)?.latitude ?? null : null;
}
function T2(n2, e, t) {
  const o2 = [], r2 = b(t);
  if (-1 === r2) return console.warn(`invalid conversionMode: ${t}`), null;
  const l = R(e);
  return T.mgrsToGeogExtended(l, 1, [n2], r2, o2) ? new _2(o2[0][0], o2[0][1], e || f2.WGS84) : null;
}
function P(n2, e) {
  const t = [];
  !e && /\(.+27/.test(n2) && (e = f2.GCS_NAD_1927);
  const o2 = R(e);
  return g.usngToGeog(o2, 1, [n2], t) ? new _2(t[0][0], t[0][1], e || f2.WGS84) : null;
}
function G(n2, e, t) {
  const o2 = [], r2 = A(t);
  if (-1 === r2) return console.warn(`invalid conversionMode: ${t}`), null;
  const i = R(e);
  return f.utmToGeog(i, 1, [n2], r2, o2) ? new _2(o2[0][0], o2[0][1], e || f2.WGS84) : null;
}
function k(n2, e, t = 0) {
  const o2 = [[n2.x, n2.y]], i = [], l = R(n2.spatialReference);
  let a = 0;
  switch (e) {
    case "dd":
      a = c.geogToDd(l, 1, o2, t, i);
      break;
    case "ddm":
      a = c.geogToDdm(l, 1, o2, t, i);
      break;
    case "dms":
      a = c.geogToDms(l, 1, o2, t, i);
      break;
    default:
      return console.warn(`invalid format: ${e}`), null;
  }
  return a ? i[0] : null;
}
function p(n2, e, t = 0, o2 = false) {
  const r2 = [[n2.x, n2.y]], l = [], a = R(n2.spatialReference);
  let s3 = b(e);
  if (-1 === s3) return console.warn(`invalid conversionMode: ${e}`), null;
  o2 && (s3 |= T.PE_MGRS_ADD_SPACES);
  return T.geogToMgrsExtended(a, 1, r2, t, false, s3, l) ? l[0] : null;
}
function M(n2, e = 0, t = false) {
  const o2 = [[n2.x, n2.y]], r2 = [], i = R(n2.spatialReference);
  return g.geogToUsng(i, 1, o2, e, false, t, r2) ? r2[0] : null;
}
function v(n2, e, t = false) {
  const o2 = [[n2.x, n2.y]], r2 = [], i = R(n2.spatialReference);
  let l = A(e);
  if (-1 === l) return console.warn(`invalid conversionMode: ${e}`), null;
  t && (l |= f.PE_UTM_OPTS_ADD_SPACES);
  return f.geogToUtm(i, 1, o2, l, r2) ? r2[0] : null;
}
function R(e) {
  let t = null;
  if (e || (e = f2.WGS84), e.wkid) {
    if (t = E.geogcs(e.wkid), !t) throw new s("coordinate-formatter:invalid-spatial-reference", "wkid is not valid");
  } else {
    if (!e.wkt2 && !e.wkt) throw new s("coordinate-formatter:invalid-spatial-reference", "wkid and wkt are missing");
    if (t = E.fromString(s2.PE_TYPE_GEOGCS, e.wkt2 || e.wkt), !t) throw new s("coordinate-formatter:invalid-spatial-reference", "wkt is not valid");
  }
  return t;
}
function b(n2) {
  let e = -1;
  switch (n2) {
    case "automatic":
      e = T.PE_MGRS_STYLE_AUTO;
      break;
    case "new-180-in-zone-01":
      e = T.PE_MGRS_STYLE_NEW | T.PE_MGRS_180_ZONE_1_PLUS;
      break;
    case "new-180-in-zone-60":
      e = T.PE_MGRS_STYLE_NEW;
      break;
    case "old-180-in-zone-01":
      e = T.PE_MGRS_STYLE_OLD | T.PE_MGRS_180_ZONE_1_PLUS;
      break;
    case "old-180-in-zone-60":
      e = T.PE_MGRS_STYLE_OLD;
  }
  return e;
}
function A(n2) {
  let e = -1;
  switch (n2) {
    case "latitude-band-indicators":
      e = f.PE_UTM_OPTS_NONE;
      break;
    case "north-south-indicators":
      e = f.PE_UTM_OPTS_NS;
  }
  return e;
}

export {
  _3 as _,
  w,
  E2 as E,
  g2 as g,
  m,
  T2 as T,
  P,
  G,
  k,
  p,
  M,
  v
};
//# sourceMappingURL=chunk-I5SWBGDW.js.map
